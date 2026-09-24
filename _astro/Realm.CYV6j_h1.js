import"./disclose-version.DwdwGuwu.js";import{$ as Yi,D as mo,E as wt,G as je,H as nn,I as Se,J as Oe,K as _a,M as Xt,O as Lt,Q as li,Z as Ht,_ as ga,c as Pn,et as Sa,f as vo,g as Li,i as xs,it as qe,j as _o,p as Fn,q as mt,rt as Ln,tt as Ma,v as Bn,w as vt,y as go}from"./client.MYfq26Ug.js";var as=1e3,mn=1001,os=1002,Pt=1003,So=1004,Mo=1005,Ot=1006,xo=1007,ms=1008,Vn=1009,Eo=1010,yo=1011,xa=1012,To=1013,zn=1014,br=1015,wn=1016,Ea=1017,ya=1018,Ta=1020,bo=35902,Ao=35899,Ro=1021,wo=1022,Ui=1023,Di=1026,ba=1027,Co=1028,Aa=1029,Mr=1030,Ra=1031,wa=1033,Po=33776,Lo=33777,Io=33778,Uo=33779,Do=35840,No=35841,Oo=35842,Fo=35843,Bo=36196,Vo=37492,zo=37496,Go=37488,Ho=37489,ko=37490,Wo=37491,Xo=37808,qo=37809,Yo=37810,Ko=37811,Zo=37812,Jo=37813,$o=37814,Qo=37815,jo=37816,el=37817,tl=37818,nl=37819,il=37820,rl=37821,sl=36492,al=36494,ol=36495,ll=36283,cl=36284,hl=36285,ul=36286,xr=2300,ls=2301,Cr=2302,Es=2303,ys=2400,Ts=2401,bs=2402,dl=3200;var Zt="srgb",cs="srgb-linear",Er="linear",yr="srgb",Pr=7680;var fl=35044;var mi=2e3;function pl(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function ml(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Tr(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function vl(){const e=Tr("canvas");return e.style.display="block",e}var As={},vi=null;function Rs(...e){const t="THREE."+e.shift();vi?vi("log",t,...e):console.log(t,...e)}function Ca(e){const t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Le(...e){e=Ca(e);const t="THREE."+e.shift();if(vi)vi("warn",t,...e);else{const n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Ie(...e){e=Ca(e);const t="THREE."+e.shift();if(vi)vi("error",t,...e);else{const n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function fi(...e){const t=e.join(" ");t in As||(As[t]=!0,Le(...e))}function _l(e,t,n){return new Promise(function(i,r){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:r();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}var gl={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},Gn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}},At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lr=Math.PI/180,hs=180/Math.PI;function Fi(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(At[e&255]+At[e>>8&255]+At[e>>16&255]+At[e>>24&255]+"-"+At[t&255]+At[t>>8&255]+"-"+At[t>>16&15|64]+At[t>>24&255]+"-"+At[n&63|128]+At[n>>8&255]+"-"+At[n>>16&255]+At[n>>24&255]+At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]).toLowerCase()}function We(e,t,n){return Math.max(t,Math.min(n,e))}function Sl(e,t){return(e%t+t)%t}function Ir(e,t,n){return(1-n)*e+n*t}function yi(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function It(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var et=class Pa{static{Pa.prototype.isVector2=!0}constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=We(this.x,t.x,n.x),this.y=We(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=We(this.x,t,n),this.y=We(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(We(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Hn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,s,a){let o=n[i+0],c=n[i+1],l=n[i+2],u=n[i+3],f=r[s+0],h=r[s+1],p=r[s+2],M=r[s+3];if(u!==M||o!==f||c!==h||l!==p){let x=o*f+c*h+l*p+u*M;x<0&&(f=-f,h=-h,p=-p,M=-M,x=-x);let _=1-a;if(x<.9995){const d=Math.acos(x),A=Math.sin(d);_=Math.sin(_*d)/A,a=Math.sin(a*d)/A,o=o*_+f*a,c=c*_+h*a,l=l*_+p*a,u=u*_+M*a}else{o=o*_+f*a,c=c*_+h*a,l=l*_+p*a,u=u*_+M*a;const d=1/Math.sqrt(o*o+c*c+l*l+u*u);o*=d,c*=d,l*=d,u*=d}}e[t]=o,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,s){const a=n[i],o=n[i+1],c=n[i+2],l=n[i+3],u=r[s],f=r[s+1],h=r[s+2],p=r[s+3];return e[t]=a*p+l*u+o*h-c*f,e[t+1]=o*p+l*f+c*u-a*h,e[t+2]=c*p+l*h+a*f-o*u,e[t+3]=l*p-a*u-o*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,s=e._order,a=Math.cos,o=Math.sin,c=a(n/2),l=a(i/2),u=a(r/2),f=o(n/2),h=o(i/2),p=o(r/2);switch(s){case"XYZ":this._x=f*l*u+c*h*p,this._y=c*h*u-f*l*p,this._z=c*l*p+f*h*u,this._w=c*l*u-f*h*p;break;case"YXZ":this._x=f*l*u+c*h*p,this._y=c*h*u-f*l*p,this._z=c*l*p-f*h*u,this._w=c*l*u+f*h*p;break;case"ZXY":this._x=f*l*u-c*h*p,this._y=c*h*u+f*l*p,this._z=c*l*p+f*h*u,this._w=c*l*u-f*h*p;break;case"ZYX":this._x=f*l*u-c*h*p,this._y=c*h*u+f*l*p,this._z=c*l*p-f*h*u,this._w=c*l*u+f*h*p;break;case"YZX":this._x=f*l*u+c*h*p,this._y=c*h*u+f*l*p,this._z=c*l*p-f*h*u,this._w=c*l*u-f*h*p;break;case"XZY":this._x=f*l*u-c*h*p,this._y=c*h*u-f*l*p,this._z=c*l*p+f*h*u,this._w=c*l*u+f*h*p;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],a=t[5],o=t[9],c=t[2],l=t[6],u=t[10],f=n+a+u;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(l-o)*h,this._y=(r-c)*h,this._z=(s-i)*h}else if(n>a&&n>u){const h=2*Math.sqrt(1+n-a-u);this._w=(l-o)/h,this._x=.25*h,this._y=(i+s)/h,this._z=(r+c)/h}else if(a>u){const h=2*Math.sqrt(1+a-n-u);this._w=(r-c)/h,this._x=(i+s)/h,this._y=.25*h,this._z=(o+l)/h}else{const h=2*Math.sqrt(1+u-n-a);this._w=(s-i)/h,this._x=(r+c)/h,this._y=(o+l)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,s=e._w,a=t._x,o=t._y,c=t._z,l=t._w;return this._x=n*l+s*a+i*c-r*o,this._y=i*l+s*o+r*a-n*c,this._z=r*l+s*c+n*o-i*a,this._w=s*l-n*a-i*o-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,s=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,s=-s,a=-a);let o=1-t;if(a<.9995){const c=Math.acos(a),l=Math.sin(c);o=Math.sin(o*c)/l,t=Math.sin(t*c)/l,this._x=this._x*o+n*t,this._y=this._y*o+i*t,this._z=this._z*o+r*t,this._w=this._w*o+s*t,this._onChangeCallback()}else this._x=this._x*o+n*t,this._y=this._y*o+i*t,this._z=this._z*o+r*t,this._w=this._w*o+s*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class La{static{La.prototype.isVector3=!0}constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(ws.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(ws.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const n=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*i),u=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+c*l+a*f-o*u,this.y=i+c*u+o*l-s*f,this.z=r+c*f+s*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=We(this.x,t.x,n.x),this.y=We(this.y,t.y,n.y),this.z=We(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=We(this.x,t,n),this.y=We(this.y,t,n),this.z=We(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,r=t.y,s=t.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ur.copy(this).projectOnVector(t),this.sub(Ur)}reflect(t){return this.sub(Ur.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(We(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return n*n+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const r=Math.sin(n)*t;return this.x=r*Math.sin(i),this.y=Math.cos(n)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ur=new G,ws=new Hn,Fe=class Ia{static{Ia.prototype.isMatrix3=!0}constructor(t,n,i,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,r,s,a,o,c,l)}set(t,n,i,r,s,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],p=i[5],M=i[8],x=r[0],_=r[3],d=r[6],A=r[1],U=r[4],E=r[7],T=r[2],b=r[5],R=r[8];return s[0]=a*x+o*A+c*T,s[3]=a*_+o*U+c*b,s[6]=a*d+o*E+c*R,s[1]=l*x+u*A+f*T,s[4]=l*_+u*U+f*b,s[7]=l*d+u*E+f*R,s[2]=h*x+p*A+M*T,s[5]=h*_+p*U+M*b,s[8]=h*d+p*E+M*R,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return n*a*u-n*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=u*a-o*l,h=o*c-u*s,p=l*s-a*c,M=n*f+i*h+r*p;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/M;return t[0]=f*x,t[1]=(r*l-u*i)*x,t[2]=(o*i-r*a)*x,t[3]=h*x,t[4]=(u*n-r*c)*x,t[5]=(r*s-o*n)*x,t[6]=p*x,t[7]=(i*c-l*n)*x,t[8]=(a*n-i*s)*x,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+n,0,0,1),this}scale(t,n){return fi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Dr.makeScale(t,n)),this}rotate(t){return fi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Dr.makeRotation(-t)),this}translate(t,n){return fi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Dr.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Dr=new Fe,Cs=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ps=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ml(){const e={enabled:!0,workingColorSpace:cs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer==="srgb"&&(r.r=vn(r.r),r.g=vn(r.g),r.b=vn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer==="srgb"&&(r.r=pi(r.r),r.g=pi(r.g),r.b=pi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?Er:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return fi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return fi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[cs]:{primaries:t,whitePoint:i,transfer:Er,toXYZ:Cs,fromXYZ:Ps,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:t,whitePoint:i,transfer:yr,toXYZ:Cs,fromXYZ:Ps,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}}),e}var ke=Ml();function vn(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function pi(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Kn,xl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Kn===void 0&&(Kn=Tr("canvas")),Kn.width=e.width,Kn.height=e.height;const i=Kn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Kn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Tr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=vn(r[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vn(t[n]/255)*255):t[n]=vn(t[n]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},El=0,vs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:El++}),this.uuid=Fi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(Nr(i[s].image)):r.push(Nr(i[s]))}else r=Nr(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Nr(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?xl.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}var yl=0,Or=new G,Qt=class _r extends Gn{constructor(t=_r.DEFAULT_IMAGE,n=_r.DEFAULT_MAPPING,i=mn,r=mn,s=Ot,a=ms,o=Ui,c=Vn,l=_r.DEFAULT_ANISOTROPY,u=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yl++}),this.uuid=Fi(),this.name="",this.source=new vs(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Or).x}get height(){return this.source.getSize(Or).y}get depth(){return this.source.getSize(Or).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){Le(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Le(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case as:t.x=t.x-Math.floor(t.x);break;case mn:t.x=t.x<0?0:1;break;case os:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x)}if(t.y<0||t.y>1)switch(this.wrapT){case as:t.y=t.y-Math.floor(t.y);break;case mn:t.y=t.y<0?0:1;break;case os:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y)}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=300;Qt.DEFAULT_ANISOTROPY=1;var _t=class Ua{static{Ua.prototype.isVector4=!0}constructor(t=0,n=0,i=0,r=1){this.x=t,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,r){return this.x=t,this.y=n,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,r,s;const c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],p=c[5],M=c[9],x=c[2],_=c[6],d=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(M-_)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(M+_)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(l+1)/2,E=(p+1)/2,T=(d+1)/2,b=(u+h)/4,R=(f+x)/4,m=(M+_)/4;return U>E&&U>T?U<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(U),r=b/i,s=R/i):E>T?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=b/r,s=m/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=R/s,r=m/s),this.set(i,r,s,n),this}let A=Math.sqrt((_-M)*(_-M)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(_-M)/A,this.y=(f-x)/A,this.z=(h-u)/A,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=We(this.x,t.x,n.x),this.y=We(this.y,t.y,n.y),this.z=We(this.z,t.z,n.z),this.w=We(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=We(this.x,t,n),this.y=We(this.y,t,n),this.z=We(this.z,t,n),this.w=We(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Tl=class extends Gn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},r=new Qt(i),s=n.count;for(let a=0;a<s;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new vs(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jt=class extends Tl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Da=class extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},bl=class extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},gt=class us{static{us.prototype.isMatrix4=!0}constructor(t,n,i,r,s,a,o,c,l,u,f,h,p,M,x,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,r,s,a,o,c,l,u,f,h,p,M,x,_)}set(t,n,i,r,s,a,o,c,l,u,f,h,p,M,x,_){const d=this.elements;return d[0]=t,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=M,d[11]=x,d[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new us().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const n=this.elements,i=t.elements,r=1/Zn.setFromMatrixColumn(t,0).length(),s=1/Zn.setFromMatrixColumn(t,1).length(),a=1/Zn.setFromMatrixColumn(t,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=a*u,p=a*f,M=o*u,x=o*f;n[0]=c*u,n[4]=-c*f,n[8]=l,n[1]=p+M*l,n[5]=h-x*l,n[9]=-o*c,n[2]=x-h*l,n[6]=M+p*l,n[10]=a*c}else if(t.order==="YXZ"){const h=c*u,p=c*f,M=l*u,x=l*f;n[0]=h+x*o,n[4]=M*o-p,n[8]=a*l,n[1]=a*f,n[5]=a*u,n[9]=-o,n[2]=p*o-M,n[6]=x+h*o,n[10]=a*c}else if(t.order==="ZXY"){const h=c*u,p=c*f,M=l*u,x=l*f;n[0]=h-x*o,n[4]=-a*f,n[8]=M+p*o,n[1]=p+M*o,n[5]=a*u,n[9]=x-h*o,n[2]=-a*l,n[6]=o,n[10]=a*c}else if(t.order==="ZYX"){const h=a*u,p=a*f,M=o*u,x=o*f;n[0]=c*u,n[4]=M*l-p,n[8]=h*l+x,n[1]=c*f,n[5]=x*l+h,n[9]=p*l-M,n[2]=-l,n[6]=o*c,n[10]=a*c}else if(t.order==="YZX"){const h=a*c,p=a*l,M=o*c,x=o*l;n[0]=c*u,n[4]=x-h*f,n[8]=M*f+p,n[1]=f,n[5]=a*u,n[9]=-o*u,n[2]=-l*u,n[6]=p*f+M,n[10]=h-x*f}else if(t.order==="XZY"){const h=a*c,p=a*l,M=o*c,x=o*l;n[0]=c*u,n[4]=-f,n[8]=l*u,n[1]=h*f+x,n[5]=a*u,n[9]=p*f-M,n[2]=M*f-p,n[6]=o*u,n[10]=x*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Al,t,Rl)}lookAt(t,n,i){const r=this.elements;return Dt.subVectors(t,n),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),En.crossVectors(i,Dt),En.lengthSq()===0&&(Math.abs(i.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),En.crossVectors(i,Dt)),En.normalize(),Ki.crossVectors(Dt,En),r[0]=En.x,r[4]=Ki.x,r[8]=Dt.x,r[1]=En.y,r[5]=Ki.y,r[9]=Dt.y,r[2]=En.z,r[6]=Ki.z,r[10]=Dt.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],p=i[13],M=i[2],x=i[6],_=i[10],d=i[14],A=i[3],U=i[7],E=i[11],T=i[15],b=r[0],R=r[4],m=r[8],y=r[12],W=r[1],D=r[5],O=r[9],Z=r[13],N=r[2],B=r[6],X=r[10],H=r[14],le=r[3],q=r[7],J=r[11],j=r[15];return s[0]=a*b+o*W+c*N+l*le,s[4]=a*R+o*D+c*B+l*q,s[8]=a*m+o*O+c*X+l*J,s[12]=a*y+o*Z+c*H+l*j,s[1]=u*b+f*W+h*N+p*le,s[5]=u*R+f*D+h*B+p*q,s[9]=u*m+f*O+h*X+p*J,s[13]=u*y+f*Z+h*H+p*j,s[2]=M*b+x*W+_*N+d*le,s[6]=M*R+x*D+_*B+d*q,s[10]=M*m+x*O+_*X+d*J,s[14]=M*y+x*Z+_*H+d*j,s[3]=A*b+U*W+E*N+T*le,s[7]=A*R+U*D+E*B+T*q,s[11]=A*m+U*O+E*X+T*J,s[15]=A*y+U*Z+E*H+T*j,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],p=t[14],M=t[3],x=t[7],_=t[11],d=t[15],A=c*p-l*h,U=o*p-l*f,E=o*h-c*f,T=a*p-l*u,b=a*h-c*u,R=a*f-o*u;return n*(x*A-_*U+d*E)-i*(M*A-_*T+d*b)+r*(M*U-x*T+d*R)-s*(M*E-x*b+_*R)}determinantAffine(){const t=this.elements,n=t[0],i=t[4],r=t[8],s=t[1],a=t[5],o=t[9],c=t[2],l=t[6],u=t[10];return n*(a*u-o*l)-i*(s*u-o*c)+r*(s*l-a*c)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],p=t[11],M=t[12],x=t[13],_=t[14],d=t[15],A=n*o-i*a,U=n*c-r*a,E=n*l-s*a,T=i*c-r*o,b=i*l-s*o,R=r*l-s*c,m=u*x-f*M,y=u*_-h*M,W=u*d-p*M,D=f*_-h*x,O=f*d-p*x,Z=h*d-p*_,N=A*Z-U*O+E*D+T*W-b*y+R*m;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/N;return t[0]=(o*Z-c*O+l*D)*B,t[1]=(r*O-i*Z-s*D)*B,t[2]=(x*R-_*b+d*T)*B,t[3]=(h*b-f*R-p*T)*B,t[4]=(c*W-a*Z-l*y)*B,t[5]=(n*Z-r*W+s*y)*B,t[6]=(_*E-M*R-d*U)*B,t[7]=(u*R-h*E+p*U)*B,t[8]=(a*O-o*W+l*m)*B,t[9]=(i*W-n*O-s*m)*B,t[10]=(M*b-x*E+d*A)*B,t[11]=(f*E-u*b-p*A)*B,t[12]=(o*y-a*D-c*m)*B,t[13]=(n*D-i*y+r*m)*B,t[14]=(x*U-M*T-_*A)*B,t[15]=(u*T-f*U+h*A)*B,this}scale(t){const n=this.elements,i=t.x,r=t.y,s=t.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=t.x,o=t.y,c=t.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,n,r,1,0,0,0,0,1),this}compose(t,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,l=s+s,u=a+a,f=o+o,h=s*l,p=s*u,M=s*f,x=a*u,_=a*f,d=o*f,A=c*l,U=c*u,E=c*f,T=i.x,b=i.y,R=i.z;return r[0]=(1-(x+d))*T,r[1]=(p+E)*T,r[2]=(M-U)*T,r[3]=0,r[4]=(p-E)*b,r[5]=(1-(h+d))*b,r[6]=(_+A)*b,r[7]=0,r[8]=(M+U)*R,r[9]=(_-A)*R,r[10]=(1-(h+x))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,i){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Zn.set(r[0],r[1],r[2]).length();const o=Zn.set(r[4],r[5],r[6]).length(),c=Zn.set(r[8],r[9],r[10]).length();s<0&&(a=-a),qt.copy(this);const l=1/a,u=1/o,f=1/c;return qt.elements[0]*=l,qt.elements[1]*=l,qt.elements[2]*=l,qt.elements[4]*=u,qt.elements[5]*=u,qt.elements[6]*=u,qt.elements[8]*=f,qt.elements[9]*=f,qt.elements[10]*=f,n.setFromRotationMatrix(qt),i.x=a,i.y=o,i.z=c,this}makePerspective(t,n,i,r,s,a,o=mi,c=!1){const l=this.elements,u=2*s/(n-t),f=2*s/(i-r),h=(n+t)/(n-t),p=(i+r)/(i-r);let M,x;if(c)M=s/(a-s),x=a*s/(a-s);else if(o===2e3)M=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===2001)M=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=M,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,i,r,s,a,o=mi,c=!1){const l=this.elements,u=2/(n-t),f=2/(i-r),h=-(n+t)/(n-t),p=-(i+r)/(i-r);let M,x;if(c)M=1/(a-s),x=a/(a-s);else if(o===2e3)M=-2/(a-s),x=-(a+s)/(a-s);else if(o===2001)M=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=M,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},Zn=new G,qt=new gt,Al=new G(0,0,0),Rl=new G(1,1,1),En=new G,Ki=new G,Dt=new G,Ls=new gt,Is=new Hn,Ni=class Na{constructor(t=0,n=0,i=0,r=Na.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,r=this._order){return this._x=t,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-We(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Ls.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ls,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Is.setFromEuler(this),this.setFromQuaternion(Is,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ni.DEFAULT_ORDER="XYZ";var Oa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},wl=0,Us=new G,Jn=new Hn,hn=new gt,Zi=new G,Ti=new G,Cl=new G,Pl=new Hn,Ds=new G(1,0,0),Ns=new G(0,1,0),Os=new G(0,0,1),Fs={type:"added"},Ll={type:"removed"},$n={type:"childadded",child:null},Fr={type:"childremoved",child:null},an=class gr extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wl++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gr.DEFAULT_UP.clone();const t=new G,n=new Ni,i=new Hn,r=new G(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new Fe}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=gr.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Jn.setFromAxisAngle(t,n),this.quaternion.multiply(Jn),this}rotateOnWorldAxis(t,n){return Jn.setFromAxisAngle(t,n),this.quaternion.premultiply(Jn),this}rotateX(t){return this.rotateOnAxis(Ds,t)}rotateY(t){return this.rotateOnAxis(Ns,t)}rotateZ(t){return this.rotateOnAxis(Os,t)}translateOnAxis(t,n){return Us.copy(t).applyQuaternion(this.quaternion),this.position.add(Us.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Ds,t)}translateY(t){return this.translateOnAxis(Ns,t)}translateZ(t){return this.translateOnAxis(Os,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Zi.copy(t):Zi.set(t,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ti.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(Ti,Zi,this.up):hn.lookAt(Zi,Ti,this.up),this.quaternion.setFromRotationMatrix(hn),r&&(hn.extractRotation(r.matrixWorld),Jn.setFromRotationMatrix(hn),this.quaternion.premultiply(Jn.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ie("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fs),$n.child=t,this.dispatchEvent($n),$n.child=null):Ie("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Ll),Fr.child=t,this.dispatchEvent(Fr),Fr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fs),$n.child=t,this.dispatchEvent($n),$n.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(t,n);if(s!==void 0)return s}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,t,Cl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,Pl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,i=t.y,r=t.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(n){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),p=a(t.animations),M=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),M.length>0&&(i.nodes=M)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};an.DEFAULT_UP=new G(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ui=class extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}},Il={type:"move"},Br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,s=null;const a=this._targetRay,o=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const h of e.hand.values()){const p=t.getJointPose(h,n),M=this._getHandJoint(c,h);p!==null&&(M.matrix.fromArray(p.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=p.radius),M.visible=p!==null}const l=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=l.position.distanceTo(u.position);c.inputState.pinching&&f>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Il)))}return a!==null&&(a.visible=i!==null),o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ui;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Fa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yn={h:0,s:0,l:0},Ji={h:0,s:0,l:0};function Vr(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var $e=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,ke.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ke.workingColorSpace){if(e=Sl(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=Vr(s,r,e+1/3),this.g=Vr(s,r,e),this.b=Vr(s,r,e-1/3)}return ke.colorSpaceToWorking(this,i),this}setStyle(e,t=Zt){function n(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){const n=Fa[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vn(e.r),this.g=vn(e.g),this.b=vn(e.b),this}copyLinearToSRGB(e){return this.r=pi(e.r),this.g=pi(e.g),this.b=pi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return ke.workingToColorSpace(Rt.copy(this),e),Math.round(We(Rt.r*255,0,255))*65536+Math.round(We(Rt.g*255,0,255))*256+Math.round(We(Rt.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ke.workingColorSpace){ke.workingToColorSpace(Rt.copy(this),t);const n=Rt.r,i=Rt.g,r=Rt.b,s=Math.max(n,i,r),a=Math.min(n,i,r);let o,c;const l=(a+s)/2;if(a===s)o=0,c=0;else{const u=s-a;switch(c=l<=.5?u/(s+a):u/(2-s-a),s){case n:o=(i-r)/u+(i<r?6:0);break;case i:o=(r-n)/u+2;break;case r:o=(n-i)/u+4}o/=6}return e.h=o,e.s=c,e.l=l,e}getRGB(e,t=ke.workingColorSpace){return ke.workingToColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=Zt){ke.workingToColorSpace(Rt.copy(this),e);const t=Rt.r,n=Rt.g,i=Rt.b;return e!=="srgb"?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(yn),this.setHSL(yn.h+e,yn.s+t,yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yn),e.getHSL(Ji);const n=Ir(yn.h,Ji.h,t),i=Ir(yn.s,Ji.s,t),r=Ir(yn.l,Ji.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rt=new $e;$e.NAMES=Fa;var Ul=class extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Yt=new G,un=new G,zr=new G,dn=new G,Qn=new G,jn=new G,Bs=new G,Gr=new G,Hr=new G,kr=new G,Wr=new _t,Xr=new _t,qr=new _t,bi=class ci{constructor(t=new G,n=new G,i=new G){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,r){r.subVectors(i,n),Yt.subVectors(t,n),r.cross(Yt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,n,i,r,s){Yt.subVectors(r,n),un.subVectors(i,n),zr.subVectors(t,n);const a=Yt.dot(Yt),o=Yt.dot(un),c=Yt.dot(zr),l=un.dot(un),u=un.dot(zr),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(l*c-o*u)*h,M=(a*u-o*c)*h;return s.set(1-p-M,M,p)}static containsPoint(t,n,i,r){return this.getBarycoord(t,n,i,r,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(t,n,i,r,s,a,o,c){return this.getBarycoord(t,n,i,r,dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,dn.x),c.addScaledVector(a,dn.y),c.addScaledVector(o,dn.z),c)}static getInterpolatedAttribute(t,n,i,r,s,a){return Wr.setScalar(0),Xr.setScalar(0),qr.setScalar(0),Wr.fromBufferAttribute(t,n),Xr.fromBufferAttribute(t,i),qr.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Wr,s.x),a.addScaledVector(Xr,s.y),a.addScaledVector(qr,s.z),a}static isFrontFacing(t,n,i,r){return Yt.subVectors(i,n),un.subVectors(t,n),Yt.cross(un).dot(r)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,r){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,n,i,r){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yt.subVectors(this.c,this.b),un.subVectors(this.a,this.b),Yt.cross(un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ci.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return ci.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,r,s){return ci.getInterpolation(t,this.a,this.b,this.c,n,i,r,s)}containsPoint(t){return ci.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ci.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,r=this.b,s=this.c;let a,o;Qn.subVectors(r,i),jn.subVectors(s,i),Gr.subVectors(t,i);const c=Qn.dot(Gr),l=jn.dot(Gr);if(c<=0&&l<=0)return n.copy(i);Hr.subVectors(t,r);const u=Qn.dot(Hr),f=jn.dot(Hr);if(u>=0&&f<=u)return n.copy(r);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),n.copy(i).addScaledVector(Qn,a);kr.subVectors(t,s);const p=Qn.dot(kr),M=jn.dot(kr);if(M>=0&&p<=M)return n.copy(s);const x=p*l-c*M;if(x<=0&&l>=0&&M<=0)return o=l/(l-M),n.copy(i).addScaledVector(jn,o);const _=u*M-p*f;if(_<=0&&f-u>=0&&p-M>=0)return Bs.subVectors(s,r),o=(f-u)/(f-u+(p-M)),n.copy(r).addScaledVector(Bs,o);const d=1/(_+x+h);return a=x*d,o=h*d,n.copy(i).addScaledVector(Qn,a).addScaledVector(jn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Bi=class{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Kt):Kt.fromBufferAttribute(r,s),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$i.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$i.copy(n.boundingBox)),$i.applyMatrix4(e.matrixWorld),this.union($i)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ai),Qi.subVectors(this.max,Ai),ei.subVectors(e.a,Ai),ti.subVectors(e.b,Ai),ni.subVectors(e.c,Ai),Tn.subVectors(ti,ei),bn.subVectors(ni,ti),In.subVectors(ei,ni);let t=[0,-Tn.z,Tn.y,0,-bn.z,bn.y,0,-In.z,In.y,Tn.z,0,-Tn.x,bn.z,0,-bn.x,In.z,0,-In.x,-Tn.y,Tn.x,0,-bn.y,bn.x,0,-In.y,In.x,0];return!Yr(t,ei,ti,ni,Qi)||(t=[1,0,0,0,1,0,0,0,1],!Yr(t,ei,ti,ni,Qi))?!1:(ji.crossVectors(Tn,bn),t=[ji.x,ji.y,ji.z],Yr(t,ei,ti,ni,Qi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},fn=[new G,new G,new G,new G,new G,new G,new G,new G],Kt=new G,$i=new Bi,ei=new G,ti=new G,ni=new G,Tn=new G,bn=new G,In=new G,Ai=new G,Qi=new G,ji=new G,Un=new G;function Yr(e,t,n,i,r){for(let s=0,a=e.length-3;s<=a;s+=3){Un.fromArray(e,s);const o=r.x*Math.abs(Un.x)+r.y*Math.abs(Un.y)+r.z*Math.abs(Un.z),c=t.dot(Un),l=n.dot(Un),u=i.dot(Un);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var pt=new G,er=new et,Dl=0,$t=class extends Gn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dl++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fl,this.updateRanges=[],this.gpuType=br,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)er.fromBufferAttribute(this,t),er.applyMatrix3(e),this.setXY(t,er.x,er.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),i=It(i,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},Ba=class extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Va=class extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}},_n=class extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}},Nl=new Bi,Ri=new G,Kr=new G,Ar=class{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Nl.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ri.subVectors(e,this.center);const t=Ri.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ri,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ri.copy(e.center).add(Kr)),this.expandByPoint(Ri.copy(e.center).sub(Kr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ol=0,Gt=new gt,Zr=new an,ii=new G,Nt=new Bi,wi=new Bi,Et=new G,Sn=class za extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ol++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pl(t)?Va:Ba)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Gt.makeRotationFromQuaternion(t),this.applyMatrix4(Gt),this}rotateX(t){return Gt.makeRotationX(t),this.applyMatrix4(Gt),this}rotateY(t){return Gt.makeRotationY(t),this.applyMatrix4(Gt),this}rotateZ(t){return Gt.makeRotationZ(t),this.applyMatrix4(Gt),this}translate(t,n,i){return Gt.makeTranslation(t,n,i),this.applyMatrix4(Gt),this}scale(t,n,i){return Gt.makeScale(t,n,i),this.applyMatrix4(Gt),this}lookAt(t){return Zr.lookAt(t),Zr.updateMatrix(),this.applyMatrix4(Zr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ii).negate(),this.translate(ii.x,ii.y,ii.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _n(i,3))}else{const i=Math.min(t.length,n.count);for(let r=0;r<i;r++){const s=t[r];n.setXYZ(r,s.x,s.y,s.z||0)}t.length>n.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Nt.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ar);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const i=this.boundingSphere.center;if(Nt.setFromBufferAttribute(t),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];wi.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Nt.min,wi.min),Nt.expandByPoint(Et),Et.addVectors(Nt.max,wi.max),Nt.expandByPoint(Et)):(Nt.expandByPoint(wi.min),Nt.expandByPoint(wi.max))}Nt.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)Et.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Et));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Et.fromBufferAttribute(o,l),c&&(ii.fromBufferAttribute(t,l),Et.add(ii)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new $t(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let m=0;m<i.count;m++)o[m]=new G,c[m]=new G;const l=new G,u=new G,f=new G,h=new et,p=new et,M=new et,x=new G,_=new G;function d(m,y,W){l.fromBufferAttribute(i,m),u.fromBufferAttribute(i,y),f.fromBufferAttribute(i,W),h.fromBufferAttribute(s,m),p.fromBufferAttribute(s,y),M.fromBufferAttribute(s,W),u.sub(l),f.sub(l),p.sub(h),M.sub(h);const D=1/(p.x*M.y-M.x*p.y);isFinite(D)&&(x.copy(u).multiplyScalar(M.y).addScaledVector(f,-p.y).multiplyScalar(D),_.copy(f).multiplyScalar(p.x).addScaledVector(u,-M.x).multiplyScalar(D),o[m].add(x),o[y].add(x),o[W].add(x),c[m].add(_),c[y].add(_),c[W].add(_))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let m=0,y=A.length;m<y;++m){const W=A[m],D=W.start,O=W.count;for(let Z=D,N=D+O;Z<N;Z+=3)d(t.getX(Z+0),t.getX(Z+1),t.getX(Z+2))}const U=new G,E=new G,T=new G,b=new G;function R(m){T.fromBufferAttribute(r,m),b.copy(T);const y=o[m];U.copy(y),U.sub(T.multiplyScalar(T.dot(y))).normalize(),E.crossVectors(b,y);const W=E.dot(c[m])<0?-1:1;a.setXYZW(m,U.x,U.y,U.z,W)}for(let m=0,y=A.length;m<y;++m){const W=A[m],D=W.start,O=W.count;for(let Z=D,N=D+O;Z<N;Z+=3)R(t.getX(Z+0)),R(t.getX(Z+1)),R(t.getX(Z+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new $t(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new G,s=new G,a=new G,o=new G,c=new G,l=new G,u=new G,f=new G;if(t)for(let h=0,p=t.count;h<p;h+=3){const M=t.getX(h+0),x=t.getX(h+1),_=t.getX(h+2);r.fromBufferAttribute(n,M),s.fromBufferAttribute(n,x),a.fromBufferAttribute(n,_),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,M),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),o.add(u),c.add(u),l.add(u),i.setXYZ(M,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(_,l.x,l.y,l.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Et.fromBufferAttribute(t,n),Et.normalize(),t.setXYZ(n,Et.x,Et.y,Et.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u);let p=0,M=0;for(let x=0,_=c.length;x<_;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*u;for(let d=0;d<u;d++)h[M++]=l[p++]}return new $t(h,u,f)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new za,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,i);n.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const h=l[u],p=t(h,i);c.push(p)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const p=l[f];u.push(p.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(n))}const s=t.morphAttributes;for(const l in s){const u=[],f=s[l];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jr=new G,Fl=new G,Bl=new Fe,Rn=class{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Jr.subVectors(n,t).cross(Fl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(Jr),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Bl.getNormalMatrix(e),i=this.coplanarPoint(Jr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Vl=0,Vi=class extends Gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vl++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pr,this.stencilZFail=Pr,this.stencilZPass=Pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const s=[];for(const a in r){const o=r[a];delete o.metadata,s.push(o)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Rn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new et().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new et().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},pn=new G,$r=new G,tr=new G,nr=new G,Ga=class{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pn.copy(this.origin).addScaledVector(this.direction,t),pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){$r.copy(e).add(t).multiplyScalar(.5),tr.copy(t).sub(e).normalize(),nr.copy(this.origin).sub($r);const r=e.distanceTo(t)*.5,s=-this.direction.dot(tr),a=nr.dot(this.direction),o=-nr.dot(tr),c=nr.lengthSq(),l=Math.abs(1-s*s);let u,f,h,p;if(l>0)if(u=s*o-a,f=s*a-o,p=r*l,u>=0)if(f>=-p)if(f<=p){const M=1/l;u*=M,f*=M,h=u*(u+s*f+2*a)+f*(s*u+f+2*o)+c}else f=r,u=Math.max(0,-(s*f+a)),h=-u*u+f*(f+2*o)+c;else f=-r,u=Math.max(0,-(s*f+a)),h=-u*u+f*(f+2*o)+c;else f<=-p?(u=Math.max(0,-(-s*r+a)),f=u>0?-r:Math.min(Math.max(-r,-o),r),h=-u*u+f*(f+2*o)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-o),r),h=f*(f+2*o)+c):(u=Math.max(0,-(s*r+a)),f=u>0?r:Math.min(Math.max(-r,-o),r),h=-u*u+f*(f+2*o)+c);else f=s>0?-r:r,u=Math.max(0,-(s*f+a)),h=-u*u+f*(f+2*o)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy($r).addScaledVector(tr,f),h}intersectSphere(e,t){if(e.radius<0)return null;pn.subVectors(e.center,this.origin);const n=pn.dot(this.direction),i=pn.dot(pn)-n*n,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=n-s,o=n+s;return o<0?null:a<0?this.at(o,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,a,o;const c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),l>=0?(r=(e.min.y-f.y)*l,s=(e.max.y-f.y)*l):(r=(e.max.y-f.y)*l,s=(e.min.y-f.y)*l),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),u>=0?(a=(e.min.z-f.z)*u,o=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,o=(e.min.z-f.z)*u),n>o||a>i)||((a>n||n!==n)&&(n=a),(o<i||i!==i)&&(i=o),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,pn)!==null}intersectTriangle(e,t,n,i,r){const s=this.origin,a=this.direction,o=a.x,c=a.y,l=a.z,u=e.x-s.x,f=e.y-s.y,h=e.z-s.z,p=t.x-s.x,M=t.y-s.y,x=t.z-s.z,_=n.x-s.x,d=n.y-s.y,A=n.z-s.z,U=Math.abs(o),E=Math.abs(c),T=Math.abs(l);let b,R,m,y,W,D,O,Z,N,B,X,H;if(U>=E&&U>=T?(m=o,D=u,N=p,H=_,o>=0?(b=c,R=l,y=f,W=h,O=M,Z=x,B=d,X=A):(b=l,R=c,y=h,W=f,O=x,Z=M,B=A,X=d)):E>=T?(m=c,D=f,N=M,H=d,c>=0?(b=l,R=o,y=h,W=u,O=x,Z=p,B=A,X=_):(b=o,R=l,y=u,W=h,O=p,Z=x,B=_,X=A)):(m=l,D=h,N=x,H=A,l>=0?(b=o,R=c,y=u,W=f,O=p,Z=M,B=_,X=d):(b=c,R=o,y=f,W=u,O=M,Z=p,B=d,X=_)),m===0)return null;const le=b/m,q=R/m,J=1/m,j=y-le*D,Ne=W-q*D,be=O-le*N,rt=Z-q*N,De=B-le*H,Y=X-q*H,ne=De*rt-Y*be,ae=j*Y-Ne*De,Re=be*Ne-rt*j;if(i){if(ne<0||ae<0||Re<0)return null}else if((ne<0||ae<0||Re<0)&&(ne>0||ae>0||Re>0))return null;const Ce=ne+ae+Re;if(Ce===0)return null;const fe=J*(ne*D+ae*N+Re*H);return(Ce>0?fe<0:fe>0)?null:this.at(fe/Ce,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ha=class extends Vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Vs=new gt,Dn=new Ga,ir=new Ar,zs=new G,rr=new G,sr=new G,ar=new G,Qr=new G,or=new G,Gs=new G,lr=new G,gn=class extends an{constructor(e=new Sn,t=new Ha){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){const s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){or.set(0,0,0);for(let o=0,c=r.length;o<c;o++){const l=a[o],u=r[o];l!==0&&(Qr.fromBufferAttribute(u,e),s?or.addScaledVector(Qr,l):or.addScaledVector(Qr.sub(t),l))}t.add(or)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(r),Dn.copy(e.ray).recast(e.near),!(ir.containsPoint(Dn.origin)===!1&&(Dn.intersectSphere(ir,zs)===null||Dn.origin.distanceToSquared(zs)>(e.far-e.near)**2))&&(Vs.copy(r).invert(),Dn.copy(e.ray).applyMatrix4(Vs),!(n.boundingBox!==null&&Dn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Dn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,c=r.attributes.uv,l=r.attributes.uv1,u=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(s))for(let p=0,M=f.length;p<M;p++){const x=f[p],_=s[x.materialIndex],d=Math.max(x.start,h.start),A=Math.min(a.count,Math.min(x.start+x.count,h.start+h.count));for(let U=d,E=A;U<E;U+=3){const T=a.getX(U),b=a.getX(U+1),R=a.getX(U+2);i=cr(this,_,e,n,c,l,u,T,b,R),i&&(i.faceIndex=Math.floor(U/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const p=Math.max(0,h.start),M=Math.min(a.count,h.start+h.count);for(let x=p,_=M;x<_;x+=3){const d=a.getX(x),A=a.getX(x+1),U=a.getX(x+2);i=cr(this,s,e,n,c,l,u,d,A,U),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(o!==void 0)if(Array.isArray(s))for(let p=0,M=f.length;p<M;p++){const x=f[p],_=s[x.materialIndex],d=Math.max(x.start,h.start),A=Math.min(o.count,Math.min(x.start+x.count,h.start+h.count));for(let U=d,E=A;U<E;U+=3){const T=U,b=U+1,R=U+2;i=cr(this,_,e,n,c,l,u,T,b,R),i&&(i.faceIndex=Math.floor(U/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const p=Math.max(0,h.start),M=Math.min(o.count,h.start+h.count);for(let x=p,_=M;x<_;x+=3){const d=x,A=x+1,U=x+2;i=cr(this,s,e,n,c,l,u,d,A,U),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}};function zl(e,t,n,i,r,s,a,o){let c;if(t.side===1?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,t.side===0,o),c===null)return null;lr.copy(o),lr.applyMatrix4(e.matrixWorld);const l=n.ray.origin.distanceTo(lr);return l<n.near||l>n.far?null:{distance:l,point:lr.clone(),object:e}}function cr(e,t,n,i,r,s,a,o,c,l){e.getVertexPosition(o,rr),e.getVertexPosition(c,sr),e.getVertexPosition(l,ar);const u=zl(e,t,n,i,rr,sr,ar,Gs);if(u){const f=new G;bi.getBarycoord(Gs,rr,sr,ar,f),r&&(u.uv=bi.getInterpolatedAttribute(r,o,c,l,f,new et)),s&&(u.uv1=bi.getInterpolatedAttribute(s,o,c,l,f,new et)),a&&(u.normal=bi.getInterpolatedAttribute(a,o,c,l,f,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new G,materialIndex:0};bi.getNormal(rr,sr,ar,h.normal),u.face=h,u.barycoord=f}return u}var Gl=class extends Qt{constructor(e=null,t=1,n=1,i,r,s,a,o,c=Pt,l=Pt,u,f){super(null,s,a,o,c,l,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Nn=new Ar,Hl=new et(.5,.5),hr=new G,ka=class{constructor(e=new Rn,t=new Rn,n=new Rn,i=new Rn,r=new Rn,s=new Rn){this.planes=[e,t,n,i,r,s]}set(e,t,n,i,r,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mi,n=!1){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],f=r[6],h=r[7],p=r[8],M=r[9],x=r[10],_=r[11],d=r[12],A=r[13],U=r[14],E=r[15];if(i[0].setComponents(c-s,h-l,_-p,E-d).normalize(),i[1].setComponents(c+s,h+l,_+p,E+d).normalize(),i[2].setComponents(c+a,h+u,_+M,E+A).normalize(),i[3].setComponents(c-a,h-u,_-M,E-A).normalize(),n)i[4].setComponents(o,f,x,U).normalize(),i[5].setComponents(c-o,h-f,_-x,E-U).normalize();else if(i[4].setComponents(c-o,h-f,_-x,E-U).normalize(),t===2e3)i[5].setComponents(c+o,h+f,_+x,E+U).normalize();else if(t===2001)i[5].setComponents(o,f,x,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(e){Nn.center.set(0,0,0);const t=Hl.distanceTo(e.center);return Nn.radius=.7071067811865476+t,Nn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(hr.x=i.normal.x>0?e.max.x:e.min.x,hr.y=i.normal.y>0?e.max.y:e.min.y,hr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(hr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Wa=class extends Vi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Hs=new gt,ds=new Ga,ur=new Ar,dr=new G,kl=class extends an{constructor(e=new Sn,t=new Wa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(i),ur.radius+=r,e.ray.intersectsSphere(ur)===!1)return;Hs.copy(i).invert(),ds.copy(e.ray).applyMatrix4(Hs);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,c=n.index,l=n.attributes.position;if(c!==null){const u=Math.max(0,s.start),f=Math.min(c.count,s.start+s.count);for(let h=u,p=f;h<p;h++){const M=c.getX(h);dr.fromBufferAttribute(l,M),ks(dr,M,o,i,e,t,this)}}else{const u=Math.max(0,s.start),f=Math.min(l.count,s.start+s.count);for(let h=u,p=f;h<p;h++)dr.fromBufferAttribute(l,h),ks(dr,h,o,i,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){const s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}};function ks(e,t,n,i,r,s,a){const o=ds.distanceSqToPoint(e);if(o<n){const c=new G;ds.closestPointToPoint(e,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Xa=class extends Qt{constructor(e=[],t=301,n,i,r,s,a,o,c,l){super(e,t,n,i,r,s,a,o,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Oi=class extends Qt{constructor(e,t,n=zn,i,r,s,a=Pt,o=Pt,c,l=Di,u=1){if(l!==1026&&l!==1027)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},i,r,s,a,o,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Wl=class extends Oi{constructor(e,t=zn,n=301,i,r,s=Pt,a=Pt,o,c=Di){const l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,i,r,s,a,o,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},qa=class extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},_s=class Ya extends Sn{constructor(t=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let h=0,p=0;M("z","y","x",-1,-1,i,n,t,a,s,0),M("z","y","x",1,-1,i,n,-t,a,s,1),M("x","z","y",1,1,t,i,n,r,a,2),M("x","z","y",1,-1,t,i,-n,r,a,3),M("x","y","z",1,-1,t,n,i,r,s,4),M("x","y","z",-1,-1,t,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new _n(l,3)),this.setAttribute("normal",new _n(u,3)),this.setAttribute("uv",new _n(f,2));function M(x,_,d,A,U,E,T,b,R,m,y){const W=E/R,D=T/m,O=E/2,Z=T/2,N=b/2,B=R+1,X=m+1;let H=0,le=0;const q=new G;for(let J=0;J<X;J++){const j=J*D-Z;for(let Ne=0;Ne<B;Ne++)q[x]=(Ne*W-O)*A,q[_]=j*U,q[d]=N,l.push(q.x,q.y,q.z),q[x]=0,q[_]=0,q[d]=b>0?1:-1,u.push(q.x,q.y,q.z),f.push(Ne/R),f.push(1-J/m),H+=1}for(let J=0;J<m;J++)for(let j=0;j<R;j++){const Ne=h+j+B*J,be=h+j+B*(J+1),rt=h+(j+1)+B*(J+1),De=h+(j+1)+B*J;c.push(Ne,be,De),c.push(be,rt,De),le+=6}o.addGroup(p,le,y),p+=le,h+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ya(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ka=class Za extends Sn{constructor(t=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:r};const s=t/2,a=n/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,f=t/o,h=n/c,p=[],M=[],x=[],_=[];for(let d=0;d<u;d++){const A=d*h-a;for(let U=0;U<l;U++){const E=U*f-s;M.push(E,-A,0),x.push(0,0,1),_.push(U/o),_.push(1-d/c)}}for(let d=0;d<c;d++)for(let A=0;A<o;A++){const U=A+l*d,E=A+l*(d+1),T=A+1+l*(d+1),b=A+1+l*d;p.push(U,E,b),p.push(E,T,b)}this.setIndex(p),this.setAttribute("position",new _n(M,3)),this.setAttribute("normal",new _n(x,3)),this.setAttribute("uv",new _n(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Za(t.width,t.height,t.widthSegments,t.heightSegments)}};function _i(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const r=e[n][i];if(Ws(r))r.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=r.clone();else if(Array.isArray(r))if(Ws(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();t[n][i]=s}else t[n][i]=r.slice();else t[n][i]=r}}return t}function Ct(e){const t={};for(let n=0;n<e.length;n++){const i=_i(e[n]);for(const r in i)t[r]=i[r]}return t}function Ws(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Xl(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ja(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ke.workingColorSpace}var ql={clone:_i,merge:Ct},Yl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sn=class extends Vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yl,this.fragmentShader=Kl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_i(e.uniforms),this.uniformsGroups=Xl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new $e().setHex(i.value);break;case"v2":this.uniforms[n].value=new et().fromArray(i.value);break;case"v3":this.uniforms[n].value=new G().fromArray(i.value);break;case"v4":this.uniforms[n].value=new _t().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Fe().fromArray(i.value);break;case"m4":this.uniforms[n].value=new gt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Zl=class extends sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Jl=class extends Vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},$l=class extends Vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ri(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function jr(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var zi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let s;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}s=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let o=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=r,r=t[--n-1],e>=r)break e}s=n,n=0;break t}break n}for(;n<s;){const a=n+s>>>1;e<t[a]?s=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ql=class extends zi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ys,endingEnd:ys}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,s=e+1,a=i[r],o=i[s];if(a===void 0)switch(this.getSettings_().endingStart){case Ts:r=e,a=2*t-n;break;case bs:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case Ts:s=e,o=2*n-t;break;case bs:s=1,o=n+i[1]-i[0];break;default:s=e-1,o=t}const c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(o-n),this._offsetPrev=r*l,this._offsetNext=s*l}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=e*a,c=o-a,l=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,h=this._weightNext,p=(n-t)/(i-t),M=p*p,x=M*p,_=-f*x+2*f*M-f*p,d=(1+f)*x+(-1.5-2*f)*M+(-.5+f)*p+1,A=(-1-h)*x+(1.5+h)*M+.5*p,U=h*x-h*M;for(let E=0;E!==a;++E)r[E]=_*s[l+E]+d*s[c+E]+A*s[o+E]+U*s[u+E];return r}},jl=class extends zi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=e*a,c=o-a,l=(n-t)/(i-t),u=1-l;for(let f=0;f!==a;++f)r[f]=s[c+f]*u+s[o+f]*l;return r}},ec=class extends zi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},tc=class extends zi{interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=e*a,c=o-a,l=this.inTangents,u=this.outTangents;if(!l||!u){const p=(n-t)/(i-t),M=1-p;for(let x=0;x!==a;++x)r[x]=s[c+x]*M+s[o+x]*p;return r}const f=a*2,h=e-1;for(let p=0;p!==a;++p){const M=s[c+p],x=s[o+p],_=h*f+p*2,d=u[_],A=u[_+1],U=e*f+p*2,E=l[U],T=l[U+1],b=ic(n,t,d,E,i);r[p]=$a(b,M,A,T,x)}return r}};function $a(e,t,n,i,r){const s=1-e;return s*s*s*t+3*s*s*e*n+3*s*e*e*i+e*e*e*r}function nc(e,t,n,i,r){const s=1-e;return 3*s*s*(n-t)+6*s*e*(i-n)+3*e*e*(r-i)}function ic(e,t,n,i,r){let s=(e-t)/(r-t);for(let a=0;a<8;a++){const o=$a(s,t,n,i,r)-e;if(Math.abs(o)<1e-10)break;const c=nc(s,t,n,i,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}var on=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ri(t,this.TimeBufferType),this.values=ri(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ri(e.times,Array),values:ri(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),jr(e.settings)&&(n.settings={inTangents:ri(e.settings.inTangents,Array),outTangents:ri(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ec(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ql(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new tc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case xr:t=this.InterpolantFactoryMethodDiscrete;break;case ls:t=this.InterpolantFactoryMethodLinear;break;case Cr:t=this.InterpolantFactoryMethodSmooth;break;case Es:t=this.InterpolantFactoryMethodBezier}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Le("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xr;case this.InterpolantFactoryMethodLinear:return ls;case this.InterpolantFactoryMethodSmooth:return Cr;case this.InterpolantFactoryMethodBezier:return Es}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;jr(this.settings)&&(Xs(this.settings.inTangents,e),Xs(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const a=this.getValueSize();this.times=n.slice(r,s),this.values=this.values.slice(r*a,s*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ie("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Ie("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==r;a++){const o=n[a];if(typeof o=="number"&&isNaN(o)){Ie("KeyframeTrack: Time is not a valid number.",this,a,o),e=!1;break}if(s!==null&&s>o){Ie("KeyframeTrack: Out of order keys.",this,a,o,s),e=!1;break}s=o}if(i!==void 0&&ml(i))for(let a=0,o=i.length;a!==o;++a){const c=i[a];if(isNaN(c)){Ie("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Cr,r=e.length-1;let s=1;for(let a=1;a<r;++a){let o=!1;const c=e[a];if(c!==e[a+1]&&(a!==1||c!==e[0]))if(i)o=!0;else{const l=a*n,u=l-n,f=l+n;for(let h=0;h!==n;++h){const p=t[l+h];if(p!==t[u+h]||p!==t[f+h]){o=!0;break}}}if(o){if(a!==s){e[s]=e[a];const l=a*n,u=s*n;for(let f=0;f!==n;++f)t[u+f]=t[l+f]}++s}}if(r>0){e[s]=e[r];for(let a=r*n,o=s*n,c=0;c!==n;++c)t[o+c]=t[a+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,jr(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Xs(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}on.prototype.ValueTypeName="";on.prototype.TimeBufferType=Float32Array;on.prototype.ValueBufferType=Float32Array;on.prototype.DefaultInterpolation=ls;var Gi=class extends on{constructor(e,t,n){super(e,t,n)}};Gi.prototype.ValueTypeName="bool";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=xr;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var rc=class extends on{constructor(e,t,n,i){super(e,t,n,i)}};rc.prototype.ValueTypeName="color";var sc=class extends on{constructor(e,t,n,i){super(e,t,n,i)}};sc.prototype.ValueTypeName="number";var ac=class extends zi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=(n-t)/(i-t);let c=e*a;for(let l=c+a;c!==l;c+=4)Hn.slerpFlat(r,0,s,c-a,s,c,o);return r}},Qa=class extends on{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new ac(this.times,this.values,this.getValueSize(),e)}};Qa.prototype.ValueTypeName="quaternion";Qa.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends on{constructor(e,t,n){super(e,t,n)}};Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=xr;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var oc=class extends on{constructor(e,t,n,i){super(e,t,n,i)}};oc.prototype.ValueTypeName="vector";var lc=class{constructor(e,t,n){const i=this;let r=!1,s=0,a=0,o;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(l){a++,r===!1&&i.onStart!==void 0&&i.onStart(l,s,a),r=!0},this.itemEnd=function(l){s++,i.onProgress!==void 0&&i.onProgress(l,s,a),s===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return l=l.normalize("NFC"),o?o(l):l},this.setURLModifier=function(l){return o=l,this},this.addHandler=function(l,u){return c.push(l,u),this},this.removeHandler=function(l){const u=c.indexOf(l);return u!==-1&&c.splice(u,2),this},this.getHandler=function(l){for(let u=0,f=c.length;u<f;u+=2){const h=c[u],p=c[u+1];if(h.global&&(h.lastIndex=0),h.test(l))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},cc=new lc,hc=class{constructor(e){this.manager=e!==void 0?e:cc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};hc.DEFAULT_MATERIAL_NAME="__DEFAULT";var fr=new G,pr=new Hn,en=new G,ja=class extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fr,pr,en),en.x===1&&en.y===1&&en.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fr,pr,en.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(fr,pr,en),en.x===1&&en.y===1&&en.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fr,pr,en.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},An=new G,qs=new et,Ys=new et,kt=class extends ja{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(Lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){An.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(An.x,An.y).multiplyScalar(-e/An.z),An.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(An.x,An.y).multiplyScalar(-e/An.z)}getViewSize(e,t){return this.getViewBounds(e,qs,Ys),t.subVectors(Ys,qs)}setViewOffset(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Lr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const o=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/o,t-=s.offsetY*n/c,i*=s.width/o,n*=s.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},eo=class extends ja{constructor(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,s=n+e,a=i+t,o=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,a-=l*this.view.offsetY,o=a-l*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},si=-90,ai=1,uc=class extends an{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new kt(si,ai,e,t);i.layers=this.layers,this.add(i);const r=new kt(si,ai,e,t);r.layers=this.layers,this.add(r);const s=new kt(si,ai,e,t);s.layers=this.layers,this.add(s);const a=new kt(si,ai,e,t);a.layers=this.layers,this.add(a);const o=new kt(si,ai,e,t);o.layers=this.layers,this.add(o);const c=new kt(si,ai,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,s,a,o]=t;for(const c of t)this.remove(c);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,c,l]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,2,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,4,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,f,h),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},dc=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},fc="\\[\\]\\.:\\/",pc=new RegExp("[\\[\\]\\.:\\/]","g"),gs="[^\\[\\]\\.:\\/]",mc="[^"+fc.replace("\\.","")+"]",vc=/((?:WC+[\/:])*)/.source.replace("WC",gs),_c=/(WCOD+)?/.source.replace("WCOD",mc),gc=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gs),Sc=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gs),Mc=new RegExp("^"+vc+_c+gc+Sc+"$"),xc=["material","materials","bones","map"],Ec=class{constructor(e,t,n){const i=n||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ct=class hi{constructor(t,n,i){this.path=n,this.parsedPath=i||hi.parseTrackName(n),this.node=hi.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new hi.Composite(t,n,i):new hi(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(pc,"")}static parseTrackName(t){const n=Mc.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);const i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);xc.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){const i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===n||o.uuid===n)return o;const c=i(o.children);if(c)return c}return null},r=i(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)t[n++]=i[r]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[n++]}_setValue_array_setNeedsUpdate(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node;const n=this.parsedPath,i=n.objectName,r=n.propertyName;let s=n.propertyIndex;if(t||(t=hi.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Le("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=n.objectIndex;switch(i){case"materials":if(!t.material){Ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ie("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ie("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ie("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Ie("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){Ie("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const a=t[r];if(a===void 0){const l=n.nodeName;Ie("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ct.Composite=Ec;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sd=class to{static{to.prototype.isMatrix2=!0}constructor(t,n,i,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,r){const s=this.elements;return s[0]=t,s[2]=n,s[1]=i,s[3]=r,this}};function Ks(e,t,n,i){const r=yc(i);switch(n){case Ro:return e*t;case Co:return e*t/r.components*r.byteLength;case Aa:return e*t/r.components*r.byteLength;case Mr:return e*t*2/r.components*r.byteLength;case Ra:return e*t*2/r.components*r.byteLength;case wo:return e*t*3/r.components*r.byteLength;case Ui:return e*t*4/r.components*r.byteLength;case wa:return e*t*4/r.components*r.byteLength;case Po:case Lo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Io:case Uo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case No:case Fo:return Math.max(e,16)*Math.max(t,8)/4;case Do:case Oo:return Math.max(e,8)*Math.max(t,8)/2;case Bo:case Vo:case Go:case Ho:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case zo:case ko:case Wo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Xo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case qo:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Yo:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Jo:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case $o:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case jo:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case el:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case tl:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case nl:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case il:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case rl:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case sl:case al:case ol:return Math.ceil(e/4)*Math.ceil(t/4)*16;case ll:case cl:return Math.ceil(e/4)*Math.ceil(t/4)*8;case hl:case ul:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function yc(e){switch(e){case Vn:case Eo:return{byteLength:1,components:1};case xa:case yo:case wn:return{byteLength:2,components:1};case Ea:case ya:return{byteLength:2,components:4};case zn:case To:case br:return{byteLength:4,components:1};case bo:case Ao:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function no(){let e=null,t=!1,n=null,i=null;function r(s,a){i=e.requestAnimationFrame(r),n(s,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(r),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function Tc(e){const t=new WeakMap;function n(o,c){const l=o.array,u=o.usage,f=l.byteLength,h=e.createBuffer();e.bindBuffer(c,h),e.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=e.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=e.SHORT;else if(l instanceof Uint32Array)p=e.UNSIGNED_INT;else if(l instanceof Int32Array)p=e.INT;else if(l instanceof Int8Array)p=e.BYTE;else if(l instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){const u=c.array,f=c.updateRanges;if(e.bindBuffer(l,o),f.length===0)e.bufferSubData(l,0,u);else{f.sort((p,M)=>p.start-M.start);let h=0;for(let p=1;p<f.length;p++){const M=f[h],x=f[p];x.start<=M.start+M.count+1?M.count=Math.max(M.count,x.start+x.count-M.start):(++h,f[h]=x)}f.length=h+1;for(let p=0,M=f.length;p<M;p++){const x=f[p];e.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(e.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,n(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var ze={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},he={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},rn={basic:{uniforms:Ct([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Ct([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Ct([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Ct([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Ct([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new $e(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Ct([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Ct([he.points,he.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Ct([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Ct([he.common,he.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Ct([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Ct([he.sprite,he.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:Ct([he.common,he.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:Ct([he.lights,he.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};rn.physical={uniforms:Ct([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var mr={r:0,b:0,g:0},bc=new gt,io=new Fe;io.set(-1,0,0,0,1,0,0,0,1);function Ac(e,t,n,i,r,s){const a=new $e(0);let o=r===!0?0:1,c,l,u=null,f=0,h=null;function p(A){let U=A.isScene===!0?A.background:null;if(U&&U.isTexture){const E=A.backgroundBlurriness>0;U=t.get(U,E)}return U}function M(A){let U=!1;const E=p(A);E===null?_(a,o):E&&E.isColor&&(_(E,1),U=!0);const T=e.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(e.autoClear||U)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function x(A,U){const E=p(U);E&&(E.isCubeTexture||E.mapping===306)?(l===void 0&&(l=new gn(new _s(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:_i(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=E,l.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(bc.makeRotationFromEuler(U.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(io),l.material.toneMapped=ke.getTransfer(E.colorSpace)!==yr,(u!==E||f!==E.version||h!==e.toneMapping)&&(l.material.needsUpdate=!0,u=E,f=E.version,h=e.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new gn(new Ka(2,2),new sn({name:"BackgroundMaterial",uniforms:_i(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,c.material.toneMapped=ke.getTransfer(E.colorSpace)!==yr,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||h!==e.toneMapping)&&(c.material.needsUpdate=!0,u=E,f=E.version,h=e.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function _(A,U){A.getRGB(mr,Ja(e)),n.buffers.color.setClear(mr.r,mr.g,mr.b,U,s)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,U=1){a.set(A),o=U,_(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(A){o=A,_(a,o)},render:M,addToRenderList:x,dispose:d}}function Rc(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(D,O,Z,N,B){let X=!1;const H=f(D,N,Z,O);s!==H&&(s=H,l(s.object)),X=p(D,N,Z,B),X&&M(D,N,Z,B),B!==null&&t.update(B,e.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,E(D,O,Z,N),B!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return e.createVertexArray()}function l(D){return e.bindVertexArray(D)}function u(D){return e.deleteVertexArray(D)}function f(D,O,Z,N){const B=N.wireframe===!0;let X=i[O.id];X===void 0&&(X={},i[O.id]=X);const H=D.isInstancedMesh===!0?D.id:0;let le=X[H];le===void 0&&(le={},X[H]=le);let q=le[Z.id];q===void 0&&(q={},le[Z.id]=q);let J=q[B];return J===void 0&&(J=h(c()),q[B]=J),J}function h(D){const O=[],Z=[],N=[];for(let B=0;B<n;B++)O[B]=0,Z[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:Z,attributeDivisors:N,object:D,attributes:{},index:null}}function p(D,O,Z,N){const B=s.attributes,X=O.attributes;let H=0;const le=Z.getAttributes();for(const q in le)if(le[q].location>=0){const J=B[q];let j=X[q];if(j===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),J===void 0||J.attribute!==j||j&&J.data!==j.data)return!0;H++}return s.attributesNum!==H||s.index!==N}function M(D,O,Z,N){const B={},X=O.attributes;let H=0;const le=Z.getAttributes();for(const q in le)if(le[q].location>=0){let J=X[q];J===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(J=D.instanceColor));const j={};j.attribute=J,J&&J.data&&(j.data=J.data),B[q]=j,H++}s.attributes=B,s.attributesNum=H,s.index=N}function x(){const D=s.newAttributes;for(let O=0,Z=D.length;O<Z;O++)D[O]=0}function _(D){d(D,0)}function d(D,O){const Z=s.newAttributes,N=s.enabledAttributes,B=s.attributeDivisors;Z[D]=1,N[D]===0&&(e.enableVertexAttribArray(D),N[D]=1),B[D]!==O&&(e.vertexAttribDivisor(D,O),B[D]=O)}function A(){const D=s.newAttributes,O=s.enabledAttributes;for(let Z=0,N=O.length;Z<N;Z++)O[Z]!==D[Z]&&(e.disableVertexAttribArray(Z),O[Z]=0)}function U(D,O,Z,N,B,X,H){H===!0?e.vertexAttribIPointer(D,O,Z,B,X):e.vertexAttribPointer(D,O,Z,N,B,X)}function E(D,O,Z,N){x();const B=N.attributes,X=Z.getAttributes(),H=O.defaultAttributeValues;for(const le in X){const q=X[le];if(q.location>=0){let J=B[le];if(J===void 0&&(le==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),le==="instanceColor"&&D.instanceColor&&(J=D.instanceColor)),J!==void 0){const j=J.normalized,Ne=J.itemSize,be=t.get(J);if(be===void 0)continue;const rt=be.buffer,De=be.type,Y=be.bytesPerElement,ne=De===e.INT||De===e.UNSIGNED_INT||J.gpuType===1013;if(J.isInterleavedBufferAttribute){const ae=J.data,Re=ae.stride,Ce=J.offset;if(ae.isInstancedInterleavedBuffer){for(let fe=0;fe<q.locationSize;fe++)d(q.location+fe,ae.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let fe=0;fe<q.locationSize;fe++)_(q.location+fe);e.bindBuffer(e.ARRAY_BUFFER,rt);for(let fe=0;fe<q.locationSize;fe++)U(q.location+fe,Ne/q.locationSize,De,j,Re*Y,(Ce+Ne/q.locationSize*fe)*Y,ne)}else{if(J.isInstancedBufferAttribute){for(let ae=0;ae<q.locationSize;ae++)d(q.location+ae,J.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ae=0;ae<q.locationSize;ae++)_(q.location+ae);e.bindBuffer(e.ARRAY_BUFFER,rt);for(let ae=0;ae<q.locationSize;ae++)U(q.location+ae,Ne/q.locationSize,De,j,Ne*Y,Ne/q.locationSize*ae*Y,ne)}}else if(H!==void 0){const j=H[le];if(j!==void 0)switch(j.length){case 2:e.vertexAttrib2fv(q.location,j);break;case 3:e.vertexAttrib3fv(q.location,j);break;case 4:e.vertexAttrib4fv(q.location,j);break;default:e.vertexAttrib1fv(q.location,j)}}}}A()}function T(){y();for(const D in i){const O=i[D];for(const Z in O){const N=O[Z];for(const B in N){const X=N[B];for(const H in X)u(X[H].object),delete X[H];delete N[B]}}delete i[D]}}function b(D){if(i[D.id]===void 0)return;const O=i[D.id];for(const Z in O){const N=O[Z];for(const B in N){const X=N[B];for(const H in X)u(X[H].object),delete X[H];delete N[B]}}delete i[D.id]}function R(D){for(const O in i){const Z=i[O];for(const N in Z){const B=Z[N];if(B[D.id]===void 0)continue;const X=B[D.id];for(const H in X)u(X[H].object),delete X[H];delete B[D.id]}}}function m(D){for(const O in i){const Z=i[O],N=D.isInstancedMesh===!0?D.id:0,B=Z[N];if(B!==void 0){for(const X in B){const H=B[X];for(const le in H)u(H[le].object),delete H[le];delete B[X]}delete Z[N],Object.keys(Z).length===0&&delete i[O]}}}function y(){W(),a=!0,s!==r&&(s=r,l(s.object))}function W(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:y,resetDefaultState:W,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfObject:m,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:_,disableUnusedAttributes:A}}function wc(e,t,n){let i;function r(c){i=c}function s(c,l){e.drawArrays(i,c,l),n.update(l,i,1)}function a(c,l,u){u!==0&&(e.drawArraysInstanced(i,c,l,u),n.update(l,i,u))}function o(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let f=0;for(let h=0;h<u;h++)f+=l[h];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Cc(e,t,n,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==1023&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const m=R===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==1009&&R!==1015&&!m&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp";const u=c(l);u!==l&&(Le("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&h===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),_=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),d=e.getParameter(e.MAX_VERTEX_ATTRIBS),A=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),U=e.getParameter(e.MAX_VARYING_VECTORS),E=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=e.getParameter(e.MAX_SAMPLES),b=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:M,maxTextureSize:x,maxCubemapSize:_,maxAttributes:d,maxVertexUniforms:A,maxVaryings:U,maxFragmentUniforms:E,maxSamples:T,samples:b}}function Pc(e){const t=this;let n=null,i=0,r=!1,s=!1;const a=new Rn,o=new Fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){const M=f.clippingPlanes,x=f.clipIntersection,_=f.clipShadows,d=e.get(f);if(!r||M===null||M.length===0||s&&!_)s?u(null):l();else{const A=s?0:i,U=A*4;let E=d.clippingState||null;c.value=E,E=u(M,h,U,p);for(let T=0;T!==U;++T)E[T]=n[T];d.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,p,M){const x=f!==null?f.length:0;let _=null;if(x!==0){if(_=c.value,M!==!0||_===null){const d=p+x*4,A=h.matrixWorldInverse;o.getNormalMatrix(A),(_===null||_.length<d)&&(_=new Float32Array(d));for(let U=0,E=p;U!==x;++U,E+=4)a.copy(f[U]).applyMatrix4(A,o),a.normal.toArray(_,E),_[E+3]=a.constant}c.value=_,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,_}}var di=4,Lc=6,Ic=20,Uc=256,Ci=new eo,Zs=new $e,es=null,ts=0,ns=0,is=!1,Dc=new G,On=new G,Js=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:s=256,position:a=Dc}=r;es=this._renderer.getRenderTarget(),ts=this._renderer.getActiveCubeFace(),ns=this._renderer.getActiveMipmapLevel(),is=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,i,o,a),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=js(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(es,ts,ns),this._renderer.xr.enabled=is,e.scissorTest=!1,oi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),es=this._renderer.getRenderTarget(),ts=this._renderer.getActiveCubeFace(),ns=this._renderer.getActiveMipmapLevel(),is=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:wn,format:Ui,colorSpace:cs,depthBuffer:!1},i=$s(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$s(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Nc(r)),this._blurMaterial=Fc(r,e,t),this._ggxMaterial=Oc(r,e,t)}return i}_compileMaterial(e){const t=new gn(new Sn,e);this._renderer.compile(t,Ci)}_sceneToCubeUV(e,t,n,i,r){const s=new kt(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Zs),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(i),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new gn(new _s,new Ha({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1})));const f=this._backgroundBox,h=f.material;let p=!1;const M=e.background;M?M.isColor&&(h.color.copy(M),e.background=null,p=!0):(h.color.copy(Zs),p=!0);for(let x=0;x<6;x++){const _=x%3;_===0?(s.up.set(0,a[x],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x+o[x],r.y,r.z)):_===1?(s.up.set(0,0,a[x]),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y+o[x],r.z)):(s.up.set(0,a[x],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y,r.z+o[x]));const d=this._cubeSize;oi(i,_*d,x>2?d:0,d,d),c.setRenderTarget(i),p&&c.render(f,s),c.render(e,s)}c.toneMapping=u,c.autoClear=l,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===301||e.mapping===302;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=js()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qs());const r=i?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const a=r.uniforms;a.envMap.value=e;const o=this._cubeSize;oi(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(s,Ci)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[n];a.material=s;const o=s.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:f}=this,h=this._sizeLods[n],p=3*h*(n>f-di?n-f+di:0),M=4*(this._cubeSize-h);o.envMap.value=e.texture,o.roughness.value=u,o.mipInt.value=f-t,oi(r,p,M,3*h,2*h),i.setRenderTarget(r),i.render(a,Ci),o.envMap.value=r.texture,o.roughness.value=0,o.mipInt.value=f-n,oi(e,p,M,3*h,2*h),i.setRenderTarget(e),i.render(a,Ci)}_blur(e,t,n,i){const r=this._pingPongRenderTarget,s=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,s),this._blurPass(r,e,n,n,s)}_blurPass(e,t,n,i,r){const s=this._renderer,a=this._blurMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const l=this._sizeLods[i];oi(t,3*l*(i>this._lodMax-di?i-this._lodMax+di:0),4*(this._cubeSize-l),3*l,2*l),s.setRenderTarget(t),s.render(o,Ci)}};function Nc(e){const t=[],n=[];let i=e;const r=e-di+1+Lc;for(let s=0;s<r;s++){const a=Math.pow(2,i);t.push(a);const o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,h=6,p=3,M=new Float32Array(108),x=new Float32Array(108);for(let d=0;d<f;d++){const A=d%3*2/3-1,U=d>2?0:-1,E=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];M.set(E,18*d);for(let T=0;T<h;T++){const b=u[T*2]*2-1,R=u[T*2+1]*2-1;d===0?On.set(1,R,b):d===1?On.set(-b,1,-R):d===2?On.set(-b,R,1):d===3?On.set(-1,R,-b):d===4?On.set(-b,-1,R):On.set(b,R,-1),On.toArray(x,(d*h+T)*p)}}const _=new Sn;_.setAttribute("position",new $t(M,p)),_.setAttribute("outputDirection",new $t(x,p)),n.push(new gn(_,null)),i>di&&i--}return{lodMeshes:n,sizeLods:t}}function $s(e,t,n){const i=new Jt(e,t,n);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function oi(e,t,n,i,r){e.viewport.set(t,n,i,r),e.scissor.set(t,n,i,r)}function Oc(e,t,n){return new sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Uc,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Fc(e,t,n){return new sn({name:"SphericalGaussianBlur",defines:{SAMPLES:Ic,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Rr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Qs(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function js(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Rr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ro=class extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Xa(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new _s(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:_i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=t;const s=new gn(i,r),a=t.minFilter;return t.minFilter===1008&&(t.minFilter=Ot),new uc(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)}};function Bc(e){let t=new WeakMap,n=new WeakMap,i=null;function r(h,p=!1){return h==null?null:p?a(h):s(h)}function s(h){if(h&&h.isTexture){const p=h.mapping;if(p===303||p===304)if(t.has(h)){const M=t.get(h).texture;return o(M,h.mapping)}else{const M=h.image;if(M&&M.height>0){const x=new ro(M.height);return x.fromEquirectangularTexture(e,h),t.set(h,x),h.addEventListener("dispose",l),o(x.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const p=h.mapping,M=p===303||p===304,x=p===301||p===302;if(M||x){let _=n.get(h);const d=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return i===null&&(i=new Js(e)),_=M?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,n.set(h,_),_.texture;if(_!==void 0)return _.texture;{const A=h.image;return M&&A&&A.height>0||x&&A&&c(A)?(i===null&&(i=new Js(e)),_=M?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,n.set(h,_),h.addEventListener("dispose",u),_.texture):null}}}return h}function o(h,p){return p===303?h.mapping=301:p===304&&(h.mapping=302),h}function c(h){let p=0;const M=6;for(let x=0;x<M;x++)h[x]!==void 0&&p++;return p===M}function l(h){const p=h.target;p.removeEventListener("dispose",l);const M=t.get(p);M!==void 0&&(t.delete(p),M.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const M=n.get(p);M!==void 0&&(n.delete(p),M.dispose())}function f(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function Vc(e){const t={};function n(i){if(t[i]!==void 0)return t[i];const r=e.getExtension(i);return t[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&fi("WebGLRenderer: "+i+" extension not supported."),r}}}function zc(e,t,n,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const M in h.attributes)t.remove(h.attributes[M]);h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(t.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function c(f){const h=f.attributes;for(const p in h)t.update(h[p],e.ARRAY_BUFFER)}function l(f){const h=[],p=f.index,M=f.attributes.position;let x=0;if(M===void 0)return;if(p!==null){const A=p.array;x=p.version;for(let U=0,E=A.length;U<E;U+=3){const T=A[U+0],b=A[U+1],R=A[U+2];h.push(T,b,b,R,R,T)}}else{const A=M.array;x=M.version;for(let U=0,E=A.length/3-1;U<E;U+=3){const T=U+0,b=U+1,R=U+2;h.push(T,b,b,R,R,T)}}const _=new(M.count>=65535?Va:Ba)(h,1);_.version=x;const d=s.get(f);d&&t.remove(d),s.set(f,_)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function Gc(e,t,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,h){e.drawElements(i,h,s,f*a),n.update(h,i,1)}function l(f,h,p){p!==0&&(e.drawElementsInstanced(i,h,s,f*a,p),n.update(h,i,p))}function u(f,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,p);let M=0;for(let x=0;x<p;x++)M+=h[x];n.update(M,i,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Hc(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case e.TRIANGLES:n.triangles+=o*(s/3);break;case e.LINES:n.lines+=o*(s/2);break;case e.LINE_STRIP:n.lines+=o*(s-1);break;case e.LINE_LOOP:n.lines+=o*s;break;case e.POINTS:n.points+=o*s;break;default:Ie("WebGLInfo: Unknown draw mode:",a)}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:i}}function kc(e,t,n){const i=new WeakMap,r=new _t;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let y=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",y)};h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let U=0;p===!0&&(U=1),M===!0&&(U=2),x===!0&&(U=3);let E=o.attributes.position.count*U,T=1;E>t.maxTextureSize&&(T=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const b=new Float32Array(E*T*4*f),R=new Da(b,E,T,f);R.type=br,R.needsUpdate=!0;const m=U*4;for(let W=0;W<f;W++){const D=_[W],O=d[W],Z=A[W],N=E*T*4*W;for(let B=0;B<D.count;B++){const X=B*m;p===!0&&(r.fromBufferAttribute(D,B),b[N+X+0]=r.x,b[N+X+1]=r.y,b[N+X+2]=r.z,b[N+X+3]=0),M===!0&&(r.fromBufferAttribute(O,B),b[N+X+4]=r.x,b[N+X+5]=r.y,b[N+X+6]=r.z,b[N+X+7]=0),x===!0&&(r.fromBufferAttribute(Z,B),b[N+X+8]=r.x,b[N+X+9]=r.y,b[N+X+10]=r.z,b[N+X+11]=Z.itemSize===4?r.w:1)}}h={count:f,texture:R,size:new et(E,T)},i.set(o,h),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(e,"morphTexture",a.morphTexture,n);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];const M=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(e,"morphTargetBaseInfluence",M),c.getUniforms().setValue(e,"morphTargetInfluences",l)}c.getUniforms().setValue(e,"morphTargetsTexture",h.texture,n),c.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:s}}function Wc(e,t,n,i,r){let s=new WeakMap;function a(l){const u=r.render.frame,f=l.geometry,h=t.get(l,f);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return h}function o(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:o}}var Xc={1:"LINEAR_TONE_MAPPING",2:"REINHARD_TONE_MAPPING",3:"CINEON_TONE_MAPPING",4:"ACES_FILMIC_TONE_MAPPING",6:"AGX_TONE_MAPPING",7:"NEUTRAL_TONE_MAPPING",5:"CUSTOM_TONE_MAPPING"};function qc(e,t,n,i,r,s){const a=new Jt(t,n,{type:e,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new Sn;l.setAttribute("position",new _n([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new _n([0,2,0,0,2,0],2));const u=new Zl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new gn(l,u),h=new eo(-1,1,1,-1,0,1);let p=null,M=null,x=!1,_,d=null,A=[],U=!1;this.setSize=function(E,T){a.setSize(E,T),o!==null&&o.setSize(E,T),c!==null&&c.setSize(E,T);for(let b=0;b<A.length;b++){const R=A[b];R.setSize&&R.setSize(E,T)}},this.setEffects=function(E){A=E,U=A.length>0&&A[0].isRenderPass===!0;const T=a.width,b=a.height;A.length>0&&o===null&&(o=new Jt(T,b,{type:wn,depthBuffer:!1,stencilBuffer:!1}),c=new Jt(T,b,{type:wn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<A.length;R++){const m=A[R];m.setSize&&m.setSize(T,b)}},this.begin=function(E,T){if(x||E.toneMapping===0&&A.length===0)return!1;if(d=T,T!==null){const b=T.width,R=T.height;(a.width!==b||a.height!==R)&&this.setSize(b,R)}return U===!1&&E.setRenderTarget(a),_=E.toneMapping,E.toneMapping=0,!0},this.hasRenderPass=function(){return U},this.end=function(E,T){E.toneMapping=_,x=!0;let b=a,R=o;for(let m=0;m<A.length;m++){const y=A[m];y.enabled!==!1&&(y.render(E,R,b,T),y.needsSwap!==!1&&(b=R,R=R===o?c:o))}if(p!==E.outputColorSpace||M!==E.toneMapping){p=E.outputColorSpace,M=E.toneMapping,u.defines={},ke.getTransfer(p)==="srgb"&&(u.defines.SRGB_TRANSFER="");const m=Xc[M];m&&(u.defines[m]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,E.setRenderTarget(d),E.render(f,h),d=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var so=new Qt,fs=new Oi(1,1),ao=new Da,oo=new bl,lo=new Xa,ea=[],ta=[],na=new Float32Array(16),ia=new Float32Array(9),ra=new Float32Array(4);function gi(e,t,n){const i=e[0];if(i<=0||i>0)return e;const r=t*n;let s=ea[r];if(s===void 0&&(s=new Float32Array(r),ea[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=n,e[a].toArray(s,o)}return s}function St(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Mt(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function wr(e,t){let n=ta[t];n===void 0&&(n=new Int32Array(t),ta[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function Yc(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Kc(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(St(n,t))return;e.uniform2fv(this.addr,t),Mt(n,t)}}function Zc(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(St(n,t))return;e.uniform3fv(this.addr,t),Mt(n,t)}}function Jc(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(St(n,t))return;e.uniform4fv(this.addr,t),Mt(n,t)}}function $c(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(St(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Mt(n,t)}else{if(St(n,i))return;ra.set(i),e.uniformMatrix2fv(this.addr,!1,ra),Mt(n,i)}}function Qc(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(St(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Mt(n,t)}else{if(St(n,i))return;ia.set(i),e.uniformMatrix3fv(this.addr,!1,ia),Mt(n,i)}}function jc(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(St(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Mt(n,t)}else{if(St(n,i))return;na.set(i),e.uniformMatrix4fv(this.addr,!1,na),Mt(n,i)}}function eh(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function th(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(St(n,t))return;e.uniform2iv(this.addr,t),Mt(n,t)}}function nh(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(St(n,t))return;e.uniform3iv(this.addr,t),Mt(n,t)}}function ih(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(St(n,t))return;e.uniform4iv(this.addr,t),Mt(n,t)}}function rh(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function sh(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(St(n,t))return;e.uniform2uiv(this.addr,t),Mt(n,t)}}function ah(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(St(n,t))return;e.uniform3uiv(this.addr,t),Mt(n,t)}}function oh(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(St(n,t))return;e.uniform4uiv(this.addr,t),Mt(n,t)}}function lh(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);let s;this.type===e.SAMPLER_2D_SHADOW?(fs.compareFunction=n.isReversedDepthBuffer()?518:515,s=fs):s=so,n.setTexture2D(t||s,r)}function ch(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(t||oo,r)}function hh(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(t||lo,r)}function uh(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(t||ao,r)}function dh(e){switch(e){case 5126:return Yc;case 35664:return Kc;case 35665:return Zc;case 35666:return Jc;case 35674:return $c;case 35675:return Qc;case 35676:return jc;case 5124:case 35670:return eh;case 35667:case 35671:return th;case 35668:case 35672:return nh;case 35669:case 35673:return ih;case 5125:return rh;case 36294:return sh;case 36295:return ah;case 36296:return oh;case 35678:case 36198:case 36298:case 36306:case 35682:return lh;case 35679:case 36299:case 36307:return ch;case 35680:case 36300:case 36308:case 36293:return hh;case 36289:case 36303:case 36311:case 36292:return uh}}function fh(e,t){e.uniform1fv(this.addr,t)}function ph(e,t){const n=gi(t,this.size,2);e.uniform2fv(this.addr,n)}function mh(e,t){const n=gi(t,this.size,3);e.uniform3fv(this.addr,n)}function vh(e,t){const n=gi(t,this.size,4);e.uniform4fv(this.addr,n)}function _h(e,t){const n=gi(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function gh(e,t){const n=gi(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Sh(e,t){const n=gi(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Mh(e,t){e.uniform1iv(this.addr,t)}function xh(e,t){e.uniform2iv(this.addr,t)}function Eh(e,t){e.uniform3iv(this.addr,t)}function yh(e,t){e.uniform4iv(this.addr,t)}function Th(e,t){e.uniform1uiv(this.addr,t)}function bh(e,t){e.uniform2uiv(this.addr,t)}function Ah(e,t){e.uniform3uiv(this.addr,t)}function Rh(e,t){e.uniform4uiv(this.addr,t)}function wh(e,t,n){const i=this.cache,r=t.length,s=wr(n,r);St(i,s)||(e.uniform1iv(this.addr,s),Mt(i,s));let a;this.type===e.SAMPLER_2D_SHADOW?a=fs:a=so;for(let o=0;o!==r;++o)n.setTexture2D(t[o]||a,s[o])}function Ch(e,t,n){const i=this.cache,r=t.length,s=wr(n,r);St(i,s)||(e.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(t[a]||oo,s[a])}function Ph(e,t,n){const i=this.cache,r=t.length,s=wr(n,r);St(i,s)||(e.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(t[a]||lo,s[a])}function Lh(e,t,n){const i=this.cache,r=t.length,s=wr(n,r);St(i,s)||(e.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(t[a]||ao,s[a])}function Ih(e){switch(e){case 5126:return fh;case 35664:return ph;case 35665:return mh;case 35666:return vh;case 35674:return _h;case 35675:return gh;case 35676:return Sh;case 5124:case 35670:return Mh;case 35667:case 35671:return xh;case 35668:case 35672:return Eh;case 35669:case 35673:return yh;case 5125:return Th;case 36294:return bh;case 36295:return Ah;case 36296:return Rh;case 35678:case 36198:case 36298:case 36306:case 35682:return wh;case 35679:case 36299:case 36307:return Ch;case 35680:case 36300:case 36308:case 36293:return Ph;case 36289:case 36303:case 36311:case 36292:return Lh}}var Uh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=dh(t.type)}},Dh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ih(t.type)}},Nh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const a=i[r];a.setValue(e,t[a.id],n)}}},rs=/(\w+)(\])?(\[|\.)?/g;function sa(e,t){e.seq.push(t),e.map[t.id]=t}function Oh(e,t,n){const i=e.name,r=i.length;for(rs.lastIndex=0;;){const s=rs.exec(i),a=rs.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){sa(n,l===void 0?new Uh(o,e,t):new Dh(o,e,t));break}else{let u=n.map[o];u===void 0&&(u=new Nh(o),sa(n,u)),n=u}}}var Sr=class{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s);Oh(a,e.getUniformLocation(t,a.name),this)}const i=[],r=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(s):r.push(s);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){const a=t[r],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.id in t&&n.push(s)}return n}};function aa(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var Fh=37297,Bh=0;function Vh(e,t){const n=e.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var oa=new Fe;function zh(e){ke._getMatrix(oa,ke.workingColorSpace,e);const t=`mat3( ${oa.elements.map(n=>n.toFixed(4))} )`;switch(ke.getTransfer(e)){case Er:return[t,"LinearTransferOETF"];case yr:return[t,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function la(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Vh(e.getShaderSource(t),a)}else return r}function Gh(e,t){const n=zh(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var Hh={1:"Linear",2:"Reinhard",3:"Cineon",4:"ACESFilmic",6:"AgX",7:"Neutral",5:"Custom"};function kh(e,t){const n=Hh[t];return n===void 0?(Le("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var vr=new G;function Wh(){return ke.getLuminanceCoefficients(vr),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${vr.x.toFixed(4)}, ${vr.y.toFixed(4)}, ${vr.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xh(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ii).join(`
`)}function qh(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function Yh(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=e.getActiveAttrib(t,r),a=s.name;let o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Ii(e){return e!==""}function ca(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ha(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Kh=/^[ \t]*#include +<([\w\d./]+)>/gm;function ps(e){return e.replace(Kh,Jh)}var Zh=new Map;function Jh(e,t){let n=ze[t];if(n===void 0){const i=Zh.get(t);if(i!==void 0)n=ze[i],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ps(n)}var $h=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ua(e){return e.replace($h,Qh)}function Qh(e,t,n,i){let r="";for(let s=parseInt(t);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function da(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var jh={1:"SHADOWMAP_TYPE_PCF",3:"SHADOWMAP_TYPE_VSM"};function eu(e){return jh[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var tu={301:"ENVMAP_TYPE_CUBE",302:"ENVMAP_TYPE_CUBE",306:"ENVMAP_TYPE_CUBE_UV"};function nu(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":tu[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var iu={302:"ENVMAP_MODE_REFRACTION"};function ru(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":iu[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var su={0:"ENVMAP_BLENDING_MULTIPLY",1:"ENVMAP_BLENDING_MIX",2:"ENVMAP_BLENDING_ADD"};function au(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":su[e.combine]||"ENVMAP_BLENDING_NONE"}function ou(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function lu(e,t,n,i){const r=e.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=eu(n),l=nu(n),u=ru(n),f=au(n),h=ou(n),p=Xh(n),M=qh(s),x=r.createProgram();let _,d,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Ii).join(`
`),_.length>0&&(_+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Ii).join(`
`),d.length>0&&(d+=`
`)):(_=[da(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ii).join(`
`),d=[da(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==0?"#define TONE_MAPPING":"",n.toneMapping!==0?ze.tonemapping_pars_fragment:"",n.toneMapping!==0?kh("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Gh("linearToOutputTexel",n.outputColorSpace),Wh(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ii).join(`
`)),a=ps(a),a=ca(a,n),a=ha(a,n),o=ps(o),o=ca(o,n),o=ha(o,n),a=ua(a),o=ua(o),n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,d=["#define varying in",n.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const U=A+_+a,E=A+d+o,T=aa(r,r.VERTEX_SHADER,U),b=aa(r,r.FRAGMENT_SHADER,E);r.attachShader(x,T),r.attachShader(x,b),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(D){if(e.debug.checkShaderErrors){const O=r.getProgramInfoLog(x)||"",Z=r.getShaderInfoLog(T)||"",N=r.getShaderInfoLog(b)||"",B=O.trim(),X=Z.trim(),H=N.trim();let le=!0,q=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(le=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,x,T,b);else{const J=la(r,T,"vertex"),j=la(r,b,"fragment");Ie("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+J+`
`+j)}else B!==""?Le("WebGLProgram: Program Info Log:",B):(X===""||H==="")&&(q=!1);q&&(D.diagnostics={runnable:le,programLog:B,vertexShader:{log:X,prefix:_},fragmentShader:{log:H,prefix:d}})}r.deleteShader(T),r.deleteShader(b),m=new Sr(r,x),y=Yh(r,x)}let m;this.getUniforms=function(){return m===void 0&&R(this),m};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let W=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=r.getProgramParameter(x,Fh)),W},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Bh++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=b,this}var cu=0,hu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new uu(e),t.set(e,n)),n}},uu=class{constructor(e){this.id=cu++,this.code=e,this.usedTimes=0}};function du(e){return e===1030||e===37490||e===36285}function fu(e,t,n,i,r,s){const a=new Oa,o=new hu,c=new Set,l=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(m){return c.add(m),m===0?"uv":`uv${m}`}function x(m,y,W,D,O,Z){const N=D.fog,B=O.geometry,X=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?D.environment:null,H=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,le=t.get(m.envMap||X,H),q=le&&le.mapping===306?le.image.height:null,J=p[m.type];m.precision!==null&&(h=i.getMaxPrecision(m.precision),h!==m.precision&&Le("WebGLProgram.getParameters:",m.precision,"not supported, using",h,"instead."));const j=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ne=j!==void 0?j.length:0;let be=0;B.morphAttributes.position!==void 0&&(be=1),B.morphAttributes.normal!==void 0&&(be=2),B.morphAttributes.color!==void 0&&(be=3);let rt,De,Y,ne;if(J){const lt=rn[J];rt=lt.vertexShader,De=lt.fragmentShader}else{rt=m.vertexShader,De=m.fragmentShader;const lt=o.getVertexShaderStage(m),Xe=o.getFragmentShaderStage(m);o.update(m,lt,Xe),Y=lt.id,ne=Xe.id}const ae=e.getRenderTarget(),Re=e.state.buffers.depth.getReversed(),Ce=O.isInstancedMesh===!0,fe=O.isBatchedMesh===!0,Qe=!!m.map,Ye=!!m.matcap,Ue=!!le,ot=!!m.aoMap,xt=!!m.lightMap,Tt=!!m.bumpMap&&m.wireframe===!1,st=!!m.normalMap,yt=!!m.displacementMap,ht=!!m.emissiveMap,ut=!!m.metalnessMap,L=!!m.roughnessMap,ye=m.anisotropy>0,Ve=m.clearcoat>0,Ke=m.dispersion>0,S=m.retroreflectivity>0,v=m.iridescence>0,w=m.sheen>0,z=m.transmission>0,Q=ye&&!!m.anisotropyMap,re=Ve&&!!m.clearcoatMap,se=Ve&&!!m.clearcoatNormalMap,C=Ve&&!!m.clearcoatRoughnessMap,ie=v&&!!m.iridescenceMap,de=v&&!!m.iridescenceThicknessMap,ve=w&&!!m.sheenColorMap,$=w&&!!m.sheenRoughnessMap,ce=!!m.specularMap,xe=!!m.specularColorMap,Ae=!!m.specularIntensityMap,Be=z&&!!m.transmissionMap,P=z&&!!m.thicknessMap,K=!!m.gradientMap,ee=!!m.alphaMap,pe=m.alphaTest>0,_e=!!m.alphaHash,te=!!m.extensions;let ue=0;m.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ue=e.toneMapping);const we={shaderID:J,shaderType:m.type,shaderName:m.name,vertexShader:rt,fragmentShader:De,defines:m.defines,customVertexShaderID:Y,customFragmentShaderID:ne,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:h,batching:fe,batchingColor:fe&&O._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&O.instanceColor!==null,instancingMorph:Ce&&O.morphTexture!==null,outputColorSpace:ae===null?e.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:ke.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:Qe,matcap:Ye,envMap:Ue,envMapMode:Ue&&le.mapping,envMapCubeUVHeight:q,aoMap:ot,lightMap:xt,bumpMap:Tt,normalMap:st,displacementMap:yt,emissiveMap:ht,normalMapObjectSpace:st&&m.normalMapType===1,normalMapTangentSpace:st&&m.normalMapType===0,packedNormalMap:st&&m.normalMapType===0&&du(m.normalMap.format),metalnessMap:ut,roughnessMap:L,anisotropy:ye,anisotropyMap:Q,clearcoat:Ve,clearcoatMap:re,clearcoatNormalMap:se,clearcoatRoughnessMap:C,dispersion:Ke,retroreflection:S,iridescence:v,iridescenceMap:ie,iridescenceThicknessMap:de,sheen:w,sheenColorMap:ve,sheenRoughnessMap:$,specularMap:ce,specularColorMap:xe,specularIntensityMap:Ae,transmission:z,transmissionMap:Be,thicknessMap:P,gradientMap:K,opaque:m.transparent===!1&&m.blending===1&&m.alphaToCoverage===!1,alphaMap:ee,alphaTest:pe,alphaHash:_e,combine:m.combine,mapUv:Qe&&M(m.map.channel),aoMapUv:ot&&M(m.aoMap.channel),lightMapUv:xt&&M(m.lightMap.channel),bumpMapUv:Tt&&M(m.bumpMap.channel),normalMapUv:st&&M(m.normalMap.channel),displacementMapUv:yt&&M(m.displacementMap.channel),emissiveMapUv:ht&&M(m.emissiveMap.channel),metalnessMapUv:ut&&M(m.metalnessMap.channel),roughnessMapUv:L&&M(m.roughnessMap.channel),anisotropyMapUv:Q&&M(m.anisotropyMap.channel),clearcoatMapUv:re&&M(m.clearcoatMap.channel),clearcoatNormalMapUv:se&&M(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:C&&M(m.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&M(m.iridescenceMap.channel),iridescenceThicknessMapUv:de&&M(m.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&M(m.sheenColorMap.channel),sheenRoughnessMapUv:$&&M(m.sheenRoughnessMap.channel),specularMapUv:ce&&M(m.specularMap.channel),specularColorMapUv:xe&&M(m.specularColorMap.channel),specularIntensityMapUv:Ae&&M(m.specularIntensityMap.channel),transmissionMapUv:Be&&M(m.transmissionMap.channel),thicknessMapUv:P&&M(m.thicknessMap.channel),alphaMapUv:ee&&M(m.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(st||ye),vertexNormals:!!B.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!B.attributes.uv&&(Qe||ee),fog:!!N,useFog:m.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||B.attributes.normal===void 0&&st===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Re,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:be,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:Z.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:m.dithering,shadowMapEnabled:e.shadowMap.enabled&&W.length>0,shadowMapType:e.shadowMap.type,toneMapping:ue,decodeVideoTexture:Qe&&m.map.isVideoTexture===!0&&ke.getTransfer(m.map.colorSpace)==="srgb",decodeVideoTextureEmissive:ht&&m.emissiveMap.isVideoTexture===!0&&ke.getTransfer(m.emissiveMap.colorSpace)==="srgb",premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===1,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:te&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&m.extensions.multiDraw===!0||fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return we.vertexUv1s=c.has(1),we.vertexUv2s=c.has(2),we.vertexUv3s=c.has(3),c.clear(),we}function _(m){const y=[];if(m.shaderID?y.push(m.shaderID):(y.push(m.customVertexShaderID),y.push(m.customFragmentShaderID)),m.defines!==void 0)for(const W in m.defines)y.push(W),y.push(m.defines[W]);return m.isRawShaderMaterial===!1&&(d(y,m),A(y,m),y.push(e.outputColorSpace)),y.push(m.customProgramCacheKey),y.join()}function d(m,y){m.push(y.precision),m.push(y.outputColorSpace),m.push(y.envMapMode),m.push(y.envMapCubeUVHeight),m.push(y.mapUv),m.push(y.alphaMapUv),m.push(y.lightMapUv),m.push(y.aoMapUv),m.push(y.bumpMapUv),m.push(y.normalMapUv),m.push(y.displacementMapUv),m.push(y.emissiveMapUv),m.push(y.metalnessMapUv),m.push(y.roughnessMapUv),m.push(y.anisotropyMapUv),m.push(y.clearcoatMapUv),m.push(y.clearcoatNormalMapUv),m.push(y.clearcoatRoughnessMapUv),m.push(y.iridescenceMapUv),m.push(y.iridescenceThicknessMapUv),m.push(y.sheenColorMapUv),m.push(y.sheenRoughnessMapUv),m.push(y.specularMapUv),m.push(y.specularColorMapUv),m.push(y.specularIntensityMapUv),m.push(y.transmissionMapUv),m.push(y.thicknessMapUv),m.push(y.combine),m.push(y.fogExp2),m.push(y.sizeAttenuation),m.push(y.morphTargetsCount),m.push(y.morphAttributeCount),m.push(y.numSunLights),m.push(y.numDirLights),m.push(y.numPointLights),m.push(y.numSpotLights),m.push(y.numSpotLightMaps),m.push(y.numHemiLights),m.push(y.numRectAreaLights),m.push(y.numSunLightShadows),m.push(y.numDirLightShadows),m.push(y.numPointLightShadows),m.push(y.numSpotLightShadows),m.push(y.numSpotLightShadowsWithMaps),m.push(y.numLightProbes),m.push(y.shadowMapType),m.push(y.toneMapping),m.push(y.numClippingPlanes),m.push(y.numClipIntersection),m.push(y.depthPacking)}function A(m,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),m.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),m.push(a.mask)}function U(m){const y=p[m.type];let W;if(y){const D=rn[y];W=ql.clone(D.uniforms)}else W=m.uniforms;return W}function E(m,y){let W=u.get(y);return W!==void 0?++W.usedTimes:(W=new lu(e,y,m,r),l.push(W),u.set(y,W)),W}function T(m){if(--m.usedTimes===0){const y=l.indexOf(m);l[y]=l[l.length-1],l.pop(),u.delete(m.cacheKey),m.destroy()}}function b(m){o.remove(m)}function R(){o.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:U,acquireProgram:E,releaseProgram:T,releaseShaderCache:b,programs:l,dispose:R}}function pu(){let e=new WeakMap;function t(a){return e.has(a)}function n(a){let o=e.get(a);return o===void 0&&(o={},e.set(a,o)),o}function i(a){e.delete(a)}function r(a,o,c){e.get(a)[o]=c}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:r,dispose:s}}function mu(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function fa(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function pa(){const e=[];let t=0;const n=[],i=[],r=[];function s(){t=0,n.length=0,i.length=0,r.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,M,x,_,d){let A=e[t];return A===void 0?(A={id:h.id,object:h,geometry:p,material:M,materialVariant:a(h),groupOrder:x,renderOrder:h.renderOrder,z:_,group:d},e[t]=A):(A.id=h.id,A.object=h,A.geometry=p,A.material=M,A.materialVariant=a(h),A.groupOrder=x,A.renderOrder=h.renderOrder,A.z=_,A.group=d),t++,A}function c(h,p,M,x,_,d,A){A.reversedDepth===!0&&(_=-_);const U=o(h,p,M,x,_,d);M.transmission>0?i.push(U):M.transparent===!0?r.push(U):n.push(U)}function l(h,p,M,x,_,d){const A=o(h,p,M,x,_,d);M.transmission>0?i.unshift(A):M.transparent===!0?r.unshift(A):n.unshift(A)}function u(h,p){n.length>1&&n.sort(h||mu),i.length>1&&i.sort(p||fa),r.length>1&&r.sort(p||fa)}function f(){for(let h=t,p=e.length;h<p;h++){const M=e[h];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:f,sort:u}}function vu(){let e=new WeakMap;function t(i,r){const s=e.get(i);let a;return s===void 0?(a=new pa,e.set(i,[a])):r>=s.length?(a=new pa,s.push(a)):a=s[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function _u(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new G,color:new $e};break;case"SpotLight":n={position:new G,direction:new G,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new G,halfWidth:new G,halfHeight:new G}}return e[t.id]=n,n}}}function gu(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Su=0;function Mu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function xu(e){const t=new _u,n=gu(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new G);const r=new G,s=new gt,a=new gt;function o(l){let u=0,f=0,h=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let p=0,M=0,x=0,_=0,d=0,A=0,U=0,E=0,T=0,b=0,R=0,m=0,y=0,W=0;l.sort(Mu);for(let O=0,Z=l.length;O<Z;O++){const N=l[O],B=N.color,X=N.intensity,H=N.distance;let le=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===1030?le=N.shadow.map.texture:le=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=B.r*X,f+=B.g*X,h+=B.b*X;else if(N.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(N.sh.coefficients[q],X);W++}else if(N.isSunLight){const q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const J=N.shadow,j=n.get(N);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),i.sunShadow[M]=j,i.sunShadowMap[M]=le;const Ne=J.getViewportCount();for(let be=0;be<Ne;be++)i.sunShadowMatrix[x+be]=J.getMatrix(be),i.sunShadowCascade[x+be]=J._cascadeData[be];x+=Ne,M++}i.sun[p]=q,p++}else if(N.isDirectionalLight){const q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const J=N.shadow,j=n.get(N);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,i.directionalShadow[_]=j,i.directionalShadowMap[_]=le,i.directionalShadowMatrix[_]=N.shadow.matrix,T++}i.directional[_]=q,_++}else if(N.isSpotLight){const q=t.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(B).multiplyScalar(X),q.distance=H,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,i.spot[A]=q;const J=N.shadow;if(N.map&&(i.spotLightMap[m]=N.map,m++,J.updateMatrices(N),N.castShadow&&y++),i.spotLightMatrix[A]=J.matrix,N.castShadow){const j=n.get(N);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,i.spotShadow[A]=j,i.spotShadowMap[A]=le,R++}A++}else if(N.isRectAreaLight){const q=t.get(N);q.color.copy(B).multiplyScalar(X),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),i.rectArea[U]=q,U++}else if(N.isPointLight){const q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),q.distance=N.distance,q.decay=N.decay,N.castShadow){const J=N.shadow,j=n.get(N);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,j.shadowCameraNear=J.camera.near,j.shadowCameraFar=J.camera.far,i.pointShadow[d]=j,i.pointShadowMap[d]=le,i.pointShadowMatrix[d]=N.shadow.matrix,b++}i.point[d]=q,d++}else if(N.isHemisphereLight){const q=t.get(N);q.skyColor.copy(N.color).multiplyScalar(X),q.groundColor.copy(N.groundColor).multiplyScalar(X),i.hemi[E]=q,E++}}U>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const D=i.hash;(D.sunLength!==p||D.directionalLength!==_||D.pointLength!==d||D.spotLength!==A||D.rectAreaLength!==U||D.hemiLength!==E||D.numSunShadows!==M||D.numDirectionalShadows!==T||D.numPointShadows!==b||D.numSpotShadows!==R||D.numSpotMaps!==m||D.numLightProbes!==W)&&(i.sun.length=p,i.directional.length=_,i.spot.length=A,i.rectArea.length=U,i.point.length=d,i.hemi.length=E,i.sunShadow.length=M,i.sunShadowMap.length=M,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+m-y,i.spotLightMap.length=m,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=W,D.sunLength=p,D.directionalLength=_,D.pointLength=d,D.spotLength=A,D.rectAreaLength=U,D.hemiLength=E,D.numSunShadows=M,D.numDirectionalShadows=T,D.numPointShadows=b,D.numSpotShadows=R,D.numSpotMaps=m,D.numLightProbes=W,i.version=Su++)}function c(l,u){let f=0,h=0,p=0,M=0,x=0,_=0;const d=u.matrixWorldInverse;for(let A=0,U=l.length;A<U;A++){const E=l[A];if(E.isSunLight){const T=i.sun[f];T.direction.setFromMatrixPosition(E.matrixWorld),T.direction.transformDirection(d),f++}else if(E.isDirectionalLight){const T=i.directional[h];T.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(d),h++}else if(E.isSpotLight){const T=i.spot[M];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(d),M++}else if(E.isRectAreaLight){const T=i.rectArea[x];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(d),a.identity(),s.copy(E.matrixWorld),s.premultiply(d),a.extractRotation(s),T.halfWidth.set(E.width*.5,0,0),T.halfHeight.set(0,E.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(E.isPointLight){const T=i.point[p];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(d),p++}else if(E.isHemisphereLight){const T=i.hemi[_];T.direction.setFromMatrixPosition(E.matrixWorld),T.direction.transformDirection(d),_++}}}return{setup:o,setupView:c,state:i}}function ma(e){const t=new xu(e),n=[],i=[],r=[];function s(h){f.camera=h,n.length=0,i.length=0,r.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function c(h){r.push(h)}function l(){t.setup(n)}function u(h){t.setupView(n,h)}const f={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Eu(e){let t=new WeakMap;function n(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new ma(e),t.set(r,[o])):s>=a.length?(o=new ma(e),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var yu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,bu=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],Au=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],va=new gt,Pi=new G,ss=new G;function Ru(e,t,n){let i=new ka;const r=new et,s=new et,a=new _t,o=new Jl,c=new $l,l={},u=n.maxTextureSize,f={0:1,1:0,2:2},h=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:yu,fragmentShader:Tu}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const M=new Sn;M.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new gn(M,h),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let d=this.type;this.render=function(b,R,m){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||b.length===0)return;this.type===2&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=1);const y=e.getRenderTarget(),W=e.getActiveCubeFace(),D=e.getActiveMipmapLevel(),O=e.state;O.setBlending(0),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const Z=d!==this.type;Z&&R.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(B=>B.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,B=b.length;N<B;N++){const X=b[N],H=X.shadow;if(H===void 0){Le("WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const le=H.getFrameExtents();r.multiply(le),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/le.x),r.x=s.x*le.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/le.y),r.y=s.y*le.y,H.mapSize.y=s.y));const q=e.state.buffers.depth.getReversed();if(H.camera._reversedDepth=q,H.map===null||Z===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===3){if(X.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Jt(r.x,r.y,{format:Mr,type:wn,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),H.map.texture.name=X.name+".shadowMap",H.map.depthTexture=new Oi(r.x,r.y,br),H.map.depthTexture.name=X.name+".shadowMapDepth",H.map.depthTexture.format=Di,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Pt,H.map.depthTexture.magFilter=Pt}else X.isPointLight?(H.map=new ro(r.x),H.map.depthTexture=new Wl(r.x,zn)):(H.map=new Jt(r.x,r.y),H.map.depthTexture=new Oi(r.x,r.y,zn)),H.map.depthTexture.name=X.name+".shadowMap",H.map.depthTexture.format=Di,this.type===1?(H.map.depthTexture.compareFunction=q?518:515,H.map.depthTexture.minFilter=Ot,H.map.depthTexture.magFilter=Ot):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Pt,H.map.depthTexture.magFilter=Pt);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==r.x||H.map.height!==r.y)&&H.map.setSize(r.x,r.y);const J=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();X.isPointLight!==!0&&H.updateMatrices(X,m);for(let j=0;j<J;j++){const Ne=H.getCamera(j);if(X.isPointLight){const be=H.camera,rt=H.matrix,De=X.distance||be.far;De!==be.far&&(be.far=De,be.updateProjectionMatrix()),Pi.setFromMatrixPosition(X.matrixWorld),be.position.copy(Pi),ss.copy(be.position),ss.add(bu[j]),be.up.copy(Au[j]),be.lookAt(ss),be.updateMatrixWorld(),rt.makeTranslation(-Pi.x,-Pi.y,-Pi.z),va.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),H._frustum.setFromProjectionMatrix(va,be.coordinateSystem,be.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)e.setRenderTarget(H.map,j),e.clear();else{j===0&&(e.setRenderTarget(H.map),e.clear());const be=H.getViewport(j);a.set(s.x*be.x,s.y*be.y,s.x*be.z,s.y*be.w),O.viewport(a)}i=H.getFrustum(j),E(R,m,Ne,X,this.type)}H.isPointLightShadow!==!0&&this.type===3&&A(H,m),H.needsUpdate=!1}d=this.type,_.needsUpdate=!1,e.setRenderTarget(y,W,D)};function A(b,R){const m=t.update(x);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new Jt(r.x,r.y,{format:Mr,type:wn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,e.setRenderTarget(b.mapPass),e.clear(),e.renderBufferDirect(R,null,m,h,x,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,e.setRenderTarget(b.map),e.clear(),e.renderBufferDirect(R,null,m,p,x,null)}function U(b,R,m,y){let W=null;const D=m.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)W=D;else if(W=m.isPointLight===!0?c:o,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const O=W.uuid,Z=R.uuid;let N=l[O];N===void 0&&(N={},l[O]=N);let B=N[Z];B===void 0&&(B=W.clone(),N[Z]=B,R.addEventListener("dispose",T)),W=B}if(W.visible=R.visible,W.wireframe=R.wireframe,y===3?W.side=R.shadowSide!==null?R.shadowSide:R.side:W.side=R.shadowSide!==null?R.shadowSide:f[R.side],W.alphaMap=R.alphaMap,W.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,W.map=R.map,W.clipShadows=R.clipShadows,W.clippingPlanes=R.clippingPlanes,W.clipIntersection=R.clipIntersection,W.displacementMap=R.displacementMap,W.displacementScale=R.displacementScale,W.displacementBias=R.displacementBias,W.wireframeLinewidth=R.wireframeLinewidth,W.linewidth=R.linewidth,m.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const O=e.properties.get(W);O.light=m}return W}function E(b,R,m,y,W){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&W===3)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,b.matrixWorld);const O=t.update(b),Z=b.material;if(Array.isArray(Z)){const N=O.groups;for(let B=0,X=N.length;B<X;B++){const H=N[B],le=Z[H.materialIndex];if(le&&le.visible){const q=U(b,le,y,W);b.onBeforeShadow(e,b,R,m,O,q,H),e.renderBufferDirect(m,null,O,q,b,H),b.onAfterShadow(e,b,R,m,O,q,H)}}}else if(Z.visible){const N=U(b,Z,y,W);b.onBeforeShadow(e,b,R,m,O,N,null),e.renderBufferDirect(m,null,O,N,b,null),b.onAfterShadow(e,b,R,m,O,N,null)}}const D=b.children;for(let O=0,Z=D.length;O<Z;O++)E(D[O],R,m,y,W)}function T(b){b.target.removeEventListener("dispose",T);for(const R in l){const m=l[R],y=b.target.uuid;y in m&&(m[y].dispose(),delete m[y])}}}function wu(e,t){function n(){let P=!1;const K=new _t;let ee=null;const pe=new _t(0,0,0,0);return{setMask:function(_e){ee!==_e&&!P&&(e.colorMask(_e,_e,_e,_e),ee=_e)},setLocked:function(_e){P=_e},setClear:function(_e,te,ue,we,lt){lt===!0&&(_e*=we,te*=we,ue*=we),K.set(_e,te,ue,we),pe.equals(K)===!1&&(e.clearColor(_e,te,ue,we),pe.copy(K))},reset:function(){P=!1,ee=null,pe.set(-1,0,0,0)}}}function i(){let P=!1,K=!1,ee=null,pe=null,_e=null;return{setReversed:function(te){if(K!==te){const ue=t.get("EXT_clip_control");te?ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.ZERO_TO_ONE_EXT):ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.NEGATIVE_ONE_TO_ONE_EXT),K=te;const we=_e;_e=null,this.setClear(we)}},getReversed:function(){return K},setTest:function(te){te?ae(e.DEPTH_TEST):Re(e.DEPTH_TEST)},setMask:function(te){ee!==te&&!P&&(e.depthMask(te),ee=te)},setFunc:function(te){if(K&&(te=gl[te]),pe!==te){switch(te){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}pe=te}},setLocked:function(te){P=te},setClear:function(te){_e!==te&&(_e=te,K&&(te=1-te),e.clearDepth(te))},reset:function(){P=!1,ee=null,pe=null,_e=null,K=!1}}}function r(){let P=!1,K=null,ee=null,pe=null,_e=null,te=null,ue=null,we=null,lt=null;return{setTest:function(Xe){P||(Xe?ae(e.STENCIL_TEST):Re(e.STENCIL_TEST))},setMask:function(Xe){K!==Xe&&!P&&(e.stencilMask(Xe),K=Xe)},setFunc:function(Xe,Ft,Wt){(ee!==Xe||pe!==Ft||_e!==Wt)&&(e.stencilFunc(Xe,Ft,Wt),ee=Xe,pe=Ft,_e=Wt)},setOp:function(Xe,Ft,Wt){(te!==Xe||ue!==Ft||we!==Wt)&&(e.stencilOp(Xe,Ft,Wt),te=Xe,ue=Ft,we=Wt)},setLocked:function(Xe){P=Xe},setClear:function(Xe){lt!==Xe&&(e.clearStencil(Xe),lt=Xe)},reset:function(){P=!1,K=null,ee=null,pe=null,_e=null,te=null,ue=null,we=null,lt=null}}}const s=new n,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},f={},h={},p=new WeakMap,M=[],x=null,_=!1,d=null,A=null,U=null,E=null,T=null,b=null,R=null,m=new $e(0,0,0),y=0,W=!1,D=null,O=null,Z=null,N=null,B=null;const X=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,le=0;const q=e.getParameter(e.VERSION);q.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=le>=1):q.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=le>=2);let J=null,j={};const Ne=e.getParameter(e.SCISSOR_BOX),be=e.getParameter(e.VIEWPORT),rt=new _t().fromArray(Ne),De=new _t().fromArray(be);function Y(P,K,ee,pe){const _e=new Uint8Array(4),te=e.createTexture();e.bindTexture(P,te),e.texParameteri(P,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(P,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let ue=0;ue<ee;ue++)P===e.TEXTURE_3D||P===e.TEXTURE_2D_ARRAY?e.texImage3D(K,0,e.RGBA,1,1,pe,0,e.RGBA,e.UNSIGNED_BYTE,_e):e.texImage2D(K+ue,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,_e);return te}const ne={};ne[e.TEXTURE_2D]=Y(e.TEXTURE_2D,e.TEXTURE_2D,1),ne[e.TEXTURE_CUBE_MAP]=Y(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[e.TEXTURE_2D_ARRAY]=Y(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ne[e.TEXTURE_3D]=Y(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(e.DEPTH_TEST),a.setFunc(3),Tt(!1),st(1),ae(e.CULL_FACE),ot(0);function ae(P){u[P]!==!0&&(e.enable(P),u[P]=!0)}function Re(P){u[P]!==!1&&(e.disable(P),u[P]=!1)}function Ce(P,K){return h[P]!==K?(e.bindFramebuffer(P,K),h[P]=K,P===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=K),P===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=K),!0):!1}function fe(P,K){let ee=M,pe=!1;if(P){ee=p.get(K),ee===void 0&&(ee=[],p.set(K,ee));const _e=P.textures;if(ee.length!==_e.length||ee[0]!==e.COLOR_ATTACHMENT0){for(let te=0,ue=_e.length;te<ue;te++)ee[te]=e.COLOR_ATTACHMENT0+te;ee.length=_e.length,pe=!0}}else ee[0]!==e.BACK&&(ee[0]=e.BACK,pe=!0);pe&&e.drawBuffers(ee)}function Qe(P){return x!==P?(e.useProgram(P),x=P,!0):!1}const Ye={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};Ye[103]=e.MIN,Ye[104]=e.MAX;const Ue={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ot(P,K,ee,pe,_e,te,ue,we,lt,Xe){if(P===0){_===!0&&(Re(e.BLEND),_=!1);return}if(_===!1&&(ae(e.BLEND),_=!0),P!==5){if(P!==d||Xe!==W){if((A!==100||T!==100)&&(e.blendEquation(e.FUNC_ADD),A=100,T=100),Xe)switch(P){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ie("WebGLState: Invalid blending: ",P)}else switch(P){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:Ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:Ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ie("WebGLState: Invalid blending: ",P)}U=null,E=null,b=null,R=null,m.set(0,0,0),y=0,d=P,W=Xe}return}_e=_e||K,te=te||ee,ue=ue||pe,(K!==A||_e!==T)&&(e.blendEquationSeparate(Ye[K],Ye[_e]),A=K,T=_e),(ee!==U||pe!==E||te!==b||ue!==R)&&(e.blendFuncSeparate(Ue[ee],Ue[pe],Ue[te],Ue[ue]),U=ee,E=pe,b=te,R=ue),(we.equals(m)===!1||lt!==y)&&(e.blendColor(we.r,we.g,we.b,lt),m.copy(we),y=lt),d=P,W=!1}function xt(P,K){P.side===2?Re(e.CULL_FACE):ae(e.CULL_FACE);let ee=P.side===1;K&&(ee=!ee),Tt(ee),P.blending===1&&P.transparent===!1?ot(0):ot(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const pe=P.stencilWrite;o.setTest(pe),pe&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ht(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ae(e.SAMPLE_ALPHA_TO_COVERAGE):Re(e.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(P){D!==P&&(P?e.frontFace(e.CW):e.frontFace(e.CCW),D=P)}function st(P){P!==0?(ae(e.CULL_FACE),P!==O&&(P===1?e.cullFace(e.BACK):P===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Re(e.CULL_FACE),O=P}function yt(P){P!==Z&&(H&&e.lineWidth(P),Z=P)}function ht(P,K,ee){P?(ae(e.POLYGON_OFFSET_FILL),(N!==K||B!==ee)&&(N=K,B=ee,a.getReversed()&&(K=-K),e.polygonOffset(K,ee))):Re(e.POLYGON_OFFSET_FILL)}function ut(P){P?ae(e.SCISSOR_TEST):Re(e.SCISSOR_TEST)}function L(P){P===void 0&&(P=e.TEXTURE0+X-1),J!==P&&(e.activeTexture(P),J=P)}function ye(P,K,ee){ee===void 0&&(J===null?ee=e.TEXTURE0+X-1:ee=J);let pe=j[ee];pe===void 0&&(pe={type:void 0,texture:void 0},j[ee]=pe),(pe.type!==P||pe.texture!==K)&&(J!==ee&&(e.activeTexture(ee),J=ee),e.bindTexture(P,K||ne[P]),pe.type=P,pe.texture=K)}function Ve(){const P=j[J];P!==void 0&&P.type!==void 0&&(e.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Ke(){try{e.compressedTexImage2D(...arguments)}catch(P){Ie("WebGLState:",P)}}function S(){try{e.compressedTexImage3D(...arguments)}catch(P){Ie("WebGLState:",P)}}function v(){try{e.texSubImage2D(...arguments)}catch(P){Ie("WebGLState:",P)}}function w(){try{e.texSubImage3D(...arguments)}catch(P){Ie("WebGLState:",P)}}function z(){try{e.compressedTexSubImage2D(...arguments)}catch(P){Ie("WebGLState:",P)}}function Q(){try{e.compressedTexSubImage3D(...arguments)}catch(P){Ie("WebGLState:",P)}}function re(){try{e.texStorage2D(...arguments)}catch(P){Ie("WebGLState:",P)}}function se(){try{e.texStorage3D(...arguments)}catch(P){Ie("WebGLState:",P)}}function C(){try{e.texImage2D(...arguments)}catch(P){Ie("WebGLState:",P)}}function ie(){try{e.texImage3D(...arguments)}catch(P){Ie("WebGLState:",P)}}function de(P){return f[P]!==void 0?f[P]:e.getParameter(P)}function ve(P,K){f[P]!==K&&(e.pixelStorei(P,K),f[P]=K)}function $(P){rt.equals(P)===!1&&(e.scissor(P.x,P.y,P.z,P.w),rt.copy(P))}function ce(P){De.equals(P)===!1&&(e.viewport(P.x,P.y,P.z,P.w),De.copy(P))}function xe(P,K){let ee=l.get(K);ee===void 0&&(ee=new WeakMap,l.set(K,ee));let pe=ee.get(P);pe===void 0&&(pe=e.getUniformBlockIndex(K,P.name),ee.set(P,pe))}function Ae(P,K){const ee=l.get(K).get(P);c.get(K)!==ee&&(e.uniformBlockBinding(K,ee,P.__bindingPointIndex),c.set(K,ee))}function Be(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},f={},J=null,j={},h={},p=new WeakMap,M=[],x=null,_=!1,d=null,A=null,U=null,E=null,T=null,b=null,R=null,m=new $e(0,0,0),y=0,W=!1,D=null,O=null,Z=null,N=null,B=null,rt.set(0,0,e.canvas.width,e.canvas.height),De.set(0,0,e.canvas.width,e.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ae,disable:Re,bindFramebuffer:Ce,drawBuffers:fe,useProgram:Qe,setBlending:ot,setMaterial:xt,setFlipSided:Tt,setCullFace:st,setLineWidth:yt,setPolygonOffset:ht,setScissorTest:ut,activeTexture:L,bindTexture:ye,unbindTexture:Ve,compressedTexImage2D:Ke,compressedTexImage3D:S,texImage2D:C,texImage3D:ie,pixelStorei:ve,getParameter:de,updateUBOMapping:xe,uniformBlockBinding:Ae,texStorage2D:re,texStorage3D:se,texSubImage2D:v,texSubImage3D:w,compressedTexSubImage2D:z,compressedTexSubImage3D:Q,scissor:$,viewport:ce,reset:Be}}function Cu(e,t,n,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new et,u=new WeakMap,f=new Set;let h;const p=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(S,v){return M?new OffscreenCanvas(S,v):Tr("canvas")}function _(S,v,w){let z=1;const Q=Ke(S);if((Q.width>w||Q.height>w)&&(z=w/Math.max(Q.width,Q.height)),z<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const re=Math.floor(z*Q.width),se=Math.floor(z*Q.height);h===void 0&&(h=x(re,se));const C=v?x(re,se):h;return C.width=re,C.height=se,C.getContext("2d").drawImage(S,0,0,re,se),Le("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+re+"x"+se+")."),C}else return"data"in S&&Le("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),S;return S}function d(S){return S.generateMipmaps}function A(S){e.generateMipmap(S)}function U(S){return S.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?e.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function E(S,v,w,z,Q,re=!1){if(S!==null){if(e[S]!==void 0)return e[S];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let se;z&&(se=t.get("EXT_texture_norm16"),se||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let C=v;if(v===e.RED&&(w===e.FLOAT&&(C=e.R32F),w===e.HALF_FLOAT&&(C=e.R16F),w===e.UNSIGNED_BYTE&&(C=e.R8),w===e.UNSIGNED_SHORT&&se&&(C=se.R16_EXT),w===e.SHORT&&se&&(C=se.R16_SNORM_EXT)),v===e.RED_INTEGER&&(w===e.UNSIGNED_BYTE&&(C=e.R8UI),w===e.UNSIGNED_SHORT&&(C=e.R16UI),w===e.UNSIGNED_INT&&(C=e.R32UI),w===e.BYTE&&(C=e.R8I),w===e.SHORT&&(C=e.R16I),w===e.INT&&(C=e.R32I)),v===e.RG&&(w===e.FLOAT&&(C=e.RG32F),w===e.HALF_FLOAT&&(C=e.RG16F),w===e.UNSIGNED_BYTE&&(C=e.RG8),w===e.UNSIGNED_SHORT&&se&&(C=se.RG16_EXT),w===e.SHORT&&se&&(C=se.RG16_SNORM_EXT)),v===e.RG_INTEGER&&(w===e.UNSIGNED_BYTE&&(C=e.RG8UI),w===e.UNSIGNED_SHORT&&(C=e.RG16UI),w===e.UNSIGNED_INT&&(C=e.RG32UI),w===e.BYTE&&(C=e.RG8I),w===e.SHORT&&(C=e.RG16I),w===e.INT&&(C=e.RG32I)),v===e.RGB_INTEGER&&(w===e.UNSIGNED_BYTE&&(C=e.RGB8UI),w===e.UNSIGNED_SHORT&&(C=e.RGB16UI),w===e.UNSIGNED_INT&&(C=e.RGB32UI),w===e.BYTE&&(C=e.RGB8I),w===e.SHORT&&(C=e.RGB16I),w===e.INT&&(C=e.RGB32I)),v===e.RGBA_INTEGER&&(w===e.UNSIGNED_BYTE&&(C=e.RGBA8UI),w===e.UNSIGNED_SHORT&&(C=e.RGBA16UI),w===e.UNSIGNED_INT&&(C=e.RGBA32UI),w===e.BYTE&&(C=e.RGBA8I),w===e.SHORT&&(C=e.RGBA16I),w===e.INT&&(C=e.RGBA32I)),v===e.RGB&&(w===e.UNSIGNED_SHORT&&se&&(C=se.RGB16_EXT),w===e.SHORT&&se&&(C=se.RGB16_SNORM_EXT),w===e.UNSIGNED_INT_5_9_9_9_REV&&(C=e.RGB9_E5),w===e.UNSIGNED_INT_10F_11F_11F_REV&&(C=e.R11F_G11F_B10F)),v===e.RGBA){const ie=re?Er:ke.getTransfer(Q);w===e.FLOAT&&(C=e.RGBA32F),w===e.HALF_FLOAT&&(C=e.RGBA16F),w===e.UNSIGNED_BYTE&&(C=ie==="srgb"?e.SRGB8_ALPHA8:e.RGBA8),w===e.UNSIGNED_SHORT&&se&&(C=se.RGBA16_EXT),w===e.SHORT&&se&&(C=se.RGBA16_SNORM_EXT),w===e.UNSIGNED_SHORT_4_4_4_4&&(C=e.RGBA4),w===e.UNSIGNED_SHORT_5_5_5_1&&(C=e.RGB5_A1)}return(C===e.R16F||C===e.R32F||C===e.RG16F||C===e.RG32F||C===e.RGBA16F||C===e.RGBA32F)&&t.get("EXT_color_buffer_float"),C}function T(S,v){let w;return S?v===null||v===1014||v===1020?w=e.DEPTH24_STENCIL8:v===1015?w=e.DEPTH32F_STENCIL8:v===1012&&(w=e.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===1014||v===1020?w=e.DEPTH_COMPONENT24:v===1015?w=e.DEPTH_COMPONENT32F:v===1012&&(w=e.DEPTH_COMPONENT16),w}function b(S,v){return d(S)===!0||S.isFramebufferTexture&&S.minFilter!==1003&&S.minFilter!==1006?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function R(S){const v=S.target;v.removeEventListener("dispose",R),y(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&f.delete(v)}function m(S){const v=S.target;v.removeEventListener("dispose",m),D(v)}function y(S){const v=i.get(S);if(v.__webglInit===void 0)return;const w=S.source,z=p.get(w);if(z){const Q=z[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&W(S),Object.keys(z).length===0&&p.delete(w)}i.remove(S)}function W(S){const v=i.get(S);e.deleteTexture(v.__webglTexture);const w=S.source,z=p.get(w);delete z[v.__cacheKey],a.memory.textures--}function D(S){const v=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(v.__webglFramebuffer[z]))for(let Q=0;Q<v.__webglFramebuffer[z].length;Q++)e.deleteFramebuffer(v.__webglFramebuffer[z][Q]);else e.deleteFramebuffer(v.__webglFramebuffer[z]);v.__webglDepthbuffer&&e.deleteRenderbuffer(v.__webglDepthbuffer[z])}else{if(Array.isArray(v.__webglFramebuffer))for(let z=0;z<v.__webglFramebuffer.length;z++)e.deleteFramebuffer(v.__webglFramebuffer[z]);else e.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&e.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&e.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let z=0;z<v.__webglColorRenderbuffer.length;z++)v.__webglColorRenderbuffer[z]&&e.deleteRenderbuffer(v.__webglColorRenderbuffer[z]);v.__webglDepthRenderbuffer&&e.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const w=S.textures;for(let z=0,Q=w.length;z<Q;z++){const re=i.get(w[z]);re.__webglTexture&&(e.deleteTexture(re.__webglTexture),a.memory.textures--),i.remove(w[z])}i.remove(S)}let O=0;function Z(){O=0}function N(){return O}function B(S){O=S}function X(){const S=O;return S>=r.maxTextures&&Le("WebGLTextures: Trying to use "+(S+1)+" texture units while this GPU supports only "+r.maxTextures),O+=1,S}function H(S){const v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function le(S,v){const w=i.get(S);if(S.isVideoTexture&&ye(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&w.__version!==S.version){const z=S.image;if(z===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(w,S,v);return}}else S.isExternalTexture&&(w.__webglTexture=S.sourceTexture?S.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,w.__webglTexture,e.TEXTURE0+v)}function q(S,v){const w=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&w.__version!==S.version){Re(w,S,v);return}else S.isExternalTexture&&(w.__webglTexture=S.sourceTexture?S.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,w.__webglTexture,e.TEXTURE0+v)}function J(S,v){const w=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&w.__version!==S.version){Re(w,S,v);return}n.bindTexture(e.TEXTURE_3D,w.__webglTexture,e.TEXTURE0+v)}function j(S,v){const w=i.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&w.__version!==S.version){Ce(w,S,v);return}n.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+v)}const Ne={[as]:e.REPEAT,[mn]:e.CLAMP_TO_EDGE,[os]:e.MIRRORED_REPEAT},be={[Pt]:e.NEAREST,[So]:e.NEAREST_MIPMAP_NEAREST,[Mo]:e.NEAREST_MIPMAP_LINEAR,[Ot]:e.LINEAR,[xo]:e.LINEAR_MIPMAP_NEAREST,[ms]:e.LINEAR_MIPMAP_LINEAR},rt={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function De(S,v){if(v.type===1015&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===1006||v.magFilter===1007||v.magFilter===1005||v.magFilter===1008||v.minFilter===1006||v.minFilter===1007||v.minFilter===1005||v.minFilter===1008)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(S,e.TEXTURE_WRAP_S,Ne[v.wrapS]),e.texParameteri(S,e.TEXTURE_WRAP_T,Ne[v.wrapT]),(S===e.TEXTURE_3D||S===e.TEXTURE_2D_ARRAY)&&e.texParameteri(S,e.TEXTURE_WRAP_R,Ne[v.wrapR]),e.texParameteri(S,e.TEXTURE_MAG_FILTER,be[v.magFilter]),e.texParameteri(S,e.TEXTURE_MIN_FILTER,be[v.minFilter]),v.compareFunction&&(e.texParameteri(S,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(S,e.TEXTURE_COMPARE_FUNC,rt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===1003||v.minFilter!==1005&&v.minFilter!==1008||v.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const w=t.get("EXT_texture_filter_anisotropic");e.texParameterf(S,w.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Y(S,v){let w=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",R));const z=v.source;let Q=p.get(z);Q===void 0&&(Q={},p.set(z,Q));const re=H(v);if(re!==S.__cacheKey){Q[re]===void 0&&(Q[re]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,w=!0),Q[re].usedTimes++;const se=Q[S.__cacheKey];se!==void 0&&(Q[S.__cacheKey].usedTimes--,se.usedTimes===0&&W(v)),S.__cacheKey=re,S.__webglTexture=Q[re].texture}return w}function ne(S,v,w){return Math.floor(Math.floor(S/w)/v)}function ae(S,v,w,z){const re=S.updateRanges;if(re.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,v.width,v.height,w,z,v.data);else{re.sort((ve,$)=>ve.start-$.start);let se=0;for(let ve=1;ve<re.length;ve++){const $=re[se],ce=re[ve],xe=$.start+$.count,Ae=ne(ce.start,v.width,4),Be=ne($.start,v.width,4);ce.start<=xe+1&&Ae===Be&&ne(ce.start+ce.count-1,v.width,4)===Ae?$.count=Math.max($.count,ce.start+ce.count-$.start):(++se,re[se]=ce)}re.length=se+1;const C=n.getParameter(e.UNPACK_ROW_LENGTH),ie=n.getParameter(e.UNPACK_SKIP_PIXELS),de=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,v.width);for(let ve=0,$=re.length;ve<$;ve++){const ce=re[ve],xe=Math.floor(ce.start/4),Ae=Math.ceil(ce.count/4),Be=xe%v.width,P=Math.floor(xe/v.width),K=Ae,ee=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,Be),n.pixelStorei(e.UNPACK_SKIP_ROWS,P),n.texSubImage2D(e.TEXTURE_2D,0,Be,P,K,ee,w,z,v.data)}S.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,C),n.pixelStorei(e.UNPACK_SKIP_PIXELS,ie),n.pixelStorei(e.UNPACK_SKIP_ROWS,de)}}function Re(S,v,w){let z=e.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(z=e.TEXTURE_2D_ARRAY),v.isData3DTexture&&(z=e.TEXTURE_3D);const Q=Y(S,v),re=v.source;n.bindTexture(z,S.__webglTexture,e.TEXTURE0+w);const se=i.get(re);if(re.version!==se.__version||Q===!0){if(n.activeTexture(e.TEXTURE0+w),!(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)){const K=ke.getPrimaries(ke.workingColorSpace),ee=v.colorSpace===""?null:ke.getPrimaries(v.colorSpace),pe=v.colorSpace===""||K===ee?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}n.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment);let C=_(v.image,!1,r.maxTextureSize);C=Ve(v,C);const ie=s.convert(v.format,v.colorSpace),de=s.convert(v.type);let ve=E(v.internalFormat,ie,de,v.normalized,v.colorSpace,v.isVideoTexture);De(z,v);let $;const ce=v.mipmaps,xe=v.isVideoTexture!==!0,Ae=se.__version===void 0||Q===!0,Be=re.dataReady,P=b(v,C);if(v.isDepthTexture)ve=T(v.format===ba,v.type),Ae&&(xe?n.texStorage2D(e.TEXTURE_2D,1,ve,C.width,C.height):n.texImage2D(e.TEXTURE_2D,0,ve,C.width,C.height,0,ie,de,null));else if(v.isDataTexture)if(ce.length>0){xe&&Ae&&n.texStorage2D(e.TEXTURE_2D,P,ve,ce[0].width,ce[0].height);for(let K=0,ee=ce.length;K<ee;K++)$=ce[K],xe?Be&&n.texSubImage2D(e.TEXTURE_2D,K,0,0,$.width,$.height,ie,de,$.data):n.texImage2D(e.TEXTURE_2D,K,ve,$.width,$.height,0,ie,de,$.data);v.generateMipmaps=!1}else xe?(Ae&&n.texStorage2D(e.TEXTURE_2D,P,ve,C.width,C.height),Be&&ae(v,C,ie,de)):n.texImage2D(e.TEXTURE_2D,0,ve,C.width,C.height,0,ie,de,C.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){xe&&Ae&&n.texStorage3D(e.TEXTURE_2D_ARRAY,P,ve,ce[0].width,ce[0].height,C.depth);for(let K=0,ee=ce.length;K<ee;K++)if($=ce[K],v.format!==1023)if(ie!==null)if(xe){if(Be)if(v.layerUpdates.size>0){const pe=Ks($.width,$.height,v.format,v.type);for(const _e of v.layerUpdates){const te=$.data.subarray(_e*pe/$.data.BYTES_PER_ELEMENT,(_e+1)*pe/$.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,K,0,0,_e,$.width,$.height,1,ie,te)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,K,0,0,0,$.width,$.height,C.depth,ie,$.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,K,ve,$.width,$.height,C.depth,0,$.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xe?Be&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,K,0,0,0,$.width,$.height,C.depth,ie,de,$.data):n.texImage3D(e.TEXTURE_2D_ARRAY,K,ve,$.width,$.height,C.depth,0,ie,de,$.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{xe&&Ae&&n.texStorage2D(e.TEXTURE_2D,P,ve,ce[0].width,ce[0].height);for(let K=0,ee=ce.length;K<ee;K++)$=ce[K],v.format!==1023?ie!==null?xe?Be&&n.compressedTexSubImage2D(e.TEXTURE_2D,K,0,0,$.width,$.height,ie,$.data):n.compressedTexImage2D(e.TEXTURE_2D,K,ve,$.width,$.height,0,$.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?Be&&n.texSubImage2D(e.TEXTURE_2D,K,0,0,$.width,$.height,ie,de,$.data):n.texImage2D(e.TEXTURE_2D,K,ve,$.width,$.height,0,ie,de,$.data)}else if(v.isDataArrayTexture)if(xe){if(Ae&&n.texStorage3D(e.TEXTURE_2D_ARRAY,P,ve,C.width,C.height,C.depth),Be)if(v.layerUpdates.size>0){const K=Ks(C.width,C.height,v.format,v.type);for(const ee of v.layerUpdates){const pe=C.data.subarray(ee*K/C.data.BYTES_PER_ELEMENT,(ee+1)*K/C.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ee,C.width,C.height,1,ie,de,pe)}v.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,C.width,C.height,C.depth,ie,de,C.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,ve,C.width,C.height,C.depth,0,ie,de,C.data);else if(v.isData3DTexture)xe?(Ae&&n.texStorage3D(e.TEXTURE_3D,P,ve,C.width,C.height,C.depth),Be&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,C.width,C.height,C.depth,ie,de,C.data)):n.texImage3D(e.TEXTURE_3D,0,ve,C.width,C.height,C.depth,0,ie,de,C.data);else if(v.isFramebufferTexture){if(Ae)if(xe)n.texStorage2D(e.TEXTURE_2D,P,ve,C.width,C.height);else{let K=C.width,ee=C.height;for(let pe=0;pe<P;pe++)n.texImage2D(e.TEXTURE_2D,pe,ve,K,ee,0,ie,de,null),K>>=1,ee>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in e){const K=e.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),C.parentNode!==K){K.appendChild(C),f.add(v),K.onpaint=ee=>{const pe=ee.changedElements;for(const _e of f)pe.includes(_e.image)&&(_e.needsUpdate=!0)},K.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,C);else{const pe=e.RGBA,_e=e.RGBA,te=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,pe,_e,te,C)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(ce.length>0){if(xe&&Ae){const K=Ke(ce[0]);n.texStorage2D(e.TEXTURE_2D,P,ve,K.width,K.height)}for(let K=0,ee=ce.length;K<ee;K++)$=ce[K],xe?Be&&n.texSubImage2D(e.TEXTURE_2D,K,0,0,ie,de,$):n.texImage2D(e.TEXTURE_2D,K,ve,ie,de,$);v.generateMipmaps=!1}else if(xe){if(Ae){const K=Ke(C);n.texStorage2D(e.TEXTURE_2D,P,ve,K.width,K.height)}Be&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ie,de,C)}else n.texImage2D(e.TEXTURE_2D,0,ve,ie,de,C);d(v)&&A(z),se.__version=re.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function Ce(S,v,w){if(v.image.length!==6)return;const z=Y(S,v),Q=v.source;n.bindTexture(e.TEXTURE_CUBE_MAP,S.__webglTexture,e.TEXTURE0+w);const re=i.get(Q);if(Q.version!==re.__version||z===!0){n.activeTexture(e.TEXTURE0+w);const se=ke.getPrimaries(ke.workingColorSpace),C=v.colorSpace===""?null:ke.getPrimaries(v.colorSpace),ie=v.colorSpace===""||se===C?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const de=v.isCompressedTexture||v.image[0].isCompressedTexture,ve=v.image[0]&&v.image[0].isDataTexture,$=[];for(let te=0;te<6;te++)!de&&!ve?$[te]=_(v.image[te],!0,r.maxCubemapSize):$[te]=ve?v.image[te].image:v.image[te],$[te]=Ve(v,$[te]);const ce=$[0],xe=s.convert(v.format,v.colorSpace),Ae=s.convert(v.type),Be=E(v.internalFormat,xe,Ae,v.normalized,v.colorSpace),P=v.isVideoTexture!==!0,K=re.__version===void 0||z===!0,ee=Q.dataReady;let pe=b(v,ce);De(e.TEXTURE_CUBE_MAP,v);let _e;if(de){P&&K&&n.texStorage2D(e.TEXTURE_CUBE_MAP,pe,Be,ce.width,ce.height);for(let te=0;te<6;te++){_e=$[te].mipmaps;for(let ue=0;ue<_e.length;ue++){const we=_e[ue];v.format!==1023?xe!==null?P?ee&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue,0,0,we.width,we.height,xe,we.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue,Be,we.width,we.height,0,we.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?ee&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue,0,0,we.width,we.height,xe,Ae,we.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue,Be,we.width,we.height,0,xe,Ae,we.data)}}}else{if(_e=v.mipmaps,P&&K){_e.length>0&&pe++;const te=Ke($[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,pe,Be,te.width,te.height)}for(let te=0;te<6;te++)if(ve){P?ee&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,$[te].width,$[te].height,xe,Ae,$[te].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Be,$[te].width,$[te].height,0,xe,Ae,$[te].data);for(let ue=0;ue<_e.length;ue++){const we=_e[ue].image[te].image;P?ee&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue+1,0,0,we.width,we.height,xe,Ae,we.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue+1,Be,we.width,we.height,0,xe,Ae,we.data)}}else{P?ee&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,xe,Ae,$[te]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Be,xe,Ae,$[te]);for(let ue=0;ue<_e.length;ue++){const we=_e[ue];P?ee&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue+1,0,0,xe,Ae,we.image[te]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue+1,Be,xe,Ae,we.image[te])}}}d(v)&&A(e.TEXTURE_CUBE_MAP),re.__version=Q.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function fe(S,v,w,z,Q,re){const se=s.convert(w.format,w.colorSpace),C=s.convert(w.type),ie=E(w.internalFormat,se,C,w.normalized,w.colorSpace),de=i.get(v),ve=i.get(w);if(ve.__renderTarget=v,!de.__hasExternalTextures){const $=Math.max(1,v.width>>re),ce=Math.max(1,v.height>>re);Q===e.TEXTURE_3D||Q===e.TEXTURE_2D_ARRAY?n.texImage3D(Q,re,ie,$,ce,v.depth,0,se,C,null):n.texImage2D(Q,re,ie,$,ce,0,se,C,null)}n.bindFramebuffer(e.FRAMEBUFFER,S),L(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,z,Q,ve.__webglTexture,0,ut(v)):(Q===e.TEXTURE_2D||Q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,z,Q,ve.__webglTexture,re),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Qe(S,v,w){if(e.bindRenderbuffer(e.RENDERBUFFER,S),v.depthBuffer){const z=v.depthTexture,Q=z&&z.isDepthTexture?z.type:null,re=T(v.stencilBuffer,Q),se=v.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;L(v)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ut(v),re,v.width,v.height):w?e.renderbufferStorageMultisample(e.RENDERBUFFER,ut(v),re,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,re,v.width,v.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,se,e.RENDERBUFFER,S)}else{const z=v.textures;for(let Q=0;Q<z.length;Q++){const re=z[Q],se=s.convert(re.format,re.colorSpace),C=s.convert(re.type),ie=E(re.internalFormat,se,C,re.normalized,re.colorSpace);L(v)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ut(v),ie,v.width,v.height):w?e.renderbufferStorageMultisample(e.RENDERBUFFER,ut(v),ie,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,ie,v.width,v.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ye(S,v,w){const z=v.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(v.depthTexture);if(Q.__renderTarget=v,(!Q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),z){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,v.depthTexture.addEventListener("dispose",R)),Q.__webglTexture===void 0){Q.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,Q.__webglTexture),De(e.TEXTURE_CUBE_MAP,v.depthTexture);const de=s.convert(v.depthTexture.format),ve=s.convert(v.depthTexture.type);let $;v.depthTexture.format===1026?$=e.DEPTH_COMPONENT24:v.depthTexture.format===1027&&($=e.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,$,v.width,v.height,0,de,ve,null)}}else le(v.depthTexture,0);const re=Q.__webglTexture,se=ut(v),C=z?e.TEXTURE_CUBE_MAP_POSITIVE_X+w:e.TEXTURE_2D,ie=v.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(v.depthTexture.format===1026)L(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ie,C,re,0,se):e.framebufferTexture2D(e.FRAMEBUFFER,ie,C,re,0);else if(v.depthTexture.format===1027)L(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ie,C,re,0,se):e.framebufferTexture2D(e.FRAMEBUFFER,ie,C,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ue(S){const v=i.get(S),w=S.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==S.depthTexture){const z=S.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),z){const Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,z.removeEventListener("dispose",Q)};z.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=z}if(S.depthTexture&&!v.__autoAllocateDepthBuffer)if(w)for(let z=0;z<6;z++)Ye(v.__webglFramebuffer[z],S,z);else{const z=S.texture.mipmaps;z&&z.length>0?Ye(v.__webglFramebuffer[0],S,0):Ye(v.__webglFramebuffer,S,0)}else if(w){v.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(n.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer[z]),v.__webglDepthbuffer[z]===void 0)v.__webglDepthbuffer[z]=e.createRenderbuffer(),Qe(v.__webglDepthbuffer[z],S,!1);else{const Q=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,re=v.__webglDepthbuffer[z];e.bindRenderbuffer(e.RENDERBUFFER,re),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,re)}}else{const z=S.texture.mipmaps;if(z&&z.length>0?n.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=e.createRenderbuffer(),Qe(v.__webglDepthbuffer,S,!1);else{const Q=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,re=v.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,re),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,re)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ot(S,v,w){const z=i.get(S);v!==void 0&&fe(z.__webglFramebuffer,S,S.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),w!==void 0&&Ue(S)}function xt(S){const v=S.texture,w=i.get(S),z=i.get(v);S.addEventListener("dispose",m);const Q=S.textures,re=S.isWebGLCubeRenderTarget===!0,se=Q.length>1;if(se||(z.__webglTexture===void 0&&(z.__webglTexture=e.createTexture()),z.__version=v.version,a.memory.textures++),re){w.__webglFramebuffer=[];for(let C=0;C<6;C++)if(v.mipmaps&&v.mipmaps.length>0){w.__webglFramebuffer[C]=[];for(let ie=0;ie<v.mipmaps.length;ie++)w.__webglFramebuffer[C][ie]=e.createFramebuffer()}else w.__webglFramebuffer[C]=e.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){w.__webglFramebuffer=[];for(let C=0;C<v.mipmaps.length;C++)w.__webglFramebuffer[C]=e.createFramebuffer()}else w.__webglFramebuffer=e.createFramebuffer();if(se)for(let C=0,ie=Q.length;C<ie;C++){const de=i.get(Q[C]);de.__webglTexture===void 0&&(de.__webglTexture=e.createTexture(),a.memory.textures++)}if(S.samples>0&&L(S)===!1){w.__webglMultisampledFramebuffer=e.createFramebuffer(),w.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,w.__webglMultisampledFramebuffer);for(let C=0;C<Q.length;C++){const ie=Q[C];w.__webglColorRenderbuffer[C]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,w.__webglColorRenderbuffer[C]);const de=s.convert(ie.format,ie.colorSpace),ve=s.convert(ie.type),$=E(ie.internalFormat,de,ve,ie.normalized,ie.colorSpace,S.isXRRenderTarget===!0),ce=ut(S);e.renderbufferStorageMultisample(e.RENDERBUFFER,ce,$,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+C,e.RENDERBUFFER,w.__webglColorRenderbuffer[C])}e.bindRenderbuffer(e.RENDERBUFFER,null),S.depthBuffer&&(w.__webglDepthRenderbuffer=e.createRenderbuffer(),Qe(w.__webglDepthRenderbuffer,S,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(re){n.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture),De(e.TEXTURE_CUBE_MAP,v);for(let C=0;C<6;C++)if(v.mipmaps&&v.mipmaps.length>0)for(let ie=0;ie<v.mipmaps.length;ie++)fe(w.__webglFramebuffer[C][ie],S,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+C,ie);else fe(w.__webglFramebuffer[C],S,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+C,0);d(v)&&A(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(se){for(let C=0,ie=Q.length;C<ie;C++){const de=Q[C],ve=i.get(de);let $=e.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&($=S.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture($,ve.__webglTexture),De($,de),fe(w.__webglFramebuffer,S,de,e.COLOR_ATTACHMENT0+C,$,0),d(de)&&A($)}n.unbindTexture()}else{let C=e.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(C=S.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(C,z.__webglTexture),De(C,v),v.mipmaps&&v.mipmaps.length>0)for(let ie=0;ie<v.mipmaps.length;ie++)fe(w.__webglFramebuffer[ie],S,v,e.COLOR_ATTACHMENT0,C,ie);else fe(w.__webglFramebuffer,S,v,e.COLOR_ATTACHMENT0,C,0);d(v)&&A(C),n.unbindTexture()}S.depthBuffer&&Ue(S)}function Tt(S){const v=S.textures;for(let w=0,z=v.length;w<z;w++){const Q=v[w];if(d(Q)){const re=U(S),se=i.get(Q).__webglTexture;n.bindTexture(re,se),A(re),n.unbindTexture()}}}const st=[],yt=[];function ht(S){if(S.samples>0){if(L(S)===!1){const v=S.textures,w=S.width,z=S.height;let Q=e.COLOR_BUFFER_BIT;const re=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,se=i.get(S),C=v.length>1;if(C)for(let de=0;de<v.length;de++)n.bindFramebuffer(e.FRAMEBUFFER,se.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+de,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,se.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+de,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);const ie=S.texture.mipmaps;ie&&ie.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let de=0;de<v.length;de++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Q|=e.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Q|=e.STENCIL_BUFFER_BIT)),C){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,se.__webglColorRenderbuffer[de]);const ve=i.get(v[de]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ve,0)}e.blitFramebuffer(0,0,w,z,0,0,w,z,Q,e.NEAREST),c===!0&&(st.length=0,yt.length=0,st.push(e.COLOR_ATTACHMENT0+de),S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&(st.push(re),yt.push(re),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,yt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,st))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),C)for(let de=0;de<v.length;de++){n.bindFramebuffer(e.FRAMEBUFFER,se.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+de,e.RENDERBUFFER,se.__webglColorRenderbuffer[de]);const ve=i.get(v[de]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,se.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+de,e.TEXTURE_2D,ve,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&c){const v=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[v])}}}function ut(S){return Math.min(r.maxSamples,S.samples)}function L(S){const v=i.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ye(S){const v=a.render.frame;u.get(S)!==v&&(u.set(S,v),S.update())}function Ve(S,v){const w=S.colorSpace,z=S.format,Q=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||w!=="srgb-linear"&&w!==""&&(ke.getTransfer(w)==="srgb"?(z!==1023||Q!==1009)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ie("WebGLTextures: Unsupported texture color space:",w)),v}function Ke(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=Z,this.getTextureUnits=N,this.setTextureUnits=B,this.setTexture2D=le,this.setTexture2DArray=q,this.setTexture3D=J,this.setTextureCube=j,this.rebindTextures=ot,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=L,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Pu(e,t){function n(i,r=""){let s;const a=ke.getTransfer(r);if(i===1009)return e.UNSIGNED_BYTE;if(i===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(i===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(i===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===1010)return e.BYTE;if(i===1011)return e.SHORT;if(i===1012)return e.UNSIGNED_SHORT;if(i===1013)return e.INT;if(i===1014)return e.UNSIGNED_INT;if(i===1015)return e.FLOAT;if(i===1016)return e.HALF_FLOAT;if(i===1021)return e.ALPHA;if(i===1022)return e.RGB;if(i===1023)return e.RGBA;if(i===1026)return e.DEPTH_COMPONENT;if(i===1027)return e.DEPTH_STENCIL;if(i===1028)return e.RED;if(i===1029)return e.RED_INTEGER;if(i===1030)return e.RG;if(i===1031)return e.RG_INTEGER;if(i===1033)return e.RGBA_INTEGER;if(i===33776||i===33777||i===33778||i===33779)if(a==="srgb")if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===35840||i===35841||i===35842||i===35843)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===36196||i===37492||i===37496||i===37488||i===37489||i===37490||i===37491)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===36196||i===37492)return a==="srgb"?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===37496)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===37488)return s.COMPRESSED_R11_EAC;if(i===37489)return s.COMPRESSED_SIGNED_R11_EAC;if(i===37490)return s.COMPRESSED_RG11_EAC;if(i===37491)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===37808||i===37809||i===37810||i===37811||i===37812||i===37813||i===37814||i===37815||i===37816||i===37817||i===37818||i===37819||i===37820||i===37821)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===37808)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===37809)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===37810)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===37811)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===37812)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===37813)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===37814)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===37815)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===37816)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===37817)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===37818)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===37819)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===37820)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===37821)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===36492||i===36494||i===36495)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===36492)return a==="srgb"?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===36283||i===36284||i===36285||i===36286)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===36283)return s.COMPRESSED_RED_RGTC1_EXT;if(i===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===1020?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var Lu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Iu=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Uu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new qa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new sn({vertexShader:Lu,fragmentShader:Iu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gn(new Ka(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Du=class extends Gn{constructor(e,t){super();const n=this;let i=null,r=1,s=null,a="local-floor",o=1,c=null,l=null,u=null,f=null,h=null,p=null;const M=typeof XRWebGLBinding<"u",x=new Uu,_={},d=t.getContextAttributes();let A=null,U=null;const E=[],T=[],b=new et;let R=null,m=null;const y=new kt;y.viewport=new _t;const W=new kt;W.viewport=new _t;const D=[y,W],O=new dc;let Z=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ne=E[Y];return ne===void 0&&(ne=new Br,E[Y]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Y){let ne=E[Y];return ne===void 0&&(ne=new Br,E[Y]=ne),ne.getGripSpace()},this.getHand=function(Y){let ne=E[Y];return ne===void 0&&(ne=new Br,E[Y]=ne),ne.getHandSpace()};function B(Y){const ne=T.indexOf(Y.inputSource);if(ne===-1)return;const ae=E[ne];ae!==void 0&&(ae.update(Y.inputSource,Y.frame,c||s),ae.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",H);for(let Y=0;Y<E.length;Y++){const ne=T[Y];ne!==null&&(T[Y]=null,E[Y].disconnect(ne))}Z=null,N=null,x.reset();for(const Y in _)delete _[Y];if(e.setRenderTarget(A),h=null,f=null,u=null,i=null,U=null,De.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(b.width,b.height,!1),m!==null){const Y=m.camera;Y.fov=m.fov,Y.zoom=m.zoom,Y.updateProjectionMatrix(),m=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(A=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",X),i.addEventListener("inputsourceschange",H),d.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(b),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,ae=null,Re=null;d.depth&&(Re=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=d.stencil?ba:Di,ae=d.stencil?Ta:zn);const Ce={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ce),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),U=new Jt(f.textureWidth,f.textureHeight,{format:Ui,type:Vn,depthTexture:new Oi(f.textureWidth,f.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const ne={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(i,t,ne),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),U=new Jt(h.framebufferWidth,h.framebufferHeight,{format:Ui,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(o),c=null,s=await i.requestReferenceSpace(a),De.setContext(i),De.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H(Y){for(let ne=0;ne<Y.removed.length;ne++){const ae=Y.removed[ne],Re=T.indexOf(ae);Re>=0&&(T[Re]=null,E[Re].disconnect(ae))}for(let ne=0;ne<Y.added.length;ne++){const ae=Y.added[ne];let Re=T.indexOf(ae);if(Re===-1){for(let fe=0;fe<E.length;fe++)if(fe>=T.length){T.push(ae),Re=fe;break}else if(T[fe]===null){T[fe]=ae,Re=fe;break}if(Re===-1)break}const Ce=E[Re];Ce&&Ce.connect(ae)}}const le=new G,q=new G;function J(Y,ne,ae){le.setFromMatrixPosition(ne.matrixWorld),q.setFromMatrixPosition(ae.matrixWorld);const Re=le.distanceTo(q),Ce=ne.projectionMatrix.elements,fe=ae.projectionMatrix.elements,Qe=Ce[14]/(Ce[10]-1),Ye=Ce[14]/(Ce[10]+1),Ue=(Ce[9]+1)/Ce[5],ot=(Ce[9]-1)/Ce[5],xt=(Ce[8]-1)/Ce[0],Tt=(fe[8]+1)/fe[0],st=Qe*xt,yt=Qe*Tt,ht=Re/(-xt+Tt),ut=ht*-xt;if(ne.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ut),Y.translateZ(ht),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ce[10]===-1)Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const L=Qe+ht,ye=Ye+ht,Ve=st-ut,Ke=yt+(Re-ut),S=Ue*Ye/ye*L,v=ot*Ye/ye*L;Y.projectionMatrix.makePerspective(Ve,Ke,S,v,L,ye),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function j(Y,ne){ne===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ne.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let ne=Y.near,ae=Y.far;x.texture!==null&&(x.depthNear>0&&(ne=x.depthNear),x.depthFar>0&&(ae=x.depthFar)),O.near=W.near=y.near=ne,O.far=W.far=y.far=ae,(Z!==O.near||N!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),Z=O.near,N=O.far),O.layers.mask=Y.layers.mask|6,y.layers.mask=O.layers.mask&-5,W.layers.mask=O.layers.mask&-3;const Re=Y.parent,Ce=O.cameras;j(O,Re);for(let fe=0;fe<Ce.length;fe++)j(Ce[fe],Re);Ce.length===2?J(O,y,W):O.projectionMatrix.copy(y.projectionMatrix),m===null&&Y.isPerspectiveCamera&&(m={camera:Y,fov:Y.fov,zoom:Y.zoom}),Ne(Y,O,Re)};function Ne(Y,ne,ae){ae===null?Y.matrix.copy(ne.matrixWorld):(Y.matrix.copy(ae.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ne.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=hs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&h===null))return o},this.setFoveation=function(Y){o=Y,f!==null&&(f.fixedFoveation=Y),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(O)},this.getCameraTexture=function(Y){return _[Y]};let be=null;function rt(Y,ne){if(l=ne.getViewerPose(c||s),p=ne,l!==null){const ae=l.views;h!==null&&(e.setRenderTargetFramebuffer(U,h.framebuffer),e.setRenderTarget(U));let Re=!1;ae.length!==O.cameras.length&&(O.cameras.length=0,Re=!0);for(let fe=0;fe<ae.length;fe++){const Qe=ae[fe];let Ye=null;if(h!==null)Ye=h.getViewport(Qe);else{const ot=u.getViewSubImage(f,Qe);Ye=ot.viewport,fe===0&&(e.setRenderTargetTextures(U,ot.colorTexture,ot.depthStencilTexture),e.setRenderTarget(U))}let Ue=D[fe];Ue===void 0&&(Ue=new kt,Ue.layers.enable(fe),Ue.viewport=new _t,D[fe]=Ue),Ue.matrix.fromArray(Qe.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(Qe.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),fe===0&&(O.matrix.copy(Ue.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Re===!0&&O.cameras.push(Ue)}const Ce=i.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&M){u=n.getBinding();const fe=u.getDepthInformation(ae[0]);fe&&fe.isValid&&fe.texture&&x.init(fe,i.renderState)}if(Ce&&Ce.includes("camera-access")&&M){e.state.unbindTexture(),u=n.getBinding();for(let fe=0;fe<ae.length;fe++){const Qe=ae[fe].camera;if(Qe){let Ye=_[Qe];Ye||(Ye=new qa,_[Qe]=Ye);const Ue=u.getCameraImage(Qe);Ye.sourceTexture=Ue}}}}for(let ae=0;ae<E.length;ae++){const Re=T[ae],Ce=E[ae];Re!==null&&Ce!==void 0&&Ce.update(Re,ne,c||s)}be&&be(Y,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),p=null}const De=new no;De.setAnimationLoop(rt),this.setAnimationLoop=function(Y){be=Y},this.dispose=function(){}}},Nu=new gt,co=new Fe;co.set(-1,0,0,0,1,0,0,0,1);function Ou(e,t){function n(_,d){_.matrixAutoUpdate===!0&&_.updateMatrix(),d.value.copy(_.matrix)}function i(_,d){d.color.getRGB(_.fogColor.value,Ja(e)),d.isFog?(_.fogNear.value=d.near,_.fogFar.value=d.far):d.isFogExp2&&(_.fogDensity.value=d.density)}function r(_,d,A,U,E){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(_,d):d.isMeshLambertMaterial?(s(_,d),d.envMap&&(_.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(_,d),f(_,d)):d.isMeshPhongMaterial?(s(_,d),u(_,d),d.envMap&&(_.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(_,d),h(_,d),d.isMeshPhysicalMaterial&&p(_,d,E)):d.isMeshMatcapMaterial?(s(_,d),M(_,d)):d.isMeshDepthMaterial?s(_,d):d.isMeshDistanceMaterial?(s(_,d),x(_,d)):d.isMeshNormalMaterial?s(_,d):d.isLineBasicMaterial?(a(_,d),d.isLineDashedMaterial&&o(_,d)):d.isPointsMaterial?c(_,d,A,U):d.isSpriteMaterial?l(_,d):d.isShadowMaterial?(_.color.value.copy(d.color),_.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(_,d){_.opacity.value=d.opacity,d.color&&_.diffuse.value.copy(d.color),d.emissive&&_.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(_.map.value=d.map,n(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,n(d.alphaMap,_.alphaMapTransform)),d.bumpMap&&(_.bumpMap.value=d.bumpMap,n(d.bumpMap,_.bumpMapTransform),_.bumpScale.value=d.bumpScale,d.side===1&&(_.bumpScale.value*=-1)),d.normalMap&&(_.normalMap.value=d.normalMap,n(d.normalMap,_.normalMapTransform),_.normalScale.value.copy(d.normalScale),d.side===1&&_.normalScale.value.negate()),d.displacementMap&&(_.displacementMap.value=d.displacementMap,n(d.displacementMap,_.displacementMapTransform),_.displacementScale.value=d.displacementScale,_.displacementBias.value=d.displacementBias),d.emissiveMap&&(_.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,_.emissiveMapTransform)),d.specularMap&&(_.specularMap.value=d.specularMap,n(d.specularMap,_.specularMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest);const A=t.get(d),U=A.envMap,E=A.envMapRotation;U&&(_.envMap.value=U,_.envMapRotation.value.setFromMatrix4(Nu.makeRotationFromEuler(E)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(co),_.reflectivity.value=d.reflectivity,_.ior.value=d.ior,_.refractionRatio.value=d.refractionRatio),d.lightMap&&(_.lightMap.value=d.lightMap,_.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,_.lightMapTransform)),d.aoMap&&(_.aoMap.value=d.aoMap,_.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,_.aoMapTransform))}function a(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,d.map&&(_.map.value=d.map,n(d.map,_.mapTransform))}function o(_,d){_.dashSize.value=d.dashSize,_.totalSize.value=d.dashSize+d.gapSize,_.scale.value=d.scale}function c(_,d,A,U){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.size.value=d.size*A,_.scale.value=U*.5,d.map&&(_.map.value=d.map,n(d.map,_.uvTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,n(d.alphaMap,_.alphaMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function l(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.rotation.value=d.rotation,d.map&&(_.map.value=d.map,n(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,n(d.alphaMap,_.alphaMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function u(_,d){_.specular.value.copy(d.specular),_.shininess.value=Math.max(d.shininess,1e-4)}function f(_,d){d.gradientMap&&(_.gradientMap.value=d.gradientMap)}function h(_,d){_.metalness.value=d.metalness,d.metalnessMap&&(_.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,_.metalnessMapTransform)),_.roughness.value=d.roughness,d.roughnessMap&&(_.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,_.roughnessMapTransform)),d.envMap&&(_.envMapIntensity.value=d.envMapIntensity)}function p(_,d,A){_.ior.value=d.ior,d.sheen>0&&(_.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),_.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(_.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,_.sheenColorMapTransform)),d.sheenRoughnessMap&&(_.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,_.sheenRoughnessMapTransform))),d.clearcoat>0&&(_.clearcoat.value=d.clearcoat,_.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(_.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,_.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(_.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===1&&_.clearcoatNormalScale.value.negate())),d.dispersion>0&&(_.dispersion.value=d.dispersion),d.retroreflectivity>0&&(_.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(_.iridescence.value=d.iridescence,_.iridescenceIOR.value=d.iridescenceIOR,_.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(_.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,_.iridescenceMapTransform)),d.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),d.transmission>0&&(_.transmission.value=d.transmission,_.transmissionSamplerMap.value=A.texture,_.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(_.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,_.transmissionMapTransform)),_.thickness.value=d.thickness,d.thicknessMap&&(_.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=d.attenuationDistance,_.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(_.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(_.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=d.specularIntensity,_.specularColor.value.copy(d.specularColor),d.specularColorMap&&(_.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,_.specularColorMapTransform)),d.specularIntensityMap&&(_.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,_.specularIntensityMapTransform))}function M(_,d){d.matcap&&(_.matcap.value=d.matcap)}function x(_,d){const A=t.get(d).light;_.referencePosition.value.setFromMatrixPosition(A.matrixWorld),_.nearDistance.value=A.shadow.camera.near,_.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Fu(e,t,n,i){let r={},s={},a=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,T){const b=T.program;i.uniformBlockBinding(E,b)}function l(E,T){let b=r[E.id];b===void 0&&(_(E),b=u(E),r[E.id]=b,E.addEventListener("dispose",A));const R=T.program;i.updateUBOMapping(E,R);const m=t.render.frame;s[E.id]!==m&&(h(E),s[E.id]=m)}function u(E){const T=f();E.__bindingPointIndex=T;const b=e.createBuffer(),R=E.__size,m=E.usage;return e.bindBuffer(e.UNIFORM_BUFFER,b),e.bufferData(e.UNIFORM_BUFFER,R,m),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,b),b}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return Ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const T=r[E.id],b=E.uniforms,R=E.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let m=0,y=b.length;m<y;m++){const W=b[m];if(Array.isArray(W))for(let D=0,O=W.length;D<O;D++)p(W[D],m,D,R);else p(W,m,0,R)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(E,T,b,R){if(x(E,T,b,R)===!0){const m=E.__offset,y=E.value;if(Array.isArray(y)){let W=0;for(let D=0;D<y.length;D++){const O=y[D],Z=d(O);M(O,E.__data,W),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(W+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(y,E.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,m,E.__data)}}function M(E,T,b){typeof E=="number"||typeof E=="boolean"?T[0]=E:E.isMatrix3?(T[0]=E.elements[0],T[1]=E.elements[1],T[2]=E.elements[2],T[3]=0,T[4]=E.elements[3],T[5]=E.elements[4],T[6]=E.elements[5],T[7]=0,T[8]=E.elements[6],T[9]=E.elements[7],T[10]=E.elements[8],T[11]=0):ArrayBuffer.isView(E)?T.set(new E.constructor(E.buffer,E.byteOffset,T.length)):E.toArray(T,b)}function x(E,T,b,R){const m=E.value,y=T+"_"+b;if(R[y]===void 0)return typeof m=="number"||typeof m=="boolean"?R[y]=m:ArrayBuffer.isView(m)?R[y]=m.slice():R[y]=m.clone(),!0;{const W=R[y];if(typeof m=="number"||typeof m=="boolean"){if(W!==m)return R[y]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(W.equals(m)===!1)return W.copy(m),!0}}return!1}function _(E){const T=E.uniforms;let b=0;const R=16;for(let y=0,W=T.length;y<W;y++){const D=Array.isArray(T[y])?T[y]:[T[y]];for(let O=0,Z=D.length;O<Z;O++){const N=D[O],B=Array.isArray(N.value)?N.value:[N.value];for(let X=0,H=B.length;X<H;X++){const le=B[X],q=d(le),J=b%R,j=J%q.boundary,Ne=J+j;b+=j,Ne!==0&&R-Ne<q.storage&&(b+=R-Ne),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=q.storage}}}const m=b%R;return m>0&&(b+=R-m),E.__size=b,E.__cache={},this}function d(E){const T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(T.boundary=16,T.storage=E.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",E),T}function A(E){const T=E.target;T.removeEventListener("dispose",A);const b=a.indexOf(T.__bindingPointIndex);a.splice(b,1),e.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function U(){for(const E in r)e.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:c,update:l,dispose:U}}var Bu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),tn=null;function Vu(){return tn===null&&(tn=new Gl(Bu,16,16,Mr,wn),tn.name="DFG_LUT",tn.minFilter=Ot,tn.magFilter=Ot,tn.wrapS=mn,tn.wrapT=mn,tn.generateMipmaps=!1,tn.needsUpdate=!0),tn}var zu=class{constructor(e={}){const{canvas:t=vl(),context:n=null,depth:i=!0,stencil:r=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:c=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:h=Vn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=s;const M=h,x=new Set([wa,Ra,Aa]),_=new Set([Vn,zn,xa,Ta,Ea,ya]),d=new Uint32Array(4),A=new Int32Array(4),U=new G;let E=null,T=null;const b=[],R=[];let m=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let W=!1,D=null,O=null,Z=null,N=null;this._outputColorSpace=Zt;let B=0,X=0,H=null,le=-1,q=null;const J=new _t,j=new _t;let Ne=null;const be=new $e(0);let rt=0,De=t.width,Y=t.height,ne=1,ae=null,Re=null;const Ce=new _t(0,0,De,Y),fe=new _t(0,0,De,Y);let Qe=!1;const Ye=new ka;let Ue=!1,ot=!1;const xt=new gt,Tt=new G,st=new _t,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function ut(){return H===null?ne:1}let L=n;function ye(g,I){return t.getContext(g,I)}let Ve,Ke,S,v,w,z,Q,re,se,C,ie,de,ve,$,ce,xe,Ae,Be,P,K,ee,pe,_e;try{const g={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r186"),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",lt,!1),t.addEventListener("webglcontextcreationerror",Xe,!1),L===null){const I="webgl2";if(L=ye(I,g),L===null)throw ye(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}te()}catch(g){throw t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",Xe,!1),Ie("WebGLRenderer: "+g.message),g}function te(){Ve=new Vc(L),Ve.init(),ee=new Pu(L,Ve),Ke=new Cc(L,Ve,e,ee),S=new wu(L,Ve),Ke.reversedDepthBuffer&&f&&S.buffers.depth.setReversed(!0),O=L.createFramebuffer(),Z=L.createFramebuffer(),N=L.createFramebuffer(),v=new Hc(L),w=new pu,z=new Cu(L,Ve,S,w,Ke,ee,v),Q=new Bc(y),re=new Tc(L),pe=new Rc(L,re),se=new zc(L,re,v,pe),C=new Wc(L,se,re,pe,v),Be=new kc(L,Ke,z),ce=new Pc(w),ie=new fu(y,Q,Ve,Ke,pe,ce),de=new Ou(y,w),ve=new vu,$=new Eu(Ve),Ae=new Ac(y,Q,S,C,p,o),xe=new Ru(y,C,Ke),_e=new Fu(L,v,Ke,S),P=new wc(L,Ve,v),K=new Gc(L,Ve,v),v.programs=ie.programs,y.capabilities=Ke,y.extensions=Ve,y.properties=w,y.renderLists=ve,y.shadowMap=xe,y.state=S,y.info=v}M!==1009&&(m=new qc(M,t.width,t.height,a,i,r));const ue=new Du(y,L);this.xr=ue,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const g=Ve.get("WEBGL_lose_context");g&&g.loseContext()},this.forceContextRestore=function(){const g=Ve.get("WEBGL_lose_context");g&&g.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(g){g!==void 0&&(ne=g,this.setSize(De,Y,!1))},this.getSize=function(g){return g.set(De,Y)},this.setSize=function(g,I,k=!0){if(ue.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}De=g,Y=I,t.width=Math.floor(g*ne),t.height=Math.floor(I*ne),k===!0&&(t.style.width=g+"px",t.style.height=I+"px"),m!==null&&m.setSize(t.width,t.height),this.setViewport(0,0,g,I)},this.getDrawingBufferSize=function(g){return g.set(De*ne,Y*ne).floor()},this.setDrawingBufferSize=function(g,I,k){De=g,Y=I,ne=k,t.width=Math.floor(g*k),t.height=Math.floor(I*k),this.setViewport(0,0,g,I)},this.setEffects=function(g){if(M===1009){Ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(g){for(let I=0;I<g.length;I++)if(g[I].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}m.setEffects(g||[])},this.getCurrentViewport=function(g){return g.copy(J)},this.getViewport=function(g){return g.copy(Ce)},this.setViewport=function(g,I,k,V){g.isVector4?Ce.set(g.x,g.y,g.z,g.w):Ce.set(g,I,k,V),S.viewport(J.copy(Ce).multiplyScalar(ne).round())},this.getScissor=function(g){return g.copy(fe)},this.setScissor=function(g,I,k,V){g.isVector4?fe.set(g.x,g.y,g.z,g.w):fe.set(g,I,k,V),S.scissor(j.copy(fe).multiplyScalar(ne).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(g){S.setScissorTest(Qe=g)},this.setOpaqueSort=function(g){ae=g},this.setTransparentSort=function(g){Re=g},this.getClearColor=function(g){return g.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(g=!0,I=!0,k=!0){let V=0;if(g){let F=!1;if(H!==null){const oe=H.texture.format;F=x.has(oe)}if(F){const oe=H.texture.type,me=_.has(oe),ge=Ae.getClearColor(),Me=Ae.getClearAlpha(),Pe=ge.r,Ge=ge.g,He=ge.b;me?(d[0]=Pe,d[1]=Ge,d[2]=He,d[3]=Me,L.clearBufferuiv(L.COLOR,0,d)):(A[0]=Pe,A[1]=Ge,A[2]=He,A[3]=Me,L.clearBufferiv(L.COLOR,0,A))}else V|=L.COLOR_BUFFER_BIT}I&&(V|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),k&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(g){g.setRenderer(this),D=g},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",Xe,!1),Ae.dispose(),ve.dispose(),$.dispose(),w.dispose(),Q.dispose(),C.dispose(),pe.dispose(),_e.dispose(),ie.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Si),ue.removeEventListener("sessionend",Wi),ln.stop()};function we(g){g.preventDefault(),Rs("WebGLRenderer: Context Lost."),W=!0}function lt(){Rs("WebGLRenderer: Context Restored."),W=!1;const g=v.autoReset,I=xe.enabled,k=xe.autoUpdate,V=xe.needsUpdate,F=xe.type;te(),v.autoReset=g,xe.enabled=I,xe.autoUpdate=k,xe.needsUpdate=V,xe.type=F}function Xe(g){Ie("WebGLRenderer: A WebGL context could not be created. Reason: ",g.statusMessage)}function Ft(g){const I=g.target;I.removeEventListener("dispose",Ft),Wt(I)}function Wt(g){ki(g),w.remove(g)}function ki(g){const I=w.get(g).programs;I!==void 0&&(I.forEach(function(k){ie.releaseProgram(k)}),g.isShaderMaterial&&ie.releaseShaderCache(g))}this.renderBufferDirect=function(g,I,k,V,F,oe){I===null&&(I=yt);const me=F.isMesh&&F.matrixWorld.determinantAffine()<0,ge=uo(g,I,k,V,F);S.setMaterial(V,me);let Me=k.index,Pe=1;if(V.wireframe===!0){if(Me=se.getWireframeAttribute(k),Me===void 0)return;Pe=2}const Ge=k.drawRange,He=k.attributes.position;let Te=Ge.start*Pe,tt=(Ge.start+Ge.count)*Pe;oe!==null&&(Te=Math.max(Te,oe.start*Pe),tt=Math.min(tt,(oe.start+oe.count)*Pe)),Me!==null?(Te=Math.max(Te,0),tt=Math.min(tt,Me.count)):He!=null&&(Te=Math.max(Te,0),tt=Math.min(tt,He.count));const dt=tt-Te;if(dt<0||dt===1/0)return;pe.setup(F,V,ge,k,Me);let at,Ze=P;if(Me!==null&&(at=re.get(Me),Ze=K,Ze.setIndex(at)),F.isMesh)V.wireframe===!0?(S.setLineWidth(V.wireframeLinewidth*ut()),Ze.setMode(L.LINES)):Ze.setMode(L.TRIANGLES);else if(F.isLine){let bt=V.linewidth;bt===void 0&&(bt=1),S.setLineWidth(bt*ut()),F.isLineSegments?Ze.setMode(L.LINES):F.isLineLoop?Ze.setMode(L.LINE_LOOP):Ze.setMode(L.LINE_STRIP)}else F.isPoints?Ze.setMode(L.POINTS):F.isSprite&&Ze.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(Ve.get("WEBGL_multi_draw"))Ze.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const bt=F._multiDrawStarts,Ee=F._multiDrawCounts,Ut=F._multiDrawCount,Je=Me?re.get(Me).bytesPerElement:1,zt=w.get(V).currentProgram.getUniforms();for(let jt=0;jt<Ut;jt++)zt.setValue(L,"_gl_DrawID",jt),Ze.render(bt[jt]/Je,Ee[jt])}else if(F.isInstancedMesh)Ze.renderInstances(Te,dt,F.count);else if(k.isInstancedBufferGeometry){const bt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ee=Math.min(k.instanceCount,bt);Ze.renderInstances(Te,dt,Ee)}else Ze.render(Te,dt)};function Bt(g,I,k,V){D!==null&&g.isNodeMaterial&&D.setObject(V,g),Ue===!0&&ce.setState(g,k,!1),g.transparent===!0&&g.side===2&&g.forceSinglePass===!1?(g.side=1,g.needsUpdate=!0,Xn(g,I,V),g.side=0,g.needsUpdate=!0,Xn(g,I,V),g.side=2):Xn(g,I,V)}this.compile=function(g,I,k=null){k===null&&(k=g),D!==null&&D.renderStart(g,I,k),T=$.get(k),T.init(I),R.push(T),k.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(T.pushLight(F),F.castShadow&&T.pushShadow(F))}),g!==k&&g.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(T.pushLight(F),F.castShadow&&T.pushShadow(F))}),T.setupLights(),D!==null&&D.updateLights(T.state.lightsArray),ot=this.localClippingEnabled,Ue=ce.init(this.clippingPlanes,ot),Ue===!0&&ce.setGlobalState(this.clippingPlanes,I),D!==null&&xe.render(T.state.shadowsArray,k,I);const V=new Set;return g.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const oe=F.material;if(oe)if(Array.isArray(oe))for(let me=0;me<oe.length;me++){const ge=oe[me];Bt(ge,k,I,F),V.add(ge)}else Bt(oe,k,I,F),V.add(oe)}),T=R.pop(),D!==null&&D.renderEnd(),V},this.compileAsync=function(g,I,k=null){const V=this.compile(g,I,k);return new Promise(F=>{function oe(){if(V.forEach(function(me){const ge=w.get(me).currentProgram;(ge===void 0||ge.isReady())&&V.delete(me)}),V.size===0){F(g);return}setTimeout(oe,10)}Ve.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Vt=null;function Cn(g){Vt&&Vt(g)}function Si(){ln.stop()}function Wi(){ln.start()}const ln=new no;ln.setAnimationLoop(Cn),typeof self<"u"&&ln.setContext(self),this.setAnimationLoop=function(g){Vt=g,ue.setAnimationLoop(g),g===null?ln.stop():ln.start()},ue.addEventListener("sessionstart",Si),ue.addEventListener("sessionend",Wi),this.render=function(g,I){if(I!==void 0&&I.isCamera!==!0){Ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;D!==null&&D.renderStart(g,I);const k=ue.enabled===!0&&ue.isPresenting===!0,V=m!==null&&(H===null||k)&&m.begin(y,H);if(g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(m===null||m.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(I),I=ue.getCamera()),g.isScene===!0&&g.onBeforeRender(y,g,I,H),T=$.get(g,R.length),T.init(I),T.state.textureUnits=z.getTextureUnits(),R.push(T),xt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ye.setFromProjectionMatrix(xt,mi,I.reversedDepth),ot=this.localClippingEnabled,Ue=ce.init(this.clippingPlanes,ot),E=ve.get(g,b.length),E.init(),b.push(E),ue.enabled===!0&&ue.isPresenting===!0){const oe=y.xr.getDepthSensingMesh();oe!==null&&Mi(oe,I,-1/0,y.sortObjects)}Mi(g,I,0,y.sortObjects),E.finish(),D!==null&&D.updateLights(T.state.lightsArray),y.sortObjects===!0&&E.sort(ae,Re),ht=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,ht&&Ae.addToRenderList(E,g),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ue===!0&&ce.beginShadows();const F=T.state.shadowsArray;if(xe.render(F,g,I),Ue===!0&&ce.endShadows(),(V&&m.hasRenderPass())===!1){const oe=E.opaque,me=E.transmissive;if(T.setupLights(),I.isArrayCamera){const ge=I.cameras;if(me.length>0)for(let Me=0,Pe=ge.length;Me<Pe;Me++){const Ge=ge[Me];Wn(oe,me,g,Ge)}ht&&Ae.render(g);for(let Me=0,Pe=ge.length;Me<Pe;Me++){const Ge=ge[Me];kn(E,g,Ge,Ge.viewport)}}else me.length>0&&Wn(oe,me,g,I),ht&&Ae.render(g),kn(E,g,I)}H!==null&&X===0&&(z.updateMultisampleRenderTarget(H),z.updateRenderTargetMipmap(H)),V&&m.end(y),g.isScene===!0&&g.onAfterRender(y,g,I),pe.resetDefaultState(),le=-1,q=null,R.pop(),R.length>0?(T=R[R.length-1],z.setTextureUnits(T.state.textureUnits),Ue===!0&&ce.setGlobalState(y.clippingPlanes,T.state.camera)):T=null,b.pop(),b.length>0?E=b[b.length-1]:E=null,D!==null&&D.renderEnd()};function Mi(g,I,k,V){if(g.visible===!1)return;if(g.layers.test(I.layers)){if(g.isGroup)k=g.renderOrder;else if(g.isLOD)g.autoUpdate===!0&&g.update(I);else if(g.isLightProbeGrid)T.pushLightProbeGrid(g);else if(g.isLight)T.pushLight(g),g.castShadow&&T.pushShadow(g);else if(g.isSprite){if(!g.frustumCulled||g.intersectsFrustum(Ye)){V&&st.setFromMatrixPosition(g.matrixWorld).applyMatrix4(xt);const oe=C.update(g),me=g.material;me.visible&&E.push(g,oe,me,k,st.z,null,I)}}else if((g.isMesh||g.isLine||g.isPoints)&&(!g.frustumCulled||g.intersectsFrustum(Ye))){const oe=C.update(g),me=g.material;if(V&&(g.boundingSphere!==void 0?(g.boundingSphere===null&&g.computeBoundingSphere(),st.copy(g.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),st.copy(oe.boundingSphere.center)),st.applyMatrix4(g.matrixWorld).applyMatrix4(xt)),Array.isArray(me)){const ge=oe.groups;for(let Me=0,Pe=ge.length;Me<Pe;Me++){const Ge=ge[Me],He=me[Ge.materialIndex];He&&He.visible&&E.push(g,oe,He,k,st.z,Ge,I)}}else me.visible&&E.push(g,oe,me,k,st.z,null,I)}}const F=g.children;for(let oe=0,me=F.length;oe<me;oe++)Mi(F[oe],I,k,V)}function kn(g,I,k,V){const{opaque:F,transmissive:oe,transparent:me}=g;T.setupLightsView(k),Ue===!0&&ce.setGlobalState(y.clippingPlanes,k),V&&S.viewport(J.copy(V)),F.length>0&&cn(F,I,k),oe.length>0&&cn(oe,I,k),me.length>0&&cn(me,I,k),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Wn(g,I,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){const He=Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new Jt(1,1,{generateMipmaps:!0,type:He?wn:Vn,minFilter:ms,samples:Math.max(4,Ke.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ke.workingColorSpace})}const F=T.state.transmissionRenderTarget[V.id],oe=V.viewport||J;F.setSize(oe.z*y.transmissionResolutionScale,oe.w*y.transmissionResolutionScale);const me=y.getRenderTarget(),ge=y.getActiveCubeFace(),Me=y.getActiveMipmapLevel();y.setRenderTarget(F),y.getClearColor(be),rt=y.getClearAlpha(),rt<1&&y.setClearColor(16777215,.5),y.clear(),ht&&Ae.render(k);const Pe=y.toneMapping;y.toneMapping=0;const Ge=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),Ue===!0&&ce.setGlobalState(y.clippingPlanes,V),cn(g,k,V),z.updateMultisampleRenderTarget(F),z.updateRenderTargetMipmap(F),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Te=0,tt=I.length;Te<tt;Te++){const{object:dt,geometry:at,material:Ze,group:bt}=I[Te];if(Ze.side===2&&dt.layers.test(V.layers)){const Ee=Ze.side;Ze.side=1,Ze.needsUpdate=!0,xi(dt,k,V,at,Ze,bt),Ze.side=Ee,Ze.needsUpdate=!0,He=!0}}He===!0&&(z.updateMultisampleRenderTarget(F),z.updateRenderTargetMipmap(F))}y.setRenderTarget(me,ge,Me),y.setClearColor(be,rt),Ge!==void 0&&(V.viewport=Ge),y.toneMapping=Pe}function cn(g,I,k){const V=I.isScene===!0?I.overrideMaterial:null;for(let F=0,oe=g.length;F<oe;F++){const me=g[F],{object:ge,geometry:Me,group:Pe}=me;let Ge=me.material;Ge.allowOverride===!0&&V!==null&&(Ge=V),ge.layers.test(k.layers)&&xi(ge,I,k,Me,Ge,Pe)}}function xi(g,I,k,V,F,oe){D!==null&&F.isNodeMaterial&&D.setObject(g,F),g.onBeforeRender(y,I,k,V,F,oe),g.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,g.matrixWorld),g.normalMatrix.getNormalMatrix(g.modelViewMatrix),F.onBeforeRender(y,I,k,V,g,oe),F.transparent===!0&&F.side===2&&F.forceSinglePass===!1?(F.side=1,F.needsUpdate=!0,y.renderBufferDirect(k,I,V,F,g,oe),F.side=0,F.needsUpdate=!0,y.renderBufferDirect(k,I,V,F,g,oe),F.side=2):y.renderBufferDirect(k,I,V,F,g,oe),g.onAfterRender(y,I,k,V,F,oe)}function Xn(g,I,k){I.isScene!==!0&&(I=yt);const V=w.get(g),F=T.state.lights,oe=T.state.shadowsArray,me=F.state.version,ge=ie.getParameters(g,F.state,oe,I,k,T.state.lightProbeGridArray),Me=ie.getProgramCacheKey(ge);let Pe=V.programs;V.environment=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?I.environment:null,V.fog=I.fog;const Ge=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap;V.envMap=Q.get(g.envMap||V.environment,Ge),V.envMapRotation=V.environment!==null&&g.envMap===null?I.environmentRotation:g.envMapRotation,Pe===void 0&&(g.addEventListener("dispose",Ft),Pe=new Map,V.programs=Pe);let He=Pe.get(Me);if(He!==void 0){if(V.currentProgram===He&&V.lightsStateVersion===me)return qi(g,ge),He}else ge.uniforms=ie.getUniforms(g),D!==null&&g.isNodeMaterial&&D.build(g,k,ge),g.onBeforeCompile(ge,y),He=ie.acquireProgram(ge,Me),Pe.set(Me,He),V.uniforms=ge.uniforms;const Te=V.uniforms;return(!g.isShaderMaterial&&!g.isRawShaderMaterial||g.clipping===!0)&&(Te.clippingPlanes=ce.uniform),qi(g,ge),V.needsLights=po(g),V.lightsStateVersion=me,V.needsLights&&(Te.ambientLightColor.value=F.state.ambient,Te.lightProbe.value=F.state.probe,Te.sunLights.value=F.state.sun,Te.sunLightShadows.value=F.state.sunShadow,Te.directionalLights.value=F.state.directional,Te.directionalLightShadows.value=F.state.directionalShadow,Te.spotLights.value=F.state.spot,Te.spotLightShadows.value=F.state.spotShadow,Te.rectAreaLights.value=F.state.rectArea,Te.ltc_1.value=F.state.rectAreaLTC1,Te.ltc_2.value=F.state.rectAreaLTC2,Te.pointLights.value=F.state.point,Te.pointLightShadows.value=F.state.pointShadow,Te.hemisphereLights.value=F.state.hemi,Te.sunShadowMatrix.value=F.state.sunShadowMatrix,Te.sunShadowCascade.value=F.state.sunShadowCascade,Te.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Te.spotLightMatrix.value=F.state.spotLightMatrix,Te.spotLightMap.value=F.state.spotLightMap,Te.pointShadowMatrix.value=F.state.pointShadowMatrix),V.lightProbeGrid=T.state.lightProbeGridArray.length>0,V.currentProgram=He,V.uniformsList=null,He}function Xi(g){if(g.uniformsList===null){const I=g.currentProgram.getUniforms();g.uniformsList=Sr.seqWithValue(I.seq,g.uniforms)}return g.uniformsList}function qi(g,I){const k=w.get(g);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function ho(g,I){if(g.length===0)return null;if(g.length===1)return g[0].texture!==null?g[0]:null;U.setFromMatrixPosition(I.matrixWorld);for(let k=0,V=g.length;k<V;k++){const F=g[k];if(F.texture!==null&&F.boundingBox.containsPoint(U))return F}return null}function uo(g,I,k,V,F){I.isScene!==!0&&(I=yt),z.resetTextureUnits();const oe=I.fog,me=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?I.environment:null,ge=H===null?y.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:ke.workingColorSpace,Me=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Pe=Q.get(V.envMap||me,Me),Ge=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,He=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Te=!!k.morphAttributes.position,tt=!!k.morphAttributes.normal,dt=!!k.morphAttributes.color;let at=0;V.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(at=y.toneMapping);const Ze=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,bt=Ze!==void 0?Ze.length:0,Ee=w.get(V),Ut=T.state.lights;if(Ue===!0&&(ot===!0||g!==q)){const it=g===q&&V.id===le;ce.setState(V,g,it)}let Je=!1;V.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Ut.state.version||Ee.outputColorSpace!==ge||F.isBatchedMesh&&Ee.batching===!1||!F.isBatchedMesh&&Ee.batching===!0||F.isBatchedMesh&&Ee.batchingColor===!0&&F._colorsTexture===null||F.isBatchedMesh&&Ee.batchingColor===!1&&F._colorsTexture!==null||F.isInstancedMesh&&Ee.instancing===!1||!F.isInstancedMesh&&Ee.instancing===!0||F.isSkinnedMesh&&Ee.skinning===!1||!F.isSkinnedMesh&&Ee.skinning===!0||F.isInstancedMesh&&Ee.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ee.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ee.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ee.instancingMorph===!1&&F.morphTexture!==null||Ee.envMap!==Pe||V.fog===!0&&Ee.fog!==oe||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ce.numPlanes||Ee.numIntersection!==ce.numIntersection)||Ee.vertexAlphas!==Ge||Ee.vertexTangents!==He||Ee.morphTargets!==Te||Ee.morphNormals!==tt||Ee.morphColors!==dt||Ee.toneMapping!==at||Ee.morphTargetsCount!==bt||!!Ee.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Je=!0):(Je=!0,Ee.__version=V.version);let zt=Ee.currentProgram;Je===!0&&(zt=Xn(V,I,F),D&&V.isNodeMaterial&&D.onUpdateProgram(V,zt,Ee));let jt=!1,Mn=!1,qn=!1;const nt=zt.getUniforms(),ft=Ee.uniforms;if(S.useProgram(zt.program)&&(jt=!0,Mn=!0,qn=!0),V.id!==le&&(le=V.id,Mn=!0),Ee.needsLights){const it=ho(T.state.lightProbeGridArray,F);Ee.lightProbeGrid!==it&&(Ee.lightProbeGrid=it,Mn=!0)}if(jt||q!==g){S.buffers.depth.getReversed()&&g.reversedDepth!==!0&&(g._reversedDepth=!0,g.updateProjectionMatrix()),nt.setValue(L,"projectionMatrix",g.projectionMatrix),nt.setValue(L,"viewMatrix",g.matrixWorldInverse);const it=nt.map.cameraPosition;it!==void 0&&it.setValue(L,Tt.setFromMatrixPosition(g.matrixWorld)),Ke.logarithmicDepthBuffer&&nt.setValue(L,"logDepthBufFC",2/(Math.log(g.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&nt.setValue(L,"isOrthographic",g.isOrthographicCamera===!0),q!==g&&(q=g,Mn=!0,qn=!0)}if(Ee.needsLights&&(Ut.state.sunShadowMap.length>0&&nt.setValue(L,"sunShadowMap",Ut.state.sunShadowMap,z),Ut.state.directionalShadowMap.length>0&&nt.setValue(L,"directionalShadowMap",Ut.state.directionalShadowMap,z),Ut.state.spotShadowMap.length>0&&nt.setValue(L,"spotShadowMap",Ut.state.spotShadowMap,z),Ut.state.pointShadowMap.length>0&&nt.setValue(L,"pointShadowMap",Ut.state.pointShadowMap,z)),F.isSkinnedMesh){nt.setOptional(L,F,"bindMatrix"),nt.setOptional(L,F,"bindMatrixInverse");const it=F.skeleton;it&&(it.boneTexture===null&&it.computeBoneTexture(),nt.setValue(L,"boneTexture",it.boneTexture,z))}F.isBatchedMesh&&(nt.setOptional(L,F,"batchingTexture"),nt.setValue(L,"batchingTexture",F._matricesTexture,z),nt.setOptional(L,F,"batchingIdTexture"),nt.setValue(L,"batchingIdTexture",F._indirectTexture,z),nt.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&nt.setValue(L,"batchingColorTexture",F._colorsTexture,z));const xn=k.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&Be.update(F,k,zt),(Mn||Ee.receiveShadow!==F.receiveShadow)&&(Ee.receiveShadow=F.receiveShadow,nt.setValue(L,"receiveShadow",F.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&I.environment!==null&&(ft.envMapIntensity.value=I.environmentIntensity),ft.dfgLUT!==void 0&&(ft.dfgLUT.value=Vu()),Mn){if(nt.setValue(L,"toneMappingExposure",y.toneMappingExposure),Ee.needsLights&&fo(ft,qn),oe&&V.fog===!0&&de.refreshFogUniforms(ft,oe),de.refreshMaterialUniforms(ft,V,ne,Y,T.state.transmissionRenderTarget[g.id]),Ee.needsLights&&Ee.lightProbeGrid){const it=Ee.lightProbeGrid;ft.probesSH.value=it.texture,ft.probesMin.value.copy(it.boundingBox.min),ft.probesMax.value.copy(it.boundingBox.max),ft.probesResolution.value.copy(it.resolution)}Sr.upload(L,Xi(Ee),ft,z)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Sr.upload(L,Xi(Ee),ft,z),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&nt.setValue(L,"center",F.center),nt.setValue(L,"modelViewMatrix",F.modelViewMatrix),nt.setValue(L,"normalMatrix",F.normalMatrix),nt.setValue(L,"modelMatrix",F.matrixWorld),V.uniformsGroups!==void 0){const it=V.uniformsGroups;for(let Ei=0,Yn=it.length;Ei<Yn;Ei++){const Ms=it[Ei];_e.update(Ms,zt),_e.bind(Ms,zt)}}return zt}function fo(g,I){g.ambientLightColor.needsUpdate=I,g.lightProbe.needsUpdate=I,g.sunLights.needsUpdate=I,g.sunLightShadows.needsUpdate=I,g.directionalLights.needsUpdate=I,g.directionalLightShadows.needsUpdate=I,g.pointLights.needsUpdate=I,g.pointLightShadows.needsUpdate=I,g.spotLights.needsUpdate=I,g.spotLightShadows.needsUpdate=I,g.rectAreaLights.needsUpdate=I,g.hemisphereLights.needsUpdate=I}function po(g){return g.isMeshLambertMaterial||g.isMeshToonMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isShadowMaterial||g.isShaderMaterial&&g.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(g,I,k){const V=w.get(g);V.__autoAllocateDepthBuffer=g.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),w.get(g.texture).__webglTexture=I,w.get(g.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:k,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(g,I){const k=w.get(g);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(g,I=0,k=0){H=g,B=I,X=k;let V=null,F=!1,oe=!1;if(g){const me=w.get(g);if(me.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(L.FRAMEBUFFER,me.__webglFramebuffer),J.copy(g.viewport),j.copy(g.scissor),Ne=g.scissorTest,S.viewport(J),S.scissor(j),S.setScissorTest(Ne),le=-1;return}else if(me.__webglFramebuffer===void 0)z.setupRenderTarget(g);else if(me.__hasExternalTextures)z.rebindTextures(g,w.get(g.texture).__webglTexture,w.get(g.depthTexture).__webglTexture);else if(g.depthBuffer){const Pe=g.depthTexture;if(me.__boundDepthTexture!==Pe){if(Pe!==null&&w.has(Pe)&&(g.width!==Pe.image.width||g.height!==Pe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(g)}}const ge=g.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(oe=!0);const Me=w.get(g).__webglFramebuffer;g.isWebGLCubeRenderTarget?(Array.isArray(Me[I])?V=Me[I][k]:V=Me[I],F=!0):g.samples>0&&z.useMultisampledRTT(g)===!1?V=w.get(g).__webglMultisampledFramebuffer:Array.isArray(Me)?V=Me[k]:V=Me,J.copy(g.viewport),j.copy(g.scissor),Ne=g.scissorTest}else J.copy(Ce).multiplyScalar(ne).floor(),j.copy(fe).multiplyScalar(ne).floor(),Ne=Qe;if(k!==0&&(V=O),S.bindFramebuffer(L.FRAMEBUFFER,V)&&S.drawBuffers(g,V),S.viewport(J),S.scissor(j),S.setScissorTest(Ne),F){const me=w.get(g.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,me.__webglTexture,k)}else if(oe){const me=I;for(let ge=0;ge<g.textures.length;ge++){const Me=w.get(g.textures[ge]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+ge,Me.__webglTexture,k,me)}}else if(g!==null&&k!==0){const me=w.get(g.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,me.__webglTexture,k)}le=-1};function Ss(g){const I=w.get(g);return(I.__readFormat!==g.format||I.__readType!==g.type)&&(I.__readFormat=g.format,I.__readType=g.type,I.__formatReadable=Ke.textureFormatReadable(g.format),I.__typeReadable=Ke.textureTypeReadable(g.type)),I}this.readRenderTargetPixels=function(g,I,k,V,F,oe,me,ge=0){if(!(g&&g.isWebGLRenderTarget)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=w.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){S.bindFramebuffer(L.FRAMEBUFFER,Me);try{const Pe=g.textures[ge],Ge=Pe.format,He=Pe.type;g.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ge);const Te=Ss(Pe);if(Te.__formatReadable===!1){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=g.width-V&&k>=0&&k<=g.height-F&&L.readPixels(I,k,V,F,ee.convert(Ge),ee.convert(He),oe)}finally{const Pe=H!==null?w.get(H).__webglFramebuffer:null;S.bindFramebuffer(L.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(g,I,k,V,F,oe,me,ge=0){if(!(g&&g.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=w.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me)if(I>=0&&I<=g.width-V&&k>=0&&k<=g.height-F){S.bindFramebuffer(L.FRAMEBUFFER,Me);const Pe=g.textures[ge],Ge=Pe.format,He=Pe.type;g.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ge);const Te=Ss(Pe);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,tt),L.bufferData(L.PIXEL_PACK_BUFFER,oe.byteLength,L.STREAM_READ),L.readPixels(I,k,V,F,ee.convert(Ge),ee.convert(He),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);const dt=H!==null?w.get(H).__webglFramebuffer:null;S.bindFramebuffer(L.FRAMEBUFFER,dt);const at=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await _l(L,at,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,tt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,oe),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(tt),L.deleteSync(at),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(g,I=null,k=0){const V=Math.pow(2,-k),F=Math.floor(g.image.width*V),oe=Math.floor(g.image.height*V),me=I!==null?I.x:0,ge=I!==null?I.y:0;z.setTexture2D(g,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,me,ge,F,oe),S.unbindTexture()},this.copyTextureToTexture=function(g,I,k=null,V=null,F=0,oe=0){let me,ge,Me,Pe,Ge,He,Te,tt,dt;const at=g.isCompressedTexture?g.mipmaps[oe]:g.image;if(k!==null)me=k.max.x-k.min.x,ge=k.max.y-k.min.y,Me=k.isBox3?k.max.z-k.min.z:1,Pe=k.min.x,Ge=k.min.y,He=k.isBox3?k.min.z:0;else{const ft=Math.pow(2,-F);me=Math.floor(at.width*ft),ge=Math.floor(at.height*ft),g.isDataArrayTexture?Me=at.depth:g.isData3DTexture?Me=Math.floor(at.depth*ft):Me=1,Pe=0,Ge=0,He=0}V!==null?(Te=V.x,tt=V.y,dt=V.z):(Te=0,tt=0,dt=0);const Ze=ee.convert(I.format),bt=ee.convert(I.type);let Ee;I.isData3DTexture?(z.setTexture3D(I,0),Ee=L.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(z.setTexture2DArray(I,0),Ee=L.TEXTURE_2D_ARRAY):(z.setTexture2D(I,0),Ee=L.TEXTURE_2D),S.activeTexture(L.TEXTURE0),S.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),S.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),S.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const Ut=S.getParameter(L.UNPACK_ROW_LENGTH),Je=S.getParameter(L.UNPACK_IMAGE_HEIGHT),zt=S.getParameter(L.UNPACK_SKIP_PIXELS),jt=S.getParameter(L.UNPACK_SKIP_ROWS),Mn=S.getParameter(L.UNPACK_SKIP_IMAGES);S.pixelStorei(L.UNPACK_ROW_LENGTH,at.width),S.pixelStorei(L.UNPACK_IMAGE_HEIGHT,at.height),S.pixelStorei(L.UNPACK_SKIP_PIXELS,Pe),S.pixelStorei(L.UNPACK_SKIP_ROWS,Ge),S.pixelStorei(L.UNPACK_SKIP_IMAGES,He);const qn=g.isDataArrayTexture||g.isData3DTexture,nt=I.isDataArrayTexture||I.isData3DTexture;if(g.isDepthTexture){const ft=w.get(g),xn=w.get(I),it=w.get(ft.__renderTarget),Ei=w.get(xn.__renderTarget);S.bindFramebuffer(L.READ_FRAMEBUFFER,it.__webglFramebuffer),S.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let Yn=0;Yn<Me;Yn++)qn&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,w.get(g).__webglTexture,F,He+Yn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,w.get(I).__webglTexture,oe,dt+Yn)),L.blitFramebuffer(Pe,Ge,me,ge,Te,tt,me,ge,L.DEPTH_BUFFER_BIT,L.NEAREST);S.bindFramebuffer(L.READ_FRAMEBUFFER,null),S.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(F!==0||g.isRenderTargetTexture||w.has(g)){const ft=w.get(g),xn=w.get(I);S.bindFramebuffer(L.READ_FRAMEBUFFER,Z),S.bindFramebuffer(L.DRAW_FRAMEBUFFER,N);for(let it=0;it<Me;it++)qn?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ft.__webglTexture,F,He+it):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ft.__webglTexture,F),nt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xn.__webglTexture,oe,dt+it):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,xn.__webglTexture,oe),F!==0?L.blitFramebuffer(Pe,Ge,me,ge,Te,tt,me,ge,L.COLOR_BUFFER_BIT,L.NEAREST):nt?L.copyTexSubImage3D(Ee,oe,Te,tt,dt+it,Pe,Ge,me,ge):L.copyTexSubImage2D(Ee,oe,Te,tt,Pe,Ge,me,ge);S.bindFramebuffer(L.READ_FRAMEBUFFER,null),S.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else nt?g.isDataTexture||g.isData3DTexture?L.texSubImage3D(Ee,oe,Te,tt,dt,me,ge,Me,Ze,bt,at.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(Ee,oe,Te,tt,dt,me,ge,Me,Ze,at.data):L.texSubImage3D(Ee,oe,Te,tt,dt,me,ge,Me,Ze,bt,at):g.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,oe,Te,tt,me,ge,Ze,bt,at.data):g.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,oe,Te,tt,at.width,at.height,Ze,at.data):L.texSubImage2D(L.TEXTURE_2D,oe,Te,tt,me,ge,Ze,bt,at);S.pixelStorei(L.UNPACK_ROW_LENGTH,Ut),S.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Je),S.pixelStorei(L.UNPACK_SKIP_PIXELS,zt),S.pixelStorei(L.UNPACK_SKIP_ROWS,jt),S.pixelStorei(L.UNPACK_SKIP_IMAGES,Mn),oe===0&&I.generateMipmaps&&L.generateMipmap(Ee),S.unbindTexture()},this.initRenderTarget=function(g){w.get(g).__webglFramebuffer===void 0&&z.setupRenderTarget(g)},this.initTexture=function(g){g.isCubeTexture?z.setTextureCube(g,0):g.isData3DTexture?z.setTexture3D(g,0):g.isDataArrayTexture||g.isCompressedArrayTexture?z.setTexture2DArray(g,0):z.setTexture2D(g,0),S.unbindTexture()},this.resetState=function(){B=0,X=0,H=null,S.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=ke._getUnpackColorSpace()}},Gu=Lt('<span aria-hidden="true"></span>'),Hu=Lt('<p class="ship-error svelte-1gvba7e"> </p>'),ku=Lt('<div class="ship-canvas svelte-1gvba7e" aria-label="帝江号黄色粒子点云舰船"></div> <!>',1);function Wu(e,t){Ma(t,!0);let n,i=li(""),r=[];const s=[new G(-1,-.5,1.5),new G(-1.5,-2,1.5),new G(-2.3,0,1.5),new G(-2.3,-.5,1.5)];go(()=>{let u=!1,f=0,h,p,M,x;const _=new Ul,d=new kt(45,1,.1,100);d.position.set(0,1.5,8);const A=new ui,U=new ui;A.position.set(1.2,.8,1),U.rotation.set(Math.PI/.9,-.2,3),A.add(U),_.add(A);try{h=new zu({antialias:!0,alpha:!0}),h.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.appendChild(h.domElement)}catch{Ht(i,"浏览器无法启动 3D 渲染。");return}const E=()=>{const{width:R,height:m}=n.getBoundingClientRect();!R||!m||(A.scale.setScalar(R<500?.35:R<800?.72:.9),A.position.x=R<500?0:1.2,d.aspect=R/m,d.updateProjectionMatrix(),h.setSize(R,m))};x=new ResizeObserver(E),x.observe(n),E(),fetch("/spaceship.bin").then(R=>{if(!R.ok)throw new Error("spaceship.bin unavailable");return R.arrayBuffer()}).then(R=>{if(u)return;const m=new Float32Array(R),y=m.length/3;if(!y||m.length%3)throw new Error("Invalid point cloud");let W=0,D=0,O=0;for(let X=0;X<m.length;X+=3)W+=m[X],D+=m[X+1],O+=m[X+2];W/=y,D/=y,O/=y;let Z=0;for(let X=0;X<m.length;X+=3)m[X]-=W,m[X+1]-=D,m[X+2]-=O,Z=Math.max(Z,Math.hypot(m[X],m[X+1],m[X+2]));const N=5/Z;for(let X=0;X<m.length;X++)m[X]*=N;p=new Sn,p.setAttribute("position",new $t(m,3));const B=new Float32Array(y);for(let X=0;X<y;X++)B[X]=Math.random()*Math.PI*2;p.setAttribute("aPhase",new $t(B,1)),M=new Wa({color:"#eab308",size:.035,sizeAttenuation:!0,transparent:!0,opacity:.7,blending:2,depthWrite:!1}),M.onBeforeCompile=X=>{X.uniforms.uTime={value:0},M.userData.shader=X,X.vertexShader=`attribute float aPhase; varying float vPhase;
${X.vertexShader}`.replace("#include <begin_vertex>",`#include <begin_vertex>
vPhase = aPhase;`),X.fragmentShader=`uniform float uTime; varying float vPhase;
${X.fragmentShader}`.replace("vec4 diffuseColor = vec4( diffuse, opacity );","float blink = (sin(uTime * 4.0 + vPhase) + 1.0) * 0.5; vec4 diffuseColor = vec4( diffuse, opacity * (blink * 0.7 + 0.3) );")},U.add(new kl(p,M))}).catch(()=>{u||Ht(i,"舰船模型加载失败。")});const T=performance.now(),b=()=>{if(u)return;const R=(performance.now()-T)/1e3;A.position.y=.8+Math.sin(R*2)*.1,A.rotation.y=Math.sin(R)*.02,_.updateMatrixWorld(!0);for(let m=0;m<s.length;m++){const y=U.localToWorld(s[m].clone()).project(d),W=r[m];W&&(W.style.left=`${(y.x+1)*50}%`,W.style.top=`${(1-y.y)*50}%`)}M?.userData.shader&&(M.userData.shader.uniforms.uTime.value=R),h.render(_,d),f=requestAnimationFrame(b)};return b(),()=>{u=!0,cancelAnimationFrame(f),x?.disconnect(),p?.dispose(),M?.dispose(),h.dispose(),h.domElement.remove()}});var a=ku(),o=_a(a);Li(o,20,()=>["post","chatter","moment","message"],ga,(u,f,h)=>{var p=Gu();xs(p,(M,x)=>r[x]=M,M=>r?.[M],()=>[h]),nn(()=>Fn(p,1,`beacon ${f??""}`,"svelte-1gvba7e")),wt(u,p)}),qe(o),xs(o,u=>n=u,()=>n);var c=Oe(o,2),l=u=>{var f=Hu(),h=mt(f,!0);nn(()=>vt(h,Se(i))),wt(u,f)};Bn(c,u=>{Se(i)&&u(l)}),wt(e,a),Sa()}var Xu=Lt('<a class="svelte-iv3rjb"><span class="svelte-iv3rjb"> </span><strong class="svelte-iv3rjb"> </strong><small class="svelte-iv3rjb"> </small></a>'),qu=Lt('<p class="svelte-iv3rjb">这个月还没有记录。</p>'),Yu=Lt('<div class="catalog svelte-iv3rjb"><!></div>'),Ku=Lt('<a><span class="flask-neck svelte-iv3rjb"></span><span class="flask-glass svelte-iv3rjb"><span class="flask-liquid svelte-iv3rjb"></span><span class="flask-shine svelte-iv3rjb"></span></span> <span class="flask-label svelte-iv3rjb"> </span></a>'),Zu=Lt('<div class="shelf svelte-iv3rjb"><div class="shelf-items svelte-iv3rjb"></div> <div class="shelf-plank svelte-iv3rjb"></div></div>'),Ju=Lt('<div class="alchemy-empty svelte-iv3rjb"><span aria-hidden="true" class="svelte-iv3rjb">✧</span><strong class="svelte-iv3rjb">等待第一份记忆</strong><p class="svelte-iv3rjb">发布文章或动态后，新的试管就会出现在这里。</p></div>'),$u=Lt('<div class="alchemy-scene svelte-iv3rjb"><div class="scene-topline svelte-iv3rjb"><span class="svelte-iv3rjb">MEMORY ALCHEMY LAB</span><button type="button" class="svelte-iv3rjb">⌕ 记忆目录</button></div> <div class="alchemy-heading svelte-iv3rjb"><span class="svelte-iv3rjb">✧</span><div class="svelte-iv3rjb"><h2 class="svelte-iv3rjb">本月记忆试管</h2><p class="svelte-iv3rjb">每一滴灵感，都在时间里留下颜色。</p></div></div> <!> <div class="shelf-stage svelte-iv3rjb"></div> <!></div>'),Qu=Lt('<div class="ship-alert svelte-iv3rjb"> </div>'),ju=Lt('<a class="svelte-iv3rjb"><small class="svelte-iv3rjb"> </small><strong class="svelte-iv3rjb"> </strong></a>'),ed=Lt('<div class="ship-hud svelte-iv3rjb"><div class="ship-hud-title svelte-iv3rjb"> <span class="svelte-iv3rjb"> </span></div><!></div>'),td=Lt('<div class="ship-scene svelte-iv3rjb"><div class="ship-glow ship-glow-gold svelte-iv3rjb"></div><div class="ship-glow ship-glow-blue svelte-iv3rjb"></div> <div class="ship-identity svelte-iv3rjb"><h2 class="svelte-iv3rjb">END-01</h2><p class="svelte-iv3rjb">CLASS: INTERSTELLAR CRUISER<br class="svelte-iv3rjb"/>AFFILIATION: ENDFIELD INDUSTRIES</p></div> <!> <div class="ship-controls svelte-iv3rjb"><!> <small class="svelte-iv3rjb">SYSTEM OVERRIDE</small> <button type="button"><span class="control-icon post svelte-iv3rjb">▤</span><span class="svelte-iv3rjb"><strong class="svelte-iv3rjb">PRTS_DB</strong><small class="svelte-iv3rjb">情报卷宗</small></span></button> <button type="button"><span class="control-icon chatter svelte-iv3rjb">▣</span><span class="svelte-iv3rjb"><strong class="svelte-iv3rjb">LOGS</strong><small class="svelte-iv3rjb">终端通讯</small></span></button> <button type="button"><span class="control-icon moment svelte-iv3rjb">✧</span><span class="svelte-iv3rjb"><strong class="svelte-iv3rjb">BEACON</strong><small class="svelte-iv3rjb">观测信标</small></span></button> <button type="button" class="svelte-iv3rjb"><span class="control-icon message svelte-iv3rjb">◇</span><span class="svelte-iv3rjb"><strong class="svelte-iv3rjb">RECEPTION</strong><small class="svelte-iv3rjb">访客申请</small></span></button></div> <!> <div class="ship-bottom-right svelte-iv3rjb"><div class="ship-summary svelte-iv3rjb"><small class="svelte-iv3rjb">DATA SUMMARY</small><div class="svelte-iv3rjb"><span class="svelte-iv3rjb">INTEL</span><strong class="svelte-iv3rjb"> </strong></div><div class="svelte-iv3rjb"><span class="svelte-iv3rjb">LOGS</span><strong class="svelte-iv3rjb"> </strong></div><div class="svelte-iv3rjb"><span class="svelte-iv3rjb">BEACON</span><strong class="svelte-iv3rjb"> </strong></div><div class="svelte-iv3rjb"><span class="svelte-iv3rjb">MSG</span><strong class="svelte-iv3rjb">—</strong></div></div><div class="ship-timeline svelte-iv3rjb"><button type="button" aria-label="上一个月" class="svelte-iv3rjb">‹</button><span class="svelte-iv3rjb"><strong class="svelte-iv3rjb"> </strong><small class="svelte-iv3rjb">TIMELINE</small></span><button type="button" aria-label="下一个月" class="svelte-iv3rjb">›</button></div></div></div>'),nd=Lt('<section class="realm svelte-iv3rjb" aria-labelledby="realm-title"><div class="realm-hero svelte-iv3rjb"><div class="realm-orbit realm-orbit-one svelte-iv3rjb"></div> <div class="realm-orbit realm-orbit-two svelte-iv3rjb"></div> <div class="realm-kicker svelte-iv3rjb">RAINLOVE / CREATIVE REALM</div> <h1 id="realm-title" class="svelte-iv3rjb"><span aria-hidden="true" class="svelte-iv3rjb">✦</span> 灵境</h1> <p class="svelte-iv3rjb">从神秘的记忆试管到深邃的星际巨舰，在这里封存灵感与奇迹。</p> <div class="mode-switch svelte-iv3rjb" role="group" aria-label="灵境视图"><button type="button">⚗ 记忆炼金室</button> <button type="button">✦ 帝江号舰船</button></div></div> <div class="realm-toolbar svelte-iv3rjb"><div class="realm-stats svelte-iv3rjb" aria-label="本月内容统计"><span class="svelte-iv3rjb"><strong class="svelte-iv3rjb"> </strong> 深度文章</span> <span class="svelte-iv3rjb"><strong class="svelte-iv3rjb"> </strong> 杂谈随笔</span> <span class="svelte-iv3rjb"><strong class="svelte-iv3rjb"> </strong> 瞬间思绪</span></div> <div class="month-nav svelte-iv3rjb" aria-label="切换月份"><button type="button" aria-label="上一个月" class="svelte-iv3rjb">‹</button> <strong class="svelte-iv3rjb"> </strong> <button type="button" aria-label="下一个月" class="svelte-iv3rjb">›</button></div></div> <!> <div class="realm-bottom svelte-iv3rjb"><div class="level-card svelte-iv3rjb"><span class="level-mark svelte-iv3rjb">✦</span><div class="svelte-iv3rjb"><small class="svelte-iv3rjb">探索等级</small><strong class="svelte-iv3rjb"> </strong><div class="level-bar svelte-iv3rjb"><span class="svelte-iv3rjb"></span></div><small class="svelte-iv3rjb"> </small></div></div> <a class="wish-card svelte-iv3rjb" href="/guestbook/"><span class="svelte-iv3rjb">✉</span><div class="svelte-iv3rjb"><strong class="svelte-iv3rjb">访客留言簿</strong><small class="svelte-iv3rjb">把想说的话留在这里</small></div><span aria-hidden="true" class="svelte-iv3rjb">↗</span></a></div></section>');function ad(e,t){Ma(t,!0);const n={post:"深度文章",chatter:"杂谈随笔",moment:"瞬间思绪"},i=new Date().toISOString().slice(0,7),r=Array.from(new Set(t.entries.map(ye=>ye.date.slice(0,7)))).filter(ye=>/^\d{4}-\d{2}$/.test(ye)).sort();r.length||r.push(i);let s=li("alchemy"),a=li(r.length-1),o=li("all"),c=li(""),l=li(!1),u=Yi(()=>r[Se(a)]||r[0]),f=Yi(()=>t.entries.filter(ye=>ye.date.startsWith(Se(u)))),h=Yi(()=>Se(o)==="all"?Se(f):Se(f).filter(ye=>ye.kind===Se(o))),p=Yi(()=>({post:Se(f).filter(ye=>ye.kind==="post").length,chatter:Se(f).filter(ye=>ye.kind==="chatter").length,moment:Se(f).filter(ye=>ye.kind==="moment").length}));const M=new Set(t.entries.map(ye=>ye.date)).size,x=t.entries.filter(ye=>ye.kind==="post").length*50+t.entries.filter(ye=>ye.kind==="chatter").length*20+t.entries.filter(ye=>ye.kind==="moment").length*10+M*100;let _=1,d=x;const A=ye=>ye<=1?150:150+Math.floor(2e3*(ye-1)/(ye+9));for(;d>=A(_);)d-=A(_),_+=1;const U=A(_),E=Math.min(100,d/U*100);function T(ye){Ht(a,Math.max(0,Math.min(r.length-1,Se(a)+ye)),!0),Ht(o,"all")}function b(ye){const[Ve,Ke]=ye.split("-");return`${Ve} 年 ${Number(Ke)} 月`}function R(ye){if(ye==="message"){window.location.href="/guestbook/";return}if(!(ye==="post"?Se(p).post:ye==="chatter"?Se(p).chatter:Se(p).moment)){Ht(c,"[ SYSTEM ALERT ] 该区域暂无数据归档"),window.setTimeout(()=>Ht(c,""),3e3);return}Ht(o,Se(o)===ye?"all":ye,!0)}var m=nd(),y=je(m),W=Oe(je(y),10),D=je(W);let O;var Z=Oe(D,2);let N;qe(W),qe(y);var B=Oe(y,2),X=je(B),H=je(X),le=je(H),q=mt(le,!0);Ln(),qe(H);var J=Oe(H,2),j=je(J),Ne=mt(j,!0);Ln(),qe(J);var be=Oe(J,2),rt=je(be),De=mt(rt,!0);Ln(),qe(be),qe(X);var Y=Oe(X,2),ne=je(Y),ae=Oe(ne,2),Re=mt(ae,!0),Ce=Oe(ae,2);qe(Y),qe(B);var fe=Oe(B,2),Qe=ye=>{var Ve=$u(),Ke=je(Ve),S=Oe(je(Ke));qe(Ke);var v=Oe(Ke,4),w=se=>{var C=Yu(),ie=je(C),de=$=>{var ce=mo(),xe=_a(ce);Li(xe,17,()=>Se(f),Ae=>Ae.id,(Ae,Be)=>{var P=Xu(),K=je(P),ee=mt(K,!0),pe=Oe(K),_e=mt(pe,!0),te=Oe(pe),ue=mt(te,!0);qe(P),nn(()=>{Pn(P,"href",Se(Be).href),vt(ee,n[Se(Be).kind]||"记录"),vt(_e,Se(Be).title),vt(ue,Se(Be).date)}),wt(Ae,P)}),wt($,ce)},ve=$=>{var ce=qu();wt($,ce)};Bn(ie,$=>{Se(f).length?$(de):$(ve,-1)}),qe(C),wt(se,C)};Bn(v,se=>{Se(l)&&se(w)});var z=Oe(v,2);Li(z,20,()=>[0,1,2],ga,(se,C)=>{var ie=Zu(),de=je(ie);Li(de,21,()=>Se(f).slice(C*7,C*7+7),ve=>ve.id,(ve,$)=>{var ce=Ku();let xe;var Ae=Oe(je(ce),3),Be=mt(Ae,!0);qe(ce),nn(()=>{xe=Fn(ce,1,"flask svelte-iv3rjb",null,xe,{post:Se($).kind==="post",chatter:Se($).kind==="chatter",moment:Se($).kind==="moment"}),Pn(ce,"href",Se($).href),Pn(ce,"title",Se($).title),vt(Be,Se($).title)}),wt(ve,ce)}),qe(de),Ln(2),qe(ie),wt(se,ie)}),qe(z);var Q=Oe(z,2),re=se=>{var C=Ju();wt(se,C)};Bn(Q,se=>{Se(f).length||se(re)}),qe(Ve),nn(()=>Pn(S,"aria-expanded",Se(l))),Xt("click",S,()=>Ht(l,!Se(l))),wt(ye,Ve)},Ye=ye=>{var Ve=td(),Ke=Oe(je(Ve),5);Wu(Ke,{});var S=Oe(Ke,2),v=je(S),w=Bt=>{var Vt=Qu(),Cn=mt(Vt);nn(()=>vt(Cn,`⚠ ${Se(c)??""}`)),wt(Bt,Vt)};Bn(v,Bt=>{Se(c)&&Bt(w)});var z=Oe(v,4);let Q;var re=Oe(z,2);let se;var C=Oe(re,2);let ie;var de=Oe(C,2);qe(S);var ve=Oe(S,2),$=Bt=>{var Vt=ed(),Cn=je(Vt),Si=je(Cn),Wi=Oe(Si),ln=mt(Wi);qe(Cn);var Mi=Oe(Cn);Li(Mi,17,()=>Se(h),kn=>kn.id,(kn,Wn)=>{var cn=ju(),xi=je(cn),Xn=mt(xi,!0),Xi=Oe(xi),qi=mt(Xi,!0);qe(cn),nn(()=>{Pn(cn,"href",Se(Wn).href),vt(Xn,Se(Wn).date),vt(qi,Se(Wn).title)}),wt(kn,cn)}),qe(Vt),nn(()=>{vt(Si,`${Se(o)==="post"?"PRTS_DB":Se(o)==="chatter"?"LOGS":"BEACON"} ARCHIVE `),vt(ln,`${Se(h).length??""} FILES`)}),wt(Bt,Vt)};Bn(ve,Bt=>{Se(o)!=="all"&&Se(h).length&&Bt($)});var ce=Oe(ve,2),xe=je(ce),Ae=Oe(je(xe)),Be=Oe(je(Ae)),P=mt(Be,!0);qe(Ae);var K=Oe(Ae),ee=Oe(je(K)),pe=mt(ee,!0);qe(K);var _e=Oe(K),te=Oe(je(_e)),ue=mt(te,!0);qe(_e),Ln(),qe(xe);var we=Oe(xe),lt=je(we),Xe=Oe(lt),Ft=je(Xe),Wt=mt(Ft);Ln(),qe(Xe);var ki=Oe(Xe);qe(we),qe(ce),qe(Ve),nn((Bt,Vt)=>{Q=Fn(z,1,"svelte-iv3rjb",null,Q,{active:Se(o)==="post"}),se=Fn(re,1,"svelte-iv3rjb",null,se,{active:Se(o)==="chatter"}),ie=Fn(C,1,"svelte-iv3rjb",null,ie,{active:Se(o)==="moment"}),vt(P,Se(p).post),vt(pe,Se(p).chatter),vt(ue,Se(p).moment),lt.disabled=Se(a)===0,vt(Wt,`RECORD.Y${Bt??""}M${Vt??""}`),ki.disabled=Se(a)===r.length-1},[()=>Se(u).slice(2,4),()=>Number(Se(u).slice(5))]),Xt("click",z,()=>R("post")),Xt("click",re,()=>R("chatter")),Xt("click",C,()=>R("moment")),Xt("click",de,()=>R("message")),Xt("click",lt,()=>T(-1)),Xt("click",ki,()=>T(1)),wt(ye,Ve)};Bn(fe,ye=>{Se(s)==="alchemy"?ye(Qe):ye(Ye,-1)});var Ue=Oe(fe,2),ot=je(Ue),xt=Oe(je(ot)),Tt=Oe(je(xt)),st=mt(Tt),yt=Oe(Tt),ht=mt(yt),ut=Oe(yt),L=mt(ut);qe(xt),qe(ot),Ln(2),qe(Ue),qe(m),nn(ye=>{Pn(D,"aria-pressed",Se(s)==="alchemy"),O=Fn(D,1,"svelte-iv3rjb",null,O,{chosen:Se(s)==="alchemy"}),Pn(Z,"aria-pressed",Se(s)==="ship"),N=Fn(Z,1,"svelte-iv3rjb",null,N,{chosen:Se(s)==="ship"}),vt(q,Se(p).post),vt(Ne,Se(p).chatter),vt(De,Se(p).moment),ne.disabled=Se(a)===0,vt(Re,ye),Ce.disabled=Se(a)===r.length-1,vt(st,`Lv.${_??""}`),vo(ht,`width: ${E}%`),vt(L,`${d??""} / ${U??""} EXP · 文章、随笔、动态与活跃天数累计`)},[()=>b(Se(u))]),Xt("click",D,()=>{Ht(s,"alchemy"),Ht(o,"all")}),Xt("click",Z,()=>{Ht(s,"ship"),Ht(o,"all")}),Xt("click",ne,()=>T(-1)),Xt("click",Ce,()=>T(1)),wt(e,m),Sa()}_o(["click"]);export{ad as default};
