// On load


// Navigation between pages
function nav_DAC () {
    document.getElementById('dac').scrollIntoView();
}

function nav_ADC () {
    document.getElementById('adc').scrollIntoView();
}

function nav_Home () {
    document.getElementsByClassName('welcome').scrollIntoView();
}


// Convertion DAC
function getDAC() {
    const vmin = document.getElementById('vmin').value;
    const vmax = document.getElementById('vmax').value;
    const res = document.getElementById('res').value;
    const value = document.getElementById('value').value;
    var maxvalue = (2**parseInt(res)) - 1;
    var Ve = parseInt(vmax) - parseInt(vmin);
    var Q = Ve / maxvalue;
    var quantum = Ve/(2**res - 1);
    var Vout = (quantum * parseInt(value)) + parseInt(vmin);
    
    var quantum_text = document.getElementById('quantum');
    var vout_text = document.getElementById('vout');
    quantum_text.innerHTML = '<b>Q = ' + Ve + ' / (2<sup>' + res + '</sup> - 1) = ' + quantum + ' V</b>';
    vout_text.innerHTML = '<b>V<sub>out</sub> = ' + quantum + ' x ' + value + ' + ' + vmin + ' = ' + Vout + ' V</b>'

}

