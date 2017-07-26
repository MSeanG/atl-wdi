// E-mail address' have
//
// account info
// --name
// --email
// --description
//
// incoming mail server
// --host name
// --username
// --passwrod
//
// outgoing mail server
// --smtp

/* OBJECTS */

var accountInfo = {
    id: Number,
    name: String,
    email: String,
    description: String,
}
var incomingMailServer = {
     hostName: String,
     userName: String,
     password: String,
 }
var outgoingMailServer = {
    smtp: String,
}

/* RELATIONSHIPS */

var exampleUser = {
    id: '197DG654UHM786594IC73IF2',
    name: 'John Doe',
    description: 'Google Acount',
    email: 'john.doe@gmail.com',
    incomingMailServer: {
        hostName: pop3.google.com,
        userName: 'JohnD123',
        password: 'String-Theory09',
    },
    outgoingMailServer: {
        smtp: smtp.google.com,
    }
}