class Para extends HTMLElement {
    applyCSS(obj) {
        if (obj.apply == "true") {
            const title = obj.title || 'lorem ipsum'
            const font = obj.font || 'sans-serif'
            const colour = obj.colour || '#101010'
            const bgColour = obj.bgColour || '#efefef'
            const borderColour = obj.borderColour || '#efefef'
            const body = obj.body || 'lorem ipsum dolor sit amet'
            const radius = obj.radius || '0.5vh'

            this.div.style.borderStyle = "solid";
            this.div.style.backgroundColor = bgColour;
            this.div.style.borderColor = borderColour;
            this.div.style.paddingLeft = "10px";
            this.div.style.paddingBottom = "10px";
            this.div.style.borderRadius = radius;
            this.div.style.display = "grid";
            this.div.setAttribute("class", "velvet-container");

            this.heading.innerHTML = `${title}`;
            this.heading.style.fontFamily = font;
            this.heading.style.color = colour;
            this.div.appendChild(this.heading);

            this.para.innerHTML = `${body}<br><br>`;
            this.para.style.fontFamily = font;
            this.para.style.color = colour;
            this.div.appendChild(this.para);

            this.appendChild(this.div);
        }
    }
    constructor() {
        super();
        this.div = document.createElement('div');
        this.heading = document.createElement('h2');
        this.para = document.createElement('span');
    }
    connectedCallback() {
        const apply = this.getAttribute('apply') || "false";
        const radius = this.getAttribute('radius') || "0.5vh";
        const title = this.getAttribute('title') || 'lorem ipsum';
        const body = this.getAttribute('body') || 'lorem ipsum dolor sit amet';
        const font = this.getAttribute('font') || 'sans-serif';
        const colour = this.getAttribute('colour') || '#efefef';
        const bgColour = this.getAttribute('bg-colour') || '#101010';
        const borderColour = this.getAttribute('border-colour') || '#efefef';

        this.applyCSS({
            apply: `${apply}`,
            title: `${title}`,
            body: `${body}`,
            font: `${font}`,
            colour: `${colour}`,
            borderColour: `${borderColour}`,
            radius: `${radius}`,
            bgColour: `${bgColour}`
        })
    }
}

define('velvet-para', Para);