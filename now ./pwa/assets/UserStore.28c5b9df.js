import{l as t,A as a}from"./index.c29f7992.js";const i=t("userStore",{state:()=>({push_notifications:!1,dark_mode:!1,loading:!1,data:[],device_uuid:"",data_push_receive:[]}),persist:!1,getters:{},actions:{getAutoPrinter(){this.loading=!0,a.fetchDataByTokenPost("getAutoPrinter","device_uuid="+this.device_uuid).then(e=>{this.data=e.details}).catch(e=>{this.data=[]}).then(e=>{this.loading=!1})},hasPrinter(){return Object.keys(this.data).length>0}}});export{i as u};
