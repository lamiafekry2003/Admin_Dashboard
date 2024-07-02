import React from 'react'
import './add.scss'
import {  GridColDef } from "@mui/x-data-grid";
import { useMutation, useQueryClient } from '@tanstack/react-query';

type Props={
    slug:string,
    columns:GridColDef[],
    setOpen:React.Dispatch<React.SetStateAction<boolean>>

}
export const Add = (props:Props) => {
    // TEST THE API

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => {
      return fetch(`http://localhost:8800/api/${props.slug}s`, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: 111,
          img: "",
          lastName: "Hello",
          firstName: "Test",
          email: "testme@gmail.com",
          phone: "123 456 789",
          createdAt: "01.02.2023",
          verified: true,
        }),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries([`all${props.slug}s`]);
    },
  });

  

    const handleSubmet=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        //add new item
        mutation.mutate();
         
         
    }
  return (
    <div className='add'>
        <div className="madal">
            <span className='close' onClick={()=>props.setOpen(false)}>x</span>
            <h1>Add New {props.slug}</h1>
            <form action="" onSubmit={handleSubmet}>
                {props.columns.filter(item=>item.field !== "id" && item.field !=="img").map(column=>(
                    <div className="item">
                        <label htmlFor="">{column.headerName}</label>
                        <input type={column.type} placeholder={column.field}/>
                    </div>
                ))}
                 <button>send</button>
            </form>
        </div>
    </div>
  )
}
