import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';


class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2>Welcome to CodeLife.io</h2>
                    <p>This is ahow to build a website with React, React-Router & React-Bootstrap</p>
                </Jumbotron>
                <Link to="/about">
                    <Button> bsStyle="primary">About</Button>
                </Link>
            </Grid>
        );
    }
}

export default Home;