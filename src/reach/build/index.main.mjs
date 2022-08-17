// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  return {
    PhaseChangeEvents: {
      allPlayersConnected: [ctc0],
      playersConnected: [ctc0],
      readyStart: [ctc0, ctc0],
      winnersDetermined: [ctc0, ctc0]
      }
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc1
    });
  const ctc4 = stdlib.T_Data({
    None: ctc2,
    Some: ctc0
    });
  const map0_ctc = ctc3;
  
  const map1_ctc = ctc4;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
      7: [ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc2, ctc4]);
  return {
    mapDataTy: ctc5
    };
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc6 = stdlib.T_Tuple([ctc5]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    Player_getFingersAndGuess0_54: ctc6,
    Player_join0_54: ctc7
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  
  const v555 = stdlib.protect(ctc1, interact.lengthInBlocks, 'for Deployer\'s interact field lengthInBlocks');
  const v556 = stdlib.protect(ctc1, interact.maxPlayers, 'for Deployer\'s interact field maxPlayers');
  
  const txn1 = await (ctc.sendrecv({
    args: [v556, v555],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:48:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:48:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v560, v561], secs: v563, time: v562, didSend: v29, from: v559 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v560, v561], secs: v563, time: v562, didSend: v29, from: v559 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v559, v560, v561, v562],
    evt_cnt: 0,
    funcNum: 1,
    lct: v562,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:52:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v566, time: v565, didSend: v34, from: v564 } = txn2;
      
      ;
      const v569 = stdlib.safeAdd(v562, v561);
      
      null;
      const v571 = stdlib.checkedBigNumberify('./index.rsh:63:30:decimal', stdlib.UInt_max, '0');
      const v572 = stdlib.checkedBigNumberify('./index.rsh:63:27:decimal', stdlib.UInt_max, '0');
      const v573 = stdlib.checkedBigNumberify('./index.rsh:63:33:decimal', stdlib.UInt_max, '0');
      const v574 = false;
      const v575 = v565;
      
      if (await (async () => {
        const v585 = v574 ? false : true;
        
        return v585;})()) {
        const v592 = stdlib.safeAdd(v575, v569);
        sim_r.isHalt = false;
        }
      else {
        const v732 = stdlib.gt(v571, stdlib.checkedBigNumberify('./index.rsh:99:27:decimal', stdlib.UInt_max, '0'));
        if (v732) {
          null;
          const v733 = v571;
          const v734 = stdlib.checkedBigNumberify('./index.rsh:106:39:decimal', stdlib.UInt_max, '0');
          const v735 = v575;
          
          if (await (async () => {
            const v745 = stdlib.gt(v733, stdlib.checkedBigNumberify('./index.rsh:109:36:decimal', stdlib.UInt_max, '0'));
            
            return v745;})()) {
            const v752 = stdlib.safeAdd(v735, v569);
            sim_r.isHalt = false;
            }
          else {
            null;
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}
        else {
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v566, time: v565, didSend: v34, from: v564 } = txn2;
  ;
  const v567 = stdlib.addressEq(v559, v564);
  stdlib.assert(v567, {
    at: './index.rsh:52:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const v569 = stdlib.safeAdd(v562, v561);
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:55:26:application',
    fs: ['at ./index.rsh:55:26:application call to [unknown function] (defined at: ./index.rsh:55:26:function exp)', 'at ./index.rsh:55:26:application call to "liftedInteract" (defined at: ./index.rsh:55:26:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  null;
  let v571 = stdlib.checkedBigNumberify('./index.rsh:63:30:decimal', stdlib.UInt_max, '0');
  let v572 = stdlib.checkedBigNumberify('./index.rsh:63:27:decimal', stdlib.UInt_max, '0');
  let v573 = stdlib.checkedBigNumberify('./index.rsh:63:33:decimal', stdlib.UInt_max, '0');
  let v574 = false;
  let v575 = v565;
  
  while (await (async () => {
    const v585 = v574 ? false : true;
    
    return v585;})()) {
    const v592 = stdlib.safeAdd(v575, v569);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc8],
      timeoutAt: ['time', v592],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 7,
        out_tys: [ctc7],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v722], secs: v724, time: v723, didSend: v337, from: v721 } = txn4;
      undefined /* setApiDetails */;
      ;
      const v725 = null;
      await txn4.getOutput('Player_timeout', 'v725', ctc0, v725);
      const cv571 = v571;
      const cv572 = v572;
      const cv573 = v573;
      const cv574 = true;
      const cv575 = v723;
      
      v571 = cv571;
      v572 = cv572;
      v573 = cv573;
      v574 = cv574;
      v575 = cv575;
      
      continue;
      }
    else {
      const {data: [v631], secs: v633, time: v632, didSend: v230, from: v630 } = txn3;
      switch (v631[0]) {
        case 'Player_getFingersAndGuess0_54': {
          const v634 = v631[1];
          undefined /* setApiDetails */;
          ;
          const v641 = v634[stdlib.checkedBigNumberify('./index.rsh:79:10:spread', stdlib.UInt_max, '0')];
          const v642 = v641[stdlib.checkedBigNumberify('./index.rsh:81:8:array', stdlib.UInt_max, '0')];
          const v643 = v641[stdlib.checkedBigNumberify('./index.rsh:81:8:array', stdlib.UInt_max, '1')];
          const v644 = stdlib.ge(v642, stdlib.checkedBigNumberify('./index.rsh:82:26:decimal', stdlib.UInt_max, '1'));
          const v645 = stdlib.le(v642, stdlib.checkedBigNumberify('./index.rsh:82:42:decimal', stdlib.UInt_max, '5'));
          const v646 = v644 ? v645 : false;
          stdlib.assert(v646, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:82:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)'],
            msg: 'Throw between 1 - 5 fingers.',
            who: 'Deployer'
            });
          const v648 = stdlib.gt(v643, stdlib.checkedBigNumberify('./index.rsh:83:23:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v648, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:83:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)'],
            msg: 'Make a guess greater than 0.',
            who: 'Deployer'
            });
          const v651 = null;
          await txn3.getOutput('Player_getFingersAndGuess', 'v651', ctc0, v651);
          await stdlib.mapSet(map0, v630, v643);
          const v660 = stdlib.safeAdd(v573, stdlib.checkedBigNumberify('./index.rsh:90:40:decimal', stdlib.UInt_max, '1'));
          const v661 = stdlib.eq(v660, v560);
          const v662 = stdlib.safeAdd(v572, v642);
          const cv571 = v571;
          const cv572 = v662;
          const cv573 = v660;
          const cv574 = v661;
          const cv575 = v632;
          
          v571 = cv571;
          v572 = cv572;
          v573 = cv573;
          v574 = cv574;
          v575 = cv575;
          
          continue;
          break;
          }
        case 'Player_join0_54': {
          const v676 = v631[1];
          undefined /* setApiDetails */;
          ;
          await txn3.getOutput('Player_join', 'v560', ctc1, v560);
          await stdlib.mapSet(map0, v630, stdlib.checkedBigNumberify('./index.rsh:73:33:decimal', stdlib.UInt_max, '0'));
          const v715 = stdlib.safeAdd(v571, stdlib.checkedBigNumberify('./index.rsh:74:50:decimal', stdlib.UInt_max, '1'));
          null;
          const cv571 = v715;
          const cv572 = v572;
          const cv573 = v573;
          const cv574 = false;
          const cv575 = v632;
          
          v571 = cv571;
          v572 = cv572;
          v573 = cv573;
          v574 = cv574;
          v575 = cv575;
          
          continue;
          break;
          }
        }}
    
    }
  const v732 = stdlib.gt(v571, stdlib.checkedBigNumberify('./index.rsh:99:27:decimal', stdlib.UInt_max, '0'));
  if (v732) {
    null;
    let v733 = v571;
    let v734 = stdlib.checkedBigNumberify('./index.rsh:106:39:decimal', stdlib.UInt_max, '0');
    let v735 = v575;
    
    while (await (async () => {
      const v745 = stdlib.gt(v733, stdlib.checkedBigNumberify('./index.rsh:109:36:decimal', stdlib.UInt_max, '0'));
      
      return v745;})()) {
      const v752 = stdlib.safeAdd(v735, v569);
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc7],
        timeoutAt: ['time', v752],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 5,
          out_tys: [ctc7],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v796], secs: v798, time: v797, didSend: v519, from: v795 } = txn4;
        undefined /* setApiDetails */;
        ;
        const v799 = null;
        await txn4.getOutput('Player_timeout', 'v799', ctc0, v799);
        const cv733 = v733;
        const cv734 = v734;
        const cv735 = v797;
        
        v733 = cv733;
        v734 = cv734;
        v735 = cv735;
        
        continue;
        }
      else {
        const {data: [v766], secs: v768, time: v767, didSend: v446, from: v765 } = txn3;
        undefined /* setApiDetails */;
        ;
        const v770 = stdlib.le(v734, v571);
        stdlib.assert(v770, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:113:17:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:115:26:application call to [unknown function] (defined at: ./index.rsh:115:26:function exp)'],
          msg: 'No.',
          who: 'Deployer'
          });
        const v772 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v765), null);
        const v773 = stdlib.fromSome(v772, stdlib.checkedBigNumberify('./index.rsh:114:50:decimal', stdlib.UInt_max, '0'));
        const v774 = stdlib.gt(v773, stdlib.checkedBigNumberify('./index.rsh:114:56:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v774, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:114:17:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:115:26:application call to [unknown function] (defined at: ./index.rsh:115:26:function exp)'],
          msg: 'It doesn\'t look like you are playing this game.',
          who: 'Deployer'
          });
        const v776 = null;
        await txn3.getOutput('Player_checkWinner', 'v776', ctc0, v776);
        const v784 = stdlib.eq(v773, v572);
        const v785 = v784 ? stdlib.checkedBigNumberify('./index.rsh:118:40:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:118:44:decimal', stdlib.UInt_max, '0');
        if (v784) {
          await stdlib.mapSet(map1, v765, v765);
          await stdlib.mapSet(map0, v765, undefined /* Nothing */);
          const v786 = stdlib.safeSub(v733, stdlib.checkedBigNumberify('./index.rsh:126:42:decimal', stdlib.UInt_max, '1'));
          const v787 = stdlib.safeAdd(v734, v785);
          const cv733 = v786;
          const cv734 = v787;
          const cv735 = v767;
          
          v733 = cv733;
          v734 = cv734;
          v735 = cv735;
          
          continue;}
        else {
          await stdlib.mapSet(map0, v765, undefined /* Nothing */);
          const v789 = stdlib.safeSub(v733, stdlib.checkedBigNumberify('./index.rsh:126:42:decimal', stdlib.UInt_max, '1'));
          const v790 = stdlib.safeAdd(v734, v785);
          const cv733 = v789;
          const cv734 = v790;
          const cv735 = v767;
          
          v733 = cv733;
          v734 = cv734;
          v735 = cv735;
          
          continue;}}
      
      }
    null;
    return;
    }
  else {
    return;
    }
  
  
  
  };
