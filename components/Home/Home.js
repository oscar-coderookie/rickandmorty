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
            color="rgba(185,211,61,0.7)"
            onPress={() => navigation.navigate("Characters")}
            title="Characters"
          />
          <Button
            style={styles.homeButton}
            color="rgba(0,176,200,0.7)"
            onPress={() => navigation.navigate("Planets")}
            title="PLanets"
          />
          <Button
            style={styles.homeButton}
            color='rgba(143,24,168,0.7)'
            onPress={() => navigation.navigate("Episodes")}
            title="episodes"
          />
        <Text style={styles.copyright}>Developed by Oscar Serna Carvajal - All Rights Reserved</Text>

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
    height: 150,
    marginBottom:10,
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
  copyright: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 10,
    color: "white",
  }
});

export default HomeScreen;
