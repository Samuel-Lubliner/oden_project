# Custom properties (aka CSS variables)

Allow us to reference a CSS value however many times we want throughout a file. Instead of having to update every single instance of a specific value we only need to update a single instance: the custom property itself. Custom properties can help us keep colors consistent throughout a project, something that will be really helpful as projects get larger.

We can even redefine custom properties under different contexts, which is incredibly useful for creating themes, such as the dark and light themes.

html

```html
<div class="container">
  <p>You're now viewing this example with the <span class='theme-name'>dark</span> theme!</p>
  <button class="theme-toggle">Toggle Theme</button>
</div>
```

css

```css
:root.dark {
  --border-btn: 1px solid rgb(220, 220, 220);
  --color-base-bg: rgb(18, 18, 18);
  --color-base-text: rgb(240, 240, 240);
  --color-btn-bg: rgb(36, 36, 36);
}

:root.light {
  --border-btn: 1px solid rgb(36, 36, 36);
  --color-base-bg: rgb(240, 240, 240);
  --color-base-text: rgb(18, 18, 18);
  --color-btn-bg: rgb(220, 220, 220);
}

body,
.theme-toggle {
  color: var(--color-base-text);
}

body {
  background-color: var(--color-base-bg);
  padding: 10px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

p {
  font-size: 1.5rem;
}

.theme-toggle {
  background-color: var(--color-btn-bg);
  border: var(--border-btn);
  font-size: 1.125rem;
  padding: 10px 20px;
}

.theme-toggle:hover {
  cursor: pointer;
}

.theme-toggle:focus {
  outline: var(--border-btn);
}
```

js

```js
function setTheme() {
  const root = document.documentElement;
  const newTheme = root.className === 'dark' ? 'light' : 'dark';
  root.className = newTheme;
  
  document.querySelector('.theme-name').textContent = newTheme;
}

document.querySelector('.theme-toggle').addEventListener('click', setTheme)
```

## Media queries

```html
<div class="container">
  <p>Based on your theme setting in your OS or user agent, you're now viewing this example with the <span class='theme-name'></span> theme!</p>
</div>
```

```css
:root {
  --border-btn: 1px solid rgb(36, 36, 36);
  --color-base-bg: rgb(240, 240, 240);
  --color-base-text: rgb(18, 18, 18);
  --color-btn-bg: rgb(220, 220, 220);
  --theme-name: "light";
}

@media (prefers-color-scheme: dark) {
  :root {
    --border-btn: 1px solid rgb(220, 220, 220);
    --color-base-bg: rgb(18, 18, 18);
    --color-base-text: rgb(240, 240, 240);
    --color-btn-bg: rgb(36, 36, 36);
    --theme-name: "dark";
  }
}

body {
  background-color: var(--color-base-bg);
  color: var(--color-base-text);
  padding: 10px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

p {
  font-size: 1.5rem;
}

.theme-name::after {
  content: var(--theme-name);
}
```
