import React, {Component} from 'react';
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
        fetch("http://localhost:8080/api/messages")
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

        fetch("http://localhost:8888/application/message")
            .then(res => res.json())
            .then(result => {
                    let configMessage = result.propertySources[0].source.message;
                    this.setState({configMessage});
                }
            )

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
