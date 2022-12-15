import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyList, setToyList] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3001/toys")
    .then(r=>r.json())
    .then(data=>setToyList(data))
  }, [])

  console.log(toyList);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleNewToy(newToy){
    console.log("In App.js: ", newToy)
    setToyList([...toyList, newToy])
  }

  function handleDeleteToy(deletedToyId){
    console.log("In App,js: ", deletedToyId)
    const newToyList = toyList.filter(toy=>toy.id !==deletedToyId);
    setToyList(newToyList);
  }



  // Return of JSX
  return (
    <>
      <Header />
      {showForm ? <ToyForm onNewSubmit={handleNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyList={toyList} onDeleteToy={handleDeleteToy}/>
    </>
  );
}

export default App;
