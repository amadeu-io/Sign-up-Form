Sign up form 📃

<a href='https://amadeuio.github.io/Sign-up-Form'>👉 Click here to see</a>

The form has three different themes (blue 🔵, green 🟢 and orange 🟠) that can be easily switched with the theme buttons. When a theme button is clicked, a black outer border appears on it to indicate that it's been selected. When doing this, the position of the buttons won't change based on which one is selected, since the border is a shadow emulating an border, which doesn't take any pixel space, leaving the total button size unchanged and therefore not changing the position of the grid children in the grid. There's probably a better method to do this out there.

The 'Create Account' button color adapts to the theme and slightly darkens by 8% on hover. The way this is implemented works generically no matter the theme color, without the need to define 3 new colors, and uses no JS. It defines the button color in hsl() with a '--darken' variable substracted on the lightness. The default value of darken is 0%, and 8% on hover.

The form validates all inputs, some validations are more strict, like the password, which has a strength meter that works in real time, as well as a password confirmation checker, and others more permisive, like the name and last name which just require the field not to be empty. The password meter likes length, different types of characters and entropy. It also checks the password is not on a list of commonly used weak passwords such as 'password123456' that would otherwise pass the test.

The inputs aim to make the process user-friendly, showing feedback only on blur, to minimise distractions while the user is entering information, but once blurred an input at least once, the form starts providing a bit more feedback in real time. This behaviour is <a href="https://twitter.com/vponamariov">@vponamariov</a>'s <a href="https://twitter.com/vponamariov/status/1380182211576664067">'Eager Mode'</a>.

The form has a minimalistic and modern layout, done mainly with flexbox. Specific parts, like the theme buttons and the form, are done with grid.

The page is not mobile compatible yet but it does respond well to different desktop resolutions.

btw, why are template literals so awesome?

<b>Potential Improvements:</b> 💪

- Better screen resolution responsiveness
- Mobile compatiblilty
- More strict phone number validation
- Add a pop up window the explains what makes a password strong according to our strength meter

by amadeuio
