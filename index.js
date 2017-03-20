// Import Wikisource page URLs for different sections of the Canterbury Tales
var pages = require('./pages');

// Randomize URL from imported pages
var randomUrl = pages[Math.floor(Math.random() * pages.length)];

// npm dependencies
var request = require('request');
var extractor = require('unfluff');
var fs = require('fs');
var Twit = require('twit');
var LineByLineReader = require('line-by-line');

// Import Twitter account data
var config = require('./config');

// Create new Twit object from imported account data
var account = new Twit(config);

// Create empty array
var textDump = [];

// Initial to make sure working
runTweet();

// Set interval for automatic Tweet (once an hour)
setInterval(runTweet, 1000*60*60);

// Scrape the page 
function runTweet() {
    request(randomUrl, function (error, response, body) {

    if (!error && response.statusCode == 200) {

        var data = extractor(body);

        // Write the data to a txt file
        fs.writeFile("preview.txt", data.text);

        // Set up new line reading instance
        var lr = new LineByLineReader('preview.txt');

        lr.on('error', function (err) {
        });

        lr.on('line', function (line) {
            textDump.push(line);
        });

        // After the last line is read, filter out empty strings
        lr.on('end', function () {

            var filtered = textDump.filter(function(entry) { return entry.trim() != ''; });

            // Remove first six elements in case title is included in output
            filtered.splice(0, 6);

            // Generate random number between 1 and length of filtered
            var randLine = Math.floor(Math.random() * filtered.length);

            // If generated number is odd, make it even
            if(randLine % 2 !== 0){ 
                if(randLine == filtered.length) {
                    randLine -= 1;
                }
                else {
                    randLine += 1;
                }
            }

            // Call tweeting function
            tweetIt();

            function tweetIt() {

                var tweet = {
                    status: filtered[randLine] + "\r\n" + filtered[randLine+1] + "\r\n#canterburytales"
                }

                account.post('statuses/update', tweet, tweeted);

                function tweeted(err, data, response) {
                    if(err) {
                        console.log("Something went wrong--trying again");
                        runTweet();
                    }
                    else {
                        console.log("Tweet successful!");
                    }
                }
            }
        });

    }
    });
}

