import React from "react";
import Button from "./Button";
import { useState } from "react";

function FormAddFrined({ onAddFriend, onShowFriends }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=499476");

  function handleSubmit(e) {
    e.preventDefault();

    const newFriend = {
      name,
      image,
      balance: 0,
      id: crypto.randomUUID(),
    };

    setName("");
    setImage("");

    onAddFriend(newFriend);

    onShowFriends();
  }

  return (
    <>
      <form className="form-add-friend mt-12" onSubmit={handleSubmit}>
        <label>Friend name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Image URL</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <Button>Add</Button>
      </form>
    </>
  );
}

export default FormAddFrined;
