var myApp = {
  mainMessage : "Welcome to my app",

  mainGreeting(){
    console.log("hey my name jeff haha");
  }
}

myApp.module1 = {
  sauSomething(message) {
    console.log(myApp.mainMessage, message, "second file");
  }

  doSomething(){
    console.log('called dosomething from module');
  }
};

myApp.module2 = {
  doSomethingElse(){
    console.log('failed to do something else');
  }
};

(() =>{
  myApp.mainGreeting();

  myApp.module1.saySomething('santa');

  function myFunc() {
    var theHeading = document.querySelector('h1').textContent = myApp.mainMessage;
  }
})();
