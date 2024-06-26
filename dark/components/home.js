import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
  ScrollView,
  useColorScheme,
} from "react-native";
import React from "react";
import Navbar from "./navbar";

import Cardnav from "./cardnav";

const popularJobs = [
  {
    id: "1",
    title: "Apple Store",
    company: "Enterainment",
    salary: "-$5,99",

    src: require("../assets/apple.png"),
  },
  {
    id: "2",
    title: "Spotify",
    company: "Music",
    salary: "-$12,99",

    src: require("../assets/spotify.png"),
  },
  {
    id: "3",
    title: "Money Transfer",
    company: "Transaction",
    salary: "$300",

    src: require("../assets/moneyTransfer.png"),
  },
];
const renderPopularJob = ({ item }) => (
  <View style={[styles.popularJobCard]}>
    <View style={{ justifyContent: "space-between" }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              borderRadius: 40,
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              padding: 25,
              marginRight: 10,
            }}
          >
            <Image
              source={item.src}
              style={{
                borderRadius: 10,
              }}
            />
          </View>
          <View>
            <Text style={{}}> {item.title}</Text>
            <Text style={{}}>{item.company}</Text>
          </View>
        </View>

        <Text style={{}}> {item.salary}</Text>
      </View>
    </View>
  </View>
);

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.everything}>
          <View style={styles.help}>
            <View style={styles.one}>
              <Image
                source={require("../assets/profile.png")}
                style={{ height: 90, width: 90, marginRight: 10 }}
              />
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{
                    color: "#888888",
                    fontSize: 26,
                    color: useColorScheme,
                  }}
                >
                  Welcome Back,
                </Text>
                <Text style={{ fontWeight: "bold", fontSize: 29 }}>
                  Eric Atsu
                </Text>
              </View>
            </View>
            <View style={styles.imgback}>
              <Image source={require("../assets/search.png")} />
            </View>
          </View>
        </View>

        <View>
          <Cardnav />
        </View>
        <View style={styles.head}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Transaction</Text>
          <Text style={{ color: "dodgerblue", fontSize: 15 }}> See all </Text>
        </View>

        <ScrollView>
          <View style={styles.shieesh}>
            <FlatList
              data={popularJobs}
              renderItem={renderPopularJob}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </ScrollView>
      </ScrollView>
      <View></View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  everything: {
    marginVertical: 30,
    marginHorizontal: 10,
  },
  help: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  one: {
    flexDirection: "row",
    alignItems: "center",
  },
  imgback: {
    backgroundColor: "#fff",
    borderRadius: 40,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    marginTop: 10,
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  shieesh: {
    marginHorizontal: 10,
  },
  popularJobCard: {
    padding: 20,

    borderRadius: 30,
    marginBottom: 10,
    justifyContent: "space-between",
    height: 70,
  },
  popularJobTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  popularJobCompany: {
    fontSize: 14,
    color: "#666",
  },
  popularJobSalary: {
    fontSize: 14,
    color: "#333",
  },
  popularJobLocation: {
    fontSize: 14,
    color: "#666",
  },
});
