Ext.define('Proximity.view.result.ResultView', {
    extend: 'Ext.tab.Panel',
    xtype: 'resultview',
    alias: 'widget.resultview',
    id: 'resultView',

    stores: ['SearchStore'],

    config: {
//first we define the xtype, which is tabpanel for the Tab Panel component
        xtype: 'tabpanel',
        title: '',

        //now we specify the tabBar configuration and give it a docked property of bottom
        //this will dock the tabbar of this tabpanel to the bottom
        tabBar: {
            ui: 'dark',
            docked: 'bottom'
        },

        //here we specify the ui of the tabbar to light
//        ui: 'light',

        defaults: {
            scrollable: true
        },

        items: [
            {
                itemId: 'distance',
                title: 'Distance',
                iconCls: 'globe',
                layout: {
                    type: 'card',
                    animation: 'flip'
                },
                items: [{
                    xtype: 'resultlist'
                },{
                    xtype: 'resultmap'
                }],
                listeners: {
                    show: {
                        fn: function() {
                            var tab = Ext.getCmp('resultView').getActiveItem();
                            var flipButton = Ext.getCmp('viewFlipButton');
                            flipButton.setText(tab.activeList ? 'List' : 'Map');
                            flipButton.show();
                        }
                    }
                }
            }
        ]
    }
});
