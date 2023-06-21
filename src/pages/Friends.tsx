import AddFriend from "../components/AddFriend"
import Invitations from "../components/Invitations"

const Friends = () => {
  return (
    <div className='Friends'>
      <div className="addFriend-acceptFriend">
        <AddFriend />
        <Invitations />
      </div>
    </div>
  )
}

export default Friends
