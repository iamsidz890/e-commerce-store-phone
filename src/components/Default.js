import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        console.log(this.props);
        return (
          <div className='container'>
              <div className='row'>
                  <div className='col-10 mx-auto text-center text-title text-uppercase pt-5'>
                      <h5 className='display-3'>4O4</h5>
                      <h1>Error</h1>
                      <h5>Page not Found</h5>
                      <h3>Requested url<span className='text-danger'>{this.props.location.pathname}</span> was not found.</h3>
                  </div>
              </div>
          </div>
        )
    }
}
