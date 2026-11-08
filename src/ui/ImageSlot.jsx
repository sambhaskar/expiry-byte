import React from 'react';

// An article image. Until the file has been added and marked ready in content/articles.js,
// a calm branded placeholder holds its place instead of a broken image.
// A ready image uses its own proportions (w/h) so nothing is cropped away.
export default function ImageSlot({ image, ratio = '16 / 9', eager = false, className = '' }) {
  if (image?.ready) {
    const w = image.w || 1600;
    const h = image.h || 900;
    return (
      <img className={`img-slot ${className}`} src={`/images/insights/${image.file}`} alt={image.alt}
        style={{ aspectRatio: `${w} / ${h}` }} width={w} height={h}
        loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : undefined} decoding="async" />
    );
  }
  return (
    <div className={`img-slot img-slot--empty ${className}`} style={{ aspectRatio: ratio }} role="img" aria-label={image?.alt}>
      <span className="img-slot__mark" aria-hidden="true"><i /><i /><i /></span>
    </div>
  );
}
