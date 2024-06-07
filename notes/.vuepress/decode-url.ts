/***************************************************
 * Created by nanyuantingfeng on 2020/3/1 10:10. *
 ***************************************************/
import { decode } from "mdurl";

import type MarkdownIt = require("markdown-it");

export type DecodeURLOption = RegExp | string[] | "*" | "." | "./";

const needDecode = (url: string, config: DecodeURLOption): boolean =>
  config === "./" || config === "."
    ? !/^(\w+?:\/)?\//u.test(url)
    : config instanceof RegExp
    ? config.test(url)
    : Array.isArray(config)
    ? config.some((a) => url.startsWith(a))
    : true;

const urlDecode = (url: string, config: DecodeURLOption): string => {
  const realURL = needDecode(url, config) ? decode(url) : url;

  return /^(\w+?:\/)?\.?\//.test(realURL) ? realURL : `./${realURL}`;
};

export const decodeURL = (
  md: MarkdownIt,
  config: DecodeURLOption = "*"
): void => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const originalImageRender = md.renderer.rules.image!;

  md.renderer.rules.image = (tokens, idx, options, env, self): string => {
    const token = tokens[idx];

    token.attrSet("src", urlDecode(token.attrGet("src") || "", config));

    return originalImageRender(tokens, idx, options, env, self);
  };
};
