import React from 'react';
import web from '../src/images/img1.jpg'
import './index.css';
const Home=()=>{

    return(

      <h1>
        <section id="header">
        <div className='container-fluid nav-lg'>

<div className='row'>

<div className='col-10 max-auto'>

<div class="row">
  <div class="col-lg-6">
     <h1>This is our Brand Name<strong class="brand-name"> Bilal Khan</strong></h1>
     
     <a href="/service" className="anchor-tag"> Get Started </a>
  </div>


  <div class="col-lg-6">
    <img src={web} className="animated-image" alt="" />

  </div>
 </div>
</div>
</div>
</div>
        </section>
      </h1>

    );
}
export default Home;