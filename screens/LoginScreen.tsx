import {
  StyleSheet,
  ImageBackground,
  View,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";

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
          <Text style={styles.title}>login</Text>
          <Text style={styles.subtitle}>
            Enter valid mobile number, we will send you an OTP for verifaction.
          </Text>

          <BlurView intensity={50} style={styles.card}>
            <View style={styles.cardbody}>
              <Text style={[styles.cardtitle]}>mobile number</Text>

              <View style={styles.inputcontainer}>
                <TextInput style={[styles.input, { flex: 2 }]} value="+91" />
                <TextInput
                  style={[styles.input, { flex: 8 }]}
                  value="7032112233"
                />
              </View>
            </View>

            <View style={styles.cardfooter}>
              <TouchableOpacity style={styles.btn}>
                <LinearGradient
                  style={styles.linearbg}
                  key={"asdsad"}
                  colors={["#f44e4e", "#fdbe20"]}
                  start={[0, 1]}
                  end={[1, 0]}
                >
                  <Text style={styles.btntext}>get OTP</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </BlurView>
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
    borderWidth: 0,
    padding: 20,
    paddingBottom: 0,
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "questrial-regular",
    paddingHorizontal: 15,
  },
  subtitle: {
    color: "white",
    marginTop: 10,
    fontFamily: "questrial-regular",
    lineHeight: 20,
    fontSize: 17,
    paddingHorizontal: 15,
  },
  card: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 15,
    marginTop: 50,
    paddingHorizontal: 15,
  },
  cardbody: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
  },
  cardtitle: {
    color: "#457c78",
    fontWeight: "bold",
    fontSize: 20,
  },
  inputcontainer: {
    backgroundColor: "#eaf4f3",
    borderColor: "#cde8e6",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 20,
    flex: 1,
    flexDirection: "row",
  },
  input: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#00a89b",
    letterSpacing: 3,
  },
  cardfooter: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 25,
  },
  btn: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 50,
    width: "80%",
  },
  linearbg: {
    width: "100%",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  btntext: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
