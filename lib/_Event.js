'use strict';

export function Event({ element }) {
  const add = (event, listener, options) => {
    element.addEventListener(event, listener, options);
  };

  return {
    onClick(listener, options) {
      add('click', listener, options);
      return this;
    },
    hover() {
      return {
        on(listener, options) {
          add('mouseover', listener, options);
          return this;
        },
        off(listener, options) {
          add('mouseout', listener, options);
          return this;
        },
      };
    },
    focus() {
      return {
        on(listener, options) {
          add('focus', listener, options);
          return this;
        },
        off(listener, options) {
          add('blur', listener, options);
          return this;
        },
      };
    },
    animation() {
      return {
        start(listener, options) {
          add('animationstart', listener, options);
          return this;
        },
        end(listener, options) {
          add('animationend', listener, options);
          return this;
        },
      };
    },
    onKeyUp(listener, options) {
      add('keyup', listener, options);
      return this;
    },
    onSubmit(listener, options) {
      add('submit', listener, options);
      return this;
    },
    onResize(listener, options) {
      add('resize', listener, options);
      return this;
    },
  };
}
