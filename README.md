# Canterbury Tweets

#### currently under maintenance!

A [Node.js](https://github.com/nodejs/node) bot living on [Heroku](http://heroku.com) that tweets two lines from Geoffrey Chaucer's classic, the Canterbury Tales, every hour, to [this account](http://twitter.com/canterburytwts).

Lines are taken via an HTTP request to one of the tales (selected at random) hosted on [Wikisource](https://en.wikisource.org/wiki/The_Canterbury_Tales) (a very special thanks to them). The modernized version of the prologue and "Chaucer's retraction" are left out.

For more information on the Canterbury Tales, visit [Wikipedia](https://en.wikipedia.org/wiki/Canterbury_tales).

#### npm dependencies
* [twit](https://github.com/ttezel/twit)
* [unfluff](https://github.com/ageitgey/node-unfluff)
* [line-by-line](https://github.com/Osterjour/line-by-line)
* [request](https://github.com/request/request)

