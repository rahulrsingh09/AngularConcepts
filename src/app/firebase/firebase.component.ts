import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  firebasefun:string = `  
  const functions = require('firebase-functions');
  const nodemailer = require('nodemailer');\n
  
  // Configure the email transport using the default SMTP transport and a GMail account.
  // For Gmail, enable these:
  // 1. https://www.google.com/settings/security/lesssecureapps
  // 2. https://accounts.google.com/DisplayUnlockCaptcha
  // For other types of transports such as Sendgrid see https://nodemailer.com/transports/
  // TODO: Configure the "gmail.email" and "gmail.password" Google Cloud environment variables.\n
  
  const gmailEmail = encodeURIComponent(functions.config().gmail.email);
  const gmailPassword = encodeURIComponent(functions.config().gmail.password);
  const mailTransport = nodemailer.createTransport(
      "smtps://&#36;{gmailEmail}:&#36{gmailPassword}@smtp.gmail.com");
  const APP_NAME = 'My Firebase Function';\n
 
  // [START sendWelcomeEmail to new user] [START onCreateTrigger]\n
 
    exports.sendWelcomeEmail = functions.auth.user().onCreate(event => {
 
  // [END onCreateTrigger] [START eventAttributes]\n
  
    const user = event.data; // The Firebase user.
    const email = user.email; // The email of the user.
    const displayName = user.displayName; // display name of the user.\n
    
  // [END eventAttributes]\n

    return sendWelcomeEmail(email, displayName);
  });\n
// [END sendWelcomeEmail] 
// Sends a welcome email to the given user.\n

function sendWelcomeEmail(email, displayName) {
  const mailOptions = {
    from: "&#36{APP_NAME},
    to: email
  };\n

  mailOptions.subject = "Welcome to &#36{APP_NAME}!";
  mailOptions.text = "Hey &#36{displayName || ''}! Welcome to &#36{APP_NAME}. I hope you will enjoy our service.";
  return mailTransport.sendMail(mailOptions).then(() => {
    console.log('New welcome email sent to:', email);
  });
}

`;


  constructor() { }

  ngOnInit() {
  }

}
