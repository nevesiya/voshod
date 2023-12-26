import{a as o}from"./axios-QLjAsgXu.js";async function n(r,t=null){try{const a=await o.get(r);if(a.data)return a.data}catch(a){if(console.error(a),t)return await n(t);throw a}}export{n as f};
