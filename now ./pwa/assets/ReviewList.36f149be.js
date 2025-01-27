import{_ as Q,aA as L,aB as q,A as y,n as P,p as e,a2 as s,f as i,t as n,ar as a,$ as c,au as d,q as m,F as l,a3 as g,a6 as b,a7 as I,a8 as V,Z as v}from"./index.c29f7992.js";import{Q as R}from"./QSpace.0d53e539.js";import{Q as w}from"./QImg.a00dd4e9.js";import{Q as $}from"./QRating.d40e6323.js";import{Q as B}from"./QBadge.50ff0feb.js";import{Q as D}from"./QList.04c37cb8.js";import{Q as A}from"./QInnerLoading.d034c390.js";import{Q as C}from"./QSpinnerDots.f880c3c3.js";import{Q as z}from"./QInfiniteScroll.894949b1.js";import"./format.de7e9769.js";const N={name:"ReviewList",props:["is_refresh"],components:{ImagePreview:L(()=>q(()=>import("./ImagePreview.2c99ac02.js"),["assets/ImagePreview.2c99ac02.js","assets/QToolbarTitle.38b5862b.js","assets/index.c29f7992.js","assets/index.8924bfb8.css","assets/QSpace.0d53e539.js","assets/QToolbar.19752286.js","assets/use-panel.777e53e3.js","assets/touch.9135741d.js","assets/selection.53b1fe34.js","assets/use-render-cache.3aae9b27.js"]))},data(){return{loading:!0,data:[],page:0,galleryList:[]}},computed:{hasData(){return this.data.length>0}},methods:{getReview(r,p){this.loading=!0,this.page=r,y.fetchDataByTokenPost("getReview","page="+r).then(u=>{this.data.push(u.details.data)}).catch(u=>{this.$refs.nscroll&&this.$refs.nscroll.stop()}).then(u=>{p(),this.loading=!1,y.empty(this.is_refresh)||this.is_refresh()})},setGallery(r){this.galleryList=r,this.$refs.imagePreview.modal=!this.$refs.imagePreview.modal},refresh(r){this.resetPagination(),r()},resetPagination(){this.page=0,this.data=[],this.$refs.nscroll.reset(),this.$refs.nscroll.resume(),this.$refs.nscroll.trigger()}}},S={key:0,class:"flex flex-center fit",style:{"min-height":"calc(70vh)"}},T={class:"full-width text-center"},E={class:"text-weight-bold"},F={class:"text-weight-light text-grey"},G={class:"row items-start q-gutter-sm q-mb-xs"},H={class:"col-2"},M={class:"col"},U={class:"font13 text-weight-bold line-normal ellipsis"},j={class:"font11 full-width text-grey text-weight-medium"},O={class:"col-3 text-right"},Z={key:0},J={class:"ellipsis-2-lines q-mt-xs q-mb-xs"},K=["innerHTML"],W={key:1,class:"q-gutter-sm row items-start"},X={key:1,class:"row justify-center absolute-bottom"};function Y(r,p,u,ee,h,_){const x=P("ImagePreview");return e(),s(l,null,[i(z,{ref:"nscroll",onLoad:_.getReview,offset:250},{default:n(()=>[!_.hasData&&!h.loading?(e(),s("div",S,[a("div",T,[a("div",E,c(r.$t("No reviews found")),1),a("div",F,c(r.$t("Reviews will show here")),1)])])):d("",!0),i(R,{class:"q-pa-xs"}),_.hasData?(e(),m(D,{key:1,separator:""},{default:n(()=>[(e(!0),s(l,null,g(h.data,f=>(e(),s(l,{key:f},[(e(!0),s(l,null,g(f,t=>(e(),m(b,{key:t},{default:n(()=>[i(I,null,{default:n(()=>[a("div",G,[a("div",H,[i(V,null,{default:n(()=>[i(w,{src:t.url_image,"spinner-color":"secondary","spinner-size":"sm",style:{"max-width":"80px"}},null,8,["src"])]),_:2},1024)]),a("div",M,[a("div",U,[t.as_anonymous===1?(e(),s(l,{key:0},[v(c(t.hidden_fullname),1)],64)):(e(),s(l,{key:1},[v(c(t.fullname),1)],64))]),a("div",j,c(t.date_created),1)]),a("div",O,[i($,{modelValue:t.rating,"onUpdate:modelValue":o=>t.rating=o,size:"13px",max:5,color:"grey","color-selected":"yellow-14",readonly:"",class:"q-mb-xs no-shadow"},null,8,["modelValue","onUpdate:modelValue"])])]),t.meta.tags_like?(e(),s("div",Z,[(e(!0),s(l,null,g(t.meta.tags_like,o=>(e(),s(l,{key:o},[o?(e(),m(B,{key:0,rounded:"",color:r.$q.dark.mode?"grey600":"mygrey","text-color":"grey",label:o,class:"q-pl-sm q-pr-sm q-mr-xs"},null,8,["color","label"])):d("",!0)],64))),128))])):d("",!0),a("div",J,[a("span",{innerHTML:t.review},null,8,K)]),t.meta.upload_images?(e(),s("div",W,[(e(!0),s(l,null,g(t.meta.upload_images,(o,k)=>(e(),s(l,{key:o},[k<=3?(e(),m(w,{key:0,src:o,"spinner-color":"secondary","spinner-size":"sm",style:{height:"50px","max-width":"50px"},class:"radius8 cursor-pointer",onClick:te=>_.setGallery(t.meta.upload_images)},null,8,["src","onClick"])):d("",!0)],64))),128))])):d("",!0)]),_:2},1024)]),_:2},1024))),128))],64))),128))]),_:1})):d("",!0)]),loading:n(()=>[h.page<=1?(e(),m(A,{key:0,showing:!0,color:"primary",size:"md","label-class":"dark"})):(e(),s("div",X,[i(C,{color:"secondary",size:"30px"})]))]),_:1},8,["onLoad"]),i(x,{ref:"imagePreview",gallery:h.galleryList,title:""},null,8,["gallery"])],64)}var ue=Q(N,[["render",Y]]);export{ue as default};
