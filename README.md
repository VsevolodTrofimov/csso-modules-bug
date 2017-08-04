# csso-modules-bug
without postcss-csso
```bash
npm run serve-test
```

with postcss-csso
```bash
npm run serve-prod
```

it will be served on `localhost:80`

---

See `src/index(.js|.sass)` for reproduction

---

`postcss.config` is in `__config__/utility/`
`postcss-csso` is enabled if `NODE_ENV` is `production`

Webpack's  rules for css are in `__config__/rules/css`

---

values for `style`s is being console.logged

if background is red it means `styles.somevar` is not present

if background is green it is

---

Yeah it only happens to Sass variables
