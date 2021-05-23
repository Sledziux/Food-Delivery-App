import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

import { Picker } from "@react-native-picker/picker";

import Icon from "@expo/vector-icons/Entypo";

import Product from "../components/Product";

const Home = (props) => {
  const [city, setCity] = useState("Los Angeles");

  return (
    <ScrollView style={{ backgroundColor: "#FFF" }}>
      <View style={styles.screen}>
        <View style={{ width: "10%" }}>
          <Image source={require("../images/1.png")} />
        </View>

        <View style={{ width: "80%", alignItems: "center" }}>
          <Picker
            selectedValue={city}
            style={{ width: 160, height: 50 }}
            onValueChange={(itemValue, itemIndex) => {
              setCity(itemValue);
            }}
          >
            <Picker.Item
              label="Los Angeles"
              value="Los Angeles"
              style={{ fontWeight: "bold" }}
            />

            <Picker.Item
              label="Mumbai"
              value="Mumbai"
              style={{ fontWeight: "bold" }}
            />

            <Picker.Item
              label="New Delhi"
              value="New Delhi"
              style={{ fontWeight: "bold" }}
            />
          </Picker>
        </View>

        <View style={{ width: "10%" }}>
          <Icon name="magnifying-glass" size={30} color="black" />
        </View>
      </View>

      <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Food that</Text>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          meets your needs
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 40 }}
      >
        <View style={{ ...styles.dish, backgroundColor: "#F9DD7A" }}>
          <Image
            source={require("../images/5.png")}
            style={{ height: 40, width: 40 }}
          />
          <Text style={{ fontWeight: "bold", fontSize: 18, paddingLeft: 10 }}>
            Burgers
          </Text>
        </View>

        <View style={{ ...styles.dish, backgroundColor: "#E5E4EB" }}>
          <Image
            source={require("../images/10.png")}
            style={{ height: 40, width: 40 }}
          />
          <Text style={{ fontWeight: "bold", fontSize: 18, paddingLeft: 10 }}>
            Burito
          </Text>
        </View>

        <View style={{ ...styles.dish, backgroundColor: "#E5E4EB" }}>
          <Image
            source={require("../images/7.png")}
            style={{ height: 40, width: 40 }}
          />
          <Text style={{ fontWeight: "bold", fontSize: 18, paddingLeft: 10 }}>
            Salads
          </Text>
        </View>

        <View style={{ ...styles.dish, backgroundColor: "#E5E4EB" }}>
          <Image
            source={require("../images/6.png")}
            style={{ height: 40, width: 40 }}
          />
          <Text style={{ fontWeight: "bold", fontSize: 18, paddingLeft: 10 }}>
            Pizza
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          alignItems: "center",
          marginHorizontal: 20,
          flexDirection: "row",
          marginTop: 40,
        }}
      >
        <View style={{ width: "50%" }}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>New Products</Text>
        </View>
        <View
          style={{
            width: "50%",
            alignItems: "flex-end",
          }}
        >
          <Icon name="dots-three-horizontal" size={25} color="#848385" />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginHorizontal: 15,
          marginTop: 30,
        }}
      >
        <Product
          image={require("../images/4.png")}
          title="Smokehouse"
          price="12.99"
          onPress={() => props.navigation.navigate("Detail")}
        />

        <Product
          image={require("../images/9.png")}
          title="Honey Chilli"
          price="10.99"
          marginTop={25}
          onPress={() => props.navigation.navigate("Detail")}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 15,
          justifyContent: "center",

          marginTop: 30,
        }}
      >
        <Product
          image={require("../images/6.png")}
          title="Adios Pizza"
          price="11.99"
        />

        <Product
          image={require("../images/10.png")}
          title="Burrito"
          price="10.99"
          marginTop={25}
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
    marginHorizontal: 20,
  },

  dish: {
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 15,
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
});
