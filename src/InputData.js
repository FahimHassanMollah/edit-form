import React, { useEffect, useState } from 'react'

const InputData = (props) => {
    const [name, setName] = useState(props.pd.name)
    const [quantity, setQuantity] = useState(props.pd.quantity)
    useEffect(() => {
        console.log(name);
        props.updateArray(props.pd.id,{name,quantity,id:props.pd.id})
        return () => {
            
          
        }
    }, [name,quantity])
    const updateName = (e) => {
        let newName = {...name};
        newName=e.target.value
        setName(newName)
    }
    const updateQuantity = (e) => {
        let newQuantity = {...quantity};
        newQuantity = e.target.value
        setQuantity(newQuantity)
    }
    return (
        <div>
            <div >
                <input type="text" value={name}  onChange={(e)=>updateName(e)} />

                <input type="text" value={quantity} onChange={(e)=>updateQuantity(e)} />
                <hr />
            </div>
        </div>
    )
}

export default InputData
