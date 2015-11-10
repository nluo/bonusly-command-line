var BonuslyClient = require('bonusly-client'),
    config = require('./config.json');

if (!config.token) {
	throw new Error('Bonusly Token must be provided, please visit https://bonus.ly/api/');
}

var client = new BonuslyClient(config.token),
    to_ = process.argv[2],
    points = process.argv[3],
    message = process.argv[4];

for (var i=0; i<points; i++) {
  client.giveBonus(to_, message, 1, function(error, result) {
  		if (error) {
  		     console.log('Error occurs, error is: ', error);
  		} else {
  		     console.log('Given 1 point to: ', result);
  		}
  });
}
