export const LengthFilter = {
  All: 'all',
  Short: 'short',
  Medium: 'medium',
  Long: 'long',
} as const;

export const SHORT_MAX = 20;
export const MEDIUM_MAX = 40;

export const POST_LENGTH_FILTER_OPTIONS = [
  { value: LengthFilter.All, label: 'Все' },
  { value: LengthFilter.Short, label: 'Короткие' },
  { value: LengthFilter.Medium, label: 'Средние' },
  { value: LengthFilter.Long, label: 'Длинные' },
] as const;
