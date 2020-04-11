import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View } from "react-native";
import yelp from '../api/yelp';

const ResultsShowScreen= ({ navigation }) => {
    const [result, setResult] = useState(null);

    console.log(result);
    
    // how we will get information from the second argument that we called nagivate with
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }
    useEffect(() => {
        getResult(id)
    }, [])

    return (
        <View style={styles.container}>
            <Text>Results Show Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({});

export default ResultsShowScreen;