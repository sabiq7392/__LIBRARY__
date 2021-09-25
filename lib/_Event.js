'use strict';

export function Event({ element }) {
    return {
        onClick(listener, options) {
            element.addEventListener("click", listener, options);
            return this;
        },
        hover() {
            return {
                on(listener, options) {
                    element.addEventListener("mouseover", listener, options);
                    return this;
                },
                off(listener, options){
                    element.addEventListener("mouseout", listener, options);
                    return this;
                }
            }
        },  
        focus() {
            return {
                on(listener, options) {
                    element.addEventListener("focus", listener, options);
                    return this;
                },
                off(listener, options) {
                    element.addEventListener("blur", listener, options);
                    return this;
                }
            }
        },
        animation() {
            return {
                start(listener, options) {
                    element.addEventListener('animationstart', listener, options);
                    return this;
                },
                end(listener, options) {
                    element.addEventListener('animationend', listener, options);
                    return this;
                }
            }
        },
        onKeyUp(listener, options) {
            element.addEventListener('keyup', listener, options);
            return this;
        },
        onSubmit(listener, options) {
            element.addEventListener('submit', listener, options);
            return this;
        },
        onResize(listener, options) {
            element.addEventListener('resize', listener, options);
            return this;
        }
    }
}


// class Dom {
//     $media(screen) {
//         switch (screen) {
//             case "phone": {
//                 screen = '(max-width: 767px)';
//                 break;
//             }
            
//             case "tablet": {
//                 screen = '(max-width: 1023px)';
//                 break;
//             }

//             case "desktop": {
//                 screen = '(min-width: 1023px)';
//                 break;
//             }
//         }
//         return window.matchMedia(screen).matches;
//     }

//     $window() {
//         return {
//             onMedia(screen) { 
//                 $media (screen); 
//                 return this; 
//             },
            
//             onResize(listener, options) {
//                 window.addEventListener("resize", listener, options);
//                 return this;
//             }
//         }
//     }
// }

// export default Dom;