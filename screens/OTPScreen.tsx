import {
  StyleSheet,
  ImageBackground,
  View,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View as TView } from "../components/Themed";
import { RootStackScreenProps } from "../types";
import images from "../assets/images";
import React, { useRef, useEffect, useState } from "react";
import { BlurView } from "expo-blur";
import { SafeAreaView } from "react-native-safe-area-context";

const image = { uri: "../" };

export default function OTPScreen({ navigation }: RootStackScreenProps<"OTP">) {
  let inputRef1 = useRef(null);
  let inputRef2 = useRef(null);
  let inputRef3 = useRef(null);
  let inputRef4 = useRef(null);
  let inputRef5 = useRef(null);

  const [otp, setOTP] = useState("");
  const [verify, setVerify] = useState(0);

  useEffect(() => {
    console.log(otp);
    if (otp == "") {
      setVerify(0);
    } else if (otp.length == 5) {
      verifyOTP(otp);
    }
  });

  const focusNext = (text: any, nextInput: any) => {
    if (nextInput != null && text) nextInput.current.focus();
    if (text) setOTP(otp + text);
    else setOTP(otp.slice(0, -1));
  };

  const focusPrev = (e: any, prevInput: any) => {
    if (e.nativeEvent.key == "Backspace" && prevInput != null)
      prevInput.current.focus();
  };

  const verifyOTP = (otp: string) => {
    if (otp == "23578") setVerify(2);
    else {
      setVerify(1);
      setTimeout(() => {
        logIn();
      }, 500);
    }
  };

  const logIn = () => {
    navigation.navigate("Name");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.screen_bg}
        resizeMode="cover"
        style={styles.image}
      >
        <Image source={images.logo} style={styles.toplogo} />
        <View style={styles.bottomview}>
          <Text style={styles.title}>verify OTP</Text>
          <View style={{ flex: 1, flexDirection: "row", paddingLeft: 15 }}>
            <Text style={styles.subtitle}>We have sent an OTP on </Text>
            <TouchableOpacity>
              <Feather name="edit-3" size={24} color="#faae1d" />
            </TouchableOpacity>
          </View>
          <Text
            style={[
              styles.subtitle,
              {
                fontSize: 20,
                color: "white",
                fontWeight: "700",
                marginTop: 10,
                paddingLeft: 15,
              },
            ]}
          >
            +91 7032112233
          </Text>

          {/* <Text style={styles.titleText}>verify OTP</Text>
          <Text style={styles.note1}>
            We have sent an OTP on{" "}
            <Feather name="edit-3" size={24} color="#faae1d" />
          </Text> */}
          {/* <Text style={styles.mobileNo}>+91 7032112233</Text> */}

          <BlurView intensity={50} style={styles.card}>
            <View style={styles.cardbody}>
              <Text style={[styles.cardtitle]}>enter otp</Text>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={styles.inputcontainer}>
                  <TextInput
                    ref={inputRef1}
                    value={otp[0]}
                    selectTextOnFocus={true}
                    onChangeText={(text) => focusNext(text, inputRef2)}
                    onKeyPress={(e) => focusPrev(e, null)}
                    keyboardType="number-pad"
                    maxLength={1}
                    style={[styles.input, { flex: 2 }]}
                  />
                </View>
                <View style={styles.inputcontainer}>
                  <TextInput
                    ref={inputRef2}
                    value={otp[1]}
                    selectTextOnFocus={true}
                    onChangeText={(text) => focusNext(text, inputRef3)}
                    onKeyPress={(e) => focusPrev(e, inputRef1)}
                    keyboardType="number-pad"
                    maxLength={1}
                    style={[styles.input, { flex: 2 }]}
                  />
                </View>
                <View style={styles.inputcontainer}>
                  <TextInput
                    ref={inputRef3}
                    value={otp[2]}
                    selectTextOnFocus={true}
                    onChangeText={(text) => focusNext(text, inputRef4)}
                    onKeyPress={(e) => focusPrev(e, inputRef2)}
                    keyboardType="number-pad"
                    maxLength={1}
                    style={[styles.input, { flex: 2 }]}
                  />
                </View>
                <View style={styles.inputcontainer}>
                  <TextInput
                    ref={inputRef4}
                    value={otp[3]}
                    selectTextOnFocus={true}
                    onChangeText={(text) => focusNext(text, inputRef5)}
                    onKeyPress={(e) => focusPrev(e, inputRef3)}
                    keyboardType="number-pad"
                    maxLength={1}
                    style={[styles.input, { flex: 2 }]}
                  />
                </View>
                <View style={styles.inputcontainer}>
                  <TextInput
                    ref={inputRef5}
                    value={otp[4]}
                    selectTextOnFocus={true}
                    onChangeText={(text) => focusNext(text, null)}
                    onKeyPress={(e) => focusPrev(e, inputRef4)}
                    keyboardType="number-pad"
                    maxLength={1}
                    style={[styles.input, { flex: 2 }]}
                  />
                </View>
              </View>
            </View>

            <View style={styles.cardfooter}>
              {verify == 0 && (
                <Text style={styles.verified}>
                  reading OTP <Text style={styles.time}>05:15</Text>
                </Text>
              )}
              {verify == 1 && (
                <Text
                  style={[
                    styles.verified,
                    { color: "#00ac00", fontSize: 15, fontWeight: "600" },
                  ]}
                >
                  OTP verified!
                </Text>
              )}
              {verify == 2 && (
                <Text style={[styles.verified, { color: "red" }]}>
                  invalid OTP
                </Text>
              )}
              {[0, 2].includes(verify) && (
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
                  <TouchableOpacity>
                    <Text style={styles.resend}>resend SMS</Text>
                  </TouchableOpacity>
                </View>
              )}
              {[1].includes(verify) && (
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    padding: 15,
                  }}
                >
                  <Text style={[styles.verified, { color: "white" }]}>
                    please wait...
                  </Text>
                </View>
              )}
              {/* <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  navigation.navigate("OTP");
                }}
              >
                <LinearGradient
                  style={styles.linearbg}
                  key={"asdsad"}
                  colors={["#f44e4e", "#fdbe20"]}
                  start={[0, 1]}
                  end={[1, 0]}
                >
                  <Text style={styles.btntext}>get OTP</Text>
                </LinearGradient>
              </TouchableOpacity> */}
            </View>
          </BlurView>

          {/* <BlurView intensity={50} style={styles.blurContainer}>
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
          </BlurView> */}
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
    padding: 20,
    paddingBottom: 0,
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "questrial-regular",
    paddingLeft: 15,
  },
  subtitle: {
    color: "white",
    marginTop: 10,
    fontFamily: "questrial-regular",
    // lineHeight: 20,
    fontSize: 17,
    // paddingHorizontal: 15,
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
  // input: {
  //   height: 40,
  //   width: 38,
  //   margin: 8,
  //   borderWidth: 1,
  //   borderBottomLeftRadius: 8,
  //   borderBottomRightRadius: 8,
  //   borderTopLeftRadius: 8,
  //   borderTopRightRadius: 8,
  //   backgroundColor: "#eaf4f3",
  //   borderColor: "#cde8e6",
  //   elevation: 2,
  // },

  //from login
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
    // borderWidth: 2,
    // margin: 10,
    marginVertical: 20,
    flex: 1,
    flexDirection: "row",
  },
  input: {
    backgroundColor: "#eaf4f3",
    borderColor: "#cde8e6",
    borderWidth: 2,
    borderRadius: 10,
    elevation: 2,
    height: 50,
    width: 50,
    padding: 15,
    margin: 5,
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
