# website-hexo-container 帮助文档

<p align="center" class="flex justify-center">
    <a href="https://www.serverless-devs.com" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=website-hexo-container&type=packageType">
  </a>
  <a href="http://www.devsapp.cn/details.html?name=website-hexo-container" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=website-hexo-container&type=packageVersion">
  </a>
  <a href="http://www.devsapp.cn/details.html?name=website-hexo-container" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=website-hexo-container&type=packageDownload">
  </a>
</p>

<description>

> ***部署Hexo 博客到函数计算***

</description>

<table>



</table>

<codepre id="codepre">

</codepre>

<deploy>

## 部署 & 体验

<appcenter>

- :fire: 通过 [Serverless 应用中心](https://fcnext.console.aliyun.com/applications/create?template=website-hexo-container) ，
[![Deploy with Severless Devs](https://img.alicdn.com/imgextra/i1/O1CN01w5RFbX1v45s8TIXPz_!!6000000006118-55-tps-95-28.svg)](https://fcnext.console.aliyun.com/applications/create?template=website-hexo-container)  该应用。 

</appcenter>

- 通过 [Serverless Devs Cli](https://www.serverless-devs.com/serverless-devs/install) 进行部署：
    - [安装 Serverless Devs Cli 开发者工具](https://www.serverless-devs.com/serverless-devs/install) ，并进行[授权信息配置](https://www.serverless-devs.com/fc/config) ；
    - 初始化项目：`s init website-hexo-container -d website-hexo-container`   
    - 进入项目，并进行项目部署：`cd website-hexo-container && s deploy -y`

</deploy>

<appdetail id="flushContent">

# 应用详情

本项目是将非常流行文档框架 `hexo`，使用image的方式部署到阿里云 Serverless 平台（函数计算 FC）。

> hexo 将助您在极短时间内搭建优美的文档网站，
您可以专注于内容创作，仅需编写 Markdown 文件即可。

通过 Serverless Devs 开发者工具，您只需要几步，就可以体验 Serverless 架构，带来的降本提效的技术红利。

部署完成之后，您可以看到系统返回给您的案例地址，例如：

![图片alt](https://img.alicdn.com/imgextra/i1/O1CN01gIuD1M1Ux3mW5zrzR_!!6000000002583-2-tps-1470-672.png)

此时，打开案例地址，就可以看到测试的应用详情：

![图片alt](https://img.alicdn.com/imgextra/i4/O1CN01crbYOg1MXOeyDUzQ0_!!6000000001444-2-tps-2532-1328.png)

## 实现原理
使用函数计算的 [Custom Container](https://help.aliyun.com/document_detail/179368.html) 将Hexo项目封装成函数，需要实现一个WebServer来监听函数计算发来的所有请求。本项目利用 [Express](https://expressjs.com/) 框架实现[入口代码](https://github.com/devsapp/website-hexo-container/blob/main/src/code/index.js)，接受函数计算的所有流量，转换成 Hexo 网站的静态页。

在部署前需要通过 [s build](https://github.com/devsapp/fc/blob/main/docs/zh/command/build.md#%E5%9F%BA%E7%A1%80%E6%93%8D%E4%BD%9C-use-docker) 能力完成自定义镜像的构建和发布。


</appdetail>

<devgroup>

## 开发者社区

您如果有关于错误的反馈或者未来的期待，您可以在 [Serverless Devs repo Issues](https://github.com/serverless-devs/serverless-devs/issues) 中进行反馈和交流。如果您想要加入我们的讨论组或者了解 FC 组件的最新动态，您可以通过以下渠道进行：

<p align="center">

| <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407298906_20211028074819117230.png" width="130px" > | <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407044136_20211028074404326599.png" width="130px" > | <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407252200_20211028074732517533.png" width="130px" > |
|--- | --- | --- |
| <center>微信公众号：`serverless`</center> | <center>微信小助手：`xiaojiangwh`</center> | <center>钉钉交流群：`33947367`</center> | 

</p>

</devgroup>