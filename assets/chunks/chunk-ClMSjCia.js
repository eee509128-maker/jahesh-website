import{r as m,R as x,j as y}from"./chunk-_4i898Gl.js";var N=`data:image/svg+xml;base64,${btoa(`<svg
  width="140"
  height="140"
  viewBox="0 0 600 600"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  >
  <rect width="600" height="600" fill="#DFE3E6" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M450 170H150C141.716 170 135 176.716 135 185V415C135 423.284 141.716 430 150 430H450C458.284 430 465 423.284 465 415V185C465 176.716 458.284 170 450 170ZM150 145C127.909 145 110 162.909 110 185V415C110 437.091 127.909 455 150 455H450C472.091 455 490 437.091 490 415V185C490 162.909 472.091 145 450 145H150Z"
    fill="#C1C8CD"
  />
  <path
    d="M237.135 235.012C237.135 255.723 220.345 272.512 199.635 272.512C178.924 272.512 162.135 255.723 162.135 235.012C162.135 214.301 178.924 197.512 199.635 197.512C220.345 197.512 237.135 214.301 237.135 235.012Z"
    fill="#C1C8CD"
  />
  <path
    d="M160 405V367.205L221.609 306.364L256.552 338.628L358.161 234L440 316.043V405H160Z"
    fill="#C1C8CD"
  />
</svg>`)}`,I=[16,32,48,64,96,128,256,384],o=[640,750,828,1080,1200,1920,2048,3840],l=[...I,...o],L=(e,s)=>{if(s){const r=/(^|\s)(1?\d?\d)vw/g,t=[];for(let a;a=r.exec(s);a)t.push(Number.parseInt(a[2],10));if(t.length){const a=Math.min(...t)*.01;return{widths:l.filter(d=>d>=o[0]*a),kind:"w"}}return{widths:l,kind:"w"}}if(e==null)return{widths:o,kind:"w"};const n=2;let i=l.findIndex(r=>r>=n*e);return i=i<0?l.length:i,{widths:l.slice(0,i+1),kind:"w"}},A=({src:e,width:s,quality:n,sizes:i,loader:r})=>{const{widths:t,kind:a}=L(s,i);return{sizes:!i&&a==="w"?"100vw":i,srcSet:t.map((d,c)=>`${r({src:e,quality:n,width:d})} ${a==="w"?d:c+1}${a}`).join(", "),src:r({src:e,quality:n,width:t[t.length-1]})}},w=e=>{if(typeof e=="number")return Math.round(e);if(typeof e=="string"){const s=Number.parseFloat(e);if(!Number.isNaN(s))return Math.round(s)}},E="(min-width: 1280px) 50vw, 100vw",M=80,k=e=>{try{return new URL(e),!0}catch{return!1}},D=e=>{const s=w(e.width),n=Math.max(Math.min(w(e.quality)??M,100),0);if(e.src!=null&&e.src!==""){if(e.src.startsWith("data:"))return{src:e.src};if(e.srcSet==null&&e.optimize){const r=e.sizes??(e.width==null?E:void 0);return A({src:e.src,width:s,quality:n,sizes:r,loader:e.loader})}const i={src:k(e.src)?e.src:e.loader({src:e.src,format:"raw"})};return e.srcSet!=null&&(i.srcSet=e.srcSet),e.sizes!=null&&(i.sizes=e.sizes),i}},R=({quality:e,loader:s,optimize:n=!0,loading:i="lazy",decoding:r="async",...t})=>{const a=D({src:t.src,srcSet:t.srcSet,sizes:t.sizes,width:t.width,quality:e,loader:s,optimize:n})??{src:N};return{alt:"",...t.alt!==void 0?{alt:t.alt}:{},...t.width!==void 0?{width:t.width}:{},...t.height!==void 0?{height:t.height}:{},...a,decoding:r,loading:i}};const V=({props:e,imageLoader:s,renderer:n})=>{let{loading:i="lazy",width:r,height:t,optimize:a=!0,decoding:d,quality:c,$webstudio$canvasOnly$assetId:u,alt:v,sizes:f,srcSet:C,src:z,...S}=e;const h=String(z??"");let g=h;return n==="canvas"&&(i="eager",d="sync",g=u??h,r!==void 0&&t!==void 0&&Number.isNaN(r)&&Number.isNaN(t)&&(a=!1,r=void 0,t=void 0)),{key:g,imageProps:{...S,...R({alt:v,width:r,height:t,sizes:f,src:h,srcSet:C,quality:c,loader:s,optimize:a,loading:i,decoding:d})}}},$=m.forwardRef((e,s)=>{const{imageLoader:n,renderer:i}=m.useContext(x),{key:r,imageProps:t}=V({props:e,imageLoader:n,renderer:i});return y.jsx("img",{...t,ref:s},r)});$.displayName="Image";export{$ as d};
