import AddFriend from "../components/AddFriend"
import Invitations from "../components/Invitations"
import Table from "../components/Table"
//import useRequireAuth from '../hooks/useRequireAuth'



const Friends = () => {
//  useRequireAuth() 

  return (
    <div className='Friends'>
      <div className="addFriend-acceptFriend">
        <AddFriend />
        <Invitations />
      </div>
      <div className="dataTable-friends">
        <Table />
      </div>
    </div>
  )
}

export default Friends
