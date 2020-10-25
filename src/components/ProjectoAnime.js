import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import { Grid } from '@material-ui/core';
import mundoanime1 from '../img/mundoanime2.png';
import Button from '@material-ui/core/Button';
import {
    Link
} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "100%",
        background: 'transparent',
        textAlign: 'center',
    },
    media: {
        height: 'auto',
        paddingTop: '56.25%', // 16:9
        maxWidth: "100%",
    },
    media2: {
        height: 'auto',
        maxWidth: "100%",
        border: '5px solid #53c7c7',
        marginTop: '10px'
    },
}));

export default function RecipeReviewCard() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
                <CardHeader
                    className="red"
                    title="Votaciones - Mundoanime" />
                <CardMedia
                    className={classes.media}
                    image={mundoanime1}
                    title="Covid Argentina" />
                <CardContent>
                    <Grid >
                        <Chip label="Nodejs" color="secondary" />
                        <Chip label="Express" color="secondary" />
                    </Grid>
                    <h3 className="white">
                        Backend realizado en nodejs para votaciones en tiempo real con nodejs
                    </h3>
                    <h3 className="white">
                        10.000 personas que concurrieron al evento votaron en tiempo real con esta app
                    </h3>
                    <Link to="/anime" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="primary">
                            Mas información
                        </Button>
                    </Link>
                </CardContent>
            </div>
        </div>
    );
}
