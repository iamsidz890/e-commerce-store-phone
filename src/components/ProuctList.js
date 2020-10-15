import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import {ProductConsumer} from '../context'


export default class ProuctList extends Component {

    render() {
        // console.log(this.state.products   );
        return (
           <>
               <div className='py-5'>
                   <div className='container'>
                   <Title name='our' title='products'/>
                       <div className='row'>
                            <ProductConsumer>
                                {/* use function to get data ...not passing as props*/}
                                {(value)=>{
                                    return value.products.map((product)=>{
                                        return <Product key={product.id} product={product}  />
                                    })
                                }}
                            </ProductConsumer>
                       </div>
                   </div>
               </div>
           </>
        )
    }
}
