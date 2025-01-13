import React from 'react'
import { Form } from 'react-router-dom'

export const contactData = async({request}) => {
try {
  const res = await request.formData();
  const data = Object.fromEntries(res);
  console.log(data)
} catch (error) {
  console.log(error)
}
}

const Contact = () => {
  return (
    <section className="contact-page-sec">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-map-marked"></i>
              </div>
              <div className="contact-info-text">
                <h2>address</h2>
                <span>1215 Lorem Ipsum, Ch 176080 </span> 
                <span>Chandigarh , INDIA</span> 
              </div>
            </div>            
          </div>          
        </div>          
        <div className="col-md-4">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-info-text">
                <h2>E-mail</h2>
                <span>info@LoremIpsum.com</span> 
                <span>yourmail@gmail.com</span>
              </div>
            </div>            
          </div>                
        </div>                
        <div className="col-md-4">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="contact-info-text">
                <h2>office time</h2>
                <span>Mon - Thu  9:00 am - 4.00 pm</span>
                <span>Thu - Mon  10.00 pm - 5.00 pm</span>
              </div>
            </div>            
          </div>          
        </div>          
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="contact-page-form" method="post">
            <h2>Get in Touch</h2> 
            <Form action="" method="post">
              <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="single-input-field">
                  <input type="text" placeholder="Your Name" name="name"/>
                </div>
              </div>  
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="single-input-field">
                  <input type="email" placeholder="E-mail" name="email" required/>
                </div>
              </div>                              
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="single-input-field">
                  <input type="text" placeholder="Phone Number" name="phone"/>
                </div>
              </div>  
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="single-input-field">
                  <input type="text" placeholder="Subject" name="subject"/>
                </div>
              </div>                
              <div className="col-md-12 message-input">
                <div className="single-input-field">
                  <textarea  placeholder="Write Your Message" name="message"></textarea>
                </div>
              </div>                                                
              <div className="single-input-fieldsbtn">
                <input type="submit" value="Send Now"/>
              </div>                          
            </div>
            </Form>   
          </div>      
        </div>
        <div className="col-md-4">        
          <div className="contact-page-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d448714.5792081782!2d77.40182545!3d28.5222018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1736785237549!5m2!1sen!2sin" width="100%" height="450" style={{border:'0'}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            {/* <iframe src="" width="100%" height="450" frameborder="0" style="border:0" allowFullScreen='' loading='lazy'></iframe> */}
          </div>          
        </div>        
      </div>
    </div>
  </section>
  )
}

export default Contact