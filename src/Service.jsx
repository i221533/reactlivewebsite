import React from 'react';
import web from '../src/images/img1.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const Service=()=>
{

const Card=(props)=>
{
  

    return (
<>

<div className="card" >
  <img src={web} class="card-img-top" alt="" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
  </div>
  </>
    );
}

    return(
       <>
       <div className="div1">

       <h1 className="text-center"> Our services </h1>
       <h2 className="text-center"> check our the great services we offer </h2>
       <div className='container-fluid ml-20 '>

<div className='row'>

<div className='col-10 max-auto'>
   <div class="row mt-10 ml-10">
      <div class="col-md-4 col-10 max-auto">
      <Card />
      
      
</div>
<div class="col-md-4">
      <Card/>
      
      
</div>
<div class="col-md-4">
      <Card/>
      
      
</div>
       </div>
   
   
</div>
</div>
</div>
        </div>
  

   
       </>
        
    );
}


export default Service;