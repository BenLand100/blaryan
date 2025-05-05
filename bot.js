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

function baseX() {
    return document.client['Nk']; 
}

function baseZ() {
    return document.client['va']; 
}

function myPos() {
    return localToGlobal(entityToLocal(player()))
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
    return document.client['vm'];
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

    let [x_local, z_local] = globalToLocal(global_x, global_z),
        [xp_local, zp_local] = entityToLocal(player()),
        zoom = (document.client['vp'] + 256)/256,
        x_mm = 4 * zoom * (x_local - xp_local),
        z_mm = 4 * zoom * (z_local - zp_local),
        sin_yaw = document.sincos_cls['oy'][minimapYaw()],
        cos_yaw = document.sincos_cls['Y3'][minimapYaw()];
      
    if (Math.sqrt(x_mm*x_mm + z_mm*z_mm) > 75) { //TODO validate
        return null;
    } else {
        return [
            (x_mm * cos_yaw - z_mm * sin_yaw >> 16) + 656,
            -(x_mm * sin_yaw + z_mm * cos_yaw >> 16) + 89
        ];
    }
}

/****
Interface Info
****/
var TAB_COMBAT = 0,
    TAB_STATS = 1,
    TAB_INVENTORY = 3,
    TAB_RUN = 12;

function currentTab() {
    return document.client['fz'];
}

function openTab(tab) {
    if (tab == currentTab()) {
        return;
    }
    
    if (tab == TAB_COMBAT) { // Combat
        mouse(566,211,button=1);
    } else if (tab == TAB_STATS) { // Stats
        mouse(594,211,button=1);
    } else if (tab == 2) { // Quests
        mouse(620,211,button=1);
    } else if (tab == TAB_INVENTORY) { // Inventory
        mouse(658,211,button=1);
    } else if (tab == TAB_RUN) { // Run
        mouse(722,511,button=1);
    }
}

function getInterface(iface_id) {
    return document.iface_cls['EI'][iface_id];
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
        console.log(i,iface_id, iface);
    }
    **/
    var inv_iface = getInterface(3214)
    var idx = y === null ? x : x + 4*y;
    return inv_iface['he'][idx]
}

function invCount(x, y = null) {
    var inv_iface = getInterface(3214)
    var idx = y === null ? x : x + 4*y;
    return inv_iface['hs'][idx]
}

function countItems() {
    var total = 0;
    var inv_iface = getInterface(3214);
    for (var i = 0; i < 27; i++) {
        total = total + inv_iface['hs'][i];
    }
    return total;
}

function countItem(item_type) {
    var total = 0;
    var inv_iface = getInterface(3214);
    for (var i = 0; i < 27; i++) {
        if (inv_iface['he'][i] == item_type) {
            total = total + inv_iface['hs'][i];
        }
    }
    return total;
}

