const a0_0x2b93ab=a0_0x1d3e;function a0_0x1d3e(_0xb10d1,_0x5b124b){const _0x1f0be6=a0_0x1f0b();return a0_0x1d3e=function(_0x1d3ec7,_0x4d189b){_0x1d3ec7=_0x1d3ec7-0x16c;let _0x30c907=_0x1f0be6[_0x1d3ec7];return _0x30c907;},a0_0x1d3e(_0xb10d1,_0x5b124b);}(function(_0x3f85c1,_0x4129d0){const _0x37e9de=a0_0x1d3e,_0xb18568=_0x3f85c1();while(!![]){try{const _0x305cc1=-parseInt(_0x37e9de(0x1a1))/0x1*(-parseInt(_0x37e9de(0x186))/0x2)+-parseInt(_0x37e9de(0x16c))/0x3+-parseInt(_0x37e9de(0x1e9))/0x4+parseInt(_0x37e9de(0x1d8))/0x5+-parseInt(_0x37e9de(0x1b7))/0x6*(-parseInt(_0x37e9de(0x1da))/0x7)+parseInt(_0x37e9de(0x1c1))/0x8+parseInt(_0x37e9de(0x17c))/0x9*(parseInt(_0x37e9de(0x19a))/0xa);if(_0x305cc1===_0x4129d0)break;else _0xb18568['push'](_0xb18568['shift']());}catch(_0x5375a4){_0xb18568['push'](_0xb18568['shift']());}}}(a0_0x1f0b,0x4a815));const fs=require('fs')[a0_0x2b93ab(0x1d1)],fss=require('fs'),path=require(a0_0x2b93ab(0x172)),{default:makeWASocket,useMultiFileAuthState,DisconnectReason,fetchLatestBaileysVersion,makeCacheableSignalKeyStore,makeInMemoryStore}=require(a0_0x2b93ab(0x1bd)),{Boom}=require(a0_0x2b93ab(0x1a3)),pino=require(a0_0x2b93ab(0x1cf)),NodeCache=require(a0_0x2b93ab(0x1c3)),chalk=require(a0_0x2b93ab(0x1d5)),axios=require(a0_0x2b93ab(0x176)),{setupAntidelete}=require(a0_0x2b93ab(0x19c)),antilinkCommand=require('../Commands/Bot/antilink'),chatbotModule=require(a0_0x2b93ab(0x1c7)),{kordMsg}=require('../Plugin/kordMsg'),{initializeKordEvents}=require(a0_0x2b93ab(0x1d3)),{loadCommands}=require(a0_0x2b93ab(0x196)),{againstEventManager}=require('../Plugin/kordEventHandle'),SQLiteMessageStore=require(a0_0x2b93ab(0x1ca)),SESSION_DIR=path[a0_0x2b93ab(0x1ec)](__dirname,'..',a0_0x2b93ab(0x16d)),STORE_FILE_PATH=path[a0_0x2b93ab(0x1ec)](__dirname,'..','store.json'),LOGGER=pino({'level':process[a0_0x2b93ab(0x18c)][a0_0x2b93ab(0x1a2)]||'silent'}),MSG_RETRY_CACHE=new NodeCache();let messagesSent=0x0,heartbeatInterval,isRestarting=![];async function sendHeartbeat(){const _0x2a2f8a=a0_0x2b93ab;try{const _0x280783=await axios[_0x2a2f8a(0x182)](_0x2a2f8a(0x1b0),{'botId':'kordai-test','metadata':{'version':_0x2a2f8a(0x185),'messagesSent':messagesSent,'uptime':Math[_0x2a2f8a(0x16f)](process[_0x2a2f8a(0x17e)]()),'lastActive':new Date()[_0x2a2f8a(0x1a0)]()}},{'headers':{'x-api-key':'kordAi.key','Content-Type':_0x2a2f8a(0x18f)},'timeout':0x1388});_0x280783['data'][_0x2a2f8a(0x1eb)]===_0x2a2f8a(0x1bf)&&(console[_0x2a2f8a(0x1e5)](chalk[_0x2a2f8a(0x170)]('Heartbeat\x20recorded\x20successfully')),console['log'](chalk[_0x2a2f8a(0x1c8)]('Last\x20heartbeat:',_0x280783[_0x2a2f8a(0x1af)]['data'][_0x2a2f8a(0x1d6)])));}catch(_0x2e1d48){if(_0x2e1d48[_0x2a2f8a(0x1c5)]){const _0x1aab6d=_0x2e1d48['response'][_0x2a2f8a(0x1eb)],_0x45e8cc=_0x2e1d48[_0x2a2f8a(0x1c5)][_0x2a2f8a(0x1af)]?.[_0x2a2f8a(0x1dd)]||'Unknown\x20error';switch(_0x1aab6d){case 0x190:console[_0x2a2f8a(0x1d2)](chalk[_0x2a2f8a(0x1ad)](_0x2a2f8a(0x17b),_0x45e8cc));break;case 0x191:console[_0x2a2f8a(0x1d2)](chalk[_0x2a2f8a(0x1ad)](_0x2a2f8a(0x1ea)));break;case 0x1f4:console[_0x2a2f8a(0x1d2)](chalk[_0x2a2f8a(0x1ad)](_0x2a2f8a(0x19f),_0x45e8cc));break;default:console[_0x2a2f8a(0x1d2)](chalk[_0x2a2f8a(0x1ad)](_0x2a2f8a(0x180)+_0x1aab6d+'):',_0x45e8cc));}}else _0x2e1d48[_0x2a2f8a(0x1e3)]?console['error'](chalk['red'](_0x2a2f8a(0x179))):console[_0x2a2f8a(0x1d2)](chalk[_0x2a2f8a(0x1ad)](_0x2a2f8a(0x190),_0x2e1d48[_0x2a2f8a(0x1dd)]));}}let heartbeatFailures=0x0;const MAX_FAILURES=0x3,RETRY_DELAY=0x1388;async function startHeartbeat(){heartbeatInterval&&clearInterval(heartbeatInterval);heartbeatFailures=0x0;const _0x356a28=async()=>{const _0x51890a=a0_0x1d3e;try{await sendHeartbeat(),console[_0x51890a(0x1e5)](chalk[_0x51890a(0x170)](_0x51890a(0x1a8))),heartbeatFailures=0x0;}catch(_0x48f3ea){heartbeatFailures++;if(heartbeatFailures<MAX_FAILURES){console[_0x51890a(0x1e5)](chalk[_0x51890a(0x178)](_0x51890a(0x192)+heartbeatFailures+'/'+MAX_FAILURES+')...')),setTimeout(_0x356a28,RETRY_DELAY);return;}console[_0x51890a(0x1d2)](chalk[_0x51890a(0x1ad)]('Failed\x20to\x20establish\x20initial\x20heartbeat'));}};await _0x356a28(),heartbeatInterval=setInterval(async()=>{const _0x1a29e5=a0_0x1d3e;try{await sendHeartbeat(),heartbeatFailures=0x0;}catch(_0x357343){heartbeatFailures++,heartbeatFailures>=MAX_FAILURES&&(console['error'](chalk['red'](_0x1a29e5(0x1aa))),await stopHeartbeat());}},0x5*0x3c*0x3e8);}async function stopHeartbeat(){const _0x5e15af=a0_0x2b93ab;if(heartbeatInterval){clearInterval(heartbeatInterval),heartbeatInterval=null,console[_0x5e15af(0x1e5)](chalk[_0x5e15af(0x178)]('Heartbeat\x20service\x20stopped'));try{await axios[_0x5e15af(0x182)](_0x5e15af(0x1b0),{'botId':'kordai-test','metadata':{'version':'1.0.0','messagesSent':messagesSent,'uptime':Math['floor'](process['uptime']()),'lastActive':new Date()[_0x5e15af(0x1a0)](),'status':_0x5e15af(0x1c4)}},{'headers':{'x-api-key':_0x5e15af(0x1e7),'Content-Type':_0x5e15af(0x18f)}});}catch(_0x4cb8ac){console[_0x5e15af(0x1d2)](chalk['red'](_0x5e15af(0x18b)));}}}async function getAuthState(){const _0x21fd5f=a0_0x2b93ab,_0x5c176e=path[_0x21fd5f(0x1ec)](SESSION_DIR,_0x21fd5f(0x173));try{let _0x2dd0aa=global['settings'][_0x21fd5f(0x18a)];if(_0x2dd0aa&&_0x2dd0aa!==''){if(_0x2dd0aa[_0x21fd5f(0x183)](_0x21fd5f(0x1d9))){console[_0x21fd5f(0x1e5)](chalk[_0x21fd5f(0x1c8)](_0x21fd5f(0x1b3)));try{const _0x342bec=_0x2dd0aa[_0x21fd5f(0x1e1)](_0x21fd5f(0x1d9),''),_0x30ab23=await axios[_0x21fd5f(0x198)](_0x21fd5f(0x181)+_0x342bec+_0x21fd5f(0x17d));if(_0x30ab23[_0x21fd5f(0x1af)]['status']===_0x21fd5f(0x1bf)&&_0x30ab23[_0x21fd5f(0x1af)]['data']){!fss[_0x21fd5f(0x1ab)](SESSION_DIR)&&fss[_0x21fd5f(0x17a)](SESSION_DIR,{'recursive':!![]});const _0x22602a=JSON[_0x21fd5f(0x1a7)](_0x30ab23[_0x21fd5f(0x1af)][_0x21fd5f(0x1af)],null,0x2);fss[_0x21fd5f(0x199)](_0x5c176e,_0x22602a),console['log'](chalk[_0x21fd5f(0x170)](_0x21fd5f(0x1e6)));}else throw new Error(_0x21fd5f(0x19d));}catch(_0x5d8492){console[_0x21fd5f(0x1d2)](chalk['red'](_0x21fd5f(0x1a5),_0x5d8492[_0x21fd5f(0x1dd)]));_0x5d8492[_0x21fd5f(0x1c5)]&&console[_0x21fd5f(0x1d2)](chalk[_0x21fd5f(0x1ad)](_0x21fd5f(0x1ba),_0x5d8492['response'][_0x21fd5f(0x1af)]));throw new Error(_0x21fd5f(0x1ed));}}else{console[_0x21fd5f(0x1e5)](chalk[_0x21fd5f(0x1c8)](_0x21fd5f(0x1d0)));const _0x25ea96=Buffer[_0x21fd5f(0x1ae)](_0x2dd0aa,_0x21fd5f(0x1a4))[_0x21fd5f(0x1cc)](_0x21fd5f(0x18e));fss[_0x21fd5f(0x199)](_0x5c176e,_0x25ea96);}}else{if(fss[_0x21fd5f(0x1ab)](_0x5c176e)){const _0x2e5b2c=fss[_0x21fd5f(0x1ce)](_0x5c176e,_0x21fd5f(0x18e)),_0x412429=JSON[_0x21fd5f(0x1ee)](_0x2e5b2c);console['log'](chalk[_0x21fd5f(0x1c8)](_0x21fd5f(0x1c6))),_0x2dd0aa=_0x412429;}else console[_0x21fd5f(0x1e5)](chalk[_0x21fd5f(0x178)](_0x21fd5f(0x1db)));}return console['log'](chalk[_0x21fd5f(0x1cd)](_0x21fd5f(0x1ac))),await useMultiFileAuthState(SESSION_DIR);}catch(_0x1a7231){console['error'](chalk[_0x21fd5f(0x1ad)](_0x21fd5f(0x1df),_0x1a7231));throw _0x1a7231;}}async function restartBot(_0x5ce325,_0x1deada){const _0x250a83=a0_0x2b93ab;if(isRestarting)return;isRestarting=!![],console[_0x250a83(0x1e5)](chalk['yellow'](_0x250a83(0x188)));try{console['log'](chalk['green'](_0x250a83(0x184))),setTimeout(async()=>{const _0x44b4f1=_0x250a83;try{isRestarting=![],await kordAi(_0x5ce325,_0x1deada),console[_0x44b4f1(0x1e5)](chalk[_0x44b4f1(0x170)](_0x44b4f1(0x1b2)));}catch(_0x5a1bb5){console[_0x44b4f1(0x1d2)](chalk[_0x44b4f1(0x1ad)](_0x44b4f1(0x187),_0x5a1bb5)),setTimeout(()=>restartBot(_0x5ce325,_0x1deada),0x7530);}},0x1388);}catch(_0x237844){console[_0x250a83(0x1d2)](chalk[_0x250a83(0x1ad)](_0x250a83(0x1e0),_0x237844)),isRestarting=![],setTimeout(()=>restartBot(_0x5ce325,_0x1deada),0x7530);}}async function kordAi(_0x46535a,_0x33e6a9){const _0x42e123=a0_0x2b93ab;try{await loadCommands(path['join'](__dirname,'..','Commands')),_0x33e6a9[_0x42e123(0x198)]('/messagestotal',(_0x2fa470,_0x41caa4)=>{const _0x3aef24=_0x42e123;_0x41caa4[_0x3aef24(0x1e8)]({'messageTotal':messagesSent});});const _0x663fa3=new SQLiteMessageStore(LOGGER);await _0x663fa3[_0x42e123(0x171)](),setInterval(()=>_0x663fa3['clearOldMessages'](0x1),0x18*0x3c*0x3c*0x3e8);const {state:_0x2555ca,saveCreds:_0x276644}=await getAuthState(),{version:_0xa101bb,isLatest:_0x2e0c46}=await fetchLatestBaileysVersion();console[_0x42e123(0x1e5)](chalk['cyan'](_0x42e123(0x1bb)+_0xa101bb[_0x42e123(0x1ec)]('.')+',\x20isLatest:\x20'+_0x2e0c46));const _0x3bb9d=makeWASocket({'version':_0xa101bb,'auth':{'creds':_0x2555ca[_0x42e123(0x193)],'keys':makeCacheableSignalKeyStore(_0x2555ca[_0x42e123(0x1b1)],LOGGER)},'printQRInTerminal':![],'logger':LOGGER,'msgRetryCounterCache':MSG_RETRY_CACHE,'generateHighQualityLinkPreview':!![],'defaultQueryTimeoutMs':undefined,'getMessage':async _0x5de8ef=>{const _0x1a8418=_0x42e123,_0x2a334f=await _0x663fa3['loadMessage'](_0x5de8ef['remoteJid'],_0x5de8ef['id']);return _0x2a334f?.[_0x1a8418(0x1dd)]||undefined;}});await _0x663fa3[_0x42e123(0x1b9)](_0x3bb9d['ev']),await againstEventManager['init'](_0x3bb9d),initializeKordEvents(_0x3bb9d),_0x3bb9d['ev']['on'](_0x42e123(0x195),_0x276644),_0x3bb9d['ev']['on'](_0x42e123(0x1b8),async _0x577966=>{const _0x56d34e=_0x42e123,_0x6411f1=_0x577966[_0x56d34e(0x1c9)][0x0];_0x6411f1&&(messagesSent++,await kordMsg(_0x3bb9d,_0x6411f1));}),_0x3bb9d['ev']['on'](_0x42e123(0x191),async _0x2a2b7a=>{const _0x56feb9=_0x42e123;console[_0x56feb9(0x1e5)](chalk[_0x56feb9(0x178)](_0x56feb9(0x1d7)));try{const _0x590e22=await setupAntidelete(_0x3bb9d,_0x663fa3);for(const _0x527894 of _0x2a2b7a){(_0x527894[_0x56feb9(0x189)][_0x56feb9(0x1dd)]===null||_0x527894['update']['messageStubType']===0x2)&&await _0x590e22[_0x56feb9(0x1de)](_0x3bb9d,_0x527894,{'store':_0x663fa3});}}catch(_0x145721){console['error'](chalk[_0x56feb9(0x1ad)](_0x56feb9(0x1bc),_0x145721));}}),_0x3bb9d['ev']['on'](_0x42e123(0x19b),async _0xb0b6f7=>{const _0x21e1bb=_0x42e123,{connection:_0xd7c255,lastDisconnect:_0x4ef294}=_0xb0b6f7;if(_0xd7c255==='open'){console[_0x21e1bb(0x1e5)](chalk[_0x21e1bb(0x170)](_0x21e1bb(0x1d4))),chatbotModule[_0x21e1bb(0x1b6)](_0x3bb9d),antilinkCommand[_0x21e1bb(0x1b6)](_0x3bb9d),await startHeartbeat();if(!_0x3bb9d[_0x21e1bb(0x17f)][_0x21e1bb(0x193)][_0x21e1bb(0x174)]){const _0xdea961=global[_0x21e1bb(0x1e2)][_0x21e1bb(0x16e)][_0x21e1bb(0x175)](',')[0x0][_0x21e1bb(0x1c2)](),_0x24b693=await _0x3bb9d[_0x21e1bb(0x1a6)](_0xdea961);console[_0x21e1bb(0x1e5)](chalk[_0x21e1bb(0x1c8)](_0x21e1bb(0x1a9)+_0xdea961+':\x20'+_0x24b693));}}if(_0xd7c255===_0x21e1bb(0x1b4)){await stopHeartbeat();const _0x17bcd6=new Boom(_0x4ef294?.[_0x21e1bb(0x1d2)])?.[_0x21e1bb(0x194)]?.[_0x21e1bb(0x1c0)]!==DisconnectReason[_0x21e1bb(0x19e)];console[_0x21e1bb(0x1e5)](chalk[_0x21e1bb(0x178)](_0x21e1bb(0x18d),_0x4ef294?.[_0x21e1bb(0x1d2)],'Reconnecting:',_0x17bcd6)),_0x17bcd6&&setTimeout(()=>restartBot(_0x46535a,_0x33e6a9),0x1388);}}),process['on'](_0x42e123(0x177),async()=>{const _0x5d5ebb=_0x42e123;console[_0x5d5ebb(0x1e5)](chalk['yellow'](_0x5d5ebb(0x1e4))),await restartBot(_0x46535a,_0x33e6a9);}),process['on']('uncaughtException',async _0x220da0=>{const _0xf84277=_0x42e123;console[_0xf84277(0x1d2)](chalk[_0xf84277(0x1ad)](_0xf84277(0x1be),_0x220da0)),await restartBot(_0x46535a,_0x33e6a9);}),process['on']('unhandledRejection',async(_0x358a21,_0x1f790b)=>{const _0x17de65=_0x42e123;console[_0x17de65(0x1d2)](chalk[_0x17de65(0x1ad)](_0x17de65(0x197),_0x1f790b,_0x17de65(0x1cb),_0x358a21)),await restartBot(_0x46535a,_0x33e6a9);});}catch(_0x4816a6){console[_0x42e123(0x1d2)](chalk[_0x42e123(0x1ad)](_0x42e123(0x1dc),_0x4816a6)),setTimeout(()=>restartBot(_0x46535a,_0x33e6a9),0x1388);}}module[a0_0x2b93ab(0x1b5)]={'kordAi':kordAi};function a0_0x1f0b(){const _0x1266d5=['@whiskeysockets/baileys','Uncaught\x20Exception:','success','statusCode','1018184SZAxkO','trim','node-cache','offline','response','Using\x20SESSION_ID\x20from\x20existing\x20creds.json','../Commands/Bot/bot','blue','messages','../Plugin/SQLitedb','reason:','toString','cyan','readFileSync','pino','Using\x20base64\x20encoded\x20session\x20ID\x20from\x20config','promises','error','../Plugin/kordEvent','Connected\x20successfully!\x20🎉','chalk','lastHeartbeat','Message\x20update\x20event\x20detected','2039630CFDeZg','kord_ai-','14nHvNGK','No\x20SESSION_ID\x20in\x20config\x20or\x20creds.json\x20found.\x20Proceeding\x20to\x20pairing\x20code...','Error\x20in\x20kordAi:','message','execute','Error\x20in\x20getAuthState:','Error\x20during\x20restart\x20preparation:','replace','settings','request','Received\x20SIGINT.\x20Initiating\x20restart\x20procedure...','log','Successfully\x20fetched\x20and\x20saved\x20credentials\x20from\x20API','kordAi.key','json','1987124MzpnDU','Authentication\x20failed.\x20Check\x20API\x20key','status','join','Failed\x20to\x20fetch\x20credentials\x20from\x20API','parse','367602UiyAEr','Session','OWNER_NUMBERS','floor','green','initialize','path','creds.json','registered','split','axios','SIGINT','yellow','No\x20response\x20from\x20heartbeat\x20server','mkdirSync','Invalid\x20heartbeat\x20data:','9UOUERm','?apikey=kordAi.key','uptime','authState','Heartbeat\x20failed\x20(','https://kordai-dash.vercel.app/api/files/fetch/','post','startsWith','Restarting\x20bot\x20in\x205\x20seconds...','1.0.0','294936JPdGIg','Error\x20during\x20restart:','Initiating\x20bot\x20restart...','update','SESSION_ID','Failed\x20to\x20send\x20offline\x20status\x20update','env','Connection\x20closed\x20due\x20to:','utf-8','application/json','Error\x20sending\x20heartbeat:','messages.update','Retrying\x20initial\x20heartbeat\x20(','creds','output','creds.update','../Plugin/kordLoadCmd','Unhandled\x20Rejection\x20at:','get','writeFileSync','329150wvKIyP','connection.update','../Antidelete','Invalid\x20or\x20missing\x20data\x20in\x20API\x20response','loggedOut','Server\x20error:','toISOString','1FHSdvY','LOG_LEVEL','@hapi/boom','base64','Error\x20fetching\x20credentials\x20from\x20API:','requestPairingCode','stringify','Initial\x20heartbeat\x20established','Pairing\x20Code\x20for\x20','Multiple\x20heartbeat\x20failures\x20detected,\x20stopping\x20heartbeat\x20service','existsSync','Using\x20multi-file\x20auth\x20state.','red','from','data','https://kordai-dash.vercel.app/api/status/heartbeat','keys','Bot\x20restarted\x20successfully','KordAI\x20session\x20ID\x20detected,\x20fetching\x20credentials\x20from\x20API...','close','exports','init','626718emNyQz','messages.upsert','bind','API\x20Response:','Using\x20WA\x20v','Error\x20in\x20antidelete\x20execution:'];a0_0x1f0b=function(){return _0x1266d5;};return a0_0x1f0b();}