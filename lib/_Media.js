/* eslint-disable consistent-return */
/* eslint-disable default-case */

'use strict';

export function Media({ element }) {
  return {
    media(screen, func) {
      switch (screen) {
        case 'phone': {
          screen = 'max-width: 767px';
          break;
        }
        case 'tablet': {
          screen = 'max-width: 1023px';
          break;
        }
        case 'desktop': {
          screen = 'min-width: 1023px';
          break;
        }
      }

      if (element.matchMedia(`(${screen})`).matches) {
        return func();
      }
    },
  };
}
