import { React, useState, useEffect } from "react";
import BookOwnerProfile from "./BookOwnerProfile.js"
import { Text, View, FlatList } from "react-native";
import { firebase } from '../firebase/config'
import MyBookTile from './MyBookTile'
// import ItemDivider from '../../components/ItemDivider';

function BookOwnerProfileList({ listings }) {
    console.log (`listings:`, listings)
    let [profiles, setProfileData ] = useState([])

    useEffect( async () => {
        const db = firebase.firestore()

        let tempProfiles = await Promise.all ( 
            listings.map(async(lid) => {
            let querySnapshot = await db.collection("users")
                                    .where("listings", "array-contains", lid)
                                    .get()
            let user_data = []
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(`doc.data(): `, doc.data())
                user_data.push(doc.data())
            });
            
            let list_data = []
            querySnapshot = await db.collection("listings").where("lid", "==", lid).get();
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(`doc.data(): `, doc.data())
                list_data.push(doc.data())
            });

            return {...user_data[0], ...list_data[0]};

        }))
        console.log(`tempProfiles:`, tempProfiles)
        setProfileData(tempProfiles)
    }, [])

    return (
        <View>
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={profiles}
                keyExtractor={item => item.lid}
                // ItemSeparatorComponent={ItemDivider}
                renderItem={({item}) => <MyBookTile 
                    title={item.username}
                    condition={item.condition}
                />}
            />

            {/* <BookOwnerProfile 
                profilePicturePath={require("../../assets/blue-bean.png")}
                username="bruinbooks"
                condition="New"/>
            <BookOwnerProfile 
                profilePicturePath={require("../../assets/yellow-bean.png")}
                username="abcdef"
                condition="Good"/> */}
        </View>
    )
}

export default BookOwnerProfileList; 