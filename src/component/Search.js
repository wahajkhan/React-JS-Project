import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  Dropdown ,
  DropdownButton  } from 'react-bootstrap';


 export default  function Search() {

    return(
<Row className='mt-3'>
<Col>
<Form.Control
    type="text"
    placeholder="Search"
    id="inputtext"
    aria-describedby="passwordHelpBlock"
/>
</Col>
<Col xs={2}>
 <DropdownButton id="dropdown-basic-button" title="Filter">
  <Dropdown.Item href="#/action-1">Pet name</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Owner name</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Date</Dropdown.Item>
  {/* <Dropdown.Item href="#/action-3">Sort by Asc</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Sort by Desc</Dropdown.Item> */}
</DropdownButton>
</Col>
</Row>
  )}