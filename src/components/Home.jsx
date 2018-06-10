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
                    <p>This is how to build a website with React, React-Router & React-Bootstrap</p>
                </Jumbotron>
                <Link to="/about">
                    <Button bsStyle="primary">About</Button>
                </Link>
            </Grid>
        );
    }
}

export default Home;

// A jumbotron indicates a big box for calling extra attention to some special content or information.
// Button is imported as well for a styled button