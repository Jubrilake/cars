import React from 'react'
import { useSelector } from 'react-redux'


const CarValue = () => {

  const totalCost = useSelector(({cars: {carList,searchTerm}}) => 
     carList.filter(car => 
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    ).reduce((acc,car) => acc + car.cost
    ,0)  
  )
  console.log(totalCost)



  return (
    <div className='car-value'>
      Total Cost : ${totalCost}
    </div>
  )
}

export default CarValue