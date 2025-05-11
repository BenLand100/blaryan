/****
Entity info
****/

function player() {
    return document.client['UC'];
}
function playerID() {
    return document.client['UB'];
}
function entityX(entity) {
    return entity['x'];
}
function entityZ(entity) {
    return entity['z'];
}
function entityPos(entity) {
    return [entityX(entity), entityZ(entity)]
}
function entityTargetID(entity) {
    return entity['Pv'];
}
function entityAnim(entity) {
    return entity['PA'];
}

/** Following comes from this common usage of ['nM']
for (let i = 0x0; i < this['U3']; i++) {
    let j = this['nM'][this['nW'][i]];
**/
function totalNPCs() {
    return document.client['U3'];
}
function getNPC(i) {
    return document.client['nM'][document.client['nW'][i]];
}
function npcByID(npc_id) {
    return document.client['nM'][npc_id];
}
function npcName(npc) {
    return npc['pT'] === null ? '' : npc['pT']['name'];
}

function afterMe(npc) {
    return entityTargetID(npc) - 32768 == playerID();
}


/****
Render Info
****/

function getScene() {
    return document.client['Nq'];
}

function viewportInterfaceID() {
    return document.client['mO'];
}

function getTiles() {
    var s = getScene();
    if (s !== null) {
        return s['rd'];
    }
    return null;
}

function tileLocCount(tile) {
    return tile !== null ? tile['tz'] : null;
}

function tileLocTypecode(tile, i) {
    return tile !== null ? tile['tu'][i]['tk'] : null;
}

function tileLocPos(tile,i) {
    return tile !== null ? [tile['tu'][i]['x'], tile['tu'][i]['y'], tile['tu'][i]['z']] : null;
}

function tileWallTypecode(tile) {
    return tile !== null ? (tile['tC'] === null ? null : tile['tC']['tk']) : null;
}

/****
World Info
****/

function ingame() {
    return document.client['YO'];
}

function flagVisible() {
    return document.client['v0'] != 0;
}

function baseX() {
    return document.client['Nk'];
}

function baseZ() {
    return document.client['va'];
}

function myPos() {
    return localToGlobal(entityToLocal(player()))
}

function myAnim() {
    return entityAnim(player());
}

function currentLevel() {
    return document.client['v1']
}

function groundItems(i, j) {
    var ll = document.client['Up'][currentLevel()][i][j];
    if (ll == null) {
        return [];
    }
    var sentinel = ll['q'];
    var cur = sentinel['next']
    var result = [];
    while (cur !== sentinel) {
        result.push({'id':cur['lL']+1, "count":cur['le']})
        cur = cur['next']
    }
    return result;
}

function groundHeight(x, z) {
    var level = currentLevel();
    var heightmap = document.client['Hf'];
    var tile_flags = document.client['He'];
    let x_tile = Math.min(x >> 7, 103), z_tile = Math.min(z >> 7, 103);
    if (level < 3 && tile_flags && (tile_flags[1][x_tile][z_tile] & 2) === 2) {
        level = level + 1;
    }
    let x_fine = x & 127, z_fine = z & 127, y_avg_l = heightmap[level][x_tile][z_tile] * (128 - x_fine) + heightmap[level][x_tile + 1][z_tile] * x_fine >> 7, y_avg_r = heightmap[level][x_tile][z_tile + 1] * (128 - x_fine) + heightmap[level][x_tile + 1][z_tile + 1] * x_fine >> 7;
    return y_avg_l * (128 - z_fine) + y_avg_r * z_fine >> 7;
}

function cameraPitch() {
    return document.client['Ns'];
}

function cameraYaw() {
    return document.client['vZ'];
}

function minimapYaw() {
    return (cameraYaw() + document.client['vI']) & 2047;
}

function project_ms(x, y, z) { //local coords!

    let x_off = x - document.client['nw'], y_off = y - document.client['n2'], z_off = z - document.client['no'], sin_pitch = document.sincos_cls['oy'][cameraPitch()], cos_pitch = document.sincos_cls['Y3'][cameraPitch()], sin_yaw = document.sincos_cls['oy'][cameraYaw()], cos_yaw = document.sincos_cls['Y3'][cameraYaw()],
      tmp = z_off * sin_yaw + x_off * cos_yaw >> 16;
    z_off = z_off * cos_yaw - x_off * sin_yaw >> 16;
    x_off = tmp;
      tmp = y_off * cos_pitch - z_off * sin_pitch >> 16;
    z_off = y_off * sin_pitch + z_off * cos_pitch >> 16;
    y_off = tmp;

    if (z_off >= 0x32) {
        x = document.sincos_cls['YY'] + ((x_off << 0x9) / z_off | 0x0) + 8,
        y = document.sincos_cls['Y5'] + ((y_off << 0x9) / z_off | 0x0) + 10
        if (x > 8 && y > 10 && x < 517 && y < 345) {
            return [x, y];
        }
    }
    return null;
}

function project_mm(global_x, global_z) { //global coords!

    let [x_char, z_char] = myPos(), zoom = (document.client['vp'] + 256)/256, x_mm = 4 * zoom * (global_x - x_char), z_mm = 4 * zoom * (global_z - z_char), sin_yaw = -document.sincos_cls['oy'][minimapYaw()], cos_yaw = document.sincos_cls['Y3'][minimapYaw()];

    if (Math.sqrt(x_mm*x_mm + z_mm*z_mm) > 70) { //TODO validate
        return null;
    } else {
        return [
            (x_mm * cos_yaw - z_mm * sin_yaw >> 16) + 656,
            (-x_mm * sin_yaw - z_mm * cos_yaw >> 16) + 89
        ];
    }
}

/****
Interface Info
****/
var TAB_COMBAT = 0,
    TAB_STATS = 1,
    TAB_INVENTORY = 3,
    TAB_EQUIPMENT = 4,
    TAB_RUN = 12;

function currentTab() {
    return document.client['fz'];
}

function getInterface(iface_id) {
    return document.iface_cls['EI'][iface_id];
}

function heldItem(idx) {
    var inv_iface = getInterface(1688);
    return inv_iface['he'][3]
}

function bankItem(idx) {
    var inv_iface = getInterface(5382);
    return inv_iface['he'][idx]
}

function bankCount(idx) {
    var inv_iface = getInterface(5382);
    return inv_iface['hs'][idx]
}

function bankFind(items) {
    if (Number.isInteger(items)) {
        items = new Set([items]);
    } else {
        items = new Set(items);
    }
    var inv_iface = getInterface(5382);
    for (var i = 0; i < 48; i++) {
        if (items.has(inv_iface['he'][i])) {
            return i;
        }
    }
    return null;
}

function invItem(x, y = null) {
    /**
    //Turns out, interface IDs are static, this is 3214
    var iface_id = document.client['fT'][TAB_INVENTORY];
    var root = getInterface(iface_id);
    var children = root['hm'];
    for (var i = 0; i < children.length; i++) {
        iface_id = children[i]
        iface = getInterface(iface_id)
        if (iface['he']) {
            console.log(i,iface_id, iface);
        }
    }
    **/
    var inv_iface = getInterface(3214);
    var idx = y === null ? x : x + 4*y;
    return inv_iface['he'][idx]
}

function invCount(x, y = null) {
    var inv_iface = getInterface(3214);
    var idx = y === null ? x : x + 4*y;
    return inv_iface['hs'][idx]
}

function invFind(items) {
    if (Number.isInteger(items)) {
        items = new Set([items]);
    } else {
        items = new Set(items);
    }
    var inv_iface = getInterface(3214);
    for (var i = 0; i < 28; i++) {
        if (items.has(inv_iface['he'][i])) {
            return i;
        }
    }
    return null;
}

function countItems() {
    var total = 0;
    var inv_iface = getInterface(3214);
    for (var i = 0; i < 28; i++) {
        total = total + inv_iface['hs'][i];
    }
    return total;
}

function countItem(item_type) {
    var total = 0;
    var inv_iface = getInterface(3214);
    for (var i = 0; i < 28; i++) {
        if (inv_iface['he'][i] == item_type) {
            total = total + inv_iface['hs'][i];
        }
    }
    return total;
}

function freeSlots() {
    var free = 28;
    var inv_iface = getInterface(3214);
    for (var i = 0; i < 28; i++) {
        if (inv_iface['he'][i] > 0) {
            free = free - 1;
        }
    }
    return free;
}

function menuVisible() {
    return document.client['mS'];
}


function menuOption(i) {
    return document.client['fr'][i];
}

function findOption(pattern) {
    if (!menuVisible()) return null;
    const len = document.client['fZ'];
    for (var i = 0; i < len; i++) {
        if (menuOption(i).match(pattern)) {
            var x_off, y_off, menuArea = document.client['f3'];
            if (menuArea === 0) x_off = 8, y_off = 11;
            if (menuArea === 1) x_off = 562,  y_off = 231;
            if (menuArea === 2) x_off = 22,  y_off = 375;
            return [
                x_off + document.client['mJ'] + document.client['f5'] / 2,
                y_off + document.client['f7'] + (len - i) * 15 + 31 - 13
            ]
        }
    }
    return null;
}

/************************
HELPERS
************************/

function log(...args) {
    console.log(new Date().toUTCString(),...args);
}

var VERBOSE = 0;

