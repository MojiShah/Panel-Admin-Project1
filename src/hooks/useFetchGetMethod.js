import React from 'react';
import { useState , useEffect } from 'react';

export default function useFetchGetMethod(url) {
    const [monthSales, setMonthSales] = useState([]);
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        (
            async () => {
                await fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        console.log(Object.entries(data));
                        setFeatures([
                            (Object.entries(data))[6][1],
                            (Object.entries(data))[7][1],
                            (Object.entries(data))[8][1],
                            (Object.entries(data))[9][1],
                        ]);
                        setMonthSales(Object.entries(data));
                    });
            }
        )();
    }, [])

    return [features , monthSales]
}
