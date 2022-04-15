import {
  StyleSheet,
  ImageBackground,
  View,
  Image,
  Dimensions,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Feather, AntDesign, Entypo } from "@expo/vector-icons";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View as TView } from "../components/Themed";
import { RootStackScreenProps } from "../types";
import images from "../assets/images";
import React, { useState } from "react";
import { BlurView } from "expo-blur";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const image = { uri: "../" };

export default function NameScreen({
  navigation,
}: RootStackScreenProps<"Name">) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.screen_bg}
        resizeMode="cover"
        style={styles.image}
      >
        <Image source={images.logo} style={styles.toplogo} />
        <View style={styles.bottomview}>
          <Text style={styles.titleText}>what's your name?</Text>
          <Text style={styles.note1}>
            please enter full name as per your National ID
          </Text>

          <BlurView intensity={50} style={styles.blurContainer}>
            <View style={styles.whitebox}>
              <SafeAreaView
                style={{
                  flex: 1,
                  justifyContent: "center",
                  marginBottom: 35,
                  marginLeft: 10,
                }}
              >
                <Text style={styles.name}>first name</Text>
                <TextInput style={styles.input} />
                <Text style={styles.name}>last name</Text>
                <TextInput style={styles.input} />
              </SafeAreaView>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                padding: 15,
              }}
            >
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate("Home")}
              >
                <LinearGradient
                  style={styles.linearbg}
                  key={"asdsad"}
                  colors={["#f44e4e", "#fdbe20"]}
                  start={[0, 1]}
                  end={[1, 0]}
                >
                  <Entypo
                    name="chevron-thin-right"
                    size={24}
                    color="white"
                    style={{ fontWeight: "bold" }}
                  />
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
  name: {
    color: "#457c78",
    marginTop: 10,
    marginLeft: 9,
    fontFamily: "questrial-regular",
    fontWeight: "bold",
    fontSize: 17,
  },

  input: {
    height: 45,
    width: 258,
    margin: 8,
    borderWidth: 1,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#eaf4f3",
    borderColor: "#cde8e6",
    elevation: 2,
    fontSize: 18,
    fontWeight: "bold",
    color: "#00a89b",
    fontFamily: "questrial-regular",
    paddingHorizontal: 15,
  },
  btn: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 50,
    width: "40%",
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
