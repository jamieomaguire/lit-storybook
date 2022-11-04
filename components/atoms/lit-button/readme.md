# Lit Button

This is a basic button I've made following the Lit documentation. The other 'button' folder is a standard web component example that comes with storybook. 'My Element' is taken from the Lit vanilla JS starter kit.

This Lit-Button component is composed of a js file that houses the web component code, and a javascript module that exports the CSS styles to apply.

Lit does not provide a way to work with plain CSS files unfortunately. However if you use the VSCode plugin `lit-plugin` by Rune Mehlsen then you will get CSS intellisense and syntax highlighting when writing CSS within the `css` function provided by Lit.

The only prop currently used by the component is `size`. It doesn't do anything except render in the component so you can see it being reactive when you change the value in Storybook.

I've also provided a slot in the button to add other content.