import{Q as o}from"./QSpace.aa134d93.js";import{_ as c,V as t,ba as i,n as d,p as l,q as h,X as a,f as s,a0 as r,Y as p}from"./index.e99838a1.js";import{Q as u}from"./QPage.b16eab69.js";const f={name:"NetworkError",methods:{async CheckNetwork(){t.showLoadingBox("",this.$q),(await i.getStatus()).connected===!0?(t.hideLoadingBox(this.$q),this.$router.push("/")):t.hideLoadingBox(this.$q)}}},k={class:"full-width text-center text-white"},g={class:"text-h6 text-weight-bold"},m={class:"text-secondary font12"};function _(e,w,x,$,y,n){return d(),l(u,{padding:"",class:"bg-darkmaroon flex flex-center"},{default:h(()=>[a("div",k,[s(o,{class:"q-pa-sm"}),a("div",g,r(e.$t("We're having trouble loading")),1),a("div",m,r(e.$t("Please check your Network connectivity and try again")),1),s(o,{class:"q-pa-sm"}),s(p,{onClick:n.CheckNetwork,label:e.$t("Try Again"),"no-caps":"",unelevated:"",rounded:"",color:"secondary","text-color":"primary",class:"radius6"},null,8,["onClick","label"])])]),_:1})}var b=c(f,[["render",_]]);export{b as default};
