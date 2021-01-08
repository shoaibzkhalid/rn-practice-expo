import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ComponentScreen from "./src/components/ComponentScreen";

export default function App() {
  const data = [
    {
      name: "Ali",
    },
    { name: "Khan" },
    { name: "New" },
  ];
  return (
    <View style={styles.container}>
      <Text>Testing now!</Text>
      <ComponentScreen />
      <StatusBar style="auto" />
      {/* <FlatList
        data={data}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      ></FlatList> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
