# /bin/bash

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
pnpm run docs:build

# 进入生成的文件夹
cd docs/.vitepress/dist

git init
git add .
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/mcmcCat/mmcat-ui.git master:gh-pages

# 退出当前dist目录
cd -

# 删除dist目录
# rm -rf docs/.vitepress/dist