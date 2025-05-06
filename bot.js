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
    return document.client['Nq']
}

function getTiles() {
    var s = getScene();
    if (s !== null) {
        return s['rd'];
    }
    return null;
}

function tileLocCount(tile) {
    return tile['tz']
}

function tileLocTypecode(tile, i) {
    return tile['tu'][i]['tk']
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

function ground_items(i, j) {
    var ll = document.client['Up'][currentLevel()][i][j];
    if (ll == null) {
        return [];
    }
    var sentinel = ll['q']; 
    var cur = sentinel['next']
    var result = [];
    while (cur !== sentinel) {
        result.push({'id':cur['lL'], "count":cur['le']})
        cur = cur['next']
    }
    return result;
}

function groundHeight(x, z) {
    var level = currentLevel();        
    var heightmap = document.client['Hf'];
    var tile_flags = document.client['He'];
    let x_tile = Math.min(x >> 7, 103),
        z_tile = Math.min(z >> 7, 103);
    if (level < 3 && tile_flags && (tile_flags[1][x_tile][z_tile] & 2) === 2) {
        level = level + 1;
    }
    let x_fine = x & 127,
        z_fine = z & 127,
        y_avg_l = heightmap[level][x_tile][z_tile] * (128 - x_fine) + heightmap[level][x_tile + 1][z_tile] * x_fine >> 7,
        y_avg_r = heightmap[level][x_tile][z_tile + 1] * (128 - x_fine) + heightmap[level][x_tile + 1][z_tile + 1] * x_fine >> 7;
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

    let x_off = x - document.client['nw'],
        y_off = y - document.client['n2'],
        z_off = z - document.client['no'],
        sin_pitch = document.sincos_cls['oy'][cameraPitch()],
        cos_pitch = document.sincos_cls['Y3'][cameraPitch()],
        sin_yaw = document.sincos_cls['oy'][cameraYaw()],
        cos_yaw = document.sincos_cls['Y3'][cameraYaw()],
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

    let [x_char, z_char] = myPos(),
        zoom = (document.client['vp'] + 256)/256,
        x_mm = 4 * zoom * (global_x - x_char),
        z_mm = 4 * zoom * (global_z - z_char),
        sin_yaw = -document.sincos_cls['oy'][minimapYaw()],
        cos_yaw = document.sincos_cls['Y3'][minimapYaw()];
      
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

function startMouseEcho() {
    canvas.addEventListener("mousemove", (event) => {
        const rect = canvas.getBoundingClientRect();
        console.log(Math.floor(event.clientX - rect.left), event.clientY - rect.top, event);
    });
    
    canvas.addEventListener("mouseup", (event) => {
        const rect = canvas.getBoundingClientRect();
        console.log(Math.floor(event.clientX - rect.left), event.clientY - rect.top, event);
    });
    
    canvas.addEventListener("mousedown", (event) => {
        const rect = canvas.getBoundingClientRect();
        console.log('mousedown',Math.floor(event.clientX - rect.left), event.clientY - rect.top);
    });
    
    canvas.addEventListener("keydown", (event) => {
        console.log(event);
    })
    canvas.addEventListener("keyup", (event) => {
        console.log(event);
    })
}


function dumpNPCs() {
    console.log('NPCs');
    for (var i = 0; i < totalNPCs(); i++) {
        var npc = getNPC(i);
        if (npc != null) {
            console.log(npcName(npc), entityX(npc), entityZ(npc), npc);
        }
    }
}

function dumpItems() {
    console.log('Items');
    for (var i = 0; i < 104; i++) {
        for (var j = 0; j < 104; j++) {
            item_list = ground_items(i,j);
            if (item_list.length > 0) {
                console.log(i,j,item_list);
            }
        }
    }
}

function dumpObjects() {
    findObjects(0, true, null, 1, true);
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
    var x = (i << 7) + 64,
        z = (j << 7) + 64, 
        y = groundHeight(x, z) + height * 128;
    return project_ms(x, y, z);
}

function entityToMS(entity, height=0.0) {
    var x = entityX(entity);
    var z = entityZ(entity);
    var y = groundHeight(x, z) + height * 128;
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
            for (const item of ground_items(i, j)) {
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
                    console.log(i,j,k,type,localToGlobal(i,j),tile);
                }
                if (types.has(type)) {
                    var p = [i*128+64, j*128+64]
                    if (visible && localToMS(i, j) == null) continue;
                    if (nearby !== null && e2tDist(player(), i, j) > nearby) continue;
                    locs.push([i, j]);
                }
            }
        }
    }
    return locs;
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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
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
        key: key,
        code: code,
        shiftKey: shift
    }));
}

