var ProfileModel = Backbone.Model.extend({
  initialize: function(){
    console.log('New Activity Profile Created');
    var Profile = function(){
      this.activities = [];
    };
  },
  loadActivities: function(){
    for( var x = 0; x < globals.activities.length; x++){
    newProfile.activities.push(Activity.new(globals.activities[x]));

    }
  },
  urlRoot: '/profile'
});
