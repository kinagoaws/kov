import{Q as f}from"./QInnerLoading.d034c390.js";import{_ as g,u as y,A as i,p as u,q as m,t as a,a1 as b,b8 as v,f as o,ar as r,av as n,$ as d,a4 as c,Z as _,b9 as k}from"./index.c29f7992.js";import{Q as q}from"./QSelect.ae814dfc.js";import{Q as w}from"./QSpace.0d53e539.js";import{Q as V}from"./QForm.32515fc9.js";import{Q}from"./QPage.1b02519d.js";import"./QChip.5de2d333.js";import"./QItemLabel.1db45aa2.js";import"./QMenu.074d3579.js";import"./selection.53b1fe34.js";import"./rtl.276c3f1b.js";import"./format.de7e9769.js";const S={name:"MerchantAddress",data(){return{loading:!1,loading2:!1,address:"",latitude:"",lontitude:"",delivery_distance_covered:"",distance_unit:""}},setup(e){return{DataStore:y()}},created(){this.getInformation()},methods:{refresh(e){this.getInformation(e)},getInformation(e){this.loading=!0,i.fetchDataByTokenPost("getInformation").then(t=>{this.address=t.details.address,this.latitude=t.details.latitude,this.lontitude=t.details.lontitude,this.delivery_distance_covered=t.details.delivery_distance_covered,this.distance_unit=t.details.distance_unit}).catch(t=>{i.notify("dark",t,"error",this.$q)}).then(t=>{this.loading=!1,i.empty(e)||e()})},onSubmit(){i.showLoadingBox("",this.$q),i.fetchDataByToken("saveAddress",{address:this.address,latitude:this.latitude,lontitude:this.lontitude,delivery_distance_covered:this.delivery_distance_covered,distance_unit:this.distance_unit}).then(e=>{i.notify("light-green",e.msg,"check_circle",this.$q)}).catch(e=>{i.notify("dark",e,"error",this.$q)}).then(e=>{i.hideLoadingBox(this.$q)})}}},$={class:"q-gutter-md"},D={class:"row items-center field-no-bottom"},z={class:"font11 text-grey q-mb-none"},B={class:"text-subtitle1"},I={class:"q-gutter-y-md"};function A(e,t,C,h,s,p){return u(),m(Q,{class:b([{"bg-mydark text-white":e.$q.dark.mode,"bg-grey-1 text-dark":!e.$q.dark.mode},"q-pr-md q-pl-md"])},{default:a(()=>[s.loading?(u(),m(f,{key:0,showing:!0,color:"primary",size:"md"})):(u(),m(v,{key:1,class:"q-pa-none no-shadow"},{default:a(()=>[o(k,null,{default:a(()=>[o(V,{onSubmit:p.onSubmit},{default:a(()=>[r("div",$,[o(n,{outlined:"",modelValue:s.address,"onUpdate:modelValue":t[0]||(t[0]=l=>s.address=l),label:e.$t("Address"),"stack-label":"",color:"grey-5","lazy-rules":"",rules:[l=>l&&l.length>0||this.$t("This field is required")]},null,8,["modelValue","label","rules"])]),r("div",D,[o(n,{outlined:"",modelValue:s.latitude,"onUpdate:modelValue":t[1]||(t[1]=l=>s.latitude=l),label:e.$t("Latitude"),"stack-label":"",color:"grey-5","lazy-rules":"",rules:[l=>l&&l.length>0||this.$t("This field is required")],class:"col q-mr-sm"},null,8,["modelValue","label","rules"]),o(n,{outlined:"",modelValue:s.lontitude,"onUpdate:modelValue":t[2]||(t[2]=l=>s.lontitude=l),label:e.$t("Lontitude"),"stack-label":"",color:"grey-5","lazy-rules":"",rules:[l=>l&&l.length>0||this.$t("This field is required")],class:"col"},null,8,["modelValue","label","rules"])]),r("p",z,d(e.$t("Get your address geolocation via service like"))+" https://www.maps.ie/coordinates.html"+d(e.$t("or"))+" https://www.latlong.net/, "+d(e.$t("entering invalid coordinates will make your store not available for ordering")),1),o(c,{flat:"",color:"blue","no-caps":"",size:"sm",class:"q-pa-none q-mt-none",href:"https://www.maps.ie/coordinates.html",target:"_blank"},{default:a(()=>[_(d(e.$t("Click here")),1)]),_:1}),r("div",B,d(e.$t("Radius distance covered")),1),r("div",I,[o(n,{outlined:"",modelValue:s.delivery_distance_covered,"onUpdate:modelValue":t[3]||(t[3]=l=>s.delivery_distance_covered=l),label:e.$t("Delivery Distance Covered"),"stack-label":"",color:"grey-5","lazy-rules":"",autogrow:""},null,8,["modelValue","label"]),o(q,{outlined:"",modelValue:s.distance_unit,"onUpdate:modelValue":t[4]||(t[4]=l=>s.distance_unit=l),options:h.DataStore.unit,label:e.$t("Distance Unit"),color:"grey-5","stack-label":"","map-options":"","emit-value":""},null,8,["modelValue","options","label"])]),o(w,{class:"q-pa-sm"}),o(c,{type:"submit",color:"primary","text-color":"white",label:e.$t("Save"),unelevated:"",class:"full-width radius8",size:"lg","no-caps":""},null,8,["label"])]),_:1},8,["onSubmit"])]),_:1})]),_:1}))]),_:1},8,["class"])}var H=g(S,[["render",A]]);export{H as default};
