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
  import { BsCheck2 } from "react-icons/bs";

 export default  function Search({query,onQueryChange,sortBy,onSortByChange,orderBy,onOrderByChange}) {

  console.log(orderBy);
    return(
<Row className='mt-3'>
<Col>
<Form.Control
    type="text"
    placeholder="Search"
    aria-describedby="passwordHelpBlock"
    name="query"
    id="query"
    value={query}
    onChange={(event)=>{onQueryChange(event.target.value)}}
/>
</Col>
<Col xs={2}>
 <DropdownButton id="dropdown-basic-button" title="Sort By">
  <Dropdown.Item onClick={(mySort)=>onSortByChange('petName')}>
    <span className="">Pet name</span>
    {(sortBy=='petName')&&<BsCheck2 className="text-success"/>}
  </Dropdown.Item>
  <Dropdown.Item onClick={(mySort)=>onSortByChange('ownerName')}>
    <span className="">Owner name</span>
    {(sortBy=='ownerName')&&<BsCheck2 className="text-success"/>}
    </Dropdown.Item>
  <Dropdown.Item onClick={(mySort)=>onSortByChange('aptDate')}>
  <span className="">Date</span>
    {(sortBy=='aptDate')&&<BsCheck2 className="text-success"/>}
  </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item onClick={(myOrder)=>onOrderByChange('asc')}>
    <span>Order by Asc</span>
    {(orderBy=='asc')&&<BsCheck2 className="text-success"/>}
    </Dropdown.Item>
  <Dropdown.Item onClick={(myOrder)=>onOrderByChange('desc')}>
    <span>Order by Desc</span>
    {(orderBy=='desc')&&<BsCheck2 className="text-success"/>}
  </Dropdown.Item>
</DropdownButton>
</Col>
</Row>
  )}