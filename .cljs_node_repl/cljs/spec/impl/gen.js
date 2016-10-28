// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__18287__auto__,writer__18288__auto__,opt__18289__auto__){
return cljs.core._write.call(null,writer__18288__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__18796__auto__ = [];
var len__18789__auto___20860 = arguments.length;
var i__18790__auto___20861 = (0);
while(true){
if((i__18790__auto___20861 < len__18789__auto___20860)){
args__18796__auto__.push((arguments[i__18790__auto___20861]));

var G__20862 = (i__18790__auto___20861 + (1));
i__18790__auto___20861 = G__20862;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq20859){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20859));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__18796__auto__ = [];
var len__18789__auto___20864 = arguments.length;
var i__18790__auto___20865 = (0);
while(true){
if((i__18790__auto___20865 < len__18789__auto___20864)){
args__18796__auto__.push((arguments[i__18790__auto___20865]));

var G__20866 = (i__18790__auto___20865 + (1));
i__18790__auto___20865 = G__20866;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq20863){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20863));
});

var g_QMARK__20867 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_20868 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__20867){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__20867))
,null));
var mkg_20869 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__20867,g_20868){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__20867,g_20868))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__20867,g_20868,mkg_20869){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__20867).call(null,x);
});})(g_QMARK__20867,g_20868,mkg_20869))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__20867,g_20868,mkg_20869){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_20869).call(null,gfn);
});})(g_QMARK__20867,g_20868,mkg_20869))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__20867,g_20868,mkg_20869){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_20868).call(null,generator);
});})(g_QMARK__20867,g_20868,mkg_20869))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__18865__auto___20888 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__18865__auto___20888){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__18796__auto__ = [];
var len__18789__auto___20889 = arguments.length;
var i__18790__auto___20890 = (0);
while(true){
if((i__18790__auto___20890 < len__18789__auto___20889)){
args__18796__auto__.push((arguments[i__18790__auto___20890]));

var G__20891 = (i__18790__auto___20890 + (1));
i__18790__auto___20890 = G__20891;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18865__auto___20888))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18865__auto___20888){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18865__auto___20888),args);
});})(g__18865__auto___20888))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__18865__auto___20888){
return (function (seq20870){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20870));
});})(g__18865__auto___20888))
;


var g__18865__auto___20892 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__18865__auto___20892){
return (function cljs$spec$impl$gen$list(var_args){
var args__18796__auto__ = [];
var len__18789__auto___20893 = arguments.length;
var i__18790__auto___20894 = (0);
while(true){
if((i__18790__auto___20894 < len__18789__auto___20893)){
args__18796__auto__.push((arguments[i__18790__auto___20894]));

var G__20895 = (i__18790__auto___20894 + (1));
i__18790__auto___20894 = G__20895;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18865__auto___20892))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18865__auto___20892){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18865__auto___20892),args);
});})(g__18865__auto___20892))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__18865__auto___20892){
return (function (seq20871){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20871));
});})(g__18865__auto___20892))
;


var g__18865__auto___20896 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__18865__auto___20896){
return (function cljs$spec$impl$gen$map(var_args){
var args__18796__auto__ = [];
var len__18789__auto___20897 = arguments.length;
var i__18790__auto___20898 = (0);
while(true){
if((i__18790__auto___20898 < len__18789__auto___20897)){
args__18796__auto__.push((arguments[i__18790__auto___20898]));

var G__20899 = (i__18790__auto___20898 + (1));
i__18790__auto___20898 = G__20899;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18865__auto___20896))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18865__auto___20896){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18865__auto___20896),args);
});})(g__18865__auto___20896))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__18865__auto___20896){
return (function (seq20872){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20872));
});})(g__18865__auto___20896))
;


var g__18865__auto___20900 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__18865__auto___20900){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__18796__auto__ = [];
var len__18789__auto___20901 = arguments.length;
var i__18790__auto___20902 = (0);
while(true){
if((i__18790__auto___20902 < len__18789__auto___20901)){
args__18796__auto__.push((arguments[i__18790__auto___20902]));

var G__20903 = (i__18790__auto___20902 + (1));
i__18790__auto___20902 = G__20903;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18865__auto___20900))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18865__auto___20900){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18865__auto___20900),args);
});})(g__18865__auto___20900))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__18865__auto___20900){
return (function (seq20873){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20873));
});})(g__18865__auto___20900))
;


