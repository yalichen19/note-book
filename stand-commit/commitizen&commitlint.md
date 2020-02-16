# commitizen&commitlint 的使用
使用 [commitizen](https://github.com/commitizen/cz-cli) 结合 [commitlint](https://github.com/conventional-changelog/commitlint) 作为规范提交信息统一工具。项目不能直接使用 git commit ，改为使用git cz。

![git cz 提交流程](https://raw.githubusercontent.com/commitizen/cz-cli/master/meta/screenshots/add-commit.png)

### 全局安装方法
```shell
npm install -g commitizen cz-conventional-changelog
echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc
```
全局模式下, 需要 ~/.czrc 配置文件, 为 commitizen 指定 Adapter（统一使用 cz-conventional-changelog）. Windows 系统需要手动添加 .czrc 文件到用户根目录`C:\Users\%username%` 下

安装成功后，在对应的git项目中，凡是用到git commit命令，一律改为使用git cz

### 项目中使用方法
通过脚手架和 fund-preset-vue 预置模板生成的项目已集成，只需注意要使用 npm run commit 代替 git commit 提交。其他项目添加方法如下。
#### 使用 commitizen 格式化 commit message
安装 commitizen
```shell
yarn add commitizen --dev
```
commitizen 通常要与适配器一起使用，通俗点来说是需要一个 commit message 模板，目前主流的是符合 Angular 规范的 cz-conventional-changelog 可执行下面的命令来自动安装&配置 cz-conventional-changelog：
```shell
./node_modules/.bin/commitizen init cz-conventional-changelog --yarn --dev
```

上面的命令做了两项操作，也可手动添加：

1. 通过 yarn 安装了包依赖 cz-conventional-changelog。
2. 在 package.json 中自动配置了如下内容：
```json
"config": {
  "commitizen": {
    "path": "./node_modules/cz-conventional-changelog"
  }
}
```
添加 git-cz 命令到 scripts 中, 之后便可用 npm run commit 代替 git commit 提交信息。
```json
// package.json
"scripts": {
  "commit": "git-cz"
}
```

#### 使用校验约束工具 commitlint
安装
```shell
yarn add @commitlint/config-conventional @commitlint/cli --dev
```

在 package.json 中添加配置，也支持类似于 .commitlintrc.js、.commitlintrc.json、.commitlintrc.yml 名称的配置文件
```shell
// package.json
"commitlint": {
  "extends": [
    "@commitlint/config-conventional"
  ]
}
```

安装huksy（git钩子工具）
```shell
yarn add husky --dev
```

在package.json中配置git commit提交时的校验钩子：

```shell
"husky": {
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }  
}
```
之后再提交不规范的 commit 信息，将会报错。可用于项目中约束其他开发人员提交规范信息。

### 规范格式说明
生成的提交信息格式为
```shell
<commit-type>[(commit-scope)]: <commit-message>
```
说明具体：
- commit-type 类型：
  - build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
  - ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
  - docs：文档更新
  - feat：新增功能
  - fix：bug 修复
  - perf：性能优化
  - refactor：重构代码(既没有新增功能，也没有修复 bug)
  - style：不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)
  - test：新增测试用例或是更新现有测试
  - revert：回滚某个更早之前的提交
  - chore：不属于以上类型的其他类型
- commit-scope 可选，表示范围，例如：refactor(cli)，表示关于 cli 部分的代码重构。
- commit-message 提交记录的信息。