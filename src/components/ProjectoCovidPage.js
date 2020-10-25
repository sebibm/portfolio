import React from 'react';
import ImageMasonry from 'react-image-masonry';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import { Grid } from '@material-ui/core';
import covid1 from '../img/covid1.png';
import covid2 from '../img/covid2.png';

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
                    title="Covid Argentina" />
                <CardContent>
                    <Grid >
                        <Chip label="Uso de API" color="secondary" />
                        <Chip label="Laravel" color="secondary" />
                        <Chip label="Linux" color="secondary" />
                        <Chip label="Chartjs" color="secondary" />
                    </Grid>
                    <h3 className="white">
                        Estadisticas del covid en Argentina en tiempo real.
                    </h3>
                    <h3 className="white">
                        Utilizando API de la universidad John Hopkins. Graficos realizados con la libreria chartjs
                    </h3>
                    <h4 className="red">
                        Backend con Laravel 5.8
                    </h4>
                    <h4 className="red">
                        Utilización de API de <a href="https://coronavirus.jhu.edu/data">John Hopkins University.</a>.
                    </h4>
                    <h4 className="red">
                        Graficos realizados con libreria chartjs
                    </h4>
                    <ImageMasonry
                        imageUrls={[
                            covid1,
                            covid2,
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
