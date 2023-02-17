import { useEffect, useState } from "react";

const GetUser = (user1)=>{
    const [user , setUser] = useState({});

    useEffect(() => {
        fetch(`http://localhost:4000/user/${user1}`)
            .then(res => res.json())
            .then(data => setUser(data[0]))
    }, [user1]);

    return user;
}

export default GetUser;