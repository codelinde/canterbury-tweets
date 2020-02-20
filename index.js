
// npm dependencies
const fs = require("fs");
const Twit = require("twit");

// Import Twitter account data
const config = require("./config");

// Import Canterbury text
const canterburyText = require("./canterburyText");

// Create new Twit object from imported account data
const account = new Twit(config);

// Initial to make sure working
runTweet();

// Set interval for automatic Tweet (once an hour)
setInterval(runTweet, 1000 * 60 * 60);

function runTweet() {
  let randLine = Math.floor(Math.random() * canterburyText.length);

  // If generated number is odd, make it even
  if (randLine % 2 !== 0) {
    if (randLine == canterburyText.length) {
      randLine -= 1;
    } else {
      randLine += 1;
    }
  }

  // Call tweeting function
  tweetIt();

  function tweetIt() {
    let tweet = {
      status:
        canterburyText[randLine] +
        "\r\n" +
        canterburyText[randLine + 1] +
        "\r\n" +
        canterburyText[randLine + 2] +
        "\r\n" +
        canterburyText[randLine + 3] +
        "\r\n#canterburytales"
    };

    console.log(tweet);

    account.post("statuses/update", tweet, tweeted);

    function tweeted(err, data, response) {
      if (err) {
        console.log("Something went wrong--trying again");
        runTweet();
      } else {
        console.log("Tweet successful!");
      }
    }
  }
}
