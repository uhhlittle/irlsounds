// var ActivitiesListView = Backbone.View.extend({
//   el: '#activities',
//
//   initialize: function() {
//     console.log("Created ActivitiesListView");
//     this.listenTo(this.collection, 'reset', this.renderAll);
//     this.listenTo(this.collection, 'add', this.renderOne);
//   },
//
//   renderAll: function() {
//     this.$el.empty();
//     this.collection.each(this.renderOne.bind(this));
//   },
//
//   renderOne: function(reminder) {
//     var view = new ActivityView({model: activity});
//     view.render();
//     this.$el.append(view.$el);
//   }
// });
