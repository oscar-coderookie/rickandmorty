import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";

const CharactersSection = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMoviesFromApiAsync = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const json = await response.json();
      setData(json.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMoviesFromApiAsync();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          style={styles.charactersList}
          data={data}
          keyExtractor={({ id }, index) => String(id)}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Details", {
                  id: item.id,
                  character: item.name,
                  img: item.image,
                  specie: item.species,
                  gender: item.gender,
                  status: item.status,
                })
              }
            >
              <View style={styles.characterView}>
                <Image style={styles.imgCharacter} source={{ uri: item.image }} />
                <Text style={styles.textCharacters}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  charactersList: {
    backgroundColor: "#13b5cb",
    width: "100%",
    paddingTop: 10,
    paddingBottom: 20,
  },
  characterView: {
    flex: 1,
    justifyContent: "center",
    height: 300,
    marginVertical: 10,
    alignItems: "center",
  },
  imgCharacter: {
    height: "100%",
    width: "80%",
    position: "absolute",
  },
  textCharacters: {
    textAlign: "center",
    color: "#13b5cb",
    textShadowOffset: {height:0, width: 0},
    textShadowRadius: 8,
    textShadowColor: "#baff00",
    fontWeight: "600",
    fontSize: 40,
    width: "80%",
    position: "absolute",
    bottom: 20,
  },
});

export default CharactersSection;
