import React,{useState} from 'react'
import "./Detail.css"

const Detail = () => {
    const [data,setData] = useState({
        username : "",
        email : "" ,
        phone : "" ,
        dob : "" ,
      })

      const handleChange = (e) => {
        setData({
          ...data,
          [e.target.name] : e.target.value
        })
      }
    

  return (
    <div className="modal">
    <div className="modal-content">
      <form onSubmit={(e)=>{
          e.preventDefault()

          let atInEmail = data.email.indexOf("@")
         
          if (atInEmail < 0){
            alert(`Please include '@' in the email address. '${atInEmail}' is missing an '@`)
          }

          if (data.phone.length < 10){
            alert("Invalid phone number. Please enter a 10-digit phone number.")
           }

           let currDate = new Date()
           let selectedDob = new Date(data.dob)
           if (selectedDob > currDate){
            alert("Invalid date of birth. Date of birth cannot be in the future.")
           }
            
         }}>
          
         <h2>Fill Details</h2> 
         
         <br />
        
        <label htmlFor="username">Username:</label> <br />
        <input
         value={data.username}
         onChange={handleChange} 
         required 
         id="username" 
         name="username" 
         type="text" />
        
        <br />
        
        <label htmlFor="email">Email Address:</label> <br />
        <input 
        value={data.email}
        onChange={handleChange} 
        required 
        id="email" 
        name="email" 
        type="email" />
        
        <br />
        <label required htmlFor="phone">
          Phone Number:
        </label>
        <br />
        <input
         value={data.phone}
         onChange={handleChange}
         required 
         id="phone"
         name="phone" 
         type="tel" />
        
        <br />
        <label htmlFor="dob">Date of Birth:</label> <br />
        <input
         value={data.dob}
         onChange={handleChange} 
         required 
         id="dob" 
         name="dob" 
         type="date" /> 
         <br />
         
         <button
         type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  </div>
  )
}

export default Detail


