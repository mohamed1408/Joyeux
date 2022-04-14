import {
  StyleSheet,
  ImageBackground,
  View,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View as TView } from "../components/Themed";
import { RootStackScreenProps } from "../types";
import images from "../assets/images";
import { useState } from "react";
import { BlurView } from "expo-blur";
import { SafeAreaView } from "react-native-safe-area-context";

const image = { uri: "../" };

export default function OTPScreen({ navigation }: RootStackScreenProps<"OTP">) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.screen_bg}
        resizeMode="cover"
        style={styles.image}
      >
        <Image source={images.logo} style={styles.toplogo} />
        <View style={styles.bottomview}>
          <Text style={styles.titleText}>verify OTP</Text>
          <Text style={styles.note1}>
            We have sent an OTP on{" "}
            <Feather name="edit-3" size={24} color="#faae1d" />
          </Text>
          <Text style={styles.mobileNo}>+91 7032112233</Text>

          <BlurView intensity={50} style={styles.blurContainer}>
            <View style={styles.whitebox}>
              <Text style={styles.otp}>enter otp</Text>
              <SafeAreaView
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                  marginBottom: 35,
                }}
              >
                <TextInput style={styles.input} />
                <TextInput style={styles.input} />
                <TextInput style={styles.input} />
                <TextInput style={styles.input} />
                <TextInput style={styles.input} />
              </SafeAreaView>
            </View>
            <Text style={styles.verified}>
              reading OTP <Text style={styles.time}>05:15</Text>
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                padding: 15,
              }}
            >
              <AntDesign
                style={styles.messageicon}
                name="message1"
                size={20}
                color="#faae1d"
              />
              <Text style={styles.resend}>resend SMS</Text>
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
    borderWidth: 0,
  },
  titleText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginLeft: 23,
    padding: 5,
    fontFamily: "questrial-regular",
  },
  note1: {
    fontSize: 13,
    color: "white",
    marginLeft: 20,
    padding: 10,
    fontFamily: "questrial-regular",
  },
  mobileNo: {
    fontSize: 17,
    color: "white",
    marginLeft: 30,
    marginBottom: 40,
    fontFamily: "questrial-regular",
  },
  blurContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  whitebox: {
    backgroundColor: "white",
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
  },
  otp: {
    color: "#457c78",
    marginTop: 10,
    marginLeft: 20,
    fontFamily: "questrial-regular",
    fontWeight: "bold",
    fontSize: 20,
  },
  verified: {
    color: "#b3b3b3",
    textAlign: "center",
    marginTop: 20,
    fontFamily: "questrial-regular",
  },
  messageicon: {
    textAlign: "center",
    marginRight: 5,
    // padding: 10,
  },
  resend: {
    textAlign: "center",
    fontSize: 15,
    // padding: 10,
    color: "white",
    fontFamily: "questrial-regular",
    fontWeight: "bold",
  },
  time: {
    color: "#faae1d",
    fontWeight: "bold",
  },
  input: {
    height: 40,
    width: 38,
    margin: 8,
    borderWidth: 1,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#eaf4f3",
    borderColor: "#cde8e6",
    elevation: 2,
  },
});
