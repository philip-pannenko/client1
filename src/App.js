import React, {Component} from 'react';
// import properties from 'properties';
import prop from 'properties-parser'; 

import ModifyMessage from '@lablenge/client-utils';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            message: null,
            configMessage: null
        }
    }

    componentDidMount() {
        fetch("api/messages")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        message: result.message
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );

        fetch("config.properties")
            .then(result => result.text())
            .then(result => {

                let config = prop.parse(result);

                this.setState({configMessage: config.message});
            })

    }

    render() {

        const {error, isLoaded, message, configMessage} = this.state;
        if (error) {
            return <div>(cloud config - {configMessage}) Error: {ModifyMessage.addPunctuation(error.message)}</div>;
        } else if (!isLoaded) {
            return <div>(cloud config - {configMessage}) Loading...</div>;
        } else {
            return <div>(cloud config - {configMessage}) Your message: {ModifyMessage.addPunctuation(message)}</div>
        }
    }
}

export default App;
