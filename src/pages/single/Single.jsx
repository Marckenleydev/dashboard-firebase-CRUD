import React from 'react'
import Chart from '../../components/chart/Chart'
import Navbar from '../../components/navabar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import List from '../../components/table/Table'
import './single.scss'

function Single() {
  return (
    <div className='single'>
      <Sidebar/>
      <div className='singleContainer'>
        <Navbar/>

        <div className='top'>

          <div className='left'>

          <div className='editButton'>Edit</div>
            <h1 className='title'>Information</h1>
            <div className='item'>
              <img alt='' src='https://media-exp1.licdn.com/dms/image/C5603AQHh_pG6rHc4jA/profile-displayphoto-shrink_800_800/0/1645592659695?e=1663200000&v=beta&t=7qHwyR3AuX887-mGi9LFEk7L2iKuKSwEa7QSrqczIDM' className='itemImg' />
             
             <div className='details'>
                <h1 className='itemTitle'>MKenley</h1>

                <div className='detailsItem'>
                   <span className='itemKey'>Email:</span>
                   <span className='itemValue'>marckenlygbeau@gmail.com</span>
                </div>
               
                <div className='detailsItem'>
                   <span className='itemKey'>Phone:</span>
                   <span className='itemValue'>+90 552 294 9639</span>
                </div>

                <div className='detailsItem'>
                   <span className='itemKey'>Address:</span>
                   <span className='itemValue'>Meclis mahallesi/Istanbul</span>
                </div>

                <div className='detailsItem'>
                   <span className='itemKey'>Country:</span>
                   <span className='itemValue'>Turkey</span>
                </div>

             </div>
            </div>
          </div>

          <div className='right'>
            <Chart aspect={3/1} title="User Spending (Last 6 Months)"/>
          </div>
        </div>

        <div className='bottom'>
        <List/>

        </div>
      </div>
    </div>
  )
}

export default Single