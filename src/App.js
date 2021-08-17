import { useEffect, useState } from 'react';
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
  useEffect((id, obj) => {
    const updateArray = (id, obj) => {
      console.log(id, obj);
      setProdOptions(prodOptions.map((item, index) => item.id === id ? obj : item))
      console.log(prodOptions);
    }
    // updateArray()
  }, [prodOptions])
  const updateArray = (id, obj) => {
    console.log(id, obj);
    setProdOptions(prodOptions.map((item, index) => item.id === id ? obj : item))

  }
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center" >
        <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
      </div>
      <div>
        <table>
          <tr>
            <td>name</td>
            <td>quantity</td>
          </tr>

          {
            prodOptions.map((el, key) => {
              return (
                <tr>
                  <td>{el.name}</td>
                  <td>{el.quantity}</td>
                </tr>
              )
            })
          }

        </table>
      </div>
      <EditModal updateArray={updateArray} prodOptions={prodOptions}></EditModal>

    </div>

  );
}

export default App;
