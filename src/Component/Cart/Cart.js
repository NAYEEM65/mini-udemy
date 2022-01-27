import React from 'react';
import './Cart.css';
import {
    Container,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
} from '@mui/material';

const Cart = (props) => {
    const cart = props.cart;

    return (
        <Container xs={12} sm={6}>
            <Card>
                <CardMedia image="" />
                <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                        Couldn't Load Cart
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Backend error
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Cart;
