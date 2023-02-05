function Display({items,ditem}){
    const show =(item)=>{
        return(<tr>
            <th>{item.id}</th>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.type}</td>
            <td>{item.brand}</td>
            <td><button className="btn btn-danger" onClick={()=>{ditem(item)}}>Delete</button></td>
        </tr>);
    };
    return(
        <div className="container">
            <div className="row">
                <h1>ITEMS</h1>
            </div>
            <div className="row">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Type</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>{items.map(show)}</tbody>
                </table>
            </div>
            
        </div>

    );
}
export default Display;