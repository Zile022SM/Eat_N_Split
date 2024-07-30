import React, { useState } from "react";
import Button from "./Button";

function FormSplitBill({ friend, onSplitBill }) {
  
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const paidByFriend = bill ? bill - paidByUser : "";

  function handleSubmit(e) {
    e.preventDefault();

    if(!bill || !paidByUser) return;

    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
    
  }

  return (
    <form action="" className="form-split-bill ml-12" onSubmit={handleSubmit}>
      <h2>Split a bill with {friend.name}</h2>

      <label>Bill value</label>
      <input type="text" value={bill} onChange={(e) => setBill(+e.target.value)} />

      <label>Your expense</label>
      <input type="text" value={paidByUser} onChange={(e) => setPaidByUser(
          +e.target.value > bill ? paidByUser : +e.target.value
        )} />

      <label>{friend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label>Who is paying the bill</label>
      <select name="" id="" value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

export default FormSplitBill;
