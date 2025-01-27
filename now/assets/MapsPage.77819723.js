import{x as f,_ as k,ar as p,u as v,X as a,p as m,q as h,t as _,v as d,ae as c,aj as y,j as l,a4 as b,ah as C,au as g}from"./index.5da0f878.js";import{u as M,a as F}from"./use-page-sticky.afd4bec8.js";import{Q as A}from"./QPage.ab42a258.js";import{u as O}from"./LocationStore.cd56c6b6.js";var P=f({name:"QPageSticky",props:M,setup(t,{slots:e}){const{getStickyContent:n}=F();return()=>n(e)}});const D={name:"MapsPage",components:{MapComponents:p(()=>g(()=>import("./MapComponents.413cf3e8.js"),["assets/MapComponents.413cf3e8.js","assets/index.5da0f878.js","assets/index.96a3fb36.css","assets/index.4f152a18.js"])),launchNavigation:p(()=>g(()=>import("./launchNavigation.c594999e.js"),["assets/launchNavigation.c594999e.js","assets/index.5da0f878.js","assets/index.96a3fb36.css"]))},data(){return{map_center:[],markers:[],data:[],merchant:[],order_meta:[],steps:0,destination:[],loading:!0}},setup(){const t=v(),e=O();return{Activity:t,LocationStore:e}},watch:{Activity:{immediate:!0,deep:!0,handler(t,e){t.settings_loading||this.getMapsConfig()}},LocationStore:{immediate:!0,deep:!0,handler(t,e){Object.keys(t.coordinates).length>0&&(this.markers[0]={lat:parseFloat(t.coordinates.lat),lng:parseFloat(t.coordinates.lng),label:a.getIcon("driver"),icon:"marker_icon_rider"},a.empty(this.$refs.maps_cmp)||this.reCenterMap())}}},created(){this.getDelivery(),this.Activity.setTitle(this.$t("Maps"))},computed:{hasMarkers(){return Object.keys(this.map_center).length>0},hasData(){return Object.keys(this.map_center).length>0},hasDestination(){return Object.keys(this.destination).length>0}},methods:{getMapsConfig(){this.maps_config=this.Activity.maps_config,this.map_center={lat:parseFloat(this.maps_config.default_lat),lng:parseFloat(this.maps_config.default_lng)},Object.keys(this.markers).length>0||(this.markers[0]={lat:parseFloat(this.maps_config.default_lat),lng:parseFloat(this.maps_config.default_lng),label:a.getIcon("driver"),icon:"marker_icon_rider"})},reCenterMap(){this.$refs.maps_cmp.centerMap()},getDelivery(){let t=a.getDateNow();this.loading=!0,a.showLoadingBox("",this.$q),a.fetchDataByToken("getorderlist",{date:t}).then(e=>{this.data=e.details.data,this.merchant=e.details.merchant,this.order_meta=e.details.order_meta,this.getMarkers()}).catch(e=>{this.data=[],this.merchant=[],this.order_meta=[]}).then(e=>{a.hideLoadingBox(this.$q),this.loading=!1})},getMarkers(){Object.keys(this.data).length>0&&Object.entries(this.data).forEach(([t,e])=>{this.Activity.setTitle(this.$t("Order#")+t);let n=e.delivery_steps.steps;this.steps=n;let i=e.merchant_id,s=e.order_id,r=a.empty(this.merchant[i])?"":this.merchant[i],o=a.empty(this.order_meta[s])?"":this.order_meta[s];switch(n){case 2:case 3:case 4:this.markers.push({lat:parseFloat(r.latitude),lng:parseFloat(r.lontitude),label:a.getIcon("merchant"),icon:"marker_icon_merchant"}),this.destination={lat:parseFloat(r.latitude),lng:parseFloat(r.lontitude)};break;case 5:case 6:case 7:this.markers.push({lat:parseFloat(o.latitude),lng:parseFloat(o.longitude),label:a.getIcon("customer"),icon:"marker_icon_destination"}),this.destination={lat:parseFloat(o.latitude),lng:parseFloat(o.longitude)};break}})}}},I={class:"col-12 map bg-grey-1 relative-position"},S={class:"column items-center"},j={class:"col q-mb-md"},x={class:"col"};function N(t,e,n,i,s,r){const o=m("MapComponents"),u=m("launchNavigation");return h(),_(A,{id:"addressesOverview",class:"row items-stretch"},{default:d(()=>[c("div",I,[s.loading?y("",!0):(h(),_(o,{key:0,ref:"maps_cmp",class:"maps",keys:i.Activity.maps_config.key,provider:i.Activity.maps_config.provider,zoom:i.Activity.maps_config.zoom,center:s.map_center,markers:s.markers},null,8,["keys","provider","zoom","center","markers"]))]),l(P,{position:"bottom-right",offset:[18,40]},{default:d(()=>[c("div",S,[c("div",j,[l(b,{onClick:r.reCenterMap,fab:"",color:"deep-purple",unelevated:"",padding:"12px"},{default:d(()=>[l(C,{name:"my_location",size:"17px"})]),_:1},8,["onClick"])]),c("div",x,[l(u,{location:s.destination,size_icon:"lg"},null,8,["location"])])])]),_:1})]),_:1})}var z=k(D,[["render",N]]);export{z as default};
