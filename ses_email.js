const AWS = require('aws-sdk');

const AWS_KEY = 'aws-key-id';
const AWS_SECRET = 'aws-secret-key';
const SNS_REGION = 'us-east-1';

AWS.config.update({
    accessKeyId: `${AWS_KEY}`,
    secretAccessKey: `${AWS_SECRET}`,
    region: `${SNS_REGION}`
  });
const ses = new AWS.SES();

const params = {
    Destination: {
        ToAddresses: ['user@gmail.com']
    },
    Message: {
        Body:{
            Html:{
                Charset: 'UTF-8',
                //Data: 'This message body contains HTML formatting, like <a class="ulink" href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide" target="_blank">Amazon SES Developer Guide</a>.'
                Data: 'Activation code: ayD1Mu'
            },
            Text: {
              Charset: 'UTF-8',
              Data: 'This is the message body in text format.'
            }
        },
        Subject: {
          Charset: 'UTF-8',
          Data: 'Registration'
        }
    },
    ReturnPath: 'user2@prodea.com',
    Source: 'user2@prodea.com'
};

ses.sendEmail(params, (err, data) => {
    if (err) console.log(err, err.stack)
    else console.log(data)
  });