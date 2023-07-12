import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './data.js';

function App() {
  const [search, setSearch] = useState("");

  // handle input search.
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  return (
    <div>
      <Container>
        <h1 className='text-center mt-4'>Contact Keeper</h1>
        <Form>
          <InputGroup className='my-3'>

            {/* onChange for search */}
            <Form.Control
              onChange={handleSearch}
              placeholder='Search contacts'
            />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            {
              data.filter(user => {
                return search.toLowerCase() === "" ? user : user.first_name.toLowerCase().includes(search);
              }).
                map(user =>
                  <tr key={user.id}>
                    <th>{user.first_name}</th>
                    <th>{user.last_name}</th>
                    <th>{user.email}</th>
                    <th>{user.phone}</th>
                  </tr>)
            }

          </thead>
          <tbody>
            <tr >
              <td>sujon</td>
              <td>sheikh</td>
              <td>sujonsheikh@gmail.com</td>
              <td>01999-986919</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
