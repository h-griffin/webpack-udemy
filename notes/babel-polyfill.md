## Adding babel-polyfill

The current setup won't support all browsers theoretically supported by React. Features like `Promises` and `Object.assign()`  are missing in older browsers - especially in IE of course.

If you need to support these browsers, you need to add a polyfill (a package which provides these features for older browsers).

The Babel docs explain how you can take advantage of Babel's built-in "Polyfill auto injecting" feature: https://babeljs.io/docs/en/babel-polyfill

Simply install two packages:

`npm install --save core-js`

and

`npm install --save regenerator-runtime `

Change the config of your `@babel/preset-env`  babel preset in the `.babelrc`  file: 

```
"presets": [
    ["@babel/preset-env", {
        "targets": {
            "browsers": [
                "> 1%",
                "last 2 versions"
            ]
        },
        "useBuiltIns": "usage"
     }],
    ...
 ],
```