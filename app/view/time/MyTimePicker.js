Ext.define('TestModern.view.time.MyTimePicker', {
    extend: 'Ext.Picker',

    requires: [
        'TestModern.view.time.MyTimePickerController',
        'TestModern.view.time.MyTimePickerModel'
    ],

    controller: 'time-mytimepicker',
    viewModel: {
        type: 'time-mytimepicker'
    },
    xtype: 'mytimepicker',
    itemId: 'MyTimePicker',
    listeners: {
        beforerender: 'onMyTimePickerBeforeRender'
    },
    // slots: [{
    //     align: 'left',
    //     name: 'hour',
    //     title: 'hour',
    //     data: hours
    // }, {
    //     align: 'right',
    //     name: 'minute',
    //     title: 'minute',
    //     data: minutes
    // }]
});