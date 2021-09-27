import { $ } from './lib/Mame.js';

const button = $('#button');
console.log(button);

$([button])
  .addClass(['bg-yellow', 'text-big'])
  .removeClass(['text-big'])
  .onClick(() => {
    console.log(button.innerText);
  });

const input = $('#input');

$([input]).focus()
  .on(() => console.log('hai'))
  .off(() => console.log('bye'));

if ($([window]).media('desktop')) {
  console.log('hai');
}
