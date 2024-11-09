import React from 'react';
import { useState, useEffect } from 'react';

export const useRestaurants = () => {
    const [ restaurants, setRestaurants ] = useState([]);
      
    const fetchRestaurants = async () => {
    try {
        const response = await fetch("http://localhost:3000/restaurants");
        const data = await response.json();
        setRestaurants(data);
    } catch (error) {
        console.error("Failed to fetch restaurants:", error);
    }
    };

    useEffect(() => {
        fetchRestaurants();
      }, []);

    const addRestaurant = async (newRestaurant) => {
        try {
        const response = await fetch("http://localhost:3000/restaurants", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newRestaurant),
        });
        
        if (response.ok) { 
            fetchRestaurants(); 
        }
        } catch (error) {
        console.error("Failed to fetch restaurants:", error);
        }
    };

    return { restaurants, addRestaurant };
};