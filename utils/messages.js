var moment = require('moment-timezone');

function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().tz('America/Mexico_City').format('h:mm a'),
  };
}

module.exports = formatMessage;
