'use strict';

export function Style({ element }) {
    return {
        show() {
            query.style.display = " ";
            return this;
        },
        hide() {
            query.style.display = "none";
            return this;
        },
    }
}