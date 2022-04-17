import { React, useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenContainer from '../../components/ScreenContainer.js';
import ScreenTitle from '../../components/ScreenTitle.js';
import BookOwnerProfileList from '../../components/BookOwnerProfileList.js';
import { AntDesign } from '@expo/vector-icons';

function BookInfoScreen() {
    return(
        <SafeAreaView>
            <ScreenContainer> 
                <TouchableOpacity
                    onPress={() => {}}
                >
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                <View style={styles.container}>
                    <ScreenTitle>Atomic Habits</ScreenTitle>
                    <Text style={styles.text}>James Clear</Text>
                    <Image style={styles.image} source={require("../../../assets/book.png")}/>
                </View>
                <BookOwnerProfileList/>
            </ScreenContainer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        paddingBottom: 25,
    },
    text: {
        fontSize: 16,
        fontFamily: "Poppins_400Regular",
        paddingBottom: 25
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'stretch',
    }
});

export default BookInfoScreen;