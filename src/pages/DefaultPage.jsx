import React from 'react';
import './Pages.css';
import { Link, useNavigate, useRouteError } from 'react-router-dom';

const DefaultPage = () => {
  const error = useRouteError();
  console.log(error);

  const navigate = useNavigate();
  console.log(navigate)
  const handleGoBack = () => {
    navigate(-1)
  }
  if(error.status === 404){
  return (
   <>
   <section className="page_404">
    {/* <div className="container"> */}
	<div class="error-page-container">
    <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/page_not_found_su7k.svg" alt="404"/>
    
    <h4>
      Oopps! The page you were looking doesn't exist.
    </h4>
    
    {/* <p>
      <Link to='/' class="button">
        Go to home page
      </Link>
    </p> */}
    <button className='button' onClick={handleGoBack}>Go Back</button>
    
  </div>
    {/* </div> */}
</section>
   </>
  )
}
}

export default DefaultPage