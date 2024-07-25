import React from 'react';
import Button from './Button';

function FormSplitBill() {
  return (
    <form action="" className='form-split-bill'>
        <h2>Split a bill with X</h2>

        <label>Bill value</label>
        <input type="text" />

        <label>Your expense</label>
        <input type="text" />

        <label>X's expense</label>
        <input type="text" disabled/>

        <label>Who is paying the bill</label>
        <select name="" id="" value={''}>
            <option value="you">You</option>
            <option value="friend">X</option>
        </select>

        <Button>Split bill</Button>

    </form>
  );
}

export default FormSplitBill;