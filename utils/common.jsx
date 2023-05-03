import {useRef} from 'react';

export function isArabic(text) {
  const pattern = /[\u0600-\u06FF\u0750-\u077F]/;
  return pattern.test(text);
}


export const useScrollBlock = () => {
  const scrollBlocked = useRef(false);
  const html = document?.documentElement;
  const { body } = document;

  const blockScroll = () => {
    if (!body || !body.style || scrollBlocked.current)
      return;
    if (document === undefined)
      return;

    /**
     * 1. Fixes a bug in iOS and desktop Safari whereby setting
     *    `overflow: hidden` on the html/body does not prevent scrolling.
     * 2. Fixes a bug in desktop Safari where `overflowY` does not prevent
     *    scroll if an `overflow-x` style is also applied to the body.
     */
    html.style.position = 'relative'; /* [1] */
    html.style.overflow = 'hidden'; /* [2] */
    body.style.position = 'relative'; /* [1] */
    body.style.overflow = 'hidden'; /* [2] */

    scrollBlocked.current = true;
  };

  const allowScroll = ()=> {
    if (!body || !body.style || !scrollBlocked.current) return;

    html.style.position = 'auto';
    html.style.overflow = 'auto';
    body.style.position = 'auto';
    body.style.overflow = 'auto';

    scrollBlocked.current = false;

  };

  return [blockScroll, allowScroll];
};