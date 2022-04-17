import {StyleSheet, Text, View, Image} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";

export default function BookOwnerProfile(props) {
    return (
        <View style={styles.profileContainer}>
            <Image style={styles.profilePicture} source={props.profilePicturePath}/>
            <View>
                <Text style={styles.text}>{props.username}</Text>
                <Text>Condition: {props.condition}</Text>
            </View>
            <TouchableOpacity
                onPress={() => {}}
            >
                <Image style={styles.chatIcon} source={require('../../assets/chat.png')}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: "100%",
        paddingTop: 5,
        paddingBottom: 5,
    },
    profilePicture: {
        width: 100,
        height: 100,
        resizeMode: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    chatIcon: {
        width: 50,
        height: 50,
        resizeMode: 'center',
    }
});