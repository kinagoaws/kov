"use strict";(globalThis["webpackChunkcom_kinago_single"]=globalThis["webpackChunkcom_kinago_single"]||[]).push([[3045],{3045:(e,t,i)=>{i.r(t),i.d(t,{default:()=>A});var s=i(1758),l=i(8790),n=i(9104);const a={class:"q-mt-md flex justify-between items-center"},r={class:"text-weight-bold no-margin"},o={class:"row inline q-col-gutter-md"},d={class:"column"},c={class:"column"},u={class:"q-mt-md"},m={key:0},g={class:"relative-position"},p={class:"absolute-bottom-right q-pa-sm"},h={class:"q-pt-sm"},k={key:0,class:"text-weight-bold text-h5"},v={class:"line-normal text-body2 ellipsis"};function b(e,t,i,b,w,_){const S=(0,s.g2)("q-btn"),y=(0,s.g2)("q-skeleton"),C=(0,s.g2)("q-img"),f=(0,s.g2)("q-card"),q=(0,s.g2)("router-link"),F=(0,s.g2)("swiper-slide"),L=(0,s.g2)("swiper");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",a,[(0,s.Lk)("div",null,[(0,s.Lk)("h5",r,(0,l.v_)(i.title),1)]),(0,s.Lk)("div",null,[(0,s.Lk)("div",o,[(0,s.Lk)("div",d,[(0,s.bF)(S,{round:"",unelevated:"",dense:"",color:"warning",icon:"ion-arrow-back",class:"btn-icon-small",onClick:t[0]||(t[0]=(0,n.D$)((e=>b.slider.slidePrev()),["stop"]))})]),(0,s.Lk)("div",c,[(0,s.bF)(S,{round:"",unelevated:"",dense:"",color:"warning",icon:"ion-arrow-forward",class:"btn-icon-small",onClick:t[1]||(t[1]=(0,n.D$)((e=>b.slider.slideNext()),["stop"]))})])])])]),(0,s.Lk)("div",u,[w.loading?((0,s.uX)(),(0,s.CE)("div",m,[(0,s.bF)(y,{height:"130px"})])):((0,s.uX)(),(0,s.Wv)(L,{key:1,"slides-per-view":_.getPerSlide,"space-between":10,loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},modules:b.modules,onSwiper:b.onSwiper},{default:(0,s.k6)((()=>[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(w.data,(e=>((0,s.uX)(),(0,s.CE)(s.FK,{key:e},[e.slug?((0,s.uX)(),(0,s.Wv)(F,{key:0},{default:(0,s.k6)((()=>[(0,s.bF)(q,{to:{name:"product",params:{slug:e.slug,cat_id:e.cat_id,item_uuid:e.item_uuid}}},{default:(0,s.k6)((()=>[(0,s.bF)(f,{flat:"",bordered:"false",class:"q-pa-sm"},{default:(0,s.k6)((()=>[(0,s.Lk)("div",g,[(0,s.bF)(C,{fit:"contain",src:e.url_image,style:{"max-width":"100%",height:"120px"},"spinner-color":"warning","spinner-size":"sm","placeholder-src":"placeholder.png",class:"radius10"},null,8,["src"]),(0,s.Lk)("div",p,[(0,s.bF)(S,{round:"",color:"dark",icon:"add",unelevated:"",size:"sm"})])]),(0,s.Lk)("div",h,[e.price?((0,s.uX)(),(0,s.CE)("div",k,[e.price[0]?((0,s.uX)(),(0,s.CE)(s.FK,{key:0},[e.price[0].discount>0?((0,s.uX)(),(0,s.CE)(s.FK,{key:0},[(0,s.eW)((0,l.v_)(e.price[0].pretty_price_after_discount),1)],64)):((0,s.uX)(),(0,s.CE)(s.FK,{key:1},[(0,s.eW)((0,l.v_)(e.price[0].pretty_price),1)],64))],64)):(0,s.Q3)("",!0)])):(0,s.Q3)("",!0),(0,s.Lk)("div",v,(0,l.v_)(e.item_name),1)])])),_:2},1024)])),_:2},1032,["to"])])),_:2},1024)):(0,s.Q3)("",!0)],64)))),128))])),_:1},8,["slides-per-view","modules","onSwiper"]))])],64)}var w=i(8734),_=i(2911),S=i(4266),y=i(2576),C=i(1464),f=i(2302);const q={name:"SimilarItems",props:["title","bg","change_currency"],components:{Swiper:S.RC,SwiperSlide:S.qr},data(){return{data:[],loading:!0}},setup(e){const t=(0,C.Q)(),i=(0,f.C)(),s=(0,w.KR)(null),l=e=>{s.value=e};return{slider:s,onSwiper:l,modules:[y.Ij],DataStorePersisted:t,SettingsStore:i}},async mounted(){Object.keys(this.SettingsStore.settings_data).length>0?this.getSimilarItems(!0):this.$watch((()=>this.SettingsStore.$state.settings_data),((e,t)=>{this.getSimilarItems(!0)}))},computed:{getPerSlide(){return this.$q.screen.lt.sm?1.2:this.$q.screen.lt.md?2.2:4}},watch:{change_currency(e,t){this.getSimilarItems(!1)}},methods:{getSimilarItems(e){this.loading=e,_.A.SimilarItems(this.DataStorePersisted.getUseCurrency()).then((e=>{this.data=e.details.data})).catch((e=>{console.debug(e)})).then((e=>{this.loading=!1}))}}};var F=i(2807),L=i(6384),I=i(3820),X=i(3316),x=i(2665),E=i(8582),Q=i.n(E);const K=(0,F.A)(q,[["render",b]]),A=K;Q()(q,"components",{QBtn:L.A,QSkeleton:I.Ay,QCard:X.A,QImg:x.A})}}]);