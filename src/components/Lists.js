import React from 'react'
import ListIteam from './ListIteam'
function Lists({del ,done,todos}) {
     if(todos.length <= 0){
          return(
               <div className='bg-danger p-3'>
                    <h4 className='text-white'>لیست انجام کارها خالی است</h4>
               </div>
          )
     }
     return (
          <div className="listWrap">
               <ul className="list-group">
                 {
                    todos && todos.map((todo)=> (
                         <ListIteam  title={todo.title}
                          delHandler={del}
                           doneHandler={done}
                           key={todo.id}
                           id={todo.id}
                           done={todo.done}
                           />
                    ))
                 }
               </ul>
          </div>
     )
}

export default Lists
   