function freeSlots() {
    var free = 27;
    var inv_iface = getInterface(3214);
    for (var i = 0; i < 27; i++) {
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
            return [
                document.client['mJ'] + document.client['f5'] / 2,
                document.client['f7'] + (len - i) * 15 + 31 - 8
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
        console.log(Math.floor(event.clientX - rect.left), event.clientY - rect.top, event);
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
        types = new Set(types);
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

function findObjects(types, visible=true, nearby=null, delta=20) { //needs testing
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
                if (delta == 1) {
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

async function logout() {
    if (!ingame()) return true;
    await mouse(657, 509, button=1);
    await sleep(500);
    await mouse(638, 396, button=1);
    await sleep(1000);
    return !ingame();
}

async function login(username=null, password=null) {
    if (ingame()) return true;
    if (username === null) {
        username = USERNAME;
        password = PASSWORD;
    }
    await mouse(472, 338, button=1);
    await sleep(500);
    await mouse(474, 308, button=1);
    await sleep(500);
    await mouse(382, 268, button=1);
    await sleep(500);
    await typetext(username);
    await sleep(500);
    await mouse(382, 285, button=1);
    await sleep(500);
    await typetext(password);
    await sleep(500);
    await mouse(331, 335, button=1);
    await sleep(500);
    for (var i = 0; i < 5 && !ingame(); i++) {
        await sleep(1000);
    }
    if (ingame()) {
        await sleep(1500);
        await mouse(457, 97, button=1);
        await sleep(500);
        return true
    }
    return false;
}

async function clickMM(global_x, global_z=null, button=1) {
    if (global_z === null) {
        global_z = global_x[1];
        global_x = global_x[0];
    }
    var pos = project_mm(global_x, global_z) 
    clickMM
    if (pos !== null) {
        await mouse(pos[0], pos[1], button=button);
    }
}

async function clickMS(x, z=null, height=0.0, button=1) {
    if (z === null) {
        z = x[1];
        x = x[0];
    }
    var pos = localToMS(x,z,height=height)
    if (pos !== null) {
        await mouse(pos[0], pos[1], button=button);
    }
}

async function clickInv(i, j=null, button=1) {
    if (j === null) {
        j = Math.floor(i / 4);
        i = i % 4;
    }
    await mouse(592 + i*40, 254 + j*35, button=button);
}

async function clickEntity(entity, height=0.0, button=1) {
    const pos = entityToMS(entity,height=height);
    if (pos !== null) {
        await mouse(pos[0], pos[1], button=button);
    }
}

async function clickOption(pattern, button=1) {
    const loc = findOption(pattern);
    if (loc !== null) {
        await mouse(loc[0],loc[1], button=button)
        return true;
    } else {
        return false;
    }
}

async function handleRandoms(killWeakDanger=true) {
    var dangerRandoms = findNPCs(/Shade|Swarm|Zombie/i);
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
                await logout();
                throw new Error('Found', npcName(npc), 'run for your life!');
            }
        }
    }
    var safeRandoms = findNPCs(/Strange Plant|Drunken Dwarf|Genie|Mysterious Old Man/i);
    for (var npc of safeRandoms) {
        console.log('Found', npcName(npc));
        for (var i = 0; i < 5; i++) {
            if (afterMe(npc)) {
                console.log('Solving', npcName(npc));
                await clickEntity(npc, height=0.5);
                await sleep(2000);
            } else {
                break;
            }
        }
    }
}

var STOP = false;

function dist(a, b) {
    return Math.sqrt((a[0]-b[0])*(a[0]-b[0]) + (a[1]-b[1])*(a[1]-b[1]));
}

async function clickAlong(pos, path, direction) {
    var dists = path.map(x => { return dist(pos, x) });
    console.log(dists, path);
    if (!direction) dists.reverse();
    var id = 0, d = dists[0];
    for (var i = 1; i < dists.length; i++) {
        if (dists[i] < d) {
            id = i;
            d = dists[i];
        }
    }
    var inext = Math.min(id+1, dists.length-1);
    var pnext = direction ? path[inext] : path[path.length-1-inext];
    console.log('Cur', pos, 'INext', inext, 'Next', pnext);
    if (id+1 >= dists.length) {
        await sleep(1500);
        return true;
    } else {
        await clickMM(pnext);
        await sleep(3000);
        return false;
    }
}

var varrock_east_bank_mine = [
    [3254, 3421], //bank 
    [3254, 3428],
    [3261, 3429],
    [3274, 3429],
    [3284, 3427],
    [3287, 3416],
    [3290, 3406],
    [3291, 3395],
    [3291, 3385],
    [3290, 3374],
    [3286, 3366] // mine 
]

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
            free = freeSlots(),
            [x, z] = myPos();
        console.log(copper, tin, free);
        if (free < 1 || z > 3370) { 
            var tobank = free < 1;
            if (await clickAlong([x,z], varrock_east_bank_mine, !tobank)) {
                console.log('Arrived');
                if (tobank) {
                    console.log('Deposit everything');
                    continue;
                } 
            } else {
                console.log('Walking...');
                continue;
            }
        }
        var toFind = copper < tin ? [2090, 2091] : [2094, 2095];
        var objs = findObjects(toFind);
        var mine = chooseRandom(objs);
        if (mine !== null) {
            console.log('Mining', copper < tin ? 'copper' : 'tin', localToGlobal(mine));
            await clickMS(mine);
            for (var i = 0; i < 30; i++) {
                if (freeSlots() < free) break;
                console.log('...');
                await sleep(500);
            }
        }  
    }   
}

async function pickupItems() {
    for (var n = 0; n < 5 && freeSlots() > 0; n++) {
        var locs = findItems(new Set([526,314]));
        if (locs.length < 1) break;
        
        var p = chooseRandom(locs)
        var xy = localToMS(p);
        
        if (xy !== null) {
            await mouse(xy[0], xy[1], button=2);
            await sleep(400);
            var tot = countItems();
            if (await clickOption(/Take.*(Bones|Feather)/i)) {
                for (var i = 0; i < 20 && tot == countItems(); i++) {
                    await sleep(500);
                }
            }
        }
    }
}

async function buryBones() {
    await sleep(500);
    for (var i = 0; i < 28; i++) {
        while (invItem(i) == 527) { // BONES
            openTab(TAB_INVENTORY);
            await sleep(500);
            await clickInv(i);
            await sleep(1000);
        }
        handleRandoms();
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
            await pickupItems();
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

varrockEastMiner().then(() => { console.log("Done") });
