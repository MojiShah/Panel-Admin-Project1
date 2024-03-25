import React, { useState } from 'react';
import './Products.css';
import { products } from '../../Data';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { DeleteOutline } from '@mui/icons-material';

// Modal style
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

//////////////////////////////////////////


export default function Products() {
  ////////////////////////states////////////////////////////////////////////////
  const [productsData, setProductsData] = useState(products);

  ////////////////////////Functions/////////////////////////////////////////////
  const productDelete = productID => setProductsData(products.filter(product =>
    product.id != productID
  ));


  ////////////////////////////////Rows and Columns//////////////////////////////
  const Columns = [
    {
      field: 'number',
      headerName: 'Number',
      width: 90,
      renderCell: params => <h4>{params.row.id}</h4>
    },
    {
      field: 'img',
      headerName: 'Image',
      width: 250,
      renderCell: params => {
        return (<>
          <img src={params.row.avatar} alt="productImage" className="productImage" />
          <h6>{params.row.name}</h6>
        </>
        )
      }
    },
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'price', headerName: 'Price', width: 200 },
  ];
  const Rows = productsData;






  return (
    <div className='productList'>
      <div className="products">
        <h1 className="products-header">List of Products</h1>
        <DataGrid
          rows={Rows}
          columns={Columns}
          disableRowSelectionOnClick
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 8,
              },
            },
          }}
          checkboxSelection
        />
      </div>
    </div>
  )
}
