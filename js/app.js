
var Model = (function () {
    'use strict';
    
}());


var View = (function () {
    'use strict';

    // Stores UI Component DOM
    var UIComponents = {
        inputType: document.getElementById('type'),
        inputDescription: document.getElementById('description'),
        inputValue: document.getElementById('value'),
        btnSubmit: document.getElementById('submit'),
    }



    // Button click handler
    UIComponents.btnSubmit.addEventListener('click', function () {
        // Get input form the UI
        var type = UIComponents.inputType.value;
        var description = UIComponents.inputDescription.value;
        var value = UIComponents.inputValue.value;
        alert(type + ' ' + description + ' ' + value);
    });

    function Test() {
    	// body...
        alert(1);


    }

    return {
        test: function() {
        console.log(8888);

        }
    }
}());

var Controller = (function () {

}());