# bonusly-command-line

### What
Send 1 point of [Bonusly](https://bonus.ly) point each time to someone with [Bonusly API](https://bonus.ly/api)

### Motivation (or why)
[Bonusly](https://bonus.ly) ranks the most receivers/givers based on how many times you have received/sent a point, e.g. if you have recieved/given 10 times 1 point (totally 10 points), you will be ranked higher than someone who recives/gives 10 points in total 1 shot.

### Usage

Check out this repository:

```sh
$ git clone git@github.com:nluo/bonusly-command-line.git
```
Install the dependencies with npm:

```sh
$ cd bonusly-command-line

$ npm i
```

Edit the config.json inside the directory and replace with your Bonusly API `Access Token` (You could get from [here](https://bonus.ly/api))
```
{
  "token": "PUT YOUR BONUSLY API TOKEN HERE (https://bonus.ly/api/)"
}
```

Now you could start sending (or flooding :p) someone some bonusly points!

Example:

``` 
  node index.js bob.smith@example.com 10 "You're awesome #awesomeness! "
```

This will send 1 point each time repeat 10 times (totally 10 points) to bob.smith@example.com with message "You're aweomse #awesomeness!"
