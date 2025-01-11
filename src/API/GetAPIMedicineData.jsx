// import React, { useEffect } from 'react'

export const getAPIMedicineData = async () => {
        try {
            const response = await fetch(`https://pixabay.com/api/?key=${import.meta.env.VITE_API_KEY}&q=yellow+medicine&image_type=photo`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json()
            console.log(data);
            return data;
        } catch (error) {
            console.error('Failed to fetch medicine data:', error);
            return null;
        }
    }
