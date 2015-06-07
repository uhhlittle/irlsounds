var Profile = function(){
  console.log("This profile has been CREATED@!!!!")
  this.activities = [];
  this.genres = [];
  this.fetchActivities();
  console.log("Fetching Activities")

  console.log("Fetching Genres")

}

Profile.prototype = {
  save: function(){
    $.ajax({
      type: 'POST',
      data: {profile},
      dataType: 'json',
      url: "/profiles"
    }).done(function(response){
      console.log("model saved");
    }).fail(function(){
      console.log("failed to save")
    })
  },
  fetchActivities: function(callback) {
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: "/activities",
      context: this
    }).done(function(response) {
      // fridgeView = new FridgeView(this);
      profileModel.loadActivities(response);

      profileView.render();
    }).fail(function(response){
      console.log("js failed to load")
    }).done(function(){this.fetchGenres()})
  },
  loadActivities: function(response) {
    this.activities = [];
    for(var i = 0; i < response.length; i++){
      var activity = new Activity(response[i].id, response[i].name, response[i].duration);
      this.activities.push(activity);
    }
  },
  fetchGenres: function(callback) {
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: "/genres",
      context: this
    }).done(function(response) {
      profileModel.loadGenres(response);

      profileView.render();
    }).fail(function(response){
      console.log("js failed to load")
    })
  },
  loadGenres: function(response) {
    this.genres = [];
    for(var i = 0; i < response.length; i++){
      var genre = new Genre(response[i].id, response[i].name, response[i].activity);
      this.genres.push(genre);
    }
  }
}
