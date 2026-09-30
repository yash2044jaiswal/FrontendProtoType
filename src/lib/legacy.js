import { useEffect } from 'react';

// Runs a screen's ORIGINAL inline <script> (DOM-driven demo behaviour: tabs, toggles, role pickers ...)
// after the React JSX has mounted, and fully cleans up on unmount / route change.
window.__pol = function (event, code) {
  try { return new Function('event', code).call(event && event.currentTarget, event); }
  catch (err) { console.error('[polaris] handler error:', err); }
};

export function useLegacyPage({ bodyClass, htmlClass, script }) {
  useEffect(() => {
    const prevBody = document.body.className;
    const prevHtml = document.documentElement.className;
    document.body.className = bodyClass || '';
    document.documentElement.className = htmlClass || '';
    window.scrollTo(0, 0);

    const listeners = [];
    const intervals = [];
    const nativeAdd = EventTarget.prototype.addEventListener;
    const nativeSetInterval = window.setInterval;
    EventTarget.prototype.addEventListener = function (type, fn, opts) {
      if ((this === document || this === window) && (type === 'DOMContentLoaded' || type === 'load')) {
        queueMicrotask(() => { try { fn.call(this, new Event(type)); } catch (e) { console.error(e); } });
        return;
      }
      if (this === document || this === window) listeners.push([this, type, fn, opts]);
      return nativeAdd.call(this, type, fn, opts);
    };
    window.setInterval = function (...a) { const id = nativeSetInterval.apply(window, a); intervals.push(id); return id; };

    const names = [];
    if (script) {
      try {
        (script.match(/function\s+([A-Za-z_$][\w$]*)/g) || []).forEach((m) => names.push(m.replace(/function\s+/, '')));
        (0, eval)(script); // indirect eval: function declarations become globals so inline handlers can reach them
      } catch (err) { console.error('[polaris] page script error:', err); }
    }
    return () => {
      EventTarget.prototype.addEventListener = nativeAdd;
      window.setInterval = nativeSetInterval;
      listeners.forEach(([t, ty, fn, o]) => t.removeEventListener(ty, fn, o));
      intervals.forEach((id) => clearInterval(id));
      names.forEach((n) => { try { delete window[n]; } catch {} });
      document.body.className = prevBody;
      document.documentElement.className = prevHtml;
    };
  }, []);
}
