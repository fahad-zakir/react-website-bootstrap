import React, {Component} from 'react';
import {Grid, Col, Image} from 'react-bootstrap';
import './About.css';

class About extends Component {
    render() {
        return (
            <div>
                <Image src="assets/dog-people.jpg" className="header-image"/>
                <Grid>
                    <Col xs={12} sm={8} smOffset={2}>
                        <Image src="assets/person-1.jpg" className="about-profile-pic" rounded/>
                        <h3>Frank The Tank</h3>
                        <p>
                            No worries.No cares.Just float and wait for the wind to blow you around.In this
                            world, everything can be happy.I like to beat the brush.
                        </p>

                        <p>
                            Just take out whatever you don 't want. It' will change your entire
                            perspective.Now we don 't want him to get lonely, so we' ll give him a little
                            friend.We 'll lay all these little funky little things in there.</p>

                        <p>Now we 'll take the almighty fan brush. Get tough with it, get strong. Be so
                            very light. Be a gentle whisper. Talk to trees, look at the birds. Whatever it
                            takes. Let' s make a happy little mountain now.</p>

                    </Col>
                </Grid>
            </div>
        );
    }
}

export default About;