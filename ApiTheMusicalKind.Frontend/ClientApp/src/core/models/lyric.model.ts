export class LyricsRootObject {
  lyric: string;
  common: Common[];
}
export class Common {
  common: IntString[];
}
export class IntString {
  count: number;
  word: string;
}
