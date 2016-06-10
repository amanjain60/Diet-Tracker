Ext.define('Myapp.view.dietchart', {
    extend: 'Ext.dataview.List',
   // xtype: 'search',
    id: 'dietchartlist',
    config: {
        layout: {
            type: 'vbox',
            align: 'top'
        },
        items: [{
            xtype: 'titlebar',
            docked: 'top',
            width: '100%',
            id: 'Daily Diet',
            title: 'Enter your Daily Diet Chart',
            items: [{
                xtype: 'button',
                text: 'Back',
                id: 'backuserhome',
            },
            {
                xtype: 'button',
                text: 'Generate Report',
                id: 'presentReport',
                align: 'right'
            }],
        }, 
    /*  {
            xtype: 'button',
            text: 'Generate Report',
            docked: 'top',
           // width: '100%',
            align: 'center',
            margin: '15 0',
            id: 'presentReport',
       //     url: 
            ui: 'confirm', */
     /*       scope: this,
            formBind: true,
            handler: function(btn) {
            dietchartlist.submit({
            method:'POST', 
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
                },
              params: Ext.util.JSON.encode(dietchartlist.getValues()),
          //  waitTitle:'Connecting', 
          //  waitMsg:'Creating...',
            success:function(data){             
                },
            failure:function(form, result){
                }
            });
          }
*/
 //       }, 
        {

            xtype: 'textfield',
            name: 'Date:',
            label: 'Date:',
            required: true,
            margin: '5 0',
            id: 'presentDate',
            placeHolder: 'yyyy-mm-dd',
            listeners: {
                  change: function(textField, newValue) {
                          if (newValue.length !== 0) {
                              if (/[^0-9-]/.test(newValue)) {
                                  Ext.Msg.alert('Error', "Please Enter a valid Date");
                                  textField.setValue('');
                                   }
                                }
                            }
                      }
        },
        {
          xtype: 'label',
          id: 'foodCount'
        },
        {
            xtype: 'list',
          //  mode: 'multi',
            width: '100%',
            height: '25%',
        //  emptyText: 'No such Food',
            id: 'dietSelected',
       //     grouped: true,
            bind: 'user',
         // onItemDisclosure: true,
            scrollable: 'vertical',
            variableHeights: false,
        //  itemHeight: 80,
            store: 'foodSelectStore',
            itemTpl: new Ext.XTemplate(
                      '<div width="100%">',
                      '<div style="float:left;font-size:0.7em;">{Food}</div>',
                      '</div>'),
        
        },

        {
          xtype: 'searchfield',
          placeHolder: 'Search for Food',
          name: 'searchfield',
        //  docked: 'top',
          width: '100%',
          height: '10%',
          id: 'searchFood'
        },

        {
            xtype: 'list',
         //   mode: 'multi',
            width: '100%',
            height: '100%',
        //  emptyText: 'No such Food',
            id: 'diettaken',
            grouped: true,
            bind: 'user',
         // onItemDisclosure: true,
            scrollable: 'vertical',
            variableHeights: false,
            itemHeight: '7%',
            store: 'foodstore',
           itemTpl: new Ext.XTemplate(
                      '<div width="100%">',
                      '<div style="float:left;font-size:0.9em;">{foodID}. {Food}</div>',
                      '<div style="float:right;font-size:0.8em;color:#999999;">{FoodType}<br></div>',
                      '<div style="float;text-align: left;font-size:0.6em;color:"black";"><br><br><b>Serving Size: {ServingSize}</b>&nbsp&nbspEnergy(kcal):{Energy}&nbsp &nbsp %Water: {percentwater}&nbsp &nbspFat(g): {TotalFat}&nbsp &nbspVit A(mg): {VitA}&nbsp &nbspVitC(mg): {VitC}&nbsp &nbspCalcium(mg): {Calcium}&nbsp &nbspProtein(g): {Protein}&nbsp &nbspCarbohydrate(g): {Carbohydrate}&nbsp &nbspIron(mg): {Iron}</div>',
                     '</div>'),

          /*   listeners: {
  
                select: function(view, record) {
                  //  console.log(record)
                    Ext.Msg.alert('Selected!', 'You selected ' + record.get('Food'));
                  
            }
          }*/
        }]
    }
});