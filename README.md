# bonusly-command-line

### What
Send 1 point of bonusly point to someone with [Bonusly API](https://bonus.ly/api)

### Motivation (or why)
[Bonusly](https://bonus.ly) ranks the most receivers/givers based on how many times you have received/sent a point, e.g. if you have recieved/given 10 times 1 point (totally 10 points), you will be ranked higher than someone who recives/gives 10 points in total 1 shot.

### Usage

Check out this repository:

```
git clone git@github.com:nluo/bonusly-command-line.git\
cd bonusly-command-line
```
Now you could start sending (or flooding :p) someone some bonus points!

Example:

``` 
  node index.js bob.smith@example.com 10 "You're aweomse #awesomeness! "
```

This will send 1 point each time repeat 10 times (totally 10 points) to bob.smith@example.com with message "You're aweomse #awesomeness!"
