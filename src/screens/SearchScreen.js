import React, { useState } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useResults'
import ResultsList from '../components/ResultsList';

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [searchAPI, results, errorMessage] = useRestaurants();

  const filterRestaurantsByPrice = (price) => {
    // price === '$' || '$$' || '$$$' || '$$$$'
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    // add flex: 1 styling so content fits on screen even if screen is small; alternatively, wrap with empty element <> </>
    <View style={{ flex: 1 }}>
    <SearchBar 
      term={term} 
      onTermChange={setTerm} // onTermChange={setTerm} is same as onTermChange={newTerm => setTerm(newTerm)}
      onTermSubmit={() => searchAPI(term)}
    />
    {errorMessage ? <Text style={styles.text}>{errorMessage}</Text> : null}

    <ScrollView>
      <ResultsList
        results={filterRestaurantsByPrice('$')}
        title='Cost Effective'
        navigation={navigation}
      />
      <ResultsList
        results={filterRestaurantsByPrice('$$')}
        title='Bit Pricier'
        navigation={navigation}
      />
      <ResultsList
        results={filterRestaurantsByPrice('$$$')}
        title='Big Spender'
        navigation={navigation}
      />
    </ScrollView>
  </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default SearchScreen;
