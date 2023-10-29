import React from 'react'
import TableClases from '../components/TableClases';
import TableUsuarios from '../components/TableUsuarios';

const AdminPage = () => {
  return (
    <>
    <div>
      <h1 className='d-flex text-center'> Admin </h1>
    </div>
    <div>
      <TableClases/>
    </div>
    <div>
    <TableUsuarios/>
    </div>   
    </>
  )
}

export default AdminPage