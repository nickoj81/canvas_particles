requirejs.config({
  baseUrl: 'js',

  paths: {
    'underscore' : 'lib/underscore',
    'text': 'lib/text',
    'bootstrap' : 'lib/bootstrap/js/bootstrap',
    'jquery': 'lib/jquery'
    
  },

  shim: {

    'bootstrap': {
       deps: ["jquery"],
       exports: "$.fn.popover"
    },
    
    'app': {
      deps: ['bootstrap']
    }
  }
});



require([
  'app'
],


function(App) {
 $(document).ready(
  window.drawAnim = new App()
   //console.log("wa;orjwpojpoajdw" + window.drawAnim.setPos)

)
})
