(defproject cljc-bug "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.293"]
                 [com.cemerick/piggieback   "0.2.1"]]
  :cljsbuild
  {:builds [{:id "cljc-bug"
             :source-paths ["src"]
             :compiler {:output-to     "target/cljc-bug/cljc_bug.js"
                        :output-dir    "target/cljc-bug"
                        :source-map    "target/cljc-bug/cljc_bug.js.map"
                        :target        :nodejs
                        :language-in   :ecmascript5
                        :optimizations :advanced
                        }}]}
  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]})
