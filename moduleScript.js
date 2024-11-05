function init() {
  script.log("Custom module init");
}


function key(key) {
  var address = "/key/"+key;
  local.send(address);
}

function cuelist_go (id, cueNum) {
    var cueAdd = cueNum < 0 ? "" : "/"+cueNum;
    var address = "/cuelist/"+id+"/go"+cueAdd;
    local.send(address);
}

function cuelist_goBack (id) {
    var address = "/cuelist/"+id+"/goBack";
    local.send(address);
}

function cuelist_goRandom (id) {
    var address = "/cuelist/"+id+"/goRandom";
    local.send(address);
}

function cuelist_off (id) {
    var address = "/cuelist/"+id+"/off";
    local.send(address);
}

function cuelist_kill (id) {
    var address = "/cuelist/"+id+"/kill";
    local.send(address);
}

function cuelist_load (id, cueNum) {
    var cueAdd = cueNum < 0 ? "" : "/"+cueNum;
    var address = "/cuelist/"+id+"/load"+cueAdd;
    local.send(address);
}

function cuelist_flash (id, val) {
    var address = "/cuelist/"+id+"/flash";
    local.send(address, val);
}

function cuelist_swop (id, val) {
    var address = "/cuelist/"+id+"/swop";
    local.send(address, val);
}

function cuelist_loadandgo (id, cueNum) {
    var cueAdd = cueNum < 0 ? "" : "/"+cueNum;
    var address = "/cuelist/"+id+"/loadandgo"+cueAdd;
    local.send(address);
}

function cuelist_loadrandom (id) {
    var address = "/cuelist/"+id+"/loadrandom";
    local.send(address);
}

function cuelist_htpLevel (id, level) {
    var address = "/cuelist/"+id+"/htpLevel";
    local.send(address, level);
}

function cuelist_ltplevel (id, level) {
    var address = "/cuelist/"+id+"/ltplevel";
    local.send(address, level);
}

function cuelist_flashLevel (id, level) {
    var address = "/cuelist/"+id+"/flashLevel";
    local.send(address, level);
}

function cuelist_chaserspeed (id, level) {
    var address = "/cuelist/"+id+"/chaserspeed";
    local.send(address, level);
}

function cuelist_taptempo (id) {
    var address = "/cuelist/"+id+"/taptempo";
    local.send(address);
}

function effect_start (id) {
    var address = "/effect/"+id+"/start";
    local.send(address);
}

function effect_stop (id) {
    var address = "/effect/"+id+"/stop";
    local.send(address);
}

function effect_speed (id, level) {
    var address = "/effect/"+id+"/speed";
    local.send(address, level);
}

function effect_size (id, level) {
    var address = "/effect/"+id+"/size";
    local.send(address, level);
}

function effect_taptempo (id) {
    var address = "/effect/"+id+"/taptempo";
    local.send(address);
}

function carousel_start (id) {
    var address = "/carousel/"+id+"/start";
    local.send(address);
}

function carousel_stop (id) {
    var address = "/carousel/"+id+"/stop";
    local.send(address);
}

function carousel_speed (id, level) {
    var address = "/carousel/"+id+"/speed";
    local.send(address, level);
}

function carousel_size (id, level) {
    var address = "/carousel/"+id+"/size";
    local.send(address, level);
}

function carousel_taptempo (id) {
    var address = "/carousel/"+id+"/taptempo";
    local.send(address);
}

function bundle_start (id) {
    var address = "/bundle/"+id+"/start";
    local.send(address);
}

function bundle_stop (id) {
    var address = "/bundle/"+id+"/stop";
    local.send(address);
}

function bundle_speed (id, level) {
    var address = "/bundle/"+id+"/speed";
    local.send(address, level);
}

function bundle_size (id, level, size, HTP, LTP, flash ) {
    var address = "/bundle/"+id+"/size";
    local.send(address, level, size, HTP, LTP, flash);
}

function bundle_taptempo (id) {
    var address = "/bundle/"+id+"/taptempo";
    local.send(address);
}

function virtualButton (page, col, row, pressed) {
    var address = "/virtbutton/"+page+"/"+col+"/"+row+"/";
    local.send(address, pressed);
}

function virtualAbove (page, col, row, pressed) {
    var address = "/virtabove/"+page+"/"+col+"/"+row+"/";
    local.send(address, pressed);
}

function virtualBelow (page, col, row, pressed) {
    var address = "/virtbelow/"+page+"/"+col+"/"+row+"/";
    local.send(address, pressed);
}

function virtualRotary (page, col, row, val) {
    var address = "/virtrotary/"+page+"/"+col+"/"+row+"/";
    local.send(address, val);
}

function virtualFader (page, col, val) {
    var address = "/virtfader/"+page+"/"+col+"/";
    local.send(address, val);
}

