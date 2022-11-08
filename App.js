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
import Preview from "./songPreview";
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { colors } from './assets/Themes/colors';





const Stack = createStackNavigator();

const renderTrackItem = (props, navigation) => {
  const { item, index  } = props;
  return ( 
    <View style={styles.container}>

      <Pressable style={{justifyContent:'center', alignSelf:'auto'}} onPress= {(e) => {
        e.stopPropagation();
        navigation.navigate('PreviewScreen', {
          address: item.preview_url,
        });
      }}>
        <AntDesign name="play" size={22} color={colors.spotify}/>
      </Pressable>

      <Pressable
        onPress= {() => {
          navigation.navigate('Song', {
            address: item.external_urls.spotify,
          });
        }}>
        <Element
          previewUrl={item.preview_url}
          index={index + 1}
          artist_name={item.artists[0].name}
          song={item.name}
          image={item.album.images[2]}
          album={item.album.name}
          duration={millisToMinutesAndSeconds(item.duration_ms)}
        />
      </Pressable>
    </View>
)};

const List = ({navigation}) => {
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth(); // static line
  let contentDisplayed;
  
  if (token) {
    contentDisplayed = 
    <SafeAreaView style={styles.listContainer}>
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
    </SafeAreaView>
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
      <Stack.Screen name="Main" component={List} options={{headerShown: false}}/>
      <Stack.Screen name="Song" component={MyWebComponent} />
      <Stack.Screen name="PreviewScreen" component={Preview} />
    </Stack.Navigator>
  </NavigationContainer>
);}





const styles = StyleSheet.create({
container: {
  flexDirection: 'row',
  alignContent: 'center',
  alignItems: 'center',
  marginLeft: '2%',
  width: '100%'
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