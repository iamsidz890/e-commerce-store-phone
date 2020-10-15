import React from 'react'

function CartItem({item , value}) {
    const{id , title, img ,price , total , count} = item;
    const {increment , decrement , removeItem} = value; 
    return (
        <div className='container-fluid text-center d-none d-lg-block'>
            <div className='row'>
            <div className='col-10 mx-auto col-lg-2'>
                <img src={img} style={{width:'5rem' , height:"5rem" }} className='img-fluid' alt='product'/> 
            </div>

            <div className='col-10 mx-auto col-lg-2'>
                {/* <span className='d-lg-none'>product:</span> */}
                 {title}
            </div>

            
            <div className='col-10 mx-auto col-lg-2'>
                <span className='d-lg-none'>price:</span>
                 {price}
                 
            </div>

            <div className='col-10 mx-auto col-lg-2  '>
                <div className='d-flex justify-content-center'>
                    <div>
                        <span className='btn btn-black mx-1' onClick={()=>decrement(id)}>-</span>
                         <span className='btn btn-black mx-1' >{count}</span>
                        <span className='btn btn-black mx-1' onClick={()=>increment(id)}>+</span>
                     </div>
                    
                </div>
            </div>

            <div className='col-10 mx-auto col-lg-2'>
                <div className='cart-icon' onClick={()=>removeItem(id)}><i className='fas fa-trash'/></div>
            </div>

              <div className='col-10 mx-auto col-lg-2'>
              
              <strong>item total: Rs.{total}</strong>
               
            </div>
            </div>
            
        </div>

          




    )
}

export default CartItem
