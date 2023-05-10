export type EmojisResponse = Record<string, string>;

export type TransformedEmojisResponse = Array<{
  uri: string;
  value: string;
}>;
