import { useState } from "react";

function RegisterForm() {
    const [form, setForm] = useState({ 
        firstName: 'Anil', 
        lastName: 'Kumar', 
        email: 'anil.kumar@jtech.com', 
      }); 
    
      return ( 
        <> 
          <label> 
            First name: 
            <input 
              value={form.firstName} 
              onChange={e => { 
                setForm({ 
                  ...form, 
                  firstName: e.target.value 
                }); 
              }} 
            /> 
          </label> 
          <label> 
            Last name: 
            <input 
              value={form.lastName} 
              onChange={e => { 
                setForm({ 
                  ...form, 
                  lastName: e.target.value 
                }); 
              }} 
            /> 
          </label> 
          <label> 
            Email: 
            <input 
              value={form.email} 
              onChange={e => { 
                setForm({ 
                  ...form, 
                  email: e.target.value 
                }); 
              }} 
            /> 
          </label> 
          <p> 
            You have entered:<br></br>
            {form.firstName}{' '} 
            {form.lastName}{' '} 
            ({form.email})
          </p> 
        </> 
      ); 
}

export default RegisterForm;