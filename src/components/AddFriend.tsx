import { useState } from 'react';
import plus from '../images/add.svg';

const AddFriend = () => {
  const [add, setAdd] = useState('');

  const handleChange = (event:any) => {
    setAdd(event.target.value);
  };

  const handleAddFriend = () => {
    /*You can put The logic 
    you want to check db and
     send Friend Request Later*/
    setAdd('');
  };

  return (
    <div className='addFriend'>
      <div className="title">
        <h1>Add Friend</h1>
      </div>
      <div className="add">
        <input
          onChange={handleChange}
          type="text"
          placeholder='Enter username'
          value={add} // Bind the input value to the state
        />
        <button onClick={handleAddFriend}>
          <img src={plus} alt='+' />
          Add a Friend
        </button>
      </div>
    </div>
  );
};

export default AddFriend;
