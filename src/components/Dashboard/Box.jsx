import React from 'react'
import Transaction from './Transaction';
import People from './People';

function Box() {
  return (
    <div>
        <div className='flex'>
<Transaction/>
<People/>
</div>
    </div>
  )
}

export default Box