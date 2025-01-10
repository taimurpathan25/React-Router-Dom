import React from 'react'
import { Container } from 'react-bootstrap'
import { Link, useLoaderData } from 'react-router-dom'

export const AllMedicine = () => {
  const medicineData = useLoaderData();
  console.log(medicineData);
  return (
    <Container>
    <h1>All Medicine</h1>
    
    {
      medicineData && medicineData.hits ? 
        <div className='row'>
        {medicineData.hits.map((item,index)=>(
          <div className='col-md-3' key={index}>
            <div className="main-section">
              <Link to={`/medicineDetail/${item.id}`}>
            <img src={item.previewURL} alt={item.tags} />
            {/* <h1>Id : {item.id}</h1> */}
            <p>{item.tags}</p>
            </Link>
          </div>
          </div>
        ))}
      </div> : <p>No data available</p>
    }
    
    </Container>
  )
}
