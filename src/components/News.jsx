import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './News.css';

const News = props => (
            <div>
                <Image src="assets/mountain-man.jpg" className="header-image"/>
                <Grid>
                    <h2>News</h2>
                    <Row>
                        <Col xs={12} sm={8} className="main-section">
                            <p>No worries. No cares. Just float and wait for the wind to blow you around. In
                                this world, everything can be happy. I like to beat the brush.</p>

                            <p>Just take out whatever you don't want. It'll change your entire perspective.
                                Now we don't want him to get lonely, so we'll give him a little friend. We'll
                                lay all these little funky little things in there.</p>

                            <p>Now we'll take the almighty fan brush. Get tough with it, get strong. Be so
                                very light. Be a gentle whisper. Talk to trees, look at the birds. Whatever it
                                takes. Let's make a happy little mountain now.</p>
                        </Col>
                        <Col xs={12} sm={8} className="sidebar-section">
                        <Image src="assets/dog-people.jpg"></Image>
                        <p>No worries. No cares. Just float and wait for the wind to blow you around. In this world, everything can be happy. I like to beat the brush.</p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )

export default News;