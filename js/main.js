(() =>{
  myApp.mainGreeting();

  myApp.module1.saySomething('santa');

  function myFunc() {
    var theHeading = document.querySelector('h1').textContent = myApp.mainMessage;
  }
})();
