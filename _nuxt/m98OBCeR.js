import{u as m,q as p}from"./lkotMuba.js";import{l as h,i as g,c as o,F as v,r as k,o as a,n as w,a as r,t as l}from"./BIsNuwlJ.js";import"./CnhL7OkL.js";const y={class:"leaderboard-container"},C={class:"flex"},b={class:"rank-icon"},B=["src"],F=["href"],M={class:"text-sm"},E={__name:"leaderboard",async setup(q){let s,n;const{data:u}=([s,n]=h(()=>m("people",()=>p("people").find())),s=await s,n(),s),f=g(()=>[...u.value].sort((e,i)=>i.profileMetrics.followersCount-e.profileMetrics.followersCount));function _(e){return e===0?"gold":e===1?"silver":e===2?"bronze":""}function d(e){return e===0?"🥇":e===1?"🥈":e===2?"🥉":"🏅"}return(e,i)=>(a(),o("div",y,[(a(!0),o(v,null,k(f.value.slice(0,25),(t,c)=>(a(),o("div",{key:t.username,class:w(["leaderboard-entry",_(c)])},[r("div",C,[r("div",b,l(d(c)),1),r("img",{src:t.profileImageUrl,class:"w-16 h-16 rounded-full"},null,8,B)]),r("a",{href:t.profileUrl,class:"text-md font-semibold hover:underline",target:"_blank"},l(t.name),9,F),r("p",M,"Followers: "+l(t.profileMetrics.followersCount),1)],2))),128))]))}};export{E as default};