function startEventDebug() {
    VERBOSE = 1;
    
    canvas.addEventListener("mousemove", (event) => {
        if (VERBOSE > 3) {
            const rect = canvas.getBoundingClientRect();
            console.log(Math.floor(event.clientX - rect.left), event.clientY - rect.top, event);
        }
    });

    canvas.addEventListener("mouseup", (event) => {
        if (VERBOSE > 3) {
            const rect = canvas.getBoundingClientRect();
            console.log(Math.floor(event.clientX - rect.left), event.clientY - rect.top, event);
        }
    });

    canvas.addEventListener("mousedown", (event) => {
        if (VERBOSE > 0 && VERBOSE <= 3) {
            const rect = canvas.getBoundingClientRect();
            console.log('mousedown',Math.floor(event.clientX - rect.left), event.clientY - rect.top);
        }
        if (VERBOSE > 3) {
            const rect = canvas.getBoundingClientRect();
            console.log(Math.floor(event.clientX - rect.left), event.clientY - rect.top, event);
        }
    });

    canvas.addEventListener("keydown", (event) => {
        if (VERBOSE > 1) {
            console.log(event);
        }
    })
    canvas.addEventListener("keyup", (event) => {
        if (VERBOSE > 2) {
            console.log(event);
        }
    })
}


function dumpNPCs() {
    log('NPCs');
    for (var i = 0; i < totalNPCs(); i++) {
        var npc = getNPC(i);
        if (npc != null) {
            log(npcName(npc), entityX(npc), entityZ(npc), npc);
        }
    }
}

function dumpItems() {
    log('Items');
    for (var i = 0; i < 104; i++) {
        for (var j = 0; j < 104; j++) {
            item_list = groundItems(i,j);
            if (item_list.length > 0) {
                log(localToGlobal(i,j),item_list);
            }
        }
    }
}

function dumpObjects() {
    findObjects(0, true, null, 1, true);
}

function dumpWalls() {
    findWalls(0, true, null, 1, true);
}

function entityToLocal(entity) {
    var pos = entityPos(entity);
    if (pos === null) return pos;
    return [Math.floor(pos[0] / 128), Math.floor(pos[1] / 128)];
}

function localToGlobal(x, z = null) {
    if (z == null) {
        z = x[1];
        x = x[0];
    }
    return [x + baseX(), z + baseZ()];
}

function globalToLocal(X, Z = null) {
    if (Z == null) {
        Z = X[1];
        X = X[0];
    }
    return [X - baseX(), Z - baseZ()];
}

function localToMS(i, j=null, height=0.0) {
    if (j == null) {
        j = i[1];
        i = i[0];
    }
    var x = (i * 128) + 64, z = (j * 128) + 64,
        y = groundHeight(x, z) - height * 128;
    return project_ms(x, y, z);
}

function entityToMS(entity, height=0.0) {
    var x = entityX(entity);
    var z = entityZ(entity);
    var y = groundHeight(x, z) - height * 128;
    return project_ms(x,y,z);
}

function e2eDist(a, b) {
    return Math.sqrt(Math.pow(entityX(a) - entityX(b), 2.0) + Math.pow(entityZ(a) - entityZ(b), 2.0)) / 128;
}

function e2tDist(a, i, j = null) {
    if (z == null) {
        j = i[1];
        i = i[0];
    }
    return Math.sqrt(Math.pow(entityX(a) - i*128 - 64, 2.0) + Math.pow(entityZ(a) - j*128 - 64, 2.0)) / 128;
}

function findNPCs(pattern, visible=true, nearby=null) {
    var npcs = [];
    for (var i = 0; i < totalNPCs(); i++) {
        var npc = getNPC(i);
        if (npc != null && npcName(npc).match(pattern)) {
            if (visible && entityToMS(npc) == null) continue;
            if (nearby !== null && e2eDist(player(),npc) > nearby) continue;
            npcs.push(npc)
        }
    }
    return npcs;
}

function findItems(items, visible=true, nearby=null, delta=20) {
    if (Number.isInteger(items)) {
        items = new Set([items]);
    } else {
        items = new Set(items);
    }
    var locs = [];
    var [x,z] = entityToLocal(player());
    for (var i = Math.max(x-delta,0); i < Math.min(x+delta+1,104); i++) {
        for (var j = Math.max(z-delta,0); j < Math.min(z+delta+1,104); j++) {
            for (const item of groundItems(i, j)) {
                if (items.has(item['id'])) {
                    var p = [i*128+64, j*128+64]
                    if (visible && localToMS(i, j) == null) continue;
                    locs.push([i, j]);
                }
            }
        }
    }
    return locs;
}

function isObjectAt(global_x, global_z, types) {
    var [i,j] = globalToLocal(global_x, global_z);
    if (i < 0 || j < 0 || i > 103 || j > 103) return false;
    if (Number.isInteger(types)) {
        types = new Set([types]);
    } else {
        types = new Set(types);
    }
    var tile = getTiles()[currentLevel()][i][j];
    for (var k = 0; k < tileLocCount(tile); k++) {
        var type = (tileLocTypecode(tile,k) >> 14) & 32767;
        if (types.has(type)) {
            return true;
        }
    }
    return false;
}

function isWallAt(global_x, global_z, types) {
    var [i,j] = globalToLocal(global_x, global_z);
    if (i < 0 || j < 0 || i > 103 || j > 103) return false;
    if (Number.isInteger(types)) {
        types = new Set([types]);
    } else {
        types = new Set(types);
    }
    var tile = getTiles()[currentLevel()][i][j];
    var type = (tileWallTypecode(tile) >> 14) & 32767;
    return types.has(type);
}

function findObjects(types, visible=true, nearby=null, delta=20, verbose=false) {
    if (Number.isInteger(types)) {
        types = new Set([types]);
    } else {
        types = new Set(types);
    }
    var locs = [];
    var [x,z] = entityToLocal(player());
    var tiles = getTiles()[currentLevel()];
    for (var i = Math.max(x-delta,0); i < Math.min(x+delta+1,104); i++) {
        for (var j = Math.max(z-delta,0); j < Math.min(z+delta+1,104); j++) {
            var tile = tiles[i][j];
            for (var k = 0; k < tileLocCount(tile); k++) {
                var type = (tileLocTypecode(tile,k) >> 14) & 32767;
                //these may also be interesting
                /*
                 b = E & 127,
                 G = E >> 7 & 127,
                 N = E >> 29 & 3
                */
                if (verbose) {
                    log(localToGlobal(i,j),type,tile);
                }
                if (types.has(type)) {
                    if (visible && localToMS(i, j) == null) continue;
                    if (nearby !== null && e2tDist(player(), i, j) > nearby) continue;
                    locs.push([i, j]);
                }
            }
        }
    }
    return locs;
}

function findWalls(types, visible=false, nearby=null, delta=20, verbose=false) {
    if (Number.isInteger(types)) {
        types = new Set([types]);
    } else {
        types = new Set(types);
    }
    var walls = [];
    var [x,z] = entityToLocal(player());
    var tiles = getTiles()[currentLevel()];
    for (var i = Math.max(x-delta,0); i < Math.min(x+delta+1,104); i++) {
        for (var j = Math.max(z-delta,0); j < Math.min(z+delta+1,104); j++) {
            var tile = tiles[i][j];
            var type = (tileWallTypecode(tile) >> 14) & 32767;
            if (verbose) {
                log(localToGlobal(i,j), type, tile);
            }
            if (types.has(type)) {
                if (visible && localToMS(i, j) == null) continue;
                if (nearby !== null && e2tDist(player(), i, j) > nearby) continue;
                walls.push([i, j]);
            }
        }
    }
    return walls;
}

function shuffle(array) {
  let currentIndex = array.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
}

function dist(a, b) {
    return Math.sqrt((a[0]-b[0])*(a[0]-b[0]) + (a[1]-b[1])*(a[1]-b[1]));
}

function nthClosest(ref_pos, possible_pos, n) {
    var arr = [...possible_pos];
    shuffle(arr);
    const sortedArr = arr.sort((a, b) => dist(ref_pos, a) - dist(ref_pos, b));
    return sortedArr[n - 1];
}

function chooseClosest(ref_pos, possible_pos, nrand=1.1) {
    if (possible_pos.length == 0) return null;
    var nth = Math.min(Math.floor(1.0 + Math.random()*nrand), possible_pos.length);
    return nthClosest(ref_pos, possible_pos, nth);
}

function chooseRandom(choices, n = 1) {
    if (n == 1) {
        return choices[Math.floor(Math.random() * choices.length)];
    } else {
        choices = Array.from(choices);
        shuffle(choices);
        return choices.slice(0,Math.min(choices.length,n))
    }
}

/************************
ROUTINES
************************/

function sleep(ms, exact=false) {
  return new Promise(resolve => setTimeout(resolve, exact ? ms : Math.floor(ms + Math.random()*Math.sqrt(ms))));
}

MOUSE_NONE = 0
MOUSE_LEFT = 1
MOUSE_RIGHT = 2

