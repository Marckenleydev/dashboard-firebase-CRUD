import React, { useEffect, useState } from 'react'
import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { Link , useLocation } from "react-router-dom";
import {collection, doc,deleteDoc, getDocs,onSnapshot,} from "firebase/firestore"
import { db } from '../../firebase';

const Datatable = ({columns}) => {
 const [data, setData]= useState([])


   useEffect(() => {
 const unsub = onSnapshot(
  collection(db, "users"),
  (snapShot) => {
    let list = [];
    snapShot.docs.forEach((doc) => {
      list.push({ id: doc.id, ...doc.data() });
    });
    setData(list);
  },
  (error) => {
    console.log(error);
  }
);

return () => {
  unsub();
};
}, []);

 

  const handleDelete = async(id) => {
    try {
      
      await deleteDoc(doc(db,"users", id));
      setData(data.filter((item) => item.id !== id));
      console.log(data.id)

    } catch (err) {
      console.log(err);
    }
    
  };
 

    const actionColumn = [
        {
            field:"action",
            headerName:"Action",
            width:200,

            renderCell:(params)=>{
                return(
                    <div className='cellAction'>
                      <Link to="/users/test" style={{textDecoration:"none"}}>
                        <div className='viewButton'>View</div>
                        </Link>
                        <div className='deleteButton' onClick={() => handleDelete(params.row.id)}>Delete</div>
                    </div>
                )
            }
        }
    ]

   
    // className='dataTable' style={{ height: 600, width: '100%' }}

  return (
    <div className='dataTable' style={{ height: 600, width: '100%' }}>
    <div className="dataTableTitle">
      Add New User
      <Link to="/users/new" className="link">
        Add New
      </Link>
    </div>
    <DataGrid
      className="datagrid"
      rows={data}
      columns={columns.concat(actionColumn)}
      pageSize={9}
      rowsPerPageOptions={[9]}
      
     
    />
  </div>
  )
}

export default Datatable