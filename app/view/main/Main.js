/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('TestModern.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'TestModern.view.main.MainController',
        'TestModern.view.main.MainModel',
        'TestModern.view.movies.Movies'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        },
        styleHtmlContent: true
    },
    tabBarPosition: 'bottom',
    items: [
        {
            title: 'Movies',
            iconCls: 'x-fa fa-ticket',
            layout: 'fit',
            items: [{
                xtype: 'movies'
            }]
        },{
            title: 'Time',
            iconCls: 'x-fa fa-time',
            bind: {
                html: '{loremIpsum}'
            }
        },{
            title: 'Date',
            iconCls: 'x-fa fa-calendar',
            bind: {
                html: '{loremIpsum}'
            }
        },{
            title: 'Seats',
            iconCls: 'x-fa fa-seat',
            bind: {
                html: '{loremIpsum}'
            }
        },{
            title: 'Summary',
            iconCls: 'x-fa fa-book',
            bind: {
                html: '{loremIpsum}'
            }
        },{
            title: 'Payment',
            iconCls: 'x-fa fa-dollar',
            bind: {
                html: '{loremIpsum}'
            }
        }
    ]
});
