const fetch = require('node-fetch');

const sendWebhookMessage = async (event, data) =>{
  var url = new URL(
    `https://www.hostedhooks.com/api/v1/apps/197cd9e5-6ec2-41f5-b467-24f6296d865d/messages`
  );

  var messagePayload = JSON.stringify({
    data:{
       user : data,
    },
    version: '1.0',
    event_type: event,
  });

  var requestOptions ={
    method: 'POST',
    headers : {
      Authorization: `Bearer uphA1NbqpmNsE4s2B33jvVna`,
      'Content-Type' : 'application/json',
    },
    body: messagePayload,
    redirect: 'follow',
  };

  try{
    const result =await fetch(url, requestOptions)
    return result.text()
  }catch(error){
    throw error
  }
};

module.exports ={
  sendWebhookMessage,
};