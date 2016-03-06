import request from 'superagent/lib/client'

const tracker_url = "http://ping.pedantic.io";

request
 .post(tracker_url)
 .send({location: window.location})
 .end(function(err, res){
    console.log(res);
  });