var g__18865__auto___20904 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__18865__auto___20904){
return (function cljs$spec$impl$gen$set(var_args){
var args__18796__auto__ = [];
var len__18789__auto___20905 = arguments.length;
var i__18790__auto___20906 = (0);
while(true){
if((i__18790__auto___20906 < len__18789__auto___20905)){
args__18796__auto__.push((arguments[i__18790__auto___20906]));

var G__20907 = (i__18790__auto___20906 + (1));
i__18790__auto___20906 = G__20907;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18865__auto___20904))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18865__auto___20904){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18865__auto___20904),args);
});})(g__18865__auto___20904))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__18865__auto___20904){
return (function (seq20874){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20874));
});})(g__18865__auto___20904))
;


var g__18865__auto___20908 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__18865__auto___20908){
return (function cljs$spec$impl$gen$vector(var_args){
var args__18796__auto__ = [];
var len__18789__auto___20909 = arguments.length;
var i__18790__auto___20910 = (0);
while(true){
if((i__18790__auto___20910 < len__18789__auto___20909)){
args__18796__auto__.push((arguments[i__18790__auto___20910]));

var G__20911 = (i__18790__auto___20910 + (1));
i__18790__auto___20910 = G__20911;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18865__auto___20908))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18865__auto___20908){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18865__auto___20908),args);
});})(g__18865__auto___20908))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__18865__auto___20908){
return (function (seq20875){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20875));
});})(g__18865__auto___20908))
;


var g__18865__auto___20912 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__18865__auto___20912){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__18796__auto__ = [];
var len__18789__auto___20913 = arguments.length;
var i__18790__auto___20914 = (0);
while(true){
if((i__18790__auto___20914 < len__18789__auto___20913)){
args__18796__auto__.push((arguments[i__18790__auto___20914]));

var G__20915 = (i__18790__auto___20914 + (1));
i__18790__auto___20914 = G__20915;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18865__auto___20912))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18865__auto___20912){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18865__auto___20912),args);
});})(g__18865__auto___20912))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__18865__auto___20912){
return (function (seq20876){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20876));
});})(g__18865__auto___20912))
;


var g__18865__auto___20916 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__18865__auto___20916){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__18796__auto__ = [];
var len__18789__auto___20917 = arguments.length;
var i__18790__auto___20918 = (0);
while(true){
if((i__18790__auto___20918 < len__18789__auto___20917)){
args__18796__auto__.push((arguments[i__18790__auto___20918]));

var G__20919 = (i__18790__auto___20918 + (1));
i__18790__auto___20918 = G__20919;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18865__auto___20916))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18865__auto___20916){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18865__auto___20916),args);
});})(g__18865__auto___20916))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__18865__auto___20916){
return (function (seq20877){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20877));
});})(g__18865__auto___20916))
;


var g__18865__auto___20920 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__18865__auto___20920){
return (function cljs$spec$impl$gen$elements(var_args){
var args__18796__auto__ = [];
var len__18789__auto___20921 = arguments.length;
var i__18790__auto___20922 = (0);
while(true){
if((i__18790__auto___20922 < len__18789__auto___20921)){
args__18796__auto__.push((arguments[i__18790__auto___20922]));

var G__20923 = (i__18790__auto___20922 + (1));
i__18790__auto___20922 = G__20923;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18865__auto___20920))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18865__auto___20920){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18865__auto___20920),args);
});})(g__18865__auto___20920))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__18865__auto___20920){
return (function (seq20878){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20878));
});})(g__18865__auto___20920))
;


var g__18865__auto___20924 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__18865__auto___20924){
return (function cljs$spec$impl$gen$bind(var_args){
var args__18796__auto__ = [];
var len__18789__auto___20925 = arguments.length;
var i__18790__auto___20926 = (0);
while(true){
if((i__18790__auto___20926 < len__18789__auto___20925)){
args__18796__auto__.push((arguments[i__18790__auto___20926]));

var G__20927 = (i__18790__auto___20926 + (1));
i__18790__auto___20926 = G__20927;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18865__auto___20924))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18865__auto___20924){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18865__auto___20924),args);
});})(g__18865__auto___20924))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__18865__auto___20924){
return (function (seq20879){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20879));
});})(g__18865__auto___20924))
;


