import React from "react";
import { View, Text, ImageBackground, Button, StyleSheet, Image } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.homeContainer}>
      <ImageBackground
        source={{ uri: "https://i.pinimg.com/originals/33/07/80/33078018848445421f41b8f71f074b91.jpg" }}
        style={{ width: "100%", height: "100%", position: "absolute" }}
      />
      <View style={styles.titleContainer}>
        <Image source={require("../../assets/img/logo.png")} style={styles.homeLogo} />
        <View style={styles.homeBtnBlock}>
          <Button
            style={styles.homeButton}
            color="#B9D33D"
            onPress={() => navigation.navigate("Characters")}
            title="Characters"
          />
          <Button
            style={styles.homeButton}
            color="#00B0C8"
            onPress={() => navigation.navigate("Planets")}
            title="PLanets"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  homeBtnBlock: {
    height: 100,
    justifyContent:'space-between'
  },
  homeTitle: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
    width: "100%",
    marginVertical: 20,
  },
  titleContainer: {
    width: "90%",
    marginBottom: 60,
    height: "100%",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  homeLogo: {
    width: "100%",
    height: 100,
    marginVertical: 16,
  },
});

export default HomeScreen;
