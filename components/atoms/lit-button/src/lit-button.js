import {LitElement, html} from 'lit';

export class LitButton extends LitElement {
    static properties = {
        size: {type: String}
    }

    constructor() {
        super();
        this.size = '';
    }

    render() {
        return html`
            <button>
                ${this.size}
                <slot></slot>
            </button>
        `;
    }
}

window.customElements.define('lit-button', LitButton);