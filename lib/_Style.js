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
    css(isStyle) {
      const getKeys = Object.keys(isStyle);
      const getValues = Object.values(isStyle);
      const getStyles = Object.entries(isStyle);

      let elementStyle = '';
      for (let i = 0; i < getStyles.length; i++) {
        elementStyle += `${getKeys[i]}: ${getValues[i]}; `;
      }
      console.log(elementStyle);
      element.style = elementStyle;

      // getStyles.forEach((getStyle) => {
      //   console.log(...getStyle);
      // })
      // eslint-disable-next-line no-restricted-syntax
      // for (const style in isStyle) {
      //   if (Object.prototype.hasOwnProperty.call(isStyle, style)) {
      //     // console.log(`${style}: ${isStyle[style]};`)
      //     console.log(style);
      //     element.style += `${style}: ${isStyle[style]};`;
      //   }
      // }
      // getStyles.forEach((getStyle) => {
      //   getStyle.forEach((style) => {
      //     console.log(style)
      //   })
      // })
      // getValues.forEach((getValue) => {
      // })
    },
  };
}
