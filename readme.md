[![NPM][npm]][npm-url]
[![Deps][deps]][deps-url]
[![Tests][travis]][travis-url]
[![Coverage][cover]][cover-url]

# posthtml-script-to-file

## Install
```bash
npm i -D posthtml-script-to-file
```

## Usage


### Example

```js
const posthtml = require('posthtml')
const scriptToFile = require('posthtml-script-to-file')

const html = readFileSync('path/to/html', 'utf8')

posthtml([ scriptToFile({ path: './dist/index.js' }) ])
    .process(html)
    .then((result) => console.log(result.html))
```

__`index.html`__

```html
<html>
<head>
    <title>Wow</title>
    
</head>
<body style="background: #fff;">
  <h3> vnjson  </h3>
  <h4>javascript visual novel engine</h4>
  <script type="text/javascript">
    vnjs.on('preload', function(){
        return ['background.png'];
    });
  </script>
  <script type="text/javascript">
    vnjs.on('load', function(screen){
        let { parse, next } = this;
          
          parse({
              'scene': 'background',
              'screen': screen
            });
          next();
    });
  </script>
</body>
</html>
```

__`index.js`__

```javascript

vnjs.on('preload', function(){
        return ['background.png'];
});

vnjs.on('load', function(screen){
        let { parse, next } = this;
          
          parse({
              'scene': 'background',
              'screen': screen
            });
          next();
});

```

## LICENSE 

> MIT License (MIT)

