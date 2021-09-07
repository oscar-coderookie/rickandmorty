import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from "react-native";

const EpisodesSection = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getEpisodes = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/episode");
      const json = await response.json();
      setData(json.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEpisodes();
  }, []);

  return (
    <View style={styles.episodesContainer}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          style={styles.episodesList}
          data={data}
          keyExtractor={({ id }, index) => String(id)}
          renderItem={({ item }) => (
            <View style={styles.episodesView}>
              <Text style={styles.episodesName}>{item.name}</Text>
              <View style={styles.episodes}>
                <Text style={styles.episodesTexts}>Air date: {item.air_date}</Text>
                <Text  style={styles.episodesTexts}>Episode: {item.episode}</Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  episodesContainer: {
    flex: 1,
    width: "100%",
    height: "auto",
    backgroundColor: "#00B0C8",
  },
  episodesTitle: {
    color: "#B9D33D",
    textAlign: "center",
    fontSize: 30,
    paddingVertical: 10,
  },
  episodesName: {
    color: "#00B0C8",
    margin: 10,
    fontSize: 20,
    fontWeight: '600',
    textAlign: "center",
    textTransform: "capitalize",
  },
  episodesTexts: {
    color: "white",
    fontSize: 16,
    
  },
  episodesView: {
    height: "auto",
    borderRadius: 6,
    padding: 10,
    backgroundColor: "rgba(185,211,61,0.8)",
    margin: 10,
    flexDirection: "column",
    justifyContent: "space-around",
  },
});

export default EpisodesSection;