var g__18865__auto___20928 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__18865__auto___20928){
return (function cljs$spec$impl$gen$choose(var_args){
var args__18796__auto__ = [];
var len__18789__auto___20929 = arguments.length;
var i__18790__auto___20930 = (0);
while(true){
if((i__18790__auto___20930 < len__18789__auto___20929)){
args__18796__auto__.push((arguments[i__18790__auto___20930]));

var G__20931 = (i__18790__auto___20930 + (1));
i__18790__auto___20930 = G__20931;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18865__auto___20928))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18865__auto___20928){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18865__auto___20928),args);
});})(g__18865__auto___20928))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__18865__auto___20928){
return (function (seq20880){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20880));
});})(g__18865__auto___20928))
;


var g__18865__auto___20932 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__18865__auto___20932){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__18796__auto__ = [];
var len__18789__auto___20933 = arguments.length;
var i__18790__auto___20934 = (0);
while(true){
if((i__18790__auto___20934 < len__18789__auto___20933)){
args__18796__auto__.push((arguments[i__18790__auto___20934]));

var G__20935 = (i__18790__auto___20934 + (1));
i__18790__auto___20934 = G__20935;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18865__auto___20932))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18865__auto___20932){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18865__auto___20932),args);
});})(g__18865__auto___20932))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__18865__auto___20932){
return (function (seq20881){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20881));
});})(g__18865__auto___20932))
;


var g__18865__auto___20936 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__18865__auto___20936){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__18796__auto__ = [];
var len__18789__auto___20937 = arguments.length;
var i__18790__auto___20938 = (0);
while(true){
if((i__18790__auto___20938 < len__18789__auto___20937)){
args__18796__auto__.push((arguments[i__18790__auto___20938]));

var G__20939 = (i__18790__auto___20938 + (1));
i__18790__auto___20938 = G__20939;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18865__auto___20936))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18865__auto___20936){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18865__auto___20936),args);
});})(g__18865__auto___20936))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__18865__auto___20936){
return (function (seq20882){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20882));
});})(g__18865__auto___20936))
;


var g__18865__auto___20940 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__18865__auto___20940){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__18796__auto__ = [];
var len__18789__auto___20941 = arguments.length;
var i__18790__auto___20942 = (0);
while(true){
if((i__18790__auto___20942 < len__18789__auto___20941)){
args__18796__auto__.push((arguments[i__18790__auto___20942]));

var G__20943 = (i__18790__auto___20942 + (1));
i__18790__auto___20942 = G__20943;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18865__auto___20940))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18865__auto___20940){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18865__auto___20940),args);
});})(g__18865__auto___20940))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__18865__auto___20940){
return (function (seq20883){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20883));
});})(g__18865__auto___20940))
;


var g__18865__auto___20944 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__18865__auto___20944){
return (function cljs$spec$impl$gen$sample(var_args){
var args__18796__auto__ = [];
var len__18789__auto___20945 = arguments.length;
var i__18790__auto___20946 = (0);
while(true){
if((i__18790__auto___20946 < len__18789__auto___20945)){
args__18796__auto__.push((arguments[i__18790__auto___20946]));

var G__20947 = (i__18790__auto___20946 + (1));
i__18790__auto___20946 = G__20947;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18865__auto___20944))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18865__auto___20944){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18865__auto___20944),args);
});})(g__18865__auto___20944))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__18865__auto___20944){
return (function (seq20884){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20884));
});})(g__18865__auto___20944))
;


var g__18865__auto___20948 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__18865__auto___20948){
return (function cljs$spec$impl$gen$return(var_args){
var args__18796__auto__ = [];
var len__18789__auto___20949 = arguments.length;
var i__18790__auto___20950 = (0);
while(true){
if((i__18790__auto___20950 < len__18789__auto___20949)){
args__18796__auto__.push((arguments[i__18790__auto___20950]));

var G__20951 = (i__18790__auto___20950 + (1));
i__18790__auto___20950 = G__20951;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18865__auto___20948))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18865__auto___20948){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18865__auto___20948),args);
});})(g__18865__auto___20948))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__18865__auto___20948){
return (function (seq20885){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20885));
});})(g__18865__auto___20948))
;


