var ActivityView = function(activity){
  this.activity = activity;
  this.container = document.createElement("div");
  this.container.className = "activity";
  // create label for input used by in-place editing
  this.name = document.createElement("label");
  this.name.innerHTML = activity.name;
  this.name.htmlFor = "activity" + activity.id;
  this.container.appendChild(this.name);

  delete button
  var delete_button = document.createElement("button");
  delete_button.id = "activity" + activity.id
  var text = document.createTextNode("Delete");
  text.className = "delete"
  delete_button.addEventListener("click", function() {
    activity.deleteActivity();
  });

  // this.container.addEventListener("click", )
  this.name.addEventListener("click", this.grabPlaylist.bind(this))

  // this.container.appendChild(delete_button);
  // this.container.appendChild(text);
  // this.container.appendChild(input); ----edit append needs work
  return this.container
}

ActivityView.prototype = {
  editActivity: function(event){
    var input = document.createElement("input")
    input.value = this.name.innerHTML
    this.container.removeChild(this.name)
    this.container.appendChild(input)
    input.addEventListener("keyup", function(event){
      if (event.keyCode == 13){
        var value = input.value;
        this.activity.update({name:value});
        profileView.render();
      }
    }.bind(this) )
  },

  grabPlaylist: function(event){
    var name = this.name;
    console.log("this is where you search the music")
  }
}
