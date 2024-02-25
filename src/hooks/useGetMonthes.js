import React from 'react';
import { useState , useEffect } from 'react';

export default function useGetMonthes(url) {

    
    const [features, setFeatures] = useState([]);
    const [monthSales,setMonthSales] = useState([]);
    const [id,setId]=useState([]);
    // const [ourValue , setOurValue] = useState([]);

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
                        // setOurValues(Object.entries(data));
                        // (Object.entries(data)).map(x => {
                        //     const salesChar = [{
                        //         id:x[0],
                        //         thismonth: x[1].month,
                        //         thisSales: x[1].sales
                        //     }]
                        //     setOurValue([...ourValue,salesChar])
                        // })

                        /* full way unfortunately :((  */
                        setMonthSales([
                            (Object.entries(data))[0][1],
                            (Object.entries(data))[1][1],
                            (Object.entries(data))[2][1],
                            (Object.entries(data))[3][1],
                            (Object.entries(data))[4][1],
                            (Object.entries(data))[5][1],
                            (Object.entries(data))[6][1],
                            (Object.entries(data))[7][1],
                            (Object.entries(data))[8][1],
                            (Object.entries(data))[9][1],
                            (Object.entries(data))[10][1],
                            (Object.entries(data))[11][1],
                        ]);

                        setId([
                            (Object.entries(data))[0][0],
                            (Object.entries(data))[1][0],
                            (Object.entries(data))[2][0],
                            (Object.entries(data))[3][0],
                            (Object.entries(data))[4][0],
                            (Object.entries(data))[5][0],
                            (Object.entries(data))[6][0],
                            (Object.entries(data))[7][0],
                            (Object.entries(data))[8][0],
                            (Object.entries(data))[9][0],
                            (Object.entries(data))[10][0],
                            (Object.entries(data))[11][0],
                        ])
                    });
            }            
        )();
    }, [])

    return [features, monthSales , id];
}
