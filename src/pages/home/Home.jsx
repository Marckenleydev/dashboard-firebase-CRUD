import React from 'react'
import Chart from '../../components/chart/Chart'
import Feature from '../../components/feature/Feature'
import Navbar from '../../components/navabar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Table from '../../components/table/Table'
import Widgets from '../../components/widgets/Widgets'
import "./home.scss"

function Home() {

   

      
  return (
    <div className='home'>
    <Sidebar/>
    <div className='homeContainer'>
        <Navbar/>
        <div className='widgets'>
            <Widgets type="user"/>
            <Widgets type="products" />
            <Widgets type="order" />
            <Widgets type="earning" />
            
        </div>
        <div className='charts'>
        <Feature/>
        <Chart title="Last 6 Months (Revenue)" aspect={2/1}/>

        </div>
        <div className='listContainer'>
        <div className='listTitle'>Lastest Transaction</div>
        <Table/>

        </div>
    </div>

    </div>
  )
}

export default Home