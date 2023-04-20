import { parse } from 'node-html-parser';
import DOMPurify from 'isomorphic-dompurify';

export function addImageCaptions(html: string): string {
  const root = parse(html);
  const imageTags = root.getElementsByTagName('img');

  for (const imgTag of imageTags) {
    const caption = imgTag.attributes.alt;
    if (caption !== null && caption.trim() !== '') {
      const sanitizedCaption = DOMPurify.sanitize(caption.trim());
      imgTag.insertAdjacentHTML(
        'afterend',
        `<p class="post__image__caption">${sanitizedCaption}</p>`
      );
    }
  }
  return root.toString();
}
