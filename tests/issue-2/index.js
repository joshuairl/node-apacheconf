path = require("path");
apacheconf = require("../../");
httpdConf = path.join(process.cwd(),"httpd.conf");
apacheconf(httpdConf, function (err, config, parser) {
  console.log(config);
});