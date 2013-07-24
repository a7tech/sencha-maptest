Ext.define('Proximity.model.Result', {
    extend: 'Ext.data.Model',
    xtype: 'xresult',

    config: {
        idProperty: 'id',
        fields: [
            { name: 'id', type: 'int' },
            { name: 'dateCreated', type: 'date', dateFormat: 'c', defaultValue: new Date() },
            { name: 'name', type: 'string' },
            { name: 'street', type: 'string' },
            { name: 'suburb', type: 'string' },
            { name: 'location', type: 'string' },
            { name: 'phone', type: 'string' },
            { name: 'url', type: 'string' },
            { name: 'description', type: 'string' },
            { name: 'image', type: 'string' },
            { name: 'category', type: 'string' }
        ],
        validations: [
            { type: 'presence', field: 'id' },
            { type: 'presence', field: 'dateCreated' },
            { type: 'presence', field: 'name' },
            { name: 'description', type: 'string' }
        ],
        hasMany: { model: 'string', name: 'categories' }
    }
});

