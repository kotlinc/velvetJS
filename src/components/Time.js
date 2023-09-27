class Time extends HTMLElement {
    applyCSS(obj) {
        if (obj.apply == "true") {
            const font = obj.font || 'sans-serif'
            const colour = obj.colour || '#101010'
            const bgColour = obj.bgColour || '#efefef'
            const radius = obj.radius || '0.5vh'

            this.div.style.backgroundColor = bgColour;
            this.div.style.paddingLeft = "10px";
            this.div.style.paddingBottom = "10px";
            this.div.style.borderRadius = radius;
            this.div.style.display = "grid";
            this.div.setAttribute("class", "velvet-container");

            this.time.innerHTML = "TIME"
            this.time.style.fontFamily = font;
            this.time.style.color = colour;
            this.div.appendChild(this.time);

            this.date.innerHTML = "DATE"
            this.date.style.fontFamily = font;
            this.date.style.color = colour;
            this.div.appendChild(this.date);

            this.appendChild(this.div);

            setInterval(() => {
                const time = new Date().toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                })
                const date = new Date().toLocaleDateString()

                this.date.innerHTML = date
                this.time.innerHTML = time
            }, 500)
        }
    }
    constructor() {
        super();
        this.div = document.createElement('div');
        this.time = document.createElement('h2');
        this.date = document.createElement('h3');
    }
    connectedCallback() {
        const apply = this.getAttribute('apply') || "false";
        const radius = this.getAttribute('radius') || "0.5vh";
        const font = this.getAttribute('font') || 'sans-serif';
        const colour = this.getAttribute('colour') || '#efefef';
        const bgColour = this.getAttribute('bg-colour') || '#101010';

        this.applyCSS({
            apply: `${apply}`,
            font: `${font}`,
            colour: `${colour}`,
            radius: `${radius}`,
            bgColour: `${bgColour}`
        })
    }
}
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

define('velvet-time', Time);