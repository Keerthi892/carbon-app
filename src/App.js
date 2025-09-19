// import React,{useState,useEffect} from 'react';
// import axios from 'axios';

// function App(){
//   const [materials,setMaterials] = useState([]);
//   const [selectedMaterial,setSelectedMaterial] =useState('');
//   const [quantity,setQuantity] = useState('');
//   const[result,setResult] =useState('');

//   useEffect(()=>{
//     axios.get("//http:localhost:5000/api/materials")
//     .then((res)=>setMaterials(res.data))
//     .catch(err => console.error(err))

//   });
//   const addingTask=>(){
//     if(!material||!quantity){
//       alert("Please fill the all fields")
//     }
//     axios.post("//http:localhost:5000/api/adding_task",{
//       items:({material,setSelectedMaterial:quantity,setQuantity})
//     }).then((res)=>{setResult=>( res.data.carbon_footprint_kg_co2e)
//     }).catch(err=>console.error(err))
//   }
//   return(
//     <div style={{padding :'20px'}}>
//       <select value={selectedMaterial} onChange={(e)=> selectedMaterial(e.target.value)}>
//         <option value=''>Selected Material</option>
//         {materials.map((mat)) =><option key={mat.id} value={mat.name}>{mat.name}</option>}
//       </select>
//       <input type="number"placeholder='Quantity'value={Quantity} onChange={(e) => setQuantity(e.target.value)}/>
//       <button onClick={addingTask}>Submit</button>
//       <h3>
//         Added material:{result}
//       </h3>
//     </div>
//   )
// }export default App;
import React, { useState, useEffect } from "react"; // These are import statments
function App() { // state management used for completing tasks
  const [tasks, setTasks] = useState([]);
  const [taskValue, setTaskValue] = useState("");
  const [result, setResult] = useState("");
  useEffect(() => { // loads initially ,yes we can use it multiple times 
    setTasks([]);
  }, []);

  const addingTask = () => { //for adding task
  const newTask = { id: Date.now(), name: taskValue, completed: false };
  setTasks([...tasks, newTask]);
  setResult('task added');
  setTaskValue("");
};
  const toggleTask = (id) => { //retrives the task from memory which user had entered based on id
    setTasks(tasks.map((task) =>task.id === id ? { ...task, completed: !task.completed } : task ));
  };
  const deleteTask = (id) => {// deletes the task if user clicks on the delete button based on id
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div style={{ padding: "20px" }}>
      <h2>To Do App</h2>
      <input type="text"placeholder="Enter task" value={taskValue} onChange={(e) => setTaskValue(e.target.value)}/>
      <button onClick={addingTask}>Add Task</button>
      <h3>{result}</h3>
      <ul>
        {tasks.map((task) => ( <li key={task.id}>
            <span onClick={() => toggleTask(task.id)}>{task.name}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}export default App;
