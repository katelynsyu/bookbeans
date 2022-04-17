import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import { firebase } from "../firebase/config";

function MyBookTile (props){
    const deleteListing = async () => {
        console.log("Deleting Books")
        const lid = props.lid;
        const bid = props.bid;
        const uid = props.uid;
        let db = firebase.firestore();
        db.collection("listings").doc(lid).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
        
        let userDocRef = db.collection("users").doc(uid);
        userDocRef.update({
            listings: firebase.firestore.FieldValue.arrayRemove(lid)
        })

        let bookDocRef = db.collection("books").doc(bid);
        bookDocRef.update({
            listings: firebase.firestore.FieldValue.arrayRemove(lid)
        })
        props.callback();
    }
    return (
        <View style={styles.bookTileContainer}> 
        <View style={styles.bookInfoContainer}>
            <Image style={styles.image} source={require(`../../assets/t0-book.png`)}/>
            <View style={styles.infoContainer}>
                <Text style = {styles.titleText}>{props.title}</Text>
                <Text style = {styles.authorText}>{props.author}</Text>
                <Text style = {styles.conditionText}>Condition: {props.condition}</Text>
            </View>
        </View>
        <TouchableOpacity
            style={styles.deleteButton}
            onPress={deleteListing}
        >
            <Feather name="trash-2" size={24} color="#c5c5c5" />
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    bookTileContainer: {
        padding: 24,
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-around',
        width: "100%",
    },
    bookInfoContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    infoContainer: {
        width: "70%",
        alignItems: 'center',
        paddingLeft: 16
    },
    titleText: {
        fontFamily: "OpenSans_600SemiBold",
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 22,
    },
    authorText: {
        fontFamily: "OpenSans_400Regular",
        fontSize: 16,
        textAlign: 'center',
        paddingBottom: 10
    },
    conditionText: {
        fontSize: 14,
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.6)',
        fontFamily: "OpenSans_400Regular"
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'center'
    },
    deleteButton: {
        padding: 8,
        width: '30%',
        justifyContent: 'center',
        alignItems: 'flex-end'
    }
});

export default MyBookTile; 