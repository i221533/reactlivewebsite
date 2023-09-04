import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
const Contact=()=>{

    return(

      <>
        <div className='contactdiv1'>
           <h1 className='text-center'> Conatct Us</h1> 
        <h2  className='text-center'>contact us the get started</h2>
        <hr className='conatcthr'/>
<div className='container'>
        <div className='row'>
        <div className='col-lg-6 div2'>
        
        <h1> uqsdkcdfvl</h1>
         </div>
         <div className='col-lg-6 div3'>
        
      <form className='form-class'>
      <label> YourName</label>   <label className='label2'> Email</label><br/>

      <input type='text' className='input1' name='name'placeholder='Enter your Name'/>
      <input type='email' className='input2' name='email'placeholder='Enter your email'/> <br/>
      <label> Subject</label>
      <input type='text' className='input3' name='subject'placeholder='Subject'/> <br/>
      <label> Message</label><br/>
      <textarea type="message"> </textarea>
    <button className='btn2'> Submit </button>
       </form>
         </div>
         </div>
        </div>
        </div>
      </>

    );
}
export default Contact;