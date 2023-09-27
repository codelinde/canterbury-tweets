**NOTICE:** Obviously this no longer works since I can't afford to make API calls to Twitter.

# Canterbury Tweets

A [Node.js](https://github.com/nodejs/node) bot living on [Heroku](http://heroku.com) that tweets ~two~ four lines from Geoffrey Chaucer's classic, the Canterbury Tales, every hour, to [this account](http://twitter.com/canterburytwts).

~Lines are taken via an HTTP request to one of the tales (selected at random) hosted on [Wikisource](https://en.wikisource.org/wiki/The_Canterbury_Tales) (a very special thanks to them). The modernized version of the prologue and "Chaucer's retraction" are left out.~

For more information on the Canterbury Tales, visit [Wikipedia](https://en.wikipedia.org/wiki/Canterbury_tales).

#### npm dependencies
* [twit](https://github.com/ttezel/twit)
* ~[unfluff](https://github.com/ageitgey/node-unfluff)~
* ~[line-by-line](https://github.com/Osterjour/line-by-line)~
* ~[request](https://github.com/request/request)~

#### Explanation of changes as of Feb 18 2020
Twit is now the only npm dependency. Aside from request having been deprecated, WikiSource is no longer used, as they changed the formatting of the page sources in many highly problematic ways. I realized that however cool scraping the webpages in real time was, not to mention converting them to formatless lines JavaScript can understand, it created a reliability issue. I have instead opted to convert the entirety of Chaucer's text taken from Poetry In Translation to a JavaScript array ahead of time. Furthermore, in the wake of Twitter's increase in total character allowance, there will now be 4 lines tweeted rather than 2.

