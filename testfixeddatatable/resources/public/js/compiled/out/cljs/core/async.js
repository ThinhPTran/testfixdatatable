// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args27698 = [];
var len__25865__auto___27704 = arguments.length;
var i__25866__auto___27705 = (0);
while(true){
if((i__25866__auto___27705 < len__25865__auto___27704)){
args27698.push((arguments[i__25866__auto___27705]));

var G__27706 = (i__25866__auto___27705 + (1));
i__25866__auto___27705 = G__27706;
continue;
} else {
}
break;
}

var G__27700 = args27698.length;
switch (G__27700) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27698.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27701 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27701 = (function (f,blockable,meta27702){
this.f = f;
this.blockable = blockable;
this.meta27702 = meta27702;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27703,meta27702__$1){
var self__ = this;
var _27703__$1 = this;
return (new cljs.core.async.t_cljs$core$async27701(self__.f,self__.blockable,meta27702__$1));
});

cljs.core.async.t_cljs$core$async27701.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27703){
var self__ = this;
var _27703__$1 = this;
return self__.meta27702;
});

cljs.core.async.t_cljs$core$async27701.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27701.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27701.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27701.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27701.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27702","meta27702",1894376083,null)], null);
});

cljs.core.async.t_cljs$core$async27701.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27701.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27701";

cljs.core.async.t_cljs$core$async27701.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async27701");
});

cljs.core.async.__GT_t_cljs$core$async27701 = (function cljs$core$async$__GT_t_cljs$core$async27701(f__$1,blockable__$1,meta27702){
return (new cljs.core.async.t_cljs$core$async27701(f__$1,blockable__$1,meta27702));
});

}

return (new cljs.core.async.t_cljs$core$async27701(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args27710 = [];
var len__25865__auto___27713 = arguments.length;
var i__25866__auto___27714 = (0);
while(true){
if((i__25866__auto___27714 < len__25865__auto___27713)){
args27710.push((arguments[i__25866__auto___27714]));

var G__27715 = (i__25866__auto___27714 + (1));
i__25866__auto___27714 = G__27715;
continue;
} else {
}
break;
}

var G__27712 = args27710.length;
switch (G__27712) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27710.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args27717 = [];
var len__25865__auto___27720 = arguments.length;
var i__25866__auto___27721 = (0);
while(true){
if((i__25866__auto___27721 < len__25865__auto___27720)){
args27717.push((arguments[i__25866__auto___27721]));

var G__27722 = (i__25866__auto___27721 + (1));
i__25866__auto___27721 = G__27722;
continue;
} else {
}
break;
}

var G__27719 = args27717.length;
switch (G__27719) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27717.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args27724 = [];
var len__25865__auto___27727 = arguments.length;
var i__25866__auto___27728 = (0);
while(true){
if((i__25866__auto___27728 < len__25865__auto___27727)){
args27724.push((arguments[i__25866__auto___27728]));

var G__27729 = (i__25866__auto___27728 + (1));
i__25866__auto___27728 = G__27729;
continue;
} else {
}
break;
}

var G__27726 = args27724.length;
switch (G__27726) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27724.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27731 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27731);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27731,ret){
return (function (){
return fn1.call(null,val_27731);
});})(val_27731,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27732 = [];
var len__25865__auto___27735 = arguments.length;
var i__25866__auto___27736 = (0);
while(true){
if((i__25866__auto___27736 < len__25865__auto___27735)){
args27732.push((arguments[i__25866__auto___27736]));

var G__27737 = (i__25866__auto___27736 + (1));
i__25866__auto___27736 = G__27737;
continue;
} else {
}
break;
}

var G__27734 = args27732.length;
switch (G__27734) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27732.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25705__auto___27739 = n;
var x_27740 = (0);
while(true){
if((x_27740 < n__25705__auto___27739)){
(a[x_27740] = (0));

var G__27741 = (x_27740 + (1));
x_27740 = G__27741;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27742 = (i + (1));
i = G__27742;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27746 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27746 = (function (alt_flag,flag,meta27747){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27747 = meta27747;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27748,meta27747__$1){
var self__ = this;
var _27748__$1 = this;
return (new cljs.core.async.t_cljs$core$async27746(self__.alt_flag,self__.flag,meta27747__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27746.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27748){
var self__ = this;
var _27748__$1 = this;
return self__.meta27747;
});})(flag))
;

cljs.core.async.t_cljs$core$async27746.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27746.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27746.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27746.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27746.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27747","meta27747",1773005358,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27746.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27746.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27746";

cljs.core.async.t_cljs$core$async27746.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async27746");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27746 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27746(alt_flag__$1,flag__$1,meta27747){
return (new cljs.core.async.t_cljs$core$async27746(alt_flag__$1,flag__$1,meta27747));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27746(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27752 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27752 = (function (alt_handler,flag,cb,meta27753){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27753 = meta27753;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27754,meta27753__$1){
var self__ = this;
var _27754__$1 = this;
return (new cljs.core.async.t_cljs$core$async27752(self__.alt_handler,self__.flag,self__.cb,meta27753__$1));
});

cljs.core.async.t_cljs$core$async27752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27754){
var self__ = this;
var _27754__$1 = this;
return self__.meta27753;
});

cljs.core.async.t_cljs$core$async27752.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27752.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27752.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27752.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27752.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27753","meta27753",302747851,null)], null);
});

cljs.core.async.t_cljs$core$async27752.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27752.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27752";

cljs.core.async.t_cljs$core$async27752.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async27752");
});

cljs.core.async.__GT_t_cljs$core$async27752 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27752(alt_handler__$1,flag__$1,cb__$1,meta27753){
return (new cljs.core.async.t_cljs$core$async27752(alt_handler__$1,flag__$1,cb__$1,meta27753));
});

}

