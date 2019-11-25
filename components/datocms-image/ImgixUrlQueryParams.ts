// https://docs.imgix.com/apis/url/size/fit
export enum ImgixFit {
  clamp = 'clamp',
  clip = 'clip',
  crop = 'crop',
  facearea = 'facearea',
  fill = 'fill',
  fillmax = 'fillmax',
  max = 'max',
  min = 'min',
  scale = 'scale',
}

// https://docs.imgix.com/apis/url/size/crop
export type ImgixCrop = Partial<
  Record<
      'top' | 'bottom' | 'left' | 'right' | 'faces' | 'focalpoint' | 'edges' | 'entropy',
      boolean
  >
>;

// https://docs.imgix.com/apis/url/format/cs
export enum ImgixColorSpace {
  srgb = 'srgb',
  adobergb1998 = 'adobergb1998',
  tinysrgb = 'tinysrgb',
  strip = 'strip',
}

// https://docs.imgix.com/apis/url/auto
export type ImgixAuto = Partial<Record<'compress' | 'enhance' | 'format' | 'redeye', boolean>>;

// https://docs.imgix.com/apis/url/format/ch
export type ImgixClientHints = Partial<Record<'width' | 'dpr' | 'saveData', boolean>>;

// https://docs.imgix.com/apis/url/size/ar
export type ImgixAspectRatio = {
  w: number;
  h: number;
};

type ImgixUrlQueryParams = {
  ar?: ImgixAspectRatio;
  auto?: ImgixAuto;
  q?: number;
  h?: number;
  w?: number;
  fit?: ImgixFit;
  dpr?: number;
  crop?: ImgixCrop;
  bg?: string;
  ch?: ImgixClientHints;
  blur?: number;
  cs?: ImgixColorSpace;
  faceindex?: number;
  facepad?: number;
  rect?: string;
  'max-h'?: number;
  'max-w'?: number;
  'min-h'?: number;
  'min-w'?: number;
};

export default ImgixUrlQueryParams;