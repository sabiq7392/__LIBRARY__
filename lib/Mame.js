import { Event } from './_Event.js';
import { ClassList } from './_ClassList.js';
import { Style } from './_Style.js';
import { Media } from './_Media.js';

export function $query(element) {
  return document.querySelectorAll(element);
}

export function $(element) {
  const anElement = { element: element[0] };

  return {
    ...Event(anElement),
    ...ClassList(anElement),
    ...Style(anElement),
    ...Media(anElement),
  };
}