export async function _Player_checkWinner5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_checkWinner5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_checkWinner5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v569, v571, v572, v733, v734, v752] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v754 = ctc.selfAddress();
  const v756 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:112:12:application call to [unknown function] (defined at: ./index.rsh:112:12:function exp)', 'at ./index.rsh:112:12:application call to [unknown function] (defined at: ./index.rsh:112:12:function exp)'],
    msg: 'in',
    who: 'Player_checkWinner'
    });
  const v757 = stdlib.le(v734, v571);
  stdlib.assert(v757, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:113:17:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:112:12:application call to [unknown function] (defined at: ./index.rsh:112:12:function exp)', 'at ./index.rsh:112:12:application call to [unknown function] (defined at: ./index.rsh:112:12:function exp)'],
    msg: 'No.',
    who: 'Player_checkWinner'
    });
  const v759 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v754), null);
  const v760 = stdlib.fromSome(v759, stdlib.checkedBigNumberify('./index.rsh:114:50:decimal', stdlib.UInt_max, '0'));
  const v761 = stdlib.gt(v760, stdlib.checkedBigNumberify('./index.rsh:114:56:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v761, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:114:17:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:112:12:application call to [unknown function] (defined at: ./index.rsh:112:12:function exp)', 'at ./index.rsh:112:12:application call to [unknown function] (defined at: ./index.rsh:112:12:function exp)'],
    msg: 'It doesn\'t look like you are playing this game.',
    who: 'Player_checkWinner'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v569, v571, v572, v733, v734, v752, v756],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:110:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v766], secs: v768, time: v767, didSend: v446, from: v765 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_checkWinner"
        });
      ;
      const v772 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v765), null);
      const v773 = stdlib.fromSome(v772, stdlib.checkedBigNumberify('./index.rsh:114:50:decimal', stdlib.UInt_max, '0'));
      const v776 = null;
      const v777 = await txn1.getOutput('Player_checkWinner', 'v776', ctc0, v776);
      
      const v784 = stdlib.eq(v773, v572);
      const v785 = v784 ? stdlib.checkedBigNumberify('./index.rsh:118:40:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:118:44:decimal', stdlib.UInt_max, '0');
      if (v784) {
        await stdlib.simMapSet(sim_r, 1, v765, v765);
        await stdlib.simMapSet(sim_r, 0, v765, undefined /* Nothing */);
        const v786 = stdlib.safeSub(v733, stdlib.checkedBigNumberify('./index.rsh:126:42:decimal', stdlib.UInt_max, '1'));
        const v787 = stdlib.safeAdd(v734, v785);
        const v1180 = v786;
        const v1181 = v787;
        const v1183 = stdlib.gt(v786, stdlib.checkedBigNumberify('./index.rsh:109:36:decimal', stdlib.UInt_max, '0'));
        if (v1183) {
          const v1184 = stdlib.safeAdd(v767, v569);
          sim_r.isHalt = false;
          }
        else {
          null;
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      else {
        await stdlib.simMapSet(sim_r, 0, v765, undefined /* Nothing */);
        const v789 = stdlib.safeSub(v733, stdlib.checkedBigNumberify('./index.rsh:126:42:decimal', stdlib.UInt_max, '1'));
        const v790 = stdlib.safeAdd(v734, v785);
        const v1185 = v789;
        const v1186 = v790;
        const v1188 = stdlib.gt(v789, stdlib.checkedBigNumberify('./index.rsh:109:36:decimal', stdlib.UInt_max, '0'));
        if (v1188) {
          const v1189 = stdlib.safeAdd(v767, v569);
          sim_r.isHalt = false;
          }
        else {
          null;
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v766], secs: v768, time: v767, didSend: v446, from: v765 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v770 = stdlib.le(v734, v571);
  stdlib.assert(v770, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:113:17:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:115:26:application call to [unknown function] (defined at: ./index.rsh:115:26:function exp)'],
    msg: 'No.',
    who: 'Player_checkWinner'
    });
  const v772 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v765), null);
  const v773 = stdlib.fromSome(v772, stdlib.checkedBigNumberify('./index.rsh:114:50:decimal', stdlib.UInt_max, '0'));
  const v774 = stdlib.gt(v773, stdlib.checkedBigNumberify('./index.rsh:114:56:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v774, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:114:17:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:115:26:application call to [unknown function] (defined at: ./index.rsh:115:26:function exp)'],
    msg: 'It doesn\'t look like you are playing this game.',
    who: 'Player_checkWinner'
    });
  const v776 = null;
  const v777 = await txn1.getOutput('Player_checkWinner', 'v776', ctc0, v776);
  if (v446) {
    stdlib.protect(ctc0, await interact.out(v766, v777), {
      at: './index.rsh:111:9:application',
      fs: ['at ./index.rsh:111:9:application call to [unknown function] (defined at: ./index.rsh:111:9:function exp)', 'at ./index.rsh:116:15:application call to "k" (defined at: ./index.rsh:115:26:function exp)', 'at ./index.rsh:115:26:application call to [unknown function] (defined at: ./index.rsh:115:26:function exp)'],
      msg: 'out',
      who: 'Player_checkWinner'
      });
    }
  else {
    }
  
  const v784 = stdlib.eq(v773, v572);
  const v785 = v784 ? stdlib.checkedBigNumberify('./index.rsh:118:40:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:118:44:decimal', stdlib.UInt_max, '0');
  if (v784) {
    await stdlib.mapSet(map1, v765, v765);
    await stdlib.mapSet(map0, v765, undefined /* Nothing */);
    const v786 = stdlib.safeSub(v733, stdlib.checkedBigNumberify('./index.rsh:126:42:decimal', stdlib.UInt_max, '1'));
    const v787 = stdlib.safeAdd(v734, v785);
    const v1180 = v786;
    const v1181 = v787;
    const v1183 = stdlib.gt(v786, stdlib.checkedBigNumberify('./index.rsh:109:36:decimal', stdlib.UInt_max, '0'));
    if (v1183) {
      const v1184 = stdlib.safeAdd(v767, v569);
      return;
      }
    else {
      null;
      return;
      }}
  else {
    await stdlib.mapSet(map0, v765, undefined /* Nothing */);
    const v789 = stdlib.safeSub(v733, stdlib.checkedBigNumberify('./index.rsh:126:42:decimal', stdlib.UInt_max, '1'));
    const v790 = stdlib.safeAdd(v734, v785);
    const v1185 = v789;
    const v1186 = v790;
    const v1188 = stdlib.gt(v789, stdlib.checkedBigNumberify('./index.rsh:109:36:decimal', stdlib.UInt_max, '0'));
    if (v1188) {
      const v1189 = stdlib.safeAdd(v767, v569);
      return;
      }
    else {
      null;
      return;
      }}
  
  
  };
