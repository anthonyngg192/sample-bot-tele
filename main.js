const TG = require("telegram-bot-api");
const https = require("https");

const api = new TG({
  token: "",
});

api.setMessageProvider(new TG.GetUpdateMessageProvider());
api
  .start()
  .then((rs) => {
    console.log("API is started");
    console.log(rs);
  })
  .catch(console.err);

//#TODO get message group
api.on('update', update => {

    // update object is defined at
    // https://core.telegram.org/bots/api#update
    console.log(update)
})
