"use strict";(globalThis["webpackChunkcom_kinago_single"]=globalThis["webpackChunkcom_kinago_single"]||[]).push([[345],{345:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var i=a(1758),s=a(8790);const l={class:"row justify-center q-pa-md"},n={class:"col-md-9 col-12"},m={class:"row"},o={key:0,class:"col-md-4 col-sm-4 col-xs-12"},d={class:"col-md-8 col-sm-8 col-xs-12"},c={class:"text-weight-bold"},r={key:0,class:"no-margin font12 text-weight-thin"},_={key:1,class:"no-margin font12 text-weight-thin"},u={class:"row justify-start items-center"},v={key:0,class:"col-lg-4 col-md-4 col-sm-4 col-xs-6 q-mb-md q-mb-sm-none"};function g(e,t,a,g,k,p){const h=(0,i.g2)("StickyBack"),b=(0,i.g2)("LocationNav"),f=(0,i.g2)("AccountNav"),y=(0,i.g2)("FavouritesSkeleton"),q=(0,i.g2)("q-item-section"),F=(0,i.g2)("q-item"),C=(0,i.g2)("q-separator"),A=(0,i.g2)("Favs"),X=(0,i.g2)("q-img"),x=(0,i.g2)("q-avatar"),S=(0,i.g2)("q-btn"),Q=(0,i.g2)("q-card"),E=(0,i.g2)("q-page");return(0,i.uX)(),(0,i.Wv)(E,{padding:""},{default:(0,i.k6)((()=>[p.isMobile?((0,i.uX)(),(0,i.Wv)(h,{key:0,url:"/account/menu",label:"Back"})):((0,i.uX)(),(0,i.Wv)(b,{key:1})),(0,i.Lk)("div",l,[(0,i.Lk)("div",n,[(0,i.Lk)("div",m,[p.isMobile?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.CE)("div",o,[(0,i.bF)(f)])),(0,i.Lk)("div",d,[(0,i.bF)(Q,{flat:"",class:"fit"},{default:(0,i.k6)((()=>[k.loading?((0,i.uX)(),(0,i.Wv)(y,{key:0})):((0,i.uX)(),(0,i.CE)(i.FK,{key:1},[(0,i.bF)(F,null,{default:(0,i.k6)((()=>[(0,i.bF)(q,null,{default:(0,i.k6)((()=>[(0,i.Lk)("h5",c,(0,s.v_)(e.$t("My Favorites")),1),p.hasData?((0,i.uX)(),(0,i.CE)("p",r,(0,s.v_)(e.$t("Your collection of foods")),1)):((0,i.uX)(),(0,i.CE)("p",_,(0,s.v_)(e.$t("You don't have any save food item here"))+"! ",1))])),_:1})])),_:1}),(0,i.bF)(C),(0,i.Lk)("section",null,[(0,i.Lk)("div",u,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(k.data,(t=>((0,i.uX)(),(0,i.CE)(i.FK,{key:t.item_id},[k.data_items[t.item_id]?((0,i.uX)(),(0,i.CE)("div",v,[(0,i.bF)(Q,{flat:"",class:"column items-center full-height q-pa-sm position-relative"},{default:(0,i.k6)((()=>[(0,i.bF)(A,{ref_for:!0,ref:"favs",item_token:k.data_items[t.item_id].item_uuid,cat_id:t.cat_id,active:t.save_item,onAfterSavefav:e=>p.afterSavefav(t),class:"absolute-top-right q-mr-md v",dense:p.isMobile},null,8,["item_token","cat_id","active","onAfterSavefav","dense"]),(0,i.bF)(x,{size:"80px",square:"",class:"col self-center"},{default:(0,i.k6)((()=>[(0,i.bF)(X,{fit:"contain",src:k.data_items[t.item_id].url_image,class:(0,s.C4)(["no-margin",{"light-dimmed":!1===t.save_item}]),height:"80px",loading:"lazy"},null,8,["src","class"])])),_:2},1024),(0,i.Lk)("p",{class:(0,s.C4)(["font12 q-mt-sm q-mb-none col ellipsis-2-lines line-height-normal q-pb-sm",{"text-grey":!1===t.save_item}])},(0,s.v_)(k.data_items[t.item_id].item_name),3),k.data_items[t.item_id]?((0,i.uX)(),(0,i.CE)("div",{key:0,class:(0,s.C4)(["font12 no-margin col q-pb-sm",{"text-grey":!1===t.save_item}])},[k.data_items[t.item_id].price[0]?((0,i.uX)(),(0,i.CE)(i.FK,{key:0},[k.data_items[t.item_id].price[0].discount<=0?((0,i.uX)(),(0,i.CE)(i.FK,{key:0},[(0,i.eW)((0,s.v_)(k.data_items[t.item_id].price[0].size_name)+" "+(0,s.v_)(k.data_items[t.item_id].price[0].pretty_price),1)],64)):((0,i.uX)(),(0,i.CE)(i.FK,{key:1},[(0,i.eW)((0,s.v_)(k.data_items[t.item_id].price[0].size_name)+" ",1),(0,i.Lk)("del",null,(0,s.v_)(k.data_items[t.item_id].price[0].pretty_price),1),(0,i.eW)(" "+(0,s.v_)(k.data_items[t.item_id].price[0].pretty_price_after_discount),1)],64))],64)):(0,i.Q3)("",!0)],2)):(0,i.Q3)("",!0),(0,i.bF)(S,{unelevated:"",rounded:"",color:"warning","text-color":"black","no-caps":"",label:e.$t("View Item"),class:"q-mb-sm q-pl-xs-sm q-pr-xs-sm",dense:e.$q.screen.lt.sm,disable:!t.save_item,to:{name:"product",params:{slug:k.data_items[t.item_id].slug,cat_id:t.cat_id,item_uuid:k.data_items[t.item_id].item_uuid}}},null,8,["label","dense","disable","to"])])),_:2},1024)])):(0,i.Q3)("",!0)],64)))),128))])])],64))])),_:1})])])])])])),_:1})}var k=a(2911);const p={name:"Favourites",components:{LocationNav:(0,i.$V)((()=>Promise.all([a.e(4121),a.e(996),a.e(7691)]).then(a.bind(a,5897)))),AccountNav:(0,i.$V)((()=>Promise.all([a.e(4121),a.e(996)]).then(a.bind(a,8275)))),Favs:(0,i.$V)((()=>a.e(3405).then(a.bind(a,3405)))),FavouritesSkeleton:(0,i.$V)((()=>Promise.all([a.e(4121),a.e(2907)]).then(a.bind(a,2907)))),StickyBack:(0,i.$V)((()=>Promise.all([a.e(4121),a.e(996)]).then(a.bind(a,7763))))},data(){return{data:[],data_items:[],loading:!1}},mounted(){this.getSaveItems()},computed:{hasData(){return this.data.length>0},isMobile(){return!!this.$q.screen.lt.md}},methods:{getSaveItems(){this.loading=!0,k.A.getSaveItems().then((e=>{this.data=e.details.data,this.data_items=e.details.items})).catch((e=>{})).then((e=>{this.loading=!1}))},afterSavefav(e){e.save_item=!e.save_item}}};var h=a(2807),b=a(7716),f=a(3316),y=a(124),q=a(5173),F=a(386),C=a(3952),A=a(2665),X=a(6384),x=a(8582),S=a.n(x);const Q=(0,h.A)(p,[["render",g]]),E=Q;S()(p,"components",{QPage:b.A,QCard:f.A,QItem:y.A,QItemSection:q.A,QSeparator:F.A,QAvatar:C.A,QImg:A.A,QBtn:X.A})}}]);