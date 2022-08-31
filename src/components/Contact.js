
import React from 'react'
export default function Contact(){
  const [formData, setFormData] = React.useState({
    email:"",
    password:"",
    isTrue:false
  })

  function handleChange(event){
    const {name, type , value, checked}= event.target
    setFormData(prevData =>({
      ...prevData,
      [name]:type === "checkbox"?checked:value
    }))
  }
  function handleSubmit(event){
    event.preventDefault()
    alert("You are signed Up....!")
  }
  console.log(formData)
    return(
        <div className="contact">
            <form onSubmit={handleSubmit}>
                <input 
                type='text'
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={formData.email}
                />
                <input type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={formData.password}
                />
              <div className="signUp">
              <input 
                id="check"
                type='checkbox' 
                name="isTrue"
                onChange={handleChange}
                checked={formData.isTrue}
                />
                <label htmlFor="check">Sign up For news Letter.!</label>
              </div>
              <button className="btn">Submit</button>
            </form>
        </div>
    )
}