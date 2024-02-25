import React, { useEffect, useState } from 'react'

export default function UseGetUsersData(url) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (
            async() => {

                await fetch(url)
                .then(res => res.json())
                .then(data => setUsers(Object.entries(data)))
            }
        
    )();
    }, [])

    return users;
}
