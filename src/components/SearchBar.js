import React from "react";
import { Text, StyleSheet, View} from "react-native";
import { Feather } from '@expo/vector-icons'

const SearchBar = () => {
  return <View style={styles.background}>
    <Feather name="search" size={30} />
    <Text style={styles.text}>Search Bar</Text>
  </View>
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15
  }
});

export default SearchBar;