import{j as a}from"./index.c29f7992.js";import{u as c}from"./AccessStore.abc714c5.js";var p=a(({router:o,store:i})=>{const r=c();o.beforeEach((s,m,e)=>{s.meta.checkPermission?r.hasAccess(s.meta.permissionName)?e():e({path:"/access-denied"}):e()})});export{p as default};
