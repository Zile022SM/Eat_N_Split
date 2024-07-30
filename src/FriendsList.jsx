import React from 'react';
import OneFriend from './OneFriend';

function FriendsList({ friends,onSelectFriend,selectFriend }) {

  return (
    <ul>
      {friends.map((friend) => (
        <OneFriend key={friend.id} friend={friend} onSelectFriend={onSelectFriend} selectFriend={selectFriend} />
      ))}
    </ul>
  );
}

export default FriendsList;