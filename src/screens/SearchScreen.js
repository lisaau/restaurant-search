import React from "react";
import { Text, StyleSheet, View } from "react-native";
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
  return <View>
    <SearchBar />
    <Text style={styles.text}>SearchScreen</Text>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default SearchScreen;
