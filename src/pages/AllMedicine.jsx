import React from 'react'
import { Container } from 'react-bootstrap'
import { useLoaderData } from 'react-router-dom'

export const AllMedicine = () => {
  const medicineData = useLoaderData();
  console.log(medicineData);
  return (
    <Container>
    <h1>All Medicine</h1>
    
    {
      medicineData && medicineData.hits ? 
      <div className="row">
    <div className="col-md-4">
        <ul>
        {medicineData.hits.map((item,index)=>(
          <li key={index}>
            <img src={item.previewURL} alt={item.tags} />
            <p>{item.tags}</p>
          </li>
        ))}
      </ul>
      </div>
      </div> :  <p>No data available</p>
    }
    
    </Container>
  )
}
