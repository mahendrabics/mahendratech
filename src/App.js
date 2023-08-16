// import React, { useEffect, useState } from 'react';
// import ProductList from './productList';
// import ProductForm from './Form';
// import PieChartComponent from './PieChartComponent';
// import { deleteData, getData, putData, postData } from './api';





// const App = () => {
//   const [products, setProducts] = useState([]);
//   const [edit, setEdit] = useState(false);
//   const [openForm, setOpenForm] = useState(false);
//   const [initialForm, setInitialForm] = useState({
//     projectname: '',
//     username: '',
//     workdescription: '',
//     startdate: '',
//     enddate: '',
//     workhours: '',
//   });

//   useEffect(() => {
//     getAllProducts();
//   }, []);

//   async function getAllProducts() {
//     const response = await getData();
//     setProducts(response.data);
//   }

//   async function addProduct(product) {
//     let data = {
//       projectname: product.projectname,
//       username: product.username,
//       workdescription: product.workdescription,
//       startdate: product.startdate,
//       enddate: product.enddate,
//       workhours: product.workhours,
//     };

//     if (edit) {
//       await putData(product.id, data);
//     } else {
//       await postData(data);
//     }

//     getAllProducts();
//     setOpenForm(false);
//   }

//   async function deleteProduct(id) {
//     await deleteData(id);
//     getAllProducts();
//   }

//   function editProduct(value) {
//     setEdit(true);
//     setOpenForm(true);
//     setInitialForm(value);
//   }

//   function closeForm() {
//     setOpenForm(false);
//   }

//   function showForm() {
//     setInitialForm({
//       projectname: '',
//       username: '',
//       workdescription: '',
//       startdate: '',
//       enddate: '',
//       workhours: '',
//     });
//     setOpenForm(true);
//     setEdit(false);
//   }

//   return (
    
//     <div>

      
//         <h2 className="text-primary text-center">CRUD Operations with React JS</h2>
//         <button className="btn btn-primary float-end" onClick={showForm}>
//           Add Product
//         </button>

//         <ProductList products={products} deleteProduct={deleteProduct} editProduct={editProduct} />
//         {openForm && <ProductForm addProduct={addProduct} data={initialForm} closeForm={closeForm} />}
//         <PieChartComponent data={products} />
//         </div>
        
        
//   );
// };

// export default App;

import React, { useEffect, useState } from 'react';

import ProductList from './productList';
import ProductForm from './Form';
import PieChartComponent from './PieChartComponent';
import { deleteData, getData, putData, postData } from './api';





const App = () => {
  const [products, setProducts] = useState([]);
  const [edit, setEdit] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [initialForm, setInitialForm] = useState({
    projectname: '',
    username: '',
    workdescription: '',
    startdate: '',
    enddate: '',
    workhours: '',
  });

  useEffect(() => {
    getAllProducts();
  }, []);

  async function getAllProducts() {
    const response = await getData();
    setProducts(response.data);
  }

  async function addProduct(product) {
    let data = {
      projectname: product.projectname,
      username: product.username,
      workdescription: product.workdescription,
      startdate: product.startdate,
      enddate: product.enddate,
      workhours: product.workhours,
    };

    if (edit) {
      await putData(product.id, data);
    } else {
      await postData(data);
    }

    getAllProducts();
    setOpenForm(false);
  }

  async function deleteProduct(id) {
    await deleteData(id);
    getAllProducts();
  }

  function editProduct(value) {
    setEdit(true);
    setOpenForm(true);
    setInitialForm(value);
  }

  function closeForm() {
    setOpenForm(false);
  }

  function showForm() {
    setInitialForm({
      projectname: '',
      username: '',
      workdescription: '',
      startdate: '',
      enddate: '',
      workhours: '',
    });
    setOpenForm(true);
    setEdit(false);
  }

  return (
      
    
      <div>
        <h2 className="text-primary text-center">CRUD Operations with React JS</h2>
        <button className="btn btn-primary float-end" onClick={showForm}>
          Add Product
        </button>

        <ProductList products={products} deleteProduct={deleteProduct} editProduct={editProduct} />
        {openForm && <ProductForm addProduct={addProduct} data={initialForm} closeForm={closeForm} />}
        <PieChartComponent data={products} />
        {/* <Home/> */}
        
      </div>
      
    
  );
};

export default App;