async function releaseKey(key, code=null, shift=false) {
    if (code === null) {
        code = defaultCode(key);
    }
    canvas.dispatchEvent(new KeyboardEvent("keyup", {
        key: key,
        code: code,
        shiftKey: shift
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

async function clickAlong(pos, path, direction) {
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
    //console.log('Closest', inext, 'INext', inext);
    if (iclose+1 >= dists.length && dclose < 3) {
        await sleep(1500);
        return true;
    } else {
        await clickMM(pnext);
        await sleep(2500);
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
    }
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
    }
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
    for (var i = 0; i < 28 && !STOP; i++) {
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

async function handleRandoms(killWeakDanger=false) {
    // Does not handle skill-specific randoms

    // run random direction from dangerous randoms
    // would be better w/ pathing checks
    var dangerRandoms = findNPCs(/Shade|Swarm|Zombie|Rock.*Golem/i);
    for (var npc of dangerRandoms) {
        if (afterMe(npc)) {    
            if (killWeakDanger && npcName(npc).match(/Swarm/)) {
                console.log('Killing', npcName(npc));
                for (var i = 0; i < 5 && afterMe(npc); i++) {
                    console.log('...');
                    await clickEntity(npc, height=0.5);
                    await sleep(2000);
                }
            } else {
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
                console.log('Running', safe_route);
                for (var i = 0; i < 5 && !await clickAlong(myPos(), safe_route, true); i++) await sleep(1000);
                await sleep(5000);
                console.log('Returning');
                for (var i = 0; i < 5 && !await clickAlong(myPos(), safe_route, false); i++) await sleep(1000);
                console.log('Returned');
            }
        }
    }
    // interact with safe randoms if they're meant for you
    var safeRandoms = findNPCs(/Strange.*Plant|Drunken Dwarf|Genie|Mysterious Old Man/i);
    for (var npc of safeRandoms) {
        console.log('Found', npcName(npc));
        for (var i = 0; i < 5; i++) {
            if (npcName(npc) === null || npcName(npc) == "") break;
            if (afterMe(npc) || npcName(npc).match(/Strange.*Plant/i)) {
                console.log('Solving', npcName(npc));
                await clickEntity(npc, height=0.5);
                await sleep(2000);
            } else {
                break;
            }
        }
    }
    var lamp = invFind(2529);
    if (lamp !== null) {
        console.log('Opening lamp');
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
var PICKAXE_HEADS = [481,483,485,487,489,491];
async function handleLostHead() {
    // pickup dropped pickaxe heads
    if ((await pickupItems(PICKAXE_HEADS)) || invFind(PICKAXE_HEADS) !== null) { 
        console.log('Found droped pickaxe head');
        if (heldItem() == 467) {
            await unequip();
        }
        await openTab(TAB_INVENTORY);
        var head = invFind(PICKAXE_HEADS),
            handle = invFind(467);
        if (head !== null && handle !== null) {
            console.log('Repairing and re-equiping');
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


var STOP = false;
  
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
var SMELT_ORES = [['Iron',441,28,1]];

async function faladorWestSmelter() {
    var ingredients = SMELT_ORES.map(([name,type,count,min]) => type);
    while (true) {
        if (STOP) return;
        if (!await login()) {
            console.log('Can\'t login; bailing out!');
            return;
        }
        await handleRandoms();
        
        var free = freeSlots(),
            [x, z] = myPos(),
            tobank = !SMELT_ORES.every(([name,type,count,min]) => countItem(type) >= min);
        if (tobank || x < 2973) { 
            console.log('Walking to',tobank?'bank':'furnace','...');
            if (await clickAlong([x,z], falador_smelter_west_bank_path, tobank)) {
                console.log('Arrived');
                if (tobank) {
                    var booth = chooseRandom(falador_west_bank_booths);
                    console.log('Booth', booth);
                    await clickMM(booth);
                    await sleep(500);
                    await clickMS(globalToLocal(booth),null,1.0,2);
                    await sleep(500);
                    if (await clickOption(/.*Use-quickly.*/i)) {
                        await sleep(4000);
                        await depositAll();
                        for (var [itype,icount] of SMELT_ORES.map(([name,type,count,min]) => [type,count])) {      
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
                    continue;
                }
            } else {
                continue;
            }
        }
        
        if (z >= 3377) { // outside the door
            await clickMS(globalToLocal(2971,3376.5),null,1.0,2);
            await sleep(500);
            if (await clickOption(/Open.*/i)) {
                console.log('Opened the door!');
            }
            await sleep(750);
        }
        if (dist([2974, 3369],myPos()) > 2) { //walk to smelter
            console.log('Headed to smelter...');
            await clickMM([2974, 3369]);
            await waitForFlag();
            continue
        }
        
        //smelt
        await openTab(TAB_INVENTORY);
        var comp = invFind(ingredients);
        if (comp === null) continue;
        await clickInv(comp);
        await sleep(500);
        await clickMS(globalToLocal(2976, 3369),null,1.0,1);
        await waitForAnim(5);
        if (myAnim() != 899) continue;
        for (var _ = 0; _ < 5 && myAnim() == 899; _++) { 
            await sleep(500);
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

var SMOKING_ROCKS = [2119,2120,2121,2122,2123,2124,2125,2126,2127,2128,2129,2130,2131,2132,2133,2134,2135,2136,2137,2138,2139,2140];

async function varrockEastMiner() {
    while (true) {
        if (STOP) return;
        if (!await login()) {
            console.log('Can\'t login; bailing out!');
            return;
        }
        await handleRandoms();
        
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
                if (tobank) {
                    var booth = chooseRandom(varrock_east_bank_booths);
                    //console.log('Booth', booth);
                    await clickMM(booth);
                    await sleep(3000);
                    await clickMS(globalToLocal(booth),null,1.0,2);
                    await sleep(500);
                    if (await clickOption(/.*Use-quickly.*/i)) {
                        await sleep(2000);
                        await depositAll(new Set(PICKAXES));
                        await clickMM(myPos());
                        await sleep(1000);
                        await runOn();
                    }
                    continue;
                }
            } else {
                continue;
            }
        }
        //console.log('Iron', iron,  'Copper', copper, 'Tin', tin, 'Free', free);
        
        await handleLostHead();
            
        var toFind = [2092, 2093]; //iron
        var objs = findObjects(toFind);
        if (objs.length == 0) {
            toFind = tin > copper ? [2090, 2091] : [2094, 2095]; // copper or tin backup
            console.log('No iron');
            objs = findObjects(toFind)
        }
        if (objs.length == 0) {
            await clickMM(varrock_east_bank_mine_path[varrock_east_bank_mine_path.length-1])
            continue
        }
        var mine = chooseClosest(globalToLocal([x,z]), objs, nrand=1.1);
        
        if (mine !== null) {
            var [gx,gz] = localToGlobal(mine);
            
            await clickMS(mine);
            
            var anim;
            for (var i = 0; i < 7; i++) {
                anim = entityAnim(player());
                if (anim == 625) break;
                await sleep(500);
            }
            if (anim != 625) continue;
            await openTab(TAB_INVENTORY);
            
            //console.log('Mining');
            for (var i = 0; i < 30; i++) {
                if (entityAnim(player()) != 625) break;
                if (isObjectAt(gx,gz,SMOKING_ROCKS)) {
                    console.log('Smoking rocks!');
                    await clickMM(myPos());
                    await sleep(2000);
                }
                if (!isObjectAt(gx,gz,toFind)) break;
                //console.log('...');
                await sleep(500);
            }
        }  
    }   
}

async function buryBones() {
    await sleep(500);
    for (var i = 0; i < 28; i++) {
        while (invItem(i) == 527) { // BONES
            await openTab(TAB_INVENTORY);
            await sleep(500);
            await clickInv(i);
            await sleep(1000);
        }
        await handleRandoms();
    }
}

async function chickenKiller() {
    while (true) {
        if (STOP) return;
        if (! await login()) {
            console.log('Can\'t login; bailing out!');
            return;
        }
        await handleRandoms();
        
        if (freeSlots() < 1) {
            await buryBones()
        } else {
            await pickupItems([526,314], /Take.*(Bones|Feathers).*/i); // Bones & Feathers
        }
        
        var chickens = findNPCs(/Chicken/);
        if (chickens.length < 1) {
            await sleep(1000);
            continue;
        }
        
        var dinner = chooseRandom(chickens);
        await clickEntity(dinner);
        
        var target;
        for (var i = 0; i < 10; i++) {
            target = entityTargetID(player());
            if (target != -1) break;
            await sleep(500);
        }
        if (target == -1) continue;
        console.log('Murdering', target);
        for (var i = 0; i < 30; i++) {
            if (entityTargetID(player()) != target) break;
            console.log('...');
            await sleep(500);
        }
        await sleep(500);
        
    }
}

faladorWestSmelter().then(() => { console.log("Done") });