var g__18865__auto___20952 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__18865__auto___20952){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__18796__auto__ = [];
var len__18789__auto___20953 = arguments.length;
var i__18790__auto___20954 = (0);
while(true){
if((i__18790__auto___20954 < len__18789__auto___20953)){
args__18796__auto__.push((arguments[i__18790__auto___20954]));

var G__20955 = (i__18790__auto___20954 + (1));
i__18790__auto___20954 = G__20955;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18865__auto___20952))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18865__auto___20952){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18865__auto___20952),args);
});})(g__18865__auto___20952))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__18865__auto___20952){
return (function (seq20886){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20886));
});})(g__18865__auto___20952))
;


var g__18865__auto___20956 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__18865__auto___20956){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__18796__auto__ = [];
var len__18789__auto___20957 = arguments.length;
var i__18790__auto___20958 = (0);
while(true){
if((i__18790__auto___20958 < len__18789__auto___20957)){
args__18796__auto__.push((arguments[i__18790__auto___20958]));

var G__20959 = (i__18790__auto___20958 + (1));
i__18790__auto___20958 = G__20959;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18865__auto___20956))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18865__auto___20956){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18865__auto___20956),args);
});})(g__18865__auto___20956))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__18865__auto___20956){
return (function (seq20887){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20887));
});})(g__18865__auto___20956))
;

var g__18878__auto___20981 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__18878__auto___20981){
return (function cljs$spec$impl$gen$any(var_args){
var args__18796__auto__ = [];
var len__18789__auto___20982 = arguments.length;
var i__18790__auto___20983 = (0);
while(true){
if((i__18790__auto___20983 < len__18789__auto___20982)){
args__18796__auto__.push((arguments[i__18790__auto___20983]));

var G__20984 = (i__18790__auto___20983 + (1));
i__18790__auto___20983 = G__20984;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18878__auto___20981))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18878__auto___20981){
return (function (args){
return cljs.core.deref.call(null,g__18878__auto___20981);
});})(g__18878__auto___20981))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__18878__auto___20981){
return (function (seq20960){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20960));
});})(g__18878__auto___20981))
;


var g__18878__auto___20985 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__18878__auto___20985){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__18796__auto__ = [];
var len__18789__auto___20986 = arguments.length;
var i__18790__auto___20987 = (0);
while(true){
if((i__18790__auto___20987 < len__18789__auto___20986)){
args__18796__auto__.push((arguments[i__18790__auto___20987]));

var G__20988 = (i__18790__auto___20987 + (1));
i__18790__auto___20987 = G__20988;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18878__auto___20985))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18878__auto___20985){
return (function (args){
return cljs.core.deref.call(null,g__18878__auto___20985);
});})(g__18878__auto___20985))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__18878__auto___20985){
return (function (seq20961){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20961));
});})(g__18878__auto___20985))
;


var g__18878__auto___20989 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__18878__auto___20989){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__18796__auto__ = [];
var len__18789__auto___20990 = arguments.length;
var i__18790__auto___20991 = (0);
while(true){
if((i__18790__auto___20991 < len__18789__auto___20990)){
args__18796__auto__.push((arguments[i__18790__auto___20991]));

var G__20992 = (i__18790__auto___20991 + (1));
i__18790__auto___20991 = G__20992;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18878__auto___20989))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18878__auto___20989){
return (function (args){
return cljs.core.deref.call(null,g__18878__auto___20989);
});})(g__18878__auto___20989))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__18878__auto___20989){
return (function (seq20962){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20962));
});})(g__18878__auto___20989))
;


var g__18878__auto___20993 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__18878__auto___20993){
return (function cljs$spec$impl$gen$char(var_args){
var args__18796__auto__ = [];
var len__18789__auto___20994 = arguments.length;
var i__18790__auto___20995 = (0);
while(true){
if((i__18790__auto___20995 < len__18789__auto___20994)){
args__18796__auto__.push((arguments[i__18790__auto___20995]));

var G__20996 = (i__18790__auto___20995 + (1));
i__18790__auto___20995 = G__20996;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18878__auto___20993))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18878__auto___20993){
return (function (args){
return cljs.core.deref.call(null,g__18878__auto___20993);
});})(g__18878__auto___20993))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__18878__auto___20993){
return (function (seq20963){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20963));
});})(g__18878__auto___20993))
;


