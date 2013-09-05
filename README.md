mjson-server
============

You can run the mjson via a browser.

# Overview

- Output a formatted neatly JSON.
- Eliminates comments in JSON using JSON.minify.
- When JSON parse error occur, show error message of jsonlint and syntaxhighlight.


# install

```sh
$ npm install mjson-server -g
$ mjson-server
Express server listening on port 3000

Browser access: http://0.0.0.0:3000/
```

# ScreenShots

![top page](https://raw.github.com/fkei/mjson-server/master/screenshots/top.png)

![error](https://raw.github.com/fkei/mjson-server/master/screenshots/error.png)


# source install

```sh
$ git checkout https://github.com/fkei/mjson-server.git
$ cd mjson-server
$ npm install .
$ node app
Express server listening on port 3000

Browser access: http://0.0.0.0:3000/
```

# License

The MIT License (MIT)
