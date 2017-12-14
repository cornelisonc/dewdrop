webpackJsonp([1],{136:function(t,e,i){"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=i(173),s=i(174),r=i(172),o=function SortFields(){_classCallCheck(this,SortFields);var t=new n.a;new r.a({collection:t}),new s.a({collection:t});t.initializeWithGlobalVariable(),$("#sort-form").on("submit",function(e){$("#sorted-fields").val(JSON.stringify(t.toJSON()))})};e.default=o},138:function(t,e,i){(function(n){var s,r;!function(o){var a="object"==typeof self&&self.self===self&&self||"object"==typeof n&&n.global===n&&n;s=[i(117),i(142),e],void 0!==(r=function(t,e,i){a.Backbone=o(a,i,t,e)}.apply(e,s))&&(t.exports=r)}(function(t,e,i,n){var s=t.Backbone,r=Array.prototype.slice;e.VERSION="1.3.3",e.$=n,e.noConflict=function(){return t.Backbone=s,this},e.emulateHTTP=!1,e.emulateJSON=!1;var o=function(t,e,n){switch(t){case 1:return function(){return i[e](this[n])};case 2:return function(t){return i[e](this[n],t)};case 3:return function(t,s){return i[e](this[n],l(t,this),s)};case 4:return function(t,s,r){return i[e](this[n],l(t,this),s,r)};default:return function(){var t=r.call(arguments);return t.unshift(this[n]),i[e].apply(i,t)}}},a=function(t,e,n){i.each(e,function(e,s){i[s]&&(t.prototype[s]=o(e,s,n))})},l=function(t,e){return i.isFunction(t)?t:i.isObject(t)&&!e._isModel(t)?h(t):i.isString(t)?function(e){return e.get(t)}:t},h=function(t){var e=i.matches(t);return function(t){return e(t.attributes)}},c=e.Events={},u=/\s+/,d=function(t,e,n,s,r){var o,a=0;if(n&&"object"==typeof n){void 0!==s&&"context"in r&&void 0===r.context&&(r.context=s);for(o=i.keys(n);a<o.length;a++)e=d(t,e,o[a],n[o[a]],r)}else if(n&&u.test(n))for(o=n.split(u);a<o.length;a++)e=t(e,o[a],s,r);else e=t(e,n,s,r);return e};c.on=function(t,e,i){return f(this,t,e,i)};var f=function(t,e,i,n,s){if(t._events=d(p,t._events||{},e,i,{context:n,ctx:t,listening:s}),s){(t._listeners||(t._listeners={}))[s.id]=s}return t};c.listenTo=function(t,e,n){if(!t)return this;var s=t._listenId||(t._listenId=i.uniqueId("l")),r=this._listeningTo||(this._listeningTo={}),o=r[s];if(!o){var a=this._listenId||(this._listenId=i.uniqueId("l"));o=r[s]={obj:t,objId:s,id:a,listeningTo:r,count:0}}return f(t,e,n,this,o),this};var p=function(t,e,i,n){if(i){var s=t[e]||(t[e]=[]),r=n.context,o=n.ctx,a=n.listening;a&&a.count++,s.push({callback:i,context:r,ctx:r||o,listening:a})}return t};c.off=function(t,e,i){return this._events?(this._events=d(g,this._events,t,e,{context:i,listeners:this._listeners}),this):this},c.stopListening=function(t,e,n){var s=this._listeningTo;if(!s)return this;for(var r=t?[t._listenId]:i.keys(s),o=0;o<r.length;o++){var a=s[r[o]];if(!a)break;a.obj.off(e,n,this)}return this};var g=function(t,e,n,s){if(t){var r,o=0,a=s.context,l=s.listeners;if(e||n||a){for(var h=e?[e]:i.keys(t);o<h.length;o++){e=h[o];var c=t[e];if(!c)break;for(var u=[],d=0;d<c.length;d++){var f=c[d];n&&n!==f.callback&&n!==f.callback._callback||a&&a!==f.context?u.push(f):(r=f.listening)&&0==--r.count&&(delete l[r.id],delete r.listeningTo[r.objId])}u.length?t[e]=u:delete t[e]}return t}for(var p=i.keys(l);o<p.length;o++)r=l[p[o]],delete l[r.id],delete r.listeningTo[r.objId]}};c.once=function(t,e,n){var s=d(v,{},t,e,i.bind(this.off,this));return"string"==typeof t&&null==n&&(e=void 0),this.on(s,e,n)},c.listenToOnce=function(t,e,n){var s=d(v,{},e,n,i.bind(this.stopListening,this,t));return this.listenTo(t,s)};var v=function(t,e,n,s){if(n){var r=t[e]=i.once(function(){s(e,r),n.apply(this,arguments)});r._callback=n}return t};c.trigger=function(t){if(!this._events)return this;for(var e=Math.max(0,arguments.length-1),i=Array(e),n=0;n<e;n++)i[n]=arguments[n+1];return d(m,this._events,t,void 0,i),this};var m=function(t,e,i,n){if(t){var s=t[e],r=t.all;s&&r&&(r=r.slice()),s&&b(s,n),r&&b(r,[e].concat(n))}return t},b=function(t,e){var i,n=-1,s=t.length,r=e[0],o=e[1],a=e[2];switch(e.length){case 0:for(;++n<s;)(i=t[n]).callback.call(i.ctx);return;case 1:for(;++n<s;)(i=t[n]).callback.call(i.ctx,r);return;case 2:for(;++n<s;)(i=t[n]).callback.call(i.ctx,r,o);return;case 3:for(;++n<s;)(i=t[n]).callback.call(i.ctx,r,o,a);return;default:for(;++n<s;)(i=t[n]).callback.apply(i.ctx,e);return}};c.bind=c.on,c.unbind=c.off,i.extend(e,c);var y=e.Model=function(t,e){var n=t||{};e||(e={}),this.cid=i.uniqueId(this.cidPrefix),this.attributes={},e.collection&&(this.collection=e.collection),e.parse&&(n=this.parse(n,e)||{});var s=i.result(this,"defaults");n=i.defaults(i.extend({},s,n),s),this.set(n,e),this.changed={},this.initialize.apply(this,arguments)};i.extend(y.prototype,c,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return null!=this.get(t)},matches:function(t){return!!i.iteratee(t,this)(this.attributes)},set:function(t,e,n){if(null==t)return this;var s;if("object"==typeof t?(s=t,n=e):(s={})[t]=e,n||(n={}),!this._validate(s,n))return!1;var r=n.unset,o=n.silent,a=[],l=this._changing;this._changing=!0,l||(this._previousAttributes=i.clone(this.attributes),this.changed={});var h=this.attributes,c=this.changed,u=this._previousAttributes;for(var d in s)e=s[d],i.isEqual(h[d],e)||a.push(d),i.isEqual(u[d],e)?delete c[d]:c[d]=e,r?delete h[d]:h[d]=e;if(this.idAttribute in s&&(this.id=this.get(this.idAttribute)),!o){a.length&&(this._pending=n);for(var f=0;f<a.length;f++)this.trigger("change:"+a[f],this,h[a[f]],n)}if(l)return this;if(!o)for(;this._pending;)n=this._pending,this._pending=!1,this.trigger("change",this,n);return this._pending=!1,this._changing=!1,this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:!0}))},clear:function(t){var e={};for(var n in this.attributes)e[n]=void 0;return this.set(e,i.extend({},t,{unset:!0}))},hasChanged:function(t){return null==t?!i.isEmpty(this.changed):i.has(this.changed,t)},changedAttributes:function(t){if(!t)return!!this.hasChanged()&&i.clone(this.changed);var e=this._changing?this._previousAttributes:this.attributes,n={};for(var s in t){var r=t[s];i.isEqual(e[s],r)||(n[s]=r)}return!!i.size(n)&&n},previous:function(t){return null!=t&&this._previousAttributes?this._previousAttributes[t]:null},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=i.extend({parse:!0},t);var e=this,n=t.success;return t.success=function(i){var s=t.parse?e.parse(i,t):i;if(!e.set(s,t))return!1;n&&n.call(t.context,e,i,t),e.trigger("sync",e,i,t)},U(this,t),this.sync("read",this,t)},save:function(t,e,n){var s;null==t||"object"==typeof t?(s=t,n=e):(s={})[t]=e,n=i.extend({validate:!0,parse:!0},n);var r=n.wait;if(s&&!r){if(!this.set(s,n))return!1}else if(!this._validate(s,n))return!1;var o=this,a=n.success,l=this.attributes;n.success=function(t){o.attributes=l;var e=n.parse?o.parse(t,n):t;if(r&&(e=i.extend({},s,e)),e&&!o.set(e,n))return!1;a&&a.call(n.context,o,t,n),o.trigger("sync",o,t,n)},U(this,n),s&&r&&(this.attributes=i.extend({},l,s));var h=this.isNew()?"create":n.patch?"patch":"update";"patch"!==h||n.attrs||(n.attrs=s);var c=this.sync(h,this,n);return this.attributes=l,c},destroy:function(t){t=t?i.clone(t):{};var e=this,n=t.success,s=t.wait,r=function(){e.stopListening(),e.trigger("destroy",e,e.collection,t)};t.success=function(i){s&&r(),n&&n.call(t.context,e,i,t),e.isNew()||e.trigger("sync",e,i,t)};var o=!1;return this.isNew()?i.defer(t.success):(U(this,t),o=this.sync("delete",this,t)),s||r(),o},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||j();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.extend({},t,{validate:!0}))},_validate:function(t,e){if(!e.validate||!this.validate)return!0;t=i.extend({},this.attributes,t);var n=this.validationError=this.validate(t,e)||null;return!n||(this.trigger("invalid",this,n,i.extend(e,{validationError:n})),!1)}}),a(y,{keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1},"attributes");var _=e.Collection=function(t,e){e||(e={}),e.model&&(this.model=e.model),void 0!==e.comparator&&(this.comparator=e.comparator),this._reset(),this.initialize.apply(this,arguments),t&&this.reset(t,i.extend({silent:!0},e))},x={add:!0,remove:!0,merge:!0},w={add:!0,remove:!1},E=function(t,e,i){i=Math.min(Math.max(i,0),t.length);var n,s=Array(t.length-i),r=e.length;for(n=0;n<s.length;n++)s[n]=t[n+i];for(n=0;n<r;n++)t[n+i]=e[n];for(n=0;n<s.length;n++)t[n+r+i]=s[n]};i.extend(_.prototype,c,{model:y,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:!1},e,w))},remove:function(t,e){e=i.extend({},e);var n=!i.isArray(t);t=n?[t]:t.slice();var s=this._removeModels(t,e);return!e.silent&&s.length&&(e.changes={added:[],merged:[],removed:s},this.trigger("update",this,e)),n?s[0]:s},set:function(t,e){if(null!=t){e=i.extend({},x,e),e.parse&&!this._isModel(t)&&(t=this.parse(t,e)||[]);var n=!i.isArray(t);t=n?[t]:t.slice();var s=e.at;null!=s&&(s=+s),s>this.length&&(s=this.length),s<0&&(s+=this.length+1);var r,o,a=[],l=[],h=[],c=[],u={},d=e.add,f=e.merge,p=e.remove,g=!1,v=this.comparator&&null==s&&!1!==e.sort,m=i.isString(this.comparator)?this.comparator:null;for(o=0;o<t.length;o++){r=t[o];var b=this.get(r);if(b){if(f&&r!==b){var y=this._isModel(r)?r.attributes:r;e.parse&&(y=b.parse(y,e)),b.set(y,e),h.push(b),v&&!g&&(g=b.hasChanged(m))}u[b.cid]||(u[b.cid]=!0,a.push(b)),t[o]=b}else d&&(r=t[o]=this._prepareModel(r,e))&&(l.push(r),this._addReference(r,e),u[r.cid]=!0,a.push(r))}if(p){for(o=0;o<this.length;o++)r=this.models[o],u[r.cid]||c.push(r);c.length&&this._removeModels(c,e)}var _=!1,w=!v&&d&&p;if(a.length&&w?(_=this.length!==a.length||i.some(this.models,function(t,e){return t!==a[e]}),this.models.length=0,E(this.models,a,0),this.length=this.models.length):l.length&&(v&&(g=!0),E(this.models,l,null==s?this.length:s),this.length=this.models.length),g&&this.sort({silent:!0}),!e.silent){for(o=0;o<l.length;o++)null!=s&&(e.index=s+o),r=l[o],r.trigger("add",r,this,e);(g||_)&&this.trigger("sort",this,e),(l.length||c.length||h.length)&&(e.changes={added:l,removed:c,merged:h},this.trigger("update",this,e))}return n?t[0]:t}},reset:function(t,e){e=e?i.clone(e):{};for(var n=0;n<this.models.length;n++)this._removeReference(this.models[n],e);return e.previousModels=this.models,this._reset(),t=this.add(t,i.extend({silent:!0},e)),e.silent||this.trigger("reset",this,e),t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return r.apply(this.models,arguments)},get:function(t){if(null!=t)return this._byId[t]||this._byId[this.modelId(t.attributes||t)]||t.cid&&this._byId[t.cid]},has:function(t){return null!=this.get(t)},at:function(t){return t<0&&(t+=this.length),this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,!0)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t||(t={});var n=e.length;return i.isFunction(e)&&(e=i.bind(e,this)),1===n||i.isString(e)?this.models=this.sortBy(e):this.models.sort(e),t.silent||this.trigger("sort",this,t),this},pluck:function(t){return this.map(t+"")},fetch:function(t){t=i.extend({parse:!0},t);var e=t.success,n=this;return t.success=function(i){var s=t.reset?"reset":"set";n[s](i,t),e&&e.call(t.context,n,i,t),n.trigger("sync",n,i,t)},U(this,t),this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};var n=e.wait;if(!(t=this._prepareModel(t,e)))return!1;n||this.add(t,e);var s=this,r=e.success;return e.success=function(t,e,i){n&&s.add(t,i),r&&r.call(i.context,t,e,i)},t.save(null,e),t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t){return t[this.model.prototype.idAttribute||"id"]},_reset:function(){this.length=0,this.models=[],this._byId={}},_prepareModel:function(t,e){if(this._isModel(t))return t.collection||(t.collection=this),t;e=e?i.clone(e):{},e.collection=this;var n=new this.model(t,e);return n.validationError?(this.trigger("invalid",this,n.validationError,e),!1):n},_removeModels:function(t,e){for(var i=[],n=0;n<t.length;n++){var s=this.get(t[n]);if(s){var r=this.indexOf(s);this.models.splice(r,1),this.length--,delete this._byId[s.cid];var o=this.modelId(s.attributes);null!=o&&delete this._byId[o],e.silent||(e.index=r,s.trigger("remove",s,this,e)),i.push(s),this._removeReference(s,e)}}return i},_isModel:function(t){return t instanceof y},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes);null!=i&&(this._byId[i]=t),t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes);null!=i&&delete this._byId[i],this===t.collection&&delete t.collection,t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,n){if(e){if(("add"===t||"remove"===t)&&i!==this)return;if("destroy"===t&&this.remove(e,n),"change"===t){var s=this.modelId(e.previousAttributes()),r=this.modelId(e.attributes);s!==r&&(null!=s&&delete this._byId[s],null!=r&&(this._byId[r]=e))}}this.trigger.apply(this,arguments)}}),a(_,{forEach:3,each:3,map:3,collect:3,reduce:0,foldl:0,inject:0,reduceRight:0,foldr:0,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3,findIndex:3,findLastIndex:3},"models");var k=e.View=function(t){this.cid=i.uniqueId("view"),i.extend(this,i.pick(t,$)),this._ensureElement(),this.initialize.apply(this,arguments)},I=/^(\S+)\s*(.*)$/,$=["model","collection","el","id","attributes","className","tagName","events"];i.extend(k.prototype,c,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){return this._removeElement(),this.stopListening(),this},_removeElement:function(){this.$el.remove()},setElement:function(t){return this.undelegateEvents(),this._setElement(t),this.delegateEvents(),this},_setElement:function(t){this.$el=t instanceof e.$?t:e.$(t),this.el=this.$el[0]},delegateEvents:function(t){if(t||(t=i.result(this,"events")),!t)return this;this.undelegateEvents();for(var e in t){var n=t[e];if(i.isFunction(n)||(n=this[n]),n){var s=e.match(I);this.delegate(s[1],s[2],i.bind(n,this))}}return this},delegate:function(t,e,i){return this.$el.on(t+".delegateEvents"+this.cid,e,i),this},undelegateEvents:function(){return this.$el&&this.$el.off(".delegateEvents"+this.cid),this},undelegate:function(t,e,i){return this.$el.off(t+".delegateEvents"+this.cid,e,i),this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(this.el)this.setElement(i.result(this,"el"));else{var t=i.extend({},i.result(this,"attributes"));this.id&&(t.id=i.result(this,"id")),this.className&&(t.class=i.result(this,"className")),this.setElement(this._createElement(i.result(this,"tagName"))),this._setAttributes(t)}},_setAttributes:function(t){this.$el.attr(t)}}),e.sync=function(t,n,s){var r=S[t];i.defaults(s||(s={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var o={type:r,dataType:"json"};if(s.url||(o.url=i.result(n,"url")||j()),null!=s.data||!n||"create"!==t&&"update"!==t&&"patch"!==t||(o.contentType="application/json",o.data=JSON.stringify(s.attrs||n.toJSON(s))),s.emulateJSON&&(o.contentType="application/x-www-form-urlencoded",o.data=o.data?{model:o.data}:{}),s.emulateHTTP&&("PUT"===r||"DELETE"===r||"PATCH"===r)){o.type="POST",s.emulateJSON&&(o.data._method=r);var a=s.beforeSend;s.beforeSend=function(t){if(t.setRequestHeader("X-HTTP-Method-Override",r),a)return a.apply(this,arguments)}}"GET"===o.type||s.emulateJSON||(o.processData=!1);var l=s.error;s.error=function(t,e,i){s.textStatus=e,s.errorThrown=i,l&&l.call(s.context,t,e,i)};var h=s.xhr=e.ajax(i.extend(o,s));return n.trigger("request",n,h,s),h};var S={create:"POST",update:"PUT",patch:"PATCH",delete:"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var T=e.Router=function(t){t||(t={}),t.routes&&(this.routes=t.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},C=/\((.*?)\)/g,M=/(\(\?)?:\w+/g,P=/\*\w+/g,H=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend(T.prototype,c,{initialize:function(){},route:function(t,n,s){i.isRegExp(t)||(t=this._routeToRegExp(t)),i.isFunction(n)&&(s=n,n=""),s||(s=this[n]);var r=this;return e.history.route(t,function(i){var o=r._extractParameters(t,i);!1!==r.execute(s,o,n)&&(r.trigger.apply(r,["route:"+n].concat(o)),r.trigger("route",n,o),e.history.trigger("route",r,n,o))}),this},execute:function(t,e,i){t&&t.apply(this,e)},navigate:function(t,i){return e.history.navigate(t,i),this},_bindRoutes:function(){if(this.routes){this.routes=i.result(this,"routes");for(var t,e=i.keys(this.routes);null!=(t=e.pop());)this.route(t,this.routes[t])}},_routeToRegExp:function(t){return t=t.replace(H,"\\$&").replace(C,"(?:$1)?").replace(M,function(t,e){return e?t:"([^/?]+)"}).replace(P,"([^?]*?)"),new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var n=t.exec(e).slice(1);return i.map(n,function(t,e){return e===n.length-1?t||null:t?decodeURIComponent(t):null})}});var N=e.History=function(){this.handlers=[],this.checkUrl=i.bind(this.checkUrl,this),"undefined"!=typeof window&&(this.location=window.location,this.history=window.history)},O=/^[#\/]|\s+$/g,A=/^\/+|\/+$/g,F=/#.*$/;N.started=!1,i.extend(N.prototype,c,{interval:50,atRoot:function(){return this.location.pathname.replace(/[^\/]$/,"$&/")===this.root&&!this.getSearch()},matchRoot:function(){return this.decodeFragment(this.location.pathname).slice(0,this.root.length-1)+"/"===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return"/"===t.charAt(0)?t.slice(1):t},getFragment:function(t){return null==t&&(t=this._usePushState||!this._wantsHashChange?this.getPath():this.getHash()),t.replace(O,"")},start:function(t){if(N.started)throw new Error("Backbone.history has already been started");if(N.started=!0,this.options=i.extend({root:"/"},this.options,t),this.root=this.options.root,this._wantsHashChange=!1!==this.options.hashChange,this._hasHashChange="onhashchange"in window&&(void 0===document.documentMode||document.documentMode>7),this._useHashChange=this._wantsHashChange&&this._hasHashChange,this._wantsPushState=!!this.options.pushState,this._hasPushState=!(!this.history||!this.history.pushState),this._usePushState=this._wantsPushState&&this._hasPushState,this.fragment=this.getFragment(),this.root=("/"+this.root+"/").replace(A,"/"),this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";return this.location.replace(e+"#"+this.getPath()),!0}this._hasPushState&&this.atRoot()&&this.navigate(this.getHash(),{replace:!0})}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe"),this.iframe.src="javascript:0",this.iframe.style.display="none",this.iframe.tabIndex=-1;var n=document.body,s=n.insertBefore(this.iframe,n.firstChild).contentWindow;s.document.open(),s.document.close(),s.location.hash="#"+this.fragment}var r=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState?r("popstate",this.checkUrl,!1):this._useHashChange&&!this.iframe?r("hashchange",this.checkUrl,!1):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};this._usePushState?t("popstate",this.checkUrl,!1):this._useHashChange&&!this.iframe&&t("hashchange",this.checkUrl,!1),this.iframe&&(document.body.removeChild(this.iframe),this.iframe=null),this._checkUrlInterval&&clearInterval(this._checkUrlInterval),N.started=!1},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe&&(e=this.getHash(this.iframe.contentWindow)),e===this.fragment)return!1;this.iframe&&this.navigate(e),this.loadUrl()},loadUrl:function(t){return!!this.matchRoot()&&(t=this.fragment=this.getFragment(t),i.some(this.handlers,function(e){if(e.route.test(t))return e.callback(t),!0}))},navigate:function(t,e){if(!N.started)return!1;e&&!0!==e||(e={trigger:!!e}),t=this.getFragment(t||"");var i=this.root;""!==t&&"?"!==t.charAt(0)||(i=i.slice(0,-1)||"/");var n=i+t;if(t=this.decodeFragment(t.replace(F,"")),this.fragment!==t){if(this.fragment=t,this._usePushState)this.history[e.replace?"replaceState":"pushState"]({},document.title,n);else{if(!this._wantsHashChange)return this.location.assign(n);if(this._updateHash(this.location,t,e.replace),this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var s=this.iframe.contentWindow;e.replace||(s.document.open(),s.document.close()),this._updateHash(s.location,t,e.replace)}}return e.trigger?this.loadUrl(t):void 0}},_updateHash:function(t,e,i){if(i){var n=t.href.replace(/(javascript:|#).*$/,"");t.replace(n+"#"+e)}else t.hash="#"+e}}),e.history=new N;var R=function(t,e){var n,s=this;return n=t&&i.has(t,"constructor")?t.constructor:function(){return s.apply(this,arguments)},i.extend(n,s,e),n.prototype=i.create(s.prototype,t),n.prototype.constructor=n,n.__super__=s.prototype,n};y.extend=_.extend=T.extend=k.extend=N.extend=R;var j=function(){throw new Error('A "url" property or function must be specified')},U=function(t,e){var i=e.error;e.error=function(n){i&&i.call(e.context,t,n,e),t.trigger("error",t,n,e)}};return e})}).call(e,i(143))},143:function(t,e){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(i=window)}t.exports=i},157:function(t,e){t.exports='<div class="form-inline">\n    <input placeholder="Enter group title..." type="text" class="form-control" />\n    <button class="btn btn-success btn-add-group"><span class="glyphicon glyphicon-ok"></span></button>\n</div>\n'},158:function(t,e){t.exports='<li data-field-id="<%- id %>" class="list-group-item">\n    <span class="field-label"><%- label %></span>\n    <span class="text-muted glyphicon glyphicon-align-justify pull-right"></span>\n</li>\n'},159:function(t,e){t.exports='<li class="list-group-item list-group-item-title">\n    <span class="badge">\n        <%- fields.length %>\n        <%- (1 === fields.length ? \'Field\' : \'Fields\') %>\n    </span>\n    <h4>\n        <%- title %>\n    </h4>\n    <% if (caption) { %>\n    <div class="help-block"><%- caption %></div>\n    <% } %>\n    <% if (allowEditing) { %>\n    <div class="title-input form-inline">\n        <input type="text" class="title-input form-control" value="<%- title %>" />\n        <button type="button" class="btn btn-save-title btn-success btn-sm"><span class="glyphicon glyphicon-ok"></span></button>\n        <button type="button" class="btn btn-cancel btn-link btn-sm">Cancel</button>\n    </div>\n    <div class="title-buttons">\n        <a href="#" class="btn-remove pull-right btn btn-sm btn-default">\n            <span class="glyphicon glyphicon-remove"></span>\n            Delete Group\n        </a>\n        <a href="#" class="btn-edit pull-right btn btn-sm btn-success">\n            <span class="glyphicon glyphicon-pencil"></span>\n            Edit Title\n        </a>\n    </div>\n    <% } %>\n</li>\n'},172:function(t,e,i){"use strict";var n=i(157),s=i.n(n),r=i(117),o=i.n(r),a=i(138),l=i.n(a),h=l.a.View.extend({el:"#add-group-wrapper",events:{"click #add-group":"preventSubmission","show.bs.popover #add-group":"focusInput","keydown .popover-content input:first":"addGroupOnEnter","click .popover-content .btn":"addGroup"},groups:null,initialize:function(t,e){this.$el.find("#add-group").popover({html:!0,placement:"top",content:s.a})},setGroups:function(t){return this.groups=t,this},preventSubmission:function(t){t.preventDefault()},focusInput:function(t){setTimeout(o.a.bind(function(){this.$el.find(".popover-content input").focus()},this),1)},addGroupOnEnter:function(t){if(13===t.keyCode)return this.addGroup(t)},addGroup:function(t){t.preventDefault(),$("#add-group").popover("hide"),this.collection.add({title:this.$el.find(".popover-content input").val()})}});e.a=h},173:function(t,e,i){"use strict";var n=i(117),s=i.n(n),r=i(138),o=i.n(r),a=o.a.Model.extend({defaults:{allowEditing:!0,animate:!0,title:"",caption:"",sortIndex:null,fields:[]}}),l=o.a.Collection.extend({model:a,comparator:"sortIndex",toJSON:function(){return this.map(function(t){return s.a.pick(t.toJSON(this),["title","fields"])})},initializeWithGlobalVariable:function(){if(void 0===window.initialFieldGroupsConfig)throw"Could not find initialFieldGroupsConfig variable in global scope";s.a.each(window.initialFieldGroupsConfig,function(t,e){t.allowEditing=!0,t.animate=!1,t.sortIndex=e,0===e&&(t.allowEditing=!1),this.add(t)},this)}});e.a=l},174:function(t,e,i){"use strict";var n=i(175),s=i(117),r=i.n(s),o=i(138),a=i.n(o),l=a.a.View.extend({el:"#groups-wrapper",events:{sortstop:"updateSortIndexes"},initialize:function(){this.collection.on("add remove",this.render,this)},render:function(){var t=1===this.collection.length;return this.$el.empty(),this.collection.each(function(e,i){var s=new n.a({model:e,hideTitle:t,ungroupedModel:this.collection.first()});this.$el.append(s.render().el)},this),this.$el.sortable({items:"ul:not(.list-group:first)"}).disableSelection(),this},updateSortIndexes:function(){this.$el.find(".list-group").each(r.a.bind(function(t,e){this.collection.get($(e).data("model-id")).set("sortIndex",t),this.collection.sort()},this))}});e.a=l},175:function(t,e,i){"use strict";var n=i(159),s=i.n(n),r=i(158),o=i.n(r),a=i(117),l=i.n(a),h=i(138),c=i.n(h),u=l.a.template(s.a),d=l.a.template(o.a),f=c.a.View.extend({template:u,tagName:"ul",className:"list-group",hideTitle:!1,events:{sortstop:"updateModelFields",sortremove:"updateModelFields",sortreceive:"updateModelFields","click .btn-remove":"delete","click .btn-edit":"showTitleInput","click .btn-save-title":"saveTitle","click .btn-cancel":"cancelTitleInput","keydown .title-input":"saveTitleOnEnter"},initialize:function(t,e){this.model.on("change:title",this.render,this),this.model.on("change:fields",this.updateBadge,this),this.hideTitle=t.hideTitle,this.ungroupedModel=t.ungroupedModel},render:function(){return this.$el.html(this.template(this.model.toJSON())),this.$el.find(".title-input").hide(),this.model.get("animate")&&!this.model.get("fields").length&&this.$el.velocity("transition.flipYIn"),this.hideTitle&&this.$el.find(".list-group-item-title").remove(),this.$el.data("model-id",this.model.cid),this.$el.sortable({items:"li:not(.list-group-item-title)",connectWith:".list-group"}).disableSelection(),l.a.each(this.model.get("fields"),function(t,e){this.$el.append(d(t))},this),this},delete:function(t){t.preventDefault(),this.ungroupedModel.set("fields",this.ungroupedModel.get("fields").concat(this.model.get("fields"))),this.model.destroy()},showTitleInput:function(t){t.preventDefault(),this.$el.find("h4").hide(),this.$el.find(".title-input").show(),this.$el.find(".title-input").focus()},saveTitleOnEnter:function(t){13===t.keyCode&&this.saveTitle(t)},saveTitle:function(t){t.preventDefault(),this.model.set("title",this.$el.find(".title-input input").val()),this.cancelTitleInput(t)},cancelTitleInput:function(t){t.preventDefault(),this.$el.find(".title-input").hide(),this.$el.find("h4").show()},updateBadge:function(){var t=this.model.get("fields").length,e=1===t?"":"s";this.$el.find(".badge").text(t+" Field"+e)},updateModelFields:function(t,e){var i=[];this.$el.find("li:not(.list-group-item-title)").each(function(t,e){i.push({id:$(e).data("field-id"),label:$(e).find(".field-label").text()})}),this.model.set("fields",i)}});e.a=f}});
//# sourceMappingURL=1.js.map