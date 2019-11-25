import ImgixUrlQueryParams from './ImgixUrlQueryParams';

export default function sizeAfterTransformations(
  originalWidth: number,
  originalHeight: number,
  imgixParams: ImgixUrlQueryParams = {},
) {
  const originalAspectRatio = originalWidth / originalHeight;

  let width = originalWidth;
  let height = originalHeight;

  if (imgixParams.rect) {
    const [w, h] = imgixParams.rect.split(',').slice(2, 4);

    width = Math.min(Math.max(0, parseInt(w)), originalWidth);
    height = Math.min(Math.max(0, parseInt(h)), originalHeight);
  }

  if (
    imgixParams.fit &&
    ['facearea', 'clamp', 'crop', 'fill', 'fillmax', 'scale'].includes(
      imgixParams.fit,
    ) &&
    imgixParams.w &&
    imgixParams.h
  ) {
    width = imgixParams.w;
    height = imgixParams.h;

    if (imgixParams.fit === 'crop') {
      if (imgixParams['max-h']) {
        height = Math.min(height, imgixParams['max-h']);
      }

      if (imgixParams['max-w']) {
        width = Math.min(width, imgixParams['max-w']);
      }

      if (imgixParams['min-h']) {
        height = Math.max(height, imgixParams['min-h']);
      }

      if (imgixParams['min-w']) {
        width = Math.max(width, imgixParams['min-w']);
      }
    }

    return { width, height };
  }

  if (imgixParams.fit === 'min' && imgixParams.w) {
    const w = imgixParams.w;
    const h = Math.round(imgixParams.w / originalAspectRatio);

    const resize = Math.min(width / w, height / h);
    width = Math.round(width * resize);
    height = Math.round(height * resize);

    return { width, height };
  }

  if (imgixParams.fit === 'min' && imgixParams.h) {
    const w = Math.round(imgixParams.h * originalAspectRatio);
    const h = imgixParams.h;

    const resize = Math.min(width / w, height / h);
    width = Math.round(width * resize);
    height = Math.round(height * resize);

    return { width, height };
  }

  if (imgixParams.w || imgixParams.h) {
    const scales = [];

    if (imgixParams.w) {
      scales.push(imgixParams.w / width);
    }

    if (imgixParams.h) {
      scales.push(imgixParams.h / height);
    }

    let scale = Math.min(...scales);

    if (imgixParams.fit === 'max') {
      scale = Math.max(1, scale);
    }

    width = Math.round(scale * width);
    height = Math.round(scale * height);

    return { width, height };
  }

  return { width, height };
};
