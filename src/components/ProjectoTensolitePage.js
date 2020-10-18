import React from 'react';
import ImageMasonry from 'react-image-masonry';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import { Grid } from '@material-ui/core';
import tensolite1 from '../img/tensolite1.png';
import tensolite2 from '../img/tensolite2.png';
import tensolite3 from '../img/tensolite3.png';
import tensolite4 from '../img/tensolite4.png';
import tensolite5 from '../img/tensolite5.png';
import tensolite6 from '../img/tensolite6.png';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "100%",
        background: '#00000000',
        textAlign: 'center',
    },
   
}));

export default function RecipeReviewCard() {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardHeader
                    className="celeste"
                    title="Tensolite" />
                <CardContent>
                    <Grid paddingTop={2}>
                        <Chip label="Laravel" color="secondary" />
                        <Chip label="Nodejs" color="secondary" />
                        <Chip label="Express" color="secondary" />
                        <Chip label="Linux" color="secondary" />
                        <Chip label="SAP" color="secondary" />
                    </Grid>
                    <h3 className="white">
                        Panel de autogestion para tensolite S.A. Incluye modulos de control stock, modulo de gestion de turnos, modulo de auditoria.
                    </h3>
                    <h4 className="red">
                        Backend con Laravel 5.8
                    </h4>
                    <h4 className="red">
                        API con Nodejs y express para obtener informacion de BD de ERP Bejerman (Flexware).
                    </h4>
                    <h4 className="red">
                        Migracion de API de nodejs a Interfaces con Webservices de SAP.
                    </h4>
                    <ImageMasonry
                        imageUrls={[
                            tensolite1,
                            tensolite2,
                            tensolite3,
                            tensolite4,
                            tensolite5,
                            tensolite6,
                        ]}
                        numCols={2}
                        containerWidth={"100%"}
                        animate={true}
                        scrollable={true}
                        containerHeight={"100%"}
                        className="my-class"
                        forceOrder={true}>
                    </ImageMasonry>
                </CardContent>
            </Card>

        </div>
    );
}