export async function _Player_getFingersAndGuess7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_getFingersAndGuess7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_getFingersAndGuess7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc6 = stdlib.T_Tuple([ctc5]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    Player_getFingersAndGuess0_54: ctc6,
    Player_join0_54: ctc7
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v560, v569, v571, v572, v573, v592] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v606 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:81:26:application call to [unknown function] (defined at: ./index.rsh:81:26:function exp)', 'at ./index.rsh:63:17:application call to "runPlayer_getFingersAndGuess0_54" (defined at: ./index.rsh:79:10:function exp)', 'at ./index.rsh:63:17:application call to [unknown function] (defined at: ./index.rsh:63:17:function exp)'],
    msg: 'in',
    who: 'Player_getFingersAndGuess'
    });
  const v607 = v606[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v608 = v607[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v609 = v607[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v613 = stdlib.ge(v608, stdlib.checkedBigNumberify('./index.rsh:82:26:decimal', stdlib.UInt_max, '1'));
  const v614 = stdlib.le(v608, stdlib.checkedBigNumberify('./index.rsh:82:42:decimal', stdlib.UInt_max, '5'));
  const v615 = v613 ? v614 : false;
  stdlib.assert(v615, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:82:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:81:26:application call to [unknown function] (defined at: ./index.rsh:81:26:function exp)', 'at ./index.rsh:63:17:application call to "runPlayer_getFingersAndGuess0_54" (defined at: ./index.rsh:79:10:function exp)', 'at ./index.rsh:63:17:application call to [unknown function] (defined at: ./index.rsh:63:17:function exp)'],
    msg: 'Throw between 1 - 5 fingers.',
    who: 'Player_getFingersAndGuess'
    });
  const v617 = stdlib.gt(v609, stdlib.checkedBigNumberify('./index.rsh:83:23:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v617, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:83:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:81:26:application call to [unknown function] (defined at: ./index.rsh:81:26:function exp)', 'at ./index.rsh:63:17:application call to "runPlayer_getFingersAndGuess0_54" (defined at: ./index.rsh:79:10:function exp)', 'at ./index.rsh:63:17:application call to [unknown function] (defined at: ./index.rsh:63:17:function exp)'],
    msg: 'Make a guess greater than 0.',
    who: 'Player_getFingersAndGuess'
    });
  const v626 = ['Player_getFingersAndGuess0_54', v606];
  
  const txn1 = await (ctc.sendrecv({
    args: [v560, v569, v571, v572, v573, v592, v626],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:79:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v631], secs: v633, time: v632, didSend: v230, from: v630 } = txn1;
      
      switch (v631[0]) {
        case 'Player_getFingersAndGuess0_54': {
          const v634 = v631[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Player_getFingersAndGuess"
            });
          ;
          const v641 = v634[stdlib.checkedBigNumberify('./index.rsh:79:10:spread', stdlib.UInt_max, '0')];
          const v642 = v641[stdlib.checkedBigNumberify('./index.rsh:81:8:array', stdlib.UInt_max, '0')];
          const v643 = v641[stdlib.checkedBigNumberify('./index.rsh:81:8:array', stdlib.UInt_max, '1')];
          const v651 = null;
          const v652 = await txn1.getOutput('Player_getFingersAndGuess', 'v651', ctc0, v651);
          
          await stdlib.simMapSet(sim_r, 0, v630, v643);
          const v660 = stdlib.safeAdd(v573, stdlib.checkedBigNumberify('./index.rsh:90:40:decimal', stdlib.UInt_max, '1'));
          const v661 = stdlib.eq(v660, v560);
          const v662 = stdlib.safeAdd(v572, v642);
          const v1190 = v571;
          const v1191 = v662;
          const v1192 = v660;
          if (v661) {
            const v1197 = stdlib.gt(v571, stdlib.checkedBigNumberify('./index.rsh:99:27:decimal', stdlib.UInt_max, '0'));
            if (v1197) {
              null;
              const v1227 = v571;
              const v1228 = stdlib.checkedBigNumberify('./index.rsh:106:39:decimal', stdlib.UInt_max, '0');
              const v1231 = stdlib.safeAdd(v632, v569);
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            const v1196 = stdlib.safeAdd(v632, v569);
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Player_join0_54': {
          const v676 = v631[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v631], secs: v633, time: v632, didSend: v230, from: v630 } = txn1;
  switch (v631[0]) {
    case 'Player_getFingersAndGuess0_54': {
      const v634 = v631[1];
      undefined /* setApiDetails */;
      ;
      const v641 = v634[stdlib.checkedBigNumberify('./index.rsh:79:10:spread', stdlib.UInt_max, '0')];
      const v642 = v641[stdlib.checkedBigNumberify('./index.rsh:81:8:array', stdlib.UInt_max, '0')];
      const v643 = v641[stdlib.checkedBigNumberify('./index.rsh:81:8:array', stdlib.UInt_max, '1')];
      const v644 = stdlib.ge(v642, stdlib.checkedBigNumberify('./index.rsh:82:26:decimal', stdlib.UInt_max, '1'));
      const v645 = stdlib.le(v642, stdlib.checkedBigNumberify('./index.rsh:82:42:decimal', stdlib.UInt_max, '5'));
      const v646 = v644 ? v645 : false;
      stdlib.assert(v646, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:82:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)'],
        msg: 'Throw between 1 - 5 fingers.',
        who: 'Player_getFingersAndGuess'
        });
      const v648 = stdlib.gt(v643, stdlib.checkedBigNumberify('./index.rsh:83:23:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v648, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:83:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)'],
        msg: 'Make a guess greater than 0.',
        who: 'Player_getFingersAndGuess'
        });
      const v651 = null;
      const v652 = await txn1.getOutput('Player_getFingersAndGuess', 'v651', ctc0, v651);
      if (v230) {
        stdlib.protect(ctc0, await interact.out(v634, v652), {
          at: './index.rsh:80:7:application',
          fs: ['at ./index.rsh:80:7:application call to [unknown function] (defined at: ./index.rsh:80:7:function exp)', 'at ./index.rsh:88:12:application call to "k" (defined at: ./index.rsh:87:21:function exp)', 'at ./index.rsh:87:21:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)'],
          msg: 'out',
          who: 'Player_getFingersAndGuess'
          });
        }
      else {
        }
      
      await stdlib.mapSet(map0, v630, v643);
      const v660 = stdlib.safeAdd(v573, stdlib.checkedBigNumberify('./index.rsh:90:40:decimal', stdlib.UInt_max, '1'));
      const v661 = stdlib.eq(v660, v560);
      const v662 = stdlib.safeAdd(v572, v642);
      const v1190 = v571;
      const v1191 = v662;
      const v1192 = v660;
      if (v661) {
        const v1197 = stdlib.gt(v571, stdlib.checkedBigNumberify('./index.rsh:99:27:decimal', stdlib.UInt_max, '0'));
        if (v1197) {
          null;
          const v1227 = v571;
          const v1228 = stdlib.checkedBigNumberify('./index.rsh:106:39:decimal', stdlib.UInt_max, '0');
          const v1231 = stdlib.safeAdd(v632, v569);
          return;
          }
        else {
          return;
          }}
      else {
        const v1196 = stdlib.safeAdd(v632, v569);
        return;
        }
      break;
      }
    case 'Player_join0_54': {
      const v676 = v631[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Player_join7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_join7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_join7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc7 = stdlib.T_Tuple([ctc6]);
  const ctc8 = stdlib.T_Data({
    Player_getFingersAndGuess0_54: ctc7,
    Player_join0_54: ctc5
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v560, v569, v571, v572, v573, v592] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v596 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:69:10:application call to [unknown function] (defined at: ./index.rsh:69:10:function exp)', 'at ./index.rsh:63:17:application call to "runPlayer_join0_54" (defined at: ./index.rsh:67:10:function exp)', 'at ./index.rsh:63:17:application call to [unknown function] (defined at: ./index.rsh:63:17:function exp)'],
    msg: 'in',
    who: 'Player_join'
    });
  const v602 = ['Player_join0_54', v596];
  
  const txn1 = await (ctc.sendrecv({
    args: [v560, v569, v571, v572, v573, v592, v602],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:67:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v631], secs: v633, time: v632, didSend: v230, from: v630 } = txn1;
      
      switch (v631[0]) {
        case 'Player_getFingersAndGuess0_54': {
          const v634 = v631[1];
          
          break;
          }
        case 'Player_join0_54': {
          const v676 = v631[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Player_join"
            });
          ;
          const v710 = await txn1.getOutput('Player_join', 'v560', ctc1, v560);
          
          await stdlib.simMapSet(sim_r, 0, v630, stdlib.checkedBigNumberify('./index.rsh:73:33:decimal', stdlib.UInt_max, '0'));
          const v715 = stdlib.safeAdd(v571, stdlib.checkedBigNumberify('./index.rsh:74:50:decimal', stdlib.UInt_max, '1'));
          null;
          const v1316 = v715;
          const v1317 = v572;
          const v1318 = v573;
          const v1322 = stdlib.safeAdd(v632, v569);
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v631], secs: v633, time: v632, didSend: v230, from: v630 } = txn1;
  switch (v631[0]) {
    case 'Player_getFingersAndGuess0_54': {
      const v634 = v631[1];
      return;
      break;
      }
    case 'Player_join0_54': {
      const v676 = v631[1];
      undefined /* setApiDetails */;
      ;
      const v710 = await txn1.getOutput('Player_join', 'v560', ctc1, v560);
      if (v230) {
        stdlib.protect(ctc0, await interact.out(v676, v710), {
          at: './index.rsh:68:7:application',
          fs: ['at ./index.rsh:68:7:application call to [unknown function] (defined at: ./index.rsh:68:7:function exp)', 'at ./index.rsh:72:12:application call to "k" (defined at: ./index.rsh:71:21:function exp)', 'at ./index.rsh:71:21:application call to [unknown function] (defined at: ./index.rsh:71:21:function exp)'],
          msg: 'out',
          who: 'Player_join'
          });
        }
      else {
        }
      
      await stdlib.mapSet(map0, v630, stdlib.checkedBigNumberify('./index.rsh:73:33:decimal', stdlib.UInt_max, '0'));
      const v715 = stdlib.safeAdd(v571, stdlib.checkedBigNumberify('./index.rsh:74:50:decimal', stdlib.UInt_max, '1'));
      null;
      const v1316 = v715;
      const v1317 = v572;
      const v1318 = v573;
      const v1322 = stdlib.safeAdd(v632, v569);
      return;
      
      break;
      }
    }
  
  
  };
export async function _Player_timeout5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_timeout5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_timeout5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v569, v571, v572, v733, v734, v752] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v794 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:43:5:application',
    fs: ['at ./index.rsh:43:5:application call to [unknown function] (defined at: ./index.rsh:43:5:function exp)', 'at ./index.rsh:130:23:application call to "awaitPlayerApi" (defined at: ./index.rsh:42:36:function exp)', 'at ./index.rsh:129:43:application call to [unknown function] (defined at: ./index.rsh:129:43:function exp)'],
    msg: 'in',
    who: 'Player_timeout'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v569, v571, v572, v733, v734, v752, v794],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:43:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v796], secs: v798, time: v797, didSend: v519, from: v795 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_timeout"
        });
      ;
      const v799 = null;
      const v800 = await txn1.getOutput('Player_timeout', 'v799', ctc0, v799);
      
      const v1358 = v733;
      const v1359 = v734;
      const v1361 = stdlib.gt(v733, stdlib.checkedBigNumberify('./index.rsh:109:36:decimal', stdlib.UInt_max, '0'));
      if (v1361) {
        const v1362 = stdlib.safeAdd(v797, v569);
        sim_r.isHalt = false;
        }
      else {
        null;
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v796], secs: v798, time: v797, didSend: v519, from: v795 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v799 = null;
  const v800 = await txn1.getOutput('Player_timeout', 'v799', ctc0, v799);
  stdlib.protect(ctc0, await interact.out(v796, v800), {
    at: './index.rsh:43:5:application',
    fs: ['at ./index.rsh:43:5:application call to [unknown function] (defined at: ./index.rsh:43:5:function exp)', 'at ./index.rsh:44:6:application call to "k" (defined at: ./index.rsh:43:5:function exp)', 'at ./index.rsh:130:23:application call to "awaitPlayerApi" (defined at: ./index.rsh:42:36:function exp)', 'at ./index.rsh:129:43:application call to [unknown function] (defined at: ./index.rsh:129:43:function exp)'],
    msg: 'out',
    who: 'Player_timeout'
    });
  
  const v1358 = v733;
  const v1359 = v734;
  const v1361 = stdlib.gt(v733, stdlib.checkedBigNumberify('./index.rsh:109:36:decimal', stdlib.UInt_max, '0'));
  if (v1361) {
    const v1362 = stdlib.safeAdd(v797, v569);
    return;
    }
  else {
    null;
    return;
    }
  
  
  };
