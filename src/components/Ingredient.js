import React from "react";
import { StyleSheet, View, Image } from "react-native";

const Ingredient = ({ url }) => {
  return (
    <View style={styles.view}>
      <Image
        source={url}
        style={{
          height: 30,
          width: 30,
        }}
      />
    </View>
  );
};

export default Ingredient;

const styles = StyleSheet.create({
  view: {
    borderRadius: 15,
    borderWidth: 0.1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 10,
  },
});
