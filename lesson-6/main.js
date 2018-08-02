var addRowBtn = document.getElementById('addRow'),
    tBody     = document.getElementsByTagName('tbody')[0],
    td        = tBody.getElementsByTagName('td');

addRowBtn.onclick = function (event) {
    var newRow = document.createElement('tr');
    newRow.innerHTML = '<td></td><td></td><td></td>';

    var firstRow = tBody.firstChild;
    tBody.insertBefore(newRow, firstRow);
};

tBody.addEventListener('click', insertInput, false);
function insertInput(evt) {
    var target = evt.target;

    if (target.tagName === 'TD' && target.id !== 'addRow') {

        target.innerHTML = '<input type="text" onblur="setText(event)" value="' + target.innerText +'">';

        var input = document.getElementsByTagName('input')[0];
        input.focus();
    }
};

function setText(event) {
    var target = event.target;

    target.parentNode.innerHTML = target.value;
}

window.onkeypress = function (evt) {
    if (evt.keyCode === 13 ) {
        var input = document.getElementsByTagName('input')[0];
        input && input.blur();
    }
};