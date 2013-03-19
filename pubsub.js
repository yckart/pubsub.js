/*!
 * pubsub.js 0.0.1 - https://github.com/yckart/pubsub.js
 * Another simple way to publish and subscribe.
 *
 * Copyright (c) 2013 Yannick Albert (http://yckart.com)
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 * 2013/03/18
 **/
(function ($) {

    // subscribes hash
    var cache = {};

    /*
     * Publish data to a specified channel
     * @param {String} topic The topic to publish
     * @param {Array|String} data The data to pass
     * @example publish("some/topic", ["Foo", "Bar"]);
     * @example publish("some/topic", "Foo");
     */
    this.publish = function (topic, data) {
        var subs = cache[topic] || [];
        for (var i = 0; subs[i]; i++) subs[i].apply(this, String(data).split(",") || []);
    };

    /*
     * Subscribe a handler to a specified channel
     * @param {String} topic The channel to subscribe to
     * @param {Function} handler The function to execute when it's topic is published, recieving the data from `publish`
     * @example subscribe("some/topic", function (foo, bar) { });
     */
    this.subscribe = function (topic, handler) {
        (cache[topic] = cache[topic] || []).push(handler);
        return [topic, handler];
    };

    /*
     * Unsubscribe a handler from a specified channel
     * @param {String|Array} topic The array that is returned from the `subscribe` function or the topic String
     * @example unsubscribe("some/topic");
     * @example unsubscribe(handle);
     */
    this.unsubscribe = function (topic) {
        var subs = cache[topic[0]] || cache[topic] || [],
            i = subs.length;
        while (i--) if( (cache[topic[0]] && subs[i] === topic[1]) || cache[topic] ) subs.splice(i, 1);
    };

    if( !$ ) return;
    $.publish = publish;
    $.subscribe = subscribe;
    $.unsubscribe = unsubscribe;

}(window.jQuery || window.Zepto));