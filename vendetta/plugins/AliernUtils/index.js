(function(a,e,g,i,c,o,h){"use strict";const{FormIcon:l,FormSection:u,FormSwitchRow:s}=c.Forms,{ScrollView:A}=c.General;e.storage.AlwaysTabsV2??=!0,e.storage.ChatAnimations??=!0,e.storage.NoLinkMarkdown??=!1;function v(t){return function(){return g.useProxy(e.storage),React.createElement(A,null,React.createElement(u,{title:"Useful experiments",titleStyleType:"no_border"},React.createElement(s,{label:"Tabs v2",subLabel:"Enable Tabs v2",leading:React.createElement(l,{source:i.getAssetIDByName("ic_mobile_device")}),value:e.storage.AlwaysTabsV2,onValueChange:function(n){e.storage.AlwaysTabsV2=n,t()}}),React.createElement(s,{label:"Chat animations (Android)",subLabel:"Enable chat animations for Android",leading:React.createElement(l,{source:i.getAssetIDByName("ic_chat")}),value:e.storage.ChatAnimations,onValueChange:function(n){e.storage.ChatAnimations=n,t()}})),React.createElement(u,{title:"Misc"},React.createElement(s,{label:"Disable message link markdown",subLabel:"Disable markdown for message links",value:e.storage.NoLinkMarkdown,onValueChange:function(n){e.storage.NoLinkMarkdown=n,t()}})))}}const{toggleTabsUIManually:d}=o.findByProps("toggleTabsUIManually");function y(){return d(e.storage.AlwaysTabsV2),function(){d(!1)}}const{ChatListAnimationExperiment:w}=o.findByProps("ChatListAnimationExperiment");function C(){try{const t=w.getCurrentConfig();return t.shouldAnimateAndroid=e.storage.ChatAnimations,function(){t.shouldAnimateAndroid=!1}}catch{return function(){}}}const E=o.findByName("createMessageContent",!1);function k(){if(e.storage.NoLinkMarkdown)return h.after("default",E,function(t){var n;const r=t==null||(n=t[0])===null||n===void 0?void 0:n.message;r?.content&&(r.content=r.content.replace(/(https?:\/\/discord.com\/channels\/[\w\/]+)/g,"<$1>"))})}let m=[];function f(){b(),m=[y(),C(),k()]}function b(){m?.forEach(function(t){return t?.()})}f();const L=v(f),R=function(){return b()};return a.onUnload=R,a.settings=L,a})({},vendetta.plugin,vendetta.storage,vendetta.ui.assets,vendetta.ui.components,vendetta.metro,vendetta.patcher);