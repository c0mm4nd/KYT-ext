import { createRoot } from 'react-dom/client';

// eslint-disable-next-line
// @ts-ignore
import tailwindcssOutput from '../../assets/styles/tailwind-inline.css?inline';

/** Inject styles into shadow dom */
const globalStyleSheet = new CSSStyleSheet();
globalStyleSheet.replaceSync(tailwindcssOutput);

const div = document.createElement('div');
div.id = '__root';
document.body.appendChild(div);
const shadowRoot = div.attachShadow({ mode: 'open' });


// const rootContainer = document.querySelector('#__root');

// if (!rootContainer) throw new Error("Can't find Content root element");
const rootContainer = document.createElement('div');
rootContainer.id = 'kyt-ext-root';
shadowRoot.adoptedStyleSheets = [globalStyleSheet];
shadowRoot.appendChild(rootContainer);

const root = createRoot(rootContainer);

root.render(
  // <CacheProvider value={emotionCache}>
  <div >
    content script <span className='text-blue-900 text-bold'>loaded</span>
  </div>
  // </CacheProvider>
);

try {
  console.log('content script loaded');
} catch (e) {
  console.error(e);
}
