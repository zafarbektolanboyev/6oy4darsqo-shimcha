import React, { useState } from 'react';
import './App.css';

const AddressForm = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   address: '',
  //   contact: '',
  //   country: '',
  //   zipCode: '',
  //   vatNumber: '',
  // });


  return (
    <div className='login'>
      <h3>Edit address</h3>
      <div className="names">
        <div className="name">
          <label htmlFor="Name">Name</label>
          <input type="text" placeholder='John Doe'/>
        </div>
        <div className="email">
          <label htmlFor="Email">Email</label>
          <input type="email" placeholder='John doe@gmail.com'/>
        </div>
      </div>
      <textarea name="Adres" id="adres" placeholder='Address'></textarea>
      <div className="contacts">
        <div className="contact">
          <label htmlFor="Contact">Contact</label>
          <input type="number" />
        </div>
        <div className="country">
            
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
