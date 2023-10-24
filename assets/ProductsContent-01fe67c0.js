import{_,o as h,c as d,e as p,f as l,d as V,w as D,T as E,n as $,g as u,h as c,i as y,j as f,v,k as C,p as B,q as O,t as b,s as m,b as H,u as G,r as P,x as S,y as F,z as K}from"./index-9926fd6b.js";import{P as N}from"./ProductsList-7bb85733.js";import{_ as R}from"./05284b30a1fda6bcdc09420b5c1e7127-2903c7b8.js";function L(e){return e===0?!1:Array.isArray(e)&&e.length===0?!0:!e}function j(e){return(...t)=>!e(...t)}function q(e,t){return e===void 0&&(e="undefined"),e===null&&(e="null"),e===!1&&(e="false"),e.toString().toLowerCase().indexOf(t.trim())!==-1}function T(e,t,s,r){return t?e.filter(o=>q(r(o,s),t)).sort((o,a)=>r(o,s).length-r(a,s).length):e}function z(e){return e.filter(t=>!t.$isLabel)}function k(e,t){return s=>s.reduce((r,o)=>o[e]&&o[e].length?(r.push({$groupLabel:o[t],$isLabel:!0}),r.concat(o[e])):r,[])}function I(e,t,s,r,o){return a=>a.map(i=>{if(!i[s])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];const n=T(i[s],e,t,o);return n.length?{[r]:i[r],[s]:n}:[]})}const A=(...e)=>t=>e.reduce((s,r)=>r(s),t),U={data(){return{search:"",isOpen:!1,preferredOpenDirection:"below",optimizedHeight:this.maxHeight}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default(e,t){return L(e)?"":t?e[t]:e}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},tagPosition:{type:String,default:"top"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},groupSelect:{type:Boolean,default:!1},blockKeys:{type:Array,default(){return[]}},preserveSearch:{type:Boolean,default:!1},preselectFirst:{type:Boolean,default:!1},preventAutofocus:{type:Boolean,default:!1}},mounted(){!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."),this.preselectFirst&&!this.internalValue.length&&this.options.length&&this.select(this.filteredOptions[0])},computed:{internalValue(){return this.modelValue||this.modelValue===0?Array.isArray(this.modelValue)?this.modelValue:[this.modelValue]:[]},filteredOptions(){const e=this.search||"",t=e.toLowerCase().trim();let s=this.options.concat();return this.internalSearch?s=this.groupValues?this.filterAndFlat(s,t,this.label):T(s,t,this.label,this.customLabel):s=this.groupValues?k(this.groupValues,this.groupLabel)(s):s,s=this.hideSelected?s.filter(j(this.isSelected)):s,this.taggable&&t.length&&!this.isExistingOption(t)&&(this.tagPosition==="bottom"?s.push({isTag:!0,label:e}):s.unshift({isTag:!0,label:e})),s.slice(0,this.optionsLimit)},valueKeys(){return this.trackBy?this.internalValue.map(e=>e[this.trackBy]):this.internalValue},optionKeys(){return(this.groupValues?this.flatAndStrip(this.options):this.options).map(t=>this.customLabel(t,this.label).toString().toLowerCase())},currentOptionLabel(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue.length?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue:{handler(){this.resetAfter&&this.internalValue.length&&(this.search="",this.$emit("update:modelValue",this.multiple?[]:null))},deep:!0},search(){this.$emit("search-change",this.search)}},emits:["open","search-change","close","select","update:modelValue","remove","tag"],methods:{getValue(){return this.multiple?this.internalValue:this.internalValue.length===0?null:this.internalValue[0]},filterAndFlat(e,t,s){return A(I(t,s,this.groupValues,this.groupLabel,this.customLabel),k(this.groupValues,this.groupLabel))(e)},flatAndStrip(e){return A(k(this.groupValues,this.groupLabel),z)(e)},updateSearch(e){this.search=e},isExistingOption(e){return this.options?this.optionKeys.indexOf(e)>-1:!1},isSelected(e){const t=this.trackBy?e[this.trackBy]:e;return this.valueKeys.indexOf(t)>-1},isOptionDisabled(e){return!!e.$isDisabled},getOptionLabel(e){if(L(e))return"";if(e.isTag)return e.label;if(e.$isLabel)return e.$groupLabel;const t=this.customLabel(e,this.label);return L(t)?"":t},select(e,t){if(e.$isLabel&&this.groupSelect){this.selectGroup(e);return}this.blockKeys.indexOf(t)!==-1||this.disabled||e.$isDisabled||e.$isLabel||this.max&&this.multiple&&this.internalValue.length===this.max||t==="Tab"&&!this.pointerDirty||(e.isTag?(this.$emit("tag",e.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate()):(this.multiple?this.$emit("update:modelValue",this.internalValue.concat([e])):this.$emit("update:modelValue",e),this.$emit("select",e,this.id),this.clearOnSelect&&(this.search="")),this.closeOnSelect&&this.deactivate())},selectGroup(e){const t=this.options.find(s=>s[this.groupLabel]===e.$groupLabel);if(t){if(this.wholeGroupSelected(t)){this.$emit("remove",t[this.groupValues],this.id);const s=this.internalValue.filter(r=>t[this.groupValues].indexOf(r)===-1);this.$emit("update:modelValue",s)}else{const s=t[this.groupValues].filter(r=>!(this.isOptionDisabled(r)||this.isSelected(r)));this.max&&s.splice(this.max-this.internalValue.length),this.$emit("select",s,this.id),this.$emit("update:modelValue",this.internalValue.concat(s))}this.closeOnSelect&&this.deactivate()}},wholeGroupSelected(e){return e[this.groupValues].every(t=>this.isSelected(t)||this.isOptionDisabled(t))},wholeGroupDisabled(e){return e[this.groupValues].every(this.isOptionDisabled)},removeElement(e,t=!0){if(this.disabled||e.$isDisabled)return;if(!this.allowEmpty&&this.internalValue.length<=1){this.deactivate();return}const s=typeof e=="object"?this.valueKeys.indexOf(e[this.trackBy]):this.valueKeys.indexOf(e);if(this.multiple){const r=this.internalValue.slice(0,s).concat(this.internalValue.slice(s+1));this.$emit("update:modelValue",r)}else this.$emit("update:modelValue",null);this.$emit("remove",e,this.id),this.closeOnSelect&&t&&this.deactivate()},removeLastElement(){this.blockKeys.indexOf("Delete")===-1&&this.search.length===0&&Array.isArray(this.internalValue)&&this.internalValue.length&&this.removeElement(this.internalValue[this.internalValue.length-1],!1)},activate(){this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&this.pointer===0&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.preventAutofocus||this.$nextTick(()=>this.$refs.search&&this.$refs.search.focus())):this.preventAutofocus||typeof this.$el<"u"&&this.$el.focus(),this.$emit("open",this.id))},deactivate(){this.isOpen&&(this.isOpen=!1,this.searchable?typeof this.$refs.search<"u"&&this.$refs.search.blur():typeof this.$el<"u"&&this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id))},toggle(){this.isOpen?this.deactivate():this.activate()},adjustPosition(){if(typeof window>"u")return;const e=this.$el.getBoundingClientRect().top,t=window.innerHeight-this.$el.getBoundingClientRect().bottom;t>this.maxHeight||t>e||this.openDirection==="below"||this.openDirection==="bottom"?(this.preferredOpenDirection="below",this.optimizedHeight=Math.min(t-40,this.maxHeight)):(this.preferredOpenDirection="above",this.optimizedHeight=Math.min(e-40,this.maxHeight))}}},W={data(){return{pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition(){return this.pointer*this.optionHeight},visibleElements(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions(){this.pointerAdjust()},isOpen(){this.pointerDirty=!1},pointer(){this.$refs.search&&this.$refs.search.setAttribute("aria-activedescendant",this.id+"-"+this.pointer.toString())}},methods:{optionHighlight(e,t){//! 註解已選取的樣式
return{"multiselect__option--highlight":e===this.pointer&&this.showPointer}},groupHighlight(e,t){if(!this.groupSelect)return["multiselect__option--disabled",{"multiselect__option--group":t.$isLabel}];const s=this.options.find(r=>r[this.groupLabel]===t.$groupLabel);return s&&!this.wholeGroupDisabled(s)?["multiselect__option--group",{"multiselect__option--highlight":e===this.pointer&&this.showPointer},{"multiselect__option--group-selected":this.wholeGroupSelected(s)}]:"multiselect__option--disabled"},addPointerElement({key:e}="Enter"){this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],e),this.pointerReset()},pointerForward(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()),this.pointerDirty=!0},pointerBackward(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerBackward()):this.filteredOptions[this.pointer]&&this.filteredOptions[0].$isLabel&&!this.groupSelect&&this.pointerForward(),this.pointerDirty=!0},pointerReset(){this.closeOnSelect&&(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0))},pointerAdjust(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0),this.filteredOptions.length>0&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()},pointerSet(e){this.pointer=e,this.pointerDirty=!0}}};const J={name:"vue-multiselect",mixins:[U,W],compatConfig:{MODE:3,ATTR_ENUMERATED_COERCION:!1},props:{name:{type:String,default:""},modelValue:{type:null,default(){return[]}},selectLabel:{type:String,default:"Press enter to select"},selectGroupLabel:{type:String,default:"Press enter to select group"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},deselectGroupLabel:{type:String,default:"Press enter to deselect group"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:e=>`and ${e} more`},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoOptions:{type:Boolean,default:!0},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},computed:{hasOptionGroup(){return this.groupValues&&this.groupLabel&&this.groupSelect},isSingleLabelVisible(){return(this.singleValue||this.singleValue===0)&&(!this.isOpen||!this.searchable)&&!this.visibleValues.length},isPlaceholderVisible(){return!this.internalValue.length&&(!this.searchable||!this.isOpen)},visibleValues(){return this.multiple?this.internalValue.slice(0,this.limit):[]},singleValue(){return this.internalValue[0]},deselectLabelText(){return this.showLabels?this.deselectLabel:""},deselectGroupLabelText(){return this.showLabels?this.deselectGroupLabel:""},selectLabelText(){return this.showLabels?this.selectLabel:""},selectGroupLabelText(){return this.showLabels?this.selectGroupLabel:""},selectedLabelText(){return this.showLabels?this.selectedLabel:""},inputStyle(){return this.searchable||this.multiple&&this.modelValue&&this.modelValue.length?this.isOpen?{width:"100%"}:{width:"0",position:"absolute",padding:"0"}:""},contentStyle(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove(){return this.openDirection==="above"||this.openDirection==="top"?!0:this.openDirection==="below"||this.openDirection==="bottom"?!1:this.preferredOpenDirection==="above"},showSearchInput(){return this.searchable&&(this.hasSingleSelectedSlot&&(this.visibleSingleValue||this.visibleSingleValue===0)?this.isOpen:!0)}}},Q=["tabindex","aria-owns"],X={ref:"tags",class:"multiselect__tags"},Y={class:"multiselect__tags-wrap"},Z=["textContent"],x=["onKeypress","onMousedown"],ee=["textContent"],te={class:"multiselect__spinner"},se=["name","id","placeholder","value","disabled","tabindex","aria-controls"],ie=["id"],le={key:0},ne={class:"multiselect__option"},oe=["id","role"],re=["onClick","onMouseenter","data-select","data-selected","data-deselect"],ae=["data-select","data-deselect","onMouseenter","onMousedown"],ue={class:"multiselect__option"},he={class:"multiselect__option"};function de(e,t,s,r,o,a){return h(),d("div",{tabindex:e.searchable?-1:s.tabindex,class:O([{"multiselect--active":e.isOpen,"multiselect--disabled":s.disabled,"multiselect--above":a.isAbove,"multiselect--has-options-group":a.hasOptionGroup},"multiselect"]),onFocus:t[14]||(t[14]=i=>e.activate()),onBlur:t[15]||(t[15]=i=>e.searchable?!1:e.deactivate()),onKeydown:[t[16]||(t[16]=c(u(i=>e.pointerForward(),["self","prevent"]),["down"])),t[17]||(t[17]=c(u(i=>e.pointerBackward(),["self","prevent"]),["up"]))],onKeypress:t[18]||(t[18]=c(u(i=>e.addPointerElement(i),["stop","self"]),["enter","tab"])),onKeyup:t[19]||(t[19]=c(i=>e.deactivate(),["esc"])),role:"combobox","aria-owns":"listbox-"+e.id},[p(e.$slots,"caret",{toggle:e.toggle},()=>[l("div",{onMousedown:t[0]||(t[0]=u(i=>e.toggle(),["prevent","stop"])),class:"multiselect__select"},null,32)]),p(e.$slots,"clear",{search:e.search}),l("div",X,[p(e.$slots,"selection",{search:e.search,remove:e.removeElement,values:a.visibleValues,isOpen:e.isOpen},()=>[f(l("div",Y,[(h(!0),d(C,null,B(a.visibleValues,(i,n)=>(h(),d("div",{onMousedown:t[1]||(t[1]=u(()=>{},["prevent"])),key:n},[p(e.$slots,"tag",{option:i,search:e.search,remove:e.removeElement},()=>[(h(),d("span",{class:"multiselect__tag",key:n},[l("span",{textContent:b(e.getOptionLabel(i))},null,8,Z),l("i",{tabindex:"1",onKeypress:c(u(g=>e.removeElement(i),["prevent"]),["enter"]),onMousedown:u(g=>e.removeElement(i),["prevent"]),class:"multiselect__tag-icon"},null,40,x)]))])],32))),128))],512),[[v,a.visibleValues.length>0]]),e.internalValue&&e.internalValue.length>s.limit?p(e.$slots,"limit",{key:0},()=>[l("strong",{class:"multiselect__strong",textContent:b(s.limitText(e.internalValue.length-s.limit))},null,8,ee)]):y("",!0)]),V(E,{name:"multiselect__loading"},{default:D(()=>[p(e.$slots,"loading",{},()=>[f(l("div",te,null,512),[[v,s.loading]])])]),_:3}),e.searchable?(h(),d("input",{key:0,ref:"search",name:s.name,id:e.id,type:"text",autocomplete:"off",spellcheck:"false",placeholder:e.placeholder,style:$(a.inputStyle),value:e.search,disabled:s.disabled,tabindex:s.tabindex,onInput:t[2]||(t[2]=i=>e.updateSearch(i.target.value)),onFocus:t[3]||(t[3]=u(i=>e.activate(),["prevent"])),onBlur:t[4]||(t[4]=u(i=>e.deactivate(),["prevent"])),onKeyup:t[5]||(t[5]=c(i=>e.deactivate(),["esc"])),onKeydown:[t[6]||(t[6]=c(u(i=>e.pointerForward(),["prevent"]),["down"])),t[7]||(t[7]=c(u(i=>e.pointerBackward(),["prevent"]),["up"])),t[9]||(t[9]=c(u(i=>e.removeLastElement(),["stop"]),["delete"]))],onKeypress:t[8]||(t[8]=c(u(i=>e.addPointerElement(i),["prevent","stop","self"]),["enter"])),class:"multiselect__input","aria-controls":"listbox-"+e.id},null,44,se)):y("",!0),a.isSingleLabelVisible?(h(),d("span",{key:1,class:"multiselect__single",onMousedown:t[10]||(t[10]=u((...i)=>e.toggle&&e.toggle(...i),["prevent"]))},[p(e.$slots,"singleLabel",{option:a.singleValue},()=>[m(b(e.currentOptionLabel),1)])],32)):y("",!0),a.isPlaceholderVisible?(h(),d("span",{key:2,class:"multiselect__placeholder",onMousedown:t[11]||(t[11]=u((...i)=>e.toggle&&e.toggle(...i),["prevent"]))},[p(e.$slots,"placeholder",{},()=>[m(b(e.placeholder),1)])],32)):y("",!0)],512),V(E,{name:"multiselect"},{default:D(()=>[f(l("div",{class:"multiselect__content-wrapper",onFocus:t[12]||(t[12]=(...i)=>e.activate&&e.activate(...i)),tabindex:"-1",onMousedown:t[13]||(t[13]=u(()=>{},["prevent"])),style:$({maxHeight:e.optimizedHeight+"px"}),ref:"list"},[l("ul",{class:"multiselect__content",style:$(a.contentStyle),role:"listbox",id:"listbox-"+e.id},[p(e.$slots,"beforeList"),e.multiple&&e.max===e.internalValue.length?(h(),d("li",le,[l("span",ne,[p(e.$slots,"maxElements",{},()=>[m("Maximum of "+b(e.max)+" options selected. First remove a selected option to select another.",1)])])])):y("",!0),!e.max||e.internalValue.length<e.max?(h(!0),d(C,{key:1},B(e.filteredOptions,(i,n)=>(h(),d("li",{class:"multiselect__element",key:n,id:e.id+"-"+n,role:i&&(i.$isLabel||i.$isDisabled)?null:"option"},[i&&(i.$isLabel||i.$isDisabled)?y("",!0):(h(),d("span",{key:0,class:O([e.optionHighlight(n,i),"multiselect__option"]),onClick:u(g=>e.select(i),["stop"]),onMouseenter:u(g=>e.pointerSet(n),["self"]),"data-select":i&&i.isTag?e.tagPlaceholder:a.selectLabelText,"data-selected":a.selectedLabelText,"data-deselect":a.deselectLabelText},[p(e.$slots,"option",{option:i,search:e.search,index:n},()=>[l("span",null,b(e.getOptionLabel(i)),1)])],42,re)),i&&(i.$isLabel||i.$isDisabled)?(h(),d("span",{key:1,"data-select":e.groupSelect&&a.selectGroupLabelText,"data-deselect":e.groupSelect&&a.deselectGroupLabelText,class:O([e.groupHighlight(n,i),"multiselect__option"]),onMouseenter:u(g=>e.groupSelect&&e.pointerSet(n),["self"]),onMousedown:u(g=>e.selectGroup(i),["prevent"])},[p(e.$slots,"option",{option:i,search:e.search,index:n},()=>[l("span",null,b(e.getOptionLabel(i)),1)])],42,ae)):y("",!0)],8,oe))),128)):y("",!0),f(l("li",null,[l("span",ue,[p(e.$slots,"noResult",{search:e.search},()=>[m("No found query.🧐")])])],512),[[v,s.showNoResults&&e.filteredOptions.length===0&&e.search&&!s.loading]]),f(l("li",null,[l("span",he,[p(e.$slots,"noOptions",{},()=>[m("List is empty.")])])],512),[[v,s.showNoOptions&&(e.options.length===0||a.hasOptionGroup===!0&&e.filteredOptions.length===0)&&!e.search&&!s.loading]]),p(e.$slots,"afterList")],12,ie)],36),[[v,e.isOpen]])]),_:3})],42,Q)}const pe=_(J,[["render",de]]);const ce={components:{Multiselect:pe},data(){return{status:{loadingItem:""},uniqueCategories:[],options:[],cacheSearch:"",cacheCategory:"",filterCheck:""}},created(){this.getProducts()},watch:{cacheSearch(e){this.setCacheSearch(e),this.notSelectAllRadios()},cacheCategory(e){this.setCategory(e),this.notSelectAllRadios()},filterCheck(e){this.setFilterCheck(e)}},methods:{...H(G,["setCategory","setCacheSearch","setFilterCheck"]),nameWithLang({title:e}){return`${e}`},getProducts(){const e="https://vue3-course-api.hexschool.io/api/william-api/products/all";this.$http.get(e).then(t=>{let s=t.data.products;this.options=t.data.products,s.forEach(r=>{this.uniqueCategories.includes(r.category)||this.uniqueCategories.push(r.category)})})},notSelectAllRadios(){document.querySelectorAll('input[type="radio"][name="filterCheck"]').forEach(e=>e.checked=!1)}}},w=e=>(F("data-v-f6ac4168"),e=e(),K(),e),fe={class:"col-lg-2 lh-lg aside sticky-lg-top shadow align-self-start py-3 mb-3",style:{top:"100px"}},me={class:"my-3"},ge={class:"list-unstyled d-flex flex-lg-column flex-row flex-wrap justify-content-center my-3"},be={class:"mx-4 mx-md-0"},ye=["checked"],ve=w(()=>l("label",{for:"all"},[l("span",{class:"aside_span"}," － "),m(" All ")],-1)),Se=["id","value"],Ve=["for"],we=w(()=>l("span",{class:"aside_span"}," － ",-1)),$e=w(()=>l("hr",{class:"py-2"},null,-1)),Oe={class:"d-flex flex-md-column flex-row gap-3 align-items-center align-items-lg-start justify-content-center"},Le=w(()=>l("h2",{class:"fs-6"},"PRICE：",-1)),ke={class:"form-check"},Ce={class:"form-check-label",for:"999"},Be={class:"form-check"},Pe={class:"form-check-label",for:"2999"},_e={class:"form-check"},De={class:"form-check-label",for:"3000"};function Ee(e,t,s,r,o,a){const i=P("multiselect");return h(),d("aside",fe,[l("div",me,[V(i,{onClick:a.getProducts,modelValue:o.cacheSearch,"onUpdate:modelValue":t[0]||(t[0]=n=>o.cacheSearch=n),options:o.options,"custom-label":a.nameWithLang,placeholder:"search",label:"title","track-by":"title"},null,8,["onClick","modelValue","options","custom-label"])]),l("ul",ge,[l("li",be,[f(l("input",{ref:"all",type:"radio",class:"d-none",name:"side",id:"all",value:" ","onUpdate:modelValue":t[1]||(t[1]=n=>o.cacheCategory=n),checked:o.cacheCategory===""},null,8,ye),[[S,o.cacheCategory]]),ve]),(h(!0),d(C,null,B(o.uniqueCategories,(n,g)=>(h(),d("li",{key:g},[f(l("input",{type:"radio",class:"d-none",name:"side",id:g,value:n,"onUpdate:modelValue":t[2]||(t[2]=M=>o.cacheCategory=M)},null,8,Se),[[S,o.cacheCategory]]),l("label",{for:g,class:"mx-4 mx-md-0"},[we,m(" "+b(n),1)],8,Ve)]))),128))]),$e,l("div",Oe,[Le,l("div",ke,[l("label",Ce,[f(l("input",{type:"radio",class:"form-check-input","onUpdate:modelValue":t[3]||(t[3]=n=>o.filterCheck=n),name:"filterCheck",id:"999",value:"999"},null,512),[[S,o.filterCheck]]),m(" "+b("< 999"))])]),l("div",Be,[l("label",Pe,[f(l("input",{type:"radio",class:"form-check-input","onUpdate:modelValue":t[4]||(t[4]=n=>o.filterCheck=n),name:"filterCheck",id:"2999",value:"2999"},null,512),[[S,o.filterCheck]]),m(" 999 - 2999 ")])]),l("div",_e,[l("label",De,[f(l("input",{type:"radio",class:"form-check-input","onUpdate:modelValue":t[5]||(t[5]=n=>o.filterCheck=n),name:"filterCheck",id:"3000",value:"3000"},null,512),[[S,o.filterCheck]]),m(" 3000 + ")])])])])}const Ae=_(ce,[["render",Ee],["__scopeId","data-v-f6ac4168"]]),Te={components:{ProductsSide:Ae,ProductsList:N}},Me=l("div",{id:"Product",class:"my-8 pt-6 d-flex justify-content-center align-items-center"},[l("h2",{class:"text-pickBlack"},"NEW"),l("img",{src:R,height:"40",class:"mx-2",alt:"recentlyLogo"}),l("h2",{class:"text-pickBlack"},"PRODUCTS")],-1),He={class:"container-xxl"},Ge={class:"row g-md-5 px-3"},Fe={class:"col-lg-10 mb-5"};function Ke(e,t,s,r,o,a){const i=P("ProductsSide"),n=P("ProductsList");return h(),d("div",null,[Me,l("div",He,[l("main",Ge,[V(i),l("section",Fe,[V(n)])])])])}const qe=_(Te,[["render",Ke]]);export{qe as default};
