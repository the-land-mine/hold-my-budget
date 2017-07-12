


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
                var newItem = {
                    'id': 1,
                    'description': description,
                    'value': value
                }

                var value = parseFloat(value);
                if (type === 'inc') {
                    data.items.inc.push(newItem);
                    data.totalBudget += value;
                } else if (type === 'exp') {
                    data.items.exp.push(newItem);
                    data.totalBudget -= value;
                } else {
                    console.log('Invalid type');
                }

                //alert(9);
                // nalert(type + ' ' + description + ' ' + value);

            },

        deleteItem : function() {

        },

        calculateBudget: function() {

        },

        getBudget: function() {
            return data.totalBudget;
        },

        test: function () {
            // body...
            return data;
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
        incomeTable: 'table-incomes',
        expenseTable: 'table-expenses',
    }



   


    return {
        test: function() {
        console.log('Function test invoked');
        Model.data[inc].id[0] = 12;
        alert(Model.data[inc].id[0]);

        },

        getDOMStrings: function() {
            return UIComponents;
        },

        // Add new items to the DOM
        addItem: function(type, description, value) {

            var htmlTemplate, newHtml, targetTableDOM,

            htmlTemplate = '<tr><td colspan="2">%description%</td><td colspan="2">%value%</td></tr>';
            newHtml = htmlTemplate.replace('%description%', description);
            newHtml = newHtml.replace('%value%', value);

            if (type == 'inc') {
                targetTableDOM = document.getElementById(UIComponents.incomeTable);
                targetTableDOM.insertAdjacentHTML('beforeend', newHtml);
            } else if (type == 'exp') {
                targetTableDOM = document.getElementById(UIComponents.expenseTable);
                targetTableDOM.insertAdjacentHTML('beforeend', newHtml);
            }
        },

        updateBudget: function() {
            var availableBudget = document.querySelector('.available-budget');
            availableBudget.textContent = '- ' + Model.getBudget();
        },

    }
}());

var Controller = (function () {


        var DOM = View.getDOMStrings();

        View.updateBudget();
        // Button  Submit click handler
        DOM.btnSubmit.addEventListener('click', function () {

            // Get input form the UI  
            var type = DOM.inputType.value;
            var description = DOM.inputDescription.value;
            var value = DOM.inputValue.value;


            if (type && description && value) {

                // Clear input fields
                DOM.inputDescription.value = "";
                DOM.inputValue.value = "";

                // Adds item to the data structure
                Model.addItem(type, description, value);

                // Adds item to the view
                View.addItem(type, description, value);

                // Updates budget in UI
                View.updateBudget();

            }
            
        });

        var container = document.querySelector('.container');

        // Button delete click handler
        container.addEventListener('click', function(event) {
            //alert('click container' + event.toElement);
           console.log(event.target);
//           console.log(event.target.parentNode.parentNode);
           clickTarget = event.target;
           clickTarget.removeElement;
            if (event.target == '<button class="btn btn-round btn-secondary btn-delete">Delete</button>') {
                alert(7);
            }
        });

}());