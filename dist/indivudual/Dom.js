const $id=t=>{t=document.getElementById(t);return null!=t?t:void 0},$sl=t=>{t=document.querySelectorAll(t);return null!=t?t:void 0},define=(HTMLElement.prototype.text=function(t){return null==t?this.textContent||void 0:null!=this?this.textContent=t:void 0},HTMLElement.prototype.html=function(t){return null==t?null!=this?this.innerHTML:void 0:null!=this?this.innerHTML=t:void 0},HTMLElement.prototype.val=function(t){return null==t?null!=this?this.value:void 0:null!=this?this.value=t:void 0},(t,e)=>{customElements.define(t,e)}),create=(t,e)=>{t=document.createElement(t);return t.applyCSS(e),document.body.appendChild(t),t};