// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.stacktrace');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
if(typeof cljs.stacktrace.parse_stacktrace !== 'undefined'){
} else {
/**
 * Parse a JavaScript stacktrace string into a canonical data form. The
 *   arguments:
 * 
 *   repl-env - the repl environment, an optional map with :host and :port keys
 *           if the stacktrace includes url, not file references
 *   st       - the original stacktrace string to parse
 *   err      - an error map. :ua-product key defines the type of stacktrace parser
 *           to use, for example :chrome
 *   opts     - additional options. :output-dir maybe given in this argument if
 *           :host and :port do not apply, for example, a file path
 * 
 *   The canonical stacktrace representation can easily be mapped to a
 *   ClojureScript one see mapped-stacktrace and mapped-stacktrace-str
 */
cljs.stacktrace.parse_stacktrace = (function (){var method_table__25715__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25716__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25717__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25718__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25719__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.stacktrace","parse-stacktrace"),((function (method_table__25715__auto__,prefer_table__25716__auto__,method_cache__25717__auto__,cached_hierarchy__25718__auto__,hierarchy__25719__auto__){
return (function (repl_env,st,err,opts){
return new cljs.core.Keyword(null,"ua-product","ua-product",938384227).cljs$core$IFn$_invoke$arity$1(err);
});})(method_table__25715__auto__,prefer_table__25716__auto__,method_cache__25717__auto__,cached_hierarchy__25718__auto__,hierarchy__25719__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25719__auto__,method_table__25715__auto__,prefer_table__25716__auto__,method_cache__25717__auto__,cached_hierarchy__25718__auto__));
})();
}
cljs.stacktrace.parse_int = (function cljs$stacktrace$parse_int(s){
return parseInt(s,(10));
});
cljs.stacktrace.starts_with_QMARK_ = (function cljs$stacktrace$starts_with_QMARK_(s0,s1){
return goog.string.startsWith(s0,s1);
});
cljs.stacktrace.ends_with_QMARK_ = (function cljs$stacktrace$ends_with_QMARK_(s0,s1){
return goog.string.endsWith(s0,s1);
});
cljs.stacktrace.string__GT_regex = (function cljs$stacktrace$string__GT_regex(s){
return (new RegExp(s));
});
cljs.stacktrace.output_directory = (function cljs$stacktrace$output_directory(opts){
var or__24790__auto__ = new cljs.core.Keyword(null,"output-dir","output-dir",-290956991).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return "out";
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"default","default",-1987822328),(function (repl_env,st,err,opts){
return st;
}));
cljs.stacktrace.parse_file_line_column = (function cljs$stacktrace$parse_file_line_column(flc){
if(cljs.core.not.call(null,cljs.core.re_find.call(null,/:/,flc))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [flc,null,null], null);
} else {
var xs = clojure.string.split.call(null,flc,/:/);
var vec__38836 = cljs.core.reduce.call(null,((function (xs){
return (function (p__38842,p__38843){
var vec__38844 = p__38842;
var pre = cljs.core.nth.call(null,vec__38844,(0),null);
var post = cljs.core.nth.call(null,vec__38844,(1),null);
var vec__38847 = p__38843;
var x = cljs.core.nth.call(null,vec__38847,(0),null);
var i = cljs.core.nth.call(null,vec__38847,(1),null);
if((i <= (2))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.conj.call(null,post,x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,pre,x),post], null);
}
});})(xs))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.map.call(null,cljs.core.vector,xs,cljs.core.range.call(null,cljs.core.count.call(null,xs),(0),(-1))));
var pre = cljs.core.nth.call(null,vec__38836,(0),null);
var vec__38839 = cljs.core.nth.call(null,vec__38836,(1),null);
var line = cljs.core.nth.call(null,vec__38839,(0),null);
var column = cljs.core.nth.call(null,vec__38839,(1),null);
var file = clojure.string.join.call(null,":",pre);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__38850 = file;
if(cljs.stacktrace.starts_with_QMARK_.call(null,file,"(")){
return clojure.string.replace.call(null,G__38850,"(","");
} else {
return G__38850;
}
})(),cljs.stacktrace.parse_int.call(null,(function (){var G__38851 = line;
if(cljs.stacktrace.ends_with_QMARK_.call(null,line,")")){
return clojure.string.replace.call(null,G__38851,")","");
} else {
return G__38851;
}
})()),cljs.stacktrace.parse_int.call(null,(function (){var G__38852 = column;
if(cljs.stacktrace.ends_with_QMARK_.call(null,column,")")){
return clojure.string.replace.call(null,G__38852,")","");
} else {
return G__38852;
}
})())], null);
}
});
/**
 * Given a browser file url convert it into a relative path that can be used
 * to locate the original source.
 */
