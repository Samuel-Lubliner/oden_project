# Relative and Absolute Units

## Relative Units

- **Relative to other measures** like an element's parent or the root element's size.
- **Adapts to screen sizes or user preferences**.
- Common units:
  - `em`: Relative to the font-size of the element.
  - `rem`: Relative to the font-size of the root element.
  - `vw` (viewport width): Relative to 1% of the width of the viewport.
  - `vh` (viewport height): Relative to 1% of the height of the viewport.
  - `%`: Relative to the parent element.

## Absolute Units

- **Fixed and do not change based on context**.
- **Precise measurements that do not scale**.
- Common units:
  - `px` (pixels): One pixel on the screen.
  - `pt` (points): 1/72 of an inch, often used in print.
  - `cm`, `mm`: Metric units, more common in print design.

## When to Use Different Units

### Relative Units (em, rem, vw, vh, %)

- **Responsive Design**: Scales well on different screen sizes.
- **Accessibility**: Text scales correctly for browser settings.
- **em**: For scalable component design.
- **rem**: For consistent global styling.
- **vw/vh**: For layouts that scale with the viewport.

### Absolute Units (px, pt, cm, mm)

- **Pixel-Perfect Design**: For exact measurements, like grid alignment.
- **px**: For fixed-size elements like icons or precise layout details.

## Why Use em or rem for Font-Size

- **Better scalability and accessibility**.
- Allows text to adjust size based on user settings.

## Instances to Use vh and vw

- Creating responsive designs that cover a percentage of the viewport (e.g., full-screen layouts or sidebars).

## Instances to Use px

- Fixed-size elements like icons or small layout details (borders, shadows) that require precision.
