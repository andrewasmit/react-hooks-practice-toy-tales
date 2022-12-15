import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toyList,onDeleteToy }) {

  const toysToDisplay = toyList.map(toy=>{
    return <ToyCard 
              key={toy.id}
              myKey={toy.id}
              image={toy.image}
              likes={toy.likes}
              name={toy.name}
              onDeleteToy={onDeleteToy}
            />
  })


  // Return of JSX
  return (
    <div id="toy-collection">{toysToDisplay}</div>
  );
}

export default ToyContainer;
