import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
    const [restaurants, setRestaurants] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchAPI = async (searchTerm) => {
        try {
        const response = await yelp.get('/search', {
            params: {
            limit: 50,
            term: searchTerm, // term is same as term: term
            location: 'san francisco'
            }
        });
        setRestaurants(response.data.businesses);
        } catch (err) {
        setErrorMessage('Something went wrong')
        }
    }

    // second argument is empty array to run useEffect one time
    useEffect( () => {
        searchAPI('pasta');
    }, []);

    return [searchAPI, restaurants, errorMessage]
}