import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import { Grid } from '@material-ui/core';
import tensolite3 from '../img/tensolite3.png';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "100%",
        background: '#00000000',
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
            <Card className={classes.root}>
                <CardHeader
                    className="red"
                    title="Tensolite" />
                <CardMedia
                    className={classes.media}
                    image={tensolite3}
                    title="Paella dish" />
                <CardContent>
                    <Grid paddingTop={2}>
                        <Chip label="Laravel" color="secondary" />
                        <Chip label="Nodejs" color="secondary" />
                        <Chip label="Express" color="secondary" />
                        <Chip label="Linux" color="secondary" />
                        <Chip label="SAP" color="secondary" />
                    </Grid>
                    <h3 className="white">
                        Panel de autogestion para tensolite S.A. Modulos de control stock, modulo de gestion de turnos, modulo de auditoria.
                    </h3>
                    <Button variant="contained" color="primary">
                        Mas información
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
