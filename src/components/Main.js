import React from 'react'
import { Container } from '@material-ui/core';
import MDSpinner from "react-md-spinner"
import ParticlesBg from './ParticlesBg'
import Grid from './Grid'




class Main extends React.Component {

    state = {
        loading: true
    }

    constructor() {
        super();
        this.state = { isLoading: true }
    }

    componentDidMount() {
        this.setState({ isLoading: false })
    }

    render() {
        return (
            this.state.isLoading ? <MDSpinner /> : this.main()
        )
    }

    main() {
        return <div>
            <ParticlesBg />
            <Container fixed>
                <Grid />
            </Container>
        </div >
    }
}

export default Main;
