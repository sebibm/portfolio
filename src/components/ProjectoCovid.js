import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import { Grid } from '@material-ui/core';
import covidimg from '../img/covid1.png';
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
                    title="Estadisticas del Covid  en Argentina" />
                <CardMedia
                    className={classes.media}
                    image={covidimg}
                    title="Covid Argentina" />
                <CardContent>
                    <Grid >
                        <Chip label="Uso de API" color="secondary" />
                        <Chip label="Laravel" color="secondary" />
                        <Chip label="Linux" color="secondary" />
                        <Chip label="Chartjs" color="secondary" />
                        <Chip label="MySQL" color="secondary" />
                        <Chip label="Configuracion servidor" color="secondary" />
                        <Chip label="Apache" color="secondary" />
                    </Grid>
                    <h3 className="white">
                        Estadisticas del covid en Argentina en tiempo real.
                    </h3>
                    <h3 className="white">
                        Utilizando API de la universidad John Hopkins. Graficos realizados con la libreria chartjs
                    </h3>
                    <Link to="/covid" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="primary">
                            Mas información
                        </Button>
                    </Link>
                </CardContent>
            </div>
        </div>
    );
}
