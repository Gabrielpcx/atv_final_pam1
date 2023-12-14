import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Home() {
    return (
    <View style={styles.container}>
        <Text style={styles.BV}>BEM VINDO</Text>
        <Text style={styles.corpo}>Seu app para leitura de livros digitais!</Text>
        <Image style={styles.imghome}
            source={require("../assets/imagens/HomeImage/home.png")}
        />
        <StatusBar style="auto" />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3c4349',
        alignItems: 'center',
        padding: 25
    },

    BV: {
        color: 'white',
        fontSize: 24
    },  

    corpo: {
        color:'white',
        fontSize: 20,
        paddingTop: 10
    },
    imghome:{
        width:300,
        height:220,
        marginTop: 50
        
    },
    

});
