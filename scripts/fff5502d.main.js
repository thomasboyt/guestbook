(function(){window.Guestbook=Ember.Application.create(),marked.setOptions({sanitize:!0})})(),function(){Guestbook.store=DS.Store.create({revision:12,adapter:DS.Firebase.Adapter.create({dbName:"guestbook"})})}(),function(){Guestbook.Entry=DS.Firebase.Model.extend({author:DS.attr("string"),body:DS.attr("string")})}(),function(){Guestbook.EntriesController=Ember.ArrayController.extend({loaded:function(){var e;return(e=this.get("content").objectAt(0))?!!e.get("author"):!1}.property("content.@each"),save:function(e){Guestbook.Entry.createRecord(e),Guestbook.store.commit()}})}(),function(){Guestbook.EntriesView=Ember.View.extend({save:function(){var e=this.$("#author").val(),t=this.$("#body").val();e&&t?(this.get("controller").save({author:e,body:t}),this.$("form").hide(),this.$("#success").show()):this.$(".control-group").addClass("error")}})}(),function(){Ember.Handlebars.registerBoundHelper("markdown",function(e){return new Handlebars.SafeString(marked(e))})}(),function(){Guestbook.Router.map(function(){})}(),function(){Guestbook.IndexRoute=Ember.Route.extend({renderTemplate:function(e){e=this.controllerFor("entries"),e.set("content",Guestbook.Entry.find()),this.render("entries",{controller:e})}})}(),Ember.TEMPLATES.application=Ember.Handlebars.template(function(e,t,r,n,i){this.compilerInfo=[2,">= 1.0.0-rc.3"],r=r||Ember.Handlebars.helpers,i=i||{};var o,a="",s=this.escapeExpression;return i.buffer.push('<div id="container">\n  <h2>Welcome to Ember.js on Charcoal</h2>\n\n  '),o={},i.buffer.push(s(r._triageMustache.call(t,"outlet",{hash:{},contexts:[t],types:["ID"],hashTypes:o,data:i}))),i.buffer.push("\n</div>\n"),a}),Ember.TEMPLATES.entries=Ember.Handlebars.template(function(e,t,r,n,i){function o(e,t){var n,i,o="";return t.buffer.push("\n  <div class='thank-yous'>\n    "),i={},n=r.each.call(e,"content",{hash:{},inverse:p.noop,fn:p.program(2,a,t),contexts:[e],types:["ID"],hashTypes:i,data:t}),(n||0===n)&&t.buffer.push(n),t.buffer.push('\n  </div>\n  \n  <div class="bottom well">\n    <h2>Submit Your Thank-You</h2>\n    <form class="form-horizontal">\n      <div class="control-group">\n        <label class="control-label" for="author">Your name</label>\n        <div class="controls">\n          <input type="text" id="author">\n        </div>\n      </div>\n      <div class="control-group">\n        <label class="control-label" for="body">Your thank-you<br/>(you can use markdown!)</label>\n        <div class="controls">\n          <textarea id="body"></textarea>\n        </div>\n      </div>\n      <div class="control-group">\n        <div class="controls">\n          <button class="btn btn-primary" '),i={target:"STRING"},t.buffer.push(d(r.action.call(e,"save",{hash:{target:"view"},contexts:[e],types:["STRING"],hashTypes:i,data:t}))),t.buffer.push('>Submit</button>\n        </div>\n      </div>\n    </form>\n\n    <div id="success" style="display:none">\n      <p>Your entry has been posted! If you made a mistake, tell Thomas and he&apos;ll <del>begrudgingly</del> happily take care of it.</p>\n    </div>\n  </div>\n'),o}function a(e,t){var n,i,o="";return t.buffer.push("\n      "),i={},n=r.unless.call(e,"hide",{hash:{},inverse:p.noop,fn:p.program(3,s,t),contexts:[e],types:["ID"],hashTypes:i,data:t}),(n||0===n)&&t.buffer.push(n),t.buffer.push("\n    "),o}function s(e,t){var n,i,o,a="";return t.buffer.push("\n        <div class='thank-you'>\n          <h3>"),i={},t.buffer.push(d(r._triageMustache.call(e,"author",{hash:{},contexts:[e],types:["ID"],hashTypes:i,data:t}))),t.buffer.push("</h3>\n          <div class='body'>\n            "),i={},o={hash:{},contexts:[e],types:["ID"],hashTypes:i,data:t},t.buffer.push(d((n=r.markdown,n?n.call(e,"body",o):f.call(e,"markdown","body",o)))),t.buffer.push("\n          </div>\n        </div>\n      "),a}function c(e,t){t.buffer.push("\n  Loading...\n")}this.compilerInfo=[2,">= 1.0.0-rc.3"],r=r||Ember.Handlebars.helpers,i=i||{};var u,l,h="",d=this.escapeExpression,f=r.helperMissing,p=this;return l={},u=r["if"].call(t,"loaded",{hash:{},inverse:p.program(5,c,i),fn:p.program(1,o,i),contexts:[t],types:["ID"],hashTypes:l,data:i}),(u||0===u)&&i.buffer.push(u),i.buffer.push("\n"),h});