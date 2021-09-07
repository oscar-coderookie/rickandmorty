import React, { useEffect, useState } from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const DetailsSection = ({ route }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const { id, character, img, specie, gender, status } = route.params;

  const getCharacter = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character/" + { id });
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <View style={styles.detailContainer}>
      <Text style={styles.detailName}>{character}</Text>
      <Image style={styles.detailImg} source={{ uri: img }} />
      <Text style={styles.detailText}>Specie: {specie}</Text>
      <Text style={styles.detailText}>Gender: {gender}</Text>
      <Text style={styles.detailText}>Status: {status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detailText: {
    fontSize: 20,
    textAlign: "justify",
    width: "80%",
    paddingVertical: 10,
    color: "#00ff12"
  },
  detailName: {
    fontSize: 40,
    color: "#00ff12",
    paddingVertical:10,   

  },
  detailImg: {
    height: "50%",
    width: "80%",
    borderRadius: 5
    
  },
  detailContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingTop: 20,
    backgroundColor: "#00B0C8",
    justifyContent: "center"
  },
});

export default DetailsSection;
