import React from 'react'
import HistoryWrapper from '../components/HistoryWrapper';
import HistoryPagination from '../components/HistoryPagination';

const History: React.FC = () => {

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
