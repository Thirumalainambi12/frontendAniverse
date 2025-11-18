import React from 'react'

function Front({tasks, editName, editpass, editRepass, updateTasks, deleteTasks}) {

  const navigator = ("/Front")


  return (  
    <div className='front'>
      <h1>Welcome All🎉</h1>

    <div className='map'>
      <ul>{
        tasks.map(datas => (
          <li key = {datas.id} > 
          <input type='text' value={datas.name} onChange={(e)=>editName(e,datas.id)}/>
          <input type='text' value={datas.password} onChange={(e)=>editpass(e,datas.id)}/>
          <input type='text' value={datas.repassword} onChange={(e)=>editRepass(e,datas.id,"taskrepass")}/>
          <button onClick={() => updateTasks({id:datas.id, name:datas.name, password:datas.password, repassword_:datas.repassword})}>Update</button>
          <button onClick={() => deleteTasks(datas.id)}>Delete</button>
          </li>
        ))
        }
      </ul>
    </div>
    </div>
  )
}

export default Front
