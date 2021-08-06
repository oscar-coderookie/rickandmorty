import React from "react";

import { View, Text, StyleSheet, Image, Linking } from "react-native";
import ButtonBuy from "../Button/ButtonBuy";

const Header = (props) => {

    const { imgUrl, homeTitle, subTitle, btnLabel, btnUrl} = props

  return (
    <View style={styles.headerContainer}>
      <View style={styles.navbar}>
        <Image
          style={styles.headerLogo}
          source={props.imgUrl}
        />
        <Text style={styles.homeTitle}>{props.title}</Text>
        <Text style={styles.homeSubtitle}>{props.subTitle}</Text>
        <ButtonBuy buttonLabel={props.btnLabel}  locationHref={props.btnUrl}/>
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: "auto",
    backgroundColor: "#18314f",
    width: "100%",
  },
  navbar: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    width: "100%",
    
  },
  homeTitle: {
    paddingHorizontal: 10,
    fontSize: 22,
    lineHeight: 22,
    fontWeight: "600",
    textTransform: "uppercase",
    color: "white",
  },
  homeSubtitle: {
    fontSize: 14,
    color: 'white'
  },
  headerLogo: {
    width: 100,
    height: 100,
    margin: 20
  },
});

export default Header;
