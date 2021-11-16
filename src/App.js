// Example of react form
import React, { useState } from "react";


const App = () => {

  const [name, setName] = useState("");//hooks 
  const [lname, setLast] = useState("");//hooks
  const [fullname, setfullName] = useState("");//using hooks
  const [Lastname, setLastName] = useState("");//using hooks


  const Inchange = (event) => {
    setName(event.target.value);
  }
  const Inchangetwo = (event) => {
    setLast(event.target.value);
  }
  const SubmitClick = (event) => {
    event.preventDefault();//its using for form tag stop refresh page after click submit
    setfullName(name);
    setLastName(lname);

  }

  return (
    <>
      <div>
        <form onSubmit={SubmitClick}>
          <h1>Hello {fullname} {Lastname}</h1>
          <input type="text" placeholder="Enter First name" id="input" onChange={Inchange} value={name} />
          <br/>
          <input type="text" placeholder="Enter Last name" id="input" onChange={Inchangetwo} value={lname}/>
          <br/>
        
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default App;