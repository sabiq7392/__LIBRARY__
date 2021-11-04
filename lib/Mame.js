import { Event } from './core/event.js';
import { ClassList } from './core/classlist.js';
import { Style } from './core/style.js';
import { Media } from './core/media.js';
import { isObject } from './core/type.js';

export function $(element) {
  const anElement = { element };

  if (!isObject(element)) {
    const isID = element.includes('#');
    if (isID) {
      return document.querySelector(element);
    }
    return document.querySelectorAll(element);
  }

  return {
    ...Event(anElement),
    ...ClassList(anElement),
    ...Style(anElement),
    ...Media(anElement),
  };
}

/*
  Mame.js
  Make your code simple, readble and easy to maintain

  Author: Sabiq Muhammad Antebing Mame;
  Contact: sabiqmuhammad98@gmail.com;
  Github: sabiq7392;
*/
