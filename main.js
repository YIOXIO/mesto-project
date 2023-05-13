(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function r(e){e.classList.add("popup_opened"),e.addEventListener("click",o),document.addEventListener("keydown",c)}function n(e){e.classList.remove("popup_opened"),e.removeEventListener("click",o),document.removeEventListener("keydown",c)}function o(e){e.target==e.target&&n(e.target)}function c(e){"Escape"===e.key&&n(document.querySelector(".popup_opened"))}e.r(t),e.d(t,{handleSubmitFormAddNewCard:()=>G,handleSubmitFormAvatar:()=>F,handleSubmitFormProfileEdit:()=>B,openImage:()=>N,openProfile:()=>T});var a=document.querySelector(".card-template").content.querySelector(".card"),i=document.querySelector(".elements__cards");function u(e){i.prepend(function(e){var t=a.cloneNode(!0);return t.querySelector(".card__image").src=e.link,t.querySelector(".card__image").alt=e.name,t.querySelector(".card__name").textContent=e.name,t.querySelector(".card__trash").addEventListener("click",l),t.querySelector(".card__like").addEventListener("click",d),t.querySelector(".card__image").addEventListener("click",(function(){return N(e)})),t}(e))}function l(e){e.target.closest(".card").remove()}function d(e){e.target.closest(".card__like").classList.toggle("card__like_active")}function p(e,t){var r=function(e){return e.some((function(e){return!e.validity.valid}))}(e);t.classList.toggle("form__submit_inactive",r),t.disabled=!1}[{name:"Otherwise by Morcheeba",link:"https://avatars.yandex.net/get-music-content/33216/936f6bc8.a.154906-1/m1000x1000?webp=false"},{name:"Song of crickets by Parov Stelar",link:"https://is2-ssl.mzstatic.com/image/thumb/Music69/v4/72/6f/61/726f6198-a693-8049-6ca8-ff094c2be671/cover.jpg/1200x1200bf-60.jpg"},{name:"Eyesdown by Bonobo & Andreya Triana",link:"https://is1-ssl.mzstatic.com/image/thumb/Music/e1/72/ef/mzi.xhjloncl.jpg/1200x1200bf-60.jpg"},{name:"Web of Deception by Thievery Corporation",link:"https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/aa/9f/f2/aa9ff27c-0525-8706-7b22-427b519b9db0/795103017726_Cover.jpg/1200x1200bf-60.jpg"},{name:"Boomerang by Gabin",link:"https://avatars.yandex.net/get-music-content/4010467/62a109c6.a.13223492-1/m1000x1000?webp=false"},{name:"Stoned and Alone by Findlay",link:"https://rocknfolk-cdn.respawn.fr/wp-content/uploads/2017/02/fpleasure.jpg"}].forEach((function(e){u(e)}));var s=document.querySelector(".popup_image-form"),m=s.querySelector(".popup__caption"),f=document.querySelector(".popup_profile-edit"),_=document.querySelector(".popup_profile-avatar"),v=document.querySelector(".profile__name"),y=document.querySelector(".profile__duty"),S=document.querySelector(".popup_new-place"),b=document.querySelector("#edit-form"),q=b.querySelector(".form__input_name"),g=b.querySelector(".form__input_duty"),k=document.querySelector("#card-form"),L=k.querySelector(".form__input_url"),E=k.querySelector(".form__input_place"),h=document.querySelector("#avatar-form"),x=document.querySelector(".popup__image"),j=h.querySelector(".form__input_avatar"),w=document.querySelector(".profile__avatar"),C=document.querySelector(".profile__edit-button"),A=document.querySelector(".profile__button"),M=document.querySelector(".profile__overlay"),P=f.querySelector(".popup__close-button_profile-edit"),O=S.querySelector(".popup__close-button_popup_new-place"),D=s.querySelector(".popup__close-button_popup_image"),z=_.querySelector(".popup__close-button_popup_avatar");function F(e){e.preventDefault(),w.src=j.value,h.reset(),n(_)}function T(){r(f),q.value=v.textContent,g.value=y.textContent}function B(e){e.preventDefault(),v.textContent="".concat(q.value),y.textContent="".concat(g.value),n(f)}function N(e){r(s),x.src=e.link,x.alt=e.name,m.textContent=e.name}function G(e){e.preventDefault();var t={};t.name=E.value,t.link=L.value,u(t),k.reset(),n(S)}M.addEventListener("click",(function(){r(_)})),h.addEventListener("submit",F),C.addEventListener("click",T),b.addEventListener("submit",B),D.addEventListener("click",(function(){return n(s)})),O.addEventListener("click",(function(){return n(S)})),P.addEventListener("click",(function(){return n(f)})),z.addEventListener("click",(function(){return n(_)})),A.addEventListener("click",(function(){r(S)})),k.addEventListener("submit",G),Array.from(document.querySelectorAll(".form")).forEach((function(e){e.addEventListener("submit",(function(e){return e.preventDefault()})),function(e){var t=Array.from(e.querySelectorAll(".form__input")),r=e.querySelector(".form__submit");p(t,r),t.forEach((function(n){n.addEventListener("input",(function(){!function(e,t){t.validity.valid?function(e,t){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove("form__input_error"),r.classList.remove("form__input-error_active"),r.textContent=""}(e,t):function(e,t,r){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.add("form__input_error"),n.classList.add("form__input-error_active"),n.textContent=r}(e,t,t.validationMessage)}(e,n),p(t,r)}))}))}(e)}))})();