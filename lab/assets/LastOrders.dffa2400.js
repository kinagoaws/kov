import{_ as S,aA as Q,aB as L,u as q,A as O,n as C,p as s,a2 as n,F as u,ar as p,$ as d,f as l,t as a,a3 as g,q as _,a4 as D,Z as c,au as m,X as P,a6 as U,a7 as b,ba as V}from"./index.c29f7992.js";import{Q as w}from"./QSpace.0d53e539.js";import{Q as A}from"./QBadge.50ff0feb.js";import{Q as T}from"./QTab.0d7719d3.js";import{Q as B}from"./QTabs.8a6f34eb.js";import{Q as y}from"./QItemLabel.1db45aa2.js";import{Q as v}from"./QChip.5de2d333.js";import{Q as z}from"./QList.04c37cb8.js";import{a as I,Q as N}from"./QTabPanels.38ab23f8.js";import{u as E}from"./UserStore.28c5b9df.js";import{u as j}from"./OrderStore.5acf0490.js";import"./QResizeObserver.0e413222.js";import"./rtl.276c3f1b.js";import"./use-panel.777e53e3.js";import"./touch.9135741d.js";import"./selection.53b1fe34.js";import"./use-render-cache.3aae9b27.js";const R={name:"LastOrders",props:["refresh_done"],data(){return{tab:"",loading:!1,data:[],limit:5,status_list:[],item_details:[],order_items:[],settings_tabs:[],order_group_buttons:[],order_buttons:[],services_list:[]}},components:{OrderPreview:Q(()=>L(()=>import("./OrderPreview.b2a153f1.js"),["assets/OrderPreview.b2a153f1.js","assets/index.c29f7992.js","assets/index.8924bfb8.css","assets/QToolbarTitle.38b5862b.js","assets/QSpace.0d53e539.js","assets/QToolbar.19752286.js","assets/QImg.a00dd4e9.js","assets/QItemLabel.1db45aa2.js","assets/QList.04c37cb8.js","assets/OrderStore.5acf0490.js","assets/PrintTemplate.83312567.js","assets/AppBluetooth.81007bf8.js"]))},setup(){const t=q(),e=E(),k=j();return{DataStore:t,UserStore:e,OrderStore:k}},watch:{tab(t,e){console.log(t),this.DataStore.last_order_tab=t,this.getLastOrder()},refresh_done(t,e){this.getLastOrder(this.refresh_done),this.OrderStore.getCountOrder()},UserStore:{immediate:!0,deep:!0,handler(t,e){Object.keys(t.data_push_receive).length>0&&(console.log("LAST ORDER WATCH"),console.log(t.data_push_receive),t.data_push_receive.notification_type=="order_update"&&(this.getLastOrder(),this.OrderStore.getCountOrder()))}}},computed:{hasData(){return Object.keys(this.data).length>0}},created(){this.tab=this.DataStore.last_order_tab,this.getLastOrder(),this.OrderStore.getCountOrder()},methods:{getLastOrder(t){this.loading=!0,O.fetchDataByTokenPost("OrderList","filter_by="+this.tab+"&limit="+this.limit+"&page=0").then(e=>{this.data=e.details.data,this.status_list=e.details.status_list,this.item_details=e.details.item_details,this.settings_tabs=e.details.settings_tabs,this.order_group_buttons=e.details.order_group_buttons,this.order_buttons=e.details.order_buttons,this.services_list=e.details.services_list}).catch(e=>{this.data=[],this.status_list=[],this.settings_tabs=[],this.order_group_buttons=[],this.order_buttons=[],this.services_list=[]}).then(e=>{this.loading=!1,O.empty(t)||t()})},showPreview(t){this.order_items=t,this.$refs.order_preview.dialog=!0},afterUpdatestatus(){console.log("afterUpdatestatus"),this.getLastOrder(),this.OrderStore.getCountOrder()}}},F={class:"text-h6"},H={class:"text-grey"},W={key:0,class:"flex flex-center full-width q-pa-xl",style:{"min-height":"calc(30vh)"}},X={key:0,class:"flex flex-center",style:{"min-height":"calc(30vh)"}},Z={class:"full-width text-center"},G={class:"text-weight-bold"},J={class:"text-grey font12"},K={key:0,class:"blob green q-mb-xs"},M={key:1,class:"blob red"};function Y(t,e,k,h,r,f){const x=C("OrderPreview");return s(),n(u,null,[h.DataStore.loading?(s(),n(u,{key:0},[],64)):(s(),n(u,{key:1},[p("div",F,d(t.$t("Last Orders")),1),p("div",H,d(t.$t("Quick management of the last 5 orders")),1),l(w,{class:"q-pa-xs"}),l(B,{modelValue:r.tab,"onUpdate:modelValue":e[0]||(e[0]=i=>r.tab=i),dense:"","no-caps":"","active-color":"primary","indicator-color":t.$q.dark.mode?"mydark":"grey-1",align:"justify","narrow-indicator":"",shrink:"","switch-indicator":"false",class:"text-grey"},{default:a(()=>[(s(!0),n(u,null,g(h.DataStore.last_order,i=>(s(),_(T,{key:i,name:i.value,"no-caps":"",class:"no-wrap q-pa-none"},{default:a(()=>[l(D,{label:i.label,unelevated:"","no-caps":"",color:r.tab==i.value?"primary":t.$q.dark.mode?"grey600":"mygrey","text-color":r.tab==i.value?"white":t.$q.dark.mode?"grey300":"dark",class:"radius28 q-mr-sm"},{default:a(()=>[h.OrderStore.foundCountOrder(i.value)?(s(),_(A,{key:0,color:"green-12",floating:"",style:{right:"-2px"}},{default:a(()=>[c(d(h.OrderStore.foundCountOrder(i.value)),1)]),_:2},1024)):m("",!0)]),_:2},1032,["label","color","text-color"])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue","indicator-color"]),l(w,{class:"q-pa-xs"}),l(N,{modelValue:r.tab,"onUpdate:modelValue":e[1]||(e[1]=i=>r.tab=i),animated:"","transition-prev":"fade","transition-next":"fade",style:{"min-height":"calc(30vh)"}},{default:a(()=>[(s(!0),n(u,null,g(h.DataStore.last_order,i=>(s(),_(I,{key:i,name:i.value,class:"q-pa-none"},{default:a(()=>[r.loading?(s(),n("div",W,[l(P,{color:"primary",size:"2em"})])):(s(),n(u,{key:1},[f.hasData?(s(),_(z,{key:1,separator:""},{default:a(()=>[(s(!0),n(u,null,g(r.data,o=>(s(),_(U,{key:o,clickable:"",onClick:$=>f.showPreview(o)},{default:a(()=>[o.is_view=="0"||o.is_critical==!0?(s(),_(b,{key:0,avatar:"",style:{"min-width":"12px","padding-right":"5px"}},{default:a(()=>[o.is_view=="0"?(s(),n("div",K)):m("",!0),o.is_critical==!0?(s(),n("div",M)):m("",!0)]),_:2},1024)):m("",!0),l(b,null,{default:a(()=>[l(y,{class:"text-weight-medium"},{default:a(()=>[c(d(o.order_id),1)]),_:2},1024),l(y,{caption:""},{default:a(()=>[c(d(o.description),1)]),_:2},1024),l(y,{caption:"",class:"font11"},{default:a(()=>[c(d(o.date_created),1)]),_:2},1024)]),_:2},1024),l(b,{side:""},{default:a(()=>[r.services_list[o.order_type]?(s(),_(v,{key:0,color:t.$q.dark.mode?"grey600":"mygrey","text-color":t.$q.dark.mode?"grey300":"dark",size:"sm",class:"q-ma-none"},{default:a(()=>[c(d(r.services_list[o.order_type].service_name),1)]),_:2},1032,["color","text-color"])):m("",!0),r.status_list[o.status_raw]?(s(),_(v,{key:1,size:"xs",color:"primary","text-color":"white",style:V(`color:${r.status_list[o.status_raw].font_color_hex} !important; background-color:${r.status_list[o.status_raw].background_color_hex} !important; `)},{default:a(()=>[c(d(o.status),1)]),_:2},1032,["style"])):m("",!0),l(v,{size:"xs",color:"mygrey","text-color":"dark"},{default:a(()=>[c(d(o.payment_status_name),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})):(s(),n("div",X,[p("div",Z,[p("div",G,d(t.$t("No order")),1),p("p",J,d(t.$t("Order will show here")),1)])]))],64))]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])],64)),l(x,{ref:"order_preview",data:r.order_items,items_details:r.item_details,settings_tabs:r.settings_tabs,order_group_buttons:r.order_group_buttons,order_buttons:r.order_buttons,onAfterUpdatestatus:f.afterUpdatestatus},null,8,["data","items_details","settings_tabs","order_group_buttons","order_buttons","onAfterUpdatestatus"])],64)}var gt=S(R,[["render",Y]]);export{gt as default};
