//var theMap = Ext.create('Ext.Map', {
//    config: {
//        mapOptions: {
//            center: new google.maps.LatLng (38.909027,-77.037165),
//            mapTypeId: google.maps.MapTypeId.ROADMAP,
//            zoom: 15
//        }
//    }
//});

var myMap = Ext.create('Ext.Component', {
    html: 'Map should be here'
});


Ext.define('Proximity.view.result.ResultMap', {
    extend: 'Ext.Container',
    xtype: 'resultmap',
    alias: 'widget.resultmap',

    config: {
        layout: 'fit'
        ,
        items: [{
            xtype: 'map'
        }]
    }
//    ,
//
//    initialize: function() {
//        this.callParent(arguments);
//
//        console.log('this:');
//        console.log(this);
//
//        var me = this;
//        console.log('adding the map');
//        console.log(theMap);
//        me.add([theMap]);
//    }
});
