// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require underscore
//= require backbone
//= require handlebars.runtime
//= require_tree ./templates
//= require_tree ./backbone/routers
//= require_tree ./backbone/models
//= require_tree ./backbone/collections
//= require_tree ./backbone/views
//= require_tree .

var globals = {
  activities: [
    "morning", "workout", "dinner"
  ]
}

/*Delete this!*/
var Profile = function(){
  this.activities = [];
}

var newProfile = new Profile();

/* Profile model */
for( var x = 0; x < globals.activities.length; x++){
  newProfile.activities.push(Activity.new(globals.activities[x]));
}
/* ProfileView model */
render(profile.activities)
/*Delete above!*/


$(document).ready(loadActivitiesApp);

function loadActivitiesApp() {
  mainCollection = new ActivitiesCollection();
  mainListView = new ActivitiesListView({collection: mainCollection});
  mainCollection.fetch({reset: true});
}
