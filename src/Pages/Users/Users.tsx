import React, { useState } from 'react'
import "./user.scss"
import { DataTable } from '../../Component/dataTable/DataTable'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { userRows } from '../../data';
import { Add } from '../../Component/add/Add';
import { useQuery } from '@tanstack/react-query';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {field:'img',headerName:'avatar',width:100,
        renderCell : (params)=>{
            return <img src={params.row.img || "/noavatar.png"} alt="" />
        }
    },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
        field: "email",
        type: "string",
        headerName: "Email",
        width: 100,
      },
      {
        field: "phone",
        type: "string",
        headerName: "Phone",
        width: 100,
      },
      {
        field: "createdAt",
        headerName: "Created At",
        width: 120,
        type: "string",
      },
      {
        field: "verified",
        headerName: "Verified",
        width: 100,
        type: "boolean",
      },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 110,
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
  ];
  
//   const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 ,status:true},
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31  ,status:false},
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
//   ];
export const Users = () => {
    const [open,setOpen]=useState(false);
   const { isLoading, data } = useQuery({
    queryKey: ["allusers"],
    queryFn: () =>
      fetch("http://localhost:8800/api/users").then(
        (res) => res.json()
      ),
  });

  return (
    <div className='users'>
        <div className="info">
            <h1>Users</h1>
            <button onClick={()=>setOpen(true)}>Add New User</button>
        </div>
       {isLoading ? ("loading...."):(<DataTable slug="users" columns={columns} rows={data}/>)}
        {open && <Add setOpen={setOpen} slug='user' columns={columns}/>}
    </div>
  )
}

