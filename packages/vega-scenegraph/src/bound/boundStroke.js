export default function(bounds, item) {
  if (item.stroke && item.opacity !== 0 && item.stokeOpacity !== 0) {
    bounds.expand(item.strokeWidth != null ? item.strokeWidth : 1);
  }
  return bounds;
}
