# 抽cache-im
## 背景
原来的Chatroom实例在聊天室组件中，而这次开发的答题器需要接收Chatroom消息。
当时列了几种解决办法：

1. 把聊天室里面的Chatroom实例暴露出来
2. Chatroom提供了getInstance方法，可以在答题器组件中取得单例。
3. 答题器自己实例化一个Chatroom。
4. 将Chatroom实例从聊天室组件抽出来，做一个分发器，各组件作为订阅者去监听分发器。

第一种办法的问题是：1.组件耦合 2.Chatroom实例化时接收onmsgs回调，不能通过订阅的方式来获取消息，然而两个组件拿到消息之后的处理逻辑又不一样
第二种办法的问题同第一种的第二条，并且需要保证聊天室组件中的Chatroom先实例化。
第三种办法的问题是：需要新的账号，并且发消息的地方也需要。

最终选择了第四种方案。

## 目标
对于发送方来说：
发消息的时候格式规范化。

对于接收方来说：
组件能够分类接收custom、text、image等云信类别的消息；
组件能够按云信返回消息的顺序接收被派发的消息；
组件可以省去消息判断逻辑，减少冗余消息的干扰：比如开始答题，若没有中间层分发，那么组件会拿到所有的消息自己过滤，去遍历每一个消息，看看type是否为custom且content.eventType是否为开始答题；
省略cache初始化过程；（尚未实现）

## 术语
(中文-->英文：解释)

云信消息类型-->YXTypes：可以通过msg.type取得，值可能是notification、custom、tip、text、image等。

唯一事件名称-->eventName：用于唯一标识一个事件，如answerSheet#custom_start_answer，即 业务+云信消息类别+具体事件名。

事件类型-->eventType：移动端、前端共用，用于标识主动发送的消息（像系统的notification消息属于被动消息）属于哪种类别，放在msg的content字段中。msgEvent默认根据此来判断是否匹配。

Chatroom：指云信聊天室。

## 简写
{root} : cache-im/src/im/

