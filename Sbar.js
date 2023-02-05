import {useState} from "react";

function Sbar(props){
    const [name,setName]=useState("");
    const [price,setPrice]=useState(0);
    const [type,setType]=useState("");
    const [brand,setBrand]=useState("");

    const SearchPressed=() =>{
        props.call({name:name,price:price,type:type,brand:brand});
    }

    return(
        <div className="container">
            <div className="row">
            <h1>
                    SEARCH FOR AN ITEM
                </h1>
                </div>
            <div className="row">
                <div className="col">
                <label htmlFor="name"  id="name">Name</label>
                <input type="text" id="name" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} ></input>
                </div>
                <div className="col">
                <label htmlFor="price"  id="price">Price</label>
                <input type="number" id="name" className="form-control" value={price} onChange={(e)=>setPrice(e.target.value)} ></input>
                </div>
                <div className="col">
                <label htmlFor="type"  id="type">Type</label>
                <input type="text" id="type" className="form-control" value={type} onChange={(e)=>setType(e.target.value)} ></input>
                </div>
                <div className="col">
                <label htmlFor="brand"  id="brand">Brand</label>
                <input type="text" id="brand" className="form-control" value={brand} onChange={(e)=>setBrand(e.target.value)} ></input>
                </div> 
            </div>
            <div className="row mt-3">
                <div className="col-4" />
            <button type="button" className="col-4 btn btn-dark" onClick={SearchPressed}>Search</button>
            </div>
        </div>
    );
}
export default Sbar;