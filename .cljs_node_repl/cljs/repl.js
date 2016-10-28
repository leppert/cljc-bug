// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19874){
var map__19899 = p__19874;
var map__19899__$1 = ((((!((map__19899 == null)))?((((map__19899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19899.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19899):map__19899);
var m = map__19899__$1;
var n = cljs.core.get.call(null,map__19899__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__19899__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19901_19923 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19902_19924 = null;
var count__19903_19925 = (0);
var i__19904_19926 = (0);
while(true){
if((i__19904_19926 < count__19903_19925)){
var f_19927 = cljs.core._nth.call(null,chunk__19902_19924,i__19904_19926);
cljs.core.println.call(null,"  ",f_19927);

var G__19928 = seq__19901_19923;
var G__19929 = chunk__19902_19924;
var G__19930 = count__19903_19925;
var G__19931 = (i__19904_19926 + (1));
seq__19901_19923 = G__19928;
chunk__19902_19924 = G__19929;
count__19903_19925 = G__19930;
i__19904_19926 = G__19931;
continue;
} else {
var temp__4657__auto___19932 = cljs.core.seq.call(null,seq__19901_19923);
if(temp__4657__auto___19932){
var seq__19901_19933__$1 = temp__4657__auto___19932;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19901_19933__$1)){
var c__18495__auto___19934 = cljs.core.chunk_first.call(null,seq__19901_19933__$1);
var G__19935 = cljs.core.chunk_rest.call(null,seq__19901_19933__$1);
var G__19936 = c__18495__auto___19934;
var G__19937 = cljs.core.count.call(null,c__18495__auto___19934);
var G__19938 = (0);
seq__19901_19923 = G__19935;
chunk__19902_19924 = G__19936;
count__19903_19925 = G__19937;
i__19904_19926 = G__19938;
continue;
} else {
var f_19939 = cljs.core.first.call(null,seq__19901_19933__$1);
cljs.core.println.call(null,"  ",f_19939);

var G__19940 = cljs.core.next.call(null,seq__19901_19933__$1);
var G__19941 = null;
var G__19942 = (0);
var G__19943 = (0);
seq__19901_19923 = G__19940;
chunk__19902_19924 = G__19941;
count__19903_19925 = G__19942;
i__19904_19926 = G__19943;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19944 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__17681__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__17681__auto__)){
return or__17681__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_19944);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_19944)))?cljs.core.second.call(null,arglists_19944):arglists_19944));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19905_19945 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19906_19946 = null;
var count__19907_19947 = (0);
var i__19908_19948 = (0);
while(true){
if((i__19908_19948 < count__19907_19947)){
var vec__19909_19949 = cljs.core._nth.call(null,chunk__19906_19946,i__19908_19948);
var name_19950 = cljs.core.nth.call(null,vec__19909_19949,(0),null);
var map__19912_19951 = cljs.core.nth.call(null,vec__19909_19949,(1),null);
var map__19912_19952__$1 = ((((!((map__19912_19951 == null)))?((((map__19912_19951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19912_19951.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19912_19951):map__19912_19951);
var doc_19953 = cljs.core.get.call(null,map__19912_19952__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19954 = cljs.core.get.call(null,map__19912_19952__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19950);

cljs.core.println.call(null," ",arglists_19954);

if(cljs.core.truth_(doc_19953)){
cljs.core.println.call(null," ",doc_19953);
} else {
}

var G__19955 = seq__19905_19945;
var G__19956 = chunk__19906_19946;
var G__19957 = count__19907_19947;
var G__19958 = (i__19908_19948 + (1));
seq__19905_19945 = G__19955;
chunk__19906_19946 = G__19956;
count__19907_19947 = G__19957;
i__19908_19948 = G__19958;
continue;
} else {
var temp__4657__auto___19959 = cljs.core.seq.call(null,seq__19905_19945);
if(temp__4657__auto___19959){
var seq__19905_19960__$1 = temp__4657__auto___19959;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19905_19960__$1)){
var c__18495__auto___19961 = cljs.core.chunk_first.call(null,seq__19905_19960__$1);
var G__19962 = cljs.core.chunk_rest.call(null,seq__19905_19960__$1);
var G__19963 = c__18495__auto___19961;
var G__19964 = cljs.core.count.call(null,c__18495__auto___19961);
var G__19965 = (0);
seq__19905_19945 = G__19962;
chunk__19906_19946 = G__19963;
count__19907_19947 = G__19964;
i__19908_19948 = G__19965;
continue;
} else {
var vec__19914_19966 = cljs.core.first.call(null,seq__19905_19960__$1);
var name_19967 = cljs.core.nth.call(null,vec__19914_19966,(0),null);
var map__19917_19968 = cljs.core.nth.call(null,vec__19914_19966,(1),null);
var map__19917_19969__$1 = ((((!((map__19917_19968 == null)))?((((map__19917_19968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19917_19968.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19917_19968):map__19917_19968);
var doc_19970 = cljs.core.get.call(null,map__19917_19969__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19971 = cljs.core.get.call(null,map__19917_19969__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19967);

cljs.core.println.call(null," ",arglists_19971);

if(cljs.core.truth_(doc_19970)){
cljs.core.println.call(null," ",doc_19970);
} else {
}

var G__19972 = cljs.core.next.call(null,seq__19905_19960__$1);
var G__19973 = null;
var G__19974 = (0);
var G__19975 = (0);
seq__19905_19945 = G__19972;
chunk__19906_19946 = G__19973;
count__19907_19947 = G__19974;
i__19908_19948 = G__19975;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__19919 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19920 = null;
var count__19921 = (0);
var i__19922 = (0);
while(true){
if((i__19922 < count__19921)){
var role = cljs.core._nth.call(null,chunk__19920,i__19922);
var temp__4657__auto___19976__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___19976__$1)){
var spec_19977 = temp__4657__auto___19976__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_19977));
} else {
}

var G__19978 = seq__19919;
var G__19979 = chunk__19920;
var G__19980 = count__19921;
var G__19981 = (i__19922 + (1));
seq__19919 = G__19978;
chunk__19920 = G__19979;
count__19921 = G__19980;
i__19922 = G__19981;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__19919);
if(temp__4657__auto____$1){
var seq__19919__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19919__$1)){
var c__18495__auto__ = cljs.core.chunk_first.call(null,seq__19919__$1);
var G__19982 = cljs.core.chunk_rest.call(null,seq__19919__$1);
var G__19983 = c__18495__auto__;
var G__19984 = cljs.core.count.call(null,c__18495__auto__);
var G__19985 = (0);
seq__19919 = G__19982;
chunk__19920 = G__19983;
count__19921 = G__19984;
i__19922 = G__19985;
continue;
} else {
var role = cljs.core.first.call(null,seq__19919__$1);
var temp__4657__auto___19986__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___19986__$2)){
var spec_19987 = temp__4657__auto___19986__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_19987));
} else {
}

var G__19988 = cljs.core.next.call(null,seq__19919__$1);
var G__19989 = null;
var G__19990 = (0);
var G__19991 = (0);
seq__19919 = G__19988;
chunk__19920 = G__19989;
count__19921 = G__19990;
i__19922 = G__19991;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map