var g__18878__auto___20997 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__18878__auto___20997){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__18796__auto__ = [];
var len__18789__auto___20998 = arguments.length;
var i__18790__auto___20999 = (0);
while(true){
if((i__18790__auto___20999 < len__18789__auto___20998)){
args__18796__auto__.push((arguments[i__18790__auto___20999]));

var G__21000 = (i__18790__auto___20999 + (1));
i__18790__auto___20999 = G__21000;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18878__auto___20997))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18878__auto___20997){
return (function (args){
return cljs.core.deref.call(null,g__18878__auto___20997);
});})(g__18878__auto___20997))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__18878__auto___20997){
return (function (seq20964){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20964));
});})(g__18878__auto___20997))
;


var g__18878__auto___21001 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__18878__auto___21001){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__18796__auto__ = [];
var len__18789__auto___21002 = arguments.length;
var i__18790__auto___21003 = (0);
while(true){
if((i__18790__auto___21003 < len__18789__auto___21002)){
args__18796__auto__.push((arguments[i__18790__auto___21003]));

var G__21004 = (i__18790__auto___21003 + (1));
i__18790__auto___21003 = G__21004;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18878__auto___21001))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18878__auto___21001){
return (function (args){
return cljs.core.deref.call(null,g__18878__auto___21001);
});})(g__18878__auto___21001))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__18878__auto___21001){
return (function (seq20965){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20965));
});})(g__18878__auto___21001))
;


var g__18878__auto___21005 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__18878__auto___21005){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__18796__auto__ = [];
var len__18789__auto___21006 = arguments.length;
var i__18790__auto___21007 = (0);
while(true){
if((i__18790__auto___21007 < len__18789__auto___21006)){
args__18796__auto__.push((arguments[i__18790__auto___21007]));

var G__21008 = (i__18790__auto___21007 + (1));
i__18790__auto___21007 = G__21008;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18878__auto___21005))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18878__auto___21005){
return (function (args){
return cljs.core.deref.call(null,g__18878__auto___21005);
});})(g__18878__auto___21005))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__18878__auto___21005){
return (function (seq20966){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20966));
});})(g__18878__auto___21005))
;


var g__18878__auto___21009 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__18878__auto___21009){
return (function cljs$spec$impl$gen$double(var_args){
var args__18796__auto__ = [];
var len__18789__auto___21010 = arguments.length;
var i__18790__auto___21011 = (0);
while(true){
if((i__18790__auto___21011 < len__18789__auto___21010)){
args__18796__auto__.push((arguments[i__18790__auto___21011]));

var G__21012 = (i__18790__auto___21011 + (1));
i__18790__auto___21011 = G__21012;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18878__auto___21009))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18878__auto___21009){
return (function (args){
return cljs.core.deref.call(null,g__18878__auto___21009);
});})(g__18878__auto___21009))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__18878__auto___21009){
return (function (seq20967){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20967));
});})(g__18878__auto___21009))
;


var g__18878__auto___21013 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__18878__auto___21013){
return (function cljs$spec$impl$gen$int(var_args){
var args__18796__auto__ = [];
var len__18789__auto___21014 = arguments.length;
var i__18790__auto___21015 = (0);
while(true){
if((i__18790__auto___21015 < len__18789__auto___21014)){
args__18796__auto__.push((arguments[i__18790__auto___21015]));

var G__21016 = (i__18790__auto___21015 + (1));
i__18790__auto___21015 = G__21016;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18878__auto___21013))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18878__auto___21013){
return (function (args){
return cljs.core.deref.call(null,g__18878__auto___21013);
});})(g__18878__auto___21013))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__18878__auto___21013){
return (function (seq20968){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20968));
});})(g__18878__auto___21013))
;


var g__18878__auto___21017 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__18878__auto___21017){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__18796__auto__ = [];
var len__18789__auto___21018 = arguments.length;
var i__18790__auto___21019 = (0);
while(true){
if((i__18790__auto___21019 < len__18789__auto___21018)){
args__18796__auto__.push((arguments[i__18790__auto___21019]));

var G__21020 = (i__18790__auto___21019 + (1));
i__18790__auto___21019 = G__21020;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18878__auto___21017))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18878__auto___21017){
return (function (args){
return cljs.core.deref.call(null,g__18878__auto___21017);
});})(g__18878__auto___21017))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__18878__auto___21017){
return (function (seq20969){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20969));
});})(g__18878__auto___21017))
;


