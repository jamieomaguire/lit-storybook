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
            <button class="lit-btn">
                ${this.size}
                <slot></slot>
            </button>
        `;
    }
}

window.customElements.define('lit-button', LitButton);