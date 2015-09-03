// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {

    //plays and queues on click
    'click': function() {
      //this.model.play();
      console.log('enqueuing');
      this.model.enqueue();
      console.log(this.model);
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
