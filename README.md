# vuetypescript-pxtransformationvw-loader
一个可以将vue typescript标签内样式px转换vw的 webpack loader

### install

```
yarn add vuetypescript-pxtransformationvw-loader
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


