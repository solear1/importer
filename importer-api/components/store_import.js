"use strict";

let React = require('react');
let Request = require('request').defaults({json: true});

class ImportForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log(this); // React Component instance
    }
    handleSubmit(event) {
        console.dir(event);
        Request.post({uri: 'http://localhost:3001/api/migrate', form: {storeName:event}}, function(error, response, body) {
            if (error) {
                callback({service: 'cat', error: error});
                return;
            }
            if (!error && response.statusCode === 200) {
                callback(null, body.data);
            } else {
                callback(response.statusCode);
            }
        });
        console.log('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return ("<div className='import-form'></div>");
    }
}

module.exports = ImportForm;
