Ext.define('Proximity.view.result.ResultList', {
    extend: 'Ext.List',
    xtype: 'resultlist',
    alias: 'widget.resultlist',

    config: {
        store: 'RemoteResultStore',

        itemCls: 'list-item-custom',

        itemTpl:
            '<div class="list-item-name">{name}</div>' +
            '<div class="list-item-address">{suburb}</div>' +
            '<div class="list-item-phone"><a href="tel:{phone}">{phone}</a></div>',

        //itemHeight: 74,     // default is 47
        ui: 'round',

        pinHeaders: false,

        variableHeights: true,

        emptyText: '<div style="text-align: center">No Matching Items</div>',

        disableSelection: true,

        onItemDisclosure: function(record, target, index, evt, options) {
            this.fireEvent('showDetailsCommand', this, record, index);
        }
    }
});