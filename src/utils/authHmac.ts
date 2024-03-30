import { Base64 } from "./crypto/Base64Util";
import { HmacSHA512 } from "./crypto/HmacSha512Util";

export const AuthHmac = (method: string, url: string) => {
  const generateRandomString = (length: number) => {
    let result = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  const extractPartsFromUrl = (tmpUrl: string) => {
    try {
      const parsedUrl = new URL(tmpUrl);
      const domain = parsedUrl.port
        ? `${parsedUrl.hostname}:${parsedUrl.port}`
        : parsedUrl.hostname;
      const path = parsedUrl.pathname;
      return { domain, path };
    } catch (e) {
      console.error("URL is illegal!");
      return {};
    }
  };
  const nonce = generateRandomString(32);
  const secret = `${import.meta.env.VITE_HMAC_SECRET as string}`;
  const date = new Date().toUTCString();
  const urlObj = extractPartsFromUrl(url);
  if (!urlObj) {
    return;
  }
  const signing_string =
    "x-date: " +
    date +
    `\n@request-target: ${method} ${urlObj.path}\nhost: ${urlObj.domain}\nnonce: ${nonce}`;
  const digest = HmacSHA512(signing_string, secret);
  const signature = Base64.stringify(digest);
  const XToken =
    'HMAC headers="x-date @request-target host nonce", signature="' +
    signature +
    '"';
  return {
    Date: date,
    Token: XToken,
    Nonce: nonce,
  };
};
