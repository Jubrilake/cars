import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {changeCost, changeName, addCar} from "../store"

const CarForm = () => {
const dispatch = useDispatch()
const {name,cost} = useSelector(state => {
  return {
    name: state.form.name,
    cost: state.form.cost
  }

})

  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value))

  }
  const handleCostChange = (e) => {
    dispatch(changeCost(parseInt(e.target.value)))
    console.log(cost)
  }

  const handleSumbit = (e) => {
    e.preventDefault()
    if(name === "" || cost === 0){
      alert('input both value')
    }else {
      dispatch(addCar({name,cost}))
    }
    
  }
  return (
    <div className='car-form panel'>
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSumbit} >
       <div className="field-group">
         <div className="field">
            <label className="label">Name</label>
            <input type="text" className="input is-expanded"  value={name} onChange={handleNameChange}/>
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input type="number" className="input is-expanded"  value={cost} onChange={handleCostChange}/>
          </div>
        </div>
        <div className="field">
          <button className='button is-link'>Submit</button>
        </div>
      </form>

    </div>
  )
}

export default CarForm