cljs.stacktrace.parse_file = (function cljs$stacktrace$parse_file(p__38853,file,p__38854){
var map__38859 = p__38853;
var map__38859__$1 = ((((!((map__38859 == null)))?((((map__38859.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38859.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38859):map__38859);
var repl_env = map__38859__$1;
var host = cljs.core.get.call(null,map__38859__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var host_port = cljs.core.get.call(null,map__38859__$1,new cljs.core.Keyword(null,"host-port","host-port",1956551772));
var port = cljs.core.get.call(null,map__38859__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var map__38860 = p__38854;
var map__38860__$1 = ((((!((map__38860 == null)))?((((map__38860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38860):map__38860);
var opts = map__38860__$1;
var asset_path = cljs.core.get.call(null,map__38860__$1,new cljs.core.Keyword(null,"asset-path","asset-path",1500889617));
var urlpat = (cljs.core.truth_(host)?cljs.stacktrace.string__GT_regex.call(null,[cljs.core.str("http://"),cljs.core.str(host),cljs.core.str(":"),cljs.core.str((function (){var or__24790__auto__ = host_port;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return port;
}
})()),cljs.core.str("/")].join('')):"");
var match = (cljs.core.truth_(host)?cljs.core.re_find.call(null,urlpat,file):cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991)));
if(cljs.core.truth_(match)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,file,urlpat,""),cljs.stacktrace.string__GT_regex.call(null,[cljs.core.str("^"),cljs.core.str((function (){var or__24790__auto__ = (function (){var and__24778__auto__ = asset_path;
if(cljs.core.truth_(and__24778__auto__)){
return clojure.string.replace.call(null,asset_path,/^\//,"");
} else {
return and__24778__auto__;
}
})();
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return cljs.stacktrace.output_directory.call(null,opts);
}
})()),cljs.core.str("/")].join('')),"");
} else {
var temp__4655__auto__ = new cljs.core.Keyword(null,"asset-root","asset-root",1771735072).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var asset_root = temp__4655__auto__;
return clojure.string.replace.call(null,file,asset_root,"");
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Could not relativize URL "),cljs.core.str(file)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parse-stacktrace","parse-stacktrace",-38208461),new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword(null,"relativize-url","relativize-url",621482324)], null));
}
}
});
cljs.stacktrace.chrome_st_el__GT_frame = (function cljs$stacktrace$chrome_st_el__GT_frame(repl_env,st_el,opts){
var xs = clojure.string.split.call(null,clojure.string.replace.call(null,st_el,/\s+at\s+/,""),/\s+/);
var vec__38869 = ((((1) === cljs.core.count.call(null,xs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first.call(null,xs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,xs),cljs.core.last.call(null,xs)], null));
var function$ = cljs.core.nth.call(null,vec__38869,(0),null);
var flc = cljs.core.nth.call(null,vec__38869,(1),null);
var vec__38872 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__38872,(0),null);
var line = cljs.core.nth.call(null,vec__38872,(1),null);
var column = cljs.core.nth.call(null,vec__38872,(2),null);
if(cljs.core.truth_((function (){var and__24778__auto__ = file;
if(cljs.core.truth_(and__24778__auto__)){
var and__24778__auto____$1 = function$;
if(cljs.core.truth_(and__24778__auto____$1)){
var and__24778__auto____$2 = line;
if(cljs.core.truth_(and__24778__auto____$2)){
return column;
} else {
return and__24778__auto____$2;
}
} else {
return and__24778__auto____$1;
}
} else {
return and__24778__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.replace.call(null,function$,/Object\./,""),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.replace.call(null,function$,/Object\./,""),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"chrome","chrome",1718738387),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__38877_SHARP_){
return cljs.stacktrace.chrome_st_el__GT_frame.call(null,repl_env,p1__38877_SHARP_,opts);
}),cljs.core.take_while.call(null,(function (p1__38876_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_.call(null,p1__38876_SHARP_,"    at eval"));
}),cljs.core.drop_while.call(null,(function (p1__38875_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__38875_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st))))));
}));
cljs.stacktrace.safari_st_el__GT_frame = (function cljs$stacktrace$safari_st_el__GT_frame(repl_env,st_el,opts){
var vec__38884 = (cljs.core.truth_(cljs.core.re_find.call(null,/@/,st_el))?clojure.string.split.call(null,st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.call(null,vec__38884,(0),null);
var flc = cljs.core.nth.call(null,vec__38884,(1),null);
var vec__38887 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__38887,(0),null);
var line = cljs.core.nth.call(null,vec__38887,(1),null);
var column = cljs.core.nth.call(null,vec__38887,(2),null);
if(cljs.core.truth_((function (){var and__24778__auto__ = file;
if(cljs.core.truth_(and__24778__auto__)){
var and__24778__auto____$1 = function$;
if(cljs.core.truth_(and__24778__auto____$1)){
var and__24778__auto____$2 = line;
if(cljs.core.truth_(and__24778__auto____$2)){
return column;
} else {
return and__24778__auto____$2;
}
} else {
return and__24778__auto____$1;
}
} else {
return and__24778__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.trim.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.trim.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"safari","safari",497115653),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__38892_SHARP_){
return cljs.stacktrace.safari_st_el__GT_frame.call(null,repl_env,p1__38892_SHARP_,opts);
}),cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.take_while.call(null,(function (p1__38891_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_.call(null,p1__38891_SHARP_,"eval code"));
}),cljs.core.drop_while.call(null,(function (p1__38890_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__38890_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st)))))));
}));
cljs.stacktrace.firefox_clean_function = (function cljs$stacktrace$firefox_clean_function(f){
var f__$1 = f;
var f__$2 = ((clojure.string.blank_QMARK_.call(null,f__$1))?null:((cljs.core.not_EQ_.call(null,f__$1.indexOf("</"),(-1)))?(function (){var idx = f__$1.indexOf("</");
return f__$1.substring((idx + (2)));
})():f__$1
));
return clojure.string.replace.call(null,clojure.string.replace.call(null,f__$2,/</,""),(new RegExp("\\/")),"");
});
cljs.stacktrace.firefox_st_el__GT_frame = (function cljs$stacktrace$firefox_st_el__GT_frame(repl_env,st_el,opts){
var vec__38899 = (cljs.core.truth_(cljs.core.re_find.call(null,/@/,st_el))?clojure.string.split.call(null,st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.call(null,vec__38899,(0),null);
var flc = cljs.core.nth.call(null,vec__38899,(1),null);
var vec__38902 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__38902,(0),null);
var line = cljs.core.nth.call(null,vec__38902,(1),null);
var column = cljs.core.nth.call(null,vec__38902,(2),null);
if(cljs.core.truth_((function (){var and__24778__auto__ = file;
if(cljs.core.truth_(and__24778__auto__)){
var and__24778__auto____$1 = function$;
if(cljs.core.truth_(and__24778__auto____$1)){
var and__24778__auto____$2 = line;
if(cljs.core.truth_(and__24778__auto____$2)){
return column;
} else {
return and__24778__auto____$2;
}
} else {
return and__24778__auto____$1;
}
} else {
return and__24778__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),cljs.stacktrace.firefox_clean_function.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),cljs.stacktrace.firefox_clean_function.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"firefox","firefox",1283768880),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__38907_SHARP_){
return cljs.stacktrace.firefox_st_el__GT_frame.call(null,repl_env,p1__38907_SHARP_,opts);
}),cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.take_while.call(null,(function (p1__38906_SHARP_){
return cljs.core._EQ_.call(null,p1__38906_SHARP_.indexOf("> eval"),(-1));
}),cljs.core.drop_while.call(null,(function (p1__38905_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__38905_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st)))))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"rhino","rhino",1962118035),(function (repl_env,st,err,p__38908){
var map__38909 = p__38908;
var map__38909__$1 = ((((!((map__38909 == null)))?((((map__38909.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38909.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38909):map__38909);
var opts = map__38909__$1;
var output_dir = cljs.core.get.call(null,map__38909__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var process_frame = ((function (map__38909,map__38909__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_.call(null,frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
var vec__38929 = clojure.string.split.call(null,frame_str,/:/);
var file_side = cljs.core.nth.call(null,vec__38929,(0),null);
var line_fn_side = cljs.core.nth.call(null,vec__38929,(1),null);
var file = clojure.string.replace.call(null,file_side,/\s+at\s+/,"");
var vec__38932 = clojure.string.split.call(null,line_fn_side,/\s+/);
var line = cljs.core.nth.call(null,vec__38932,(0),null);
var function$ = cljs.core.nth.call(null,vec__38932,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),clojure.string.replace.call(null,file,[cljs.core.str(output_dir),cljs.core.str("/")].join(''),""),new cljs.core.Keyword(null,"function","function",-2127255473),(cljs.core.truth_(function$)?clojure.string.replace.call(null,clojure.string.replace.call(null,function$,"(",""),")",""):null),new cljs.core.Keyword(null,"line","line",212345235),(cljs.core.truth_((function (){var and__24778__auto__ = line;
if(cljs.core.truth_(and__24778__auto__)){
return !(clojure.string.blank_QMARK_.call(null,line));
} else {
return and__24778__auto__;
}
})())?cljs.stacktrace.parse_int.call(null,line):null),new cljs.core.Keyword(null,"column","column",2078222095),(0)], null);
}
});})(map__38909,map__38909__$1,opts,output_dir))
;
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,process_frame,clojure.string.split.call(null,st,/\n/))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"nashorn","nashorn",988299963),(function (repl_env,st,err,p__38935){
var map__38936 = p__38935;
var map__38936__$1 = ((((!((map__38936 == null)))?((((map__38936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38936):map__38936);
var opts = map__38936__$1;
var output_dir = cljs.core.get.call(null,map__38936__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var process_frame = ((function (map__38936,map__38936__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_.call(null,frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
var frame_str__$1 = clojure.string.replace.call(null,frame_str,/\s+at\s+/,"");
var vec__38956 = clojure.string.split.call(null,frame_str__$1,/\s+/);
var function$ = cljs.core.nth.call(null,vec__38956,(0),null);
var file_and_line = cljs.core.nth.call(null,vec__38956,(1),null);
var vec__38959 = clojure.string.split.call(null,file_and_line,/:/);
var file_part = cljs.core.nth.call(null,vec__38959,(0),null);
var line_part = cljs.core.nth.call(null,vec__38959,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),clojure.string.replace.call(null,file_part.substring((1)),[cljs.core.str(output_dir),cljs.core.str("/")].join(''),""),new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"line","line",212345235),(cljs.core.truth_((function (){var and__24778__auto__ = line_part;
if(cljs.core.truth_(and__24778__auto__)){
return !(clojure.string.blank_QMARK_.call(null,line_part));
} else {
return and__24778__auto__;
}
})())?cljs.stacktrace.parse_int.call(null,line_part.substring((0),(cljs.core.count.call(null,line_part) - (1)))):null),new cljs.core.Keyword(null,"column","column",2078222095),(0)], null);
}
});})(map__38936,map__38936__$1,opts,output_dir))
;
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,process_frame,clojure.string.split.call(null,st,/\n/))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),(function (repl_env,st,err,p__38962){
var map__38963 = p__38962;
var map__38963__$1 = ((((!((map__38963 == null)))?((((map__38963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38963):map__38963);
var opts = map__38963__$1;
var output_dir = cljs.core.get.call(null,map__38963__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var parse_source_loc_info = ((function (map__38963,map__38963__$1,opts,output_dir){
return (function cljs$stacktrace$parse_source_loc_info(x){
if(cljs.core.truth_((function (){var and__24778__auto__ = x;
if(cljs.core.truth_(and__24778__auto__)){
return !(clojure.string.blank_QMARK_.call(null,x));
} else {
return and__24778__auto__;
}
})())){
return cljs.stacktrace.parse_int.call(null,x);
} else {
return null;
}
});})(map__38963,map__38963__$1,opts,output_dir))
;
var process_frame = ((function (map__38963,map__38963__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_.call(null,frame_str)) || ((cljs.core.re_find.call(null,/^\s+at/,frame_str) == null))){
return null;
} else {
var frame_str__$1 = clojure.string.replace.call(null,frame_str,/\s+at\s+/,"");
if(clojure.string.starts_with_QMARK_.call(null,frame_str__$1,"repl:")){
return null;
} else {
var parts = clojure.string.split.call(null,frame_str__$1,/\s+/);
var vec__38986 = ((((2) === cljs.core.count.call(null,parts)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,parts),cljs.core.subs.call(null,cljs.core.second.call(null,parts),(1),(cljs.core.count.call(null,cljs.core.second.call(null,parts)) - (1)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first.call(null,parts)], null));
var function$ = cljs.core.nth.call(null,vec__38986,(0),null);
var file_AMPERSAND_line = cljs.core.nth.call(null,vec__38986,(1),null);
var vec__38989 = clojure.string.split.call(null,file_AMPERSAND_line,/:/);
var file_part = cljs.core.nth.call(null,vec__38989,(0),null);
var line_part = cljs.core.nth.call(null,vec__38989,(1),null);
var col_part = cljs.core.nth.call(null,vec__38989,(2),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),(cljs.core.truth_(function$)?(function (){var G__38992 = file_part;
if(cljs.core.truth_(output_dir)){
return clojure.string.replace.call(null,G__38992,[cljs.core.str(output_dir),cljs.core.str("/")].join(''),"");
} else {
return G__38992;
}
})():file_part),new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"line","line",212345235),parse_source_loc_info.call(null,line_part),new cljs.core.Keyword(null,"column","column",2078222095),parse_source_loc_info.call(null,col_part)], null);
}
}
});})(map__38963,map__38963__$1,opts,output_dir))
;
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,process_frame,clojure.string.split.call(null,st,/\n/))));
}));
cljs.stacktrace.remove_ext = (function cljs$stacktrace$remove_ext(file){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,file,/\.js$/,""),/\.cljs$/,""),/\.cljc$/,""),/\.clj$/,"");
});
/**
 * Given a cljs.source-map source map data structure map a generated line
 * and column back to the original line, column, and function called.
 */
