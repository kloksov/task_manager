import React from 'react';

class Smile extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            current_smile: ':)',
            color: 'black',
        };

        this.types_smiles = [':)', ':(', ':|', ':o'];
        this.types_colors = ['black', 'red', 'blue', 'green', 'yellow'];
        this.timer_id = null;
    }

    componentDidMount () {
        this.timer_id = setInterval(() => {
            this.replaceCurrentSmile();
        }, 1000);
    }

    componentWillUnmount () {
        clearInterval(this.timer_id);
    }

    replaceCurrentSmile () {
        let random_smile = this.types_smiles[Math.floor(Math.random() * this.types_smiles.length)];

        this.setState({
            current_smile: random_smile,
        });
    }

    clickSmile () {
        let random_color = this.types_colors[Math.floor(Math.random() * this.types_colors.length)];

        this.setState({
            color: random_color,
        });
    }

    render () {
        return (
            <h1 onClick={() => this.clickSmile()}
                style={{color: this.state.color}}
            >
                {this.state.current_smile}<br/>
            </h1>
        );
    }
}

export default Smile;