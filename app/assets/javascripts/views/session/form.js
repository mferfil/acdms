Slipmat.Views.SessionForm = Backbone.View.extend({

  template: JST["session/form"],

  events: {
    "submit #new-session": "submit"
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);

    return this;
  },

  submit: function (e) {
    e.preventDefault();

    var $form = $(e.currentTarget);
    var attributes = $form.serializeJSON().user;

    this.model.fetch(attributes, {
      success: function (user) {
        Backbone.history.navigate("#/users/" + user.id, { trigger: true });
      }
    });
  }
});
