var Activity = function(id, name, duration){
  this.id = id;
  this.name = name;
  this.duration = duration;
}

Activity.prototype = {
  save: function(){
    $.ajax({
      type: 'POST',
      data: { activity: {id: this.id, name: this.name, duration: this.duration}},
      dataType: 'json',
      url: "/activities"
    }).done(function(response){
      console.log("model saved")
      profileModel.fetchActivities();
    }).fail(function(){
      console.log("failed to save")
    })
  },
  update: function(data){
    $.ajax({
      type: 'PUT',
      data: {activity: data},
      dataType: 'json',
      url: "/activities/" + this.id
    }).done(function(response){
      profileModel.fetchActivities();
      console.log("model updated")
    }).fail(function(){
      console.log("failed to updated")
    })
  },
  deleteActivty: function(){
    $.ajax({
      type: 'DELETE',
      data: {_method: 'delete'},
      dataType: 'json',
      url: "/activities/" + this.id
    }).done(function(response){
      profileModel.fetchActivities();
      console.log("model deleted")
    }).fail(function(){
      console.log("failed to delete")
    })
  }
}
