import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  Dropdown ,
  DropdownButton,
  ListGroup,
  Item } from 'react-bootstrap';
  import NavBar from './component/NavBar' 
  import Search from './component/Search'
  import AppointmentList from './component/AppointmentList'
   import AppointmentData_Json from './appointmentData.json'
function App() {
  return (
    <Container className="App">
       <NavBar/>~
       <Search/>
       <AppointmentList appointmentdata={AppointmentData_Json}/>

       {/* <Button variant="primary">Home</Button> */}
    </Container>
  );
}

export default App;
