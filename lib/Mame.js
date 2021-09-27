import { isObject } from './_Type.js';
import { Event } from './_Event.js';
import { ClassList } from './_ClassList.js';
import { Style } from './_Style.js';
import { Media } from './_Media.js';

export function $(element) {
  const query = { element: element[0] };

  if (!isObject(element)) {
    const isID = element.includes('#');
    if (!isID) {
      return document.querySelectorAll(element);
    }
    return document.querySelector(element);
  }

  const moreThanOneValue = element.length > 1;
  if (moreThanOneValue) {
    throw new RangeError(`Your array length is ${element.length}. Can't install more than 1 value`);
  }

  return {
    ...Event(query),
    ...ClassList(query),
    ...Style(query),
    ...Media(query),
  };
}
