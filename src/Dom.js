const $id = (id) => {
    const el = document.getElementById(id);
    return el != null ? el : void 0;
};
const $sl = (sl) => {
    const el = document.querySelectorAll(sl);
    return el != null ? el : void 0;
};
HTMLElement.prototype.text = function(t) {
    if (t == null) {
        return this.textContent || void 0;
    } else {
        return this != null ? this.textContent = t : void 0;
    }
};
HTMLElement.prototype.html = function(t) {
    if (t == null) {
        return this != null ? this.innerHTML : void 0;
    } else {
        return this != null ? this.innerHTML = t : void 0;
    }
};
HTMLElement.prototype.val = function(t) {
    const el = this;
    if (t == null) {
        return this != null ? el.value : void 0;
    } else {
        return this != null ? el.value = t : void 0;
    }
};

const define = (name, className) => {
    customElements.define(name, className);
}

const create = (obj, inp) => {
    const el = document.createElement(obj)
    el.applyCSS(inp)
    document.body.appendChild(el)
    return el
}