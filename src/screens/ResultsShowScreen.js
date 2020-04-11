import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ResultsShowScreen= ({ navigation }) => {
    // how we will get information from the second argument that we called nagivate with
    const id = navigation.getParam('id');

    return (
        <View style={styles.container}>
            <Text>Results Show Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({});

export default ResultsShowScreen;