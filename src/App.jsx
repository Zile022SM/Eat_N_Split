import { useState } from "react";
import "./App.css";
import FriendsList from "./FriendsList";
import FormAddFrined from "./FormAddFrined";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [newFriends, setNewFriends] = useState(initialFriends);
  const [selectFriend, setSelectFriend] = useState(null);

  function handleSelectFriend(friend) {
    setSelectFriend(current =>current?.id === friend.id ? null : friend);
    setShowAddFriend(false);
  }

  function handleAddFriend(newFriend) {
    setNewFriends((friends) => [...friends, newFriend]);

    //another way to hide form when friend is added
    //setShowAddFriend(false);
  }

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
    setSelectFriend(null);
  }

  function handleSplitBill(value){
    setNewFriends(friends =>friends.map(friend => friend.id === selectFriend.id ? { ...friend, balance: friend.balance + value } : friend));

    setSelectFriend(null);
  }

  return (
    <div className="grid grid-cols-1 my-4 md:flex justify-between gap-6">
      <div className="sidebar mb-10">
        <FriendsList
          friends={newFriends}
          onSelectFriend={handleSelectFriend}
          selectFriend={selectFriend}
        />

        {showAddFriend && (
          <FormAddFrined
            onAddFriend={handleAddFriend}
            onShowFriends={handleShowAddFriend}
          />
        )}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>

      {selectFriend && <FormSplitBill friend={selectFriend} onSplitBill={handleSplitBill} />}
    </div>
  );
}

export default App;
