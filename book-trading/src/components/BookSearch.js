import React from "react";
import BookTile from "./BookTile.js"
import { View } from "react-native"

function BookSearch () {
    return (
        <View>
            <BookTile title="Atomic Habits" author="James Clear" available="2"/>
            <BookTile title="Why We Sleep" author="Matthew Walker" available="3"/>
            <BookTile title="Harry Potter and the Prison of Azkaban" author="J.K. Rowling" available="5"/>
            <BookTile title="Nothing to Envy: Ordinary Lives in North Korea" author="Barbara Demick" available="1"/>
        </View>
    )
}

export default BookSearch; 