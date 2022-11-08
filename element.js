import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useSpotifyAuth } from "./utils";
import { Themes } from './assets/Themes';
import themes from './assets/Themes/themes';
import { colors } from './assets/Themes/colors';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import {WebView} from 'react-native-webview';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Element = ({index, song, artist_name, album, duration, image, previewUrl}) => {
  return (
    <View style={styles.container}>
      {/* <Pressable style={{marginRight: '2%'}} onPress= {(e) => {
        e.stopPropagation();
        navigation.navigate('PreviewScreen', {
          address: previewUrl,
        });
      }}>
      <AntDesign name="play" size={22} color={colors.spotify}/>
      </Pressable> */}
      {/* <Text style={styles.index}> {index} </Text> */}
      <View style={{width:"20%", marginLeft: 1}}>
      <Image
      source={image}
      style={styles.imageStyle}
      />
      </View>
      <View style={{width:"43%", marginRight:2, marginRight:4}} numberOfLines={1}>
      <Text style={{color: 'white'}} numberOfLines={1}> {song} </Text>
      <Text style={{color: colors.gray}}> {artist_name} </Text>
      </View>
      <Text style={{color: 'white', width: "20%", marginRight: 2}} numberOfLines={1}> {album} </Text>
      <Text style={{color: 'white'}} numberOfLines={1}> {duration} </Text>

    </View>
  );
};

export default Element;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
    paddingHorizontal: '3%',
    borderWidth: 0,
    marginBottom: "3%"
  },
  index: {
    color:"grey",
    marginRight: "2%",
  },
  imageStyle: {

  },
  index: {
    color:"grey",
    marginRight: "2%",
  },
});