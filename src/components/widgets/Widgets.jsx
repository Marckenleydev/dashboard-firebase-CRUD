import React,{useEffect, useState} from 'react'
import './widgets.scss'
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { collection, where,query,getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

const Widgets = ({type}) => {
    const [amount,  setAmount] = useState(null)
    const [diff, setDiff] = useState(null)
    let data;
    

    switch(type){
        case "user":
            data = {
                title:"USERS",
                isMoneys:false,
                link:"see all users",
                query:"users",
                icon: <PersonOutlinedIcon className='icon' style={{
                    color:"crimson",
                    backgroundColor: "rgba(255, 0, 0, 0.2)",
                }}/>,
            };
            break;
            case "order":
            data = {
                title:"ORDERS",
                isMoneys:false,
                link:"view all orders",
                icon: <ShoppingCartOutlinedIcon className='icon'  style={{
                    backgroundColor: "rgba(218, 165, 32, 0.2)",
                    color: "goldenrod",
                  }}/>,
            };
            break;
            case "earning":
            data = {
                title:"EARNINGS",
                isMoneys:false,
                link:"view net earning",
                icon: <MonetizationOnOutlinedIcon className='icon'   style={{ 
                    backgroundColor: "rgba(0, 128, 0, 0.2)",
                     color: "green" }}/>,
            };
            break;
            case "products":
            data = {
                title:"PRODUCTS",
                query:"products",
                link:"see details",
                icon: <AccountBalanceWalletOutlinedIcon className='icon' style={{
                    backgroundColor: "rgba(128, 0, 128, 0.2)",
                    color: "purple",
                  }}/>,
            };
            break;

            default:
            
    }


      useEffect(()=>{
    const fetchData = async ()=>{
        const today= new Date();
        const lastMonth =new Date (new Date().setMonth(today.getMonth() - 1))
        const  prevMonth = new Date(new Date().setMonth(today.getMonth() - 2))
       

        const lastMonthQuery  = query(
            collection(db, data.query),
            where("timeStamp", "<=", today),
            where("timeStamp", ">", lastMonth),
        );

        const prevMonthQuery  = query(
            collection(db, data.query),
            where("timeStamp", "<=", lastMonth),
            where("timeStamp", ">", prevMonth),
        )

        // console.log(prevMonth)
        const lastMonthData = await getDocs(lastMonthQuery)
        const prevMonthData = await getDocs(prevMonthQuery)
       
        setAmount(lastMonthData.docs.length)
        setDiff(((lastMonthData.docs.length - prevMonthData.docs.length) / prevMonthData.docs.length) * 100)
       
  
    }
    fetchData()
},[])

console.log(amount)



  return (
    <div className='widget'>
        <div className='left'>
            <span className='title'>{data.title}</span>
            <span className='counter'>{data.isMoneys && "$"} {amount} </span>
            <span className='link'>{data.link}</span>
        </div>
        <div className='right'>
        <div className='percentage positive'>
          <KeyboardArrowUpIcon />
          {diff}%
        </div>
       {data.icon}


        </div>
    </div>
  )
}

export default Widgets