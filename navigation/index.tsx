/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import {
  ColorSchemeName,
  Dimensions,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import EventsScreen from "../screens/EventsScreen";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import MemoriesScreen from "../screens/MemoriesScreen";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import OTPScreen from "../screens/OTPScreen";
import PortfolioScreen from "../screens/PortfolioScreen";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import * as shape from "d3-shape";
import NameScreen from "../screens/NameScreen";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="LogIn">
      <Stack.Screen
        name="LogIn"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OTP"
        component={OTPScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Name"
        component={NameScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

const GiftIcon = () => (
  <TouchableOpacity>
    <Ionicons name="ios-gift-outline" size={24} color="black" />
  </TouchableOpacity>
);
const getPath = (): string => {
  const { width, height } = Dimensions.get("window");
  const tabWidth = width / 5;
  const left = shape
    .line()
    .x((d) => d[0])
    .y((d) => d[1])([
    [0, 0],
    [width, 0],
  ]);
  const tab = shape
    .line()
    .x((d) => d[0])
    .y((d) => d[1])
    .curve(shape.curveBasis)([
    [width, 0],
    [width + 5, 0],
    [width + 10, 10],
    [width + 15, height],
    [width + tabWidth - 15, height],
    [width + tabWidth - 10, 10],
    [width + tabWidth - 5, 0],
    [width + tabWidth, 0],
  ]);
  const right = shape
    .line()
    .x((d) => d[0])
    .y((d) => d[1])([
    [width + tabWidth, 0],
    [width * 2, 0],
    [width * 2, height],
    [0, height],
    [0, 0],
  ]);
  return `${left} ${tab} ${right}`;
};
function BottomTabNavigator() {
  // console.log(Dimensions.get("window"), getPath());
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: "white", //Colors[colorScheme].tint,
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          position: "absolute",
          bottom: 3,
          marginHorizontal: 20,
          height: 75,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        },
        tabBarItemStyle: { paddingVertical: 10 },
        tabBarBackground: () => (
          <LinearGradient
            style={{
              width: "100%",
              height: "100%",
              padding: 15,
              justifyContent: "center",
              alignItems: "center",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
            }}
            key={"asdsad"}
            colors={["#00ad9f", "#008b80"]}
          />
        ),
      }}
    >
      {/* <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
          title: "Tab One",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      /> */}
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          // tabBarItemStyle: { borderWidth: 1 },
        }}
      />
      <BottomTab.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{
          title: "Portfolio",
          tabBarIcon: ({ color }) => <TabBarIcon name="money" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="SendGift"
        component={GiftIcon}
        options={{
          title: "send gift",
          tabBarIcon: ({ color }) => (
            <TouchableOpacity
              style={{
                position: "absolute",
                top: -50,
                backgroundColor: "white",
                // borderWidth: 1,
                borderRadius: 50,
                padding: 20,
              }}
            >
              <Ionicons name="ios-gift-outline" size={30} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <BottomTab.Screen
        name="Events"
        component={EventsScreen}
        options={{
          title: "Events",
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="event"
              size={30}
              style={{ marginBottom: -3 }}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Memories"
        component={MemoriesScreen}
        options={{
          title: "Memories",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="balloon"
              size={30}
              style={{ marginBottom: -3 }}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
