Sign up form 📃

<a href='https://nightrunner4.github.io/Sign-up-Form'>👉 Click here to see</a>

This page is currently being developed.

When a theme button is clicked, a black outer border appears to indicate that it's been selected. 

When doing this, the position of the buttons won't change based on which one is selected. This is thanks to using a shadow emulating an outer border instead of a border, since the shadown does't add size, the grid children stay completely still. There's probably a better method to do this out there.

The layout for the whole page is done mainly with flexbox, specific parts, like the theme buttons and the form, are done with grid. I wanted to fine tune the exact positions the flex and grid children, specifically, I wanted the 'theme-buttons' to move up to align vertically with the form. I tried different options, like margin or positioning (relative & absolute), I ended up finding the property 'transform: translate()', which was surprisingly useful, since it allows moving a flex item relative to it's original position without affecting the original flow of the document, so it's perfect for fine tuning while still building the core of the layout with flex and grid properties.

The 'Create Account' button slightly darkens by 8% on hover. The way this is implemented works generically no matter the theme color, without the need to define 3 new colors, and uses no JS. It defines the button color in hsl() with a '--darken' variable substracted on the lightness. The default value of darken is 0%, and 8% on hover.

The page is not mobile compatible but it does respond well to different desktop resolutions.

btw, why are template literals so awesome? 

<b>Potential Improvements:</b> 💪


<b>Found Bugs:</b> 🪲



by nightrunner4