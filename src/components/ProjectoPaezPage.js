import React from 'react';
import ImageMasonry from 'react-image-masonry';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import { Grid } from '@material-ui/core';
import paez1 from '../img/paez1.png';
import paez2 from '../img/paez2.png';
import paez3 from '../img/paez3.png';
import paez4 from '../img/paez4.png';
import paez5 from '../img/paez5.png';
import paez6 from '../img/paez6.png';


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
                    title="Estudio juridico Paez de la Torre" />
                <CardContent>
                    <Grid>
                        <Chip label="HTML" color="secondary" />
                        <Chip label="CSS" color="secondary" />
                        <Chip label="PHP" color="secondary" />
                        <Chip label="MySQL" color="secondary" />
                    </Grid>
                    <h3 className="white">
                        Sistema de gestion para cobranzas para estudio juridico Paez de la Torre
                    </h3>
                    <h3 className="white">
                        Graficos con estadisticas
                    </h3>
                    <h3 className="white">
                        Sistema de gestion para cartera de deudores y datos de contacto
                    </h3>
                    <ImageMasonry
                        imageUrls={[
                            paez1,
                            paez2,
                            paez3,
                            paez4,
                            paez5,
                            paez6,
                        ]}
                        numCols={2}
                        containerWidth={"100%"}
                        animate={true}
                        scrollable={false}
                        containerHeight={"100%"}
                        className="masonry"
                        forceOrder={true}>
                    </ImageMasonry>
                </CardContent>
            </Card>

        </div>
    );
}
