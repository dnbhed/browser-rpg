import React, {useState} from "react"

function NameInput() {

  const [name, setName] = useState("") 


  function handleNameChange(event) {
    setName(event.target.value)
  }


  return (
      <input
        type="text"
        placeholder="Character name"
        value={name}
        onChange={handleNameChange}
      />
      
  )
}

export default NameInput