import React from 'react';
import './Pages.css';
import { useRouteError } from 'react-router-dom';

const DefaultPage = () => {
  console.log(useRouteError())
  return (
   <>
   <section className="page_404">
    <div classNameName="container">
		<div className="row">	
		<div className="col-sm-12 ">
		{/* <div className="col-sm-10 col-sm-offset-1  text-center"> */}
		<div className="four_zero_four_bg">
			<img src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif" alt="404 Notfound Image" />
		
		</div>
		
		<div className="contant_box_404 text-center">
		<h3 className="h2">
		Look like you're lost
		</h3>
		
		<p>the page you are looking for not avaible!</p>
		
		<a href="" className="link_404">Go to Home</a>
	</div>
		{/* </div> */}
		</div>
		</div>
    </div>
</section>
   </>
  )
}

export default DefaultPage