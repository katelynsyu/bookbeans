import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        padding: 24,
        fontSize: 24,
        fontFamily: "Poppins_400Regular"
    },
    logo: {
        flex: 1,
        height: 120,
        width: 90,
        alignSelf: "center",
        margin: 30
    },
    input: {
        height: 48,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16,
        fontFamily: "OpenSans_400Regular",
        fontSize: 18
    },
    button: {
        backgroundColor: '#84CAE7',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontWeight: "bold",
        fontFamily: "OpenSans_700Bold",
        fontSize: 18
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d',
        fontFamily: "OpenSans_400Regular",
        fontSize: 16
    },
    footerLink: {
        color: "#84CAE7",
        fontWeight: "bold",
        fontFamily: "OpenSans_700Bold",
        fontSize: 16
    }
})