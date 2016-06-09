angular.module('app', []) //create new, instantiates (only once in app)
// angular.module('app') //refers to
  .config(() => {
    firebase.initializeApp({
      // Initialize Firebase
      apiKey: "AIzaSyD0skc_Le9v1sWcrGVQujAF6zF3WXp-fo0",
      authDomain: "voting-app-637c1.firebaseapp.com",
      databaseURL: "https://voting-app-637c1.firebaseio.com",
      storageBucket: "voting-app-637c1.appspot.com",
    });
  })
  .controller('MainCtrl', function ($scope) {
    const main = this;

    main.heading = 'Rock the Vote!!!';

    main.curry = function () {
      firebase.database().ref('votes/curry')
        .set(main.curryCount + 1);
    };
    main.bron = function () {
      firebase.database().ref('votes/bron')
        .set(main.bronCount + 1);
    };

    firebase.database().ref('/votes').on('value', (snap) => {
      const data = snap.val() // {curry: 1, bron: 2}

      main.curryCount = data.curry
      main.bronCount = data.bron
    })
  });