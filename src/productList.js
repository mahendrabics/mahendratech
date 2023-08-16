

function ProductList({ products, deleteProduct, editProduct }) {
    return (
        <div>
        <table className='table m-3 '>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Projectname</th>
                    <th>Username</th>
                    <th>Workdescription</th>
                    <th>Startdate</th>
                    <th>Enddate</th>
                    <th>Workhours</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((data) => (
                        <tr key={data.id} >
                            <td>{data.id}</td>
                            <td>{data.projectname}</td>
                            <td>{data.username}</td>
                            <td>{data.workdescription}</td>
                            <td>{data.startdate}</td>
                            <td>{data.enddate}</td>
                            <td>{data.workhours}</td>
                            <td>
                                <button className='btn btn-primary m-2' onClick={() => editProduct(data)}>Edit</button>
                                <button className="btn btn-danger m-2" onClick={() => deleteProduct(data.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <div>
        </div>
        </div>
    )



};

export default ProductList;