export async function _Player_timeout7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_timeout7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_timeout7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v560, v569, v571, v572, v573, v592] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v720 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:43:5:application',
    fs: ['at ./index.rsh:43:5:application call to [unknown function] (defined at: ./index.rsh:43:5:function exp)', 'at ./index.rsh:95:21:application call to "awaitPlayerApi" (defined at: ./index.rsh:42:36:function exp)', 'at ./index.rsh:94:41:application call to [unknown function] (defined at: ./index.rsh:94:41:function exp)'],
    msg: 'in',
    who: 'Player_timeout'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v560, v569, v571, v572, v573, v592, v720],
    evt_cnt: 1,
    funcNum: 7,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:43:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v722], secs: v724, time: v723, didSend: v337, from: v721 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_timeout"
        });
      ;
      const v725 = null;
      const v726 = await txn1.getOutput('Player_timeout', 'v725', ctc0, v725);
      
      const v1363 = v571;
      const v1364 = v572;
      const v1370 = stdlib.gt(v571, stdlib.checkedBigNumberify('./index.rsh:99:27:decimal', stdlib.UInt_max, '0'));
      if (v1370) {
        null;
        const v1400 = v571;
        const v1401 = stdlib.checkedBigNumberify('./index.rsh:106:39:decimal', stdlib.UInt_max, '0');
        const v1404 = stdlib.safeAdd(v723, v569);
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v722], secs: v724, time: v723, didSend: v337, from: v721 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v725 = null;
  const v726 = await txn1.getOutput('Player_timeout', 'v725', ctc0, v725);
  stdlib.protect(ctc0, await interact.out(v722, v726), {
    at: './index.rsh:43:5:application',
    fs: ['at ./index.rsh:43:5:application call to [unknown function] (defined at: ./index.rsh:43:5:function exp)', 'at ./index.rsh:44:6:application call to "k" (defined at: ./index.rsh:43:5:function exp)', 'at ./index.rsh:95:21:application call to "awaitPlayerApi" (defined at: ./index.rsh:42:36:function exp)', 'at ./index.rsh:94:41:application call to [unknown function] (defined at: ./index.rsh:94:41:function exp)'],
    msg: 'out',
    who: 'Player_timeout'
    });
  
  const v1363 = v571;
  const v1364 = v572;
  const v1370 = stdlib.gt(v571, stdlib.checkedBigNumberify('./index.rsh:99:27:decimal', stdlib.UInt_max, '0'));
  if (v1370) {
    null;
    const v1400 = v571;
    const v1401 = stdlib.checkedBigNumberify('./index.rsh:106:39:decimal', stdlib.UInt_max, '0');
    const v1404 = stdlib.safeAdd(v723, v569);
    return;
    }
  else {
    return;
    }
  
  
  };
