var ActivitiesCollection = Backbone.Collection.extend({
  initialize: function() {
    console.log('New Activities Collection');
  },
  model: ActivityModel,
  url: '/activities'
});
