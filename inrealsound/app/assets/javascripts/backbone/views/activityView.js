// var ActivityView = Backbone.View.extend({
//   className: 'activity',
//   tagName: 'div',
//
//   events: {
//     // 'click.finish': 'markComplete'
//   },
//
//   initialize: function() {
//     console.log("created activity view");
//     this.listenTo(this.model, 'change', this.render);
//     this.render();
//   },
//
//   render: function() {
//     this.$el.html(HandlebarsTemplates['activities/show'](this.model.toJSON()));
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
