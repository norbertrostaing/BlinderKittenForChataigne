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

function cuelist_flash (id) {
    var address = "/cuelist/"+id+"/flash";
    local.send(address);
}

function cuelist_swop (id) {
    var address = "/cuelist/"+id+"/swop";
    local.send(address);
}

function cuelist_loadandgo (id) {
    var address = "/cuelist/"+id+"/loadandgo";
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

function effect_speed (id) {
    var address = "/effect/"+id+"/speed";
    local.send(address);
}

function effect_size (id) {
    var address = "/effect/"+id+"/size";
    local.send(address);
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

function carousel_speed (id) {
    var address = "/carousel/"+id+"/speed";
    local.send(address);
}

function carousel_size (id) {
    var address = "/carousel/"+id+"/size";
    local.send(address);
}

function carousel_taptempo (id) {
    var address = "/carousel/"+id+"/taptempo";
    local.send(address);
}

