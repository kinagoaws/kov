import{initializeApp}from"https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";import{getFirestore,onSnapshot,collection,doc,getDocs,getDoc,query,orderBy,limit,where,Timestamp,addDoc,setDoc,updateDoc,serverTimestamp,deleteDoc}from"https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";var empty=function(e){if(typeof e==="undefined"||e==null||e==""||e=="null"||e=="undefined"){return true}return false};let $fc=JSON.parse(firebase_configuration);const firebaseConfig={apiKey:$fc.firebase_apikey,authDomain:$fc.firebase_domain,projectId:$fc.firebase_projectid,storageBucket:$fc.firebase_storagebucket,messagingSenderId:$fc.firebase_messagingid,appId:$fc.firebase_appid};const firebaseCollectionEnum={drivers:"drivers",limit:500};const firebaasApp=initializeApp(firebaseConfig);const firebaseDb=getFirestore(firebaasApp);const app_track_order=Vue.createApp({data(){return{data:[],driver_uuid:null,lastSentPosition:null,newPosition:null,threshold_meters:null}},mounted(){if(typeof threshold_meters!=="undefined"&&threshold_meters!==null){this.threshold_meters=threshold_meters}else{this.threshold_meters=50}},watch:{driver_uuid(e,t){this.getFirebaseData()}},methods:{getFirebaseData(){console.log("getFirebaseData");const e=doc(firebaseDb,firebaseCollectionEnum.drivers,this.driver_uuid);const t=onSnapshot(e,t=>{if(t.exists()){let e=t.data();console.log("results",e);const{lng:s,lat:i}=e;this.newPosition={lng:s,lat:i};if(!this.lastSentPosition||this.isSignificantChange(this.newPosition,this.lastSentPosition,this.threshold_meters)){console.log("update location");this.lastSentPosition={lng:s,lat:i};window.app_orders_track.setDriverLocation(e)}else{console.log("same location")}}},e=>{console.error("Error fetching chat document:",e)})},isSignificantChange(e,t,s=50){const i=this.getDistance(e.lat,e.lng,t.lat,t.lng);console.log("distance",i);return i>s},getDistance(e,t,s,i){const o=6371e3;const a=e*Math.PI/180;const r=s*Math.PI/180;const n=(s-e)*Math.PI/180;const c=(i-t)*Math.PI/180;const l=Math.sin(n/2)*Math.sin(n/2)+Math.cos(a)*Math.cos(r)*Math.sin(c/2)*Math.sin(c/2);const d=2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l));const h=o*d;return h}}});window.vm_track_order=app_track_order.mount("#app-track-order");