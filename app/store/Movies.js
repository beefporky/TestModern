Ext.define('TestModern.store.Movies', {
    extend: 'Ext.data.Store',
    storeId: 'Movies',
    fields: [
      'movie_name','cover_path'
    ],
    data: [
      { movie_name: 'black_dynamite', cover_path: 'images/black_dynamite.jpg'},
      { movie_name: 'garbo_silents', cover_path: 'images/garbo_silents.jpg'},
      { movie_name: 'series_of_unfortunate_events', cover_path: 'images/series_of_unfortunate_events.jpg'}
    ]
});
