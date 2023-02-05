import { useState,useEffect } from 'react';
import Aitem from './Additems';
import './App.css';
import Sbar from './Sbar';
import Display from './display';


function App() {
  const [filter,setFilter]=useState({});
  const [data,setData]=useState({items:[]});
  useEffect(()=>{
    fetch("http://localhost:3000/items")
    .then((Response)=>Response.json())
    .then((data)=>setData({items:data}));
  },[]);

 

  const additem=(item)=>{
    let items=data["items"];
    const req={
      method:"POST",
      headers:{
        "content-type":"application/json",
      },
      body:JSON.stringify(item),
    };
    fetch("http://localhost:3000/items",req)
    .then((Response)=>(Response.json()))
    .then((data)=>{
      items.push(data);
     setData({items:items});

    });

  }

  const updateFilter=(spara)=>{
    setFilter(spara);
  }

  const ditem=(item)=>{
    const items=data["items"];
    const req={
      method:"DELETE",
    };
    fetch(`http://localhost:3000/items/${item.id}`,req)
    .then((Response)=>{
      if(Response.ok){
        const idx =items.indexOf(item);
        items.splice(idx,1);
        setData({items:items});
      }
    })
  }
  
  const fdata=(data)=>{
    const rdata=[];
    if(!filter.name){
      return data;
    }

    for(const item of data){
      if(filter.name !=="" && item.name!==filter.name){
        continue;
      }
      if(filter.price !==0 && item.price>filter.price){
        continue;
      }
      if(filter.type !=="" && item.type!==filter.type){
        continue;
      }
      if(filter.brand !=="" && item.brand!=filter.brand){
        continue;
      }
      rdata.push(item);
    }

    return rdata;
  }

  return (
    <div className="container">
       <Display ditem={ditem} items={fdata(data["items"])}/> 
      <Sbar call={updateFilter}/>    
      <Aitem aitem={additem}/>
      
      
    </div>
  );
}

export default App;
