var Genre = function(id, name, activity){
  this.id = id;
  this.name = name;
  this.activity = activity;
}

Genre.prototype = {
  save: function(){
    $.ajax({
      type: 'POST',
      data: { genre: {id: this.id, name: this.name, activity: this.activity}},
      dataType: 'json',
      url: "/genres"
    }).done(function(response){
      console.log("model saved")
      profileModel.fetchGenres();
    }).fail(function(){
      console.log("failed to save")
    })
  },
  update: function(data){
    $.ajax({
      type: 'PUT',
      data: {genre: data},
      dataType: 'json',
      url: "/genres/" + this.id
    }).done(function(response){
      profileModel.fetchGenres();
      console.log("model updated")
    }).fail(function(){
      console.log("failed to updated")
    })
  },
  deleteGenre: function(){
    $.ajax({
      type: 'DELETE',
      data: {_method: 'delete'},
      dataType: 'json',
      url: "/genres/" + this.id
    }).done(function(response){
      profileModel.fetchGenres();
      console.log("model deleted")
    }).fail(function(){
      console.log("failed to delete")
    })
  }
}
