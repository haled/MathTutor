(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>Math Tutor</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
