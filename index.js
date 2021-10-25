import fetch from 'node-fetch';

let appId = "JaswantS-AStylese-SBX-5abc43d45-fdb531e4";
let url = "http://svcs.sandbox.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME="+ appId +"&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=harry%20potter%20phoenix";

fetch(url)
    .then(res => res.json())
    .then(json => {
        console.log("And the response is:");
        console.log(json);
})