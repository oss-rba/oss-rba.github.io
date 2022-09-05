(()=>{var Vo={8094:()=>{+function(v){"use strict";var k=".dropdown-backdrop",s='[data-toggle="dropdown"]',c=function(l){v(l).on("click.bs.dropdown",this.toggle)};c.VERSION="3.4.1";function a(l){var r=l.attr("data-target");r||(r=l.attr("href"),r=r&&/#[A-Za-z]/.test(r)&&r.replace(/.*(?=#[^\s]*$)/,""));var d=r!=="#"?v(document).find(r):null;return d&&d.length?d:l.parent()}function t(l){l&&l.which===3||(v(k).remove(),v(s).each(function(){var r=v(this),d=a(r),h={relatedTarget:this};!d.hasClass("open")||l&&l.type=="click"&&/input|textarea/i.test(l.target.tagName)&&v.contains(d[0],l.target)||(d.trigger(l=v.Event("hide.bs.dropdown",h)),!l.isDefaultPrevented()&&(r.attr("aria-expanded","false"),d.removeClass("open").trigger(v.Event("hidden.bs.dropdown",h))))}))}c.prototype.toggle=function(l){var r=v(this);if(!r.is(".disabled, :disabled")){var d=a(r),h=d.hasClass("open");if(t(),!h){"ontouchstart"in document.documentElement&&!d.closest(".navbar-nav").length&&v(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(v(this)).on("click",t);var i={relatedTarget:this};if(d.trigger(l=v.Event("show.bs.dropdown",i)),l.isDefaultPrevented())return;r.trigger("focus").attr("aria-expanded","true"),d.toggleClass("open").trigger(v.Event("shown.bs.dropdown",i))}return!1}},c.prototype.keydown=function(l){if(!(!/(38|40|27|32)/.test(l.which)||/input|textarea/i.test(l.target.tagName))){var r=v(this);if(l.preventDefault(),l.stopPropagation(),!r.is(".disabled, :disabled")){var d=a(r),h=d.hasClass("open");if(!h&&l.which!=27||h&&l.which==27)return l.which==27&&d.find(s).trigger("focus"),r.trigger("click");var i=" li:not(.disabled):visible a",m=d.find(".dropdown-menu"+i);if(!!m.length){var g=m.index(l.target);l.which==38&&g>0&&g--,l.which==40&&g<m.length-1&&g++,~g||(g=0),m.eq(g).trigger("focus")}}}};function p(l){return this.each(function(){var r=v(this),d=r.data("bs.dropdown");d||r.data("bs.dropdown",d=new c(this)),typeof l=="string"&&d[l].call(r)})}var u=v.fn.dropdown;v.fn.dropdown=p,v.fn.dropdown.Constructor=c,v.fn.dropdown.noConflict=function(){return v.fn.dropdown=u,this},v(document).on("click.bs.dropdown.data-api",t).on("click.bs.dropdown.data-api",".dropdown form",function(l){l.stopPropagation()}).on("click.bs.dropdown.data-api",s,c.prototype.toggle).on("keydown.bs.dropdown.data-api",s,c.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",c.prototype.keydown)}(jQuery)},3151:()=>{+function(v){"use strict";var k=function(a,t){this.init("popover",a,t)};if(!v.fn.tooltip)throw new Error("Popover requires tooltip.js");k.VERSION="3.4.1",k.DEFAULTS=v.extend({},v.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),k.prototype=v.extend({},v.fn.tooltip.Constructor.prototype),k.prototype.constructor=k,k.prototype.getDefaults=function(){return k.DEFAULTS},k.prototype.setContent=function(){var a=this.tip(),t=this.getTitle(),p=this.getContent();if(this.options.html){var u=typeof p;this.options.sanitize&&(t=this.sanitizeHtml(t),u==="string"&&(p=this.sanitizeHtml(p))),a.find(".popover-title").html(t),a.find(".popover-content").children().detach().end()[u==="string"?"html":"append"](p)}else a.find(".popover-title").text(t),a.find(".popover-content").children().detach().end().text(p);a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},k.prototype.hasContent=function(){return this.getTitle()||this.getContent()},k.prototype.getContent=function(){var a=this.$element,t=this.options;return a.attr("data-content")||(typeof t.content=="function"?t.content.call(a[0]):t.content)},k.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};function s(a){return this.each(function(){var t=v(this),p=t.data("bs.popover"),u=typeof a=="object"&&a;!p&&/destroy|hide/.test(a)||(p||t.data("bs.popover",p=new k(this,u)),typeof a=="string"&&p[a]())})}var c=v.fn.popover;v.fn.popover=s,v.fn.popover.Constructor=k,v.fn.popover.noConflict=function(){return v.fn.popover=c,this}}(jQuery)},5007:()=>{+function(v){"use strict";function k(a,t){this.$body=v(document.body),this.$scrollElement=v(a).is(document.body)?v(window):v(a),this.options=v.extend({},k.DEFAULTS,t),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",v.proxy(this.process,this)),this.refresh(),this.process()}k.VERSION="3.4.1",k.DEFAULTS={offset:10},k.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},k.prototype.refresh=function(){var a=this,t="offset",p=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),v.isWindow(this.$scrollElement[0])||(t="position",p=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var u=v(this),l=u.data("target")||u.attr("href"),r=/^#./.test(l)&&v(l);return r&&r.length&&r.is(":visible")&&[[r[t]().top+p,l]]||null}).sort(function(u,l){return u[0]-l[0]}).each(function(){a.offsets.push(this[0]),a.targets.push(this[1])})},k.prototype.process=function(){var a=this.$scrollElement.scrollTop()+this.options.offset,t=this.getScrollHeight(),p=this.options.offset+t-this.$scrollElement.height(),u=this.offsets,l=this.targets,r=this.activeTarget,d;if(this.scrollHeight!=t&&this.refresh(),a>=p)return r!=(d=l[l.length-1])&&this.activate(d);if(r&&a<u[0])return this.activeTarget=null,this.clear();for(d=u.length;d--;)r!=l[d]&&a>=u[d]&&(u[d+1]===void 0||a<u[d+1])&&this.activate(l[d])},k.prototype.activate=function(a){this.activeTarget=a,this.clear();var t=this.selector+'[data-target="'+a+'"],'+this.selector+'[href="'+a+'"]',p=v(t).parents("li").addClass("active");p.parent(".dropdown-menu").length&&(p=p.closest("li.dropdown").addClass("active")),p.trigger("activate.bs.scrollspy")},k.prototype.clear=function(){v(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};function s(a){return this.each(function(){var t=v(this),p=t.data("bs.scrollspy"),u=typeof a=="object"&&a;p||t.data("bs.scrollspy",p=new k(this,u)),typeof a=="string"&&p[a]()})}var c=v.fn.scrollspy;v.fn.scrollspy=s,v.fn.scrollspy.Constructor=k,v.fn.scrollspy.noConflict=function(){return v.fn.scrollspy=c,this},v(window).on("load.bs.scrollspy.data-api",function(){v('[data-spy="scroll"]').each(function(){var a=v(this);s.call(a,a.data())})})}(jQuery)},5127:()=>{+function(v){"use strict";var k=function(t){this.element=v(t)};k.VERSION="3.4.1",k.TRANSITION_DURATION=150,k.prototype.show=function(){var t=this.element,p=t.closest("ul:not(.dropdown-menu)"),u=t.data("target");if(u||(u=t.attr("href"),u=u&&u.replace(/.*(?=#[^\s]*$)/,"")),!t.parent("li").hasClass("active")){var l=p.find(".active:last a"),r=v.Event("hide.bs.tab",{relatedTarget:t[0]}),d=v.Event("show.bs.tab",{relatedTarget:l[0]});if(l.trigger(r),t.trigger(d),!(d.isDefaultPrevented()||r.isDefaultPrevented())){var h=v(document).find(u);this.activate(t.closest("li"),p),this.activate(h,h.parent(),function(){l.trigger({type:"hidden.bs.tab",relatedTarget:t[0]}),t.trigger({type:"shown.bs.tab",relatedTarget:l[0]})})}}},k.prototype.activate=function(t,p,u){var l=p.find("> .active"),r=u&&v.support.transition&&(l.length&&l.hasClass("fade")||!!p.find("> .fade").length);function d(){l.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),r?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu").length&&t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),u&&u()}l.length&&r?l.one("bsTransitionEnd",d).emulateTransitionEnd(k.TRANSITION_DURATION):d(),l.removeClass("in")};function s(t){return this.each(function(){var p=v(this),u=p.data("bs.tab");u||p.data("bs.tab",u=new k(this)),typeof t=="string"&&u[t]()})}var c=v.fn.tab;v.fn.tab=s,v.fn.tab.Constructor=k,v.fn.tab.noConflict=function(){return v.fn.tab=c,this};var a=function(t){t.preventDefault(),s.call(v(this),"show")};v(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',a).on("click.bs.tab.data-api",'[data-toggle="pill"]',a)}(jQuery)},6679:()=>{+function(v){"use strict";var k=["sanitize","whiteList","sanitizeFn"],s=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],c=/^aria-[\w-]*$/i,a={"*":["class","dir","id","lang","role",c],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},t=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,p=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function u(i,m){var g=i.nodeName.toLowerCase();if(v.inArray(g,m)!==-1)return v.inArray(g,s)!==-1?Boolean(i.nodeValue.match(t)||i.nodeValue.match(p)):!0;for(var f=v(m).filter(function(I,S){return S instanceof RegExp}),y=0,_=f.length;y<_;y++)if(g.match(f[y]))return!0;return!1}function l(i,m,g){if(i.length===0)return i;if(g&&typeof g=="function")return g(i);if(!document.implementation||!document.implementation.createHTMLDocument)return i;var f=document.implementation.createHTMLDocument("sanitization");f.body.innerHTML=i;for(var y=v.map(m,function(L,w){return w}),_=v(f.body).find("*"),I=0,S=_.length;I<S;I++){var N=_[I],A=N.nodeName.toLowerCase();if(v.inArray(A,y)===-1){N.parentNode.removeChild(N);continue}for(var b=v.map(N.attributes,function(L){return L}),B=[].concat(m["*"]||[],m[A]||[]),E=0,D=b.length;E<D;E++)u(b[E],B)||N.removeAttribute(b[E].nodeName)}return f.body.innerHTML}var r=function(i,m){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",i,m)};r.VERSION="3.4.1",r.TRANSITION_DURATION=150,r.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0},sanitize:!0,sanitizeFn:null,whiteList:a},r.prototype.init=function(i,m,g){if(this.enabled=!0,this.type=i,this.$element=v(m),this.options=this.getOptions(g),this.$viewport=this.options.viewport&&v(document).find(v.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var f=this.options.trigger.split(" "),y=f.length;y--;){var _=f[y];if(_=="click")this.$element.on("click."+this.type,this.options.selector,v.proxy(this.toggle,this));else if(_!="manual"){var I=_=="hover"?"mouseenter":"focusin",S=_=="hover"?"mouseleave":"focusout";this.$element.on(I+"."+this.type,this.options.selector,v.proxy(this.enter,this)),this.$element.on(S+"."+this.type,this.options.selector,v.proxy(this.leave,this))}}this.options.selector?this._options=v.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},r.prototype.getDefaults=function(){return r.DEFAULTS},r.prototype.getOptions=function(i){var m=this.$element.data();for(var g in m)m.hasOwnProperty(g)&&v.inArray(g,k)!==-1&&delete m[g];return i=v.extend({},this.getDefaults(),m,i),i.delay&&typeof i.delay=="number"&&(i.delay={show:i.delay,hide:i.delay}),i.sanitize&&(i.template=l(i.template,i.whiteList,i.sanitizeFn)),i},r.prototype.getDelegateOptions=function(){var i={},m=this.getDefaults();return this._options&&v.each(this._options,function(g,f){m[g]!=f&&(i[g]=f)}),i},r.prototype.enter=function(i){var m=i instanceof this.constructor?i:v(i.currentTarget).data("bs."+this.type);if(m||(m=new this.constructor(i.currentTarget,this.getDelegateOptions()),v(i.currentTarget).data("bs."+this.type,m)),i instanceof v.Event&&(m.inState[i.type=="focusin"?"focus":"hover"]=!0),m.tip().hasClass("in")||m.hoverState=="in"){m.hoverState="in";return}if(clearTimeout(m.timeout),m.hoverState="in",!m.options.delay||!m.options.delay.show)return m.show();m.timeout=setTimeout(function(){m.hoverState=="in"&&m.show()},m.options.delay.show)},r.prototype.isInStateTrue=function(){for(var i in this.inState)if(this.inState[i])return!0;return!1},r.prototype.leave=function(i){var m=i instanceof this.constructor?i:v(i.currentTarget).data("bs."+this.type);if(m||(m=new this.constructor(i.currentTarget,this.getDelegateOptions()),v(i.currentTarget).data("bs."+this.type,m)),i instanceof v.Event&&(m.inState[i.type=="focusout"?"focus":"hover"]=!1),!m.isInStateTrue()){if(clearTimeout(m.timeout),m.hoverState="out",!m.options.delay||!m.options.delay.hide)return m.hide();m.timeout=setTimeout(function(){m.hoverState=="out"&&m.hide()},m.options.delay.hide)}},r.prototype.show=function(){var i=v.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(i);var m=v.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(i.isDefaultPrevented()||!m)return;var g=this,f=this.tip(),y=this.getUID(this.type);this.setContent(),f.attr("id",y),this.$element.attr("aria-describedby",y),this.options.animation&&f.addClass("fade");var _=typeof this.options.placement=="function"?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,I=/\s?auto?\s?/i,S=I.test(_);S&&(_=_.replace(I,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(_).data("bs."+this.type,this),this.options.container?f.appendTo(v(document).find(this.options.container)):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var N=this.getPosition(),A=f[0].offsetWidth,b=f[0].offsetHeight;if(S){var B=_,E=this.getPosition(this.$viewport);_=_=="bottom"&&N.bottom+b>E.bottom?"top":_=="top"&&N.top-b<E.top?"bottom":_=="right"&&N.right+A>E.width?"left":_=="left"&&N.left-A<E.left?"right":_,f.removeClass(B).addClass(_)}var D=this.getCalculatedOffset(_,N,A,b);this.applyPlacement(D,_);var L=function(){var w=g.hoverState;g.$element.trigger("shown.bs."+g.type),g.hoverState=null,w=="out"&&g.leave(g)};v.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",L).emulateTransitionEnd(r.TRANSITION_DURATION):L()}},r.prototype.applyPlacement=function(i,m){var g=this.tip(),f=g[0].offsetWidth,y=g[0].offsetHeight,_=parseInt(g.css("margin-top"),10),I=parseInt(g.css("margin-left"),10);isNaN(_)&&(_=0),isNaN(I)&&(I=0),i.top+=_,i.left+=I,v.offset.setOffset(g[0],v.extend({using:function(D){g.css({top:Math.round(D.top),left:Math.round(D.left)})}},i),0),g.addClass("in");var S=g[0].offsetWidth,N=g[0].offsetHeight;m=="top"&&N!=y&&(i.top=i.top+y-N);var A=this.getViewportAdjustedDelta(m,i,S,N);A.left?i.left+=A.left:i.top+=A.top;var b=/top|bottom/.test(m),B=b?A.left*2-f+S:A.top*2-y+N,E=b?"offsetWidth":"offsetHeight";g.offset(i),this.replaceArrow(B,g[0][E],b)},r.prototype.replaceArrow=function(i,m,g){this.arrow().css(g?"left":"top",50*(1-i/m)+"%").css(g?"top":"left","")},r.prototype.setContent=function(){var i=this.tip(),m=this.getTitle();this.options.html?(this.options.sanitize&&(m=l(m,this.options.whiteList,this.options.sanitizeFn)),i.find(".tooltip-inner").html(m)):i.find(".tooltip-inner").text(m),i.removeClass("fade in top bottom left right")},r.prototype.hide=function(i){var m=this,g=v(this.$tip),f=v.Event("hide.bs."+this.type);function y(){m.hoverState!="in"&&g.detach(),m.$element&&m.$element.removeAttr("aria-describedby").trigger("hidden.bs."+m.type),i&&i()}if(this.$element.trigger(f),!f.isDefaultPrevented())return g.removeClass("in"),v.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",y).emulateTransitionEnd(r.TRANSITION_DURATION):y(),this.hoverState=null,this},r.prototype.fixTitle=function(){var i=this.$element;(i.attr("title")||typeof i.attr("data-original-title")!="string")&&i.attr("data-original-title",i.attr("title")||"").attr("title","")},r.prototype.hasContent=function(){return this.getTitle()},r.prototype.getPosition=function(i){i=i||this.$element;var m=i[0],g=m.tagName=="BODY",f=m.getBoundingClientRect();f.width==null&&(f=v.extend({},f,{width:f.right-f.left,height:f.bottom-f.top}));var y=window.SVGElement&&m instanceof window.SVGElement,_=g?{top:0,left:0}:y?null:i.offset(),I={scroll:g?document.documentElement.scrollTop||document.body.scrollTop:i.scrollTop()},S=g?{width:v(window).width(),height:v(window).height()}:null;return v.extend({},f,I,S,_)},r.prototype.getCalculatedOffset=function(i,m,g,f){return i=="bottom"?{top:m.top+m.height,left:m.left+m.width/2-g/2}:i=="top"?{top:m.top-f,left:m.left+m.width/2-g/2}:i=="left"?{top:m.top+m.height/2-f/2,left:m.left-g}:{top:m.top+m.height/2-f/2,left:m.left+m.width}},r.prototype.getViewportAdjustedDelta=function(i,m,g,f){var y={top:0,left:0};if(!this.$viewport)return y;var _=this.options.viewport&&this.options.viewport.padding||0,I=this.getPosition(this.$viewport);if(/right|left/.test(i)){var S=m.top-_-I.scroll,N=m.top+_-I.scroll+f;S<I.top?y.top=I.top-S:N>I.top+I.height&&(y.top=I.top+I.height-N)}else{var A=m.left-_,b=m.left+_+g;A<I.left?y.left=I.left-A:b>I.right&&(y.left=I.left+I.width-b)}return y},r.prototype.getTitle=function(){var i,m=this.$element,g=this.options;return i=m.attr("data-original-title")||(typeof g.title=="function"?g.title.call(m[0]):g.title),i},r.prototype.getUID=function(i){do i+=~~(Math.random()*1e6);while(document.getElementById(i));return i},r.prototype.tip=function(){if(!this.$tip&&(this.$tip=v(this.options.template),this.$tip.length!=1))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},r.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},r.prototype.enable=function(){this.enabled=!0},r.prototype.disable=function(){this.enabled=!1},r.prototype.toggleEnabled=function(){this.enabled=!this.enabled},r.prototype.toggle=function(i){var m=this;i&&(m=v(i.currentTarget).data("bs."+this.type),m||(m=new this.constructor(i.currentTarget,this.getDelegateOptions()),v(i.currentTarget).data("bs."+this.type,m))),i?(m.inState.click=!m.inState.click,m.isInStateTrue()?m.enter(m):m.leave(m)):m.tip().hasClass("in")?m.leave(m):m.enter(m)},r.prototype.destroy=function(){var i=this;clearTimeout(this.timeout),this.hide(function(){i.$element.off("."+i.type).removeData("bs."+i.type),i.$tip&&i.$tip.detach(),i.$tip=null,i.$arrow=null,i.$viewport=null,i.$element=null})},r.prototype.sanitizeHtml=function(i){return l(i,this.options.whiteList,this.options.sanitizeFn)};function d(i){return this.each(function(){var m=v(this),g=m.data("bs.tooltip"),f=typeof i=="object"&&i;!g&&/destroy|hide/.test(i)||(g||m.data("bs.tooltip",g=new r(this,f)),typeof i=="string"&&g[i]())})}var h=v.fn.tooltip;v.fn.tooltip=d,v.fn.tooltip.Constructor=r,v.fn.tooltip.noConflict=function(){return v.fn.tooltip=h,this}}(jQuery)},9648:v=>{var k=function(){this.Diff_Timeout=1,this.Diff_EditCost=4,this.Match_Threshold=.5,this.Match_Distance=1e3,this.Patch_DeleteThreshold=.5,this.Patch_Margin=4,this.Match_MaxBits=32},s=-1,c=1,a=0;k.Diff=function(t,p){return[t,p]},k.prototype.diff_main=function(t,p,u,l){typeof l=="undefined"&&(this.Diff_Timeout<=0?l=Number.MAX_VALUE:l=new Date().getTime()+this.Diff_Timeout*1e3);var r=l;if(t==null||p==null)throw new Error("Null input. (diff_main)");if(t==p)return t?[new k.Diff(a,t)]:[];typeof u=="undefined"&&(u=!0);var d=u,h=this.diff_commonPrefix(t,p),i=t.substring(0,h);t=t.substring(h),p=p.substring(h),h=this.diff_commonSuffix(t,p);var m=t.substring(t.length-h);t=t.substring(0,t.length-h),p=p.substring(0,p.length-h);var g=this.diff_compute_(t,p,d,r);return i&&g.unshift(new k.Diff(a,i)),m&&g.push(new k.Diff(a,m)),this.diff_cleanupMerge(g),g},k.prototype.diff_compute_=function(t,p,u,l){var r;if(!t)return[new k.Diff(c,p)];if(!p)return[new k.Diff(s,t)];var d=t.length>p.length?t:p,h=t.length>p.length?p:t,i=d.indexOf(h);if(i!=-1)return r=[new k.Diff(c,d.substring(0,i)),new k.Diff(a,h),new k.Diff(c,d.substring(i+h.length))],t.length>p.length&&(r[0][0]=r[2][0]=s),r;if(h.length==1)return[new k.Diff(s,t),new k.Diff(c,p)];var m=this.diff_halfMatch_(t,p);if(m){var g=m[0],f=m[1],y=m[2],_=m[3],I=m[4],S=this.diff_main(g,y,u,l),N=this.diff_main(f,_,u,l);return S.concat([new k.Diff(a,I)],N)}return u&&t.length>100&&p.length>100?this.diff_lineMode_(t,p,l):this.diff_bisect_(t,p,l)},k.prototype.diff_lineMode_=function(t,p,u){var l=this.diff_linesToChars_(t,p);t=l.chars1,p=l.chars2;var r=l.lineArray,d=this.diff_main(t,p,!1,u);this.diff_charsToLines_(d,r),this.diff_cleanupSemantic(d),d.push(new k.Diff(a,""));for(var h=0,i=0,m=0,g="",f="";h<d.length;){switch(d[h][0]){case c:m++,f+=d[h][1];break;case s:i++,g+=d[h][1];break;case a:if(i>=1&&m>=1){d.splice(h-i-m,i+m),h=h-i-m;for(var y=this.diff_main(g,f,!1,u),_=y.length-1;_>=0;_--)d.splice(h,0,y[_]);h=h+y.length}m=0,i=0,g="",f="";break}h++}return d.pop(),d},k.prototype.diff_bisect_=function(t,p,u){for(var l=t.length,r=p.length,d=Math.ceil((l+r)/2),h=d,i=2*d,m=new Array(i),g=new Array(i),f=0;f<i;f++)m[f]=-1,g[f]=-1;m[h+1]=0,g[h+1]=0;for(var y=l-r,_=y%2!=0,I=0,S=0,N=0,A=0,b=0;b<d&&!(new Date().getTime()>u);b++){for(var B=-b+I;B<=b-S;B+=2){var E=h+B,D;B==-b||B!=b&&m[E-1]<m[E+1]?D=m[E+1]:D=m[E-1]+1;for(var L=D-B;D<l&&L<r&&t.charAt(D)==p.charAt(L);)D++,L++;if(m[E]=D,D>l)S+=2;else if(L>r)I+=2;else if(_){var w=h+y-B;if(w>=0&&w<i&&g[w]!=-1){var R=l-g[w];if(D>=R)return this.diff_bisectSplit_(t,p,D,L,u)}}}for(var O=-b+N;O<=b-A;O+=2){var w=h+O,R;O==-b||O!=b&&g[w-1]<g[w+1]?R=g[w+1]:R=g[w-1]+1;for(var C=R-O;R<l&&C<r&&t.charAt(l-R-1)==p.charAt(r-C-1);)R++,C++;if(g[w]=R,R>l)A+=2;else if(C>r)N+=2;else if(!_){var E=h+y-O;if(E>=0&&E<i&&m[E]!=-1){var D=m[E],L=h+D-E;if(R=l-R,D>=R)return this.diff_bisectSplit_(t,p,D,L,u)}}}}return[new k.Diff(s,t),new k.Diff(c,p)]},k.prototype.diff_bisectSplit_=function(t,p,u,l,r){var d=t.substring(0,u),h=p.substring(0,l),i=t.substring(u),m=p.substring(l),g=this.diff_main(d,h,!1,r),f=this.diff_main(i,m,!1,r);return g.concat(f)},k.prototype.diff_linesToChars_=function(t,p){var u=[],l={};u[0]="";function r(m){for(var g="",f=0,y=-1,_=u.length;y<m.length-1;){y=m.indexOf(`
`,f),y==-1&&(y=m.length-1);var I=m.substring(f,y+1);(l.hasOwnProperty?l.hasOwnProperty(I):l[I]!==void 0)?g+=String.fromCharCode(l[I]):(_==d&&(I=m.substring(f),y=m.length),g+=String.fromCharCode(_),l[I]=_,u[_++]=I),f=y+1}return g}var d=4e4,h=r(t);d=65535;var i=r(p);return{chars1:h,chars2:i,lineArray:u}},k.prototype.diff_charsToLines_=function(t,p){for(var u=0;u<t.length;u++){for(var l=t[u][1],r=[],d=0;d<l.length;d++)r[d]=p[l.charCodeAt(d)];t[u][1]=r.join("")}},k.prototype.diff_commonPrefix=function(t,p){if(!t||!p||t.charAt(0)!=p.charAt(0))return 0;for(var u=0,l=Math.min(t.length,p.length),r=l,d=0;u<r;)t.substring(d,r)==p.substring(d,r)?(u=r,d=u):l=r,r=Math.floor((l-u)/2+u);return r},k.prototype.diff_commonSuffix=function(t,p){if(!t||!p||t.charAt(t.length-1)!=p.charAt(p.length-1))return 0;for(var u=0,l=Math.min(t.length,p.length),r=l,d=0;u<r;)t.substring(t.length-r,t.length-d)==p.substring(p.length-r,p.length-d)?(u=r,d=u):l=r,r=Math.floor((l-u)/2+u);return r},k.prototype.diff_commonOverlap_=function(t,p){var u=t.length,l=p.length;if(u==0||l==0)return 0;u>l?t=t.substring(u-l):u<l&&(p=p.substring(0,u));var r=Math.min(u,l);if(t==p)return r;for(var d=0,h=1;;){var i=t.substring(r-h),m=p.indexOf(i);if(m==-1)return d;h+=m,(m==0||t.substring(r-h)==p.substring(0,h))&&(d=h,h++)}},k.prototype.diff_halfMatch_=function(t,p){if(this.Diff_Timeout<=0)return null;var u=t.length>p.length?t:p,l=t.length>p.length?p:t;if(u.length<4||l.length*2<u.length)return null;var r=this;function d(S,N,A){for(var b=S.substring(A,A+Math.floor(S.length/4)),B=-1,E="",D,L,w,R;(B=N.indexOf(b,B+1))!=-1;){var O=r.diff_commonPrefix(S.substring(A),N.substring(B)),C=r.diff_commonSuffix(S.substring(0,A),N.substring(0,B));E.length<C+O&&(E=N.substring(B-C,B)+N.substring(B,B+O),D=S.substring(0,A-C),L=S.substring(A+O),w=N.substring(0,B-C),R=N.substring(B+O))}return E.length*2>=S.length?[D,L,w,R,E]:null}var h=d(u,l,Math.ceil(u.length/4)),i=d(u,l,Math.ceil(u.length/2)),m;if(!h&&!i)return null;i?h?m=h[4].length>i[4].length?h:i:m=i:m=h;var g,f,y,_;t.length>p.length?(g=m[0],f=m[1],y=m[2],_=m[3]):(y=m[0],_=m[1],g=m[2],f=m[3]);var I=m[4];return[g,f,y,_,I]},k.prototype.diff_cleanupSemantic=function(t){for(var p=!1,u=[],l=0,r=null,d=0,h=0,i=0,m=0,g=0;d<t.length;)t[d][0]==a?(u[l++]=d,h=m,i=g,m=0,g=0,r=t[d][1]):(t[d][0]==c?m+=t[d][1].length:g+=t[d][1].length,r&&r.length<=Math.max(h,i)&&r.length<=Math.max(m,g)&&(t.splice(u[l-1],0,new k.Diff(s,r)),t[u[l-1]+1][0]=c,l--,l--,d=l>0?u[l-1]:-1,h=0,i=0,m=0,g=0,r=null,p=!0)),d++;for(p&&this.diff_cleanupMerge(t),this.diff_cleanupSemanticLossless(t),d=1;d<t.length;){if(t[d-1][0]==s&&t[d][0]==c){var f=t[d-1][1],y=t[d][1],_=this.diff_commonOverlap_(f,y),I=this.diff_commonOverlap_(y,f);_>=I?(_>=f.length/2||_>=y.length/2)&&(t.splice(d,0,new k.Diff(a,y.substring(0,_))),t[d-1][1]=f.substring(0,f.length-_),t[d+1][1]=y.substring(_),d++):(I>=f.length/2||I>=y.length/2)&&(t.splice(d,0,new k.Diff(a,f.substring(0,I))),t[d-1][0]=c,t[d-1][1]=y.substring(0,y.length-I),t[d+1][0]=s,t[d+1][1]=f.substring(I),d++),d++}d++}},k.prototype.diff_cleanupSemanticLossless=function(t){function p(I,S){if(!I||!S)return 6;var N=I.charAt(I.length-1),A=S.charAt(0),b=N.match(k.nonAlphaNumericRegex_),B=A.match(k.nonAlphaNumericRegex_),E=b&&N.match(k.whitespaceRegex_),D=B&&A.match(k.whitespaceRegex_),L=E&&N.match(k.linebreakRegex_),w=D&&A.match(k.linebreakRegex_),R=L&&I.match(k.blanklineEndRegex_),O=w&&S.match(k.blanklineStartRegex_);return R||O?5:L||w?4:b&&!E&&D?3:E||D?2:b||B?1:0}for(var u=1;u<t.length-1;){if(t[u-1][0]==a&&t[u+1][0]==a){var l=t[u-1][1],r=t[u][1],d=t[u+1][1],h=this.diff_commonSuffix(l,r);if(h){var i=r.substring(r.length-h);l=l.substring(0,l.length-h),r=i+r.substring(0,r.length-h),d=i+d}for(var m=l,g=r,f=d,y=p(l,r)+p(r,d);r.charAt(0)===d.charAt(0);){l+=r.charAt(0),r=r.substring(1)+d.charAt(0),d=d.substring(1);var _=p(l,r)+p(r,d);_>=y&&(y=_,m=l,g=r,f=d)}t[u-1][1]!=m&&(m?t[u-1][1]=m:(t.splice(u-1,1),u--),t[u][1]=g,f?t[u+1][1]=f:(t.splice(u+1,1),u--))}u++}},k.nonAlphaNumericRegex_=/[^a-zA-Z0-9]/,k.whitespaceRegex_=/\s/,k.linebreakRegex_=/[\r\n]/,k.blanklineEndRegex_=/\n\r?\n$/,k.blanklineStartRegex_=/^\r?\n\r?\n/,k.prototype.diff_cleanupEfficiency=function(t){for(var p=!1,u=[],l=0,r=null,d=0,h=!1,i=!1,m=!1,g=!1;d<t.length;)t[d][0]==a?(t[d][1].length<this.Diff_EditCost&&(m||g)?(u[l++]=d,h=m,i=g,r=t[d][1]):(l=0,r=null),m=g=!1):(t[d][0]==s?g=!0:m=!0,r&&(h&&i&&m&&g||r.length<this.Diff_EditCost/2&&h+i+m+g==3)&&(t.splice(u[l-1],0,new k.Diff(s,r)),t[u[l-1]+1][0]=c,l--,r=null,h&&i?(m=g=!0,l=0):(l--,d=l>0?u[l-1]:-1,m=g=!1),p=!0)),d++;p&&this.diff_cleanupMerge(t)},k.prototype.diff_cleanupMerge=function(t){t.push(new k.Diff(a,""));for(var p=0,u=0,l=0,r="",d="",h;p<t.length;)switch(t[p][0]){case c:l++,d+=t[p][1],p++;break;case s:u++,r+=t[p][1],p++;break;case a:u+l>1?(u!==0&&l!==0&&(h=this.diff_commonPrefix(d,r),h!==0&&(p-u-l>0&&t[p-u-l-1][0]==a?t[p-u-l-1][1]+=d.substring(0,h):(t.splice(0,0,new k.Diff(a,d.substring(0,h))),p++),d=d.substring(h),r=r.substring(h)),h=this.diff_commonSuffix(d,r),h!==0&&(t[p][1]=d.substring(d.length-h)+t[p][1],d=d.substring(0,d.length-h),r=r.substring(0,r.length-h))),p-=u+l,t.splice(p,u+l),r.length&&(t.splice(p,0,new k.Diff(s,r)),p++),d.length&&(t.splice(p,0,new k.Diff(c,d)),p++),p++):p!==0&&t[p-1][0]==a?(t[p-1][1]+=t[p][1],t.splice(p,1)):p++,l=0,u=0,r="",d="";break}t[t.length-1][1]===""&&t.pop();var i=!1;for(p=1;p<t.length-1;)t[p-1][0]==a&&t[p+1][0]==a&&(t[p][1].substring(t[p][1].length-t[p-1][1].length)==t[p-1][1]?(t[p][1]=t[p-1][1]+t[p][1].substring(0,t[p][1].length-t[p-1][1].length),t[p+1][1]=t[p-1][1]+t[p+1][1],t.splice(p-1,1),i=!0):t[p][1].substring(0,t[p+1][1].length)==t[p+1][1]&&(t[p-1][1]+=t[p+1][1],t[p][1]=t[p][1].substring(t[p+1][1].length)+t[p+1][1],t.splice(p+1,1),i=!0)),p++;i&&this.diff_cleanupMerge(t)},k.prototype.diff_xIndex=function(t,p){var u=0,l=0,r=0,d=0,h;for(h=0;h<t.length&&(t[h][0]!==c&&(u+=t[h][1].length),t[h][0]!==s&&(l+=t[h][1].length),!(u>p));h++)r=u,d=l;return t.length!=h&&t[h][0]===s?d:d+(p-r)},k.prototype.diff_prettyHtml=function(t){for(var p=[],u=/&/g,l=/</g,r=/>/g,d=/\n/g,h=0;h<t.length;h++){var i=t[h][0],m=t[h][1],g=m.replace(u,"&amp;").replace(l,"&lt;").replace(r,"&gt;").replace(d,"&para;<br>");switch(i){case c:p[h]='<ins style="background:#e6ffe6;">'+g+"</ins>";break;case s:p[h]='<del style="background:#ffe6e6;">'+g+"</del>";break;case a:p[h]="<span>"+g+"</span>";break}}return p.join("")},k.prototype.diff_text1=function(t){for(var p=[],u=0;u<t.length;u++)t[u][0]!==c&&(p[u]=t[u][1]);return p.join("")},k.prototype.diff_text2=function(t){for(var p=[],u=0;u<t.length;u++)t[u][0]!==s&&(p[u]=t[u][1]);return p.join("")},k.prototype.diff_levenshtein=function(t){for(var p=0,u=0,l=0,r=0;r<t.length;r++){var d=t[r][0],h=t[r][1];switch(d){case c:u+=h.length;break;case s:l+=h.length;break;case a:p+=Math.max(u,l),u=0,l=0;break}}return p+=Math.max(u,l),p},k.prototype.diff_toDelta=function(t){for(var p=[],u=0;u<t.length;u++)switch(t[u][0]){case c:p[u]="+"+encodeURI(t[u][1]);break;case s:p[u]="-"+t[u][1].length;break;case a:p[u]="="+t[u][1].length;break}return p.join("	").replace(/%20/g," ")},k.prototype.diff_fromDelta=function(t,p){for(var u=[],l=0,r=0,d=p.split(/\t/g),h=0;h<d.length;h++){var i=d[h].substring(1);switch(d[h].charAt(0)){case"+":try{u[l++]=new k.Diff(c,decodeURI(i))}catch(f){throw new Error("Illegal escape in diff_fromDelta: "+i)}break;case"-":case"=":var m=parseInt(i,10);if(isNaN(m)||m<0)throw new Error("Invalid number in diff_fromDelta: "+i);var g=t.substring(r,r+=m);d[h].charAt(0)=="="?u[l++]=new k.Diff(a,g):u[l++]=new k.Diff(s,g);break;default:if(d[h])throw new Error("Invalid diff operation in diff_fromDelta: "+d[h])}}if(r!=t.length)throw new Error("Delta length ("+r+") does not equal source text length ("+t.length+").");return u},k.prototype.match_main=function(t,p,u){if(t==null||p==null||u==null)throw new Error("Null input. (match_main)");return u=Math.max(0,Math.min(u,t.length)),t==p?0:t.length?t.substring(u,u+p.length)==p?u:this.match_bitap_(t,p,u):-1},k.prototype.match_bitap_=function(t,p,u){if(p.length>this.Match_MaxBits)throw new Error("Pattern too long for this browser.");var l=this.match_alphabet_(p),r=this;function d(D,L){var w=D/p.length,R=Math.abs(u-L);return r.Match_Distance?w+R/r.Match_Distance:R?1:w}var h=this.Match_Threshold,i=t.indexOf(p,u);i!=-1&&(h=Math.min(d(0,i),h),i=t.lastIndexOf(p,u+p.length),i!=-1&&(h=Math.min(d(0,i),h)));var m=1<<p.length-1;i=-1;for(var g,f,y=p.length+t.length,_,I=0;I<p.length;I++){for(g=0,f=y;g<f;)d(I,u+f)<=h?g=f:y=f,f=Math.floor((y-g)/2+g);y=f;var S=Math.max(1,u-f+1),N=Math.min(u+f,t.length)+p.length,A=Array(N+2);A[N+1]=(1<<I)-1;for(var b=N;b>=S;b--){var B=l[t.charAt(b-1)];if(I===0?A[b]=(A[b+1]<<1|1)&B:A[b]=(A[b+1]<<1|1)&B|((_[b+1]|_[b])<<1|1)|_[b+1],A[b]&m){var E=d(I,b-1);if(E<=h)if(h=E,i=b-1,i>u)S=Math.max(1,2*u-i);else break}}if(d(I+1,u)>h)break;_=A}return i},k.prototype.match_alphabet_=function(t){for(var p={},u=0;u<t.length;u++)p[t.charAt(u)]=0;for(var u=0;u<t.length;u++)p[t.charAt(u)]|=1<<t.length-u-1;return p},k.prototype.patch_addContext_=function(t,p){if(p.length!=0){if(t.start2===null)throw Error("patch not initialized");for(var u=p.substring(t.start2,t.start2+t.length1),l=0;p.indexOf(u)!=p.lastIndexOf(u)&&u.length<this.Match_MaxBits-this.Patch_Margin-this.Patch_Margin;)l+=this.Patch_Margin,u=p.substring(t.start2-l,t.start2+t.length1+l);l+=this.Patch_Margin;var r=p.substring(t.start2-l,t.start2);r&&t.diffs.unshift(new k.Diff(a,r));var d=p.substring(t.start2+t.length1,t.start2+t.length1+l);d&&t.diffs.push(new k.Diff(a,d)),t.start1-=r.length,t.start2-=r.length,t.length1+=r.length+d.length,t.length2+=r.length+d.length}},k.prototype.patch_make=function(t,p,u){var l,r;if(typeof t=="string"&&typeof p=="string"&&typeof u=="undefined")l=t,r=this.diff_main(l,p,!0),r.length>2&&(this.diff_cleanupSemantic(r),this.diff_cleanupEfficiency(r));else if(t&&typeof t=="object"&&typeof p=="undefined"&&typeof u=="undefined")r=t,l=this.diff_text1(r);else if(typeof t=="string"&&p&&typeof p=="object"&&typeof u=="undefined")l=t,r=p;else if(typeof t=="string"&&typeof p=="string"&&u&&typeof u=="object")l=t,r=u;else throw new Error("Unknown call format to patch_make.");if(r.length===0)return[];for(var d=[],h=new k.patch_obj,i=0,m=0,g=0,f=l,y=l,_=0;_<r.length;_++){var I=r[_][0],S=r[_][1];switch(!i&&I!==a&&(h.start1=m,h.start2=g),I){case c:h.diffs[i++]=r[_],h.length2+=S.length,y=y.substring(0,g)+S+y.substring(g);break;case s:h.length1+=S.length,h.diffs[i++]=r[_],y=y.substring(0,g)+y.substring(g+S.length);break;case a:S.length<=2*this.Patch_Margin&&i&&r.length!=_+1?(h.diffs[i++]=r[_],h.length1+=S.length,h.length2+=S.length):S.length>=2*this.Patch_Margin&&i&&(this.patch_addContext_(h,f),d.push(h),h=new k.patch_obj,i=0,f=y,m=g);break}I!==c&&(m+=S.length),I!==s&&(g+=S.length)}return i&&(this.patch_addContext_(h,f),d.push(h)),d},k.prototype.patch_deepCopy=function(t){for(var p=[],u=0;u<t.length;u++){var l=t[u],r=new k.patch_obj;r.diffs=[];for(var d=0;d<l.diffs.length;d++)r.diffs[d]=new k.Diff(l.diffs[d][0],l.diffs[d][1]);r.start1=l.start1,r.start2=l.start2,r.length1=l.length1,r.length2=l.length2,p[u]=r}return p},k.prototype.patch_apply=function(t,p){if(t.length==0)return[p,[]];t=this.patch_deepCopy(t);var u=this.patch_addPadding(t);p=u+p+u,this.patch_splitMax(t);for(var l=0,r=[],d=0;d<t.length;d++){var h=t[d].start2+l,i=this.diff_text1(t[d].diffs),m,g=-1;if(i.length>this.Match_MaxBits?(m=this.match_main(p,i.substring(0,this.Match_MaxBits),h),m!=-1&&(g=this.match_main(p,i.substring(i.length-this.Match_MaxBits),h+i.length-this.Match_MaxBits),(g==-1||m>=g)&&(m=-1))):m=this.match_main(p,i,h),m==-1)r[d]=!1,l-=t[d].length2-t[d].length1;else{r[d]=!0,l=m-h;var f;if(g==-1?f=p.substring(m,m+i.length):f=p.substring(m,g+this.Match_MaxBits),i==f)p=p.substring(0,m)+this.diff_text2(t[d].diffs)+p.substring(m+i.length);else{var y=this.diff_main(i,f,!1);if(i.length>this.Match_MaxBits&&this.diff_levenshtein(y)/i.length>this.Patch_DeleteThreshold)r[d]=!1;else{this.diff_cleanupSemanticLossless(y);for(var _=0,I,S=0;S<t[d].diffs.length;S++){var N=t[d].diffs[S];N[0]!==a&&(I=this.diff_xIndex(y,_)),N[0]===c?p=p.substring(0,m+I)+N[1]+p.substring(m+I):N[0]===s&&(p=p.substring(0,m+I)+p.substring(m+this.diff_xIndex(y,_+N[1].length))),N[0]!==s&&(_+=N[1].length)}}}}}return p=p.substring(u.length,p.length-u.length),[p,r]},k.prototype.patch_addPadding=function(t){for(var p=this.Patch_Margin,u="",l=1;l<=p;l++)u+=String.fromCharCode(l);for(var l=0;l<t.length;l++)t[l].start1+=p,t[l].start2+=p;var r=t[0],d=r.diffs;if(d.length==0||d[0][0]!=a)d.unshift(new k.Diff(a,u)),r.start1-=p,r.start2-=p,r.length1+=p,r.length2+=p;else if(p>d[0][1].length){var h=p-d[0][1].length;d[0][1]=u.substring(d[0][1].length)+d[0][1],r.start1-=h,r.start2-=h,r.length1+=h,r.length2+=h}if(r=t[t.length-1],d=r.diffs,d.length==0||d[d.length-1][0]!=a)d.push(new k.Diff(a,u)),r.length1+=p,r.length2+=p;else if(p>d[d.length-1][1].length){var h=p-d[d.length-1][1].length;d[d.length-1][1]+=u.substring(0,h),r.length1+=h,r.length2+=h}return u},k.prototype.patch_splitMax=function(t){for(var p=this.Match_MaxBits,u=0;u<t.length;u++)if(!(t[u].length1<=p)){var l=t[u];t.splice(u--,1);for(var r=l.start1,d=l.start2,h="";l.diffs.length!==0;){var i=new k.patch_obj,m=!0;for(i.start1=r-h.length,i.start2=d-h.length,h!==""&&(i.length1=i.length2=h.length,i.diffs.push(new k.Diff(a,h)));l.diffs.length!==0&&i.length1<p-this.Patch_Margin;){var g=l.diffs[0][0],f=l.diffs[0][1];g===c?(i.length2+=f.length,d+=f.length,i.diffs.push(l.diffs.shift()),m=!1):g===s&&i.diffs.length==1&&i.diffs[0][0]==a&&f.length>2*p?(i.length1+=f.length,r+=f.length,m=!1,i.diffs.push(new k.Diff(g,f)),l.diffs.shift()):(f=f.substring(0,p-i.length1-this.Patch_Margin),i.length1+=f.length,r+=f.length,g===a?(i.length2+=f.length,d+=f.length):m=!1,i.diffs.push(new k.Diff(g,f)),f==l.diffs[0][1]?l.diffs.shift():l.diffs[0][1]=l.diffs[0][1].substring(f.length))}h=this.diff_text2(i.diffs),h=h.substring(h.length-this.Patch_Margin);var y=this.diff_text1(l.diffs).substring(0,this.Patch_Margin);y!==""&&(i.length1+=y.length,i.length2+=y.length,i.diffs.length!==0&&i.diffs[i.diffs.length-1][0]===a?i.diffs[i.diffs.length-1][1]+=y:i.diffs.push(new k.Diff(a,y))),m||t.splice(++u,0,i)}}},k.prototype.patch_toText=function(t){for(var p=[],u=0;u<t.length;u++)p[u]=t[u];return p.join("")},k.prototype.patch_fromText=function(t){var p=[];if(!t)return p;for(var u=t.split(`
`),l=0,r=/^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;l<u.length;){var d=u[l].match(r);if(!d)throw new Error("Invalid patch string: "+u[l]);var h=new k.patch_obj;for(p.push(h),h.start1=parseInt(d[1],10),d[2]===""?(h.start1--,h.length1=1):d[2]=="0"?h.length1=0:(h.start1--,h.length1=parseInt(d[2],10)),h.start2=parseInt(d[3],10),d[4]===""?(h.start2--,h.length2=1):d[4]=="0"?h.length2=0:(h.start2--,h.length2=parseInt(d[4],10)),l++;l<u.length;){var i=u[l].charAt(0);try{var m=decodeURI(u[l].substring(1))}catch(g){throw new Error("Illegal escape in patch_fromText: "+m)}if(i=="-")h.diffs.push(new k.Diff(s,m));else if(i=="+")h.diffs.push(new k.Diff(c,m));else if(i==" ")h.diffs.push(new k.Diff(a,m));else{if(i=="@")break;if(i!=="")throw new Error('Invalid patch mode "'+i+'" in: '+m)}l++}}return p},k.patch_obj=function(){this.diffs=[],this.start1=null,this.start2=null,this.length1=0,this.length2=0},k.patch_obj.prototype.toString=function(){var t,p;this.length1===0?t=this.start1+",0":this.length1==1?t=this.start1+1:t=this.start1+1+","+this.length1,this.length2===0?p=this.start2+",0":this.length2==1?p=this.start2+1:p=this.start2+1+","+this.length2;for(var u=["@@ -"+t+" +"+p+` @@
`],l,r=0;r<this.diffs.length;r++){switch(this.diffs[r][0]){case c:l="+";break;case s:l="-";break;case a:l=" ";break}u[r+1]=l+encodeURI(this.diffs[r][1])+`
`}return u.join("").replace(/%20/g," ")},v.exports=k,v.exports.diff_match_patch=k,v.exports.DIFF_DELETE=s,v.exports.DIFF_INSERT=c,v.exports.DIFF_EQUAL=a},6211:function(v){/**!

 @license
 handlebars v4.7.7

Copyright (C) 2011-2019 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/(function(k,s){v.exports=s()})(this,function(){return function(k){function s(a){if(c[a])return c[a].exports;var t=c[a]={exports:{},id:a,loaded:!1};return k[a].call(t.exports,t,t.exports,s),t.loaded=!0,t.exports}var c={};return s.m=k,s.c=c,s.p="",s(0)}([function(k,s,c){"use strict";function a(){var N=I();return N.compile=function(A,b){return h.compile(A,b,N)},N.precompile=function(A,b){return h.precompile(A,b,N)},N.AST=r.default,N.Compiler=h.Compiler,N.JavaScriptCompiler=m.default,N.Parser=d.parser,N.parse=d.parse,N.parseWithoutProcessing=d.parseWithoutProcessing,N}var t=c(1).default;s.__esModule=!0;var p=c(2),u=t(p),l=c(45),r=t(l),d=c(46),h=c(51),i=c(52),m=t(i),g=c(49),f=t(g),y=c(44),_=t(y),I=u.default.create,S=a();S.create=a,_.default(S),S.Visitor=f.default,S.default=S,s.default=S,k.exports=s.default},function(k,s){"use strict";s.default=function(c){return c&&c.__esModule?c:{default:c}},s.__esModule=!0},function(k,s,c){"use strict";function a(){var N=new l.HandlebarsEnvironment;return g.extend(N,l),N.SafeString=d.default,N.Exception=i.default,N.Utils=g,N.escapeExpression=g.escapeExpression,N.VM=y,N.template=function(A){return y.template(A,N)},N}var t=c(3).default,p=c(1).default;s.__esModule=!0;var u=c(4),l=t(u),r=c(37),d=p(r),h=c(6),i=p(h),m=c(5),g=t(m),f=c(38),y=t(f),_=c(44),I=p(_),S=a();S.create=a,I.default(S),S.default=S,s.default=S,k.exports=s.default},function(k,s){"use strict";s.default=function(c){if(c&&c.__esModule)return c;var a={};if(c!=null)for(var t in c)Object.prototype.hasOwnProperty.call(c,t)&&(a[t]=c[t]);return a.default=c,a},s.__esModule=!0},function(k,s,c){"use strict";function a(N,A,b){this.helpers=N||{},this.partials=A||{},this.decorators=b||{},r.registerDefaultHelpers(this),d.registerDefaultDecorators(this)}var t=c(1).default;s.__esModule=!0,s.HandlebarsEnvironment=a;var p=c(5),u=c(6),l=t(u),r=c(10),d=c(30),h=c(32),i=t(h),m=c(33),g="4.7.7";s.VERSION=g;var f=8;s.COMPILER_REVISION=f;var y=7;s.LAST_COMPATIBLE_COMPILER_REVISION=y;var _={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};s.REVISION_CHANGES=_;var I="[object Object]";a.prototype={constructor:a,logger:i.default,log:i.default.log,registerHelper:function(N,A){if(p.toString.call(N)===I){if(A)throw new l.default("Arg not supported with multiple helpers");p.extend(this.helpers,N)}else this.helpers[N]=A},unregisterHelper:function(N){delete this.helpers[N]},registerPartial:function(N,A){if(p.toString.call(N)===I)p.extend(this.partials,N);else{if(typeof A=="undefined")throw new l.default('Attempting to register a partial called "'+N+'" as undefined');this.partials[N]=A}},unregisterPartial:function(N){delete this.partials[N]},registerDecorator:function(N,A){if(p.toString.call(N)===I){if(A)throw new l.default("Arg not supported with multiple decorators");p.extend(this.decorators,N)}else this.decorators[N]=A},unregisterDecorator:function(N){delete this.decorators[N]},resetLoggedPropertyAccesses:function(){m.resetLoggedProperties()}};var S=i.default.log;s.log=S,s.createFrame=p.createFrame,s.logger=i.default},function(k,s){"use strict";function c(_){return h[_]}function a(_){for(var I=1;I<arguments.length;I++)for(var S in arguments[I])Object.prototype.hasOwnProperty.call(arguments[I],S)&&(_[S]=arguments[I][S]);return _}function t(_,I){for(var S=0,N=_.length;S<N;S++)if(_[S]===I)return S;return-1}function p(_){if(typeof _!="string"){if(_&&_.toHTML)return _.toHTML();if(_==null)return"";if(!_)return _+"";_=""+_}return m.test(_)?_.replace(i,c):_}function u(_){return!_&&_!==0||!(!y(_)||_.length!==0)}function l(_){var I=a({},_);return I._parent=_,I}function r(_,I){return _.path=I,_}function d(_,I){return(_?_+".":"")+I}s.__esModule=!0,s.extend=a,s.indexOf=t,s.escapeExpression=p,s.isEmpty=u,s.createFrame=l,s.blockParams=r,s.appendContextPath=d;var h={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},i=/[&<>"'`=]/g,m=/[&<>"'`=]/,g=Object.prototype.toString;s.toString=g;var f=function(_){return typeof _=="function"};f(/x/)&&(s.isFunction=f=function(_){return typeof _=="function"&&g.call(_)==="[object Function]"}),s.isFunction=f;var y=Array.isArray||function(_){return!(!_||typeof _!="object")&&g.call(_)==="[object Array]"};s.isArray=y},function(k,s,c){"use strict";function a(u,l){var r=l&&l.loc,d=void 0,h=void 0,i=void 0,m=void 0;r&&(d=r.start.line,h=r.end.line,i=r.start.column,m=r.end.column,u+=" - "+d+":"+i);for(var g=Error.prototype.constructor.call(this,u),f=0;f<p.length;f++)this[p[f]]=g[p[f]];Error.captureStackTrace&&Error.captureStackTrace(this,a);try{r&&(this.lineNumber=d,this.endLineNumber=h,t?(Object.defineProperty(this,"column",{value:i,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:m,enumerable:!0})):(this.column=i,this.endColumn=m))}catch(y){}}var t=c(7).default;s.__esModule=!0;var p=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];a.prototype=new Error,s.default=a,k.exports=s.default},function(k,s,c){k.exports={default:c(8),__esModule:!0}},function(k,s,c){var a=c(9);k.exports=function(t,p,u){return a.setDesc(t,p,u)}},function(k,s){var c=Object;k.exports={create:c.create,getProto:c.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:c.getOwnPropertyDescriptor,setDesc:c.defineProperty,setDescs:c.defineProperties,getKeys:c.keys,getNames:c.getOwnPropertyNames,getSymbols:c.getOwnPropertySymbols,each:[].forEach}},function(k,s,c){"use strict";function a(A){l.default(A),d.default(A),i.default(A),g.default(A),y.default(A),I.default(A),N.default(A)}function t(A,b,B){A.helpers[b]&&(A.hooks[b]=A.helpers[b],B||delete A.helpers[b])}var p=c(1).default;s.__esModule=!0,s.registerDefaultHelpers=a,s.moveHelperToHooks=t;var u=c(11),l=p(u),r=c(12),d=p(r),h=c(25),i=p(h),m=c(26),g=p(m),f=c(27),y=p(f),_=c(28),I=p(_),S=c(29),N=p(S)},function(k,s,c){"use strict";s.__esModule=!0;var a=c(5);s.default=function(t){t.registerHelper("blockHelperMissing",function(p,u){var l=u.inverse,r=u.fn;if(p===!0)return r(this);if(p===!1||p==null)return l(this);if(a.isArray(p))return p.length>0?(u.ids&&(u.ids=[u.name]),t.helpers.each(p,u)):l(this);if(u.data&&u.ids){var d=a.createFrame(u.data);d.contextPath=a.appendContextPath(u.data.contextPath,u.name),u={data:d}}return r(p,u)})},k.exports=s.default},function(k,s,c){(function(a){"use strict";var t=c(13).default,p=c(1).default;s.__esModule=!0;var u=c(5),l=c(6),r=p(l);s.default=function(d){d.registerHelper("each",function(h,i){function m(E,D,L){I&&(I.key=E,I.index=D,I.first=D===0,I.last=!!L,S&&(I.contextPath=S+E)),_+=g(h[E],{data:I,blockParams:u.blockParams([h[E],E],[S+E,null])})}if(!i)throw new r.default("Must pass iterator to #each");var g=i.fn,f=i.inverse,y=0,_="",I=void 0,S=void 0;if(i.data&&i.ids&&(S=u.appendContextPath(i.data.contextPath,i.ids[0])+"."),u.isFunction(h)&&(h=h.call(this)),i.data&&(I=u.createFrame(i.data)),h&&typeof h=="object")if(u.isArray(h))for(var N=h.length;y<N;y++)y in h&&m(y,y,y===h.length-1);else if(a.Symbol&&h[a.Symbol.iterator]){for(var A=[],b=h[a.Symbol.iterator](),B=b.next();!B.done;B=b.next())A.push(B.value);h=A;for(var N=h.length;y<N;y++)m(y,y,y===h.length-1)}else(function(){var E=void 0;t(h).forEach(function(D){E!==void 0&&m(E,y-1),E=D,y++}),E!==void 0&&m(E,y-1,!0)})();return y===0&&(_=f(this)),_})},k.exports=s.default}).call(s,function(){return this}())},function(k,s,c){k.exports={default:c(14),__esModule:!0}},function(k,s,c){c(15),k.exports=c(21).Object.keys},function(k,s,c){var a=c(16);c(18)("keys",function(t){return function(p){return t(a(p))}})},function(k,s,c){var a=c(17);k.exports=function(t){return Object(a(t))}},function(k,s){k.exports=function(c){if(c==null)throw TypeError("Can't call method on  "+c);return c}},function(k,s,c){var a=c(19),t=c(21),p=c(24);k.exports=function(u,l){var r=(t.Object||{})[u]||Object[u],d={};d[u]=l(r),a(a.S+a.F*p(function(){r(1)}),"Object",d)}},function(k,s,c){var a=c(20),t=c(21),p=c(22),u="prototype",l=function(r,d,h){var i,m,g,f=r&l.F,y=r&l.G,_=r&l.S,I=r&l.P,S=r&l.B,N=r&l.W,A=y?t:t[d]||(t[d]={}),b=y?a:_?a[d]:(a[d]||{})[u];y&&(h=d);for(i in h)m=!f&&b&&i in b,m&&i in A||(g=m?b[i]:h[i],A[i]=y&&typeof b[i]!="function"?h[i]:S&&m?p(g,a):N&&b[i]==g?function(B){var E=function(D){return this instanceof B?new B(D):B(D)};return E[u]=B[u],E}(g):I&&typeof g=="function"?p(Function.call,g):g,I&&((A[u]||(A[u]={}))[i]=g))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,k.exports=l},function(k,s){var c=k.exports=typeof window!="undefined"&&window.Math==Math?window:typeof self!="undefined"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=c)},function(k,s){var c=k.exports={version:"1.2.6"};typeof __e=="number"&&(__e=c)},function(k,s,c){var a=c(23);k.exports=function(t,p,u){if(a(t),p===void 0)return t;switch(u){case 1:return function(l){return t.call(p,l)};case 2:return function(l,r){return t.call(p,l,r)};case 3:return function(l,r,d){return t.call(p,l,r,d)}}return function(){return t.apply(p,arguments)}}},function(k,s){k.exports=function(c){if(typeof c!="function")throw TypeError(c+" is not a function!");return c}},function(k,s){k.exports=function(c){try{return!!c()}catch(a){return!0}}},function(k,s,c){"use strict";var a=c(1).default;s.__esModule=!0;var t=c(6),p=a(t);s.default=function(u){u.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new p.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},k.exports=s.default},function(k,s,c){"use strict";var a=c(1).default;s.__esModule=!0;var t=c(5),p=c(6),u=a(p);s.default=function(l){l.registerHelper("if",function(r,d){if(arguments.length!=2)throw new u.default("#if requires exactly one argument");return t.isFunction(r)&&(r=r.call(this)),!d.hash.includeZero&&!r||t.isEmpty(r)?d.inverse(this):d.fn(this)}),l.registerHelper("unless",function(r,d){if(arguments.length!=2)throw new u.default("#unless requires exactly one argument");return l.helpers.if.call(this,r,{fn:d.inverse,inverse:d.fn,hash:d.hash})})},k.exports=s.default},function(k,s){"use strict";s.__esModule=!0,s.default=function(c){c.registerHelper("log",function(){for(var a=[void 0],t=arguments[arguments.length-1],p=0;p<arguments.length-1;p++)a.push(arguments[p]);var u=1;t.hash.level!=null?u=t.hash.level:t.data&&t.data.level!=null&&(u=t.data.level),a[0]=u,c.log.apply(c,a)})},k.exports=s.default},function(k,s){"use strict";s.__esModule=!0,s.default=function(c){c.registerHelper("lookup",function(a,t,p){return a&&p.lookupProperty(a,t)})},k.exports=s.default},function(k,s,c){"use strict";var a=c(1).default;s.__esModule=!0;var t=c(5),p=c(6),u=a(p);s.default=function(l){l.registerHelper("with",function(r,d){if(arguments.length!=2)throw new u.default("#with requires exactly one argument");t.isFunction(r)&&(r=r.call(this));var h=d.fn;if(t.isEmpty(r))return d.inverse(this);var i=d.data;return d.data&&d.ids&&(i=t.createFrame(d.data),i.contextPath=t.appendContextPath(d.data.contextPath,d.ids[0])),h(r,{data:i,blockParams:t.blockParams([r],[i&&i.contextPath])})})},k.exports=s.default},function(k,s,c){"use strict";function a(l){u.default(l)}var t=c(1).default;s.__esModule=!0,s.registerDefaultDecorators=a;var p=c(31),u=t(p)},function(k,s,c){"use strict";s.__esModule=!0;var a=c(5);s.default=function(t){t.registerDecorator("inline",function(p,u,l,r){var d=p;return u.partials||(u.partials={},d=function(h,i){var m=l.partials;l.partials=a.extend({},m,u.partials);var g=p(h,i);return l.partials=m,g}),u.partials[r.args[0]]=r.fn,d})},k.exports=s.default},function(k,s,c){"use strict";s.__esModule=!0;var a=c(5),t={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(p){if(typeof p=="string"){var u=a.indexOf(t.methodMap,p.toLowerCase());p=u>=0?u:parseInt(p,10)}return p},log:function(p){if(p=t.lookupLevel(p),typeof console!="undefined"&&t.lookupLevel(t.level)<=p){var u=t.methodMap[p];console[u]||(u="log");for(var l=arguments.length,r=Array(l>1?l-1:0),d=1;d<l;d++)r[d-1]=arguments[d];console[u].apply(console,r)}}};s.default=t,k.exports=s.default},function(k,s,c){"use strict";function a(y){var _=r(null);_.constructor=!1,_.__defineGetter__=!1,_.__defineSetter__=!1,_.__lookupGetter__=!1;var I=r(null);return I.__proto__=!1,{properties:{whitelist:i.createNewLookupObject(I,y.allowedProtoProperties),defaultValue:y.allowProtoPropertiesByDefault},methods:{whitelist:i.createNewLookupObject(_,y.allowedProtoMethods),defaultValue:y.allowProtoMethodsByDefault}}}function t(y,_,I){return p(typeof y=="function"?_.methods:_.properties,I)}function p(y,_){return y.whitelist[_]!==void 0?y.whitelist[_]===!0:y.defaultValue!==void 0?y.defaultValue:(u(_),!1)}function u(y){f[y]!==!0&&(f[y]=!0,g.log("error",'Handlebars: Access has been denied to resolve the property "'+y+`" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`))}function l(){d(f).forEach(function(y){delete f[y]})}var r=c(34).default,d=c(13).default,h=c(3).default;s.__esModule=!0,s.createProtoAccessControl=a,s.resultIsAllowed=t,s.resetLoggedProperties=l;var i=c(36),m=c(32),g=h(m),f=r(null)},function(k,s,c){k.exports={default:c(35),__esModule:!0}},function(k,s,c){var a=c(9);k.exports=function(t,p){return a.create(t,p)}},function(k,s,c){"use strict";function a(){for(var u=arguments.length,l=Array(u),r=0;r<u;r++)l[r]=arguments[r];return p.extend.apply(void 0,[t(null)].concat(l))}var t=c(34).default;s.__esModule=!0,s.createNewLookupObject=a;var p=c(5)},function(k,s){"use strict";function c(a){this.string=a}s.__esModule=!0,c.prototype.toString=c.prototype.toHTML=function(){return""+this.string},s.default=c,k.exports=s.default},function(k,s,c){"use strict";function a(L){var w=L&&L[0]||1,R=b.COMPILER_REVISION;if(!(w>=b.LAST_COMPATIBLE_COMPILER_REVISION&&w<=b.COMPILER_REVISION)){if(w<b.LAST_COMPATIBLE_COMPILER_REVISION){var O=b.REVISION_CHANGES[R],C=b.REVISION_CHANGES[w];throw new A.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+O+") or downgrade your runtime to an older version ("+C+").")}throw new A.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+L[1]+").")}}function t(L,w){function R(F,z,j){j.hash&&(z=S.extend({},z,j.hash),j.ids&&(j.ids[0]=!0)),F=w.VM.resolvePartial.call(this,F,z,j);var q=S.extend({},j,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),$=w.VM.invokePartial.call(this,F,z,q);if($==null&&w.compile&&(j.partials[j.name]=w.compile(F,L.compilerOptions,w),$=j.partials[j.name](z,q)),$!=null){if(j.indent){for(var te=$.split(`
`),ie=0,de=te.length;ie<de&&(te[ie]||ie+1!==de);ie++)te[ie]=j.indent+te[ie];$=te.join(`
`)}return $}throw new A.default("The partial "+j.name+" could not be compiled when running in runtime-only mode")}function O(F){function z(ie){return""+L.main(U,ie,U.helpers,U.partials,q,te,$)}var j=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],q=j.data;O._setup(j),!j.partial&&L.useData&&(q=d(F,q));var $=void 0,te=L.useBlockParams?[]:void 0;return L.useDepths&&($=j.depths?F!=j.depths[0]?[F].concat(j.depths):j.depths:[F]),(z=h(L.main,z,U,j.depths||[],q,te))(F,j)}if(!w)throw new A.default("No environment passed to template");if(!L||!L.main)throw new A.default("Unknown template object: "+typeof L);L.main.decorator=L.main_d,w.VM.checkRevision(L.compiler);var C=L.compiler&&L.compiler[0]===7,U={strict:function(F,z,j){if(!(F&&z in F))throw new A.default('"'+z+'" not defined in '+F,{loc:j});return U.lookupProperty(F,z)},lookupProperty:function(F,z){var j=F[z];return j==null||Object.prototype.hasOwnProperty.call(F,z)||D.resultIsAllowed(j,U.protoAccessControl,z)?j:void 0},lookup:function(F,z){for(var j=F.length,q=0;q<j;q++){var $=F[q]&&U.lookupProperty(F[q],z);if($!=null)return F[q][z]}},lambda:function(F,z){return typeof F=="function"?F.call(z):F},escapeExpression:S.escapeExpression,invokePartial:R,fn:function(F){var z=L[F];return z.decorator=L[F+"_d"],z},programs:[],program:function(F,z,j,q,$){var te=this.programs[F],ie=this.fn(F);return z||$||q||j?te=p(this,F,ie,z,j,q,$):te||(te=this.programs[F]=p(this,F,ie)),te},data:function(F,z){for(;F&&z--;)F=F._parent;return F},mergeIfNeeded:function(F,z){var j=F||z;return F&&z&&F!==z&&(j=S.extend({},z,F)),j},nullContext:g({}),noop:w.VM.noop,compilerInfo:L.compiler};return O.isTop=!0,O._setup=function(F){if(F.partial)U.protoAccessControl=F.protoAccessControl,U.helpers=F.helpers,U.partials=F.partials,U.decorators=F.decorators,U.hooks=F.hooks;else{var z=S.extend({},w.helpers,F.helpers);i(z,U),U.helpers=z,L.usePartial&&(U.partials=U.mergeIfNeeded(F.partials,w.partials)),(L.usePartial||L.useDecorators)&&(U.decorators=S.extend({},w.decorators,F.decorators)),U.hooks={},U.protoAccessControl=D.createProtoAccessControl(F);var j=F.allowCallsToHelperMissing||C;B.moveHelperToHooks(U,"helperMissing",j),B.moveHelperToHooks(U,"blockHelperMissing",j)}},O._child=function(F,z,j,q){if(L.useBlockParams&&!j)throw new A.default("must pass block params");if(L.useDepths&&!q)throw new A.default("must pass parent depths");return p(U,F,L[F],z,0,j,q)},O}function p(L,w,R,O,C,U,F){function z(j){var q=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],$=F;return!F||j==F[0]||j===L.nullContext&&F[0]===null||($=[j].concat(F)),R(L,j,L.helpers,L.partials,q.data||O,U&&[q.blockParams].concat(U),$)}return z=h(R,z,L,F,O,U),z.program=w,z.depth=F?F.length:0,z.blockParams=C||0,z}function u(L,w,R){return L?L.call||R.name||(R.name=L,L=R.partials[L]):L=R.name==="@partial-block"?R.data["partial-block"]:R.partials[R.name],L}function l(L,w,R){var O=R.data&&R.data["partial-block"];R.partial=!0,R.ids&&(R.data.contextPath=R.ids[0]||R.data.contextPath);var C=void 0;if(R.fn&&R.fn!==r&&function(){R.data=b.createFrame(R.data);var U=R.fn;C=R.data["partial-block"]=function(F){var z=arguments.length<=1||arguments[1]===void 0?{}:arguments[1];return z.data=b.createFrame(z.data),z.data["partial-block"]=O,U(F,z)},U.partials&&(R.partials=S.extend({},R.partials,U.partials))}(),L===void 0&&C&&(L=C),L===void 0)throw new A.default("The partial "+R.name+" could not be found");if(L instanceof Function)return L(w,R)}function r(){return""}function d(L,w){return w&&"root"in w||(w=w?b.createFrame(w):{},w.root=L),w}function h(L,w,R,O,C,U){if(L.decorator){var F={};w=L.decorator(w,F,R,O&&O[0],C,U,O),S.extend(w,F)}return w}function i(L,w){f(L).forEach(function(R){var O=L[R];L[R]=m(O,w)})}function m(L,w){var R=w.lookupProperty;return E.wrapHelper(L,function(O){return S.extend({lookupProperty:R},O)})}var g=c(39).default,f=c(13).default,y=c(3).default,_=c(1).default;s.__esModule=!0,s.checkRevision=a,s.template=t,s.wrapProgram=p,s.resolvePartial=u,s.invokePartial=l,s.noop=r;var I=c(5),S=y(I),N=c(6),A=_(N),b=c(4),B=c(10),E=c(43),D=c(33)},function(k,s,c){k.exports={default:c(40),__esModule:!0}},function(k,s,c){c(41),k.exports=c(21).Object.seal},function(k,s,c){var a=c(42);c(18)("seal",function(t){return function(p){return t&&a(p)?t(p):p}})},function(k,s){k.exports=function(c){return typeof c=="object"?c!==null:typeof c=="function"}},function(k,s){"use strict";function c(a,t){if(typeof a!="function")return a;var p=function(){var u=arguments[arguments.length-1];return arguments[arguments.length-1]=t(u),a.apply(this,arguments)};return p}s.__esModule=!0,s.wrapHelper=c},function(k,s){(function(c){"use strict";s.__esModule=!0,s.default=function(a){var t=typeof c!="undefined"?c:window,p=t.Handlebars;a.noConflict=function(){return t.Handlebars===a&&(t.Handlebars=p),a}},k.exports=s.default}).call(s,function(){return this}())},function(k,s){"use strict";s.__esModule=!0;var c={helpers:{helperExpression:function(a){return a.type==="SubExpression"||(a.type==="MustacheStatement"||a.type==="BlockStatement")&&!!(a.params&&a.params.length||a.hash)},scopedId:function(a){return/^\.|this\b/.test(a.original)},simpleId:function(a){return a.parts.length===1&&!c.helpers.scopedId(a)&&!a.depth}}};s.default=c,k.exports=s.default},function(k,s,c){"use strict";function a(y,_){if(y.type==="Program")return y;r.default.yy=f,f.locInfo=function(S){return new f.SourceLocation(_&&_.srcName,S)};var I=r.default.parse(y);return I}function t(y,_){var I=a(y,_),S=new h.default(_);return S.accept(I)}var p=c(1).default,u=c(3).default;s.__esModule=!0,s.parseWithoutProcessing=a,s.parse=t;var l=c(47),r=p(l),d=c(48),h=p(d),i=c(50),m=u(i),g=c(5);s.parser=r.default;var f={};g.extend(f,m)},function(k,s){"use strict";s.__esModule=!0;var c=function(){function a(){this.yy={}}var t={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(u,l,r,d,h,i,m){var g=i.length-1;switch(h){case 1:return i[g-1];case 2:this.$=d.prepareProgram(i[g]);break;case 3:this.$=i[g];break;case 4:this.$=i[g];break;case 5:this.$=i[g];break;case 6:this.$=i[g];break;case 7:this.$=i[g];break;case 8:this.$=i[g];break;case 9:this.$={type:"CommentStatement",value:d.stripComment(i[g]),strip:d.stripFlags(i[g],i[g]),loc:d.locInfo(this._$)};break;case 10:this.$={type:"ContentStatement",original:i[g],value:i[g],loc:d.locInfo(this._$)};break;case 11:this.$=d.prepareRawBlock(i[g-2],i[g-1],i[g],this._$);break;case 12:this.$={path:i[g-3],params:i[g-2],hash:i[g-1]};break;case 13:this.$=d.prepareBlock(i[g-3],i[g-2],i[g-1],i[g],!1,this._$);break;case 14:this.$=d.prepareBlock(i[g-3],i[g-2],i[g-1],i[g],!0,this._$);break;case 15:this.$={open:i[g-5],path:i[g-4],params:i[g-3],hash:i[g-2],blockParams:i[g-1],strip:d.stripFlags(i[g-5],i[g])};break;case 16:this.$={path:i[g-4],params:i[g-3],hash:i[g-2],blockParams:i[g-1],strip:d.stripFlags(i[g-5],i[g])};break;case 17:this.$={path:i[g-4],params:i[g-3],hash:i[g-2],blockParams:i[g-1],strip:d.stripFlags(i[g-5],i[g])};break;case 18:this.$={strip:d.stripFlags(i[g-1],i[g-1]),program:i[g]};break;case 19:var f=d.prepareBlock(i[g-2],i[g-1],i[g],i[g],!1,this._$),y=d.prepareProgram([f],i[g-1].loc);y.chained=!0,this.$={strip:i[g-2].strip,program:y,chain:!0};break;case 20:this.$=i[g];break;case 21:this.$={path:i[g-1],strip:d.stripFlags(i[g-2],i[g])};break;case 22:this.$=d.prepareMustache(i[g-3],i[g-2],i[g-1],i[g-4],d.stripFlags(i[g-4],i[g]),this._$);break;case 23:this.$=d.prepareMustache(i[g-3],i[g-2],i[g-1],i[g-4],d.stripFlags(i[g-4],i[g]),this._$);break;case 24:this.$={type:"PartialStatement",name:i[g-3],params:i[g-2],hash:i[g-1],indent:"",strip:d.stripFlags(i[g-4],i[g]),loc:d.locInfo(this._$)};break;case 25:this.$=d.preparePartialBlock(i[g-2],i[g-1],i[g],this._$);break;case 26:this.$={path:i[g-3],params:i[g-2],hash:i[g-1],strip:d.stripFlags(i[g-4],i[g])};break;case 27:this.$=i[g];break;case 28:this.$=i[g];break;case 29:this.$={type:"SubExpression",path:i[g-3],params:i[g-2],hash:i[g-1],loc:d.locInfo(this._$)};break;case 30:this.$={type:"Hash",pairs:i[g],loc:d.locInfo(this._$)};break;case 31:this.$={type:"HashPair",key:d.id(i[g-2]),value:i[g],loc:d.locInfo(this._$)};break;case 32:this.$=d.id(i[g-1]);break;case 33:this.$=i[g];break;case 34:this.$=i[g];break;case 35:this.$={type:"StringLiteral",value:i[g],original:i[g],loc:d.locInfo(this._$)};break;case 36:this.$={type:"NumberLiteral",value:Number(i[g]),original:Number(i[g]),loc:d.locInfo(this._$)};break;case 37:this.$={type:"BooleanLiteral",value:i[g]==="true",original:i[g]==="true",loc:d.locInfo(this._$)};break;case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:d.locInfo(this._$)};break;case 39:this.$={type:"NullLiteral",original:null,value:null,loc:d.locInfo(this._$)};break;case 40:this.$=i[g];break;case 41:this.$=i[g];break;case 42:this.$=d.preparePath(!0,i[g],this._$);break;case 43:this.$=d.preparePath(!1,i[g],this._$);break;case 44:i[g-2].push({part:d.id(i[g]),original:i[g],separator:i[g-1]}),this.$=i[g-2];break;case 45:this.$=[{part:d.id(i[g]),original:i[g]}];break;case 46:this.$=[];break;case 47:i[g-1].push(i[g]);break;case 48:this.$=[];break;case 49:i[g-1].push(i[g]);break;case 50:this.$=[];break;case 51:i[g-1].push(i[g]);break;case 58:this.$=[];break;case 59:i[g-1].push(i[g]);break;case 64:this.$=[];break;case 65:i[g-1].push(i[g]);break;case 70:this.$=[];break;case 71:i[g-1].push(i[g]);break;case 78:this.$=[];break;case 79:i[g-1].push(i[g]);break;case 82:this.$=[];break;case 83:i[g-1].push(i[g]);break;case 86:this.$=[];break;case 87:i[g-1].push(i[g]);break;case 90:this.$=[];break;case 91:i[g-1].push(i[g]);break;case 94:this.$=[];break;case 95:i[g-1].push(i[g]);break;case 98:this.$=[i[g]];break;case 99:i[g-1].push(i[g]);break;case 100:this.$=[i[g]];break;case 101:i[g-1].push(i[g])}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{15:[2,48],17:39,18:[2,48]},{20:41,56:40,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:44,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:45,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:41,56:48,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:49,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,50]},{72:[1,35],86:51},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:52,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:53,38:55,39:[1,57],43:56,44:[1,58],45:54,47:[2,54]},{28:59,43:60,44:[1,58],47:[2,56]},{13:62,15:[1,20],18:[1,61]},{33:[2,86],57:63,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:64,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:65,47:[1,66]},{30:67,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:68,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:69,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:70,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:74,33:[2,80],50:71,63:72,64:75,65:[1,43],69:73,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,79]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,50]},{20:74,53:80,54:[2,84],63:81,64:75,65:[1,43],69:82,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:83,47:[1,66]},{47:[2,55]},{4:84,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:85,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:86,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:87,47:[1,66]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:74,33:[2,88],58:88,63:89,64:75,65:[1,43],69:90,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:91,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:92,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,31:93,33:[2,60],63:94,64:75,65:[1,43],69:95,70:76,71:77,72:[1,78],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,66],36:96,63:97,64:75,65:[1,43],69:98,70:76,71:77,72:[1,78],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,22:99,23:[2,52],63:100,64:75,65:[1,43],69:101,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,92],62:102,63:103,64:75,65:[1,43],69:104,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,105]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:106,72:[1,107],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,108],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,109]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:55,39:[1,57],43:56,44:[1,58],45:111,46:110,47:[2,76]},{33:[2,70],40:112,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,113]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:74,63:115,64:75,65:[1,43],67:114,68:[2,96],69:116,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,117]},{32:118,33:[2,62],74:119,75:[1,120]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:121,74:122,75:[1,120]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,123]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,124]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,108]},{20:74,63:125,64:75,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:74,33:[2,72],41:126,63:127,64:75,65:[1,43],69:128,70:76,71:77,72:[1,78],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,129]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,130]},{33:[2,63]},{72:[1,132],76:131},{33:[1,133]},{33:[2,69]},{15:[2,12],18:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:134,74:135,75:[1,120]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,137],77:[1,136]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,138]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],54:[2,55],56:[2,20],60:[2,57],73:[2,81],82:[2,85],86:[2,18],90:[2,89],101:[2,53],104:[2,93],110:[2,19],111:[2,77],116:[2,97],119:[2,63],122:[2,69],135:[2,75],136:[2,32]},parseError:function(u,l){throw new Error(u)},parse:function(u){function l(){var U;return U=r.lexer.lex()||1,typeof U!="number"&&(U=r.symbols_[U]||U),U}var r=this,d=[0],h=[null],i=[],m=this.table,g="",f=0,y=0,_=0;this.lexer.setInput(u),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc=="undefined"&&(this.lexer.yylloc={});var I=this.lexer.yylloc;i.push(I);var S=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);for(var N,A,b,B,E,D,L,w,R,O={};;){if(b=d[d.length-1],this.defaultActions[b]?B=this.defaultActions[b]:(N!==null&&typeof N!="undefined"||(N=l()),B=m[b]&&m[b][N]),typeof B=="undefined"||!B.length||!B[0]){var C="";if(!_){R=[];for(D in m[b])this.terminals_[D]&&D>2&&R.push("'"+this.terminals_[D]+"'");C=this.lexer.showPosition?"Parse error on line "+(f+1)+`:
`+this.lexer.showPosition()+`
Expecting `+R.join(", ")+", got '"+(this.terminals_[N]||N)+"'":"Parse error on line "+(f+1)+": Unexpected "+(N==1?"end of input":"'"+(this.terminals_[N]||N)+"'"),this.parseError(C,{text:this.lexer.match,token:this.terminals_[N]||N,line:this.lexer.yylineno,loc:I,expected:R})}}if(B[0]instanceof Array&&B.length>1)throw new Error("Parse Error: multiple actions possible at state: "+b+", token: "+N);switch(B[0]){case 1:d.push(N),h.push(this.lexer.yytext),i.push(this.lexer.yylloc),d.push(B[1]),N=null,A?(N=A,A=null):(y=this.lexer.yyleng,g=this.lexer.yytext,f=this.lexer.yylineno,I=this.lexer.yylloc,_>0&&_--);break;case 2:if(L=this.productions_[B[1]][1],O.$=h[h.length-L],O._$={first_line:i[i.length-(L||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(L||1)].first_column,last_column:i[i.length-1].last_column},S&&(O._$.range=[i[i.length-(L||1)].range[0],i[i.length-1].range[1]]),E=this.performAction.call(O,g,y,f,this.yy,B[1],h,i),typeof E!="undefined")return E;L&&(d=d.slice(0,-1*L*2),h=h.slice(0,-1*L),i=i.slice(0,-1*L)),d.push(this.productions_[B[1]][0]),h.push(O.$),i.push(O._$),w=m[d[d.length-2]][d[d.length-1]],d.push(w);break;case 3:return!0}}return!0}},p=function(){var u={EOF:1,parseError:function(l,r){if(!this.yy.parser)throw new Error(l);this.yy.parser.parseError(l,r)},setInput:function(l){return this._input=l,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var l=this._input[0];this.yytext+=l,this.yyleng++,this.offset++,this.match+=l,this.matched+=l;var r=l.match(/(?:\r\n?|\n).*/g);return r?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),l},unput:function(l){var r=l.length,d=l.split(/(?:\r\n?|\n)/g);this._input=l+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-r-1),this.offset-=r;var h=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),d.length-1&&(this.yylineno-=d.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:d?(d.length===h.length?this.yylloc.first_column:0)+h[h.length-d.length].length-d[0].length:this.yylloc.first_column-r},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-r]),this},more:function(){return this._more=!0,this},less:function(l){this.unput(this.match.slice(l))},pastInput:function(){var l=this.matched.substr(0,this.matched.length-this.match.length);return(l.length>20?"...":"")+l.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var l=this.match;return l.length<20&&(l+=this._input.substr(0,20-l.length)),(l.substr(0,20)+(l.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var l=this.pastInput(),r=new Array(l.length+1).join("-");return l+this.upcomingInput()+`
`+r+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var l,r,d,h,i;this._more||(this.yytext="",this.match="");for(var m=this._currentRules(),g=0;g<m.length&&(d=this._input.match(this.rules[m[g]]),!d||r&&!(d[0].length>r[0].length)||(r=d,h=g,this.options.flex));g++);return r?(i=r[0].match(/(?:\r\n?|\n).*/g),i&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+r[0].length},this.yytext+=r[0],this.match+=r[0],this.matches=r,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(r[0].length),this.matched+=r[0],l=this.performAction.call(this,this.yy,this,m[h],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),l||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var l=this.next();return typeof l!="undefined"?l:this.lex()},begin:function(l){this.conditionStack.push(l)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(l){this.begin(l)}};return u.options={},u.performAction=function(l,r,d,h){function i(m,g){return r.yytext=r.yytext.substring(m,r.yyleng-g+m)}switch(d){case 0:if(r.yytext.slice(-2)==="\\\\"?(i(0,1),this.begin("mu")):r.yytext.slice(-1)==="\\"?(i(0,1),this.begin("emu")):this.begin("mu"),r.yytext)return 15;break;case 1:return 15;case 2:return this.popState(),15;case 3:return this.begin("raw"),15;case 4:return this.popState(),this.conditionStack[this.conditionStack.length-1]==="raw"?15:(i(5,9),"END_RAW_BLOCK");case 5:return 15;case 6:return this.popState(),14;case 7:return 65;case 8:return 68;case 9:return 19;case 10:return this.popState(),this.begin("raw"),23;case 11:return 55;case 12:return 60;case 13:return 29;case 14:return 47;case 15:return this.popState(),44;case 16:return this.popState(),44;case 17:return 34;case 18:return 39;case 19:return 51;case 20:return 48;case 21:this.unput(r.yytext),this.popState(),this.begin("com");break;case 22:return this.popState(),14;case 23:return 48;case 24:return 73;case 25:return 72;case 26:return 72;case 27:return 87;case 28:break;case 29:return this.popState(),54;case 30:return this.popState(),33;case 31:return r.yytext=i(1,2).replace(/\\"/g,'"'),80;case 32:return r.yytext=i(1,2).replace(/\\'/g,"'"),80;case 33:return 85;case 34:return 82;case 35:return 82;case 36:return 83;case 37:return 84;case 38:return 81;case 39:return 75;case 40:return 77;case 41:return 72;case 42:return r.yytext=r.yytext.replace(/\\([\\\]])/g,"$1"),72;case 43:return"INVALID";case 44:return 5}},u.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^\/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],u.conditions={mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}},u}();return t.lexer=p,a.prototype=t,t.Parser=a,new a}();s.default=c,k.exports=s.default},function(k,s,c){"use strict";function a(){var i=arguments.length<=0||arguments[0]===void 0?{}:arguments[0];this.options=i}function t(i,m,g){m===void 0&&(m=i.length);var f=i[m-1],y=i[m-2];return f?f.type==="ContentStatement"?(y||!g?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(f.original):void 0:g}function p(i,m,g){m===void 0&&(m=-1);var f=i[m+1],y=i[m+2];return f?f.type==="ContentStatement"?(y||!g?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(f.original):void 0:g}function u(i,m,g){var f=i[m==null?0:m+1];if(f&&f.type==="ContentStatement"&&(g||!f.rightStripped)){var y=f.value;f.value=f.value.replace(g?/^\s+/:/^[ \t]*\r?\n?/,""),f.rightStripped=f.value!==y}}function l(i,m,g){var f=i[m==null?i.length-1:m-1];if(f&&f.type==="ContentStatement"&&(g||!f.leftStripped)){var y=f.value;return f.value=f.value.replace(g?/\s+$/:/[ \t]+$/,""),f.leftStripped=f.value!==y,f.leftStripped}}var r=c(1).default;s.__esModule=!0;var d=c(49),h=r(d);a.prototype=new h.default,a.prototype.Program=function(i){var m=!this.options.ignoreStandalone,g=!this.isRootSeen;this.isRootSeen=!0;for(var f=i.body,y=0,_=f.length;y<_;y++){var I=f[y],S=this.accept(I);if(S){var N=t(f,y,g),A=p(f,y,g),b=S.openStandalone&&N,B=S.closeStandalone&&A,E=S.inlineStandalone&&N&&A;S.close&&u(f,y,!0),S.open&&l(f,y,!0),m&&E&&(u(f,y),l(f,y)&&I.type==="PartialStatement"&&(I.indent=/([ \t]+$)/.exec(f[y-1].original)[1])),m&&b&&(u((I.program||I.inverse).body),l(f,y)),m&&B&&(u(f,y),l((I.inverse||I.program).body))}}return i},a.prototype.BlockStatement=a.prototype.DecoratorBlock=a.prototype.PartialBlockStatement=function(i){this.accept(i.program),this.accept(i.inverse);var m=i.program||i.inverse,g=i.program&&i.inverse,f=g,y=g;if(g&&g.chained)for(f=g.body[0].program;y.chained;)y=y.body[y.body.length-1].program;var _={open:i.openStrip.open,close:i.closeStrip.close,openStandalone:p(m.body),closeStandalone:t((f||m).body)};if(i.openStrip.close&&u(m.body,null,!0),g){var I=i.inverseStrip;I.open&&l(m.body,null,!0),I.close&&u(f.body,null,!0),i.closeStrip.open&&l(y.body,null,!0),!this.options.ignoreStandalone&&t(m.body)&&p(f.body)&&(l(m.body),u(f.body))}else i.closeStrip.open&&l(m.body,null,!0);return _},a.prototype.Decorator=a.prototype.MustacheStatement=function(i){return i.strip},a.prototype.PartialStatement=a.prototype.CommentStatement=function(i){var m=i.strip||{};return{inlineStandalone:!0,open:m.open,close:m.close}},s.default=a,k.exports=s.default},function(k,s,c){"use strict";function a(){this.parents=[]}function t(h){this.acceptRequired(h,"path"),this.acceptArray(h.params),this.acceptKey(h,"hash")}function p(h){t.call(this,h),this.acceptKey(h,"program"),this.acceptKey(h,"inverse")}function u(h){this.acceptRequired(h,"name"),this.acceptArray(h.params),this.acceptKey(h,"hash")}var l=c(1).default;s.__esModule=!0;var r=c(6),d=l(r);a.prototype={constructor:a,mutating:!1,acceptKey:function(h,i){var m=this.accept(h[i]);if(this.mutating){if(m&&!a.prototype[m.type])throw new d.default('Unexpected node type "'+m.type+'" found when accepting '+i+" on "+h.type);h[i]=m}},acceptRequired:function(h,i){if(this.acceptKey(h,i),!h[i])throw new d.default(h.type+" requires "+i)},acceptArray:function(h){for(var i=0,m=h.length;i<m;i++)this.acceptKey(h,i),h[i]||(h.splice(i,1),i--,m--)},accept:function(h){if(h){if(!this[h.type])throw new d.default("Unknown type: "+h.type,h);this.current&&this.parents.unshift(this.current),this.current=h;var i=this[h.type](h);return this.current=this.parents.shift(),!this.mutating||i?i:i!==!1?h:void 0}},Program:function(h){this.acceptArray(h.body)},MustacheStatement:t,Decorator:t,BlockStatement:p,DecoratorBlock:p,PartialStatement:u,PartialBlockStatement:function(h){u.call(this,h),this.acceptKey(h,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:t,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(h){this.acceptArray(h.pairs)},HashPair:function(h){this.acceptRequired(h,"value")}},s.default=a,k.exports=s.default},function(k,s,c){"use strict";function a(I,S){if(S=S.path?S.path.original:S,I.path.original!==S){var N={loc:I.path.loc};throw new _.default(I.path.original+" doesn't match "+S,N)}}function t(I,S){this.source=I,this.start={line:S.first_line,column:S.first_column},this.end={line:S.last_line,column:S.last_column}}function p(I){return/^\[.*\]$/.test(I)?I.substring(1,I.length-1):I}function u(I,S){return{open:I.charAt(2)==="~",close:S.charAt(S.length-3)==="~"}}function l(I){return I.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")}function r(I,S,N){N=this.locInfo(N);for(var A=I?"@":"",b=[],B=0,E=0,D=S.length;E<D;E++){var L=S[E].part,w=S[E].original!==L;if(A+=(S[E].separator||"")+L,w||L!==".."&&L!=="."&&L!=="this")b.push(L);else{if(b.length>0)throw new _.default("Invalid path: "+A,{loc:N});L===".."&&B++}}return{type:"PathExpression",data:I,depth:B,parts:b,original:A,loc:N}}function d(I,S,N,A,b,B){var E=A.charAt(3)||A.charAt(2),D=E!=="{"&&E!=="&",L=/\*/.test(A);return{type:L?"Decorator":"MustacheStatement",path:I,params:S,hash:N,escaped:D,strip:b,loc:this.locInfo(B)}}function h(I,S,N,A){a(I,N),A=this.locInfo(A);var b={type:"Program",body:S,strip:{},loc:A};return{type:"BlockStatement",path:I.path,params:I.params,hash:I.hash,program:b,openStrip:{},inverseStrip:{},closeStrip:{},loc:A}}function i(I,S,N,A,b,B){A&&A.path&&a(I,A);var E=/\*/.test(I.open);S.blockParams=I.blockParams;var D=void 0,L=void 0;if(N){if(E)throw new _.default("Unexpected inverse block on decorator",N);N.chain&&(N.program.body[0].closeStrip=A.strip),L=N.strip,D=N.program}return b&&(b=D,D=S,S=b),{type:E?"DecoratorBlock":"BlockStatement",path:I.path,params:I.params,hash:I.hash,program:S,inverse:D,openStrip:I.strip,inverseStrip:L,closeStrip:A&&A.strip,loc:this.locInfo(B)}}function m(I,S){if(!S&&I.length){var N=I[0].loc,A=I[I.length-1].loc;N&&A&&(S={source:N.source,start:{line:N.start.line,column:N.start.column},end:{line:A.end.line,column:A.end.column}})}return{type:"Program",body:I,strip:{},loc:S}}function g(I,S,N,A){return a(I,N),{type:"PartialBlockStatement",name:I.path,params:I.params,hash:I.hash,program:S,openStrip:I.strip,closeStrip:N&&N.strip,loc:this.locInfo(A)}}var f=c(1).default;s.__esModule=!0,s.SourceLocation=t,s.id=p,s.stripFlags=u,s.stripComment=l,s.preparePath=r,s.prepareMustache=d,s.prepareRawBlock=h,s.prepareBlock=i,s.prepareProgram=m,s.preparePartialBlock=g;var y=c(6),_=f(y)},function(k,s,c){"use strict";function a(){}function t(_,I,S){if(_==null||typeof _!="string"&&_.type!=="Program")throw new i.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+_);I=I||{},"data"in I||(I.data=!0),I.compat&&(I.useDepths=!0);var N=S.parse(_,I),A=new S.Compiler().compile(N,I);return new S.JavaScriptCompiler().compile(A,I)}function p(_,I,S){function N(){var B=S.parse(_,I),E=new S.Compiler().compile(B,I),D=new S.JavaScriptCompiler().compile(E,I,void 0,!0);return S.template(D)}function A(B,E){return b||(b=N()),b.call(this,B,E)}if(I===void 0&&(I={}),_==null||typeof _!="string"&&_.type!=="Program")throw new i.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+_);I=m.extend({},I),"data"in I||(I.data=!0),I.compat&&(I.useDepths=!0);var b=void 0;return A._setup=function(B){return b||(b=N()),b._setup(B)},A._child=function(B,E,D,L){return b||(b=N()),b._child(B,E,D,L)},A}function u(_,I){if(_===I)return!0;if(m.isArray(_)&&m.isArray(I)&&_.length===I.length){for(var S=0;S<_.length;S++)if(!u(_[S],I[S]))return!1;return!0}}function l(_){if(!_.path.parts){var I=_.path;_.path={type:"PathExpression",data:!1,depth:0,parts:[I.original+""],original:I.original+"",loc:I.loc}}}var r=c(34).default,d=c(1).default;s.__esModule=!0,s.Compiler=a,s.precompile=t,s.compile=p;var h=c(6),i=d(h),m=c(5),g=c(45),f=d(g),y=[].slice;a.prototype={compiler:a,equals:function(_){var I=this.opcodes.length;if(_.opcodes.length!==I)return!1;for(var S=0;S<I;S++){var N=this.opcodes[S],A=_.opcodes[S];if(N.opcode!==A.opcode||!u(N.args,A.args))return!1}I=this.children.length;for(var S=0;S<I;S++)if(!this.children[S].equals(_.children[S]))return!1;return!0},guid:0,compile:function(_,I){return this.sourceNode=[],this.opcodes=[],this.children=[],this.options=I,this.stringParams=I.stringParams,this.trackIds=I.trackIds,I.blockParams=I.blockParams||[],I.knownHelpers=m.extend(r(null),{helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},I.knownHelpers),this.accept(_)},compileProgram:function(_){var I=new this.compiler,S=I.compile(_,this.options),N=this.guid++;return this.usePartial=this.usePartial||S.usePartial,this.children[N]=S,this.useDepths=this.useDepths||S.useDepths,N},accept:function(_){if(!this[_.type])throw new i.default("Unknown type: "+_.type,_);this.sourceNode.unshift(_);var I=this[_.type](_);return this.sourceNode.shift(),I},Program:function(_){this.options.blockParams.unshift(_.blockParams);for(var I=_.body,S=I.length,N=0;N<S;N++)this.accept(I[N]);return this.options.blockParams.shift(),this.isSimple=S===1,this.blockParams=_.blockParams?_.blockParams.length:0,this},BlockStatement:function(_){l(_);var I=_.program,S=_.inverse;I=I&&this.compileProgram(I),S=S&&this.compileProgram(S);var N=this.classifySexpr(_);N==="helper"?this.helperSexpr(_,I,S):N==="simple"?(this.simpleSexpr(_),this.opcode("pushProgram",I),this.opcode("pushProgram",S),this.opcode("emptyHash"),this.opcode("blockValue",_.path.original)):(this.ambiguousSexpr(_,I,S),this.opcode("pushProgram",I),this.opcode("pushProgram",S),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(_){var I=_.program&&this.compileProgram(_.program),S=this.setupFullMustacheParams(_,I,void 0),N=_.path;this.useDecorators=!0,this.opcode("registerDecorator",S.length,N.original)},PartialStatement:function(_){this.usePartial=!0;var I=_.program;I&&(I=this.compileProgram(_.program));var S=_.params;if(S.length>1)throw new i.default("Unsupported number of partial arguments: "+S.length,_);S.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):S.push({type:"PathExpression",parts:[],depth:0}));var N=_.name.original,A=_.name.type==="SubExpression";A&&this.accept(_.name),this.setupFullMustacheParams(_,I,void 0,!0);var b=_.indent||"";this.options.preventIndent&&b&&(this.opcode("appendContent",b),b=""),this.opcode("invokePartial",A,N,b),this.opcode("append")},PartialBlockStatement:function(_){this.PartialStatement(_)},MustacheStatement:function(_){this.SubExpression(_),_.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(_){this.DecoratorBlock(_)},ContentStatement:function(_){_.value&&this.opcode("appendContent",_.value)},CommentStatement:function(){},SubExpression:function(_){l(_);var I=this.classifySexpr(_);I==="simple"?this.simpleSexpr(_):I==="helper"?this.helperSexpr(_):this.ambiguousSexpr(_)},ambiguousSexpr:function(_,I,S){var N=_.path,A=N.parts[0],b=I!=null||S!=null;this.opcode("getContext",N.depth),this.opcode("pushProgram",I),this.opcode("pushProgram",S),N.strict=!0,this.accept(N),this.opcode("invokeAmbiguous",A,b)},simpleSexpr:function(_){var I=_.path;I.strict=!0,this.accept(I),this.opcode("resolvePossibleLambda")},helperSexpr:function(_,I,S){var N=this.setupFullMustacheParams(_,I,S),A=_.path,b=A.parts[0];if(this.options.knownHelpers[b])this.opcode("invokeKnownHelper",N.length,b);else{if(this.options.knownHelpersOnly)throw new i.default("You specified knownHelpersOnly, but used the unknown helper "+b,_);A.strict=!0,A.falsy=!0,this.accept(A),this.opcode("invokeHelper",N.length,A.original,f.default.helpers.simpleId(A))}},PathExpression:function(_){this.addDepth(_.depth),this.opcode("getContext",_.depth);var I=_.parts[0],S=f.default.helpers.scopedId(_),N=!_.depth&&!S&&this.blockParamIndex(I);N?this.opcode("lookupBlockParam",N,_.parts):I?_.data?(this.options.data=!0,this.opcode("lookupData",_.depth,_.parts,_.strict)):this.opcode("lookupOnContext",_.parts,_.falsy,_.strict,S):this.opcode("pushContext")},StringLiteral:function(_){this.opcode("pushString",_.value)},NumberLiteral:function(_){this.opcode("pushLiteral",_.value)},BooleanLiteral:function(_){this.opcode("pushLiteral",_.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(_){var I=_.pairs,S=0,N=I.length;for(this.opcode("pushHash");S<N;S++)this.pushParam(I[S].value);for(;S--;)this.opcode("assignToHash",I[S].key);this.opcode("popHash")},opcode:function(_){this.opcodes.push({opcode:_,args:y.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(_){_&&(this.useDepths=!0)},classifySexpr:function(_){var I=f.default.helpers.simpleId(_.path),S=I&&!!this.blockParamIndex(_.path.parts[0]),N=!S&&f.default.helpers.helperExpression(_),A=!S&&(N||I);if(A&&!N){var b=_.path.parts[0],B=this.options;B.knownHelpers[b]?N=!0:B.knownHelpersOnly&&(A=!1)}return N?"helper":A?"ambiguous":"simple"},pushParams:function(_){for(var I=0,S=_.length;I<S;I++)this.pushParam(_[I])},pushParam:function(_){var I=_.value!=null?_.value:_.original||"";if(this.stringParams)I.replace&&(I=I.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),_.depth&&this.addDepth(_.depth),this.opcode("getContext",_.depth||0),this.opcode("pushStringParam",I,_.type),_.type==="SubExpression"&&this.accept(_);else{if(this.trackIds){var S=void 0;if(!_.parts||f.default.helpers.scopedId(_)||_.depth||(S=this.blockParamIndex(_.parts[0])),S){var N=_.parts.slice(1).join(".");this.opcode("pushId","BlockParam",S,N)}else I=_.original||I,I.replace&&(I=I.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",_.type,I)}this.accept(_)}},setupFullMustacheParams:function(_,I,S,N){var A=_.params;return this.pushParams(A),this.opcode("pushProgram",I),this.opcode("pushProgram",S),_.hash?this.accept(_.hash):this.opcode("emptyHash",N),A},blockParamIndex:function(_){for(var I=0,S=this.options.blockParams.length;I<S;I++){var N=this.options.blockParams[I],A=N&&m.indexOf(N,_);if(N&&A>=0)return[I,A]}}}},function(k,s,c){"use strict";function a(f){this.value=f}function t(){}function p(f,y,_,I){var S=y.popStack(),N=0,A=_.length;for(f&&A--;N<A;N++)S=y.nameLookup(S,_[N],I);return f?[y.aliasable("container.strict"),"(",S,", ",y.quotedString(_[N]),", ",JSON.stringify(y.source.currentLocation)," )"]:S}var u=c(13).default,l=c(1).default;s.__esModule=!0;var r=c(4),d=c(6),h=l(d),i=c(5),m=c(53),g=l(m);t.prototype={nameLookup:function(f,y){return this.internalNameLookup(f,y)},depthedLookup:function(f){return[this.aliasable("container.lookup"),"(depths, ",JSON.stringify(f),")"]},compilerInfo:function(){var f=r.COMPILER_REVISION,y=r.REVISION_CHANGES[f];return[f,y]},appendToBuffer:function(f,y,_){return i.isArray(f)||(f=[f]),f=this.source.wrap(f,y),this.environment.isSimple?["return ",f,";"]:_?["buffer += ",f,";"]:(f.appendToBuffer=!0,f)},initializeBuffer:function(){return this.quotedString("")},internalNameLookup:function(f,y){return this.lookupPropertyFunctionIsUsed=!0,["lookupProperty(",f,",",JSON.stringify(y),")"]},lookupPropertyFunctionIsUsed:!1,compile:function(f,y,_,I){this.environment=f,this.options=y,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!I,this.name=this.environment.name,this.isChild=!!_,this.context=_||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(f,y),this.useDepths=this.useDepths||f.useDepths||f.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||f.useBlockParams;var S=f.opcodes,N=void 0,A=void 0,b=void 0,B=void 0;for(b=0,B=S.length;b<B;b++)N=S[b],this.source.currentLocation=N.loc,A=A||N.loc,this[N.opcode].apply(this,N.args);if(this.source.currentLocation=A,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new h.default("Compile completed with content left on stack");this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend(["var decorators = container.decorators, ",this.lookupPropertyFunctionVarDeclaration(),`;
`]),this.decorators.push("return fn;"),I?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`),this.decorators.push(`}
`),this.decorators=this.decorators.merge()));var E=this.createFunctionContext(I);if(this.isChild)return E;var D={compiler:this.compilerInfo(),main:E};this.decorators&&(D.main_d=this.decorators,D.useDecorators=!0);var L=this.context,w=L.programs,R=L.decorators;for(b=0,B=w.length;b<B;b++)w[b]&&(D[b]=w[b],R[b]&&(D[b+"_d"]=R[b],D.useDecorators=!0));return this.environment.usePartial&&(D.usePartial=!0),this.options.data&&(D.useData=!0),this.useDepths&&(D.useDepths=!0),this.useBlockParams&&(D.useBlockParams=!0),this.options.compat&&(D.compat=!0),I?D.compilerOptions=this.options:(D.compiler=JSON.stringify(D.compiler),this.source.currentLocation={start:{line:1,column:0}},D=this.objectLiteral(D),y.srcName?(D=D.toStringWithSourceMap({file:y.destName}),D.map=D.map&&D.map.toString()):D=D.toString()),D},preamble:function(){this.lastContext=0,this.source=new g.default(this.options.srcName),this.decorators=new g.default(this.options.srcName)},createFunctionContext:function(f){var y=this,_="",I=this.stackVars.concat(this.registers.list);I.length>0&&(_+=", "+I.join(", "));var S=0;u(this.aliases).forEach(function(b){var B=y.aliases[b];B.children&&B.referenceCount>1&&(_+=", alias"+ ++S+"="+b,B.children[0]="alias"+S)}),this.lookupPropertyFunctionIsUsed&&(_+=", "+this.lookupPropertyFunctionVarDeclaration());var N=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&N.push("blockParams"),this.useDepths&&N.push("depths");var A=this.mergeSource(_);return f?(N.push(A),Function.apply(this,N)):this.source.wrap(["function(",N.join(","),`) {
  `,A,"}"])},mergeSource:function(f){var y=this.environment.isSimple,_=!this.forceBuffer,I=void 0,S=void 0,N=void 0,A=void 0;return this.source.each(function(b){b.appendToBuffer?(N?b.prepend("  + "):N=b,A=b):(N&&(S?N.prepend("buffer += "):I=!0,A.add(";"),N=A=void 0),S=!0,y||(_=!1))}),_?N?(N.prepend("return "),A.add(";")):S||this.source.push('return "";'):(f+=", buffer = "+(I?"":this.initializeBuffer()),N?(N.prepend("return buffer + "),A.add(";")):this.source.push("return buffer;")),f&&this.source.prepend("var "+f.substring(2)+(I?"":`;
`)),this.source.merge()},lookupPropertyFunctionVarDeclaration:function(){return`
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }
    `.trim()},blockValue:function(f){var y=this.aliasable("container.hooks.blockHelperMissing"),_=[this.contextName(0)];this.setupHelperArgs(f,0,_);var I=this.popStack();_.splice(1,0,I),this.push(this.source.functionCall(y,"call",_))},ambiguousBlockValue:function(){var f=this.aliasable("container.hooks.blockHelperMissing"),y=[this.contextName(0)];this.setupHelperArgs("",0,y,!0),this.flushInline();var _=this.topStack();y.splice(1,0,_),this.pushSource(["if (!",this.lastHelper,") { ",_," = ",this.source.functionCall(f,"call",y),"}"])},appendContent:function(f){this.pendingContent?f=this.pendingContent+f:this.pendingLocation=this.source.currentLocation,this.pendingContent=f},append:function(){if(this.isInline())this.replaceStack(function(y){return[" != null ? ",y,' : ""']}),this.pushSource(this.appendToBuffer(this.popStack()));else{var f=this.popStack();this.pushSource(["if (",f," != null) { ",this.appendToBuffer(f,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(f){this.lastContext=f},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(f,y,_,I){var S=0;I||!this.options.compat||this.lastContext?this.pushContext():this.push(this.depthedLookup(f[S++])),this.resolvePath("context",f,S,y,_)},lookupBlockParam:function(f,y){this.useBlockParams=!0,this.push(["blockParams[",f[0],"][",f[1],"]"]),this.resolvePath("context",y,1)},lookupData:function(f,y,_){f?this.pushStackLiteral("container.data(data, "+f+")"):this.pushStackLiteral("data"),this.resolvePath("data",y,0,!0,_)},resolvePath:function(f,y,_,I,S){var N=this;if(this.options.strict||this.options.assumeObjects)return void this.push(p(this.options.strict&&S,this,y,f));for(var A=y.length;_<A;_++)this.replaceStack(function(b){var B=N.nameLookup(b,y[_],f);return I?[" && ",B]:[" != null ? ",B," : ",b]})},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(f,y){this.pushContext(),this.pushString(y),y!=="SubExpression"&&(typeof f=="string"?this.pushString(f):this.pushStackLiteral(f))},emptyHash:function(f){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(f?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:{},types:[],contexts:[],ids:[]}},popHash:function(){var f=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(f.ids)),this.stringParams&&(this.push(this.objectLiteral(f.contexts)),this.push(this.objectLiteral(f.types))),this.push(this.objectLiteral(f.values))},pushString:function(f){this.pushStackLiteral(this.quotedString(f))},pushLiteral:function(f){this.pushStackLiteral(f)},pushProgram:function(f){f!=null?this.pushStackLiteral(this.programExpression(f)):this.pushStackLiteral(null)},registerDecorator:function(f,y){var _=this.nameLookup("decorators",y,"decorator"),I=this.setupHelperArgs(y,f);this.decorators.push(["fn = ",this.decorators.functionCall(_,"",["fn","props","container",I])," || fn;"])},invokeHelper:function(f,y,_){var I=this.popStack(),S=this.setupHelper(f,y),N=[];_&&N.push(S.name),N.push(I),this.options.strict||N.push(this.aliasable("container.hooks.helperMissing"));var A=["(",this.itemsSeparatedBy(N,"||"),")"],b=this.source.functionCall(A,"call",S.callParams);this.push(b)},itemsSeparatedBy:function(f,y){var _=[];_.push(f[0]);for(var I=1;I<f.length;I++)_.push(y,f[I]);return _},invokeKnownHelper:function(f,y){var _=this.setupHelper(f,y);this.push(this.source.functionCall(_.name,"call",_.callParams))},invokeAmbiguous:function(f,y){this.useRegister("helper");var _=this.popStack();this.emptyHash();var I=this.setupHelper(0,f,y),S=this.lastHelper=this.nameLookup("helpers",f,"helper"),N=["(","(helper = ",S," || ",_,")"];this.options.strict||(N[0]="(helper = ",N.push(" != null ? helper : ",this.aliasable("container.hooks.helperMissing"))),this.push(["(",N,I.paramsInit?["),(",I.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",I.callParams)," : helper))"])},invokePartial:function(f,y,_){var I=[],S=this.setupParams(y,1,I);f&&(y=this.popStack(),delete S.name),_&&(S.indent=JSON.stringify(_)),S.helpers="helpers",S.partials="partials",S.decorators="container.decorators",f?I.unshift(y):I.unshift(this.nameLookup("partials",y,"partial")),this.options.compat&&(S.depths="depths"),S=this.objectLiteral(S),I.push(S),this.push(this.source.functionCall("container.invokePartial","",I))},assignToHash:function(f){var y=this.popStack(),_=void 0,I=void 0,S=void 0;this.trackIds&&(S=this.popStack()),this.stringParams&&(I=this.popStack(),_=this.popStack());var N=this.hash;_&&(N.contexts[f]=_),I&&(N.types[f]=I),S&&(N.ids[f]=S),N.values[f]=y},pushId:function(f,y,_){f==="BlockParam"?this.pushStackLiteral("blockParams["+y[0]+"].path["+y[1]+"]"+(_?" + "+JSON.stringify("."+_):"")):f==="PathExpression"?this.pushString(y):f==="SubExpression"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:t,compileChildren:function(f,y){for(var _=f.children,I=void 0,S=void 0,N=0,A=_.length;N<A;N++){I=_[N],S=new this.compiler;var b=this.matchExistingProgram(I);if(b==null){this.context.programs.push("");var B=this.context.programs.length;I.index=B,I.name="program"+B,this.context.programs[B]=S.compile(I,y,this.context,!this.precompile),this.context.decorators[B]=S.decorators,this.context.environments[B]=I,this.useDepths=this.useDepths||S.useDepths,this.useBlockParams=this.useBlockParams||S.useBlockParams,I.useDepths=this.useDepths,I.useBlockParams=this.useBlockParams}else I.index=b.index,I.name="program"+b.index,this.useDepths=this.useDepths||b.useDepths,this.useBlockParams=this.useBlockParams||b.useBlockParams}},matchExistingProgram:function(f){for(var y=0,_=this.context.environments.length;y<_;y++){var I=this.context.environments[y];if(I&&I.equals(f))return I}},programExpression:function(f){var y=this.environment.children[f],_=[y.index,"data",y.blockParams];return(this.useBlockParams||this.useDepths)&&_.push("blockParams"),this.useDepths&&_.push("depths"),"container.program("+_.join(", ")+")"},useRegister:function(f){this.registers[f]||(this.registers[f]=!0,this.registers.list.push(f))},push:function(f){return f instanceof a||(f=this.source.wrap(f)),this.inlineStack.push(f),f},pushStackLiteral:function(f){this.push(new a(f))},pushSource:function(f){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),f&&this.source.push(f)},replaceStack:function(f){var y=["("],_=void 0,I=void 0,S=void 0;if(!this.isInline())throw new h.default("replaceStack on non-inline");var N=this.popStack(!0);if(N instanceof a)_=[N.value],y=["(",_],S=!0;else{I=!0;var A=this.incrStack();y=["((",this.push(A)," = ",N,")"],_=this.topStack()}var b=f.call(this,_);S||this.popStack(),I&&this.stackSlot--,this.push(y.concat(b,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var f=this.inlineStack;this.inlineStack=[];for(var y=0,_=f.length;y<_;y++){var I=f[y];if(I instanceof a)this.compileStack.push(I);else{var S=this.incrStack();this.pushSource([S," = ",I,";"]),this.compileStack.push(S)}}},isInline:function(){return this.inlineStack.length},popStack:function(f){var y=this.isInline(),_=(y?this.inlineStack:this.compileStack).pop();if(!f&&_ instanceof a)return _.value;if(!y){if(!this.stackSlot)throw new h.default("Invalid stack pop");this.stackSlot--}return _},topStack:function(){var f=this.isInline()?this.inlineStack:this.compileStack,y=f[f.length-1];return y instanceof a?y.value:y},contextName:function(f){return this.useDepths&&f?"depths["+f+"]":"depth"+f},quotedString:function(f){return this.source.quotedString(f)},objectLiteral:function(f){return this.source.objectLiteral(f)},aliasable:function(f){var y=this.aliases[f];return y?(y.referenceCount++,y):(y=this.aliases[f]=this.source.wrap(f),y.aliasable=!0,y.referenceCount=1,y)},setupHelper:function(f,y,_){var I=[],S=this.setupHelperArgs(y,f,I,_),N=this.nameLookup("helpers",y,"helper"),A=this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})");return{params:I,paramsInit:S,name:N,callParams:[A].concat(I)}},setupParams:function(f,y,_){var I={},S=[],N=[],A=[],b=!_,B=void 0;b&&(_=[]),I.name=this.quotedString(f),I.hash=this.popStack(),this.trackIds&&(I.hashIds=this.popStack()),this.stringParams&&(I.hashTypes=this.popStack(),I.hashContexts=this.popStack());var E=this.popStack(),D=this.popStack();(D||E)&&(I.fn=D||"container.noop",I.inverse=E||"container.noop");for(var L=y;L--;)B=this.popStack(),_[L]=B,this.trackIds&&(A[L]=this.popStack()),this.stringParams&&(N[L]=this.popStack(),S[L]=this.popStack());return b&&(I.args=this.source.generateArray(_)),this.trackIds&&(I.ids=this.source.generateArray(A)),this.stringParams&&(I.types=this.source.generateArray(N),I.contexts=this.source.generateArray(S)),this.options.data&&(I.data="data"),this.useBlockParams&&(I.blockParams="blockParams"),I},setupHelperArgs:function(f,y,_,I){var S=this.setupParams(f,y,_);return S.loc=JSON.stringify(this.source.currentLocation),S=this.objectLiteral(S),I?(this.useRegister("options"),_.push("options"),["options=",S]):_?(_.push(S),""):S}},function(){for(var f="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),y=t.RESERVED_WORDS={},_=0,I=f.length;_<I;_++)y[f[_]]=!0}(),t.isValidJavaScriptVariableName=function(f){return!t.RESERVED_WORDS[f]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(f)},s.default=t,k.exports=s.default},function(k,s,c){"use strict";function a(r,d,h){if(u.isArray(r)){for(var i=[],m=0,g=r.length;m<g;m++)i.push(d.wrap(r[m],h));return i}return typeof r=="boolean"||typeof r=="number"?r+"":r}function t(r){this.srcFile=r,this.source=[]}var p=c(13).default;s.__esModule=!0;var u=c(5),l=void 0;try{}catch(r){}l||(l=function(r,d,h,i){this.src="",i&&this.add(i)},l.prototype={add:function(r){u.isArray(r)&&(r=r.join("")),this.src+=r},prepend:function(r){u.isArray(r)&&(r=r.join("")),this.src=r+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}}),t.prototype={isEmpty:function(){return!this.source.length},prepend:function(r,d){this.source.unshift(this.wrap(r,d))},push:function(r,d){this.source.push(this.wrap(r,d))},merge:function(){var r=this.empty();return this.each(function(d){r.add(["  ",d,`
`])}),r},each:function(r){for(var d=0,h=this.source.length;d<h;d++)r(this.source[d])},empty:function(){var r=this.currentLocation||{start:{}};return new l(r.start.line,r.start.column,this.srcFile)},wrap:function(r){var d=arguments.length<=1||arguments[1]===void 0?this.currentLocation||{start:{}}:arguments[1];return r instanceof l?r:(r=a(r,this,d),new l(d.start.line,d.start.column,this.srcFile,r))},functionCall:function(r,d,h){return h=this.generateList(h),this.wrap([r,d?"."+d+"(":"(",h,")"])},quotedString:function(r){return'"'+(r+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(r){var d=this,h=[];p(r).forEach(function(m){var g=a(r[m],d);g!=="undefined"&&h.push([d.quotedString(m),":",g])});var i=this.generateList(h);return i.prepend("{"),i.add("}"),i},generateList:function(r){for(var d=this.empty(),h=0,i=r.length;h<i;h++)h&&d.add(","),d.add(a(r[h],this));return d},generateArray:function(r){var d=this.generateList(r);return d.prepend("["),d.add("]"),d}},s.default=t,k.exports=s.default}])})},1610:(v,k,s)=>{var c;/*!
* Sizzle CSS Selector Engine v2.3.6
* https://sizzlejs.com/
*
* Copyright JS Foundation and other contributors
* Released under the MIT license
* https://js.foundation/
*
* Date: 2021-02-16
*/(function(a){var t,p,u,l,r,d,h,i,m,g,f,y,_,I,S,N,A,b,B,E="sizzle"+1*new Date,D=a.document,L=0,w=0,R=Ye(),O=Ye(),C=Ye(),U=Ye(),F=function(x,Y){return x===Y&&(f=!0),0},z={}.hasOwnProperty,j=[],q=j.pop,$=j.push,te=j.push,ie=j.slice,de=function(x,Y){for(var V=0,J=x.length;V<J;V++)if(x[V]===Y)return V;return-1},ne="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ce="[\\x20\\t\\r\\n\\f]",Pe="(?:\\\\[\\da-fA-F]{1,6}"+ce+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",xe="\\["+ce+"*("+Pe+")(?:"+ce+"*([*^$|!~]?=)"+ce+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Pe+"))|)"+ce+"*\\]",rn=":("+Pe+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+xe+")*)|.*)\\)|)",mn=new RegExp(ce+"+","g"),fn=new RegExp("^"+ce+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ce+"+$","g"),_n=new RegExp("^"+ce+"*,"+ce+"*"),An=new RegExp("^"+ce+"*([>+~]|"+ce+")"+ce+"*"),Ee=new RegExp(ce+"|>"),Nn=new RegExp(rn),Oe=new RegExp("^"+Pe+"$"),We={ID:new RegExp("^#("+Pe+")"),CLASS:new RegExp("^\\.("+Pe+")"),TAG:new RegExp("^("+Pe+"|[*])"),ATTR:new RegExp("^"+xe),PSEUDO:new RegExp("^"+rn),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ce+"*(even|odd|(([+-]|)(\\d*)n|)"+ce+"*(?:([+-]|)"+ce+"*(\\d+)|))"+ce+"*\\)|)","i"),bool:new RegExp("^(?:"+ne+")$","i"),needsContext:new RegExp("^"+ce+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ce+"*((?:-\\d)?\\d*)"+ce+"*\\)|)(?=[^-]|$)","i")},Un=/HTML$/i,Ce=/^(?:input|select|textarea|button)$/i,pe=/^h\d$/i,Ae=/^[^{]+\{\s*\[native \w/,Te=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,re=/[+~]/,_e=new RegExp("\\\\[\\da-fA-F]{1,6}"+ce+"?|\\\\([^\\r\\n\\f])","g"),me=function(x,Y){var V="0x"+x.slice(1)-65536;return Y||(V<0?String.fromCharCode(V+65536):String.fromCharCode(V>>10|55296,V&1023|56320))},Ie=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,Ve=function(x,Y){return Y?x==="\0"?"\uFFFD":x.slice(0,-1)+"\\"+x.charCodeAt(x.length-1).toString(16)+" ":"\\"+x},Ge=function(){y()},Xe=kn(function(x){return x.disabled===!0&&x.nodeName.toLowerCase()==="fieldset"},{dir:"parentNode",next:"legend"});try{te.apply(j=ie.call(D.childNodes),D.childNodes),j[D.childNodes.length].nodeType}catch(x){te={apply:j.length?function(Y,V){$.apply(Y,ie.call(V))}:function(Y,V){for(var J=Y.length,W=0;Y[J++]=V[W++];);Y.length=J-1}}}function Se(x,Y,V,J){var W,Z,ee,oe,ge,he,Ne,be=Y&&Y.ownerDocument,Re=Y?Y.nodeType:9;if(V=V||[],typeof x!="string"||!x||Re!==1&&Re!==9&&Re!==11)return V;if(!J&&(y(Y),Y=Y||_,S)){if(Re!==11&&(ge=Te.exec(x)))if(W=ge[1]){if(Re===9)if(ee=Y.getElementById(W)){if(ee.id===W)return V.push(ee),V}else return V;else if(be&&(ee=be.getElementById(W))&&B(Y,ee)&&ee.id===W)return V.push(ee),V}else{if(ge[2])return te.apply(V,Y.getElementsByTagName(x)),V;if((W=ge[3])&&p.getElementsByClassName&&Y.getElementsByClassName)return te.apply(V,Y.getElementsByClassName(W)),V}if(p.qsa&&!U[x+" "]&&(!N||!N.test(x))&&(Re!==1||Y.nodeName.toLowerCase()!=="object")){if(Ne=x,be=Y,Re===1&&(Ee.test(x)||An.test(x))){for(be=re.test(x)&&ct(Y.parentNode)||Y,(be!==Y||!p.scope)&&((oe=Y.getAttribute("id"))?oe=oe.replace(Ie,Ve):Y.setAttribute("id",oe=E)),he=d(x),Z=he.length;Z--;)he[Z]=(oe?"#"+oe:":scope")+" "+ht(he[Z]);Ne=he.join(",")}try{return te.apply(V,be.querySelectorAll(Ne)),V}catch($e){U(x,!0)}finally{oe===E&&Y.removeAttribute("id")}}}return i(x.replace(fn,"$1"),Y,V,J)}function Ye(){var x=[];function Y(V,J){return x.push(V+" ")>u.cacheLength&&delete Y[x.shift()],Y[V+" "]=J}return Y}function Qe(x){return x[E]=!0,x}function Ze(x){var Y=_.createElement("fieldset");try{return!!x(Y)}catch(V){return!1}finally{Y.parentNode&&Y.parentNode.removeChild(Y),Y=null}}function Wn(x,Y){for(var V=x.split("|"),J=V.length;J--;)u.attrHandle[V[J]]=Y}function xn(x,Y){var V=Y&&x,J=V&&x.nodeType===1&&Y.nodeType===1&&x.sourceIndex-Y.sourceIndex;if(J)return J;if(V){for(;V=V.nextSibling;)if(V===Y)return-1}return x?1:-1}function Tn(x){return function(Y){var V=Y.nodeName.toLowerCase();return V==="input"&&Y.type===x}}function bt(x){return function(Y){var V=Y.nodeName.toLowerCase();return(V==="input"||V==="button")&&Y.type===x}}function rt(x){return function(Y){return"form"in Y?Y.parentNode&&Y.disabled===!1?"label"in Y?"label"in Y.parentNode?Y.parentNode.disabled===x:Y.disabled===x:Y.isDisabled===x||Y.isDisabled!==!x&&Xe(Y)===x:Y.disabled===x:"label"in Y?Y.disabled===x:!1}}function Hn(x){return Qe(function(Y){return Y=+Y,Qe(function(V,J){for(var W,Z=x([],V.length,Y),ee=Z.length;ee--;)V[W=Z[ee]]&&(V[W]=!(J[W]=V[W]))})})}function ct(x){return x&&typeof x.getElementsByTagName!="undefined"&&x}p=Se.support={},r=Se.isXML=function(x){var Y=x&&x.namespaceURI,V=x&&(x.ownerDocument||x).documentElement;return!Un.test(Y||V&&V.nodeName||"HTML")},y=Se.setDocument=function(x){var Y,V,J=x?x.ownerDocument||x:D;return J==_||J.nodeType!==9||!J.documentElement||(_=J,I=_.documentElement,S=!r(_),D!=_&&(V=_.defaultView)&&V.top!==V&&(V.addEventListener?V.addEventListener("unload",Ge,!1):V.attachEvent&&V.attachEvent("onunload",Ge)),p.scope=Ze(function(W){return I.appendChild(W).appendChild(_.createElement("div")),typeof W.querySelectorAll!="undefined"&&!W.querySelectorAll(":scope fieldset div").length}),p.attributes=Ze(function(W){return W.className="i",!W.getAttribute("className")}),p.getElementsByTagName=Ze(function(W){return W.appendChild(_.createComment("")),!W.getElementsByTagName("*").length}),p.getElementsByClassName=Ae.test(_.getElementsByClassName),p.getById=Ze(function(W){return I.appendChild(W).id=E,!_.getElementsByName||!_.getElementsByName(E).length}),p.getById?(u.filter.ID=function(W){var Z=W.replace(_e,me);return function(ee){return ee.getAttribute("id")===Z}},u.find.ID=function(W,Z){if(typeof Z.getElementById!="undefined"&&S){var ee=Z.getElementById(W);return ee?[ee]:[]}}):(u.filter.ID=function(W){var Z=W.replace(_e,me);return function(ee){var oe=typeof ee.getAttributeNode!="undefined"&&ee.getAttributeNode("id");return oe&&oe.value===Z}},u.find.ID=function(W,Z){if(typeof Z.getElementById!="undefined"&&S){var ee,oe,ge,he=Z.getElementById(W);if(he){if(ee=he.getAttributeNode("id"),ee&&ee.value===W)return[he];for(ge=Z.getElementsByName(W),oe=0;he=ge[oe++];)if(ee=he.getAttributeNode("id"),ee&&ee.value===W)return[he]}return[]}}),u.find.TAG=p.getElementsByTagName?function(W,Z){if(typeof Z.getElementsByTagName!="undefined")return Z.getElementsByTagName(W);if(p.qsa)return Z.querySelectorAll(W)}:function(W,Z){var ee,oe=[],ge=0,he=Z.getElementsByTagName(W);if(W==="*"){for(;ee=he[ge++];)ee.nodeType===1&&oe.push(ee);return oe}return he},u.find.CLASS=p.getElementsByClassName&&function(W,Z){if(typeof Z.getElementsByClassName!="undefined"&&S)return Z.getElementsByClassName(W)},A=[],N=[],(p.qsa=Ae.test(_.querySelectorAll))&&(Ze(function(W){var Z;I.appendChild(W).innerHTML="<a id='"+E+"'></a><select id='"+E+"-\r\\' msallowcapture=''><option selected=''></option></select>",W.querySelectorAll("[msallowcapture^='']").length&&N.push("[*^$]="+ce+`*(?:''|"")`),W.querySelectorAll("[selected]").length||N.push("\\["+ce+"*(?:value|"+ne+")"),W.querySelectorAll("[id~="+E+"-]").length||N.push("~="),Z=_.createElement("input"),Z.setAttribute("name",""),W.appendChild(Z),W.querySelectorAll("[name='']").length||N.push("\\["+ce+"*name"+ce+"*="+ce+`*(?:''|"")`),W.querySelectorAll(":checked").length||N.push(":checked"),W.querySelectorAll("a#"+E+"+*").length||N.push(".#.+[+~]"),W.querySelectorAll("\\\f"),N.push("[\\r\\n\\f]")}),Ze(function(W){W.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var Z=_.createElement("input");Z.setAttribute("type","hidden"),W.appendChild(Z).setAttribute("name","D"),W.querySelectorAll("[name=d]").length&&N.push("name"+ce+"*[*^$|!~]?="),W.querySelectorAll(":enabled").length!==2&&N.push(":enabled",":disabled"),I.appendChild(W).disabled=!0,W.querySelectorAll(":disabled").length!==2&&N.push(":enabled",":disabled"),W.querySelectorAll("*,:x"),N.push(",.*:")})),(p.matchesSelector=Ae.test(b=I.matches||I.webkitMatchesSelector||I.mozMatchesSelector||I.oMatchesSelector||I.msMatchesSelector))&&Ze(function(W){p.disconnectedMatch=b.call(W,"*"),b.call(W,"[s!='']:x"),A.push("!=",rn)}),N=N.length&&new RegExp(N.join("|")),A=A.length&&new RegExp(A.join("|")),Y=Ae.test(I.compareDocumentPosition),B=Y||Ae.test(I.contains)?function(W,Z){var ee=W.nodeType===9?W.documentElement:W,oe=Z&&Z.parentNode;return W===oe||!!(oe&&oe.nodeType===1&&(ee.contains?ee.contains(oe):W.compareDocumentPosition&&W.compareDocumentPosition(oe)&16))}:function(W,Z){if(Z){for(;Z=Z.parentNode;)if(Z===W)return!0}return!1},F=Y?function(W,Z){if(W===Z)return f=!0,0;var ee=!W.compareDocumentPosition-!Z.compareDocumentPosition;return ee||(ee=(W.ownerDocument||W)==(Z.ownerDocument||Z)?W.compareDocumentPosition(Z):1,ee&1||!p.sortDetached&&Z.compareDocumentPosition(W)===ee?W==_||W.ownerDocument==D&&B(D,W)?-1:Z==_||Z.ownerDocument==D&&B(D,Z)?1:g?de(g,W)-de(g,Z):0:ee&4?-1:1)}:function(W,Z){if(W===Z)return f=!0,0;var ee,oe=0,ge=W.parentNode,he=Z.parentNode,Ne=[W],be=[Z];if(!ge||!he)return W==_?-1:Z==_?1:ge?-1:he?1:g?de(g,W)-de(g,Z):0;if(ge===he)return xn(W,Z);for(ee=W;ee=ee.parentNode;)Ne.unshift(ee);for(ee=Z;ee=ee.parentNode;)be.unshift(ee);for(;Ne[oe]===be[oe];)oe++;return oe?xn(Ne[oe],be[oe]):Ne[oe]==D?-1:be[oe]==D?1:0}),_},Se.matches=function(x,Y){return Se(x,null,null,Y)},Se.matchesSelector=function(x,Y){if(y(x),p.matchesSelector&&S&&!U[Y+" "]&&(!A||!A.test(Y))&&(!N||!N.test(Y)))try{var V=b.call(x,Y);if(V||p.disconnectedMatch||x.document&&x.document.nodeType!==11)return V}catch(J){U(Y,!0)}return Se(Y,_,null,[x]).length>0},Se.contains=function(x,Y){return(x.ownerDocument||x)!=_&&y(x),B(x,Y)},Se.attr=function(x,Y){(x.ownerDocument||x)!=_&&y(x);var V=u.attrHandle[Y.toLowerCase()],J=V&&z.call(u.attrHandle,Y.toLowerCase())?V(x,Y,!S):void 0;return J!==void 0?J:p.attributes||!S?x.getAttribute(Y):(J=x.getAttributeNode(Y))&&J.specified?J.value:null},Se.escape=function(x){return(x+"").replace(Ie,Ve)},Se.error=function(x){throw new Error("Syntax error, unrecognized expression: "+x)},Se.uniqueSort=function(x){var Y,V=[],J=0,W=0;if(f=!p.detectDuplicates,g=!p.sortStable&&x.slice(0),x.sort(F),f){for(;Y=x[W++];)Y===x[W]&&(J=V.push(W));for(;J--;)x.splice(V[J],1)}return g=null,x},l=Se.getText=function(x){var Y,V="",J=0,W=x.nodeType;if(W){if(W===1||W===9||W===11){if(typeof x.textContent=="string")return x.textContent;for(x=x.firstChild;x;x=x.nextSibling)V+=l(x)}else if(W===3||W===4)return x.nodeValue}else for(;Y=x[J++];)V+=l(Y);return V},u=Se.selectors={cacheLength:50,createPseudo:Qe,match:We,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(x){return x[1]=x[1].replace(_e,me),x[3]=(x[3]||x[4]||x[5]||"").replace(_e,me),x[2]==="~="&&(x[3]=" "+x[3]+" "),x.slice(0,4)},CHILD:function(x){return x[1]=x[1].toLowerCase(),x[1].slice(0,3)==="nth"?(x[3]||Se.error(x[0]),x[4]=+(x[4]?x[5]+(x[6]||1):2*(x[3]==="even"||x[3]==="odd")),x[5]=+(x[7]+x[8]||x[3]==="odd")):x[3]&&Se.error(x[0]),x},PSEUDO:function(x){var Y,V=!x[6]&&x[2];return We.CHILD.test(x[0])?null:(x[3]?x[2]=x[4]||x[5]||"":V&&Nn.test(V)&&(Y=d(V,!0))&&(Y=V.indexOf(")",V.length-Y)-V.length)&&(x[0]=x[0].slice(0,Y),x[2]=V.slice(0,Y)),x.slice(0,3))}},filter:{TAG:function(x){var Y=x.replace(_e,me).toLowerCase();return x==="*"?function(){return!0}:function(V){return V.nodeName&&V.nodeName.toLowerCase()===Y}},CLASS:function(x){var Y=R[x+" "];return Y||(Y=new RegExp("(^|"+ce+")"+x+"("+ce+"|$)"))&&R(x,function(V){return Y.test(typeof V.className=="string"&&V.className||typeof V.getAttribute!="undefined"&&V.getAttribute("class")||"")})},ATTR:function(x,Y,V){return function(J){var W=Se.attr(J,x);return W==null?Y==="!=":Y?(W+="",Y==="="?W===V:Y==="!="?W!==V:Y==="^="?V&&W.indexOf(V)===0:Y==="*="?V&&W.indexOf(V)>-1:Y==="$="?V&&W.slice(-V.length)===V:Y==="~="?(" "+W.replace(mn," ")+" ").indexOf(V)>-1:Y==="|="?W===V||W.slice(0,V.length+1)===V+"-":!1):!0}},CHILD:function(x,Y,V,J,W){var Z=x.slice(0,3)!=="nth",ee=x.slice(-4)!=="last",oe=Y==="of-type";return J===1&&W===0?function(ge){return!!ge.parentNode}:function(ge,he,Ne){var be,Re,$e,ke,Ke,yn,En=Z!==ee?"nextSibling":"previousSibling",sn=ge.parentNode,Vn=oe&&ge.nodeName.toLowerCase(),Ot=!Ne&&!oe,vn=!1;if(sn){if(Z){for(;En;){for(ke=ge;ke=ke[En];)if(oe?ke.nodeName.toLowerCase()===Vn:ke.nodeType===1)return!1;yn=En=x==="only"&&!yn&&"nextSibling"}return!0}if(yn=[ee?sn.firstChild:sn.lastChild],ee&&Ot){for(ke=sn,$e=ke[E]||(ke[E]={}),Re=$e[ke.uniqueID]||($e[ke.uniqueID]={}),be=Re[x]||[],Ke=be[0]===L&&be[1],vn=Ke&&be[2],ke=Ke&&sn.childNodes[Ke];ke=++Ke&&ke&&ke[En]||(vn=Ke=0)||yn.pop();)if(ke.nodeType===1&&++vn&&ke===ge){Re[x]=[L,Ke,vn];break}}else if(Ot&&(ke=ge,$e=ke[E]||(ke[E]={}),Re=$e[ke.uniqueID]||($e[ke.uniqueID]={}),be=Re[x]||[],Ke=be[0]===L&&be[1],vn=Ke),vn===!1)for(;(ke=++Ke&&ke&&ke[En]||(vn=Ke=0)||yn.pop())&&!((oe?ke.nodeName.toLowerCase()===Vn:ke.nodeType===1)&&++vn&&(Ot&&($e=ke[E]||(ke[E]={}),Re=$e[ke.uniqueID]||($e[ke.uniqueID]={}),Re[x]=[L,vn]),ke===ge)););return vn-=W,vn===J||vn%J===0&&vn/J>=0}}},PSEUDO:function(x,Y){var V,J=u.pseudos[x]||u.setFilters[x.toLowerCase()]||Se.error("unsupported pseudo: "+x);return J[E]?J(Y):J.length>1?(V=[x,x,"",Y],u.setFilters.hasOwnProperty(x.toLowerCase())?Qe(function(W,Z){for(var ee,oe=J(W,Y),ge=oe.length;ge--;)ee=de(W,oe[ge]),W[ee]=!(Z[ee]=oe[ge])}):function(W){return J(W,0,V)}):J}},pseudos:{not:Qe(function(x){var Y=[],V=[],J=h(x.replace(fn,"$1"));return J[E]?Qe(function(W,Z,ee,oe){for(var ge,he=J(W,null,oe,[]),Ne=W.length;Ne--;)(ge=he[Ne])&&(W[Ne]=!(Z[Ne]=ge))}):function(W,Z,ee){return Y[0]=W,J(Y,null,ee,V),Y[0]=null,!V.pop()}}),has:Qe(function(x){return function(Y){return Se(x,Y).length>0}}),contains:Qe(function(x){return x=x.replace(_e,me),function(Y){return(Y.textContent||l(Y)).indexOf(x)>-1}}),lang:Qe(function(x){return Oe.test(x||"")||Se.error("unsupported lang: "+x),x=x.replace(_e,me).toLowerCase(),function(Y){var V;do if(V=S?Y.lang:Y.getAttribute("xml:lang")||Y.getAttribute("lang"))return V=V.toLowerCase(),V===x||V.indexOf(x+"-")===0;while((Y=Y.parentNode)&&Y.nodeType===1);return!1}}),target:function(x){var Y=a.location&&a.location.hash;return Y&&Y.slice(1)===x.id},root:function(x){return x===I},focus:function(x){return x===_.activeElement&&(!_.hasFocus||_.hasFocus())&&!!(x.type||x.href||~x.tabIndex)},enabled:rt(!1),disabled:rt(!0),checked:function(x){var Y=x.nodeName.toLowerCase();return Y==="input"&&!!x.checked||Y==="option"&&!!x.selected},selected:function(x){return x.parentNode&&x.parentNode.selectedIndex,x.selected===!0},empty:function(x){for(x=x.firstChild;x;x=x.nextSibling)if(x.nodeType<6)return!1;return!0},parent:function(x){return!u.pseudos.empty(x)},header:function(x){return pe.test(x.nodeName)},input:function(x){return Ce.test(x.nodeName)},button:function(x){var Y=x.nodeName.toLowerCase();return Y==="input"&&x.type==="button"||Y==="button"},text:function(x){var Y;return x.nodeName.toLowerCase()==="input"&&x.type==="text"&&((Y=x.getAttribute("type"))==null||Y.toLowerCase()==="text")},first:Hn(function(){return[0]}),last:Hn(function(x,Y){return[Y-1]}),eq:Hn(function(x,Y,V){return[V<0?V+Y:V]}),even:Hn(function(x,Y){for(var V=0;V<Y;V+=2)x.push(V);return x}),odd:Hn(function(x,Y){for(var V=1;V<Y;V+=2)x.push(V);return x}),lt:Hn(function(x,Y,V){for(var J=V<0?V+Y:V>Y?Y:V;--J>=0;)x.push(J);return x}),gt:Hn(function(x,Y,V){for(var J=V<0?V+Y:V;++J<Y;)x.push(J);return x})}},u.pseudos.nth=u.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})u.pseudos[t]=Tn(t);for(t in{submit:!0,reset:!0})u.pseudos[t]=bt(t);function Cn(){}Cn.prototype=u.filters=u.pseudos,u.setFilters=new Cn,d=Se.tokenize=function(x,Y){var V,J,W,Z,ee,oe,ge,he=O[x+" "];if(he)return Y?0:he.slice(0);for(ee=x,oe=[],ge=u.preFilter;ee;){(!V||(J=_n.exec(ee)))&&(J&&(ee=ee.slice(J[0].length)||ee),oe.push(W=[])),V=!1,(J=An.exec(ee))&&(V=J.shift(),W.push({value:V,type:J[0].replace(fn," ")}),ee=ee.slice(V.length));for(Z in u.filter)(J=We[Z].exec(ee))&&(!ge[Z]||(J=ge[Z](J)))&&(V=J.shift(),W.push({value:V,type:Z,matches:J}),ee=ee.slice(V.length));if(!V)break}return Y?ee.length:ee?Se.error(x):O(x,oe).slice(0)};function ht(x){for(var Y=0,V=x.length,J="";Y<V;Y++)J+=x[Y].value;return J}function kn(x,Y,V){var J=Y.dir,W=Y.next,Z=W||J,ee=V&&Z==="parentNode",oe=w++;return Y.first?function(ge,he,Ne){for(;ge=ge[J];)if(ge.nodeType===1||ee)return x(ge,he,Ne);return!1}:function(ge,he,Ne){var be,Re,$e,ke=[L,oe];if(Ne){for(;ge=ge[J];)if((ge.nodeType===1||ee)&&x(ge,he,Ne))return!0}else for(;ge=ge[J];)if(ge.nodeType===1||ee)if($e=ge[E]||(ge[E]={}),Re=$e[ge.uniqueID]||($e[ge.uniqueID]={}),W&&W===ge.nodeName.toLowerCase())ge=ge[J]||ge;else{if((be=Re[Z])&&be[0]===L&&be[1]===oe)return ke[2]=be[2];if(Re[Z]=ke,ke[2]=x(ge,he,Ne))return!0}return!1}}function Bt(x){return x.length>1?function(Y,V,J){for(var W=x.length;W--;)if(!x[W](Y,V,J))return!1;return!0}:x[0]}function Mt(x,Y,V){for(var J=0,W=Y.length;J<W;J++)Se(x,Y[J],V);return V}function dt(x,Y,V,J,W){for(var Z,ee=[],oe=0,ge=x.length,he=Y!=null;oe<ge;oe++)(Z=x[oe])&&(!V||V(Z,J,W))&&(ee.push(Z),he&&Y.push(oe));return ee}function jt(x,Y,V,J,W,Z){return J&&!J[E]&&(J=jt(J)),W&&!W[E]&&(W=jt(W,Z)),Qe(function(ee,oe,ge,he){var Ne,be,Re,$e=[],ke=[],Ke=oe.length,yn=ee||Mt(Y||"*",ge.nodeType?[ge]:ge,[]),En=x&&(ee||!Y)?dt(yn,$e,x,ge,he):yn,sn=V?W||(ee?x:Ke||J)?[]:oe:En;if(V&&V(En,sn,ge,he),J)for(Ne=dt(sn,ke),J(Ne,[],ge,he),be=Ne.length;be--;)(Re=Ne[be])&&(sn[ke[be]]=!(En[ke[be]]=Re));if(ee){if(W||x){if(W){for(Ne=[],be=sn.length;be--;)(Re=sn[be])&&Ne.push(En[be]=Re);W(null,sn=[],Ne,he)}for(be=sn.length;be--;)(Re=sn[be])&&(Ne=W?de(ee,Re):$e[be])>-1&&(ee[Ne]=!(oe[Ne]=Re))}}else sn=dt(sn===oe?sn.splice(Ke,sn.length):sn),W?W(null,oe,sn,he):te.apply(oe,sn)})}function At(x){for(var Y,V,J,W=x.length,Z=u.relative[x[0].type],ee=Z||u.relative[" "],oe=Z?1:0,ge=kn(function(be){return be===Y},ee,!0),he=kn(function(be){return de(Y,be)>-1},ee,!0),Ne=[function(be,Re,$e){var ke=!Z&&($e||Re!==m)||((Y=Re).nodeType?ge(be,Re,$e):he(be,Re,$e));return Y=null,ke}];oe<W;oe++)if(V=u.relative[x[oe].type])Ne=[kn(Bt(Ne),V)];else{if(V=u.filter[x[oe].type].apply(null,x[oe].matches),V[E]){for(J=++oe;J<W&&!u.relative[x[J].type];J++);return jt(oe>1&&Bt(Ne),oe>1&&ht(x.slice(0,oe-1).concat({value:x[oe-2].type===" "?"*":""})).replace(fn,"$1"),V,oe<J&&At(x.slice(oe,J)),J<W&&At(x=x.slice(J)),J<W&&ht(x))}Ne.push(V)}return Bt(Ne)}function pa(x,Y){var V=Y.length>0,J=x.length>0,W=function(Z,ee,oe,ge,he){var Ne,be,Re,$e=0,ke="0",Ke=Z&&[],yn=[],En=m,sn=Z||J&&u.find.TAG("*",he),Vn=L+=En==null?1:Math.random()||.1,Ot=sn.length;for(he&&(m=ee==_||ee||he);ke!==Ot&&(Ne=sn[ke])!=null;ke++){if(J&&Ne){for(be=0,!ee&&Ne.ownerDocument!=_&&(y(Ne),oe=!S);Re=x[be++];)if(Re(Ne,ee||_,oe)){ge.push(Ne);break}he&&(L=Vn)}V&&((Ne=!Re&&Ne)&&$e--,Z&&Ke.push(Ne))}if($e+=ke,V&&ke!==$e){for(be=0;Re=Y[be++];)Re(Ke,yn,ee,oe);if(Z){if($e>0)for(;ke--;)Ke[ke]||yn[ke]||(yn[ke]=q.call(ge));yn=dt(yn)}te.apply(ge,yn),he&&!Z&&yn.length>0&&$e+Y.length>1&&Se.uniqueSort(ge)}return he&&(L=Vn,m=En),Ke};return V?Qe(W):W}h=Se.compile=function(x,Y){var V,J=[],W=[],Z=C[x+" "];if(!Z){for(Y||(Y=d(x)),V=Y.length;V--;)Z=At(Y[V]),Z[E]?J.push(Z):W.push(Z);Z=C(x,pa(W,J)),Z.selector=x}return Z},i=Se.select=function(x,Y,V,J){var W,Z,ee,oe,ge,he=typeof x=="function"&&x,Ne=!J&&d(x=he.selector||x);if(V=V||[],Ne.length===1){if(Z=Ne[0]=Ne[0].slice(0),Z.length>2&&(ee=Z[0]).type==="ID"&&Y.nodeType===9&&S&&u.relative[Z[1].type]){if(Y=(u.find.ID(ee.matches[0].replace(_e,me),Y)||[])[0],Y)he&&(Y=Y.parentNode);else return V;x=x.slice(Z.shift().value.length)}for(W=We.needsContext.test(x)?0:Z.length;W--&&(ee=Z[W],!u.relative[oe=ee.type]);)if((ge=u.find[oe])&&(J=ge(ee.matches[0].replace(_e,me),re.test(Z[0].type)&&ct(Y.parentNode)||Y))){if(Z.splice(W,1),x=J.length&&ht(Z),!x)return te.apply(V,J),V;break}}return(he||h(x,Ne))(J,Y,!S,V,!Y||re.test(x)&&ct(Y.parentNode)||Y),V},p.sortStable=E.split("").sort(F).join("")===E,p.detectDuplicates=!!f,y(),p.sortDetached=Ze(function(x){return x.compareDocumentPosition(_.createElement("fieldset"))&1}),Ze(function(x){return x.innerHTML="<a href='#'></a>",x.firstChild.getAttribute("href")==="#"})||Wn("type|href|height|width",function(x,Y,V){if(!V)return x.getAttribute(Y,Y.toLowerCase()==="type"?1:2)}),(!p.attributes||!Ze(function(x){return x.innerHTML="<input/>",x.firstChild.setAttribute("value",""),x.firstChild.getAttribute("value")===""}))&&Wn("value",function(x,Y,V){if(!V&&x.nodeName.toLowerCase()==="input")return x.defaultValue}),Ze(function(x){return x.getAttribute("disabled")==null})||Wn(ne,function(x,Y,V){var J;if(!V)return x[Y]===!0?Y.toLowerCase():(J=x.getAttributeNode(Y))&&J.specified?J.value:null});var Gt=a.Sizzle;Se.noConflict=function(){return a.Sizzle===Se&&(a.Sizzle=Gt),Se},c=function(){return Se}.call(k,s,k,v),c!==void 0&&(v.exports=c)})(window)},5514:(v,k,s)=>{var c,a;c=[s(927),s(2374),s(6435),s(4377),s(3600),s(5503),s(4555),s(5765),s(6270),s(1085),s(4049),s(6844)],a=function(t,p,u,l,r,d,h){"use strict";var i=/%20/g,m=/#.*$/,g=/([?&])_=[^&]*/,f=/^(.*?):[ \t]*([^\r\n]*)$/mg,y=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,_=/^(?:GET|HEAD)$/,I=/^\/\//,S={},N={},A="*/".concat("*"),b=p.createElement("a");b.href=r.href;function B(R){return function(O,C){typeof O!="string"&&(C=O,O="*");var U,F=0,z=O.toLowerCase().match(l)||[];if(u(C))for(;U=z[F++];)U[0]==="+"?(U=U.slice(1)||"*",(R[U]=R[U]||[]).unshift(C)):(R[U]=R[U]||[]).push(C)}}function E(R,O,C,U){var F={},z=R===N;function j(q){var $;return F[q]=!0,t.each(R[q]||[],function(te,ie){var de=ie(O,C,U);if(typeof de=="string"&&!z&&!F[de])return O.dataTypes.unshift(de),j(de),!1;if(z)return!($=de)}),$}return j(O.dataTypes[0])||!F["*"]&&j("*")}function D(R,O){var C,U,F=t.ajaxSettings.flatOptions||{};for(C in O)O[C]!==void 0&&((F[C]?R:U||(U={}))[C]=O[C]);return U&&t.extend(!0,R,U),R}function L(R,O,C){for(var U,F,z,j,q=R.contents,$=R.dataTypes;$[0]==="*";)$.shift(),U===void 0&&(U=R.mimeType||O.getResponseHeader("Content-Type"));if(U){for(F in q)if(q[F]&&q[F].test(U)){$.unshift(F);break}}if($[0]in C)z=$[0];else{for(F in C){if(!$[0]||R.converters[F+" "+$[0]]){z=F;break}j||(j=F)}z=z||j}if(z)return z!==$[0]&&$.unshift(z),C[z]}function w(R,O,C,U){var F,z,j,q,$,te={},ie=R.dataTypes.slice();if(ie[1])for(j in R.converters)te[j.toLowerCase()]=R.converters[j];for(z=ie.shift();z;)if(R.responseFields[z]&&(C[R.responseFields[z]]=O),!$&&U&&R.dataFilter&&(O=R.dataFilter(O,R.dataType)),$=z,z=ie.shift(),z){if(z==="*")z=$;else if($!=="*"&&$!==z){if(j=te[$+" "+z]||te["* "+z],!j){for(F in te)if(q=F.split(" "),q[1]===z&&(j=te[$+" "+q[0]]||te["* "+q[0]],j)){j===!0?j=te[F]:te[F]!==!0&&(z=q[0],ie.unshift(q[1]));break}}if(j!==!0)if(j&&R.throws)O=j(O);else try{O=j(O)}catch(de){return{state:"parsererror",error:j?de:"No conversion from "+$+" to "+z}}}}return{state:"success",data:O}}return t.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:r.href,type:"GET",isLocal:y.test(r.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":A,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":t.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(R,O){return O?D(D(R,t.ajaxSettings),O):D(t.ajaxSettings,R)},ajaxPrefilter:B(S),ajaxTransport:B(N),ajax:function(R,O){typeof R=="object"&&(O=R,R=void 0),O=O||{};var C,U,F,z,j,q,$,te,ie,de,ne=t.ajaxSetup({},O),ce=ne.context||ne,Pe=ne.context&&(ce.nodeType||ce.jquery)?t(ce):t.event,xe=t.Deferred(),rn=t.Callbacks("once memory"),mn=ne.statusCode||{},fn={},_n={},An="canceled",Ee={readyState:0,getResponseHeader:function(Oe){var We;if($){if(!z)for(z={};We=f.exec(F);)z[We[1].toLowerCase()+" "]=(z[We[1].toLowerCase()+" "]||[]).concat(We[2]);We=z[Oe.toLowerCase()+" "]}return We==null?null:We.join(", ")},getAllResponseHeaders:function(){return $?F:null},setRequestHeader:function(Oe,We){return $==null&&(Oe=_n[Oe.toLowerCase()]=_n[Oe.toLowerCase()]||Oe,fn[Oe]=We),this},overrideMimeType:function(Oe){return $==null&&(ne.mimeType=Oe),this},statusCode:function(Oe){var We;if(Oe)if($)Ee.always(Oe[Ee.status]);else for(We in Oe)mn[We]=[mn[We],Oe[We]];return this},abort:function(Oe){var We=Oe||An;return C&&C.abort(We),Nn(0,We),this}};if(xe.promise(Ee),ne.url=((R||ne.url||r.href)+"").replace(I,r.protocol+"//"),ne.type=O.method||O.type||ne.method||ne.type,ne.dataTypes=(ne.dataType||"*").toLowerCase().match(l)||[""],ne.crossDomain==null){q=p.createElement("a");try{q.href=ne.url,q.href=q.href,ne.crossDomain=b.protocol+"//"+b.host!=q.protocol+"//"+q.host}catch(Oe){ne.crossDomain=!0}}if(ne.data&&ne.processData&&typeof ne.data!="string"&&(ne.data=t.param(ne.data,ne.traditional)),E(S,ne,O,Ee),$)return Ee;te=t.event&&ne.global,te&&t.active++===0&&t.event.trigger("ajaxStart"),ne.type=ne.type.toUpperCase(),ne.hasContent=!_.test(ne.type),U=ne.url.replace(m,""),ne.hasContent?ne.data&&ne.processData&&(ne.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(ne.data=ne.data.replace(i,"+")):(de=ne.url.slice(U.length),ne.data&&(ne.processData||typeof ne.data=="string")&&(U+=(h.test(U)?"&":"?")+ne.data,delete ne.data),ne.cache===!1&&(U=U.replace(g,"$1"),de=(h.test(U)?"&":"?")+"_="+d.guid+++de),ne.url=U+de),ne.ifModified&&(t.lastModified[U]&&Ee.setRequestHeader("If-Modified-Since",t.lastModified[U]),t.etag[U]&&Ee.setRequestHeader("If-None-Match",t.etag[U])),(ne.data&&ne.hasContent&&ne.contentType!==!1||O.contentType)&&Ee.setRequestHeader("Content-Type",ne.contentType),Ee.setRequestHeader("Accept",ne.dataTypes[0]&&ne.accepts[ne.dataTypes[0]]?ne.accepts[ne.dataTypes[0]]+(ne.dataTypes[0]!=="*"?", "+A+"; q=0.01":""):ne.accepts["*"]);for(ie in ne.headers)Ee.setRequestHeader(ie,ne.headers[ie]);if(ne.beforeSend&&(ne.beforeSend.call(ce,Ee,ne)===!1||$))return Ee.abort();if(An="abort",rn.add(ne.complete),Ee.done(ne.success),Ee.fail(ne.error),C=E(N,ne,O,Ee),!C)Nn(-1,"No Transport");else{if(Ee.readyState=1,te&&Pe.trigger("ajaxSend",[Ee,ne]),$)return Ee;ne.async&&ne.timeout>0&&(j=window.setTimeout(function(){Ee.abort("timeout")},ne.timeout));try{$=!1,C.send(fn,Nn)}catch(Oe){if($)throw Oe;Nn(-1,Oe)}}function Nn(Oe,We,Un,Ce){var pe,Ae,Te,re,_e,me=We;$||($=!0,j&&window.clearTimeout(j),C=void 0,F=Ce||"",Ee.readyState=Oe>0?4:0,pe=Oe>=200&&Oe<300||Oe===304,Un&&(re=L(ne,Ee,Un)),!pe&&t.inArray("script",ne.dataTypes)>-1&&t.inArray("json",ne.dataTypes)<0&&(ne.converters["text script"]=function(){}),re=w(ne,re,Ee,pe),pe?(ne.ifModified&&(_e=Ee.getResponseHeader("Last-Modified"),_e&&(t.lastModified[U]=_e),_e=Ee.getResponseHeader("etag"),_e&&(t.etag[U]=_e)),Oe===204||ne.type==="HEAD"?me="nocontent":Oe===304?me="notmodified":(me=re.state,Ae=re.data,Te=re.error,pe=!Te)):(Te=me,(Oe||!me)&&(me="error",Oe<0&&(Oe=0))),Ee.status=Oe,Ee.statusText=(We||me)+"",pe?xe.resolveWith(ce,[Ae,me,Ee]):xe.rejectWith(ce,[Ee,me,Te]),Ee.statusCode(mn),mn=void 0,te&&Pe.trigger(pe?"ajaxSuccess":"ajaxError",[Ee,ne,pe?Ae:Te]),rn.fireWith(ce,[Ee,me]),te&&(Pe.trigger("ajaxComplete",[Ee,ne]),--t.active||t.event.trigger("ajaxStop")))}return Ee},getJSON:function(R,O,C){return t.get(R,O,C,"json")},getScript:function(R,O){return t.get(R,void 0,O,"script")}}),t.each(["get","post"],function(R,O){t[O]=function(C,U,F,z){return u(U)&&(z=z||F,F=U,U=void 0),t.ajax(t.extend({url:C,type:O,dataType:z,data:U,success:F},t.isPlainObject(C)&&C))}}),t.ajaxPrefilter(function(R){var O;for(O in R.headers)O.toLowerCase()==="content-type"&&(R.contentType=R.headers[O]||"")}),t}.apply(k,c),a!==void 0&&(v.exports=a)},433:(v,k,s)=>{var c,a;c=[s(927),s(6435),s(5503),s(4555),s(5514)],a=function(t,p,u,l){"use strict";var r=[],d=/(=)\?(?=&|$)|\?\?/;t.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var h=r.pop()||t.expando+"_"+u.guid++;return this[h]=!0,h}}),t.ajaxPrefilter("json jsonp",function(h,i,m){var g,f,y,_=h.jsonp!==!1&&(d.test(h.url)?"url":typeof h.data=="string"&&(h.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&d.test(h.data)&&"data");if(_||h.dataTypes[0]==="jsonp")return g=h.jsonpCallback=p(h.jsonpCallback)?h.jsonpCallback():h.jsonpCallback,_?h[_]=h[_].replace(d,"$1"+g):h.jsonp!==!1&&(h.url+=(l.test(h.url)?"&":"?")+h.jsonp+"="+g),h.converters["script json"]=function(){return y||t.error(g+" was not called"),y[0]},h.dataTypes[0]="json",f=window[g],window[g]=function(){y=arguments},m.always(function(){f===void 0?t(window).removeProp(g):window[g]=f,h[g]&&(h.jsonpCallback=i.jsonpCallback,r.push(g)),y&&p(f)&&f(y[0]),y=f=void 0}),"script"})}.apply(k,c),a!==void 0&&(v.exports=a)},4744:(v,k,s)=>{var c,a;c=[s(927),s(7494),s(6435),s(2695),s(5514),s(177),s(3834),s(4598)],a=function(t,p,u){"use strict";t.fn.load=function(l,r,d){var h,i,m,g=this,f=l.indexOf(" ");return f>-1&&(h=p(l.slice(f)),l=l.slice(0,f)),u(r)?(d=r,r=void 0):r&&typeof r=="object"&&(i="POST"),g.length>0&&t.ajax({url:l,type:i||"GET",dataType:"html",data:r}).done(function(y){m=arguments,g.html(h?t("<div>").append(t.parseHTML(y)).find(h):y)}).always(d&&function(y,_){g.each(function(){d.apply(this,m||[y.responseText,_,y])})}),this}}.apply(k,c),a!==void 0&&(v.exports=a)},5002:(v,k,s)=>{var c,a;c=[s(927),s(2374),s(5514)],a=function(t,p){"use strict";t.ajaxPrefilter(function(u){u.crossDomain&&(u.contents.script=!1)}),t.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(u){return t.globalEval(u),u}}}),t.ajaxPrefilter("script",function(u){u.cache===void 0&&(u.cache=!1),u.crossDomain&&(u.type="GET")}),t.ajaxTransport("script",function(u){if(u.crossDomain||u.scriptAttrs){var l,r;return{send:function(d,h){l=t("<script>").attr(u.scriptAttrs||{}).prop({charset:u.scriptCharset,src:u.url}).on("load error",r=function(i){l.remove(),r=null,i&&h(i.type==="error"?404:200,i.type)}),p.head.appendChild(l[0])},abort:function(){r&&r()}}}})}.apply(k,c),a!==void 0&&(v.exports=a)},3600:(v,k,s)=>{var c;c=function(){"use strict";return window.location}.call(k,s,k,v),c!==void 0&&(v.exports=c)},5503:(v,k,s)=>{var c;c=function(){"use strict";return{guid:Date.now()}}.call(k,s,k,v),c!==void 0&&(v.exports=c)},4555:(v,k,s)=>{var c;c=function(){"use strict";return/\?/}.call(k,s,k,v),c!==void 0&&(v.exports=c)},4854:(v,k,s)=>{var c,a;c=[s(927),s(6272),s(5514)],a=function(t,p){"use strict";t.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest}catch(r){}};var u={0:200,1223:204},l=t.ajaxSettings.xhr();p.cors=!!l&&"withCredentials"in l,p.ajax=l=!!l,t.ajaxTransport(function(r){var d,h;if(p.cors||l&&!r.crossDomain)return{send:function(i,m){var g,f=r.xhr();if(f.open(r.type,r.url,r.async,r.username,r.password),r.xhrFields)for(g in r.xhrFields)f[g]=r.xhrFields[g];r.mimeType&&f.overrideMimeType&&f.overrideMimeType(r.mimeType),!r.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");for(g in i)f.setRequestHeader(g,i[g]);d=function(y){return function(){d&&(d=h=f.onload=f.onerror=f.onabort=f.ontimeout=f.onreadystatechange=null,y==="abort"?f.abort():y==="error"?typeof f.status!="number"?m(0,"error"):m(f.status,f.statusText):m(u[f.status]||f.status,f.statusText,(f.responseType||"text")!=="text"||typeof f.responseText!="string"?{binary:f.response}:{text:f.responseText},f.getAllResponseHeaders()))}},f.onload=d(),h=f.onerror=f.ontimeout=d("error"),f.onabort!==void 0?f.onabort=h:f.onreadystatechange=function(){f.readyState===4&&window.setTimeout(function(){d&&h()})},d=d("abort");try{f.send(r.hasContent&&r.data||null)}catch(y){if(d)throw y}},abort:function(){d&&d()}}})}.apply(k,c),a!==void 0&&(v.exports=a)},6101:(v,k,s)=>{var c,a;c=[s(927),s(1422),s(3851),s(5239),s(9586)],a=function(t){"use strict";return t}.apply(k,c),a!==void 0&&(v.exports=a)},1422:(v,k,s)=>{var c,a;c=[s(927),s(4271),s(3624),s(2883),s(4377),s(4598)],a=function(t,p,u,l,r){"use strict";var d,h=t.expr.attrHandle;t.fn.extend({attr:function(i,m){return p(this,t.attr,i,m,arguments.length>1)},removeAttr:function(i){return this.each(function(){t.removeAttr(this,i)})}}),t.extend({attr:function(i,m,g){var f,y,_=i.nodeType;if(!(_===3||_===8||_===2)){if(typeof i.getAttribute=="undefined")return t.prop(i,m,g);if((_!==1||!t.isXMLDoc(i))&&(y=t.attrHooks[m.toLowerCase()]||(t.expr.match.bool.test(m)?d:void 0)),g!==void 0){if(g===null){t.removeAttr(i,m);return}return y&&"set"in y&&(f=y.set(i,g,m))!==void 0?f:(i.setAttribute(m,g+""),g)}return y&&"get"in y&&(f=y.get(i,m))!==null?f:(f=t.find.attr(i,m),f==null?void 0:f)}},attrHooks:{type:{set:function(i,m){if(!l.radioValue&&m==="radio"&&u(i,"input")){var g=i.value;return i.setAttribute("type",m),g&&(i.value=g),m}}}},removeAttr:function(i,m){var g,f=0,y=m&&m.match(r);if(y&&i.nodeType===1)for(;g=y[f++];)i.removeAttribute(g)}}),d={set:function(i,m,g){return m===!1?t.removeAttr(i,g):i.setAttribute(g,g),g}},t.each(t.expr.match.bool.source.match(/\w+/g),function(i,m){var g=h[m]||t.find.attr;h[m]=function(f,y,_){var I,S,N=y.toLowerCase();return _||(S=h[N],h[N]=I,I=g(f,y,_)!=null?N:null,h[N]=S),I}})}.apply(k,c),a!==void 0&&(v.exports=a)},5239:(v,k,s)=>{var c,a;c=[s(927),s(7494),s(6435),s(4377),s(1730),s(5765)],a=function(t,p,u,l,r){"use strict";function d(i){return i.getAttribute&&i.getAttribute("class")||""}function h(i){return Array.isArray(i)?i:typeof i=="string"?i.match(l)||[]:[]}t.fn.extend({addClass:function(i){var m,g,f,y,_,I,S,N=0;if(u(i))return this.each(function(A){t(this).addClass(i.call(this,A,d(this)))});if(m=h(i),m.length){for(;g=this[N++];)if(y=d(g),f=g.nodeType===1&&" "+p(y)+" ",f){for(I=0;_=m[I++];)f.indexOf(" "+_+" ")<0&&(f+=_+" ");S=p(f),y!==S&&g.setAttribute("class",S)}}return this},removeClass:function(i){var m,g,f,y,_,I,S,N=0;if(u(i))return this.each(function(A){t(this).removeClass(i.call(this,A,d(this)))});if(!arguments.length)return this.attr("class","");if(m=h(i),m.length){for(;g=this[N++];)if(y=d(g),f=g.nodeType===1&&" "+p(y)+" ",f){for(I=0;_=m[I++];)for(;f.indexOf(" "+_+" ")>-1;)f=f.replace(" "+_+" "," ");S=p(f),y!==S&&g.setAttribute("class",S)}}return this},toggleClass:function(i,m){var g=typeof i,f=g==="string"||Array.isArray(i);return typeof m=="boolean"&&f?m?this.addClass(i):this.removeClass(i):u(i)?this.each(function(y){t(this).toggleClass(i.call(this,y,d(this),m),m)}):this.each(function(){var y,_,I,S;if(f)for(_=0,I=t(this),S=h(i);y=S[_++];)I.hasClass(y)?I.removeClass(y):I.addClass(y);else(i===void 0||g==="boolean")&&(y=d(this),y&&r.set(this,"__className__",y),this.setAttribute&&this.setAttribute("class",y||i===!1?"":r.get(this,"__className__")||""))})},hasClass:function(i){var m,g,f=0;for(m=" "+i+" ";g=this[f++];)if(g.nodeType===1&&(" "+p(d(g))+" ").indexOf(m)>-1)return!0;return!1}})}.apply(k,c),a!==void 0&&(v.exports=a)},3851:(v,k,s)=>{var c,a;c=[s(927),s(4271),s(2883),s(4598)],a=function(t,p,u){"use strict";var l=/^(?:input|select|textarea|button)$/i,r=/^(?:a|area)$/i;t.fn.extend({prop:function(d,h){return p(this,t.prop,d,h,arguments.length>1)},removeProp:function(d){return this.each(function(){delete this[t.propFix[d]||d]})}}),t.extend({prop:function(d,h,i){var m,g,f=d.nodeType;if(!(f===3||f===8||f===2))return(f!==1||!t.isXMLDoc(d))&&(h=t.propFix[h]||h,g=t.propHooks[h]),i!==void 0?g&&"set"in g&&(m=g.set(d,i,h))!==void 0?m:d[h]=i:g&&"get"in g&&(m=g.get(d,h))!==null?m:d[h]},propHooks:{tabIndex:{get:function(d){var h=t.find.attr(d,"tabindex");return h?parseInt(h,10):l.test(d.nodeName)||r.test(d.nodeName)&&d.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),u.optSelected||(t.propHooks.selected={get:function(d){var h=d.parentNode;return h&&h.parentNode&&h.parentNode.selectedIndex,null},set:function(d){var h=d.parentNode;h&&(h.selectedIndex,h.parentNode&&h.parentNode.selectedIndex)}}),t.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){t.propFix[this.toLowerCase()]=this})}.apply(k,c),a!==void 0&&(v.exports=a)},2883:(v,k,s)=>{var c,a;c=[s(2374),s(6272)],a=function(t,p){"use strict";return function(){var u=t.createElement("input"),l=t.createElement("select"),r=l.appendChild(t.createElement("option"));u.type="checkbox",p.checkOn=u.value!=="",p.optSelected=r.selected,u=t.createElement("input"),u.value="t",u.type="radio",p.radioValue=u.value==="t"}(),p}.apply(k,c),a!==void 0&&(v.exports=a)},9586:(v,k,s)=>{var c,a;c=[s(927),s(7494),s(2883),s(3624),s(6435),s(5765)],a=function(t,p,u,l,r){"use strict";var d=/\r/g;t.fn.extend({val:function(h){var i,m,g,f=this[0];return arguments.length?(g=r(h),this.each(function(y){var _;this.nodeType===1&&(g?_=h.call(this,y,t(this).val()):_=h,_==null?_="":typeof _=="number"?_+="":Array.isArray(_)&&(_=t.map(_,function(I){return I==null?"":I+""})),i=t.valHooks[this.type]||t.valHooks[this.nodeName.toLowerCase()],(!i||!("set"in i)||i.set(this,_,"value")===void 0)&&(this.value=_))})):f?(i=t.valHooks[f.type]||t.valHooks[f.nodeName.toLowerCase()],i&&"get"in i&&(m=i.get(f,"value"))!==void 0?m:(m=f.value,typeof m=="string"?m.replace(d,""):m==null?"":m)):void 0}}),t.extend({valHooks:{option:{get:function(h){var i=t.find.attr(h,"value");return i!=null?i:p(t.text(h))}},select:{get:function(h){var i,m,g,f=h.options,y=h.selectedIndex,_=h.type==="select-one",I=_?null:[],S=_?y+1:f.length;for(y<0?g=S:g=_?y:0;g<S;g++)if(m=f[g],(m.selected||g===y)&&!m.disabled&&(!m.parentNode.disabled||!l(m.parentNode,"optgroup"))){if(i=t(m).val(),_)return i;I.push(i)}return I},set:function(h,i){for(var m,g,f=h.options,y=t.makeArray(i),_=f.length;_--;)g=f[_],(g.selected=t.inArray(t.valHooks.option.get(g),y)>-1)&&(m=!0);return m||(h.selectedIndex=-1),y}}}}),t.each(["radio","checkbox"],function(){t.valHooks[this]={set:function(h,i){if(Array.isArray(i))return h.checked=t.inArray(t(h).val(),i)>-1}},u.checkOn||(t.valHooks[this].get=function(h){return h.getAttribute("value")===null?"on":h.value})})}.apply(k,c),a!==void 0&&(v.exports=a)},5481:(v,k,s)=>{var c,a;c=[s(927),s(5399),s(6435),s(4377)],a=function(t,p,u,l){"use strict";function r(d){var h={};return t.each(d.match(l)||[],function(i,m){h[m]=!0}),h}return t.Callbacks=function(d){d=typeof d=="string"?r(d):t.extend({},d);var h,i,m,g,f=[],y=[],_=-1,I=function(){for(g=g||d.once,m=h=!0;y.length;_=-1)for(i=y.shift();++_<f.length;)f[_].apply(i[0],i[1])===!1&&d.stopOnFalse&&(_=f.length,i=!1);d.memory||(i=!1),h=!1,g&&(i?f=[]:f="")},S={add:function(){return f&&(i&&!h&&(_=f.length-1,y.push(i)),function N(A){t.each(A,function(b,B){u(B)?(!d.unique||!S.has(B))&&f.push(B):B&&B.length&&p(B)!=="string"&&N(B)})}(arguments),i&&!h&&I()),this},remove:function(){return t.each(arguments,function(N,A){for(var b;(b=t.inArray(A,f,b))>-1;)f.splice(b,1),b<=_&&_--}),this},has:function(N){return N?t.inArray(N,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return g=y=[],f=i="",this},disabled:function(){return!f},lock:function(){return g=y=[],!i&&!h&&(f=i=""),this},locked:function(){return!!g},fireWith:function(N,A){return g||(A=A||[],A=[N,A.slice?A.slice():A],y.push(A),h||I()),this},fire:function(){return S.fireWith(this,arguments),this},fired:function(){return!!m}};return S},t}.apply(k,c),a!==void 0&&(v.exports=a)},927:(v,k,s)=>{var c,a;c=[s(9694),s(4161),s(2250),s(3145),s(5079),s(9235),s(8308),s(3283),s(641),s(3225),s(6159),s(6272),s(6435),s(2345),s(9385),s(5399)],a=function(t,p,u,l,r,d,h,i,m,g,f,y,_,I,S,N){"use strict";var A="3.6.0",b=function(E,D){return new b.fn.init(E,D)};b.fn=b.prototype={jquery:A,constructor:b,length:0,toArray:function(){return u.call(this)},get:function(E){return E==null?u.call(this):E<0?this[E+this.length]:this[E]},pushStack:function(E){var D=b.merge(this.constructor(),E);return D.prevObject=this,D},each:function(E){return b.each(this,E)},map:function(E){return this.pushStack(b.map(this,function(D,L){return E.call(D,L,D)}))},slice:function(){return this.pushStack(u.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(b.grep(this,function(E,D){return(D+1)%2}))},odd:function(){return this.pushStack(b.grep(this,function(E,D){return D%2}))},eq:function(E){var D=this.length,L=+E+(E<0?D:0);return this.pushStack(L>=0&&L<D?[this[L]]:[])},end:function(){return this.prevObject||this.constructor()},push:r,sort:t.sort,splice:t.splice},b.extend=b.fn.extend=function(){var E,D,L,w,R,O,C=arguments[0]||{},U=1,F=arguments.length,z=!1;for(typeof C=="boolean"&&(z=C,C=arguments[U]||{},U++),typeof C!="object"&&!_(C)&&(C={}),U===F&&(C=this,U--);U<F;U++)if((E=arguments[U])!=null)for(D in E)w=E[D],!(D==="__proto__"||C===w)&&(z&&w&&(b.isPlainObject(w)||(R=Array.isArray(w)))?(L=C[D],R&&!Array.isArray(L)?O=[]:!R&&!b.isPlainObject(L)?O={}:O=L,R=!1,C[D]=b.extend(z,O,w)):w!==void 0&&(C[D]=w));return C},b.extend({expando:"jQuery"+(A+Math.random()).replace(/\D/g,""),isReady:!0,error:function(E){throw new Error(E)},noop:function(){},isPlainObject:function(E){var D,L;return!E||i.call(E)!=="[object Object]"?!1:(D=p(E),D?(L=m.call(D,"constructor")&&D.constructor,typeof L=="function"&&g.call(L)===f):!0)},isEmptyObject:function(E){var D;for(D in E)return!1;return!0},globalEval:function(E,D,L){S(E,{nonce:D&&D.nonce},L)},each:function(E,D){var L,w=0;if(B(E))for(L=E.length;w<L&&D.call(E[w],w,E[w])!==!1;w++);else for(w in E)if(D.call(E[w],w,E[w])===!1)break;return E},makeArray:function(E,D){var L=D||[];return E!=null&&(B(Object(E))?b.merge(L,typeof E=="string"?[E]:E):r.call(L,E)),L},inArray:function(E,D,L){return D==null?-1:d.call(D,E,L)},merge:function(E,D){for(var L=+D.length,w=0,R=E.length;w<L;w++)E[R++]=D[w];return E.length=R,E},grep:function(E,D,L){for(var w,R=[],O=0,C=E.length,U=!L;O<C;O++)w=!D(E[O],O),w!==U&&R.push(E[O]);return R},map:function(E,D,L){var w,R,O=0,C=[];if(B(E))for(w=E.length;O<w;O++)R=D(E[O],O,L),R!=null&&C.push(R);else for(O in E)R=D(E[O],O,L),R!=null&&C.push(R);return l(C)},guid:1,support:y}),typeof Symbol=="function"&&(b.fn[Symbol.iterator]=t[Symbol.iterator]),b.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(E,D){h["[object "+D+"]"]=D.toLowerCase()});function B(E){var D=!!E&&"length"in E&&E.length,L=N(E);return _(E)||I(E)?!1:L==="array"||D===0||typeof D=="number"&&D>0&&D-1 in E}return b}.apply(k,c),a!==void 0&&(v.exports=a)},9385:(v,k,s)=>{var c,a;c=[s(2374)],a=function(t){"use strict";var p={type:!0,src:!0,nonce:!0,noModule:!0};function u(l,r,d){d=d||t;var h,i,m=d.createElement("script");if(m.text=l,r)for(h in p)i=r[h]||r.getAttribute&&r.getAttribute(h),i&&m.setAttribute(h,i);d.head.appendChild(m).parentNode.removeChild(m)}return u}.apply(k,c),a!==void 0&&(v.exports=a)},4271:(v,k,s)=>{var c,a;c=[s(927),s(5399),s(6435)],a=function(t,p,u){"use strict";var l=function(r,d,h,i,m,g,f){var y=0,_=r.length,I=h==null;if(p(h)==="object"){m=!0;for(y in h)l(r,d,y,h[y],!0,g,f)}else if(i!==void 0&&(m=!0,u(i)||(f=!0),I&&(f?(d.call(r,i),d=null):(I=d,d=function(S,N,A){return I.call(t(S),A)})),d))for(;y<_;y++)d(r[y],h,f?i:i.call(r[y],y,d(r[y],h)));return m?r:I?d.call(r):_?d(r[0],h):g};return l}.apply(k,c),a!==void 0&&(v.exports=a)},4179:(v,k)=>{var s,c;s=[],c=function(){"use strict";var a=/^-ms-/,t=/-([a-z])/g;function p(l,r){return r.toUpperCase()}function u(l){return l.replace(a,"ms-").replace(t,p)}return u}.apply(k,s),c!==void 0&&(v.exports=c)},5765:(v,k,s)=>{var c,a;c=[s(927),s(2374),s(6435),s(1534),s(6989)],a=function(t,p,u,l){"use strict";var r,d=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,h=t.fn.init=function(i,m,g){var f,y;if(!i)return this;if(g=g||r,typeof i=="string")if(i[0]==="<"&&i[i.length-1]===">"&&i.length>=3?f=[null,i,null]:f=d.exec(i),f&&(f[1]||!m))if(f[1]){if(m=m instanceof t?m[0]:m,t.merge(this,t.parseHTML(f[1],m&&m.nodeType?m.ownerDocument||m:p,!0)),l.test(f[1])&&t.isPlainObject(m))for(f in m)u(this[f])?this[f](m[f]):this.attr(f,m[f]);return this}else return y=p.getElementById(f[2]),y&&(this[0]=y,this.length=1),this;else return!m||m.jquery?(m||g).find(i):this.constructor(m).find(i);else{if(i.nodeType)return this[0]=i,this.length=1,this;if(u(i))return g.ready!==void 0?g.ready(i):i(t)}return t.makeArray(i,this)};return h.prototype=t.fn,r=t(p),h}.apply(k,c),a!==void 0&&(v.exports=a)},9205:(v,k,s)=>{var c,a;c=[s(927),s(3e3),s(4598)],a=function(t,p){"use strict";var u=function(r){return t.contains(r.ownerDocument,r)},l={composed:!0};return p.getRootNode&&(u=function(r){return t.contains(r.ownerDocument,r)||r.getRootNode(l)===r.ownerDocument}),u}.apply(k,c),a!==void 0&&(v.exports=a)},3624:(v,k,s)=>{var c;c=function(){"use strict";function a(t,p){return t.nodeName&&t.nodeName.toLowerCase()===p.toLowerCase()}return a}.call(k,s,k,v),c!==void 0&&(v.exports=c)},2695:(v,k,s)=>{var c,a;c=[s(927),s(2374),s(1534),s(3088),s(2434)],a=function(t,p,u,l,r){"use strict";return t.parseHTML=function(d,h,i){if(typeof d!="string")return[];typeof h=="boolean"&&(i=h,h=!1);var m,g,f;return h||(r.createHTMLDocument?(h=p.implementation.createHTMLDocument(""),m=h.createElement("base"),m.href=p.location.href,h.head.appendChild(m)):h=p),g=u.exec(d),f=!i&&[],g?[h.createElement(g[1])]:(g=l([d],h,f),f&&f.length&&t(f).remove(),t.merge([],g.childNodes))},t.parseHTML}.apply(k,c),a!==void 0&&(v.exports=a)},6270:(v,k,s)=>{var c,a;c=[s(927)],a=function(t){"use strict";return t.parseXML=function(p){var u,l;if(!p||typeof p!="string")return null;try{u=new window.DOMParser().parseFromString(p,"text/xml")}catch(r){}return l=u&&u.getElementsByTagName("parsererror")[0],(!u||l)&&t.error("Invalid XML: "+(l?t.map(l.childNodes,function(r){return r.textContent}).join(`
`):p)),u},t.parseXML}.apply(k,c),a!==void 0&&(v.exports=a)},9006:(v,k,s)=>{var c,a;c=[s(927),s(2374),s(5603),s(4049)],a=function(t,p){"use strict";var u=t.Deferred();t.fn.ready=function(r){return u.then(r).catch(function(d){t.readyException(d)}),this},t.extend({isReady:!1,readyWait:1,ready:function(r){(r===!0?--t.readyWait:t.isReady)||(t.isReady=!0,!(r!==!0&&--t.readyWait>0)&&u.resolveWith(p,[t]))}}),t.ready.then=u.then;function l(){p.removeEventListener("DOMContentLoaded",l),window.removeEventListener("load",l),t.ready()}p.readyState==="complete"||p.readyState!=="loading"&&!p.documentElement.doScroll?window.setTimeout(t.ready):(p.addEventListener("DOMContentLoaded",l),window.addEventListener("load",l))}.apply(k,c),a!==void 0&&(v.exports=a)},5603:(v,k,s)=>{var c,a;c=[s(927)],a=function(t){"use strict";t.readyException=function(p){window.setTimeout(function(){throw p})}}.apply(k,c),a!==void 0&&(v.exports=a)},7494:(v,k,s)=>{var c,a;c=[s(4377)],a=function(t){"use strict";function p(u){var l=u.match(t)||[];return l.join(" ")}return p}.apply(k,c),a!==void 0&&(v.exports=a)},2434:(v,k,s)=>{var c,a;c=[s(2374),s(6272)],a=function(t,p){"use strict";return p.createHTMLDocument=function(){var u=t.implementation.createHTMLDocument("").body;return u.innerHTML="<form></form><form></form>",u.childNodes.length===2}(),p}.apply(k,c),a!==void 0&&(v.exports=a)},5399:(v,k,s)=>{var c,a;c=[s(8308),s(3283)],a=function(t,p){"use strict";function u(l){return l==null?l+"":typeof l=="object"||typeof l=="function"?t[p.call(l)]||"object":typeof l}return u}.apply(k,c),a!==void 0&&(v.exports=a)},1534:(v,k,s)=>{var c;c=function(){"use strict";return/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i}.call(k,s,k,v),c!==void 0&&(v.exports=c)},1473:(v,k,s)=>{var c,a;c=[s(927),s(4271),s(4179),s(3624),s(6853),s(7895),s(4099),s(764),s(1224),s(7119),s(312),s(399),s(2928),s(5866),s(5765),s(9006),s(4598)],a=function(t,p,u,l,r,d,h,i,m,g,f,y,_,I){"use strict";var S=/^(none|table(?!-c[ea]).+)/,N=/^--/,A={position:"absolute",visibility:"hidden",display:"block"},b={letterSpacing:"0",fontWeight:"400"};function B(L,w,R){var O=r.exec(w);return O?Math.max(0,O[2]-(R||0))+(O[3]||"px"):w}function E(L,w,R,O,C,U){var F=w==="width"?1:0,z=0,j=0;if(R===(O?"border":"content"))return 0;for(;F<4;F+=2)R==="margin"&&(j+=t.css(L,R+h[F],!0,C)),O?(R==="content"&&(j-=t.css(L,"padding"+h[F],!0,C)),R!=="margin"&&(j-=t.css(L,"border"+h[F]+"Width",!0,C))):(j+=t.css(L,"padding"+h[F],!0,C),R!=="padding"?j+=t.css(L,"border"+h[F]+"Width",!0,C):z+=t.css(L,"border"+h[F]+"Width",!0,C));return!O&&U>=0&&(j+=Math.max(0,Math.ceil(L["offset"+w[0].toUpperCase()+w.slice(1)]-U-j-z-.5))||0),j}function D(L,w,R){var O=i(L),C=!_.boxSizingReliable()||R,U=C&&t.css(L,"boxSizing",!1,O)==="border-box",F=U,z=g(L,w,O),j="offset"+w[0].toUpperCase()+w.slice(1);if(d.test(z)){if(!R)return z;z="auto"}return(!_.boxSizingReliable()&&U||!_.reliableTrDimensions()&&l(L,"tr")||z==="auto"||!parseFloat(z)&&t.css(L,"display",!1,O)==="inline")&&L.getClientRects().length&&(U=t.css(L,"boxSizing",!1,O)==="border-box",F=j in L,F&&(z=L[j])),z=parseFloat(z)||0,z+E(L,w,R||(U?"border":"content"),F,O,z)+"px"}return t.extend({cssHooks:{opacity:{get:function(L,w){if(w){var R=g(L,"opacity");return R===""?"1":R}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(L,w,R,O){if(!(!L||L.nodeType===3||L.nodeType===8||!L.style)){var C,U,F,z=u(w),j=N.test(w),q=L.style;if(j||(w=I(z)),F=t.cssHooks[w]||t.cssHooks[z],R!==void 0){if(U=typeof R,U==="string"&&(C=r.exec(R))&&C[1]&&(R=f(L,w,C),U="number"),R==null||R!==R)return;U==="number"&&!j&&(R+=C&&C[3]||(t.cssNumber[z]?"":"px")),!_.clearCloneStyle&&R===""&&w.indexOf("background")===0&&(q[w]="inherit"),(!F||!("set"in F)||(R=F.set(L,R,O))!==void 0)&&(j?q.setProperty(w,R):q[w]=R)}else return F&&"get"in F&&(C=F.get(L,!1,O))!==void 0?C:q[w]}},css:function(L,w,R,O){var C,U,F,z=u(w),j=N.test(w);return j||(w=I(z)),F=t.cssHooks[w]||t.cssHooks[z],F&&"get"in F&&(C=F.get(L,!0,R)),C===void 0&&(C=g(L,w,O)),C==="normal"&&w in b&&(C=b[w]),R===""||R?(U=parseFloat(C),R===!0||isFinite(U)?U||0:C):C}}),t.each(["height","width"],function(L,w){t.cssHooks[w]={get:function(R,O,C){if(O)return S.test(t.css(R,"display"))&&(!R.getClientRects().length||!R.getBoundingClientRect().width)?m(R,A,function(){return D(R,w,C)}):D(R,w,C)},set:function(R,O,C){var U,F=i(R),z=!_.scrollboxSize()&&F.position==="absolute",j=z||C,q=j&&t.css(R,"boxSizing",!1,F)==="border-box",$=C?E(R,w,C,q,F):0;return q&&z&&($-=Math.ceil(R["offset"+w[0].toUpperCase()+w.slice(1)]-parseFloat(F[w])-E(R,w,"border",!1,F)-.5)),$&&(U=r.exec(O))&&(U[3]||"px")!=="px"&&(R.style[w]=O,O=t.css(R,w)),B(R,O,$)}}}),t.cssHooks.marginLeft=y(_.reliableMarginLeft,function(L,w){if(w)return(parseFloat(g(L,"marginLeft"))||L.getBoundingClientRect().left-m(L,{marginLeft:0},function(){return L.getBoundingClientRect().left}))+"px"}),t.each({margin:"",padding:"",border:"Width"},function(L,w){t.cssHooks[L+w]={expand:function(R){for(var O=0,C={},U=typeof R=="string"?R.split(" "):[R];O<4;O++)C[L+h[O]+w]=U[O]||U[O-2]||U[0];return C}},L!=="margin"&&(t.cssHooks[L+w].set=B)}),t.fn.extend({css:function(L,w){return p(this,function(R,O,C){var U,F,z={},j=0;if(Array.isArray(O)){for(U=i(R),F=O.length;j<F;j++)z[O[j]]=t.css(R,O[j],!1,U);return z}return C!==void 0?t.style(R,O,C):t.css(R,O)},L,w,arguments.length>1)}}),t}.apply(k,c),a!==void 0&&(v.exports=a)},399:(v,k,s)=>{var c;c=function(){"use strict";function a(t,p){return{get:function(){if(t()){delete this.get;return}return(this.get=p).apply(this,arguments)}}}return a}.call(k,s,k,v),c!==void 0&&(v.exports=c)},312:(v,k,s)=>{var c,a;c=[s(927),s(6853)],a=function(t,p){"use strict";function u(l,r,d,h){var i,m,g=20,f=h?function(){return h.cur()}:function(){return t.css(l,r,"")},y=f(),_=d&&d[3]||(t.cssNumber[r]?"":"px"),I=l.nodeType&&(t.cssNumber[r]||_!=="px"&&+y)&&p.exec(t.css(l,r));if(I&&I[3]!==_){for(y=y/2,_=_||I[3],I=+y||1;g--;)t.style(l,r,I+_),(1-m)*(1-(m=f()/y||.5))<=0&&(g=0),I=I/m;I=I*2,t.style(l,r,I+_),d=d||[]}return d&&(I=+I||+y||0,i=d[1]?I+(d[1]+1)*d[2]:+d[2],h&&(h.unit=_,h.start=I,h.end=i)),i}return u}.apply(k,c),a!==void 0&&(v.exports=a)},7119:(v,k,s)=>{var c,a;c=[s(927),s(9205),s(2254),s(7895),s(764),s(2928)],a=function(t,p,u,l,r,d){"use strict";function h(i,m,g){var f,y,_,I,S=i.style;return g=g||r(i),g&&(I=g.getPropertyValue(m)||g[m],I===""&&!p(i)&&(I=t.style(i,m)),!d.pixelBoxStyles()&&l.test(I)&&u.test(m)&&(f=S.width,y=S.minWidth,_=S.maxWidth,S.minWidth=S.maxWidth=S.width=I,I=g.width,S.width=f,S.minWidth=y,S.maxWidth=_)),I!==void 0?I+"":I}return h}.apply(k,c),a!==void 0&&(v.exports=a)},5866:(v,k,s)=>{var c,a;c=[s(2374),s(927)],a=function(t,p){"use strict";var u=["Webkit","Moz","ms"],l=t.createElement("div").style,r={};function d(i){for(var m=i[0].toUpperCase()+i.slice(1),g=u.length;g--;)if(i=u[g]+m,i in l)return i}function h(i){var m=p.cssProps[i]||r[i];return m||(i in l?i:r[i]=d(i)||i)}return h}.apply(k,c),a!==void 0&&(v.exports=a)},8405:(v,k,s)=>{var c,a;c=[s(927),s(4598)],a=function(t){"use strict";t.expr.pseudos.hidden=function(p){return!t.expr.pseudos.visible(p)},t.expr.pseudos.visible=function(p){return!!(p.offsetWidth||p.offsetHeight||p.getClientRects().length)}}.apply(k,c),a!==void 0&&(v.exports=a)},6805:(v,k,s)=>{var c,a;c=[s(927),s(1730),s(4091)],a=function(t,p,u){"use strict";var l={};function r(h){var i,m=h.ownerDocument,g=h.nodeName,f=l[g];return f||(i=m.body.appendChild(m.createElement(g)),f=t.css(i,"display"),i.parentNode.removeChild(i),f==="none"&&(f="block"),l[g]=f,f)}function d(h,i){for(var m,g,f=[],y=0,_=h.length;y<_;y++)g=h[y],g.style&&(m=g.style.display,i?(m==="none"&&(f[y]=p.get(g,"display")||null,f[y]||(g.style.display="")),g.style.display===""&&u(g)&&(f[y]=r(g))):m!=="none"&&(f[y]="none",p.set(g,"display",m)));for(y=0;y<_;y++)f[y]!=null&&(h[y].style.display=f[y]);return h}return t.fn.extend({show:function(){return d(this,!0)},hide:function(){return d(this)},toggle:function(h){return typeof h=="boolean"?h?this.show():this.hide():this.each(function(){u(this)?t(this).show():t(this).hide()})}}),d}.apply(k,c),a!==void 0&&(v.exports=a)},2928:(v,k,s)=>{var c,a;c=[s(927),s(2374),s(3e3),s(6272)],a=function(t,p,u,l){"use strict";return function(){function r(){if(!!I){_.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",I.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",u.appendChild(_).appendChild(I);var S=window.getComputedStyle(I);h=S.top!=="1%",y=d(S.marginLeft)===12,I.style.right="60%",g=d(S.right)===36,i=d(S.width)===36,I.style.position="absolute",m=d(I.offsetWidth/3)===12,u.removeChild(_),I=null}}function d(S){return Math.round(parseFloat(S))}var h,i,m,g,f,y,_=p.createElement("div"),I=p.createElement("div");!I.style||(I.style.backgroundClip="content-box",I.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle=I.style.backgroundClip==="content-box",t.extend(l,{boxSizingReliable:function(){return r(),i},pixelBoxStyles:function(){return r(),g},pixelPosition:function(){return r(),h},reliableMarginLeft:function(){return r(),y},scrollboxSize:function(){return r(),m},reliableTrDimensions:function(){var S,N,A,b;return f==null&&(S=p.createElement("table"),N=p.createElement("tr"),A=p.createElement("div"),S.style.cssText="position:absolute;left:-11111px;border-collapse:separate",N.style.cssText="border:1px solid",N.style.height="1px",A.style.height="9px",A.style.display="block",u.appendChild(S).appendChild(N).appendChild(A),b=window.getComputedStyle(N),f=parseInt(b.height,10)+parseInt(b.borderTopWidth,10)+parseInt(b.borderBottomWidth,10)===N.offsetHeight,u.removeChild(S)),f}}))}(),l}.apply(k,c),a!==void 0&&(v.exports=a)},4099:(v,k,s)=>{var c;c=function(){"use strict";return["Top","Right","Bottom","Left"]}.call(k,s,k,v),c!==void 0&&(v.exports=c)},764:(v,k,s)=>{var c;c=function(){"use strict";return function(a){var t=a.ownerDocument.defaultView;return(!t||!t.opener)&&(t=window),t.getComputedStyle(a)}}.call(k,s,k,v),c!==void 0&&(v.exports=c)},4091:(v,k,s)=>{var c,a;c=[s(927),s(9205)],a=function(t,p){"use strict";return function(u,l){return u=l||u,u.style.display==="none"||u.style.display===""&&p(u)&&t.css(u,"display")==="none"}}.apply(k,c),a!==void 0&&(v.exports=a)},2254:(v,k,s)=>{var c,a;c=[s(4099)],a=function(t){"use strict";return new RegExp(t.join("|"),"i")}.apply(k,c),a!==void 0&&(v.exports=a)},7895:(v,k,s)=>{var c,a;c=[s(6849)],a=function(t){"use strict";return new RegExp("^("+t+")(?!px)[a-z%]+$","i")}.apply(k,c),a!==void 0&&(v.exports=a)},1224:(v,k,s)=>{var c;c=function(){"use strict";return function(a,t,p){var u,l,r={};for(l in t)r[l]=a.style[l],a.style[l]=t[l];u=p.call(a);for(l in t)a.style[l]=r[l];return u}}.call(k,s,k,v),c!==void 0&&(v.exports=c)},7450:(v,k,s)=>{var c,a;c=[s(927),s(4271),s(4179),s(1730),s(4902)],a=function(t,p,u,l,r){"use strict";var d=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,h=/[A-Z]/g;function i(g){return g==="true"?!0:g==="false"?!1:g==="null"?null:g===+g+""?+g:d.test(g)?JSON.parse(g):g}function m(g,f,y){var _;if(y===void 0&&g.nodeType===1)if(_="data-"+f.replace(h,"-$&").toLowerCase(),y=g.getAttribute(_),typeof y=="string"){try{y=i(y)}catch(I){}r.set(g,f,y)}else y=void 0;return y}return t.extend({hasData:function(g){return r.hasData(g)||l.hasData(g)},data:function(g,f,y){return r.access(g,f,y)},removeData:function(g,f){r.remove(g,f)},_data:function(g,f,y){return l.access(g,f,y)},_removeData:function(g,f){l.remove(g,f)}}),t.fn.extend({data:function(g,f){var y,_,I,S=this[0],N=S&&S.attributes;if(g===void 0){if(this.length&&(I=r.get(S),S.nodeType===1&&!l.get(S,"hasDataAttrs"))){for(y=N.length;y--;)N[y]&&(_=N[y].name,_.indexOf("data-")===0&&(_=u(_.slice(5)),m(S,_,I[_])));l.set(S,"hasDataAttrs",!0)}return I}return typeof g=="object"?this.each(function(){r.set(this,g)}):p(this,function(A){var b;if(S&&A===void 0)return b=r.get(S,g),b!==void 0||(b=m(S,g),b!==void 0)?b:void 0;this.each(function(){r.set(this,g,A)})},null,f,arguments.length>1,null,!0)},removeData:function(g){return this.each(function(){r.remove(this,g)})}}),t}.apply(k,c),a!==void 0&&(v.exports=a)},532:(v,k,s)=>{var c,a;c=[s(927),s(4179),s(4377),s(5340)],a=function(t,p,u,l){"use strict";function r(){this.expando=t.expando+r.uid++}return r.uid=1,r.prototype={cache:function(d){var h=d[this.expando];return h||(h={},l(d)&&(d.nodeType?d[this.expando]=h:Object.defineProperty(d,this.expando,{value:h,configurable:!0}))),h},set:function(d,h,i){var m,g=this.cache(d);if(typeof h=="string")g[p(h)]=i;else for(m in h)g[p(m)]=h[m];return g},get:function(d,h){return h===void 0?this.cache(d):d[this.expando]&&d[this.expando][p(h)]},access:function(d,h,i){return h===void 0||h&&typeof h=="string"&&i===void 0?this.get(d,h):(this.set(d,h,i),i!==void 0?i:h)},remove:function(d,h){var i,m=d[this.expando];if(m!==void 0){if(h!==void 0)for(Array.isArray(h)?h=h.map(p):(h=p(h),h=h in m?[h]:h.match(u)||[]),i=h.length;i--;)delete m[h[i]];(h===void 0||t.isEmptyObject(m))&&(d.nodeType?d[this.expando]=void 0:delete d[this.expando])}},hasData:function(d){var h=d[this.expando];return h!==void 0&&!t.isEmptyObject(h)}},r}.apply(k,c),a!==void 0&&(v.exports=a)},5340:(v,k,s)=>{var c;c=function(){"use strict";return function(a){return a.nodeType===1||a.nodeType===9||!+a.nodeType}}.call(k,s,k,v),c!==void 0&&(v.exports=c)},1730:(v,k,s)=>{var c,a;c=[s(532)],a=function(t){"use strict";return new t}.apply(k,c),a!==void 0&&(v.exports=a)},4902:(v,k,s)=>{var c,a;c=[s(532)],a=function(t){"use strict";return new t}.apply(k,c),a!==void 0&&(v.exports=a)},4049:(v,k,s)=>{var c,a;c=[s(927),s(6435),s(2250),s(5481)],a=function(t,p,u){"use strict";function l(h){return h}function r(h){throw h}function d(h,i,m,g){var f;try{h&&p(f=h.promise)?f.call(h).done(i).fail(m):h&&p(f=h.then)?f.call(h,i,m):i.apply(void 0,[h].slice(g))}catch(y){m.apply(void 0,[y])}}return t.extend({Deferred:function(h){var i=[["notify","progress",t.Callbacks("memory"),t.Callbacks("memory"),2],["resolve","done",t.Callbacks("once memory"),t.Callbacks("once memory"),0,"resolved"],["reject","fail",t.Callbacks("once memory"),t.Callbacks("once memory"),1,"rejected"]],m="pending",g={state:function(){return m},always:function(){return f.done(arguments).fail(arguments),this},catch:function(y){return g.then(null,y)},pipe:function(){var y=arguments;return t.Deferred(function(_){t.each(i,function(I,S){var N=p(y[S[4]])&&y[S[4]];f[S[1]](function(){var A=N&&N.apply(this,arguments);A&&p(A.promise)?A.promise().progress(_.notify).done(_.resolve).fail(_.reject):_[S[0]+"With"](this,N?[A]:arguments)})}),y=null}).promise()},then:function(y,_,I){var S=0;function N(A,b,B,E){return function(){var D=this,L=arguments,w=function(){var O,C;if(!(A<S)){if(O=B.apply(D,L),O===b.promise())throw new TypeError("Thenable self-resolution");C=O&&(typeof O=="object"||typeof O=="function")&&O.then,p(C)?E?C.call(O,N(S,b,l,E),N(S,b,r,E)):(S++,C.call(O,N(S,b,l,E),N(S,b,r,E),N(S,b,l,b.notifyWith))):(B!==l&&(D=void 0,L=[O]),(E||b.resolveWith)(D,L))}},R=E?w:function(){try{w()}catch(O){t.Deferred.exceptionHook&&t.Deferred.exceptionHook(O,R.stackTrace),A+1>=S&&(B!==r&&(D=void 0,L=[O]),b.rejectWith(D,L))}};A?R():(t.Deferred.getStackHook&&(R.stackTrace=t.Deferred.getStackHook()),window.setTimeout(R))}}return t.Deferred(function(A){i[0][3].add(N(0,A,p(I)?I:l,A.notifyWith)),i[1][3].add(N(0,A,p(y)?y:l)),i[2][3].add(N(0,A,p(_)?_:r))}).promise()},promise:function(y){return y!=null?t.extend(y,g):g}},f={};return t.each(i,function(y,_){var I=_[2],S=_[5];g[_[1]]=I.add,S&&I.add(function(){m=S},i[3-y][2].disable,i[3-y][3].disable,i[0][2].lock,i[0][3].lock),I.add(_[3].fire),f[_[0]]=function(){return f[_[0]+"With"](this===f?void 0:this,arguments),this},f[_[0]+"With"]=I.fireWith}),g.promise(f),h&&h.call(f,f),f},when:function(h){var i=arguments.length,m=i,g=Array(m),f=u.call(arguments),y=t.Deferred(),_=function(I){return function(S){g[I]=this,f[I]=arguments.length>1?u.call(arguments):S,--i||y.resolveWith(g,f)}};if(i<=1&&(d(h,y.done(_(m)).resolve,y.reject,!i),y.state()==="pending"||p(f[m]&&f[m].then)))return y.then();for(;m--;)d(f[m],_(m),y.reject);return y.promise()}}),t}.apply(k,c),a!==void 0&&(v.exports=a)},2959:(v,k,s)=>{var c,a;c=[s(927),s(4049)],a=function(t){"use strict";var p=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;t.Deferred.exceptionHook=function(u,l){window.console&&window.console.warn&&u&&p.test(u.name)&&window.console.warn("jQuery.Deferred exception: "+u.message,u.stack,l)}}.apply(k,c),a!==void 0&&(v.exports=a)},7412:(v,k,s)=>{var c,a;c=[s(927),s(3624),s(4179),s(5399),s(6435),s(2345),s(2250),s(1137),s(5653)],a=function(t,p,u,l,r,d,h){"use strict";var i=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;t.proxy=function(m,g){var f,y,_;if(typeof g=="string"&&(f=m[g],g=m,m=f),!!r(m))return y=h.call(arguments,2),_=function(){return m.apply(g||this,y.concat(h.call(arguments)))},_.guid=m.guid=m.guid||t.guid++,_},t.holdReady=function(m){m?t.readyWait++:t.ready(!0)},t.isArray=Array.isArray,t.parseJSON=JSON.parse,t.nodeName=p,t.isFunction=r,t.isWindow=d,t.camelCase=u,t.type=l,t.now=Date.now,t.isNumeric=function(m){var g=t.type(m);return(g==="number"||g==="string")&&!isNaN(m-parseFloat(m))},t.trim=function(m){return m==null?"":(m+"").replace(i,"")}}.apply(k,c),a!==void 0&&(v.exports=a)},1137:(v,k,s)=>{var c,a;c=[s(927),s(5514),s(3320)],a=function(t){"use strict";t.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(p,u){t.fn[u]=function(l){return this.on(u,l)}})}.apply(k,c),a!==void 0&&(v.exports=a)},5653:(v,k,s)=>{var c,a;c=[s(927),s(3320),s(1085)],a=function(t){"use strict";t.fn.extend({bind:function(p,u,l){return this.on(p,null,u,l)},unbind:function(p,u){return this.off(p,null,u)},delegate:function(p,u,l,r){return this.on(u,p,l,r)},undelegate:function(p,u,l){return arguments.length===1?this.off(p,"**"):this.off(u,p||"**",l)},hover:function(p,u){return this.mouseenter(p).mouseleave(u||p)}}),t.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(p,u){t.fn[u]=function(l,r){return arguments.length>0?this.on(u,null,l,r):this.trigger(u)}})}.apply(k,c),a!==void 0&&(v.exports=a)},9229:(v,k,s)=>{var c,a;c=[s(927),s(4271),s(2345),s(1473)],a=function(t,p,u){"use strict";return t.each({Height:"height",Width:"width"},function(l,r){t.each({padding:"inner"+l,content:r,"":"outer"+l},function(d,h){t.fn[h]=function(i,m){var g=arguments.length&&(d||typeof i!="boolean"),f=d||(i===!0||m===!0?"margin":"border");return p(this,function(y,_,I){var S;return u(y)?h.indexOf("outer")===0?y["inner"+l]:y.document.documentElement["client"+l]:y.nodeType===9?(S=y.documentElement,Math.max(y.body["scroll"+l],S["scroll"+l],y.body["offset"+l],S["offset"+l],S["client"+l])):I===void 0?t.css(y,_,f):t.style(y,_,I,f)},r,g?i:void 0,g)}})}),t}.apply(k,c),a!==void 0&&(v.exports=a)},4365:(v,k,s)=>{var c,a;c=[s(927),s(4179),s(2374),s(6435),s(6853),s(4377),s(4099),s(4091),s(312),s(1730),s(6805),s(5765),s(4141),s(4049),s(177),s(3834),s(1473),s(578)],a=function(t,p,u,l,r,d,h,i,m,g,f){"use strict";var y,_,I=/^(?:toggle|show|hide)$/,S=/queueHooks$/;function N(){_&&(u.hidden===!1&&window.requestAnimationFrame?window.requestAnimationFrame(N):window.setTimeout(N,t.fx.interval),t.fx.tick())}function A(){return window.setTimeout(function(){y=void 0}),y=Date.now()}function b(w,R){var O,C=0,U={height:w};for(R=R?1:0;C<4;C+=2-R)O=h[C],U["margin"+O]=U["padding"+O]=w;return R&&(U.opacity=U.width=w),U}function B(w,R,O){for(var C,U=(L.tweeners[R]||[]).concat(L.tweeners["*"]),F=0,z=U.length;F<z;F++)if(C=U[F].call(O,R,w))return C}function E(w,R,O){var C,U,F,z,j,q,$,te,ie="width"in R||"height"in R,de=this,ne={},ce=w.style,Pe=w.nodeType&&i(w),xe=g.get(w,"fxshow");O.queue||(z=t._queueHooks(w,"fx"),z.unqueued==null&&(z.unqueued=0,j=z.empty.fire,z.empty.fire=function(){z.unqueued||j()}),z.unqueued++,de.always(function(){de.always(function(){z.unqueued--,t.queue(w,"fx").length||z.empty.fire()})}));for(C in R)if(U=R[C],I.test(U)){if(delete R[C],F=F||U==="toggle",U===(Pe?"hide":"show"))if(U==="show"&&xe&&xe[C]!==void 0)Pe=!0;else continue;ne[C]=xe&&xe[C]||t.style(w,C)}if(q=!t.isEmptyObject(R),!(!q&&t.isEmptyObject(ne))){ie&&w.nodeType===1&&(O.overflow=[ce.overflow,ce.overflowX,ce.overflowY],$=xe&&xe.display,$==null&&($=g.get(w,"display")),te=t.css(w,"display"),te==="none"&&($?te=$:(f([w],!0),$=w.style.display||$,te=t.css(w,"display"),f([w]))),(te==="inline"||te==="inline-block"&&$!=null)&&t.css(w,"float")==="none"&&(q||(de.done(function(){ce.display=$}),$==null&&(te=ce.display,$=te==="none"?"":te)),ce.display="inline-block")),O.overflow&&(ce.overflow="hidden",de.always(function(){ce.overflow=O.overflow[0],ce.overflowX=O.overflow[1],ce.overflowY=O.overflow[2]})),q=!1;for(C in ne)q||(xe?"hidden"in xe&&(Pe=xe.hidden):xe=g.access(w,"fxshow",{display:$}),F&&(xe.hidden=!Pe),Pe&&f([w],!0),de.done(function(){Pe||f([w]),g.remove(w,"fxshow");for(C in ne)t.style(w,C,ne[C])})),q=B(Pe?xe[C]:0,C,de),C in xe||(xe[C]=q.start,Pe&&(q.end=q.start,q.start=0))}}function D(w,R){var O,C,U,F,z;for(O in w)if(C=p(O),U=R[C],F=w[O],Array.isArray(F)&&(U=F[1],F=w[O]=F[0]),O!==C&&(w[C]=F,delete w[O]),z=t.cssHooks[C],z&&"expand"in z){F=z.expand(F),delete w[C];for(O in F)O in w||(w[O]=F[O],R[O]=U)}else R[C]=U}function L(w,R,O){var C,U,F=0,z=L.prefilters.length,j=t.Deferred().always(function(){delete q.elem}),q=function(){if(U)return!1;for(var ie=y||A(),de=Math.max(0,$.startTime+$.duration-ie),ne=de/$.duration||0,ce=1-ne,Pe=0,xe=$.tweens.length;Pe<xe;Pe++)$.tweens[Pe].run(ce);return j.notifyWith(w,[$,ce,de]),ce<1&&xe?de:(xe||j.notifyWith(w,[$,1,0]),j.resolveWith(w,[$]),!1)},$=j.promise({elem:w,props:t.extend({},R),opts:t.extend(!0,{specialEasing:{},easing:t.easing._default},O),originalProperties:R,originalOptions:O,startTime:y||A(),duration:O.duration,tweens:[],createTween:function(ie,de){var ne=t.Tween(w,$.opts,ie,de,$.opts.specialEasing[ie]||$.opts.easing);return $.tweens.push(ne),ne},stop:function(ie){var de=0,ne=ie?$.tweens.length:0;if(U)return this;for(U=!0;de<ne;de++)$.tweens[de].run(1);return ie?(j.notifyWith(w,[$,1,0]),j.resolveWith(w,[$,ie])):j.rejectWith(w,[$,ie]),this}}),te=$.props;for(D(te,$.opts.specialEasing);F<z;F++)if(C=L.prefilters[F].call($,w,te,$.opts),C)return l(C.stop)&&(t._queueHooks($.elem,$.opts.queue).stop=C.stop.bind(C)),C;return t.map(te,B,$),l($.opts.start)&&$.opts.start.call(w,$),$.progress($.opts.progress).done($.opts.done,$.opts.complete).fail($.opts.fail).always($.opts.always),t.fx.timer(t.extend(q,{elem:w,anim:$,queue:$.opts.queue})),$}return t.Animation=t.extend(L,{tweeners:{"*":[function(w,R){var O=this.createTween(w,R);return m(O.elem,w,r.exec(R),O),O}]},tweener:function(w,R){l(w)?(R=w,w=["*"]):w=w.match(d);for(var O,C=0,U=w.length;C<U;C++)O=w[C],L.tweeners[O]=L.tweeners[O]||[],L.tweeners[O].unshift(R)},prefilters:[E],prefilter:function(w,R){R?L.prefilters.unshift(w):L.prefilters.push(w)}}),t.speed=function(w,R,O){var C=w&&typeof w=="object"?t.extend({},w):{complete:O||!O&&R||l(w)&&w,duration:w,easing:O&&R||R&&!l(R)&&R};return t.fx.off?C.duration=0:typeof C.duration!="number"&&(C.duration in t.fx.speeds?C.duration=t.fx.speeds[C.duration]:C.duration=t.fx.speeds._default),(C.queue==null||C.queue===!0)&&(C.queue="fx"),C.old=C.complete,C.complete=function(){l(C.old)&&C.old.call(this),C.queue&&t.dequeue(this,C.queue)},C},t.fn.extend({fadeTo:function(w,R,O,C){return this.filter(i).css("opacity",0).show().end().animate({opacity:R},w,O,C)},animate:function(w,R,O,C){var U=t.isEmptyObject(w),F=t.speed(R,O,C),z=function(){var j=L(this,t.extend({},w),F);(U||g.get(this,"finish"))&&j.stop(!0)};return z.finish=z,U||F.queue===!1?this.each(z):this.queue(F.queue,z)},stop:function(w,R,O){var C=function(U){var F=U.stop;delete U.stop,F(O)};return typeof w!="string"&&(O=R,R=w,w=void 0),R&&this.queue(w||"fx",[]),this.each(function(){var U=!0,F=w!=null&&w+"queueHooks",z=t.timers,j=g.get(this);if(F)j[F]&&j[F].stop&&C(j[F]);else for(F in j)j[F]&&j[F].stop&&S.test(F)&&C(j[F]);for(F=z.length;F--;)z[F].elem===this&&(w==null||z[F].queue===w)&&(z[F].anim.stop(O),U=!1,z.splice(F,1));(U||!O)&&t.dequeue(this,w)})},finish:function(w){return w!==!1&&(w=w||"fx"),this.each(function(){var R,O=g.get(this),C=O[w+"queue"],U=O[w+"queueHooks"],F=t.timers,z=C?C.length:0;for(O.finish=!0,t.queue(this,w,[]),U&&U.stop&&U.stop.call(this,!0),R=F.length;R--;)F[R].elem===this&&F[R].queue===w&&(F[R].anim.stop(!0),F.splice(R,1));for(R=0;R<z;R++)C[R]&&C[R].finish&&C[R].finish.call(this);delete O.finish})}}),t.each(["toggle","show","hide"],function(w,R){var O=t.fn[R];t.fn[R]=function(C,U,F){return C==null||typeof C=="boolean"?O.apply(this,arguments):this.animate(b(R,!0),C,U,F)}}),t.each({slideDown:b("show"),slideUp:b("hide"),slideToggle:b("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(w,R){t.fn[w]=function(O,C,U){return this.animate(R,O,C,U)}}),t.timers=[],t.fx.tick=function(){var w,R=0,O=t.timers;for(y=Date.now();R<O.length;R++)w=O[R],!w()&&O[R]===w&&O.splice(R--,1);O.length||t.fx.stop(),y=void 0},t.fx.timer=function(w){t.timers.push(w),t.fx.start()},t.fx.interval=13,t.fx.start=function(){_||(_=!0,N())},t.fx.stop=function(){_=null},t.fx.speeds={slow:600,fast:200,_default:400},t}.apply(k,c),a!==void 0&&(v.exports=a)},578:(v,k,s)=>{var c,a;c=[s(927),s(5866),s(1473)],a=function(t,p){"use strict";function u(l,r,d,h,i){return new u.prototype.init(l,r,d,h,i)}t.Tween=u,u.prototype={constructor:u,init:function(l,r,d,h,i,m){this.elem=l,this.prop=d,this.easing=i||t.easing._default,this.options=r,this.start=this.now=this.cur(),this.end=h,this.unit=m||(t.cssNumber[d]?"":"px")},cur:function(){var l=u.propHooks[this.prop];return l&&l.get?l.get(this):u.propHooks._default.get(this)},run:function(l){var r,d=u.propHooks[this.prop];return this.options.duration?this.pos=r=t.easing[this.easing](l,this.options.duration*l,0,1,this.options.duration):this.pos=r=l,this.now=(this.end-this.start)*r+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),d&&d.set?d.set(this):u.propHooks._default.set(this),this}},u.prototype.init.prototype=u.prototype,u.propHooks={_default:{get:function(l){var r;return l.elem.nodeType!==1||l.elem[l.prop]!=null&&l.elem.style[l.prop]==null?l.elem[l.prop]:(r=t.css(l.elem,l.prop,""),!r||r==="auto"?0:r)},set:function(l){t.fx.step[l.prop]?t.fx.step[l.prop](l):l.elem.nodeType===1&&(t.cssHooks[l.prop]||l.elem.style[p(l.prop)]!=null)?t.style(l.elem,l.prop,l.now+l.unit):l.elem[l.prop]=l.now}}},u.propHooks.scrollTop=u.propHooks.scrollLeft={set:function(l){l.elem.nodeType&&l.elem.parentNode&&(l.elem[l.prop]=l.now)}},t.easing={linear:function(l){return l},swing:function(l){return .5-Math.cos(l*Math.PI)/2},_default:"swing"},t.fx=u.prototype.init,t.fx.step={}}.apply(k,c),a!==void 0&&(v.exports=a)},9157:(v,k,s)=>{var c,a;c=[s(927),s(4598),s(4365)],a=function(t){"use strict";t.expr.pseudos.animated=function(p){return t.grep(t.timers,function(u){return p===u.elem}).length}}.apply(k,c),a!==void 0&&(v.exports=a)},3320:(v,k,s)=>{var c,a;c=[s(927),s(2374),s(3e3),s(6435),s(4377),s(6183),s(2250),s(5340),s(1730),s(3624),s(5765),s(4598)],a=function(t,p,u,l,r,d,h,i,m,g){"use strict";var f=/^([^.]*)(?:\.(.+)|)/;function y(){return!0}function _(){return!1}function I(b,B){return b===S()==(B==="focus")}function S(){try{return p.activeElement}catch(b){}}function N(b,B,E,D,L,w){var R,O;if(typeof B=="object"){typeof E!="string"&&(D=D||E,E=void 0);for(O in B)N(b,O,E,D,B[O],w);return b}if(D==null&&L==null?(L=E,D=E=void 0):L==null&&(typeof E=="string"?(L=D,D=void 0):(L=D,D=E,E=void 0)),L===!1)L=_;else if(!L)return b;return w===1&&(R=L,L=function(C){return t().off(C),R.apply(this,arguments)},L.guid=R.guid||(R.guid=t.guid++)),b.each(function(){t.event.add(this,B,L,D,E)})}t.event={global:{},add:function(b,B,E,D,L){var w,R,O,C,U,F,z,j,q,$,te,ie=m.get(b);if(!!i(b))for(E.handler&&(w=E,E=w.handler,L=w.selector),L&&t.find.matchesSelector(u,L),E.guid||(E.guid=t.guid++),(C=ie.events)||(C=ie.events=Object.create(null)),(R=ie.handle)||(R=ie.handle=function(de){return typeof t!="undefined"&&t.event.triggered!==de.type?t.event.dispatch.apply(b,arguments):void 0}),B=(B||"").match(r)||[""],U=B.length;U--;)O=f.exec(B[U])||[],q=te=O[1],$=(O[2]||"").split(".").sort(),q&&(z=t.event.special[q]||{},q=(L?z.delegateType:z.bindType)||q,z=t.event.special[q]||{},F=t.extend({type:q,origType:te,data:D,handler:E,guid:E.guid,selector:L,needsContext:L&&t.expr.match.needsContext.test(L),namespace:$.join(".")},w),(j=C[q])||(j=C[q]=[],j.delegateCount=0,(!z.setup||z.setup.call(b,D,$,R)===!1)&&b.addEventListener&&b.addEventListener(q,R)),z.add&&(z.add.call(b,F),F.handler.guid||(F.handler.guid=E.guid)),L?j.splice(j.delegateCount++,0,F):j.push(F),t.event.global[q]=!0)},remove:function(b,B,E,D,L){var w,R,O,C,U,F,z,j,q,$,te,ie=m.hasData(b)&&m.get(b);if(!(!ie||!(C=ie.events))){for(B=(B||"").match(r)||[""],U=B.length;U--;){if(O=f.exec(B[U])||[],q=te=O[1],$=(O[2]||"").split(".").sort(),!q){for(q in C)t.event.remove(b,q+B[U],E,D,!0);continue}for(z=t.event.special[q]||{},q=(D?z.delegateType:z.bindType)||q,j=C[q]||[],O=O[2]&&new RegExp("(^|\\.)"+$.join("\\.(?:.*\\.|)")+"(\\.|$)"),R=w=j.length;w--;)F=j[w],(L||te===F.origType)&&(!E||E.guid===F.guid)&&(!O||O.test(F.namespace))&&(!D||D===F.selector||D==="**"&&F.selector)&&(j.splice(w,1),F.selector&&j.delegateCount--,z.remove&&z.remove.call(b,F));R&&!j.length&&((!z.teardown||z.teardown.call(b,$,ie.handle)===!1)&&t.removeEvent(b,q,ie.handle),delete C[q])}t.isEmptyObject(C)&&m.remove(b,"handle events")}},dispatch:function(b){var B,E,D,L,w,R,O=new Array(arguments.length),C=t.event.fix(b),U=(m.get(this,"events")||Object.create(null))[C.type]||[],F=t.event.special[C.type]||{};for(O[0]=C,B=1;B<arguments.length;B++)O[B]=arguments[B];if(C.delegateTarget=this,!(F.preDispatch&&F.preDispatch.call(this,C)===!1)){for(R=t.event.handlers.call(this,C,U),B=0;(L=R[B++])&&!C.isPropagationStopped();)for(C.currentTarget=L.elem,E=0;(w=L.handlers[E++])&&!C.isImmediatePropagationStopped();)(!C.rnamespace||w.namespace===!1||C.rnamespace.test(w.namespace))&&(C.handleObj=w,C.data=w.data,D=((t.event.special[w.origType]||{}).handle||w.handler).apply(L.elem,O),D!==void 0&&(C.result=D)===!1&&(C.preventDefault(),C.stopPropagation()));return F.postDispatch&&F.postDispatch.call(this,C),C.result}},handlers:function(b,B){var E,D,L,w,R,O=[],C=B.delegateCount,U=b.target;if(C&&U.nodeType&&!(b.type==="click"&&b.button>=1)){for(;U!==this;U=U.parentNode||this)if(U.nodeType===1&&!(b.type==="click"&&U.disabled===!0)){for(w=[],R={},E=0;E<C;E++)D=B[E],L=D.selector+" ",R[L]===void 0&&(R[L]=D.needsContext?t(L,this).index(U)>-1:t.find(L,this,null,[U]).length),R[L]&&w.push(D);w.length&&O.push({elem:U,handlers:w})}}return U=this,C<B.length&&O.push({elem:U,handlers:B.slice(C)}),O},addProp:function(b,B){Object.defineProperty(t.Event.prototype,b,{enumerable:!0,configurable:!0,get:l(B)?function(){if(this.originalEvent)return B(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[b]},set:function(E){Object.defineProperty(this,b,{enumerable:!0,configurable:!0,writable:!0,value:E})}})},fix:function(b){return b[t.expando]?b:new t.Event(b)},special:{load:{noBubble:!0},click:{setup:function(b){var B=this||b;return d.test(B.type)&&B.click&&g(B,"input")&&A(B,"click",y),!1},trigger:function(b){var B=this||b;return d.test(B.type)&&B.click&&g(B,"input")&&A(B,"click"),!0},_default:function(b){var B=b.target;return d.test(B.type)&&B.click&&g(B,"input")&&m.get(B,"click")||g(B,"a")}},beforeunload:{postDispatch:function(b){b.result!==void 0&&b.originalEvent&&(b.originalEvent.returnValue=b.result)}}}};function A(b,B,E){if(!E){m.get(b,B)===void 0&&t.event.add(b,B,y);return}m.set(b,B,!1),t.event.add(b,B,{namespace:!1,handler:function(D){var L,w,R=m.get(this,B);if(D.isTrigger&1&&this[B]){if(R.length)(t.event.special[B]||{}).delegateType&&D.stopPropagation();else if(R=h.call(arguments),m.set(this,B,R),L=E(this,B),this[B](),w=m.get(this,B),R!==w||L?m.set(this,B,!1):w={},R!==w)return D.stopImmediatePropagation(),D.preventDefault(),w&&w.value}else R.length&&(m.set(this,B,{value:t.event.trigger(t.extend(R[0],t.Event.prototype),R.slice(1),this)}),D.stopImmediatePropagation())}})}return t.removeEvent=function(b,B,E){b.removeEventListener&&b.removeEventListener(B,E)},t.Event=function(b,B){if(!(this instanceof t.Event))return new t.Event(b,B);b&&b.type?(this.originalEvent=b,this.type=b.type,this.isDefaultPrevented=b.defaultPrevented||b.defaultPrevented===void 0&&b.returnValue===!1?y:_,this.target=b.target&&b.target.nodeType===3?b.target.parentNode:b.target,this.currentTarget=b.currentTarget,this.relatedTarget=b.relatedTarget):this.type=b,B&&t.extend(this,B),this.timeStamp=b&&b.timeStamp||Date.now(),this[t.expando]=!0},t.Event.prototype={constructor:t.Event,isDefaultPrevented:_,isPropagationStopped:_,isImmediatePropagationStopped:_,isSimulated:!1,preventDefault:function(){var b=this.originalEvent;this.isDefaultPrevented=y,b&&!this.isSimulated&&b.preventDefault()},stopPropagation:function(){var b=this.originalEvent;this.isPropagationStopped=y,b&&!this.isSimulated&&b.stopPropagation()},stopImmediatePropagation:function(){var b=this.originalEvent;this.isImmediatePropagationStopped=y,b&&!this.isSimulated&&b.stopImmediatePropagation(),this.stopPropagation()}},t.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},t.event.addProp),t.each({focus:"focusin",blur:"focusout"},function(b,B){t.event.special[b]={setup:function(){return A(this,b,I),!1},trigger:function(){return A(this,b),!0},_default:function(){return!0},delegateType:B}}),t.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(b,B){t.event.special[b]={delegateType:B,bindType:B,handle:function(E){var D,L=this,w=E.relatedTarget,R=E.handleObj;return(!w||w!==L&&!t.contains(L,w))&&(E.type=R.origType,D=R.handler.apply(this,arguments),E.type=B),D}}}),t.fn.extend({on:function(b,B,E,D){return N(this,b,B,E,D)},one:function(b,B,E,D){return N(this,b,B,E,D,1)},off:function(b,B,E){var D,L;if(b&&b.preventDefault&&b.handleObj)return D=b.handleObj,t(b.delegateTarget).off(D.namespace?D.origType+"."+D.namespace:D.origType,D.selector,D.handler),this;if(typeof b=="object"){for(L in b)this.off(L,B,b[L]);return this}return(B===!1||typeof B=="function")&&(E=B,B=void 0),E===!1&&(E=_),this.each(function(){t.event.remove(this,b,E,B)})}}),t}.apply(k,c),a!==void 0&&(v.exports=a)},7348:(v,k,s)=>{var c,a;c=[s(927),s(1730),s(4287),s(3320),s(1085)],a=function(t,p,u){"use strict";return u.focusin||t.each({focus:"focusin",blur:"focusout"},function(l,r){var d=function(h){t.event.simulate(r,h.target,t.event.fix(h))};t.event.special[r]={setup:function(){var h=this.ownerDocument||this.document||this,i=p.access(h,r);i||h.addEventListener(l,d,!0),p.access(h,r,(i||0)+1)},teardown:function(){var h=this.ownerDocument||this.document||this,i=p.access(h,r)-1;i?p.access(h,r,i):(h.removeEventListener(l,d,!0),p.remove(h,r))}}}),t}.apply(k,c),a!==void 0&&(v.exports=a)},4287:(v,k,s)=>{var c,a;c=[s(6272)],a=function(t){"use strict";return t.focusin="onfocusin"in window,t}.apply(k,c),a!==void 0&&(v.exports=a)},1085:(v,k,s)=>{var c,a;c=[s(927),s(2374),s(1730),s(5340),s(641),s(6435),s(2345),s(3320)],a=function(t,p,u,l,r,d,h){"use strict";var i=/^(?:focusinfocus|focusoutblur)$/,m=function(g){g.stopPropagation()};return t.extend(t.event,{trigger:function(g,f,y,_){var I,S,N,A,b,B,E,D,L=[y||p],w=r.call(g,"type")?g.type:g,R=r.call(g,"namespace")?g.namespace.split("."):[];if(S=D=N=y=y||p,!(y.nodeType===3||y.nodeType===8)&&!i.test(w+t.event.triggered)&&(w.indexOf(".")>-1&&(R=w.split("."),w=R.shift(),R.sort()),b=w.indexOf(":")<0&&"on"+w,g=g[t.expando]?g:new t.Event(w,typeof g=="object"&&g),g.isTrigger=_?2:3,g.namespace=R.join("."),g.rnamespace=g.namespace?new RegExp("(^|\\.)"+R.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,g.result=void 0,g.target||(g.target=y),f=f==null?[g]:t.makeArray(f,[g]),E=t.event.special[w]||{},!(!_&&E.trigger&&E.trigger.apply(y,f)===!1))){if(!_&&!E.noBubble&&!h(y)){for(A=E.delegateType||w,i.test(A+w)||(S=S.parentNode);S;S=S.parentNode)L.push(S),N=S;N===(y.ownerDocument||p)&&L.push(N.defaultView||N.parentWindow||window)}for(I=0;(S=L[I++])&&!g.isPropagationStopped();)D=S,g.type=I>1?A:E.bindType||w,B=(u.get(S,"events")||Object.create(null))[g.type]&&u.get(S,"handle"),B&&B.apply(S,f),B=b&&S[b],B&&B.apply&&l(S)&&(g.result=B.apply(S,f),g.result===!1&&g.preventDefault());return g.type=w,!_&&!g.isDefaultPrevented()&&(!E._default||E._default.apply(L.pop(),f)===!1)&&l(y)&&b&&d(y[w])&&!h(y)&&(N=y[b],N&&(y[b]=null),t.event.triggered=w,g.isPropagationStopped()&&D.addEventListener(w,m),y[w](),g.isPropagationStopped()&&D.removeEventListener(w,m),t.event.triggered=void 0,N&&(y[b]=N)),g.result}},simulate:function(g,f,y){var _=t.extend(new t.Event,y,{type:g,isSimulated:!0});t.event.trigger(_,null,f)}}),t.fn.extend({trigger:function(g,f){return this.each(function(){t.event.trigger(g,f,this)})},triggerHandler:function(g,f){var y=this[0];if(y)return t.event.trigger(g,f,y,!0)}}),t}.apply(k,c),a!==void 0&&(v.exports=a)},4482:(v,k,s)=>{var c,a,c,a;c=[s(927)],a=function(t){"use strict";c=[],a=function(){return t}.apply(k,c),a!==void 0&&(v.exports=a)}.apply(k,c),a!==void 0&&(v.exports=a)},721:(v,k,s)=>{var c,a;c=[s(927)],a=function(t){"use strict";var p=window.jQuery,u=window.$;t.noConflict=function(l){return window.$===t&&(window.$=u),l&&window.jQuery===t&&(window.jQuery=p),t},typeof noGlobal=="undefined"&&(window.jQuery=window.$=t)}.apply(k,c),a!==void 0&&(v.exports=a)},5701:(v,k,s)=>{var c,a;c=[s(927),s(4598),s(177),s(5481),s(4049),s(2959),s(9006),s(7450),s(4141),s(2096),s(6101),s(3320),s(7348),s(3834),s(9322),s(8063),s(1473),s(8405),s(6844),s(5514),s(4854),s(5002),s(433),s(4744),s(6270),s(2695),s(4365),s(9157),s(4066),s(9229),s(7412),s(4482),s(721)],a=function(t){"use strict";return t}.apply(k,c),a!==void 0&&(v.exports=a)},3834:(v,k,s)=>{var c,a;c=[s(927),s(9205),s(3145),s(6435),s(5079),s(6183),s(4271),s(860),s(3576),s(9416),s(1667),s(1926),s(3088),s(4480),s(1730),s(4902),s(5340),s(9385),s(3624),s(5765),s(177),s(4598),s(3320)],a=function(t,p,u,l,r,d,h,i,m,g,f,y,_,I,S,N,A,b,B){"use strict";var E=/<script|<style|<link/i,D=/checked\s*(?:[^=]|=\s*.checked.)/i,L=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function w(j,q){return B(j,"table")&&B(q.nodeType!==11?q:q.firstChild,"tr")&&t(j).children("tbody")[0]||j}function R(j){return j.type=(j.getAttribute("type")!==null)+"/"+j.type,j}function O(j){return(j.type||"").slice(0,5)==="true/"?j.type=j.type.slice(5):j.removeAttribute("type"),j}function C(j,q){var $,te,ie,de,ne,ce,Pe;if(q.nodeType===1){if(S.hasData(j)&&(de=S.get(j),Pe=de.events,Pe)){S.remove(q,"handle events");for(ie in Pe)for($=0,te=Pe[ie].length;$<te;$++)t.event.add(q,ie,Pe[ie][$])}N.hasData(j)&&(ne=N.access(j),ce=t.extend({},ne),N.set(q,ce))}}function U(j,q){var $=q.nodeName.toLowerCase();$==="input"&&d.test(j.type)?q.checked=j.checked:($==="input"||$==="textarea")&&(q.defaultValue=j.defaultValue)}function F(j,q,$,te){q=u(q);var ie,de,ne,ce,Pe,xe,rn=0,mn=j.length,fn=mn-1,_n=q[0],An=l(_n);if(An||mn>1&&typeof _n=="string"&&!I.checkClone&&D.test(_n))return j.each(function(Ee){var Nn=j.eq(Ee);An&&(q[0]=_n.call(this,Ee,Nn.html())),F(Nn,q,$,te)});if(mn&&(ie=_(q,j[0].ownerDocument,!1,j,te),de=ie.firstChild,ie.childNodes.length===1&&(ie=de),de||te)){for(ne=t.map(f(ie,"script"),R),ce=ne.length;rn<mn;rn++)Pe=ie,rn!==fn&&(Pe=t.clone(Pe,!0,!0),ce&&t.merge(ne,f(Pe,"script"))),$.call(j[rn],Pe,rn);if(ce)for(xe=ne[ne.length-1].ownerDocument,t.map(ne,O),rn=0;rn<ce;rn++)Pe=ne[rn],m.test(Pe.type||"")&&!S.access(Pe,"globalEval")&&t.contains(xe,Pe)&&(Pe.src&&(Pe.type||"").toLowerCase()!=="module"?t._evalUrl&&!Pe.noModule&&t._evalUrl(Pe.src,{nonce:Pe.nonce||Pe.getAttribute("nonce")},xe):b(Pe.textContent.replace(L,""),Pe,xe))}return j}function z(j,q,$){for(var te,ie=q?t.filter(q,j):j,de=0;(te=ie[de])!=null;de++)!$&&te.nodeType===1&&t.cleanData(f(te)),te.parentNode&&($&&p(te)&&y(f(te,"script")),te.parentNode.removeChild(te));return j}return t.extend({htmlPrefilter:function(j){return j},clone:function(j,q,$){var te,ie,de,ne,ce=j.cloneNode(!0),Pe=p(j);if(!I.noCloneChecked&&(j.nodeType===1||j.nodeType===11)&&!t.isXMLDoc(j))for(ne=f(ce),de=f(j),te=0,ie=de.length;te<ie;te++)U(de[te],ne[te]);if(q)if($)for(de=de||f(j),ne=ne||f(ce),te=0,ie=de.length;te<ie;te++)C(de[te],ne[te]);else C(j,ce);return ne=f(ce,"script"),ne.length>0&&y(ne,!Pe&&f(j,"script")),ce},cleanData:function(j){for(var q,$,te,ie=t.event.special,de=0;($=j[de])!==void 0;de++)if(A($)){if(q=$[S.expando]){if(q.events)for(te in q.events)ie[te]?t.event.remove($,te):t.removeEvent($,te,q.handle);$[S.expando]=void 0}$[N.expando]&&($[N.expando]=void 0)}}}),t.fn.extend({detach:function(j){return z(this,j,!0)},remove:function(j){return z(this,j)},text:function(j){return h(this,function(q){return q===void 0?t.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=q)})},null,j,arguments.length)},append:function(){return F(this,arguments,function(j){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var q=w(this,j);q.appendChild(j)}})},prepend:function(){return F(this,arguments,function(j){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var q=w(this,j);q.insertBefore(j,q.firstChild)}})},before:function(){return F(this,arguments,function(j){this.parentNode&&this.parentNode.insertBefore(j,this)})},after:function(){return F(this,arguments,function(j){this.parentNode&&this.parentNode.insertBefore(j,this.nextSibling)})},empty:function(){for(var j,q=0;(j=this[q])!=null;q++)j.nodeType===1&&(t.cleanData(f(j,!1)),j.textContent="");return this},clone:function(j,q){return j=j==null?!1:j,q=q==null?j:q,this.map(function(){return t.clone(this,j,q)})},html:function(j){return h(this,function(q){var $=this[0]||{},te=0,ie=this.length;if(q===void 0&&$.nodeType===1)return $.innerHTML;if(typeof q=="string"&&!E.test(q)&&!g[(i.exec(q)||["",""])[1].toLowerCase()]){q=t.htmlPrefilter(q);try{for(;te<ie;te++)$=this[te]||{},$.nodeType===1&&(t.cleanData(f($,!1)),$.innerHTML=q);$=0}catch(de){}}$&&this.empty().append(q)},null,j,arguments.length)},replaceWith:function(){var j=[];return F(this,arguments,function(q){var $=this.parentNode;t.inArray(this,j)<0&&(t.cleanData(f(this)),$&&$.replaceChild(q,this))},j)}}),t.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(j,q){t.fn[j]=function($){for(var te,ie=[],de=t($),ne=de.length-1,ce=0;ce<=ne;ce++)te=ce===ne?this:this.clone(!0),t(de[ce])[q](te),r.apply(ie,te.get());return this.pushStack(ie)}}),t}.apply(k,c),a!==void 0&&(v.exports=a)},9322:(v,k,s)=>{var c,a;c=[s(5514)],a=function(t){"use strict";return t._evalUrl=function(p,u,l){return t.ajax({url:p,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(r){t.globalEval(r,u,l)}})},t._evalUrl}.apply(k,c),a!==void 0&&(v.exports=a)},3088:(v,k,s)=>{var c,a;c=[s(927),s(5399),s(9205),s(860),s(3576),s(9416),s(1667),s(1926)],a=function(t,p,u,l,r,d,h,i){"use strict";var m=/<|&#?\w+;/;function g(f,y,_,I,S){for(var N,A,b,B,E,D,L=y.createDocumentFragment(),w=[],R=0,O=f.length;R<O;R++)if(N=f[R],N||N===0)if(p(N)==="object")t.merge(w,N.nodeType?[N]:N);else if(!m.test(N))w.push(y.createTextNode(N));else{for(A=A||L.appendChild(y.createElement("div")),b=(l.exec(N)||["",""])[1].toLowerCase(),B=d[b]||d._default,A.innerHTML=B[1]+t.htmlPrefilter(N)+B[2],D=B[0];D--;)A=A.lastChild;t.merge(w,A.childNodes),A=L.firstChild,A.textContent=""}for(L.textContent="",R=0;N=w[R++];){if(I&&t.inArray(N,I)>-1){S&&S.push(N);continue}if(E=u(N),A=h(L.appendChild(N),"script"),E&&i(A),_)for(D=0;N=A[D++];)r.test(N.type||"")&&_.push(N)}return L}return g}.apply(k,c),a!==void 0&&(v.exports=a)},1667:(v,k,s)=>{var c,a;c=[s(927),s(3624)],a=function(t,p){"use strict";function u(l,r){var d;return typeof l.getElementsByTagName!="undefined"?d=l.getElementsByTagName(r||"*"):typeof l.querySelectorAll!="undefined"?d=l.querySelectorAll(r||"*"):d=[],r===void 0||r&&p(l,r)?t.merge([l],d):d}return u}.apply(k,c),a!==void 0&&(v.exports=a)},1926:(v,k,s)=>{var c,a;c=[s(1730)],a=function(t){"use strict";function p(u,l){for(var r=0,d=u.length;r<d;r++)t.set(u[r],"globalEval",!l||t.get(l[r],"globalEval"))}return p}.apply(k,c),a!==void 0&&(v.exports=a)},4480:(v,k,s)=>{var c,a;c=[s(2374),s(6272)],a=function(t,p){"use strict";return function(){var u=t.createDocumentFragment(),l=u.appendChild(t.createElement("div")),r=t.createElement("input");r.setAttribute("type","radio"),r.setAttribute("checked","checked"),r.setAttribute("name","t"),l.appendChild(r),p.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,l.innerHTML="<textarea>x</textarea>",p.noCloneChecked=!!l.cloneNode(!0).lastChild.defaultValue,l.innerHTML="<option></option>",p.option=!!l.lastChild}(),p}.apply(k,c),a!==void 0&&(v.exports=a)},3576:(v,k,s)=>{var c;c=function(){"use strict";return/^$|^module$|\/(?:java|ecma)script/i}.call(k,s,k,v),c!==void 0&&(v.exports=c)},860:(v,k,s)=>{var c;c=function(){"use strict";return/<([a-z][^\/\0>\x20\t\r\n\f]*)/i}.call(k,s,k,v),c!==void 0&&(v.exports=c)},9416:(v,k,s)=>{var c,a;c=[s(4480)],a=function(t){"use strict";var p={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};return p.tbody=p.tfoot=p.colgroup=p.caption=p.thead,p.th=p.td,t.option||(p.optgroup=p.option=[1,"<select multiple='multiple'>","</select>"]),p}.apply(k,c),a!==void 0&&(v.exports=a)},4066:(v,k,s)=>{var c,a;c=[s(927),s(4271),s(3e3),s(6435),s(7895),s(7119),s(399),s(2928),s(2345),s(5765),s(1473),s(4598)],a=function(t,p,u,l,r,d,h,i,m){"use strict";return t.offset={setOffset:function(g,f,y){var _,I,S,N,A,b,B,E=t.css(g,"position"),D=t(g),L={};E==="static"&&(g.style.position="relative"),A=D.offset(),S=t.css(g,"top"),b=t.css(g,"left"),B=(E==="absolute"||E==="fixed")&&(S+b).indexOf("auto")>-1,B?(_=D.position(),N=_.top,I=_.left):(N=parseFloat(S)||0,I=parseFloat(b)||0),l(f)&&(f=f.call(g,y,t.extend({},A))),f.top!=null&&(L.top=f.top-A.top+N),f.left!=null&&(L.left=f.left-A.left+I),"using"in f?f.using.call(g,L):D.css(L)}},t.fn.extend({offset:function(g){if(arguments.length)return g===void 0?this:this.each(function(I){t.offset.setOffset(this,g,I)});var f,y,_=this[0];if(!!_)return _.getClientRects().length?(f=_.getBoundingClientRect(),y=_.ownerDocument.defaultView,{top:f.top+y.pageYOffset,left:f.left+y.pageXOffset}):{top:0,left:0}},position:function(){if(!!this[0]){var g,f,y,_=this[0],I={top:0,left:0};if(t.css(_,"position")==="fixed")f=_.getBoundingClientRect();else{for(f=this.offset(),y=_.ownerDocument,g=_.offsetParent||y.documentElement;g&&(g===y.body||g===y.documentElement)&&t.css(g,"position")==="static";)g=g.parentNode;g&&g!==_&&g.nodeType===1&&(I=t(g).offset(),I.top+=t.css(g,"borderTopWidth",!0),I.left+=t.css(g,"borderLeftWidth",!0))}return{top:f.top-I.top-t.css(_,"marginTop",!0),left:f.left-I.left-t.css(_,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var g=this.offsetParent;g&&t.css(g,"position")==="static";)g=g.offsetParent;return g||u})}}),t.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(g,f){var y=f==="pageYOffset";t.fn[g]=function(_){return p(this,function(I,S,N){var A;if(m(I)?A=I:I.nodeType===9&&(A=I.defaultView),N===void 0)return A?A[f]:I[S];A?A.scrollTo(y?A.pageXOffset:N,y?N:A.pageYOffset):I[S]=N},g,_,arguments.length)}}),t.each(["top","left"],function(g,f){t.cssHooks[f]=h(i.pixelPosition,function(y,_){if(_)return _=d(y,f),r.test(_)?t(y).position()[f]+"px":_})}),t}.apply(k,c),a!==void 0&&(v.exports=a)},4141:(v,k,s)=>{var c,a;c=[s(927),s(1730),s(4049),s(5481)],a=function(t,p){"use strict";return t.extend({queue:function(u,l,r){var d;if(u)return l=(l||"fx")+"queue",d=p.get(u,l),r&&(!d||Array.isArray(r)?d=p.access(u,l,t.makeArray(r)):d.push(r)),d||[]},dequeue:function(u,l){l=l||"fx";var r=t.queue(u,l),d=r.length,h=r.shift(),i=t._queueHooks(u,l),m=function(){t.dequeue(u,l)};h==="inprogress"&&(h=r.shift(),d--),h&&(l==="fx"&&r.unshift("inprogress"),delete i.stop,h.call(u,m,i)),!d&&i&&i.empty.fire()},_queueHooks:function(u,l){var r=l+"queueHooks";return p.get(u,r)||p.access(u,r,{empty:t.Callbacks("once memory").add(function(){p.remove(u,[l+"queue",r])})})}}),t.fn.extend({queue:function(u,l){var r=2;return typeof u!="string"&&(l=u,u="fx",r--),arguments.length<r?t.queue(this[0],u):l===void 0?this:this.each(function(){var d=t.queue(this,u,l);t._queueHooks(this,u),u==="fx"&&d[0]!=="inprogress"&&t.dequeue(this,u)})},dequeue:function(u){return this.each(function(){t.dequeue(this,u)})},clearQueue:function(u){return this.queue(u||"fx",[])},promise:function(u,l){var r,d=1,h=t.Deferred(),i=this,m=this.length,g=function(){--d||h.resolveWith(i,[i])};for(typeof u!="string"&&(l=u,u=void 0),u=u||"fx";m--;)r=p.get(i[m],u+"queueHooks"),r&&r.empty&&(d++,r.empty.add(g));return g(),h.promise(l)}}),t}.apply(k,c),a!==void 0&&(v.exports=a)},2096:(v,k,s)=>{var c,a;c=[s(927),s(4141),s(4365)],a=function(t){"use strict";return t.fn.delay=function(p,u){return p=t.fx&&t.fx.speeds[p]||p,u=u||"fx",this.queue(u,function(l,r){var d=window.setTimeout(l,p);r.stop=function(){window.clearTimeout(d)}})},t.fn.delay}.apply(k,c),a!==void 0&&(v.exports=a)},5735:(v,k,s)=>{var c,a;c=[s(927),s(1610)],a=function(t,p){"use strict";t.find=p,t.expr=p.selectors,t.expr[":"]=t.expr.pseudos,t.uniqueSort=t.unique=p.uniqueSort,t.text=p.getText,t.isXMLDoc=p.isXML,t.contains=p.contains,t.escapeSelector=p.escape}.apply(k,c),a!==void 0&&(v.exports=a)},4598:(v,k,s)=>{var c,a;c=[s(5735)],a=function(){"use strict"}.apply(k,c),a!==void 0&&(v.exports=a)},6844:(v,k,s)=>{var c,a;c=[s(927),s(5399),s(6183),s(6435),s(5765),s(177),s(3851)],a=function(t,p,u,l){"use strict";var r=/\[\]$/,d=/\r?\n/g,h=/^(?:submit|button|image|reset|file)$/i,i=/^(?:input|select|textarea|keygen)/i;function m(g,f,y,_){var I;if(Array.isArray(f))t.each(f,function(S,N){y||r.test(g)?_(g,N):m(g+"["+(typeof N=="object"&&N!=null?S:"")+"]",N,y,_)});else if(!y&&p(f)==="object")for(I in f)m(g+"["+I+"]",f[I],y,_);else _(g,f)}return t.param=function(g,f){var y,_=[],I=function(S,N){var A=l(N)?N():N;_[_.length]=encodeURIComponent(S)+"="+encodeURIComponent(A==null?"":A)};if(g==null)return"";if(Array.isArray(g)||g.jquery&&!t.isPlainObject(g))t.each(g,function(){I(this.name,this.value)});else for(y in g)m(y,g[y],f,I);return _.join("&")},t.fn.extend({serialize:function(){return t.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var g=t.prop(this,"elements");return g?t.makeArray(g):this}).filter(function(){var g=this.type;return this.name&&!t(this).is(":disabled")&&i.test(this.nodeName)&&!h.test(g)&&(this.checked||!u.test(g))}).map(function(g,f){var y=t(this).val();return y==null?null:Array.isArray(y)?t.map(y,function(_){return{name:f.name,value:_.replace(d,`\r
`)}}):{name:f.name,value:y.replace(d,`\r
`)}}).get()}}),t}.apply(k,c),a!==void 0&&(v.exports=a)},177:(v,k,s)=>{var c,a;c=[s(927),s(4161),s(9235),s(1222),s(1028),s(508),s(3624),s(5765),s(6989),s(4598)],a=function(t,p,u,l,r,d,h){"use strict";var i=/^(?:parents|prev(?:Until|All))/,m={children:!0,contents:!0,next:!0,prev:!0};t.fn.extend({has:function(f){var y=t(f,this),_=y.length;return this.filter(function(){for(var I=0;I<_;I++)if(t.contains(this,y[I]))return!0})},closest:function(f,y){var _,I=0,S=this.length,N=[],A=typeof f!="string"&&t(f);if(!d.test(f)){for(;I<S;I++)for(_=this[I];_&&_!==y;_=_.parentNode)if(_.nodeType<11&&(A?A.index(_)>-1:_.nodeType===1&&t.find.matchesSelector(_,f))){N.push(_);break}}return this.pushStack(N.length>1?t.uniqueSort(N):N)},index:function(f){return f?typeof f=="string"?u.call(t(f),this[0]):u.call(this,f.jquery?f[0]:f):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(f,y){return this.pushStack(t.uniqueSort(t.merge(this.get(),t(f,y))))},addBack:function(f){return this.add(f==null?this.prevObject:this.prevObject.filter(f))}});function g(f,y){for(;(f=f[y])&&f.nodeType!==1;);return f}return t.each({parent:function(f){var y=f.parentNode;return y&&y.nodeType!==11?y:null},parents:function(f){return l(f,"parentNode")},parentsUntil:function(f,y,_){return l(f,"parentNode",_)},next:function(f){return g(f,"nextSibling")},prev:function(f){return g(f,"previousSibling")},nextAll:function(f){return l(f,"nextSibling")},prevAll:function(f){return l(f,"previousSibling")},nextUntil:function(f,y,_){return l(f,"nextSibling",_)},prevUntil:function(f,y,_){return l(f,"previousSibling",_)},siblings:function(f){return r((f.parentNode||{}).firstChild,f)},children:function(f){return r(f.firstChild)},contents:function(f){return f.contentDocument!=null&&p(f.contentDocument)?f.contentDocument:(h(f,"template")&&(f=f.content||f),t.merge([],f.childNodes))}},function(f,y){t.fn[f]=function(_,I){var S=t.map(this,y,_);return f.slice(-5)!=="Until"&&(I=_),I&&typeof I=="string"&&(S=t.filter(I,S)),this.length>1&&(m[f]||t.uniqueSort(S),i.test(f)&&S.reverse()),this.pushStack(S)}}),t}.apply(k,c),a!==void 0&&(v.exports=a)},6989:(v,k,s)=>{var c,a;c=[s(927),s(9235),s(6435),s(508),s(4598)],a=function(t,p,u,l){"use strict";function r(d,h,i){return u(h)?t.grep(d,function(m,g){return!!h.call(m,g,m)!==i}):h.nodeType?t.grep(d,function(m){return m===h!==i}):typeof h!="string"?t.grep(d,function(m){return p.call(h,m)>-1!==i}):t.filter(h,d,i)}t.filter=function(d,h,i){var m=h[0];return i&&(d=":not("+d+")"),h.length===1&&m.nodeType===1?t.find.matchesSelector(m,d)?[m]:[]:t.find.matches(d,t.grep(h,function(g){return g.nodeType===1}))},t.fn.extend({find:function(d){var h,i,m=this.length,g=this;if(typeof d!="string")return this.pushStack(t(d).filter(function(){for(h=0;h<m;h++)if(t.contains(g[h],this))return!0}));for(i=this.pushStack([]),h=0;h<m;h++)t.find(d,g[h],i);return m>1?t.uniqueSort(i):i},filter:function(d){return this.pushStack(r(this,d||[],!1))},not:function(d){return this.pushStack(r(this,d||[],!0))},is:function(d){return!!r(this,typeof d=="string"&&l.test(d)?t(d):d||[],!1).length}})}.apply(k,c),a!==void 0&&(v.exports=a)},1222:(v,k,s)=>{var c,a;c=[s(927)],a=function(t){"use strict";return function(p,u,l){for(var r=[],d=l!==void 0;(p=p[u])&&p.nodeType!==9;)if(p.nodeType===1){if(d&&t(p).is(l))break;r.push(p)}return r}}.apply(k,c),a!==void 0&&(v.exports=a)},508:(v,k,s)=>{var c,a;c=[s(927),s(4598)],a=function(t){"use strict";return t.expr.match.needsContext}.apply(k,c),a!==void 0&&(v.exports=a)},1028:(v,k,s)=>{var c;c=function(){"use strict";return function(a,t){for(var p=[];a;a=a.nextSibling)a.nodeType===1&&a!==t&&p.push(a);return p}}.call(k,s,k,v),c!==void 0&&(v.exports=c)},6159:(v,k,s)=>{var c,a;c=[s(3225)],a=function(t){"use strict";return t.call(Object)}.apply(k,c),a!==void 0&&(v.exports=a)},9694:(v,k,s)=>{var c;c=function(){"use strict";return[]}.call(k,s,k,v),c!==void 0&&(v.exports=c)},8308:(v,k,s)=>{var c;c=function(){"use strict";return{}}.call(k,s,k,v),c!==void 0&&(v.exports=c)},2374:(v,k,s)=>{var c;c=function(){"use strict";return window.document}.call(k,s,k,v),c!==void 0&&(v.exports=c)},3e3:(v,k,s)=>{var c,a;c=[s(2374)],a=function(t){"use strict";return t.documentElement}.apply(k,c),a!==void 0&&(v.exports=a)},3145:(v,k,s)=>{var c,a;c=[s(9694)],a=function(t){"use strict";return t.flat?function(p){return t.flat.call(p)}:function(p){return t.concat.apply([],p)}}.apply(k,c),a!==void 0&&(v.exports=a)},3225:(v,k,s)=>{var c,a;c=[s(641)],a=function(t){"use strict";return t.toString}.apply(k,c),a!==void 0&&(v.exports=a)},4161:(v,k,s)=>{var c;c=function(){"use strict";return Object.getPrototypeOf}.call(k,s,k,v),c!==void 0&&(v.exports=c)},641:(v,k,s)=>{var c,a;c=[s(8308)],a=function(t){"use strict";return t.hasOwnProperty}.apply(k,c),a!==void 0&&(v.exports=a)},9235:(v,k,s)=>{var c,a;c=[s(9694)],a=function(t){"use strict";return t.indexOf}.apply(k,c),a!==void 0&&(v.exports=a)},6435:(v,k,s)=>{var c;c=function(){"use strict";return function(t){return typeof t=="function"&&typeof t.nodeType!="number"&&typeof t.item!="function"}}.call(k,s,k,v),c!==void 0&&(v.exports=c)},2345:(v,k,s)=>{var c;c=function(){"use strict";return function(t){return t!=null&&t===t.window}}.call(k,s,k,v),c!==void 0&&(v.exports=c)},6849:(v,k,s)=>{var c;c=function(){"use strict";return/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source}.call(k,s,k,v),c!==void 0&&(v.exports=c)},5079:(v,k,s)=>{var c,a;c=[s(9694)],a=function(t){"use strict";return t.push}.apply(k,c),a!==void 0&&(v.exports=a)},6183:(v,k,s)=>{var c;c=function(){"use strict";return/^(?:checkbox|radio)$/i}.call(k,s,k,v),c!==void 0&&(v.exports=c)},6853:(v,k,s)=>{var c,a;c=[s(6849)],a=function(t){"use strict";return new RegExp("^(?:([+-])=|)("+t+")([a-z%]*)$","i")}.apply(k,c),a!==void 0&&(v.exports=a)},4377:(v,k,s)=>{var c;c=function(){"use strict";return/[^\x20\t\r\n\f]+/g}.call(k,s,k,v),c!==void 0&&(v.exports=c)},2250:(v,k,s)=>{var c,a;c=[s(9694)],a=function(t){"use strict";return t.slice}.apply(k,c),a!==void 0&&(v.exports=a)},6272:(v,k,s)=>{var c;c=function(){"use strict";return{}}.call(k,s,k,v),c!==void 0&&(v.exports=c)},3283:(v,k,s)=>{var c,a;c=[s(8308)],a=function(t){"use strict";return t.toString}.apply(k,c),a!==void 0&&(v.exports=a)},8063:(v,k,s)=>{var c,a;c=[s(927),s(6435),s(5765),s(3834),s(177)],a=function(t,p){"use strict";return t.fn.extend({wrapAll:function(u){var l;return this[0]&&(p(u)&&(u=u.call(this[0])),l=t(u,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&l.insertBefore(this[0]),l.map(function(){for(var r=this;r.firstElementChild;)r=r.firstElementChild;return r}).append(this)),this},wrapInner:function(u){return p(u)?this.each(function(l){t(this).wrapInner(u.call(this,l))}):this.each(function(){var l=t(this),r=l.contents();r.length?r.wrapAll(u):l.append(u)})},wrap:function(u){var l=p(u);return this.each(function(r){t(this).wrapAll(l?u.call(this,r):u)})},unwrap:function(u){return this.parent(u).not("body").each(function(){t(this).replaceWith(this.childNodes)}),this}}),t}.apply(k,c),a!==void 0&&(v.exports=a)},7366:function(v,k,s){v=s.nmd(v);var c;/**
* @license
* Lodash <https://lodash.com/>
* Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
* Released under MIT license <https://lodash.com/license>
* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
*/(function(){var a,t="4.17.21",p=200,u="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",r="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",h=500,i="__lodash_placeholder__",m=1,g=2,f=4,y=1,_=2,I=1,S=2,N=4,A=8,b=16,B=32,E=64,D=128,L=256,w=512,R=30,O="...",C=800,U=16,F=1,z=2,j=3,q=1/0,$=9007199254740991,te=17976931348623157e292,ie=0/0,de=4294967295,ne=de-1,ce=de>>>1,Pe=[["ary",D],["bind",I],["bindKey",S],["curry",A],["curryRight",b],["flip",w],["partial",B],["partialRight",E],["rearg",L]],xe="[object Arguments]",rn="[object Array]",mn="[object AsyncFunction]",fn="[object Boolean]",_n="[object Date]",An="[object DOMException]",Ee="[object Error]",Nn="[object Function]",Oe="[object GeneratorFunction]",We="[object Map]",Un="[object Number]",Ce="[object Null]",pe="[object Object]",Ae="[object Promise]",Te="[object Proxy]",re="[object RegExp]",_e="[object Set]",me="[object String]",Ie="[object Symbol]",Ve="[object Undefined]",Ge="[object WeakMap]",Xe="[object WeakSet]",Se="[object ArrayBuffer]",Ye="[object DataView]",Qe="[object Float32Array]",Ze="[object Float64Array]",Wn="[object Int8Array]",xn="[object Int16Array]",Tn="[object Int32Array]",bt="[object Uint8Array]",rt="[object Uint8ClampedArray]",Hn="[object Uint16Array]",ct="[object Uint32Array]",Cn=/\b__p \+= '';/g,ht=/\b(__p \+=) '' \+/g,kn=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Bt=/&(?:amp|lt|gt|quot|#39);/g,Mt=/[&<>"']/g,dt=RegExp(Bt.source),jt=RegExp(Mt.source),At=/<%-([\s\S]+?)%>/g,pa=/<%([\s\S]+?)%>/g,Gt=/<%=([\s\S]+?)%>/g,x=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Y=/^\w*$/,V=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,J=/[\\^$.*+?()[\]{}|]/g,W=RegExp(J.source),Z=/^\s+/,ee=/\s/,oe=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ge=/\{\n\/\* \[wrapped with (.+)\] \*/,he=/,? & /,Ne=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,be=/[()=,{}\[\]\/\s]/,Re=/\\(\\)?/g,$e=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ke=/\w*$/,Ke=/^[-+]0x[0-9a-f]+$/i,yn=/^0b[01]+$/i,En=/^\[object .+?Constructor\]$/,sn=/^0o[0-7]+$/i,Vn=/^(?:0|[1-9]\d*)$/,Ot=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,vn=/($^)/,Zo=/['\n\r\u2028\u2029\\]/g,ba="\\ud800-\\udfff",Xo="\\u0300-\\u036f",Qo="\\ufe20-\\ufe2f",ep="\\u20d0-\\u20ff",vr=Xo+Qo+ep,Sr="\\u2700-\\u27bf",br="a-z\\xdf-\\xf6\\xf8-\\xff",np="\\xac\\xb1\\xd7\\xf7",tp="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ap="\\u2000-\\u206f",ip=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Br="A-Z\\xc0-\\xd6\\xd8-\\xde",Ar="\\ufe0e\\ufe0f",Tr=np+tp+ap+ip,fi="['\u2019]",rp="["+ba+"]",Er="["+Tr+"]",Ba="["+vr+"]",wr="\\d+",sp="["+Sr+"]",Dr="["+br+"]",Lr="[^"+ba+Tr+wr+Sr+br+Br+"]",ci="\\ud83c[\\udffb-\\udfff]",op="(?:"+Ba+"|"+ci+")",Rr="[^"+ba+"]",hi="(?:\\ud83c[\\udde6-\\uddff]){2}",mi="[\\ud800-\\udbff][\\udc00-\\udfff]",Jt="["+Br+"]",Kr="\\u200d",xr="(?:"+Dr+"|"+Lr+")",pp="(?:"+Jt+"|"+Lr+")",Cr="(?:"+fi+"(?:d|ll|m|re|s|t|ve))?",Mr="(?:"+fi+"(?:D|LL|M|RE|S|T|VE))?",jr=op+"?",Or="["+Ar+"]?",lp="(?:"+Kr+"(?:"+[Rr,hi,mi].join("|")+")"+Or+jr+")*",dp="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",up="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Fr=Or+jr+lp,gp="(?:"+[sp,hi,mi].join("|")+")"+Fr,fp="(?:"+[Rr+Ba+"?",Ba,hi,mi,rp].join("|")+")",cp=RegExp(fi,"g"),hp=RegExp(Ba,"g"),_i=RegExp(ci+"(?="+ci+")|"+fp+Fr,"g"),mp=RegExp([Jt+"?"+Dr+"+"+Cr+"(?="+[Er,Jt,"$"].join("|")+")",pp+"+"+Mr+"(?="+[Er,Jt+xr,"$"].join("|")+")",Jt+"?"+xr+"+"+Cr,Jt+"+"+Mr,up,dp,wr,gp].join("|"),"g"),_p=RegExp("["+Kr+ba+vr+Ar+"]"),kp=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,yp=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Ip=-1,ln={};ln[Qe]=ln[Ze]=ln[Wn]=ln[xn]=ln[Tn]=ln[bt]=ln[rt]=ln[Hn]=ln[ct]=!0,ln[xe]=ln[rn]=ln[Se]=ln[fn]=ln[Ye]=ln[_n]=ln[Ee]=ln[Nn]=ln[We]=ln[Un]=ln[pe]=ln[re]=ln[_e]=ln[me]=ln[Ge]=!1;var pn={};pn[xe]=pn[rn]=pn[Se]=pn[Ye]=pn[fn]=pn[_n]=pn[Qe]=pn[Ze]=pn[Wn]=pn[xn]=pn[Tn]=pn[We]=pn[Un]=pn[pe]=pn[re]=pn[_e]=pn[me]=pn[Ie]=pn[bt]=pn[rt]=pn[Hn]=pn[ct]=!0,pn[Ee]=pn[Nn]=pn[Ge]=!1;var Pp={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Np={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},vp={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Sp={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},bp=parseFloat,Bp=parseInt,Ur=typeof s.g=="object"&&s.g&&s.g.Object===Object&&s.g,Ap=typeof self=="object"&&self&&self.Object===Object&&self,bn=Ur||Ap||Function("return this")(),Wr=k&&!k.nodeType&&k,la=Wr&&!0&&v&&!v.nodeType&&v,Hr=la&&la.exports===Wr,ki=Hr&&Ur.process,Zn=function(){try{var X=la&&la.require&&la.require("util").types;return X||ki&&ki.binding&&ki.binding("util")}catch(se){}}(),Yr=Zn&&Zn.isArrayBuffer,zr=Zn&&Zn.isDate,$r=Zn&&Zn.isMap,qr=Zn&&Zn.isRegExp,Gr=Zn&&Zn.isSet,Jr=Zn&&Zn.isTypedArray;function Yn(X,se,ae){switch(ae.length){case 0:return X.call(se);case 1:return X.call(se,ae[0]);case 2:return X.call(se,ae[0],ae[1]);case 3:return X.call(se,ae[0],ae[1],ae[2])}return X.apply(se,ae)}function Tp(X,se,ae,ve){for(var Me=-1,en=X==null?0:X.length;++Me<en;){var In=X[Me];se(ve,In,ae(In),X)}return ve}function Xn(X,se){for(var ae=-1,ve=X==null?0:X.length;++ae<ve&&se(X[ae],ae,X)!==!1;);return X}function Ep(X,se){for(var ae=X==null?0:X.length;ae--&&se(X[ae],ae,X)!==!1;);return X}function Vr(X,se){for(var ae=-1,ve=X==null?0:X.length;++ae<ve;)if(!se(X[ae],ae,X))return!1;return!0}function Tt(X,se){for(var ae=-1,ve=X==null?0:X.length,Me=0,en=[];++ae<ve;){var In=X[ae];se(In,ae,X)&&(en[Me++]=In)}return en}function Aa(X,se){var ae=X==null?0:X.length;return!!ae&&Vt(X,se,0)>-1}function yi(X,se,ae){for(var ve=-1,Me=X==null?0:X.length;++ve<Me;)if(ae(se,X[ve]))return!0;return!1}function dn(X,se){for(var ae=-1,ve=X==null?0:X.length,Me=Array(ve);++ae<ve;)Me[ae]=se(X[ae],ae,X);return Me}function Et(X,se){for(var ae=-1,ve=se.length,Me=X.length;++ae<ve;)X[Me+ae]=se[ae];return X}function Ii(X,se,ae,ve){var Me=-1,en=X==null?0:X.length;for(ve&&en&&(ae=X[++Me]);++Me<en;)ae=se(ae,X[Me],Me,X);return ae}function wp(X,se,ae,ve){var Me=X==null?0:X.length;for(ve&&Me&&(ae=X[--Me]);Me--;)ae=se(ae,X[Me],Me,X);return ae}function Pi(X,se){for(var ae=-1,ve=X==null?0:X.length;++ae<ve;)if(se(X[ae],ae,X))return!0;return!1}var Dp=Ni("length");function Lp(X){return X.split("")}function Rp(X){return X.match(Ne)||[]}function Zr(X,se,ae){var ve;return ae(X,function(Me,en,In){if(se(Me,en,In))return ve=en,!1}),ve}function Ta(X,se,ae,ve){for(var Me=X.length,en=ae+(ve?1:-1);ve?en--:++en<Me;)if(se(X[en],en,X))return en;return-1}function Vt(X,se,ae){return se===se?zp(X,se,ae):Ta(X,Xr,ae)}function Kp(X,se,ae,ve){for(var Me=ae-1,en=X.length;++Me<en;)if(ve(X[Me],se))return Me;return-1}function Xr(X){return X!==X}function Qr(X,se){var ae=X==null?0:X.length;return ae?Si(X,se)/ae:ie}function Ni(X){return function(se){return se==null?a:se[X]}}function vi(X){return function(se){return X==null?a:X[se]}}function es(X,se,ae,ve,Me){return Me(X,function(en,In,on){ae=ve?(ve=!1,en):se(ae,en,In,on)}),ae}function xp(X,se){var ae=X.length;for(X.sort(se);ae--;)X[ae]=X[ae].value;return X}function Si(X,se){for(var ae,ve=-1,Me=X.length;++ve<Me;){var en=se(X[ve]);en!==a&&(ae=ae===a?en:ae+en)}return ae}function bi(X,se){for(var ae=-1,ve=Array(X);++ae<X;)ve[ae]=se(ae);return ve}function Cp(X,se){return dn(se,function(ae){return[ae,X[ae]]})}function ns(X){return X&&X.slice(0,rs(X)+1).replace(Z,"")}function zn(X){return function(se){return X(se)}}function Bi(X,se){return dn(se,function(ae){return X[ae]})}function da(X,se){return X.has(se)}function ts(X,se){for(var ae=-1,ve=X.length;++ae<ve&&Vt(se,X[ae],0)>-1;);return ae}function as(X,se){for(var ae=X.length;ae--&&Vt(se,X[ae],0)>-1;);return ae}function Mp(X,se){for(var ae=X.length,ve=0;ae--;)X[ae]===se&&++ve;return ve}var jp=vi(Pp),Op=vi(Np);function Fp(X){return"\\"+Sp[X]}function Up(X,se){return X==null?a:X[se]}function Zt(X){return _p.test(X)}function Wp(X){return kp.test(X)}function Hp(X){for(var se,ae=[];!(se=X.next()).done;)ae.push(se.value);return ae}function Ai(X){var se=-1,ae=Array(X.size);return X.forEach(function(ve,Me){ae[++se]=[Me,ve]}),ae}function is(X,se){return function(ae){return X(se(ae))}}function wt(X,se){for(var ae=-1,ve=X.length,Me=0,en=[];++ae<ve;){var In=X[ae];(In===se||In===i)&&(X[ae]=i,en[Me++]=ae)}return en}function Ea(X){var se=-1,ae=Array(X.size);return X.forEach(function(ve){ae[++se]=ve}),ae}function Yp(X){var se=-1,ae=Array(X.size);return X.forEach(function(ve){ae[++se]=[ve,ve]}),ae}function zp(X,se,ae){for(var ve=ae-1,Me=X.length;++ve<Me;)if(X[ve]===se)return ve;return-1}function $p(X,se,ae){for(var ve=ae+1;ve--;)if(X[ve]===se)return ve;return ve}function Xt(X){return Zt(X)?Gp(X):Dp(X)}function st(X){return Zt(X)?Jp(X):Lp(X)}function rs(X){for(var se=X.length;se--&&ee.test(X.charAt(se)););return se}var qp=vi(vp);function Gp(X){for(var se=_i.lastIndex=0;_i.test(X);)++se;return se}function Jp(X){return X.match(_i)||[]}function Vp(X){return X.match(mp)||[]}var Zp=function X(se){se=se==null?bn:wa.defaults(bn.Object(),se,wa.pick(bn,yp));var ae=se.Array,ve=se.Date,Me=se.Error,en=se.Function,In=se.Math,on=se.Object,Ti=se.RegExp,Xp=se.String,Qn=se.TypeError,Da=ae.prototype,Qp=en.prototype,Qt=on.prototype,La=se["__core-js_shared__"],Ra=Qp.toString,tn=Qt.hasOwnProperty,el=0,ss=function(){var e=/[^.]+$/.exec(La&&La.keys&&La.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Ka=Qt.toString,nl=Ra.call(on),tl=bn._,al=Ti("^"+Ra.call(tn).replace(J,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),xa=Hr?se.Buffer:a,Dt=se.Symbol,Ca=se.Uint8Array,os=xa?xa.allocUnsafe:a,Ma=is(on.getPrototypeOf,on),ps=on.create,ls=Qt.propertyIsEnumerable,ja=Da.splice,ds=Dt?Dt.isConcatSpreadable:a,ua=Dt?Dt.iterator:a,Ft=Dt?Dt.toStringTag:a,Oa=function(){try{var e=zt(on,"defineProperty");return e({},"",{}),e}catch(n){}}(),il=se.clearTimeout!==bn.clearTimeout&&se.clearTimeout,rl=ve&&ve.now!==bn.Date.now&&ve.now,sl=se.setTimeout!==bn.setTimeout&&se.setTimeout,Fa=In.ceil,Ua=In.floor,Ei=on.getOwnPropertySymbols,ol=xa?xa.isBuffer:a,us=se.isFinite,pl=Da.join,ll=is(on.keys,on),Pn=In.max,wn=In.min,dl=ve.now,ul=se.parseInt,gs=In.random,gl=Da.reverse,wi=zt(se,"DataView"),ga=zt(se,"Map"),Di=zt(se,"Promise"),ea=zt(se,"Set"),fa=zt(se,"WeakMap"),ca=zt(on,"create"),Wa=fa&&new fa,na={},fl=$t(wi),cl=$t(ga),hl=$t(Di),ml=$t(ea),_l=$t(fa),Ha=Dt?Dt.prototype:a,ha=Ha?Ha.valueOf:a,fs=Ha?Ha.toString:a;function K(e){if(gn(e)&&!je(e)&&!(e instanceof qe)){if(e instanceof et)return e;if(tn.call(e,"__wrapped__"))return ho(e)}return new et(e)}var ta=function(){function e(){}return function(n){if(!un(n))return{};if(ps)return ps(n);e.prototype=n;var o=new e;return e.prototype=a,o}}();function Ya(){}function et(e,n){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=a}K.templateSettings={escape:At,evaluate:pa,interpolate:Gt,variable:"",imports:{_:K}},K.prototype=Ya.prototype,K.prototype.constructor=K,et.prototype=ta(Ya.prototype),et.prototype.constructor=et;function qe(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=de,this.__views__=[]}function kl(){var e=new qe(this.__wrapped__);return e.__actions__=Mn(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Mn(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Mn(this.__views__),e}function yl(){if(this.__filtered__){var e=new qe(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function Il(){var e=this.__wrapped__.value(),n=this.__dir__,o=je(e),P=n<0,T=o?e.length:0,M=Ld(0,T,this.__views__),H=M.start,G=M.end,Q=G-H,le=P?G:H-1,ue=this.__iteratees__,fe=ue.length,ye=0,Be=wn(Q,this.__takeCount__);if(!o||!P&&T==Q&&Be==Q)return Ms(e,this.__actions__);var De=[];e:for(;Q--&&ye<Be;){le+=n;for(var Ue=-1,Le=e[le];++Ue<fe;){var ze=ue[Ue],Je=ze.iteratee,Gn=ze.type,Kn=Je(Le);if(Gn==z)Le=Kn;else if(!Kn){if(Gn==F)continue e;break e}}De[ye++]=Le}return De}qe.prototype=ta(Ya.prototype),qe.prototype.constructor=qe;function Ut(e){var n=-1,o=e==null?0:e.length;for(this.clear();++n<o;){var P=e[n];this.set(P[0],P[1])}}function Pl(){this.__data__=ca?ca(null):{},this.size=0}function Nl(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}function vl(e){var n=this.__data__;if(ca){var o=n[e];return o===d?a:o}return tn.call(n,e)?n[e]:a}function Sl(e){var n=this.__data__;return ca?n[e]!==a:tn.call(n,e)}function bl(e,n){var o=this.__data__;return this.size+=this.has(e)?0:1,o[e]=ca&&n===a?d:n,this}Ut.prototype.clear=Pl,Ut.prototype.delete=Nl,Ut.prototype.get=vl,Ut.prototype.has=Sl,Ut.prototype.set=bl;function mt(e){var n=-1,o=e==null?0:e.length;for(this.clear();++n<o;){var P=e[n];this.set(P[0],P[1])}}function Bl(){this.__data__=[],this.size=0}function Al(e){var n=this.__data__,o=za(n,e);if(o<0)return!1;var P=n.length-1;return o==P?n.pop():ja.call(n,o,1),--this.size,!0}function Tl(e){var n=this.__data__,o=za(n,e);return o<0?a:n[o][1]}function El(e){return za(this.__data__,e)>-1}function wl(e,n){var o=this.__data__,P=za(o,e);return P<0?(++this.size,o.push([e,n])):o[P][1]=n,this}mt.prototype.clear=Bl,mt.prototype.delete=Al,mt.prototype.get=Tl,mt.prototype.has=El,mt.prototype.set=wl;function _t(e){var n=-1,o=e==null?0:e.length;for(this.clear();++n<o;){var P=e[n];this.set(P[0],P[1])}}function Dl(){this.size=0,this.__data__={hash:new Ut,map:new(ga||mt),string:new Ut}}function Ll(e){var n=ai(this,e).delete(e);return this.size-=n?1:0,n}function Rl(e){return ai(this,e).get(e)}function Kl(e){return ai(this,e).has(e)}function xl(e,n){var o=ai(this,e),P=o.size;return o.set(e,n),this.size+=o.size==P?0:1,this}_t.prototype.clear=Dl,_t.prototype.delete=Ll,_t.prototype.get=Rl,_t.prototype.has=Kl,_t.prototype.set=xl;function Wt(e){var n=-1,o=e==null?0:e.length;for(this.__data__=new _t;++n<o;)this.add(e[n])}function Cl(e){return this.__data__.set(e,d),this}function Ml(e){return this.__data__.has(e)}Wt.prototype.add=Wt.prototype.push=Cl,Wt.prototype.has=Ml;function ot(e){var n=this.__data__=new mt(e);this.size=n.size}function jl(){this.__data__=new mt,this.size=0}function Ol(e){var n=this.__data__,o=n.delete(e);return this.size=n.size,o}function Fl(e){return this.__data__.get(e)}function Ul(e){return this.__data__.has(e)}function Wl(e,n){var o=this.__data__;if(o instanceof mt){var P=o.__data__;if(!ga||P.length<p-1)return P.push([e,n]),this.size=++o.size,this;o=this.__data__=new _t(P)}return o.set(e,n),this.size=o.size,this}ot.prototype.clear=jl,ot.prototype.delete=Ol,ot.prototype.get=Fl,ot.prototype.has=Ul,ot.prototype.set=Wl;function cs(e,n){var o=je(e),P=!o&&qt(e),T=!o&&!P&&Ct(e),M=!o&&!P&&!T&&sa(e),H=o||P||T||M,G=H?bi(e.length,Xp):[],Q=G.length;for(var le in e)(n||tn.call(e,le))&&!(H&&(le=="length"||T&&(le=="offset"||le=="parent")||M&&(le=="buffer"||le=="byteLength"||le=="byteOffset")||Pt(le,Q)))&&G.push(le);return G}function hs(e){var n=e.length;return n?e[Wi(0,n-1)]:a}function Hl(e,n){return ii(Mn(e),Ht(n,0,e.length))}function Yl(e){return ii(Mn(e))}function Li(e,n,o){(o!==a&&!pt(e[n],o)||o===a&&!(n in e))&&kt(e,n,o)}function ma(e,n,o){var P=e[n];(!(tn.call(e,n)&&pt(P,o))||o===a&&!(n in e))&&kt(e,n,o)}function za(e,n){for(var o=e.length;o--;)if(pt(e[o][0],n))return o;return-1}function zl(e,n,o,P){return Lt(e,function(T,M,H){n(P,T,o(T),H)}),P}function ms(e,n){return e&&gt(n,Sn(n),e)}function $l(e,n){return e&&gt(n,On(n),e)}function kt(e,n,o){n=="__proto__"&&Oa?Oa(e,n,{configurable:!0,enumerable:!0,value:o,writable:!0}):e[n]=o}function Ri(e,n){for(var o=-1,P=n.length,T=ae(P),M=e==null;++o<P;)T[o]=M?a:fr(e,n[o]);return T}function Ht(e,n,o){return e===e&&(o!==a&&(e=e<=o?e:o),n!==a&&(e=e>=n?e:n)),e}function nt(e,n,o,P,T,M){var H,G=n&m,Q=n&g,le=n&f;if(o&&(H=T?o(e,P,T,M):o(e)),H!==a)return H;if(!un(e))return e;var ue=je(e);if(ue){if(H=Kd(e),!G)return Mn(e,H)}else{var fe=Dn(e),ye=fe==Nn||fe==Oe;if(Ct(e))return Fs(e,G);if(fe==pe||fe==xe||ye&&!T){if(H=Q||ye?{}:ro(e),!G)return Q?vd(e,$l(H,e)):Nd(e,ms(H,e))}else{if(!pn[fe])return T?e:{};H=xd(e,fe,G)}}M||(M=new ot);var Be=M.get(e);if(Be)return Be;M.set(e,H),xo(e)?e.forEach(function(Le){H.add(nt(Le,n,o,Le,e,M))}):Ro(e)&&e.forEach(function(Le,ze){H.set(ze,nt(Le,n,o,ze,e,M))});var De=le?Q?Qi:Xi:Q?On:Sn,Ue=ue?a:De(e);return Xn(Ue||e,function(Le,ze){Ue&&(ze=Le,Le=e[ze]),ma(H,ze,nt(Le,n,o,ze,e,M))}),H}function ql(e){var n=Sn(e);return function(o){return _s(o,e,n)}}function _s(e,n,o){var P=o.length;if(e==null)return!P;for(e=on(e);P--;){var T=o[P],M=n[T],H=e[T];if(H===a&&!(T in e)||!M(H))return!1}return!0}function ks(e,n,o){if(typeof e!="function")throw new Qn(l);return va(function(){e.apply(a,o)},n)}function _a(e,n,o,P){var T=-1,M=Aa,H=!0,G=e.length,Q=[],le=n.length;if(!G)return Q;o&&(n=dn(n,zn(o))),P?(M=yi,H=!1):n.length>=p&&(M=da,H=!1,n=new Wt(n));e:for(;++T<G;){var ue=e[T],fe=o==null?ue:o(ue);if(ue=P||ue!==0?ue:0,H&&fe===fe){for(var ye=le;ye--;)if(n[ye]===fe)continue e;Q.push(ue)}else M(n,fe,P)||Q.push(ue)}return Q}var Lt=zs(ut),ys=zs(xi,!0);function Gl(e,n){var o=!0;return Lt(e,function(P,T,M){return o=!!n(P,T,M),o}),o}function $a(e,n,o){for(var P=-1,T=e.length;++P<T;){var M=e[P],H=n(M);if(H!=null&&(G===a?H===H&&!qn(H):o(H,G)))var G=H,Q=M}return Q}function Jl(e,n,o,P){var T=e.length;for(o=Fe(o),o<0&&(o=-o>T?0:T+o),P=P===a||P>T?T:Fe(P),P<0&&(P+=T),P=o>P?0:Mo(P);o<P;)e[o++]=n;return e}function Is(e,n){var o=[];return Lt(e,function(P,T,M){n(P,T,M)&&o.push(P)}),o}function Bn(e,n,o,P,T){var M=-1,H=e.length;for(o||(o=Md),T||(T=[]);++M<H;){var G=e[M];n>0&&o(G)?n>1?Bn(G,n-1,o,P,T):Et(T,G):P||(T[T.length]=G)}return T}var Ki=$s(),Ps=$s(!0);function ut(e,n){return e&&Ki(e,n,Sn)}function xi(e,n){return e&&Ps(e,n,Sn)}function qa(e,n){return Tt(n,function(o){return Nt(e[o])})}function Yt(e,n){n=Kt(n,e);for(var o=0,P=n.length;e!=null&&o<P;)e=e[ft(n[o++])];return o&&o==P?e:a}function Ns(e,n,o){var P=n(e);return je(e)?P:Et(P,o(e))}function Ln(e){return e==null?e===a?Ve:Ce:Ft&&Ft in on(e)?Dd(e):Yd(e)}function Ci(e,n){return e>n}function Vl(e,n){return e!=null&&tn.call(e,n)}function Zl(e,n){return e!=null&&n in on(e)}function Xl(e,n,o){return e>=wn(n,o)&&e<Pn(n,o)}function Mi(e,n,o){for(var P=o?yi:Aa,T=e[0].length,M=e.length,H=M,G=ae(M),Q=1/0,le=[];H--;){var ue=e[H];H&&n&&(ue=dn(ue,zn(n))),Q=wn(ue.length,Q),G[H]=!o&&(n||T>=120&&ue.length>=120)?new Wt(H&&ue):a}ue=e[0];var fe=-1,ye=G[0];e:for(;++fe<T&&le.length<Q;){var Be=ue[fe],De=n?n(Be):Be;if(Be=o||Be!==0?Be:0,!(ye?da(ye,De):P(le,De,o))){for(H=M;--H;){var Ue=G[H];if(!(Ue?da(Ue,De):P(e[H],De,o)))continue e}ye&&ye.push(De),le.push(Be)}}return le}function Ql(e,n,o,P){return ut(e,function(T,M,H){n(P,o(T),M,H)}),P}function ka(e,n,o){n=Kt(n,e),e=lo(e,n);var P=e==null?e:e[ft(at(n))];return P==null?a:Yn(P,e,o)}function vs(e){return gn(e)&&Ln(e)==xe}function ed(e){return gn(e)&&Ln(e)==Se}function nd(e){return gn(e)&&Ln(e)==_n}function ya(e,n,o,P,T){return e===n?!0:e==null||n==null||!gn(e)&&!gn(n)?e!==e&&n!==n:td(e,n,o,P,ya,T)}function td(e,n,o,P,T,M){var H=je(e),G=je(n),Q=H?rn:Dn(e),le=G?rn:Dn(n);Q=Q==xe?pe:Q,le=le==xe?pe:le;var ue=Q==pe,fe=le==pe,ye=Q==le;if(ye&&Ct(e)){if(!Ct(n))return!1;H=!0,ue=!1}if(ye&&!ue)return M||(M=new ot),H||sa(e)?to(e,n,o,P,T,M):Ed(e,n,Q,o,P,T,M);if(!(o&y)){var Be=ue&&tn.call(e,"__wrapped__"),De=fe&&tn.call(n,"__wrapped__");if(Be||De){var Ue=Be?e.value():e,Le=De?n.value():n;return M||(M=new ot),T(Ue,Le,o,P,M)}}return ye?(M||(M=new ot),wd(e,n,o,P,T,M)):!1}function ad(e){return gn(e)&&Dn(e)==We}function ji(e,n,o,P){var T=o.length,M=T,H=!P;if(e==null)return!M;for(e=on(e);T--;){var G=o[T];if(H&&G[2]?G[1]!==e[G[0]]:!(G[0]in e))return!1}for(;++T<M;){G=o[T];var Q=G[0],le=e[Q],ue=G[1];if(H&&G[2]){if(le===a&&!(Q in e))return!1}else{var fe=new ot;if(P)var ye=P(le,ue,Q,e,n,fe);if(!(ye===a?ya(ue,le,y|_,P,fe):ye))return!1}}return!0}function Ss(e){if(!un(e)||Od(e))return!1;var n=Nt(e)?al:En;return n.test($t(e))}function id(e){return gn(e)&&Ln(e)==re}function rd(e){return gn(e)&&Dn(e)==_e}function sd(e){return gn(e)&&di(e.length)&&!!ln[Ln(e)]}function bs(e){return typeof e=="function"?e:e==null?Fn:typeof e=="object"?je(e)?Ts(e[0],e[1]):As(e):Go(e)}function Oi(e){if(!Na(e))return ll(e);var n=[];for(var o in on(e))tn.call(e,o)&&o!="constructor"&&n.push(o);return n}function od(e){if(!un(e))return Hd(e);var n=Na(e),o=[];for(var P in e)P=="constructor"&&(n||!tn.call(e,P))||o.push(P);return o}function Fi(e,n){return e<n}function Bs(e,n){var o=-1,P=jn(e)?ae(e.length):[];return Lt(e,function(T,M,H){P[++o]=n(T,M,H)}),P}function As(e){var n=nr(e);return n.length==1&&n[0][2]?oo(n[0][0],n[0][1]):function(o){return o===e||ji(o,e,n)}}function Ts(e,n){return ar(e)&&so(n)?oo(ft(e),n):function(o){var P=fr(o,e);return P===a&&P===n?cr(o,e):ya(n,P,y|_)}}function Ga(e,n,o,P,T){e!==n&&Ki(n,function(M,H){if(T||(T=new ot),un(M))pd(e,n,H,o,Ga,P,T);else{var G=P?P(rr(e,H),M,H+"",e,n,T):a;G===a&&(G=M),Li(e,H,G)}},On)}function pd(e,n,o,P,T,M,H){var G=rr(e,o),Q=rr(n,o),le=H.get(Q);if(le){Li(e,o,le);return}var ue=M?M(G,Q,o+"",e,n,H):a,fe=ue===a;if(fe){var ye=je(Q),Be=!ye&&Ct(Q),De=!ye&&!Be&&sa(Q);ue=Q,ye||Be||De?je(G)?ue=G:cn(G)?ue=Mn(G):Be?(fe=!1,ue=Fs(Q,!0)):De?(fe=!1,ue=Us(Q,!0)):ue=[]:Sa(Q)||qt(Q)?(ue=G,qt(G)?ue=jo(G):(!un(G)||Nt(G))&&(ue=ro(Q))):fe=!1}fe&&(H.set(Q,ue),T(ue,Q,P,M,H),H.delete(Q)),Li(e,o,ue)}function Es(e,n){var o=e.length;if(!!o)return n+=n<0?o:0,Pt(n,o)?e[n]:a}function ws(e,n,o){n.length?n=dn(n,function(M){return je(M)?function(H){return Yt(H,M.length===1?M[0]:M)}:M}):n=[Fn];var P=-1;n=dn(n,zn(we()));var T=Bs(e,function(M,H,G){var Q=dn(n,function(le){return le(M)});return{criteria:Q,index:++P,value:M}});return xp(T,function(M,H){return Pd(M,H,o)})}function ld(e,n){return Ds(e,n,function(o,P){return cr(e,P)})}function Ds(e,n,o){for(var P=-1,T=n.length,M={};++P<T;){var H=n[P],G=Yt(e,H);o(G,H)&&Ia(M,Kt(H,e),G)}return M}function dd(e){return function(n){return Yt(n,e)}}function Ui(e,n,o,P){var T=P?Kp:Vt,M=-1,H=n.length,G=e;for(e===n&&(n=Mn(n)),o&&(G=dn(e,zn(o)));++M<H;)for(var Q=0,le=n[M],ue=o?o(le):le;(Q=T(G,ue,Q,P))>-1;)G!==e&&ja.call(G,Q,1),ja.call(e,Q,1);return e}function Ls(e,n){for(var o=e?n.length:0,P=o-1;o--;){var T=n[o];if(o==P||T!==M){var M=T;Pt(T)?ja.call(e,T,1):zi(e,T)}}return e}function Wi(e,n){return e+Ua(gs()*(n-e+1))}function ud(e,n,o,P){for(var T=-1,M=Pn(Fa((n-e)/(o||1)),0),H=ae(M);M--;)H[P?M:++T]=e,e+=o;return H}function Hi(e,n){var o="";if(!e||n<1||n>$)return o;do n%2&&(o+=e),n=Ua(n/2),n&&(e+=e);while(n);return o}function He(e,n){return sr(po(e,n,Fn),e+"")}function gd(e){return hs(oa(e))}function fd(e,n){var o=oa(e);return ii(o,Ht(n,0,o.length))}function Ia(e,n,o,P){if(!un(e))return e;n=Kt(n,e);for(var T=-1,M=n.length,H=M-1,G=e;G!=null&&++T<M;){var Q=ft(n[T]),le=o;if(Q==="__proto__"||Q==="constructor"||Q==="prototype")return e;if(T!=H){var ue=G[Q];le=P?P(ue,Q,G):a,le===a&&(le=un(ue)?ue:Pt(n[T+1])?[]:{})}ma(G,Q,le),G=G[Q]}return e}var Rs=Wa?function(e,n){return Wa.set(e,n),e}:Fn,cd=Oa?function(e,n){return Oa(e,"toString",{configurable:!0,enumerable:!1,value:mr(n),writable:!0})}:Fn;function hd(e){return ii(oa(e))}function tt(e,n,o){var P=-1,T=e.length;n<0&&(n=-n>T?0:T+n),o=o>T?T:o,o<0&&(o+=T),T=n>o?0:o-n>>>0,n>>>=0;for(var M=ae(T);++P<T;)M[P]=e[P+n];return M}function md(e,n){var o;return Lt(e,function(P,T,M){return o=n(P,T,M),!o}),!!o}function Ja(e,n,o){var P=0,T=e==null?P:e.length;if(typeof n=="number"&&n===n&&T<=ce){for(;P<T;){var M=P+T>>>1,H=e[M];H!==null&&!qn(H)&&(o?H<=n:H<n)?P=M+1:T=M}return T}return Yi(e,n,Fn,o)}function Yi(e,n,o,P){var T=0,M=e==null?0:e.length;if(M===0)return 0;n=o(n);for(var H=n!==n,G=n===null,Q=qn(n),le=n===a;T<M;){var ue=Ua((T+M)/2),fe=o(e[ue]),ye=fe!==a,Be=fe===null,De=fe===fe,Ue=qn(fe);if(H)var Le=P||De;else le?Le=De&&(P||ye):G?Le=De&&ye&&(P||!Be):Q?Le=De&&ye&&!Be&&(P||!Ue):Be||Ue?Le=!1:Le=P?fe<=n:fe<n;Le?T=ue+1:M=ue}return wn(M,ne)}function Ks(e,n){for(var o=-1,P=e.length,T=0,M=[];++o<P;){var H=e[o],G=n?n(H):H;if(!o||!pt(G,Q)){var Q=G;M[T++]=H===0?0:H}}return M}function xs(e){return typeof e=="number"?e:qn(e)?ie:+e}function $n(e){if(typeof e=="string")return e;if(je(e))return dn(e,$n)+"";if(qn(e))return fs?fs.call(e):"";var n=e+"";return n=="0"&&1/e==-q?"-0":n}function Rt(e,n,o){var P=-1,T=Aa,M=e.length,H=!0,G=[],Q=G;if(o)H=!1,T=yi;else if(M>=p){var le=n?null:Ad(e);if(le)return Ea(le);H=!1,T=da,Q=new Wt}else Q=n?[]:G;e:for(;++P<M;){var ue=e[P],fe=n?n(ue):ue;if(ue=o||ue!==0?ue:0,H&&fe===fe){for(var ye=Q.length;ye--;)if(Q[ye]===fe)continue e;n&&Q.push(fe),G.push(ue)}else T(Q,fe,o)||(Q!==G&&Q.push(fe),G.push(ue))}return G}function zi(e,n){return n=Kt(n,e),e=lo(e,n),e==null||delete e[ft(at(n))]}function Cs(e,n,o,P){return Ia(e,n,o(Yt(e,n)),P)}function Va(e,n,o,P){for(var T=e.length,M=P?T:-1;(P?M--:++M<T)&&n(e[M],M,e););return o?tt(e,P?0:M,P?M+1:T):tt(e,P?M+1:0,P?T:M)}function Ms(e,n){var o=e;return o instanceof qe&&(o=o.value()),Ii(n,function(P,T){return T.func.apply(T.thisArg,Et([P],T.args))},o)}function $i(e,n,o){var P=e.length;if(P<2)return P?Rt(e[0]):[];for(var T=-1,M=ae(P);++T<P;)for(var H=e[T],G=-1;++G<P;)G!=T&&(M[T]=_a(M[T]||H,e[G],n,o));return Rt(Bn(M,1),n,o)}function js(e,n,o){for(var P=-1,T=e.length,M=n.length,H={};++P<T;){var G=P<M?n[P]:a;o(H,e[P],G)}return H}function qi(e){return cn(e)?e:[]}function Gi(e){return typeof e=="function"?e:Fn}function Kt(e,n){return je(e)?e:ar(e,n)?[e]:co(nn(e))}var _d=He;function xt(e,n,o){var P=e.length;return o=o===a?P:o,!n&&o>=P?e:tt(e,n,o)}var Os=il||function(e){return bn.clearTimeout(e)};function Fs(e,n){if(n)return e.slice();var o=e.length,P=os?os(o):new e.constructor(o);return e.copy(P),P}function Ji(e){var n=new e.constructor(e.byteLength);return new Ca(n).set(new Ca(e)),n}function kd(e,n){var o=n?Ji(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.byteLength)}function yd(e){var n=new e.constructor(e.source,ke.exec(e));return n.lastIndex=e.lastIndex,n}function Id(e){return ha?on(ha.call(e)):{}}function Us(e,n){var o=n?Ji(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.length)}function Ws(e,n){if(e!==n){var o=e!==a,P=e===null,T=e===e,M=qn(e),H=n!==a,G=n===null,Q=n===n,le=qn(n);if(!G&&!le&&!M&&e>n||M&&H&&Q&&!G&&!le||P&&H&&Q||!o&&Q||!T)return 1;if(!P&&!M&&!le&&e<n||le&&o&&T&&!P&&!M||G&&o&&T||!H&&T||!Q)return-1}return 0}function Pd(e,n,o){for(var P=-1,T=e.criteria,M=n.criteria,H=T.length,G=o.length;++P<H;){var Q=Ws(T[P],M[P]);if(Q){if(P>=G)return Q;var le=o[P];return Q*(le=="desc"?-1:1)}}return e.index-n.index}function Hs(e,n,o,P){for(var T=-1,M=e.length,H=o.length,G=-1,Q=n.length,le=Pn(M-H,0),ue=ae(Q+le),fe=!P;++G<Q;)ue[G]=n[G];for(;++T<H;)(fe||T<M)&&(ue[o[T]]=e[T]);for(;le--;)ue[G++]=e[T++];return ue}function Ys(e,n,o,P){for(var T=-1,M=e.length,H=-1,G=o.length,Q=-1,le=n.length,ue=Pn(M-G,0),fe=ae(ue+le),ye=!P;++T<ue;)fe[T]=e[T];for(var Be=T;++Q<le;)fe[Be+Q]=n[Q];for(;++H<G;)(ye||T<M)&&(fe[Be+o[H]]=e[T++]);return fe}function Mn(e,n){var o=-1,P=e.length;for(n||(n=ae(P));++o<P;)n[o]=e[o];return n}function gt(e,n,o,P){var T=!o;o||(o={});for(var M=-1,H=n.length;++M<H;){var G=n[M],Q=P?P(o[G],e[G],G,o,e):a;Q===a&&(Q=e[G]),T?kt(o,G,Q):ma(o,G,Q)}return o}function Nd(e,n){return gt(e,tr(e),n)}function vd(e,n){return gt(e,ao(e),n)}function Za(e,n){return function(o,P){var T=je(o)?Tp:zl,M=n?n():{};return T(o,e,we(P,2),M)}}function aa(e){return He(function(n,o){var P=-1,T=o.length,M=T>1?o[T-1]:a,H=T>2?o[2]:a;for(M=e.length>3&&typeof M=="function"?(T--,M):a,H&&Rn(o[0],o[1],H)&&(M=T<3?a:M,T=1),n=on(n);++P<T;){var G=o[P];G&&e(n,G,P,M)}return n})}function zs(e,n){return function(o,P){if(o==null)return o;if(!jn(o))return e(o,P);for(var T=o.length,M=n?T:-1,H=on(o);(n?M--:++M<T)&&P(H[M],M,H)!==!1;);return o}}function $s(e){return function(n,o,P){for(var T=-1,M=on(n),H=P(n),G=H.length;G--;){var Q=H[e?G:++T];if(o(M[Q],Q,M)===!1)break}return n}}function Sd(e,n,o){var P=n&I,T=Pa(e);function M(){var H=this&&this!==bn&&this instanceof M?T:e;return H.apply(P?o:this,arguments)}return M}function qs(e){return function(n){n=nn(n);var o=Zt(n)?st(n):a,P=o?o[0]:n.charAt(0),T=o?xt(o,1).join(""):n.slice(1);return P[e]()+T}}function ia(e){return function(n){return Ii($o(zo(n).replace(cp,"")),e,"")}}function Pa(e){return function(){var n=arguments;switch(n.length){case 0:return new e;case 1:return new e(n[0]);case 2:return new e(n[0],n[1]);case 3:return new e(n[0],n[1],n[2]);case 4:return new e(n[0],n[1],n[2],n[3]);case 5:return new e(n[0],n[1],n[2],n[3],n[4]);case 6:return new e(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new e(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var o=ta(e.prototype),P=e.apply(o,n);return un(P)?P:o}}function bd(e,n,o){var P=Pa(e);function T(){for(var M=arguments.length,H=ae(M),G=M,Q=ra(T);G--;)H[G]=arguments[G];var le=M<3&&H[0]!==Q&&H[M-1]!==Q?[]:wt(H,Q);if(M-=le.length,M<o)return Xs(e,n,Xa,T.placeholder,a,H,le,a,a,o-M);var ue=this&&this!==bn&&this instanceof T?P:e;return Yn(ue,this,H)}return T}function Gs(e){return function(n,o,P){var T=on(n);if(!jn(n)){var M=we(o,3);n=Sn(n),o=function(G){return M(T[G],G,T)}}var H=e(n,o,P);return H>-1?T[M?n[H]:H]:a}}function Js(e){return It(function(n){var o=n.length,P=o,T=et.prototype.thru;for(e&&n.reverse();P--;){var M=n[P];if(typeof M!="function")throw new Qn(l);if(T&&!H&&ti(M)=="wrapper")var H=new et([],!0)}for(P=H?P:o;++P<o;){M=n[P];var G=ti(M),Q=G=="wrapper"?er(M):a;Q&&ir(Q[0])&&Q[1]==(D|A|B|L)&&!Q[4].length&&Q[9]==1?H=H[ti(Q[0])].apply(H,Q[3]):H=M.length==1&&ir(M)?H[G]():H.thru(M)}return function(){var le=arguments,ue=le[0];if(H&&le.length==1&&je(ue))return H.plant(ue).value();for(var fe=0,ye=o?n[fe].apply(this,le):ue;++fe<o;)ye=n[fe].call(this,ye);return ye}})}function Xa(e,n,o,P,T,M,H,G,Q,le){var ue=n&D,fe=n&I,ye=n&S,Be=n&(A|b),De=n&w,Ue=ye?a:Pa(e);function Le(){for(var ze=arguments.length,Je=ae(ze),Gn=ze;Gn--;)Je[Gn]=arguments[Gn];if(Be)var Kn=ra(Le),Jn=Mp(Je,Kn);if(P&&(Je=Hs(Je,P,T,Be)),M&&(Je=Ys(Je,M,H,Be)),ze-=Jn,Be&&ze<le){var hn=wt(Je,Kn);return Xs(e,n,Xa,Le.placeholder,o,Je,hn,G,Q,le-ze)}var lt=fe?o:this,St=ye?lt[e]:e;return ze=Je.length,G?Je=zd(Je,G):De&&ze>1&&Je.reverse(),ue&&Q<ze&&(Je.length=Q),this&&this!==bn&&this instanceof Le&&(St=Ue||Pa(St)),St.apply(lt,Je)}return Le}function Vs(e,n){return function(o,P){return Ql(o,e,n(P),{})}}function Qa(e,n){return function(o,P){var T;if(o===a&&P===a)return n;if(o!==a&&(T=o),P!==a){if(T===a)return P;typeof o=="string"||typeof P=="string"?(o=$n(o),P=$n(P)):(o=xs(o),P=xs(P)),T=e(o,P)}return T}}function Vi(e){return It(function(n){return n=dn(n,zn(we())),He(function(o){var P=this;return e(n,function(T){return Yn(T,P,o)})})})}function ei(e,n){n=n===a?" ":$n(n);var o=n.length;if(o<2)return o?Hi(n,e):n;var P=Hi(n,Fa(e/Xt(n)));return Zt(n)?xt(st(P),0,e).join(""):P.slice(0,e)}function Bd(e,n,o,P){var T=n&I,M=Pa(e);function H(){for(var G=-1,Q=arguments.length,le=-1,ue=P.length,fe=ae(ue+Q),ye=this&&this!==bn&&this instanceof H?M:e;++le<ue;)fe[le]=P[le];for(;Q--;)fe[le++]=arguments[++G];return Yn(ye,T?o:this,fe)}return H}function Zs(e){return function(n,o,P){return P&&typeof P!="number"&&Rn(n,o,P)&&(o=P=a),n=vt(n),o===a?(o=n,n=0):o=vt(o),P=P===a?n<o?1:-1:vt(P),ud(n,o,P,e)}}function ni(e){return function(n,o){return typeof n=="string"&&typeof o=="string"||(n=it(n),o=it(o)),e(n,o)}}function Xs(e,n,o,P,T,M,H,G,Q,le){var ue=n&A,fe=ue?H:a,ye=ue?a:H,Be=ue?M:a,De=ue?a:M;n|=ue?B:E,n&=~(ue?E:B),n&N||(n&=~(I|S));var Ue=[e,n,T,Be,fe,De,ye,G,Q,le],Le=o.apply(a,Ue);return ir(e)&&uo(Le,Ue),Le.placeholder=P,go(Le,e,n)}function Zi(e){var n=In[e];return function(o,P){if(o=it(o),P=P==null?0:wn(Fe(P),292),P&&us(o)){var T=(nn(o)+"e").split("e"),M=n(T[0]+"e"+(+T[1]+P));return T=(nn(M)+"e").split("e"),+(T[0]+"e"+(+T[1]-P))}return n(o)}}var Ad=ea&&1/Ea(new ea([,-0]))[1]==q?function(e){return new ea(e)}:yr;function Qs(e){return function(n){var o=Dn(n);return o==We?Ai(n):o==_e?Yp(n):Cp(n,e(n))}}function yt(e,n,o,P,T,M,H,G){var Q=n&S;if(!Q&&typeof e!="function")throw new Qn(l);var le=P?P.length:0;if(le||(n&=~(B|E),P=T=a),H=H===a?H:Pn(Fe(H),0),G=G===a?G:Fe(G),le-=T?T.length:0,n&E){var ue=P,fe=T;P=T=a}var ye=Q?a:er(e),Be=[e,n,o,P,T,ue,fe,M,H,G];if(ye&&Wd(Be,ye),e=Be[0],n=Be[1],o=Be[2],P=Be[3],T=Be[4],G=Be[9]=Be[9]===a?Q?0:e.length:Pn(Be[9]-le,0),!G&&n&(A|b)&&(n&=~(A|b)),!n||n==I)var De=Sd(e,n,o);else n==A||n==b?De=bd(e,n,G):(n==B||n==(I|B))&&!T.length?De=Bd(e,n,o,P):De=Xa.apply(a,Be);var Ue=ye?Rs:uo;return go(Ue(De,Be),e,n)}function eo(e,n,o,P){return e===a||pt(e,Qt[o])&&!tn.call(P,o)?n:e}function no(e,n,o,P,T,M){return un(e)&&un(n)&&(M.set(n,e),Ga(e,n,a,no,M),M.delete(n)),e}function Td(e){return Sa(e)?a:e}function to(e,n,o,P,T,M){var H=o&y,G=e.length,Q=n.length;if(G!=Q&&!(H&&Q>G))return!1;var le=M.get(e),ue=M.get(n);if(le&&ue)return le==n&&ue==e;var fe=-1,ye=!0,Be=o&_?new Wt:a;for(M.set(e,n),M.set(n,e);++fe<G;){var De=e[fe],Ue=n[fe];if(P)var Le=H?P(Ue,De,fe,n,e,M):P(De,Ue,fe,e,n,M);if(Le!==a){if(Le)continue;ye=!1;break}if(Be){if(!Pi(n,function(ze,Je){if(!da(Be,Je)&&(De===ze||T(De,ze,o,P,M)))return Be.push(Je)})){ye=!1;break}}else if(!(De===Ue||T(De,Ue,o,P,M))){ye=!1;break}}return M.delete(e),M.delete(n),ye}function Ed(e,n,o,P,T,M,H){switch(o){case Ye:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case Se:return!(e.byteLength!=n.byteLength||!M(new Ca(e),new Ca(n)));case fn:case _n:case Un:return pt(+e,+n);case Ee:return e.name==n.name&&e.message==n.message;case re:case me:return e==n+"";case We:var G=Ai;case _e:var Q=P&y;if(G||(G=Ea),e.size!=n.size&&!Q)return!1;var le=H.get(e);if(le)return le==n;P|=_,H.set(e,n);var ue=to(G(e),G(n),P,T,M,H);return H.delete(e),ue;case Ie:if(ha)return ha.call(e)==ha.call(n)}return!1}function wd(e,n,o,P,T,M){var H=o&y,G=Xi(e),Q=G.length,le=Xi(n),ue=le.length;if(Q!=ue&&!H)return!1;for(var fe=Q;fe--;){var ye=G[fe];if(!(H?ye in n:tn.call(n,ye)))return!1}var Be=M.get(e),De=M.get(n);if(Be&&De)return Be==n&&De==e;var Ue=!0;M.set(e,n),M.set(n,e);for(var Le=H;++fe<Q;){ye=G[fe];var ze=e[ye],Je=n[ye];if(P)var Gn=H?P(Je,ze,ye,n,e,M):P(ze,Je,ye,e,n,M);if(!(Gn===a?ze===Je||T(ze,Je,o,P,M):Gn)){Ue=!1;break}Le||(Le=ye=="constructor")}if(Ue&&!Le){var Kn=e.constructor,Jn=n.constructor;Kn!=Jn&&"constructor"in e&&"constructor"in n&&!(typeof Kn=="function"&&Kn instanceof Kn&&typeof Jn=="function"&&Jn instanceof Jn)&&(Ue=!1)}return M.delete(e),M.delete(n),Ue}function It(e){return sr(po(e,a,ko),e+"")}function Xi(e){return Ns(e,Sn,tr)}function Qi(e){return Ns(e,On,ao)}var er=Wa?function(e){return Wa.get(e)}:yr;function ti(e){for(var n=e.name+"",o=na[n],P=tn.call(na,n)?o.length:0;P--;){var T=o[P],M=T.func;if(M==null||M==e)return T.name}return n}function ra(e){var n=tn.call(K,"placeholder")?K:e;return n.placeholder}function we(){var e=K.iteratee||_r;return e=e===_r?bs:e,arguments.length?e(arguments[0],arguments[1]):e}function ai(e,n){var o=e.__data__;return jd(n)?o[typeof n=="string"?"string":"hash"]:o.map}function nr(e){for(var n=Sn(e),o=n.length;o--;){var P=n[o],T=e[P];n[o]=[P,T,so(T)]}return n}function zt(e,n){var o=Up(e,n);return Ss(o)?o:a}function Dd(e){var n=tn.call(e,Ft),o=e[Ft];try{e[Ft]=a;var P=!0}catch(M){}var T=Ka.call(e);return P&&(n?e[Ft]=o:delete e[Ft]),T}var tr=Ei?function(e){return e==null?[]:(e=on(e),Tt(Ei(e),function(n){return ls.call(e,n)}))}:Ir,ao=Ei?function(e){for(var n=[];e;)Et(n,tr(e)),e=Ma(e);return n}:Ir,Dn=Ln;(wi&&Dn(new wi(new ArrayBuffer(1)))!=Ye||ga&&Dn(new ga)!=We||Di&&Dn(Di.resolve())!=Ae||ea&&Dn(new ea)!=_e||fa&&Dn(new fa)!=Ge)&&(Dn=function(e){var n=Ln(e),o=n==pe?e.constructor:a,P=o?$t(o):"";if(P)switch(P){case fl:return Ye;case cl:return We;case hl:return Ae;case ml:return _e;case _l:return Ge}return n});function Ld(e,n,o){for(var P=-1,T=o.length;++P<T;){var M=o[P],H=M.size;switch(M.type){case"drop":e+=H;break;case"dropRight":n-=H;break;case"take":n=wn(n,e+H);break;case"takeRight":e=Pn(e,n-H);break}}return{start:e,end:n}}function Rd(e){var n=e.match(ge);return n?n[1].split(he):[]}function io(e,n,o){n=Kt(n,e);for(var P=-1,T=n.length,M=!1;++P<T;){var H=ft(n[P]);if(!(M=e!=null&&o(e,H)))break;e=e[H]}return M||++P!=T?M:(T=e==null?0:e.length,!!T&&di(T)&&Pt(H,T)&&(je(e)||qt(e)))}function Kd(e){var n=e.length,o=new e.constructor(n);return n&&typeof e[0]=="string"&&tn.call(e,"index")&&(o.index=e.index,o.input=e.input),o}function ro(e){return typeof e.constructor=="function"&&!Na(e)?ta(Ma(e)):{}}function xd(e,n,o){var P=e.constructor;switch(n){case Se:return Ji(e);case fn:case _n:return new P(+e);case Ye:return kd(e,o);case Qe:case Ze:case Wn:case xn:case Tn:case bt:case rt:case Hn:case ct:return Us(e,o);case We:return new P;case Un:case me:return new P(e);case re:return yd(e);case _e:return new P;case Ie:return Id(e)}}function Cd(e,n){var o=n.length;if(!o)return e;var P=o-1;return n[P]=(o>1?"& ":"")+n[P],n=n.join(o>2?", ":" "),e.replace(oe,`{
/* [wrapped with `+n+`] */
`)}function Md(e){return je(e)||qt(e)||!!(ds&&e&&e[ds])}function Pt(e,n){var o=typeof e;return n=n==null?$:n,!!n&&(o=="number"||o!="symbol"&&Vn.test(e))&&e>-1&&e%1==0&&e<n}function Rn(e,n,o){if(!un(o))return!1;var P=typeof n;return(P=="number"?jn(o)&&Pt(n,o.length):P=="string"&&n in o)?pt(o[n],e):!1}function ar(e,n){if(je(e))return!1;var o=typeof e;return o=="number"||o=="symbol"||o=="boolean"||e==null||qn(e)?!0:Y.test(e)||!x.test(e)||n!=null&&e in on(n)}function jd(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}function ir(e){var n=ti(e),o=K[n];if(typeof o!="function"||!(n in qe.prototype))return!1;if(e===o)return!0;var P=er(o);return!!P&&e===P[0]}function Od(e){return!!ss&&ss in e}var Fd=La?Nt:Pr;function Na(e){var n=e&&e.constructor,o=typeof n=="function"&&n.prototype||Qt;return e===o}function so(e){return e===e&&!un(e)}function oo(e,n){return function(o){return o==null?!1:o[e]===n&&(n!==a||e in on(o))}}function Ud(e){var n=pi(e,function(P){return o.size===h&&o.clear(),P}),o=n.cache;return n}function Wd(e,n){var o=e[1],P=n[1],T=o|P,M=T<(I|S|D),H=P==D&&o==A||P==D&&o==L&&e[7].length<=n[8]||P==(D|L)&&n[7].length<=n[8]&&o==A;if(!(M||H))return e;P&I&&(e[2]=n[2],T|=o&I?0:N);var G=n[3];if(G){var Q=e[3];e[3]=Q?Hs(Q,G,n[4]):G,e[4]=Q?wt(e[3],i):n[4]}return G=n[5],G&&(Q=e[5],e[5]=Q?Ys(Q,G,n[6]):G,e[6]=Q?wt(e[5],i):n[6]),G=n[7],G&&(e[7]=G),P&D&&(e[8]=e[8]==null?n[8]:wn(e[8],n[8])),e[9]==null&&(e[9]=n[9]),e[0]=n[0],e[1]=T,e}function Hd(e){var n=[];if(e!=null)for(var o in on(e))n.push(o);return n}function Yd(e){return Ka.call(e)}function po(e,n,o){return n=Pn(n===a?e.length-1:n,0),function(){for(var P=arguments,T=-1,M=Pn(P.length-n,0),H=ae(M);++T<M;)H[T]=P[n+T];T=-1;for(var G=ae(n+1);++T<n;)G[T]=P[T];return G[n]=o(H),Yn(e,this,G)}}function lo(e,n){return n.length<2?e:Yt(e,tt(n,0,-1))}function zd(e,n){for(var o=e.length,P=wn(n.length,o),T=Mn(e);P--;){var M=n[P];e[P]=Pt(M,o)?T[M]:a}return e}function rr(e,n){if(!(n==="constructor"&&typeof e[n]=="function")&&n!="__proto__")return e[n]}var uo=fo(Rs),va=sl||function(e,n){return bn.setTimeout(e,n)},sr=fo(cd);function go(e,n,o){var P=n+"";return sr(e,Cd(P,$d(Rd(P),o)))}function fo(e){var n=0,o=0;return function(){var P=dl(),T=U-(P-o);if(o=P,T>0){if(++n>=C)return arguments[0]}else n=0;return e.apply(a,arguments)}}function ii(e,n){var o=-1,P=e.length,T=P-1;for(n=n===a?P:n;++o<n;){var M=Wi(o,T),H=e[M];e[M]=e[o],e[o]=H}return e.length=n,e}var co=Ud(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(V,function(o,P,T,M){n.push(T?M.replace(Re,"$1"):P||o)}),n});function ft(e){if(typeof e=="string"||qn(e))return e;var n=e+"";return n=="0"&&1/e==-q?"-0":n}function $t(e){if(e!=null){try{return Ra.call(e)}catch(n){}try{return e+""}catch(n){}}return""}function $d(e,n){return Xn(Pe,function(o){var P="_."+o[0];n&o[1]&&!Aa(e,P)&&e.push(P)}),e.sort()}function ho(e){if(e instanceof qe)return e.clone();var n=new et(e.__wrapped__,e.__chain__);return n.__actions__=Mn(e.__actions__),n.__index__=e.__index__,n.__values__=e.__values__,n}function qd(e,n,o){(o?Rn(e,n,o):n===a)?n=1:n=Pn(Fe(n),0);var P=e==null?0:e.length;if(!P||n<1)return[];for(var T=0,M=0,H=ae(Fa(P/n));T<P;)H[M++]=tt(e,T,T+=n);return H}function Gd(e){for(var n=-1,o=e==null?0:e.length,P=0,T=[];++n<o;){var M=e[n];M&&(T[P++]=M)}return T}function Jd(){var e=arguments.length;if(!e)return[];for(var n=ae(e-1),o=arguments[0],P=e;P--;)n[P-1]=arguments[P];return Et(je(o)?Mn(o):[o],Bn(n,1))}var Vd=He(function(e,n){return cn(e)?_a(e,Bn(n,1,cn,!0)):[]}),Zd=He(function(e,n){var o=at(n);return cn(o)&&(o=a),cn(e)?_a(e,Bn(n,1,cn,!0),we(o,2)):[]}),Xd=He(function(e,n){var o=at(n);return cn(o)&&(o=a),cn(e)?_a(e,Bn(n,1,cn,!0),a,o):[]});function Qd(e,n,o){var P=e==null?0:e.length;return P?(n=o||n===a?1:Fe(n),tt(e,n<0?0:n,P)):[]}function eu(e,n,o){var P=e==null?0:e.length;return P?(n=o||n===a?1:Fe(n),n=P-n,tt(e,0,n<0?0:n)):[]}function nu(e,n){return e&&e.length?Va(e,we(n,3),!0,!0):[]}function tu(e,n){return e&&e.length?Va(e,we(n,3),!0):[]}function au(e,n,o,P){var T=e==null?0:e.length;return T?(o&&typeof o!="number"&&Rn(e,n,o)&&(o=0,P=T),Jl(e,n,o,P)):[]}function mo(e,n,o){var P=e==null?0:e.length;if(!P)return-1;var T=o==null?0:Fe(o);return T<0&&(T=Pn(P+T,0)),Ta(e,we(n,3),T)}function _o(e,n,o){var P=e==null?0:e.length;if(!P)return-1;var T=P-1;return o!==a&&(T=Fe(o),T=o<0?Pn(P+T,0):wn(T,P-1)),Ta(e,we(n,3),T,!0)}function ko(e){var n=e==null?0:e.length;return n?Bn(e,1):[]}function iu(e){var n=e==null?0:e.length;return n?Bn(e,q):[]}function ru(e,n){var o=e==null?0:e.length;return o?(n=n===a?1:Fe(n),Bn(e,n)):[]}function su(e){for(var n=-1,o=e==null?0:e.length,P={};++n<o;){var T=e[n];P[T[0]]=T[1]}return P}function yo(e){return e&&e.length?e[0]:a}function ou(e,n,o){var P=e==null?0:e.length;if(!P)return-1;var T=o==null?0:Fe(o);return T<0&&(T=Pn(P+T,0)),Vt(e,n,T)}function pu(e){var n=e==null?0:e.length;return n?tt(e,0,-1):[]}var lu=He(function(e){var n=dn(e,qi);return n.length&&n[0]===e[0]?Mi(n):[]}),du=He(function(e){var n=at(e),o=dn(e,qi);return n===at(o)?n=a:o.pop(),o.length&&o[0]===e[0]?Mi(o,we(n,2)):[]}),uu=He(function(e){var n=at(e),o=dn(e,qi);return n=typeof n=="function"?n:a,n&&o.pop(),o.length&&o[0]===e[0]?Mi(o,a,n):[]});function gu(e,n){return e==null?"":pl.call(e,n)}function at(e){var n=e==null?0:e.length;return n?e[n-1]:a}function fu(e,n,o){var P=e==null?0:e.length;if(!P)return-1;var T=P;return o!==a&&(T=Fe(o),T=T<0?Pn(P+T,0):wn(T,P-1)),n===n?$p(e,n,T):Ta(e,Xr,T,!0)}function cu(e,n){return e&&e.length?Es(e,Fe(n)):a}var hu=He(Io);function Io(e,n){return e&&e.length&&n&&n.length?Ui(e,n):e}function mu(e,n,o){return e&&e.length&&n&&n.length?Ui(e,n,we(o,2)):e}function _u(e,n,o){return e&&e.length&&n&&n.length?Ui(e,n,a,o):e}var ku=It(function(e,n){var o=e==null?0:e.length,P=Ri(e,n);return Ls(e,dn(n,function(T){return Pt(T,o)?+T:T}).sort(Ws)),P});function yu(e,n){var o=[];if(!(e&&e.length))return o;var P=-1,T=[],M=e.length;for(n=we(n,3);++P<M;){var H=e[P];n(H,P,e)&&(o.push(H),T.push(P))}return Ls(e,T),o}function or(e){return e==null?e:gl.call(e)}function Iu(e,n,o){var P=e==null?0:e.length;return P?(o&&typeof o!="number"&&Rn(e,n,o)?(n=0,o=P):(n=n==null?0:Fe(n),o=o===a?P:Fe(o)),tt(e,n,o)):[]}function Pu(e,n){return Ja(e,n)}function Nu(e,n,o){return Yi(e,n,we(o,2))}function vu(e,n){var o=e==null?0:e.length;if(o){var P=Ja(e,n);if(P<o&&pt(e[P],n))return P}return-1}function Su(e,n){return Ja(e,n,!0)}function bu(e,n,o){return Yi(e,n,we(o,2),!0)}function Bu(e,n){var o=e==null?0:e.length;if(o){var P=Ja(e,n,!0)-1;if(pt(e[P],n))return P}return-1}function Au(e){return e&&e.length?Ks(e):[]}function Tu(e,n){return e&&e.length?Ks(e,we(n,2)):[]}function Eu(e){var n=e==null?0:e.length;return n?tt(e,1,n):[]}function wu(e,n,o){return e&&e.length?(n=o||n===a?1:Fe(n),tt(e,0,n<0?0:n)):[]}function Du(e,n,o){var P=e==null?0:e.length;return P?(n=o||n===a?1:Fe(n),n=P-n,tt(e,n<0?0:n,P)):[]}function Lu(e,n){return e&&e.length?Va(e,we(n,3),!1,!0):[]}function Ru(e,n){return e&&e.length?Va(e,we(n,3)):[]}var Ku=He(function(e){return Rt(Bn(e,1,cn,!0))}),xu=He(function(e){var n=at(e);return cn(n)&&(n=a),Rt(Bn(e,1,cn,!0),we(n,2))}),Cu=He(function(e){var n=at(e);return n=typeof n=="function"?n:a,Rt(Bn(e,1,cn,!0),a,n)});function Mu(e){return e&&e.length?Rt(e):[]}function ju(e,n){return e&&e.length?Rt(e,we(n,2)):[]}function Ou(e,n){return n=typeof n=="function"?n:a,e&&e.length?Rt(e,a,n):[]}function pr(e){if(!(e&&e.length))return[];var n=0;return e=Tt(e,function(o){if(cn(o))return n=Pn(o.length,n),!0}),bi(n,function(o){return dn(e,Ni(o))})}function Po(e,n){if(!(e&&e.length))return[];var o=pr(e);return n==null?o:dn(o,function(P){return Yn(n,a,P)})}var Fu=He(function(e,n){return cn(e)?_a(e,n):[]}),Uu=He(function(e){return $i(Tt(e,cn))}),Wu=He(function(e){var n=at(e);return cn(n)&&(n=a),$i(Tt(e,cn),we(n,2))}),Hu=He(function(e){var n=at(e);return n=typeof n=="function"?n:a,$i(Tt(e,cn),a,n)}),Yu=He(pr);function zu(e,n){return js(e||[],n||[],ma)}function $u(e,n){return js(e||[],n||[],Ia)}var qu=He(function(e){var n=e.length,o=n>1?e[n-1]:a;return o=typeof o=="function"?(e.pop(),o):a,Po(e,o)});function No(e){var n=K(e);return n.__chain__=!0,n}function Gu(e,n){return n(e),e}function ri(e,n){return n(e)}var Ju=It(function(e){var n=e.length,o=n?e[0]:0,P=this.__wrapped__,T=function(M){return Ri(M,e)};return n>1||this.__actions__.length||!(P instanceof qe)||!Pt(o)?this.thru(T):(P=P.slice(o,+o+(n?1:0)),P.__actions__.push({func:ri,args:[T],thisArg:a}),new et(P,this.__chain__).thru(function(M){return n&&!M.length&&M.push(a),M}))});function Vu(){return No(this)}function Zu(){return new et(this.value(),this.__chain__)}function Xu(){this.__values__===a&&(this.__values__=Co(this.value()));var e=this.__index__>=this.__values__.length,n=e?a:this.__values__[this.__index__++];return{done:e,value:n}}function Qu(){return this}function eg(e){for(var n,o=this;o instanceof Ya;){var P=ho(o);P.__index__=0,P.__values__=a,n?T.__wrapped__=P:n=P;var T=P;o=o.__wrapped__}return T.__wrapped__=e,n}function ng(){var e=this.__wrapped__;if(e instanceof qe){var n=e;return this.__actions__.length&&(n=new qe(this)),n=n.reverse(),n.__actions__.push({func:ri,args:[or],thisArg:a}),new et(n,this.__chain__)}return this.thru(or)}function tg(){return Ms(this.__wrapped__,this.__actions__)}var ag=Za(function(e,n,o){tn.call(e,o)?++e[o]:kt(e,o,1)});function ig(e,n,o){var P=je(e)?Vr:Gl;return o&&Rn(e,n,o)&&(n=a),P(e,we(n,3))}function rg(e,n){var o=je(e)?Tt:Is;return o(e,we(n,3))}var sg=Gs(mo),og=Gs(_o);function pg(e,n){return Bn(si(e,n),1)}function lg(e,n){return Bn(si(e,n),q)}function dg(e,n,o){return o=o===a?1:Fe(o),Bn(si(e,n),o)}function vo(e,n){var o=je(e)?Xn:Lt;return o(e,we(n,3))}function So(e,n){var o=je(e)?Ep:ys;return o(e,we(n,3))}var ug=Za(function(e,n,o){tn.call(e,o)?e[o].push(n):kt(e,o,[n])});function gg(e,n,o,P){e=jn(e)?e:oa(e),o=o&&!P?Fe(o):0;var T=e.length;return o<0&&(o=Pn(T+o,0)),ui(e)?o<=T&&e.indexOf(n,o)>-1:!!T&&Vt(e,n,o)>-1}var fg=He(function(e,n,o){var P=-1,T=typeof n=="function",M=jn(e)?ae(e.length):[];return Lt(e,function(H){M[++P]=T?Yn(n,H,o):ka(H,n,o)}),M}),cg=Za(function(e,n,o){kt(e,o,n)});function si(e,n){var o=je(e)?dn:Bs;return o(e,we(n,3))}function hg(e,n,o,P){return e==null?[]:(je(n)||(n=n==null?[]:[n]),o=P?a:o,je(o)||(o=o==null?[]:[o]),ws(e,n,o))}var mg=Za(function(e,n,o){e[o?0:1].push(n)},function(){return[[],[]]});function _g(e,n,o){var P=je(e)?Ii:es,T=arguments.length<3;return P(e,we(n,4),o,T,Lt)}function kg(e,n,o){var P=je(e)?wp:es,T=arguments.length<3;return P(e,we(n,4),o,T,ys)}function yg(e,n){var o=je(e)?Tt:Is;return o(e,li(we(n,3)))}function Ig(e){var n=je(e)?hs:gd;return n(e)}function Pg(e,n,o){(o?Rn(e,n,o):n===a)?n=1:n=Fe(n);var P=je(e)?Hl:fd;return P(e,n)}function Ng(e){var n=je(e)?Yl:hd;return n(e)}function vg(e){if(e==null)return 0;if(jn(e))return ui(e)?Xt(e):e.length;var n=Dn(e);return n==We||n==_e?e.size:Oi(e).length}function Sg(e,n,o){var P=je(e)?Pi:md;return o&&Rn(e,n,o)&&(n=a),P(e,we(n,3))}var bg=He(function(e,n){if(e==null)return[];var o=n.length;return o>1&&Rn(e,n[0],n[1])?n=[]:o>2&&Rn(n[0],n[1],n[2])&&(n=[n[0]]),ws(e,Bn(n,1),[])}),oi=rl||function(){return bn.Date.now()};function Bg(e,n){if(typeof n!="function")throw new Qn(l);return e=Fe(e),function(){if(--e<1)return n.apply(this,arguments)}}function bo(e,n,o){return n=o?a:n,n=e&&n==null?e.length:n,yt(e,D,a,a,a,a,n)}function Bo(e,n){var o;if(typeof n!="function")throw new Qn(l);return e=Fe(e),function(){return--e>0&&(o=n.apply(this,arguments)),e<=1&&(n=a),o}}var lr=He(function(e,n,o){var P=I;if(o.length){var T=wt(o,ra(lr));P|=B}return yt(e,P,n,o,T)}),Ao=He(function(e,n,o){var P=I|S;if(o.length){var T=wt(o,ra(Ao));P|=B}return yt(n,P,e,o,T)});function To(e,n,o){n=o?a:n;var P=yt(e,A,a,a,a,a,a,n);return P.placeholder=To.placeholder,P}function Eo(e,n,o){n=o?a:n;var P=yt(e,b,a,a,a,a,a,n);return P.placeholder=Eo.placeholder,P}function wo(e,n,o){var P,T,M,H,G,Q,le=0,ue=!1,fe=!1,ye=!0;if(typeof e!="function")throw new Qn(l);n=it(n)||0,un(o)&&(ue=!!o.leading,fe="maxWait"in o,M=fe?Pn(it(o.maxWait)||0,n):M,ye="trailing"in o?!!o.trailing:ye);function Be(hn){var lt=P,St=T;return P=T=a,le=hn,H=e.apply(St,lt),H}function De(hn){return le=hn,G=va(ze,n),ue?Be(hn):H}function Ue(hn){var lt=hn-Q,St=hn-le,Jo=n-lt;return fe?wn(Jo,M-St):Jo}function Le(hn){var lt=hn-Q,St=hn-le;return Q===a||lt>=n||lt<0||fe&&St>=M}function ze(){var hn=oi();if(Le(hn))return Je(hn);G=va(ze,Ue(hn))}function Je(hn){return G=a,ye&&P?Be(hn):(P=T=a,H)}function Gn(){G!==a&&Os(G),le=0,P=Q=T=G=a}function Kn(){return G===a?H:Je(oi())}function Jn(){var hn=oi(),lt=Le(hn);if(P=arguments,T=this,Q=hn,lt){if(G===a)return De(Q);if(fe)return Os(G),G=va(ze,n),Be(Q)}return G===a&&(G=va(ze,n)),H}return Jn.cancel=Gn,Jn.flush=Kn,Jn}var Ag=He(function(e,n){return ks(e,1,n)}),Tg=He(function(e,n,o){return ks(e,it(n)||0,o)});function Eg(e){return yt(e,w)}function pi(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new Qn(l);var o=function(){var P=arguments,T=n?n.apply(this,P):P[0],M=o.cache;if(M.has(T))return M.get(T);var H=e.apply(this,P);return o.cache=M.set(T,H)||M,H};return o.cache=new(pi.Cache||_t),o}pi.Cache=_t;function li(e){if(typeof e!="function")throw new Qn(l);return function(){var n=arguments;switch(n.length){case 0:return!e.call(this);case 1:return!e.call(this,n[0]);case 2:return!e.call(this,n[0],n[1]);case 3:return!e.call(this,n[0],n[1],n[2])}return!e.apply(this,n)}}function wg(e){return Bo(2,e)}var Dg=_d(function(e,n){n=n.length==1&&je(n[0])?dn(n[0],zn(we())):dn(Bn(n,1),zn(we()));var o=n.length;return He(function(P){for(var T=-1,M=wn(P.length,o);++T<M;)P[T]=n[T].call(this,P[T]);return Yn(e,this,P)})}),dr=He(function(e,n){var o=wt(n,ra(dr));return yt(e,B,a,n,o)}),Do=He(function(e,n){var o=wt(n,ra(Do));return yt(e,E,a,n,o)}),Lg=It(function(e,n){return yt(e,L,a,a,a,n)});function Rg(e,n){if(typeof e!="function")throw new Qn(l);return n=n===a?n:Fe(n),He(e,n)}function Kg(e,n){if(typeof e!="function")throw new Qn(l);return n=n==null?0:Pn(Fe(n),0),He(function(o){var P=o[n],T=xt(o,0,n);return P&&Et(T,P),Yn(e,this,T)})}function xg(e,n,o){var P=!0,T=!0;if(typeof e!="function")throw new Qn(l);return un(o)&&(P="leading"in o?!!o.leading:P,T="trailing"in o?!!o.trailing:T),wo(e,n,{leading:P,maxWait:n,trailing:T})}function Cg(e){return bo(e,1)}function Mg(e,n){return dr(Gi(n),e)}function jg(){if(!arguments.length)return[];var e=arguments[0];return je(e)?e:[e]}function Og(e){return nt(e,f)}function Fg(e,n){return n=typeof n=="function"?n:a,nt(e,f,n)}function Ug(e){return nt(e,m|f)}function Wg(e,n){return n=typeof n=="function"?n:a,nt(e,m|f,n)}function Hg(e,n){return n==null||_s(e,n,Sn(n))}function pt(e,n){return e===n||e!==e&&n!==n}var Yg=ni(Ci),zg=ni(function(e,n){return e>=n}),qt=vs(function(){return arguments}())?vs:function(e){return gn(e)&&tn.call(e,"callee")&&!ls.call(e,"callee")},je=ae.isArray,$g=Yr?zn(Yr):ed;function jn(e){return e!=null&&di(e.length)&&!Nt(e)}function cn(e){return gn(e)&&jn(e)}function qg(e){return e===!0||e===!1||gn(e)&&Ln(e)==fn}var Ct=ol||Pr,Gg=zr?zn(zr):nd;function Jg(e){return gn(e)&&e.nodeType===1&&!Sa(e)}function Vg(e){if(e==null)return!0;if(jn(e)&&(je(e)||typeof e=="string"||typeof e.splice=="function"||Ct(e)||sa(e)||qt(e)))return!e.length;var n=Dn(e);if(n==We||n==_e)return!e.size;if(Na(e))return!Oi(e).length;for(var o in e)if(tn.call(e,o))return!1;return!0}function Zg(e,n){return ya(e,n)}function Xg(e,n,o){o=typeof o=="function"?o:a;var P=o?o(e,n):a;return P===a?ya(e,n,a,o):!!P}function ur(e){if(!gn(e))return!1;var n=Ln(e);return n==Ee||n==An||typeof e.message=="string"&&typeof e.name=="string"&&!Sa(e)}function Qg(e){return typeof e=="number"&&us(e)}function Nt(e){if(!un(e))return!1;var n=Ln(e);return n==Nn||n==Oe||n==mn||n==Te}function Lo(e){return typeof e=="number"&&e==Fe(e)}function di(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=$}function un(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}function gn(e){return e!=null&&typeof e=="object"}var Ro=$r?zn($r):ad;function ef(e,n){return e===n||ji(e,n,nr(n))}function nf(e,n,o){return o=typeof o=="function"?o:a,ji(e,n,nr(n),o)}function tf(e){return Ko(e)&&e!=+e}function af(e){if(Fd(e))throw new Me(u);return Ss(e)}function rf(e){return e===null}function sf(e){return e==null}function Ko(e){return typeof e=="number"||gn(e)&&Ln(e)==Un}function Sa(e){if(!gn(e)||Ln(e)!=pe)return!1;var n=Ma(e);if(n===null)return!0;var o=tn.call(n,"constructor")&&n.constructor;return typeof o=="function"&&o instanceof o&&Ra.call(o)==nl}var gr=qr?zn(qr):id;function of(e){return Lo(e)&&e>=-$&&e<=$}var xo=Gr?zn(Gr):rd;function ui(e){return typeof e=="string"||!je(e)&&gn(e)&&Ln(e)==me}function qn(e){return typeof e=="symbol"||gn(e)&&Ln(e)==Ie}var sa=Jr?zn(Jr):sd;function pf(e){return e===a}function lf(e){return gn(e)&&Dn(e)==Ge}function df(e){return gn(e)&&Ln(e)==Xe}var uf=ni(Fi),gf=ni(function(e,n){return e<=n});function Co(e){if(!e)return[];if(jn(e))return ui(e)?st(e):Mn(e);if(ua&&e[ua])return Hp(e[ua]());var n=Dn(e),o=n==We?Ai:n==_e?Ea:oa;return o(e)}function vt(e){if(!e)return e===0?e:0;if(e=it(e),e===q||e===-q){var n=e<0?-1:1;return n*te}return e===e?e:0}function Fe(e){var n=vt(e),o=n%1;return n===n?o?n-o:n:0}function Mo(e){return e?Ht(Fe(e),0,de):0}function it(e){if(typeof e=="number")return e;if(qn(e))return ie;if(un(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=un(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=ns(e);var o=yn.test(e);return o||sn.test(e)?Bp(e.slice(2),o?2:8):Ke.test(e)?ie:+e}function jo(e){return gt(e,On(e))}function ff(e){return e?Ht(Fe(e),-$,$):e===0?e:0}function nn(e){return e==null?"":$n(e)}var cf=aa(function(e,n){if(Na(n)||jn(n)){gt(n,Sn(n),e);return}for(var o in n)tn.call(n,o)&&ma(e,o,n[o])}),Oo=aa(function(e,n){gt(n,On(n),e)}),gi=aa(function(e,n,o,P){gt(n,On(n),e,P)}),hf=aa(function(e,n,o,P){gt(n,Sn(n),e,P)}),mf=It(Ri);function _f(e,n){var o=ta(e);return n==null?o:ms(o,n)}var kf=He(function(e,n){e=on(e);var o=-1,P=n.length,T=P>2?n[2]:a;for(T&&Rn(n[0],n[1],T)&&(P=1);++o<P;)for(var M=n[o],H=On(M),G=-1,Q=H.length;++G<Q;){var le=H[G],ue=e[le];(ue===a||pt(ue,Qt[le])&&!tn.call(e,le))&&(e[le]=M[le])}return e}),yf=He(function(e){return e.push(a,no),Yn(Fo,a,e)});function If(e,n){return Zr(e,we(n,3),ut)}function Pf(e,n){return Zr(e,we(n,3),xi)}function Nf(e,n){return e==null?e:Ki(e,we(n,3),On)}function vf(e,n){return e==null?e:Ps(e,we(n,3),On)}function Sf(e,n){return e&&ut(e,we(n,3))}function bf(e,n){return e&&xi(e,we(n,3))}function Bf(e){return e==null?[]:qa(e,Sn(e))}function Af(e){return e==null?[]:qa(e,On(e))}function fr(e,n,o){var P=e==null?a:Yt(e,n);return P===a?o:P}function Tf(e,n){return e!=null&&io(e,n,Vl)}function cr(e,n){return e!=null&&io(e,n,Zl)}var Ef=Vs(function(e,n,o){n!=null&&typeof n.toString!="function"&&(n=Ka.call(n)),e[n]=o},mr(Fn)),wf=Vs(function(e,n,o){n!=null&&typeof n.toString!="function"&&(n=Ka.call(n)),tn.call(e,n)?e[n].push(o):e[n]=[o]},we),Df=He(ka);function Sn(e){return jn(e)?cs(e):Oi(e)}function On(e){return jn(e)?cs(e,!0):od(e)}function Lf(e,n){var o={};return n=we(n,3),ut(e,function(P,T,M){kt(o,n(P,T,M),P)}),o}function Rf(e,n){var o={};return n=we(n,3),ut(e,function(P,T,M){kt(o,T,n(P,T,M))}),o}var Kf=aa(function(e,n,o){Ga(e,n,o)}),Fo=aa(function(e,n,o,P){Ga(e,n,o,P)}),xf=It(function(e,n){var o={};if(e==null)return o;var P=!1;n=dn(n,function(M){return M=Kt(M,e),P||(P=M.length>1),M}),gt(e,Qi(e),o),P&&(o=nt(o,m|g|f,Td));for(var T=n.length;T--;)zi(o,n[T]);return o});function Cf(e,n){return Uo(e,li(we(n)))}var Mf=It(function(e,n){return e==null?{}:ld(e,n)});function Uo(e,n){if(e==null)return{};var o=dn(Qi(e),function(P){return[P]});return n=we(n),Ds(e,o,function(P,T){return n(P,T[0])})}function jf(e,n,o){n=Kt(n,e);var P=-1,T=n.length;for(T||(T=1,e=a);++P<T;){var M=e==null?a:e[ft(n[P])];M===a&&(P=T,M=o),e=Nt(M)?M.call(e):M}return e}function Of(e,n,o){return e==null?e:Ia(e,n,o)}function Ff(e,n,o,P){return P=typeof P=="function"?P:a,e==null?e:Ia(e,n,o,P)}var Wo=Qs(Sn),Ho=Qs(On);function Uf(e,n,o){var P=je(e),T=P||Ct(e)||sa(e);if(n=we(n,4),o==null){var M=e&&e.constructor;T?o=P?new M:[]:un(e)?o=Nt(M)?ta(Ma(e)):{}:o={}}return(T?Xn:ut)(e,function(H,G,Q){return n(o,H,G,Q)}),o}function Wf(e,n){return e==null?!0:zi(e,n)}function Hf(e,n,o){return e==null?e:Cs(e,n,Gi(o))}function Yf(e,n,o,P){return P=typeof P=="function"?P:a,e==null?e:Cs(e,n,Gi(o),P)}function oa(e){return e==null?[]:Bi(e,Sn(e))}function zf(e){return e==null?[]:Bi(e,On(e))}function $f(e,n,o){return o===a&&(o=n,n=a),o!==a&&(o=it(o),o=o===o?o:0),n!==a&&(n=it(n),n=n===n?n:0),Ht(it(e),n,o)}function qf(e,n,o){return n=vt(n),o===a?(o=n,n=0):o=vt(o),e=it(e),Xl(e,n,o)}function Gf(e,n,o){if(o&&typeof o!="boolean"&&Rn(e,n,o)&&(n=o=a),o===a&&(typeof n=="boolean"?(o=n,n=a):typeof e=="boolean"&&(o=e,e=a)),e===a&&n===a?(e=0,n=1):(e=vt(e),n===a?(n=e,e=0):n=vt(n)),e>n){var P=e;e=n,n=P}if(o||e%1||n%1){var T=gs();return wn(e+T*(n-e+bp("1e-"+((T+"").length-1))),n)}return Wi(e,n)}var Jf=ia(function(e,n,o){return n=n.toLowerCase(),e+(o?Yo(n):n)});function Yo(e){return hr(nn(e).toLowerCase())}function zo(e){return e=nn(e),e&&e.replace(Ot,jp).replace(hp,"")}function Vf(e,n,o){e=nn(e),n=$n(n);var P=e.length;o=o===a?P:Ht(Fe(o),0,P);var T=o;return o-=n.length,o>=0&&e.slice(o,T)==n}function Zf(e){return e=nn(e),e&&jt.test(e)?e.replace(Mt,Op):e}function Xf(e){return e=nn(e),e&&W.test(e)?e.replace(J,"\\$&"):e}var Qf=ia(function(e,n,o){return e+(o?"-":"")+n.toLowerCase()}),ec=ia(function(e,n,o){return e+(o?" ":"")+n.toLowerCase()}),nc=qs("toLowerCase");function tc(e,n,o){e=nn(e),n=Fe(n);var P=n?Xt(e):0;if(!n||P>=n)return e;var T=(n-P)/2;return ei(Ua(T),o)+e+ei(Fa(T),o)}function ac(e,n,o){e=nn(e),n=Fe(n);var P=n?Xt(e):0;return n&&P<n?e+ei(n-P,o):e}function ic(e,n,o){e=nn(e),n=Fe(n);var P=n?Xt(e):0;return n&&P<n?ei(n-P,o)+e:e}function rc(e,n,o){return o||n==null?n=0:n&&(n=+n),ul(nn(e).replace(Z,""),n||0)}function sc(e,n,o){return(o?Rn(e,n,o):n===a)?n=1:n=Fe(n),Hi(nn(e),n)}function oc(){var e=arguments,n=nn(e[0]);return e.length<3?n:n.replace(e[1],e[2])}var pc=ia(function(e,n,o){return e+(o?"_":"")+n.toLowerCase()});function lc(e,n,o){return o&&typeof o!="number"&&Rn(e,n,o)&&(n=o=a),o=o===a?de:o>>>0,o?(e=nn(e),e&&(typeof n=="string"||n!=null&&!gr(n))&&(n=$n(n),!n&&Zt(e))?xt(st(e),0,o):e.split(n,o)):[]}var dc=ia(function(e,n,o){return e+(o?" ":"")+hr(n)});function uc(e,n,o){return e=nn(e),o=o==null?0:Ht(Fe(o),0,e.length),n=$n(n),e.slice(o,o+n.length)==n}function gc(e,n,o){var P=K.templateSettings;o&&Rn(e,n,o)&&(n=a),e=nn(e),n=gi({},n,P,eo);var T=gi({},n.imports,P.imports,eo),M=Sn(T),H=Bi(T,M),G,Q,le=0,ue=n.interpolate||vn,fe="__p += '",ye=Ti((n.escape||vn).source+"|"+ue.source+"|"+(ue===Gt?$e:vn).source+"|"+(n.evaluate||vn).source+"|$","g"),Be="//# sourceURL="+(tn.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Ip+"]")+`
`;e.replace(ye,function(Le,ze,Je,Gn,Kn,Jn){return Je||(Je=Gn),fe+=e.slice(le,Jn).replace(Zo,Fp),ze&&(G=!0,fe+=`' +
__e(`+ze+`) +
'`),Kn&&(Q=!0,fe+=`';
`+Kn+`;
__p += '`),Je&&(fe+=`' +
((__t = (`+Je+`)) == null ? '' : __t) +
'`),le=Jn+Le.length,Le}),fe+=`';
`;var De=tn.call(n,"variable")&&n.variable;if(!De)fe=`with (obj) {
`+fe+`
}
`;else if(be.test(De))throw new Me(r);fe=(Q?fe.replace(Cn,""):fe).replace(ht,"$1").replace(kn,"$1;"),fe="function("+(De||"obj")+`) {
`+(De?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(G?", __e = _.escape":"")+(Q?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+fe+`return __p
}`;var Ue=qo(function(){return en(M,Be+"return "+fe).apply(a,H)});if(Ue.source=fe,ur(Ue))throw Ue;return Ue}function fc(e){return nn(e).toLowerCase()}function cc(e){return nn(e).toUpperCase()}function hc(e,n,o){if(e=nn(e),e&&(o||n===a))return ns(e);if(!e||!(n=$n(n)))return e;var P=st(e),T=st(n),M=ts(P,T),H=as(P,T)+1;return xt(P,M,H).join("")}function mc(e,n,o){if(e=nn(e),e&&(o||n===a))return e.slice(0,rs(e)+1);if(!e||!(n=$n(n)))return e;var P=st(e),T=as(P,st(n))+1;return xt(P,0,T).join("")}function _c(e,n,o){if(e=nn(e),e&&(o||n===a))return e.replace(Z,"");if(!e||!(n=$n(n)))return e;var P=st(e),T=ts(P,st(n));return xt(P,T).join("")}function kc(e,n){var o=R,P=O;if(un(n)){var T="separator"in n?n.separator:T;o="length"in n?Fe(n.length):o,P="omission"in n?$n(n.omission):P}e=nn(e);var M=e.length;if(Zt(e)){var H=st(e);M=H.length}if(o>=M)return e;var G=o-Xt(P);if(G<1)return P;var Q=H?xt(H,0,G).join(""):e.slice(0,G);if(T===a)return Q+P;if(H&&(G+=Q.length-G),gr(T)){if(e.slice(G).search(T)){var le,ue=Q;for(T.global||(T=Ti(T.source,nn(ke.exec(T))+"g")),T.lastIndex=0;le=T.exec(ue);)var fe=le.index;Q=Q.slice(0,fe===a?G:fe)}}else if(e.indexOf($n(T),G)!=G){var ye=Q.lastIndexOf(T);ye>-1&&(Q=Q.slice(0,ye))}return Q+P}function yc(e){return e=nn(e),e&&dt.test(e)?e.replace(Bt,qp):e}var Ic=ia(function(e,n,o){return e+(o?" ":"")+n.toUpperCase()}),hr=qs("toUpperCase");function $o(e,n,o){return e=nn(e),n=o?a:n,n===a?Wp(e)?Vp(e):Rp(e):e.match(n)||[]}var qo=He(function(e,n){try{return Yn(e,a,n)}catch(o){return ur(o)?o:new Me(o)}}),Pc=It(function(e,n){return Xn(n,function(o){o=ft(o),kt(e,o,lr(e[o],e))}),e});function Nc(e){var n=e==null?0:e.length,o=we();return e=n?dn(e,function(P){if(typeof P[1]!="function")throw new Qn(l);return[o(P[0]),P[1]]}):[],He(function(P){for(var T=-1;++T<n;){var M=e[T];if(Yn(M[0],this,P))return Yn(M[1],this,P)}})}function vc(e){return ql(nt(e,m))}function mr(e){return function(){return e}}function Sc(e,n){return e==null||e!==e?n:e}var bc=Js(),Bc=Js(!0);function Fn(e){return e}function _r(e){return bs(typeof e=="function"?e:nt(e,m))}function Ac(e){return As(nt(e,m))}function Tc(e,n){return Ts(e,nt(n,m))}var Ec=He(function(e,n){return function(o){return ka(o,e,n)}}),wc=He(function(e,n){return function(o){return ka(e,o,n)}});function kr(e,n,o){var P=Sn(n),T=qa(n,P);o==null&&!(un(n)&&(T.length||!P.length))&&(o=n,n=e,e=this,T=qa(n,Sn(n)));var M=!(un(o)&&"chain"in o)||!!o.chain,H=Nt(e);return Xn(T,function(G){var Q=n[G];e[G]=Q,H&&(e.prototype[G]=function(){var le=this.__chain__;if(M||le){var ue=e(this.__wrapped__),fe=ue.__actions__=Mn(this.__actions__);return fe.push({func:Q,args:arguments,thisArg:e}),ue.__chain__=le,ue}return Q.apply(e,Et([this.value()],arguments))})}),e}function Dc(){return bn._===this&&(bn._=tl),this}function yr(){}function Lc(e){return e=Fe(e),He(function(n){return Es(n,e)})}var Rc=Vi(dn),Kc=Vi(Vr),xc=Vi(Pi);function Go(e){return ar(e)?Ni(ft(e)):dd(e)}function Cc(e){return function(n){return e==null?a:Yt(e,n)}}var Mc=Zs(),jc=Zs(!0);function Ir(){return[]}function Pr(){return!1}function Oc(){return{}}function Fc(){return""}function Uc(){return!0}function Wc(e,n){if(e=Fe(e),e<1||e>$)return[];var o=de,P=wn(e,de);n=we(n),e-=de;for(var T=bi(P,n);++o<e;)n(o);return T}function Hc(e){return je(e)?dn(e,ft):qn(e)?[e]:Mn(co(nn(e)))}function Yc(e){var n=++el;return nn(e)+n}var zc=Qa(function(e,n){return e+n},0),$c=Zi("ceil"),qc=Qa(function(e,n){return e/n},1),Gc=Zi("floor");function Jc(e){return e&&e.length?$a(e,Fn,Ci):a}function Vc(e,n){return e&&e.length?$a(e,we(n,2),Ci):a}function Zc(e){return Qr(e,Fn)}function Xc(e,n){return Qr(e,we(n,2))}function Qc(e){return e&&e.length?$a(e,Fn,Fi):a}function eh(e,n){return e&&e.length?$a(e,we(n,2),Fi):a}var nh=Qa(function(e,n){return e*n},1),th=Zi("round"),ah=Qa(function(e,n){return e-n},0);function ih(e){return e&&e.length?Si(e,Fn):0}function rh(e,n){return e&&e.length?Si(e,we(n,2)):0}return K.after=Bg,K.ary=bo,K.assign=cf,K.assignIn=Oo,K.assignInWith=gi,K.assignWith=hf,K.at=mf,K.before=Bo,K.bind=lr,K.bindAll=Pc,K.bindKey=Ao,K.castArray=jg,K.chain=No,K.chunk=qd,K.compact=Gd,K.concat=Jd,K.cond=Nc,K.conforms=vc,K.constant=mr,K.countBy=ag,K.create=_f,K.curry=To,K.curryRight=Eo,K.debounce=wo,K.defaults=kf,K.defaultsDeep=yf,K.defer=Ag,K.delay=Tg,K.difference=Vd,K.differenceBy=Zd,K.differenceWith=Xd,K.drop=Qd,K.dropRight=eu,K.dropRightWhile=nu,K.dropWhile=tu,K.fill=au,K.filter=rg,K.flatMap=pg,K.flatMapDeep=lg,K.flatMapDepth=dg,K.flatten=ko,K.flattenDeep=iu,K.flattenDepth=ru,K.flip=Eg,K.flow=bc,K.flowRight=Bc,K.fromPairs=su,K.functions=Bf,K.functionsIn=Af,K.groupBy=ug,K.initial=pu,K.intersection=lu,K.intersectionBy=du,K.intersectionWith=uu,K.invert=Ef,K.invertBy=wf,K.invokeMap=fg,K.iteratee=_r,K.keyBy=cg,K.keys=Sn,K.keysIn=On,K.map=si,K.mapKeys=Lf,K.mapValues=Rf,K.matches=Ac,K.matchesProperty=Tc,K.memoize=pi,K.merge=Kf,K.mergeWith=Fo,K.method=Ec,K.methodOf=wc,K.mixin=kr,K.negate=li,K.nthArg=Lc,K.omit=xf,K.omitBy=Cf,K.once=wg,K.orderBy=hg,K.over=Rc,K.overArgs=Dg,K.overEvery=Kc,K.overSome=xc,K.partial=dr,K.partialRight=Do,K.partition=mg,K.pick=Mf,K.pickBy=Uo,K.property=Go,K.propertyOf=Cc,K.pull=hu,K.pullAll=Io,K.pullAllBy=mu,K.pullAllWith=_u,K.pullAt=ku,K.range=Mc,K.rangeRight=jc,K.rearg=Lg,K.reject=yg,K.remove=yu,K.rest=Rg,K.reverse=or,K.sampleSize=Pg,K.set=Of,K.setWith=Ff,K.shuffle=Ng,K.slice=Iu,K.sortBy=bg,K.sortedUniq=Au,K.sortedUniqBy=Tu,K.split=lc,K.spread=Kg,K.tail=Eu,K.take=wu,K.takeRight=Du,K.takeRightWhile=Lu,K.takeWhile=Ru,K.tap=Gu,K.throttle=xg,K.thru=ri,K.toArray=Co,K.toPairs=Wo,K.toPairsIn=Ho,K.toPath=Hc,K.toPlainObject=jo,K.transform=Uf,K.unary=Cg,K.union=Ku,K.unionBy=xu,K.unionWith=Cu,K.uniq=Mu,K.uniqBy=ju,K.uniqWith=Ou,K.unset=Wf,K.unzip=pr,K.unzipWith=Po,K.update=Hf,K.updateWith=Yf,K.values=oa,K.valuesIn=zf,K.without=Fu,K.words=$o,K.wrap=Mg,K.xor=Uu,K.xorBy=Wu,K.xorWith=Hu,K.zip=Yu,K.zipObject=zu,K.zipObjectDeep=$u,K.zipWith=qu,K.entries=Wo,K.entriesIn=Ho,K.extend=Oo,K.extendWith=gi,kr(K,K),K.add=zc,K.attempt=qo,K.camelCase=Jf,K.capitalize=Yo,K.ceil=$c,K.clamp=$f,K.clone=Og,K.cloneDeep=Ug,K.cloneDeepWith=Wg,K.cloneWith=Fg,K.conformsTo=Hg,K.deburr=zo,K.defaultTo=Sc,K.divide=qc,K.endsWith=Vf,K.eq=pt,K.escape=Zf,K.escapeRegExp=Xf,K.every=ig,K.find=sg,K.findIndex=mo,K.findKey=If,K.findLast=og,K.findLastIndex=_o,K.findLastKey=Pf,K.floor=Gc,K.forEach=vo,K.forEachRight=So,K.forIn=Nf,K.forInRight=vf,K.forOwn=Sf,K.forOwnRight=bf,K.get=fr,K.gt=Yg,K.gte=zg,K.has=Tf,K.hasIn=cr,K.head=yo,K.identity=Fn,K.includes=gg,K.indexOf=ou,K.inRange=qf,K.invoke=Df,K.isArguments=qt,K.isArray=je,K.isArrayBuffer=$g,K.isArrayLike=jn,K.isArrayLikeObject=cn,K.isBoolean=qg,K.isBuffer=Ct,K.isDate=Gg,K.isElement=Jg,K.isEmpty=Vg,K.isEqual=Zg,K.isEqualWith=Xg,K.isError=ur,K.isFinite=Qg,K.isFunction=Nt,K.isInteger=Lo,K.isLength=di,K.isMap=Ro,K.isMatch=ef,K.isMatchWith=nf,K.isNaN=tf,K.isNative=af,K.isNil=sf,K.isNull=rf,K.isNumber=Ko,K.isObject=un,K.isObjectLike=gn,K.isPlainObject=Sa,K.isRegExp=gr,K.isSafeInteger=of,K.isSet=xo,K.isString=ui,K.isSymbol=qn,K.isTypedArray=sa,K.isUndefined=pf,K.isWeakMap=lf,K.isWeakSet=df,K.join=gu,K.kebabCase=Qf,K.last=at,K.lastIndexOf=fu,K.lowerCase=ec,K.lowerFirst=nc,K.lt=uf,K.lte=gf,K.max=Jc,K.maxBy=Vc,K.mean=Zc,K.meanBy=Xc,K.min=Qc,K.minBy=eh,K.stubArray=Ir,K.stubFalse=Pr,K.stubObject=Oc,K.stubString=Fc,K.stubTrue=Uc,K.multiply=nh,K.nth=cu,K.noConflict=Dc,K.noop=yr,K.now=oi,K.pad=tc,K.padEnd=ac,K.padStart=ic,K.parseInt=rc,K.random=Gf,K.reduce=_g,K.reduceRight=kg,K.repeat=sc,K.replace=oc,K.result=jf,K.round=th,K.runInContext=X,K.sample=Ig,K.size=vg,K.snakeCase=pc,K.some=Sg,K.sortedIndex=Pu,K.sortedIndexBy=Nu,K.sortedIndexOf=vu,K.sortedLastIndex=Su,K.sortedLastIndexBy=bu,K.sortedLastIndexOf=Bu,K.startCase=dc,K.startsWith=uc,K.subtract=ah,K.sum=ih,K.sumBy=rh,K.template=gc,K.times=Wc,K.toFinite=vt,K.toInteger=Fe,K.toLength=Mo,K.toLower=fc,K.toNumber=it,K.toSafeInteger=ff,K.toString=nn,K.toUpper=cc,K.trim=hc,K.trimEnd=mc,K.trimStart=_c,K.truncate=kc,K.unescape=yc,K.uniqueId=Yc,K.upperCase=Ic,K.upperFirst=hr,K.each=vo,K.eachRight=So,K.first=yo,kr(K,function(){var e={};return ut(K,function(n,o){tn.call(K.prototype,o)||(e[o]=n)}),e}(),{chain:!1}),K.VERSION=t,Xn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){K[e].placeholder=K}),Xn(["drop","take"],function(e,n){qe.prototype[e]=function(o){o=o===a?1:Pn(Fe(o),0);var P=this.__filtered__&&!n?new qe(this):this.clone();return P.__filtered__?P.__takeCount__=wn(o,P.__takeCount__):P.__views__.push({size:wn(o,de),type:e+(P.__dir__<0?"Right":"")}),P},qe.prototype[e+"Right"]=function(o){return this.reverse()[e](o).reverse()}}),Xn(["filter","map","takeWhile"],function(e,n){var o=n+1,P=o==F||o==j;qe.prototype[e]=function(T){var M=this.clone();return M.__iteratees__.push({iteratee:we(T,3),type:o}),M.__filtered__=M.__filtered__||P,M}}),Xn(["head","last"],function(e,n){var o="take"+(n?"Right":"");qe.prototype[e]=function(){return this[o](1).value()[0]}}),Xn(["initial","tail"],function(e,n){var o="drop"+(n?"":"Right");qe.prototype[e]=function(){return this.__filtered__?new qe(this):this[o](1)}}),qe.prototype.compact=function(){return this.filter(Fn)},qe.prototype.find=function(e){return this.filter(e).head()},qe.prototype.findLast=function(e){return this.reverse().find(e)},qe.prototype.invokeMap=He(function(e,n){return typeof e=="function"?new qe(this):this.map(function(o){return ka(o,e,n)})}),qe.prototype.reject=function(e){return this.filter(li(we(e)))},qe.prototype.slice=function(e,n){e=Fe(e);var o=this;return o.__filtered__&&(e>0||n<0)?new qe(o):(e<0?o=o.takeRight(-e):e&&(o=o.drop(e)),n!==a&&(n=Fe(n),o=n<0?o.dropRight(-n):o.take(n-e)),o)},qe.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},qe.prototype.toArray=function(){return this.take(de)},ut(qe.prototype,function(e,n){var o=/^(?:filter|find|map|reject)|While$/.test(n),P=/^(?:head|last)$/.test(n),T=K[P?"take"+(n=="last"?"Right":""):n],M=P||/^find/.test(n);!T||(K.prototype[n]=function(){var H=this.__wrapped__,G=P?[1]:arguments,Q=H instanceof qe,le=G[0],ue=Q||je(H),fe=function(ze){var Je=T.apply(K,Et([ze],G));return P&&ye?Je[0]:Je};ue&&o&&typeof le=="function"&&le.length!=1&&(Q=ue=!1);var ye=this.__chain__,Be=!!this.__actions__.length,De=M&&!ye,Ue=Q&&!Be;if(!M&&ue){H=Ue?H:new qe(this);var Le=e.apply(H,G);return Le.__actions__.push({func:ri,args:[fe],thisArg:a}),new et(Le,ye)}return De&&Ue?e.apply(this,G):(Le=this.thru(fe),De?P?Le.value()[0]:Le.value():Le)})}),Xn(["pop","push","shift","sort","splice","unshift"],function(e){var n=Da[e],o=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",P=/^(?:pop|shift)$/.test(e);K.prototype[e]=function(){var T=arguments;if(P&&!this.__chain__){var M=this.value();return n.apply(je(M)?M:[],T)}return this[o](function(H){return n.apply(je(H)?H:[],T)})}}),ut(qe.prototype,function(e,n){var o=K[n];if(o){var P=o.name+"";tn.call(na,P)||(na[P]=[]),na[P].push({name:n,func:o})}}),na[Xa(a,S).name]=[{name:"wrapper",func:a}],qe.prototype.clone=kl,qe.prototype.reverse=yl,qe.prototype.value=Il,K.prototype.at=Ju,K.prototype.chain=Vu,K.prototype.commit=Zu,K.prototype.next=Xu,K.prototype.plant=eg,K.prototype.reverse=ng,K.prototype.toJSON=K.prototype.valueOf=K.prototype.value=tg,K.prototype.first=K.prototype.head,ua&&(K.prototype[ua]=Qu),K},wa=Zp();bn._=wa,c=function(){return wa}.call(k,s,k,v),c!==a&&(v.exports=c)}).call(this)},8366:(v,k,s)=>{"use strict";const c=s(9623),a=Symbol("max"),t=Symbol("length"),p=Symbol("lengthCalculator"),u=Symbol("allowStale"),l=Symbol("maxAge"),r=Symbol("dispose"),d=Symbol("noDisposeOnSet"),h=Symbol("lruList"),i=Symbol("cache"),m=Symbol("updateAgeOnGet"),g=()=>1;class f{constructor(B){if(typeof B=="number"&&(B={max:B}),B||(B={}),B.max&&(typeof B.max!="number"||B.max<0))throw new TypeError("max must be a non-negative number");const E=this[a]=B.max||1/0,D=B.length||g;if(this[p]=typeof D!="function"?g:D,this[u]=B.stale||!1,B.maxAge&&typeof B.maxAge!="number")throw new TypeError("maxAge must be a number");this[l]=B.maxAge||0,this[r]=B.dispose,this[d]=B.noDisposeOnSet||!1,this[m]=B.updateAgeOnGet||!1,this.reset()}set max(B){if(typeof B!="number"||B<0)throw new TypeError("max must be a non-negative number");this[a]=B||1/0,I(this)}get max(){return this[a]}set allowStale(B){this[u]=!!B}get allowStale(){return this[u]}set maxAge(B){if(typeof B!="number")throw new TypeError("maxAge must be a non-negative number");this[l]=B,I(this)}get maxAge(){return this[l]}set lengthCalculator(B){typeof B!="function"&&(B=g),B!==this[p]&&(this[p]=B,this[t]=0,this[h].forEach(E=>{E.length=this[p](E.value,E.key),this[t]+=E.length})),I(this)}get lengthCalculator(){return this[p]}get length(){return this[t]}get itemCount(){return this[h].length}rforEach(B,E){E=E||this;for(let D=this[h].tail;D!==null;){const L=D.prev;A(this,B,D,E),D=L}}forEach(B,E){E=E||this;for(let D=this[h].head;D!==null;){const L=D.next;A(this,B,D,E),D=L}}keys(){return this[h].toArray().map(B=>B.key)}values(){return this[h].toArray().map(B=>B.value)}reset(){this[r]&&this[h]&&this[h].length&&this[h].forEach(B=>this[r](B.key,B.value)),this[i]=new Map,this[h]=new c,this[t]=0}dump(){return this[h].map(B=>_(this,B)?!1:{k:B.key,v:B.value,e:B.now+(B.maxAge||0)}).toArray().filter(B=>B)}dumpLru(){return this[h]}set(B,E,D){if(D=D||this[l],D&&typeof D!="number")throw new TypeError("maxAge must be a number");const L=D?Date.now():0,w=this[p](E,B);if(this[i].has(B)){if(w>this[a])return S(this,this[i].get(B)),!1;const C=this[i].get(B).value;return this[r]&&(this[d]||this[r](B,C.value)),C.now=L,C.maxAge=D,C.value=E,this[t]+=w-C.length,C.length=w,this.get(B),I(this),!0}const R=new N(B,E,w,L,D);return R.length>this[a]?(this[r]&&this[r](B,E),!1):(this[t]+=R.length,this[h].unshift(R),this[i].set(B,this[h].head),I(this),!0)}has(B){if(!this[i].has(B))return!1;const E=this[i].get(B).value;return!_(this,E)}get(B){return y(this,B,!0)}peek(B){return y(this,B,!1)}pop(){const B=this[h].tail;return B?(S(this,B),B.value):null}del(B){S(this,this[i].get(B))}load(B){this.reset();const E=Date.now();for(let D=B.length-1;D>=0;D--){const L=B[D],w=L.e||0;if(w===0)this.set(L.k,L.v);else{const R=w-E;R>0&&this.set(L.k,L.v,R)}}}prune(){this[i].forEach((B,E)=>y(this,E,!1))}}const y=(b,B,E)=>{const D=b[i].get(B);if(D){const L=D.value;if(_(b,L)){if(S(b,D),!b[u])return}else E&&(b[m]&&(D.value.now=Date.now()),b[h].unshiftNode(D));return L.value}},_=(b,B)=>{if(!B||!B.maxAge&&!b[l])return!1;const E=Date.now()-B.now;return B.maxAge?E>B.maxAge:b[l]&&E>b[l]},I=b=>{if(b[t]>b[a])for(let B=b[h].tail;b[t]>b[a]&&B!==null;){const E=B.prev;S(b,B),B=E}},S=(b,B)=>{if(B){const E=B.value;b[r]&&b[r](E.key,E.value),b[t]-=E.length,b[i].delete(E.key),b[h].removeNode(B)}};class N{constructor(B,E,D,L,w){this.key=B,this.value=E,this.length=D,this.now=L,this.maxAge=w||0}}const A=(b,B,E,D)=>{let L=E.value;_(b,L)&&(S(b,E),b[u]||(L=void 0)),L&&B.call(D,L.value,L.key,b)};v.exports=f},2448:()=>{(function(v){var k="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",s={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},c={bash:s,environment:{pattern:RegExp("\\$"+k),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+k),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};v.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+k),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:c},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:s}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:c},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:c.entity}}],environment:{pattern:RegExp("\\$?"+k),alias:"constant"},variable:c.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},s.inside=v.languages.bash;for(var a=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],t=c.variable[1].inside,p=0;p<a.length;p++)t[a[p]]=v.languages.bash[a[p]];v.languages.shell=v.languages.bash})(Prism)},3244:()=>{(function(v){function k(r){return RegExp("(^(?:"+r+"):[ 	]*(?![ 	]))[^]+","i")}v.languages.http={"request-line":{pattern:/^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,inside:{method:{pattern:/^[A-Z]+\b/,alias:"property"},"request-target":{pattern:/^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,lookbehind:!0,alias:"url",inside:v.languages.uri},"http-version":{pattern:/^(\s)HTTP\/[\d.]+/,lookbehind:!0,alias:"property"}}},"response-status":{pattern:/^HTTP\/[\d.]+ \d+ .+/m,inside:{"http-version":{pattern:/^HTTP\/[\d.]+/,alias:"property"},"status-code":{pattern:/^(\s)\d+(?=\s)/,lookbehind:!0,alias:"number"},"reason-phrase":{pattern:/^(\s).+/,lookbehind:!0,alias:"string"}}},header:{pattern:/^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,inside:{"header-value":[{pattern:k(/Content-Security-Policy/.source),lookbehind:!0,alias:["csp","languages-csp"],inside:v.languages.csp},{pattern:k(/Public-Key-Pins(?:-Report-Only)?/.source),lookbehind:!0,alias:["hpkp","languages-hpkp"],inside:v.languages.hpkp},{pattern:k(/Strict-Transport-Security/.source),lookbehind:!0,alias:["hsts","languages-hsts"],inside:v.languages.hsts},{pattern:k(/[^:]+/.source),lookbehind:!0}],"header-name":{pattern:/^[^:]+/,alias:"keyword"},punctuation:/^:/}}};var s=v.languages,c={"application/javascript":s.javascript,"application/json":s.json||s.javascript,"application/xml":s.xml,"text/xml":s.xml,"text/html":s.html,"text/css":s.css,"text/plain":s.plain},a={"application/json":!0,"application/xml":!0};function t(r){var d=r.replace(/^[a-z]+\//,""),h="\\w+/(?:[\\w.-]+\\+)+"+d+"(?![+\\w.-])";return"(?:"+r+"|"+h+")"}var p;for(var u in c)if(c[u]){p=p||{};var l=a[u]?t(u):u;p[u.replace(/\//g,"-")]={pattern:RegExp("("+/content-type:\s*/.source+l+/(?:(?:\r\n?|\n)[\w-].*)*(?:\r(?:\n|(?!\n))|\n)/.source+")"+/[^ \t\w-][\s\S]*/.source,"i"),lookbehind:!0,inside:c[u]}}p&&v.languages.insertBefore("http","header",p)})(Prism)},6257:()=>{Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json},8620:()=>{Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python},5142:(v,k,s)=>{var c=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var a=function(t){var p=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,u=0,l={},r={manual:t.Prism&&t.Prism.manual,disableWorkerMessageHandler:t.Prism&&t.Prism.disableWorkerMessageHandler,util:{encode:function N(A){return A instanceof d?new d(A.type,N(A.content),A.alias):Array.isArray(A)?A.map(N):A.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(N){return Object.prototype.toString.call(N).slice(8,-1)},objId:function(N){return N.__id||Object.defineProperty(N,"__id",{value:++u}),N.__id},clone:function N(A,b){b=b||{};var B,E;switch(r.util.type(A)){case"Object":if(E=r.util.objId(A),b[E])return b[E];B={},b[E]=B;for(var D in A)A.hasOwnProperty(D)&&(B[D]=N(A[D],b));return B;case"Array":return E=r.util.objId(A),b[E]?b[E]:(B=[],b[E]=B,A.forEach(function(L,w){B[w]=N(L,b)}),B);default:return A}},getLanguage:function(N){for(;N;){var A=p.exec(N.className);if(A)return A[1].toLowerCase();N=N.parentElement}return"none"},setLanguage:function(N,A){N.className=N.className.replace(RegExp(p,"gi"),""),N.classList.add("language-"+A)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(B){var N=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(B.stack)||[])[1];if(N){var A=document.getElementsByTagName("script");for(var b in A)if(A[b].src==N)return A[b]}return null}},isActive:function(N,A,b){for(var B="no-"+A;N;){var E=N.classList;if(E.contains(A))return!0;if(E.contains(B))return!1;N=N.parentElement}return!!b}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(N,A){var b=r.util.clone(r.languages[N]);for(var B in A)b[B]=A[B];return b},insertBefore:function(N,A,b,B){B=B||r.languages;var E=B[N],D={};for(var L in E)if(E.hasOwnProperty(L)){if(L==A)for(var w in b)b.hasOwnProperty(w)&&(D[w]=b[w]);b.hasOwnProperty(L)||(D[L]=E[L])}var R=B[N];return B[N]=D,r.languages.DFS(r.languages,function(O,C){C===R&&O!=N&&(this[O]=D)}),D},DFS:function N(A,b,B,E){E=E||{};var D=r.util.objId;for(var L in A)if(A.hasOwnProperty(L)){b.call(A,L,A[L],B||L);var w=A[L],R=r.util.type(w);R==="Object"&&!E[D(w)]?(E[D(w)]=!0,N(w,b,null,E)):R==="Array"&&!E[D(w)]&&(E[D(w)]=!0,N(w,b,L,E))}}},plugins:{},highlightAll:function(N,A){r.highlightAllUnder(document,N,A)},highlightAllUnder:function(N,A,b){var B={callback:b,container:N,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",B),B.elements=Array.prototype.slice.apply(B.container.querySelectorAll(B.selector)),r.hooks.run("before-all-elements-highlight",B);for(var E=0,D;D=B.elements[E++];)r.highlightElement(D,A===!0,B.callback)},highlightElement:function(N,A,b){var B=r.util.getLanguage(N),E=r.languages[B];r.util.setLanguage(N,B);var D=N.parentElement;D&&D.nodeName.toLowerCase()==="pre"&&r.util.setLanguage(D,B);var L=N.textContent,w={element:N,language:B,grammar:E,code:L};function R(C){w.highlightedCode=C,r.hooks.run("before-insert",w),w.element.innerHTML=w.highlightedCode,r.hooks.run("after-highlight",w),r.hooks.run("complete",w),b&&b.call(w.element)}if(r.hooks.run("before-sanity-check",w),D=w.element.parentElement,D&&D.nodeName.toLowerCase()==="pre"&&!D.hasAttribute("tabindex")&&D.setAttribute("tabindex","0"),!w.code){r.hooks.run("complete",w),b&&b.call(w.element);return}if(r.hooks.run("before-highlight",w),!w.grammar){R(r.util.encode(w.code));return}if(A&&t.Worker){var O=new Worker(r.filename);O.onmessage=function(C){R(C.data)},O.postMessage(JSON.stringify({language:w.language,code:w.code,immediateClose:!0}))}else R(r.highlight(w.code,w.grammar,w.language))},highlight:function(N,A,b){var B={code:N,grammar:A,language:b};if(r.hooks.run("before-tokenize",B),!B.grammar)throw new Error('The language "'+B.language+'" has no grammar.');return B.tokens=r.tokenize(B.code,B.grammar),r.hooks.run("after-tokenize",B),d.stringify(r.util.encode(B.tokens),B.language)},tokenize:function(N,A){var b=A.rest;if(b){for(var B in b)A[B]=b[B];delete A.rest}var E=new m;return g(E,E.head,N),i(N,E,A,E.head,0),y(E)},hooks:{all:{},add:function(N,A){var b=r.hooks.all;b[N]=b[N]||[],b[N].push(A)},run:function(N,A){var b=r.hooks.all[N];if(!(!b||!b.length))for(var B=0,E;E=b[B++];)E(A)}},Token:d};t.Prism=r;function d(N,A,b,B){this.type=N,this.content=A,this.alias=b,this.length=(B||"").length|0}d.stringify=function N(A,b){if(typeof A=="string")return A;if(Array.isArray(A)){var B="";return A.forEach(function(R){B+=N(R,b)}),B}var E={type:A.type,content:N(A.content,b),tag:"span",classes:["token",A.type],attributes:{},language:b},D=A.alias;D&&(Array.isArray(D)?Array.prototype.push.apply(E.classes,D):E.classes.push(D)),r.hooks.run("wrap",E);var L="";for(var w in E.attributes)L+=" "+w+'="'+(E.attributes[w]||"").replace(/"/g,"&quot;")+'"';return"<"+E.tag+' class="'+E.classes.join(" ")+'"'+L+">"+E.content+"</"+E.tag+">"};function h(N,A,b,B){N.lastIndex=A;var E=N.exec(b);if(E&&B&&E[1]){var D=E[1].length;E.index+=D,E[0]=E[0].slice(D)}return E}function i(N,A,b,B,E,D){for(var L in b)if(!(!b.hasOwnProperty(L)||!b[L])){var w=b[L];w=Array.isArray(w)?w:[w];for(var R=0;R<w.length;++R){if(D&&D.cause==L+","+R)return;var O=w[R],C=O.inside,U=!!O.lookbehind,F=!!O.greedy,z=O.alias;if(F&&!O.pattern.global){var j=O.pattern.toString().match(/[imsuy]*$/)[0];O.pattern=RegExp(O.pattern.source,j+"g")}for(var q=O.pattern||O,$=B.next,te=E;$!==A.tail&&!(D&&te>=D.reach);te+=$.value.length,$=$.next){var ie=$.value;if(A.length>N.length)return;if(!(ie instanceof d)){var de=1,ne;if(F){if(ne=h(q,te,N,U),!ne||ne.index>=N.length)break;var rn=ne.index,ce=ne.index+ne[0].length,Pe=te;for(Pe+=$.value.length;rn>=Pe;)$=$.next,Pe+=$.value.length;if(Pe-=$.value.length,te=Pe,$.value instanceof d)continue;for(var xe=$;xe!==A.tail&&(Pe<ce||typeof xe.value=="string");xe=xe.next)de++,Pe+=xe.value.length;de--,ie=N.slice(te,Pe),ne.index-=te}else if(ne=h(q,0,ie,U),!ne)continue;var rn=ne.index,mn=ne[0],fn=ie.slice(0,rn),_n=ie.slice(rn+mn.length),An=te+ie.length;D&&An>D.reach&&(D.reach=An);var Ee=$.prev;fn&&(Ee=g(A,Ee,fn),te+=fn.length),f(A,Ee,de);var Nn=new d(L,C?r.tokenize(mn,C):mn,z,mn);if($=g(A,Ee,Nn),_n&&g(A,$,_n),de>1){var Oe={cause:L+","+R,reach:An};i(N,A,b,$.prev,te,Oe),D&&Oe.reach>D.reach&&(D.reach=Oe.reach)}}}}}}function m(){var N={value:null,prev:null,next:null},A={value:null,prev:N,next:null};N.next=A,this.head=N,this.tail=A,this.length=0}function g(N,A,b){var B=A.next,E={value:b,prev:A,next:B};return A.next=E,B.prev=E,N.length++,E}function f(N,A,b){for(var B=A.next,E=0;E<b&&B!==N.tail;E++)B=B.next;A.next=B,B.prev=A,N.length-=E}function y(N){for(var A=[],b=N.head.next;b!==N.tail;)A.push(b.value),b=b.next;return A}if(!t.document)return t.addEventListener&&(r.disableWorkerMessageHandler||t.addEventListener("message",function(N){var A=JSON.parse(N.data),b=A.language,B=A.code,E=A.immediateClose;t.postMessage(r.highlight(B,r.languages[b],b)),E&&t.close()},!1)),r;var _=r.util.currentScript();_&&(r.filename=_.src,_.hasAttribute("data-manual")&&(r.manual=!0));function I(){r.manual||r.highlightAll()}if(!r.manual){var S=document.readyState;S==="loading"||S==="interactive"&&_&&_.defer?document.addEventListener("DOMContentLoaded",I):window.requestAnimationFrame?window.requestAnimationFrame(I):window.setTimeout(I,16)}return r}(c);v.exports&&(v.exports=a),typeof s.g!="undefined"&&(s.g.Prism=a),a.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.languages.markup.doctype.inside["internal-subset"].inside=a.languages.markup,a.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.replace(/&amp;/,"&"))}),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(p,u){var l={};l["language-"+u]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[u]},l.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:l}};r["language-"+u]={pattern:/[\s\S]+/,inside:a.languages[u]};var d={};d[p]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return p}),"i"),lookbehind:!0,greedy:!0,inside:r},a.languages.insertBefore("markup","cdata",d)}}),Object.defineProperty(a.languages.markup.tag,"addAttribute",{value:function(t,p){a.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[p,"language-"+p],inside:a.languages[p]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.xml=a.languages.extend("markup",{}),a.languages.ssml=a.languages.xml,a.languages.atom=a.languages.xml,a.languages.rss=a.languages.xml,function(t){var p=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+p.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+p.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+p.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:p,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var u=t.languages.markup;u&&(u.tag.addInlined("style","css"),u.tag.addAttribute("style","css"))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:a.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),a.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),a.languages.markup&&(a.languages.markup.tag.addInlined("script","javascript"),a.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),a.languages.js=a.languages.javascript,function(){if(typeof a=="undefined"||typeof document=="undefined")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var t="Loading\u2026",p=function(_,I){return"\u2716 Error "+_+" while fetching file: "+I},u="\u2716 Error: File does not exist or is empty",l={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},r="data-src-status",d="loading",h="loaded",i="failed",m="pre[data-src]:not(["+r+'="'+h+'"]):not(['+r+'="'+d+'"])';function g(_,I,S){var N=new XMLHttpRequest;N.open("GET",_,!0),N.onreadystatechange=function(){N.readyState==4&&(N.status<400&&N.responseText?I(N.responseText):N.status>=400?S(p(N.status,N.statusText)):S(u))},N.send(null)}function f(_){var I=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(_||"");if(I){var S=Number(I[1]),N=I[2],A=I[3];return N?A?[S,Number(A)]:[S,void 0]:[S,S]}}a.hooks.add("before-highlightall",function(_){_.selector+=", "+m}),a.hooks.add("before-sanity-check",function(_){var I=_.element;if(I.matches(m)){_.code="",I.setAttribute(r,d);var S=I.appendChild(document.createElement("CODE"));S.textContent=t;var N=I.getAttribute("data-src"),A=_.language;if(A==="none"){var b=(/\.(\w+)$/.exec(N)||[,"none"])[1];A=l[b]||b}a.util.setLanguage(S,A),a.util.setLanguage(I,A);var B=a.plugins.autoloader;B&&B.loadLanguages(A),g(N,function(E){I.setAttribute(r,h);var D=f(I.getAttribute("data-range"));if(D){var L=E.split(/\r\n?|\n/g),w=D[0],R=D[1]==null?L.length:D[1];w<0&&(w+=L.length),w=Math.max(0,Math.min(w-1,L.length)),R<0&&(R+=L.length),R=Math.max(0,Math.min(R,L.length)),E=L.slice(w,R).join(`
`),I.hasAttribute("data-start")||I.setAttribute("data-start",String(w+1))}S.textContent=E,a.highlightElement(S)},function(E){I.setAttribute(r,i),S.textContent=E})}}),a.plugins.fileHighlight={highlight:function(I){for(var S=(I||document).querySelectorAll(m),N=0,A;A=S[N++];)a.highlightElement(A)}};var y=!1;a.fileHighlight=function(){y||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),y=!0),a.plugins.fileHighlight.highlight.apply(this,arguments)}}()},2147:(v,k,s)=>{const c=Symbol("SemVer ANY");class a{static get ANY(){return c}constructor(m,g){if(g=t(g),m instanceof a){if(m.loose===!!g.loose)return m;m=m.value}r("comparator",m,g),this.options=g,this.loose=!!g.loose,this.parse(m),this.semver===c?this.value="":this.value=this.operator+this.semver.version,r("comp",this)}parse(m){const g=this.options.loose?p[u.COMPARATORLOOSE]:p[u.COMPARATOR],f=m.match(g);if(!f)throw new TypeError(`Invalid comparator: ${m}`);this.operator=f[1]!==void 0?f[1]:"",this.operator==="="&&(this.operator=""),f[2]?this.semver=new d(f[2],this.options.loose):this.semver=c}toString(){return this.value}test(m){if(r("Comparator.test",m,this.options.loose),this.semver===c||m===c)return!0;if(typeof m=="string")try{m=new d(m,this.options)}catch(g){return!1}return l(m,this.operator,this.semver,this.options)}intersects(m,g){if(!(m instanceof a))throw new TypeError("a Comparator is required");if((!g||typeof g!="object")&&(g={loose:!!g,includePrerelease:!1}),this.operator==="")return this.value===""?!0:new h(m.value,g).test(this.value);if(m.operator==="")return m.value===""?!0:new h(this.value,g).test(m.semver);const f=(this.operator===">="||this.operator===">")&&(m.operator===">="||m.operator===">"),y=(this.operator==="<="||this.operator==="<")&&(m.operator==="<="||m.operator==="<"),_=this.semver.version===m.semver.version,I=(this.operator===">="||this.operator==="<=")&&(m.operator===">="||m.operator==="<="),S=l(this.semver,"<",m.semver,g)&&(this.operator===">="||this.operator===">")&&(m.operator==="<="||m.operator==="<"),N=l(this.semver,">",m.semver,g)&&(this.operator==="<="||this.operator==="<")&&(m.operator===">="||m.operator===">");return f||y||_&&I||S||N}}v.exports=a;const t=s(2050),{re:p,t:u}=s(6715),l=s(7611),r=s(5387),d=s(4513),h=s(684)},684:(v,k,s)=>{class c{constructor(U,F){if(F=p(F),U instanceof c)return U.loose===!!F.loose&&U.includePrerelease===!!F.includePrerelease?U:new c(U.raw,F);if(U instanceof u)return this.raw=U.value,this.set=[[U]],this.format(),this;if(this.options=F,this.loose=!!F.loose,this.includePrerelease=!!F.includePrerelease,this.raw=U,this.set=U.split("||").map(z=>this.parseRange(z.trim())).filter(z=>z.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${U}`);if(this.set.length>1){const z=this.set[0];if(this.set=this.set.filter(j=>!f(j[0])),this.set.length===0)this.set=[z];else if(this.set.length>1){for(const j of this.set)if(j.length===1&&y(j[0])){this.set=[j];break}}}this.format()}format(){return this.range=this.set.map(U=>U.join(" ").trim()).join("||").trim(),this.range}toString(){return this.range}parseRange(U){U=U.trim();const z=`parseRange:${Object.keys(this.options).join(",")}:${U}`,j=t.get(z);if(j)return j;const q=this.options.loose,$=q?d[h.HYPHENRANGELOOSE]:d[h.HYPHENRANGE];U=U.replace($,R(this.options.includePrerelease)),l("hyphen replace",U),U=U.replace(d[h.COMPARATORTRIM],i),l("comparator trim",U),U=U.replace(d[h.TILDETRIM],m),U=U.replace(d[h.CARETTRIM],g),U=U.split(/\s+/).join(" ");let te=U.split(" ").map(ce=>I(ce,this.options)).join(" ").split(/\s+/).map(ce=>w(ce,this.options));q&&(te=te.filter(ce=>(l("loose invalid filter",ce,this.options),!!ce.match(d[h.COMPARATORLOOSE])))),l("range list",te);const ie=new Map,de=te.map(ce=>new u(ce,this.options));for(const ce of de){if(f(ce))return[ce];ie.set(ce.value,ce)}ie.size>1&&ie.has("")&&ie.delete("");const ne=[...ie.values()];return t.set(z,ne),ne}intersects(U,F){if(!(U instanceof c))throw new TypeError("a Range is required");return this.set.some(z=>_(z,F)&&U.set.some(j=>_(j,F)&&z.every(q=>j.every($=>q.intersects($,F)))))}test(U){if(!U)return!1;if(typeof U=="string")try{U=new r(U,this.options)}catch(F){return!1}for(let F=0;F<this.set.length;F++)if(O(this.set[F],U,this.options))return!0;return!1}}v.exports=c;const a=s(8366),t=new a({max:1e3}),p=s(2050),u=s(2147),l=s(5387),r=s(4513),{re:d,t:h,comparatorTrimReplace:i,tildeTrimReplace:m,caretTrimReplace:g}=s(6715),f=C=>C.value==="<0.0.0-0",y=C=>C.value==="",_=(C,U)=>{let F=!0;const z=C.slice();let j=z.pop();for(;F&&z.length;)F=z.every(q=>j.intersects(q,U)),j=z.pop();return F},I=(C,U)=>(l("comp",C,U),C=b(C,U),l("caret",C),C=N(C,U),l("tildes",C),C=E(C,U),l("xrange",C),C=L(C,U),l("stars",C),C),S=C=>!C||C.toLowerCase()==="x"||C==="*",N=(C,U)=>C.trim().split(/\s+/).map(F=>A(F,U)).join(" "),A=(C,U)=>{const F=U.loose?d[h.TILDELOOSE]:d[h.TILDE];return C.replace(F,(z,j,q,$,te)=>{l("tilde",C,z,j,q,$,te);let ie;return S(j)?ie="":S(q)?ie=`>=${j}.0.0 <${+j+1}.0.0-0`:S($)?ie=`>=${j}.${q}.0 <${j}.${+q+1}.0-0`:te?(l("replaceTilde pr",te),ie=`>=${j}.${q}.${$}-${te} <${j}.${+q+1}.0-0`):ie=`>=${j}.${q}.${$} <${j}.${+q+1}.0-0`,l("tilde return",ie),ie})},b=(C,U)=>C.trim().split(/\s+/).map(F=>B(F,U)).join(" "),B=(C,U)=>{l("caret",C,U);const F=U.loose?d[h.CARETLOOSE]:d[h.CARET],z=U.includePrerelease?"-0":"";return C.replace(F,(j,q,$,te,ie)=>{l("caret",C,j,q,$,te,ie);let de;return S(q)?de="":S($)?de=`>=${q}.0.0${z} <${+q+1}.0.0-0`:S(te)?q==="0"?de=`>=${q}.${$}.0${z} <${q}.${+$+1}.0-0`:de=`>=${q}.${$}.0${z} <${+q+1}.0.0-0`:ie?(l("replaceCaret pr",ie),q==="0"?$==="0"?de=`>=${q}.${$}.${te}-${ie} <${q}.${$}.${+te+1}-0`:de=`>=${q}.${$}.${te}-${ie} <${q}.${+$+1}.0-0`:de=`>=${q}.${$}.${te}-${ie} <${+q+1}.0.0-0`):(l("no pr"),q==="0"?$==="0"?de=`>=${q}.${$}.${te}${z} <${q}.${$}.${+te+1}-0`:de=`>=${q}.${$}.${te}${z} <${q}.${+$+1}.0-0`:de=`>=${q}.${$}.${te} <${+q+1}.0.0-0`),l("caret return",de),de})},E=(C,U)=>(l("replaceXRanges",C,U),C.split(/\s+/).map(F=>D(F,U)).join(" ")),D=(C,U)=>{C=C.trim();const F=U.loose?d[h.XRANGELOOSE]:d[h.XRANGE];return C.replace(F,(z,j,q,$,te,ie)=>{l("xRange",C,z,j,q,$,te,ie);const de=S(q),ne=de||S($),ce=ne||S(te),Pe=ce;return j==="="&&Pe&&(j=""),ie=U.includePrerelease?"-0":"",de?j===">"||j==="<"?z="<0.0.0-0":z="*":j&&Pe?(ne&&($=0),te=0,j===">"?(j=">=",ne?(q=+q+1,$=0,te=0):($=+$+1,te=0)):j==="<="&&(j="<",ne?q=+q+1:$=+$+1),j==="<"&&(ie="-0"),z=`${j+q}.${$}.${te}${ie}`):ne?z=`>=${q}.0.0${ie} <${+q+1}.0.0-0`:ce&&(z=`>=${q}.${$}.0${ie} <${q}.${+$+1}.0-0`),l("xRange return",z),z})},L=(C,U)=>(l("replaceStars",C,U),C.trim().replace(d[h.STAR],"")),w=(C,U)=>(l("replaceGTE0",C,U),C.trim().replace(d[U.includePrerelease?h.GTE0PRE:h.GTE0],"")),R=C=>(U,F,z,j,q,$,te,ie,de,ne,ce,Pe,xe)=>(S(z)?F="":S(j)?F=`>=${z}.0.0${C?"-0":""}`:S(q)?F=`>=${z}.${j}.0${C?"-0":""}`:$?F=`>=${F}`:F=`>=${F}${C?"-0":""}`,S(de)?ie="":S(ne)?ie=`<${+de+1}.0.0-0`:S(ce)?ie=`<${de}.${+ne+1}.0-0`:Pe?ie=`<=${de}.${ne}.${ce}-${Pe}`:C?ie=`<${de}.${ne}.${+ce+1}-0`:ie=`<=${ie}`,`${F} ${ie}`.trim()),O=(C,U,F)=>{for(let z=0;z<C.length;z++)if(!C[z].test(U))return!1;if(U.prerelease.length&&!F.includePrerelease){for(let z=0;z<C.length;z++)if(l(C[z].semver),C[z].semver!==u.ANY&&C[z].semver.prerelease.length>0){const j=C[z].semver;if(j.major===U.major&&j.minor===U.minor&&j.patch===U.patch)return!0}return!1}return!0}},4513:(v,k,s)=>{const c=s(5387),{MAX_LENGTH:a,MAX_SAFE_INTEGER:t}=s(3272),{re:p,t:u}=s(6715),l=s(2050),{compareIdentifiers:r}=s(8848);class d{constructor(i,m){if(m=l(m),i instanceof d){if(i.loose===!!m.loose&&i.includePrerelease===!!m.includePrerelease)return i;i=i.version}else if(typeof i!="string")throw new TypeError(`Invalid Version: ${i}`);if(i.length>a)throw new TypeError(`version is longer than ${a} characters`);c("SemVer",i,m),this.options=m,this.loose=!!m.loose,this.includePrerelease=!!m.includePrerelease;const g=i.trim().match(m.loose?p[u.LOOSE]:p[u.FULL]);if(!g)throw new TypeError(`Invalid Version: ${i}`);if(this.raw=i,this.major=+g[1],this.minor=+g[2],this.patch=+g[3],this.major>t||this.major<0)throw new TypeError("Invalid major version");if(this.minor>t||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>t||this.patch<0)throw new TypeError("Invalid patch version");g[4]?this.prerelease=g[4].split(".").map(f=>{if(/^[0-9]+$/.test(f)){const y=+f;if(y>=0&&y<t)return y}return f}):this.prerelease=[],this.build=g[5]?g[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(i){if(c("SemVer.compare",this.version,this.options,i),!(i instanceof d)){if(typeof i=="string"&&i===this.version)return 0;i=new d(i,this.options)}return i.version===this.version?0:this.compareMain(i)||this.comparePre(i)}compareMain(i){return i instanceof d||(i=new d(i,this.options)),r(this.major,i.major)||r(this.minor,i.minor)||r(this.patch,i.patch)}comparePre(i){if(i instanceof d||(i=new d(i,this.options)),this.prerelease.length&&!i.prerelease.length)return-1;if(!this.prerelease.length&&i.prerelease.length)return 1;if(!this.prerelease.length&&!i.prerelease.length)return 0;let m=0;do{const g=this.prerelease[m],f=i.prerelease[m];if(c("prerelease compare",m,g,f),g===void 0&&f===void 0)return 0;if(f===void 0)return 1;if(g===void 0)return-1;if(g===f)continue;return r(g,f)}while(++m)}compareBuild(i){i instanceof d||(i=new d(i,this.options));let m=0;do{const g=this.build[m],f=i.build[m];if(c("prerelease compare",m,g,f),g===void 0&&f===void 0)return 0;if(f===void 0)return 1;if(g===void 0)return-1;if(g===f)continue;return r(g,f)}while(++m)}inc(i,m){switch(i){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",m);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",m);break;case"prepatch":this.prerelease.length=0,this.inc("patch",m),this.inc("pre",m);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",m),this.inc("pre",m);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":if(this.prerelease.length===0)this.prerelease=[0];else{let g=this.prerelease.length;for(;--g>=0;)typeof this.prerelease[g]=="number"&&(this.prerelease[g]++,g=-2);g===-1&&this.prerelease.push(0)}m&&(r(this.prerelease[0],m)===0?isNaN(this.prerelease[1])&&(this.prerelease=[m,0]):this.prerelease=[m,0]);break;default:throw new Error(`invalid increment argument: ${i}`)}return this.format(),this.raw=this.version,this}}v.exports=d},2923:(v,k,s)=>{const c=s(7387),a=(t,p)=>{const u=c(t.trim().replace(/^[=v]+/,""),p);return u?u.version:null};v.exports=a},7611:(v,k,s)=>{const c=s(5349),a=s(6509),t=s(8836),p=s(4689),u=s(1),l=s(3129),r=(d,h,i,m)=>{switch(h){case"===":return typeof d=="object"&&(d=d.version),typeof i=="object"&&(i=i.version),d===i;case"!==":return typeof d=="object"&&(d=d.version),typeof i=="object"&&(i=i.version),d!==i;case"":case"=":case"==":return c(d,i,m);case"!=":return a(d,i,m);case">":return t(d,i,m);case">=":return p(d,i,m);case"<":return u(d,i,m);case"<=":return l(d,i,m);default:throw new TypeError(`Invalid operator: ${h}`)}};v.exports=r},7924:(v,k,s)=>{const c=s(4513),a=s(7387),{re:t,t:p}=s(6715),u=(l,r)=>{if(l instanceof c)return l;if(typeof l=="number"&&(l=String(l)),typeof l!="string")return null;r=r||{};let d=null;if(!r.rtl)d=l.match(t[p.COERCE]);else{let h;for(;(h=t[p.COERCERTL].exec(l))&&(!d||d.index+d[0].length!==l.length);)(!d||h.index+h[0].length!==d.index+d[0].length)&&(d=h),t[p.COERCERTL].lastIndex=h.index+h[1].length+h[2].length;t[p.COERCERTL].lastIndex=-1}return d===null?null:a(`${d[2]}.${d[3]||"0"}.${d[4]||"0"}`,r)};v.exports=u},2589:(v,k,s)=>{const c=s(4513),a=(t,p,u)=>{const l=new c(t,u),r=new c(p,u);return l.compare(r)||l.compareBuild(r)};v.exports=a},9839:(v,k,s)=>{const c=s(4328),a=(t,p)=>c(t,p,!0);v.exports=a},4328:(v,k,s)=>{const c=s(4513),a=(t,p,u)=>new c(t,u).compare(new c(p,u));v.exports=a},4999:(v,k,s)=>{const c=s(7387),a=s(5349),t=(p,u)=>{if(a(p,u))return null;{const l=c(p),r=c(u),d=l.prerelease.length||r.prerelease.length,h=d?"pre":"",i=d?"prerelease":"";for(const m in l)if((m==="major"||m==="minor"||m==="patch")&&l[m]!==r[m])return h+m;return i}};v.exports=t},5349:(v,k,s)=>{const c=s(4328),a=(t,p,u)=>c(t,p,u)===0;v.exports=a},8836:(v,k,s)=>{const c=s(4328),a=(t,p,u)=>c(t,p,u)>0;v.exports=a},4689:(v,k,s)=>{const c=s(4328),a=(t,p,u)=>c(t,p,u)>=0;v.exports=a},6785:(v,k,s)=>{const c=s(4513),a=(t,p,u,l)=>{typeof u=="string"&&(l=u,u=void 0);try{return new c(t instanceof c?t.version:t,u).inc(p,l).version}catch(r){return null}};v.exports=a},1:(v,k,s)=>{const c=s(4328),a=(t,p,u)=>c(t,p,u)<0;v.exports=a},3129:(v,k,s)=>{const c=s(4328),a=(t,p,u)=>c(t,p,u)<=0;v.exports=a},198:(v,k,s)=>{const c=s(4513),a=(t,p)=>new c(t,p).major;v.exports=a},5846:(v,k,s)=>{const c=s(4513),a=(t,p)=>new c(t,p).minor;v.exports=a},6509:(v,k,s)=>{const c=s(4328),a=(t,p,u)=>c(t,p,u)!==0;v.exports=a},7387:(v,k,s)=>{const{MAX_LENGTH:c}=s(3272),{re:a,t}=s(6715),p=s(4513),u=s(2050),l=(r,d)=>{if(d=u(d),r instanceof p)return r;if(typeof r!="string"||r.length>c||!(d.loose?a[t.LOOSE]:a[t.FULL]).test(r))return null;try{return new p(r,d)}catch(i){return null}};v.exports=l},4055:(v,k,s)=>{const c=s(4513),a=(t,p)=>new c(t,p).patch;v.exports=a},1916:(v,k,s)=>{const c=s(7387),a=(t,p)=>{const u=c(t,p);return u&&u.prerelease.length?u.prerelease:null};v.exports=a},6210:(v,k,s)=>{const c=s(4328),a=(t,p,u)=>c(p,t,u);v.exports=a},5869:(v,k,s)=>{const c=s(2589),a=(t,p)=>t.sort((u,l)=>c(l,u,p));v.exports=a},1631:(v,k,s)=>{const c=s(684),a=(t,p,u)=>{try{p=new c(p,u)}catch(l){return!1}return p.test(t)};v.exports=a},1760:(v,k,s)=>{const c=s(2589),a=(t,p)=>t.sort((u,l)=>c(u,l,p));v.exports=a},9692:(v,k,s)=>{const c=s(7387),a=(t,p)=>{const u=c(t,p);return u?u.version:null};v.exports=a},6261:(v,k,s)=>{const c=s(6715);v.exports={re:c.re,src:c.src,tokens:c.t,SEMVER_SPEC_VERSION:s(3272).SEMVER_SPEC_VERSION,SemVer:s(4513),compareIdentifiers:s(8848).compareIdentifiers,rcompareIdentifiers:s(8848).rcompareIdentifiers,parse:s(7387),valid:s(9692),clean:s(2923),inc:s(6785),diff:s(4999),major:s(198),minor:s(5846),patch:s(4055),prerelease:s(1916),compare:s(4328),rcompare:s(6210),compareLoose:s(9839),compareBuild:s(2589),sort:s(1760),rsort:s(5869),gt:s(8836),lt:s(1),eq:s(5349),neq:s(6509),gte:s(4689),lte:s(3129),cmp:s(7611),coerce:s(7924),Comparator:s(2147),Range:s(684),satisfies:s(1631),toComparators:s(2378),maxSatisfying:s(4299),minSatisfying:s(6066),minVersion:s(6171),validRange:s(3398),outside:s(6911),gtr:s(3860),ltr:s(3270),intersects:s(480),simplifyRange:s(3329),subset:s(5698)}},3272:v=>{const k="2.0.0",c=Number.MAX_SAFE_INTEGER||9007199254740991,a=16;v.exports={SEMVER_SPEC_VERSION:k,MAX_LENGTH:256,MAX_SAFE_INTEGER:c,MAX_SAFE_COMPONENT_LENGTH:a}},5387:v=>{const k=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...s)=>console.error("SEMVER",...s):()=>{};v.exports=k},8848:v=>{const k=/^[0-9]+$/,s=(a,t)=>{const p=k.test(a),u=k.test(t);return p&&u&&(a=+a,t=+t),a===t?0:p&&!u?-1:u&&!p?1:a<t?-1:1},c=(a,t)=>s(t,a);v.exports={compareIdentifiers:s,rcompareIdentifiers:c}},2050:v=>{const k=["includePrerelease","loose","rtl"],s=c=>c?typeof c!="object"?{loose:!0}:k.filter(a=>c[a]).reduce((a,t)=>(a[t]=!0,a),{}):{};v.exports=s},6715:(v,k,s)=>{const{MAX_SAFE_COMPONENT_LENGTH:c}=s(3272),a=s(5387);k=v.exports={};const t=k.re=[],p=k.src=[],u=k.t={};let l=0;const r=(d,h,i)=>{const m=l++;a(d,m,h),u[d]=m,p[m]=h,t[m]=new RegExp(h,i?"g":void 0)};r("NUMERICIDENTIFIER","0|[1-9]\\d*"),r("NUMERICIDENTIFIERLOOSE","[0-9]+"),r("NONNUMERICIDENTIFIER","\\d*[a-zA-Z-][a-zA-Z0-9-]*"),r("MAINVERSION",`(${p[u.NUMERICIDENTIFIER]})\\.(${p[u.NUMERICIDENTIFIER]})\\.(${p[u.NUMERICIDENTIFIER]})`),r("MAINVERSIONLOOSE",`(${p[u.NUMERICIDENTIFIERLOOSE]})\\.(${p[u.NUMERICIDENTIFIERLOOSE]})\\.(${p[u.NUMERICIDENTIFIERLOOSE]})`),r("PRERELEASEIDENTIFIER",`(?:${p[u.NUMERICIDENTIFIER]}|${p[u.NONNUMERICIDENTIFIER]})`),r("PRERELEASEIDENTIFIERLOOSE",`(?:${p[u.NUMERICIDENTIFIERLOOSE]}|${p[u.NONNUMERICIDENTIFIER]})`),r("PRERELEASE",`(?:-(${p[u.PRERELEASEIDENTIFIER]}(?:\\.${p[u.PRERELEASEIDENTIFIER]})*))`),r("PRERELEASELOOSE",`(?:-?(${p[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${p[u.PRERELEASEIDENTIFIERLOOSE]})*))`),r("BUILDIDENTIFIER","[0-9A-Za-z-]+"),r("BUILD",`(?:\\+(${p[u.BUILDIDENTIFIER]}(?:\\.${p[u.BUILDIDENTIFIER]})*))`),r("FULLPLAIN",`v?${p[u.MAINVERSION]}${p[u.PRERELEASE]}?${p[u.BUILD]}?`),r("FULL",`^${p[u.FULLPLAIN]}$`),r("LOOSEPLAIN",`[v=\\s]*${p[u.MAINVERSIONLOOSE]}${p[u.PRERELEASELOOSE]}?${p[u.BUILD]}?`),r("LOOSE",`^${p[u.LOOSEPLAIN]}$`),r("GTLT","((?:<|>)?=?)"),r("XRANGEIDENTIFIERLOOSE",`${p[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),r("XRANGEIDENTIFIER",`${p[u.NUMERICIDENTIFIER]}|x|X|\\*`),r("XRANGEPLAIN",`[v=\\s]*(${p[u.XRANGEIDENTIFIER]})(?:\\.(${p[u.XRANGEIDENTIFIER]})(?:\\.(${p[u.XRANGEIDENTIFIER]})(?:${p[u.PRERELEASE]})?${p[u.BUILD]}?)?)?`),r("XRANGEPLAINLOOSE",`[v=\\s]*(${p[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${p[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${p[u.XRANGEIDENTIFIERLOOSE]})(?:${p[u.PRERELEASELOOSE]})?${p[u.BUILD]}?)?)?`),r("XRANGE",`^${p[u.GTLT]}\\s*${p[u.XRANGEPLAIN]}$`),r("XRANGELOOSE",`^${p[u.GTLT]}\\s*${p[u.XRANGEPLAINLOOSE]}$`),r("COERCE",`(^|[^\\d])(\\d{1,${c}})(?:\\.(\\d{1,${c}}))?(?:\\.(\\d{1,${c}}))?(?:$|[^\\d])`),r("COERCERTL",p[u.COERCE],!0),r("LONETILDE","(?:~>?)"),r("TILDETRIM",`(\\s*)${p[u.LONETILDE]}\\s+`,!0),k.tildeTrimReplace="$1~",r("TILDE",`^${p[u.LONETILDE]}${p[u.XRANGEPLAIN]}$`),r("TILDELOOSE",`^${p[u.LONETILDE]}${p[u.XRANGEPLAINLOOSE]}$`),r("LONECARET","(?:\\^)"),r("CARETTRIM",`(\\s*)${p[u.LONECARET]}\\s+`,!0),k.caretTrimReplace="$1^",r("CARET",`^${p[u.LONECARET]}${p[u.XRANGEPLAIN]}$`),r("CARETLOOSE",`^${p[u.LONECARET]}${p[u.XRANGEPLAINLOOSE]}$`),r("COMPARATORLOOSE",`^${p[u.GTLT]}\\s*(${p[u.LOOSEPLAIN]})$|^$`),r("COMPARATOR",`^${p[u.GTLT]}\\s*(${p[u.FULLPLAIN]})$|^$`),r("COMPARATORTRIM",`(\\s*)${p[u.GTLT]}\\s*(${p[u.LOOSEPLAIN]}|${p[u.XRANGEPLAIN]})`,!0),k.comparatorTrimReplace="$1$2$3",r("HYPHENRANGE",`^\\s*(${p[u.XRANGEPLAIN]})\\s+-\\s+(${p[u.XRANGEPLAIN]})\\s*$`),r("HYPHENRANGELOOSE",`^\\s*(${p[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${p[u.XRANGEPLAINLOOSE]})\\s*$`),r("STAR","(<|>)?=?\\s*\\*"),r("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),r("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")},3860:(v,k,s)=>{const c=s(6911),a=(t,p,u)=>c(t,p,">",u);v.exports=a},480:(v,k,s)=>{const c=s(684),a=(t,p,u)=>(t=new c(t,u),p=new c(p,u),t.intersects(p));v.exports=a},3270:(v,k,s)=>{const c=s(6911),a=(t,p,u)=>c(t,p,"<",u);v.exports=a},4299:(v,k,s)=>{const c=s(4513),a=s(684),t=(p,u,l)=>{let r=null,d=null,h=null;try{h=new a(u,l)}catch(i){return null}return p.forEach(i=>{h.test(i)&&(!r||d.compare(i)===-1)&&(r=i,d=new c(r,l))}),r};v.exports=t},6066:(v,k,s)=>{const c=s(4513),a=s(684),t=(p,u,l)=>{let r=null,d=null,h=null;try{h=new a(u,l)}catch(i){return null}return p.forEach(i=>{h.test(i)&&(!r||d.compare(i)===1)&&(r=i,d=new c(r,l))}),r};v.exports=t},6171:(v,k,s)=>{const c=s(4513),a=s(684),t=s(8836),p=(u,l)=>{u=new a(u,l);let r=new c("0.0.0");if(u.test(r)||(r=new c("0.0.0-0"),u.test(r)))return r;r=null;for(let d=0;d<u.set.length;++d){const h=u.set[d];let i=null;h.forEach(m=>{const g=new c(m.semver.version);switch(m.operator){case">":g.prerelease.length===0?g.patch++:g.prerelease.push(0),g.raw=g.format();case"":case">=":(!i||t(g,i))&&(i=g);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${m.operator}`)}}),i&&(!r||t(r,i))&&(r=i)}return r&&u.test(r)?r:null};v.exports=p},6911:(v,k,s)=>{const c=s(4513),a=s(2147),{ANY:t}=a,p=s(684),u=s(1631),l=s(8836),r=s(1),d=s(3129),h=s(4689),i=(m,g,f,y)=>{m=new c(m,y),g=new p(g,y);let _,I,S,N,A;switch(f){case">":_=l,I=d,S=r,N=">",A=">=";break;case"<":_=r,I=h,S=l,N="<",A="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(u(m,g,y))return!1;for(let b=0;b<g.set.length;++b){const B=g.set[b];let E=null,D=null;if(B.forEach(L=>{L.semver===t&&(L=new a(">=0.0.0")),E=E||L,D=D||L,_(L.semver,E.semver,y)?E=L:S(L.semver,D.semver,y)&&(D=L)}),E.operator===N||E.operator===A||(!D.operator||D.operator===N)&&I(m,D.semver))return!1;if(D.operator===A&&S(m,D.semver))return!1}return!0};v.exports=i},3329:(v,k,s)=>{const c=s(1631),a=s(4328);v.exports=(t,p,u)=>{const l=[];let r=null,d=null;const h=t.sort((f,y)=>a(f,y,u));for(const f of h)c(f,p,u)?(d=f,r||(r=f)):(d&&l.push([r,d]),d=null,r=null);r&&l.push([r,null]);const i=[];for(const[f,y]of l)f===y?i.push(f):!y&&f===h[0]?i.push("*"):y?f===h[0]?i.push(`<=${y}`):i.push(`${f} - ${y}`):i.push(`>=${f}`);const m=i.join(" || "),g=typeof p.raw=="string"?p.raw:String(p);return m.length<g.length?m:p}},5698:(v,k,s)=>{const c=s(684),a=s(2147),{ANY:t}=a,p=s(1631),u=s(4328),l=(i,m,g={})=>{if(i===m)return!0;i=new c(i,g),m=new c(m,g);let f=!1;e:for(const y of i.set){for(const _ of m.set){const I=r(y,_,g);if(f=f||I!==null,I)continue e}if(f)return!1}return!0},r=(i,m,g)=>{if(i===m)return!0;if(i.length===1&&i[0].semver===t){if(m.length===1&&m[0].semver===t)return!0;g.includePrerelease?i=[new a(">=0.0.0-0")]:i=[new a(">=0.0.0")]}if(m.length===1&&m[0].semver===t){if(g.includePrerelease)return!0;m=[new a(">=0.0.0")]}const f=new Set;let y,_;for(const D of i)D.operator===">"||D.operator===">="?y=d(y,D,g):D.operator==="<"||D.operator==="<="?_=h(_,D,g):f.add(D.semver);if(f.size>1)return null;let I;if(y&&_){if(I=u(y.semver,_.semver,g),I>0)return null;if(I===0&&(y.operator!==">="||_.operator!=="<="))return null}for(const D of f){if(y&&!p(D,String(y),g)||_&&!p(D,String(_),g))return null;for(const L of m)if(!p(D,String(L),g))return!1;return!0}let S,N,A,b,B=_&&!g.includePrerelease&&_.semver.prerelease.length?_.semver:!1,E=y&&!g.includePrerelease&&y.semver.prerelease.length?y.semver:!1;B&&B.prerelease.length===1&&_.operator==="<"&&B.prerelease[0]===0&&(B=!1);for(const D of m){if(b=b||D.operator===">"||D.operator===">=",A=A||D.operator==="<"||D.operator==="<=",y){if(E&&D.semver.prerelease&&D.semver.prerelease.length&&D.semver.major===E.major&&D.semver.minor===E.minor&&D.semver.patch===E.patch&&(E=!1),D.operator===">"||D.operator===">="){if(S=d(y,D,g),S===D&&S!==y)return!1}else if(y.operator===">="&&!p(y.semver,String(D),g))return!1}if(_){if(B&&D.semver.prerelease&&D.semver.prerelease.length&&D.semver.major===B.major&&D.semver.minor===B.minor&&D.semver.patch===B.patch&&(B=!1),D.operator==="<"||D.operator==="<="){if(N=h(_,D,g),N===D&&N!==_)return!1}else if(_.operator==="<="&&!p(_.semver,String(D),g))return!1}if(!D.operator&&(_||y)&&I!==0)return!1}return!(y&&A&&!_&&I!==0||_&&b&&!y&&I!==0||E||B)},d=(i,m,g)=>{if(!i)return m;const f=u(i.semver,m.semver,g);return f>0?i:f<0||m.operator===">"&&i.operator===">="?m:i},h=(i,m,g)=>{if(!i)return m;const f=u(i.semver,m.semver,g);return f<0?i:f>0||m.operator==="<"&&i.operator==="<="?m:i};v.exports=l},2378:(v,k,s)=>{const c=s(684),a=(t,p)=>new c(t,p).set.map(u=>u.map(l=>l.value).join(" ").trim().split(" "));v.exports=a},3398:(v,k,s)=>{const c=s(684),a=(t,p)=>{try{return new c(t,p).range||"*"}catch(u){return null}};v.exports=a},690:v=>{"use strict";v.exports=function(k){k.prototype[Symbol.iterator]=function*(){for(let s=this.head;s;s=s.next)yield s.value}}},9623:(v,k,s)=>{"use strict";v.exports=c,c.Node=u,c.create=c;function c(l){var r=this;if(r instanceof c||(r=new c),r.tail=null,r.head=null,r.length=0,l&&typeof l.forEach=="function")l.forEach(function(i){r.push(i)});else if(arguments.length>0)for(var d=0,h=arguments.length;d<h;d++)r.push(arguments[d]);return r}c.prototype.removeNode=function(l){if(l.list!==this)throw new Error("removing node which does not belong to this list");var r=l.next,d=l.prev;return r&&(r.prev=d),d&&(d.next=r),l===this.head&&(this.head=r),l===this.tail&&(this.tail=d),l.list.length--,l.next=null,l.prev=null,l.list=null,r},c.prototype.unshiftNode=function(l){if(l!==this.head){l.list&&l.list.removeNode(l);var r=this.head;l.list=this,l.next=r,r&&(r.prev=l),this.head=l,this.tail||(this.tail=l),this.length++}},c.prototype.pushNode=function(l){if(l!==this.tail){l.list&&l.list.removeNode(l);var r=this.tail;l.list=this,l.prev=r,r&&(r.next=l),this.tail=l,this.head||(this.head=l),this.length++}},c.prototype.push=function(){for(var l=0,r=arguments.length;l<r;l++)t(this,arguments[l]);return this.length},c.prototype.unshift=function(){for(var l=0,r=arguments.length;l<r;l++)p(this,arguments[l]);return this.length},c.prototype.pop=function(){if(!!this.tail){var l=this.tail.value;return this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,l}},c.prototype.shift=function(){if(!!this.head){var l=this.head.value;return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,l}},c.prototype.forEach=function(l,r){r=r||this;for(var d=this.head,h=0;d!==null;h++)l.call(r,d.value,h,this),d=d.next},c.prototype.forEachReverse=function(l,r){r=r||this;for(var d=this.tail,h=this.length-1;d!==null;h--)l.call(r,d.value,h,this),d=d.prev},c.prototype.get=function(l){for(var r=0,d=this.head;d!==null&&r<l;r++)d=d.next;if(r===l&&d!==null)return d.value},c.prototype.getReverse=function(l){for(var r=0,d=this.tail;d!==null&&r<l;r++)d=d.prev;if(r===l&&d!==null)return d.value},c.prototype.map=function(l,r){r=r||this;for(var d=new c,h=this.head;h!==null;)d.push(l.call(r,h.value,this)),h=h.next;return d},c.prototype.mapReverse=function(l,r){r=r||this;for(var d=new c,h=this.tail;h!==null;)d.push(l.call(r,h.value,this)),h=h.prev;return d},c.prototype.reduce=function(l,r){var d,h=this.head;if(arguments.length>1)d=r;else if(this.head)h=this.head.next,d=this.head.value;else throw new TypeError("Reduce of empty list with no initial value");for(var i=0;h!==null;i++)d=l(d,h.value,i),h=h.next;return d},c.prototype.reduceReverse=function(l,r){var d,h=this.tail;if(arguments.length>1)d=r;else if(this.tail)h=this.tail.prev,d=this.tail.value;else throw new TypeError("Reduce of empty list with no initial value");for(var i=this.length-1;h!==null;i--)d=l(d,h.value,i),h=h.prev;return d},c.prototype.toArray=function(){for(var l=new Array(this.length),r=0,d=this.head;d!==null;r++)l[r]=d.value,d=d.next;return l},c.prototype.toArrayReverse=function(){for(var l=new Array(this.length),r=0,d=this.tail;d!==null;r++)l[r]=d.value,d=d.prev;return l},c.prototype.slice=function(l,r){r=r||this.length,r<0&&(r+=this.length),l=l||0,l<0&&(l+=this.length);var d=new c;if(r<l||r<0)return d;l<0&&(l=0),r>this.length&&(r=this.length);for(var h=0,i=this.head;i!==null&&h<l;h++)i=i.next;for(;i!==null&&h<r;h++,i=i.next)d.push(i.value);return d},c.prototype.sliceReverse=function(l,r){r=r||this.length,r<0&&(r+=this.length),l=l||0,l<0&&(l+=this.length);var d=new c;if(r<l||r<0)return d;l<0&&(l=0),r>this.length&&(r=this.length);for(var h=this.length,i=this.tail;i!==null&&h>r;h--)i=i.prev;for(;i!==null&&h>l;h--,i=i.prev)d.push(i.value);return d},c.prototype.splice=function(l,r,...d){l>this.length&&(l=this.length-1),l<0&&(l=this.length+l);for(var h=0,i=this.head;i!==null&&h<l;h++)i=i.next;for(var m=[],h=0;i&&h<r;h++)m.push(i.value),i=this.removeNode(i);i===null&&(i=this.tail),i!==this.head&&i!==this.tail&&(i=i.prev);for(var h=0;h<d.length;h++)i=a(this,i,d[h]);return m},c.prototype.reverse=function(){for(var l=this.head,r=this.tail,d=l;d!==null;d=d.prev){var h=d.prev;d.prev=d.next,d.next=h}return this.head=r,this.tail=l,this};function a(l,r,d){var h=r===l.head?new u(d,null,r,l):new u(d,r,r.next,l);return h.next===null&&(l.tail=h),h.prev===null&&(l.head=h),l.length++,h}function t(l,r){l.tail=new u(r,l.tail,null,l),l.head||(l.head=l.tail),l.length++}function p(l,r){l.head=new u(r,null,l.head,l),l.tail||(l.tail=l.head),l.length++}function u(l,r,d,h){if(!(this instanceof u))return new u(l,r,d,h);this.list=h,this.value=l,r?(r.next=this,this.prev=r):this.prev=null,d?(d.prev=this,this.next=d):this.next=null}try{s(690)(c)}catch(l){}}},Nr={};function an(v){var k=Nr[v];if(k!==void 0)return k.exports;var s=Nr[v]={id:v,loaded:!1,exports:{}};return Vo[v].call(s.exports,s,s.exports,an),s.loaded=!0,s.exports}an.n=v=>{var k=v&&v.__esModule?()=>v.default:()=>v;return an.d(k,{a:k}),k},an.d=(v,k)=>{for(var s in k)an.o(k,s)&&!an.o(v,s)&&Object.defineProperty(v,s,{enumerable:!0,get:k[s]})},an.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(v){if(typeof window=="object")return window}}(),an.o=(v,k)=>Object.prototype.hasOwnProperty.call(v,k),an.nmd=v=>(v.paths=[],v.children||(v.children=[]),v);var sh={};(()=>{var Un;"use strict";var v=an(5701),k=an.n(v),s=an(7366),c=an(6261),a=an.n(c),t=an(6211),p=an.n(t),u=an(8094),l=an(6679),r=an(3151),d=an(5007),h=an(5127),i=an(5142),m=an.n(i),g=an(2448),f=an(6257),y=an(3244),_=an(8620);class I{hydrate(pe,Ae){const Te=new URL(pe,typeof window=="undefined"?"https://dummy.base":window.location.origin),re={};Te.pathname.split("/").forEach((_e,me)=>{if(_e.charAt(0)===":"){const Ie=_e.slice(1);typeof Ae[Ie]!="undefined"&&(Te.pathname=Te.pathname.replace(_e,encodeURIComponent(Ae[Ie])),re[Ie]=Ae[Ie])}});for(const _e in Ae)(typeof re[_e]=="undefined"||Te.searchParams.has(_e))&&Te.searchParams.set(_e,Ae[_e]);return Te.toString()}}function S(){k()(".sample-request-send").off("click"),k()(".sample-request-send").on("click",function(Ce){Ce.preventDefault();const pe=k()(this).parents("article"),Ae=pe.data("group"),Te=pe.data("name"),re=pe.data("version");B(Ae,Te,re,k()(this).data("type"))}),k()(".sample-request-clear").off("click"),k()(".sample-request-clear").on("click",function(Ce){Ce.preventDefault();const pe=k()(this).parents("article"),Ae=pe.data("group"),Te=pe.data("name"),re=pe.data("version");E(Ae,Te,re)})}function N(Ce){return Ce.replace(/{(.+?)}/g,":$1")}function A(Ce,pe){const Ae=Ce.find(".sample-request-url").val(),Te=new I,re=N(Ae);return Te.hydrate(re,pe)}function b(Ce){const pe={};["header","query","body"].forEach(Te=>{const re={};try{Ce.find(k()(`[data-family="${Te}"]:visible`)).each((_e,me)=>{const Ie=me.dataset.name;let Ve=me.value;if(me.type==="checkbox")if(me.checked)Ve="on";else return!0;if(!Ve&&!me.dataset.optional&&me.type!=="checkbox")return k()(me).addClass("border-danger"),!0;re[Ie]=Ve})}catch(_e){return}pe[Te]=re});const Ae=Ce.find(k()('[data-family="body-json"]'));return Ae.is(":visible")?(pe.body=Ae.val(),pe.header["Content-Type"]="application/json"):pe.header["Content-Type"]="multipart/form-data",pe}function B(Ce,pe,Ae,Te){const re=k()(`article[data-group="${Ce}"][data-name="${pe}"][data-version="${Ae}"]`),_e=b(re),me={};if(me.url=A(re,_e.query),me.headers=_e.header,me.headers["Content-Type"]==="application/json")me.data=_e.body;else if(me.headers["Content-Type"]==="multipart/form-data"){const Ge=new FormData;for(const[Xe,Se]of Object.entries(_e.body))Ge.append(Xe,Se);me.data=Ge,me.processData=!1,(Te==="get"||Te==="delete")&&delete me.headers["Content-Type"]}me.type=Te,me.success=Ie,me.error=Ve,k().ajax(me),re.find(".sample-request-response").fadeTo(200,1),re.find(".sample-request-response-json").html("Loading...");function Ie(Ge,Xe,Se){let Ye;try{Ye=JSON.parse(Se.responseText),Ye=JSON.stringify(Ye,null,4)}catch(Qe){Ye=Se.responseText}re.find(".sample-request-response-json").text(Ye),m().highlightAll()}function Ve(Ge,Xe,Se){let Ye="Error "+Ge.status+": "+Se,Qe;try{Qe=JSON.parse(Ge.responseText),Qe=JSON.stringify(Qe,null,4)}catch(Ze){Qe=Ge.responseText}Qe&&(Ye+=`
`+Qe),re.find(".sample-request-response").is(":visible")&&re.find(".sample-request-response").fadeTo(1,.1),re.find(".sample-request-response").fadeTo(250,1),re.find(".sample-request-response-json").text(Ye),m().highlightAll()}}function E(Ce,pe,Ae){const Te=k()('article[data-group="'+Ce+'"][data-name="'+pe+'"][data-version="'+Ae+'"]');Te.find(".sample-request-response-json").html(""),Te.find(".sample-request-response").hide(),Te.find(".sample-request-input").each((_e,me)=>{me.value=me.placeholder!==me.dataset.name?me.placeholder:""});const re=Te.find(".sample-request-url");re.val(re.prop("defaultValue"))}const D={"Allowed values:":"Valors permesos:","Compare all with predecessor":"Comparar tot amb versi\xF3 anterior","compare changes to:":"comparar canvis amb:","compared to":"comparat amb","Default value:":"Valor per defecte:",Description:"Descripci\xF3",Field:"Camp",General:"General","Generated with":"Generat amb",Name:"Nom","No response values.":"Sense valors en la resposta.",optional:"opcional",Parameter:"Par\xE0metre","Permission:":"Permisos:",Response:"Resposta",Send:"Enviar","Send a Sample Request":"Enviar una petici\xF3 d'exemple","show up to version:":"mostrar versi\xF3:","Size range:":"Tamany de rang:",Type:"Tipus",url:"url"},L={"Allowed values:":"Povolen\xE9 hodnoty:","Compare all with predecessor":"Porovnat v\u0161e s p\u0159edchoz\xEDmi verzemi","compare changes to:":"porovnat zm\u011Bny s:","compared to":"porovnat s","Default value:":"V\xFDchoz\xED hodnota:",Description:"Popis",Field:"Pole",General:"Obecn\xE9","Generated with":"Vygenerov\xE1no pomoc\xED",Name:"N\xE1zev","No response values.":"Nebyly vr\xE1ceny \u017E\xE1dn\xE9 hodnoty.",optional:"voliteln\xE9",Parameter:"Parametr","Permission:":"Opr\xE1vn\u011Bn\xED:",Response:"Odpov\u011B\u010F",Send:"Odeslat","Send a Sample Request":"Odeslat uk\xE1zkov\xFD po\u017Eadavek","show up to version:":"zobrazit po verzi:","Size range:":"Rozsah velikosti:",Type:"Typ",url:"url"},w={"Allowed values:":"Erlaubte Werte:","Compare all with predecessor":"Vergleiche alle mit ihren Vorg\xE4ngern","compare changes to:":"vergleiche \xC4nderungen mit:","compared to":"verglichen mit","Default value:":"Standardwert:",Description:"Beschreibung",Field:"Feld",General:"Allgemein","Generated with":"Erstellt mit",Name:"Name","No response values.":"Keine R\xFCckgabewerte.",optional:"optional",Parameter:"Parameter","Permission:":"Berechtigung:",Response:"Antwort",Send:"Senden","Send a Sample Request":"Eine Beispielanfrage senden","show up to version:":"zeige bis zur Version:","Size range:":"Gr\xF6\xDFenbereich:",Type:"Typ",url:"url"},R={"Allowed values:":"Valores permitidos:","Compare all with predecessor":"Comparar todo con versi\xF3n anterior","compare changes to:":"comparar cambios con:","compared to":"comparado con","Default value:":"Valor por defecto:",Description:"Descripci\xF3n",Field:"Campo",General:"General","Generated with":"Generado con",Name:"Nombre","No response values.":"Sin valores en la respuesta.",optional:"opcional",Parameter:"Par\xE1metro","Permission:":"Permisos:",Response:"Respuesta",Send:"Enviar","Send a Sample Request":"Enviar una petici\xF3n de ejemplo","show up to version:":"mostrar a versi\xF3n:","Size range:":"Tama\xF1o de rango:",Type:"Tipo",url:"url"},O={"Allowed values:":"Valeurs autoris\xE9es :",Body:"Corps","Compare all with predecessor":"Tout comparer avec ...","compare changes to:":"comparer les changements \xE0 :","compared to":"comparer \xE0","Default value:":"Valeur par d\xE9faut :",Description:"Description",Field:"Champ",General:"G\xE9n\xE9ral","Generated with":"G\xE9n\xE9r\xE9 avec",Header:"En-t\xEAte",Headers:"En-t\xEAtes",Name:"Nom","No response values.":"Aucune valeur de r\xE9ponse.","No value":"Aucune valeur",optional:"optionnel",Parameter:"Param\xE8tre",Parameters:"Param\xE8tres","Permission:":"Permission :","Query Parameter(s)":"Param\xE8tre(s) de la requ\xEAte","Query Parameters":"Param\xE8tres de la requ\xEAte","Request Body":"Corps de la requ\xEAte",required:"requis",Response:"R\xE9ponse",Send:"Envoyer","Send a Sample Request":"Envoyer une requ\xEAte repr\xE9sentative","show up to version:":"Montrer \xE0 partir de la version :","Size range:":"Ordre de grandeur :",Type:"Type",url:"url"},C={"Allowed values:":"Valori permessi:","Compare all with predecessor":"Confronta tutto con versioni precedenti","compare changes to:":"confronta modifiche con:","compared to":"confrontato con","Default value:":"Valore predefinito:",Description:"Descrizione",Field:"Campo",General:"Generale","Generated with":"Creato con",Name:"Nome","No response values.":"Nessun valore di risposta.",optional:"opzionale",Parameter:"Parametro","Permission:":"Permessi:",Response:"Risposta",Send:"Invia","Send a Sample Request":"Invia una richiesta di esempio","show up to version:":"mostra alla versione:","Size range:":"Intervallo dimensione:",Type:"Tipo",url:"url"},U={"Allowed values:":"Toegestane waarden:","Compare all with predecessor":"Vergelijk alle met voorgaande versie","compare changes to:":"vergelijk veranderingen met:","compared to":"vergelijk met","Default value:":"Standaard waarde:",Description:"Omschrijving",Field:"Veld",General:"Algemeen","Generated with":"Gegenereerd met",Name:"Naam","No response values.":"Geen response waardes.",optional:"optioneel",Parameter:"Parameter","Permission:":"Permissie:",Response:"Antwoorden",Send:"Sturen","Send a Sample Request":"Stuur een sample aanvragen","show up to version:":"toon tot en met versie:","Size range:":"Maatbereik:",Type:"Type",url:"url"},F={"Allowed values:":"Dozwolone warto\u015Bci:","Compare all with predecessor":"Por\xF3wnaj z poprzednimi wersjami","compare changes to:":"por\xF3wnaj zmiany do:","compared to":"por\xF3wnaj do:","Default value:":"Warto\u015B\u0107 domy\u015Blna:",Description:"Opis",Field:"Pole",General:"Generalnie","Generated with":"Wygenerowano z",Name:"Nazwa","No response values.":"Brak odpowiedzi.",optional:"opcjonalny",Parameter:"Parametr","Permission:":"Uprawnienia:",Response:"Odpowied\u017A",Send:"Wy\u015Blij","Send a Sample Request":"Wy\u015Blij przyk\u0142adowe \u017C\u0105danie","show up to version:":"poka\u017C do wersji:","Size range:":"Zakres rozmiaru:",Type:"Typ",url:"url"},z={"Allowed values:":"Valores permitidos:","Compare all with predecessor":"Compare todos com antecessores","compare changes to:":"comparar altera\xE7\xF5es com:","compared to":"comparado com","Default value:":"Valor padr\xE3o:",Description:"Descri\xE7\xE3o",Field:"Campo",General:"Geral","Generated with":"Gerado com",Name:"Nome","No response values.":"Sem valores de resposta.",optional:"opcional",Parameter:"Par\xE2metro","Permission:":"Permiss\xE3o:",Response:"Resposta",Send:"Enviar","Send a Sample Request":"Enviar um Exemplo de Pedido","show up to version:":"aparecer para a vers\xE3o:","Size range:":"Faixa de tamanho:",Type:"Tipo",url:"url"},j={"Allowed values:":"Valori permise:","Compare all with predecessor":"Compar\u0103 toate cu versiunea precedent\u0103","compare changes to:":"compar\u0103 cu versiunea:","compared to":"comparat cu","Default value:":"Valoare implicit\u0103:",Description:"Descriere",Field:"C\xE2mp",General:"General","Generated with":"Generat cu",Name:"Nume","No response values.":"Nici o valoare returnat\u0103.",optional:"op\u021Bional",Parameter:"Parametru","Permission:":"Permisiune:",Response:"R\u0103spuns",Send:"Trimite","Send a Sample Request":"Trimite o cerere de prob\u0103","show up to version:":"arat\u0103 p\xE2n\u0103 la versiunea:","Size range:":"Interval permis:",Type:"Tip",url:"url"},q={"Allowed values:":"\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F:","Compare all with predecessor":"\u0421\u0440\u0430\u0432\u043D\u0438\u0442\u044C \u0441 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0435\u0439","compare changes to:":"\u0441\u0440\u0430\u0432\u043D\u0438\u0442\u044C \u0441:","compared to":"\u0432 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0438 \u0441","Default value:":"\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E:",Description:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",Field:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",General:"\u041E\u0431\u0449\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F","Generated with":"\u0421\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E",Name:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435","No response values.":"\u041D\u0435\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0434\u043B\u044F \u043E\u0442\u0432\u0435\u0442\u0430.",optional:"\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439",Parameter:"\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440","Permission:":"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u043E:",Response:"\u041E\u0442\u0432\u0435\u0442",Send:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C","Send a Sample Request":"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0442\u0435\u0441\u0442\u043E\u0432\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441","show up to version:":"\u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0435\u0440\u0441\u0438\u044E:","Size range:":"\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F:",Type:"\u0422\u0438\u043F",url:"URL"},$={"Allowed values:":"\u0130zin verilen de\u011Ferler:","Compare all with predecessor":"T\xFCm\xFCn\xFC \xF6ncekiler ile kar\u015F\u0131la\u015Ft\u0131r","compare changes to:":"de\u011Fi\u015Fiklikleri kar\u015F\u0131la\u015Ft\u0131r:","compared to":"kar\u015F\u0131la\u015Ft\u0131r","Default value:":"Varsay\u0131lan de\u011Fer:",Description:"A\xE7\u0131klama",Field:"Alan",General:"Genel","Generated with":"Olu\u015Fturan",Name:"\u0130sim","No response values.":"D\xF6n\xFC\u015F verisi yok.",optional:"opsiyonel",Parameter:"Parametre","Permission:":"\u0130zin:",Response:"D\xF6n\xFC\u015F",Send:"G\xF6nder","Send a Sample Request":"\xD6rnek istek g\xF6nder","show up to version:":"bu versiyona kadar g\xF6ster:","Size range:":"Boyut aral\u0131\u011F\u0131:",Type:"Tip",url:"url"},te={"Allowed values:":"Gi\xE1 tr\u1ECB ch\u1EA5p nh\u1EADn:","Compare all with predecessor":"So s\xE1nh v\u1EDBi t\u1EA5t c\u1EA3 phi\xEAn b\u1EA3n tr\u01B0\u1EDBc","compare changes to:":"so s\xE1nh s\u1EF1 thay \u0111\u1ED5i v\u1EDBi:","compared to":"so s\xE1nh v\u1EDBi","Default value:":"Gi\xE1 tr\u1ECB m\u1EB7c \u0111\u1ECBnh:",Description:"Ch\xFA th\xEDch",Field:"Tr\u01B0\u1EDDng d\u1EEF li\u1EC7u",General:"T\u1ED5ng quan","Generated with":"\u0110\u01B0\u1EE3c t\u1EA1o b\u1EDFi",Name:"T\xEAn","No response values.":"Kh\xF4ng c\xF3 k\u1EBFt qu\u1EA3 tr\u1EA3 v\u1EC1.",optional:"T\xF9y ch\u1ECDn",Parameter:"Tham s\u1ED1","Permission:":"Quy\u1EC1n h\u1EA1n:",Response:"K\u1EBFt qu\u1EA3",Send:"G\u1EEDi","Send a Sample Request":"G\u1EEDi m\u1ED9t y\xEAu c\u1EA7u m\u1EABu","show up to version:":"hi\u1EC3n th\u1ECB phi\xEAn b\u1EA3n:","Size range:":"K\xEDch c\u1EE1:",Type:"Ki\u1EC3u",url:"li\xEAn k\u1EBFt"},ie={"Allowed values:":"\u5141\u8BB8\u503C:",Body:"\u8BF7\u6C42\u4F53","Compare all with predecessor":"\u4E0E\u6240\u6709\u4E4B\u524D\u7684\u7248\u672C\u6BD4\u8F83","compare changes to:":"\u5C06\u5F53\u524D\u7248\u672C\u4E0E\u6307\u5B9A\u7248\u672C\u6BD4\u8F83:","compared to":"\u76F8\u6BD4\u4E8E","Default value:":"\u9ED8\u8BA4\u503C:",Description:"\u63CF\u8FF0",Field:"\u5B57\u6BB5",General:"\u6982\u8981","Generated with":"\u6784\u5EFA\u4E8E",Name:"\u540D\u79F0","No response values.":"\u65E0\u8FD4\u56DE\u503C.",optional:"\u53EF\u9009",Parameter:"\u53C2\u6570",Parameters:"\u53C2\u6570",Headers:"\u8BF7\u6C42\u5934","Permission:":"\u6743\u9650:",Response:"\u8FD4\u56DE",required:"\u5FC5\u9700\u7684",Send:"\u53D1\u9001","Send a Sample Request":"\u53D1\u9001\u793A\u4F8B\u8BF7\u6C42","show up to version:":"\u663E\u793A\u6307\u5B9A\u7248\u672C:","Size range:":"\u53D6\u503C\u8303\u56F4:",Type:"\u7C7B\u578B",url:"\u5730\u5740"},de={ca:D,cn:ie,cs:L,de:w,es:R,en:{},fr:O,it:C,nl:U,pl:F,pt:z,pt_br:z,ro:j,ru:q,tr:$,vi:te,zh:ie,zh_cn:ie},ne=((Un=window.navigator.language)!=null?Un:"en-GB").toLowerCase().substr(0,2);let ce=de[ne]?de[ne]:de.en;function Pe(Ce){const pe=ce[Ce];return pe===void 0?Ce:pe}function xe(Ce){if(!Object.prototype.hasOwnProperty.call(de,Ce))throw new Error(`Invalid value for language setting! Available values are ${Object.keys(de).join(",")}`);ce=de[Ce]}const{defaultsDeep:rn}=s,mn=(Ce,pe)=>{const Ae=(Te,re,_e,me)=>({[re]:_e+1<me.length?Te:pe});return Ce.reduceRight(Ae,{})},fn=Ce=>{let pe={};return Ce.forEach(Ae=>{const Te=mn(Ae[0].split("."),Ae[1]);pe=rn(pe,Te)}),_n(pe)};function _n(Ce){return JSON.stringify(Ce,null,4)}function An(Ce){const pe=[];return Ce.forEach(Ae=>{let Te;switch(Ae.type.toLowerCase()){case"string":Te=Ae.defaultValue||"";break;case"boolean":Te=Boolean(Ae.defaultValue)||!1;break;case"number":Te=parseInt(Ae.defaultValue||0,10);break;case"date":Te=Ae.defaultValue||new Date().toLocaleDateString(window.navigator.language);break}pe.push([Ae.field,Te])}),fn(pe)}var Ee=an(9648);class Nn extends Ee{constructor(pe){super(),this.testMode=pe}diffMain(pe,Ae,Te,re){return super.diff_main(this._stripHtml(pe),this._stripHtml(Ae),Te,re)}diffPrettyHtml(pe){const Ae=[],Te=/&/g,re=/</g,_e=/>/g,me=/\n/g;for(let Ie=0;Ie<pe.length;Ie++){const Ve=pe[Ie][0],Xe=pe[Ie][1].replace(Te,"&amp;").replace(re,"&lt;").replace(_e,"&gt;").replace(me,"&para;<br>");switch(Ve){case Ee.DIFF_INSERT:Ae[Ie]="<ins>"+Xe+"</ins>";break;case Ee.DIFF_DELETE:Ae[Ie]="<del>"+Xe+"</del>";break;case Ee.DIFF_EQUAL:Ae[Ie]="<span>"+Xe+"</span>";break}}return Ae.join("")}diffCleanupSemantic(pe){return this.diff_cleanupSemantic(pe)}_stripHtml(pe){if(this.testMode)return pe;const Ae=document.createElement("div");return Ae.innerHTML=pe,Ae.textContent||Ae.innerText||""}}function Oe(){p().registerHelper("markdown",function(re){return re&&(re=re.replace(/((\[(.*?)\])?\(#)((.+?):(.+?))(\))/mg,function(_e,me,Ie,Ve,Ge,Xe,Se){const Ye=Ve||Xe+"/"+Se;return'<a href="#api-'+Xe+"-"+Se+'">'+Ye+"</a>"}),re)}),p().registerHelper("setInputType",function(re){switch(re){case"File":case"Email":case"Color":case"Number":case"Date":return re[0].toLowerCase()+re.substring(1);case"Boolean":return"checkbox";default:return"text"}});let Ce;p().registerHelper("startTimer",function(re){return Ce=new Date,""}),p().registerHelper("stopTimer",function(re){return console.log(new Date-Ce),""}),p().registerHelper("__",function(re){return Pe(re)}),p().registerHelper("cl",function(re){return console.log(re),""}),p().registerHelper("underscoreToSpace",function(re){return re.replace(/(_+)/g," ")}),p().registerHelper("removeDblQuotes",function(re){return re.replace(/"/g,"")}),p().registerHelper("assign",function(re){if(arguments.length>0){const _e=typeof arguments[1];let me=null;(_e==="string"||_e==="number"||_e==="boolean")&&(me=arguments[1]),p().registerHelper(re,function(){return me})}return""}),p().registerHelper("nl2br",function(re){return Ae(re)}),p().registerHelper("ifCond",function(re,_e,me,Ie){switch(_e){case"==":return re==me?Ie.fn(this):Ie.inverse(this);case"===":return re===me?Ie.fn(this):Ie.inverse(this);case"!=":return re!=me?Ie.fn(this):Ie.inverse(this);case"!==":return re!==me?Ie.fn(this):Ie.inverse(this);case"<":return re<me?Ie.fn(this):Ie.inverse(this);case"<=":return re<=me?Ie.fn(this):Ie.inverse(this);case">":return re>me?Ie.fn(this):Ie.inverse(this);case">=":return re>=me?Ie.fn(this):Ie.inverse(this);case"&&":return re&&me?Ie.fn(this):Ie.inverse(this);case"||":return re||me?Ie.fn(this):Ie.inverse(this);default:return Ie.inverse(this)}});const pe={};p().registerHelper("subTemplate",function(re,_e){pe[re]||(pe[re]=p().compile(document.getElementById("template-"+re).innerHTML));const me=pe[re],Ie=k().extend({},this,_e.hash);return new(p()).SafeString(me(Ie))}),p().registerHelper("toLowerCase",function(re){return re&&typeof re=="string"?re.toLowerCase():""}),p().registerHelper("splitFill",function(re,_e,me){const Ie=re.split(_e);return new Array(Ie.length).join(me)+Ie[Ie.length-1]});function Ae(re){return(""+re).replace(/(?:^|<\/pre>)[^]*?(?:<pre>|$)/g,_e=>_e.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,"$1<br>$2"))}p().registerHelper("each_compare_list_field",function(re,_e,me){const Ie=me.hash.field,Ve=[];re&&re.forEach(function(Xe){const Se=Xe;Se.key=Xe[Ie],Ve.push(Se)});const Ge=[];return _e&&_e.forEach(function(Xe){const Se=Xe;Se.key=Xe[Ie],Ge.push(Se)}),Te("key",Ve,Ge,me)}),p().registerHelper("each_compare_keys",function(re,_e,me){const Ie=[];re&&Object.keys(re).forEach(function(Xe){const Se={};Se.value=re[Xe],Se.key=Xe,Ie.push(Se)});const Ve=[];return _e&&Object.keys(_e).forEach(function(Xe){const Se={};Se.value=_e[Xe],Se.key=Xe,Ve.push(Se)}),Te("key",Ie,Ve,me)}),p().registerHelper("body2json",function(re,_e){return An(re)}),p().registerHelper("each_compare_field",function(re,_e,me){return Te("field",re,_e,me)}),p().registerHelper("each_compare_title",function(re,_e,me){return Te("title",re,_e,me)}),p().registerHelper("reformat",function(re,_e){if(_e==="json")try{return JSON.stringify(JSON.parse(re.trim()),null,"    ")}catch(me){}return re}),p().registerHelper("showDiff",function(re,_e,me){let Ie="";if(re===_e)Ie=re;else{if(!re)return _e;if(!_e)return re;const Ve=new Nn,Ge=Ve.diffMain(_e,re);Ve.diffCleanupSemantic(Ge),Ie=Ve.diffPrettyHtml(Ge),Ie=Ie.replace(/&para;/gm,"")}return me==="nl2br"&&(Ie=Ae(Ie)),Ie});function Te(re,_e,me,Ie){const Ve=[];let Ge=0;_e&&_e.forEach(function(Ye){let Qe=!1;if(me&&me.forEach(function(Ze){if(Ye[re]===Ze[re]){const Wn={typeSame:!0,source:Ye,compare:Ze,index:Ge};Ve.push(Wn),Qe=!0,Ge++}}),!Qe){const Ze={typeIns:!0,source:Ye,index:Ge};Ve.push(Ze),Ge++}}),me&&me.forEach(function(Ye){let Qe=!1;if(_e&&_e.forEach(function(Ze){Ze[re]===Ye[re]&&(Qe=!0)}),!Qe){const Ze={typeDel:!0,compare:Ye,index:Ge};Ve.push(Ze),Ge++}});let Xe="";const Se=Ve.length;for(const Ye in Ve)parseInt(Ye,10)===Se-1&&(Ve[Ye]._last=!0),Xe=Xe+Ie.fn(Ve[Ye]);return Xe}}document.addEventListener("DOMContentLoaded",()=>{We(),S(),m().highlightAll()});function We(){var V;let Ce=[{type:"get",url:"/inqueryCertificate/{id_permohonan_izin}",title:"Inquiry Certificate",version:"5.0.0",description:"<p>Inquery Certificate di Sistem OSS</p>",name:"inqueryCertificate",group:"Certificate",examples:[{title:"Curl Request Example:",content:`curl --location --request GET 'https://server.digitaltelkom.dev/oss-sandbox/inqueryCertificate/I-202112171709158243106' \\
--header 'user_key: sJS23n1usBDj23192312312i3nsSo2sn' \\
--header 'Cookie: 8dd21093c6d03524cf9bc1ea99ad0576=9fe0048f4a04f91724dbe52f7c2cb5b7; 37dda41a6b8fc67de27a64fec9698b47=2354519a64edc01027a66707592dc003'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"user_key",description:"<p>Users unique access-key.</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "user_key": "846ee507525c6b00d18733e066bd5686"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"object",optional:!1,field:"responInqueryCertificate",description:"<p>responInqueryCertificate</p>"},{group:"200",type:"string",optional:!1,field:"responInqueryCertificate.kode",description:"<p>kode</p>"},{group:"200",type:"string",optional:!1,field:"responInqueryCertificate.keterangan",description:"<p>keterangan</p>"},{group:"200",type:"string",optional:!1,field:"responInqueryCertificate.dataCertificate",description:"<p>dataCertificate</p>"},{group:"200",type:"string",optional:!1,field:"responInqueryCertificate.dataCertificate.id_sertifikat",description:"<p>id_sertifikat</p>"},{group:"200",type:"string",optional:!1,field:"responInqueryCertificate.dataCertificate.id_permohonan_izin",description:"<p>id_permohonan_izin</p>"},{group:"200",type:"string",optional:!1,field:"responInqueryCertificate.dataCertificate.nomor_sertifikat",description:"<p>nomor_sertifikat</p>"},{group:"200",type:"string",optional:!1,field:"responInqueryCertificate.dataCertificate.tanggal_terbit",description:"<p>tanggal_terbit</p>"},{group:"200",type:"string",optional:!1,field:"responInqueryCertificate.dataCertificate.masa_berlaku",description:"<p>masa_berlaku</p>"},{group:"200",type:"string",optional:!1,field:"responInqueryCertificate.dataCertificate.jenis_sertifikat",description:"<p>jenis_sertifikat</p>"},{group:"200",type:"string",optional:!1,field:"responInqueryCertificate.dataCertificate.url_sertifikat",description:"<p>url_sertifikat</p>"},{group:"200",type:"string",optional:!1,field:"responInqueryCertificate.dataCertificate.keterangan",description:"<p>keterangan</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
{
    "responInqueryCertificate": {
        "kode": 200,
        "keterangan": "Data sertifikat berhasil ditemukan",
        "dataCertificate": {
            "id_sertifikat": "SHI-202209042313439514283",
            "id_permohonan_izin": "I-202112171709158243106",
            "nomor_sertifikat": "1021238123713282",
            "tanggal_terbit": "2022-09-02T17:00:00.000Z",
            "masa_berlaku": "2 Tahun",
            "jenis_sertifikat": "\u062D\u064E\u0644\u0627\u064E\u0644\u064B (Hallal) BPJPH",
            "url_sertifikat": "https://google.com",
            "keterangan": null
        }
    }
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",description:"<p>Data tidak ditemukan.</p>"}],404:[{group:"404",optional:!1,field:"404",description:"<p>Method Tidak Ditemukan.</p>"}]},examples:[{title:"Error-Response:",content:`{
    "responInqueryCertificate": {
        "kode": "",
        "keterangan": "",
        "dataCertificate": {}
    }
}`,type:"json"}]},filename:"endpoint.js",groupTitle:"Certificate",sampleRequest:[{url:"https://server.digitaltelkom.dev/oss-sandbox/inqueryCertificate/{id_permohonan_izin}"}]},{type:"post",url:"/receiveCertificate",title:"Receive Certificate",version:"5.0.0",description:"<p>Receive Certificate di Sistem OSS</p>",name:"receiveCertificate",group:"Certificate",examples:[{title:"Curl Request Example:",content:`curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/receiveCertificate' \\
--header 'user_key: sJS23n1usBDj23192312312i3nsSo2sn' \\
--header 'Content-Type: application/json' \\
--header 'Cookie: 8dd21093c6d03524cf9bc1ea99ad0576=9fe0048f4a04f91724dbe52f7c2cb5b7; 37dda41a6b8fc67de27a64fec9698b47=2354519a64edc01027a66707592dc003' \\
--data-raw '{
    "DATACERTIFICATE":{
        "id_permohonan_izin":"I-202112171709158243106",
        "nomor_sertifikat":"1021238123713282",
        "tanggal_terbit":"2022-09-03",
        "masa_berlaku":"2",
        "satuan_waktu":"06",
        "jenis_sertifikat":"02",
        "url_sertifikat":"https://google.com"
    }
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"user_key",description:"<p>Users unique access-key.</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "user_key": "846ee507525c6b00d18733e066bd5686"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"receiveCertificate",description:"<p>receiveCertificate</p>"},{group:"Parameter",type:"string",optional:!1,field:"receiveCertificate.id_permohonan_izin",description:"<p>id_permohonan_izin</p>"},{group:"Parameter",type:"string",optional:!1,field:"receiveCertificate.nomor_sertifikat",description:"<p>nomor_sertifikat</p>"},{group:"Parameter",type:"string",optional:!1,field:"receiveCertificate.url_sertifikat",description:"<p>url_sertifikat</p>"},{group:"Parameter",type:"string",optional:!1,field:"receiveCertificate.tanggal_terbit",description:"<p>tanggal_terbit</p>"},{group:"Parameter",type:"string",optional:!1,field:"receiveCertificate.masa_berlaku",description:"<p>masa_berlaku</p>"},{group:"Parameter",type:"string",optional:!1,field:"receiveCertificate.jenis_sertifikat",description:"<p>jenis_sertifikat</p>"},{group:"Parameter",type:"string",optional:!1,field:"receiveCertificate.satuan_waktu",description:"<p>satuan_waktu</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
{
    "receiveCertificate": {
        "id_permohonan_izin": "I-20222131239123321",
        "nomor_sertifikat":"1220320222131239123321",
        "url_sertifikat":"https://bpjph.pu.id/sertifikat/1220320222131239123321",
        "tanggal_terbit":"2022-12-14",
        "masa_berlaku":"2",
        "jenis_sertifikat":"02",
        "satuan_waktu":"06"
    }
 }`,type:"json"}]},success:{fields:{200:[{group:"200",type:"object",optional:!1,field:"responReceiveCertificate",description:"<p>responReceiveCertificate</p>"},{group:"200",type:"string",optional:!1,field:"responReceiveCertificate.kode",description:"<p>kode</p>"},{group:"200",type:"string",optional:!1,field:"responReceiveCertificate.keterangan",description:"<p>keterangan</p>"},{group:"200",type:"string",optional:!1,field:"responReceiveCertificate.dataCertificate",description:"<p>dataCertificate</p>"},{group:"200",type:"string",optional:!1,field:"responReceiveCertificate.dataCertificate.id_permohonan_izin",description:"<p>id_permohonan_izin</p>"},{group:"200",type:"string",optional:!1,field:"responReceiveCertificate.dataCertificate.nomor_sertifikat",description:"<p>nomor_sertifikat</p>"},{group:"200",type:"string",optional:!1,field:"responReceiveCertificate.dataCertificate.tanggal_terbit",description:"<p>tanggal_terbit</p>"},{group:"200",type:"string",optional:!1,field:"responReceiveCertificate.dataCertificate.masa_berlaku",description:"<p>masa_berlaku</p>"},{group:"200",type:"string",optional:!1,field:"responReceiveCertificate.dataCertificate.satuan_waktu",description:"<p>satuan_waktu</p>"},{group:"200",type:"string",optional:!1,field:"responReceiveCertificate.dataCertificate.jenis_sertifikat",description:"<p>jenis_sertifikat</p>"},{group:"200",type:"string",optional:!1,field:"responReceiveCertificate.dataCertificate.url_sertifikat",description:"<p>url_sertifikat</p>"},{group:"200",type:"string",optional:!1,field:"responReceiveCertificate.dataCertificate.id_sertifikat",description:"<p>id_sertifikat</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
{
    "responReceiveCertificate": {
        "kode": 200,
        "keterangan": "Data sertifikat berhasil ditambahkan",
        "dataCertificate": {
            "id_permohonan_izin": "I-202112171709158243106",
            "nomor_sertifikat": "1021238123713282",
            "tanggal_terbit": "2022-09-03",
            "masa_berlaku": "2",
            "satuan_waktu": "06",
            "jenis_sertifikat": "02",
            "url_sertifikat": "https://google.com",
            "id_sertifikat": "SHI-202209042313439514283"
        }
    }
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",description:"<p>Parameter tidak ditemukan.</p>"}],404:[{group:"404",optional:!1,field:"404",description:"<p>Method Tidak Ditemukan.</p>"}],500:[{group:"500",optional:!1,field:"500",description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}]},examples:[{title:"Error-Response:",content:`{
    "responReceiveCertificate": {
        "kode": "",
        "keterangan": "",
        "dataCertificate": {}
    }
}`,type:"json"}]},filename:"endpoint.js",groupTitle:"Certificate",sampleRequest:[{url:"https://server.digitaltelkom.dev/oss-sandbox/receiveCertificate"}]},{type:"post",url:"/inqueryFileDS",title:"Inquery File DS",version:"5.0.0",description:"<p>Service digunakan oleh sistem K/L/D untuk mendapatkan informasi url file hasil merge dokumen Izin, Sertifikat Standar, atau PB-UMKU berdasarkan id izin</p>",name:"inqueryFileDS",group:"File_DS",examples:[{title:"Curl Request Example:",content:`curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/inqueryFileDS' \\
--header 'user_key: {{user_key}}' \\
--header 'Content-Type: application/json' \\
--data-raw '{
 "INQUERYFILEDS": {
 "id_permohonan_izin": "I-202106062348085310001"
 }
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"user_key",description:"<p>Users unique access-key.</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "user_key": "846ee507525c6b00d18733e066bd5686"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"INQUERYFILEDS",description:"<p>INQUERYFILEDS</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"INQUERYFILEDS.id_permohonan_izin",description:"<p>Merupakan ID pengajuan, yaitu permohonan perizinan yang digenerate oleh sistem OSS</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
{
	 "INQUERYFILEDS": {
		 "id_permohonan_izin": ""
	 }
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"Object",optional:!1,field:"responInqueryFileDS",description:"<p>Response Inquery File DS</p>"},{group:"200",type:"String(5)",optional:!1,field:"responInqueryFileDS.status",description:"<p>Status Respon</p>"},{group:"200",type:"String(255)",optional:!1,field:"responInqueryFileDS.keterangan",description:"<p>Keterangan Respon</p>"},{group:"200",type:"String(255)",optional:!1,field:"responInqueryFileDS.url_file_ds",description:"<p>Url file hasil merge dokumen Izin, Sertifikat Standar, atau PB-UMKU</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
{
	 "responInqueryFileDS": {
		 "status": "200",
		 "keterangan": "sukses",
		 "url_file_ds": "https://server-oss-go-id/dev/v1//file/download/U202107081515591165814"
	 }
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
	 "responInqueryFileDS": {
		 "status": "400",
		 "keterangan": "data izin atau file DS tidak ditemukan"
	 }
}`,type:"json"}]},filename:"endpoint.js",groupTitle:"File_DS",sampleRequest:[{url:"https://server.digitaltelkom.dev/oss-sandbox/inqueryFileDS"}]},{type:"post",url:"/receiveFileDS",title:"Receive File DS",version:"5.0.0",description:"<p>Mengirimkan Data File Izin Yang diterbitkan oleh OSS dan Sudah Di Tanda Tangani Secara Elektronik dari Sistem OSS ke Sistem K/L/D</p>",name:"receiveFileDS",group:"File_DS",examples:[{title:"Curl Request Example:",content:`curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/receiveFileDS' \\
--header 'Token: {token}' \\
--header 'Content-Type: application/json' \\
--data-raw '{
    "receiveFileDS":
     {
        "id_izin": "",
        "nib": "",
        "file_izin": ""
    }
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"Token",description:"<p>SHA1(USERNAME+PASSWORD+NPWP+DATE(Ymd))</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "Token": "OSS000qw13242628gssssss812345654709820180514"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"receiveFileDS",description:"<p>AKTA</p>"},{group:"Parameter",type:"string(3)",optional:!1,field:"receiveFileDS.id_izin",description:"<p>ID izin</p>"},{group:"Parameter",type:"string(13)",optional:!1,field:"receiveFileDS.nib",description:"<p>Nomor Induk Berusaha</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"receiveFileDS.file_izin",description:"<p>URL File Izin</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
{
	 "receiveFileDS": {
		 "id_izin": "",
		 "nib": "",
		 "file_izin": ""
	 }
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"Object",optional:!1,field:"responreceiveFileDS",description:"<p>Response receive File DS</p>"},{group:"200",type:"String(1)",optional:!1,field:"responreceiveFileDS.status",description:"<p>Kode status (1: TRUE; 2: FALSE)</p>"},{group:"200",type:"String(255)",optional:!1,field:"responreceiveFileDS.keterangan",description:"<p>Keterangan Respon</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
{
	 "responreceiveFileDS": {
		 "status": "",
		 "keterangan": ""
	 }
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
	 "responreceiveFileDS": {
		 "status": "",
		 "keterangan": ""
	 }
}`,type:"json"}]},filename:"endpoint.js",groupTitle:"File_DS",sampleRequest:[{url:"https://server.digitaltelkom.dev/oss-sandbox/receiveFileDS"}]},{type:"post",url:"/receiveLegal",title:"Receive Legal",version:"5.0.0",description:"<p>Menerima Data Legal Akta Pendirian &amp; Pngesahan serta NPWP dari sistem AHU Online Kemenkumham ke Sisitem OSS</p>",name:"receiveLegal",group:"Legal",examples:[{title:"Curl Request Example:",content:`curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/receiveLegal' \\
--header 'user_key: {{user_key}}' \\
--header 'Authorization: Basic T1NTMDAwdjpVeDRCWFZCV1cyVmZhRkV4VXp0VVpsSmpBR3RRT2xGcXY=' \\
--header 'Content-Type: application/json' \\
--data-raw '{
  "AKTA": {
    "id_perusahaan": "",
    "jangka_waktu": "",
    "status_badan_hukum": "",
    "status_penanaman_modal": "",
    "npwp_perseroan": "",
    "nama_perseroan": "",
    "nama_singkatan": "",
    "jenis_perseroan": "",
    "status_perseroan": "",
    "alamat_perseroan": "",
    "rt_rw_perseroan": "",
    "kelurahan_perseroan": "",
    "perseroan_daerah_id": "",
    "kode_pos_perseroan": "",
    "nomor_telpon_perseroan": "",
    "email_perusahaan": "",
    "dalam_bentuk_uang": "",
    "dalam_bentuk_lain": "",
    "total_modal_dasar": "",
    "total_modal_ditempatkan": "",
    "data_kbli": [
      {
        "kbli": "",
        "uraian_usaha": ""
      }
    ],
    "pemegang_saham": [
      {
        "jenis_pemegang_saham": "",
        "flag_asing": "",
        "klasifikasi_saham_pemegang": "",
        "jum_lbr_saham_pemegang": "",
        "total_modal_pemegang": "",
        "jabatan_pemegang_saham": "",
        "nama_pemegang_saham": "",
        "jns_identitas_pemegang_saham": "",
        "no_identitas_pemegang_saham": "",
        "valid_identitas_pemegang_saham": "",
        "pengendali_pemegang_saham": "",
        "npwp_pemegang_saham": "",
        "alamat_pemegang_saham": "",
        "fax_pemegang_saham": "",
        "email_pemegang_saham": ""
      }
    ],
    "penanggung_jwb": [
      {
        "flag_asing": "",
        "nama_penanggung_jwb": "",
        "jabatan_penanggung_jwb": " ",
        "kebangsaan_penanggung_jwb": "",
        "jenis_identitas_penanggung_jwb": "",
        "no_identitas_penanggung_jwb": "",
        "negara_asal_penanggung_jwb": "",
        "no_paspor_penanggung_jwb": "",
        "npwp_penanggung_jwb": "",
        "alamat_penanggung_jwb": "",
        "jalan_penanggung_jwb": "",
        "blok_penanggung_jwb": "",
        "no_penanggung_jwb": "",
        "rt_rw_penanggung_jwb": "",
        "kelurahan_penanggung_jwb": "",
        "daerah_id_penanggung_jwb": "",
        "kode_pos_penanggung_jwb": "",
        "no_telp_penanggung_jwb": "",
        "no_hp_penanggung_jwb": "",
        "no_fax_penanggung_jwb": "",
        "email_penanggung_jwb": ""
      }
    ],
    "no_pengesahan": "",
    "tgl_pengesahan": "",
    "no_akta_lama": "",
    "tgl_akta_lama": "",
    "no_pengesahan_lama": "",
    "tgl_pengesahan_lama": "",
    "legalitas": [
      {
        "jenis_akta": "",
        "no_akta": "",
        "tgl_akta": "",
        "alamat_notaris": "",
        "nama_notaris": "",
        "telepon_notaris": ""
      }
    ]
  }
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"user_key",description:"<p>Users unique access-key.</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "user_key": "846ee507525c6b00d18733e066bd5686"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"AKTA",description:"<p>AKTA</p>"},{group:"Parameter",type:"string(11)",optional:!1,field:"AKTA.id_perusahaan",description:"<p>ID Perusahaan Dari Sistem AHU</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"AKTA.jangka_waktu",description:"<p>Jangka Waktu (format date : YYYY-MM- DD)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"AKTA.status_badan_hukum",description:"<p>Status Badan Hukum (* Lihat Lampiran 12)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"AKTA.status_penanaman_modal",description:"<p>Status Penanaman Modal (* Lihat Lampiran 1)</p>"},{group:"Parameter",type:"string(15)",optional:!1,field:"AKTA.npwp_perseroan",description:"<p>NPWP Perseroan</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"AKTA.nama_perseroan",description:"<p>Nama Perseroan</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"AKTA.nama_singkatan",description:"<p>Nama Singkatan Perseroan</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"AKTA.jenis_perseroan",description:"<p>Jenis Perseroan (* Lihat Lampiran 2)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"AKTA.status_perseroan",description:"<p>Jenis Perusahaan Terbuka atau Tertutup</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"AKTA.alamat_perseroan",description:"<p>alamat_perseroan</p>"},{group:"Parameter",type:"string(7)",optional:!1,field:"AKTA.rt_rw_perseroan",description:"<p>rt_rw_perseroan</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"AKTA.kelurahan_perseroan",description:"<p>kelurahan_perseroan</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"AKTA.perseroan_daerah_id",description:"<p>ID Daerah Perseroan (* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(5)",optional:!1,field:"AKTA.kode_pos_perseroan",description:"<p>kode_pos_perseroan</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"AKTA.nomor_telpon_perseroan",description:"<p>nomor_telpon_perseroan</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"AKTA.email_perusahaan",description:"<p>email_perusahaan</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"AKTA.dalam_bentuk_uang",description:"<p>Modal Dalam Bentuk Uang (Valuta : IDR)</p>"},{group:"Parameter",type:"string(50000)",optional:!1,field:"AKTA.dalam_bentuk_lain",description:"<p>Modal Dalam Bentuk Lainnya</p>"},{group:"Parameter",type:"number(20)",optional:!1,field:"AKTA.total_modal_dasar",description:"<p>Total Modal Dasar (Valuta : IDR)</p>"},{group:"Parameter",type:"number(20)",optional:!1,field:"AKTA.total_modal_ditempatkan",description:"<p>Total Modal Ditempatkan (Valuta : IDR)</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"AKTA.data_kbli",description:"<p>data_kbli</p>"},{group:"Parameter",type:"string(1024)",optional:!1,field:"AKTA.data_kbli.kbli",description:"<p>Maksud &amp; Tujuan KBLI</p>"},{group:"Parameter",type:"string(1024)",optional:!1,field:"AKTA.data_kbli.uraian_usaha",description:"<p>uraian_usaha</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"AKTA.pemegang_saham",description:"<p>Detail pemegang saham</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"AKTA.pemegang_saham.jenis_pemegang_saham",description:"<p>Jenis Pemegang Saham (* Lihat Lampiran 13)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"AKTA.pemegang_saham.flag_asing",description:"<p>Asal Pemegang Saham dari Dalam Negeri/Luar Negeri (Value : Y = asing; N = Bukan Asing)</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"AKTA.pemegang_saham.klasifikasi_saham_pemegang",description:"<p>klasifikasi_saham_pemegang</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"AKTA.pemegang_saham.jum_lbr_saham_pemegang",description:"<p>jum_lbr_saham_pemegang</p>"},{group:"Parameter",type:"number(20)",optional:!1,field:"AKTA.pemegang_saham.total_modal_pemegang",description:"<p>Total Modal Pemegang Saham (Valuta : IDR)</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"AKTA.pemegang_saham.jabatan_pemegang_saham",description:"<p>jabatan_pemegang_saham</p>"},{group:"Parameter",type:"string(500)",optional:!1,field:"AKTA.pemegang_saham.nama_pemegang_saham",description:"<p>nama_pemegang_saham</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"AKTA.pemegang_saham.jns_identitas_pemegang_saham",description:"<p>Jenis Identitas Pemegang Saham (* Lihat Lampiran 4)</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"AKTA.pemegang_saham.no_identitas_pemegang_saham",description:"<p>no_identitas_pemegang_saham</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"AKTA.pemegang_saham.valid_identitas_pemegang_saham",description:"<p>Valid / Masa Berlaku Pemegang Saham(Format Date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"AKTA.pemegang_saham.pengendali_pemegang_saham",description:"<p>Nama Pengendali Pemegang Saham</p>"},{group:"Parameter",type:"string(15)",optional:!1,field:"AKTA.pemegang_saham.npwp_pemegang_saham",description:"<p>npwp_pemegang_saham</p>"},{group:"Parameter",type:"string(1024)",optional:!1,field:"AKTA.pemegang_saham.alamat_pemegang_saham",description:"<p>alamat_pemegang_saham</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"AKTA.pemegang_saham.fax_pemegang_saham",description:"<p>fax_pemegang_saham</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"AKTA.pemegang_saham.email_pemegang_saham",description:"<p>email_pemegang_saham</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"AKTA.penanggung_jwb",description:"<p>Detail penanggung jawab</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"AKTA.penanggung_jwb.flag_asing",description:"<p>Asal Penanggung Jawab dari Dalam Negeri / Luar Negeri (Value : Y = asing; N = Bukan Asing)</p>"},{group:"Parameter",type:"string(500)",optional:!1,field:"AKTA.penanggung_jwb.nama_penanggung_jwb",description:"<p>nama_penanggung_jwb</p>"},{group:"Parameter",type:"string(250)",optional:!1,field:"AKTA.penanggung_jwb.jabatan_penanggung_jwb",description:"<p>jabatan_penanggung_jwb</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"AKTA.penanggung_jwb.kebangsaan_penanggung_jwb",description:"<p>Kebangsaan Penanggung Jawab (* Lihat Lampiran 6)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"AKTA.penanggung_jwb.jenis_identitas_penanggung_jwb",description:"<p>Jenis Identitas Penganggung Jawab (* Lihat Lampiran 4)</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"AKTA.penanggung_jwb.no_identitas_penanggung_jwb",description:"<p>Nomor Identitas Penanggung Jawab</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"AKTA.penanggung_jwb.negara_asal_penanggung_jwb",description:"<p>Negara Asal Penanggung Jawab (* Sumber Kodefikasi Negara Mengikuti Standar Unedifact : http://www.unece.org/cefact/locode/se rvice/location )</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"AKTA.penanggung_jwb.no_paspor_penanggung_jwb",description:"<p>no_paspor_penanggung_jwb</p>"},{group:"Parameter",type:"string(15)",optional:!1,field:"AKTA.penanggung_jwb.npwp_penanggung_jwb",description:"<p>npwp_penanggung_jwb</p>"},{group:"Parameter",type:"string(1024)",optional:!1,field:"AKTA.penanggung_jwb.alamat_penanggung_jwb",description:"<p>alamat_penanggung_jwb</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"AKTA.penanggung_jwb.jalan_penanggung_jwb",description:"<p>jalan_penanggung_jwb</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"AKTA.penanggung_jwb.blok_penanggung_jwb",description:"<p>blok_penanggung_jwb</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"AKTA.penanggung_jwb.no_penanggung_jwb",description:"<p>no_penanggung_jwb</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"AKTA.penanggung_jwb.rt_rw_penanggung_jwb",description:"<p>rt_rw_penanggung_jwb</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"AKTA.penanggung_jwb.kelurahan_penanggung_jwb",description:"<p>kelurahan_penanggung_jwb</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"AKTA.penanggung_jwb.daerah_id_penanggung_jwb",description:"<p>ID Daerah Penanggung Jawab (* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(5)",optional:!1,field:"AKTA.penanggung_jwb.kode_pos_penanggung_jwb",description:"<p>kode_pos_penanggung_jwb</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"AKTA.penanggung_jwb.no_telp_penanggung_jwb",description:"<p>no_telp_penanggung_jwb</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"AKTA.penanggung_jwb.no_hp_penanggung_jwb",description:"<p>no_hp_penanggung_jwb</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"AKTA.penanggung_jwb.no_fax_penanggung_jwb",description:"<p>no_fax_penanggung_jwb</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"AKTA.penanggung_jwb.email_penanggung_jwb",description:"<p>email_penanggung_jwb</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"AKTA.no_pengesahan",description:"<p>Nomor Pengesahan Akta Dari Kumham</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"AKTA.tgl_pengesahan",description:"<p>Tanggal Pengesahan Akta Dari Kumham(format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"AKTA.no_akta_lama",description:"<p>Nomor Akta Lama Sebelum Perubahan</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"AKTA.tgl_akta_lama",description:"<p>Tanggal Akta Lama Sebelum Perubahan(format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"AKTA.no_pengesahan_lama",description:"<p>Nomor Pengesahan Akta Lama Sebelum Perubahan Dari Kumham</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"AKTA.tgl_pengesahan_lama",description:"<p>Tanggal Pengesahan Akta Lama Sebelum Perubahan Dari Kumham (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"AKTA.legalitas",description:"<p>Data legalitas</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"AKTA.legalitas.jenis_akta",description:"<p>Jenis Akta Perusahaan (* Lihat Lampiran 7)</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"AKTA.legalitas.no_akta",description:"<p>Nomor Akta Perusahaan</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"AKTA.legalitas.tgl_akta",description:"<p>Tanggal Akta Perusahaan (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"AKTA.legalitas.alamat_notaris",description:"<p>alamat_notaris</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"AKTA.legalitas.nama_notaris",description:"<p>nama_notaris</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"AKTA.legalitas.telepon_notaris",description:"<p>telepon_notaris</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
{
  "AKTA": {
    "id_perusahaan": "",
    "jangka_waktu": "",
    "status_badan_hukum": "",
    "status_penanaman_modal": "",
    "npwp_perseroan": "",
    "nama_perseroan": "",
    "nama_singkatan": "",
    "jenis_perseroan": "",
    "status_perseroan": "",
    "alamat_perseroan": "",
    "rt_rw_perseroan": "",
    "kelurahan_perseroan": "",
    "perseroan_daerah_id": "",
    "kode_pos_perseroan": "",
    "nomor_telpon_perseroan": "",
    "email_perusahaan": "",
    "dalam_bentuk_uang": "",
    "dalam_bentuk_lain": "",
    "total_modal_dasar": "",
    "total_modal_ditempatkan": "",
    "data_kbli": [
      {
        "kbli": "",
        "uraian_usaha": ""
      }
    ],
    "pemegang_saham": [
      {
        "jenis_pemegang_saham": "",
        "flag_asing": "",
        "klasifikasi_saham_pemegang": "",
        "jum_lbr_saham_pemegang": "",
        "total_modal_pemegang": "",
        "jabatan_pemegang_saham": "",
        "nama_pemegang_saham": "",
        "jns_identitas_pemegang_saham": "",
        "no_identitas_pemegang_saham": "",
        "valid_identitas_pemegang_saham": "",
        "pengendali_pemegang_saham": "",
        "npwp_pemegang_saham": "",
        "alamat_pemegang_saham": "",
        "fax_pemegang_saham": "",
        "email_pemegang_saham": ""
      }
    ],
    "penanggung_jwb": [
      {
        "flag_asing": "",
        "nama_penanggung_jwb": "",
        "jabatan_penanggung_jwb": " ",
        "kebangsaan_penanggung_jwb": "",
        "jenis_identitas_penanggung_jwb": "",
        "no_identitas_penanggung_jwb": "",
        "negara_asal_penanggung_jwb": "",
        "no_paspor_penanggung_jwb": "",
        "npwp_penanggung_jwb": "",
        "alamat_penanggung_jwb": "",
        "jalan_penanggung_jwb": "",
        "blok_penanggung_jwb": "",
        "no_penanggung_jwb": "",
        "rt_rw_penanggung_jwb": "",
        "kelurahan_penanggung_jwb": "",
        "daerah_id_penanggung_jwb": "",
        "kode_pos_penanggung_jwb": "",
        "no_telp_penanggung_jwb": "",
        "no_hp_penanggung_jwb": "",
        "no_fax_penanggung_jwb": "",
        "email_penanggung_jwb": ""
      }
    ],
    "no_pengesahan": "",
    "tgl_pengesahan": "",
    "no_akta_lama": "",
    "tgl_akta_lama": "",
    "no_pengesahan_lama": "",
    "tgl_pengesahan_lama": "",
    "legalitas": [
      {
        "jenis_akta": "",
        "no_akta": "",
        "tgl_akta": "",
        "alamat_notaris": "",
        "nama_notaris": "",
        "telepon_notaris": ""
      }
    ]
  }
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"Object",optional:!1,field:"responreceiveLegal",description:"<p>Response receive legal</p>"},{group:"200",type:"String(3)",optional:!1,field:"responreceiveLegal.kode",description:"<p>Kode Respon (*Lihat Lampiran 9)</p>"},{group:"200",type:"String(255)",optional:!1,field:"responreceiveLegal.keterangan",description:"<p>Keterangan Respon</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
{
	 "responreceiveLegal": {
		 "kode": "",
		 "keterangan": ""
	 }
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
	 "responreceiveLegal": {
		 "kode": "",
		 "keterangan": ""
	 }
}`,type:"json"}]},filename:"endpoint.js",groupTitle:"Legal",sampleRequest:[{url:"https://server.digitaltelkom.dev/oss-sandbox/receiveLegal"}]},{type:"post",url:"/receiveLicenseStatus",title:"Receive License Status",version:"5.0.0",description:"<p>Pengiriman Data Status Izin dari Sistem K/L/D ke Sistem OSS</p>",group:"License",examples:[{title:"Curl Request Example:",content:`curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/receiveLicenseStatus' \\
--header 'user_key: {{user_key}}' \\
--header 'Content-Type: application/json' \\
--data-raw '{
  "IZINSTATUS": {
    "nib": "",
    "id_produk": "",
    "id_proyek": "",
    "oss_id": "",
    "id_izin": "",
    "kd_izin": "",
    "kd_instansi": "",
    "kd_status": "",
    "tgl_status": "",
    "nip_status": "",
    "nama_status": "",
    "keterangan": "",
    "data_pnbp": {
      "kd_akun": "",
      "kd_penerimaan": "",
      "kd_billing": "",
      "tgl_billing": "",
      "tgl_expire": "",
      "nominal": "",
      "url_dokumen": ""
    }
  }
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"user_key",description:"<p>Users unique access-key.</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "user_key": "846ee507525c6b00d18733e066bd5686"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"IZINSTATUS",description:"<p>IZINSTATUS</p>"},{group:"Parameter",type:"string(13)",optional:!1,field:"IZINSTATUS.nib",description:"<p>Nomor Induk Berusaha</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"IZINSTATUS.id_produk",description:"<p>id produk</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"IZINSTATUS.id_proyek",description:"<p>id proyek</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"IZINSTATUS.oss_id",description:"<p>Oss Id adalah ID yang di Generate Sistem OSS dan Dikirimkan ke K/L/D Bersama Pengajuan Perizinan</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"IZINSTATUS.id_izin",description:"<p>Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin</p>"},{group:"Parameter",type:"string(12)",optional:!1,field:"IZINSTATUS.kd_izin",description:"<p>Kode Izin Sistem K/L/D (* Lihat Lampiran 8)</p>"},{group:"Parameter",type:"string(3)",optional:!1,field:"IZINSTATUS.kd_instansi",description:"<p>Kode Instansi</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"IZINSTATUS.kd_status",description:"<p>Kode Status Perizinan (* Lihat Lampiran 10)</p>"},{group:"Parameter",type:"string(18)",optional:!1,field:"IZINSTATUS.tgl_status",description:"<p>Tanggal Proses Status Izin (format date: YYYY-MM-DD HH:II:SS)</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"IZINSTATUS.nip_status",description:"<p>Nip Status Izin</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"IZINSTATUS.nama_status",description:"<p>Nama Status Izin</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"IZINSTATUS.keterangan",description:"<p>keterangan</p>"},{group:"Parameter",type:"object",optional:!1,field:"IZINSTATUS.data_pnbp",description:"<p>data_pnbp</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"IZINSTATUS.data_pnbp.kd_akun",description:"<p>Kode Akun simponi</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"IZINSTATUS.data_pnbp.kd_penerimaan",description:"<p>Kode Penerimaan</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"IZINSTATUS.data_pnbp.kd_billing",description:"<p>Kode Billing</p>"},{group:"Parameter",type:"Date(10)",optional:!1,field:"IZINSTATUS.data_pnbp.tgl_billing",description:"<p>Tgl terbit billing</p>"},{group:"Parameter",type:"Date(10)",optional:!1,field:"IZINSTATUS.data_pnbp.tgl_expire",description:"<p>Tgl berlaku billing</p>"},{group:"Parameter",type:"number(20.0)",optional:!1,field:"IZINSTATUS.data_pnbp.nominal",description:"<p>Nominal PNBP</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"IZINSTATUS.data_pnbp.url_dokumen",description:"<p>URL Dokumen SPS</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
{
  "IZINSTATUS": {
    "nib": "",
    "id_produk": "",
    "id_proyek": "",
    "oss_id": "",
    "id_izin": "",
    "kd_izin": "",
    "kd_instansi": "",
    "kd_status": "",
    "tgl_status": "",
    "nip_status": "",
    "nama_status": "",
    "keterangan": "",
    "data_pnbp": {
      "kd_akun": "",
      "kd_penerimaan": "",
      "kd_billing": "",
      "tgl_billing": "",
      "tgl_expire": "",
      "nominal": "",
      "url_dokumen": ""
    }
  }
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"Object",optional:!1,field:"responreceiveLicenseStatus",description:"<p>Response receive License Status</p>"},{group:"200",type:"String(3)",optional:!1,field:"responreceiveLicenseStatus.kode",description:"<p>Kode Respon</p>"},{group:"200",type:"String(255)",optional:!1,field:"responreceiveLicenseStatus.keterangan",description:"<p>Keterangan Respon</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
{
	 "responreceiveLicenseStatus": {
		 "kode": "",
		 "keterangan": ""
	 }
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
	 "responreceiveLicenseStatus": {
		 "kode": "",
		 "keterangan": ""
	 }
}`,type:"json"}]},filename:"endpoint.js",groupTitle:"License",name:"PostReceivelicensestatus",sampleRequest:[{url:"https://server.digitaltelkom.dev/oss-sandbox/receiveLicenseStatus"}]},{type:"post",url:"/checkLicenseStatus",title:"Check License Status",version:"5.0.0",description:"<p>Pengecekan Data Status Izin dari Sistem K/L/D ke Sistem OSS</p>",name:"checkLicenseStatus",group:"License",examples:[{title:"Curl Request Example:",content:`curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/checkLicenseStatus' \\
--header 'user_key: {{user_key}}' \\
--header 'Content-Type: application/json' \\
--data-raw '{
    "IZINSTATUS": {
        "id_izin": ""
    }
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"user_key",description:"<p>Users unique access-key.</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "user_key": "846ee507525c6b00d18733e066bd5686"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"IZINSTATUS",description:"<p>IZINSTATUS</p>"},{group:"Parameter",type:"string(13)",optional:!1,field:"IZINSTATUS.id_izin",description:"<p>id_izin</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
{
  "IZINSTATUS": {
    "id_izin": ""
  }
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"object",optional:!1,field:"responreceiveLicenseStatus",description:"<p>responreceiveLicenseStatus</p>"},{group:"200",type:"string(3)",optional:!1,field:"responreceiveLicenseStatus.kode",description:"<p>Kode Respon (*Lihat Lampiran 9)</p>"},{group:"200",type:"string(255)",optional:!1,field:"responreceiveLicenseStatus.keterangan",description:"<p>Keterangan Respon</p>"},{group:"200",type:"object",optional:!1,field:"responreceiveLicenseStatus.dataIZIN",description:"<p>dataIZIN</p>"},{group:"200",type:"string(13)",optional:!1,field:"responreceiveLicenseStatus.dataIZIN.nib",description:"<p>Nomor Induk Berusaha</p>"},{group:"200",type:"string(25)",optional:!1,field:"responreceiveLicenseStatus.dataIZIN.id_proyek",description:"<p>ID proyek</p>"},{group:"200",type:"string(25)",optional:!1,field:"responreceiveLicenseStatus.dataIZIN.id_izin",description:"<p>Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin</p>"},{group:"200",type:"string(2)",optional:!1,field:"responreceiveLicenseStatus.dataIZIN.kd_status",description:"<p>Kode Status Perizinan (* Lihat Lampiran 10)</p>"},{group:"200",type:"string(255)",optional:!1,field:"responreceiveLicenseStatus.dataIZIN.uraian_status",description:"<p>Uraian status</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
{
  "responreceiveLicenseStatus": {
    "kode": "",
    "keterangan": "",
    "dataIZIN": {
      "nib": "",
      "id_proyek": "",
      "id_izin": "",
      "kd_status": "",
      "uraian_status": ""
    }
  }
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
	 "responsecheckLicenceStatus": {
		 "kode": 500,
		 "keterangan": "Terjadi kesalahan sistem, hubungi tim teknis OSS"
	 }
}`,type:"json"}]},filename:"endpoint.js",groupTitle:"License",sampleRequest:[{url:"https://server.digitaltelkom.dev/oss-sandbox/checkLicenseStatus"}]},{type:"post",url:"/receiveLicense",title:"Receive License",version:"5.0.0",description:"<p>Pengiriman Data Izin Final dari Sistem K/L/D ke Sistem OSS</p>",name:"receiveLicense",group:"License",examples:[{title:"Curl Request Example:",content:`curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/receiveLicense' \\
--header 'user_key: {{user_key}}' \\
--header 'Content-Type: application/json' \\
--data-raw '{
    "IZINFINAL": {
        "nib": "8120207732259",
        "id_produk": "O-202112141149467572120",
        "id_proyek": "R-202112141140213935332",
        "oss_id": "P02-201912162112383017732",
        "id_izin": "I-202111181604410538066",
        "kd_izin": "033000000007",
        "kd_daerah": "3201000000",
        "kewenangan": "01",
        "nomor_izin": "",
        "tgl_terbit_izin": "",
        "tgl_berlaku_izin": "",
        "nama_ttd": "",
        "nip_ttd": "",
        "jabatan_ttd": "",
        "status_izin": "45",
        "file_izin": "",
        "keterangan": "",
        "file_lampiran": "",
        "nomenklatur_nomor_izin": "",
        "bln_berlaku_izin": "",
        "thn_berlaku_izin": "",
        "data_pnbp": [
            {
                "kd_akun": "",
                "kd_penerimaan": "",
                "nominal": ""
            }
        ]
    }
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"user_key",description:"<p>Users unique access-key.</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "user_key": "846ee507525c6b00d18733e066bd5686"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"IZINFINAL",description:"<p>IZINFINAL</p>"},{group:"Parameter",type:"string(13)",optional:!1,field:"IZINFINAL.nib",description:"<p>Nomor Induk Berusaha</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"IZINFINAL.id_produk",description:"<p>Id produk</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"IZINFINAL.id_proyek",description:"<p>Id Proyek</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"IZINFINAL.oss_id",description:"<p>Oss Id adalah ID yang di Generate Sistem OSS dan Dikirimkan ke K/L/D Bersama Permohonan Nomor Induk Berusaha</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"IZINFINAL.id_izin",description:"<p>Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin</p>"},{group:"Parameter",type:"string(12)",optional:!1,field:"IZINFINAL.kd_izin",description:"<p>Kode Izin Sistem K/L/D (* Lihat Lampiran 8)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"IZINFINAL.kd_daerah",description:"<p>Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"IZINFINAL.kewenangan",description:"<p>Kewenangan (00: Kewenangan Pusat; 01: Kewenangan Provinsi; 02: Kewenangan Kab/Kota)</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"IZINFINAL.nomor_izin",description:"<p>Nomor Izin Final</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"IZINFINAL.tgl_terbit_izin",description:"<p>Tanggal Izin Final (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"IZINFINAL.tgl_berlaku_izin",description:"<p>Tanggal Berlaku Izin Final (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"IZINFINAL.nama_ttd",description:"<p>Nama Penandatangan Izin</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"IZINFINAL.nip_ttd",description:"<p>Nip Penandatangan Izin</p>"},{group:"Parameter",type:"string(150)",optional:!1,field:"IZINFINAL.jabatan_ttd",description:"<p>Jabatan Penandatangan Izin</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"IZINFINAL.status_izin",description:"<p>Status Izin di Sistem OSS (* Lihat Lampiran 10)</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"IZINFINAL.file_izin",description:"<p>Attachment File Izin dalam Bentuk File PDF Berupa Link (* Ukuran File Maks: 2MB)</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"IZINFINAL.keterangan",description:"<p>Keterangan Status Izin</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"IZINFINAL.file_lampiran",description:"<p>Attachment File Izin dalam Bentuk File PDF Berupa Link (* Ukuran File Maks: 2MB)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"IZINFINAL.nomenklatur_nomor_izin",description:"<p>Nomenklatur nomor izin</p>"},{group:"Parameter",type:"number(5)",optional:!1,field:"IZINFINAL.bln_berlaku_izin",description:"<p>angka waktu berlaku izin dalam bulan</p>"},{group:"Parameter",type:"number(5)",optional:!1,field:"IZINFINAL.thn_berlaku_izin",description:"<p>angka waktu berlaku izin dalam tahun</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"IZINFINAL.data_pnbp",description:"<p>data_pnbp</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"IZINFINAL.data_pnbp.kd_akun",description:"<p>Kode Akun PNBP dari Simponi Kemenkeu</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"IZINFINAL.data_pnbp.kd_penerimaan",description:"<p>Kode Jenis Penerimaan dari Simponi Kemenkeu</p>"},{group:"Parameter",type:"number(20)",optional:!1,field:"IZINFINAL.data_pnbp.nominal",description:"<p>Jumlah Nilai PNBP (Default Valuta : IDR)</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
{
  "IZINFINAL": {
    "nib": "",
    "id_produk": "",
    "id_proyek": "",
    "oss_id": "",
    "id_izin": "",
    "kd_izin": "",
    "kd_daerah": "",
    "kewenangan": "",
    "nomor_izin": "",
    "tgl_terbit_izin": "",
    "tgl_berlaku_izin": "",
    "nama_ttd": "",
    "nip_ttd": "",
    "jabatan_ttd": "",
    "status_izin": "",
    "file_izin": "",
    "keterangan": "",
    "file_lampiran": "",
    "nomenklatur_nomor_izin": "",
    "bln_berlaku_izin": "",
    "thn_berlaku_izin": "",
    "data_pnbp": [
     { 
       "kd_akun": "", 
       "kd_penerimaan": "", 
       "nominal": "" 
     }
    ]
  }
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"Object",optional:!1,field:"responreceiveLicense",description:"<p>Response receive license</p>"},{group:"200",type:"String(3)",optional:!1,field:"responreceiveLicense.kode",description:"<p>Kode Respon</p>"},{group:"200",type:"String(255)",optional:!1,field:"responreceiveLicense.keterangan",description:"<p>Keterangan Respon</p>"},{group:"200",type:"String(20)",optional:!1,field:"responreceiveLicense.nomor_izin",description:"<p>Nomor Izin yang diterbitkan OSS</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
{
	 "responreceiveLicense": {
		 "kode": "",
		 "keterangan": "",
         "nomor_izin": ""
	 }
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
	 "responreceiveLicense": {
		 "kode": "",
		 "keterangan": "",
      "nomor_izin": ""
	 }
}`,type:"json"}]},filename:"endpoint.js",groupTitle:"License",sampleRequest:[{url:"https://server.digitaltelkom.dev/oss-sandbox/receiveLicense"}]},{type:"post",url:"/receiveLicenseKKPR",title:"Receive License KKPR",version:"5.0.0",description:"<p>Pengiriman Data Persetujuan PKKPR dari Sistem K/L/D ke Sistem OSS</p>",name:"receiveLicenseKKPR",group:"License",examples:[{title:"Curl Request Example:",content:`curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/receiveLicenseKKPR' \\
--header 'user_key: {{user_key}}' \\
--header 'Content-Type: application/json' \\
--data-raw '{
  "IZINFINALKKPR": {
    "id_proyek": "",
    "oss_id": "",
    "id_izin": "",
    "kd_izin": "",
    "kd_status": "",
    "tgl_status": "",
    "nip_status": "",
    "nama_status": "",
    "keterangan": "",
    "data_teknis": {
      "luas": "",
      "jenis_peruntukan": "",
      "koefisien_dasar_bangunan": "",
      "koefisien_lantai_bangunan": "",
      "indikasi_program_pemanfaatan_ruang": "",
      "persyaratan_pelaksanaan_kegiatan": "",
      "garis_sempadan_bangunan": "",
      "jarak_bebas_bangunan": "",
      "koefisien_dasar_hijau": "",
      "jaringan_utilitas_kota": "",
      "persetujuan": "",
      "url_peta": "",
      "url_keterangan_peta": "",
      "ketentuan_umum": "",
      "koordinat_batas_bidang": "",
      "nomor_pertek": "",
      "nomor_perda_rtr": "",
      "nama_perairan": "",
      "kedalaman": ""
    }
  }
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"user_key",description:"<p>Users unique access-key.</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "user_key": "846ee507525c6b00d18733e066bd5686"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"IZINFINALKKPR",description:"<p>IZINFINALKKPR</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"IZINFINALKKPR.id_proyek",description:"<p>ID / Kode Proyek</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"IZINFINALKKPR.oss_id",description:"<p>Oss Id adalah ID yang di Generate Sistem OSS dan Dikirimkan ke K/L/D Bersama Pengajuan Perizinan</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"IZINFINALKKPR.id_izin",description:"<p>Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin</p>"},{group:"Parameter",type:"string(12)",optional:!1,field:"IZINFINALKKPR.kd_izin",description:"<p>Kode Izin Sistem K/L/D (* Lihat Lampiran 8)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"IZINFINALKKPR.kd_status",description:"<p>Kode Status Perizinan (* Lihat Lampiran 10)</p>"},{group:"Parameter",type:"string(18)",optional:!1,field:"IZINFINALKKPR.tgl_status",description:"<p>Tanggal Proses Status Izin (format date: YYYY-MM-DD HH:II:SS)</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"IZINFINALKKPR.nip_status",description:"<p>Nip pemroses Status Izin</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"IZINFINALKKPR.nama_status",description:"<p>Nama pemroses Status Izin</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"IZINFINALKKPR.keterangan",description:"<p>Keterangan</p>"},{group:"Parameter",type:"object",optional:!1,field:"IZINFINALKKPR.data_teknis",description:"<p>data_teknis</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"IZINFINALKKPR.data_teknis.luas",description:"<p>Luas tanah/perairan yang disetujui</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"IZINFINALKKPR.data_teknis.jenis_peruntukan",description:"<p>Jenis peruntukan pemanfaatan ruang</p>"},{group:"Parameter",type:"number(20.2)",optional:!1,field:"IZINFINALKKPR.data_teknis.koefisien_dasar_bangunan",description:"<p>Koefisien dasar bangunan maksimum</p>"},{group:"Parameter",type:"number(20.2)",optional:!1,field:"IZINFINALKKPR.data_teknis.koefisien_lantai_bangunan",description:"<p>Koefisien lantai bangunan maksimum</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"IZINFINALKKPR.data_teknis.indikasi_program_pemanfaatan_ruang",description:"<p>Indikasi program pemanfaatan ruang</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"IZINFINALKKPR.data_teknis.persyaratan_pelaksanaan_kegiatan",description:"<p>Persyaratan Pelaksanaan kegiatan Pemanfaatan Ruang</p>"},{group:"Parameter",type:"number(20.2)",optional:!1,field:"IZINFINALKKPR.data_teknis.garis_sempadan_bangunan",description:"<p>Garis Sempadan Bangunan minimum</p>"},{group:"Parameter",type:"number(20.2)",optional:!1,field:"IZINFINALKKPR.data_teknis.jarak_bebas_bangunan",description:"<p>Jarak Bebas Bangunan minimum</p>"},{group:"Parameter",type:"number(20.2)",optional:!1,field:"IZINFINALKKPR.data_teknis.koefisien_dasar_hijau",description:"<p>Koefisien Dasar Hijau minimum</p>"},{group:"Parameter",type:"number(20.2)",optional:!1,field:"IZINFINALKKPR.data_teknis.jaringan_utilitas_kota",description:"<p>Jaringan utilitas kota</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"IZINFINALKKPR.data_teknis.persetujuan",description:"<p>PKKPR dinyatakan disetujui seluruhnya/disetujui sebagian/ditolak seluruhnya dengan pertimbangan</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"IZINFINALKKPR.data_teknis.url_peta",description:"<p>url_peta</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"IZINFINALKKPR.data_teknis.url_keterangan_peta",description:"<p>Keterangan Letak Peta (Berisi peta yang menunjukkan letak bidang pada skala yang lebih kecil)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"IZINFINALKKPR.data_teknis.ketentuan_umum",description:"<p>Arahan / Ketentuan Umum Peraturan Zonasi (Berisi informasi terkait APZ/KUPZ pada kawasan/zona dalam delineasi lokasi usulan kegiatan pemanfaatan ruang)</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"IZINFINALKKPR.data_teknis.koordinat_batas_bidang",description:"<p>Koordinat batas bidang rencana lokasi kegiatan</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"IZINFINALKKPR.data_teknis.nomor_pertek",description:"<p>Nomor Pertimbangan Teknis</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"IZINFINALKKPR.data_teknis.nomor_perda_rtr",description:"<p>nomor_perda_rtr</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"IZINFINALKKPR.data_teknis.nama_perairan",description:"<p>nama_perairan</p>"},{group:"Parameter",type:"number(20.2)",optional:!1,field:"IZINFINALKKPR.data_teknis.kedalaman",description:"<p>Kedalaman perairan lokasi kegiatan</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
{
  "IZINFINALKKPR": {
    "id_proyek": "",
    "oss_id": "",
    "id_izin": "",
    "kd_izin": "",
    "kd_status": "",
    "tgl_status": "",
    "nip_status": "",
    "nama_status": "",
    "keterangan": "",
    "data_teknis": {
      "luas": "",
      "jenis_peruntukan": "",
      "koefisien_dasar_bangunan": "",
      "koefisien_lantai_bangunan": "",
      "indikasi_program_pemanfaatan_ruang": "",
      "persyaratan_pelaksanaan_kegiatan": "",
      "garis_sempadan_bangunan": "",
      "jarak_bebas_bangunan": "",
      "koefisien_dasar_hijau": "",
      "jaringan_utilitas_kota": "",
      "persetujuan": "",
      "url_peta": "",
      "url_keterangan_peta": "",
      "ketentuan_umum": "",
      "koordinat_batas_bidang": "",
      "nomor_pertek": "",
      "nomor_perda_rtr": "",
      "nama_perairan": "",
      "kedalaman": ""
    }
  }
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"Object",optional:!1,field:"responreceiveLicenseKKPR",description:"<p>Response License KKPR</p>"},{group:"200",type:"String(3)",optional:!1,field:"responreceiveLicenseKKPR.kode",description:"<p>Kode Respon</p>"},{group:"200",type:"String(255)",optional:!1,field:"responreceiveLicenseKKPR.keterangan",description:"<p>Keterangan Respon</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
{
	 "responreceiveLicenseKKPR ": {
		 "kode": "",
		 "keterangan": ""
	 }
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
	 "responreceiveLicenseKKPR ": {
		 "kode": "",
		 "keterangan": ""
	 }
}`,type:"json"}]},filename:"endpoint.js",groupTitle:"License",sampleRequest:[{url:"https://server.digitaltelkom.dev/oss-sandbox/receiveLicenseKKPR"}]},{type:"post",url:"/updateLicense",title:"Update License",version:"5.0.0",description:"<p>Pengiriman Data Izin Final dari Sistem K/L/D ke Sistem OSS</p>",name:"updateLicense",group:"License",examples:[{title:"Curl Request Example:",content:`curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/updateLicense' \\
--header 'user_key: {{user_key}}' \\
--header 'Content-Type: application/json' \\
--data-raw '{
  "IZINFINAL": {
    "nib": "",
    "id_produk": "",
    "id_proyek": "",
    "oss_id": "",
    "id_izin": "",
    "kd_izin": "",
    "kd_daerah": "",
    "kewenangan": "",
    "nomor_izin": "",
    "tgl_terbit_izin": "",
    "tgl_berlaku_izin": "",
    "nama_ttd": "",
    "nip_ttd": "",
    "jabatan_ttd": "",
    "status_izin": "",
    "file_izin": "",
    "keterangan": "",
    "file_lampiran": "",
    "nomenklatur_nomor_izin": "",
    "bln_berlaku_izin": "",
    "thn_berlaku_izin": "",
    "data_pnbp": [
      {
        "kd_akun": "",
        "kd_penerimaan": "",
        "nominal": ""
      }
    ]
  }
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"user_key",description:"<p>Users unique access-key.</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "user_key": "846ee507525c6b00d18733e066bd5686"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"IZINFINAL",description:"<p>IZINFINAL</p>"},{group:"Parameter",type:"string(13)",optional:!1,field:"IZINFINAL.nib",description:"<p>Nomor Induk Berusaha</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"IZINFINAL.id_produk",description:"<p>ID Produk</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"IZINFINAL.id_proyek",description:"<p>ID / Kode Proyek</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"IZINFINAL.oss_id",description:"<p>Oss Id adalah ID yang di Generate Sistem OSS dan Dikirimkan ke K/L/D Bersama Permohonan Nomor Induk Berusaha</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"IZINFINAL.id_izin",description:"<p>Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin</p>"},{group:"Parameter",type:"string(12)",optional:!1,field:"IZINFINAL.kd_izin",description:"<p>Kode Izin Sistem K/L/D (* Lihat Lampiran 8)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"IZINFINAL.kd_daerah",description:"<p>Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"IZINFINAL.kewenangan",description:"<p>00: Kewenangan Pusat; 01: Kewenangan Provinsi; 02: Kewenangan Kab/Kota</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"IZINFINAL.nomor_izin",description:"<p>Nomor Izin Final</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"IZINFINAL.tgl_terbit_izin",description:"<p>Tanggal Izin Final (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"IZINFINAL.tgl_berlaku_izin",description:"<p>Tanggal Berlaku Izin Final (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"IZINFINAL.nama_ttd",description:"<p>Nama Penandatangan Izin</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"IZINFINAL.nip_ttd",description:"<p>Nip Penandatangan Izin</p>"},{group:"Parameter",type:"string(150)",optional:!1,field:"IZINFINAL.jabatan_ttd",description:"<p>Jabatan Penandatangan Izin</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"IZINFINAL.status_izin",description:"<p>Status Izin di Sistem OSS (* Lihat Lampiran 10)</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"IZINFINAL.file_izin",description:"<p>Attachment File Izin dalam Bentuk File PDF Berupa Link (* Ukuran File Maks: 2MB)</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"IZINFINAL.keterangan",description:"<p>Keterangan Status Izin</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"IZINFINAL.file_lampiran",description:"<p>Attachment File Izin dalam Bentuk File PDF Berupa Link (* Ukuran File Maks: 2MB)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"IZINFINAL.nomenklatur_nomor_izin",description:"<p>Nomenklatur nomor izin</p>"},{group:"Parameter",type:"string(5)",optional:!1,field:"IZINFINAL.bln_berlaku_izin",description:"<p>Jangka waktu berlaku izin dalam bulan</p>"},{group:"Parameter",type:"string(5)",optional:!1,field:"IZINFINAL.thn_berlaku_izin",description:"<p>Jangka waktu berlaku izin dalam tahun</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"IZINFINAL.data_pnbp",description:"<p>data_pnbp</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"IZINFINAL.data_pnbp.kd_akun",description:"<p>Kode Akun PNBP dari Simponi Kemenkeu</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"IZINFINAL.data_pnbp.kd_penerimaan",description:"<p>Kode Jenis Penerimaan dari Simponi Kemenkeu</p>"},{group:"Parameter",type:"number(20.0)",optional:!1,field:"IZINFINAL.data_pnbp.nominal",description:"<p>Jumlah Nilai PNBP (Default Valuta : IDR)</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
{
  "IZINFINAL": {
    "nib": "",
    "id_produk": "",
    "id_proyek": "",
    "oss_id": "",
    "id_izin": "",
    "kd_izin": "",
    "kd_daerah": "",
    "kewenangan": "",
    "nomor_izin": "",
    "tgl_terbit_izin": "",
    "tgl_berlaku_izin": "",
    "nama_ttd": "",
    "nip_ttd": "",
    "jabatan_ttd": "",
    "status_izin": "",
    "file_izin": "",
    "keterangan": "",
    "file_lampiran": "",
    "nomenklatur_nomor_izin": "",
    "bln_berlaku_izin": "",
    "thn_berlaku_izin": "",
    "data_pnbp": [
      {
        "kd_akun": "",
        "kd_penerimaan": "",
        "nominal": ""
      }
    ]
  }
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"Object",optional:!1,field:"responupdateLicense",description:"<p>Response update license</p>"},{group:"200",type:"String(3)",optional:!1,field:"responupdateLicense.kode",description:"<p>Kode Respon</p>"},{group:"200",type:"String(255)",optional:!1,field:"responupdateLicense.keterangan",description:"<p>Keterangan Respon</p>"},{group:"200",type:"String(255)",optional:!1,field:"responupdateLicense.keterangan_reset_izin_ds",description:"<p>Keterangan reset izin DS</p>"},{group:"200",type:"String(20)",optional:!1,field:"responupdateLicense.nomor_izin",description:"<p>Keterangan nomor izin</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
{
	 "responupdateLicense": {
		 "kode": "",
		 "keterangan": "",
		 "keterangan_reset_izin_ds": "",
		 "nomor_izin": ""
	 }
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
	 "responupdateLicense": {
		 "kode": "",
		 "keterangan": ""
	 }
}`,type:"json"}]},filename:"endpoint.js",groupTitle:"License",sampleRequest:[{url:"https://server.digitaltelkom.dev/oss-sandbox/updateLicense"}]},{type:"post",url:"/checkNIB",title:"Check NIB",version:"5.0.0",description:"<p>Cek Data Nomor Induk Berusaha (NIB) yang Ada di Sistem OSS</p>",name:"checkNIB",group:"NIB",examples:[{title:"Curl Request Example:",content:`curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/checkNIB' \\
--header 'user_key: {{user_key}}' \\
--header 'Content-Type: application/json' \\
--data-raw '{
    "CHECKNIB": {
        "nib": "8120207732259"
    }
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"user_key",description:"<p>Users unique access-key.</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "user_key": "846ee507525c6b00d18733e066bd5686"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"CHECKNIB",description:"<p>CHECKNIB</p>"},{group:"Parameter",type:"string(13)",optional:!1,field:"CHECKNIB.nib",description:"<p>Nomor Induk Berusaha</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
{
	"CHECKNIB": {
		"nib": ""
	}
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"object",optional:!1,field:"responcheckNIB",description:"<p>responcheckNIB</p>"},{group:"200",type:"string(3)",optional:!1,field:"responcheckNIB.kode",description:"<p>Kode Respon (*Lihat Lampiran 9)</p>"},{group:"200",type:"string(255)",optional:!1,field:"responcheckNIB.keterangan",description:"<p>Keterangan Respon</p>"},{group:"200",type:"object",optional:!1,field:"responcheckNIB.dataNIB",description:"<p>dataNIB</p>"},{group:"200",type:"string(13)",optional:!1,field:"responcheckNIB.dataNIB.nib",description:"<p>Nomor Induk Berusaha</p>"},{group:"200",type:"string(100)",optional:!1,field:"responcheckNIB.dataNIB.nama_perusahaan",description:"<p>Nama Perusahaan</p>"},{group:"200",type:"string(15)",optional:!1,field:"responcheckNIB.dataNIB.npwp_perusahaan",description:"<p>NPWP Perusahaan</p>"},{group:"200",type:"string(2)",optional:!1,field:"responcheckNIB.dataNIB.status",description:"<p>Status NIB (*Lihat Lampiran 14)</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
{
	 "responcheckNIB": {
		 "kode": "",
		 "keterangan": "",
		 "dataNIB": {
			 "nib": "",
			 "nama_perusahaan": "",
			 "npwp_perusahaan": "",
			 "status": ""
		 }
	 }
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
	 "responcheckNIB": {
		 "kode": "",
		 "keterangan": ""
	 }
}`,type:"json"}]},filename:"endpoint.js",groupTitle:"NIB",sampleRequest:[{url:"https://server.digitaltelkom.dev/oss-sandbox/checkNIB"}]},{type:"post",url:"/checkNIBError",title:"Check NIB Error",version:"5.0.0",description:"<p>Cek Data Nomor Induk Berusaha (NIB) gagal kirim dari Sistem OSS</p>",name:"checkNIBError",group:"NIB",examples:[{title:"Curl Request Example:",content:`curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/checkNIBError' \\
--header 'user_key: {{user_key}}' \\
--header 'Content-Type: application/json' \\
--data-raw '{
	 "CHECKNIBERROR": {
		 "tgl_awal": "2021-08-08",
		 "tgl_akhir": "2022-08-01"
	 }
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"user_key",description:"<p>Users unique access-key.</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "user_key": "846ee507525c6b00d18733e066bd5686"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"CHECKNIBERROR",description:"<p>Data check NIB error</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"CHECKNIBERROR.tgl_awal",description:"<p>Periode Tanggal Awal NIB Terbit (*Date Format YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"CHECKNIBERROR.tgl_akhir",description:"<p>Periode Tanggal Akhir NIB Terbit (*Date Format YYYY-MM-DD)</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
{
	 "CHECKNIBERROR": {
		 "tgl_awal": "",
		 "tgl_akhir": ""
	 }
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"object",optional:!1,field:"responcheckNIBError",description:"<p>responcheckNIBError</p>"},{group:"200",type:"string(3)",optional:!1,field:"responcheckNIBError.kode",description:"<p>Kode Respon (*Lihat Lampiran 9)</p>"},{group:"200",type:"string(255)",optional:!1,field:"responcheckNIBError.keterangan",description:"<p>Keterangan Respon</p>"},{group:"200",type:"object",optional:!1,field:"responcheckNIBError.checkNIBError",description:"<p>checkNIBError</p>"},{group:"200",type:"number(11)",optional:!1,field:"responcheckNIBError.checkNIBError.jumlah",description:"<p>Jumlah data NIB yang error</p>"},{group:"200",type:"object[]",optional:!1,field:"responcheckNIBError.checkNIBError.dataNIB",description:"<p>dataNIB</p>"},{group:"200",type:"string(13)",optional:!1,field:"responcheckNIBError.checkNIBError.dataNIB.nib",description:"<p>Nomor Induk Berusaha</p>"},{group:"200",type:"string(25)",optional:!1,field:"responcheckNIBError.checkNIBError.dataNIB.oss_id",description:"<p>(Optional) Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin</p>"},{group:"200",type:"string(12)",optional:!1,field:"responcheckNIBError.checkNIBError.dataNIB.kd_izin",description:"<p>Kode Izin Sistem K/L/D (* Lihat Lampiran 8)</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
{
  "responcheckNIBError": {
    "kode": "",
    "keterangan": "",
    "checkNIBError": {
      "jumlah": "",
      "dataNIB": [
        {
          "nib": "",
          "oss_id": "",
          "kd_izin": ""
        }
      ]
    }
  }
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
	 "responcheckNIBError": {
		 "kode": "",
		 "keterangan": ""
	 }
}`,type:"json"}]},filename:"endpoint.js",groupTitle:"NIB",sampleRequest:[{url:"https://server.digitaltelkom.dev/oss-sandbox/checkNIBError"}]},{type:"post",url:"/checkNIBUpdate",title:"Check NIB Update",version:"5.0.0",description:"<p>Cek Data Nomor Induk Berusaha (NIB) Updated yang Ada di Sistem OSS</p>",name:"checkNIBUpdate",group:"NIB",examples:[{title:"Curl Request Example:",content:`curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/checkNIBUpdate' \\
--header 'user_key: {{user_key}}' \\
--header 'Content-Type: application/json' \\
--data-raw '{
	 "CHECKNIBUPDATE": {
		 "tgl_awal": "2021-08-08",
		 "tgl_akhir": "2022-08-01"
	 }
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"user_key",description:"<p>Users unique access-key.</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "user_key": "846ee507525c6b00d18733e066bd5686"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"CHECKNIBUPDATE",description:"<p>Data check NIB updated</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"CHECKNIBUPDATE.tgl_awal",description:"<p>Periode Tanggal Awal NIB Terbit (*Date Format YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"CHECKNIBUPDATE.tgl_akhir",description:"<p>Periode Tanggal Akhir NIB Terbit (*Date Format YYYY-MM-DD)</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
{
	 "CHECKNIBUPDATE": {
		 "tgl_awal": "",
		 "tgl_akhir": ""
	 }
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"object",optional:!1,field:"responcheckNIBUpdate",description:"<p>responcheckNIBUpdate</p>"},{group:"200",type:"string(3)",optional:!1,field:"responcheckNIBUpdate.kode",description:"<p>Kode Respon (*Lihat Lampiran 9)</p>"},{group:"200",type:"string(255)",optional:!1,field:"responcheckNIBUpdate.keterangan",description:"<p>Kode Respon (*Lihat Lampiran 9)</p>"},{group:"200",type:"object",optional:!1,field:"responcheckNIBUpdate.checkNIBUpdate",description:"<p>checkNIBUpdate</p>"},{group:"200",type:"number(11)",optional:!1,field:"responcheckNIBUpdate.checkNIBUpdate.jumlah",description:"<p>Jumlah data permohonan yang telah update status</p>"},{group:"200",type:"object[]",optional:!1,field:"responcheckNIBUpdate.checkNIBUpdate.dataNIB",description:"<p>dataNIB</p>"},{group:"200",type:"string(13)",optional:!1,field:"responcheckNIBUpdate.checkNIBUpdate.dataNIB.nib",description:"<p>Nomor Induk Berusaha</p>"},{group:"200",type:"string(25)",optional:!1,field:"responcheckNIBUpdate.checkNIBUpdate.dataNIB.oss_id",description:"<p>(Optional) Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin</p>"},{group:"200",type:"string(12)",optional:!1,field:"responcheckNIBUpdate.checkNIBUpdate.dataNIB.kd_izin",description:"<p>Kode Izin Sistem K/L/D (* Lihat Lampiran 8)</p>"},{group:"200",type:"string(50)",optional:!1,field:"responcheckNIBUpdate.checkNIBUpdate.dataNIB.no_izin",description:"<p>Nomor Tanggal Izin</p>"},{group:"200",type:"string(10)",optional:!1,field:"responcheckNIBUpdate.checkNIBUpdate.dataNIB.tgl_izin",description:"<p>TanggalTerbit Izin (* Date Format YYYY-MM-DD)</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
{
  "responcheckNIBUpdate": {
    "kode": "",
    "keterangan": "",
    "checkNIBUpdate": {
      "jumlah": "",
      "dataNIB": [
        {
          "nib": "",
          "oss_id": "",
          "kd_izin": ""
          "no_izin": ""
          "tgl_izin": ""
        }
      ]
    }
  }
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
	 "responcheckNIBUpdate": {
		 "kode": "",
		 "keterangan": ""
	 }
}`,type:"json"}]},filename:"endpoint.js",groupTitle:"NIB",sampleRequest:[{url:"https://server.digitaltelkom.dev/oss-sandbox/checkNIBUpdate"}]},{type:"post",url:"/inqueryNIB",title:"Inquery NIB",version:"5.0.0",description:"<p>Inquery Data Nomor Induk Berusaha (NIB) di Sistem OSS</p>",name:"inqueryNIB",group:"NIB",examples:[{title:"Curl Request Example:",content:`curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/inqueryNIB' \\
--header 'user_key: {{user_key}}' \\
--header 'Content-Type: application/json' \\
--data-raw '{
    "INQUERYNIB": {
        "nib": "0295010152755"
    }
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"user_key",description:"<p>Users unique access-key.</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "user_key": "846ee507525c6b00d18733e066bd5686"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"INQUERYNIB",description:"<p>INQUERYNIB</p>"},{group:"Parameter",type:"string(13)",optional:!1,field:"INQUERYNIB.nib",description:"<p>Nomor Induk Berusaha</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
{
	 "INQUERYNIB": {
		 "nib": ""
	 }
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"object",optional:!1,field:"responinqueryNIB",description:"<p>Data responinqueryNIB</p>"},{group:"200",type:"string(3)",optional:!1,field:"responinqueryNIB.kode",description:"<p>Kode respon</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.keterangan",description:"<p>keterangan</p>"},{group:"200",type:"object",optional:!1,field:"responinqueryNIB.dataNIB",description:"<p>dataNIB</p>"},{group:"200",type:"string(13)",optional:!1,field:"responinqueryNIB.dataNIB.nib",description:"<p>Nomor Induk Berusaha</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.tgl_pengajuan_nib",description:"<p>Tanggal Pengajuan NIB (format date : YYYY-MM-DD)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.tgl_terbit_nib",description:"<p>Tanggal Penerbitan NIB (format date : YYYY-MM-DD)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.tgl_perubahan_nib",description:"<p>Tanggal Perubahan NIB (format date : YYYY-MM-DD)</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.oss_id",description:"<p>Oss Id adalah ID yang di Generate Sistem OSS dan Dikirimkan ke K/L/D Bersama Permohonan Nomor Induk Berusaha</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.jenis_pelaku_usaha",description:"<p>Jenis Pelaku Usaha (* Lihat Lampiran 18)</p>"},{group:"200",type:"string(20)",optional:!1,field:"responinqueryNIB.dataNIB.no_npp",description:"<p>Nomor Pendaftaraan Perusahaan Untuk BPJS Ketenagakerjaan</p>"},{group:"200",type:"string(20)",optional:!1,field:"responinqueryNIB.dataNIB.no_va",description:"<p>Nomor Pendaftaraan Perusahaan Untuk BPJS Kesehatan</p>"},{group:"200",type:"string(23)",optional:!1,field:"responinqueryNIB.dataNIB.no_wlkp",description:"<p>Nomor Wajib Lapor Ketenagakerjaan Perusahaan</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.flag_perusahaan",description:"<p>Flag :Y = Untuk Perusahaan Baru,N= Untuk Perusahaan Lama / Exist</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.flag_ekspor",description:"<p>Y : Melakukan Aktifikas Ekspor, N : Tidak Melakukan Aktifitas Ekspor</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.flag_impor",description:"<p>Y : Melakukan Aktifikas Impor, N : Tidak Melakukan Aktifitas Impor</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.jenis_api",description:"<p>Jenis Angka Pengenal Impor (API) (* Lihat Lampiran 3)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.gabung_negara",description:"<p>PMA Merupakan Gabungan Negara Atau Tidak (* Y:Gabungan Negara, N: Bukan Gabungan Negara)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.negara_pma_dominan",description:"<p>Negara Asing Yang Memiliki Modal Mayoritas</p>"},{group:"200",type:"number(20.2)",optional:!1,field:"responinqueryNIB.dataNIB.total_pma",description:"<p>Total Modal PMA</p>"},{group:"200",type:"number(20.2)",optional:!1,field:"responinqueryNIB.dataNIB.nilai_pma_dominan",description:"<p>Nilai Modal PMA Dominan</p>"},{group:"200",type:"number(20.2)",optional:!1,field:"responinqueryNIB.dataNIB.nilai_pmdn",description:"<p>Nilai Modal PMDN</p>"},{group:"200",type:"number(9.2)",optional:!1,field:"responinqueryNIB.dataNIB.persen_pma",description:"<p>Persentase Modal PMA</p>"},{group:"200",type:"number(9.2)",optional:!1,field:"responinqueryNIB.dataNIB.persen_pmdn",description:"<p>Persentase Modal PMDN</p>"},{group:"200",type:"number(5)",optional:!1,field:"responinqueryNIB.dataNIB.kd_kawasan",description:"<p>Kode Kawasan (* Lihat Lampiran di https://oss.go.id/oss/#home/po rtal/lstKawasan)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.jenis_kawasan",description:"<p>Jenis Kawasan (* Lihat Lampiran 21)</p>"},{group:"200",type:"string(5)",optional:!1,field:"responinqueryNIB.dataNIB.versi_pia",description:"<p>Versi PIA OSS</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.jangka_waktu",description:"<p>Jangka Waktu (format date : YYYY- MM-DD)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.status_badan_hukum",description:"<p>Status Badan Hukum (* Lihat Lampiran 12)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.status_penanaman_modal",description:"<p>Status Penanaman Modal (* Lihat Lampiran 1)</p>"},{group:"200",type:"string(15)",optional:!1,field:"responinqueryNIB.dataNIB.npwp_perseroan",description:"<p>NPWP Perseroan</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.nama_perseroan",description:"<p>Nama Perseroan</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.nama_singkatan",description:"<p>Nama Singkatan Perseroan</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.jenis_perseroan",description:"<p>Jenis Perseroan (* Lihat Lampiran 2)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.status_perseroan",description:"<p>Status Perseroan (*Y: Terbuka, N:Tertutup)</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.alamat_perseroan",description:"<p>Alamat Perseroan</p>"},{group:"200",type:"string(7)",optional:!1,field:"responinqueryNIB.dataNIB.rt_rw_perseroan",description:"<p>Rt Rw Perseroan</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.kelurahan_perseroan",description:"<p>Kelurahan Perseroan</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.perseroan_daerah_id",description:"<p>ID Daerah Perseroan (* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"200",type:"string(5)",optional:!1,field:"responinqueryNIB.dataNIB.kode_pos_perseroan",description:"<p>Kode Pos Perseroan</p>"},{group:"200",type:"string(20)",optional:!1,field:"responinqueryNIB.dataNIB.nomor_telpon_perseroan",description:"<p>Nomor Telepon Perseroan</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.email_perusahaan",description:"<p>Email Perusahaan</p>"},{group:"200",type:"string(20.2)",optional:!1,field:"responinqueryNIB.dataNIB.dalam_bentuk_uang",description:"<p>Modal Dalam Bentuk Uang (Valuta : IDR)</p>"},{group:"200",type:"string(50000)",optional:!1,field:"responinqueryNIB.dataNIB.dalam_bentuk_lain",description:"<p>Modal Dalam Bentuk Lainnya</p>"},{group:"200",type:"string(20.2)",optional:!1,field:"responinqueryNIB.dataNIB.total_modal_dasar",description:"<p>Total Modal Dasar (Valuta : IDR)</p>"},{group:"200",type:"string(20.2)",optional:!1,field:"responinqueryNIB.dataNIB.total_modal_ditempatkan",description:"<p>Total Modal Ditempatkan (Valuta : IDR)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.flag_umk",description:"<p>Flag yg menunjukkan umk atau non umk</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham",description:"<p>pemegang_saham</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.jenis_pemegang_saham",description:"<p>Jenis Pemegang Saham (* Lihat Lampiran 13)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.flag_asing",description:"<p>Asal Pemegang Saham dari Dalam Negeri / Luar Negeri (Value : Y = asing, N = Bukan Asing)</p>"},{group:"200",type:"string(20.0)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.total_modal_pemegang",description:"<p>Total Modal Pemegang Saham (Valuta : IDR)</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.jabatan_pemegang_saham",description:"<p>Jabatan Pemegang Saham</p>"},{group:"200",type:"string(500)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.nama_pemegang_saham",description:"<p>Nama Pemegang Saham</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.jns_identitas_pemegang_saham",description:"<p>Jenis Identitas Pemegang Saham (* Lihat Lampiran 4)</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.no_identitas_pemegang_saham",description:"<p>Nomor Identitas Pemegang Saham</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.valid_identitas_pemegang_saham",description:"<p>Valid / Masa Berlaku Pemegang Saham (Format Date : YYYY-MM- DD)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.negara_asal_pemegang_saham",description:"<p>Negara asal pemegang saham</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.pengendali_pemegang_saham",description:"<p>Nama Pengendali Pemegang Saham</p>"},{group:"200",type:"string(15)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.npwp_pemegang_saham",description:"<p>NPWP Pemegang Saham</p>"},{group:"200",type:"string(1024)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.alamat_pemegang_saham",description:"<p>Alamat Pemegang Saham</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.fax_pemegang_saham",description:"<p>Fax Pemegang Saham</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.email_pemegang_saham",description:"<p>Email Pemegang Saham</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.flag_pajak_pemegang_saham",description:"<p>Flag Validasi Pajak Pemegang Saham (* Lihat Lampiran 19)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.ket_pajak_pemegang_saham",description:"<p>ket_pajak_pemegang_saham</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb",description:"<p>penanggung_jwb</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.flag_asing",description:"<p>Asal penanggung jawab dari Dalam Negeri / Luar Negeri (Value : Y = asing, N = Bukan Asing)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.jns_identitas_penanggung_jwb",description:"<p>Jenis idetitas penanggung jawab</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.no_identitas_penanggung_jwb",description:"<p>no_identitas_penanggung_jwb</p>"},{group:"200",type:"string(500)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.nama_penanggung_jwb",description:"<p>nama_penanggung_jwb</p>"},{group:"200",type:"string(250)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.jabatan_penanggung_jwb",description:"<p>jabatan_penanggung_jwb</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.kebangsaan_penanggung_jwb",description:"<p>kebangsaan_penanggung_jwb</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.negara_asal_penanggung_jwb",description:"<p>negara_asal_penanggung_jwb</p>"},{group:"200",type:"string(15)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.npwp_penanggung_jwb",description:"<p>npwp_penanggung_jwb</p>"},{group:"200",type:"string(1024)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.alamat_penanggung_jwb",description:"<p>alamat_penanggung_jwb</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.jalan_penanggung_jwb",description:"<p>jalan_penanggung_jwb</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.blok_penanggung_jwb",description:"<p>Alamat Blok Penanggung Jawab</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.no_penanggung_jwb",description:"<p>Alamat Nomor Penanggung Jawab</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.rt_rw_penanggung_jwb",description:"<p>RT RW Penanggung Jawab</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.kelurahan_penanggung_jwb",description:"<p>Kelurahan Penanggung Jawab</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.daerah_id_penanggung_jwb",description:"<p>ID Daerah Penanggung Jawab (* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"200",type:"string(5)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.kode_pos_penanggung_jwb",description:"<p>Kode Pos Penanggung Jawab</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.no_telp_penanggung_jwb",description:"<p>Nomor Telepon Penanggung Jawab</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.no_hp_penanggung_jwb",description:"<p>Nomor Handphone Penanggung Jawab</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.no_fax_penanggung_jwb",description:"<p>Nomor Fax Penanggung Jawab</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.email_penanggung_jwb",description:"<p>Email Penanggung Jawab</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.flag_pajak_penanggung_jwb",description:"<p>Flag Validasi Pajak Penanggung Jawab (* Lihat Lampiran 19)</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.ket_pajak_penanggung_jwb",description:"<p>Keterangan Validasi Pajak Penanggung Jawab</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.no_pengesahan",description:"<p>Nomor Pengesahan Akta Dari Kumham</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.tgl_pengesahan",description:"<p>Tanggal Pengesahan Akta Dari Kumham (format date : YYYY- MM-DD)</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.no_akta_lama",description:"<p>Nomor Akta Lama Sebelum Perubahan</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.tgl_akta_lama",description:"<p>Tanggal Akta Lama Sebelum Perubahan (format date : YYYY- MM-DD)</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.no_pengesahan_lama",description:"<p>Nomor Pengesahan Akta Lama Sebelum Perubahan Dari Kumham</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.tgl_pengesahan_lama",description:"<p>Tanggal Pengesahan Akta Lama Sebelum Perubahan Dari Kumham (format date : YYYY-MM-DD)</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.legalitas",description:"<p>legalitas</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.legalitas.jenis_legal",description:"<p>Jenis Legal Perusahaan (* Lihat Lampiran 7)</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.legalitas.no_legal",description:"<p>Nomor Legal Perusahaan</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.legalitas.tgl_legal",description:"<p>Tanggal Legal Perusahaan (format date : YYYY-MM-DD)</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.legalitas.alamat_notaris",description:"<p>Alamat Notaris</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.legalitas.nama_notaris",description:"<p>Nama Notaris</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.legalitas.telepon_notaris",description:"<p>Telepon Notaris</p>"},{group:"200",type:"object",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka",description:"<p>data_rptka</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.jenis_rptka",description:"<p>Jenis Flag RPTKA *( 01 : Baru, 02: Perubahan)</p>"},{group:"200",type:"string(20)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.no_rptka",description:"<p>No Bacode RPTKA</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_awal",description:"<p>Masa Berlaku Dari Tanggal(format date : YYYY-MM-DD)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_akhir",description:"<p>Masa Berlaku Sampai Tanggal(format date : YYYY-MM- DD)</p>"},{group:"200",type:"number(20.2)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_gaji",description:"<p>Gaji Tenaga Asing</p>"},{group:"200",type:"number(11)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.jumlah_tka_rptka",description:"<p>Jumlah Tenaga Kerja Asing (TKA) dalam Rencana Penggunaan Tenaga Kerja Asing (RPTKA)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.jangka_penggunaan_waktu",description:"<p>Jangka Waktu Penggunaan Tenaga Kerja Asing (TKA) dalam Izin Rencana Penggunaan Tenaga Kerja Asing (RPTKA) (format date : YYYY- MM-DD)</p>"},{group:"200",type:"number(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.jangka_waktu_permohonan_rptka",description:"<p>Jangka Waktu Permohonan RPTKA</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan",description:"<p>rptka_jabatan</p>"},{group:"200",type:"number(11)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.id_jabatan",description:"<p>ID Jabatan Tenaga Kerja Asing berdasarkan https://jdih.kemnaker.go.id/data_puu/KEP247_MENX_2011.pd\xA0f</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.jabatan",description:"<p>Nama Jabatan</p>"},{group:"200",type:"number(11)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.jumlah",description:"<p>Jumlah Orang Yang Memiliki Jabatan</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.tgl_mulai",description:"<p>Tanggal Mulai Jabatan format date</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.tgl_selesai",description:"<p>Tanggal Selesai Jabatan format date : YYYY-MM-DD)</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.keterangan",description:"<p>Keterangan</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping",description:"<p>rptka_tki_pendamping</p>"},{group:"200",type:"number(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.id_jabatan",description:"<p>Id Jabatan</p>"},{group:"200",type:"number(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.id_pendamping",description:"<p>Id TKI Pendamping</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.nama",description:"<p>Nama TKI Pendamping</p>"},{group:"200",type:"string(20)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.nik",description:"<p>Nomor NIK TKI Pendamping</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.jabatan",description:"<p>Nama Jabatan TKI Pendamping</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.hp",description:"<p>Nomor HP TKI Pendamping</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.email",description:"<p>Email TKI Pendampiag</p>"},{group:"200",type:"string(65535)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.foto",description:"<p>Foto TKI Pendamping Attachment File dalam Bentukbentuk base64 dengan format (data:image/jpeg;base64,string() ENCODE IMAGE)</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.pendidikan_min",description:"<p>Tingkat Pendidikan Minimal TKI Pendamping</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.sertifikat",description:"<p>Sertifikat Kompetensi TKI Pendamping</p>"},{group:"200",type:"number(11)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.pengalaman_kerja",description:"<p>Pengalaman Kerja TKI Pendamping (dalam tahun)</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.keterangan",description:"<p>Keterangan</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_negara",description:"<p>rptka_negara</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_negara.id_negara",description:"<p>Negara Asal Tenaga Kerja Asing(* Sumber Kodefikasi Negara Mengikuti Standar Unedifact : http://www.unece.org/cefact/loco de/service/location )</p>"},{group:"200",type:"number(11)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_negara.jumlah",description:"<p>Jumlah Tenaga Kerja Asing (TKA) dalam Rencana Penggunaan Tenaga Kerja Asing (RPTKA)</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_lokasi",description:"<p>rptka_lokasi</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_lokasi.lokasi_id",description:"<p>ID Daerah Penanggung Jawab (* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"200",type:"number(11)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_lokasi.jumlah",description:"<p>Jumlah Tenaga Kerja Asing (TKA) dalam Rencana Penggunaan Tenaga Kerja Asing (RPTKA)</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek",description:"<p>data_proyek</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.id_proyek",description:"<p>ID / Kode Proyek</p>"},{group:"200",type:"string(26)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.nomor_proyek",description:"<p>Nomor Permohonan Proyek</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.uraian_usaha",description:"<p>Uraian Usaha Proyek</p>"},{group:"200",type:"number(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jumlah_tki_l",description:"<p>Jumlah Tenaga Kerja Indonesia (TKI) Laki -Laki</p>"},{group:"200",type:"number(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jumlah_tki_p",description:"<p>Jumlah Tenaga Kerja Indonesia (TKI) Perempuan</p>"},{group:"200",type:"number(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jumlah_tka_l",description:"<p>Jumlah Tenaga Kerja Asing (TKA) Laki -Laki</p>"},{group:"200",type:"number(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jumlah_tka_p",description:"<p>Jumlah Tenaga Kerja Asing (TKA) Perempuan</p>"},{group:"200",type:"string(7)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.kbli",description:"<p>Kode KBLI (* Menggunakan Kode KBLI Tahun 2020)</p>"},{group:"200",type:"string(3)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.sektor",description:"<p>Sektor Usaha Berdasarkan KBLI (* Lihat Lampiran 20)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.memiliki_menguasai",description:"<p>Sudah Memiliki atar Menguasai Lahan (Value : Y = Sudah Memiliki atau Menguasai Lahan, N = Belum Memiliki atau Menguasai Lahan)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jenis_lokasi",description:"<p>Lokasi Berada dalam Lintas Administratif (Value : Y = Berada Dalam Lintas Administrasi, N = Bukan Berada Dalam Lintas Administrasi)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.status_tanah",description:"<p>Status Kepemilikan Tanah (* Lihat Lampiran 5)</p>"},{group:"200",type:"number(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.luas_tanah",description:"<p>Luas Bidang tanah</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.satuan_luas_tanah",description:"<p>Satuan Luas Tanah (*Lihat Lampiran 17)</p>"},{group:"200",type:"number(19)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.pembelian_pematang_tanah",description:"<p>Nilai Pembelian Pematang Tanah (Valuta:IDR)</p>"},{group:"200",type:"number(19)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.bangunan_gedung",description:"<p>Nilai Bangunan Gedung (Valuta:IDR)</p>"},{group:"200",type:"number(19)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.mesin_peralatan",description:"<p>Nilai Mesin Peralatan (Valuta:IDR)</p>"},{group:"200",type:"number(19)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.mesin_peralatan_usd",description:"<p>Nilai Mesin Peralatan dalam USD</p>"},{group:"200",type:"number(19)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.investasi_lain",description:"<p>Investasi Lainnya</p>"},{group:"200",type:"number(19)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.sub_jumlah",description:"<p>Jumlah Asset (Valuta:IDR)</p>"},{group:"200",type:"number(19)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.modal_kerja",description:"<p>Nilai Modal Kerja (Valuta:IDR)</p>"},{group:"200",type:"number(19)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jumlah_investasi",description:"<p>Nilai Jumlah Investasi (Valuta:IDR)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.tanggal_kurs",description:"<p>Tanggal Kurs (format date : YYYY- MM-DD)</p>"},{group:"200",type:"number(19)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.nilai_kurs",description:"<p>Nilai Kurs</p>"},{group:"200",type:"number(11)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.kd_kawasan",description:"<p>Kode Kawasan (* Lihat Lampiran 30)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jawab_lokasi_b",description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point B</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jawab_lokasi_c",description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point C</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jawab_lokasi_d",description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point D</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jawab_lokasi_e",description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point E</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jawab_lokasi_f",description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point F</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jawab_lokasi_g",description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point G</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.flag_perluasan",description:"<p>Proyek Merupakan Perluasan/Pengembangan Usaha Atau Bukan (Value : Y = Proses Perluasan/Pengembangan Usaha, N = Bukan Proses Perluasan/Pengembangan Usaha)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.flag_cabang",description:"<p>Proyek Sebagai Kantor Cabang Atau Bukan (Value : Y = Sebagai Kantor Cabang, N = Bukan Sebagai Kantor Cabang)</p>"},{group:"200",type:"string(15)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.npwp_cabang",description:"<p>NPWP Kantor Cabang</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.nama_cabang",description:"<p>Nama Kantor Cabang / Proyek</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jenis_identitas_pj",description:"<p>Jenis Identitas Penanggung Jawab Proyek (* Lihat Lampiran 4)</p>"},{group:"200",type:"string(16)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.no_identitas_pj",description:"<p>No Identitas Penanggung Jawab Proyek</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.nama_pj",description:"<p>Nama Penanggung Jawab Proyek</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.status_proyek",description:"<p>Status Proyek(* Lihat Lampiran 22)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jenis_proyek",description:"<p>Jenis Proyek(* Lihat Lampiran 26)</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.nama_kegiatan",description:"<p>Nama Proyek/ Kegiatan Proyek, Untuk Perseorangan Digunakan Untuk Mencatat Nama Dagangannya Misal (UD. Perciban Jaya)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.flag_merger",description:"<p>Flag Proyek Hasil Merger atau Bukan (Y: Hasil Merger, N: Bukan Hasil Merger)</p>"},{group:"200",type:"string(15)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.npwp_perseroan_merger",description:"<p>NPWP Perusahaan Merger</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.nama_perseroan_merger",description:"<p>Nama Perusahaan Merger</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.skala_usaha",description:"<p>Skala usaha</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.skala_resiko",description:"<p>Skala resiko</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.deskripsi_kegiatan",description:"<p>Deskripsi kegiatan</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek",description:"<p>data_lokasi_proyek</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.id_proyek_lokasi",description:"<p>ID / Kode Lokasi Proyek</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.proyek_daerah_id",description:"<p>Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019: https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"200",type:"string(3)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.kd_kawasan",description:"<p>Kode Kawasan (* Lihat Lampiran 30)</p>"},{group:"200",type:"string(65535)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.alamat_usaha",description:"<p>Alamat Kegiatan Proyek / Usaha</p>"},{group:"200",type:"string(6)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.id_kegiatan",description:"<p>Id Kegiatan Usaha Berdasarkan RDTR Digital</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.response_kegiatan",description:"<p>Response Kegiatan Usaha Berdasarkan Validasi Kegiatan RDTR Digital</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.jenis_kawasan",description:"<p>Jenis Kawasan (* Lihat Lampiran 16)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.jenis_lokasi",description:"<p>Jenis Lokasi Lintas Administratif atau Tidak (01 : Lintas Administratif, 02 : Tidak Lintas Administratif)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.status_lokasi",description:"<p>Status Lokasi(* Lihat Lampiran 25)</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.data_lokasi_proyek",description:"<p>data_lokasi_proyek</p>"},{group:"200",type:"number(11)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.data_lokasi_proyek.serial",description:"<p>Serial Koordinat</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.data_lokasi_proyek.lat_lng",description:"<p>Koordinat Latitude &amp; Longitude</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek",description:"<p>data_posisi_proyek</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek.id_proyek_posisi",description:"<p>ID / Kode Posisi Proyek</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek.id_proyek_lokasi",description:"<p>ID / Kode Lokasi Proyek</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek.posisi_lokasi",description:"<p>Posisi Lokasi (* Lihat Lampiran 24)</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk",description:"<p>data_proyek_produk</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.id_produk",description:"<p>ID / Kode Produk</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.id_proyek",description:"<p>ID / Kode Proyek</p>"},{group:"200",type:"string(7)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.kbli",description:"<p>Kode KBLI (* Menggunakan Kode KBLI Tahun 2020)</p>"},{group:"200",type:"number(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.id_bidang_usaha",description:"<p>ID Bidang Usaha Berdasarkan Kodefikasi Data Negatif Investasi (DNI) (* Lihat Lampiran 15)</p>"},{group:"200",type:"string(1024)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.jenis_produksi",description:"<p>Rencana Produksi Yang Dihasilkan</p>"},{group:"200",type:"number(20.2)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.kapasitas",description:"<p>Kapasitas produksi suatu produk</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.satuan",description:"<p>Satuan Dari Kapasitas Produksi</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.merk_dagang",description:"<p>Merk Dagang</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.pemegang_haki",description:"<p>Pemegang Hak Cipta</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.pemegang_paten",description:"<p>Pemegang Hak Paten</p>"},{group:"200",type:"string(20)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.pi_nomor",description:"<p>Nomor Pendaftaran Penanaman Modal Untuk Case Grand Father Clause (GFC)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.pi_tanggal",description:"<p>Tanggal Pendaftaran Penanaman Modal Untuk Case Grand Father Clause (GFC) format date : YYYY- MM-DD</p>"},{group:"200",type:"string(16)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.pi_npwp",description:"<p>NPWP Pendaftaran Penanaman Modal Untuk Case Grand Father Clause (GFC)</p>"},{group:"200",type:"string(9)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.id_kbli_ta",description:"<p>Penanda Bahwa Cakupan Produk Untuk Kebutuhan Tax Allowance</p>"},{group:"200",type:"number(3.2)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.tkdn",description:"<p>Tingkat Kandungan Dalam Negeri</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.data_dni",description:"<p>data_dni</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_dni.kd_dni",description:"<p>Kodefikasi Data Negatif Investasi (DNI) (* Lihat Lampiran 15)</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist",description:"<p>data_checklist</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.id_produk",description:"<p>ID Produk</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.id_proyek",description:"<p>ID / Kode Proyek</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.id_izin",description:"<p>Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin</p>"},{group:"200",type:"string(3)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.jenis_izin",description:"<p>Jenis Perizinan (* Lihat Lampiran 27)</p>"},{group:"200",type:"string(13)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.kd_izin",description:"<p>Kode Izin Sistem K/L/D (* service getDataReferensi kode : 8)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.kd_daerah",description:"<p>Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.nama_izin",description:"<p>Nama Izin</p>"},{group:"200",type:"string(150)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.no_izin",description:"<p>Nomor Izin</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.tgl_izin",description:"<p>Tanggal Izin (format date : YYYY-MM-DD)</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.instansi",description:"<p>Nama Instansi</p>"},{group:"200",type:"number(19)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.id_bidang_spesifik",description:"<p>ID Bidang Spesifik</p>"},{group:"200",type:"string(65535)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.bidang_spesifik",description:"<p>Uraian Bidang Spesifik</p>"},{group:"200",type:"number(19)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.id_kewenangan",description:"<p>ID Kewenangan</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.parameter_kewenangan",description:"<p>Parameter Kewenangan Izin</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.kewenangan",description:"<p>00: Kewenangan Pusat; 01: Kewenangan Provinsi; 02: Kewenangan Kab/Kota</p>"},{group:"200",type:"string(65535)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.file_izin",description:"<p>Attachment File Izin Hasil Pemenuhan Komitmen dari K/L/D dalam Bentuk File PDF Berupa Link (* Ukuran File Maks: 2MB)</p>"},{group:"200",type:"string(65535)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.file_izin_oss",description:"<p>Attachment File Izin yang diterbitkan ole Lembaga OSS dalam Bentuk File PDF/Image Berupa Link (* Ukuran File Maks: 2MB)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.flag_checklist",description:"<p>Flag Checklist Komitmen (* Lihat Lampiran 28)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.status_checklist",description:"<p>Status Penerbitan Izin / Checklist (* Lihat Lampiran 10)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.flag_transaksional",description:"<p>Flag : Y/N, Flag Izin Komersial / Operasional Diajukan Transaksional (Bisa Mengajukan Berulang)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.flag_perpanjangan",description:"<p>Flag : Y/N, Flag Bahwa Izin Usaha Ini Adalah Hasil Perpanjangan Dari Zin Usaha Yang Terbit Sebelum OSS</p>"},{group:"200",type:"string(15)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.kd_dokumen",description:"<p>Kode dokumen izin lingkungan</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.nm_",description:"<p>dokumen	Nama dokumen izin lingkungan</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.data_persyaratan",description:"<p>data_persyaratan</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.data_persyaratan.id_syarat",description:"<p>Id / Kode Persyaratan</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.data_persyaratan.no_dokumen",description:"<p>Nomor Dokumen Persyaratan</p>"},{group:"200",type:"string(8)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.data_persyaratan.tgl_dokumen",description:"<p>Tanggal Dokumen Persyaratan (format date : YYYY-MM-DD)</p>"},{group:"200",type:"string(65535)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.data_persyaratan.file_dokumen",description:"<p>Attachment File Izin dalam Bentuk File PDF Berupa Link (* Ukuran File Maks: 2MB)</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.data_persyaratan.keterangan",description:"<p>Keterangan Dokumen Persyaratan</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.jenis_id_user_proses",description:"<p>Kode Jenis Identitas (* Lihat Lampiran 4)</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.no_id_user_proses",description:"<p>No Identitas Pemroses NIB</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.nama_user_proses",description:"<p>Nama User Pemroses NIB</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.email_user_proses",description:"<p>Email User Pemroses NIB</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.hp_user_proses",description:"<p>No HP Pemroses NIB</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.alamat_user_proses",description:"<p>Alamat Pemroses NIB</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.jns_kelamin_user_proses",description:"<p>Jenis Kelamin Pemroses NIB (L : Laki-Laki, P : Perempuan)</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.tempat_lahir_user_proses",description:"<p>Tempat Lahir Pemroses NIB</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.tgl_lahir_user_proses",description:"<p>Tanggal Lahir User Pemroses (format date : YYYY-MM-DD)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.daerah_id_user_proses",description:"<p>ID Daerah User Pemroses(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.rt_rw_user_proses",description:"<p>RT RW Pemroses NIB</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.agama_user_proses",description:"<p>Agama Pemroses NIB</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.status_perkawinan_user_proses",description:"<p>Status Perkawinan Pemroses NIB</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.pekerjaan_user_proses",description:"<p>Pekerjaan Pemroses NIB</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.status_nib",description:"<p>Status Penerbitan NIB (* Lihat Lampiran 14)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.tipe_dokumen",description:"<p>Tipe Dokumen (9:Original, 5:Update, 3:Pencabutan, 4:Pembatalan)</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
{
  "responinqueryNIB": {
    "kode": "",
    "keterangan": "",
    "dataNIB": {
      "nib": "",
      "tgl_pengajuan_nib": "",
      "tgl_terbit_nib": "",
      "tgl_perubahan_nib": "",
      "oss_id": "",
      "jenis_pelaku_usaha": "",
      "no_npp": "",
      "no_va": "",
      "no_wlkp": "",
      "flag_perusahaan": "",
      "flag_ekspor": "",
      "flag_impor": "",
      "jenis_api": "",
      "gabung_negara": "",
      "negara_pma_dominan": "",
      "total_pma": "",
      "nilai_pma_dominan": "",
      "nilai_pmdn": "",
      "persen_pma": "",
      "persen_pmdn": "",
      "kd_kawasan": "",
      "jenis_kawasan": "",
      "versi_pia": "",
      "jangka_waktu": "",
      "status_badan_hukum": "",
      "status_penanaman_modal": "",
      "npwp_perseroan": "",
      "nama_perseroan": "",
      "nama_singkatan": "",
      "jenis_perseroan": "",
      "status_perseroan": "",
      "alamat_perseroan": "",
      "rt_rw_perseroan": "",
      "kelurahan_perseroan": "",
      "perseroan_daerah_id": "",
      "kode_pos_perseroan": "",
      "nomor_telpon_perseroan": "",
      "email_perusahaan": "",
      "dalam_bentuk_uang": "",
      "dalam_bentuk_lain": "",
      "total_modal_dasar": "",
      "total_modal_ditempatkan": "",
      "flag_umk": "",
      "pemegang_saham": [
        {
          "jenis_pemegang_saham": "",
          "flag_asing": "",
          "total_modal_pemegang": "",
          "jabatan_pemegang_saham": "",
          "nama_pemegang_saham": "",
          "jns_identitas_pemegang_saham": "",
          "no_identitas_pemegang_saham": "",
          "valid_identitas_pemegang_saham": "",
          "negara_asal_pemegang_saham": "",
          "pengendali_pemegang_saham": "",
          "npwp_pemegang_saham": "",
          "alamat_pemegang_saham": "",
          "fax_pemegang_saham": "",
          "email_pemegang_saham": "",
          "flag_pajak_pemegang_saham": "",
          "ket_pajak_pemegang_saham": ""
        }
      ],
      "penanggung_jwb": [
        {
          "flag_asing": "",
          "jns_identitas_penanggung_jwb": "",
          "no_identitas_penanggung_jwb": "",
          "nama_penanggung_jwb": "",
          "jabatan_penanggung_jwb": " ",
          "kebangsaan_penanggung_jwb": "",
          "negara_asal_penanggung_jwb": "",
          "npwp_penanggung_jwb": "",
          "alamat_penanggung_jwb": "",
          "jalan_penanggung_jwb": "",
          "blok_penanggung_jwb": "",
          "no_penanggung_jwb": "",
          "rt_rw_penanggung_jwb": "",
          "kelurahan_penanggung_jwb": "",
          "daerah_id_penanggung_jwb": "",
          "kode_pos_penanggung_jwb": "",
          "no_telp_penanggung_jwb": "",
          "no_hp_penanggung_jwb": "",
          "no_fax_penanggung_jwb": "",
          "email_penanggung_jwb": "",
          "flag_pajak_penanggung_jwb": "",
          "ket_pajak_penanggung_jwb": ""
        }
      ],
      "no_pengesahan": "",
      "tgl_pengesahan": "",
      "no_akta_lama": "",
      "tgl_akta_lama": "",
      "no_pengesahan_lama": "",
      "tgl_pengesahan_lama": "",
      "legalitas": [
        {
          "jenis_legal": "",
          "no_legal": "",
          "tgl_legal": "",
          "alamat_notaris": "",
          "nama_notaris": "",
          "telepon_notaris": ""
        }
      ],
      "data_rptka": {
        "jenis_rptka": "",
        "no_rptka": "",
        "rptka_awal": "",
        "rptka_akhir": "",
        "rptka_gaji": "",
        "jumlah_tka_rptka": "",
        "jangka_penggunaan_waktu": "",
        "jangka_waktu_permohonan_rptka": "",
        "rptka_jabatan": [
          {
            "id_jabatan": "",
            "jabatan": "",
            "jumlah": "",
            "tgl_mulai": "",
            "tgl_selesai": "",
            "keterangan": "",
            "rptka_tki_pendamping": [
              {
                "id_jabatan": "",
                "id_pendamping": "",
                "nama": "",
                "nik": "",
                "jabatan": "",
                "hp": "",
                "email": "",
                "foto": "",
                "pendidikan_min": "",
                "sertifikat": "",
                "pengalaman_kerja": "",
                "keterangan": ""
              }
            ]
          }
        ],
        "rptka_negara": [{ "id_negara": "", "jumlah": "" }],
        "rptka_lokasi": [{ "lokasi_id": "", "jumlah": "" }]
      },
      "data_proyek": [
        {
          "id_proyek": "",
          "nomor_proyek": "",
          "uraian_usaha": "",
          "jumlah_tki_l": "",
          "jumlah_tki_p": "",
          "jumlah_tka_l": "",
          "jumlah_tka_p": "",
          "kbli": "",
          "sektor": "",
          "memiliki_menguasai": "",
          "jenis_lokasi": "",
          "status_tanah": "",
          "luas_tanah": "",
          "satuan_luas_tanah": "",
          "pembelian_pematang_tanah": "",
          "bangunan_gedung": "",
          "mesin_peralatan": "",
          "mesin_peralatan_usd": "",
          "investasi_lain": "",
          "sub_jumlah": "",
          "modal_kerja": "",
          "jumlah_investasi": "",
          "tanggal_kurs": "",
          "nilai_kurs": "",
          "kd_kawasan": "",
          "jawab_lokasi_b": "",
          "jawab_lokasi_c": "",
          "jawab_lokasi_d": "",
          "jawab_lokasi_e": "",
          "jawab_lokasi_f": "",
          "jawab_lokasi_g": "",
          "flag_perluasan": "",
          "flag_cabang": "",
          "npwp_cabang": "",
          "nama_cabang": "",
          "jenis_identitas_pj": "",
          "no_identitas_pj": "",
          "nama_pj": "",
          "status_proyek": "",
          "jenis_proyek": "",
          "nama_kegiatan": "",
          "flag_merger": "",
          "npwp_perseroan_merger": "",
          "nama_perseroan_merger": "",
          "skala_usaha": "",
          "skala_resiko": "",
          "deskripsi_kegiatan": "",
          "data_lokasi_proyek": [
            {
              "id_proyek_lokasi": "",
              "proyek_daerah_id": "",
              "kd_kawasan": "",
              "alamat_usaha": "",
              "id_kegiatan": "",
              "response_kegiatan": "",
              "jenis_kawasan": "",
              "jenis_lokasi": "",
              "status_lokasi": "",
              "data_lokasi_proyek": [{ "serial": "", "lat_lng": "" }],
              "data_posisi_proyek": [
                {
                  "id_proyek_posisi": "",
                  "id_proyek_lokasi": "",
                  "posisi_lokasi": ""
                }
              ]
            }
          ],
          "data_proyek_produk": [
            {
              "id_produk": "",
              "id_proyek": "",
              "kbli": "",
              "id_bidang_usaha": "",
              "jenis_produksi": "",
              "kapasitas": "",
              "satuan": "",
              "merk_dagang": "",
              "pemegang_haki": "",
              "pemegang_paten": "",
              "pi_nomor": "",
              "pi_tanggal": "",
              "pi_npwp": "",
              "id_kbli_ta": "",
              "tkdn": ""
            }
          ]
        }
      ],
      "data_dni": [{ "kd_dni": "" }],
      "data_checklist": [
        {
          "id_produk": "",
          "id_proyek": "",
          "id_izin": "",
          "jenis_izin": "",
          "kd_izin": "",
          "kd_daerah": "",
          "nama_izin": "",
          "no_izin": "",
          "tgl_izin": "",
          "instansi": "",
          "id_bidang_spesifik": "",
          "bidang_spesifik": "",
          "id_kewenangan": "",
          "parameter_kewenangan": "",
          "kewenangan": "",
          "file_izin": "",
          "file_izin_oss": "",
          "flag_checklist": "",
          "status_checklist": "",
          "flag_transaksional": "",
          "flag_perpanjangan": "",
          "kd_dokumen": "",
          "nm_ dokumen": "",
          "data_persyaratan": [
            {
              "id_syarat": "",
              "no_dokumen": "",
              "tgl_dokumen": "",
              "file_dokumen": "",
              "keterangan": ""
            }
          ]
        }
      ],
      "jenis_id_user_proses": "",
      "no_id_user_proses": "",
      "nama_user_proses": "",
      "email_user_proses": "",
      "hp_user_proses": "",
      "alamat_user_proses": "",
      "jns_kelamin_user_proses": "",
      "tempat_lahir_user_proses": "",
      "tgl_lahir_user_proses": "",
      "daerah_id_user_proses": "",
      "rt_rw_user_proses": "",
      "agama_user_proses": "",
      "status_perkawinan_user_proses": "",
      "pekerjaan_user_proses": "",
      "status_nib": "",
      "tipe_dokumen ": ""
    }
  }
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
	 "responinqueryNIB": {
		 "kode": "",
		 "keterangan": ""
	 }
}`,type:"json"}]},filename:"endpoint.js",groupTitle:"NIB",sampleRequest:[{url:"https://server.digitaltelkom.dev/oss-sandbox/inqueryNIB"}]},{type:"post",url:"/inqueryNIBSTPW",title:"Inquery NIB SPTW",version:"5.0.0",description:"<p>Inquery Data Nomor Induk Berusaha (NIB) Surat Tanda Pendaftaraan Waralaba (STPW) di Sistem OSS</p>",name:"inqueryNIBSTPW",group:"NIB",examples:[{title:"Curl Request Example:",content:`curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/inqueryNIBSTPW' \\
--header 'user_key: {{user_key}}' \\
--header 'Content-Type: application/json' \\
--data-raw '{
 "INQUERYNIBSTPW": {
    "nib": "2334444"
 }
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"user_key",description:"<p>Users unique access-key.</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "user_key": "846ee507525c6b00d18733e066bd5686"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"INQUERYNIBSTPW",description:"<p>INQUERYNIBSTPW</p>"},{group:"Parameter",type:"string(13)",optional:!1,field:"INQUERYNIBSTPW.nib",description:"<p>Nomor Induk Berusaha</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
{
	 "INQUERYNIBSTPW": {
		 "nib": ""
	 }
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"object",optional:!1,field:"responinqueryNIBSTPW",description:"<p>responinqueryNIBSTPW</p>"},{group:"200",type:"string(3)",optional:!1,field:"responinqueryNIBSTPW.kode",description:"<p>kode</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIBSTPW.keterangan",description:"<p>keterangan</p>"},{group:"200",type:"object",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW",description:"<p>dataNIBSTPW</p>"},{group:"200",type:"string(13)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.nib",description:"<p>Nomor Induk Berusaha</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.tgl_pengajuan_nib",description:"<p>Tanggal Pengajuan NIB (* Date Format YYYY-MM-DD)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.tgl_terbit_nib",description:"<p>Tanggal Terbit NIB (* Date Format YYYY-MM-DD)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.tgl_perubahan_nib",description:"<p>Tanggal Perubahan NIB (* Date Format YYYY-MM-DD)</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.oss_id",description:"<p>Oss ID adalah ID yang di Generate Sistem OSS dan Dikirimkan ke L/L/D Bersama Permohonan Nomor Induk Berusaha (NIB)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.jenis_pelaku_usaha",description:"<p>Jenis Pelaku Usaha (* Lihat Lampiran 18)</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.nama_pj",description:"<p>Nama Penanggung Jawab</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.alamat_pj",description:"<p>Alamat Penanggung Jawab</p>"},{group:"200",type:"string(20)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.paspor_pj",description:"<p>Nomor Paspor Penanggung Jawab</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.email_pj",description:"<p>Email Penanggung Jawab</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.asal_negara_pj",description:"<p>Negara Asal Penanggung Jawab (* Sumber Kodefikasi Negara Mengikuti Standar Unedifact : http://www.unece.org/cefact/locode/ service/location )</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.telp_pj",description:"<p>Telpon Penanggung Jawab</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.nama_perusahaan_ln",description:"<p>Nama Prinsipal</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.alamat_perusahaan_ln",description:"<p>Alamat Prinsipal</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.negara_perusahaan_ln",description:"<p>Negara Prinsipal (* Sumber Kodefikasi Negara Mengikuti Standar Unedifact: http://www.unece.org/cefact/locode/ service/location )</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.telp_perusahaan_ln",description:"<p>Telpon Prinsipal</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.jangka_waktu",description:"<p>Jangka Waktu (* Date Format YYYY- MM-DD)</p>"},{group:"200",type:"string(65535)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.file_prospektus",description:"<p>Attachment File Prospektus dalam Bentuk File PDF/Image Berupa Link (* Ukuran File Maks: 2MB)</p>"},{group:"200",type:"string(5)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.versi_pia",description:"<p>Versi PIA OSS</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.data_checklist",description:"<p>Data checklist</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.data_checklist.id_izin",description:"<p>Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin</p>"},{group:"200",type:"string(3)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.data_checklist.jenis_izin",description:"<p>Jenis Perizinan (* Lihat Lampiran 27)</p>"},{group:"200",type:"string(13)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.data_checklist.kd_izin",description:"<p>Kode Izin Sistem K/L/D (*https://services.oss.go.id/getListIzin)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.data_checklist.kd_daerah",description:"<p>Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.data_checklist.nama_izin",description:"<p>Nama Izin</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.data_checklist.instansi",description:"<p>Nama Instansi</p>"},{group:"200",type:"number(19)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.data_checklist.id_bidang_spesifik",description:"<p>ID Bidang Spesifik</p>"},{group:"200",type:"string(65535)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.data_checklist.bidang_spesifik",description:"<p>Uraian Bidang Spesifik</p>"},{group:"200",type:"number(19)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.data_checklist.id_kewenangan",description:"<p>ID Kewenangan</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.data_checklist.parameter_kewenangan",description:"<p>Parameter Kewenangan Izin</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.data_checklist.kewenangan",description:"<p>00: Kewenangan Pusat; 01: Kewenangan Provinsi; 02: Kewenangan Kab/Kota</p>"},{group:"200",type:"string(65535)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.data_checklist.file_izin",description:"<p>Attachment File Izin Hasil Pemenuhan Komitmen dari K/L/D dalam Bentuk File PDF/Image Berupa Link (* Ukuran File Maks: 2MB)</p>"},{group:"200",type:"string(65535)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.data_checklist.file_izin_oss",description:"<p>Attachment File Izin yang diterbitkan ole Lembaga OSS dalam Bentuk File PDF/Image Berupa Link (* Ukuran File Maks: 2MB)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.data_checklist.flag_checklist",description:"<p>Flag Checklist Komitmen (* Lihat Lampiran 28)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.data_checklist.status_checklist",description:"<p>Status Penerbitan Izin / Checklist (* Lihat Lampiran 10)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.data_checklist.flag_transaksional",description:"<p>Flag : Y/N, Flag Izin Komersial / Operasional Diajukan Transaksional (Bisa Mengajukan Berulang)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.data_checklist.flag_perpanjangan",description:"<p>Flag : Y/N, Flag Bahwa Izin Usaha Ini Adalah Hasil Perpanjangan Dari Izin Usaha Yang Terbit Sebelum OSS</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.jenis_id_user_proses",description:"<p>Kode Jenis Identitas (* Lihat Lampiran 4)</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.no_id_user_proses",description:"<p>No Identitas Pemroses NIB</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.nama_user_proses",description:"<p>Nama User Pemroses NIB</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.email_user_proses",description:"<p>Email User Pemroses NIB</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.hp_user_proses",description:"<p>No HP Pemroses NIB</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.alamat_user_proses",description:"<p>Alamat Pemroses NIB</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.jns_kelamin_user_proses",description:"<p>Jenis Kelamin Pemroses NIB (L : Laki- Laki, P : Perempuan)</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.tempat_lahir_user_proses",description:"<p>Tempat Lahir Pemroses NIB</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.tgl_lahir_user_proses",description:"<p>Tanggal Lahir User Pemroses (format date : YYYY-MM-DD)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.daerah_id_user_proses",description:"<p>ID Daerah User Pemroses(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.rt_rw_user_proses",description:"<p>RT RW Pemroses NIB</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.agama_user_proses",description:"<p>Agama Pemroses NIB</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.status_perkawinan_user_proses",description:"<p>Status Perkawinan Pemroses NIB</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.pekerjaan_user_proses",description:"<p>Pekerjaan Pemroses NIB</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.status_nib",description:"<p>Status Penerbitan NIB (* Lihat Lampiran 14)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.tipe_dokumen",description:"<p>Tipe Dokumen (9:Original, 5:Update, 3:Pencabutan, 4:Pembatalan)</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
{
  "responinqueryNIBSTPW": {
    "kode": "",
    "keterangan": "",
    "dataNIBSTPW": {
      "nib": "",
      "tgl_pengajuan_nib": "",
      "tgl_terbit_nib": "",
      "tgl_perubahan_nib": "",
      "oss_id": "",
      "jenis_pelaku_usaha": "",
      "nama_pj": "",
      "alamat_pj": "",
      "paspor_pj": "",
      "email_pj": "",
      "asal_negara_pj": "",
      "telp_pj": "",
      "nama_perusahaan_ln": "",
      "alamat_perusahaan_ln": "",
      "negara_perusahaan_ln": "",
      "telp_perusahaan_ln": "",
      "jangka_waktu": "",
      "file_prospektus": "",
      "versi_pia": "",
      "data_checklist": [
        {
          "id_izin": "",
          "jenis_izin": "",
          "kd_izin": "",
          "kd_daerah": "",
          "nama_izin": "",
          "instansi": "",
          "id_bidang_spesifik": "",
          "bidang_spesifik": "",
          "id_kewenangan": "",
          "parameter_kewenangan": "",
          "kewenangan": "",
          "file_izin": "",
          "file_izin_oss": "",
          "flag_checklist": "",
          "status_checklist": "",
          "flag_transaksional": "",
          "flag_perpanjangan": ""
        }
      ],
      "jenis_id_user_proses": "",
      "no_id_user_proses": "",
      "nama_user_proses": "",
      "email_user_proses": "",
      "hp_user_proses": "",
      "alamat_user_proses": "",
      "jns_kelamin_user_proses": "",
      "tempat_lahir_user_proses": "",
      "tgl_lahir_user_proses": "",
      "daerah_id_user_proses": "",
      "rt_rw_user_proses": "",
      "agama_user_proses": "",
      "status_perkawinan_user_proses": "",
      "pekerjaan_user_proses": "",
      "status_nib": "",
      "tipe_dokumen ": ""
    }
  }
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
	 "responinqueryNIBSTPW": {
		 "kode": "",
		 "keterangan": ""
	 }
}`,type:"json"}]},filename:"endpoint.js",groupTitle:"NIB",sampleRequest:[{url:"https://server.digitaltelkom.dev/oss-sandbox/inqueryNIBSTPW"}]},{type:"post",url:"/receiveNIB",title:"Receive NIB",version:"5.0.0",description:"<p>Mengirimkan Data NIB &amp; Checklist Izin dari Sistem OSS ke Sistem K/L/D</p>",name:"receiveNIB",group:"NIB",examples:[{title:"Curl Request Example:",content:`curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/receiveNIB' \\
--header 'user_key: {{user_key}}' \\
--header 'Authorization: Basic T1NTMDAwdjpVeDRCWFZCV1cyVmZhRkV4VXp0VVpsSmpBR3RRT2xGcXY=' \\
--header 'Content-Type: application/json' \\
--data-raw '{
  "dataNIB": {
    "nib": "",
    "tgl_pengajuan_nib": "",
    "tgl_terbit_nib": "",
    "tgl_perubahan_nib": "",
    "oss_id": "",
    "id_izin": "",
    "kd_izin": "",
    "kd_daerah": "",
    "kewenangan": "",
    "jenis_pelaku_usaha": "",
    "no_npp": "",
    "no_va": "",
    "no_wlkp": "",
    "flag_perusahaan": "",
    "flag_ekspor": "",
    "flag_impor": "",
    "jenis_api": "",
    "gabung_negara": "",
    "negara_pma_dominan": "",
    "total_pma": "",
    "nilai_pma_dominan": "",
    "nilai_pmdn": "",
    "persen_pma": "",
    "persen_pmdn": "",
    "kd_kawasan": "",
    "jenis_kawasan": "",
    "versi_pia": "",
    "jangka_waktu": "",
    "status_badan_hukum": "",
    "status_penanaman_modal": "",
    "npwp_perseroan": "",
    "nama_perseroan": "",
    "nama_singkatan": "",
    "jenis_perseroan": "",
    "status_perseroan": "",
    "alamat_perseroan": "",
    "rt_rw_perseroan": "",
    "kelurahan_perseroan": "",
    "perseroan_daerah_id": "",
    "kode_pos_perseroan": "",
    "nomor_telpon_perseroan": "",
    "email_perusahaan": "",
    "dalam_bentuk_uang": "",
    "dalam_bentuk_lain": "",
    "total_modal_dasar": "",
    "total_modal_ditempatkan": "",
    "flag_umk": "",
    "pemegang_saham": [
      {
        "jenis_pemegang_saham": "",
        "flag_asing": "",
        "total_modal_pemegang": "",
        "jabatan_pemegang_saham": "",
        "nama_pemegang_saham": "",
        "jns_identitas_pemegang_saham": "",
        "no_identitas_pemegang_saham": "",
        "valid_identitas_pemegang_saham": "",
        "negara_asal_pemegang_saham": "",
        "pengendali_pemegang_saham": "",
        "npwp_pemegang_saham": "",
        "alamat_pemegang_saham": "",
        "fax_pemegang_saham": "",
        "email_pemegang_saham": "",
        "flag_pajak_pemegang_saham": "",
        "ket_pajak_pemegang_saham": ""
      }
    ],
    "penanggung_jwb": [
      {
        "flag_asing": "",
        "jns_identitas_penanggung_jwb": "",
        "no_identitas_penanggung_jwb": "",
        "nama_penanggung_jwb": "",
        "jabatan_penanggung_jwb": " ",
        "kebangsaan_penanggung_jwb": "",
        "negara_asal_penanggung_jwb": "",
        "npwp_penanggung_jwb": "",
        "alamat_penanggung_jwb": "",
        "jalan_penanggung_jwb": "",
        "blok_penanggung_jwb": "",
        "no_penanggung_jwb": "",
        "rt_rw_penanggung_jwb": "",
        "kelurahan_penanggung_jwb": "",
        "daerah_id_penanggung_jwb": "",
        "kode_pos_penanggung_jwb": "",
        "no_telp_penanggung_jwb": "",
        "no_hp_penanggung_jwb": "",
        "no_fax_penanggung_jwb": "",
        "email_penanggung_jwb": "",
        "flag_pajak_penanggung_jwb": "",
        "ket_pajak_penanggung_jwb": ""
      }
    ],
    "no_pengesahan": "",
    "tgl_pengesahan": "",
    "no_akta_lama": "",
    "tgl_akta_lama": "",
    "no_pengesahan_lama": "",
    "tgl_pengesahan_lama": "",
    "legalitas": [
      {
        "jenis_legal": "",
        "no_legal": "",
        "tgl_legal": "",
        "alamat_notaris": "",
        "nama_notaris": "",
        "telepon_notaris": ""
      }
    ],
    "data_rptka": {
      "jenis_rptka": "",
      "no_rptka": "",
      "rptka_awal": "",
      "rptka_akhir": "",
      "rptka_gaji": "",
      "jumlah_tka_rptka": "",
      "jangka_penggunaan_waktu": "",
      "jangka_waktu_permohonan_rptka": "",
      "rptka_jabatan": [
        {
          "id_jabatan": "",
          "jabatan": "",
          "jumlah": "",
          "tgl_mulai": "",
          "tgl_selesai": "",
          "keterangan": "",
          "rptka_tki_pendamping": [
            {
              "id_jabatan": "",
              "id_pendamping": "",
              "nama": "",
              "nik": "",
              "jabatan": "",
              "hp": "",
              "email": "",
              "foto": "",
              "pendidikan_min": "",
              "sertifikat": "",
              "pengalaman_kerja": "",
              "keterangan": ""
            }
          ]
        }
      ],
      "rptka_negara": [
        {
          "id_negara": "",
          "jumlah": ""
        }
      ],
      "rptka_lokasi": [
        {
          "lokasi_id": "",
          "jumlah": ""
        }
      ]
    },
    "data_proyek": [
      {
        "id_proyek": "",
        "nomor_proyek": "",
        "uraian_usaha": "",
        "jumlah_tki_l": "",
        "jumlah_tki_p": "",
        "jumlah_tka_l": "",
        "jumlah_tka_p": "",
        "kbli": "",
        "sektor": "",
        "memiliki_menguasai": "",
        "jenis_lokasi": "",
        "status_tanah": "",
        "luas_tanah": "",
        "satuan_luas_tanah": "",
        "pembelian_pematang_tanah": "",
        "bangunan_gedung": "",
        "mesin_peralatan": "",
        "mesin_peralatan_usd": "",
        "investasi_lain": "",
        "sub_jumlah": "",
        "modal_kerja": "",
        "jumlah_investasi": "",
        "tanggal_kurs": "",
        "nilai_kurs": "",
        "kd_kawasan": "",
        "jawab_lokasi_b": "",
        "jawab_lokasi_c": "",
        "jawab_lokasi_d": "",
        "jawab_lokasi_e": "",
        "jawab_lokasi_f": "",
        "jawab_lokasi_g": "",
        "flag_perluasan": "",
        "flag_cabang": "",
        "npwp_cabang": "",
        "nama_cabang": "",
        "jenis_identitas_pj": "",
        "no_identitas_pj": "",
        "nama_pj": "",
        "status_proyek": "",
        "jenis_proyek": "",
        "nama_kegiatan": "",
        "flag_merger": "",
        "npwp_perseroan_merger": "",
        "nama_perseroan_merger": "",
        "skala_usaha": "",
        "skala_resiko": "",
        "deskripsi_kegiatan": "",
        "data_lokasi_proyek": [
          {
            "id_proyek_lokasi": "",
            "proyek_daerah_id": "",
            "kd_kawasan": "",
            "alamat_usaha": "",
            "id_kegiatan": "",
            "response_kegiatan": "",
            "jenis_kawasan": "",
            "jenis_lokasi": "",
            "status_lokasi": "",
            "data_lokasi_proyek": [
              {
                "serial": "",
                "lat_lng": ""
              }
            ],
            "data_posisi_proyek": [
              {
                "id_proyek_posisi": "",
                "id_proyek_lokasi": "",
                "posisi_lokasi": ""
              }
            ]
          }
        ],
        "data_proyek_produk": [
          {
            "id_produk": "",
            "id_proyek": "",
            "kbli": "",
            "id_bidang_usaha": "",
            "jenis_produksi": "",
            "kapasitas": "",
            "satuan": "",
            "merk_dagang": "",
            "pemegang_haki": "",
            "pemegang_paten": "",
            "pi_nomor": "",
            "pi_tanggal": "",
            "pi_npwp": "",
            "id_kbli_ta": "",
            "tkdn": ""
          }
        ]
      }
    ],
    "data_dni": [
      {
        "kd_dni": ""
      }
    ],
    "data_checklist": [
      {
        "id_produk": "",
        "id_proyek": "",
        "id_izin": "",
        "jenis_izin": "",
        "kd_izin": "",
        "kd_daerah": "",
        "nama_izin": "",
        "instansi": "",
        "id_bidang_spesifik": "",
        "bidang_spesifik": "",
        "id_kewenangan": "",
        "parameter_kewenangan": "",
        "kewenangan": "",
        "flag_checklist": "",
        "flag_transaksional": "",
        "flag_perpanjangan": "",
        "no_izin": "",
        "tgl_izin": "",
        "file_izin": "",
        "kd_dokumen": "",
        "nm_dokumen": "",
        "kbli_konversi": "",
        "data_persyaratan": [
          {
            "id_syarat": "",
            "no_dokumen": "",
            "tgl_dokumen": "",
            "file_dokumen": "",
            "keterangan": ""
          }
        ]
      }
    ],
    "jenis_id_user_proses": "",
    "no_id_user_proses": "",
    "nama_user_proses": "",
    "email_user_proses": "",
    "hp_user_proses": "",
    "alamat_user_proses": "",
    "jns_kelamin_user_proses": "",
    "tempat_lahir_user_proses": "",
    "tgl_lahir_user_proses": "",
    "daerah_id_user_proses": "",
    "rt_rw_user_proses": "",
    "agama_user_proses": "",
    "status_perkawinan_user_proses": "",
    "pekerjaan_user_proses": "",
    "status_nib": "",
    "tipe_dokumen ": ""
  }
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"Token",description:"<p>SHA1(USERNAME+PASSWORD+NPWP+DATE(Ymd))</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "Token": "OSS000qw13242628gssssss812345654709820180514"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"dataNIB",description:"<p>Data NIB</p>"},{group:"Parameter",type:"string(13)",optional:!1,field:"dataNIB.nib",description:"<p>Nomor Induk Berusaha</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.tgl_pengajuan_nib",description:"<p>Tanggal Pengajuan NIB (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.tgl_terbit_nib",description:"<p>Tanggal Penerbitan NIB (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.tgl_perubahan_nib",description:"<p>Tanggal Perubahan NIB (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.oss_id",description:"<p>Oss Id adalah ID yang di Generate Sistem OSS dan Dikirimkan ke K/L/D Bersama Permohonan Nomor Induk Berusaha</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.id_izin",description:"<p>Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin</p>"},{group:"Parameter",type:"string(12)",optional:!1,field:"dataNIB.kd_izin",description:"<p>Kode Izin Sistem K/L/D (* Lihat Lampiran 8)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.kd_daerah",description:"<p>Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf )</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.kewenangan",description:"<p>Kewenangan (00: Kewenangan Pusat; 01: Kewenangan Provinsi; 02: Kewenangan Kab/Kota)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.jenis_pelaku_usaha",description:"<p>Jenis Pelaku Usaha (* Lihat Lampiran 18)</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"dataNIB.no_npp",description:"<p>Nomor Pendaftaraan Perusahaan Untuk BPJS Ketenagakerjaan</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"dataNIB.no_va",description:"<p>Nomor Pendaftaraan Perusahaan Untuk BPJS Kesehatan</p>"},{group:"Parameter",type:"string(23)",optional:!1,field:"dataNIB.no_wlkp",description:"<p>Nomor Wajib Lapor Ketenagakerjaan Perusahaan</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.flag_perusahaan",description:"<p>Flag (Y = Untuk Perusahaan Baru; N = Untuk Perusahaan Lama / Exist)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.flag_ekspor",description:"<p>Y : Melakukan Aktifikas Ekspor, N : Tidak Melakukan Aktifitas Ekspor</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.flag_impor",description:"<p>Y : Melakukan Aktifikas Impor, N : Tidak Melakukan Aktifitas Impor</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.jenis_api",description:"<p>Jenis Angka Pengenal Impor (API) (* Lihat Lampiran 3)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.gabung_negara",description:"<p>PMA Merupakan Gabungan Negara Atau Tidak (* Y:Gabungan Negara, N: Bukan Gabungan Negara)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.negara_pma_dominan",description:"<p>Negara Asing Yang Memiliki Modal Mayoritas</p>"},{group:"Parameter",type:"number(20.2)",optional:!1,field:"dataNIB.total_pma",description:"<p>Total Modal PMA</p>"},{group:"Parameter",type:"number(20.2)",optional:!1,field:"dataNIB.nilai_pma_dominan",description:"<p>Nilai Modal PMA Dominan</p>"},{group:"Parameter",type:"number(20.2)",optional:!1,field:"dataNIB.nilai_pmdn",description:"<p>Nilai Modal PMDN</p>"},{group:"Parameter",type:"number(9.2)",optional:!1,field:"dataNIB.persen_pma",description:"<p>Persentase Modal PMA</p>"},{group:"Parameter",type:"number(9.2)",optional:!1,field:"dataNIB.persen_pmdn",description:"<p>Persentase Modal PMDN</p>"},{group:"Parameter",type:"number(5)",optional:!1,field:"dataNIB.kd_kawasan",description:"<p>Kode Kawasan (* Lihat Lampiran 30)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.jenis_kawasan",description:"<p>Jenis Kawasan (* Lihat Lampiran 21)</p>"},{group:"Parameter",type:"string(5)",optional:!1,field:"dataNIB.versi_pia",description:"<p>Versi PIA OSS</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.jangka_waktu",description:"<p>Jangka Waktu (format date : YYYY- MM-DD)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.status_badan_hukum",description:"<p>Status Badan Hukum (* Lihat Lampiran 12)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.status_penanaman_modal",description:"<p>Status Penanaman Modal (* Lihat Lampiran 1)</p>"},{group:"Parameter",type:"string(15)",optional:!1,field:"dataNIB.npwp_perseroan",description:"<p>NPWP Perseroan</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.nama_perseroan",description:"<p>Nama Perseroan</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.nama_singkatan",description:"<p>Nama Singkatan Perseroan</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.jenis_perseroan",description:"<p>Jenis Perseroan (* Lihat Lampiran 2)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.status_perseroan",description:"<p>Status Perseroan (*Y: Terbuka, N:Tertutup)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.alamat_perseroan",description:"<p>alamat_perseroan</p>"},{group:"Parameter",type:"string(7)",optional:!1,field:"dataNIB.rt_rw_perseroan",description:"<p>rt_rw_perseroan</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.kelurahan_perseroan",description:"<p>kelurahan_perseroan</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.perseroan_daerah_id",description:"<p>ID Daerah Perseroan (* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(5)",optional:!1,field:"dataNIB.kode_pos_perseroan",description:"<p>kode_pos_perseroan</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"dataNIB.nomor_telpon_perseroan",description:"<p>nomor_telpon_perseroan</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.email_perusahaan",description:"<p>email_perusahaan</p>"},{group:"Parameter",type:"number(20)",optional:!1,field:"dataNIB.dalam_bentuk_uang",description:"<p>Modal Dalam Bentuk Uang (Valuta : IDR)</p>"},{group:"Parameter",type:"string(50000)",optional:!1,field:"dataNIB.dalam_bentuk_lain",description:"<p>Modal Dalam Bentuk Lainnya</p>"},{group:"Parameter",type:"number(20)",optional:!1,field:"dataNIB.total_modal_dasar",description:"<p>Total Modal Dasar (Valuta : IDR)</p>"},{group:"Parameter",type:"number(20)",optional:!1,field:"dataNIB.total_modal_ditempatkan",description:"<p>Total Modal Ditempatkan (Valuta : IDR)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.flag_umk",description:"<p>Flag yang menandakan umk atau non umk</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.pemegang_saham",description:"<p>Data pemegang_saham</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.pemegang_saham.jenis_pemegang_saham",description:"<p>Jenis Pemegang Saham (* Lihat Lampiran 13)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.pemegang_saham.flag_asing",description:"<p>Asal Pemegang Saham dari Dalam Negeri / Luar Negeri (Value : Y = asing, N= Bukan Asing)</p>"},{group:"Parameter",type:"number(20)",optional:!1,field:"dataNIB.pemegang_saham.total_modal_pemegang",description:"<p>Total Modal Pemegang Saham (Valuta : IDR)</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.pemegang_saham.jabatan_pemegang_saham",description:"<p>Jabatan Pemegang Saham</p>"},{group:"Parameter",type:"string(500)",optional:!1,field:"dataNIB.pemegang_saham.nama_pemegang_saham",description:"<p>Nama Pemegang Saham</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.pemegang_saham.jns_identitas_pemegang_saham",description:"<p>Jenis Identitas Pemegang Saham(* Lihat Lampiran 4)</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.pemegang_saham.no_identitas_pemegang_saham",description:"<p>no_identitas_pemegang_saham</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.pemegang_saham.valid_identitas_pemegang_saham",description:"<p>Valid / Masa Berlaku Pemegang Saham (Format Date : YYYY-MM- DD)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.pemegang_saham.negara_asal_pemegang_saham",description:"<p>negara_asal_pemegang_saham</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.pemegang_saham.pengendali_pemegang_saham",description:"<p>Nama Pengendali Pemegang Saham</p>"},{group:"Parameter",type:"string(15)",optional:!1,field:"dataNIB.pemegang_saham.npwp_pemegang_saham",description:"<p>npwp_pemegang_saham</p>"},{group:"Parameter",type:"string(1024)",optional:!1,field:"dataNIB.pemegang_saham.alamat_pemegang_saham",description:"<p>alamat_pemegang_saham</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.pemegang_saham.fax_pemegang_saham",description:"<p>fax_pemegang_saham</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.pemegang_saham.email_pemegang_saham",description:"<p>email_pemegang_saham</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.pemegang_saham.flag_pajak_pemegang_saham",description:"<p>Flag Validasi Pajak Pemegang Saham (* Lihat Lampiran 19)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.pemegang_saham.ket_pajak_pemegang_saham",description:"<p>Keterangan Validasi Pajak Pemegang Saham</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.penanggung_jwb",description:"<p>Data penanggung jawab</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.penanggung_jwb.flag_asing",description:"<p>Asal Penanggung Jawab dari Dalam Negeri / Luar Negeri (Value : Y = asing, N= Bukan Asing)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.penanggung_jwb.jns_identitas_penanggung_jwb",description:"<p>Jenis Nik Penganggung Jawab (* Lihat Lampiran 4)</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.penanggung_jwb.no_identitas_penanggung_jwb",description:"<p>no_identitas_penanggung_jwb</p>"},{group:"Parameter",type:"string(500)",optional:!1,field:"dataNIB.penanggung_jwb.nama_penanggung_jwb",description:"<p>nama_penanggung_jwb</p>"},{group:"Parameter",type:"string(250)",optional:!1,field:"dataNIB.penanggung_jwb.jabatan_penanggung_jwb",description:"<p>jabatan_penanggung_jwb</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.penanggung_jwb.kebangsaan_penanggung_jwb",description:"<p>Kebangsaan Penanggung Jawab (* Lihat Lampiran 6)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.penanggung_jwb.negara_asal_penanggung_jwb",description:"<p>Negara Asal Penanggung Jawab (* Sumber Kodefikasi Negara Mengikuti Standar Unedifact : http://www.unece. org/cefact/locode/s ervice/location )</p>"},{group:"Parameter",type:"string(15)",optional:!1,field:"dataNIB.penanggung_jwb.npwp_penanggung_jwb",description:"<p>npwp_penanggung_jwb</p>"},{group:"Parameter",type:"string(1024)",optional:!1,field:"dataNIB.penanggung_jwb.alamat_penanggung_jwb",description:"<p>alamat_penanggung_jwb</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.penanggung_jwb.jalan_penanggung_jwb",description:"<p>jalan_penanggung_jwb</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.penanggung_jwb.blok_penanggung_jwb",description:"<p>blok_penanggung_jwb</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.penanggung_jwb.no_penanggung_jwb",description:"<p>no_penanggung_jwb</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.penanggung_jwb.rt_rw_penanggung_jwb",description:"<p>rt_rw_penanggung_jwb</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.penanggung_jwb.kelurahan_penanggung_jwb",description:"<p>kelurahan_penanggung_jwb</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.penanggung_jwb.daerah_id_penanggung_jwb",description:"<p>ID Daerah Penanggung Jawab (* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(5)",optional:!1,field:"dataNIB.penanggung_jwb.kode_pos_penanggung_jwb",description:"<p>kode_pos_penanggung_jwb</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.penanggung_jwb.no_telp_penanggung_jwb",description:"<p>no_telp_penanggung_jwb</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.penanggung_jwb.no_hp_penanggung_jwb",description:"<p>no_hp_penanggung_jwb</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.penanggung_jwb.no_fax_penanggung_jwb",description:"<p>no_fax_penanggung_jwb</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.penanggung_jwb.email_penanggung_jwb",description:"<p>email_penanggung_jwb</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.penanggung_jwb.flag_pajak_penanggung_jwb",description:"<p>Flag Validasi Pajak Penanggung Jawab (* Lihat Lampiran 19)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.penanggung_jwb.ket_pajak_penanggung_jwb",description:"<p>Keterangan Validasi Pajak Penanggung Jawab</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.no_pengesahan",description:"<p>Nomor Pengesahan Akta Dari Kumham</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.tgl_pengesahan",description:"<p>Tanggal Pengesahan Akta Dari Kumham (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string100()",optional:!1,field:"dataNIB.no_akta_lama",description:"<p>Nomor Akta Lama Sebelum Perubahan</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.tgl_akta_lama",description:"<p>Tanggal Akta Lama Sebelum Perubahan (format date :YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.no_pengesahan_lama",description:"<p>Nomor Pengesahan Akta Lama Sebelum Perubahan Dari Kumham</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.tgl_pengesahan_lama",description:"<p>Tanggal Pengesahan Akta Lama Sebelum Perubahan Dari Kumham (format date : YYYY-MM- DD)</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.legalitas",description:"<p>Data legalitas</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.legalitas.jenis_legal",description:"<p>Jenis Legal Perusahaan (* Lihat Lampiran 7)</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.legalitas.no_legal",description:"<p>Nomor Legal Perusahaan</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.legalitas.tgl_legal",description:"<p>Tanggal Legal Perusahaan (format date : YYYY-MM- DD)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.legalitas.alamat_notaris",description:"<p>alamat_notaris</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.legalitas.nama_notaris",description:"<p>nama_notaris</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.legalitas.telepon_notaris",description:"<p>telepon_notaris</p>"},{group:"Parameter",type:"object",optional:!1,field:"dataNIB.data_rptka",description:"<p>data_rptka</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_rptka.jenis_rptka",description:"<p>Jenis Flag RPTKA *( 01 : Baru, 02:Perubahan)</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"dataNIB.data_rptka.no_rptka",description:"<p>No Bacode RPTKA</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_rptka.rptka_awal",description:"<p>Masa Berlaku Dari Tanggal(format date : YYYY-MM- DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_rptka.rptka_akhir",description:"<p>Masa Berlaku Sampai Tanggal(format date : YYYY-MM- DD)</p>"},{group:"Parameter",type:"number(20.2)",optional:!1,field:"dataNIB.data_rptka.rptka_gaji",description:"<p>Gaji Tenaga Asing</p>"},{group:"Parameter",type:"string(11)",optional:!1,field:"dataNIB.data_rptka.jumlah_tka_rptka",description:"<p>Jumlah Tenaga Kerja Asing (TKA) dalam Rencana Penggunaan Tenaga Kerja Asing (RPTKA)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_rptka.jangka_penggunaan_waktu",description:"<p>Jangka Waktu Penggunaan Tenaga Kerja Asing (TKA) dalam Izin Rencana Penggunaan Tenaga Kerja Asing (RPTKA) (format date :YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_rptka.jangka_waktu_permohonan_rptka",description:"<p>Jangka Waktu Permohonan RPTKA (dalam hitungan bulan)</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan",description:"<p>Data RPTKA jabatan</p>"},{group:"Parameter",type:"string(11)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.id_jabatan",description:"<p>ID Jabatan Tenaga Kerja Asing berdasarkan https://jdih.kemna ker.go.id/data_puu/KEP247_MENX_2011.pdf</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.jabatan",description:"<p>Nama Jabatan</p>"},{group:"Parameter",type:"string(11)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.jumlah",description:"<p>Jumlah Orang Yang Memiliki Jabatan</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.tgl_mulai",description:"<p>Tanggal Mulai Jabatan (format date: YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.tgl_selesai",description:"<p>Tanggal Selesai Jabatan (format date: YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.keterangan",description:"<p>keterangan</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping",description:"<p>rptka_tki_pendamping</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.id_jabatan",description:"<p>Id jabatan</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.id_pendamping",description:"<p>Id TKI Pendamping</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.nama",description:"<p>Nama TKI Pendamping</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.nik",description:"<p>Nomor NIK TKI Pendamping</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.jabatan",description:"<p>Nama Jabatan TKI Pendamping</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.hp",description:"<p>Nomor HP TKI Pendamping</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.email",description:"<p>Email TKI Pendampiag</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.foto",description:"<p>Foto TKI Pendamping Attachment File dalam Bentukbentuk base64 dengan format (data:image/jpeg;b ase64,string() ENCODE IMAGE)</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.pendidikan_min",description:"<p>Tingkat Pendidikan Minimal TKI Pendamping</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.sertifikat",description:"<p>Sertifikat Kompetensi TKI Pendamping</p>"},{group:"Parameter",type:"number(11)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.pengalaman_kerja",description:"<p>Pengalaman Kerja TKI Pendamping (dalam tahun)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.keterangan",description:"<p>keterangan</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_rptka.rptka_negara",description:"<p>rptka_negara</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_rptka.rptka_negara.id_negara",description:"<p>Negara Asal Tenaga Kerja Asing(* Sumber Kodefikasi Negara Mengikuti Standar Unedifact : http://www.unece. org/cefact/locode/s ervice/location )</p>"},{group:"Parameter",type:"number(11)",optional:!1,field:"dataNIB.data_rptka.rptka_negara.jumlah",description:"<p>Jumlah Tenaga Kerja Asing (TKA) dalam Rencana Penggunaan Tenaga Kerja Asing (RPTKA)</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_rptka.rptka_lokasi",description:"<p>Data RPTKA lokasi</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_rptka.rptka_lokasi.lokasi_id",description:"<p>ID Daerah Penanggung Jawab (* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf )</p>"},{group:"Parameter",type:"number(11)",optional:!1,field:"dataNIB.data_rptka.rptka_lokasi.jumlah",description:"<p>Jumlah Tenaga Kerja Asing (TKA) dalam Rencana Penggunaan Tenaga Kerja Asing (RPTKA)</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_proyek",description:"<p>data_proyek</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_proyek.id_proyek",description:"<p>id_proyek</p>"},{group:"Parameter",type:"string(26)",optional:!1,field:"dataNIB.data_proyek.nomor_proyek",description:"<p>Nomor Permohonan Proyek</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_proyek.uraian_usaha",description:"<p>Uraian Usaha Proyek</p>"},{group:"Parameter",type:"number(10)",optional:!1,field:"dataNIB.data_proyek.jumlah_tki_l",description:"<p>Jumlah Tenaga Kerja Indonesia (TKI) Laki -Laki</p>"},{group:"Parameter",type:"number(10)",optional:!1,field:"dataNIB.data_proyek.jumlah_tki_p",description:"<p>Jumlah Tenaga Kerja Indonesia (TKI) Perempuan</p>"},{group:"Parameter",type:"number(10)",optional:!1,field:"dataNIB.data_proyek.jumlah_tka_l",description:"<p>Jumlah Tenaga Kerja Asing (TKA) Laki -Laki</p>"},{group:"Parameter",type:"number(10)",optional:!1,field:"dataNIB.data_proyek.jumlah_tka_p",description:"<p>Jumlah Tenaga Kerja Asing (TKA) Perempuan</p>"},{group:"Parameter",type:"string(7)",optional:!1,field:"dataNIB.data_proyek.kbli",description:"<p>Kode KBLI (* Menggunakan Kode KBLI Tahun 2020)</p>"},{group:"Parameter",type:"string(3)",optional:!1,field:"dataNIB.data_proyek.sektor",description:"<p>Sektor Usaha Berdasarkan KBLI (* Lihat Lampiran 20)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.memiliki_menguasai",description:"<p>Sudah Memiliki atar Menguasai Lahan (Value : Y = Sudah Memiliki atau Menguasai Lahan, N = Belum Memiliki atau Menguasai Lahan)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.jenis_lokasi",description:"<p>Lokasi Berada dalam Lintas Administratif (Value : Y = Berada Dalam Lintas Administrasi, N = Bukan Berada Dalam Lintas Administrasi)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.status_tanah",description:"<p>Status Kepemilikan Tanah (* Lihat Lampiran 5)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_proyek.luas_tanah",description:"<p>Luas Bidang tanah</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.satuan_luas_tanah",description:"<p>Satuan Luas Tanah (*Lihat Lampiran 17)</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_proyek.pembelian_pematang_tanah",description:"<p>Nilai Pembelian Pematang Tanah (Valuta:IDR)</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_proyek.bangunan_gedung",description:"<p>Nilai Bangunan Gedung (Valuta:IDR)</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_proyek.mesin_peralatan",description:"<p>Nilai Mesin Peralatan (Valuta:IDR)</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_proyek.mesin_peralatan_usd",description:"<p>Nilai Mesin Peralatan dalam USD</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_proyek.investasi_lain",description:"<p>Investasi Lainnya</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_proyek.sub_jumlah",description:"<p>Jumlah Asset (Valuta:IDR)</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_proyek.modal_kerja",description:"<p>Nilai Modal Kerja (Valuta:IDR)</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_proyek.jumlah_investasi",description:"<p>Nilai Jumlah Investasi (Valuta:IDR)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_proyek.tanggal_kurs",description:"<p>Tanggal Kurs (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_proyek.nilai_kurs",description:"<p>Nilai Kurs</p>"},{group:"Parameter",type:"number(11)",optional:!1,field:"dataNIB.data_proyek.kd_kawasan",description:"<p>Kode Kawasan (* Lihat Lampiran 30)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.jawab_lokasi_b",description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal33 Ayat 1 Point B</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.jawab_lokasi_c",description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal33 Ayat 1 Point C</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.jawab_lokasi_d",description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal33 Ayat 1 Point D</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.jawab_lokasi_e",description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal33 Ayat 1 Point E</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.jawab_lokasi_f",description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal33 Ayat 1 Point F</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.jawab_lokasi_g",description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal33 Ayat 1 Point G</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.flag_perluasan",description:"<p>Proyek Merupakan Perluasan/Pengemb angan Usaha Atau Bukan (Value : Y = Proses Perluasan/Pengemb angan Usaha, N = Bukan Proses Perluasan/Pengemb angan Usaha)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.flag_cabang",description:"<p>Proyek Sebagai Kantor Cabang Atau Bukan (Value : Y = Sebagai Kantor Cabang, N = Bukan Sebagai Kantor Cabang)</p>"},{group:"Parameter",type:"string(15)",optional:!1,field:"dataNIB.data_proyek.npwp_cabang",description:"<p>NPWP Kantor Cabang</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_proyek.nama_cabang",description:"<p>Nama Kantor Cabang / Proyek</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.jenis_identitas_pj",description:"<p>Jenis Identitas Penanggung Jawab Proyek (* Lihat Lampiran 4)</p>"},{group:"Parameter",type:"string(16)",optional:!1,field:"dataNIB.data_proyek.no_identitas_pj",description:"<p>No Identitas Penanggung Jawab Proyek</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.data_proyek.nama_pj",description:"<p>Nama Penanggung Jawab Proyek</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.status_proyek",description:"<p>Status Proyek(* Lihat Lampiran 22)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.jenis_proyek",description:"<p>Jenis Proyek (* Lihat Lampiran 26)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_proyek.nama_kegiatan",description:"<p>Nama Proyek / Kegiatan Proyek, Untuk Perseorangan Digunakan Untuk Mencatat Nama Dagangannya Misal (UD. Percobaan Jaya)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.flag_merger",description:"<p>Flag Proyek Hasil Merger atau Bukan (Y : Hasil Merger, N: Bukan Hasil Merger)</p>"},{group:"Parameter",type:"string(15)",optional:!1,field:"dataNIB.data_proyek.npwp_perseroan_merger",description:"<p>NPWP Perusahaan Merging</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_proyek.nama_perseroan_merger",description:"<p>Nama Perusahaan Merging</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_proyek.skala_usaha",description:"<p>Skala Usaha Perusahaan</p>"},{group:"Parameter",type:"string(5)",optional:!1,field:"dataNIB.data_proyek.skala_resiko",description:"<p>Skala Resiko Perusahaan</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_proyek.deskripsi_kegiatan",description:"<p>Deskripsi kegiatan</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek",description:"<p>data_lokasi_proyek</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.id_proyek_lokasi",description:"<p>id_proyek_lokasi</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.proyek_daerah_id",description:"<p>Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(3)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.kd_kawasan",description:"<p>Kode Kawasan (* Lihat Lampiran di https://oss.go.id/ oss/#home/portal/lstKawasan)</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.alamat_usaha",description:"<p>Alamat Kegiatan Proyek / Usaha</p>"},{group:"Parameter",type:"string(6)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.id_kegiatan",description:"<p>Id Kegiatan Usaha Berdasarkan RDTR Digital</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.response_kegiatan",description:"<p>Response Kegiatan Usaha Berdasarkan Validasi Kegiatan RDTR Digital</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.jenis_kawasan",description:"<p>Jenis Kawasan (* Lihat Lampiran 16)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.jenis_lokasi",description:"<p>Jenis Lokasi Lintas Administratif atau Tidak (01 : Lintas Administratif, 02 : Tidak Lintas Administratif)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.status_lokasi",description:"<p>Status Lokasi(* Lihat Lampiran 25)</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.data_lokasi_proyek",description:"<p>data_lokasi_proyek</p>"},{group:"Parameter",type:"string(11)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.data_lokasi_proyek.serial",description:"<p>Serial Koordinat</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.data_lokasi_proyek.lat_lng",description:"<p>Koordinat Latitude &amp; Longitude</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek",description:"<p>data_posisi_proyek</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek.id_proyek_posisi",description:"<p>id_proyek_posisi</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek.id_proyek_lokasi",description:"<p>id_proyek_lokasi</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek.posisi_lokasi",description:"<p>posisi_lokasi</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk",description:"<p>data_proyek_produk</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.id_produk",description:"<p>ID / Kode Produk</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.id_proyek",description:"<p>ID / Kode Proyek</p>"},{group:"Parameter",type:"string(7)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.kbli",description:"<p>Kode KBLI (* Menggunakan Kode KBLI Tahun 2020)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.id_bidang_usaha",description:"<p>ID Bidang Usaha Berdasarkan Kodefikasi Data Negatif Investasi (DNI) (* Lihat Lampiran 15)</p>"},{group:"Parameter",type:"string(1024)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.jenis_produksi",description:"<p>Rencana Produksi Yang Dihasilkan</p>"},{group:"Parameter",type:"number(20.2)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.kapasitas",description:"<p>Kapasitas produksi suatu produk</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.satuan",description:"<p>Satuan Dari Kapasitas Produksi</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.merk_dagang",description:"<p>Merk Dagang</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.pemegang_haki",description:"<p>Pemegang Hak Cipta</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.pemegang_paten",description:"<p>Pemegang Hak Paten</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.pi_nomor",description:"<p>Nomor Pendaftaran Penanaman Modal Untuk Case Grand Father Clause (GFC)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.pi_tanggal",description:"<p>Tanggal Pendaftaran Penanaman Modal Untuk Case Grand Father Clause (GFC) format date : YYYY- MM-DD</p>"},{group:"Parameter",type:"string(16)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.pi_npwp",description:"<p>NPWP Pendaftaran Penanaman Modal Untuk Case Grand Father Clause (GFC)</p>"},{group:"Parameter",type:"string(9)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.id_kbli_ta",description:"<p>Penanda bahwa cakupan produk untuk kebutuhan tax allowance</p>"},{group:"Parameter",type:"number(3.2)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.tkdn",description:"<p>Tingkat Kandungan Dalam Negeri</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_dni",description:"<p>data_dni</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_dni.kd_dni",description:"<p>Kodefikasi Data Negatif Investasi (DNI) (* Lihat Lampiran 15)</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_checklist",description:"<p>data_checklist</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_checklist.id_produk",description:"<p>id_produk</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_checklist.id_proyek",description:"<p>id_proyek</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_checklist.id_izin",description:"<p>Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin</p>"},{group:"Parameter",type:"string(3)",optional:!1,field:"dataNIB.data_checklist.jenis_izin",description:"<p>Jenis Perizinan (* Lihat Lampiran 27)</p>"},{group:"Parameter",type:"string(13)",optional:!1,field:"dataNIB.data_checklist.kd_izin",description:"<p>Kode Izin Sistem K/L/D (* service getDataReferensi kode :8)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_checklist.kd_daerah",description:"<p>Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri -  Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_checklist.nama_izin",description:"<p>nama_izin</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.data_checklist.instansi",description:"<p>Nama instansi</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_checklist.id_bidang_spesifik",description:"<p>ID Bidang Spesifik</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"dataNIB.data_checklist.bidang_spesifik",description:"<p>Uraian Bidang Spesifik</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_checklist.id_kewenangan",description:"<p>ID Kewenangan</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_checklist.parameter_kewenangan",description:"<p>Parameter Kewenangan Izin</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_checklist.kewenangan",description:"<p>Kewenangan (00: Kewenangan Pusat; 01: Kewenangan Provinsi; 02: Kewenangan Kab/Kota)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_checklist.flag_checklist",description:"<p>Flag Checklist Komitmen (* Lihat Lampiran 28)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_checklist.flag_transaksional",description:"<p>Flag : Y/N, Flag Izin Komersial/Operasio nal Diajukan Transaksional (Bisa Mengajukan Berulang)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_checklist.flag_perpanjangan",description:"<p>Flag : Y/N, Flag Bahwa Izin Usaha ini Adalah Hasil Perpanjangan Dari Izin Usaha Yang Terbit Sebelum OSS</p>"},{group:"Parameter",type:"string(150)",optional:!1,field:"dataNIB.data_checklist.no_izin",description:"<p>Nomor Izin Yang Terbit dan Masih Berlaku Sebelum OSS Diterapkan</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_checklist.tgl_izin",description:"<p>Tanggal Izin Yang Terbit dan Masih Berlaku Sebelum OSS Diterapkan (* Format:YYYY-MM- DD)</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"dataNIB.data_checklist.file_izin",description:"<p>Attachment File Izin Yang Terbit dan Masih Berlaku Sebelum OSS Diterapkan Dalam Bentuk File PDF/Image Berupa Link (* Ukuran File Maks: 2MB)</p>"},{group:"Parameter",type:"string(15)",optional:!1,field:"dataNIB.data_checklist.kd_dokumen",description:"<p>Kode izin lingkungan (hanya untuk izin lingkungan)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_checklist.nm_dokumen",description:"<p>Nama dokumen lingkungan (Hanya untuk izin lingkungan)</p>"},{group:"Parameter",type:"string(5)",optional:!1,field:"dataNIB.data_checklist.kbli_konversi",description:"<p>KBLI 2020 hasil konversi dari KBLI 2017 (jika ada)</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_checklist.data_persyaratan",description:"<p>data_persyaratan</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_checklist.data_persyaratan.id_syarat",description:"<p>Id / Kode Persyaratan</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.data_checklist.data_persyaratan.no_dokumen",description:"<p>Nomor Dokumen Persyaratan</p>"},{group:"Parameter",type:"string(8)",optional:!1,field:"dataNIB.data_checklist.data_persyaratan.tgl_dokumen",description:"<p>Tanggal Dokumen Persyaratan (format date : YYYY-MM- DD)</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"dataNIB.data_checklist.data_persyaratan.file_dokumen",description:"<p>Attachment File Izin dalam Bentuk File PDF/Image Berupa Link (* Ukuran File Maks: 2MB)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_checklist.data_persyaratan.keterangan",description:"<p>Keterangan Dokumen Persyaratan</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.jenis_id_user_proses",description:"<p>Kode Jenis Identitas (* Lihat Lampiran 4)</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.no_id_user_proses",description:"<p>No Identitas Pemroses NIB</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.nama_user_proses",description:"<p>Nama User Pemroses NIB</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.email_user_proses",description:"<p>Email User Pemroses NIB</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.hp_user_proses",description:"<p>No HP Pemroses NIB</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.alamat_user_proses",description:"<p>Alamat Pemroses NIB</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.jns_kelamin_user_proses",description:"<p>Jenis Kelamin Pemroses NIB (L : Laki-Laki, P : Perempuan)</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.tempat_lahir_user_proses",description:"<p>Tempat Lahir Pemroses NIB</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.tgl_lahir_user_proses",description:"<p>Tanggal Lahir User Pemroses (format date : YYYY-MM- DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.daerah_id_user_proses",description:"<p>ID Daerah User Pemroses(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.rt_rw_user_proses",description:"<p>RT RW Pemroses NIB</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.agama_user_proses",description:"<p>Agama Pemroses NIB</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.status_perkawinan_user_proses",description:"<p>Status Perkawinan Pemroses NIB</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.pekerjaan_user_proses",description:"<p>Pekerjaan Pemroses NIB</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.status_nib",description:"<p>Status Penerbitan NIB (* Lihat Lampiran 14)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.tipe_dokumen",description:"<p>Tipe Dokumen (9:Original, 5:Update, 3:Pencabutan, 4:Pembatalan)</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
{
  "AKTA": {
    "id_perusahaan": "",
    "jangka_waktu": "",
    "status_badan_hukum": "",
    "status_penanaman_modal": "",
    "npwp_perseroan": "",
    "nama_perseroan": "",
    "nama_singkatan": "",
    "jenis_perseroan": "",
    "status_perseroan": "",
    "alamat_perseroan": "",
    "rt_rw_perseroan": "",
    "kelurahan_perseroan": "",
    "perseroan_daerah_id": "",
    "kode_pos_perseroan": "",
    "nomor_telpon_perseroan": "",
    "email_perusahaan": "",
    "dalam_bentuk_uang": "",
    "dalam_bentuk_lain": "",
    "total_modal_dasar": "",
    "total_modal_ditempatkan": "",
    "data_kbli": [
      {
        "kbli": "",
        "uraian_usaha": ""
      }
    ],
    "pemegang_saham": [
      {
        "jenis_pemegang_saham": "",
        "flag_asing": "",
        "klasifikasi_saham_pemegang": "",
        "jum_lbr_saham_pemegang": "",
        "total_modal_pemegang": "",
        "jabatan_pemegang_saham": "",
        "nama_pemegang_saham": "",
        "jns_identitas_pemegang_saham": "",
        "no_identitas_pemegang_saham": "",
        "valid_identitas_pemegang_saham": "",
        "pengendali_pemegang_saham": "",
        "npwp_pemegang_saham": "",
        "alamat_pemegang_saham": "",
        "fax_pemegang_saham": "",
        "email_pemegang_saham": ""
      }
    ],
    "penanggung_jwb": [
      {
        "flag_asing": "",
        "nama_penanggung_jwb": "",
        "jabatan_penanggung_jwb": " ",
        "kebangsaan_penanggung_jwb": "",
        "jenis_identitas_penanggung_jwb": "",
        "no_identitas_penanggung_jwb": "",
        "negara_asal_penanggung_jwb": "",
        "no_paspor_penanggung_jwb": "",
        "npwp_penanggung_jwb": "",
        "alamat_penanggung_jwb": "",
        "jalan_penanggung_jwb": "",
        "blok_penanggung_jwb": "",
        "no_penanggung_jwb": "",
        "rt_rw_penanggung_jwb": "",
        "kelurahan_penanggung_jwb": "",
        "daerah_id_penanggung_jwb": "",
        "kode_pos_penanggung_jwb": "",
        "no_telp_penanggung_jwb": "",
        "no_hp_penanggung_jwb": "",
        "no_fax_penanggung_jwb": "",
        "email_penanggung_jwb": ""
      }
    ],
    "no_pengesahan": "",
    "tgl_pengesahan": "",
    "no_akta_lama": "",
    "tgl_akta_lama": "",
    "no_pengesahan_lama": "",
    "tgl_pengesahan_lama": "",
    "legalitas": [
      {
        "jenis_akta": "",
        "no_akta": "",
        "tgl_akta": "",
        "alamat_notaris": "",
        "nama_notaris": "",
        "telepon_notaris": ""
      }
    ]
  }
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"Object",optional:!1,field:"responreceiveNIB",description:"<p>Response receive NIB</p>"},{group:"200",type:"String(1)",optional:!1,field:"responreceiveNIB.status",description:"<p>Status (1: TRUE; 2: FALSE)</p>"},{group:"200",type:"String(255)",optional:!1,field:"responreceiveNIB.keterangan",description:"<p>Keterangan Respon</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
{
	 "responreceiveNIB": {
		 "status": "",
		 "keterangan": ""
	 }
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
	 "responreceiveNIB": {
		 "status": "",
		 "keterangan": ""
	 }
}`,type:"json"}]},filename:"endpoint.js",groupTitle:"NIB",sampleRequest:[{url:"https://server.digitaltelkom.dev/oss-sandbox/receiveNIB"}]},{type:"post",url:"/receiveNIBKKPR",title:"Receive NIB KKPR",version:"5.0.0",description:"<p>Menerima Data Legal Akta Pendirian &amp; Pngesahan serta NPWP dari sistem AHU Online Kemenkumham ke Sisitem OSS</p>",name:"receiveNIBKKPR",group:"NIB",examples:[{title:"Curl Request Example:",content:`curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/receiveNIBKKPR' \\
--header 'Token: {{token}}' \\
--header 'Content-Type: application/json' \\
--data-raw '{
  "dataNIB": {
    "nib": "",
    "tgl_pengajuan_nib": "",
    "tgl_terbit_nib": "",
    "tgl_perubahan_nib": "",
    "oss_id": "",
    "id_izin": "",
    "kd_izin": "",
    "kd_daerah": "",
    "kewenangan": "",
    "jenis_pelaku_usaha": "",
    "no_npp": "",
    "no_va": "",
    "no_wlkp": "",
    "flag_perusahaan": "",
    "flag_ekspor": "",
    "flag_impor": "",
    "jenis_api": "",
    "gabung_negara": "",
    "negara_pma_dominan": "",
    "total_pma": "",
    "nilai_pma_dominan": "",
    "nilai_pmdn": "",
    "persen_pma": "",
    "persen_pmdn": "",
    "kd_kawasan": "",
    "jenis_kawasan": "",
    "versi_pia": "",
    "jangka_waktu": "",
    "status_badan_hukum": "",
    "status_penanaman_modal": "",
    "npwp_perseroan": "",
    "nama_perseroan": "",
    "nama_singkatan": "",
    "jenis_perseroan": "",
    "status_perseroan": "",
    "alamat_perseroan": "",
    "rt_rw_perseroan": "",
    "kelurahan_perseroan": "",
    "perseroan_daerah_id": "",
    "kode_pos_perseroan": "",
    "nomor_telpon_perseroan": "",
    "email_perusahaan": "",
    "dalam_bentuk_uang": "",
    "dalam_bentuk_lain": "",
    "total_modal_dasar": "",
    "total_modal_ditempatkan": "",
    "flag_umk": "",
    "pemegang_saham": [
      {
        "jenis_pemegang_saham": "",
        "flag_asing": "",
        "total_modal_pemegang": "",
        "jabatan_pemegang_saham": "",
        "nama_pemegang_saham": "",
        "jns_identitas_pemegang_saham": "",
        "no_identitas_pemegang_saham": "",
        "valid_identitas_pemegang_saham": "",
        "negara_asal_pemegang_saham": "",
        "pengendali_pemegang_saham": "",
        "npwp_pemegang_saham": "",
        "alamat_pemegang_saham": "",
        "fax_pemegang_saham": "",
        "email_pemegang_saham": "",
        "flag_pajak_pemegang_saham": "",
        "ket_pajak_pemegang_saham": ""
      }
    ],
    "penanggung_jwb": [
      {
        "flag_asing": "",
        "jns_identitas_penanggung_jwb": "",
        "no_identitas_penanggung_jwb": "",
        "nama_penanggung_jwb": "",
        "jabatan_penanggung_jwb": " ",
        "kebangsaan_penanggung_jwb": "",
        "negara_asal_penanggung_jwb": "",
        "npwp_penanggung_jwb": "",
        "alamat_penanggung_jwb": "",
        "jalan_penanggung_jwb": "",
        "blok_penanggung_jwb": "",
        "no_penanggung_jwb": "",
        "rt_rw_penanggung_jwb": "",
        "kelurahan_penanggung_jwb": "",
        "daerah_id_penanggung_jwb": "",
        "kode_pos_penanggung_jwb": "",
        "no_telp_penanggung_jwb": "",
        "no_hp_penanggung_jwb": "",
        "no_fax_penanggung_jwb": "",
        "email_penanggung_jwb": "",
        "flag_pajak_penanggung_jwb": "",
        "ket_pajak_penanggung_jwb": ""
      }
    ],
    "no_pengesahan": "",
    "tgl_pengesahan": "",
    "no_akta_lama": "",
    "tgl_akta_lama": "",
    "no_pengesahan_lama": "",
    "tgl_pengesahan_lama": "",
    "legalitas": [
      {
        "jenis_legal": "",
        "no_legal": "",
        "tgl_legal": "",
        "alamat_notaris": "",
        "nama_notaris": "",
        "telepon_notaris": ""
      }
    ],
    "data_rptka": {
      "jenis_rptka": "",
      "no_rptka": "",
      "rptka_awal": "",
      "rptka_akhir": "",
      "rptka_gaji": "",
      "jumlah_tka_rptka": "",
      "jangka_penggunaan_waktu": "",
      "jangka_waktu_permohonan_rptka": "",
      "rptka_jabatan": [
        {
          "id_jabatan": "",
          "jabatan": "",
          "jumlah": "",
          "tgl_mulai": "",
          "tgl_selesai": "",
          "keterangan": "",
          "rptka_tki_pendamping": [
            {
              "id_jabatan": "",
              "id_pendamping": "",
              "nama": "",
              "nik": "",
              "jabatan": "",
              "hp": "",
              "email": "",
              "foto": "",
              "pendidikan_min": "",
              "sertifikat": "",
              "pengalaman_kerja": "",
              "keterangan": ""
            }
          ]
        }
      ],
      "rptka_negara": [
        {
          "id_negara": "",
          "jumlah": ""
        }
      ],
      "rptka_lokasi": [
        {
          "lokasi_id": "",
          "jumlah": ""
        }
      ]
    },
    "data_proyek": [
      {
        "id_proyek": "",
        "nomor_proyek": "",
        "uraian_usaha": "",
        "jumlah_tki_l": "",
        "jumlah_tki_p": "",
        "jumlah_tka_l": "",
        "jumlah_tka_p": "",
        "kbli": "",
        "sektor": "",
        "memiliki_menguasai": "",
        "jenis_lokasi": "",
        "status_tanah": "",
        "luas_tanah": "",
        "satuan_luas_tanah": "",
        "pembelian_pematang_tanah": "",
        "bangunan_gedung": "",
        "mesin_peralatan": "",
        "mesin_peralatan_usd": "",
        "investasi_lain": "",
        "sub_jumlah": "",
        "modal_kerja": "",
        "jumlah_investasi": "",
        "tanggal_kurs": "",
        "nilai_kurs": "",
        "kd_kawasan": "",
        "jawab_lokasi_b": "",
        "jawab_lokasi_c": "",
        "jawab_lokasi_d": "",
        "jawab_lokasi_e": "",
        "jawab_lokasi_f": "",
        "jawab_lokasi_g": "",
        "flag_perluasan": "",
        "flag_cabang": "",
        "npwp_cabang": "",
        "nama_cabang": "",
        "jenis_identitas_pj": "",
        "no_identitas_pj": "",
        "nama_pj": "",
        "status_proyek": "",
        "jenis_proyek": "",
        "nama_kegiatan": "",
        "flag_merger": "",
        "npwp_perseroan_merger": "",
        "nama_perseroan_merger": "",
        "jumlah_lantai_bangunan": "",
        "luas_lantai_bangunan": "",
        "flag_psn": "",
        "pasal_181_a": "",
        "file_pasal_181_a": "",
        "pasal_181_b": "",
        "file_pasal_181_b": "",
        "pasal_181_c": "",
        "pasal_181_d": "",
        "pasal_181_3": "",
        "flag_obyek_vital_nasional": "",
        "nama_perairan": "",
        "kedalaman": "",
        "file_rencana_teknis": "",
        "data_lokasi_proyek": [
          {
            "id_proyek_lokasi": "",
            "proyek_daerah_id": "",
            "kd_kawasan": "",
            "alamat_usaha": "",
            "id_kegiatan": "",
            "response_kegiatan": "",
            "jenis_kawasan": "",
            "jenis_lokasi": "",
            "status_lokasi": "",
            "data_lokasi_proyek_shp": "",
            "data_lokasi_proyek": [
              {
                "serial": "",
                "lat_lng": ""
              }
            ],
            "data_posisi_proyek": [
              {
                "id_proyek_posisi": "",
                "id_proyek_lokasi": "",
                "posisi_lokasi": ""
              }
            ]
          }
        ],
        "data_proyek_produk": [
          {
            "id_produk": "",
            "id_proyek": "",
            "kbli": "",
            "id_bidang_usaha": "",
            "jenis_produksi": "",
            "kapasitas": "",
            "satuan": "",
            "merk_dagang": "",
            "pemegang_haki": "",
            "pemegang_paten": "",
            "pi_nomor": "",
            "pi_tanggal": "",
            "pi_npwp": "",
            "id_kbli_ta": "",
            "tkdn": ""
          }
        ]
      }
    ],
    "data_dni": [
      {
        "kd_dni": ""
      }
    ],
    "data_checklist": [
      {
        "id_produk": "",
        "id_proyek": "",
        "id_izin": "",
        "jenis _izin": "",
        "kd_izin": "",
        "kd_daerah": "",
        "nama_izin": "",
        "instansi": "",
        "id_bidang_spesifik": "",
        "bidang_spesifik": "",
        "id_kewenangan": "",
        "parameter_kewenangan": "",
        "kewenangan": "",
        "flag_checklist": "",
        "flag_transaksional": "",
        "flag_perpanjangan": "",
        "no_izin": "",
        "tgl_izin": "",
        "file_izin": "",
        "data_persyaratan": [
          {
            "id_syarat": "",
            "no_dokumen": "",
            "tgl_dokumen": "",
            "file_dokumen": "",
            "keterangan": ""
          }
        ]
      }
    ],
    "jenis_id_user_proses": "",
    "no_id_user_proses": "",
    "nama_user_proses": "",
    "email_user_proses": "",
    "hp_user_proses": "",
    "alamat_user_proses": "",
    "jns_kelamin_user_proses": "",
    "tempat_lahir_user_proses": "",
    "tgl_lahir_user_proses": "",
    "daerah_id_user_proses": "",
    "rt_rw_user_proses": "",
    "agama_user_proses": "",
    "status_perkawinan_user_proses": "",
    "pekerjaan_user_proses": "",
    "status_nib": "",
    "tipe_dokumen ": ""
  }
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"Token",description:"<p>SHA1(USERNAME+PASSWORD+NPWP+DATE(Ymd))</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "Token": "OSS000qw13242628gssssss812345654709820180514"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"dataNIB",description:"<p>dataNIB</p>"},{group:"Parameter",type:"string(13)",optional:!1,field:"dataNIB.nib",description:"<p>Nomor Induk Berusaha</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.tgl_pengajuan_nib",description:"<p>Tanggal Pengajuan NIB (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.tgl_terbit_nib",description:"<p>Tanggal Penerbitan NIB (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.tgl_perubahan_nib",description:"<p>Tanggal Perubahan NIB (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.oss_id",description:"<p>Oss Id adalah ID yang di Generate Sistem OSS dan Dikirimkan ke K/L/D Bersama Permohonan Nomor Induk Berusaha</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.id_izin",description:"<p>Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin</p>"},{group:"Parameter",type:"string(12)",optional:!1,field:"dataNIB.kd_izin",description:"<p>Kode Izin Sistem K/L/D (* Lihat Lampiran 8)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.kd_daerah",description:"<p>Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.kewenangan",description:"<p>00: Kewenangan Pusat;\xA0 01: Kewenangan Provinsi; 02: Kewenangan Kab/Kota</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.jenis_pelaku_usaha",description:"<p>Jenis Pelaku Usaha (* Lihat Lampiran 18)</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"dataNIB.no_npp",description:"<p>Nomor Pendaftaraan Perusahaan Untuk BPJS Ketenagakerjaan</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"dataNIB.no_va",description:"<p>Nomor Pendaftaraan Perusahaan Untuk BPJS Kesehatan</p>"},{group:"Parameter",type:"string(23)",optional:!1,field:"dataNIB.no_wlkp",description:"<p>Nomor Wajib Lapor Ketenagakerjaan Perusahaan</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.flag_perusahaan",description:"<p>Flag :Y = Untuk Perusahaan Baru,N = Untuk Perusahaan Lama / Exist</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.flag_ekspor",description:"<p>Y : Melakukan Aktifikas Ekspor, N : Tidak Melakukan Aktifitas Ekspor</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.flag_impor",description:"<p>Y : Melakukan Aktifikas Impor, N : Tidak Melakukan Aktifitas Impor</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.jenis_api",description:"<p>Jenis Angka Pengenal Impor (API) (* Lihat Lampiran 3)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.gabung_negara",description:"<p>PMA Merupakan Gabungan Negara Atau Tidak (* Y:Gabungan Negara, N: Bukan Gabungan Negara)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.negara_pma_dominan",description:"<p>Negara Asing Yang Memiliki Modal Mayoritas</p>"},{group:"Parameter",type:"number(20.2)",optional:!1,field:"dataNIB.total_pma",description:"<p>Total Modal PMA</p>"},{group:"Parameter",type:"number(20.2)",optional:!1,field:"dataNIB.nilai_pma_dominan",description:"<p>Nilai Modal PMA Dominan</p>"},{group:"Parameter",type:"number(20.2)",optional:!1,field:"dataNIB.nilai_pmdn",description:"<p>Nilai Modal PMDN</p>"},{group:"Parameter",type:"number(9.2)",optional:!1,field:"dataNIB.persen_pma",description:"<p>Persentase Modal PMA</p>"},{group:"Parameter",type:"number(9.2)",optional:!1,field:"dataNIB.persen_pmdn",description:"<p>Persentase Modal PMDN</p>"},{group:"Parameter",type:"number(5)",optional:!1,field:"dataNIB.kd_kawasan",description:"<p>Kode Kawasan (* Lihat Lampiran di https://oss.go.id/oss/#home/portal/lstKawasan)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.jenis_kawasan",description:"<p>Jenis Kawasan (* Lihat Lampiran 21)</p>"},{group:"Parameter",type:"string(5)",optional:!1,field:"dataNIB.versi_pia",description:"<p>Versi PIA OSS</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.jangka_waktu",description:"<p>Jangka Waktu (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.status_badan_hukum",description:"<p>Status Badan Hukum (* Lihat Lampiran 12)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.status_penanaman_modal",description:"<p>Status Penanaman Modal (* Lihat Lampiran 1)</p>"},{group:"Parameter",type:"string(15)",optional:!1,field:"dataNIB.npwp_perseroan",description:"<p>NPWP Perseroan</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.nama_perseroan",description:"<p>Nama Perseroan</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.nama_singkatan",description:"<p>Nama Singkatan Perseroan</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.jenis_perseroan",description:"<p>Jenis Perseroan (* Lihat Lampiran 2)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.status_perseroan",description:"<p>Status Perseroan (*Y: Terbuka, N:Tertutup)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.alamat_perseroan",description:"<p>Alamat Perseroan</p>"},{group:"Parameter",type:"string(7)",optional:!1,field:"dataNIB.rt_rw_perseroan",description:"<p>Rt Rw Perseroan</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.kelurahan_perseroan",description:"<p>Kelurahan Perseroan</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.perseroan_daerah_id",description:"<p>ID Daerah Perseroan (* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(5)",optional:!1,field:"dataNIB.kode_pos_perseroan",description:"<p>Kode Pos Perseroan</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"dataNIB.nomor_telpon_perseroan",description:"<p>Nomor Telepon Perseroan</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.email_perusahaan",description:"<p>Email Perusahaan</p>"},{group:"Parameter",type:"number(20.0)",optional:!1,field:"dataNIB.dalam_bentuk_uang",description:"<p>Modal Dalam Bentuk Uang (Valuta : IDR)</p>"},{group:"Parameter",type:"string(50000)",optional:!1,field:"dataNIB.dalam_bentuk_lain",description:"<p>Modal Dalam Bentuk Lainnya</p>"},{group:"Parameter",type:"number(20.0)",optional:!1,field:"dataNIB.total_modal_dasar",description:"<p>Total Modal Dasar (Valuta : IDR)</p>"},{group:"Parameter",type:"number(20.0)",optional:!1,field:"dataNIB.total_modal_ditempatkan",description:"<p>Total Modal Ditempatkan (Valuta : IDR)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.flag_umk",description:"<p>flag_umk</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.pemegang_saham",description:"<p>Data pemegang saham</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.pemegang_saham.jenis_pemegang_saham",description:"<p>Jenis Pemegang Saham (* Lihat Lampiran 13)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.pemegang_saham.flag_asing",description:"<p>Asal Pemegang Saham dari Dalam Negeri / Luar Negeri (Value : Y = asing, N = Bukan Asing)</p>"},{group:"Parameter",type:"string(20.0)",optional:!1,field:"dataNIB.pemegang_saham.total_modal_pemegang",description:"<p>Total Modal Pemegang Saham (Valuta : IDR)</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.pemegang_saham.jabatan_pemegang_saham",description:"<p>Jabatan Pemegang Saham</p>"},{group:"Parameter",type:"string(500)",optional:!1,field:"dataNIB.pemegang_saham.nama_pemegang_saham",description:"<p>Nama Pemegang Saham</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.pemegang_saham.jns_identitas_pemegang_saham",description:"<p>Jenis Identitas Pemegang Saham (* Lihat Lampiran 4)</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.pemegang_saham.no_identitas_pemegang_saham",description:"<p>Nomor Identitas Pemegang Saham</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.pemegang_saham.valid_identitas_pemegang_saham",description:"<p>Valid / Masa Berlaku Pemegang Saham (Format Date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.pemegang_saham.negara_asal_pemegang_saham",description:"<p>Negara Asal Pemegang Saham</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.pemegang_saham.pengendali_pemegang_saham",description:"<p>Nama Pengendali Pemegang Saham</p>"},{group:"Parameter",type:"string(15)",optional:!1,field:"dataNIB.pemegang_saham.npwp_pemegang_saham",description:"<p>NPWP Pemegang Saham</p>"},{group:"Parameter",type:"string(1024)",optional:!1,field:"dataNIB.pemegang_saham.alamat_pemegang_saham",description:"<p>Alamat Pemegang Saham</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.pemegang_saham.fax_pemegang_saham",description:"<p>Fax Pemegang Saham</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.pemegang_saham.email_pemegang_saham",description:"<p>Email Pemegang Saham</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.pemegang_saham.flag_pajak_pemegang_saham",description:"<p>Flag Validasi Pajak Pemegang Saham (* Lihat Lampiran 19)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.pemegang_saham.ket_pajak_pemegang_saham",description:"<p>Keterangan Validasi Pajak Pemegang Saham</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.penanggung_jwb",description:"<p>penanggung_jwb</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.penanggung_jwb.flag_asing",description:"<p>Asal Penanggung Jawab dari Dalam Negeri / Luar Negeri (Value : Y = asing, N = Bukan Asing)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.penanggung_jwb.jns_identitas_penanggung_jwb",description:"<p>Jenis Nik Penganggung Jawab (* Lihat Lampiran 4)</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.penanggung_jwb.no_identitas_penanggung_jwb",description:"<p>Nomor Identitas Penanggung Jawab</p>"},{group:"Parameter",type:"string(500)",optional:!1,field:"dataNIB.penanggung_jwb.nama_penanggung_jwb",description:"<p>Nama Penganggung Jawab</p>"},{group:"Parameter",type:"string(250)",optional:!1,field:"dataNIB.penanggung_jwb.jabatan_penanggung_jwb",description:"<p>Jabatan Penanggung Jawab</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.penanggung_jwb.kebangsaan_penanggung_jwb",description:"<p>Kebangsaan Penanggung Jawab (* Lihat Lampiran 6)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.penanggung_jwb.negara_asal_penanggung_jwb",description:"<p>Negara Asal Penanggung Jawab (* Sumber Kodefikasi Negara Mengikuti Standar Unedifact : http://www.unec e.org/cefact/loco de/service/locati on )</p>"},{group:"Parameter",type:"string(15)",optional:!1,field:"dataNIB.penanggung_jwb.npwp_penanggung_jwb",description:"<p>NPWP Penanggung Jawab</p>"},{group:"Parameter",type:"string(1024)",optional:!1,field:"dataNIB.penanggung_jwb.alamat_penanggung_jwb",description:"<p>Alamat Penanggung Jawab</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.penanggung_jwb.jalan_penanggung_jwb",description:"<p>Alamat Jalan Penanggung Jawab</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.penanggung_jwb.blok_penanggung_jwb",description:"<p>Alamat Blok Penanggung Jawab</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.penanggung_jwb.no_penanggung_jwb",description:"<p>Alamat Nomor Penanggung Jawab</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.penanggung_jwb.rt_rw_penanggung_jwb",description:"<p>RT RW Penanggung Jawab</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.penanggung_jwb.kelurahan_penanggung_jwb",description:"<p>Kelurahan Penanggung Jawab</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.penanggung_jwb.daerah_id_penanggung_jwb",description:"<p>ID Daerah Penanggung Jawab (* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(5)",optional:!1,field:"dataNIB.penanggung_jwb.kode_pos_penanggung_jwb",description:"<p>Kode Pos Penanggung Jawab</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.penanggung_jwb.no_telp_penanggung_jwb",description:"<p>Nomor Telepon Penanggung Jawab</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.penanggung_jwb.no_hp_penanggung_jwb",description:"<p>Nomor Handphone Penanggung Jawab</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.penanggung_jwb.no_fax_penanggung_jwb",description:"<p>Nomor Fax Penanggung Jawab</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.penanggung_jwb.email_penanggung_jwb",description:"<p>Email Penanggung Jawab</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.penanggung_jwb.flag_pajak_penanggung_jwb",description:"<p>Flag Validasi Pajak Penanggung Jawab (* Lihat Lampiran 19)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.penanggung_jwb.ket_pajak_penanggung_jwb",description:"<p>Keterangan Validasi Pajak Penanggung Jawab</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.no_pengesahan",description:"<p>Nomor Pengesahan Akta Dari Kumham</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.tgl_pengesahan",description:"<p>Tanggal Pengesahan Akta Dari Kumham (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.no_akta_lama",description:"<p>Nomor Akta Lama Sebelum Perubahan</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.tgl_akta_lama",description:"<p>Tanggal Akta Lama Sebelum Perubahan (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.no_pengesahan_lama",description:"<p>Nomor Pengesahan Akta Lama Sebelum Perubahan Dari Kumham</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.tgl_pengesahan_lama",description:"<p>Tanggal Pengesahan Akta Lama Sebelum Perubahan Dari Kumham (format date : YYYY-MM- DD)</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.legalitas",description:"<p>legalitas</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.legalitas.jenis_legal",description:"<p>Jenis Legal Perusahaan (* Lihat Lampiran 7)</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.legalitas.no_legal",description:"<p>Nomor Legal Perusahaan</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.legalitas.tgl_legal",description:"<p>Tanggal Legal Perusahaan (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.legalitas.alamat_notaris",description:"<p>Alamat Notaris</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.legalitas.nama_notaris",description:"<p>Nama Notaris</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.legalitas.telepon_notaris",description:"<p>Telepon Notaris</p>"},{group:"Parameter",type:"object",optional:!1,field:"dataNIB.data_rptka",description:"<p>data_rptka</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_rptka.jenis_rptka",description:"<p>Jenis Flag RPTKA ( 01 : Baru, 02: Perubahan)</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"dataNIB.data_rptka.no_rptka",description:"<p>No Bacode RPTKA</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_rptka.rptka_awal",description:"<p>Masa Berlaku Dari Tanggal(format date : YYYY-MM- DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_rptka.rptka_akhir",description:"<p>Masa Berlaku Sampai Tanggal(format date : YYYY-MM- DD)</p>"},{group:"Parameter",type:"number(20.2)",optional:!1,field:"dataNIB.data_rptka.rptka_gaji",description:"<p>Gaji Tenaga Asing</p>"},{group:"Parameter",type:"number(11)",optional:!1,field:"dataNIB.data_rptka.jumlah_tka_rptka",description:"<p>Jumlah Tenaga Kerja Asing (TKA) dalam Rencana Penggunaan Tenaga Kerja Asing (RPTKA)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_rptka.jangka_penggunaan_waktu",description:"<p>Jangka Waktu Penggunaan Tenaga Kerja Asing (TKA) dalam Izin Rencana Penggunaan Tenaga Kerja Asing (RPTKA) (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_rptka.jangka_waktu_permohonan_rptka",description:"<p>Jangka Waktu Permohonan RPTKA (dalam hitungan bulan)</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan",description:"<p>rptka_jabatan</p>"},{group:"Parameter",type:"string(11)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.id_jabatan",description:"<p>ID Jabatan Tenaga Kerja Asing berdasarkan https://jdih.kemnaker.go.id/data_puu/KEP247_MENX_2011.pdf</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.jabatan",description:"<p>Nama Jabatan</p>"},{group:"Parameter",type:"string(11)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.jumlah",description:"<p>Jumlah Orang Yang Memiliki Jabatan</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.tgl_mulai",description:"<p>Tanggal Mulai Jabatan (format date : YYYY-MM- DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.tgl_selesai",description:"<p>Tanggal Selesai Jabatan (format date : YYYY-MM- DD)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.keterangan",description:"<p>Keterangan</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping",description:"<p>rptka_tki_pendamping</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.id_jabatan",description:"<p>Id Jabatan</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.id_pendamping",description:"<p>Id TKI Pendamping</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.nama",description:"<p>Nama TKI Pendamping</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.nik",description:"<p>Nomor NIK TKI Pendamping</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.jabatan",description:"<p>Nama Jabatan TKI Pendamping</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.hp",description:"<p>Nomor HP TKI Pendamping</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.email",description:"<p>Email TKI Pendampiag</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.foto",description:"<p>Foto TKI Pendamping Attachment File dalam Bentukbentuk base64 dengan format (data:image/jpeg;base64,string() ENCODE IMAGE)</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.pendidikan_min",description:"<p>Tingkat Pendidikan Minimal TKI Pendamping</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.sertifikat",description:"<p>Sertifikat Kompetensi TKI Pendamping</p>"},{group:"Parameter",type:"string(11)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.pengalaman_kerja",description:"<p>Pengalaman Kerja TKI Pendamping (dalam tahun)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.keterangan",description:"<p>Keterangan</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_rptka.rptka_negara",description:"<p>rptka_negara</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_rptka.rptka_negara.id_negara",description:"<p>Negara Asal Tenaga Kerja Asing(* Sumber Kodefikasi Negara Mengikuti Standar Unedifact : http://www.unec e.org/cefact/loco de/service/locati on )</p>"},{group:"Parameter",type:"string(11)",optional:!1,field:"dataNIB.data_rptka.rptka_negara.jumlah",description:"<p>Jumlah Tenaga Kerja Asing (TKA) dalam Rencana Penggunaan Tenaga Kerja Asing (RPTKA)</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_rptka.rptka_lokasi",description:"<p>rptka_lokasi</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_rptka.rptka_lokasi.lokasi_id",description:"<p>ID Daerah Penanggung Jawab (* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(11)",optional:!1,field:"dataNIB.data_rptka.rptka_lokasi.jumlah",description:"<p>Jumlah Tenaga Kerja Asing (TKA) dalam Rencana Penggunaan Tenaga Kerja Asing (RPTKA)</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_proyek",description:"<p>data_proyek</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_proyek.id_proyek",description:"<p>ID / Kode Proyek</p>"},{group:"Parameter",type:"string(26)",optional:!1,field:"dataNIB.data_proyek.nomor_proyek",description:"<p>Nomor Permohonan Proyek</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_proyek.uraian_usaha",description:"<p>Uraian Usaha Proyek</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_proyek.jumlah_tki_l",description:"<p>Jumlah Tenaga Kerja Indonesia (TKI) Laki -Laki</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_proyek.jumlah_tki_p",description:"<p>Jumlah Tenaga Kerja Indonesia (TKI) Perempuan</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_proyek.jumlah_tka_l",description:"<p>Jumlah Tenaga Kerja Asing (TKA) Laki -Laki</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_proyek.jumlah_tka_p",description:"<p>Jumlah Tenaga Kerja Asing (TKA) Perempuan</p>"},{group:"Parameter",type:"string(7)",optional:!1,field:"dataNIB.data_proyek.kbli",description:"<p>Kode KBLI (* Menggunakan Kode KBLI Tahun 2020)</p>"},{group:"Parameter",type:"string(3)",optional:!1,field:"dataNIB.data_proyek.sektor",description:"<p>Sektor Usaha Berdasarkan KBLI (* Lihat Lampiran 20)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.memiliki_menguasai",description:"<p>Sudah Memiliki atar Menguasai Lahan (Value : Y = Sudah Memiliki atau Menguasai Lahan, N = Belum Memiliki atau Menguasai Lahan)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.jenis_lokasi",description:"<p>Lokasi Berada dalam Lintas Administratif (Value : Y = Berada Dalam Lintas Administrasi, N = Bukan Berada Dalam Lintas Administrasi)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.status_tanah",description:"<p>Status Kepemilikan Tanah (* Lihat Lampiran 5)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_proyek.luas_tanah",description:"<p>Luas Bidang tanah</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.satuan_luas_tanah",description:"<p>Satuan Luas Tanah (*Lihat Lampiran 17)</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_proyek.pembelian_pematang_tanah",description:"<p>Nilai Pembelian Pematang Tanah (Valuta:IDR)</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_proyek.bangunan_gedung",description:"<p>Nilai Bangunan Gedung (Valuta:IDR)</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_proyek.mesin_peralatan",description:"<p>Nilai Mesin Peralatan (Valuta:IDR)</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_proyek.mesin_peralatan_usd",description:"<p>Nilai Mesin Peralatan dalam USD</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_proyek.investasi_lain",description:"<p>Investasi Lainnya</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_proyek.sub_jumlah",description:"<p>Jumlah Asset (Valuta:IDR)</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_proyek.modal_kerja",description:"<p>Nilai Modal Kerja (Valuta:IDR)</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_proyek.jumlah_investasi",description:"<p>Nilai Jumlah Investasi (Valuta:IDR)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_proyek.tanggal_kurs",description:"<p>Tanggal Kurs (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_proyek.nilai_kurs",description:"<p>Nilai Kurs</p>"},{group:"Parameter",type:"number(11)",optional:!1,field:"dataNIB.data_proyek.kd_kawasan",description:"<p>Kode Kawasan (* Lihat Lampiran di https://oss.go.id/oss/#home/portal/lstKawasan)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.jawab_lokasi_b",description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point B</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.jawab_lokasi_c",description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point C</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.jawab_lokasi_d",description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point D</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.jawab_lokasi_e",description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point E</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.jawab_lokasi_f",description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point F</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.jawab_lokasi_g",description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point G</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.flag_perluasan",description:"<p>Proyek Merupakan Perluasan/Penge mbangan Usaha Atau Bukan (Value : Y = Proses Perluasan/Penge mbangan Usaha, N = Bukan Proses Perluasan/Penge mbangan Usaha)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.flag_cabang",description:"<p>Proyek Sebagai Kantor Cabang Atau Bukan (Value : Y = Sebagai Kantor Cabang, N = Bukan Sebagai Kantor Cabang)</p>"},{group:"Parameter",type:"string(15)",optional:!1,field:"dataNIB.data_proyek.npwp_cabang",description:"<p>NPWP Kantor Cabang</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_proyek.nama_cabang",description:"<p>Nama Kantor Cabang / Proyek</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.jenis_identitas_pj",description:"<p>Jenis Identitas Penanggung Jawab Proyek (* Lihat Lampiran 4)</p>"},{group:"Parameter",type:"string(16)",optional:!1,field:"dataNIB.data_proyek.no_identitas_pj",description:"<p>No Identitas Penanggung Jawab Proyek</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.data_proyek.nama_pj",description:"<p>Nama Penanggung Jawab Proyek</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.status_proyek",description:"<p>Status Proyek(* Lihat Lampiran 22)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.jenis_proyek",description:"<p>Jenis Proyek (* Lihat Lampiran 26)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_proyek.nama_kegiatan",description:"<p>Nama Proyek / Kegiatan Proyek, Untuk Perseorangan Digunakan Untuk Mencatat Nama Dagangannya Misal (UD. Percobaan Jaya)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.flag_merger",description:"<p>Flag Proyek Hasil Merger atau Bukan (Y : Hasil Merger, N: Bukan Hasil Merger)</p>"},{group:"Parameter",type:"string(15)",optional:!1,field:"dataNIB.data_proyek.npwp_perseroan_merger",description:"<p>NPWP Perusahaan Merging</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_proyek.nama_perseroan_merger",description:"<p>Nama Perusahaan Merging</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_proyek.jumlah_lantai_bangunan",description:"<p>Jumlah Lantai Bangunan</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_proyek.luas_lantai_bangunan",description:"<p>Luas Lantai Bangunan</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.flag_psn",description:"<p>Flag Proyek Strategis Nasional (Y/N)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.pasal_181_a",description:"<p>Questionaire terkait PP 5/2021 pasal 181 poin 1.a</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.file_pasal_181_a",description:"<p>File Izin Lokasi KEK/KI</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.pasal_181_b",description:"<p>Questionaire terkait PP 5/2021 pasal 181 poin 1.b</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.file_pasal_181_b",description:"<p>File Izin Lokasi yang sudah dimiliki</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.pasal_181_c",description:"<p>Questionaire terkait PP 5/2021 pasal 181 poin 1.c</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.pasal_181_d",description:"<p>Questionaire terkait PP 5/2021 pasal 181 poin 1.d</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.pasal_181_3",description:"<p>Questionaire terkait PP 5/2021 pasal 181 poin 3</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.flag_obyek_vital_nasional",description:"<p>Flag Obyek Vital Nasional</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_proyek.nama_perairan",description:"<p>Nama Lokasi Perairan</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_proyek.kedalaman",description:"<p>Kedalaman Perairan</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"dataNIB.data_proyek.file_rencana_teknis",description:"<p>file_rencana_teknis</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek",description:"<p>data_lokasi_proyek</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.id_proyek_lokasi",description:"<p>ID / Kode Lokasi Proyek</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.proyek_daerah_id",description:"<p>Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(3)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.kd_kawasan",description:"<p>Kode Kawasan (* Lihat Lampiran di https://oss.go.id/oss/#home/portal/lstKawasan)</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.alamat_usaha",description:"<p>Alamat Kegiatan Proyek / Usaha</p>"},{group:"Parameter",type:"string(6)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.id_kegiatan",description:"<p>Id Kegiatan Usaha Berdasarkan RDTR Digital</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.response_kegiatan",description:"<p>Response Kegiatan Usaha Berdasarkan Validasi Kegiatan RDTR Digital</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.jenis_kawasan",description:"<p>Jenis Kawasan (* Lihat Lampiran 16)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.jenis_lokasi",description:"<p>Jenis Lokasi Lintas Administratif atau Tidak (01 : Lintas Administratif, 02 : Tidak Lintas Administratif)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.status_lokasi",description:"<p>Status Lokasi(* Lihat Lampiran 25)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.data_lokasi_proyek_shp",description:"<p>data_lokasi_proyek_shp</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.data_lokasi_proyek",description:"<p>data_lokasi_proyek</p>"},{group:"Parameter",type:"number(11)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.data_lokasi_proyek.serial",description:"<p>Serial Koordinat</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.data_lokasi_proyek.lat_lng",description:"<p>Koordinat Latitude &amp; Longitude</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek",description:"<p>data_posisi_proyek</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek.id_proyek_posisi",description:"<p>ID / Kode Posisi Proyek</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek.id_proyek_lokasi",description:"<p>ID / Kode Lokasi Proyek</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek.posisi_lokasi",description:"<p>Posisi Lokasi (* Lihat Lampiran 24)</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk",description:"<p>data_proyek_produk</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.id_produk",description:"<p>ID / Kode Produk</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.id_proyek",description:"<p>ID / Kode Proyek</p>"},{group:"Parameter",type:"string(7)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.kbli",description:"<p>Kode KBLI (* Menggunakan Kode KBLI Tahun 2020)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.id_bidang_usaha",description:"<p>ID Bidang Usaha Berdasarkan Kodefikasi Data Negatif Investasi (DNI) (* Lihat Lampiran 15)</p>"},{group:"Parameter",type:"string(1024)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.jenis_produksi",description:"<p>Rencana Produksi Yang Dihasilkan</p>"},{group:"Parameter",type:"number(20.2)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.kapasitas",description:"<p>Kapasitas produksi suatu produk</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.satuan",description:"<p>Satuan Dari Kapasitas Produksi</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.merk_dagang",description:"<p>Merk Dagang</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.pemegang_haki",description:"<p>Pemegang Hak Cipta</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.pemegang_paten",description:"<p>Pemegang Hak Paten</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.pi_nomor",description:"<p>Nomor Pendaftaran Penanaman Modal Untuk Case Grand Father Clause (GFC)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.pi_tanggal",description:"<p>Tanggal Pendaftaran Penanaman Modal Untuk Case Grand Father Clause (GFC) format date : YYYY-MM- DD</p>"},{group:"Parameter",type:"string(16)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.pi_npwp",description:"<p>NPWP Pendaftaran Penanaman Modal Untuk Case Grand Father Clause (GFC)</p>"},{group:"Parameter",type:"string(9)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.id_kbli_ta",description:"<p>Penanda bahwa cakupan produk untuk kebutuhan tax allowance</p>"},{group:"Parameter",type:"number(3.2)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.tkdn",description:"<p>Tingkat Kandungan Dalam Negeri</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_dni",description:"<p>data_dni</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_dni.kd_dni",description:"<p>Kodefikasi Data Negatif Investasi (DNI) (* Lihat Lampiran 15)</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_checklist",description:"<p>data_checklist</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_checklist.id_produk",description:"<p>ID Produk</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_checklist.id_proyek",description:"<p>ID / Kode Proyek</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_checklist.id_izin",description:"<p>Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin</p>"},{group:"Parameter",type:"string(3)",optional:!1,field:"dataNIB.data_checklist.jenis",description:"<p>_izin	Jenis Perizinan (* Lihat Lampiran 27)</p>"},{group:"Parameter",type:"string(13)",optional:!1,field:"dataNIB.data_checklist.kd_izin",description:"<p>Kode Izin Sistem K/L/D (* https://services.oss.go.id/getListIzi n)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_checklist.kd_daerah",description:"<p>Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_checklist.nama_izin",description:"<p>Nama Izin</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.data_checklist.instansi",description:"<p>Nama Instansi</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_checklist.id_bidang_spesifik",description:"<p>ID Bidang Spesifik</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"dataNIB.data_checklist.bidang_spesifik",description:"<p>Uraian Bidang Spesifik</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_checklist.id_kewenangan",description:"<p>ID Kewenangan</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_checklist.parameter_kewenangan",description:"<p>Parameter Kewenangan Izin</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_checklist.kewenangan",description:"<p>00: Kewenangan Pusat; 01: Kewenangan Provinsi; 02: Kewenangan Kab/Kota</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_checklist.flag_checklist",description:"<p>Flag Checklist Komitmen (* Lihat Lampiran 28)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_checklist.flag_transaksional",description:"<p>Flag : Y/N, Flag Izin Komersial/Operas ional Diajukan Transaksional (Bisa Mengajukan Berulang)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_checklist.flag_perpanjangan",description:"<p>Flag : Y/N, Flag Bahwa Izin Usaha ini Adalah Hasil Perpanjangan Dari Izin Usaha Yang Terbit Sebelum OSS</p>"},{group:"Parameter",type:"string(150)",optional:!1,field:"dataNIB.data_checklist.no_izin",description:"<p>Nomor Izin Yang Terbit dan Masih Berlaku Sebelum OSS Diterapkan</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_checklist.tgl_izin",description:"<p>Tanggal Izin Yang Terbit dan Masih Berlaku Sebelum OSS Diterapkan (* Format:YYYY- MM-DD)</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"dataNIB.data_checklist.file_izin",description:"<p>Attachment File Izin Yang Terbit dan Masih Berlaku Sebelum OSS Diterapkan Dalam Bentuk File PDF/Image Berupa Link (* Ukuran File Maks: 2MB)</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_checklist.data_persyaratan",description:"<p>data_persyaratan</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_checklist.data_persyaratan.id_syarat",description:"<p>Id / Kode Persyaratan</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.data_checklist.data_persyaratan.no_dokumen",description:"<p>Nomor Dokumen Persyaratan</p>"},{group:"Parameter",type:"string(8)",optional:!1,field:"dataNIB.data_checklist.data_persyaratan.tgl_dokumen",description:"<p>Tanggal Dokumen Persyaratan (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"dataNIB.data_checklist.data_persyaratan.file_dokumen",description:"<p>Attachment File Izin dalam Bentuk File PDF/Image Berupa Link (* Ukuran File Maks: 2MB)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_checklist.data_persyaratan.keterangan",description:"<p>Keterangan Dokumen Persyaratan</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.jenis_id_user_proses",description:"<p>Kode Jenis Identitas (* Lihat Lampiran 4)</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.no_id_user_proses",description:"<p>No Identitas Pemroses NIB</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.nama_user_proses",description:"<p>Nama User Pemroses NIB</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.email_user_proses",description:"<p>Email User Pemroses NIB</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.hp_user_proses",description:"<p>No HP Pemroses NIB</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.alamat_user_proses",description:"<p>Alamat Pemroses NIB</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.jns_kelamin_user_proses",description:"<p>Jenis Kelamin Pemroses NIB (L : Laki-Laki, P : Perempuan)</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.tempat_lahir_user_proses",description:"<p>Tempat Lahir Pemroses NIB</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.tgl_lahir_user_proses",description:"<p>Tanggal Lahir User Pemroses (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.daerah_id_user_proses",description:"<p>ID Daerah User Pemroses(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.rt_rw_user_proses",description:"<p>RT RW Pemroses NIB</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.agama_user_proses",description:"<p>Agama Pemroses NIB</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.status_perkawinan_user_proses",description:"<p>Status Perkawinan Pemroses NIB</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.pekerjaan_user_proses",description:"<p>Pekerjaan Pemroses NIB</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.status_nib",description:"<p>Status Penerbitan NIB (* Lihat Lampiran 14)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.tipe_dokumen",description:"<p>Tipe Dokumen (9:Original, 5:Update, 3:Pencabutan, 4:Pembatalan)</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
{
  "dataNIB": {
    "nib": "",
    "tgl_pengajuan_nib": "",
    "tgl_terbit_nib": "",
    "tgl_perubahan_nib": "",
    "oss_id": "",
    "id_izin": "",
    "kd_izin": "",
    "kd_daerah": "",
    "kewenangan": "",
    "jenis_pelaku_usaha": "",
    "no_npp": "",
    "no_va": "",
    "no_wlkp": "",
    "flag_perusahaan": "",
    "flag_ekspor": "",
    "flag_impor": "",
    "jenis_api": "",
    "gabung_negara": "",
    "negara_pma_dominan": "",
    "total_pma": "",
    "nilai_pma_dominan": "",
    "nilai_pmdn": "",
    "persen_pma": "",
    "persen_pmdn": "",
    "kd_kawasan": "",
    "jenis_kawasan": "",
    "versi_pia": "",
    "jangka_waktu": "",
    "status_badan_hukum": "",
    "status_penanaman_modal": "",
    "npwp_perseroan": "",
    "nama_perseroan": "",
    "nama_singkatan": "",
    "jenis_perseroan": "",
    "status_perseroan": "",
    "alamat_perseroan": "",
    "rt_rw_perseroan": "",
    "kelurahan_perseroan": "",
    "perseroan_daerah_id": "",
    "kode_pos_perseroan": "",
    "nomor_telpon_perseroan": "",
    "email_perusahaan": "",
    "dalam_bentuk_uang": "",
    "dalam_bentuk_lain": "",
    "total_modal_dasar": "",
    "total_modal_ditempatkan": "",
    "flag_umk": "",
    "pemegang_saham": [
      {
        "jenis_pemegang_saham": "",
        "flag_asing": "",
        "total_modal_pemegang": "",
        "jabatan_pemegang_saham": "",
        "nama_pemegang_saham": "",
        "jns_identitas_pemegang_saham": "",
        "no_identitas_pemegang_saham": "",
        "valid_identitas_pemegang_saham": "",
        "negara_asal_pemegang_saham": "",
        "pengendali_pemegang_saham": "",
        "npwp_pemegang_saham": "",
        "alamat_pemegang_saham": "",
        "fax_pemegang_saham": "",
        "email_pemegang_saham": "",
        "flag_pajak_pemegang_saham": "",
        "ket_pajak_pemegang_saham": ""
      }
    ],
    "penanggung_jwb": [
      {
        "flag_asing": "",
        "jns_identitas_penanggung_jwb": "",
        "no_identitas_penanggung_jwb": "",
        "nama_penanggung_jwb": "",
        "jabatan_penanggung_jwb": " ",
        "kebangsaan_penanggung_jwb": "",
        "negara_asal_penanggung_jwb": "",
        "npwp_penanggung_jwb": "",
        "alamat_penanggung_jwb": "",
        "jalan_penanggung_jwb": "",
        "blok_penanggung_jwb": "",
        "no_penanggung_jwb": "",
        "rt_rw_penanggung_jwb": "",
        "kelurahan_penanggung_jwb": "",
        "daerah_id_penanggung_jwb": "",
        "kode_pos_penanggung_jwb": "",
        "no_telp_penanggung_jwb": "",
        "no_hp_penanggung_jwb": "",
        "no_fax_penanggung_jwb": "",
        "email_penanggung_jwb": "",
        "flag_pajak_penanggung_jwb": "",
        "ket_pajak_penanggung_jwb": ""
      }
    ],
    "no_pengesahan": "",
    "tgl_pengesahan": "",
    "no_akta_lama": "",
    "tgl_akta_lama": "",
    "no_pengesahan_lama": "",
    "tgl_pengesahan_lama": "",
    "legalitas": [
      {
        "jenis_legal": "",
        "no_legal": "",
        "tgl_legal": "",
        "alamat_notaris": "",
        "nama_notaris": "",
        "telepon_notaris": ""
      }
    ],
    "data_rptka": {
      "jenis_rptka": "",
      "no_rptka": "",
      "rptka_awal": "",
      "rptka_akhir": "",
      "rptka_gaji": "",
      "jumlah_tka_rptka": "",
      "jangka_penggunaan_waktu": "",
      "jangka_waktu_permohonan_rptka": "",
      "rptka_jabatan": [
        {
          "id_jabatan": "",
          "jabatan": "",
          "jumlah": "",
          "tgl_mulai": "",
          "tgl_selesai": "",
          "keterangan": "",
          "rptka_tki_pendamping": [
            {
              "id_jabatan": "",
              "id_pendamping": "",
              "nama": "",
              "nik": "",
              "jabatan": "",
              "hp": "",
              "email": "",
              "foto": "",
              "pendidikan_min": "",
              "sertifikat": "",
              "pengalaman_kerja": "",
              "keterangan": ""
            }
          ]
        }
      ],
      "rptka_negara": [{ "id_negara": "", "jumlah": "" }],
      "rptka_lokasi": [{ "lokasi_id": "", "jumlah": "" }]
    },
    "data_proyek": [
      {
        "id_proyek": "",
        "nomor_proyek": "",
        "uraian_usaha": "",
        "jumlah_tki_l": "",
        "jumlah_tki_p": "",
        "jumlah_tka_l": "",
        "jumlah_tka_p": "",
        "kbli": "",
        "sektor": "",
        "memiliki_menguasai": "",
        "jenis_lokasi": "",
        "status_tanah": "",
        "luas_tanah": "",
        "satuan_luas_tanah": "",
        "pembelian_pematang_tanah": "",
        "bangunan_gedung": "",
        "mesin_peralatan": "",
        "mesin_peralatan_usd": "",
        "investasi_lain": "",
        "sub_jumlah": "",
        "modal_kerja": "",
        "jumlah_investasi": "",
        "tanggal_kurs": "",
        "nilai_kurs": "",
        "kd_kawasan": "",
        "jawab_lokasi_b": "",
        "jawab_lokasi_c": "",
        "jawab_lokasi_d": "",
        "jawab_lokasi_e": "",
        "jawab_lokasi_f": "",
        "jawab_lokasi_g": "",
        "flag_perluasan": "",
        "flag_cabang": "",
        "npwp_cabang": "",
        "nama_cabang": "",
        "jenis_identitas_pj": "",
        "no_identitas_pj": "",
        "nama_pj": "",
        "status_proyek": "",
        "jenis_proyek": "",
        "nama_kegiatan": "",
        "flag_merger": "",
        "npwp_perseroan_merger": "",
        "nama_perseroan_merger": "",
        "jumlah_lantai_bangunan": "",
        "luas_lantai_bangunan": "",
        "flag_psn": "",
        "pasal_181_a": "",
        "file_pasal_181_a": "",
        "pasal_181_b": "",
        "file_pasal_181_b": "",
        "pasal_181_c": "",
        "pasal_181_d": "",
        "pasal_181_3": "",
        "flag_obyek_vital_nasional": "",
        "nama_perairan": "",
        "kedalaman": "",
        "file_rencana_teknis": "",
        "data_lokasi_proyek": [
          {
            "id_proyek_lokasi": "",
            "proyek_daerah_id": "",
            "kd_kawasan": "",
            "alamat_usaha": "",
            "id_kegiatan": "",
            "response_kegiatan": "",
            "jenis_kawasan": "",
            "jenis_lokasi": "",
            "status_lokasi": "",
            "data_lokasi_proyek_shp": "",
            "data_lokasi_proyek": [{ "serial": "", "lat_lng": "" }],
            "data_posisi_proyek": [
              {
                "id_proyek_posisi": "",
                "id_proyek_lokasi": "",
                "posisi_lokasi": ""
              }
            ]
          }
        ],
        "data_proyek_produk": [
          {
            "id_produk": "",
            "id_proyek": "",
            "kbli": "",
            "id_bidang_usaha": "",
            "jenis_produksi": "",
            "kapasitas": "",
            "satuan": "",
            "merk_dagang": "",
            "pemegang_haki": "",
            "pemegang_paten": "",
            "pi_nomor": "",
            "pi_tanggal": "",
            "pi_npwp": "",
            "id_kbli_ta": "",
            "tkdn": ""
          }
        ]
      }
    ],
    "data_dni": [{ "kd_dni": "" }],
    "data_checklist": [
      {
        "id_produk": "",
        "id_proyek": "",
        "id_izin": "",
        "jenis _izin": "",
        "kd_izin": "",
        "kd_daerah": "",
        "nama_izin": "",
        "instansi": "",
        "id_bidang_spesifik": "",
        "bidang_spesifik": "",
        "id_kewenangan": "",
        "parameter_kewenangan": "",
        "kewenangan": "",
        "flag_checklist": "",
        "flag_transaksional": "",
        "flag_perpanjangan": "",
        "no_izin": "",
        "tgl_izin": "",
        "file_izin": "",
        "data_persyaratan": [
          {
            "id_syarat": "",
            "no_dokumen": "",
            "tgl_dokumen": "",
            "file_dokumen": "",
            "keterangan": ""
          }
        ]
      }
    ],
    "jenis_id_user_proses": "",
    "no_id_user_proses": "",
    "nama_user_proses": "",
    "email_user_proses": "",
    "hp_user_proses": "",
    "alamat_user_proses": "",
    "jns_kelamin_user_proses": "",
    "tempat_lahir_user_proses": "",
    "tgl_lahir_user_proses": "",
    "daerah_id_user_proses": "",
    "rt_rw_user_proses": "",
    "agama_user_proses": "",
    "status_perkawinan_user_proses": "",
    "pekerjaan_user_proses": "",
    "status_nib": "",
    "tipe_dokumen ": ""
  }
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"Object",optional:!1,field:"responreceiveNIBKKPR",description:"<p>Response receive NIB KKPR</p>"},{group:"200",type:"String(1)",optional:!1,field:"responreceiveNIBKKPR.status",description:"<p>Status respon (1: TRUE; 2: FALSE)</p>"},{group:"200",type:"String(255)",optional:!1,field:"responreceiveNIBKKPR.keterangan",description:"<p>Keterangan Respon</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
{
	 "responreceiveNIBKKPR": {
		 "status": "",
		 "keterangan": ""
	 }
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
	 "responreceiveNIBKKPR": {
		 "status": "",
		 "keterangan": ""
	 }
}`,type:"json"}]},filename:"endpoint.js",groupTitle:"NIB",sampleRequest:[{url:"https://server.digitaltelkom.dev/oss-sandbox/receiveNIBKKPR"}]},{type:"post",url:"/receiveNIBPSE",title:"Receive NIB PSE",version:"5.0.0",description:"<p>Mengirimkan Data NIB PSE Asing dari Sistem OSS ke Sistem K/L/D</p>",name:"receiveNIBPSE",group:"NIB",examples:[{title:"Curl Request Example:",content:`curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/receiveNIBPSE' \\
--header 'Token: {{token}}' \\
--header 'Content-Type: application/json' \\
--data-raw '{
  "dataNIBPSE": {
    "nib": "",
    "tgl_pengajuan_nib": "",
    "tgl_terbit_nib": "",
    "tgl_perubahan_nib": "",
    "oss_id": "",
    "id_izin": "",
    "kd_izin": "",
    "kd_daerah": "",
    "kewenangan": "",
    "versi_pia": "",
    "nama_prinsipal": "",
    "alamat_prinsipal": "",
    "id_negara_prinsipal": "",
    "nomor_telepon_prinsipal": "",
    "email_prinsipal": "",
    "no_akta_pendirian": "",
    "tgl_akta_pendirian": "",
    "file_akta_prinsipal": "",
    "file_akta_domisili": "",
    "penanggung_jwb": [
      {
        "no_identitas_penanggung_jwb": "",
        "nama_penanggung_jwb": "",
        "negara_asal_penanggung_jwb": "",
        "alamat_penanggung_jwb": "",
        "daerah_id_penanggung_jwb": "",
        "no_telp_penanggung_jwb": "",
        "email_penanggung_jwb": ""
      }
    ],
    "data_proyek": [
      {
        "id_proyek": "",
        "nama_sistem_elektronik": "",
        "sektor_sistem": "",
        "url_sistem": "",
        "domain": "",
        "deskripsi_model_bisnis": "",
        "deskripsi_singkat_fungsi_sistem": "",
        "uraian_fungsi_sistem": "",
        "deskripsi_singkat_proses_bisnis_sistem": "",
        "uraian_proses_bisnis_sistem": "",
        "jumlah_pengguna_indonesia": "",
        "nilai_transaksi_indonesia": ""
      }
    ],
    "data_checklist": [
      {
        "id_proyek": "",
        "id_izin": "",
        "kd_izin": "",
        "kd_daerah": "",
        "nama_izin": "",
        "instansi": "",
        "kewenangan": "",
        "flag_checklist": ""
      }
    ],
    "jenis_id_user_proses": "",
    "no_id_user_proses": "",
    "nama_user_proses": "",
    "email_user_proses": "",
    "hp_user_proses": "",
    "alamat_user_proses": "",
    "jns_kelamin_user_proses": "",
    "tempat_lahir_user_proses": "",
    "tgl_lahir_user_proses": "",
    "daerah_id_user_proses": "",
    "rt_rw_user_proses": "",
    "agama_user_proses": "",
    "status_perkawinan_user_proses": "",
    "pekerjaan_user_proses": "",
    "status_nib": "",
    "tipe_dokumen": ""
  }
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"Token",description:"<p>SHA1(USERNAME+PASSWORD+NPWP+DATE(Ymd))</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "Token": "OSS000qw13242628gssssss812345654709820180514"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"dataNIBPSE",description:"<p>dataNIBPSE</p>"},{group:"Parameter",type:"string(13)",optional:!1,field:"dataNIBPSE.nib",description:"<p>Nomor Induk Berusaha</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIBPSE.tgl_pengajuan_nib",description:"<p>Tanggal Pengajuan NIB (* Date Format YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIBPSE.tgl_terbit_nib",description:"<p>Tanggal Terbit NIB (* Date Format YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIBPSE.tgl_perubahan_nib",description:"<p>Tanggal Perubahan NIB (* Date Format YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIBPSE.oss_id",description:"<p>Oss ID adalah ID yang di Generate Sistem OSS dan Dikirimkan ke L/L/D Bersama Permohonan Nomor Induk Berusaha (NIB)</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIBPSE.id_izin",description:"<p>Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS</p>"},{group:"Parameter",type:"string(12)",optional:!1,field:"dataNIBPSE.kd_izin",description:"<p>Kode Izin Sistem K/L/D</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIBPSE.kd_daerah",description:"<p>Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf )</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIBPSE.kewenangan",description:"<p>00 : Kewenangan Pusat; 02 : Kewenangan Provinsi; 03 : Kewenangan Kab/Kota</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIBPSE.versi_pia",description:"<p>Versi PIA</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBPSE.nama_prinsipal",description:"<p>Nama Prinsipal</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBPSE.alamat_prinsipal",description:"<p>Alamat Prinsipal</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"dataNIBPSE.id_negara_prinsipal",description:"<p>ID Negara Prinsipal (* Sumber Kodefikasi Negara Mengikuti Standar Unedifact : http://www.unece.org/cefact/locode/ service/location )</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIBPSE.nomor_telepon_prinsipal",description:"<p>Nomor telepon prinsipal</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIBPSE.email_prinsipal",description:"<p>Email prinsipal</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIBPSE.no_akta_pendirian",description:"<p>Nomor Akta Pendirian</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBPSE.tgl_akta_pendirian",description:"<p>Tanggal Akta Pendirian</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBPSE.file_akta_prinsipal",description:"<p>File Akta Prinsipal</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIBPSE.file_akta_domisili",description:"<p>File Akta Domisili</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIBPSE.penanggung_jwb",description:"<p>penanggung_jwb</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIBPSE.penanggung_jwb.no_identitas_penanggung_jwb",description:"<p>Nomor Identitas Penanggung Jawab</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIBPSE.penanggung_jwb.nama_penanggung_jwb",description:"<p>Nama Penanggung Jawab</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIBPSE.penanggung_jwb.negara_asal_penanggung_jwb",description:"<p>Negara Asal Penanggung Jawab</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBPSE.penanggung_jwb.alamat_penanggung_jwb",description:"<p>Alamat Penanggung Jawab</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIBPSE.penanggung_jwb.daerah_id_penanggung_jwb",description:"<p>Daerah ID Penanggung Jawab</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"dataNIBPSE.penanggung_jwb.no_telp_penanggung_jwb",description:"<p>No Telepon Penanggung Jawab</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIBPSE.penanggung_jwb.email_penanggung_jwb",description:"<p>Email Penanggung Jawab</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIBPSE.data_proyek",description:"<p>data_proyek</p>"},{group:"Parameter",type:"string(30)",optional:!1,field:"dataNIBPSE.data_proyek.id_proyek",description:"<p>ID Proyek</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIBPSE.data_proyek.nama_sistem_elektronik",description:"<p>Nama Sistem Elektronik</p>"},{group:"Parameter",type:"string(3)",optional:!1,field:"dataNIBPSE.data_proyek.sektor_sistem",description:"<p>Sektor</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBPSE.data_proyek.url_sistem",description:"<p>URL system</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIBPSE.data_proyek.domain",description:"<p>Domain system</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBPSE.data_proyek.deskripsi_model_bisnis",description:"<p>Deskripsi model bisnis</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBPSE.data_proyek.deskripsi_singkat_fungsi_sistem",description:"<p>Deskripsi singkat fungsi system</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBPSE.data_proyek.uraian_fungsi_sistem",description:"<p>Uraian fungsi system</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBPSE.data_proyek.deskripsi_singkat_proses_bisnis_sistem",description:"<p>Deskripsi singkat proses bisnis system</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBPSE.data_proyek.uraian_proses_bisnis_sistem",description:"<p>Uraian proses bisnis system</p>"},{group:"Parameter",type:"string(30)",optional:!1,field:"dataNIBPSE.data_proyek.jumlah_pengguna_indonesia",description:"<p>Jumlah pengguna Indonesia</p>"},{group:"Parameter",type:"string(30)",optional:!1,field:"dataNIBPSE.data_proyek.nilai_transaksi_indonesia",description:"<p>Nilai transaksi indonesia</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIBPSE.data_checklist",description:"<p>data_checklist</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIBPSE.data_checklist.id_proyek",description:"<p>ID Proyek OSS</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIBPSE.data_checklist.id_izin",description:"<p>Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS</p>"},{group:"Parameter",type:"string(13)",optional:!1,field:"dataNIBPSE.data_checklist.kd_izin",description:"<p>Kode Izin Sistem K/L/D</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIBPSE.data_checklist.kd_daerah",description:"<p>Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBPSE.data_checklist.nama_izin",description:"<p>Nama Izin</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIBPSE.data_checklist.instansi",description:"<p>Nama Instansi</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIBPSE.data_checklist.kewenangan",description:"<p>00: Kewenangan Pusat; 01: Kewenangan Provinsi; 02: Kewenangan Kab/Kota</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIBPSE.data_checklist.flag_checklist",description:"<p>Flag Checklist</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIBPSE.jenis_id_user_proses",description:"<p>Kode Jenis Identitas (* Lihat Lampiran 4)</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIBPSE.no_id_user_proses",description:"<p>No Identitas Pemroses NIB</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIBPSE.nama_user_proses",description:"<p>Nama User Pemroses NIB</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIBPSE.email_user_proses",description:"<p>Email User Pemroses NIB</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIBPSE.hp_user_proses",description:"<p>No HP Pemroses NIB</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBPSE.alamat_user_proses",description:"<p>Alamat Pemroses NIB</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIBPSE.jns_kelamin_user_proses",description:"<p>Jenis Kelamin Pemroses NIB (L : Laki- Laki, P : Perempuan)</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIBPSE.tempat_lahir_user_proses",description:"<p>Tempat Lahir Pemroses NIB</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIBPSE.tgl_lahir_user_proses",description:"<p>Tanggal Lahir User Pemroses (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIBPSE.daerah_id_user_proses",description:"<p>ID Daerah User Pemroses(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf )</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIBPSE.rt_rw_user_proses",description:"<p>RT RW Pemroses NIB</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIBPSE.agama_user_proses",description:"<p>Agama Pemroses NIB</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIBPSE.status_perkawinan_user_proses",description:"<p>Status Perkawinan Pemroses NIB</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIBPSE.pekerjaan_user_proses",description:"<p>Pekerjaan Pemroses NIB</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIBPSE.status_nib",description:"<p>Status Penerbitan NIB (* Lihat Lampiran 14)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIBPSE.tipe_dokumen",description:"<p>Tipe Dokumen (9:Original, 5:Update, 3:Pencabutan, 4:Pembatalan)</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
{
  "dataNIBPSE": {
    "nib": "",
    "tgl_pengajuan_nib": "",
    "tgl_terbit_nib": "",
    "tgl_perubahan_nib": "",
    "oss_id": "",
    "id_izin": "",
    "kd_izin": "",
    "kd_daerah": "",
    "kewenangan": "",
    "versi_pia": "",
    "nama_prinsipal": "",
    "alamat_prinsipal": "",
    "id_negara_prinsipal": "",
    "nomor_telepon_prinsipal": "",
    "email_prinsipal": "",
    "no_akta_pendirian": "",
    "tgl_akta_pendirian": "",
    "file_akta_prinsipal": "",
    "file_akta_domisili": "",
    "penanggung_jwb": [
      {
        "no_identitas_penanggung_jwb": "",
        "nama_penanggung_jwb": "",
        "negara_asal_penanggung_jwb": "",
        "alamat_penanggung_jwb": "",
        "daerah_id_penanggung_jwb": "",
        "no_telp_penanggung_jwb": "",
        "email_penanggung_jwb": ""
      }
    ],
    "data_proyek": [
      {
        "id_proyek": "",
        "nama_sistem_elektronik": "",
        "sektor_sistem": "",
        "url_sistem": "",
        "domain": "",
        "deskripsi_model_bisnis": "",
        "deskripsi_singkat_fungsi_sistem": "",
        "uraian_fungsi_sistem": "",
        "deskripsi_singkat_proses_bisnis_sistem": "",
        "uraian_proses_bisnis_sistem": "",
        "jumlah_pengguna_indonesia": "",
        "nilai_transaksi_indonesia": ""
      }
    ],
    "data_checklist": [
      {
        "id_proyek": "",
        "id_izin": "",
        "kd_izin": "",
        "kd_daerah": "",
        "nama_izin": "",
        "instansi": "",
        "kewenangan": "",
        "flag_checklist": ""
      }
    ],
    "jenis_id_user_proses": "",
    "no_id_user_proses": "",
    "nama_user_proses": "",
    "email_user_proses": "",
    "hp_user_proses": "",
    "alamat_user_proses": "",
    "jns_kelamin_user_proses": "",
    "tempat_lahir_user_proses": "",
    "tgl_lahir_user_proses": "",
    "daerah_id_user_proses": "",
    "rt_rw_user_proses": "",
    "agama_user_proses": "",
    "status_perkawinan_user_proses": "",
    "pekerjaan_user_proses": "",
    "status_nib": "",
    "tipe_dokumen": ""
  }
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"Object",optional:!1,field:"responreceiveNIBPSE",description:"<p>Response receive NIB PSE</p>"},{group:"200",type:"String(1)",optional:!1,field:"responreceiveNIBPSE.status",description:"<p>Status Respon (1 : TRUE; 2 : FALSE)</p>"},{group:"200",type:"String(255)",optional:!1,field:"responreceiveNIBPSE.keterangan",description:"<p>Keterangan Respon</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
{
	 "responreceiveNIBPSE": {
		 "status": "",
		 "keterangan": ""
	 }
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
	 "responreceiveNIBPSE": {
		 "status": "",
		 "keterangan": ""
	 }
}`,type:"json"}]},filename:"endpoint.js",groupTitle:"NIB",sampleRequest:[{url:"https://server.digitaltelkom.dev/oss-sandbox/receiveNIBPSE"}]},{type:"post",url:"/receiveNIBSTPW",title:"Receive NIB STPW",version:"5.0.0",description:"<p>Mengirimkan Data NIB STPW &amp; Checklist Izin dari Sistem OSS ke Sistem K/L/D</p>",name:"receiveNIBSTPW",group:"NIB",examples:[{title:"Curl Request Example:",content:`curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/receiveNIBSTPW' \\
--header 'OSS-API-KEY: {{oss-api-key}}' \\
--header 'Content-Type: application/json' \\
--data-raw '{
  "dataNIBSTPW": {
    "nib": "",
    "tgl_pengajuan_nib": "",
    "tgl_terbit_nib": "",
    "tgl_perubahan_nib": "",
    "oss_id": "",
    "id_izin": "",
    "kd_izin": "",
    "kd_daerah": "",
    "kewenangan": "",
    "jenis_pelaku_usaha": "",
    "nama_pj": "",
    "alamat_pj": "",
    "paspor_pj": "",
    "email_pj": "",
    "asal_negara_pj": "",
    "telp_pj": "",
    "nama_perusahaan_ln": "",
    "alamat_perusahaan_ln": "",
    "negara_perusahaan_ln": "",
    "telp_perusahaan_ln": "",
    "jangka_waktu": "",
    "file_prospektus": "",
    "versi_pia": "",
    "data_checklist": [
      {
        "id_izin": "",
        "jenis_izin": "",
        "kd_izin": "",
        "kd_daerah": "",
        "nama_izin": "",
        "instansi": "",
        "id_bidang_spesifik": "",
        "bidang_spesifik": "",
        "id_kewenangan": "",
        "parameter_kewenangan": "",
        "kewenangan": "",
        "flag_checklist": "",
        "flag_transaksional": "",
        "flag_perpanjangan": ""
      }
    ],
    "jenis_id_user_proses": "",
    "no_id_user_proses": "",
    "nama_user_proses": "",
    "email_user_proses": "",
    "hp_user_proses": "",
    "alamat_user_proses": "",
    "jns_kelamin_user_proses": "",
    "tempat_lahir_user_proses": "",
    "tgl_lahir_user_proses": "",
    "daerah_id_user_proses": "",
    "rt_rw_user_proses": "",
    "agama_user_proses": "",
    "status_perkawinan_user_proses": "",
    "pekerjaan_user_proses": "",
    "status_nib": "",
    "tipe_dokumen ": ""
  }
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"Token",description:"<p>SHA1(USERNAME+PASSWORD+NPWP+DATE(Ymd))</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "Token": "OSS000qw13242628gssssss812345654709820180514"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"dataNIBSTPW",description:"<p>dataNIBSTPW</p>"},{group:"Parameter",type:"string(13)",optional:!1,field:"dataNIBSTPW.nib",description:"<p>Nomor Induk Berusaha</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIBSTPW.tgl_pengajuan_nib",description:"<p>Tanggal Pengajuan NIB (* Date Format YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIBSTPW.tgl_terbit_nib",description:"<p>Tanggal Terbit NIB (* Date Format YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIBSTPW.tgl_perubahan_nib",description:"<p>Tanggal Perubahan NIB (* Date Format YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIBSTPW.oss_id",description:"<p>Oss ID adalah ID yang di Generate Sistem OSS dan Dikirimkan ke L/L/D Bersama Permohonan Nomor Induk Berusaha (NIB)</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIBSTPW.id_izin",description:"<p>Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin</p>"},{group:"Parameter",type:"string(12)",optional:!1,field:"dataNIBSTPW.kd_izin",description:"<p>Kode Izin Sistem K/L/D (* Lihat Lampiran 8)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIBSTPW.kd_daerah",description:"<p>Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf )</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIBSTPW.kewenangan",description:"<p>Kewenangan (00 : Kewenangan Pusat; 02 : Kewenangan Provinsi; 03 : Kewenangan Kab/Kota)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIBSTPW.jenis_pelaku_usaha",description:"<p>Jenis Pelaku Usaha (* Lihat Lampiran 18)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBSTPW.nama_pj",description:"<p>Nama Penanggung Jawab</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBSTPW.alamat_pj",description:"<p>Alamat Penanggung Jawab</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"dataNIBSTPW.paspor_pj",description:"<p>Nomor Paspor Penanggung Jawab</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIBSTPW.email_pj",description:"<p>Email Penanggung Jawab</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIBSTPW.asal_negara_pj",description:"<p>Negara Asal Penanggung Jawab (* Sumber Kodefikasi Negara Mengikuti Standar Unedifact : http://www.unece.org/cefact/locode/ service/location )</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIBSTPW.telp_pj",description:"<p>Telpon Penanggung Jawab</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBSTPW.nama_perusahaan_ln",description:"<p>Nama Prinsipal</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBSTPW.alamat_perusahaan_ln",description:"<p>Alamat Prinsipal</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIBSTPW.negara_perusahaan_ln",description:"<p>Negara Prinsipal (* Sumber Kodefikasi Negara Mengikuti Standar Unedifact:http://www.unece.org/cefact/locode/ service/location )</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIBSTPW.telp_perusahaan_ln",description:"<p>Telpon Prinsipal</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIBSTPW.jangka_waktu",description:"<p>Jangka Waktu (* Date Format YYYY- MM-DD)</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"dataNIBSTPW.file_prospektus",description:"<p>Attachment File Prospektus dalam Bentuk File PDF/Image Berupa Link (* Ukuran File Maks: 2MB)</p>"},{group:"Parameter",type:"string(5)",optional:!1,field:"dataNIBSTPW.versi_pia",description:"<p>Versi PIA OSS</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIBSTPW.data_checklist",description:"<p>data_checklist</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIBSTPW.data_checklist.id_izin",description:"<p>Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin</p>"},{group:"Parameter",type:"string(3)",optional:!1,field:"dataNIBSTPW.data_checklist.jenis_izin",description:"<p>Jenis Perizinan (* Lihat Lampiran 27)</p>"},{group:"Parameter",type:"string(13)",optional:!1,field:"dataNIBSTPW.data_checklist.kd_izin",description:"<p>Kode Izin Sistem K/L/D</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIBSTPW.data_checklist.kd_daerah",description:"<p>Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBSTPW.data_checklist.nama_izin",description:"<p>Nama Izin</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIBSTPW.data_checklist.instansi",description:"<p>Nama Instansi</p>"},{group:"Parameter",type:"string(19)",optional:!1,field:"dataNIBSTPW.data_checklist.id_bidang_spesifik",description:"<p>ID Bidang Spesifik</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"dataNIBSTPW.data_checklist.bidang_spesifik",description:"<p>Uraian Bidang Spesifik</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIBSTPW.data_checklist.id_kewenangan",description:"<p>id_kewenangan</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBSTPW.data_checklist.parameter_kewenangan",description:"<p>Parameter Kewenangan Izin</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIBSTPW.data_checklist.kewenangan",description:"<p>Kewenangan (00: Kewenangan Pusat; 01: Kewenangan Provinsi; 02: Kewenangan Kab/Kota)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIBSTPW.data_checklist.flag_checklist",description:"<p>Flag Checklist Komitmen (* Lihat Lampiran 28)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIBSTPW.data_checklist.flag_transaksional",description:"<p>Flag : Y/N, Flag Izin Komersial / Operasional Diajukan Transaksional (Bisa Mengajukan Berulang)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIBSTPW.data_checklist.flag_perpanjangan",description:"<p>Flag : Y/N, Flag Bahwa Izin Usaha Ini Adalah Hasil Perpanjangan Dari Izin Usaha Yang Terbit Sebelum OSS</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIBSTPW.jenis_id_user_proses",description:"<p>Kode Jenis Identitas (* Lihat Lampiran 4)</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIBSTPW.no_id_user_proses",description:"<p>No Identitas Pemroses NIB</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIBSTPW.nama_user_proses",description:"<p>Nama User Pemroses NIB</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIBSTPW.email_user_proses",description:"<p>Email User Pemroses NIB</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIBSTPW.hp_user_proses",description:"<p>No HP Pemroses NIB</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBSTPW.alamat_user_proses",description:"<p>Alamat Pemroses NIB</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIBSTPW.jns_kelamin_user_proses",description:"<p>Jenis Kelamin Pemroses NIB (L : Laki- Laki, P : Perempuan)</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIBSTPW.tempat_lahir_user_proses",description:"<p>Tempat Lahir Pemroses NIB</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIBSTPW.tgl_lahir_user_proses",description:"<p>Tanggal Lahir User Pemroses (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIBSTPW.daerah_id_user_proses",description:"<p>ID Daerah User Pemroses(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIBSTPW.rt_rw_user_proses",description:"<p>RT RW Pemroses NIB</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIBSTPW.agama_user_proses",description:"<p>Agama Pemroses NIB</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIBSTPW.status_perkawinan_user_proses",description:"<p>Status Perkawinan Pemroses NIB</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIBSTPW.pekerjaan_user_proses",description:"<p>Pekerjaan Pemroses NIB</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIBSTPW.status_nib",description:"<p>Status Penerbitan NIB (* Lihat Lampiran 14)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIBSTPW.tipe_dokumen",description:"<p>Tipe Dokumen (9:Original, 5:Update, 3:Pencabutan, 4:Pembatalan)</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
{
  "dataNIBSTPW": {
    "nib": "",
    "tgl_pengajuan_nib": "",
    "tgl_terbit_nib": "",
    "tgl_perubahan_nib": "",
    "oss_id": "",
    "id_izin": "",
    "kd_izin": "",
    "kd_daerah": "",
    "kewenangan": "",
    "jenis_pelaku_usaha": "",
    "nama_pj": "",
    "alamat_pj": "",
    "paspor_pj": "",
    "email_pj": "",
    "asal_negara_pj": "",
    "telp_pj": "",
    "nama_perusahaan_ln": "",
    "alamat_perusahaan_ln": "",
    "negara_perusahaan_ln": "",
    "telp_perusahaan_ln": "",
    "jangka_waktu": "",
    "file_prospektus": "",
    "versi_pia": "",
    "data_checklist": [
      {
        "id_izin": "",
        "jenis_izin": "",
        "kd_izin": "",
        "kd_daerah": "",
        "nama_izin": "",
        "instansi": "",
        "id_bidang_spesifik": "",
        "bidang_spesifik": "",
        "id_kewenangan": "",
        "parameter_kewenangan": "",
        "kewenangan": "",
        "flag_checklist": "",
        "flag_transaksional": "",
        "flag_perpanjangan": ""
      }
    ],
    "jenis_id_user_proses": "",
    "no_id_user_proses": "",
    "nama_user_proses": "",
    "email_user_proses": "",
    "hp_user_proses": "",
    "alamat_user_proses": "",
    "jns_kelamin_user_proses": "",
    "tempat_lahir_user_proses": "",
    "tgl_lahir_user_proses": "",
    "daerah_id_user_proses": "",
    "rt_rw_user_proses": "",
    "agama_user_proses": "",
    "status_perkawinan_user_proses": "",
    "pekerjaan_user_proses": "",
    "status_nib": "",
    "tipe_dokumen ": ""
  }
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"Object",optional:!1,field:"responreceiveNIBSTPW",description:"<p>Response receive NIB SPTW</p>"},{group:"200",type:"String(1)",optional:!1,field:"responreceiveNIBSTPW.status",description:"<p>Status Respon (1 : TRUE; 2 : FALSE)</p>"},{group:"200",type:"String(255)",optional:!1,field:"responreceiveNIBSTPW.keterangan",description:"<p>Keterangan Respon</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
{
	 "responreceiveNIBSTPW": {
		 "status": "",
		 "keterangan": ""
	 }
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
	 "responreceiveNIBSTPW": {
		 "status": "",
		 "keterangan": ""
	 }
}`,type:"json"}]},filename:"endpoint.js",groupTitle:"NIB",sampleRequest:[{url:"https://server.digitaltelkom.dev/oss-sandbox/receiveNIBSTPW"}]},{type:"post",url:"/rekonNIB",title:"Rekon NIB",version:"5.0.0",description:"<p>Cek Data Nomor Induk Berusaha (NIB) yang Sukses terkirim dari Sistem OSS</p>",name:"rekonNIB",group:"NIB",examples:[{title:"Curl Request Example:",content:`curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/rekonNIB' \\
--header 'user_key: {{user_key}}' \\
--header 'Content-Type: application/json' \\
--data-raw '{
	"REKONNIB": {
		"nib": "8120207732259"
	}
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"user_key",description:"<p>Users unique access-key.</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "user_key": "846ee507525c6b00d18733e066bd5686"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"REKONNIB",description:"<p>Data Rekon NIB</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"REKONNIB.tgl_awal",description:"<p>Periode Tanggal Awal NIB Terbit (*Date Format YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"REKONNIB.tgl_akhir",description:"<p>Periode Tanggal Akhir NIB Terbit (*Date Format YYYY-MM-DD)</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
{
	 "REKONNIB": {
		 "tgl_awal": "",
		 "tgl_akhir": ""
	 }
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"object",optional:!1,field:"responrekonNIB",description:"<p>responrekonNIB</p>"},{group:"200",type:"string(3)",optional:!1,field:"responrekonNIB.kode",description:"<p>Kode Respon (*Lihat Lampiran 9)</p>"},{group:"200",type:"string(255)",optional:!1,field:"responrekonNIB.keterangan",description:"<p>Keterangan Respon</p>"},{group:"200",type:"object",optional:!1,field:"responrekonNIB.rekonNIB",description:"<p>rekonNIB</p>"},{group:"200",type:"number(11)",optional:!1,field:"responrekonNIB.rekonNIB.jumlah",description:"<p>Jumlah data permohonan yang terkirim</p>"},{group:"200",type:"object[]",optional:!1,field:"responrekonNIB.rekonNIB.dataNIB",description:"<p>dataNIB</p>"},{group:"200",type:"string(13)",optional:!1,field:"responrekonNIB.rekonNIB.dataNIB.nib",description:"<p>Nomor Induk Berusaha</p>"},{group:"200",type:"string(25)",optional:!1,field:"responrekonNIB.rekonNIB.dataNIB.oss_id",description:"<p>(Optional) Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin</p>"},{group:"200",type:"string(12)",optional:!1,field:"responrekonNIB.rekonNIB.dataNIB.kd_izin",description:"<p>Kode Izin Sistem K/L/D (* Lihat Lampiran 8)</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
{
  "responrekonNIB": {
    "kode": "",
    "keterangan": "",
    "rekonNIB": {
      "jumlah": "",
      "dataNIB": [
        {
          "nib": "",
          "oss_id": "",
          "kd_izin": ""
        }
      ]
    }
  }
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
	 "responrekonNIB": {
		 "kode": "",
		 "keterangan": ""
	 }
}`,type:"json"}]},filename:"endpoint.js",groupTitle:"NIB",sampleRequest:[{url:"https://server.digitaltelkom.dev/oss-sandbox/rekonNIB"}]},{type:"post",url:"/getDataReferensi",title:"Get Data Referensi",version:"5.0.0",description:"<p>Get Data Referensi di Sistem OSS</p>",name:"getDataReferensi",group:"Referensi",examples:[{title:"Curl Request Example:",content:`curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/getDataReferensi' \\
--header 'user_key: {{user_key}}' \\
--header 'Content-Type: application/json' \\
--data-raw '{
 "GETDATAREFERENSI": {
 "kode": "1234"
 }
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"user_key",description:"<p>Users unique access-key.</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "user_key": "846ee507525c6b00d18733e066bd5686"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"GETDATAREFERENSI",description:"<p>GETDATAREFERENSI</p>"},{group:"Parameter",type:"string(3)",optional:!1,field:"GETDATAREFERENSI.kode",description:"<p>Kode Referensi (* Lihat Lampiran 29)</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
{
	 "GETDATAREFERENSI": {
		 "kode": ""
	 }
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"object",optional:!1,field:"respongetDataReferensi",description:"<p>respongetDataReferensi</p>"},{group:"200",type:"string(3)",optional:!1,field:"respongetDataReferensi.kode",description:"<p>Kode Respon (*Lihat Lampiran 9)</p>"},{group:"200",type:"string(255)",optional:!1,field:"respongetDataReferensi.keterangan",description:"<p>Keterangan Respon</p>"},{group:"200",type:"object[]",optional:!1,field:"respongetDataReferensi.dataReferensi",description:"<p>Data referensi</p>"},{group:"200",type:"string(25)",optional:!1,field:"respongetDataReferensi.dataReferensi.kode_referensi",description:"<p>Kode Data Referensi</p>"},{group:"200",type:"string(65535)",optional:!1,field:"respongetDataReferensi.dataReferensi.uraian_referensi",description:"<p>Uraian Data Referensi</p>"},{group:"200",type:"string(255)",optional:!1,field:"respongetDataReferensi.dataReferensi.keterangan_referensi",description:"<p>Keterangan Data Referensi</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
{
  "respongetDataReferensi": {
    "kode": "",
    "keterangan": "",
    "dataReferensi": [
      {
        "kode_referensi": "",
        "uraian_referensi": "",
        "keterangan_referensi": ""
      }
    ]
  }
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
	 "respongetDataReferensi": {
		 "kode": "",
		 "keterangan": ""
	 }
}`,type:"json"}]},filename:"endpoint.js",groupTitle:"Referensi",sampleRequest:[{url:"https://server.digitaltelkom.dev/oss-sandbox/getDataReferensi"}]}];const pe={name:"PIA - OSS RBA",version:"5.0.0",description:"Documentation for the REST api access provided at OSS",title:"PIA - OSS RBA",url:"https://api-stg.oss.go.id/stg/v1/kl/rba",sampleUrl:"https://server.digitaltelkom.dev/oss-sandbox",output:"/tmp/apidoc-output",input:["endpoint"],header:{title:"Introduction",content:`<h2><span id="api-example-for-a-submenu-entry">Document History</span></h2>
<table>
<thead>
<tr>
<th>Version</th>
<th>Date</th>
<th>Changed by</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td>3.0.0</td>
<td>17/07/2018</td>
<td>Tim Teknis OSS</td>
<td>Menambahkan Element Data di Methode receiveLegal,inqueryNIB &amp; receiveNIB</td>
</tr>
<tr>
<td>3.0.1</td>
<td>22/01/2019</td>
<td>Tim Teknis OSS</td>
<td>Tambah elemen Mandatory Perseorangan (P) dan Non Perseorangan (NP), Update respon receiveNIB, menambah tipe_dokumen pada json receiveNIB, update lampiran</td>
</tr>
<tr>
<td>3.0.2</td>
<td>22/02/2019</td>
<td>Tim Teknis OSS</td>
<td>Menambahkan Element Data RPTKA di Methode inqueryNIB &amp; receiveNIB</td>
</tr>
<tr>
<td>4.0.0</td>
<td>01/04/2019</td>
<td>Tim Teknis OSS</td>
<td>Menambahkan Element Data di Methode receiveLegal,inqueryNIB &amp; receiveNIB &amp; checkKomitmen</td>
</tr>
<tr>
<td>4.1.0</td>
<td>06/03/2020</td>
<td>Tim Teknis OSS</td>
<td>Menambahkan Element Data di Methode receiveNIB, inqueryNIB,receiveNIBIUMK,inqueryNIBUMK,recei veNIBSTPW,inqueryNIBSTPW, getDataReferensi &amp; update data lampiran</td>
</tr>
<tr>
<td>4.2.0</td>
<td>18/11/2020</td>
<td>Tim Teknis OSS</td>
<td>Menambahkan element data receiveLicense, penambahan services receiveFileDS dan update data lampiran</td>
</tr>
<tr>
<td>4.3.0</td>
<td>19/04/2021</td>
<td>Tim Teknis OSS</td>
<td>Menambahkan id_produk pada service receiveNIB,inqueryNIB,receiveLicenseStatus,recei veLicense untuk mengakomodir sertifikasi produk. Menambah method service receiveNIBKKPR dan receiveLicenseKKPR untuk persetujuan KKPR</td>
</tr>
<tr>
<td>4.3.1</td>
<td>25/08/2021</td>
<td>Tim Teknis OSS</td>
<td>Penambahan elemen data flag_umk,skala_resiko,skala_usaha pada inqueryNIB dan receiveNIB</td>
</tr>
<tr>
<td>4.3.2</td>
<td>03/12/2021</td>
<td>Tim Teknis OSS</td>
<td>Penambahan service receiveNIBPSE Perubahan tipe data no npp ke alphanumeric Perubahan length bidang spesifik</td>
</tr>
<tr>
<td>4.3.3</td>
<td>27/12/2021</td>
<td>Tim Teknis OSS</td>
<td>Penambahan service inqueryFileDS yang digunakan untuk K/L/D mendapatkan informasi url file hasil merge dokumen Izin/Sertifikat Standar/PB-UMKU</td>
</tr>
<tr>
<td>4.3.4</td>
<td>2/2/2022</td>
<td>Tim Teknis OSS</td>
<td>Penambahan elemen data KBLI 2020 hasil konversi dari KBLI 2021 di service receiveNIB. Update typo keterangan KBLI 2017 (seharusnya KBLI 2020) pada service receiveNIB, inqueryNIB, dan receiveNIBKKPR.</td>
</tr>
<tr>
<td>4.3.5</td>
<td>20/6/2022</td>
<td>Tim Teknis OSS</td>
<td>Penambahan service updateLicense yang digunakan oleh K/L/D untuk melakukan update atau perubahan lampiran teknis PB atau PB-UMKU</td>
</tr>
<tr>
<td>4.3.5</td>
<td>20/6/2022</td>
<td>Tim Teknis OSS</td>
<td>Perbaikan PIA sebelumnya untuk service inqueryFileDS pada bagian Method Header</td>
</tr>
<tr>
<td>4.3.6</td>
<td>04/08/2022</td>
<td>Tim Teknis OSS</td>
<td>Penambahan API checkLicenseStatus</td>
</tr>
<tr>
<td>4.3.7</td>
<td>30/08/2022</td>
<td>Tim Teknis OSS</td>
<td>Perubahan Length jabatan_ttd semula 50 menjadi 150 pada payload API Update License dan Receive License</td>
</tr>
<tr>
<td>4.3.8</td>
<td>05/09/2022</td>
<td>Tim Teknis OSS</td>
<td>Penambahan API receiveCertivicate dan inquiryCertivicate</td>
</tr>
</tbody>
</table>
<h2><span id="api-example-for-a-submenu-entry">Background</span></h2>
<h5>Pedoman Integrasi Aplikasi (PIA) merupakan salah satu referensi dalam pembentukan program Application Programming Interface (API) antara Portal OSS dan aplikasi K/L. Didalam pedoman ini dijelaskan hal-hal yang perlu diketahui dalam mengintegrasikan modul-modul pada OSS Application Programming Interface (API), khususnya menyangkut struktur elemen data yang perlu dipersiapkan disisi K/L yang akan dikirimkan ke API Services OSS.</h5>
<h5>Dokumen Pedoman Integrasi Aplikasi (PIA) ini dibuat dengan tujuan :</h5>
<ul>
<li>Mempermudah masing-masing pihak yang terkait dengan sistem OSS melakukan integrasi sistem yang standart &amp; terstruktur</li>
<li>Sebagai pedoman untuk pengiriman data transaksi secara realtime</li>
<li>Mengurangi potensi human-error akibat adanya entry data maupun double entry data secara manual</li>
<li>Penyajian data yang lebih cepat, tepat dan akurat di sistem aplikasi OSS maupun yang terkait dengan OSS</li>
</ul>
<h5>Secara umum dokumen PIA ini memuat:</h5>
<ul>
<li>Bisnis Proses Integrasi</li>
<li>Teknis Integrasi OSS</li>
<li>Contoh Elemen Data</li>
<li>Contoh Jsonfile</li>
</ul>
<h2><span id="api-example-for-a-submenu-entry">Global Design</span></h2>
<p><img src="https://confluence-connect.gliffy.net/embed/image/4ebc210d-ba30-4825-978b-4f438a753e21.png?utm_medium=live&amp;utm_source=slack" alt="Global Design"></p>
<h3><span id="api-example-for-a-submenu-entry">Legend</span></h3>
<p><img src="https://confluence-connect.gliffy.net/embed/image/5b986768-3f02-4c4e-97e9-1bcaeccc7b45.png?utm_medium=live&amp;utm_source=slack" alt="Global Design Legend"></p>
<h3><span id="api-example-for-a-submenu-entry">Keterangan</span></h3>
<h5>Integrasi Aplikasi / pertukaran data antara sistem OSS dengan sistem K/L/D dilakukan secara host to host, menggunakan protokol komunikasi dan format data yang disepakati yaitu protokol HTTP (APPLICATION PROGRAMMING INTERFACE) dengan format Dokumen JSON. Untuk Flow datanya sendiri Seperti diterangkan pada gambar di atas.</h5>
<ol>
<li><strong>Kemenkumham</strong> dengan sistem AHU Online mengirimkan data pengesahan akta pendirian perusahaan berikut data NPWP yang akan di terima oleh sistem OSS.</li>
<li><strong>Online Single Submission</strong> setelah menerima data dari AHU Online berupa data pengesahan akta pendirian perusahaan berikut data NPWP akan digunakan untuk membuat data Nomor Induk Berusaha (NIB) yang ke kemudian data NIB ini dikirimkan ke sistem K/L/D untuk digunakan sebagai data dasar pemerosesan izin di sistem K/L/D.</li>
<li><strong>K/LD</strong> dengan sistem nya akan menerima data Nomor Induk Berusaha (NIB) yang dikirimkan oleh sistem OSS dan selanjutnya digunakan untuk memproses izin final yang kemudian izin final itu dikirimkan ke sistem OSS dan disimpan di OSS untuk bisa disharing ke K/L/D lain yang membutuhkan.</li>
<li><strong>K/LD</strong> dengan sistem nya selain mengirimkan data izin final juga mengirimkan status permohonan izin final ke sistem OSS yang digunakan untuk proses tracking data perizinan di K/L/D.</li>
<li><strong>Online Single Submission</strong> sistem OSS akan menyediakan services untuk inquery data Nomor Induk Berusaha (NIB) dengan parameter Nomor Induk Berusaha (NIB) yang diinvoke/dipanggil oleh sistem K/L/D.</li>
<li><strong>Online Single Submission</strong> sistem OSS akan menyediakan services untuk mengenerate security key yang akan digunakan sistem K/L/D untuk invoke / memanggil services yang disediakan oleh sistem OSS.</li>
<li><strong>Online Single Submission</strong> sistem OSS akan menyediakan services untuk merekonsiliasi data NIB yang ada di sistem OSS untuk di rekon dengan data id perusahaan sistem AHU Online Kemenkumham.</li>
<li><strong>Online Single Submission</strong> sistem OSS akan menyediakan services untuk mengecek data Nomor Induk Berusaha (NIB) valid atau tidak.</li>
<li><strong>Online Single Submission</strong> sistem OSS akan menyediakan services untuk mengecek data Nomor Induk Berusaha (NIB) yang gagal terkirim / error ke Sistem K/L/D.</li>
<li><strong>Online Single Submission</strong> sistem OSS akan menyediakan services untuk mengecek data Nomor Induk Berusaha (NIB) yang update data checklist/komitmen ke Sistem K/L/D.</li>
<li><strong>Online Single Submission</strong> sistem OSS akan menyediakan services untuk merekonsiliasi data NIB yang ada di sistem OSS untuk di rekon dengan data di sistem K/L/D.</li>
<li><strong>K/LD</strong> dengan sistem nya akan melakukan validasi / pengecekan data nomor dan tanggal dokumen pemenuhan checklist komitmen tersebut valid atau tidak.</li>
<li><strong>Online Single Submission</strong> menerbitkan data Nomor Induk Berusaha (NIB) untuk Usaha Mikro Kecil (UMK) yang ke kemudian data NIB ini dikirimkan ke sistem K/L/D untuk digunakan sebagai data dasar pemerosesan izin di sistem K/L/D.</li>
<li><strong>Online Single Submission</strong> sistem OSS akan menyediakan services untuk inquery data Nomor Induk Berusaha (NIB) untuk Usaha Mikro Kecil (UMK) dengan parameter Nomor Induk Berusaha (NIB) yang diinvoke/dipanggil oleh sistem K/L/D.</li>
<li><strong>Online Single Submission</strong> menerbitkan data Nomor Induk Berusaha (NIB) untuk Surat Tanda Pendaftaran Waralaba (STPW) yang ke kemudian data NIB ini dikirimkan ke sistem K/L/D untuk digunakan sebagai data dasar pemerosesan izin di sistem K/L/D.</li>
<li><strong>Online Single Submission</strong> sistem OSS akan menyediakan services untuk inquery data Nomor Induk Berusaha (NIB) untuk Surat Tanda Pendaftaran Waralaba (STPW) dengan parameter Nomor Induk Berusaha (NIB) yang diinvoke/dipanggil oleh sistem K/L/D.</li>
<li><strong>Online Single Submission</strong> sistem OSS akan menyediakan services untuk menampilkan data - data referensi yang ada di daftar lampiran yang diinvoke/dipanggil oleh sistem K/L/D.</li>
<li><strong>K/LD</strong> dengan sistem nya akan menerima data file izin yang sudah di tanda tangani secara elektronik (Digital Signature) yang dikirimkan oleh sistem OSS.</li>
</ol>
<h3><span id="api-example-for-a-submenu-entry">PROCESS SPECIFICATION</span></h3>
<h4><span id="api-example-for-a-submenu-entry">Protokol Application Program Interface</span></h4>
<h5>Pertukaran data (host to host) yang digunakan antara system internal di K/L/D dengan system Online Single Submission(OSS) adalah dengan mengunakan format data JSON, dan REST API sebagai protocol komunikasinya.</h5>
<h5>Untuk END POINT/ alamat URL untuk rest api oss adalah</h5>
<h5>Production : <span style="color: blue;">https://api-prd.oss.go.id/v1/kl/rba/[nama_method]</span></h5>
<h5>Staging : <span style="color: blue;">https://api-stg.oss.go.id/stg/v1/kl/rba/[nama_method]</span></h5>
<h5>Berikut ini daftar Method dalam services Online Single Submission (OSS).</h5>
<table>
<thead>
<tr>
<th style="text-align:center">NO</th>
<th>Fungsi</th>
<th>Method</th>
<th>Locate</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td>Pengiriman Data Akta Pendirian &amp; Pengesahan serta NPWP dari AHU Online Kemenkumham ke Sistem OSS</td>
<td>receiveLegal</td>
<td>Server (OSS) Client (K/L/D)</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td>Services yang disediakan oleh Sistem K/L/D untuk menerima data NIB dari Sistem OSS</td>
<td>receiveNIB</td>
<td>Server (K/L/D) Client (OSS)</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td>Pengiriman Data Izin Final dari Sistem K/L/D ke Sistem OSS</td>
<td>receiveLicense</td>
<td>Server (OSS) Client (K/L/D)</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td>Pengiriman Data Status Izin dari Sistem K/L/D ke Sistem OSS</td>
<td>receiveLicenseSta tus</td>
<td>Server (OSS) Client (K/L/D)</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td>Inquery Data Nomor Induk Berusaha (NIB) di Sistem OSS</td>
<td>inqueryNIB</td>
<td>Server (OSS) Client (K/L/D)</td>
</tr>
<tr>
<td style="text-align:center">6</td>
<td>Pengiriman Security Key Untuk Digunakan Sebagai key Untuk Menginvoke/Memanggil Service di Sistem OSS</td>
<td>sendSecurityKey</td>
<td>Server (OSS) Client (K/L/D)</td>
</tr>
<tr>
<td style="text-align:center">7</td>
<td>Rekonsiliasi Data Nomor Induk Berusaha (NIB) di Sistem OSS dengan Sistem AHU Online Kemenkumham</td>
<td>rekonAHUNIB</td>
<td>Server (OSS) Client (K/L/D)</td>
</tr>
<tr>
<td style="text-align:center">8</td>
<td>Cek Data Nomor Induk Berusaha (NIB) di Sistem OSS</td>
<td>checkNIB</td>
<td>Server (OSS) Client (K/L/D)</td>
</tr>
<tr>
<td style="text-align:center">9</td>
<td>Cek Data Nomor Induk Berusaha (NIB) yang Error / Gagal Terkirim di Sistem OSS ke Sistem K/L/D</td>
<td>checkNIBError</td>
<td>Server (OSS) Client (K/L/D)</td>
</tr>
<tr>
<td style="text-align:center">10</td>
<td>Cek Data Nomor Induk Berusaha (NIB) yang Update data checklist/komitmen di Sistem OSS ke Sistem K/L/D</td>
<td>checkNIBUpdate</td>
<td>Server (OSS) Client (K/L/D)</td>
</tr>
<tr>
<td style="text-align:center">11</td>
<td>Rekonsiliasi Data Nomor Induk Berusaha (NIB) di Sistem OSS dengan Sistem K/L/D</td>
<td>rekonNIB</td>
<td>Server (OSS) Client (K/L/D)</td>
</tr>
<tr>
<td style="text-align:center">12</td>
<td>Cek Data nomor dokumen pemenuhan checklist/komitmen di Sistem OSS ke Sistem K/L/D</td>
<td>checkKomitmen</td>
<td>Server (K/L/D) Client (OSS)</td>
</tr>
<tr>
<td style="text-align:center">13</td>
<td>Services yang disediakan oleh Sistem K/L/D untuk menerima data NIB Surat Tanda Pendaftaraan Waralaba (STPW) dari Sistem OSS</td>
<td>receiveNIBSTPW</td>
<td>Server (K/L/D) Client (OSS)</td>
</tr>
<tr>
<td style="text-align:center">14</td>
<td>Inquery Data Nomor Induk Berusaha (NIB) Surat Tanda Pendaftaraan Waralaba (STPW) di Sistem OSS</td>
<td>inqueryNIBSTPW</td>
<td>Server (OSS) Client (K/L/D)</td>
</tr>
<tr>
<td style="text-align:center">15</td>
<td>Get Data Referensi di Sistem OSS</td>
<td>getDataReferensi</td>
<td>Server (OSS) Client (K/L/D)</td>
</tr>
<tr>
<td style="text-align:center">16</td>
<td>Services yang disediakan oleh Sistem K/L/D untuk menerima data file izin yang sudah di digital signature dari Sistem OSS</td>
<td>receiveFileDS</td>
<td>Server (K/L/D) Client (OSS)</td>
</tr>
<tr>
<td style="text-align:center">17</td>
<td>Pengiriman Data pengajuan KKPR dari Sistem OSS ke K/L</td>
<td>receiveNIBKKPR</td>
<td>Server (K/L) Client (OSS)</td>
</tr>
<tr>
<td style="text-align:center">18</td>
<td>Pengiriman Data NIB PSE Asing dari Sistem OSS ke K/L</td>
<td>receiveNIBPSE</td>
<td>Server (K/L) Client (OSS)</td>
</tr>
<tr>
<td style="text-align:center">19</td>
<td>Pengecekan Data Status Izin dari Sistem K/L/D ke Sistem OSS</td>
<td>checkLisenseStatus</td>
<td>Server (OSS) Client (K/L/D)</td>
</tr>
<tr>
<td style="text-align:center">20</td>
<td>Penerimaan Data Sertifikat dari Sistem K/L/D ke Sistem OSS</td>
<td>receiveCertificate</td>
<td>Server (OSS) Client (K/L/D)</td>
</tr>
<tr>
<td style="text-align:center">21</td>
<td>Inquery Data Sertifikat Izin dari Sistem K/L/D ke Sistem OSS</td>
<td>inqueryCertificate</td>
<td>Server (OSS) Client (K/L/D)</td>
</tr>
</tbody>
</table>
`},footer:{title:"Lampiran",content:`<h1>Lampiran</h1>
<h4><span id="api-example-for-a-submenu-entry">Lampiran 1 - DATA STATUS PERMODALAN</span></h4>
<table>
<thead>
<tr>
<th>KODE</th>
<th>STATUS</th>
<th>KETERANGAN</th>
</tr>
</thead>
<tbody>
<tr>
<td>01</td>
<td>Penanaman Modal Asing</td>
<td>Salah satu Sumber Penanaman Modal berasal dari Asing</td>
</tr>
<tr>
<td>02</td>
<td>Penanaman Modal Dalam Negeri</td>
<td>Semua Sumber Penanaman Modal berasal dari Lokal</td>
</tr>
<tr>
<td>03</td>
<td>Bukan (PMA/PMDN)</td>
<td>Khusus untuk Bentuk Usaha Tetap (BUT)</td>
</tr>
</tbody>
</table>
<h4><span id="api-example-for-a-submenu-entry">Lampiran 2 - DATA JENIS PERUSAHAAN</span></h4>
<table>
<thead>
<tr>
<th>KODE</th>
<th>STATUS</th>
<th>KETERANGAN</th>
</tr>
</thead>
<tbody>
<tr>
<td>KODE</td>
<td>JENIS PERUSAHAAN</td>
<td>KETERANGAN</td>
</tr>
<tr>
<td>01</td>
<td>Perusahaan Terbatas (PT)</td>
<td>Badan Usaha yang Berbadan Hukum resmi yang dimiliki oleh minimal dua orang dengan tanggung jawab yang hanya berlaku pada perusahaan tanpa melibatkan harta pribadi atau perseorangan yang ada di dalamnya.</td>
</tr>
<tr>
<td>02</td>
<td>Perseroan Komanditer (CV)</td>
<td>Badan Usaha bisnis yang didirikan dan dimiliki oleh dua orang atau lebih. Salah satu pihak melibatkan harta pribadi dan pihak lainnya hanya menyertakan modal saja tanpa harus melibatkan harta pribadi ketika krisis finansial.</td>
</tr>
<tr>
<td>04</td>
<td>Badan Usaha Pemerintah</td>
<td>Badan Usaha yang didirikan dan dikelola oleh pemerintah seperti BUMD,BUMDES dan sejenisnya</td>
</tr>
<tr>
<td>05</td>
<td>Firma (Fa)</td>
<td>Badan Usaha yang didirikan oleh 2 orang atau lebih dimana tiap anggota bertanggung jawab penuh atas perusahaan.</td>
</tr>
<tr>
<td>06</td>
<td>Persekutuan Perdata</td>
<td>Sekumpulan orang yang memiliki profesi yangsama dan berkeinginan untuk berhimpun dengan menggunakan nama bersama.</td>
</tr>
<tr>
<td>07</td>
<td>Koperasi</td>
<td>Badan Usaha yang beranggotakan orang \u2013 orang atau badan hukum koperasi dengan melandaskan kegiatannya berdasarkan prinsip koperasi sekaligus sebagai gerakan ekonomi rakyat yang berlandaskan asas kekeluargaan.</td>
</tr>
<tr>
<td>10</td>
<td>Yayasan</td>
<td>Badan Usaha Berbadan Hukum yang tidak mencari untung. Jadi lebih ke kepentingan sosial.</td>
</tr>
<tr>
<td>16</td>
<td>Bentuk Usaha Tetap (BUT)</td>
<td>Bentuk Usaha yang dipergunakan untuk orang pribadi yang tidak bertempat tinggal di Indonesia atau berada di Indonesia tidak lebih dari 183 hari dalam jangka waktu 12 bulan, atau Badan yang tidak didirikan dan tidak berkedudukan di Indonesia, untuk menjalankan usaha atau melakukan kegiatan di Indonesia</td>
</tr>
<tr>
<td>17</td>
<td>Perseorangan</td>
<td></td>
</tr>
<tr>
<td>18</td>
<td>Badan Layanan Umum (BLU)</td>
<td>Instansi di lingkungan Pemerintah yang memberikan pelayanan kepada masyarakat berupa penyediaan barang dan/atau jasa yang dijual tanpa mengutamakan mencari keuntungan dan dalam melakukan kegiatannya didasarkan pada prinsip efisiensi dan produktifitas.</td>
</tr>
<tr>
<td>19</td>
<td>Badan Hukum (selain PT,Yayasan dan Koperasi)</td>
<td>Badan Hukum semain kategori Perseroan Terbatas (PT), Yayas\u0131n dan Koperasi</td>
</tr>
<tr>
<td>20</td>
<td>Badan Usaha Lainnya (Khusus STPW Luar Negeri)</td>
<td>Badan hukum pemegang Surat Tanda Pendaftaran Waralaba (STPW) luar negeri</td>
</tr>
<tr>
<td>21</td>
<td>Perusahaan Umum (Perum)</td>
<td>Badan usaha milik negara yang modalnya masih dimiliki oleh Pemerintah</td>
</tr>
<tr>
<td>22</td>
<td>Perusahaan Umum Daerah (Perumda)</td>
<td>Badan usaha yang seluruh modalnya dimiliki oleh satu daerah dan tidak terbagi atas saham</td>
</tr>
<tr>
<td>23</td>
<td>Perusahaan Daerah (Perusda)</td>
<td>Badan usaha yang sebagian atau seluruh modal yang dimiliki adalah milik Pemerintah Daerah</td>
</tr>
<tr>
<td>24</td>
<td>Badan Operasi Bersama (BOB)</td>
<td>Kegiatan operasional yang dilakukan oleh badan operasi bersama yang dikepalai oleh BP Migas dan dibantu oleh kontraktor sebagai pihak kedua dalam BOB</td>
</tr>
<tr>
<td>25</td>
<td>Badan Usaha Perwakilan</td>
<td></td>
</tr>
<tr>
<td>26</td>
<td>Perseroan Terbatas (PT) Perorangan</td>
<td></td>
</tr>
<tr>
<td>27</td>
<td>Pedagang Berjangka Asing (PBA)</td>
<td>Pedagang Berjangka Asing (PBA)</td>
</tr>
</tbody>
</table>
<h4><span id="api-example-for-a-submenu-entry">Lampiran 3 - DATA JENIS ANGKA PENGENAL IMPORTIR (API)</span></h4>
<table>
<thead>
<tr>
<th>KODE</th>
<th>KETERANGAN</th>
</tr>
</thead>
<tbody>
<tr>
<td>01</td>
<td>Angka Pengenal Importir Umum (API-U)</td>
</tr>
<tr>
<td>02</td>
<td>Angka Pengenal Importir Produsen (API-P)</td>
</tr>
</tbody>
</table>
<h4><span id="api-example-for-a-submenu-entry">Lampiran 4 - DATA JENIS IDENTITAS</span></h4>
<table>
<thead>
<tr>
<th>KODE</th>
<th>KETERANGAN</th>
</tr>
</thead>
<tbody>
<tr>
<td>01</td>
<td>Kartu Tanda Penduduk (KTP)</td>
</tr>
<tr>
<td>02</td>
<td>Paspor</td>
</tr>
</tbody>
</table>
<h4><span id="api-example-for-a-submenu-entry">Lampiran 5 - DATA JENIS STATUS TANAH</span></h4>
<table>
<thead>
<tr>
<th>KODE</th>
<th>KETERANGAN</th>
</tr>
</thead>
<tbody>
<tr>
<td>01</td>
<td>Sewa</td>
</tr>
<tr>
<td>02</td>
<td>Bukan Sewa</td>
</tr>
<tr>
<td>03</td>
<td>Pinjam Pakai</td>
</tr>
</tbody>
</table>
<h4><span id="api-example-for-a-submenu-entry">Lampiran 6 - DATA JENIS ASAL INVESTOR</span></h4>
<table>
<thead>
<tr>
<th>KODE</th>
<th>KETERANGAN</th>
</tr>
</thead>
<tbody>
<tr>
<td>01</td>
<td>Indonesia</td>
</tr>
<tr>
<td>02</td>
<td>Asing</td>
</tr>
</tbody>
</table>
<h4><span id="api-example-for-a-submenu-entry">Lampiran 7 - DATA JENIS AKTA</span></h4>
<table>
<thead>
<tr>
<th>KODE</th>
<th>KETERANGAN</th>
</tr>
</thead>
<tbody>
<tr>
<td>01</td>
<td>Akta Pendirian</td>
</tr>
<tr>
<td>02</td>
<td>Akta Perubahan</td>
</tr>
<tr>
<td>06</td>
<td>Kontrak</td>
</tr>
<tr>
<td>07</td>
<td>Peraturan</td>
</tr>
<tr>
<td>09</td>
<td>SK Penetapan</td>
</tr>
<tr>
<td>10</td>
<td>Akta Likuidasi</td>
</tr>
<tr>
<td>11</td>
<td>Akta Merger</td>
</tr>
<tr>
<td>12</td>
<td>Akta Pembubaran</td>
</tr>
</tbody>
</table>
<h4><span id="api-example-for-a-submenu-entry">Lampiran 8 - DATA KODE IZIN</span></h4>
<p>Untuk Referensi Kode Izin Bisa didapatkan melalui method getDataReferensi dengan memasukkan kode 8</p>
<h4><span id="api-example-for-a-submenu-entry">Lampiran 9 - DATA STATUS RESPON</span></h4>
<table>
<thead>
<tr>
<th>KODE</th>
<th>KETERANGAN</th>
</tr>
</thead>
<tbody>
<tr>
<td>200</td>
<td>Sukses</td>
</tr>
<tr>
<td>400</td>
<td>Data Parameter Salah</td>
</tr>
<tr>
<td>401</td>
<td>User Akses Tidak Valid</td>
</tr>
<tr>
<td>403</td>
<td>Ilegal Inquery /Akses</td>
</tr>
<tr>
<td>404</td>
<td>Akses Service Tidak Ditemukan</td>
</tr>
<tr>
<td>405</td>
<td>Akses Service Ditolak</td>
</tr>
<tr>
<td>500</td>
<td>Proses Payload Data Di Sistem OSS Gagal</td>
</tr>
<tr>
<td>504</td>
<td>Proses Payload Data Di Sistem OSS Timeout</td>
</tr>
</tbody>
</table>
<h4><span id="api-example-for-a-submenu-entry">Lampiran 10 - DATA KODE STATUS IZIN</span></h4>
<table>
<thead>
<tr>
<th>KODE</th>
<th>STATUS</th>
<th>KETERANGAN</th>
</tr>
</thead>
<tbody>
<tr>
<td>10</td>
<td>Dokumen Lengkap</td>
<td>Dokumen permohonan izin sudah lengkap dan benar</td>
</tr>
<tr>
<td>11</td>
<td>Dokumen Belum Lengkap</td>
<td>Dokumen permohonan izin belum lengkap</td>
</tr>
<tr>
<td>20</td>
<td>Validasi</td>
<td>Petugas melakukan pengecekkan terhadap permohonan izin tersebut</td>
</tr>
<tr>
<td>30</td>
<td>Verifikasi Pembayaran</td>
<td>Petugas melakukan verifikasi pembayaran terhadap Pelaku Usaha</td>
</tr>
<tr>
<td>31</td>
<td>Konfirmasi Pembayaran</td>
<td>Petugas melakukan konfirmasi pembayaran terhadap Pelaku Usaha</td>
</tr>
<tr>
<td>40</td>
<td>Inspeksi</td>
<td>Petugas melakukan pengecekan ke lapangan</td>
</tr>
<tr>
<td>41</td>
<td>Konfirmasi Persyaratan</td>
<td>Pemberhentian perhitungan SLA perizinan karena ada urgensi tertentu</td>
</tr>
<tr>
<td>42</td>
<td>Data Konfirmasi Persyaratan</td>
<td>Mulai kembali perhitungan SLA perizinan</td>
</tr>
<tr>
<td>43</td>
<td>Re-Konfirmasi Persyaratan</td>
<td>Pemberhentian perhitungan SLA kembali ke awal</td>
</tr>
<tr>
<td>44</td>
<td>Data Re-Konfirmasi Persyaratan</td>
<td>Mulai kembali perhitungan SLA perizinan dari awal</td>
</tr>
<tr>
<td>50</td>
<td>Disetujui</td>
<td>Petugas menyetujui Izin dari Pelaku Usaha</td>
</tr>
<tr>
<td>60</td>
<td>Peringatan</td>
<td>Petugas memberikan peringatan terhadap Izin Pelaku Usaha, apabila Izin tersebut bermasalah</td>
</tr>
<tr>
<td>70</td>
<td>Penghentian Sementara Kegiatan Berusaha</td>
<td>Petugas menghentikan sementara kegiatan berusaha, apabila Izin tersebut bermasalah</td>
</tr>
<tr>
<td>80</td>
<td>Pengenaan Denda Administratif</td>
<td>Petugas memberikan denda administratif, apabila Izin tersebut bermasalah</td>
</tr>
<tr>
<td>90</td>
<td>Ditolak</td>
<td>Petugas menolak permohonan Izin Usaha</td>
</tr>
<tr>
<td>91</td>
<td>Pencabutan Perizinan Berusaha</td>
<td>Petugas mencabut Izin Usaha</td>
</tr>
<tr>
<td>92</td>
<td>Pembatalan Perizinan Berusaha</td>
<td>Petugas membatalkan Izin Berusaha</td>
</tr>
</tbody>
</table>
<h4><span id="api-example-for-a-submenu-entry">Lampiran 11 - DATA KODE KLASIFIKASI SAHAM</span></h4>
<table>
<thead>
<tr>
<th>KODE</th>
<th>KETERANGAN</th>
</tr>
</thead>
<tbody>
<tr>
<td>01</td>
<td>Tanpa Klasifikasi</td>
</tr>
<tr>
<td>02</td>
<td>Seri A</td>
</tr>
<tr>
<td>03</td>
<td>Seri B</td>
</tr>
<tr>
<td>04</td>
<td>Seri C</td>
</tr>
<tr>
<td>05</td>
<td>Seri D</td>
</tr>
<tr>
<td>06</td>
<td>Seri E</td>
</tr>
<tr>
<td>N (sesuai urutan yang sebelumnya)</td>
<td>Seri <em>N</em> (sesuai urutan yang sebelumnya)</td>
</tr>
</tbody>
</table>
<h4><span id="api-example-for-a-submenu-entry">Lampiran 12 - DATA KODE STATUS BADAN HUKUM</span></h4>
<table>
<thead>
<tr>
<th>KODE</th>
<th>KETERANGAN</th>
</tr>
</thead>
<tbody>
<tr>
<td>01</td>
<td>Badan Hukum</td>
</tr>
<tr>
<td>02</td>
<td>Bukan Badan Hukum</td>
</tr>
</tbody>
</table>
<h4><span id="api-example-for-a-submenu-entry">Lampiran 13 - DATA KODE JENIS PEMEGANG SAHAM</span></h4>
<table>
<thead>
<tr>
<th>KODE</th>
<th>KETERANGAN</th>
</tr>
</thead>
<tbody>
<tr>
<td>01</td>
<td>Perorangan</td>
</tr>
<tr>
<td>02</td>
<td>Badan Hukum</td>
</tr>
</tbody>
</table>
<h4><span id="api-example-for-a-submenu-entry">Lampiran 14 - DATA KODE STATUS DOKUMEN NIB</span></h4>
<table>
<thead>
<tr>
<th>KODE</th>
<th>KETERANGAN</th>
</tr>
</thead>
<tbody>
<tr>
<td>01</td>
<td>Aktif</td>
</tr>
<tr>
<td>02</td>
<td>Belum Aktif</td>
</tr>
<tr>
<td>03</td>
<td>Diizinkan Usaha</td>
</tr>
<tr>
<td>04</td>
<td>Diizinkan Beroperasi</td>
</tr>
<tr>
<td>05</td>
<td>Dibekukan</td>
</tr>
<tr>
<td>06</td>
<td>Dicabut</td>
</tr>
</tbody>
</table>
<h4><span id="api-example-for-a-submenu-entry">Lampiran 15 - DATA KODE DAFTAR NEGATIF INVESTASI (DNI)</span></h4>
<table>
<thead>
<tr>
<th>KODE</th>
<th>KETERANGAN</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Maksimal 70% bagi penanam modal dari negara-negara ASEAN; dan</td>
</tr>
<tr>
<td>2</td>
<td>Penanaman Modal Asing Maksimal 67%</td>
</tr>
<tr>
<td>3</td>
<td>Bertempat di dalam mal dan tidak stand alone</td>
</tr>
<tr>
<td>4</td>
<td>Penambahan outlet store berdasarkan ekspor p erformance (pay perfomwnce)</td>
</tr>
<tr>
<td>5</td>
<td>Bahan baku dari Hutan Tanaman Industri (HTI) atau berasal dari Chip Impor jika bahan baku dalam negeri tidak mencukupi</td>
</tr>
<tr>
<td>6</td>
<td>Bahan Baku Minimal 20% Berasal dari Kebun Sendiri</td>
</tr>
<tr>
<td>7</td>
<td>Dapat dilakukan diseluruh Ibukota Provinsi Indonesia Timur kecuali Makassar dan Manado</td>
</tr>
<tr>
<td>8</td>
<td>Dapat dilakukan diseluruh Ibukota Provinsi Indonesia Timur kecuali Makassar dan Manado</td>
</tr>
<tr>
<td>9</td>
<td>Hanya berlaku pada 4 (empat) pelabuhan di\u21B5wilayah Indonesia bagian timur yaitu:\u21B5Pelabuhan Bitung, Pelabuhan Ambon, Pelabuhan Kupang, dan Pelabuhan Sarong khusus Negara-negara anggota ASEAN</td>
</tr>
<tr>
<td>10</td>
<td>Hanya monopoli untuk Lembaga Penyiaran Publik\u21B5Radio. Republik Indonesia (RRI), Televisi Republik Indonesia (TVRI), dan Lembaga Penyiaran Publik Lokal (LPPL)</td>
</tr>
<tr>
<td>11</td>
<td>Hanya untuk penambahan dan pengembangan usaha</td>
</tr>
<tr>
<td>12</td>
<td>Izin Khusus dari Kementerian Kesehatan</td>
</tr>
<tr>
<td>13</td>
<td>Izin Khusus dari Kementerian Kesehatan</td>
</tr>
<tr>
<td>14</td>
<td>Izin Khusus dari Kementerian Kesehatan</td>
</tr>
<tr>
<td>15</td>
<td>Izin Khusus dari Kementerian Perhubungan</td>
</tr>
<tr>
<td>16</td>
<td>Izin Khusus dari Kementerian Perhubungan terkait dengan persyaratan modal minimum</td>
</tr>
<tr>
<td>17</td>
<td>Izin operasional dari BOTASUPAL/BIN</td>
</tr>
<tr>
<td>18</td>
<td>Izin Operasional dari Mabes Polri</td>
</tr>
<tr>
<td>19</td>
<td>Jaringan distribusi dan tempatnya khusus</td>
</tr>
<tr>
<td>20</td>
<td>Kewajiban Perkebunan Plasma Sebesar 20%</td>
</tr>
<tr>
<td>21</td>
<td>Lokasi Tertentu yang ditetapkan oleh Kementerian Pertanian</td>
</tr>
<tr>
<td>22</td>
<td>lzin Khusus dari Kementerian Kesehatan</td>
</tr>
<tr>
<td>23</td>
<td>Maksimal 51% bagi penanam modal dari negara-negara ASEAN</td>
</tr>
<tr>
<td>25</td>
<td>Maksimal 70% bagi penanam modal dari negara-negara ASEAN</td>
</tr>
<tr>
<td>26</td>
<td>Maksimal 70% bagi penanam modal dari negara-negara ASEAN; dan</td>
</tr>
<tr>
<td>28</td>
<td>Modal dalam negeri 100%</td>
</tr>
<tr>
<td>29</td>
<td>Modal dalam negeri 100% dan Izin Khusus dari\u21B5Kementerian Kelautan dan Perikanan mengenai alokasi sumber daya ikan dan titik koordinat daerah penangkapan ikan</td>
</tr>
<tr>
<td>30</td>
<td>Pemenuhan kebutuhan bahan baku paling banyak 80% dengan pola kemitraan</td>
</tr>
<tr>
<td>31</td>
<td>Pemenuhan kebutuhan bahan baku paling kurang 20% dari kapasitas produksi berasal dari kebun karet sendiri</td>
</tr>
<tr>
<td>32</td>
<td>Pemilik modal nasional harus tetap lebih besar dari keseluruhan pemilik modal asing (single majority)</td>
</tr>
<tr>
<td>33</td>
<td>Pemyataan kerjasama dengan lembaga yang terakreditasi/ laboratorium di Indonesia/ lembaga nasional bidang litbang yang ditunjuk oleh Kementerian Lingkungan Hidup dan Kehutanan</td>
</tr>
<tr>
<td>35</td>
<td>Penanaman Modal Asing Maksimal 100%</td>
</tr>
<tr>
<td>36</td>
<td>Penanaman Modal Asing Maksimal 30%</td>
</tr>
<tr>
<td>37</td>
<td>Penanaman Modal Asing Maksimal 33%</td>
</tr>
<tr>
<td>38</td>
<td>Penanaman Modal Asing Maksimal 49%</td>
</tr>
<tr>
<td>39</td>
<td>Penanaman Modal Asing Maksimal 49%, dengan 51% untuk BUMN</td>
</tr>
<tr>
<td>40</td>
<td>Penanaman Modal Asing Maksimal 51%</td>
</tr>
<tr>
<td>41</td>
<td>Penanaman Modal Asing Maksimal 67%</td>
</tr>
<tr>
<td>42</td>
<td>Penanaman Modal Asing Maksimal 70% bagi penanam modal dari negara- negara ASEAN</td>
</tr>
<tr>
<td>43</td>
<td>Penanaman Modal Asing Maksimal 75%</td>
</tr>
<tr>
<td>44</td>
<td>Penanaman Modal Asing Maksimal 80%</td>
</tr>
<tr>
<td>45</td>
<td>Penanaman Modal Asing Maksimal 85%</td>
</tr>
<tr>
<td>46</td>
<td>Penanaman Modal Asing Maksimal 90%</td>
</tr>
<tr>
<td>47</td>
<td>Penanaman Modal Asing Maksimal 95%\u21B5(Maksimal 100% apabila dalam rangka KPS selama masa konsesi)</td>
</tr>
<tr>
<td>48</td>
<td>Penanaman Modal Asing Maksimal 95%</td>
</tr>
<tr>
<td>49</td>
<td>Penanaman Modal Asing Maksimal 95% (Maksimal 100% apabila dalam rangka Kerjasama Pemerintah Swasta/KPS selama masa konsesi)</td>
</tr>
<tr>
<td>50</td>
<td>Penanaman Modal Asing Maksimum 20%</td>
</tr>
<tr>
<td>51</td>
<td>Penanaman Modal Asing Maksimum 49%</td>
</tr>
<tr>
<td>52</td>
<td>Perizinan Khusus dari Otoritas Jasa Keuangan</td>
</tr>
<tr>
<td>53</td>
<td>Rekomendasi dari Kcmenterian Pertahanan</td>
</tr>
<tr>
<td>54</td>
<td>Rekomendasi dari Kementerian Lingkungan Hidup\u21B5dan Kementerian Perindustrian khusus untuk industri yang menggunakan bahan baku accu bekas</td>
</tr>
<tr>
<td>55</td>
<td>Rekomendasi dari Kementerian Lingkungan Hidup dan Kehutanan</td>
</tr>
<tr>
<td>56</td>
<td>Rekomendasi dari Kementerian Perindustrian</td>
</tr>
<tr>
<td>57</td>
<td>Rekomendasi pasokan bahan baku berkelanjutan dari Kementerian Lingkungan Hidup dan Kehutanan</td>
</tr>
<tr>
<td>58</td>
<td>Sesuai dengan ketentuan yang ditetapkan BPOM dan Kementerian Perdagangan</td>
</tr>
<tr>
<td>59</td>
<td>Sesuai Undang-Undang Nomor 12 Tahun 2012 tentang Pendidikan Tinggi serta Peraturan Pelaksanaannya</td>
</tr>
<tr>
<td>60</td>
<td>Sesuai Undang-Undang Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional (Sisdikmas) serta Peraturan Pelaksanaannya</td>
</tr>
<tr>
<td>61</td>
<td>Surat Izin Usaha Perdagangan Minuman Beralkohol (SIUP-MB)</td>
</tr>
<tr>
<td>62</td>
<td>Untuk penanaman modal baru, hanya industri\u21B5rokok skala kecil dan menengah yang bermitra\u21B5dengan industri rokok skala besar yang sudah\u21B5memiliki lUI pada bidang usaha sejenis</td>
</tr>
<tr>
<td>63</td>
<td>Untuk perluasan usaha, hanya industri rokok\u21B5yang telah memiliki Izin Usaha Tndustri (lUI)\u21B5pada bidang usaha sejenis</td>
</tr>
<tr>
<td>64</td>
<td>Dicadangkan untuk UMKMK</td>
</tr>
<tr>
<td>65</td>
<td>Kemitraan dengan UMKMK</td>
</tr>
<tr>
<td>66</td>
<td>Bidang Usaha Tidak Termasuk Dalam DNI</td>
</tr>
<tr>
<td>67</td>
<td>Usaha Perbenihan/Pembibitan Tanaman Pangan Pokok dengan Luas lebih dari 25 Ha</td>
</tr>
<tr>
<td>68</td>
<td>Usaha Budidaya Tanaman Pangan Pokok dengan Luas lebih dari 25 Ha</td>
</tr>
<tr>
<td>69</td>
<td>Usaha Industri Perbenihan Perkebunan dengan Luas 25 Ha atau Lebih</td>
</tr>
<tr>
<td>70</td>
<td>Usaha Perkebunan dengan Luas 25 Ha atau Lebih Sampai Luasan Tertentu Tanpa Unit Pengolahan</td>
</tr>
<tr>
<td>71</td>
<td>Usaha Perkebunan dengan Luas 25 Ha atau Lebih yang Terintegrasi dengan Unit Pengolahan dengan Kapasitas Sama atau Melebihi Kapasitas Tertentu</td>
</tr>
<tr>
<td>72</td>
<td>Usaha dengan Kapasitas Sama atau Melebihi Kapasitas Tertentu</td>
</tr>
<tr>
<td>73</td>
<td>Usaha Budidaya Tanaman Pangan Pokok dengan Luas Kurang dari 25 Ha</td>
</tr>
<tr>
<td>74</td>
<td>Usaha Perbenihan Perkebunan dengan Luas Kurang dari 25 Ha</td>
</tr>
<tr>
<td>75</td>
<td>Usaha Perkebunan dengan Luas Kurang dari 25 Ha</td>
</tr>
<tr>
<td>76</td>
<td>Usaha Kapasitas Tertentu</td>
</tr>
</tbody>
</table>
<h4><span id="api-example-for-a-submenu-entry">Lampiran 16 - DATA KODE JENIS LOKASI</span></h4>
<table>
<thead>
<tr>
<th>KODE</th>
<th>KETERANGAN</th>
</tr>
</thead>
<tbody>
<tr>
<td>01</td>
<td>Dalam Kawasan</td>
</tr>
<tr>
<td>02</td>
<td>Di luar Kawasan</td>
</tr>
</tbody>
</table>
<h4><span id="api-example-for-a-submenu-entry">Lampiran 17 - DATA KODE SATUAN TANAH</span></h4>
<table>
<thead>
<tr>
<th>KODE</th>
<th>KETERANGAN</th>
</tr>
</thead>
<tbody>
<tr>
<td>01</td>
<td>M2</td>
</tr>
<tr>
<td>02</td>
<td>Ha</td>
</tr>
</tbody>
</table>
<h4><span id="api-example-for-a-submenu-entry">Lampiran 18 - DATA KODE JENIS PELAKU USAHA</span></h4>
<table>
<thead>
<tr>
<th>KODE</th>
<th>KETERANGAN</th>
</tr>
</thead>
<tbody>
<tr>
<td>11</td>
<td>Non Perseorangan</td>
</tr>
<tr>
<td>12</td>
<td>Perseorangan</td>
</tr>
<tr>
<td>13</td>
<td>Mikro</td>
</tr>
<tr>
<td>14</td>
<td>Perwakilan (SIUP3A)</td>
</tr>
<tr>
<td>15</td>
<td>Perwakilan	(BUJKA)</td>
</tr>
<tr>
<td>16</td>
<td>Perwakilan (KPPA)</td>
</tr>
<tr>
<td>17</td>
<td>STPW Luar Negeri</td>
</tr>
<tr>
<td>21</td>
<td>Perusahaan Umum (Perum)</td>
</tr>
<tr>
<td>22</td>
<td>Perusahaan Umum Daerah (Perumda)</td>
</tr>
<tr>
<td>23</td>
<td>Perusahaan Daerah (Perusda)</td>
</tr>
</tbody>
</table>
<h4><span id="api-example-for-a-submenu-entry">Lampiran 19 - DATA STATUS FLAG PAJAK</span></h4>
<table>
<thead>
<tr>
<th>KODE</th>
<th>KETERANGAN</th>
</tr>
</thead>
<tbody>
<tr>
<td>00</td>
<td>Valid/Sukses</td>
</tr>
<tr>
<td>01</td>
<td>Invalid/Gagal</td>
</tr>
<tr>
<td>02</td>
<td>Masa SPT Tahunan</td>
</tr>
<tr>
<td>03</td>
<td>Masa PPN 3 Bulanan</td>
</tr>
<tr>
<td>04</td>
<td>Wajib Pajak Tidak Ditemukan</td>
</tr>
<tr>
<td>16</td>
<td>Perwakilan (KPPA)</td>
</tr>
<tr>
<td>17</td>
<td>STPW Luar Negeri</td>
</tr>
<tr>
<td>21</td>
<td>Perusahaan Umum (Perum)</td>
</tr>
<tr>
<td>22</td>
<td>Perusahaan Umum Daerah (Perumda)</td>
</tr>
<tr>
<td>23</td>
<td>Perusahaan Daerah (Perusda)</td>
</tr>
</tbody>
</table>
<h4><span id="api-example-for-a-submenu-entry">Lampiran 20 - KODE REFERENSI SEKTOR</span></h4>
<table>
<thead>
<tr>
<th>KODE</th>
<th>SEKTOR</th>
<th>KEMENTERIAN</th>
</tr>
</thead>
<tbody>
<tr>
<td>020</td>
<td>Ketenagalistrikan</td>
<td>Energi dan Sumber Daya Mineral</td>
</tr>
<tr>
<td>018</td>
<td>Pertanian</td>
<td>Pertanian</td>
</tr>
<tr>
<td>029</td>
<td>Lingkungan Hidup Dan Kehutanan</td>
<td>Lingkungan Hidup Dan Kehutanan</td>
</tr>
<tr>
<td>033</td>
<td>Pekerjaan Umum Dan Perumahan Rakyat</td>
<td>Pekerjaan Umum Dan Perumahan Rakyat</td>
</tr>
<tr>
<td>032</td>
<td>Kelautan Dan Perikanan</td>
<td>Kelautan Dan Perikanan</td>
</tr>
<tr>
<td>024</td>
<td>Kesehatan</td>
<td>Kesehatan</td>
</tr>
<tr>
<td>063</td>
<td>Obat Dan Makanan</td>
<td>Obat Dan Makanan</td>
</tr>
<tr>
<td>019</td>
<td>Perindustrian</td>
<td>Perindustrian</td>
</tr>
<tr>
<td>090</td>
<td>Perdagangan</td>
<td>Perdagangan</td>
</tr>
<tr>
<td>022</td>
<td>Perhubungan</td>
<td>Perhubungan</td>
</tr>
<tr>
<td>059</td>
<td>Komunikasi dan Informatika</td>
<td>Komunikasi dan Informatika</td>
</tr>
<tr>
<td>015</td>
<td>Keuangan</td>
<td>Keuangan</td>
</tr>
<tr>
<td>040</td>
<td>Pariwisata</td>
<td>Pariwisata</td>
</tr>
<tr>
<td>023</td>
<td>Pendidikan dan Kebudayaan</td>
<td>Pendidikan dan Kebudayaan</td>
</tr>
<tr>
<td>042</td>
<td>Pendidikan Tinggi</td>
<td>Riset, Teknologi, dan Pendidikan Tinggi</td>
</tr>
<tr>
<td>025</td>
<td>Agama dan Keagamaan</td>
<td>Agama</td>
</tr>
<tr>
<td>026</td>
<td>Ketenagakerjaan</td>
<td>Ketenagakerjaan</td>
</tr>
<tr>
<td>060</td>
<td>Kepolisian</td>
<td>Kepolisian</td>
</tr>
</tbody>
</table>
<h4><span id="api-example-for-a-submenu-entry">Lampiran 21 - DATA KODE JENIS KAWASAN</span></h4>
<table>
<thead>
<tr>
<th>KODE</th>
<th>KETERANGAN</th>
</tr>
</thead>
<tbody>
<tr>
<td>01</td>
<td>Kawasaki Industri (KI)</td>
</tr>
<tr>
<td>02</td>
<td>Kawasaki Ekonomi Khusus (KEK)</td>
</tr>
<tr>
<td>03</td>
<td>Free Trade Zone (FTZ)</td>
</tr>
</tbody>
</table>
<h4><span id="api-example-for-a-submenu-entry">Lampiran 22 - DATA KODE STATUS PROYEK</span></h4>
<table>
<thead>
<tr>
<th>KODE</th>
<th>KETERANGAN</th>
</tr>
</thead>
<tbody>
<tr>
<td>01</td>
<td>Baru</td>
</tr>
<tr>
<td>02</td>
<td>Lama</td>
</tr>
</tbody>
</table>
<h4><span id="api-example-for-a-submenu-entry">Lampiran 23 - DATA KODE PENDIDIKAN</span></h4>
<table>
<thead>
<tr>
<th>KODE</th>
<th>KETERANGAN</th>
</tr>
</thead>
<tbody>
<tr>
<td>01</td>
<td>Sekolah Dasar (SD)</td>
</tr>
<tr>
<td>02</td>
<td>Sekolah Menengah Pertama (SMP)</td>
</tr>
<tr>
<td>03</td>
<td>Sekolah Menengah Atas (SMA)</td>
</tr>
<tr>
<td>04</td>
<td>Sekolah Menengah Kejuruan (SMK)</td>
</tr>
<tr>
<td>05</td>
<td>Diploma 1 (D1)</td>
</tr>
<tr>
<td>06</td>
<td>Diploma 2 (D2)</td>
</tr>
<tr>
<td>07</td>
<td>Diploma 3 (D3)</td>
</tr>
</tbody>
</table>
<h4><span id="api-example-for-a-submenu-entry">Lampiran 24 - DATA KODE POSISI LOKASI</span></h4>
<table>
<thead>
<tr>
<th>KODE</th>
<th>KETERANGAN</th>
</tr>
</thead>
<tbody>
<tr>
<td>01</td>
<td>Daratan</td>
</tr>
<tr>
<td>02</td>
<td>Perairan</td>
</tr>
<tr>
<td>03</td>
<td>Kawasan Hutan</td>
</tr>
</tbody>
</table>
<h4><span id="api-example-for-a-submenu-entry">Lampiran 25 - DATA KODE STATUS LOKASI</span></h4>
<table>
<thead>
<tr>
<th>KODE</th>
<th>KETERANGAN</th>
</tr>
</thead>
<tbody>
<tr>
<td>01</td>
<td>Lokasi Utama</td>
</tr>
<tr>
<td>02</td>
<td>Hamparan</td>
</tr>
</tbody>
</table>
<h4><span id="api-example-for-a-submenu-entry">Lampiran 26 - DATA JENIS PROYEK</span></h4>
<table>
<thead>
<tr>
<th>KODE</th>
<th>KETERANGAN</th>
</tr>
</thead>
<tbody>
<tr>
<td>01</td>
<td>Utama</td>
</tr>
<tr>
<td>02</td>
<td>Pendukung</td>
</tr>
<tr>
<td>03</td>
<td>Kantor Cabang Administrasi</td>
</tr>
<tr>
<td>04</td>
<td>Perluasan</td>
</tr>
</tbody>
</table>
<h4><span id="api-example-for-a-submenu-entry">Lampiran 27 - DATA JENIS IZIN</span></h4>
<table>
<thead>
<tr>
<th>KODE</th>
<th>KETERANGAN</th>
</tr>
</thead>
<tbody>
<tr>
<td>01</td>
<td>Izin Dasar</td>
</tr>
<tr>
<td>02</td>
<td>Izin</td>
</tr>
<tr>
<td>04</td>
<td>Sertifikat Standar</td>
</tr>
<tr>
<td>K02</td>
<td>Persyarat Standar</td>
</tr>
<tr>
<td>K03</td>
<td>UMKU</td>
</tr>
</tbody>
</table>
<h4><span id="api-example-for-a-submenu-entry">Lampiran 28 - DATA KODE FLAG CHECKLIST</span></h4>
<table>
<thead>
<tr>
<th>KODE</th>
<th>KETERANGAN</th>
</tr>
</thead>
<tbody>
<tr>
<td>Y</td>
<td>Komitmen</td>
</tr>
<tr>
<td>N</td>
<td>Tidak Komitmen</td>
</tr>
<tr>
<td>O</td>
<td>Otomatis Terbit</td>
</tr>
<tr>
<td>T</td>
<td>Tidak Butuh Komitmen (Tembusan)</td>
</tr>
</tbody>
</table>
<h4><span id="api-example-for-a-submenu-entry">Lampiran 29 - DATA KODE REFERENSI</span></h4>
<table>
<thead>
<tr>
<th>KODE</th>
<th>KETERANGAN</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Status Permodalan (Lampiran 1)</td>
</tr>
<tr>
<td>2</td>
<td>Jenis Perusahaan (Lampiran 2)</td>
</tr>
<tr>
<td>3</td>
<td>Jenis Angka Pengenal Importir (API) (Lampiran 3)</td>
</tr>
<tr>
<td>4</td>
<td>Jenis Identitas (Lampiran 4)</td>
</tr>
<tr>
<td>5</td>
<td>Jenis Status Tanah (Lampiran 5)</td>
</tr>
<tr>
<td>6</td>
<td>Jenis Asal Investor (Lampiran 6)</td>
</tr>
<tr>
<td>7</td>
<td>Jenis Akta (Lampiran 7)</td>
</tr>
<tr>
<td>8</td>
<td>Kode Izin (Lampiran 8)</td>
</tr>
<tr>
<td>9</td>
<td>Kode Status Respon (Lampiran 9)</td>
</tr>
<tr>
<td>10</td>
<td>Kode Status Izin (Lampiran 10)</td>
</tr>
<tr>
<td>11</td>
<td>Kode Klasifikasi Saham (Lampiran 11)</td>
</tr>
<tr>
<td>12</td>
<td>Kode Status Badan Hukum (Lamiran 12)</td>
</tr>
<tr>
<td>13</td>
<td>Kode Jenis Pemegang Saham (Lampiran 13)</td>
</tr>
<tr>
<td>14</td>
<td>Kode Status Dokumen NIB (Lampiran 14)</td>
</tr>
<tr>
<td>15</td>
<td>Kode Daftar Negatif Investasi (DNI) (Lampiran 15)</td>
</tr>
<tr>
<td>16</td>
<td>Kode Jenis Lokasi (Lampiran 16)</td>
</tr>
<tr>
<td>17</td>
<td>Kode Satuan Tanah (Lampiran 17)</td>
</tr>
<tr>
<td>18</td>
<td>Kode Jenis Pelaku Usaha (Lampiran 18)</td>
</tr>
<tr>
<td>19</td>
<td>Kode Status Flag Kajak (Lampiran 19)</td>
</tr>
<tr>
<td>20</td>
<td>Kode Referensi Sektor (Lampiran 20)</td>
</tr>
<tr>
<td>21</td>
<td>Kode Jenis Kawasan (Lampiran 21)</td>
</tr>
<tr>
<td>22</td>
<td>Kode Status Proyek (Lampiran 22)</td>
</tr>
<tr>
<td>23</td>
<td>Kode Pendidikan (Lampiran 23)</td>
</tr>
<tr>
<td>24</td>
<td>Kode Posisi Lokasi (Lampiran 24)</td>
</tr>
<tr>
<td>25</td>
<td>Kode Status Lokasi (Lampiran 25)</td>
</tr>
<tr>
<td>26</td>
<td>Jenis Proyek (Lampiran 26)</td>
</tr>
<tr>
<td>27</td>
<td>Jenis Izin (Lampiran 27)</td>
</tr>
<tr>
<td>28</td>
<td>Kode Flag Checklist (Lampiran 28)</td>
</tr>
<tr>
<td>29</td>
<td>Kode Jabatan Tenaga Kerja Asing</td>
</tr>
<tr>
<td>30</td>
<td>Kode KBLI Berdasarkan Mapping ke KBLI</td>
</tr>
<tr>
<td>31</td>
<td>Kode Bidang Spesifik</td>
</tr>
</tbody>
</table>
<h4><span id="api-example-for-a-submenu-entry">Lampiran 30 - DATA KODE KAWASAN</span></h4>
<p>Untuk Referensi Kode Kawasan Bisa didapatkan melalui method getDataReferensi dengan memasukkan kode 30</p>
`},template:{showRequiredLabels:!0,withCompare:!0,withGenerator:!0,aloneDisplay:!0},defaultVersion:"0.0.0",apidoc:"0.3.0",generator:{name:"apidoc",time:"Mon Sep 05 2022 11:33:48 GMT+0700 (Western Indonesia Time)",url:"https://apidocjs.com",version:"0.52.0"}};Oe();const Ae=p().compile(k()("#template-header").html()),Te=p().compile(k()("#template-footer").html()),re=p().compile(k()("#template-article").html()),_e=p().compile(k()("#template-compare-article").html()),me=p().compile(k()("#template-generator").html()),Ie=p().compile(k()("#template-project").html()),Ve=p().compile(k()("#template-sections").html()),Ge=p().compile(k()("#template-sidenav").html()),Xe={aloneDisplay:!1,showRequiredLabels:!1,withGenerator:!0,withCompare:!0};pe.template=Object.assign(Xe,(V=pe.template)!=null?V:{}),pe.template.forceLanguage&&xe(pe.template.forceLanguage);const Se=(0,s.groupBy)(Ce,J=>J.group),Ye={};k().each(Se,(J,W)=>{Ye[J]=(0,s.groupBy)(W,Z=>Z.name)});const Qe=[];k().each(Ye,(J,W)=>{let Z=[];k().each(W,(ee,oe)=>{const ge=oe[0].title;ge&&Z.push(ge.toLowerCase()+"#~#"+ee)}),Z.sort(),pe.order&&(Z=x(Z,pe.order,"#~#")),Z.forEach(ee=>{const ge=ee.split("#~#")[1];W[ge].forEach(he=>{Qe.push(he)})})}),Ce=Qe;let Ze={};const Wn={};let xn={};xn[pe.version]=1,k().each(Ce,(J,W)=>{Ze[W.group]=1,Wn[W.group]=W.groupTitle||W.group,xn[W.version]=1}),Ze=Object.keys(Ze),Ze.sort(),pe.order&&(Ze=Y(Wn,pe.order)),xn=Object.keys(xn),xn.sort(a().compare),xn.reverse();const Tn=[];Ze.forEach(J=>{Tn.push({group:J,isHeader:!0,title:Wn[J]});let W="";Ce.forEach(Z=>{Z.group===J&&(W!==Z.name?Tn.push({title:Z.title,group:J,name:Z.name,type:Z.type,version:Z.version,url:Z.url}):Tn.push({title:Z.title,group:J,hidden:!0,name:Z.name,type:Z.type,version:Z.version,url:Z.url}),W=Z.name)})});function bt(J,W,Z){let ee=!1;if(!W)return ee;const oe=W.match(/<h(1|2).*?>(.+?)<\/h(1|2)>/gi);return oe&&oe.forEach(function(ge){const he=ge.substring(2,3),Ne=ge.replace(/<.+?>/g,""),be=ge.match(/id="api-([^-]+)(?:-(.+))?"/),Re=be?be[1]:null,$e=be?be[2]:null;he==="1"&&Ne&&Re&&(J.splice(Z,0,{group:Re,isHeader:!0,title:Ne,isFixed:!0}),Z++,ee=!0),he==="2"&&Ne&&Re&&$e&&(J.splice(Z,0,{group:Re,name:$e,isHeader:!1,title:Ne,isFixed:!1,version:"1.0"}),Z++)}),ee}let rt;if(pe.header&&(rt=bt(Tn,pe.header.content,0),rt||Tn.unshift({group:"_header",isHeader:!0,title:pe.header.title==null?Pe("General"):pe.header.title,isFixed:!0})),pe.footer){const J=Tn.length;rt=bt(Tn,pe.footer.content,Tn.length),!rt&&pe.footer.title!=null&&Tn.splice(J,0,{group:"_footer",isHeader:!0,title:pe.footer.title,isFixed:!0})}const Hn=pe.title?pe.title:"apiDoc: "+pe.name+" - "+pe.version;k()(document).attr("title",Hn),k()("#loader").remove();const ct={nav:Tn};k()("#sidenav").append(Ge(ct)),k()("#generator").append(me(pe)),(0,s.extend)(pe,{versions:xn}),k()("#project").append(Ie(pe)),pe.header&&k()("#header").append(Ae(pe.header)),pe.footer&&(k()("#footer").append(Te(pe.footer)),pe.template.aloneDisplay&&document.getElementById("api-_footer").classList.add("hide"));const Cn={};let ht="";Ze.forEach(function(J){const W=[];let Z="",ee={},oe=J,ge="";Cn[J]={},Ce.forEach(function(he){J===he.group&&(Z!==he.name?(Ce.forEach(function(Ne){J===Ne.group&&he.name===Ne.name&&(Object.prototype.hasOwnProperty.call(Cn[he.group],he.name)||(Cn[he.group][he.name]=[]),Cn[he.group][he.name].push(Ne.version))}),ee={article:he,versions:Cn[he.group][he.name]}):ee={article:he,hidden:!0,versions:Cn[he.group][he.name]},pe.sampleUrl&&pe.sampleUrl===!0&&(pe.sampleUrl=window.location.origin),pe.url&&ee.article.url.substr(0,4).toLowerCase()!=="http"&&(ee.article.url=pe.url+ee.article.url),At(ee,he),he.groupTitle&&(oe=he.groupTitle),he.groupDescription&&(ge=he.groupDescription),W.push({article:re(ee),group:he.group,name:he.name,aloneDisplay:pe.template.aloneDisplay}),Z=he.name)}),ee={group:J,title:oe,description:ge,articles:W,aloneDisplay:pe.template.aloneDisplay},ht+=Ve(ee)}),k()("#sections").append(ht),pe.template.aloneDisplay||(document.body.dataset.spy="scroll",k()("body").scrollspy({target:"#scrollingNav"})),k()(".form-control").on("focus change",function(){k()(this).removeClass("border-danger")}),k()(".sidenav").find("a").on("click",function(J){J.preventDefault();const W=this.getAttribute("href");if(pe.template.aloneDisplay){const Z=document.querySelector(".sidenav > li.active");Z&&Z.classList.remove("active"),this.parentNode.classList.add("active")}else{const Z=document.querySelector(W);Z&&k()("html,body").animate({scrollTop:Z.offsetTop},400)}window.location.hash=W});function kn(J){let W=!1;return k().each(J,Z=>{W=W||(0,s.some)(J[Z],ee=>ee.type)}),W}function Bt(){k()('button[data-toggle="popover"]').popover().click(function(W){W.preventDefault()});const J=k()("#version strong").html();if(k()("#sidenav li").removeClass("is-new"),pe.template.withCompare&&k()("#sidenav li[data-version='"+J+"']").each(function(){const W=k()(this).data("group"),Z=k()(this).data("name"),ee=k()("#sidenav li[data-group='"+W+"'][data-name='"+Z+"']").length,oe=k()("#sidenav li[data-group='"+W+"'][data-name='"+Z+"']").index(k()(this));(ee===1||oe===ee-1)&&k()(this).addClass("is-new")}),k()(".nav-tabs-examples a").click(function(W){W.preventDefault(),k()(this).tab("show")}),k()(".nav-tabs-examples").find("a:first").tab("show"),k()(".sample-request-content-type-switch").change(function(){k()(this).val()==="body-form-data"?(k()("#sample-request-body-json-input-"+k()(this).data("id")).hide(),k()("#sample-request-body-form-input-"+k()(this).data("id")).show()):(k()("#sample-request-body-form-input-"+k()(this).data("id")).hide(),k()("#sample-request-body-json-input-"+k()(this).data("id")).show())}),pe.template.aloneDisplay&&(k()(".show-group").click(function(){const W="."+k()(this).attr("data-group")+"-group",Z="."+k()(this).attr("data-group")+"-article";k()(".show-api-group").addClass("hide"),k()(W).removeClass("hide"),k()(".show-api-article").addClass("hide"),k()(Z).removeClass("hide")}),k()(".show-api").click(function(){const W=this.getAttribute("href").substring(1),Z=document.getElementById("version").textContent.trim(),ee=`.${this.dataset.name}-article`,oe=`[id="${W}-${Z}"]`,ge=`.${this.dataset.group}-group`;k()(".show-api-group").addClass("hide"),k()(ge).removeClass("hide"),k()(".show-api-article").addClass("hide");let he=k()(ee);k()(oe).length&&(he=k()(oe).parent()),he.removeClass("hide"),W.match(/_(header|footer)/)&&document.getElementById(W).classList.remove("hide")})),pe.template.aloneDisplay||k()("body").scrollspy("refresh"),pe.template.aloneDisplay){const W=window.location.hash;if(W!=null&&W.length!==0){const Z=document.getElementById("version").textContent.trim(),ee=document.querySelector(`li .${W.slice(1)}-init`),oe=document.querySelector(`li[data-version="${Z}"] .show-api.${W.slice(1)}-init`);let ge=ee;oe&&(ge=oe),ge.click()}}}function Mt(J){typeof J=="undefined"?J=k()("#version strong").html():k()("#version strong").html(J),k()("article").addClass("hide"),k()("#sidenav li:not(.nav-fixed)").addClass("hide");const W={};document.querySelectorAll("article[data-version]").forEach(Z=>{const ee=Z.dataset.group,oe=Z.dataset.name,ge=Z.dataset.version,he=ee+oe;!W[he]&&a().lte(ge,J)&&(W[he]=!0,document.querySelector(`article[data-group="${ee}"][data-name="${oe}"][data-version="${ge}"]`).classList.remove("hide"),document.querySelector(`#sidenav li[data-group="${ee}"][data-name="${oe}"][data-version="${ge}"]`).classList.remove("hide"),document.querySelector(`#sidenav li.nav-header[data-group="${ee}"]`).classList.remove("hide"))}),k()("article[data-version]").each(function(Z){const ee=k()(this).data("group");k()("section#api-"+ee).removeClass("hide"),k()("section#api-"+ee+" article:visible").length===0?k()("section#api-"+ee).addClass("hide"):k()("section#api-"+ee).removeClass("hide")})}if(Mt(),k()("#versions li.version a").on("click",function(J){J.preventDefault(),Mt(k()(this).html())}),k()("#compareAllWithPredecessor").on("click",jt),k()("article .versions li.version a").on("click",dt),k().urlParam=function(J){const W=new RegExp("[\\?&amp;]"+J+"=([^&amp;#]*)").exec(window.location.href);return W&&W[1]?W[1]:null},k().urlParam("compare")&&k()("#compareAllWithPredecessor").trigger("click"),window.location.hash){const J=decodeURI(window.location.hash);k()(J).length>0&&k()("html,body").animate({scrollTop:parseInt(k()(J).offset().top)},0)}k()("#scrollingNav .sidenav-search input.search").focus(),k()('[data-action="filter-search"]').on("keyup",J=>{const W=J.currentTarget.value.toLowerCase();k()(".sidenav").find("a.nav-list-item").each((Z,ee)=>{k()(ee).show(),ee.innerText.toLowerCase().includes(W)||k()(ee).hide()})}),k()("span.search-reset").on("click",function(){k()("#scrollingNav .sidenav-search input.search").val("").focus(),k()(".sidenav").find("a.nav-list-item").show()});function dt(J){J.preventDefault();const W=k()(this).parents("article"),Z=k()(this).html(),ee=W.find(".version"),oe=ee.find("strong").html();ee.find("strong").html(Z);const ge=W.data("group"),he=W.data("name"),Ne=W.data("version"),be=W.data("compare-version");if(be!==Z&&!(!be&&Ne===Z)){if(be&&Cn[ge][he][0]===Z||Ne===Z)Gt(ge,he,Ne);else{let Re={},$e={};k().each(Ye[ge][he],function(sn,Vn){Vn.version===Ne&&(Re=Vn),Vn.version===Z&&($e=Vn)});const ke={article:Re,compare:$e,versions:Cn[ge][he]};ke.article.id=ke.article.group+"-"+ke.article.name+"-"+ke.article.version,ke.article.id=ke.article.id.replace(/\./g,"_"),ke.compare.id=ke.compare.group+"-"+ke.compare.name+"-"+ke.compare.version,ke.compare.id=ke.compare.id.replace(/\./g,"_");let Ke=Re;Ke.parameter&&Ke.parameter.fields&&(ke._hasTypeInParameterFields=kn(Ke.parameter.fields)),Ke.error&&Ke.error.fields&&(ke._hasTypeInErrorFields=kn(Ke.error.fields)),Ke.success&&Ke.success.fields&&(ke._hasTypeInSuccessFields=kn(Ke.success.fields)),Ke.info&&Ke.info.fields&&(ke._hasTypeInInfoFields=kn(Ke.info.fields)),Ke=$e,ke._hasTypeInParameterFields!==!0&&Ke.parameter&&Ke.parameter.fields&&(ke._hasTypeInParameterFields=kn(Ke.parameter.fields)),ke._hasTypeInErrorFields!==!0&&Ke.error&&Ke.error.fields&&(ke._hasTypeInErrorFields=kn(Ke.error.fields)),ke._hasTypeInSuccessFields!==!0&&Ke.success&&Ke.success.fields&&(ke._hasTypeInSuccessFields=kn(Ke.success.fields)),ke._hasTypeInInfoFields!==!0&&Ke.info&&Ke.info.fields&&(ke._hasTypeInInfoFields=kn(Ke.info.fields));const yn=_e(ke);W.after(yn),W.next().find(".versions li.version a").on("click",dt),k()("#sidenav li[data-group='"+ge+"'][data-name='"+he+"'][data-version='"+oe+"']").addClass("has-modifications"),W.remove()}m().highlightAll()}}function jt(J){J.preventDefault(),k()("article:visible .versions").each(function(){const Z=k()(this).parents("article").data("version");let ee=null;k()(this).find("li.version a").each(function(){k()(this).html()<Z&&!ee&&(ee=k()(this))}),ee&&ee.trigger("click")})}function At(J,W){J.id=J.article.group+"-"+J.article.name+"-"+J.article.version,J.id=J.id.replace(/\./g,"_"),W.header&&W.header.fields&&(J._hasTypeInHeaderFields=kn(W.header.fields)),W.parameter&&W.parameter.fields&&(J._hasTypeInParameterFields=kn(W.parameter.fields)),W.error&&W.error.fields&&(J._hasTypeInErrorFields=kn(W.error.fields)),W.success&&W.success.fields&&(J._hasTypeInSuccessFields=kn(W.success.fields)),W.info&&W.info.fields&&(J._hasTypeInInfoFields=kn(W.info.fields)),J.template=pe.template}function pa(J,W,Z){let ee={};k().each(Ye[J][W],function(ge,he){he.version===Z&&(ee=he)});const oe={article:ee,versions:Cn[J][W]};return At(oe,ee),re(oe)}function Gt(J,W,Z){const ee=k()("article[data-group='"+J+"'][data-name='"+W+"']:visible"),oe=pa(J,W,Z);ee.after(oe),ee.next().find(".versions li.version a").on("click",dt),k()("#sidenav li[data-group='"+J+"'][data-name='"+W+"'][data-version='"+Z+"']").removeClass("has-modifications"),ee.remove()}function x(J,W,Z){const ee=[];return W.forEach(function(oe){Z?J.forEach(function(ge){const he=ge.split(Z);(he[0]===oe||he[1]===oe)&&ee.push(ge)}):J.forEach(function(ge){ge===oe&&ee.push(oe)})}),J.forEach(function(oe){ee.indexOf(oe)===-1&&ee.push(oe)}),ee}function Y(J,W){const Z=[];return W.forEach(ee=>{Object.keys(J).forEach(oe=>{J[oe].replace(/_/g," ")===ee&&Z.push(oe)})}),Object.keys(J).forEach(ee=>{Z.indexOf(ee)===-1&&Z.push(ee)}),Z}Bt()}})()})();
