import { useState } from 'react';
import plus from '../images/add.svg';
import toast, { Toaster } from 'react-hot-toast';


const AddFriend = () => {
  const [add, setAdd] = useState('');

  const handleChange = (event:any) => {
    setAdd(event.target.value);
  };

  const handleAddFriend = () => {
    if(add.trim().length > 0) {
      toastAppear()
    }
    /*You can put The logic 
    you want to check db and
     send Friend Request Later*/
    setAdd('');
  };
  

  const toastAppear = () => {
    toast.success('Friend request has been sent.', {
      position: 'top-center',
      duration: 2000,
      style: {
        zIndex: '900',
        background: '#333',
        color: '#fff',
        boxShadow: '0 0 2px rgba(0, 0, 0, 0.1)',
        fontFamily: "'Poppins', sans-serif",
        fontSize: '0.9rem'
      },
    });
  }

  return (
    <div className='addFriend'>
      <Toaster />
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
        <button onClick={() => {handleAddFriend()}}>
          <img src={plus} alt='+' />
          Add a Friend
        </button>
      </div>
    </div>
  );
};

export default AddFriend;
