'use strict';

export function Style({ element }) {
  return {
    show() {
      element.style.display = '';
      return this;
    },
    hide() {
      element.style.display = 'none';
      return this;
    },
  };
}
