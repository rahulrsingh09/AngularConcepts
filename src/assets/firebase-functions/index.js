const functions = require('firebase-functions');
const nodemailer = require('nodemailer');


const mailTransport = nodemailer.createTransport(
  `smtps://emailid:password@smtp.gmail.com`);

const APP_NAME = 'Angular Concepts';

exports.sendPageCountEmail = functions.database.ref('/pageCount').onWrite(event => {
    // console.log(event.data);
    // console.log(event._newData);
    // console.log(event.data._newData);

    const data = event.data;
const count = data._newData;
//return sendEmail('rahulrsingh09@gmail.com',count);
});


// Sends a welcome email to the given user.
function sendEmail(email,count) {
  const mailOptions = {
    from:`${APP_NAME}noreply@firebase.com`,
    to: email
  };

  mailOptions.subject = `Welcome to ${APP_NAME}!`;
  mailOptions.text = `Welcome to ${APP_NAME}.\n One user has viewed the Page Count is ${count}`;
  return mailTransport.sendMail(mailOptions).then(() => {
      console.log('New welcome email sent to:', email);
});
}


exports.sendCommentEmail = functions.database.ref('/comments/users/{key}').onCreate(event => {

    //console.log(event.data._newData);
    const data = event.data._newData;

//return sendComment('rahulrsingh09@gmail.com',data);
});

// Sends a email to the user about comment.
function sendComment(email,data) {
  const mailOptions = {
    from:`${APP_NAME}noreply@firebase.com`,
    to: email
  };

  mailOptions.subject = `Welcome to ${APP_NAME}!`;
  mailOptions.text = `Welcome to ${APP_NAME}.\n
                        One user has commented on the app.\n
                        Comment is  ${data.comment} by -  ${data.name}`;
  return mailTransport.sendMail(mailOptions).then(() => {
      console.log('New welcome email sent to:', email);
});
}
