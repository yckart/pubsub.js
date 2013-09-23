```javascript
subscribe('some/topic', function (foo, bar) {
    console.log(foo); // 'Foo'
});

subscribe('some/topic', function (foo, bar) {
    console.log(bar); // 'Bar'
});

publish('some/topic', ['Foo', 'Bar']);
unsubscribe('some/topic');
```


## Download
 Get the [raw](https://raw.github.com/yckart/pubsub.js/master/pubsub.js) script, download the complete [package](https://github.com/yckart/pubsub.js/zipball/master) or fork it on [GitHub](https://github.com/yckart/pubsub.js/).

## Support
 [@yckart](http://twitter.com/yckart) #jquery #pubsub
 [http://yckart.com](http://yckart.com/)


#### License
 Copyright (c) 2013 [Yannick Albert](http://yckart.com)
 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.