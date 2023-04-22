/**
 * If given to parse, this callback will be invoked per each found emoji.
 *
 * If this callback returns a falsy value instead of a valid `src` to use for the image, nothing will actually change for that specific emoji.
 *
 * @param icon the lower case HEX code point i.e. "1f4a9"
 * @param options all info for this parsing operation
 * @param variant the optional \uFE0F ("as image") variant, in case this info is anyhow meaningful. By default this is ignored.
 */
export type ParseCallback = (icon: string, options: object, variant: string) => string | false;

export type ReplacerFunction = (substring: string, ...args: any[]) => string;

export type msemojiOptions = {
  base?: string;
  /**
   * Default: .png
   */
  ext?: string;
  /**
   * Default: emoji
   */
  className?: string;
  /**
   * Default: 72x72
   */
  size?: string | number;
  /**
   * To render with SVG use `folder: svg, ext: .svg`
   */
  folder?: string;
  /**
   * The function to invoke in order to generate image src(s).
   */
  callback?: ParseCallback
  /**
   * The function to invoke in order to generate additional, custom attributes for the image tag.
   * Default () => ({})
   * @param icon the lower case HEX code point i.e. "1f4a9"
   * @param variant variant the optional \uFE0F ("as image") variant, in case this info is anyhow meaningful. By default this is ignored.
   * 
   */
  attributes?(icon: string, variant: string): object;
  version?: string;
  /**
   * Provide the current version number in case you need it
   */
  high_contrast?: boolean;
  /**
   * A new option with msemoji, used to provide high-contrast varient emoji
   */
}

export type msemoji = {
  base: string;
  ext: string;
  className: string;
  size: string;
  convert: {
    /**
     * Given an HEX codepoint, returns UTF16 surrogate pairs.
     *
     * @param   codepoint string  generic codepoint, i.e. '1F4A9'
     * @return  string  codepoint transformed into utf16 surrogates pair,
     *          i.e. \uD83D\uDCA9
     *
     * @example
     *  msemoji.convert.fromCodePoint('1f1e8');
     *  // "\ud83c\udde8"
     *
     *  '1f1e8-1f1f3'.split('-').map(msemoji.convert.fromCodePoint).join('')
     *  // "\ud83c\udde8\ud83c\uddf3"
     */
    fromCodePoint(hexCodePoint: string): string;

    /**
     * Given UTF16 surrogate pairs, returns the equivalent HEX codepoint.
     *
     * @param   utf16surrogatePairs   string  generic utf16 surrogates pair, i.e. \uD83D\uDCA9
     * @param   sep                 string  optional separator for double code points, default='-'
     * @return  string  utf16 transformed into codepoint, i.e. '1F4A9'
     *
     * @example
     *  msemoji.convert.toCodePoint('\ud83c\udde8\ud83c\uddf3');
     *  // "1f1e8-1f1f3"
     *
     *  msemoji.convert.toCodePoint('\ud83c\udde8\ud83c\uddf3', '~');
     *  // "1f1e8~1f1f3"
     */
    toCodePoint(utf16surrogatePairs: string, sep?: string): string;
  };
  parse<T extends string | HTMLElement>(node: T, options?: msemojiOptions | ParseCallback): T;
  replace(text: string, replacer: string | ReplacerFunction): string;
  test(text: string): boolean;
  onerror(): void;
  high_contrast?: boolean;
  /**
   * A new option with msemoji, used to provide high-contrast varient emoji
   */
};

declare module 'msemoji' {
  const msemoji: msemoji;
  export default msemoji;
}
