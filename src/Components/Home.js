import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './homesty.css';
import Hometab from './Hometab';

const Home = () => {

  const[billno,setBillno]=useState('');
  const[amount,setAmount]=useState('');
  const[buyer,setBuyer]=useState('');
  const[bank,setBank]=useState('');
  const[location,setLocation]=useState('');
  const[commodity,setCommodity]=useState('');
  const[accname,setAccname]=useState('');
  const[gstno,setGstno]=useState('');
  const[revenue,setRevenue]=useState('');
  const[profit,setProfit]=useState('');
  const[tax,setTax]=useState('');

 

  const[id,setId]=useState('');
 
  
  const handleGet =() =>{
    
  }
  const handleDelete = () => {
    // Convert the ID to a number (assuming it's a numeric ID)
    const idToDelete = parseInt(id);

    if (!idToDelete) {
      // Handle the case where id is not a valid number
      alert('Please enter a valid ID to delete.');
      return;
    }


    axios
      .delete(`http://127.0.0.1:8081/delid/${idToDelete}`)
      .then((response) => {
        console.log('Successfully deleted:', response.data);
        
      })
      .catch((error) => {
        console.error('Error deleting:', error);
      });
  }
  const handlePut = (e) =>
  {
     e.preventDefault();
    axios.put('http://127.0.0.1:8081/update',
    {
   
    billno:billno,
    amt:amount,
    buyer:buyer,
    bank:bank,
    location:location,
    commodity:commodity,
    at:{
      shipper:accname,
    gstno:gstno,
    deliverfee:revenue,
    month:profit,
    taxper:tax,
    
    }
  }
    )
  }


  const handlePost = (e) =>{
    e.preventDefault();
    axios.post('http://127.0.0.1:8081/addbill',
    {
   
    billno:billno,
    amt:amount,
    buyer:buyer,
    bank:bank,
    location:location,
    commodity:commodity,
    at:{
      shipper:accname,
    gstno:gstno,
    deliverfee:revenue,
    month:profit,
    taxper:tax,
    
    }
  }
    )
};

  return (
    <div>
    <h2>Welcome to the Accounting App!</h2>
    
    <nav id='nav'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
     
      <div class='container'>
      <form class='form-table'>

    
      
      <div className='form-group'>
      <label>BILL NUMBER:</label>
      <input class="form-control"
      type='number'
      nameholder='Enter the Billno'
      value={billno}
      onChange={(e) => setBillno(e.target.value)}></input>
      </div>

      <div className='form-group'>
      <label>AMOUNT:</label>
      <input class="form-control"
      type='number'
      nameholder='Enter the Amount'
      value={amount}
      onChange={(e) => setAmount(e.target.value)}></input>
      
      </div>
     <div class='form-group'>
      <label>BUYER:</label>
      <input class="form-control"
      type='text'
      nameholder='Enter the Buyer Name'
      value={buyer}
      onChange={(e) => setBuyer(e.target.value)}></input>
      </div>
      <div class='form-group'>
      <label>BANK:</label>
      <input class="form-control"
      type='String'
      nameholder='Enter the Bank Name'
      value={bank}
      onChange={(e) => setBank(e.target.value)}></input>
      </div>
      <div class='form-group'>
      <label>LOCATION:</label>
      <input class="form-control"
      type='String'
      nameholder='Enter the Location'
      value={location}
      onChange={(e) => setLocation(e.target.value)}></input>
      </div>
      <div class='form-group'>
      <label>COMMODITY:</label>
      <input class="form-control"
      type='String'
      nameholder='Enter the Commodity'
      value={commodity}
      onChange={(e) => setCommodity(e.target.value)}></input>
      </div>
      <div class='form-group'>
      <label>SHIPPER:</label>
      <input class="form-control"
      type='String'
      nameholder='Enter Type of the Account'
      value={accname}
      onChange={(e) => setAccname(e.target.value)}></input>
      </div>
      <div class='form-group'>
      <label>GST NO:</label>
      <input class="form-control"
      type='number'
      nameholder='Enter the GST No'
      value={gstno}
      onChange={(e) => setGstno(e.target.value)}></input>
      </div>
      <div class='form-group'>
      <label>DELIVERFEE:</label>
      <input class="form-control"
      type='number'
      nameholder='Enter the Revenue'
      value={revenue}
      onChange={(e) => setRevenue(e.target.value)}></input>
      </div>
      <div class='form-group'>
      <label>MONTH:</label>
      <input class="form-control"
      type='number'
      nameholder='Enter the Profit'
      value={profit}
      onChange={(e) => setProfit(e.target.value)}></input>
      </div>
      <div class='form-group'>
      <label>TAX:</label>
      <input class="form-control"
      type='number'
      nameholder='Enter the Tax amount'
      value={tax}
      onChange={(e) => setTax(e.target.value)}></input>
      </div>
      
    
      <div class="d-grid gap-2">
      <button id='but' class="btn btn-info" onClick={handlePost}>POST</button>
      <button id='but' class="btn btn-danger" onClick={handleGet}>GET</button>
          <button id='but' class="btn btn-info" onClick={handlePut}>PUT</button>

      <div class='form-group'>
      <label>DELETE ID:</label>
      <input class="form-control"
      type='number'
      placeholder='Enter the Id to delete'
      value={id}
      onChange={(e) => setId(e.target.value)}></input>
      </div>  
      <button id='but' class="btn btn-info" onClick={handleDelete}>DELETE</button></div>

     
     
      </form>
      </div>
      <Hometab/>
    </div>
  );
};

export default Home;