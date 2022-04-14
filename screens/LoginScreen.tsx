import {
  StyleSheet,
  ImageBackground,
  View,
  Image,
  Dimensions,
} from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View as TView } from "../components/Themed";
import { RootStackScreenProps } from "../types";
import images from "../assets/images";

const image = { uri: "../" };

export default function LoginScreen({
  navigation,
}: RootStackScreenProps<"LogIn">) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.screen_bg}
        resizeMode="cover"
        style={styles.image}
      >
        <Image source={images.logo} style={styles.toplogo} />
        <View style={styles.bottomview}>
          <Text>asdasdasd</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  toplogo: {
    width: 45,
    height: 60,
    position: "absolute",
    left: Dimensions.get("window").width / 2 - 25,
    top: 50,
  },
  toplogocontainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  bottomview: {
    position: "absolute",
    bottom: 0,
    borderColor: "white",
    width: "100%",
    borderWidth: 1,
  },
});
