import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import SearchBar from '../components/SearchBar';
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [restaurants, setRestaurants] = useState([]);

  const searchAPI = async () => {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term, // same as term: term
        location: 'san francisco'
      }
    });
    setRestaurants(response.data.businesses);
  }

  return <View>
    <SearchBar 
      term={term} 
      onTermChange={newTerm => setTerm(newTerm)} 
      onTermSubmit={searchAPI} // is the same as: onTermSubmit={() => searchAPI()}
    />
    <Text style={styles.text}>SearchScreen</Text>
    <Text>We have found {restaurants.length} restaurants</Text>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default SearchScreen;
