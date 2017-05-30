
var Model = (function () {
    'use strict';
    var data = {
        items: {
            inc: [],
            exp: [],
        },

        totalBudget: 300,
    }

    
    
    return {
        // Adds items to the data structure
        addItem: function (type, description, value) {
                //var type = type;
                //var description = description;
                //var value = value;
                //Model.data.inc.id[0] = 12;
                //alert(9);
                // nalert(type + ' ' + description + ' ' + value);

            },

        deleteItem : function() {

        },

        calculateBudget: function() {

        },

        getBudget: function() {
            return Model.totalBudget;
        },

        test: function () {
            // body...
            return Model.data;
            //alert(this.data[inc].id[0]);

        }
    }
}());


var View = (function () {
    'use strict';

    // Stores UI Component DOM
    var UIComponents = {
        "inputType": document.getElementById('type'),
        "inputDescription": document.getElementById('description'),
        "inputValue": document.getElementById('value'),
        "btnSubmit": document.getElementById('submit'),
    }



   


    return {
        test: function() {
        console.log(8888);
        Model.data[inc].id[0] = 12;
        alert(Model.data[inc].id[0]);

        },

        getDOMStrings: function() {
            return UIComponents;
        },

        // Add new items to the DOM
        addItem: function() {


            alert('view dom function')
        },

        updateBudget: function() {

        },

    }
}());

var Controller = (function () {


        var DOM = View.getDOMStrings();

        // Set focu to the  input descripion
        DOM.inputDescription.setFocus();
        
        // Button click handler
        DOM.btnSubmit.addEventListener('click', function () {
        // Get input form the UI  
        var type = DOM.inputType.value;
        var description = DOM.inputDescription.value;
        var value = DOM.inputValue.value;


        // Adds item to the data structure
        Model.addItem(type, description, value);

        // Adds item to the view
        View.addItem(type, description, value);

        // Updates budget in UI
        View.updateBudget();
    });

}());