/*
*   CREATE A MATH CALCULATOR
*/

var Calculator = (function () {
    var operations = {};
    operations.result = 0;

    operations.add = function(x,y) {
        return x + y;
    }

    operations.multiply = function(x,y) {
        return x * y;
    }

    operations.divide = function(x,y) {
        return x / y;
    }

    operations.substract = function(x,y) {
        return x - y;
    }

    return operations;
}());


$(document).ready(function (){
    var input = $('#input-box');
    $('.num-btn').click(function() {
        input.append(input.val($(this).val()));
    });
});
