import React from "react";
import BookOwnerProfile from "./BookOwnerProfile.js"
import { View } from "react-native";

function BookOwnerProfileList({ listings }) {
    return (
        <View>
            <BookOwnerProfile 
                profilePicturePath={require("../../assets/blue-bean.png")}
                username="bruinbooks"
                condition="New"/>
            <BookOwnerProfile 
                profilePicturePath={require("../../assets/yellow-bean.png")}
                username="abcdef"
                condition="Good"/>
        </View>
    )
}

export default BookOwnerProfileList; 