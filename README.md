# vuetypescript-pxtransformationvw-loader
一个可以将vue typescript标签内样式px转换vw的 webpack loader

### install

```
yarn add style-vw-loader
```

### Use

vue-cli3

```javascript
{
  chainWebpack: (config) => {
      config.module
      .rule('vuetypescript-pxtransformationvw-loader')
      .test(/\.tsx$/)
      .use('vuetypescript-pxtransformationvw-loader')
        .loader('vuetypescript-pxtransformationvw-loader')
    }
}
```



### option
默认配置
```javascript
defaultsProp = {
  unitToConvert: 'px',
  viewportWidth: 350,
  unitPrecision: 5,
  viewportUnit: 'vw',
  fontViewportUnit: 'vw',
  minPixelValue: 1
}
```


