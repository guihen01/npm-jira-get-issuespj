const fetch = require("node-fetch");
var prompt = require('prompt-sync')();
var fs = require('fs');

server = ' ';
var server = prompt('enter url of server ( example : http://localhost:8080 ');
//console.log(server);

projectname = ' ';
var projectname = prompt('enter project name: ');

const url = server + "/rest/api/2/search?jql=project=" + projectname;
console.log('-------------------------------------------------------------------')
console.log('url choosed to pick list of Jira issues in project :' + url);
console.log('-------------------------------------------------------------------')

username = ' ';
var username = prompt('enter username: ');
//console.log(username);

var password = ' ';
var password = prompt('enter password : ');
//console.log(password);

async function getData(url) {
    try
    {
        var auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');
        var headers = { 'Authorization': auth };
        const response = await fetch(url, { method: 'GET', headers: headers }).then((res) => { return res.json() })
            .then((json) => { console.log(json); data = JSON.stringify(json,null,2); fs.writeFileSync('List-Issues.json', data); });
    }
    catch (error) {
        console.log(error);
    }
};

getData(url);
 
