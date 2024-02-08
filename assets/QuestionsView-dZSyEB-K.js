import{B as m}from"./BaseFooter-dUL7WOYz.js";import{B as v}from"./BaseQuestion-ImiuVeCE.js";import{f as c}from"./apiUtils-05fuKnWJ.js";import{_ as g,s as _,f,g as w,i as s,j as l,t as o,v as u,D as r,F as L,L as B,I as d,J as q,z as R,A as F}from"./index-WjT0I8Tu.js";import"./BaseFooterSimple-mv6nlA0I.js";import"./BaseAccordion-0_3G-jq7.js";const b={components:{BaseFooter:m,BaseQuestion:v},data(){return{questionsLeasing:"",questionsRent:"",showLeasing:!0,showRent:!1}},methods:{async getFaqLaasing(){const e="data/leasing_faq.json";this.questionsLeasing=await c(`/voshod/${e}`)},async getFaqRent(){const e="data/rent_faq.json";this.questionsRent=await c(`/voshod/${e}`)}},mounted(){this.getFaqLaasing(),this.getFaqRent()}},a=e=>(R("data-v-0c6b50e1"),e=e(),F(),e),x={class:"main"},C={class:"wrapper"},I={class:"main-question"},S=a(()=>s("h1",{class:"main-question__title title-primary"},"Часто задаваемые вопросы",-1)),k=a(()=>s("p",{class:"main-question__text"}," Список ответов на часто задаваемые вопросы от наших клиентов постоянно пополняется. ",-1)),Q=a(()=>s("p",{class:"main-question__text"},"Напишите нам, чтобы мы могли дополнить список.",-1)),V={class:"main-question__wrapper"},j={class:"main-question__section"},y={class:"main-question__leasing"},D={class:"main-question__wrapper question-leasing"},N={class:"question-leasing__accordion"},z={class:"question-leasing__accordion"},A={class:"main-question__rent"},E={class:"main-question__wrapper question-rent"},J={class:"question-rent__accordion"},T={class:"question-rent__accordion"},G=B('<div class="main-question__contact question-contact" data-v-0c6b50e1><h6 class="question-contact__title" data-v-0c6b50e1>Не нашли ответ на свой вопрос?</h6><p class="question-contact__tel" data-v-0c6b50e1> Позвоните нам по телефону: <a href="tel:+7 (812) 317-68-15" data-v-0c6b50e1>8 800 123 45 67</a></p><p class="question-contact__open-hour" data-v-0c6b50e1> Время работы: с 9.00 до 21.00 (выходной – пн.) </p><p class="question-contact__info" data-v-0c6b50e1>Звонок бесплатный</p></div>',1);function H(e,n,K,M,t,O){const i=_("BaseQuestion"),h=_("BaseFooter");return f(),w(L,null,[s("main",x,[s("div",C,[s("div",I,[S,k,Q,s("div",V,[s("div",j,[s("h6",{onClick:n[0]||(n[0]=p=>(t.showLeasing=!0,t.showRent=!1)),class:l(["main-question__leasing-title question-title",{"question-title--active":t.showLeasing}])}," Лизинг ",2),s("h6",{onClick:n[1]||(n[1]=p=>(t.showRent=!0,t.showLeasing=!1)),class:l(["main-question__rent-title question-title",{"question-title--active":t.showRent}])}," Аренда ",2)]),o(r,{name:"collapse"},{default:u(()=>[d(s("div",y,[s("div",D,[s("div",N,[o(i,{questions:t.questionsLeasing,"start-slice":0,"end-slice":5},null,8,["questions"])]),s("div",z,[o(i,{questions:t.questionsLeasing,"start-slice":5},null,8,["questions"])])])],512),[[q,t.showLeasing]])]),_:1}),o(r,{name:"collapse"},{default:u(()=>[d(s("div",A,[s("div",E,[s("div",J,[o(i,{questions:t.questionsRent,"start-slice":0,"end-slice":5},null,8,["questions"])]),s("div",T,[o(i,{questions:t.questionsRent,"start-slice":5},null,8,["questions"])])])],512),[[q,t.showRent]])]),_:1})]),G])])]),o(h)],64)}const $=g(b,[["render",H],["__scopeId","data-v-0c6b50e1"]]);export{$ as default};
