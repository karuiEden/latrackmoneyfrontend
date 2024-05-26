import React, {useState, useEffect} from 'react';

import axios from 'axios';

const TableComponent = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/money')
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    return (
        <table>
            <thead>
            <tr>
                <th>Title</th>
                <th>Body</th>
            </tr>
            </thead>
            <tbody>
            {items.map((item) => (
                <tr key={item.id}>
                    <td>{item.type}</td>
                    <td>{item.money}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};


export default TableComponent;