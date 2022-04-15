import {
  AntDesign,
  Feather,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { BlurView } from "expo-blur";

import images from "../assets/images";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View as TView } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { LinearGradient } from "expo-linear-gradient";

const DATA = [
  {
    id: "b14b4403-23d6-470a-b9e9-d85ad144482b",
    icon: <MaterialCommunityIcons name="gold" size={30} color="#fa9830" />,
    title: "Digital Gold",
  },
  {
    id: "a2097c8a-9b6b-475e-b421-2fde5ee136f5",
    icon: <FontAwesome5 name="piggy-bank" size={30} color="#fa9830" />,
    title: "SIP",
  },
  {
    id: "19512dcc-5941-43d0-ace5-bfa23c1cf9ed",
    icon: <FontAwesome5 name="money-bill-alt" size={30} color="#fa9830" />,
    title: "Stocks",
  },
  {
    id: "c0bdd9ec-3429-43d4-a51d-ac8a639f4296",
    icon: <MaterialCommunityIcons name="gold" size={30} color="#fa9830" />,
    title: "Mutual Funds",
  },
  {
    id: "8a2bd98d-9692-48ff-ae1e-244ad56c7193",
    icon: <FontAwesome5 name="hand-holding-heart" size={30} color="#fa9830" />,
    title: "Insurance",
  },
];

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  const renderItem = ({
    item,
  }: {
    item: { id: string; icon: any; title: string };
  }) => (
    <View
      style={{
        backgroundColor: "white",
        borderRadius: 10,
        maxHeight: 80,
        margin: 5,
        width: 80,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {item.icon}
      <Text
        style={{
          color: "#457c78",
          fontSize: 10,
          fontFamily: "questrial-regular",
        }}
      >
        {item.title}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.screen_bg}
        resizeMode="cover"
        style={styles.image}
      >
        <Image source={images.logo} style={styles.toplogo} />
        <View
          style={{
            // borderWidth: 1,
            height: "100%",
            flex: 1,
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <View
            style={{
              width: "100%",
              marginTop: 50,
              height: 60,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity style={{ padding: 15 }}>
              <Feather name="menu" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 15 }}>
              <SimpleLineIcons name="bell" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "100%",
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#cbe6e4",
                fontFamily: "questrial-regular",
                fontSize: 20,
              }}
            >
              Welcome back!
            </Text>
            <Text
              style={{
                color: "#ffff",
                fontFamily: "questrial-regular",
                fontSize: 30,
                fontWeight: "600",
                marginTop: 10,
              }}
            >
              Santhosh Katta
            </Text>
          </View>
          <BlurView intensity={5} tint={"dark"} style={styles.dashcard}>
            <BlurView
              intensity={0}
              style={{
                flex: 1,
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "column",
                borderRightWidth: 0.5,
                borderColor: "#518f69",
                // borderWidth: 1,
                // margin: 15,
              }}
            >
              <Text
                style={{
                  color: "#ffff",
                  fontFamily: "questrial-regular",
                  fontSize: 15,
                }}
              >
                Total Balance
              </Text>
              <Text
                style={{
                  color: "#ffff",
                  fontFamily: "questrial-regular",
                  fontSize: 20,
                  fontWeight: "bold",
                  //   marginBottom: 10,
                }}
              >
                $0.00
              </Text>
            </BlurView>
            <BlurView
              intensity={0}
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BlurView
                intensity={0}
                style={{
                  flex: 1,
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "column",
                  //   borderWidth: 1,
                  height: "100%",
                  //   paddingHorizontal: 20,
                }}
              >
                <Text
                  style={{
                    color: "#ffff",
                    fontFamily: "questrial-regular",
                    fontSize: 15,
                  }}
                >
                  Profits
                </Text>
                <Text
                  style={{
                    color: "#ffff",
                    fontFamily: "questrial-regular",
                    fontSize: 20,
                    fontWeight: "bold",
                    //   marginBottom: 10,
                  }}
                >
                  +0%
                </Text>
              </BlurView>
              <BlurView intensity={0} style={{ flex: 1 }}>
                <Image source={images.wallet} style={styles.wallet} />
                <TouchableOpacity style={styles.btn}>
                  <LinearGradient
                    style={styles.linearbg}
                    key={"asdsad"}
                    colors={["#00ac9e", "#008d82"]}
                  >
                    <Text style={styles.btntext}>Add</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </BlurView>
            </BlurView>
          </BlurView>

          <BlurView intensity={50} style={styles.card}>
            <View style={{ flex: 1 }}>
              <FlatList
                style={{}}
                horizontal
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            </View>
            <View style={styles.cardbody}>
              <View
                style={{
                  flex: 1,
                  //   borderWidth: 1,
                  borderTopLeftRadius: 20,
                  borderBottomLeftRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome5 name="money-bill-alt" size={30} color="#fa9830" />
              </View>
              <View
                style={{
                  flex: 3,
                  //   borderWidth: 1,
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 20,
                  padding: 5,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 17,
                    color: "#00a89b",
                    fontFamily: "questrial-regular",
                    // letterSpacing: 1,
                  }}
                >
                  Setup Auto-Savings
                </Text>
                <Text
                  style={{
                    // fontWeight: "bold",
                    fontSize: 15,
                    fontFamily: "questrial-regular",
                    // color: "#00a89b",
                    // letterSpacing: 1,
                  }}
                >
                  Auto Save your roundup of daily expenses
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign name="arrowright" size={30} color="#fa9830" />
              </View>
            </View>
          </BlurView>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            maxHeight: 100,
            justifyContent: "center",
            alignItems: "center",
            bottom: 10,
          }}
        >
          <LinearGradient
            style={{
              width: "95%",
              height: 90,
              padding: 15,
              justifyContent: "center",
              alignItems: "center",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderTopLeftRadius: 60,
              borderTopRightRadius: 60,
              position: "absolute",
              bottom: 10,
            }}
            key={"asdsad"}
            colors={["#00ad9f", "#008b80"]}
          >
            <View
              style={{
                flex: 1,
                height: 90,
                borderBottomLeftRadius: 20,
                borderTopLeftRadius: 60,
              }}
            >
              <LinearGradient
                style={{
                  width: "100%",
                  height: 90,
                  padding: 15,
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottomLeftRadius: 20,
                  borderTopLeftRadius: 60,
                  position: "absolute",
                }}
                key={"asdsad"}
                colors={["#00ad9f", "#008b80"]}
              ></LinearGradient>
            </View>
            <View style={{ flex: 1, height: 90 }}>
              <LinearGradient
                style={{
                  width: "100%",
                  height: 90,
                  padding: 15,
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  borderTopRightRadius: 10,
                }}
                key={"asdsad"}
                colors={["#00ad9f", "#008b80"]}
              ></LinearGradient>
            </View>
            <View style={{ flex: 1, height: 90 }}>
              <LinearGradient
                style={{
                  width: "100%",
                  height: 90,
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  backgroundColor: "white",
                }}
                key={"asdsad"}
                colors={["#00ad9f", "#008b80"]}
              >
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    top: -50,
                    backgroundColor: "white",
                    borderRadius: 50,
                    padding: 26,
                  }}
                >
                  <Ionicons name="ios-gift-outline" size={30} color="black" />
                </TouchableOpacity>
              </LinearGradient>
            </View>
            <View style={{ flex: 1, height: 90 }}>
              <LinearGradient
                style={{
                  width: "100%",
                  height: 90,
                  padding: 15,
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  borderTopLeftRadius: 10,
                }}
                key={"asdsad"}
                colors={["#00ad9f", "#008b80"]}
              ></LinearGradient>
            </View>
            <View
              style={{
                flex: 1,
                height: 90,
                borderBottomRightRadius: 20,
                borderTopRightRadius: 60,
              }}
            >
              <LinearGradient
                style={{
                  width: "100%",
                  height: 90,
                  padding: 15,
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottomRightRadius: 20,
                  borderTopRightRadius: 60,
                  position: "absolute",
                }}
                key={"asdsad"}
                colors={["#00ad9f", "#008b80"]}
              ></LinearGradient>
            </View>
          </LinearGradient>
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
  wallet: {
    width: 40,
    height: 40,
    alignSelf: "center",
    // marginTop: -1,
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
  dashcard: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#518f69",
    // borderTopRightRadius: 25,
    padding: 20,
    maxHeight: 100,
    margin: 30,
    paddingHorizontal: 15,
    flex: 1,
    flexDirection: "row",
  },

  card: {
    borderRadius: 20,
    padding: 20,
    maxHeight: 240,
    margin: 10,
    paddingHorizontal: 15,
    flex: 1,
    flexDirection: "column",
  },
  cardbody: {
    backgroundColor: "white",
    borderRadius: 20,
    height: 80,
    maxHeight: 80,
    width: "100%",
    flex: 1,
    flexDirection: "row",
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
    // borderWidth: 1,
    borderRadius: 50,
    // width: "80%",
  },
  linearbg: {
    // width: "100%",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  btntext: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});
