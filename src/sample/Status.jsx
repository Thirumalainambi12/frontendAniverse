import React from 'react'

function Status({isLog}) {
  return (
    <div className='statusContainer'>
      <div className={`status ${isLog ? "active" : "inactive"}`}></div>
      {isLog ? <h4>Online</h4> : <h4>Offline</h4>};
    </div>
  );
}

export default Status;
