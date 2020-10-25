import React from 'react';
import ImageMasonry from 'react-image-masonry';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import { Grid } from '@material-ui/core';
import marcotullio1 from '../img/marcotullio.png';
import marcotullio2 from '../img/marcotullio2.png';
import marcotullio3 from '../img/marcotullio3.png';
import marcotullio4 from '../img/marcotullio4.png';


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
                    title="Estudio juridico Marcotullio & Asociados" />
                <CardContent>
                    <Grid >
                        <Chip label="HTML" color="secondary" />
                        <Chip label="CSS" color="secondary" />
                        <Chip label="Fotografias" color="secondary" />
                        <Chip label="PHP" color="secondary" />
                    </Grid>
                    <h3 className="white">
                        Pagina web para estudio juridico Marcotullio & Asociados
                    </h3>
                    <h3 className="white">
                        Web institucional para estudio juridico
                    </h3>
                    <h3 className="white">
                        Link a la web: <a href="http://www.estudiomarcotullio.com">www.estudiomarcotullio.com</a>
                    </h3>
                    <ImageMasonry
                        imageUrls={[
                            marcotullio1,
                            marcotullio2,
                            marcotullio3,
                            marcotullio4,
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
