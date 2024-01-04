# Introduction to CSS Grid - Intermediate HTML and CSS Course

## A Look Back at Flexbox

- Flexbox basics: aligning items along main and cross axes, and adjusting item sizes.
- Flexbox is ideal for one-dimensional layouts (rows or columns).
- Introduction to `flex-wrap` for wrapping items in rows or columns.

## Introduction to CSS Grid

- CSS Grid, developed since 1996, was inspired by traditional grid layouts in print media.
- Ideal for two-dimensional layouts, Grid simplifies the placement of items.
- Similar to Flexbox in terms of container and item structure but offers different alignment and positioning options.
- Introduction of the `gap` property in Grid, now available in Flexbox too.
- CSS Grid is not a replacement for Flexbox; they can be used in conjunction.

## When might you use Flexbox over Grid?

Flexbox is ideal for one-dimensional layouts where the content dictates the layout. Use Flexbox when:

- You need a simple, linear layout, either in a row or a column.
- The layout is driven by the size and order of the content.
- You require control over the alignment, spacing, and distribution of items within a container, without a concern for two-dimensional layout constraints.

## When might you use Grid over Flexbox?

Grid is more suitable for two-dimensional layouts where the layout is determined before the content. Use Grid when:

- You need to create complex layouts involving rows and columns.
- The layout is defined by explicit areas and tracks, and content fits into these predefined areas.
- You require precise control over the position and alignment of elements in both horizontal and vertical directions.

## When might you use the two of these tools together?

Combining Flexbox and Grid can be powerful in complex layouts. Use them together when:

- You have a two-dimensional grid layout, but within each grid item, you need flexibility in content arrangement (like a one-dimensional flex container).
- The overall page layout requires the precision of Grid, but individual elements (like navigation bars, headers, or footers) benefit from the simplicity and responsiveness of Flexbox.
- Flexbox’s content-driven approach complements Grid’s layout-first structure, allowing for a more versatile and responsive design.

## Creating a Grid

### Setting Up a Grid Container

- Define a grid container using `display: grid`.
- Direct children of a grid container automatically become grid items.

### Lines, Tracks, and Grid Structure

- Understanding the invisible structure of grids (lines and tracks).
- Utilizing developer tools to visualize grid layouts.

### Defining Columns and Rows

- Use `grid-template-columns` and `grid-template-rows` to define grid tracks.
- Introduction to shorthand properties for defining rows and columns.

### Explicit vs Implicit Grids

- Explicit grids: defined with `grid-template-columns` and `grid-template-rows`.
- Implicit grids: automatically created when extra grid items are present.
- Control implicit grids with `grid-auto-rows` and `grid-auto-columns`.

### Gap Property

- Adjust the spacing between rows and columns using `column-gap` and `row-gap`.
- Shorthand `gap` property for setting both row and column gaps.

## Positioning Grid Elements

## Key Concepts in Grid Positioning

### Tracks, Lines, and Cells

- **Tracks**: Rows or columns in a grid.
- **Lines**: Automatically created at the start and end of each track.
- **Cells**: The intersection of a row and a column, akin to a cell in a spreadsheet.

### Positioning Grid Items

- Using properties like `grid-column-start`, `grid-column-end`, `grid-row-start`, and `grid-row-end`.
- Shorthand properties like `grid-column` and `grid-row`.
- `grid-area` for more succinct positioning.

## Practical Application

- Creating a mock floor plan to understand grid item positioning.
- Advanced positioning using `grid-area`.
- Assigning names to grid areas for more intuitive layout definitions.

## Assignments and Practice

- Exercises in the CSS grid directory (e.g., grid-layout-1).
- Reading and reviewing resources on line-based placement and grid properties.

## Advanced Grid Properties

- Using the `repeat` function for creating multiple grid tracks.
- Employing fractional units (`fr`) for dynamic sizing.
- Setting minimum, maximum, and ideal track size boundaries.
- Utilizing `auto-fit` and `auto-fill` for dynamic rows or columns.
- Creating responsive grids with `auto-fit/auto-fill` and `minmax()`.

## Advanced Techniques in CSS Grid

### Dynamic Track Sizing

- Using `fr` units for responsive track sizing.
- Combining `fr` units with static units like pixels for mixed sizing.

### Minimum and Maximum Track Sizes

- Functions `min()` and `max()` to set bounds on track sizes.
- The `minmax()` function for specifying minimum and maximum sizes of grid tracks.
- `clamp()` for defining a range within which a grid track should vary.

### Responsive Grids with Auto-fit and Auto-fill

- `auto-fit` and `auto-fill` within `repeat()` for flexible track creation.
- Differences between `auto-fit` and `auto-fill` in handling empty grid space.
