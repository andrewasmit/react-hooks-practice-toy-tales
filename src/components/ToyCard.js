import React, {useState} from "react";

function ToyCard({ myKey, name, image, likes, onDeleteToy }) {

  const [likeAmount, setLikeAmount] = useState(likes);

  function handleDelete(e){
    e.preventDefault();
    fetch(`http://localhost:3001/toys/${myKey}`, {
      method: "DELETE"
    })
    .then(res=>res.json())
    .then(console.log("Deleted Toy w/ ID # ", myKey))
    onDeleteToy(myKey);
  }

  function handleLikeClick(){
    console.log("Toy w/ ID of ", myKey, " CLICKED")
    fetch(`http://localhost:3001/toys/${myKey}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        likes: likeAmount+1
      }),
    })
    .then(res=>res.json())
    .then(data=>console.log("After PATCH: ", data))
    setLikeAmount(likeAmount+1)
  }

  // Return JSX
  return (
    <div className="card" id={myKey}>
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likeAmount} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
