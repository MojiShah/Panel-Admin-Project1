import React, { useEffect, useState } from 'react'

export default function UseGetUsersData(url) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (
            async () => {

                await fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        setUsers(Object.entries(data).map((x,i) => ({
                            number: i + 1,
                            id: x[0],
                            oldUsername: x[1].oldUsername,
                            oldEmail: x[1].oldEmail
                        })))
                    })
            }

        )();
    }, [])

    return users;
}
