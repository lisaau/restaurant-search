import React from "react";
import { Text, StyleSheet, View, TextInput} from "react-native";
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return <View style={styles.backgroundStyle}>
    <Feather 
        name="search" 
        style={styles.iconStyle} 
    />
    <TextInput 
        autoCapitalize='none'
        autoCorrect={false}
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        onChangeText={newTerm => onTermChange(newTerm)}
        
        // onEndEditing={() => onTermSubmit()} is the long/verbose version of the code below
        onEndEditing={onTermSubmit}
    />
  </View>
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row'
  },
  inputStyle: {
    // to help with centering text input
        // borderColor: 'black',
        // borderWidth: 1,
      flex: 1,
      fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  }
});

export default SearchBar;
