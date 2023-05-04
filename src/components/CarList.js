import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeCar } from '../store'

const CarList = () => {
const dispatch = useDispatch()

const {cars,name} = useSelector(({form,cars:{carList,searchTerm}}) => {
  const filteredCars = carList.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
  return {
    cars: filteredCars,
    name: form.name
  }
})


const handleCarDelete = (id) => { 
  dispatch(removeCar(id))
}
const renderedCars = cars.map(car => {
  const bold = name && car.name.toLowerCase().includes(name.toLowerCase())
     
  return (
    <div key={car.id} className={`panel ${bold && "bold"}`}>
      <p>
        {car.name} - ${car.cost}
      </p> 
      <button className='button is-danger' onClick={()=> handleCarDelete(car.id)} >
        delete</button> 
    </div>
  )
})

 
return (
    <div className='car-list'>{renderedCars}
     <hr />
    </div>
  )
}

export default CarList