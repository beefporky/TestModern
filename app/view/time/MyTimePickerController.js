Ext.define('TestModern.view.time.MyTimePickerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.time-mytimepicker',

    onMyTimePickerBeforeRender: function () {
        var minutesArr = [],
            hoursArr = [];
        //generate hours data
        for (var i = 0; i < 24; i++) {
            var minute = i.toString().length === 1 ? "0" + i : i
            Ext.Array.push(hoursArr, {
                text: minute,
                value: minute
            });

        }
        //generate minutes data
        for (var i = 0; i < 60; i++) {
            var hour = i.toString().length === 1 ? "0" + i : i
            Ext.Array.push(minutesArr, {
                text: hour,
                value: hour
            });
        }
        console.log(hoursArr);
        console.log(minutesArr);
        console.log(this.getView().getViewModel());
        this.getView().getViewModel().setData(hoursArr);
        this.getView().getViewModel().setData(minutesArr);
    }

});