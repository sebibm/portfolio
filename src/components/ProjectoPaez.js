import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import { Grid } from '@material-ui/core';
import paez1 from '../img/paez2.png';
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
                    title="Estudio Paez de la Torre" />
                <CardMedia
                    className={classes.media}
                    image={paez1}
                    title="Estudio Paez de la Torre" />
                <CardContent>
                    <Grid >
                        <Chip label="HTML" color="secondary" />
                        <Chip label="CSS" color="secondary" />
                        <Chip label="PHP" color="secondary" />
                        <Chip label="MySQL" color="secondary" />
                        <Chip label="Configuracion servidor" color="secondary" />
                        <Chip label="Apache" color="secondary" />
                    </Grid>
                    <h3 className="white">
                        Sistema de gestion para cobranzas para estudio juridico Paez de la Torre
                    </h3>
                    <h3 className="white">
                        Graficos con estadisticas
                    </h3>
                    <Link to="/paez" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="primary">
                            Mas información
                        </Button>
                    </Link>
                </CardContent>
            </div>
        </div>
    );
}
