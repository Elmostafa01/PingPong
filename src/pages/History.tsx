import React from 'react'
import HistoryWrapper from '../components/HistoryWrapper';
import HistoryPagination from '../components/HistoryPagination';
//import useRequireAuth from '../hooks/useRequireAuth'


const History: React.FC = () => {
  //useRequireAuth() 

  return (
    <div className='history'>
      <div className="title">
        <h1>History</h1>
      </div>
      <HistoryWrapper />
      <HistoryPagination />
    </div>

  )
}

export default History
