# /bin/bash

# 确保脚本抛出遇到的错误
set -e

# 进入packages中进行打包发布
cd packages

# 读取package.json中的version
version=`jq -r .version package.json`

pnpm build

npm publish--registry=https://registry.npmjs.org/

# 升级 vue-amazing-ui 依赖版本
pnpm up mmcat-ui@$version

# 提交版本更新代码到github
git add .
git cm -m "update $version"
git push