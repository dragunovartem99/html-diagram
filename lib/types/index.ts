// prettier-ignore
export type BoardObject = "K" | "Q" | "R" | "B" | "N" | "P" | "k" | "q" | "r" | "b" | "n" | "p" | " ";

export type FontMap = Map<BoardObject, { light: string; dark: string }>;
export type MaskMap = Map<BoardObject, string>;

export type FenRecord = string;
export type Cipher = string;
