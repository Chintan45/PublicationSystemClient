import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Table, Form, Container } from 'react-bootstrap';

const Users = () => {

    const URL = "http://localhost:5000";
    const [isLoading, setIsLoading] = useState(false);
    const [usersList, setUsersList] = useState([]);
    
    useEffect(()=>{
        setIsLoading(true)
        axios
        .get(URL+"/getUsers")
        .then(res => {
            console.log("res-> ", res);
            const users = res.data?.data?.user;
            setUsersList(users);
            setIsLoading(false)
        });
    },[]);

    if(isLoading){
        return(<>Loading Data</>)
    }

    return(
        <Container>
        <h3>Users Table</h3>
        {usersList && 
            <Table >
                <thead>
                <tr>
                    <th>id</th>
                    <th>email</th>
                    <th>first_name</th>
                    <th>last_name</th>
                </tr>
                </thead>
                <tbody>
                    {usersList.map((user, key)=>{
                        return(
                            <tr key={key}>
                                <td>{user.id}</td>
                                <td>{user.email}</td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

        }
            <Form style={{ marginTop: 30, padding: 10}}>
                <Form.Label className="m-3">Id</Form.Label>
                <Form.Select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </Form.Select>     
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />     
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" />
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" />  
            </Form>
        </Container>
    )
}

export default Users;

