// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // function App() {
// //   const [materials, setMaterials] = useState([]);      // Holds materials fetched from backend
// //   const [selectedMaterial, setSelectedMaterial] = useState('');  // Selected material by user
// //   const [quantity, setQuantity] = useState('');       // Quantity input by user
// //   const [result, setResult] = useState('');           // Result from backend API

// //   // Fetch materials from backend when component mounts
// //   useEffect(() => {
// //     axios.get('http://localhost:5000/api/materials')
// //       .then((res) => setMaterials(res.data))          // Save materials list in state
// //       .catch(err => console.error(err));
// //   }, []);

// //   // Called when user clicks "Calculate"
// //   const calculateFootprint = () => {
// //     axios.post('http://localhost:5000/api/calculate_footprint', {
// //       items: [{ material: selectedMaterial, quantity: quantity }]
// //     }).then((res) => {
// //       setResult(res.data.total_carbon_footprint);    // Display the calculated result
// //     }).catch(err => console.error(err));
// //   };

// //   return (
// //     <div style={{ padding: '20px' }}>
// //       <h2>Carbon Footprint Calculator</h2>

// //       {/* Dropdown to select material */}
// //       <select value={selectedMaterial} onChange={(e) => setSelectedMaterial(e.target.value)}>
// //         <option value="">Select Material</option>
// //         {materials.map((mat) => (
// //           <option key={mat.id} value={mat.name}>{mat.name}</option>
// //         ))}
// //       </select>

// //       {/* Quantity input */}
// //       <input
// //         type="number"
// //         placeholder="Quantity"
// //         value={quantity}
// //         onChange={(e) => setQuantity(e.target.value)}
// //       />

// //       {/* Calculate button */}
// //       <button onClick={calculateFootprint}>Calculate</button>

// //       {/* Display result */}
// //       {result && <h3>Total Carbon Footprint: {result} kg CO₂e</h3>}
// //     </div>
// //   );
// // }

// // export default App;

// // import React,{useState,useEffect} from 'react';
// // import axios from 'axios';
// // function App(){
// //   const [materials,setMaterials] = useState([]);
// //   const [selectedMaterial,setSelectedMaterial] = useState('');
// //   const [quantity,setQuantity] = useState('');
// //   const [result,setResult] = useState('');
// //    useEffect(() => {
// //     axios.get('http://localhost:5000/api/materials')
// //     .then((res) => setMaterials(res.data))
// //     .catch(err => console.error(err));
// //    },[]);
// //    const calculateFootprint = () =>{
// //     axios.post('http://localhost:5000/api/calculate_footprint',{
// //       items:[{material:selectedMaterial,quantity:quantity}]
// //     }).then((res) => {setResult(res.data.total_carbon_footprint);
// //       setQuantity('');
// //      // setMaterials('');
// //     }).catch(err => console.error(err));
// //    };
// //    return(
// //     <div style ={{padding :'20px'}}>
// //       <h2>Carbon FootPrint Calci</h2>
// //       <select value={selectedMaterial} onChange={(e) =>setSelectedMaterial(e.target.value)}>
// //         <option value="">Select Material</option>
// //         {materials.map((mat)=>(<option key={mat.id}value ={mat.name}>{mat.name}</option>))}
// //       </select>
// //       <input type="number"placeholder='Quantity'value={quantity}onChange={(e) => setQuantity(e.target.value)}/>
// //     <button onClick={calculateFootprint}>Calculate</button>
// //     {result &&<h3>Total Carbon FootPrint:{result}kg Co2e</h3>}
// //     </div>
// //    )
// // } export default App;
// // import React,{useState,useEffect} from 'react';
// // import axios from 'axios';
// // function App(){
// //   const [materials,setMaterials] = useState([]);
// //   const [selectedMaterial,setSelectedMaterial] = useState('');
// //   const [quantity,setQuantity] = useState('');
// //   const [result,setResult] = useState('');
// // useEffect(() =>{
// //   axios.get("http://localhost:5000/api/materials")
// //   .then((res) =>setMaterials(res.data))
// //   .catch(err=> console.error(err));
// // },[]);
// // const calculateFootprint=()=>{
// //   axios.post('http://localhost:5000/api/calculate_footprint',{
// //     items:[{material:selectedMaterial,quantity:quantity}]
// //   }).then((res) => {setResult(res.data.total_carbon_footprint);
// //     setQuantity('')
// //   }).catch(err => console.error(err));
// // };
// // return (
// //   <div style={{ padding : '20px'}}>
// //     <h3> Carbon Footprint Calculator</h3>
// //     <select value={selectedMaterial} onChange={(e) =>setSelectedMaterial(e.target.value)}>
// //       <option value=''>Select Material</option>
// //       {materials.map((mat) =><option key ={mat.id}value={mat.name}>{mat.name}</option>)}
// //     </select>
// //     <input value ={quantity} type = "number" placeholder='Quantity'onChange={(e)=>setQuantity(e.target.value)}/>
// //     <button onClick ={calculateFootprint}>Calculate</button>
// //     {result && <h3>Total Carbon FootPrint:{result}kg co2e</h3>}
// //   </div>
// //   )
// // }export default App;
// //import { use, useEffect, useState } from 'react';
// import React,{useState,useEffect} from 'react';
// import axios from 'axios';
// function App(){
//   const [materials,setMaterials] = useState([]);
//   const [selectedMaterial,setSelectedMaterial] = useState('');
//   const [quantity,setQuantity] = useState('');
//   const [result,setResult] = useState('');
//   useEffect(()=> {
//     axios.get("http://localhost:5000/api/materials")
//     .then((res)=>setMaterials(res.data))
//     .catch(err => console.error(err));
//   },[]);
//   const calculateFootprint=() =>{
//     axios.post("http://localhost:5000/api/calculate_footprint",{
//       items:[{material:selectedMaterial,quantity:quantity}]
//     }).then((res)=>{setResult(res.data.total_carbon_footprint);
//       setQuantity('');
//     }).catch(err => console.error(err));
//   };
//   return (
//     <div style={{ padding:'20px'}}>
//       <h3> Carbon FootPrint Calci</h3>
//       <select value={selectedMaterial} onChange={(e) =>setSelectedMaterial(e.target.value)}>
//         <option value=''>Select Material</option>
//         {materials.map((mat)=><option key={mat.id}value={mat.name}>{mat.name}</option>)}
//       </select>
//       <input type ="number"value={quantity}placeholder='Quantity'onChange={(e) => setQuantity(e.target.value)}/>
//       <button onClick={calculateFootprint}>Calculate</button>
//       {result && <h3>Total Carbon FootPrint{result}kg co2e</h3>}
//     </div>
//   )
// }export default App;