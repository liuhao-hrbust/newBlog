'use strict';
let round_l = cl('round-l',0);
let round_r = cl('round-r',0);
let discrib_r = cl('discrib_r',0);
let discrib_l = cl('discrib_l',0);

function cl(className,index) {
    return document.getElementsByClassName(className)[index];
}
function $(id) {
    return document.getElementById(id);
}
round_l.onmouseover = function () {
    round_r.className = 'round-r round_active round';

    cl('onr',0).className = 'door onr active_door';
    discrib_r.className = 'discrib_r discrib_active discrib';
};
round_l.onmouseleave = function () {
    cl('onr',0).className = 'onr door';
    round_r.className = 'round-r round';
    discrib_r.className = 'discrib_r discrib';

};
round_r.onmouseover = function () {
    round_l.className = 'round-l round_active round';
    cl('onl',0).className = 'door onl active_door';
    discrib_l.className = 'discrib_l discrib_active discrib';
};
round_r.onmouseleave = function () {
    cl('onl',0).className = 'onl door';
    round_l.className = 'round-l round';
    discrib_l.className = 'discrib_l discrib';
};
round_l.onclick = function () {
    window.open('','_self');
};
round_r.onclick = function () {
    window.open('https://github.com/liuhao-hrbust/','_self');
};
