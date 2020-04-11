import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import SearchBar from '../components/SearchBar';
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchAPI = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term, // same as term: term
          location: 'san francisco'
        }
      });
      setRestaurants(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong')
    }
  }

  return <View>
    <SearchBar 
      term={term} 
      onTermChange={newTerm => setTerm(newTerm)} 
      onTermSubmit={searchAPI} // is the same as: onTermSubmit={() => searchAPI()}
    />
    {errorMessage ? <Text style={styles.text}>{errorMessage}</Text> : null}
    <Text>We have found {restaurants.length} restaurants</Text>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default SearchScreen;
