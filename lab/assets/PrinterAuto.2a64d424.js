import{_ as m,aA as u,aB as f,u as g,A as o,n as y,p as P,a2 as S,ar as d,f as s,t as a,b8 as C,Z as x,$ as l,a4 as T,aS as A,F as D}from"./index.c29f7992.js";import{Q as U}from"./QToolbarTitle.38b5862b.js";import{Q as b}from"./QSpace.0d53e539.js";import{Q as k}from"./QToolbar.19752286.js";import{u as v}from"./UserStore.28c5b9df.js";import{P as w}from"./PrintTemplate.83312567.js";import{A as n}from"./AppBluetooth.81007bf8.js";const B={name:"PrinterAuto",props:["data"],components:{PrintPreview:u(()=>f(()=>import("./PrintPreview.87432f41.js"),["assets/PrintPreview.87432f41.js","assets/QSpace.0d53e539.js","assets/index.c29f7992.js","assets/index.8924bfb8.css","assets/ClosePopup.ab93d23e.js","assets/PrintTemplate.83312567.js"]))},data(){return{order_uuid:"",order_status:"",is_printing:!1,processing_text:"",payload:["merchant_info","items","summary","order_info","status_allowed_cancelled","order_delivery_status"],order_info:[],merchant:[],order_items:[],order_summary:[],connect_attemp:0}},setup(){const t=v(),e=g();return{UserStore:t,DataStore:e}},watch:{data(t,e){Object.keys(t).length>0&&this.UserStore.hasPrinter()&&(this.connect_attemp=0,this.order_uuid=t.meta_data.order_uuid,this.order_status=t.meta_data.status,this.order_status=="new"&&!o.empty(this.order_uuid)&&this.orderDetails())}},created(){this.connect_attemp=0,this.UserStore.hasPrinter()||this.UserStore.getAutoPrinter()},methods:{close(){this.is_printing=!1},orderDetails(){console.log(this.UserStore.data.paper_width),this.is_printing=!0,this.processing_text=this.$t("Gettting order info..."),o.fetchDataByToken("orderDetails",{order_uuid:this.order_uuid,hide_currency:this.DataStore.hide_currency?1:0,payload:this.payload}).then(t=>{this.order_info=t.details.data.order.order_info,this.merchant=t.details.data.merchant,this.order_items=t.details.data.items,this.order_summary=t.details.data.summary,this.$q.capacitor&&this.CheckBT()}).catch(t=>{this.order_info=[],this.merchant=[],this.order_items=[],this.order_summary=[],this.is_printing=!1}).then(t=>{})},CheckBT(){this.processing_text=this.$t("Checking bluetooth"),n.Enabled().then(t=>{this.DataStore.printer_set==2?this.$refs.print_preview.showDialog(!0,!0):this.BondAndConnect()}).catch(t=>{o.notify("dark",t,"error",this.$q),this.is_printing=!1}).then(t=>{})},BondAndConnect(){this.processing_text=this.connect_attemp>0?this.$t("Attempting to re-connect..."):this.$t("Connecting..."),n.Connect(this.UserStore.data.printer_uuid,this.UserStore.data.printer_model).then(t=>{this.processing_text=this.$t("Connected"),this.Print()}).catch(t=>{console.log("FAILED CONNECT =>"+this.connect_attemp),this.connect_attemp<=0?(this.connect_attemp++,console.log("TRY TO CONNECT"),this.BondAndConnect()):(this.is_printing=!1,o.notify("dark",t,"error",this.$q))}).then(t=>{})},Print(){this.processing_text=this.$t("Preparing data...");let t=w.ReceiptTemplate(this.UserStore.data.paper_width,this.order_info,this.merchant,this.order_items,this.order_summary);console.log("TEMPLATE ==>"),console.log(t.tpl_all),console.log(t.tpl_data),Object.keys(t).length>0&&(this.UserStore.data.printer_model=="sunmi"?this.printData(t.tpl_all):Object.entries(t.tpl_data).forEach(([e,i])=>{o.empty(i)||(e>0?setTimeout(()=>{console.log(i),this.printData(i)},2e3):(console.log(i),this.printData(i)))}))},printData(t){setTimeout(()=>{this.is_printing=!1},15e3),this.processing_text=this.$t("Printing..."),n.Print(this.UserStore.data.printer_uuid,t,this.UserStore.data.printer_model,this.UserStore.data.service_id,this.UserStore.data.characteristics).then(e=>{this.is_printing=!1}).catch(e=>{this.is_printing=!1,o.notify("dark",e,"error",this.$q)}).then(e=>{this.processing_text=this.$t("Print Succesful")})}}},E={class:"q-pl-md q-pr-md q-mb-sm"};function $(t,e,i,h,r,c){const _=y("PrintPreview");return P(),S(D,null,[e[1]||(e[1]=d("div",{class:"hiddenx"},null,-1)),s(A,{modelValue:r.is_printing,"onUpdate:modelValue":e[0]||(e[0]=p=>r.is_printing=p),position:"bottom",seamless:"",persistent:""},{default:a(()=>[s(C,{class:"rounded-borders-top"},{default:a(()=>[s(k,{class:"text-primary top-toolbar q-pl-md",dense:""},{default:a(()=>[s(U,{class:"text-dark text-weight-bold"},{default:a(()=>[x(l(t.$t("Auto print")),1)]),_:1}),s(b),s(T,{onClick:c.close,color:"white",square:"",unelevated:"","text-color":"grey",icon:"las la-times",dense:"","no-caps":"",size:"sm",class:"border-grey radius8"},null,8,["onClick"])]),_:1}),d("div",E,l(r.processing_text),1)]),_:1})]),_:1},8,["modelValue"]),s(_,{ref:"print_preview",printer_details:h.UserStore.data,order_info:r.order_info,merchant:r.merchant,order_items:r.order_items,order_summary:r.order_summary},null,8,["printer_details","order_info","merchant","order_items","order_summary"])],64)}var I=m(B,[["render",$]]);export{I as default};
