Ext.define('TestModern.view.time.Time', {
    extend: 'Ext.panel.Panel',

    requires: [
        'TestModern.view.time.TimeController',
        'TestModern.view.time.TimeModel',
        'TestModern.view.time.MyTimePicker'
    ],
    xtype: 'timeselection',
    controller: 'time-time',
    itemId: 'MyTimeSelection',
    viewModel: {
        type: 'time-time'
    },
    items: [{
        xtype: 'mytimepicker'
    }]

});