// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__26020__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26020 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26021__i = 0, G__26021__a = new Array(arguments.length -  0);
while (G__26021__i < G__26021__a.length) {G__26021__a[G__26021__i] = arguments[G__26021__i + 0]; ++G__26021__i;}
  args = new cljs.core.IndexedSeq(G__26021__a,0);
} 
return G__26020__delegate.call(this,args);};
G__26020.cljs$lang$maxFixedArity = 0;
G__26020.cljs$lang$applyTo = (function (arglist__26022){
var args = cljs.core.seq(arglist__26022);
return G__26020__delegate(args);
});
G__26020.cljs$core$IFn$_invoke$arity$variadic = G__26020__delegate;
return G__26020;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__26023__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26023 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26024__i = 0, G__26024__a = new Array(arguments.length -  0);
while (G__26024__i < G__26024__a.length) {G__26024__a[G__26024__i] = arguments[G__26024__i + 0]; ++G__26024__i;}
  args = new cljs.core.IndexedSeq(G__26024__a,0);
} 
return G__26023__delegate.call(this,args);};
G__26023.cljs$lang$maxFixedArity = 0;
G__26023.cljs$lang$applyTo = (function (arglist__26025){
var args = cljs.core.seq(arglist__26025);
return G__26023__delegate(args);
});
G__26023.cljs$core$IFn$_invoke$arity$variadic = G__26023__delegate;
return G__26023;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1479345919574