cljs.stacktrace.mapped_line_column_call = (function cljs$stacktrace$mapped_line_column_call(sms,file,line,column){
var source_map = cljs.core.get.call(null,sms,cljs.core.symbol.call(null,clojure.string.replace.call(null,cljs.stacktrace.remove_ext.call(null,file),"/",".")));
var get_best_column = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_get_best_column(columns,column__$1){
return cljs.core.last.call(null,(function (){var or__24790__auto__ = cljs.core.get.call(null,columns,cljs.core.last.call(null,cljs.core.filter.call(null,((function (source_map){
return (function (p1__38993_SHARP_){
return (p1__38993_SHARP_ <= (column__$1 - (1)));
});})(source_map))
,cljs.core.sort.call(null,cljs.core.keys.call(null,columns)))));
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return cljs.core.second.call(null,cljs.core.first.call(null,columns));
}
})());
});})(source_map))
;
var adjust = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_adjust(mapped){
return cljs.core.vec.call(null,cljs.core.map.call(null,((function (source_map){
return (function (p1__38994_SHARP_,p2__38995_SHARP_){
return p1__38994_SHARP_.call(null,p2__38995_SHARP_);
});})(source_map))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.inc,cljs.core.inc,cljs.core.identity], null),mapped));
});})(source_map))
;
var default$ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null);
var temp__4655__auto__ = cljs.core.get.call(null,source_map,(line - (1)));
if(cljs.core.truth_(temp__4655__auto__)){
var columns = temp__4655__auto__;
return adjust.call(null,cljs.core.map.call(null,get_best_column.call(null,columns,column),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"name","name",1843675177)], null)));
} else {
return default$;
}
});
/**
 * Given opts and a canonicalized JavaScript stacktrace frame, return the
 *   ClojureScript frame.
 */
