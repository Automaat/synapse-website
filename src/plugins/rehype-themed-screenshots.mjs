import { visit } from 'unist-util-visit';

const DARK_PREFIX = '/screenshots/dark/';
const LIGHT_PREFIX = '/screenshots/light/';

export default function rehypeThemedScreenshots() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (!parent || node.tagName !== 'img') return;
      const src = node.properties?.src;
      if (typeof src !== 'string' || !src.startsWith(DARK_PREFIX)) return;

      const lightSrc = LIGHT_PREFIX + src.slice(DARK_PREFIX.length);
      const baseClass = node.properties.className ?? [];
      const classNames = Array.isArray(baseClass) ? baseClass : [baseClass];

      node.properties.className = [...classNames, 'screenshot-dark'];

      const lightNode = {
        type: 'element',
        tagName: 'img',
        properties: {
          ...node.properties,
          src: lightSrc,
          className: [...classNames, 'screenshot-light'],
        },
        children: [],
      };

      parent.children.splice(index + 1, 0, lightNode);
      return index + 2;
    });
  };
}