var g__18878__auto___21021 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__18878__auto___21021){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__18796__auto__ = [];
var len__18789__auto___21022 = arguments.length;
var i__18790__auto___21023 = (0);
while(true){
if((i__18790__auto___21023 < len__18789__auto___21022)){
args__18796__auto__.push((arguments[i__18790__auto___21023]));

var G__21024 = (i__18790__auto___21023 + (1));
i__18790__auto___21023 = G__21024;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18878__auto___21021))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18878__auto___21021){
return (function (args){
return cljs.core.deref.call(null,g__18878__auto___21021);
});})(g__18878__auto___21021))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__18878__auto___21021){
return (function (seq20970){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20970));
});})(g__18878__auto___21021))
;


var g__18878__auto___21025 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__18878__auto___21025){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__18796__auto__ = [];
var len__18789__auto___21026 = arguments.length;
var i__18790__auto___21027 = (0);
while(true){
if((i__18790__auto___21027 < len__18789__auto___21026)){
args__18796__auto__.push((arguments[i__18790__auto___21027]));

var G__21028 = (i__18790__auto___21027 + (1));
i__18790__auto___21027 = G__21028;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18878__auto___21025))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18878__auto___21025){
return (function (args){
return cljs.core.deref.call(null,g__18878__auto___21025);
});})(g__18878__auto___21025))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__18878__auto___21025){
return (function (seq20971){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20971));
});})(g__18878__auto___21025))
;


var g__18878__auto___21029 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__18878__auto___21029){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__18796__auto__ = [];
var len__18789__auto___21030 = arguments.length;
var i__18790__auto___21031 = (0);
while(true){
if((i__18790__auto___21031 < len__18789__auto___21030)){
args__18796__auto__.push((arguments[i__18790__auto___21031]));

var G__21032 = (i__18790__auto___21031 + (1));
i__18790__auto___21031 = G__21032;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18878__auto___21029))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18878__auto___21029){
return (function (args){
return cljs.core.deref.call(null,g__18878__auto___21029);
});})(g__18878__auto___21029))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__18878__auto___21029){
return (function (seq20972){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20972));
});})(g__18878__auto___21029))
;


var g__18878__auto___21033 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__18878__auto___21033){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__18796__auto__ = [];
var len__18789__auto___21034 = arguments.length;
var i__18790__auto___21035 = (0);
while(true){
if((i__18790__auto___21035 < len__18789__auto___21034)){
args__18796__auto__.push((arguments[i__18790__auto___21035]));

var G__21036 = (i__18790__auto___21035 + (1));
i__18790__auto___21035 = G__21036;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18878__auto___21033))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18878__auto___21033){
return (function (args){
return cljs.core.deref.call(null,g__18878__auto___21033);
});})(g__18878__auto___21033))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__18878__auto___21033){
return (function (seq20973){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20973));
});})(g__18878__auto___21033))
;


var g__18878__auto___21037 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__18878__auto___21037){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__18796__auto__ = [];
var len__18789__auto___21038 = arguments.length;
var i__18790__auto___21039 = (0);
while(true){
if((i__18790__auto___21039 < len__18789__auto___21038)){
args__18796__auto__.push((arguments[i__18790__auto___21039]));

var G__21040 = (i__18790__auto___21039 + (1));
i__18790__auto___21039 = G__21040;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18878__auto___21037))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18878__auto___21037){
return (function (args){
return cljs.core.deref.call(null,g__18878__auto___21037);
});})(g__18878__auto___21037))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__18878__auto___21037){
return (function (seq20974){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20974));
});})(g__18878__auto___21037))
;


var g__18878__auto___21041 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__18878__auto___21041){
return (function cljs$spec$impl$gen$string(var_args){
var args__18796__auto__ = [];
var len__18789__auto___21042 = arguments.length;
var i__18790__auto___21043 = (0);
while(true){
if((i__18790__auto___21043 < len__18789__auto___21042)){
args__18796__auto__.push((arguments[i__18790__auto___21043]));

var G__21044 = (i__18790__auto___21043 + (1));
i__18790__auto___21043 = G__21044;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18878__auto___21041))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18878__auto___21041){
return (function (args){
return cljs.core.deref.call(null,g__18878__auto___21041);
});})(g__18878__auto___21041))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__18878__auto___21041){
return (function (seq20975){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20975));
});})(g__18878__auto___21041))
;