cljs.stacktrace.mapped_frame = (function cljs$stacktrace$mapped_frame(p__38996,sms,opts){
var map__39002 = p__38996;
var map__39002__$1 = ((((!((map__39002 == null)))?((((map__39002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39002):map__39002);
var function$ = cljs.core.get.call(null,map__39002__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file = cljs.core.get.call(null,map__39002__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39002__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39002__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var no_source_file_QMARK_ = ((cljs.core.not.call(null,file))?true:cljs.stacktrace.starts_with_QMARK_.call(null,file,"<"));
var vec__39004 = ((no_source_file_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null):cljs.stacktrace.mapped_line_column_call.call(null,sms,file,line,column));
var line_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__39004,(0),null);
var column_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__39004,(1),null);
var call = cljs.core.nth.call(null,vec__39004,(2),null);
var file_SINGLEQUOTE_ = ((no_source_file_QMARK_)?null:((cljs.stacktrace.ends_with_QMARK_.call(null,file,".js"))?[cljs.core.str(cljs.core.subs.call(null,file,(0),(cljs.core.count.call(null,file) - (3)))),cljs.core.str(".cljs")].join(''):file));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"call","call",-519999866),call,new cljs.core.Keyword(null,"file","file",-1269645878),((no_source_file_QMARK_)?[cljs.core.str("NO_SOURCE_FILE"),cljs.core.str((cljs.core.truth_(file)?[cljs.core.str(" "),cljs.core.str(file)].join(''):null))].join(''):file_SINGLEQUOTE_),new cljs.core.Keyword(null,"line","line",212345235),line_SINGLEQUOTE_,new cljs.core.Keyword(null,"column","column",2078222095),column_SINGLEQUOTE_], null);
});
/**
 * Given a vector representing the canonicalized JavaScript stacktrace
 * return the ClojureScript stacktrace. The canonical stacktrace must be
 * in the form:
 * 
 *  [{:file <string>
 *    :function <string>
 *    :line <integer>
 *    :column <integer>}*]
 * 
 * :file must be a URL path (without protocol) relative to :output-dir or a
 * identifier delimited by angle brackets. The returned mapped stacktrace will
 * also contain :url entries to the original sources if it can be determined
 * from the classpath.
 */
cljs.stacktrace.mapped_stacktrace = (function cljs$stacktrace$mapped_stacktrace(var_args){
var args39009 = [];
var len__25865__auto___39012 = arguments.length;
var i__25866__auto___39013 = (0);
while(true){
if((i__25866__auto___39013 < len__25865__auto___39012)){
args39009.push((arguments[i__25866__auto___39013]));

var G__39014 = (i__25866__auto___39013 + (1));
i__25866__auto___39013 = G__39014;
continue;
} else {
}
break;
}

var G__39011 = args39009.length;
switch (G__39011) {
case 2:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39009.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace.call(null,stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var call__GT_function = (function cljs$stacktrace$call__GT_function(x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"call","call",-519999866).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"function","function",-2127255473)],[new cljs.core.Keyword(null,"call","call",-519999866).cljs$core$IFn$_invoke$arity$1(x)]);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
var call_merge = (function cljs$stacktrace$call_merge(function$,call){
return cljs.core.merge_with.call(null,(function (munged_fn_name,unmunged_call_name){
if(cljs.core._EQ_.call(null,munged_fn_name,clojure.string.replace.call(null,cljs.core.munge.call(null,unmunged_call_name),".","$"))){
return unmunged_call_name;
} else {
return munged_fn_name;
}
}),function$,call);
});
var mapped_frames = cljs.core.map.call(null,cljs.core.memoize.call(null,(function (p1__39007_SHARP_){
return cljs.stacktrace.mapped_frame.call(null,p1__39007_SHARP_,sms,opts);
})),stacktrace);
return cljs.core.vec.call(null,cljs.core.map.call(null,call_merge,cljs.core.map.call(null,((function (mapped_frames){
return (function (p1__39008_SHARP_){
return cljs.core.dissoc.call(null,p1__39008_SHARP_,new cljs.core.Keyword(null,"call","call",-519999866));
});})(mapped_frames))
,mapped_frames),cljs.core.concat.call(null,cljs.core.rest.call(null,cljs.core.map.call(null,call__GT_function,mapped_frames)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null))));
});

cljs.stacktrace.mapped_stacktrace.cljs$lang$maxFixedArity = 3;

/**
 * Given a vector representing the canonicalized JavaScript stacktrace and a map
 *   of library names to decoded source maps, print the ClojureScript stacktrace .
 *   See mapped-stacktrace.
 */
cljs.stacktrace.mapped_stacktrace_str = (function cljs$stacktrace$mapped_stacktrace_str(var_args){
var args39016 = [];
var len__25865__auto___39029 = arguments.length;
var i__25866__auto___39030 = (0);
while(true){
if((i__25866__auto___39030 < len__25865__auto___39029)){
args39016.push((arguments[i__25866__auto___39030]));

var G__39031 = (i__25866__auto___39030 + (1));
i__25866__auto___39030 = G__39031;
continue;
} else {
}
break;
}

var G__39018 = args39016.length;
switch (G__39018) {
case 2:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39016.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace_str.call(null,stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var sb__25776__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_39019_39033 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_39020_39034 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_39019_39033,_STAR_print_fn_STAR_39020_39034,sb__25776__auto__){
return (function (x__25777__auto__){
return sb__25776__auto__.append(x__25777__auto__);
});})(_STAR_print_newline_STAR_39019_39033,_STAR_print_fn_STAR_39020_39034,sb__25776__auto__))
;

try{var seq__39021_39035 = cljs.core.seq.call(null,cljs.stacktrace.mapped_stacktrace.call(null,stacktrace,sms,opts));
var chunk__39022_39036 = null;
var count__39023_39037 = (0);
var i__39024_39038 = (0);
while(true){
if((i__39024_39038 < count__39023_39037)){
var map__39025_39039 = cljs.core._nth.call(null,chunk__39022_39036,i__39024_39038);
var map__39025_39040__$1 = ((((!((map__39025_39039 == null)))?((((map__39025_39039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39025_39039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39025_39039):map__39025_39039);
var function_39041 = cljs.core.get.call(null,map__39025_39040__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_39042 = cljs.core.get.call(null,map__39025_39040__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_39043 = cljs.core.get.call(null,map__39025_39040__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39044 = cljs.core.get.call(null,map__39025_39040__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.call(null,"\t",[cljs.core.str((cljs.core.truth_(function_39041)?[cljs.core.str(function_39041),cljs.core.str(" ")].join(''):null)),cljs.core.str("("),cljs.core.str(file_39042),cljs.core.str((cljs.core.truth_(line_39043)?[cljs.core.str(":"),cljs.core.str(line_39043)].join(''):null)),cljs.core.str((cljs.core.truth_(column_39044)?[cljs.core.str(":"),cljs.core.str(column_39044)].join(''):null)),cljs.core.str(")")].join(''));

var G__39045 = seq__39021_39035;
var G__39046 = chunk__39022_39036;
var G__39047 = count__39023_39037;
var G__39048 = (i__39024_39038 + (1));
seq__39021_39035 = G__39045;
chunk__39022_39036 = G__39046;
count__39023_39037 = G__39047;
i__39024_39038 = G__39048;
continue;
} else {
var temp__4657__auto___39049 = cljs.core.seq.call(null,seq__39021_39035);
if(temp__4657__auto___39049){
var seq__39021_39050__$1 = temp__4657__auto___39049;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39021_39050__$1)){
var c__25601__auto___39051 = cljs.core.chunk_first.call(null,seq__39021_39050__$1);
var G__39052 = cljs.core.chunk_rest.call(null,seq__39021_39050__$1);
var G__39053 = c__25601__auto___39051;
var G__39054 = cljs.core.count.call(null,c__25601__auto___39051);
var G__39055 = (0);
seq__39021_39035 = G__39052;
chunk__39022_39036 = G__39053;
count__39023_39037 = G__39054;
i__39024_39038 = G__39055;
continue;
} else {
var map__39027_39056 = cljs.core.first.call(null,seq__39021_39050__$1);
var map__39027_39057__$1 = ((((!((map__39027_39056 == null)))?((((map__39027_39056.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39027_39056.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39027_39056):map__39027_39056);
var function_39058 = cljs.core.get.call(null,map__39027_39057__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_39059 = cljs.core.get.call(null,map__39027_39057__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_39060 = cljs.core.get.call(null,map__39027_39057__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39061 = cljs.core.get.call(null,map__39027_39057__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.call(null,"\t",[cljs.core.str((cljs.core.truth_(function_39058)?[cljs.core.str(function_39058),cljs.core.str(" ")].join(''):null)),cljs.core.str("("),cljs.core.str(file_39059),cljs.core.str((cljs.core.truth_(line_39060)?[cljs.core.str(":"),cljs.core.str(line_39060)].join(''):null)),cljs.core.str((cljs.core.truth_(column_39061)?[cljs.core.str(":"),cljs.core.str(column_39061)].join(''):null)),cljs.core.str(")")].join(''));

var G__39062 = cljs.core.next.call(null,seq__39021_39050__$1);
var G__39063 = null;
var G__39064 = (0);
var G__39065 = (0);
seq__39021_39035 = G__39062;
chunk__39022_39036 = G__39063;
count__39023_39037 = G__39064;
i__39024_39038 = G__39065;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_39020_39034;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_39019_39033;
}
return [cljs.core.str(sb__25776__auto__)].join('');
});

cljs.stacktrace.mapped_stacktrace_str.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=stacktrace.js.map?rel=1479345932245