import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
let Request = require('request').defaults({json: true});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChangeStoreName = this.handleChangeStoreName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return (
            <form className="importer" onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>Import Shopify Store</legend>
                    <label>Store Name <input type="text" name="storeName" onChange={this.handleChangeStoreName} /></label>
                    <input type="submit" value="Submit" />
                </fieldset>
            </form>
        );
    }
    handleChangeStoreName(e) {
        this.setState({storeName: e.target.value});
    }
    handleSubmit(event) {
        // console.dir(event);
        Request.post({uri: 'http://localhost:3001/api/migrate', form: {storeName:this.state.storeName}}, function(error, response, body) {
            if (error) {
                // callback({service: 'cat', error: error});
                // return;
                console.log('Error' + error);
            }
            if (!error && response.statusCode === 200) {
                // callback(null, body.data);
                console.log(body.data);
            } else {
                // callback(response.statusCode);
                // console.log(response.statusCode);
            }
        });
        console.log('A name was submitted: ' + this.state.storeName);
        event.preventDefault();
    }
}

export default App;
