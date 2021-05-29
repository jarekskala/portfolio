'use strict'


var switchOptions = document.querySelectorAll('.js-switch-option');
var getError = false; 


/*
@ DESCRIPTION
- The function generates various messages.
@ PARAMETERS
- type *default[warning]  [error, warning]
- message *default[<string> 
*/
function flashMessage(type, message) {
    if(!getError) {
        if(typeof message == 'undefined' || typeof type == 'undefined' ) {
            message = 'Argument missing in function';
            type = 'warning';  
        }

        var html = '<div class="flash-message flash-message--' + type + '">' + message + '</div>';
        document.getElementsByTagName('body')[0].insertAdjacentHTML('afterbegin', html);
        throw new Error(message);
    }
    getError = true;
} 


/*
@ DESCRIPTION
- The function takes care of switch options.
@ PARAMETERS
- targetIndex
*/
function setSwitchOption(targetIndex) {
    switchOptions[targetIndex].querySelector('input[type="radio"]').checked = true;
 
    var optionRelatedUrl = '';
    if (__DATA__ && __DATA__.planSelector && __DATA__.planSelector[targetIndex] && __DATA__.planSelector[targetIndex].url) {
        optionRelatedUrl = __DATA__.planSelector[targetIndex].url;
    } else {
        flashMessage('error', 'Missing data object'); 
        return; 
    }

    document.querySelector('#js-btn-buy').href = optionRelatedUrl;
    switchOptions.forEach(function(current) {
        current.classList.remove('active');
    });
    switchOptions[targetIndex].classList.add('active');
}


// Set default switch option. 
setSwitchOption(1);


switchOptions.forEach(function(current, index) {
    var renderYear = (index + 1) + (index > 0 ? '  years' : ' year');

    if (__DATA__ && __DATA__.planSelector && __DATA__.planSelector[index] && __DATA__.planSelector[index].monthlyPrice) {
        current.querySelector('.js-price-per-mnth').innerHTML = __DATA__.planSelector[index].monthlyPrice + ' / month';
    } else {
        flashMessage('error', 'Missing data object');
    }

    if (__DATA__ && __DATA__.planSelector && __DATA__.planSelector[index] && __DATA__.planSelector[index].yearlyPrice) {
        current.querySelector('.js-billed-as').innerHTML = 'Billed as ' + __DATA__.planSelector[index].yearlyPrice + ' / ' + renderYear;
    } else {
        flashMessage('error', 'Missing data object');
    }

    current.addEventListener('change', function() {
        setSwitchOption(index); 
    });
});