var g__18878__auto___21045 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__18878__auto___21045){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__18796__auto__ = [];
var len__18789__auto___21046 = arguments.length;
var i__18790__auto___21047 = (0);
while(true){
if((i__18790__auto___21047 < len__18789__auto___21046)){
args__18796__auto__.push((arguments[i__18790__auto___21047]));

var G__21048 = (i__18790__auto___21047 + (1));
i__18790__auto___21047 = G__21048;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18878__auto___21045))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18878__auto___21045){
return (function (args){
return cljs.core.deref.call(null,g__18878__auto___21045);
});})(g__18878__auto___21045))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__18878__auto___21045){
return (function (seq20976){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20976));
});})(g__18878__auto___21045))
;


var g__18878__auto___21049 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__18878__auto___21049){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__18796__auto__ = [];
var len__18789__auto___21050 = arguments.length;
var i__18790__auto___21051 = (0);
while(true){
if((i__18790__auto___21051 < len__18789__auto___21050)){
args__18796__auto__.push((arguments[i__18790__auto___21051]));

var G__21052 = (i__18790__auto___21051 + (1));
i__18790__auto___21051 = G__21052;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18878__auto___21049))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18878__auto___21049){
return (function (args){
return cljs.core.deref.call(null,g__18878__auto___21049);
});})(g__18878__auto___21049))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__18878__auto___21049){
return (function (seq20977){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20977));
});})(g__18878__auto___21049))
;


var g__18878__auto___21053 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__18878__auto___21053){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__18796__auto__ = [];
var len__18789__auto___21054 = arguments.length;
var i__18790__auto___21055 = (0);
while(true){
if((i__18790__auto___21055 < len__18789__auto___21054)){
args__18796__auto__.push((arguments[i__18790__auto___21055]));

var G__21056 = (i__18790__auto___21055 + (1));
i__18790__auto___21055 = G__21056;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18878__auto___21053))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18878__auto___21053){
return (function (args){
return cljs.core.deref.call(null,g__18878__auto___21053);
});})(g__18878__auto___21053))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__18878__auto___21053){
return (function (seq20978){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20978));
});})(g__18878__auto___21053))
;


var g__18878__auto___21057 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__18878__auto___21057){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__18796__auto__ = [];
var len__18789__auto___21058 = arguments.length;
var i__18790__auto___21059 = (0);
while(true){
if((i__18790__auto___21059 < len__18789__auto___21058)){
args__18796__auto__.push((arguments[i__18790__auto___21059]));

var G__21060 = (i__18790__auto___21059 + (1));
i__18790__auto___21059 = G__21060;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18878__auto___21057))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18878__auto___21057){
return (function (args){
return cljs.core.deref.call(null,g__18878__auto___21057);
});})(g__18878__auto___21057))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__18878__auto___21057){
return (function (seq20979){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20979));
});})(g__18878__auto___21057))
;


var g__18878__auto___21061 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__18878__auto___21061){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__18796__auto__ = [];
var len__18789__auto___21062 = arguments.length;
var i__18790__auto___21063 = (0);
while(true){
if((i__18790__auto___21063 < len__18789__auto___21062)){
args__18796__auto__.push((arguments[i__18790__auto___21063]));

var G__21064 = (i__18790__auto___21063 + (1));
i__18790__auto___21063 = G__21064;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});})(g__18878__auto___21061))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18878__auto___21061){
return (function (args){
return cljs.core.deref.call(null,g__18878__auto___21061);
});})(g__18878__auto___21061))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__18878__auto___21061){
return (function (seq20980){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20980));
});})(g__18878__auto___21061))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__18796__auto__ = [];
var len__18789__auto___21067 = arguments.length;
var i__18790__auto___21068 = (0);
while(true){
if((i__18790__auto___21068 < len__18789__auto___21067)){
args__18796__auto__.push((arguments[i__18790__auto___21068]));

var G__21069 = (i__18790__auto___21068 + (1));
i__18790__auto___21068 = G__21069;
continue;
} else {
}
break;
}

var argseq__18797__auto__ = ((((0) < args__18796__auto__.length))?(new cljs.core.IndexedSeq(args__18796__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__18797__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__21065_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__21065_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq21066){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21066));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__21070_SHARP_){
return (new Date(p1__21070_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map