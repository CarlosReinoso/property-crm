import errorCodes from "./vercel-postgress-neon-error-codes.json";

const errorCodesIndex: {
  [code: string]: string;
} = errorCodes;

export function shiftThroughErrorCodes(code: string): string {
  const message = errorCodesIndex[code];
  return !!message ? message : "Unknown error code";
}
