import { Button, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';

const Profile = () => {
    return (
        <div style={{ margin: '0 auto' }}>
            <Container style={{ margin: '5%', marginLeft: 'auto', textAlign: 'center' }}>
                <Grid xs={12} sm={6}>
                    <Typography variant="h3" style={{}}>
                        Developer Is Sleeping
                    </Typography>
                    <Link to="/">
                        <Button variant="containd" color="primary">
                            Back to Home
                        </Button>
                    </Link>
                </Grid>
            </Container>
        </div>
    );
};

export default Profile;
