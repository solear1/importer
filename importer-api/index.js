let Express = require('express');
const App = Express();
let BodyParser = require('body-parser');
let React = require('react');
let ReactDOM = require('react-dom');
let ImportForm = require('./components/store_import');
const stores = [
    {name: 'test'}
];

App.use(BodyParser.json());
App.use(BodyParser.urlencoded({
    extended: true
}));

App.post('/api/migrate', function (req,res) {
    let storeName = req.body.storeName;
    console.log('Store name: ' + storeName);
    const store = stores.find(current => current.name === storeName.toString().toLowerCase());
    if(!store){
        res.json({exists:0});
    } else {
        res.json({exists:1});
    }
});

let Server = App.listen(3001, function() {
    console.log('Server running at http://127.0.0.1:3001/');
});