export async function Player_checkWinner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player_checkWinner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player_checkWinner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Player_checkWinner5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Player_getFingersAndGuess(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player_getFingersAndGuess expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player_getFingersAndGuess expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Player_getFingersAndGuess7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Player_join(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player_join expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player_join expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Player_join7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Player_timeout(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player_timeout expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player_timeout expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Player_timeout5(ctcTop, interact);}
  if (step == 7) {return _Player_timeout7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Player_checkWinner()byte[0]`, `Player_getFingersAndGuess((uint64,uint64))byte[0]`, `Player_join()uint64`, `Player_timeout()byte[0]`, `_Player_timeout5()byte[0]`, `_Player_timeout7()byte[0]`],
    pure: [],
    sigs: [`Player_checkWinner()byte[0]`, `Player_getFingersAndGuess((uint64,uint64))byte[0]`, `Player_join()uint64`, `Player_timeout()byte[0]`, `_Player_timeout5()byte[0]`, `_Player_timeout7()byte[0]`]
    },
  appApproval: `BiAQAAEIBwUQKCAYKt77ocYLx8TOgQ3hydv2DsrD04wDmeDvkgkJJgMBAAABASI1ADEYQQUwKWRJIls1ASRbNQIxGSMSQQAKMQAoIQmvZkIE/TYaABdJQQB/IjUEIzUGSSEKDEAAJkkhCwxAABdJIQwMQAAIIQwSRClCAkUhCxJEKUIAeCEKEkQpQgHQSSENDEAAMkkhDgxAABIhDhJEKTX/KjT/UCEFr1BCAKghDRJENAFJJQxAAAYlEkRC/8IhBBJEQv/DgbeAmm4SRDYaATX/KDT/UEIAfDYaAhc1BDYaAzYaARdJIQQMQAHHSYEGDEABaEklDEAAWiUSRCU0ARJENARJIhJMNAISEUQoZDUDSTUFNf+ABNyqJt40/1CwMgY0AyEGWw9EgAgAAAAAAAAC1bApNQc0AyJbNAMkWzQDIQVbNAMhCFs0AyEHWyMyBkIDBkglNAESRDQESSISTDQCEhFEKGRJNQNJSkkiWzX/JFs1/iEFWzX9IQhbNfwhB1s1+0k1BTX6gAQUMgHCNPpQsDIGNAMhBlsMRDT6IlVAAGc0+lcBEDX5NPlJNfgiWzX3NPgkWzX2NPcjDzT3IQQOEEQ09iINRIAIAAAAAAAAAouwKTUHMQAoMQCIA6UqNPYWUDX1VwkhNPVMUGY0+yMINfU0/zT+NP00/DT3CDT1STT/EjIGQgJQgAgAAAAAAAACMDT/FlCwNP8WNQcxACgxAIgDXoAJAQAAAAAAAAAANflXCSE0+UxQZjT9Iwg1+YAEKgsSmjT5FlCwNP80/jT5NPw0+yIyBkIB/kghBDQBEkQ0BEkiEkw0AhIRRChkNQNJNQU1/4AEaJJkYzT/ULAyBjQDIQZbD0SACAAAAAAAAAMfsCk1BzQDIls0AyRbNAMhBVs0AyEIWzQDIQdbMgZCAgxJIwxAAU1JgQQMQADwSCEENAESRDQESSISTDQCEhFEKGRJNQNJSkkiWzX/JFs1/iEFWzX9IQhbNfwhB1s1+0k1BTX6gATU4BgtNPpQsDIGNAMhBlsMRDT7NP4ORCIxAIgCblcACUk1+CNbNPgiVU1JNfkiDUSACAAAAAAAAAMIsCk1BzT5NP0SNfgiIzT4TTX3NPhBAD4xACgxAIgCMioxAFA19lcACTT2UGYxACgxAIgCHSEPrzX2VwkhNPZMUGY0/zT+NP00/CMJNPs09wgyBkIBODEAKDEAiAH0IQ+vNfZXCSE09kxQZjT/NP40/TT8Iwk0+zT3CDIGQgEPIxJEIzQBEkQ0BEkiEkw0AhIRRChkSTUDIQdbNf+ABJqLkXSwNANXACAxABJENAOBMFs0AyEGWwg1/oAE5m5I1jT/FlA0/hZQsDT/NP4iIiIiMgZCAFNIgaCNBogBhCI0ARJENARJIhJMNAISEURJNQVJIls1/yRbNf6ABKzRH8M0/xZQNP4WULAxADT/FlA0/hZQMgYWUChLAVcAOGdIIzUBMgY1AkIA2DX/Nf41/TX8Nfs1+jX5NP5BACM0+yINQQAZgARrYQB7NPsWULA0+jT7NPw0+yI0/0IAM0IAhjT/NPoINfg0+RY0+hZQNPsWUDT8FlA0/RZQNPgWUChLAVcAMGdIJTUBMgY1AkIAcjX/Nf41/TX8Nfs1+jT9Ig1BADE0/zT6CDX5NPoWNPsWUDT8FlA0/RZQNP4WUDT5FlAoSwFXADBnSCEENQEyBjUCQgAugATDR+NWNP4WUDT8FlCwQgAAMRkhBBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIECMTUSRCIxNhJEIzE3EkQiNQEiNQJC/65JMRhhQAAFSCEJr4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 42,
  stateKeys: 1,
  stateSize: 56,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v560",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v561",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "PhaseChangeEvents_allPlayersConnected",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "PhaseChangeEvents_playersConnected",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v1",
        "type": "uint256"
      }
    ],
    "name": "PhaseChangeEvents_readyStart",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v1",
        "type": "uint256"
      }
    ],
    "name": "PhaseChangeEvents_winnersDetermined",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v560",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v561",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v766",
                "type": "bool"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v796",
                "type": "bool"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T22",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "uint256",
                            "name": "elem0",
                            "type": "uint256"
                          },
                          {
                            "internalType": "uint256",
                            "name": "elem1",
                            "type": "uint256"
                          }
                        ],
                        "internalType": "struct T20",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T21",
                    "name": "_Player_getFingersAndGuess0_54",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Player_join0_54",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T22",
                "name": "v631",
                "type": "tuple"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v722",
                "type": "bool"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v560",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v651",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v725",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v776",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v799",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Player_checkWinner",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "internalType": "struct T20",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "Player_getFingersAndGuess",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Player_join",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Player_timeout",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_Player_timeout5",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_Player_timeout7",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap1Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "address payable",
            "name": "_Some",
            "type": "address"
          }
        ],
        "internalType": "struct T1",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v766",
                "type": "bool"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v796",
                "type": "bool"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T22",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "uint256",
                            "name": "elem0",
                            "type": "uint256"
                          },
                          {
                            "internalType": "uint256",
                            "name": "elem1",
                            "type": "uint256"
                          }
                        ],
                        "internalType": "struct T20",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T21",
                    "name": "_Player_getFingersAndGuess0_54",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Player_join0_54",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T22",
                "name": "v631",
                "type": "tuple"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v722",
                "type": "bool"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200237a3803806200237a83398101604081905262000026916200024a565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a16200008b3415600762000143565b620000c0604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b33808252602083810180515182850190815290518201516040808601918252436060808801828152600160008190559290925582519586019690965292519084015251928201929092529051608082015260a001604051602081830303815290604052600290805190602001906200013a9291906200016d565b505050620002e7565b81620001695760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017b90620002aa565b90600052602060002090601f0160209004810192826200019f5760008555620001ea565b82601f10620001ba57805160ff1916838001178555620001ea565b82800160010185558215620001ea579182015b82811115620001ea578251825591602001919060010190620001cd565b50620001f8929150620001fc565b5090565b5b80821115620001f85760008155600101620001fd565b604080519081016001600160401b03811182821017156200024457634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200025e57600080fd5b6200026862000213565b835181526040601f19830112156200027f57600080fd5b6200028962000213565b60208581015182526040909501518582015293810193909352509092915050565b600181811c90821680620002bf57607f821691505b60208210811415620002e157634e487b7160e01b600052602260045260246000fd5b50919050565b61208380620002f76000396000f3fe6080604052600436106100eb5760003560e01c8063ab53f2c611610084578063c855f5d011610056578063c855f5d01461020f578063cadc2e7a14610217578063d919d05214610244578063dc0c8a841461024c57005b8063ab53f2c6146101be578063ad9fa3d8146101e1578063b4962bff146101f4578063bdd2611d1461020757005b80635470c0d6116100bd5780635470c0d61461017057806383230757146101835780638f3c54f414610198578063a98bf223146101ab57005b80631e93b0f1146100f4578063218e6383146101185780632c10a159146101305780633bc5b7bf1461014357005b366100f257005b005b34801561010057600080fd5b506003545b6040519081526020015b60405180910390f35b610120610254565b604051901515815260200161010f565b6100f261013e3660046119c3565b610283565b34801561014f57600080fd5b5061016361015e3660046119fb565b6102a7565b60405161010f9190611a4c565b61012061017e366004611b45565b6102d3565b34801561018f57600080fd5b50600154610105565b6100f26101a63660046119c3565b61030d565b6100f26101b93660046119c3565b61032d565b3480156101ca57600080fd5b506101d361034d565b60405161010f929190611b61565b6100f26101ef3660046119c3565b6103ea565b6100f2610202366004611bbe565b61040a565b61012061042a565b610105610456565b34801561022357600080fd5b506102376102323660046119fb565b610486565b60405161010f9190611bd0565b6101206104ac565b61012061058b565b600061025e611717565b60208101516000905261026f611746565b61027982826105ba565b6080015192915050565b61028b611746565b6102a361029d36849003840184611c16565b82610770565b5050565b60408051606081018252600080825260208201819052918101919091526102cd8261096d565b92915050565b60006102dd61177b565b602081810180515160009052515101518390526102f8611746565b6103028282610a3f565b602001519392505050565b610315611746565b6102a361032736849003840184611cfd565b82610deb565b610335611746565b6102a361034736849003840184611cfd565b82610fab565b60006060600054600280805461036290611d19565b80601f016020809104026020016040519081016040528092919081815260200182805461038e90611d19565b80156103db5780601f106103b0576101008083540402835291602001916103db565b820191906000526020600020905b8154815290600101906020018083116103be57829003601f168201915b50505050509050915091509091565b6103f2611746565b6102a361040436849003840184611cfd565b826105ba565b610412611746565b6102a361042436849003840184611d4e565b82610a3f565b6000610434611717565b602081015160009052610445611746565b61044f8282610fab565b5192915050565b600061046061177b565b60208101515160019052610472611746565b61047c8282610a3f565b6040015192915050565b60408051606081018252600080825260208201819052918101919091526102cd826112f6565b60008054600514806104c057506000546007145b6104c957600080fd5b6000546005141561053d57306001600160a01b031663218e63836040518163ffffffff1660e01b81526004016020604051808303816000875af1158015610514573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105389190611dfe565b905090565b6000546007141561058857306001600160a01b031663dc0c8a846040518163ffffffff1660e01b81526004016020604051808303816000875af1158015610514573d6000803e3d6000fd5b90565b6000610595611717565b6020810151600090526105a6611746565b6105b08282610deb565b60a0015192915050565b6105ca60056000541460136113c2565b81516105e59015806105de57508251600154145b60146113c2565b6000808055600280546105f790611d19565b80601f016020809104026020016040519081016040528092919081815260200182805461062390611d19565b80156106705780601f1061064557610100808354040283529160200191610670565b820191906000526020600020905b81548152906001019060200180831161065357829003601f168201915b50505050508060200190518101906106889190611ea3565b905061069c8160a0015143101560156113c2565b7f663356c9bc60432e38c96f881aa1e2828a9a5648f65169c66c8c7722e9c2136533846040516106cd929190611ebf565b60405180910390a16106e1341560126113c2565b604051600081527ff0619a418e90484a92c8e1d291420cbe781797f0ba0854cbafe3bf6d148078b79060200160405180910390a160006060830152610724611795565b8151815152602080830151825182015260408084015183518201526060840151828401805191909152608085015181519093019290925290514391015261076a816113e8565b50505050565b610780600160005414600a6113c2565b815161079b90158061079457508251600154145b600b6113c2565b6000808055600280546107ad90611d19565b80601f01602080910402602001604051908101604052809291908181526020018280546107d990611d19565b80156108265780601f106107fb57610100808354040283529160200191610826565b820191906000526020600020905b81548152906001019060200180831161080957829003601f168201915b505050505080602001905181019061083e9190611ee9565b90506108566040518060200160405280600081525090565b60408051338152855160208083019190915286015115158183015290517f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f19181900360600190a16108a9341560086113c2565b81516108c1906001600160a01b0316331460096113c2565b6108d382606001518360400151611519565b80825260208301516040517f7916709a3710e7c637081647f52452f4ef438050f52e54cb29bae3a536505bab92610911928252602082015260400190565b60405180910390a16109216117ed565b60208084015182515282518251820152818101805160009081905281519092018290528051604001829052805160600191909152514360809091015261096681611566565b5050505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156109b9576109b9611a18565b1415610a30576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156109fa576109fa611a18565b6001811115610a0b57610a0b611a18565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b610a4f600760005414601a6113c2565b8151610a6a901580610a6357508251600154145b601b6113c2565b600080805560028054610a7c90611d19565b80601f0160208091040260200160405190810160405280929190818152602001828054610aa890611d19565b8015610af55780601f10610aca57610100808354040283529160200191610af5565b820191906000526020600020905b815481529060010190602001808311610ad857829003601f168201915b5050505050806020019051810190610b0d9190611ea3565b9050610b17611843565b610b288260a001514310601c6113c2565b7fe927a20f323a24ad688dbce80777a324e5de6d863bd7f0373f7e1b034f37a3083385604051610b59929190611f66565b60405180910390a16000602085015151516001811115610b7b57610b7b611a18565b1415610cb9576020808501515101518152610b98341560166113c2565b80515151610bbf9060011115610baf576000610bb8565b81515151600510155b60176113c2565b80515160200151610bd390151560186113c2565b604051600081527fbca24be27471fea1ae13fe10882466be83e66c1c4096c1ba7e2e89f05020d0619060200160405180910390a160006020848101829052338252600481526040909120805460ff19166001908117825583515190920151908201556080830151610c4391611519565b6020820152610c506117ed565b8251815152602080840151825182015260408401519082015152606083015182515151610c7d9190611519565b602080830180518201929092528301805182516040015284519051825191146060909101525143608090910152610cb381611566565b5061076a565b6001602085015151516001811115610cd357610cd3611a18565b141561076a57610ce5341560196113c2565b81516040519081527fe83d02c2d625f4f7d14fcc2b21153c0c4a32146bd44a3d50320d84d2db212e339060200160405180910390a181516040848101919091523360009081526004602052818120805460ff1916600190811782559081019190915590830151610d5491611519565b6040828101829052519081527f0abd40ba3f3f319bd8815626bd9599596392856c3a79eccfd7d253f7ca90969c9060200160405180910390a1610d956117ed565b8251815152602080840151825182015260408084015182840180519190915260608087015182519094019390935260808087015182519093019290925280516000930192909252905143910152610cb381611566565b610dfb600760005414601e6113c2565b8151610e16901580610e0f57508251600154145b601f6113c2565b600080805560028054610e2890611d19565b80601f0160208091040260200160405190810160405280929190818152602001828054610e5490611d19565b8015610ea15780601f10610e7657610100808354040283529160200191610ea1565b820191906000526020600020905b815481529060010190602001808311610e8457829003601f168201915b5050505050806020019051810190610eb99190611ea3565b9050610ecd8160a0015143101560206113c2565b7f4e3b66664dfaa8eec55d3e4b5320be5906866b0f0eff2c9c5b88206afe3bdf8d3384604051610efe929190611ebf565b60405180910390a1610f123415601d6113c2565b604051600081527fab14692b15badf3f0d909c2faece3316b3f776c61efa62bcc6d124c04c6788c79060200160405180910390a160006060830152610f556117ed565b815181515260208083015182518201526040808401518284018051919091526060808601518251909401939093526080808601518251909301929092528051600193019290925290514391015261076a81611566565b610fbb600560005414600f6113c2565b8151610fd6901580610fcf57508251600154145b60106113c2565b600080805560028054610fe890611d19565b80601f016020809104026020016040519081016040528092919081815260200182805461101490611d19565b80156110615780601f1061103657610100808354040283529160200191611061565b820191906000526020600020905b81548152906001019060200180831161104457829003601f168201915b50505050508060200190518101906110799190611ea3565b90506110a1604051806060016040528060008152602001600015158152602001600081525090565b6110b28260a00151431060116113c2565b7f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b9433856040516110e3929190611ebf565b60405180910390a16110f73415600c6113c2565b61110d826020015183608001511115600d6113c2565b60016111183361096d565b51600181111561112a5761112a611a18565b14611136576000611144565b61113f3361096d565b604001515b808252611154901515600e6113c2565b604051600081527f700765c9b2e3fe5801e84760449c72c66c2ff966c6861158b31b6a0c0c3f15739060200160405180910390a1600083526040820151815114602082018190526111a65760006111a9565b60015b604082015260208101511561126c573360008181526005602090815260408083208054600161ff01600160b01b031990911662010000909602959095178517905560049091528120805461ffff1916815590910155611206611795565b825181515260208084015182519091015260408084015182519091015260608301516112339060016116c8565b6020820151526080830151604083015161124d9190611519565b60208083018051909101919091525143604090910152610cb3816113e8565b336000908152600460205260408120805461ffff1916815560010155611290611795565b825181515260208084015182519091015260408084015182519091015260608301516112bd9060016116c8565b602082015152608083015160408301516112d79190611519565b60208083018051909101919091525143604090910152610966816113e8565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff16600181111561134257611342611a18565b1415610a30576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff16600181111561138357611383611a18565b600181111561139457611394611a18565b81529054610100810460ff16151560208301526201000090046001600160a01b031660409091015292915050565b816102a35760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516020810190915260008152602082015151156114b1576020820151604001518251516114189190611519565b81526040805160c08101825260008082526020808301828152838501838152606085018481526080860185815260a087018681528a515188528a518601519094528951880151909252888401805151909152518301519052855190526005909155436001559151909161148d91839101611fc5565b6040516020818303038152906040526002908051906020019061076a929190611882565b7fa8f707cda96d6d39b4ce858c9345fda6bb9db23501f23c2dcc27b3dba8ec90018260200151602001518360000151604001516040516114fb929190918252602082015260400190565b60405180910390a1600080805560018190556102a390600290611906565b600082611526838261201e565b91508110156102cd5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016113df565b60408051602081019091526000815281602001516060015115611638576020820151511561162257602082810151516040519081527f8b2b0554b6836c78c3aa7080ee8f6c3edcb4047abf1d244daaa34ab0a3fc8c35910160405180910390a16115ce611795565b8251602090810151825152808401805151835183015280518201518351604090810191909152815151848401805191909152805160009401939093529051608001519151015261161d816113e8565b505050565b600080805560018190556102a390600290611906565b611652826020015160800151836000015160200151611519565b81526040805160c08101825260008082526020808301828152838501838152606085018481526080860185815260a087018681528a515188528a51860151909452898501805151909352825185015190915290518601519052855190526007909155436001559151909161148d91839101611fc5565b6000826116d58382612036565b91508111156102cd5760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b60448201526064016113df565b60405180604001604052806000815260200161174160405180602001604052806000151581525090565b905290565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915290565b604051806040016040528060008152602001611741611943565b60405180604001604052806117c460405180606001604052806000815260200160008152602001600081525090565b815260200161174160405180606001604052806000815260200160008152602001600081525090565b604080516080810182526000918101828152606082019290925290819081526020016117416040518060a00160405280600081526020016000815260200160008152602001600015158152602001600081525090565b604051806060016040528061186e604080516060810182526000602082018181529282015290815290565b815260200160008152602001600081525090565b82805461188e90611d19565b90600052602060002090601f0160209004810192826118b057600085556118f6565b82601f106118c957805160ff19168380011785556118f6565b828001600101855582156118f6579182015b828111156118f65782518255916020019190600101906118db565b50611902929150611956565b5090565b50805461191290611d19565b6000825580601f10611922575050565b601f0160209004906000526020600020908101906119409190611956565b50565b604051806020016040528061174161196b565b5b808211156119025760008155600101611957565b6040805160608101909152806000815260200161199e604080516060810182526000602082018181529282015290815290565b8152600060209091015290565b6000604082840312156119bd57600080fd5b50919050565b6000604082840312156119d557600080fd5b6119df83836119ab565b9392505050565b6001600160a01b038116811461194057600080fd5b600060208284031215611a0d57600080fd5b81356119df816119e6565b634e487b7160e01b600052602160045260246000fd5b6002811061194057634e487b7160e01b600052602160045260246000fd5b81516060820190611a5c81611a2e565b808352506020830151151560208301526040830151604083015292915050565b6040805190810167ffffffffffffffff81118282101715611aad57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff81118282101715611aad57634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715611aad57634e487b7160e01b600052604160045260246000fd5b600060408284031215611b2757600080fd5b611b2f611a7c565b9050813581526020820135602082015292915050565b600060408284031215611b5757600080fd5b6119df8383611b15565b82815260006020604081840152835180604085015260005b81811015611b9557858101830151858201606001528201611b79565b81811115611ba7576000606083870101525b50601f01601f191692909201606001949350505050565b600060a082840312156119bd57600080fd5b81516060820190611be081611a2e565b82526020838101511515908301526040928301516001600160a01b0316929091019190915290565b801515811461194057600080fd5b600060408284031215611c2857600080fd5b6040516040810181811067ffffffffffffffff82111715611c5957634e487b7160e01b600052604160045260246000fd5b604052823581526020830135611c6e81611c08565b60208201529392505050565b60008183036040811215611c8d57600080fd5b611c95611a7c565b8335815291506020601f1982011215611cad57600080fd5b506040516020810181811067ffffffffffffffff82111715611cdf57634e487b7160e01b600052604160045260246000fd5b6040526020830135611cf081611c08565b8152602082015292915050565b600060408284031215611d0f57600080fd5b6119df8383611c7a565b600181811c90821680611d2d57607f821691505b602082108114156119bd57634e487b7160e01b600052602260045260246000fd5b600081830360a0811215611d6157600080fd5b611d69611a7c565b833581526080601f1983011215611d7f57600080fd5b611d87611ab3565b611d8f611ae4565b602086013560028110611da157600080fd5b81526040603f1985011215611db557600080fd5b611dbd611ab3565b9350611dcc8760408801611b15565b845283602082015260808601359350611de484611c08565b604081019390935291825260208101919091529392505050565b600060208284031215611e1057600080fd5b81516119df81611c08565b600060c08284031215611e2d57600080fd5b60405160c0810181811067ffffffffffffffff82111715611e5e57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a08201525092915050565b600060c08284031215611eb557600080fd5b6119df8383611e1b565b6001600160a01b0383168152606081016119df602083018480518252602090810151511515910152565b600060808284031215611efb57600080fd5b6040516080810181811067ffffffffffffffff82111715611f2c57634e487b7160e01b600052604160045260246000fd5b6040528251611f3a816119e6565b808252506020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b0383168152815160208083019190915282015151805160c083019190611f9281611a2e565b806040850152506020810151518051606085015260208101516080850152506040810151151560a0840152509392505050565b60c081016102cd8284805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a08301525050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561203157612031612008565b500190565b60008282101561204857612048612008565b50039056fea2646970667358221220a6dad97b4fdef4c94c7223914c45a03b24e72aeeccf236ddc601c4cf69f98fd964736f6c634300080c0033`,
  BytecodeLen: 9082,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:50:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:137:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:106:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:137:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:63:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Deployer": Deployer,
  "Player_checkWinner": Player_checkWinner,
  "Player_getFingersAndGuess": Player_getFingersAndGuess,
  "Player_join": Player_join,
  "Player_timeout": Player_timeout
  };
export const _APIs = {
  Player: {
    checkWinner: Player_checkWinner,
    getFingersAndGuess: Player_getFingersAndGuess,
    join: Player_join,
    timeout: Player_timeout
    }
  };
