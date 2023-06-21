import add from '../images/add.svg'

const AddFriend = () => {
  return (
    <div className='addFriend'>
      <div className="title">
        <h1>Add Friend</h1>
      </div>
      <div className="add">
        <input type="text" placeholder='Enter username' />
        <button><img src={add} alt='add a friend' />Add a Friend</button>
      </div>
    </div>
  )
}

export default AddFriend
