import React, { Component } from 'react'
import SkillBar from 'react-skillbars';
import '../styles/grid.css'

export default class Skills extends Component {
    SKILLS = [
        {
            "type": "Laravel",
            "level": 90,
        },
        {
            "type": "Scrum",
            "level": 90,
        },
        {
            "type": "MySQL",
            "level": 80,
        },
        {
            "type": "Android",
            "level": 75,
        },
        {
            "type": "Linux/VPS",
            "level": 70,
        },
        {
            "type": "Apache",
            "level": 70,
        },
        {
            "type": "Nodejs",
            "level": 65,
        },
        {
            "type": "CSS/SASS",
            "level": 50,
        },
        {
            "type": "vuejs",
            "level": 50,
        },
        {
            "type": "React",
            "level": 40,
        },
        
    ]
    colors = {
        bar: '#439b9c',
        "title": {
            "background": "#333333"
        }

    }


    render() {
        return (
            <div>
                <h2 className="red">Mis conocimientos</h2>
                <SkillBar skills={this.SKILLS} colors={this.colors} />
            </div>
        )
    }
}
