/*!
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2021 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
 */
"use strict";(self["webpackChunkswift_docc_render"]=self["webpackChunkswift_docc_render"]||[]).push([[843],{7214:function(t,e,n){n.d(e,{Z:function(){return u}});var i=function(){var t=this,e=t._self._c;return e("SVGIcon",{staticClass:"download-icon",attrs:{viewBox:"0 0 14 14",themeId:"download"}},[e("path",{attrs:{d:"M7 0.5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5zM7 1.5c-3.038 0-5.5 2.462-5.5 5.5s2.462 5.5 5.5 5.5c3.038 0 5.5-2.462 5.5-5.5s-2.462-5.5-5.5-5.5z"}}),e("path",{attrs:{d:"M7.51 2.964l-0.001 5.431 1.308-2.041 0.842 0.539-2.664 4.162-2.633-4.164 0.845-0.534 1.303 2.059 0.001-5.452z"}})])},s=[],o=n(9742),a={name:"DownloadIcon",components:{SVGIcon:o.Z}},r=a,l=n(1001),c=(0,l.Z)(r,i,s,!1,null,null,null),u=c.exports},7181:function(t,e,n){n.d(e,{Z:function(){return u}});var i=function(){var t=this,e=t._self._c;return e("SVGIcon",{staticClass:"inline-close-icon",attrs:{viewBox:"0 0 14 14",themeId:"inline-close"}},[e("path",{attrs:{d:"M11.91 1l1.090 1.090-4.917 4.915 4.906 4.905-1.090 1.090-4.906-4.905-4.892 4.894-1.090-1.090 4.892-4.894-4.903-4.904 1.090-1.090 4.903 4.904z"}})])},s=[],o=n(9742),a={name:"InlineCloseIcon",components:{SVGIcon:o.Z}},r=a,l=n(1001),c=(0,l.Z)(r,i,s,!1,null,null,null),u=c.exports},2573:function(t,e,n){n.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("router-link",{staticClass:"nav-title-content",attrs:{to:t.to}},[e("span",{staticClass:"title"},[t._t("default")],2),e("span",{staticClass:"subhead"},[t._v(" "),t._t("subhead")],2)])},s=[],o={name:"NavTitleContainer",props:{to:{type:[String,Object],required:!0}}},a=o,r=n(1001),l=(0,r.Z)(a,i,s,!1,null,"854b4dd6",null),c=l.exports},9732:function(t,e,n){n.d(e,{Z:function(){return c}});var i,s,o={name:"TransitionExpand",functional:!0,render(t,e){const n={props:{name:"expand"},on:{afterEnter(t){t.style.height="auto"},enter(t){const{width:e}=getComputedStyle(t);t.style.width=e,t.style.position="absolute",t.style.visibility="hidden",t.style.height="auto";const{height:n}=getComputedStyle(t);t.style.width=null,t.style.position=null,t.style.visibility=null,t.style.height=0,getComputedStyle(t).height,requestAnimationFrame((()=>{t.style.height=n}))},leave(t){const{height:e}=getComputedStyle(t);t.style.height=e,getComputedStyle(t).height,requestAnimationFrame((()=>{t.style.height=0}))}}};return t("transition",n,e.children)}},a=o,r=n(1001),l=(0,r.Z)(a,i,s,!1,null,null,null),c=l.exports},578:function(t,e,n){n.r(e),n.d(e,{default:function(){return Ee}});var i=function(){var t=this,e=t._self._c;return t.topicData?e("Overview",t._b({key:t.topicKey},"Overview",t.overviewProps,!1)):t._e()},s=[],o=n(8841),a=n(1789),r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tutorials-overview"},[t.isTargetIDE?t._e():e("Nav",{staticClass:"theme-dark",attrs:{sections:t.otherSections}},[t._v(" "+t._s(t.title)+" ")]),e("main",{staticClass:"main",attrs:{id:"app-main",tabindex:"0"}},[e("div",{staticClass:"radial-gradient"},[t._t("above-hero"),t.heroSection?e("Hero",{attrs:{action:t.heroSection.action,content:t.heroSection.content,estimatedTime:t.metadata.estimatedTime,image:t.heroSection.image,title:t.heroSection.title}}):t._e()],2),t.otherSections.length>0?e("LearningPath",{attrs:{sections:t.otherSections}}):t._e()],1)],1)},l=[],c=n(4030),u={state:{activeTutorialLink:null,activeVolume:null,references:{}},reset(){this.state.activeTutorialLink=null,this.state.activeVolume=null,this.state.references={}},setActiveSidebarLink(t){this.state.activeTutorialLink=t},setActiveVolume(t){this.state.activeVolume=t},setReferences(t){this.state.references=t}},m=function(){var t=this,e=t._self._c;return e("NavBase",{scopedSlots:t._u([{key:"menu-items",fn:function(){return[e("NavMenuItemBase",{staticClass:"in-page-navigation"},[e("TutorialsNavigation",{attrs:{sections:t.sections}})],1),t._t("menu-items")]},proxy:!0}],null,!0)},[e("NavTitleContainer",{attrs:{to:t.buildUrl(t.$route.path,t.$route.query)},scopedSlots:t._u([{key:"default",fn:function(){return[t._t("default")]},proxy:!0},{key:"subhead",fn:function(){return[t._v(t._s(t.$tc("tutorials.title",2)))]},proxy:!0}],null,!0)})],1)},d=[],p=n(2586),h=function(){var t=this,e=t._self._c;return e("nav",{staticClass:"tutorials-navigation"},[e("TutorialsNavigationList",t._l(t.sections,(function(n,i){return e("li",{key:`${n.name}_${i}`,class:t.sectionClasses(n)},[t.isVolume(n)?e(t.componentForVolume(n),t._b({tag:"component",on:{"select-menu":t.onSelectMenu,"deselect-menu":t.onDeselectMenu}},"component",t.propsForVolume(n),!1),t._l(n.chapters,(function(n){return e("li",{key:n.name},[e("TutorialsNavigationLink",[t._v(" "+t._s(n.name)+" ")])],1)})),0):t.isResources(n)?e("TutorialsNavigationLink",[t._v(" "+t._s(t.$t("sections.resources"))+" ")]):t._e()],1)})),0)],1)},v=[],f=function(){var t=this,e=t._self._c;return e("router-link",{staticClass:"tutorials-navigation-link",class:{active:t.active},attrs:{to:t.fragment},nativeOn:{click:function(e){return t.handleFocusAndScroll(t.fragment.hash)}}},[t._t("default")],2)},_=[],g=n(3208),C=n(3704),y={name:"TutorialsNavigationLink",mixins:[C.Z],inject:{store:{default:()=>({state:{}})}},data(){return{state:this.store.state}},computed:{active:({state:{activeTutorialLink:t},text:e})=>e===t,fragment:({text:t,$route:e})=>({hash:(0,g.HA)(t),query:e.query}),text:({$slots:{default:[{text:t}]}})=>t.trim()}},b=y,T=n(1001),S=(0,T.Z)(b,f,_,!1,null,"e9f9b59c",null),k=S.exports,V=function(){var t=this,e=t._self._c;return e("ol",{staticClass:"tutorials-navigation-list"},[t._t("default")],2)},Z=[],x={name:"TutorialsNavigationList"},I=x,N=(0,T.Z)(I,V,Z,!1,null,"4e0180fa",null),A=N.exports,w=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tutorials-navigation-menu",class:{collapsed:t.collapsed}},[e("button",{staticClass:"toggle",attrs:{"aria-expanded":t.collapsed?"false":"true",type:"button"},on:{click:function(e){return e.stopPropagation(),t.onClick.apply(null,arguments)}}},[e("span",{staticClass:"text"},[t._v(t._s(t.title))]),e("InlineCloseIcon",{staticClass:"toggle-icon icon-inline"})],1),e("transition-expand",[t.collapsed?t._e():e("div",{staticClass:"tutorials-navigation-menu-content"},[e("TutorialsNavigationList",{attrs:{"aria-label":t.$t("tutorials.nav.chapters")}},[t._t("default")],2)],1)])],1)},q=[],$=n(7181),L=n(9732),M={name:"TutorialsNavigationMenu",components:{InlineCloseIcon:$.Z,TransitionExpand:L.Z,TutorialsNavigationList:A},props:{collapsed:{type:Boolean,default:!0},title:{type:String,required:!0}},methods:{onClick(){this.collapsed?this.$emit("select-menu",this.title):this.$emit("deselect-menu")}}},D=M,F=(0,T.Z)(D,w,q,!1,null,"489416f8",null),R=F.exports;const O={resources:"resources",volume:"volume"};var j={name:"TutorialsNavigation",components:{TutorialsNavigationLink:k,TutorialsNavigationList:A,TutorialsNavigationMenu:R},constants:{SectionKind:O},inject:{store:{default:()=>({setActiveVolume(){}})}},data(){return{state:this.store.state}},props:{sections:{type:Array,required:!0}},computed:{activeVolume:({state:t})=>t.activeVolume},methods:{sectionClasses(t){return{volume:this.isVolume(t),"volume--named":this.isNamedVolume(t),resource:this.isResources(t)}},componentForVolume:({name:t})=>t?R:A,isResources:({kind:t})=>t===O.resources,isVolume:({kind:t})=>t===O.volume,activateFirstNamedVolume(){const{isNamedVolume:t,sections:e}=this,n=e.find(t);n&&this.store.setActiveVolume(n.name)},isNamedVolume(t){return this.isVolume(t)&&t.name},onDeselectMenu(){this.store.setActiveVolume(null)},onSelectMenu(t){this.store.setActiveVolume(t)},propsForVolume({name:t}){const{activeVolume:e}=this;return t?{collapsed:t!==e,title:t}:{"aria-label":"Chapters"}}},created(){this.activateFirstNamedVolume()}},B=j,G=(0,T.Z)(B,h,v,!1,null,"79093ed6",null),H=G.exports,z=n(2573),P=n(2449),E=n(535);const U={resources:"resources",volume:"volume"};var K={name:"Nav",constants:{SectionKind:U},components:{NavMenuItemBase:E.Z,NavTitleContainer:z.Z,TutorialsNavigation:H,NavBase:p.Z},props:{sections:{type:Array,require:!0}},methods:{buildUrl:P.Q2}},Q=K,J=(0,T.Z)(Q,m,d,!1,null,"54bcce6d",null),W=J.exports,X=n(2974),Y=function(){var t=this,e=t._self._c;return e("section",{staticClass:"hero"},[e("div",{staticClass:"copy-container"},[e("h1",{staticClass:"title"},[t._v(t._s(t.title))]),t.content?e("ContentNode",{attrs:{content:t.content}}):t._e(),t.estimatedTime?e("p",{staticClass:"meta"},[e("TimerIcon"),e("span",{staticClass:"meta-content"},[e("strong",{staticClass:"time"},[t._v(t._s(t.estimatedTime))]),e("span",[t._v(" "+t._s(t.$t("tutorials.estimated-time")))])])],1):t._e(),t.action?e("CallToActionButton",{attrs:{action:t.action,"aria-label":t.$t("tutorials.overriding-title",{newTitle:t.action.overridingTitle,title:t.title}),isDark:""}}):t._e()],1),t.image?e("Asset",{attrs:{identifier:t.image}}):t._e()],1)},tt=[],et=n(4655),nt=n(7605),it=n(3040),st=function(){var t=this,e=t._self._c;return e("SVGIcon",{staticClass:"timer-icon",attrs:{viewBox:"0 0 14 14",themeId:"timer"}},[e("path",{attrs:{d:"M7 0.5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5c-3.59 0-6.5-2.91-6.5-6.5v0c0-3.59 2.91-6.5 6.5-6.5v0zM7 2c-2.761 0-5 2.239-5 5s2.239 5 5 5c2.761 0 5-2.239 5-5v0c0-2.761-2.239-5-5-5v0z"}}),e("path",{attrs:{d:"M6.51 3.51h1.5v3.5h-1.5v-3.5z"}}),e("path",{attrs:{d:"M6.51 7.010h4v1.5h-4v-1.5z"}})])},ot=[],at=n(9742),rt={name:"TimerIcon",components:{SVGIcon:at.Z}},lt=rt,ct=(0,T.Z)(lt,st,ot,!1,null,null,null),ut=ct.exports,mt={name:"Hero",components:{Asset:et.Z,CallToActionButton:nt.Z,ContentNode:it["default"],TimerIcon:ut},props:{action:{type:Object,required:!1},content:{type:Array,required:!1},estimatedTime:{type:String,required:!1},image:{type:String,required:!1},title:{type:String,required:!0}}},dt=mt,pt=(0,T.Z)(dt,Y,tt,!1,null,"383dab71",null),ht=pt.exports,vt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"learning-path",class:t.classes},[e("div",{staticClass:"main-container"},[t.isTargetIDE?t._e():e("div",{staticClass:"secondary-content-container"},[e("TutorialsNavigation",{attrs:{sections:t.sections,"aria-label":t.$t("sections.on-this-page")}})],1),e("div",{staticClass:"primary-content-container"},[e("div",{staticClass:"content-sections-container"},[t._l(t.volumes,(function(n,i){return e("Volume",t._b({key:`volume_${i}`,staticClass:"content-section"},"Volume",t.propsFor(n),!1))})),t._l(t.otherSections,(function(n,i){return e(t.componentFor(n),t._b({key:`resource_${i}`,tag:"component",staticClass:"content-section"},"component",t.propsFor(n),!1))}))],2)])])])},ft=[],_t=function(){var t=this,e=t._self._c;return e("section",{staticClass:"resources",attrs:{id:"resources",tabindex:"-1"}},[e("VolumeName",{attrs:{name:t.$t("sections.resources"),content:t.content}}),e("TileGroup",{attrs:{tiles:t.tiles}})],1)},gt=[],Ct=n(9146);const yt={topOneThird:"-30% 0% -70% 0%",center:"-50% 0% -50% 0%"};var bt={mixins:[Ct["default"]],computed:{intersectionRoot(){return null},intersectionRootMargin(){return yt.center}},methods:{onIntersect(t){if(!t.isIntersecting)return;const e=this.onIntersectViewport;e?e():console.warn("onIntersectViewportCenter not implemented")}}},Tt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"volume-name"},[t.image?e("Asset",{staticClass:"image",attrs:{identifier:t.image,"aria-hidden":"true"}}):t._e(),e("h2",{staticClass:"name"},[t._v(" "+t._s(t.name)+" ")]),t.content?e("ContentNode",{attrs:{content:t.content}}):t._e()],1)},St=[],kt={name:"VolumeName",components:{ContentNode:it["default"],Asset:et.Z},props:{image:{type:String,required:!1},content:{type:Array,required:!1},name:{type:String,required:!1}}},Vt=kt,Zt=(0,T.Z)(Vt,Tt,St,!1,null,"569db166",null),xt=Zt.exports,It=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tile-group",class:t.countClass},t._l(t.tiles,(function(n){return e("Tile",t._b({key:n.title},"Tile",t.propsFor(n),!1))})),1)},Nt=[],At=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tile"},[t.identifier?e("div",{staticClass:"icon"},[e(t.iconComponent,{tag:"component"})],1):t._e(),e("div",{staticClass:"title"},[t._v(t._s(t.title))]),e("ContentNode",{attrs:{content:t.content}}),t.action?e("DestinationDataProvider",{attrs:{destination:t.action},scopedSlots:t._u([{key:"default",fn:function({url:n,title:i}){return[e("Reference",{staticClass:"link",attrs:{url:n}},[t._v(" "+t._s(i)+" "),e("InlineChevronRightIcon",{staticClass:"link-icon icon-inline"})],1)]}}],null,!1,2081312588)}):t._e()],1)},wt=[],qt=n(7775),$t=function(){var t=this,e=t._self._c;return e("SVGIcon",{staticClass:"document-icon",attrs:{viewBox:"0 0 14 14",themeId:"document"}},[e("path",{attrs:{d:"M11.2,5.3,8,2l-.1-.1H2.8V12.1h8.5V6.3l-.1-1ZM8,3.2l2,2.1H8Zm2.4,8H3.6V2.8H7V6.3h3.4Z"}})])},Lt=[],Mt={name:"DocumentIcon",components:{SVGIcon:at.Z}},Dt=Mt,Ft=(0,T.Z)(Dt,$t,Lt,!1,null,"3a80772b",null),Rt=Ft.exports,Ot=n(7214),jt=function(){var t=this,e=t._self._c;return e("SVGIcon",{staticClass:"forum-icon",attrs:{viewBox:"0 0 14 14",themeId:"forum"}},[e("path",{attrs:{d:"M13 1v9h-7l-1.5 3-1.5-3h-2v-9zM12 2h-10v7h1.616l0.884 1.763 0.88-1.763h6.62z"}}),e("path",{attrs:{d:"M3 4h8.001v1h-8.001v-1z"}}),e("path",{attrs:{d:"M3 6h8.001v1h-8.001v-1z"}})])},Bt=[],Gt={name:"ForumIcon",components:{SVGIcon:at.Z}},Ht=Gt,zt=(0,T.Z)(Ht,jt,Bt,!1,null,null,null),Pt=zt.exports,Et=n(6698),Ut=n(4260),Kt=n(8785),Qt=n(1295);const Jt={documentation:"documentation",downloads:"downloads",featured:"featured",forums:"forums",sampleCode:"sampleCode",videos:"videos"};var Wt={name:"Tile",constants:{Identifier:Jt},components:{DestinationDataProvider:Qt.Z,InlineChevronRightIcon:Kt.Z,ContentNode:it["default"],CurlyBracketsIcon:qt.Z,DocumentIcon:Rt,DownloadIcon:Ot.Z,ForumIcon:Pt,PlayIcon:Et.Z,Reference:Ut.Z},props:{action:{type:Object,required:!1},content:{type:Array,required:!0},identifier:{type:String,required:!1},title:{type:String,require:!0}},computed:{iconComponent:({identifier:t})=>({[Jt.documentation]:Rt,[Jt.downloads]:Ot.Z,[Jt.forums]:Pt,[Jt.sampleCode]:qt.Z,[Jt.videos]:Et.Z}[t])}},Xt=Wt,Yt=(0,T.Z)(Xt,At,wt,!1,null,"74dbeb68",null),te=Yt.exports,ee={name:"TileGroup",components:{Tile:te},props:{tiles:{type:Array,required:!0}},computed:{countClass:({tiles:t})=>`count-${t.length}`},methods:{propsFor:({action:t,content:e,identifier:n,title:i})=>({action:t,content:e,identifier:n,title:i})}},ne=ee,ie=(0,T.Z)(ne,It,Nt,!1,null,"4cacce0a",null),se=ie.exports,oe={name:"Resources",mixins:[bt],inject:{store:{default:()=>({setActiveSidebarLink(){},setActiveVolume(){}})}},components:{VolumeName:xt,TileGroup:se},computed:{intersectionRootMargin:()=>yt.topOneThird},props:{content:{type:Array,required:!1},tiles:{type:Array,required:!0}},methods:{onIntersectViewport(){this.store.setActiveSidebarLink("Resources"),this.store.setActiveVolume(null)}}},ae=oe,re=(0,T.Z)(ae,_t,gt,!1,null,"7f8022c1",null),le=re.exports,ce=function(){var t=this,e=t._self._c;return e("section",{staticClass:"volume"},[t.name?e("VolumeName",t._b({},"VolumeName",{name:t.name,image:t.image,content:t.content},!1)):t._e(),t._l(t.chapters,(function(n,i){return e("Chapter",{key:n.name,staticClass:"tile",attrs:{content:n.content,image:n.image,name:n.name,number:i+1,topics:t.lookupTopics(n.tutorials),volumeHasName:!!t.name}})}))],2)},ue=[],me=function(){var t=this,e=t._self._c;return e("section",{staticClass:"chapter",attrs:{id:t.anchor,tabindex:"-1"}},[e("div",{staticClass:"info"},[e("Asset",{attrs:{identifier:t.image,"aria-hidden":"true"}}),e("div",{staticClass:"intro"},[e(t.volumeHasName?"h3":"h2",{tag:"component",staticClass:"name",attrs:{"aria-label":`${t.name} - ${t.$tc("tutorials.sections.chapter",{number:t.number})}`}},[e("span",{staticClass:"eyebrow",attrs:{"aria-hidden":"true"}},[t._v(" "+t._s(t.$t("tutorials.sections.chapter",{number:t.number}))+" ")]),e("span",{staticClass:"name-text",attrs:{"aria-hidden":"true"}},[t._v(t._s(t.name))])]),t.content?e("ContentNode",{attrs:{content:t.content}}):t._e()],1)],1),e("TopicList",{attrs:{topics:t.topics}})],1)},de=[],pe=function(){var t=this,e=t._self._c;return e("ol",{staticClass:"topic-list"},t._l(t.topics,(function(n){return e("li",{key:n.url,staticClass:"topic",class:[t.kindClassFor(n),{"no-time-estimate":!n.estimatedTime}]},[e("div",{staticClass:"topic-icon"},[e(t.iconComponent(n),{tag:"component"})],1),e("router-link",{staticClass:"container",attrs:{to:t.buildUrl(n.url,t.$route.query),"aria-label":t.ariaLabelFor(n)}},[e("div",{staticClass:"link"},[t._v(t._s(n.title))]),n.estimatedTime?e("div",{staticClass:"time"},[e("TimerIcon"),e("span",{staticClass:"time-label"},[t._v(t._s(n.estimatedTime))])],1):t._e()])],1)})),0)},he=[],ve=n(5692),fe=n(8638);const _e={article:"article",tutorial:"project"},ge={article:"article",tutorial:"tutorial"},Ce={[_e.article]:"Article",[_e.tutorial]:"Tutorial"};var ye={name:"ChapterTopicList",components:{TimerIcon:ut},constants:{TopicKind:_e,TopicKindClass:ge,TopicKindIconLabel:Ce},props:{topics:{type:Array,required:!0}},methods:{buildUrl:P.Q2,iconComponent:({kind:t})=>({[_e.article]:ve.Z,[_e.tutorial]:fe.Z}[t]),kindClassFor:({kind:t})=>({[_e.article]:ge.article,[_e.tutorial]:ge.tutorial}[t]),formatTime(t){return t.replace("min",` ${this.$t("tutorials.time.minutes.full")}`).replace("hrs",` ${this.$t("tutorials.time.hours.full")}`)},ariaLabelFor(t){const{title:e,estimatedTime:n,kind:i}=t,s=[e,Ce[i]];return n&&s.push(`${this.formatTime(n)} ${this.$t("tutorials.estimated-time")}`),s.join(" - ")}}},be=ye,Te=(0,T.Z)(be,pe,he,!1,null,"0589dc3b",null),Se=Te.exports,ke={name:"Chapter",mixins:[bt],inject:{store:{default:()=>({setActiveSidebarLink(){},setActiveVolume(){}})}},components:{Asset:et.Z,ContentNode:it["default"],TopicList:Se},props:{content:{type:Array,required:!1},image:{type:String,required:!0},name:{type:String,required:!0},number:{type:Number,required:!0},topics:{type:Array,required:!0},volumeHasName:{type:Boolean,default:!1}},computed:{anchor:({name:t})=>(0,g.HA)(t),intersectionRootMargin:()=>yt.topOneThird},methods:{onIntersectViewport(){this.store.setActiveSidebarLink(this.name),this.volumeHasName||this.store.setActiveVolume(null)}}},Ve=ke,Ze=(0,T.Z)(Ve,me,de,!1,null,"7468bc5e",null),xe=Ze.exports,Ie={name:"Volume",mixins:[bt],components:{VolumeName:xt,Chapter:xe},computed:{references:({store:t})=>t.state.references,intersectionRootMargin:()=>yt.topOneThird},inject:{store:{default:()=>({setActiveVolume(){},state:{references:{}}})}},props:{chapters:{type:Array,required:!0},content:{type:Array,required:!1},image:{type:String,required:!1},name:{type:String,required:!1}},methods:{lookupTopics(t){return t.reduce(((t,e)=>t.concat(this.references[e]||[])),[])},onIntersectViewport(){this.name&&this.store.setActiveVolume(this.name)}}},Ne=Ie,Ae=(0,T.Z)(Ne,ce,ue,!1,null,"540dbf10",null),we=Ae.exports;const qe={resources:"resources",volume:"volume"};var $e={name:"LearningPath",components:{Resources:le,TutorialsNavigation:H,Volume:we},constants:{SectionKind:qe},inject:{isTargetIDE:{default:!1}},props:{sections:{type:Array,required:!0,validator:t=>t.every((t=>Object.prototype.hasOwnProperty.call(qe,t.kind)))}},computed:{classes:({isTargetIDE:t})=>({ide:t}),partitionedSections:({sections:t})=>t.reduce((([t,e],n)=>n.kind===qe.volume?[t.concat(n),e]:[t,e.concat(n)]),[[],[]]),volumes:({partitionedSections:t})=>t[0],otherSections:({partitionedSections:t})=>t[1]},methods:{componentFor:({kind:t})=>({[qe.resources]:le,[qe.volume]:we}[t]),propsFor:({chapters:t,content:e,image:n,kind:i,name:s,tiles:o})=>({[qe.resources]:{content:e,tiles:o},[qe.volume]:{chapters:t,content:e,image:n,name:s}}[i])}},Le=$e,Me=(0,T.Z)(Le,vt,ft,!1,null,"69a72bbc",null),De=Me.exports;const Fe={hero:"hero",resources:"resources",volume:"volume"};var Re={name:"TutorialsOverview",components:{Hero:ht,LearningPath:De,Nav:W},mixins:[X.Z],constants:{SectionKind:Fe},inject:{isTargetIDE:{default:!1}},props:{metadata:{type:Object,default:()=>({})},references:{type:Object,default:()=>({})},sections:{type:Array,default:()=>[],validator:t=>t.every((t=>Object.prototype.hasOwnProperty.call(Fe,t.kind)))}},computed:{pageTitle:({title:t})=>[t,"Tutorials"].filter(Boolean).join(" "),pageDescription:({heroSection:t,extractFirstParagraphText:e})=>t?e(t.content):null,partitionedSections:({sections:t})=>t.reduce((([t,e],n)=>n.kind===Fe.hero?[t.concat(n),e]:[t,e.concat(n)]),[[],[]]),heroSections:({partitionedSections:t})=>t[0],otherSections:({partitionedSections:t})=>t[1],heroSection:({heroSections:t})=>t[0],store:()=>u,title:({metadata:{category:t=""}})=>t},provide(){return{store:this.store}},created(){c["default"].setAvailableLocales(this.metadata.availableLocales),this.store.reset(),this.store.setReferences(this.references)},watch:{references(t){this.store.setReferences(t)},"metadata.availableLocales":function(t){c["default"].setAvailableLocales(t)}}},Oe=Re,je=(0,T.Z)(Oe,r,l,!1,null,"5381f0aa",null),Be=je.exports,Ge=n(5184),He={name:"TutorialsOverview",components:{Overview:Be},mixins:[a.Z,Ge.Z],data(){return{topicData:null}},computed:{overviewProps:({topicData:{metadata:t,references:e,sections:n}})=>({metadata:t,references:e,sections:n}),topicKey:({$route:t,topicData:e})=>[t.path,e.identifier.interfaceLanguage].join()},beforeRouteEnter(t,e,n){t.meta.skipFetchingData?n((t=>t.newContentMounted())):(0,o.Ek)(t,e,n).then((t=>n((e=>{e.topicData=t})))).catch(n)},beforeRouteUpdate(t,e,n){(0,o.Us)(t,e)?(0,o.Ek)(t,e,n).then((t=>{this.topicData=t,n()})).catch(n):n()},mounted(){this.$bridge.on("contentUpdate",this.handleContentUpdateFromBridge)},beforeDestroy(){this.$bridge.off("contentUpdate",this.handleContentUpdateFromBridge)},watch:{topicData(){this.$nextTick((()=>{this.newContentMounted()}))}}},ze=He,Pe=(0,T.Z)(ze,i,s,!1,null,null,null),Ee=Pe.exports}}]);