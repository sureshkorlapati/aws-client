var AWS = require('aws-sdk');

AWS.config.update({region:'us-east-1'});

//create publish params
var params = {
    Message: "New version of checkout app released ",
    TopicArn: "arn:aws:sns:us-east-1:538830916293:applayer"
};

//create a promise and SNS service object
var publishTextPromise = new AWS.SNS({apiVersion: '2018-10-25'}).publish(params).promise();

//handle promise
publishTextPromise.then((data) => {
    console.log(JSON.stringify(data));
})
.catch((err) => {
    console.log(JSON.stringify(err));
});