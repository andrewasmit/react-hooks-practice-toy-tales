import React, {useState} from "react";

function ToyForm({ onNewSubmit }) {

  const [newName, setNewName] = useState("")
  const [newImage, setNewImage] = useState("")

  function handleSubmitNewToy(e){
    e.preventDefault();
    const newToy = {
      name: newName,
      image: newImage,
      likes: 0,
    } 
    // console.log(newToy)
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToy)
    })
    .then(res=>res.json())
    .then(data=>onNewSubmit(data));
  }

  // Return JSX
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmitNewToy}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value = {newName}
          onChange={(e)=>setNewName(e.target.value)}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          value={newImage}
          onChange={(e)=>setNewImage(e.target.value)}
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
