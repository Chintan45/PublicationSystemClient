import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Publications = () => {

    const URL = "http://localhost:5000";
    const [isLoading, setIsLoading] = useState(false);
    const [publicationsList, setPublicationsList] = useState([]);
    
    useEffect(()=>{
        setIsLoading(true)
        axios
        .get(URL+"/getPublications")
        .then(res => {
            console.log("res-> ", res);
            const publications = res.data?.data?.publication;
            setPublicationsList(publications);
            setIsLoading(false)
        });
    },[]);

    if(isLoading){
        return(<>Loading Data</>)
    }

    return(
        <>
        <h3>Publications Table</h3>
        {publicationsList && 
            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>student_id</th>
                    <th>title</th>
                    <th>year</th>
                </tr>
                </thead>
                <tbody>
                    {publicationsList.map((publication, key)=>{
                        return(
                            <tr key={key}>
                                <td>{publication.id}</td>
                                <td>{publication.student_id}</td>
                                <td>{publication.title}</td>
                                <td>{publication.year}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        }
        </>
    )
}

export default Publications;