## 设计
### 消息流图
![](http://oegl93v4v.bkt.clouddn.com/2017-09-05-%E6%A8%A1%E5%9E%8B.png)

### 类图
![](http://oegl93v4v.bkt.clouddn.com/2017-09-05-%E7%B1%BB%E5%9B%BE.png)

### 流程图
![](http://oegl93v4v.bkt.clouddn.com/2017-09-05-%E6%B5%81%E7%A8%8B%E5%9B%BE.png)

## 使用
需要先在页面中引入云信Chatroom文件，可以在[这里](http://netease.im/im-sdk-demo)下载

### 发送方
```javascript
// entry.js
IMCache.getInstance(options);

// component.js
var cache = IMCache.getInstance();
cache.sendCustomMsg({eventType:constant.ANSWER_SHEET_START_ANSWER},callback);	// constant.ANSWER_SHEET_START_ANSWER从{root}constant.js中取得
```

### 接收方
回调接收的参数可参考[云信文档](http://dev.netease.im/docs/product/IM%E5%8D%B3%E6%97%B6%E9%80%9A%E8%AE%AF/SDK%E5%BC%80%E5%8F%91%E9%9B%86%E6%88%90/Web%E5%BC%80%E5%8F%91%E9%9B%86%E6%88%90?#聊天室)
```javascript
// entry.js
IMCache.getInstance(options);

// component.js
var cache = IMCache.getInstance();

cache._$addEvent('msgs',function(msgs){...});

// 即msgs:YXTypes
cache._$addEvent('msgs:custom',function(msgs){...});
cache._$addEvent('msgs:text',function(msgs){...});	

cache._$addEvent('connect',function(chatroom){...});
cache._$addEvent('error',function(error){...});
cache._$addEvent('willConnect',function(obj){...});
cache._$addEvent('disConnect',function(error){...});
cache._$addEvent(xProcessor.CUSTOM.START_ANSWER,function(msgs){...});	// xProcessor在{root}processors/下
...	// 具体可参考各processor
```

**注**：接收到msg.content已经被JSON.parse过

## 扩展
### 一、新建processor
在{root}processors创建继承自processor的子类。以下的`xxx`代表业务范畴，如`answerSheet`代表答题器，它并不具体指某个组件。

processor主要做的事情就是：定义这个业务范畴需要派发的消息。有个误区需要避免：比如聊天室这个业务范畴，可能其中的聊天室组件需要监听答题器的点赞事件，但是点赞消息并不会归为聊天室的processor中。

```javascript
/**
 * xxx处理器
 *
 * @version  1.0
 * @author   hzliuzongyuan <hzliuzongyuan@corp.netease.com>
 * @module   pool/cache-im/src/im/processors/xxxProcessor
 */
NEJ.define([
    'base/klass',
    './processor.js',
    'pool/edu-front-util/src/util',
    '../constant.js'
],function(
    k, 
    p,
    util,
    constant,
    exports,
    pro
){
    var xxxProcessor = k._$klass();
    pro = xxxProcessor._$extend(p.Processor);

    pro.__init = function (options) {
        this.prefix = 'xxx';	// 必填，生成eventName的时候需要用到
        this.__super(options,exports);	// 同上
    };

	  // custom类消息，每个对象可以填name、eventType、eventName（默认自动生成）、match、handle等属性，具体可以参见{root}msgEvent.js
    pro.customList = function () {
        return [
            {
                name:'connectBrain',	// 用于生成eventName
                eventType:constant.XXX_CONNECT_BRAIN
            }
        ]
    };

	  // 类似还有imageList、tipList等，即YXTypes+List，exports.XXX中的XXX即是据此生成的
    pro.textList = function () {
        return [
            {
                name: 'throwDogFood',
				  // 默认是判断this.eventType==msg.content.eventType，可以自己重写
                match: function (msg) {
                    if(msg.text.indexOf('狗粮')!==-1){
                        return true;
                    }
                }
            }
        ]
    };

    // 必须为.Processor，在cache.js中会用到
    exports.Processor = xxxProcessor;
});
```

### 二、在{root}list.js中添加processor
### 三、在{root}constant.js中添加eventType

## 注意事项
1. msg.content已经被cache-im解析过了，请不要重复解析

## Q&A
### 为什么不分发单个消息
单个消息虽然简化了处理逻辑，但可能浪费性能，比如每接收到一条文本则将消息插入到文档中。

### 为什么运行时才暴露唯一事件名？
如果直接在相应Processor的exports里面暴露，直观是直观了，但是写起来比较麻烦，因为除了上述提到的值之外，还要写key，比如exports.CUSTOM.START_ANSWER。而且手写还可能出错，并且可以不按照规范写，比如直接写成exports.START_ANSWER。
所以这是为了简化人工、规范化。

### 什么时候才能取得eventName？
processor实例化的时候便会生成eventName，cache会在实例化的时候实例化各processor，也就是说只要先实例化了cache就可以取得了。
一般的使用场景是：
```javascript
var cache = IMCache.getInstance();
cache.addEvent(XXProcessor.CUSTOM.XXX,function(){});
```

### 为什么发送的是eventType，监听的是eventName
首先eventType未必是唯一的，虽然暂时是。现在我们用这个对custom消息进行区分，当以后我们要对notification或者其它云信消息类型也加以区分的时候，按理来说是允许eventType重复的，毕竟可以根据云信消息类型来区分，但是监听方法_$addEvent的第一个参数需要是唯一的。
还有个问题是，如果我们想根据消息本身的内容来新增一个事件时，比如根据text消息内容是否包含「狗粮」，匹配「扔狗粮」事件。如果我们以eventType的形式来接收，那么要给这类事件也分配一个eventType作为标识，而eventType是移动端、前端共用的，这样杂糅在一起不好。

### 为什么要分processor
我们最简单的分发器就是写一个这样的数组:
```javascript
[{
    eventType:1,
    handle:function(msg){

    }
},{
    eventType:2,
    handle:function(msg){
        
    }
}...]
```
然后消息来了，遍历每条消息，看xx字段是否能匹配其中一个项，匹配则调用相应的handle方法，并且派发该消息。

这样我们需要集中管理这个数组，等慢慢积累之后很难维护，分processor其实就是解决这个问题的一种途径。

### 为什么一个消息只能匹配一个事件
暂时是这样，之后如果遇到相应的需求，也可以放开，不会对之前的逻辑有影响。

### 为什么不用NIM,而用Chatroom？
NIM包含了好友管理、群组等复杂功能，暂时用不上。