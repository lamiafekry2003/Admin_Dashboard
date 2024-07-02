import React from 'react'
import { useState } from 'react';
import { DataTable } from '../../Component/dataTable/DataTable';
import { Add } from '../../Component/add/Add';
import { GridColDef } from '@mui/x-data-grid';
import { products } from '../../data';
import "./product.scss"
import { useQuery } from '@tanstack/react-query';
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 200,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 100,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 100,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 100,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 100,
    type: "boolean",
  },
];


export const Products = () => {
  const [open,setOpen]=useState(false);
   const { isLoading, data } = useQuery({
    queryKey: ["allusers"],
    queryFn: () =>
      fetch("http://localhost:8800/api/products").then(
        (res) => res.json()
      ),
  });

  return (
    <div className='products'>
        <div className="info">
            <h1>Products</h1>
            <button onClick={()=>setOpen(true)}>Add New Product</button>
        </div>
        {isLoading ? ("loading....."):(<DataTable slug="products" columns={columns} rows={data}/>)}
        {open && <Add setOpen={setOpen} slug='product' columns={columns}/>}
    </div>
  )
}
