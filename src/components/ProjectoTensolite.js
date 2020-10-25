import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import { Grid } from '@material-ui/core';
import tensolite3 from '../img/tensolite3.png';
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
                    title="Panel de autogestion - Tensolite" />
                <CardMedia
                    className={classes.media}
                    image={tensolite3}
                    title="Panel de autogestion - Tensolite" />
                <CardContent>
                    <Grid >
                        <Chip label="Laravel" color="secondary" />
                        <Chip label="Nodejs" color="secondary" />
                        <Chip label="Express" color="secondary" />
                        <Chip label="Chartjs" color="secondary" />
                        <Chip label="SAP" color="secondary" />
                        <Chip label="PM2" color="secondary" />
                        <Chip label="MySQL" color="secondary" />
                        <Chip label="Configuracion servidor" color="secondary" />
                        <Chip label="Apache" color="secondary" />
                    </Grid>
                    <h3 className="white">
                        Panel de autogestion para tensolite S.A.
                    </h3>
                    <h3 className="white">
                        Modulos de control stock, modulo de gestion de turnos, modulo de auditoria.
                    </h3>
                    <Link to="/tensolite" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="primary">
                            Mas información
                        </Button>
                    </Link>
                </CardContent>
            </div>
        </div>
    );
}
