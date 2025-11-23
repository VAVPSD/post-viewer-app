import type { LengthFilter } from "./consts";

export type LengthFilterType = (typeof LengthFilter)[keyof typeof LengthFilter];
