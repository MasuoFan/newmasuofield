const GITHUB_BASE = "https://masuofan.github.io/newmasuofield";
const rules = [
  {id:1, priority:100, action:{type:"redirect",redirect:{regexSubstitution:`${GITHUB_BASE}/main.dart.js`}}, condition:{regexFilter:"^https://godfield\\.net/main\\.dart\\.js(?:\\?.*)?$",resourceTypes:["script"]}},
  {id:2, priority:100, action:{type:"redirect",redirect:{regexSubstitution:`${GITHUB_BASE}/images/\\1`}}, condition:{regexFilter:"^https://godfield\\.net/images/(.*)$",resourceTypes:["image","xmlhttprequest"]}},
  {id:3, priority:100, action:{type:"redirect",redirect:{regexSubstitution:`${GITHUB_BASE}/audio/\\1`}}, condition:{regexFilter:"^https://godfield\\.net/audio/(.*)$",resourceTypes:["media","xmlhttprequest"]}},
  {id:4, priority:100, action:{type:"redirect",redirect:{regexSubstitution:`${GITHUB_BASE}/i18n/ja.json`}}, condition:{regexFilter:"^https://godfield\\.net/i18n/ja\\.json(?:\\?.*)?$",resourceTypes:["xmlhttprequest"]}}
];
async function installRules(){
  await chrome.declarativeNetRequest.updateDynamicRules({removeRuleIds:rules.map(r=>r.id),addRules:rules});
}
chrome.runtime.onInstalled.addListener(installRules);
chrome.runtime.onStartup.addListener(installRules);
