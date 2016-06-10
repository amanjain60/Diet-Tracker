Ext.define('Myapp.model.userlist', {
    extend: 'Ext.data.Model',
    id: 'userlistmodel',
    config: {
        fields: [{
                name: 'username',
                type: 'string'
            }, {
                name: 'userage',
                type: 'int'
            }, {
                name: 'usermail',
                type: 'string'
            }, {
                name: 'userpassword',
                type: 'string'
            }


        ]
    }
});