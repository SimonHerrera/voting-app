angular.module('app', []) //create new, instantiates (only once in app)
angular.module('app') //refers to
  .controller('MainCtrl', function() {
    const main = this

    main.heading = 'Rock the vote!!!'

  })