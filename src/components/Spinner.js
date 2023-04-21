import React, { Component } from 'react'
// import loading1 from './loading1.gif'
import loading2 from './loading2.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        {/* <img src={loading1} alt="loading.." /> */}
        <img className='my-4' src={loading2} alt="loading.." />
      </div>
    )
  }
}

export default Spinner
