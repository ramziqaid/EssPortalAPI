var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * This class is based on the code in the following projects:
 *
 * - https://github.com/zenorocha/select
 * - https://github.com/zenorocha/clipboard.js/
 *
 * Both released under MIT license - © Zeno Rocha
 */
import { Injectable } from '@angular/core';
let CopierService = class CopierService {
    /** Copy the text value to the clipboard. */
    copyText(text) {
        this.createTextareaAndSelect(text);
        const copySuccessful = document.execCommand('copy');
        this.removeFake();
        return copySuccessful;
    }
    /**
     * Creates a hidden textarea element, sets its value from `text` property,
     * and makes a selection on it.
     */
    createTextareaAndSelect(text) {
        // Create a fake element to hold the contents to copy
        this.textarea = document.createElement('textarea');
        // Prevent zooming on iOS
        this.textarea.style.fontSize = '12pt';
        // Hide the element
        this.textarea.classList.add('cdk-visually-hidden');
        // Move element to the same position vertically
        const yPosition = window.pageYOffset || document.documentElement.scrollTop;
        this.textarea.style.top = yPosition + 'px';
        this.textarea.setAttribute('readonly', '');
        this.textarea.value = text;
        document.body.appendChild(this.textarea);
        this.textarea.select();
        this.textarea.setSelectionRange(0, this.textarea.value.length);
    }
    /** Remove the text area from the DOM. */
    removeFake() {
        if (this.textarea) {
            document.body.removeChild(this.textarea);
            this.textarea = null;
        }
    }
};
CopierService = __decorate([
    Injectable()
], CopierService);
export { CopierService };
//# sourceMappingURL=copier.service.js.map