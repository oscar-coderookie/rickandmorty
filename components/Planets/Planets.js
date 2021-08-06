import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlanetsSection = () => {
    return ( 
        <View style={styles.planetsContainer}>
            <Text style={styles.planetsTitle}>Planets</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    planetsContainer:{
        flex: 1, 
        width: "100%", 
        height: "100%", 
        backgroundColor:"black"
    },
    planetsTitle: {
        color: "#00B0C8",
        textAlign: "center",
        fontSize: 30,
        paddingVertical: 10
    }
})
 
export default PlanetsSection;