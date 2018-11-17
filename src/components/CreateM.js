import React, { Component } from 'react';
import {Grid, FormControl, FormGroup, Col, Row, Button, ControlLabel } from 'react-bootstrap';
import Basic from './createForms';

export default class CreateM extends Component {
  
  

    render() {
        return(
            <Grid>
              <h1>  create a meeting </h1>
            
              <form>
            <FormGroup controlId="Agenda">
                        <Row className="meetingForms">
                        <Col md={4}>
                        <ControlLabel>Agenda</ControlLabel>
                        </Col>
                        <Col md={8}>
                        <FormControl componentClass="textarea" placeholder="Meeting Agenda" type="text"
                            name="agenda"/>
                        </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup controlId="Criteria">
                        <Row className="meetingForms">
                        <Col md={4}>
                        <ControlLabel>Criteria</ControlLabel>
                        </Col>
                        <Col md={8}>
                        <FormControl componentClass="textarea" placeholder="criteria" name="criteria" 
                            type="text"  />
                        </Col>
                        </Row>
                    </FormGroup>
                    <Button type="submit" value="Submit">Create</Button>
        </form>
              
              <Basic />
            </Grid>
        )
    }
}