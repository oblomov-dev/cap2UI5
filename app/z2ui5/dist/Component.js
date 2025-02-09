sap.ui.define(["sap/ui/core/UIComponent","z2ui5/model/models","z2ui5/cc/Server","sap/ui/VersionInfo","z2ui5/cc/DebugTool"],function(e,i,t,o,n){return e.extend("z2ui5.Component",{metadata:{manifest:"json",interfaces:["sap.ui.core.IAsyncContentCreation"]},async init(){e.prototype.init.apply(this,arguments);if(typeof z2ui5=="undefined"){z2ui5={}}if(z2ui5?.checkLocal==false){z2ui5={}}z2ui5.oRouter=this.getRouter();z2ui5.oRouter.initialize();z2ui5.oRouter.stop();z2ui5.oDeviceModel=i.createDeviceModel();this.setModel(z2ui5.oDeviceModel,"device");z2ui5.oConfig={};z2ui5.oConfig.ComponentData=this.getComponentData();try{z2ui5.oLaunchpadService=await this.getService("ShellUIService")}catch(e){}let t=await o.load();z2ui5.oConfig.UI5VersionInfo={version:t.version,buildTimestamp:t.buildTimestamp,gav:t.gav};if(/iPad|iPhone/.test(navigator.platform)){window.addEventListener("__pagehide",this.__pagehide.bind(this))}else{window.addEventListener("__beforeunload",this.__beforeunload.bind(this))}document.addEventListener("keydown",function(e){if(e?.ctrlKey&&e?.key==="F12"){if(!z2ui5.debugTool){z2ui5.debugTool=new n}z2ui5.debugTool.toggle()}});window.addEventListener("popstate",e=>{delete e?.state?.response?.PARAMS?.SET_PUSH_STATE;delete e?.state?.response?.PARAMS?.SET_APP_STATE_ACTIVE;if(e?.state?.view){z2ui5.oController.ViewDestroy();z2ui5.oResponse=e.state.response;z2ui5.oController.displayView(e.state.view,e.state.model)}})},__beforeunload:function(){window.removeEventListener("__beforeunload",this.__beforeunload.bind(this));this.destroy()},__pagehide:function(){window.removeEventListener("__pagehide",this.__pagehide.bind(this));this.destroy()},exit:function(){t.endSession();if(e.prototype.exit)e.prototype.exit.apply(this,arguments)}})});
//# sourceMappingURL=Component.js.map