import{y as r,i as n,W as c,A as h,x as o,X as l,o as u,c as d,l as f}from"./BuHKIe1N.js";const g=["src","alt","width","height"],p=r({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const t=e,a=n(()=>{var i;if((i=t.src)!=null&&i.startsWith("/")&&!t.src.startsWith("//")){const s=c(h(o().app.baseURL));if(s!=="/"&&!t.src.startsWith(s))return l(s,t.src)}return t.src});return(i,s)=>(u(),d("img",{src:f(a),alt:e.alt,width:e.width,height:e.height},null,8,g))}});export{p as default};