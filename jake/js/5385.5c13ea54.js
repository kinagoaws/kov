"use strict";(globalThis["webpackChunkcom_kinago_single"]=globalThis["webpackChunkcom_kinago_single"]||[]).push([[5385],{5385:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var i=a(1758);function s(e,t,a,s,n,l){const o=(0,i.g2)("q-skeleton"),d=(0,i.g2)("q-carousel-slide"),r=(0,i.g2)("q-carousel");return n.loading?((0,i.uX)(),(0,i.Wv)(o,{key:0,height:l.screenSize,square:""},null,8,["height"])):((0,i.uX)(),(0,i.CE)(i.FK,{key:1},[l.hasData?((0,i.uX)(),(0,i.Wv)(r,{key:0,animated:"",modelValue:n.slide,"onUpdate:modelValue":t[0]||(t[0]=e=>n.slide=e),arrows:"",infinite:"",swipeable:"",autoplay:n.autoplay,"control-color":"cnavigation","control-type":"unelevated",height:"400px",class:"banner-carousel bg-grey-2"},{default:(0,i.k6)((()=>[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.data,((e,t)=>((0,i.uX)(),(0,i.Wv)(d,{key:e.banner_id,name:t,"img-src":e.image,class:"cursor-pointer",onClick:t=>l.showItems(e)},null,8,["name","img-src","onClick"])))),128))])),_:1},8,["modelValue","autoplay"])):(0,i.Q3)("",!0)],64))}var n=a(2911);const l={name:"BannerCarousel",mounted(){this.getBanner()},data(){return{slide:0,data:[],item_data:[],loading:!1,autoplay:!0}},computed:{screenSize(){return this.$q.screen.lt.sm?"150px":this.$q.screen.lt.md?"300px":"400px"},hasData(){return Object.keys(this.data).length>0}},methods:{showItems(e){n.A.empty(this.item_data[e.item_id])||this.$router.push({name:"product",params:{slug:this.item_data[e.item_id].slug,cat_id:this.item_data[e.item_id].cat_id,item_uuid:this.item_data[e.item_id].item_token}})},getBanner(){this.loading=!0,n.A.getBanner().then((e=>{this.data=e.details.data,this.item_data=e.details.item_data})).catch((e=>{this.data=[],this.item_data=[]})).then((e=>{this.loading=!1}))}}};var o=a(2807),d=a(3820),r=a(3454),u=a(8951),m=a(8582),h=a.n(m);const c=(0,o.A)(l,[["render",s]]),g=c;h()(l,"components",{QSkeleton:d.Ay,QCarousel:r.A,QCarouselSlide:u.A})}}]);