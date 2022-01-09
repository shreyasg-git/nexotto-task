### Devloper Notes -

- Styling - TailwindCSS is used globally, check `/src/components/App/App.css` for global classes.

### Style Guide -

- Buttons - use `.std-btn` as className, can be customized by wrapping around a <div>.
- Input Element - use `.std-input`, can be customized by wrapping around a <div>.

## Colors -

- transparent: "transparent",
- dark: "#00072E",
- semiDark: "#126E82",
- semiLight: "#92FFE6",
- light: "#E5FFFA",
- greyText: "#424242",
- bgGrey: "#282828",
- grey2: "#292B2E",
- grey3: "#2A2D30",
- green1: "#27E1C0",

All colours given above are added to `tailwind.config.js` and can be used as `bg-{colorName}`.

### Features -

- All Side Effects are handled by `redux-saga`
- All global State is managed by `redux store`
- Forms are custom built, and have controlled components.
- All forms validation is done using `Yup`.
