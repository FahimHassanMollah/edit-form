import { useState } from 'react';
import './App.css';
import EditModal from './EditModal';

function App() {
  const [prodOptions, setProdOptions] = useState([
    {
      id: 1,
      name: "Lifebuoy Handwash",
      quantity: 1
    },
    {
      id: 2,
      name: "Dettol Handwash  ",
      quantity: 5
    }
  ])
  const updateArray = (id,obj) => {
    console.log(id,obj);
    setProdOptions(prodOptions.map((item,index)=>item.id===id ? obj:item))
    console.log(prodOptions);
  }
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height:"100vh" }}>
      <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
      <EditModal updateArray={updateArray} prodOptions={prodOptions}></EditModal>
    </div>
  );
}

export default App;
