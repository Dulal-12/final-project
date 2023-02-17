import React, { useState } from 'react';
import './Categories.css';
import shipping from '../../images/free-shipping.png';
import quality from '../../images/high-quality.png';
import { GetProductExtra } from '../../CustomHook/getProductsExtra';


const Categories = ({find}) => {

   
    

    return (
        <div>
              <div className="d-flex justify-content-center align-items-center mt-5"> 
                    <button className="btn btn-outline-dark">
                        <small>OUR CATEGORIES</small>
                    </button>
               </div>

               <div className="d-flex justify-content-center mt-3"> 
                   <span className="text text-center"><span style={{fontWeight:700,fontSize:'25px'}}>Finding Best Products Now<br/> in Your Fingertips</span></span> 
               </div>


               <div className='container'>
                
                    <div className="row mt-2 g-4 ">
                            <div className="col-md-3">
                                <div className="card p-2 card-container" onClick={()=>find('smartphones')}>
                                    <div className="d-flex justify-content-between align-items-center p-2">
                                        <div className="flex-column lh-1 imagename"> <span>MobilePhones</span> </div>
                                        <div> <img src="https://i.imgur.com/b9zkoz0.jpg" height="95" width="100" alt="" /> </div>
                                    </div>
                                </div>
                     </div>


                    <div className="col-md-3">
                        <div className="card p-2 card-container" onClick={()=>find('Toys')}>
                            <div className="d-flex justify-content-between align-items-center p-2">
                                <div className="flex-column lh-1 imagename"> <span>Toys</span> </div>
                                <div> <img src="https://i.ibb.co/vBkP0zS/doll3.png" height="95" width="100" alt="" /> </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-3">
                        <div className="card p-2 card-container" onClick={()=>find('Bag')}>
                            <div className="d-flex justify-content-between align-items-center p-2">
                                <div className="flex-column lh-1 imagename"> <span>Bag</span> </div>
                                <div> <img src=" https://iili.io/HROrmOv.md.jpg" height="95" width="100" alt="" /> </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-3">
                        <div className="card p-2 card-container" onClick={()=>find('Books')}>
                            <div className="d-flex justify-content-between align-items-center p-2">
                                <div className="flex-column lh-1 imagename"> <span>Books</span> </div>
                                <div> <img src="https://iili.io/HRO6MZl.md.png" height="95" width="100" alt="" /> </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card p-2tr5  card-container" onClick={()=>find('home-decoration')}>
                            <div className="d-flex justify-content-between align-items-center p-2">
                                <div className="flex-column lh-1 imagename"> <span>Home decoration</span> </div>
                                <div> <img src="https://iili.io/HROZTjs.md.png" height="112" width="100" alt=""/> </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card p-2 card-container" onClick={()=>find('Electronics')}>
                            <div className="d-flex justify-content-between align-items-center p-2">
                                <div className="flex-column lh-1 imagename"> <span>Electronic Tools</span> </div>
                                <div> <img src="https://iili.io/HRObuZg.md.png" height="100" width="100" alt="" /> </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card p-2 card-container" onClick={()=>find('Home Appliance')}>
                            <div className="d-flex justify-content-between align-items-center p-2">
                                <div className="flex-column lh-1 imagename"> <span>Home appliance</span> </div>
                                <div> <img src="https://iili.io/HROmrbt.md.jpg" height="100" width="100" alt="" /> </div>
                            </div>
                        </div>
                   </div>

                    <div className="col-md-3 mb-5">
                        <div className="card p-2 card-container" onClick={()=> find("laptops")}>
                            <div className="d-flex justify-content-between align-items-center p-2">
                                <div className="flex-column lh-1 imagename"> <span>Laptops</span> </div>
                                <div> <img src="https://i.imgur.com/6pK5oZl.jpg" height="100" width="100" alt="" /> </div>
                            </div>
                        </div>
                    </div>
    
    
         </div>

         {/* <div className="d-flex justify-content-center mt-3 mb-5"> 
                   <span className="text text-center"><span style={{fontWeight:700,fontSize:'25px'}}>Why Rent With Us ?</span></span> 
         </div> */}
        </div>


        {/* <div className="last-section">
           <div className='card p-5 m-5 text-center element'>
              <img src={shipping} alt=""/>
              <p>Free delivery</p>
           </div>

           <div className='card p-5 m-5 text-center element'>
             <img src={quality} alt=""/>
             <p>High Quality ensure</p>
           </div>
        </div> */}
    </div>
      
    );
};

export default Categories;