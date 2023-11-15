import{_ as p,r as c,o as a,c as n,d as _,f as t,g as m,k as y,p as b,t as s,i as v,w as g,H as f,y as x,z as k}from"./index-f9d242ac.js";import{_ as w,a as I}from"./1506074059-9b9beec8.js";import{_ as L}from"./05284b30a1fda6bcdc09420b5c1e7127-2903c7b8.js";const S={data(){return{order:{user:{}},orderId:"",isLoading:!1,paid_date:"",create_at:""}},created(){this.orderId=this.$route.params.orderId,this.getOrder()},methods:{getOrder(){const r=`https://vue3-course-api.hexschool.io/api/william-api/order/${this.orderId}`;this.$http.get(r).then(d=>{d.data.success&&(this.order=d.data.order,this.paid_date=new Date(this.order.paid_date*1e3).toLocaleString(),this.create_at=new Date(this.order.create_at*1e3).toLocaleString())})},payOrder(){const r=`https://vue3-course-api.hexschool.io/api/william-api/pay/${this.orderId}`;this.$http.post(r).then(d=>{d.data.success&&this.getOrder()})}}},o=r=>(x("data-v-6e3e309b"),r=r(),k(),r),O={class:"user_check"},C=f('<div class="row content container mx-auto mt-3" data-v-6e3e309b><section class="mx-auto header" data-v-6e3e309b><div class="d-flex justify-content-center my-5" data-v-6e3e309b><img height="130" src="'+w+'" alt="fire-logo" data-v-6e3e309b><img height="130" src="'+I+'" alt="shakeHand" data-v-6e3e309b><img height="130" src="'+L+'" alt="jerseyIcon" data-v-6e3e309b></div><p class="text-center" data-v-6e3e309b>訂單已完成！</p><p class="text-center" data-v-6e3e309b>付款完成後，會盡快為您安排出貨！</p></section></div>',1),M={class:"my-5 row justify-content-center container-xl mx-auto"},N={class:"table_1"},V={class:"table align-middle"},j=o(()=>t("thead",null,[t("th",null,"品名"),t("th",null,"數量"),t("th",{class:"text-start"},"單價")],-1)),B={class:"text-start"},D=o(()=>t("td",{colspan:"2",class:"text-end"},"總計",-1)),$={class:"text-end"},E={class:"table"},H=o(()=>t("th",{width:"100"},"訂單時間",-1)),R=o(()=>t("th",{width:"100"},"Email",-1)),U=o(()=>t("th",null,"姓名",-1)),q=o(()=>t("th",null,"收件人電話",-1)),z=o(()=>t("th",null,"收件人地址",-1)),F=o(()=>t("th",null,"付款狀態",-1)),A={key:0},G={key:1,class:"text-success"},J={key:0},K=o(()=>t("th",null,"付款時間",-1)),P={key:0,class:"text-end"},Q=o(()=>t("button",{type:"button",class:"btn btn-danger"},"pay now",-1)),T=[Q],W={key:1,class:"text-end"},X=o(()=>t("button",{type:"button",class:"btn btn-outline-primary"}," get other thing! ",-1));function Y(r,d,Z,tt,e,l){const h=c("LoadingMask"),u=c("RouterLink");return a(),n("div",O,[_(h,{active:e.isLoading},null,8,["active"]),C,t("div",M,[t("form",{onSubmit:d[0]||(d[0]=m((...i)=>l.payOrder&&l.payOrder(...i),["prevent"]))},[t("div",N,[t("table",V,[j,t("tbody",null,[(a(!0),n(y,null,b(e.order.products,i=>(a(),n("tr",{key:i.id},[t("td",null,s(i.product.title),1),t("td",null,s(i.qty)+"/"+s(i.product.unit),1),t("td",B," $ "+s(r.$filters.currency(Math.round(i.final_total))),1)]))),128))]),t("tfoot",null,[t("tr",null,[D,t("td",$," $ "+s(r.$filters.currency(Math.round(e.order.total)+120)),1)])])])]),t("table",E,[t("tbody",null,[t("tr",null,[H,t("td",null,s(e.create_at),1)]),t("tr",null,[R,t("td",null,s(e.order.user.email),1)]),t("tr",null,[U,t("td",null,s(e.order.user.name),1)]),t("tr",null,[q,t("td",null,s(e.order.user.tel),1)]),t("tr",null,[z,t("td",null,s(e.order.user.address),1)]),t("tr",null,[F,t("td",null,[e.order.is_paid?(a(),n("span",G,"付款完成")):(a(),n("span",A,"尚未付款"))])]),e.order.is_paid?(a(),n("tr",J,[K,t("td",null,s(e.paid_date),1)])):v("",!0)])]),e.order.is_paid===!1?(a(),n("div",P,T)):(a(),n("div",W,[_(u,{to:"/"},{default:g(()=>[X]),_:1})]))],32)])])}const rt=p(S,[["render",Y],["__scopeId","data-v-6e3e309b"]]);export{rt as default};
