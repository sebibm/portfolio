import React, { Component } from 'react'
import ParticlesBg from 'particles-bg'


class ParticulasBack extends Component {
    render() {
        return (
            <div>
                <ParticlesBg color="#53c7c7" num={90} type="cobweb" bg={true}>
                </ParticlesBg>
            </div>
        )
    }
}

export default ParticulasBack