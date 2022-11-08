import { View, Text, StyleSheet, Image, Pressable, SafeAreaView } from 'react-native';
import { colors } from './assets/Themes/colors';
import { Themes } from "./assets/Themes";


const AuthButton = ({authFunction}) => {
    return <SafeAreaView style={styles.container}>
    <Pressable style={styles.button} onPress={authFunction}>
    <Image
      source={require('./assets/spotify-logo.png')}
      style={styles.imageStyle}
    />
    <Text style={styles.text}>CONNECT WITH SPOTIFY</Text>
  </Pressable>
  </SafeAreaView>
};

export default AuthButton;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: Themes.colors.background
  },
  button: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    borderRadius:99999,
    backgroundColor:"#1DB954",
    paddingHorizontal: "1%",
    paddingVertical: "1%"
  },
  text: {
    color:"white",
    fontSize: 15,
    fontWeight: "bold"
    

  },
  imageStyle: {
    marginRight: "1%",
    height: "100%",
    width: "7%",
    resizeMode: "contain"
  },
});