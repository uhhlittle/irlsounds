var GenreView = function(genre){
  this.genre = genre;
  this.container = document.createElement("div");
  this.container.className = "genre";
  // create label for input used by in-place editing
  this.name = document.createElement("label");
  this.name.innerHTML = genre.name;
  this.name.htmlFor = "genre" + genre.id;
  this.container.appendChild(this.name);

  //delete button
  var delete_button = document.createElement("button");
  delete_button.id = "genre" + genre.id
  $("#delete_button.id").attr('value', 'Delete');
  delete_button.className = "delete"
  delete_button.addEventListener("click", function() {
    genre.deleteGenre();
  });


  this.name.addEventListener("click", this.editGenre.bind(this))

  // this.container.appendChild(delete_button);
  // this.container.appendChild(text);
  // this.container.appendChild(input); ----edit append needs work
  return this.container
}

GenreView.prototype = {
  editGenre: function(event){
    var input = document.createElement("input")
    input.value = this.name.innerHTML
    this.container.removeChild(this.name)
    this.container.appendChild(input)
    input.addEventListener("keyup", function(event){
      if (event.keyCode == 13){
        var value = input.value;
        this.genre.update({name:value});
        profileView.render();
      }
    }.bind(this) )
  }
}