return (new cljs.core.async.t_cljs$core$async27752(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27755_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27755_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27756_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27756_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24790__auto__ = wport;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27757 = (i + (1));
i = G__27757;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24790__auto__ = ret;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24778__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24778__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24778__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__25872__auto__ = [];
var len__25865__auto___27763 = arguments.length;
var i__25866__auto___27764 = (0);
while(true){
if((i__25866__auto___27764 < len__25865__auto___27763)){
args__25872__auto__.push((arguments[i__25866__auto___27764]));

var G__27765 = (i__25866__auto___27764 + (1));
i__25866__auto___27764 = G__27765;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27760){
var map__27761 = p__27760;
var map__27761__$1 = ((((!((map__27761 == null)))?((((map__27761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27761):map__27761);
var opts = map__27761__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27758){
var G__27759 = cljs.core.first.call(null,seq27758);
var seq27758__$1 = cljs.core.next.call(null,seq27758);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27759,seq27758__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27766 = [];
var len__25865__auto___27816 = arguments.length;
var i__25866__auto___27817 = (0);
while(true){
if((i__25866__auto___27817 < len__25865__auto___27816)){
args27766.push((arguments[i__25866__auto___27817]));

var G__27818 = (i__25866__auto___27817 + (1));
i__25866__auto___27817 = G__27818;
continue;
} else {
}
break;
}

var G__27768 = args27766.length;
switch (G__27768) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27766.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27653__auto___27820 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27653__auto___27820){
return (function (){
var f__27654__auto__ = (function (){var switch__27541__auto__ = ((function (c__27653__auto___27820){
return (function (state_27792){
var state_val_27793 = (state_27792[(1)]);
if((state_val_27793 === (7))){
var inst_27788 = (state_27792[(2)]);
var state_27792__$1 = state_27792;
var statearr_27794_27821 = state_27792__$1;
(statearr_27794_27821[(2)] = inst_27788);

(statearr_27794_27821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (1))){
var state_27792__$1 = state_27792;
var statearr_27795_27822 = state_27792__$1;
(statearr_27795_27822[(2)] = null);

(statearr_27795_27822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (4))){
var inst_27771 = (state_27792[(7)]);
var inst_27771__$1 = (state_27792[(2)]);
var inst_27772 = (inst_27771__$1 == null);
var state_27792__$1 = (function (){var statearr_27796 = state_27792;
(statearr_27796[(7)] = inst_27771__$1);

return statearr_27796;
})();
if(cljs.core.truth_(inst_27772)){
var statearr_27797_27823 = state_27792__$1;
(statearr_27797_27823[(1)] = (5));

} else {
var statearr_27798_27824 = state_27792__$1;
(statearr_27798_27824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (13))){
var state_27792__$1 = state_27792;
var statearr_27799_27825 = state_27792__$1;
(statearr_27799_27825[(2)] = null);

(statearr_27799_27825[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (6))){
var inst_27771 = (state_27792[(7)]);
var state_27792__$1 = state_27792;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27792__$1,(11),to,inst_27771);
} else {
if((state_val_27793 === (3))){
var inst_27790 = (state_27792[(2)]);
var state_27792__$1 = state_27792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27792__$1,inst_27790);
} else {
if((state_val_27793 === (12))){
var state_27792__$1 = state_27792;
var statearr_27800_27826 = state_27792__$1;
(statearr_27800_27826[(2)] = null);

(statearr_27800_27826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (2))){
var state_27792__$1 = state_27792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27792__$1,(4),from);
} else {
if((state_val_27793 === (11))){
var inst_27781 = (state_27792[(2)]);
var state_27792__$1 = state_27792;
if(cljs.core.truth_(inst_27781)){
var statearr_27801_27827 = state_27792__$1;
(statearr_27801_27827[(1)] = (12));

} else {
var statearr_27802_27828 = state_27792__$1;
(statearr_27802_27828[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (9))){
var state_27792__$1 = state_27792;
var statearr_27803_27829 = state_27792__$1;
(statearr_27803_27829[(2)] = null);

(statearr_27803_27829[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (5))){
var state_27792__$1 = state_27792;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27804_27830 = state_27792__$1;
(statearr_27804_27830[(1)] = (8));

} else {
var statearr_27805_27831 = state_27792__$1;
(statearr_27805_27831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (14))){
var inst_27786 = (state_27792[(2)]);
var state_27792__$1 = state_27792;
var statearr_27806_27832 = state_27792__$1;
(statearr_27806_27832[(2)] = inst_27786);

(statearr_27806_27832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (10))){
var inst_27778 = (state_27792[(2)]);
var state_27792__$1 = state_27792;
var statearr_27807_27833 = state_27792__$1;
(statearr_27807_27833[(2)] = inst_27778);

(statearr_27807_27833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (8))){
var inst_27775 = cljs.core.async.close_BANG_.call(null,to);
var state_27792__$1 = state_27792;
var statearr_27808_27834 = state_27792__$1;
(statearr_27808_27834[(2)] = inst_27775);

(statearr_27808_27834[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27653__auto___27820))
;
return ((function (switch__27541__auto__,c__27653__auto___27820){
return (function() {
var cljs$core$async$state_machine__27542__auto__ = null;
var cljs$core$async$state_machine__27542__auto____0 = (function (){
var statearr_27812 = [null,null,null,null,null,null,null,null];
(statearr_27812[(0)] = cljs$core$async$state_machine__27542__auto__);

(statearr_27812[(1)] = (1));

return statearr_27812;
});
var cljs$core$async$state_machine__27542__auto____1 = (function (state_27792){
while(true){
var ret_value__27543__auto__ = (function (){try{while(true){
var result__27544__auto__ = switch__27541__auto__.call(null,state_27792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27544__auto__;
}
break;
}
}catch (e27813){if((e27813 instanceof Object)){
var ex__27545__auto__ = e27813;
var statearr_27814_27835 = state_27792;
(statearr_27814_27835[(5)] = ex__27545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27836 = state_27792;
state_27792 = G__27836;
continue;
} else {
return ret_value__27543__auto__;
}
break;
}
});
cljs$core$async$state_machine__27542__auto__ = function(state_27792){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27542__auto____1.call(this,state_27792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27542__auto____0;
cljs$core$async$state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27542__auto____1;
return cljs$core$async$state_machine__27542__auto__;
})()
;})(switch__27541__auto__,c__27653__auto___27820))
})();
var state__27655__auto__ = (function (){var statearr_27815 = f__27654__auto__.call(null);
(statearr_27815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27653__auto___27820);

return statearr_27815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27655__auto__);
});})(c__27653__auto___27820))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28024){
var vec__28025 = p__28024;
var v = cljs.core.nth.call(null,vec__28025,(0),null);
var p = cljs.core.nth.call(null,vec__28025,(1),null);
var job = vec__28025;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27653__auto___28211 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27653__auto___28211,res,vec__28025,v,p,job,jobs,results){
return (function (){
var f__27654__auto__ = (function (){var switch__27541__auto__ = ((function (c__27653__auto___28211,res,vec__28025,v,p,job,jobs,results){
return (function (state_28032){
var state_val_28033 = (state_28032[(1)]);
if((state_val_28033 === (1))){
var state_28032__$1 = state_28032;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28032__$1,(2),res,v);
} else {
if((state_val_28033 === (2))){
var inst_28029 = (state_28032[(2)]);
var inst_28030 = cljs.core.async.close_BANG_.call(null,res);
var state_28032__$1 = (function (){var statearr_28034 = state_28032;
(statearr_28034[(7)] = inst_28029);

return statearr_28034;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28032__$1,inst_28030);
} else {
return null;
}
}
});})(c__27653__auto___28211,res,vec__28025,v,p,job,jobs,results))
;
return ((function (switch__27541__auto__,c__27653__auto___28211,res,vec__28025,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27542__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27542__auto____0 = (function (){
var statearr_28038 = [null,null,null,null,null,null,null,null];
(statearr_28038[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27542__auto__);

(statearr_28038[(1)] = (1));

return statearr_28038;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27542__auto____1 = (function (state_28032){
while(true){
var ret_value__27543__auto__ = (function (){try{while(true){
var result__27544__auto__ = switch__27541__auto__.call(null,state_28032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27544__auto__;
}
break;
}
}catch (e28039){if((e28039 instanceof Object)){
var ex__27545__auto__ = e28039;
var statearr_28040_28212 = state_28032;
(statearr_28040_28212[(5)] = ex__27545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28213 = state_28032;
state_28032 = G__28213;
continue;
} else {
return ret_value__27543__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27542__auto__ = function(state_28032){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27542__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27542__auto____1.call(this,state_28032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27542__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27542__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27542__auto__;
})()
;})(switch__27541__auto__,c__27653__auto___28211,res,vec__28025,v,p,job,jobs,results))
})();
var state__27655__auto__ = (function (){var statearr_28041 = f__27654__auto__.call(null);
(statearr_28041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27653__auto___28211);

return statearr_28041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27655__auto__);
});})(c__27653__auto___28211,res,vec__28025,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28042){
var vec__28043 = p__28042;
var v = cljs.core.nth.call(null,vec__28043,(0),null);
var p = cljs.core.nth.call(null,vec__28043,(1),null);
var job = vec__28043;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25705__auto___28214 = n;
var __28215 = (0);
while(true){
if((__28215 < n__25705__auto___28214)){
var G__28046_28216 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28046_28216) {
case "compute":
var c__27653__auto___28218 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28215,c__27653__auto___28218,G__28046_28216,n__25705__auto___28214,jobs,results,process,async){
return (function (){
var f__27654__auto__ = (function (){var switch__27541__auto__ = ((function (__28215,c__27653__auto___28218,G__28046_28216,n__25705__auto___28214,jobs,results,process,async){
return (function (state_28059){
var state_val_28060 = (state_28059[(1)]);
if((state_val_28060 === (1))){
var state_28059__$1 = state_28059;
var statearr_28061_28219 = state_28059__$1;
(statearr_28061_28219[(2)] = null);

(statearr_28061_28219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (2))){
var state_28059__$1 = state_28059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28059__$1,(4),jobs);
} else {
if((state_val_28060 === (3))){
var inst_28057 = (state_28059[(2)]);
var state_28059__$1 = state_28059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28059__$1,inst_28057);
} else {
if((state_val_28060 === (4))){
var inst_28049 = (state_28059[(2)]);
var inst_28050 = process.call(null,inst_28049);
var state_28059__$1 = state_28059;
if(cljs.core.truth_(inst_28050)){
var statearr_28062_28220 = state_28059__$1;
(statearr_28062_28220[(1)] = (5));

} else {
var statearr_28063_28221 = state_28059__$1;
(statearr_28063_28221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (5))){
var state_28059__$1 = state_28059;
var statearr_28064_28222 = state_28059__$1;
(statearr_28064_28222[(2)] = null);

(statearr_28064_28222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (6))){
var state_28059__$1 = state_28059;
var statearr_28065_28223 = state_28059__$1;
(statearr_28065_28223[(2)] = null);

(statearr_28065_28223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (7))){
var inst_28055 = (state_28059[(2)]);
var state_28059__$1 = state_28059;
var statearr_28066_28224 = state_28059__$1;
(statearr_28066_28224[(2)] = inst_28055);

(statearr_28066_28224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__28215,c__27653__auto___28218,G__28046_28216,n__25705__auto___28214,jobs,results,process,async))
;
return ((function (__28215,switch__27541__auto__,c__27653__auto___28218,G__28046_28216,n__25705__auto___28214,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27542__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27542__auto____0 = (function (){
var statearr_28070 = [null,null,null,null,null,null,null];
(statearr_28070[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27542__auto__);

(statearr_28070[(1)] = (1));

return statearr_28070;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27542__auto____1 = (function (state_28059){
while(true){
var ret_value__27543__auto__ = (function (){try{while(true){
var result__27544__auto__ = switch__27541__auto__.call(null,state_28059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27544__auto__;
}
break;
}
}catch (e28071){if((e28071 instanceof Object)){
var ex__27545__auto__ = e28071;
var statearr_28072_28225 = state_28059;
(statearr_28072_28225[(5)] = ex__27545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28226 = state_28059;
state_28059 = G__28226;
continue;
} else {
return ret_value__27543__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27542__auto__ = function(state_28059){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27542__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27542__auto____1.call(this,state_28059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27542__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27542__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27542__auto__;
})()
;})(__28215,switch__27541__auto__,c__27653__auto___28218,G__28046_28216,n__25705__auto___28214,jobs,results,process,async))
})();
var state__27655__auto__ = (function (){var statearr_28073 = f__27654__auto__.call(null);
(statearr_28073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27653__auto___28218);

return statearr_28073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27655__auto__);
});})(__28215,c__27653__auto___28218,G__28046_28216,n__25705__auto___28214,jobs,results,process,async))
);


break;
case "async":
var c__27653__auto___28227 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28215,c__27653__auto___28227,G__28046_28216,n__25705__auto___28214,jobs,results,process,async){
return (function (){
var f__27654__auto__ = (function (){var switch__27541__auto__ = ((function (__28215,c__27653__auto___28227,G__28046_28216,n__25705__auto___28214,jobs,results,process,async){
return (function (state_28086){
var state_val_28087 = (state_28086[(1)]);
if((state_val_28087 === (1))){
var state_28086__$1 = state_28086;
var statearr_28088_28228 = state_28086__$1;
(statearr_28088_28228[(2)] = null);

(statearr_28088_28228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28087 === (2))){
var state_28086__$1 = state_28086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28086__$1,(4),jobs);
} else {
if((state_val_28087 === (3))){
var inst_28084 = (state_28086[(2)]);
var state_28086__$1 = state_28086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28086__$1,inst_28084);
} else {
if((state_val_28087 === (4))){
var inst_28076 = (state_28086[(2)]);
var inst_28077 = async.call(null,inst_28076);
var state_28086__$1 = state_28086;
if(cljs.core.truth_(inst_28077)){
var statearr_28089_28229 = state_28086__$1;
(statearr_28089_28229[(1)] = (5));

} else {
var statearr_28090_28230 = state_28086__$1;
(statearr_28090_28230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28087 === (5))){
var state_28086__$1 = state_28086;
var statearr_28091_28231 = state_28086__$1;
(statearr_28091_28231[(2)] = null);

(statearr_28091_28231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28087 === (6))){
var state_28086__$1 = state_28086;
var statearr_28092_28232 = state_28086__$1;
(statearr_28092_28232[(2)] = null);

(statearr_28092_28232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28087 === (7))){
var inst_28082 = (state_28086[(2)]);
var state_28086__$1 = state_28086;
var statearr_28093_28233 = state_28086__$1;
(statearr_28093_28233[(2)] = inst_28082);

(statearr_28093_28233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__28215,c__27653__auto___28227,G__28046_28216,n__25705__auto___28214,jobs,results,process,async))
;
return ((function (__28215,switch__27541__auto__,c__27653__auto___28227,G__28046_28216,n__25705__auto___28214,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27542__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27542__auto____0 = (function (){
var statearr_28097 = [null,null,null,null,null,null,null];
(statearr_28097[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27542__auto__);

(statearr_28097[(1)] = (1));

return statearr_28097;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27542__auto____1 = (function (state_28086){
while(true){
var ret_value__27543__auto__ = (function (){try{while(true){
var result__27544__auto__ = switch__27541__auto__.call(null,state_28086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27544__auto__;
}
break;
}
}catch (e28098){if((e28098 instanceof Object)){
var ex__27545__auto__ = e28098;
var statearr_28099_28234 = state_28086;
(statearr_28099_28234[(5)] = ex__27545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28235 = state_28086;
state_28086 = G__28235;
continue;
} else {
return ret_value__27543__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27542__auto__ = function(state_28086){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27542__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27542__auto____1.call(this,state_28086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27542__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27542__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27542__auto__;
})()
;})(__28215,switch__27541__auto__,c__27653__auto___28227,G__28046_28216,n__25705__auto___28214,jobs,results,process,async))
})();
var state__27655__auto__ = (function (){var statearr_28100 = f__27654__auto__.call(null);
(statearr_28100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27653__auto___28227);

return statearr_28100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27655__auto__);
});})(__28215,c__27653__auto___28227,G__28046_28216,n__25705__auto___28214,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28236 = (__28215 + (1));
__28215 = G__28236;
continue;
} else {
}
break;
}

var c__27653__auto___28237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27653__auto___28237,jobs,results,process,async){
return (function (){
var f__27654__auto__ = (function (){var switch__27541__auto__ = ((function (c__27653__auto___28237,jobs,results,process,async){
return (function (state_28122){
var state_val_28123 = (state_28122[(1)]);
if((state_val_28123 === (1))){
var state_28122__$1 = state_28122;
var statearr_28124_28238 = state_28122__$1;
(statearr_28124_28238[(2)] = null);

(statearr_28124_28238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (2))){
var state_28122__$1 = state_28122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28122__$1,(4),from);
} else {
if((state_val_28123 === (3))){
var inst_28120 = (state_28122[(2)]);
var state_28122__$1 = state_28122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28122__$1,inst_28120);
} else {
if((state_val_28123 === (4))){
var inst_28103 = (state_28122[(7)]);
var inst_28103__$1 = (state_28122[(2)]);
var inst_28104 = (inst_28103__$1 == null);
var state_28122__$1 = (function (){var statearr_28125 = state_28122;
(statearr_28125[(7)] = inst_28103__$1);

return statearr_28125;
})();
if(cljs.core.truth_(inst_28104)){
var statearr_28126_28239 = state_28122__$1;
(statearr_28126_28239[(1)] = (5));

} else {
var statearr_28127_28240 = state_28122__$1;
(statearr_28127_28240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (5))){
var inst_28106 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28122__$1 = state_28122;
var statearr_28128_28241 = state_28122__$1;
(statearr_28128_28241[(2)] = inst_28106);

(statearr_28128_28241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (6))){
var inst_28103 = (state_28122[(7)]);
var inst_28108 = (state_28122[(8)]);
var inst_28108__$1 = cljs.core.async.chan.call(null,(1));
var inst_28109 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28110 = [inst_28103,inst_28108__$1];
var inst_28111 = (new cljs.core.PersistentVector(null,2,(5),inst_28109,inst_28110,null));
var state_28122__$1 = (function (){var statearr_28129 = state_28122;
(statearr_28129[(8)] = inst_28108__$1);

return statearr_28129;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28122__$1,(8),jobs,inst_28111);
} else {
if((state_val_28123 === (7))){
var inst_28118 = (state_28122[(2)]);
var state_28122__$1 = state_28122;
var statearr_28130_28242 = state_28122__$1;
(statearr_28130_28242[(2)] = inst_28118);

(statearr_28130_28242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (8))){
var inst_28108 = (state_28122[(8)]);
var inst_28113 = (state_28122[(2)]);
var state_28122__$1 = (function (){var statearr_28131 = state_28122;
(statearr_28131[(9)] = inst_28113);

return statearr_28131;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28122__$1,(9),results,inst_28108);
} else {
if((state_val_28123 === (9))){
var inst_28115 = (state_28122[(2)]);
var state_28122__$1 = (function (){var statearr_28132 = state_28122;
(statearr_28132[(10)] = inst_28115);

return statearr_28132;
})();
var statearr_28133_28243 = state_28122__$1;
(statearr_28133_28243[(2)] = null);

(statearr_28133_28243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__27653__auto___28237,jobs,results,process,async))
;
return ((function (switch__27541__auto__,c__27653__auto___28237,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27542__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27542__auto____0 = (function (){
var statearr_28137 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28137[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27542__auto__);

(statearr_28137[(1)] = (1));

return statearr_28137;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27542__auto____1 = (function (state_28122){
while(true){
var ret_value__27543__auto__ = (function (){try{while(true){
var result__27544__auto__ = switch__27541__auto__.call(null,state_28122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27544__auto__;
}
break;
}
}catch (e28138){if((e28138 instanceof Object)){
var ex__27545__auto__ = e28138;
var statearr_28139_28244 = state_28122;
(statearr_28139_28244[(5)] = ex__27545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28245 = state_28122;
state_28122 = G__28245;
continue;
} else {
return ret_value__27543__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27542__auto__ = function(state_28122){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27542__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27542__auto____1.call(this,state_28122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27542__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27542__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27542__auto__;
})()
;})(switch__27541__auto__,c__27653__auto___28237,jobs,results,process,async))
})();
var state__27655__auto__ = (function (){var statearr_28140 = f__27654__auto__.call(null);
(statearr_28140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27653__auto___28237);

return statearr_28140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27655__auto__);
});})(c__27653__auto___28237,jobs,results,process,async))
);


var c__27653__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27653__auto__,jobs,results,process,async){
return (function (){
var f__27654__auto__ = (function (){var switch__27541__auto__ = ((function (c__27653__auto__,jobs,results,process,async){
return (function (state_28178){
var state_val_28179 = (state_28178[(1)]);
if((state_val_28179 === (7))){
var inst_28174 = (state_28178[(2)]);
var state_28178__$1 = state_28178;
var statearr_28180_28246 = state_28178__$1;
(statearr_28180_28246[(2)] = inst_28174);

(statearr_28180_28246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (20))){
var state_28178__$1 = state_28178;
var statearr_28181_28247 = state_28178__$1;
(statearr_28181_28247[(2)] = null);

(statearr_28181_28247[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (1))){
var state_28178__$1 = state_28178;
var statearr_28182_28248 = state_28178__$1;
(statearr_28182_28248[(2)] = null);

(statearr_28182_28248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (4))){
var inst_28143 = (state_28178[(7)]);
var inst_28143__$1 = (state_28178[(2)]);
var inst_28144 = (inst_28143__$1 == null);
var state_28178__$1 = (function (){var statearr_28183 = state_28178;
(statearr_28183[(7)] = inst_28143__$1);

return statearr_28183;
})();
if(cljs.core.truth_(inst_28144)){
var statearr_28184_28249 = state_28178__$1;
(statearr_28184_28249[(1)] = (5));

} else {
var statearr_28185_28250 = state_28178__$1;
(statearr_28185_28250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (15))){
var inst_28156 = (state_28178[(8)]);
var state_28178__$1 = state_28178;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28178__$1,(18),to,inst_28156);
} else {
if((state_val_28179 === (21))){
var inst_28169 = (state_28178[(2)]);
var state_28178__$1 = state_28178;
var statearr_28186_28251 = state_28178__$1;
(statearr_28186_28251[(2)] = inst_28169);

(statearr_28186_28251[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (13))){
var inst_28171 = (state_28178[(2)]);
var state_28178__$1 = (function (){var statearr_28187 = state_28178;
(statearr_28187[(9)] = inst_28171);

return statearr_28187;
})();
var statearr_28188_28252 = state_28178__$1;
(statearr_28188_28252[(2)] = null);

(statearr_28188_28252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (6))){
var inst_28143 = (state_28178[(7)]);
var state_28178__$1 = state_28178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28178__$1,(11),inst_28143);
} else {
if((state_val_28179 === (17))){
var inst_28164 = (state_28178[(2)]);
var state_28178__$1 = state_28178;
if(cljs.core.truth_(inst_28164)){
var statearr_28189_28253 = state_28178__$1;
(statearr_28189_28253[(1)] = (19));

} else {
var statearr_28190_28254 = state_28178__$1;
(statearr_28190_28254[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (3))){
var inst_28176 = (state_28178[(2)]);
var state_28178__$1 = state_28178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28178__$1,inst_28176);
} else {
if((state_val_28179 === (12))){
var inst_28153 = (state_28178[(10)]);
var state_28178__$1 = state_28178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28178__$1,(14),inst_28153);
} else {
if((state_val_28179 === (2))){
var state_28178__$1 = state_28178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28178__$1,(4),results);
} else {
if((state_val_28179 === (19))){
var state_28178__$1 = state_28178;
var statearr_28191_28255 = state_28178__$1;
(statearr_28191_28255[(2)] = null);

(statearr_28191_28255[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (11))){
var inst_28153 = (state_28178[(2)]);
var state_28178__$1 = (function (){var statearr_28192 = state_28178;
(statearr_28192[(10)] = inst_28153);

return statearr_28192;
})();
var statearr_28193_28256 = state_28178__$1;
(statearr_28193_28256[(2)] = null);

(statearr_28193_28256[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (9))){
var state_28178__$1 = state_28178;
var statearr_28194_28257 = state_28178__$1;
(statearr_28194_28257[(2)] = null);

(statearr_28194_28257[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (5))){
var state_28178__$1 = state_28178;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28195_28258 = state_28178__$1;
(statearr_28195_28258[(1)] = (8));

} else {
var statearr_28196_28259 = state_28178__$1;
(statearr_28196_28259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (14))){
var inst_28158 = (state_28178[(11)]);
var inst_28156 = (state_28178[(8)]);
var inst_28156__$1 = (state_28178[(2)]);
var inst_28157 = (inst_28156__$1 == null);
var inst_28158__$1 = cljs.core.not.call(null,inst_28157);
var state_28178__$1 = (function (){var statearr_28197 = state_28178;
(statearr_28197[(11)] = inst_28158__$1);

(statearr_28197[(8)] = inst_28156__$1);

return statearr_28197;
})();
if(inst_28158__$1){
var statearr_28198_28260 = state_28178__$1;
(statearr_28198_28260[(1)] = (15));

} else {
var statearr_28199_28261 = state_28178__$1;
(statearr_28199_28261[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (16))){
var inst_28158 = (state_28178[(11)]);
var state_28178__$1 = state_28178;
var statearr_28200_28262 = state_28178__$1;
(statearr_28200_28262[(2)] = inst_28158);

(statearr_28200_28262[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (10))){
var inst_28150 = (state_28178[(2)]);
var state_28178__$1 = state_28178;
var statearr_28201_28263 = state_28178__$1;
(statearr_28201_28263[(2)] = inst_28150);

(statearr_28201_28263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (18))){
var inst_28161 = (state_28178[(2)]);
var state_28178__$1 = state_28178;
var statearr_28202_28264 = state_28178__$1;
(statearr_28202_28264[(2)] = inst_28161);

(statearr_28202_28264[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (8))){
var inst_28147 = cljs.core.async.close_BANG_.call(null,to);
var state_28178__$1 = state_28178;
var statearr_28203_28265 = state_28178__$1;
(statearr_28203_28265[(2)] = inst_28147);

(statearr_28203_28265[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27653__auto__,jobs,results,process,async))
;
return ((function (switch__27541__auto__,c__27653__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27542__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27542__auto____0 = (function (){
var statearr_28207 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28207[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27542__auto__);

(statearr_28207[(1)] = (1));

return statearr_28207;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27542__auto____1 = (function (state_28178){
while(true){
var ret_value__27543__auto__ = (function (){try{while(true){
var result__27544__auto__ = switch__27541__auto__.call(null,state_28178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27544__auto__;
}
break;
}
}catch (e28208){if((e28208 instanceof Object)){
var ex__27545__auto__ = e28208;
var statearr_28209_28266 = state_28178;
(statearr_28209_28266[(5)] = ex__27545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28267 = state_28178;
state_28178 = G__28267;
continue;
} else {
return ret_value__27543__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27542__auto__ = function(state_28178){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27542__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27542__auto____1.call(this,state_28178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27542__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27542__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27542__auto__;
})()
;})(switch__27541__auto__,c__27653__auto__,jobs,results,process,async))
})();
var state__27655__auto__ = (function (){var statearr_28210 = f__27654__auto__.call(null);
(statearr_28210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27653__auto__);

return statearr_28210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27655__auto__);
});})(c__27653__auto__,jobs,results,process,async))
);

return c__27653__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args28268 = [];
var len__25865__auto___28271 = arguments.length;
var i__25866__auto___28272 = (0);
while(true){
if((i__25866__auto___28272 < len__25865__auto___28271)){
args28268.push((arguments[i__25866__auto___28272]));

var G__28273 = (i__25866__auto___28272 + (1));
i__25866__auto___28272 = G__28273;
continue;
} else {
}
break;
}

var G__28270 = args28268.length;
switch (G__28270) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28268.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args28275 = [];
var len__25865__auto___28278 = arguments.length;
var i__25866__auto___28279 = (0);
while(true){
if((i__25866__auto___28279 < len__25865__auto___28278)){
args28275.push((arguments[i__25866__auto___28279]));

var G__28280 = (i__25866__auto___28279 + (1));
i__25866__auto___28279 = G__28280;
continue;
} else {
}
break;
}

var G__28277 = args28275.length;
switch (G__28277) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28275.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args28282 = [];
var len__25865__auto___28335 = arguments.length;
var i__25866__auto___28336 = (0);
while(true){
if((i__25866__auto___28336 < len__25865__auto___28335)){
args28282.push((arguments[i__25866__auto___28336]));

var G__28337 = (i__25866__auto___28336 + (1));
i__25866__auto___28336 = G__28337;
continue;
} else {
}
break;
}

var G__28284 = args28282.length;
switch (G__28284) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28282.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27653__auto___28339 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27653__auto___28339,tc,fc){
return (function (){
var f__27654__auto__ = (function (){var switch__27541__auto__ = ((function (c__27653__auto___28339,tc,fc){
return (function (state_28310){
var state_val_28311 = (state_28310[(1)]);
if((state_val_28311 === (7))){
var inst_28306 = (state_28310[(2)]);
var state_28310__$1 = state_28310;
var statearr_28312_28340 = state_28310__$1;
(statearr_28312_28340[(2)] = inst_28306);

(statearr_28312_28340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (1))){
var state_28310__$1 = state_28310;
var statearr_28313_28341 = state_28310__$1;
(statearr_28313_28341[(2)] = null);

(statearr_28313_28341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (4))){
var inst_28287 = (state_28310[(7)]);
var inst_28287__$1 = (state_28310[(2)]);
var inst_28288 = (inst_28287__$1 == null);
var state_28310__$1 = (function (){var statearr_28314 = state_28310;
(statearr_28314[(7)] = inst_28287__$1);

return statearr_28314;
})();
if(cljs.core.truth_(inst_28288)){
var statearr_28315_28342 = state_28310__$1;
(statearr_28315_28342[(1)] = (5));

} else {
var statearr_28316_28343 = state_28310__$1;
(statearr_28316_28343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (13))){
var state_28310__$1 = state_28310;
var statearr_28317_28344 = state_28310__$1;
(statearr_28317_28344[(2)] = null);

(statearr_28317_28344[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (6))){
var inst_28287 = (state_28310[(7)]);
var inst_28293 = p.call(null,inst_28287);
var state_28310__$1 = state_28310;
if(cljs.core.truth_(inst_28293)){
var statearr_28318_28345 = state_28310__$1;
(statearr_28318_28345[(1)] = (9));

} else {
var statearr_28319_28346 = state_28310__$1;
(statearr_28319_28346[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (3))){
var inst_28308 = (state_28310[(2)]);
var state_28310__$1 = state_28310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28310__$1,inst_28308);
} else {
if((state_val_28311 === (12))){
var state_28310__$1 = state_28310;
var statearr_28320_28347 = state_28310__$1;
(statearr_28320_28347[(2)] = null);

(statearr_28320_28347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (2))){
var state_28310__$1 = state_28310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28310__$1,(4),ch);
} else {
if((state_val_28311 === (11))){
var inst_28287 = (state_28310[(7)]);
var inst_28297 = (state_28310[(2)]);
var state_28310__$1 = state_28310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28310__$1,(8),inst_28297,inst_28287);
} else {
if((state_val_28311 === (9))){
var state_28310__$1 = state_28310;
var statearr_28321_28348 = state_28310__$1;
(statearr_28321_28348[(2)] = tc);

(statearr_28321_28348[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (5))){
var inst_28290 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28291 = cljs.core.async.close_BANG_.call(null,fc);
var state_28310__$1 = (function (){var statearr_28322 = state_28310;
(statearr_28322[(8)] = inst_28290);

return statearr_28322;
})();
var statearr_28323_28349 = state_28310__$1;
(statearr_28323_28349[(2)] = inst_28291);

(statearr_28323_28349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (14))){
var inst_28304 = (state_28310[(2)]);
var state_28310__$1 = state_28310;
var statearr_28324_28350 = state_28310__$1;
(statearr_28324_28350[(2)] = inst_28304);

(statearr_28324_28350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (10))){
var state_28310__$1 = state_28310;
var statearr_28325_28351 = state_28310__$1;
(statearr_28325_28351[(2)] = fc);

(statearr_28325_28351[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28311 === (8))){
var inst_28299 = (state_28310[(2)]);
var state_28310__$1 = state_28310;
if(cljs.core.truth_(inst_28299)){
var statearr_28326_28352 = state_28310__$1;
(statearr_28326_28352[(1)] = (12));

} else {
var statearr_28327_28353 = state_28310__$1;
(statearr_28327_28353[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27653__auto___28339,tc,fc))
;
return ((function (switch__27541__auto__,c__27653__auto___28339,tc,fc){
return (function() {
var cljs$core$async$state_machine__27542__auto__ = null;
var cljs$core$async$state_machine__27542__auto____0 = (function (){
var statearr_28331 = [null,null,null,null,null,null,null,null,null];
(statearr_28331[(0)] = cljs$core$async$state_machine__27542__auto__);

(statearr_28331[(1)] = (1));

return statearr_28331;
});
var cljs$core$async$state_machine__27542__auto____1 = (function (state_28310){
while(true){
var ret_value__27543__auto__ = (function (){try{while(true){
var result__27544__auto__ = switch__27541__auto__.call(null,state_28310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27544__auto__;
}
break;
}
}catch (e28332){if((e28332 instanceof Object)){
var ex__27545__auto__ = e28332;
var statearr_28333_28354 = state_28310;
(statearr_28333_28354[(5)] = ex__27545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28355 = state_28310;
state_28310 = G__28355;
continue;
} else {
return ret_value__27543__auto__;
}
break;
}
});
cljs$core$async$state_machine__27542__auto__ = function(state_28310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27542__auto____1.call(this,state_28310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27542__auto____0;
cljs$core$async$state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27542__auto____1;
return cljs$core$async$state_machine__27542__auto__;
})()
;})(switch__27541__auto__,c__27653__auto___28339,tc,fc))
})();
var state__27655__auto__ = (function (){var statearr_28334 = f__27654__auto__.call(null);
(statearr_28334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27653__auto___28339);

return statearr_28334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27655__auto__);
});})(c__27653__auto___28339,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27653__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27653__auto__){
return (function (){
var f__27654__auto__ = (function (){var switch__27541__auto__ = ((function (c__27653__auto__){
return (function (state_28419){
var state_val_28420 = (state_28419[(1)]);
if((state_val_28420 === (7))){
var inst_28415 = (state_28419[(2)]);
var state_28419__$1 = state_28419;
var statearr_28421_28442 = state_28419__$1;
(statearr_28421_28442[(2)] = inst_28415);

(statearr_28421_28442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28420 === (1))){
var inst_28399 = init;
var state_28419__$1 = (function (){var statearr_28422 = state_28419;
(statearr_28422[(7)] = inst_28399);

return statearr_28422;
})();
var statearr_28423_28443 = state_28419__$1;
(statearr_28423_28443[(2)] = null);

(statearr_28423_28443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28420 === (4))){
var inst_28402 = (state_28419[(8)]);
var inst_28402__$1 = (state_28419[(2)]);
var inst_28403 = (inst_28402__$1 == null);
var state_28419__$1 = (function (){var statearr_28424 = state_28419;
(statearr_28424[(8)] = inst_28402__$1);

return statearr_28424;
})();
if(cljs.core.truth_(inst_28403)){
var statearr_28425_28444 = state_28419__$1;
(statearr_28425_28444[(1)] = (5));

} else {
var statearr_28426_28445 = state_28419__$1;
(statearr_28426_28445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28420 === (6))){
var inst_28402 = (state_28419[(8)]);
var inst_28399 = (state_28419[(7)]);
var inst_28406 = (state_28419[(9)]);
var inst_28406__$1 = f.call(null,inst_28399,inst_28402);
var inst_28407 = cljs.core.reduced_QMARK_.call(null,inst_28406__$1);
var state_28419__$1 = (function (){var statearr_28427 = state_28419;
(statearr_28427[(9)] = inst_28406__$1);

return statearr_28427;
})();
if(inst_28407){
var statearr_28428_28446 = state_28419__$1;
(statearr_28428_28446[(1)] = (8));

} else {
var statearr_28429_28447 = state_28419__$1;
(statearr_28429_28447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28420 === (3))){
var inst_28417 = (state_28419[(2)]);
var state_28419__$1 = state_28419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28419__$1,inst_28417);
} else {
if((state_val_28420 === (2))){
var state_28419__$1 = state_28419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28419__$1,(4),ch);
} else {
if((state_val_28420 === (9))){
var inst_28406 = (state_28419[(9)]);
var inst_28399 = inst_28406;
var state_28419__$1 = (function (){var statearr_28430 = state_28419;
(statearr_28430[(7)] = inst_28399);

return statearr_28430;
})();
var statearr_28431_28448 = state_28419__$1;
(statearr_28431_28448[(2)] = null);

(statearr_28431_28448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28420 === (5))){
var inst_28399 = (state_28419[(7)]);
var state_28419__$1 = state_28419;
var statearr_28432_28449 = state_28419__$1;
(statearr_28432_28449[(2)] = inst_28399);

(statearr_28432_28449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28420 === (10))){
var inst_28413 = (state_28419[(2)]);
var state_28419__$1 = state_28419;
var statearr_28433_28450 = state_28419__$1;
(statearr_28433_28450[(2)] = inst_28413);

(statearr_28433_28450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28420 === (8))){
var inst_28406 = (state_28419[(9)]);
var inst_28409 = cljs.core.deref.call(null,inst_28406);
var state_28419__$1 = state_28419;
var statearr_28434_28451 = state_28419__$1;
(statearr_28434_28451[(2)] = inst_28409);

(statearr_28434_28451[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__27653__auto__))
;
return ((function (switch__27541__auto__,c__27653__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27542__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27542__auto____0 = (function (){
var statearr_28438 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28438[(0)] = cljs$core$async$reduce_$_state_machine__27542__auto__);

(statearr_28438[(1)] = (1));

return statearr_28438;
});
var cljs$core$async$reduce_$_state_machine__27542__auto____1 = (function (state_28419){
while(true){
var ret_value__27543__auto__ = (function (){try{while(true){
var result__27544__auto__ = switch__27541__auto__.call(null,state_28419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27544__auto__;
}
break;
}
}catch (e28439){if((e28439 instanceof Object)){
var ex__27545__auto__ = e28439;
var statearr_28440_28452 = state_28419;
(statearr_28440_28452[(5)] = ex__27545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28453 = state_28419;
state_28419 = G__28453;
continue;
} else {
return ret_value__27543__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27542__auto__ = function(state_28419){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27542__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27542__auto____1.call(this,state_28419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27542__auto____0;
cljs$core$async$reduce_$_state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27542__auto____1;
return cljs$core$async$reduce_$_state_machine__27542__auto__;
})()
;})(switch__27541__auto__,c__27653__auto__))
})();
var state__27655__auto__ = (function (){var statearr_28441 = f__27654__auto__.call(null);
(statearr_28441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27653__auto__);

return statearr_28441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27655__auto__);
});})(c__27653__auto__))
);

return c__27653__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args28454 = [];
var len__25865__auto___28506 = arguments.length;
var i__25866__auto___28507 = (0);
while(true){
if((i__25866__auto___28507 < len__25865__auto___28506)){
args28454.push((arguments[i__25866__auto___28507]));

var G__28508 = (i__25866__auto___28507 + (1));
i__25866__auto___28507 = G__28508;
continue;
} else {
}
break;
}

var G__28456 = args28454.length;
switch (G__28456) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28454.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27653__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27653__auto__){
return (function (){
var f__27654__auto__ = (function (){var switch__27541__auto__ = ((function (c__27653__auto__){
return (function (state_28481){
var state_val_28482 = (state_28481[(1)]);
if((state_val_28482 === (7))){
var inst_28463 = (state_28481[(2)]);
var state_28481__$1 = state_28481;
var statearr_28483_28510 = state_28481__$1;
(statearr_28483_28510[(2)] = inst_28463);

(statearr_28483_28510[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28482 === (1))){
var inst_28457 = cljs.core.seq.call(null,coll);
var inst_28458 = inst_28457;
var state_28481__$1 = (function (){var statearr_28484 = state_28481;
(statearr_28484[(7)] = inst_28458);

return statearr_28484;
})();
var statearr_28485_28511 = state_28481__$1;
(statearr_28485_28511[(2)] = null);

(statearr_28485_28511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28482 === (4))){
var inst_28458 = (state_28481[(7)]);
var inst_28461 = cljs.core.first.call(null,inst_28458);
var state_28481__$1 = state_28481;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28481__$1,(7),ch,inst_28461);
} else {
if((state_val_28482 === (13))){
var inst_28475 = (state_28481[(2)]);
var state_28481__$1 = state_28481;
var statearr_28486_28512 = state_28481__$1;
(statearr_28486_28512[(2)] = inst_28475);

(statearr_28486_28512[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28482 === (6))){
var inst_28466 = (state_28481[(2)]);
var state_28481__$1 = state_28481;
if(cljs.core.truth_(inst_28466)){
var statearr_28487_28513 = state_28481__$1;
(statearr_28487_28513[(1)] = (8));

} else {
var statearr_28488_28514 = state_28481__$1;
(statearr_28488_28514[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28482 === (3))){
var inst_28479 = (state_28481[(2)]);
var state_28481__$1 = state_28481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28481__$1,inst_28479);
} else {
if((state_val_28482 === (12))){
var state_28481__$1 = state_28481;
var statearr_28489_28515 = state_28481__$1;
(statearr_28489_28515[(2)] = null);

(statearr_28489_28515[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28482 === (2))){
var inst_28458 = (state_28481[(7)]);
var state_28481__$1 = state_28481;
if(cljs.core.truth_(inst_28458)){
var statearr_28490_28516 = state_28481__$1;
(statearr_28490_28516[(1)] = (4));

} else {
var statearr_28491_28517 = state_28481__$1;
(statearr_28491_28517[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28482 === (11))){
var inst_28472 = cljs.core.async.close_BANG_.call(null,ch);
var state_28481__$1 = state_28481;
var statearr_28492_28518 = state_28481__$1;
(statearr_28492_28518[(2)] = inst_28472);

(statearr_28492_28518[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28482 === (9))){
var state_28481__$1 = state_28481;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28493_28519 = state_28481__$1;
(statearr_28493_28519[(1)] = (11));

} else {
var statearr_28494_28520 = state_28481__$1;
(statearr_28494_28520[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28482 === (5))){
var inst_28458 = (state_28481[(7)]);
var state_28481__$1 = state_28481;
var statearr_28495_28521 = state_28481__$1;
(statearr_28495_28521[(2)] = inst_28458);

(statearr_28495_28521[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28482 === (10))){
var inst_28477 = (state_28481[(2)]);
var state_28481__$1 = state_28481;
var statearr_28496_28522 = state_28481__$1;
(statearr_28496_28522[(2)] = inst_28477);

(statearr_28496_28522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28482 === (8))){
var inst_28458 = (state_28481[(7)]);
var inst_28468 = cljs.core.next.call(null,inst_28458);
var inst_28458__$1 = inst_28468;
var state_28481__$1 = (function (){var statearr_28497 = state_28481;
(statearr_28497[(7)] = inst_28458__$1);

return statearr_28497;
})();
var statearr_28498_28523 = state_28481__$1;
(statearr_28498_28523[(2)] = null);

(statearr_28498_28523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27653__auto__))
;
return ((function (switch__27541__auto__,c__27653__auto__){
return (function() {
var cljs$core$async$state_machine__27542__auto__ = null;
var cljs$core$async$state_machine__27542__auto____0 = (function (){
var statearr_28502 = [null,null,null,null,null,null,null,null];
(statearr_28502[(0)] = cljs$core$async$state_machine__27542__auto__);

(statearr_28502[(1)] = (1));

return statearr_28502;
});
var cljs$core$async$state_machine__27542__auto____1 = (function (state_28481){
while(true){
var ret_value__27543__auto__ = (function (){try{while(true){
var result__27544__auto__ = switch__27541__auto__.call(null,state_28481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27544__auto__;
}
break;
}
}catch (e28503){if((e28503 instanceof Object)){
var ex__27545__auto__ = e28503;
var statearr_28504_28524 = state_28481;
(statearr_28504_28524[(5)] = ex__27545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28525 = state_28481;
state_28481 = G__28525;
continue;
} else {
return ret_value__27543__auto__;
}
break;
}
});
cljs$core$async$state_machine__27542__auto__ = function(state_28481){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27542__auto____1.call(this,state_28481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27542__auto____0;
cljs$core$async$state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27542__auto____1;
return cljs$core$async$state_machine__27542__auto__;
})()
;})(switch__27541__auto__,c__27653__auto__))
})();
var state__27655__auto__ = (function (){var statearr_28505 = f__27654__auto__.call(null);
(statearr_28505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27653__auto__);

return statearr_28505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27655__auto__);
});})(c__27653__auto__))
);

return c__27653__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25453__auto__ = (((_ == null))?null:_);
var m__25454__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,_);
} else {
var m__25454__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25454__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,ch);
} else {
var m__25454__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m);
} else {
var m__25454__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28751 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28751 = (function (mult,ch,cs,meta28752){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28752 = meta28752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28753,meta28752__$1){
var self__ = this;
var _28753__$1 = this;
return (new cljs.core.async.t_cljs$core$async28751(self__.mult,self__.ch,self__.cs,meta28752__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28751.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28753){
var self__ = this;
var _28753__$1 = this;
return self__.meta28752;
});})(cs))
;

cljs.core.async.t_cljs$core$async28751.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28751.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28751.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28751.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28751.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28751.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28751.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28752","meta28752",-83234868,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28751.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28751.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28751";

cljs.core.async.t_cljs$core$async28751.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async28751");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28751 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28751(mult__$1,ch__$1,cs__$1,meta28752){
return (new cljs.core.async.t_cljs$core$async28751(mult__$1,ch__$1,cs__$1,meta28752));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28751(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27653__auto___28976 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27653__auto___28976,cs,m,dchan,dctr,done){
return (function (){
var f__27654__auto__ = (function (){var switch__27541__auto__ = ((function (c__27653__auto___28976,cs,m,dchan,dctr,done){
return (function (state_28888){
var state_val_28889 = (state_28888[(1)]);
if((state_val_28889 === (7))){
var inst_28884 = (state_28888[(2)]);
var state_28888__$1 = state_28888;
var statearr_28890_28977 = state_28888__$1;
(statearr_28890_28977[(2)] = inst_28884);

(statearr_28890_28977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (20))){
var inst_28787 = (state_28888[(7)]);
var inst_28799 = cljs.core.first.call(null,inst_28787);
var inst_28800 = cljs.core.nth.call(null,inst_28799,(0),null);
var inst_28801 = cljs.core.nth.call(null,inst_28799,(1),null);
var state_28888__$1 = (function (){var statearr_28891 = state_28888;
(statearr_28891[(8)] = inst_28800);

return statearr_28891;
})();
if(cljs.core.truth_(inst_28801)){
var statearr_28892_28978 = state_28888__$1;
(statearr_28892_28978[(1)] = (22));

} else {
var statearr_28893_28979 = state_28888__$1;
(statearr_28893_28979[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (27))){
var inst_28831 = (state_28888[(9)]);
var inst_28756 = (state_28888[(10)]);
var inst_28829 = (state_28888[(11)]);
var inst_28836 = (state_28888[(12)]);
var inst_28836__$1 = cljs.core._nth.call(null,inst_28829,inst_28831);
var inst_28837 = cljs.core.async.put_BANG_.call(null,inst_28836__$1,inst_28756,done);
var state_28888__$1 = (function (){var statearr_28894 = state_28888;
(statearr_28894[(12)] = inst_28836__$1);

return statearr_28894;
})();
if(cljs.core.truth_(inst_28837)){
var statearr_28895_28980 = state_28888__$1;
(statearr_28895_28980[(1)] = (30));

} else {
var statearr_28896_28981 = state_28888__$1;
(statearr_28896_28981[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (1))){
var state_28888__$1 = state_28888;
var statearr_28897_28982 = state_28888__$1;
(statearr_28897_28982[(2)] = null);

(statearr_28897_28982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (24))){
var inst_28787 = (state_28888[(7)]);
var inst_28806 = (state_28888[(2)]);
var inst_28807 = cljs.core.next.call(null,inst_28787);
var inst_28765 = inst_28807;
var inst_28766 = null;
var inst_28767 = (0);
var inst_28768 = (0);
var state_28888__$1 = (function (){var statearr_28898 = state_28888;
(statearr_28898[(13)] = inst_28765);

(statearr_28898[(14)] = inst_28768);

(statearr_28898[(15)] = inst_28806);

(statearr_28898[(16)] = inst_28766);

(statearr_28898[(17)] = inst_28767);

return statearr_28898;
})();
var statearr_28899_28983 = state_28888__$1;
(statearr_28899_28983[(2)] = null);

(statearr_28899_28983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (39))){
var state_28888__$1 = state_28888;
var statearr_28903_28984 = state_28888__$1;
(statearr_28903_28984[(2)] = null);

(statearr_28903_28984[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (4))){
var inst_28756 = (state_28888[(10)]);
var inst_28756__$1 = (state_28888[(2)]);
var inst_28757 = (inst_28756__$1 == null);
var state_28888__$1 = (function (){var statearr_28904 = state_28888;
(statearr_28904[(10)] = inst_28756__$1);

return statearr_28904;
})();
if(cljs.core.truth_(inst_28757)){
var statearr_28905_28985 = state_28888__$1;
(statearr_28905_28985[(1)] = (5));

} else {
var statearr_28906_28986 = state_28888__$1;
(statearr_28906_28986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (15))){
var inst_28765 = (state_28888[(13)]);
var inst_28768 = (state_28888[(14)]);
var inst_28766 = (state_28888[(16)]);
var inst_28767 = (state_28888[(17)]);
var inst_28783 = (state_28888[(2)]);
var inst_28784 = (inst_28768 + (1));
var tmp28900 = inst_28765;
var tmp28901 = inst_28766;
var tmp28902 = inst_28767;
var inst_28765__$1 = tmp28900;
var inst_28766__$1 = tmp28901;
var inst_28767__$1 = tmp28902;
var inst_28768__$1 = inst_28784;
var state_28888__$1 = (function (){var statearr_28907 = state_28888;
(statearr_28907[(13)] = inst_28765__$1);

(statearr_28907[(14)] = inst_28768__$1);

(statearr_28907[(18)] = inst_28783);

(statearr_28907[(16)] = inst_28766__$1);

(statearr_28907[(17)] = inst_28767__$1);

return statearr_28907;
})();
var statearr_28908_28987 = state_28888__$1;
(statearr_28908_28987[(2)] = null);

(statearr_28908_28987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (21))){
var inst_28810 = (state_28888[(2)]);
var state_28888__$1 = state_28888;
var statearr_28912_28988 = state_28888__$1;
(statearr_28912_28988[(2)] = inst_28810);

(statearr_28912_28988[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (31))){
var inst_28836 = (state_28888[(12)]);
var inst_28840 = done.call(null,null);
var inst_28841 = cljs.core.async.untap_STAR_.call(null,m,inst_28836);
var state_28888__$1 = (function (){var statearr_28913 = state_28888;
(statearr_28913[(19)] = inst_28840);

return statearr_28913;
})();
var statearr_28914_28989 = state_28888__$1;
(statearr_28914_28989[(2)] = inst_28841);

(statearr_28914_28989[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (32))){
var inst_28831 = (state_28888[(9)]);
var inst_28829 = (state_28888[(11)]);
var inst_28828 = (state_28888[(20)]);
var inst_28830 = (state_28888[(21)]);
var inst_28843 = (state_28888[(2)]);
var inst_28844 = (inst_28831 + (1));
var tmp28909 = inst_28829;
var tmp28910 = inst_28828;
var tmp28911 = inst_28830;
var inst_28828__$1 = tmp28910;
var inst_28829__$1 = tmp28909;
var inst_28830__$1 = tmp28911;
var inst_28831__$1 = inst_28844;
var state_28888__$1 = (function (){var statearr_28915 = state_28888;
(statearr_28915[(9)] = inst_28831__$1);

(statearr_28915[(11)] = inst_28829__$1);

(statearr_28915[(20)] = inst_28828__$1);

(statearr_28915[(21)] = inst_28830__$1);

(statearr_28915[(22)] = inst_28843);

return statearr_28915;
})();
var statearr_28916_28990 = state_28888__$1;
(statearr_28916_28990[(2)] = null);

(statearr_28916_28990[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (40))){
var inst_28856 = (state_28888[(23)]);
var inst_28860 = done.call(null,null);
var inst_28861 = cljs.core.async.untap_STAR_.call(null,m,inst_28856);
var state_28888__$1 = (function (){var statearr_28917 = state_28888;
(statearr_28917[(24)] = inst_28860);

return statearr_28917;
})();
var statearr_28918_28991 = state_28888__$1;
(statearr_28918_28991[(2)] = inst_28861);

(statearr_28918_28991[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (33))){
var inst_28847 = (state_28888[(25)]);
var inst_28849 = cljs.core.chunked_seq_QMARK_.call(null,inst_28847);
var state_28888__$1 = state_28888;
if(inst_28849){
var statearr_28919_28992 = state_28888__$1;
(statearr_28919_28992[(1)] = (36));

} else {
var statearr_28920_28993 = state_28888__$1;
(statearr_28920_28993[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (13))){
var inst_28777 = (state_28888[(26)]);
var inst_28780 = cljs.core.async.close_BANG_.call(null,inst_28777);
var state_28888__$1 = state_28888;
var statearr_28921_28994 = state_28888__$1;
(statearr_28921_28994[(2)] = inst_28780);

(statearr_28921_28994[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (22))){
var inst_28800 = (state_28888[(8)]);
var inst_28803 = cljs.core.async.close_BANG_.call(null,inst_28800);
var state_28888__$1 = state_28888;
var statearr_28922_28995 = state_28888__$1;
(statearr_28922_28995[(2)] = inst_28803);

(statearr_28922_28995[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (36))){
var inst_28847 = (state_28888[(25)]);
var inst_28851 = cljs.core.chunk_first.call(null,inst_28847);
var inst_28852 = cljs.core.chunk_rest.call(null,inst_28847);
var inst_28853 = cljs.core.count.call(null,inst_28851);
var inst_28828 = inst_28852;
var inst_28829 = inst_28851;
var inst_28830 = inst_28853;
var inst_28831 = (0);
var state_28888__$1 = (function (){var statearr_28923 = state_28888;
(statearr_28923[(9)] = inst_28831);

(statearr_28923[(11)] = inst_28829);

(statearr_28923[(20)] = inst_28828);

(statearr_28923[(21)] = inst_28830);

return statearr_28923;
})();
var statearr_28924_28996 = state_28888__$1;
(statearr_28924_28996[(2)] = null);

(statearr_28924_28996[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (41))){
var inst_28847 = (state_28888[(25)]);
var inst_28863 = (state_28888[(2)]);
var inst_28864 = cljs.core.next.call(null,inst_28847);
var inst_28828 = inst_28864;
var inst_28829 = null;
var inst_28830 = (0);
var inst_28831 = (0);
var state_28888__$1 = (function (){var statearr_28925 = state_28888;
(statearr_28925[(27)] = inst_28863);

(statearr_28925[(9)] = inst_28831);

(statearr_28925[(11)] = inst_28829);

(statearr_28925[(20)] = inst_28828);

(statearr_28925[(21)] = inst_28830);

return statearr_28925;
})();
var statearr_28926_28997 = state_28888__$1;
(statearr_28926_28997[(2)] = null);

(statearr_28926_28997[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (43))){
var state_28888__$1 = state_28888;
var statearr_28927_28998 = state_28888__$1;
(statearr_28927_28998[(2)] = null);

(statearr_28927_28998[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (29))){
var inst_28872 = (state_28888[(2)]);
var state_28888__$1 = state_28888;
var statearr_28928_28999 = state_28888__$1;
(statearr_28928_28999[(2)] = inst_28872);

(statearr_28928_28999[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (44))){
var inst_28881 = (state_28888[(2)]);
var state_28888__$1 = (function (){var statearr_28929 = state_28888;
(statearr_28929[(28)] = inst_28881);

return statearr_28929;
})();
var statearr_28930_29000 = state_28888__$1;
(statearr_28930_29000[(2)] = null);

(statearr_28930_29000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (6))){
var inst_28820 = (state_28888[(29)]);
var inst_28819 = cljs.core.deref.call(null,cs);
var inst_28820__$1 = cljs.core.keys.call(null,inst_28819);
var inst_28821 = cljs.core.count.call(null,inst_28820__$1);
var inst_28822 = cljs.core.reset_BANG_.call(null,dctr,inst_28821);
var inst_28827 = cljs.core.seq.call(null,inst_28820__$1);
var inst_28828 = inst_28827;
var inst_28829 = null;
var inst_28830 = (0);
var inst_28831 = (0);
var state_28888__$1 = (function (){var statearr_28931 = state_28888;
(statearr_28931[(9)] = inst_28831);

(statearr_28931[(30)] = inst_28822);

(statearr_28931[(11)] = inst_28829);

(statearr_28931[(20)] = inst_28828);

(statearr_28931[(29)] = inst_28820__$1);

(statearr_28931[(21)] = inst_28830);

return statearr_28931;
})();
var statearr_28932_29001 = state_28888__$1;
(statearr_28932_29001[(2)] = null);

(statearr_28932_29001[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (28))){
var inst_28828 = (state_28888[(20)]);
var inst_28847 = (state_28888[(25)]);
var inst_28847__$1 = cljs.core.seq.call(null,inst_28828);
var state_28888__$1 = (function (){var statearr_28933 = state_28888;
(statearr_28933[(25)] = inst_28847__$1);

return statearr_28933;
})();
if(inst_28847__$1){
var statearr_28934_29002 = state_28888__$1;
(statearr_28934_29002[(1)] = (33));

} else {
var statearr_28935_29003 = state_28888__$1;
(statearr_28935_29003[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (25))){
var inst_28831 = (state_28888[(9)]);
var inst_28830 = (state_28888[(21)]);
var inst_28833 = (inst_28831 < inst_28830);
var inst_28834 = inst_28833;
var state_28888__$1 = state_28888;
if(cljs.core.truth_(inst_28834)){
var statearr_28936_29004 = state_28888__$1;
(statearr_28936_29004[(1)] = (27));

} else {
var statearr_28937_29005 = state_28888__$1;
(statearr_28937_29005[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (34))){
var state_28888__$1 = state_28888;
var statearr_28938_29006 = state_28888__$1;
(statearr_28938_29006[(2)] = null);

(statearr_28938_29006[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (17))){
var state_28888__$1 = state_28888;
var statearr_28939_29007 = state_28888__$1;
(statearr_28939_29007[(2)] = null);

(statearr_28939_29007[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (3))){
var inst_28886 = (state_28888[(2)]);
var state_28888__$1 = state_28888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28888__$1,inst_28886);
} else {
if((state_val_28889 === (12))){
var inst_28815 = (state_28888[(2)]);
var state_28888__$1 = state_28888;
var statearr_28940_29008 = state_28888__$1;
(statearr_28940_29008[(2)] = inst_28815);

(statearr_28940_29008[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (2))){
var state_28888__$1 = state_28888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28888__$1,(4),ch);
} else {
if((state_val_28889 === (23))){
var state_28888__$1 = state_28888;
var statearr_28941_29009 = state_28888__$1;
(statearr_28941_29009[(2)] = null);

(statearr_28941_29009[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (35))){
var inst_28870 = (state_28888[(2)]);
var state_28888__$1 = state_28888;
var statearr_28942_29010 = state_28888__$1;
(statearr_28942_29010[(2)] = inst_28870);

(statearr_28942_29010[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (19))){
var inst_28787 = (state_28888[(7)]);
var inst_28791 = cljs.core.chunk_first.call(null,inst_28787);
var inst_28792 = cljs.core.chunk_rest.call(null,inst_28787);
var inst_28793 = cljs.core.count.call(null,inst_28791);
var inst_28765 = inst_28792;
var inst_28766 = inst_28791;
var inst_28767 = inst_28793;
var inst_28768 = (0);
var state_28888__$1 = (function (){var statearr_28943 = state_28888;
(statearr_28943[(13)] = inst_28765);

(statearr_28943[(14)] = inst_28768);

(statearr_28943[(16)] = inst_28766);

(statearr_28943[(17)] = inst_28767);

return statearr_28943;
})();
var statearr_28944_29011 = state_28888__$1;
(statearr_28944_29011[(2)] = null);

(statearr_28944_29011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (11))){
var inst_28765 = (state_28888[(13)]);
var inst_28787 = (state_28888[(7)]);
var inst_28787__$1 = cljs.core.seq.call(null,inst_28765);
var state_28888__$1 = (function (){var statearr_28945 = state_28888;
(statearr_28945[(7)] = inst_28787__$1);

return statearr_28945;
})();
if(inst_28787__$1){
var statearr_28946_29012 = state_28888__$1;
(statearr_28946_29012[(1)] = (16));

} else {
var statearr_28947_29013 = state_28888__$1;
(statearr_28947_29013[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (9))){
var inst_28817 = (state_28888[(2)]);
var state_28888__$1 = state_28888;
var statearr_28948_29014 = state_28888__$1;
(statearr_28948_29014[(2)] = inst_28817);

(statearr_28948_29014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (5))){
var inst_28763 = cljs.core.deref.call(null,cs);
var inst_28764 = cljs.core.seq.call(null,inst_28763);
var inst_28765 = inst_28764;
var inst_28766 = null;
var inst_28767 = (0);
var inst_28768 = (0);
var state_28888__$1 = (function (){var statearr_28949 = state_28888;
(statearr_28949[(13)] = inst_28765);

(statearr_28949[(14)] = inst_28768);

(statearr_28949[(16)] = inst_28766);

(statearr_28949[(17)] = inst_28767);

return statearr_28949;
})();
var statearr_28950_29015 = state_28888__$1;
(statearr_28950_29015[(2)] = null);

(statearr_28950_29015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (14))){
var state_28888__$1 = state_28888;
var statearr_28951_29016 = state_28888__$1;
(statearr_28951_29016[(2)] = null);

(statearr_28951_29016[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (45))){
var inst_28878 = (state_28888[(2)]);
var state_28888__$1 = state_28888;
var statearr_28952_29017 = state_28888__$1;
(statearr_28952_29017[(2)] = inst_28878);

(statearr_28952_29017[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (26))){
var inst_28820 = (state_28888[(29)]);
var inst_28874 = (state_28888[(2)]);
var inst_28875 = cljs.core.seq.call(null,inst_28820);
var state_28888__$1 = (function (){var statearr_28953 = state_28888;
(statearr_28953[(31)] = inst_28874);

return statearr_28953;
})();
if(inst_28875){
var statearr_28954_29018 = state_28888__$1;
(statearr_28954_29018[(1)] = (42));

} else {
var statearr_28955_29019 = state_28888__$1;
(statearr_28955_29019[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (16))){
var inst_28787 = (state_28888[(7)]);
var inst_28789 = cljs.core.chunked_seq_QMARK_.call(null,inst_28787);
var state_28888__$1 = state_28888;
if(inst_28789){
var statearr_28956_29020 = state_28888__$1;
(statearr_28956_29020[(1)] = (19));

} else {
var statearr_28957_29021 = state_28888__$1;
(statearr_28957_29021[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (38))){
var inst_28867 = (state_28888[(2)]);
var state_28888__$1 = state_28888;
var statearr_28958_29022 = state_28888__$1;
(statearr_28958_29022[(2)] = inst_28867);

(statearr_28958_29022[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (30))){
var state_28888__$1 = state_28888;
var statearr_28959_29023 = state_28888__$1;
(statearr_28959_29023[(2)] = null);

(statearr_28959_29023[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (10))){
var inst_28768 = (state_28888[(14)]);
var inst_28766 = (state_28888[(16)]);
var inst_28776 = cljs.core._nth.call(null,inst_28766,inst_28768);
var inst_28777 = cljs.core.nth.call(null,inst_28776,(0),null);
var inst_28778 = cljs.core.nth.call(null,inst_28776,(1),null);
var state_28888__$1 = (function (){var statearr_28960 = state_28888;
(statearr_28960[(26)] = inst_28777);

return statearr_28960;
})();
if(cljs.core.truth_(inst_28778)){
var statearr_28961_29024 = state_28888__$1;
(statearr_28961_29024[(1)] = (13));

} else {
var statearr_28962_29025 = state_28888__$1;
(statearr_28962_29025[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (18))){
var inst_28813 = (state_28888[(2)]);
var state_28888__$1 = state_28888;
var statearr_28963_29026 = state_28888__$1;
(statearr_28963_29026[(2)] = inst_28813);

(statearr_28963_29026[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (42))){
var state_28888__$1 = state_28888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28888__$1,(45),dchan);
} else {
if((state_val_28889 === (37))){
var inst_28756 = (state_28888[(10)]);
var inst_28847 = (state_28888[(25)]);
var inst_28856 = (state_28888[(23)]);
var inst_28856__$1 = cljs.core.first.call(null,inst_28847);
var inst_28857 = cljs.core.async.put_BANG_.call(null,inst_28856__$1,inst_28756,done);
var state_28888__$1 = (function (){var statearr_28964 = state_28888;
(statearr_28964[(23)] = inst_28856__$1);

return statearr_28964;
})();
if(cljs.core.truth_(inst_28857)){
var statearr_28965_29027 = state_28888__$1;
(statearr_28965_29027[(1)] = (39));

} else {
var statearr_28966_29028 = state_28888__$1;
(statearr_28966_29028[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28889 === (8))){
var inst_28768 = (state_28888[(14)]);
var inst_28767 = (state_28888[(17)]);
var inst_28770 = (inst_28768 < inst_28767);
var inst_28771 = inst_28770;
var state_28888__$1 = state_28888;
if(cljs.core.truth_(inst_28771)){
var statearr_28967_29029 = state_28888__$1;
(statearr_28967_29029[(1)] = (10));

} else {
var statearr_28968_29030 = state_28888__$1;
(statearr_28968_29030[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27653__auto___28976,cs,m,dchan,dctr,done))
;
return ((function (switch__27541__auto__,c__27653__auto___28976,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27542__auto__ = null;
var cljs$core$async$mult_$_state_machine__27542__auto____0 = (function (){
var statearr_28972 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28972[(0)] = cljs$core$async$mult_$_state_machine__27542__auto__);

(statearr_28972[(1)] = (1));

return statearr_28972;
});
var cljs$core$async$mult_$_state_machine__27542__auto____1 = (function (state_28888){
while(true){
var ret_value__27543__auto__ = (function (){try{while(true){
var result__27544__auto__ = switch__27541__auto__.call(null,state_28888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27544__auto__;
}
break;
}
}catch (e28973){if((e28973 instanceof Object)){
var ex__27545__auto__ = e28973;
var statearr_28974_29031 = state_28888;
(statearr_28974_29031[(5)] = ex__27545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29032 = state_28888;
state_28888 = G__29032;
continue;
} else {
return ret_value__27543__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27542__auto__ = function(state_28888){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27542__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27542__auto____1.call(this,state_28888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27542__auto____0;
cljs$core$async$mult_$_state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27542__auto____1;
return cljs$core$async$mult_$_state_machine__27542__auto__;
})()
;})(switch__27541__auto__,c__27653__auto___28976,cs,m,dchan,dctr,done))
})();
var state__27655__auto__ = (function (){var statearr_28975 = f__27654__auto__.call(null);
(statearr_28975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27653__auto___28976);

return statearr_28975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27655__auto__);
});})(c__27653__auto___28976,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args29033 = [];
var len__25865__auto___29036 = arguments.length;
var i__25866__auto___29037 = (0);
while(true){
if((i__25866__auto___29037 < len__25865__auto___29036)){
args29033.push((arguments[i__25866__auto___29037]));

var G__29038 = (i__25866__auto___29037 + (1));
i__25866__auto___29037 = G__29038;
continue;
} else {
}
break;
}

var G__29035 = args29033.length;
switch (G__29035) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29033.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,ch);
} else {
var m__25454__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,ch);
} else {
var m__25454__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m);
} else {
var m__25454__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,state_map);
} else {
var m__25454__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,mode);
} else {
var m__25454__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25872__auto__ = [];
var len__25865__auto___29050 = arguments.length;
var i__25866__auto___29051 = (0);
while(true){
if((i__25866__auto___29051 < len__25865__auto___29050)){
args__25872__auto__.push((arguments[i__25866__auto___29051]));

var G__29052 = (i__25866__auto___29051 + (1));
i__25866__auto___29051 = G__29052;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((3) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25873__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29044){
var map__29045 = p__29044;
var map__29045__$1 = ((((!((map__29045 == null)))?((((map__29045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29045):map__29045);
var opts = map__29045__$1;
var statearr_29047_29053 = state;
(statearr_29047_29053[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__29045,map__29045__$1,opts){
return (function (val){
var statearr_29048_29054 = state;
(statearr_29048_29054[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29045,map__29045__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_29049_29055 = state;
(statearr_29049_29055[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29040){
var G__29041 = cljs.core.first.call(null,seq29040);
var seq29040__$1 = cljs.core.next.call(null,seq29040);
var G__29042 = cljs.core.first.call(null,seq29040__$1);
var seq29040__$2 = cljs.core.next.call(null,seq29040__$1);
var G__29043 = cljs.core.first.call(null,seq29040__$2);
var seq29040__$3 = cljs.core.next.call(null,seq29040__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29041,G__29042,G__29043,seq29040__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29221 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29221 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29222){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29222 = meta29222;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29223,meta29222__$1){
var self__ = this;
var _29223__$1 = this;
return (new cljs.core.async.t_cljs$core$async29221(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29222__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29221.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29223){
var self__ = this;
var _29223__$1 = this;
return self__.meta29222;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29221.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29221.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29221.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29221.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29221.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29221.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29221.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29221.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29221.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29222","meta29222",107259497,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29221.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29221.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29221";

cljs.core.async.t_cljs$core$async29221.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async29221");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29221 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29221(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29222){
return (new cljs.core.async.t_cljs$core$async29221(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29222));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29221(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27653__auto___29386 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27653__auto___29386,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27654__auto__ = (function (){var switch__27541__auto__ = ((function (c__27653__auto___29386,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29323){
var state_val_29324 = (state_29323[(1)]);
if((state_val_29324 === (7))){
var inst_29239 = (state_29323[(2)]);
var state_29323__$1 = state_29323;
var statearr_29325_29387 = state_29323__$1;
(statearr_29325_29387[(2)] = inst_29239);

(statearr_29325_29387[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (20))){
var inst_29251 = (state_29323[(7)]);
var state_29323__$1 = state_29323;
var statearr_29326_29388 = state_29323__$1;
(statearr_29326_29388[(2)] = inst_29251);

(statearr_29326_29388[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (27))){
var state_29323__$1 = state_29323;
var statearr_29327_29389 = state_29323__$1;
(statearr_29327_29389[(2)] = null);

(statearr_29327_29389[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (1))){
var inst_29227 = (state_29323[(8)]);
var inst_29227__$1 = calc_state.call(null);
var inst_29229 = (inst_29227__$1 == null);
var inst_29230 = cljs.core.not.call(null,inst_29229);
var state_29323__$1 = (function (){var statearr_29328 = state_29323;
(statearr_29328[(8)] = inst_29227__$1);

return statearr_29328;
})();
if(inst_29230){
var statearr_29329_29390 = state_29323__$1;
(statearr_29329_29390[(1)] = (2));

} else {
var statearr_29330_29391 = state_29323__$1;
(statearr_29330_29391[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (24))){
var inst_29274 = (state_29323[(9)]);
var inst_29283 = (state_29323[(10)]);
var inst_29297 = (state_29323[(11)]);
var inst_29297__$1 = inst_29274.call(null,inst_29283);
var state_29323__$1 = (function (){var statearr_29331 = state_29323;
(statearr_29331[(11)] = inst_29297__$1);

return statearr_29331;
})();
if(cljs.core.truth_(inst_29297__$1)){
var statearr_29332_29392 = state_29323__$1;
(statearr_29332_29392[(1)] = (29));

} else {
var statearr_29333_29393 = state_29323__$1;
(statearr_29333_29393[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (4))){
var inst_29242 = (state_29323[(2)]);
var state_29323__$1 = state_29323;
if(cljs.core.truth_(inst_29242)){
var statearr_29334_29394 = state_29323__$1;
(statearr_29334_29394[(1)] = (8));

} else {
var statearr_29335_29395 = state_29323__$1;
(statearr_29335_29395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (15))){
var inst_29268 = (state_29323[(2)]);
var state_29323__$1 = state_29323;
if(cljs.core.truth_(inst_29268)){
var statearr_29336_29396 = state_29323__$1;
(statearr_29336_29396[(1)] = (19));

} else {
var statearr_29337_29397 = state_29323__$1;
(statearr_29337_29397[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (21))){
var inst_29273 = (state_29323[(12)]);
var inst_29273__$1 = (state_29323[(2)]);
var inst_29274 = cljs.core.get.call(null,inst_29273__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29275 = cljs.core.get.call(null,inst_29273__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29276 = cljs.core.get.call(null,inst_29273__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29323__$1 = (function (){var statearr_29338 = state_29323;
(statearr_29338[(9)] = inst_29274);

(statearr_29338[(13)] = inst_29275);

(statearr_29338[(12)] = inst_29273__$1);

return statearr_29338;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29323__$1,(22),inst_29276);
} else {
if((state_val_29324 === (31))){
var inst_29305 = (state_29323[(2)]);
var state_29323__$1 = state_29323;
if(cljs.core.truth_(inst_29305)){
var statearr_29339_29398 = state_29323__$1;
(statearr_29339_29398[(1)] = (32));

} else {
var statearr_29340_29399 = state_29323__$1;
(statearr_29340_29399[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (32))){
var inst_29282 = (state_29323[(14)]);
var state_29323__$1 = state_29323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29323__$1,(35),out,inst_29282);
} else {
if((state_val_29324 === (33))){
var inst_29273 = (state_29323[(12)]);
var inst_29251 = inst_29273;
var state_29323__$1 = (function (){var statearr_29341 = state_29323;
(statearr_29341[(7)] = inst_29251);

return statearr_29341;
})();
var statearr_29342_29400 = state_29323__$1;
(statearr_29342_29400[(2)] = null);

(statearr_29342_29400[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (13))){
var inst_29251 = (state_29323[(7)]);
var inst_29258 = inst_29251.cljs$lang$protocol_mask$partition0$;
var inst_29259 = (inst_29258 & (64));
var inst_29260 = inst_29251.cljs$core$ISeq$;
var inst_29261 = (inst_29259) || (inst_29260);
var state_29323__$1 = state_29323;
if(cljs.core.truth_(inst_29261)){
var statearr_29343_29401 = state_29323__$1;
(statearr_29343_29401[(1)] = (16));

} else {
var statearr_29344_29402 = state_29323__$1;
(statearr_29344_29402[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (22))){
var inst_29282 = (state_29323[(14)]);
var inst_29283 = (state_29323[(10)]);
var inst_29281 = (state_29323[(2)]);
var inst_29282__$1 = cljs.core.nth.call(null,inst_29281,(0),null);
var inst_29283__$1 = cljs.core.nth.call(null,inst_29281,(1),null);
var inst_29284 = (inst_29282__$1 == null);
var inst_29285 = cljs.core._EQ_.call(null,inst_29283__$1,change);
var inst_29286 = (inst_29284) || (inst_29285);
var state_29323__$1 = (function (){var statearr_29345 = state_29323;
(statearr_29345[(14)] = inst_29282__$1);

(statearr_29345[(10)] = inst_29283__$1);

return statearr_29345;
})();
if(cljs.core.truth_(inst_29286)){
var statearr_29346_29403 = state_29323__$1;
(statearr_29346_29403[(1)] = (23));

} else {
var statearr_29347_29404 = state_29323__$1;
(statearr_29347_29404[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (36))){
var inst_29273 = (state_29323[(12)]);
var inst_29251 = inst_29273;
var state_29323__$1 = (function (){var statearr_29348 = state_29323;
(statearr_29348[(7)] = inst_29251);

return statearr_29348;
})();
var statearr_29349_29405 = state_29323__$1;
(statearr_29349_29405[(2)] = null);

(statearr_29349_29405[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (29))){
var inst_29297 = (state_29323[(11)]);
var state_29323__$1 = state_29323;
var statearr_29350_29406 = state_29323__$1;
(statearr_29350_29406[(2)] = inst_29297);

(statearr_29350_29406[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (6))){
var state_29323__$1 = state_29323;
var statearr_29351_29407 = state_29323__$1;
(statearr_29351_29407[(2)] = false);

(statearr_29351_29407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (28))){
var inst_29293 = (state_29323[(2)]);
var inst_29294 = calc_state.call(null);
var inst_29251 = inst_29294;
var state_29323__$1 = (function (){var statearr_29352 = state_29323;
(statearr_29352[(15)] = inst_29293);

(statearr_29352[(7)] = inst_29251);

return statearr_29352;
})();
var statearr_29353_29408 = state_29323__$1;
(statearr_29353_29408[(2)] = null);

(statearr_29353_29408[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (25))){
var inst_29319 = (state_29323[(2)]);
var state_29323__$1 = state_29323;
var statearr_29354_29409 = state_29323__$1;
(statearr_29354_29409[(2)] = inst_29319);

(statearr_29354_29409[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (34))){
var inst_29317 = (state_29323[(2)]);
var state_29323__$1 = state_29323;
var statearr_29355_29410 = state_29323__$1;
(statearr_29355_29410[(2)] = inst_29317);

(statearr_29355_29410[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (17))){
var state_29323__$1 = state_29323;
var statearr_29356_29411 = state_29323__$1;
(statearr_29356_29411[(2)] = false);

(statearr_29356_29411[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (3))){
var state_29323__$1 = state_29323;
var statearr_29357_29412 = state_29323__$1;
(statearr_29357_29412[(2)] = false);

(statearr_29357_29412[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (12))){
var inst_29321 = (state_29323[(2)]);
var state_29323__$1 = state_29323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29323__$1,inst_29321);
} else {
if((state_val_29324 === (2))){
var inst_29227 = (state_29323[(8)]);
var inst_29232 = inst_29227.cljs$lang$protocol_mask$partition0$;
var inst_29233 = (inst_29232 & (64));
var inst_29234 = inst_29227.cljs$core$ISeq$;
var inst_29235 = (inst_29233) || (inst_29234);
var state_29323__$1 = state_29323;
if(cljs.core.truth_(inst_29235)){
var statearr_29358_29413 = state_29323__$1;
(statearr_29358_29413[(1)] = (5));

} else {
var statearr_29359_29414 = state_29323__$1;
(statearr_29359_29414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (23))){
var inst_29282 = (state_29323[(14)]);
var inst_29288 = (inst_29282 == null);
var state_29323__$1 = state_29323;
if(cljs.core.truth_(inst_29288)){
var statearr_29360_29415 = state_29323__$1;
(statearr_29360_29415[(1)] = (26));

} else {
var statearr_29361_29416 = state_29323__$1;
(statearr_29361_29416[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (35))){
var inst_29308 = (state_29323[(2)]);
var state_29323__$1 = state_29323;
if(cljs.core.truth_(inst_29308)){
var statearr_29362_29417 = state_29323__$1;
(statearr_29362_29417[(1)] = (36));

} else {
var statearr_29363_29418 = state_29323__$1;
(statearr_29363_29418[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (19))){
var inst_29251 = (state_29323[(7)]);
var inst_29270 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29251);
var state_29323__$1 = state_29323;
var statearr_29364_29419 = state_29323__$1;
(statearr_29364_29419[(2)] = inst_29270);

(statearr_29364_29419[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (11))){
var inst_29251 = (state_29323[(7)]);
var inst_29255 = (inst_29251 == null);
var inst_29256 = cljs.core.not.call(null,inst_29255);
var state_29323__$1 = state_29323;
if(inst_29256){
var statearr_29365_29420 = state_29323__$1;
(statearr_29365_29420[(1)] = (13));

} else {
var statearr_29366_29421 = state_29323__$1;
(statearr_29366_29421[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (9))){
var inst_29227 = (state_29323[(8)]);
var state_29323__$1 = state_29323;
var statearr_29367_29422 = state_29323__$1;
(statearr_29367_29422[(2)] = inst_29227);

(statearr_29367_29422[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (5))){
var state_29323__$1 = state_29323;
var statearr_29368_29423 = state_29323__$1;
(statearr_29368_29423[(2)] = true);

(statearr_29368_29423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (14))){
var state_29323__$1 = state_29323;
var statearr_29369_29424 = state_29323__$1;
(statearr_29369_29424[(2)] = false);

(statearr_29369_29424[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (26))){
var inst_29283 = (state_29323[(10)]);
var inst_29290 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29283);
var state_29323__$1 = state_29323;
var statearr_29370_29425 = state_29323__$1;
(statearr_29370_29425[(2)] = inst_29290);

(statearr_29370_29425[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (16))){
var state_29323__$1 = state_29323;
var statearr_29371_29426 = state_29323__$1;
(statearr_29371_29426[(2)] = true);

(statearr_29371_29426[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (38))){
var inst_29313 = (state_29323[(2)]);
var state_29323__$1 = state_29323;
var statearr_29372_29427 = state_29323__$1;
(statearr_29372_29427[(2)] = inst_29313);

(statearr_29372_29427[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (30))){
var inst_29274 = (state_29323[(9)]);
var inst_29283 = (state_29323[(10)]);
var inst_29275 = (state_29323[(13)]);
var inst_29300 = cljs.core.empty_QMARK_.call(null,inst_29274);
var inst_29301 = inst_29275.call(null,inst_29283);
var inst_29302 = cljs.core.not.call(null,inst_29301);
var inst_29303 = (inst_29300) && (inst_29302);
var state_29323__$1 = state_29323;
var statearr_29373_29428 = state_29323__$1;
(statearr_29373_29428[(2)] = inst_29303);

(statearr_29373_29428[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (10))){
var inst_29227 = (state_29323[(8)]);
var inst_29247 = (state_29323[(2)]);
var inst_29248 = cljs.core.get.call(null,inst_29247,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29249 = cljs.core.get.call(null,inst_29247,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29250 = cljs.core.get.call(null,inst_29247,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29251 = inst_29227;
var state_29323__$1 = (function (){var statearr_29374 = state_29323;
(statearr_29374[(16)] = inst_29250);

(statearr_29374[(17)] = inst_29248);

(statearr_29374[(18)] = inst_29249);

(statearr_29374[(7)] = inst_29251);

return statearr_29374;
})();
var statearr_29375_29429 = state_29323__$1;
(statearr_29375_29429[(2)] = null);

(statearr_29375_29429[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (18))){
var inst_29265 = (state_29323[(2)]);
var state_29323__$1 = state_29323;
var statearr_29376_29430 = state_29323__$1;
(statearr_29376_29430[(2)] = inst_29265);

(statearr_29376_29430[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (37))){
var state_29323__$1 = state_29323;
var statearr_29377_29431 = state_29323__$1;
(statearr_29377_29431[(2)] = null);

(statearr_29377_29431[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (8))){
var inst_29227 = (state_29323[(8)]);
var inst_29244 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29227);
var state_29323__$1 = state_29323;
var statearr_29378_29432 = state_29323__$1;
(statearr_29378_29432[(2)] = inst_29244);

(statearr_29378_29432[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27653__auto___29386,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27541__auto__,c__27653__auto___29386,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27542__auto__ = null;
var cljs$core$async$mix_$_state_machine__27542__auto____0 = (function (){
var statearr_29382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29382[(0)] = cljs$core$async$mix_$_state_machine__27542__auto__);

(statearr_29382[(1)] = (1));

return statearr_29382;
});
var cljs$core$async$mix_$_state_machine__27542__auto____1 = (function (state_29323){
while(true){
var ret_value__27543__auto__ = (function (){try{while(true){
var result__27544__auto__ = switch__27541__auto__.call(null,state_29323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27544__auto__;
}
break;
}
}catch (e29383){if((e29383 instanceof Object)){
var ex__27545__auto__ = e29383;
var statearr_29384_29433 = state_29323;
(statearr_29384_29433[(5)] = ex__27545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29434 = state_29323;
state_29323 = G__29434;
continue;
} else {
return ret_value__27543__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27542__auto__ = function(state_29323){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27542__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27542__auto____1.call(this,state_29323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27542__auto____0;
cljs$core$async$mix_$_state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27542__auto____1;
return cljs$core$async$mix_$_state_machine__27542__auto__;
})()
;})(switch__27541__auto__,c__27653__auto___29386,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27655__auto__ = (function (){var statearr_29385 = f__27654__auto__.call(null);
(statearr_29385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27653__auto___29386);

return statearr_29385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27655__auto__);
});})(c__27653__auto___29386,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25453__auto__ = (((p == null))?null:p);
var m__25454__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25454__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25453__auto__ = (((p == null))?null:p);
var m__25454__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,p,v,ch);
} else {
var m__25454__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args29435 = [];
var len__25865__auto___29438 = arguments.length;
var i__25866__auto___29439 = (0);
while(true){
if((i__25866__auto___29439 < len__25865__auto___29438)){
args29435.push((arguments[i__25866__auto___29439]));

var G__29440 = (i__25866__auto___29439 + (1));
i__25866__auto___29439 = G__29440;
continue;
} else {
}
break;
}

var G__29437 = args29435.length;
switch (G__29437) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29435.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25453__auto__ = (((p == null))?null:p);
var m__25454__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,p);
} else {
var m__25454__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25453__auto__ = (((p == null))?null:p);
var m__25454__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,p,v);
} else {
var m__25454__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args29443 = [];
var len__25865__auto___29568 = arguments.length;
var i__25866__auto___29569 = (0);
while(true){
if((i__25866__auto___29569 < len__25865__auto___29568)){
args29443.push((arguments[i__25866__auto___29569]));

var G__29570 = (i__25866__auto___29569 + (1));
i__25866__auto___29569 = G__29570;
continue;
} else {
}
break;
}

var G__29445 = args29443.length;
switch (G__29445) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29443.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24790__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24790__auto__,mults){
return (function (p1__29442_SHARP_){
if(cljs.core.truth_(p1__29442_SHARP_.call(null,topic))){
return p1__29442_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29442_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24790__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29446 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29446 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29447){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29447 = meta29447;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29448,meta29447__$1){
var self__ = this;
var _29448__$1 = this;
return (new cljs.core.async.t_cljs$core$async29446(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29447__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29448){
var self__ = this;
var _29448__$1 = this;
return self__.meta29447;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29446.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29447","meta29447",-1063470986,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29446.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29446.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29446";

cljs.core.async.t_cljs$core$async29446.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async29446");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29446 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29446(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29447){
return (new cljs.core.async.t_cljs$core$async29446(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29447));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29446(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27653__auto___29572 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27653__auto___29572,mults,ensure_mult,p){
return (function (){
var f__27654__auto__ = (function (){var switch__27541__auto__ = ((function (c__27653__auto___29572,mults,ensure_mult,p){
return (function (state_29520){
var state_val_29521 = (state_29520[(1)]);
if((state_val_29521 === (7))){
var inst_29516 = (state_29520[(2)]);
var state_29520__$1 = state_29520;
var statearr_29522_29573 = state_29520__$1;
(statearr_29522_29573[(2)] = inst_29516);

(statearr_29522_29573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29521 === (20))){
var state_29520__$1 = state_29520;
var statearr_29523_29574 = state_29520__$1;
(statearr_29523_29574[(2)] = null);

(statearr_29523_29574[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29521 === (1))){
var state_29520__$1 = state_29520;
var statearr_29524_29575 = state_29520__$1;
(statearr_29524_29575[(2)] = null);

(statearr_29524_29575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29521 === (24))){
var inst_29499 = (state_29520[(7)]);
var inst_29508 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29499);
var state_29520__$1 = state_29520;
var statearr_29525_29576 = state_29520__$1;
(statearr_29525_29576[(2)] = inst_29508);

(statearr_29525_29576[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29521 === (4))){
var inst_29451 = (state_29520[(8)]);
var inst_29451__$1 = (state_29520[(2)]);
var inst_29452 = (inst_29451__$1 == null);
var state_29520__$1 = (function (){var statearr_29526 = state_29520;
(statearr_29526[(8)] = inst_29451__$1);

return statearr_29526;
})();
if(cljs.core.truth_(inst_29452)){
var statearr_29527_29577 = state_29520__$1;
(statearr_29527_29577[(1)] = (5));

} else {
var statearr_29528_29578 = state_29520__$1;
(statearr_29528_29578[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29521 === (15))){
var inst_29493 = (state_29520[(2)]);
var state_29520__$1 = state_29520;
var statearr_29529_29579 = state_29520__$1;
(statearr_29529_29579[(2)] = inst_29493);

(statearr_29529_29579[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29521 === (21))){
var inst_29513 = (state_29520[(2)]);
var state_29520__$1 = (function (){var statearr_29530 = state_29520;
(statearr_29530[(9)] = inst_29513);

return statearr_29530;
})();
var statearr_29531_29580 = state_29520__$1;
(statearr_29531_29580[(2)] = null);

(statearr_29531_29580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29521 === (13))){
var inst_29475 = (state_29520[(10)]);
var inst_29477 = cljs.core.chunked_seq_QMARK_.call(null,inst_29475);
var state_29520__$1 = state_29520;
if(inst_29477){
var statearr_29532_29581 = state_29520__$1;
(statearr_29532_29581[(1)] = (16));

} else {
var statearr_29533_29582 = state_29520__$1;
(statearr_29533_29582[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29521 === (22))){
var inst_29505 = (state_29520[(2)]);
var state_29520__$1 = state_29520;
if(cljs.core.truth_(inst_29505)){
var statearr_29534_29583 = state_29520__$1;
(statearr_29534_29583[(1)] = (23));

} else {
var statearr_29535_29584 = state_29520__$1;
(statearr_29535_29584[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29521 === (6))){
var inst_29501 = (state_29520[(11)]);
var inst_29451 = (state_29520[(8)]);
var inst_29499 = (state_29520[(7)]);
var inst_29499__$1 = topic_fn.call(null,inst_29451);
var inst_29500 = cljs.core.deref.call(null,mults);
var inst_29501__$1 = cljs.core.get.call(null,inst_29500,inst_29499__$1);
var state_29520__$1 = (function (){var statearr_29536 = state_29520;
(statearr_29536[(11)] = inst_29501__$1);

(statearr_29536[(7)] = inst_29499__$1);

return statearr_29536;
})();
if(cljs.core.truth_(inst_29501__$1)){
var statearr_29537_29585 = state_29520__$1;
(statearr_29537_29585[(1)] = (19));

} else {
var statearr_29538_29586 = state_29520__$1;
(statearr_29538_29586[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29521 === (25))){
var inst_29510 = (state_29520[(2)]);
var state_29520__$1 = state_29520;
var statearr_29539_29587 = state_29520__$1;
(statearr_29539_29587[(2)] = inst_29510);

(statearr_29539_29587[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29521 === (17))){
var inst_29475 = (state_29520[(10)]);
var inst_29484 = cljs.core.first.call(null,inst_29475);
var inst_29485 = cljs.core.async.muxch_STAR_.call(null,inst_29484);
var inst_29486 = cljs.core.async.close_BANG_.call(null,inst_29485);
var inst_29487 = cljs.core.next.call(null,inst_29475);
var inst_29461 = inst_29487;
var inst_29462 = null;
var inst_29463 = (0);
var inst_29464 = (0);
var state_29520__$1 = (function (){var statearr_29540 = state_29520;
(statearr_29540[(12)] = inst_29486);

(statearr_29540[(13)] = inst_29461);

(statearr_29540[(14)] = inst_29462);

(statearr_29540[(15)] = inst_29463);

(statearr_29540[(16)] = inst_29464);

return statearr_29540;
})();
var statearr_29541_29588 = state_29520__$1;
(statearr_29541_29588[(2)] = null);

(statearr_29541_29588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29521 === (3))){
var inst_29518 = (state_29520[(2)]);
var state_29520__$1 = state_29520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29520__$1,inst_29518);
} else {
if((state_val_29521 === (12))){
var inst_29495 = (state_29520[(2)]);
var state_29520__$1 = state_29520;
var statearr_29542_29589 = state_29520__$1;
(statearr_29542_29589[(2)] = inst_29495);

(statearr_29542_29589[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29521 === (2))){
var state_29520__$1 = state_29520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29520__$1,(4),ch);
} else {
if((state_val_29521 === (23))){
var state_29520__$1 = state_29520;
var statearr_29543_29590 = state_29520__$1;
(statearr_29543_29590[(2)] = null);

(statearr_29543_29590[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29521 === (19))){
var inst_29501 = (state_29520[(11)]);
var inst_29451 = (state_29520[(8)]);
var inst_29503 = cljs.core.async.muxch_STAR_.call(null,inst_29501);
var state_29520__$1 = state_29520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29520__$1,(22),inst_29503,inst_29451);
} else {
if((state_val_29521 === (11))){
var inst_29461 = (state_29520[(13)]);
var inst_29475 = (state_29520[(10)]);
var inst_29475__$1 = cljs.core.seq.call(null,inst_29461);
var state_29520__$1 = (function (){var statearr_29544 = state_29520;
(statearr_29544[(10)] = inst_29475__$1);

return statearr_29544;
})();
if(inst_29475__$1){
var statearr_29545_29591 = state_29520__$1;
(statearr_29545_29591[(1)] = (13));

} else {
var statearr_29546_29592 = state_29520__$1;
(statearr_29546_29592[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29521 === (9))){
var inst_29497 = (state_29520[(2)]);
var state_29520__$1 = state_29520;
var statearr_29547_29593 = state_29520__$1;
(statearr_29547_29593[(2)] = inst_29497);

(statearr_29547_29593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29521 === (5))){
var inst_29458 = cljs.core.deref.call(null,mults);
var inst_29459 = cljs.core.vals.call(null,inst_29458);
var inst_29460 = cljs.core.seq.call(null,inst_29459);
var inst_29461 = inst_29460;
var inst_29462 = null;
var inst_29463 = (0);
var inst_29464 = (0);
var state_29520__$1 = (function (){var statearr_29548 = state_29520;
(statearr_29548[(13)] = inst_29461);

(statearr_29548[(14)] = inst_29462);

(statearr_29548[(15)] = inst_29463);

(statearr_29548[(16)] = inst_29464);

return statearr_29548;
})();
var statearr_29549_29594 = state_29520__$1;
(statearr_29549_29594[(2)] = null);

(statearr_29549_29594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29521 === (14))){
var state_29520__$1 = state_29520;
var statearr_29553_29595 = state_29520__$1;
(statearr_29553_29595[(2)] = null);

(statearr_29553_29595[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29521 === (16))){
var inst_29475 = (state_29520[(10)]);
var inst_29479 = cljs.core.chunk_first.call(null,inst_29475);
var inst_29480 = cljs.core.chunk_rest.call(null,inst_29475);
var inst_29481 = cljs.core.count.call(null,inst_29479);
var inst_29461 = inst_29480;
var inst_29462 = inst_29479;
var inst_29463 = inst_29481;
var inst_29464 = (0);
var state_29520__$1 = (function (){var statearr_29554 = state_29520;
(statearr_29554[(13)] = inst_29461);

(statearr_29554[(14)] = inst_29462);

(statearr_29554[(15)] = inst_29463);

(statearr_29554[(16)] = inst_29464);

return statearr_29554;
})();
var statearr_29555_29596 = state_29520__$1;
(statearr_29555_29596[(2)] = null);

(statearr_29555_29596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29521 === (10))){
var inst_29461 = (state_29520[(13)]);
var inst_29462 = (state_29520[(14)]);
var inst_29463 = (state_29520[(15)]);
var inst_29464 = (state_29520[(16)]);
var inst_29469 = cljs.core._nth.call(null,inst_29462,inst_29464);
var inst_29470 = cljs.core.async.muxch_STAR_.call(null,inst_29469);
var inst_29471 = cljs.core.async.close_BANG_.call(null,inst_29470);
var inst_29472 = (inst_29464 + (1));
var tmp29550 = inst_29461;
var tmp29551 = inst_29462;
var tmp29552 = inst_29463;
var inst_29461__$1 = tmp29550;
var inst_29462__$1 = tmp29551;
var inst_29463__$1 = tmp29552;
var inst_29464__$1 = inst_29472;
var state_29520__$1 = (function (){var statearr_29556 = state_29520;
(statearr_29556[(13)] = inst_29461__$1);

(statearr_29556[(14)] = inst_29462__$1);

(statearr_29556[(15)] = inst_29463__$1);

(statearr_29556[(16)] = inst_29464__$1);

(statearr_29556[(17)] = inst_29471);

return statearr_29556;
})();
var statearr_29557_29597 = state_29520__$1;
(statearr_29557_29597[(2)] = null);

(statearr_29557_29597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29521 === (18))){
var inst_29490 = (state_29520[(2)]);
var state_29520__$1 = state_29520;
var statearr_29558_29598 = state_29520__$1;
(statearr_29558_29598[(2)] = inst_29490);

(statearr_29558_29598[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29521 === (8))){
var inst_29463 = (state_29520[(15)]);
var inst_29464 = (state_29520[(16)]);
var inst_29466 = (inst_29464 < inst_29463);
var inst_29467 = inst_29466;
var state_29520__$1 = state_29520;
if(cljs.core.truth_(inst_29467)){
var statearr_29559_29599 = state_29520__$1;
(statearr_29559_29599[(1)] = (10));

} else {
var statearr_29560_29600 = state_29520__$1;
(statearr_29560_29600[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27653__auto___29572,mults,ensure_mult,p))
;
return ((function (switch__27541__auto__,c__27653__auto___29572,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27542__auto__ = null;
var cljs$core$async$state_machine__27542__auto____0 = (function (){
var statearr_29564 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29564[(0)] = cljs$core$async$state_machine__27542__auto__);

(statearr_29564[(1)] = (1));

return statearr_29564;
});
var cljs$core$async$state_machine__27542__auto____1 = (function (state_29520){
while(true){
var ret_value__27543__auto__ = (function (){try{while(true){
var result__27544__auto__ = switch__27541__auto__.call(null,state_29520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27544__auto__;
}
break;
}
}catch (e29565){if((e29565 instanceof Object)){
var ex__27545__auto__ = e29565;
var statearr_29566_29601 = state_29520;
(statearr_29566_29601[(5)] = ex__27545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29602 = state_29520;
state_29520 = G__29602;
continue;
} else {
return ret_value__27543__auto__;
}
break;
}
});
cljs$core$async$state_machine__27542__auto__ = function(state_29520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27542__auto____1.call(this,state_29520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27542__auto____0;
cljs$core$async$state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27542__auto____1;
return cljs$core$async$state_machine__27542__auto__;
})()
;})(switch__27541__auto__,c__27653__auto___29572,mults,ensure_mult,p))
})();
var state__27655__auto__ = (function (){var statearr_29567 = f__27654__auto__.call(null);
(statearr_29567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27653__auto___29572);

return statearr_29567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27655__auto__);
});})(c__27653__auto___29572,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args29603 = [];
var len__25865__auto___29606 = arguments.length;
var i__25866__auto___29607 = (0);
while(true){
if((i__25866__auto___29607 < len__25865__auto___29606)){
args29603.push((arguments[i__25866__auto___29607]));

var G__29608 = (i__25866__auto___29607 + (1));
i__25866__auto___29607 = G__29608;
continue;
} else {
}
break;
}

var G__29605 = args29603.length;
switch (G__29605) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29603.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args29610 = [];
var len__25865__auto___29613 = arguments.length;
var i__25866__auto___29614 = (0);
while(true){
if((i__25866__auto___29614 < len__25865__auto___29613)){
args29610.push((arguments[i__25866__auto___29614]));

var G__29615 = (i__25866__auto___29614 + (1));
i__25866__auto___29614 = G__29615;
continue;
} else {
}
break;
}

var G__29612 = args29610.length;
switch (G__29612) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29610.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args29617 = [];
var len__25865__auto___29688 = arguments.length;
var i__25866__auto___29689 = (0);
while(true){
if((i__25866__auto___29689 < len__25865__auto___29688)){
args29617.push((arguments[i__25866__auto___29689]));

var G__29690 = (i__25866__auto___29689 + (1));
i__25866__auto___29689 = G__29690;
continue;
} else {
}
break;
}

var G__29619 = args29617.length;
switch (G__29619) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29617.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__27653__auto___29692 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27653__auto___29692,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27654__auto__ = (function (){var switch__27541__auto__ = ((function (c__27653__auto___29692,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29658){
var state_val_29659 = (state_29658[(1)]);
if((state_val_29659 === (7))){
var state_29658__$1 = state_29658;
var statearr_29660_29693 = state_29658__$1;
(statearr_29660_29693[(2)] = null);

(statearr_29660_29693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29659 === (1))){
var state_29658__$1 = state_29658;
var statearr_29661_29694 = state_29658__$1;
(statearr_29661_29694[(2)] = null);

(statearr_29661_29694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29659 === (4))){
var inst_29622 = (state_29658[(7)]);
var inst_29624 = (inst_29622 < cnt);
var state_29658__$1 = state_29658;
if(cljs.core.truth_(inst_29624)){
var statearr_29662_29695 = state_29658__$1;
(statearr_29662_29695[(1)] = (6));

} else {
var statearr_29663_29696 = state_29658__$1;
(statearr_29663_29696[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29659 === (15))){
var inst_29654 = (state_29658[(2)]);
var state_29658__$1 = state_29658;
var statearr_29664_29697 = state_29658__$1;
(statearr_29664_29697[(2)] = inst_29654);

(statearr_29664_29697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29659 === (13))){
var inst_29647 = cljs.core.async.close_BANG_.call(null,out);
var state_29658__$1 = state_29658;
var statearr_29665_29698 = state_29658__$1;
(statearr_29665_29698[(2)] = inst_29647);

(statearr_29665_29698[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29659 === (6))){
var state_29658__$1 = state_29658;
var statearr_29666_29699 = state_29658__$1;
(statearr_29666_29699[(2)] = null);

(statearr_29666_29699[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29659 === (3))){
var inst_29656 = (state_29658[(2)]);
var state_29658__$1 = state_29658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29658__$1,inst_29656);
} else {
if((state_val_29659 === (12))){
var inst_29644 = (state_29658[(8)]);
var inst_29644__$1 = (state_29658[(2)]);
var inst_29645 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29644__$1);
var state_29658__$1 = (function (){var statearr_29667 = state_29658;
(statearr_29667[(8)] = inst_29644__$1);

return statearr_29667;
})();
if(cljs.core.truth_(inst_29645)){
var statearr_29668_29700 = state_29658__$1;
(statearr_29668_29700[(1)] = (13));

} else {
var statearr_29669_29701 = state_29658__$1;
(statearr_29669_29701[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29659 === (2))){
var inst_29621 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29622 = (0);
var state_29658__$1 = (function (){var statearr_29670 = state_29658;
(statearr_29670[(7)] = inst_29622);

(statearr_29670[(9)] = inst_29621);

return statearr_29670;
})();
var statearr_29671_29702 = state_29658__$1;
(statearr_29671_29702[(2)] = null);

(statearr_29671_29702[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29659 === (11))){
var inst_29622 = (state_29658[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29658,(10),Object,null,(9));
var inst_29631 = chs__$1.call(null,inst_29622);
var inst_29632 = done.call(null,inst_29622);
var inst_29633 = cljs.core.async.take_BANG_.call(null,inst_29631,inst_29632);
var state_29658__$1 = state_29658;
var statearr_29672_29703 = state_29658__$1;
(statearr_29672_29703[(2)] = inst_29633);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29658__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29659 === (9))){
var inst_29622 = (state_29658[(7)]);
var inst_29635 = (state_29658[(2)]);
var inst_29636 = (inst_29622 + (1));
var inst_29622__$1 = inst_29636;
var state_29658__$1 = (function (){var statearr_29673 = state_29658;
(statearr_29673[(10)] = inst_29635);

(statearr_29673[(7)] = inst_29622__$1);

return statearr_29673;
})();
var statearr_29674_29704 = state_29658__$1;
(statearr_29674_29704[(2)] = null);

(statearr_29674_29704[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29659 === (5))){
var inst_29642 = (state_29658[(2)]);
var state_29658__$1 = (function (){var statearr_29675 = state_29658;
(statearr_29675[(11)] = inst_29642);

return statearr_29675;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29658__$1,(12),dchan);
} else {
if((state_val_29659 === (14))){
var inst_29644 = (state_29658[(8)]);
var inst_29649 = cljs.core.apply.call(null,f,inst_29644);
var state_29658__$1 = state_29658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29658__$1,(16),out,inst_29649);
} else {
if((state_val_29659 === (16))){
var inst_29651 = (state_29658[(2)]);
var state_29658__$1 = (function (){var statearr_29676 = state_29658;
(statearr_29676[(12)] = inst_29651);

return statearr_29676;
})();
var statearr_29677_29705 = state_29658__$1;
(statearr_29677_29705[(2)] = null);

(statearr_29677_29705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29659 === (10))){
var inst_29626 = (state_29658[(2)]);
var inst_29627 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29658__$1 = (function (){var statearr_29678 = state_29658;
(statearr_29678[(13)] = inst_29626);

return statearr_29678;
})();
var statearr_29679_29706 = state_29658__$1;
(statearr_29679_29706[(2)] = inst_29627);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29658__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29659 === (8))){
var inst_29640 = (state_29658[(2)]);
var state_29658__$1 = state_29658;
var statearr_29680_29707 = state_29658__$1;
(statearr_29680_29707[(2)] = inst_29640);

(statearr_29680_29707[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27653__auto___29692,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27541__auto__,c__27653__auto___29692,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27542__auto__ = null;
var cljs$core$async$state_machine__27542__auto____0 = (function (){
var statearr_29684 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29684[(0)] = cljs$core$async$state_machine__27542__auto__);

(statearr_29684[(1)] = (1));

return statearr_29684;
});
var cljs$core$async$state_machine__27542__auto____1 = (function (state_29658){
while(true){
var ret_value__27543__auto__ = (function (){try{while(true){
var result__27544__auto__ = switch__27541__auto__.call(null,state_29658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27544__auto__;
}
break;
}
}catch (e29685){if((e29685 instanceof Object)){
var ex__27545__auto__ = e29685;
var statearr_29686_29708 = state_29658;
(statearr_29686_29708[(5)] = ex__27545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29709 = state_29658;
state_29658 = G__29709;
continue;
} else {
return ret_value__27543__auto__;
}
break;
}
});
cljs$core$async$state_machine__27542__auto__ = function(state_29658){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27542__auto____1.call(this,state_29658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27542__auto____0;
cljs$core$async$state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27542__auto____1;
return cljs$core$async$state_machine__27542__auto__;
})()
;})(switch__27541__auto__,c__27653__auto___29692,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27655__auto__ = (function (){var statearr_29687 = f__27654__auto__.call(null);
(statearr_29687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27653__auto___29692);

return statearr_29687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27655__auto__);
});})(c__27653__auto___29692,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29711 = [];
var len__25865__auto___29769 = arguments.length;
var i__25866__auto___29770 = (0);
while(true){
if((i__25866__auto___29770 < len__25865__auto___29769)){
args29711.push((arguments[i__25866__auto___29770]));

var G__29771 = (i__25866__auto___29770 + (1));
i__25866__auto___29770 = G__29771;
continue;
} else {
}
break;
}

var G__29713 = args29711.length;
switch (G__29713) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29711.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27653__auto___29773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27653__auto___29773,out){
return (function (){
var f__27654__auto__ = (function (){var switch__27541__auto__ = ((function (c__27653__auto___29773,out){
return (function (state_29745){
var state_val_29746 = (state_29745[(1)]);
if((state_val_29746 === (7))){
var inst_29725 = (state_29745[(7)]);
var inst_29724 = (state_29745[(8)]);
var inst_29724__$1 = (state_29745[(2)]);
var inst_29725__$1 = cljs.core.nth.call(null,inst_29724__$1,(0),null);
var inst_29726 = cljs.core.nth.call(null,inst_29724__$1,(1),null);
var inst_29727 = (inst_29725__$1 == null);
var state_29745__$1 = (function (){var statearr_29747 = state_29745;
(statearr_29747[(9)] = inst_29726);

(statearr_29747[(7)] = inst_29725__$1);

(statearr_29747[(8)] = inst_29724__$1);

return statearr_29747;
})();
if(cljs.core.truth_(inst_29727)){
var statearr_29748_29774 = state_29745__$1;
(statearr_29748_29774[(1)] = (8));

} else {
var statearr_29749_29775 = state_29745__$1;
(statearr_29749_29775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29746 === (1))){
var inst_29714 = cljs.core.vec.call(null,chs);
var inst_29715 = inst_29714;
var state_29745__$1 = (function (){var statearr_29750 = state_29745;
(statearr_29750[(10)] = inst_29715);

return statearr_29750;
})();
var statearr_29751_29776 = state_29745__$1;
(statearr_29751_29776[(2)] = null);

(statearr_29751_29776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29746 === (4))){
var inst_29715 = (state_29745[(10)]);
var state_29745__$1 = state_29745;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29745__$1,(7),inst_29715);
} else {
if((state_val_29746 === (6))){
var inst_29741 = (state_29745[(2)]);
var state_29745__$1 = state_29745;
var statearr_29752_29777 = state_29745__$1;
(statearr_29752_29777[(2)] = inst_29741);

(statearr_29752_29777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29746 === (3))){
var inst_29743 = (state_29745[(2)]);
var state_29745__$1 = state_29745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29745__$1,inst_29743);
} else {
if((state_val_29746 === (2))){
var inst_29715 = (state_29745[(10)]);
var inst_29717 = cljs.core.count.call(null,inst_29715);
var inst_29718 = (inst_29717 > (0));
var state_29745__$1 = state_29745;
if(cljs.core.truth_(inst_29718)){
var statearr_29754_29778 = state_29745__$1;
(statearr_29754_29778[(1)] = (4));

} else {
var statearr_29755_29779 = state_29745__$1;
(statearr_29755_29779[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29746 === (11))){
var inst_29715 = (state_29745[(10)]);
var inst_29734 = (state_29745[(2)]);
var tmp29753 = inst_29715;
var inst_29715__$1 = tmp29753;
var state_29745__$1 = (function (){var statearr_29756 = state_29745;
(statearr_29756[(10)] = inst_29715__$1);

(statearr_29756[(11)] = inst_29734);

return statearr_29756;
})();
var statearr_29757_29780 = state_29745__$1;
(statearr_29757_29780[(2)] = null);

(statearr_29757_29780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29746 === (9))){
var inst_29725 = (state_29745[(7)]);
var state_29745__$1 = state_29745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29745__$1,(11),out,inst_29725);
} else {
if((state_val_29746 === (5))){
var inst_29739 = cljs.core.async.close_BANG_.call(null,out);
var state_29745__$1 = state_29745;
var statearr_29758_29781 = state_29745__$1;
(statearr_29758_29781[(2)] = inst_29739);

(statearr_29758_29781[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29746 === (10))){
var inst_29737 = (state_29745[(2)]);
var state_29745__$1 = state_29745;
var statearr_29759_29782 = state_29745__$1;
(statearr_29759_29782[(2)] = inst_29737);

(statearr_29759_29782[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29746 === (8))){
var inst_29726 = (state_29745[(9)]);
var inst_29725 = (state_29745[(7)]);
var inst_29715 = (state_29745[(10)]);
var inst_29724 = (state_29745[(8)]);
var inst_29729 = (function (){var cs = inst_29715;
var vec__29720 = inst_29724;
var v = inst_29725;
var c = inst_29726;
return ((function (cs,vec__29720,v,c,inst_29726,inst_29725,inst_29715,inst_29724,state_val_29746,c__27653__auto___29773,out){
return (function (p1__29710_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29710_SHARP_);
});
;})(cs,vec__29720,v,c,inst_29726,inst_29725,inst_29715,inst_29724,state_val_29746,c__27653__auto___29773,out))
})();
var inst_29730 = cljs.core.filterv.call(null,inst_29729,inst_29715);
var inst_29715__$1 = inst_29730;
var state_29745__$1 = (function (){var statearr_29760 = state_29745;
(statearr_29760[(10)] = inst_29715__$1);

return statearr_29760;
})();
var statearr_29761_29783 = state_29745__$1;
(statearr_29761_29783[(2)] = null);

(statearr_29761_29783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27653__auto___29773,out))
;
return ((function (switch__27541__auto__,c__27653__auto___29773,out){
return (function() {
var cljs$core$async$state_machine__27542__auto__ = null;
var cljs$core$async$state_machine__27542__auto____0 = (function (){
var statearr_29765 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29765[(0)] = cljs$core$async$state_machine__27542__auto__);

(statearr_29765[(1)] = (1));

return statearr_29765;
});
var cljs$core$async$state_machine__27542__auto____1 = (function (state_29745){
while(true){
var ret_value__27543__auto__ = (function (){try{while(true){
var result__27544__auto__ = switch__27541__auto__.call(null,state_29745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27544__auto__;
}
break;
}
}catch (e29766){if((e29766 instanceof Object)){
var ex__27545__auto__ = e29766;
var statearr_29767_29784 = state_29745;
(statearr_29767_29784[(5)] = ex__27545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29785 = state_29745;
state_29745 = G__29785;
continue;
} else {
return ret_value__27543__auto__;
}
break;
}
});
cljs$core$async$state_machine__27542__auto__ = function(state_29745){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27542__auto____1.call(this,state_29745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27542__auto____0;
cljs$core$async$state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27542__auto____1;
return cljs$core$async$state_machine__27542__auto__;
})()
;})(switch__27541__auto__,c__27653__auto___29773,out))
})();
var state__27655__auto__ = (function (){var statearr_29768 = f__27654__auto__.call(null);
(statearr_29768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27653__auto___29773);

return statearr_29768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27655__auto__);
});})(c__27653__auto___29773,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args29786 = [];
var len__25865__auto___29835 = arguments.length;
var i__25866__auto___29836 = (0);
while(true){
if((i__25866__auto___29836 < len__25865__auto___29835)){
args29786.push((arguments[i__25866__auto___29836]));

var G__29837 = (i__25866__auto___29836 + (1));
i__25866__auto___29836 = G__29837;
continue;
} else {
}
break;
}

var G__29788 = args29786.length;
switch (G__29788) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29786.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27653__auto___29839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27653__auto___29839,out){
return (function (){
var f__27654__auto__ = (function (){var switch__27541__auto__ = ((function (c__27653__auto___29839,out){
return (function (state_29812){
var state_val_29813 = (state_29812[(1)]);
if((state_val_29813 === (7))){
var inst_29794 = (state_29812[(7)]);
var inst_29794__$1 = (state_29812[(2)]);
var inst_29795 = (inst_29794__$1 == null);
var inst_29796 = cljs.core.not.call(null,inst_29795);
var state_29812__$1 = (function (){var statearr_29814 = state_29812;
(statearr_29814[(7)] = inst_29794__$1);

return statearr_29814;
})();
if(inst_29796){
var statearr_29815_29840 = state_29812__$1;
(statearr_29815_29840[(1)] = (8));

} else {
var statearr_29816_29841 = state_29812__$1;
(statearr_29816_29841[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (1))){
var inst_29789 = (0);
var state_29812__$1 = (function (){var statearr_29817 = state_29812;
(statearr_29817[(8)] = inst_29789);

return statearr_29817;
})();
var statearr_29818_29842 = state_29812__$1;
(statearr_29818_29842[(2)] = null);

(statearr_29818_29842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (4))){
var state_29812__$1 = state_29812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29812__$1,(7),ch);
} else {
if((state_val_29813 === (6))){
var inst_29807 = (state_29812[(2)]);
var state_29812__$1 = state_29812;
var statearr_29819_29843 = state_29812__$1;
(statearr_29819_29843[(2)] = inst_29807);

(statearr_29819_29843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (3))){
var inst_29809 = (state_29812[(2)]);
var inst_29810 = cljs.core.async.close_BANG_.call(null,out);
var state_29812__$1 = (function (){var statearr_29820 = state_29812;
(statearr_29820[(9)] = inst_29809);

return statearr_29820;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29812__$1,inst_29810);
} else {
if((state_val_29813 === (2))){
var inst_29789 = (state_29812[(8)]);
var inst_29791 = (inst_29789 < n);
var state_29812__$1 = state_29812;
if(cljs.core.truth_(inst_29791)){
var statearr_29821_29844 = state_29812__$1;
(statearr_29821_29844[(1)] = (4));

} else {
var statearr_29822_29845 = state_29812__$1;
(statearr_29822_29845[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (11))){
var inst_29789 = (state_29812[(8)]);
var inst_29799 = (state_29812[(2)]);
var inst_29800 = (inst_29789 + (1));
var inst_29789__$1 = inst_29800;
var state_29812__$1 = (function (){var statearr_29823 = state_29812;
(statearr_29823[(8)] = inst_29789__$1);

(statearr_29823[(10)] = inst_29799);

return statearr_29823;
})();
var statearr_29824_29846 = state_29812__$1;
(statearr_29824_29846[(2)] = null);

(statearr_29824_29846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (9))){
var state_29812__$1 = state_29812;
var statearr_29825_29847 = state_29812__$1;
(statearr_29825_29847[(2)] = null);

(statearr_29825_29847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (5))){
var state_29812__$1 = state_29812;
var statearr_29826_29848 = state_29812__$1;
(statearr_29826_29848[(2)] = null);

(statearr_29826_29848[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (10))){
var inst_29804 = (state_29812[(2)]);
var state_29812__$1 = state_29812;
var statearr_29827_29849 = state_29812__$1;
(statearr_29827_29849[(2)] = inst_29804);

(statearr_29827_29849[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (8))){
var inst_29794 = (state_29812[(7)]);
var state_29812__$1 = state_29812;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29812__$1,(11),out,inst_29794);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27653__auto___29839,out))
;
return ((function (switch__27541__auto__,c__27653__auto___29839,out){
return (function() {
var cljs$core$async$state_machine__27542__auto__ = null;
var cljs$core$async$state_machine__27542__auto____0 = (function (){
var statearr_29831 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29831[(0)] = cljs$core$async$state_machine__27542__auto__);

(statearr_29831[(1)] = (1));

return statearr_29831;
});
var cljs$core$async$state_machine__27542__auto____1 = (function (state_29812){
while(true){
var ret_value__27543__auto__ = (function (){try{while(true){
var result__27544__auto__ = switch__27541__auto__.call(null,state_29812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27544__auto__;
}
break;
}
}catch (e29832){if((e29832 instanceof Object)){
var ex__27545__auto__ = e29832;
var statearr_29833_29850 = state_29812;
(statearr_29833_29850[(5)] = ex__27545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29851 = state_29812;
state_29812 = G__29851;
continue;
} else {
return ret_value__27543__auto__;
}
break;
}
});
cljs$core$async$state_machine__27542__auto__ = function(state_29812){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27542__auto____1.call(this,state_29812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27542__auto____0;
cljs$core$async$state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27542__auto____1;
return cljs$core$async$state_machine__27542__auto__;
})()
;})(switch__27541__auto__,c__27653__auto___29839,out))
})();
var state__27655__auto__ = (function (){var statearr_29834 = f__27654__auto__.call(null);
(statearr_29834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27653__auto___29839);

return statearr_29834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27655__auto__);
});})(c__27653__auto___29839,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29859 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29859 = (function (map_LT_,f,ch,meta29860){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29860 = meta29860;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29861,meta29860__$1){
var self__ = this;
var _29861__$1 = this;
return (new cljs.core.async.t_cljs$core$async29859(self__.map_LT_,self__.f,self__.ch,meta29860__$1));
});

cljs.core.async.t_cljs$core$async29859.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29861){
var self__ = this;
var _29861__$1 = this;
return self__.meta29860;
});

cljs.core.async.t_cljs$core$async29859.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29859.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29859.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29859.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29859.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29862 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29862 = (function (map_LT_,f,ch,meta29860,_,fn1,meta29863){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29860 = meta29860;
this._ = _;
this.fn1 = fn1;
this.meta29863 = meta29863;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29864,meta29863__$1){
var self__ = this;
var _29864__$1 = this;
return (new cljs.core.async.t_cljs$core$async29862(self__.map_LT_,self__.f,self__.ch,self__.meta29860,self__._,self__.fn1,meta29863__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29862.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29864){
var self__ = this;
var _29864__$1 = this;
return self__.meta29863;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29862.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29862.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29862.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29862.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29852_SHARP_){
return f1.call(null,(((p1__29852_SHARP_ == null))?null:self__.f.call(null,p1__29852_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29862.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29860","meta29860",905471267,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29859","cljs.core.async/t_cljs$core$async29859",304222806,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29863","meta29863",1962941077,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29862.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29862.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29862";

cljs.core.async.t_cljs$core$async29862.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async29862");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29862 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29862(map_LT___$1,f__$1,ch__$1,meta29860__$1,___$2,fn1__$1,meta29863){
return (new cljs.core.async.t_cljs$core$async29862(map_LT___$1,f__$1,ch__$1,meta29860__$1,___$2,fn1__$1,meta29863));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29862(self__.map_LT_,self__.f,self__.ch,self__.meta29860,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24778__auto__ = ret;
if(cljs.core.truth_(and__24778__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24778__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29859.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29859.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29859.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29860","meta29860",905471267,null)], null);
});

cljs.core.async.t_cljs$core$async29859.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29859.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29859";

cljs.core.async.t_cljs$core$async29859.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async29859");
});

cljs.core.async.__GT_t_cljs$core$async29859 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29859(map_LT___$1,f__$1,ch__$1,meta29860){
return (new cljs.core.async.t_cljs$core$async29859(map_LT___$1,f__$1,ch__$1,meta29860));
});

}

return (new cljs.core.async.t_cljs$core$async29859(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29868 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29868 = (function (map_GT_,f,ch,meta29869){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29869 = meta29869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29870,meta29869__$1){
var self__ = this;
var _29870__$1 = this;
return (new cljs.core.async.t_cljs$core$async29868(self__.map_GT_,self__.f,self__.ch,meta29869__$1));
});

cljs.core.async.t_cljs$core$async29868.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29870){
var self__ = this;
var _29870__$1 = this;
return self__.meta29869;
});

cljs.core.async.t_cljs$core$async29868.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29868.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29868.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29868.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29868.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29868.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29868.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29869","meta29869",895824467,null)], null);
});

cljs.core.async.t_cljs$core$async29868.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29868.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29868";

cljs.core.async.t_cljs$core$async29868.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async29868");
});

cljs.core.async.__GT_t_cljs$core$async29868 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29868(map_GT___$1,f__$1,ch__$1,meta29869){
return (new cljs.core.async.t_cljs$core$async29868(map_GT___$1,f__$1,ch__$1,meta29869));
});

}

return (new cljs.core.async.t_cljs$core$async29868(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29874 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29874 = (function (filter_GT_,p,ch,meta29875){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29875 = meta29875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29876,meta29875__$1){
var self__ = this;
var _29876__$1 = this;
return (new cljs.core.async.t_cljs$core$async29874(self__.filter_GT_,self__.p,self__.ch,meta29875__$1));
});

cljs.core.async.t_cljs$core$async29874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29876){
var self__ = this;
var _29876__$1 = this;
return self__.meta29875;
});

cljs.core.async.t_cljs$core$async29874.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29874.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29874.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29874.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29874.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29874.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29874.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29874.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29875","meta29875",-693320818,null)], null);
});

cljs.core.async.t_cljs$core$async29874.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29874.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29874";

cljs.core.async.t_cljs$core$async29874.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async29874");
});

cljs.core.async.__GT_t_cljs$core$async29874 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29874(filter_GT___$1,p__$1,ch__$1,meta29875){
return (new cljs.core.async.t_cljs$core$async29874(filter_GT___$1,p__$1,ch__$1,meta29875));
});

}

return (new cljs.core.async.t_cljs$core$async29874(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args29877 = [];
var len__25865__auto___29921 = arguments.length;
var i__25866__auto___29922 = (0);
while(true){
if((i__25866__auto___29922 < len__25865__auto___29921)){
args29877.push((arguments[i__25866__auto___29922]));

var G__29923 = (i__25866__auto___29922 + (1));
i__25866__auto___29922 = G__29923;
continue;
} else {
}
break;
}

var G__29879 = args29877.length;
switch (G__29879) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29877.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27653__auto___29925 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27653__auto___29925,out){
return (function (){
var f__27654__auto__ = (function (){var switch__27541__auto__ = ((function (c__27653__auto___29925,out){
return (function (state_29900){
var state_val_29901 = (state_29900[(1)]);
if((state_val_29901 === (7))){
var inst_29896 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
var statearr_29902_29926 = state_29900__$1;
(statearr_29902_29926[(2)] = inst_29896);

(statearr_29902_29926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (1))){
var state_29900__$1 = state_29900;
var statearr_29903_29927 = state_29900__$1;
(statearr_29903_29927[(2)] = null);

(statearr_29903_29927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (4))){
var inst_29882 = (state_29900[(7)]);
var inst_29882__$1 = (state_29900[(2)]);
var inst_29883 = (inst_29882__$1 == null);
var state_29900__$1 = (function (){var statearr_29904 = state_29900;
(statearr_29904[(7)] = inst_29882__$1);

return statearr_29904;
})();
if(cljs.core.truth_(inst_29883)){
var statearr_29905_29928 = state_29900__$1;
(statearr_29905_29928[(1)] = (5));

} else {
var statearr_29906_29929 = state_29900__$1;
(statearr_29906_29929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (6))){
var inst_29882 = (state_29900[(7)]);
var inst_29887 = p.call(null,inst_29882);
var state_29900__$1 = state_29900;
if(cljs.core.truth_(inst_29887)){
var statearr_29907_29930 = state_29900__$1;
(statearr_29907_29930[(1)] = (8));

} else {
var statearr_29908_29931 = state_29900__$1;
(statearr_29908_29931[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (3))){
var inst_29898 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29900__$1,inst_29898);
} else {
if((state_val_29901 === (2))){
var state_29900__$1 = state_29900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29900__$1,(4),ch);
} else {
if((state_val_29901 === (11))){
var inst_29890 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
var statearr_29909_29932 = state_29900__$1;
(statearr_29909_29932[(2)] = inst_29890);

(statearr_29909_29932[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (9))){
var state_29900__$1 = state_29900;
var statearr_29910_29933 = state_29900__$1;
(statearr_29910_29933[(2)] = null);

(statearr_29910_29933[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (5))){
var inst_29885 = cljs.core.async.close_BANG_.call(null,out);
var state_29900__$1 = state_29900;
var statearr_29911_29934 = state_29900__$1;
(statearr_29911_29934[(2)] = inst_29885);

(statearr_29911_29934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (10))){
var inst_29893 = (state_29900[(2)]);
var state_29900__$1 = (function (){var statearr_29912 = state_29900;
(statearr_29912[(8)] = inst_29893);

return statearr_29912;
})();
var statearr_29913_29935 = state_29900__$1;
(statearr_29913_29935[(2)] = null);

(statearr_29913_29935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (8))){
var inst_29882 = (state_29900[(7)]);
var state_29900__$1 = state_29900;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29900__$1,(11),out,inst_29882);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27653__auto___29925,out))
;
return ((function (switch__27541__auto__,c__27653__auto___29925,out){
return (function() {
var cljs$core$async$state_machine__27542__auto__ = null;
var cljs$core$async$state_machine__27542__auto____0 = (function (){
var statearr_29917 = [null,null,null,null,null,null,null,null,null];
(statearr_29917[(0)] = cljs$core$async$state_machine__27542__auto__);

(statearr_29917[(1)] = (1));

return statearr_29917;
});
var cljs$core$async$state_machine__27542__auto____1 = (function (state_29900){
while(true){
var ret_value__27543__auto__ = (function (){try{while(true){
var result__27544__auto__ = switch__27541__auto__.call(null,state_29900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27544__auto__;
}
break;
}
}catch (e29918){if((e29918 instanceof Object)){
var ex__27545__auto__ = e29918;
var statearr_29919_29936 = state_29900;
(statearr_29919_29936[(5)] = ex__27545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29937 = state_29900;
state_29900 = G__29937;
continue;
} else {
return ret_value__27543__auto__;
}
break;
}
});
cljs$core$async$state_machine__27542__auto__ = function(state_29900){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27542__auto____1.call(this,state_29900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27542__auto____0;
cljs$core$async$state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27542__auto____1;
return cljs$core$async$state_machine__27542__auto__;
})()
;})(switch__27541__auto__,c__27653__auto___29925,out))
})();
var state__27655__auto__ = (function (){var statearr_29920 = f__27654__auto__.call(null);
(statearr_29920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27653__auto___29925);

return statearr_29920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27655__auto__);
});})(c__27653__auto___29925,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29938 = [];
var len__25865__auto___29941 = arguments.length;
var i__25866__auto___29942 = (0);
while(true){
if((i__25866__auto___29942 < len__25865__auto___29941)){
args29938.push((arguments[i__25866__auto___29942]));

var G__29943 = (i__25866__auto___29942 + (1));
i__25866__auto___29942 = G__29943;
continue;
} else {
}
break;
}

var G__29940 = args29938.length;
switch (G__29940) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29938.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27653__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27653__auto__){
return (function (){
var f__27654__auto__ = (function (){var switch__27541__auto__ = ((function (c__27653__auto__){
return (function (state_30110){
var state_val_30111 = (state_30110[(1)]);
if((state_val_30111 === (7))){
var inst_30106 = (state_30110[(2)]);
var state_30110__$1 = state_30110;
var statearr_30112_30153 = state_30110__$1;
(statearr_30112_30153[(2)] = inst_30106);

(statearr_30112_30153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30111 === (20))){
var inst_30076 = (state_30110[(7)]);
var inst_30087 = (state_30110[(2)]);
var inst_30088 = cljs.core.next.call(null,inst_30076);
var inst_30062 = inst_30088;
var inst_30063 = null;
var inst_30064 = (0);
var inst_30065 = (0);
var state_30110__$1 = (function (){var statearr_30113 = state_30110;
(statearr_30113[(8)] = inst_30063);

(statearr_30113[(9)] = inst_30065);

(statearr_30113[(10)] = inst_30087);

(statearr_30113[(11)] = inst_30064);

(statearr_30113[(12)] = inst_30062);

return statearr_30113;
})();
var statearr_30114_30154 = state_30110__$1;
(statearr_30114_30154[(2)] = null);

(statearr_30114_30154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30111 === (1))){
var state_30110__$1 = state_30110;
var statearr_30115_30155 = state_30110__$1;
(statearr_30115_30155[(2)] = null);

(statearr_30115_30155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30111 === (4))){
var inst_30051 = (state_30110[(13)]);
var inst_30051__$1 = (state_30110[(2)]);
var inst_30052 = (inst_30051__$1 == null);
var state_30110__$1 = (function (){var statearr_30116 = state_30110;
(statearr_30116[(13)] = inst_30051__$1);

return statearr_30116;
})();
if(cljs.core.truth_(inst_30052)){
var statearr_30117_30156 = state_30110__$1;
(statearr_30117_30156[(1)] = (5));

} else {
var statearr_30118_30157 = state_30110__$1;
(statearr_30118_30157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30111 === (15))){
var state_30110__$1 = state_30110;
var statearr_30122_30158 = state_30110__$1;
(statearr_30122_30158[(2)] = null);

(statearr_30122_30158[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30111 === (21))){
var state_30110__$1 = state_30110;
var statearr_30123_30159 = state_30110__$1;
(statearr_30123_30159[(2)] = null);

(statearr_30123_30159[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30111 === (13))){
var inst_30063 = (state_30110[(8)]);
var inst_30065 = (state_30110[(9)]);
var inst_30064 = (state_30110[(11)]);
var inst_30062 = (state_30110[(12)]);
var inst_30072 = (state_30110[(2)]);
var inst_30073 = (inst_30065 + (1));
var tmp30119 = inst_30063;
var tmp30120 = inst_30064;
var tmp30121 = inst_30062;
var inst_30062__$1 = tmp30121;
var inst_30063__$1 = tmp30119;
var inst_30064__$1 = tmp30120;
var inst_30065__$1 = inst_30073;
var state_30110__$1 = (function (){var statearr_30124 = state_30110;
(statearr_30124[(8)] = inst_30063__$1);

(statearr_30124[(9)] = inst_30065__$1);

(statearr_30124[(14)] = inst_30072);

(statearr_30124[(11)] = inst_30064__$1);

(statearr_30124[(12)] = inst_30062__$1);

return statearr_30124;
})();
var statearr_30125_30160 = state_30110__$1;
(statearr_30125_30160[(2)] = null);

(statearr_30125_30160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30111 === (22))){
var state_30110__$1 = state_30110;
var statearr_30126_30161 = state_30110__$1;
(statearr_30126_30161[(2)] = null);

(statearr_30126_30161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30111 === (6))){
var inst_30051 = (state_30110[(13)]);
var inst_30060 = f.call(null,inst_30051);
var inst_30061 = cljs.core.seq.call(null,inst_30060);
var inst_30062 = inst_30061;
var inst_30063 = null;
var inst_30064 = (0);
var inst_30065 = (0);
var state_30110__$1 = (function (){var statearr_30127 = state_30110;
(statearr_30127[(8)] = inst_30063);

(statearr_30127[(9)] = inst_30065);

(statearr_30127[(11)] = inst_30064);

(statearr_30127[(12)] = inst_30062);

return statearr_30127;
})();
var statearr_30128_30162 = state_30110__$1;
(statearr_30128_30162[(2)] = null);

(statearr_30128_30162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30111 === (17))){
var inst_30076 = (state_30110[(7)]);
var inst_30080 = cljs.core.chunk_first.call(null,inst_30076);
var inst_30081 = cljs.core.chunk_rest.call(null,inst_30076);
var inst_30082 = cljs.core.count.call(null,inst_30080);
var inst_30062 = inst_30081;
var inst_30063 = inst_30080;
var inst_30064 = inst_30082;
var inst_30065 = (0);
var state_30110__$1 = (function (){var statearr_30129 = state_30110;
(statearr_30129[(8)] = inst_30063);

(statearr_30129[(9)] = inst_30065);

(statearr_30129[(11)] = inst_30064);

(statearr_30129[(12)] = inst_30062);

return statearr_30129;
})();
var statearr_30130_30163 = state_30110__$1;
(statearr_30130_30163[(2)] = null);

(statearr_30130_30163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30111 === (3))){
var inst_30108 = (state_30110[(2)]);
var state_30110__$1 = state_30110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30110__$1,inst_30108);
} else {
if((state_val_30111 === (12))){
var inst_30096 = (state_30110[(2)]);
var state_30110__$1 = state_30110;
var statearr_30131_30164 = state_30110__$1;
(statearr_30131_30164[(2)] = inst_30096);

(statearr_30131_30164[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30111 === (2))){
var state_30110__$1 = state_30110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30110__$1,(4),in$);
} else {
if((state_val_30111 === (23))){
var inst_30104 = (state_30110[(2)]);
var state_30110__$1 = state_30110;
var statearr_30132_30165 = state_30110__$1;
(statearr_30132_30165[(2)] = inst_30104);

(statearr_30132_30165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30111 === (19))){
var inst_30091 = (state_30110[(2)]);
var state_30110__$1 = state_30110;
var statearr_30133_30166 = state_30110__$1;
(statearr_30133_30166[(2)] = inst_30091);

(statearr_30133_30166[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30111 === (11))){
var inst_30076 = (state_30110[(7)]);
var inst_30062 = (state_30110[(12)]);
var inst_30076__$1 = cljs.core.seq.call(null,inst_30062);
var state_30110__$1 = (function (){var statearr_30134 = state_30110;
(statearr_30134[(7)] = inst_30076__$1);

return statearr_30134;
})();
if(inst_30076__$1){
var statearr_30135_30167 = state_30110__$1;
(statearr_30135_30167[(1)] = (14));

} else {
var statearr_30136_30168 = state_30110__$1;
(statearr_30136_30168[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30111 === (9))){
var inst_30098 = (state_30110[(2)]);
var inst_30099 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30110__$1 = (function (){var statearr_30137 = state_30110;
(statearr_30137[(15)] = inst_30098);

return statearr_30137;
})();
if(cljs.core.truth_(inst_30099)){
var statearr_30138_30169 = state_30110__$1;
(statearr_30138_30169[(1)] = (21));

} else {
var statearr_30139_30170 = state_30110__$1;
(statearr_30139_30170[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30111 === (5))){
var inst_30054 = cljs.core.async.close_BANG_.call(null,out);
var state_30110__$1 = state_30110;
var statearr_30140_30171 = state_30110__$1;
(statearr_30140_30171[(2)] = inst_30054);

(statearr_30140_30171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30111 === (14))){
var inst_30076 = (state_30110[(7)]);
var inst_30078 = cljs.core.chunked_seq_QMARK_.call(null,inst_30076);
var state_30110__$1 = state_30110;
if(inst_30078){
var statearr_30141_30172 = state_30110__$1;
(statearr_30141_30172[(1)] = (17));

} else {
var statearr_30142_30173 = state_30110__$1;
(statearr_30142_30173[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30111 === (16))){
var inst_30094 = (state_30110[(2)]);
var state_30110__$1 = state_30110;
var statearr_30143_30174 = state_30110__$1;
(statearr_30143_30174[(2)] = inst_30094);

(statearr_30143_30174[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30111 === (10))){
var inst_30063 = (state_30110[(8)]);
var inst_30065 = (state_30110[(9)]);
var inst_30070 = cljs.core._nth.call(null,inst_30063,inst_30065);
var state_30110__$1 = state_30110;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30110__$1,(13),out,inst_30070);
} else {
if((state_val_30111 === (18))){
var inst_30076 = (state_30110[(7)]);
var inst_30085 = cljs.core.first.call(null,inst_30076);
var state_30110__$1 = state_30110;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30110__$1,(20),out,inst_30085);
} else {
if((state_val_30111 === (8))){
var inst_30065 = (state_30110[(9)]);
var inst_30064 = (state_30110[(11)]);
var inst_30067 = (inst_30065 < inst_30064);
var inst_30068 = inst_30067;
var state_30110__$1 = state_30110;
if(cljs.core.truth_(inst_30068)){
var statearr_30144_30175 = state_30110__$1;
(statearr_30144_30175[(1)] = (10));

} else {
var statearr_30145_30176 = state_30110__$1;
(statearr_30145_30176[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27653__auto__))
;
return ((function (switch__27541__auto__,c__27653__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27542__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27542__auto____0 = (function (){
var statearr_30149 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30149[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27542__auto__);

(statearr_30149[(1)] = (1));

return statearr_30149;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27542__auto____1 = (function (state_30110){
while(true){
var ret_value__27543__auto__ = (function (){try{while(true){
var result__27544__auto__ = switch__27541__auto__.call(null,state_30110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27544__auto__;
}
break;
}
}catch (e30150){if((e30150 instanceof Object)){
var ex__27545__auto__ = e30150;
var statearr_30151_30177 = state_30110;
(statearr_30151_30177[(5)] = ex__27545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30178 = state_30110;
state_30110 = G__30178;
continue;
} else {
return ret_value__27543__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27542__auto__ = function(state_30110){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27542__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27542__auto____1.call(this,state_30110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27542__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27542__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27542__auto__;
})()
;})(switch__27541__auto__,c__27653__auto__))
})();
var state__27655__auto__ = (function (){var statearr_30152 = f__27654__auto__.call(null);
(statearr_30152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27653__auto__);

return statearr_30152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27655__auto__);
});})(c__27653__auto__))
);

return c__27653__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30179 = [];
var len__25865__auto___30182 = arguments.length;
var i__25866__auto___30183 = (0);
while(true){
if((i__25866__auto___30183 < len__25865__auto___30182)){
args30179.push((arguments[i__25866__auto___30183]));

var G__30184 = (i__25866__auto___30183 + (1));
i__25866__auto___30183 = G__30184;
continue;
} else {
}
break;
}

var G__30181 = args30179.length;
switch (G__30181) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30179.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args30186 = [];
var len__25865__auto___30189 = arguments.length;
var i__25866__auto___30190 = (0);
while(true){
if((i__25866__auto___30190 < len__25865__auto___30189)){
args30186.push((arguments[i__25866__auto___30190]));

var G__30191 = (i__25866__auto___30190 + (1));
i__25866__auto___30190 = G__30191;
continue;
} else {
}
break;
}

var G__30188 = args30186.length;
switch (G__30188) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30186.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args30193 = [];
var len__25865__auto___30244 = arguments.length;
var i__25866__auto___30245 = (0);
while(true){
if((i__25866__auto___30245 < len__25865__auto___30244)){
args30193.push((arguments[i__25866__auto___30245]));

var G__30246 = (i__25866__auto___30245 + (1));
i__25866__auto___30245 = G__30246;
continue;
} else {
}
break;
}

var G__30195 = args30193.length;
switch (G__30195) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30193.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27653__auto___30248 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27653__auto___30248,out){
return (function (){
var f__27654__auto__ = (function (){var switch__27541__auto__ = ((function (c__27653__auto___30248,out){
return (function (state_30219){
var state_val_30220 = (state_30219[(1)]);
if((state_val_30220 === (7))){
var inst_30214 = (state_30219[(2)]);
var state_30219__$1 = state_30219;
var statearr_30221_30249 = state_30219__$1;
(statearr_30221_30249[(2)] = inst_30214);

(statearr_30221_30249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (1))){
var inst_30196 = null;
var state_30219__$1 = (function (){var statearr_30222 = state_30219;
(statearr_30222[(7)] = inst_30196);

return statearr_30222;
})();
var statearr_30223_30250 = state_30219__$1;
(statearr_30223_30250[(2)] = null);

(statearr_30223_30250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (4))){
var inst_30199 = (state_30219[(8)]);
var inst_30199__$1 = (state_30219[(2)]);
var inst_30200 = (inst_30199__$1 == null);
var inst_30201 = cljs.core.not.call(null,inst_30200);
var state_30219__$1 = (function (){var statearr_30224 = state_30219;
(statearr_30224[(8)] = inst_30199__$1);

return statearr_30224;
})();
if(inst_30201){
var statearr_30225_30251 = state_30219__$1;
(statearr_30225_30251[(1)] = (5));

} else {
var statearr_30226_30252 = state_30219__$1;
(statearr_30226_30252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (6))){
var state_30219__$1 = state_30219;
var statearr_30227_30253 = state_30219__$1;
(statearr_30227_30253[(2)] = null);

(statearr_30227_30253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (3))){
var inst_30216 = (state_30219[(2)]);
var inst_30217 = cljs.core.async.close_BANG_.call(null,out);
var state_30219__$1 = (function (){var statearr_30228 = state_30219;
(statearr_30228[(9)] = inst_30216);

return statearr_30228;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30219__$1,inst_30217);
} else {
if((state_val_30220 === (2))){
var state_30219__$1 = state_30219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30219__$1,(4),ch);
} else {
if((state_val_30220 === (11))){
var inst_30199 = (state_30219[(8)]);
var inst_30208 = (state_30219[(2)]);
var inst_30196 = inst_30199;
var state_30219__$1 = (function (){var statearr_30229 = state_30219;
(statearr_30229[(10)] = inst_30208);

(statearr_30229[(7)] = inst_30196);

return statearr_30229;
})();
var statearr_30230_30254 = state_30219__$1;
(statearr_30230_30254[(2)] = null);

(statearr_30230_30254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (9))){
var inst_30199 = (state_30219[(8)]);
var state_30219__$1 = state_30219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30219__$1,(11),out,inst_30199);
} else {
if((state_val_30220 === (5))){
var inst_30199 = (state_30219[(8)]);
var inst_30196 = (state_30219[(7)]);
var inst_30203 = cljs.core._EQ_.call(null,inst_30199,inst_30196);
var state_30219__$1 = state_30219;
if(inst_30203){
var statearr_30232_30255 = state_30219__$1;
(statearr_30232_30255[(1)] = (8));

} else {
var statearr_30233_30256 = state_30219__$1;
(statearr_30233_30256[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (10))){
var inst_30211 = (state_30219[(2)]);
var state_30219__$1 = state_30219;
var statearr_30234_30257 = state_30219__$1;
(statearr_30234_30257[(2)] = inst_30211);

(statearr_30234_30257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (8))){
var inst_30196 = (state_30219[(7)]);
var tmp30231 = inst_30196;
var inst_30196__$1 = tmp30231;
var state_30219__$1 = (function (){var statearr_30235 = state_30219;
(statearr_30235[(7)] = inst_30196__$1);

return statearr_30235;
})();
var statearr_30236_30258 = state_30219__$1;
(statearr_30236_30258[(2)] = null);

(statearr_30236_30258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27653__auto___30248,out))
;
return ((function (switch__27541__auto__,c__27653__auto___30248,out){
return (function() {
var cljs$core$async$state_machine__27542__auto__ = null;
var cljs$core$async$state_machine__27542__auto____0 = (function (){
var statearr_30240 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30240[(0)] = cljs$core$async$state_machine__27542__auto__);

(statearr_30240[(1)] = (1));

return statearr_30240;
});
var cljs$core$async$state_machine__27542__auto____1 = (function (state_30219){
while(true){
var ret_value__27543__auto__ = (function (){try{while(true){
var result__27544__auto__ = switch__27541__auto__.call(null,state_30219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27544__auto__;
}
break;
}
}catch (e30241){if((e30241 instanceof Object)){
var ex__27545__auto__ = e30241;
var statearr_30242_30259 = state_30219;
(statearr_30242_30259[(5)] = ex__27545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30260 = state_30219;
state_30219 = G__30260;
continue;
} else {
return ret_value__27543__auto__;
}
break;
}
});
cljs$core$async$state_machine__27542__auto__ = function(state_30219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27542__auto____1.call(this,state_30219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27542__auto____0;
cljs$core$async$state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27542__auto____1;
return cljs$core$async$state_machine__27542__auto__;
})()
;})(switch__27541__auto__,c__27653__auto___30248,out))
})();
var state__27655__auto__ = (function (){var statearr_30243 = f__27654__auto__.call(null);
(statearr_30243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27653__auto___30248);

return statearr_30243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27655__auto__);
});})(c__27653__auto___30248,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30261 = [];
var len__25865__auto___30331 = arguments.length;
var i__25866__auto___30332 = (0);
while(true){
if((i__25866__auto___30332 < len__25865__auto___30331)){
args30261.push((arguments[i__25866__auto___30332]));

var G__30333 = (i__25866__auto___30332 + (1));
i__25866__auto___30332 = G__30333;
continue;
} else {
}
break;
}

var G__30263 = args30261.length;
switch (G__30263) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30261.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27653__auto___30335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27653__auto___30335,out){
return (function (){
var f__27654__auto__ = (function (){var switch__27541__auto__ = ((function (c__27653__auto___30335,out){
return (function (state_30301){
var state_val_30302 = (state_30301[(1)]);
if((state_val_30302 === (7))){
var inst_30297 = (state_30301[(2)]);
var state_30301__$1 = state_30301;
var statearr_30303_30336 = state_30301__$1;
(statearr_30303_30336[(2)] = inst_30297);

(statearr_30303_30336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (1))){
var inst_30264 = (new Array(n));
var inst_30265 = inst_30264;
var inst_30266 = (0);
var state_30301__$1 = (function (){var statearr_30304 = state_30301;
(statearr_30304[(7)] = inst_30266);

(statearr_30304[(8)] = inst_30265);

return statearr_30304;
})();
var statearr_30305_30337 = state_30301__$1;
(statearr_30305_30337[(2)] = null);

(statearr_30305_30337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (4))){
var inst_30269 = (state_30301[(9)]);
var inst_30269__$1 = (state_30301[(2)]);
var inst_30270 = (inst_30269__$1 == null);
var inst_30271 = cljs.core.not.call(null,inst_30270);
var state_30301__$1 = (function (){var statearr_30306 = state_30301;
(statearr_30306[(9)] = inst_30269__$1);

return statearr_30306;
})();
if(inst_30271){
var statearr_30307_30338 = state_30301__$1;
(statearr_30307_30338[(1)] = (5));

} else {
var statearr_30308_30339 = state_30301__$1;
(statearr_30308_30339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (15))){
var inst_30291 = (state_30301[(2)]);
var state_30301__$1 = state_30301;
var statearr_30309_30340 = state_30301__$1;
(statearr_30309_30340[(2)] = inst_30291);

(statearr_30309_30340[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (13))){
var state_30301__$1 = state_30301;
var statearr_30310_30341 = state_30301__$1;
(statearr_30310_30341[(2)] = null);

(statearr_30310_30341[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (6))){
var inst_30266 = (state_30301[(7)]);
var inst_30287 = (inst_30266 > (0));
var state_30301__$1 = state_30301;
if(cljs.core.truth_(inst_30287)){
var statearr_30311_30342 = state_30301__$1;
(statearr_30311_30342[(1)] = (12));

} else {
var statearr_30312_30343 = state_30301__$1;
(statearr_30312_30343[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (3))){
var inst_30299 = (state_30301[(2)]);
var state_30301__$1 = state_30301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30301__$1,inst_30299);
} else {
if((state_val_30302 === (12))){
var inst_30265 = (state_30301[(8)]);
var inst_30289 = cljs.core.vec.call(null,inst_30265);
var state_30301__$1 = state_30301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30301__$1,(15),out,inst_30289);
} else {
if((state_val_30302 === (2))){
var state_30301__$1 = state_30301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30301__$1,(4),ch);
} else {
if((state_val_30302 === (11))){
var inst_30281 = (state_30301[(2)]);
var inst_30282 = (new Array(n));
var inst_30265 = inst_30282;
var inst_30266 = (0);
var state_30301__$1 = (function (){var statearr_30313 = state_30301;
(statearr_30313[(10)] = inst_30281);

(statearr_30313[(7)] = inst_30266);

(statearr_30313[(8)] = inst_30265);

return statearr_30313;
})();
var statearr_30314_30344 = state_30301__$1;
(statearr_30314_30344[(2)] = null);

(statearr_30314_30344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (9))){
var inst_30265 = (state_30301[(8)]);
var inst_30279 = cljs.core.vec.call(null,inst_30265);
var state_30301__$1 = state_30301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30301__$1,(11),out,inst_30279);
} else {
if((state_val_30302 === (5))){
var inst_30269 = (state_30301[(9)]);
var inst_30266 = (state_30301[(7)]);
var inst_30274 = (state_30301[(11)]);
var inst_30265 = (state_30301[(8)]);
var inst_30273 = (inst_30265[inst_30266] = inst_30269);
var inst_30274__$1 = (inst_30266 + (1));
var inst_30275 = (inst_30274__$1 < n);
var state_30301__$1 = (function (){var statearr_30315 = state_30301;
(statearr_30315[(12)] = inst_30273);

(statearr_30315[(11)] = inst_30274__$1);

return statearr_30315;
})();
if(cljs.core.truth_(inst_30275)){
var statearr_30316_30345 = state_30301__$1;
(statearr_30316_30345[(1)] = (8));

} else {
var statearr_30317_30346 = state_30301__$1;
(statearr_30317_30346[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (14))){
var inst_30294 = (state_30301[(2)]);
var inst_30295 = cljs.core.async.close_BANG_.call(null,out);
var state_30301__$1 = (function (){var statearr_30319 = state_30301;
(statearr_30319[(13)] = inst_30294);

return statearr_30319;
})();
var statearr_30320_30347 = state_30301__$1;
(statearr_30320_30347[(2)] = inst_30295);

(statearr_30320_30347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (10))){
var inst_30285 = (state_30301[(2)]);
var state_30301__$1 = state_30301;
var statearr_30321_30348 = state_30301__$1;
(statearr_30321_30348[(2)] = inst_30285);

(statearr_30321_30348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (8))){
var inst_30274 = (state_30301[(11)]);
var inst_30265 = (state_30301[(8)]);
var tmp30318 = inst_30265;
var inst_30265__$1 = tmp30318;
var inst_30266 = inst_30274;
var state_30301__$1 = (function (){var statearr_30322 = state_30301;
(statearr_30322[(7)] = inst_30266);

(statearr_30322[(8)] = inst_30265__$1);

return statearr_30322;
})();
var statearr_30323_30349 = state_30301__$1;
(statearr_30323_30349[(2)] = null);

(statearr_30323_30349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27653__auto___30335,out))
;
return ((function (switch__27541__auto__,c__27653__auto___30335,out){
return (function() {
var cljs$core$async$state_machine__27542__auto__ = null;
var cljs$core$async$state_machine__27542__auto____0 = (function (){
var statearr_30327 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30327[(0)] = cljs$core$async$state_machine__27542__auto__);

(statearr_30327[(1)] = (1));

return statearr_30327;
});
var cljs$core$async$state_machine__27542__auto____1 = (function (state_30301){
while(true){
var ret_value__27543__auto__ = (function (){try{while(true){
var result__27544__auto__ = switch__27541__auto__.call(null,state_30301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27544__auto__;
}
break;
}
}catch (e30328){if((e30328 instanceof Object)){
var ex__27545__auto__ = e30328;
var statearr_30329_30350 = state_30301;
(statearr_30329_30350[(5)] = ex__27545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30351 = state_30301;
state_30301 = G__30351;
continue;
} else {
return ret_value__27543__auto__;
}
break;
}
});
cljs$core$async$state_machine__27542__auto__ = function(state_30301){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27542__auto____1.call(this,state_30301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27542__auto____0;
cljs$core$async$state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27542__auto____1;
return cljs$core$async$state_machine__27542__auto__;
})()
;})(switch__27541__auto__,c__27653__auto___30335,out))
})();
var state__27655__auto__ = (function (){var statearr_30330 = f__27654__auto__.call(null);
(statearr_30330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27653__auto___30335);

return statearr_30330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27655__auto__);
});})(c__27653__auto___30335,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30352 = [];
var len__25865__auto___30426 = arguments.length;
var i__25866__auto___30427 = (0);
while(true){
if((i__25866__auto___30427 < len__25865__auto___30426)){
args30352.push((arguments[i__25866__auto___30427]));

var G__30428 = (i__25866__auto___30427 + (1));
i__25866__auto___30427 = G__30428;
continue;
} else {
}
break;
}

var G__30354 = args30352.length;
switch (G__30354) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30352.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27653__auto___30430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27653__auto___30430,out){
return (function (){
var f__27654__auto__ = (function (){var switch__27541__auto__ = ((function (c__27653__auto___30430,out){
return (function (state_30396){
var state_val_30397 = (state_30396[(1)]);
if((state_val_30397 === (7))){
var inst_30392 = (state_30396[(2)]);
var state_30396__$1 = state_30396;
var statearr_30398_30431 = state_30396__$1;
(statearr_30398_30431[(2)] = inst_30392);

(statearr_30398_30431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30397 === (1))){
var inst_30355 = [];
var inst_30356 = inst_30355;
var inst_30357 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30396__$1 = (function (){var statearr_30399 = state_30396;
(statearr_30399[(7)] = inst_30356);

(statearr_30399[(8)] = inst_30357);

return statearr_30399;
})();
var statearr_30400_30432 = state_30396__$1;
(statearr_30400_30432[(2)] = null);

(statearr_30400_30432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30397 === (4))){
var inst_30360 = (state_30396[(9)]);
var inst_30360__$1 = (state_30396[(2)]);
var inst_30361 = (inst_30360__$1 == null);
var inst_30362 = cljs.core.not.call(null,inst_30361);
var state_30396__$1 = (function (){var statearr_30401 = state_30396;
(statearr_30401[(9)] = inst_30360__$1);

return statearr_30401;
})();
if(inst_30362){
var statearr_30402_30433 = state_30396__$1;
(statearr_30402_30433[(1)] = (5));

} else {
var statearr_30403_30434 = state_30396__$1;
(statearr_30403_30434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30397 === (15))){
var inst_30386 = (state_30396[(2)]);
var state_30396__$1 = state_30396;
var statearr_30404_30435 = state_30396__$1;
(statearr_30404_30435[(2)] = inst_30386);

(statearr_30404_30435[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30397 === (13))){
var state_30396__$1 = state_30396;
var statearr_30405_30436 = state_30396__$1;
(statearr_30405_30436[(2)] = null);

(statearr_30405_30436[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30397 === (6))){
var inst_30356 = (state_30396[(7)]);
var inst_30381 = inst_30356.length;
var inst_30382 = (inst_30381 > (0));
var state_30396__$1 = state_30396;
if(cljs.core.truth_(inst_30382)){
var statearr_30406_30437 = state_30396__$1;
(statearr_30406_30437[(1)] = (12));

} else {
var statearr_30407_30438 = state_30396__$1;
(statearr_30407_30438[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30397 === (3))){
var inst_30394 = (state_30396[(2)]);
var state_30396__$1 = state_30396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30396__$1,inst_30394);
} else {
if((state_val_30397 === (12))){
var inst_30356 = (state_30396[(7)]);
var inst_30384 = cljs.core.vec.call(null,inst_30356);
var state_30396__$1 = state_30396;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30396__$1,(15),out,inst_30384);
} else {
if((state_val_30397 === (2))){
var state_30396__$1 = state_30396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30396__$1,(4),ch);
} else {
if((state_val_30397 === (11))){
var inst_30364 = (state_30396[(10)]);
var inst_30360 = (state_30396[(9)]);
var inst_30374 = (state_30396[(2)]);
var inst_30375 = [];
var inst_30376 = inst_30375.push(inst_30360);
var inst_30356 = inst_30375;
var inst_30357 = inst_30364;
var state_30396__$1 = (function (){var statearr_30408 = state_30396;
(statearr_30408[(7)] = inst_30356);

(statearr_30408[(8)] = inst_30357);

(statearr_30408[(11)] = inst_30376);

(statearr_30408[(12)] = inst_30374);

return statearr_30408;
})();
var statearr_30409_30439 = state_30396__$1;
(statearr_30409_30439[(2)] = null);

(statearr_30409_30439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30397 === (9))){
var inst_30356 = (state_30396[(7)]);
var inst_30372 = cljs.core.vec.call(null,inst_30356);
var state_30396__$1 = state_30396;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30396__$1,(11),out,inst_30372);
} else {
if((state_val_30397 === (5))){
var inst_30357 = (state_30396[(8)]);
var inst_30364 = (state_30396[(10)]);
var inst_30360 = (state_30396[(9)]);
var inst_30364__$1 = f.call(null,inst_30360);
var inst_30365 = cljs.core._EQ_.call(null,inst_30364__$1,inst_30357);
var inst_30366 = cljs.core.keyword_identical_QMARK_.call(null,inst_30357,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30367 = (inst_30365) || (inst_30366);
var state_30396__$1 = (function (){var statearr_30410 = state_30396;
(statearr_30410[(10)] = inst_30364__$1);

return statearr_30410;
})();
if(cljs.core.truth_(inst_30367)){
var statearr_30411_30440 = state_30396__$1;
(statearr_30411_30440[(1)] = (8));

} else {
var statearr_30412_30441 = state_30396__$1;
(statearr_30412_30441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30397 === (14))){
var inst_30389 = (state_30396[(2)]);
var inst_30390 = cljs.core.async.close_BANG_.call(null,out);
var state_30396__$1 = (function (){var statearr_30414 = state_30396;
(statearr_30414[(13)] = inst_30389);

return statearr_30414;
})();
var statearr_30415_30442 = state_30396__$1;
(statearr_30415_30442[(2)] = inst_30390);

(statearr_30415_30442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30397 === (10))){
var inst_30379 = (state_30396[(2)]);
var state_30396__$1 = state_30396;
var statearr_30416_30443 = state_30396__$1;
(statearr_30416_30443[(2)] = inst_30379);

(statearr_30416_30443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30397 === (8))){
var inst_30356 = (state_30396[(7)]);
var inst_30364 = (state_30396[(10)]);
var inst_30360 = (state_30396[(9)]);
var inst_30369 = inst_30356.push(inst_30360);
var tmp30413 = inst_30356;
var inst_30356__$1 = tmp30413;
var inst_30357 = inst_30364;
var state_30396__$1 = (function (){var statearr_30417 = state_30396;
(statearr_30417[(7)] = inst_30356__$1);

(statearr_30417[(8)] = inst_30357);

(statearr_30417[(14)] = inst_30369);

return statearr_30417;
})();
var statearr_30418_30444 = state_30396__$1;
(statearr_30418_30444[(2)] = null);

(statearr_30418_30444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27653__auto___30430,out))
;
return ((function (switch__27541__auto__,c__27653__auto___30430,out){
return (function() {
var cljs$core$async$state_machine__27542__auto__ = null;
var cljs$core$async$state_machine__27542__auto____0 = (function (){
var statearr_30422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30422[(0)] = cljs$core$async$state_machine__27542__auto__);

(statearr_30422[(1)] = (1));

return statearr_30422;
});
var cljs$core$async$state_machine__27542__auto____1 = (function (state_30396){
while(true){
var ret_value__27543__auto__ = (function (){try{while(true){
var result__27544__auto__ = switch__27541__auto__.call(null,state_30396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27544__auto__;
}
break;
}
}catch (e30423){if((e30423 instanceof Object)){
var ex__27545__auto__ = e30423;
var statearr_30424_30445 = state_30396;
(statearr_30424_30445[(5)] = ex__27545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30446 = state_30396;
state_30396 = G__30446;
continue;
} else {
return ret_value__27543__auto__;
}
break;
}
});
cljs$core$async$state_machine__27542__auto__ = function(state_30396){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27542__auto____1.call(this,state_30396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27542__auto____0;
cljs$core$async$state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27542__auto____1;
return cljs$core$async$state_machine__27542__auto__;
})()
;})(switch__27541__auto__,c__27653__auto___30430,out))
})();
var state__27655__auto__ = (function (){var statearr_30425 = f__27654__auto__.call(null);
(statearr_30425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27653__auto___30430);

return statearr_30425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27655__auto__);
});})(c__27653__auto___30430,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1479345922755