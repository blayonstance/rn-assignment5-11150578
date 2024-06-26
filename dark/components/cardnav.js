import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Cardnav = () => {
  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <Image source={require("../assets/Card.png")} />
      </View>
      <View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginVertical: 30,
            }}
          >
            <View>
              <View
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 40,
                  width: 40,
                  height: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 35,
                  marginTop: 10,
                }}
              >
                <Image style={{}} source={require("../assets/send.png")} />
              </View>
              <Text style={{ marginLeft: 10 }}> Send </Text>
            </View>
            <View>
              <View
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 40,
                  width: 40,
                  height: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 35,
                  marginTop: 10,
                }}
              >
                <Image source={require("../assets/recieve.png")} />
              </View>
              <Text style={{ marginLeft: 10 }}> Receive</Text>
            </View>
            <View>
              <View
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 40,
                  width: 40,
                  height: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 35,
                  marginTop: 10,
                }}
              >
                <Image source={require("../assets/loan.png")} />
              </View>
              <Text style={{ marginLeft: 10 }}> Loan </Text>
            </View>
            <View>
              <View
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 40,
                  width: 40,
                  height: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 35,
                  marginTop: 10,
                }}
              >
                <Image source={require("../assets/topUp.png")} />
              </View>
              <Text style={{ marginLeft: 5 }}> TopUp</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Cardnav;

const styles = StyleSheet.create({});
