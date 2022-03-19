function parseCookie(cookie: string, decode: boolean = false) {
  const entryAll: EntryType[] = [];
  const chunkAll: ChunkType[] = cookie.split('; ');

  for (let chunk of chunkAll) {
    const entry = chunk.split('=') as EntryType;

    if (decode) {
      entry[0] = decodeURIComponent(entry[0]);
      entry[1] = decodeURIComponent(entry[1]);
    }

    entryAll.push(entry);
  }

  const cookieObj = Object.fromEntries<string>(entryAll);

  return cookieObj;
}

function getCookie(key: string, decode: boolean = false) {
  if (isServer()) return null;

  let cookieValue = '';

  const chunkAll = document.cookie.split('; ');

  for (let chunk of chunkAll) {
    const entry = chunk.split('=') as EntryType;

    if (entry[0] === key) {
      if (decode) {
        cookieValue = decodeURIComponent(entry[1]);
      } else {
        cookieValue = entry[1];
      }
    }
  }

  return cookieValue;
}

function setCookie(key: string, value: string, encode: boolean = false) {
  if (isServer()) return null;

  let cookieValue: string;

  if (encode) {
    cookieValue = encodeURIComponent(value);
  } else {
    cookieValue = value;
  }

  const chunk = `${key}=${cookieValue}; Path=/`;

  document.cookie = chunk;

  return chunk;
}

function isServer() {
  if (typeof document !== 'undefined') {
    return false;
  } else {
    return true;
  }
}

type EntryType = [key: string, value: string];
type ChunkType = string;

export {
  parseCookie,
  getCookie,
  setCookie,
};
