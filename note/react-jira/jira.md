# 项目需要实现的功能

- ![image-20220112161718208](C:%5CUsers%5C%E7%8E%8B%E5%BC%BA%5CDesktop%5Cnote%5Creact-jira%5C1.assets%5Cimage-20220112161718208.png)
- 技术栈
  - ![image-20220112162314689](C:%5CUsers%5C%E7%8E%8B%E5%BC%BA%5CDesktop%5Cnote%5Creact-jira%5C1.assets%5Cimage-20220112162314689.png)
  - ![image-20220112162330046](C:%5CUsers%5C%E7%8E%8B%E5%BC%BA%5CDesktop%5Cnote%5Creact-jira%5C1.assets%5Cimage-20220112162330046.png)
  - ![image-20220112162421480](C:%5CUsers%5C%E7%8E%8B%E5%BC%BA%5CDesktop%5Cnote%5Creact-jira%5C1.assets%5Cimage-20220112162421480.png)
  - ![image-20220112162456192](C:%5CUsers%5C%E7%8E%8B%E5%BC%BA%5CDesktop%5Cnote%5Creact-jira%5C1.assets%5Cimage-20220112162456192.png)
  - ![image-20220112162700529](C:%5CUsers%5C%E7%8E%8B%E5%BC%BA%5CDesktop%5Cnote%5Creact-jira%5C1.assets%5Cimage-20220112162700529.png)
  - ![image-20220112162725406](C:%5CUsers%5C%E7%8E%8B%E5%BC%BA%5CDesktop%5Cnote%5Creact-jira%5C1.assets%5Cimage-20220112162725406.png)
  - ![image-20220112162801812](C:%5CUsers%5C%E7%8E%8B%E5%BC%BA%5CDesktop%5Cnote%5Creact-jira%5C1.assets%5Cimage-20220112162801812.png)



# 初始化项目

## 用Create React App 初始化项目

- 官网有介绍。

- 我们需要创建的是Typescript项目

  - ```javascript
    npx create-react-app jira --template typescript
    // 使用不同的包管理器创建项目，没尝试
npx create-react-app jira --template typescript --use-npm
    npx create-react-app jira --template typescript --use-npm
  ```
    
  - 使用上面命令一直报错，查了stackoverflow，找到一个解决方案。npx clear-npx-cache，再重新执行方案。
  
- scr目录

  - index.tsx文件是做一些准备工作，APP.tsx 是做app本身的东西。
  - react-app-env.d  这个是引入一些预先定义好typescrpt的类型

- public文件夹是不参与打包的，它里面包含了真正的静态文件。

- manifest 是用来做PWA的,配置PWA

- package.json是每个前端项目的入口文件



## 配置eslint、prettier和commitlint规范

### tsconfig.json配置

- compilerOptions中配置baseUrl,目的是引入文件的时候如果写了绝对路径，它会自动从配置的地址目录中找
  - 配置 compilerOptions
    ![image-20220113101101510](jira.assets/image-20220113101101510.png)
  - 我们的绝对路径会去src下面寻找
    ![image-20220113101010100](jira.assets/image-20220113101010100.png)
- 

### 如何确保编辑我们项目的人都能采用统一的格式化配置呢--prettier

- 

