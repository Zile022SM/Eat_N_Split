import React from 'react';
import Button from './Button';

function FormAddFrined() {
  return (
    <>
        <form className='form-add-friend'>
            <label>Friend name</label>
            <input type="text" />

            <label>Image URL</label>
            <input type="text" />
            
            <Button>Add Friend</Button>
        </form>
        <Button>Close</Button>
    </>
  );
}

export default FormAddFrined;