export const cryptoUuidPolyfillScript = `(function () {
  var g = typeof globalThis !== 'undefined' ? globalThis : window;
  if (!g || !g.crypto) return;
  var c = g.crypto;
  function fallback() {
    var bytes = new Uint8Array(16);
    if (c.getRandomValues) {
      c.getRandomValues(bytes);
    } else {
      for (var i = 0; i < bytes.length; i += 1) bytes[i] = Math.floor(Math.random() * 256);
    }
    bytes[6] = (bytes[6] & 15) | 64;
    bytes[8] = (bytes[8] & 63) | 128;
    var hex = [];
    for (var j = 0; j < bytes.length; j += 1) hex.push(bytes[j].toString(16).padStart(2, '0'));
    return hex[0] + hex[1] + hex[2] + hex[3] + '-' + hex[4] + hex[5] + '-' + hex[6] + hex[7] + '-' + hex[8] + hex[9] + '-' + hex[10] + hex[11] + hex[12] + hex[13] + hex[14] + hex[15];
  }
  var generator = typeof c.randomUUID === 'function' ? c.randomUUID.bind(c) : fallback;
  try {
    if (typeof c.randomUUID !== 'function') Object.defineProperty(c, 'randomUUID', { value: generator, configurable: true });
  } catch (_) {}
  try {
    if (typeof c.randomUuid !== 'function') Object.defineProperty(c, 'randomUuid', { value: generator, configurable: true });
  } catch (_) {}
})();`
