import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "@expo/vector-icons/Entypo";
import Ingredient from "../components/Ingredient";

const Detail = ({ navigation }) => {
  console.log(navigation);
  const [quantity, setQuantity] = useState(1);
  return (
    <View style={{ backgroundColor: "#FFF" }}>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 40,
            marginHorizontal: 20,
          }}
        >
          <View style={{ width: "10%" }}>
            <TouchableOpacity onPress={navigation.goBack}>
              <Image source={require("../images/2.png")} />
            </TouchableOpacity>
          </View>

          <View style={{ width: "80%", alignItems: "center" }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              <Image
                source={require("../images/3.png")}
                style={{ height: 25, width: 20 }}
              />
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                290 Calories
              </Text>
            </View>
          </View>

          <View
            style={{
              width: "10%",
            }}
          >
            <Icon name="heart" color="#F9DD7A" size={30} />
          </View>
        </View>

        <Image
          source={require("../images/5.png")}
          style={{
            height: 300,
            width: 300,
            alignSelf: "center",
          }}
        />

        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            alignItems: "center",
            backgroundColor: "#F6F3FB",
            paddingHorizontal: 20,
            paddingVertical: 8,
            borderRadius: 20,
          }}
        >
          <TouchableOpacity onPress={() => setQuantity((prev) => prev + 1)}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              +
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              paddingHorizontal: 20,
            }}
          >
            {quantity}
          </Text>

          <TouchableOpacity
            onPress={() => {
              if (quantity > 0) {
                setQuantity((prev) => prev - 1);
              }
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              -
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 20,
            marginTop: 30,
          }}
        >
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 25,
              }}
            >
              Smokehouse{" "}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
                color: "#a4a4a9",
              }}
            >
              Beef burger
            </Text>
          </View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 28,
              marginLeft: 80,
            }}
          >
            $12.99
          </Text>
        </View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginTop: 30,
            marginHorizontal: 20,
          }}
        >
          Ingredients
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            marginTop: 20,
            marginHorizontal: 20,
          }}
        >
          <Ingredient url={require("../images/13.png")} />
          <Ingredient url={require("../images/11.png")} />
          <Ingredient url={require("../images/12.png")} />
          <Ingredient url={require("../images/8.png")} />
          <Ingredient url={require("../images/bl.png")} />
          <Ingredient url={require("../images/7.png")} />
        </ScrollView>

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginTop: 30,
            marginHorizontal: 20,
          }}
        >
          Details
        </Text>
        <Text
          style={{
            color: "#A4A4A9",
            fontWeight: "bold",
            fontSize: 15,
            marginTop: 10,
            marginHorizontal: 20,
            textAlign: "justify",
          }}
        >
          The most unique fire grilled patty, flame grilled, charred, seared,
          well-done All natural beef, grass-feed beef, Fiery, juicy, greacy.
          delicous moist The most unique fire grilled patty, flame grilled,
          charred, seared, well-done All natural beef, grass-feed beef, Fiery,
          juicy, greacy. delicous moist
        </Text>
      </ScrollView>
      <View
        style={{
          position: "absolute",
          backgroundColor: "#000",
          height: 50,
          width: 50,
          bottom: 20,
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          borderRadius: 25,
        }}
      >
        <Icon name="shopping-cart" size={24} color="#FFF" />
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
