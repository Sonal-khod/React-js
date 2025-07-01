import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

const [formData, setFormData]=useState({firstName:'' , lastName:'' , email:'', comments:'', checkbox:'' , mode:'' ,favcar:''})

function NameHandler(event) {

  const{name,value,checked,type}=event.target

  setFormData( prevFormData => {
    return{ 
    ...prevFormData,
    [name]: type ==='checkbox'? checked : value} 
} )
}

console.log(formData)


return (
    < >
    <form className='bg-gray-300 w-2xl flex flex-col py-12 px-4  mx-auto rounded-2xl'  >
      <label htmlFor="FirstName" className='text-gray-700 text-left text-xl pb-2'>First Name</label>
      <input type="text"
      placeholder='Alex '
      onChange={NameHandler} 
      name='firstName'
      id='FirstName'
      value={formData.firstName}
      className='outline outline-gray-500 outline-2 p-1 rounded-xs text-xl text-gray-700'/>

      <label htmlFor="lastName" className='text-gray-700 text-left text-xl pb-2'>Last Name</label>
      <input type="text"
      placeholder='Miller'
      onChange={NameHandler} 
      name='lastName'
      id='lastname'
      value={formData.lastName}
      className='outline outline-gray-500 outline-2 p-1  rounded-xs text-xl text-gray-700'/>
       
    <label htmlFor="Email" className='text-gray-700 text-left text-xl py-2'>Email</label>
      <input type="email" 
      placeholder='Jacob@mail.com'
      onChange={NameHandler}
      name='email'
      id='Email'
      value={formData.Email}
      className='outline outline-gray-500 outline-2 p-1  rounded-xs text-xl text-gray-700'/>
      
      <label htmlFor="comments" className='text-gray-700 text-left text-xl py-2'>Comment</label>
       <textarea onChange={NameHandler} 
       name="comments" 
       placeholder='Comment Here'
       value={formData.comments}
       id='comments'
       className='outline outline-gray-500 outline-2 p-1  rounded-xs text-xl text-gray-700'/>

<label htmlFor="checkbox" className='text-gray-700  text-left text-xl py-2'> Check One</label>
       <input type="checkbox" 
       name='checkbox'
       id='checkbox'
       onChange={NameHandler}
       className='size-5 '
       checked={formData.checkbox} 
      />    
       
       
      <fieldset className='text-left'>  
      <legend className='text-gray-700  text-left text-xl py-2'>Mode </legend>
       <input type="radio"
       name='mode'
       id='offline-mode'
       onChange={NameHandler}
       value='offline-mode'
       checked={formData.mode === "offline-mode"}
       className='size-4 mr-2 ' />

        <label htmlFor="offline-mode" className='text-gray-700  text-left text-xl py-2'>Offline mode</label>
       <br />
        
      <input type="radio"
       name='mode'
       id='online-mode'
       onChange={NameHandler}
       value='online-mode'
       checked={formData.mode === "online-mode"}
       className='size-4 mr-2' />

      <label htmlFor="online-mode" className='text-gray-700  text-left text-xl py-2'>Online mode</label>
       </fieldset>
       <br />
       <label htmlFor="favcars" className='text-gray-700  text-left text-xl py-2'>Your Favorite Car  </label>
       <select name="favcar" 
       id="favcars"
       onChange={NameHandler}
       value={formData.favcar}
       className='outline outline-gray-500 outline-2 p-1  rounded-xs text-1rem text-gray-700'>

        <option value="SCORPOIO">SCORPOIO</option>
        <option value="THAR">THAR</option>
        <option value="MERCEDEZ">MERCEDEZ</option>
        <option value="DEFENDER">DEFENDER</option>
        <option value="BOLERO">BOLERO</option>

       </select>
       <br />
     
       <button className='bg-blue-500 rounded-xs w-22 p-2 text-xl text-center mx-auto cursor-pointer hover:bg-blue-600 text-white font-semibold'>Submit</button>
    </form>
    </>
  )
}

export default App
