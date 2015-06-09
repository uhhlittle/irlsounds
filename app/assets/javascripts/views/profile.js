var ProfileView = function(profileModel){
  var newActivityButton = document.querySelector("#new-activity-button");
  var newGenreButton = document.querySelector("#new-genre-button");
  this.newActivityName = document.querySelector("#new-activity-name");
  this.newActivityDuration = document.querySelector("#new-activity-duration");
  this.currentActivityList = document.querySelector("#current-activity-column ul.activity-list");

  this.newGenreName = document.querySelector("#new-genre-name");
  this.newGenreActivity = document.querySelector("#new-genre-activity");
  this.currentGenreList = document.querySelector("#genre-column ul.genre-list");
  this.doneList = document.querySelector("#completed-column .activity-list");
  this.model = profileModel;
  // newActivityButton.addEventListener("click", this.addActivity.bind(this));
  // newGenreButton.addEventListener("click", this.addGenre.bind(this));

  this.render();
}

ProfileView.prototype = {
  addActivity: function(event){
    event.preventDefault();
    var id = this.id;
    var name = this.newActivityName.value;
    var duration = this.newActivityDuration.value;
    var activity = new Activity(id, name, duration);
    activity.save();
    this.render()
  },
  addGenre: function(event){
    event.preventDefault();
    var id = this.id;
    var name = this.newGenreName.value;
    var activity = this.newGenreActivity.value;
    var genre = new Genre(id, name, activity);
    genre.save();
    this.render()
  },
  render: function(){
    this.currentActivityList.innerHTML = "";
    this.currentGenreList.innerHTML = "";
    console.log("current-activities");
    for(var i = 0; i < this.model.activities.length; i++){
      var activityView = new ActivityView(this.model.activities[i])
        this.currentActivityList.appendChild(activityView);

    }
    for(var i = 0; i < this.model.genres.length; i++){
      var genreView = new GenreView(this.model.genres[i])
        this.currentGenreList.appendChild(genreView);

    }
  }
}
