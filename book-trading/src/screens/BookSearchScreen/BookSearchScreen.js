import React, { useEffect, useState, useCallback } from "react";
import BookTile from "../../components/BookTile.js";
import ScreenContainer from '../../components/ScreenContainer.js';
import ScreenTitle from '../../components/ScreenTitle.js';
import { View, FlatList, TouchableOpacity, RefreshControl } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import ItemDivider from "../../components/ItemDivider.js";
import { firebase } from "../../firebase/config";

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

function BookSearchScreen ({navigation, userData, ...props}) {
  let [ books, setBooks ] = useState([]);
  const [ refreshing, setRefreshing ] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchBooks();
    setRefreshing(false);
  }, []);

  const fetchBooks = async () => {
    const db = firebase.firestore()
    const querySnapshot = await db.collection('books').get();
    const tempBooks = []
    querySnapshot.forEach(doc => {
      tempBooks.push(doc.data());
    });
    tempBooks.reverse();
    setBooks(tempBooks);
  };
  
  useEffect(async () => {
    fetchBooks();
  }, []);
  
  const getBook = (i) => {
    switch(i % 3) {
      case 0:
        return require("../../../assets/t0-book.png")
      case 1:
        return require("../../../assets/t1-book.png")
      case 2:
        return require("../../../assets/t2-book.png")
    }
  }

    return (
        <ScreenContainer>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <ScreenTitle>Books Near You</ScreenTitle>
            <TouchableOpacity
              onPress={() => {console.log('Books Near You: Search button pressed!')}}
            >
              <Ionicons name="search" size={32} color="black" />
            </TouchableOpacity>
          </View>
          <FlatList
            refreshControl={
              <RefreshControl
                colors={['#84CAE7', '#FFE15C']} // android
                tintColor='#84CAE7' // ios
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }
            data={books}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={ItemDivider}
            keyExtractor={(item) => item.bid}
            renderItem={({item, index}) => { 
              if (item.listings.length === 0) {
                return null;
              }
              return <BookTile 
                title={item.bname}
                author={item.author}
                available={item.listings.length}
                listings={item.listings}
                bid={item.bid}
                callback={() => {
                  navigation.navigate("BookInfo", {bid: item.bid});
                }}
                imgSrc={getBook(index)}
            />}}
          />
        </ScreenContainer>
    )
}

export default BookSearchScreen; 