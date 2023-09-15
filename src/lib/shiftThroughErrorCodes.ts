import { IVercelPostgresError } from "@/interfaces/vercel-postgres-error";
import errorCodes from "./vercel-postgress-neon-error-codes.json";

const errorCodesIndex: {
  [code: string]: string;
} = errorCodes;

export function shiftThroughErrorCodes(code: string): string {
  const message = errorCodesIndex[code];
  return !!message ? message : "Unknown error code";
}

export function handlePostgresError(error: any): string {
  console.log(
    "🚀 ~ file: shiftThroughErrorCodes.ts:14 ~ handlePostgresError ~ error:",
    error
  );
  const typedError = error as IVercelPostgresError;
  return shiftThroughErrorCodes(typedError.code);
}
