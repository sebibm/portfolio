import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typed from 'react-typed';
import Photo from '../photo.jpeg'
import Skills from './Skills'

import ProjectoTensolite from './ProjectoTensolite'
import '../styles/grid.css'
import Bounce from 'react-reveal/Bounce';
import Shake from 'react-reveal/Shake';
import Fade from 'react-reveal/Fade';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';





const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper1: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'white',
        background: '#0000004d',
        'min-height': 140,
    },

    paper2: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'white',
        background: '#0000004d',
        'min-height': 250,
        'line-height': '1.5rem'
    },

}));



export default function CenteredGrid() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <Paper elevation={3} className={classes.paper1}>
                        <img className="avatar" alt="Remy Sharp" src={Photo} />
                        <h1>Sebastián Barcatt Mirande</h1>
                        <h2 className="red">
                            <Typed
                                strings={[
                                    'Emprendedor',
                                    'Innovador',
                                    'Proactivo',
                                    'Creatividad',
                                    'Trabajo en equipo',]}
                                typeSpeed={60}
                                loop />
                        </h2>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper elevation={3} className={classes.paper2}>
                        <Grid>
                            <h2 className="red">Sobre mi</h2>

                            <Shake duration={1000} delay={1000}>
                                <div>
                                    <h4>Gracias por visitar mi portfolio. Soy Sebastián y te doy la bienvenida, tengo 33 años y soy de Tucumán, Argentina</h4>

                                </div>
                            </Shake>
                            <Bounce left duration={1000} delay={2000}>
                                <div>
                                    <h4>Soy un apasionado de la programación, constanstemente estoy buscando nuevos lenguajes o herramientas para seguir creciendo</h4>
                                </div>
                            </Bounce>
                            <Fade left duration={1000} delay={3000}>
                                <div>
                                    <h4>Tengo experiencia en el desarrollo Web, aplicaciones Android nativas y aplicaciones multiplataformas Tengo conocimientos tanto de Backend como del Frontend.</h4>
                                </div>
                            </Fade>
                            <Bounce left duration={1000} delay={4000}>
                                <div>
                                    <h3 className="celeste">Redes Sociales</h3>
                                    <a href="https://www.linkedin.com/in/sebabm/">
                                        <LinkedInIcon fontSize="large" style={{ margin: "26px" }} className="red" />
                                    </a>
                                    <a href="https://www.instagram.com/sebibm">
                                        <InstagramIcon fontSize="large" style={{ margin: "26px" }} className="red" />
                                    </a>
                                    <a href="https://facebook.com/sebabm">
                                        <FacebookIcon fontSize="large" style={{ margin: "26px" }} className="red" />
                                    </a>
                                    <h3 className="celeste">Email</h3>
                                    <a className="red" href="mailto:sbarcatt@gmail.com">
                                        <h3>sbarcatt@gmail.com</h3>
                                    </a>
                                </div>
                            </Bounce>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper elevation={3} className={classes.paper2}>
                        <Skills />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <h2 className="red">Proyectos mas relevantes</h2>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <ProjectoTensolite />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ProjectoTensolite />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ProjectoTensolite />
                </Grid>
            </Grid>
        </div >
    );
}
