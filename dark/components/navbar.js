import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const Navbar = () => {
  return (
    <View style={styles.create}>
      <TouchableOpacity>
        <View>
          <Image source={require("../assets/icons8-home-32.png")} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <Image style={{}} source={require("../assets/myCards.png")} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <Image source={require("../assets/statictics.png")} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <Image source={require("../assets/settings.png")} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  create: {
    backgroundColor: "#fff",
    height: 100,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 10,
    flexDirection: "row",
  },
});
