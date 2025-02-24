import React, { useState } from 'react'

const LocalStorage = () => {

    const [input, setInput] = useState({fname:"", lname:""});
    console.log('input',input)
    const [data, SetData] = useState([])

    const handleChnage = (e) =>{
          const {name, value} = e.target.value
          setInput({
            ...input,
            [name] :value
          })
    }
    const save = () =>{
        SetData([...input, data])
        setInput({fname:"", lname:""})
    }
  return (
    <div style={{padding:'2em'}}>
        
       <h3> LocalStorage</h3>
        <input type='text' placeholder='enter data' name='fname'
        value={input.fname} onChange={handleChnage} />
        <input type="text" placeholder='enter data' name='lname'
         value={input.lname} onChange={handleChnage}  />
         <button onClick={save}>Submit</button>
   </div>
  )
}

export default LocalStorage