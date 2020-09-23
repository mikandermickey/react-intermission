import React, {useEffect, useState} from "react";
const Subpage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const fetchdata = async () => {
            let results = await fetch("https://swapi.dev/api/people")

            let data = await results.json();
            setLoading(false);
            setData(data);          
        };
        fetchdata();
    }, []);
    console.log(data.results); 

    return loading ? (
        <h1>....loading....</h1>
    ) : (
        <>
           {data.map((character, index) =>(
               <h1 key={index}>{character.name}</h1>
           ))}
        </>
    );
}

export default Subpage;