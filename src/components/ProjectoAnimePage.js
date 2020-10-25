import React from 'react';
import ImageMasonry from 'react-image-masonry';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import { Grid } from '@material-ui/core';
import mundoanime1 from '../img/mundoanime1.png';
import mundoanime2 from '../img/mundoanime2.png';
import mundoanime3 from '../img/mundoanime3.png';

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
                    title="Mundo anime votaciones en tiempo real" />
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
                    <ImageMasonry
                        imageUrls={[
                            mundoanime1,
                            mundoanime2,
                            mundoanime3,
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
