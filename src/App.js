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
  import { useState,useEffect,useCallback } from 'react'; 

function App() {

  let [appointmentData_Json,setappointmentData_Json] = useState([]);
  let [query,setQuery] = useState("");
  let [sortBy,setSortBy] = useState("petName");
  let [orderBy,setOrderBy] = useState("asc");


  const filterAppointmentList = appointmentData_Json.filter(
    item => {
       return (
        item.petName.toLowerCase().includes(query.toLowerCase())||
        item.ownerName.toLowerCase().includes(query.toLowerCase())||
        item.aptNotes.toLowerCase().includes(query.toLowerCase())
      )
    }
  ).sort((a,b) =>  {
    let order = (orderBy === 'asc')? 1 :-1;
    return(
      a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
        ? -1 * order : 1 * order
    )
  }) 
    const fetchData = useCallback(()=>{

      fetch('./Data/appointmentData.json')
      .then(response =>response.json())
      .then(data=>{
        console.log(data);
        setappointmentData_Json(data);
      })
    },[])

    useEffect(()=>{
      fetchData()
    },[])


  return (
    <Container className="App">
       <NavBar/>
       <Search 
        query={query}
        onQueryChange={(myQuery)=>{
          setQuery(myQuery);
        }}
        sortBy = {sortBy}
        onSortByChange={(mySort)=>setSortBy(mySort)}
        orderBy ={orderBy}
        onOrderByChange={(myOrder)=>setOrderBy(myOrder)}
       />
       <AppointmentList appointmentdata={filterAppointmentList}/>

       {/* <Button variant="primary">Home</Button> */}
    </Container>
  );
}

export default App;
