npm i

cd vendetta/plugins
rm -rf node_modules
npm i
node build.mjs
cd ../../

node build.js
npx http-server ./dist