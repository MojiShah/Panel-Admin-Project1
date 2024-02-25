import React from 'react';
import { Table, Button } from 'react-bootstrap';

export default function HomeUserTable() {
  return (
    <div className='tables'>
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>

          <tr >
            <td colSpan={5} style={{ textAlign: 'center' }}>
              <Button variant="danger" className='p-2 m-2'>Danger</Button>
            </td>
          </tr>
        </tbody>
      </Table>

    </div>
  )
}
