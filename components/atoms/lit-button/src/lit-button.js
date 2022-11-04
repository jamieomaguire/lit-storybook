import {LitElement, html, css} from 'lit';
import { btnStyles } from './lit-button.css';

export class LitButton extends LitElement {
    static get styles() {
        return btnStyles();
    } 

    static properties = {
        size: {type: String}
    }

    constructor() {
        super();
        this.size = '';
    }

    render() {
        return html`
            <button @click=${this._onClick} class="lit-btn">
                ${this.size}
                <slot></slot>
            </button>
        `;
    }

    _onClick(e) {
        console.log(e)
    }
}

window.customElements.define('lit-button', LitButton);