async function mouse(x, y, button = 0, delay=100) {
  const rect = canvas.getBoundingClientRect();
  canvas.dispatchEvent(new MouseEvent('mousemove', {
    'clientX': x + rect.left,
    'clientY': y + rect.top
  }));
  await sleep(delay);
  if (button > 0) {
    canvas.dispatchEvent(new MouseEvent('mousedown', {
      'clientX': x + rect.left,
      'clientY': y + rect.top,
      'button': button == 2 ? 2 : 0,
      'buttons': button == 2 ? 2 : 1,
      'which': button == 2 ? 3 : 1
    }));
    await sleep(delay);
    canvas.dispatchEvent(new MouseEvent('mouseup', {
      'clientX': x + rect.left,
      'clientY': y + rect.top,
      'button': button == 2 ? 2 : 0,
      'buttons': 0,
      'which': button == 2 ? 3 : 1
    }));
  }
}

function defaultCode(key) {
    if (key.match(/Arrow.*/)) {
        return key;
    } else if (key.match(/Shift/)) {
        return "ShiftRight";
    } else if (key == 'Enter') {
        return 'Enter';
    } else {
        return "Key" + key.toUpperCase()
    }
}

async function holdKey(key, code=null, shift=false) {
    if (code === null) {
        code = defaultCode(key);
    }
    canvas.dispatchEvent(new KeyboardEvent("keydown", {
        key: key, code: code, shiftKey: shift
    }));
}

async function releaseKey(key, code=null, shift=false) {
    if (code === null) {
        code = defaultCode(key);
    }
    canvas.dispatchEvent(new KeyboardEvent("keyup", {
        key: key, code: code, shiftKey: shift
    }));
}

