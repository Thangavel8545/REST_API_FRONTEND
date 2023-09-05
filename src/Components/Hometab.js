import React, { useEffect, useState } from 'react'
import axios from "axios"

function Hometab() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadusers();
    },[])

    const loadusers = async () => {
        const result = await axios.get("http://localhost:8081/showbill");
        console.log(result.data);
        setUsers(result.data);
    }

  return (
    <div>
    <table border={1}>
      <thead>
        <tr>
        <th>ID</th>
          <th>BILL NO</th>
          <th>AMOUNT</th>
          <th>BUYER</th>
          <th>BANK</th>
          <th>LOCATION</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.custid}>
          <td>{user.custid}</td>
            <td>{user.billno}</td>
            <td>{user.amt}</td>
            <td>{user.buyer}</td>
            <td>{user.bank}</td>
            <td>{user.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  
    </div>
  )
}

export default Hometab;
