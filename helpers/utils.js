'use strict';

const { v4: uuidv4 } = require(`uuid`);

function today (format) {
  try {
    let result;
    const init = Math.floor(new Date().getTime() / 1000 + (7 * 3600));
    if (format === `epoch`) {
      result = init;
    } else {
      result = new Date(init * 1000);
      console.log(`date`, result);
    }
    return result;
  } catch (error) {
    console.log(`##Error on Today Utils function`, error);
  }
}

module.exports = {
  uuid: uuidv4(),

  now: (format) => {
    const result = today(format);
    return result;
  },

  uid: (length) => {
    const result = [];
    const chars = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`;
    const charLength = chars.length;

    function getRandomInt (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for (let i = 0; i < length; ++i) {
      result.push(chars[getRandomInt(0, charLength - 1)]);
    }

    return result.join(``);
  }
};
