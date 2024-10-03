"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[38575],{17314:(e,t,i)=>{i.d(t,{Z:()=>u});var r,s,n=i(813653),o=i(861470),a=0,l=0;let u=function(e,t,i){var u=t&&i||0,d=t||Array(16),c=(e=e||{}).node||r,p=void 0!==e.clockseq?e.clockseq:s;if(null==c||null==p){var h=e.random||(e.rng||n.Z)();null==c&&(c=r=[1|h[0],h[1],h[2],h[3],h[4],h[5]]),null==p&&(p=s=(h[6]<<8|h[7])&16383)}var m=void 0!==e.msecs?e.msecs:Date.now(),f=void 0!==e.nsecs?e.nsecs:l+1,b=m-a+(f-l)/1e4;if(b<0&&void 0===e.clockseq&&(p=p+1&16383),(b<0||m>a)&&void 0===e.nsecs&&(f=0),f>=1e4)throw Error("uuid.v1(): Can't create more than 10M uuids/sec");a=m,l=f,s=p;var v=((268435455&(m+=122192928e5))*1e4+f)%4294967296;d[u++]=v>>>24&255,d[u++]=v>>>16&255,d[u++]=v>>>8&255,d[u++]=255&v;var g=m/4294967296*1e4&268435455;d[u++]=g>>>8&255,d[u++]=255&g,d[u++]=g>>>24&15|16,d[u++]=g>>>16&255,d[u++]=p>>>8|128,d[u++]=255&p;for(var y=0;y<6;++y)d[u+y]=c[y];return t||(0,o.Z)(d)}},541841:(e,t,i)=>{i.d(t,{Z:()=>a});var r=i(667294),s=i(973935);function n(e,t,i){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:String(r))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class o extends r.Component{constructor(...e){super(...e),n(this,"observer",null),n(this,"handleVisibilityChanged",(e,t)=>{this.props.onVisibilityChange(e,t)})}componentDidMount(){let e=s.findDOMNode(this);e instanceof HTMLElement&&(this.node=e),this.node&&(this.observer=new window.IntersectionObserver(this.handleVisibilityChanged,this.props.options),this.observer.observe(this.node))}componentWillUnmount(){this.observer&&(this.observer.unobserve(this.node),delete this.observer)}render(){return r.Children.only(this.props.children)}}let a=o},579814:(e,t,i)=>{i.d(t,{Z:()=>n});var r=i(372085),s=i(624797);let n=(e=()=>{})=>{let t=(0,s.mB)(window.location.search),{invite_code:i}=t;if(!i){e(t);return}let n=encodeURIComponent(encodeURIComponent(i));(0,r.Z)({url:"/v3/invite_code/attribution/land/",method:"POST",data:{invite_code:n}})}},627408:(e,t,i)=>{i.d(t,{Z:()=>v});var r=i(667294),s=i(541841),n=i(901855),o=i(5859),a=i(520893),l=i(503325);let{Provider:u,useMaybeHook:d}=(0,i(342513).Z)("timeSpentContext");var c=i(28449),p=i(19447),h=i(785893);function m(e,t,i){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:String(r))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class f extends r.Component{constructor(e){super(e),m(this,"componentWillUnmount",()=>{this.unregisterComponent()}),m(this,"getContext",()=>{let{clientTrackingParams:e,component:t,element:i,objectId:r,timeSpentContext:s,view:n,viewParameter:o}=this.props;return{view:n||s?.view,viewParameter:o||s?.viewParameter,component:t||s?.component,element:i,objectId:r||s?.objectId,clientTrackingParams:e||s?.clientTrackingParams,getParentUuid:()=>this.getUuid(),getGrandparentUuid:()=>this.getParentId()}}),m(this,"getLoggerContext",()=>{let e={...this.getContext()};return delete e.getParentUuid,e}),m(this,"getParentId",()=>{let{timeSpentContext:e,shouldUseGrandparentId:t=!1}=this.props;if(t&&e&&e.getGrandparentUuid){let t=e.getGrandparentUuid();if(t)return t}return e&&e.getParentUuid?e.getParentUuid():void 0}),m(this,"getUuid",()=>this.state.timedPair?this.state.timedPair.uuid:void 0),m(this,"getTimedPair",()=>this.state.timedPair),m(this,"setTimedPair",(e,t)=>{this.setState({timedPair:e},()=>{t&&t()})}),m(this,"isRegistered",!1),m(this,"registerComponent",()=>{this.props.timeSpentManager.registerComponent(this),this.isRegistered=!0}),m(this,"unregisterComponent",()=>{this.isRegistered&&(this.props.timeSpentManager.unregisterComponent(this),this.isRegistered=!1)}),m(this,"handleVisibilityChange",e=>{let{intersectionRatio:t}=e[0],{bottom:i,left:r,right:s,top:n}=e[0].intersectionRect;t>0?this.registerComponent():0===t&&(0===i&&0===r&&0===s&&0===n?this.unregisterComponent():this.registerComponent())}),this.state={timedPair:new l.Z(this.getLoggerContext())}}componentDidUpdate(e){!this.isRegistered||e.view===this.props.view&&e.viewParameter===this.props.viewParameter&&e.component===this.props.component&&e.element===this.props.element&&e.objectId===this.props.objectId&&(0,a.Z)(e.auxData,this.props.auxData)&&(0,a.Z)(e.viewData,this.props.viewData)||(this.unregisterComponent(),setTimeout(this.registerComponent))}render(){let{children:e}=this.props;return(0,h.jsx)(u,{value:this.getContext(),children:(0,h.jsx)(s.Z,{onVisibilityChange:this.handleVisibilityChange,options:{threshold:0},children:r.Children.only(e)})})}}function b(e){let t=(0,n.Hv)(),i=d(),s=(0,c.Z)(),a=(0,p.H0)(),{requestIdentifier:l=""}=(0,o.B)(),u={app_instance_id:l.slice(0,8),...e.auxData??{}};return(0,r.useEffect)(()=>{s?.setHistoryStackContext(t)},[t,s]),(0,r.useEffect)(()=>{s?.setPins(a??{})},[a,s]),s?(0,h.jsx)(f,{...e,auxData:u,timeSpentContext:i,timeSpentManager:s,children:e.children}):e.children}b.displayName="TimeSpent";let v=b},503325:(e,t,i)=>{i.d(t,{Z:()=>a});var r=i(172045),s=i(17314);function n(e,t,i){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:String(r))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let o="undefined"!=typeof window&&window.performance&&window.performance.now?()=>Math.floor(1e6*window.performance.now()):()=>1e6*Date.now(),a=class{constructor(e){n(this,"start",()=>(this.startTime=o(),this.startTime)),n(this,"end",()=>(this.endTime=o(),this.duration=this.startTime?this.endTime-this.startTime:null,this.duration));try{this.uuid=(0,r.Z)()}catch(e){this.uuid=(0,s.Z)()}e&&Object.assign(this,e)}}},28449:(e,t,i)=>{i.d(t,{$:()=>r,Z:()=>n});let{Provider:r,useMaybeHook:s}=(0,i(342513).Z)("TimeSpentManagerContext"),n=s},446653:(e,t,i)=>{i.d(t,{r:()=>_,K:()=>y});var r=i(667294),s=i(342513),n=i(340523),o=i(757640),a=i(149722),l=i(998577),u=i(573810),d=i(325362);let c=e=>{let t={};for(let i in e)Object.prototype.hasOwnProperty.call(e,i)&&("object"!=typeof e[i]||null===e[i]||Array.isArray(e[i])?t[(0,d.Z)(i)]=e[i]:t[(0,d.Z)(i)]=c(e[i]));return t},p=(e,t)=>{let i=[];for(let r in e)r!==t&&i.push({id:r,...c(e[r])});let r=i.sort(({user:{businessName:e}},{user:{businessName:t}})=>e.localeCompare(t)),s=new Map;for(let e of r)s.set(e.id,e);return s},h={profiles:new Map,headerVisible:!1,orbacVisibility:!1,activeProfile:void 0,disableProfileChanger:!1},m=(e,t)=>{switch(t.type){case"LOAD_PROFILES":return{...e,profiles:t.payload};case"SET_ACTIVE_PROFILE":return{...e,activeProfile:t.payload};case"TOGGLE_HEADER_VISIBILITY":return{...e,headerVisible:t.payload};case"TOGGLE_ORBAC_VISIBILITY":return{...e,orbacVisibility:t.payload};case"TOGGLE_DISABLE_PROFILE_CHANGER":return{...e,disableProfileChanger:t.payload};default:return e}},f=({dispatch:e,isEnabled:t,state:i})=>{let{orbacVisibility:s,disableProfileChanger:n,headerVisible:o}=i,a=(0,r.useCallback)(i=>{t&&e({type:"SET_ACTIVE_PROFILE",payload:i})},[t,e]);return{changeProfile:a,toggleORBACVisibility:(0,r.useCallback)(i=>{t&&e({type:"TOGGLE_ORBAC_VISIBILITY",payload:i??!s})},[t,e,s]),toggleDisableProfileChanger:(0,r.useCallback)(i=>{t&&e({type:"TOGGLE_DISABLE_PROFILE_CHANGER",payload:i??!n})},[t,e,n]),toggleHeaderVisibility:(0,r.useCallback)(i=>{t&&e({type:"TOGGLE_HEADER_VISIBILITY",payload:i??!o})},[t,e,o])}},b=e=>{let[t,i]=(0,r.useReducer)(m,h),s=f({dispatch:i,isEnabled:e,state:t}),{activeProfile:n,orbacVisibility:o}=t;return(0,r.useEffect)(()=>{let e=(0,u.qn)("orbacActiveProfile",!1);e&&i({type:"SET_ACTIVE_PROFILE",payload:e})},[]),(0,r.useEffect)(()=>{let e=(0,u.qn)("orbacVisibilty",!1);e&&i({type:"TOGGLE_ORBAC_VISIBILITY",payload:e})},[]),(0,r.useEffect)(()=>{(0,u.Nh)("orbacVisibility",o)},[o]),(0,r.useEffect)(()=>{(0,u.Nh)("orbacActiveProfile",n)},[n]),{state:t,actions:s,receiveProfiles:(0,r.useCallback)((e,t)=>{i({type:"LOAD_PROFILES",payload:p(e,t)})},[i])}};var v=i(785893);let{Provider:g,useMaybeHook:y}=(0,s.Z)("RoleBasedAccessControlContext"),_=({children:e})=>{let t;let{checkExperiment:i}=(0,n.F)(),s=(0,a.Z)(),u=!!(s.isAuth&&s.isPartner&&i("web_m10n_business_access_orbac_www").anyEnabled),{state:d,actions:c,receiveProfiles:p}=b(u),{activeProfile:h,headerVisible:m,profiles:f=[]}=d,y=f?Array.from(f.values()):[],_=(0,l.Z)(y),C=!!s.isAuth&&y.length>0&&_,w=s.isAuth?s.id:"",E=s.isAuth?s.username:"",{changeProfile:P,toggleORBACVisibility:A,toggleDisableProfileChanger:I,toggleHeaderVisibility:T}=c;(0,r.useEffect)(()=>{if(u){if("string"==typeof _){P(_);return}h||P(w)}},[_,w,u,P,h]),(0,r.useEffect)(()=>{u&&(C&&!m&&T(!0),!C&&m&&T(!1))},[T,C,u,m,f]);let{data:S}=(0,o.Z)(u?{name:"ApiResource",options:{url:"/vx/business_access/profiles/",disable_auth_failure_redirect:!0}}:null),O=S?.profiles;s&&s.isAuth&&d.activeProfile===s.id?t={id:s.id,permissions:["OWNER"],user:{username:E,businessName:s.fullName,imgUrl:s.imageSmallUrl}}:h&&d.profiles&&(t=d.profiles.get(h)),(0,r.useEffect)(()=>{O&&p(O,w)},[p,O,w]);let L=d.profiles?Array.from(d.profiles.values()):[];return(0,v.jsx)(g,{value:{profiles:L,headerVisible:d.headerVisible,activeProfile:t,changeProfile:P,toggleORBACVisibility:A,toggleDisableProfileChanger:I,toggleHeaderVisibility:T},children:e})}},785059:(e,t,i)=>{i.d(t,{Z:()=>o});var r=i(340523),s=i(446653),n=i(998577);let o=()=>{let{checkExperiment:e}=(0,r.F)(),t=(0,s.K)(),{activeProfile:i}=t||{},o=e("web_m10n_business_access_orbac_www").anyEnabled,a=(0,n.Z)(t?.profiles||[]),{anyEnabled:l}=e("useorbacroutematcher_in_useorbacactingas");return o&&(!l||a)&&i&&(i.viewerMeetsMfaRequirement||(i.permissions||[]).includes("OWNER"))?i:Object.freeze({})}},998577:(e,t,i)=>{i.d(t,{Z:()=>l});var r=i(616550),s=i(96157),n=i(340523),o=i(149722),a=i(19447);let l=e=>{let t=(0,r.TH)(),i=(0,o.Z)(),l=(0,a.S6)(),{anyEnabled:u}=(0,n.F)().checkExperiment("web_m10n_business_access_orbac_www"),d=(0,r.$B)("/:username"),c=d?.params?.username,p=(0,r.$B)("/pin/:id"),h=!!p?.params?.id&&l(p.params.id)?.pinner?.id;if((0,s.ej)(t))return!1;if((0,s.RU)(t))return!0;if((0,s.mY)(t))return u;let m=e.concat(i.isAuth?{user:{username:i.username},id:i.id}:{}).find(e=>{let{user:t={},id:i}=e||{},{username:r}=t;return(!!r&&!!c||!!h&&!!i)&&(r===c||h===i)});return!!m&&m.id}},199677:(e,t,i)=>{i.d(t,{D3:()=>u,DX:()=>a,KY:()=>d,Ms:()=>r,N1:()=>c,_P:()=>o,lJ:()=>n,nl:()=>s,q6:()=>l});let r=(e,t)=>{let i=e&&e.isAuth?e.username:"";return e&&t&&t.user&&t.user.username&&(i=t.user.username),i},s=(e,t)=>!!(t&&t.user&&e&&e.isAuth&&t.id!==e.id?t.user.eligibleForStlTool:e&&e.isAuth&&e.eligibleForStlTool),n=(e,t)=>e&&e.isAuth&&t&&t.id&&t.id!==e.id?t.id:"",o=(e,t,i)=>i&&i.user&&t&&t.isAuth&&i.id!==t.id?i.user.merchantId:e.advertiser?.merchant_id,a=(e,t,i)=>i&&i.user&&e.isAuth&&i.id!==e.id?i.user.scheduledPinCount||0:e.isAuth&&t&&t.scheduled_pin_count||0,l=(e,t,i)=>!!(e&&e.isAuth&&i&&i.id&&i.id!==e.id&&i.id===t),u=(e,t,i)=>!!(l(e,t,i)||e&&e.isAuth&&t===e.id),d=(e,t,i)=>u(e,t&&t.owner&&t.owner.id||"",i);function c(e,t,i){return u(e,t?t.id:"",i)}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/38575-e1045003356f2932.mjs.map