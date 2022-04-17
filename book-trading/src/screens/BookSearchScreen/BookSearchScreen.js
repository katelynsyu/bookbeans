import React, { useEffect, useState } from "react";
import BookTile from "../../components/BookTile.js";
import ScreenContainer from '../../components/ScreenContainer.js';
import ScreenTitle from '../../components/ScreenTitle.js';
import { View, FlatList, TouchableOpacity } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import ItemDivider from "../../components/ItemDivider.js";
import { firebase } from "../../firebase/config";


function BookSearchScreen ({navigation, userData, ...props}) {
  let [ books, setBooks ] = useState([])
  
  useEffect(async () => {
    const db = firebase.firestore()
    const querySnapshot = await db.collection('books').get();
    const tempBooks = []
    querySnapshot.forEach(doc => {
      tempBooks.push(doc.data());
    });
    setBooks(tempBooks);
  }, []);

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
            data={books}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={ItemDivider}
            keyExtractor={(item) => item.bid}
            renderItem={({item}) => { 
              return <BookTile 
                title={item.bname}
                author={item.author}
                available={item.listings.length}
                listings={item.listings}
                bid={item.bid}
                callback={() => {
                  navigation.navigate("BookInfo", {bid: item.bid});
                }}
            />}}
          />
        </ScreenContainer>
    )
}

export default BookSearchScreen; 