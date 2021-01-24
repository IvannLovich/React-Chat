import React, { useState, useEffect } from 'react';


const TaskList = ({tasks,newTasksState }) => {

  const deleteItem = id => {
    newTasksState(tasks.filter(element => element.id !== id ))
  }

  const changeCheckField = id => {
    newTasksState(tasks.map(element => {
      if(element.id === id){
        if(element.checked === false){
          element.checked = true;
        }else{
          element.checked = false;
        }
      }
      return element;
    }))
  }

  return (
    <ul>
    {tasks.map(element => {
      return (
        <div>
          <li key={element.id}>
            {element.name}
            <button onClick={() => deleteItem(element.id)}>Delete</button>
            <button onClick={() => changeCheckField(element.id)}>{element.checked ? "True" : "False"}</button>
          </li>
        </div>
      )
    })}
    </ul>
  )
}


function App() {
  const [listOfTasks, setListOfTasks] = useState([
  { id: 0, checked: true, name: 'Eat breakfast' },
  { id: 1, checked: false, name: 'Read a book' }
])
  const [newTask, setNewTask] = useState('') 

  useEffect(() => {
    return listOfTasks;
  },[listOfTasks])

  const addNewTask = e => {
    setNewTask(e.target.value);
  } 

  const newTaskAdded = () => {
    setListOfTasks(oldArray => [...oldArray, { id: 2, checked: false, name: newTask }])
    
  }

  
  console.log("TASKS===>", listOfTasks)
  
  return (
    <>
      <h1>Today</h1>
      <div className="wrapper">
        <TaskList 
        tasks={listOfTasks}
        newTasksState={setListOfTasks}
        />
        <input 
        onChange={addNewTask}
        placeholder="Create a new todo" />
        <button onClick={newTaskAdded}>Create</button>
      </div>
    </>
  );
}

export default App;
