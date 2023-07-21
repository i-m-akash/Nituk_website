const firebaseConfig = {
    apiKey: "AIzaSyBJnaOGMdqaGYpxZZkwtbUhQ4qlp6JaFa4",
    authDomain: "project-4fc41.firebaseapp.com",
    databaseURL: "https://project-4fc41-default-rtdb.firebaseio.com",
    projectId: "project-4fc41",
    storageBucket: "project-4fc41.appspot.com",
    messagingSenderId: "93934561913",
    appId: "1:93934561913:web:4f0ed05c1527d2c61b42a8",
    measurementId: "G-QJS4DJ19H3"
  };
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}