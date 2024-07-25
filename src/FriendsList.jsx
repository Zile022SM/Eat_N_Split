import React from 'react';
import OneFriend from './OneFriend';

function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <OneFriend key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}

export default FriendsList;