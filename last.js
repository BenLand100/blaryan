const uh = o5;
(function(bz, bj) {
    const uw = o5,
        ba = bz();
    while (!![]) {
        try {
            const bq = -parseInt(uw(0x154)) / 0x1 * (parseInt(uw(0x2a3)) / 0x2) + -parseInt(uw(0x1be)) / 0x3 + -parseInt(uw(0x204)) / 0x4 * (-parseInt(uw(0x194)) / 0x5) + -parseInt(uw(0x2c8)) / 0x6 * (-parseInt(uw(0x21d)) / 0x7) + parseInt(uw(0x28c)) / 0x8 * (-parseInt(uw(0x305)) / 0x9) + parseInt(uw(0x230)) / 0xa + -parseInt(uw(0x287)) / 0xb * (-parseInt(uw(0x13c)) / 0xc);
            if (bq === bj) break;
            else ba['push'](ba['shift']());
        } catch (bT) {
            ba['push'](ba['shift']());
        }
    }
}(o4, 0xebd33));
const bW = (function() {
        let bz = !![];
        return function(bj, ba) {
            const bq = bz ? function() {
                if (ba) {
                    const bT = ba['apply'](bj, arguments);
                    return ba = null, bT;
                }
            } : function() {};
            return bz = ![], bq;
        };
    }()),
    bS = bW(this, function() {
        const uR = o5;
        return bS['toString']()['search'](uR(0x242))['toString']()[uR(0x1f4)](bS)[uR(0x195)](uR(0x242));
    });
bS();
const bi = (function() {
        let bz = !![];
        return function(bj, ba) {
            const bq = bz ? function() {
                if (ba) {
                    const bT = ba['apply'](bj, arguments);
                    return ba = null, bT;
                }
            } : function() {};
            return bz = ![], bq;
        };
    }()),
    k0 = bi(this, function() {
        const ur = o5,
            bz = function() {
                const uc = o5;
                let xy;
                try {
                    xy = Function('return\x20(function()\x20' + uc(0x176) + ');')();
                } catch (xz) {
                    xy = window;
                }
                return xy;
            },
            bj = bz(),
            ba = new RegExp(ur(0x1b7), 'g'),
            bq = ur(0x257)[ur(0x1d0)](ba, '')[ur(0x243)](';');
        let bT, bI, bJ, bV;
        const xG = function(xy, xz, xj) {
                const uH = ur;
                if (xy[uH(0x2ea)] != xz) return ![];
                for (let xa = 0x0; xa < xz; xa++) {
                    for (let xq = 0x0; xq < xj[uH(0x2ea)]; xq += 0x2) {
                        if (xa == xj[xq] && xy[uH(0x158)](xa) != xj[xq + 0x1]) return ![];
                    }
                }
                return !![];
            },
            xg = function(xy, xz, xj) {
                return xG(xz, xj, xy);
            },
            xu = function(xy, xz, xj) {
                return xg(xz, xy, xj);
            },
            xM = function(xy, xz, xj) {
                return xu(xz, xj, xy);
            };
        for (let xy in bj) {
            if (xG(xy, 0x8, [0x7, 0x74, 0x5, 0x65, 0x3, 0x75, 0x0, 0x64])) {
                bT = xy;
                break;
            }
        }
        for (let xz in bj[bT]) {
            if (xM(0x6, xz, [0x5, 0x6e, 0x0, 0x64])) {
                bI = xz;
                break;
            }
        }
        for (let xj in bj[bT]) {
            if (xu(xj, [0x7, 0x6e, 0x0, 0x6c], 0x8)) {
                bJ = xj;
                break;
            }
        }
        if (!('~' > bI))
            for (let xa in bj[bT][bJ]) {
                if (xg([0x7, 0x65, 0x0, 0x68], xa, 0x8)) {
                    bV = xa;
                    break;
                }
            }
        if (!bT || !bj[bT]) return;
        const xF = bj[bT][bI],
            xO = !!bj[bT][bJ] && bj[bT][bJ][bV],
            xD = xF || xO;
        if (!xD) return;
        let xC = ![];
        for (let xq = 0x0; xq < bq[ur(0x2ea)]; xq++) {
            const xT = bq[xq],
                xI = xT[0x0] === String[ur(0x226)](0x2e) ? xT[ur(0x297)](0x1) : xT,
                xJ = xD[ur(0x2ea)] - xI[ur(0x2ea)],
                xV = xD[ur(0x269)](xI, xJ),
                xW = xV !== -0x1 && xV === xJ;
            xW && ((xD[ur(0x2ea)] == xT[ur(0x2ea)] || xT['indexOf']('.') === 0x0) && (xC = !![]));
        }
        if (!xC) {
            const xS = new RegExp(ur(0x143), 'g'),
                xi = ur(0x1fa)[ur(0x1d0)](xS, '');
            bj[bT][bJ] = xi;
        }
    });
k0();
class k1 {
    static['h'] = ['\x20', 'e', 't', 'a', 'o', 'i', 'h', 'n', 's', 'r', 'd', 'l', 'u', 'm', 'w', 'c', 'y', 'f', 'g', 'p', 'b', 'v', 'k', 'x', 'j', 'q', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '\x20', '!', '?', '.', ',', ':', ';', '(', ')', '-', '&', '*', '\x5c', '\x27', '@', '#', '+', '=', '£', '$', '%', '\x22', '[', ']'];
    static['i'] = [];
    static['j'](bz, bj) {
        const uP = o5;
        bj[uP(0x2ea)] > 0x50 && (bj = bj['substring'](0x0, 0x50)), bj = bj[uP(0x19a)]();
        let ba = -0x1;
        for (let bq = 0x0; bq < bj[uP(0x2ea)]; bq++) {
            let bT = bj[uP(0x18d)](bq),
                bI = 0x0;
            for (let bJ = 0x0; bJ < this['h'][uP(0x2ea)]; bJ++)
                if (bT === this['h'][bJ]) {
                    bI = bJ;
                    break;
                } bI > 0xc && (bI += 0xc3), -0x1 === ba ? bI < 0xd ? ba = bI : bz['k'](bI) : bI < 0xd ? (bz['k']((ba << 0x4) + bI), ba = -0x1) : (bz['k']((ba << 0x4) + (bI >> 0x4)), ba = 0xf & bI);
        } - 0x1 !== ba && bz['k'](ba << 0x4);
    }
    static['l'](bz, bj) {
        const up = o5;
        let ba, bq = 0x0,
            bT = -0x1;
        for (let bJ = 0x0; bJ < bj && bq < 0x64; bJ++) {
            let bV = bz['m']();
            ba = bV >> 0x4 & 0xf, -0x1 !== bT ? (this['i'][bq++] = this['h'][(bT << 0x4) + ba - 0xc3], bT = -0x1) : ba < 0xd ? this['i'][bq++] = this['h'][ba] : bT = ba, ba = 0xf & bV, -0x1 !== bT ? (this['i'][bq++] = this['h'][(bT << 0x4) + ba - 0xc3], bT = -0x1) : ba < 0xd ? this['i'][bq++] = this['h'][ba] : bT = ba;
        }
        let bI = !0x0;
        for (let xG = 0x0; xG < bq; xG++) {
            let xg = this['i'][xG];
            bI && xg >= 'a' && xg <= 'z' && (this['i'][xG] = xg[up(0x202)](), bI = !0x1), '.' !== xg && '!' !== xg || (bI = !0x0);
        }
        return this['i'][up(0x297)](0x0, bq)[up(0x1e1)]('');
    }
}
class k2 {
    [uh(0x302)] = null;
    [uh(0x322)] = 0x0n;
    ['o'] = null;
    ['p']() {
        const ul = uh;
        null != this['o'] && (this['o'][ul(0x302)] = this['next'], this['next'] && (this['next']['o'] = this['o']), this['next'] = null, this['o'] = null);
    }
}
class k3 {
    ['q'] = new k2();
    ['t'] = null;
    [uh(0x2aa)]() {
        const uK = uh;
        for (;;) {
            let bz = this['q'][uK(0x302)];
            if (bz === this['q']) return;
            bz?.['p']();
        }
    } ['o']() {
        let bz = this['t'];
        return bz === this['q'] ? (this['t'] = null, null) : (this['t'] = bz?.['o'] || null, bz);
    } [uh(0x302)]() {
        const uN = uh;
        let bz = this['t'];
        return bz === this['q'] ? (this['t'] = null, null) : (this['t'] = bz?.[uN(0x302)] || null, bz);
    } ['u']() {
        let bz = this['q']['o'];
        return bz === this['q'] ? (this['t'] = null, null) : (this['t'] = bz?.['o'] || null, bz);
    } [uh(0x32b)]() {
        const uv = uh;
        let bz = this['q'][uv(0x302)];
        return bz === this['q'] ? (this['t'] = null, null) : (this['t'] = bz?.['next'] || null, bz);
    } ['v']() {
        let bz = this['q']['next'];
        return bz === this['q'] ? null : (bz?.['p'](), bz);
    } ['A'](bz) {
        const un = uh;
        bz['o'] && bz['p'](), bz['o'] = this['q'], bz[un(0x302)] = this['q'][un(0x302)], bz['o'][un(0x302)] = bz, bz['next'] && (bz[un(0x302)]['o'] = bz);
    }
    constructor() {
        const uU = uh;
        this['q'][uU(0x302)] = this['q'], this['q']['o'] = this['q'];
    } ['B'](bz) {
        const um = uh;
        bz['o'] && bz['p'](), bz['o'] = this['q']['o'], bz[um(0x302)] = this['q'], bz['o'] && (bz['o'][um(0x302)] = bz), bz['next']['o'] = bz;
    }
}
class k4 extends k2 {
    ['C'] = null;
    ['D'] = null;
    ['F']() {
        null !== this['D'] && (this['D']['C'] = this['C'], this['C'] && (this['C']['D'] = this['D']), this['C'] = null, this['D'] = null);
    }
}
var k5 = async bz => new Promise(bj => setTimeout(bj, bz));

function k6(bz, bj, ba, bq, bT) {
    for (; bT--;) ba[bq++] = bz[bj++];
}
var k7 = async bz => new Uint8Array(await (await fetch(bz))[uh(0x20e)]());
class k8 extends k4 {
    static['G'] = 0x0;
    static['H'] = new k3();
    static['I'] = 0x0;
    static['J'] = 0xedb88320;
    static['K'] = 0x0;
    static['L'] = new k3();
    static['M'] = new k3();
    static['N'] = new Uint32Array(0x21);
    static['O'] = new Int32Array(0x100);
    static {
        for (let bz = 0x0; bz < 0x20; bz++) k8['N'][bz] = (0x1 << bz) - 0x1;
        k8['N'][0x20] = 0xffffffff;
        for (let bj = 0x0; bj < 0x100; bj++) {
            let ba = bj;
            for (let bq = 0x0; bq < 0x8; bq++) 0x1 & ~ba ? ba >>>= 0x1 : ba = ba >>> 0x1 ^ k8['J'];
            k8['O'][bj] = ba;
        }
    } ['P'];
    ['R'];
    ['S'] = 0x0;
    ['T'] = 0x0;
    ['U'] = null;
    ['V'](bz) {
        this['P']['setUint8'](this['S'] - bz - 0x1, bz);
    } ['W'](bz) {
        this['P']['setBigInt64'](this['S'], bz), this['S'] += 0x8;
    } ['X'](bz) {
        this['P']['setInt32'](this['S'], bz), this['S'] += 0x4;
    } ['Y'](bz, bj) {
        const uf = uh;
        let ba = this['S'];
        this['S'] = 0x0;
        let bq = new Uint8Array(ba);
        this[uf(0x2af)](ba, 0x0, bq);
        let bT = function(bV) {
                const uL = uf;
                let xG = 0x0n;
                for (let xg = 0x0; xg < bV[uL(0x2ea)]; xg++) xG = xG << 0x8n | BigInt(bV[xg]);
                return xG;
            }(bq),
            bI = function(bV, xG, xg) {
                let xu = 0x1n;
                for (; xG > 0x0n;) xG % 0x2n === 0x1n && (xu = xu * bV % xg), bV = bV * bV % xg, xG >>= 0x1n;
                return xu;
            }(bT, bj, bz),
            bJ = function(bV) {
                const ue = uf;
                let xG = [];
                for (; bV > 0x0n;) xG['unshift'](Number(0xffn & bV)), bV >>= 0x8n;
                return 0x80 & xG[0x0] && xG[ue(0x2fb)](0x0), new Uint8Array(xG);
            }(bI);
        this['S'] = 0x0, this['k'](bJ[uf(0x2ea)]), this['Z'](bJ, bJ[uf(0x2ea)], 0x0);
    } ['$'](bz) {
        const us = uh;
        let bj = this['T'] >>> 0x3,
            ba = 0x8 - (0x7 & this['T']),
            bq = 0x0;
        for (this['T'] += bz; bz > ba; ba = 0x8) bq += (this['P'][us(0x142)](bj++) & k8['N'][ba]) << bz - ba, bz -= ba;
        return bq += bz === ba ? this['P']['getUint8'](bj) & k8['N'][ba] : this['P']['getUint8'](bj) >>> ba - bz & k8['N'][bz], bq;
    } ['o6']() {
        this['S'] = this['T'] + 0x7 >>> 0x3;
    } ['m']() {
        const uA = uh;
        return this['P'][uA(0x142)](this['S']++);
    } ['_'](bz) {
        const ub = uh;
        this['P'][ub(0x2ec)](this['S'], bz, !0x0), this['S'] += 0x4;
    } ['o7']() {
        const uk = uh;
        let bz = this['P'][uk(0x142)](this['S']++) << 0x10 | this['P'][uk(0x15d)](this['S']);
        return this['S'] += 0x2, bz;
    } ['o8'](bz) {
        const uB = uh;
        this['P'][uB(0x28e)](this['S'], bz), this['S'] += 0x2;
    } ['o9']() {
        const uX = uh;
        let bz, bj = this['P'],
            ba = bj[uX(0x134)],
            bq = '';
        for (; 0xa !== (bz = bj[uX(0x142)](this['S']++)) && this['S'] < ba;) bq += String['fromCharCode'](bz);
        return bq;
    } ['oo']() {
        const ux = uh;
        return this['P'][ux(0x267)](this['S']++);
    } ['oQ']() {
        const uG = uh;
        return this['P'][uG(0x142)](this['S']) < 0x80 ? this['m']() - 0x40 : this['oZ']() - 0xc000;
    } ['oY'](bz) {
        const ug = uh;
        let bj = this['P'],
            ba = bz[ug(0x2ea)];
        for (let bq = 0x0; bq < ba; bq++) bj[ug(0x1e9)](this['S']++, bz[ug(0x158)](bq));
        bj[ug(0x1e9)](this['S']++, 0xa);
    } ['oE']() {
        const uu = uh;
        this['S'] = 0x0, 0x64 === this['P']['byteLength'] && k8['I'] < 0x3e8 ? (k8['L']['B'](this), k8['I']++) : 0x1388 === this['P'][uu(0x134)] && k8['G'] < 0xfa ? (k8['M']['B'](this), k8['G']++) : 0x7530 === this['P'][uu(0x134)] && k8['K'] < 0x32 && (k8['H']['B'](this), k8['K']++);
    } ['od']() {
        let bz = this['P']['getBigInt64'](this['S']);
        return this['S'] += 0x8, bz;
    } [uh(0x2af)](bz, bj, ba) {
        const uM = uh;
        ba[uM(0x20c)](this['R'][uM(0x27a)](this['S'], this['S'] + bz), bj), this['S'] += bz;
    } ['Z'](bz, bj, ba) {
        const uF = uh;
        this['R']['set'](bz[uF(0x27a)](ba, ba + bj), this['S']), this['S'] += bj - ba;
    }
    static['ow'](bz) {
        let bj = null;
        return 0x0 === bz && k8['I'] > 0x0 ? (k8['I']--, bj = k8['L']['v']()) : 0x1 === bz && k8['G'] > 0x0 ? (k8['G']--, bj = k8['M']['v']()) : 0x2 === bz && k8['K'] > 0x0 && (k8['K']--, bj = k8['H']['v']()), bj ? (bj['S'] = 0x0, bj) : new k8(0x0 === bz ? new Uint8Array(0x64) : 0x1 === bz ? new Uint8Array(0x1388) : new Uint8Array(0x7530));
    }
    get['oR']() {
        const uO = uh;
        return this['P'][uO(0x134)];
    } ['oc']() {
        let bz = this['P']['getInt16'](this['S']);
        return this['S'] += 0x2, bz;
    } ['oZ']() {
        const uD = uh;
        let bz = this['P'][uD(0x15d)](this['S']);
        return this['S'] += 0x2, bz;
    } ['or'](bz) {
        const uC = uh;
        this['P'][uC(0x1e9)](this['S']++, bz + (this['U']?.['oH'] ?? 0x0) & 0xff);
    }
    get['oP']() {
        return this['oR'] - this['S'];
    } ['op']() {
        const uy = uh;
        let bz = this['P'][uy(0x29b)](this['S']);
        return this['S'] += 0x4, bz;
    } ['oh'](bz) {
        const uz = uh;
        this['P'][uz(0x28e)](this['S'], bz, !0x0), this['S'] += 0x2;
    } ['ol']() {
        return this['P']['getUint8'](this['S']) < 0x80 ? this['m']() : this['oZ']() - 0x8000;
    } ['oK'](bz) {
        const uj = uh;
        this['P']['setUint8'](this['S']++, bz >> 0x10), this['P'][uj(0x28e)](this['S'], bz), this['S'] += 0x2;
    } ['k'](bz) {
        const ua = uh;
        this['P'][ua(0x1e9)](this['S']++, bz);
    }
    static['oN'](bz) {
        const uq = uh;
        let bj = 0xffffffff;
        for (let ba = 0x0; ba < bz[uq(0x2ea)]; ba++) bj = bj >>> 0x8 ^ k8['O'][0xff & (bj ^ bz[ba])];
        return ~bj;
    } ['ov']() {
        this['T'] = this['S'] << 0x3;
    }
    constructor(bz) {
        const uT = uh;
        if (!bz) throw new Error();
        super(), bz instanceof Int8Array ? this['R'] = new Uint8Array(bz) : this['R'] = bz, this['P'] = new DataView(this['R'][uT(0x215)], this['R']['byteOffset'], this['R'][uT(0x134)]);
    }
}
class k9 {
    ['on'] = 0x0;
    ['oU'] = 0x0;
    ['om'] = 0x0;
    ['of'] = 0x0;
    ['oL'] = null;
    ['oe'] = 0x0;
    ['os'] = null;
    ['oA'] = 0x0;
    ['ob'] = 0x0;
    ['delta'] = 0x0;
    ['ok'] = 0x0;
    ['oB'](bz) {
        const uI = uh;
        return this['oe'] >= this['ok'] && this['oL'] && this['os'] && (this['om'] = this['oL'][this['ob']++] << 0xf, this['ob'] >= this['oA'] && (this['ob'] = this['oA'] - 0x1), this['ok'] = this['os'][this['ob']] / 0x10000 * bz | 0x0, this['ok'] > this['oe'] && (this[uI(0x2e1)] = ((this['oL'][this['ob']] << 0xf) - this['om']) / (this['ok'] - this['oe']) | 0x0)), this['om'] += this[uI(0x2e1)], this['oe']++, this['om'] - this[uI(0x2e1)] >> 0xf;
    } ['oX'](bz) {
        this['on'] = bz['m'](), this['of'] = bz['op'](), this['oU'] = bz['op'](), this['oA'] = bz['m'](), this['os'] = new Int32Array(this['oA']), this['oL'] = new Int32Array(this['oA']);
        for (let bj = 0x0; bj < this['oA']; bj++) this['os'][bj] = bz['oZ'](), this['oL'][bj] = bz['oZ']();
    } ['ox']() {
        this['ok'] = 0x0, this['ob'] = 0x0, this['delta'] = 0x0, this['om'] = 0x0, this['oe'] = 0x0;
    }
}
class ko {
    static['oG'] = null;
    ['og'] = null;
    static['ou'] = null;
    ['oM'] = null;
    ['oF'] = new Int32Array(0x5);
    ['oO'] = null;
    static['oD'] = new Int32Array(0x5);
    static['oC'] = new Int32Array(0x5);
    static['oy'] = null;
    static['oz'] = new Int32Array(0x5);
    ['oj'] = null;
    ['oa'] = null;
    ['oq'] = new Int32Array(0x5);
    ['oT'] = new Int32Array(0x5);
    ['oI'] = null;
    static['oJ'] = new Int32Array(0x5);
    ['oV'] = null;
    ['oW'] = 0x0;
    ['oS'] = null;
    static['oi'] = new Int32Array(0x5);
    ['Q0'] = 0x64;
    ['Q1'] = 0x1f4;
    ['Q2'] = 0x0;
    ['Q3'](bz) {
        this['oM'] = new k9(), this['oM']['oX'](bz), this['oj'] = new k9(), this['oj']['oX'](bz), 0x0 !== bz['m']() && (bz['S']--, this['oV'] = new k9(), this['oV']['oX'](bz), this['oa'] = new k9(), this['oa']['oX'](bz)), 0x0 !== bz['m']() && (bz['S']--, this['oI'] = new k9(), this['oI']['oX'](bz), this['oS'] = new k9(), this['oS']['oX'](bz)), 0x0 !== bz['m']() && (bz['S']--, this['og'] = new k9(), this['og']['oX'](bz), this['oO'] = new k9(), this['oO']['oX'](bz));
        for (let bj = 0x0; bj < 0xa; bj++) {
            let ba = bz['ol']();
            if (0x0 === ba) break;
            this['oF'][bj] = ba, this['oq'][bj] = bz['oQ'](), this['oT'][bj] = bz['ol']();
        }
        this['Q2'] = bz['ol'](), this['Q0'] = bz['ol'](), this['Q1'] = bz['oZ'](), this['oW'] = bz['oZ']();
    }
    static['Q4']() {
        const uJ = uh;
        this['ou'] = new Int32Array(0x8000);
        for (let bz = 0x0; bz < 0x8000; bz++) Math[uJ(0x291)]() > 0.5 ? this['ou'][bz] = 0x1 : this['ou'][bz] = -0x1;
        this['oy'] = new Int32Array(0x8000);
        for (let bj = 0x0; bj < 0x8000; bj++) this['oy'][bj] = 0x4000 * Math[uJ(0x2db)](bj / 5215.1903) | 0x0;
        this['oG'] = new Int32Array(0x35d54);
    } ['Q5'](bz, bj) {
        const uV = uh;
        for (let xg = 0x0; xg < bz; xg++) ko['oG'][xg] = 0x0;
        if (bj < 0xa) return ko['oG'];
        let ba = bz / bj | 0x0;
        this['oM']?.['ox'](), this['oj']?.['ox']();
        let bq = 0x0,
            bT = 0x0,
            bI = 0x0;
        this['oV'] && this['oa'] && (this['oV']['ox'](), this['oa']['ox'](), bq = 32.768 * (this['oV']['oU'] - this['oV']['of']) / ba | 0x0, bT = 32.768 * this['oV']['of'] / ba | 0x0);
        let bJ = 0x0,
            bV = 0x0,
            xG = 0x0;
        this['oI'] && this['oS'] && (this['oI']['ox'](), this['oS']['ox'](), bJ = 32.768 * (this['oI']['oU'] - this['oI']['of']) / ba | 0x0, bV = 32.768 * this['oI']['of'] / ba | 0x0);
        for (let xu = 0x0; xu < 0x5; xu++) this['oM'] && 0x0 !== this['oF'][xu] && (ko['oC'][xu] = 0x0, ko['oJ'][xu] = this['oT'][xu] * ba, ko['oD'][xu] = (this['oF'][xu] << 0xe) / 0x64 | 0x0, ko['oi'][xu] = 32.768 * (this['oM']['oU'] - this['oM']['of']) * Math[uV(0x212)](1.0057929410678534, this['oq'][xu]) / ba | 0x0, ko['oz'][xu] = 32.768 * this['oM']['of'] / ba | 0x0);
        if (this['oM'] && this['oj'])
            for (let xM = 0x0; xM < bz; xM++) {
                let xF = this['oM']['oB'](bz),
                    xO = this['oj']['oB'](bz);
                if (this['oV'] && this['oa']) {
                    let xD = this['oV']['oB'](bz),
                        xC = this['oa']['oB'](bz);
                    xF += this['Q6'](xC, bI, this['oV']['on']) >> 0x1, bI += (xD * bq >> 0x10) + bT;
                }
                if (this['oI'] && this['oS']) {
                    let xy = this['oI']['oB'](bz),
                        xz = this['oS']['oB'](bz);
                    xO = xO * (0x8000 + (this['Q6'](xz, xG, this['oI']['on']) >> 0x1)) >> 0xf, xG += (xy * bJ >> 0x10) + bV;
                }
                for (let xj = 0x0; xj < 0x5; xj++)
                    if (0x0 !== this['oF'][xj]) {
                        let xa = xM + ko['oJ'][xj];
                        xa < bz && (ko['oG'][xa] += this['Q6'](xO * ko['oD'][xj] >> 0xf, ko['oC'][xj], this['oM']['on']), ko['oC'][xj] += (xF * ko['oi'][xj] >> 0x10) + ko['oz'][xj]);
                    }
            }
        if (this['og'] && this['oO']) {
            this['og']['ox'](), this['oO']['ox']();
            let xq = 0x0,
                xT = !0x0;
            for (let xI = 0x0; xI < bz; xI++) {
                let xJ, xV = this['og']['oB'](bz),
                    xW = this['oO']['oB'](bz);
                xJ = xT ? this['og']['of'] + ((this['og']['oU'] - this['og']['of']) * xV >> 0x8) : this['og']['of'] + ((this['og']['oU'] - this['og']['of']) * xW >> 0x8), xq += 0x100, xq >= xJ && (xq = 0x0, xT = !xT), xT && (ko['oG'][xI] = 0x0);
            }
        }
        if (this['Q2'] > 0x0 && this['Q0'] > 0x0) {
            let xS = this['Q2'] * ba;
            for (let xi = xS; xi < bz; xi++) ko['oG'][xi] += ko['oG'][xi - xS] * this['Q0'] / 0x64 | 0x0, ko['oG'][xi] |= 0x0;
        }
        for (let G0 = 0x0; G0 < bz; G0++) ko['oG'][G0] < -0x8000 && (ko['oG'][G0] = -0x8000), ko['oG'][G0] > 0x7fff && (ko['oG'][G0] = 0x7fff);
        return ko['oG'];
    } ['Q6'](bz, bj, ba) {
        return 0x1 === ba ? (0x7fff & bj) < 0x4000 ? bz : -bz : 0x2 === ba ? ko['oy'][0x7fff & bj] * bz >> 0xe : 0x3 === ba ? ((0x7fff & bj) * bz >> 0xe) - bz : 0x4 === ba ? ko['ou'][bj / 0xa2f & 0x7fff] * bz : 0x0;
    }
}
class kQ extends Array {
    constructor(bz, bj, ba, bq) {
        super(bz);
        for (let bT = 0x0; bT < bz; bT++) {
            this[bT] = new Array(bj);
            for (let bI = 0x0; bI < bj; bI++) {
                this[bT][bI] = new Array(ba);
                for (let bJ = 0x0; bJ < ba; bJ++) this[bT][bI][bJ] = bq;
            }
        }
    }
}
class kZ extends Array {
    constructor(bz, bj, ba) {
        super(bz);
        for (let bq = 0x0; bq < bz; bq++) {
            this[bq] = new Array(bj);
            for (let bT = 0x0; bT < bj; bT++) this[bq][bT] = new Int32Array(ba);
        }
    }
}
class kY extends Array {
    constructor(bz, bj) {
        super(bz);
        for (let ba = 0x0; ba < bz; ba++) this[ba] = bj;
    }
}
class kE extends Array {
    constructor(bz, bj, ba, bq, bT) {
        super(bz);
        for (let bI = 0x0; bI < bz; bI++) {
            this[bI] = new Array(bj);
            for (let bJ = 0x0; bJ < bj; bJ++) {
                this[bI][bJ] = new Array(ba);
                for (let bV = 0x0; bV < ba; bV++) {
                    this[bI][bJ][bV] = new Array(bq);
                    for (let xG = 0x0; xG < bq; xG++) this[bI][bJ][bV][xG] = bT;
                }
            }
        }
    }
}
class kd extends Array {
    constructor(bz, bj) {
        super(bz);
        for (let ba = 0x0; ba < bz; ba++) this[ba] = new Int32Array(bj);
    }
}
class kw extends Array {
    constructor(bz, bj, ba) {
        super(bz);
        for (let bq = 0x0; bq < bz; bq++) {
            this[bq] = new Array(bj);
            for (let bT = 0x0; bT < bj; bT++) this[bq][bT] = new Uint8Array(ba);
        }
    }
}
class kR extends Array {
    constructor(bz, bj, ba) {
        super(bz);
        for (let bq = 0x0; bq < bz; bq++) {
            this[bq] = new Array(bj);
            for (let bT = 0x0; bT < bj; bT++) this[bq][bT] = ba;
        }
    }
}
class kc {
    static['Q7'] = null;
    static['Q8'] = null;
    static['Q9'] = new Int32Array(0x3e8);
    ['Qo'] = new kY(0xa, null);
    static['QQ'] = new kY(0x3e8, null);
    ['QZ'] = 0x0;
    ['QY'] = 0x0;
    ['QE']() {
        let bz = 0x98967f;
        for (let bj = 0x0; bj < 0xa; bj++) this['Qo'][bj] && (this['Qo'][bj]['oW'] / 0x14 | 0x0) < bz && (bz = this['Qo'][bj]['oW'] / 0x14 | 0x0);
        if (this['QZ'] < this['QY'] && (this['QZ'] / 0x14 | 0x0) < bz && (bz = this['QZ'] / 0x14 | 0x0), 0x98967f === bz || 0x0 === bz) return 0x0;
        for (let ba = 0x0; ba < 0xa; ba++) this['Qo'][ba] && (this['Qo'][ba]['oW'] -= 0x14 * bz);
        return this['QZ'] < this['QY'] && (this['QZ'] -= 0x14 * bz, this['QY'] -= 0x14 * bz), bz;
    }
    static['Q5'](bz, bj) {
        return this['QQ'][bz] ? this['QQ'][bz]?.['Qd'](bj) ?? null : null;
    }
    static['l'](bz) {
        const uW = uh;
        let bj = new k8(bz['Qw'](uW(0x16f)));
        for (this['Q7'] = new Uint8Array(0x6baa8), this['Q8'] = new k8(this['Q7']), ko['Q4']();;) {
            let ba = bj['oZ']();
            if (0xffff === ba) break;
            let bq = new kc();
            bq[uW(0x2fe)](bj), this['QQ'][ba] = bq, this['Q9'][ba] = bq['QE']();
        }
    } ['Q5'](bz) {
        let bj = 0x0;
        for (let bJ = 0x0; bJ < 0xa; bJ++) this['Qo'][bJ] && this['Qo'][bJ]['Q1'] + this['Qo'][bJ]['oW'] > bj && (bj = this['Qo'][bJ]['Q1'] + this['Qo'][bJ]['oW']);
        if (0x0 === bj) return 0x0;
        let ba = 0x5622 * bj / 0x3e8 | 0x0,
            bq = 0x5622 * this['QZ'] / 0x3e8 | 0x0,
            bT = 0x5622 * this['QY'] / 0x3e8 | 0x0;
        (bq < 0x0 || bT < 0x0 || bT > ba || bq >= bT) && (bz = 0x0);
        let bI = ba + (bT - bq) * (bz - 0x1);
        for (let bV = 0x2c; bV < bI + 0x2c; bV++) kc['Q7'] && (kc['Q7'][bV] = -0x80);
        for (let xG = 0x0; xG < 0xa; xG++)
            if (this['Qo'][xG]) {
                let xg = 0x5622 * this['Qo'][xG]['Q1'] / 0x3e8 | 0x0,
                    xu = 0x5622 * this['Qo'][xG]['oW'] / 0x3e8 | 0x0,
                    xM = this['Qo'][xG]['Q5'](xg, this['Qo'][xG]['Q1']);
                for (let xF = 0x0; xF < xg; xF++) kc['Q7'] && (kc['Q7'][xF + xu + 0x2c] += xM[xF] >> 0x8 << 0x18 >> 0x18);
            } if (bz > 0x1) {
            bq += 0x2c, bT += 0x2c, ba += 0x2c, bI += 0x2c;
            let xO = bI - ba;
            for (let xD = ba - 0x1; xD >= bT; xD--) kc['Q7'] && (kc['Q7'][xD + xO] = kc['Q7'][xD]);
            for (let xC = 0x1; xC < bz; xC++) {
                let xy = (bT - bq) * xC;
                for (let xz = bq; xz < bT; xz++) kc['Q7'] && (kc['Q7'][xz + xy] = kc['Q7'][xz]);
            }
            bI -= 0x2c;
        }
        return bI;
    } [uh(0x2fe)](bz) {
        for (let bj = 0x0; bj < 0xa; bj++) 0x0 !== bz['m']() && (bz['S']--, this['Qo'][bj] = new ko(), this['Qo'][bj]?.['Q3'](bz));
        this['QZ'] = bz['oZ'](), this['QY'] = bz['oZ']();
    } ['Qd'](bz) {
        let bj = this['Q5'](bz);
        return kc['Q8']['S'] = 0x0, kc['Q8']?.['X'](0x52494646), kc['Q8']?.['_'](bj + 0x24), kc['Q8']?.['X'](0x57415645), kc['Q8']?.['X'](0x666d7420), kc['Q8']?.['_'](0x10), kc['Q8']?.['oh'](0x1), kc['Q8']?.['oh'](0x1), kc['Q8']?.['_'](0x5622), kc['Q8']?.['_'](0x5622), kc['Q8']?.['oh'](0x1), kc['Q8']?.['oh'](0x8), kc['Q8']?.['X'](0x64617461), kc['Q8']?.['_'](bj), kc['Q8']['S'] += bj, kc['Q8'];
    }
}
class kr {
    static['QR'] = new kr(0x3, 0x0);
    static['Qt'] = new kr(0x6, 0x1);
    static['Qc'] = new kr(0x1, 0x0);
    static['Qr'] = new kr(0x13, 0x2);
    static['QH'] = new kr(0x11, 0x2);
    static['QP'] = new kr(0x12, 0x2);
    static['Qp'] = new kr(0x0, 0x0);
    static['Qh'] = new kr(0x10, 0x2);
    static['Ql'] = new kr(0x14, 0x2);
    static['QK'] = new kr(0x15, 0x2);
    static['QN'] = new kr(0x2, 0x0);
    static['Qv'] = new kr(0x5, 0x1);
    static['Qn'] = new kr(0x7, 0x1);
    static['QU'] = new kr(0x16, 0x3);
    static['Qm'] = new kr(0x4, 0x1);
    static['Qf'] = new kr(0xa, 0x2);
    static['QL'] = new kr(0x9, 0x2);
    static['Qe'] = new kr(0xb, 0x2);
    static['Qs'] = new kr(0x8, 0x1);
    static['QA'] = new kr(0xc, 0x2);
    static['Qb'] = new kr(0xf, 0x2);
    static['Qk'] = new kr(0xd, 0x2);
    static['QB'] = new kr(0xe, 0x2);
    static[uh(0x224)]() {
        return [this['Qp'], this['Qc'], this['QH'], this['Qb'], this['QN'], this['QB'], this['QL'], this['QR'], this['QU'], this['QA'], this['Qe'], this['Qt'], this['Ql'], this['Qf'], this['Qv'], this['Qk'], this['Qn'], this['Qm'], this['Qh'], this['Qs'], this['Qr'], this['QK'], this['QP']];
    }
    static['of'](bz) {
        const uS = uh;
        let bj = this[uS(0x224)]();
        for (let ba = 0x0; ba < bj[uS(0x2ea)]; ba++) {
            let bq = bj[ba];
            if (bq['id'] === bz) return bq;
        }
        throw Error(uS(0x18f));
    } ['id'];
    ['QX'];
    constructor(bz, bj) {
        this['id'] = bz, this['QX'] = bj;
    }
}
class kH {
    static[uh(0x156)] = (bz, bj) => 0x68 * bz + bj;
    ['Qx'];
    ['QG'];
    ['Qg'];
    ['Qu'];
    ['QM'];
    constructor() {
        this['QG'] = 0x0, this['Qx'] = 0x0, this['Qu'] = 0x68, this['Qg'] = 0x68, this['QM'] = new Int32Array(this['Qu'] * this['Qg']), this['QF']();
    } ['QF']() {
        const ui = uh;
        for (let bz = 0x0; bz < this['Qu']; bz++)
            for (let bj = 0x0; bj < this['Qg']; bj++) {
                let ba = kH[ui(0x156)](bz, bj);
                0x0 === bz || 0x0 === bj || bz === this['Qu'] - 0x1 || bj === this['Qg'] - 0x1 ? this['QM'][ba] = 0xffffff : this['QM'][ba] = 0x0;
            }
    } ['QO'](bz, bj) {
        this['QM'][kH['index'](bz - this['QG'], bj - this['Qx'])] |= 0x200000;
    } ['QD'](bz, bj) {
        const M0 = uh;
        this['QM'][kH[M0(0x156)](bz - this['QG'], bj - this['Qx'])] &= -0x200001;
    } ['QC'](bz, bj, ba, bq, bT, bI) {
        let bJ = 0x100;
        bI && (bJ |= 0x20000);
        let bV = bz - this['QG'],
            xG = bj - this['Qx'];
        if (0x1 === bT || 0x3 === bT) {
            let xg = ba;
            ba = bq, bq = xg;
        }
        for (let xu = bV; xu < bV + ba; xu++)
            if (xu >= 0x0 && xu < this['Qu']) {
                for (let xM = xG; xM < xG + bq; xM++) xM >= 0x0 && xM < this['Qg'] && this['Qy'](xu, xM, bJ);
            }
    } ['Qz'](bz, bj, ba, bq, bT, bI) {
        let bJ = 0x100;
        bI && (bJ |= 0x20000);
        let bV = bz - this['QG'],
            xG = bj - this['Qx'];
        if (0x1 === bT || 0x3 === bT) {
            let xg = ba;
            ba = bq, bq = xg;
        }
        for (let xu = bV; xu < bV + ba; xu++)
            if (xu >= 0x0 && xu < this['Qu']) {
                for (let xM = xG; xM < xG + bq; xM++) xM >= 0x0 && xM < this['Qg'] && this['Qj'](xu, xM, bJ);
            }
    } ['Qa'](bz, bj, ba, bq, bT) {
        let bI = bz - this['QG'],
            bJ = bj - this['Qx'],
            bV = bT ? 0x10000 : 0x80,
            xG = bT ? 0x1000 : 0x8,
            xg = bT ? 0x400 : 0x2,
            xu = bT ? 0x4000 : 0x20,
            xM = bT ? 0x200 : 0x1,
            xF = bT ? 0x2000 : 0x10,
            xO = bT ? 0x800 : 0x4,
            xD = bT ? 0x8000 : 0x40;
        ba === kr['Qp']['id'] ? 0x0 === bq ? (this['Qy'](bI, bJ, bV), this['Qy'](bI - 0x1, bJ, xG)) : 0x1 === bq ? (this['Qy'](bI, bJ, xg), this['Qy'](bI, bJ + 0x1, xu)) : 0x2 === bq ? (this['Qy'](bI, bJ, xG), this['Qy'](bI + 0x1, bJ, bV)) : 0x3 === bq && (this['Qy'](bI, bJ, xu), this['Qy'](bI, bJ - 0x1, xg)) : ba === kr['Qc']['id'] || ba === kr['QR']['id'] ? 0x0 === bq ? (this['Qy'](bI, bJ, xM), this['Qy'](bI - 0x1, bJ + 0x1, xF)) : 0x1 === bq ? (this['Qy'](bI, bJ, xO), this['Qy'](bI + 0x1, bJ + 0x1, xD)) : 0x2 === bq ? (this['Qy'](bI, bJ, xF), this['Qy'](bI + 0x1, bJ - 0x1, xM)) : 0x3 === bq && (this['Qy'](bI, bJ, xD), this['Qy'](bI - 0x1, bJ - 0x1, xO)) : ba === kr['QN']['id'] && (0x0 === bq ? (this['Qy'](bI, bJ, xg | bV), this['Qy'](bI - 0x1, bJ, xG), this['Qy'](bI, bJ + 0x1, xu)) : 0x1 === bq ? (this['Qy'](bI, bJ, xg | xG), this['Qy'](bI, bJ + 0x1, xu), this['Qy'](bI + 0x1, bJ, bV)) : 0x2 === bq ? (this['Qy'](bI, bJ, xu | xG), this['Qy'](bI + 0x1, bJ, bV), this['Qy'](bI, bJ - 0x1, xg)) : 0x3 === bq && (this['Qy'](bI, bJ, xu | bV), this['Qy'](bI, bJ - 0x1, xg), this['Qy'](bI - 0x1, bJ, xG))), bT && this['Qa'](bz, bj, ba, bq, !0x1);
    } ['Qq'](bz, bj, ba, bq, bT) {
        let bI = bz - this['QG'],
            bJ = bj - this['Qx'],
            bV = bT ? 0x10000 : 0x80,
            xG = bT ? 0x1000 : 0x8,
            xg = bT ? 0x400 : 0x2,
            xu = bT ? 0x4000 : 0x20,
            xM = bT ? 0x200 : 0x1,
            xF = bT ? 0x2000 : 0x10,
            xO = bT ? 0x800 : 0x4,
            xD = bT ? 0x8000 : 0x40;
        ba === kr['Qp']['id'] ? 0x0 === bq ? (this['Qj'](bI, bJ, bV), this['Qj'](bI - 0x1, bJ, xG)) : 0x1 === bq ? (this['Qj'](bI, bJ, xg), this['Qj'](bI, bJ + 0x1, xu)) : 0x2 === bq ? (this['Qj'](bI, bJ, xG), this['Qj'](bI + 0x1, bJ, bV)) : 0x3 === bq && (this['Qj'](bI, bJ, xu), this['Qj'](bI, bJ - 0x1, xg)) : ba === kr['Qc']['id'] || ba === kr['QR']['id'] ? 0x0 === bq ? (this['Qj'](bI, bJ, xM), this['Qj'](bI - 0x1, bJ + 0x1, xF)) : 0x1 === bq ? (this['Qj'](bI, bJ, xO), this['Qj'](bI + 0x1, bJ + 0x1, xD)) : 0x2 === bq ? (this['Qj'](bI, bJ, xF), this['Qj'](bI + 0x1, bJ - 0x1, xM)) : 0x3 === bq && (this['Qj'](bI, bJ, xD), this['Qj'](bI - 0x1, bJ - 0x1, xO)) : ba === kr['QN']['id'] && (0x0 === bq ? (this['Qj'](bI, bJ, xg | bV), this['Qj'](bI - 0x1, bJ, xG), this['Qj'](bI, bJ + 0x1, xu)) : 0x1 === bq ? (this['Qj'](bI, bJ, xg | xG), this['Qj'](bI, bJ + 0x1, xu), this['Qj'](bI + 0x1, bJ, bV)) : 0x2 === bq ? (this['Qj'](bI, bJ, xu | xG), this['Qj'](bI + 0x1, bJ, bV), this['Qj'](bI, bJ - 0x1, xg)) : 0x3 === bq && (this['Qj'](bI, bJ, xu | bV), this['Qj'](bI, bJ - 0x1, xg), this['Qj'](bI - 0x1, bJ, xG))), bT && this['Qq'](bz, bj, ba, bq, !0x1);
    } ['QT'](bz, bj, ba, bq, bT, bI) {
        const M1 = uh;
        if (bz === ba && bj === bq) return !0x0;
        let bJ = bz - this['QG'],
            bV = bj - this['Qx'],
            xG = ba - this['QG'],
            xg = bq - this['Qx'],
            xu = kH[M1(0x156)](bJ, bV);
        if (bT === kr['Qp']['id']) {
            if (0x0 === bI) {
                if (bJ === xG - 0x1 && bV === xg) return !0x0;
                if (!(bJ !== xG || bV !== xg + 0x1 || 0x280120 & this['QM'][xu])) return !0x0;
                if (bJ === xG && bV === xg - 0x1 && !(0x280102 & this['QM'][xu])) return !0x0;
            } else {
                if (0x1 === bI) {
                    if (bJ === xG && bV === xg + 0x1) return !0x0;
                    if (!(bJ !== xG - 0x1 || bV !== xg || 0x280108 & this['QM'][xu])) return !0x0;
                    if (bJ === xG + 0x1 && bV === xg && !(0x280180 & this['QM'][xu])) return !0x0;
                } else {
                    if (0x2 === bI) {
                        if (bJ === xG + 0x1 && bV === xg) return !0x0;
                        if (!(bJ !== xG || bV !== xg + 0x1 || 0x280120 & this['QM'][xu])) return !0x0;
                        if (bJ === xG && bV === xg - 0x1 && !(0x280102 & this['QM'][xu])) return !0x0;
                    } else {
                        if (0x3 === bI) {
                            if (bJ === xG && bV === xg - 0x1) return !0x0;
                            if (!(bJ !== xG - 0x1 || bV !== xg || 0x280108 & this['QM'][xu])) return !0x0;
                            if (bJ === xG + 0x1 && bV === xg && !(0x280180 & this['QM'][xu])) return !0x0;
                        }
                    }
                }
            }
        } else {
            if (bT === kr['QN']['id']) {
                if (0x0 === bI) {
                    if (bJ === xG - 0x1 && bV === xg) return !0x0;
                    if (bJ === xG && bV === xg + 0x1) return !0x0;
                    if (!(bJ !== xG + 0x1 || bV !== xg || 0x280180 & this['QM'][xu])) return !0x0;
                    if (bJ === xG && bV === xg - 0x1 && !(0x280102 & this['QM'][xu])) return !0x0;
                } else {
                    if (0x1 === bI) {
                        if (!(bJ !== xG - 0x1 || bV !== xg || 0x280108 & this['QM'][xu])) return !0x0;
                        if (bJ === xG && bV === xg + 0x1) return !0x0;
                        if (bJ === xG + 0x1 && bV === xg) return !0x0;
                        if (bJ === xG && bV === xg - 0x1 && !(0x280102 & this['QM'][xu])) return !0x0;
                    } else {
                        if (0x2 === bI) {
                            if (!(bJ !== xG - 0x1 || bV !== xg || 0x280108 & this['QM'][xu])) return !0x0;
                            if (!(bJ !== xG || bV !== xg + 0x1 || 0x280120 & this['QM'][xu])) return !0x0;
                            if (bJ === xG + 0x1 && bV === xg) return !0x0;
                            if (bJ === xG && bV === xg - 0x1) return !0x0;
                        } else {
                            if (0x3 === bI) {
                                if (bJ === xG - 0x1 && bV === xg) return !0x0;
                                if (!(bJ !== xG || bV !== xg + 0x1 || 0x280120 & this['QM'][xu])) return !0x0;
                                if (!(bJ !== xG + 0x1 || bV !== xg || 0x280180 & this['QM'][xu])) return !0x0;
                                if (bJ === xG && bV === xg - 0x1) return !0x0;
                            }
                        }
                    }
                }
            } else {
                if (bT === kr['QL']['id']) {
                    if (!(bJ !== xG || bV !== xg + 0x1 || 0x20 & this['QM'][xu])) return !0x0;
                    if (!(bJ !== xG || bV !== xg - 0x1 || 0x2 & this['QM'][xu])) return !0x0;
                    if (!(bJ !== xG - 0x1 || bV !== xg || 0x8 & this['QM'][xu])) return !0x0;
                    if (bJ === xG + 0x1 && bV === xg && !(0x80 & this['QM'][xu])) return !0x0;
                }
            }
        }
        return !0x1;
    } ['QI'](bz, bj, ba, bq, bT, bI) {
        const M2 = uh;
        if (bz === ba && bj === bq) return !0x0;
        let bJ = bz - this['QG'],
            bV = bj - this['Qx'],
            xG = ba - this['QG'],
            xg = bq - this['Qx'],
            xu = kH[M2(0x156)](bJ, bV);
        if (bT === kr['Qt']['id'] || bT === kr['Qn']['id']) {
            if (bT === kr['Qn']['id'] && (bI = bI + 0x2 & 0x3), 0x0 === bI) {
                if (!(bJ !== xG + 0x1 || bV !== xg || 0x80 & this['QM'][xu])) return !0x0;
                if (bJ === xG && bV === xg - 0x1 && !(0x2 & this['QM'][xu])) return !0x0;
            } else {
                if (0x1 === bI) {
                    if (!(bJ !== xG - 0x1 || bV !== xg || 0x8 & this['QM'][xu])) return !0x0;
                    if (bJ === xG && bV === xg - 0x1 && !(0x2 & this['QM'][xu])) return !0x0;
                } else {
                    if (0x2 === bI) {
                        if (!(bJ !== xG - 0x1 || bV !== xg || 0x8 & this['QM'][xu])) return !0x0;
                        if (bJ === xG && bV === xg + 0x1 && !(0x20 & this['QM'][xu])) return !0x0;
                    } else {
                        if (0x3 === bI) {
                            if (!(bJ !== xG + 0x1 || bV !== xg || 0x80 & this['QM'][xu])) return !0x0;
                            if (bJ === xG && bV === xg + 0x1 && !(0x20 & this['QM'][xu])) return !0x0;
                        }
                    }
                }
            }
        } else {
            if (bT === kr['Qs']['id']) {
                if (!(bJ !== xG || bV !== xg + 0x1 || 0x20 & this['QM'][xu])) return !0x0;
                if (!(bJ !== xG || bV !== xg - 0x1 || 0x2 & this['QM'][xu])) return !0x0;
                if (!(bJ !== xG - 0x1 || bV !== xg || 0x8 & this['QM'][xu])) return !0x0;
                if (bJ === xG + 0x1 && bV === xg && !(0x80 & this['QM'][xu])) return !0x0;
            }
        }
        return !0x1;
    } ['QJ'](bz, bj, ba, bq, bT, bI, bJ) {
        const M3 = uh;
        let bV = ba + bT - 0x1,
            xG = bq + bI - 0x1,
            xg = kH[M3(0x156)](bz - this['QG'], bj - this['Qx']);
        return bz >= ba && bz <= bV && bj >= bq && bj <= xG || (!(!(bz === ba - 0x1 && bj >= bq && bj <= xG) || 0x8 & this['QM'][xg] || 0x8 & bJ) || (!(!(bz === bV + 0x1 && bj >= bq && bj <= xG) || 0x80 & this['QM'][xg] || 0x2 & bJ) || (!(!(bj === bq - 0x1 && bz >= ba && bz <= bV) || 0x2 & this['QM'][xg] || 0x4 & bJ) || !(!(bj === xG + 0x1 && bz >= ba && bz <= bV) || 0x20 & this['QM'][xg] || 0x1 & bJ))));
    } ['Qy'](bz, bj, ba) {
        const M4 = uh;
        this['QM'][kH[M4(0x156)](bz, bj)] |= ba;
    } ['Qj'](bz, bj, ba) {
        const M5 = uh;
        this['QM'][kH[M5(0x156)](bz, bj)] &= 0xffffff - ba;
    }
}
import {
    playWave as kP,
    setWaveVolume as kp,
    BZip2 as kh,
    playMidi as kl,
    stopMidi as kK,
    setMidiVolume as kN,
    MobileKeyboard as kv,
    getFingerprint as kn
} from './deps.js';
class kU {
    static['QV'] = 0x0;
    static['QW'] = 0x0;
    static['QS'] = null;
    static['Qi'] = 0x0;
    static['Z0'] = !0x1;
    static['Z1'] = 0x0;
    static['Z2'] = null;
    static['Z3'] = 0x0;
    static['Z4'](bz, bj, ba) {
        const M6 = uh;
        if (!(this['Z0'] && bz >= 0x0 && bz < 0x315 && bj >= 0x0 && bj < 0x214)) return;
        this['QW']++;
        let bq = performance[M6(0x22b)](),
            bT = (bq - this['Z3']) / 0xa | 0x0;
        bT > 0xfa && (bT = 0xfa), this['Z3'] = bq, this['Z5'](0x5), 0x2 === ba ? this['Z2']?.['k'](0x1) : this['Z2']?.['k'](0x2), this['Z2']?.['k'](bT), this['Z2']?.['oK'](bz + (bj << 0xa));
    }
    static['Z6'](bz) {
        const M7 = uh;
        if (!this['Z0']) return;
        this['QW']++;
        let bj = performance[M7(0x22b)](),
            ba = (bj - this['Z3']) / 0xa | 0x0;
        ba > 0xfa && (ba = 0xfa), this['Z3'] = bj, 0x3e8 === bz ? bz = 0xb : 0x3e9 === bz ? bz = 0xc : 0x3ea === bz ? bz = 0xe : 0x3eb === bz ? bz = 0xf : bz >= 0x3f0 && (bz -= 0x3e0), this['Z5'](0x3), this['Z2']?.['k'](0x8), this['Z2']?.['k'](ba), this['Z2']?.['k'](bz);
    }
    static['Z7'](bz) {
        const M8 = uh;
        if (!this['Z0']) return;
        this['QW']++;
        let bj = performance[M8(0x22b)](),
            ba = (bj - this['Z3']) / 0xa | 0x0;
        ba > 0xfa && (ba = 0xfa), this['Z3'] = bj, this['Z5'](0x2), 0x2 === bz ? this['Z2']?.['k'](0x3) : this['Z2']?.['k'](0x4), this['Z2']?.['k'](ba);
    }
    static['Z8']() {
        const M9 = uh;
        if (!this['Z0']) return;
        this['QW']++;
        let bz = performance[M9(0x22b)](),
            bj = (bz - this['Z3']) / 0xa | 0x0;
        bj > 0xfa && (bj = 0xfa), this['Z3'] = bz, this['Z5'](0x2), this['Z2']?.['k'](0xb), this['Z2']?.['k'](bj);
    }
    static['Z9'](bz, bj) {
        const Mo = uh;
        if (!(this['Z0'] && bz >= 0x0 && bz < 0x315 && bj >= 0x0 && bj < 0x214)) return;
        let ba = performance[Mo(0x22b)]();
        if (ba - this['QV'] >= 0x32) {
            this['QV'] = ba, this['QW']++;
            let bq = (ba - this['Z3']) / 0xa | 0x0;
            bq > 0xfa && (bq = 0xfa), this['Z3'] = ba, bz - this['Qi'] < 0x8 && bz - this['Qi'] >= -0x8 && bj - this['Z1'] < 0x8 && bj - this['Z1'] >= -0x8 ? (this['Z5'](0x3), this['Z2']?.['k'](0x5), this['Z2']?.['k'](bq), this['Z2']?.['k'](bz + (bj - this['Z1'] + 0x8 << 0x4) + 0x8 - this['Qi'])) : bz - this['Qi'] < 0x80 && bz - this['Qi'] >= -0x80 && bj - this['Z1'] < 0x80 && bj - this['Z1'] >= -0x80 ? (this['Z5'](0x4), this['Z2']?.['k'](0x6), this['Z2']?.['k'](bq), this['Z2']?.['k'](bz + 0x80 - this['Qi']), this['Z2']?.['k'](bj + 0x80 - this['Z1'])) : (this['Z5'](0x5), this['Z2']?.['k'](0x7), this['Z2']?.['k'](bq), this['Z2']?.['oK'](bz + (bj << 0xa))), this['Qi'] = bz, this['Z1'] = bj;
        }
    }
    static['Zo']() {
        this['Z2'] = k8['ow'](0x1), this['QS'] = null, this['Z3'] = performance['now'](), this['Z0'] = !0x0;
    }
    static[uh(0x2bf)]() {
        let bz = null;
        return this['Z2'] && this['Z2']['S'] > 0x0 && this['Z0'] && (bz = this['Z2']), this['ZQ'](), bz;
    }
    static['ZQ']() {
        this['Z0'] = !0x1, this['Z2'] = null;
    }
    static['ZZ']() {
        const MQ = uh;
        if (!this['Z0']) return;
        this['QW']++;
        let bz = performance[MQ(0x22b)](),
            bj = (bz - this['Z3']) / 0xa | 0x0;
        bj > 0xfa && (bj = 0xfa), this['Z3'] = bz, this['Z5'](0x2), this['Z2']?.['k'](0xc), this['Z2']?.['k'](bj);
    }
    static['ZY'](bz) {
        if (!this['Z0']) return;
        this['QW']++;
        let bj = performance['now'](),
            ba = (bj - this['Z3']) / 0xa | 0x0;
        ba > 0xfa && (ba = 0xfa), this['Z3'] = bj, 0x3e8 === bz ? bz = 0xb : 0x3e9 === bz ? bz = 0xc : 0x3ea === bz ? bz = 0xe : 0x3eb === bz ? bz = 0xf : bz >= 0x3f0 && (bz -= 0x3e0), this['Z5'](0x3), this['Z2']?.['k'](0x9), this['Z2']?.['k'](ba), this['Z2']?.['k'](bz);
    }
    static['ZE']() {
        const MZ = uh;
        if (!this['Z0']) return;
        this['QW']++;
        let bz = performance[MZ(0x22b)](),
            bj = (bz - this['Z3']) / 0xa | 0x0;
        bj > 0xfa && (bj = 0xfa), this['Z3'] = bz, this['Z5'](0x2), this['Z2']?.['k'](0xd), this['Z2']?.['k'](bj);
    }
    static['flush']() {
        let bz = null;
        return this['QS'] && this['Z0'] && (bz = this['QS']), this['QS'] = null, bz;
    }
    static['Z5'](bz) {
        if (this['Z2'] && this['Z2']['S'] + bz >= 0x1f4) {
            let bj = this['Z2'];
            this['Z2'] = k8['ow'](0x1), this['QS'] = bj;
        }
    }
    static['Zd']() {
        if (!this['Z0']) return;
        this['QW']++;
        let bz = performance['now'](),
            bj = (bz - this['Z3']) / 0xa | 0x0;
        bj > 0xfa && (bj = 0xfa), this['Z3'] = bz, this['Z5'](0x2), this['Z2']?.['k'](0xa), this['Z2']?.['k'](bj);
    }
}
var km = [uh(0x1bc), 'F12'],
    kf = new Map();
const kL = {};
kL[uh(0x15c)] = 0x3d, kL['ch'] = 0x2b;
const ke = {};
ke[uh(0x15c)] = 0x3d, ke['ch'] = 0x3d;
const ks = {};
ks[uh(0x15c)] = 0x54, ks['ch'] = 0x54;
const kA = {};
kA['code'] = 0x2e, kA['ch'] = 0x3e;
const kb = {};
kb[uh(0x15c)] = 0x2c, kb['ch'] = 0x2c;
const kk = {};
kk['code'] = 0x4e, kk['ch'] = 0x6e;
const kB = {};
kB['code'] = 0x53, kB['ch'] = 0x53;
const kX = {};
kX[uh(0x15c)] = 0x39, kX['ch'] = 0x28;
const kx = {};
kx[uh(0x15c)] = 0x50, kx['ch'] = 0x70;
const kG = {};
kG[uh(0x15c)] = 0x56, kG['ch'] = 0x56;
const kg = {};
kg['code'] = 0xde, kg['ch'] = 0x22;
const ku = {};
ku['code'] = 0x4f, ku['ch'] = 0x6f;
const kM = {};
kM['code'] = 0x59, kM['ch'] = 0x59;
const kF = {};
kF[uh(0x15c)] = 0x1b, kF['ch'] = 0x1b;
const kO = {};
kO[uh(0x15c)] = 0x55, kO['ch'] = 0x55;
const kD = {};
kD['code'] = 0x7b, kD['ch'] = 0x3fb;
const kC = {};
kC['code'] = 0x25, kC['ch'] = 0x1;
const ky = {};
ky[uh(0x15c)] = 0x5a, ky['ch'] = 0x5a;
const kz = {};
kz[uh(0x15c)] = 0x57, kz['ch'] = 0x57;
const kj = {};
kj['code'] = 0x51, kj['ch'] = 0x71;
const ka = {};
ka['code'] = 0x10, ka['ch'] = 0x6;
const kq = {};
kq['code'] = 0x2c, kq['ch'] = 0x3c;
const kT = {};
kT['code'] = 0x58, kT['ch'] = 0x58;
const kI = {};
kI['code'] = 0x26, kI['ch'] = 0x3;
const kJ = {};
kJ[uh(0x15c)] = 0x9, kJ['ch'] = 0x9;
const kV = {};
kV[uh(0x15c)] = 0x2f, kV['ch'] = 0x3f;
const kW = {};
kW['code'] = 0x2e, kW['ch'] = 0x2e;
const kS = {};
kS[uh(0x15c)] = 0xa, kS['ch'] = 0xa;
const ki = {};
ki[uh(0x15c)] = 0x5b, ki['ch'] = 0x5b;
const B0 = {};
B0[uh(0x15c)] = 0x32, B0['ch'] = 0x40;
const B1 = {};
B1[uh(0x15c)] = 0x33, B1['ch'] = 0x23;
const B2 = {};
B2[uh(0x15c)] = 0x52, B2['ch'] = 0x72;
const B3 = {};
B3[uh(0x15c)] = 0x2d, B3['ch'] = 0x5f;
const B4 = {};
B4['code'] = 0x38, B4['ch'] = 0x2a;
const B5 = {};
B5[uh(0x15c)] = 0x53, B5['ch'] = 0x73;
const B6 = {};
B6[uh(0x15c)] = 0x2f, B6['ch'] = 0x2f;
const B7 = {};
B7[uh(0x15c)] = 0x11, B7['ch'] = 0x5;
const B8 = {};
B8['code'] = 0x54, B8['ch'] = 0x74;
const B9 = {};
B9[uh(0x15c)] = 0x20, B9['ch'] = 0x20;
const Bo = {};
Bo[uh(0x15c)] = 0x14, Bo['ch'] = 0xffff;
const BQ = {};
BQ[uh(0x15c)] = 0x2d, BQ['ch'] = 0x2d;
const BZ = {};
BZ['code'] = 0xc0, BZ['ch'] = 0x7e;
const BY = {};
BY[uh(0x15c)] = 0x27, BY['ch'] = 0x2;
const BE = {};
BE[uh(0x15c)] = 0x55, BE['ch'] = 0x75;
const Bd = {};
Bd[uh(0x15c)] = 0xc0, Bd['ch'] = 0x60;
const Bw = {};
Bw[uh(0x15c)] = 0x56, Bw['ch'] = 0x76;
const BR = {};
BR[uh(0x15c)] = 0x34, BR['ch'] = 0x34;
const Bc = {};
Bc[uh(0x15c)] = 0x57, Bc['ch'] = 0x77;
const Br = {};
Br[uh(0x15c)] = 0x59, Br['ch'] = 0x79;
const BH = {};
BH[uh(0x15c)] = 0x37, BH['ch'] = 0x37;
const BP = {};
BP[uh(0x15c)] = 0x30, BP['ch'] = 0x29;
const Bp = {};
Bp[uh(0x15c)] = 0x9b, Bp['ch'] = 0xffff;
const Bh = {};
Bh[uh(0x15c)] = 0x58, Bh['ch'] = 0x78;
const Bl = {};
Bl['code'] = 0x41, Bl['ch'] = 0x41;
const BK = {};
BK[uh(0x15c)] = 0x28, BK['ch'] = 0x4;
const BN = {};
BN[uh(0x15c)] = 0x36, BN['ch'] = 0x36;
const Bv = {};
Bv[uh(0x15c)] = 0x5a, Bv['ch'] = 0x7a;
const Bn = {};
Bn[uh(0x15c)] = 0x5b, Bn['ch'] = 0x7b;
const BU = {};
BU[uh(0x15c)] = 0x35, BU['ch'] = 0x35;
const Bm = {};
Bm[uh(0x15c)] = 0x5d, Bm['ch'] = 0x7d;
const Bf = {};
Bf['code'] = 0x32, Bf['ch'] = 0x32;
const BL = {};
BL['code'] = 0x5d, BL['ch'] = 0x5d;
const Be = {};
Be[uh(0x15c)] = 0x8, Be['ch'] = 0x8;
const Bs = {};
Bs['code'] = 0x5c, Bs['ch'] = 0x5c;
const BA = {};
BA[uh(0x15c)] = 0x31, BA['ch'] = 0x21;
const Bb = {};
Bb[uh(0x15c)] = 0x33, Bb['ch'] = 0xa3;
const Bk = {};
Bk[uh(0x15c)] = 0x30, Bk['ch'] = 0x30;
const BB = {};
BB[uh(0x15c)] = 0x42, BB['ch'] = 0x42;
const BX = {};
BX[uh(0x15c)] = 0x12, BX['ch'] = 0x7;
const Bx = {};
Bx[uh(0x15c)] = 0x7f, Bx['ch'] = 0x7f;
const BG = {};
BG[uh(0x15c)] = 0x4c, BG['ch'] = 0x4c;
const Bg = {};
Bg[uh(0x15c)] = 0x71, Bg['ch'] = 0x3f1;
const Bu = {};
Bu[uh(0x15c)] = 0x31, Bu['ch'] = 0x31;
const BM = {};
BM[uh(0x15c)] = 0x4d, BM['ch'] = 0x4d;
const BF = {};
BF['code'] = 0x74, BF['ch'] = 0x3f4;
const BO = {};
BO[uh(0x15c)] = 0x75, BO['ch'] = 0x3f5;
const BD = {};
BD['code'] = 0x33, BD['ch'] = 0x33;
const BC = {};
BC[uh(0x15c)] = 0x39, BC['ch'] = 0x39;
const By = {};
By[uh(0x15c)] = 0x23, By['ch'] = 0x3e9;
const Bz = {};
Bz['code'] = 0x20c, Bz['ch'] = 0xffff;
const Bj = {};
Bj[uh(0x15c)] = 0x73, Bj['ch'] = 0x3f3;
const Ba = {};
Ba['code'] = 0x44, Ba['ch'] = 0x44;
const Bq = {};
Bq[uh(0x15c)] = 0x24, Bq['ch'] = 0x3e8;
const BT = {};
BT[uh(0x15c)] = 0x38, BT['ch'] = 0x38;
const BI = {};
BI[uh(0x15c)] = 0x35, BI['ch'] = 0x25;
const BJ = {};
BJ[uh(0x15c)] = 0x34, BJ['ch'] = 0x24;
const BV = {};
BV[uh(0x15c)] = 0x41, BV['ch'] = 0x61;
const BW = {};
BW[uh(0x15c)] = 0x37, BW['ch'] = 0x26;
const BS = {};
BS['code'] = 0x44, BS['ch'] = 0x64;
const Bi = {};
Bi[uh(0x15c)] = 0x4b, Bi['ch'] = 0x4b;
const X0 = {};
X0[uh(0x15c)] = 0x3b, X0['ch'] = 0x3b;
const X1 = {};
X1[uh(0x15c)] = 0x4e, X1['ch'] = 0x4e;
const X2 = {};
X2['code'] = 0x70, X2['ch'] = 0x3f0;
const X3 = {};
X3[uh(0x15c)] = 0x49, X3['ch'] = 0x49;
const X4 = {};
X4['code'] = 0x43, X4['ch'] = 0x63;
const X5 = {};
X5[uh(0x15c)] = 0x22, X5['ch'] = 0x3eb;
const X6 = {};
X6['code'] = 0x42, X6['ch'] = 0x62;
const X7 = {};
X7[uh(0x15c)] = 0x72, X7['ch'] = 0x3f2;
const X8 = {};
X8['code'] = 0x21, X8['ch'] = 0x3ea;
const X9 = {};
X9[uh(0x15c)] = 0x3b, X9['ch'] = 0x3a;
const Xo = {};
Xo[uh(0x15c)] = 0x4f, Xo['ch'] = 0x4f;
const XQ = {};
XQ['code'] = 0x45, XQ['ch'] = 0x65;
const XZ = {};
XZ[uh(0x15c)] = 0x36, XZ['ch'] = 0x5e;
const XY = {};
XY[uh(0x15c)] = 0x5c, XY['ch'] = 0x7c;
const XE = {};
XE[uh(0x15c)] = 0x49, XE['ch'] = 0x69;
const Xd = {};
Xd[uh(0x15c)] = 0x46, Xd['ch'] = 0x66;
const Xw = {};
Xw['code'] = 0xde, Xw['ch'] = 0x27;
const XR = {};
XR[uh(0x15c)] = 0x43, XR['ch'] = 0x43;
const Xt = {};
Xt[uh(0x15c)] = 0x76, Xt['ch'] = 0x3f6;
const Xc = {};
Xc[uh(0x15c)] = 0x77, Xc['ch'] = 0x3f7;
const Xr = {};
Xr[uh(0x15c)] = 0x47, Xr['ch'] = 0x67;
const XH = {};
XH[uh(0x15c)] = 0x78, XH['ch'] = 0x3f8;
const XP = {};
XP['code'] = 0x79, XP['ch'] = 0x3f9;
const Xp = {};
Xp['code'] = 0x48, Xp['ch'] = 0x68;
const Xh = {};
Xh[uh(0x15c)] = 0x4b, Xh['ch'] = 0x6b;
const Xl = {};
Xl[uh(0x15c)] = 0x7a, Xl['ch'] = 0x3fa;
const XK = {};
XK[uh(0x15c)] = 0x45, XK['ch'] = 0x45;
const XN = {};
XN[uh(0x15c)] = 0x47, XN['ch'] = 0x47;
const Xv = {};
Xv[uh(0x15c)] = 0x4c, Xv['ch'] = 0x6c;
const Xn = {};
Xn[uh(0x15c)] = 0x4a, Xn['ch'] = 0x6a;
const XU = {};
XU['code'] = 0x4d, XU['ch'] = 0x6d;
const Xm = {};
Xm[uh(0x15c)] = 0x51, Xm['ch'] = 0x51;
const Xf = {};
Xf[uh(0x15c)] = 0x50, Xf['ch'] = 0x50;
const XL = {};
XL[uh(0x15c)] = 0x4a, XL['ch'] = 0x4a;
const Xe = {};
Xe[uh(0x15c)] = 0x48, Xe['ch'] = 0x48;
const Xs = {};
Xs[uh(0x15c)] = 0x46, Xs['ch'] = 0x46;
const XA = {};
XA[uh(0x15c)] = 0x52, XA['ch'] = 0x52, (kf['set']('+', kL), kf[uh(0x20c)]('=', ke), kf[uh(0x20c)]('T', ks), kf[uh(0x20c)]('>', kA), kf[uh(0x20c)](',', kb), kf[uh(0x20c)]('n', kk), kf['set']('S', kB), kf[uh(0x20c)]('(', kX), kf[uh(0x20c)]('p', kx), kf[uh(0x20c)]('V', kG), kf[uh(0x20c)]('\x22', kg), kf[uh(0x20c)]('o', ku), kf[uh(0x20c)]('Y', kM), kf[uh(0x20c)](uh(0x274), kF), kf['set']('U', kO), kf[uh(0x20c)](uh(0x191), kD), kf[uh(0x20c)](uh(0x184), kC), kf[uh(0x20c)]('Z', ky), kf['set']('W', kz), kf[uh(0x20c)]('q', kj), kf[uh(0x20c)](uh(0x160), ka), kf[uh(0x20c)]('<', kq), kf[uh(0x20c)]('X', kT), kf[uh(0x20c)]('ArrowUp', kI), kf['set'](uh(0x1ec), kJ), kf['set']('?', kV), kf[uh(0x20c)]('.', kW), kf[uh(0x20c)](uh(0x30c), kS), kf[uh(0x20c)]('[', ki), kf['set']('@', B0), kf[uh(0x20c)]('#', B1), kf[uh(0x20c)]('r', B2), kf[uh(0x20c)]('_', B3), kf[uh(0x20c)]('*', B4), kf[uh(0x20c)]('s', B5), kf['set']('/', B6), kf[uh(0x20c)]('Control', B7), kf[uh(0x20c)]('t', B8), kf[uh(0x20c)]('\x20', B9), kf[uh(0x20c)](uh(0x165), Bo), kf[uh(0x20c)]('-', BQ), kf[uh(0x20c)]('~', BZ), kf[uh(0x20c)](uh(0x167), BY), kf[uh(0x20c)]('u', BE), kf['set']('`', Bd), kf[uh(0x20c)]('v', Bw), kf[uh(0x20c)]('4', BR), kf[uh(0x20c)]('w', Bc), kf[uh(0x20c)]('y', Br), kf[uh(0x20c)]('7', BH), kf[uh(0x20c)](')', BP), kf['set'](uh(0x1f7), Bp), kf['set']('x', Bh), kf[uh(0x20c)]('A', Bl), kf[uh(0x20c)](uh(0x137), BK), kf['set']('6', BN), kf[uh(0x20c)]('z', Bv), kf[uh(0x20c)]('{', Bn), kf[uh(0x20c)]('5', BU), kf[uh(0x20c)]('}', Bm), kf[uh(0x20c)]('2', Bf), kf['set'](']', BL), kf[uh(0x20c)](uh(0x221), Be), kf[uh(0x20c)]('\x5c', Bs), kf[uh(0x20c)]('!', BA), kf[uh(0x20c)]('£', Bb), kf['set']('0', Bk), kf[uh(0x20c)]('B', BB), kf[uh(0x20c)](uh(0x2d4), BX), kf[uh(0x20c)](uh(0x206), Bx), kf[uh(0x20c)]('L', BG), kf[uh(0x20c)]('F2', Bg), kf[uh(0x20c)]('1', Bu), kf[uh(0x20c)]('M', BM), kf[uh(0x20c)]('F5', BF), kf[uh(0x20c)]('F6', BO), kf[uh(0x20c)]('3', BD), kf[uh(0x20c)]('9', BC), kf[uh(0x20c)](uh(0x298), By), kf[uh(0x20c)](uh(0x135), Bz), kf['set']('F4', Bj), kf[uh(0x20c)]('D', Ba), kf[uh(0x20c)]('Home', Bq), kf[uh(0x20c)]('8', BT), kf[uh(0x20c)]('%', BI), kf['set']('$', BJ), kf[uh(0x20c)]('a', BV), kf[uh(0x20c)]('&', BW), kf[uh(0x20c)]('d', BS), kf[uh(0x20c)]('K', Bi), kf[uh(0x20c)](';', X0), kf[uh(0x20c)]('N', X1), kf['set']('F1', X2), kf[uh(0x20c)]('I', X3), kf['set']('c', X4), kf['set']('PageDown', X5), kf[uh(0x20c)]('b', X6), kf[uh(0x20c)]('F3', X7), kf[uh(0x20c)](uh(0x31a), X8), kf[uh(0x20c)](':', X9), kf[uh(0x20c)]('O', Xo), kf[uh(0x20c)]('e', XQ), kf['set']('^', XZ), kf[uh(0x20c)]('|', XY), kf[uh(0x20c)]('i', XE), kf[uh(0x20c)]('f', Xd), kf[uh(0x20c)]('\x27', Xw), kf[uh(0x20c)]('C', XR), kf[uh(0x20c)]('F7', Xt), kf[uh(0x20c)]('F8', Xc), kf[uh(0x20c)]('g', Xr), kf[uh(0x20c)]('F9', XH), kf[uh(0x20c)](uh(0x1fb), XP), kf[uh(0x20c)]('h', Xp), kf['set']('k', Xh), kf[uh(0x20c)](uh(0x1bc), Xl), kf[uh(0x20c)]('E', XK), kf['set']('G', XN), kf[uh(0x20c)]('l', Xv), kf[uh(0x20c)]('j', Xn), kf[uh(0x20c)]('m', XU), kf[uh(0x20c)]('Q', Xm), kf['set']('P', Xf), kf[uh(0x20c)]('J', XL), kf[uh(0x20c)]('H', Xe), kf[uh(0x20c)]('F', Xs), kf[uh(0x20c)]('R', XA));
const Xb = {};
Xb[uh(0x2b1)] = !0x0;
const Xk = {};
Xk[uh(0x2b1)] = !0x0;
var XB = document[uh(0x2d3)](uh(0x1bf)),
    XX = XB[uh(0x249)]('2d', Xb),
    Xx = document[uh(0x2f7)](uh(0x1bf)),
    XG = document[uh(0x2f7)](uh(0x2d7)),
    Xg = Xx[uh(0x249)]('2d', Xk);
class Xu extends k4 {
    static['Zw'] = new Int32Array();
    static['ZR'] = 0x0;
    static['Zt'] = 0x0;
    static['Zc'] = 0x0;
    static['Zr'] = 0x0;
    static['ZH'] = 0x0;
    static['ZP'] = 0x0;
    static['Zp'] = 0x0;
    static['Zh'] = 0x0;
    static['Zl'] = 0x0;
    static['ZK'](bz, bj, ba, bq, bT) {
        bz < this['Zl'] && (ba -= this['Zl'] - bz, bz = this['Zl']), bj < this['Zr'] && (bq -= this['Zr'] - bj, bj = this['Zr']), bz + ba > this['Zt'] && (ba = this['Zt'] - bz), bj + bq > this['Zh'] && (bq = this['Zh'] - bj);
        let bI = this['ZR'] - ba,
            bJ = bz + bj * this['ZR'];
        for (let bV = -bq; bV < 0x0; bV++) {
            for (let xG = -ba; xG < 0x0; xG++) this['Zw'][bJ++] = bT;
            bJ += bI;
        }
    }
    static['ZN'](bz, bj, ba, bq, bT, bI) {
        bz < this['Zl'] && (ba -= this['Zl'] - bz, bz = this['Zl']), bj < this['Zr'] && (bq -= this['Zr'] - bj, bj = this['Zr']), bz + ba > this['Zt'] && (ba = this['Zt'] - bz), bj + bq > this['Zh'] && (bq = this['Zh'] - bj);
        let bJ = 0x100 - bI,
            bV = (bT >> 0x10 & 0xff) * bI,
            xG = (bT >> 0x8 & 0xff) * bI,
            xg = (0xff & bT) * bI,
            xu = this['ZR'] - ba,
            xM = bz + bj * this['ZR'];
        for (let xF = 0x0; xF < bq; xF++) {
            for (let xO = -ba; xO < 0x0; xO++) {
                let xD = (bV + (this['Zw'][xM] >> 0x10 & 0xff) * bJ >> 0x8 << 0x10) + (xG + (this['Zw'][xM] >> 0x8 & 0xff) * bJ >> 0x8 << 0x8) + (xg + (0xff & this['Zw'][xM]) * bJ >> 0x8);
                this['Zw'][xM++] = xD;
            }
            xM += xu;
        }
    }
    static['Zv'](bz, bj, ba, bq, bT) {
        const MY = uh;
        let bI = 0x100 - bT,
            bJ = (bq >> 0x10 & 0xff) * bT,
            bV = (bq >> 0x8 & 0xff) * bT,
            xG = (0xff & bq) * bT,
            xg = bj - ba;
        xg < 0x0 && (xg = 0x0);
        let xu = bj + ba;
        xu >= this['Zc'] && (xu = this['Zc'] - 0x1);
        for (let xM = xg; xM <= xu; xM++) {
            let xF = xM - bj,
                xO = 0x0 | Math[MY(0x1d3)](ba * ba - xF * xF),
                xD = bz - xO;
            xD < 0x0 && (xD = 0x0);
            let xC = bz + xO;
            xC >= this['ZR'] && (xC = this['ZR'] - 0x1);
            let xy = xD + xM * this['ZR'];
            for (let xz = xD; xz <= xC; xz++) {
                let xj = (bJ + (this['Zw'][xy] >> 0x10 & 0xff) * bI >> 0x8 << 0x10) + (bV + (this['Zw'][xy] >> 0x8 & 0xff) * bI >> 0x8 << 0x8) + (xG + (0xff & this['Zw'][xy]) * bI >> 0x8);
                this['Zw'][xy++] = xj;
            }
        }
    }
    static['Zn'](bz, bj, ba) {
        bz < this['Zl'] || bz >= this['Zt'] || bj < this['Zr'] || bj >= this['Zh'] || (this['Zw'][bz + bj * this['ZR']] = ba);
    }
    static[uh(0x2aa)]() {
        let bz = this['ZR'] * this['Zc'];
        for (let bj = 0x0; bj < bz; bj++) this['Zw'][bj] = 0x0;
    }
    static['ZU'](bz, bj, ba, bq) {
        bz < 0x0 && (bz = 0x0), bj < 0x0 && (bj = 0x0), ba > this['ZR'] && (ba = this['ZR']), bq > this['Zc'] && (bq = this['Zc']), this['Zr'] = bj, this['Zh'] = bq, this['Zl'] = bz, this['Zt'] = ba, this['ZH'] = this['Zt'] - 0x1, this['ZP'] = this['Zt'] / 0x2 | 0x0, this['Zp'] = this['Zh'] / 0x2 | 0x0;
    }
    static['Zm'](bz, bj, ba) {
        this['Zw'] = bz, this['ZR'] = bj, this['Zc'] = ba, this['ZU'](0x0, 0x0, bj, ba);
    }
    static['Zf'](bz, bj, ba, bq, bT) {
        const ME = uh;
        let bI = Math[ME(0x196)](ba - bz),
            bJ = Math[ME(0x196)](bq - bj),
            bV = bz < ba ? 0x1 : -0x1,
            xG = bj < bq ? 0x1 : -0x1,
            xg = bI - bJ;
        for (; bz >= this['Zl'] && bz < this['Zt'] && bj >= this['Zr'] && bj < this['Zh'] && (this['Zw'][bz + bj * this['ZR']] = bT), bz !== ba || bj !== bq;) {
            let xu = 0x2 * xg;
            xu > -bJ && (xg -= bJ, bz += bV), xu < bI && (xg += bI, bj += xG);
        }
    }
    static['ZL'](bz, bj, ba, bq) {
        if (bz < this['Zl'] || bz >= this['Zt']) return;
        bj < this['Zr'] && (bq -= this['Zr'] - bj, bj = this['Zr']), bj + bq > this['Zh'] && (bq = this['Zh'] - bj);
        let bT = bz + bj * this['ZR'];
        for (let bI = 0x0; bI < bq; bI++) this['Zw'][bT + bI * this['ZR']] = ba;
    }
    static['Ze'](bz, bj, ba, bq) {
        if (bj < this['Zr'] || bj >= this['Zh']) return;
        bz < this['Zl'] && (bq -= this['Zl'] - bz, bz = this['Zl']), bz + bq > this['Zt'] && (bq = this['Zt'] - bz);
        let bT = bz + bj * this['ZR'];
        for (let bI = 0x0; bI < bq; bI++) this['Zw'][bT + bI] = ba;
    }
    static['Zs'](bz, bj, ba, bq, bT) {
        this['Ze'](bz, bj, bT, ba), this['Ze'](bz, bj + bq - 0x1, bT, ba), this['ZL'](bz, bj, bT, bq), this['ZL'](bz + ba - 0x1, bj, bT, bq);
    }
    static['ZA']() {
        this['Zl'] = 0x0, this['Zr'] = 0x0, this['Zt'] = this['ZR'], this['Zh'] = this['Zc'], this['ZH'] = this['Zt'] - 0x1, this['ZP'] = this['Zt'] / 0x2 | 0x0;
    }
}
class XM {
    ['Zw'];
    ['Zb'];
    ['Zc'];
    ['Zk'];
    ['ZB'];
    ['ZR'];
    [uh(0x2aa)]() {
        const Md = uh;
        this['Zw'][Md(0x2c0)](0x0);
    } ['bind']() {
        Xu['Zm'](this['Zw'], this['ZR'], this['Zc']);
    }
    constructor(bz, bj, ba = XX) {
        const Mw = uh;
        this['Zk'] = ba, this['ZB'] = this['Zk']['getImageData'](0x0, 0x0, bz, bj), this['Zb'] = new Uint32Array(this['ZB'][Mw(0x1c7)][Mw(0x215)]), this['Zw'] = new Int32Array(bz * bj), this['ZR'] = bz, this['Zc'] = bj, this[Mw(0x2bd)]();
    } [uh(0x173)](bz, bj) {
        const MR = uh;
        this.#t(), this['Zk'][MR(0x174)](this['ZB'], bz, bj);
    }
    #t() {
        let bz = this['Zw']['length'],
            bj = this['Zw'],
            ba = this['Zb'];
        for (let bq = 0x0; bq < bz; bq++) {
            let bT = bj[bq];
            ba[bq] = bT >> 0x10 & 0xff | (bT >> 0x8 & 0xff) << 0x8 | (0xff & bT) << 0x10 | 0xff000000;
        }
    }
}
class XF extends k4 {
    ['Zc'];
    ['Zw'];
    ['ZR'];
    ['ZX'];
    ['Zx'];
    ['ZG'];
    ['Zg'];
    ['Zu'];
    ['ZM'](bz, bj, ba, bq, bT, bI, bJ, bV, xG, xg, xu, xM) {
        try {
            let xF = bq;
            for (let xO = -xG; xO < 0x0; xO++) {
                let xD = (bT >> 0x10) * xM;
                for (let xC = -bV; xC < 0x0; xC++) {
                    let xy = bj[(bq >> 0x10) + xD];
                    0x0 == xy ? bI++ : bz[bI++] = ba[0xff & xy], bq += xg;
                }
                bT += xu, bq = xF, bI += bJ;
            }
        } catch (xz) {}
    } ['ZF'](bz, bj, ba, bq, bT, bI, bJ, bV) {
        let xG = -(bz >> 0x2);
        bz = -(0x3 & bz);
        for (let xg = -bj; xg < 0x0; xg++) {
            for (let xu = xG; xu < 0x0; xu++) {
                let xM = ba[bq++];
                0x0 === xM ? bJ++ : bI[bJ++] = this['Zu'][0xff & xM], xM = ba[bq++], 0x0 === xM ? bJ++ : bI[bJ++] = this['Zu'][0xff & xM], xM = ba[bq++], 0x0 === xM ? bJ++ : bI[bJ++] = this['Zu'][0xff & xM], xM = ba[bq++], 0x0 === xM ? bJ++ : bI[bJ++] = this['Zu'][0xff & xM];
            }
            for (let xF = bz; xF < 0x0; xF++) {
                let xO = ba[bq++];
                0x0 === xO ? bJ++ : bI[bJ++] = this['Zu'][0xff & xO];
            }
            bJ += bV, bq += bT;
        }
    } [uh(0x26c)](bz, bj, ba, bq) {
        try {
            let bT = this['ZR'],
                bI = (this['Zc'], 0x0),
                bJ = 0x0,
                bV = this['ZG'],
                xG = this['Zx'],
                xg = (bV << 0x10) / ba | 0x0,
                xu = (xG << 0x10) / bq | 0x0;
            bz = bz + (this['ZX'] * ba + bV - 0x1) / bV | 0x0, bj = bj + (this['Zg'] * bq + xG - 0x1) / xG | 0x0, this['ZX'] * ba % bV != 0x0 && (bI = (bV - this['ZX'] * ba % bV << 0x10) / ba | 0x0), this['Zg'] * bq % xG != 0x0 && (bJ = (xG - this['Zg'] * bq % xG << 0x10) / bq | 0x0), ba = ba * (this['ZR'] - (bI >> 0x10)) / bV | 0x0, bq = bq * (this['Zc'] - (bJ >> 0x10)) / xG | 0x0;
            let xM, xF = bz + bj * Xu['ZR'],
                xO = Xu['ZR'] - ba;
            bj < Xu['Zr'] && (xM = Xu['Zr'] - bj, bq -= xM, bj = 0x0, xF += xM * Xu['ZR'], bJ += xu * xM), bj + bq > Xu['Zh'] && (bq -= bj + bq - Xu['Zh']), bz < Xu['Zl'] && (xM = Xu['Zl'] - bz, ba -= xM, bz = 0x0, xF += xM, bI += xg * xM, xO += xM), bz + ba > Xu['Zt'] && (xM = bz + ba - Xu['Zt'], ba -= xM, xO += xM), this['ZM'](Xu['Zw'], this['Zw'], this['Zu'], bI, bJ, xF, xO, ba, bq, xg, xu, bT);
        } catch (xD) {}
    } ['ZO']() {
        if (this['ZR'] === this['ZG'] && this['Zc'] === this['Zx']) return;
        let bz = new Int8Array(this['ZG'] * this['Zx']),
            bj = 0x0;
        for (let ba = 0x0; ba < this['Zc']; ba++)
            for (let bq = 0x0; bq < this['ZR']; bq++) bz[bq + this['ZX'] + (ba + this['Zg']) * this['ZG']] = this['Zw'][bj++];
        this['Zw'] = bz, this['ZR'] = this['ZG'], this['Zc'] = this['Zx'], this['ZX'] = 0x0, this['Zg'] = 0x0;
    } ['ZD']() {
        this['ZG'] |= 0x0, this['Zx'] |= 0x0, this['ZG'] /= 0x2, this['Zx'] /= 0x2, this['ZG'] |= 0x0, this['Zx'] |= 0x0;
        let bz = new Int8Array(this['ZG'] * this['Zx']),
            bj = 0x0;
        for (let ba = 0x0; ba < this['Zc']; ba++)
            for (let bq = 0x0; bq < this['ZR']; bq++) bz[(bq + this['ZX'] >> 0x1) + (ba + this['Zg'] >> 0x1) * this['ZG']] = this['Zw'][bj++];
        this['Zw'] = bz, this['ZR'] = this['ZG'], this['Zc'] = this['Zx'], this['ZX'] = 0x0, this['Zg'] = 0x0;
    } ['ZC'](bz, bj, ba) {
        for (let bq = 0x0; bq < this['Zu']['length']; bq++) {
            let bT = this['Zu'][bq] >> 0x10 & 0xff;
            bT += bz, bT < 0x0 ? bT = 0x0 : bT > 0xff && (bT = 0xff);
            let bI = this['Zu'][bq] >> 0x8 & 0xff;
            bI += bj, bI < 0x0 ? bI = 0x0 : bI > 0xff && (bI = 0xff);
            let bJ = 0xff & this['Zu'][bq];
            bJ += ba, bJ < 0x0 ? bJ = 0x0 : bJ > 0xff && (bJ = 0xff), this['Zu'][bq] = (bT << 0x10) + (bI << 0x8) + bJ;
        }
    } ['Zy']() {
        let bz = this['Zw'],
            bj = this['ZR'],
            ba = this['Zc'];
        for (let bq = 0x0; bq < ba; bq++) {
            let bT = bj / 0x2 | 0x0;
            for (let bI = 0x0; bI < bT; bI++) {
                let bJ = bI + bq * bj,
                    bV = bj - bI - 0x1 + bq * bj,
                    xG = bz[bJ];
                bz[bJ] = bz[bV], bz[bV] = xG;
            }
        }
    }
    static['Zz'](bz, bj, ba = 0x0) {
        const Mc = uh;
        let bq = new k8(bz['Qw'](bj + Mc(0x2c9))),
            bT = new k8(bz['Qw'](Mc(0x13b)));
        bT['S'] = bq['oZ']();
        let bI = bT['oZ'](),
            bJ = bT['oZ'](),
            bV = bT['m'](),
            xG = new Int32Array(bV);
        for (let xy = 0x1; xy < bV; xy++) xG[xy] = bT['o7'](), 0x0 === xG[xy] && (xG[xy] = 0x1);
        for (let xz = 0x0; xz < ba; xz++) bT['S'] += 0x2, bq['S'] += bT['oZ']() * bT['oZ'](), bT['S'] += 0x1;
        if (bq['S'] > bq['oR'] || bT['S'] > bT['oR']) throw new Error();
        let xg = bT['m'](),
            xu = bT['m'](),
            xM = bT['oZ'](),
            xF = bT['oZ'](),
            xO = new XF(xM, xF, xG);
        xO['ZX'] = xg, xO['Zg'] = xu, xO['ZG'] = bI, xO['Zx'] = bJ;
        let xD = xO['Zw'],
            xC = bT['m']();
        if (0x0 === xC) {
            let xj = xO['ZR'] * xO['Zc'];
            for (let xa = 0x0; xa < xj; xa++) xD[xa] = bq['oo']();
        } else {
            if (0x1 === xC) {
                let {
                    ZR: xq,
                    Zc: xT
                } = xO;
                for (let xI = 0x0; xI < xq; xI++)
                    for (let xJ = 0x0; xJ < xT; xJ++) xD[xI + xJ * xq] = bq['oo']();
            }
        }
        return xO;
    }
    constructor(bz, bj, ba) {
        super(), this['Zw'] = new Int8Array(bz * bj), this['ZR'] = this['ZG'] = bz, this['Zc'] = this['Zx'] = bj, this['ZX'] = this['Zg'] = 0x0, this['Zu'] = ba;
    } ['Zj'](bz, bj) {
        bz |= 0x0, bj |= 0x0;
        let ba = (bz += this['ZX']) + (bj += this['Zg']) * Xu['ZR'],
            bq = 0x0,
            bT = this['Zc'],
            bI = this['ZR'],
            bJ = Xu['ZR'] - bI,
            bV = 0x0;
        if (bj < Xu['Zr']) {
            let xG = Xu['Zr'] - bj;
            bT -= xG, bj = Xu['Zr'], bq += xG * bI, ba += xG * Xu['ZR'];
        }
        if (bj + bT > Xu['Zh'] && (bT -= bj + bT - Xu['Zh']), bz < Xu['Zl']) {
            let xg = Xu['Zl'] - bz;
            bI -= xg, bz = Xu['Zl'], bq += xg, ba += xg, bV += xg, bJ += xg;
        }
        if (bz + bI > Xu['Zt']) {
            let xu = bz + bI - Xu['Zt'];
            bI -= xu, bV += xu, bJ += xu;
        }
        bI > 0x0 && bT > 0x0 && this['ZF'](bI, bT, this['Zw'], bq, bV, Xu['Zw'], ba, bJ);
    } ['Za']() {
        let bz = this['Zw'],
            bj = this['ZR'],
            ba = this['Zc'];
        for (let bq = 0x0; bq < (ba / 0x2 | 0x0); bq++)
            for (let bT = 0x0; bT < bj; bT++) {
                let bI = bT + bq * bj,
                    bJ = bT + (ba - bq - 0x1) * bj,
                    bV = bz[bI];
                bz[bI] = bz[bJ], bz[bJ] = bV;
            }
    }
}
class XO extends Xu {
    static['Zq'] = new kY(0x32, null);
    static['ZT'] = !0x1;
    static['ZI'] = !0x1;
    static['ZJ'] = new Int32Array(0x200);
    static['ZV'] = null;
    static['ZW'] = 0x0;
    static['ZS'] = new Int32Array(0x800);
    static['Zi'] = 0x0;
    static['Y0'] = new Int32Array(0x32);
    static['Y1'] = 0x0;
    static['oy'] = new Int32Array(0x800);
    static['Y2'] = new Int32Array(0x10000);
    static['Y3'] = new Int32Array(0x800);
    static['Y4'] = !0x1;
    static['Y5'] = 0x0;
    static['Y6'] = new kY(0x32, null);
    static['Y7'] = new kY(0x32, !0x1);
    static['Y8'] = new kY(0x32, null);
    static['Y9'] = 0x0;
    static['Yo'] = new Int32Array(0x32);
    static['YQ'] = !0x0;
    static['YZ'] = new Int32Array();
    static['YY'] = 0x0;
    static {
        for (let bz = 0x1; bz < 0x200; bz++) this['ZJ'][bz] = 0x8000 / bz | 0x0;
        for (let bj = 0x1; bj < 0x800; bj++) this['ZS'][bj] = 0x10000 / bj | 0x0;
        for (let ba = 0x0; ba < 0x800; ba++) this['oy'][ba] = 0x10000 * Math['sin'](0.0030679615757712823 * ba) | 0x0, this['Y3'][ba] = 0x10000 * Math[uh(0x15b)](0.0030679615757712823 * ba) | 0x0;
    }
    static['YE'](bz) {
        const Mr = uh;
        this['ZV'] || (this['ZW'] = bz, this['ZT'] ? this['ZV'] = new kd(bz, 0x4000) : this['ZV'] = new kd(bz, 0x10000), this['Zq'][Mr(0x2c0)](null));
    }
    static['Yd'](bz, bj, ba, bq, bT, bI, bJ, bV, xG, xg, xu, xM, xF, xO, xD) {
        if (bz >= bj) return;
        let xC, xy, xz, xj, xa, xq, xT, xI, xJ;
        if (this['ZI']) {
            if (xC = (xD - xO) / (bj - bz) | 0x0, bj > Xu['ZH'] && (bj = Xu['ZH']), bz < 0x0 && (xO -= bz * xC, bz = 0x0), bz >= bj) return;
            xy = bj - bz >> 0x3, xC <<= 0xc;
        } else bj - bz > 0x7 ? (xy = bj - bz >> 0x3, xC = (xD - xO) * this['ZJ'][xy] >> 0x6) : (xy = 0x0, xC = 0x0);
        if (xO <<= 0x9, bq += bz, this['ZT'] && bT) {
            if (xz = 0x0, xj = 0x0, xq = bz - this['YY'], bV += (xu >> 0x3) * xq, xG += (xM >> 0x3) * xq, xg += (xF >> 0x3) * xq, bV |= 0x0, xG |= 0x0, xa = (xg |= 0x0) >> 0xc, 0x0 !== xa && (bJ = xG / xa | 0x0, (bI = bV / xa | 0x0) < 0x0 ? bI = 0x0 : bI > 0xfc0 && (bI = 0xfc0)), bV += xu, xG += xM, xg += xF, bV |= 0x0, xG |= 0x0, xa = (xg |= 0x0) >> 0xc, 0x0 !== xa && (xz = bV / xa | 0x0, xj = xG / xa | 0x0, xz < 0x7 ? xz = 0x7 : xz > 0xfc0 && (xz = 0xfc0)), xT = xz - bI >> 0x3, xI = xj - bJ >> 0x3, bI += xO >> 0x3 & 0xc0000, xJ = xO >> 0x17, this['Y4']) {
                for (; xy-- > 0x0;) ba[bq++] = bT[(0xfc0 & bJ) + (bI >> 0x6)] >>> xJ, bI += xT, bJ += xI, ba[bq++] = bT[(0xfc0 & bJ) + (bI >> 0x6)] >>> xJ, bI += xT, bJ += xI, ba[bq++] = bT[(0xfc0 & bJ) + (bI >> 0x6)] >>> xJ, bI += xT, bJ += xI, ba[bq++] = bT[(0xfc0 & bJ) + (bI >> 0x6)] >>> xJ, bI += xT, bJ += xI, ba[bq++] = bT[(0xfc0 & bJ) + (bI >> 0x6)] >>> xJ, bI += xT, bJ += xI, ba[bq++] = bT[(0xfc0 & bJ) + (bI >> 0x6)] >>> xJ, bI += xT, bJ += xI, ba[bq++] = bT[(0xfc0 & bJ) + (bI >> 0x6)] >>> xJ, bI += xT, bJ += xI, ba[bq++] = bT[(0xfc0 & bJ) + (bI >> 0x6)] >>> xJ, bI = xz, bJ = xj, bV += xu, xG += xM, xa = (xg += xF) >> 0xc, 0x0 !== xa && (xz = bV / xa | 0x0, xj = xG / xa | 0x0, xz < 0x7 ? xz = 0x7 : xz > 0xfc0 && (xz = 0xfc0)), xT = xz - bI >> 0x3, xI = xj - bJ >> 0x3, bI += (xO += xC) >> 0x3 & 0xc0000, xJ = xO >> 0x17;
                for (xy = bj - bz & 0x7; xy-- > 0x0;) ba[bq++] = bT[(0xfc0 & bJ) + (bI >> 0x6)] >>> xJ, bI += xT, bJ += xI;
            } else {
                for (; xy-- > 0x0;) {
                    let xV;
                    0x0 != (xV = bT[(0xfc0 & bJ) + (bI >> 0x6)] >>> xJ) && (ba[bq] = xV), bq += 0x1, 0x0 != (xV = bT[(0xfc0 & (bJ += xI)) + ((bI += xT) >> 0x6)] >>> xJ) && (ba[bq] = xV), bq++, 0x0 != (xV = bT[(0xfc0 & (bJ += xI)) + ((bI += xT) >> 0x6)] >>> xJ) && (ba[bq] = xV), bq++, 0x0 != (xV = bT[(0xfc0 & (bJ += xI)) + ((bI += xT) >> 0x6)] >>> xJ) && (ba[bq] = xV), bq++, 0x0 != (xV = bT[(0xfc0 & (bJ += xI)) + ((bI += xT) >> 0x6)] >>> xJ) && (ba[bq] = xV), bq++, 0x0 != (xV = bT[(0xfc0 & (bJ += xI)) + ((bI += xT) >> 0x6)] >>> xJ) && (ba[bq] = xV), bq++, 0x0 != (xV = bT[(0xfc0 & (bJ += xI)) + ((bI += xT) >> 0x6)] >>> xJ) && (ba[bq] = xV), bq++, 0x0 != (xV = bT[(0xfc0 & (bJ += xI)) + ((bI += xT) >> 0x6)] >>> xJ) && (ba[bq] = xV), bq += 0x1, bI = xz, bJ = xj, bV += xu, xG += xM, xg += xF, bV |= 0x0, xG |= 0x0, xa = (xg |= 0x0) >> 0xc, 0x0 !== xa && (xz = bV / xa | 0x0, xj = xG / xa | 0x0, xz < 0x7 ? xz = 0x7 : xz > 0xfc0 && (xz = 0xfc0)), xT = xz - bI >> 0x3, xI = xj - bJ >> 0x3, bI += (xO += xC) >> 0x3 & 0xc0000, xJ = xO >> 0x17;
                }
                for (xy = bj - bz & 0x7; xy-- > 0x0;) {
                    let xW;
                    0x0 != (xW = bT[(0xfc0 & bJ) + (bI >> 0x6)] >>> xJ) && (ba[bq] = xW), bq++, bI += xT, bJ += xI;
                }
            }
        } else {
            if (xz = 0x0, xj = 0x0, xq = bz - this['YY'], bV += (xu >> 0x3) * xq, xG += (xM >> 0x3) * xq, xg += (xF >> 0x3) * xq, bV |= 0x0, xG |= 0x0, xa = (xg |= 0x0) >> 0xe, 0x0 !== xa && (bJ = xG / xa | 0x0, (bI = bV / xa | 0x0) < 0x0 ? bI = 0x0 : bI > 0x3f80 && (bI = 0x3f80)), bV += xu, xG += xM, xg += xF, bV |= 0x0, xG |= 0x0, xa = (xg |= 0x0) >> 0xe, 0x0 !== xa && (xz = bV / xa | 0x0, xj = xG / xa | 0x0, xz < 0x7 ? xz = 0x7 : xz > 0x3f80 && (xz = 0x3f80)), xT = xz - bI >> 0x3, xI = xj - bJ >> 0x3, bI += 0x600000 & xO, xJ = xO >> 0x17, this['Y4'] && bT) {
                for (; xy-- > 0x0;) ba[bq++] = bT[(0x3f80 & bJ) + (bI >> 0x7)] >>> xJ, bI += xT, bJ += xI, ba[bq++] = bT[(0x3f80 & bJ) + (bI >> 0x7)] >>> xJ, bI += xT, bJ += xI, ba[bq++] = bT[(0x3f80 & bJ) + (bI >> 0x7)] >>> xJ, bI += xT, bJ += xI, ba[bq++] = bT[(0x3f80 & bJ) + (bI >> 0x7)] >>> xJ, bI += xT, bJ += xI, ba[bq++] = bT[(0x3f80 & bJ) + (bI >> 0x7)] >>> xJ, bI += xT, bJ += xI, ba[bq++] = bT[(0x3f80 & bJ) + (bI >> 0x7)] >>> xJ, bI += xT, bJ += xI, ba[bq++] = bT[(0x3f80 & bJ) + (bI >> 0x7)] >>> xJ, bI += xT, bJ += xI, ba[bq++] = bT[(0x3f80 & bJ) + (bI >> 0x7)] >>> xJ, bI = xz, bJ = xj, bV += xu, xG += xM, xg += xF, bV |= 0x0, xG |= 0x0, xa = (xg |= 0x0) >> 0xe, 0x0 !== xa && (xz = bV / xa | 0x0, xj = xG / xa | 0x0, xz < 0x7 ? xz = 0x7 : xz > 0x3f80 && (xz = 0x3f80)), xT = xz - bI >> 0x3, xI = xj - bJ >> 0x3, bI += 0x600000 & (xO += xC), xJ = xO >> 0x17;
                for (xy = bj - bz & 0x7; xy-- > 0x0;) ba[bq++] = bT[(0x3f80 & bJ) + (bI >> 0x7)] >>> xJ, bI += xT, bJ += xI;
            } else {
                for (; xy-- > 0x0 && bT;) {
                    let xS;
                    0x0 != (xS = bT[(0x3f80 & bJ) + (bI >> 0x7)] >>> xJ) && (ba[bq] = xS), bq += 0x1, 0x0 != (xS = bT[(0x3f80 & (bJ += xI)) + ((bI += xT) >> 0x7)] >>> xJ) && (ba[bq] = xS), bq++, 0x0 != (xS = bT[(0x3f80 & (bJ += xI)) + ((bI += xT) >> 0x7)] >>> xJ) && (ba[bq] = xS), bq++, 0x0 != (xS = bT[(0x3f80 & (bJ += xI)) + ((bI += xT) >> 0x7)] >>> xJ) && (ba[bq] = xS), bq++, 0x0 != (xS = bT[(0x3f80 & (bJ += xI)) + ((bI += xT) >> 0x7)] >>> xJ) && (ba[bq] = xS), bq++, 0x0 != (xS = bT[(0x3f80 & (bJ += xI)) + ((bI += xT) >> 0x7)] >>> xJ) && (ba[bq] = xS), bq++, 0x0 != (xS = bT[(0x3f80 & (bJ += xI)) + ((bI += xT) >> 0x7)] >>> xJ) && (ba[bq] = xS), bq++, 0x0 != (xS = bT[(0x3f80 & (bJ += xI)) + ((bI += xT) >> 0x7)] >>> xJ) && (ba[bq] = xS), bq++, bI = xz, bJ = xj, bV += xu, xG += xM, xg += xF, bV |= 0x0, xG |= 0x0, xa = (xg |= 0x0) >> 0xe, 0x0 !== xa && (xz = bV / xa | 0x0, xj = xG / xa | 0x0, xz < 0x7 ? xz = 0x7 : xz > 0x3f80 && (xz = 0x3f80)), xT = xz - bI >> 0x3, xI = xj - bJ >> 0x3, bI += 0x600000 & (xO += xC), xJ = xO >> 0x17;
                }
                for (xy = bj - bz & 0x7; xy-- > 0x0 && bT;) {
                    let xi;
                    0x0 != (xi = bT[(0x3f80 & bJ) + (bI >> 0x7)] >>> xJ) && (ba[bq] = xi), bq++, bI += xT, bJ += xI;
                }
            }
        }
    }
    static['Yw'](bz) {
        if (this['Y0'][bz] = this['Y1']++, this['Zq'][bz]) return this['Zq'][bz];
        let bj;
        if (this['ZW'] > 0x0 && this['ZV']) bj = this['ZV'][--this['ZW']], this['ZV'][this['ZW']] = null;
        else {
            let bT = 0x0,
                bI = -0x1;
            for (let bJ = 0x0; bJ < this['Y9']; bJ++) this['Zq'][bJ] && (this['Y0'][bJ] < bT || -0x1 === bI) && (bT = this['Y0'][bJ], bI = bJ);
            bj = this['Zq'][bI], this['Zq'][bI] = null;
        }
        this['Zq'][bz] = bj;
        let ba = this['Y8'][bz],
            bq = this['Y6'][bz];
        if (!bj || !ba || !bq) return null;
        if (this['ZT']) {
            this['Y7'][bz] = !0x1;
            for (let bV = 0x0; bV < 0x1000; bV++) {
                let xG = bj[bV] = 0xf8f8ff & bq[ba['Zw'][bV]];
                0x0 === xG && (this['Y7'][bz] = !0x0), bj[bV + 0x1000] = xG - (xG >>> 0x3) & 0xf8f8ff, bj[bV + 0x2000] = xG - (xG >>> 0x2) & 0xf8f8ff, bj[bV + 0x3000] = xG - (xG >>> 0x2) - (xG >>> 0x3) & 0xf8f8ff;
            }
        } else {
            if (0x40 === ba['ZR']) {
                for (let xg = 0x0; xg < 0x80; xg++)
                    for (let xu = 0x0; xu < 0x80; xu++) bj[xu + (xg << 0x7)] = bq[ba['Zw'][(xu >> 0x1) + (xg >> 0x1 << 0x6)]];
            } else {
                for (let xM = 0x0; xM < 0x4000; xM++) bj[xM] = bq[ba['Zw'][xM]];
            }
            this['Y7'][bz] = !0x1;
            for (let xF = 0x0; xF < 0x4000; xF++) {
                bj[xF] &= 0xf8f8ff;
                let xO = bj[xF];
                0x0 === xO && (this['Y7'][bz] = !0x0), bj[xF + 0x4000] = xO - (xO >>> 0x3) & 0xf8f8ff, bj[xF + 0x8000] = xO - (xO >>> 0x2) & 0xf8f8ff, bj[xF + 0xc000] = xO - (xO >>> 0x2) - (xO >>> 0x3) & 0xf8f8ff;
            }
        }
        return bj;
    }
    static['YR'](bz, bj, ba, bq, bT, bI, bJ, bV, xG, xg, xu, xM, xF, xO, xD, xC, xy, xz, xj) {
        let xa = this['Yw'](xj);
        this['Y4'] = !this['Y7'][xj];
        let xq = xg - xF,
            xT = xu - xD,
            xI = xM - xy,
            xJ = xO - xg,
            xV = xC - xu,
            xW = xz - xM,
            xS = xJ * xu - xV * xg << 0xe,
            xi = xV * xM - xW * xu << 0x8,
            G0 = xW * xg - xJ * xM << 0x5,
            G1 = xq * xu - xT * xg << 0xe,
            G2 = xT * xM - xI * xu << 0x8,
            G3 = xI * xg - xq * xM << 0x5,
            G4 = xT * xJ - xq * xV << 0xe,
            G5 = xI * xV - xT * xW << 0x8,
            G6 = xq * xW - xI * xJ << 0x5,
            G7 = 0x0,
            G8 = 0x0;
        bT !== bq && (G7 = (bj - bz << 0x10) / (bT - bq) | 0x0, G8 = (bV - bJ << 0x10) / (bT - bq) | 0x0);
        let G9 = 0x0,
            Go = 0x0;
        bI !== bT && (G9 = (ba - bj << 0x10) / (bI - bT) | 0x0, Go = (xG - bV << 0x10) / (bI - bT) | 0x0);
        let GQ = 0x0,
            GZ = 0x0;
        if (bI !== bq && (GQ = (bz - ba << 0x10) / (bq - bI) | 0x0, GZ = (bJ - xG << 0x10) / (bq - bI) | 0x0), bq <= bT && bq <= bI) {
            if (bq < Xu['Zh']) {
                if (bT > Xu['Zh'] && (bT = Xu['Zh']), bI > Xu['Zh'] && (bI = Xu['Zh']), bT < bI) {
                    ba = bz <<= 0x10, xG = bJ <<= 0x10, bq < 0x0 && (ba -= GQ * bq, bz -= G7 * bq, xG -= GZ * bq, bJ -= G8 * bq, bq = 0x0), bj <<= 0x10, bV <<= 0x10, bT < 0x0 && (bj -= G9 * bT, bV -= Go * bT, bT = 0x0);
                    let GY = bq - this['Y5'];
                    if (xS += G0 * GY, G1 += G3 * GY, G4 += G6 * GY, xS |= 0x0, G1 |= 0x0, G4 |= 0x0, bq !== bT && GQ < G7 || bq === bT && GQ > G9)
                        for (bI -= bT, bT -= bq, bq = this['YZ'][bq];;) {
                            if (--bT < 0x0)
                                for (;;) {
                                    if (--bI < 0x0) return;
                                    this['Yd'](ba >> 0x10, bj >> 0x10, Xu['Zw'], bq, xa, 0x0, 0x0, xS, G1, G4, xi, G2, G5, xG >> 0x8, bV >> 0x8), ba += GQ, bj += G9, xG += GZ, bV += Go, bq += Xu['ZR'], xS += G0, G1 += G3, G4 += G6, xS |= 0x0, G1 |= 0x0, G4 |= 0x0;
                                }
                            this['Yd'](ba >> 0x10, bz >> 0x10, Xu['Zw'], bq, xa, 0x0, 0x0, xS, G1, G4, xi, G2, G5, xG >> 0x8, bJ >> 0x8), ba += GQ, bz += G7, xG += GZ, bJ += G8, bq += Xu['ZR'], xS += G0, G1 += G3, G4 += G6, xS |= 0x0, G1 |= 0x0, G4 |= 0x0;
                        } else
                            for (bI -= bT, bT -= bq, bq = this['YZ'][bq];;) {
                                if (--bT < 0x0)
                                    for (;;) {
                                        if (--bI < 0x0) return;
                                        this['Yd'](bj >> 0x10, ba >> 0x10, Xu['Zw'], bq, xa, 0x0, 0x0, xS, G1, G4, xi, G2, G5, bV >> 0x8, xG >> 0x8), ba += GQ, bj += G9, xG += GZ, bV += Go, bq += Xu['ZR'], xS += G0, G1 += G3, G4 += G6, xS |= 0x0, G1 |= 0x0, G4 |= 0x0;
                                    }
                                this['Yd'](bz >> 0x10, ba >> 0x10, Xu['Zw'], bq, xa, 0x0, 0x0, xS, G1, G4, xi, G2, G5, bJ >> 0x8, xG >> 0x8), ba += GQ, bz += G7, xG += GZ, bJ += G8, bq += Xu['ZR'], xS += G0, G1 += G3, G4 += G6, xS |= 0x0, G1 |= 0x0, G4 |= 0x0;
                            }
                } else {
                    bj = bz <<= 0x10, bV = bJ <<= 0x10, bq < 0x0 && (bj -= GQ * bq, bz -= G7 * bq, bV -= GZ * bq, bJ -= G8 * bq, bq = 0x0), ba <<= 0x10, xG <<= 0x10, bI < 0x0 && (ba -= G9 * bI, xG -= Go * bI, bI = 0x0);
                    let GE = bq - this['Y5'];
                    if (xS += G0 * GE, G1 += G3 * GE, G4 += G6 * GE, xS |= 0x0, G1 |= 0x0, G4 |= 0x0, (bq === bI || GQ >= G7) && (bq !== bI || G9 <= G7))
                        for (bT -= bI, bI -= bq, bq = this['YZ'][bq];;) {
                            if (--bI < 0x0)
                                for (;;) {
                                    if (--bT < 0x0) return;
                                    this['Yd'](bz >> 0x10, ba >> 0x10, Xu['Zw'], bq, xa, 0x0, 0x0, xS, G1, G4, xi, G2, G5, bJ >> 0x8, xG >> 0x8), ba += G9, bz += G7, xG += Go, bJ += G8, bq += Xu['ZR'], xS += G0, G1 += G3, G4 += G6, xS |= 0x0, G1 |= 0x0, G4 |= 0x0;
                                }
                            this['Yd'](bz >> 0x10, bj >> 0x10, Xu['Zw'], bq, xa, 0x0, 0x0, xS, G1, G4, xi, G2, G5, bJ >> 0x8, bV >> 0x8), bj += GQ, bz += G7, bV += GZ, bJ += G8, bq += Xu['ZR'], xS += G0, G1 += G3, G4 += G6, xS |= 0x0, G1 |= 0x0, G4 |= 0x0;
                        } else
                            for (bT -= bI, bI -= bq, bq = this['YZ'][bq];;) {
                                if (--bI < 0x0)
                                    for (;;) {
                                        if (--bT < 0x0) return;
                                        this['Yd'](ba >> 0x10, bz >> 0x10, Xu['Zw'], bq, xa, 0x0, 0x0, xS, G1, G4, xi, G2, G5, xG >> 0x8, bJ >> 0x8), ba += G9, bz += G7, xG += Go, bJ += G8, bq += Xu['ZR'], xS += G0, G1 += G3, G4 += G6, xS |= 0x0, G1 |= 0x0, G4 |= 0x0;
                                    }
                                this['Yd'](bj >> 0x10, bz >> 0x10, Xu['Zw'], bq, xa, 0x0, 0x0, xS, G1, G4, xi, G2, G5, bV >> 0x8, bJ >> 0x8), bj += GQ, bz += G7, bV += GZ, bJ += G8, bq += Xu['ZR'], xS += G0, G1 += G3, G4 += G6, xS |= 0x0, G1 |= 0x0, G4 |= 0x0;
                            }
                }
            }
        } else {
            if (bT <= bI) {
                if (bT < Xu['Zh']) {
                    if (bI > Xu['Zh'] && (bI = Xu['Zh']), bq > Xu['Zh'] && (bq = Xu['Zh']), bI < bq) {
                        bz = bj <<= 0x10, bJ = bV <<= 0x10, bT < 0x0 && (bz -= G7 * bT, bj -= G9 * bT, bJ -= G8 * bT, bV -= Go * bT, bT = 0x0), ba <<= 0x10, xG <<= 0x10, bI < 0x0 && (ba -= GQ * bI, xG -= GZ * bI, bI = 0x0);
                        let Gd = bT - this['Y5'];
                        if (xS += G0 * Gd, G1 += G3 * Gd, G4 += G6 * Gd, xS |= 0x0, G1 |= 0x0, G4 |= 0x0, bT !== bI && G7 < G9 || bT === bI && G7 > GQ)
                            for (bq -= bI, bI -= bT, bT = this['YZ'][bT];;) {
                                if (--bI < 0x0)
                                    for (;;) {
                                        if (--bq < 0x0) return;
                                        this['Yd'](bz >> 0x10, ba >> 0x10, Xu['Zw'], bT, xa, 0x0, 0x0, xS, G1, G4, xi, G2, G5, bJ >> 0x8, xG >> 0x8), bz += G7, ba += GQ, bJ += G8, xG += GZ, bT += Xu['ZR'], xS += G0, G1 += G3, G4 += G6, xS |= 0x0, G1 |= 0x0, G4 |= 0x0;
                                    }
                                this['Yd'](bz >> 0x10, bj >> 0x10, Xu['Zw'], bT, xa, 0x0, 0x0, xS, G1, G4, xi, G2, G5, bJ >> 0x8, bV >> 0x8), bz += G7, bj += G9, bJ += G8, bV += Go, bT += Xu['ZR'], xS += G0, G1 += G3, G4 += G6, xS |= 0x0, G1 |= 0x0, G4 |= 0x0;
                            } else
                                for (bq -= bI, bI -= bT, bT = this['YZ'][bT];;) {
                                    if (--bI < 0x0)
                                        for (;;) {
                                            if (--bq < 0x0) return;
                                            this['Yd'](ba >> 0x10, bz >> 0x10, Xu['Zw'], bT, xa, 0x0, 0x0, xS, G1, G4, xi, G2, G5, xG >> 0x8, bJ >> 0x8), bz += G7, ba += GQ, bJ += G8, xG += GZ, bT += Xu['ZR'], xS += G0, G1 += G3, G4 += G6, xS |= 0x0, G1 |= 0x0, G4 |= 0x0;
                                        }
                                    this['Yd'](bj >> 0x10, bz >> 0x10, Xu['Zw'], bT, xa, 0x0, 0x0, xS, G1, G4, xi, G2, G5, bV >> 0x8, bJ >> 0x8), bz += G7, bj += G9, bJ += G8, bV += Go, bT += Xu['ZR'], xS += G0, G1 += G3, G4 += G6, xS |= 0x0, G1 |= 0x0, G4 |= 0x0;
                                }
                    } else {
                        ba = bj <<= 0x10, xG = bV <<= 0x10, bT < 0x0 && (ba -= G7 * bT, bj -= G9 * bT, xG -= G8 * bT, bV -= Go * bT, bT = 0x0), bz <<= 0x10, bJ <<= 0x10, bq < 0x0 && (bz -= GQ * bq, bJ -= GZ * bq, bq = 0x0);
                        let Gw = bT - this['Y5'];
                        if (xS += G0 * Gw, G1 += G3 * Gw, G4 += G6 * Gw, xS |= 0x0, G1 |= 0x0, G4 |= 0x0, bI -= bq, bq -= bT, bT = this['YZ'][bT], G7 < G9)
                            for (;;) {
                                if (--bq < 0x0)
                                    for (;;) {
                                        if (--bI < 0x0) return;
                                        this['Yd'](bz >> 0x10, bj >> 0x10, Xu['Zw'], bT, xa, 0x0, 0x0, xS, G1, G4, xi, G2, G5, bJ >> 0x8, bV >> 0x8), bz += GQ, bj += G9, bJ += GZ, bV += Go, bT += Xu['ZR'], xS += G0, G1 += G3, G4 += G6, xS |= 0x0, G1 |= 0x0, G4 |= 0x0;
                                    }
                                this['Yd'](ba >> 0x10, bj >> 0x10, Xu['Zw'], bT, xa, 0x0, 0x0, xS, G1, G4, xi, G2, G5, xG >> 0x8, bV >> 0x8), ba += G7, bj += G9, xG += G8, bV += Go, bT += Xu['ZR'], xS += G0, G1 += G3, G4 += G6, xS |= 0x0, G1 |= 0x0, G4 |= 0x0;
                            } else
                                for (;;) {
                                    if (--bq < 0x0)
                                        for (;;) {
                                            if (--bI < 0x0) return;
                                            this['Yd'](bj >> 0x10, bz >> 0x10, Xu['Zw'], bT, xa, 0x0, 0x0, xS, G1, G4, xi, G2, G5, bV >> 0x8, bJ >> 0x8), bz += GQ, bj += G9, bJ += GZ, bV += Go, bT += Xu['ZR'], xS += G0, G1 += G3, G4 += G6, xS |= 0x0, G1 |= 0x0, G4 |= 0x0;
                                        }
                                    this['Yd'](bj >> 0x10, ba >> 0x10, Xu['Zw'], bT, xa, 0x0, 0x0, xS, G1, G4, xi, G2, G5, bV >> 0x8, xG >> 0x8), ba += G7, bj += G9, xG += G8, bV += Go, bT += Xu['ZR'], xS += G0, G1 += G3, G4 += G6, xS |= 0x0, G1 |= 0x0, G4 |= 0x0;
                                }
                    }
                }
            } else {
                if (bI < Xu['Zh']) {
                    if (bq > Xu['Zh'] && (bq = Xu['Zh']), bT > Xu['Zh'] && (bT = Xu['Zh']), bq < bT) {
                        bj = ba <<= 0x10, bV = xG <<= 0x10, bI < 0x0 && (bj -= G9 * bI, ba -= GQ * bI, bV -= Go * bI, xG -= GZ * bI, bI = 0x0), bz <<= 0x10, bJ <<= 0x10, bq < 0x0 && (bz -= G7 * bq, bJ -= G8 * bq, bq = 0x0);
                        let GR = bI - this['Y5'];
                        if (xS += G0 * GR, G1 += G3 * GR, G4 += G6 * GR, xS |= 0x0, G1 |= 0x0, G4 |= 0x0, bT -= bq, bq -= bI, bI = this['YZ'][bI], G9 < GQ)
                            for (;;) {
                                if (--bq < 0x0)
                                    for (;;) {
                                        if (--bT < 0x0) return;
                                        this['Yd'](bj >> 0x10, bz >> 0x10, Xu['Zw'], bI, xa, 0x0, 0x0, xS, G1, G4, xi, G2, G5, bV >> 0x8, bJ >> 0x8), bj += G9, bz += G7, bV += Go, bJ += G8, bI += Xu['ZR'], xS += G0, G1 += G3, G4 += G6, xS |= 0x0, G1 |= 0x0, G4 |= 0x0;
                                    }
                                this['Yd'](bj >> 0x10, ba >> 0x10, Xu['Zw'], bI, xa, 0x0, 0x0, xS, G1, G4, xi, G2, G5, bV >> 0x8, xG >> 0x8), bj += G9, ba += GQ, bV += Go, xG += GZ, bI += Xu['ZR'], xS += G0, G1 += G3, G4 += G6, xS |= 0x0, G1 |= 0x0, G4 |= 0x0;
                            } else
                                for (;;) {
                                    if (--bq < 0x0)
                                        for (;;) {
                                            if (--bT < 0x0) return;
                                            this['Yd'](bz >> 0x10, bj >> 0x10, Xu['Zw'], bI, xa, 0x0, 0x0, xS, G1, G4, xi, G2, G5, bJ >> 0x8, bV >> 0x8), bj += G9, bz += G7, bV += Go, bJ += G8, bI += Xu['ZR'], xS += G0, G1 += G3, G4 += G6, xS |= 0x0, G1 |= 0x0, G4 |= 0x0;
                                        }
                                    this['Yd'](ba >> 0x10, bj >> 0x10, Xu['Zw'], bI, xa, 0x0, 0x0, xS, G1, G4, xi, G2, G5, xG >> 0x8, bV >> 0x8), bj += G9, ba += GQ, bV += Go, xG += GZ, bI += Xu['ZR'], xS += G0, G1 += G3, G4 += G6, xS |= 0x0, G1 |= 0x0, G4 |= 0x0;
                                }
                    } else {
                        bz = ba <<= 0x10, bJ = xG <<= 0x10, bI < 0x0 && (bz -= G9 * bI, ba -= GQ * bI, bJ -= Go * bI, xG -= GZ * bI, bI = 0x0), bj <<= 0x10, bV <<= 0x10, bT < 0x0 && (bj -= G7 * bT, bV -= G8 * bT, bT = 0x0);
                        let Gt = bI - this['Y5'];
                        if (xS += G0 * Gt, G1 += G3 * Gt, G4 += G6 * Gt, xS |= 0x0, G1 |= 0x0, G4 |= 0x0, bq -= bT, bT -= bI, bI = this['YZ'][bI], G9 < GQ)
                            for (;;) {
                                if (--bT < 0x0)
                                    for (;;) {
                                        if (--bq < 0x0) return;
                                        this['Yd'](bj >> 0x10, ba >> 0x10, Xu['Zw'], bI, xa, 0x0, 0x0, xS, G1, G4, xi, G2, G5, bV >> 0x8, xG >> 0x8), bj += G7, ba += GQ, bV += G8, xG += GZ, bI += Xu['ZR'], xS += G0, G1 += G3, G4 += G6, xS |= 0x0, G1 |= 0x0, G4 |= 0x0;
                                    }
                                this['Yd'](bz >> 0x10, ba >> 0x10, Xu['Zw'], bI, xa, 0x0, 0x0, xS, G1, G4, xi, G2, G5, bJ >> 0x8, xG >> 0x8), bz += G9, ba += GQ, bJ += Go, xG += GZ, bI += Xu['ZR'], xS += G0, G1 += G3, G4 += G6, xS |= 0x0, G1 |= 0x0, G4 |= 0x0;
                            } else
                                for (;;) {
                                    if (--bT < 0x0)
                                        for (;;) {
                                            if (--bq < 0x0) return;
                                            this['Yd'](ba >> 0x10, bj >> 0x10, Xu['Zw'], bI, xa, 0x0, 0x0, xS, G1, G4, xi, G2, G5, xG >> 0x8, bV >> 0x8), bj += G7, ba += GQ, bV += G8, xG += GZ, bI += Xu['ZR'], xS += G0, G1 += G3, G4 += G6, xS |= 0x0, G1 |= 0x0, G4 |= 0x0;
                                        }
                                    this['Yd'](ba >> 0x10, bz >> 0x10, Xu['Zw'], bI, xa, 0x0, 0x0, xS, G1, G4, xi, G2, G5, xG >> 0x8, bJ >> 0x8), bz += G9, ba += GQ, bJ += Go, xG += GZ, bI += Xu['ZR'], xS += G0, G1 += G3, G4 += G6, xS |= 0x0, G1 |= 0x0, G4 |= 0x0;
                                }
                    }
                }
            }
        }
    }
    static['Yt'](bz) {
        const MH = uh;
        if (0x0 !== this['Yo'][bz]) return this['Yo'][bz];
        let bj = this['Y6'][bz];
        if (!bj) return 0x0;
        let ba = 0x0,
            bq = 0x0,
            bT = 0x0,
            bI = bj[MH(0x2ea)];
        for (let bV = 0x0; bV < bI; bV++) ba += bj[bV] >> 0x10 & 0xff, bq += bj[bV] >> 0x8 & 0xff, bT += 0xff & bj[bV];
        let bJ = (ba / bI << 0x10) + (bq / bI << 0x8) + (bT / bI | 0x0);
        return bJ = this['Yc'](bJ, 1.4), 0x0 === bJ && (bJ = 0x1), this['Yo'][bz] = bJ, bJ;
    }
    static['Yc'](bz, bj) {
        const MP = uh;
        let ba = (bz >> 0x10) / 0x100,
            bq = (bz >> 0x8 & 0xff) / 0x100,
            bT = (0xff & bz) / 0x100;
        return ((0x100 * Math['pow'](ba, bj) | 0x0) << 0x10) + ((0x100 * Math[MP(0x212)](bq, bj) | 0x0) << 0x8) + (0x100 * Math[MP(0x212)](bT, bj) | 0x0);
    }
    static['Yr'](bz, bj, ba, bq, bT, bI, bJ) {
        let bV = 0x0;
        bT !== bq && (bV = (bj - bz << 0x10) / (bT - bq) | 0x0);
        let xG = 0x0;
        bI !== bT && (xG = (ba - bj << 0x10) / (bI - bT) | 0x0);
        let xg = 0x0;
        if (bI !== bq && (xg = (bz - ba << 0x10) / (bq - bI) | 0x0), bq <= bT && bq <= bI) {
            if (bq < Xu['Zh']) {
                if (bT > Xu['Zh'] && (bT = Xu['Zh']), bI > Xu['Zh'] && (bI = Xu['Zh']), bT < bI) {
                    if (ba = bz <<= 0x10, bq < 0x0 && (ba -= xg * bq, bz -= bV * bq, bq = 0x0), bj <<= 0x10, bT < 0x0 && (bj -= xG * bT, bT = 0x0), bq !== bT && xg < bV || bq === bT && xg > xG)
                        for (bI -= bT, bT -= bq, bq = this['YZ'][bq];;) {
                            if (--bT < 0x0)
                                for (;;) {
                                    if (--bI < 0x0) return;
                                    this['YH'](ba >> 0x10, bj >> 0x10, Xu['Zw'], bq, bJ), ba += xg, bj += xG, bq += Xu['ZR'];
                                }
                            this['YH'](ba >> 0x10, bz >> 0x10, Xu['Zw'], bq, bJ), ba += xg, bz += bV, bq += Xu['ZR'];
                        } else
                            for (bI -= bT, bT -= bq, bq = this['YZ'][bq];;) {
                                if (--bT < 0x0)
                                    for (;;) {
                                        if (--bI < 0x0) return;
                                        this['YH'](bj >> 0x10, ba >> 0x10, Xu['Zw'], bq, bJ), ba += xg, bj += xG, bq += Xu['ZR'];
                                    }
                                this['YH'](bz >> 0x10, ba >> 0x10, Xu['Zw'], bq, bJ), ba += xg, bz += bV, bq += Xu['ZR'];
                            }
                } else {
                    if (bj = bz <<= 0x10, bq < 0x0 && (bj -= xg * bq, bz -= bV * bq, bq = 0x0), ba <<= 0x10, bI < 0x0 && (ba -= xG * bI, bI = 0x0), bq !== bI && xg < bV || bq === bI && xG > bV)
                        for (bT -= bI, bI -= bq, bq = this['YZ'][bq];;) {
                            if (--bI < 0x0)
                                for (;;) {
                                    if (--bT < 0x0) return;
                                    this['YH'](ba >> 0x10, bz >> 0x10, Xu['Zw'], bq, bJ), ba += xG, bz += bV, bq += Xu['ZR'];
                                }
                            this['YH'](bj >> 0x10, bz >> 0x10, Xu['Zw'], bq, bJ), bj += xg, bz += bV, bq += Xu['ZR'];
                        } else
                            for (bT -= bI, bI -= bq, bq = this['YZ'][bq];;) {
                                if (--bI < 0x0)
                                    for (;;) {
                                        if (--bT < 0x0) return;
                                        this['YH'](bz >> 0x10, ba >> 0x10, Xu['Zw'], bq, bJ), ba += xG, bz += bV, bq += Xu['ZR'];
                                    }
                                this['YH'](bz >> 0x10, bj >> 0x10, Xu['Zw'], bq, bJ), bj += xg, bz += bV, bq += Xu['ZR'];
                            }
                }
            }
        } else {
            if (bT <= bI) {
                if (bT < Xu['Zh']) {
                    if (bI > Xu['Zh'] && (bI = Xu['Zh']), bq > Xu['Zh'] && (bq = Xu['Zh']), bI < bq) {
                        if (bz = bj <<= 0x10, bT < 0x0 && (bz -= bV * bT, bj -= xG * bT, bT = 0x0), ba <<= 0x10, bI < 0x0 && (ba -= xg * bI, bI = 0x0), bT !== bI && bV < xG || bT === bI && bV > xg)
                            for (bq -= bI, bI -= bT, bT = this['YZ'][bT];;) {
                                if (--bI < 0x0)
                                    for (;;) {
                                        if (--bq < 0x0) return;
                                        this['YH'](bz >> 0x10, ba >> 0x10, Xu['Zw'], bT, bJ), bz += bV, ba += xg, bT += Xu['ZR'];
                                    }
                                this['YH'](bz >> 0x10, bj >> 0x10, Xu['Zw'], bT, bJ), bz += bV, bj += xG, bT += Xu['ZR'];
                            } else
                                for (bq -= bI, bI -= bT, bT = this['YZ'][bT];;) {
                                    if (--bI < 0x0)
                                        for (;;) {
                                            if (--bq < 0x0) return;
                                            this['YH'](ba >> 0x10, bz >> 0x10, Xu['Zw'], bT, bJ), bz += bV, ba += xg, bT += Xu['ZR'];
                                        }
                                    this['YH'](bj >> 0x10, bz >> 0x10, Xu['Zw'], bT, bJ), bz += bV, bj += xG, bT += Xu['ZR'];
                                }
                    } else {
                        if (ba = bj <<= 0x10, bT < 0x0 && (ba -= bV * bT, bj -= xG * bT, bT = 0x0), bz <<= 0x10, bq < 0x0 && (bz -= xg * bq, bq = 0x0), bV < xG)
                            for (bI -= bq, bq -= bT, bT = this['YZ'][bT];;) {
                                if (--bq < 0x0)
                                    for (;;) {
                                        if (--bI < 0x0) return;
                                        this['YH'](bz >> 0x10, bj >> 0x10, Xu['Zw'], bT, bJ), bz += xg, bj += xG, bT += Xu['ZR'];
                                    }
                                this['YH'](ba >> 0x10, bj >> 0x10, Xu['Zw'], bT, bJ), ba += bV, bj += xG, bT += Xu['ZR'];
                            } else
                                for (bI -= bq, bq -= bT, bT = this['YZ'][bT];;) {
                                    if (--bq < 0x0)
                                        for (;;) {
                                            if (--bI < 0x0) return;
                                            this['YH'](bj >> 0x10, bz >> 0x10, Xu['Zw'], bT, bJ), bz += xg, bj += xG, bT += Xu['ZR'];
                                        }
                                    this['YH'](bj >> 0x10, ba >> 0x10, Xu['Zw'], bT, bJ), ba += bV, bj += xG, bT += Xu['ZR'];
                                }
                    }
                }
            } else {
                if (bI < Xu['Zh']) {
                    if (bq > Xu['Zh'] && (bq = Xu['Zh']), bT > Xu['Zh'] && (bT = Xu['Zh']), bq < bT) {
                        if (bj = ba <<= 0x10, bI < 0x0 && (bj -= xG * bI, ba -= xg * bI, bI = 0x0), bz <<= 0x10, bq < 0x0 && (bz -= bV * bq, bq = 0x0), xG < xg)
                            for (bT -= bq, bq -= bI, bI = this['YZ'][bI];;) {
                                if (--bq < 0x0)
                                    for (;;) {
                                        if (--bT < 0x0) return;
                                        this['YH'](bj >> 0x10, bz >> 0x10, Xu['Zw'], bI, bJ), bj += xG, bz += bV, bI += Xu['ZR'];
                                    }
                                this['YH'](bj >> 0x10, ba >> 0x10, Xu['Zw'], bI, bJ), bj += xG, ba += xg, bI += Xu['ZR'];
                            } else
                                for (bT -= bq, bq -= bI, bI = this['YZ'][bI];;) {
                                    if (--bq < 0x0)
                                        for (;;) {
                                            if (--bT < 0x0) return;
                                            this['YH'](bz >> 0x10, bj >> 0x10, Xu['Zw'], bI, bJ), bj += xG, bz += bV, bI += Xu['ZR'];
                                        }
                                    this['YH'](ba >> 0x10, bj >> 0x10, Xu['Zw'], bI, bJ), bj += xG, ba += xg, bI += Xu['ZR'];
                                }
                    } else {
                        if (bz = ba <<= 0x10, bI < 0x0 && (bz -= xG * bI, ba -= xg * bI, bI = 0x0), bj <<= 0x10, bT < 0x0 && (bj -= bV * bT, bT = 0x0), xG < xg)
                            for (bq -= bT, bT -= bI, bI = this['YZ'][bI];;) {
                                if (--bT < 0x0)
                                    for (;;) {
                                        if (--bq < 0x0) return;
                                        this['YH'](bj >> 0x10, ba >> 0x10, Xu['Zw'], bI, bJ), bj += bV, ba += xg, bI += Xu['ZR'];
                                    }
                                this['YH'](bz >> 0x10, ba >> 0x10, Xu['Zw'], bI, bJ), bz += xG, ba += xg, bI += Xu['ZR'];
                            } else
                                for (bq -= bT, bT -= bI, bI = this['YZ'][bI];;) {
                                    if (--bT < 0x0)
                                        for (;;) {
                                            if (--bq < 0x0) return;
                                            this['YH'](ba >> 0x10, bj >> 0x10, Xu['Zw'], bI, bJ), bj += bV, ba += xg, bI += Xu['ZR'];
                                        }
                                    this['YH'](ba >> 0x10, bz >> 0x10, Xu['Zw'], bI, bJ), bz += xG, ba += xg, bI += Xu['ZR'];
                                }
                    }
                }
            }
        }
    }
    static['YP'](bz, bj, ba, bq, bT, bI, bJ) {
        let bV;
        if (XO['YQ']) {
            let xG;
            if (XO['ZI']) {
                if (xG = bj - bz > 0x3 ? (bq - ba) / (bj - bz) | 0x0 : 0x0, bj > Xu['ZH'] && (bj = Xu['ZH']), bz < 0x0 && (ba -= bz * xG, bz = 0x0), bz >= bj) return;
                bI += bz, bJ = bj - bz >> 0x2, xG <<= 0x2;
            } else {
                if (!(bz < bj)) return;
                bI += bz, xG = (bJ = bj - bz >> 0x2) > 0x0 ? (bq - ba) * XO['ZJ'][bJ] >> 0xf : 0x0;
            }
            if (0x0 === XO['Zi'])
                for (;;) {
                    if (--bJ < 0x0) {
                        if ((bJ = bj - bz & 0x3) > 0x0) {
                            bV = XO['Y2'][ba >> 0x8];
                            do {
                                bT[bI++] = bV, bJ--;
                            } while (bJ > 0x0);
                            return;
                        }
                        break;
                    }
                    bV = XO['Y2'][ba >> 0x8], ba += xG, bT[bI++] = bV, bT[bI++] = bV, bT[bI++] = bV, bT[bI++] = bV;
                } else {
                    let xg = XO['Zi'],
                        xu = 0x100 - XO['Zi'];
                    for (;;) {
                        if (--bJ < 0x0) {
                            if ((bJ = bj - bz & 0x3) > 0x0) {
                                bV = XO['Y2'][ba >> 0x8], bV = ((0xff00ff & bV) * xu >> 0x8 & 0xff00ff) + ((0xff00 & bV) * xu >> 0x8 & 0xff00);
                                do {
                                    bT[bI++] = bV + ((0xff00ff & bT[bI]) * xg >> 0x8 & 0xff00ff) + ((0xff00 & bT[bI]) * xg >> 0x8 & 0xff00), bJ--;
                                } while (bJ > 0x0);
                            }
                            break;
                        }
                        bV = XO['Y2'][ba >> 0x8], ba += xG, bV = ((0xff00ff & bV) * xu >> 0x8 & 0xff00ff) + ((0xff00 & bV) * xu >> 0x8 & 0xff00), bT[bI++] = bV + ((0xff00ff & bT[bI]) * xg >> 0x8 & 0xff00ff) + ((0xff00 & bT[bI]) * xg >> 0x8 & 0xff00), bT[bI++] = bV + ((0xff00ff & bT[bI]) * xg >> 0x8 & 0xff00ff) + ((0xff00 & bT[bI]) * xg >> 0x8 & 0xff00), bT[bI++] = bV + ((0xff00ff & bT[bI]) * xg >> 0x8 & 0xff00ff) + ((0xff00 & bT[bI]) * xg >> 0x8 & 0xff00), bT[bI++] = bV + ((0xff00ff & bT[bI]) * xg >> 0x8 & 0xff00ff) + ((0xff00 & bT[bI]) * xg >> 0x8 & 0xff00);
                    }
                }
        } else {
            if (bz < bj) {
                let xM = (bq - ba) / (bj - bz) | 0x0;
                if (XO['ZI'] && (bj > Xu['ZH'] && (bj = Xu['ZH']), bz < 0x0 && (ba -= bz * xM, bz = 0x0), bz >= bj)) return;
                if (bI += bz, bJ = bj - bz, 0x0 === XO['Zi'])
                    do {
                        bT[bI++] = XO['Y2'][ba >> 0x8], ba += xM, bJ--;
                    } while (bJ > 0x0);
                else {
                    let xF = XO['Zi'],
                        xO = 0x100 - XO['Zi'];
                    do {
                        bV = XO['Y2'][ba >> 0x8], ba += xM, bV = ((0xff00ff & bV) * xO >> 0x8 & 0xff00ff) + ((0xff00 & bV) * xO >> 0x8 & 0xff00), bT[bI++] = bV + ((0xff00ff & bT[bI]) * xF >> 0x8 & 0xff00ff) + ((0xff00 & bT[bI]) * xF >> 0x8 & 0xff00), bJ--;
                    } while (bJ > 0x0);
                }
            }
        }
    }
    static['Yp'](bz) {
        const Mp = uh;
        let bj = bz + 0.03 * Math['random']() - 0.015,
            ba = 0x0;
        for (let bq = 0x0; bq < 0x200; bq++) {
            let bT = (bq / 0x8 | 0x0) / 0x40 + 0.0078125,
                bI = (0x7 & bq) / 0x8 + 0.0625;
            for (let bJ = 0x0; bJ < 0x80; bJ++) {
                let bV = bJ / 0x80,
                    xG = bV,
                    xg = bV,
                    xu = bV;
                if (0x0 !== bI) {
                    let xF;
                    xF = bV < 0.5 ? bV * (bI + 0x1) : bV + bI - bV * bI;
                    let xO = 0x2 * bV - xF,
                        xD = bT + 0.3333333333333333;
                    xD > 0x1 && xD--;
                    let xC = bT - 0.3333333333333333;
                    xC < 0x0 && xC++, xG = 0x6 * xD < 0x1 ? xO + 0x6 * (xF - xO) * xD : 0x2 * xD < 0x1 ? xF : 0x3 * xD < 0x2 ? xO + (xF - xO) * (0.6666666666666666 - xD) * 0x6 : xO, xg = 0x6 * bT < 0x1 ? xO + 0x6 * (xF - xO) * bT : 0x2 * bT < 0x1 ? xF : 0x3 * bT < 0x2 ? xO + (xF - xO) * (0.6666666666666666 - bT) * 0x6 : xO, xu = 0x6 * xC < 0x1 ? xO + 0x6 * (xF - xO) * xC : 0x2 * xC < 0x1 ? xF : 0x3 * xC < 0x2 ? xO + (xF - xO) * (0.6666666666666666 - xC) * 0x6 : xO;
                }
                let xM = ((0x100 * xG | 0x0) << 0x10) + ((0x100 * xg | 0x0) << 0x8) + (0x100 * xu | 0x0);
                this['Y2'][ba++] = this['Yc'](xM, bj);
            }
        }
        for (let xy = 0x0; xy < 0x32; xy++) {
            let xz = this['Y8'][xy];
            if (!xz) continue;
            let xj = xz['Zu'];
            this['Y6'][xy] = new Int32Array(xj['length']);
            for (let xa = 0x0; xa < xj[Mp(0x2ea)]; xa++) {
                let xq = this['Y6'][xy];
                xq && (xq[xa] = this['Yc'](xj[xa], bj));
            }
        }
        for (let xT = 0x0; xT < 0x32; xT++) this['Yh'](xT);
    }
    static['YH'](bz, bj, ba, bq, bT) {
        if (this['ZI'] && (bj > Xu['ZH'] && (bj = Xu['ZH']), bz < 0x0 && (bz = 0x0)), bz >= bj) return;
        bq += bz;
        let bI = bj - bz >> 0x2;
        if (0x0 === this['Zi'])
            for (;;) {
                if (bI--, bI < 0x0)
                    for (bI = bj - bz & 0x3;;) {
                        if (bI--, bI < 0x0) return;
                        ba[bq++] = bT;
                    }
                ba[bq++] = bT, ba[bq++] = bT, ba[bq++] = bT, ba[bq++] = bT;
            }
        let bJ = this['Zi'],
            bV = 0x100 - this['Zi'];
        for (bT = ((0xff00ff & bT) * bV >> 0x8 & 0xff00ff) + ((0xff00 & bT) * bV >> 0x8 & 0xff00);;) {
            if (bI--, bI < 0x0)
                for (bI = bj - bz & 0x3;;) {
                    if (bI--, bI < 0x0) return;
                    ba[bq++] = bT + ((0xff00ff & ba[bq]) * bJ >> 0x8 & 0xff00ff) + ((0xff00 & ba[bq]) * bJ >> 0x8 & 0xff00);
                }
            ba[bq++] = bT + ((0xff00ff & ba[bq]) * bJ >> 0x8 & 0xff00ff) + ((0xff00 & ba[bq]) * bJ >> 0x8 & 0xff00), ba[bq++] = bT + ((0xff00ff & ba[bq]) * bJ >> 0x8 & 0xff00ff) + ((0xff00 & ba[bq]) * bJ >> 0x8 & 0xff00), ba[bq++] = bT + ((0xff00ff & ba[bq]) * bJ >> 0x8 & 0xff00ff) + ((0xff00 & ba[bq]) * bJ >> 0x8 & 0xff00), ba[bq++] = bT + ((0xff00ff & ba[bq]) * bJ >> 0x8 & 0xff00ff) + ((0xff00 & ba[bq]) * bJ >> 0x8 & 0xff00);
        }
    }
    static['Yh'](bz) {
        this['Zq'][bz] && this['ZV'] && (this['ZV'][this['ZW']++] = this['Zq'][bz], this['Zq'][bz] = null);
    }
    static['Yl'](bz) {
        const Mh = uh;
        this['Y9'] = 0x0;
        for (let bj = 0x0; bj < 0x32; bj++) try {
            this['Y8'][bj] = XF['Zz'](bz, bj[Mh(0x27e)]()), this['ZT'] && 0x80 === this['Y8'][bj]?.['ZG'] ? this['Y8'][bj]?.['ZD']() : this['Y8'][bj]?.['ZO'](), this['Y9']++;
        } catch (ba) {}
    }
    static['YK']() {
        const Ml = uh;
        this['ZV'] = null, this['Zq'][Ml(0x2c0)](null);
    }
    static['YN']() {
        this['YZ'] = new Int32Array(Xu['Zc']);
        for (let bz = 0x0; bz < Xu['Zc']; bz++) this['YZ'][bz] = Xu['ZR'] * bz;
        this['YY'] = Xu['ZR'] / 0x2 | 0x0, this['Y5'] = Xu['Zc'] / 0x2 | 0x0;
    }
    static['Yv'](bz, bj, ba, bq, bT, bI, bJ, bV, xG) {
        let xg = 0x0,
            xu = 0x0;
        bT !== bq && (xg = (bj - bz << 0x10) / (bT - bq) | 0x0, xu = (bV - bJ << 0xf) / (bT - bq) | 0x0);
        let xM = 0x0,
            xF = 0x0;
        bI !== bT && (xM = (ba - bj << 0x10) / (bI - bT) | 0x0, xF = (xG - bV << 0xf) / (bI - bT) | 0x0);
        let xO = 0x0,
            xD = 0x0;
        if (bI !== bq && (xO = (bz - ba << 0x10) / (bq - bI) | 0x0, xD = (bJ - xG << 0xf) / (bq - bI) | 0x0), bq <= bT && bq <= bI) {
            if (bq < Xu['Zh']) {
                if (bT > Xu['Zh'] && (bT = Xu['Zh']), bI > Xu['Zh'] && (bI = Xu['Zh']), bT < bI) {
                    if (ba = bz <<= 0x10, xG = bJ <<= 0xf, bq < 0x0 && (ba -= xO * bq, bz -= xg * bq, xG -= xD * bq, bJ -= xu * bq, bq = 0x0), bj <<= 0x10, bV <<= 0xf, bT < 0x0 && (bj -= xM * bT, bV -= xF * bT, bT = 0x0), bq !== bT && xO < xg || bq === bT && xO > xM)
                        for (bI -= bT, bT -= bq, bq = XO['YZ'][bq];;) {
                            if (--bT < 0x0)
                                for (;;) {
                                    if (--bI < 0x0) return;
                                    this['YP'](ba >> 0x10, bj >> 0x10, xG >> 0x7, bV >> 0x7, Xu['Zw'], bq, 0x0), ba += xO, bj += xM, xG += xD, bV += xF, bq += Xu['ZR'];
                                }
                            this['YP'](ba >> 0x10, bz >> 0x10, xG >> 0x7, bJ >> 0x7, Xu['Zw'], bq, 0x0), ba += xO, bz += xg, xG += xD, bJ += xu, bq += Xu['ZR'];
                        } else
                            for (bI -= bT, bT -= bq, bq = XO['YZ'][bq];;) {
                                if (--bT < 0x0)
                                    for (;;) {
                                        if (--bI < 0x0) return;
                                        this['YP'](bj >> 0x10, ba >> 0x10, bV >> 0x7, xG >> 0x7, Xu['Zw'], bq, 0x0), ba += xO, bj += xM, xG += xD, bV += xF, bq += Xu['ZR'];
                                    }
                                this['YP'](bz >> 0x10, ba >> 0x10, bJ >> 0x7, xG >> 0x7, Xu['Zw'], bq, 0x0), ba += xO, bz += xg, xG += xD, bJ += xu, bq += Xu['ZR'];
                            }
                } else {
                    if (bj = bz <<= 0x10, bV = bJ <<= 0xf, bq < 0x0 && (bj -= xO * bq, bz -= xg * bq, bV -= xD * bq, bJ -= xu * bq, bq = 0x0), ba <<= 0x10, xG <<= 0xf, bI < 0x0 && (ba -= xM * bI, xG -= xF * bI, bI = 0x0), bq !== bI && xO < xg || bq === bI && xM > xg)
                        for (bT -= bI, bI -= bq, bq = XO['YZ'][bq];;) {
                            if (--bI < 0x0)
                                for (;;) {
                                    if (--bT < 0x0) return;
                                    this['YP'](ba >> 0x10, bz >> 0x10, xG >> 0x7, bJ >> 0x7, Xu['Zw'], bq, 0x0), ba += xM, bz += xg, xG += xF, bJ += xu, bq += Xu['ZR'];
                                }
                            this['YP'](bj >> 0x10, bz >> 0x10, bV >> 0x7, bJ >> 0x7, Xu['Zw'], bq, 0x0), bj += xO, bz += xg, bV += xD, bJ += xu, bq += Xu['ZR'];
                        } else
                            for (bT -= bI, bI -= bq, bq = XO['YZ'][bq];;) {
                                if (--bI < 0x0)
                                    for (;;) {
                                        if (--bT < 0x0) return;
                                        this['YP'](bz >> 0x10, ba >> 0x10, bJ >> 0x7, xG >> 0x7, Xu['Zw'], bq, 0x0), ba += xM, bz += xg, xG += xF, bJ += xu, bq += Xu['ZR'];
                                    }
                                this['YP'](bz >> 0x10, bj >> 0x10, bJ >> 0x7, bV >> 0x7, Xu['Zw'], bq, 0x0), bj += xO, bz += xg, bV += xD, bJ += xu, bq += Xu['ZR'];
                            }
                }
            }
        } else {
            if (bT <= bI) {
                if (bT < Xu['Zh']) {
                    if (bI > Xu['Zh'] && (bI = Xu['Zh']), bq > Xu['Zh'] && (bq = Xu['Zh']), bI < bq) {
                        if (bz = bj <<= 0x10, bJ = bV <<= 0xf, bT < 0x0 && (bz -= xg * bT, bj -= xM * bT, bJ -= xu * bT, bV -= xF * bT, bT = 0x0), ba <<= 0x10, xG <<= 0xf, bI < 0x0 && (ba -= xO * bI, xG -= xD * bI, bI = 0x0), bT !== bI && xg < xM || bT === bI && xg > xO)
                            for (bq -= bI, bI -= bT, bT = XO['YZ'][bT];;) {
                                if (--bI < 0x0)
                                    for (;;) {
                                        if (--bq < 0x0) return;
                                        this['YP'](bz >> 0x10, ba >> 0x10, bJ >> 0x7, xG >> 0x7, Xu['Zw'], bT, 0x0), bz += xg, ba += xO, bJ += xu, xG += xD, bT += Xu['ZR'];
                                    }
                                this['YP'](bz >> 0x10, bj >> 0x10, bJ >> 0x7, bV >> 0x7, Xu['Zw'], bT, 0x0), bz += xg, bj += xM, bJ += xu, bV += xF, bT += Xu['ZR'];
                            } else
                                for (bq -= bI, bI -= bT, bT = XO['YZ'][bT];;) {
                                    if (--bI < 0x0)
                                        for (;;) {
                                            if (--bq < 0x0) return;
                                            this['YP'](ba >> 0x10, bz >> 0x10, xG >> 0x7, bJ >> 0x7, Xu['Zw'], bT, 0x0), bz += xg, ba += xO, bJ += xu, xG += xD, bT += Xu['ZR'];
                                        }
                                    this['YP'](bj >> 0x10, bz >> 0x10, bV >> 0x7, bJ >> 0x7, Xu['Zw'], bT, 0x0), bz += xg, bj += xM, bJ += xu, bV += xF, bT += Xu['ZR'];
                                }
                    } else {
                        if (ba = bj <<= 0x10, xG = bV <<= 0xf, bT < 0x0 && (ba -= xg * bT, bj -= xM * bT, xG -= xu * bT, bV -= xF * bT, bT = 0x0), bz <<= 0x10, bJ <<= 0xf, bq < 0x0 && (bz -= xO * bq, bJ -= xD * bq, bq = 0x0), bI -= bq, bq -= bT, bT = XO['YZ'][bT], xg < xM)
                            for (;;) {
                                if (--bq < 0x0)
                                    for (;;) {
                                        if (--bI < 0x0) return;
                                        this['YP'](bz >> 0x10, bj >> 0x10, bJ >> 0x7, bV >> 0x7, Xu['Zw'], bT, 0x0), bz += xO, bj += xM, bJ += xD, bV += xF, bT += Xu['ZR'];
                                    }
                                this['YP'](ba >> 0x10, bj >> 0x10, xG >> 0x7, bV >> 0x7, Xu['Zw'], bT, 0x0), ba += xg, bj += xM, xG += xu, bV += xF, bT += Xu['ZR'];
                            } else
                                for (;;) {
                                    if (--bq < 0x0)
                                        for (;;) {
                                            if (--bI < 0x0) return;
                                            this['YP'](bj >> 0x10, bz >> 0x10, bV >> 0x7, bJ >> 0x7, Xu['Zw'], bT, 0x0), bz += xO, bj += xM, bJ += xD, bV += xF, bT += Xu['ZR'];
                                        }
                                    this['YP'](bj >> 0x10, ba >> 0x10, bV >> 0x7, xG >> 0x7, Xu['Zw'], bT, 0x0), ba += xg, bj += xM, xG += xu, bV += xF, bT += Xu['ZR'];
                                }
                    }
                }
            } else {
                if (bI < Xu['Zh']) {
                    if (bq > Xu['Zh'] && (bq = Xu['Zh']), bT > Xu['Zh'] && (bT = Xu['Zh']), bq < bT) {
                        if (bj = ba <<= 0x10, bV = xG <<= 0xf, bI < 0x0 && (bj -= xM * bI, ba -= xO * bI, bV -= xF * bI, xG -= xD * bI, bI = 0x0), bz <<= 0x10, bJ <<= 0xf, bq < 0x0 && (bz -= xg * bq, bJ -= xu * bq, bq = 0x0), bT -= bq, bq -= bI, bI = XO['YZ'][bI], xM < xO)
                            for (;;) {
                                if (--bq < 0x0)
                                    for (;;) {
                                        if (--bT < 0x0) return;
                                        this['YP'](bj >> 0x10, bz >> 0x10, bV >> 0x7, bJ >> 0x7, Xu['Zw'], bI, 0x0), bj += xM, bz += xg, bV += xF, bJ += xu, bI += Xu['ZR'];
                                    }
                                this['YP'](bj >> 0x10, ba >> 0x10, bV >> 0x7, xG >> 0x7, Xu['Zw'], bI, 0x0), bj += xM, ba += xO, bV += xF, xG += xD, bI += Xu['ZR'];
                            } else
                                for (;;) {
                                    if (--bq < 0x0)
                                        for (;;) {
                                            if (--bT < 0x0) return;
                                            this['YP'](bz >> 0x10, bj >> 0x10, bJ >> 0x7, bV >> 0x7, Xu['Zw'], bI, 0x0), bj += xM, bz += xg, bV += xF, bJ += xu, bI += Xu['ZR'];
                                        }
                                    this['YP'](ba >> 0x10, bj >> 0x10, xG >> 0x7, bV >> 0x7, Xu['Zw'], bI, 0x0), bj += xM, ba += xO, bV += xF, xG += xD, bI += Xu['ZR'];
                                }
                    } else {
                        if (bz = ba <<= 0x10, bJ = xG <<= 0xf, bI < 0x0 && (bz -= xM * bI, ba -= xO * bI, bJ -= xF * bI, xG -= xD * bI, bI = 0x0), bj <<= 0x10, bV <<= 0xf, bT < 0x0 && (bj -= xg * bT, bV -= xu * bT, bT = 0x0), bq -= bT, bT -= bI, bI = XO['YZ'][bI], xM < xO)
                            for (;;) {
                                if (--bT < 0x0)
                                    for (;;) {
                                        if (--bq < 0x0) return;
                                        this['YP'](bj >> 0x10, ba >> 0x10, bV >> 0x7, xG >> 0x7, Xu['Zw'], bI, 0x0), bj += xg, ba += xO, bV += xu, xG += xD, bI += Xu['ZR'];
                                    }
                                this['YP'](bz >> 0x10, ba >> 0x10, bJ >> 0x7, xG >> 0x7, Xu['Zw'], bI, 0x0), bz += xM, ba += xO, bJ += xF, xG += xD, bI += Xu['ZR'];
                            } else
                                for (;;) {
                                    if (--bT < 0x0)
                                        for (;;) {
                                            if (--bq < 0x0) return;
                                            this['YP'](ba >> 0x10, bj >> 0x10, xG >> 0x7, bV >> 0x7, Xu['Zw'], bI, 0x0), bj += xg, ba += xO, bV += xu, xG += xD, bI += Xu['ZR'];
                                        }
                                    this['YP'](ba >> 0x10, bz >> 0x10, xG >> 0x7, bJ >> 0x7, Xu['Zw'], bI, 0x0), bz += xM, ba += xO, bJ += xF, xG += xD, bI += Xu['ZR'];
                                }
                    }
                }
            }
        }
    }
    static['Yn'](bz, bj) {
        this['YZ'] = new Int32Array(bj);
        for (let ba = 0x0; ba < bj; ba++) this['YZ'][ba] = bz * ba;
        this['YY'] = bz / 0x2 | 0x0, this['Y5'] = bj / 0x2 | 0x0;
    }
}
import {
    MobileKeyboard as XD
} from './deps.js';
class XC {
    ['YU'] = !0x1;
    ['Ym'] = 0x0;
    ['Yf'] = 0x0;
    ['YL'] = !0x0;
    ['Ye'] = 0x0;
    ['Ys'] = [];
    ['YA'] = -0x1;
    ['Yb'] = -0x1;
    async ['Yk']() {} ['YB'] = [];
    async ['YX']() {} ['Yx'] = 0x0;
    ['YG'] = -0x1;
    ['Yg'] = 0x0;
    async ['Yu']() {}
    async ['YM']() {} ['YF'] = 0x14;
    ['YO'] = !0x1;
    ['YD'] = -0x1;
    ['YC'] = -0x1;
    ['Yy'] = !0x0;
    ['Yz'] = !0x1;
    ['Yj'] = 0x0;
    ['Ya'] = 0x1;
    ['Yq'] = !0x1;
    ['YT'] = Date[uh(0x22b)]();
    ['YI'] = 0x0;
    ['YJ'] = !0x1;
    ['YV'] = null;
    ['YW'] = 0x0;
    ['YS'] = 0x0;
    ['Yi'] = 0x0;
    ['E0'] = 0x0;
    ['E1'] = 0x32;
    ['E2'] = 0x0;
    ['E3'] = 0x0;
    ['E4'] = [];
    ['E5'] = [];
    ['E6'] = 0x0;
    ['E7'] = 0x0;
    ['E8'] = [];
    ['E9'](bz) {
        this['Yy'] = !0x1;
        for (let bj = 0x0; bj < 0x80; bj++) this['Ys'][bj] = 0x0;
        kU['Z0'] && kU['Z8']();
    } ['Eo'](bz) {
        const MK = uh;
        this['EQ'](bz), this['YT'] = Date[MK(0x22b)](), this['YG'] = -0x1, this['YA'] = -0x1, this['Ye'] = 0x0, this['YC'] = -0x1, this['Yb'] = -0x1, kU['Z0'] && kU['ZE']();
    }
    get['EZ']() {
        const MN = uh;
        return [MN(0x1cd)]['some'](bz => navigator[MN(0x283)][MN(0x314)](bz));
    } ['EY']() {
        return this['EE']() || this['Ed']() || this['Ew']() || this['ER']() || this['Ec']() || this['Er']();
    } ['EH']() {
        return this['YO'] && this['YG'] >= 0x8 && this['YG'] <= 0x208 && this['YA'] >= 0xb && this['YA'] <= 0x159;
    }
    get['EP']() {
        const Mv = uh;
        return [Mv(0x2a8)][Mv(0x2eb)](bz => navigator['userAgent'][Mv(0x314)](bz));
    }
    get['Ep']() {
        const Mn = uh;
        return ['Android', Mn(0x24e), Mn(0x1ea), Mn(0x1b8), 'iPod', Mn(0x14c), Mn(0x14f)]['some'](bz => navigator[Mn(0x283)]['includes'](bz));
    } ['Eh'](bz) {
        this['Yy'] = !0x0, this['YL'] = !0x0, this['YM'](), kU['Z0'] && kU['Zd']();
    } ['El'](bz) {
        const MU = uh;
        this['EQ'](bz), this['YT'] = Date[MU(0x22b)](), this['Ep'] && this['Yz'] && XD[MU(0x2e4)]() && XD[MU(0x1ae)](this['YG'], this['YA']), kU['Z0'] && kU['Z9'](this['YG'], this['YA']);
    } ['EK'](bz) {
        this['EQ'](bz), kU['Z0'] && kU['ZZ']();
    } ['EN'](bz) {
        const Mm = uh;
        this['YT'] = Date[Mm(0x22b)]();
        let bj = kf[Mm(0x321)](bz[Mm(0x322)]);
        if (!bj || 0x0 === bz[Mm(0x15c)]['length'] && !bz['isTrusted']) return;
        let ba = bj['ch'];
        bz[Mm(0x2b8)] && (ba >= 0x41 && ba <= 0x5d || 0x5f == ba ? ba -= 0x40 : ba >= 0x61 && ba <= 0x7a && (ba -= 0x60)), ba > 0x0 && ba < 0x80 && (this['Ys'][ba] = 0x0), kU['Z0'] && kU['ZY'](ba), km[Mm(0x314)](bz[Mm(0x322)]) || bz['preventDefault']();
    } ['Ev'](bz) {
        const Mf = uh;
        this['EQ'](bz), this['YT'] = Date['now'](), this['Ye'] = 0x0, kU['Z0'] && kU['Z7'](bz[Mf(0x253)]), this['Ep'] && (this['EY']() && !XD[Mf(0x2e4)]() ? XD[Mf(0x1ab)](this['YG'], this['YA']) : XD['isDisplayed']() && (XD[Mf(0x23b)](this['YG'], this['YA']) || (XD[Mf(0x29e)](), this['YM']())));
    } ['En'](bz) {
        const ML = uh;
        if (this['Yz'] = !0x1, (bz[ML(0x1e3)] > 0x0 || bz[ML(0x1ac)] > 0x0) && this['EQ'](bz), this['YT'] = Date[ML(0x22b)](), this['YC'] = this['YG'], this['Yb'] = this['YA'], this['Ep'] && !this['EZ']) {
            if (this['EY']() && !this['Ew']() && !this['ER']() && !this['Ec']()) return this['Yg'] = 0x0, void(this['Ye'] = 0x0);
            bz[ML(0x1a9)] >= this['YD'] + 0x1f4 ? (this['Yg'] = 0x2, this['Ye'] = 0x2) : (this['Yg'] = 0x1, this['Ye'] = 0x1);
        } else 0x2 === bz[ML(0x253)] ? (this['Yg'] = 0x2, this['Ye'] = 0x2) : 0x0 === bz[ML(0x253)] && (this['Yg'] = 0x1, this['Ye'] = 0x1);
        XD['isDisplayed']() && XD['captureMouseDown'](this['YG'], this['YA']) && (this['Ye'] = 0x0, this['Yg'] = 0x0), kU['Z0'] && kU['Z4'](this['YC'], this['Yb'], bz[ML(0x253)]);
    } ['EU'](ba) {
        const Me = uh;
        if (!this['Ep'] || !this['Yz']) return;
        if (ba[Me(0x231)]['length'] > 0x1) return;
        ba['preventDefault']();
        let bq = ba['changedTouches'][0x0],
            bT = 0x0 | bq[Me(0x1e3)],
            bI = 0x0 | bq[Me(0x1ac)];
        const bJ = {};
        bJ[Me(0x1e3)] = bT, bJ[Me(0x1ac)] = bI;
        const bV = {};
        bV['clientX'] = bT, bV['clientY'] = bI, bV['button'] = 0x1, (this['El'](new MouseEvent(Me(0x2b7), bJ)), this['YI'] = 0x0 | bq['screenX'], this['E2'] = 0x0 | bq[Me(0x1a3)], XD[Me(0x2e4)]() || (this['YJ'] && -0x1 === this['Em']() ? (this['Yj'] - this['YI'] > 0x0 ? this[Me(0x188)](0x2) : this['Yj'] - this['YI'] < 0x0 && this[Me(0x188)](0x0), this['YW'] - this['E2'] > 0x0 ? this['rotate'](0x3) : this['YW'] - this['E2'] < 0x0 && this[Me(0x188)](0x1)) : (this['Yq'] || -0x1 !== this['Em']()) && this['En'](new MouseEvent(Me(0x2d8), bV))), this['Yj'] = this['YI'], this['YW'] = this['E2']);
    } ['Ef'](bj) {
        const Ms = uh;
        if (!this['Ep']) return;
        this['Yz'] = !0x0;
        let ba = bj[Ms(0x290)][0x0],
            bq = 0x0 | ba['clientX'],
            bT = 0x0 | ba[Ms(0x1ac)];
        const bI = {};
        bI[Ms(0x1e3)] = bq, bI[Ms(0x1ac)] = bT, (this['El'](new MouseEvent(Ms(0x2b7), bI)), this['E0'] = this['YI'] = this['Yj'] = 0x0 | ba[Ms(0x30a)], this['Ym'] = this['E2'] = this['YW'] = 0x0 | ba['screenY'], this['YD'] = bj[Ms(0x1a9)], this['YJ'] = this['EH'](), this['Yq'] = this['EL']());
    } ['Ee'](bV) {
        const MA = uh;
        if (!this['Ep'] || !this['Yz']) return;
        let xG = bV[MA(0x290)][0x0],
            xg = 0x0 | xG[MA(0x1e3)],
            xu = 0x0 | xG['clientY'];
        const xM = {};
        xM['clientX'] = xg, xM[MA(0x1ac)] = xu;
        const xF = {};
        xF['key'] = MA(0x184), xF['code'] = MA(0x184);
        const xO = {};
        xO[MA(0x322)] = MA(0x2ba), xO[MA(0x15c)] = 'ArrowUp';
        const xD = {};
        xD[MA(0x322)] = MA(0x167), xD[MA(0x15c)] = 'ArrowRight';
        const xC = {};
        xC[MA(0x322)] = MA(0x137), xC[MA(0x15c)] = MA(0x137);
        if (this['El'](new MouseEvent(MA(0x2b7), xM)), this['YI'] = 0x0 | xG['screenX'], this['E2'] = 0x0 | xG['screenY'], this['EN'](new KeyboardEvent(MA(0x258), xF)), this['EN'](new KeyboardEvent('keyup', xO)), this['EN'](new KeyboardEvent(MA(0x258), xD)), this['EN'](new KeyboardEvent('keyup', xC)), this['YJ'] && !this['EH']()) return void(this['Yz'] = !0x1);
        if (this['Yq'] && !this['EL']()) return void(this['Yz'] = !0x1);
        if (this['EY']()) return void(this['Yz'] = !0x1);
        let xy = bV[MA(0x1a9)] >= this['YD'] + 0x1f4,
            xz = Math['abs'](this['E0'] - this['YI']) > 0x10 || Math['abs'](this['Ym'] - this['E2']) > 0x10;
        const xj = {};
        xj[MA(0x1e3)] = xg, xj['clientY'] = xu, xj[MA(0x253)] = 0x2;
        const xa = {};
        xa[MA(0x1e3)] = xg, xa[MA(0x1ac)] = xu, xa[MA(0x253)] = 0x2, xy && !xz && (this['Yz'] = !0x0, this['En'](new MouseEvent(MA(0x2d8), xj)), this['Ev'](new MouseEvent(MA(0x318), xa)));
    } [uh(0x2bf)]() {
        this['Yx'] >= 0x0 && (this['Yx'] = 0xfa0 / this['YF'] | 0x0);
    } ['Es']() {
        this['Yx'] = -0x1;
    }
    get['EA']() {
        const Mb = uh;
        return this['E5'][Mb(0x14a)]((bz, bj) => bz + bj, 0x0) / 0xfa;
    } [uh(0x1b9)]() {
        this['Yx'] >= 0x0 && (this['Yx'] = 0x0);
    } ['EQ'](bz) {
        const Mk = uh;
        let bj = this['Eb'],
            ba = this['Ek'],
            bq = XB[Mk(0x179)](),
            bT = bz[Mk(0x1e3)] - bq[Mk(0x1a8)],
            bI = bz[Mk(0x1ac)] - bq[Mk(0x29d)],
            bJ = 0x0,
            bV = 0x0;
        if (this['EB']()) {
            let xG = bj / ba,
                xg = 0x0,
                xu = 0x0,
                xM = 0x0,
                xF = 0x0;
            window[Mk(0x262)] / window[Mk(0x16b)] >= xG ? (xg = window['innerHeight'] * xG, xu = window['innerHeight'], xM = (window[Mk(0x262)] - xg) / 0x2) : (xg = window['innerWidth'], xu = window[Mk(0x262)] / xG, xF = (window['innerHeight'] - xu) / 0x2), bJ = (bT - xM) * (bj / xg) | 0x0, bV = (bI - xF) * (ba / xu) | 0x0;
        } else bJ = bT * (XB[Mk(0x1a2)] / bq[Mk(0x1a2)]) | 0x0, bV = bI * (XB[Mk(0x233)] / bq['height']) | 0x0;
        bJ >= 0x0 && bJ < bj && bV >= 0x0 && bV < ba && (this['YG'] = bJ, this['YA'] = bV);
    } ['EB']() {
        const MB = uh;
        return null !== document[MB(0x292)];
    } ['Er']() {
        if (!this['YO']) return !0x1;
        let bz = this['Em'](),
            bj = this['EX']();
        if (-0x1 === bz || -0x1 === bj) return !0x1;
        if (bz !== bj) return !0x1;
        return this['YG'] >= 0x52 && this['YG'] <= 0x1c0 && this['YA'] >= 0x89 && this['YA'] <= 0xa3;
    } ['Ex']() {
        let bz = -0x1;
        return this['E3'] !== this['YS'] && (bz = this['YB'][this['YS']], this['YS'] = this['YS'] + 0x1 & 0x7f), bz;
    } ['EG'](bz) {
        const MX = uh;
        this['YT'] = Date['now']();
        let bj = kf['get'](bz[MX(0x322)]);
        if (!bj || 0x0 === bz[MX(0x15c)]['length'] && !bz[MX(0x2dd)]) return;
        let ba = bj['ch'];
        bz[MX(0x2b8)] && (ba >= 0x41 && ba <= 0x5d || 0x5f == ba ? ba -= 0x40 : ba >= 0x61 && ba <= 0x7a && (ba -= 0x60)), ba > 0x0 && ba < 0x80 && (this['Ys'][ba] = 0x1), ba > 0x4 && (this['YB'][this['E3']] = ba, this['E3'] = this['E3'] + 0x1 & 0x7f), kU['Z0'] && kU['Z6'](ba), km[MX(0x314)](bz[MX(0x322)]) || bz[MX(0x2e0)]();
    } ['ER']() {
        return !this['YO'] && 0x2 === this['Eg']() && this['YG'] >= 0x12d && this['YG'] <= 0x232 && this['YA'] >= 0x117 && this['YA'] <= 0x128;
    }
    async ['Eu'](bz, bj) {
        const Mx = uh;
        let ba = this['Eb'],
            bq = this['Ek'];
        this['YL'] && (XX[Mx(0x1cf)] = 'black', XX[Mx(0x2be)](0x0, 0x0, ba, bq), this['YL'] = !0x1);
        let bT = bq / 0x2 - 0x12;
        XX[Mx(0x1cf)] = Mx(0x1b2), XX[Mx(0x2df)]((ba / 0x2 | 0x0) - 0x98, bT, 0x130, 0x22), XX[Mx(0x2be)]((ba / 0x2 | 0x0) - 0x96, bT + 0x2, 0x3 * bz, 0x1e), XX[Mx(0x1cf)] = Mx(0x163), XX['fillRect']((ba / 0x2 | 0x0) - 0x96 + 0x3 * bz, bT + 0x2, 0x12c - 0x3 * bz, 0x1e), XX[Mx(0x251)] = 'bold\x2013px\x20helvetica,\x20sans-serif', XX[Mx(0x1da)] = Mx(0x327), XX[Mx(0x1cf)] = Mx(0x175), XX[Mx(0x1f0)](bj, ba / 0x2 | 0x0, bT + 0x16), await k5(0x5);
    } ['EL']() {
        return this['YO'] && this['YG'] >= 0x232 && this['YG'] <= 0x2f0 && this['YA'] >= 0xe7 && this['YA'] <= 0x1ec;
    } ['Ed']() {
        return this['YO'] && (this['EM']() || this['EF']()) && this['YG'] >= 0xb && this['YG'] <= 0x1fa && this['YA'] >= 0x17f && this['YA'] <= 0x1e2;
    }
    get['ms']() {
        const MG = uh;
        let bz = this['E8'][MG(0x2ea)],
            bj = 0x0;
        for (let bq = 0x0; bq < bz; bq++) bj += this['E8'][bq];
        let ba = bj / bz * 0x3e8;
        return ba > this['Yf'] && (this['Yf'] = ba), this['E5'][this['E6']] = ba, this['E6'] = (this['E6'] + 0x1) % 0xfa, ba;
    } ['EO']() {
        this['Yx'] = -0x2;
    } ['Ec']() {
        return !this['YO'] && 0x1 === this['Eg']() && this['YG'] >= 0x122 && this['YG'] <= 0x227 && this['YA'] >= 0x10e && this['YA'] <= 0x125;
    } ['ED'](bz) {
        this['YF'] = 0x3e8 / bz | 0x0;
    } ['Ew']() {
        return !this['YO'] && 0x2 === this['Eg']() && this['YG'] >= 0x12d && this['YG'] <= 0x232 && this['YA'] >= 0x106 && this['YA'] <= 0x117;
    } [uh(0x188)](xG) {
        const Mg = uh,
            xg = {};
        xg[Mg(0x322)] = Mg(0x167), xg[Mg(0x15c)] = Mg(0x167);
        const xu = {};
        xu[Mg(0x322)] = Mg(0x184), xu[Mg(0x15c)] = Mg(0x184);
        const xM = {};
        xM[Mg(0x322)] = Mg(0x137), xM[Mg(0x15c)] = Mg(0x137);
        const xF = {};
        xF[Mg(0x322)] = 'ArrowUp', xF[Mg(0x15c)] = Mg(0x2ba);
        const xO = {};
        xO[Mg(0x322)] = Mg(0x184), xO[Mg(0x15c)] = Mg(0x184);
        const xD = {};
        xD[Mg(0x322)] = Mg(0x167), xD[Mg(0x15c)] = Mg(0x167);
        const xC = {};
        xC['key'] = 'ArrowUp', xC['code'] = Mg(0x2ba);
        const xy = {};
        xy[Mg(0x322)] = 'ArrowDown', xy['code'] = Mg(0x137), 0x0 === xG ? (this['EN'](new KeyboardEvent(Mg(0x258), xg)), this['EG'](new KeyboardEvent(Mg(0x2da), xu))) : 0x1 === xG ? (this['EN'](new KeyboardEvent(Mg(0x258), xM)), this['EG'](new KeyboardEvent('keydown', xF))) : 0x2 === xG ? (this['EN'](new KeyboardEvent('keyup', xO)), this['EG'](new KeyboardEvent('keydown', xD))) : 0x3 === xG && (this['EN'](new KeyboardEvent(Mg(0x258), xC)), this['EG'](new KeyboardEvent(Mg(0x2da), xy)));
    } ['EC'](bz) {
        const Mu = uh;
        this['E1'] = Math['max'](Math[Mu(0x23d)](0x32, 0x0 | bz), 0x0);
    }
    async ['Ey']() {
        const MF = uh;
        XB['addEventListener']('resize', () => {
            const MM = o5;
            this['YU'] && this['Ez'](window[MM(0x262)], window[MM(0x16b)]);
        }, !0x1), XB['onfocus'] = this['Eh']['bind'](this), XB['onblur'] = this['E9'][MF(0x2bd)](this), XB[MF(0x328)] = this['En'][MF(0x2bd)](this), XB[MF(0x2f6)] = this['Ev'][MF(0x2bd)](this), XB['onmouseenter'] = this['EK'][MF(0x2bd)](this), XB[MF(0x276)] = this['Eo'][MF(0x2bd)](this), XB[MF(0x164)] = this['El']['bind'](this), XB[MF(0x23c)] = this['EG'][MF(0x2bd)](this), XB[MF(0x23e)] = this['EN'][MF(0x2bd)](this), this['Ep'] && (XB['ontouchstart'] = this['Ef'][MF(0x2bd)](this), XB['ontouchend'] = this['Ee']['bind'](this), XB[MF(0x2e8)] = this['EU'][MF(0x2bd)](this)), XB[MF(0x28b)] = bI => {
            const MO = MF;
            bI[MO(0x2e0)]();
        }, window[MF(0x28b)] = bI => {
            const MD = MF;
            bI[MD(0x2e0)]();
        }, await this['Eu'](0x0, MF(0x285)), await this['YX']();
        for (let bI = 0x0; bI < 0xa; bI++) this['E4'][bI] = performance[MF(0x22b)]();
        let bz, bj = 0x0,
            ba = 0x100,
            bq = 0x1,
            bT = 0x0;
        for (; this['Yx'] >= 0x0;) {
            if (this['Yx'] > 0x0 && (this['Yx']--, 0x0 === this['Yx'])) return void this['EO']();
            let bJ = ba,
                bV = bq;
            ba = 0x12c, bq = 0x1, bz = performance[MF(0x22b)]();
            let xG = this['E4'][bj];
            if (0x0 === xG ? (ba = bJ, bq = bV) : bz > xG && (ba = 0xa00 * this['YF'] / (bz - xG) | 0x0), ba < 0x19 ? ba = 0x19 : ba > 0x100 && (ba = 0x100, bq = this['YF'] - (bz - xG) / 0xa | 0x0), this['E4'][bj] = bz, bj = (bj + 0x1) % 0xa, bq > 0x1) {
                for (let xu = 0x0; xu < 0xa; xu++) 0x0 !== this['E4'][xu] && (this['E4'][xu] += bq);
            }
            for (bq < this['Ya'] && (bq = this['Ya']), await k5(bq); bT < 0x100;) await this['Yu'](), this['Yg'] = 0x0, this['YS'] = this['E3'], bT += ba;
            bT &= 0xff, this['YF'] > 0x0 && (this['E7'] = 0x3e8 * ba / (0x100 * this['YF']) | 0x0);
            let xg = performance[MF(0x22b)]();
            if (await this['Yk'](), this['Ep'] && XD[MF(0x173)](), this['E8'][this['Yi']] = (performance[MF(0x22b)]() - xg) / 0x3e8, this['Yi'] = (this['Yi'] + 0x1) % this['E8'][MF(0x2ea)], this['E1'] < 0x32) {
                let xM = 0x3e8 / this['E1'] - (performance[MF(0x22b)]() - bz);
                xM > 0x0 && await k5(xM);
            }
        } - 0x1 === this['Yx'] && this['EO']();
    }
    get['Ek']() {
        return XB['height'];
    }
    get['Eb']() {
        return XB['width'];
    } ['Ez'](bz, bj) {
        const MC = uh;
        XB[MC(0x1a2)] = bz, XB[MC(0x233)] = bj, this['YV'] = new XM(bz, bj), XO['YN']();
    } ['EE']() {
        return this['YO'] && -0x1 === this['Ej']() && !this['EM']() && !this['EF']() && this['YG'] >= 0xb && this['YG'] <= 0x1fa && this['YA'] >= 0x1c1 && this['YA'] <= 0x1e2;
    }
    constructor(bz = !0x1) {
        const My = uh;
        XB[My(0x24a)] = -0x1, XX[My(0x1cf)] = 'black', XX[My(0x2be)](0x0, 0x0, XB[My(0x1a2)], XB['height']), this['YU'] = bz, this['YU'] ? this['Ez'](window['innerWidth'], window[My(0x16b)]) : this['Ez'](XB['width'], XB[My(0x233)]);
    }
}
class Xy {
    ['Ea'] = null;
    ['Eq'];
    constructor(bz) {
        this['Eq'] = bz;
    } ['ET'](bz) {
        for (;;) {
            let bj = bz['m']();
            if (0x0 === bj) break;
            this['l'](bj, bz);
        }
        return this;
    }
}
class Xz extends Xy {
    static['EI'] = [];
    static['EJ'] = 0x0;
    static['l'](bz) {
        const Mz = uh;
        let bj = new k8(bz['Qw'](Mz(0x268)));
        this['EJ'] = bj['oZ']();
        for (let ba = 0x0; ba < this['EJ']; ba++) this['EI'][ba] = new Xz(ba)['ET'](bj);
    }
    static['EV'](bz, bj, ba) {
        return ba > 0xb3 && (bj = bj / 0x2 | 0x0), ba > 0xc0 && (bj = bj / 0x2 | 0x0), ba > 0xd9 && (bj = bj / 0x2 | 0x0), ba > 0xf3 && (bj = bj / 0x2 | 0x0), (bz / 0x4 << 0xa) + (bj / 0x20 << 0x7) + (ba / 0x2 | 0x0);
    }
    static['EW'](bz, bj) {
        return -0x1 === bz ? 0xbc614e : ((bj = bj * (0x7f & bz) / 0x80 | 0x0) < 0x2 ? bj = 0x2 : bj > 0x7e && (bj = 0x7e), (0xff80 & bz) + bj);
    }
    static['ES'](bz, bj) {
        return -0x2 === bz ? 0xbc614e : -0x1 === bz ? (bj < 0x0 ? bj = 0x0 : bj > 0x7f && (bj = 0x7f), 0x7f - bj) : ((bj = bj * (0x7f & bz) / 0x80 | 0x0) < 0x2 ? bj = 0x2 : bj > 0x7e && (bj = 0x7e), (0xff80 & bz) + bj);
    } ['Ei'] = -0x1;
    ['d0'] = 0x0;
    ['d1'] = 0x0;
    ['d2'] = !0x0;
    ['d3'] = !0x1;
    ['d4'] = 0x0;
    ['d5'] = 0x0;
    ['d6'] = 0x0;
    ['d7'] = 0x0;
    ['d8'] = 0x0;
    ['l'](bz, bj) {
        const Mj = uh;
        0x1 === bz ? (this['d1'] = bj['o7'](), this[Mj(0x16c)](this['d1'])) : 0x2 === bz ? this['Ei'] = bj['m']() : 0x3 === bz ? this['d3'] = !0x0 : 0x5 === bz ? this['d2'] = !0x1 : 0x6 === bz && (this['Ea'] = bj['o9']());
    } [uh(0x16c)](bz) {
        const Ma = uh;
        let bj = (bz >> 0x10 & 0xff) / 0x100,
            ba = (bz >> 0x8 & 0xff) / 0x100,
            bq = (0xff & bz) / 0x100,
            bT = bj;
        ba < bj && (bT = ba), bq < bT && (bT = bq);
        let bI = bj;
        ba > bj && (bI = ba), bq > bI && (bI = bq);
        let bJ = 0x0,
            bV = 0x0,
            xG = (bT + bI) / 0x2;
        bT !== bI && (xG < 0.5 && (bV = (bI - bT) / (bI + bT)), xG >= 0.5 && (bV = (bI - bT) / (0x2 - bI - bT)), bj === bI ? bJ = (ba - bq) / (bI - bT) : ba === bI ? bJ = (bq - bj) / (bI - bT) + 0x2 : bq === bI && (bJ = (bj - ba) / (bI - bT) + 0x4)), bJ /= 0x6, this['d8'] = 0x100 * bJ | 0x0, this['d7'] = 0x100 * bV | 0x0, this['d0'] = 0x100 * xG | 0x0, this['d7'] < 0x0 ? this['d7'] = 0x0 : this['d7'] > 0xff && (this['d7'] = 0xff), this['d0'] < 0x0 ? this['d0'] = 0x0 : this['d0'] > 0xff && (this['d0'] = 0xff), this['d5'] = xG > 0.5 ? (0x1 - xG) * bV * 0x200 | 0x0 : xG * bV * 0x200 | 0x0, this['d5'] < 0x1 && (this['d5'] = 0x1), this['d4'] = bJ * this['d5'] | 0x0;
        let xg = this['d8'] + (0x10 * Math[Ma(0x291)]() | 0x0) - 0x8;
        xg < 0x0 ? xg = 0x0 : xg > 0xff && (xg = 0xff);
        let xu = this['d7'] + (0x30 * Math[Ma(0x291)]() | 0x0) - 0x18;
        xu < 0x0 ? xu = 0x0 : xu > 0xff && (xu = 0xff);
        let xM = this['d0'] + (0x30 * Math[Ma(0x291)]() | 0x0) - 0x18;
        xM < 0x0 ? xM = 0x0 : xM > 0xff && (xM = 0xff), this['d6'] = Xz['EV'](xg, xu, xM);
    }
}
class Xj {
    ['d9'] = new k4();
    constructor() {
        this['d9']['C'] = this['d9'], this['d9']['D'] = this['d9'];
    } ['dQ']() {
        let bz = this['d9']['C'];
        return bz === this['d9'] ? null : (bz?.['F'](), bz);
    } ['dZ'](bz) {
        bz['D'] && bz['F'](), bz['D'] = this['d9']['D'], bz['C'] = this['d9'], bz['D'] && (bz['D']['C'] = bz), bz['C']['D'] = bz;
    }
}
class Xa {
    ['dY'];
    ['dE'];
    ['put'](bz, bj) {
        const Mq = uh;
        bj['o'] && bj['p']();
        let ba = this['dY'][Number(bz & BigInt(this['dE'] - 0x1))];
        bj['o'] = ba['o'], bj[Mq(0x302)] = ba, bj['o'] && (bj['o'][Mq(0x302)] = bj), bj[Mq(0x302)]['o'] = bj, bj[Mq(0x322)] = bz;
    }
    constructor(bz) {
        const MT = uh;
        this['dY'] = new Array(bz), this['dE'] = bz;
        for (let bj = 0x0; bj < bz; bj++) {
            let ba = this['dY'][bj] = new k2();
            ba[MT(0x302)] = ba, ba['o'] = ba;
        }
    } [uh(0x321)](bz) {
        const MI = uh;
        let bj = this['dY'][Number(bz & BigInt(this['dE'] - 0x1))];
        for (let ba = bj[MI(0x302)]; ba !== bj; ba = ba['next'])
            if (ba && ba['key'] === bz) return ba;
        return null;
    }
}
class Xq {
    ['dd'] = new Xa(0x400);
    ['dw'];
    ['dR'] = new Xj();
    ['dc'];
    ['dr']() {
        for (;;) {
            let bz = this['dR']['dQ']();
            if (!bz) return void(this['dc'] = this['dw']);
            bz['p'](), bz['F']();
        }
    }
    constructor(bz) {
        this['dw'] = bz, this['dc'] = bz;
    } ['get'](bz) {
        const MJ = uh;
        let bj = this['dd'][MJ(0x321)](bz);
        return bj && this['dR']['dZ'](bj), bj;
    } ['put'](bz, bj) {
        const MV = uh;
        if (0x0 === this['dc']) {
            let ba = this['dR']['dQ']();
            ba?.['p'](), ba?.['F']();
        } else this['dc']--;
        this['dd'][MV(0x2c2)](bz, bj), this['dR']['dZ'](bj);
    }
}
class XT {
    static['EI'] = [];
    static['l'](bz) {
        const MW = uh;
        let bj = new k8(bz['Qw']('base_head.dat')),
            ba = new k8(bz['Qw'](MW(0x1bd))),
            bq = new k8(bz['Qw']('base_label.dat')),
            bT = bj['oZ']();
        bj['S'] += 0x2;
        for (let bI = 0x0; bI < bT; bI++) {
            let bJ = bj['oZ'](),
                bV = bj['m'](),
                xG = new Uint8Array(bV),
                xg = new kY(bV, null);
            for (let xu = 0x0; xu < bV; xu++) {
                xG[xu] = ba['m']();
                let xM = bq['m'](),
                    xF = new Uint8Array(xM);
                for (let xO = 0x0; xO < xM; xO++) xF[xO] = bq['m']();
                xg[xu] = xF;
            }
            this['EI'][bJ] = new XT(), this['EI'][bJ]['dH'] = bV, this['EI'][bJ]['dP'] = xG, this['EI'][bJ]['dp'] = xg;
        }
    } ['dP'] = null;
    ['dH'] = 0x0;
    ['dp'] = null;
}
class XI {
    static['EI'] = [];
    static['l'](bz) {
        const MS = uh;
        let bj = new k8(bz['Qw'](MS(0x22c))),
            ba = new k8(bz['Qw'](MS(0x19f))),
            bq = new k8(bz['Qw']('frame_tran2.dat')),
            bT = new k8(bz['Qw'](MS(0x2ef))),
            bI = bj['oZ']();
        bj['S'] += 0x2;
        let bJ = new Int32Array(0x1f4),
            bV = new Int32Array(0x1f4),
            xG = new Int32Array(0x1f4),
            xg = new Int32Array(0x1f4);
        for (let xu = 0x0; xu < bI; xu++) {
            let xM = bj['oZ'](),
                xF = this['EI'][xM] = new XI();
            xF['dh'] = bT['m']();
            let xO = bj['oZ'](),
                xD = XT['EI'][xO];
            xF['dl'] = xD;
            let xC = bj['m'](),
                xy = -0x1,
                xz = 0x0;
            for (let xj = 0x0; xj < xC; xj++) {
                if (!xD['dP']) throw new Error();
                let xa = ba['m']();
                if (xa > 0x0) {
                    if (0x0 !== xD['dP'][xj]) {
                        for (let xT = xj - 0x1; xT > xy; xT--)
                            if (0x0 === xD['dP'][xT]) {
                                bJ[xz] = xT, bV[xz] = 0x0, xG[xz] = 0x0, xg[xz] = 0x0, xz++;
                                break;
                            }
                    }
                    bJ[xz] = xj;
                    let xq = 0x0;
                    0x3 === xD['dP'][bJ[xz]] && (xq = 0x80), bV[xz] = 0x1 & xa ? bq['oQ']() : xq, xG[xz] = 0x2 & xa ? bq['oQ']() : xq, xg[xz] = 0x4 & xa ? bq['oQ']() : xq, xy = xj, xz++;
                }
            }
            xF['dK'] = xz, xF['dN'] = new Int32Array(xz), xF['x'] = new Int32Array(xz), xF['y'] = new Int32Array(xz), xF['z'] = new Int32Array(xz);
            for (let xI = 0x0; xI < xz; xI++) xF['dN'][xI] = bJ[xI], xF['x'][xI] = bV[xI], xF['y'][xI] = xG[xI], xF['z'][xI] = xg[xI];
        }
    } ['y'] = null;
    ['z'] = null;
    ['dK'] = 0x0;
    ['dl'] = null;
    ['x'] = null;
    ['dh'] = 0x0;
    ['dN'] = null;
}
class XJ {
    ['dv'] = null;
    ['dn'] = 0x0;
    ['dU'] = -0x1;
    ['dm'] = 0x0;
    ['df'] = 0x0;
    ['dL'] = -0x1;
    ['de'] = -0x1;
    ['ds'] = -0x1;
    ['dA'] = -0x1;
    ['db'] = -0x1;
    ['dk'] = -0x1;
    ['dB'] = -0x1;
    ['dX'] = -0x1;
    ['dx'] = 0x0;
    ['dG'] = -0x1;
    ['dg'] = -0x1;
    ['du'] = -0x1;
}
class XV {
    ['y'] = 0x0;
    ['x'] = 0x0;
    ['z'] = 0x0;
    ['w'] = 0x0;
}
class XW extends k4 {
    static['dM'] = null;
    static['dF'] = null;
    static['dO'] = null;
    static['dD'] = null;
    static['dC'] = null;
    static['dy'] = null;
    static['dz'] = null;
    static['dj'] = null;
    static['da'] = null;
    static['dq'] = null;
    static['dT'] = null;
    static['dI'] = null;
    static['dJ'] = null;
    static['dV'] = null;
    static['dW'] = null;
    static['dS'] = new Int32Array(0x1000);
    static['di'] = new kY(0x1000, !0x1);
    static['w0'] = new Int32Array(0x1000);
    static['w1'] = new kY(0x1000, !0x1);
    static['w2'] = new Int32Array(0x1000);
    static['w3'] = new Int32Array(0x1000);
    static['w4'] = new Int32Array(0x1000);
    static['w5'] = new Int32Array(0x1000);
    static['w6'] = new Int32Array(0x5dc);
    static['w7'] = new kd(0xc, 0x7d0);
    static['w8'] = new Int32Array(0xc);
    static['w9'] = new kd(0x5dc, 0x200);
    static['wo'] = new Int32Array(0x7d0);
    static['wQ'] = !0x1;
    static['wZ'] = 0x0;
    static['wY'] = new Int32Array(0xa);
    static['wE'] = new Int32Array(0xa);
    static['wd'] = new Int32Array(0xc);
    static['ww'] = new Int32Array(0x7d0);
    static['wR'] = new Int32Array(0xa);
    static['wc'] = 0x0;
    static['wr'] = 0x0;
    static['wH'] = !0x1;
    static['YA'] = 0x0;
    static['YG'] = 0x0;
    static['wP'] = 0x0;
    static['wp'] = new Int32Array(0x3e8);
    ['wh'](bz, bj, ba) {
        for (let bq = 0x0; bq < this['df']; bq++) this['wl'][bq] = this['wl'][bq] * bz / 0x80 | 0x0, this['wK'][bq] = this['wK'][bq] * bj / 0x80 | 0x0, this['wN'][bq] = this['wN'][bq] * ba / 0x80 | 0x0;
    } ['wv']() {
        for (let bz = 0x0; bz < this['df']; bz++) this['wN'][bz] = -this['wN'][bz];
        for (let bj = 0x0; bj < this['dn']; bj++) {
            let ba = this['wn'][bj];
            this['wn'][bj] = this['wU'][bj], this['wU'][bj] = ba;
        }
    } ['wm'](bz, bj, ba, bq, bT, bI, bJ, bV, xG) {
        let xg = bV * bT - bI * bq >> 0x10,
            xu = bJ * bj + xg * ba >> 0x10,
            xM = this['wf'] * ba >> 0x10,
            xF = xu + xM;
        if (xF <= 0x32 || xu >= 0xdac) return;
        let xO = bV * bq + bI * bT >> 0x10,
            xD = xO - this['wf'] << 0x9;
        if ((xD / xF | 0x0) >= Xu['ZP']) return;
        let xC = xO + this['wf'] << 0x9;
        if ((xC / xF | 0x0) <= -Xu['ZP']) return;
        let xy = bJ * ba - xg * bj >> 0x10,
            xz = this['wf'] * bj >> 0x10,
            xj = xy + xz << 0x9;
        if ((xj / xF | 0x0) <= -Xu['Zp']) return;
        let xa = xy - (xz + (this['wL'] * ba >> 0x10)) << 0x9;
        if ((xa / xF | 0x0) >= Xu['Zp']) return;
        let xq = xu - (xM + (this['wL'] * bj >> 0x10)) <= 0x32,
            xT = !0x1;
        if (xG > 0x0 && XW['wH']) {
            let xS = xu - xM;
            xS <= 0x32 && (xS = 0x32), xO > 0x0 ? (xD = xD / xF | 0x0, xC = xC / xS | 0x0) : (xC = xC / xF | 0x0, xD = xD / xS | 0x0), xy > 0x0 ? (xa = xa / xF | 0x0, xj = xj / xS | 0x0) : (xj = xj / xF | 0x0, xa = xa / xS | 0x0);
            let xi = XW['YG'] - XO['YY'],
                G0 = XW['YA'] - XO['Y5'];
            xi > xD && xi < xC && G0 > xa && G0 < xj && (this['we'] ? XW['wp'][XW['wP']++] = xG : xT = !0x0);
        }
        let xI = XO['YY'],
            xJ = XO['Y5'],
            xV = 0x0,
            xW = 0x0;
        0x0 !== bz && (xV = XO['oy'][bz], xW = XO['Y3'][bz]);
        for (let G1 = 0x0; G1 < this['df']; G1++) {
            let G2, G3 = this['wl'][G1],
                G4 = this['wK'][G1],
                G5 = this['wN'][G1];
            0x0 !== bz && (G2 = G5 * xV + G3 * xW >> 0x10, G5 = G5 * xW - G3 * xV >> 0x10, G3 = G2), G3 += bI, G4 += bJ, G5 += bV, G2 = G5 * bq + G3 * bT >> 0x10, G5 = G5 * bT - G3 * bq >> 0x10, G3 = G2, G2 = G4 * ba - G5 * bj >> 0x10, G5 = G4 * bj + G5 * ba >> 0x10, G4 = G2, XW['w0'] && (XW['w0'][G1] = G5 - xu), G5 >= 0x32 && XW['w3'] && XW['dS'] ? (XW['w3'][G1] = xI + ((G3 << 0x9) / G5 | 0x0), XW['dS'][G1] = xJ + ((G4 << 0x9) / G5 | 0x0)) : XW['w3'] && (XW['w3'][G1] = -0x1388, xq = !0x0), (xq || this['dm'] > 0x0) && XW['w2'] && XW['w5'] && XW['w4'] && (XW['w2'][G1] = G3, XW['w5'][G1] = G4, XW['w4'][G1] = G5);
        }
        try {
            this['ws'](xq, xT, xG);
        } catch (G6) {}
    } ['wA'](bz, bj, ba, bq, bT, bI, bJ) {
        let bV = XO['oy'][bz],
            xG = XO['Y3'][bz],
            xg = XO['oy'][bj],
            xu = XO['Y3'][bj],
            xM = XO['oy'][ba],
            xF = XO['Y3'][ba],
            xO = XO['oy'][bq],
            xD = XO['Y3'][bq],
            xC = bI * xO + bJ * xD >> 0x10;
        for (let xy = 0x0; xy < this['df']; xy++) {
            let xz, xj = this['wl'][xy],
                xa = this['wK'][xy],
                xq = this['wN'][xy];
            0x0 !== ba && (xz = xa * xM + xj * xF >> 0x10, xa = xa * xF - xj * xM >> 0x10, xj = xz), 0x0 !== bz && (xz = xa * xG - xq * bV >> 0x10, xq = xa * bV + xq * xG >> 0x10, xa = xz), 0x0 !== bj && (xz = xq * xg + xj * xu >> 0x10, xq = xq * xu - xj * xg >> 0x10, xj = xz), xj += bT, xa += bI, xq += bJ, xz = xa * xD - xq * xO >> 0x10, xq = xa * xO + xq * xD >> 0x10, xa = xz, XW['w3'] && XW['dS'] && XW['w0'] && (XW['w0'][xy] = xq - xC, XW['w3'][xy] = XO['YY'] + ((xj << 0x9) / xq | 0x0), XW['dS'][xy] = XO['Y5'] + ((xa << 0x9) / xq | 0x0)), this['dm'] > 0x0 && XW['w2'] && XW['w5'] && XW['w4'] && (XW['w2'][xy] = xj, XW['w5'][xy] = xa, XW['w4'][xy] = xq);
        }
        try {
            this['ws'](!0x1, !0x1, 0x0);
        } catch (xT) {}
    } ['wb'](bz, bj, ba, bq, bT) {
        for (let bI = 0x0; bI < this['dn']; bI++) {
            let bJ = this['wn'][bI],
                bV = this['wk'][bI],
                xG = this['wU'][bI];
            if (!this['wB'] && this['wX'] && this['wx'] && this['wG'] && this['wg'] && this['wu']) {
                let xg = this['wX'][bI],
                    xu = this['wx'][bJ];
                xu && (this['wG'][bI] = XW['wM'](xg, bz + ((ba * xu['x'] + bq * xu['y'] + bT * xu['z']) / (bj * xu['w']) | 0x0), 0x0));
                let xM = this['wx'][bV];
                xM && (this['wg'][bI] = XW['wM'](xg, bz + ((ba * xM['x'] + bq * xM['y'] + bT * xM['z']) / (bj * xM['w']) | 0x0), 0x0));
                let xF = this['wx'][xG];
                xF && (this['wu'][bI] = XW['wM'](xg, bz + ((ba * xF['x'] + bq * xF['y'] + bT * xF['z']) / (bj * xF['w']) | 0x0), 0x0));
            } else {
                if (this['wB'] && !(0x1 & this['wB'][bI]) && this['wX'] && this['wx'] && this['wG'] && this['wg'] && this['wu']) {
                    let xO = this['wX'][bI],
                        xD = this['wB'][bI],
                        xC = this['wx'][bJ];
                    xC && (this['wG'][bI] = XW['wM'](xO, bz + ((ba * xC['x'] + bq * xC['y'] + bT * xC['z']) / (bj * xC['w']) | 0x0), xD));
                    let xy = this['wx'][bV];
                    xy && (this['wg'][bI] = XW['wM'](xO, bz + ((ba * xy['x'] + bq * xy['y'] + bT * xy['z']) / (bj * xy['w']) | 0x0), xD));
                    let xz = this['wx'][xG];
                    xz && (this['wu'][bI] = XW['wM'](xO, bz + ((ba * xz['x'] + bq * xz['y'] + bT * xz['z']) / (bj * xz['w']) | 0x0), xD));
                }
            }
        }
        if (this['wx'] = null, this['wF'] = null, this['wO'] = null, this['wD'] = null, this['wB']) {
            for (let xj = 0x0; xj < this['dn']; xj++)
                if (!(0x2 & ~this['wB'][xj])) return;
        }
        this['wX'] = null;
    } ['wC']() {
        const Mi = uh;
        this['wL'] = 0x0, this['wf'] = 0x0, this['wy'] = 0x0, this['wz'] = 0xf423f, this['wj'] = -0xf423f, this['wa'] = -0x1869f, this['wq'] = 0x1869f;
        for (let bz = 0x0; bz < this['df']; bz++) {
            let bj = this['wl'][bz],
                ba = this['wK'][bz],
                bq = this['wN'][bz];
            bj < this['wz'] && (this['wz'] = bj), bj > this['wj'] && (this['wj'] = bj), bq < this['wq'] && (this['wq'] = bq), bq > this['wa'] && (this['wa'] = bq), -ba > this['wL'] && (this['wL'] = -ba), ba > this['wy'] && (this['wy'] = ba);
            let bT = bj * bj + bq * bq;
            bT > this['wf'] && (this['wf'] = bT);
        }
        this['wf'] = 0x0 | Math['sqrt'](this['wf']), this['wT'] = 0x0 | Math['sqrt'](this['wf'] * this['wf'] + this['wL'] * this['wL']), this['wI'] = this['wT'] + (0x0 | Math[Mi(0x1d3)](this['wf'] * this['wf'] + this['wy'] * this['wy']));
    } ['wJ'](bz, bj, ba, bq, bT, bI, bJ, bV) {
        return !(bj < ba && bj < bq && bj < bT) && (!(bj > ba && bj > bq && bj > bT) && (!(bz < bI && bz < bJ && bz < bV) && (bz <= bI || bz <= bJ || bz <= bV)));
    } ['wV'](bz, bj, ba) {
        for (let bq = 0x0; bq < this['df']; bq++) this['wl'][bq] += bj, this['wK'][bq] += bz, this['wN'][bq] += ba;
    } ['wW'](bz, bj) {
        if (this['wX']) {
            for (let ba = 0x0; ba < this['dn']; ba++) this['wX'][ba] === bz && (this['wX'][ba] = bj);
        }
    } ['wS'](bz) {
        if (!(XW['w3'] && XW['dS'] && this['wG'] && this['wg'] && this['wu'])) return;
        let bj = this['wn'][bz],
            ba = this['wk'][bz],
            bq = this['wU'][bz];
        XO['Zf'](XW['w3'][bj], XW['dS'][bj], XW['w3'][ba], XW['dS'][ba], XO['Y2'][0x3e8]), XO['Zf'](XW['w3'][ba], XW['dS'][ba], XW['w3'][bq], XW['dS'][bq], XO['Y2'][0x3e8]), XO['Zf'](XW['w3'][bq], XW['dS'][bq], XW['w3'][bj], XW['dS'][bj], XO['Y2'][0x3e8]);
    } ['wi'](bz, bj, ba, bq, bT) {
        const F0 = uh;
        if (!bq) return;
        let bI = bq['length'];
        if (0x0 === bT) {
            let bJ = 0x0;
            XW['wZ'] = 0x0, XW['wr'] = 0x0, XW['wc'] = 0x0;
            for (let bV = 0x0; bV < bI; bV++) {
                if (!this['R0']) continue;
                let xG = bq[bV];
                if (xG < this['R0'][F0(0x2ea)]) {
                    let xg = this['R0'][xG];
                    if (xg)
                        for (let xu = 0x0; xu < xg['length']; xu++) {
                            let xM = xg[xu];
                            XW['wZ'] += this['wl'][xM], XW['wr'] += this['wK'][xM], XW['wc'] += this['wN'][xM], bJ++;
                        }
                }
            }
            bJ > 0x0 ? (XW['wZ'] = (XW['wZ'] / bJ | 0x0) + bz, XW['wr'] = (XW['wr'] / bJ | 0x0) + bj, XW['wc'] = (XW['wc'] / bJ | 0x0) + ba) : (XW['wZ'] = bz, XW['wr'] = bj, XW['wc'] = ba);
        } else {
            if (0x1 === bT)
                for (let xF = 0x0; xF < bI; xF++) {
                    let xO = bq[xF];
                    if (!this['R0'] || xO >= this['R0']['length']) continue;
                    let xD = this['R0'][xO];
                    if (xD)
                        for (let xC = 0x0; xC < xD[F0(0x2ea)]; xC++) {
                            let xy = xD[xC];
                            this['wl'][xy] += bz, this['wK'][xy] += bj, this['wN'][xy] += ba;
                        }
                } else {
                    if (0x2 === bT)
                        for (let xz = 0x0; xz < bI; xz++) {
                            let xj = bq[xz];
                            if (!this['R0'] || xj >= this['R0'][F0(0x2ea)]) continue;
                            let xa = this['R0'][xj];
                            if (xa)
                                for (let xq = 0x0; xq < xa['length']; xq++) {
                                    let xT = xa[xq];
                                    this['wl'][xT] -= XW['wZ'], this['wK'][xT] -= XW['wr'], this['wN'][xT] -= XW['wc'];
                                    let xI, xJ, xV = 0x8 * (0xff & bz),
                                        xW = 0x8 * (0xff & bj),
                                        xS = 0x8 * (0xff & ba);
                                    if (0x0 !== xS) {
                                        xI = XO['oy'][xS], xJ = XO['Y3'][xS];
                                        let xi = this['wK'][xT] * xI + this['wl'][xT] * xJ >> 0x10;
                                        this['wK'][xT] = this['wK'][xT] * xJ - this['wl'][xT] * xI >> 0x10, this['wl'][xT] = xi;
                                    }
                                    if (0x0 !== xV) {
                                        xI = XO['oy'][xV], xJ = XO['Y3'][xV];
                                        let G0 = this['wK'][xT] * xJ - this['wN'][xT] * xI >> 0x10;
                                        this['wN'][xT] = this['wK'][xT] * xI + this['wN'][xT] * xJ >> 0x10, this['wK'][xT] = G0;
                                    }
                                    if (0x0 !== xW) {
                                        xI = XO['oy'][xW], xJ = XO['Y3'][xW];
                                        let G1 = this['wN'][xT] * xI + this['wl'][xT] * xJ >> 0x10;
                                        this['wN'][xT] = this['wN'][xT] * xJ - this['wl'][xT] * xI >> 0x10, this['wl'][xT] = G1;
                                    }
                                    this['wl'][xT] += XW['wZ'], this['wK'][xT] += XW['wr'], this['wN'][xT] += XW['wc'];
                                }
                        } else {
                            if (0x3 === bT)
                                for (let G2 = 0x0; G2 < bI; G2++) {
                                    let G3 = bq[G2];
                                    if (!this['R0'] || G3 >= this['R0'][F0(0x2ea)]) continue;
                                    let G4 = this['R0'][G3];
                                    if (G4)
                                        for (let G5 = 0x0; G5 < G4[F0(0x2ea)]; G5++) {
                                            let G6 = G4[G5];
                                            this['wl'][G6] -= XW['wZ'], this['wK'][G6] -= XW['wr'], this['wN'][G6] -= XW['wc'], this['wl'][G6] = this['wl'][G6] * bz / 0x80 | 0x0, this['wK'][G6] = this['wK'][G6] * bj / 0x80 | 0x0, this['wN'][G6] = this['wN'][G6] * ba / 0x80 | 0x0, this['wl'][G6] += XW['wZ'], this['wK'][G6] += XW['wr'], this['wN'][G6] += XW['wc'];
                                        }
                                } else {
                                    if (0x5 === bT && this['R1'] && this['R2'])
                                        for (let G7 = 0x0; G7 < bI; G7++) {
                                            let G8 = bq[G7];
                                            if (G8 >= this['R1'][F0(0x2ea)]) continue;
                                            let G9 = this['R1'][G8];
                                            if (G9)
                                                for (let Go = 0x0; Go < G9[F0(0x2ea)]; Go++) {
                                                    let GQ = G9[Go];
                                                    this['R2'][GQ] += 0x8 * bz, this['R2'][GQ] < 0x0 && (this['R2'][GQ] = 0x0), this['R2'][GQ] > 0xff && (this['R2'][GQ] = 0xff);
                                                }
                                        }
                                }
                        }
                }
        }
    } ['R3'](bz, bj = !0x1) {
        if (XW['w1'] && XW['w1'][bz]) return void this['R4'](bz, bj);
        let ba, bq = this['wn'][bz],
            bT = this['wk'][bz],
            bI = this['wU'][bz];
        if (XW['di'] && (XO['ZI'] = XW['di'][bz]), this['R2'] ? XO['Zi'] = this['R2'][bz] : XO['Zi'] = 0x0, ba = this['wB'] ? 0x3 & this['wB'][bz] : 0x0, bj && XW['w3'] && XW['dS'] && this['wG'] && this['wg'] && this['wu']) XO['Zf'](XW['w3'][bq], XW['dS'][bq], XW['w3'][bT], XW['dS'][bT], XO['Y2'][this['wG'][bz]]), XO['Zf'](XW['w3'][bT], XW['dS'][bT], XW['w3'][bI], XW['dS'][bI], XO['Y2'][this['wg'][bz]]), XO['Zf'](XW['w3'][bI], XW['dS'][bI], XW['w3'][bq], XW['dS'][bq], XO['Y2'][this['wu'][bz]]);
        else {
            if (0x0 === ba && this['wG'] && this['wg'] && this['wu'] && XW['w3'] && XW['dS']) XO['Yv'](XW['w3'][bq], XW['w3'][bT], XW['w3'][bI], XW['dS'][bq], XW['dS'][bT], XW['dS'][bI], this['wG'][bz], this['wg'][bz], this['wu'][bz]);
            else {
                if (0x1 === ba && this['wG'] && XW['w3'] && XW['dS']) XO['Yr'](XW['w3'][bq], XW['w3'][bT], XW['w3'][bI], XW['dS'][bq], XW['dS'][bT], XW['dS'][bI], XO['Y2'][this['wG'][bz]]);
                else {
                    if (0x2 === ba && this['wB'] && this['wX'] && this['wG'] && this['wg'] && this['wu'] && XW['w3'] && XW['dS'] && XW['w2'] && XW['w5'] && XW['w4']) {
                        let bJ = this['wB'][bz] >> 0x2,
                            bV = this['R5'][bJ],
                            xG = this['R6'][bJ],
                            xg = this['R7'][bJ];
                        XO['YR'](XW['w3'][bq], XW['w3'][bT], XW['w3'][bI], XW['dS'][bq], XW['dS'][bT], XW['dS'][bI], this['wG'][bz], this['wg'][bz], this['wu'][bz], XW['w2'][bV], XW['w5'][bV], XW['w4'][bV], XW['w2'][xG], XW['w2'][xg], XW['w5'][xG], XW['w5'][xg], XW['w4'][xG], XW['w4'][xg], this['wX'][bz]);
                    } else {
                        if (0x3 === ba && this['wB'] && this['wX'] && this['wG'] && XW['w3'] && XW['dS'] && XW['w2'] && XW['w5'] && XW['w4']) {
                            let xu = this['wB'][bz] >> 0x2,
                                xM = this['R5'][xu],
                                xF = this['R6'][xu],
                                xO = this['R7'][xu];
                            XO['YR'](XW['w3'][bq], XW['w3'][bT], XW['w3'][bI], XW['dS'][bq], XW['dS'][bT], XW['dS'][bI], this['wG'][bz], this['wG'][bz], this['wG'][bz], XW['w2'][xM], XW['w5'][xM], XW['w4'][xM], XW['w2'][xF], XW['w2'][xO], XW['w5'][xF], XW['w5'][xO], XW['w4'][xF], XW['w4'][xO], this['wX'][bz]);
                        }
                    }
                }
            }
        }
    } ['R8'](bz, bj, ba, bq, bT, bI) {
        const F1 = uh;
        let bJ = bj * (0x0 | Math[F1(0x1d3)](ba * ba + bq * bq + bT * bT)) >> 0x8;
        if (this['wG'] && this['wg'] && this['wu'] || (this['wG'] = new Int32Array(this['dn']), this['wg'] = new Int32Array(this['dn']), this['wu'] = new Int32Array(this['dn'])), !this['wx']) {
            this['wx'] = new kY(this['df'], null);
            for (let bV = 0x0; bV < this['df']; bV++) this['wx'][bV] = new XV();
        }
        for (let xG = 0x0; xG < this['dn']; xG++) {
            let xg = this['wn'][xG],
                xu = this['wk'][xG],
                xM = this['wU'][xG],
                xF = this['wl'][xu] - this['wl'][xg],
                xO = this['wK'][xu] - this['wK'][xg],
                xD = this['wN'][xu] - this['wN'][xg],
                xC = this['wl'][xM] - this['wl'][xg],
                xy = this['wK'][xM] - this['wK'][xg],
                xz = this['wN'][xM] - this['wN'][xg],
                xj = xO * xz - xy * xD,
                xa = xD * xC - xz * xF,
                xq = xF * xy - xC * xO;
            for (; xj > 0x2000 || xa > 0x2000 || xq > 0x2000 || xj < -0x2000 || xa < -0x2000 || xq < -0x2000;) xj >>= 0x1, xa >>= 0x1, xq >>= 0x1;
            let xT = 0x0 | Math[F1(0x1d3)](xj * xj + xa * xa + xq * xq);
            if (xT <= 0x0 && (xT = 0x1), xj = 0x100 * xj / xT | 0x0, xa = 0x100 * xa / xT | 0x0, xq = 0x100 * xq / xT | 0x0, this['wB'] && 0x1 & this['wB'][xG]) {
                let xI = bz + ((ba * xj + bq * xa + bT * xq) / (bJ + (bJ / 0x2 | 0x0)) | 0x0);
                this['wX'] && (this['wG'][xG] = XW['wM'](this['wX'][xG], xI, this['wB'][xG]));
            } else {
                let xJ = this['wx'][xg];
                xJ && (xJ['x'] += xj, xJ['y'] += xa, xJ['z'] += xq, xJ['w']++), xJ = this['wx'][xu], xJ && (xJ['x'] += xj, xJ['y'] += xa, xJ['z'] += xq, xJ['w']++), xJ = this['wx'][xM], xJ && (xJ['x'] += xj, xJ['y'] += xa, xJ['z'] += xq, xJ['w']++);
            }
        }
        if (bI) this['wb'](bz, bJ, ba, bq, bT);
        else {
            this['wF'] = new kY(this['df'], null);
            for (let xV = 0x0; xV < this['df']; xV++) {
                let xW = this['wx'][xV],
                    xS = new XV();
                xW && (xS['x'] = xW['x'], xS['y'] = xW['y'], xS['z'] = xW['z'], xS['w'] = xW['w']), this['wF'][xV] = xS;
            }
        }
        bI ? this['R9']() : this['wC']();
    } ['R4'](bz, bj = !0x1) {
        let ba = 0x0;
        if (XW['w4']) {
            let xg = XO['YY'],
                xu = XO['Y5'],
                xM = this['wn'][bz],
                xF = this['wk'][bz],
                xO = this['wU'][bz],
                xD = XW['w4'][xM],
                xC = XW['w4'][xF],
                xy = XW['w4'][xO];
            if (xD >= 0x32 && XW['w3'] && XW['dS'] && this['wG']) XW['wE'][ba] = XW['w3'][xM], XW['wY'][ba] = XW['dS'][xM], XW['wR'][ba++] = this['wG'][bz];
            else {
                if (XW['w2'] && XW['w5'] && this['wG']) {
                    let xz = XW['w2'][xM],
                        xj = XW['w5'][xM],
                        xa = this['wG'][bz];
                    if (xy >= 0x32 && this['wu']) {
                        let xq = (0x32 - xD) * XO['ZS'][xy - xD];
                        XW['wE'][ba] = xg + ((xz + ((XW['w2'][xO] - xz) * xq >> 0x10) << 0x9) / 0x32 | 0x0), XW['wY'][ba] = xu + ((xj + ((XW['w5'][xO] - xj) * xq >> 0x10) << 0x9) / 0x32 | 0x0), XW['wR'][ba++] = xa + ((this['wu'][bz] - xa) * xq >> 0x10);
                    }
                    if (xC >= 0x32 && this['wg']) {
                        let xT = (0x32 - xD) * XO['ZS'][xC - xD];
                        XW['wE'][ba] = xg + ((xz + ((XW['w2'][xF] - xz) * xT >> 0x10) << 0x9) / 0x32 | 0x0), XW['wY'][ba] = xu + ((xj + ((XW['w5'][xF] - xj) * xT >> 0x10) << 0x9) / 0x32 | 0x0), XW['wR'][ba++] = xa + ((this['wg'][bz] - xa) * xT >> 0x10);
                    }
                }
            }
            if (xC >= 0x32 && XW['w3'] && XW['dS'] && this['wg']) XW['wE'][ba] = XW['w3'][xF], XW['wY'][ba] = XW['dS'][xF], XW['wR'][ba++] = this['wg'][bz];
            else {
                if (XW['w2'] && XW['w5'] && this['wg']) {
                    let xI = XW['w2'][xF],
                        xJ = XW['w5'][xF],
                        xV = this['wg'][bz];
                    if (xD >= 0x32 && this['wG']) {
                        let xW = (0x32 - xC) * XO['ZS'][xD - xC];
                        XW['wE'][ba] = xg + ((xI + ((XW['w2'][xM] - xI) * xW >> 0x10) << 0x9) / 0x32 | 0x0), XW['wY'][ba] = xu + ((xJ + ((XW['w5'][xM] - xJ) * xW >> 0x10) << 0x9) / 0x32 | 0x0), XW['wR'][ba++] = xV + ((this['wG'][bz] - xV) * xW >> 0x10);
                    }
                    if (xy >= 0x32 && this['wu']) {
                        let xS = (0x32 - xC) * XO['ZS'][xy - xC];
                        XW['wE'][ba] = xg + ((xI + ((XW['w2'][xO] - xI) * xS >> 0x10) << 0x9) / 0x32 | 0x0), XW['wY'][ba] = xu + ((xJ + ((XW['w5'][xO] - xJ) * xS >> 0x10) << 0x9) / 0x32 | 0x0), XW['wR'][ba++] = xV + ((this['wu'][bz] - xV) * xS >> 0x10);
                    }
                }
            }
            if (xy >= 0x32 && XW['w3'] && XW['dS'] && this['wu']) XW['wE'][ba] = XW['w3'][xO], XW['wY'][ba] = XW['dS'][xO], XW['wR'][ba++] = this['wu'][bz];
            else {
                if (XW['w2'] && XW['w5'] && this['wu']) {
                    let xi = XW['w2'][xO],
                        G0 = XW['w5'][xO],
                        G1 = this['wu'][bz];
                    if (xC >= 0x32 && this['wg']) {
                        let G2 = (0x32 - xy) * XO['ZS'][xC - xy];
                        XW['wE'][ba] = xg + ((xi + ((XW['w2'][xF] - xi) * G2 >> 0x10) << 0x9) / 0x32 | 0x0), XW['wY'][ba] = xu + ((G0 + ((XW['w5'][xF] - G0) * G2 >> 0x10) << 0x9) / 0x32 | 0x0), XW['wR'][ba++] = G1 + ((this['wg'][bz] - G1) * G2 >> 0x10);
                    }
                    if (xD >= 0x32 && this['wG']) {
                        let G3 = (0x32 - xy) * XO['ZS'][xD - xy];
                        XW['wE'][ba] = xg + ((xi + ((XW['w2'][xM] - xi) * G3 >> 0x10) << 0x9) / 0x32 | 0x0), XW['wY'][ba] = xu + ((G0 + ((XW['w5'][xM] - G0) * G3 >> 0x10) << 0x9) / 0x32 | 0x0), XW['wR'][ba++] = G1 + ((this['wG'][bz] - G1) * G3 >> 0x10);
                    }
                }
            }
        }
        let bq = XW['wE'][0x0],
            bT = XW['wE'][0x1],
            bI = XW['wE'][0x2],
            bJ = XW['wY'][0x0],
            bV = XW['wY'][0x1],
            xG = XW['wY'][0x2];
        if (!((bq - bT) * (xG - bV) - (bJ - bV) * (bI - bT) <= 0x0)) {
            if (XO['ZI'] = !0x1, 0x3 === ba) {
                let G4;
                if ((bq < 0x0 || bT < 0x0 || bI < 0x0 || bq > Xu['ZH'] || bT > Xu['ZH'] || bI > Xu['ZH']) && (XO['ZI'] = !0x0), G4 = this['wB'] ? 0x3 & this['wB'][bz] : 0x0, bj) XO['Zf'](bq, bT, bJ, bV, XW['wR'][0x0]), XO['Zf'](bT, bI, bV, xG, XW['wR'][0x1]), XO['Zf'](bI, bq, xG, bJ, XW['wR'][0x2]);
                else {
                    if (0x0 === G4) XO['Yv'](bq, bT, bI, bJ, bV, xG, XW['wR'][0x0], XW['wR'][0x1], XW['wR'][0x2]);
                    else {
                        if (0x1 === G4 && this['wG']) XO['Yr'](bq, bT, bI, bJ, bV, xG, XO['Y2'][this['wG'][bz]]);
                        else {
                            if (0x2 === G4 && this['wB'] && this['wX'] && XW['w2'] && XW['w5'] && XW['w4']) {
                                let G5 = this['wB'][bz] >> 0x2,
                                    G6 = this['R5'][G5],
                                    G7 = this['R6'][G5],
                                    G8 = this['R7'][G5];
                                XO['YR'](bq, bT, bI, bJ, bV, xG, XW['wR'][0x0], XW['wR'][0x1], XW['wR'][0x2], XW['w2'][G6], XW['w5'][G6], XW['w4'][G6], XW['w2'][G7], XW['w2'][G8], XW['w5'][G7], XW['w5'][G8], XW['w4'][G7], XW['w4'][G8], this['wX'][bz]);
                            } else {
                                if (0x3 === G4 && this['wB'] && this['wX'] && this['wG'] && XW['w2'] && XW['w5'] && XW['w4']) {
                                    let G9 = this['wB'][bz] >> 0x2,
                                        Go = this['R5'][G9],
                                        GQ = this['R6'][G9],
                                        GZ = this['R7'][G9];
                                    XO['YR'](bq, bT, bI, bJ, bV, xG, this['wG'][bz], this['wG'][bz], this['wG'][bz], XW['w2'][Go], XW['w5'][Go], XW['w4'][Go], XW['w2'][GQ], XW['w2'][GZ], XW['w5'][GQ], XW['w5'][GZ], XW['w4'][GQ], XW['w4'][GZ], this['wX'][bz]);
                                }
                            }
                        }
                    }
                }
            } else {
                if (0x4 === ba) {
                    let GY;
                    if ((bq < 0x0 || bT < 0x0 || bI < 0x0 || bq > Xu['ZH'] || bT > Xu['ZH'] || bI > Xu['ZH'] || XW['wE'][0x3] < 0x0 || XW['wE'][0x3] > Xu['ZH']) && (XO['ZI'] = !0x0), GY = this['wB'] ? 0x3 & this['wB'][bz] : 0x0, bj) XO['Zf'](bq, bT, bJ, bV, XW['wR'][0x0]), XO['Zf'](bT, bI, bV, xG, XW['wR'][0x1]), XO['Zf'](bI, XW['wE'][0x3], xG, XW['wY'][0x3], XW['wR'][0x2]), XO['Zf'](XW['wE'][0x3], bq, XW['wY'][0x3], bJ, XW['wR'][0x3]);
                    else {
                        if (0x0 === GY) XO['Yv'](bq, bT, bI, bJ, bV, xG, XW['wR'][0x0], XW['wR'][0x1], XW['wR'][0x2]), XO['Yv'](bq, bI, XW['wE'][0x3], bJ, xG, XW['wY'][0x3], XW['wR'][0x0], XW['wR'][0x2], XW['wR'][0x3]);
                        else {
                            if (0x1 === GY) {
                                if (this['wG']) {
                                    let GE = XO['Y2'][this['wG'][bz]];
                                    XO['Yr'](bq, bT, bI, bJ, bV, xG, GE), XO['Yr'](bq, bI, XW['wE'][0x3], bJ, xG, XW['wY'][0x3], GE);
                                }
                            } else {
                                if (0x2 === GY && this['wB'] && this['wX'] && XW['w2'] && XW['w5'] && XW['w4']) {
                                    let Gd = this['wB'][bz] >> 0x2,
                                        Gw = this['R5'][Gd],
                                        GR = this['R6'][Gd],
                                        Gt = this['R7'][Gd];
                                    XO['YR'](bq, bT, bI, bJ, bV, xG, XW['wR'][0x0], XW['wR'][0x1], XW['wR'][0x2], XW['w2'][Gw], XW['w5'][Gw], XW['w4'][Gw], XW['w2'][GR], XW['w2'][Gt], XW['w5'][GR], XW['w5'][Gt], XW['w4'][GR], XW['w4'][Gt], this['wX'][bz]), XO['YR'](bq, bI, XW['wE'][0x3], bJ, xG, XW['wY'][0x3], XW['wR'][0x0], XW['wR'][0x2], XW['wR'][0x3], XW['w2'][Gw], XW['w5'][Gw], XW['w4'][Gw], XW['w2'][GR], XW['w2'][Gt], XW['w5'][GR], XW['w5'][Gt], XW['w4'][GR], XW['w4'][Gt], this['wX'][bz]);
                                } else {
                                    if (0x3 === GY && this['wB'] && this['wX'] && this['wG'] && XW['w2'] && XW['w5'] && XW['w4']) {
                                        let Gc = this['wB'][bz] >> 0x2,
                                            Gr = this['R5'][Gc],
                                            GH = this['R6'][Gc],
                                            GP = this['R7'][Gc];
                                        XO['YR'](bq, bT, bI, bJ, bV, xG, this['wG'][bz], this['wG'][bz], this['wG'][bz], XW['w2'][Gr], XW['w5'][Gr], XW['w4'][Gr], XW['w2'][GH], XW['w2'][GP], XW['w5'][GH], XW['w5'][GP], XW['w4'][GH], XW['w4'][GP], this['wX'][bz]), XO['YR'](bq, bI, XW['wE'][0x3], bJ, xG, XW['wY'][0x3], this['wG'][bz], this['wG'][bz], this['wG'][bz], XW['w2'][Gr], XW['w5'][Gr], XW['w4'][Gr], XW['w2'][GH], XW['w2'][GP], XW['w5'][GH], XW['w5'][GP], XW['w4'][GH], XW['w4'][GP], this['wX'][bz]);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } ['ws'](bz, bj, ba, bq = !0x1) {
        XW['wQ'] && (this['Ro'] = -0x1, this['RQ'] = -0x1);
        for (let bV = 0x0; bV < this['wI']; bV++) XW['w6'] && (XW['w6'][bV] = 0x0);
        for (let xG = 0x0; xG < this['dn']; xG++)
            if ((!this['wB'] || -0x1 !== this['wB'][xG]) && XW['w3'] && XW['dS'] && XW['w0'] && XW['w9'] && XW['w6']) {
                let xg = this['wn'][xG],
                    xu = this['wk'][xG],
                    xM = this['wU'][xG],
                    xF = XW['w3'][xg],
                    xO = XW['w3'][xu],
                    xD = XW['w3'][xM],
                    xC = XW['dS'][xg],
                    xy = XW['dS'][xu],
                    xz = XW['dS'][xM],
                    xj = XW['w0'][xg],
                    xa = XW['w0'][xu],
                    xq = XW['w0'][xM];
                if (!bz || -0x1388 !== xF && -0x1388 !== xO && -0x1388 !== xD) {
                    if (bj && this['wJ'](XW['YG'], XW['YA'], xC, xy, xz, xF, xO, xD) && (XW['wp'][XW['wP']++] = ba, bj = !0x1), (xF - xO) * (xz - xy) - (xC - xy) * (xD - xO) <= 0x0) continue;
                    if (XW['w1'] && (XW['w1'][xG] = !0x1), XW['di'] && (XW['di'][xG] = xF < 0x0 || xO < 0x0 || xD < 0x0 || xF > Xu['ZH'] || xO > Xu['ZH'] || xD > Xu['ZH']), XW['w9'] && XW['w6']) {
                        let xT = ((xj + xa + xq) / 0x3 | 0x0) + this['wT'];
                        XW['w9'][xT][XW['w6'][xT]++] = xG, XW['wQ'] && this['wJ'](XW['YG'], XW['YA'], xC, xy, xz, xF, xO, xD) && this['RQ'] < xT && (this['Ro'] = xG, this['RQ'] = xT);
                    }
                } else {
                    if (XW['w1'] && (XW['w1'][xG] = !0x0), XW['w9'] && XW['w6']) {
                        let xI = ((xj + xa + xq) / 0x3 | 0x0) + this['wT'];
                        XW['w9'][xI][XW['w6'][xI]++] = xG;
                    }
                }
            } if (!this['RZ'] && XW['w6']) {
            for (let xJ = this['wI'] - 0x1; xJ >= 0x0; xJ--) {
                let xV = XW['w6'][xJ];
                if (!(xV <= 0x0) && XW['w9']) {
                    let xW = XW['w9'][xJ];
                    for (let xS = 0x0; xS < xV; xS++) try {
                        this['R3'](xW[xS], bq);
                    } catch (xi) {}
                }
            }
            return;
        }
        for (let G0 = 0x0; G0 < 0xc; G0++) XW['w8'] && XW['wd'] && (XW['w8'][G0] = 0x0, XW['wd'][G0] = 0x0);
        if (XW['w6'])
            for (let G1 = this['wI'] - 0x1; G1 >= 0x0; G1--) {
                let G2 = XW['w6'][G1];
                if (G2 > 0x0 && XW['w9']) {
                    let G3 = XW['w9'][G1];
                    for (let G4 = 0x0; G4 < G2; G4++)
                        if (this['RZ'] && XW['w8'] && XW['w7']) {
                            let G5 = G3[G4],
                                G6 = this['RZ'][G5],
                                G7 = XW['w8'][G6]++;
                            XW['w7'][G6][G7] = G5, G6 < 0xa && XW['wd'] ? XW['wd'][G6] += G1 : 0xa === G6 && XW['wo'] ? XW['wo'][G7] = G1 : XW['ww'] && (XW['ww'][G7] = G1);
                        }
                }
            }
        let bT = 0x0;
        XW['w8'] && XW['wd'] && (XW['w8'][0x1] > 0x0 || XW['w8'][0x2] > 0x0) && (bT = (XW['wd'][0x1] + XW['wd'][0x2]) / (XW['w8'][0x1] + XW['w8'][0x2]) | 0x0);
        let bI = 0x0;
        XW['w8'] && XW['wd'] && (XW['w8'][0x3] > 0x0 || XW['w8'][0x4] > 0x0) && (bI = (XW['wd'][0x3] + XW['wd'][0x4]) / (XW['w8'][0x3] + XW['w8'][0x4]) | 0x0);
        let bJ = 0x0;
        if (XW['w8'] && XW['wd'] && (XW['w8'][0x6] > 0x0 || XW['w8'][0x8] > 0x0) && (bJ = (XW['wd'][0x6] + XW['wd'][0x8]) / (XW['w8'][0x6] + XW['w8'][0x8]) | 0x0), XW['w8'] && XW['w7']) {
            let G8, G9 = 0x0,
                Go = XW['w8'][0xa],
                GQ = XW['w7'][0xa],
                GZ = XW['wo'];
            G9 === Go && (G9 = 0x0, Go = XW['w8'][0xb], GQ = XW['w7'][0xb], GZ = XW['ww']), G8 = G9 < Go && GZ ? GZ[G9] : -0x3e8;
            for (let GY = 0x0; GY < 0xa; GY++) {
                for (; 0x0 === GY && G8 > bT;) try {
                    this['R3'](GQ[G9++], bq), G9 === Go && GQ !== XW['w7'][0xb] && (G9 = 0x0, Go = XW['w8'][0xb], GQ = XW['w7'][0xb], GZ = XW['ww']), G8 = G9 < Go && GZ ? GZ[G9] : -0x3e8;
                } catch (Gw) {}
                for (; 0x3 === GY && G8 > bI;) try {
                    this['R3'](GQ[G9++], bq), G9 === Go && GQ !== XW['w7'][0xb] && (G9 = 0x0, Go = XW['w8'][0xb], GQ = XW['w7'][0xb], GZ = XW['ww']), G8 = G9 < Go && GZ ? GZ[G9] : -0x3e8;
                } catch (GR) {}
                for (; 0x5 === GY && G8 > bJ;) try {
                    this['R3'](GQ[G9++], bq), G9 === Go && GQ !== XW['w7'][0xb] && (G9 = 0x0, Go = XW['w8'][0xb], GQ = XW['w7'][0xb], GZ = XW['ww']), G8 = G9 < Go && GZ ? GZ[G9] : -0x3e8;
                } catch (Gt) {}
                let GE = XW['w8'][GY],
                    Gd = XW['w7'][GY];
                for (let Gc = 0x0; Gc < GE; Gc++) try {
                    this['R3'](Gd[Gc], bq);
                } catch (Gr) {}
            }
            for (; - 0x3e8 !== G8;) try {
                this['R3'](GQ[G9++], bq), G9 === Go && GQ !== XW['w7'][0xb] && (G9 = 0x0, GQ = XW['w7'][0xb], Go = XW['w8'][0xb], GZ = XW['ww']), G8 = G9 < Go && GZ ? GZ[G9] : -0x3e8;
            } catch (GH) {}
        }
    }
    static['RY'](bj, ba) {
        let bq, {
                df: bT,
                dn: bI,
                dm: bJ
            } = bj,
            bV = new Int32Array(bT),
            xG = new Int32Array(bT),
            xg = new Int32Array(bT);
        for (let xM = 0x0; xM < bT; xM++) bV[xM] = bj['wl'][xM], xG[xM] = bj['wK'][xM], xg[xM] = bj['wN'][xM];
        if (ba) bq = bj['R2'];
        else {
            if (bq = new Int32Array(bI), bj['R2']) {
                for (let xF = 0x0; xF < bI; xF++) bq[xF] = bj['R2'][xF];
            } else {
                for (let xO = 0x0; xO < bI; xO++) bq[xO] = 0x0;
            }
        }
        const xu = {};
        return xu['df'] = bT, xu['wl'] = bV, xu['wK'] = xG, xu['wN'] = xg, xu['dn'] = bI, xu['wn'] = bj['wn'], xu['wk'] = bj['wk'], xu['wU'] = bj['wU'], xu['wG'] = bj['wG'], xu['wg'] = bj['wg'], xu['wu'] = bj['wu'], xu['wB'] = bj['wB'], xu['RZ'] = bj['RZ'], xu['R2'] = bq, xu['wX'] = bj['wX'], xu['RE'] = bj['RE'], xu['dm'] = bJ, xu['R5'] = bj['R5'], xu['R6'] = bj['R6'], xu['R7'] = bj['R7'], xu['R0'] = bj['R0'], xu['R1'] = bj['R1'], new XW(xu);
    } ['Rd']() {
        for (let bz = 0x0; bz < this['df']; bz++) {
            let bj = this['wl'][bz];
            this['wl'][bz] = this['wN'][bz], this['wN'][bz] = -bj;
        }
    }
    static['Rw'](bj) {
        if (!XW['dD']) throw new Error();
        let ba = XW['dD'][bj];
        if (!ba) throw new Error();
        if (!(XW['dT'] && XW['dM'] && XW['dJ'] && XW['dV'] && XW['dW'] && XW['dI'] && XW['dO'] && XW['dF'] && XW['dy'] && XW['dC'] && XW['dz'] && XW['da'] && XW['dj'] && XW['dq'])) throw new Error();
        let {
            df: bq,
            dn: bT,
            dm: bI
        } = ba, bJ = new Int32Array(bq), bV = new Int32Array(bq), xG = new Int32Array(bq), xg = new Int32Array(bT), xu = new Int32Array(bT), xM = new Int32Array(bT), xF = new Int32Array(bI), xO = new Int32Array(bI), xD = new Int32Array(bI), xC = null;
        ba['dB'] >= 0x0 && (xC = new Int32Array(bq));
        let xy = null;
        ba['dG'] >= 0x0 && (xy = new Int32Array(bT));
        let xz = null,
            xj = 0x0;
        ba['dx'] >= 0x0 ? xz = new Int32Array(bT) : xj = -ba['dx'] - 0x1;
        let xa = null;
        ba['dg'] >= 0x0 && (xa = new Int32Array(bT));
        let xq = null;
        ba['du'] >= 0x0 && (xq = new Int32Array(bT));
        let xT = new Int32Array(bT);
        XW['dO']['S'] = ba['dA'], XW['dF']['S'] = ba['de'], XW['dy']['S'] = ba['dL'], XW['dC']['S'] = ba['ds'], XW['dz']['S'] = ba['dB'];
        let xI, xJ, xV, xW = 0x0,
            xS = 0x0,
            xi = 0x0;
        for (let G2 = 0x0; G2 < bq; G2++) {
            let G3 = XW['dO']['m']();
            xI = 0x0, 0x1 & G3 && (xI = XW['dF']['oQ']()), xJ = 0x0, 0x2 & G3 && (xJ = XW['dy']['oQ']()), xV = 0x0, 0x4 & G3 && (xV = XW['dC']['oQ']()), bJ[G2] = xW + xI, bV[G2] = xS + xJ, xG[G2] = xi + xV, xW = bJ[G2], xS = bV[G2], xi = xG[G2], xC && (xC[G2] = XW['dz']['m']());
        }
        XW['dM']['S'] = ba['dk'], XW['dJ']['S'] = ba['dG'], XW['dV']['S'] = ba['dx'], XW['dW']['S'] = ba['dg'], XW['dI']['S'] = ba['du'];
        for (let G4 = 0x0; G4 < bT; G4++) xT[G4] = XW['dM']['oZ'](), xy && (xy[G4] = XW['dJ']['m']()), xz && (xz[G4] = XW['dV']['m']()), xa && (xa[G4] = XW['dW']['m']()), xq && (xq[G4] = XW['dI']['m']());
        XW['da']['S'] = ba['db'], XW['dj']['S'] = ba['dX'], xI = 0x0, xJ = 0x0, xV = 0x0;
        let G0 = 0x0;
        for (let G5 = 0x0; G5 < bT; G5++) {
            let G6 = XW['dj']['m']();
            if (0x1 === G6) xI = XW['da']['oQ']() + G0, G0 = xI, xJ = XW['da']['oQ']() + G0, G0 = xJ, xV = XW['da']['oQ']() + G0, G0 = xV;
            else {
                if (0x2 === G6) xJ = xV, xV = XW['da']['oQ']() + G0, G0 = xV;
                else {
                    if (0x3 === G6) xI = xV, xV = XW['da']['oQ']() + G0, G0 = xV;
                    else {
                        if (0x4 === G6) {
                            let G7 = xI;
                            xI = xJ, xJ = G7, xV = XW['da']['oQ']() + G0, G0 = xV;
                        }
                    }
                }
            }
            xg[G5] = xI, xu[G5] = xJ, xM[G5] = xV;
        }
        XW['dq']['S'] = 0x6 * ba['dU'];
        for (let G8 = 0x0; G8 < bI; G8++) xF[G8] = XW['dq']['oZ'](), xO[G8] = XW['dq']['oZ'](), xD[G8] = XW['dq']['oZ']();
        const G1 = {};
        return G1['df'] = bq, G1['wl'] = bJ, G1['wK'] = bV, G1['wN'] = xG, G1['dn'] = bT, G1['wn'] = xg, G1['wk'] = xu, G1['wU'] = xM, G1['wG'] = null, G1['wg'] = null, G1['wu'] = null, G1['wB'] = xy, G1['RZ'] = xz, G1['R2'] = xa, G1['wX'] = xT, G1['RE'] = xj, G1['dm'] = bI, G1['R5'] = xF, G1['R6'] = xO, G1['R7'] = xD, G1['wO'] = xC, G1['wD'] = xq, new XW(G1);
    } ['RR'](bz, bj, ba) {
        if (-0x1 !== bz) {
            if (ba && -0x1 !== bj) {
                let bq = XI['EI'][bz],
                    bT = XI['EI'][bj],
                    bI = bq['dl'];
                XW['wZ'] = 0x0, XW['wr'] = 0x0, XW['wc'] = 0x0;
                let bJ = 0x0,
                    bV = ba[bJ++];
                for (let xG = 0x0; xG < bq['dK']; xG++) {
                    if (!bq['dN']) continue;
                    let xg = bq['dN'][xG];
                    for (; xg > bV;) bV = ba[bJ++];
                    bI && bI['dP'] && bq['x'] && bq['y'] && bq['z'] && bI['dp'] && (xg !== bV || 0x0 === bI['dP'][xg]) && this['wi'](bq['x'][xG], bq['y'][xG], bq['z'][xG], bI['dp'][xg], bI['dP'][xg]);
                }
                XW['wZ'] = 0x0, XW['wr'] = 0x0, XW['wc'] = 0x0, bJ = 0x0, bV = ba[bJ++];
                for (let xu = 0x0; xu < bT['dK']; xu++) {
                    if (!bT['dN']) continue;
                    let xM = bT['dN'][xu];
                    for (; xM > bV;) bV = ba[bJ++];
                    bI && bI['dP'] && bT['x'] && bT['y'] && bT['z'] && bI['dp'] && (xM === bV || 0x0 === bI['dP'][xM]) && this['wi'](bT['x'][xu], bT['y'][xu], bT['z'][xu], bI['dp'][xM], bI['dP'][xM]);
                }
            } else this['Rc'](bz);
        }
    }
    static['Rr'](bj, ba) {
        let bq = !0x1,
            bT = !0x1,
            bI = !0x1,
            bJ = !0x1,
            bV = 0x0,
            xG = 0x0,
            xg = 0x0,
            xu = -0x1;
        for (let G0 = 0x0; G0 < ba; G0++) {
            let G1 = bj[G0];
            G1 && (bV += G1['df'], xG += G1['dn'], xg += G1['dm'], bq ||= null !== G1['wB'], G1['RZ'] ? bT = !0x0 : (-0x1 === xu && (xu = G1['RE']), xu !== G1['RE'] && (bT = !0x0)), bI ||= null !== G1['R2'], bJ ||= null !== G1['wD']);
        }
        let xM = new Int32Array(bV),
            xF = new Int32Array(bV),
            xO = new Int32Array(bV),
            xD = new Int32Array(bV),
            xC = new Int32Array(xG),
            xy = new Int32Array(xG),
            xz = new Int32Array(xG),
            xj = new Int32Array(xg),
            xa = new Int32Array(xg),
            xq = new Int32Array(xg),
            xT = null;
        bq && (xT = new Int32Array(xG));
        let xI = null;
        bT && (xI = new Int32Array(xG));
        let xJ = null;
        bI && (xJ = new Int32Array(xG));
        let xV = null;
        bJ && (xV = new Int32Array(xG));
        let xW = new Int32Array(xG);
        bV = 0x0, xG = 0x0, xg = 0x0;
        let xS = (G2, G3, G4, G5, G6, G7, G8) => {
            let G9 = -0x1,
                Go = G2['wl'][G3],
                GQ = G2['wK'][G3],
                GZ = G2['wN'][G3];
            for (let GY = 0x0; GY < G8; GY++)
                if (Go === G4[GY] && GQ === G5[GY] && GZ === G6[GY]) {
                    G9 = GY;
                    break;
                } return -0x1 === G9 && (G4[G8] = Go, G5[G8] = GQ, G6[G8] = GZ, G7 && G2['wO'] && (G7[G8] = G2['wO'][G3]), G9 = G8++), {
                'RH': G9,
                'df': G8
            };
        };
        for (let G2 = 0x0; G2 < ba; G2++) {
            let G3 = bj[G2];
            if (G3) {
                for (let G4 = 0x0; G4 < G3['dn']; G4++) {
                    bq && (G3['wB'] ? xT && (xT[xG] = G3['wB'][G4]) : xT && (xT[xG] = 0x0)), bT && (G3['RZ'] ? xI && (xI[xG] = G3['RZ'][G4]) : xI && (xI[xG] = G3['RE'])), bI && (G3['R2'] ? xJ && (xJ[xG] = G3['R2'][G4]) : xJ && (xJ[xG] = 0x0)), bJ && G3['wD'] && xV && (xV[xG] = G3['wD'][G4]), G3['wX'] && (xW[xG] = G3['wX'][G4]);
                    let G5 = xS(G3, G3['wn'][G4], xM, xF, xO, xD, bV);
                    bV = G5['df'];
                    let G6 = xS(G3, G3['wk'][G4], xM, xF, xO, xD, bV);
                    bV = G6['df'];
                    let G7 = xS(G3, G3['wU'][G4], xM, xF, xO, xD, bV);
                    bV = G7['df'], xC[xG] = G5['RH'], xy[xG] = G6['RH'], xz[xG] = G7['RH'], xG++;
                }
                for (let G8 = 0x0; G8 < G3['dm']; G8++) {
                    let G9 = xS(G3, G3['R5'][G8], xM, xF, xO, xD, bV);
                    bV = G9['df'];
                    let Go = xS(G3, G3['R6'][G8], xM, xF, xO, xD, bV);
                    bV = Go['df'];
                    let GQ = xS(G3, G3['R7'][G8], xM, xF, xO, xD, bV);
                    bV = GQ['df'], xj[xg] = G9['RH'], xa[xg] = Go['RH'], xq[xg] = GQ['RH'], xg++;
                }
            }
        }
        const xi = {};
        return xi['df'] = bV, xi['wl'] = xM, xi['wK'] = xF, xi['wN'] = xO, xi['dn'] = xG, xi['wn'] = xC, xi['wk'] = xy, xi['wU'] = xz, xi['wG'] = null, xi['wg'] = null, xi['wu'] = null, xi['wB'] = xT, xi['RZ'] = xI, xi['R2'] = xJ, xi['wX'] = xW, xi['RE'] = xu, xi['dm'] = xg, xi['R5'] = xj, xi['R6'] = xa, xi['R7'] = xq, xi['wO'] = xD, xi['wD'] = xV, new XW(xi);
    }
    static['RP'](bj, ba) {
        let bq = !0x1,
            bT = !0x1,
            bI = !0x1,
            bJ = !0x1,
            bV = 0x0,
            xG = 0x0,
            xg = 0x0,
            xu = -0x1;
        for (let G1 = 0x0; G1 < ba; G1++) {
            let G2 = bj[G1];
            G2 && (bV += G2['df'], xG += G2['dn'], xg += G2['dm'], bq ||= null !== G2['wB'], G2['RZ'] ? bT = !0x0 : (-0x1 === xu && (xu = G2['RE']), xu !== G2['RE'] && (bT = !0x0)), bI ||= null !== G2['R2'], bJ ||= null !== G2['wX']);
        }
        let xM = new Int32Array(bV),
            xF = new Int32Array(bV),
            xO = new Int32Array(bV),
            xD = new Int32Array(xG),
            xC = new Int32Array(xG),
            xy = new Int32Array(xG),
            xz = new Int32Array(xG),
            xj = new Int32Array(xG),
            xa = new Int32Array(xG),
            xq = new Int32Array(xg),
            xT = new Int32Array(xg),
            xI = new Int32Array(xg),
            xJ = null;
        bq && (xJ = new Int32Array(xG));
        let xV = null;
        bT && (xV = new Int32Array(xG));
        let xW = null;
        bI && (xW = new Int32Array(xG));
        let xS = null;
        bJ && (xS = new Int32Array(xG)), bV = 0x0, xG = 0x0, xg = 0x0;
        for (let G3 = 0x0; G3 < ba; G3++) {
            let G4 = bj[G3];
            if (G4) {
                let G5 = bV;
                for (let G6 = 0x0; G6 < G4['df']; G6++) xM[bV] = G4['wl'][G6], xF[bV] = G4['wK'][G6], xO[bV] = G4['wN'][G6], bV++;
                for (let G7 = 0x0; G7 < G4['dn']; G7++) xD[xG] = G4['wn'][G7] + G5, xC[xG] = G4['wk'][G7] + G5, xy[xG] = G4['wU'][G7] + G5, G4['wG'] && (xz[xG] = G4['wG'][G7]), G4['wg'] && (xj[xG] = G4['wg'][G7]), G4['wu'] && (xa[xG] = G4['wu'][G7]), bq && (G4['wB'] ? xJ && (xJ[xG] = G4['wB'][G7]) : xJ && (xJ[xG] = 0x0)), bT && (G4['RZ'] ? xV && (xV[xG] = G4['RZ'][G7]) : xV && (xV[xG] = G4['RE'])), bI && (G4['R2'] ? xW && (xW[xG] = G4['R2'][G7]) : xW && (xW[xG] = 0x0)), bJ && G4['wX'] && xS && (xS[xG] = G4['wX'][G7]), xG++;
                for (let G8 = 0x0; G8 < G4['dm']; G8++) xq[xg] = G4['R5'][G8] + G5, xT[xg] = G4['R6'][G8] + G5, xI[xg] = G4['R7'][G8] + G5, xg++;
            }
        }
        const xi = {};
        xi['df'] = bV, xi['wl'] = xM, xi['wK'] = xF, xi['wN'] = xO, xi['dn'] = xG, xi['wn'] = xD, xi['wk'] = xC, xi['wU'] = xy, xi['wG'] = xz, xi['wg'] = xj, xi['wu'] = xa, xi['wB'] = xJ, xi['RZ'] = xV, xi['R2'] = xW, xi['wX'] = xS, xi['RE'] = xu, xi['dm'] = xg, xi['R5'] = xq, xi['R6'] = xT, xi['R7'] = xI;
        let G0 = new XW(xi);
        return G0['R9'](), G0;
    } ['Rc'](bz) {
        if (!this['R0'] || -0x1 === bz || !XI['EI'][bz]) return;
        let bj = XI['EI'][bz],
            ba = bj['dl'];
        XW['wZ'] = 0x0, XW['wr'] = 0x0, XW['wc'] = 0x0;
        for (let bq = 0x0; bq < bj['dK']; bq++) {
            if (!(bj['dN'] && bj['x'] && bj['y'] && bj['z'] && ba && ba['dp'] && ba['dP'])) continue;
            let bT = bj['dN'][bq];
            this['wi'](bj['x'][bq], bj['y'][bq], bj['z'][bq], ba['dp'][bT], ba['dP'][bT]);
        }
    }
    static['wM'](bz, bj, ba) {
        return 0x2 & ~ba ? ((bj = bj * (0x7f & bz) >> 0x7) < 0x2 ? bj = 0x2 : bj > 0x7e && (bj = 0x7e), (0xff80 & bz) + bj) : (bj < 0x0 ? bj = 0x0 : bj > 0x7f && (bj = 0x7f), 0x7f - bj);
    } ['Rp'](bz) {
        let bj = XO['oy'][bz],
            ba = XO['Y3'][bz];
        for (let bq = 0x0; bq < this['df']; bq++) {
            let bT = this['wK'][bq] * ba - this['wN'][bq] * bj >> 0x10;
            this['wN'][bq] = this['wK'][bq] * bj + this['wN'][bq] * ba >> 0x10, this['wK'][bq] = bT;
        }
    }
    static['Rh'](bj, ba, bq, bT) {
        let bI, bJ, bV, xG, xg, {
            df: xu,
            dn: xM,
            dm: xF
        } = bj;
        if (bT) bI = bj['wl'], bJ = bj['wK'], bV = bj['wN'];
        else {
            bI = new Int32Array(xu), bJ = new Int32Array(xu), bV = new Int32Array(xu);
            for (let xD = 0x0; xD < xu; xD++) bI[xD] = bj['wl'][xD], bJ[xD] = bj['wK'][xD], bV[xD] = bj['wN'][xD];
        }
        if (ba) xG = bj['wX'];
        else {
            xG = new Int32Array(xM);
            for (let xC = 0x0; xC < xM; xC++) bj['wX'] && (xG[xC] = bj['wX'][xC]);
        }
        if (bq) xg = bj['R2'];
        else {
            if (xg = new Int32Array(xM), bj['R2']) {
                for (let xy = 0x0; xy < xM; xy++) xg[xy] = bj['R2'][xy];
            } else {
                for (let xz = 0x0; xz < xM; xz++) xg[xz] = 0x0;
            }
        }
        const xO = {};
        return xO['df'] = xu, xO['wl'] = bI, xO['wK'] = bJ, xO['wN'] = bV, xO['dn'] = xM, xO['wn'] = bj['wn'], xO['wk'] = bj['wk'], xO['wU'] = bj['wU'], xO['wG'] = null, xO['wg'] = null, xO['wu'] = null, xO['wB'] = bj['wB'], xO['RZ'] = bj['RZ'], xO['R2'] = xg, xO['wX'] = xG, xO['RE'] = bj['RE'], xO['dm'] = xF, xO['R5'] = bj['R5'], xO['R6'] = bj['R6'], xO['R7'] = bj['R7'], xO['wO'] = bj['wO'], xO['wD'] = bj['wD'], new XW(xO);
    } ['Rl']() {
        if (this['wO']) {
            let bz = new Int32Array(0x100),
                bj = 0x0;
            for (let bq = 0x0; bq < this['df']; bq++) {
                let bT = this['wO'][bq];
                bz[bT]++, bT > bj && (bj = bT);
            }
            this['R0'] = new kY(bj + 0x1, null);
            for (let bI = 0x0; bI <= bj; bI++) this['R0'][bI] = new Int32Array(bz[bI]), bz[bI] = 0x0;
            let ba = 0x0;
            for (; ba < this['df'];) {
                let bJ = this['wO'][ba],
                    bV = this['R0'][bJ];
                bV && (bV[bz[bJ]++] = ba++);
            }
            this['wO'] = null;
        }
        if (this['wD']) {
            let xG = new Int32Array(0x100),
                xg = 0x0;
            for (let xM = 0x0; xM < this['dn']; xM++) {
                let xF = this['wD'][xM];
                xG[xF]++, xF > xg && (xg = xF);
            }
            this['R1'] = new kY(xg + 0x1, null);
            for (let xO = 0x0; xO <= xg; xO++) this['R1'][xO] = new Int32Array(xG[xO]), xG[xO] = 0x0;
            let xu = 0x0;
            for (; xu < this['dn'];) {
                let xD = this['wD'][xu],
                    xC = this['R1'][xD];
                xC && (xC[xG[xD]++] = xu++);
            }
            this['wD'] = null;
        }
    }
    static['l'](bz) {
        const F2 = uh;
        try {
            XW['dT'] = new k8(bz['Qw'](F2(0x146))), XW['dM'] = new k8(bz['Qw'](F2(0x148))), XW['dJ'] = new k8(bz['Qw']('ob_face2.dat')), XW['dV'] = new k8(bz['Qw'](F2(0x1c6))), XW['dW'] = new k8(bz['Qw'](F2(0x25e))), XW['dI'] = new k8(bz['Qw'](F2(0x2fa))), XW['dO'] = new k8(bz['Qw'](F2(0x28d))), XW['dF'] = new k8(bz['Qw'](F2(0x2c6))), XW['dy'] = new k8(bz['Qw'](F2(0x2ce))), XW['dC'] = new k8(bz['Qw'](F2(0x1b1))), XW['dz'] = new k8(bz['Qw']('ob_point5.dat')), XW['da'] = new k8(bz['Qw'](F2(0x25a))), XW['dj'] = new k8(bz['Qw'](F2(0x17f))), XW['dq'] = new k8(bz['Qw'](F2(0x320))), XW['dT']['S'] = 0x0, XW['dO']['S'] = 0x0, XW['dF']['S'] = 0x0, XW['dy']['S'] = 0x0, XW['dC']['S'] = 0x0, XW['da']['S'] = 0x0, XW['dj']['S'] = 0x0;
            let bj = XW['dT']['oZ']();
            XW['dD'] = new kY(bj + 0x64, null);
            let ba = 0x0,
                bq = 0x0,
                bT = 0x0,
                bI = 0x0,
                bJ = 0x0,
                bV = 0x0,
                xG = 0x0;
            for (let xg = 0x0; xg < bj; xg++) {
                let xu = XW['dT']['oZ'](),
                    xM = new XJ();
                xM['df'] = XW['dT']['oZ'](), xM['dn'] = XW['dT']['oZ'](), xM['dm'] = XW['dT']['m'](), xM['dA'] = XW['dO']['S'], xM['de'] = XW['dF']['S'], xM['dL'] = XW['dy']['S'], xM['ds'] = XW['dC']['S'], xM['db'] = XW['da']['S'], xM['dX'] = XW['dj']['S'];
                let xF = XW['dT']['m'](),
                    xO = XW['dT']['m'](),
                    xD = XW['dT']['m'](),
                    xC = XW['dT']['m'](),
                    xy = XW['dT']['m']();
                for (let xz = 0x0; xz < xM['df']; xz++) {
                    let xj = XW['dO']['m']();
                    0x1 & xj && XW['dF']['oQ'](), 0x2 & xj && XW['dy']['oQ'](), 0x4 & xj && XW['dC']['oQ']();
                }
                for (let xa = 0x0; xa < xM['dn']; xa++) 0x1 === XW['dj']['m']() && (XW['da']['oQ'](), XW['da']['oQ']()), XW['da']['oQ']();
                xM['dk'] = bT, bT += 0x2 * xM['dn'], 0x1 === xF && (xM['dG'] = bI, bI += xM['dn']), 0xff === xO ? (xM['dx'] = bJ, bJ += xM['dn']) : xM['dx'] = -xO - 0x1, 0x1 === xD && (xM['dg'] = bV, bV += xM['dn']), 0x1 === xC && (xM['du'] = xG, xG += xM['dn']), 0x1 === xy && (xM['dB'] = bq, bq += xM['df']), xM['dU'] = ba, ba += xM['dm'], XW['dD'][xu] = xM;
            }
        } catch (xq) {}
    }
    static['RK'](bj, ba, bq) {
        let bT, {
            df: bI,
            dn: bJ,
            dm: bV
        } = bj;
        if (ba) {
            bT = new Int32Array(bI);
            for (let xC = 0x0; xC < bI; xC++) bT[xC] = bj['wK'][xC];
        } else bT = bj['wK'];
        let xG, xg, xu, xM, xF = null,
            xO = null;
        if (bq) {
            xG = new Int32Array(bJ), xg = new Int32Array(bJ), xu = new Int32Array(bJ);
            for (let xy = 0x0; xy < bJ; xy++) bj['wG'] && (xG[xy] = bj['wG'][xy]), bj['wg'] && (xg[xy] = bj['wg'][xy]), bj['wu'] && (xu[xy] = bj['wu'][xy]);
            if (xM = new Int32Array(bJ), bj['wB']) {
                for (let xz = 0x0; xz < bJ; xz++) xM[xz] = bj['wB'][xz];
            } else {
                for (let xj = 0x0; xj < bJ; xj++) xM[xj] = 0x0;
            }
            xF = new kY(bI, null);
            for (let xa = 0x0; xa < bI; xa++) {
                let xq = xF[xa] = new XV();
                if (bj['wx']) {
                    let xT = bj['wx'][xa];
                    xT && (xq['x'] = xT['x'], xq['y'] = xT['y'], xq['z'] = xT['z'], xq['w'] = xT['w']);
                }
            }
            xO = bj['wF'];
        } else xG = bj['wG'], xg = bj['wg'], xu = bj['wu'], xM = bj['wB'];
        const xD = {};
        return xD['df'] = bI, xD['wl'] = bj['wl'], xD['wK'] = bT, xD['wN'] = bj['wN'], xD['dn'] = bJ, xD['wn'] = bj['wn'], xD['wk'] = bj['wk'], xD['wU'] = bj['wU'], xD['wG'] = xG, xD['wg'] = xg, xD['wu'] = xu, xD['wB'] = xM, xD['RZ'] = bj['RZ'], xD['R2'] = bj['R2'], xD['wX'] = bj['wX'], xD['RE'] = bj['RE'], xD['dm'] = bV, xD['R5'] = bj['R5'], xD['R6'] = bj['R6'], xD['R7'] = bj['R7'], xD['wz'] = bj['wz'], xD['wj'] = bj['wj'], xD['wq'] = bj['wq'], xD['wa'] = bj['wa'], xD['wf'] = bj['wf'], xD['wy'] = bj['wy'], xD['wL'] = bj['wL'], xD['wI'] = bj['wI'], xD['wT'] = bj['wT'], xD['wx'] = xF, xD['wF'] = xO, new XW(xD);
    }
    constructor(bz) {
        super(), this['df'] = bz['df'], this['wl'] = bz['wl'], this['wK'] = bz['wK'], this['wN'] = bz['wN'], this['dn'] = bz['dn'], this['wn'] = bz['wn'], this['wk'] = bz['wk'], this['wU'] = bz['wU'], this['wG'] = bz['wG'], this['wg'] = bz['wg'], this['wu'] = bz['wu'], this['wB'] = bz['wB'], this['RZ'] = bz['RZ'], this['R2'] = bz['R2'], this['wX'] = bz['wX'], this['RE'] = bz['RE'], this['dm'] = bz['dm'], this['R5'] = bz['R5'], this['R6'] = bz['R6'], this['R7'] = bz['R7'], this['wz'] = bz['wz'] ?? 0x0, this['wj'] = bz['wj'] ?? 0x0, this['wq'] = bz['wq'] ?? 0x0, this['wa'] = bz['wa'] ?? 0x0, this['wf'] = bz['wf'] ?? 0x0, this['wy'] = bz['wy'] ?? 0x0, this['wL'] = bz['wL'] ?? 0x0, this['wI'] = bz['wI'] ?? 0x0, this['wT'] = bz['wT'] ?? 0x0, this['wO'] = bz['wO'] ?? null, this['wD'] = bz['wD'] ?? null, this['R0'] = bz['R0'] ?? null, this['R1'] = bz['R1'] ?? null, this['wx'] = bz['wx'] ?? null, this['wF'] = bz['wF'] ?? null;
    } ['RN']() {
        const F3 = uh;
        this['wL'] = 0x0, this['wy'] = 0x0;
        for (let bz = 0x0; bz < this['df']; bz++) {
            let bj = this['wK'][bz]; - bj > this['wL'] && (this['wL'] = -bj), bj > this['wy'] && (this['wy'] = bj);
        }
        this['wT'] = Math[F3(0x1d3)](this['wf'] * this['wf'] + this['wL'] * this['wL']) + 0.99 | 0x0, this['wI'] = this['wT'] + (Math['sqrt'](this['wf'] * this['wf'] + this['wy'] * this['wy']) + 0.99 | 0x0);
    } ['R9']() {
        const F4 = uh;
        this['wL'] = 0x0, this['wf'] = 0x0, this['wy'] = 0x0;
        for (let bz = 0x0; bz < this['df']; bz++) {
            let bj = this['wl'][bz],
                ba = this['wK'][bz],
                bq = this['wN'][bz]; - ba > this['wL'] && (this['wL'] = -ba), ba > this['wy'] && (this['wy'] = ba);
            let bT = bj * bj + bq * bq;
            bT > this['wf'] && (this['wf'] = bT);
        }
        this['wf'] = Math['sqrt'](this['wf']) + 0.99 | 0x0, this['wT'] = Math[F4(0x1d3)](this['wf'] * this['wf'] + this['wL'] * this['wL']) + 0.99 | 0x0, this['wI'] = this['wT'] + (Math[F4(0x1d3)](this['wf'] * this['wf'] + this['wy'] * this['wy']) + 0.99 | 0x0);
    } ['wK'];
    ['df'];
    ['wl'];
    ['wn'];
    ['wk'];
    ['wN'];
    ['dn'];
    ['wU'];
    ['wG'];
    ['wg'];
    ['wu'];
    ['wB'];
    ['RZ'];
    ['R2'];
    ['wX'];
    ['RE'];
    ['R6'];
    ['R5'];
    ['wj'];
    ['wa'];
    ['wz'];
    ['wq'];
    ['dm'];
    ['wy'];
    ['R7'];
    ['wf'];
    ['wL'];
    ['wI'];
    ['wF'];
    ['wT'];
    ['wD'];
    ['wO'];
    ['Rv'] = 0x0;
    ['R1'];
    ['wx'];
    ['R0'];
    ['Ro'] = -0x1;
    ['RQ'] = -0x1;
    ['we'] = !0x1;
}
class XS extends Xy {
    static['EJ'] = 0x0;
    static['Rn'] = null;
    static['RU'] = null;
    static['Rm'] = null;
    static['Rf'] = 0x0;
    static['RL'] = new Xq(0x1f4);
    static['Re'] = new Xq(0x1e);
    static['l'](bz) {
        const F5 = uh;
        this['RU'] = new k8(bz['Qw']('loc.dat'));
        let bj = new k8(bz['Qw'](F5(0x1ad)));
        this['EJ'] = bj['oZ'](), this['Rm'] = new Int32Array(this['EJ']);
        let ba = 0x2;
        for (let bq = 0x0; bq < this['EJ']; bq++) this['Rm'][bq] = ba, ba += bj['oZ']();
        this['Rn'] = new kY(0xa, null);
        for (let bT = 0x0; bT < 0xa; bT++) this['Rn'][bT] = new XS(-0x1);
    }
    static[uh(0x321)](bz) {
        const F6 = uh;
        if (!this['Rn'] || !this['Rm'] || !this['RU']) throw new Error();
        for (let ba = 0x0; ba < 0xa; ba++) {
            let bq = this['Rn'][ba];
            if (bq && bq['Eq'] === bz) return bq;
        }
        this['Rf'] = (this['Rf'] + 0x1) % 0xa;
        let bj = this['Rn'][this['Rf']];
        return this['RU']['S'] = this['Rm'][bz], bj['Eq'] = bz, bj['reset'](), bj['ET'](this['RU']), bj['Rs'] || (bj['Rs'] = new Int32Array(0x1)), -0x1 === bj['RA'] && bj['Rs'] && (bj['Rb'] = bj['Rs'][F6(0x2ea)] > 0x0 && bj['Rs'][0x0] === kr['Qf']['id'], bj['Rk'] && (bj['Rb'] = !0x0)), bj;
    } ['RB'] = null;
    ['Rs'] = null;
    [uh(0x260)] = null;
    ['RX'] = null;
    ['Rx'] = null;
    ['RG'] = null;
    [uh(0x1a2)] = 0x1;
    [uh(0x2ea)] = 0x1;
    ['Rg'] = !0x0;
    ['Ru'] = !0x0;
    ['Rb'] = !0x1;
    ['RA'] = -0x1;
    ['RM'] = !0x1;
    ['RF'] = !0x1;
    ['d2'] = !0x1;
    ['RO'] = -0x1;
    ['RD'] = !0x1;
    ['RC'] = 0x10;
    ['Ry'] = 0x0;
    ['Rz'] = 0x0;
    ['Rk'] = null;
    ['Rj'] = -0x1;
    ['Ra'] = -0x1;
    ['Rq'] = !0x1;
    ['RT'] = !0x0;
    ['RI'] = 0x80;
    ['RJ'] = 0x80;
    ['RV'] = 0x80;
    ['RW'] = 0x0;
    ['RS'] = 0x0;
    ['Ri'] = 0x0;
    ['t0'] = 0x0;
    ['t1'] = !0x1;
    ['l'](bz, bj) {
        const F7 = uh;
        if (0x1 === bz) {
            let ba = bj['m']();
            this['RB'] = new Int32Array(ba), this['Rs'] = new Int32Array(ba);
            for (let bq = 0x0; bq < ba; bq++) this['RB'][bq] = bj['oZ'](), this['Rs'][bq] = bj['m']();
        } else {
            if (0x2 === bz) this[F7(0x260)] = bj['o9']();
            else {
                if (0x3 === bz) this['RX'] = bj['o9']();
                else {
                    if (0xe === bz) this[F7(0x1a2)] = bj['m']();
                    else {
                        if (0xf === bz) this[F7(0x2ea)] = bj['m']();
                        else {
                            if (0x11 === bz) this['Rg'] = !0x1;
                            else {
                                if (0x12 === bz) this['Ru'] = !0x1;
                                else {
                                    if (0x13 === bz) this['RA'] = bj['m'](), 0x1 === this['RA'] && (this['Rb'] = !0x0);
                                    else {
                                        if (0x15 === bz) this['RM'] = !0x0;
                                        else {
                                            if (0x16 === bz) this['RF'] = !0x0;
                                            else {
                                                if (0x17 === bz) this['d2'] = !0x0;
                                                else {
                                                    if (0x18 === bz) this['RO'] = bj['oZ'](), 0xffff === this['RO'] && (this['RO'] = -0x1);
                                                    else {
                                                        if (0x19 === bz) this['RD'] = !0x0;
                                                        else {
                                                            if (0x1c === bz) this['RC'] = bj['m']();
                                                            else {
                                                                if (0x1d === bz) this['Ry'] = bj['oo']();
                                                                else {
                                                                    if (0x27 === bz) this['Rz'] = bj['oo']();
                                                                    else {
                                                                        if (bz >= 0x1e && bz < 0x27) this['Rk'] || (this['Rk'] = new kY(0x5, null)), this['Rk'][bz - 0x1e] = bj['o9'](), F7(0x2ad) === this['Rk'][bz - 0x1e]?.[F7(0x19a)]() && (this['Rk'][bz - 0x1e] = null);
                                                                        else {
                                                                            if (0x28 === bz) {
                                                                                let bT = bj['m']();
                                                                                this['Rx'] = new Uint16Array(bT), this['RG'] = new Uint16Array(bT);
                                                                                for (let bI = 0x0; bI < bT; bI++) this['Rx'][bI] = bj['oZ'](), this['RG'][bI] = bj['oZ']();
                                                                            } else 0x3c === bz ? this['Rj'] = bj['oZ']() : 0x3e === bz ? this['Rq'] = !0x0 : 0x40 === bz ? this['RT'] = !0x1 : 0x41 === bz ? this['RI'] = bj['oZ']() : 0x42 === bz ? this['RJ'] = bj['oZ']() : 0x43 === bz ? this['RV'] = bj['oZ']() : 0x44 === bz ? this['Ra'] = bj['oZ']() : 0x45 === bz ? this['RW'] = bj['m']() : 0x46 === bz ? this['RS'] = bj['oc']() : 0x47 === bz ? this['Ri'] = bj['oc']() : 0x48 === bz ? this['t0'] = bj['oc']() : 0x49 === bz && (this['t1'] = !0x0);
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } ['t2'](bz, bj, ba, bq, bT, bI, bJ) {
        const F8 = uh;
        if (!this['Rs']) return null;
        let bV = -0x1;
        for (let xy = 0x0; xy < this['Rs'][F8(0x2ea)]; xy++)
            if (this['Rs'][xy] === bz) {
                bV = xy;
                break;
            } if (-0x1 === bV) return null;
        let xG = BigInt(BigInt(this['Eq']) << 0x6n) + BigInt(BigInt(bV) << 0x3n) + BigInt(bj) + BigInt(BigInt(bJ) + 0x1n << 0x20n),
            xg = XS['Re']?.[F8(0x321)](xG);
        if (xg) {
            if ((this['RM'] || this['RF']) && (xg = XW['RK'](xg, this['RM'], this['RF'])), this['RM']) {
                let xz = (ba + bq + bT + bI) / 0x4 | 0x0;
                for (let xj = 0x0; xj < xg['df']; xj++) {
                    let xa = xg['wl'][xj],
                        xq = ba + ((bq - ba) * (xa + 0x40) / 0x80 | 0x0),
                        xT = xq + ((bI + ((bT - bI) * (xa + 0x40) / 0x80 | 0x0) - xq) * (xg['wN'][xj] + 0x40) / 0x80 | 0x0);
                    xg['wK'][xj] += xT - xz;
                }
                xg['RN']();
            }
            return xg;
        }
        if (!this['RB']) return null;
        if (bV >= this['RB']['length']) return null;
        let xu = this['RB'][bV];
        if (-0x1 === xu) return null;
        let xM = this['Rq'] !== bj > 0x3;
        xM && (xu += 0x10000);
        let xF = XS['RL']?.[F8(0x321)](BigInt(xu));
        xF || (xF = XW['Rw'](0xffff & xu), xM && xF['wv'](), XS['RL']?.['put'](BigInt(xu), xF));
        let xO = 0x80 !== this['RI'] || 0x80 !== this['RJ'] || 0x80 !== this['RV'],
            xD = 0x0 !== this['RS'] || 0x0 !== this['Ri'] || 0x0 !== this['t0'],
            xC = XW['Rh'](xF, !this['Rx'], !this['RD'], 0x0 === bj && -0x1 === bJ && !xO && !xD);
        for (-0x1 !== bJ && (xC['Rl'](), xC['Rc'](bJ), xC['R1'] = null, xC['R0'] = null); bj-- > 0x0;) xC['Rd']();
        if (this['Rx'] && this['RG']) {
            for (let xI = 0x0; xI < this['Rx'][F8(0x2ea)]; xI++) xC['wW'](this['Rx'][xI], this['RG'][xI]);
        }
        if (xO && xC['wh'](this['RI'], this['RJ'], this['RV']), xD && xC['wV'](this['Ri'], this['RS'], this['t0']), xC['R8'](0x40 + (0xff & this['Ry']), 0x5 * (0xff & this['Rz']) + 0x300, -0x32, -0xa, -0x32, !this['RF']), this['Rg'] && (xC['Rv'] = xC['wL']), XS['Re']?.['put'](xG, xC), (this['RM'] || this['RF']) && (xC = XW['RK'](xC, this['RM'], this['RF'])), this['RM']) {
            let xJ = (ba + bq + bT + bI) / 0x4 | 0x0;
            for (let xV = 0x0; xV < xC['df']; xV++) {
                let xW = xC['wl'][xV],
                    xS = ba + ((bq - ba) * (xW + 0x40) / 0x80 | 0x0),
                    xi = xS + ((bI + ((bT - bI) * (xW + 0x40) / 0x80 | 0x0) - xS) * (xC['wN'][xV] + 0x40) / 0x80 | 0x0);
                xC['wK'][xV] += xi - xJ;
            }
            xC['RN']();
        }
        return xC;
    } [uh(0x25c)]() {
        const F9 = uh;
        this['RB'] = null, this['Rs'] = null, this[F9(0x260)] = null, this['RX'] = null, this['Rx'] = null, this['RG'] = null, this[F9(0x1a2)] = 0x1, this['length'] = 0x1, this['Rg'] = !0x0, this['Ru'] = !0x0, this['Rb'] = !0x1, this['RA'] = -0x1, this['RM'] = !0x1, this['RF'] = !0x1, this['d2'] = !0x1, this['RO'] = -0x1, this['RC'] = 0x10, this['Ry'] = 0x0, this['Rz'] = 0x0, this['Rk'] = null, this['RD'] = !0x1, this['Rj'] = -0x1, this['Ra'] = -0x1, this['Rq'] = !0x1, this['RT'] = !0x0, this['RI'] = 0x80, this['RJ'] = 0x80, this['RV'] = 0x80, this['RW'] = 0x0, this['RS'] = 0x0, this['Ri'] = 0x0, this['t0'] = 0x0, this['t1'] = !0x1;
    }
}
class Xi extends Xy {
    ['t3'] = !0x1;
    ['t4'] = null;
    ['t5'] = null;
    ['t6'] = -0x1;
    ['t7'] = 0x5;
    static['EJ'] = 0x0;
    ['t8'] = 0x63;
    ['t9'] = 0x0;
    ['to'] = null;
    ['tQ'] = null;
    static['EI'] = [];
    ['tZ'] = 0x0;
    ['tY'] = -0x1;
    ['tE'] = -0x1;
    static['l'](bz) {
        const Fo = uh;
        let bj = new k8(bz['Qw'](Fo(0x30d)));
        this['EJ'] = bj['oZ']();
        for (let ba = 0x0; ba < this['EJ']; ba++) {
            let bq = new Xi(ba)['ET'](bj);
            0x0 === bq['tZ'] && (bq['tZ'] = 0x1, bq['t4'] = new Int16Array(0x1), bq['t4'][0x0] = -0x1, bq['to'] = new Int16Array(0x1), bq['to'][0x0] = -0x1, bq['tQ'] = new Int16Array(0x1), bq['tQ'][0x0] = -0x1), this['EI'][ba] = bq;
        }
    } ['l'](bz, bj) {
        if (0x1 === bz) {
            this['tZ'] = bj['m'](), this['t4'] = new Int16Array(this['tZ']), this['to'] = new Int16Array(this['tZ']), this['tQ'] = new Int16Array(this['tZ']);
            for (let ba = 0x0; ba < this['tZ']; ba++) this['t4'][ba] = bj['oZ'](), this['to'][ba] = bj['oZ'](), 0xffff === this['to'][ba] && (this['to'][ba] = -0x1), this['tQ'][ba] = bj['oZ'](), 0x0 === this['tQ'][ba] && (this['tQ'][ba] = XI['EI'][this['t4'][ba]]['dh']), 0x0 === this['tQ'][ba] && (this['tQ'][ba] = 0x1), this['t9'] += this['tQ'][ba];
        } else {
            if (0x2 === bz) this['tE'] = bj['oZ']();
            else {
                if (0x3 === bz) {
                    let bq = bj['m']();
                    this['t5'] = new Int32Array(bq + 0x1);
                    for (let bT = 0x0; bT < bq; bT++) this['t5'][bT] = bj['m']();
                    this['t5'][bq] = 0x98967f;
                } else 0x4 === bz ? this['t3'] = !0x0 : 0x5 === bz ? this['t7'] = bj['m']() : 0x6 === bz ? this['t6'] = bj['oZ']() : 0x7 === bz ? this['tY'] = bj['oZ']() : 0x8 === bz && (this['t8'] = bj['m']());
            }
        }
    }
}
class x0 {
    static['td'] = new Int32Array(0x6);
    static['tw'] = new Int32Array(0x6);
    static['tR'] = new Int32Array(0x6);
    static['tc'] = new Int32Array(0x6);
    static['tr'] = new Int32Array(0x6);
    static['tH'] = [Int8Array['of'](0x1, 0x3, 0x5, 0x7), Int8Array['of'](0x1, 0x3, 0x5, 0x7), Int8Array['of'](0x1, 0x3, 0x5, 0x7), Int8Array['of'](0x1, 0x3, 0x5, 0x7, 0x6), Int8Array['of'](0x1, 0x3, 0x5, 0x7, 0x6), Int8Array['of'](0x1, 0x3, 0x5, 0x7, 0x6), Int8Array['of'](0x1, 0x3, 0x5, 0x7, 0x6), Int8Array['of'](0x1, 0x3, 0x5, 0x7, 0x2, 0x6), Int8Array['of'](0x1, 0x3, 0x5, 0x7, 0x2, 0x8), Int8Array['of'](0x1, 0x3, 0x5, 0x7, 0x2, 0x8), Int8Array['of'](0x1, 0x3, 0x5, 0x7, 0xb, 0xc), Int8Array['of'](0x1, 0x3, 0x5, 0x7, 0xb, 0xc), Int8Array['of'](0x1, 0x3, 0x5, 0x7, 0xd, 0xe)];
    static['tP'] = [Int8Array['of'](0x0, 0x1, 0x2, 0x3, 0x0, 0x0, 0x1, 0x3), Int8Array['of'](0x1, 0x1, 0x2, 0x3, 0x1, 0x0, 0x1, 0x3), Int8Array['of'](0x0, 0x1, 0x2, 0x3, 0x1, 0x0, 0x1, 0x3), Int8Array['of'](0x0, 0x0, 0x1, 0x2, 0x0, 0x0, 0x2, 0x4, 0x1, 0x0, 0x4, 0x3), Int8Array['of'](0x0, 0x0, 0x1, 0x4, 0x0, 0x0, 0x4, 0x3, 0x1, 0x1, 0x2, 0x4), Int8Array['of'](0x0, 0x0, 0x4, 0x3, 0x1, 0x0, 0x1, 0x2, 0x1, 0x0, 0x2, 0x4), Int8Array['of'](0x0, 0x1, 0x2, 0x4, 0x1, 0x0, 0x1, 0x4, 0x1, 0x0, 0x4, 0x3), Int8Array['of'](0x0, 0x4, 0x1, 0x2, 0x0, 0x4, 0x2, 0x5, 0x1, 0x0, 0x4, 0x5, 0x1, 0x0, 0x5, 0x3), Int8Array['of'](0x0, 0x4, 0x1, 0x2, 0x0, 0x4, 0x2, 0x3, 0x0, 0x4, 0x3, 0x5, 0x1, 0x0, 0x4, 0x5), Int8Array['of'](0x0, 0x0, 0x4, 0x5, 0x1, 0x4, 0x1, 0x2, 0x1, 0x4, 0x2, 0x3, 0x1, 0x4, 0x3, 0x5), Int8Array['of'](0x0, 0x0, 0x1, 0x5, 0x0, 0x1, 0x4, 0x5, 0x0, 0x1, 0x2, 0x4, 0x1, 0x0, 0x5, 0x3, 0x1, 0x5, 0x4, 0x3, 0x1, 0x4, 0x2, 0x3), Int8Array['of'](0x1, 0x0, 0x1, 0x5, 0x1, 0x1, 0x4, 0x5, 0x1, 0x1, 0x2, 0x4, 0x0, 0x0, 0x5, 0x3, 0x0, 0x5, 0x4, 0x3, 0x0, 0x4, 0x2, 0x3), Int8Array['of'](0x1, 0x0, 0x5, 0x4, 0x1, 0x0, 0x1, 0x5, 0x0, 0x0, 0x4, 0x3, 0x0, 0x4, 0x5, 0x3, 0x0, 0x5, 0x2, 0x3, 0x0, 0x1, 0x2, 0x5)];
    static['tp'] = this['th'] / 0x4 | 0x0;
    ['wN'];
    static['th'] = 0x80;
    ['tl'];
    static['tK'] = 0x3 * this['th'] / 0x4 | 0x0;
    ['wl'];
    static['tN'] = this['th'] / 0x2 | 0x0;
    ['wK'];
    ['tv'];
    ['tn'];
    ['tU'];
    ['tm'];
    ['tf'];
    ['tL'];
    ['te'];
    ['ts'];
    ['tA'];
    [uh(0x178)];
    [uh(0x18c)];
    constructor(bz, bj, ba, bq, bT, bI, bJ, bV, xG, xg, xu, xM, xF, xO, xD, xC, xy, xz, xj) {
        const FQ = uh;
        this['flat'] = !(xy !== bq || xy !== xO || xy !== bV), this['shape'] = bj, this['tf'] = bI, this['tL'] = xF, this['te'] = xG;
        let xa = x0['tH'][bj],
            xq = xa[FQ(0x2ea)];
        this['wl'] = new Int32Array(xq), this['wK'] = new Int32Array(xq), this['wN'] = new Int32Array(xq);
        let xT = new Int32Array(xq),
            xI = new Int32Array(xq),
            xJ = bz * x0['th'],
            xV = xz * x0['th'];
        for (let G0 = 0x0; G0 < xq; G0++) {
            let G1, G2, G3, G4, G5, G6 = xa[G0];
            !(0x1 & G6) && G6 <= 0x8 && (G6 = 0x1 + (G6 - bI - bI - 0x1 & 0x7)), G6 > 0x8 && G6 <= 0xc && (G6 = 0x9 + (G6 - bI - 0x9 & 0x3)), G6 > 0xc && G6 <= 0x10 && (G6 = 0xd + (G6 - bI - 0xd & 0x3)), 0x1 === G6 ? (G1 = xJ, G2 = xV, G3 = xy, G4 = bJ, G5 = xg) : 0x2 === G6 ? (G1 = xJ + x0['tN'], G2 = xV, G3 = xy + bq >> 0x1, G4 = bJ + xj >> 0x1, G5 = xg + ba >> 0x1) : 0x3 === G6 ? (G1 = xJ + x0['th'], G2 = xV, G3 = bq, G4 = xj, G5 = ba) : 0x4 === G6 ? (G1 = xJ + x0['th'], G2 = xV + x0['tN'], G3 = bq + xO >> 0x1, G4 = xj + bT >> 0x1, G5 = ba + xD >> 0x1) : 0x5 === G6 ? (G1 = xJ + x0['th'], G2 = xV + x0['th'], G3 = xO, G4 = bT, G5 = xD) : 0x6 === G6 ? (G1 = xJ + x0['tN'], G2 = xV + x0['th'], G3 = xO + bV >> 0x1, G4 = bT + xC >> 0x1, G5 = xD + xM >> 0x1) : 0x7 === G6 ? (G1 = xJ, G2 = xV + x0['th'], G3 = bV, G4 = xC, G5 = xM) : 0x8 === G6 ? (G1 = xJ, G2 = xV + x0['tN'], G3 = bV + xy >> 0x1, G4 = xC + bJ >> 0x1, G5 = xM + xg >> 0x1) : 0x9 === G6 ? (G1 = xJ + x0['tN'], G2 = xV + x0['tp'], G3 = xy + bq >> 0x1, G4 = bJ + xj >> 0x1, G5 = xg + ba >> 0x1) : 0xa === G6 ? (G1 = xJ + x0['tK'], G2 = xV + x0['tN'], G3 = bq + xO >> 0x1, G4 = xj + bT >> 0x1, G5 = ba + xD >> 0x1) : 0xb === G6 ? (G1 = xJ + x0['tN'], G2 = xV + x0['tK'], G3 = xO + bV >> 0x1, G4 = bT + xC >> 0x1, G5 = xD + xM >> 0x1) : 0xc === G6 ? (G1 = xJ + x0['tp'], G2 = xV + x0['tN'], G3 = bV + xy >> 0x1, G4 = xC + bJ >> 0x1, G5 = xM + xg >> 0x1) : 0xd === G6 ? (G1 = xJ + x0['tp'], G2 = xV + x0['tp'], G3 = xy, G4 = bJ, G5 = xg) : 0xe === G6 ? (G1 = xJ + x0['tK'], G2 = xV + x0['tp'], G3 = bq, G4 = xj, G5 = ba) : 0xf === G6 ? (G1 = xJ + x0['tK'], G2 = xV + x0['tK'], G3 = xO, G4 = bT, G5 = xD) : (G1 = xJ + x0['tp'], G2 = xV + x0['tK'], G3 = bV, G4 = xC, G5 = xM), this['wl'][G0] = G1, this['wK'][G0] = G3, this['wN'][G0] = G2, xT[G0] = G4, xI[G0] = G5;
        }
        let xW = x0['tP'][bj],
            xS = xW[FQ(0x2ea)] / 0x4 | 0x0;
        this['tU'] = new Int32Array(xS), this['tn'] = new Int32Array(xS), this['ts'] = new Int32Array(xS), this['tl'] = new Int32Array(xS), this['tv'] = new Int32Array(xS), this['tm'] = new Int32Array(xS), this['tA'] = -0x1 !== xu ? new Int32Array(xS) : null;
        let xi = 0x0;
        for (let G7 = 0x0; G7 < xS; G7++) {
            let G8 = xW[xi],
                G9 = xW[xi + 0x1],
                Go = xW[xi + 0x2],
                GQ = xW[xi + 0x3];
            xi += 0x4, G9 < 0x4 && (G9 = G9 - bI & 0x3), Go < 0x4 && (Go = Go - bI & 0x3), GQ < 0x4 && (GQ = GQ - bI & 0x3), this['tU'][G7] = G9, this['tn'][G7] = Go, this['ts'][G7] = GQ, 0x0 === G8 ? (this['tl'][G7] = xT[G9], this['tv'][G7] = xT[Go], this['tm'][G7] = xT[GQ], this['tA'] && (this['tA'][G7] = -0x1)) : (this['tl'][G7] = xI[G9], this['tv'][G7] = xI[Go], this['tm'][G7] = xI[GQ], this['tA'] && (this['tA'][G7] = xu));
        }
    }
}
class x1 {
    ['y'];
    ['tb'];
    ['x'];
    ['z'];
    ['tk'];
    ['tB'];
    ['tX'];
    [uh(0x1ca)];
    constructor(bz, bj, ba, bq, bT, bI, bJ, bV) {
        const FZ = uh;
        this['y'] = bz, this['x'] = bj, this['z'] = ba, this['tb'] = bq, this['tB'] = bT, this['tX'] = bI, this['tk'] = bJ, this[FZ(0x1ca)] = bV;
    }
}
class x2 extends k2 {
    ['x'];
    ['tx'];
    ['z'];
    ['tG'];
    ['tg'];
    ['tu'];
    ['tM'] = null;
    ['tF'] = null;
    ['tO'] = null;
    ['tD'] = null;
    ['tC'] = null;
    ['ty'] = null;
    ['tz'] = 0x0;
    ['tj'] = null;
    ['ta'] = 0x0;
    ['tq'] = 0x0;
    ['tT'] = !0x1;
    ['tI'] = !0x1;
    ['tJ'] = 0x0;
    ['tV'] = 0x0;
    [uh(0x16d)] = !0x1;
    ['tW'] = 0x0;
    ['tS'] = 0x0;
    constructor(bz, bj, ba) {
        super(), this['tx'] = this['tG'] = bz, this['x'] = bj, this['z'] = ba, this['tu'] = new kY(0x5, null), this['tg'] = new Int32Array(0x5);
    }
}

function o4() {
    const Cv = ['@gre@', 'runes', 'black', 'onmousemove', 'CapsLock', 'Please\x20wait...', 'ArrowRight', 'water', '@gr3@', '\x20unread\x20messages', 'innerHeight', 'setColor', 'update', 'then', 'sounds.dat', ':tradereq:', 'backvmid2', '@cya@', 'draw', 'putImageData', 'white', '{}.constructor(\x22return\x20this\x22)(\x20)', 'wishes\x20to\x20duel\x20with\x20you.', 'flat', 'getBoundingClientRect', 'Your\x20friends\x20list\x20is\x20full.\x20Max\x20of\x20100\x20hit', 'Continue', 'Hide', 'Your\x20ignore\x20list\x20is\x20full.\x20Max\x20of\x20100\x20hit', 'flash2:', 'ob_vertex2.dat', 'Unpacking\x20models', 'Duel-with\x20@whi@', 'Preparing\x20game\x20engine', 'bold\x2016px\x20helvetica,\x20sans-serif', 'ArrowLeft', ':duelreq:', '@yel@', '\x20with\x20@lre@', 'rotate', 'mapback', 'Report\x20abuse\x20@whi@', 'Drop\x20@lre@', 'shape', 'charAt', '2d\x20graphics', 'shape\x20not\x20found', 'or2', 'F12', 'interface', '127.0.0.1', '335vWlXFk', 'search', 'abs', 'Examine\x20@lre@', 'To\x20play\x20RuneScape\x20make\x20sure\x20you\x20play\x20from\x20an\x20approved\x20domain', '\x20days\x20ago', 'toLowerCase', 'backright1', 'dre', 'To\x20', 'memory', 'frame_tran1.dat', 'You\x20have\x20not\x20yet\x20set\x20any\x20password\x20recovery\x20questions.', 'Fps:', 'width', 'screenY', 'models', 'redstone3', '::fpson', '@red@Offline', 'left', 'timeStamp', 'Please\x20check\x20your\x20message-centre\x20for\x20details.', 'show', 'clientY', 'loc.idx', 'notifyTouchMove', 'You\x20are\x20standing\x20in\x20a\x20members-only\x20area.', 'scape_main', 'ob_point4.dat', 'rgb(140,\x2017,\x2017)', 'onload', '@or2@', 'white:', 'result', '[VMTfKAIRXQXkJQgvkRFGSMjmkRSYECOuzTSxAhYUkWRMPaT]', 'iPad', 'start', '@or3@', 'or1', 'F11', 'base_type.dat', '1414455FXWpoK', 'canvas', 'flash1:', '2:\x20Try\x20rebooting\x20your\x20computer,\x20and\x20reloading', 'glow2:', 'Add\x20friend\x20@whi@', 'Report\x20abuse', 'mag', 'ob_face3.dat', 'data', 'Unpacking\x20interfaces', 'Private\x20chat', 'offset', 'info', 'Cancel', 'Capacitor', 'binary', 'fillStyle', 'replace', 'push', 'Your\x20account\x20has\x20been\x20disabled.', 'sqrt', 'badenc.txt', 'message', 'seeks', 'yellow', 'Off', 'Trade\x20with\x20@whi@', 'textAlign', 'obj.dat', 'Arena', 'Map\x20area\x20updated\x20since\x20last\x20visit,\x20so\x20load\x20will\x20take\x20longer\x20this\x20time\x20only', 'transaction', '\x20secs.', 'Enter\x20name\x20of\x20player\x20to\x20add\x20to\x20list', 'join', 'This\x20world\x20is\x20full.', 'clientX', 'You\x20have\x20only\x20just\x20left\x20another\x20world', '\x20seconds.', 'gr2', 'createObjectStore', 'format', 'setUint8', 'iPhone', 'You\x20need\x20a\x20members\x20account\x20to\x20login\x20to\x20this\x20world.', 'Tab', 'Walk\x20here\x20@whi@', 'Unpacking\x20media', 'Unable\x20to\x20find\x20', 'fillText', 'Connection\x20lost', '\x20from\x20your\x20friend\x20list\x20first', 'System\x20update\x20in:\x20', 'constructor', 'arraybuffer', 'obj.idx', 'Insert', 'Fight\x20@whi@', '\x20has\x20logged\x20in.', 'xaTbout:bOKlanEkPNZiIxPPVZpXYBfHVeGQY', 'F10', 'attack', 'You\x20last\x20logged\x20in\x20', 'scale', 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!\x22£$%^&*()-_=+[{]};:\x27@#~,<.>/?\x5c|\x20', '\x20more\x20options', '\x20has\x20logged\x20out.', 'toUpperCase', 'w11-2004.lostcity.rs', '46772hTpJGd', 'Earlier\x20today', 'Delete', 'Error\x20loading\x20-\x20Will\x20retry\x20in\x20', 'url', 'chatback', 'image/jpeg', 'naturalHeight', 'set', 'red:', 'arrayBuffer', 'backvmid3', 'Please\x20remove\x20', 'readwrite', 'pow', '3d\x20graphics', 'mode', 'buffer', 'send', 'mapflag', 'b12', 'cooks', '@yel@|', 'RuneScape\x20has\x20been\x20updated!', 'Please\x20reload\x20this\x20page.', '8498350HXvdiC', 'cross', 'count', 'usedJSHeapSize', 'Backspace', 'Invalid\x20username\x20or\x20password.', 'Connecting\x20to\x20server...', 'values', 'size', 'fromCharCode', 'Members\x20Object', 'wishes\x20to\x20trade\x20with\x20you.', 'readonly', 'invback', 'now', 'frame_head.dat', 'cook', 'title\x20screen', 'performance', '17069690nCGxcN', 'touches', 'target', 'height', 'Please\x20wait\x201\x20minute\x20and\x20try\x20again.', 'backhmid2', 'error', 'flush', 'Login\x20limit\x20exceeded.', 'Create\x20a\x20free\x20account', '\x20@gre@', 'captureMouseUp', 'onkeydown', 'min', 'onkeyup', 'headicons', 'Accept\x20trade\x20@whi@', 'varp.dat', '(((.+)+)+)+$', 'split', 'wordenc', '.mid', 'Yesterday', 'floor', 'onclose', 'getContext', 'tabIndex', 'chat\x20system', 'none', 'Incorrect\x202FA\x20code,\x20please\x20try\x20again.', 'webOS', '\x20from:\x20', 'substring', 'font', 'gr1', 'button', 'lre', '1\x20unread\x20message', 'Code:\x20', 'wV1M1-20TfKA04.IRlXoQsXktJQgcityv.rskRFGSMjmkRSYECOuzTSxAhYUkWRMPaT', 'keyup', 'open', 'ob_vertex1.dat', '\x20is\x20already\x20on\x20your\x20friend\x20list', 'reset', '@whi@', 'ob_face4.dat', 'click', 'name', '@gre@World-', 'innerWidth', 'From\x20', 'title', 'bold\x2020px\x20helvetica,\x20sans-serif', 'sounds', 'getInt8', 'flo.dat', 'indexOf', 'decompress', 'openDatabase', 'clip', 'titlebutton', 'yel', 'https:', 'binaryType', '\x20you\x20changed\x20your\x20recovery\x20questions', 'init', 'revokeObjectURL', 'Escape', 'Welcome\x20to\x20RuneScape', 'onmouseleave', 'Please\x20subscribe,\x20or\x20use\x20a\x20different\x20world.', '::fps\x20', 'Enter\x20name\x20of\x20friend\x20to\x20add\x20to\x20list', 'subarray', 'backbase2', '\x20@cya@', 'gr3', 'toString', 'Loading\x20-\x20please\x20wait.', 'go\x20back\x20to\x20the\x20main\x20RuneScape\x20webpage', 'hitmarks', 'addEventListener', 'userAgent', 'type', 'Loading...', '3:\x20Try\x20using\x20a\x20different\x20game-world', '193589VRJXTU', 'titlebox', 'Moderator\x20option:\x20Mute\x20player\x20for\x2048\x20hours:\x20<OFF>', 'textures', 'oncontextmenu', '8TCbjbs', 'ob_point1.dat', 'setUint16', 'To\x20create\x20a\x20new\x20account\x20you\x20need\x20to', 'changedTouches', 'random', 'fullscreenElement', '\x20with\x20@cya@', 'Try\x20again\x20in\x2060\x20secs...', 'sound\x20effects', 'Friends', 'slice', 'End', 'Login\x20to\x20a\x20members\x27\x20server\x20to\x20use\x20this\x20object.', 'scrollbar', 'getInt32', '@or1@', 'top', 'hide', 'bold\x2012px\x20helvetica,\x20sans-serif', 'Login\x20server\x20rejected\x20session.', '\x20from\x20your\x20ignore\x20list\x20first', 'sideicons', '906CDBDmZ', 'location', 'spotanim.dat', '\x20(level-', 'It\x27s\x20a\x20', 'Android', 'Bad\x20session\x20id.', 'clear', 'idk.dat', '::fpsoff', 'hidden', 'lastIndexOf', 'getData', 'wss', 'willReadFrequently', 'If\x20you\x20do\x20not\x20remember\x20making\x20this\x20change\x20then\x20cancel\x20it\x20immediately', 'Enter\x20name\x20of\x20player\x20to\x20delete\x20from\x20list', 'whi', 'red', '122901726222538041938204383526384082977814259699400598043150444204263128419742123132234104427878530860046960390711411905291581266117436041668659430729063159097284888574799336626826627009069778613459669280676072770172648799463734994368508091986260106497548521046734012500584542228197699807616963648657055364599', 'mousemove', 'ctrlKey', 'wave:', 'ArrowUp', '1:\x20Try\x20closing\x20ALL\x20open\x20web-browser\x20windows,\x20and\x20reloading', 'K\x20@whi@(', 'bind', 'fillRect', 'stop', 'fill', 'uid.dat', 'put', 'dbl', '@whi@\x20/\x20', 'race', 'ob_point2.dat', 'lostcity', '6WKwYyf', '.dat', '@gr2@', 'startsWith', 'mapdots', 'domainenc.txt', 'ob_point3.dat', 'Add\x20ignore\x20@whi@', 'invalid_name', '@yel@World-', '\x20x\x20', 'getElementById', 'Alt', 'Choose\x20Option', 'src', 'img', 'mousedown', 'Do\x20this\x20from\x20the\x20\x27account\x20management\x27\x20area\x20on\x20our\x20front\x20webpage', 'keydown', 'sin', 'blu', 'isTrusted', 'Accept\x20duel\x20@whi@', 'rect', 'preventDefault', 'delta', 'redstone1', 'To\x20play\x20on\x20this\x20world\x20move\x20to\x20a\x20free\x20area\x20first', 'isDisplayed', 'yellow:', 'splice', 'The\x20server\x20is\x20being\x20updated.', 'ontouchmove', 'cache', 'length', 'some', 'setInt32', 'mapfunction', 'button\x20at\x20the\x20top\x20right\x20of\x20that\x20page.', 'frame_del.dat', '0\x20unread\x20messages', 'config', 'Password:\x20', 'Error\x20connecting\x20to\x20server.', '@gr1@', 'naturalWidth', 'onmouseup', 'createElement', 'New\x20user', 'To\x20fix\x20this\x20try\x20the\x20following\x20(in\x20order):', 'ob_face5.dat', 'unshift', 'endsWith', 'Enter\x20your\x20username\x20&\x20password.', 'read', 'mapscene', 'objectStore', 'hostname', 'next', 'cook\x27s', 'sheet', '9585729oJnfxm', 'Remove\x20@whi@', 'drawImage', 'or3', '\x20is\x20already\x20on\x20your\x20ignore\x20list', 'screenX', 'Unpacking\x20textures', 'Enter', 'seq.dat', 'purple:', 'Use\x20', 'Login\x20attempts\x20exceeded.', 'Additional\x20verification\x20needed.', 'map', 'Unable\x20to\x20connect.', 'includes', 'gre', 'backleft2', 'We\x20strongly\x20recommend\x20you\x20do\x20so\x20now\x20to\x20secure\x20your\x20account.', 'mouseup', 'onerror', 'PageUp', 'Enter\x20amount:', 'flash3:', 'logo', 'Could\x20not\x20complete\x20login.', 'Please\x20wait\x20-\x20attempting\x20to\x20reestablish', 'ob_axis.dat', 'get', 'key', 'p12', 'p11', 'atan2', 'cyan:', 'center', 'onmousedown', 'backleft1', 'media', 'head', 'protocol', 'RuneScape\x20is\x20loading\x20-\x20please\x20wait...', 'Username:\x20', 'Public\x20chat', 'byteLength', 'Meta', '\x20@lre@', 'ArrowDown', 'getImageData', 'Your\x20profile\x20will\x20be\x20transferred\x20in:\x20', 'tldlist.txt', 'index.dat', '24UmIzja', 'Enter\x20message\x20to\x20send\x20to\x20', '\x20@yel@', 'Please\x20try\x20using\x20a\x20different\x20world.', 'Existing\x20User', 'onsuccess', 'getUint8', '[xTOKEPNZiIxPPVZpXYBfHVeGQY]', 'host', 'Your\x20account\x20is\x20already\x20logged\x20in.', 'ob_head.dat', 'onupgradeneeded', 'ob_face1.dat', '://', 'reduce', 'Login', 'BlackBerry', '\x20with\x20@yel@', 'Select', 'Windows\x20Phone', 'backright2', 'trim', 'Moderator\x20option:\x20Mute\x20player\x20for\x2048\x20hours:\x20<ON>', '4:\x20Try\x20rebooting\x20your\x20computer', '2731LOoDeO', 'fragmentsenc.txt', 'index', 'Error:\x20', 'charCodeAt', 'Error\x20-\x20unable\x20to\x20load\x20game!', '\x20@whi@', 'cos', 'code', 'getUint16', 'redstone2', 'backvmid1', 'Shift'];
    o4 = function() {
        return Cv;
    };
    return o4();
}
class x3 {
    ['ti'];
    ['c0'];
    ['c1'];
    ['c2'];
    ['c3'];
    ['c4'];
    ['flat'];
    constructor(bz, bj, ba, bq, bT, bI, bJ) {
        const FY = uh;
        this['ti'] = bz, this['c0'] = bj, this['c1'] = ba, this['c2'] = bq, this['c3'] = bT, this['c4'] = bI, this[FY(0x178)] = bJ;
    }
}
class x4 {
    ['wz'];
    ['c5'];
    [uh(0x284)];
    ['c6'];
    ['c7'];
    ['wj'];
    ['wq'];
    ['c8'];
    ['wy'];
    ['wa'];
    ['wL'];
    ['c9'] = 0x0;
    ['mode'] = 0x0;
    ['co'] = 0x0;
    ['cQ'] = 0x0;
    ['cZ'] = 0x0;
    ['cY'] = 0x0;
    ['cE'] = 0x0;
    constructor(bz, bj, ba, bq, bT, bI, bJ, bV, xG, xg, xu) {
        const FE = uh;
        this['c5'] = bz, this['c8'] = bj, this['c6'] = ba, this['c7'] = bq, this[FE(0x284)] = bT, this['wz'] = bI, this['wj'] = bJ, this['wq'] = bV, this['wa'] = xG, this['wy'] = xg, this['wL'] = xu;
    }
}
class x5 {
    ['x'];
    ['y'];
    ['z'];
    ['cd'];
    ['cw'];
    ['cR'];
    ['cc'];
    ['tk'];
    [uh(0x1cb)];
    constructor(bz, bj, ba, bq, bT, bI, bJ, bV, xG) {
        const Fd = uh;
        this['y'] = bz, this['x'] = bj, this['z'] = ba, this['cd'] = bq, this['cR'] = bT, this['cw'] = bI, this['cc'] = bJ, this['tk'] = bV, this[Fd(0x1cb)] = xG;
    }
}
class x6 {
    ['z'];
    ['Rw'];
    ['cr'];
    ['y'];
    ['x'];
    ['tk'];
    ['cH'];
    [uh(0x1cb)];
    constructor(bz, bj, ba, bq, bT, bI, bJ, bV) {
        const Fw = uh;
        this['y'] = bz, this['x'] = bj, this['z'] = ba, this['cH'] = bq, this['cr'] = bT, this['Rw'] = bI, this['tk'] = bJ, this[Fw(0x1cb)] = bV;
    }
}
class x7 {
    ['cP'];
    ['y'];
    ['z'];
    ['x'];
    ['Y1'] = 0x0;
    ['cp'];
    ['Rw'];
    ['cl'];
    ['cK'];
    ['cN'];
    ['cv'];
    ['cn'];
    ['tk'];
    ['cU'] = 0x0;
    ['info'];
    constructor(bz, bj, ba, bq, bT, bI, bJ, bV, xG, xg, xu, xM, xF) {
        const FR = uh;
        this['cP'] = bz, this['y'] = bj, this['x'] = ba, this['z'] = bq, this['Rw'] = bT, this['cK'] = bI, this['cp'] = bJ, this['cl'] = bV, this['cN'] = xG, this['cv'] = xg, this['cn'] = xu, this['tk'] = xM, this[FR(0x1cb)] = xF;
    }
}
class x8 {
    ['y'];
    ['x'];
    ['tk'];
    ['z'];
    ['Rw'];
    [uh(0x1cb)];
    constructor(bz, bj, ba, bq, bT, bI) {
        const Fc = uh;
        this['y'] = bz, this['x'] = bj, this['z'] = ba, this['Rw'] = bq, this['tk'] = bT, this[Fc(0x1cb)] = bI;
    }
}
class x9 {
    static['cm'] = new kY(0x64, null);
    static['cf'] = new kE(0x8, 0x20, 0x33, 0x33, !0x1);
    static['cL'] = 0x0;
    static['Ok'] = Int8Array['of'](0x0, 0x4, 0x4, 0x8, 0x0, 0x0, 0x8, 0x0, 0x0);
    static['ce'] = Int8Array['of'](0x2, 0x0, 0x0, 0x2, 0x0, 0x0, 0x0, 0x4, 0x4);
    static['cs'] = 0x0;
    static['cA'] = null;
    static['cb'] = 0x0;
    static['ck'] = Int8Array['of'](0x0, 0x0, 0x2, 0x0, 0x0, 0x2, 0x1, 0x1, 0x0);
    static['cB'] = Uint8Array['of'](0x4c, 0x8, 0x89, 0x4, 0x0, 0x1, 0x26, 0x2, 0x13);
    static['cX'] = 0x0;
    static['cx'] = 0x0;
    static['cG'] = 0x0;
    static['cg'] = new kR(0x4, 0x1f4, null);
    static['cu'] = new Int32Array(0x4);
    static['cM'] = Int8Array['of'](0x35, -0x35, -0x35, 0x35);
    static['cF'] = Int8Array['of'](0x1, 0x1, 0x0, 0x0, 0x0, 0x8, 0x0, 0x0, 0x8);
    static['cO'] = Int8Array['of'](-0x35, -0x35, 0x35, 0x35);
    static['cD'] = Int8Array['of'](-0x2d, 0x2d, 0x2d, -0x2d);
    static['cC'] = new kY(0x1f4, null);
    static['cy'] = !0x1;
    static['Y1'] = 0x0;
    static['cz'] = 0x0;
    static['cj'] = Uint8Array['of'](0x13, 0x37, 0x26, 0x9b, 0xff, 0x6e, 0x89, 0xcd, 0x4c);
    static['ca'] = 0x0;
    static['cq'] = new k3();
    static['cT'] = Uint8Array['of'](0xa0, 0xc0, 0x50, 0x60, 0x0, 0x90, 0x50, 0x30, 0xa0);
    static['cI'] = Int8Array['of'](0x2d, 0x2d, -0x2d, -0x2d);
    static['cJ'] = 0x0;
    static['cV'] = 0x0;
    static['cW'] = 0x0;
    static['cS'] = 0x0;
    static['ci'] = 0x0;
    static['r0'] = 0x0;
    static['r1'] = 0x0;
    static['r2'] = 0x0;
    static['r3'] = 0x0;
    static['r4'] = 0x0;
    static['r5'] = 0x0;
    static['r6'] = 0x0;
    static['r7'] = 0x0;
    static['r8'] = [new Int8Array(0x10), Int8Array['of'](0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1), Int8Array['of'](0x1, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x0, 0x1, 0x1, 0x1, 0x0, 0x1, 0x1, 0x1, 0x1), Int8Array['of'](0x1, 0x1, 0x0, 0x0, 0x1, 0x1, 0x0, 0x0, 0x1, 0x0, 0x0, 0x0, 0x1, 0x0, 0x0, 0x0), Int8Array['of'](0x0, 0x0, 0x1, 0x1, 0x0, 0x0, 0x1, 0x1, 0x0, 0x0, 0x0, 0x1, 0x0, 0x0, 0x0, 0x1), Int8Array['of'](0x0, 0x1, 0x1, 0x1, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1), Int8Array['of'](0x1, 0x1, 0x1, 0x0, 0x1, 0x1, 0x1, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1), Int8Array['of'](0x1, 0x1, 0x0, 0x0, 0x1, 0x1, 0x0, 0x0, 0x1, 0x1, 0x0, 0x0, 0x1, 0x1, 0x0, 0x0), Int8Array['of'](0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x0), Int8Array['of'](0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x0, 0x1, 0x1, 0x1, 0x0, 0x0, 0x1, 0x1), Int8Array['of'](0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x0, 0x0, 0x1, 0x0, 0x0, 0x0, 0x1, 0x0, 0x0, 0x0), Int8Array['of'](0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x1, 0x1, 0x1, 0x0, 0x1, 0x1, 0x1), Int8Array['of'](0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x1, 0x1, 0x1, 0x1)];
    static['r9'] = [Int8Array['of'](0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf), Int8Array['of'](0xc, 0x8, 0x4, 0x0, 0xd, 0x9, 0x5, 0x1, 0xe, 0xa, 0x6, 0x2, 0xf, 0xb, 0x7, 0x3), Int8Array['of'](0xf, 0xe, 0xd, 0xc, 0xb, 0xa, 0x9, 0x8, 0x7, 0x6, 0x5, 0x4, 0x3, 0x2, 0x1, 0x0), Int8Array['of'](0x3, 0x7, 0xb, 0xf, 0x2, 0x6, 0xa, 0xe, 0x1, 0x5, 0x9, 0xd, 0x0, 0x4, 0x8, 0xc)];
    static['ro'] = Int32Array['of'](0x29, 0x9950, 0x29, 0x1223, 0x29, 0x29, 0x29, 0x29, 0x29, 0x29, 0x29, 0x29, 0x29, 0x29, 0x29, 0xa84e, 0x29, 0x29, 0x29, 0x29, 0x29, 0x29, 0x29, 0x219a, 0x29, 0x7140, 0x29, 0x29, 0x29, 0x29, 0x29, 0x13c0, 0x29, 0x29, 0x29, 0x29, 0x29, 0x29, 0x29, 0x29, 0x29, 0x29, 0x29, 0x29, 0x29, 0x29, 0xc3b, 0x29, 0x29, 0x29);
    static['ZT'] = !0x0;
    static['rQ'] = -0x1;
    static['YG'] = 0x0;
    static['rZ'] = 0x0;
    static['rY'] = -0x1;
    static['YA'] = 0x0;
    ['rE'](bz, bj, ba, bq) {
        if (!bq) return;
        let bT = this['rd'][bz][bj][ba];
        if (bT)
            for (let bI = 0x0; bI < bT['tz']; bI++) {
                let bJ = bT['tu'][bI];
                if (bJ && 0x2 == (bJ['tk'] >> 0x1d & 0x3)) return void(bJ['Rw'] = bq);
            }
    } ['rw'](bz, bj, ba, bq, bT, bI, bJ, bV, xG, xg, xu, xM) {
        return !xG && !xg || this['rR'](bj, bq, ba, bz, bT, bI, bJ + 0x1 - bT, bV - bI + 0x1, xG, xg, xu, 0x0, xM, !0x0);
    } ['rc']() {
        for (let bz = 0x0; bz < this['rr']; bz++) {
            let bj = this['rH'][bz];
            bj && this['rP'](bj), this['rH'][bz] = null;
        }
        this['rr'] = 0x0;
    } ['rp'](bz, bj, ba, bq) {
        if (!bq) return;
        let bT = this['rd'][bz][bj][ba];
        if (!bT) return;
        let bI = bT['tF'];
        bI && (bI['Rw'] = bq);
    } ['rh'](bz, bj, ba, bq) {
        let bT = this['rd'][bz][bj][ba];
        if (!bT) return;
        let bI = bT['tj'];
        if (!bI) return;
        let bJ = 0x80 * bj + 0x40,
            bV = 0x80 * ba + 0x40;
        bI['x'] = bJ + ((bI['x'] - bJ) * bq / 0x10 | 0x0), bI['z'] = bV + ((bI['z'] - bV) * bq / 0x10 | 0x0);
    } ['Qz'](bz, bj, ba) {
        let bq = this['rd'][bz][bj][ba];
        if (bq)
            for (let bT = 0x0; bT < bq['tz']; bT++) {
                let bI = bq['tu'][bT];
                if (bI && 0x2 == (bI['tk'] >> 0x1d & 0x3) && bI['cl'] === bj && bI['cv'] === ba) return void this['rP'](bI);
            }
    } ['rl'](bz, bj, ba, bq, bT, bI, bJ, bV, xG, xg) {
        if (!bT && !bI) return !0x0;
        let xu = bj - xG,
            xM = bq - xG,
            xF = bj + xG,
            xO = bq + xG;
        return xg && (bV > 0x280 && bV < 0x580 && (xO += 0x80), bV > 0x480 && bV < 0x780 && (xF += 0x80), (bV > 0x680 || bV < 0x180) && (xM -= 0x80), bV > 0x80 && bV < 0x380 && (xu -= 0x80)), xu = xu / 0x80 | 0x0, xM = xM / 0x80 | 0x0, xF = xF / 0x80 | 0x0, xO = xO / 0x80 | 0x0, this['rR'](bj, bq, ba, bz, xu, xM, xF + 0x1 - xu, xO - xM + 0x1, bT, bI, bJ, 0x0, bV, !0x0);
    } ['rK'](bz, bj, ba, bq) {
        if (!bq) return;
        let bT = this['rd'][bz][bj][ba];
        if (!bT) return;
        let bI = bT['tj'];
        bI && (bI['Rw'] = bq);
    } ['QC'](bz, bj, ba, bq, bT, bI, bJ, bV, xG, xg, xu) {
        if (!bT && !bI) return !0x0;
        let xM = 0x80 * bj + 0x40 * xG,
            xF = 0x80 * ba + 0x40 * xg;
        return this['rR'](xM, xF, bq, bz, bj, ba, xG, xg, bT, bI, bJ, bV, xu, !0x1);
    } ['rN'](bz, bj, ba) {
        let bq = this['rd'][bz][bj][ba];
        bq && (bq['tj'] = null);
    } ['rv'](bz, bj, ba, bq, bT) {
        if (!bq) return;
        let bI = this['rd'][ba][bz][bj];
        if (!bI) return;
        let bJ = bI['tC'];
        bJ && (bJ['cw'] = bq, bJ['cc'] = bT);
    } ['Qa'](bz, bj, ba, bq, bT, bI, bJ, bV, xG, xg) {
        if (!bJ && !bV) return;
        for (let xM = bz; xM >= 0x0; xM--) this['rd'][xM][bj][ba] || (this['rd'][xM][bj][ba] = new x2(xM, bj, ba));
        let xu = this['rd'][bz][bj][ba];
        xu && (xu['tC'] = new x5(bq, 0x80 * bj + 0x40, 0x80 * ba + 0x40, bT, bI, bJ, bV, xG, xg));
    } ['rn'](bz, bj, ba, bq, bT) {
        const Fr = uh;
        let bI = bj * (0x0 | Math[Fr(0x1d3)](ba * ba + bq * bq + bT * bT)) >> 0x8;
        for (let bJ = 0x0; bJ < this['rU']; bJ++)
            for (let bV = 0x0; bV < this['c8']; bV++)
                for (let xG = 0x0; xG < this['c7']; xG++) {
                    let xg = this['rd'][bJ][bV][xG];
                    if (!xg) continue;
                    let xu = xg['tC'];
                    xu && xu['cw'] && xu['cw']['wx'] && (this['rm'](bJ, bV, xG, 0x1, 0x1, xu['cw']), xu['cc'] && xu['cc']['wx'] && (this['rm'](bJ, bV, xG, 0x1, 0x1, xu['cc']), this['rf'](xu['cw'], xu['cc'], 0x0, 0x0, 0x0, !0x1), xu['cc']['wb'](bz, bI, ba, bq, bT)), xu['cw']['wb'](bz, bI, ba, bq, bT));
                    for (let xF = 0x0; xF < xg['tz']; xF++) {
                        let xO = xg['tu'][xF];
                        xO && xO['Rw'] && xO['Rw']['wx'] && (this['rm'](bJ, bV, xG, xO['cN'] + 0x1 - xO['cl'], xO['cn'] - xO['cv'] + 0x1, xO['Rw']), xO['Rw']['wb'](bz, bI, ba, bq, bT));
                    }
                    let xM = xg['tF'];
                    xM && xM['Rw'] && xM['Rw']['wx'] && (this['rL'](bJ, bV, xG, xM['Rw']), xM['Rw']['wb'](bz, bI, ba, bq, bT));
                }
    } ['re'](bz, bj, ba, bq, bT, bI, bJ, bV, xG, xg, xu) {
        if (!bV) return;
        for (let xF = bz; xF >= 0x0; xF--) this['rd'][xF][bj][ba] || (this['rd'][xF][bj][ba] = new x2(xF, bj, ba));
        let xM = this['rd'][bz][bj][ba];
        xM && (xM['tj'] = new x6(bq, 0x80 * bj + bT + 0x40, 0x80 * ba + bI + 0x40, xu, xg, bV, bJ, xG));
    } ['rs'](bz, bj, ba, bq) {
        if (!bq) return;
        let bT = this['rd'][bz][bj][ba];
        if (!bT) return;
        let bI = bT['tC'];
        bI && (bI['cw'] = bq);
    } ['rA'](bz, bj, ba, bq, bT, bI, bJ, bV) {
        let xG = 0x0,
            xg = this['rd'][bq][bz][bj];
        if (xg)
            for (let xM = 0x0; xM < xg['tz']; xM++) {
                let xF = xg['tu'][xM];
                if (!xF || !xF['Rw']) continue;
                let xO = xF['Rw']['Rv'];
                xO > xG && (xG = xO);
            } else this['rd'][bq][bz][bj] = new x2(bq, bz, bj);
        let xu = this['rd'][bq][bz][bj];
        xu && (xu['tM'] = new x1(ba, 0x80 * bz + 0x40, 0x80 * bj + 0x40, bI, bJ, bV, bT, xG));
    } ['rb'](bz, bj, ba) {
        let bq = this['rd'][bz][bj][ba];
        bq && (bq['tM'] = null);
    } ['rk']() {
        const FH = uh;
        for (let bz = 0x0; bz < this['rU']; bz++)
            for (let bj = 0x0; bj < this['c8']; bj++)
                for (let ba = 0x0; ba < this['c7']; ba++) this['rd'][bz][bj][ba] = null;
        for (let bq = 0x0; bq < 0x4; bq++) {
            for (let bT = 0x0; bT < x9['cu'][bq]; bT++) x9['cg'][bq][bT] = null;
            x9['cu'][bq] = 0x0;
        }
        for (let bI = 0x0; bI < this['rr']; bI++) this['rH'][bI] = null;
        this['rr'] = 0x0, x9['cm'][FH(0x2c0)](null);
    } ['rm'](bz, bj, ba, bq, bT, bI) {
        let bJ = !0x0,
            bV = bj,
            xG = bj + bq,
            xg = ba - 0x1,
            xu = ba + bT;
        for (let xM = bz; xM <= bz + 0x1; xM++)
            if (xM !== this['rU']) {
                for (let xF = bV; xF <= xG; xF++)
                    if (!(xF < 0x0 || xF >= this['c8']))
                        for (let xO = xg; xO <= xu; xO++) {
                            if (xO < 0x0 || xO >= this['c7'] || bJ && xF < xG && xO < xu && (xO >= ba || xF === bj)) continue;
                            let xD = this['rd'][xM][xF][xO];
                            if (!xD) continue;
                            let xC = 0x80 * (xF - bj) + 0x40 * (0x1 - bq),
                                xy = 0x80 * (xO - ba) + 0x40 * (0x1 - bT),
                                xz = ((this['rB'][xM][xF][xO] + this['rB'][xM][xF + 0x1][xO] + this['rB'][xM][xF][xO + 0x1] + this['rB'][xM][xF + 0x1][xO + 0x1]) / 0x4 | 0x0) - ((this['rB'][bz][bj][ba] + this['rB'][bz][bj + 0x1][ba] + this['rB'][bz][bj][ba + 0x1] + this['rB'][bz][bj + 0x1][ba + 0x1]) / 0x4 | 0x0),
                                xj = xD['tC'];
                            xj && xj['cw'] && xj['cw']['wx'] && this['rf'](bI, xj['cw'], xC, xz, xy, bJ), xj && xj['cc'] && xj['cc']['wx'] && this['rf'](bI, xj['cc'], xC, xz, xy, bJ);
                            for (let xa = 0x0; xa < xD['tz']; xa++) {
                                let xq = xD['tu'][xa];
                                if (!xq || !xq['Rw'] || !xq['Rw']['wx']) continue;
                                let xT = xq['cN'] + 0x1 - xq['cl'],
                                    xI = xq['cn'] + 0x1 - xq['cv'];
                                this['rf'](bI, xq['Rw'], 0x80 * (xq['cl'] - bj) + 0x40 * (xT - bq), xz, 0x80 * (xq['cv'] - ba) + 0x40 * (xI - bT), bJ);
                            }
                        }
                bV--, bJ = !0x1;
            }
    } ['rX'](bz, bj) {
        let ba = this['rd'][0x0][bz][bj];
        for (let bT = 0x0; bT < 0x3; bT++) {
            this['rd'][bT][bz][bj] = this['rd'][bT + 0x1][bz][bj];
            let bI = this['rd'][bT][bz][bj];
            bI && bI['tG']--;
        }
        this['rd'][0x0][bz][bj] || (this['rd'][0x0][bz][bj] = new x2(0x0, bz, bj));
        let bq = this['rd'][0x0][bz][bj];
        bq && (bq['ty'] = ba), this['rd'][0x3][bz][bj] = null;
    } ['rx'](bz, bj, ba, bq) {
        if (this['rG'](bz, bj, ba)) {
            let bT = bj << 0x7,
                bI = ba << 0x7;
            return this['rg'](bT + 0x1, this['rB'][bz][bj][ba] - bq, bI + 0x1) && this['rg'](bT + 0x80 - 0x1, this['rB'][bz][bj + 0x1][ba] - bq, bI + 0x1) && this['rg'](bT + 0x80 - 0x1, this['rB'][bz][bj + 0x1][ba + 0x1] - bq, bI + 0x80 - 0x1) && this['rg'](bT + 0x1, this['rB'][bz][bj][ba + 0x1] - bq, bI + 0x80 - 0x1);
        }
        return !0x1;
    } ['ru'](bz, bj, ba, bq, bT, bI, bJ, bV) {
        if (bj < ba && bj < bq && bj < bT) return !0x1;
        if (bj > ba && bj > bq && bj > bT) return !0x1;
        if (bz < bI && bz < bJ && bz < bV) return !0x1;
        if (bz > bI && bz > bJ && bz > bV) return !0x1;
        let xG = (bj - bq) * (bV - bJ) - (bz - bJ) * (bT - bq);
        return ((bj - ba) * (bJ - bI) - (bz - bI) * (bq - ba)) * xG > 0x0 && xG * ((bj - bT) * (bI - bV) - (bz - bV) * (ba - bT)) > 0x0;
    }
    static['rM'](bz, bj, ba, bq, bT) {
        this['cX'] = 0x0, this['ca'] = 0x0, this['cG'] = bz, this['cx'] = bj, this['cb'] = bz / 0x2 | 0x0, this['cs'] = bj / 0x2 | 0x0;
        let bI = new kE(0x9, 0x20, 0x35, 0x35, !0x1);
        for (let bJ = 0x80; bJ <= 0x180; bJ += 0x20)
            for (let bV = 0x0; bV < 0x800; bV += 0x40) {
                this['r4'] = XO['oy'][bJ], this['r7'] = XO['Y3'][bJ], this['r3'] = XO['oy'][bV], this['r5'] = XO['Y3'][bV];
                let xG = (bJ - 0x80) / 0x20 | 0x0,
                    xg = bV / 0x40 | 0x0;
                for (let xu = -0x1a; xu <= 0x1a; xu++)
                    for (let xM = -0x1a; xM <= 0x1a; xM++) {
                        let xF = 0x80 * xu,
                            xO = 0x80 * xM,
                            xD = !0x1;
                        for (let xC = -ba; xC <= bq; xC += 0x80)
                            if (this['rF'](xF, xO, bT[xG] + xC)) {
                                xD = !0x0;
                                break;
                            } bI[xG][xg][xu + 0x19 + 0x1][xM + 0x19 + 0x1] = xD;
                    }
            }
        for (let xy = 0x0; xy < 0x8; xy++)
            for (let xz = 0x0; xz < 0x20; xz++)
                for (let xj = -0x19; xj < 0x19; xj++)
                    for (let xa = -0x19; xa < 0x19; xa++) {
                        let xq = !0x1;
                        xJ: for (let xT = -0x1; xT <= 0x1; xT++)
                            for (let xI = -0x1; xI <= 0x1; xI++) {
                                if (bI[xy][xz][xj + xT + 0x19 + 0x1][xa + xI + 0x19 + 0x1]) {
                                    xq = !0x0;
                                    break xJ;
                                }
                                if (bI[xy][(xz + 0x1) % 0x1f][xj + xT + 0x19 + 0x1][xa + xI + 0x19 + 0x1]) {
                                    xq = !0x0;
                                    break xJ;
                                }
                                if (bI[xy + 0x1][xz][xj + xT + 0x19 + 0x1][xa + xI + 0x19 + 0x1]) {
                                    xq = !0x0;
                                    break xJ;
                                }
                                if (bI[xy + 0x1][(xz + 0x1) % 0x1f][xj + xT + 0x19 + 0x1][xa + xI + 0x19 + 0x1]) {
                                    xq = !0x0;
                                    break xJ;
                                }
                            }
                        this['cf'][xy][xz][xj + 0x19][xa + 0x19] = xq;
                    }
    }
    static['rO'](bz, bj, ba, bq, bT, bI, bJ, bV) {
        x9['cg'][bz][x9['cu'][bz]++] = new x4(ba / 0x80 | 0x0, bI / 0x80 | 0x0, bT / 0x80 | 0x0, bV / 0x80 | 0x0, bj, ba, bI, bT, bV, bq, bJ);
    }
    static['rF'](bz, bj, ba) {
        let bq = bj * this['r3'] + bz * this['r5'] >> 0x10,
            bT = bj * this['r5'] - bz * this['r3'] >> 0x10,
            bI = ba * this['r4'] + bT * this['r7'] >> 0x10,
            bJ = ba * this['r7'] - bT * this['r4'] >> 0x10;
        if (bI < 0x32 || bI > 0xdac) return !0x1;
        let bV = this['cb'] + ((bq << 0x9) / bI | 0x0),
            xG = this['cs'] + ((bJ << 0x9) / bI | 0x0);
        return bV >= this['cX'] && bV <= this['cG'] && xG >= this['ca'] && xG <= this['cx'];
    } ['rD'];
    ['rd'];
    ['rB'];
    ['rH'];
    ['rC'];
    ['ry'];
    ['rr'] = 0x0;
    ['c7'];
    ['rz'] = 0x0;
    ['c8'];
    ['rj'] = 0x0;
    ['rU'];
    constructor(bz, bj, ba, bq) {
        this['rU'] = ba, this['c8'] = bq, this['c7'] = bj, this['rd'] = new kQ(ba, bq, bj, null), this['ry'] = new kZ(ba, bq + 0x1, bj + 0x1), this['rB'] = bz, this['rH'] = new kY(0x1388, null), this['rC'] = new Int32Array(0x2710), this['rD'] = new Int32Array(0x2710), this['rk']();
    } ['ra'](bz, bj, ba) {
        let bq = this['rd'][bz][bj][ba];
        if (!bq) return 0x0;
        for (let bT = 0x0; bT < bq['tz']; bT++) {
            let bI = bq['tu'][bT];
            if (bI && 0x2 == (bI['tk'] >> 0x1d & 0x3) && bI['cl'] === bj && bI['cv'] === ba) return bI['tk'];
        }
        return 0x0;
    } ['rg'](bz, bj, ba) {
        const FP = uh;
        for (let bq = 0x0; bq < x9['rZ']; bq++) {
            let bT = x9['cC'][bq];
            if (bT) {
                if (0x1 === bT['mode']) {
                    let bI = bT['wz'] - bz;
                    if (bI > 0x0) {
                        let bJ = bT['wq'] + (bT['cQ'] * bI >> 0x8),
                            bV = bT['wa'] + (bT['cE'] * bI >> 0x8),
                            xG = bT['wy'] + (bT['cY'] * bI >> 0x8),
                            xg = bT['wL'] + (bT['cZ'] * bI >> 0x8);
                        if (ba >= bJ && ba <= bV && bj >= xG && bj <= xg) return !0x0;
                    }
                } else {
                    if (0x2 === bT['mode']) {
                        let xu = bz - bT['wz'];
                        if (xu > 0x0) {
                            let xM = bT['wq'] + (bT['cQ'] * xu >> 0x8),
                                xF = bT['wa'] + (bT['cE'] * xu >> 0x8),
                                xO = bT['wy'] + (bT['cY'] * xu >> 0x8),
                                xD = bT['wL'] + (bT['cZ'] * xu >> 0x8);
                            if (ba >= xM && ba <= xF && bj >= xO && bj <= xD) return !0x0;
                        }
                    } else {
                        if (0x3 === bT['mode']) {
                            let xC = bT['wq'] - ba;
                            if (xC > 0x0) {
                                let xy = bT['wz'] + (bT['c9'] * xC >> 0x8),
                                    xz = bT['wj'] + (bT['co'] * xC >> 0x8),
                                    xj = bT['wy'] + (bT['cY'] * xC >> 0x8),
                                    xa = bT['wL'] + (bT['cZ'] * xC >> 0x8);
                                if (bz >= xy && bz <= xz && bj >= xj && bj <= xa) return !0x0;
                            }
                        } else {
                            if (0x4 === bT[FP(0x214)]) {
                                let xq = ba - bT['wq'];
                                if (xq > 0x0) {
                                    let xT = bT['wz'] + (bT['c9'] * xq >> 0x8),
                                        xI = bT['wj'] + (bT['co'] * xq >> 0x8),
                                        xJ = bT['wy'] + (bT['cY'] * xq >> 0x8),
                                        xV = bT['wL'] + (bT['cZ'] * xq >> 0x8);
                                    if (bz >= xT && bz <= xI && bj >= xJ && bj <= xV) return !0x0;
                                }
                            } else {
                                if (0x5 === bT[FP(0x214)]) {
                                    let xW = bj - bT['wy'];
                                    if (xW > 0x0) {
                                        let xS = bT['wz'] + (bT['c9'] * xW >> 0x8),
                                            xi = bT['wj'] + (bT['co'] * xW >> 0x8),
                                            G0 = bT['wq'] + (bT['cQ'] * xW >> 0x8),
                                            G1 = bT['wa'] + (bT['cE'] * xW >> 0x8);
                                        if (bz >= xS && bz <= xi && ba >= G0 && ba <= G1) return !0x0;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return !0x1;
    } ['rq'](bz, bj, ba) {
        let bq = this['rd'][bz][bj][ba];
        return bq && bq['tC'] ? bq['tC']['tk'] : 0x0;
    } ['rT'](bz, bj, ba, bq, bT, bI) {
        let bJ, bV;
        if (bj !== ba || bq !== bT) {
            for (bJ = bj; bJ <= ba; bJ++)
                for (bV = bq; bV <= bT; bV++)
                    if (this['ry'][bz][bJ][bV] === -x9['Y1']) return !0x1;
            bV = 0x1 + (bj << 0x7);
            let xG = 0x2 + (bq << 0x7),
                xg = this['rB'][bz][bj][bq] - bI;
            if (!this['rg'](bV, xg, xG)) return !0x1;
            let xu = (ba << 0x7) - 0x1;
            if (!this['rg'](xu, xg, xG)) return !0x1;
            let xM = (bT << 0x7) - 0x1;
            return !!this['rg'](bV, xg, xM) && this['rg'](xu, xg, xM);
        }
        return !!this['rG'](bz, bj, bq) && (bJ = bj << 0x7, bV = bq << 0x7, this['rg'](bJ + 0x1, this['rB'][bz][bj][bq] - bI, bV + 0x1) && this['rg'](bJ + 0x80 - 0x1, this['rB'][bz][bj + 0x1][bq] - bI, bV + 0x1) && this['rg'](bJ + 0x80 - 0x1, this['rB'][bz][bj + 0x1][bq + 0x1] - bI, bV + 0x80 - 0x1) && this['rg'](bJ + 0x1, this['rB'][bz][bj][bq + 0x1] - bI, bV + 0x80 - 0x1));
    } ['rI'](bz, bj, ba, bq) {
        if (!this['rG'](bz, bj, ba)) return !0x1;
        let bT = bj << 0x7,
            bI = ba << 0x7,
            bJ = this['rB'][bz][bj][ba] - 0x1,
            bV = bJ - 0x78,
            xG = bJ - 0xe6,
            xg = bJ - 0xee;
        if (bq < 0x10) {
            if (0x1 === bq) {
                if (bT > x9['r2']) {
                    if (!this['rg'](bT, bJ, bI)) return !0x1;
                    if (!this['rg'](bT, bJ, bI + 0x80)) return !0x1;
                }
                if (bz > 0x0) {
                    if (!this['rg'](bT, bV, bI)) return !0x1;
                    if (!this['rg'](bT, bV, bI + 0x80)) return !0x1;
                }
                return !!this['rg'](bT, xG, bI) && this['rg'](bT, xG, bI + 0x80);
            }
            if (0x2 === bq) {
                if (bI < x9['cW']) {
                    if (!this['rg'](bT, bJ, bI + 0x80)) return !0x1;
                    if (!this['rg'](bT + 0x80, bJ, bI + 0x80)) return !0x1;
                }
                if (bz > 0x0) {
                    if (!this['rg'](bT, bV, bI + 0x80)) return !0x1;
                    if (!this['rg'](bT + 0x80, bV, bI + 0x80)) return !0x1;
                }
                return !!this['rg'](bT, xG, bI + 0x80) && this['rg'](bT + 0x80, xG, bI + 0x80);
            }
            if (0x4 === bq) {
                if (bT < x9['r2']) {
                    if (!this['rg'](bT + 0x80, bJ, bI)) return !0x1;
                    if (!this['rg'](bT + 0x80, bJ, bI + 0x80)) return !0x1;
                }
                if (bz > 0x0) {
                    if (!this['rg'](bT + 0x80, bV, bI)) return !0x1;
                    if (!this['rg'](bT + 0x80, bV, bI + 0x80)) return !0x1;
                }
                return !!this['rg'](bT + 0x80, xG, bI) && this['rg'](bT + 0x80, xG, bI + 0x80);
            }
            if (0x8 === bq) {
                if (bI > x9['cW']) {
                    if (!this['rg'](bT, bJ, bI)) return !0x1;
                    if (!this['rg'](bT + 0x80, bJ, bI)) return !0x1;
                }
                if (bz > 0x0) {
                    if (!this['rg'](bT, bV, bI)) return !0x1;
                    if (!this['rg'](bT + 0x80, bV, bI)) return !0x1;
                }
                return !!this['rg'](bT, xG, bI) && this['rg'](bT + 0x80, xG, bI);
            }
        }
        return !!this['rg'](bT + 0x40, xg, bI + 0x40) && (0x10 === bq ? this['rg'](bT, xG, bI + 0x80) : 0x20 === bq ? this['rg'](bT + 0x80, xG, bI + 0x80) : 0x40 === bq ? this['rg'](bT + 0x80, xG, bI) : 0x80 !== bq || this['rg'](bT, xG, bI));
    } ['rJ'](bz, bj, ba, bq, bT, bI, bJ, bV) {
        const Fp = uh;
        let xG, xg, xu, xM, xF = xG = (ba << 0x7) - x9['r2'],
            xO = xg = (bq << 0x7) - x9['cW'],
            xD = xu = xF + 0x80,
            xC = xM = xO + 0x80,
            xy = this['rB'][bj][ba][bq] - x9['r6'],
            xz = this['rB'][bj][ba + 0x1][bq] - x9['r6'],
            xj = this['rB'][bj][ba + 0x1][bq + 0x1] - x9['r6'],
            xa = this['rB'][bj][ba][bq + 0x1] - x9['r6'],
            xq = xO * bJ + xF * bV >> 0x10;
        if (xO = xO * bV - xF * bJ >> 0x10, xF = xq, xq = xy * bI - xO * bT >> 0x10, xO = xy * bT + xO * bI >> 0x10, xy = xq, xO < 0x32) return;
        if (xq = xg * bJ + xD * bV >> 0x10, xg = xg * bV - xD * bJ >> 0x10, xD = xq, xq = xz * bI - xg * bT >> 0x10, xg = xz * bT + xg * bI >> 0x10, xz = xq, xg < 0x32) return;
        if (xq = xC * bJ + xu * bV >> 0x10, xC = xC * bV - xu * bJ >> 0x10, xu = xq, xq = xj * bI - xC * bT >> 0x10, xC = xj * bT + xC * bI >> 0x10, xj = xq, xC < 0x32) return;
        if (xq = xM * bJ + xG * bV >> 0x10, xM = xM * bV - xG * bJ >> 0x10, xG = xq, xq = xa * bI - xM * bT >> 0x10, xM = xa * bT + xM * bI >> 0x10, xa = xq, xM < 0x32) return;
        let xT = XO['YY'] + ((xF << 0x9) / xO | 0x0),
            xI = XO['Y5'] + ((xy << 0x9) / xO | 0x0),
            xJ = XO['YY'] + ((xD << 0x9) / xg | 0x0),
            xV = XO['Y5'] + ((xz << 0x9) / xg | 0x0),
            xW = XO['YY'] + ((xu << 0x9) / xC | 0x0),
            xS = XO['Y5'] + ((xj << 0x9) / xC | 0x0),
            xi = XO['YY'] + ((xG << 0x9) / xM | 0x0),
            G0 = XO['Y5'] + ((xa << 0x9) / xM | 0x0);
        if (XO['Zi'] = 0x0, (xW - xi) * (xV - G0) - (xS - G0) * (xJ - xi) > 0x0) {
            if (XO['ZI'] = xW < 0x0 || xi < 0x0 || xJ < 0x0 || xW > Xu['ZH'] || xi > Xu['ZH'] || xJ > Xu['ZH'], x9['cy'] && this['ru'](x9['YG'], x9['YA'], xS, G0, xV, xW, xi, xJ) && (x9['rY'] = ba, x9['rQ'] = bq), -0x1 === bz['c3']) 0xbc614e !== bz['c1'] && XO['Yv'](xW, xi, xJ, xS, G0, xV, bz['c1'], bz['c2'], bz['c0']);
            else {
                if (x9['ZT']) {
                    let G1 = x9['ro'][bz['c3']];
                    XO['Yv'](xW, xi, xJ, xS, G0, xV, this['rV'](G1, bz['c1']), this['rV'](G1, bz['c2']), this['rV'](G1, bz['c0']));
                } else bz[Fp(0x178)] ? XO['YR'](xW, xi, xJ, xS, G0, xV, bz['c1'], bz['c2'], bz['c0'], xF, xy, xO, xD, xG, xz, xa, xg, xM, bz['c3']) : XO['YR'](xW, xi, xJ, xS, G0, xV, bz['c1'], bz['c2'], bz['c0'], xu, xj, xC, xG, xD, xa, xz, xM, xg, bz['c3']);
            }
        }
        if (!((xT - xJ) * (G0 - xV) - (xI - xV) * (xi - xJ) <= 0x0)) {
            if (XO['ZI'] = xT < 0x0 || xJ < 0x0 || xi < 0x0 || xT > Xu['ZH'] || xJ > Xu['ZH'] || xi > Xu['ZH'], x9['cy'] && this['ru'](x9['YG'], x9['YA'], xI, xV, G0, xT, xJ, xi) && (x9['rY'] = ba, x9['rQ'] = bq), -0x1 !== bz['c3']) {
                if (!x9['ZT']) return void XO['YR'](xT, xJ, xi, xI, xV, G0, bz['ti'], bz['c0'], bz['c2'], xF, xy, xO, xD, xG, xz, xa, xg, xM, bz['c3']);
                let G2 = x9['ro'][bz['c3']];
                XO['Yv'](xT, xJ, xi, xI, xV, G0, this['rV'](G2, bz['ti']), this['rV'](G2, bz['c0']), this['rV'](G2, bz['c2']));
            } else 0xbc614e !== bz['ti'] && XO['Yv'](xT, xJ, xi, xI, xV, G0, bz['ti'], bz['c0'], bz['c2']);
        }
    } ['rW'](bz, bj, ba, bq, bT, bI, bJ) {
        const Fh = uh;
        let bV = ba['wl'][Fh(0x2ea)];
        for (let xG = 0x0; xG < bV; xG++) {
            let xg = ba['wl'][xG] - x9['r2'],
                xu = ba['wK'][xG] - x9['r6'],
                xM = ba['wN'][xG] - x9['cW'],
                xF = xM * bI + xg * bJ >> 0x10;
            if (xM = xM * bJ - xg * bI >> 0x10, xg = xF, xF = xu * bT - xM * bq >> 0x10, xM = xu * bq + xM * bT >> 0x10, xu = xF, xM < 0x32) return;
            ba['tA'] && (x0['tc'][xG] = xg, x0['tw'][xG] = xu, x0['tR'][xG] = xM), x0['td'][xG] = XO['YY'] + ((xg << 0x9) / xM | 0x0), x0['tr'][xG] = XO['Y5'] + ((xu << 0x9) / xM | 0x0);
        }
        XO['Zi'] = 0x0, bV = ba['tU'][Fh(0x2ea)];
        for (let xO = 0x0; xO < bV; xO++) {
            let xD = ba['tU'][xO],
                xC = ba['tn'][xO],
                xy = ba['ts'][xO],
                xz = x0['td'][xD],
                xj = x0['td'][xC],
                xa = x0['td'][xy],
                xq = x0['tr'][xD],
                xT = x0['tr'][xC],
                xI = x0['tr'][xy];
            if ((xz - xj) * (xI - xT) - (xq - xT) * (xa - xj) > 0x0) {
                if (XO['ZI'] = xz < 0x0 || xj < 0x0 || xa < 0x0 || xz > Xu['ZH'] || xj > Xu['ZH'] || xa > Xu['ZH'], x9['cy'] && this['ru'](x9['YG'], x9['YA'], xq, xT, xI, xz, xj, xa) && (x9['rY'] = bz, x9['rQ'] = bj), ba['tA'] && -0x1 !== ba['tA'][xO]) {
                    if (x9['ZT']) {
                        let xJ = x9['ro'][ba['tA'][xO]];
                        XO['Yv'](xz, xj, xa, xq, xT, xI, this['rV'](xJ, ba['tl'][xO]), this['rV'](xJ, ba['tv'][xO]), this['rV'](xJ, ba['tm'][xO]));
                    } else ba[Fh(0x178)] ? XO['YR'](xz, xj, xa, xq, xT, xI, ba['tl'][xO], ba['tv'][xO], ba['tm'][xO], x0['tc'][0x0], x0['tw'][0x0], x0['tR'][0x0], x0['tc'][0x1], x0['tc'][0x3], x0['tw'][0x1], x0['tw'][0x3], x0['tR'][0x1], x0['tR'][0x3], ba['tA'][xO]) : XO['YR'](xz, xj, xa, xq, xT, xI, ba['tl'][xO], ba['tv'][xO], ba['tm'][xO], x0['tc'][xD], x0['tw'][xD], x0['tR'][xD], x0['tc'][xC], x0['tc'][xy], x0['tw'][xC], x0['tw'][xy], x0['tR'][xC], x0['tR'][xy], ba['tA'][xO]);
                } else 0xbc614e !== ba['tl'][xO] && XO['Yv'](xz, xj, xa, xq, xT, xI, ba['tl'][xO], ba['tv'][xO], ba['tm'][xO]);
            }
        }
    } ['rG'](bz, bj, ba) {
        let bq = this['ry'][bz][bj][ba];
        if (bq === -x9['Y1']) return !0x1;
        if (bq === x9['Y1']) return !0x0;
        {
            let bT = bj << 0x7,
                bI = ba << 0x7;
            return this['rg'](bT + 0x1, this['rB'][bz][bj][ba], bI + 0x1) && this['rg'](bT + 0x80 - 0x1, this['rB'][bz][bj + 0x1][ba], bI + 0x1) && this['rg'](bT + 0x80 - 0x1, this['rB'][bz][bj + 0x1][ba + 0x1], bI + 0x80 - 0x1) && this['rg'](bT + 0x1, this['rB'][bz][bj][ba + 0x1], bI + 0x80 - 0x1) ? (this['ry'][bz][bj][ba] = x9['Y1'], !0x0) : (this['ry'][bz][bj][ba] = -x9['Y1'], !0x1);
        }
    } ['rS'](bz) {
        this['rz'] = bz;
        for (let bj = 0x0; bj < this['c8']; bj++)
            for (let ba = 0x0; ba < this['c7']; ba++) this['rd'][bz][bj][ba] = new x2(bz, bj, ba);
    } ['ri'](bz, bj, ba) {
        const Fl = uh;
        for (x9['cq']['B'](bz);;) {
            let bq;
            do {
                if (bq = x9['cq']['v'](), !bq) return;
            } while (!bq[Fl(0x16d)]);
            let {
                x: bT,
                z: bI,
                tG: bJ,
                tx: bV
            } = bq, xG = this['rd'][bJ];
            if (bq['tI']) {
                if (bj) {
                    if (bJ > 0x0) {
                        let xy = this['rd'][bJ - 0x1][bT][bI];
                        if (xy && xy[Fl(0x16d)]) continue;
                    }
                    if (bT <= x9['cS'] && bT > x9['cJ']) {
                        let xz = xG[bT - 0x1][bI];
                        if (xz && xz[Fl(0x16d)] && (xz['tI'] || !(0x1 & bq['ta']))) continue;
                    }
                    if (bT >= x9['cS'] && bT < x9['ci'] - 0x1) {
                        let xj = xG[bT + 0x1][bI];
                        if (xj && xj[Fl(0x16d)] && (xj['tI'] || !(0x4 & bq['ta']))) continue;
                    }
                    if (bI <= x9['cV'] && bI > x9['r0']) {
                        let xa = xG[bT][bI - 0x1];
                        if (xa && xa[Fl(0x16d)] && (xa['tI'] || !(0x8 & bq['ta']))) continue;
                    }
                    if (bI >= x9['cV'] && bI < x9['r1'] - 0x1) {
                        let xq = xG[bT][bI + 0x1];
                        if (xq && xq[Fl(0x16d)] && (xq['tI'] || !(0x2 & bq['ta']))) continue;
                    }
                } else bj = !0x0;
                if (bq['tI'] = !0x1, bq['ty']) {
                    let xT = bq['ty'];
                    xT['tD'] ? this['rG'](0x0, bT, bI) || this['rJ'](xT['tD'], 0x0, bT, bI, x9['r4'], x9['r7'], x9['r3'], x9['r5']) : xT['tO'] && !this['rG'](0x0, bT, bI) && this['rW'](bT, bI, xT['tO'], x9['r4'], x9['r7'], x9['r3'], x9['r5']);
                    let xI = xT['tC'];
                    xI && xI['cw']?.['wm'](0x0, x9['r4'], x9['r7'], x9['r3'], x9['r5'], xI['x'] - x9['r2'], xI['y'] - x9['r6'], xI['z'] - x9['cW'], xI['tk']);
                    for (let xJ = 0x0; xJ < xT['tz']; xJ++) {
                        let xV = xT['tu'][xJ];
                        if (xV) {
                            let xW = xV['Rw'];
                            xW || (xW = xV['cK']?.['wm'](ba) ?? null), xW?.['wm'](xV['cp'], x9['r4'], x9['r7'], x9['r3'], x9['r5'], xV['x'] - x9['r2'], xV['y'] - x9['r6'], xV['z'] - x9['cW'], xV['tk']);
                        }
                    }
                }
                let xu = !0x1;
                bq['tD'] ? this['rG'](bV, bT, bI) || (xu = !0x0, this['rJ'](bq['tD'], bV, bT, bI, x9['r4'], x9['r7'], x9['r3'], x9['r5'])) : bq['tO'] && !this['rG'](bV, bT, bI) && (xu = !0x0, this['rW'](bT, bI, bq['tO'], x9['r4'], x9['r7'], x9['r3'], x9['r5']));
                let xM = 0x0,
                    xF = 0x0,
                    xO = bq['tC'],
                    xD = bq['tj'];
                if ((xO || xD) && (x9['cS'] === bT ? xM += 0x1 : x9['cS'] < bT && (xM += 0x2), x9['cV'] === bI ? xM += 0x3 : x9['cV'] > bI && (xM += 0x6), xF = x9['cj'][xM], bq['tS'] = x9['cB'][xM]), xO && (xO['cd'] & x9['cT'][xM] ? 0x10 === xO['cd'] ? (bq['tV'] = 0x3, bq['tq'] = x9['ck'][xM], bq['tW'] = 0x3 - bq['tq']) : 0x20 === xO['cd'] ? (bq['tV'] = 0x6, bq['tq'] = x9['ce'][xM], bq['tW'] = 0x6 - bq['tq']) : 0x40 === xO['cd'] ? (bq['tV'] = 0xc, bq['tq'] = x9['Ok'][xM], bq['tW'] = 0xc - bq['tq']) : (bq['tV'] = 0x9, bq['tq'] = x9['cF'][xM], bq['tW'] = 0x9 - bq['tq']) : bq['tV'] = 0x0, xO['cd'] & xF && !this['rI'](bV, bT, bI, xO['cd']) && xO['cw']?.['wm'](0x0, x9['r4'], x9['r7'], x9['r3'], x9['r5'], xO['x'] - x9['r2'], xO['y'] - x9['r6'], xO['z'] - x9['cW'], xO['tk']), xO['cR'] & xF && !this['rI'](bV, bT, bI, xO['cR']) && xO['cc']?.['wm'](0x0, x9['r4'], x9['r7'], x9['r3'], x9['r5'], xO['x'] - x9['r2'], xO['y'] - x9['r6'], xO['z'] - x9['cW'], xO['tk'])), xD && !this['rx'](bV, bT, bI, xD['Rw']['wL'])) {
                    if (xD['cH'] & xF) xD['Rw']['wm'](xD['cr'], x9['r4'], x9['r7'], x9['r3'], x9['r5'], xD['x'] - x9['r2'], xD['y'] - x9['r6'], xD['z'] - x9['cW'], xD['tk']);
                    else {
                        if (0x300 & xD['cH']) {
                            let xS, xi, G0 = xD['x'] - x9['r2'],
                                G1 = xD['y'] - x9['r6'],
                                G2 = xD['z'] - x9['cW'],
                                G3 = xD['cr'];
                            if (xS = 0x1 === G3 || 0x2 === G3 ? -G0 : G0, xi = 0x2 === G3 || 0x3 === G3 ? -G2 : G2, 0x100 & xD['cH'] && xi < xS) {
                                let G4 = G0 + x9['cM'][G3],
                                    G5 = G2 + x9['cO'][G3];
                                xD['Rw']['wm'](0x200 * G3 + 0x100, x9['r4'], x9['r7'], x9['r3'], x9['r5'], G4, G1, G5, xD['tk']);
                            }
                            if (0x200 & xD['cH'] && xi > xS) {
                                let G6 = G0 + x9['cD'][G3],
                                    G7 = G2 + x9['cI'][G3];
                                xD['Rw']['wm'](0x200 * G3 + 0x500 & 0x7ff, x9['r4'], x9['r7'], x9['r3'], x9['r5'], G6, G1, G7, xD['tk']);
                            }
                        }
                    }
                }
                if (xu) {
                    let G8 = bq['tF'];
                    G8 && G8['Rw']?.['wm'](0x0, x9['r4'], x9['r7'], x9['r3'], x9['r5'], G8['x'] - x9['r2'], G8['y'] - x9['r6'], G8['z'] - x9['cW'], G8['tk']);
                    let G9 = bq['tM'];
                    G9 && 0x0 === G9[Fl(0x1ca)] && (G9['tX'] && G9['tX']['wm'](0x0, x9['r4'], x9['r7'], x9['r3'], x9['r5'], G9['x'] - x9['r2'], G9['y'] - x9['r6'], G9['z'] - x9['cW'], G9['tk']), G9['tB'] && G9['tB']['wm'](0x0, x9['r4'], x9['r7'], x9['r3'], x9['r5'], G9['x'] - x9['r2'], G9['y'] - x9['r6'], G9['z'] - x9['cW'], G9['tk']), G9['tb'] && G9['tb']['wm'](0x0, x9['r4'], x9['r7'], x9['r3'], x9['r5'], G9['x'] - x9['r2'], G9['y'] - x9['r6'], G9['z'] - x9['cW'], G9['tk']));
                }
                let xC = bq['ta'];
                if (0x0 !== xC) {
                    if (bT < x9['cS'] && 0x4 & xC) {
                        let Go = xG[bT + 0x1][bI];
                        Go && Go[Fl(0x16d)] && x9['cq']['B'](Go);
                    }
                    if (bI < x9['cV'] && 0x2 & xC) {
                        let GQ = xG[bT][bI + 0x1];
                        GQ && GQ[Fl(0x16d)] && x9['cq']['B'](GQ);
                    }
                    if (bT > x9['cS'] && 0x1 & xC) {
                        let GZ = xG[bT - 0x1][bI];
                        GZ && GZ[Fl(0x16d)] && x9['cq']['B'](GZ);
                    }
                    if (bI > x9['cV'] && 0x8 & xC) {
                        let GY = xG[bT][bI - 0x1];
                        GY && GY[Fl(0x16d)] && x9['cq']['B'](GY);
                    }
                }
            }
            if (0x0 !== bq['tV']) {
                let GE = !0x0;
                for (let Gd = 0x0; Gd < bq['tz']; Gd++) {
                    let Gw = bq['tu'][Gd];
                    if (Gw && (Gw['Y1'] !== x9['Y1'] && (bq['tg'][Gd] & bq['tV']) === bq['tq'])) {
                        GE = !0x1;
                        break;
                    }
                }
                if (GE) {
                    let GR = bq['tC'];
                    GR && !this['rI'](bV, bT, bI, GR['cd']) && GR['cw']?.['wm'](0x0, x9['r4'], x9['r7'], x9['r3'], x9['r5'], GR['x'] - x9['r2'], GR['y'] - x9['r6'], GR['z'] - x9['cW'], GR['tk']), bq['tV'] = 0x0;
                }
            }
            if (bq['tT']) {
                let Gt = bq['tz'];
                bq['tT'] = !0x1;
                let Gc = 0x0;
                GS: for (let Gr = 0x0; Gr < Gt; Gr++) {
                    let GH = bq['tu'][Gr];
                    if (!GH || GH['Y1'] === x9['Y1']) continue;
                    for (let GK = GH['cl']; GK <= GH['cN']; GK++)
                        for (let GN = GH['cv']; GN <= GH['cn']; GN++) {
                            let Gv = xG[GK][GN];
                            if (Gv) {
                                if (!Gv['tI']) {
                                    if (0x0 === Gv['tV']) continue;
                                    let Gn = 0x0;
                                    if (GK > GH['cl'] && (Gn += 0x1), GK < GH['cN'] && (Gn += 0x4), GN > GH['cv'] && (Gn += 0x8), GN < GH['cn'] && (Gn += 0x2), (Gn & Gv['tV']) !== bq['tW']) continue;
                                }
                                bq['tT'] = !0x0;
                                continue GS;
                            }
                        }
                    x9['cm'][Gc++] = GH;
                    let GP = x9['cS'] - GH['cl'],
                        Gp = GH['cN'] - x9['cS'];
                    Gp > GP && (GP = Gp);
                    let Gh = x9['cV'] - GH['cv'],
                        Gl = GH['cn'] - x9['cV'];
                    GH['cU'] = Gl > Gh ? GP + Gl : GP + Gh;
                }
                for (;;) {
                    let GU = -0x32,
                        Gm = -0x1;
                    for (let GL = 0x0; GL < Gc; GL++) {
                        let Ge = x9['cm'][GL];
                        Ge && (Ge['Y1'] !== x9['Y1'] && Ge['cU'] > GU && (GU = Ge['cU'], Gm = GL));
                    }
                    if (-0x1 === Gm) break;
                    let Gf = x9['cm'][Gm];
                    if (Gf) {
                        Gf['Y1'] = x9['Y1'];
                        let Gs = Gf['Rw'];
                        Gs || (Gs = Gf['cK']?.['wm'](ba) ?? null), Gs && !this['rT'](bV, Gf['cl'], Gf['cN'], Gf['cv'], Gf['cn'], Gs['wL']) && Gs['wm'](Gf['cp'], x9['r4'], x9['r7'], x9['r3'], x9['r5'], Gf['x'] - x9['r2'], Gf['y'] - x9['r6'], Gf['z'] - x9['cW'], Gf['tk']);
                        for (let GA = Gf['cl']; GA <= Gf['cN']; GA++)
                            for (let Gb = Gf['cv']; Gb <= Gf['cn']; Gb++) {
                                let Gk = xG[GA][Gb];
                                Gk && (0x0 !== Gk['tV'] ? x9['cq']['B'](Gk) : GA === bT && Gb === bI || !Gk[Fl(0x16d)] || x9['cq']['B'](Gk));
                            }
                    }
                }
                if (bq['tT']) continue;
            }
            if (!bq[Fl(0x16d)] || 0x0 !== bq['tV']) continue;
            if (bT <= x9['cS'] && bT > x9['cJ']) {
                let GB = xG[bT - 0x1][bI];
                if (GB && GB[Fl(0x16d)]) continue;
            }
            if (bT >= x9['cS'] && bT < x9['ci'] - 0x1) {
                let GX = xG[bT + 0x1][bI];
                if (GX && GX[Fl(0x16d)]) continue;
            }
            if (bI <= x9['cV'] && bI > x9['r0']) {
                let Gx = xG[bT][bI - 0x1];
                if (Gx && Gx[Fl(0x16d)]) continue;
            }
            if (bI >= x9['cV'] && bI < x9['r1'] - 0x1) {
                let GG = xG[bT][bI + 0x1];
                if (GG && GG[Fl(0x16d)]) continue;
            }
            bq[Fl(0x16d)] = !0x1, x9['cz']--;
            let xg = bq['tM'];
            if (xg && 0x0 !== xg[Fl(0x1ca)] && (xg['tX'] && xg['tX']['wm'](0x0, x9['r4'], x9['r7'], x9['r3'], x9['r5'], xg['x'] - x9['r2'], xg['y'] - x9['r6'] - xg['offset'], xg['z'] - x9['cW'], xg['tk']), xg['tB'] && xg['tB']['wm'](0x0, x9['r4'], x9['r7'], x9['r3'], x9['r5'], xg['x'] - x9['r2'], xg['y'] - x9['r6'] - xg[Fl(0x1ca)], xg['z'] - x9['cW'], xg['tk']), xg['tb'] && xg['tb']['wm'](0x0, x9['r4'], x9['r7'], x9['r3'], x9['r5'], xg['x'] - x9['r2'], xg['y'] - x9['r6'] - xg[Fl(0x1ca)], xg['z'] - x9['cW'], xg['tk'])), 0x0 !== bq['tS']) {
                let Gg = bq['tj'];
                if (Gg && !this['rx'](bV, bT, bI, Gg['Rw']['wL'])) {
                    if (Gg['cH'] & bq['tS']) Gg['Rw']['wm'](Gg['cr'], x9['r4'], x9['r7'], x9['r3'], x9['r5'], Gg['x'] - x9['r2'], Gg['y'] - x9['r6'], Gg['z'] - x9['cW'], Gg['tk']);
                    else {
                        if (0x300 & Gg['cH']) {
                            let GM, GF, GO = Gg['x'] - x9['r2'],
                                GD = Gg['y'] - x9['r6'],
                                GC = Gg['z'] - x9['cW'],
                                Gy = Gg['cr'];
                            if (GM = 0x1 === Gy || 0x2 === Gy ? -GO : GO, GF = 0x2 === Gy || 0x3 === Gy ? -GC : GC, 0x100 & Gg['cH'] && GF >= GM) {
                                let Gz = GO + x9['cM'][Gy],
                                    Gj = GC + x9['cO'][Gy];
                                Gg['Rw']['wm'](0x200 * Gy + 0x100, x9['r4'], x9['r7'], x9['r3'], x9['r5'], Gz, GD, Gj, Gg['tk']);
                            }
                            if (0x200 & Gg['cH'] && GF <= GM) {
                                let Ga = GO + x9['cD'][Gy],
                                    Gq = GC + x9['cI'][Gy];
                                Gg['Rw']['wm'](0x200 * Gy + 0x500 & 0x7ff, x9['r4'], x9['r7'], x9['r3'], x9['r5'], Ga, GD, Gq, Gg['tk']);
                            }
                        }
                    }
                }
                let Gu = bq['tC'];
                Gu && (Gu['cR'] & bq['tS'] && !this['rI'](bV, bT, bI, Gu['cR']) && Gu['cc']?.['wm'](0x0, x9['r4'], x9['r7'], x9['r3'], x9['r5'], Gu['x'] - x9['r2'], Gu['y'] - x9['r6'], Gu['z'] - x9['cW'], Gu['tk']), Gu['cd'] & bq['tS'] && !this['rI'](bV, bT, bI, Gu['cd']) && Gu['cw']?.['wm'](0x0, x9['r4'], x9['r7'], x9['r3'], x9['r5'], Gu['x'] - x9['r2'], Gu['y'] - x9['r6'], Gu['z'] - x9['cW'], Gu['tk']));
            }
            if (bJ < this['rU'] - 0x1) {
                let GT = this['rd'][bJ + 0x1][bT][bI];
                GT && GT[Fl(0x16d)] && x9['cq']['B'](GT);
            }
            if (bT < x9['cS']) {
                let GI = xG[bT + 0x1][bI];
                GI && GI['update'] && x9['cq']['B'](GI);
            }
            if (bI < x9['cV']) {
                let GJ = xG[bT][bI + 0x1];
                GJ && GJ[Fl(0x16d)] && x9['cq']['B'](GJ);
            }
            if (bT > x9['cS']) {
                let GV = xG[bT - 0x1][bI];
                GV && GV['update'] && x9['cq']['B'](GV);
            }
            if (bI > x9['cV']) {
                let GW = xG[bT][bI - 0x1];
                GW && GW[Fl(0x16d)] && x9['cq']['B'](GW);
            }
        }
    } ['H0'](bz, bj, ba, bq, bT, bI, bJ) {
        this['rd'][bj][ba][bq] || (this['rd'][bj][ba][bq] = new x2(bj, ba, bq));
        let bV = this['rd'][bj][ba][bq];
        bV && (bV['tF'] = new x8(bT, 0x80 * ba + 0x40, 0x80 * bq + 0x40, bz, bI, bJ));
    } ['H1'](bz, bj, ba, bq) {
        let bT = this['rd'][bz][bj][ba];
        bT && (bT['tJ'] = bq);
    } ['H2']() {
        const FK = uh;
        let bz = x9['cu'][x9['cL']],
            bj = x9['cg'][x9['cL']];
        x9['rZ'] = 0x0;
        for (let ba = 0x0; ba < bz; ba++) {
            let bq, bT, bI, bJ, bV = bj[ba];
            if (bV) {
                if (0x1 === bV[FK(0x284)]) {
                    if (bq = bV['c5'] + 0x19 - x9['cS'], bq >= 0x0 && bq <= 0x32) {
                        bT = bV['c6'] + 0x19 - x9['cV'], bT < 0x0 && (bT = 0x0), bI = bV['c7'] + 0x19 - x9['cV'], bI > 0x32 && (bI = 0x32);
                        let xG = !0x1;
                        for (; bT <= bI;)
                            if (x9['cA'] && x9['cA'][bq][bT++]) {
                                xG = !0x0;
                                break;
                            } if (xG) {
                            if (bJ = x9['r2'] - bV['wz'], bJ > 0x20) bV[FK(0x214)] = 0x1;
                            else {
                                if (bJ >= -0x20) continue;
                                bV[FK(0x214)] = 0x2, bJ = -bJ;
                            }
                            bV['cQ'] = (bV['wq'] - x9['cW'] << 0x8) / bJ | 0x0, bV['cE'] = (bV['wa'] - x9['cW'] << 0x8) / bJ | 0x0, bV['cY'] = (bV['wy'] - x9['r6'] << 0x8) / bJ | 0x0, bV['cZ'] = (bV['wL'] - x9['r6'] << 0x8) / bJ | 0x0, x9['cC'][x9['rZ']++] = bV;
                        }
                    }
                } else {
                    if (0x2 === bV['type']) {
                        if (bq = bV['c6'] + 0x19 - x9['cV'], bq >= 0x0 && bq <= 0x32) {
                            bT = bV['c5'] + 0x19 - x9['cS'], bT < 0x0 && (bT = 0x0), bI = bV['c8'] + 0x19 - x9['cS'], bI > 0x32 && (bI = 0x32);
                            let xg = !0x1;
                            for (; bT <= bI;)
                                if (x9['cA'] && x9['cA'][bT++][bq]) {
                                    xg = !0x0;
                                    break;
                                } if (xg) {
                                if (bJ = x9['cW'] - bV['wq'], bJ > 0x20) bV[FK(0x214)] = 0x3;
                                else {
                                    if (bJ >= -0x20) continue;
                                    bV[FK(0x214)] = 0x4, bJ = -bJ;
                                }
                                bV['c9'] = (bV['wz'] - x9['r2'] << 0x8) / bJ | 0x0, bV['co'] = (bV['wj'] - x9['r2'] << 0x8) / bJ | 0x0, bV['cY'] = (bV['wy'] - x9['r6'] << 0x8) / bJ | 0x0, bV['cZ'] = (bV['wL'] - x9['r6'] << 0x8) / bJ | 0x0, x9['cC'][x9['rZ']++] = bV;
                            }
                        }
                    } else {
                        if (0x4 === bV[FK(0x284)] && (bq = bV['wy'] - x9['r6'], bq > 0x80 && (bT = bV['c6'] + 0x19 - x9['cV'], bT < 0x0 && (bT = 0x0), bI = bV['c7'] + 0x19 - x9['cV'], bI > 0x32 && (bI = 0x32), bT <= bI))) {
                            let xu = bV['c5'] + 0x19 - x9['cS'];
                            xu < 0x0 && (xu = 0x0), bJ = bV['c8'] + 0x19 - x9['cS'], bJ > 0x32 && (bJ = 0x32);
                            let xM = !0x1;
                            xD: for (let xF = xu; xF <= bJ; xF++)
                                for (let xO = bT; xO <= bI; xO++)
                                    if (x9['cA'] && x9['cA'][xF][xO]) {
                                        xM = !0x0;
                                        break xD;
                                    } xM && (bV[FK(0x214)] = 0x5, bV['c9'] = (bV['wz'] - x9['r2'] << 0x8) / bq | 0x0, bV['co'] = (bV['wj'] - x9['r2'] << 0x8) / bq | 0x0, bV['cQ'] = (bV['wq'] - x9['cW'] << 0x8) / bq | 0x0, bV['cE'] = (bV['wa'] - x9['cW'] << 0x8) / bq | 0x0, x9['cC'][x9['rZ']++] = bV);
                        }
                    }
                }
            }
        }
    } ['H3'](bz, bj, ba, bq, bT, bI) {
        let bJ = this['rd'][bz][bj][ba];
        if (!bJ) return;
        let bV = bJ['tD'];
        if (bV) {
            let xy = bV['c4'];
            if (0x0 !== xy) {
                for (let xz = 0x0; xz < 0x4; xz++) bq[bT] = xy, bq[bT + 0x1] = xy, bq[bT + 0x2] = xy, bq[bT + 0x3] = xy, bT += bI;
            }
            return;
        }
        let xG = bJ['tO'];
        if (!xG) return;
        let {
            shape: xg,
            tf: xu,
            tL: xM,
            te: xF
        } = xG, xO = x9['r8'][xg], xD = x9['r9'][xu], xC = 0x0;
        if (0x0 === xM) {
            for (let xj = 0x0; xj < 0x4; xj++) 0x0 !== xO[xD[xC++]] && (bq[bT] = xF), 0x0 !== xO[xD[xC++]] && (bq[bT + 0x1] = xF), 0x0 !== xO[xD[xC++]] && (bq[bT + 0x2] = xF), 0x0 !== xO[xD[xC++]] && (bq[bT + 0x3] = xF), bT += bI;
        } else {
            for (let xa = 0x0; xa < 0x4; xa++) bq[bT] = 0x0 === xO[xD[xC++]] ? xM : xF, bq[bT + 0x1] = 0x0 === xO[xD[xC++]] ? xM : xF, bq[bT + 0x2] = 0x0 === xO[xD[xC++]] ? xM : xF, bq[bT + 0x3] = 0x0 === xO[xD[xC++]] ? xM : xF, bT += bI;
        }
    } ['H4'](bz, bj, ba) {
        let bq = this['rd'][bz][bj][ba];
        return bq && bq['tF'] ? bq['tF']['tk'] : 0x0;
    } ['H5'](bz, bj, ba, bq, bT, bI, bJ) {
        const FN = uh;
        bz < 0x0 ? bz = 0x0 : bz >= 0x80 * this['c8'] && (bz = 0x80 * this['c8'] - 0x1), ba < 0x0 ? ba = 0x0 : ba >= 0x80 * this['c7'] && (ba = 0x80 * this['c7'] - 0x1), x9['Y1']++, x9['r4'] = XO['oy'][bI], x9['r7'] = XO['Y3'][bI], x9['r3'] = XO['oy'][bT], x9['r5'] = XO['Y3'][bT], x9['cA'] = x9['cf'][(bI - 0x80) / 0x20 | 0x0][bT / 0x40 | 0x0], x9['r2'] = bz, x9['r6'] = bj, x9['cW'] = ba, x9['cS'] = bz / 0x80 | 0x0, x9['cV'] = ba / 0x80 | 0x0, x9['cL'] = bq, x9['cJ'] = x9['cS'] - 0x19, x9['cJ'] < 0x0 && (x9['cJ'] = 0x0), x9['r0'] = x9['cV'] - 0x19, x9['r0'] < 0x0 && (x9['r0'] = 0x0), x9['ci'] = x9['cS'] + 0x19, x9['ci'] > this['c8'] && (x9['ci'] = this['c8']), x9['r1'] = x9['cV'] + 0x19, x9['r1'] > this['c7'] && (x9['r1'] = this['c7']), this['H2'](), x9['cz'] = 0x0;
        for (let bV = this['rz']; bV < this['rU']; bV++) {
            let xG = this['rd'][bV];
            for (let xg = x9['cJ']; xg < x9['ci']; xg++)
                for (let xu = x9['r0']; xu < x9['r1']; xu++) {
                    let xM = xG[xg][xu];
                    xM && (xM['tJ'] <= bq && (x9['cA'][xg + 0x19 - x9['cS']][xu + 0x19 - x9['cV']] || this['rB'][bV][xg][xu] - bj >= 0x7d0) ? (xM['tI'] = !0x0, xM[FN(0x16d)] = !0x0, xM['tT'] = xM['tz'] > 0x0, x9['cz']++) : (xM['tI'] = !0x1, xM[FN(0x16d)] = !0x1, xM['tV'] = 0x0));
                }
        }
        for (let xF = this['rz']; xF < this['rU']; xF++) {
            let xO = this['rd'][xF];
            for (let xD = -0x19; xD <= 0x0; xD++) {
                let xC = x9['cS'] + xD,
                    xy = x9['cS'] - xD;
                if (!(xC < x9['cJ'] && xy >= x9['ci']))
                    for (let xz = -0x19; xz <= 0x0; xz++) {
                        let xj, xa = x9['cV'] + xz,
                            xq = x9['cV'] - xz;
                        if (xC >= x9['cJ'] && (xa >= x9['r0'] && (xj = xO[xC][xa], xj && xj['tI'] && this['ri'](xj, !0x0, bJ)), xq < x9['r1'] && (xj = xO[xC][xq], xj && xj['tI'] && this['ri'](xj, !0x0, bJ))), xy < x9['ci'] && (xa >= x9['r0'] && (xj = xO[xy][xa], xj && xj['tI'] && this['ri'](xj, !0x0, bJ)), xq < x9['r1'] && (xj = xO[xy][xq], xj && xj['tI'] && this['ri'](xj, !0x0, bJ))), 0x0 === x9['cz']) return void(x9['cy'] = !0x1);
                    }
            }
        }
        for (let xT = this['rz']; xT < this['rU']; xT++) {
            let xI = this['rd'][xT];
            for (let xJ = -0x19; xJ <= 0x0; xJ++) {
                let xV = x9['cS'] + xJ,
                    xW = x9['cS'] - xJ;
                if (!(xV < x9['cJ'] && xW >= x9['ci']))
                    for (let xS = -0x19; xS <= 0x0; xS++) {
                        let xi, G0 = x9['cV'] + xS,
                            G1 = x9['cV'] - xS;
                        if (xV >= x9['cJ'] && (G0 >= x9['r0'] && (xi = xI[xV][G0], xi && xi['tI'] && this['ri'](xi, !0x1, bJ)), G1 < x9['r1'] && (xi = xI[xV][G1], xi && xi['tI'] && this['ri'](xi, !0x1, bJ))), xW < x9['ci'] && (G0 >= x9['r0'] && (xi = xI[xW][G0], xi && xi['tI'] && this['ri'](xi, !0x1, bJ)), G1 < x9['r1'] && (xi = xI[xW][G1], xi && xi['tI'] && this['ri'](xi, !0x1, bJ))), 0x0 === x9['cz']) return void(x9['cy'] = !0x1);
                    }
            }
        }
    } ['rP'](bz) {
        for (let bj = bz['cl']; bj <= bz['cN']; bj++)
            for (let ba = bz['cv']; ba <= bz['cn']; ba++) {
                let bq = this['rd'][bz['cP']][bj][ba];
                if (bq) {
                    for (let bT = 0x0; bT < bq['tz']; bT++)
                        if (bq['tu'][bT] === bz) {
                            bq['tz']--;
                            for (let bI = bT; bI < bq['tz']; bI++) bq['tu'][bI] = bq['tu'][bI + 0x1], bq['tg'][bI] = bq['tg'][bI + 0x1];
                            bq['tu'][bq['tz']] = null;
                            break;
                        } bq['ta'] = 0x0;
                    for (let bJ = 0x0; bJ < bq['tz']; bJ++) bq['ta'] |= bq['tg'][bJ];
                }
            }
    } ['H6'](bz, bj, ba, bq) {
        const Fv = uh;
        let bT = this['rd'][bz][bj][ba];
        if (bT) {
            if (bT['tC'] && bT['tC']['tk'] === bq) return 0xff & bT['tC']['info'];
            if (bT['tj'] && bT['tj']['tk'] === bq) return 0xff & bT['tj']['info'];
            if (bT['tF'] && bT['tF']['tk'] === bq) return 0xff & bT['tF'][Fv(0x1cb)];
            for (let bI = 0x0; bI < bT['tz']; bI++) {
                let bJ = bT['tu'][bI];
                if (bJ && bJ['tk'] === bq) return 0xff & bJ['info'];
            }
            return -0x1;
        }
        return -0x1;
    } ['rf'](bz, bj, ba, bq, bT, bI) {
        this['rj']++;
        let bJ = 0x0,
            bV = bj['wl'],
            xG = bj['df'];
        if (bz['wx'] && bz['wF'])
            for (let xg = 0x0; xg < bz['df']; xg++) {
                let xu = bz['wx'][xg],
                    xM = bz['wF'][xg];
                if (xM && 0x0 !== xM['w']) {
                    let xF = bz['wK'][xg] - bq;
                    if (xF > bj['wy']) continue;
                    let xO = bz['wl'][xg] - ba;
                    if (xO < bj['wz'] || xO > bj['wj']) continue;
                    let xD = bz['wN'][xg] - bT;
                    if (xD < bj['wq'] || xD > bj['wa']) continue;
                    if (bj['wx'] && bj['wF'])
                        for (let xC = 0x0; xC < xG; xC++) {
                            let xy = bj['wx'][xC],
                                xz = bj['wF'][xC];
                            xO !== bV[xC] || xD !== bj['wN'][xC] || xF !== bj['wK'][xC] || xz && 0x0 === xz['w'] || (xu && xy && xz && (xu['x'] += xz['x'], xu['y'] += xz['y'], xu['z'] += xz['z'], xu['w'] += xz['w'], xy['x'] += xM['x'], xy['y'] += xM['y'], xy['z'] += xM['z'], xy['w'] += xM['w'], bJ++), this['rC'][xg] = this['rj'], this['rD'][xC] = this['rj']);
                        }
                }
            }
        if (!(bJ < 0x3) && bI) {
            if (bz['wB']) {
                for (let xj = 0x0; xj < bz['dn']; xj++) this['rC'][bz['wn'][xj]] === this['rj'] && this['rC'][bz['wk'][xj]] === this['rj'] && this['rC'][bz['wU'][xj]] === this['rj'] && (bz['wB'][xj] = -0x1);
            }
            if (bj['wB']) {
                for (let xa = 0x0; xa < bj['dn']; xa++) this['rD'][bj['wn'][xa]] === this['rj'] && this['rD'][bj['wk'][xa]] === this['rj'] && this['rD'][bj['wU'][xa]] === this['rj'] && (bj['wB'][xa] = -0x1);
            }
        }
    } ['H7'](bz, bj, ba) {
        let bq = this['rd'][bz][ba][bj];
        return bq && bq['tj'] ? bq['tj']['tk'] : 0x0;
    } ['rR'](bz, bj, ba, bq, bT, bI, bJ, bV, xG, xg, xu, xM, xF, xO) {
        if (!xG && !xg) return !0x1;
        for (let xC = bT; xC < bT + bJ; xC++)
            for (let xy = bI; xy < bI + bV; xy++) {
                if (xC < 0x0 || xy < 0x0 || xC >= this['c8'] || xy >= this['c7']) return !0x1;
                let xz = this['rd'][bq][xC][xy];
                if (xz && xz['tz'] >= 0x5) return !0x1;
            }
        let xD = new x7(bq, ba, bz, bj, xG, xg, xF, bT, bT + bJ - 0x1, bI, bI + bV - 0x1, xu, xM);
        for (let xj = bT; xj < bT + bJ; xj++)
            for (let xa = bI; xa < bI + bV; xa++) {
                let xq = 0x0;
                xj > bT && (xq |= 0x1), xj < bT + bJ - 0x1 && (xq += 0x4), xa > bI && (xq += 0x8), xa < bI + bV - 0x1 && (xq += 0x2);
                for (let xI = bq; xI >= 0x0; xI--) this['rd'][xI][xj][xa] || (this['rd'][xI][xj][xa] = new x2(xI, xj, xa));
                let xT = this['rd'][bq][xj][xa];
                xT && (xT['tu'][xT['tz']] = xD, xT['tg'][xT['tz']] = xq, xT['ta'] |= xq, xT['tz']++);
            }
        return xO && (this['rH'][this['rr']++] = xD), !0x0;
    } ['H8'](bz, bj, ba, bq, bT, bI, bJ, bV, xG, xg, xu, xM, xF, xO, xD, xC, xy, xz, xj, xa) {
        if (0x0 === bq) {
            for (let xT = bz; xT >= 0x0; xT--) this['rd'][xT][bj][ba] || (this['rd'][xT][bj][ba] = new x2(xT, bj, ba));
            let xq = this['rd'][bz][bj][ba];
            xq && (xq['tD'] = new x3(xu, xM, xF, xO, -0x1, xj, !0x1));
        } else {
            if (0x1 === bq) {
                for (let xJ = bz; xJ >= 0x0; xJ--) this['rd'][xJ][bj][ba] || (this['rd'][xJ][bj][ba] = new x2(xJ, bj, ba));
                let xI = this['rd'][bz][bj][ba];
                xI && (xI['tD'] = new x3(xD, xC, xy, xz, bI, xa, bJ === bV && bJ === xG && bJ === xg));
            } else {
                for (let xW = bz; xW >= 0x0; xW--) this['rd'][xW][bj][ba] || (this['rd'][xW][bj][ba] = new x2(xW, bj, ba));
                let xV = this['rd'][bz][bj][ba];
                xV && (xV['tO'] = new x0(bj, bq, xC, bV, xF, bT, xu, xg, xa, xD, bI, xz, xj, xG, xy, xO, bJ, ba, xM));
            }
        }
    } ['rL'](bz, bj, ba, bq) {
        if (bj < this['c8']) {
            let bT = this['rd'][bz][bj + 0x1][ba];
            bT && bT['tF'] && bT['tF']['Rw'] && bT['tF']['Rw']['wx'] && this['rf'](bq, bT['tF']['Rw'], 0x80, 0x0, 0x0, !0x0);
        }
        if (ba < this['c8']) {
            let bI = this['rd'][bz][bj][ba + 0x1];
            bI && bI['tF'] && bI['tF']['Rw'] && bI['tF']['Rw']['wx'] && this['rf'](bq, bI['tF']['Rw'], 0x0, 0x0, 0x80, !0x0);
        }
        if (bj < this['c8'] && ba < this['c7']) {
            let bJ = this['rd'][bz][bj + 0x1][ba + 0x1];
            bJ && bJ['tF'] && bJ['tF']['Rw'] && bJ['tF']['Rw']['wx'] && this['rf'](bq, bJ['tF']['Rw'], 0x80, 0x0, 0x80, !0x0);
        }
        if (bj < this['c8'] && ba > 0x0) {
            let bV = this['rd'][bz][bj + 0x1][ba - 0x1];
            bV && bV['tF'] && bV['tF']['Rw'] && bV['tF']['Rw']['wx'] && this['rf'](bq, bV['tF']['Rw'], 0x80, 0x0, -0x80, !0x0);
        }
    } [uh(0x25f)](bz, bj) {
        x9['cy'] = !0x0, x9['YG'] = bz, x9['YA'] = bj, x9['rY'] = -0x1, x9['rQ'] = -0x1;
    } ['H9'](bz, bj, ba) {
        let bq = this['rd'][bz][bj][ba];
        bq && (bq['tF'] = null);
    } ['rV'](bz, bj) {
        return (bj = (0x7f - bj) * (0x7f & bz) / 0xa0 | 0x0) < 0x2 ? bj = 0x2 : bj > 0x7e && (bj = 0x7e), (0xff80 & bz) + bj;
    } ['Qq'](bz, bj, ba, bq) {
        let bT = this['rd'][bz][bj][ba];
        0x1 === bq && bT && (bT['tC'] = null);
    }
}
class xo extends k2 {
    ['Ho'];
    ['HQ'];
    ['HZ'];
    ['HY'];
    ['HE'];
    ['Hd'];
    ['index'];
    ['Hw'];
    constructor(bz, bj, ba, bq, bT, bI, bJ) {
        super(), this['HZ'] = bq, this['HQ'] = ba, this['HY'] = bT, this['Ho'] = bj, this['index'] = bz, this['HE'] = bI, bJ && -0x1 !== bI['tE'] && this['HE']['tQ'] ? (this['Hd'] = Math['random']() * this['HE']['tZ'] | 0x0, this['Hw'] = Math['random']() * this['HE']['tQ'][this['Hd']] | 0x0) : (this['Hd'] = -0x1, this['Hw'] = 0x0);
    }
}
class xQ {
    static['HR'] = (0x11 * Math[uh(0x291)]() | 0x0) - 0x8;
    static['Ht'] = (0x21 * Math[uh(0x291)]() | 0x0) - 0x10;
    static['Hc'] = Int8Array['of'](0x1, 0x0, -0x1, 0x0);
    static['Hr'] = Int8Array['of'](0x1, 0x2, 0x4, 0x8);
    static['HH'] = Int8Array['of'](0x0, -0x1, 0x0, 0x1);
    static['HP'] = Uint8Array['of'](0x10, 0x20, 0x40, 0x80);
    static['ZT'] = !0x0;
    static['Hp'] = 0x0;
    static['Hh'] = !0x1;
    static['Hl'](bz, bj) {
        let ba = this['HK'](bz + 0xb135, bj + 0x16713, 0x4) + (this['HK'](bz + 0x2836, bj + 0x93bd, 0x2) - 0x80 >> 0x1) + (this['HK'](bz, bj, 0x1) - 0x80 >> 0x2) - 0x80;
        return ba = 0x23 + (0.3 * ba | 0x0), ba < 0xa ? ba = 0xa : ba > 0x3c && (ba = 0x3c), ba;
    }
    static['HK'](bz, bj, ba) {
        let bq = bz / ba | 0x0,
            bT = bz & ba - 0x1,
            bI = bj / ba | 0x0,
            bJ = bj & ba - 0x1,
            bV = this['HN'](bq, bI),
            xG = this['HN'](bq + 0x1, bI),
            xg = this['HN'](bq, bI + 0x1),
            xu = this['HN'](bq + 0x1, bI + 0x1),
            xM = this['Hv'](bV, xG, bT, ba),
            xF = this['Hv'](xg, xu, bT, ba);
        return this['Hv'](xM, xF, bJ, ba);
    }
    static['Hv'](bz, bj, ba, bq) {
        let bT = 0x10000 - XO['Y3'][0x400 * ba / bq | 0x0] >> 0x1;
        return (bz * (0x10000 - bT) >> 0x10) + (bj * bT >> 0x10);
    }
    static['HN'](bz, bj) {
        return ((this['ou'](bz - 0x1, bj - 0x1) + this['ou'](bz + 0x1, bj - 0x1) + this['ou'](bz - 0x1, bj + 0x1) + this['ou'](bz + 0x1, bj + 0x1)) / 0x10 | 0x0) + ((this['ou'](bz - 0x1, bj) + this['ou'](bz + 0x1, bj) + this['ou'](bz, bj - 0x1) + this['ou'](bz, bj + 0x1)) / 0x8 | 0x0) + (this['ou'](bz, bj) / 0x4 | 0x0);
    }
    static['ou'](bz, bj) {
        let ba = bz + 0x39 * bj,
            bq = BigInt(ba << 0xd ^ ba);
        return 0xff & Number((bq * (bq * bq * 0x3d73n + 0xc0ae5n) + 0x5208dd0dn & 0x7fffffffn) >> 0x13n);
    }
    static['QC'](bz, bj, ba, bq, bT, bI, bJ, bV, xG, xg, xu) {
        const Fn = uh;
        let xM = bT[xu][bj][ba],
            xF = bT[xu][bj + 0x1][ba],
            xO = bT[xu][bj + 0x1][ba + 0x1],
            xD = bT[xu][bj][ba + 0x1],
            xC = xM + xF + xO + xD >> 0x2,
            xy = XS[Fn(0x321)](bV),
            xz = bj + (ba << 0x7) + (bV << 0xe) + 0x40000000 | 0x0;
        xy['Rb'] || (xz += -0x80000000), xz |= 0x0;
        let xj = (xg << 0x6) + xG << 0x18 >> 0x18;
        if (xG === kr['QU']['id']) bq?.['H0'](xy['t2'](kr['QU']['id'], xg, xM, xF, xO, xD, -0x1), bz, bj, ba, xC, xz, xj), xy['Rg'] && xy['Rb'] && bJ?.['QO'](bj, ba), -0x1 !== xy['RO'] && bI['B'](new xo(bV, bz, 0x3, bj, ba, Xi['EI'][xy['RO']], !0x0));
        else {
            if (xG === kr['Qf']['id'] || xG === kr['Qe']['id']) {
                let xa = xy['t2'](kr['Qf']['id'], xg, xM, xF, xO, xD, -0x1);
                if (xa) {
                    let xq, xT, xI = 0x0;
                    xG === kr['Qe']['id'] && (xI += 0x100), 0x1 === xg || 0x3 === xg ? (xq = xy[Fn(0x2ea)], xT = xy[Fn(0x1a2)]) : (xq = xy[Fn(0x1a2)], xT = xy[Fn(0x2ea)]), bq?.['QC'](bz, bj, ba, xC, xa, null, xz, xj, xq, xT, xI);
                }
                xy['Rg'] && bJ?.['QC'](bj, ba, xy[Fn(0x1a2)], xy[Fn(0x2ea)], xg, xy['Ru']), -0x1 !== xy['RO'] && bI['B'](new xo(bV, bz, 0x2, bj, ba, Xi['EI'][xy['RO']], !0x0));
            } else {
                if (xG >= kr['QA']['id']) bq?.['QC'](bz, bj, ba, xC, xy['t2'](xG, xg, xM, xF, xO, xD, -0x1), null, xz, xj, 0x1, 0x1, 0x0), xy['Rg'] && bJ?.['QC'](bj, ba, xy[Fn(0x1a2)], xy['length'], xg, xy['Ru']), -0x1 !== xy['RO'] && bI['B'](new xo(bV, bz, 0x2, bj, ba, Xi['EI'][xy['RO']], !0x0));
                else {
                    if (xG === kr['Qp']['id']) bq?.['Qa'](bz, bj, ba, xC, xQ['Hr'][xg], 0x0, xy['t2'](kr['Qp']['id'], xg, xM, xF, xO, xD, -0x1), null, xz, xj), xy['Rg'] && bJ?.['Qa'](bj, ba, xG, xg, xy['Ru']), -0x1 !== xy['RO'] && bI['B'](new xo(bV, bz, 0x0, bj, ba, Xi['EI'][xy['RO']], !0x0));
                    else {
                        if (xG === kr['Qc']['id']) bq?.['Qa'](bz, bj, ba, xC, xQ['HP'][xg], 0x0, xy['t2'](kr['Qc']['id'], xg, xM, xF, xO, xD, -0x1), null, xz, xj), xy['Rg'] && bJ?.['Qa'](bj, ba, xG, xg, xy['Ru']), -0x1 !== xy['RO'] && bI['B'](new xo(bV, bz, 0x0, bj, ba, Xi['EI'][xy['RO']], !0x0));
                        else {
                            if (xG === kr['QN']['id']) {
                                let xJ = xg + 0x1 & 0x3;
                                bq?.['Qa'](bz, bj, ba, xC, xQ['Hr'][xg], xQ['Hr'][xJ], xy['t2'](kr['QN']['id'], xg + 0x4, xM, xF, xO, xD, -0x1), xy['t2'](kr['QN']['id'], xJ, xM, xF, xO, xD, -0x1), xz, xj), xy['Rg'] && bJ?.['Qa'](bj, ba, xG, xg, xy['Ru']), -0x1 !== xy['RO'] && bI['B'](new xo(bV, bz, 0x0, bj, ba, Xi['EI'][xy['RO']], !0x0));
                            } else {
                                if (xG === kr['QR']['id']) bq?.['Qa'](bz, bj, ba, xC, xQ['HP'][xg], 0x0, xy['t2'](kr['QR']['id'], xg, xM, xF, xO, xD, -0x1), null, xz, xj), xy['Rg'] && bJ?.['Qa'](bj, ba, xG, xg, xy['Ru']), -0x1 !== xy['RO'] && bI['B'](new xo(bV, bz, 0x0, bj, ba, Xi['EI'][xy['RO']], !0x0));
                                else {
                                    if (xG === kr['QL']['id']) bq?.['QC'](bz, bj, ba, xC, xy['t2'](xG, xg, xM, xF, xO, xD, -0x1), null, xz, xj, 0x1, 0x1, 0x0), xy['Rg'] && bJ?.['QC'](bj, ba, xy['width'], xy[Fn(0x2ea)], xg, xy['Ru']), -0x1 !== xy['RO'] && bI['B'](new xo(bV, bz, 0x2, bj, ba, Xi['EI'][xy['RO']], !0x0));
                                    else {
                                        if (xG === kr['Qm']['id']) bq?.['re'](bz, bj, ba, xC, 0x0, 0x0, xz, xy['t2'](kr['Qm']['id'], 0x0, xM, xF, xO, xD, -0x1), xj, 0x200 * xg, xQ['Hr'][xg]), -0x1 !== xy['RO'] && bI['B'](new xo(bV, bz, 0x1, bj, ba, Xi['EI'][xy['RO']], !0x0));
                                        else {
                                            if (xG === kr['Qv']['id']) {
                                                let xV = 0x10;
                                                if (bq) {
                                                    let xW = bq['rq'](bz, bj, ba);
                                                    xW > 0x0 && (xV = XS['get'](xW >> 0xe & 0x7fff)['RC']);
                                                }
                                                bq?.['re'](bz, bj, ba, xC, xQ['Hc'][xg] * xV, xQ['HH'][xg] * xV, xz, xy['t2'](kr['Qm']['id'], 0x0, xM, xF, xO, xD, -0x1), xj, 0x200 * xg, xQ['Hr'][xg]), -0x1 !== xy['RO'] && bI['B'](new xo(bV, bz, 0x1, bj, ba, Xi['EI'][xy['RO']], !0x0));
                                            } else xG === kr['Qt']['id'] ? (bq?.['re'](bz, bj, ba, xC, 0x0, 0x0, xz, xy['t2'](kr['Qm']['id'], 0x0, xM, xF, xO, xD, -0x1), xj, xg, 0x100), -0x1 !== xy['RO'] && bI['B'](new xo(bV, bz, 0x1, bj, ba, Xi['EI'][xy['RO']], !0x0))) : xG === kr['Qn']['id'] ? (bq?.['re'](bz, bj, ba, xC, 0x0, 0x0, xz, xy['t2'](kr['Qm']['id'], 0x0, xM, xF, xO, xD, -0x1), xj, xg, 0x200), -0x1 !== xy['RO'] && bI['B'](new xo(bV, bz, 0x1, bj, ba, Xi['EI'][xy['RO']], !0x0))) : xG === kr['Qs']['id'] && (bq?.['re'](bz, bj, ba, xC, 0x0, 0x0, xz, xy['t2'](kr['Qm']['id'], 0x0, xM, xF, xO, xD, -0x1), xj, xg, 0x300), -0x1 !== xy['RO'] && bI['B'](new xo(bV, bz, 0x1, bj, ba, Xi['EI'][xy['RO']], !0x0)));
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } ['Hn'];
    ['an'];
    ['c8'];
    ['HU'];
    ['Hm'];
    ['Hf'];
    ['HL'];
    ['He'];
    ['c7'];
    ['Hs'];
    ['HA'];
    ['Hb'];
    ['Hk'];
    ['HB'];
    ['HX'];
    ['Hx'];
    constructor(bz, bj, ba, bq) {
        this['c8'] = bz, this['c7'] = bj, this['Hf'] = ba, this['He'] = bq, this['HU'] = new kw(0x4, bz, bj), this['an'] = new kw(0x4, bz, bj), this['Hm'] = new kw(0x4, bz, bj), this['HL'] = new kw(0x4, bz, bj), this['Hx'] = new kZ(0x4, bz + 0x1, bj + 0x1), this['Hn'] = new kw(0x4, bz + 0x1, bj + 0x1), this['Hs'] = new kd(bz + 0x1, bj + 0x1), this['Hb'] = new Int32Array(bj), this['HA'] = new Int32Array(bj), this['Hk'] = new Int32Array(bj), this['HX'] = new Int32Array(bj), this['HB'] = new Int32Array(bj);
    } ['HG'](bz, bj) {
        const FU = uh;
        for (let ba = 0x0; ba < 0x4; ba++)
            for (let bq = 0x0; bq < 0x68; bq++)
                for (let bT = 0x0; bT < 0x68; bT++)
                    if (!(0x1 & ~this['He'][ba][bq][bT])) {
                        let bI = ba;
                        0x2 & ~this['He'][0x1][bq][bT] || bI--, bI >= 0x0 && bj[bI]?.['QO'](bq, bT);
                    } xQ['HR'] += (0x5 * Math['random']() | 0x0) - 0x2, xQ['HR'] < -0x8 ? xQ['HR'] = -0x8 : xQ['HR'] > 0x8 && (xQ['HR'] = 0x8), xQ['Ht'] += (0x5 * Math[FU(0x291)]() | 0x0) - 0x2, xQ['Ht'] < -0x10 ? xQ['Ht'] = -0x10 : xQ['Ht'] > 0x10 && (xQ['Ht'] = 0x10);
        for (let bJ = 0x0; bJ < 0x4; bJ++) {
            let bV = this['Hn'][bJ],
                xG = 0x300 * (0x0 | Math[FU(0x1d3)](0x13ec)) >> 0x8;
            for (let xg = 0x1; xg < this['c7'] - 0x1; xg++)
                for (let xu = 0x1; xu < this['c8'] - 0x1; xu++) {
                    let xM = this['Hf'][bJ][xu + 0x1][xg] - this['Hf'][bJ][xu - 0x1][xg],
                        xF = this['Hf'][bJ][xu][xg + 0x1] - this['Hf'][bJ][xu][xg - 0x1],
                        xO = 0x0 | Math[FU(0x1d3)](xM * xM + xF * xF + 0x10000),
                        xD = 0x60 + ((-0x32 * ((xM << 0x8) / xO | 0x0) + -0xa * (0x10000 / xO | 0x0) + -0x32 * ((xF << 0x8) / xO | 0x0)) / xG | 0x0),
                        xC = (bV[xu - 0x1][xg] >> 0x2) + (bV[xu + 0x1][xg] >> 0x3) + (bV[xu][xg - 0x1] >> 0x2) + (bV[xu][xg + 0x1] >> 0x3) + (bV[xu][xg] >> 0x1);
                    this['Hs'][xu][xg] = xD - xC;
                }
            for (let xy = 0x0; xy < this['c7']; xy++) this['Hb'][xy] = 0x0, this['HA'][xy] = 0x0, this['Hk'][xy] = 0x0, this['HX'][xy] = 0x0, this['HB'][xy] = 0x0;
            for (let xz = -0x5; xz < this['c8'] + 0x5; xz++) {
                for (let xj = 0x0; xj < this['c7']; xj++) {
                    let xa, xq = xz + 0x5;
                    if (xq >= 0x0 && xq < this['c8']) {
                        let xI = 0xff & this['HU'][bJ][xq][xj];
                        if (xI > 0x0) {
                            let xJ = Xz['EI'][xI - 0x1];
                            this['Hb'][xj] += xJ['d4'], this['HA'][xj] += xJ['d7'], this['Hk'][xj] += xJ['d0'], this['HX'][xj] += xJ['d5'], xa = this['HB'][xj]++;
                        }
                    }
                    let xT = xz - 0x5;
                    if (xT >= 0x0 && xT < this['c8']) {
                        let xV = 0xff & this['HU'][bJ][xT][xj];
                        if (xV > 0x0) {
                            let xW = Xz['EI'][xV - 0x1];
                            this['Hb'][xj] -= xW['d4'], this['HA'][xj] -= xW['d7'], this['Hk'][xj] -= xW['d0'], this['HX'][xj] -= xW['d5'], xa = this['HB'][xj]--;
                        }
                    }
                }
                if (xz >= 0x1 && xz < this['c8'] - 0x1) {
                    let xS = 0x0,
                        xi = 0x0,
                        G0 = 0x0,
                        G1 = 0x0,
                        G2 = 0x0;
                    for (let G3 = -0x5; G3 < this['c7'] + 0x5; G3++) {
                        let G4 = G3 + 0x5;
                        G4 >= 0x0 && G4 < this['c7'] && (xS += this['Hb'][G4], xi += this['HA'][G4], G0 += this['Hk'][G4], G1 += this['HX'][G4], G2 += this['HB'][G4]);
                        let G5 = G3 - 0x5;
                        if (G5 >= 0x0 && G5 < this['c7'] && (xS -= this['Hb'][G5], xi -= this['HA'][G5], G0 -= this['Hk'][G5], G1 -= this['HX'][G5], G2 -= this['HB'][G5]), G3 >= 0x1 && G3 < this['c7'] - 0x1 && (!xQ['ZT'] || !(0x10 & this['He'][bJ][xz][G3]) && this['Hg'](bJ, xz, G3) === xQ['Hp'])) {
                            let G6 = 0xff & this['HU'][bJ][xz][G3],
                                G7 = 0xff & this['an'][bJ][xz][G3];
                            if (G6 > 0x0 || G7 > 0x0) {
                                let G8 = this['Hf'][bJ][xz][G3],
                                    G9 = this['Hf'][bJ][xz + 0x1][G3],
                                    Go = this['Hf'][bJ][xz + 0x1][G3 + 0x1],
                                    GQ = this['Hf'][bJ][xz][G3 + 0x1],
                                    GZ = this['Hs'][xz][G3],
                                    GY = this['Hs'][xz + 0x1][G3],
                                    GE = this['Hs'][xz + 0x1][G3 + 0x1],
                                    Gd = this['Hs'][xz][G3 + 0x1],
                                    Gw = -0x1,
                                    GR = -0x1;
                                if (G6 > 0x0) {
                                    let Gc = 0x100 * xS / G1 | 0x0,
                                        Gr = xi / G2 | 0x0,
                                        GH = G0 / G2 | 0x0;
                                    Gw = Xz['EV'](Gc, Gr, GH);
                                    let GP = Gc + xQ['HR'] & 0xff;
                                    GH += xQ['Ht'], GH < 0x0 ? GH = 0x0 : GH > 0xff && (GH = 0xff), GR = Xz['EV'](GP, Gr, GH);
                                }
                                if (bJ > 0x0) {
                                    let Gp = 0x0 !== G6 || 0x0 === this['Hm'][bJ][xz][G3];
                                    G7 > 0x0 && !Xz['EI'][G7 - 0x1]['d2'] && (Gp = !0x1), Gp && G8 === G9 && G8 === Go && G8 === GQ && (this['Hx'][bJ][xz][G3] |= 0x924);
                                }
                                let Gt = 0x0;
                                if (-0x1 !== Gw && (Gt = XO['Y2'][Xz['EW'](GR, 0x60)]), 0x0 === G7) bz?.['H8'](bJ, xz, G3, 0x0, 0x0, -0x1, G8, G9, Go, GQ, Xz['EW'](Gw, GZ), Xz['EW'](Gw, GY), Xz['EW'](Gw, GE), Xz['EW'](Gw, Gd), 0x0, 0x0, 0x0, 0x0, Gt, 0x0);
                                else {
                                    let Gh, Gl, GK = this['Hm'][bJ][xz][G3] + 0x1,
                                        GN = this['HL'][bJ][xz][G3],
                                        Gv = Xz['EI'][G7 - 0x1],
                                        Gn = Gv['Ei'];
                                    Gn >= 0x0 ? (Gl = XO['Yt'](Gn), Gh = -0x1) : 0xff00ff === Gv['d1'] ? (Gl = 0x0, Gh = -0x2, Gn = -0x1) : (Gh = Xz['EV'](Gv['d8'], Gv['d7'], Gv['d0']), Gl = XO['Y2'][Xz['ES'](Gv['d6'], 0x60)]), bz?.['H8'](bJ, xz, G3, GK, GN, Gn, G8, G9, Go, GQ, Xz['EW'](Gw, GZ), Xz['EW'](Gw, GY), Xz['EW'](Gw, GE), Xz['EW'](Gw, Gd), Xz['ES'](Gh, GZ), Xz['ES'](Gh, GY), Xz['ES'](Gh, GE), Xz['ES'](Gh, Gd), Gt, Gl);
                                }
                            }
                        }
                    }
                }
            }
            for (let GU = 0x1; GU < this['c7'] - 0x1; GU++)
                for (let Gm = 0x1; Gm < this['c8'] - 0x1; Gm++) bz?.['H1'](bJ, Gm, GU, this['Hg'](bJ, Gm, GU));
        }
        xQ['Hh'] || bz?.['rn'](0x40, 0x300, -0x32, -0xa, -0x32);
        for (let Gf = 0x0; Gf < this['c8']; Gf++)
            for (let GL = 0x0; GL < this['c7']; GL++) 0x2 & ~this['He'][0x1][Gf][GL] || bz?.['rX'](Gf, GL);
        if (!xQ['Hh']) {
            let Ge = 0x1,
                Gs = 0x2,
                GA = 0x4;
            for (let Gb = 0x0; Gb < 0x4; Gb++) {
                Gb > 0x0 && (Ge <<= 0x3, Gs <<= 0x3, GA <<= 0x3);
                for (let Gk = 0x0; Gk <= Gb; Gk++)
                    for (let GB = 0x0; GB <= this['c7']; GB++)
                        for (let GX = 0x0; GX <= this['c8']; GX++) {
                            if (this['Hx'][Gk][GX][GB] & Ge) {
                                let Gx = GB,
                                    GG = GB,
                                    Gg = Gk,
                                    Gu = Gk;
                                for (; Gx > 0x0 && this['Hx'][Gk][GX][Gx - 0x1] & Ge;) Gx--;
                                for (; GG < this['c7'] && this['Hx'][Gk][GX][GG + 0x1] & Ge;) GG++;
                                g8: for (; Gg > 0x0;) {
                                    for (let GM = Gx; GM <= GG; GM++)
                                        if (!(this['Hx'][Gg - 0x1][GX][GM] & Ge)) break g8;
                                    Gg--;
                                }
                                g9: for (; Gu < Gb;) {
                                    for (let GF = Gx; GF <= GG; GF++)
                                        if (!(this['Hx'][Gu + 0x1][GX][GF] & Ge)) break g9;
                                    Gu++;
                                }
                                if ((Gu + 0x1 - Gg) * (GG + 0x1 - Gx) >= 0x8) {
                                    let GO = this['Hf'][Gu][GX][Gx] - 0xf0,
                                        GD = this['Hf'][Gg][GX][Gx];
                                    x9['rO'](Gb, 0x1, 0x80 * GX, GO, 0x80 * Gx, 0x80 * GX, GD, 0x80 * GG + 0x80);
                                    for (let GC = Gg; GC <= Gu; GC++)
                                        for (let Gy = Gx; Gy <= GG; Gy++) this['Hx'][GC][GX][Gy] &= ~Ge;
                                }
                            }
                            if (this['Hx'][Gk][GX][GB] & Gs) {
                                let Gz = GX,
                                    Gj = GX,
                                    Ga = Gk,
                                    Gq = Gk;
                                for (; Gz > 0x0 && this['Hx'][Gk][Gz - 0x1][GB] & Gs;) Gz--;
                                for (; Gj < this['c8'] && this['Hx'][Gk][Gj + 0x1][GB] & Gs;) Gj++;
                                go: for (; Ga > 0x0;) {
                                    for (let GT = Gz; GT <= Gj; GT++)
                                        if (!(this['Hx'][Ga - 0x1][GT][GB] & Gs)) break go;
                                    Ga--;
                                }
                                gQ: for (; Gq < Gb;) {
                                    for (let GI = Gz; GI <= Gj; GI++)
                                        if (!(this['Hx'][Gq + 0x1][GI][GB] & Gs)) break gQ;
                                    Gq++;
                                }
                                if ((Gq + 0x1 - Ga) * (Gj + 0x1 - Gz) >= 0x8) {
                                    let GJ = this['Hf'][Gq][Gz][GB] - 0xf0,
                                        GV = this['Hf'][Ga][Gz][GB];
                                    x9['rO'](Gb, 0x2, 0x80 * Gz, GJ, 0x80 * GB, 0x80 * Gj + 0x80, GV, 0x80 * GB);
                                    for (let GW = Ga; GW <= Gq; GW++)
                                        for (let GS = Gz; GS <= Gj; GS++) this['Hx'][GW][GS][GB] &= ~Gs;
                                }
                            }
                            if (this['Hx'][Gk][GX][GB] & GA) {
                                let Gi = GX,
                                    g0 = GX,
                                    g1 = GB,
                                    g2 = GB;
                                for (; g1 > 0x0 && this['Hx'][Gk][GX][g1 - 0x1] & GA;) g1--;
                                for (; g2 < this['c7'] && this['Hx'][Gk][GX][g2 + 0x1] & GA;) g2++;
                                gZ: for (; Gi > 0x0;) {
                                    for (let g3 = g1; g3 <= g2; g3++)
                                        if (!(this['Hx'][Gk][Gi - 0x1][g3] & GA)) break gZ;
                                    Gi--;
                                }
                                gY: for (; g0 < this['c8'];) {
                                    for (let g4 = g1; g4 <= g2; g4++)
                                        if (!(this['Hx'][Gk][g0 + 0x1][g4] & GA)) break gY;
                                    g0++;
                                }
                                if ((g0 + 0x1 - Gi) * (g2 + 0x1 - g1) >= 0x4) {
                                    let g5 = this['Hf'][Gk][Gi][g1];
                                    x9['rO'](Gb, 0x4, 0x80 * Gi, g5, 0x80 * g1, 0x80 * g0 + 0x80, g5, 0x80 * g2 + 0x80);
                                    for (let g6 = Gi; g6 <= g0; g6++)
                                        for (let g7 = g1; g7 <= g2; g7++) this['Hx'][Gk][g6][g7] &= ~GA;
                                }
                            }
                        }
            }
        }
    } ['Hu'](bz, bj, ba, bq) {
        const Fm = uh;
        let bT = 0x0;
        for (let bI = 0x0; bI < Xz['EJ']; bI++)
            if (Fm(0x168) === Xz['EI'][bI]['Ea']?.[Fm(0x19a)]()) {
                bT = bI + 0x1 << 0x18 >> 0x18;
                break;
            } for (let bJ = bz; bJ < bz + ba; bJ++)
            for (let bV = bj; bV < bj + bq; bV++)
                if (bV >= 0x0 && bV < this['c8'] && bJ >= 0x0 && bJ < this['c7']) {
                    this['an'][0x0][bV][bJ] = bT;
                    for (let xG = 0x0; xG < 0x4; xG++) this['Hf'][xG][bV][bJ] = 0x0, this['He'][xG][bV][bJ] = 0x0;
                }
    } ['HM'](bz, bj, ba, bq, bT) {
        let bI = new k8(bT);
        for (let bJ = 0x0; bJ < 0x4; bJ++)
            for (let bV = 0x0; bV < 0x40; bV++)
                for (let xG = 0x0; xG < 0x40; xG++) {
                    let xg, xu = bV + ba,
                        xM = xG + bq;
                    if (xu >= 0x0 && xu < 0x68 && xM >= 0x0 && xM < 0x68)
                        for (this['He'][bJ][xu][xM] = 0x0;;) {
                            if (xg = bI['m'](), 0x0 === xg) {
                                0x0 === bJ ? this['Hf'][0x0][xu][xM] = 0x8 * -xQ['Hl'](xu + bz + 0xe3b7b, xM + 0x87cce + bj) : this['Hf'][bJ][xu][xM] = this['Hf'][bJ - 0x1][xu][xM] - 0xf0;
                                break;
                            }
                            if (0x1 === xg) {
                                let xF = bI['m']();
                                0x1 === xF && (xF = 0x0), 0x0 === bJ ? this['Hf'][0x0][xu][xM] = 0x8 * -xF : this['Hf'][bJ][xu][xM] = this['Hf'][bJ - 0x1][xu][xM] - 0x8 * xF;
                                break;
                            }
                            xg <= 0x31 ? (this['an'][bJ][xu][xM] = bI['oo'](), this['Hm'][bJ][xu][xM] = (xg - 0x2) / 0x4 << 0x18 >> 0x18, this['HL'][bJ][xu][xM] = (xg - 0x2 & 0x3) << 0x18 >> 0x18) : xg <= 0x51 ? this['He'][bJ][xu][xM] = xg - 0x31 << 0x18 >> 0x18 : this['HU'][bJ][xu][xM] = xg - 0x51 << 0x18 >> 0x18;
                        } else
                            for (; xg = bI['m'](), 0x0 !== xg;) {
                                if (0x1 === xg) {
                                    bI['m']();
                                    break;
                                }
                                xg <= 0x31 && bI['m']();
                            }
                }
    } ['HF'](bz, bj, ba, bq, bT, bI) {
        let bJ = new k8(bq),
            bV = -0x1;
        for (;;) {
            let xG = bJ['ol']();
            if (0x0 === xG) return;
            bV += xG;
            let xg = 0x0;
            for (;;) {
                let xu = bJ['ol']();
                if (0x0 === xu) break;
                xg += xu - 0x1;
                let xM = 0x3f & xg,
                    xF = xg >> 0x6 & 0x3f,
                    xO = xg >> 0xc,
                    xD = bJ['m'](),
                    xC = xD >> 0x2,
                    xy = 0x3 & xD,
                    xz = xF + bT,
                    xj = xM + bI;
                if (xz > 0x0 && xj > 0x0 && xz < 0x67 && xj < 0x67) {
                    let xa = xO;
                    0x2 & ~this['He'][0x1][xz][xj] || (xa = xO - 0x1);
                    let xq = null;
                    xa >= 0x0 && (xq = ba[xa]), this['QC'](xO, xz, xj, bz, bj, xq, bV, xC, xy);
                }
            }
        }
    } ['QC'](bz, bj, ba, bq, bT, bI, bJ, bV, xG) {
        const Ff = uh;
        if (xQ['ZT']) {
            if (0x10 & this['He'][bz][bj][ba]) return;
            if (this['Hg'](bz, bj, ba) !== xQ['Hp']) return;
        }
        let xg = this['Hf'][bz][bj][ba],
            xu = this['Hf'][bz][bj + 0x1][ba],
            xM = this['Hf'][bz][bj + 0x1][ba + 0x1],
            xF = this['Hf'][bz][bj][ba + 0x1],
            xO = xg + xu + xM + xF >> 0x2,
            xD = XS['get'](bJ),
            xC = bj + (ba << 0x7) + (bJ << 0xe) + 0x40000000 | 0x0;
        xD['Rb'] || (xC += -0x80000000), xC |= 0x0;
        let xy = (xG << 0x6) + bV << 0x18 >> 0x18;
        if (bV === kr['QU']['id'])(!xQ['ZT'] || xD['Rb'] || xD['t1']) && (bq?.['H0'](xD['t2'](kr['QU']['id'], xG, xg, xu, xM, xF, -0x1), bz, bj, ba, xO, xC, xy), xD['Rg'] && xD['Rb'] && bI?.['QO'](bj, ba), -0x1 !== xD['RO'] && bT['B'](new xo(bJ, bz, 0x3, bj, ba, Xi['EI'][xD['RO']], !0x0)));
        else {
            if (bV === kr['Qf']['id'] || bV === kr['Qe']['id']) {
                let xz = xD['t2'](kr['Qf']['id'], xG, xg, xu, xM, xF, -0x1);
                if (xz) {
                    let xj, xa, xq = 0x0;
                    if (bV === kr['Qe']['id'] && (xq += 0x100), 0x1 === xG || 0x3 === xG ? (xj = xD['length'], xa = xD['width']) : (xj = xD[Ff(0x1a2)], xa = xD[Ff(0x2ea)]), bq?.['QC'](bz, bj, ba, xO, xz, null, xC, xy, xj, xa, xq) && xD['RT']) {
                        for (let xT = 0x0; xT <= xj; xT++)
                            for (let xI = 0x0; xI <= xa; xI++) {
                                let xJ = xz['wf'] / 0x4 | 0x0;
                                xJ > 0x1e && (xJ = 0x1e), xJ > this['Hn'][bz][bj + xT][ba + xI] && (this['Hn'][bz][bj + xT][ba + xI] = xJ << 0x18 >> 0x18);
                            }
                    }
                }
                xD['Rg'] && bI?.['QC'](bj, ba, xD['width'], xD[Ff(0x2ea)], xG, xD['Ru']), -0x1 !== xD['RO'] && bT['B'](new xo(bJ, bz, 0x2, bj, ba, Xi['EI'][xD['RO']], !0x0));
            } else {
                if (bV >= kr['QA']['id']) bq?.['QC'](bz, bj, ba, xO, xD['t2'](bV, xG, xg, xu, xM, xF, -0x1), null, xC, xy, 0x1, 0x1, 0x0), bV >= kr['QA']['id'] && bV <= kr['QH']['id'] && bV !== kr['Qk']['id'] && bz > 0x0 && (this['Hx'][bz][bj][ba] |= 0x924), xD['Rg'] && bI?.['QC'](bj, ba, xD[Ff(0x1a2)], xD['length'], xG, xD['Ru']), -0x1 !== xD['RO'] && bT['B'](new xo(bJ, bz, 0x2, bj, ba, Xi['EI'][xD['RO']], !0x0));
                else {
                    if (bV === kr['Qp']['id']) bq?.['Qa'](bz, bj, ba, xO, xQ['Hr'][xG], 0x0, xD['t2'](kr['Qp']['id'], xG, xg, xu, xM, xF, -0x1), null, xC, xy), 0x0 === xG ? (xD['RT'] && (this['Hn'][bz][bj][ba] = 0x32, this['Hn'][bz][bj][ba + 0x1] = 0x32), xD['d2'] && (this['Hx'][bz][bj][ba] |= 0x249)) : 0x1 === xG ? (xD['RT'] && (this['Hn'][bz][bj][ba + 0x1] = 0x32, this['Hn'][bz][bj + 0x1][ba + 0x1] = 0x32), xD['d2'] && (this['Hx'][bz][bj][ba + 0x1] |= 0x492)) : 0x2 === xG ? (xD['RT'] && (this['Hn'][bz][bj + 0x1][ba] = 0x32, this['Hn'][bz][bj + 0x1][ba + 0x1] = 0x32), xD['d2'] && (this['Hx'][bz][bj + 0x1][ba] |= 0x249)) : 0x3 === xG && (xD['RT'] && (this['Hn'][bz][bj][ba] = 0x32, this['Hn'][bz][bj + 0x1][ba] = 0x32), xD['d2'] && (this['Hx'][bz][bj][ba] |= 0x492)), xD['Rg'] && bI?.['Qa'](bj, ba, bV, xG, xD['Ru']), -0x1 !== xD['RO'] && bT['B'](new xo(bJ, bz, 0x0, bj, ba, Xi['EI'][xD['RO']], !0x0)), 0x10 !== xD['RC'] && bq?.['rh'](bz, bj, ba, xD['RC']);
                    else {
                        if (bV === kr['Qc']['id']) bq?.['Qa'](bz, bj, ba, xO, xQ['HP'][xG], 0x0, xD['t2'](kr['Qc']['id'], xG, xg, xu, xM, xF, -0x1), null, xC, xy), xD['RT'] && (0x0 === xG ? this['Hn'][bz][bj][ba + 0x1] = 0x32 : 0x1 === xG ? this['Hn'][bz][bj + 0x1][ba + 0x1] = 0x32 : 0x2 === xG ? this['Hn'][bz][bj + 0x1][ba] = 0x32 : 0x3 === xG && (this['Hn'][bz][bj][ba] = 0x32)), xD['Rg'] && bI?.['Qa'](bj, ba, bV, xG, xD['Ru']), -0x1 !== xD['RO'] && bT['B'](new xo(bJ, bz, 0x0, bj, ba, Xi['EI'][xD['RO']], !0x0));
                        else {
                            if (bV === kr['QN']['id']) {
                                let xV = xG + 0x1 & 0x3;
                                bq?.['Qa'](bz, bj, ba, xO, xQ['Hr'][xG], xQ['Hr'][xV], xD['t2'](kr['QN']['id'], xG + 0x4, xg, xu, xM, xF, -0x1), xD['t2'](kr['QN']['id'], xV, xg, xu, xM, xF, -0x1), xC, xy), xD['d2'] && (0x0 === xG ? (this['Hx'][bz][bj][ba] |= 0x109, this['Hx'][bz][bj][ba + 0x1] |= 0x492) : 0x1 === xG ? (this['Hx'][bz][bj][ba + 0x1] |= 0x492, this['Hx'][bz][bj + 0x1][ba] |= 0x249) : 0x2 === xG ? (this['Hx'][bz][bj + 0x1][ba] |= 0x249, this['Hx'][bz][bj][ba] |= 0x492) : 0x3 === xG && (this['Hx'][bz][bj][ba] |= 0x492, this['Hx'][bz][bj][ba] |= 0x249)), xD['Rg'] && bI?.['Qa'](bj, ba, bV, xG, xD['Ru']), -0x1 !== xD['RO'] && bT['B'](new xo(bJ, bz, 0x0, bj, ba, Xi['EI'][xD['RO']], !0x0)), 0x10 !== xD['RC'] && bq?.['rh'](bz, bj, ba, xD['RC']);
                            } else {
                                if (bV === kr['QR']['id']) bq?.['Qa'](bz, bj, ba, xO, xQ['HP'][xG], 0x0, xD['t2'](kr['QR']['id'], xG, xg, xu, xM, xF, -0x1), null, xC, xy), xD['RT'] && (0x0 === xG ? this['Hn'][bz][bj][ba + 0x1] = 0x32 : 0x1 === xG ? this['Hn'][bz][bj + 0x1][ba + 0x1] = 0x32 : 0x2 === xG ? this['Hn'][bz][bj + 0x1][ba] = 0x32 : 0x3 === xG && (this['Hn'][bz][bj][ba] = 0x32)), xD['Rg'] && bI?.['Qa'](bj, ba, bV, xG, xD['Ru']), -0x1 !== xD['RO'] && bT['B'](new xo(bJ, bz, 0x0, bj, ba, Xi['EI'][xD['RO']], !0x0));
                                else {
                                    if (bV === kr['QL']['id']) bq?.['QC'](bz, bj, ba, xO, xD['t2'](bV, xG, xg, xu, xM, xF, -0x1), null, xC, xy, 0x1, 0x1, 0x0), xD['Rg'] && bI?.['QC'](bj, ba, xD[Ff(0x1a2)], xD['length'], xG, xD['Ru']), -0x1 !== xD['RO'] && bT['B'](new xo(bJ, bz, 0x2, bj, ba, Xi['EI'][xD['RO']], !0x0));
                                    else {
                                        if (bV === kr['Qm']['id']) bq?.['re'](bz, bj, ba, xO, 0x0, 0x0, xC, xD['t2'](kr['Qm']['id'], 0x0, xg, xu, xM, xF, -0x1), xy, 0x200 * xG, xQ['Hr'][xG]), -0x1 !== xD['RO'] && bT['B'](new xo(bJ, bz, 0x1, bj, ba, Xi['EI'][xD['RO']], !0x0));
                                        else {
                                            if (bV === kr['Qv']['id']) {
                                                let xW = 0x10;
                                                if (bq) {
                                                    let xS = bq['rq'](bz, bj, ba);
                                                    xS > 0x0 && (xW = XS['get'](xS >> 0xe & 0x7fff)['RC']);
                                                }
                                                bq?.['re'](bz, bj, ba, xO, xQ['Hc'][xG] * xW, xQ['HH'][xG] * xW, xC, xD['t2'](kr['Qm']['id'], 0x0, xg, xu, xM, xF, -0x1), xy, 0x200 * xG, xQ['Hr'][xG]), -0x1 !== xD['RO'] && bT['B'](new xo(bJ, bz, 0x1, bj, ba, Xi['EI'][xD['RO']], !0x0));
                                            } else bV === kr['Qt']['id'] ? (bq?.['re'](bz, bj, ba, xO, 0x0, 0x0, xC, xD['t2'](kr['Qm']['id'], 0x0, xg, xu, xM, xF, -0x1), xy, xG, 0x100), -0x1 !== xD['RO'] && bT['B'](new xo(bJ, bz, 0x1, bj, ba, Xi['EI'][xD['RO']], !0x0))) : bV === kr['Qn']['id'] ? (bq?.['re'](bz, bj, ba, xO, 0x0, 0x0, xC, xD['t2'](kr['Qm']['id'], 0x0, xg, xu, xM, xF, -0x1), xy, xG, 0x200), -0x1 !== xD['RO'] && bT['B'](new xo(bJ, bz, 0x1, bj, ba, Xi['EI'][xD['RO']], !0x0))) : bV === kr['Qs']['id'] && (bq?.['re'](bz, bj, ba, xO, 0x0, 0x0, xC, xD['t2'](kr['Qm']['id'], 0x0, xg, xu, xM, xF, -0x1), xy, xG, 0x300), -0x1 !== xD['RO'] && bT['B'](new xo(bJ, bz, 0x1, bj, ba, Xi['EI'][xD['RO']], !0x0)));
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } ['Hg'](bz, bj, ba) {
        return 0x8 & this['He'][bz][bj][ba] ? 0x0 : bz <= 0x0 || !(0x2 & this['He'][0x1][bj][ba]) ? bz : bz - 0x1;
    }
}
class xZ {
    static['HO'] = ['_', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    static['HD'](bz) {
        const FL = uh;
        let bj = bz[FL(0x202)](),
            ba = 0x0n;
        for (let bq = 0x0; bq < bj['length']; bq++) ba = 0x3dn * ba + BigInt(bj[FL(0x158)](bq)) - 0x20n, ba = ba + (ba >> 0x38n) & 0xffffffffffffffn;
        return ba;
    }
    static['HC'](bz) {
        const Fe = uh;
        if (0x0 === bz[Fe(0x2ea)]) return bz;
        let bj = [...bz];
        for (let ba = 0x0; ba < bj[Fe(0x2ea)]; ba++) '_' === bj[ba] && (bj[ba] = '\x20', ba + 0x1 < bj[Fe(0x2ea)] && bj[ba + 0x1] >= 'a' && bj[ba + 0x1] <= 'z' && (bj[ba + 0x1] = String[Fe(0x226)](bj[ba + 0x1][Fe(0x158)](0x0) + 0x41 - 0x61)));
        return bj[0x0] >= 'a' && bj[0x0] <= 'z' && (bj[0x0] = String[Fe(0x226)](bj[0x0][Fe(0x158)](0x0) + 0x41 - 0x61)), bj[Fe(0x1e1)]('');
    }
    static['Hy'](bz) {
        return (bz >> 0x18 & 0xff) + '.' + (bz >> 0x10 & 0xff) + '.' + (bz >> 0x8 & 0xff) + '.' + (0xff & bz);
    }
    static['Hj'](bz) {
        const Fs = uh;
        let bj = '';
        for (let ba = 0x0; ba < bz[Fs(0x2ea)]; ba++) bj += '*';
        return bj;
    }
    static['Ha'](bz) {
        const FA = uh;
        bz = bz['trim']();
        let bj = 0x0n;
        for (let ba = 0x0; ba < bz[FA(0x2ea)] && ba < 0xc; ba++) {
            let bq = bz[FA(0x158)](ba);
            bj *= 0x25n, bq >= 0x41 && bq <= 0x5a ? bj += BigInt(bq + 0x1 - 0x41) : bq >= 0x61 && bq <= 0x7a ? bj += BigInt(bq + 0x1 - 0x61) : bq >= 0x30 && bq <= 0x39 && (bj += BigInt(bq + 0x1b - 0x30));
        }
        return bj;
    }
    static['Hq'](bz) {
        const Fb = uh;
        let bj = [...bz[Fb(0x19a)]()],
            ba = !0x0;
        for (let bq = 0x0; bq < bj['length']; bq++) {
            let bT = bj[bq];
            ba && bT >= 'a' && bT <= 'z' && (bj[bq] = bT[Fb(0x202)](), ba = !0x1), '.' !== bT && '!' !== bT || (ba = !0x0);
        }
        return bj[Fb(0x1e1)]('');
    }
    static['HT'](bz) {
        const Fk = uh;
        if (bz < 0x0n || bz >= 0x5b5b57f8a98a5dd1n) return 'invalid_name';
        if (bz % 0x25n === 0x0n) return Fk(0x2d0);
        let bj = 0x0,
            ba = Array(0xc);
        for (; 0x0n !== bz;) {
            let bq = bz;
            bz /= 0x25n, ba[0xb - bj++] = this['HO'][Number(bq - 0x25n * bz)];
        }
        return ba[Fk(0x297)](0xc - bj)['join']('');
    }
}
class xY extends k2 {}
class xE extends xY {
    ['HI'] = -0x1;
    ['HJ'] = 0x0;
    ['HV'] = 0x0;
    ['HW'] = -0x1;
    ['HS'] = 0x0;
    ['Hi'] = 0x0;
    ['P0'] = 0x0;
    ['P1'] = 0x0;
    ['x'] = 0x0;
    ['P2'] = new Int32Array(0xa);
    ['P3'] = 0x0;
    ['P4'] = 0x0;
    ['P5'] = new Int32Array(0xa);
    ['On'] = -0x1;
    ['P6'] = 0x0;
    ['P7'] = 0x0;
    ['P8'] = -0x1;
    ['P9'] = !0x1;
    ['Po'] = 0x0;
    ['PQ'] = -0x1;
    ['PZ'] = 0x0;
    ['PY'] = 0x0;
    ['Y1'] = 0x0;
    ['wL'] = 0x0;
    ['PE'] = 0x0;
    ['Pd'] = 0x0;
    ['z'] = 0x0;
    ['Pw'] = 0x0;
    ['PR'] = -0x1;
    ['cp'] = 0x0;
    ['Pc'] = new kY(0xa, !0x1);
    ['Pr'] = 0x0;
    ['PH'] = -0x1;
    ['PP'] = -0x3e8;
    ['Pp'] = -0x1;
    ['Ph'] = -0x1;
    ['Pl'] = 0x1;
    ['PK'] = 0x0;
    ['PN'] = -0x1;
    ['Pv'] = -0x1;
    ['Pn'] = 0x0;
    ['PU'] = 0x0;
    ['Pm'] = 0x0;
    ['Pf'] = -0x1;
    ['PL'] = -0x1;
    ['Pe'] = null;
    ['Ps'] = 0x0;
    ['PA'] = -0x1;
    ['Pb'] = 0x0;
    ['Pk'] = 0x0;
    ['PB'] = -0x1;
    ['PX'] = 0x0;
    ['Px'] = 0x64;
    ['PG'] = 0x0;
    ['Pg'] = 0x0;
    ['Pu'] = 0x0;
    ['PM'](bz, bj, ba) {
        if (-0x1 !== this['PA'] && Xi['EI'][this['PA']]['t7'] <= 0x1 && (this['PA'] = -0x1), !bz) {
            let bq = bj - this['P2'][0x0],
                bT = ba - this['P5'][0x0];
            if (bq >= -0x8 && bq <= 0x8 && bT >= -0x8 && bT <= 0x8) {
                this['Pw'] < 0x9 && this['Pw']++;
                for (let bI = this['Pw']; bI > 0x0; bI--) this['P2'][bI] = this['P2'][bI - 0x1], this['P5'][bI] = this['P5'][bI - 0x1], this['Pc'][bI] = this['Pc'][bI - 0x1];
                return this['P2'][0x0] = bj, this['P5'][0x0] = ba, void(this['Pc'][0x0] = !0x1);
            }
        }
        this['Pw'] = 0x0, this['Pr'] = 0x0, this['P2'][0x0] = bj, this['P5'][0x0] = ba, this['x'] = 0x80 * this['P2'][0x0] + 0x40 * this['Pl'], this['z'] = 0x80 * this['P5'][0x0] + 0x40 * this['Pl'];
    } ['PF'](bz, bj) {
        let ba = this['P2'][0x0],
            bq = this['P5'][0x0];
        0x0 === bj ? (ba--, bq++) : 0x1 === bj ? bq++ : 0x2 === bj ? (ba++, bq++) : 0x3 === bj ? ba-- : 0x4 === bj ? ba++ : 0x5 === bj ? (ba--, bq--) : 0x6 === bj ? bq-- : 0x7 === bj && (ba++, bq--), -0x1 !== this['PA'] && Xi['EI'][this['PA']]['t7'] <= 0x1 && (this['PA'] = -0x1), this['Pw'] < 0x9 && this['Pw']++;
        for (let bT = this['Pw']; bT > 0x0; bT--) this['P2'][bT] = this['P2'][bT - 0x1], this['P5'][bT] = this['P5'][bT - 0x1], this['Pc'][bT] = this['Pc'][bT - 0x1];
        this['P2'][0x0] = ba, this['P5'][0x0] = bq, this['Pc'][0x0] = bz;
    }
}
class xd extends Xy {
    static['EJ'] = 0x0;
    static['EI'] = [];
    static['PO'] = new Xq(0x1e);
    static['l'](bz) {
        const FB = uh;
        let bj = new k8(bz['Qw'](FB(0x2a5)));
        this['EJ'] = bj['oZ']();
        for (let ba = 0x0; ba < this['EJ']; ba++) this['EI'][ba] = new xd(ba)['ET'](bj);
    } ['Rw'] = 0x0;
    ['RO'] = -0x1;
    ['HE'] = null;
    ['RD'] = !0x1;
    ['Rx'] = new Uint16Array(0x6);
    ['RG'] = new Uint16Array(0x6);
    ['PD'] = 0x80;
    ['PC'] = 0x80;
    ['Py'] = 0x0;
    ['Ry'] = 0x0;
    ['Rz'] = 0x0;
    ['l'](bz, bj) {
        0x1 === bz ? this['Rw'] = bj['oZ']() : 0x2 === bz ? (this['RO'] = bj['oZ'](), Xi['EI'] && (this['HE'] = Xi['EI'][this['RO']])) : 0x3 === bz ? this['RD'] = !0x0 : 0x4 === bz ? this['PD'] = bj['oZ']() : 0x5 === bz ? this['PC'] = bj['oZ']() : 0x6 === bz ? this['Py'] = bj['oZ']() : 0x7 === bz ? this['Ry'] = bj['m']() : 0x8 === bz ? this['Rz'] = bj['m']() : bz >= 0x28 && bz < 0x32 ? this['Rx'][bz - 0x28] = bj['oZ']() : bz >= 0x32 && bz < 0x3c && (this['RG'][bz - 0x32] = bj['oZ']());
    } ['t2']() {
        const FX = uh;
        let bz = xd['PO']?.[FX(0x321)](BigInt(this['Eq']));
        if (bz) return bz;
        bz = XW['Rw'](this['Rw']);
        for (let bj = 0x0; bj < 0x6; bj++) 0x0 !== this['Rx'][0x0] && bz['wW'](this['Rx'][bj], this['RG'][bj]);
        return xd['PO']?.[FX(0x2c2)](BigInt(this['Eq']), bz), bz;
    }
}
class xw extends Xy {
    static['EJ'] = 0x0;
    static['EI'] = [];
    static['l'](bz) {
        const Fx = uh;
        let bj = new k8(bz['Qw'](Fx(0x2ab)));
        this['EJ'] = bj['oZ']();
        for (let ba = 0x0; ba < this['EJ']; ba++) this['EI'][ba] = new xw(ba)['ET'](bj);
    } ['RB'] = null;
    ['Pz'] = -0x1;
    ['Pj'] = new Int32Array(0x5)[uh(0x2c0)](-0x1);
    ['Rx'] = new Int32Array(0x6);
    ['RG'] = new Int32Array(0x6);
    ['Pa'] = !0x1;
    ['t2']() {
        const FG = uh;
        if (!this['RB']) return null;
        let bz, bj = new kY(this['RB'][FG(0x2ea)], null);
        for (let ba = 0x0; ba < this['RB'][FG(0x2ea)]; ba++) bj[ba] = XW['Rw'](this['RB'][ba]);
        bz = 0x1 === bj[FG(0x2ea)] ? bj[0x0] : XW['Rr'](bj, bj['length']);
        for (let bq = 0x0; bq < 0x6 && 0x0 !== this['Rx'][bq]; bq++) bz?.['wW'](this['Rx'][bq], this['RG'][bq]);
        return bz;
    } ['Pq']() {
        let bz = 0x0,
            bj = new kY(0x5, null);
        for (let bq = 0x0; bq < 0x5; bq++) - 0x1 !== this['Pj'][bq] && (bj[bz++] = XW['Rw'](this['Pj'][bq]));
        let ba = XW['Rr'](bj, bz);
        for (let bT = 0x0; bT < 0x6 && 0x0 !== this['Rx'][bT]; bT++) ba['wW'](this['Rx'][bT], this['RG'][bT]);
        return ba;
    } ['l'](bz, bj) {
        if (0x1 === bz) this['Pz'] = bj['m']();
        else {
            if (0x2 === bz) {
                let ba = bj['m']();
                this['RB'] = new Int32Array(ba);
                for (let bq = 0x0; bq < ba; bq++) this['RB'][bq] = bj['oZ']();
            } else 0x3 === bz ? this['Pa'] = !0x0 : bz >= 0x28 && bz < 0x32 ? this['Rx'][bz - 0x28] = bj['oZ']() : bz >= 0x32 && bz < 0x3c ? this['RG'][bz - 0x32] = bj['oZ']() : bz >= 0x3c && bz < 0x46 && (this['Pj'][bz - 0x3c] = bj['oZ']());
        }
    }
}
class xR extends k4 {
    ['ZG'];
    ['Zc'];
    ['Zg'];
    ['ZR'];
    ['Zx'];
    ['Zw'];
    ['ZX'];
    ['Zy']() {
        let bz = this['Zw'],
            bj = this['ZR'],
            ba = this['Zc'];
        for (let bq = 0x0; bq < ba; bq++) {
            let bT = bj / 0x2 | 0x0;
            for (let bI = 0x0; bI < bT; bI++) {
                let bJ = bI + bq * bj,
                    bV = bj - bI - 0x1 + bq * bj,
                    xG = bz[bJ];
                bz[bJ] = bz[bV], bz[bV] = xG;
            }
        }
    } ['PT'](bz, bj, ba) {
        bj |= 0x0, ba |= 0x0;
        let bq = (bj += this['ZX']) + (ba += this['Zg']) * Xu['ZR'],
            bT = 0x0,
            bI = this['Zc'],
            bJ = this['ZR'],
            bV = Xu['ZR'] - bJ,
            xG = 0x0;
        if (ba < Xu['Zr']) {
            let xg = Xu['Zr'] - ba;
            bI -= xg, ba = Xu['Zr'], bT += xg * bJ, bq += xg * Xu['ZR'];
        }
        if (ba + bI > Xu['Zh'] && (bI -= ba + bI - Xu['Zh']), bj < Xu['Zl']) {
            let xu = Xu['Zl'] - bj;
            bJ -= xu, bj = Xu['Zl'], bT += xu, bq += xu, xG += xu, bV += xu;
        }
        if (bj + bJ > Xu['Zt']) {
            let xM = bj + bJ - Xu['Zt'];
            bJ -= xM, xG += xM, bV += xM;
        }
        bJ > 0x0 && bI > 0x0 && this['PI'](bJ, bI, this['Zw'], bT, xG, Xu['Zw'], bq, bV, bz);
    } ['Zj'](bz, bj) {
        bz |= 0x0, bj |= 0x0;
        let ba = (bz += this['ZX']) + (bj += this['Zg']) * Xu['ZR'],
            bq = 0x0,
            bT = this['Zc'],
            bI = this['ZR'],
            bJ = Xu['ZR'] - bI,
            bV = 0x0;
        if (bj < Xu['Zr']) {
            let xG = Xu['Zr'] - bj;
            bT -= xG, bj = Xu['Zr'], bq += xG * bI, ba += xG * Xu['ZR'];
        }
        if (bj + bT > Xu['Zh'] && (bT -= bj + bT - Xu['Zh']), bz < Xu['Zl']) {
            let xg = Xu['Zl'] - bz;
            bI -= xg, bz = Xu['Zl'], bq += xg, ba += xg, bV += xg, bJ += xg;
        }
        if (bz + bI > Xu['Zt']) {
            let xu = bz + bI - Xu['Zt'];
            bI -= xu, bV += xu, bJ += xu;
        }
        bI > 0x0 && bT > 0x0 && this['PJ'](bI, bT, this['Zw'], bq, bV, Xu['Zw'], ba, bJ);
    } ['PV'](bz, bj) {
        bz |= 0x0, bj |= 0x0;
        let ba = (bz += this['ZX']) + (bj += this['Zg']) * Xu['ZR'],
            bq = 0x0,
            bT = this['Zc'],
            bI = this['ZR'],
            bJ = Xu['ZR'] - bI,
            bV = 0x0;
        if (bj < Xu['Zr']) {
            let xG = Xu['Zr'] - bj;
            bT -= xG, bj = Xu['Zr'], bq += xG * bI, ba += xG * Xu['ZR'];
        }
        if (bj + bT > Xu['Zh'] && (bT -= bj + bT - Xu['Zh']), bz < Xu['Zl']) {
            let xg = Xu['Zl'] - bz;
            bI -= xg, bz = Xu['Zl'], bq += xg, ba += xg, bV += xg, bJ += xg;
        }
        if (bz + bI > Xu['Zt']) {
            let xu = bz + bI - Xu['Zt'];
            bI -= xu, bV += xu, bJ += xu;
        }
        bI > 0x0 && bT > 0x0 && this['PW'](bI, bT, this['Zw'], bq, bV, Xu['Zw'], ba, bJ);
    } ['PS'](bz, bj, ba) {
        bz |= 0x0, bj |= 0x0;
        let bq = (bz += this['ZX']) + (bj += this['Zg']) * Xu['ZR'],
            bT = 0x0,
            bI = this['Zc'],
            bJ = this['ZR'],
            bV = Xu['ZR'] - bJ,
            xG = 0x0;
        if (bj < Xu['Zr']) {
            let xg = Xu['Zr'] - bj;
            bI -= xg, bj = Xu['Zr'], bT += xg * bJ, bq += xg * Xu['ZR'];
        }
        if (bj + bI > Xu['Zh'] && (bI -= bj + bI - Xu['Zh']), bz < Xu['Zl']) {
            let xu = Xu['Zl'] - bz;
            bJ -= xu, bz = Xu['Zl'], bT += xu, bq += xu, xG += xu, bV += xu;
        }
        if (bz + bJ > Xu['Zt']) {
            let xM = bz + bJ - Xu['Zt'];
            bJ -= xM, xG += xM, bV += xM;
        }
        bJ > 0x0 && bI > 0x0 && this['Pi'](bJ, bI, this['Zw'], xG, bT, Xu['Zw'], bq, bV, ba['Zw']);
    } ['PW'](bz, bj, ba, bq, bT, bI, bJ, bV) {
        let xG = -(bz >> 0x2);
        bz = -(0x3 & bz);
        for (let xg = -bj; xg < 0x0; xg++) {
            for (let xu = xG; xu < 0x0; xu++) bI[bJ++] = ba[bq++], bI[bJ++] = ba[bq++], bI[bJ++] = ba[bq++], bI[bJ++] = ba[bq++];
            for (let xM = bz; xM < 0x0; xM++) bI[bJ++] = ba[bq++];
            bJ += bV, bq += bT;
        }
    }
    static['Zz'](bz, bj, ba = 0x0) {
        const Fg = uh;
        let bq = new k8(bz['Qw'](bj + '.dat')),
            bT = new k8(bz['Qw'](Fg(0x13b)));
        bT['S'] = bq['oZ']();
        let bI = bT['oZ'](),
            bJ = bT['oZ'](),
            bV = [],
            xG = bT['m']() - 0x1;
        for (let xC = 0x0; xC < xG; xC++) bV[xC + 0x1] = bT['o7'](), 0x0 === bV[xC + 0x1] && (bV[xC + 0x1] = 0x1);
        for (let xy = 0x0; xy < ba; xy++) bT['S'] += 0x2, bq['S'] += bT['oZ']() * bT['oZ'](), bT['S'] += 0x1;
        if (bq['S'] > bq['oR'] || bT['S'] > bT['oR']) throw new Error();
        let xg = bT['m'](),
            xu = bT['m'](),
            xM = bT['oZ'](),
            xF = bT['oZ'](),
            xO = new xR(xM, xF);
        xO['ZX'] = xg, xO['Zg'] = xu, xO['ZG'] = bI, xO['Zx'] = bJ;
        let xD = bT['m']();
        if (0x0 === xD) {
            let xz = xO['ZR'] * xO['Zc'];
            for (let xj = 0x0; xj < xz; xj++) xO['Zw'][xj] = bV[bq['m']()];
        } else {
            if (0x1 === xD) {
                let xa = xO['ZR'];
                for (let xq = 0x0; xq < xa; xq++) {
                    let xT = xO['Zc'];
                    for (let xI = 0x0; xI < xT; xI++) xO['Zw'][xq + xI * xa] = bV[bq['m']()];
                }
            }
        }
        return xO;
    } [uh(0x1fe)](bz, bj, ba, bq, bT, bI, bJ, bV, xG, xg, xu) {
        try {
            let xM = bq;
            for (let xF = -bj; xF < 0x0; xF++) {
                let xO = (bT >> 0x10) * xG;
                for (let xD = -bz; xD < 0x0; xD++) {
                    let xC = ba[(bq >> 0x10) + xO];
                    0x0 === xC ? bV++ : bI[bV++] = xC, bq += xg;
                }
                bT += xu, bq = xM, bV += bJ;
            }
        } catch (xy) {}
    }
    constructor(bz, bj) {
        super(), this['Zw'] = new Int32Array(bz * bj), this['ZR'] = this['ZG'] = bz, this['Zc'] = this['Zx'] = bj, this['ZX'] = this['Zg'] = 0x0;
    } ['PI'](bz, bj, ba, bq, bT, bI, bJ, bV, xG) {
        let xg = 0x100 - xG;
        for (let xu = -bj; xu < 0x0; xu++) {
            for (let xM = -bz; xM < 0x0; xM++) {
                let xF = ba[bq++];
                if (0x0 === xF) bJ++;
                else {
                    let xO = bI[bJ];
                    bI[bJ++] = ((0xff00ff & xF) * xG + (0xff00ff & xO) * xg & 0xff00ff00) + ((0xff00 & xF) * xG + (0xff00 & xO) * xg & 0xff0000) >> 0x8;
                }
            }
            bJ += bV, bq += bT;
        }
    } ['PJ'](bz, bj, ba, bq, bT, bI, bJ, bV) {
        let xG = -(bz >> 0x2);
        bz = -(0x3 & bz);
        for (let xg = -bj; xg < 0x0; xg++) {
            for (let xu = xG; xu < 0x0; xu++) {
                let xM = ba[bq++];
                0x0 === xM ? bJ++ : bI[bJ++] = xM, xM = ba[bq++], 0x0 === xM ? bJ++ : bI[bJ++] = xM, xM = ba[bq++], 0x0 === xM ? bJ++ : bI[bJ++] = xM, xM = ba[bq++], 0x0 === xM ? bJ++ : bI[bJ++] = xM;
            }
            for (let xF = bz; xF < 0x0; xF++) {
                let xO = ba[bq++];
                0x0 === xO ? bJ++ : bI[bJ++] = xO;
            }
            bJ += bV, bq += bT;
        }
    } ['ZO'](bz, bj, ba, bq) {
        bz |= 0x0, bj |= 0x0, ba |= 0x0, bq |= 0x0;
        try {
            let bT = this['ZR'],
                bI = 0x0,
                bJ = 0x0,
                bV = this['ZG'],
                xG = this['Zx'],
                xg = (bV << 0x10) / ba | 0x0,
                xu = (xG << 0x10) / bq | 0x0;
            bz += (this['ZX'] * ba + bV - 0x1) / bV | 0x0, bj += (this['Zg'] * bq + xG - 0x1) / xG | 0x0, this['ZX'] * ba % bV != 0x0 && (bI = (bV - this['ZX'] * ba % bV << 0x10) / ba | 0x0), this['Zg'] * bq % xG != 0x0 && (bJ = (xG - this['Zg'] * bq % xG << 0x10) / bq | 0x0), ba = ba * (this['ZR'] - (bI >> 0x10)) / bV | 0x0, bq = bq * (this['Zc'] - (bJ >> 0x10)) / xG | 0x0;
            let xM = bz + bj * Xu['ZR'],
                xF = Xu['ZR'] - ba;
            if (bj < Xu['Zr']) {
                let xO = Xu['Zr'] - bj;
                bq -= xO, bj = 0x0, xM += xO * Xu['ZR'], bJ += xu * xO;
            }
            if (bj + bq > Xu['Zh'] && (bq -= bj + bq - Xu['Zh']), bz < Xu['Zl']) {
                let xD = Xu['Zl'] - bz;
                ba -= xD, bz = 0x0, xM += xD, bI += xg * xD, xF += xD;
            }
            if (bz + ba > Xu['Zt']) {
                let xC = bz + ba - Xu['Zt'];
                ba -= xC, xF += xC;
            }
            this['scale'](ba, bq, this['Zw'], bI, bJ, Xu['Zw'], xF, xM, bT, xg, xu);
        } catch (xy) {}
    }
    static async ['p0'](bz, bj) {
        const Fu = uh;
        let ba = bz['Qw'](bj + Fu(0x2c9));
        if (!ba) throw new Error();
        let bq = await async function(bV) {
            const FM = Fu,
                xG = {};
            xG[FM(0x284)] = FM(0x20a), (0xff !== bV[0x0] && (bV[0x0] = 0xff), URL[FM(0x273)](XG[FM(0x2d6)]), XG['src'] = URL['createObjectURL'](new Blob([bV], xG)), await new Promise(xM => XG[FM(0x1b3)] = () => xM()), Xg['clearRect'](0x0, 0x0, Xx[FM(0x1a2)], Xx[FM(0x233)]));
            let xg = XG[FM(0x2f5)],
                xu = XG[FM(0x20b)];
            return Xx[FM(0x1a2)] = xg, Xx[FM(0x233)] = xu, Xg[FM(0x307)](XG, 0x0, 0x0), Xg[FM(0x138)](0x0, 0x0, xg, xu);
        }(ba), bT = new xR(bq[Fu(0x1a2)], bq['height']), bI = new Uint32Array(bq['data'][Fu(0x215)]), bJ = bT['Zw'];
        for (let bV = 0x0; bV < bJ[Fu(0x2ea)]; bV++) {
            let xG = bI[bV];
            bJ[bV] = (xG >> 0x18 & 0xff) << 0x18 | (0xff & xG) << 0x10 | (xG >> 0x8 & 0xff) << 0x8 | xG >> 0x10 & 0xff;
        }
        return bT;
    } ['ZC'](bz, bj, ba) {
        const FF = uh;
        for (let bq = 0x0; bq < this['Zw'][FF(0x2ea)]; bq++) {
            let bT = this['Zw'][bq];
            if (0x0 !== bT) {
                let bI = bT >> 0x10 & 0xff;
                bI += bz, bI < 0x1 ? bI = 0x1 : bI > 0xff && (bI = 0xff);
                let bJ = bT >> 0x8 & 0xff;
                bJ += bj, bJ < 0x1 ? bJ = 0x1 : bJ > 0xff && (bJ = 0xff);
                let bV = 0xff & bT;
                bV += ba, bV < 0x1 ? bV = 0x1 : bV > 0xff && (bV = 0xff), this['Zw'][bq] = (bI << 0x10) + (bJ << 0x8) + bV;
            }
        }
    } ['p1'](bz, bj, ba, bq, bT, bI, bJ, bV, xG, xg) {
        const FO = uh;
        bz |= 0x0, bj |= 0x0, ba |= 0x0, bq |= 0x0;
        try {
            let xu = -ba / 0x2 | 0x0,
                xM = -bq / 0x2 | 0x0,
                xF = 0x10000 * Math[FO(0x2db)](xG / 326.11) | 0x0,
                xO = 0x10000 * Math[FO(0x15b)](xG / 326.11) | 0x0,
                xD = xF * xg >> 0x8,
                xC = xO * xg >> 0x8,
                xy = (bJ << 0x10) + xM * xD + xu * xC,
                xz = xM * xC - xu * xD + (bV << 0x10),
                xj = bz + bj * Xu['ZR'];
            for (let xa = 0x0; xa < bq; xa++) {
                let xq = bT[xa],
                    xT = xj + xq,
                    xI = xy + xC * xq,
                    xJ = xz - xD * xq;
                for (let xV = -bI[xa]; xV < 0x0; xV++) Xu['Zw'][xT++] = this['Zw'][(xI >> 0x10) + (xJ >> 0x10) * this['ZR']], xI += xC, xJ -= xD;
                xy += xD, xz += xC, xj += Xu['ZR'];
            }
        } catch (xW) {}
    } ['Pi'](bz, bj, ba, bq, bT, bI, bJ, bV, xG) {
        let xg = -(bz >> 0x2);
        bz = -(0x3 & bz);
        for (let xu = -bj; xu < 0x0; xu++) {
            for (let xM = xg; xM < 0x0; xM++) {
                let xF = ba[bT++];
                0x0 !== xF && 0x0 === xG[bJ] ? bI[bJ++] = xF : bJ++, xF = ba[bT++], 0x0 !== xF && 0x0 === xG[bJ] ? bI[bJ++] = xF : bJ++, xF = ba[bT++], 0x0 !== xF && 0x0 === xG[bJ] ? bI[bJ++] = xF : bJ++, xF = ba[bT++], 0x0 !== xF && 0x0 === xG[bJ] ? bI[bJ++] = xF : bJ++;
            }
            for (let xO = bz; xO < 0x0; xO++) {
                let xD = ba[bT++];
                0x0 !== xD && 0x0 === xG[bJ] ? bI[bJ++] = xD : bJ++;
            }
            bJ += bV, bT += bq;
        }
    } ['Zm']() {
        Xu['Zm'](this['Zw'], this['ZR'], this['Zc']);
    } ['Za']() {
        let bz = this['Zw'],
            bj = this['ZR'],
            ba = this['Zc'];
        for (let bq = 0x0; bq < (ba / 0x2 | 0x0); bq++)
            for (let bT = 0x0; bT < bj; bT++) {
                let bI = bT + bq * bj,
                    bJ = bT + (ba - bq - 0x1) * bj,
                    bV = bz[bI];
                bz[bI] = bz[bJ], bz[bJ] = bV;
            }
    }
}
class xc extends Xy {
    static['EJ'] = 0x0;
    static['RU'] = null;
    static['Rn'] = null;
    static['Rm'] = null;
    static['p2'] = !0x0;
    static['Rf'] = 0x0;
    static['p3'] = new Xq(0xc8);
    static['PO'] = new Xq(0x32);
    static['l'](bz, bj) {
        const FD = uh;
        this['p2'] = bj, this['RU'] = new k8(bz['Qw'](FD(0x1db)));
        let ba = new k8(bz['Qw'](FD(0x1f6)));
        this['EJ'] = ba['oZ'](), this['Rm'] = new Int32Array(this['EJ']);
        let bq = 0x2;
        for (let bT = 0x0; bT < this['EJ']; bT++) this['Rm'][bT] = bq, bq += ba['oZ']();
        this['Rn'] = new kY(0xa, null);
        for (let bI = 0x0; bI < 0xa; bI++) this['Rn'][bI] = new xc(-0x1);
    }
    static[uh(0x321)](bz) {
        const FC = uh;
        if (!this['Rn'] || !this['Rm'] || !this['RU']) throw new Error();
        for (let ba = 0x0; ba < 0xa; ba++) {
            let bq = this['Rn'][ba];
            if (bq && bq['Eq'] === bz) return bq;
        }
        this['Rf'] = (this['Rf'] + 0x1) % 0xa;
        let bj = this['Rn'][this['Rf']];
        return this['RU']['S'] = this['Rm'][bz], bj['Eq'] = bz, bj[FC(0x25c)](), bj['ET'](this['RU']), -0x1 !== bj['p4'] && bj['p5'](), !this['p2'] && bj['p6'] && (bj[FC(0x260)] = FC(0x227), bj['RX'] = FC(0x299), bj['Rk'] = null, bj['p7'] = null), bj;
    }
    static['p8'](bz, bj) {
        if (xc['p3']) {
            let xz = xc['p3']['get'](BigInt(bz));
            if (xz && xz['Zx'] !== bj && -0x1 !== xz['Zx'] && (xz['p'](), xz = null), xz) return xz;
        }
        let ba = xc['get'](bz);
        if (ba['p9'] || (bj = -0x1), ba['p9'] && ba['po'] && bj > 0x1) {
            let xj = -0x1;
            for (let xa = 0x0; xa < 0xa; xa++) bj >= ba['po'][xa] && 0x0 !== ba['po'][xa] && (xj = ba['p9'][xa]); - 0x1 !== xj && (ba = xc['get'](xj));
        }
        let bq = new xR(0x20, 0x20),
            bT = XO['YY'],
            bI = XO['Y5'],
            bJ = XO['YZ'],
            bV = Xu['Zw'],
            xG = Xu['ZR'],
            xg = Xu['Zc'],
            xu = Xu['Zl'],
            xM = Xu['Zt'],
            xF = Xu['Zr'],
            xO = Xu['Zh'];
        XO['YQ'] = !0x1, Xu['Zm'](bq['Zw'], 0x20, 0x20), Xu['ZK'](0x0, 0x0, 0x20, 0x20, 0x0), XO['YN']();
        let xD = ba['pQ'](0x1),
            xC = XO['oy'][ba['pZ']] * ba['pY'] >> 0x10,
            xy = XO['Y3'][ba['pZ']] * ba['pY'] >> 0x10;
        xD['wA'](0x0, ba['pE'], ba['pd'], ba['pZ'], ba['pw'], xC + (xD['wL'] / 0x2 | 0x0) + ba['pR'], xy + ba['pR']);
        for (let xq = 0x1f; xq >= 0x0; xq--)
            for (let xT = 0x1f; xT >= 0x0; xT--) 0x0 === bq['Zw'][xq + 0x20 * xT] && (xq > 0x0 && bq['Zw'][xq + 0x20 * xT - 0x1] > 0x1 || xT > 0x0 && bq['Zw'][xq + 0x20 * (xT - 0x1)] > 0x1 || xq < 0x1f && bq['Zw'][xq + 0x20 * xT + 0x1] > 0x1 || xT < 0x1f && bq['Zw'][xq + 0x20 * (xT + 0x1)] > 0x1) && (bq['Zw'][xq + 0x20 * xT] = 0x1);
        for (let xI = 0x1f; xI >= 0x0; xI--)
            for (let xJ = 0x1f; xJ >= 0x0; xJ--) 0x0 === bq['Zw'][xI + 0x20 * xJ] && xI > 0x0 && xJ > 0x0 && bq['Zw'][xI + 0x20 * (xJ - 0x1) - 0x1] > 0x0 && (bq['Zw'][xI + 0x20 * xJ] = 0x302020);
        if (-0x1 !== ba['p4']) {
            let xV = this['p8'](ba['pc'], 0xa),
                xW = xV['ZG'],
                xS = xV['Zx'];
            xV['ZG'] = 0x20, xV['Zx'] = 0x20, xV['ZO'](0x5, 0x5, 0x16, 0x16), xV['ZG'] = xW, xV['Zx'] = xS;
        }
        return xc['p3']?.['put'](BigInt(bz), bq), Xu['Zm'](bV, xG, xg), Xu['ZU'](xu, xF, xM, xO), XO['YY'] = bT, XO['Y5'] = bI, XO['YZ'] = bJ, XO['YQ'] = !0x0, ba['pr'] ? bq['ZG'] = 0x21 : bq['ZG'] = 0x20, bq['Zx'] = bj, bq;
    } ['Rw'] = 0x0;
    [uh(0x260)] = null;
    ['RX'] = null;
    ['Rx'] = null;
    ['RG'] = null;
    ['pY'] = 0x7d0;
    ['pZ'] = 0x0;
    ['pE'] = 0x0;
    ['pd'] = 0x0;
    ['pw'] = 0x0;
    ['pR'] = 0x0;
    ['pH'] = !0x1;
    ['pP'] = -0x1;
    ['pr'] = !0x1;
    ['pp'] = 0x1;
    ['p6'] = !0x1;
    ['Rk'] = null;
    ['p7'] = null;
    ['ph'] = -0x1;
    ['pl'] = -0x1;
    ['pK'] = 0x0;
    ['pN'] = -0x1;
    ['pv'] = -0x1;
    ['pn'] = 0x0;
    ['pU'] = -0x1;
    ['pm'] = -0x1;
    ['pf'] = -0x1;
    ['pL'] = -0x1;
    ['pe'] = -0x1;
    ['ps'] = -0x1;
    ['p9'] = null;
    ['po'] = null;
    ['pc'] = -0x1;
    ['p4'] = -0x1;
    ['l'](bz, bj) {
        const Fy = uh;
        if (0x1 === bz) this['Rw'] = bj['oZ']();
        else {
            if (0x2 === bz) this[Fy(0x260)] = bj['o9']();
            else {
                if (0x3 === bz) this['RX'] = bj['o9']();
                else {
                    if (0x4 === bz) this['pY'] = bj['oZ']();
                    else {
                        if (0x5 === bz) this['pZ'] = bj['oZ']();
                        else {
                            if (0x6 === bz) this['pE'] = bj['oZ']();
                            else {
                                if (0x7 === bz) this['pw'] = bj['oc'](), this['pw'] > 0x7fff && (this['pw'] -= 0x10000);
                                else {
                                    if (0x8 === bz) this['pR'] = bj['oc'](), this['pR'] > 0x7fff && (this['pR'] -= 0x10000);
                                    else {
                                        if (0x9 === bz) this['pH'] = !0x0;
                                        else {
                                            if (0xa === bz) this['pP'] = bj['oZ']();
                                            else {
                                                if (0xb === bz) this['pr'] = !0x0;
                                                else {
                                                    if (0xc === bz) this['pp'] = bj['op']();
                                                    else {
                                                        if (0x10 === bz) this['p6'] = !0x0;
                                                        else {
                                                            if (0x17 === bz) this['ph'] = bj['oZ'](), this['pK'] = bj['oo']();
                                                            else {
                                                                if (0x18 === bz) this['pl'] = bj['oZ']();
                                                                else {
                                                                    if (0x19 === bz) this['pN'] = bj['oZ'](), this['pn'] = bj['oo']();
                                                                    else {
                                                                        if (0x1a === bz) this['pv'] = bj['oZ']();
                                                                        else {
                                                                            if (bz >= 0x1e && bz < 0x23) this['Rk'] || (this['Rk'] = new kY(0x5, null)), this['Rk'][bz - 0x1e] = bj['o9'](), Fy(0x2ad) === this['Rk'][bz - 0x1e]?.[Fy(0x19a)]() && (this['Rk'][bz - 0x1e] = null);
                                                                            else {
                                                                                if (bz >= 0x23 && bz < 0x28) this['p7'] || (this['p7'] = new kY(0x5, null)), this['p7'][bz - 0x23] = bj['o9']();
                                                                                else {
                                                                                    if (0x28 === bz) {
                                                                                        let ba = bj['m']();
                                                                                        this['Rx'] = new Uint16Array(ba), this['RG'] = new Uint16Array(ba);
                                                                                        for (let bq = 0x0; bq < ba; bq++) this['Rx'][bq] = bj['oZ'](), this['RG'][bq] = bj['oZ']();
                                                                                    } else 0x4e === bz ? this['pU'] = bj['oZ']() : 0x4f === bz ? this['pm'] = bj['oZ']() : 0x5a === bz ? this['pf'] = bj['oZ']() : 0x5b === bz ? this['pe'] = bj['oZ']() : 0x5c === bz ? this['pL'] = bj['oZ']() : 0x5d === bz ? this['ps'] = bj['oZ']() : 0x5f === bz ? this['pd'] = bj['oZ']() : 0x61 === bz ? this['pc'] = bj['oZ']() : 0x62 === bz ? this['p4'] = bj['oZ']() : bz >= 0x64 && bz < 0x6e && (this['p9'] && this['po'] || (this['p9'] = new Uint16Array(0xa), this['po'] = new Uint16Array(0xa)), this['p9'][bz - 0x64] = bj['oZ'](), this['po'][bz - 0x64] = bj['oZ']());
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } ['pA'](bz) {
        const Fz = uh;
        let bj = this['ph'];
        if (0x1 === bz && (bj = this['pN']), -0x1 === bj) return null;
        let ba = this['pl'],
            bq = this['pU'];
        0x1 === bz && (ba = this['pv'], bq = this['pm']);
        let bT = XW['Rw'](bj);
        if (-0x1 !== ba) {
            let bI = XW['Rw'](ba);
            if (-0x1 === bq) {
                let bJ = [bT, bI];
                bT = XW['Rr'](bJ, 0x2);
            } else {
                let bV = [bT, bI, XW['Rw'](bq)];
                bT = XW['Rr'](bV, 0x3);
            }
        }
        if (0x0 === bz && 0x0 !== this['pK'] && bT['wV'](this['pK'], 0x0, 0x0), 0x1 === bz && 0x0 !== this['pn'] && bT['wV'](this['pn'], 0x0, 0x0), this['Rx'] && this['RG']) {
            for (let xG = 0x0; xG < this['Rx'][Fz(0x2ea)]; xG++) bT['wW'](this['Rx'][xG], this['RG'][xG]);
        }
        return bT;
    } ['Pq'](bz) {
        const Fj = uh;
        let bj = this['pf'];
        if (0x1 === bz && (bj = this['pe']), -0x1 === bj) return null;
        let ba = this['pL'];
        0x1 === bz && (ba = this['ps']);
        let bq = XW['Rw'](bj);
        if (-0x1 !== ba) {
            let bT = [bq, XW['Rw'](ba)];
            bq = XW['Rr'](bT, 0x2);
        }
        if (this['Rx'] && this['RG']) {
            for (let bI = 0x0; bI < this['Rx'][Fj(0x2ea)]; bI++) bq['wW'](this['Rx'][bI], this['RG'][bI]);
        }
        return bq;
    } ['pQ'](bz) {
        const Fa = uh;
        if (this['p9'] && this['po'] && bz > 0x1) {
            let ba = -0x1;
            for (let bq = 0x0; bq < 0xa; bq++) bz >= this['po'][bq] && 0x0 !== this['po'][bq] && (ba = this['p9'][bq]);
            if (-0x1 !== ba) return xc[Fa(0x321)](ba)['pQ'](0x1);
        }
        if (xc['PO']) {
            let bT = xc['PO'][Fa(0x321)](BigInt(this['Eq']));
            if (bT) return bT;
        }
        let bj = XW['Rw'](this['Rw']);
        if (this['Rx'] && this['RG']) {
            for (let bI = 0x0; bI < this['Rx'][Fa(0x2ea)]; bI++) bj['wW'](this['Rx'][bI], this['RG'][bI]);
        }
        return bj['R8'](0x40, 0x300, -0x32, -0xa, -0x32, !0x0), bj['we'] = !0x0, xc['PO']?.['put'](BigInt(this['Eq']), bj), bj;
    } ['p5']() {
        const Fq = uh;
        let bz = xc['get'](this['p4']);
        this['Rw'] = bz['Rw'], this['pY'] = bz['pY'], this['pZ'] = bz['pZ'], this['pE'] = bz['pE'], this['pd'] = bz['pd'], this['pw'] = bz['pw'], this['pR'] = bz['pR'], this['Rx'] = bz['Rx'], this['RG'] = bz['RG'];
        let bj = xc[Fq(0x321)](this['pc']);
        this[Fq(0x260)] = bj[Fq(0x260)], this['p6'] = bj['p6'], this['pp'] = bj['pp'];
        let ba = 'a',
            bq = (bj['name'] || '')[Fq(0x19a)]()[Fq(0x18d)](0x0);
        'a' !== bq && 'e' !== bq && 'i' !== bq && 'o' !== bq && 'u' !== bq || (ba = 'an'), this['RX'] = 'Swap\x20this\x20note\x20at\x20any\x20bank\x20for\x20' + ba + '\x20' + bj[Fq(0x260)] + '.', this['pr'] = !0x0;
    } [uh(0x25c)]() {
        const FT = uh;
        this['Rw'] = 0x0, this[FT(0x260)] = null, this['RX'] = null, this['Rx'] = null, this['RG'] = null, this['pY'] = 0x7d0, this['pZ'] = 0x0, this['pE'] = 0x0, this['pd'] = 0x0, this['pw'] = 0x0, this['pR'] = 0x0, this['pH'] = !0x1, this['pP'] = -0x1, this['pr'] = !0x1, this['pp'] = 0x1, this['p6'] = !0x1, this['Rk'] = null, this['p7'] = null, this['ph'] = -0x1, this['pl'] = -0x1, this['pK'] = 0x0, this['pN'] = -0x1, this['pv'] = -0x1, this['pn'] = 0x0, this['pU'] = -0x1, this['pm'] = -0x1, this['pf'] = -0x1, this['pL'] = -0x1, this['pe'] = -0x1, this['ps'] = -0x1, this['p9'] = null, this['po'] = null, this['pc'] = -0x1, this['p4'] = -0x1;
    }
}
class xr extends xE {
    static['pb'] = [0x2390, 0x2823, 0x1dab, 0xe1a, 0x1f27, 0x214e, 0x396, 0x9792, 0x5f92, 0x27a1, 0xe51e, 0x13a3, 0x5b1, 0x40b5, 0x88af, 0x638e];
    static['pk'] = [
        [0x1a8e, 0x6b, 0x282b, 0x10, 0x12bd, 0x1e40, 0x16a7, 0x121a, 0x83a1, 0x57a1, 0xba7, 0xd3b1],
        [0x2225, 0xc, 0xfa1e, 0xa89a, 0x1e37, 0x20d4, 0x6a5, 0x961e, 0x5e1e, 0x27a9, 0xdd2d, 0x12af, 0x53d, 0x40c2, 0x88bb, 0x6297],
        [0x6296, 0x2226, 0xc, 0xfa1e, 0xa89a, 0x1e37, 0x20d4, 0x6a5, 0x961e, 0x5e1e, 0x27a9, 0xdd2d, 0x12af, 0x53d, 0x40c2, 0x88bb],
        [0x1212, 0x2b8a, 0x1927, 0xc, 0x1296, 0x281e],
        [0x11c6, 0x11b9, 0x1631, 0x1629, 0x169e, 0x1a96, 0x1f8c, 0x11de]
    ];
    static['PO'] = new Xq(0xc8);
    ['pB'] = null;
    ['pX'] = 0x0;
    ['px'] = !0x1;
    ['pG'] = new Uint16Array(0xc);
    ['pg'] = new Uint16Array(0x5);
    ['pu'] = 0x0;
    ['pM'] = 0x0;
    ['pF'] = 0x0;
    ['pO'] = 0x0;
    ['pD'] = 0x0;
    ['pC'] = 0x0;
    ['py'] = 0x0;
    ['pz'] = 0x0n;
    ['y'] = 0x0;
    ['c6'] = 0x0;
    ['ZT'] = !0x1;
    ['c7'] = 0x0;
    ['pj'] = null;
    ['c8'] = 0x0;
    ['c5'] = 0x0;
    ['wm'](bz) {
        if (!this['px']) return null;
        let bj = this['pa']();
        if (this['wL'] = bj['wL'], bj['we'] = !0x0, this['ZT']) return bj;
        if (-0x1 !== this['HI'] && -0x1 !== this['HV']) {
            let ba = xd['EI'][this['HI']],
                bq = XW['Rh'](ba['t2'](), !0x0, !ba['RD'], !0x1);
            bq['wV'](-this['P0'], 0x0, 0x0), bq['Rl'](), ba['HE'] && ba['HE']['t4'] && bq['Rc'](ba['HE']['t4'][this['HV']]), bq['R1'] = null, bq['R0'] = null, (0x80 !== ba['PD'] || 0x80 !== ba['PC']) && bq['wh'](ba['PD'], ba['PC'], ba['PD']), bq['R8'](ba['Ry'] + 0x40, ba['Rz'] + 0x352, -0x1e, -0x32, -0x1e, !0x0);
            let bT = [bj, bq];
            bj = XW['RP'](bT, 0x2);
        }
        if (this['pj'] && (bz >= this['py'] && (this['pj'] = null), bz >= this['pC'] && bz < this['py'])) {
            let bI = this['pj'];
            if (bI) {
                bI['wV'](this['pM'] - this['y'], this['pF'] - this['x'], this['pO'] - this['z']), 0x200 === this['PE'] ? (bI['Rd'](), bI['Rd'](), bI['Rd']()) : 0x400 === this['PE'] ? (bI['Rd'](), bI['Rd']()) : 0x600 === this['PE'] && bI['Rd']();
                let bJ = [bj, bI];
                bj = XW['RP'](bJ, 0x2), 0x200 === this['PE'] ? bI['Rd']() : 0x400 === this['PE'] ? (bI['Rd'](), bI['Rd']()) : 0x600 === this['PE'] && (bI['Rd'](), bI['Rd'](), bI['Rd']()), bI['wV'](this['y'] - this['pM'], this['x'] - this['pF'], this['z'] - this['pO']);
            }
        }
        return bj['we'] = !0x0, bj;
    } ['pq']() {
        return this['px'];
    } [uh(0x2fe)](bz) {
        const FI = uh;
        bz['S'] = 0x0, this['pu'] = bz['m'](), this['pX'] = bz['m']();
        for (let bj = 0x0; bj < 0xc; bj++) {
            let ba = bz['m']();
            this['pG'][bj] = 0x0 === ba ? 0x0 : (ba << 0x8) + bz['m']();
        }
        for (let bq = 0x0; bq < 0x5; bq++) {
            let bT = bz['m']();
            (bT < 0x0 || bT >= xr['pk'][bq][FI(0x2ea)]) && (bT = 0x0), this['pg'][bq] = bT;
        }
        this['PL'] = bz['oZ'](), 0xffff === this['PL'] && (this['PL'] = -0x1), this['Pf'] = bz['oZ'](), 0xffff === this['Pf'] && (this['Pf'] = -0x1), this['PB'] = bz['oZ'](), 0xffff === this['PB'] && (this['PB'] = -0x1), this['P8'] = bz['oZ'](), 0xffff === this['P8'] && (this['P8'] = -0x1), this['PQ'] = bz['oZ'](), 0xffff === this['PQ'] && (this['PQ'] = -0x1), this['PR'] = bz['oZ'](), 0xffff === this['PR'] && (this['PR'] = -0x1), this['Ph'] = bz['oZ'](), 0xffff === this['Ph'] && (this['Ph'] = -0x1), this['pB'] = xZ['HC'](xZ['HT'](bz['od']())), this['pD'] = bz['m'](), this['px'] = !0x0, this['pz'] = 0x0n;
        for (let bI = 0x0; bI < 0xc; bI++) this['pz'] <<= 0x4n, this['pG'][bI] >= 0x100 && (this['pz'] += BigInt(this['pG'][bI]) - 0x100n);
        this['pG'][0x0] >= 0x100 && (this['pz'] += BigInt(this['pG'][0x0]) - 0x100n >> 0x4n), this['pG'][0x1] >= 0x100 && (this['pz'] += BigInt(this['pG'][0x1]) - 0x100n >> 0x8n);
        for (let bJ = 0x0; bJ < 0x5; bJ++) this['pz'] <<= 0x3n, this['pz'] += BigInt(this['pg'][bJ]);
        this['pz'] <<= 0x1n, this['pz'] += BigInt(this['pu']);
    } ['Pq']() {
        const FJ = uh;
        if (!this['px']) return null;
        let bz = new kY(0xc, null),
            bj = 0x0;
        for (let bq = 0x0; bq < 0xc; bq++) {
            let bT = this['pG'][bq];
            if (bT >= 0x100 && bT < 0x200 && (bz[bj++] = xw['EI'][bT - 0x100]['Pq']()), bT >= 0x200) {
                let bI = xc[FJ(0x321)](bT - 0x200)['Pq'](this['pu']);
                bI && (bz[bj++] = bI);
            }
        }
        let ba = XW['Rr'](bz, bj);
        for (let bJ = 0x0; bJ < 0x5; bJ++) 0x0 !== this['pg'][bJ] && (ba['wW'](xr['pk'][bJ][0x0], xr['pk'][bJ][this['pg'][bJ]]), 0x1 === bJ && ba['wW'](xr['pb'][0x0], xr['pb'][this['pg'][bJ]]));
        return ba;
    } ['pa']() {
        const FV = uh;
        let bz = this['pz'],
            bj = -0x1,
            ba = -0x1,
            bq = -0x1,
            bT = -0x1;
        if (this['PA'] >= 0x0 && 0x0 === this['Pu']) {
            let bV = Xi['EI'][this['PA']];
            if (bV['t4'] && (bj = bV['t4'][this['Pk']]), this['On'] >= 0x0 && this['On'] !== this['PL']) {
                let xG = Xi['EI'][this['On']]['t4'];
                xG && (ba = xG[this['Po']]);
            }
            bV['t6'] >= 0x0 && (bq = bV['t6'], bz += BigInt(bq - this['pG'][0x5]) << 0x8n), bV['tY'] >= 0x0 && (bT = bV['tY'], bz += BigInt(bT - this['pG'][0x3]) << 0x10n);
        } else {
            if (this['On'] >= 0x0) {
                let xg = Xi['EI'][this['On']]['t4'];
                xg && (bj = xg[this['Po']]);
            }
        }
        let bI = xr['PO']?.[FV(0x321)](bz);
        if (!bI) {
            let xu = new kY(0xc, null),
                xM = 0x0;
            for (let xF = 0x0; xF < 0xc; xF++) {
                let xO = this['pG'][xF];
                if (bT >= 0x0 && 0x3 === xF && (xO = bT), bq >= 0x0 && 0x5 === xF && (xO = bq), xO >= 0x100 && xO < 0x200) {
                    let xD = xw['EI'][xO - 0x100]['t2']();
                    xD && (xu[xM++] = xD);
                }
                if (xO >= 0x200) {
                    let xC = xc[FV(0x321)](xO - 0x200)['pA'](this['pu']);
                    xC && (xu[xM++] = xC);
                }
            }
            bI = XW['Rr'](xu, xM);
            for (let xy = 0x0; xy < 0x5; xy++) 0x0 !== this['pg'][xy] && (bI['wW'](xr['pk'][xy][0x0], xr['pk'][xy][this['pg'][xy]]), 0x1 === xy && bI['wW'](xr['pb'][0x0], xr['pb'][this['pg'][xy]]));
            bI['Rl'](), bI['R8'](0x40, 0x352, -0x1e, -0x32, -0x1e, !0x0), xr['PO']?.['put'](bz, bI);
        }
        if (this['ZT']) return bI;
        let bJ = XW['RY'](bI, !0x0);
        return -0x1 !== bj && -0x1 !== ba ? bJ['RR'](bj, ba, Xi['EI'][this['PA']]['t5']) : -0x1 !== bj && bJ['Rc'](bj), bJ['R9'](), bJ['R1'] = null, bJ['R0'] = null, bJ;
    }
}
class xH extends xE {
    ['pT'] = null;
    ['pa']() {
        if (!this['pT']) return null;
        if (this['PA'] >= 0x0 && 0x0 === this['Pu']) {
            let ba = Xi['EI'][this['PA']]['t4'];
            if (ba) {
                let bq = ba[this['Pk']],
                    bT = -0x1;
                if (this['On'] >= 0x0 && this['On'] !== this['PL']) {
                    let bI = Xi['EI'][this['On']]['t4'];
                    bI && (bT = bI[this['Po']]);
                }
                return this['pT']['pa'](bq, bT, Xi['EI'][this['PA']]['t5']);
            }
        }
        let bz = -0x1;
        if (this['On'] >= 0x0) {
            let bJ = Xi['EI'][this['On']]['t4'];
            bJ && (bz = bJ[this['Po']]);
        }
        let bj = this['pT']['pa'](bz, -0x1, null);
        return bj ? (this['wL'] = bj['wL'], bj) : null;
    } ['wm'](bz) {
        const FW = uh;
        if (!this['pT']) return null;
        if (-0x1 === this['HI'] || -0x1 === this['HV']) return this['pa']();
        let bj = this['pa']();
        if (!bj) return null;
        let ba = xd['EI'][this['HI']],
            bq = XW['Rh'](ba['t2'](), !0x0, !ba['RD'], !0x1);
        bq['wV'](-this['P0'], 0x0, 0x0), bq['Rl'](), ba['HE'] && ba['HE']['t4'] && bq['Rc'](ba['HE']['t4'][this['HV']]), bq['R1'] = null, bq['R0'] = null, (0x80 !== ba['PD'] || 0x80 !== ba['PC']) && bq['wh'](ba['PD'], ba['PC'], ba['PD']), bq['R8'](0x40 + ba['Ry'], 0x352 + ba['Rz'], -0x1e, -0x32, -0x1e, !0x0);
        let bT = [bj, bq],
            bI = XW['RP'](bT, 0x2);
        return 0x1 === this['pT'][FW(0x225)] && (bI['we'] = !0x0), bI;
    } ['pq']() {
        return null !== this['pT'];
    }
}
class xP extends Xy {
    static['EJ'] = 0x0;
    static['Rm'] = null;
    static['Rn'] = null;
    static['RU'] = null;
    static['Rf'] = 0x0;
    static['PO'] = new Xq(0x1e);
    static['l'](bz) {
        this['RU'] = new k8(bz['Qw']('npc.dat'));
        let bj = new k8(bz['Qw']('npc.idx'));
        this['EJ'] = bj['oZ'](), this['Rm'] = new Int32Array(this['EJ']);
        let ba = 0x2;
        for (let bq = 0x0; bq < this['EJ']; bq++) this['Rm'][bq] = ba, ba += bj['oZ']();
        this['Rn'] = new kY(0x14, null);
        for (let bT = 0x0; bT < 0x14; bT++) this['Rn'][bT] = new xP(-0x1);
    }
    static[uh(0x321)](bz) {
        if (!this['Rn'] || !this['Rm'] || !this['RU']) throw new Error();
        for (let ba = 0x0; ba < 0x14; ba++) {
            let bq = this['Rn'][ba];
            if (bq && bq['Eq'] === bz) return bq;
        }
        this['Rf'] = (this['Rf'] + 0x1) % 0x14;
        let bj = this['Rn'][this['Rf']] = new xP(bz);
        return this['RU']['S'] = this['Rm'][bz], bj['ET'](this['RU']), bj;
    } [uh(0x260)] = null;
    ['RX'] = null;
    [uh(0x225)] = 0x1;
    ['RB'] = null;
    ['Pj'] = null;
    ['RD'] = !0x1;
    ['pI'] = -0x1;
    ['pJ'] = -0x1;
    ['pV'] = -0x1;
    ['pW'] = -0x1;
    ['pS'] = -0x1;
    ['Rx'] = null;
    ['RG'] = null;
    ['Rk'] = null;
    ['RI'] = -0x1;
    ['RJ'] = -0x1;
    ['RV'] = -0x1;
    ['pi'] = !0x0;
    ['h0'] = -0x1;
    ['PD'] = 0x80;
    ['PC'] = 0x80;
    ['l'](bz, bj) {
        const FS = uh;
        if (0x1 === bz) {
            let ba = bj['m']();
            this['RB'] = new Uint16Array(ba);
            for (let bq = 0x0; bq < ba; bq++) this['RB'][bq] = bj['oZ']();
        } else {
            if (0x2 === bz) this[FS(0x260)] = bj['o9']();
            else {
                if (0x3 === bz) this['RX'] = bj['o9']();
                else {
                    if (0xc === bz) this[FS(0x225)] = bj['oo']();
                    else {
                        if (0xd === bz) this['pI'] = bj['oZ']();
                        else {
                            if (0xe === bz) this['pJ'] = bj['oZ']();
                            else {
                                if (0x10 === bz) this['RD'] = !0x0;
                                else {
                                    if (0x11 === bz) this['pJ'] = bj['oZ'](), this['pV'] = bj['oZ'](), this['pW'] = bj['oZ'](), this['pS'] = bj['oZ']();
                                    else {
                                        if (bz >= 0x1e && bz < 0x28) this['Rk'] || (this['Rk'] = new kY(0x5, null)), this['Rk'][bz - 0x1e] = bj['o9'](), FS(0x2ad) === this['Rk'][bz - 0x1e]?.[FS(0x19a)]() && (this['Rk'][bz - 0x1e] = null);
                                        else {
                                            if (0x28 === bz) {
                                                let bT = bj['m']();
                                                this['Rx'] = new Uint16Array(bT), this['RG'] = new Uint16Array(bT);
                                                for (let bI = 0x0; bI < bT; bI++) this['Rx'][bI] = bj['oZ'](), this['RG'][bI] = bj['oZ']();
                                            } else {
                                                if (0x3c === bz) {
                                                    let bJ = bj['m']();
                                                    this['Pj'] = new Uint16Array(bJ);
                                                    for (let bV = 0x0; bV < bJ; bV++) this['Pj'][bV] = bj['oZ']();
                                                } else 0x5a === bz ? this['RI'] = bj['oZ']() : 0x5b === bz ? this['RJ'] = bj['oZ']() : 0x5c === bz ? this['RV'] = bj['oZ']() : 0x5d === bz ? this['pi'] = !0x1 : 0x5f === bz ? this['h0'] = bj['oZ']() : 0x61 === bz ? this['PD'] = bj['oZ']() : 0x62 === bz && (this['PC'] = bj['oZ']());
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } ['pa'](bz, bj, ba) {
        const Fi = uh;
        let bq = null,
            bT = null;
        if (xP['PO'] && (bT = xP['PO'][Fi(0x321)](BigInt(this['Eq'])), !bT && this['RB'])) {
            let bI = new kY(this['RB'][Fi(0x2ea)], null);
            for (let bJ = 0x0; bJ < this['RB'][Fi(0x2ea)]; bJ++) bI[bJ] = XW['Rw'](this['RB'][bJ]);
            if (bT = 0x1 === bI[Fi(0x2ea)] ? bI[0x0] : XW['Rr'](bI, bI[Fi(0x2ea)]), this['Rx'] && this['RG']) {
                for (let bV = 0x0; bV < this['Rx'][Fi(0x2ea)]; bV++) bT?.['wW'](this['Rx'][bV], this['RG'][bV]);
            }
            bT?.['Rl'](), bT?.['R8'](0x40, 0x352, -0x1e, -0x32, -0x1e, !0x0), bT && xP['PO'][Fi(0x2c2)](BigInt(this['Eq']), bT);
        }
        return bT ? (bq = XW['RY'](bT, !this['RD']), -0x1 !== bz && -0x1 !== bj ? bq['RR'](bz, bj, ba) : -0x1 !== bz && bq['Rc'](bz), 0x80 === this['PD'] && 0x80 === this['PC'] || bq['wh'](this['PD'], this['PC'], this['PD']), bq['R9'](), bq['R1'] = null, bq['R0'] = null, 0x1 === this[Fi(0x225)] && (bq['we'] = !0x0), bq) : null;
    } ['Pq']() {
        const O0 = uh;
        if (!this['Pj']) return null;
        let bz, bj = new kY(this['Pj']['length'], null);
        for (let ba = 0x0; ba < this['Pj'][O0(0x2ea)]; ba++) bj[ba] = XW['Rw'](this['Pj'][ba]);
        if (bz = 0x1 === bj[O0(0x2ea)] ? bj[0x0] : XW['Rr'](bj, bj['length']), this['Rx'] && this['RG']) {
            for (let bq = 0x0; bq < this['Rx'][O0(0x2ea)]; bq++) bz?.['wW'](this['Rx'][bq], this['RG'][bq]);
        }
        return bz;
    }
}
class xp extends k2 {
    ['h1'] = -0x1;
    ['h2'] = 0x0;
    ['h3'] = 0x0;
    ['h4'] = 0x0;
    ['x'] = 0x0;
    ['h5'] = 0x0;
    ['h6'] = 0x0;
    ['QX'] = 0x0;
    ['h7'] = 0x0;
    ['z'] = 0x0;
    ['h8'] = 0x0;
    ['h9'] = 0x0;
}
class xh extends Xy {
    static['EJ'] = 0x0;
    static['EI'] = [];
    static['ho'] = 0x0;
    static['hQ'] = [];
    static['l'](bz) {
        const O1 = uh;
        let bj = new k8(bz['Qw'](O1(0x241)));
        this['EJ'] = bj['oZ']();
        for (let ba = 0x0; ba < this['EJ']; ba++) this['EI'][ba] = new xh(ba)['ET'](bj);
    } ['hZ'] = 0x0;
    ['hY'] = 0x0;
    ['hQ'] = !0x1;
    ['hE'] = !0x0;
    ['hd'] = 0x0;
    ['hw'] = 0x0;
    ['hR'] = !0x1;
    ['hc'] = !0x1;
    ['l'](bz, bj) {
        0x1 === bz ? this['hZ'] = bj['m']() : 0x2 === bz ? this['hY'] = bj['m']() : 0x3 === bz ? (this['hQ'] = !0x0, xh['hQ'][xh['ho']++] = this['Eq']) : 0x4 === bz ? this['hE'] = !0x1 : 0x5 === bz ? this['hd'] = bj['oZ']() : 0x6 === bz ? this['hR'] = !0x0 : 0x7 === bz ? this['hw'] = bj['op']() : 0x8 === bz ? this['hc'] = !0x0 : 0xa === bz && (this['Ea'] = bj['o9']());
    }
}
class xl {
    static['EI'] = [];
    static['hr'] = null;
    static['PO'] = null;
    static['l'](bz, bj, ba) {
        const O2 = uh;
        this['hr'] = new Xq(0xc350), this['PO'] = new Xq(0xc350);
        let bq = new k8(bz['Qw'](O2(0x1c7))),
            bT = -0x1;
        for (bq['S'] += 0x2; bq['S'] < bq['oR'];) {
            let bI = bq['oZ']();
            0xffff === bI && (bT = bq['oZ'](), bI = bq['oZ']());
            let bJ = this['EI'][bI] = new xl();
            bJ['hH'] = bI, bJ['QX'] = bT, bJ['hP'] = bq['m'](), bJ['hp'] = bq['m'](), bJ['hh'] = bq['oZ'](), bJ['ZR'] = bq['oZ'](), bJ['Zc'] = bq['oZ'](), bJ['hl'] = bq['m'](), 0x0 === bJ['hl'] ? bJ['hl'] = -0x1 : bJ['hl'] = (bJ['hl'] - 0x1 << 0x8) + bq['m']();
            let bV = bq['m']();
            if (bV > 0x0) {
                bJ['hK'] = new Uint8Array(bV), bJ['hN'] = new Uint16Array(bV);
                for (let xg = 0x0; xg < bV; xg++) bJ['hK'][xg] = bq['m'](), bJ['hN'][xg] = bq['oZ']();
            }
            let xG = bq['m']();
            if (xG > 0x0) {
                bJ['hv'] = new kY(xG, null);
                for (let xu = 0x0; xu < xG; xu++) {
                    let xM = bq['oZ'](),
                        xF = new Uint16Array(xM);
                    bJ['hv'][xu] = xF;
                    for (let xO = 0x0; xO < xM; xO++) xF[xO] = bq['oZ']();
                }
            }
            if (0x0 === bJ['hP']) {
                bJ['hn'] = bq['oZ'](), bJ['hU'] = 0x1 === bq['m']();
                let xD = bq['m']();
                bJ['hm'] = new Array(xD), bJ['hf'] = new Array(xD), bJ['hL'] = new Array(xD);
                for (let xC = 0x0; xC < xD; xC++) bJ['hm'][xC] = bq['oZ'](), bJ['hf'][xC] = bq['oc'](), bJ['hL'][xC] = bq['oc']();
            }
            if (0x1 === bJ['hP'] && (bq['S'] += 0x3), 0x2 === bJ['hP']) {
                bJ['he'] = new Int32Array(bJ['ZR'] * bJ['Zc']), bJ['hs'] = new Int32Array(bJ['ZR'] * bJ['Zc']), bJ['hA'] = 0x1 === bq['m'](), bJ['hb'] = 0x1 === bq['m'](), bJ['hk'] = 0x1 === bq['m'](), bJ['hB'] = bq['m'](), bJ['hX'] = bq['m'](), bJ['hx'] = new Int16Array(0x14), bJ['hG'] = new Int16Array(0x14), bJ['hg'] = new kY(0x14, null);
                for (let xy = 0x0; xy < 0x14; xy++)
                    if (0x1 === bq['m']()) {
                        bJ['hx'][xy] = bq['oc'](), bJ['hG'][xy] = bq['oc']();
                        let xz = bq['o9']();
                        if (xz[O2(0x2ea)] > 0x0) {
                            let xj = xz[O2(0x2ae)](',');
                            bJ['hg'][xy] = this['hu'](bj, xz[O2(0x250)](0x0, xj), parseInt(xz['substring'](xj + 0x1), 0xa));
                        }
                    } bJ['hM'] = new kY(0x5, null);
                for (let xa = 0x0; xa < 0x5; xa++) {
                    let xq = bq['o9']();
                    bJ['hM'][xa] = xq, 0x0 === xq[O2(0x2ea)] && (bJ['hM'][xa] = null);
                }
            }
            if (0x3 === bJ['hP'] && (bJ['hF'] = 0x1 === bq['m']()), 0x4 === bJ['hP'] || 0x1 === bJ['hP']) {
                bJ['hO'] = 0x1 === bq['m']();
                let xT = bq['m']();
                ba && (bJ['hD'] = ba[xT]), bJ['hC'] = 0x1 === bq['m']();
            }
            if (0x4 === bJ['hP'] && (bJ['hy'] = bq['o9'](), bJ['hz'] = bq['o9']()), 0x1 !== bJ['hP'] && 0x3 !== bJ['hP'] && 0x4 !== bJ['hP'] || (bJ['c4'] = bq['op']()), 0x3 !== bJ['hP'] && 0x4 !== bJ['hP'] || (bJ['hj'] = bq['op'](), bJ['ha'] = bq['op']()), 0x5 === bJ['hP']) {
                let xI = bq['o9']();
                if (xI['length'] > 0x0) {
                    let xV = xI[O2(0x2ae)](',');
                    bJ['hq'] = this['hu'](bj, xI[O2(0x250)](0x0, xV), parseInt(xI[O2(0x250)](xV + 0x1), 0xa));
                }
                let xJ = bq['o9']();
                if (xJ[O2(0x2ea)] > 0x0) {
                    let xW = xJ['lastIndexOf'](',');
                    bJ['hT'] = this['hu'](bj, xJ[O2(0x250)](0x0, xW), parseInt(xJ[O2(0x250)](xW + 0x1), 0xa));
                }
            }
            if (0x6 === bJ['hP']) {
                let xS = bq['m']();
                0x0 !== xS && (bJ['Rw'] = this['t2']((xS - 0x1 << 0x8) + bq['m']()));
                let xi = bq['m']();
                0x0 !== xi && (bJ['hI'] = this['t2']((xi - 0x1 << 0x8) + bq['m']())), bJ['RO'] = bq['m'](), 0x0 === bJ['RO'] ? bJ['RO'] = -0x1 : bJ['RO'] = (bJ['RO'] - 0x1 << 0x8) + bq['m'](), bJ['hJ'] = bq['m'](), 0x0 === bJ['hJ'] ? bJ['hJ'] = -0x1 : bJ['hJ'] = (bJ['hJ'] - 0x1 << 0x8) + bq['m'](), bJ['hV'] = bq['oZ'](), bJ['hW'] = bq['oZ'](), bJ['hS'] = bq['oZ']();
            }
            if (0x7 === bJ['hP']) {
                bJ['he'] = new Int32Array(bJ['ZR'] * bJ['Zc']), bJ['hs'] = new Int32Array(bJ['ZR'] * bJ['Zc']), bJ['hO'] = 0x1 === bq['m']();
                let G0 = bq['m']();
                ba && (bJ['hD'] = ba[G0]), bJ['hC'] = 0x1 === bq['m'](), bJ['c4'] = bq['op'](), bJ['hB'] = bq['oc'](), bJ['hX'] = bq['oc'](), bJ['hb'] = 0x1 === bq['m'](), bJ['hM'] = new kY(0x5, null);
                for (let G1 = 0x0; G1 < 0x5; G1++) {
                    let G2 = bq['o9']();
                    bJ['hM'][G1] = G2, 0x0 === G2['length'] && (bJ['hM'][G1] = null);
                }
            }
            0x2 !== bJ['hp'] && 0x2 !== bJ['hP'] || (bJ['hi'] = bq['o9'](), bJ['l0'] = bq['o9'](), bJ['l1'] = bq['oZ']()), 0x1 !== bJ['hp'] && 0x4 !== bJ['hp'] && 0x5 !== bJ['hp'] && 0x6 !== bJ['hp'] || (bJ['l2'] = bq['o9'](), 0x0 === bJ['l2'][O2(0x2ea)] && (0x1 === bJ['hp'] ? bJ['l2'] = 'Ok' : 0x4 === bJ['hp'] || 0x5 === bJ['hp'] ? bJ['l2'] = O2(0x14e) : 0x6 === bJ['hp'] && (bJ['l2'] = O2(0x17b))));
        }
        this['hr'] = null, this['PO'] = null;
    }
    static['hu'](bz, bj, ba) {
        const O3 = uh;
        let bq, bT = xZ['HD'](bj) << 0x8n | BigInt(ba);
        if (this['hr']) {
            let bI = this['hr']['get'](bT);
            if (bI) return bI;
        }
        try {
            bq = xR['Zz'](bz, bj, ba), this['hr']?.[O3(0x2c2)](bT, bq);
        } catch (bJ) {
            return null;
        }
        return bq;
    }
    static['t2'](bz) {
        const O4 = uh;
        if (this['PO']) {
            let ba = this['PO'][O4(0x321)](BigInt(bz));
            if (ba) return ba;
        }
        let bj = XW['Rw'](bz);
        return this['PO']?.[O4(0x2c2)](BigInt(bz), bj), bj;
    } ['hD'] = null;
    ['hB'] = 0x0;
    ['Hd'] = 0x0;
    ['hs'] = null;
    ['hC'] = !0x1;
    ['hg'] = null;
    ['hJ'] = -0x1;
    ['hi'] = null;
    ['hH'] = -0x1;
    ['hP'] = -0x1;
    ['hV'] = 0x0;
    ['hz'] = null;
    ['QX'] = -0x1;
    ['hG'] = null;
    ['hp'] = -0x1;
    ['l0'] = null;
    ['hM'] = null;
    ['hW'] = 0x0;
    ['hy'] = null;
    ['l3'] = 0x0;
    ['hh'] = 0x0;
    ['ZR'] = 0x0;
    ['hl'] = -0x1;
    ['Zc'] = 0x0;
    ['l1'] = -0x1;
    ['hN'] = null;
    ['y'] = 0x0;
    ['l2'] = null;
    ['hn'] = 0x0;
    ['ha'] = 0x0;
    ['Hw'] = 0x0;
    ['c4'] = 0x0;
    ['hv'] = null;
    ['hj'] = 0x0;
    ['hq'] = null;
    ['hx'] = null;
    ['hT'] = null;
    ['hX'] = 0x0;
    ['he'] = null;
    ['x'] = 0x0;
    ['hf'] = null;
    ['hm'] = null;
    ['hI'] = null;
    ['hL'] = null;
    ['Rw'] = null;
    ['hS'] = 0x0;
    ['hK'] = null;
    ['RO'] = -0x1;
    ['hO'] = !0x1;
    ['hF'] = !0x1;
    ['hA'] = !0x1;
    ['hU'] = !0x1;
    ['hk'] = !0x1;
    ['hb'] = !0x1;
    ['t2'](bz, bj, ba) {
        let bq = this['Rw'];
        if (ba && (bq = this['hI']), !bq) return null;
        if (-0x1 === bz && -0x1 === bj && !bq['wX']) return bq;
        let bT = XW['Rh'](bq, !0x0, !0x0, !0x1);
        return -0x1 === bz && -0x1 === bj || bT['Rl'](), -0x1 !== bz && bT['Rc'](bz), -0x1 !== bj && bT['Rc'](bj), bT['R8'](0x40, 0x300, -0x32, -0xa, -0x32, !0x0), bT;
    } ['l4']() {
        const O5 = uh;
        if (this['QX'] === this['hH']) return this['x'];
        let bz = xl['EI'][this['QX']];
        if (!bz['hm'] || !bz['hf'] || !bz['hL']) return this['x'];
        let bj = bz['hm'][O5(0x269)](this['hH']);
        if (-0x1 === bj) return this['x'];
        let ba = bz['hf'][bj];
        for (; bz['QX'] !== bz['hH'];) {
            let bq = xl['EI'][bz['QX']];
            bq['hm'] && bq['hf'] && bq['hL'] && (bj = bq['hm'][O5(0x269)](bz['hH']), -0x1 !== bj && (ba += bq['hf'][bj])), bz = bq;
        }
        return ba;
    } ['l5']() {
        const O6 = uh;
        if (this['QX'] === this['hH']) return this['y'];
        let bz = xl['EI'][this['QX']];
        if (!bz['hm'] || !bz['hf'] || !bz['hL']) return this['y'];
        let bj = bz['hm'][O6(0x269)](this['hH']);
        if (-0x1 === bj) return this['y'];
        let ba = bz['hL'][bj];
        for (; bz['QX'] !== bz['hH'];) {
            let bq = xl['EI'][bz['QX']];
            bq['hm'] && bq['hf'] && bq['hL'] && (bj = bq['hm'][O6(0x269)](bz['hH']), -0x1 !== bj && (ba += bq['hL'][bj])), bz = bq;
        }
        return ba;
    } ['l6'](bz) {
        let bj = this['l4'](),
            ba = this['l5']();
        Xu['Zs'](bj, ba, this['ZR'], this['Zc'], bz);
    } ['l7'](bz, bj) {
        if (this['QX'] === this['hH']) return;
        this['x'] = 0x0, this['y'] = 0x0;
        let ba = xl['EI'][this['QX']];
        if (ba['hm'] && ba['hf'] && ba['hL']) {
            let bq = ba['hm']['indexOf'](this['hH']); - 0x1 !== bq && (ba['hf'][bq] = bz, ba['hL'][bq] = bj);
        }
    } ['l8']() {
        const O7 = uh;
        if (this['QX'] === this['hH']) return;
        let bz = xl['EI'][this['QX']];
        if (bz['hm'] && bz['hf'] && bz['hL']) {
            let bj = bz['hm']['indexOf'](this['hH']); - 0x1 !== bj && (bz['hm'][O7(0x2e6)](bj, 0x1), bz['hf'][O7(0x2e6)](bj, 0x1), bz['hL']['splice'](bj, 0x1));
        }
    }
}
class xK extends xY {
    ['Hw'] = 0x0;
    ['l9'];
    ['lo'];
    ['lQ'];
    ['Hd'] = 0x0;
    ['lZ'] = 0x0;
    ['lY'] = 0x0;
    ['lE'] = 0x0;
    ['ld'];
    ['lw'] = 0x0;
    ['lR'];
    ['y'] = 0x0;
    ['lc'] = 0x0;
    ['lr'] = 0x0;
    ['cp'] = 0x0;
    ['lH'];
    ['lP'];
    ['lp'];
    ['lh'];
    ['ll'];
    ['lK'];
    ['lN'] = !0x1;
    ['z'] = 0x0;
    ['x'] = 0x0;
    ['wm']() {
        let bz = this['lo']['t2'](),
            bj = XW['Rh'](bz, !0x0, !this['lo']['RD'], !0x1);
        return this['lo']['HE'] && this['lo']['HE']['t4'] && (bj['Rl'](), bj['Rc'](this['lo']['HE']['t4'][this['Hd']]), bj['R1'] = null, bj['R0'] = null), 0x80 === this['lo']['PD'] && 0x80 === this['lo']['PC'] || bj['wh'](this['lo']['PD'], this['lo']['PC'], this['lo']['PD']), bj['Rp'](this['lE']), bj['R8'](0x40 + this['lo']['Ry'], 0x352 + this['lo']['Rz'], -0x1e, -0x32, -0x1e, !0x0), bj;
    } ['lv'](bz, bj, ba, bq) {
        const O8 = uh;
        if (!this['lN']) {
            let bI = bz - this['lQ'],
                bJ = ba - this['l9'],
                bV = Math[O8(0x1d3)](bI * bI + bJ * bJ);
            this['x'] = this['lQ'] + bI * this['ll'] / bV, this['z'] = this['l9'] + bJ * this['ll'] / bV, this['y'] = this['lR'];
        }
        let bT = this['lp'] + 0x1 - bq;
        this['lY'] = (bz - this['x']) / bT, this['lw'] = (ba - this['z']) / bT, this['lr'] = Math[O8(0x1d3)](this['lY'] * this['lY'] + this['lw'] * this['lw']), this['lN'] || (this['lZ'] = -this['lr'] * Math['tan'](0.02454369 * this['lh'])), this['lc'] = 0x2 * (bj - this['y'] - this['lZ'] * bT) / (bT * bT);
    }
    constructor(bz, bj, ba, bq, bT, bI, bJ, bV, xG, xg, xu) {
        super(), this['lp'] = bJ, this['lQ'] = ba, this['lP'] = bI, this['lR'] = bq, this['lh'] = bV, this['lo'] = xd['EI'][bz], this['ld'] = bj, this['l9'] = bT, this['lK'] = xg, this['lH'] = xu, this['ll'] = xG;
    } ['ln'](bz) {
        const O9 = uh;
        if (this['lN'] = !0x0, this['x'] += this['lY'] * bz, this['z'] += this['lw'] * bz, this['y'] += this['lZ'] * bz + 0.5 * this['lc'] * bz * bz, this['lZ'] += this['lc'] * bz, this['cp'] = 325.949 * Math[O9(0x325)](this['lY'], this['lw']) + 0x400 & 0x7ff, this['lE'] = 325.949 * Math[O9(0x325)](this['lZ'], this['lr']) & 0x7ff, this['lo']['HE'] && this['lo']['HE']['tQ']) {
            for (this['Hw'] += bz; this['Hw'] > this['lo']['HE']['tQ'][this['Hd']];) this['Hw'] -= this['lo']['HE']['tQ'][this['Hd']] + 0x1, this['Hd']++, this['Hd'] >= this['lo']['HE']['tZ'] && (this['Hd'] = 0x0);
        }
    }
}
class xN extends xY {
    ['Hw'] = 0x0;
    ['lU'];
    ['lP'];
    ['lm'] = !0x1;
    ['Hd'] = 0x0;
    ['x'];
    ['y'];
    ['z'];
    ['lf'];
    ['wm']() {
        let bz = this['lf']['t2'](),
            bj = XW['Rh'](bz, !0x0, !this['lf']['RD'], !0x1);
        return !this['lm'] && this['lf']['HE'] && this['lf']['HE']['t4'] && (bj['Rl'](), bj['Rc'](this['lf']['HE']['t4'][this['Hd']]), bj['R1'] = null, bj['R0'] = null), 0x80 === this['lf']['PD'] && 0x80 === this['lf']['PC'] || bj['wh'](this['lf']['PD'], this['lf']['PC'], this['lf']['PD']), 0x0 !== this['lf']['Py'] && (0x5a === this['lf']['Py'] ? bj['Rd']() : 0xb4 === this['lf']['Py'] ? (bj['Rd'](), bj['Rd']()) : 0x10e === this['lf']['Py'] && (bj['Rd'](), bj['Rd'](), bj['Rd']())), bj['R8'](0x40 + this['lf']['Ry'], 0x352 + this['lf']['Rz'], -0x1e, -0x32, -0x1e, !0x0), bj;
    }
    constructor(bz, bj, ba, bq, bT, bI, bJ) {
        super(), this['lU'] = bj, this['lf'] = xd['EI'][bz], this['z'] = bq, this['x'] = ba, this['y'] = bT, this['lP'] = bI + bJ;
    } ['ln'](bz) {
        if (this['lf']['HE'] && this['lf']['HE']['tQ']) {
            for (this['Hw'] += bz; this['Hw'] > this['lf']['HE']['tQ'][this['Hd']];) this['Hw'] -= this['lf']['HE']['tQ'][this['Hd']] + 0x1, this['Hd']++, this['Hd'] >= this['lf']['HE']['tZ'] && (this['Hd'] = 0x0, this['lm'] = !0x0);
        }
    }
}
class xv extends k2 {
    ['lL'];
    ['le'];
    constructor(bz, bj) {
        super(), this['le'] = bj, this['lL'] = bz;
    }
}
class xn {
    ['U'];
    ['ls'](bz) {
        return this['U'] = 0x5deece66dn * this['U'] + 0xbn & (0x1n << 0x30n) - 0x1n, Number(this['U']) >>> 0x30 - bz;
    } ['oH']() {
        return this['ls'](0x20);
    } ['lA'](bz) {
        this['U'] = (0x5deece66dn ^ bz) & (0x1n << 0x30n) - 0x1n;
    }
    constructor(bz) {
        this['U'] = (0x5deece66dn ^ bz) & (0x1n << 0x30n) - 0x1n;
    }
}
class xU extends k4 {
    ['lb'] = [];
    ['lk'] = new Int32Array(0x100);
    ['lB'] = new Int32Array(0x5e);
    ['Zc'] = 0x0;
    ['lX'] = new Int32Array(0x5f);
    [uh(0x291)] = new xn(BigInt(Date[uh(0x22b)]()));
    static['lx'] = [];
    ['lG'] = new Int32Array(0x5e);
    ['lg'] = new Int32Array(0x5e);
    ['lu'] = new Int32Array(0x5e);
    static['lM'] = uh(0x1ff);
    static {
        let bz = navigator[uh(0x283)]['includes']('Capacitor');
        for (let bj = 0x0; bj < 0x100; bj++) {
            let ba = xU['lM'][uh(0x269)](String[uh(0x226)](bj));
            bz && ba >= 0x3f && ba--, -0x1 === ba && (ba = 0x4a), xU['lx'][bj] = ba;
        }
    } ['lF'](bz, bj, ba, bq, bT) {
        const Oo = uh;
        if (!ba) return;
        bz |= 0x0, bj |= 0x0, bz -= this['lO'](ba) / 0x2 | 0x0;
        let bI = bj - this['Zc'];
        for (let bJ = 0x0; bJ < ba[Oo(0x2ea)]; bJ++) {
            let bV = xU['lx'][ba[Oo(0x158)](bJ)];
            0x5e != bV && this['lD'](this['lb'][bV], bz + this['lG'][bV], bI + this['lg'][bV] + (0x5 * Math[Oo(0x2db)](bJ / 0x2 + bT / 0x5) | 0x0), this['lu'][bV], this['lB'][bV], bq), bz += this['lX'][bV];
        }
    } ['lC'](bz, bj, ba, bq, bT) {
        const OQ = uh;
        bz |= 0x0, bj |= 0x0;
        let bI = ba[OQ(0x2ea)];
        bj -= this['Zc'];
        for (let bJ = 0x0; bJ < bI; bJ++)
            if ('@' === ba[OQ(0x18d)](bJ) && bJ + 0x4 < bI && '@' === ba['charAt'](bJ + 0x4)) bq = this['ly'](ba[OQ(0x250)](bJ + 0x1, bJ + 0x4)), bJ += 0x4;
            else {
                let bV = xU['lx'][ba[OQ(0x158)](bJ)];
                0x5e !== bV && (bT && this['lD'](this['lb'][bV], bz + this['lG'][bV] + 0x1, bj + this['lg'][bV] + 0x1, this['lu'][bV], this['lB'][bV], 0x0), this['lD'](this['lb'][bV], bz + this['lG'][bV], bj + this['lg'][bV], this['lu'][bV], this['lB'][bV], bq)), bz += this['lX'][bV];
            }
    } ['lO'](bz) {
        const OZ = uh;
        if (!bz) return 0x0;
        let bj = bz[OZ(0x2ea)],
            ba = 0x0;
        for (let bq = 0x0; bq < bj; bq++) '@' === bz[OZ(0x18d)](bq) && bq + 0x4 < bj && '@' === bz[OZ(0x18d)](bq + 0x4) ? bq += 0x4 : ba += this['lk'][bz[OZ(0x158)](bq)];
        return ba;
    }
    static['Zz'](bz, bj) {
        const OY = uh;
        let ba = new k8(bz['Qw'](bj + OY(0x2c9))),
            bq = new k8(bz['Qw']('index.dat'));
        bq['S'] = ba['oZ']() + 0x4;
        let bT = bq['m']();
        bT > 0x0 && (bq['S'] += 0x3 * (bT - 0x1));
        let bI = new xU();
        for (let bJ = 0x0; bJ < 0x5e; bJ++) {
            bI['lG'][bJ] = bq['m'](), bI['lg'][bJ] = bq['m']();
            let bV = bI['lu'][bJ] = bq['oZ'](),
                xG = bI['lB'][bJ] = bq['oZ'](),
                xg = bq['m'](),
                xu = bV * xG;
            if (bI['lb'][bJ] = new Int8Array(xu), 0x0 === xg) {
                for (let xM = 0x0; xM < bV * xG; xM++) bI['lb'][bJ][xM] = ba['oo']();
            } else {
                if (0x1 === xg) {
                    for (let xF = 0x0; xF < bV; xF++)
                        for (let xO = 0x0; xO < xG; xO++) bI['lb'][bJ][xF + xO * bV] = ba['oo']();
                }
            }
            xG > bI['Zc'] && (bI['Zc'] = xG), bI['lG'][bJ] = 0x1, bI['lX'][bJ] = bV + 0x2;
            {
                let xD = 0x0;
                for (let xC = xG / 0x7 | 0x0; xC < xG; xC++) xD += bI['lb'][bJ][xC * bV];
                xD <= (xG / 0x7 | 0x0) && (bI['lX'][bJ]--, bI['lG'][bJ] = 0x0);
            } {
                let xy = 0x0;
                for (let xz = xG / 0x7 | 0x0; xz < xG; xz++) xy += bI['lb'][bJ][bV + xz * bV - 0x1];
                xy <= (xG / 0x7 | 0x0) && bI['lX'][bJ]--;
            }
        }
        bI['lX'][0x5e] = bI['lX'][0x8];
        for (let xj = 0x0; xj < 0x100; xj++) bI['lk'][xj] = bI['lX'][xU['lx'][xj]];
        return bI;
    } ['lz'](bz, bj, ba, bq) {
        const OE = uh;
        if (!ba) return;
        bz |= 0x0, bj |= 0x0;
        let bT = ba['length'];
        bj -= this['Zc'];
        for (let bI = 0x0; bI < bT; bI++) {
            let bJ = xU['lx'][ba[OE(0x158)](bI)];
            0x5e !== bJ && this['lD'](this['lb'][bJ], bz + this['lG'][bJ], bj + this['lg'][bJ], this['lu'][bJ], this['lB'][bJ], bq), bz += this['lX'][bJ];
        }
    } ['lj'](bz, bj, ba, bq, bT) {
        bz |= 0x0, bj |= 0x0, this['lC'](bz - (this['lO'](ba) / 0x2 | 0x0), bj, ba, bq, bT);
    } ['la'](bz, bj, ba, bq, bT, bI, bJ, bV, xG) {
        let xg = -((bz |= 0x0) >> 0x2);
        bz = -(0x3 & bz);
        for (let xu = -(bj |= 0x0); xu < 0x0; xu++) {
            for (let xM = xg; xM < 0x0; xM++) 0x0 === ba[bq++] ? bJ++ : bI[bJ++] = xG, 0x0 === ba[bq++] ? bJ++ : bI[bJ++] = xG, 0x0 === ba[bq++] ? bJ++ : bI[bJ++] = xG, 0x0 === ba[bq++] ? bJ++ : bI[bJ++] = xG;
            for (let xF = bz; xF < 0x0; xF++) 0x0 === ba[bq++] ? bJ++ : bI[bJ++] = xG;
            bJ += bV, bq += bT;
        }
    } ['ly'](bz) {
        const Od = uh;
        return Od(0x2b5) === bz ? 0xff0000 : Od(0x315) === bz ? 0xff00 : Od(0x2dc) === bz ? 0xff : Od(0x26e) === bz ? 0xffff00 : 'cya' === bz ? 0xffff : Od(0x1c5) === bz ? 0xff00ff : Od(0x2b4) === bz ? 0xffffff : 'bla' === bz ? 0x0 : Od(0x254) === bz ? 0xff9040 : Od(0x19c) === bz ? 0x800000 : Od(0x2c3) === bz ? 0x80 : Od(0x1bb) === bz ? 0xffb000 : Od(0x190) === bz ? 0xff7000 : Od(0x308) === bz ? 0xff3000 : Od(0x252) === bz ? 0xc0ff00 : Od(0x1e6) === bz ? 0x80ff00 : Od(0x27d) === bz ? 0x40ff00 : 0x0;
    } ['lq'](bz, bj, ba, bq, bT, bI, bJ) {
        ba |= 0x0, bq |= 0x0;
        let bV = (bz |= 0x0) + (bj |= 0x0) * Xu['ZR'],
            xG = Xu['ZR'] - ba,
            xg = 0x0,
            xu = 0x0;
        if (bj < Xu['Zr']) {
            let xM = Xu['Zr'] - bj;
            bq -= xM, bj = Xu['Zr'], xu += xM * ba, bV += xM * Xu['ZR'];
        }
        if (bj + bq >= Xu['Zh'] && (bq -= bj + bq + 0x1 - Xu['Zh']), bz < Xu['Zl']) {
            let xF = Xu['Zl'] - bz;
            ba -= xF, bz = Xu['Zl'], xu += xF, bV += xF, xg += xF, xG += xF;
        }
        if (bz + ba >= Xu['Zt']) {
            let xO = bz + ba + 0x1 - Xu['Zt'];
            ba -= xO, xg += xO, xG += xO;
        }
        ba > 0x0 && bq > 0x0 && this['lT'](ba, bq, Xu['Zw'], bV, xG, bJ, xu, xg, bT, bI);
    } ['split'](bz, bj) {
        const Ow = uh;
        if (0x0 === bz[Ow(0x2ea)]) return [bz];
        let ba = [];
        for (; bz[Ow(0x2ea)] > 0x0;) {
            if (this['lO'](bz) <= bj && -0x1 === bz[Ow(0x269)]('|')) {
                ba['push'](bz);
                break;
            }
            let bq = bz[Ow(0x2ea)];
            for (let bT = 0x0; bT < bz[Ow(0x2ea)]; bT++)
                if ('\x20' === bz[bT]) {
                    if (this['lO'](bz['substring'](0x0, bT)) > bj) break;
                    bq = bT;
                } else {
                    if ('|' === bz[bT]) {
                        bq = bT;
                        break;
                    }
                } ba[Ow(0x1d1)](bz[Ow(0x250)](0x0, bq)), bz = bz[Ow(0x250)](bq + 0x1);
        }
        return ba;
    } ['lI'](bz, bj, ba, bq, bT = !0x0) {
        bz |= 0x0, bj |= 0x0, bT && this['lz'](bz - this['lO'](ba) + 0x1, bj + 0x1, ba, 0x0), this['lz'](bz - this['lO'](ba), bj, ba, bq);
    } ['lT'](bz, bj, ba, bq, bT, bI, bJ, bV, xG, xg) {
        bz |= 0x0;
        let xu = ((0xff00ff & xG) * xg & 0xff00ff00) + ((0xff00 & xG) * xg & 0xff0000) >> 0x8,
            xM = 0x100 - xg;
        for (let xF = -(bj |= 0x0); xF < 0x0; xF++) {
            for (let xO = -bz; xO < 0x0; xO++)
                if (0x0 === bI[bJ++]) bq++;
                else {
                    let xD = ba[bq];
                    ba[bq++] = (((0xff00ff & xD) * xM & 0xff00ff00) + ((0xff00 & xD) * xM & 0xff0000) >> 0x8) + xu;
                } bq += bT, bJ += bV;
        }
    } ['lJ'](bz, bj, ba, bq, bT, bI) {
        const OR = uh;
        bz |= 0x0, bj |= 0x0, this['random']['lA'](BigInt(bI));
        let bJ = 0xc0 + (0x1f & this[OR(0x291)]['oH']()),
            bV = bj - this['Zc'];
        for (let xG = 0x0; xG < ba[OR(0x2ea)]; xG++)
            if ('@' === ba[OR(0x18d)](xG) && xG + 0x4 < ba['length'] && '@' === ba[OR(0x18d)](xG + 0x4)) bq = this['ly'](ba['substring'](xG + 0x1, xG + 0x4)), xG += 0x4;
            else {
                let xg = xU['lx'][ba['charCodeAt'](xG)];
                0x5e !== xg && (bT && this['lq'](bz + this['lG'][xg] + 0x1, bV + this['lg'][xg] + 0x1, this['lu'][xg], this['lB'][xg], 0x0, 0xc0, this['lb'][xg]), this['lq'](bz + this['lG'][xg], bV + this['lg'][xg], this['lu'][xg], this['lB'][xg], bq, bJ, this['lb'][xg])), bz += this['lX'][xg], 0x3 & this[OR(0x291)]['oH']() || bz++;
            }
    } ['lD'](bz, bj, ba, bq, bT, bI) {
        bq |= 0x0, bT |= 0x0;
        let bJ = (bj |= 0x0) + (ba |= 0x0) * Xu['ZR'],
            bV = Xu['ZR'] - bq,
            xG = 0x0,
            xg = 0x0;
        if (ba < Xu['Zr']) {
            let xu = Xu['Zr'] - ba;
            bT -= xu, ba = Xu['Zr'], xg += xu * bq, bJ += xu * Xu['ZR'];
        }
        if (ba + bT >= Xu['Zh'] && (bT -= ba + bT + 0x1 - Xu['Zh']), bj < Xu['Zl']) {
            let xM = Xu['Zl'] - bj;
            bq -= xM, bj = Xu['Zl'], xg += xM, bJ += xM, xG += xM, bV += xM;
        }
        if (bj + bq >= Xu['Zt']) {
            let xF = bj + bq + 0x1 - Xu['Zt'];
            bq -= xF, xG += xF, bV += xF;
        }
        bq > 0x0 && bT > 0x0 && this['la'](bq, bT, bz, xg, xG, Xu['Zw'], bJ, bV, bI);
    } ['lV'](bz, bj, ba, bq) {
        ba && (bz |= 0x0, bj |= 0x0, this['lz'](bz - (this['lO'](ba) / 0x2 | 0x0), bj, ba, bq));
    }
}
class xm {
    ['db'];
    async ['lW'](bz) {
        return await new Promise(bj => {
            const Oc = o5;
            let ba = this['db'][Oc(0x1de)]('cache', Oc(0x229))[Oc(0x300)](Oc(0x2e9))[Oc(0x321)](bz);
            ba['onsuccess'] = () => {
                const Or = Oc;
                ba[Or(0x1b6)] ? bj(new Uint8Array(ba[Or(0x1b6)])) : bj(void 0x0);
            }, ba[Oc(0x319)] = () => {
                bj(void 0x0);
            };
        });
    }
    static async [uh(0x26b)]() {
        return await new Promise((bz, bj) => {
            const OH = o5;
            let ba = indexedDB[OH(0x259)](OH(0x2c7), 0x1);
            ba[OH(0x141)] = bq => {
                let bT = bq['target'];
                bz(bT['result']);
            }, ba[OH(0x147)] = bq => {
                const OP = OH;
                bq['target'][OP(0x1b6)][OP(0x1e7)](OP(0x2e9));
            }, ba[OH(0x319)] = bq => {
                const Op = OH;
                let bT = bq[Op(0x232)];
                bj(bT['result']);
            };
        });
    }
    async ['lS'](bz, bj) {
        if (null !== bj) return await new Promise((ba, bq) => {
            const Oh = o5;
            let bT = this['db'][Oh(0x1de)](Oh(0x2e9), Oh(0x211))[Oh(0x300)](Oh(0x2e9))['put'](bj, bz);
            bT['onsuccess'] = () => {
                ba();
            }, bT['onerror'] = () => {
                ba();
            };
        });
    }
    constructor(bz) {
        const Ol = uh;
        bz['onerror'] = this['onerror'], bz[Ol(0x248)] = this[Ol(0x248)], this['db'] = bz;
    } [uh(0x248)] = bz => {};
    [uh(0x319)] = bz => {};
}
class xf {
    ['li'] = new Int32Array(0x100);
    ['count'] = 0x0;
    ['c'] = 0x0;
    ['a'] = 0x0;
    ['b'] = 0x0;
    ['K0'] = new Int32Array(0x100);
    ['K1']() {
        this['c']++, this['b'] += this['c'];
        for (let bz = 0x0; bz < 0x100; bz++) {
            let bj, ba = this['li'][bz],
                bq = 0x3 & bz;
            0x0 === bq ? this['a'] ^= this['a'] << 0xd : 0x1 === bq ? this['a'] ^= this['a'] >>> 0x6 : 0x2 === bq ? this['a'] ^= this['a'] << 0x2 : 0x3 === bq && (this['a'] ^= this['a'] >>> 0x10), this['a'] += this['li'][bz + 0x80 & 0xff], this['li'][bz] = bj = this['li'][ba >>> 0x2 & 0xff] + this['a'] + this['b'], this['K0'][bz] = this['b'] = this['li'][bj >>> 0x8 >>> 0x2 & 0xff] + ba;
        }
    } [uh(0x272)]() {
        const OK = uh;
        let bz = 0x9e3779b9,
            bj = 0x9e3779b9,
            ba = 0x9e3779b9,
            bq = 0x9e3779b9,
            bT = 0x9e3779b9,
            bI = 0x9e3779b9,
            bJ = 0x9e3779b9,
            bV = 0x9e3779b9;
        for (let xG = 0x0; xG < 0x4; xG++) bz ^= bj << 0xb, bq += bz, bj += ba, bj ^= ba >>> 0x2, bT += bj, ba += bq, ba ^= bq << 0x8, bI += ba, bq += bT, bq ^= bT >>> 0x10, bJ += bq, bT += bI, bT ^= bI << 0xa, bV += bT, bI += bJ, bI ^= bJ >>> 0x4, bz += bI, bJ += bV, bJ ^= bV << 0x8, bj += bJ, bV += bz, bV ^= bz >>> 0x9, ba += bV, bz += bj;
        for (let xg = 0x0; xg < 0x100; xg += 0x8) bz += this['K0'][xg], bj += this['K0'][xg + 0x1], ba += this['K0'][xg + 0x2], bq += this['K0'][xg + 0x3], bT += this['K0'][xg + 0x4], bI += this['K0'][xg + 0x5], bJ += this['K0'][xg + 0x6], bV += this['K0'][xg + 0x7], bz ^= bj << 0xb, bq += bz, bj += ba, bj ^= ba >>> 0x2, bT += bj, ba += bq, ba ^= bq << 0x8, bI += ba, bq += bT, bq ^= bT >>> 0x10, bJ += bq, bT += bI, bT ^= bI << 0xa, bV += bT, bI += bJ, bI ^= bJ >>> 0x4, bz += bI, bJ += bV, bJ ^= bV << 0x8, bj += bJ, bV += bz, bV ^= bz >>> 0x9, ba += bV, bz += bj, this['li'][xg] = bz, this['li'][xg + 0x1] = bj, this['li'][xg + 0x2] = ba, this['li'][xg + 0x3] = bq, this['li'][xg + 0x4] = bT, this['li'][xg + 0x5] = bI, this['li'][xg + 0x6] = bJ, this['li'][xg + 0x7] = bV;
        for (let xu = 0x0; xu < 0x100; xu += 0x8) bz += this['li'][xu], bj += this['li'][xu + 0x1], ba += this['li'][xu + 0x2], bq += this['li'][xu + 0x3], bT += this['li'][xu + 0x4], bI += this['li'][xu + 0x5], bJ += this['li'][xu + 0x6], bV += this['li'][xu + 0x7], bz ^= bj << 0xb, bq += bz, bj += ba, bj ^= ba >>> 0x2, bT += bj, ba += bq, ba ^= bq << 0x8, bI += ba, bq += bT, bq ^= bT >>> 0x10, bJ += bq, bT += bI, bT ^= bI << 0xa, bV += bT, bI += bJ, bI ^= bJ >>> 0x4, bz += bI, bJ += bV, bJ ^= bV << 0x8, bj += bJ, bV += bz, bV ^= bz >>> 0x9, ba += bV, bz += bj, this['li'][xu] = bz, this['li'][xu + 0x1] = bj, this['li'][xu + 0x2] = ba, this['li'][xu + 0x3] = bq, this['li'][xu + 0x4] = bT, this['li'][xu + 0x5] = bI, this['li'][xu + 0x6] = bJ, this['li'][xu + 0x7] = bV;
        this['K1'](), this[OK(0x21f)] = 0x100;
    }
    constructor(bz) {
        const ON = uh;
        for (let bj = 0x0; bj < bz[ON(0x2ea)]; bj++) this['K0'][bj] = bz[bj];
        this[ON(0x272)]();
    }
    get['oH']() {
        const Ov = uh;
        return 0x0 == this[Ov(0x21f)]-- && (this['K1'](), this[Ov(0x21f)] = 0xff), this['K0'][this['count']];
    }
}
import {
    BZip2 as xL
} from './deps.js';
class xe {
    static['K2'](bz) {
        const OU = uh;
        let bj = 0x0;
        bz = bz[OU(0x202)]();
        for (let ba = 0x0; ba < bz[OU(0x2ea)]; ba++) bj = 0x3d * bj + bz[OU(0x158)](ba) - 0x20 | 0x0;
        return bj;
    } ['K3'];
    ['K4'];
    ['ws'];
    ['K5'];
    ['K6'];
    ['K7'];
    ['K8'];
    ['K9'] = [];
    ['Qw'](bz) {
        const Om = uh;
        let bj = xe['K2'](bz),
            ba = this['K5'][Om(0x269)](bj);
        return -0x1 === ba ? null : this['Ko'](ba);
    } ['Ko'](bz) {
        const Of = uh;
        if (bz < 0x0 || bz >= this['ws']) return null;
        if (this['K9'][bz]) return this['K9'][bz];
        let bj = this['K8'][bz],
            ba = bj + this['K6'][bz],
            bq = new Uint8Array(this['K4'][Of(0x27a)](bj, bj + ba));
        if (this['K3']) return this['K9'][bz] = bq, bq;
        {
            let bT = xL[Of(0x26a)](bq, this['K7'][bz], !0x0);
            return this['K9'][bz] = bT, bT;
        }
    }
    constructor(bz) {
        const OL = uh;
        let bj = new k8(new Uint8Array(bz)),
            ba = bj['o7']();
        ba === bj['o7']() ? (this['K4'] = bz, this['K3'] = !0x1) : (this['K4'] = xL['decompress'](bz['subarray'](0x6), ba, !0x0), bj = new k8(new Uint8Array(this['K4'])), this['K3'] = !0x0), this['ws'] = bj['oZ'](), this['K5'] = [], this['K7'] = [], this['K6'] = [], this['K8'] = [];
        let bq = bj['S'] + 0xa * this['ws'];
        for (let bT = 0x0; bT < this['ws']; bT++) this['K5']['push'](bj['op']()), this['K7'][OL(0x1d1)](bj['o7']()), this['K6'][OL(0x1d1)](bj['o7']()), this['K8']['push'](bq), bq += this['K6'][bT];
    }
}
var xs = [0x0, -0x2, 0x4, 0x6, -0x1, 0x0, 0x0, 0x2, 0x0, 0x0, 0x0, 0x0, 0x5, 0x4, 0x2, 0x2, 0x0, 0x0, 0x0, 0x0, 0x2, -0x2, 0x2, 0xe, 0x0, 0x6, 0x3, 0x0, 0x4, 0x0, 0x0, 0x0, 0x3, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, -0x1, 0x4, 0x2, 0x6, 0x0, 0x6, 0x0, 0x0, 0x3, 0x7, 0x0, 0x0, 0x0, -0x1, 0x0, 0x0, 0x0, 0x0, 0x4, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0xf, 0x0, 0x0, 0x0, 0x0, 0x6, 0x0, 0x2, 0x0, 0x0, 0x0, 0x2, 0x0, 0x0, 0x0, 0x1, 0x0, 0x0, 0x4, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, -0x2, 0x0, 0x0, 0x0, 0x0, 0x6, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0, -0x2, 0x0, 0x0, 0x2, 0x0, 0x0, 0x0, 0x2, 0x9, 0x0, 0x0, 0x0, 0x0, 0x0, 0x4, 0x0, 0x0, 0x0, 0x3, 0x7, 0x9, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, -0x2, 0x0, 0x0, 0x0, 0x0, 0x3, 0x2, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x6, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, -0x2, 0x2, 0x0, 0x0, 0x0, 0x0, 0x0, 0x6, 0x0, 0x0, 0x0, 0x2, 0x0, 0x2, 0x0, 0x0, 0x0, -0x2, 0x0, 0x0, 0x4, 0x0, 0x0, 0x0, 0x0, 0x6, 0x0, 0x0, -0x2, -0x2, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, -0x2, 0x0, 0x0, 0x5, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, -0x2, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x0, 0x0];
class xA {
    ['KQ'];
    ['KZ'];
    ['KY'];
    ['KE'] = !0x1;
    ['Kd'] = !0x1;
    async ['Kw'](bz, bj, ba) {
        this['Kd'] || await this['KZ']['Kw'](bz, bj, ba);
    } ['KR'](bz, bj) {
        this['Kd'] || this['KY']['KR'](bz, bj);
    }
    async ['Kt']() {
        return this['Kd'] ? 0x0 : await this['KZ']['Kt']();
    }
    get['oP']() {
        return this['Kd'] ? 0x0 : this['KZ']['oP'];
    } ['Kc']() {
        this['Kd'] = !0x0, this['KQ']['close'](), this['KZ']['Kr'](), this['KY']['KH']();
    } ['KP'] = bz => {
        this['Kd'] || (this['KE'] = !0x0, this['Kc']());
    };
    get['Kp']() {
        const Oe = uh;
        return parseInt(this['KQ'][Oe(0x208)][Oe(0x243)](':')[0x2], 0xa);
    }
    get['Kh']() {
        const Os = uh;
        return this['KQ'][Os(0x208)][Os(0x243)]('/')[0x2];
    } ['Kl'] = bz => {
        this['Kd'] || this['Kc']();
    };
    constructor(bz) {
        const OA = uh;
        bz['onclose'] = this['Kl'], bz[OA(0x319)] = this['KP'], this['KZ'] = new xB(bz, 0x1388), this['KY'] = new xb(bz, 0x1388), this['KQ'] = bz;
    }
    static async ['KK'](bz, bj) {
        return await new Promise((ba, bq) => {
            const Ob = o5;
            let bT = new WebSocket((bj ? Ob(0x2b0) : 'ws') + Ob(0x149) + bz, Ob(0x1ce));
            bT[Ob(0x282)](Ob(0x259), () => {
                ba(bT);
            }), bT['addEventListener'](Ob(0x236), () => {
                bq(bT);
            });
        });
    }
}
class xb {
    ['KE'] = !0x1;
    ['KN'];
    ['KQ'];
    ['Kv'] = !0x1;
    ['KR'](bz, bj) {
        const OB = uh;
        if (!this['Kv']) {
            if (this['KE']) throw this['KE'] = !0x1, new Error();
            if (bj > this['KN'] || bz[OB(0x2ea)] > this['KN']) throw new Error();
            try {
                this['KQ'][OB(0x216)](bz[OB(0x297)](0x0, bj));
            } catch (ba) {
                this['KE'] = !0x0;
            }
        }
    } ['KH']() {
        this['Kv'] = !0x0;
    }
    constructor(bz, bj) {
        this['KQ'] = bz, this['KN'] = bj;
    }
}
class xk {
    ['o6'];
    ['Kn'];
    get['KU']() {
        const OX = uh;
        return this['o6'][OX(0x2ea)];
    }
    get['Kt']() {
        return this['o6'][this['Kn']++];
    }
    get['oP']() {
        const Ox = uh;
        return this['o6'][Ox(0x2ea)] - this['Kn'];
    }
    constructor(bz) {
        this['o6'] = bz, this['Kn'] = 0x0;
    }
}
class xB {
    ['Km'] = 0x0;
    ['Kf'] = null;
    ['KN'];
    ['KL'] = null;
    ['Ke'] = !0x1;
    ['Ks'] = [];
    async ['Kt']() {
        const OG = uh;
        if (this['Ke']) throw new Error();
        return await Promise[OG(0x2c5)]([new Promise(bz => {
            this['Kf'] && 0x0 !== this['Kf']['oP'] || (this['Kf'] = this['Ks']['shift']() ?? null), this['Kf'] && this['Kf']['oP'] > 0x0 ? (bz(this['Kf']['Kt']), this['Km']--) : this['KL'] = bj => {
                this['Kf'] = bj, this['Km']--, bz(bj['Kt']);
            };
        }), new Promise((bz, bj) => {
            setTimeout(() => {
                this['Ke'], bj(new Error());
            }, 0x4e20);
        })]);
    }
    constructor(bz, bj) {
        const Og = uh;
        this['KN'] = bj, bz[Og(0x270)] = Og(0x1f5), bz['onmessage'] = this['KA'];
    }
    get['oP']() {
        return this['Km'];
    }
    async ['Kw'](bz, bj, ba) {
        if (this['Ke']) throw new Error();
        for (let bq = 0x0; bq < ba; bq++) bz[bj + bq] = await this['Kt']();
        return bz;
    } ['KA'] = bz => {
        const Ou = uh;
        if (this['Ke']) throw new Error();
        let bj = new xk(new Uint8Array(bz[Ou(0x1c7)]));
        if (this['Km'] += bj['oP'], this['KL']) {
            let ba = this['KL'];
            this['KL'] = null, ba(bj);
        } else this['Ks'][Ou(0x1d1)](bj);
    };
    ['Kr']() {
        this['Ke'] = !0x0, this['KL'] = null, this['Kf'] = null, this['Ks'] = [];
    }
}
class xX {
    static['Kb'] = new Uint16Array(['s', 'l', 'a', 's', 'h'][uh(0x1e1)]('')[uh(0x243)]('')[uh(0x312)](t => t[uh(0x158)](0x0)));
    static['Kk'] = new Uint16Array(['d', 'o', 't'][uh(0x1e1)]('')[uh(0x243)]('')['map'](t => t[uh(0x158)](0x0)));
    static['KB'] = new Uint16Array(['(', 'a', ')'][uh(0x1e1)]('')[uh(0x243)]('')['map'](t => t['charCodeAt'](0x0)));
    static['KX'] = [];
    static['Kx'] = [uh(0x22d), uh(0x303), uh(0x219), uh(0x1d6), uh(0x304)];
    static['KG'] = [];
    static['Kg'] = [];
    static['Ku'] = [];
    static['KM'] = [];
    static['KF'] = [];
    static['KO'](bz) {
        return this['KD'](bz) || this['KC'](bz);
    }
    static['Ky'](bz) {
        return !this['KD'](bz) || ('v' === bz || 'x' === bz || 'j' === bz || 'q' === bz || 'z' === bz);
    }
    static['Kz'](bj, ba, bq) {
        const OM = uh;
        let bT = 0x0;
        for (; bq < bj[OM(0x2ea)] && bT < ba[OM(0x2ea)];) {
            let bJ, bV = bj[bq],
                xG = bq + 0x1 < bj['length'] ? bj[bq + 0x1] : '\x00';
            if ((bJ = this['Kj'](xG, String[OM(0x226)](ba[bT]), bV)) > 0x0) bq += bJ, bT++;
            else {
                if (0x0 === bT) break;
                let xg;
                if ((xg = this['Kj'](xG, String[OM(0x226)](ba[bT - 0x1]), bV)) > 0x0) bq += xg;
                else {
                    if (!this['Ka'](bV)) break;
                    bq++;
                }
            }
        }
        const bI = {};
        return bI['Kq'] = bq, bI['KT'] = bT, bI;
    }
    static['Ka'](bz) {
        return !this['KO'](bz) && !this['KI'](bz);
    }
    static['KJ'](bz, bj, ba) {
        const OF = uh;
        let bq = 0x0,
            bT = bj[OF(0x2ea)] - 0x1;
        for (; bq <= bT;) {
            let bI = (bq + bT) / 0x2 | 0x0;
            if (bj[bI][0x0] === bz && bj[bI][0x1] === ba) return !0x0;
            bz < bj[bI][0x0] || bz === bj[bI][0x0] && ba < bj[bI][0x1] ? bT = bI - 0x1 : bq = bI + 0x1;
        }
        return !0x1;
    }
    static['KV'](bz, bj, ba, bq, bT) {
        const OO = uh;
        if (!(bq[OO(0x2ea)] > ba[OO(0x2ea)]))
            for (let bI = 0x0; bI <= ba['length'] - bq[OO(0x2ea)]; bI++) {
                let {
                    Kq: bJ,
                    KT: bV
                } = this['Kz'](ba, bq, bI);
                if (bV < bq[OO(0x2ea)]) continue;
                let xG = !0x1,
                    xg = this['KW'](bI, ba, 0x3, bT, [',', '.']),
                    xu = this['KS'](bJ - 0x1, ba, 0x5, bz, ['\x5c', '/']);
                if (0x1 === bj && xg > 0x0 && xu > 0x0 && (xG = !0x0), 0x2 === bj && (xg > 0x2 && xu > 0x0 || xg > 0x0 && xu > 0x2) && (xG = !0x0), 0x3 === bj && xg > 0x0 && xu > 0x2 && (xG = !0x0), !xG) continue;
                let xM, xF = bI,
                    xO = bJ - 0x1,
                    xD = !0x1;
                if (xg > 0x2) {
                    if (0x4 === xg) {
                        for (xD = !0x1, xM = bI - 0x1; xM >= 0x0; xM--)
                            if (xD) {
                                if ('*' !== bT[xM]) break;
                                xF = xM;
                            } else '*' === bT[xM] && (xF = xM, xD = !0x0);
                    }
                    for (xD = !0x1, xM = xF - 0x1; xM >= 0x0; xM--)
                        if (xD) {
                            if (this['Ka'](ba[xM])) break;
                            xF = xM;
                        } else this['Ka'](ba[xM]) || (xD = !0x0, xF = xM);
                }
                if (xu > 0x2) {
                    if (0x4 === xu) {
                        for (xD = !0x1, xM = xO + 0x1; xM < ba['length']; xM++)
                            if (xD) {
                                if ('*' !== bz[xM]) break;
                                xO = xM;
                            } else '*' === bz[xM] && (xO = xM, xD = !0x0);
                    }
                    for (xD = !0x1, xM = xO + 0x1; xM < ba[OO(0x2ea)]; xM++)
                        if (xD) {
                            if (this['Ka'](ba[xM])) break;
                            xO = xM;
                        } else this['Ka'](ba[xM]) || (xD = !0x0, xO = xM);
                }
                this['Ki'](xF, xO + 0x1, ba);
            }
    }
    static['N0'](bj, ba, bq) {
        const OD = uh;
        let bT = bq,
            bI = 0x0,
            bJ = 0x0,
            bV = !0x1,
            xG = !0x1,
            xg = !0x1;
        for (; bT < bj[OD(0x2ea)] && (!xG || !xg) && !(bT >= bj['length'] || xG && xg);) {
            let xM, xF = bj[bT],
                xO = bT + 0x1 < bj[OD(0x2ea)] ? bj[bT + 0x1] : '\x00';
            if (bI < ba['length'] && (xM = this['N1'](xO, String[OD(0x226)](ba[bI]), xF)) > 0x0) 0x1 === xM && this['KI'](xF) && (xG = !0x0), 0x2 === xM && (this['KI'](xF) || this['KI'](xO)) && (xG = !0x0), bT += xM, bI++;
            else {
                if (0x0 === bI) break;
                let xD;
                if ((xD = this['N1'](xO, String[OD(0x226)](ba[bI - 0x1]), xF)) > 0x0) bT += xD;
                else {
                    if (bI >= ba[OD(0x2ea)] || !this['Ky'](xF)) break;
                    if (this['Ka'](xF) && '\x27' !== xF && (bV = !0x0), this['KI'](xF) && (xg = !0x0), bT++, bJ++, (0x64 * bJ / (bT - bq) | 0x0) > 0x5a) break;
                }
            }
        }
        const xu = {};
        return xu['Kq'] = bT, xu['N2'] = bI, xu['N3'] = bV, xu['N4'] = xG, xu['N5'] = xg, xu;
    }
    static['KC'](bz) {
        return bz >= 'A' && bz <= 'Z';
    }
    static['N6'](bz) {
        const OC = uh;
        for (let bj = 0x0; bj < bz[OC(0x2ea)]; bj++)
            if (!this['KI'](bz[bj]) && '\x00' !== bz[bj]) return !0x1;
        return !0x0;
    }
    static['N7'](bz, bj, ba, bq) {
        const Oy = uh;
        let bT = ba[Oy(0x2ea)],
            bI = bq[Oy(0x2ea)];
        for (let bJ = 0x0; bJ <= bI - bT; bJ++) {
            let {
                N8: bV,
                Kq: xG
            } = this['N9'](bJ, ba, bq);
            if (!bV) continue;
            let xg = this['KW'](bJ, bq, 0x3, bj, ['@']),
                xu = this['KS'](xG - 0x1, bq, 0x3, bz, ['.', ',']);
            (xg > 0x2 || xu > 0x2) && this['Ki'](bJ, xG, bq);
        }
    }
    static['No'](bz, bj, ba) {
        const Oz = uh;
        if (!(ba[Oz(0x2ea)] > bj[Oz(0x2ea)]))
            for (let bq = 0x0; bq <= bj['length'] - ba['length']; bq++) {
                let bT = bq,
                    {
                        Kq: bI,
                        N2: bJ,
                        N3: bV,
                        N4: xG,
                        N5: xg
                    } = this['N0'](bj, ba, bT);
                bT = bI;
                let xu = bj[bT],
                    xM = bT + 0x1 < bj[Oz(0x2ea)] ? bj[bT + 0x1] : '\x00';
                if (!(bJ >= ba[Oz(0x2ea)]) || xG && xg) continue;
                let xF, xO = !0x0;
                if (bV) {
                    let xy = !0x1,
                        xz = !0x1;
                    if ((bq - 0x1 < 0x0 || this['Ka'](bj[bq - 0x1]) && '\x27' !== bj[bq - 0x1]) && (xy = !0x0), (bT >= bj[Oz(0x2ea)] || this['Ka'](bj[bT]) && '\x27' !== bj[bT]) && (xz = !0x0), !xy || !xz) {
                        let xj = !0x1;
                        for (xF = bq - 0x2, xy && (xF = bq); !xj && xF < bT;) {
                            if (xF >= 0x0 && (!this['Ka'](bj[xF]) || '\x27' === bj[xF])) {
                                let xa, xq = [];
                                for (xa = 0x0; xa < 0x3 && xF + xa < bj[Oz(0x2ea)] && (!this['Ka'](bj[xF + xa]) || '\x27' === bj[xF + xa]); xa++) xq[xa] = bj[xF + xa];
                                let xT = !0x0;
                                0x0 === xa && (xT = !0x1), xa < 0x3 && xF - 0x1 >= 0x0 && (!this['Ka'](bj[xF - 0x1]) || '\x27' === bj[xF - 0x1]) && (xT = !0x1), xT && !this['NQ'](xq) && (xj = !0x0);
                            }
                            xF++;
                        }
                        xj || (xO = !0x1);
                    }
                } else {
                    xu = '\x20', bq - 0x1 >= 0x0 && (xu = bj[bq - 0x1]), xM = '\x20', bT < bj[Oz(0x2ea)] && (xM = bj[bT]);
                    let xI = this['NZ'](xu),
                        xJ = this['NZ'](xM);
                    bz && this['KJ'](xI, bz, xJ) && (xO = !0x1);
                }
                if (!xO) continue;
                let xD = 0x0,
                    xC = 0x0;
                for (let xV = bq; xV < bT; xV++) this['KI'](bj[xV]) ? xD++ : this['KO'](bj[xV]) && xC++;
                xD <= xC && this['Ki'](bq, bT, bj);
            }
    }
    static['N1'](bz, bj, ba) {
        if (bj === ba) return 0x1;
        if (bj >= 'a' && bj <= 'm') {
            if ('a' === bj) return '4' !== ba && '@' !== ba && '^' !== ba ? '/' === ba && '\x5c' === bz ? 0x2 : 0x0 : 0x1;
            if ('b' === bj) return '6' !== ba && '8' !== ba ? '1' === ba && '3' === bz ? 0x2 : 0x0 : 0x1;
            if ('c' === bj) return '(' !== ba && '<' !== ba && '{' !== ba && '[' !== ba ? 0x0 : 0x1;
            if ('d' === bj) return '[' === ba && ')' === bz ? 0x2 : 0x0;
            if ('e' === bj) return '3' !== ba && '€' !== ba ? 0x0 : 0x1;
            if ('f' === bj) return 'p' === ba && 'h' === bz ? 0x2 : '£' === ba ? 0x1 : 0x0;
            if ('g' === bj) return '9' !== ba && '6' !== ba ? 0x0 : 0x1;
            if ('h' === bj) return '#' === ba ? 0x1 : 0x0;
            if ('i' === bj) return 'y' !== ba && 'l' !== ba && 'j' !== ba && '1' !== ba && '!' !== ba && ':' !== ba && ';' !== ba && '|' !== ba ? 0x0 : 0x1;
            if ('j' === bj) return 0x0;
            if ('k' === bj) return 0x0;
            if ('l' === bj) return '1' !== ba && '|' !== ba && 'i' !== ba ? 0x0 : 0x1;
            if ('m' === bj) return 0x0;
        }
        if (bj >= 'n' && bj <= 'z') {
            if ('n' === bj) return 0x0;
            if ('o' === bj) return '0' !== ba && '*' !== ba ? '(' === ba && ')' === bz || '[' === ba && ']' === bz || '{' === ba && '}' === bz || '<' === ba && '>' === bz ? 0x2 : 0x0 : 0x1;
            if ('p' === bj) return 0x0;
            if ('q' === bj) return 0x0;
            if ('r' === bj) return 0x0;
            if ('s' === bj) return '5' !== ba && 'z' !== ba && '$' !== ba && '2' !== ba ? 0x0 : 0x1;
            if ('t' === bj) return '7' !== ba && '+' !== ba ? 0x0 : 0x1;
            if ('u' === bj) return 'v' === ba ? 0x1 : '\x5c' === ba && '/' === bz || '\x5c' === ba && '|' === bz || '|' === ba && '/' === bz ? 0x2 : 0x0;
            if ('v' === bj) return '\x5c' === ba && '/' === bz || '\x5c' === ba && '|' === bz || '|' === ba && '/' === bz ? 0x2 : 0x0;
            if ('w' === bj) return 'v' === ba && 'v' === bz ? 0x2 : 0x0;
            if ('x' === bj) return ')' === ba && '(' === bz || '}' === ba && '{' === bz || ']' === ba && '[' === bz || '>' === ba && '<' === bz ? 0x2 : 0x0;
            if ('y' === bj) return 0x0;
            if ('z' === bj) return 0x0;
        }
        return bj >= '0' && bj <= '9' ? '0' === bj ? 'o' === ba || 'O' === ba ? 0x1 : '(' === ba && ')' === bz || '{' === ba && '}' === bz || '[' === ba && ']' === bz ? 0x2 : 0x0 : '1' === bj && 'l' === ba ? 0x1 : 0x0 : ',' === bj ? '.' === ba ? 0x1 : 0x0 : '.' === bj ? ',' === ba ? 0x1 : 0x0 : '!' === bj && 'i' === ba ? 0x1 : 0x0;
    }
    static['KD'](bz) {
        return bz >= 'a' && bz <= 'z';
    }
    static['KI'](bz) {
        return bz >= '0' && bz <= '9';
    }
    static['NZ'](bz) {
        const Oj = uh;
        return this['KD'](bz) ? bz['charCodeAt'](0x0) + 0x1 - 0x61 : '\x27' === bz ? 0x1c : this['KI'](bz) ? bz[Oj(0x158)](0x0) + 0x1d - 0x30 : 0x1b;
    }
    static['N9'](bj, ba, bq) {
        const Oa = uh;
        let bT = ba['length'],
            bI = bj,
            bJ = 0x0;
        for (; bI < bq['length'] && bJ < bT;) {
            let xG = bq[bI],
                xg = bI + 0x1 < bq['length'] ? bq[bI + 0x1] : '\x00',
                xu = this['Kj'](xg, String[Oa(0x226)](ba[bJ]), xG);
            if (xu > 0x0) bI += xu, bJ++;
            else {
                if (0x0 === bJ) break;
                let xM = this['Kj'](xg, String['fromCharCode'](ba[bJ - 0x1]), xG);
                if (xM > 0x0) bI += xM, 0x1 === bJ && bj++;
                else {
                    if (bJ >= bT || !this['Ka'](xG)) break;
                    bI++;
                }
            }
        }
        const bV = {};
        return bV['N8'] = bJ >= bT, bV['Kq'] = bI, bV;
    }
    static['NY'](bz, bj, ba, bq) {
        this['NE'](bz), this['Nd'](bj), this['Nw'](ba), this['NR'](bq);
    }
    static['Kj'](bz, bj, ba) {
        return bj === ba || 'o' === bj && '0' === ba ? 0x1 : 'o' === bj && '(' === ba && ')' === bz ? 0x2 : 'c' !== bj || '(' !== ba && '<' !== ba && '[' !== ba ? 'e' === bj && '€' === ba || 's' === bj && '$' === ba || 'l' === bj && 'i' === ba ? 0x1 : 0x0 : 0x1;
    }
    static['Nc'](bz, bj) {
        const Oq = uh;
        for (let ba = bz; ba < bj[Oq(0x2ea)] && ba >= 0x0; ba++)
            if (!this['KI'](bj[ba])) return ba;
        return bj['length'];
    }
    static['NQ'](bz) {
        const OT = uh;
        if (this['N6'](bz)) return !0x0;
        let bj = this['Nr'](bz),
            ba = this['KF'],
            bq = ba[OT(0x2ea)];
        if (bj === ba[0x0] || bj === ba[bq - 0x1]) return !0x0;
        let bT = 0x0,
            bI = bq - 0x1;
        for (; bT <= bI;) {
            let bJ = (bT + bI) / 0x2 | 0x0;
            if (bj === ba[bJ]) return !0x0;
            bj < ba[bJ] ? bI = bJ - 0x1 : bT = bJ + 0x1;
        }
        return !0x1;
    }
    static['KS'](bz, bj, ba, bq, bT) {
        const OI = uh;
        if (bz + 0x1 === bj[OI(0x2ea)]) return 0x2;
        for (let bI = bz + 0x1; bI < bj[OI(0x2ea)] && this['Ka'](bj[bI]); bI++)
            if (bT[OI(0x314)](bj[bI])) return 0x3;
        return this['NH'](bj, bq, bz, ba, !0x1);
    }
    static['NP'](bz) {
        return bz >= '\x20' && bz <= '\x7f' || '\x20' === bz || '\x0a' === bz || '\x09' === bz || '£' === bz || '€' === bz;
    }
    static['Np'](bz) {
        const OJ = uh;
        for (let bj = 0x0; bj < bz[OJ(0x2ea)];) {
            let ba = this['Nh'](bz, bj);
            if (-0x1 === ba) return;
            let bq = !0x1;
            for (let bJ = bj; bJ >= 0x0 && bJ < ba && !bq; bJ++) this['Ka'](bz[bJ]) || this['Ky'](bz[bJ]) || (bq = !0x0);
            let bT = 0x0;
            bq && (bT = 0x0), 0x0 === bT && (bT = 0x1, bj = ba);
            let bI = 0x0;
            for (let bV = ba; bV < bz['length'] && bV < bj; bV++) bI = 0xa * bI + bz[bV][OJ(0x158)](0x0) - 0x30;
            bI <= 0xff && bj - ba <= 0x8 ? bT++ : bT = 0x0, 0x4 === bT && (this['Ki'](ba, bj, bz), bT = 0x0), bj = this['Nc'](bj, bz);
        }
    }
    static['Nl'](bz) {
        const OV = uh;
        let bj = [...bz],
            ba = [...bz];
        this['No'](null, bj, this['Kk']), this['No'](null, ba, this['Kb']);
        for (let bq = 0x0; bq < this['KX'][OV(0x2ea)]; bq++) this['KV'](ba, this['KG'][bq], bz, this['KX'][bq], bj);
    }
    static['format'](bz) {
        const OW = uh;
        let bj = 0x0;
        for (let ba = 0x0; ba < bz[OW(0x2ea)]; ba++) this['NP'](bz[ba]) ? bz[bj] = bz[ba] : bz[bj] = '\x20', 0x0 !== bj && '\x20' === bz[bj] && '\x20' === bz[bj - 0x1] || bj++;
        for (let bq = bj; bq < bz[OW(0x2ea)]; bq++) bz[bq] = '\x20';
    }
    static['KW'](bz, bj, ba, bq, bT) {
        const OS = uh;
        if (0x0 === bz) return 0x2;
        for (let bI = bz - 0x1; bI >= 0x0 && this['Ka'](bj[bI]); bI--)
            if (bT[OS(0x314)](bj[bI])) return 0x3;
        return this['NH'](bj, bq, bz, ba, !0x0);
    }
    static['NH'](bz, bj, ba, bq, bT) {
        return (bT ? this['NK'](bj, ba) : this['NN'](bj, ba)) >= bq ? 0x4 : this['Ka'](bT ? bz[ba - 0x1] : bz[ba + 0x1]) ? 0x1 : 0x0;
    }
    static['Nw'](bz) {
        let bj = bz['op']();
        for (let ba = 0x0; ba < bj; ba++) this['KF'][ba] = bz['oZ']();
    }
    static['Nv'](bz) {
        const Oi = uh;
        let bj = [...bz];
        this[Oi(0x1e8)](bj);
        let ba = bj[Oi(0x1e1)]('')[Oi(0x151)](),
            bq = ba['toLowerCase'](),
            bT = [...bq];
        this['Nl'](bT), this['Nn'](bT), this['NU'](bT), this['Np'](bT);
        for (let bI = 0x0; bI < this['Kx'][Oi(0x2ea)]; bI++) {
            let bJ = -0x1;
            for (; - 0x1 !== (bJ = bq[Oi(0x269)](this['Kx'][bI], bJ + 0x1));) {
                let bV = [...this['Kx'][bI]];
                for (let xG = 0x0; xG < bV[Oi(0x2ea)]; xG++) bT[xG + bJ] = bV[xG];
            }
        }
        return this['Nm'](bT, [...ba]), this['Nf'](bT), bT[Oi(0x1e1)]('')[Oi(0x151)]();
    }
    static['l'](bz) {
        const D0 = uh;
        let bj = new k8(bz['Qw'](D0(0x155))),
            ba = new k8(bz['Qw'](D0(0x1d4))),
            bq = new k8(bz['Qw'](D0(0x2cd))),
            bT = new k8(bz['Qw'](D0(0x13a)));
        this['NY'](ba, bq, bj, bT);
    }
    static['Nd'](bz) {
        const D1 = uh;
        let bj = bz['op']();
        for (let ba = 0x0; ba < bj; ba++) this['Kg'][ba] = new Uint16Array(bz['m']())[D1(0x312)](() => bz['m']());
    }
    static['NN'](bz, bj) {
        const D2 = uh;
        let ba = 0x0;
        for (let bq = bj + 0x1; bq < bz[D2(0x2ea)] && this['Ka'](bz[bq]); bq++) '*' === bz[bq] && ba++;
        return ba;
    }
    static['Nn'](bz) {
        const D3 = uh;
        for (let bj = 0x0; bj < 0x2; bj++)
            for (let ba = this['Ku'][D3(0x2ea)] - 0x1; ba >= 0x0; ba--) this['No'](this['KM'][ba], bz, this['Ku'][ba]);
    }
    static['Nr'](bz) {
        const D4 = uh;
        if (bz[D4(0x2ea)] > 0x6) return 0x0;
        let bj = 0x0;
        for (let ba = 0x0; ba < bz['length']; ba++) {
            let bq = bz[bz[D4(0x2ea)] - ba - 0x1];
            if (this['KD'](bq)) bj = 0x26 * bj + bq[D4(0x158)](0x0) + 0x1 - 0x61;
            else {
                if ('\x27' === bq) bj = 0x26 * bj + 0x1b;
                else {
                    if (this['KI'](bq)) bj = 0x26 * bj + bq['charCodeAt'](0x0) + 0x1c - 0x30;
                    else {
                        if ('\x00' !== bq) return 0x0;
                    }
                }
            }
        }
        return bj;
    }
    static['NE'](bz) {
        const D5 = uh;
        let bj = bz['op']();
        for (let ba = 0x0; ba < bj; ba++) {
            this['Ku'][ba] = new Uint16Array(bz['m']())['map'](() => bz['m']());
            let bq = new Array(bz['m']())['fill']([])[D5(0x312)](() => [bz['oo'](), bz['oo']()]);
            bq[D5(0x2ea)] > 0x0 && (this['KM'][ba] = bq);
        }
    }
    static['Ki'](bz, bj, ba) {
        for (let bq = bz; bq < bj; bq++) ba[bq] = '*';
    }
    static['NU'](bz) {
        const D6 = uh;
        let bj = [...bz],
            ba = [...bz];
        this['No'](null, bj, this['KB']), this['No'](null, ba, this['Kk']);
        for (let bq = this['Kg'][D6(0x2ea)] - 0x1; bq >= 0x0; bq--) this['N7'](ba, bj, this['Kg'][bq], bz);
    }
    static['NK'](bz, bj) {
        let ba = 0x0;
        for (let bq = bj - 0x1; bq >= 0x0 && this['Ka'](bz[bq]); bq--) '*' === bz[bq] && ba++;
        return ba;
    }
    static['NR'](bz) {
        const D7 = uh;
        let bj = bz['op']();
        for (let ba = 0x0; ba < bj; ba++) this['KG'][ba] = bz['m'](), this['KX'][ba] = new Uint16Array(bz['m']())[D7(0x312)](() => bz['m']());
    }
    static['Nh'](bz, bj) {
        for (let ba = bj; ba < bz['length'] && ba >= 0x0; ba++)
            if (this['KI'](bz[ba])) return ba;
        return -0x1;
    }
    static['Nf'](bz) {
        const D8 = uh;
        let bj = !0x0;
        for (let ba = 0x0; ba < bz[D8(0x2ea)]; ba++) {
            let bq = bz[ba];
            this['KO'](bq) ? bj ? this['KD'](bq) && (bj = !0x1) : this['KC'](bq) && (bz[ba] = String[D8(0x226)](bq[D8(0x158)](0x0) + 0x61 - 0x41)) : bj = !0x0;
        }
    }
    static['Nm'](bz, bj) {
        const D9 = uh;
        for (let ba = 0x0; ba < bj[D9(0x2ea)]; ba++) '*' !== bz[ba] && this['KC'](bj[ba]) && (bz[ba] = bj[ba]);
    }
}

function o5(o, Q) {
    const Z = o4();
    return o5 = function(Y, E) {
        Y = Y - 0x131;
        let d = Z[Y];
        return d;
    }, o5(o, Q);
}
class xx extends XC {
    ['NL'] = k8['ow'](0x1);
    static['Ne'] = 0x0;
    ['in'] = k8['ow'](0x1);
    ['Ns'] = 0x0;
    ['NA'] = -0x1;
    ['Nb'] = 0x0;
    ['Nk'] = 0x0;
    ['NB'] = k8['ow'](0x1);
    ['NX'] = 0x0;
    ['Nx'] = new Int32Array(0x3e8);
    ['NG'] = -0x1;
    ['Ng'] = 0x0;
    ['Nu'] = 0x0n;
    ['NM'] = 0x0;
    ['NF'] = 0x0;
    ['NO'] = 0x0;
    ['ND'] = new kY(0x4, null);
    static['NC'] = 0x0;
    ['Ny'] = new Int32Array(0x3e8);
    static['Nz'] = 0xa;
    ['Nj'] = 0x0;
    ['Na'] = null;
    ['Nq'] = null;
    static['NT'] = 0x0;
    static['ZT'] = !0x1;
    ['NI'] = null;
    ['NJ'] = 0x0;
    ['wZ'] = 0x0;
    static['NV'] = 0x0;
    ['NW'] = !0x1;
    ['NS'] = null;
    ['Ni'] = 0x0;
    static['p6'] = !0x0;
    ['v0'] = 0x0;
    ['v1'] = 0x0;
    ['v2'] = 0x0;
    ['v3'] = 0x0;
    static['v4'] = 0x0;
    ['v5'] = 0x0;
    ['v6'] = 0x0;
    static['v7'] = 0x0;
    static['v8'] = 0x0;
    static['v9'] = 0x0;
    static['vo'] = 0x0;
    ['vQ'] = null;
    ['vZ'] = 0x0;
    ['vY'] = 0x0;
    ['vE'] = 0x0;
    ['vd'] = null;
    ['vw'] = 0x0;
    static['vR'] = 0x0;
    ['vc'] = 0x0;
    static['vr'] = 0x0;
    ['vH'] = 0x1;
    ['vP'] = !0x1;
    ['vp'] = 0x0;
    ['vh'] = 0x0;
    ['vl'] = 0x0;
    ['vK'] = 0x0;
    ['vN'] = 0x0;
    ['vv'] = 0x0;
    ['vn'] = 0x0;
    static['vU'] = 0x0;
    ['vm'] = 0x0;
    static['vf'] = 0x0;
    ['vL'] = 0x2;
    ['ve'] = !0x1;
    ['vs'] = null;
    ['vA'] = !0x1;
    ['vb'] = 0x0;
    ['vk'] = new Int8Array(0x4000);
    ['vB'] = 0x2;
    ['vX'] = 0x0;
    ['vx'] = 0x0;
    ['vG'] = 0x80;
    ['vg'] = 0x0;
    ['vu'] = 0x1;
    ['vM'] = 0x2;
    static['vF'] = 0x0;
    ['vO'] = 0x0;
    ['vD'] = 0x0;
    ['vC'] = !0x1;
    ['vy'] = new Int32Array(0x5);
    static['vz'] = 0x0;
    ['vj'] = 0x0;
    ['va'] = 0x0;
    ['vq'] = !0x1;
    ['vT'] = null;
    ['vI'] = 0x0;
    ['vJ'] = null;
    ['vV'] = null;
    ['vW'] = !0x0;
    ['vS'] = new kY(0x5, !0x1);
    ['vi'] = new Int32Array(0x5);
    ['n0'] = null;
    ['n1'] = new Int32Array(0x5);
    ['n2'] = 0x0;
    ['n3'] = new Int32Array(0x5);
    ['n4'] = null;
    ['db'] = null;
    ['n5'] = 0x0;
    ['n6'] = null;
    ['n7'] = null;
    ['n8'] = null;
    ['n9'] = 0x0;
    ['no'] = 0x0;
    ['nQ'] = 0x0;
    ['wc'] = 0x0;
    ['nZ'] = null;
    ['nY'] = [];
    ['nE'] = 0x0;
    ['nd'] = null;
    ['nw'] = 0x0;
    ['nR'] = 0x0;
    ['nc'] = null;
    ['nr'] = 0x0;
    ['nH'] = 0x0;
    ['nP'] = 0x0;
    ['np'] = 0x0;
    ['nh'] = 0x0;
    ['nl'] = 0x0;
    ['nK'] = 0x0;
    ['nN'] = 0x0;
    ['Hf'] = null;
    ['nv'] = null;
    ['He'] = null;
    ['nn'] = new kd(0x68, 0x68);
    ['nU'] = null;
    ['nm'] = 0x0;
    ['nf'] = null;
    ['nL'] = 0x0;
    ['ne'] = 0x0;
    ['ns'] = 0x0;
    ['nA'] = new k3();
    ['nb'] = '';
    ['nk'] = new Int32Array(0x800);
    ['nB'] = '';
    ['nX'] = null;
    ['nx'] = new kY(0x800, null);
    ['nG'] = '';
    ['ng'] = null;
    ['nu'] = '';
    ['nM'] = new kY(0x2000, null);
    ['nF'] = null;
    ['nO'] = null;
    ['nD'] = null;
    ['nC'] = new Int32Array(0x3e8);
    ['ny'] = null;
    ['nz'] = null;
    ['nj'] = null;
    ['na'] = 0x0;
    ['nq'] = 0x0;
    ['nT'] = null;
    ['nI'] = new Int32Array(0x100);
    ['nJ'] = new kY(0x800, null);
    ['nV'] = null;
    ['nW'] = new Int32Array(0x2000);
    ['nS'] = new k3();
    ['ni'] = '';
    ['U0'] = 0x0;
    ['U1'] = 0x0;
    ['U2'] = new k3();
    ['U3'] = 0x0;
    ['U4'] = new Int32Array(0x800);
    ['U5'] = null;
    ['U6'] = new Int32Array(0x2a40);
    ['U7'] = null;
    ['U8'] = null;
    ['U9'] = 0x0;
    ['Uo'] = 0x0;
    ['UQ'] = 0x0;
    ['UZ'] = 0x0;
    ['UY'] = null;
    ['UE'] = 0x0;
    ['Ud'] = !0x1;
    ['Uw'] = new Int32Array(0xfa0);
    ['UR'] = [];
    ['Uc'] = null;
    ['Ur'] = new Int32Array(0x2a40);
    ['UH'] = 0x0;
    ['UP'] = new Int32Array(0xfa0);
    ['Up'] = new kQ(0x4, 0x68, 0x68, null);
    static['Uh'] = Int32Array['of'](0xffff00, 0xff0000, 0xff00, 0xffff, 0xff00ff, 0xffffff);
    ['Ul'] = null;
    ['UK'] = new k3();
    ['UN'] = new Int32Array(0x97);
    ['Uv'] = null;
    ['Un'] = new Int32Array(0x32);
    ['UU'] = null;
    ['Um'] = !0x1;
    ['Uf'] = 0x0;
    ['UL'] = 0x0;
    ['Ue'] = null;
    ['Us'] = new Int32Array(0x32);
    ['UA'] = new Int32Array(0x7);
    ['Ub'] = new Int32Array(0x32);
    ['Uk'] = null;
    ['UB'] = -0x1;
    ['UX'] = null;
    ['Ux'] = null;
    ['UG'] = null;
    ['Ug'] = !0x0;
    ['Uu'] = new Int32Array(0x97);
    ['UM'] = 0x0;
    ['UF'] = 0x0;
    ['UO'] = new Int32Array(0x21);
    ['UD'] = new Int32Array(0x21);
    ['UC'] = null;
    ['Uy'] = null;
    ['Uz'] = null;
    ['Uj'] = null;
    ['Ua'] = 0x0;
    ['Uq'] = new Int32Array(0x5);
    ['UT'] = !0x1;
    ['UI'] = new BigInt64Array(0x64);
    ['UJ'] = null;
    ['UV'] = -0x1;
    ['UW'] = new kY(0x64, null);
    ['US'] = new Int32Array(0x32);
    ['Ui'] = new kY(0x32, null);
    ['m0'] = 0x0;
    ['m1'] = 0x40;
    ['m2'] = null;
    ['m3'] = null;
    ['m4'] = null;
    ['m5'] = null;
    ['m6'] = null;
    ['m7'] = null;
    ['m8'] = null;
    ['m9'] = null;
    ['mo'] = 0x0;
    ['mQ'] = new Int32Array(0x32);
    ['mZ'] = null;
    ['mY'] = null;
    ['mE'] = null;
    ['md'] = -0x1;
    ['mw'] = !0x0;
    ['mR'] = 0x0;
    ['mc'] = new Int32Array(0x32);
    ['mr'] = null;
    ['mH'] = null;
    ['mP'] = new Int32Array(0x32);
    ['mp'] = null;
    ['mh'] = null;
    ['ml'] = new kY(0xd, null);
    ['mK'] = 0x0;
    ['mN'] = null;
    ['mv'] = null;
    ['mn'] = new kY(0x32, null);
    ['mU'] = !0x1;
    ['mm'] = !0x1;
    ['mf'] = new kY(0x32, null);
    ['mL'] = new kY(0x8, null);
    ['me'] = null;
    ['mA'] = null;
    ['mb'] = new kY(0x14, null);
    ['mk'] = new Int32Array(0x32);
    ['mB'] = new Int32Array(0x32);
    ['mX'] = 0x0;
    ['mx'] = !0x0;
    ['mG'] = new Int32Array(0x32);
    ['mg'] = 0x0;
    ['mu'] = new kY(0x14, null);
    ['mM'] = 0x0;
    ['mF'] = null;
    ['mO'] = -0x1;
    ['mD'] = new Int32Array(0x64);
    ['mC'] = 0x0;
    ['my'] = 0x40;
    ['mz'] = !0x1;
    ['mj'] = 0xff800800;
    ['ma'] = uh(0x24c);
    ['mq'] = 0x0;
    ['mT'] = 0x0;
    ['mI'] = 0x0;
    ['mJ'] = 0x0;
    ['mV'] = null;
    ['mW'] = null;
    ['mS'] = !0x1;
    ['mi'] = 0x0;
    ['f0'] = null;
    ['f1'] = null;
    ['f2'] = null;
    ['f3'] = 0x0;
    ['f4'] = null;
    ['f5'] = 0x0;
    ['f6'] = null;
    ['f7'] = 0x0;
    ['f8'] = null;
    ['f9'] = null;
    ['fo'] = null;
    ['fQ'] = 0x0;
    ['fZ'] = 0x0;
    ['fY'] = null;
    ['fE'] = null;
    ['fd'] = -0x1;
    ['fw'] = -0x1;
    ['fR'] = 0x0;
    ['fc'] = null;
    ['fr'] = [];
    ['fH'] = null;
    ['fP'] = 0x0;
    ['fp'] = new xl();
    ['fh'] = null;
    ['fl'] = null;
    ['fK'] = 0x4e;
    ['fN'] = !0x1;
    ['fv'] = null;
    ['fn'] = new kY(0x3e8, null);
    ['fU'] = !0x1;
    ['fm'] = [];
    ['ff'] = 0x0;
    ['fL'] = 0x0;
    ['fe'] = 0x0;
    ['fs'] = 0x0;
    ['fA'] = 0x0;
    ['fb'] = 0x0;
    ['fk'] = 0x0;
    ['fB'] = 0x0;
    ['fX'] = [];
    ['fx'] = !0x1;
    ['fG'] = [];
    ['fg'] = 0x0;
    ['fu'] = 0x0;
    ['fM'] = 0x0;
    ['fF'] = 0x0;
    ['fO'] = [];
    ['fD'] = !0x1;
    ['fC'] = [];
    ['fy'] = null;
    ['fz'] = 0x3;
    ['fj'] = '';
    ['fa'] = -0x1;
    ['fq'] = '';
    ['fT'] = [-0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1];
    ['fI'] = new Int32Array(0x64);
    ['fJ'] = new Int32Array(0x64);
    ['fV'] = new kY(0x64, null);
    ['fW'] = -0x1;
    ['fS'] = new kY(0x64, null);
    ['fi'] = '';
    ['L0'] = 0x0;
    ['L1'] = !0x1;
    ['L2'] = 0x0;
    ['L3'] = 0x0;
    ['L4'] = 0x0;
    ['L5'] = '';
    ['L6'] = 0x0;
    ['L7'] = 0x0;
    ['L8'] = 0x0;
    ['L9'] = 0x0;
    ['Lo'] = new Int32Array(0x1f4);
    ['LQ'] = new Int32Array(0x1f4);
    ['LZ'] = 0x0;
    ['LY'] = [];
    ['LE'] = 0x0;
    ['Ld'] = 0x0;
    ['Lw'] = 0x0;
    ['LR'] = 0x0;
    ['Lc'] = new Int32Array(0x1f4);
    ['Lr'] = !0x1;
    ['LH'] = !0x1;
    ['LP'] = 0x0;
    ['Lp'] = 0x0;
    ['Lh'] = null;
    ['Ll'] = '';
    ['LK'] = [];
    ['LN'] = 0x0;
    ['Lv'] = 0x0;
    ['Ln'] = 0x0;
    ['LU'] = 0x0;
    ['Lm'] = 0x0;
    ['Lf'] = 0x0;
    ['LL'] = 0x0;
    ['Le'] = 0x0;
    ['Ls'] = 0x0;
    ['LA'] = new Int32Array(0x1f4);
    ['Lb'] = 0x0;
    ['Lk'] = 0x0;
    ['LB'] = null;
    ['LX'] = 0x0;
    ['Lx'] = 0x0;
    ['LG'] = !0x1;
    ['Lg'](bz) {
        if (0x0n !== bz) {
            for (let bj = 0x0; bj < this['UH']; bj++)
                if (this['UI'][bj] === bz) {
                    this['UH']--, this['fN'] = !0x0;
                    for (let ba = bj; ba < this['UH']; ba++) this['UW'][ba] = this['UW'][ba + 0x1], this['mD'][ba] = this['mD'][ba + 0x1], this['UI'][ba] = this['UI'][ba + 0x1];
                    return this['NB']['or'](0x17), void this['NB']['W'](bz);
                }
        }
    } ['Lu'](bz) {
        const Do = uh;
        if (0x0n === bz) return;
        if (this['UH'] >= 0x64) return void this['LM'](0x0, Do(0x17a), '');
        let bj = xZ['HC'](xZ['HT'](bz));
        for (let ba = 0x0; ba < this['UH']; ba++)
            if (this['UI'][ba] === bz) return void this['LM'](0x0, bj + Do(0x25b), '');
        for (let bq = 0x0; bq < this['ff']; bq++)
            if (this['fm'][bq] === bz) return void this['LM'](0x0, Do(0x210) + bj + Do(0x2a1), '');
        this['UC'] && this['UC']['pB'] && bj !== this['UC']['pB'] && (this['UW'][this['UH']] = bj, this['UI'][this['UH']] = bz, this['mD'][this['UH']] = 0x0, this['UH']++, this['fN'] = !0x0, this['NB']['or'](0x14), this['NB']['W'](bz));
    } ['LF'](bz) {
        const DQ = uh;
        let bj = bz['hh'];
        if (0xc9 === bj && (this['fU'] = !0x0, this['L1'] = !0x1, this['fD'] = !0x0, this['fq'] = '', this['L0'] = 0x1, this['fj'] = DQ(0x279)), 0xca === bj && (this['fU'] = !0x0, this['L1'] = !0x1, this['fD'] = !0x0, this['fq'] = '', this['L0'] = 0x2, this['fj'] = 'Enter\x20name\x20of\x20friend\x20to\x20delete\x20from\x20list'), 0xcd === bj) return this['v2'] = 0xfa, !0x0;
        if (0x1f5 === bj && (this['fU'] = !0x0, this['L1'] = !0x1, this['fD'] = !0x0, this['fq'] = '', this['L0'] = 0x4, this['fj'] = DQ(0x1e0)), 0x1f6 === bj && (this['fU'] = !0x0, this['L1'] = !0x1, this['fD'] = !0x0, this['fq'] = '', this['L0'] = 0x5, this['fj'] = DQ(0x2b3)), bj >= 0x12c && bj <= 0x139) {
            let ba = (bj - 0x12c) / 0x2 | 0x0,
                bq = 0x1 & bj,
                bT = this['UA'][ba];
            if (-0x1 !== bT) {
                for (;;)
                    if (0x0 === bq && (bT--, bT < 0x0 && (bT = xw['EJ'] - 0x1)), 0x1 === bq && (bT++, bT >= xw['EJ'] && (bT = 0x0)), !xw['EI'][bT]['Pa'] && xw['EI'][bT]['Pz'] === ba + (this['Ug'] ? 0x0 : 0x7)) {
                        this['UA'][ba] = bT, this['UT'] = !0x0;
                        break;
                    }
            }
        }
        if (bj >= 0x13a && bj <= 0x143) {
            let bI = (bj - 0x13a) / 0x2 | 0x0,
                bJ = 0x1 & bj,
                bV = this['Uq'][bI];
            0x0 === bJ && (bV--, bV < 0x0 && (bV = xr['pk'][bI][DQ(0x2ea)] - 0x1)), 0x1 === bJ && (bV++, bV >= xr['pk'][bI][DQ(0x2ea)] && (bV = 0x0)), this['Uq'][bI] = bV, this['UT'] = !0x0;
        }
        if (0x144 !== bj || this['Ug'] || (this['Ug'] = !0x0, this['LO']()), 0x145 === bj && this['Ug'] && (this['Ug'] = !0x1, this['LO']()), 0x146 === bj) {
            this['NB']['or'](0xb), this['NB']['k'](this['Ug'] ? 0x0 : 0x1);
            for (let xG = 0x0; xG < 0x7; xG++) this['NB']['k'](this['UA'][xG]);
            for (let xg = 0x0; xg < 0x5; xg++) this['NB']['k'](this['Uq'][xg]);
            return !0x0;
        }
        return 0x265 === bj && (this['Lr'] = !this['Lr']), bj >= 0x259 && bj <= 0x264 && (this['LD'](), this['Ll'][DQ(0x2ea)] > 0x0 && (this['NB']['or'](0x30), this['NB']['W'](xZ['Ha'](this['Ll'])), this['NB']['k'](bj - 0x259), this['NB']['k'](this['Lr'] ? 0x1 : 0x0))), !0x1;
    } ['LC'](bz, bj, ba, bq, bT, bI, bJ, bV) {
        if (this['fx'] ? this['fF'] = 0x20 : this['fF'] = 0x0, this['fx'] = !0x1, bz >= bI && bz < bI + 0x10 && bj >= bJ && bj < bJ + 0x10) bV['l3'] -= 0x4 * this['mX'], bT && (this['fN'] = !0x0);
        else {
            if (bz >= bI && bz < bI + 0x10 && bj >= bJ + bq - 0x10 && bj < bJ + bq) bV['l3'] += 0x4 * this['mX'], bT && (this['fN'] = !0x0);
            else {
                if (bz >= bI - this['fF'] && bz < bI + this['fF'] + 0x10 && bj >= bJ + 0x10 && bj < bJ + bq - 0x10 && this['mX'] > 0x0) {
                    let xG = (bq - 0x20) * bq / ba | 0x0;
                    xG < 0x8 && (xG = 0x8);
                    let xg = bj - bJ - (xG / 0x2 | 0x0) - 0x10,
                        xu = bq - xG - 0x20;
                    bV['l3'] = (ba - bq) * xg / xu | 0x0, bT && (this['fN'] = !0x0), this['fx'] = !0x0;
                }
            }
        }
    } ['Ly']() {
        const DZ = uh;
        0x0 === this['Lv'] && 0x0 === this['Lf'] && (this['fr'][this['fZ']] = 'Walk\x20here', this['LA'][this['fZ']] = 0x294, this['LQ'][this['fZ']] = this['YG'], this['Lc'][this['fZ']] = this['YA'], this['fZ']++);
        let bz = -0x1;
        for (let bj = 0x0; bj < XW['wP']; bj++) {
            let ba = XW['wp'][bj],
                bq = 0x7f & ba,
                bT = ba >> 0x7 & 0x7f,
                bI = ba >> 0x1d & 0x3,
                bJ = ba >> 0xe & 0x7fff;
            if (ba !== bz) {
                if (bz = ba, 0x2 === bI && this['Nq'] && this['Nq']['H6'](this['v1'], bq, bT, ba) >= 0x0) {
                    let bV = XS[DZ(0x321)](bJ);
                    if (0x1 === this['Lv']) this['fr'][this['fZ']] = DZ(0x30f) + this['LB'] + DZ(0x293) + bV[DZ(0x260)], this['LA'][this['fZ']] = 0x1c2, this['Lo'][this['fZ']] = ba, this['LQ'][this['fZ']] = bq, this['Lc'][this['fZ']] = bT, this['fZ']++;
                    else {
                        if (0x1 !== this['Lf']) {
                            if (bV['Rk']) {
                                for (let xG = 0x4; xG >= 0x0; xG--) bV['Rk'][xG] && (this['fr'][this['fZ']] = bV['Rk'][xG] + DZ(0x27c) + bV[DZ(0x260)], 0x0 === xG && (this['LA'][this['fZ']] = 0x11d), 0x1 === xG && (this['LA'][this['fZ']] = 0x1f8), 0x2 === xG && (this['LA'][this['fZ']] = 0x16c), 0x3 === xG && (this['LA'][this['fZ']] = 0x245), 0x4 === xG && (this['LA'][this['fZ']] = 0x5dd), this['Lo'][this['fZ']] = ba, this['LQ'][this['fZ']] = bq, this['Lc'][this['fZ']] = bT, this['fZ']++);
                            }
                            this['fr'][this['fZ']] = 'Examine\x20@cya@' + bV[DZ(0x260)], this['LA'][this['fZ']] = 0x497, this['Lo'][this['fZ']] = ba, this['LQ'][this['fZ']] = bq, this['Lc'][this['fZ']] = bT, this['fZ']++;
                        } else 0x4 & ~this['Lb'] || (this['fr'][this['fZ']] = this['Lh'] + DZ(0x27c) + bV[DZ(0x260)], this['LA'][this['fZ']] = 0x37, this['Lo'][this['fZ']] = ba, this['LQ'][this['fZ']] = bq, this['Lc'][this['fZ']] = bT, this['fZ']++);
                    }
                }
                if (0x1 === bI) {
                    let xg = this['nM'][bJ];
                    if (xg && xg['pT'] && 0x1 === xg['pT'][DZ(0x225)] && 0x40 == (0x7f & xg['x']) && 0x40 == (0x7f & xg['z']))
                        for (let xu = 0x0; xu < this['U3']; xu++) {
                            let xM = this['nM'][this['nW'][xu]];
                            xM && xM !== xg && xM['pT'] && 0x1 === xM['pT'][DZ(0x225)] && xM['x'] === xg['x'] && xM['z'] === xg['z'] && this['Lz'](xM['pT'], this['nW'][xu], bq, bT);
                        }
                    xg && xg['pT'] && this['Lz'](xg['pT'], bJ, bq, bT);
                }
                if (0x0 === bI) {
                    let xF = this['nx'][bJ];
                    if (xF && 0x40 == (0x7f & xF['x']) && 0x40 == (0x7f & xF['z'])) {
                        for (let xO = 0x0; xO < this['U3']; xO++) {
                            let xD = this['nM'][this['nW'][xO]];
                            xD && xD['pT'] && 0x1 === xD['pT'][DZ(0x225)] && xD['x'] === xF['x'] && xD['z'] === xF['z'] && this['Lz'](xD['pT'], this['nW'][xO], bq, bT);
                        }
                        for (let xC = 0x0; xC < this['U0']; xC++) {
                            let xy = this['nx'][this['nk'][xC]];
                            xy && xy !== xF && xy['x'] === xF['x'] && xy['z'] === xF['z'] && this['Lj'](xy, this['nk'][xC], bq, bT);
                        }
                    }
                    xF && this['Lj'](xF, bJ, bq, bT);
                }
                if (0x3 === bI) {
                    let xz = this['Up'][this['v1']][bq][bT];
                    if (!xz) continue;
                    for (let xj = xz['u'](); xj; xj = xz['o']()) {
                        let xa = xc[DZ(0x321)](xj['lL']);
                        if (0x1 === this['Lv']) this['fr'][this['fZ']] = DZ(0x30f) + this['LB'] + '\x20with\x20@lre@' + xa[DZ(0x260)], this['LA'][this['fZ']] = 0xd9, this['Lo'][this['fZ']] = xj['lL'], this['LQ'][this['fZ']] = bq, this['Lc'][this['fZ']] = bT, this['fZ']++;
                        else {
                            if (0x1 !== this['Lf']) {
                                for (let xq = 0x4; xq >= 0x0; xq--) xa['Rk'] && xa['Rk'][xq] ? (this['fr'][this['fZ']] = xa['Rk'][xq] + DZ(0x136) + xa[DZ(0x260)], 0x0 === xq && (this['LA'][this['fZ']] = 0xe0), 0x1 === xq && (this['LA'][this['fZ']] = 0x3e1), 0x2 === xq && (this['LA'][this['fZ']] = 0x63), 0x3 === xq && (this['LA'][this['fZ']] = 0x2ea), 0x4 === xq && (this['LA'][this['fZ']] = 0x36d), this['Lo'][this['fZ']] = xj['lL'], this['LQ'][this['fZ']] = bq, this['Lc'][this['fZ']] = bT, this['fZ']++) : 0x2 === xq && (this['fr'][this['fZ']] = 'Take\x20@lre@' + xa[DZ(0x260)], this['LA'][this['fZ']] = 0x63, this['Lo'][this['fZ']] = xj['lL'], this['LQ'][this['fZ']] = bq, this['Lc'][this['fZ']] = bT, this['fZ']++);
                                this['fr'][this['fZ']] = DZ(0x197) + xa[DZ(0x260)], this['LA'][this['fZ']] = 0x44e, this['Lo'][this['fZ']] = xj['lL'], this['LQ'][this['fZ']] = bq, this['Lc'][this['fZ']] = bT, this['fZ']++;
                            } else 0x1 & ~this['Lb'] || (this['fr'][this['fZ']] = this['Lh'] + DZ(0x136) + xa[DZ(0x260)], this['LA'][this['fZ']] = 0x3c5, this['Lo'][this['fZ']] = xj['lL'], this['LQ'][this['fZ']] = bq, this['Lc'][this['fZ']] = bT, this['fZ']++);
                        }
                    }
                }
            }
        }
    } ['La']() {
        const DY = uh;
        this['Uz'] || (this['Lq'](), this['YV'] = null, this['vT'] = null, this['vJ'] = null, this['vV'] = null, this['n4'] = null, this['n7'] = null, this['n6'] = null, this['nZ'] = null, this['nd'] = null, this['nc'] = null, this['Uz'] = new XM(0x1df, 0x60), this['Ue'] = new XM(0xa8, 0xa0), Xu[DY(0x2aa)](), this['mZ']?.['Zj'](0x0, 0x0), this['UG'] = new XM(0xbe, 0x105), this['UX'] = new XM(0x200, 0x14e), Xu[DY(0x2aa)](), this['UU'] = new XM(0x1f5, 0x3d), this['Uv'] = new XM(0x120, 0x28), this['Ux'] = new XM(0x10d, 0x42), this['vW'] = !0x0);
    } ['LT']() {
        const DE = uh;
        if (0x1 === this['Yg']) {
            if (this['YC'] >= 0x8 && this['YC'] <= 0x6c && this['Yb'] >= 0x1ea && this['Yb'] <= 0x20a) this['fu'] = (this['fu'] + 0x1) % 0x4, this['mm'] = !0x0, this['fU'] = !0x0, this['NB']['or'](0x0), this['NB']['k'](this['fu']), this['NB']['k'](this['fg']), this['NB']['k'](this['fM']);
            else {
                if (this['YC'] >= 0x89 && this['YC'] <= 0xed && this['Yb'] >= 0x1ea && this['Yb'] <= 0x20a) this['fg'] = (this['fg'] + 0x1) % 0x3, this['mm'] = !0x0, this['fU'] = !0x0, this['NB']['or'](0x0), this['NB']['k'](this['fu']), this['NB']['k'](this['fg']), this['NB']['k'](this['fM']);
                else {
                    if (this['YC'] >= 0x113 && this['YC'] <= 0x177 && this['Yb'] >= 0x1ea && this['Yb'] <= 0x20a) this['fM'] = (this['fM'] + 0x1) % 0x3, this['mm'] = !0x0, this['fU'] = !0x0, this['NB']['or'](0x0), this['NB']['k'](this['fu']), this['NB']['k'](this['fg']), this['NB']['k'](this['fM']);
                    else {
                        if (this['YC'] >= 0x1a0 && this['YC'] <= 0x204 && this['Yb'] >= 0x1ea && this['Yb'] <= 0x20a) {
                            this['LD'](), this['Ll'] = '', this['Lr'] = !0x1;
                            for (let bz = 0x0; bz < xl['EI'][DE(0x2ea)]; bz++)
                                if (xl['EI'][bz] && 0x258 === xl['EI'][bz]['hh']) return void(this['NG'] = this['mO'] = xl['EI'][bz]['QX']);
                        }
                    }
                }
            }
        }
    }
    async ['LI']() {
        const Dd = uh;
        for (;;) {
            let bz;
            do {
                for (;;) {
                    if (bz = this['Ex'](), -0x1 === bz) return;
                    if (-0x1 !== this['mO'] && this['mO'] === this['NG']) {
                        0x8 === bz && this['Ll'][Dd(0x2ea)] > 0x0 && (this['Ll'] = this['Ll']['substring'](0x0, this['Ll']['length'] - 0x1));
                        break;
                    }
                    if (this['fD']) {
                        if (bz >= 0x20 && bz <= 0x7a && this['fq'][Dd(0x2ea)] < 0x50 && (this['fq'] = this['fq'] + String['fromCharCode'](bz), this['fU'] = !0x0), 0x8 === bz && this['fq']['length'] > 0x0 && (this['fq'] = this['fq']['substring'](0x0, this['fq'][Dd(0x2ea)] - 0x1), this['fU'] = !0x0), 0xd === bz || 0xa === bz) {
                            let bj;
                            if (this['fD'] = !0x1, this['fU'] = !0x0, 0x1 === this['L0'] && (bj = xZ['Ha'](this['fq']), this['Lu'](bj)), 0x2 === this['L0'] && this['UH'] > 0x0 && (bj = xZ['Ha'](this['fq']), this['Lg'](bj)), 0x3 === this['L0'] && this['fq'][Dd(0x2ea)] > 0x0 && this['m8']) {
                                this['NB']['or'](0x29), this['NB']['k'](0x0);
                                let ba = this['NB']['S'];
                                this['NB']['W'](this['m8']), k1['j'](this['NB'], this['fq']), this['NB']['V'](this['NB']['S'] - ba), this['fq'] = xZ['Hq'](this['fq']), this['fq'] = xX['Nv'](this['fq']), this['LM'](0x6, this['fq'], xZ['HC'](xZ['HT'](this['m8']))), 0x2 === this['fg'] && (this['fg'] = 0x1, this['mm'] = !0x0, this['NB']['or'](0x0), this['NB']['k'](this['fu']), this['NB']['k'](this['fg']), this['NB']['k'](this['fM']));
                            }
                            0x4 === this['L0'] && this['ff'] < 0x64 && (bj = xZ['Ha'](this['fq']), this['LJ'](bj)), 0x5 === this['L0'] && this['ff'] > 0x0 && (bj = xZ['Ha'](this['fq']), this['LV'](bj));
                        }
                    } else {
                        if (this['L1']) {
                            if (bz >= 0x30 && bz <= 0x39 && this['fi'][Dd(0x2ea)] < 0xa && (this['fi'] = this['fi'] + String[Dd(0x226)](bz), this['fU'] = !0x0), 0x8 === bz && this['fi'][Dd(0x2ea)] > 0x0 && (this['fi'] = this['fi'][Dd(0x250)](0x0, this['fi'][Dd(0x2ea)] - 0x1), this['fU'] = !0x0), 0xd === bz || 0xa === bz) {
                                if (this['fi'][Dd(0x2ea)] > 0x0) {
                                    let bq = 0x0;
                                    try {
                                        bq = parseInt(this['fi'], 0xa);
                                    } catch (bT) {}
                                    this['NB']['or'](0x60), this['NB']['X'](bq);
                                }
                                this['L1'] = !0x1, this['fU'] = !0x0;
                            }
                        } else {
                            if (-0x1 === this['fw'] && (bz >= 0x20 && (bz <= 0x7a || this['L5'][Dd(0x2cb)]('::') && bz <= 0x7e) && this['L5']['length'] < 0x50 && (this['L5'] = this['L5'] + String[Dd(0x226)](bz), this['fU'] = !0x0), 0x8 === bz && this['L5'][Dd(0x2ea)] > 0x0 && (this['L5'] = this['L5'][Dd(0x250)](0x0, this['L5'][Dd(0x2ea)] - 0x1), this['fU'] = !0x0), (0xd === bz || 0xa === bz) && this['L5'][Dd(0x2ea)] > 0x0)) {
                                if (this['L5'][Dd(0x2cb)]('::')) {
                                    if (Dd(0x1a6) === this['L5']) this['mz'] = !0x0;
                                    else {
                                        if (Dd(0x2ac) === this['L5']) this['mz'] = !0x1;
                                        else {
                                            if (this['L5'][Dd(0x2cb)](Dd(0x278))) try {
                                                let bI = parseInt(this['L5'][Dd(0x250)](0x6)) || 0x32;
                                                this['EC'](bI);
                                            } catch (bJ) {} else this['NB']['or'](0x27), this['NB']['k'](this['L5'][Dd(0x2ea)] - 0x1), this['NB']['oY'](this['L5'][Dd(0x250)](0x2));
                                        }
                                    }
                                } else {
                                    let bV = 0x0;
                                    this['L5'][Dd(0x2cb)](Dd(0x2e5)) ? (bV = 0x0, this['L5'] = this['L5'][Dd(0x250)](0x7)) : this['L5']['startsWith'](Dd(0x20d)) ? (bV = 0x1, this['L5'] = this['L5'][Dd(0x250)](0x4)) : this['L5']['startsWith']('green:') ? (bV = 0x2, this['L5'] = this['L5'][Dd(0x250)](0x6)) : this['L5']['startsWith'](Dd(0x326)) ? (bV = 0x3, this['L5'] = this['L5'][Dd(0x250)](0x5)) : this['L5']['startsWith'](Dd(0x30e)) ? (bV = 0x4, this['L5'] = this['L5'][Dd(0x250)](0x7)) : this['L5'][Dd(0x2cb)](Dd(0x1b5)) ? (bV = 0x5, this['L5'] = this['L5'][Dd(0x250)](0x6)) : this['L5'][Dd(0x2cb)](Dd(0x1c0)) ? (bV = 0x6, this['L5'] = this['L5'][Dd(0x250)](0x7)) : this['L5'][Dd(0x2cb)](Dd(0x17e)) ? (bV = 0x7, this['L5'] = this['L5'][Dd(0x250)](0x7)) : this['L5'][Dd(0x2cb)](Dd(0x31c)) ? (bV = 0x8, this['L5'] = this['L5'][Dd(0x250)](0x7)) : this['L5']['startsWith']('glow1:') ? (bV = 0x9, this['L5'] = this['L5'][Dd(0x250)](0x6)) : this['L5'][Dd(0x2cb)](Dd(0x1c2)) ? (bV = 0xa, this['L5'] = this['L5'][Dd(0x250)](0x6)) : this['L5'][Dd(0x2cb)]('glow3:') && (bV = 0xb, this['L5'] = this['L5'][Dd(0x250)](0x6));
                                    let xG = 0x0;
                                    this['L5'][Dd(0x2cb)](Dd(0x2b9)) && (xG = 0x1, this['L5'] = this['L5'][Dd(0x250)](0x5)), this['L5'][Dd(0x2cb)]('scroll:') && (xG = 0x2, this['L5'] = this['L5'][Dd(0x250)](0x7)), this['NB']['or'](0x2d), this['NB']['k'](0x0);
                                    let xg = this['NB']['S'];
                                    this['NB']['k'](bV), this['NB']['k'](xG), k1['j'](this['NB'], this['L5']), this['NB']['V'](this['NB']['S'] - xg), this['L5'] = xZ['Hq'](this['L5']), this['L5'] = xX['Nv'](this['L5']), this['UC'] && this['UC']['pB'] && (this['UC']['Pe'] = this['L5'], this['UC']['PG'] = bV, this['UC']['Pg'] = xG, this['UC']['Px'] = 0x96, this['LM'](0x2, this['UC']['Pe'], this['UC']['pB'])), 0x2 === this['fu'] && (this['fu'] = 0x3, this['mm'] = !0x0, this['NB']['or'](0x0), this['NB']['k'](this['fu']), this['NB']['k'](this['fg']), this['NB']['k'](this['fM']));
                                }
                                this['L5'] = '', this['fU'] = !0x0;
                            }
                        }
                    }
                }
            } while ((bz < 0x61 || bz > 0x7a) && (bz < 0x41 || bz > 0x5a) && (bz < 0x30 || bz > 0x39) && 0x20 !== bz);
            this['Ll'][Dd(0x2ea)] < 0xc && (this['Ll'] = this['Ll'] + String[Dd(0x226)](bz));
        }
    } ['LW'](bz) {
        const Dw = uh;
        let bj = bz['hh'];
        return bj >= 0x1 && bj <= 0xc8 ? (bj >= 0x65 ? bj -= 0x65 : bj--, this['fr'][this['fZ']] = Dw(0x306) + this['UW'][bj], this['LA'][this['fZ']] = 0x22d, this['fZ']++, this['fr'][this['fZ']] = 'Message\x20@whi@' + this['UW'][bj], this['LA'][this['fZ']] = 0x2a7, this['fZ']++, !0x0) : bj >= 0x191 && bj <= 0x1f4 && (this['fr'][this['fZ']] = Dw(0x306) + bz['hy'], this['LA'][this['fZ']] = 0x22c, this['fZ']++, !0x0);
    } ['LS'](bz, bj, ba, bq, bT, bI) {
        const DR = uh;
        if (0x0 !== bz['hP'] || !bz['hm'] || bz['hU'] || bj < bq || ba < bT || bj > bq + bz['ZR'] || ba > bT + bz['Zc'] || !bz['hf'] || !bz['hL']) return;
        let bJ = bz['hm']['length'];
        for (let bV = 0x0; bV < bJ; bV++) {
            let xG = bz['hf'][bV] + bq,
                xg = bz['hL'][bV] + bT - bI,
                xu = xl['EI'][bz['hm'][bV]];
            if (xG += xu['x'], xg += xu['y'], (xu['hl'] >= 0x0 || 0x0 !== xu['ha']) && bj >= xG && ba >= xg && bj < xG + xu['ZR'] && ba < xg + xu['Zc'] && (xu['hl'] >= 0x0 ? this['LL'] = xu['hl'] : this['LL'] = xu['hH']), 0x0 === xu['hP']) this['LS'](xu, bj, ba, xG, xg, xu['l3']), xu['hn'] > xu['Zc'] && this['LC'](bj, ba, xu['hn'], xu['Zc'], !0x0, xG + xu['ZR'], xg, xu);
            else {
                if (0x2 === xu['hP']) {
                    let xM = 0x0;
                    for (let xF = 0x0; xF < xu['Zc']; xF++)
                        for (let xO = 0x0; xO < xu['ZR']; xO++) {
                            let xD = xG + xO * (xu['hB'] + 0x20),
                                xC = xg + xF * (xu['hX'] + 0x20);
                            if (xM < 0x14 && xu['hx'] && xu['hG'] && (xD += xu['hx'][xM], xC += xu['hG'][xM]), bj < xD || ba < xC || bj >= xD + 0x20 || ba >= xC + 0x20) {
                                xM++;
                                continue;
                            }
                            if (this['Ln'] = xM, this['LE'] = xu['hH'], !xu['he'] || xu['he'][xM] <= 0x0) {
                                xM++;
                                continue;
                            }
                            let xy = xc[DR(0x321)](xu['he'][xM] - 0x1);
                            if (0x1 === this['Lv'] && xu['hb']) xu['hH'] === this['Le'] && xM === this['LN'] || (this['fr'][this['fZ']] = DR(0x30f) + this['LB'] + DR(0x187) + xy[DR(0x260)], this['LA'][this['fZ']] = 0x371, this['Lo'][this['fZ']] = xy['Eq'], this['LQ'][this['fZ']] = xM, this['Lc'][this['fZ']] = xu['hH'], this['fZ']++);
                            else {
                                if (0x1 === this['Lf'] && xu['hb']) 0x10 & ~this['Lb'] || (this['fr'][this['fZ']] = this['Lh'] + DR(0x136) + xy[DR(0x260)], this['LA'][this['fZ']] = 0x187, this['Lo'][this['fZ']] = xy['Eq'], this['LQ'][this['fZ']] = xM, this['Lc'][this['fZ']] = xu['hH'], this['fZ']++);
                                else {
                                    if (xu['hb']) {
                                        for (let xz = 0x4; xz >= 0x3; xz--) xy['p7'] && xy['p7'][xz] ? (this['fr'][this['fZ']] = xy['p7'][xz] + DR(0x136) + xy['name'], 0x3 === xz ? this['LA'][this['fZ']] = 0x1de : 0x4 === xz && (this['LA'][this['fZ']] = 0x15b), this['Lo'][this['fZ']] = xy['Eq'], this['LQ'][this['fZ']] = xM, this['Lc'][this['fZ']] = xu['hH'], this['fZ']++) : 0x4 === xz && (this['fr'][this['fZ']] = DR(0x18b) + xy[DR(0x260)], this['LA'][this['fZ']] = 0x15b, this['Lo'][this['fZ']] = xy['Eq'], this['LQ'][this['fZ']] = xM, this['Lc'][this['fZ']] = xu['hH'], this['fZ']++);
                                    }
                                    if (xu['hk'] && (this['fr'][this['fZ']] = 'Use\x20@lre@' + xy[DR(0x260)], this['LA'][this['fZ']] = 0xbc, this['Lo'][this['fZ']] = xy['Eq'], this['LQ'][this['fZ']] = xM, this['Lc'][this['fZ']] = xu['hH'], this['fZ']++), xu['hb'] && xy['p7']) {
                                        for (let xj = 0x2; xj >= 0x0; xj--) xy['p7'][xj] && (this['fr'][this['fZ']] = xy['p7'][xj] + DR(0x136) + xy[DR(0x260)], 0x0 === xj ? this['LA'][this['fZ']] = 0x195 : 0x1 === xj ? this['LA'][this['fZ']] = 0x26 : 0x2 === xj && (this['LA'][this['fZ']] = 0x1a6), this['Lo'][this['fZ']] = xy['Eq'], this['LQ'][this['fZ']] = xM, this['Lc'][this['fZ']] = xu['hH'], this['fZ']++);
                                    }
                                    if (xu['hM']) {
                                        for (let xa = 0x4; xa >= 0x0; xa--) xu['hM'][xa] && (this['fr'][this['fZ']] = xu['hM'][xa] + DR(0x136) + xy['name'], 0x0 === xa ? this['LA'][this['fZ']] = 0x25a : 0x1 === xa ? this['LA'][this['fZ']] = 0x254 : 0x2 === xa ? this['LA'][this['fZ']] = 0x16 : 0x3 === xa ? this['LA'][this['fZ']] = 0x37c : 0x4 === xa && (this['LA'][this['fZ']] = 0x19f), this['Lo'][this['fZ']] = xy['Eq'], this['LQ'][this['fZ']] = xM, this['Lc'][this['fZ']] = xu['hH'], this['fZ']++);
                                    }
                                    this['fr'][this['fZ']] = DR(0x197) + xy[DR(0x260)], this['LA'][this['fZ']] = 0x6ed, this['Lo'][this['fZ']] = xy['Eq'], xu['hs'] && (this['Lc'][this['fZ']] = xu['hs'][xM]), this['fZ']++;
                                }
                            }
                            xM++;
                        }
                } else {
                    if (bj >= xG && ba >= xg && bj < xG + xu['ZR'] && ba < xg + xu['Zc']) {
                        if (0x1 === xu['hp']) {
                            let xq = !0x1;
                            0x0 !== xu['hh'] && (xq = this['LW'](xu)), !xq && xu['l2'] && (this['fr'][this['fZ']] = xu['l2'], this['LA'][this['fZ']] = 0x3b7, this['Lc'][this['fZ']] = xu['hH'], this['fZ']++);
                        } else {
                            if (0x2 === xu['hp'] && 0x0 === this['Lf']) {
                                let xT = xu['hi'];
                                xT && -0x1 !== xT[DR(0x269)]('\x20') && (xT = xT[DR(0x250)](0x0, xT[DR(0x269)]('\x20'))), this['fr'][this['fZ']] = xT + DR(0x23a) + xu['l0'], this['LA'][this['fZ']] = 0x3a2, this['Lc'][this['fZ']] = xu['hH'], this['fZ']++;
                            } else 0x3 === xu['hp'] ? (this['fr'][this['fZ']] = 'Close', this['LA'][this['fZ']] = 0x3b3, this['Lc'][this['fZ']] = xu['hH'], this['fZ']++) : 0x4 === xu['hp'] && xu['l2'] ? (this['fr'][this['fZ']] = xu['l2'], this['LA'][this['fZ']] = 0x1d1, this['Lc'][this['fZ']] = xu['hH'], this['fZ']++) : 0x5 === xu['hp'] && xu['l2'] ? (this['fr'][this['fZ']] = xu['l2'], this['LA'][this['fZ']] = 0x3c0, this['Lc'][this['fZ']] = xu['hH'], this['fZ']++) : 0x6 === xu['hp'] && !this['LG'] && xu['l2'] && (this['fr'][this['fZ']] = xu['l2'], this['LA'][this['fZ']] = 0x2c, this['Lc'][this['fZ']] = xu['hH'], this['fZ']++);
                        }
                    }
                }
            }
        }
    } ['Li']() {
        return this['He'] ? this['e0'](this['v1'], this['nw'], this['no']) - this['n2'] >= 0x320 || !(0x4 & this['He'][this['v1']][this['nw'] >> 0x7][this['no'] >> 0x7]) ? 0x3 : this['v1'] : 0x0;
    } ['e1']() {
        let bz = 0x3;
        if (this['Ns'] < 0x136 && this['UC']) {
            let bj, ba, bq, bT, bI = this['nw'] >> 0x7,
                bJ = this['no'] >> 0x7,
                bV = this['UC']['x'] >> 0x7,
                xG = this['UC']['z'] >> 0x7;
            if (this['He'] && 0x4 & this['He'][this['v1']][bI][bJ] && (bz = this['v1']), bj = bV > bI ? bV - bI : bI - bV, ba = xG > bJ ? xG - bJ : bJ - xG, bj > ba) {
                for (bq = 0x10000 * ba / bj | 0x0, bT = 0x8000; bI !== bV;) bI < bV ? bI++ : bI > bV && bI--, this['He'] && 0x4 & this['He'][this['v1']][bI][bJ] && (bz = this['v1']), bT += bq, bT >= 0x10000 && (bT -= 0x10000, bJ < xG ? bJ++ : bJ > xG && bJ--, this['He'] && 0x4 & this['He'][this['v1']][bI][bJ] && (bz = this['v1']));
            } else {
                for (bq = 0x10000 * bj / ba | 0x0, bT = 0x8000; bJ !== xG;) bJ < xG ? bJ++ : bJ > xG && bJ--, this['He'] && 0x4 & this['He'][this['v1']][bI][bJ] && (bz = this['v1']), bT += bq, bT >= 0x10000 && (bT -= 0x10000, bI < bV ? bI++ : bI > bV && bI--, this['He'] && 0x4 & this['He'][this['v1']][bI][bJ] && (bz = this['v1']));
            }
        }
        return this['UC'] && this['He'] && 0x4 & this['He'][this['v1']][this['UC']['x'] >> 0x7][this['UC']['z'] >> 0x7] && (bz = this['v1']), bz;
    } ['e2']() {
        for (let bz = -0x1; bz < this['U0']; bz++) {
            let bj;
            bj = -0x1 === bz ? 0x7ff : this['nk'][bz];
            let ba = this['nx'][bj];
            ba && ba['Px'] > 0x0 && (ba['Px']--, 0x0 === ba['Px'] && (ba['Pe'] = null));
        }
        for (let bq = 0x0; bq < this['U3']; bq++) {
            let bT = this['nW'][bq],
                bI = this['nM'][bT];
            bI && bI['Px'] > 0x0 && (bI['Px']--, 0x0 === bI['Px'] && (bI['Pe'] = null));
        }
    } ['e3'](bz) {
        if (bz['PY'] === this['nQ'] || -0x1 === bz['PA'] || 0x0 !== bz['Pu'] || bz['Pb'] + 0x1 > Xi['EI'][bz['PA']]['tQ'][bz['Pk']]) {
            let bj = bz['PY'] - bz['P7'],
                ba = this['nQ'] - bz['P7'],
                bq = 0x80 * bz['P3'] + 0x40 * bz['Pl'],
                bT = 0x80 * bz['Hi'] + 0x40 * bz['Pl'],
                bI = 0x80 * bz['P1'] + 0x40 * bz['Pl'],
                bJ = 0x80 * bz['P6'] + 0x40 * bz['Pl'];
            bz['x'] = (bq * (bj - ba) + bI * ba) / bj | 0x0, bz['z'] = (bT * (bj - ba) + bJ * ba) / bj | 0x0;
        }
        bz['Pr'] = 0x0, 0x0 === bz['P4'] && (bz['PE'] = 0x400), 0x1 === bz['P4'] && (bz['PE'] = 0x600), 0x2 === bz['P4'] && (bz['PE'] = 0x0), 0x3 === bz['P4'] && (bz['PE'] = 0x200), bz['cp'] = bz['PE'];
    } ['e4'](bz) {
        const Dc = uh;
        if (0x0 === this['L2']) return;
        let bj = 0x0;
        0x0 !== this['Ni'] && (bj = 0x1);
        for (let ba = 0x0; ba < 0x64; ba++)
            if (null !== this['fV'][ba]) {
                let bq = this['fJ'][ba];
                if ((0x3 === bq || 0x7 === bq) && (0x7 === bq || 0x0 === this['fg'] || 0x1 === this['fg'] && this['e5'](this['fS'][ba]))) {
                    let bT = 0x149 - 0xd * bj;
                    if (this['YG'] > 0x8 && this['YG'] < 0x208 && bz - 0xb > bT - 0xa && bz - 0xb <= bT + 0x3 && (this['Um'] && (this['fr'][this['fZ']] = Dc(0x18a) + this['fS'][ba], this['LA'][this['fZ']] = 0x7f2, this['fZ']++), this['fr'][this['fZ']] = 'Add\x20ignore\x20@whi@' + this['fS'][ba], this['LA'][this['fZ']] = 0x984, this['fZ']++, this['fr'][this['fZ']] = Dc(0x1c3) + this['fS'][ba], this['LA'][this['fZ']] = 0x966, this['fZ']++), bj++, bj >= 0x5) return;
                }
                if ((0x5 === bq || 0x6 === bq) && this['fg'] < 0x2 && (bj++, bj >= 0x5)) return;
            }
    } ['e6'](bz) {
        if (bz['On'] = bz['PL'], 0x0 === bz['Pw']) return void(bz['Pr'] = 0x0);
        if (-0x1 !== bz['PA'] && 0x0 === bz['Pu'] && !Xi['EI'][bz['PA']]['t5']) return void bz['Pr']++;
        let {
            x: bj,
            z: ba
        } = bz, bq = 0x80 * bz['P2'][bz['Pw'] - 0x1] + 0x40 * bz['Pl'], bT = 0x80 * bz['P5'][bz['Pw'] - 0x1] + 0x40 * bz['Pl'];
        if (bq - bj <= 0x100 && bq - bj >= -0x100 && bT - ba <= 0x100 && bT - ba >= -0x100) {
            bz['PE'] = bj < bq ? ba < bT ? 0x500 : ba > bT ? 0x700 : 0x600 : bj > bq ? ba < bT ? 0x300 : ba > bT ? 0x100 : 0x200 : ba < bT ? 0x400 : 0x0;
            let bI = bz['PE'] - bz['cp'] & 0x7ff;
            bI > 0x400 && (bI -= 0x800);
            let bJ = bz['P8'];
            bI >= -0x100 && bI <= 0x100 ? bJ = bz['PB'] : bI >= 0x100 && bI < 0x300 ? bJ = bz['PR'] : bI >= -0x300 && bI <= -0x100 && (bJ = bz['PQ']), -0x1 === bJ && (bJ = bz['PB']), bz['On'] = bJ;
            let bV = 0x4;
            bz['cp'] !== bz['PE'] && -0x1 === bz['Pv'] && (bV = 0x2), bz['Pw'] > 0x2 && (bV = 0x6), bz['Pw'] > 0x3 && (bV = 0x8), bz['Pr'] > 0x0 && bz['Pw'] > 0x1 && (bV = 0x8, bz['Pr']--), bz['Pc'][bz['Pw'] - 0x1] && (bV <<= 0x1), bV >= 0x8 && bz['On'] === bz['PB'] && -0x1 !== bz['Ph'] && (bz['On'] = bz['Ph']), bj < bq ? (bz['x'] += bV, bz['x'] > bq && (bz['x'] = bq)) : bj > bq && (bz['x'] -= bV, bz['x'] < bq && (bz['x'] = bq)), ba < bT ? (bz['z'] += bV, bz['z'] > bT && (bz['z'] = bT)) : ba > bT && (bz['z'] -= bV, bz['z'] < bT && (bz['z'] = bT)), bz['x'] === bq && bz['z'] === bT && bz['Pw']--;
        } else bz['x'] = bq, bz['z'] = bT;
    } ['e7']() {
        if (0x1 === this['Yg'] && this['UC']) {
            let bz = this['YC'] - 0x15 - 0x231,
                bj = this['Yb'] - 0x9 - 0x5;
            if (bz >= 0x0 && bj >= 0x0 && bz < 0x92 && bj < 0x97) {
                bz -= 0x49, bj -= 0x4b;
                let ba = this['vO'] + this['vI'] & 0x7ff,
                    bq = XO['oy'][ba],
                    bT = XO['Y3'][ba];
                bq = bq * (this['vp'] + 0x100) >> 0x8, bT = bT * (this['vp'] + 0x100) >> 0x8;
                let bI = bj * bq + bz * bT >> 0xb,
                    bJ = bj * bT - bz * bq >> 0xb,
                    bV = this['UC']['x'] + bI >> 0x7,
                    xG = this['UC']['z'] - bJ >> 0x7;
                this['e8'](this['UC']['P2'][0x0], this['UC']['P5'][0x0], bV, xG, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0, !0x0) && (this['NB']['k'](bz), this['NB']['k'](bj), this['NB']['o8'](this['vO']), this['NB']['k'](0x39), this['NB']['k'](this['vI']), this['NB']['k'](this['vp']), this['NB']['k'](0x59), this['NB']['o8'](this['UC']['x']), this['NB']['o8'](this['UC']['z']), this['NB']['k'](this['UM']), this['NB']['k'](0x3f));
            }
        }
    } ['e9'](bz) {
        if (bz < 0x0) return !0x1;
        let bj = this['LA'][bz];
        return bj >= 0x7d0 && (bj -= 0x7d0), 0x196 === bj;
    } ['eo'](bz) {
        let bj;
        if (bz['P9'] = !0x1, -0x1 !== bz['On'] && (bj = Xi['EI'][bz['On']], bz['PU']++, bj['tQ'] && bz['Po'] < bj['tZ'] && bz['PU'] > bj['tQ'][bz['Po']] && (bz['PU'] = 0x0, bz['Po']++), bz['Po'] >= bj['tZ'] && (bz['PU'] = 0x0, bz['Po'] = 0x0)), -0x1 !== bz['PA'] && 0x0 === bz['Pu']) {
            for (bj = Xi['EI'][bz['PA']], bz['Pb']++; bj['tQ'] && bz['Pk'] < bj['tZ'] && bz['Pb'] > bj['tQ'][bz['Pk']];) bz['Pb'] -= bj['tQ'][bz['Pk']], bz['Pk']++;
            bz['Pk'] >= bj['tZ'] && (bz['Pk'] -= bj['tE'], bz['PX']++, bz['PX'] >= bj['t8'] && (bz['PA'] = -0x1), (bz['Pk'] < 0x0 || bz['Pk'] >= bj['tZ']) && (bz['PA'] = -0x1)), bz['P9'] = bj['t3'];
        }
        if (bz['Pu'] > 0x0 && bz['Pu']--, -0x1 !== bz['HI'] && this['nQ'] >= bz['HS']) {
            for (bz['HV'] < 0x0 && (bz['HV'] = 0x0), bj = xd['EI'][bz['HI']]['HE'], bz['HJ']++; bj && bj['tQ'] && bz['HV'] < bj['tZ'] && bz['HJ'] > bj['tQ'][bz['HV']];) bz['HJ'] -= bj['tQ'][bz['HV']], bz['HV']++;
            bj && bz['HV'] >= bj['tZ'] && (bz['HV'] < 0x0 || bz['HV'] >= bj['tZ']) && (bz['HI'] = -0x1);
        }
    } ['eQ'](bz) {
        const Dr = uh;
        if (-0x1 !== bz['Pv'] && bz['Pv'] < 0x8000) {
            let ba = this['nM'][bz['Pv']];
            if (ba) {
                let bq = bz['x'] - ba['x'],
                    bT = bz['z'] - ba['z'];
                0x0 === bq && 0x0 === bT || (bz['PE'] = 325.949 * Math[Dr(0x325)](bq, bT) & 0x7ff);
            }
        }
        if (bz['Pv'] >= 0x8000) {
            let bI = bz['Pv'] - 0x8000;
            bI === this['UB'] && (bI = 0x7ff);
            let bJ = this['nx'][bI];
            if (bJ) {
                let bV = bz['x'] - bJ['x'],
                    xG = bz['z'] - bJ['z'];
                0x0 === bV && 0x0 === xG || (bz['PE'] = 325.949 * Math[Dr(0x325)](bV, xG) & 0x7ff);
            }
        }
        if ((0x0 !== bz['Pm'] || 0x0 !== bz['Ps']) && (0x0 === bz['Pw'] || bz['Pr'] > 0x0)) {
            let xg = bz['x'] - 0x40 * (bz['Pm'] - this['Nk'] - this['Nk']),
                xu = bz['z'] - 0x40 * (bz['Ps'] - this['va'] - this['va']);
            0x0 === xg && 0x0 === xu || (bz['PE'] = 325.949 * Math['atan2'](xg, xu) & 0x7ff), bz['Pm'] = 0x0, bz['Ps'] = 0x0;
        }
        let bj = bz['PE'] - bz['cp'] & 0x7ff;
        if (0x0 !== bj && (bj < 0x20 || bj > 0x7e0 ? bz['cp'] = bz['PE'] : bj > 0x400 ? bz['cp'] -= 0x20 : bz['cp'] += 0x20, bz['cp'] &= 0x7ff, bz['On'] === bz['PL'] && bz['cp'] !== bz['PE'])) {
            if (-0x1 !== bz['Pf']) return void(bz['On'] = bz['Pf']);
            bz['On'] = bz['PB'];
        }
    } ['LM'](bz, bj, ba) {
        0x0 === bz && -0x1 !== this['fW'] && (this['fy'] = bj, this['Yg'] = 0x0), -0x1 === this['fw'] && (this['fU'] = !0x0);
        for (let bq = 0x63; bq > 0x0; bq--) this['fJ'][bq] = this['fJ'][bq - 0x1], this['fS'][bq] = this['fS'][bq - 0x1], this['fV'][bq] = this['fV'][bq - 0x1];
        this['fJ'][0x0] = bz, this['fS'][0x0] = ba, this['fV'][0x0] = bj;
    } ['eZ'](bz, bj) {
        const DH = uh;
        let ba = 0x0;
        for (let bq = 0x0; bq < 0x64; bq++) {
            if (!this['fV'][bq]) continue;
            let bT = this['fJ'][bq],
                bI = this['fL'] + 0x46 + 0x4 - 0xe * ba;
            if (bI < -0x14) break;
            0x0 === bT && ba++, 0x1 !== bT && 0x2 !== bT || !(0x1 === bT || 0x0 === this['fu'] || 0x1 === this['fu'] && this['e5'](this['fS'][bq])) || (bj > bI - 0xe && bj <= bI && this['UC'] && this['fS'][bq] !== this['UC']['pB'] && (this['Um'] && (this['fr'][this['fZ']] = DH(0x18a) + this['fS'][bq], this['LA'][this['fZ']] = 0x22, this['fZ']++), this['fr'][this['fZ']] = DH(0x2cf) + this['fS'][bq], this['LA'][this['fZ']] = 0x1b4, this['fZ']++, this['fr'][this['fZ']] = 'Add\x20friend\x20@whi@' + this['fS'][bq], this['LA'][this['fZ']] = 0x196, this['fZ']++), ba++), 0x3 !== bT && 0x7 !== bT || 0x0 !== this['L2'] || !(0x7 === bT || 0x0 === this['fg'] || 0x1 === this['fg'] && this['e5'](this['fS'][bq])) || (bj > bI - 0xe && bj <= bI && (this['Um'] && (this['fr'][this['fZ']] = DH(0x18a) + this['fS'][bq], this['LA'][this['fZ']] = 0x22, this['fZ']++), this['fr'][this['fZ']] = DH(0x2cf) + this['fS'][bq], this['LA'][this['fZ']] = 0x1b4, this['fZ']++, this['fr'][this['fZ']] = DH(0x1c3) + this['fS'][bq], this['LA'][this['fZ']] = 0x196, this['fZ']++), ba++), 0x4 === bT && (0x0 === this['fM'] || 0x1 === this['fM'] && this['e5'](this['fS'][bq])) && (bj > bI - 0xe && bj <= bI && (this['fr'][this['fZ']] = DH(0x240) + this['fS'][bq], this['LA'][this['fZ']] = 0x387, this['fZ']++), ba++), (0x5 === bT || 0x6 === bT) && 0x0 === this['L2'] && this['fg'] < 0x2 && ba++, 0x8 === bT && (0x0 === this['fM'] || 0x1 === this['fM'] && this['e5'](this['fS'][bq])) && (bj > bI - 0xe && bj <= bI && (this['fr'][this['fZ']] = DH(0x2de) + this['fS'][bq], this['LA'][this['fZ']] = 0x16b, this['fZ']++), ba++);
        }
    } ['eY']() {
        const DP = uh;
        let bz = 0x0;
        for (let bj = 0x0; bj < 0x63; bj++) {
            let ba = bj + 0x1;
            bz += ba + 0x12c * Math[DP(0x212)](0x2, ba / 0x7) | 0x0, this['fO'][bj] = bz / 0x4 | 0x0;
        }
    }
    async ['eE'](bz) {
        let bj = xh['EI'][bz]['hd'];
        if (0x0 !== bj) {
            let ba = this['LK'][bz];
            if (0x1 === bj && (0x1 === ba && XO['Yp'](0.9), 0x2 === ba && XO['Yp'](0.8), 0x3 === ba && XO['Yp'](0.7), 0x4 === ba && XO['Yp'](0.6), xc['p3']?.['dr'](), this['vW'] = !0x0), 0x3 === bj) {
                let bq = this['mx'];
                0x0 === ba && (this['my'] = 0x80, kN(0x80), this['mx'] = !0x0), 0x1 === ba && (this['my'] = 0x60, kN(0x60), this['mx'] = !0x0), 0x2 === ba && (this['my'] = 0x40, kN(0x40), this['mx'] = !0x0), 0x3 === ba && (this['my'] = 0x20, kN(0x20), this['mx'] = !0x0), 0x4 === ba && (this['mx'] = !0x1), this['mx'] !== bq && (this['mx'] && this['me'] ? await this['ed'](this['me'], this['mg'], this['mM'], !0x1) : kK(!0x1), this['m0'] = 0x0);
            }
            0x4 === bj && (0x0 === ba && (this['m1'] = 0x80, kp(0x80), this['mw'] = !0x0), 0x1 === ba && (this['m1'] = 0x60, kp(0x60), this['mw'] = !0x0), 0x2 === ba && (this['m1'] = 0x40, kp(0x40), this['mw'] = !0x0), 0x3 === ba && (this['m1'] = 0x20, kp(0x20), this['mw'] = !0x0), 0x4 === ba && (this['mw'] = !0x1)), 0x5 === bj && (this['Lp'] = ba), 0x6 === bj && (this['L3'] = ba), 0x8 === bj && (this['L2'] = ba, this['fU'] = !0x0);
        }
    } ['ew'](bz) {
        let bj = xl['EI'][bz];
        if (bj['hm'])
            for (let ba = 0x0; ba < bj['hm']['length'] && -0x1 !== bj['hm'][ba]; ba++) {
                let bq = xl['EI'][bj['hm'][ba]];
                0x1 === bq['hP'] && this['ew'](bq['hH']), bq['Hd'] = 0x0, bq['Hw'] = 0x0;
            }
    } ['eR'](bz) {
        let bj = bz['P7'] - this['nQ'],
            ba = 0x80 * bz['P3'] + 0x40 * bz['Pl'],
            bq = 0x80 * bz['Hi'] + 0x40 * bz['Pl'];
        bz['x'] += (ba - bz['x']) / bj | 0x0, bz['z'] += (bq - bz['z']) / bj | 0x0, bz['Pr'] = 0x0, 0x0 === bz['P4'] && (bz['PE'] = 0x400), 0x1 === bz['P4'] && (bz['PE'] = 0x600), 0x2 === bz['P4'] && (bz['PE'] = 0x0), 0x3 === bz['P4'] && (bz['PE'] = 0x200);
    } ['ec']() {
        const Dp = uh;
        for (let bz = this['nA'][Dp(0x32b)](); bz; bz = this['nA']['next']())
            if (bz['ld'] !== this['v1'] || this['nQ'] > bz['lp']) bz['p']();
            else {
                if (this['nQ'] >= bz['lP']) {
                    if (bz['lK'] > 0x0) {
                        let bj = this['nM'][bz['lK'] - 0x1];
                        bj && bz['lv'](bj['x'], this['e0'](bz['ld'], bj['x'], bj['z']) - bz['lH'], bj['z'], this['nQ']);
                    }
                    if (bz['lK'] < 0x0) {
                        let ba, bq = -bz['lK'] - 0x1;
                        ba = bq === this['UB'] ? this['UC'] : this['nx'][bq], ba && bz['lv'](ba['x'], this['e0'](bz['ld'], ba['x'], ba['z']) - bz['lH'], ba['z'], this['nQ']);
                    }
                    bz['ln'](this['v6']), this['Nq']?.['rl'](this['v1'], 0x0 | bz['x'], 0x0 | bz['y'], 0x0 | bz['z'], null, bz, -0x1, bz['cp'], 0x3c, !0x1);
                }
            }
    } ['er']() {
        for (let bz = 0x0; bz < this['U3']; bz++) {
            let bj = this['nW'][bz],
                ba = this['nM'][bj];
            ba && ba['pT'] && this['ln'](ba);
        }
    } ['eH']() {
        for (let bz = 0x0; bz < this['U3']; bz++) {
            let bj = this['nM'][this['nW'][bz]],
                ba = 0x1fffffff + (this['nW'][bz] << 0xe) + 0x1 | 0x0;
            if (!bj || !bj['pq']()) continue;
            let bq = bj['x'] >> 0x7,
                bT = bj['z'] >> 0x7;
            if (!(bq < 0x0 || bq >= 0x68 || bT < 0x0 || bT >= 0x68)) {
                if (0x1 === bj['Pl'] && 0x40 == (0x7f & bj['x']) && 0x40 == (0x7f & bj['z'])) {
                    if (this['nn'][bq][bT] === this['v5']) continue;
                    this['nn'][bq][bT] = this['v5'];
                }
                this['Nq']?.['rl'](this['v1'], bj['x'], this['e0'](this['v1'], bj['x'], bj['z']), bj['z'], null, bj, ba, bj['cp'], 0x40 * (bj['Pl'] - 0x1) + 0x3c, bj['P9']);
            }
        }
    } ['eP']() {
        const Dh = uh;
        for (let bz = this['nS'][Dh(0x32b)](); bz; bz = this['nS']['next']()) bz['lU'] !== this['v1'] || bz['lm'] ? bz['p']() : this['nQ'] >= bz['lP'] && (bz['ln'](this['v6']), bz['lm'] ? bz['p']() : this['Nq']?.['rl'](bz['lU'], bz['x'], bz['y'], bz['z'], null, bz, -0x1, 0x0, 0x3c, !0x1));
    } ['ep']() {
        if (this['UC']) {
            this['UC']['x'] >> 0x7 === this['v0'] && this['UC']['z'] >> 0x7 === this['vE'] && (this['v0'] = 0x0);
            for (let bz = -0x1; bz < this['U0']; bz++) {
                let bj, ba;
                if (-0x1 === bz ? (bj = this['UC'], ba = 0x1ffc000) : (bj = this['nx'][this['nk'][bz]], ba = this['nk'][bz] << 0xe), !bj || !bj['pq']()) continue;
                bj['ZT'] = (xx['ZT'] && this['U0'] > 0x32 || this['U0'] > 0xc8) && -0x1 !== bz && bj['On'] === bj['PL'];
                let bq = bj['x'] >> 0x7,
                    bT = bj['z'] >> 0x7;
                if (!(bq < 0x0 || bq >= 0x68 || bT < 0x0 || bT >= 0x68)) {
                    if (!bj['pj'] || this['nQ'] < bj['pC'] || this['nQ'] >= bj['py']) {
                        if (0x40 == (0x7f & bj['x']) && 0x40 == (0x7f & bj['z'])) {
                            if (this['nn'][bq][bT] === this['v5']) continue;
                            this['nn'][bq][bT] = this['v5'];
                        }
                        bj['y'] = this['e0'](this['v1'], bj['x'], bj['z']), this['Nq']?.['rl'](this['v1'], bj['x'], bj['y'], bj['z'], null, bj, ba, bj['cp'], 0x3c, bj['P9']);
                    } else bj['ZT'] = !0x1, bj['y'] = this['e0'](this['v1'], bj['x'], bj['z']), this['Nq']?.['rw'](this['v1'], bj['x'], bj['y'], bj['z'], bj['c5'], bj['c6'], bj['c8'], bj['c7'], null, bj, ba, bj['cp']);
                }
            }
        }
    } ['eh']() {
        const Dl = uh;
        for (let bz = -0x1; bz < this['U0']; bz++) {
            let bj;
            bj = -0x1 === bz ? 0x7ff : this['nk'][bz];
            let ba = this['nx'][bj];
            ba && this['ln'](ba);
        }
        if (xx['v7']++, xx['v7'] > 0x57e) {
            xx['v7'] = 0x0, this['NB']['or'](0x6e), this['NB']['k'](0x0);
            let bq = this['NB']['S'];
            this['NB']['k'](0xa2), this['NB']['k'](0x16), 0x2 * Math['random']() | 0x0 || this['NB']['k'](0x54), this['NB']['o8'](0x7c50), this['NB']['o8'](0x34b2), 0x2 * Math[Dl(0x291)]() | 0x0 || this['NB']['k'](0x7b), 0x2 * Math['random']() | 0x0 || this['NB']['k'](0x86), this['NB']['k'](0x64), this['NB']['k'](0x5e), this['NB']['o8'](0x8ac1), this['NB']['V'](this['NB']['S'] - bq);
        }
    } ['ln'](bz) {
        (bz['x'] < 0x80 || bz['z'] < 0x80 || bz['x'] >= 0x3380 || bz['z'] >= 0x3380) && (bz['PA'] = -0x1, bz['HI'] = -0x1, bz['P7'] = 0x0, bz['PY'] = 0x0, bz['x'] = 0x80 * bz['P2'][0x0] + 0x40 * bz['Pl'], bz['z'] = 0x80 * bz['P5'][0x0] + 0x40 * bz['Pl'], bz['Pw'] = 0x0), bz === this['UC'] && (bz['x'] < 0x600 || bz['z'] < 0x600 || bz['x'] >= 0x2e00 || bz['z'] >= 0x2e00) && (bz['PA'] = -0x1, bz['HI'] = -0x1, bz['P7'] = 0x0, bz['PY'] = 0x0, bz['x'] = 0x80 * bz['P2'][0x0] + 0x40 * bz['Pl'], bz['z'] = 0x80 * bz['P5'][0x0] + 0x40 * bz['Pl'], bz['Pw'] = 0x0), bz['P7'] > this['nQ'] ? this['eR'](bz) : bz['PY'] >= this['nQ'] ? this['e3'](bz) : this['e6'](bz), this['eQ'](bz), this['eo'](bz);
    } ['el']() {
        const DK = uh;
        for (let bz = this['U2'][DK(0x32b)](); bz; bz = this['U2']['next']()) {
            let bj = !0x1;
            if (bz['Hw'] += this['v6'], -0x1 === bz['Hd'] && (bz['Hd'] = 0x0, bj = !0x0), bz['HE']['tQ']) {
                for (; bz['Hw'] > bz['HE']['tQ'][bz['Hd']];)
                    if (bz['Hw'] -= bz['HE']['tQ'][bz['Hd']] + 0x1, bz['Hd']++, bj = !0x0, bz['Hd'] >= bz['HE']['tZ'] && (bz['Hd'] -= bz['HE']['tE'], bz['Hd'] < 0x0 || bz['Hd'] >= bz['HE']['tZ'])) {
                        bz['p'](), bj = !0x1;
                        break;
                    }
            }
            if (bj && this['Nq']) {
                let {
                    Ho: ba,
                    HZ: bq,
                    HY: bT
                } = bz, bI = 0x0;
                if (0x0 === bz['HQ'] ? bI = this['Nq']['rq'](ba, bq, bT) : 0x1 === bz['HQ'] ? bI = this['Nq']['H7'](ba, bT, bq) : 0x2 === bz['HQ'] ? bI = this['Nq']['ra'](ba, bq, bT) : 0x3 === bz['HQ'] && (bI = this['Nq']['H4'](ba, bq, bT)), this['Hf'] && 0x0 !== bI && (bI >> 0xe & 0x7fff) === bz[DK(0x156)]) {
                    let bJ = this['Hf'][ba][bq][bT],
                        bV = this['Hf'][ba][bq + 0x1][bT],
                        xG = this['Hf'][ba][bq + 0x1][bT + 0x1],
                        xg = this['Hf'][ba][bq][bT + 0x1],
                        xu = XS[DK(0x321)](bz[DK(0x156)]),
                        xM = -0x1;
                    if (-0x1 !== bz['Hd'] && bz['HE']['t4'] && (xM = bz['HE']['t4'][bz['Hd']]), 0x2 === bz['HQ']) {
                        let xF = this['Nq']['H6'](ba, bq, bT, bI),
                            xO = 0x1f & xF,
                            xD = xF >> 0x6;
                        xO === kr['Qe']['id'] && (xO = kr['Qf']['id']), this['Nq']?.['rE'](ba, bq, bT, xu['t2'](xO, xD, bJ, bV, xG, xg, xM));
                    } else {
                        if (0x1 === bz['HQ']) this['Nq']?.['rK'](ba, bq, bT, xu['t2'](kr['Qm']['id'], 0x0, bJ, bV, xG, xg, xM));
                        else {
                            if (0x0 === bz['HQ']) {
                                let xC = this['Nq']['H6'](ba, bq, bT, bI),
                                    xy = 0x1f & xC,
                                    xz = xC >> 0x6;
                                if (xy === kr['QN']['id']) {
                                    let xj = xz + 0x1 & 0x3;
                                    this['Nq']?.['rv'](bq, bT, ba, xu['t2'](kr['QN']['id'], xz + 0x4, bJ, bV, xG, xg, xM), xu['t2'](kr['QN']['id'], xj, bJ, bV, xG, xg, xM));
                                } else this['Nq']?.['rs'](ba, bq, bT, xu['t2'](xy, xz, bJ, bV, xG, xg, xM));
                            } else {
                                if (0x3 === bz['HQ']) {
                                    let xa = this['Nq']['H6'](ba, bq, bT, bI) >> 0x6;
                                    this['Nq']?.['rp'](ba, bq, bT, xu['t2'](kr['QU']['id'], xa, bJ, bV, xG, xg, xM));
                                }
                            }
                        }
                    }
                } else bz['p']();
            }
        }
    } ['eK']() {
        const DN = uh;
        try {
            this['NA'] = -0x1, this['U2']['clear'](), this['nS'][DN(0x2aa)](), this['nA'][DN(0x2aa)](), XO['YK'](), this['eN'](), this['Nq']?.['rk']();
            for (let ba = 0x0; ba < 0x4; ba++) this['ND'][ba]?.['QF']();
            let bz = new xQ(0x68, 0x68, this['Hf'], this['He']);
            xQ['ZT'] = xx['ZT'];
            let bj = this['n8']?.[DN(0x2ea)] ?? 0x0;
            if (this['vs'])
                for (let bq = 0x0; bq < bj; bq++) {
                    let bT = this['vs'][bq] >> 0x8,
                        bI = 0xff & this['vs'][bq];
                    if (0x21 === bT && bI >= 0x47 && bI <= 0x49) {
                        xQ['ZT'] = !0x1;
                        break;
                    }
                }
            if (xx['ZT'] ? this['Nq']?.['rS'](this['v1']) : this['Nq']?.['rS'](0x0), this['vs'] && this['n8']) {
                this['NB']['or'](0x9a);
                for (let bJ = 0x0; bJ < bj; bJ++) {
                    let bV = 0x40 * (this['vs'][bJ] >> 0x8) - this['Nk'],
                        xG = 0x40 * (0xff & this['vs'][bJ]) - this['va'],
                        xg = this['n8'][bJ];
                    if (xg) {
                        let xu = kh[DN(0x26a)](xg, -0x1, !0x1, !0x0);
                        bz['HM'](0x8 * (this['n5'] - 0x6), 0x8 * (this['vg'] - 0x6), bV, xG, xu);
                    } else this['vg'] < 0x320 && bz['Hu'](xG, bV, 0x40, 0x40);
                }
            }
            if (this['vs'] && this['vQ']) {
                this['NB']['or'](0x9a);
                for (let xM = 0x0; xM < bj; xM++) {
                    let xF = 0x40 * (this['vs'][xM] >> 0x8) - this['Nk'],
                        xO = 0x40 * (0xff & this['vs'][xM]) - this['va'],
                        xD = this['vQ'][xM];
                    if (xD) {
                        let xC = kh['decompress'](xD, -0x1, !0x1, !0x0);
                        bz['HF'](this['Nq'], this['U2'], this['ND'], xC, xF, xO);
                    }
                }
            }
            this['NB']['or'](0x9a), bz['HG'](this['Nq'], this['ND']), this['UX']?.[DN(0x2bd)](), this['NB']['or'](0x9a);
            for (let xy = this['U2']['head'](); xy; xy = this['U2']['next']()) 0x2 === (this['He'] && 0x2 & this['He'][0x1][xy['HZ']][xy['HY']]) && (xy['Ho']--, xy['Ho'] < 0x0 && xy['p']());
            for (let xz = 0x0; xz < 0x68; xz++)
                for (let xj = 0x0; xj < 0x68; xj++) this['ev'](xz, xj);
            this['en']();
        } catch (xa) {}
        XS['RL']?.['dr'](), XO['YE'](0x14);
    }
    async ['eU']() {
        this['nU'] && this['nU']['Kc'](), this['nU'] = null, this['YO'] = !0x1, this['vx'] = 0x0, this['nG'] = '', this['nu'] = '', this['ni'] = '', kU['ZQ'](), this['eN'](), this['Nq']?.['rk']();
        for (let bz = 0x0; bz < 0x4; bz++) this['ND'][bz]?.['QF']();
        kK(!0x1), this['me'] = null, this['m0'] = 0x0;
    } ['em'](bz, bj) {
        this['na'] = 0x0, this['nq'] = 0x0, this['ef'](bz), this['eL'](bz, bj), this['ee'](bz);
        for (let ba = 0x0; ba < this['na']; ba++) {
            let bq = this['nC'][ba],
                bT = this['nM'][bq];
            bT && (bT['Y1'] !== this['nQ'] && (bT['pT'] = null, this['nM'][bq] = null));
        }
        if (bz['S'] !== bj) throw new Error();
        for (let bI = 0x0; bI < this['U3']; bI++)
            if (!this['nM'][this['nW'][bI]]) throw new Error();
    }
    async ['es']() {
        const Dv = uh;
        if (!this['nU']) return !0x1;
        try {
            let bz = this['nU']['oP'];
            if (0x0 === bz) return !0x1;
            if (-0x1 === this['vw'] && (await this['nU']['Kw'](this['in']['R'], 0x0, 0x1), this['vw'] = 0xff & this['in']['R'][0x0], this['NI'] && (this['vw'] = this['vw'] - this['NI']['oH'] & 0xff), this['vc'] = xs[this['vw']], bz--), -0x1 === this['vc']) {
                if (bz <= 0x0) return !0x1;
                await this['nU']['Kw'](this['in']['R'], 0x0, 0x1), this['vc'] = 0xff & this['in']['R'][0x0], bz--;
            }
            if (-0x2 === this['vc']) {
                if (bz <= 0x1) return !0x1;
                await this['nU']['Kw'](this['in']['R'], 0x0, 0x2), this['in']['S'] = 0x0, this['vc'] = this['in']['oZ'](), bz -= 0x2;
            }
            if (bz < this['vc']) return !0x1;
            if (this['in']['S'] = 0x0, await this['nU']['Kw'](this['in']['R'], 0x0, this['vc']), this['NJ'] = 0x0, this['vY'] = this['vX'], this['vX'] = this['vh'], this['vh'] = this['vw'], 0x96 === this['vw']) {
                let bj = this['in']['oZ'](),
                    ba = this['in']['oo']();
                return this['LY'][bj] = ba, this['LK'][bj] !== ba && (this['LK'][bj] = ba, await this['eE'](bj), this['fN'] = !0x0, -0x1 !== this['fW'] && (this['fU'] = !0x0)), this['vw'] = -0x1, !0x0;
            }
            if (0x98 === this['vw']) {
                let bq = this['in']['od'](),
                    bT = this['in']['m'](),
                    bI = xZ['HC'](xZ['HT'](bq));
                for (let bV = 0x0; bV < this['UH']; bV++)
                    if (bq === this['UI'][bV]) {
                        this['mD'][bV] !== bT && (this['mD'][bV] = bT, this['fN'] = !0x0, bT > 0x0 && this['LM'](0x5, bI + Dv(0x1f9), ''), 0x0 === bT && this['LM'](0x5, bI + Dv(0x201), '')), bI = null;
                        break;
                    } bI && this['UH'] < 0x64 && (this['UI'][this['UH']] = bq, this['UW'][this['UH']] = bI, this['mD'][this['UH']] = bT, this['UH']++, this['fN'] = !0x0);
                let bJ = !0x1;
                for (; !bJ;) {
                    bJ = !0x0;
                    for (let xG = 0x0; xG < this['UH'] - 0x1; xG++)
                        if (this['mD'][xG] !== xx['Nz'] && this['mD'][xG + 0x1] === xx['Nz'] || 0x0 === this['mD'][xG] && 0x0 !== this['mD'][xG + 0x1]) {
                            let xg = this['mD'][xG];
                            this['mD'][xG] = this['mD'][xG + 0x1], this['mD'][xG + 0x1] = xg;
                            let xu = this['UW'][xG];
                            this['UW'][xG] = this['UW'][xG + 0x1], this['UW'][xG + 0x1] = xu;
                            let xM = this['UI'][xG];
                            this['UI'][xG] = this['UI'][xG + 0x1], this['UI'][xG + 0x1] = xM, this['fN'] = !0x0, bJ = !0x1;
                        }
                }
                return this['vw'] = -0x1, !0x0;
            }
            if (0x2b === this['vw']) return this['Ni'] = 0x1e * this['in']['oZ'](), this['vw'] = -0x1, !0x0;
            if (0x50 === this['vw']) {
                let xF = this['in']['m'](),
                    xO = this['in']['m']();
                if (this['vs'] && this['n8'] && this['NS']) {
                    let xD = -0x1;
                    for (let xC = 0x0; xC < this['vs'][Dv(0x2ea)]; xC++) this['vs'][xC] === (xF << 0x8) + xO && (xD = xC); - 0x1 !== xD && (this['db']?.['lS']('m' + xF + '_' + xO, this['n8'][xD]), this['NS'][xD] = !0x0);
                }
                return this['vw'] = -0x1, !0x0;
            }
            if (0x1 === this['vw']) return this['em'](this['in'], this['vc']), this['vw'] = -0x1, !0x0;
            if (0xed === this['vw']) {
                let xy = this['in']['oZ'](),
                    xz = this['in']['oZ']();
                if (this['n5'] === xy && this['vg'] === xz && 0x0 !== this['Nj']) return this['vw'] = -0x1, !0x0;
                this['n5'] = xy, this['vg'] = xz, this['Nk'] = 0x8 * (this['n5'] - 0x6), this['va'] = 0x8 * (this['vg'] - 0x6), this['Nj'] = 0x1, this['UX']?.[Dv(0x2bd)](), this['U7']?.['lV'](0x101, 0x97, 'Loading\x20-\x20please\x20wait.', 0x0), this['U7']?.['lV'](0x100, 0x96, Dv(0x27f), 0xffffff), this['UX']?.[Dv(0x173)](0x8, 0xb);
                let xj = (this['vc'] - 0x2) / 0xa | 0x0;
                this['n8'] = new kY(xj, null), this['NS'] = new kY(xj, !0x1), this['vQ'] = new kY(xj, null), this['Na'] = new kY(xj, !0x1), this['vs'] = new Int32Array(xj), this['NB']['or'](0xa3), this['NB']['k'](0x0);
                let xa = 0x0;
                for (let G0 = 0x0; G0 < xj; G0++) {
                    let G1, G2 = this['in']['m'](),
                        G3 = this['in']['m'](),
                        G4 = this['in']['op'](),
                        G5 = this['in']['op']();
                    this['vs'][G0] = (G2 << 0x8) + G3, 0x0 !== G4 ? (G1 = await this['db']?.['lW']('m' + G2 + '_' + G3), G1 && k8['oN'](G1) !== G4 && (G1 = void 0x0), G1 ? (this['n8'][G0] = G1, this['NS'][G0] = !0x0) : (this['NB']['k'](0x0), this['NB']['k'](G2), this['NB']['k'](G3), xa += 0x3)) : this['NS'][G0] = !0x0, 0x0 !== G5 ? (G1 = await this['db']?.['lW']('l' + G2 + '_' + G3), G1 && k8['oN'](G1) !== G5 && (G1 = void 0x0), G1 ? (this['vQ'][G0] = G1, this['Na'][G0] = !0x0) : (this['NB']['k'](0x1), this['NB']['k'](G2), this['NB']['k'](G3), xa += 0x3)) : this['Na'][G0] = !0x0;
                }
                this['NB']['V'](xa), this['UX']?.[Dv(0x2bd)](), 0x0 === this['Nj'] && (this['U7']?.['lV'](0x101, 0xa6, Dv(0x1dd), 0x0), this['U7']?.['lV'](0x100, 0xa5, 'Map\x20area\x20updated\x20since\x20last\x20visit,\x20so\x20load\x20will\x20take\x20longer\x20this\x20time\x20only', 0xffffff)), this['UX']?.['draw'](0x8, 0xb);
                let xq = this['Nk'] - this['vv'],
                    xT = this['va'] - this['vl'];
                this['vv'] = this['Nk'], this['vl'] = this['va'];
                for (let G6 = 0x0; G6 < 0x2000; G6++) {
                    let G7 = this['nM'][G6];
                    if (G7) {
                        for (let G8 = 0x0; G8 < 0xa; G8++) G7['P2'][G8] -= xq, G7['P5'][G8] -= xT;
                        G7['x'] -= 0x80 * xq, G7['z'] -= 0x80 * xT;
                    }
                }
                for (let G9 = 0x0; G9 < 0x800; G9++) {
                    let Go = this['nx'][G9];
                    if (Go) {
                        for (let GQ = 0x0; GQ < 0xa; GQ++) Go['P2'][GQ] -= xq, Go['P5'][GQ] -= xT;
                        Go['x'] -= 0x80 * xq, Go['z'] -= 0x80 * xT;
                    }
                }
                this['NW'] = !0x0;
                let xI = 0x0,
                    xJ = 0x68,
                    xV = 0x1;
                xq < 0x0 && (xI = 0x67, xJ = -0x1, xV = -0x1);
                let xW = 0x0,
                    xS = 0x68,
                    xi = 0x1;
                xT < 0x0 && (xW = 0x67, xS = -0x1, xi = -0x1);
                for (let GZ = xI; GZ !== xJ; GZ += xV)
                    for (let GY = xW; GY !== xS; GY += xi) {
                        let GE = GZ + xq,
                            Gd = GY + xT;
                        for (let Gw = 0x0; Gw < 0x4; Gw++) this['Up'][Gw][GZ][GY] = GE >= 0x0 && Gd >= 0x0 && GE < 0x68 && Gd < 0x68 ? this['Up'][Gw][GE][Gd] : null;
                    }
                for (let GR = this['UK']['head'](); GR; GR = this['UK'][Dv(0x302)]()) GR['x'] -= xq, GR['z'] -= xT, (GR['x'] < 0x0 || GR['z'] < 0x0 || GR['x'] >= 0x68 || GR['z'] >= 0x68) && GR['p']();
                return 0x0 !== this['v0'] && (this['v0'] -= xq, this['vE'] -= xT), this['vP'] = !0x1, this['vw'] = -0x1, !0x0;
            }
            if (0xc5 === this['vw']) return xl['EI'][this['in']['oZ']()]['Rw'] = this['UC']?.['Pq']() || null, this['vw'] = -0x1, !0x0;
            if (0x19 === this['vw']) return this['fR'] = this['in']['m'](), 0x1 === this['fR'] && (this['fP'] = this['in']['oZ']()), this['fR'] >= 0x2 && this['fR'] <= 0x6 && (0x2 === this['fR'] && (this['fb'] = 0x40, this['fB'] = 0x40), 0x3 === this['fR'] && (this['fb'] = 0x0, this['fB'] = 0x40), 0x4 === this['fR'] && (this['fb'] = 0x80, this['fB'] = 0x40), 0x5 === this['fR'] && (this['fb'] = 0x40, this['fB'] = 0x0), 0x6 === this['fR'] && (this['fb'] = 0x40, this['fB'] = 0x80), this['fR'] = 0x2, this['fA'] = this['in']['oZ'](), this['fk'] = this['in']['oZ'](), this['fs'] = this['in']['m']()), 0xa === this['fR'] && (this['fe'] = this['in']['oZ']()), this['vw'] = -0x1, !0x0;
            if (0x36 === this['vw']) {
                let Gt = this['in']['o9'](),
                    Gc = this['in']['op'](),
                    Gr = this['in']['op']();
                return Gt !== this['me'] && this['mx'] && !xx['ZT'] && await this['ed'](Gt, Gc, Gr, !0x0), this['me'] = Gt, this['mg'] = Gc, this['mM'] = Gr, this['m0'] = 0x0, this['vw'] = -0x1, !0x0;
            }
            if (0x8e === this['vw']) return await this['eU'](), this['vw'] = -0x1, !0x1;
            if (0x14 === this['vw']) {
                let GH = this['in']['m'](),
                    GP = this['in']['m']();
                if (this['vs'] && this['vQ'] && this['Na']) {
                    let Gp = -0x1;
                    for (let Gh = 0x0; Gh < this['vs'][Dv(0x2ea)]; Gh++) this['vs'][Gh] === (GH << 0x8) + GP && (Gp = Gh); - 0x1 !== Gp && (this['db']?.['lS']('l' + GH + '_' + GP, this['vQ'][Gp]), this['Na'][Gp] = !0x0);
                }
                return this['vw'] = -0x1, !0x0;
            }
            if (0x13 === this['vw']) return this['v0'] = 0x0, this['vw'] = -0x1, !0x0;
            if (0x8b === this['vw']) return this['UB'] = this['in']['oZ'](), this['vw'] = -0x1, !0x0;
            if (0x97 === this['vw'] || 0x17 === this['vw'] || 0x32 === this['vw'] || 0xbf === this['vw'] || 0x45 === this['vw'] || 0x31 === this['vw'] || 0xdf === this['vw'] || 0x2a === this['vw'] || 0x4c === this['vw'] || 0x3b === this['vw']) return this['eA'](this['in'], this['vw']), this['vw'] = -0x1, !0x0;
            if (0x1c === this['vw']) {
                let Gl = this['in']['oZ'](),
                    GK = this['in']['oZ']();
                return -0x1 !== this['fw'] && (this['fw'] = -0x1, this['fU'] = !0x0), this['L1'] && (this['L1'] = !0x1, this['fU'] = !0x0), this['mO'] = Gl, this['fd'] = GK, this['fN'] = !0x0, this['mU'] = !0x0, this['LG'] = !0x1, this['vw'] = -0x1, !0x0;
            }
            if (0xaf === this['vw']) {
                let GN = this['in']['oZ'](),
                    Gv = this['in']['op']();
                return this['LY'][GN] = Gv, this['LK'][GN] !== Gv && (this['LK'][GN] = Gv, await this['eE'](GN), this['fN'] = !0x0, -0x1 !== this['fW'] && (this['fU'] = !0x0)), this['vw'] = -0x1, !0x0;
            }
            if (0x92 === this['vw']) {
                let Gn = this['in']['oZ']();
                return xl['EI'][Gn]['RO'] = this['in']['oZ'](), this['vw'] = -0x1, !0x0;
            }
            if (0xa7 === this['vw']) {
                let GU = this['in']['oZ'](),
                    Gm = this['in']['m']();
                return 0xffff === GU && (GU = -0x1), this['fT'][Gm] = GU, this['fN'] = !0x0, this['mU'] = !0x0, this['vw'] = -0x1, !0x0;
            }
            if (0xdc === this['vw']) {
                let Gf = this['in']['m'](),
                    GL = this['in']['m'](),
                    Ge = this['in']['oZ'](),
                    Gs = this['in']['oZ'](),
                    GA = -0x1;
                if (this['vs']) {
                    for (let Gb = 0x0; Gb < this['vs'][Dv(0x2ea)]; Gb++) this['vs'][Gb] === (Gf << 0x8) + GL && (GA = Gb);
                }
                if (-0x1 !== GA && this['vQ']) {
                    this['vQ'][GA] && this['vQ'][GA]?.[Dv(0x2ea)] === Gs || (this['vQ'][GA] = new Uint8Array(Gs));
                    let Gk = this['vQ'][GA];
                    Gk && this['in'][Dv(0x2af)](this['vc'] - 0x6, Ge, Gk);
                }
                return this['vw'] = -0x1, !0x0;
            }
            if (0x85 === this['vw']) {
                let GB = kU['stop']();
                return GB && (this['NB']['or'](0x51), this['NB']['o8'](GB['S']), this['NB']['Z'](GB['R'], GB['S'], 0x0), GB['oE']()), this['vw'] = -0x1, !0x0;
            }
            if (0x62 === this['vw']) {
                this['fN'] = !0x0;
                let GX = this['in']['oZ'](),
                    Gx = xl['EI'][GX],
                    GG = this['in']['m']();
                if (Gx['he'] && Gx['hs']) {
                    for (let Gg = 0x0; Gg < GG; Gg++) {
                        Gx['he'][Gg] = this['in']['oZ']();
                        let Gu = this['in']['m']();
                        0xff === Gu && (Gu = this['in']['op']()), Gx['hs'][Gg] = Gu;
                    }
                    for (let GM = GG; GM < Gx['he']['length']; GM++) Gx['he'][GM] = 0x0, Gx['hs'][GM] = 0x0;
                } else {
                    for (let GF = 0x0; GF < GG; GF++) this['in']['oZ'](), 0xff === this['in']['m']() && this['in']['op']();
                }
                return this['vw'] = -0x1, !0x0;
            }
            if (0xe2 === this['vw']) return kU['Zo'](), this['vw'] = -0x1, !0x0;
            if (0xf3 === this['vw']) return this['fD'] = !0x1, this['L1'] = !0x0, this['fi'] = '', this['fU'] = !0x0, this['vw'] = -0x1, this['Ep'] && kv[Dv(0x1ab)](), !0x0;
            if (0xf === this['vw']) {
                let GO = xl['EI'][this['in']['oZ']()];
                if (GO['he']) {
                    for (let GD = 0x0; GD < GO['he'][Dv(0x2ea)]; GD++) GO['he'][GD] = -0x1, GO['he'][GD] = 0x0;
                }
                return this['vw'] = -0x1, !0x0;
            }
            if (0x8c === this['vw']) {
                if (this['NX'] = this['in']['op'](), this['Ng'] = this['in']['oZ'](), this['NF'] = this['in']['m'](), this['NO'] = this['in']['oZ'](), 0x0 !== this['NX'] && -0x1 === this['mO']) {
                    this['LD']();
                    let GC = 0x28a;
                    0xc9 !== this['NF'] && (GC = 0x28f), this['Ll'] = '', this['Lr'] = !0x1;
                    for (let Gy = 0x0; Gy < xl['EI']['length']; Gy++)
                        if (xl['EI'][Gy] && xl['EI'][Gy]['hh'] === GC) {
                            this['mO'] = xl['EI'][Gy]['QX'];
                            break;
                        }
                }
                return this['vw'] = -0x1, !0x0;
            }
            if (0x7e === this['vw']) return this['fa'] = this['in']['m'](), this['fa'] === this['fz'] && (0x3 === this['fa'] ? this['fz'] = 0x1 : this['fz'] = 0x3, this['fN'] = !0x0), this['vw'] = -0x1, !0x0;
            if (0xd4 === this['vw']) {
                if (this['mx'] && !xx['ZT']) {
                    let Gz = this['in']['oZ'](),
                        Gj = this['in']['R'][Dv(0x27a)](this['in']['S'], this['vc']),
                        Ga = kh['decompress'](Gj, -0x1, !0x1, !0x0);
                    kl(Ga, this['my'], !0x1), this['m0'] = Gz;
                }
                return this['vw'] = -0x1, !0x0;
            }
            if (0xfe === this['vw']) return this['Uf'] = this['in']['m'](), this['vw'] = -0x1, !0x0;
            if (0xc === this['vw']) {
                let Gq = this['in']['oZ'](),
                    GT = this['in']['m'](),
                    GI = this['in']['oZ']();
                return this['mw'] && !xx['ZT'] && this['mo'] < 0x32 && (this['mk'][this['mo']] = Gq, this['mQ'][this['mo']] = GT, this['mB'][this['mo']] = GI + kc['Q9'][Gq], this['mo']++), this['vw'] = -0x1, !0x0;
            }
            if (0xcc === this['vw']) {
                let GJ = this['in']['oZ'](),
                    GV = this['in']['oZ'](),
                    GW = xP[Dv(0x321)](GV);
                return xl['EI'][GJ]['Rw'] = GW['Pq'](), this['vw'] = -0x1, !0x0;
            }
            if (0x7 === this['vw']) return this['wZ'] = this['in']['m'](), this['wc'] = this['in']['m'](), this['vw'] = -0x1, !0x0;
            if (0x67 === this['vw']) {
                let GS = this['in']['oZ'](),
                    Gi = this['in']['oZ'](),
                    g0 = this['in']['oZ']();
                return xl['EI'][GS]['Rw']?.['wW'](Gi, g0), this['vw'] = -0x1, !0x0;
            }
            if (0x20 === this['vw']) return this['fu'] = this['in']['m'](), this['fg'] = this['in']['m'](), this['fM'] = this['in']['m'](), this['mm'] = !0x0, this['fU'] = !0x0, this['vw'] = -0x1, !0x0;
            if (0xc3 === this['vw']) {
                let g1 = this['in']['oZ']();
                return this['ew'](g1), -0x1 !== this['fw'] && (this['fw'] = -0x1, this['fU'] = !0x0), this['L1'] && (this['L1'] = !0x1, this['fU'] = !0x0), this['fd'] = g1, this['fN'] = !0x0, this['mU'] = !0x0, this['mO'] = -0x1, this['LG'] = !0x1, this['vw'] = -0x1, !0x0;
            }
            if (0xe === this['vw']) {
                let g2 = this['in']['oZ']();
                return this['ew'](g2), -0x1 !== this['fd'] && (this['fd'] = -0x1, this['fN'] = !0x0, this['mU'] = !0x0), this['fw'] = g2, this['fU'] = !0x0, this['mO'] = -0x1, this['LG'] = !0x1, this['vw'] = -0x1, !0x0;
            }
            if (0xd1 === this['vw']) {
                let g3 = this['in']['oZ'](),
                    g4 = this['in']['oc'](),
                    g5 = this['in']['oc'](),
                    g6 = xl['EI'][g3];
                return g6['x'] = g4, g6['y'] = g5, this['vw'] = -0x1, !0x0;
            }
            if (0x3 === this['vw']) return this['vP'] = !0x0, this['np'] = this['in']['m'](), this['nr'] = this['in']['m'](), this['nl'] = this['in']['oZ'](), this['nK'] = this['in']['m'](), this['nP'] = this['in']['m'](), this['nP'] >= 0x64 && (this['nw'] = 0x80 * this['np'] + 0x40, this['no'] = 0x80 * this['nr'] + 0x40, this['n2'] = this['e0'](this['v1'], this['np'], this['nr']) - this['nl']), this['vw'] = -0x1, !0x0;
            if (0x87 === this['vw']) {
                this['wZ'] = this['in']['m'](), this['wc'] = this['in']['m']();
                for (let g7 = this['wZ']; g7 < this['wZ'] + 0x8; g7++)
                    for (let g8 = this['wc']; g8 < this['wc'] + 0x8; g8++) this['Up'][this['v1']][g7][g8] && (this['Up'][this['v1']][g7][g8] = null, this['ev'](g7, g8));
                for (let g9 = this['UK'][Dv(0x32b)](); g9; g9 = this['UK'][Dv(0x302)]()) g9['x'] >= this['wZ'] && g9['x'] < this['wZ'] + 0x8 && g9['z'] >= this['wc'] && g9['z'] < this['wc'] + 0x8 && g9['h6'] === this['v1'] && (g9['h1'] = 0x0);
                return this['vw'] = -0x1, !0x0;
            }
            if (0x84 === this['vw']) {
                let go = this['in']['m'](),
                    gQ = this['in']['m'](),
                    gZ = this['in']['oZ'](),
                    gY = this['in']['oZ'](),
                    gE = -0x1;
                if (this['vs']) {
                    for (let gd = 0x0; gd < this['vs'][Dv(0x2ea)]; gd++) this['vs'][gd] === (go << 0x8) + gQ && (gE = gd);
                }
                if (-0x1 !== gE && this['n8']) {
                    this['n8'][gE] && this['n8'][gE]?.[Dv(0x2ea)] === gY || (this['n8'][gE] = new Uint8Array(gY));
                    let gw = this['n8'][gE];
                    gw && this['in'][Dv(0x2af)](this['vc'] - 0x6, gZ, gw);
                }
                return this['vw'] = -0x1, !0x0;
            }
            if (0x29 === this['vw']) {
                let gR = this['in']['od'](),
                    gc = this['in']['op'](),
                    gr = this['in']['m'](),
                    gH = !0x1;
                for (let gP = 0x0; gP < 0x64; gP++)
                    if (this['fI'][gP] === gc) {
                        gH = !0x0;
                        break;
                    } if (gr <= 0x1) {
                    for (let gp = 0x0; gp < this['ff']; gp++)
                        if (this['fm'][gp] === gR) {
                            gH = !0x0;
                            break;
                        }
                }
                if (!gH && 0x0 === this['mi']) try {
                    this['fI'][this['L4']] = gc, this['L4'] = (this['L4'] + 0x1) % 0x64;
                    let gh = k1['l'](this['in'], this['vc'] - 0xd),
                        gl = xX['Nv'](gh);
                    gr > 0x1 ? this['LM'](0x7, gl, xZ['HC'](xZ['HT'](gR))) : this['LM'](0x3, gl, xZ['HC'](xZ['HT'](gR)));
                } catch (gK) {}
                return this['vw'] = -0x1, !0x0;
            }
            if (0xc1 === this['vw']) {
                for (let gN = 0x0; gN < this['LK']['length']; gN++) this['LK'][gN] !== this['LY'][gN] && (this['LK'][gN] = this['LY'][gN], await this['eE'](gN), this['fN'] = !0x0);
                return this['vw'] = -0x1, !0x0;
            }
            if (0x57 === this['vw']) {
                let gv = this['in']['oZ'](),
                    gn = this['in']['oZ']();
                return xl['EI'][gv]['Rw'] = XW['Rw'](gn), this['vw'] = -0x1, !0x0;
            }
            if (0xb9 === this['vw']) return this['fW'] = this['in']['oc'](), this['fU'] = !0x0, this['vw'] = -0x1, !0x0;
            if (0x44 === this['vw']) return 0xc === this['fz'] && (this['fN'] = !0x0), this['UF'] = this['in']['m'](), this['vw'] = -0x1, !0x0;
            if (0x4a === this['vw']) {
                if (this['vP'] = !0x0, this['nm'] = this['in']['m'](), this['ns'] = this['in']['m'](), this['nH'] = this['in']['oZ'](), this['nh'] = this['in']['m'](), this['nR'] = this['in']['m'](), this['nR'] >= 0x64) {
                    let gU = 0x80 * this['nm'] + 0x40,
                        gm = 0x80 * this['ns'] + 0x40,
                        gf = this['e0'](this['v1'], this['nm'], this['ns']) - this['nH'],
                        gL = gU - this['nw'],
                        ge = gf - this['n2'],
                        gs = gm - this['no'],
                        gA = 0x0 | Math['sqrt'](gL * gL + gs * gs);
                    this['Ns'] = 325.949 * Math[Dv(0x325)](ge, gA) & 0x7ff, this['vZ'] = -325.949 * Math[Dv(0x325)](gL, gs) & 0x7ff, this['Ns'] < 0x80 && (this['Ns'] = 0x80), this['Ns'] > 0x17f && (this['Ns'] = 0x17f);
                }
                return this['vw'] = -0x1, !0x0;
            }
            if (0x54 === this['vw']) return this['fz'] = this['in']['m'](), this['fN'] = !0x0, this['mU'] = !0x0, this['vw'] = -0x1, !0x0;
            if (0x4 === this['vw']) {
                let gb, gk = this['in']['o9']();
                if (gk[Dv(0x2fc)](Dv(0x170))) {
                    let gB = gk[Dv(0x250)](0x0, gk[Dv(0x269)](':'));
                    gb = xZ['Ha'](gB);
                    let gX = !0x1;
                    for (let gx = 0x0; gx < this['ff']; gx++)
                        if (this['fm'][gx] === gb) {
                            gX = !0x0;
                            break;
                        } gX || 0x0 !== this['mi'] || this['LM'](0x4, Dv(0x228), gB);
                } else {
                    if (gk[Dv(0x2fc)](Dv(0x185))) {
                        let gG = gk[Dv(0x250)](0x0, gk[Dv(0x269)](':'));
                        gb = xZ['Ha'](gG);
                        let gg = !0x1;
                        for (let gu = 0x0; gu < this['ff']; gu++)
                            if (this['fm'][gu] === gb) {
                                gg = !0x0;
                                break;
                            } gg || 0x0 !== this['mi'] || this['LM'](0x8, Dv(0x177), gG);
                    } else this['LM'](0x0, gk, '');
                }
                return this['vw'] = -0x1, !0x0;
            }
            if (0x2e === this['vw']) {
                let gM = this['in']['oZ'](),
                    gF = this['in']['oZ'](),
                    gO = this['in']['oZ'](),
                    gD = xc[Dv(0x321)](gF);
                return xl['EI'][gM]['Rw'] = gD['pQ'](0x32), xl['EI'][gM]['hW'] = gD['pZ'], xl['EI'][gM]['hS'] = gD['pE'], xl['EI'][gM]['hV'] = 0x64 * gD['pY'] / gO | 0x0, this['vw'] = -0x1, !0x0;
            }
            if (0xa8 === this['vw']) {
                let gC = this['in']['oZ']();
                return this['ew'](gC), -0x1 !== this['fd'] && (this['fd'] = -0x1, this['fN'] = !0x0, this['mU'] = !0x0), -0x1 !== this['fw'] && (this['fw'] = -0x1, this['fU'] = !0x0), this['L1'] && (this['L1'] = !0x1, this['fU'] = !0x0), this['mO'] = gC, this['LG'] = !0x1, this['vw'] = -0x1, !0x0;
            }
            if (0x2 === this['vw']) {
                let gy = this['in']['oZ'](),
                    gz = this['in']['oZ'](),
                    gj = gz >> 0xa & 0x1f,
                    ga = gz >> 0x5 & 0x1f,
                    gq = 0x1f & gz;
                return xl['EI'][gy]['c4'] = (gj << 0x13) + (ga << 0xb) + (gq << 0x3), this['vw'] = -0x1, !0x0;
            }
            if (0x88 === this['vw']) {
                for (let gT = 0x0; gT < this['nx'][Dv(0x2ea)]; gT++) {
                    let gI = this['nx'][gT];
                    gI && (gI['PA'] = -0x1);
                }
                for (let gJ = 0x0; gJ < this['nM'][Dv(0x2ea)]; gJ++) {
                    let gV = this['nM'][gJ];
                    gV && (gV['PA'] = -0x1);
                }
                return this['vw'] = -0x1, !0x0;
            }
            if (0x1a === this['vw']) {
                let gW = this['in']['oZ']();
                return xl['EI'][gW]['hU'] = 0x1 === this['in']['m'](), this['vw'] = -0x1, !0x0;
            }
            if (0x15 === this['vw']) {
                this['ff'] = this['vc'] / 0x8 | 0x0;
                for (let gS = 0x0; gS < this['ff']; gS++) this['fm'][gS] = this['in']['od']();
                return this['vw'] = -0x1, !0x0;
            }
            if (0xef === this['vw']) {
                this['vP'] = !0x1;
                for (let gi = 0x0; gi < 0x5; gi++) this['vS'][gi] = !0x1;
                return this['vw'] = -0x1, !0x0;
            }
            if (0x81 === this['vw']) return -0x1 !== this['fd'] && (this['fd'] = -0x1, this['fN'] = !0x0, this['mU'] = !0x0), -0x1 !== this['fw'] && (this['fw'] = -0x1, this['fU'] = !0x0), this['L1'] && (this['L1'] = !0x1, this['fU'] = !0x0), this['mO'] = -0x1, this['LG'] = !0x1, this['vw'] = -0x1, !0x0;
            if (0xc9 === this['vw']) {
                let u0 = this['in']['oZ']();
                return xl['EI'][u0]['hy'] = this['in']['o9'](), xl['EI'][u0]['QX'] === this['fT'][this['fz']] && (this['fN'] = !0x0), this['vw'] = -0x1, !0x0;
            }
            if (0x2c === this['vw']) {
                this['fN'] = !0x0;
                let u1 = this['in']['m'](),
                    u2 = this['in']['op'](),
                    u3 = this['in']['m']();
                this['fX'][u1] = u2, this['fG'][u1] = u3, this['fC'][u1] = 0x1;
                for (let u4 = 0x0; u4 < 0x62; u4++) u2 >= this['fO'][u4] && (this['fC'][u1] = u4 + 0x2);
                return this['vw'] = -0x1, !0x0;
            }
            if (0xa2 === this['vw']) {
                for (this['wZ'] = this['in']['m'](), this['wc'] = this['in']['m'](); this['in']['S'] < this['vc'];) {
                    let u5 = this['in']['m']();
                    this['eA'](this['in'], u5);
                }
                return this['vw'] = -0x1, !0x0;
            }
            if (0x16 === this['vw']) return 0xc === this['fz'] && (this['fN'] = !0x0), this['Ua'] = this['in']['oc'](), this['vw'] = -0x1, !0x0;
            if (0xd === this['vw']) {
                let u6 = this['in']['m'](),
                    u7 = this['in']['m'](),
                    u8 = this['in']['m'](),
                    u9 = this['in']['m']();
                return this['vS'][u6] = !0x0, this['vy'][u6] = u7, this['n1'][u6] = u8, this['n3'][u6] = u9, this['vi'][u6] = 0x0, this['vw'] = -0x1, !0x0;
            }
            if (0xd5 === this['vw']) {
                this['fN'] = !0x0;
                let uo = this['in']['oZ'](),
                    uQ = xl['EI'][uo];
                for (; this['in']['S'] < this['vc'];) {
                    let uZ = this['in']['m'](),
                        uY = this['in']['oZ'](),
                        uE = this['in']['m']();
                    0xff === uE && (uE = this['in']['op']()), uQ['he'] && uQ['hs'] && uZ >= 0x0 && uZ < uQ['he']['length'] && (uQ['he'][uZ] = uY, uQ['hs'][uZ] = uE);
                }
                return this['vw'] = -0x1, !0x0;
            }
            if (0xb8 === this['vw']) return this['eb'](this['in'], this['vc']), this['NW'] = !0x1, this['vw'] = -0x1, !0x0;
            await this['eU']();
        } catch (ud) {
            await this['eU']();
        }
        return !0x0;
    } ['ek'](bz, bj, ba, bq) {
        const Dn = uh;
        if (bz['PH'] = ba, bz['PN'] = this['nQ'], 0x1 & ba) {
            let bT = bq['m'](),
                bI = new Uint8Array(bT),
                bJ = new k8(bI);
            bq[Dn(0x2af)](bT, 0x0, bI), this['nJ'][bj] = bJ, bz['read'](bJ);
        }
        if (0x2 & ba) {
            let bV = bq['oZ']();
            0xffff === bV && (bV = -0x1), bV === bz['PA'] && (bz['PX'] = 0x0);
            let xG = bq['m']();
            (-0x1 === bV || -0x1 === bz['PA'] || Xi['EI'][bV]['t7'] > Xi['EI'][bz['PA']]['t7'] || 0x0 === Xi['EI'][bz['PA']]['t7']) && (bz['PA'] = bV, bz['Pk'] = 0x0, bz['Pb'] = 0x0, bz['Pu'] = xG, bz['PX'] = 0x0);
        }
        if (0x4 & ba && (bz['Pv'] = bq['oZ'](), 0xffff === bz['Pv'] && (bz['Pv'] = -0x1)), 0x8 & ba && (bz['Pe'] = bq['o9'](), bz['PG'] = 0x0, bz['Pg'] = 0x0, bz['Px'] = 0x96, bz['pB'] && this['LM'](0x2, bz['Pe'], bz['pB'])), 0x10 & ba && (bz['PZ'] = bq['m'](), bz['Pd'] = bq['m'](), bz['PP'] = this['nQ'] + 0x190, bz['PK'] = bq['m'](), bz['Pn'] = bq['m']()), 0x20 & ba && (bz['Pm'] = bq['oZ'](), bz['Ps'] = bq['oZ'](), bz['Pp'] = bz['Pm'], bz['HW'] = bz['Ps']), 0x40 & ba) {
            let xg = bq['oZ'](),
                xu = bq['m'](),
                xM = bq['m'](),
                xF = bq['S'];
            if (bz['pB']) {
                let xO = xZ['Ha'](bz['pB']),
                    xD = !0x1;
                if (xu <= 0x1) {
                    for (let xC = 0x0; xC < this['ff']; xC++)
                        if (this['fm'][xC] === xO) {
                            xD = !0x0;
                            break;
                        }
                }
                if (!xD && 0x0 === this['mi']) try {
                    let xy = k1['l'](bq, xM),
                        xz = xX['Nv'](xy);
                    bz['Pe'] = xz, bz['PG'] = xg >> 0x8, bz['Pg'] = 0xff & xg, bz['Px'] = 0x96, xu > 0x1 ? this['LM'](0x1, xz, bz['pB']) : this['LM'](0x2, xz, bz['pB']);
                } catch (xj) {}
            }
            bq['S'] = xF + xM;
        }
        if (0x100 & ba) {
            bz['HI'] = bq['oZ']();
            let xa = bq['op']();
            bz['P0'] = xa >> 0x10, bz['HS'] = this['nQ'] + (0xffff & xa), bz['HV'] = 0x0, bz['HJ'] = 0x0, bz['HS'] > this['nQ'] && (bz['HV'] = -0x1), 0xffff === bz['HI'] && (bz['HI'] = -0x1);
        }
        0x200 & ba && (bz['P3'] = bq['m'](), bz['Hi'] = bq['m'](), bz['P1'] = bq['m'](), bz['P6'] = bq['m'](), bz['P7'] = bq['oZ']() + this['nQ'], bz['PY'] = bq['oZ']() + this['nQ'], bz['P4'] = bq['m'](), bz['Pw'] = 0x0, bz['P2'][0x0] = bz['P1'], bz['P5'][0x0] = bz['P6']);
    } ['ee'](bz) {
        const DU = uh;
        for (let bj = 0x0; bj < this['nq']; bj++) {
            let ba = this['U4'][bj],
                bq = this['nM'][ba];
            if (!bq) continue;
            let bT = bz['m']();
            if (bq['PH'] = bT, bq['PN'] = this['nQ'], 0x2 & bT) {
                let bI = bz['oZ']();
                0xffff === bI && (bI = -0x1), bI === bq['PA'] && (bq['PX'] = 0x0);
                let bJ = bz['m']();
                (-0x1 === bI || -0x1 === bq['PA'] || Xi['EI'][bI]['t7'] > Xi['EI'][bq['PA']]['t7'] || 0x0 === Xi['EI'][bq['PA']]['t7']) && (bq['PA'] = bI, bq['Pk'] = 0x0, bq['Pb'] = 0x0, bq['Pu'] = bJ, bq['PX'] = 0x0);
            }
            if (0x4 & bT && (bq['Pv'] = bz['oZ'](), 0xffff === bq['Pv'] && (bq['Pv'] = -0x1)), 0x8 & bT && (bq['Pe'] = bz['o9'](), bq['Px'] = 0x64), 0x10 & bT && (bq['PZ'] = bz['m'](), bq['Pd'] = bz['m'](), bq['PP'] = this['nQ'] + 0x190, bq['PK'] = bz['m'](), bq['Pn'] = bz['m']()), 0x20 & bT && (bq['pT'] = xP[DU(0x321)](bz['oZ']()), bq['PB'] = bq['pT']['pJ'], bq['P8'] = bq['pT']['pV'], bq['PQ'] = bq['pT']['pW'], bq['PR'] = bq['pT']['pS'], bq['PL'] = bq['pT']['pI']), 0x40 & bT) {
                bq['HI'] = bz['oZ']();
                let bV = bz['op']();
                bq['P0'] = bV >> 0x10, bq['HS'] = this['nQ'] + (0xffff & bV), bq['HV'] = 0x0, bq['HJ'] = 0x0, bq['HS'] > this['nQ'] && (bq['HV'] = -0x1), 0xffff === bq['HI'] && (bq['HI'] = -0x1);
            }
            0x80 & bT && (bq['Pm'] = bz['oZ'](), bq['Ps'] = bz['oZ'](), bq['Pp'] = bq['Pm'], bq['HW'] = bq['Ps']);
        }
    } ['eB'](bz) {
        for (let bj = 0x0; bj < this['nq']; bj++) {
            let ba = this['U4'][bj],
                bq = this['nx'][ba];
            if (!bq) continue;
            let bT = bz['m']();
            0x80 & bT && (bT += bz['m']() << 0x8), this['ek'](bq, ba, bT, bz);
        }
    } ['LV'](bz) {
        if (0x0n !== bz) {
            for (let bj = 0x0; bj < this['ff']; bj++)
                if (this['fm'][bj] === bz) {
                    this['ff']--, this['fN'] = !0x0;
                    for (let ba = bj; ba < this['ff']; ba++) this['fm'][ba] = this['fm'][ba + 0x1];
                    return this['NB']['or'](0x32), void this['NB']['W'](bz);
                }
        }
    } ['eL'](bz, bj) {
        const Dm = uh;
        for (; bz['T'] + 0x15 < 0x8 * bj;) {
            let ba = bz['$'](0xd);
            if (0x1fff === ba) break;
            this['nM'][ba] || (this['nM'][ba] = new xH());
            let bq = this['nM'][ba];
            this['nW'][this['U3']++] = ba, bq ? (bq['Y1'] = this['nQ'], bq['pT'] = xP['get'](bz['$'](0xb)), bq['Pl'] = bq['pT'][Dm(0x225)], bq['PB'] = bq['pT']['pJ'], bq['P8'] = bq['pT']['pV'], bq['PQ'] = bq['pT']['pW'], bq['PR'] = bq['pT']['pS'], bq['PL'] = bq['pT']['pI']) : bz['$'](0xb);
            let bT = bz['$'](0x5);
            bT > 0xf && (bT -= 0x20);
            let bI = bz['$'](0x5);
            bI > 0xf && (bI -= 0x20), this['UC'] && bq?.['PM'](!0x1, this['UC']['P2'][0x0] + bT, this['UC']['P5'][0x0] + bI), 0x1 === bz['$'](0x1) && (this['U4'][this['nq']++] = ba);
        }
        bz['o6']();
    }
    async ['eX'](bz) {
        const Df = uh;
        if (bz < 0x0) return;
        this['L1'] && (this['L1'] = !0x1, this['fU'] = !0x0);
        let bj = this['LA'][bz],
            ba = this['Lo'][bz],
            bq = this['LQ'][bz],
            bT = this['Lc'][bz];
        if (bj >= 0x7d0 && (bj -= 0x7d0), 0x387 === bj || 0x16b === bj) {
            let bI = this['fr'][bz],
                bJ = bI[Df(0x269)](Df(0x25d));
            if (-0x1 !== bJ) {
                bI = bI['substring'](bJ + 0x5)[Df(0x151)]();
                let bV = xZ['HC'](xZ['HT'](xZ['Ha'](bI))),
                    xG = !0x1;
                for (let xg = 0x0; xg < this['U0']; xg++) {
                    let xu = this['nx'][this['nk'][xg]];
                    if (xu && xu['pB'] && xu['pB'][Df(0x19a)]() === bV[Df(0x19a)]() && this['UC']) {
                        this['e8'](this['UC']['P2'][0x0], this['UC']['P5'][0x0], xu['P2'][0x0], xu['P5'][0x0], 0x2, 0x1, 0x1, 0x0, 0x0, 0x0, !0x1), 0x387 === bj ? this['NB']['or'](0xb6) : 0x16b === bj && this['NB']['or'](0xa2), this['NB']['o8'](this['nk'][xg]), xG = !0x0;
                        break;
                    }
                }
                xG || this['LM'](0x0, Df(0x1ef) + bV, '');
            }
        } else {
            if (0x1c2 === bj && this['ex'](0xbf, bq, bT, ba)) this['NB']['o8'](this['LU']), this['NB']['o8'](this['LN']), this['NB']['o8'](this['Le']);
            else {
                if (0x195 === bj || 0x26 === bj || 0x1a6 === bj || 0x1de === bj || 0x15b === bj) 0x1de === bj ? (0x3 & bq || xx['vR']++, xx['vR'] >= 0x5a && this['NB']['or'](0x4c), this['NB']['or'](0x3f)) : 0x15b === bj ? this['NB']['or'](0x33) : 0x1a6 === bj ? this['NB']['or'](0x2a) : 0x195 === bj ? (xx['vo'] += ba, xx['vo'] >= 0x61 && (this['NB']['or'](0xb5), this['NB']['oK'](0xe42d58)), this['NB']['or'](0x28)) : 0x26 === bj && this['NB']['or'](0x23), this['NB']['o8'](ba), this['NB']['o8'](bq), this['NB']['o8'](bT), this['Lx'] = 0x0, this['Lm'] = bT, this['LX'] = bq, this['Lk'] = 0x2, xl['EI'][bT]['QX'] === this['mO'] && (this['Lk'] = 0x1), xl['EI'][bT]['QX'] === this['fw'] && (this['Lk'] = 0x3);
                else {
                    if (0x2d8 === bj || 0x21e === bj || 0x6 === bj || 0x3c3 === bj || 0xf5 === bj) {
                        let xM = this['nM'][ba];
                        xM && this['UC'] && (this['e8'](this['UC']['P2'][0x0], this['UC']['P5'][0x0], xM['P2'][0x0], xM['P5'][0x0], 0x2, 0x1, 0x1, 0x0, 0x0, 0x0, !0x1), this['mT'] = this['YC'], this['mI'] = this['Yb'], this['mq'] = 0x2, this['mC'] = 0x0, 0x21e === bj ? this['NB']['or'](0x80) : 0x6 === bj ? (0x3 & ba || xx['v9']++, xx['v9'] >= 0x7c && (this['NB']['or'](0x9b), this['NB']['X'](0x0)), this['NB']['or'](0x69)) : 0x3c3 === bj ? this['NB']['or'](0x4f) : 0x2d8 === bj ? this['NB']['or'](0x92) : 0xf5 === bj && (0x3 & ba || xx['vr']++, xx['vr'] >= 0x55 && (this['NB']['or'](0xb8), this['NB']['o8'](0x9aac)), this['NB']['or'](0x83)), this['NB']['o8'](ba));
                    } else {
                        if (0xd9 === bj) this['UC'] && (this['e8'](this['UC']['P2'][0x0], this['UC']['P5'][0x0], bq, bT, 0x2, 0x0, 0x0, 0x0, 0x0, 0x0, !0x1) || this['e8'](this['UC']['P2'][0x0], this['UC']['P5'][0x0], bq, bT, 0x2, 0x1, 0x1, 0x0, 0x0, 0x0, !0x1), this['mT'] = this['YC'], this['mI'] = this['Yb'], this['mq'] = 0x2, this['mC'] = 0x0, this['NB']['or'](0x40), this['NB']['o8'](bq + this['Nk']), this['NB']['o8'](bT + this['va']), this['NB']['o8'](ba), this['NB']['o8'](this['LU']), this['NB']['o8'](this['LN']), this['NB']['o8'](this['Le']));
                        else {
                            if (0x497 === bj) {
                                let xF, xO = ba >> 0xe & 0x7fff,
                                    xD = XS[Df(0x321)](xO);
                                xF = xD['RX'] ? xD['RX'] : Df(0x2a7) + xD[Df(0x260)] + '.', this['LM'](0x0, xF, '');
                            } else {
                                if (0x11d === bj) this['ex'](0xbd, bq, bT, ba);
                                else {
                                    if (0x371 === bj) this['NB']['or'](0x47), this['NB']['o8'](ba), this['NB']['o8'](bq), this['NB']['o8'](bT), this['NB']['o8'](this['LU']), this['NB']['o8'](this['LN']), this['NB']['o8'](this['Le']), this['Lx'] = 0x0, this['Lm'] = bT, this['LX'] = bq, this['Lk'] = 0x2, xl['EI'][bT]['QX'] === this['mO'] && (this['Lk'] = 0x1), xl['EI'][bT]['QX'] === this['fw'] && (this['Lk'] = 0x3);
                                    else {
                                        if (0x187 === bj) this['NB']['or'](0x3b), this['NB']['o8'](ba), this['NB']['o8'](bq), this['NB']['o8'](bT), this['NB']['o8'](this['Ls']), this['Lx'] = 0x0, this['Lm'] = bT, this['LX'] = bq, this['Lk'] = 0x2, xl['EI'][bT]['QX'] === this['mO'] && (this['Lk'] = 0x1), xl['EI'][bT]['QX'] === this['fw'] && (this['Lk'] = 0x3);
                                        else {
                                            if (0x294 === bj) this['mS'] ? this['Nq']?.[Df(0x25f)](bq - 0x8, bT - 0xb) : this['Nq']?.[Df(0x25f)](this['YC'] - 0x8, this['Yb'] - 0xb);
                                            else {
                                                if (0xbc === bj) return this['Lv'] = 0x1, this['LN'] = bq, this['Le'] = bT, this['LU'] = ba, this['LB'] = xc['get'](ba)[Df(0x260)], void(this['Lf'] = 0x0);
                                                if (0x2c === bj) this['LG'] || (this['NB']['or'](0x70), this['NB']['o8'](bT), this['LG'] = !0x0);
                                                else {
                                                    if (0x6ed === bj) {
                                                        let xC, xy = xc['get'](ba);
                                                        xC = bT >= 0x186a0 ? bT + Df(0x2d2) + xy[Df(0x260)] : xy['RX'] ? xy['RX'] : Df(0x2a7) + xy['name'] + '.', this['LM'](0x0, xC, '');
                                                    } else {
                                                        if (0x384 === bj) {
                                                            let xz = this['nM'][ba];
                                                            xz && this['UC'] && (this['e8'](this['UC']['P2'][0x0], this['UC']['P5'][0x0], xz['P2'][0x0], xz['P5'][0x0], 0x2, 0x1, 0x1, 0x0, 0x0, 0x0, !0x1), this['mT'] = this['YC'], this['mI'] = this['Yb'], this['mq'] = 0x2, this['mC'] = 0x0, this['NB']['or'](0x4e), this['NB']['o8'](ba), this['NB']['o8'](this['LU']), this['NB']['o8'](this['LN']), this['NB']['o8'](this['Le']));
                                                        } else {
                                                            if (0x55d === bj || 0x608 === bj || 0x97 === bj || 0x44d === bj) {
                                                                let xj = this['nx'][ba];
                                                                xj && this['UC'] && (this['e8'](this['UC']['P2'][0x0], this['UC']['P5'][0x0], xj['P2'][0x0], xj['P5'][0x0], 0x2, 0x1, 0x1, 0x0, 0x0, 0x0, !0x1), this['mT'] = this['YC'], this['mI'] = this['Yb'], this['mq'] = 0x2, this['mC'] = 0x0, 0x44d === bj ? this['NB']['or'](0xa2) : 0x97 === bj ? (xx['vf']++, xx['vf'] >= 0x5a && (this['NB']['or'](0x4b), this['NB']['o8'](0x798a)), this['NB']['or'](0xb2)) : 0x55d === bj ? this['NB']['or'](0xb6) : 0x608 === bj && this['NB']['or'](0xb0), this['NB']['o8'](ba));
                                                            } else {
                                                                if (0x109 === bj) {
                                                                    let xa = this['nM'][ba];
                                                                    xa && this['UC'] && (this['e8'](this['UC']['P2'][0x0], this['UC']['P5'][0x0], xa['P2'][0x0], xa['P5'][0x0], 0x2, 0x1, 0x1, 0x0, 0x0, 0x0, !0x1), this['mT'] = this['YC'], this['mI'] = this['Yb'], this['mq'] = 0x2, this['mC'] = 0x0, this['NB']['or'](0x79), this['NB']['o8'](ba), this['NB']['o8'](this['Ls']));
                                                                } else {
                                                                    if (0x2a7 === bj) {
                                                                        let xq = this['fr'][bz],
                                                                            xT = xq[Df(0x269)](Df(0x25d));
                                                                        if (-0x1 !== xT) {
                                                                            let xI = xZ['Ha'](xq[Df(0x250)](xT + 0x5)[Df(0x151)]()),
                                                                                xJ = -0x1;
                                                                            for (let xV = 0x0; xV < this['UH']; xV++)
                                                                                if (this['UI'][xV] === xI) {
                                                                                    xJ = xV;
                                                                                    break;
                                                                                } - 0x1 !== xJ && this['mD'][xJ] > 0x0 && (this['fU'] = !0x0, this['L1'] = !0x1, this['fD'] = !0x0, this['fq'] = '', this['L0'] = 0x3, this['m8'] = this['UI'][xJ], this['fj'] = Df(0x13d) + this['UW'][xJ]);
                                                                        }
                                                                    } else {
                                                                        if (0x37 === bj) this['ex'](0xbb, bq, bT, ba) && this['NB']['o8'](this['Ls']);
                                                                        else {
                                                                            if (0xe0 === bj || 0x3e1 === bj || 0x63 === bj || 0x2ea === bj || 0x36d === bj) this['UC'] && (this['e8'](this['UC']['P2'][0x0], this['UC']['P5'][0x0], bq, bT, 0x2, 0x0, 0x0, 0x0, 0x0, 0x0, !0x1) || this['e8'](this['UC']['P2'][0x0], this['UC']['P5'][0x0], bq, bT, 0x2, 0x1, 0x1, 0x0, 0x0, 0x0, !0x1), this['mT'] = this['YC'], this['mI'] = this['Yb'], this['mq'] = 0x2, this['mC'] = 0x0, 0xe0 === bj ? this['NB']['or'](0x9) : 0x2ea === bj ? this['NB']['or'](0x4) : 0x36d === bj ? this['NB']['or'](0x2b) : 0x63 === bj ? this['NB']['or'](0x15) : 0x3e1 === bj && this['NB']['or'](0x1e), this['NB']['o8'](bq + this['Nk']), this['NB']['o8'](bT + this['va']), this['NB']['o8'](ba));
                                                                            else {
                                                                                if (0x647 === bj) {
                                                                                    let xW = this['nM'][ba];
                                                                                    if (xW && xW['pT']) {
                                                                                        let xS;
                                                                                        xS = xW['pT']['RX'] ? xW['pT']['RX'] : Df(0x2a7) + xW['pT'][Df(0x260)] + '.', this['LM'](0x0, xS, '');
                                                                                    }
                                                                                } else {
                                                                                    if (0x1f8 === bj) this['ex'](0xbe, bq, bT, ba);
                                                                                    else {
                                                                                        if (0x3a2 === bj) {
                                                                                            let xi = xl['EI'][bT];
                                                                                            this['Lf'] = 0x1, this['Ls'] = bT, this['Lb'] = xi['l1'], this['Lv'] = 0x0;
                                                                                            let G0 = xi['hi'];
                                                                                            G0 && -0x1 !== G0['indexOf']('\x20') && (G0 = G0[Df(0x250)](0x0, G0[Df(0x269)]('\x20')));
                                                                                            let G1 = xi['hi'];
                                                                                            return G1 && -0x1 !== G1[Df(0x269)]('\x20') && (G1 = G1['substring'](G1[Df(0x269)]('\x20') + 0x1)), this['Lh'] = G0 + '\x20' + xi['l0'] + '\x20' + G1, void(0x10 === this['Lb'] && (this['fN'] = !0x0, this['fz'] = 0x3, this['mU'] = !0x0));
                                                                                        }
                                                                                        if (0x3b7 === bj) {
                                                                                            let G2 = xl['EI'][bT],
                                                                                                G3 = !0x0;
                                                                                            G2['hh'] > 0x0 && (G3 = this['LF'](G2)), G3 && (this['NB']['or'](0x6a), this['NB']['o8'](bT));
                                                                                        } else {
                                                                                            if (0x25a === bj || 0x254 === bj || 0x16 === bj || 0x37c === bj || 0x19f === bj) 0x16 === bj ? this['NB']['or'](0x68) : 0x19f === bj ? (0x3 & bT || xx['vU']++, xx['vU'] >= 0x37 && (this['NB']['or'](0x3d), this['NB']['X'](0x0)), this['NB']['or'](0x6c)) : 0x25a === bj ? this['NB']['or'](0x62) : 0x37c === bj ? (0x3 & bq || xx['vz']++, xx['vz'] >= 0x82 && (this['NB']['or'](0x31), this['NB']['k'](0xb1)), this['NB']['or'](0x6b)) : 0x254 === bj && this['NB']['or'](0x64), this['NB']['o8'](ba), this['NB']['o8'](bq), this['NB']['o8'](bT), this['Lx'] = 0x0, this['Lm'] = bT, this['LX'] = bq, this['Lk'] = 0x2, xl['EI'][bT]['QX'] === this['mO'] && (this['Lk'] = 0x1), xl['EI'][bT]['QX'] === this['fw'] && (this['Lk'] = 0x3);
                                                                                            else {
                                                                                                if (0x245 === bj) 0x3 & ba || xx['v8']++, xx['v8'] >= 0x63 && (this['NB']['or'](0x2), this['NB']['X'](0x0)), this['ex'](0xc5, bq, bT, ba);
                                                                                                else {
                                                                                                    if (0x3c5 === bj) this['UC'] && (this['e8'](this['UC']['P2'][0x0], this['UC']['P5'][0x0], bq, bT, 0x2, 0x0, 0x0, 0x0, 0x0, 0x0, !0x1) || this['e8'](this['UC']['P2'][0x0], this['UC']['P5'][0x0], bq, bT, 0x2, 0x1, 0x1, 0x0, 0x0, 0x0, !0x1), this['mT'] = this['YC'], this['mI'] = this['Yb'], this['mq'] = 0x2, this['mC'] = 0x0, this['NB']['or'](0x3a), this['NB']['o8'](bq + this['Nk']), this['NB']['o8'](bT + this['va']), this['NB']['o8'](ba), this['NB']['o8'](this['Ls']));
                                                                                                    else {
                                                                                                        if (0x5dd === bj) xx['vF'] += this['va'], xx['vF'] >= 0x5c && (this['NB']['or'](0x52), this['NB']['X'](0x0)), this['ex'](0xb1, bq, bT, ba);
                                                                                                        else {
                                                                                                            if (0x16c === bj) this['ex'](0xc2, bq, bT, ba);
                                                                                                            else {
                                                                                                                if (0x44e === bj) {
                                                                                                                    let G4, G5 = xc[Df(0x321)](ba);
                                                                                                                    G4 = G5['RX'] ? G5['RX'] : 'It\x27s\x20a\x20' + G5[Df(0x260)] + '.', this['LM'](0x0, G4, '');
                                                                                                                } else {
                                                                                                                    if (0x3c0 === bj) {
                                                                                                                        this['NB']['or'](0x6a), this['NB']['o8'](bT);
                                                                                                                        let G6 = xl['EI'][bT];
                                                                                                                        if (G6['hv'] && G6['hv'][0x0] && 0x5 === G6['hv'][0x0][0x0]) {
                                                                                                                            let G7 = G6['hv'][0x0][0x1];
                                                                                                                            G6['hN'] && this['LK'][G7] !== G6['hN'][0x0] && (this['LK'][G7] = G6['hN'][0x0], await this['eE'](G7), this['fN'] = !0x0);
                                                                                                                        }
                                                                                                                    } else {
                                                                                                                        if (0x22 === bj) {
                                                                                                                            let G8 = this['fr'][bz],
                                                                                                                                G9 = G8['indexOf'](Df(0x25d));
                                                                                                                            if (-0x1 !== G9) {
                                                                                                                                this['LD'](), this['Ll'] = G8['substring'](G9 + 0x5)[Df(0x151)](), this['Lr'] = !0x1;
                                                                                                                                for (let Go = 0x0; Go < xl['EI'][Df(0x2ea)]; Go++)
                                                                                                                                    if (xl['EI'][Go] && 0x258 === xl['EI'][Go]['hh']) {
                                                                                                                                        this['NG'] = this['mO'] = xl['EI'][Go]['QX'];
                                                                                                                                        break;
                                                                                                                                    }
                                                                                                                            }
                                                                                                                        } else {
                                                                                                                            if (0x3b3 === bj) this['LD']();
                                                                                                                            else {
                                                                                                                                if (0x16f === bj) {
                                                                                                                                    let GQ = this['nx'][ba];
                                                                                                                                    GQ && this['UC'] && (this['e8'](this['UC']['P2'][0x0], this['UC']['P5'][0x0], GQ['P2'][0x0], GQ['P5'][0x0], 0x2, 0x1, 0x1, 0x0, 0x0, 0x0, !0x1), this['mT'] = this['YC'], this['mI'] = this['Yb'], this['mq'] = 0x2, this['mC'] = 0x0, this['NB']['or'](0xe), this['NB']['o8'](ba), this['NB']['o8'](this['LU']), this['NB']['o8'](this['LN']), this['NB']['o8'](this['Le']));
                                                                                                                                } else {
                                                                                                                                    if (0x1d1 === bj) {
                                                                                                                                        this['NB']['or'](0x6a), this['NB']['o8'](bT);
                                                                                                                                        let GZ = xl['EI'][bT];
                                                                                                                                        if (GZ['hv'] && GZ['hv'][0x0] && 0x5 === GZ['hv'][0x0][0x0]) {
                                                                                                                                            let GY = GZ['hv'][0x0][0x1];
                                                                                                                                            this['LK'][GY] = 0x1 - this['LK'][GY], await this['eE'](GY), this['fN'] = !0x0;
                                                                                                                                        }
                                                                                                                                    } else {
                                                                                                                                        if (0x196 === bj || 0x1b4 === bj || 0x22d === bj || 0x22c === bj) {
                                                                                                                                            let GE = this['fr'][bz],
                                                                                                                                                Gd = GE[Df(0x269)](Df(0x25d));
                                                                                                                                            if (-0x1 !== Gd) {
                                                                                                                                                let Gw = xZ['Ha'](GE[Df(0x250)](Gd + 0x5)['trim']());
                                                                                                                                                0x196 === bj ? this['Lu'](Gw) : 0x1b4 === bj ? this['LJ'](Gw) : 0x22d === bj ? this['Lg'](Gw) : 0x22c === bj && this['LV'](Gw);
                                                                                                                                            }
                                                                                                                                        } else {
                                                                                                                                            if (0x28b === bj) {
                                                                                                                                                let GR = this['nx'][ba];
                                                                                                                                                GR && this['UC'] && (this['e8'](this['UC']['P2'][0x0], this['UC']['P5'][0x0], GR['P2'][0x0], GR['P5'][0x0], 0x2, 0x1, 0x1, 0x0, 0x0, 0x0, !0x1), this['mT'] = this['YC'], this['mI'] = this['Yb'], this['mq'] = 0x2, this['mC'] = 0x0, this['NB']['or'](0x21), this['NB']['o8'](ba), this['NB']['o8'](this['Ls']));
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        this['Lv'] = 0x0, this['Lf'] = 0x0;
    } ['eG'](bz, bj) {
        const DL = uh;
        let ba;
        for (; bz['T'] + 0xa < 0x8 * bj && (ba = bz['$'](0xb), 0x7ff !== ba);) {
            if (!this['nx'][ba]) {
                this['nx'][ba] = new xr();
                let bV = this['nJ'][ba];
                bV && this['nx'][ba]?.[DL(0x2fe)](bV);
            }
            this['nk'][this['U0']++] = ba;
            let bq = this['nx'][ba];
            bq && (bq['Y1'] = this['nQ']);
            let bT = bz['$'](0x5);
            bT > 0xf && (bT -= 0x20);
            let bI = bz['$'](0x5);
            bI > 0xf && (bI -= 0x20);
            let bJ = bz['$'](0x1);
            this['UC'] && bq?.['PM'](0x1 === bJ, this['UC']['P2'][0x0] + bT, this['UC']['P5'][0x0] + bI), 0x1 === bz['$'](0x1) && (this['U4'][this['nq']++] = ba);
        }
        bz['o6']();
    } ['ev'](bz, bj) {
        const De = uh;
        let ba = this['Up'][this['v1']][bz][bj];
        if (!ba) return void this['Nq']?.['rb'](this['v1'], bz, bj);
        let bq = -0x5f5e0ff,
            bT = null;
        for (let xO = ba[De(0x32b)](); xO; xO = ba[De(0x302)]()) {
            let xD = xc[De(0x321)](xO['lL']),
                xC = xD['pp'];
            xD['pr'] && (xC *= xO['le'] + 0x1), xC > bq && (bq = xC, bT = xO);
        }
        if (!bT) return;
        ba['A'](bT);
        let bI = -0x1,
            bJ = -0x1,
            bV = 0x0,
            xG = 0x0;
        for (let xy = ba[De(0x32b)](); xy; xy = ba[De(0x302)]()) xy['lL'] !== bT['lL'] && -0x1 === bI && (bI = xy['lL'], bV = xy['le']), xy['lL'] !== bT['lL'] && xy['lL'] !== bI && -0x1 === bJ && (bJ = xy['lL'], xG = xy['le']);
        let xg = null; - 0x1 !== bI && (xg = xc[De(0x321)](bI)['pQ'](bV));
        let xu = null; - 0x1 !== bJ && (xu = xc[De(0x321)](bJ)['pQ'](xG));
        let xM = bz + (bj << 0x7) + 0x60000000 | 0x0,
            xF = xc[De(0x321)](bT['lL']);
        this['Nq']?.['rA'](bz, bj, this['e0'](this['v1'], 0x80 * bz + 0x40, 0x80 * bj + 0x40), this['v1'], xM, xF['pQ'](bT['le']), xu, xg);
    } ['eg'](bz) {
        let bj = bz['$'](0x8);
        if (bj < this['U0']) {
            for (let ba = bj; ba < this['U0']; ba++) this['nC'][this['na']++] = this['nk'][ba];
        }
        if (bj > this['U0']) throw new Error();
        this['U0'] = 0x0;
        for (let bq = 0x0; bq < bj; bq++) {
            let bT = this['nk'][bq],
                bI = this['nx'][bT];
            if (0x0 === bz['$'](0x1)) this['nk'][this['U0']++] = bT, bI && (bI['Y1'] = this['nQ']);
            else {
                let bJ = bz['$'](0x2);
                if (0x0 === bJ) this['nk'][this['U0']++] = bT, bI && (bI['Y1'] = this['nQ']), this['U4'][this['nq']++] = bT;
                else {
                    if (0x1 === bJ) {
                        this['nk'][this['U0']++] = bT, bI && (bI['Y1'] = this['nQ']);
                        let bV = bz['$'](0x3);
                        bI?.['PF'](!0x1, bV), 0x1 === bz['$'](0x1) && (this['U4'][this['nq']++] = bT);
                    } else {
                        if (0x2 === bJ) {
                            this['nk'][this['U0']++] = bT, bI && (bI['Y1'] = this['nQ']);
                            let xG = bz['$'](0x3);
                            bI?.['PF'](!0x0, xG);
                            let xg = bz['$'](0x3);
                            bI?.['PF'](!0x0, xg), 0x1 === bz['$'](0x1) && (this['U4'][this['nq']++] = bT);
                        } else 0x3 === bJ && (this['nC'][this['na']++] = bT);
                    }
                }
            }
        }
    } ['ef'](bz) {
        bz['ov']();
        let bj = bz['$'](0x8);
        if (bj < this['U3']) {
            for (let ba = bj; ba < this['U3']; ba++) this['nC'][this['na']++] = this['nW'][ba];
        }
        if (bj > this['U3']) throw new Error();
        this['U3'] = 0x0;
        for (let bq = 0x0; bq < bj; bq++) {
            let bT = this['nW'][bq],
                bI = this['nM'][bT];
            if (0x0 === bz['$'](0x1)) this['nW'][this['U3']++] = bT, bI && (bI['Y1'] = this['nQ']);
            else {
                let bJ = bz['$'](0x2);
                if (0x0 === bJ) this['nW'][this['U3']++] = bT, bI && (bI['Y1'] = this['nQ']), this['U4'][this['nq']++] = bT;
                else {
                    if (0x1 === bJ) {
                        this['nW'][this['U3']++] = bT, bI && (bI['Y1'] = this['nQ']);
                        let bV = bz['$'](0x3);
                        bI?.['PF'](!0x1, bV), 0x1 === bz['$'](0x1) && (this['U4'][this['nq']++] = bT);
                    } else {
                        if (0x2 === bJ) {
                            this['nW'][this['U3']++] = bT, bI && (bI['Y1'] = this['nQ']);
                            let xG = bz['$'](0x3);
                            bI?.['PF'](!0x0, xG);
                            let xg = bz['$'](0x3);
                            bI?.['PF'](!0x0, xg), 0x1 === bz['$'](0x1) && (this['U4'][this['nq']++] = bT);
                        } else 0x3 === bJ && (this['nC'][this['na']++] = bT);
                    }
                }
            }
        }
    } ['eu']() {
        const Ds = uh;
        if (0x0 === this['LZ']) {
            this['fr'][0x0] = Ds(0x1cc), this['LA'][0x0] = 0x4e4, this['fZ'] = 0x1, this['e4'](this['YA']), this['LL'] = 0x0, this['YG'] > 0x8 && this['YA'] > 0xb && this['YG'] < 0x208 && this['YA'] < 0x159 && (-0x1 === this['mO'] ? this['Ly']() : this['LS'](xl['EI'][this['mO']], this['YG'], this['YA'], 0x8, 0xb, 0x0)), this['LL'] !== this['L6'] && (this['L6'] = this['LL']), this['LL'] = 0x0, this['YG'] > 0x232 && this['YA'] > 0xe7 && this['YG'] < 0x2f0 && this['YA'] < 0x1ec && (-0x1 !== this['fd'] ? this['LS'](xl['EI'][this['fd']], this['YG'], this['YA'], 0x232, 0xe7, 0x0) : -0x1 !== this['fT'][this['fz']] && this['LS'](xl['EI'][this['fT'][this['fz']]], this['YG'], this['YA'], 0x232, 0xe7, 0x0)), this['LL'] !== this['L8'] && (this['fN'] = !0x0, this['L8'] = this['LL']), this['LL'] = 0x0, this['YG'] > 0x16 && this['YA'] > 0x177 && this['YG'] < 0x1af && this['YA'] < 0x1d7 && (-0x1 === this['fw'] ? this['eZ'](this['YG'] - 0x16, this['YA'] - 0x177) : this['LS'](xl['EI'][this['fw']], this['YG'], this['YA'], 0x16, 0x177, 0x0)), -0x1 !== this['fw'] && this['LL'] !== this['L7'] && (this['fU'] = !0x0, this['L7'] = this['LL']);
            let bz = !0x1;
            for (; !bz;) {
                bz = !0x0;
                for (let bj = 0x0; bj < this['fZ'] - 0x1; bj++)
                    if (this['LA'][bj] < 0x3e8 && this['LA'][bj + 0x1] > 0x3e8) {
                        let ba = this['fr'][bj];
                        this['fr'][bj] = this['fr'][bj + 0x1], this['fr'][bj + 0x1] = ba;
                        let bq = this['LA'][bj];
                        this['LA'][bj] = this['LA'][bj + 0x1], this['LA'][bj + 0x1] = bq;
                        let bT = this['LQ'][bj];
                        this['LQ'][bj] = this['LQ'][bj + 0x1], this['LQ'][bj + 0x1] = bT;
                        let bI = this['Lc'][bj];
                        this['Lc'][bj] = this['Lc'][bj + 0x1], this['Lc'][bj + 0x1] = bI;
                        let bJ = this['Lo'][bj];
                        this['Lo'][bj] = this['Lo'][bj + 0x1], this['Lo'][bj + 0x1] = bJ, bz = !0x1;
                    }
            }
        }
    } ['QC'](bz, bj, ba, bq, bT, bI, bJ) {
        const DA = uh;
        if (bj < 0x1 || ba < 0x1 || bj > 0x66 || ba > 0x66) return;
        if (xx['ZT'] && bz !== this['v1']) return;
        if (!this['Nq']) return;
        let bV = 0x0;
        if (0x0 === bJ ? bV = this['Nq']['rq'](bz, bj, ba) : 0x1 === bJ ? bV = this['Nq']['H7'](bz, ba, bj) : 0x2 === bJ ? bV = this['Nq']['ra'](bz, bj, ba) : 0x3 === bJ && (bV = this['Nq']['H4'](bz, bj, ba)), 0x0 !== bV) {
            let xG = this['Nq']['H6'](bz, bj, ba, bV),
                xg = bV >> 0xe & 0x7fff,
                xu = 0x1f & xG,
                xM = xG >> 0x6;
            if (0x0 === bJ) {
                this['Nq']?.['Qq'](bz, bj, ba, 0x1);
                let xF = XS[DA(0x321)](xg);
                xF['Rg'] && this['ND'][bz]?.['Qq'](bj, ba, xu, xM, xF['Ru']);
            } else {
                if (0x1 === bJ) this['Nq']?.['rN'](bz, bj, ba);
                else {
                    if (0x2 === bJ) {
                        this['Nq']['Qz'](bz, bj, ba);
                        let xO = XS[DA(0x321)](xg);
                        if (bj + xO[DA(0x1a2)] > 0x67 || ba + xO[DA(0x1a2)] > 0x67 || bj + xO[DA(0x2ea)] > 0x67 || ba + xO[DA(0x2ea)] > 0x67) return;
                        xO['Rg'] && this['ND'][bz]?.['Qz'](bj, ba, xO[DA(0x1a2)], xO['length'], xM, xO['Ru']);
                    } else {
                        if (0x3 === bJ) {
                            this['Nq']?.['H9'](bz, bj, ba);
                            let xD = XS['get'](xg);
                            xD['Rg'] && xD['Rb'] && this['ND'][bz]?.['QD'](bj, ba);
                        }
                    }
                }
            }
        }
        if (bq >= 0x0) {
            let xC = bz;
            this['He'] && bz < 0x3 && !(0x2 & ~this['He'][0x1][bj][ba]) && (xC = bz + 0x1), this['Hf'] && xQ['QC'](bz, bj, ba, this['Nq'], this['Hf'], this['U2'], this['ND'][bz], bq, bI, bT, xC);
        }
    } ['ex'](bz, bj, ba, bq) {
        const Db = uh;
        if (!this['UC'] || !this['Nq']) return !0x1;
        let bT = bq >> 0xe & 0x7fff,
            bI = this['Nq']['H6'](this['v1'], bj, ba, bq);
        if (-0x1 === bI) return !0x1;
        let bJ = 0x1f & bI,
            bV = bI >> 0x6 & 0x3;
        if (bJ === kr['Qf']['id'] || bJ === kr['Qe']['id'] || bJ === kr['QU']['id']) {
            let xG, xg, xu = XS[Db(0x321)](bT);
            0x0 === bV || 0x2 === bV ? (xG = xu['width'], xg = xu[Db(0x2ea)]) : (xG = xu[Db(0x2ea)], xg = xu[Db(0x1a2)]);
            let xM = xu['RW'];
            0x0 !== bV && (xM = (xM << bV & 0xf) + (xM >> 0x4 - bV)), this['e8'](this['UC']['P2'][0x0], this['UC']['P5'][0x0], bj, ba, 0x2, xG, xg, 0x0, 0x0, xM, !0x1);
        } else this['e8'](this['UC']['P2'][0x0], this['UC']['P5'][0x0], bj, ba, 0x2, 0x0, 0x0, bV, bJ + 0x1, 0x0, !0x1);
        return this['mT'] = this['YC'], this['mI'] = this['Yb'], this['mq'] = 0x2, this['mC'] = 0x0, this['NB']['or'](bz), this['NB']['o8'](bj + this['Nk']), this['NB']['o8'](ba + this['va']), this['NB']['o8'](bT), !0x0;
    } ['Lj'](bz, bj, ba, bq) {
        const Dk = uh;
        if (bz === this['UC'] || this['fZ'] >= 0x190) return;
        let bT = null;
        this['UC'] && (bT = bz['pB'] + this['eM'](this['UC']['pD'], bz['pD']) + Dk(0x2a6) + bz['pD'] + ')'), 0x1 === this['Lv'] ? (this['fr'][this['fZ']] = Dk(0x30f) + this['LB'] + '\x20with\x20@whi@' + bT, this['LA'][this['fZ']] = 0x16f, this['Lo'][this['fZ']] = bj, this['LQ'][this['fZ']] = ba, this['Lc'][this['fZ']] = bq, this['fZ']++) : 0x1 !== this['Lf'] ? (this['fr'][this['fZ']] = 'Follow\x20@whi@' + bT, this['LA'][this['fZ']] = 0x608, this['Lo'][this['fZ']] = bj, this['LQ'][this['fZ']] = ba, this['Lc'][this['fZ']] = bq, this['fZ']++, 0x0 === this['mi'] && (this['fr'][this['fZ']] = Dk(0x1d9) + bT, this['LA'][this['fZ']] = 0x55d, this['Lo'][this['fZ']] = bj, this['LQ'][this['fZ']] = ba, this['Lc'][this['fZ']] = bq, this['fZ']++), this['U9'] > 0x0 && (this['fr'][this['fZ']] = 'Attack\x20@whi@' + bT, this['UC'] && this['UC']['pD'] >= bz['pD'] ? this['LA'][this['fZ']] = 0x97 : this['LA'][this['fZ']] = 0x867, this['Lo'][this['fZ']] = bj, this['LQ'][this['fZ']] = ba, this['Lc'][this['fZ']] = bq, this['fZ']++), 0x1 === this['UQ'] && (this['fr'][this['fZ']] = Dk(0x1f8) + bT, this['LA'][this['fZ']] = 0x97, this['Lo'][this['fZ']] = bj, this['LQ'][this['fZ']] = ba, this['Lc'][this['fZ']] = bq, this['fZ']++), 0x2 === this['UQ'] && (this['fr'][this['fZ']] = Dk(0x181) + bT, this['LA'][this['fZ']] = 0x44d, this['Lo'][this['fZ']] = bj, this['LQ'][this['fZ']] = ba, this['Lc'][this['fZ']] = bq, this['fZ']++)) : 0x8 & ~this['Lb'] || (this['fr'][this['fZ']] = this['Lh'] + Dk(0x15a) + bT, this['LA'][this['fZ']] = 0x28b, this['Lo'][this['fZ']] = bj, this['LQ'][this['fZ']] = ba, this['Lc'][this['fZ']] = bq, this['fZ']++);
        for (let bI = 0x0; bI < this['fZ']; bI++)
            if (0x294 === this['LA'][bI]) return void(this['fr'][bI] = Dk(0x1ed) + bT);
    } ['eF'](bz) {
        if (bz['ov'](), 0x0 !== bz['$'](0x1)) {
            let bj = bz['$'](0x2);
            if (0x0 === bj) this['U4'][this['nq']++] = 0x7ff;
            else {
                if (0x1 === bj) {
                    let ba = bz['$'](0x3);
                    this['UC']?.['PF'](!0x1, ba), 0x1 === bz['$'](0x1) && (this['U4'][this['nq']++] = 0x7ff);
                } else {
                    if (0x2 === bj) {
                        let bq = bz['$'](0x3);
                        this['UC']?.['PF'](!0x0, bq);
                        let bT = bz['$'](0x3);
                        this['UC']?.['PF'](!0x0, bT), 0x1 === bz['$'](0x1) && (this['U4'][this['nq']++] = 0x7ff);
                    } else {
                        if (0x3 === bj) {
                            this['v1'] = bz['$'](0x2);
                            let bI = bz['$'](0x7),
                                bJ = bz['$'](0x7),
                                bV = bz['$'](0x1);
                            this['UC']?.['PM'](0x1 === bV, bI, bJ), 0x1 === bz['$'](0x1) && (this['U4'][this['nq']++] = 0x7ff);
                        }
                    }
                }
            }
        }
    } ['eb'](bz, bj) {
        this['na'] = 0x0, this['nq'] = 0x0, this['eF'](bz), this['eg'](bz), this['eG'](bz, bj), this['eB'](bz);
        for (let ba = 0x0; ba < this['na']; ba++) {
            let bq = this['nC'][ba],
                bT = this['nx'][bq];
            bT && (bT['Y1'] !== this['nQ'] && (this['nx'][bq] = null));
        }
        if (bz['S'] !== bj) throw new Error();
        for (let bI = 0x0; bI < this['U0']; bI++)
            if (!this['nx'][this['nk'][bI]]) throw new Error();
    } ['eM'](bz, bj) {
        const DB = uh;
        let ba = bz - bj;
        return ba < -0x9 ? '@red@' : ba < -0x6 ? DB(0x1ba) : ba < -0x3 ? DB(0x1b4) : ba < 0x0 ? DB(0x29c) : ba > 0x9 ? DB(0x161) : ba > 0x6 ? DB(0x169) : ba > 0x3 ? DB(0x2ca) : ba > 0x0 ? DB(0x2f4) : DB(0x186);
    } ['e8'](bz, bj, ba, bq, bT, bI, bJ, bV, xG, xg, xu) {
        const DX = uh;
        let xM = this['ND'][this['v1']];
        if (!xM) return !0x1;
        let xF = 0x68,
            xO = 0x68;
        for (let xV = 0x0; xV < xF; xV++)
            for (let xW = 0x0; xW < xO; xW++) {
                let xS = kH[DX(0x156)](xV, xW);
                this['U6'][xS] = 0x0, this['Ur'][xS] = 0x5f5e0ff;
            }
        let xD = bz,
            xC = bj,
            xy = kH[DX(0x156)](bz, bj);
        this['U6'][xy] = 0x63, this['Ur'][xy] = 0x0;
        let xz = 0x0,
            xj = 0x0;
        this['Uw'][xz] = bz, this['UP'][xz++] = bj;
        let xa = !0x1,
            xq = this['Uw'][DX(0x2ea)],
            xT = xM['QM'];
        for (; xj !== xz;) {
            if (xD = this['Uw'][xj], xC = this['UP'][xj], xj = (xj + 0x1) % xq, xD === ba && xC === bq) {
                xa = !0x0;
                break;
            }
            if (xG !== kr['Qp']['id']) {
                if ((xG < kr['Qv']['id'] || xG === kr['Qf']['id']) && xM['QT'](xD, xC, ba, bq, xG - 0x1, bV)) {
                    xa = !0x0;
                    break;
                }
                if (xG < kr['Qf']['id'] && xM['QI'](xD, xC, ba, bq, xG - 0x1, bV)) {
                    xa = !0x0;
                    break;
                }
            }
            if (0x0 !== bI && 0x0 !== bJ && xM['QJ'](xD, xC, ba, bq, bI, bJ, xg)) {
                xa = !0x0;
                break;
            }
            let xi = this['Ur'][kH[DX(0x156)](xD, xC)] + 0x1,
                G0 = kH[DX(0x156)](xD - 0x1, xC);
            xD > 0x0 && 0x0 === this['U6'][G0] && !(0x280108 & xT[G0]) && (this['Uw'][xz] = xD - 0x1, this['UP'][xz] = xC, xz = (xz + 0x1) % xq, this['U6'][G0] = 0x2, this['Ur'][G0] = xi), G0 = kH[DX(0x156)](xD + 0x1, xC), xD < 0x67 && 0x0 === this['U6'][G0] && !(0x280180 & xT[G0]) && (this['Uw'][xz] = xD + 0x1, this['UP'][xz] = xC, xz = (xz + 0x1) % xq, this['U6'][G0] = 0x8, this['Ur'][G0] = xi), G0 = kH['index'](xD, xC - 0x1), xC > 0x0 && 0x0 === this['U6'][G0] && !(0x280102 & xT[G0]) && (this['Uw'][xz] = xD, this['UP'][xz] = xC - 0x1, xz = (xz + 0x1) % xq, this['U6'][G0] = 0x1, this['Ur'][G0] = xi), G0 = kH[DX(0x156)](xD, xC + 0x1), xC < 0x67 && 0x0 === this['U6'][G0] && !(0x280120 & xT[G0]) && (this['Uw'][xz] = xD, this['UP'][xz] = xC + 0x1, xz = (xz + 0x1) % xq, this['U6'][G0] = 0x4, this['Ur'][G0] = xi), G0 = kH[DX(0x156)](xD - 0x1, xC - 0x1), !(xD > 0x0 && xC > 0x0 && 0x0 === this['U6'][G0]) || 0x28010e & xT[G0] || 0x280108 & xT[kH[DX(0x156)](xD - 0x1, xC)] || 0x280102 & xT[kH[DX(0x156)](xD, xC - 0x1)] || (this['Uw'][xz] = xD - 0x1, this['UP'][xz] = xC - 0x1, xz = (xz + 0x1) % xq, this['U6'][G0] = 0x3, this['Ur'][G0] = xi), G0 = kH['index'](xD + 0x1, xC - 0x1), !(xD < 0x67 && xC > 0x0 && 0x0 === this['U6'][G0]) || 0x280183 & xT[G0] || 0x280180 & xT[kH['index'](xD + 0x1, xC)] || 0x280102 & xT[kH[DX(0x156)](xD, xC - 0x1)] || (this['Uw'][xz] = xD + 0x1, this['UP'][xz] = xC - 0x1, xz = (xz + 0x1) % xq, this['U6'][G0] = 0x9, this['Ur'][G0] = xi), G0 = kH[DX(0x156)](xD - 0x1, xC + 0x1), !(xD > 0x0 && xC < 0x67 && 0x0 === this['U6'][G0]) || 0x280138 & xT[G0] || 0x280108 & xT[kH[DX(0x156)](xD - 0x1, xC)] || 0x280120 & xT[kH[DX(0x156)](xD, xC + 0x1)] || (this['Uw'][xz] = xD - 0x1, this['UP'][xz] = xC + 0x1, xz = (xz + 0x1) % xq, this['U6'][G0] = 0x6, this['Ur'][G0] = xi), G0 = kH[DX(0x156)](xD + 0x1, xC + 0x1), !(xD < 0x67 && xC < 0x67 && 0x0 === this['U6'][G0]) || 0x2801e0 & xT[G0] || 0x280180 & xT[kH[DX(0x156)](xD + 0x1, xC)] || 0x280120 & xT[kH[DX(0x156)](xD, xC + 0x1)] || (this['Uw'][xz] = xD + 0x1, this['UP'][xz] = xC + 0x1, xz = (xz + 0x1) % xq, this['U6'][G0] = 0xc, this['Ur'][G0] = xi);
        }
        if (this['UM'] = 0x0, !xa) {
            if (xu) {
                let G1 = 0x64;
                for (let G2 = 0x1; G2 < 0x2; G2++) {
                    for (let G3 = ba - G2; G3 <= ba + G2; G3++)
                        for (let G4 = bq - G2; G4 <= bq + G2; G4++) {
                            let G5 = kH[DX(0x156)](G3, G4);
                            G3 >= 0x0 && G4 >= 0x0 && G3 < 0x68 && G4 < 0x68 && this['Ur'][G5] < G1 && (G1 = this['Ur'][G5], xD = G3, xC = G4, this['UM'] = 0x1, xa = !0x0);
                        }
                    if (xa) break;
                }
            }
            if (!xa) return !0x1;
        }
        xj = 0x0, this['Uw'][xj] = xD, this['UP'][xj++] = xC;
        let xI = this['U6'][kH[DX(0x156)](xD, xC)],
            xJ = xI;
        for (; xD !== bz || xC !== bj;) xJ !== xI && (xI = xJ, this['Uw'][xj] = xD, this['UP'][xj++] = xC), 0x2 & xJ ? xD++ : 0x8 & xJ && xD--, 0x1 & xJ ? xC++ : 0x4 & xJ && xC--, xJ = this['U6'][kH['index'](xD, xC)];
        if (xj > 0x0) {
            xq = Math['min'](xj, 0x19), xj--;
            let G6 = this['Uw'][xj],
                G7 = this['UP'][xj];
            0x0 === bT ? (this['NB']['or'](0x42), this['NB']['k'](xq + xq + 0x3)) : 0x1 === bT ? (this['NB']['or'](0x2f), this['NB']['k'](xq + xq + 0x3 + 0xe)) : 0x2 === bT && (this['NB']['or'](0x13), this['NB']['k'](xq + xq + 0x3)), 0x1 === this['Ys'][0x5] ? this['NB']['k'](0x1) : this['NB']['k'](0x0), this['NB']['o8'](G6 + this['Nk']), this['NB']['o8'](G7 + this['va']), this['v0'] = this['Uw'][0x0], this['vE'] = this['UP'][0x0];
            for (let G8 = 0x1; G8 < xq; G8++) xj--, this['NB']['k'](this['Uw'][xj] - G6), this['NB']['k'](this['UP'][xj] - G7);
            return !0x0;
        }
        return 0x1 !== bT;
    }
    async ['eO']() {
        const Dx = uh;
        this['v2'] > 0x0 ? await this['eU']() : (this['UX']?.['bind'](), this['U7']?.['lV'](0x101, 0x90, Dx(0x1f1), 0x0), this['U7']?.['lV'](0x100, 0x8f, Dx(0x1f1), 0xffffff), this['U7']?.['lV'](0x101, 0x9f, Dx(0x31f), 0x0), this['U7']?.['lV'](0x100, 0x9e, Dx(0x31f), 0xffffff), this['UX']?.[Dx(0x173)](0x8, 0xb), this['v0'] = 0x0, this['nU']?.['Kc'](), this['YO'] = !0x1, await this['eD'](this['nG'], this['nu'], !0x0), this['YO'] || await this['eU']());
    } ['e5'](bz) {
        const DG = uh;
        if (!bz) return !0x1;
        for (let bj = 0x0; bj < this['UH']; bj++)
            if (bz['toLowerCase']() === this['UW'][bj]?.['toLowerCase']()) return !0x0;
        return !!this['UC'] && bz[DG(0x19a)]() === this['UC']['pB']?.[DG(0x19a)]();
    } ['eC']() {
        0x1 === this['Yg'] && (this['YC'] >= 0x225 && this['YC'] <= 0x247 && this['Yb'] >= 0xc3 && this['Yb'] < 0xe7 && -0x1 !== this['fT'][0x0] ? (this['fN'] = !0x0, this['fz'] = 0x0, this['mU'] = !0x0) : this['YC'] >= 0x243 && this['YC'] <= 0x261 && this['Yb'] >= 0xc2 && this['Yb'] < 0xe7 && -0x1 !== this['fT'][0x1] ? (this['fN'] = !0x0, this['fz'] = 0x1, this['mU'] = !0x0) : this['YC'] >= 0x25f && this['YC'] <= 0x27d && this['Yb'] >= 0xc2 && this['Yb'] < 0xe7 && -0x1 !== this['fT'][0x2] ? (this['fN'] = !0x0, this['fz'] = 0x2, this['mU'] = !0x0) : this['YC'] >= 0x27b && this['YC'] <= 0x2a7 && this['Yb'] >= 0xc2 && this['Yb'] < 0xe5 && -0x1 !== this['fT'][0x3] ? (this['fN'] = !0x0, this['fz'] = 0x3, this['mU'] = !0x0) : this['YC'] >= 0x2a4 && this['YC'] <= 0x2c2 && this['Yb'] >= 0xc2 && this['Yb'] < 0xe7 && -0x1 !== this['fT'][0x4] ? (this['fN'] = !0x0, this['fz'] = 0x4, this['mU'] = !0x0) : this['YC'] >= 0x2c0 && this['YC'] <= 0x2de && this['Yb'] >= 0xc2 && this['Yb'] < 0xe7 && -0x1 !== this['fT'][0x5] ? (this['fN'] = !0x0, this['fz'] = 0x5, this['mU'] = !0x0) : this['YC'] >= 0x2dc && this['YC'] <= 0x2fe && this['Yb'] >= 0xc3 && this['Yb'] < 0xe7 && -0x1 !== this['fT'][0x6] ? (this['fN'] = !0x0, this['fz'] = 0x6, this['mU'] = !0x0) : this['YC'] >= 0x226 && this['YC'] <= 0x248 && this['Yb'] >= 0x1ec && this['Yb'] < 0x210 && -0x1 !== this['fT'][0x7] ? (this['fN'] = !0x0, this['fz'] = 0x7, this['mU'] = !0x0) : this['YC'] >= 0x246 && this['YC'] <= 0x264 && this['Yb'] >= 0x1ec && this['Yb'] < 0x211 && -0x1 !== this['fT'][0x8] ? (this['fN'] = !0x0, this['fz'] = 0x8, this['mU'] = !0x0) : this['YC'] >= 0x261 && this['YC'] <= 0x27f && this['Yb'] >= 0x1ec && this['Yb'] < 0x211 && -0x1 !== this['fT'][0x9] ? (this['fN'] = !0x0, this['fz'] = 0x9, this['mU'] = !0x0) : this['YC'] >= 0x27d && this['YC'] <= 0x2a9 && this['Yb'] >= 0x1ed && this['Yb'] < 0x210 && -0x1 !== this['fT'][0xa] ? (this['fN'] = !0x0, this['fz'] = 0xa, this['mU'] = !0x0) : this['YC'] >= 0x2a7 && this['YC'] <= 0x2c5 && this['Yb'] >= 0x1ec && this['Yb'] < 0x211 && -0x1 !== this['fT'][0xb] ? (this['fN'] = !0x0, this['fz'] = 0xb, this['mU'] = !0x0) : this['YC'] >= 0x2c2 && this['YC'] <= 0x2e0 && this['Yb'] >= 0x1ec && this['Yb'] < 0x211 && -0x1 !== this['fT'][0xc] ? (this['fN'] = !0x0, this['fz'] = 0xc, this['mU'] = !0x0) : this['YC'] >= 0x2de && this['YC'] <= 0x300 && this['Yb'] >= 0x1ec && this['Yb'] < 0x210 && -0x1 !== this['fT'][0xd] && (this['fN'] = !0x0, this['fz'] = 0xd, this['mU'] = !0x0), xx['Ne']++, xx['Ne'] > 0x96 && (xx['Ne'] = 0x0, this['NB']['or'](0x11), this['NB']['k'](0x2b)));
    } ['LD']() {
        this['NB']['or'](0x65), -0x1 !== this['fd'] && (this['fd'] = -0x1, this['fN'] = !0x0, this['LG'] = !0x1, this['mU'] = !0x0), -0x1 !== this['fw'] && (this['fw'] = -0x1, this['fU'] = !0x0, this['LG'] = !0x1), this['mO'] = -0x1;
    } ['LJ'](bz) {
        const Dg = uh;
        if (0x0n === bz) return;
        if (this['ff'] >= 0x64) return void this['LM'](0x0, Dg(0x17d), '');
        let bj = xZ['HC'](xZ['HT'](bz));
        for (let ba = 0x0; ba < this['ff']; ba++)
            if (this['fm'][ba] === bz) return void this['LM'](0x0, bj + Dg(0x309), '');
        for (let bq = 0x0; bq < this['UH']; bq++)
            if (this['UI'][bq] === bz) return void this['LM'](0x0, Dg(0x210) + bj + Dg(0x1f2), '');
        this['fm'][this['ff']++] = bz, this['fN'] = !0x0, this['NB']['or'](0x5), this['NB']['W'](bz);
    } ['Lz'](bz, bj, ba, bq) {
        const Du = uh;
        if (this['fZ'] >= 0x190) return;
        let bT = bz[Du(0x260)];
        if (0x0 !== bz['h0'] && this['UC'] && (bT = bT + this['eM'](this['UC']['pD'], bz['h0']) + Du(0x2a6) + bz['h0'] + ')'), 0x1 === this['Lv']) this['fr'][this['fZ']] = Du(0x30f) + this['LB'] + Du(0x14d) + bT, this['LA'][this['fZ']] = 0x384, this['Lo'][this['fZ']] = bj, this['LQ'][this['fZ']] = ba, this['Lc'][this['fZ']] = bq, this['fZ']++;
        else {
            if (0x1 !== this['Lf']) {
                let bI;
                if (bz['Rk']) {
                    for (bI = 0x4; bI >= 0x0; bI--) bz['Rk'][bI] && Du(0x1fc) !== bz['Rk'][bI]?.[Du(0x19a)]() && (this['fr'][this['fZ']] = bz['Rk'][bI] + '\x20@yel@' + bT, 0x0 === bI ? this['LA'][this['fZ']] = 0x2d8 : 0x1 === bI ? this['LA'][this['fZ']] = 0x21e : 0x2 === bI ? this['LA'][this['fZ']] = 0x6 : 0x3 === bI ? this['LA'][this['fZ']] = 0x3c3 : 0x4 === bI && (this['LA'][this['fZ']] = 0xf5), this['Lo'][this['fZ']] = bj, this['LQ'][this['fZ']] = ba, this['Lc'][this['fZ']] = bq, this['fZ']++);
                }
                if (bz['Rk']) {
                    for (bI = 0x4; bI >= 0x0; bI--)
                        if (bz['Rk'][bI] && Du(0x1fc) === bz['Rk'][bI]?.[Du(0x19a)]()) {
                            let bJ = 0x0;
                            this['UC'] && bz['h0'] > this['UC']['pD'] && (bJ = 0x7d0), this['fr'][this['fZ']] = bz['Rk'][bI] + Du(0x13e) + bT, 0x0 === bI ? this['LA'][this['fZ']] = bJ + 0x2d8 : 0x1 === bI ? this['LA'][this['fZ']] = bJ + 0x21e : 0x2 === bI ? this['LA'][this['fZ']] = bJ + 0x6 : 0x3 === bI ? this['LA'][this['fZ']] = bJ + 0x3c3 : 0x4 === bI && (this['LA'][this['fZ']] = bJ + 0xf5), this['Lo'][this['fZ']] = bj, this['LQ'][this['fZ']] = ba, this['Lc'][this['fZ']] = bq, this['fZ']++;
                        }
                }
                this['fr'][this['fZ']] = 'Examine\x20@yel@' + bT, this['LA'][this['fZ']] = 0x647, this['Lo'][this['fZ']] = bj, this['LQ'][this['fZ']] = ba, this['Lc'][this['fZ']] = bq, this['fZ']++;
            } else 0x2 & ~this['Lb'] || (this['fr'][this['fZ']] = this['Lh'] + Du(0x13e) + bT, this['LA'][this['fZ']] = 0x109, this['Lo'][this['fZ']] = bj, this['LQ'][this['fZ']] = ba, this['Lc'][this['fZ']] = bq, this['fZ']++);
        }
    } ['LO']() {
        this['UT'] = !0x0;
        for (let bz = 0x0; bz < 0x7; bz++) {
            this['UA'][bz] = -0x1;
            for (let bj = 0x0; bj < xw['EJ']; bj++)
                if (!xw['EI'][bj]['Pa'] && xw['EI'][bj]['Pz'] === bz + (this['Ug'] ? 0x0 : 0x7)) {
                    this['UA'][bz] = bj;
                    break;
                }
        }
    } ['ey']() {
        const DM = uh;
        let bz = 0x0;
        if (this['U8']) {
            let bT;
            bz = this['U8']['lO'](DM(0x2d5));
            for (let bI = 0x0; bI < this['fZ']; bI++) bT = this['U8']['lO'](this['fr'][bI]), bT > bz && (bz = bT);
        }
        bz += 0x8;
        let bj, ba, bq = 0xf * this['fZ'] + 0x15;
        this['YC'] > 0x8 && this['Yb'] > 0xb && this['YC'] < 0x208 && this['Yb'] < 0x159 && (bj = this['YC'] - (bz / 0x2 | 0x0) - 0x8, bj + bz > 0x200 ? bj = 0x200 - bz : bj < 0x0 && (bj = 0x0), ba = this['Yb'] - 0xb, ba + bq > 0x14e ? ba = 0x14e - bq : ba < 0x0 && (ba = 0x0), this['mS'] = !0x0, this['f3'] = 0x0, this['mJ'] = bj, this['f7'] = ba, this['f5'] = bz, this['fQ'] = 0xf * this['fZ'] + 0x16), this['YC'] > 0x232 && this['Yb'] > 0xe7 && this['YC'] < 0x2f0 && this['Yb'] < 0x1ec && (bj = this['YC'] - (bz / 0x2 | 0x0) - 0x232, bj < 0x0 ? bj = 0x0 : bj + bz > 0xbe && (bj = 0xbe - bz), ba = this['Yb'] - 0xe7, ba < 0x0 ? ba = 0x0 : ba + bq > 0x105 && (ba = 0x105 - bq), this['mS'] = !0x0, this['f3'] = 0x1, this['mJ'] = bj, this['f7'] = ba, this['f5'] = bz, this['fQ'] = 0xf * this['fZ'] + 0x16), this['YC'] > 0x16 && this['Yb'] > 0x177 && this['YC'] < 0x1f5 && this['Yb'] < 0x1d7 && (bj = this['YC'] - (bz / 0x2 | 0x0) - 0x16, bj < 0x0 ? bj = 0x0 : bj + bz > 0x1df && (bj = 0x1df - bz), ba = this['Yb'] - 0x177, ba < 0x0 ? ba = 0x0 : ba + bq > 0x60 && (ba = 0x60 - bq), this['mS'] = !0x0, this['f3'] = 0x2, this['mJ'] = bj, this['f7'] = ba, this['f5'] = bz, this['fQ'] = 0xf * this['fZ'] + 0x16);
    } ['ez'](bz, bj, ba, bq, bT) {
        const DF = uh;
        if (!this['Nq'] || !this['mv']) return;
        let bI = this['Nq']['rq'](ba, bz, bj);
        if (0x0 !== bI) {
            let bJ = this['Nq']['H6'](ba, bz, bj, bI),
                bV = bJ >> 0x6 & 0x3,
                xG = 0x1f & bJ,
                xg = bq;
            bI > 0x0 && (xg = bT);
            let xu = this['mv']['Zw'],
                xM = 0x4 * bz + 0x200 * (0x67 - bj) * 0x4 + 0x6030,
                xF = bI >> 0xe & 0x7fff,
                xO = XS[DF(0x321)](xF);
            if (-0x1 === xO['Ra']) xG !== kr['Qp']['id'] && xG !== kr['QN']['id'] || (0x0 === bV ? (xu[xM] = xg, xu[xM + 0x200] = xg, xu[xM + 0x400] = xg, xu[xM + 0x600] = xg) : 0x1 === bV ? (xu[xM] = xg, xu[xM + 0x1] = xg, xu[xM + 0x2] = xg, xu[xM + 0x3] = xg) : 0x2 === bV ? (xu[xM + 0x3] = xg, xu[xM + 0x3 + 0x200] = xg, xu[xM + 0x3 + 0x400] = xg, xu[xM + 0x3 + 0x600] = xg) : 0x3 === bV && (xu[xM + 0x600] = xg, xu[xM + 0x600 + 0x1] = xg, xu[xM + 0x600 + 0x2] = xg, xu[xM + 0x600 + 0x3] = xg)), xG === kr['QR']['id'] && (0x0 === bV ? xu[xM] = xg : 0x1 === bV ? xu[xM + 0x3] = xg : 0x2 === bV ? xu[xM + 0x3 + 0x600] = xg : 0x3 === bV && (xu[xM + 0x600] = xg)), xG === kr['QN']['id'] && (0x3 === bV ? (xu[xM] = xg, xu[xM + 0x200] = xg, xu[xM + 0x400] = xg, xu[xM + 0x600] = xg) : 0x0 === bV ? (xu[xM] = xg, xu[xM + 0x1] = xg, xu[xM + 0x2] = xg, xu[xM + 0x3] = xg) : 0x1 === bV ? (xu[xM + 0x3] = xg, xu[xM + 0x3 + 0x200] = xg, xu[xM + 0x3 + 0x400] = xg, xu[xM + 0x3 + 0x600] = xg) : 0x2 === bV && (xu[xM + 0x600] = xg, xu[xM + 0x600 + 0x1] = xg, xu[xM + 0x600 + 0x2] = xg, xu[xM + 0x600 + 0x3] = xg));
            else {
                let xD = this['mn'][xO['Ra']];
                if (xD) {
                    let xC = (0x4 * xO[DF(0x1a2)] - xD['ZR']) / 0x2 | 0x0,
                        xy = (0x4 * xO[DF(0x2ea)] - xD['Zc']) / 0x2 | 0x0;
                    xD['Zj'](0x4 * bz + 0x30 + xC, 0x4 * (0x68 - bj - xO[DF(0x2ea)]) + xy + 0x30);
                }
            }
        }
        if (bI = this['Nq']['ra'](ba, bz, bj), 0x0 !== bI) {
            let xz = this['Nq']['H6'](ba, bz, bj, bI),
                xj = xz >> 0x6 & 0x3,
                xa = 0x1f & xz,
                xq = bI >> 0xe & 0x7fff,
                xT = XS['get'](xq);
            if (-0x1 !== xT['Ra']) {
                let xI = this['mn'][xT['Ra']];
                if (xI) {
                    let xJ = (0x4 * xT[DF(0x1a2)] - xI['ZR']) / 0x2 | 0x0,
                        xV = (0x4 * xT[DF(0x2ea)] - xI['Zc']) / 0x2 | 0x0;
                    xI['Zj'](0x4 * bz + 0x30 + xJ, 0x4 * (0x68 - bj - xT['length']) + xV + 0x30);
                }
            } else {
                if (xa === kr['QL']['id']) {
                    let xW = 0xeeeeee;
                    bI > 0x0 && (xW = 0xee0000);
                    let xS = this['mv']['Zw'],
                        xi = 0x4 * bz + 0x200 * (0x67 - bj) * 0x4 + 0x6030;
                    0x0 === xj || 0x2 === xj ? (xS[xi + 0x600] = xW, xS[xi + 0x400 + 0x1] = xW, xS[xi + 0x200 + 0x2] = xW, xS[xi + 0x3] = xW) : (xS[xi] = xW, xS[xi + 0x200 + 0x1] = xW, xS[xi + 0x400 + 0x2] = xW, xS[xi + 0x600 + 0x3] = xW);
                }
            }
        }
        if (bI = this['Nq']['H4'](ba, bz, bj), 0x0 !== bI) {
            let G0 = XS['get'](bI >> 0xe & 0x7fff);
            if (-0x1 !== G0['Ra']) {
                let G1 = this['mn'][G0['Ra']];
                if (G1) {
                    let G2 = (0x4 * G0[DF(0x1a2)] - G1['ZR']) / 0x2 | 0x0,
                        G3 = (0x4 * G0['length'] - G1['Zc']) / 0x2 | 0x0;
                    G1['Zj'](0x4 * bz + 0x30 + G2, 0x4 * (0x68 - bj - G0['length']) + G3 + 0x30);
                }
            }
        }
    }
    async ['ej']() {
        if (0x0 !== this['LZ']) return;
        let bz = this['Yg'];
        if (0x1 === this['Lf'] && this['YC'] >= 0x208 && this['Yb'] >= 0xa5 && this['YC'] <= 0x314 && this['Yb'] <= 0xe6 && (bz = 0x0), this['mS']) {
            if (0x1 !== bz) {
                let bj = this['YG'],
                    ba = this['YA'];
                0x0 === this['f3'] ? (bj -= 0x8, ba -= 0xb) : 0x1 === this['f3'] ? (bj -= 0x232, ba -= 0xe7) : 0x2 === this['f3'] && (bj -= 0x16, ba -= 0x177), (bj < this['mJ'] - 0xa || bj > this['mJ'] + this['f5'] + 0xa || ba < this['f7'] - 0xa || ba > this['f7'] + this['fQ'] + 0xa) && (this['mS'] = !0x1, 0x1 === this['f3'] && (this['fN'] = !0x0), 0x2 === this['f3'] && (this['fU'] = !0x0));
            }
            if (0x1 === bz) {
                let bq = this['mJ'],
                    bT = this['f7'],
                    bI = this['f5'],
                    bJ = this['YC'],
                    bV = this['Yb'];
                0x0 === this['f3'] ? (bJ -= 0x8, bV -= 0xb) : 0x1 === this['f3'] ? (bJ -= 0x232, bV -= 0xe7) : 0x2 === this['f3'] && (bJ -= 0x16, bV -= 0x177);
                let xG = -0x1;
                for (let xg = 0x0; xg < this['fZ']; xg++) {
                    let xu = bT + 0xf * (this['fZ'] - 0x1 - xg) + 0x1f;
                    bJ > bq && bJ < bq + bI && bV > xu - 0xd && bV < xu + 0x3 && (xG = xg);
                } - 0x1 !== xG && await this['eX'](xG), this['mS'] = !0x1, 0x1 === this['f3'] ? this['fN'] = !0x0 : 0x2 === this['f3'] && (this['fU'] = !0x0);
            }
        } else {
            if (0x1 === bz && this['fZ'] > 0x0) {
                let xM = this['LA'][this['fZ'] - 0x1];
                if (0x25a === xM || 0x254 === xM || 0x16 === xM || 0x37c === xM || 0x19f === xM || 0x195 === xM || 0x26 === xM || 0x1a6 === xM || 0x1de === xM || 0x15b === xM || 0xbc === xM) {
                    let xF = this['LQ'][this['fZ'] - 0x1],
                        xO = this['Lc'][this['fZ'] - 0x1];
                    if (xl['EI'][xO]['hA']) return this['LH'] = !0x1, this['LP'] = 0x0, this['L9'] = xO, this['Ld'] = xF, this['LZ'] = 0x2, this['LR'] = this['YC'], this['Lw'] = this['Yb'], xl['EI'][xO]['QX'] === this['mO'] && (this['LZ'] = 0x1), void(xl['EI'][xO]['QX'] === this['fw'] && (this['LZ'] = 0x3));
                }
            }
            if (0x1 === bz && (0x1 === this['Lp'] || this['e9'](this['fZ'] - 0x1)) && this['fZ'] > 0x2 && (bz = 0x2), 0x1 === bz && this['fZ'] > 0x0 && await this['eX'](this['fZ'] - 0x1), 0x2 !== bz || this['fZ'] <= 0x0) return;
            this['ey']();
        }
    } ['ea'](bz, bj, ba) {
        if (!bj) return;
        let bq = this['vO'] + this['vI'] & 0x7ff,
            bT = ba * ba + bz * bz;
        if (bT > 0x1900) return;
        let bI = XO['oy'][bq],
            bJ = XO['Y3'][bq];
        bI = 0x100 * bI / (this['vp'] + 0x100) | 0x0, bJ = 0x100 * bJ / (this['vp'] + 0x100) | 0x0;
        let bV = bz * bI + ba * bJ >> 0x10,
            xG = bz * bJ - ba * bI >> 0x10;
        bT > 0x9c4 && this['mZ'] ? bj['PS'](bV + 0x5e - (bj['ZG'] / 0x2 | 0x0), 0x53 - xG - (bj['Zx'] / 0x2 | 0x0), this['mZ']) : bj['Zj'](bV + 0x5e - (bj['ZG'] / 0x2 | 0x0), 0x53 - xG - (bj['Zx'] / 0x2 | 0x0));
    } ['eq'](bz) {
        const DO = uh;
        if (!this['mv']) return;
        let bj = this['mv']['Zw'],
            ba = bj[DO(0x2ea)];
        for (let bI = 0x0; bI < ba; bI++) bj[bI] = 0x0;
        for (let bJ = 0x1; bJ < 0x67; bJ++) {
            let bV = 0x200 * (0x67 - bJ) * 0x4 + 0x6034;
            for (let xG = 0x1; xG < 0x67; xG++) !this['He'] || 0x18 & this['He'][bz][xG][bJ] || this['Nq']?.['H3'](bz, xG, bJ, bj, bV, 0x200), bz < 0x3 && this['He'] && 0x8 & this['He'][bz + 0x1][xG][bJ] && this['Nq']?.['H3'](bz + 0x1, xG, bJ, bj, bV, 0x200), bV += 0x4;
        }
        let bq = (0xee + (0x14 * Math[DO(0x291)]() | 0x0) - 0xa << 0x10) + (0xee + (0x14 * Math['random']() | 0x0) - 0xa << 0x8) + (0x14 * Math[DO(0x291)]() | 0x0) + 0xee - 0xa,
            bT = 0xee + (0x14 * Math['random']() | 0x0) - 0xa << 0x10;
        this['mv']['Zm']();
        for (let xg = 0x1; xg < 0x67; xg++)
            for (let xu = 0x1; xu < 0x67; xu++) !this['He'] || 0x18 & this['He'][bz][xu][xg] || this['ez'](xu, xg, bz, bq, bT), bz < 0x3 && this['He'] && 0x8 & this['He'][bz + 0x1][xu][xg] && this['ez'](xu, xg, bz + 0x1, bq, bT);
        this['UX']?.[DO(0x2bd)](), this['Nb'] = 0x0;
        for (let xM = 0x0; xM < 0x68; xM++)
            for (let xF = 0x0; xF < 0x68; xF++) {
                let xO = this['Nq']?.['H4'](this['v1'], xM, xF) ?? 0x0;
                if (0x0 === xO) continue;
                xO = xO >> 0xe & 0x7fff;
                let xD = XS[DO(0x321)](xO)['Rj'];
                if (xD < 0x0) continue;
                let xC = xM,
                    xy = xF;
                if (0x16 !== xD && 0x1d !== xD && 0x22 !== xD && 0x24 !== xD && 0x2e !== xD && 0x2f !== xD && 0x30 !== xD) {
                    let xz = 0x68,
                        xj = 0x68,
                        xa = this['ND'][this['v1']];
                    if (xa) {
                        let xq = xa['QM'];
                        for (let xT = 0x0; xT < 0xa; xT++) {
                            let xI = 0x4 * Math['random']() | 0x0;
                            0x0 === xI && xC > 0x0 && xC > xM - 0x3 && !(0x280108 & xq[kH[DO(0x156)](xC - 0x1, xy)]) && xC--, 0x1 === xI && xC < xz - 0x1 && xC < xM + 0x3 && !(0x280180 & xq[kH[DO(0x156)](xC + 0x1, xy)]) && xC++, 0x2 === xI && xy > 0x0 && xy > xF - 0x3 && !(0x280102 & xq[kH['index'](xC, xy - 0x1)]) && xy--, 0x3 === xI && xy < xj - 0x1 && xy < xF + 0x3 && !(0x280120 & xq[kH['index'](xC, xy + 0x1)]) && xy++;
                        }
                    }
                }
                this['fn'][this['Nb']] = this['mf'][xD], this['Ny'][this['Nb']] = xC, this['Nx'][this['Nb']] = xy, this['Nb']++;
            }
    } ['eT']() {
        const DD = uh;
        let bz = this['mJ'],
            bj = this['f7'],
            ba = this['f5'],
            bq = this['fQ'],
            bT = 0x5d5447;
        Xu['ZK'](bz, bj, ba, bq, bT), Xu['ZK'](bz + 0x1, bj + 0x1, ba - 0x2, 0x10, 0x0), Xu['Zs'](bz + 0x1, bj + 0x12, ba - 0x2, bq - 0x13, 0x0), this['U8']?.['lz'](bz + 0x3, bj + 0xe, DD(0x2d5), bT);
        let bI = this['YG'],
            bJ = this['YA'];
        0x0 === this['f3'] && (bI -= 0x8, bJ -= 0xb), 0x1 === this['f3'] && (bI -= 0x232, bJ -= 0xe7), 0x2 === this['f3'] && (bI -= 0x16, bJ -= 0x177);
        for (let bV = 0x0; bV < this['fZ']; bV++) {
            let xG = bj + 0xf * (this['fZ'] - 0x1 - bV) + 0x1f,
                xg = 0xffffff;
            bI > bz && bI < bz + ba && bJ > xG - 0xd && bJ < xG + 0x3 && (xg = 0xffff00), this['U8']?.['lC'](bz + 0x3, xG, this['fr'][bV], xg, !0x0);
        }
    } ['eI']() {
        const DC = uh;
        if (this['Uz']?.[DC(0x2bd)](), this['Ul'] && (XO['YZ'] = this['Ul']), this['m2']?.['Zj'](0x0, 0x0), this['fD']) this['U8']?.['lV'](0xef, 0x28, this['fj'], 0x0), this['U8']?.['lV'](0xef, 0x3c, this['fq'] + '*', 0x80);
        else {
            if (this['L1']) this['U8']?.['lV'](0xef, 0x28, DC(0x31b), 0x0), this['U8']?.['lV'](0xef, 0x3c, this['fi'] + '*', 0x80);
            else {
                if (this['fy']) this['U8']?.['lV'](0xef, 0x28, this['fy'], 0x0), this['U8']?.['lV'](0xef, 0x3c, 'Click\x20to\x20continue', 0x80);
                else {
                    if (-0x1 !== this['fw']) this['eJ'](xl['EI'][this['fw']], 0x0, 0x0, 0x0);
                    else {
                        if (-0x1 === this['fW']) {
                            let bz = this['U7'],
                                bj = 0x0;
                            Xu['ZU'](0x0, 0x0, 0x1cf, 0x4d);
                            for (let ba = 0x0; ba < 0x64; ba++) {
                                let bq = this['fV'][ba];
                                if (!bq) continue;
                                let bT = this['fJ'][ba],
                                    bI = this['fL'] + 0x46 - 0xe * bj;
                                0x0 === bT && (bI > 0x0 && bI < 0x6e && bz?.['lz'](0x4, bI, bq, 0x0), bj++), 0x1 === bT && (bI > 0x0 && bI < 0x6e && (bz?.['lz'](0x4, bI, this['fS'][ba] + ':', 0xffffff), bz?.['lz'](bz['lO'](this['fS'][ba]) + 0xc, bI, bq, 0xff)), bj++), 0x2 === bT && (0x0 === this['fu'] || 0x1 === this['fu'] && this['e5'](this['fS'][ba])) && (bI > 0x0 && bI < 0x6e && (bz?.['lz'](0x4, bI, this['fS'][ba] + ':', 0x0), bz?.['lz'](bz['lO'](this['fS'][ba]) + 0xc, bI, bq, 0xff)), bj++), 0x3 !== bT && 0x7 !== bT || 0x0 !== this['L2'] || !(0x7 === bT || 0x0 === this['fg'] || 0x1 === this['fg'] && this['e5'](this['fS'][ba])) || (bI > 0x0 && bI < 0x6e && (bz?.['lz'](0x4, bI, 'From\x20' + this['fS'][ba] + ':', 0x0), bz?.['lz'](bz['lO'](DC(0x263) + this['fS'][ba]) + 0xc, bI, bq, 0x800000)), bj++), 0x4 === bT && (0x0 === this['fM'] || 0x1 === this['fM'] && this['e5'](this['fS'][ba])) && (bI > 0x0 && bI < 0x6e && bz?.['lz'](0x4, bI, this['fS'][ba] + '\x20' + this['fV'][ba], 0x800080), bj++), 0x5 === bT && 0x0 === this['L2'] && this['fg'] < 0x2 && (bI > 0x0 && bI < 0x6e && bz?.['lz'](0x4, bI, bq, 0x800000), bj++), 0x6 === bT && 0x0 === this['L2'] && this['fg'] < 0x2 && (bI > 0x0 && bI < 0x6e && (bz?.['lz'](0x4, bI, 'To\x20' + this['fS'][ba] + ':', 0x0), bz?.['lz'](bz['lO']('To\x20' + this['fS'][ba]) + 0xc, bI, bq, 0x800000)), bj++), 0x8 === bT && (0x0 === this['fM'] || 0x1 === this['fM'] && this['e5'](this['fS'][ba])) && (bI > 0x0 && bI < 0x6e && bz?.['lz'](0x4, bI, this['fS'][ba] + '\x20' + this['fV'][ba], 0xcbb789), bj++);
                            }
                            Xu['ZA'](), this['fK'] = 0xe * bj + 0x7, this['fK'] < 0x4e && (this['fK'] = 0x4e), this['eV'](0x1cf, 0x0, this['fK'] - this['fL'] - 0x4d, this['fK'], 0x4d), bz?.['lz'](0x4, 0x5a, xZ['HC'](this['nG']) + ':', 0x0), bz?.['lz'](bz['lO'](this['nG'] + ':\x20') + 0x6, 0x5a, this['L5'] + '*', 0xff), Xu['Ze'](0x0, 0x4d, 0x0, 0x1df);
                        } else this['eJ'](xl['EI'][this['fW']], 0x0, 0x0, 0x0);
                    }
                }
            }
        }
        this['mS'] && 0x2 === this['f3'] && this['eT'](), this['Uz']?.[DC(0x173)](0x16, 0x177), this['UX']?.[DC(0x2bd)](), this['Uj'] && (XO['YZ'] = this['Uj']);
    } ['eW']() {
        const Dy = uh;
        if (this['Ue']?.[Dy(0x2bd)](), !this['UC']) return;
        let bz = this['vO'] + this['vI'] & 0x7ff,
            bj = 0x30 + (this['UC']['x'] / 0x20 | 0x0),
            ba = 0x1d0 - (this['UC']['z'] / 0x20 | 0x0);
        this['mv']?.['p1'](0x15, 0x9, 0x92, 0x97, this['Uu'], this['UN'], bj, ba, bz, this['vp'] + 0x100), this['mN']?.['p1'](0x0, 0x0, 0x21, 0x21, this['UD'], this['UO'], 0x19, 0x19, this['vO'], 0x100);
        for (let bq = 0x0; bq < this['Nb']; bq++) bj = 0x4 * this['Ny'][bq] + 0x2 - (this['UC']['x'] / 0x20 | 0x0), ba = 0x4 * this['Nx'][bq] + 0x2 - (this['UC']['z'] / 0x20 | 0x0), this['ea'](ba, this['fn'][bq], bj);
        for (let bT = 0x0; bT < 0x68; bT++)
            for (let bI = 0x0; bI < 0x68; bI++) this['Up'][this['v1']][bT][bI] && (bj = 0x4 * bT + 0x2 - (this['UC']['x'] / 0x20 | 0x0), ba = 0x4 * bI + 0x2 - (this['UC']['z'] / 0x20 | 0x0), this['ea'](ba, this['mV'], bj));
        for (let bJ = 0x0; bJ < this['U3']; bJ++) {
            let bV = this['nM'][this['nW'][bJ]];
            bV && bV['pq']() && bV['pT'] && bV['pT']['pi'] && (bj = (bV['x'] / 0x20 | 0x0) - (this['UC']['x'] / 0x20 | 0x0), ba = (bV['z'] / 0x20 | 0x0) - (this['UC']['z'] / 0x20 | 0x0), this['ea'](ba, this['f0'], bj));
        }
        for (let xG = 0x0; xG < this['U0']; xG++) {
            let xg = this['nx'][this['nk'][xG]];
            if (xg && xg['pq']() && xg['pB']) {
                bj = (xg['x'] / 0x20 | 0x0) - (this['UC']['x'] / 0x20 | 0x0), ba = (xg['z'] / 0x20 | 0x0) - (this['UC']['z'] / 0x20 | 0x0);
                let xu = !0x1,
                    xM = xZ['Ha'](xg['pB']);
                for (let xF = 0x0; xF < this['UH']; xF++)
                    if (xM === this['UI'][xF] && 0x0 !== this['mD'][xF]) {
                        xu = !0x0;
                        break;
                    } xu ? this['ea'](ba, this['f1'], bj) : this['ea'](ba, this['f4'], bj);
            }
        }
        0x0 !== this['v0'] && (bj = 0x4 * this['v0'] + 0x2 - (this['UC']['x'] / 0x20 | 0x0), ba = 0x4 * this['vE'] + 0x2 - (this['UC']['z'] / 0x20 | 0x0), this['ea'](ba, this['mA'], bj)), Xu['ZK'](0x5d, 0x52, 0x3, 0x3, 0xffffff), this['UX']?.[Dy(0x2bd)]();
    } ['eS']() {
        if (!this['UC']) return;
        let bz = (this['UC']['x'] >> 0x7) + this['Nk'],
            bj = (this['UC']['z'] >> 0x7) + this['va'];
        if (this['U9'] = bz >= 0xb80 && bz < 0xd40 && bj >= 0xdc0 && bj < 0x1900 ? 0x1 + ((bj - 0xdc0) / 0x8 | 0x0) : bz >= 0xb80 && bz < 0xd40 && bj >= 0x26c0 && bj < 0x3200 ? 0x1 + ((bj - 0x26c0) / 0x8 | 0x0) : 0x0, this['UQ'] = 0x0, bz >= 0xd00 && bz < 0xd40 && bj >= 0xc80 && bj < 0xcc0) {
            let ba = 0x3f & bz,
                bq = 0x3f & bj;
            (ba >= 0x4 && ba <= 0x1d && bq >= 0x2c && bq <= 0x3a || ba >= 0x24 && ba <= 0x3d && bq >= 0x2c && bq <= 0x3a || ba >= 0x4 && ba <= 0x1d && bq >= 0x19 && bq <= 0x27 || ba >= 0x24 && ba <= 0x3d && bq >= 0x19 && bq <= 0x27 || ba >= 0x4 && ba <= 0x1d && bq >= 0x6 && bq <= 0x14 || ba >= 0x24 && ba <= 0x3d && bq >= 0x6 && bq <= 0x14) && (this['UQ'] = 0x1);
        }
        0x0 === this['UQ'] && bz >= 0xd00 && bz <= 0xd41 && bj >= 0xc83 && bj <= 0xcfd && (this['UQ'] = 0x2), this['mi'] = 0x0, (bz >= 0xbed && bz <= 0xc54 && bj >= 0xbf0 && bj <= 0xc40 || bz >= 0xc00 && bz <= 0xc2e && bj >= 0x2514 && bj <= 0x253f) && (this['mi'] = 0x1), 0x1 === this['mi'] && bz >= 0xc43 && bz <= 0xc7f && bj >= 0xbc0 && bj <= 0xbf6 && (this['mi'] = 0x0);
    } ['ei']() {
        const Dz = uh;
        if (this['s0'](), 0x1 === this['mq'] && this['mL'][this['mC'] / 0x64 | 0x0]?.['Zj'](this['mT'] - 0x8 - 0x8, this['mI'] - 0x8 - 0xb), 0x2 === this['mq'] && this['mL'][0x4 + (this['mC'] / 0x64 | 0x0)]?.['Zj'](this['mT'] - 0x8 - 0x8, this['mI'] - 0x8 - 0xb), -0x1 !== this['mO'] && (this['s1'](this['mO'], this['v6']), this['eJ'](xl['EI'][this['mO']], 0x0, 0x0, 0x0)), this['eS'](), this['mS'] ? 0x0 === this['f3'] && this['eT']() : (this['eu'](), this['s2']()), 0x1 === this['Uf'] && (this['U9'] > 0x0 || 0x1 === this['UQ'] ? this['mb'][0x1]?.['Zj'](0x1d8, 0x102) : this['mb'][0x1]?.['Zj'](0x1d8, 0x128)), this['U9'] > 0x0 && (this['mb'][0x0]?.['Zj'](0x1d8, 0x128), this['U7']?.['lV'](0x1e4, 0x149, 'Level:\x20' + this['U9'], 0xffff00)), 0x1 === this['UQ'] && (this['mb'][0x6]?.['Zj'](0x1d8, 0x128), this['U7']?.['lV'](0x1e4, 0x149, Dz(0x1dc), 0xffff00)), this['mz']) {
            let bz = 0x1fb,
                bj = 0x14,
                ba = 0xffff00;
            this['E7'] < 0xf && (ba = 0xff0000), this['U7']?.['lI'](bz, bj, Dz(0x1a1) + this['E7'], ba), bj += 0xf;
            let bq = -0x1;
            void 0x0 !== window[Dz(0x22f)]['memory'] && (bq = window[Dz(0x22f)][Dz(0x19e)][Dz(0x220)] / 0x400 | 0x0), -0x1 !== bq && this['U7']?.['lI'](bz, bj, 'Mem:' + bq + 'k', 0xffff00);
        }
        if (0x0 !== this['Ni']) {
            let bT = this['Ni'] / 0x32 | 0x0,
                bI = bT / 0x3c | 0x0;
            bT %= 0x3c, bT < 0xa ? this['U7']?.['lz'](0x4, 0x149, 'System\x20update\x20in:\x20' + bI + ':0' + bT, 0xffff00) : this['U7']?.['lz'](0x4, 0x149, Dz(0x1f3) + bI + ':' + bT, 0xffff00);
        }
    } ['s3']() {
        const Dj = uh;
        this['UG']?.[Dj(0x2bd)](), this['Uk'] && (XO['YZ'] = this['Uk']), this['m5']?.['Zj'](0x0, 0x0), -0x1 !== this['fd'] ? this['eJ'](xl['EI'][this['fd']], 0x0, 0x0, 0x0) : -0x1 !== this['fT'][this['fz']] && this['eJ'](xl['EI'][this['fT'][this['fz']]], 0x0, 0x0, 0x0), this['mS'] && 0x1 === this['f3'] && this['eT'](), this['UG']?.['draw'](0x232, 0xe7), this['UX']?.['bind'](), this['Uj'] && (XO['YZ'] = this['Uj']);
    } ['s0']() {
        const Da = uh;
        if (0x0 === this['L2']) return;
        let bz = this['U7'],
            bj = 0x0;
        0x0 !== this['Ni'] && (bj = 0x1);
        for (let ba = 0x0; ba < 0x64; ba++) {
            if (!this['fV'][ba]) continue;
            let bq, bT = this['fJ'][ba];
            if ((0x3 === bT || 0x7 === bT) && (0x7 === bT || 0x0 === this['fg'] || 0x1 === this['fg'] && this['e5'](this['fS'][ba])) && (bq = 0x149 - 0xd * bj, bz?.['lz'](0x4, bq, Da(0x263) + this['fS'][ba] + ':\x20' + this['fV'][ba], 0x0), bz?.['lz'](0x4, bq - 0x1, 'From\x20' + this['fS'][ba] + ':\x20' + this['fV'][ba], 0xffff), bj++, bj >= 0x5)) return;
            if (0x5 === bT && this['fg'] < 0x2 && (bq = 0x149 - 0xd * bj, bz?.['lz'](0x4, bq, this['fV'][ba], 0x0), bz?.['lz'](0x4, bq - 0x1, this['fV'][ba], 0xffff), bj++, bj >= 0x5)) return;
            if (0x6 === bT && this['fg'] < 0x2 && (bq = 0x149 - 0xd * bj, bz?.['lz'](0x4, bq, Da(0x19d) + this['fS'][ba] + ':\x20' + this['fV'][ba], 0x0), bz?.['lz'](0x4, bq - 0x1, Da(0x19d) + this['fS'][ba] + ':\x20' + this['fV'][ba], 0xffff), bj++, bj >= 0x5)) return;
        }
    } ['s4'](bz, bj, ba) {
        let bq = bz - this['nw'],
            bT = bj - this['n2'],
            bI = ba - this['no'],
            bJ = XO['oy'][this['Ns']],
            bV = XO['Y3'][this['Ns']],
            xG = XO['oy'][this['vZ']],
            xg = XO['Y3'][this['vZ']],
            xu = bI * xG + bq * xg >> 0x10;
        bI = bI * xg - bq * xG >> 0x10, bq = xu, xu = bT * bV - bI * bJ >> 0x10, bI = bT * bJ + bI * bV >> 0x10, bT = xu, bI >= 0x32 ? (this['ne'] = XO['YY'] + ((bq << 0x9) / bI | 0x0), this['nL'] = XO['Y5'] + ((bT << 0x9) / bI | 0x0)) : (this['ne'] = -0x1, this['nL'] = -0x1);
    } ['s5']() {
        0x2 === this['fR'] && this['mb'][0x2] && (this['s6']((this['fA'] - this['Nk'] << 0x7) + this['fb'], 0x2 * this['fs'], (this['fk'] - this['va'] << 0x7) + this['fB']), this['ne'] > -0x1 && this['nQ'] % 0x14 < 0xa && this['mb'][0x2]['Zj'](this['ne'] - 0xc, this['nL'] - 0x1c));
    } ['s7']() {
        const Dq = uh;
        this['UL'] = 0x0;
        for (let bz = -0x1; bz < this['U0'] + this['U3']; bz++) {
            let bj = null;
            if (bj = -0x1 === bz ? this['UC'] : bz < this['U0'] ? this['nx'][this['nk'][bz]] : this['nM'][this['nW'][bz - this['U0']]], bj && bj['pq']()) {
                if (bz < this['U0']) {
                    let ba = 0x1e,
                        bq = bj;
                    if (0x0 !== bq['pX'] && (this['s8'](bj, bj['wL'] + 0xf), this['ne'] > -0x1)) {
                        for (let bT = 0x0; bT < 0x8; bT++) bq['pX'] & 0x1 << bT && (this['mb'][bT]?.['Zj'](this['ne'] - 0xc, this['nL'] - ba), ba -= 0x19);
                    }
                    bz >= 0x0 && 0xa === this['fR'] && this['fe'] === this['nk'][bz] && (this['s8'](bj, bj['wL'] + 0xf), this['ne'] > -0x1 && this['mb'][0x7]?.['Zj'](this['ne'] - 0xc, this['nL'] - ba));
                } else 0x1 === this['fR'] && this['fP'] === this['nW'][bz - this['U0']] && this['nQ'] % 0x14 < 0xa && (this['s8'](bj, bj['wL'] + 0xf), this['ne'] > -0x1 && this['mb'][0x2]?.['Zj'](this['ne'] - 0xc, this['nL'] - 0x1c));
                if (bj['Pe'] && (bz >= this['U0'] || 0x0 === this['fu'] || 0x3 === this['fu'] || 0x1 === this['fu'] && this['e5'](bj['pB'])) && (this['s8'](bj, bj['wL']), this['ne'] > -0x1 && this['UL'] < 0x32 && this['U8'] && (this['US'][this['UL']] = this['U8']['lO'](bj['Pe']) / 0x2 | 0x0, this['Ub'][this['UL']] = this['U8']['Zc'], this['Un'][this['UL']] = this['ne'], this['Us'][this['UL']] = this['nL'], this['mc'][this['UL']] = bj['PG'], this['mP'][this['UL']] = bj['Pg'], this['mG'][this['UL']] = bj['Px'], this['Ui'][this['UL']++] = bj['Pe'], 0x0 === this['L3'] && 0x1 === bj['Pg'] && (this['Ub'][this['UL']] += 0xa, this['Us'][this['UL']] += 0x5), 0x0 === this['L3'] && 0x2 === bj['Pg'] && (this['US'][this['UL']] = 0x3c))), bj['PP'] > this['nQ'] + 0x64 && (this['s8'](bj, bj['wL'] + 0xf), this['ne'] > -0x1)) {
                    let bI = 0x1e * bj['PK'] / bj['Pn'] | 0x0;
                    bI > 0x1e && (bI = 0x1e), Xu['ZK'](this['ne'] - 0xf, this['nL'] - 0x3, bI, 0x5, 0xff00), Xu['ZK'](this['ne'] - 0xf + bI, this['nL'] - 0x3, 0x1e - bI, 0x5, 0xff0000);
                }
                bj['PP'] > this['nQ'] + 0x14a && (this['s8'](bj, bj['wL'] / 0x2 | 0x0), this['ne'] > -0x1 && (this['mu'][bj['Pd']]?.['Zj'](this['ne'] - 0xc, this['nL'] - 0xc), this['nV']?.['lV'](this['ne'], this['nL'] + 0x4, bj['PZ']['toString'](), 0x0), this['nV']?.['lV'](this['ne'] - 0x1, this['nL'] + 0x3, bj['PZ'][Dq(0x27e)](), 0xffffff)));
            }
        }
        for (let bJ = 0x0; bJ < this['UL']; bJ++) {
            let bV = this['Un'][bJ],
                xG = this['Us'][bJ],
                xg = this['US'][bJ],
                xu = this['Ub'][bJ],
                xM = !0x0;
            for (; xM;) {
                xM = !0x1;
                for (let xO = 0x0; xO < bJ; xO++) xG + 0x2 > this['Us'][xO] - this['Ub'][xO] && xG - xu < this['Us'][xO] + 0x2 && bV - xg < this['Un'][xO] + this['US'][xO] && bV + xg > this['Un'][xO] - this['US'][xO] && this['Us'][xO] - this['Ub'][xO] < xG && (xG = this['Us'][xO] - this['Ub'][xO], xM = !0x0);
            }
            this['ne'] = this['Un'][bJ], this['nL'] = this['Us'][bJ] = xG;
            let xF = this['Ui'][bJ];
            if (0x0 === this['L3']) {
                let xD = 0xffff00;
                if (this['mc'][bJ] < 0x6 && (xD = xx['Uh'][this['mc'][bJ]]), 0x6 === this['mc'][bJ] && (xD = this['v5'] % 0x14 < 0xa ? 0xff0000 : 0xffff00), 0x7 === this['mc'][bJ] && (xD = this['v5'] % 0x14 < 0xa ? 0xff : 0xffff), 0x8 === this['mc'][bJ] && (xD = this['v5'] % 0x14 < 0xa ? 0xb000 : 0x80ff80), 0x9 === this['mc'][bJ]) {
                    let xC = 0x96 - this['mG'][bJ];
                    xC < 0x32 ? xD = 0x500 * xC + 0xff0000 : xC < 0x64 ? xD = 0xffff00 - 0x50000 * (xC - 0x32) : xC < 0x96 && (xD = 0x5 * (xC - 0x64) + 0xff00);
                }
                if (0xa === this['mc'][bJ]) {
                    let xy = 0x96 - this['mG'][bJ];
                    xy < 0x32 ? xD = 0x5 * xy + 0xff0000 : xy < 0x64 ? xD = 0xff00ff - 0x50000 * (xy - 0x32) : xy < 0x96 && (xD = 0x50000 * (xy - 0x64) + 0xff - 0x5 * (xy - 0x64));
                }
                if (0xb === this['mc'][bJ]) {
                    let xz = 0x96 - this['mG'][bJ];
                    xz < 0x32 ? xD = 0xffffff - 0x50005 * xz : xz < 0x64 ? xD = 0x50005 * (xz - 0x32) + 0xff00 : xz < 0x96 && (xD = 0xffffff - 0x50000 * (xz - 0x64));
                }
                if (0x0 === this['mP'][bJ] && (this['U8']?.['lV'](this['ne'], this['nL'] + 0x1, xF, 0x0), this['U8']?.['lV'](this['ne'], this['nL'], xF, xD)), 0x1 === this['mP'][bJ] && (this['U8']?.['lF'](this['ne'], this['nL'] + 0x1, xF, 0x0, this['v5']), this['U8']?.['lF'](this['ne'], this['nL'], xF, xD, this['v5'])), 0x2 === this['mP'][bJ]) {
                    let xj = this['U8']?.['lO'](xF) ?? 0x0,
                        xa = (0x96 - this['mG'][bJ]) * (xj + 0x64) / 0x96;
                    Xu['ZU'](this['ne'] - 0x32, 0x0, this['ne'] + 0x32, 0x14e), this['U8']?.['lz'](this['ne'] + 0x32 - xa, this['nL'] + 0x1, xF, 0x0), this['U8']?.['lz'](this['ne'] + 0x32 - xa, this['nL'], xF, xD), Xu['ZA']();
                }
            } else this['U8']?.['lV'](this['ne'], this['nL'] + 0x1, xF, 0x0), this['U8']?.['lV'](this['ne'], this['nL'], xF, 0xffff00);
        }
    } ['s2']() {
        const DT = uh;
        if (this['fZ'] < 0x2 && 0x0 === this['Lv'] && 0x0 === this['Lf']) return;
        let bz;
        bz = 0x1 === this['Lv'] && this['fZ'] < 0x2 ? DT(0x30f) + this['LB'] + '\x20with...' : 0x1 === this['Lf'] && this['fZ'] < 0x2 ? this['Lh'] + '...' : this['fr'][this['fZ'] - 0x1], this['fZ'] > 0x2 && (bz = bz + DT(0x2c4) + (this['fZ'] - 0x2) + DT(0x200)), this['U8']?.['lJ'](0x4, 0xf, bz, 0xffffff, !0x0, this['nQ'] / 0x3e8 | 0x0);
    } ['s6'](bz, bj, ba) {
        if (bz < 0x80 || ba < 0x80 || bz > 0x3300 || ba > 0x3300) return this['ne'] = -0x1, void(this['nL'] = -0x1);
        let bq = this['e0'](this['v1'], bz, ba) - bj;
        this['s4'](bz, bq, ba);
    } ['s9'](bz, bj, ba, bq, bT, bI, bJ, bV, xG) {
        const DI = uh;
        let xg = null;
        for (let xu = this['UK'][DI(0x32b)](); xu; xu = this['UK'][DI(0x302)]())
            if (xu['h6'] === this['v1'] && xu['x'] === bV && xu['z'] === bT && xu['QX'] === bq) {
                xg = xu;
                break;
            } xg || (xg = new xp(), xg['h6'] = bJ, xg['QX'] = bq, xg['x'] = bV, xg['z'] = bT, this['so'](xg), this['UK']['B'](xg)), xg['h4'] = bj, xg['h5'] = bI, xg['h3'] = ba, xg['h9'] = xG, xg['h1'] = bz;
    } ['so'](bz) {
        if (!this['Nq']) return;
        let bj = 0x0,
            ba = -0x1,
            bq = 0x0,
            bT = 0x0;
        if (0x0 === bz['QX'] ? bj = this['Nq']['rq'](bz['h6'], bz['x'], bz['z']) : 0x1 === bz['QX'] ? bj = this['Nq']['H7'](bz['h6'], bz['z'], bz['x']) : 0x2 === bz['QX'] ? bj = this['Nq']['ra'](bz['h6'], bz['x'], bz['z']) : 0x3 === bz['QX'] && (bj = this['Nq']['H4'](bz['h6'], bz['x'], bz['z'])), 0x0 !== bj) {
            let bI = this['Nq']['H6'](bz['h6'], bz['x'], bz['z'], bj);
            ba = bj >> 0xe & 0x7fff, bq = 0x1f & bI, bT = bI >> 0x6;
        }
        bz['h2'] = ba, bz['h8'] = bq, bz['h7'] = bT;
    } ['en']() {
        const DJ = uh;
        for (let bz = this['UK']['head'](); bz; bz = this['UK'][DJ(0x302)]()) - 0x1 === bz['h1'] ? (bz['h9'] = 0x0, this['so'](bz)) : bz['p']();
    } ['sQ']() {
        const DV = uh;
        if (null === this['nx']) return;
        this['vW'] && (this['vW'] = !0x1, this['UJ']?.[DV(0x173)](0x0, 0xb), this['m3']?.[DV(0x173)](0x0, 0x177), this['m6']?.[DV(0x173)](0x2d9, 0x5), this['m7']?.[DV(0x173)](0x2f0, 0xe7), this['m4']?.[DV(0x173)](0x0, 0x0), this['mY']?.[DV(0x173)](0x231, 0x0), this['mp']?.['draw'](0x208, 0xb), this['m9']?.[DV(0x173)](0x208, 0xe7), this['mh']?.['draw'](0x1f5, 0x177), this['Uy']?.['draw'](0x0, 0x159), this['fN'] = !0x0, this['fU'] = !0x0, this['mU'] = !0x0, this['mm'] = !0x0, 0x2 !== this['Nj'] && (this['UX']?.['draw'](0x8, 0xb), this['Ue']?.[DV(0x173)](0x231, 0x5))), 0x2 === this['Nj'] && this['sZ'](), this['mS'] && 0x1 === this['f3'] && (this['fN'] = !0x0);
        let bz = !0x1;
        if (-0x1 !== this['fd'] && (bz = this['s1'](this['fd'], this['v6']), bz && (this['fN'] = !0x0)), 0x2 === this['Lk'] && (this['fN'] = !0x0), 0x2 === this['LZ'] && (this['fN'] = !0x0), this['fN'] && (this['s3'](), this['fN'] = !0x1), -0x1 === this['fw']) {
            this['fp']['l3'] = this['fK'] - this['fL'] - 0x4d, this['YG'] > 0x1c5 && this['YG'] < 0x235 && this['YA'] > 0x15e && this['LC'](this['YG'] - 0x16, this['YA'] - 0x177, this['fK'], 0x4d, !0x1, 0x1cf, 0x0, this['fp']);
            let bj = this['fK'] - this['fp']['l3'] - 0x4d;
            bj < 0x0 && (bj = 0x0), bj > this['fK'] - 0x4d && (bj = this['fK'] - 0x4d), this['fL'] !== bj && (this['fL'] = bj, this['fU'] = !0x0);
        } - 0x1 !== this['fw'] && (bz = this['s1'](this['fw'], this['v6']), bz && (this['fU'] = !0x0)), 0x3 === this['Lk'] && (this['fU'] = !0x0), 0x3 === this['LZ'] && (this['fU'] = !0x0), this['fy'] && (this['fU'] = !0x0), this['mS'] && 0x2 === this['f3'] && (this['fU'] = !0x0), this['fU'] && (this['eI'](), this['fU'] = !0x1), 0x2 === this['Nj'] && (this['eW'](), this['Ue']?.[DV(0x173)](0x231, 0x5)), -0x1 !== this['fa'] && (this['mU'] = !0x0), this['mU'] && (-0x1 !== this['fa'] && this['fa'] === this['fz'] && (this['fa'] = -0x1, this['NB']['or'](0x63), this['NB']['k'](this['fz'])), this['mU'] = !0x1, this['Ux']?.[DV(0x2bd)](), this['mH']?.['Zj'](0x0, 0x0), -0x1 === this['fd'] && (-0x1 !== this['fT'][this['fz']] && (0x0 === this['fz'] ? this['f2']?.['Zj'](0x1d, 0x1e) : 0x1 === this['fz'] ? this['mF']?.['Zj'](0x3b, 0x1d) : 0x2 === this['fz'] ? this['mF']?.['Zj'](0x57, 0x1d) : 0x3 === this['fz'] ? this['f9']?.['Zj'](0x73, 0x1d) : 0x4 === this['fz'] ? this['fv']?.['Zj'](0x9c, 0x1d) : 0x5 === this['fz'] ? this['fv']?.['Zj'](0xb8, 0x1d) : 0x6 === this['fz'] && this['fE']?.['Zj'](0xd4, 0x1e)), -0x1 !== this['fT'][0x0] && (0x0 !== this['fa'] || this['nQ'] % 0x14 < 0xa) && this['ml'][0x0]?.['Zj'](0x23, 0x22), -0x1 !== this['fT'][0x1] && (0x1 !== this['fa'] || this['nQ'] % 0x14 < 0xa) && this['ml'][0x1]?.['Zj'](0x3b, 0x20), -0x1 !== this['fT'][0x2] && (0x2 !== this['fa'] || this['nQ'] % 0x14 < 0xa) && this['ml'][0x2]?.['Zj'](0x56, 0x20), -0x1 !== this['fT'][0x3] && (0x3 !== this['fa'] || this['nQ'] % 0x14 < 0xa) && this['ml'][0x3]?.['Zj'](0x79, 0x21), -0x1 !== this['fT'][0x4] && (0x4 !== this['fa'] || this['nQ'] % 0x14 < 0xa) && this['ml'][0x4]?.['Zj'](0x9d, 0x22), -0x1 !== this['fT'][0x5] && (0x5 !== this['fa'] || this['nQ'] % 0x14 < 0xa) && this['ml'][0x5]?.['Zj'](0xb9, 0x20), -0x1 !== this['fT'][0x6] && (0x6 !== this['fa'] || this['nQ'] % 0x14 < 0xa) && this['ml'][0x6]?.['Zj'](0xd4, 0x22)), this['Ux']?.[DV(0x173)](0x208, 0xa5), this['Uv']?.[DV(0x2bd)](), this['mr']?.['Zj'](0x0, 0x0), -0x1 === this['fd'] && (-0x1 !== this['fT'][this['fz']] && (0x7 === this['fz'] ? this['fc']?.['Zj'](0x31, 0x0) : 0x8 === this['fz'] ? this['fH']?.['Zj'](0x51, 0x0) : 0x9 === this['fz'] ? this['fH']?.['Zj'](0x6c, 0x0) : 0xa === this['fz'] ? this['fl']?.['Zj'](0x88, 0x1) : 0xb === this['fz'] ? this['fh']?.['Zj'](0xb2, 0x0) : 0xc === this['fz'] ? this['fh']?.['Zj'](0xcd, 0x0) : 0xd === this['fz'] && this['fo']?.['Zj'](0xe9, 0x0)), -0x1 !== this['fT'][0x8] && (0x8 !== this['fa'] || this['nQ'] % 0x14 < 0xa) && this['ml'][0x7]?.['Zj'](0x50, 0x2), -0x1 !== this['fT'][0x9] && (0x9 !== this['fa'] || this['nQ'] % 0x14 < 0xa) && this['ml'][0x8]?.['Zj'](0x6b, 0x3), -0x1 !== this['fT'][0xa] && (0xa !== this['fa'] || this['nQ'] % 0x14 < 0xa) && this['ml'][0x9]?.['Zj'](0x8e, 0x4), -0x1 !== this['fT'][0xb] && (0xb !== this['fa'] || this['nQ'] % 0x14 < 0xa) && this['ml'][0xa]?.['Zj'](0xb3, 0x2), -0x1 !== this['fT'][0xc] && (0xc !== this['fa'] || this['nQ'] % 0x14 < 0xa) && this['ml'][0xb]?.['Zj'](0xce, 0x2), -0x1 !== this['fT'][0xd] && (0xd !== this['fa'] || this['nQ'] % 0x14 < 0xa) && this['ml'][0xc]?.['Zj'](0xe6, 0x2)), this['Uv']?.[DV(0x173)](0x1f5, 0x1ec), this['UX']?.[DV(0x2bd)]()), this['mm'] && (this['mm'] = !0x1, this['UU']?.[DV(0x2bd)](), this['mE']?.['Zj'](0x0, 0x0), this['U7']?.['lj'](0x39, 0x21, DV(0x133), 0xffffff, !0x0), 0x0 === this['fu'] && this['U7']?.['lj'](0x39, 0x2e, 'On', 0xff00, !0x0), 0x1 === this['fu'] && this['U7']?.['lj'](0x39, 0x2e, DV(0x296), 0xffff00, !0x0), 0x2 === this['fu'] && this['U7']?.['lj'](0x39, 0x2e, DV(0x1d8), 0xff0000, !0x0), 0x3 === this['fu'] && this['U7']?.['lj'](0x39, 0x2e, DV(0x17c), 0xffff, !0x0), this['U7']?.['lj'](0xba, 0x21, DV(0x1c9), 0xffffff, !0x0), 0x0 === this['fg'] && this['U7']?.['lj'](0xba, 0x2e, 'On', 0xff00, !0x0), 0x1 === this['fg'] && this['U7']?.['lj'](0xba, 0x2e, DV(0x296), 0xffff00, !0x0), 0x2 === this['fg'] && this['U7']?.['lj'](0xba, 0x2e, DV(0x1d8), 0xff0000, !0x0), this['U7']?.['lj'](0x146, 0x21, 'Trade/duel', 0xffffff, !0x0), 0x0 === this['fM'] && this['U7']?.['lj'](0x146, 0x2e, 'On', 0xff00, !0x0), 0x1 === this['fM'] && this['U7']?.['lj'](0x146, 0x2e, 'Friends', 0xffff00, !0x0), 0x2 === this['fM'] && this['U7']?.['lj'](0x146, 0x2e, DV(0x1d8), 0xff0000, !0x0), this['U7']?.['lj'](0x1ce, 0x26, DV(0x1c4), 0xffffff, !0x0), this['UU']?.[DV(0x173)](0x0, 0x1d7), this['UX']?.['bind']()), this['v6'] = 0x0;
    } ['sY']() {
        const DW = uh;
        if (0x2 === this['Nj']) {
            for (let bz = this['UK'][DW(0x32b)](); bz; bz = this['UK'][DW(0x302)]()) bz['h1'] > 0x0 && bz['h1']--, 0x0 != bz['h1'] ? (bz['h9'] > 0x0 && bz['h9']--, 0x0 === bz['h9'] && bz['x'] >= 0x1 && bz['z'] >= 0x1 && bz['x'] <= 0x66 && bz['z'] <= 0x66 && (this['QC'](bz['h6'], bz['x'], bz['z'], bz['h4'], bz['h3'], bz['h5'], bz['QX']), bz['h9'] = -0x1, (bz['h2'] === bz['h4'] && -0x1 === bz['h2'] || bz['h2'] === bz['h4'] && bz['h7'] === bz['h3'] && bz['h8'] === bz['h5']) && bz['p']())) : (this['QC'](bz['h6'], bz['x'], bz['z'], bz['h2'], bz['h7'], bz['h8'], bz['QX']), bz['p']());
            xx['v4']++, xx['v4'] > 0x55 && (xx['v4'] = 0x0, this['NB']['or'](0x49));
        }
    } ['eN']() {
        XS['RL']?.['dr'](), XS['Re']?.['dr'](), xP['PO']?.['dr'](), xc['PO']?.['dr'](), xc['p3']?.['dr'](), xr['PO']?.['dr'](), xd['PO']?.['dr']();
    } ['sZ']() {
        const DS = uh;
        if (this['v5']++, this['ep'](), this['eH'](), this['ec'](), this['eP'](), this['el'](), !this['vP']) {
            let bV = this['vG'];
            (this['NM'] / 0x100 | 0x0) > bV && (bV = this['NM'] / 0x100 | 0x0), this['vS'][0x4] && this['n1'][0x4] + 0x80 > bV && (bV = this['n1'][0x4] + 0x80);
            let xG = this['vO'] + this['vm'] & 0x7ff;
            if (this['UC'] && this['sE'](this['n9'], this['e0'](this['v1'], this['UC']['x'], this['UC']['z']) - 0x32, this['nN'], xG, bV, 0x3 * bV + 0x258), xx['NT']++, xx['NT'] > 0x70a) {
                xx['NT'] = 0x0, this['NB']['or'](0x1d), this['NB']['k'](0x0);
                let xg = this['NB']['S'];
                this['NB']['o8'](0x740f), this['NB']['k'](0x46), this['NB']['k'](0x100 * Math[DS(0x291)]() | 0x0), this['NB']['k'](0xf2), this['NB']['k'](0xba), this['NB']['k'](0x27), this['NB']['k'](0x3d), 0x2 * Math[DS(0x291)]() | 0x0 || this['NB']['k'](0xd), 0x2 * Math['random']() | 0x0 || this['NB']['o8'](0xe200), this['NB']['o8'](0x10000 * Math[DS(0x291)]() | 0x0), this['NB']['V'](this['NB']['S'] - xg);
            }
        }
        let bz;
        bz = this['vP'] ? this['Li']() : this['e1']();
        let bj, ba = this['nw'],
            bq = this['n2'],
            bT = this['no'],
            bI = this['Ns'],
            bJ = this['vZ'];
        for (let xu = 0x0; xu < 0x5; xu++) this['vS'][xu] && (bj = Math[DS(0x291)]() * (0x2 * this['vy'][xu] + 0x1) - this['vy'][xu] + Math['sin'](this['vi'][xu] * (this['n3'][xu] / 0x64)) * this['n1'][xu] | 0x0, 0x0 === xu && (this['nw'] += bj), 0x1 === xu && (this['n2'] += bj), 0x2 === xu && (this['no'] += bj), 0x3 === xu && (this['vZ'] = this['vZ'] + bj & 0x7ff), 0x4 === xu && (this['Ns'] += bj, this['Ns'] < 0x80 && (this['Ns'] = 0x80), this['Ns'] > 0x17f && (this['Ns'] = 0x17f)));
        bj = XO['Y1'], XW['wH'] = !0x0, XW['wP'] = 0x0, XW['YG'] = this['YG'] - 0x8, XW['YA'] = this['YA'] - 0xb, Xu[DS(0x2aa)](), this['Nq']?.['H5'](this['nw'], this['n2'], this['no'], bz, this['vZ'], this['Ns'], this['nQ']), this['Nq']?.['rc'](), this['s7'](), this['s5'](), this['sd'](bj), this['ei'](), this['UX']?.[DS(0x173)](0x8, 0xb), this['nw'] = ba, this['n2'] = bq, this['no'] = bT, this['Ns'] = bI, this['vZ'] = bJ;
    } ['s8'](bz, bj) {
        this['s6'](bz['x'], bj, bz['z']);
    }
    async ['sw']() {
        const Di = uh;
        await this['sR'](), this['vV']?.[Di(0x2bd)](), this['nv']?.['Zj'](0x0, 0x0);
        if (0x0 === this['vx']) {
            let bz = 0xb4,
                bj = 0x50;
            this['U8']?.['lj'](bz, bj, Di(0x275), 0xffff00, !0x0), bz = 0x64, bj = 0x78, this['nf']?.['Zj'](bz - 0x49, bj - 0x14), this['U8']?.['lj'](bz, bj + 0x5, Di(0x2f8), 0xffffff, !0x0), bz = 0x104, this['nf']?.['Zj'](bz - 0x49, bj - 0x14), this['U8']?.['lj'](bz, bj + 0x5, Di(0x140), 0xffffff, !0x0);
        } else {
            if (0x2 === this['vx']) {
                let ba = 0x64,
                    bq = 0x3c;
                this['nB'][Di(0x2ea)] > 0x0 ? (this['U8']?.['lj'](0xb4, bq - 0xf, this['nB'], 0xffff00, !0x0), this['U8']?.['lj'](0xb4, bq, this['nb'], 0xffff00, !0x0), bq += 0x1e) : (this['U8']?.['lj'](0xb4, bq - 0x7, this['nb'], 0xffff00, !0x0), bq += 0x1e), this['U8']?.['lC'](0x5a, bq, Di(0x132) + this['nG'] + (0x0 === this['vD'] && this['nQ'] % 0x28 < 0x14 ? Di(0x21a) : ''), 0xffffff, !0x0), bq += 0xf, this['U8']?.['lC'](0x5c, bq, Di(0x2f2) + xZ['Hj'](this['nu']) + (0x1 === this['vD'] && this['nQ'] % 0x28 < 0x14 ? '@yel@|' : ''), 0xffffff, !0x0), bq = 0x96, this['nf']?.['Zj'](ba - 0x49, bq - 0x14), this['U8']?.['lj'](ba, bq + 0x5, Di(0x14b), 0xffffff, !0x0), ba = 0x104, this['nf']?.['Zj'](ba - 0x49, bq - 0x14), this['U8']?.['lj'](ba, bq + 0x5, Di(0x1cc), 0xffffff, !0x0);
            } else {
                if (0x3 === this['vx']) {
                    this['U8']?.['lj'](0xb4, 0x28, Di(0x239), 0xffff00, !0x0);
                    let bT = 0xb4,
                        bI = 0x41;
                    this['U8']?.['lj'](0xb4, bI, Di(0x28f), 0xffffff, !0x0), bI += 0xf, this['U8']?.['lj'](0xb4, bI, Di(0x280), 0xffffff, !0x0), bI += 0xf, this['U8']?.['lj'](0xb4, bI, 'and\x20choose\x20the\x20red\x20\x27create\x20account\x27', 0xffffff, !0x0), bI += 0xf, this['U8']?.['lj'](0xb4, bI, Di(0x2ee), 0xffffff, !0x0), bI = 0x96, this['nf']?.['Zj'](bT - 0x49, bI - 0x14), this['U8']?.['lj'](bT, bI + 0x5, Di(0x1cc), 0xffffff, !0x0);
                } else {
                    if (0x1 === this['vx']) {
                        let bJ = 0x64,
                            bV = 0x3c;
                        this['nB'][Di(0x2ea)] > 0x0 ? (this['U8']?.['lj'](0xb4, bV - 0xf, this['nB'], 0xffff00, !0x0), this['U8']?.['lj'](0xb4, bV, this['nb'], 0xffff00, !0x0), bV += 0x1e) : (this['U8']?.['lj'](0xb4, bV - 0x7, this['nb'], 0xffff00, !0x0), bV += 0x1e), bV += 0xa, this['U8']?.['lC'](0x5c, bV, Di(0x256) + this['ni'] + (this['nQ'] % 0x28 < 0x14 ? '@yel@|' : ''), 0xffffff, !0x0), bV = 0x96, this['nf']?.['Zj'](bJ - 0x49, bV - 0x14), this['U8']?.['lj'](bJ, bV + 0x5, Di(0x14b), 0xffffff, !0x0), bJ = 0x104, this['nf']?.['Zj'](bJ - 0x49, bV - 0x14), this['U8']?.['lj'](bJ, bV + 0x5, Di(0x1cc), 0xffffff, !0x0);
                    }
                }
            }
        }
        this['vV']?.['draw'](0xd6, 0xba), this['vW'] && (this['vW'] = !0x1, this['vT']?.[Di(0x173)](0x80, 0x0), this['vJ']?.[Di(0x173)](0xd6, 0x182), this['n6']?.[Di(0x173)](0x0, 0x109), this['nZ']?.['draw'](0x23e, 0x109), this['nd']?.[Di(0x173)](0x80, 0xba), this['nc']?.[Di(0x173)](0x23e, 0xba));
    } ['sc']() {
        const C0 = uh;
        if (!(this['n8'] && this['NS'] && this['vQ'] && this['Na'])) return -0x3e8;
        for (let bz = 0x0; bz < this['NS'][C0(0x2ea)]; bz++) {
            if (!0x1 === this['NS'][bz]) return -0x1;
            if (!0x1 === this['Na'][bz]) return -0x2;
        }
        return this['NW'] ? -0x3 : (this['Nj'] = 0x2, xQ['Hp'] = this['v1'], this['eK'](), 0x0);
    } ['sr']() {
        const C1 = uh;
        xx['ZT'] && 0x2 === this['Nj'] && xQ['Hp'] !== this['v1'] && (this['UX']?.[C1(0x2bd)](), this['U7']?.['lV'](0x101, 0x97, C1(0x27f), 0x0), this['U7']?.['lV'](0x100, 0x96, C1(0x27f), 0xffffff), this['UX']?.['draw'](0x8, 0xb), this['Nj'] = 0x1), 0x1 === this['Nj'] && this['sc'](), 0x2 === this['Nj'] && this['v1'] !== this['NA'] && (this['NA'] = this['v1'], this['eq'](this['v1']));
    } ['sH']() {
        const C2 = uh;
        if (this['vd']) {
            this['nv'] = XF['Zz'](this['vd'], C2(0x288)), this['nf'] = XF['Zz'](this['vd'], C2(0x26d));
            for (let bz = 0x0; bz < 0xc; bz++) this['UR'][bz] = XF['Zz'](this['vd'], C2(0x162), bz);
            this['nT'] = new xR(0x80, 0x109), this['nF'] = new xR(0x80, 0x109), this['n4'] && k6(this['n4']['Zw'], 0x0, this['nT']['Zw'], 0x0, 0x8480), this['n7'] && k6(this['n7']['Zw'], 0x0, this['nF']['Zw'], 0x0, 0x8480), this['nz'] = new Int32Array(0x100);
            for (let bj = 0x0; bj < 0x40; bj++) this['nz'][bj] = 0x40000 * bj;
            for (let ba = 0x0; ba < 0x40; ba++) this['nz'][ba + 0x40] = 0x400 * ba + 0xff0000;
            for (let bq = 0x0; bq < 0x40; bq++) this['nz'][bq + 0x80] = 0x4 * bq + 0xffff00;
            for (let bT = 0x0; bT < 0x40; bT++) this['nz'][bT + 0xc0] = 0xffffff;
            this['nj'] = new Int32Array(0x100);
            for (let bI = 0x0; bI < 0x40; bI++) this['nj'][bI] = 0x400 * bI;
            for (let bJ = 0x0; bJ < 0x40; bJ++) this['nj'][bJ + 0x40] = 0x4 * bJ + 0xff00;
            for (let bV = 0x0; bV < 0x40; bV++) this['nj'][bV + 0x80] = 0x40000 * bV + 0xffff;
            for (let xG = 0x0; xG < 0x40; xG++) this['nj'][xG + 0xc0] = 0xffffff;
            this['U5'] = new Int32Array(0x100);
            for (let xg = 0x0; xg < 0x40; xg++) this['U5'][xg] = 0x4 * xg;
            for (let xu = 0x0; xu < 0x40; xu++) this['U5'][xu + 0x40] = 0x40000 * xu + 0xff;
            for (let xM = 0x0; xM < 0x40; xM++) this['U5'][xM + 0x80] = 0x400 * xM + 0xff00ff;
            for (let xF = 0x0; xF < 0x40; xF++) this['U5'][xF + 0xc0] = 0xffffff;
            this['nD'] = new Int32Array(0x100), this['nX'] = new Int32Array(0x8000), this['ng'] = new Int32Array(0x8000), this['sP'](null), this['nO'] = new Int32Array(0x8000), this['ny'] = new Int32Array(0x8000), this['Eu'](0xa, 'Connecting\x20to\x20fileserver')[C2(0x16e)](() => {
                const C3 = C2;
                this['Ud'] || (this['Ud'] = !0x0, this['UY'] = setInterval(this['sp'][C3(0x2bd)](this), 0x23));
            });
        }
    }
    async ['eD'](bz, bj, ba) {
        const C4 = uh;
        try {
            ba || (this['nB'] = '', this['nb'] = C4(0x223), await this['sw']()), this['nU'] = new xA(await xA['KK'](window[C4(0x2a4)][C4(0x144)], C4(0x26f) === window['location'][C4(0x32c)])), await this['nU']['Kw'](this['in']['R'], 0x0, 0x8), this['in']['S'] = 0x0, this['Nu'] = this['in']['od']();
            let bq = new Int32Array([Math[C4(0x247)](0x5f5e0ff * Math['random']()), Math['floor'](0x5f5e0ff * Math[C4(0x291)]()), Number(this['Nu'] >> 0x20n), Number(this['Nu'] & BigInt(0xffffffff))]);
            this['NB']['S'] = 0x0, this['NB']['k'](0xa), this['NB']['X'](bq[0x0]), this['NB']['X'](bq[0x1]), this['NB']['X'](bq[0x2]), this['NB']['X'](bq[0x3]), this['NB']['X'](await this['sh']()), this['NB']['oY'](await this['sl']()), this['NB']['oY'](bz), this['NB']['oY'](bj), this['NB']['oY'](this['ni']), this['NB']['Y'](BigInt(C4(0x2b6)), BigInt('65537')), this['NL']['S'] = 0x0, ba ? this['NL']['k'](0x12) : this['NL']['k'](0x10), this['NL']['k'](this['NB']['S'] + 0x24 + 0x2 + 0x1), this['NL']['o8'](0x1), this['NL']['k'](xx['ZT'] ? 0x1 : 0x0);
            for (let bI = 0x0; bI < 0x9; bI++) this['NL']['X'](this['nY'][bI]);
            this['NL']['Z'](this['NB']['R'], this['NB']['S'], 0x0), this['NB']['U'] = new xf(bq);
            for (let bJ = 0x0; bJ < 0x4; bJ++) bq[bJ] += 0x2c24;
            this['NI'] = new xf(bq), this['nU']?.['KR'](this['NL']['R'], this['NL']['S']);
            let bT = await this['nU']['Kt']();
            if (0x1 === bT) return await k5(0x7d0), void await this['eD'](bz, bj, ba);
            if (0x2 === bT || 0x12 === bT) {
                this['Um'] = 0x12 === bT, kU['ZQ'](), this['YO'] = !0x0, this['NB']['S'] = 0x0, this['in']['S'] = 0x0, this['vw'] = -0x1, this['vh'] = -0x1, this['vX'] = -0x1, this['vY'] = -0x1, this['vc'] = 0x0, this['NJ'] = 0x0, this['Ni'] = 0x0, this['v2'] = 0x0, this['fR'] = 0x0, this['fZ'] = 0x0, this['mS'] = !0x1, this['YT'] = Date[C4(0x22b)]();
                for (let bV = 0x0; bV < 0x64; bV++) this['fV'][bV] = null;
                this['Lv'] = 0x0, this['Lf'] = 0x0, this['Nj'] = 0x0, this['mo'] = 0x0, this['vN'] = (0x64 * Math[C4(0x291)]() | 0x0) - 0x32, this['vn'] = (0x6e * Math['random']() | 0x0) - 0x37, this['vm'] = (0x50 * Math['random']() | 0x0) - 0x28, this['vI'] = (0x78 * Math[C4(0x291)]() | 0x0) - 0x3c, this['vp'] = (0x1e * Math[C4(0x291)]() | 0x0) - 0x14, this['vO'] = (0x14 * Math[C4(0x291)]() | 0x0) - 0xa & 0x7ff, this['NA'] = -0x1, this['v0'] = 0x0, this['vE'] = 0x0, this['U0'] = 0x0, this['U3'] = 0x0;
                for (let xG = 0x0; xG < 0x800; xG++) this['nx'][xG] = null, this['nJ'][xG] = null;
                for (let xg = 0x0; xg < 0x2000; xg++) this['nM'][xg] = null;
                this['UC'] = this['nx'][0x7ff] = new xr(), this['nA'][C4(0x2aa)](), this['nS']['clear']();
                for (let xu = 0x0; xu < 0x4; xu++)
                    for (let xM = 0x0; xM < 0x68; xM++)
                        for (let xF = 0x0; xF < 0x68; xF++) this['Up'][xu][xM][xF] = null;
                this['UK'] = new k3(), this['UH'] = 0x0, this['fW'] = -0x1, this['fw'] = -0x1, this['mO'] = -0x1, this['fd'] = -0x1, this['LG'] = !0x1, this['fz'] = 0x3, this['L1'] = !0x1, this['mS'] = !0x1, this['fD'] = !0x1, this['fy'] = null, this['Uf'] = 0x0, this['fa'] = -0x1, this['Ug'] = !0x0, this['LO']();
                for (let xO = 0x0; xO < 0x5; xO++) this['Uq'][xO] = 0x0;
                return xx['v8'] = 0x0, xx['v9'] = 0x0, xx['vo'] = 0x0, xx['vr'] = 0x0, xx['vR'] = 0x0, xx['vF'] = 0x0, xx['vU'] = 0x0, xx['vf'] = 0x0, xx['vz'] = 0x0, void this['La']();
            }
            if (0x3 === bT) return this['nB'] = '', void(this['nb'] = C4(0x222));
            if (0x4 === bT) return this['nB'] = C4(0x1d2), void(this['nb'] = C4(0x1aa));
            if (0x5 === bT) return this['nB'] = C4(0x145), void(this['nb'] = C4(0x294));
            if (0x6 === bT) return this['nB'] = C4(0x21b), void(this['nb'] = C4(0x21c));
            if (0x7 === bT) return this['nB'] = C4(0x1e2), void(this['nb'] = 'Please\x20use\x20a\x20different\x20world.');
            if (0x8 === bT) return this['nB'] = C4(0x313), void(this['nb'] = 'Login\x20server\x20offline.');
            if (0x9 === bT) return this['nB'] = C4(0x238), void(this['nb'] = 'Too\x20many\x20connections\x20from\x20your\x20address.');
            if (0xa === bT) return this['nB'] = C4(0x313), void(this['nb'] = C4(0x2a9));
            if (0xb === bT) return this['nb'] = C4(0x2a0), void(this['nb'] = 'Please\x20try\x20again.');
            if (0xc === bT) return this['nB'] = C4(0x1eb), void(this['nb'] = C4(0x277));
            if (0xd === bT) return this['nB'] = C4(0x31e), void(this['nb'] = C4(0x13f));
            if (0xe === bT) return this['nB'] = C4(0x2e7), void(this['nb'] = C4(0x234));
            if (0xf === bT) return this['YO'] = !0x0, this['NB']['S'] = 0x0, this['in']['S'] = 0x0, this['vw'] = -0x1, this['vh'] = -0x1, this['vX'] = -0x1, this['vY'] = -0x1, this['vc'] = 0x0, this['NJ'] = 0x0, this['Ni'] = 0x0, this['fZ'] = 0x0, void(this['mS'] = !0x1);
            if (0x10 === bT) return this['nB'] = C4(0x310), void(this['nb'] = C4(0x234));
            if (0x11 === bT) return this['nB'] = C4(0x1af), void(this['nb'] = C4(0x2e3));
            if (0x13 === bT) return this['nB'] = 'Additional\x20verification\x20needed.', this['nb'] = 'Enter\x20the\x202FA\x20code\x20from\x20your\x20device.', this['vx'] = 0x1, void(this['vD'] = 0x3);
            if (0x14 === bT) return this['nB'] = C4(0x311), this['nb'] = C4(0x24d), void(this['ni'] = '');
            if (0x15 === bT) {
                for (let xD = await this['nU']['Kt'](); xD >= 0x0; xD--) this['nB'] = C4(0x1e4), this['nb'] = C4(0x139) + xD + C4(0x1e5), await this['sw'](), await k5(0x3e8);
                return void await this['eD'](bz, bj, ba);
            }
        } catch (xC) {
            this['nB'] = '', this['nb'] = C4(0x2f3);
        }
    }
    async ['sK']() {
        const C5 = uh;
        if (0x0 === this['vx']) {
            let bz = (this['Eb'] / 0x2 | 0x0) - 0x50,
                bj = 0x14 + (this['Ek'] / 0x2 | 0x0);
            bj += 0x14, 0x1 === this['Yg'] && this['YC'] >= bz - 0x4b && this['YC'] <= bz + 0x4b && this['Yb'] >= bj - 0x14 && this['Yb'] <= bj + 0x14 && (this['vx'] = 0x3, this['vD'] = 0x0), bz = 0x50 + (this['Eb'] / 0x2 | 0x0), 0x1 === this['Yg'] && this['YC'] >= bz - 0x4b && this['YC'] <= bz + 0x4b && this['Yb'] >= bj - 0x14 && this['Yb'] <= bj + 0x14 && (this['nB'] = '', this['nb'] = C5(0x2fd), this['vx'] = 0x2, this['vD'] = 0x0);
        } else {
            if (0x2 === this['vx'] || 0x1 == this['vx']) {
                let ba = (this['Ek'] / 0x2 | 0x0) - 0x28;
                ba += 0x1e, ba += 0x19, 0x1 === this['Yg'] && this['Yb'] >= ba - 0xf && this['Yb'] < ba && (this['vD'] = 0x1 === this['vx'] ? 0x3 : 0x0), ba += 0xf, 0x1 === this['Yg'] && this['Yb'] >= ba - 0xf && this['Yb'] < ba && (this['vD'] = 0x1 === this['vx'] ? 0x3 : 0x1);
                let bq = (this['Eb'] / 0x2 | 0x0) - 0x50,
                    bT = 0x32 + (this['Ek'] / 0x2 | 0x0);
                for (bT += 0x14, 0x1 === this['Yg'] && this['YC'] >= bq - 0x4b && this['YC'] <= bq + 0x4b && this['Yb'] >= bT - 0x14 && this['Yb'] <= bT + 0x14 && (0x1 === this['vx'] ? 0x6 === this['ni'][C5(0x2ea)] && await this['eD'](this['nG'], this['nu'], !0x1) : await this['eD'](this['nG'], this['nu'], !0x1)), bq = 0x50 + (this['Eb'] / 0x2 | 0x0), 0x1 === this['Yg'] && this['YC'] >= bq - 0x4b && this['YC'] <= bq + 0x4b && this['Yb'] >= bT - 0x14 && this['Yb'] <= bT + 0x14 && (this['vx'] = 0x0, this['nG'] = '', this['nu'] = '', this['ni'] = '');;) {
                    let bI = this['Ex']();
                    if (-0x1 === bI) return;
                    let bJ = !0x1;
                    for (let bV = 0x0; bV < xU['lM'][C5(0x2ea)]; bV++)
                        if (String[C5(0x226)](bI) === xU['lM'][C5(0x18d)](bV)) {
                            bJ = !0x0;
                            break;
                        } 0x0 === this['vD'] ? (0x8 === bI && this['nG'][C5(0x2ea)] > 0x0 && (this['nG'] = this['nG'][C5(0x250)](0x0, this['nG'][C5(0x2ea)] - 0x1)), 0x9 !== bI && 0xa !== bI && 0xd !== bI || (this['vD'] = 0x1), bJ && (this['nG'] = this['nG'] + String[C5(0x226)](bI)), this['nG'][C5(0x2ea)] > 0xc && (this['nG'] = this['nG']['substring'](0x0, 0xc))) : 0x1 === this['vD'] ? (0x8 === bI && this['nu'][C5(0x2ea)] > 0x0 && (this['nu'] = this['nu']['substring'](0x0, this['nu'][C5(0x2ea)] - 0x1)), 0x9 !== bI && 0xa !== bI && 0xd !== bI || (this['vD'] = 0x0), bJ && (this['nu'] = this['nu'] + String[C5(0x226)](bI)), this['nu'][C5(0x2ea)] > 0x14 && (this['nu'] = this['nu'][C5(0x250)](0x0, 0x14))) : 0x3 === this['vD'] && (0x8 === bI && this['ni'][C5(0x2ea)] > 0x0 && (this['ni'] = this['ni']['substring'](0x0, this['ni']['length'] - 0x1)), bJ && (this['ni'] = this['ni'] + String[C5(0x226)](bI)), this['ni'][C5(0x2ea)] > 0x6 && (this['ni'] = this['ni'][C5(0x250)](0x0, 0x6)));
                }
            } else {
                if (0x3 === this['vx']) {
                    let xG = this['Eb'] / 0x2 | 0x0,
                        xg = 0x32 + (this['Ek'] / 0x2 | 0x0);
                    xg += 0x14, 0x1 === this['Yg'] && this['YC'] >= xG - 0x4b && this['YC'] <= xG + 0x4b && this['Yb'] >= xg - 0x14 && this['Yb'] <= xg + 0x14 && (this['vx'] = 0x0);
                }
            }
        }
    } ['sP'](bz) {
        const C6 = uh;
        if (!this['nX'] || !this['ng']) return;
        this['nX']['fill'](0x0);
        for (let bj = 0x0; bj < 0x1388; bj++) {
            let ba = 0x80 * Math[C6(0x291)]() * 0x100 | 0x0;
            this['nX'][ba] = 0x100 * Math[C6(0x291)]() | 0x0;
        }
        for (let bq = 0x0; bq < 0x14; bq++) {
            for (let bI = 0x1; bI < 0xff; bI++)
                for (let bJ = 0x1; bJ < 0x7f; bJ++) {
                    let bV = bJ + (bI << 0x7);
                    this['ng'][bV] = (this['nX'][bV - 0x1] + this['nX'][bV + 0x1] + this['nX'][bV - 0x80] + this['nX'][bV + 0x80]) / 0x4 | 0x0;
                }
            let bT = this['nX'];
            this['nX'] = this['ng'], this['ng'] = bT;
        }
        if (bz) {
            let xG = 0x0;
            for (let xg = 0x0; xg < bz['Zc']; xg++)
                for (let xu = 0x0; xu < bz['ZR']; xu++)
                    if (0x0 !== bz['Zw'][xG++]) {
                        let xM = xu + bz['ZX'] + 0x10 + (xg + bz['Zg'] + 0x10 << 0x7);
                        this['nX'][xM] = 0x0;
                    }
        }
    }
    async ['sN']() {
        const C7 = uh;
        if (null !== this['nx']) {
            this['Ni'] > 0x1 && this['Ni']--, this['v2'] > 0x0 && this['v2']--;
            for (let bz = 0x0; bz < 0x64 && await this['es'](); bz++);
            if (this['YO']) {
                for (let ba = 0x0; ba < this['mo']; ba++)
                    if (this['mB'][ba] <= 0x0) {
                        try {
                            let bq = kc['Q5'](this['mk'][ba], this['mQ'][ba]);
                            if (!bq) throw new Error();
                            Date[C7(0x22b)]() + (bq['S'] / 0x16 | 0x0) > this['mK'] + (this['mR'] / 0x16 | 0x0) && (this['mR'] = bq['S'], this['mK'] = Date[C7(0x22b)](), this['UV'] = this['mk'][ba], this['md'] = this['mQ'][ba], await kP(bq['R']['slice'](0x0, bq['S'])));
                        } catch (bT) {}
                        this['mo']--;
                        for (let bI = ba; bI < this['mo']; bI++) this['mk'][bI] = this['mk'][bI + 0x1], this['mQ'][bI] = this['mQ'][bI + 0x1], this['mB'][bI] = this['mB'][bI + 0x1];
                        ba--;
                    } else this['mB'][ba]--;
                this['m0'] > 0x0 && (this['m0'] -= 0x14, this['m0'] < 0x0 && (this['m0'] = 0x0), 0x0 === this['m0'] && this['mx'] && !xx['ZT'] && this['me'] && await this['ed'](this['me'], this['mg'], this['mM'], !0x1));
                let bj = kU[C7(0x237)]();
                if (bj && (this['NB']['or'](0x51), this['NB']['o8'](bj['S']), this['NB']['Z'](bj['R'], bj['S'], 0x0), bj['oE']()), this['sr'](), this['sY'](), this['NJ']++, this['NJ'] > 0xfa && await this['eO'](), this['eh'](), this['er'](), this['e2'](), (0x1 === this['Ys'][0x1] || 0x1 === this['Ys'][0x2] || 0x1 === this['Ys'][0x3] || 0x1 === this['Ys'][0x4]) && this['vb']++ > 0x5 && (this['vb'] = 0x0, this['NB']['or'](0x86), this['NB']['o8'](this['vG']), this['NB']['o8'](this['vO']), this['NB']['k'](this['vI']), this['NB']['k'](this['vp'])), this['v6']++, 0x0 !== this['mq'] && (this['mC'] += 0x14, this['mC'] >= 0x190 && (this['mq'] = 0x0)), 0x0 !== this['Lk'] && (this['Lx']++, this['Lx'] >= 0xf && (0x2 === this['Lk'] && (this['fN'] = !0x0), 0x3 === this['Lk'] && (this['fU'] = !0x0), this['Lk'] = 0x0)), 0x0 !== this['LZ'] && (this['LP']++, (this['YG'] > this['LR'] + 0x5 || this['YG'] < this['LR'] - 0x5 || this['YA'] > this['Lw'] + 0x5 || this['YA'] < this['Lw'] - 0x5) && (this['LH'] = !0x0), 0x0 === this['Ye'])) {
                    if (0x2 === this['LZ'] && (this['fN'] = !0x0), 0x3 === this['LZ'] && (this['fU'] = !0x0), this['LZ'] = 0x0, this['LH'] && this['LP'] >= 0x5) {
                        if (this['LE'] = -0x1, this['eu'](), this['LE'] === this['L9'] && this['Ln'] !== this['Ld']) {
                            let bJ = xl['EI'][this['L9']];
                            if (bJ['he']) {
                                let bV = bJ['he'][this['Ln']];
                                bJ['he'][this['Ln']] = bJ['he'][this['Ld']], bJ['he'][this['Ld']] = bV;
                            }
                            if (bJ['hs']) {
                                let xG = bJ['hs'][this['Ln']];
                                bJ['hs'][this['Ln']] = bJ['hs'][this['Ld']], bJ['hs'][this['Ld']] = xG;
                            }
                            this['NB']['or'](0x2e), this['NB']['o8'](this['L9']), this['NB']['o8'](this['Ld']), this['NB']['o8'](this['Ln']);
                        }
                    } else(0x1 === this['Lp'] || this['e9'](this['fZ'] - 0x1)) && this['fZ'] > 0x2 ? this['ey']() : this['fZ'] > 0x0 && await this['eX'](this['fZ'] - 0x1);
                    this['Lx'] = 0xa, this['Yg'] = 0x0;
                }
                if (xx['NV']++, xx['NV'] > 0x7f && (xx['NV'] = 0x0, this['NB']['or'](0x34), this['NB']['oK'](0x4c2b2c)), -0x1 !== x9['rY'] && this['UC']) {
                    let xg = x9['rY'],
                        xu = x9['rQ'],
                        xM = this['e8'](this['UC']['P2'][0x0], this['UC']['P5'][0x0], xg, xu, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, !0x0);
                    x9['rY'] = -0x1, xM && (this['mT'] = this['YC'], this['mI'] = this['Yb'], this['mq'] = 0x1, this['mC'] = 0x0);
                }
                0x1 === this['Yg'] && this['fy'] && (this['fy'] = null, this['fU'] = !0x0, this['Yg'] = 0x0), await this['ej'](), this['e7'](), this['eC'](), this['LT'](), (0x1 === this['Ye'] || 0x1 === this['Yg']) && this['mX']++, 0x2 === this['Nj'] && this['sv'](), 0x2 === this['Nj'] && this['vP'] && this['sn']();
                for (let xF = 0x0; xF < 0x5; xF++) this['vi'][xF]++;
                if (await this['LI'](), Date['now']() - this['YT'] > 0x15f90 && (this['v2'] = 0xfa, this['YT'] = Date['now']() - 0x2710, this['NB']['or'](0x58)), this['vK']++, this['vK'] > 0x1f4) {
                    this['vK'] = 0x0;
                    let xO = 0x8 * Math[C7(0x291)]() | 0x0;
                    0x1 & ~xO || (this['vN'] += this['vM']), 0x2 & ~xO || (this['vn'] += this['vL']), 0x4 & ~xO || (this['vm'] += this['vu']);
                }
                if (this['vN'] < -0x32 && (this['vM'] = 0x2), this['vN'] > 0x32 && (this['vM'] = -0x2), this['vn'] < -0x37 && (this['vL'] = 0x2), this['vn'] > 0x37 && (this['vL'] = -0x2), this['vm'] < -0x28 && (this['vu'] = 0x1), this['vm'] > 0x28 && (this['vu'] = -0x1), this['v3']++, this['v3'] > 0x1f4) {
                    this['v3'] = 0x0;
                    let xD = 0x8 * Math[C7(0x291)]() | 0x0;
                    0x1 & ~xD || (this['vI'] += this['vB']), 0x2 & ~xD || (this['vp'] += this['vH']);
                }
                this['vI'] < -0x3c && (this['vB'] = 0x2), this['vI'] > 0x3c && (this['vB'] = -0x2), this['vp'] < -0x14 && (this['vH'] = 0x1), this['vp'] > 0xa && (this['vH'] = -0x1), xx['NC']++, xx['NC'] > 0x6e && (xx['NC'] = 0x0, this['NB']['or'](0x3e), this['NB']['X'](0x0)), this['Uo']++, this['Uo'] > 0x32 && this['NB']['or'](0x9a);
                try {
                    this['nU'] && this['NB']['S'] > 0x0 && (this['nU']['KR'](this['NB']['R'], this['NB']['S']), this['NB']['S'] = 0x0, this['Uo'] = 0x0);
                } catch (xC) {
                    await this['eO']();
                }
            }
        }
    } ['Em']() {
        return this['mO'];
    } ['sU'](bz) {
        if (!bz['hK']) return !0x1;
        for (let bj = 0x0; bj < bz['hK']['length']; bj++) {
            let ba = this['sm'](bz, bj);
            if (!bz['hN']) return !0x1;
            let bq = bz['hN'][bj];
            if (0x2 === bz['hK'][bj]) {
                if (ba >= bq) return !0x1;
            } else {
                if (0x3 === bz['hK'][bj]) {
                    if (ba <= bq) return !0x1;
                } else {
                    if (0x4 === bz['hK'][bj]) {
                        if (ba === bq) return !0x1;
                    } else {
                        if (ba !== bq) return !0x1;
                    }
                }
            }
        }
        return !0x0;
    }
    async ['Yu']() {
        this['vC'] || this['ve'] || this['vq'] || (this['nQ']++, this['YO'] ? await this['sN']() : await this['sK']());
    }
    async ['ed'](bz, bj, ba, bq) {
        const C8 = uh;
        try {
            let bT = await this['db']?.['lW'](bz + C8(0x245));
            if (bT && 0xbc614e !== bj && k8['oN'](bT) !== bj && (bT = void 0x0), !bT || !bT[C8(0x2ea)]) try {
                bT = await k7('/' + bz + '_' + bj + '.mid'), ba !== bT[C8(0x2ea)] && (bT = bT[C8(0x297)](0x0, ba));
            } catch (bI) {}
            if (!bT) return;
            try {
                await this['db']?.['lS'](bz + C8(0x245), bT);
                let bJ = kh[C8(0x26a)](bT, -0x1, !0x1, !0x0);
                kl(bJ, this['my'], bq);
            } catch (bV) {}
        } catch (xG) {}
    }
    async ['sf']() {
        const C9 = uh;
        if (!this['vd']) return;
        let bz = await xR['p0'](this['vd'], C9(0x264));
        this['n4']?.[C9(0x2bd)](), bz['PV'](0x0, 0x0), this['n7']?.[C9(0x2bd)](), bz['PV'](-0x295, 0x0), this['vT']?.[C9(0x2bd)](), bz['PV'](-0x80, 0x0), this['vJ']?.[C9(0x2bd)](), bz['PV'](-0xd6, -0x182), this['vV']?.[C9(0x2bd)](), bz['PV'](-0xd6, -0xba), this['n6']?.[C9(0x2bd)](), bz['PV'](0x0, -0x109), this['nZ']?.[C9(0x2bd)](), bz['PV'](-0x80, -0xba), this['nd']?.[C9(0x2bd)](), bz['PV'](-0x80, -0xba), this['nc']?.[C9(0x2bd)](), bz['PV'](-0x23e, -0xba), bz['Zy'](), this['n4']?.['bind'](), bz['PV'](0x18a, 0x0), this['n7']?.[C9(0x2bd)](), bz['PV'](-0x10b, 0x0), this['vT']?.[C9(0x2bd)](), bz['PV'](0x10a, 0x0), this['vJ']?.[C9(0x2bd)](), bz['PV'](0xb4, -0x182), this['vV']?.[C9(0x2bd)](), bz['PV'](0xb4, -0xba), this['n6']?.[C9(0x2bd)](), bz['PV'](0x18a, -0x109), this['nZ']?.['bind'](), bz['PV'](-0xb4, -0x109), this['nd']?.[C9(0x2bd)](), bz['PV'](0xd4, -0xba), this['nc']?.[C9(0x2bd)](), bz['PV'](-0xb4, -0xba);
        let bj = xR['Zz'](this['vd'], C9(0x31d));
        this['vT']?.[C9(0x2bd)](), bj['Zj']((this['Eb'] / 0x2 | 0x0) - (bj['ZR'] / 0x2 | 0x0) - 0x80, 0x12);
    }
    async ['YM']() {
        this['vW'] = !0x0;
    }
    async ['YX']() {
        const Co = uh;
        if (this['Ep'] && xx['ZT'] && this['EC'](0x1e), this['vA']) this['vC'] = !0x0;
        else {
            this['vA'] = !0x0;
            try {
                await this['Eu'](0xa, 'Connecting\x20to\x20fileserver');
                try {
                    this['db'] = new xm(await xm[Co(0x26b)]());
                } catch (xV) {
                    this['db'] = null;
                }
                let bz = new k8(await k7('/crc'));
                for (let xW = 0x0; xW < 0x9; xW++) this['nY'][xW] = bz['op']();
                xx['ZT'] || await this['ed'](Co(0x1b0), 0xbc614e, 0x9c40, !0x1);
                let bj = await this['sL'](Co(0x264), Co(0x22e), this['nY'][0x1], 0xa);
                this['vd'] = bj, this['nV'] = xU['Zz'](bj, Co(0x324)), this['U7'] = xU['Zz'](bj, Co(0x323)), this['U8'] = xU['Zz'](bj, Co(0x218)), this['Uc'] = xU['Zz'](bj, 'q8'), await this['sf'](), this['sH']();
                let ba = await this['sL'](Co(0x2f1), 'config', this['nY'][0x2], 0xf),
                    bq = await this['sL'](Co(0x192), Co(0x192), this['nY'][0x3], 0x14),
                    bT = await this['sL'](Co(0x32a), Co(0x18e), this['nY'][0x4], 0x1e),
                    bI = await this['sL'](Co(0x1a4), Co(0x213), this['nY'][0x5], 0x28),
                    bJ = await this['sL'](Co(0x28a), 'textures', this['nY'][0x6], 0x3c),
                    bV = await this['sL'](Co(0x244), Co(0x24b), this['nY'][0x7], 0x41),
                    xG = await this['sL'](Co(0x266), Co(0x295), this['nY'][0x8], 0x46);
                this['He'] = new kw(0x4, 0x68, 0x68), this['Hf'] = new kZ(0x4, 0x69, 0x69), this['Hf'] && (this['Nq'] = new x9(this['Hf'], 0x68, 0x4, 0x68));
                for (let xS = 0x0; xS < 0x4; xS++) this['ND'][xS] = new kH();
                this['mv'] = new xR(0x200, 0x200), await this['Eu'](0x4b, Co(0x1ee)), this['m5'] = XF['Zz'](bT, Co(0x22a), 0x0), this['m2'] = XF['Zz'](bT, Co(0x209), 0x0), this['mZ'] = XF['Zz'](bT, Co(0x189), 0x0), this['mE'] = XF['Zz'](bT, 'backbase1', 0x0), this['mr'] = XF['Zz'](bT, Co(0x27b), 0x0), this['mH'] = XF['Zz'](bT, 'backhmid1', 0x0);
                for (let xi = 0x0; xi < 0xd; xi++) this['ml'][xi] = XF['Zz'](bT, Co(0x2a2), xi);
                this['mN'] = xR['Zz'](bT, 'compass', 0x0);
                try {
                    for (let G0 = 0x0; G0 < 0x32; G0++) 0x16 !== G0 && (this['mn'][G0] = XF['Zz'](bT, Co(0x2ff), G0));
                } catch (G1) {}
                try {
                    for (let G2 = 0x0; G2 < 0x32; G2++) this['mf'][G2] = xR['Zz'](bT, Co(0x2ed), G2);
                } catch (G3) {}
                try {
                    for (let G4 = 0x0; G4 < 0x14; G4++) this['mu'][G4] = xR['Zz'](bT, Co(0x281), G4);
                } catch (G5) {}
                try {
                    for (let G6 = 0x0; G6 < 0x14; G6++) this['mb'][G6] = xR['Zz'](bT, Co(0x23f), G6);
                } catch (G7) {}
                this['mA'] = xR['Zz'](bT, Co(0x217), 0x0);
                for (let G8 = 0x0; G8 < 0x8; G8++) this['mL'][G8] = xR['Zz'](bT, Co(0x21e), G8);
                this['mV'] = xR['Zz'](bT, Co(0x2cc), 0x0), this['f0'] = xR['Zz'](bT, Co(0x2cc), 0x1), this['f4'] = xR['Zz'](bT, 'mapdots', 0x2), this['f1'] = xR['Zz'](bT, 'mapdots', 0x3), this['f6'] = XF['Zz'](bT, Co(0x29a), 0x0), this['mW'] = XF['Zz'](bT, 'scrollbar', 0x1), this['f2'] = XF['Zz'](bT, Co(0x2e2), 0x0), this['mF'] = XF['Zz'](bT, Co(0x15e), 0x0), this['f9'] = XF['Zz'](bT, Co(0x1a5), 0x0), this['fE'] = XF['Zz'](bT, 'redstone1', 0x0), this['fE']?.['Zy'](), this['fv'] = XF['Zz'](bT, Co(0x15e), 0x0), this['fv']?.['Zy'](), this['fc'] = XF['Zz'](bT, Co(0x2e2), 0x0), this['fc']?.['Za'](), this['fH'] = XF['Zz'](bT, Co(0x15e), 0x0), this['fH']?.['Za'](), this['fl'] = XF['Zz'](bT, Co(0x1a5), 0x0), this['fl']?.['Za'](), this['fo'] = XF['Zz'](bT, Co(0x2e2), 0x0), this['fo']?.['Zy'](), this['fo']?.['Za'](), this['fh'] = XF['Zz'](bT, Co(0x15e), 0x0), this['fh']?.['Zy'](), this['fh']?.['Za']();
                let xg = xR['Zz'](bT, Co(0x329), 0x0);
                this['UJ'] = new XM(xg['ZR'], xg['Zc']), xg['PV'](0x0, 0x0);
                let xu = xR['Zz'](bT, Co(0x316), 0x0);
                this['m3'] = new XM(xu['ZR'], xu['Zc']), xu['PV'](0x0, 0x0);
                let xM = xR['Zz'](bT, Co(0x19b), 0x0);
                this['m6'] = new XM(xM['ZR'], xM['Zc']), xM['PV'](0x0, 0x0);
                let xF = xR['Zz'](bT, Co(0x150), 0x0);
                this['m7'] = new XM(xF['ZR'], xF['Zc']), xF['PV'](0x0, 0x0);
                let xO = xR['Zz'](bT, 'backtop1', 0x0);
                this['m4'] = new XM(xO['ZR'], xO['Zc']), xO['PV'](0x0, 0x0);
                let xD = xR['Zz'](bT, 'backtop2', 0x0);
                this['mY'] = new XM(xD['ZR'], xD['Zc']), xD['PV'](0x0, 0x0);
                let xC = xR['Zz'](bT, Co(0x15f), 0x0);
                this['mp'] = new XM(xC['ZR'], xC['Zc']), xC['PV'](0x0, 0x0);
                let xy = xR['Zz'](bT, Co(0x171), 0x0);
                this['m9'] = new XM(xy['ZR'], xy['Zc']), xy['PV'](0x0, 0x0);
                let xz = xR['Zz'](bT, Co(0x20f), 0x0);
                this['mh'] = new XM(xz['ZR'], xz['Zc']), xz['PV'](0x0, 0x0);
                let xj = xR['Zz'](bT, Co(0x235), 0x0);
                this['Uy'] = new XM(xj['ZR'], xj['Zc']), xj['PV'](0x0, 0x0);
                let xa = (0x15 * Math[Co(0x291)]() | 0x0) - 0xa,
                    xq = (0x15 * Math[Co(0x291)]() | 0x0) - 0xa,
                    xT = (0x15 * Math[Co(0x291)]() | 0x0) - 0xa,
                    xI = (0x29 * Math[Co(0x291)]() | 0x0) - 0x14;
                for (let G9 = 0x0; G9 < 0x32; G9++) this['mf'][G9] && this['mf'][G9]?.['ZC'](xa + xI, xq + xI, xT + xI), this['mn'][G9] && this['mn'][G9]?.['ZC'](xa + xI, xq + xI, xT + xI);
                await this['Eu'](0x50, Co(0x30b)), XO['Yl'](bJ), XO['Yp'](0.8), XO['YE'](0x14), await this['Eu'](0x53, Co(0x180)), XW['l'](bI), XT['l'](bI), XI['l'](bI), await this['Eu'](0x56, 'Unpacking\x20config'), Xi['l'](ba), XS['l'](ba), Xz['l'](ba), xc['l'](ba, xx['p6']), xP['l'](ba), xw['l'](ba), xd['l'](ba), xh['l'](ba), xx['ZT'] || (await this['Eu'](0x5a, 'Unpacking\x20sounds'), kc['l'](xG)), await this['Eu'](0x5c, Co(0x1c8)), xl['l'](bq, bT, [this['nV'], this['U7'], this['U8'], this['Uc']]), await this['Eu'](0x61, Co(0x182));
                for (let Go = 0x0; Go < 0x21; Go++) {
                    let GQ = 0x3e7,
                        GZ = 0x0;
                    for (let GY = 0x0; GY < 0x23; GY++)
                        if (0x0 === this['mZ']['Zw'][GY + Go * this['mZ']['ZR']]) 0x3e7 === GQ && (GQ = GY);
                        else {
                            if (0x3e7 !== GQ) {
                                GZ = GY;
                                break;
                            }
                        } this['UD'][Go] = GQ, this['UO'][Go] = GZ - GQ;
                }
                for (let GE = 0x9; GE < 0xa0; GE++) {
                    let Gd = 0x3e7,
                        Gw = 0x0;
                    for (let GR = 0xa; GR < 0xa8; GR++)
                        if (0x0 === this['mZ']['Zw'][GR + GE * this['mZ']['ZR']] && (GR > 0x22 || GE > 0x22)) 0x3e7 === Gd && (Gd = GR);
                        else {
                            if (0x3e7 !== Gd) {
                                Gw = GR;
                                break;
                            }
                        } this['Uu'][GE - 0x9] = Gd - 0x15, this['UN'][GE - 0x9] = Gw - Gd;
                }
                XO['Yn'](0x1df, 0x60), this['Ul'] = XO['YZ'], XO['Yn'](0xbe, 0x105), this['Uk'] = XO['YZ'], XO['Yn'](0x200, 0x14e), this['Uj'] = XO['YZ'];
                let xJ = new Int32Array(0x9);
                for (let Gt = 0x0; Gt < 0x9; Gt++) {
                    let Gc = 0x20 * Gt + 0x80 + 0xf,
                        Gr = 0x3 * Gc + 0x258,
                        GH = XO['oy'][Gc];
                    xJ[Gt] = Gr * GH >> 0x10;
                }
                x9['rM'](0x200, 0x14e, 0x1f4, 0x320, xJ), xX['l'](bV), this['eY']();
            } catch (GP) {
                this['ve'] = !0x0, GP instanceof Error && (this['n0'] = GP[Co(0x1d5)]);
            }
        }
    } ['sp']() {
        this['Ud'] && (this['se'](), this['se'](), this['ss']());
    }
    async ['Eu'](bz, bj) {
        const CQ = uh;
        if (await this['sR'](), !this['vd']) return void await super['Eu'](bz, bj);
        this['vV']?.[CQ(0x2bd)](), this['U8']?.['lV'](0xb4, 0x36, CQ(0x131), 0xffffff), (Xu['Zs'](0x1c, 0x3e, 0x130, 0x22, 0x8c1111), Xu['Zs'](0x1d, 0x3f, 0x12e, 0x20, 0x0), Xu['ZK'](0x1e, 0x40, 0x3 * bz, 0x1e, 0x8c1111), Xu['ZK'](0x1e + 0x3 * bz, 0x40, 0x12c - 0x3 * bz, 0x1e, 0x0), this['U8']?.['lV'](0xb4, 0x55, bj, 0xffffff), this['vV']?.[CQ(0x173)](0xd6, 0xba), this['vW'] && (this['vW'] = !0x1, this['Ud'] || (this['n4']?.[CQ(0x173)](0x0, 0x0), this['n7']?.[CQ(0x173)](0x295, 0x0)), this['vT']?.[CQ(0x173)](0x80, 0x0), this['vJ']?.[CQ(0x173)](0xd6, 0x182), this['n6']?.[CQ(0x173)](0x0, 0x109), this['nZ']?.[CQ(0x173)](0x23e, 0x109), this['nd']?.[CQ(0x173)](0x80, 0xba), this['nc']?.[CQ(0x173)](0x23e, 0xba)), await k5(0x5));
    } ['Lq']() {
        this['Ud'] = !0x1, this['UY'] && (clearInterval(this['UY']), this['UY'] = null), this['nv'] = null, this['nf'] = null, this['UR'] = [], this['nD'] = null, this['nz'] = null, this['nj'] = null, this['U5'] = null, this['nX'] = null, this['ng'] = null, this['nO'] = null, this['ny'] = null, this['nT'] = null, this['nF'] = null;
    } ['Ej']() {
        return this['fw'];
    }
    async ['sR']() {
        const CZ = uh;
        this['vT'] || (this['YV'] = null, this['Uz'] = null, this['Ue'] = null, this['UG'] = null, this['UX'] = null, this['UU'] = null, this['Uv'] = null, this['Ux'] = null, this['n4'] = new XM(0x80, 0x109), Xu[CZ(0x2aa)](), this['n7'] = new XM(0x80, 0x109), Xu[CZ(0x2aa)](), this['vT'] = new XM(0x215, 0xba), Xu[CZ(0x2aa)](), this['vJ'] = new XM(0x168, 0x92), Xu[CZ(0x2aa)](), this['vV'] = new XM(0x168, 0xc8), Xu[CZ(0x2aa)](), this['n6'] = new XM(0xd6, 0x10b), Xu['clear'](), this['nZ'] = new XM(0xd7, 0x10b), Xu['clear'](), this['nd'] = new XM(0x56, 0x4f), Xu[CZ(0x2aa)](), this['nc'] = new XM(0x57, 0x4f), Xu[CZ(0x2aa)](), this['vd'] && (await this['sf'](), this['sH']()), this['vW'] = !0x0);
    }
    async ['Yk']() {
        this['vC'] || this['ve'] || this['vq'] ? this['sA']() : (this['YO'] ? this['sQ']() : await this['sw'](), this['mX'] = 0x0);
    } ['sb'](bz) {
        return bz < 0x186a0 ? String(bz) : bz < 0x989680 ? (bz / 0x3e8 | 0x0) + 'K' : (bz / 0xf4240 | 0x0) + 'M';
    } ['EX']() {
        return this['NG'];
    } ['sm'](bz, bj) {
        const CY = uh;
        if (!bz['hv'] || bj >= bz['hv'][CY(0x2ea)]) return -0x2;
        try {
            let ba = bz['hv'][bj];
            if (!ba) return -0x1;
            let bq = 0x0,
                bT = 0x0;
            for (;;) {
                let bI = ba[bT++];
                if (0x0 === bI) return bq;
                if (0x1 === bI) bq += this['fG'][ba[bT++]];
                else {
                    if (0x2 === bI) bq += this['fC'][ba[bT++]];
                    else {
                        if (0x3 === bI) bq += this['fX'][ba[bT++]];
                        else {
                            if (0x4 === bI) {
                                let bJ = xl['EI'][ba[bT++]],
                                    bV = ba[bT++] + 0x1;
                                if (bJ['he'] && bJ['hs']) {
                                    for (let xG = 0x0; xG < bJ['he'][CY(0x2ea)]; xG++) bJ['he'][xG] === bV && (bq += bJ['hs'][xG]);
                                } else bq += 0x0;
                            } else {
                                if (0x5 === bI) bq += this['LK'][ba[bT++]];
                                else {
                                    if (0x6 === bI) bq += this['fO'][this['fC'][ba[bT++]] - 0x1];
                                    else {
                                        if (0x7 === bI) bq += 0x64 * this['LK'][ba[bT++]] / 0xb71b | 0x0;
                                        else {
                                            if (0x8 === bI) bq += this['UC']?.['pD'] || 0x0;
                                            else {
                                                if (0x9 === bI) {
                                                    for (let xg = 0x0; xg < 0x13; xg++) 0x12 === xg && (xg = 0x14), bq += this['fC'][xg];
                                                } else {
                                                    if (0xa === bI) {
                                                        let xu = xl['EI'][ba[bT++]],
                                                            xM = ba[bT++] + 0x1;
                                                        for (let xF = 0x0; xF < xu['he'][CY(0x2ea)]; xF++)
                                                            if (xu['he'][xF] === xM) {
                                                                bq += 0x3b9ac9ff;
                                                                break;
                                                            }
                                                    } else {
                                                        if (0xb === bI) bq += this['UF'];
                                                        else {
                                                            if (0xc === bI) bq += this['Ua'];
                                                            else 0xd === bI && (bq += this['LK'][ba[bT++]] & 0x1 << ba[bT++] ? 0x1 : 0x0);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } catch (xO) {
            return -0x1;
        }
    }
    async ['sL'](bz, bj, ba, bq) {
        const CE = uh;
        let bT = 0x5,
            bI = await this['db']?.['lW'](bz);
        if (bI && k8['oN'](bI) !== ba && (bI = void 0x0), bI) return new xe(bI);
        for (; !bI;) {
            await this['Eu'](bq, 'Requesting\x20' + bj);
            try {
                bI = await k7('/' + bz + ba);
            } catch (bJ) {
                bI = void 0x0;
                for (let bV = bT; bV > 0x0; bV--) await this['Eu'](bq, CE(0x207) + bV + CE(0x1df)), await k5(0x3e8);
                bT *= 0x2, bT > 0x3c && (bT = 0x3c);
            }
        }
        return await this['db']?.['lS'](bz, bI), new xe(bI);
    } ['sA']() {
        const Cd = uh;
        XX['fillStyle'] = Cd(0x163), XX['fillRect'](0x0, 0x0, this['Eb'], this['Ek']), this['ED'](0x1), this['Ud'] = !0x1;
        let bz = 0x23;
        this['ve'] ? (XX['font'] = Cd(0x183), XX[Cd(0x1da)] = 'left', XX[Cd(0x1cf)] = 'yellow', XX[Cd(0x1f0)]('Sorry,\x20an\x20error\x20has\x20occured\x20whilst\x20loading\x20RuneScape', 0x1e, bz), bz += 0x32, XX['fillStyle'] = Cd(0x175), XX[Cd(0x1f0)](Cd(0x2f9), 0x1e, bz), bz += 0x32, XX[Cd(0x251)] = Cd(0x29f), XX[Cd(0x1f0)]('1:\x20Try\x20closing\x20ALL\x20open\x20web-browser\x20windows,\x20and\x20reloading', 0x1e, bz), bz += 0x1e, XX[Cd(0x1f0)]('2:\x20Try\x20clearing\x20your\x20web-browsers\x20cache', 0x1e, bz), bz += 0x1e, XX[Cd(0x1f0)](Cd(0x286), 0x1e, bz), bz += 0x1e, XX[Cd(0x1f0)](Cd(0x153), 0x1e, bz)) : this['vq'] ? (XX[Cd(0x251)] = Cd(0x265), XX[Cd(0x1da)] = 'left', XX[Cd(0x1cf)] = Cd(0x175), XX[Cd(0x1f0)](Cd(0x159), 0x32, 0x32), XX['fillText'](Cd(0x198), 0x32, 0x64)) : this['vC'] && (XX[Cd(0x251)] = 'bold\x2013px\x20helvetica,\x20sans-serif', XX['textAlign'] = Cd(0x1a8), XX[Cd(0x1cf)] = Cd(0x1d7), XX[Cd(0x1f0)]('Error\x20a\x20copy\x20of\x20RuneScape\x20already\x20appears\x20to\x20be\x20loaded', 0x1e, bz), bz += 0x32, XX['fillStyle'] = Cd(0x175), XX[Cd(0x1f0)](Cd(0x2f9), 0x1e, bz), bz += 0x32, XX[Cd(0x251)] = Cd(0x29f), XX[Cd(0x1f0)](Cd(0x2bb), 0x1e, bz), bz += 0x1e, XX[Cd(0x1f0)](Cd(0x1c1), 0x1e, bz)), this['n0'] && (bz += 0x32, XX[Cd(0x1cf)] = Cd(0x2b5), XX[Cd(0x1f0)](Cd(0x157) + this['n0'], 0x1e, bz));
    } ['EF']() {
        return this['fD'];
    } ['EM']() {
        return this['L1'];
    } ['ss']() {
        const Cw = uh;
        if (!(this['nD'] && this['nz'] && this['nj'] && this['U5'] && this['nI'] && this['nO'])) return;
        let bz = 0x100;
        if (this['UZ'] > 0x0) {
            for (let bq = 0x0; bq < 0x100; bq++) this['UZ'] > 0x300 ? this['nD'][bq] = this['sk'](this['nz'][bq], 0x400 - this['UZ'], this['nj'][bq]) : this['UZ'] > 0x100 ? this['nD'][bq] = this['nj'][bq] : this['nD'][bq] = this['sk'](this['nj'][bq], 0x100 - this['UZ'], this['nz'][bq]);
        } else {
            if (this['UE'] > 0x0) {
                for (let bT = 0x0; bT < 0x100; bT++) this['UE'] > 0x300 ? this['nD'][bT] = this['sk'](this['nz'][bT], 0x400 - this['UE'], this['U5'][bT]) : this['UE'] > 0x100 ? this['nD'][bT] = this['U5'][bT] : this['nD'][bT] = this['sk'](this['U5'][bT], 0x100 - this['UE'], this['nz'][bT]);
            } else {
                for (let bI = 0x0; bI < 0x100; bI++) this['nD'][bI] = this['nz'][bI];
            }
        }
        for (let bJ = 0x0; bJ < 0x8480; bJ++) this['n4'] && this['nT'] && (this['n4']['Zw'][bJ] = this['nT']['Zw'][bJ]);
        let bj = 0x0,
            ba = 0x480;
        for (let bV = 0x1; bV < 0xff; bV++) {
            let xG = 0x16 + (this['nI'][bV] * (bz - bV) / bz | 0x0);
            xG < 0x0 && (xG = 0x0), bj += xG;
            for (let xg = xG; xg < 0x80; xg++) {
                let xu = this['nO'][bj++];
                if (0x0 === xu) ba++;
                else {
                    let xM = xu,
                        xF = 0x100 - xu;
                    if (xu = this['nD'][xu], this['n4']) {
                        let xO = this['n4']['Zw'][ba];
                        this['n4']['Zw'][ba++] = ((0xff00ff & xu) * xM + (0xff00ff & xO) * xF & 0xff00ff00) + ((0xff00 & xu) * xM + (0xff00 & xO) * xF & 0xff0000) >> 0x8;
                    }
                }
            }
            ba += xG;
        }
        this['n4']?.[Cw(0x173)](0x0, 0x0);
        for (let xD = 0x0; xD < 0x8480; xD++) this['n7'] && this['nF'] && (this['n7']['Zw'][xD] = this['nF']['Zw'][xD]);
        bj = 0x0, ba = 0x498;
        for (let xC = 0x1; xC < 0xff; xC++) {
            let xy = this['nI'][xC] * (bz - xC) / bz | 0x0,
                xz = 0x67 - xy;
            ba += xy;
            for (let xj = 0x0; xj < xz; xj++) {
                let xa = this['nO'][bj++];
                if (0x0 === xa) ba++;
                else {
                    let xq = xa,
                        xT = 0x100 - xa;
                    if (xa = this['nD'][xa], this['n7']) {
                        let xI = this['n7']['Zw'][ba];
                        this['n7']['Zw'][ba++] = ((0xff00ff & xa) * xq + (0xff00ff & xI) * xT & 0xff00ff00) + ((0xff00 & xa) * xq + (0xff00 & xI) * xT & 0xff0000) >> 0x8;
                    }
                }
            }
            bj += 0x80 - xz, ba += 0x80 - xz - xy;
        }
        this['n7']?.[Cw(0x173)](0x295, 0x0), this['Ep'] && kv['draw']();
    } ['eA'](bz, bj) {
        const CR = uh;
        let ba = bz['m'](),
            bq = this['wZ'] + (ba >> 0x4 & 0x7),
            bT = this['wc'] + (0x7 & ba);
        if (0x3b === bj) {
            let bI = bz['m'](),
                bJ = bz['oZ'](),
                bV = bI >> 0x2,
                xG = 0x3 & bI,
                xg = kr['of'](bV)['QX'];
            bq >= 0x0 && bT >= 0x0 && bq < 0x68 && bT < 0x68 && this['s9'](-0x1, bJ, xG, xg, bT, bV, this['v1'], bq, 0x0);
        } else {
            if (0x4c === bj) {
                let xu = bz['m'](),
                    xM = xu >> 0x2,
                    xF = 0x3 & xu,
                    xO = kr['of'](xM)['QX'];
                bq >= 0x0 && bT >= 0x0 && bq < 0x68 && bT < 0x68 && this['s9'](-0x1, -0x1, xF, xO, bT, xM, this['v1'], bq, 0x0);
            } else {
                if (0x2a === bj) {
                    let xD = bz['m']() >> 0x2,
                        xC = kr['of'](xD)['QX'],
                        xy = bz['oZ']();
                    if (bq >= 0x0 && bT >= 0x0 && bq < 0x68 && bT < 0x68 && this['Nq']) {
                        let xz = 0x0;
                        if (0x0 === xC ? xz = this['Nq']['rq'](this['v1'], bq, bT) : 0x1 === xC ? xz = this['Nq']['H7'](this['v1'], bT, bq) : 0x2 === xC ? xz = this['Nq']['ra'](this['v1'], bq, bT) : 0x3 === xC && (xz = this['Nq']['H4'](this['v1'], bq, bT)), 0x0 !== xz) {
                            let xj = new xo(xz >> 0xe & 0x7fff, this['v1'], xC, bq, bT, Xi['EI'][xy], !0x1);
                            this['U2']['B'](xj);
                        }
                    }
                } else {
                    if (0xdf === bj) {
                        let xa = bz['oZ'](),
                            xq = bz['oZ']();
                        if (bq >= 0x0 && bT >= 0x0 && bq < 0x68 && bT < 0x68) {
                            let xT = new xv(xa, xq);
                            this['Up'][this['v1']][bq][bT] || (this['Up'][this['v1']][bq][bT] = new k3()), this['Up'][this['v1']][bq][bT]?.['B'](xT), this['ev'](bq, bT);
                        }
                    } else {
                        if (0x31 === bj) {
                            let xI = bz['oZ']();
                            if (bq >= 0x0 && bT >= 0x0 && bq < 0x68 && bT < 0x68) {
                                let xJ = this['Up'][this['v1']][bq][bT];
                                if (xJ) {
                                    for (let xV = xJ[CR(0x32b)](); xV; xV = xJ[CR(0x302)]())
                                        if (xV['lL'] === (0x7fff & xI)) {
                                            xV['p']();
                                            break;
                                        } xJ['head']() || (this['Up'][this['v1']][bq][bT] = null), this['ev'](bq, bT);
                                }
                            }
                        } else {
                            if (0x45 === bj) {
                                let xW = bq + bz['oo'](),
                                    xS = bT + bz['oo'](),
                                    xi = bz['oc'](),
                                    G0 = bz['oZ'](),
                                    G1 = bz['m'](),
                                    G2 = bz['m'](),
                                    G3 = bz['oZ'](),
                                    G4 = bz['oZ'](),
                                    G5 = bz['m'](),
                                    G6 = bz['m']();
                                if (bq >= 0x0 && bT >= 0x0 && bq < 0x68 && bT < 0x68 && xW >= 0x0 && xS >= 0x0 && xW < 0x68 && xS < 0x68) {
                                    bq = 0x80 * bq + 0x40, bT = 0x80 * bT + 0x40, xW = 0x80 * xW + 0x40, xS = 0x80 * xS + 0x40;
                                    let G7 = new xK(G0, this['v1'], bq, this['e0'](this['v1'], bq, bT) - G1, bT, G3 + this['nQ'], G4 + this['nQ'], G5, G6, xi, G2);
                                    G7['lv'](xW, this['e0'](this['v1'], xW, xS) - G2, xS, G3 + this['nQ']), this['nA']['B'](G7);
                                }
                            } else {
                                if (0xbf === bj) {
                                    let G8 = bz['oZ'](),
                                        G9 = bz['m'](),
                                        Go = bz['oZ']();
                                    if (bq >= 0x0 && bT >= 0x0 && bq < 0x68 && bT < 0x68) {
                                        bq = 0x80 * bq + 0x40, bT = 0x80 * bT + 0x40;
                                        let GQ = new xN(G8, this['v1'], bq, bT, this['e0'](this['v1'], bq, bT) - G9, this['nQ'], Go);
                                        this['nS']['B'](GQ);
                                    }
                                } else {
                                    if (0x32 === bj) {
                                        let GZ = bz['oZ'](),
                                            GY = bz['oZ'](),
                                            GE = bz['oZ']();
                                        if (bq >= 0x0 && bT >= 0x0 && bq < 0x68 && bT < 0x68 && GE !== this['UB']) {
                                            let Gd = new xv(GZ, GY);
                                            this['Up'][this['v1']][bq][bT] || (this['Up'][this['v1']][bq][bT] = new k3()), this['Up'][this['v1']][bq][bT]?.['B'](Gd), this['ev'](bq, bT);
                                        }
                                    } else {
                                        if (0x17 === bj) {
                                            let Gw, GR = bz['m'](),
                                                Gt = GR >> 0x2,
                                                Gc = 0x3 & GR,
                                                Gr = kr['of'](Gt)['QX'],
                                                GH = bz['oZ'](),
                                                GP = bz['oZ'](),
                                                Gp = bz['oZ'](),
                                                Gh = bz['oZ'](),
                                                Gl = bz['oo'](),
                                                GK = bz['oo'](),
                                                GN = bz['oo'](),
                                                Gv = bz['oo']();
                                            if (Gw = Gh === this['UB'] ? this['UC'] : this['nx'][Gh], Gw && this['Hf']) {
                                                this['s9'](GP + this['nQ'], -0x1, Gc, Gr, bT, Gt, this['v1'], bq, Gp + this['nQ']);
                                                let Gn = this['Hf'][this['v1']][bq][bT],
                                                    GU = this['Hf'][this['v1']][bq + 0x1][bT],
                                                    Gm = this['Hf'][this['v1']][bq + 0x1][bT + 0x1],
                                                    Gf = this['Hf'][this['v1']][bq][bT + 0x1],
                                                    GL = XS[CR(0x321)](GH);
                                                Gw['pC'] = GP + this['nQ'], Gw['py'] = Gp + this['nQ'], Gw['pj'] = GL['t2'](Gt, Gc, Gn, GU, Gm, Gf, -0x1);
                                                let Ge, {
                                                    width: Gs,
                                                    length: GA
                                                } = GL;
                                                0x1 !== Gc && 0x3 !== Gc || (Gs = GL[CR(0x2ea)], GA = GL['width']), Gw['pF'] = 0x80 * bq + 0x40 * Gs, Gw['pO'] = 0x80 * bT + 0x40 * GA, Gw['pM'] = this['e0'](this['v1'], Gw['pF'], Gw['pO']), Gl > GN && (Ge = Gl, Gl = GN, GN = Ge), GK > Gv && (Ge = GK, GK = Gv, Gv = Ge), Gw['c5'] = bq + Gl, Gw['c8'] = bq + GN, Gw['c6'] = bT + GK, Gw['c7'] = bT + Gv;
                                            }
                                        } else {
                                            if (0x97 === bj) {
                                                let Gb = bz['oZ'](),
                                                    Gk = bz['oZ'](),
                                                    GB = bz['oZ']();
                                                if (bq >= 0x0 && bT >= 0x0 && bq < 0x68 && bT < 0x68) {
                                                    let GX = this['Up'][this['v1']][bq][bT];
                                                    if (GX) {
                                                        for (let Gx = GX[CR(0x32b)](); Gx; Gx = GX[CR(0x302)]())
                                                            if (Gx['lL'] === (0x7fff & Gb) && Gx['le'] === Gk) {
                                                                Gx['le'] = GB;
                                                                break;
                                                            } this['ev'](bq, bT);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } ['sn']() {
        const Cc = uh;
        let bz = 0x80 * this['np'] + 0x40,
            bj = 0x80 * this['nr'] + 0x40,
            ba = this['e0'](this['v1'], this['np'], this['nr']) - this['nl'];
        this['nw'] < bz && (this['nw'] += this['nK'] + ((bz - this['nw']) * this['nP'] / 0x3e8 | 0x0), this['nw'] > bz && (this['nw'] = bz)), this['nw'] > bz && (this['nw'] -= this['nK'] + ((this['nw'] - bz) * this['nP'] / 0x3e8 | 0x0), this['nw'] < bz && (this['nw'] = bz)), this['n2'] < ba && (this['n2'] += this['nK'] + ((ba - this['n2']) * this['nP'] / 0x3e8 | 0x0), this['n2'] > ba && (this['n2'] = ba)), this['n2'] > ba && (this['n2'] -= this['nK'] + ((this['n2'] - ba) * this['nP'] / 0x3e8 | 0x0), this['n2'] < ba && (this['n2'] = ba)), this['no'] < bj && (this['no'] += this['nK'] + ((bj - this['no']) * this['nP'] / 0x3e8 | 0x0), this['no'] > bj && (this['no'] = bj)), this['no'] > bj && (this['no'] -= this['nK'] + ((this['no'] - bj) * this['nP'] / 0x3e8 | 0x0), this['no'] < bj && (this['no'] = bj)), bz = 0x80 * this['nm'] + 0x40, bj = 0x80 * this['ns'] + 0x40, ba = this['e0'](this['v1'], this['nm'], this['ns']) - this['nH'];
        let bq = bz - this['nw'],
            bT = ba - this['n2'],
            bI = bj - this['no'],
            bJ = 0x0 | Math['sqrt'](bq * bq + bI * bI),
            bV = 325.949 * Math['atan2'](bT, bJ) & 0x7ff,
            xG = -325.949 * Math[Cc(0x325)](bq, bI) & 0x7ff;
        bV < 0x80 && (bV = 0x80), bV > 0x17f && (bV = 0x17f), this['Ns'] < bV && (this['Ns'] += this['nh'] + ((bV - this['Ns']) * this['nR'] / 0x3e8 | 0x0), this['Ns'] > bV && (this['Ns'] = bV)), this['Ns'] > bV && (this['Ns'] -= this['nh'] + ((this['Ns'] - bV) * this['nR'] / 0x3e8 | 0x0), this['Ns'] < bV && (this['Ns'] = bV));
        let xg = xG - this['vZ'];
        xg > 0x400 && (xg -= 0x800), xg < -0x400 && (xg += 0x800), xg > 0x0 && (this['vZ'] += this['nh'] + (xg * this['nR'] / 0x3e8 | 0x0), this['vZ'] &= 0x7ff), xg < 0x0 && (this['vZ'] -= this['nh'] + (-xg * this['nR'] / 0x3e8 | 0x0), this['vZ'] &= 0x7ff);
        let xu = xG - this['vZ'];
        xu > 0x400 && (xu -= 0x800), xu < -0x400 && (xu += 0x800), (xu < 0x0 && xg > 0x0 || xu > 0x0 && xg < 0x0) && (this['vZ'] = xG);
    } ['se']() {
        const Cr = uh;
        if (!(this['nO'] && this['ny'] && this['nX'] && this['nI'])) return;
        for (let bz = 0xa; bz < 0x75; bz++)(0x64 * Math[Cr(0x291)]() | 0x0) < 0x32 && (this['nO'][bz + 0x7f00] = 0xff);
        for (let bj = 0x0; bj < 0x64; bj++) {
            let ba = 0x2 + (0x7c * Math[Cr(0x291)]() | 0x0) + (0x80 + (0x80 * Math['random']() | 0x0) << 0x7);
            this['nO'][ba] = 0xc0;
        }
        for (let bq = 0x1; bq < 0xff; bq++)
            for (let bT = 0x1; bT < 0x7f; bT++) {
                let bI = bT + (bq << 0x7);
                this['ny'][bI] = (this['nO'][bI - 0x1] + this['nO'][bI + 0x1] + this['nO'][bI - 0x80] + this['nO'][bI + 0x80]) / 0x4 | 0x0;
            }
        this['U1'] += 0x80, this['U1'] > this['nX'][Cr(0x2ea)] && (this['U1'] -= this['nX']['length'], this['sP'](this['UR'][0xc * Math[Cr(0x291)]() | 0x0]));
        for (let bJ = 0x1; bJ < 0xff; bJ++)
            for (let bV = 0x1; bV < 0x7f; bV++) {
                let xG = bV + (bJ << 0x7),
                    xg = this['ny'][xG + 0x80] - (this['nX'][xG + this['U1'] & this['nX'][Cr(0x2ea)] - 0x1] / 0x5 | 0x0);
                xg < 0x0 && (xg = 0x0), this['nO'][xG] = xg;
            }
        for (let xu = 0x0; xu < 0xff; xu++) this['nI'][xu] = this['nI'][xu + 0x1];
        if (this['nI'][0xff] = 0x10 * Math[Cr(0x2db)](this['nQ'] / 0xe) + 0xe * Math[Cr(0x2db)](this['nQ'] / 0xf) + 0xc * Math['sin'](this['nQ'] / 0x10) | 0x0, this['UZ'] > 0x0 && (this['UZ'] -= 0x4), this['UE'] > 0x0 && (this['UE'] -= 0x4), 0x0 === this['UZ'] && 0x0 === this['UE']) {
            let xM = 0x7d0 * Math[Cr(0x291)]() | 0x0;
            0x0 === xM ? this['UZ'] = 0x400 : 0x1 === xM && (this['UE'] = 0x400);
        }
    } ['sB'](bz) {
        return bz < 0x3b9ac9ff ? String(bz) : '*';
    } ['sX'](bz) {
        const CH = uh;
        let bj = String(bz);
        for (let ba = bj[CH(0x2ea)] - 0x3; ba > 0x0; ba -= 0x3) bj = bj[CH(0x250)](0x0, ba) + ',' + bj['substring'](ba);
        return bj['length'] > 0x8 ? bj = CH(0x161) + bj['substring'](0x0, bj['length'] - 0x8) + '\x20million\x20@whi@(' + bj + ')' : bj[CH(0x2ea)] > 0x4 && (bj = CH(0x172) + bj[CH(0x250)](0x0, bj[CH(0x2ea)] - 0x4) + CH(0x2bc) + bj + ')'), '\x20' + bj;
    } ['Eg']() {
        return this['vx'];
    } ['sk'](bz, bj, ba) {
        let bq = 0x100 - bj;
        return ((0xff00ff & bz) * bq + (0xff00ff & ba) * bj & 0xff00ff00) + ((0xff00 & bz) * bq + (0xff00 & ba) * bj & 0xff0000) >> 0x8;
    }
    constructor(bz, bj, ba) {
        const CP = uh;
        super(), void 0x0 !== bz && void 0x0 !== bj && void 0x0 !== ba && (xx['Nz'] = bz, xx['p6'] = ba, bj ? xx['sx']() : xx['sG'](), CP(0x203) !== window['location'][CP(0x301)] && (this['vq'] = !0x0), this['Ey']());
    } ['sE'](bz, bj, ba, bq, bT, bI) {
        let bJ, bV, xG, xg = 0x800 - bT & 0x7ff,
            xu = 0x800 - bq & 0x7ff,
            xM = 0x0,
            xF = 0x0,
            xO = bI;
        0x0 !== xg && (bJ = XO['oy'][xg], bV = XO['Y3'][xg], xG = xF * bV - bI * bJ >> 0x10, xO = xF * bJ + bI * bV >> 0x10, xF = xG), 0x0 !== xu && (bJ = XO['oy'][xu], bV = XO['Y3'][xu], xG = xO * bJ + xM * bV >> 0x10, xO = xO * bV - xM * bJ >> 0x10, xM = xG), this['nw'] = bz - xM, this['n2'] = bj - xF, this['no'] = ba - xO, this['Ns'] = bT, this['vZ'] = bq;
    }
    static['sG']() {
        x9['ZT'] = !0x1, XO['ZT'] = !0x1, xx['ZT'] = !0x1, xQ['ZT'] = !0x1;
    }
    async ['sh']() {
        const Cp = uh;
        if (0xff800800 !== this['mj']) return this['mj'];
        try {
            let bz = await this['db']?.['lW'](Cp(0x2c1));
            (void 0x0 === bz || bz[Cp(0x2ea)] < 0x4) && await this['db']?.['lS'](Cp(0x2c1), new Uint8Array([0x0, 0xff * Math['random'](), 0xff * Math[Cp(0x291)](), 0xff * Math[Cp(0x291)]()]));
            let bj = await this['db']?.['lW'](Cp(0x2c1));
            this['mj'] = bj ? bj[0x0] + (bj[0x1] << 0x8) + (bj[0x2] << 0x10) + (bj[0x3] << 0x18) : 0x7a31c8;
        } catch (ba) {}
        return this['mj'];
    } ['sg'](bz) {
        const Ch = uh;
        let bj = bz['hh'];
        if (bj >= 0x1 && bj <= 0x64) bj--, bj >= this['UH'] ? (bz['hy'] = '', bz['hp'] = 0x0) : (bz['hy'] = this['UW'][bj], bz['hp'] = 0x1);
        else {
            if (bj >= 0x65 && bj <= 0xc8) bj -= 0x65, bj >= this['UH'] ? (bz['hy'] = '', bz['hp'] = 0x0) : (0x0 === this['mD'][bj] ? bz['hy'] = Ch(0x1a7) : this['mD'][bj] === xx['Nz'] ? bz['hy'] = Ch(0x261) + (this['mD'][bj] - 0x9) : bz['hy'] = Ch(0x2d1) + (this['mD'][bj] - 0x9), bz['hp'] = 0x1);
            else {
                if (0xcb === bj) bz['hn'] = 0xf * this['UH'] + 0x14, bz['hn'] <= bz['Zc'] && (bz['hn'] = bz['Zc'] + 0x1);
                else {
                    if (bj >= 0x191 && bj <= 0x1f4) bj -= 0x191, bj >= this['ff'] ? (bz['hy'] = '', bz['hp'] = 0x0) : (bz['hy'] = xZ['HC'](xZ['HT'](this['fm'][bj])), bz['hp'] = 0x1);
                    else {
                        if (0x1f7 === bj) bz['hn'] = 0xf * this['ff'] + 0x14, bz['hn'] <= bz['Zc'] && (bz['hn'] = bz['Zc'] + 0x1);
                        else {
                            if (0x147 === bj) {
                                if (bz['hW'] = 0x96, bz['hS'] = 0x100 * Math['sin'](this['nQ'] / 0x28) & 0x7ff, this['UT']) {
                                    this['UT'] = !0x1;
                                    let ba = new kY(0x7, null),
                                        bq = 0x0;
                                    for (let bI = 0x0; bI < 0x7; bI++) {
                                        let bJ = this['UA'][bI];
                                        bJ >= 0x0 && (ba[bq++] = xw['EI'][bJ]['t2']());
                                    }
                                    let bT = XW['Rr'](ba, bq);
                                    for (let bV = 0x0; bV < 0x5; bV++) 0x0 !== this['Uq'][bV] && (bT['wW'](xr['pk'][bV][0x0], xr['pk'][bV][this['Uq'][bV]]), 0x1 === bV && bT['wW'](xr['pb'][0x0], xr['pb'][this['Uq'][bV]]));
                                    if (this['UC']) {
                                        let xG = Xi['EI'][this['UC']['PL']]['t4'];
                                        xG && (bT['Rl'](), bT['Rc'](xG[0x0]), bT['R8'](0x40, 0x352, -0x1e, -0x32, -0x1e, !0x0), bz['Rw'] = bT);
                                    }
                                }
                            } else {
                                if (0x144 === bj) this['f8'] || (this['f8'] = bz['hq'], this['fY'] = bz['hT']), this['Ug'] ? bz['hq'] = this['fY'] : bz['hq'] = this['f8'];
                                else {
                                    if (0x145 === bj) this['f8'] || (this['f8'] = bz['hq'], this['fY'] = bz['hT']), this['Ug'] ? bz['hq'] = this['f8'] : bz['hq'] = this['fY'];
                                    else {
                                        if (0x258 === bj) bz['hy'] = this['Ll'], this['nQ'] % 0x14 < 0xa ? bz['hy'] = bz['hy'] + '|' : bz['hy'] = bz['hy'] + '\x20';
                                        else {
                                            if (0x265 === bj) this['Um'] ? this['Lr'] ? (bz['c4'] = 0xff0000, bz['hy'] = Ch(0x152)) : (bz['c4'] = 0xffffff, bz['hy'] = Ch(0x289)) : bz['hy'] = '';
                                            else {
                                                if (0x28a === bj || 0x28f === bj) {
                                                    if (0x0 === this['NX']) bz['hy'] = '';
                                                    else {
                                                        let xg;
                                                        xg = 0x0 === this['Ng'] ? 'earlier\x20today' : 0x1 === this['Ng'] ? 'yesterday' : this['Ng'] + Ch(0x199);
                                                        let xu = xZ['Hy'](this['NX']);
                                                        bz['hy'] = Ch(0x1fd) + xg + (Ch(0x193) === xu ? '.' : Ch(0x24f) + xu);
                                                    }
                                                } else {
                                                    if (0x28b === bj) 0x0 === this['NO'] && (bz['hy'] = Ch(0x2f0), bz['c4'] = 0xffff00), 0x1 === this['NO'] && (bz['hy'] = Ch(0x255), bz['c4'] = 0xff00), this['NO'] > 0x1 && (bz['hy'] = this['NO'] + Ch(0x16a), bz['c4'] = 0xff00);
                                                    else {
                                                        if (0x28c === bj) {
                                                            if (0xc9 === this['NF']) bz['hy'] = '';
                                                            else {
                                                                if (0xc8 === this['NF']) bz['hy'] = Ch(0x1a0);
                                                                else {
                                                                    let xM;
                                                                    xM = 0x0 === this['NF'] ? Ch(0x205) : 0x1 === this['NF'] ? Ch(0x246) : this['NF'] + Ch(0x199), bz['hy'] = xM + Ch(0x271);
                                                                }
                                                            }
                                                        } else 0x28d === bj ? 0xc9 === this['NF'] ? bz['hy'] = '' : 0xc8 === this['NF'] ? bz['hy'] = Ch(0x317) : bz['hy'] = Ch(0x2b2) : 0x28e === bj && (0xc9 === this['NF'] ? bz['hy'] = '' : (this['NF'], bz['hy'] = Ch(0x2d9)));
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } ['sd'](bz) {
        if (!xx['ZT']) {
            if (XO['Y0'][0x11] >= bz) {
                let bj = XO['Y8'][0x11];
                if (!bj) return;
                let ba = bj['ZR'] * bj['Zc'] - 0x1,
                    bq = bj['ZR'] * this['v6'] * 0x2,
                    bT = bj['Zw'],
                    bI = this['vk'];
                for (let bJ = 0x0; bJ <= ba; bJ++) bI[bJ] = bT[bJ - bq & ba];
                bj['Zw'] = bI, this['vk'] = bT, XO['Yh'](0x11);
            }
            if (XO['Y0'][0x18] >= bz) {
                let bV = XO['Y8'][0x18];
                if (!bV) return;
                let xG = bV['ZR'] * bV['Zc'] - 0x1,
                    xg = bV['ZR'] * this['v6'] * 0x2,
                    xu = bV['Zw'],
                    xM = this['vk'];
                for (let xF = 0x0; xF <= xG; xF++) xM[xF] = xu[xF - xg & xG];
                bV['Zw'] = xM, this['vk'] = xu, XO['Yh'](0x18);
            }
        }
    }
    async ['sl']() {
        if ('none' !== this['ma']) return this['ma'];
        try {
            this['ma'] = await kn();
        } catch (bz) {}
        return this['ma'];
    } ['s1'](bz, bj) {
        const Cl = uh;
        let ba = !0x1,
            bq = xl['EI'][bz];
        if (!bq['hm']) return !0x1;
        for (let bT = 0x0; bT < bq['hm'][Cl(0x2ea)] && -0x1 !== bq['hm'][bT]; bT++) {
            let bI = xl['EI'][bq['hm'][bT]];
            if (0x1 === bI['hP'] && (ba ||= this['s1'](bI['hH'], bj)), 0x6 === bI['hP'] && (-0x1 !== bI['RO'] || -0x1 !== bI['hJ'])) {
                let bJ;
                if (bJ = this['sU'](bI) ? bI['hJ'] : bI['RO'], -0x1 !== bJ) {
                    let bV = Xi['EI'][bJ];
                    if (bI['Hw'] += bj, bV['tQ']) {
                        for (; bI['Hw'] > bV['tQ'][bI['Hd']];) bI['Hw'] -= bV['tQ'][bI['Hd']] + 0x1, bI['Hd']++, bI['Hd'] >= bV['tZ'] && (bI['Hd'] -= bV['tE'], (bI['Hd'] < 0x0 || bI['Hd'] >= bV['tZ']) && (bI['Hd'] = 0x0)), ba = !0x0;
                    }
                }
            }
        }
        return ba;
    }
    static['sx']() {
        x9['ZT'] = !0x0, XO['ZT'] = !0x0, xx['ZT'] = !0x0, xQ['ZT'] = !0x0;
    } ['e0'](bz, bj, ba) {
        const CK = uh;
        if (!this['Hf']) return 0x0;
        let bq = Math[CK(0x23d)](bj >> 0x7, 0x67),
            bT = Math[CK(0x23d)](ba >> 0x7, 0x67),
            bI = bz;
        bz < 0x3 && this['He'] && !(0x2 & ~this['He'][0x1][bq][bT]) && (bI = bz + 0x1);
        let bJ = 0x7f & bj,
            bV = 0x7f & ba;
        return (this['Hf'][bI][bq][bT] * (0x80 - bJ) + this['Hf'][bI][bq + 0x1][bT] * bJ >> 0x7) * (0x80 - bV) + (this['Hf'][bI][bq][bT + 0x1] * (0x80 - bJ) + this['Hf'][bI][bq + 0x1][bT + 0x1] * bJ >> 0x7) * bV >> 0x7;
    } ['eV'](bz, bj, ba, bq, bT) {
        this['f6']?.['Zj'](bz, bj), this['mW']?.['Zj'](bz, bj + bT - 0x10), Xu['ZK'](bz, bj + 0x10, 0x10, bT - 0x20, 0x23201b);
        let bI = (bT - 0x20) * bT / bq | 0x0;
        bI < 0x8 && (bI = 0x8);
        let bJ = (bT - bI - 0x20) * ba / (bq - bT) | 0x0;
        Xu['ZK'](bz, bj + bJ + 0x10, 0x10, bI, 0x4d4233), Xu['ZL'](bz, bj + bJ + 0x10, 0x766654, bI), Xu['ZL'](bz + 0x1, bj + bJ + 0x10, 0x766654, bI), Xu['Ze'](bz, bj + bJ + 0x10, 0x766654, 0x10), Xu['Ze'](bz, bj + bJ + 0x11, 0x766654, 0x10), Xu['ZL'](bz + 0xf, bj + bJ + 0x10, 0x332d25, bI), Xu['ZL'](bz + 0xe, bj + bJ + 0x11, 0x332d25, bI - 0x1), Xu['Ze'](bz, bj + bJ + bI + 0xf, 0x332d25, 0x10), Xu['Ze'](bz + 0x1, bj + bJ + bI + 0xe, 0x332d25, 0xf);
    } ['sv']() {
        if (!this['UC']) return;
        let bz = this['UC']['x'] + this['vN'],
            bj = this['UC']['z'] + this['vn'];
        (this['n9'] - bz < -0x1f4 || this['n9'] - bz > 0x1f4 || this['nN'] - bj < -0x1f4 || this['nN'] - bj > 0x1f4) && (this['n9'] = bz, this['nN'] = bj), this['n9'] !== bz && (this['n9'] += (bz - this['n9']) / 0x10 | 0x0), this['nN'] !== bj && (this['nN'] += (bj - this['nN']) / 0x10 | 0x0), 0x1 === this['Ys'][0x1] ? this['vj'] += (-this['vj'] - 0x18) / 0x2 | 0x0 : 0x1 === this['Ys'][0x2] ? this['vj'] += (0x18 - this['vj']) / 0x2 | 0x0 : this['vj'] = this['vj'] / 0x2 | 0x0, 0x1 === this['Ys'][0x3] ? this['nE'] += (0xc - this['nE']) / 0x2 | 0x0 : 0x1 === this['Ys'][0x4] ? this['nE'] += (-this['nE'] - 0xc) / 0x2 | 0x0 : this['nE'] = this['nE'] / 0x2 | 0x0, this['vO'] = this['vO'] + this['vj'] / 0x2 & 0x7ff, this['vG'] += this['nE'] / 0x2 | 0x0, this['vG'] < 0x80 && (this['vG'] = 0x80), this['vG'] > 0x17f && (this['vG'] = 0x17f);
        let ba = this['n9'] >> 0x7,
            bq = this['nN'] >> 0x7,
            bT = this['e0'](this['v1'], this['n9'], this['nN']),
            bI = 0x0;
        if (this['Hf'] && ba > 0x3 && bq > 0x3 && ba < 0x64 && bq < 0x64) {
            for (let bV = ba - 0x4; bV <= ba + 0x4; bV++)
                for (let xG = bq - 0x4; xG <= bq + 0x4; xG++) {
                    let xg = this['v1'];
                    xg < 0x3 && this['He'] && !(0x2 & ~this['He'][0x1][bV][xG]) && xg++;
                    let xu = bT - this['Hf'][xg][bV][xG];
                    xu > bI && (bI = xu);
                }
        }
        let bJ = 0xc0 * bI;
        bJ > 0x17f00 && (bJ = 0x17f00), bJ < 0x8000 && (bJ = 0x8000), bJ > this['NM'] ? this['NM'] += (bJ - this['NM']) / 0x18 | 0x0 : bJ < this['NM'] && (this['NM'] += (bJ - this['NM']) / 0x50 | 0x0);
    } ['eJ'](bz, bj, ba, bq, bT = !0x1) {
        const CN = uh;
        if (0x0 !== bz['hP'] || !bz['hm'] || bz['hU'] && this['L6'] !== bz['hH'] && this['L8'] !== bz['hH'] && this['L7'] !== bz['hH']) return;
        let bI = Xu['Zl'],
            bJ = Xu['Zr'],
            bV = Xu['Zt'],
            xG = Xu['Zh'];
        Xu['ZU'](bj, ba, bj + bz['ZR'], ba + bz['Zc']);
        let xg = bz['hm'][CN(0x2ea)];
        for (let xu = 0x0; xu < xg; xu++) {
            if (!bz['hf'] || !bz['hL']) continue;
            let xM = bz['hf'][xu] + bj,
                xF = bz['hL'][xu] + ba - bq,
                xO = xl['EI'][bz['hm'][xu]];
            if (xM += xO['x'], xF += xO['y'], bT && Xu['Zs'](xM, xF, xO['ZR'], xO['Zc'], 0xffffff), xO['hh'] > 0x0 && this['sg'](xO), 0x0 === xO['hP']) xO['l3'] > xO['hn'] - xO['Zc'] && (xO['l3'] = xO['hn'] - xO['Zc']), xO['l3'] < 0x0 && (xO['l3'] = 0x0), this['eJ'](xO, xM, xF, xO['l3'], bT), xO['hn'] > xO['Zc'] && this['eV'](xM + xO['ZR'], xF, xO['l3'], xO['hn'], xO['Zc']);
            else {
                if (0x2 === xO['hP']) {
                    let xD = 0x0;
                    for (let xC = 0x0; xC < xO['Zc']; xC++)
                        for (let xy = 0x0; xy < xO['ZR']; xy++) {
                            if (!(xO['hx'] && xO['hG'] && xO['he'] && xO['hs'])) continue;
                            let xz = xM + xy * (xO['hB'] + 0x20),
                                xj = xF + xC * (xO['hX'] + 0x20);
                            if (xD < 0x14 && (xz += xO['hx'][xD], xj += xO['hG'][xD]), xO['he'][xD] > 0x0) {
                                let xa = 0x0,
                                    xq = 0x0,
                                    xT = xO['he'][xD] - 0x1;
                                if (xz >= -0x20 && xz <= 0x200 && xj >= -0x20 && xj <= 0x14e || 0x0 !== this['LZ'] && this['Ld'] === xD) {
                                    let xI = xc['p8'](xT, xO['hs'][xD]);
                                    if (0x0 !== this['LZ'] && this['Ld'] === xD && this['L9'] === xO['hH'] ? (xa = this['YG'] - this['LR'], xq = this['YA'] - this['Lw'], xa < 0x5 && xa > -0x5 && (xa = 0x0), xq < 0x5 && xq > -0x5 && (xq = 0x0), this['LP'] < 0x5 && (xa = 0x0, xq = 0x0), xI['PT'](0x80, xz + xa, xj + xq)) : 0x0 !== this['Lk'] && this['LX'] === xD && this['Lm'] === xO['hH'] ? xI['PT'](0x80, xz, xj) : xI['Zj'](xz, xj), 0x21 === xI['ZG'] || 0x1 !== xO['hs'][xD]) {
                                        let xJ = xO['hs'][xD];
                                        this['nV']?.['lz'](xz + xa + 0x1, xj + 0xa + xq, this['sb'](xJ), 0x0), this['nV']?.['lz'](xz + xa, xj + 0x9 + xq, this['sb'](xJ), 0xffff00);
                                    }
                                }
                            } else xO['hg'] && xD < 0x14 && xO['hg'][xD]?.['Zj'](xz, xj);
                            xD++;
                        }
                } else {
                    if (0x3 === xO['hP']) xO['hF'] ? Xu['ZK'](xM, xF, xO['ZR'], xO['Zc'], xO['c4']) : Xu['Zs'](xM, xF, xO['ZR'], xO['Zc'], xO['c4']);
                    else {
                        if (0x4 === xO['hP']) {
                            let {
                                hD: xV,
                                c4: xW,
                                hy: xS
                            } = xO;
                            if (this['L7'] !== xO['hH'] && this['L8'] !== xO['hH'] && this['L6'] !== xO['hH'] || 0x0 === xO['ha'] || (xW = xO['ha']), this['sU'](xO) && (xW = xO['hj'], xO['hz'] && xO['hz'][CN(0x2ea)] > 0x0 && (xS = xO['hz'])), 0x6 === xO['hp'] && this['LG'] && (xS = CN(0x166), xW = xO['c4']), !xV || !xS) continue;
                            for (let xi = xF + xV['Zc']; xS[CN(0x2ea)] > 0x0; xi += xV['Zc']) {
                                if (-0x1 !== xS[CN(0x269)]('%')) {
                                    for (;;) {
                                        let G2 = xS[CN(0x269)]('%1');
                                        if (-0x1 === G2) break;
                                        xS = xS[CN(0x250)](0x0, G2) + this['sB'](this['sm'](xO, 0x0)) + xS['substring'](G2 + 0x2);
                                    }
                                    for (;;) {
                                        let G3 = xS['indexOf']('%2');
                                        if (-0x1 === G3) break;
                                        xS = xS['substring'](0x0, G3) + this['sB'](this['sm'](xO, 0x1)) + xS[CN(0x250)](G3 + 0x2);
                                    }
                                    for (;;) {
                                        let G4 = xS[CN(0x269)]('%3');
                                        if (-0x1 === G4) break;
                                        xS = xS[CN(0x250)](0x0, G4) + this['sB'](this['sm'](xO, 0x2)) + xS[CN(0x250)](G4 + 0x2);
                                    }
                                    for (;;) {
                                        let G5 = xS['indexOf']('%4');
                                        if (-0x1 === G5) break;
                                        xS = xS[CN(0x250)](0x0, G5) + this['sB'](this['sm'](xO, 0x3)) + xS[CN(0x250)](G5 + 0x2);
                                    }
                                    for (;;) {
                                        let G6 = xS['indexOf']('%5');
                                        if (-0x1 === G6) break;
                                        xS = xS['substring'](0x0, G6) + this['sB'](this['sm'](xO, 0x4)) + xS[CN(0x250)](G6 + 0x2);
                                    }
                                }
                                let G0, G1 = xS[CN(0x269)]('\x5cn'); - 0x1 !== G1 ? (G0 = xS[CN(0x250)](0x0, G1), xS = xS['substring'](G1 + 0x2)) : (G0 = xS, xS = ''), xO['hO'] ? xV['lj'](xM + (xO['ZR'] / 0x2 | 0x0), xi, G0, xW, xO['hC']) : xV['lC'](xM, xi, G0, xW, xO['hC']);
                            }
                        } else {
                            if (0x5 === xO['hP']) {
                                let G7;
                                G7 = this['sU'](xO) ? xO['hT'] : xO['hq'], G7?.['Zj'](xM, xF);
                            } else {
                                if (0x6 === xO['hP']) {
                                    let G8 = XO['YY'],
                                        G9 = XO['Y5'];
                                    XO['YY'] = xM + (xO['ZR'] / 0x2 | 0x0), XO['Y5'] = xF + (xO['Zc'] / 0x2 | 0x0);
                                    let Go, GQ = XO['oy'][xO['hW']] * xO['hV'] >> 0x10,
                                        GZ = XO['Y3'][xO['hW']] * xO['hV'] >> 0x10,
                                        GY = this['sU'](xO);
                                    Go = GY ? xO['hJ'] : xO['RO'];
                                    let GE = null;
                                    if (-0x1 === Go) GE = xO['t2'](-0x1, -0x1, GY);
                                    else {
                                        let Gd = Xi['EI'][Go];
                                        Gd['t4'] && Gd['to'] && (GE = xO['t2'](Gd['t4'][xO['Hd']], Gd['to'][xO['Hd']], GY));
                                    }
                                    GE && GE['wA'](0x0, xO['hS'], 0x0, xO['hW'], 0x0, GQ, GZ), XO['YY'] = G8, XO['Y5'] = G9;
                                } else {
                                    if (0x7 === xO['hP']) {
                                        let Gw = xO['hD'];
                                        if (!Gw || !xO['he'] || !xO['hs']) continue;
                                        let GR = 0x0;
                                        for (let Gt = 0x0; Gt < xO['Zc']; Gt++)
                                            for (let Gc = 0x0; Gc < xO['ZR']; Gc++) {
                                                if (xO['he'][GR] > 0x0) {
                                                    let Gr = xc[CN(0x321)](xO['he'][GR] - 0x1),
                                                        GH = Gr['name'];
                                                    if ((Gr['pr'] || 0x1 !== xO['hs'][GR]) && (GH = GH + '\x20x' + this['sX'](xO['hs'][GR])), !GH) continue;
                                                    let GP = xM + Gc * (xO['hB'] + 0x73),
                                                        Gp = xF + Gt * (xO['hX'] + 0xc);
                                                    xO['hO'] ? Gw['lj'](GP + (xO['ZR'] / 0x2 | 0x0), Gp, GH, xO['c4'], xO['hC']) : Gw['lC'](GP, Gp, GH, xO['c4'], xO['hC']);
                                                }
                                                GR++;
                                            }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        Xu['ZU'](bI, bJ, bV, xG);
    }
}
export {
    xx as Client
};
