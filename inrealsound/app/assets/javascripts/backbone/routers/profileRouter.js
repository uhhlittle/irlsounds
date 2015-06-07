var ProfileRouter = Backbone.Router.extend({
    routes: {

        "": "profile"
    },

    initialize: function initialize () {
        collection = new ProfileCollection();
        listView = new ProfileListView({collection: collection});
        collection.fetch({reset: true});
    },

    reminders: function reminders () {
        collection.fetch({reset: true});
    },

    complete: function complete () {
        collection.fetch({reset: true, data: {completed: true}});
    },

    incomplete: function incomplete () {
      collection.fetch({reset: true, data: {completed: false}});
    }
});
