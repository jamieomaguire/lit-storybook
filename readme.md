# Lit Storybook Example

This is a basic example of combining Storybook and Lit to create a web component library.


## `<lit-button>`
This is a basic button I've made following the Lit documentation.

This Lit-Button component is composed of a js file that houses the web component code, and a javascript module that exports the CSS styles to apply.

Lit does not provide a way to work with plain CSS files unfortunately. However if you use the VSCode plugin `lit-plugin` by Rune Mehlsen then you will get CSS intellisense and syntax highlighting when writing CSS within the `css` function provided by Lit.

The only prop currently used by the component is `size`. It doesn't do anything except render in the component so you can see it being reactive when you change the value in Storybook.

I've also provided a slot in the button to add other content.

## `<button>`
The other 'button' folder is a standard web component example that comes with storybook.

## `<my-element>`
'My Element' is taken from the Lit vanilla JS starter kit and shows how to add a bit more interactivity to a component.

### To run the project:
```
yarn

yarn storybook
```

### How this was made:
1. Create a new folder named `wc-lib`
2. CD into `wc-lib`
3. `yarn init -y`
4. `npx sb init`
5. Choose `y` when asked if you want to choose your own framework/technology
6. Go down the list and select `web components`
7. It should create a basic storybook example folder with web components built using `lit-html` which is a little different to what we want, but shows good examples.
