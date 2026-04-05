function createUuidV4Fallback(): string {
  const bytes = new Uint8Array(16)

  if (globalThis.crypto?.getRandomValues) {
    globalThis.crypto.getRandomValues(bytes)
  }
  else {
    for (let i = 0; i < bytes.length; i += 1) {
      bytes[i] = Math.floor(Math.random() * 256)
    }
  }

  bytes[6] = (bytes[6]! & 0x0F) | 0x40
  bytes[8] = (bytes[8]! & 0x3F) | 0x80

  const hex: string[] = []

  for (const byte of bytes) {
    hex.push(byte.toString(16).padStart(2, '0'))
  }

  return `${hex[0]}${hex[1]}${hex[2]}${hex[3]}-${hex[4]}${hex[5]}-${hex[6]}${hex[7]}-${hex[8]}${hex[9]}-${hex[10]}${hex[11]}${hex[12]}${hex[13]}${hex[14]}${hex[15]}`
}

export default defineNuxtPlugin(() => {
  if (!globalThis.crypto) {
    return
  }

  const cryptoLike = globalThis.crypto as Crypto & {
    randomUuid?: () => string
  }

  const uuidGenerator = typeof cryptoLike.randomUUID === 'function'
    ? cryptoLike.randomUUID.bind(cryptoLike)
    : createUuidV4Fallback

  if (typeof cryptoLike.randomUUID !== 'function') {
    try {
      Object.defineProperty(cryptoLike, 'randomUUID', {
        configurable: true,
        value: uuidGenerator,
        writable: true,
      })
    }
    catch {
      // Ignore read-only environments.
    }
  }

  if (typeof cryptoLike.randomUuid !== 'function') {
    try {
      Object.defineProperty(cryptoLike, 'randomUuid', {
        configurable: true,
        value: uuidGenerator,
        writable: true,
      })
    }
    catch {
      // Ignore read-only environments.
    }
  }
})
