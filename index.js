var file = require('fs');
var mongoose = require('mongoose');
var url = "mongodb://<USER>:<PASSWORD>@<HOST1-n:PORT1-n>/<db_name>?ssl=true&replicaSet=rs0";
var options = {};
options.useNewUrlParser = true; // options.mongoClient = true;
options.ssl = true;
options.sslValidate = true;
options.sslCA = file.readFileSync('path to cert auth');
options.sslKey = file.readFileSync('path to certificate with key');
options.sslCert = file.readFileSync('path to certificat with key');
options.sslPass = 'your certificate key passphrase';

mongoose.connect(url, options, function(error){
  if (error){
    console.log("VMModel: Couldn't connect to data source!" + error);
    process.exit(0);
  } else {
    console.log("VMModel: Datasource connection established!");
    process.exit(0);
  }
});
