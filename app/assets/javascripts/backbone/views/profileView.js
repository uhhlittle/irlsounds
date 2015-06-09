// var ProfileView = Backbone.View.extend({
//   className: 'profile',
//   tagName: 'div',
//
//   events: {
//     // 'click.finish': 'markComplete'
//   },
//
//   initialize: function() {
//     console.log("created profile view");
//     this.listenTo(this.model, 'change', this.render);
//     this.render();
//   },
//
//   render: function() {
//     this.$el.html(HandlebarsTemplates['profile/show'](this.model.toJSON()));
//   },
//
//   // markComplete: function() {
//   //   var view = this;
//   //   this.model.destroy()
//   //     .done(function(){
//   //       view.$el.fadeOut();
//   //     })
//   //     .fail(function() {
//   //       alert("couldn't destroy")
//   //     });
//   // }
// });
