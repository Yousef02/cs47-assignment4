import { StyleSheet, SafeAreaView, Text, Button, View, FlatList, Image, Pressable } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import Element from "./element";
import millisToMinutesAndSeconds from "./utils/millisToMinutesAndSeconds";
import AuthButton from "./authButton";
import MyWebComponent from "./song";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';
import { WebView } from 'react-native-webview';



// const AuthButton = ({ authFunction }) => {
// return <Button title="CONNECT WITH SPOTIFY" onPress={authFunction} />;
// };
const Stack = createStackNavigator();

const renderTrackItem = ({ item, index, navigation }) => (
  <Pressable
      onPress={() => {
        <SafeAreaView style={{ flex: 1 }}>
        <WebView 
          source={{ uri: 'https://reactnative.dev/' }} 
        />
      </SafeAreaView>
      }}>
    <Element
      index={index + 1}
      artist_name={item.artists[0].name}
      song={item.name}
      image={item.album.images[2]}
      album={item.album.name}
      duration={millisToMinutesAndSeconds(item.duration_ms)}
      />
    </Pressable>
);

const List = ({navigation}) => {
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth(true); // static line
  let contentDisplayed;
  if (token) {
    contentDisplayed = 
    <View style={styles.listContainer}>
      <View style={styles.header}>
        <Image
        source={require('./assets/spotify-logo.png')}
        style={styles.logo}
        />
        <Text style={{color:"white", fontSize: 24, fontWeight: "bold"}}>My Top Tracks</Text>
      </View>
      <FlatList
        data={tracks} // the array of data that the FlatList displays
        renderItem={(item) => renderTrackItem(item, navigation)}
        keyExtractor={(item) => item.id} // unique key for each item
      />
    </View>
  } else {
    contentDisplayed = <AuthButton authFunction={getSpotifyAuth} />;
}

return (
 contentDisplayed
)};



export default function App() {
return (
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Main" component={List} />
    <Stack.Screen name="Song" component={MyWebComponent} />
  </Stack.Navigator>
</NavigationContainer>
);
}


const styles = StyleSheet.create({
container: {
height: "100%",
width: "100%",
backgroundColor: Themes.colors.background,
justifyContent: "center",
alignItems: "center",
},

listContainer: {
height: "100%",
width: "100%",
backgroundColor: Themes.colors.background,
},

header: {
flexDirection: "row",
justifyContent: "center",
alignItems:"center",
height: "8%"
},

logo: {
height: "50%",
width: "8%",
marginRight: "2%",
resizeMode:"contain",

}

});