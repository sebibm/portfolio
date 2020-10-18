import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import { Grid } from '@material-ui/core';


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
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        color: '#53c7c7'
    },
    expandOpen: {
        transform: 'rotate(180deg)',
        color: '#53c7c7'
    },
    expandOpen: {
        transform: 'rotate(180deg)',
        color: '#53c7c7'
    },
}));

export default function RecipeReviewCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <Card className={classes.root}>
                <CardHeader
                    className="celeste"
                    title="Tensolite" />
                <CardMedia
                    className={classes.media}
                    image="/img/tensolite1.png"
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
                        Panel de autogestion para tensolite S.A. Incluye modulos de control stock, modulo de gestion de turnos, modulo de auditoria.
                    </h3>
                    <h4 className="red">
                        Backend con Laravel 5.8
                    </h4>
                    <h4 className="red">
                        API con Nodejs y express para obtener informacion de BD deERP.
                    </h4>
                    <h4 className="red">
                        Migracion de API de nodejs a Interfaces con Webservices de SAP.
                    </h4>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more">
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent className="white">
                        <img alt="Tensolite" src="../tensolite1.png" className={classes.media2} />
                        <img alt="Tensolite" src="../tensolite2.png" className={classes.media2} />
                        <img alt="Tensolite" src="../tensolite3.png" className={classes.media2} />
                        <img alt="Tensolite" src="../tensolite4.png" className={classes.media2} />
                        <img alt="Tensolite" src="../tensolite5.png" className={classes.media2} />
                        <img alt="Tensolite" src="../tensolite6.png" className={classes.media2} />
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    );
}
