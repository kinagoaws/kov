"use strict";(globalThis["webpackChunkcom_kinago_single"]=globalThis["webpackChunkcom_kinago_single"]||[]).push([[752],{752:(a,t,e)=>{e.r(t),e.d(t,{default:()=>_});var n=e(1758),s=e(8790);const o={class:"row justify-center q-pa-md"},i={class:"col-md-9 col-12"},l={class:"text-left"},g={class:"no-margin text-weight-bold q-pb-sm"},d=["innerHTML"];function c(a,t,e,c,r,u){const h=(0,n.g2)("LocationNav"),k=(0,n.g2)("q-inner-loading"),m=(0,n.g2)("q-card-section"),p=(0,n.g2)("q-card"),b=(0,n.g2)("q-page");return(0,n.uX)(),(0,n.Wv)(b,{padding:""},{default:(0,n.k6)((()=>[(0,n.bF)(h),(0,n.Lk)("div",o,[(0,n.Lk)("div",i,[r.loading?((0,n.uX)(),(0,n.Wv)(k,{key:0,showing:r.loading,"label-class":"text-warning","label-style":"font-size: 1.1em",color:"warning"},null,8,["showing"])):((0,n.uX)(),(0,n.CE)(n.FK,{key:1},[!r.loading&&u.hasData?((0,n.uX)(),(0,n.CE)(n.FK,{key:0},[(0,n.Lk)("div",l,[(0,n.Lk)("h4",g,(0,s.v_)(r.data.title),1)]),(0,n.bF)(p,{flat:""},{default:(0,n.k6)((()=>[(0,n.bF)(m,null,{default:(0,n.k6)((()=>[(0,n.Lk)("span",{innerHTML:r.data.long_content},null,8,d)])),_:1})])),_:1})],64)):(0,n.Q3)("",!0)],64))])])])),_:1})}var r=e(2911);const u={name:"CustomPage",components:{LocationNav:(0,n.$V)((()=>Promise.all([e.e(4121),e.e(996),e.e(7691)]).then(e.bind(e,5897))))},data(){return{loading:!0,data:[],message:""}},created(){this.getPage()},updated(){this.getPage()},computed:{hasData(){return Object.keys(this.data).length>0}},methods:{getPage(){this.loading=!0,r.A.fetchDataPost("getPage","slug="+this.$route.params.slug).then((a=>{this.data=a.details})).catch((a=>{this.$router.push("/404")})).then((a=>{this.loading=!1}))}}};var h=e(2807),k=e(7716),m=e(9035),p=e(3316),b=e(4189),v=e(8582),f=e.n(v);const L=(0,h.A)(u,[["render",c]]),_=L;f()(u,"components",{QPage:k.A,QInnerLoading:m.A,QCard:p.A,QCardSection:b.A})}}]);