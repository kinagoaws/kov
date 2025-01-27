import{_ as D,aA as w,u as q,A as l,n as C,p as a,a2 as r,f as i,t as n,F as c,a1 as k,a4 as u,Z as h,$ as s,q as p,au as _,a0 as v,ar as m,a3 as Q,aB as x}from"./index.c29f7992.js";import{Q as B}from"./QToolbarTitle.38b5862b.js";import{Q as S}from"./QToolbar.19752286.js";import{Q as I}from"./QHeader.8a0fa205.js";import{Q as L}from"./QInnerLoading.d034c390.js";import{Q as P}from"./QPage.1b02519d.js";import{Q as T}from"./QPullToRefresh.9f003a0c.js";import{u as $}from"./AccessStore.abc714c5.js";import"./QResizeObserver.0e413222.js";import"./TouchPan.5fac99c8.js";import"./touch.9135741d.js";import"./selection.53b1fe34.js";import"./format.de7e9769.js";const z={name:"ItemAddPrice",components:{ConfirmDialog:w(()=>x(()=>import("./ConfirmDialog.f7360be1.js"),["assets/ConfirmDialog.f7360be1.js","assets/QToolbarTitle.38b5862b.js","assets/index.c29f7992.js","assets/index.8924bfb8.css","assets/QToolbar.19752286.js"]))},data(){return{dialog_price:!1,id:"",loading:!0,data:[],edit:!1,data_to_delete:[],title:""}},setup(e){const t=q(),y=$();return{DataStore:t,AccessStore:y}},computed:{hasData(){return Object.keys(this.data).length>0||!l.empty(this.id)},hasData2(){return Object.keys(this.data).length>0}},created(){this.id=this.$route.query.item_uuid,l.empty(this.id)?this.loading=!1:this.getList()},methods:{refresh(e){this.getList(e)},getList(e){this.loading=!0,l.fetchDataByTokenPost("getAddonlist","id="+this.id).then(t=>{this.data=t.details.list,this.title=t.details.item_name}).catch(t=>{this.data=[]}).then(t=>{this.loading=!1,l.empty(e)||e()})},confirmDelete(e,t){this.data_to_delete=e,this.data_to_delete.index=t,this.$refs.confirm_dialog.dialog=!0},afterConfirm(){this.$refs.confirm_dialog.dialog=!1,l.showLoadingBox("",this.$q),l.fetchDataByTokenPost("deleteItemAddon","item_uuid="+this.id+"&id="+this.data_to_delete.id).then(e=>{this.data.splice(this.data_to_delete.index,1)}).catch(e=>{l.notify("dark",e,"error",this.$q)}).then(e=>{l.hideLoadingBox(this.$q)})}}},V={class:"row items-center justify-between"},E={class:"text-weight-bold"},N={class:"row items-stretch items-center q-gutter-md"},O={class:"col-3"},R={key:1,class:"full-width text-center"},j={class:"text-weight-bold"};function F(e,t,y,g,o,f){const A=C("ConfirmDialog");return a(),r(c,null,[i(T,{onRefresh:f.refresh},{default:n(()=>[i(I,{class:k({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode})},{default:n(()=>[i(S,null,{default:n(()=>[i(u,{onClick:t[0]||(t[0]=d=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),i(B,{class:"text-weight-bold"},{default:n(()=>[o.title?(a(),r(c,{key:0},[h(s(e.$t("Addon for"))+" "+s(o.title),1)],64)):(a(),r(c,{key:1},[h(s(e.$t("Item Addon")),1)],64))]),_:1}),g.AccessStore.hasAccess("food.itemaddon_sort")?(a(),p(u,{key:0,flat:"","no-caps":"",color:"blue",to:{path:"/item/addonitem_sort",query:{item_uuid:o.id}}},{default:n(()=>[h(s(e.$t("Sort")),1)]),_:1},8,["to"])):_("",!0)]),_:1}),i(v)]),_:1},8,["class"]),i(P,{class:k([{"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode,"flex flex-center":!o.loading&&!f.hasData},"q-pa-md"])},{default:n(()=>[o.loading?(a(),p(L,{key:0,showing:!0,color:"primary",size:"md"})):(a(),r(c,{key:1},[f.hasData?(a(),r(c,{key:0},[m("div",V,[m("div",E,s(e.$t("Addons")),1),g.AccessStore.hasAccess("food.itemaddon_delete")?(a(),r(c,{key:0},[f.hasData2?(a(),p(u,{key:0,label:o.edit?this.$t("Done"):this.$t("Edit"),flat:"","no-caps":"",color:"primary",onClick:t[1]||(t[1]=d=>o.edit=!o.edit)},null,8,["label"])):_("",!0)],64)):_("",!0)]),i(v,{class:"q-mb-lg"}),m("div",N,[(a(!0),r(c,null,Q(o.data,(d,b)=>(a(),r("div",{class:"col-5 relative-position",key:d},[o.edit?(a(),p(u,{key:0,round:"",color:"primary",icon:"las la-trash",dense:"",unelevated:"",size:"sm",class:"absolute-top-left z-max",style:{top:"-10px"},onClick:H=>f.confirmDelete(d,b)},null,8,["onClick"])):_("",!0),i(u,{color:"mygrey","text-color":"dark",class:"line-normal radius8 font13",unelevated:"",style:{"min-height":"70px"},"no-caps":"",to:{path:"/item/addonitem_update",query:{item_uuid:o.id,id:d.id}}},{default:n(()=>[m("div",null,s(d.subcategory_name),1),m("div",null,s(d.price)+" "+s(d.size_name),1)]),_:2},1032,["to"])]))),128)),m("div",O,[i(u,{color:"primary","text-color":"white",class:"line-normal radius8 font13",unelevated:"",style:{"min-height":"70px"},"no-caps":"",to:{path:"/item/addonitem_create",query:{item_uuid:o.id}}},{default:n(()=>[h(" + "+s(e.$t("Add")),1)]),_:1},8,["to"])])])],64)):(a(),r("div",R,[m("div",j,s(e.$t("ID is missing")),1),m("div",null,s(e.$t("Oops sorry we cannot find what your looking for")),1)]))],64))]),_:1},8,["class"])]),_:1},8,["onRefresh"]),i(A,{ref:"confirm_dialog",data:g.DataStore.data_dialog,onAfterConfirm:f.afterConfirm},null,8,["data","onAfterConfirm"])],64)}var ie=D(z,[["render",F]]);export{ie as default};
