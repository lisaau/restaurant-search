import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants'
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchAPI, restaurants, errorMessage] = useRestaurants();

  const filterRestaurantsByPrice = (price) => {
    // price === '$' || '$$' || '$$$' || '$$$$'
    return restaurants.filter(result => {
      return result.price === price;
    });
  };

  return <View>
    <SearchBar 
      term={term} 
      onTermChange={setTerm} // onTermChange={setTerm} is same as onTermChange={newTerm => setTerm(newTerm)}
      onTermSubmit={() => searchAPI(term)}
    />
    {errorMessage ? <Text style={styles.text}>{errorMessage}</Text> : null}
    <Text>We have found {restaurants.length} restaurants</Text>
    <ResultsList results={filterRestaurantsByPrice('$')} title='Cost Effective' />
    <ResultsList results={filterRestaurantsByPrice('$$')} title='Bit Pricier' />
    <ResultsList results={filterRestaurantsByPrice('$$$')} title='Big Spender' />
    <ResultsList results={filterRestaurantsByPrice('$$$$')} title='Really Big Spender' />
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default SearchScreen;
