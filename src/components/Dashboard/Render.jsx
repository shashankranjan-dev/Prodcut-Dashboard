import React from 'react'
import Chart from './Chart'
import Progress from './Progress'

function Render() {
  return (
    <div>
        <div className='flex'>
        <Chart></Chart>
        <Progress></Progress>
        </div>
    </div>
  )
}

export default Render