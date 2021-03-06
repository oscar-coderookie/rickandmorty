import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from "react-native";

const PlanetsSection = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getLocations = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/location");
      const json = await response.json();
      setData(json.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <View style={styles.planetsContainer}>
      
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          style={styles.planetsList}
          data={data}
          keyExtractor={({ id }, index) => String(id)}
          renderItem={({ item }) => (
            <View style={styles.planetsView}>
              <Text style={styles.planetsName}>{item.name}</Text>
              <View style={styles.planets}>
                <Text style={styles.planetsTexts}>Type: {item.type}</Text>
                <Text fontFamily="Roboto" style={styles.planetsTexts}>Dimension: {item.dimension}</Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  planetsContainer: {
    flex: 1,
    width: "100%",
    height: "auto",
    backgroundColor: "black",
  },
  planetsTitle: {
    color: "#B9D33D",
    textAlign: "center",
    fontSize: 30,
    paddingVertical: 10,
  },
  planetsName: {
    color: "#00B0C8",
    margin: 10,
    fontSize: 20,
    fontWeight: '600',
    textAlign: "center",
    textTransform: "capitalize",
  },
  planetsTexts: {
    color: "white",
    fontSize: 16,
    
  },
  planetsView: {
    height: "auto",
    borderRadius: 6,
    padding: 10,
    backgroundColor: "#B9D33D",
    margin: 10,
    flexDirection: "column",
    justifyContent: "space-around",
  },
});

export default PlanetsSection;
