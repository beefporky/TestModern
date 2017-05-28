
Ext.define('TestModern.view.movies.Movies',{
    extend: 'Ext.panel.Panel',

    requires: [
        'TestModern.view.movies.MoviesController',
        'TestModern.view.movies.MoviesModel',
        'TestModern.store.Movies',
        'Ext.dataview.plugin.ItemTip'
    ],
    xtype: 'movies',
    itemId: 'movies',
    controller: 'movies-movies',
    viewModel: {
        type: 'movies-movies'
    },
    layout: 'fit',
    shadow: true,
    items: [{
      xtype: 'dataview',
      scrollable: 'horizontal',
      inline: {
          wrap: false
      },
      itemTpl: '<div class="img" style="background-image: url({cover_path});"></div><div class="name">{movie_name}</div>',
      store: 'Movies'
  }]
});
