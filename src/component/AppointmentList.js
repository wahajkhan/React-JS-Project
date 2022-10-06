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
 
export default function AppointmentList({appointmentdata}){
  
    return (
    <Row className='mt-4'>
        <Col>
          <ListGroup>
              {
                appointmentdata.map(data=>( 
                <ListGroup.Item key={data.id}>
                  <Row>
                    <Col>
                      <h5 className='text-primary'>Pet Name: {data.petName}</h5>
                      <h6><b>Owner Name:</b> {data.ownerName}</h6>
                      <p><b>Notes:</b> {data.aptNotes}</p>
                    </Col>
                    <Col className="">
                      <p className="text-center">
                          {data.aptDate}
                      </p>
                    </Col>
                  </Row>
                </ListGroup.Item>
                ))
               }
          </ListGroup>
        </Col>
       </Row>
    )
}