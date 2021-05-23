import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Product = ({ onPress, marginTop, image, title }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "#F5F5FA",
        height: 280,
        width: 160,
        borderRadius: 20,
        marginTop: marginTop,
        marginRight: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "center",
          marginTop: 20,
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
      <Image
        source={image}
        style={{
          height: 105,
          alignSelf: "center",
          width: 130,
          marginTop: 15,
          marginBottom: 15,
        }}
      />
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          paddingHorizontal: 10,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: "bold",
          paddingHorizontal: 10,
          color: "#848485",
        }}
      >
        Beef burger
      </Text>
    </TouchableOpacity>
  );
};

export default Product;

const styles = StyleSheet.create({});
