System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "traceur",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "build/main": [
      "src/js/main"
    ]
  },

  map: {
    "d3": "npm:d3@4.0.0-alpha.35",
    "d3-array": "npm:d3-array@0.7.1",
    "d3-request": "npm:d3-request@0.4.6",
    "d3-scale": "npm:d3-scale@0.7.0",
    "d3-selection": "npm:d3-selection@0.7.1",
    "guardian/iframe-messenger": "github:guardian/iframe-messenger@master",
    "json": "github:systemjs/plugin-json@0.1.0",
    "reqwest": "github:ded/reqwest@1.1.5",
    "text": "github:systemjs/plugin-text@0.0.2",
    "traceur": "github:jmcriffey/bower-traceur@0.0.93",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.93",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.3"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:d3-axis@0.3.1": {
      "d3-scale": "npm:d3-scale@0.7.0",
      "d3-selection": "npm:d3-selection@0.7.1",
      "d3-transition": "npm:d3-transition@0.2.8"
    },
    "npm:d3-dsv@0.3.2": {
      "rw": "npm:rw@1.3.2"
    },
    "npm:d3-force@0.5.0": {
      "d3-collection": "npm:d3-collection@0.1.2",
      "d3-dispatch": "npm:d3-dispatch@0.4.3",
      "d3-quadtree": "npm:d3-quadtree@0.7.2",
      "d3-timer": "npm:d3-timer@0.4.3",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:d3-interpolate@0.7.0": {
      "d3-color": "npm:d3-color@0.4.2"
    },
    "npm:d3-request@0.4.6": {
      "d3-collection": "npm:d3-collection@0.1.2",
      "d3-dispatch": "npm:d3-dispatch@0.4.3",
      "d3-dsv": "npm:d3-dsv@0.3.2",
      "xmlhttprequest": "npm:xmlhttprequest@1.8.0"
    },
    "npm:d3-scale@0.7.0": {
      "d3-array": "npm:d3-array@0.7.1",
      "d3-collection": "npm:d3-collection@0.1.2",
      "d3-color": "npm:d3-color@0.4.2",
      "d3-format": "npm:d3-format@0.5.1",
      "d3-interpolate": "npm:d3-interpolate@0.7.0",
      "d3-time": "npm:d3-time@0.2.5",
      "d3-time-format": "npm:d3-time-format@0.3.2"
    },
    "npm:d3-shape@0.6.0": {
      "d3-path": "npm:d3-path@0.1.5"
    },
    "npm:d3-time-format@0.3.2": {
      "d3-time": "npm:d3-time@0.2.5"
    },
    "npm:d3-transition@0.2.8": {
      "d3-color": "npm:d3-color@0.4.2",
      "d3-dispatch": "npm:d3-dispatch@0.4.3",
      "d3-ease": "npm:d3-ease@0.7.0",
      "d3-interpolate": "npm:d3-interpolate@0.7.0",
      "d3-selection": "npm:d3-selection@0.7.1",
      "d3-timer": "npm:d3-timer@0.4.3"
    },
    "npm:d3@4.0.0-alpha.35": {
      "d3-array": "npm:d3-array@0.7.1",
      "d3-axis": "npm:d3-axis@0.3.1",
      "d3-collection": "npm:d3-collection@0.1.2",
      "d3-color": "npm:d3-color@0.4.2",
      "d3-dispatch": "npm:d3-dispatch@0.4.3",
      "d3-dsv": "npm:d3-dsv@0.3.2",
      "d3-ease": "npm:d3-ease@0.7.0",
      "d3-force": "npm:d3-force@0.5.0",
      "d3-format": "npm:d3-format@0.5.1",
      "d3-hierarchy": "npm:d3-hierarchy@0.2.2",
      "d3-interpolate": "npm:d3-interpolate@0.7.0",
      "d3-path": "npm:d3-path@0.1.5",
      "d3-polygon": "npm:d3-polygon@0.2.1",
      "d3-quadtree": "npm:d3-quadtree@0.7.2",
      "d3-queue": "npm:d3-queue@2.0.3",
      "d3-random": "npm:d3-random@0.2.1",
      "d3-request": "npm:d3-request@0.4.6",
      "d3-scale": "npm:d3-scale@0.7.0",
      "d3-selection": "npm:d3-selection@0.7.1",
      "d3-shape": "npm:d3-shape@0.6.0",
      "d3-time": "npm:d3-time@0.2.5",
      "d3-time-format": "npm:d3-time-format@0.3.2",
      "d3-timer": "npm:d3-timer@0.4.3",
      "d3-transition": "npm:d3-transition@0.2.8",
      "d3-voronoi": "npm:d3-voronoi@0.3.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:process@0.11.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:rw@1.3.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:xmlhttprequest@1.8.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0"
    }
  }
});
