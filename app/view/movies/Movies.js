Ext.define('TestModern.view.movies.Movies', {
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
        padding: 5,
        inline: {
            wrap: false
        },
        itemTpl: '<div class="img" style="background-image: url({cover_path}); background-repeat: no-repeat; background-size: cover; background-position: center center; height: 40em; width:40em; "></div><div class="movie"><p class="movie-title">{movie_name}</p></div>',
        store: 'Movies'
    }],
    listeners: {

    }
});