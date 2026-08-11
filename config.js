require('dotenv').config();

const App_data = {
  apps: {
    name: process.env.APP_NAME||'default name',
    version: process.env.App_Version || '2.3.23',
    PORT: process.env.PORT || '4000',
    node: process.env.NODE_env||'deft',


  },
};

console.log(App_data.apps);

module.export = App_data;