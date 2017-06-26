# color-converter-cli

Convert colors to other forms in a handy CLI

### Install
```
$ npm i -g color-converter-cli
```

### Usage
```bash
$ color-convert --help

  Usage
    $ color-convert

  Options
    -c, --color   Specify the color to pass to the CLI [Mandatory]
    -h, --hex     Converts the color passed to Hexidecimal
    -r, --rgb     Converts the color passed to RGB
    -c, --cmyk    Converts the color passed to CMYK

$ color-convert -c "255,255,255" -h
> #FFFFFF
```