async function typetext(text, delay=75) { // TODO: implement
    var shiftDown = false;
    for (var i = 0; i < text.length; i++) {
        var c = text[i];
        if (c.match(/[\!\@\#\$\%\^\&\*\(\)\_\+\{\}\|\:\"\<\>\?\~]|[A-Z]/)) {
            if (!shiftDown) {
                shiftDown = true;
                await holdKey('Shift', shift=shiftDown);
                await sleep(delay);
            }
        } else {
            if (shiftDown) {
                shiftDown = false;
                await releaseKey('Shift', shift=shiftDown);
                await sleep(delay);
            }
        }
        await holdKey(c, shift=shiftDown);
        await sleep(delay);
        await releaseKey(c, shift=shiftDown);
        await sleep(delay);
    }
    if (shiftDown) {
        await releaseKey('Shift');
        await sleep(delay);
    }
}

async function enter() {
    await holdKey('Enter');
    await sleep(75);
    await releaseKey('Enter');
    await sleep(75);
}

async function waitForAnim(cycles=5) {
    await sleep(500);
    for (var _ = 0; _ < cycles && myAnim() == -1; _++) await sleep(500);
}

async function waitForIdle(cycles=30) {
    await sleep(500);
    for (var _ = 0; _ < cycles && myAnim() != -1; _++) await sleep(500);
}

async function waitForFlag(cycles=30) {
    await sleep(500);
    for (var _ = 0; _ < cycles && flagVisible(); _++) await sleep(500);
}

async function openTab(tab) {
    if (tab == currentTab()) {
        return;
    }

    if (tab == TAB_COMBAT) { // Combat
        await mouse(566,211,1);
    } else if (tab == TAB_STATS) { // Stats
        await mouse(594,211,1);
    } else if (tab == 2) { // Quests
        await mouse(620,211,1);
    } else if (tab == TAB_INVENTORY) { // Inventory
        await mouse(658,211,1);
    } else if (tab == TAB_EQUIPMENT) { // Inventory
        await mouse(690,211,1);
    } else if (tab == TAB_RUN) { // Run
        await mouse(722,511,1);
    }
}

async function runOn() {
    await openTab(TAB_RUN);
    await sleep(500);
    await mouse(630,292,1);
    await sleep(500);
}

async function logout() {
    if (!ingame()) return true;
    await mouse(657, 509, 1);
    await sleep(500);
    await mouse(638, 396, 1);
    await sleep(1000);
    return !ingame();
}

async function login(username=null, password=null) {
    if (ingame()) return true;
    if (username === null) {
        username = USERNAME;
        password = PASSWORD;
    }
    await mouse(472, 338, 1);
    await sleep(500);
    await mouse(474, 308, 1);
    await sleep(500);
    await mouse(382, 268, 1);
    await sleep(500);
    await typetext(username);
    await sleep(500);
    await mouse(382, 285, 1);
    await sleep(500);
    await typetext(password);
    await sleep(500);
    await mouse(331, 335, 1);
    await sleep(500);
    for (var i = 0; i < 5 && !ingame(); i++) {
        await sleep(1000);
    }
    if (ingame()) {
        await sleep(1500);
        await mouse(457, 97, 1);
        await sleep(500);
        await holdKey('ArrowUp')
        await sleep(4000);
        await releaseKey('ArrowUp')
        await sleep(500);
        return true
    }
    return false;
}

async function clickMM(global_x, global_z=null, button=1, rand=2) {
    if (global_z === null) {
        global_z = global_x[1];
        global_x = global_x[0];
    }
    var pos = project_mm(global_x, global_z);
    if (pos !== null) {
        await mouse(pos[0]+rand*Math.random()-rand/2, pos[1]+rand*Math.random()-rand/2, button);
    }
}

async function clickAlong(pos, path, direction=true) {
    var dists = path.map(x => { return dist(pos, x) });
    if (!direction) dists.reverse();

    /*
    //this tried to click the point after the closest point
    var iclose = 0, dclose = dists[0];
    for (var i = 1; i < dists.length; i++) {
        if (dists[i] < d) {
            iclose = i;
            dclose = dists[i];
        }
    }
    var inext = Math.min(iclose+1, dists.length-1);
    */

    var inext = 0, iclose = 0, dclose = dists[0];
    for (var i = 1; i < dists.length; i++) {
        if (dists[i] < dclose) {
            dclose = dists[i];
            iclose = i;
        }
        if (dists[i] < 16) {
            inext = i;
        }
    }

    var pnext = direction ? path[inext] : path[path.length-1-inext];
    //log('Closest', inext, 'INext', inext);
    if (iclose+1 >= dists.length && dclose < 3) {
        await waitForFlag();
        return true;
    } else {
        await clickMM(pnext);
        await sleep(2000);
        return false;
    }
}

async function clickMS(x, z=null, height=0.0, button=1, rand=3) {
    if (z === null) {
        z = x[1];
        x = x[0];
    }
    var pos = localToMS(x,z,height=height)
    if (pos !== null) {
        await mouse(pos[0]+rand*Math.random()-rand/2, pos[1]+rand*Math.random()-rand/2, button);
        return true;
    }
    return false;
}

async function clickInv(i, j=null, button=1, rand=4) {
    if (j === null) {
        j = Math.floor(i / 4);
        i = i % 4;
    }
    await mouse(592 + i*40 +rand*Math.random()-rand/2, 254 + j*35 +rand*Math.random()-rand/2, button);
}

async function clickBank(i, j=null, button=1, rand=4) {
    if (j === null) {
        j = Math.floor(i / 8);
        i = i % 8;
    }
    await mouse(95 + i*47 +rand*Math.random()-rand/2, 85 + j*38 +rand*Math.random()-rand/2, button);
}

async function clickEntity(entity, height=0.0, button=1) {
    const pos = entityToMS(entity,height=height);
    if (pos !== null) {
        await mouse(pos[0], pos[1], button);
        return true;
    }
    return false;
}

async function clickOption(pattern, button=1) {
    const loc = findOption(pattern);
    if (loc !== null) {
        await mouse(loc[0],loc[1], button)
        return true;
    } else {
        return false;
    }
}

async function pickupItems(items,name_pattern=/Take.*/i) {
    var set = new Set(items);
    for (var n = 0; n < 5 && freeSlots() > 0; n++) {
        var locs = findItems(set);
        if (locs.length < 1) break;

        var p = chooseRandom(locs)
        var xy = localToMS(p);

        if (xy !== null) {
            await mouse(xy[0], xy[1], 2);
            await sleep(400);
            var tot = countItems();
            if (await clickOption(name_pattern)) {
                for (var i = 0; i < 20 && tot == countItems(); i++) {
                    await sleep(500);
                }
                return true;
            }
        }
    }
    return false;
}

async function unequip() {
    await openTab(TAB_EQUIPMENT);
    await sleep(1000);
    await mouse(600,329,1);
    await sleep(500);
}

async function depositAll(except = null) {
    for (var i = 0; i < 28 && !STOP && viewportInterfaceID() == 5292; i++) {
        if (invItem(i) > 0 && (except === null || !except.has(invItem(i)))) {
            await openTab(TAB_INVENTORY);
            await sleep(500);
            await clickInv(i,null,2);
            await sleep(1000);
            await clickOption(/Deposit.*All/i);
            await sleep(1000);
        }
    }
}

function now() {
    return new Date();
}

function timediff(a,b) {
    return Math.abs(a.getTime() - b.getTime())/1000;
}

async function randomEscape(npc) {
    var pos = myPos(),
        alpha = 2*3.14195*Math.random(),
        sin_alpha = Math.sin(alpha),
        cos_alpha = Math.cos(alpha),
        seg_dist = 8;
    var safe_route = [
        [pos[0] + sin_alpha*seg_dist*0, pos[1] + cos_alpha*seg_dist*0],
        [pos[0] + sin_alpha*seg_dist*1, pos[1] + cos_alpha*seg_dist*1],
        [pos[0] + sin_alpha*seg_dist*2, pos[1] + cos_alpha*seg_dist*2]
    ];
    log('Running from', npcName(npc), safe_route);
    for (var i = 0; i < 8 && !await clickAlong(myPos(), safe_route, true); i++) await sleep(750);
    await sleep(5000);
    log('Returning');
    for (var i = 0; i < 8 && !await clickAlong(myPos(), safe_route, false); i++) await sleep(750);
    log('Back to normal');
}

async function handleRandoms(escapeRoute=randomEscape, killWeakDanger=false) {
    // Does not handle skill-specific randoms
    var watch_time = timediff(now(), WATCHDOG);
    if (watch_time > 10*60) {
        await logout();
        throw new Error('WATCHDOG timer tripped. Exiting.');
    }

    if (viewportInterfaceID() == 5993) { // post-login window
        log('Clearing login prompt')
        await mouse(457, 97, 1);
        await sleep(500);
    }

    // run random direction from dangerous randoms
    // would be better w/ pathing checks
    var dangerRandoms = findNPCs(/Shade|Swarm|Zombie|Rock.*Golem|Strange.*Plant|Tree.*spirit/i);
    for (var npc of dangerRandoms) {
        if (afterMe(npc)) {
            if (killWeakDanger && npcName(npc).match(/Swarm/)) {
                log('Killing', npcName(npc));
                for (var i = 0; i < 5 && afterMe(npc); i++) {
                    log('...');
                    await clickEntity(npc, height=0.5);
                    await sleep(2000);
                }
            } else {
                await escapeRoute(npc);
            }
        }
    }
    // interact with safe randoms if they're meant for you
    var safeRandoms = findNPCs(/Strange.*Plant|Drunken Dwarf|Genie|Mysterious Old Man/i,false);
    for (var npc of safeRandoms) {
        log('Found', npcName(npc));
        for (var i = 0; i < 5; i++) {
            if (npcName(npc) === null || npcName(npc) == "") break;
            if (afterMe(npc) || npcName(npc).match(/Strange.*Plant/i)) {
                log('Solving', npcName(npc));
                if (!await clickEntity(npc, height=0.5)) {
                    await clickMM(localToGlobal(entityToLocal(npc)));
                    await waitForFlag();
                    await clickEntity(npc, height=0.5);
                }
                await sleep(2000);
            } else {
                break;
            }
        }
    }
    var lamp = invFind(2529);
    if (lamp !== null) {
        log('Opening lamp');
        await openTab(TAB_INVENTORY);
        await sleep(1000);
        await clickInv(lamp);
        await sleep(2000);
        await mouse(170,236,1);
        await sleep(1000);
        await mouse(265,266,1);
        await sleep(2000);
    }

}

var PICKAXES = [1266,1268,1270,1272,1274,1276];
var PICKAXE_HEADS = [479,481,483,485,487,489,491];
async function handleLostHead() {
    // pickup dropped pickaxe heads
    var head = findItems(PICKAXE_HEADS,false,null,35);
    if (head.length > 0) {
        await clickMM(localToGlobal(head[0]));
        await waitForFlag();
    }
    if ((await pickupItems(PICKAXE_HEADS)) || invFind(PICKAXE_HEADS) !== null) {
        log('Found dropped pickaxe head');
        if (heldItem() == 467) {
            await unequip();
        }
        await openTab(TAB_INVENTORY);
        var head = invFind(PICKAXE_HEADS),     handle = invFind(467);
        if (head !== null && handle !== null) {
            log('Repairing and re-equiping');
            await clickInv(handle, null, 2);
            await sleep(500);
            await clickOption(/Use.*/);
            await sleep(500);
            await clickInv(head);
            await sleep(1000);
            var pickaxe = invFind(PICKAXES);
            await clickInv(pickaxe); //equip it
            await sleep(500);
        }
    }
}

var HATCHETS = [1348,1350,1252,1354,1356,1358,1360];
var HATCHET_HEADS = [509,511,513,515,517,519,521];
async function handleLostHatchetHead() {
    // pickup dropped hatchet heads
    var head = findItems(HATCHET_HEADS,false,null,35);
    if (head.length > 0) {
        await clickMM(localToGlobal(head[0]));
        await waitForFlag();
    }
    if ((await pickupItems(HATCHET_HEADS)) || invFind(HATCHET_HEADS) !== null) {
        log('Found dropped hatchet head');
        if (heldItem() == 493) {
            await unequip();
        }
        await openTab(TAB_INVENTORY);
        var head = invFind(HATCHET_HEADS),     handle = invFind(493);
        if (head !== null && handle !== null) {
            log('Repairing and re-equiping');
            await clickInv(handle, null, 2);
            await sleep(500);
            await clickOption(/Use.*/);
            await sleep(500);
            await clickInv(head);
            await sleep(1000);
            var pickaxe = invFind(HATCHETS);
            await clickInv(pickaxe); //equip it
            await sleep(500);
        }
    }
}

async function handleLogout() {
    for (var i = 0; i < 10 && !ingame(); i++) await sleep(1000);
    if (!ingame()) {
        log('Timed out... logging back in.');
        await login();
    }
}

async function makePath() {
    var pos = myPos();
    var path = [pos];
    while (!STOP) {
        pos = myPos();
        if (dist(pos,path[path.length-1]) >= 7) {
            path.push(pos);
            console.log(path)
        }
        await sleep(250)
    }
    console.log('Final');
    console.log(path);
}

async function walkTowards(x,z=null) {
    if (z === null) {
        z = x[1];
        x = x[0];
    }
    var pos = myPos(), dx = x-pos[0], dz = z-pos[1], r = Math.sqrt(dx*dx+dz*dz), step = r < 12 ? 1 : (10+Math.random()*4)/r;
    var next_pos = [pos[0] + dx*step + (r > 4 ? Math.random()*2-1 : 0), pos[1] + dz*step + (r > 4 ? Math.random()*2-1 : 0)];
    await clickMM(next_pos);
    await waitForFlag();
}

var varrock_west_bank_booths = [
    [3186, 3436],
    [3186, 3438],
    [3186, 3440],
    [3186, 3442]
];

var HAMMER = 2348;
//var SMITH_BARS = [['Gold Bar',2358,27,1]];
//var SMITH_BARS = [['Mith Bar',2356,27,1]];
//var SMITH_BARS = [['Steel Bar',2354,27,1]];
var SMITH_BARS = [['Iron Bar',2352,27,5]];
//var SMITH_BARS = [['Bronze Bar',2350,27,1]];
var SMITH_ANVIL = [3188, 3425]
var SMITH_TARGET = [459, 143]; // arrowheads
var SMITH_TARGET = [260, 233];

async function varrockWestSmithing() {

    await handleLogout();
    await handleRandoms();
    
    var free = freeSlots(),
        [x, z] = myPos(),
        tobank = !SMITH_BARS.every(([name,type,count,min]) => countItem(type) >= min);
        
    if (tobank) {
        //log('Walking to',tobank?'bank':'forest','...');
        await walkTowards([3183, 3436]);
        if (dist(myPos(),[3183, 3436]) < 3) {
            //console.log(new Date().getTime(), 'Arrived');
            var booth = chooseClosest(myPos(),varrock_west_bank_booths);
            //console.log(new Date().getTime(),'Booth', booth);
            await clickMM(booth);
            await sleep(500);
            await clickMS(globalToLocal(booth),null,1.0,2);
            await sleep(500);
            if (await clickOption(/.*Use-quickly.*/i)) {
                //console.log(new Date().getTime(),'Used booth...');
                for (var _ = 0; _ < 10 && viewportInterfaceID() != 5292; _++) await sleep(500);
                if (viewportInterfaceID() != 5292) return;
                //console.log(new Date(S).getTime(),'In bank!');
                await sleep(500);
                await depositAll(new Set([HAMMER])); 
                for (var [itype,icount] of SMITH_BARS.map(([name,type,count,min]) => [type,count])) {
                    var bpos = await bankFind(itype);
                    if (bpos === null) {
                        break;
                    } else {
                        await clickBank(bpos,null,2);
                        await sleep(750);
                        if (await clickOption(/Withdraw X.*/i)) {
                            await sleep(1000);
                            await typetext(String(icount));
                            await enter();
                            await sleep(1000);
                        }
                    }
                }
                await clickMM(myPos());
                await sleep(1000);
                if (Math.random() < 0.2)  {
                    await runOn();
                    await openTab(TAB_INVENTORY);
                }
            }
            return;
        } else {
            return;
        }
    }
    
    if (dist(SMITH_ANVIL,myPos()) > 2) { //walk to anvil
        //console.log('Headed to anvil...');
        await walkTowards(SMITH_ANVIL);
        await waitForFlag();
        return;
    }

    //smith
    await openTab(TAB_INVENTORY);
    var comp = invFind(SMITH_BARS.map(([name,type,count,min]) => type));
    if (comp === null) return;
    await clickInv(comp);
    await sleep(500);
    await clickMS(globalToLocal(SMITH_ANVIL[0], SMITH_ANVIL[1] + (Math.random() > 0.375 ? 1 : -1)),null,0.1,1);
    for (var _ = 0; _ < 10 && viewportInterfaceID() != 994; _++) await sleep(500);
    if (viewportInterfaceID() != 994) return;
    await mouse(SMITH_TARGET[0],SMITH_TARGET[1],1)
    WATCHDOG = now();
    await waitForAnim();
    for (var _ = 0; _ < 5 && myAnim() == 898; _++) {
        await sleep(500);
    }
}

var HATCHET_ANIMS = {1352:879, 1350:877, 1354:875, 1362:873, 1356:871, 1358:869, 1358:867};

var CHOP_TREES = [1276, 1277, 1278, 1279]; // normal
//var CHOP_TREES = [1281]; // oak

async function varrockWestChopper() {

    await handleLogout();
    await handleRandoms();
    await handleLostHatchetHead();
    
    var ihatchet = invFind(HATCHETS);
    if (ihatchet !== null && !(new Set(HATCHETS).has(heldItem()))) {
        throw new Error('No hatchet!');
    }
    var hatchet_id = ihatchet !== null ? invItem(ihatchet) : heldItem(),
        chopping_anim = HATCHET_ANIMS[hatchet_id];

    var free = freeSlots(),
        [x, z] = myPos(),
        tobank = free == 0;
    if (tobank) {
        log('Walking to',tobank?'bank':'forest','...');
        await walkTowards([3183, 3436]);
        if (dist(myPos(),[3183, 3436]) < 3) {
            console.log(new Date().getTime(), 'Arrived');
            var booth = chooseClosest(myPos(),varrock_west_bank_booths);
            //console.log(new Date().getTime(),'Booth', booth);
            await clickMM(booth);
            await sleep(500);
            await clickMS(globalToLocal(booth),null,1.0,2);
            await sleep(500);
            if (await clickOption(/.*Use-quickly.*/i)) {
                console.log(new Date().getTime(),'Used booth...');
                for (var _ = 0; _ < 10 && viewportInterfaceID() != 5292; _++) await sleep(500);
                if (viewportInterfaceID() != 5292) return;
                //console.log(new Date().getTime(),'In bank!');
                await sleep(500);
                await depositAll();
                await clickMM(myPos());
                await sleep(1000);
                if (Math.random() < 0.2)  {
                    await runOn();
                    await openTab(TAB_INVENTORY);
                }
            }
            return;
        } else {
            return;
        }
    }
    log('Searching for trees');CHOP_TREES
    var trees = findObjects(CHOP_TREES,false,null,35).filter( pos => {
        var gpos = localToGlobal(pos); 
        return gpos[0] <= 3190 && gpos[1] <= 3432;
    });
    var barycenter = [(3183*1+x*4)/5, (3436*1+z*4)/5];
    if (trees.length == 0) {
        log('No trees!');
        await sleep(4000);
        return;
    } 
    var tree = chooseClosest(globalToLocal(barycenter), trees, 1.3),
        gtree = localToGlobal(tree);

    var tile =  getTiles()[currentLevel()][tree[0]][tree[1]],
        pos = tileLocPos(tile,0),
        fake_entity = {"x": pos[0]+128*Math.random()-64, "y": pos[1]+64+128*Math.random(), "z": pos[2]+128*Math.random()-64};
    if (entityToMS(fake_entity,1.0) === null) {
        log('Walking to tree', gtree);
        await walkTowards(gtree);
        await sleep(1500);
    } else {
        log('Chopping tree');
        await clickEntity(fake_entity,1.5,2);
        await sleep(300);
        if (await clickOption(/Chop.*/i)) {
            log('Hit tree', gtree);
            await waitForFlag();
            await waitForAnim(5);
            if (myAnim() != chopping_anim) return;
            for (var _ = 0; _ < 120 && myAnim() == chopping_anim; _++) {
                WATCHDOG = now();
                if (!isObjectAt(gtree[0],gtree[1],CHOP_TREES)) {
                    log('Found Ent!!!');
                    await clickMM(myPos());
                    break;
                }
                if (freeSlots() == 0) break;
                await handleLogout();
                await handleRandoms();
                await handleLostHatchetHead();
                await sleep(500);
            }
        } else {
            log('Missed tree', gtree);
            await sleep(500);
            await walkTowards(gtree);
            await waitForFlag();
        }
    }
}


async function draynorChopper() {

    await handleLogout();
    await handleRandoms();
    await handleLostHatchetHead()

    var free = freeSlots(),
        [x, z] = myPos(),
        tobank = free == 0;
    if (tobank) {
        log('Walking to',tobank?'bank':'forest','...');
        await walkTowards([3093, 3243]);
        if (dist(myPos(),[3093, 3243]) < 3) {
            //console.log(new Date().getTime(), 'Arrived');
            var booth = chooseClosest(myPos(),draynor_bank_booths);
            //console.log(new Date().getTime(),'Booth', booth);
            await clickMM(booth);
            await sleep(500);
            await clickMS(globalToLocal(booth),null,1.0,2);
            await sleep(500);
            if (await clickOption(/.*Use-quickly.*/i)) {
                //console.log(new Date().getTime(),'Used booth...');
                for (var _ = 0; _ < 10 && viewportInterfaceID() != 5292; _++) await sleep(500);
                if (viewportInterfaceID() != 5292) return;
                //console.log(new Date().getTime(),'In bank!');
                await sleep(500);
                await depositAll();
                await clickMM(myPos());
                await sleep(1000);
                if (Math.random() < 0.2)  {
                    await runOn();
                    await openTab(TAB_INVENTORY);
                }
            }
            return;
        } else {
            return;
        }
    }

    log('Searching for trees');
    var trees = findObjects([1279, 1278, 1276],false,null,35),
        barycenter = [(3093*3+x*1)/4, (3243*3+z*1)/4],
        tree = chooseClosest(globalToLocal(barycenter), trees, 1.2),
        gtree = localToGlobal(tree);

    var tile =  getTiles()[currentLevel()][tree[0]][tree[1]],
        pos = tileLocPos(tile,0),
        fake_entity = {"x": pos[0]+128*Math.random()-64, "y": pos[1]+64+128*Math.random(), "z": pos[2]+128*Math.random()-64};
    log(tree, localToGlobal(tree), entityToMS(fake_entity,1.0));
    if (entityToMS(fake_entity,1.0) === null) {
        log('Walking to tree', gtree);
        await walkTowards(gtree);
        await sleep(1500);
    } else {
        log('Chopping tree');
        await clickEntity(fake_entity,1.5,2);
        await sleep(750);
        if (await clickOption(/Chop.*/i)) {
            await waitForFlag();
            await waitForAnim(5);
            if (myAnim() != 879) return;
            WATCHDOG = now();
            for (var _ = 0; _ < 120 && myAnim() == 879; _++) {
                if (!isObjectAt(gtree[0],gtree[1],tree_ids)) {
                    log('Found Ent!!!');
                    await clickMM(myPos());
                    break;
                }
                if (freeSlots() == 0) break;
                await handleLogout();
                await handleRandoms();
                await handleLostHatchetHead();
                await sleep(500);
            }
        } else {
            //log('Missed tree', gtree);
            await sleep(500);
            await walkTowards(gtree);
            await waitForFlag();
        }
    }
}

var falador_smelter_west_bank_path = [
    [2971, 3377],
    [2964, 3379],
    [2956, 3381],
    [2950, 3377],
    [2946, 3371],
    [2946, 3369]
]

var falador_west_bank_booths = [
    [2945, 3367],
    [2946, 3367],
    [2947, 3367],
    [2948, 3367],
    [2949, 3367]
]

//var SMELT_ORES = [['Tin',439,14,1],['Copper',437,14,1]];
//var SMELT_ORES = [['Iron',441,28,1]];
var SMELT_ORES = [['Iron',441,9,1], ['Coal',454,18,2]];

async function faladorWestSmelter(ores=SMELT_ORES) {

    await handleLogout();
    await handleRandoms();

    var free = freeSlots(),
        [x, z] = myPos(),
        tobank = !ores.every(([name,type,count,min]) => countItem(type) >= min);
    if (tobank || x < 2973) {
        //console.log('Walking to',tobank?'bank':'furnace','...');
        if (await clickAlong([x,z], falador_smelter_west_bank_path, tobank)) {
            //console.log(new Date().getTime(), 'Arrived');
            if (tobank) {
                var booth = chooseClosest(myPos(),falador_west_bank_booths);
                //console.log(new Date().getTime(),'Booth', booth);
                await clickMM(booth);
                await sleep(500);
                await clickMS(globalToLocal(booth),null,1.0,2);
                await sleep(500);
                if (await clickOption(/.*Use-quickly.*/i)) {
                    //console.log(new Date().getTime(),'Used booth...');
                    for (var _ = 0; _ < 10 && viewportInterfaceID() != 5292; _++) await sleep(500);
                    if (viewportInterfaceID() != 5292) return;
                    //console.log(new Date().getTime(),'In bank!');
                    await sleep(500);
                    await depositAll();
                    for (var [itype,icount] of ores.map(([name,type,count,min]) => [type,count])) {
                        var bpos = await bankFind(itype);
                        if (bpos === null) {
                            break;
                        } else {
                            await clickBank(bpos,null,2);
                            await sleep(750);
                            if (await clickOption(/Withdraw X.*/i)) {
                                await sleep(1000);
                                await typetext(String(icount));
                                await enter();
                                await sleep(1000);
                            }
                        }
                    }
                    await clickMM(myPos());
                    await sleep(1000);
                    if (Math.random() < 0.2) await runOn();
                }
                return;
            }
        } else {
            return;
        }
    }

    if (z >= 3377 && !isWallAt(2971, 3376, 1531)) { // outside the door
        await clickMS(globalToLocal(2971,3376.5),null,1.0,2);
        await sleep(500);
        if (await clickOption(/Open.*/i)) {
            log('Opened the door!');
        }
        await sleep(750);
    }
    if (dist([2974, 3369],myPos()) > 2) { //walk to smelter
        //console.log('Headed to smelter...');
        await clickMM([2974, 3369]);
        await waitForFlag();
        return;
    }

    //smelt
    await openTab(TAB_INVENTORY);
    var comp = invFind(ores.map(([name,type,count,min]) => type));
    if (comp === null) return;
    await clickInv(comp);
    await sleep(500);
    await clickMS(globalToLocal(2976, 3369),null,1.0,1);
    await waitForAnim(5);
    if (myAnim() != 899) return;
    WATCHDOG = now();
    for (var _ = 0; _ < 5 && myAnim() == 899; _++) {
        await sleep(500);
    }
}

var falador_east_bank_deathwalk = [
    [3222,  3218],
    [3229,  3218],
    [3232,  3225],
    [3230,  3232],
    [3225,  3237],
    [3221,  3243],
    [3219,  3250],
    [3218,  3257],
    [3218,  3264],
    [3216,  3271],
    [3211,  3276],
    [3204,  3277],
    [3197,  3278],
    [3190,  3280],
    [3183,  3282],
    [3177,  3286],
    [3170,  3286],
    [3163,  3286],
    [3157,  3291],
    [3150,  3294],
    [3143,  3294],
    [3136,  3294],
    [3129,  3294],
    [3122,  3293],
    [3115,  3294],
    [3108,  3294],
    [3101,  3294],
    [3094,  3292],
    [3087,  3290],
    [3080,  3288],
    [3075,  3283],
    [3070,  3278],
    [3063,  3278],
    [3056,  3278],
    [3049,  3277],
    [3042,  3276],
    [3035,  3276],
    [3028,  3277],
    [3021,  3276],
    [3014,  3279],
    [3008,  3283],
    [3007,  3290],
    [3007,  3297],
    [3007,  3304],
    [3007,  3311],
    [3007,  3318],
    [3007,  3325],
    [3007,  3332],
    [3007,  3339],
    [3007,  3346],
    [3007,  3353],
    [3011,  3359]
];

var PICKAXE_ANIMS = {1266:625 , 1268:626, 1270:627, 1274:629, 1272:628, 1276:624};
var SMOKING_ROCKS = [2119,2120,2121,2122,2123,2124,2125,2126,2127,2128,2129,2130,2131,2132,2133,2134,2135,2136,2137,2138,2139,2140];

async function climbLadder(x,z,height=1.0) {
    if (dist([x, z],myPos()) < 4) {
        await clickMS(globalToLocal(x, z),null,height,2);
        await sleep(500);
        if (await clickOption(/.*Climb.*/i)) {
            await waitForFlag();
            await sleep(1000);
            return true;
        } else {
            mouse(Math.random()*500,Math.random()*400)
        }
    } else {
        await walkTowards(x,z);
    }
    return false;
}

var falador_east_to_mining_guild = [
    [3013, 3355],
    [3020, 3359],
    [3024, 3352],
    [3028, 3346],
    [3029, 3339],
    [3022, 3337]
]

var out_of_mining_guild = [
    [3046, 9748],
    [3042, 9742],
    [3035, 9740],
    [3028, 9740],
    [3021, 9739]
]

var falador_east_bank_booths = [
    [3011, 3354],
    [3012, 3354],
    [3013, 3354],
    [3014, 3354],
    [3015, 3354],
]

async function escapeMine(npc= null) {
    if (npc !== null) log('Escaping from',npcName(npc));
    var tries = 0;
    while (!STOP && (npc === null || (npcName(npc) !== null && npcName(npc).length > 0))) {
        var [x, z] = myPos();
        if (z < 5000) {
            await sleep(5000);
            return true;
        }
        if (await clickAlong([x,z], out_of_mining_guild, true)) {
            await climbLadder(3020, 9739, 1.0);
        }
        await sleep(1000);
        tries = tries + 1;
        if (tries > 30) return false;
    }
    log('Seems to be safe');
    return true;
}

async function miningGuildMiner() {
    var [x, z] = myPos();
    await handleLogout();
    await handleRandoms(z > 5000 ? escapeMine : randomEscape);
    
    var ipick = invFind(PICKAXES);
    if (ipick !== null && !(new Set(PICKAXES).has(heldItem()))) {
        throw new Error('No pickaxe!');
    }
    var pickaxe_id = ipick !== null ? invItem(ipick) : heldItem(),
        mining_anim = PICKAXE_ANIMS[pickaxe_id];

    var mith = countItem(448),
        coal = countItem(454),
        free = freeSlots(),
        [x, z] = myPos();
    if (free == 0 || z < 4000) {
        var tobank = free == 0;
        //console.log('Walking to',tobank?'bank':'mine','...');
        var path = z > 5000 ? out_of_mining_guild : falador_east_to_mining_guild;
        var dir = z > 5000 ? true : !tobank;
        if (await clickAlong([x,z], path, dir)) {
            //console.log('Arrived');
            if (z < 5000 && tobank) {
                var booth = chooseRandom(falador_east_bank_booths);
                //console.log('Booth', booth);
                await clickMM(booth);
                await sleep(3000);
                await clickMS(globalToLocal(booth),null,1.0,2);
                await sleep(500);
                if (await clickOption(/.*Use-quickly.*/i)) {
                    for (var _ = 0; _ < 10 && viewportInterfaceID() != 5292; _++) await sleep(500);
                    if (viewportInterfaceID() != 5292) return;
                    await depositAll(new Set(PICKAXES));
                    await clickMM(myPos());
                    await sleep(1000);
                    if (Math.random() < 0.2) await runOn();
                    await openTab(TAB_INVENTORY);
                }
                return;
            } else {
                if (z < 5000) {
                    await climbLadder(3020, 3339, 0.0);
                } else {
                    await climbLadder(3020, 9739, 1.0);
                }
                await sleep(300);
                return;
            }
        } else {
            return;
        }
    }

    await handleLostHead();

    var toFind = mith*6 < coal ? [2102, 2103] : [2096, 2097]; //mith
    var objs = findObjects(toFind,false,null,35);
    objs = objs.filter(pos => localToGlobal(pos)[1] < 9750);
    //log('mith:',objs.length);
    if (objs.length == 0) {
        toFind  = [2096, 2097]; //coal
        objs = findObjects(toFind,false,null,35)
        //log('coal:',objs.length);
    }
    if (objs.length == 0) {
        //log('No coal!');
        await sleep(1500);
        return;
    }
    var mine = chooseClosest(globalToLocal([x,z]), objs, nrand=1.1);
    //log('mining',mine);
    if (mine !== null) {

        if (localToMS(mine[0],mine[1]) === null) {
            //log('walking to rock');
            await walkTowards(localToGlobal(mine));
            await waitForFlag();
            return;
        }

        var [gx,gz] = localToGlobal(mine);

        await clickMS(mine, null, 0.05, 1, 10.0);
        await waitForFlag();
        await waitForAnim(5);
        if (myAnim() != mining_anim) return;

        WATCHDOG = now();
        await openTab(TAB_INVENTORY);

        //console.log('Mining');
        for (var i = 0; i < 60; i++) {
            if (myAnim() != mining_anim) break;
            if (isObjectAt(gx,gz,SMOKING_ROCKS)) {
                log('Smoking rocks!');
                var [x,z] = myPos()
                x = x + Math.random()*5-2.5;
                z = z + Math.random()*5-2.5;
                await clickMM(x,z);
                await waitForFlag();
                break;
            }
            if (!isObjectAt(gx,gz,toFind)) break;
            await handleRandoms(escapeMine);
            //log('...');
            await sleep(250);
        }

    }
}

var varrock_west_to_falador_west = [
    [3182, 3439],
    [3182, 3432],
    [3175, 3429],
    [3168, 3427],
    [3163, 3422],
    [3156, 3418],
    [3149, 3417],
    [3142, 3416],
    [3135, 3416],
    [3128, 3415],
    [3121, 3416],
    [3114, 3419],
    [3107, 3420],
    [3098, 3420],
    [3091, 3420],
    [3084, 3418],
    [3074, 3418],
    [3067, 3418],
    [3060, 3413],
    [3053, 3413],
    [3040, 3422],
    [3034, 3426],
    [3027, 3425],
    [3020, 3426],
    [3013, 3430],
    [3004, 3434],
    [2997, 3434],
    [2989, 3429],
    [2987, 3422],
    [2975, 3413],
    [2972, 3406],
    [2967, 3397],
    [2964, 3387],
    [2957, 3383],
    [2952, 3378],
    [2945, 3374]
]

var falador_west_to_falador_east = [
    [2946, 3369],
    [2950, 3375],
    [2956, 3379],
    [2963, 3379],
    [2970, 3379],
    [2977, 3379],
    [2984, 3376],
    [2990, 3372],
    [2996, 3367],
    [3003, 3365],
    [3010, 3361],
    [3014, 3355]
];

async function walkPath(path=varrock_west_to_falador_west, forwards=true) {
    await handleLogout();
    await handleRandoms();
    
    if (await clickAlong(myPos(), path, forwards)) {
        return true;
    }
    
    if (Math.random() < 0.05) {
        await runOn();
        await openTab(TAB_INVENTORY);
    }
    
    return false;
}


var draynor_bank_to_lumby_swamp_mine = [
    [3093, 3243],
    [3100, 3245],
    [3101, 3238],
    [3107, 3234],
    [3112, 3229],
    [3119, 3228],
    [3124, 3223],
    [3128, 3220],
    [3135, 3220],
    [3140, 3214],
    [3145, 3208],
    [3150, 3202],
    [3155, 3196],
    [3160, 3191],
    [3166, 3189],
    [3173, 3189],
    [3180, 3187],
    [3186, 3183],
    [3192, 3178],
    [3198, 3174],
    [3205, 3172],
    [3212, 3168],
    [3218, 3164],
    [3225, 3164],
    [3232, 3163],
    [3239, 3163]
]

var draynor_bank_booths = [
    [3091, 3442],
    [3091, 3243],
    [3091, 3245]
];

async function lumbySwampMiner() {
    await handleLogout();
    await handleRandoms();
    
    var ipick = invFind(PICKAXES);
    if (ipick !== null && !(new Set(PICKAXES).has(heldItem()))) {
        throw new Error('No pickaxe!');
    }
    var pickaxe_id = ipick !== null ? invItem(ipick) : heldItem(),
        mining_anim = PICKAXE_ANIMS[pickaxe_id];

    var mith = countItem(448),
        addy = countItem(450),
        coal = countItem(454),
        free = freeSlots(),
        [x, z] = myPos();
    if (free == 0 || x < 3232) {
        var tobank = free < 1;
        //console.log('Walking to',tobank?'bank':'mine','...');
        if (await clickAlong([x,z], draynor_bank_to_lumby_swamp_mine, !tobank)) {
            //console.log('Arrived');
            WATCHDOG = now();
            if (tobank) {
                var booth = chooseRandom(draynor_bank_booths);
                //console.log('Booth', booth);
                await clickMM(booth);
                await sleep(3000);
                await clickMS(globalToLocal(booth),null,1.0,2);
                await sleep(500);
                if (await clickOption(/.*Use-quickly.*/i)) {
                    for (var _ = 0; _ < 10 && viewportInterfaceID() != 5292; _++) await sleep(500);
                    if (viewportInterfaceID() != 5292) return;
                    await depositAll(new Set(PICKAXES));
                    await clickMM(myPos());
                    await sleep(1000);
                    if (Math.random() < 0.2) await runOn();
                    await openTab(TAB_INVENTORY);
                }
                return;
            }
        } else {
            return;
        }
    }
    //console.log('Iron', iron,  'Copper', copper, 'Tin', tin, 'Free', free);

    await handleLostHead();

    var toFind = [2102, 2103]; //mith
    var objs = findObjects(toFind,false,null,35);
    if (objs.length == 0) {
        toFind = toFind = [2096, 2097]; //coal
        objs = findObjects(toFind,false,null,35)
    }
    if (objs.length == 0) {
        toFind = toFind = [2096, 2097]; //coal
        objs = findObjects(toFind,false,null,35)
    }
    if (objs.length == 0) {
        //log('No coal!');
        await clickMM(draynor_bank_to_lumby_swamp_mine[draynor_bank_to_lumby_swamp_mine.length-1])
        return;
    }
    var mine = chooseClosest(globalToLocal([x,z]), objs, nrand=1.1);
    //log('mining',mine);
    if (mine !== null) {

        if (localToMS(mine[0],mine[1]) === null) {
            //log('walking to rock');
            await clickMM(localToGlobal(mine));
            await waitForFlag();
            return;
        }

        var [gx,gz] = localToGlobal(mine);

        await clickMS(mine, null, 0.05, 1, 10.0);
        await waitForFlag();
        await waitForAnim(5);
        if (myAnim() != mining_anim) return;

        WATCHDOG = now();
        await openTab(TAB_INVENTORY);

        //console.log('Mining');
        for (var i = 0; i < 60; i++) {
            if (myAnim() != mining_anim) break;
            if (isObjectAt(gx,gz,SMOKING_ROCKS)) {
                log('Smoking rocks!');
                var [x,z] = myPos()
                x = x + Math.random()*5-2.5;
                z = z + Math.random()*5-2.5;
                await clickMM(x,z);
                await waitForFlag();
                break;
            }
            if (!isObjectAt(gx,gz,toFind)) break;
            await handleRandoms();
            //log('...');
            await sleep(250);
        }

    }
}

var varrock_east_bank_mine_path = [
    [3254, 3421], //bank
    [3254, 3428],
    [3261, 3429],
    [3270, 3427],
    [3278, 3425],
    [3283, 3420],
    [3287, 3416],
    [3290, 3406],
    [3291, 3395],
    [3291, 3385],
    [3290, 3374],
    [3286, 3366] // mine
];

var varrock_east_bank_booths = [
    [3252, 3419],
    [3253, 3419],
    [3254, 3419]
];

async function varrockEastMiner() {
    await handleLogout();
    await handleRandoms();
    
    var ipick = invFind(PICKAXES);
    if (ipick !== null && !(new Set(PICKAXES).has(heldItem()))) {
        throw new Error('No pickaxe!');
    }
    var pickaxe_id = ipick !== null ? invItem(ipick) : heldItem(),
        mining_anim = PICKAXE_ANIMS[pickaxe_id];

    var tin = countItem(439),
        copper = countItem(437),
        iron = countItem(441),
        free = freeSlots(),
        [x, z] = myPos();
    if (free == 0 || z > 3370) {
        var tobank = free < 1;
        //console.log('Walking to',tobank?'bank':'mine','...');
        if (await clickAlong([x,z], varrock_east_bank_mine_path, !tobank)) {
            //console.log('Arrived');
            WATCHDOG = now();
            if (tobank) {
                var booth = chooseRandom(varrock_east_bank_booths);
                //console.log('Booth', booth);
                await clickMM(booth);
                await sleep(3000);
                await clickMS(globalToLocal(booth),null,1.0,2);
                await sleep(500);
                if (await clickOption(/.*Use-quickly.*/i)) {
                    for (var _ = 0; _ < 10 && viewportInterfaceID() != 5292; _++) await sleep(500);
                    if (viewportInterfaceID() != 5292) return;
                    await depositAll(new Set(PICKAXES));
                    await clickMM(myPos());
                    await sleep(1000);
                    if (Math.random() < 0.2) await runOn();
                    await openTab(TAB_INVENTORY);
                }
                return;
            }
        } else {
            return;
        }
    }
    //console.log('Iron', iron,  'Copper', copper, 'Tin', tin, 'Free', free);

    await handleLostHead();

    var toFind = [2092, 2093]; //iron
    var objs = findObjects(toFind);
    if (objs.length == 0) {
        toFind = tin > copper ? [2090, 2091] : [2094, 2095]; // copper or tin backup
        log('No iron');
        objs = findObjects(toFind)
    }
    if (objs.length == 0) {
        await clickMM(varrock_east_bank_mine_path[varrock_east_bank_mine_path.length-1])
        return;
    }
    var mine = chooseClosest(globalToLocal([x,z]), objs, nrand=1.1);

    if (mine !== null) {
        var [gx,gz] = localToGlobal(mine);

        await clickMS(mine, null, 0.05, 1, 10.0);
        await waitForFlag();
        await waitForAnim(5);
        if (myAnim() != mining_anim) return;

        WATCHDOG = now();
        await openTab(TAB_INVENTORY);

        console.log('Mining');
        for (var i = 0; i < 60; i++) {
            if (myAnim() != mining_anim) break;
            if (isObjectAt(gx,gz,SMOKING_ROCKS)) {
                log('Smoking rocks!');
                var [x,z] = myPos()
                x = x + Math.random()*5-2.5;
                z = z + Math.random()*5-2.5;
                await clickMM(x,z);
                await waitForFlag();
                break;
            }
            if (!isObjectAt(gx,gz,toFind)) break;
            await handleRandoms();
            //log('...');
            await sleep(250);
        }
    }
}

async function buryBones() {
    await sleep(500);
    for (var i = 0; i < 28 && !STOP; i++) {
        while (invItem(i) == 527 && !STOP) { // BONES
            await openTab(TAB_INVENTORY);
            await sleep(500);
            await clickInv(i);
            await sleep(250*Math.random());
        }
        await handleRandoms();
    }
}

async function chickenKiller() {
    await handleLogout();
    await handleRandoms();

    if (freeSlots() < 1) {
        await buryBones()
    } else {
        await pickupItems([526,314], /Take.*(Bones|Feathers).*/i); // Bones & Feathers
    }

    var chickens = findNPCs(/Chicken/);
    if (chickens.length < 1) {
        await sleep(1000);
        return;
    }

    var dinner = chooseRandom(chickens);
    await clickEntity(dinner);

    var target;
    for (var i = 0; i < 10; i++) {
        target = entityTargetID(player());
        if (target != -1) break;
        await sleep(500);
    }
    if (target == -1) return;
    WATCHDOG = now();
    log('Murdering', target);
    for (var i = 0; i < 30; i++) {
        if (entityTargetID(player()) != target) break;
        log('...');
        await sleep(500);
    }
    await sleep(500);
}

async function cowKiller() {

    await handleLogout();
    await handleRandoms();

    if (freeSlots() < 1) {
        //log('bury');
        await buryBones();
    } else {
        //log('collect');
        await pickupItems([527,315], /Take.*(Bones|Feathers).*/i); // Bones & Feathers
    }

    var mobs = findNPCs(/Cow/i);
    mobs.filter(m => entityTargetID(m) == -1);
    if (mobs.length < 1) {
        //log('going long');
        mobs = findNPCs(/Cow/i,false,50);
    }
    if (mobs.length < 1) {
        log('No mobs');
        await sleep(5000);
        return;
    }

    var target = chooseRandom(mobs);

    if (!await clickEntity(target,1.0)) {
        await walkTowards(localToGlobal(entityToLocal(target)));
        await waitForFlag();
        return;
    }

    for (var i = 0; i < 8; i++) {
        target = entityTargetID(player());
        if (target != -1) break;
        await sleep(250);
    }
    if (target == -1) return;

    WATCHDOG = now();
    //log('Murdering', target);
    for (var i = 0; i < 30; i++) {
        if (entityTargetID(player()) != target) {
            if (Math.random() < 0.05) {
                await runOn();
                await openTab(TAB_INVENTORY);
            }
            break;
        }
        //log('...');
        await handleRandoms();
        await sleep(500);
    }
    await sleep(500);

}


var KNIFE = 947,
    LOG = 1512, //regular
    //LOG = 1522, //oak
    SHAFT = 53,
    FEATHER = 315,
    HEADLESS = 54,
    BRONZE_HEAD = 40,
    IRON_HEAD = 41,
    FLETCH_TARGET = [101, 423]; // shaft
    //FLETCH_TARGET = [136, 419]; // shortbow
    //ETCH_TARGET = [375, 422]; // longbow
async function bankFletcher(action='CUT_LOGS') {

    await handleLogout();
    await handleRandoms();
    
    if (countItem(KNIFE) < 1) {
        throw new Error('No Knife!');
    }
    
    var logs = countItem(LOG),
        shafts = countItem(SHAFT),
        feathers = countItem(FEATHER),
        headless = countItem(HEADLESS),
        head = countItem(BRONZE_HEAD);
    
    var get_from_bank = [],
        keep_from_bank = [];
        
    if (action == 'CUT_LOGS') {
        if (logs == 0) {
            log('Out of logs');
            get_from_bank.push([LOG,28]);
            keep_from_bank.push(KNIFE)
        } else {
            log('Finding tools');
            var iknife = invFind(KNIFE),
                ilog = invFind(LOG);
            await sleep(500);
            if (iknife !== null && ilog !== null) {
                log('Fletching');
                await clickInv(iknife);
                await sleep(500);
                await clickInv(ilog);
                await sleep(750);
                await mouse(FLETCH_TARGET[0]+Math.random()*30-15,FLETCH_TARGET[1]+Math.random()*30-15,1);
                await sleep(750);
            }
            return;
        }
    } 
    
    var booth = chooseClosest(myPos(),varrock_west_bank_booths);
    await clickMS(globalToLocal(booth),null,1.0,2);
    await sleep(500);
    if (await clickOption(/.*Use-quickly.*/i)) {
        //console.log(new Date().getTime(),'Used booth...');
        for (var _ = 0; _ < 10 && viewportInterfaceID() != 5292; _++) await sleep(500);
        if (viewportInterfaceID() != 5292) return;
        //console.log(new Date(S).getTime(),'In bank!');
        await sleep(500);
        await depositAll(new Set(keep_from_bank)); 
        for (var [itype,icount] of get_from_bank) {
            var bpos = await bankFind(itype);
            if (bpos === null) {
                break;
            } else {
                await clickBank(bpos,null,2);
                await sleep(750);
                if (await clickOption(/Withdraw X.*/i)) {
                    await sleep(1000);
                    await typetext(String(icount));
                    await enter();
                    await sleep(1000);
                }
            }
        }
        await clickMM(myPos());
        await sleep(1000);
    }
    return;
}

async function simpleBuy(click=[],text=/Buy.*10.*/i) {
    await mouse(click[0] + Math.random()*16 - 8, click[1] + Math.random()*16 - 8,text !== null ? 2 : 1);
    await sleep(300);
    if (text !== null) {
        await clickOption(text);
        await sleep(400);
    }
}

var aubury_to_varrock_east = [
    [3253, 3401],
    [3253, 3398],
    [3260, 3405],
    [3262, 3414],
    [3262, 3421],
    [3261, 3426],
    [3254, 3426],
    [3254, 3420]
];

async function auburyEssenceMiner() {
    await handleLogout();
    await handleRandoms();
    await handleLostHead();
    
    var ipick = invFind(PICKAXES);
    if (ipick !== null && !(new Set(PICKAXES).has(heldItem()))) {
        throw new Error('No pickaxe!');
    }
    var pickaxe_id = ipick !== null ? invItem(ipick) : heldItem(),
        mining_anim = PICKAXE_ANIMS[pickaxe_id];
        
    var [x,z] = myPos(),
        auburyDist = dist([x,z],[3253, 3401]),
        tobank = freeSlots() == 0;
    
    if (auburyDist < 3) {
        // inside Aubury shop
        if (tobank) {
            if (!isWallAt(3253, 3399, 1531)) {
                await clickMS(globalToLocal(3253, 3398.5), null, 0.5, 2);
                await sleep(500);
                if (await clickOption(/Open.*/i)) {
                    log('Opened the door!');
                }
                await sleep(750);
            }
            await clickAlong([x,z], aubury_to_varrock_east, true);
            await sleep(1500);
        } else {
            await waitForFlag();
            var aubury = findNPCs(/Aubury/i);
            if (aubury.length != 1) throw Error('Cannot find Aubury!');
            aubury = aubury[0];
            await clickEntity(aubury,1.0,2);
            await sleep(1500);
            if (await clickOption(/Talk-to.*/i)) {
                await waitForFlag();
                await sleep(1500);
                await mouse(302, 463, 1);
                await sleep(1500);
                await mouse(258, 455, 1);
                await sleep(1500);
                await mouse(210, 464, 1);
                await sleep(5000);
            }
        }
        return;
    } else if (auburyDist < 100) {
        // in varrock
        if (await clickAlong([x,z], aubury_to_varrock_east, tobank)) {
            if (tobank) {
                var booth = chooseClosest(myPos(),varrock_east_bank_booths);
                await clickMS(globalToLocal(booth),null,1.0,2);
                await sleep(500);
                if (await clickOption(/.*Use-quickly.*/i)) {
                    //console.log(new Date().getTime(),'Used booth...');
                    for (var _ = 0; _ < 10 && viewportInterfaceID() != 5292; _++) await sleep(500);
                    if (viewportInterfaceID() != 5292) return;
                    //console.log(new Date(S).getTime(),'In bank!');
                    await sleep(500);
                    await depositAll(); 
                    await clickMM(myPos());
                    await sleep(1000);
                    if (Math.random() < 0.2)  {
                        await runOn();
                        await openTab(TAB_INVENTORY);
                    }
                }
            }
        } else if (auburyDist < 10) {
            if (!isWallAt(3253, 3399, 1531)) {
                await clickMS(globalToLocal(3253, 3398.5), null, 1.0, 2);
                await sleep(500);
                if (await clickOption(/Open.*/i)) {
                    log('Opened the door!');
                }
                await sleep(750);
            }
        }
        return;
    } else {
        // in essence mine
        if (tobank) {
            var portals = findObjects(2492,false,null,40),
                portal = chooseClosest(globalToLocal([x,y]),portals),
                gportal = localToGlobal(portal);
            if (await clickMS(portal, null, 0.1, 2)) {
                await sleep(500);
                if (await clickOption(/Use.*Portal/i)) {
                    await waitForFlag();
                    await sleep(3000);
                }
            } else {
                await walkTowards(gportal);
                await sleep(1500);
            }
        } else {
            var essence = findObjects(2491,false,null,40),
                mine = chooseClosest(globalToLocal([x,y]),essence),
                gmine = localToGlobal(mine);
                
            if (!await clickMS(mine, null, 1.5, 2)) {
                log('Walking to essence', gmine);
                await walkTowards(gmine[0]+10*Math.random()-5, gmine[1]+10*Math.random()-5);
                await sleep(1500);
            } else {
                await sleep(750);
                if (await clickOption(/Mine.*Rune.*Essence/)) {
                    await waitForFlag();
                    await waitForAnim(5);
                    if (myAnim() != mining_anim) return;
                    WATCHDOG = now();
                    for (var _ = 0; _ < 120 && myAnim() == mining_anim && freeSlots() > 0; _++) {
                        await handleRandoms();
                        await handleLostHead();
                        await sleep(500);
                    }
                }
            }
        }
        return;
    }
}


var STOP = false;
var WATCHDOG = now();

async function mainLoop() {
    WATCHDOG = now();
    log('Starting');
    await login()
    while (!STOP) {
        //await walkPath(varrock_west_to_falador_west,true);
        //await miningGuildMiner();
        //await simpleBuy([287,92]); //Mind Runes
        //await walkPath(falador_east_bank_deathwalk,false);
        //await cowKiller();
        //await faladorWestSmelter();
        await auburyEssenceMiner();
    }
}

mainLoop().then(() => { log("Done") });
