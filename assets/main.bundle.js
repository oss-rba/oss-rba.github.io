(()=>{var Zo={8080:()=>{+function(N){"use strict";var _=".dropdown-backdrop",s='[data-toggle="dropdown"]',g=function(o){N(o).on("click.bs.dropdown",this.toggle)};g.VERSION="3.4.1";function t(o){var r=o.attr("data-target");r||(r=o.attr("href"),r=r&&/#[A-Za-z]/.test(r)&&r.replace(/.*(?=#[^\s]*$)/,""));var l=r!=="#"?N(document).find(r):null;return l&&l.length?l:o.parent()}function n(o){o&&o.which===3||(N(_).remove(),N(s).each(function(){var r=N(this),l=t(r),h={relatedTarget:this};l.hasClass("open")&&(o&&o.type=="click"&&/input|textarea/i.test(o.target.tagName)&&N.contains(l[0],o.target)||(l.trigger(o=N.Event("hide.bs.dropdown",h)),!o.isDefaultPrevented()&&(r.attr("aria-expanded","false"),l.removeClass("open").trigger(N.Event("hidden.bs.dropdown",h)))))}))}g.prototype.toggle=function(o){var r=N(this);if(!r.is(".disabled, :disabled")){var l=t(r),h=l.hasClass("open");if(n(),!h){"ontouchstart"in document.documentElement&&!l.closest(".navbar-nav").length&&N(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(N(this)).on("click",n);var i={relatedTarget:this};if(l.trigger(o=N.Event("show.bs.dropdown",i)),o.isDefaultPrevented())return;r.trigger("focus").attr("aria-expanded","true"),l.toggleClass("open").trigger(N.Event("shown.bs.dropdown",i))}return!1}},g.prototype.keydown=function(o){if(!(!/(38|40|27|32)/.test(o.which)||/input|textarea/i.test(o.target.tagName))){var r=N(this);if(o.preventDefault(),o.stopPropagation(),!r.is(".disabled, :disabled")){var l=t(r),h=l.hasClass("open");if(!h&&o.which!=27||h&&o.which==27)return o.which==27&&l.find(s).trigger("focus"),r.trigger("click");var i=" li:not(.disabled):visible a",m=l.find(".dropdown-menu"+i);if(m.length){var f=m.index(o.target);o.which==38&&f>0&&f--,o.which==40&&f<m.length-1&&f++,~f||(f=0),m.eq(f).trigger("focus")}}}};function d(o){return this.each(function(){var r=N(this),l=r.data("bs.dropdown");l||r.data("bs.dropdown",l=new g(this)),typeof o=="string"&&l[o].call(r)})}var c=N.fn.dropdown;N.fn.dropdown=d,N.fn.dropdown.Constructor=g,N.fn.dropdown.noConflict=function(){return N.fn.dropdown=c,this},N(document).on("click.bs.dropdown.data-api",n).on("click.bs.dropdown.data-api",".dropdown form",function(o){o.stopPropagation()}).on("click.bs.dropdown.data-api",s,g.prototype.toggle).on("keydown.bs.dropdown.data-api",s,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery)},4430:()=>{+function(N){"use strict";var _=function(t,n){this.init("popover",t,n)};if(!N.fn.tooltip)throw new Error("Popover requires tooltip.js");_.VERSION="3.4.1",_.DEFAULTS=N.extend({},N.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),_.prototype=N.extend({},N.fn.tooltip.Constructor.prototype),_.prototype.constructor=_,_.prototype.getDefaults=function(){return _.DEFAULTS},_.prototype.setContent=function(){var t=this.tip(),n=this.getTitle(),d=this.getContent();if(this.options.html){var c=typeof d;this.options.sanitize&&(n=this.sanitizeHtml(n),c==="string"&&(d=this.sanitizeHtml(d))),t.find(".popover-title").html(n),t.find(".popover-content").children().detach().end()[c==="string"?"html":"append"](d)}else t.find(".popover-title").text(n),t.find(".popover-content").children().detach().end().text(d);t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},_.prototype.hasContent=function(){return this.getTitle()||this.getContent()},_.prototype.getContent=function(){var t=this.$element,n=this.options;return t.attr("data-content")||(typeof n.content=="function"?n.content.call(t[0]):n.content)},_.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};function s(t){return this.each(function(){var n=N(this),d=n.data("bs.popover"),c=typeof t=="object"&&t;!d&&/destroy|hide/.test(t)||(d||n.data("bs.popover",d=new _(this,c)),typeof t=="string"&&d[t]())})}var g=N.fn.popover;N.fn.popover=s,N.fn.popover.Constructor=_,N.fn.popover.noConflict=function(){return N.fn.popover=g,this}}(jQuery)},7142:()=>{+function(N){"use strict";function _(t,n){this.$body=N(document.body),this.$scrollElement=N(t).is(document.body)?N(window):N(t),this.options=N.extend({},_.DEFAULTS,n),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",N.proxy(this.process,this)),this.refresh(),this.process()}_.VERSION="3.4.1",_.DEFAULTS={offset:10},_.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},_.prototype.refresh=function(){var t=this,n="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),N.isWindow(this.$scrollElement[0])||(n="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var c=N(this),o=c.data("target")||c.attr("href"),r=/^#./.test(o)&&N(o);return r&&r.length&&r.is(":visible")&&[[r[n]().top+d,o]]||null}).sort(function(c,o){return c[0]-o[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},_.prototype.process=function(){var t=this.$scrollElement.scrollTop()+this.options.offset,n=this.getScrollHeight(),d=this.options.offset+n-this.$scrollElement.height(),c=this.offsets,o=this.targets,r=this.activeTarget,l;if(this.scrollHeight!=n&&this.refresh(),t>=d)return r!=(l=o[o.length-1])&&this.activate(l);if(r&&t<c[0])return this.activeTarget=null,this.clear();for(l=c.length;l--;)r!=o[l]&&t>=c[l]&&(c[l+1]===void 0||t<c[l+1])&&this.activate(o[l])},_.prototype.activate=function(t){this.activeTarget=t,this.clear();var n=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',d=N(n).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},_.prototype.clear=function(){N(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};function s(t){return this.each(function(){var n=N(this),d=n.data("bs.scrollspy"),c=typeof t=="object"&&t;d||n.data("bs.scrollspy",d=new _(this,c)),typeof t=="string"&&d[t]()})}var g=N.fn.scrollspy;N.fn.scrollspy=s,N.fn.scrollspy.Constructor=_,N.fn.scrollspy.noConflict=function(){return N.fn.scrollspy=g,this},N(window).on("load.bs.scrollspy.data-api",function(){N('[data-spy="scroll"]').each(function(){var t=N(this);s.call(t,t.data())})})}(jQuery)},2276:()=>{+function(N){"use strict";var _=function(n){this.element=N(n)};_.VERSION="3.4.1",_.TRANSITION_DURATION=150,_.prototype.show=function(){var n=this.element,d=n.closest("ul:not(.dropdown-menu)"),c=n.data("target");if(c||(c=n.attr("href"),c=c&&c.replace(/.*(?=#[^\s]*$)/,"")),!n.parent("li").hasClass("active")){var o=d.find(".active:last a"),r=N.Event("hide.bs.tab",{relatedTarget:n[0]}),l=N.Event("show.bs.tab",{relatedTarget:o[0]});if(o.trigger(r),n.trigger(l),!(l.isDefaultPrevented()||r.isDefaultPrevented())){var h=N(document).find(c);this.activate(n.closest("li"),d),this.activate(h,h.parent(),function(){o.trigger({type:"hidden.bs.tab",relatedTarget:n[0]}),n.trigger({type:"shown.bs.tab",relatedTarget:o[0]})})}}},_.prototype.activate=function(n,d,c){var o=d.find("> .active"),r=c&&N.support.transition&&(o.length&&o.hasClass("fade")||!!d.find("> .fade").length);function l(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),n.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),r?(n[0].offsetWidth,n.addClass("in")):n.removeClass("fade"),n.parent(".dropdown-menu").length&&n.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),c&&c()}o.length&&r?o.one("bsTransitionEnd",l).emulateTransitionEnd(_.TRANSITION_DURATION):l(),o.removeClass("in")};function s(n){return this.each(function(){var d=N(this),c=d.data("bs.tab");c||d.data("bs.tab",c=new _(this)),typeof n=="string"&&c[n]()})}var g=N.fn.tab;N.fn.tab=s,N.fn.tab.Constructor=_,N.fn.tab.noConflict=function(){return N.fn.tab=g,this};var t=function(n){n.preventDefault(),s.call(N(this),"show")};N(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',t).on("click.bs.tab.data-api",'[data-toggle="pill"]',t)}(jQuery)},2995:()=>{+function(N){"use strict";var _=["sanitize","whiteList","sanitizeFn"],s=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],g=/^aria-[\w-]*$/i,t={"*":["class","dir","id","lang","role",g],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},n=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,d=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function c(i,m){var f=i.nodeName.toLowerCase();if(N.inArray(f,m)!==-1)return N.inArray(f,s)!==-1?Boolean(i.nodeValue.match(n)||i.nodeValue.match(d)):!0;for(var u=N(m).filter(function(P,b){return b instanceof RegExp}),k=0,y=u.length;k<y;k++)if(f.match(u[k]))return!0;return!1}function o(i,m,f){if(i.length===0)return i;if(f&&typeof f=="function")return f(i);if(!document.implementation||!document.implementation.createHTMLDocument)return i;var u=document.implementation.createHTMLDocument("sanitization");u.body.innerHTML=i;for(var k=N.map(m,function(D,S){return S}),y=N(u.body).find("*"),P=0,b=y.length;P<b;P++){var A=y[P],v=A.nodeName.toLowerCase();if(N.inArray(v,k)===-1){A.parentNode.removeChild(A);continue}for(var B=N.map(A.attributes,function(D){return D}),E=[].concat(m["*"]||[],m[v]||[]),K=0,w=B.length;K<w;K++)c(B[K],E)||A.removeAttribute(B[K].nodeName)}return u.body.innerHTML}var r=function(i,m){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",i,m)};r.VERSION="3.4.1",r.TRANSITION_DURATION=150,r.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0},sanitize:!0,sanitizeFn:null,whiteList:t},r.prototype.init=function(i,m,f){if(this.enabled=!0,this.type=i,this.$element=N(m),this.options=this.getOptions(f),this.$viewport=this.options.viewport&&N(document).find(N.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var u=this.options.trigger.split(" "),k=u.length;k--;){var y=u[k];if(y=="click")this.$element.on("click."+this.type,this.options.selector,N.proxy(this.toggle,this));else if(y!="manual"){var P=y=="hover"?"mouseenter":"focusin",b=y=="hover"?"mouseleave":"focusout";this.$element.on(P+"."+this.type,this.options.selector,N.proxy(this.enter,this)),this.$element.on(b+"."+this.type,this.options.selector,N.proxy(this.leave,this))}}this.options.selector?this._options=N.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},r.prototype.getDefaults=function(){return r.DEFAULTS},r.prototype.getOptions=function(i){var m=this.$element.data();for(var f in m)m.hasOwnProperty(f)&&N.inArray(f,_)!==-1&&delete m[f];return i=N.extend({},this.getDefaults(),m,i),i.delay&&typeof i.delay=="number"&&(i.delay={show:i.delay,hide:i.delay}),i.sanitize&&(i.template=o(i.template,i.whiteList,i.sanitizeFn)),i},r.prototype.getDelegateOptions=function(){var i={},m=this.getDefaults();return this._options&&N.each(this._options,function(f,u){m[f]!=u&&(i[f]=u)}),i},r.prototype.enter=function(i){var m=i instanceof this.constructor?i:N(i.currentTarget).data("bs."+this.type);if(m||(m=new this.constructor(i.currentTarget,this.getDelegateOptions()),N(i.currentTarget).data("bs."+this.type,m)),i instanceof N.Event&&(m.inState[i.type=="focusin"?"focus":"hover"]=!0),m.tip().hasClass("in")||m.hoverState=="in"){m.hoverState="in";return}if(clearTimeout(m.timeout),m.hoverState="in",!m.options.delay||!m.options.delay.show)return m.show();m.timeout=setTimeout(function(){m.hoverState=="in"&&m.show()},m.options.delay.show)},r.prototype.isInStateTrue=function(){for(var i in this.inState)if(this.inState[i])return!0;return!1},r.prototype.leave=function(i){var m=i instanceof this.constructor?i:N(i.currentTarget).data("bs."+this.type);if(m||(m=new this.constructor(i.currentTarget,this.getDelegateOptions()),N(i.currentTarget).data("bs."+this.type,m)),i instanceof N.Event&&(m.inState[i.type=="focusout"?"focus":"hover"]=!1),!m.isInStateTrue()){if(clearTimeout(m.timeout),m.hoverState="out",!m.options.delay||!m.options.delay.hide)return m.hide();m.timeout=setTimeout(function(){m.hoverState=="out"&&m.hide()},m.options.delay.hide)}},r.prototype.show=function(){var i=N.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(i);var m=N.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(i.isDefaultPrevented()||!m)return;var f=this,u=this.tip(),k=this.getUID(this.type);this.setContent(),u.attr("id",k),this.$element.attr("aria-describedby",k),this.options.animation&&u.addClass("fade");var y=typeof this.options.placement=="function"?this.options.placement.call(this,u[0],this.$element[0]):this.options.placement,P=/\s?auto?\s?/i,b=P.test(y);b&&(y=y.replace(P,"")||"top"),u.detach().css({top:0,left:0,display:"block"}).addClass(y).data("bs."+this.type,this),this.options.container?u.appendTo(N(document).find(this.options.container)):u.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var A=this.getPosition(),v=u[0].offsetWidth,B=u[0].offsetHeight;if(b){var E=y,K=this.getPosition(this.$viewport);y=y=="bottom"&&A.bottom+B>K.bottom?"top":y=="top"&&A.top-B<K.top?"bottom":y=="right"&&A.right+v>K.width?"left":y=="left"&&A.left-v<K.left?"right":y,u.removeClass(E).addClass(y)}var w=this.getCalculatedOffset(y,A,v,B);this.applyPlacement(w,y);var D=function(){var S=f.hoverState;f.$element.trigger("shown.bs."+f.type),f.hoverState=null,S=="out"&&f.leave(f)};N.support.transition&&this.$tip.hasClass("fade")?u.one("bsTransitionEnd",D).emulateTransitionEnd(r.TRANSITION_DURATION):D()}},r.prototype.applyPlacement=function(i,m){var f=this.tip(),u=f[0].offsetWidth,k=f[0].offsetHeight,y=parseInt(f.css("margin-top"),10),P=parseInt(f.css("margin-left"),10);isNaN(y)&&(y=0),isNaN(P)&&(P=0),i.top+=y,i.left+=P,N.offset.setOffset(f[0],N.extend({using:function(w){f.css({top:Math.round(w.top),left:Math.round(w.left)})}},i),0),f.addClass("in");var b=f[0].offsetWidth,A=f[0].offsetHeight;m=="top"&&A!=k&&(i.top=i.top+k-A);var v=this.getViewportAdjustedDelta(m,i,b,A);v.left?i.left+=v.left:i.top+=v.top;var B=/top|bottom/.test(m),E=B?v.left*2-u+b:v.top*2-k+A,K=B?"offsetWidth":"offsetHeight";f.offset(i),this.replaceArrow(E,f[0][K],B)},r.prototype.replaceArrow=function(i,m,f){this.arrow().css(f?"left":"top",50*(1-i/m)+"%").css(f?"top":"left","")},r.prototype.setContent=function(){var i=this.tip(),m=this.getTitle();this.options.html?(this.options.sanitize&&(m=o(m,this.options.whiteList,this.options.sanitizeFn)),i.find(".tooltip-inner").html(m)):i.find(".tooltip-inner").text(m),i.removeClass("fade in top bottom left right")},r.prototype.hide=function(i){var m=this,f=N(this.$tip),u=N.Event("hide.bs."+this.type);function k(){m.hoverState!="in"&&f.detach(),m.$element&&m.$element.removeAttr("aria-describedby").trigger("hidden.bs."+m.type),i&&i()}if(this.$element.trigger(u),!u.isDefaultPrevented())return f.removeClass("in"),N.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",k).emulateTransitionEnd(r.TRANSITION_DURATION):k(),this.hoverState=null,this},r.prototype.fixTitle=function(){var i=this.$element;(i.attr("title")||typeof i.attr("data-original-title")!="string")&&i.attr("data-original-title",i.attr("title")||"").attr("title","")},r.prototype.hasContent=function(){return this.getTitle()},r.prototype.getPosition=function(i){i=i||this.$element;var m=i[0],f=m.tagName=="BODY",u=m.getBoundingClientRect();u.width==null&&(u=N.extend({},u,{width:u.right-u.left,height:u.bottom-u.top}));var k=window.SVGElement&&m instanceof window.SVGElement,y=f?{top:0,left:0}:k?null:i.offset(),P={scroll:f?document.documentElement.scrollTop||document.body.scrollTop:i.scrollTop()},b=f?{width:N(window).width(),height:N(window).height()}:null;return N.extend({},u,P,b,y)},r.prototype.getCalculatedOffset=function(i,m,f,u){return i=="bottom"?{top:m.top+m.height,left:m.left+m.width/2-f/2}:i=="top"?{top:m.top-u,left:m.left+m.width/2-f/2}:i=="left"?{top:m.top+m.height/2-u/2,left:m.left-f}:{top:m.top+m.height/2-u/2,left:m.left+m.width}},r.prototype.getViewportAdjustedDelta=function(i,m,f,u){var k={top:0,left:0};if(!this.$viewport)return k;var y=this.options.viewport&&this.options.viewport.padding||0,P=this.getPosition(this.$viewport);if(/right|left/.test(i)){var b=m.top-y-P.scroll,A=m.top+y-P.scroll+u;b<P.top?k.top=P.top-b:A>P.top+P.height&&(k.top=P.top+P.height-A)}else{var v=m.left-y,B=m.left+y+f;v<P.left?k.left=P.left-v:B>P.right&&(k.left=P.left+P.width-B)}return k},r.prototype.getTitle=function(){var i,m=this.$element,f=this.options;return i=m.attr("data-original-title")||(typeof f.title=="function"?f.title.call(m[0]):f.title),i},r.prototype.getUID=function(i){do i+=~~(Math.random()*1e6);while(document.getElementById(i));return i},r.prototype.tip=function(){if(!this.$tip&&(this.$tip=N(this.options.template),this.$tip.length!=1))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},r.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},r.prototype.enable=function(){this.enabled=!0},r.prototype.disable=function(){this.enabled=!1},r.prototype.toggleEnabled=function(){this.enabled=!this.enabled},r.prototype.toggle=function(i){var m=this;i&&(m=N(i.currentTarget).data("bs."+this.type),m||(m=new this.constructor(i.currentTarget,this.getDelegateOptions()),N(i.currentTarget).data("bs."+this.type,m))),i?(m.inState.click=!m.inState.click,m.isInStateTrue()?m.enter(m):m.leave(m)):m.tip().hasClass("in")?m.leave(m):m.enter(m)},r.prototype.destroy=function(){var i=this;clearTimeout(this.timeout),this.hide(function(){i.$element.off("."+i.type).removeData("bs."+i.type),i.$tip&&i.$tip.detach(),i.$tip=null,i.$arrow=null,i.$viewport=null,i.$element=null})},r.prototype.sanitizeHtml=function(i){return o(i,this.options.whiteList,this.options.sanitizeFn)};function l(i){return this.each(function(){var m=N(this),f=m.data("bs.tooltip"),u=typeof i=="object"&&i;!f&&/destroy|hide/.test(i)||(f||m.data("bs.tooltip",f=new r(this,u)),typeof i=="string"&&f[i]())})}var h=N.fn.tooltip;N.fn.tooltip=l,N.fn.tooltip.Constructor=r,N.fn.tooltip.noConflict=function(){return N.fn.tooltip=h,this}}(jQuery)},4431:N=>{var _=function(){this.Diff_Timeout=1,this.Diff_EditCost=4,this.Match_Threshold=.5,this.Match_Distance=1e3,this.Patch_DeleteThreshold=.5,this.Patch_Margin=4,this.Match_MaxBits=32},s=-1,g=1,t=0;_.Diff=function(n,d){return[n,d]},_.prototype.diff_main=function(n,d,c,o){typeof o=="undefined"&&(this.Diff_Timeout<=0?o=Number.MAX_VALUE:o=new Date().getTime()+this.Diff_Timeout*1e3);var r=o;if(n==null||d==null)throw new Error("Null input. (diff_main)");if(n==d)return n?[new _.Diff(t,n)]:[];typeof c=="undefined"&&(c=!0);var l=c,h=this.diff_commonPrefix(n,d),i=n.substring(0,h);n=n.substring(h),d=d.substring(h),h=this.diff_commonSuffix(n,d);var m=n.substring(n.length-h);n=n.substring(0,n.length-h),d=d.substring(0,d.length-h);var f=this.diff_compute_(n,d,l,r);return i&&f.unshift(new _.Diff(t,i)),m&&f.push(new _.Diff(t,m)),this.diff_cleanupMerge(f),f},_.prototype.diff_compute_=function(n,d,c,o){var r;if(!n)return[new _.Diff(g,d)];if(!d)return[new _.Diff(s,n)];var l=n.length>d.length?n:d,h=n.length>d.length?d:n,i=l.indexOf(h);if(i!=-1)return r=[new _.Diff(g,l.substring(0,i)),new _.Diff(t,h),new _.Diff(g,l.substring(i+h.length))],n.length>d.length&&(r[0][0]=r[2][0]=s),r;if(h.length==1)return[new _.Diff(s,n),new _.Diff(g,d)];var m=this.diff_halfMatch_(n,d);if(m){var f=m[0],u=m[1],k=m[2],y=m[3],P=m[4],b=this.diff_main(f,k,c,o),A=this.diff_main(u,y,c,o);return b.concat([new _.Diff(t,P)],A)}return c&&n.length>100&&d.length>100?this.diff_lineMode_(n,d,o):this.diff_bisect_(n,d,o)},_.prototype.diff_lineMode_=function(n,d,c){var o=this.diff_linesToChars_(n,d);n=o.chars1,d=o.chars2;var r=o.lineArray,l=this.diff_main(n,d,!1,c);this.diff_charsToLines_(l,r),this.diff_cleanupSemantic(l),l.push(new _.Diff(t,""));for(var h=0,i=0,m=0,f="",u="";h<l.length;){switch(l[h][0]){case g:m++,u+=l[h][1];break;case s:i++,f+=l[h][1];break;case t:if(i>=1&&m>=1){l.splice(h-i-m,i+m),h=h-i-m;for(var k=this.diff_main(f,u,!1,c),y=k.length-1;y>=0;y--)l.splice(h,0,k[y]);h=h+k.length}m=0,i=0,f="",u="";break}h++}return l.pop(),l},_.prototype.diff_bisect_=function(n,d,c){for(var o=n.length,r=d.length,l=Math.ceil((o+r)/2),h=l,i=2*l,m=new Array(i),f=new Array(i),u=0;u<i;u++)m[u]=-1,f[u]=-1;m[h+1]=0,f[h+1]=0;for(var k=o-r,y=k%2!=0,P=0,b=0,A=0,v=0,B=0;B<l&&!(new Date().getTime()>c);B++){for(var E=-B+P;E<=B-b;E+=2){var K=h+E,w;E==-B||E!=B&&m[K-1]<m[K+1]?w=m[K+1]:w=m[K-1]+1;for(var D=w-E;w<o&&D<r&&n.charAt(w)==d.charAt(D);)w++,D++;if(m[K]=w,w>o)b+=2;else if(D>r)P+=2;else if(y){var S=h+k-E;if(S>=0&&S<i&&f[S]!=-1){var L=o-f[S];if(w>=L)return this.diff_bisectSplit_(n,d,w,D,c)}}}for(var j=-B+A;j<=B-v;j+=2){var S=h+j,L;j==-B||j!=B&&f[S-1]<f[S+1]?L=f[S+1]:L=f[S-1]+1;for(var U=L-j;L<o&&U<r&&n.charAt(o-L-1)==d.charAt(r-U-1);)L++,U++;if(f[S]=L,L>o)v+=2;else if(U>r)A+=2;else if(!y){var K=h+k-j;if(K>=0&&K<i&&m[K]!=-1){var w=m[K],D=h+w-K;if(L=o-L,w>=L)return this.diff_bisectSplit_(n,d,w,D,c)}}}}return[new _.Diff(s,n),new _.Diff(g,d)]},_.prototype.diff_bisectSplit_=function(n,d,c,o,r){var l=n.substring(0,c),h=d.substring(0,o),i=n.substring(c),m=d.substring(o),f=this.diff_main(l,h,!1,r),u=this.diff_main(i,m,!1,r);return f.concat(u)},_.prototype.diff_linesToChars_=function(n,d){var c=[],o={};c[0]="";function r(m){for(var f="",u=0,k=-1,y=c.length;k<m.length-1;){k=m.indexOf(`
`,u),k==-1&&(k=m.length-1);var P=m.substring(u,k+1);(o.hasOwnProperty?o.hasOwnProperty(P):o[P]!==void 0)?f+=String.fromCharCode(o[P]):(y==l&&(P=m.substring(u),k=m.length),f+=String.fromCharCode(y),o[P]=y,c[y++]=P),u=k+1}return f}var l=4e4,h=r(n);l=65535;var i=r(d);return{chars1:h,chars2:i,lineArray:c}},_.prototype.diff_charsToLines_=function(n,d){for(var c=0;c<n.length;c++){for(var o=n[c][1],r=[],l=0;l<o.length;l++)r[l]=d[o.charCodeAt(l)];n[c][1]=r.join("")}},_.prototype.diff_commonPrefix=function(n,d){if(!n||!d||n.charAt(0)!=d.charAt(0))return 0;for(var c=0,o=Math.min(n.length,d.length),r=o,l=0;c<r;)n.substring(l,r)==d.substring(l,r)?(c=r,l=c):o=r,r=Math.floor((o-c)/2+c);return r},_.prototype.diff_commonSuffix=function(n,d){if(!n||!d||n.charAt(n.length-1)!=d.charAt(d.length-1))return 0;for(var c=0,o=Math.min(n.length,d.length),r=o,l=0;c<r;)n.substring(n.length-r,n.length-l)==d.substring(d.length-r,d.length-l)?(c=r,l=c):o=r,r=Math.floor((o-c)/2+c);return r},_.prototype.diff_commonOverlap_=function(n,d){var c=n.length,o=d.length;if(c==0||o==0)return 0;c>o?n=n.substring(c-o):c<o&&(d=d.substring(0,c));var r=Math.min(c,o);if(n==d)return r;for(var l=0,h=1;;){var i=n.substring(r-h),m=d.indexOf(i);if(m==-1)return l;h+=m,(m==0||n.substring(r-h)==d.substring(0,h))&&(l=h,h++)}},_.prototype.diff_halfMatch_=function(n,d){if(this.Diff_Timeout<=0)return null;var c=n.length>d.length?n:d,o=n.length>d.length?d:n;if(c.length<4||o.length*2<c.length)return null;var r=this;function l(b,A,v){for(var B=b.substring(v,v+Math.floor(b.length/4)),E=-1,K="",w,D,S,L;(E=A.indexOf(B,E+1))!=-1;){var j=r.diff_commonPrefix(b.substring(v),A.substring(E)),U=r.diff_commonSuffix(b.substring(0,v),A.substring(0,E));K.length<U+j&&(K=A.substring(E-U,E)+A.substring(E,E+j),w=b.substring(0,v-U),D=b.substring(v+j),S=A.substring(0,E-U),L=A.substring(E+j))}return K.length*2>=b.length?[w,D,S,L,K]:null}var h=l(c,o,Math.ceil(c.length/4)),i=l(c,o,Math.ceil(c.length/2)),m;if(!h&&!i)return null;i?h?m=h[4].length>i[4].length?h:i:m=i:m=h;var f,u,k,y;n.length>d.length?(f=m[0],u=m[1],k=m[2],y=m[3]):(k=m[0],y=m[1],f=m[2],u=m[3]);var P=m[4];return[f,u,k,y,P]},_.prototype.diff_cleanupSemantic=function(n){for(var d=!1,c=[],o=0,r=null,l=0,h=0,i=0,m=0,f=0;l<n.length;)n[l][0]==t?(c[o++]=l,h=m,i=f,m=0,f=0,r=n[l][1]):(n[l][0]==g?m+=n[l][1].length:f+=n[l][1].length,r&&r.length<=Math.max(h,i)&&r.length<=Math.max(m,f)&&(n.splice(c[o-1],0,new _.Diff(s,r)),n[c[o-1]+1][0]=g,o--,o--,l=o>0?c[o-1]:-1,h=0,i=0,m=0,f=0,r=null,d=!0)),l++;for(d&&this.diff_cleanupMerge(n),this.diff_cleanupSemanticLossless(n),l=1;l<n.length;){if(n[l-1][0]==s&&n[l][0]==g){var u=n[l-1][1],k=n[l][1],y=this.diff_commonOverlap_(u,k),P=this.diff_commonOverlap_(k,u);y>=P?(y>=u.length/2||y>=k.length/2)&&(n.splice(l,0,new _.Diff(t,k.substring(0,y))),n[l-1][1]=u.substring(0,u.length-y),n[l+1][1]=k.substring(y),l++):(P>=u.length/2||P>=k.length/2)&&(n.splice(l,0,new _.Diff(t,u.substring(0,P))),n[l-1][0]=g,n[l-1][1]=k.substring(0,k.length-P),n[l+1][0]=s,n[l+1][1]=u.substring(P),l++),l++}l++}},_.prototype.diff_cleanupSemanticLossless=function(n){function d(P,b){if(!P||!b)return 6;var A=P.charAt(P.length-1),v=b.charAt(0),B=A.match(_.nonAlphaNumericRegex_),E=v.match(_.nonAlphaNumericRegex_),K=B&&A.match(_.whitespaceRegex_),w=E&&v.match(_.whitespaceRegex_),D=K&&A.match(_.linebreakRegex_),S=w&&v.match(_.linebreakRegex_),L=D&&P.match(_.blanklineEndRegex_),j=S&&b.match(_.blanklineStartRegex_);return L||j?5:D||S?4:B&&!K&&w?3:K||w?2:B||E?1:0}for(var c=1;c<n.length-1;){if(n[c-1][0]==t&&n[c+1][0]==t){var o=n[c-1][1],r=n[c][1],l=n[c+1][1],h=this.diff_commonSuffix(o,r);if(h){var i=r.substring(r.length-h);o=o.substring(0,o.length-h),r=i+r.substring(0,r.length-h),l=i+l}for(var m=o,f=r,u=l,k=d(o,r)+d(r,l);r.charAt(0)===l.charAt(0);){o+=r.charAt(0),r=r.substring(1)+l.charAt(0),l=l.substring(1);var y=d(o,r)+d(r,l);y>=k&&(k=y,m=o,f=r,u=l)}n[c-1][1]!=m&&(m?n[c-1][1]=m:(n.splice(c-1,1),c--),n[c][1]=f,u?n[c+1][1]=u:(n.splice(c+1,1),c--))}c++}},_.nonAlphaNumericRegex_=/[^a-zA-Z0-9]/,_.whitespaceRegex_=/\s/,_.linebreakRegex_=/[\r\n]/,_.blanklineEndRegex_=/\n\r?\n$/,_.blanklineStartRegex_=/^\r?\n\r?\n/,_.prototype.diff_cleanupEfficiency=function(n){for(var d=!1,c=[],o=0,r=null,l=0,h=!1,i=!1,m=!1,f=!1;l<n.length;)n[l][0]==t?(n[l][1].length<this.Diff_EditCost&&(m||f)?(c[o++]=l,h=m,i=f,r=n[l][1]):(o=0,r=null),m=f=!1):(n[l][0]==s?f=!0:m=!0,r&&(h&&i&&m&&f||r.length<this.Diff_EditCost/2&&h+i+m+f==3)&&(n.splice(c[o-1],0,new _.Diff(s,r)),n[c[o-1]+1][0]=g,o--,r=null,h&&i?(m=f=!0,o=0):(o--,l=o>0?c[o-1]:-1,m=f=!1),d=!0)),l++;d&&this.diff_cleanupMerge(n)},_.prototype.diff_cleanupMerge=function(n){n.push(new _.Diff(t,""));for(var d=0,c=0,o=0,r="",l="",h;d<n.length;)switch(n[d][0]){case g:o++,l+=n[d][1],d++;break;case s:c++,r+=n[d][1],d++;break;case t:c+o>1?(c!==0&&o!==0&&(h=this.diff_commonPrefix(l,r),h!==0&&(d-c-o>0&&n[d-c-o-1][0]==t?n[d-c-o-1][1]+=l.substring(0,h):(n.splice(0,0,new _.Diff(t,l.substring(0,h))),d++),l=l.substring(h),r=r.substring(h)),h=this.diff_commonSuffix(l,r),h!==0&&(n[d][1]=l.substring(l.length-h)+n[d][1],l=l.substring(0,l.length-h),r=r.substring(0,r.length-h))),d-=c+o,n.splice(d,c+o),r.length&&(n.splice(d,0,new _.Diff(s,r)),d++),l.length&&(n.splice(d,0,new _.Diff(g,l)),d++),d++):d!==0&&n[d-1][0]==t?(n[d-1][1]+=n[d][1],n.splice(d,1)):d++,o=0,c=0,r="",l="";break}n[n.length-1][1]===""&&n.pop();var i=!1;for(d=1;d<n.length-1;)n[d-1][0]==t&&n[d+1][0]==t&&(n[d][1].substring(n[d][1].length-n[d-1][1].length)==n[d-1][1]?(n[d][1]=n[d-1][1]+n[d][1].substring(0,n[d][1].length-n[d-1][1].length),n[d+1][1]=n[d-1][1]+n[d+1][1],n.splice(d-1,1),i=!0):n[d][1].substring(0,n[d+1][1].length)==n[d+1][1]&&(n[d-1][1]+=n[d+1][1],n[d][1]=n[d][1].substring(n[d+1][1].length)+n[d+1][1],n.splice(d+1,1),i=!0)),d++;i&&this.diff_cleanupMerge(n)},_.prototype.diff_xIndex=function(n,d){var c=0,o=0,r=0,l=0,h;for(h=0;h<n.length&&(n[h][0]!==g&&(c+=n[h][1].length),n[h][0]!==s&&(o+=n[h][1].length),!(c>d));h++)r=c,l=o;return n.length!=h&&n[h][0]===s?l:l+(d-r)},_.prototype.diff_prettyHtml=function(n){for(var d=[],c=/&/g,o=/</g,r=/>/g,l=/\n/g,h=0;h<n.length;h++){var i=n[h][0],m=n[h][1],f=m.replace(c,"&amp;").replace(o,"&lt;").replace(r,"&gt;").replace(l,"&para;<br>");switch(i){case g:d[h]='<ins style="background:#e6ffe6;">'+f+"</ins>";break;case s:d[h]='<del style="background:#ffe6e6;">'+f+"</del>";break;case t:d[h]="<span>"+f+"</span>";break}}return d.join("")},_.prototype.diff_text1=function(n){for(var d=[],c=0;c<n.length;c++)n[c][0]!==g&&(d[c]=n[c][1]);return d.join("")},_.prototype.diff_text2=function(n){for(var d=[],c=0;c<n.length;c++)n[c][0]!==s&&(d[c]=n[c][1]);return d.join("")},_.prototype.diff_levenshtein=function(n){for(var d=0,c=0,o=0,r=0;r<n.length;r++){var l=n[r][0],h=n[r][1];switch(l){case g:c+=h.length;break;case s:o+=h.length;break;case t:d+=Math.max(c,o),c=0,o=0;break}}return d+=Math.max(c,o),d},_.prototype.diff_toDelta=function(n){for(var d=[],c=0;c<n.length;c++)switch(n[c][0]){case g:d[c]="+"+encodeURI(n[c][1]);break;case s:d[c]="-"+n[c][1].length;break;case t:d[c]="="+n[c][1].length;break}return d.join("	").replace(/%20/g," ")},_.prototype.diff_fromDelta=function(n,d){for(var c=[],o=0,r=0,l=d.split(/\t/g),h=0;h<l.length;h++){var i=l[h].substring(1);switch(l[h].charAt(0)){case"+":try{c[o++]=new _.Diff(g,decodeURI(i))}catch(u){throw new Error("Illegal escape in diff_fromDelta: "+i)}break;case"-":case"=":var m=parseInt(i,10);if(isNaN(m)||m<0)throw new Error("Invalid number in diff_fromDelta: "+i);var f=n.substring(r,r+=m);l[h].charAt(0)=="="?c[o++]=new _.Diff(t,f):c[o++]=new _.Diff(s,f);break;default:if(l[h])throw new Error("Invalid diff operation in diff_fromDelta: "+l[h])}}if(r!=n.length)throw new Error("Delta length ("+r+") does not equal source text length ("+n.length+").");return c},_.prototype.match_main=function(n,d,c){if(n==null||d==null||c==null)throw new Error("Null input. (match_main)");return c=Math.max(0,Math.min(c,n.length)),n==d?0:n.length?n.substring(c,c+d.length)==d?c:this.match_bitap_(n,d,c):-1},_.prototype.match_bitap_=function(n,d,c){if(d.length>this.Match_MaxBits)throw new Error("Pattern too long for this browser.");var o=this.match_alphabet_(d),r=this;function l(w,D){var S=w/d.length,L=Math.abs(c-D);return r.Match_Distance?S+L/r.Match_Distance:L?1:S}var h=this.Match_Threshold,i=n.indexOf(d,c);i!=-1&&(h=Math.min(l(0,i),h),i=n.lastIndexOf(d,c+d.length),i!=-1&&(h=Math.min(l(0,i),h)));var m=1<<d.length-1;i=-1;for(var f,u,k=d.length+n.length,y,P=0;P<d.length;P++){for(f=0,u=k;f<u;)l(P,c+u)<=h?f=u:k=u,u=Math.floor((k-f)/2+f);k=u;var b=Math.max(1,c-u+1),A=Math.min(c+u,n.length)+d.length,v=Array(A+2);v[A+1]=(1<<P)-1;for(var B=A;B>=b;B--){var E=o[n.charAt(B-1)];if(P===0?v[B]=(v[B+1]<<1|1)&E:v[B]=(v[B+1]<<1|1)&E|((y[B+1]|y[B])<<1|1)|y[B+1],v[B]&m){var K=l(P,B-1);if(K<=h)if(h=K,i=B-1,i>c)b=Math.max(1,2*c-i);else break}}if(l(P+1,c)>h)break;y=v}return i},_.prototype.match_alphabet_=function(n){for(var d={},c=0;c<n.length;c++)d[n.charAt(c)]=0;for(var c=0;c<n.length;c++)d[n.charAt(c)]|=1<<n.length-c-1;return d},_.prototype.patch_addContext_=function(n,d){if(d.length!=0){if(n.start2===null)throw Error("patch not initialized");for(var c=d.substring(n.start2,n.start2+n.length1),o=0;d.indexOf(c)!=d.lastIndexOf(c)&&c.length<this.Match_MaxBits-this.Patch_Margin-this.Patch_Margin;)o+=this.Patch_Margin,c=d.substring(n.start2-o,n.start2+n.length1+o);o+=this.Patch_Margin;var r=d.substring(n.start2-o,n.start2);r&&n.diffs.unshift(new _.Diff(t,r));var l=d.substring(n.start2+n.length1,n.start2+n.length1+o);l&&n.diffs.push(new _.Diff(t,l)),n.start1-=r.length,n.start2-=r.length,n.length1+=r.length+l.length,n.length2+=r.length+l.length}},_.prototype.patch_make=function(n,d,c){var o,r;if(typeof n=="string"&&typeof d=="string"&&typeof c=="undefined")o=n,r=this.diff_main(o,d,!0),r.length>2&&(this.diff_cleanupSemantic(r),this.diff_cleanupEfficiency(r));else if(n&&typeof n=="object"&&typeof d=="undefined"&&typeof c=="undefined")r=n,o=this.diff_text1(r);else if(typeof n=="string"&&d&&typeof d=="object"&&typeof c=="undefined")o=n,r=d;else if(typeof n=="string"&&typeof d=="string"&&c&&typeof c=="object")o=n,r=c;else throw new Error("Unknown call format to patch_make.");if(r.length===0)return[];for(var l=[],h=new _.patch_obj,i=0,m=0,f=0,u=o,k=o,y=0;y<r.length;y++){var P=r[y][0],b=r[y][1];switch(!i&&P!==t&&(h.start1=m,h.start2=f),P){case g:h.diffs[i++]=r[y],h.length2+=b.length,k=k.substring(0,f)+b+k.substring(f);break;case s:h.length1+=b.length,h.diffs[i++]=r[y],k=k.substring(0,f)+k.substring(f+b.length);break;case t:b.length<=2*this.Patch_Margin&&i&&r.length!=y+1?(h.diffs[i++]=r[y],h.length1+=b.length,h.length2+=b.length):b.length>=2*this.Patch_Margin&&i&&(this.patch_addContext_(h,u),l.push(h),h=new _.patch_obj,i=0,u=k,m=f);break}P!==g&&(m+=b.length),P!==s&&(f+=b.length)}return i&&(this.patch_addContext_(h,u),l.push(h)),l},_.prototype.patch_deepCopy=function(n){for(var d=[],c=0;c<n.length;c++){var o=n[c],r=new _.patch_obj;r.diffs=[];for(var l=0;l<o.diffs.length;l++)r.diffs[l]=new _.Diff(o.diffs[l][0],o.diffs[l][1]);r.start1=o.start1,r.start2=o.start2,r.length1=o.length1,r.length2=o.length2,d[c]=r}return d},_.prototype.patch_apply=function(n,d){if(n.length==0)return[d,[]];n=this.patch_deepCopy(n);var c=this.patch_addPadding(n);d=c+d+c,this.patch_splitMax(n);for(var o=0,r=[],l=0;l<n.length;l++){var h=n[l].start2+o,i=this.diff_text1(n[l].diffs),m,f=-1;if(i.length>this.Match_MaxBits?(m=this.match_main(d,i.substring(0,this.Match_MaxBits),h),m!=-1&&(f=this.match_main(d,i.substring(i.length-this.Match_MaxBits),h+i.length-this.Match_MaxBits),(f==-1||m>=f)&&(m=-1))):m=this.match_main(d,i,h),m==-1)r[l]=!1,o-=n[l].length2-n[l].length1;else{r[l]=!0,o=m-h;var u;if(f==-1?u=d.substring(m,m+i.length):u=d.substring(m,f+this.Match_MaxBits),i==u)d=d.substring(0,m)+this.diff_text2(n[l].diffs)+d.substring(m+i.length);else{var k=this.diff_main(i,u,!1);if(i.length>this.Match_MaxBits&&this.diff_levenshtein(k)/i.length>this.Patch_DeleteThreshold)r[l]=!1;else{this.diff_cleanupSemanticLossless(k);for(var y=0,P,b=0;b<n[l].diffs.length;b++){var A=n[l].diffs[b];A[0]!==t&&(P=this.diff_xIndex(k,y)),A[0]===g?d=d.substring(0,m+P)+A[1]+d.substring(m+P):A[0]===s&&(d=d.substring(0,m+P)+d.substring(m+this.diff_xIndex(k,y+A[1].length))),A[0]!==s&&(y+=A[1].length)}}}}}return d=d.substring(c.length,d.length-c.length),[d,r]},_.prototype.patch_addPadding=function(n){for(var d=this.Patch_Margin,c="",o=1;o<=d;o++)c+=String.fromCharCode(o);for(var o=0;o<n.length;o++)n[o].start1+=d,n[o].start2+=d;var r=n[0],l=r.diffs;if(l.length==0||l[0][0]!=t)l.unshift(new _.Diff(t,c)),r.start1-=d,r.start2-=d,r.length1+=d,r.length2+=d;else if(d>l[0][1].length){var h=d-l[0][1].length;l[0][1]=c.substring(l[0][1].length)+l[0][1],r.start1-=h,r.start2-=h,r.length1+=h,r.length2+=h}if(r=n[n.length-1],l=r.diffs,l.length==0||l[l.length-1][0]!=t)l.push(new _.Diff(t,c)),r.length1+=d,r.length2+=d;else if(d>l[l.length-1][1].length){var h=d-l[l.length-1][1].length;l[l.length-1][1]+=c.substring(0,h),r.length1+=h,r.length2+=h}return c},_.prototype.patch_splitMax=function(n){for(var d=this.Match_MaxBits,c=0;c<n.length;c++)if(!(n[c].length1<=d)){var o=n[c];n.splice(c--,1);for(var r=o.start1,l=o.start2,h="";o.diffs.length!==0;){var i=new _.patch_obj,m=!0;for(i.start1=r-h.length,i.start2=l-h.length,h!==""&&(i.length1=i.length2=h.length,i.diffs.push(new _.Diff(t,h)));o.diffs.length!==0&&i.length1<d-this.Patch_Margin;){var f=o.diffs[0][0],u=o.diffs[0][1];f===g?(i.length2+=u.length,l+=u.length,i.diffs.push(o.diffs.shift()),m=!1):f===s&&i.diffs.length==1&&i.diffs[0][0]==t&&u.length>2*d?(i.length1+=u.length,r+=u.length,m=!1,i.diffs.push(new _.Diff(f,u)),o.diffs.shift()):(u=u.substring(0,d-i.length1-this.Patch_Margin),i.length1+=u.length,r+=u.length,f===t?(i.length2+=u.length,l+=u.length):m=!1,i.diffs.push(new _.Diff(f,u)),u==o.diffs[0][1]?o.diffs.shift():o.diffs[0][1]=o.diffs[0][1].substring(u.length))}h=this.diff_text2(i.diffs),h=h.substring(h.length-this.Patch_Margin);var k=this.diff_text1(o.diffs).substring(0,this.Patch_Margin);k!==""&&(i.length1+=k.length,i.length2+=k.length,i.diffs.length!==0&&i.diffs[i.diffs.length-1][0]===t?i.diffs[i.diffs.length-1][1]+=k:i.diffs.push(new _.Diff(t,k))),m||n.splice(++c,0,i)}}},_.prototype.patch_toText=function(n){for(var d=[],c=0;c<n.length;c++)d[c]=n[c];return d.join("")},_.prototype.patch_fromText=function(n){var d=[];if(!n)return d;for(var c=n.split(`
`),o=0,r=/^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;o<c.length;){var l=c[o].match(r);if(!l)throw new Error("Invalid patch string: "+c[o]);var h=new _.patch_obj;for(d.push(h),h.start1=parseInt(l[1],10),l[2]===""?(h.start1--,h.length1=1):l[2]=="0"?h.length1=0:(h.start1--,h.length1=parseInt(l[2],10)),h.start2=parseInt(l[3],10),l[4]===""?(h.start2--,h.length2=1):l[4]=="0"?h.length2=0:(h.start2--,h.length2=parseInt(l[4],10)),o++;o<c.length;){var i=c[o].charAt(0);try{var m=decodeURI(c[o].substring(1))}catch(f){throw new Error("Illegal escape in patch_fromText: "+m)}if(i=="-")h.diffs.push(new _.Diff(s,m));else if(i=="+")h.diffs.push(new _.Diff(g,m));else if(i==" ")h.diffs.push(new _.Diff(t,m));else{if(i=="@")break;if(i!=="")throw new Error('Invalid patch mode "'+i+'" in: '+m)}o++}}return d},_.patch_obj=function(){this.diffs=[],this.start1=null,this.start2=null,this.length1=0,this.length2=0},_.patch_obj.prototype.toString=function(){var n,d;this.length1===0?n=this.start1+",0":this.length1==1?n=this.start1+1:n=this.start1+1+","+this.length1,this.length2===0?d=this.start2+",0":this.length2==1?d=this.start2+1:d=this.start2+1+","+this.length2;for(var c=["@@ -"+n+" +"+d+` @@
`],o,r=0;r<this.diffs.length;r++){switch(this.diffs[r][0]){case g:o="+";break;case s:o="-";break;case t:o=" ";break}c[r+1]=o+encodeURI(this.diffs[r][1])+`
`}return c.join("").replace(/%20/g," ")},N.exports=_,N.exports.diff_match_patch=_,N.exports.DIFF_DELETE=s,N.exports.DIFF_INSERT=g,N.exports.DIFF_EQUAL=t},1151:function(N){/**!

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

*/(function(_,s){N.exports=s()})(this,function(){return function(_){function s(t){if(g[t])return g[t].exports;var n=g[t]={exports:{},id:t,loaded:!1};return _[t].call(n.exports,n,n.exports,s),n.loaded=!0,n.exports}var g={};return s.m=_,s.c=g,s.p="",s(0)}([function(_,s,g){"use strict";function t(){var A=P();return A.compile=function(v,B){return h.compile(v,B,A)},A.precompile=function(v,B){return h.precompile(v,B,A)},A.AST=r.default,A.Compiler=h.Compiler,A.JavaScriptCompiler=m.default,A.Parser=l.parser,A.parse=l.parse,A.parseWithoutProcessing=l.parseWithoutProcessing,A}var n=g(1).default;s.__esModule=!0;var d=g(2),c=n(d),o=g(45),r=n(o),l=g(46),h=g(51),i=g(52),m=n(i),f=g(49),u=n(f),k=g(44),y=n(k),P=c.default.create,b=t();b.create=t,y.default(b),b.Visitor=u.default,b.default=b,s.default=b,_.exports=s.default},function(_,s){"use strict";s.default=function(g){return g&&g.__esModule?g:{default:g}},s.__esModule=!0},function(_,s,g){"use strict";function t(){var A=new o.HandlebarsEnvironment;return f.extend(A,o),A.SafeString=l.default,A.Exception=i.default,A.Utils=f,A.escapeExpression=f.escapeExpression,A.VM=k,A.template=function(v){return k.template(v,A)},A}var n=g(3).default,d=g(1).default;s.__esModule=!0;var c=g(4),o=n(c),r=g(37),l=d(r),h=g(6),i=d(h),m=g(5),f=n(m),u=g(38),k=n(u),y=g(44),P=d(y),b=t();b.create=t,P.default(b),b.default=b,s.default=b,_.exports=s.default},function(_,s){"use strict";s.default=function(g){if(g&&g.__esModule)return g;var t={};if(g!=null)for(var n in g)Object.prototype.hasOwnProperty.call(g,n)&&(t[n]=g[n]);return t.default=g,t},s.__esModule=!0},function(_,s,g){"use strict";function t(A,v,B){this.helpers=A||{},this.partials=v||{},this.decorators=B||{},r.registerDefaultHelpers(this),l.registerDefaultDecorators(this)}var n=g(1).default;s.__esModule=!0,s.HandlebarsEnvironment=t;var d=g(5),c=g(6),o=n(c),r=g(10),l=g(30),h=g(32),i=n(h),m=g(33),f="4.7.7";s.VERSION=f;var u=8;s.COMPILER_REVISION=u;var k=7;s.LAST_COMPATIBLE_COMPILER_REVISION=k;var y={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};s.REVISION_CHANGES=y;var P="[object Object]";t.prototype={constructor:t,logger:i.default,log:i.default.log,registerHelper:function(A,v){if(d.toString.call(A)===P){if(v)throw new o.default("Arg not supported with multiple helpers");d.extend(this.helpers,A)}else this.helpers[A]=v},unregisterHelper:function(A){delete this.helpers[A]},registerPartial:function(A,v){if(d.toString.call(A)===P)d.extend(this.partials,A);else{if(typeof v=="undefined")throw new o.default('Attempting to register a partial called "'+A+'" as undefined');this.partials[A]=v}},unregisterPartial:function(A){delete this.partials[A]},registerDecorator:function(A,v){if(d.toString.call(A)===P){if(v)throw new o.default("Arg not supported with multiple decorators");d.extend(this.decorators,A)}else this.decorators[A]=v},unregisterDecorator:function(A){delete this.decorators[A]},resetLoggedPropertyAccesses:function(){m.resetLoggedProperties()}};var b=i.default.log;s.log=b,s.createFrame=d.createFrame,s.logger=i.default},function(_,s){"use strict";function g(y){return h[y]}function t(y){for(var P=1;P<arguments.length;P++)for(var b in arguments[P])Object.prototype.hasOwnProperty.call(arguments[P],b)&&(y[b]=arguments[P][b]);return y}function n(y,P){for(var b=0,A=y.length;b<A;b++)if(y[b]===P)return b;return-1}function d(y){if(typeof y!="string"){if(y&&y.toHTML)return y.toHTML();if(y==null)return"";if(!y)return y+"";y=""+y}return m.test(y)?y.replace(i,g):y}function c(y){return!y&&y!==0||!(!k(y)||y.length!==0)}function o(y){var P=t({},y);return P._parent=y,P}function r(y,P){return y.path=P,y}function l(y,P){return(y?y+".":"")+P}s.__esModule=!0,s.extend=t,s.indexOf=n,s.escapeExpression=d,s.isEmpty=c,s.createFrame=o,s.blockParams=r,s.appendContextPath=l;var h={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},i=/[&<>"'`=]/g,m=/[&<>"'`=]/,f=Object.prototype.toString;s.toString=f;var u=function(y){return typeof y=="function"};u(/x/)&&(s.isFunction=u=function(y){return typeof y=="function"&&f.call(y)==="[object Function]"}),s.isFunction=u;var k=Array.isArray||function(y){return!(!y||typeof y!="object")&&f.call(y)==="[object Array]"};s.isArray=k},function(_,s,g){"use strict";function t(c,o){var r=o&&o.loc,l=void 0,h=void 0,i=void 0,m=void 0;r&&(l=r.start.line,h=r.end.line,i=r.start.column,m=r.end.column,c+=" - "+l+":"+i);for(var f=Error.prototype.constructor.call(this,c),u=0;u<d.length;u++)this[d[u]]=f[d[u]];Error.captureStackTrace&&Error.captureStackTrace(this,t);try{r&&(this.lineNumber=l,this.endLineNumber=h,n?(Object.defineProperty(this,"column",{value:i,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:m,enumerable:!0})):(this.column=i,this.endColumn=m))}catch(k){}}var n=g(7).default;s.__esModule=!0;var d=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];t.prototype=new Error,s.default=t,_.exports=s.default},function(_,s,g){_.exports={default:g(8),__esModule:!0}},function(_,s,g){var t=g(9);_.exports=function(n,d,c){return t.setDesc(n,d,c)}},function(_,s){var g=Object;_.exports={create:g.create,getProto:g.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:g.getOwnPropertyDescriptor,setDesc:g.defineProperty,setDescs:g.defineProperties,getKeys:g.keys,getNames:g.getOwnPropertyNames,getSymbols:g.getOwnPropertySymbols,each:[].forEach}},function(_,s,g){"use strict";function t(v){o.default(v),l.default(v),i.default(v),f.default(v),k.default(v),P.default(v),A.default(v)}function n(v,B,E){v.helpers[B]&&(v.hooks[B]=v.helpers[B],E||delete v.helpers[B])}var d=g(1).default;s.__esModule=!0,s.registerDefaultHelpers=t,s.moveHelperToHooks=n;var c=g(11),o=d(c),r=g(12),l=d(r),h=g(25),i=d(h),m=g(26),f=d(m),u=g(27),k=d(u),y=g(28),P=d(y),b=g(29),A=d(b)},function(_,s,g){"use strict";s.__esModule=!0;var t=g(5);s.default=function(n){n.registerHelper("blockHelperMissing",function(d,c){var o=c.inverse,r=c.fn;if(d===!0)return r(this);if(d===!1||d==null)return o(this);if(t.isArray(d))return d.length>0?(c.ids&&(c.ids=[c.name]),n.helpers.each(d,c)):o(this);if(c.data&&c.ids){var l=t.createFrame(c.data);l.contextPath=t.appendContextPath(c.data.contextPath,c.name),c={data:l}}return r(d,c)})},_.exports=s.default},function(_,s,g){(function(t){"use strict";var n=g(13).default,d=g(1).default;s.__esModule=!0;var c=g(5),o=g(6),r=d(o);s.default=function(l){l.registerHelper("each",function(h,i){function m(K,w,D){P&&(P.key=K,P.index=w,P.first=w===0,P.last=!!D,b&&(P.contextPath=b+K)),y+=f(h[K],{data:P,blockParams:c.blockParams([h[K],K],[b+K,null])})}if(!i)throw new r.default("Must pass iterator to #each");var f=i.fn,u=i.inverse,k=0,y="",P=void 0,b=void 0;if(i.data&&i.ids&&(b=c.appendContextPath(i.data.contextPath,i.ids[0])+"."),c.isFunction(h)&&(h=h.call(this)),i.data&&(P=c.createFrame(i.data)),h&&typeof h=="object")if(c.isArray(h))for(var A=h.length;k<A;k++)k in h&&m(k,k,k===h.length-1);else if(t.Symbol&&h[t.Symbol.iterator]){for(var v=[],B=h[t.Symbol.iterator](),E=B.next();!E.done;E=B.next())v.push(E.value);h=v;for(var A=h.length;k<A;k++)m(k,k,k===h.length-1)}else(function(){var K=void 0;n(h).forEach(function(w){K!==void 0&&m(K,k-1),K=w,k++}),K!==void 0&&m(K,k-1,!0)})();return k===0&&(y=u(this)),y})},_.exports=s.default}).call(s,function(){return this}())},function(_,s,g){_.exports={default:g(14),__esModule:!0}},function(_,s,g){g(15),_.exports=g(21).Object.keys},function(_,s,g){var t=g(16);g(18)("keys",function(n){return function(d){return n(t(d))}})},function(_,s,g){var t=g(17);_.exports=function(n){return Object(t(n))}},function(_,s){_.exports=function(g){if(g==null)throw TypeError("Can't call method on  "+g);return g}},function(_,s,g){var t=g(19),n=g(21),d=g(24);_.exports=function(c,o){var r=(n.Object||{})[c]||Object[c],l={};l[c]=o(r),t(t.S+t.F*d(function(){r(1)}),"Object",l)}},function(_,s,g){var t=g(20),n=g(21),d=g(22),c="prototype",o=function(r,l,h){var i,m,f,u=r&o.F,k=r&o.G,y=r&o.S,P=r&o.P,b=r&o.B,A=r&o.W,v=k?n:n[l]||(n[l]={}),B=k?t:y?t[l]:(t[l]||{})[c];k&&(h=l);for(i in h)m=!u&&B&&i in B,m&&i in v||(f=m?B[i]:h[i],v[i]=k&&typeof B[i]!="function"?h[i]:b&&m?d(f,t):A&&B[i]==f?function(E){var K=function(w){return this instanceof E?new E(w):E(w)};return K[c]=E[c],K}(f):P&&typeof f=="function"?d(Function.call,f):f,P&&((v[c]||(v[c]={}))[i]=f))};o.F=1,o.G=2,o.S=4,o.P=8,o.B=16,o.W=32,_.exports=o},function(_,s){var g=_.exports=typeof window!="undefined"&&window.Math==Math?window:typeof self!="undefined"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=g)},function(_,s){var g=_.exports={version:"1.2.6"};typeof __e=="number"&&(__e=g)},function(_,s,g){var t=g(23);_.exports=function(n,d,c){if(t(n),d===void 0)return n;switch(c){case 1:return function(o){return n.call(d,o)};case 2:return function(o,r){return n.call(d,o,r)};case 3:return function(o,r,l){return n.call(d,o,r,l)}}return function(){return n.apply(d,arguments)}}},function(_,s){_.exports=function(g){if(typeof g!="function")throw TypeError(g+" is not a function!");return g}},function(_,s){_.exports=function(g){try{return!!g()}catch(t){return!0}}},function(_,s,g){"use strict";var t=g(1).default;s.__esModule=!0;var n=g(6),d=t(n);s.default=function(c){c.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new d.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},_.exports=s.default},function(_,s,g){"use strict";var t=g(1).default;s.__esModule=!0;var n=g(5),d=g(6),c=t(d);s.default=function(o){o.registerHelper("if",function(r,l){if(arguments.length!=2)throw new c.default("#if requires exactly one argument");return n.isFunction(r)&&(r=r.call(this)),!l.hash.includeZero&&!r||n.isEmpty(r)?l.inverse(this):l.fn(this)}),o.registerHelper("unless",function(r,l){if(arguments.length!=2)throw new c.default("#unless requires exactly one argument");return o.helpers.if.call(this,r,{fn:l.inverse,inverse:l.fn,hash:l.hash})})},_.exports=s.default},function(_,s){"use strict";s.__esModule=!0,s.default=function(g){g.registerHelper("log",function(){for(var t=[void 0],n=arguments[arguments.length-1],d=0;d<arguments.length-1;d++)t.push(arguments[d]);var c=1;n.hash.level!=null?c=n.hash.level:n.data&&n.data.level!=null&&(c=n.data.level),t[0]=c,g.log.apply(g,t)})},_.exports=s.default},function(_,s){"use strict";s.__esModule=!0,s.default=function(g){g.registerHelper("lookup",function(t,n,d){return t&&d.lookupProperty(t,n)})},_.exports=s.default},function(_,s,g){"use strict";var t=g(1).default;s.__esModule=!0;var n=g(5),d=g(6),c=t(d);s.default=function(o){o.registerHelper("with",function(r,l){if(arguments.length!=2)throw new c.default("#with requires exactly one argument");n.isFunction(r)&&(r=r.call(this));var h=l.fn;if(n.isEmpty(r))return l.inverse(this);var i=l.data;return l.data&&l.ids&&(i=n.createFrame(l.data),i.contextPath=n.appendContextPath(l.data.contextPath,l.ids[0])),h(r,{data:i,blockParams:n.blockParams([r],[i&&i.contextPath])})})},_.exports=s.default},function(_,s,g){"use strict";function t(o){c.default(o)}var n=g(1).default;s.__esModule=!0,s.registerDefaultDecorators=t;var d=g(31),c=n(d)},function(_,s,g){"use strict";s.__esModule=!0;var t=g(5);s.default=function(n){n.registerDecorator("inline",function(d,c,o,r){var l=d;return c.partials||(c.partials={},l=function(h,i){var m=o.partials;o.partials=t.extend({},m,c.partials);var f=d(h,i);return o.partials=m,f}),c.partials[r.args[0]]=r.fn,l})},_.exports=s.default},function(_,s,g){"use strict";s.__esModule=!0;var t=g(5),n={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(d){if(typeof d=="string"){var c=t.indexOf(n.methodMap,d.toLowerCase());d=c>=0?c:parseInt(d,10)}return d},log:function(d){if(d=n.lookupLevel(d),typeof console!="undefined"&&n.lookupLevel(n.level)<=d){var c=n.methodMap[d];console[c]||(c="log");for(var o=arguments.length,r=Array(o>1?o-1:0),l=1;l<o;l++)r[l-1]=arguments[l];console[c].apply(console,r)}}};s.default=n,_.exports=s.default},function(_,s,g){"use strict";function t(k){var y=r(null);y.constructor=!1,y.__defineGetter__=!1,y.__defineSetter__=!1,y.__lookupGetter__=!1;var P=r(null);return P.__proto__=!1,{properties:{whitelist:i.createNewLookupObject(P,k.allowedProtoProperties),defaultValue:k.allowProtoPropertiesByDefault},methods:{whitelist:i.createNewLookupObject(y,k.allowedProtoMethods),defaultValue:k.allowProtoMethodsByDefault}}}function n(k,y,P){return d(typeof k=="function"?y.methods:y.properties,P)}function d(k,y){return k.whitelist[y]!==void 0?k.whitelist[y]===!0:k.defaultValue!==void 0?k.defaultValue:(c(y),!1)}function c(k){u[k]!==!0&&(u[k]=!0,f.log("error",'Handlebars: Access has been denied to resolve the property "'+k+`" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`))}function o(){l(u).forEach(function(k){delete u[k]})}var r=g(34).default,l=g(13).default,h=g(3).default;s.__esModule=!0,s.createProtoAccessControl=t,s.resultIsAllowed=n,s.resetLoggedProperties=o;var i=g(36),m=g(32),f=h(m),u=r(null)},function(_,s,g){_.exports={default:g(35),__esModule:!0}},function(_,s,g){var t=g(9);_.exports=function(n,d){return t.create(n,d)}},function(_,s,g){"use strict";function t(){for(var c=arguments.length,o=Array(c),r=0;r<c;r++)o[r]=arguments[r];return d.extend.apply(void 0,[n(null)].concat(o))}var n=g(34).default;s.__esModule=!0,s.createNewLookupObject=t;var d=g(5)},function(_,s){"use strict";function g(t){this.string=t}s.__esModule=!0,g.prototype.toString=g.prototype.toHTML=function(){return""+this.string},s.default=g,_.exports=s.default},function(_,s,g){"use strict";function t(D){var S=D&&D[0]||1,L=B.COMPILER_REVISION;if(!(S>=B.LAST_COMPATIBLE_COMPILER_REVISION&&S<=B.COMPILER_REVISION)){if(S<B.LAST_COMPATIBLE_COMPILER_REVISION){var j=B.REVISION_CHANGES[L],U=B.REVISION_CHANGES[S];throw new v.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+j+") or downgrade your runtime to an older version ("+U+").")}throw new v.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+D[1]+").")}}function n(D,S){function L(x,F,O){O.hash&&(F=b.extend({},F,O.hash),O.ids&&(O.ids[0]=!0)),x=S.VM.resolvePartial.call(this,x,F,O);var q=b.extend({},O,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),H=S.VM.invokePartial.call(this,x,F,q);if(H==null&&S.compile&&(O.partials[O.name]=S.compile(x,D.compilerOptions,S),H=O.partials[O.name](F,q)),H!=null){if(O.indent){for(var Q=H.split(`
`),oe=0,fe=Q.length;oe<fe&&(Q[oe]||oe+1!==fe);oe++)Q[oe]=O.indent+Q[oe];H=Q.join(`
`)}return H}throw new v.default("The partial "+O.name+" could not be compiled when running in runtime-only mode")}function j(x){function F(oe){return""+D.main(Y,oe,Y.helpers,Y.partials,q,Q,H)}var O=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],q=O.data;j._setup(O),!O.partial&&D.useData&&(q=l(x,q));var H=void 0,Q=D.useBlockParams?[]:void 0;return D.useDepths&&(H=O.depths?x!=O.depths[0]?[x].concat(O.depths):O.depths:[x]),(F=h(D.main,F,Y,O.depths||[],q,Q))(x,O)}if(!S)throw new v.default("No environment passed to template");if(!D||!D.main)throw new v.default("Unknown template object: "+typeof D);D.main.decorator=D.main_d,S.VM.checkRevision(D.compiler);var U=D.compiler&&D.compiler[0]===7,Y={strict:function(x,F,O){if(!(x&&F in x))throw new v.default('"'+F+'" not defined in '+x,{loc:O});return Y.lookupProperty(x,F)},lookupProperty:function(x,F){var O=x[F];return O==null||Object.prototype.hasOwnProperty.call(x,F)||w.resultIsAllowed(O,Y.protoAccessControl,F)?O:void 0},lookup:function(x,F){for(var O=x.length,q=0;q<O;q++){var H=x[q]&&Y.lookupProperty(x[q],F);if(H!=null)return x[q][F]}},lambda:function(x,F){return typeof x=="function"?x.call(F):x},escapeExpression:b.escapeExpression,invokePartial:L,fn:function(x){var F=D[x];return F.decorator=D[x+"_d"],F},programs:[],program:function(x,F,O,q,H){var Q=this.programs[x],oe=this.fn(x);return F||H||q||O?Q=d(this,x,oe,F,O,q,H):Q||(Q=this.programs[x]=d(this,x,oe)),Q},data:function(x,F){for(;x&&F--;)x=x._parent;return x},mergeIfNeeded:function(x,F){var O=x||F;return x&&F&&x!==F&&(O=b.extend({},F,x)),O},nullContext:f({}),noop:S.VM.noop,compilerInfo:D.compiler};return j.isTop=!0,j._setup=function(x){if(x.partial)Y.protoAccessControl=x.protoAccessControl,Y.helpers=x.helpers,Y.partials=x.partials,Y.decorators=x.decorators,Y.hooks=x.hooks;else{var F=b.extend({},S.helpers,x.helpers);i(F,Y),Y.helpers=F,D.usePartial&&(Y.partials=Y.mergeIfNeeded(x.partials,S.partials)),(D.usePartial||D.useDecorators)&&(Y.decorators=b.extend({},S.decorators,x.decorators)),Y.hooks={},Y.protoAccessControl=w.createProtoAccessControl(x);var O=x.allowCallsToHelperMissing||U;E.moveHelperToHooks(Y,"helperMissing",O),E.moveHelperToHooks(Y,"blockHelperMissing",O)}},j._child=function(x,F,O,q){if(D.useBlockParams&&!O)throw new v.default("must pass block params");if(D.useDepths&&!q)throw new v.default("must pass parent depths");return d(Y,x,D[x],F,0,O,q)},j}function d(D,S,L,j,U,Y,x){function F(O){var q=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],H=x;return!x||O==x[0]||O===D.nullContext&&x[0]===null||(H=[O].concat(x)),L(D,O,D.helpers,D.partials,q.data||j,Y&&[q.blockParams].concat(Y),H)}return F=h(L,F,D,x,j,Y),F.program=S,F.depth=x?x.length:0,F.blockParams=U||0,F}function c(D,S,L){return D?D.call||L.name||(L.name=D,D=L.partials[D]):D=L.name==="@partial-block"?L.data["partial-block"]:L.partials[L.name],D}function o(D,S,L){var j=L.data&&L.data["partial-block"];L.partial=!0,L.ids&&(L.data.contextPath=L.ids[0]||L.data.contextPath);var U=void 0;if(L.fn&&L.fn!==r&&function(){L.data=B.createFrame(L.data);var Y=L.fn;U=L.data["partial-block"]=function(x){var F=arguments.length<=1||arguments[1]===void 0?{}:arguments[1];return F.data=B.createFrame(F.data),F.data["partial-block"]=j,Y(x,F)},Y.partials&&(L.partials=b.extend({},L.partials,Y.partials))}(),D===void 0&&U&&(D=U),D===void 0)throw new v.default("The partial "+L.name+" could not be found");if(D instanceof Function)return D(S,L)}function r(){return""}function l(D,S){return S&&"root"in S||(S=S?B.createFrame(S):{},S.root=D),S}function h(D,S,L,j,U,Y){if(D.decorator){var x={};S=D.decorator(S,x,L,j&&j[0],U,Y,j),b.extend(S,x)}return S}function i(D,S){u(D).forEach(function(L){var j=D[L];D[L]=m(j,S)})}function m(D,S){var L=S.lookupProperty;return K.wrapHelper(D,function(j){return b.extend({lookupProperty:L},j)})}var f=g(39).default,u=g(13).default,k=g(3).default,y=g(1).default;s.__esModule=!0,s.checkRevision=t,s.template=n,s.wrapProgram=d,s.resolvePartial=c,s.invokePartial=o,s.noop=r;var P=g(5),b=k(P),A=g(6),v=y(A),B=g(4),E=g(10),K=g(43),w=g(33)},function(_,s,g){_.exports={default:g(40),__esModule:!0}},function(_,s,g){g(41),_.exports=g(21).Object.seal},function(_,s,g){var t=g(42);g(18)("seal",function(n){return function(d){return n&&t(d)?n(d):d}})},function(_,s){_.exports=function(g){return typeof g=="object"?g!==null:typeof g=="function"}},function(_,s){"use strict";function g(t,n){if(typeof t!="function")return t;var d=function(){var c=arguments[arguments.length-1];return arguments[arguments.length-1]=n(c),t.apply(this,arguments)};return d}s.__esModule=!0,s.wrapHelper=g},function(_,s){(function(g){"use strict";s.__esModule=!0,s.default=function(t){var n=typeof g!="undefined"?g:window,d=n.Handlebars;t.noConflict=function(){return n.Handlebars===t&&(n.Handlebars=d),t}},_.exports=s.default}).call(s,function(){return this}())},function(_,s){"use strict";s.__esModule=!0;var g={helpers:{helperExpression:function(t){return t.type==="SubExpression"||(t.type==="MustacheStatement"||t.type==="BlockStatement")&&!!(t.params&&t.params.length||t.hash)},scopedId:function(t){return/^\.|this\b/.test(t.original)},simpleId:function(t){return t.parts.length===1&&!g.helpers.scopedId(t)&&!t.depth}}};s.default=g,_.exports=s.default},function(_,s,g){"use strict";function t(k,y){if(k.type==="Program")return k;r.default.yy=u,u.locInfo=function(b){return new u.SourceLocation(y&&y.srcName,b)};var P=r.default.parse(k);return P}function n(k,y){var P=t(k,y),b=new h.default(y);return b.accept(P)}var d=g(1).default,c=g(3).default;s.__esModule=!0,s.parseWithoutProcessing=t,s.parse=n;var o=g(47),r=d(o),l=g(48),h=d(l),i=g(50),m=c(i),f=g(5);s.parser=r.default;var u={};f.extend(u,m)},function(_,s){"use strict";s.__esModule=!0;var g=function(){function t(){this.yy={}}var n={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(c,o,r,l,h,i,m){var f=i.length-1;switch(h){case 1:return i[f-1];case 2:this.$=l.prepareProgram(i[f]);break;case 3:this.$=i[f];break;case 4:this.$=i[f];break;case 5:this.$=i[f];break;case 6:this.$=i[f];break;case 7:this.$=i[f];break;case 8:this.$=i[f];break;case 9:this.$={type:"CommentStatement",value:l.stripComment(i[f]),strip:l.stripFlags(i[f],i[f]),loc:l.locInfo(this._$)};break;case 10:this.$={type:"ContentStatement",original:i[f],value:i[f],loc:l.locInfo(this._$)};break;case 11:this.$=l.prepareRawBlock(i[f-2],i[f-1],i[f],this._$);break;case 12:this.$={path:i[f-3],params:i[f-2],hash:i[f-1]};break;case 13:this.$=l.prepareBlock(i[f-3],i[f-2],i[f-1],i[f],!1,this._$);break;case 14:this.$=l.prepareBlock(i[f-3],i[f-2],i[f-1],i[f],!0,this._$);break;case 15:this.$={open:i[f-5],path:i[f-4],params:i[f-3],hash:i[f-2],blockParams:i[f-1],strip:l.stripFlags(i[f-5],i[f])};break;case 16:this.$={path:i[f-4],params:i[f-3],hash:i[f-2],blockParams:i[f-1],strip:l.stripFlags(i[f-5],i[f])};break;case 17:this.$={path:i[f-4],params:i[f-3],hash:i[f-2],blockParams:i[f-1],strip:l.stripFlags(i[f-5],i[f])};break;case 18:this.$={strip:l.stripFlags(i[f-1],i[f-1]),program:i[f]};break;case 19:var u=l.prepareBlock(i[f-2],i[f-1],i[f],i[f],!1,this._$),k=l.prepareProgram([u],i[f-1].loc);k.chained=!0,this.$={strip:i[f-2].strip,program:k,chain:!0};break;case 20:this.$=i[f];break;case 21:this.$={path:i[f-1],strip:l.stripFlags(i[f-2],i[f])};break;case 22:this.$=l.prepareMustache(i[f-3],i[f-2],i[f-1],i[f-4],l.stripFlags(i[f-4],i[f]),this._$);break;case 23:this.$=l.prepareMustache(i[f-3],i[f-2],i[f-1],i[f-4],l.stripFlags(i[f-4],i[f]),this._$);break;case 24:this.$={type:"PartialStatement",name:i[f-3],params:i[f-2],hash:i[f-1],indent:"",strip:l.stripFlags(i[f-4],i[f]),loc:l.locInfo(this._$)};break;case 25:this.$=l.preparePartialBlock(i[f-2],i[f-1],i[f],this._$);break;case 26:this.$={path:i[f-3],params:i[f-2],hash:i[f-1],strip:l.stripFlags(i[f-4],i[f])};break;case 27:this.$=i[f];break;case 28:this.$=i[f];break;case 29:this.$={type:"SubExpression",path:i[f-3],params:i[f-2],hash:i[f-1],loc:l.locInfo(this._$)};break;case 30:this.$={type:"Hash",pairs:i[f],loc:l.locInfo(this._$)};break;case 31:this.$={type:"HashPair",key:l.id(i[f-2]),value:i[f],loc:l.locInfo(this._$)};break;case 32:this.$=l.id(i[f-1]);break;case 33:this.$=i[f];break;case 34:this.$=i[f];break;case 35:this.$={type:"StringLiteral",value:i[f],original:i[f],loc:l.locInfo(this._$)};break;case 36:this.$={type:"NumberLiteral",value:Number(i[f]),original:Number(i[f]),loc:l.locInfo(this._$)};break;case 37:this.$={type:"BooleanLiteral",value:i[f]==="true",original:i[f]==="true",loc:l.locInfo(this._$)};break;case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:l.locInfo(this._$)};break;case 39:this.$={type:"NullLiteral",original:null,value:null,loc:l.locInfo(this._$)};break;case 40:this.$=i[f];break;case 41:this.$=i[f];break;case 42:this.$=l.preparePath(!0,i[f],this._$);break;case 43:this.$=l.preparePath(!1,i[f],this._$);break;case 44:i[f-2].push({part:l.id(i[f]),original:i[f],separator:i[f-1]}),this.$=i[f-2];break;case 45:this.$=[{part:l.id(i[f]),original:i[f]}];break;case 46:this.$=[];break;case 47:i[f-1].push(i[f]);break;case 48:this.$=[];break;case 49:i[f-1].push(i[f]);break;case 50:this.$=[];break;case 51:i[f-1].push(i[f]);break;case 58:this.$=[];break;case 59:i[f-1].push(i[f]);break;case 64:this.$=[];break;case 65:i[f-1].push(i[f]);break;case 70:this.$=[];break;case 71:i[f-1].push(i[f]);break;case 78:this.$=[];break;case 79:i[f-1].push(i[f]);break;case 82:this.$=[];break;case 83:i[f-1].push(i[f]);break;case 86:this.$=[];break;case 87:i[f-1].push(i[f]);break;case 90:this.$=[];break;case 91:i[f-1].push(i[f]);break;case 94:this.$=[];break;case 95:i[f-1].push(i[f]);break;case 98:this.$=[i[f]];break;case 99:i[f-1].push(i[f]);break;case 100:this.$=[i[f]];break;case 101:i[f-1].push(i[f])}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{15:[2,48],17:39,18:[2,48]},{20:41,56:40,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:44,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:45,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:41,56:48,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:49,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,50]},{72:[1,35],86:51},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:52,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:53,38:55,39:[1,57],43:56,44:[1,58],45:54,47:[2,54]},{28:59,43:60,44:[1,58],47:[2,56]},{13:62,15:[1,20],18:[1,61]},{33:[2,86],57:63,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:64,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:65,47:[1,66]},{30:67,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:68,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:69,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:70,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:74,33:[2,80],50:71,63:72,64:75,65:[1,43],69:73,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,79]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,50]},{20:74,53:80,54:[2,84],63:81,64:75,65:[1,43],69:82,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:83,47:[1,66]},{47:[2,55]},{4:84,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:85,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:86,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:87,47:[1,66]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:74,33:[2,88],58:88,63:89,64:75,65:[1,43],69:90,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:91,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:92,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,31:93,33:[2,60],63:94,64:75,65:[1,43],69:95,70:76,71:77,72:[1,78],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,66],36:96,63:97,64:75,65:[1,43],69:98,70:76,71:77,72:[1,78],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,22:99,23:[2,52],63:100,64:75,65:[1,43],69:101,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,92],62:102,63:103,64:75,65:[1,43],69:104,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,105]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:106,72:[1,107],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,108],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,109]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:55,39:[1,57],43:56,44:[1,58],45:111,46:110,47:[2,76]},{33:[2,70],40:112,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,113]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:74,63:115,64:75,65:[1,43],67:114,68:[2,96],69:116,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,117]},{32:118,33:[2,62],74:119,75:[1,120]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:121,74:122,75:[1,120]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,123]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,124]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,108]},{20:74,63:125,64:75,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:74,33:[2,72],41:126,63:127,64:75,65:[1,43],69:128,70:76,71:77,72:[1,78],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,129]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,130]},{33:[2,63]},{72:[1,132],76:131},{33:[1,133]},{33:[2,69]},{15:[2,12],18:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:134,74:135,75:[1,120]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,137],77:[1,136]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,138]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],54:[2,55],56:[2,20],60:[2,57],73:[2,81],82:[2,85],86:[2,18],90:[2,89],101:[2,53],104:[2,93],110:[2,19],111:[2,77],116:[2,97],119:[2,63],122:[2,69],135:[2,75],136:[2,32]},parseError:function(c,o){throw new Error(c)},parse:function(c){function o(){var Y;return Y=r.lexer.lex()||1,typeof Y!="number"&&(Y=r.symbols_[Y]||Y),Y}var r=this,l=[0],h=[null],i=[],m=this.table,f="",u=0,k=0,y=0;this.lexer.setInput(c),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc=="undefined"&&(this.lexer.yylloc={});var P=this.lexer.yylloc;i.push(P);var b=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);for(var A,v,B,E,K,w,D,S,L,j={};;){if(B=l[l.length-1],this.defaultActions[B]?E=this.defaultActions[B]:(A!==null&&typeof A!="undefined"||(A=o()),E=m[B]&&m[B][A]),typeof E=="undefined"||!E.length||!E[0]){var U="";if(!y){L=[];for(w in m[B])this.terminals_[w]&&w>2&&L.push("'"+this.terminals_[w]+"'");U=this.lexer.showPosition?"Parse error on line "+(u+1)+`:
`+this.lexer.showPosition()+`
Expecting `+L.join(", ")+", got '"+(this.terminals_[A]||A)+"'":"Parse error on line "+(u+1)+": Unexpected "+(A==1?"end of input":"'"+(this.terminals_[A]||A)+"'"),this.parseError(U,{text:this.lexer.match,token:this.terminals_[A]||A,line:this.lexer.yylineno,loc:P,expected:L})}}if(E[0]instanceof Array&&E.length>1)throw new Error("Parse Error: multiple actions possible at state: "+B+", token: "+A);switch(E[0]){case 1:l.push(A),h.push(this.lexer.yytext),i.push(this.lexer.yylloc),l.push(E[1]),A=null,v?(A=v,v=null):(k=this.lexer.yyleng,f=this.lexer.yytext,u=this.lexer.yylineno,P=this.lexer.yylloc,y>0&&y--);break;case 2:if(D=this.productions_[E[1]][1],j.$=h[h.length-D],j._$={first_line:i[i.length-(D||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(D||1)].first_column,last_column:i[i.length-1].last_column},b&&(j._$.range=[i[i.length-(D||1)].range[0],i[i.length-1].range[1]]),K=this.performAction.call(j,f,k,u,this.yy,E[1],h,i),typeof K!="undefined")return K;D&&(l=l.slice(0,-1*D*2),h=h.slice(0,-1*D),i=i.slice(0,-1*D)),l.push(this.productions_[E[1]][0]),h.push(j.$),i.push(j._$),S=m[l[l.length-2]][l[l.length-1]],l.push(S);break;case 3:return!0}}return!0}},d=function(){var c={EOF:1,parseError:function(o,r){if(!this.yy.parser)throw new Error(o);this.yy.parser.parseError(o,r)},setInput:function(o){return this._input=o,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var o=this._input[0];this.yytext+=o,this.yyleng++,this.offset++,this.match+=o,this.matched+=o;var r=o.match(/(?:\r\n?|\n).*/g);return r?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),o},unput:function(o){var r=o.length,l=o.split(/(?:\r\n?|\n)/g);this._input=o+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-r-1),this.offset-=r;var h=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),l.length-1&&(this.yylineno-=l.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:l?(l.length===h.length?this.yylloc.first_column:0)+h[h.length-l.length].length-l[0].length:this.yylloc.first_column-r},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-r]),this},more:function(){return this._more=!0,this},less:function(o){this.unput(this.match.slice(o))},pastInput:function(){var o=this.matched.substr(0,this.matched.length-this.match.length);return(o.length>20?"...":"")+o.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var o=this.match;return o.length<20&&(o+=this._input.substr(0,20-o.length)),(o.substr(0,20)+(o.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var o=this.pastInput(),r=new Array(o.length+1).join("-");return o+this.upcomingInput()+`
`+r+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var o,r,l,h,i;this._more||(this.yytext="",this.match="");for(var m=this._currentRules(),f=0;f<m.length&&(l=this._input.match(this.rules[m[f]]),!l||r&&!(l[0].length>r[0].length)||(r=l,h=f,this.options.flex));f++);return r?(i=r[0].match(/(?:\r\n?|\n).*/g),i&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+r[0].length},this.yytext+=r[0],this.match+=r[0],this.matches=r,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(r[0].length),this.matched+=r[0],o=this.performAction.call(this,this.yy,this,m[h],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),o||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var o=this.next();return typeof o!="undefined"?o:this.lex()},begin:function(o){this.conditionStack.push(o)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(o){this.begin(o)}};return c.options={},c.performAction=function(o,r,l,h){function i(m,f){return r.yytext=r.yytext.substring(m,r.yyleng-f+m)}switch(l){case 0:if(r.yytext.slice(-2)==="\\\\"?(i(0,1),this.begin("mu")):r.yytext.slice(-1)==="\\"?(i(0,1),this.begin("emu")):this.begin("mu"),r.yytext)return 15;break;case 1:return 15;case 2:return this.popState(),15;case 3:return this.begin("raw"),15;case 4:return this.popState(),this.conditionStack[this.conditionStack.length-1]==="raw"?15:(i(5,9),"END_RAW_BLOCK");case 5:return 15;case 6:return this.popState(),14;case 7:return 65;case 8:return 68;case 9:return 19;case 10:return this.popState(),this.begin("raw"),23;case 11:return 55;case 12:return 60;case 13:return 29;case 14:return 47;case 15:return this.popState(),44;case 16:return this.popState(),44;case 17:return 34;case 18:return 39;case 19:return 51;case 20:return 48;case 21:this.unput(r.yytext),this.popState(),this.begin("com");break;case 22:return this.popState(),14;case 23:return 48;case 24:return 73;case 25:return 72;case 26:return 72;case 27:return 87;case 28:break;case 29:return this.popState(),54;case 30:return this.popState(),33;case 31:return r.yytext=i(1,2).replace(/\\"/g,'"'),80;case 32:return r.yytext=i(1,2).replace(/\\'/g,"'"),80;case 33:return 85;case 34:return 82;case 35:return 82;case 36:return 83;case 37:return 84;case 38:return 81;case 39:return 75;case 40:return 77;case 41:return 72;case 42:return r.yytext=r.yytext.replace(/\\([\\\]])/g,"$1"),72;case 43:return"INVALID";case 44:return 5}},c.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^\/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],c.conditions={mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}},c}();return n.lexer=d,t.prototype=n,n.Parser=t,new t}();s.default=g,_.exports=s.default},function(_,s,g){"use strict";function t(){var i=arguments.length<=0||arguments[0]===void 0?{}:arguments[0];this.options=i}function n(i,m,f){m===void 0&&(m=i.length);var u=i[m-1],k=i[m-2];return u?u.type==="ContentStatement"?(k||!f?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(u.original):void 0:f}function d(i,m,f){m===void 0&&(m=-1);var u=i[m+1],k=i[m+2];return u?u.type==="ContentStatement"?(k||!f?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(u.original):void 0:f}function c(i,m,f){var u=i[m==null?0:m+1];if(u&&u.type==="ContentStatement"&&(f||!u.rightStripped)){var k=u.value;u.value=u.value.replace(f?/^\s+/:/^[ \t]*\r?\n?/,""),u.rightStripped=u.value!==k}}function o(i,m,f){var u=i[m==null?i.length-1:m-1];if(u&&u.type==="ContentStatement"&&(f||!u.leftStripped)){var k=u.value;return u.value=u.value.replace(f?/\s+$/:/[ \t]+$/,""),u.leftStripped=u.value!==k,u.leftStripped}}var r=g(1).default;s.__esModule=!0;var l=g(49),h=r(l);t.prototype=new h.default,t.prototype.Program=function(i){var m=!this.options.ignoreStandalone,f=!this.isRootSeen;this.isRootSeen=!0;for(var u=i.body,k=0,y=u.length;k<y;k++){var P=u[k],b=this.accept(P);if(b){var A=n(u,k,f),v=d(u,k,f),B=b.openStandalone&&A,E=b.closeStandalone&&v,K=b.inlineStandalone&&A&&v;b.close&&c(u,k,!0),b.open&&o(u,k,!0),m&&K&&(c(u,k),o(u,k)&&P.type==="PartialStatement"&&(P.indent=/([ \t]+$)/.exec(u[k-1].original)[1])),m&&B&&(c((P.program||P.inverse).body),o(u,k)),m&&E&&(c(u,k),o((P.inverse||P.program).body))}}return i},t.prototype.BlockStatement=t.prototype.DecoratorBlock=t.prototype.PartialBlockStatement=function(i){this.accept(i.program),this.accept(i.inverse);var m=i.program||i.inverse,f=i.program&&i.inverse,u=f,k=f;if(f&&f.chained)for(u=f.body[0].program;k.chained;)k=k.body[k.body.length-1].program;var y={open:i.openStrip.open,close:i.closeStrip.close,openStandalone:d(m.body),closeStandalone:n((u||m).body)};if(i.openStrip.close&&c(m.body,null,!0),f){var P=i.inverseStrip;P.open&&o(m.body,null,!0),P.close&&c(u.body,null,!0),i.closeStrip.open&&o(k.body,null,!0),!this.options.ignoreStandalone&&n(m.body)&&d(u.body)&&(o(m.body),c(u.body))}else i.closeStrip.open&&o(m.body,null,!0);return y},t.prototype.Decorator=t.prototype.MustacheStatement=function(i){return i.strip},t.prototype.PartialStatement=t.prototype.CommentStatement=function(i){var m=i.strip||{};return{inlineStandalone:!0,open:m.open,close:m.close}},s.default=t,_.exports=s.default},function(_,s,g){"use strict";function t(){this.parents=[]}function n(h){this.acceptRequired(h,"path"),this.acceptArray(h.params),this.acceptKey(h,"hash")}function d(h){n.call(this,h),this.acceptKey(h,"program"),this.acceptKey(h,"inverse")}function c(h){this.acceptRequired(h,"name"),this.acceptArray(h.params),this.acceptKey(h,"hash")}var o=g(1).default;s.__esModule=!0;var r=g(6),l=o(r);t.prototype={constructor:t,mutating:!1,acceptKey:function(h,i){var m=this.accept(h[i]);if(this.mutating){if(m&&!t.prototype[m.type])throw new l.default('Unexpected node type "'+m.type+'" found when accepting '+i+" on "+h.type);h[i]=m}},acceptRequired:function(h,i){if(this.acceptKey(h,i),!h[i])throw new l.default(h.type+" requires "+i)},acceptArray:function(h){for(var i=0,m=h.length;i<m;i++)this.acceptKey(h,i),h[i]||(h.splice(i,1),i--,m--)},accept:function(h){if(h){if(!this[h.type])throw new l.default("Unknown type: "+h.type,h);this.current&&this.parents.unshift(this.current),this.current=h;var i=this[h.type](h);return this.current=this.parents.shift(),!this.mutating||i?i:i!==!1?h:void 0}},Program:function(h){this.acceptArray(h.body)},MustacheStatement:n,Decorator:n,BlockStatement:d,DecoratorBlock:d,PartialStatement:c,PartialBlockStatement:function(h){c.call(this,h),this.acceptKey(h,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:n,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(h){this.acceptArray(h.pairs)},HashPair:function(h){this.acceptRequired(h,"value")}},s.default=t,_.exports=s.default},function(_,s,g){"use strict";function t(P,b){if(b=b.path?b.path.original:b,P.path.original!==b){var A={loc:P.path.loc};throw new y.default(P.path.original+" doesn't match "+b,A)}}function n(P,b){this.source=P,this.start={line:b.first_line,column:b.first_column},this.end={line:b.last_line,column:b.last_column}}function d(P){return/^\[.*\]$/.test(P)?P.substring(1,P.length-1):P}function c(P,b){return{open:P.charAt(2)==="~",close:b.charAt(b.length-3)==="~"}}function o(P){return P.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")}function r(P,b,A){A=this.locInfo(A);for(var v=P?"@":"",B=[],E=0,K=0,w=b.length;K<w;K++){var D=b[K].part,S=b[K].original!==D;if(v+=(b[K].separator||"")+D,S||D!==".."&&D!=="."&&D!=="this")B.push(D);else{if(B.length>0)throw new y.default("Invalid path: "+v,{loc:A});D===".."&&E++}}return{type:"PathExpression",data:P,depth:E,parts:B,original:v,loc:A}}function l(P,b,A,v,B,E){var K=v.charAt(3)||v.charAt(2),w=K!=="{"&&K!=="&",D=/\*/.test(v);return{type:D?"Decorator":"MustacheStatement",path:P,params:b,hash:A,escaped:w,strip:B,loc:this.locInfo(E)}}function h(P,b,A,v){t(P,A),v=this.locInfo(v);var B={type:"Program",body:b,strip:{},loc:v};return{type:"BlockStatement",path:P.path,params:P.params,hash:P.hash,program:B,openStrip:{},inverseStrip:{},closeStrip:{},loc:v}}function i(P,b,A,v,B,E){v&&v.path&&t(P,v);var K=/\*/.test(P.open);b.blockParams=P.blockParams;var w=void 0,D=void 0;if(A){if(K)throw new y.default("Unexpected inverse block on decorator",A);A.chain&&(A.program.body[0].closeStrip=v.strip),D=A.strip,w=A.program}return B&&(B=w,w=b,b=B),{type:K?"DecoratorBlock":"BlockStatement",path:P.path,params:P.params,hash:P.hash,program:b,inverse:w,openStrip:P.strip,inverseStrip:D,closeStrip:v&&v.strip,loc:this.locInfo(E)}}function m(P,b){if(!b&&P.length){var A=P[0].loc,v=P[P.length-1].loc;A&&v&&(b={source:A.source,start:{line:A.start.line,column:A.start.column},end:{line:v.end.line,column:v.end.column}})}return{type:"Program",body:P,strip:{},loc:b}}function f(P,b,A,v){return t(P,A),{type:"PartialBlockStatement",name:P.path,params:P.params,hash:P.hash,program:b,openStrip:P.strip,closeStrip:A&&A.strip,loc:this.locInfo(v)}}var u=g(1).default;s.__esModule=!0,s.SourceLocation=n,s.id=d,s.stripFlags=c,s.stripComment=o,s.preparePath=r,s.prepareMustache=l,s.prepareRawBlock=h,s.prepareBlock=i,s.prepareProgram=m,s.preparePartialBlock=f;var k=g(6),y=u(k)},function(_,s,g){"use strict";function t(){}function n(y,P,b){if(y==null||typeof y!="string"&&y.type!=="Program")throw new i.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+y);P=P||{},"data"in P||(P.data=!0),P.compat&&(P.useDepths=!0);var A=b.parse(y,P),v=new b.Compiler().compile(A,P);return new b.JavaScriptCompiler().compile(v,P)}function d(y,P,b){function A(){var E=b.parse(y,P),K=new b.Compiler().compile(E,P),w=new b.JavaScriptCompiler().compile(K,P,void 0,!0);return b.template(w)}function v(E,K){return B||(B=A()),B.call(this,E,K)}if(P===void 0&&(P={}),y==null||typeof y!="string"&&y.type!=="Program")throw new i.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+y);P=m.extend({},P),"data"in P||(P.data=!0),P.compat&&(P.useDepths=!0);var B=void 0;return v._setup=function(E){return B||(B=A()),B._setup(E)},v._child=function(E,K,w,D){return B||(B=A()),B._child(E,K,w,D)},v}function c(y,P){if(y===P)return!0;if(m.isArray(y)&&m.isArray(P)&&y.length===P.length){for(var b=0;b<y.length;b++)if(!c(y[b],P[b]))return!1;return!0}}function o(y){if(!y.path.parts){var P=y.path;y.path={type:"PathExpression",data:!1,depth:0,parts:[P.original+""],original:P.original+"",loc:P.loc}}}var r=g(34).default,l=g(1).default;s.__esModule=!0,s.Compiler=t,s.precompile=n,s.compile=d;var h=g(6),i=l(h),m=g(5),f=g(45),u=l(f),k=[].slice;t.prototype={compiler:t,equals:function(y){var P=this.opcodes.length;if(y.opcodes.length!==P)return!1;for(var b=0;b<P;b++){var A=this.opcodes[b],v=y.opcodes[b];if(A.opcode!==v.opcode||!c(A.args,v.args))return!1}P=this.children.length;for(var b=0;b<P;b++)if(!this.children[b].equals(y.children[b]))return!1;return!0},guid:0,compile:function(y,P){return this.sourceNode=[],this.opcodes=[],this.children=[],this.options=P,this.stringParams=P.stringParams,this.trackIds=P.trackIds,P.blockParams=P.blockParams||[],P.knownHelpers=m.extend(r(null),{helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},P.knownHelpers),this.accept(y)},compileProgram:function(y){var P=new this.compiler,b=P.compile(y,this.options),A=this.guid++;return this.usePartial=this.usePartial||b.usePartial,this.children[A]=b,this.useDepths=this.useDepths||b.useDepths,A},accept:function(y){if(!this[y.type])throw new i.default("Unknown type: "+y.type,y);this.sourceNode.unshift(y);var P=this[y.type](y);return this.sourceNode.shift(),P},Program:function(y){this.options.blockParams.unshift(y.blockParams);for(var P=y.body,b=P.length,A=0;A<b;A++)this.accept(P[A]);return this.options.blockParams.shift(),this.isSimple=b===1,this.blockParams=y.blockParams?y.blockParams.length:0,this},BlockStatement:function(y){o(y);var P=y.program,b=y.inverse;P=P&&this.compileProgram(P),b=b&&this.compileProgram(b);var A=this.classifySexpr(y);A==="helper"?this.helperSexpr(y,P,b):A==="simple"?(this.simpleSexpr(y),this.opcode("pushProgram",P),this.opcode("pushProgram",b),this.opcode("emptyHash"),this.opcode("blockValue",y.path.original)):(this.ambiguousSexpr(y,P,b),this.opcode("pushProgram",P),this.opcode("pushProgram",b),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(y){var P=y.program&&this.compileProgram(y.program),b=this.setupFullMustacheParams(y,P,void 0),A=y.path;this.useDecorators=!0,this.opcode("registerDecorator",b.length,A.original)},PartialStatement:function(y){this.usePartial=!0;var P=y.program;P&&(P=this.compileProgram(y.program));var b=y.params;if(b.length>1)throw new i.default("Unsupported number of partial arguments: "+b.length,y);b.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):b.push({type:"PathExpression",parts:[],depth:0}));var A=y.name.original,v=y.name.type==="SubExpression";v&&this.accept(y.name),this.setupFullMustacheParams(y,P,void 0,!0);var B=y.indent||"";this.options.preventIndent&&B&&(this.opcode("appendContent",B),B=""),this.opcode("invokePartial",v,A,B),this.opcode("append")},PartialBlockStatement:function(y){this.PartialStatement(y)},MustacheStatement:function(y){this.SubExpression(y),y.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(y){this.DecoratorBlock(y)},ContentStatement:function(y){y.value&&this.opcode("appendContent",y.value)},CommentStatement:function(){},SubExpression:function(y){o(y);var P=this.classifySexpr(y);P==="simple"?this.simpleSexpr(y):P==="helper"?this.helperSexpr(y):this.ambiguousSexpr(y)},ambiguousSexpr:function(y,P,b){var A=y.path,v=A.parts[0],B=P!=null||b!=null;this.opcode("getContext",A.depth),this.opcode("pushProgram",P),this.opcode("pushProgram",b),A.strict=!0,this.accept(A),this.opcode("invokeAmbiguous",v,B)},simpleSexpr:function(y){var P=y.path;P.strict=!0,this.accept(P),this.opcode("resolvePossibleLambda")},helperSexpr:function(y,P,b){var A=this.setupFullMustacheParams(y,P,b),v=y.path,B=v.parts[0];if(this.options.knownHelpers[B])this.opcode("invokeKnownHelper",A.length,B);else{if(this.options.knownHelpersOnly)throw new i.default("You specified knownHelpersOnly, but used the unknown helper "+B,y);v.strict=!0,v.falsy=!0,this.accept(v),this.opcode("invokeHelper",A.length,v.original,u.default.helpers.simpleId(v))}},PathExpression:function(y){this.addDepth(y.depth),this.opcode("getContext",y.depth);var P=y.parts[0],b=u.default.helpers.scopedId(y),A=!y.depth&&!b&&this.blockParamIndex(P);A?this.opcode("lookupBlockParam",A,y.parts):P?y.data?(this.options.data=!0,this.opcode("lookupData",y.depth,y.parts,y.strict)):this.opcode("lookupOnContext",y.parts,y.falsy,y.strict,b):this.opcode("pushContext")},StringLiteral:function(y){this.opcode("pushString",y.value)},NumberLiteral:function(y){this.opcode("pushLiteral",y.value)},BooleanLiteral:function(y){this.opcode("pushLiteral",y.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(y){var P=y.pairs,b=0,A=P.length;for(this.opcode("pushHash");b<A;b++)this.pushParam(P[b].value);for(;b--;)this.opcode("assignToHash",P[b].key);this.opcode("popHash")},opcode:function(y){this.opcodes.push({opcode:y,args:k.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(y){y&&(this.useDepths=!0)},classifySexpr:function(y){var P=u.default.helpers.simpleId(y.path),b=P&&!!this.blockParamIndex(y.path.parts[0]),A=!b&&u.default.helpers.helperExpression(y),v=!b&&(A||P);if(v&&!A){var B=y.path.parts[0],E=this.options;E.knownHelpers[B]?A=!0:E.knownHelpersOnly&&(v=!1)}return A?"helper":v?"ambiguous":"simple"},pushParams:function(y){for(var P=0,b=y.length;P<b;P++)this.pushParam(y[P])},pushParam:function(y){var P=y.value!=null?y.value:y.original||"";if(this.stringParams)P.replace&&(P=P.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),y.depth&&this.addDepth(y.depth),this.opcode("getContext",y.depth||0),this.opcode("pushStringParam",P,y.type),y.type==="SubExpression"&&this.accept(y);else{if(this.trackIds){var b=void 0;if(!y.parts||u.default.helpers.scopedId(y)||y.depth||(b=this.blockParamIndex(y.parts[0])),b){var A=y.parts.slice(1).join(".");this.opcode("pushId","BlockParam",b,A)}else P=y.original||P,P.replace&&(P=P.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",y.type,P)}this.accept(y)}},setupFullMustacheParams:function(y,P,b,A){var v=y.params;return this.pushParams(v),this.opcode("pushProgram",P),this.opcode("pushProgram",b),y.hash?this.accept(y.hash):this.opcode("emptyHash",A),v},blockParamIndex:function(y){for(var P=0,b=this.options.blockParams.length;P<b;P++){var A=this.options.blockParams[P],v=A&&m.indexOf(A,y);if(A&&v>=0)return[P,v]}}}},function(_,s,g){"use strict";function t(u){this.value=u}function n(){}function d(u,k,y,P){var b=k.popStack(),A=0,v=y.length;for(u&&v--;A<v;A++)b=k.nameLookup(b,y[A],P);return u?[k.aliasable("container.strict"),"(",b,", ",k.quotedString(y[A]),", ",JSON.stringify(k.source.currentLocation)," )"]:b}var c=g(13).default,o=g(1).default;s.__esModule=!0;var r=g(4),l=g(6),h=o(l),i=g(5),m=g(53),f=o(m);n.prototype={nameLookup:function(u,k){return this.internalNameLookup(u,k)},depthedLookup:function(u){return[this.aliasable("container.lookup"),"(depths, ",JSON.stringify(u),")"]},compilerInfo:function(){var u=r.COMPILER_REVISION,k=r.REVISION_CHANGES[u];return[u,k]},appendToBuffer:function(u,k,y){return i.isArray(u)||(u=[u]),u=this.source.wrap(u,k),this.environment.isSimple?["return ",u,";"]:y?["buffer += ",u,";"]:(u.appendToBuffer=!0,u)},initializeBuffer:function(){return this.quotedString("")},internalNameLookup:function(u,k){return this.lookupPropertyFunctionIsUsed=!0,["lookupProperty(",u,",",JSON.stringify(k),")"]},lookupPropertyFunctionIsUsed:!1,compile:function(u,k,y,P){this.environment=u,this.options=k,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!P,this.name=this.environment.name,this.isChild=!!y,this.context=y||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(u,k),this.useDepths=this.useDepths||u.useDepths||u.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||u.useBlockParams;var b=u.opcodes,A=void 0,v=void 0,B=void 0,E=void 0;for(B=0,E=b.length;B<E;B++)A=b[B],this.source.currentLocation=A.loc,v=v||A.loc,this[A.opcode].apply(this,A.args);if(this.source.currentLocation=v,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new h.default("Compile completed with content left on stack");this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend(["var decorators = container.decorators, ",this.lookupPropertyFunctionVarDeclaration(),`;
`]),this.decorators.push("return fn;"),P?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`),this.decorators.push(`}
`),this.decorators=this.decorators.merge()));var K=this.createFunctionContext(P);if(this.isChild)return K;var w={compiler:this.compilerInfo(),main:K};this.decorators&&(w.main_d=this.decorators,w.useDecorators=!0);var D=this.context,S=D.programs,L=D.decorators;for(B=0,E=S.length;B<E;B++)S[B]&&(w[B]=S[B],L[B]&&(w[B+"_d"]=L[B],w.useDecorators=!0));return this.environment.usePartial&&(w.usePartial=!0),this.options.data&&(w.useData=!0),this.useDepths&&(w.useDepths=!0),this.useBlockParams&&(w.useBlockParams=!0),this.options.compat&&(w.compat=!0),P?w.compilerOptions=this.options:(w.compiler=JSON.stringify(w.compiler),this.source.currentLocation={start:{line:1,column:0}},w=this.objectLiteral(w),k.srcName?(w=w.toStringWithSourceMap({file:k.destName}),w.map=w.map&&w.map.toString()):w=w.toString()),w},preamble:function(){this.lastContext=0,this.source=new f.default(this.options.srcName),this.decorators=new f.default(this.options.srcName)},createFunctionContext:function(u){var k=this,y="",P=this.stackVars.concat(this.registers.list);P.length>0&&(y+=", "+P.join(", "));var b=0;c(this.aliases).forEach(function(B){var E=k.aliases[B];E.children&&E.referenceCount>1&&(y+=", alias"+ ++b+"="+B,E.children[0]="alias"+b)}),this.lookupPropertyFunctionIsUsed&&(y+=", "+this.lookupPropertyFunctionVarDeclaration());var A=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&A.push("blockParams"),this.useDepths&&A.push("depths");var v=this.mergeSource(y);return u?(A.push(v),Function.apply(this,A)):this.source.wrap(["function(",A.join(","),`) {
  `,v,"}"])},mergeSource:function(u){var k=this.environment.isSimple,y=!this.forceBuffer,P=void 0,b=void 0,A=void 0,v=void 0;return this.source.each(function(B){B.appendToBuffer?(A?B.prepend("  + "):A=B,v=B):(A&&(b?A.prepend("buffer += "):P=!0,v.add(";"),A=v=void 0),b=!0,k||(y=!1))}),y?A?(A.prepend("return "),v.add(";")):b||this.source.push('return "";'):(u+=", buffer = "+(P?"":this.initializeBuffer()),A?(A.prepend("return buffer + "),v.add(";")):this.source.push("return buffer;")),u&&this.source.prepend("var "+u.substring(2)+(P?"":`;
`)),this.source.merge()},lookupPropertyFunctionVarDeclaration:function(){return`
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }
    `.trim()},blockValue:function(u){var k=this.aliasable("container.hooks.blockHelperMissing"),y=[this.contextName(0)];this.setupHelperArgs(u,0,y);var P=this.popStack();y.splice(1,0,P),this.push(this.source.functionCall(k,"call",y))},ambiguousBlockValue:function(){var u=this.aliasable("container.hooks.blockHelperMissing"),k=[this.contextName(0)];this.setupHelperArgs("",0,k,!0),this.flushInline();var y=this.topStack();k.splice(1,0,y),this.pushSource(["if (!",this.lastHelper,") { ",y," = ",this.source.functionCall(u,"call",k),"}"])},appendContent:function(u){this.pendingContent?u=this.pendingContent+u:this.pendingLocation=this.source.currentLocation,this.pendingContent=u},append:function(){if(this.isInline())this.replaceStack(function(k){return[" != null ? ",k,' : ""']}),this.pushSource(this.appendToBuffer(this.popStack()));else{var u=this.popStack();this.pushSource(["if (",u," != null) { ",this.appendToBuffer(u,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(u){this.lastContext=u},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(u,k,y,P){var b=0;P||!this.options.compat||this.lastContext?this.pushContext():this.push(this.depthedLookup(u[b++])),this.resolvePath("context",u,b,k,y)},lookupBlockParam:function(u,k){this.useBlockParams=!0,this.push(["blockParams[",u[0],"][",u[1],"]"]),this.resolvePath("context",k,1)},lookupData:function(u,k,y){u?this.pushStackLiteral("container.data(data, "+u+")"):this.pushStackLiteral("data"),this.resolvePath("data",k,0,!0,y)},resolvePath:function(u,k,y,P,b){var A=this;if(this.options.strict||this.options.assumeObjects)return void this.push(d(this.options.strict&&b,this,k,u));for(var v=k.length;y<v;y++)this.replaceStack(function(B){var E=A.nameLookup(B,k[y],u);return P?[" && ",E]:[" != null ? ",E," : ",B]})},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(u,k){this.pushContext(),this.pushString(k),k!=="SubExpression"&&(typeof u=="string"?this.pushString(u):this.pushStackLiteral(u))},emptyHash:function(u){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(u?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:{},types:[],contexts:[],ids:[]}},popHash:function(){var u=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(u.ids)),this.stringParams&&(this.push(this.objectLiteral(u.contexts)),this.push(this.objectLiteral(u.types))),this.push(this.objectLiteral(u.values))},pushString:function(u){this.pushStackLiteral(this.quotedString(u))},pushLiteral:function(u){this.pushStackLiteral(u)},pushProgram:function(u){u!=null?this.pushStackLiteral(this.programExpression(u)):this.pushStackLiteral(null)},registerDecorator:function(u,k){var y=this.nameLookup("decorators",k,"decorator"),P=this.setupHelperArgs(k,u);this.decorators.push(["fn = ",this.decorators.functionCall(y,"",["fn","props","container",P])," || fn;"])},invokeHelper:function(u,k,y){var P=this.popStack(),b=this.setupHelper(u,k),A=[];y&&A.push(b.name),A.push(P),this.options.strict||A.push(this.aliasable("container.hooks.helperMissing"));var v=["(",this.itemsSeparatedBy(A,"||"),")"],B=this.source.functionCall(v,"call",b.callParams);this.push(B)},itemsSeparatedBy:function(u,k){var y=[];y.push(u[0]);for(var P=1;P<u.length;P++)y.push(k,u[P]);return y},invokeKnownHelper:function(u,k){var y=this.setupHelper(u,k);this.push(this.source.functionCall(y.name,"call",y.callParams))},invokeAmbiguous:function(u,k){this.useRegister("helper");var y=this.popStack();this.emptyHash();var P=this.setupHelper(0,u,k),b=this.lastHelper=this.nameLookup("helpers",u,"helper"),A=["(","(helper = ",b," || ",y,")"];this.options.strict||(A[0]="(helper = ",A.push(" != null ? helper : ",this.aliasable("container.hooks.helperMissing"))),this.push(["(",A,P.paramsInit?["),(",P.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",P.callParams)," : helper))"])},invokePartial:function(u,k,y){var P=[],b=this.setupParams(k,1,P);u&&(k=this.popStack(),delete b.name),y&&(b.indent=JSON.stringify(y)),b.helpers="helpers",b.partials="partials",b.decorators="container.decorators",u?P.unshift(k):P.unshift(this.nameLookup("partials",k,"partial")),this.options.compat&&(b.depths="depths"),b=this.objectLiteral(b),P.push(b),this.push(this.source.functionCall("container.invokePartial","",P))},assignToHash:function(u){var k=this.popStack(),y=void 0,P=void 0,b=void 0;this.trackIds&&(b=this.popStack()),this.stringParams&&(P=this.popStack(),y=this.popStack());var A=this.hash;y&&(A.contexts[u]=y),P&&(A.types[u]=P),b&&(A.ids[u]=b),A.values[u]=k},pushId:function(u,k,y){u==="BlockParam"?this.pushStackLiteral("blockParams["+k[0]+"].path["+k[1]+"]"+(y?" + "+JSON.stringify("."+y):"")):u==="PathExpression"?this.pushString(k):u==="SubExpression"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:n,compileChildren:function(u,k){for(var y=u.children,P=void 0,b=void 0,A=0,v=y.length;A<v;A++){P=y[A],b=new this.compiler;var B=this.matchExistingProgram(P);if(B==null){this.context.programs.push("");var E=this.context.programs.length;P.index=E,P.name="program"+E,this.context.programs[E]=b.compile(P,k,this.context,!this.precompile),this.context.decorators[E]=b.decorators,this.context.environments[E]=P,this.useDepths=this.useDepths||b.useDepths,this.useBlockParams=this.useBlockParams||b.useBlockParams,P.useDepths=this.useDepths,P.useBlockParams=this.useBlockParams}else P.index=B.index,P.name="program"+B.index,this.useDepths=this.useDepths||B.useDepths,this.useBlockParams=this.useBlockParams||B.useBlockParams}},matchExistingProgram:function(u){for(var k=0,y=this.context.environments.length;k<y;k++){var P=this.context.environments[k];if(P&&P.equals(u))return P}},programExpression:function(u){var k=this.environment.children[u],y=[k.index,"data",k.blockParams];return(this.useBlockParams||this.useDepths)&&y.push("blockParams"),this.useDepths&&y.push("depths"),"container.program("+y.join(", ")+")"},useRegister:function(u){this.registers[u]||(this.registers[u]=!0,this.registers.list.push(u))},push:function(u){return u instanceof t||(u=this.source.wrap(u)),this.inlineStack.push(u),u},pushStackLiteral:function(u){this.push(new t(u))},pushSource:function(u){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),u&&this.source.push(u)},replaceStack:function(u){var k=["("],y=void 0,P=void 0,b=void 0;if(!this.isInline())throw new h.default("replaceStack on non-inline");var A=this.popStack(!0);if(A instanceof t)y=[A.value],k=["(",y],b=!0;else{P=!0;var v=this.incrStack();k=["((",this.push(v)," = ",A,")"],y=this.topStack()}var B=u.call(this,y);b||this.popStack(),P&&this.stackSlot--,this.push(k.concat(B,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var u=this.inlineStack;this.inlineStack=[];for(var k=0,y=u.length;k<y;k++){var P=u[k];if(P instanceof t)this.compileStack.push(P);else{var b=this.incrStack();this.pushSource([b," = ",P,";"]),this.compileStack.push(b)}}},isInline:function(){return this.inlineStack.length},popStack:function(u){var k=this.isInline(),y=(k?this.inlineStack:this.compileStack).pop();if(!u&&y instanceof t)return y.value;if(!k){if(!this.stackSlot)throw new h.default("Invalid stack pop");this.stackSlot--}return y},topStack:function(){var u=this.isInline()?this.inlineStack:this.compileStack,k=u[u.length-1];return k instanceof t?k.value:k},contextName:function(u){return this.useDepths&&u?"depths["+u+"]":"depth"+u},quotedString:function(u){return this.source.quotedString(u)},objectLiteral:function(u){return this.source.objectLiteral(u)},aliasable:function(u){var k=this.aliases[u];return k?(k.referenceCount++,k):(k=this.aliases[u]=this.source.wrap(u),k.aliasable=!0,k.referenceCount=1,k)},setupHelper:function(u,k,y){var P=[],b=this.setupHelperArgs(k,u,P,y),A=this.nameLookup("helpers",k,"helper"),v=this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})");return{params:P,paramsInit:b,name:A,callParams:[v].concat(P)}},setupParams:function(u,k,y){var P={},b=[],A=[],v=[],B=!y,E=void 0;B&&(y=[]),P.name=this.quotedString(u),P.hash=this.popStack(),this.trackIds&&(P.hashIds=this.popStack()),this.stringParams&&(P.hashTypes=this.popStack(),P.hashContexts=this.popStack());var K=this.popStack(),w=this.popStack();(w||K)&&(P.fn=w||"container.noop",P.inverse=K||"container.noop");for(var D=k;D--;)E=this.popStack(),y[D]=E,this.trackIds&&(v[D]=this.popStack()),this.stringParams&&(A[D]=this.popStack(),b[D]=this.popStack());return B&&(P.args=this.source.generateArray(y)),this.trackIds&&(P.ids=this.source.generateArray(v)),this.stringParams&&(P.types=this.source.generateArray(A),P.contexts=this.source.generateArray(b)),this.options.data&&(P.data="data"),this.useBlockParams&&(P.blockParams="blockParams"),P},setupHelperArgs:function(u,k,y,P){var b=this.setupParams(u,k,y);return b.loc=JSON.stringify(this.source.currentLocation),b=this.objectLiteral(b),P?(this.useRegister("options"),y.push("options"),["options=",b]):y?(y.push(b),""):b}},function(){for(var u="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),k=n.RESERVED_WORDS={},y=0,P=u.length;y<P;y++)k[u[y]]=!0}(),n.isValidJavaScriptVariableName=function(u){return!n.RESERVED_WORDS[u]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(u)},s.default=n,_.exports=s.default},function(_,s,g){"use strict";function t(r,l,h){if(c.isArray(r)){for(var i=[],m=0,f=r.length;m<f;m++)i.push(l.wrap(r[m],h));return i}return typeof r=="boolean"||typeof r=="number"?r+"":r}function n(r){this.srcFile=r,this.source=[]}var d=g(13).default;s.__esModule=!0;var c=g(5),o=void 0;try{}catch(r){}o||(o=function(r,l,h,i){this.src="",i&&this.add(i)},o.prototype={add:function(r){c.isArray(r)&&(r=r.join("")),this.src+=r},prepend:function(r){c.isArray(r)&&(r=r.join("")),this.src=r+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}}),n.prototype={isEmpty:function(){return!this.source.length},prepend:function(r,l){this.source.unshift(this.wrap(r,l))},push:function(r,l){this.source.push(this.wrap(r,l))},merge:function(){var r=this.empty();return this.each(function(l){r.add(["  ",l,`
`])}),r},each:function(r){for(var l=0,h=this.source.length;l<h;l++)r(this.source[l])},empty:function(){var r=this.currentLocation||{start:{}};return new o(r.start.line,r.start.column,this.srcFile)},wrap:function(r){var l=arguments.length<=1||arguments[1]===void 0?this.currentLocation||{start:{}}:arguments[1];return r instanceof o?r:(r=t(r,this,l),new o(l.start.line,l.start.column,this.srcFile,r))},functionCall:function(r,l,h){return h=this.generateList(h),this.wrap([r,l?"."+l+"(":"(",h,")"])},quotedString:function(r){return'"'+(r+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(r){var l=this,h=[];d(r).forEach(function(m){var f=t(r[m],l);f!=="undefined"&&h.push([l.quotedString(m),":",f])});var i=this.generateList(h);return i.prepend("{"),i.add("}"),i},generateList:function(r){for(var l=this.empty(),h=0,i=r.length;h<i;h++)h&&l.add(","),l.add(t(r[h],this));return l},generateArray:function(r){var l=this.generateList(r);return l.prepend("["),l.add("]"),l}},s.default=n,_.exports=s.default}])})},3689:(N,_,s)=>{var g,t;g=[s(8215),s(6066),s(232),s(9059),s(8914),s(4406),s(2711),s(9441),s(758),s(1843),s(2042),s(6069)],t=function(n,d,c,o,r,l,h){"use strict";var i=/%20/g,m=/#.*$/,f=/([?&])_=[^&]*/,u=/^(.*?):[ \t]*([^\r\n]*)$/mg,k=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,y=/^(?:GET|HEAD)$/,P=/^\/\//,b={},A={},v="*/".concat("*"),B=d.createElement("a");B.href=r.href;function E(L){return function(j,U){typeof j!="string"&&(U=j,j="*");var Y,x=0,F=j.toLowerCase().match(o)||[];if(c(U))for(;Y=F[x++];)Y[0]==="+"?(Y=Y.slice(1)||"*",(L[Y]=L[Y]||[]).unshift(U)):(L[Y]=L[Y]||[]).push(U)}}function K(L,j,U,Y){var x={},F=L===A;function O(q){var H;return x[q]=!0,n.each(L[q]||[],function(Q,oe){var fe=oe(j,U,Y);if(typeof fe=="string"&&!F&&!x[fe])return j.dataTypes.unshift(fe),O(fe),!1;if(F)return!(H=fe)}),H}return O(j.dataTypes[0])||!x["*"]&&O("*")}function w(L,j){var U,Y,x=n.ajaxSettings.flatOptions||{};for(U in j)j[U]!==void 0&&((x[U]?L:Y||(Y={}))[U]=j[U]);return Y&&n.extend(!0,L,Y),L}function D(L,j,U){for(var Y,x,F,O,q=L.contents,H=L.dataTypes;H[0]==="*";)H.shift(),Y===void 0&&(Y=L.mimeType||j.getResponseHeader("Content-Type"));if(Y){for(x in q)if(q[x]&&q[x].test(Y)){H.unshift(x);break}}if(H[0]in U)F=H[0];else{for(x in U){if(!H[0]||L.converters[x+" "+H[0]]){F=x;break}O||(O=x)}F=F||O}if(F)return F!==H[0]&&H.unshift(F),U[F]}function S(L,j,U,Y){var x,F,O,q,H,Q={},oe=L.dataTypes.slice();if(oe[1])for(O in L.converters)Q[O.toLowerCase()]=L.converters[O];for(F=oe.shift();F;)if(L.responseFields[F]&&(U[L.responseFields[F]]=j),!H&&Y&&L.dataFilter&&(j=L.dataFilter(j,L.dataType)),H=F,F=oe.shift(),F){if(F==="*")F=H;else if(H!=="*"&&H!==F){if(O=Q[H+" "+F]||Q["* "+F],!O){for(x in Q)if(q=x.split(" "),q[1]===F&&(O=Q[H+" "+q[0]]||Q["* "+q[0]],O)){O===!0?O=Q[x]:Q[x]!==!0&&(F=q[0],oe.unshift(q[1]));break}}if(O!==!0)if(O&&L.throws)j=O(j);else try{j=O(j)}catch(fe){return{state:"parsererror",error:O?fe:"No conversion from "+H+" to "+F}}}}return{state:"success",data:j}}return n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:r.href,type:"GET",isLocal:k.test(r.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":v,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(L,j){return j?w(w(L,n.ajaxSettings),j):w(n.ajaxSettings,L)},ajaxPrefilter:E(b),ajaxTransport:E(A),ajax:function(L,j){typeof L=="object"&&(j=L,L=void 0),j=j||{};var U,Y,x,F,O,q,H,Q,oe,fe,Z=n.ajaxSetup({},j),ye=Z.context||Z,ke=Z.context&&(ye.nodeType||ye.jquery)?n(ye):n.event,Ne=n.Deferred(),Qe=n.Callbacks("once memory"),ma=Z.statusCode||{},Na={},va={},xa="canceled",Ke={readyState:0,getResponseHeader:function(Me){var Je;if(H){if(!F)for(F={};Je=u.exec(x);)F[Je[1].toLowerCase()+" "]=(F[Je[1].toLowerCase()+" "]||[]).concat(Je[2]);Je=F[Me.toLowerCase()+" "]}return Je==null?null:Je.join(", ")},getAllResponseHeaders:function(){return H?x:null},setRequestHeader:function(Me,Je){return H==null&&(Me=va[Me.toLowerCase()]=va[Me.toLowerCase()]||Me,Na[Me]=Je),this},overrideMimeType:function(Me){return H==null&&(Z.mimeType=Me),this},statusCode:function(Me){var Je;if(Me)if(H)Ke.always(Me[Ke.status]);else for(Je in Me)ma[Je]=[ma[Je],Me[Je]];return this},abort:function(Me){var Je=Me||xa;return U&&U.abort(Je),Aa(0,Je),this}};if(Ne.promise(Ke),Z.url=((L||Z.url||r.href)+"").replace(P,r.protocol+"//"),Z.type=j.method||j.type||Z.method||Z.type,Z.dataTypes=(Z.dataType||"*").toLowerCase().match(o)||[""],Z.crossDomain==null){q=d.createElement("a");try{q.href=Z.url,q.href=q.href,Z.crossDomain=B.protocol+"//"+B.host!=q.protocol+"//"+q.host}catch(Me){Z.crossDomain=!0}}if(Z.data&&Z.processData&&typeof Z.data!="string"&&(Z.data=n.param(Z.data,Z.traditional)),K(b,Z,j,Ke),H)return Ke;Q=n.event&&Z.global,Q&&n.active++===0&&n.event.trigger("ajaxStart"),Z.type=Z.type.toUpperCase(),Z.hasContent=!y.test(Z.type),Y=Z.url.replace(m,""),Z.hasContent?Z.data&&Z.processData&&(Z.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(Z.data=Z.data.replace(i,"+")):(fe=Z.url.slice(Y.length),Z.data&&(Z.processData||typeof Z.data=="string")&&(Y+=(h.test(Y)?"&":"?")+Z.data,delete Z.data),Z.cache===!1&&(Y=Y.replace(f,"$1"),fe=(h.test(Y)?"&":"?")+"_="+l.guid+++fe),Z.url=Y+fe),Z.ifModified&&(n.lastModified[Y]&&Ke.setRequestHeader("If-Modified-Since",n.lastModified[Y]),n.etag[Y]&&Ke.setRequestHeader("If-None-Match",n.etag[Y])),(Z.data&&Z.hasContent&&Z.contentType!==!1||j.contentType)&&Ke.setRequestHeader("Content-Type",Z.contentType),Ke.setRequestHeader("Accept",Z.dataTypes[0]&&Z.accepts[Z.dataTypes[0]]?Z.accepts[Z.dataTypes[0]]+(Z.dataTypes[0]!=="*"?", "+v+"; q=0.01":""):Z.accepts["*"]);for(oe in Z.headers)Ke.setRequestHeader(oe,Z.headers[oe]);if(Z.beforeSend&&(Z.beforeSend.call(ye,Ke,Z)===!1||H))return Ke.abort();if(xa="abort",Qe.add(Z.complete),Ke.done(Z.success),Ke.fail(Z.error),U=K(A,Z,j,Ke),!U)Aa(-1,"No Transport");else{if(Ke.readyState=1,Q&&ke.trigger("ajaxSend",[Ke,Z]),H)return Ke;Z.async&&Z.timeout>0&&(O=window.setTimeout(function(){Ke.abort("timeout")},Z.timeout));try{H=!1,U.send(Na,Aa)}catch(Me){if(H)throw Me;Aa(-1,Me)}}function Aa(Me,Je,Za,mn){var na,we,ue,Ee,ve,V=Je;H||(H=!0,O&&window.clearTimeout(O),U=void 0,x=mn||"",Ke.readyState=Me>0?4:0,na=Me>=200&&Me<300||Me===304,Za&&(Ee=D(Z,Ke,Za)),!na&&n.inArray("script",Z.dataTypes)>-1&&n.inArray("json",Z.dataTypes)<0&&(Z.converters["text script"]=function(){}),Ee=S(Z,Ee,Ke,na),na?(Z.ifModified&&(ve=Ke.getResponseHeader("Last-Modified"),ve&&(n.lastModified[Y]=ve),ve=Ke.getResponseHeader("etag"),ve&&(n.etag[Y]=ve)),Me===204||Z.type==="HEAD"?V="nocontent":Me===304?V="notmodified":(V=Ee.state,we=Ee.data,ue=Ee.error,na=!ue)):(ue=V,(Me||!V)&&(V="error",Me<0&&(Me=0))),Ke.status=Me,Ke.statusText=(Je||V)+"",na?Ne.resolveWith(ye,[we,V,Ke]):Ne.rejectWith(ye,[Ke,V,ue]),Ke.statusCode(ma),ma=void 0,Q&&ke.trigger(na?"ajaxSuccess":"ajaxError",[Ke,Z,na?we:ue]),Qe.fireWith(ye,[Ke,V]),Q&&(ke.trigger("ajaxComplete",[Ke,Z]),--n.active||n.event.trigger("ajaxStop")))}return Ke},getJSON:function(L,j,U){return n.get(L,j,U,"json")},getScript:function(L,j){return n.get(L,void 0,j,"script")}}),n.each(["get","post"],function(L,j){n[j]=function(U,Y,x,F){return c(Y)&&(F=F||x,x=Y,Y=void 0),n.ajax(n.extend({url:U,type:j,dataType:F,data:Y,success:x},n.isPlainObject(U)&&U))}}),n.ajaxPrefilter(function(L){var j;for(j in L.headers)j.toLowerCase()==="content-type"&&(L.contentType=L.headers[j]||"")}),n}.apply(_,g),t!==void 0&&(N.exports=t)},8202:(N,_,s)=>{var g,t;g=[s(8215),s(232),s(4406),s(2711),s(3689)],t=function(n,d,c,o){"use strict";var r=[],l=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var h=r.pop()||n.expando+"_"+c.guid++;return this[h]=!0,h}}),n.ajaxPrefilter("json jsonp",function(h,i,m){var f,u,k,y=h.jsonp!==!1&&(l.test(h.url)?"url":typeof h.data=="string"&&(h.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&l.test(h.data)&&"data");if(y||h.dataTypes[0]==="jsonp")return f=h.jsonpCallback=d(h.jsonpCallback)?h.jsonpCallback():h.jsonpCallback,y?h[y]=h[y].replace(l,"$1"+f):h.jsonp!==!1&&(h.url+=(o.test(h.url)?"&":"?")+h.jsonp+"="+f),h.converters["script json"]=function(){return k||n.error(f+" was not called"),k[0]},h.dataTypes[0]="json",u=window[f],window[f]=function(){k=arguments},m.always(function(){u===void 0?n(window).removeProp(f):window[f]=u,h[f]&&(h.jsonpCallback=i.jsonpCallback,r.push(f)),k&&d(u)&&u(k[0]),k=u=void 0}),"script"})}.apply(_,g),t!==void 0&&(N.exports=t)},7092:(N,_,s)=>{var g,t;g=[s(8215),s(931),s(232),s(1087),s(3689),s(7167),s(3330),s(497)],t=function(n,d,c){"use strict";n.fn.load=function(o,r,l){var h,i,m,f=this,u=o.indexOf(" ");return u>-1&&(h=d(o.slice(u)),o=o.slice(0,u)),c(r)?(l=r,r=void 0):r&&typeof r=="object"&&(i="POST"),f.length>0&&n.ajax({url:o,type:i||"GET",dataType:"html",data:r}).done(function(k){m=arguments,f.html(h?n("<div>").append(n.parseHTML(k)).find(h):k)}).always(l&&function(k,y){f.each(function(){l.apply(this,m||[k.responseText,y,k])})}),this}}.apply(_,g),t!==void 0&&(N.exports=t)},9028:(N,_,s)=>{var g,t;g=[s(8215),s(6066),s(3689)],t=function(n,d){"use strict";n.ajaxPrefilter(function(c){c.crossDomain&&(c.contents.script=!1)}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(c){return n.globalEval(c),c}}}),n.ajaxPrefilter("script",function(c){c.cache===void 0&&(c.cache=!1),c.crossDomain&&(c.type="GET")}),n.ajaxTransport("script",function(c){if(c.crossDomain||c.scriptAttrs){var o,r;return{send:function(l,h){o=n("<script>").attr(c.scriptAttrs||{}).prop({charset:c.scriptCharset,src:c.url}).on("load error",r=function(i){o.remove(),r=null,i&&h(i.type==="error"?404:200,i.type)}),d.head.appendChild(o[0])},abort:function(){r&&r()}}}})}.apply(_,g),t!==void 0&&(N.exports=t)},8914:(N,_,s)=>{var g;g=function(){"use strict";return window.location}.call(_,s,_,N),g!==void 0&&(N.exports=g)},4406:(N,_,s)=>{var g;g=function(){"use strict";return{guid:Date.now()}}.call(_,s,_,N),g!==void 0&&(N.exports=g)},2711:(N,_,s)=>{var g;g=function(){"use strict";return/\?/}.call(_,s,_,N),g!==void 0&&(N.exports=g)},5848:(N,_,s)=>{var g,t;g=[s(8215),s(5796),s(3689)],t=function(n,d){"use strict";n.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest}catch(r){}};var c={0:200,1223:204},o=n.ajaxSettings.xhr();d.cors=!!o&&"withCredentials"in o,d.ajax=o=!!o,n.ajaxTransport(function(r){var l,h;if(d.cors||o&&!r.crossDomain)return{send:function(i,m){var f,u=r.xhr();if(u.open(r.type,r.url,r.async,r.username,r.password),r.xhrFields)for(f in r.xhrFields)u[f]=r.xhrFields[f];r.mimeType&&u.overrideMimeType&&u.overrideMimeType(r.mimeType),!r.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");for(f in i)u.setRequestHeader(f,i[f]);l=function(k){return function(){l&&(l=h=u.onload=u.onerror=u.onabort=u.ontimeout=u.onreadystatechange=null,k==="abort"?u.abort():k==="error"?typeof u.status!="number"?m(0,"error"):m(u.status,u.statusText):m(c[u.status]||u.status,u.statusText,(u.responseType||"text")!=="text"||typeof u.responseText!="string"?{binary:u.response}:{text:u.responseText},u.getAllResponseHeaders()))}},u.onload=l(),h=u.onerror=u.ontimeout=l("error"),u.onabort!==void 0?u.onabort=h:u.onreadystatechange=function(){u.readyState===4&&window.setTimeout(function(){l&&h()})},l=l("abort");try{u.send(r.hasContent&&r.data||null)}catch(k){if(l)throw k}},abort:function(){l&&l()}}})}.apply(_,g),t!==void 0&&(N.exports=t)},1457:(N,_,s)=>{var g,t;g=[s(8215),s(3732),s(4162),s(6562),s(1836)],t=function(n){"use strict";return n}.apply(_,g),t!==void 0&&(N.exports=t)},3732:(N,_,s)=>{var g,t;g=[s(8215),s(5946),s(8803),s(6230),s(9059),s(497)],t=function(n,d,c,o,r){"use strict";var l,h=n.expr.attrHandle;n.fn.extend({attr:function(i,m){return d(this,n.attr,i,m,arguments.length>1)},removeAttr:function(i){return this.each(function(){n.removeAttr(this,i)})}}),n.extend({attr:function(i,m,f){var u,k,y=i.nodeType;if(!(y===3||y===8||y===2)){if(typeof i.getAttribute=="undefined")return n.prop(i,m,f);if((y!==1||!n.isXMLDoc(i))&&(k=n.attrHooks[m.toLowerCase()]||(n.expr.match.bool.test(m)?l:void 0)),f!==void 0){if(f===null){n.removeAttr(i,m);return}return k&&"set"in k&&(u=k.set(i,f,m))!==void 0?u:(i.setAttribute(m,f+""),f)}return k&&"get"in k&&(u=k.get(i,m))!==null?u:(u=n.find.attr(i,m),u==null?void 0:u)}},attrHooks:{type:{set:function(i,m){if(!o.radioValue&&m==="radio"&&c(i,"input")){var f=i.value;return i.setAttribute("type",m),f&&(i.value=f),m}}}},removeAttr:function(i,m){var f,u=0,k=m&&m.match(r);if(k&&i.nodeType===1)for(;f=k[u++];)i.removeAttribute(f)}}),l={set:function(i,m,f){return m===!1?n.removeAttr(i,f):i.setAttribute(f,f),f}},n.each(n.expr.match.bool.source.match(/\w+/g),function(i,m){var f=h[m]||n.find.attr;h[m]=function(u,k,y){var P,b,A=k.toLowerCase();return y||(b=h[A],h[A]=P,P=f(u,k,y)!=null?A:null,h[A]=b),P}})}.apply(_,g),t!==void 0&&(N.exports=t)},6562:(N,_,s)=>{var g,t;g=[s(8215),s(931),s(232),s(9059),s(4521),s(9441)],t=function(n,d,c,o,r){"use strict";function l(i){return i.getAttribute&&i.getAttribute("class")||""}function h(i){return Array.isArray(i)?i:typeof i=="string"?i.match(o)||[]:[]}n.fn.extend({addClass:function(i){var m,f,u,k,y,P;return c(i)?this.each(function(b){n(this).addClass(i.call(this,b,l(this)))}):(m=h(i),m.length?this.each(function(){if(u=l(this),f=this.nodeType===1&&" "+d(u)+" ",f){for(y=0;y<m.length;y++)k=m[y],f.indexOf(" "+k+" ")<0&&(f+=k+" ");P=d(f),u!==P&&this.setAttribute("class",P)}}):this)},removeClass:function(i){var m,f,u,k,y,P;return c(i)?this.each(function(b){n(this).removeClass(i.call(this,b,l(this)))}):arguments.length?(m=h(i),m.length?this.each(function(){if(u=l(this),f=this.nodeType===1&&" "+d(u)+" ",f){for(y=0;y<m.length;y++)for(k=m[y];f.indexOf(" "+k+" ")>-1;)f=f.replace(" "+k+" "," ");P=d(f),u!==P&&this.setAttribute("class",P)}}):this):this.attr("class","")},toggleClass:function(i,m){var f,u,k,y,P=typeof i,b=P==="string"||Array.isArray(i);return c(i)?this.each(function(A){n(this).toggleClass(i.call(this,A,l(this),m),m)}):typeof m=="boolean"&&b?m?this.addClass(i):this.removeClass(i):(f=h(i),this.each(function(){if(b)for(y=n(this),k=0;k<f.length;k++)u=f[k],y.hasClass(u)?y.removeClass(u):y.addClass(u);else(i===void 0||P==="boolean")&&(u=l(this),u&&r.set(this,"__className__",u),this.setAttribute&&this.setAttribute("class",u||i===!1?"":r.get(this,"__className__")||""))}))},hasClass:function(i){var m,f,u=0;for(m=" "+i+" ";f=this[u++];)if(f.nodeType===1&&(" "+d(l(f))+" ").indexOf(m)>-1)return!0;return!1}})}.apply(_,g),t!==void 0&&(N.exports=t)},4162:(N,_,s)=>{var g,t;g=[s(8215),s(5946),s(6230),s(497)],t=function(n,d,c){"use strict";var o=/^(?:input|select|textarea|button)$/i,r=/^(?:a|area)$/i;n.fn.extend({prop:function(l,h){return d(this,n.prop,l,h,arguments.length>1)},removeProp:function(l){return this.each(function(){delete this[n.propFix[l]||l]})}}),n.extend({prop:function(l,h,i){var m,f,u=l.nodeType;if(!(u===3||u===8||u===2))return(u!==1||!n.isXMLDoc(l))&&(h=n.propFix[h]||h,f=n.propHooks[h]),i!==void 0?f&&"set"in f&&(m=f.set(l,i,h))!==void 0?m:l[h]=i:f&&"get"in f&&(m=f.get(l,h))!==null?m:l[h]},propHooks:{tabIndex:{get:function(l){var h=n.find.attr(l,"tabindex");return h?parseInt(h,10):o.test(l.nodeName)||r.test(l.nodeName)&&l.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),c.optSelected||(n.propHooks.selected={get:function(l){var h=l.parentNode;return h&&h.parentNode&&h.parentNode.selectedIndex,null},set:function(l){var h=l.parentNode;h&&(h.selectedIndex,h.parentNode&&h.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this})}.apply(_,g),t!==void 0&&(N.exports=t)},6230:(N,_,s)=>{var g,t;g=[s(6066),s(5796)],t=function(n,d){"use strict";return function(){var c=n.createElement("input"),o=n.createElement("select"),r=o.appendChild(n.createElement("option"));c.type="checkbox",d.checkOn=c.value!=="",d.optSelected=r.selected,c=n.createElement("input"),c.value="t",c.type="radio",d.radioValue=c.value==="t"}(),d}.apply(_,g),t!==void 0&&(N.exports=t)},1836:(N,_,s)=>{var g,t;g=[s(8215),s(931),s(6230),s(8803),s(232),s(9441)],t=function(n,d,c,o,r){"use strict";var l=/\r/g;n.fn.extend({val:function(h){var i,m,f,u=this[0];return arguments.length?(f=r(h),this.each(function(k){var y;this.nodeType===1&&(f?y=h.call(this,k,n(this).val()):y=h,y==null?y="":typeof y=="number"?y+="":Array.isArray(y)&&(y=n.map(y,function(P){return P==null?"":P+""})),i=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],(!i||!("set"in i)||i.set(this,y,"value")===void 0)&&(this.value=y))})):u?(i=n.valHooks[u.type]||n.valHooks[u.nodeName.toLowerCase()],i&&"get"in i&&(m=i.get(u,"value"))!==void 0?m:(m=u.value,typeof m=="string"?m.replace(l,""):m==null?"":m)):void 0}}),n.extend({valHooks:{option:{get:function(h){var i=n.find.attr(h,"value");return i!=null?i:d(n.text(h))}},select:{get:function(h){var i,m,f,u=h.options,k=h.selectedIndex,y=h.type==="select-one",P=y?null:[],b=y?k+1:u.length;for(k<0?f=b:f=y?k:0;f<b;f++)if(m=u[f],(m.selected||f===k)&&!m.disabled&&(!m.parentNode.disabled||!o(m.parentNode,"optgroup"))){if(i=n(m).val(),y)return i;P.push(i)}return P},set:function(h,i){for(var m,f,u=h.options,k=n.makeArray(i),y=u.length;y--;)f=u[y],(f.selected=n.inArray(n.valHooks.option.get(f),k)>-1)&&(m=!0);return m||(h.selectedIndex=-1),k}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(h,i){if(Array.isArray(i))return h.checked=n.inArray(n(h).val(),i)>-1}},c.checkOn||(n.valHooks[this].get=function(h){return h.getAttribute("value")===null?"on":h.value})})}.apply(_,g),t!==void 0&&(N.exports=t)},9559:(N,_,s)=>{var g,t;g=[s(8215),s(8060),s(232),s(9059)],t=function(n,d,c,o){"use strict";function r(l){var h={};return n.each(l.match(o)||[],function(i,m){h[m]=!0}),h}return n.Callbacks=function(l){l=typeof l=="string"?r(l):n.extend({},l);var h,i,m,f,u=[],k=[],y=-1,P=function(){for(f=f||l.once,m=h=!0;k.length;y=-1)for(i=k.shift();++y<u.length;)u[y].apply(i[0],i[1])===!1&&l.stopOnFalse&&(y=u.length,i=!1);l.memory||(i=!1),h=!1,f&&(i?u=[]:u="")},b={add:function(){return u&&(i&&!h&&(y=u.length-1,k.push(i)),function A(v){n.each(v,function(B,E){c(E)?(!l.unique||!b.has(E))&&u.push(E):E&&E.length&&d(E)!=="string"&&A(E)})}(arguments),i&&!h&&P()),this},remove:function(){return n.each(arguments,function(A,v){for(var B;(B=n.inArray(v,u,B))>-1;)u.splice(B,1),B<=y&&y--}),this},has:function(A){return A?n.inArray(A,u)>-1:u.length>0},empty:function(){return u&&(u=[]),this},disable:function(){return f=k=[],u=i="",this},disabled:function(){return!u},lock:function(){return f=k=[],!i&&!h&&(u=i=""),this},locked:function(){return!!f},fireWith:function(A,v){return f||(v=v||[],v=[A,v.slice?v.slice():v],k.push(v),h||P()),this},fire:function(){return b.fireWith(this,arguments),this},fired:function(){return!!m}};return b},n}.apply(_,g),t!==void 0&&(N.exports=t)},8215:(N,_,s)=>{var g,t;g=[s(8858),s(2465),s(4142),s(2066),s(4663),s(6917),s(3936),s(2011),s(2143),s(3877),s(6342),s(5796),s(232),s(1736),s(5069),s(8060)],t=function(n,d,c,o,r,l,h,i,m,f,u,k,y,P,b,A){"use strict";var v="3.7.0",B=/HTML$/i,E=function(w,D){return new E.fn.init(w,D)};E.fn=E.prototype={jquery:v,constructor:E,length:0,toArray:function(){return c.call(this)},get:function(w){return w==null?c.call(this):w<0?this[w+this.length]:this[w]},pushStack:function(w){var D=E.merge(this.constructor(),w);return D.prevObject=this,D},each:function(w){return E.each(this,w)},map:function(w){return this.pushStack(E.map(this,function(D,S){return w.call(D,S,D)}))},slice:function(){return this.pushStack(c.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(E.grep(this,function(w,D){return(D+1)%2}))},odd:function(){return this.pushStack(E.grep(this,function(w,D){return D%2}))},eq:function(w){var D=this.length,S=+w+(w<0?D:0);return this.pushStack(S>=0&&S<D?[this[S]]:[])},end:function(){return this.prevObject||this.constructor()},push:r,sort:n.sort,splice:n.splice},E.extend=E.fn.extend=function(){var w,D,S,L,j,U,Y=arguments[0]||{},x=1,F=arguments.length,O=!1;for(typeof Y=="boolean"&&(O=Y,Y=arguments[x]||{},x++),typeof Y!="object"&&!y(Y)&&(Y={}),x===F&&(Y=this,x--);x<F;x++)if((w=arguments[x])!=null)for(D in w)L=w[D],!(D==="__proto__"||Y===L)&&(O&&L&&(E.isPlainObject(L)||(j=Array.isArray(L)))?(S=Y[D],j&&!Array.isArray(S)?U=[]:!j&&!E.isPlainObject(S)?U={}:U=S,j=!1,Y[D]=E.extend(O,U,L)):L!==void 0&&(Y[D]=L));return Y},E.extend({expando:"jQuery"+(v+Math.random()).replace(/\D/g,""),isReady:!0,error:function(w){throw new Error(w)},noop:function(){},isPlainObject:function(w){var D,S;return!w||i.call(w)!=="[object Object]"?!1:(D=d(w),D?(S=m.call(D,"constructor")&&D.constructor,typeof S=="function"&&f.call(S)===u):!0)},isEmptyObject:function(w){var D;for(D in w)return!1;return!0},globalEval:function(w,D,S){b(w,{nonce:D&&D.nonce},S)},each:function(w,D){var S,L=0;if(K(w))for(S=w.length;L<S&&D.call(w[L],L,w[L])!==!1;L++);else for(L in w)if(D.call(w[L],L,w[L])===!1)break;return w},text:function(w){var D,S="",L=0,j=w.nodeType;if(j){if(j===1||j===9||j===11)return w.textContent;if(j===3||j===4)return w.nodeValue}else for(;D=w[L++];)S+=E.text(D);return S},makeArray:function(w,D){var S=D||[];return w!=null&&(K(Object(w))?E.merge(S,typeof w=="string"?[w]:w):r.call(S,w)),S},inArray:function(w,D,S){return D==null?-1:l.call(D,w,S)},isXMLDoc:function(w){var D=w&&w.namespaceURI,S=w&&(w.ownerDocument||w).documentElement;return!B.test(D||S&&S.nodeName||"HTML")},merge:function(w,D){for(var S=+D.length,L=0,j=w.length;L<S;L++)w[j++]=D[L];return w.length=j,w},grep:function(w,D,S){for(var L,j=[],U=0,Y=w.length,x=!S;U<Y;U++)L=!D(w[U],U),L!==x&&j.push(w[U]);return j},map:function(w,D,S){var L,j,U=0,Y=[];if(K(w))for(L=w.length;U<L;U++)j=D(w[U],U,S),j!=null&&Y.push(j);else for(U in w)j=D(w[U],U,S),j!=null&&Y.push(j);return o(Y)},guid:1,support:k}),typeof Symbol=="function"&&(E.fn[Symbol.iterator]=n[Symbol.iterator]),E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(w,D){h["[object "+D+"]"]=D.toLowerCase()});function K(w){var D=!!w&&"length"in w&&w.length,S=A(w);return y(w)||P(w)?!1:S==="array"||D===0||typeof D=="number"&&D>0&&D-1 in w}return E}.apply(_,g),t!==void 0&&(N.exports=t)},5069:(N,_,s)=>{var g,t;g=[s(6066)],t=function(n){"use strict";var d={type:!0,src:!0,nonce:!0,noModule:!0};function c(o,r,l){l=l||n;var h,i,m=l.createElement("script");if(m.text=o,r)for(h in d)i=r[h]||r.getAttribute&&r.getAttribute(h),i&&m.setAttribute(h,i);l.head.appendChild(m).parentNode.removeChild(m)}return c}.apply(_,g),t!==void 0&&(N.exports=t)},5946:(N,_,s)=>{var g,t;g=[s(8215),s(8060),s(232)],t=function(n,d,c){"use strict";var o=function(r,l,h,i,m,f,u){var k=0,y=r.length,P=h==null;if(d(h)==="object"){m=!0;for(k in h)o(r,l,k,h[k],!0,f,u)}else if(i!==void 0&&(m=!0,c(i)||(u=!0),P&&(u?(l.call(r,i),l=null):(P=l,l=function(b,A,v){return P.call(n(b),v)})),l))for(;k<y;k++)l(r[k],h,u?i:i.call(r[k],k,l(r[k],h)));return m?r:P?l.call(r):y?l(r[0],h):f};return o}.apply(_,g),t!==void 0&&(N.exports=t)},2538:(N,_)=>{var s,g;s=[],g=function(){"use strict";var t=/^-ms-/,n=/-([a-z])/g;function d(o,r){return r.toUpperCase()}function c(o){return o.replace(t,"ms-").replace(n,d)}return c}.apply(_,s),g!==void 0&&(N.exports=g)},9441:(N,_,s)=>{var g,t;g=[s(8215),s(6066),s(232),s(6346),s(0)],t=function(n,d,c,o){"use strict";var r,l=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,h=n.fn.init=function(i,m,f){var u,k;if(!i)return this;if(f=f||r,typeof i=="string")if(i[0]==="<"&&i[i.length-1]===">"&&i.length>=3?u=[null,i,null]:u=l.exec(i),u&&(u[1]||!m))if(u[1]){if(m=m instanceof n?m[0]:m,n.merge(this,n.parseHTML(u[1],m&&m.nodeType?m.ownerDocument||m:d,!0)),o.test(u[1])&&n.isPlainObject(m))for(u in m)c(this[u])?this[u](m[u]):this.attr(u,m[u]);return this}else return k=d.getElementById(u[2]),k&&(this[0]=k,this.length=1),this;else return!m||m.jquery?(m||f).find(i):this.constructor(m).find(i);else{if(i.nodeType)return this[0]=i,this.length=1,this;if(c(i))return f.ready!==void 0?f.ready(i):i(n)}return n.makeArray(i,this)};return h.prototype=n.fn,r=n(d),h}.apply(_,g),t!==void 0&&(N.exports=t)},3e3:(N,_,s)=>{var g,t;g=[s(8215),s(1768),s(6435)],t=function(n,d){"use strict";var c=function(r){return n.contains(r.ownerDocument,r)},o={composed:!0};return d.getRootNode&&(c=function(r){return n.contains(r.ownerDocument,r)||r.getRootNode(o)===r.ownerDocument}),c}.apply(_,g),t!==void 0&&(N.exports=t)},8803:(N,_,s)=>{var g;g=function(){"use strict";function t(n,d){return n.nodeName&&n.nodeName.toLowerCase()===d.toLowerCase()}return t}.call(_,s,_,N),g!==void 0&&(N.exports=g)},1087:(N,_,s)=>{var g,t;g=[s(8215),s(6066),s(6346),s(7731),s(105)],t=function(n,d,c,o,r){"use strict";return n.parseHTML=function(l,h,i){if(typeof l!="string")return[];typeof h=="boolean"&&(i=h,h=!1);var m,f,u;return h||(r.createHTMLDocument?(h=d.implementation.createHTMLDocument(""),m=h.createElement("base"),m.href=d.location.href,h.head.appendChild(m)):h=d),f=c.exec(l),u=!i&&[],f?[h.createElement(f[1])]:(f=o([l],h,u),u&&u.length&&n(u).remove(),n.merge([],f.childNodes))},n.parseHTML}.apply(_,g),t!==void 0&&(N.exports=t)},758:(N,_,s)=>{var g,t;g=[s(8215)],t=function(n){"use strict";return n.parseXML=function(d){var c,o;if(!d||typeof d!="string")return null;try{c=new window.DOMParser().parseFromString(d,"text/xml")}catch(r){}return o=c&&c.getElementsByTagName("parsererror")[0],(!c||o)&&n.error("Invalid XML: "+(o?n.map(o.childNodes,function(r){return r.textContent}).join(`
`):d)),c},n.parseXML}.apply(_,g),t!==void 0&&(N.exports=t)},2525:(N,_,s)=>{var g,t;g=[s(8215),s(6066),s(1946),s(2042)],t=function(n,d){"use strict";var c=n.Deferred();n.fn.ready=function(r){return c.then(r).catch(function(l){n.readyException(l)}),this},n.extend({isReady:!1,readyWait:1,ready:function(r){(r===!0?--n.readyWait:n.isReady)||(n.isReady=!0,!(r!==!0&&--n.readyWait>0)&&c.resolveWith(d,[n]))}}),n.ready.then=c.then;function o(){d.removeEventListener("DOMContentLoaded",o),window.removeEventListener("load",o),n.ready()}d.readyState==="complete"||d.readyState!=="loading"&&!d.documentElement.doScroll?window.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",o),window.addEventListener("load",o))}.apply(_,g),t!==void 0&&(N.exports=t)},1946:(N,_,s)=>{var g,t;g=[s(8215)],t=function(n){"use strict";n.readyException=function(d){window.setTimeout(function(){throw d})}}.apply(_,g),t!==void 0&&(N.exports=t)},931:(N,_,s)=>{var g,t;g=[s(9059)],t=function(n){"use strict";function d(c){var o=c.match(n)||[];return o.join(" ")}return d}.apply(_,g),t!==void 0&&(N.exports=t)},105:(N,_,s)=>{var g,t;g=[s(6066),s(5796)],t=function(n,d){"use strict";return d.createHTMLDocument=function(){var c=n.implementation.createHTMLDocument("").body;return c.innerHTML="<form></form><form></form>",c.childNodes.length===2}(),d}.apply(_,g),t!==void 0&&(N.exports=t)},8060:(N,_,s)=>{var g,t;g=[s(3936),s(2011)],t=function(n,d){"use strict";function c(o){return o==null?o+"":typeof o=="object"||typeof o=="function"?n[d.call(o)]||"object":typeof o}return c}.apply(_,g),t!==void 0&&(N.exports=t)},6346:(N,_,s)=>{var g;g=function(){"use strict";return/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i}.call(_,s,_,N),g!==void 0&&(N.exports=g)},9006:(N,_,s)=>{var g,t;g=[s(8215),s(5946),s(2538),s(8803),s(9806),s(1281),s(1249),s(5743),s(9309),s(3096),s(1337),s(8404),s(1426),s(9730),s(829),s(9441),s(2525),s(497)],t=function(n,d,c,o,r,l,h,i,m,f,u,k,y,P,b){"use strict";var A=/^(none|table(?!-c[ea]).+)/,v={position:"absolute",visibility:"hidden",display:"block"},B={letterSpacing:"0",fontWeight:"400"};function E(D,S,L){var j=r.exec(S);return j?Math.max(0,j[2]-(L||0))+(j[3]||"px"):S}function K(D,S,L,j,U,Y){var x=S==="width"?1:0,F=0,O=0,q=0;if(L===(j?"border":"content"))return 0;for(;x<4;x+=2)L==="margin"&&(q+=n.css(D,L+i[x],!0,U)),j?(L==="content"&&(O-=n.css(D,"padding"+i[x],!0,U)),L!=="margin"&&(O-=n.css(D,"border"+i[x]+"Width",!0,U))):(O+=n.css(D,"padding"+i[x],!0,U),L!=="padding"?O+=n.css(D,"border"+i[x]+"Width",!0,U):F+=n.css(D,"border"+i[x]+"Width",!0,U));return!j&&Y>=0&&(O+=Math.max(0,Math.ceil(D["offset"+S[0].toUpperCase()+S.slice(1)]-Y-O-F-.5))||0),O+q}function w(D,S,L){var j=m(D),U=!P.boxSizingReliable()||L,Y=U&&n.css(D,"boxSizing",!1,j)==="border-box",x=Y,F=u(D,S,j),O="offset"+S[0].toUpperCase()+S.slice(1);if(l.test(F)){if(!L)return F;F="auto"}return(!P.boxSizingReliable()&&Y||!P.reliableTrDimensions()&&o(D,"tr")||F==="auto"||!parseFloat(F)&&n.css(D,"display",!1,j)==="inline")&&D.getClientRects().length&&(Y=n.css(D,"boxSizing",!1,j)==="border-box",x=O in D,x&&(F=D[O])),F=parseFloat(F)||0,F+K(D,S,L||(Y?"border":"content"),x,j,F)+"px"}return n.extend({cssHooks:{opacity:{get:function(D,S){if(S){var L=u(D,"opacity");return L===""?"1":L}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(D,S,L,j){if(!(!D||D.nodeType===3||D.nodeType===8||!D.style)){var U,Y,x,F=c(S),O=h.test(S),q=D.style;if(O||(S=b(F)),x=n.cssHooks[S]||n.cssHooks[F],L!==void 0){if(Y=typeof L,Y==="string"&&(U=r.exec(L))&&U[1]&&(L=k(D,S,U),Y="number"),L==null||L!==L)return;Y==="number"&&!O&&(L+=U&&U[3]||(n.cssNumber[F]?"":"px")),!P.clearCloneStyle&&L===""&&S.indexOf("background")===0&&(q[S]="inherit"),(!x||!("set"in x)||(L=x.set(D,L,j))!==void 0)&&(O?q.setProperty(S,L):q[S]=L)}else return x&&"get"in x&&(U=x.get(D,!1,j))!==void 0?U:q[S]}},css:function(D,S,L,j){var U,Y,x,F=c(S),O=h.test(S);return O||(S=b(F)),x=n.cssHooks[S]||n.cssHooks[F],x&&"get"in x&&(U=x.get(D,!0,L)),U===void 0&&(U=u(D,S,j)),U==="normal"&&S in B&&(U=B[S]),L===""||L?(Y=parseFloat(U),L===!0||isFinite(Y)?Y||0:U):U}}),n.each(["height","width"],function(D,S){n.cssHooks[S]={get:function(L,j,U){if(j)return A.test(n.css(L,"display"))&&(!L.getClientRects().length||!L.getBoundingClientRect().width)?f(L,v,function(){return w(L,S,U)}):w(L,S,U)},set:function(L,j,U){var Y,x=m(L),F=!P.scrollboxSize()&&x.position==="absolute",O=F||U,q=O&&n.css(L,"boxSizing",!1,x)==="border-box",H=U?K(L,S,U,q,x):0;return q&&F&&(H-=Math.ceil(L["offset"+S[0].toUpperCase()+S.slice(1)]-parseFloat(x[S])-K(L,S,"border",!1,x)-.5)),H&&(Y=r.exec(j))&&(Y[3]||"px")!=="px"&&(L.style[S]=j,j=n.css(L,S)),E(L,j,H)}}}),n.cssHooks.marginLeft=y(P.reliableMarginLeft,function(D,S){if(S)return(parseFloat(u(D,"marginLeft"))||D.getBoundingClientRect().left-f(D,{marginLeft:0},function(){return D.getBoundingClientRect().left}))+"px"}),n.each({margin:"",padding:"",border:"Width"},function(D,S){n.cssHooks[D+S]={expand:function(L){for(var j=0,U={},Y=typeof L=="string"?L.split(" "):[L];j<4;j++)U[D+i[j]+S]=Y[j]||Y[j-2]||Y[0];return U}},D!=="margin"&&(n.cssHooks[D+S].set=E)}),n.fn.extend({css:function(D,S){return d(this,function(L,j,U){var Y,x,F={},O=0;if(Array.isArray(j)){for(Y=m(L),x=j.length;O<x;O++)F[j[O]]=n.css(L,j[O],!1,Y);return F}return U!==void 0?n.style(L,j,U):n.css(L,j)},D,S,arguments.length>1)}}),n}.apply(_,g),t!==void 0&&(N.exports=t)},1426:(N,_,s)=>{var g;g=function(){"use strict";function t(n,d){return{get:function(){if(n()){delete this.get;return}return(this.get=d).apply(this,arguments)}}}return t}.call(_,s,_,N),g!==void 0&&(N.exports=g)},8404:(N,_,s)=>{var g,t;g=[s(8215),s(9806)],t=function(n,d){"use strict";function c(o,r,l,h){var i,m,f=20,u=h?function(){return h.cur()}:function(){return n.css(o,r,"")},k=u(),y=l&&l[3]||(n.cssNumber[r]?"":"px"),P=o.nodeType&&(n.cssNumber[r]||y!=="px"&&+k)&&d.exec(n.css(o,r));if(P&&P[3]!==y){for(k=k/2,y=y||P[3],P=+k||1;f--;)n.style(o,r,P+y),(1-m)*(1-(m=u()/k||.5))<=0&&(f=0),P=P/m;P=P*2,n.style(o,r,P+y),l=l||[]}return l&&(P=+P||+k||0,i=l[1]?P+(l[1]+1)*l[2]:+l[2],h&&(h.unit=y,h.start=P,h.end=i)),i}return c}.apply(_,g),t!==void 0&&(N.exports=t)},1337:(N,_,s)=>{var g,t;g=[s(8215),s(3e3),s(6090),s(1281),s(9309),s(1249),s(3948),s(9730)],t=function(n,d,c,o,r,l,h,i){"use strict";function m(f,u,k){var y,P,b,A,v=l.test(u),B=f.style;return k=k||r(f),k&&(A=k.getPropertyValue(u)||k[u],v&&A&&(A=A.replace(h,"$1")||void 0),A===""&&!d(f)&&(A=n.style(f,u)),!i.pixelBoxStyles()&&o.test(A)&&c.test(u)&&(y=B.width,P=B.minWidth,b=B.maxWidth,B.minWidth=B.maxWidth=B.width=A,A=k.width,B.width=y,B.minWidth=P,B.maxWidth=b)),A!==void 0?A+"":A}return m}.apply(_,g),t!==void 0&&(N.exports=t)},829:(N,_,s)=>{var g,t;g=[s(6066),s(8215)],t=function(n,d){"use strict";var c=["Webkit","Moz","ms"],o=n.createElement("div").style,r={};function l(i){for(var m=i[0].toUpperCase()+i.slice(1),f=c.length;f--;)if(i=c[f]+m,i in o)return i}function h(i){var m=d.cssProps[i]||r[i];return m||(i in o?i:r[i]=l(i)||i)}return h}.apply(_,g),t!==void 0&&(N.exports=t)},5966:(N,_,s)=>{var g,t;g=[s(8215),s(497)],t=function(n){"use strict";n.expr.pseudos.hidden=function(d){return!n.expr.pseudos.visible(d)},n.expr.pseudos.visible=function(d){return!!(d.offsetWidth||d.offsetHeight||d.getClientRects().length)}}.apply(_,g),t!==void 0&&(N.exports=t)},5249:(N,_,s)=>{var g,t;g=[s(8215),s(4521),s(4095)],t=function(n,d,c){"use strict";var o={};function r(h){var i,m=h.ownerDocument,f=h.nodeName,u=o[f];return u||(i=m.body.appendChild(m.createElement(f)),u=n.css(i,"display"),i.parentNode.removeChild(i),u==="none"&&(u="block"),o[f]=u,u)}function l(h,i){for(var m,f,u=[],k=0,y=h.length;k<y;k++)f=h[k],f.style&&(m=f.style.display,i?(m==="none"&&(u[k]=d.get(f,"display")||null,u[k]||(f.style.display="")),f.style.display===""&&c(f)&&(u[k]=r(f))):m!=="none"&&(u[k]="none",d.set(f,"display",m)));for(k=0;k<y;k++)u[k]!=null&&(h[k].style.display=u[k]);return h}return n.fn.extend({show:function(){return l(this,!0)},hide:function(){return l(this)},toggle:function(h){return typeof h=="boolean"?h?this.show():this.hide():this.each(function(){c(this)?n(this).show():n(this).hide()})}}),l}.apply(_,g),t!==void 0&&(N.exports=t)},9730:(N,_,s)=>{var g,t;g=[s(8215),s(6066),s(1768),s(5796)],t=function(n,d,c,o){"use strict";return function(){function r(){if(P){y.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",P.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",c.appendChild(y).appendChild(P);var b=window.getComputedStyle(P);h=b.top!=="1%",k=l(b.marginLeft)===12,P.style.right="60%",f=l(b.right)===36,i=l(b.width)===36,P.style.position="absolute",m=l(P.offsetWidth/3)===12,c.removeChild(y),P=null}}function l(b){return Math.round(parseFloat(b))}var h,i,m,f,u,k,y=d.createElement("div"),P=d.createElement("div");P.style&&(P.style.backgroundClip="content-box",P.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle=P.style.backgroundClip==="content-box",n.extend(o,{boxSizingReliable:function(){return r(),i},pixelBoxStyles:function(){return r(),f},pixelPosition:function(){return r(),h},reliableMarginLeft:function(){return r(),k},scrollboxSize:function(){return r(),m},reliableTrDimensions:function(){var b,A,v,B;return u==null&&(b=d.createElement("table"),A=d.createElement("tr"),v=d.createElement("div"),b.style.cssText="position:absolute;left:-11111px;border-collapse:separate",A.style.cssText="border:1px solid",A.style.height="1px",v.style.height="9px",v.style.display="block",c.appendChild(b).appendChild(A).appendChild(v),B=window.getComputedStyle(A),u=parseInt(B.height,10)+parseInt(B.borderTopWidth,10)+parseInt(B.borderBottomWidth,10)===A.offsetHeight,c.removeChild(b)),u}}))}(),o}.apply(_,g),t!==void 0&&(N.exports=t)},5743:(N,_,s)=>{var g;g=function(){"use strict";return["Top","Right","Bottom","Left"]}.call(_,s,_,N),g!==void 0&&(N.exports=g)},9309:(N,_,s)=>{var g;g=function(){"use strict";return function(t){var n=t.ownerDocument.defaultView;return(!n||!n.opener)&&(n=window),n.getComputedStyle(t)}}.call(_,s,_,N),g!==void 0&&(N.exports=g)},4095:(N,_,s)=>{var g,t;g=[s(8215),s(3e3)],t=function(n,d){"use strict";return function(c,o){return c=o||c,c.style.display==="none"||c.style.display===""&&d(c)&&n.css(c,"display")==="none"}}.apply(_,g),t!==void 0&&(N.exports=t)},6090:(N,_,s)=>{var g,t;g=[s(5743)],t=function(n){"use strict";return new RegExp(n.join("|"),"i")}.apply(_,g),t!==void 0&&(N.exports=t)},1249:(N,_,s)=>{var g;g=function(){"use strict";return/^--/}.call(_,s,_,N),g!==void 0&&(N.exports=g)},1281:(N,_,s)=>{var g,t;g=[s(1085)],t=function(n){"use strict";return new RegExp("^("+n+")(?!px)[a-z%]+$","i")}.apply(_,g),t!==void 0&&(N.exports=t)},3096:(N,_,s)=>{var g;g=function(){"use strict";return function(t,n,d){var c,o,r={};for(o in n)r[o]=t.style[o],t.style[o]=n[o];c=d.call(t);for(o in n)t.style[o]=r[o];return c}}.call(_,s,_,N),g!==void 0&&(N.exports=g)},2576:(N,_,s)=>{var g,t;g=[s(8215),s(5946),s(2538),s(4521),s(865)],t=function(n,d,c,o,r){"use strict";var l=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,h=/[A-Z]/g;function i(f){return f==="true"?!0:f==="false"?!1:f==="null"?null:f===+f+""?+f:l.test(f)?JSON.parse(f):f}function m(f,u,k){var y;if(k===void 0&&f.nodeType===1)if(y="data-"+u.replace(h,"-$&").toLowerCase(),k=f.getAttribute(y),typeof k=="string"){try{k=i(k)}catch(P){}r.set(f,u,k)}else k=void 0;return k}return n.extend({hasData:function(f){return r.hasData(f)||o.hasData(f)},data:function(f,u,k){return r.access(f,u,k)},removeData:function(f,u){r.remove(f,u)},_data:function(f,u,k){return o.access(f,u,k)},_removeData:function(f,u){o.remove(f,u)}}),n.fn.extend({data:function(f,u){var k,y,P,b=this[0],A=b&&b.attributes;if(f===void 0){if(this.length&&(P=r.get(b),b.nodeType===1&&!o.get(b,"hasDataAttrs"))){for(k=A.length;k--;)A[k]&&(y=A[k].name,y.indexOf("data-")===0&&(y=c(y.slice(5)),m(b,y,P[y])));o.set(b,"hasDataAttrs",!0)}return P}return typeof f=="object"?this.each(function(){r.set(this,f)}):d(this,function(v){var B;if(b&&v===void 0)return B=r.get(b,f),B!==void 0||(B=m(b,f),B!==void 0)?B:void 0;this.each(function(){r.set(this,f,v)})},null,u,arguments.length>1,null,!0)},removeData:function(f){return this.each(function(){r.remove(this,f)})}}),n}.apply(_,g),t!==void 0&&(N.exports=t)},2128:(N,_,s)=>{var g,t;g=[s(8215),s(2538),s(9059),s(3542)],t=function(n,d,c,o){"use strict";function r(){this.expando=n.expando+r.uid++}return r.uid=1,r.prototype={cache:function(l){var h=l[this.expando];return h||(h={},o(l)&&(l.nodeType?l[this.expando]=h:Object.defineProperty(l,this.expando,{value:h,configurable:!0}))),h},set:function(l,h,i){var m,f=this.cache(l);if(typeof h=="string")f[d(h)]=i;else for(m in h)f[d(m)]=h[m];return f},get:function(l,h){return h===void 0?this.cache(l):l[this.expando]&&l[this.expando][d(h)]},access:function(l,h,i){return h===void 0||h&&typeof h=="string"&&i===void 0?this.get(l,h):(this.set(l,h,i),i!==void 0?i:h)},remove:function(l,h){var i,m=l[this.expando];if(m!==void 0){if(h!==void 0)for(Array.isArray(h)?h=h.map(d):(h=d(h),h=h in m?[h]:h.match(c)||[]),i=h.length;i--;)delete m[h[i]];(h===void 0||n.isEmptyObject(m))&&(l.nodeType?l[this.expando]=void 0:delete l[this.expando])}},hasData:function(l){var h=l[this.expando];return h!==void 0&&!n.isEmptyObject(h)}},r}.apply(_,g),t!==void 0&&(N.exports=t)},3542:(N,_,s)=>{var g;g=function(){"use strict";return function(t){return t.nodeType===1||t.nodeType===9||!+t.nodeType}}.call(_,s,_,N),g!==void 0&&(N.exports=g)},4521:(N,_,s)=>{var g,t;g=[s(2128)],t=function(n){"use strict";return new n}.apply(_,g),t!==void 0&&(N.exports=t)},865:(N,_,s)=>{var g,t;g=[s(2128)],t=function(n){"use strict";return new n}.apply(_,g),t!==void 0&&(N.exports=t)},2042:(N,_,s)=>{var g,t;g=[s(8215),s(232),s(4142),s(9559)],t=function(n,d,c){"use strict";function o(h){return h}function r(h){throw h}function l(h,i,m,f){var u;try{h&&d(u=h.promise)?u.call(h).done(i).fail(m):h&&d(u=h.then)?u.call(h,i,m):i.apply(void 0,[h].slice(f))}catch(k){m.apply(void 0,[k])}}return n.extend({Deferred:function(h){var i=[["notify","progress",n.Callbacks("memory"),n.Callbacks("memory"),2],["resolve","done",n.Callbacks("once memory"),n.Callbacks("once memory"),0,"resolved"],["reject","fail",n.Callbacks("once memory"),n.Callbacks("once memory"),1,"rejected"]],m="pending",f={state:function(){return m},always:function(){return u.done(arguments).fail(arguments),this},catch:function(k){return f.then(null,k)},pipe:function(){var k=arguments;return n.Deferred(function(y){n.each(i,function(P,b){var A=d(k[b[4]])&&k[b[4]];u[b[1]](function(){var v=A&&A.apply(this,arguments);v&&d(v.promise)?v.promise().progress(y.notify).done(y.resolve).fail(y.reject):y[b[0]+"With"](this,A?[v]:arguments)})}),k=null}).promise()},then:function(k,y,P){var b=0;function A(v,B,E,K){return function(){var w=this,D=arguments,S=function(){var j,U;if(!(v<b)){if(j=E.apply(w,D),j===B.promise())throw new TypeError("Thenable self-resolution");U=j&&(typeof j=="object"||typeof j=="function")&&j.then,d(U)?K?U.call(j,A(b,B,o,K),A(b,B,r,K)):(b++,U.call(j,A(b,B,o,K),A(b,B,r,K),A(b,B,o,B.notifyWith))):(E!==o&&(w=void 0,D=[j]),(K||B.resolveWith)(w,D))}},L=K?S:function(){try{S()}catch(j){n.Deferred.exceptionHook&&n.Deferred.exceptionHook(j,L.error),v+1>=b&&(E!==r&&(w=void 0,D=[j]),B.rejectWith(w,D))}};v?L():(n.Deferred.getErrorHook?L.error=n.Deferred.getErrorHook():n.Deferred.getStackHook&&(L.error=n.Deferred.getStackHook()),window.setTimeout(L))}}return n.Deferred(function(v){i[0][3].add(A(0,v,d(P)?P:o,v.notifyWith)),i[1][3].add(A(0,v,d(k)?k:o)),i[2][3].add(A(0,v,d(y)?y:r))}).promise()},promise:function(k){return k!=null?n.extend(k,f):f}},u={};return n.each(i,function(k,y){var P=y[2],b=y[5];f[y[1]]=P.add,b&&P.add(function(){m=b},i[3-k][2].disable,i[3-k][3].disable,i[0][2].lock,i[0][3].lock),P.add(y[3].fire),u[y[0]]=function(){return u[y[0]+"With"](this===u?void 0:this,arguments),this},u[y[0]+"With"]=P.fireWith}),f.promise(u),h&&h.call(u,u),u},when:function(h){var i=arguments.length,m=i,f=Array(m),u=c.call(arguments),k=n.Deferred(),y=function(P){return function(b){f[P]=this,u[P]=arguments.length>1?c.call(arguments):b,--i||k.resolveWith(f,u)}};if(i<=1&&(l(h,k.done(y(m)).resolve,k.reject,!i),k.state()==="pending"||d(u[m]&&u[m].then)))return k.then();for(;m--;)l(u[m],y(m),k.reject);return k.promise()}}),n}.apply(_,g),t!==void 0&&(N.exports=t)},4051:(N,_,s)=>{var g,t;g=[s(8215),s(2042)],t=function(n){"use strict";var d=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;n.Deferred.exceptionHook=function(c,o){window.console&&window.console.warn&&c&&d.test(c.name)&&window.console.warn("jQuery.Deferred exception: "+c.message,c.stack,o)}}.apply(_,g),t!==void 0&&(N.exports=t)},4860:(N,_,s)=>{var g,t;g=[s(8215),s(8803),s(2538),s(8060),s(232),s(1736),s(4142),s(8579),s(7235)],t=function(n,d,c,o,r,l,h){"use strict";var i=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;n.proxy=function(m,f){var u,k,y;if(typeof f=="string"&&(u=m[f],f=m,m=u),!!r(m))return k=h.call(arguments,2),y=function(){return m.apply(f||this,k.concat(h.call(arguments)))},y.guid=m.guid=m.guid||n.guid++,y},n.holdReady=function(m){m?n.readyWait++:n.ready(!0)},n.isArray=Array.isArray,n.parseJSON=JSON.parse,n.nodeName=d,n.isFunction=r,n.isWindow=l,n.camelCase=c,n.type=o,n.now=Date.now,n.isNumeric=function(m){var f=n.type(m);return(f==="number"||f==="string")&&!isNaN(m-parseFloat(m))},n.trim=function(m){return m==null?"":(m+"").replace(i,"$1")}}.apply(_,g),t!==void 0&&(N.exports=t)},8579:(N,_,s)=>{var g,t;g=[s(8215),s(3689),s(4199)],t=function(n){"use strict";n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(d,c){n.fn[c]=function(o){return this.on(c,o)}})}.apply(_,g),t!==void 0&&(N.exports=t)},7235:(N,_,s)=>{var g,t;g=[s(8215),s(4199),s(1843)],t=function(n){"use strict";n.fn.extend({bind:function(d,c,o){return this.on(d,null,c,o)},unbind:function(d,c){return this.off(d,null,c)},delegate:function(d,c,o,r){return this.on(c,d,o,r)},undelegate:function(d,c,o){return arguments.length===1?this.off(d,"**"):this.off(c,d||"**",o)},hover:function(d,c){return this.mouseenter(d).mouseleave(c||d)}}),n.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(d,c){n.fn[c]=function(o,r){return arguments.length>0?this.on(c,null,o,r):this.trigger(c)}})}.apply(_,g),t!==void 0&&(N.exports=t)},5055:(N,_,s)=>{var g,t;g=[s(8215),s(5946),s(1736),s(9006)],t=function(n,d,c){"use strict";return n.each({Height:"height",Width:"width"},function(o,r){n.each({padding:"inner"+o,content:r,"":"outer"+o},function(l,h){n.fn[h]=function(i,m){var f=arguments.length&&(l||typeof i!="boolean"),u=l||(i===!0||m===!0?"margin":"border");return d(this,function(k,y,P){var b;return c(k)?h.indexOf("outer")===0?k["inner"+o]:k.document.documentElement["client"+o]:k.nodeType===9?(b=k.documentElement,Math.max(k.body["scroll"+o],b["scroll"+o],k.body["offset"+o],b["offset"+o],b["client"+o])):P===void 0?n.css(k,y,u):n.style(k,y,P,u)},r,f?i:void 0,f)}})}),n}.apply(_,g),t!==void 0&&(N.exports=t)},1326:(N,_,s)=>{var g,t;g=[s(8215),s(2538),s(6066),s(232),s(9806),s(9059),s(5743),s(4095),s(8404),s(4521),s(5249),s(9441),s(7e3),s(2042),s(7167),s(3330),s(9006),s(8943)],t=function(n,d,c,o,r,l,h,i,m,f,u){"use strict";var k,y,P=/^(?:toggle|show|hide)$/,b=/queueHooks$/;function A(){y&&(c.hidden===!1&&window.requestAnimationFrame?window.requestAnimationFrame(A):window.setTimeout(A,n.fx.interval),n.fx.tick())}function v(){return window.setTimeout(function(){k=void 0}),k=Date.now()}function B(S,L){var j,U=0,Y={height:S};for(L=L?1:0;U<4;U+=2-L)j=h[U],Y["margin"+j]=Y["padding"+j]=S;return L&&(Y.opacity=Y.width=S),Y}function E(S,L,j){for(var U,Y=(D.tweeners[L]||[]).concat(D.tweeners["*"]),x=0,F=Y.length;x<F;x++)if(U=Y[x].call(j,L,S))return U}function K(S,L,j){var U,Y,x,F,O,q,H,Q,oe="width"in L||"height"in L,fe=this,Z={},ye=S.style,ke=S.nodeType&&i(S),Ne=f.get(S,"fxshow");j.queue||(F=n._queueHooks(S,"fx"),F.unqueued==null&&(F.unqueued=0,O=F.empty.fire,F.empty.fire=function(){F.unqueued||O()}),F.unqueued++,fe.always(function(){fe.always(function(){F.unqueued--,n.queue(S,"fx").length||F.empty.fire()})}));for(U in L)if(Y=L[U],P.test(Y)){if(delete L[U],x=x||Y==="toggle",Y===(ke?"hide":"show"))if(Y==="show"&&Ne&&Ne[U]!==void 0)ke=!0;else continue;Z[U]=Ne&&Ne[U]||n.style(S,U)}if(q=!n.isEmptyObject(L),!(!q&&n.isEmptyObject(Z))){oe&&S.nodeType===1&&(j.overflow=[ye.overflow,ye.overflowX,ye.overflowY],H=Ne&&Ne.display,H==null&&(H=f.get(S,"display")),Q=n.css(S,"display"),Q==="none"&&(H?Q=H:(u([S],!0),H=S.style.display||H,Q=n.css(S,"display"),u([S]))),(Q==="inline"||Q==="inline-block"&&H!=null)&&n.css(S,"float")==="none"&&(q||(fe.done(function(){ye.display=H}),H==null&&(Q=ye.display,H=Q==="none"?"":Q)),ye.display="inline-block")),j.overflow&&(ye.overflow="hidden",fe.always(function(){ye.overflow=j.overflow[0],ye.overflowX=j.overflow[1],ye.overflowY=j.overflow[2]})),q=!1;for(U in Z)q||(Ne?"hidden"in Ne&&(ke=Ne.hidden):Ne=f.access(S,"fxshow",{display:H}),x&&(Ne.hidden=!ke),ke&&u([S],!0),fe.done(function(){ke||u([S]),f.remove(S,"fxshow");for(U in Z)n.style(S,U,Z[U])})),q=E(ke?Ne[U]:0,U,fe),U in Ne||(Ne[U]=q.start,ke&&(q.end=q.start,q.start=0))}}function w(S,L){var j,U,Y,x,F;for(j in S)if(U=d(j),Y=L[U],x=S[j],Array.isArray(x)&&(Y=x[1],x=S[j]=x[0]),j!==U&&(S[U]=x,delete S[j]),F=n.cssHooks[U],F&&"expand"in F){x=F.expand(x),delete S[U];for(j in x)j in S||(S[j]=x[j],L[j]=Y)}else L[U]=Y}function D(S,L,j){var U,Y,x=0,F=D.prefilters.length,O=n.Deferred().always(function(){delete q.elem}),q=function(){if(Y)return!1;for(var oe=k||v(),fe=Math.max(0,H.startTime+H.duration-oe),Z=fe/H.duration||0,ye=1-Z,ke=0,Ne=H.tweens.length;ke<Ne;ke++)H.tweens[ke].run(ye);return O.notifyWith(S,[H,ye,fe]),ye<1&&Ne?fe:(Ne||O.notifyWith(S,[H,1,0]),O.resolveWith(S,[H]),!1)},H=O.promise({elem:S,props:n.extend({},L),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},j),originalProperties:L,originalOptions:j,startTime:k||v(),duration:j.duration,tweens:[],createTween:function(oe,fe){var Z=n.Tween(S,H.opts,oe,fe,H.opts.specialEasing[oe]||H.opts.easing);return H.tweens.push(Z),Z},stop:function(oe){var fe=0,Z=oe?H.tweens.length:0;if(Y)return this;for(Y=!0;fe<Z;fe++)H.tweens[fe].run(1);return oe?(O.notifyWith(S,[H,1,0]),O.resolveWith(S,[H,oe])):O.rejectWith(S,[H,oe]),this}}),Q=H.props;for(w(Q,H.opts.specialEasing);x<F;x++)if(U=D.prefilters[x].call(H,S,Q,H.opts),U)return o(U.stop)&&(n._queueHooks(H.elem,H.opts.queue).stop=U.stop.bind(U)),U;return n.map(Q,E,H),o(H.opts.start)&&H.opts.start.call(S,H),H.progress(H.opts.progress).done(H.opts.done,H.opts.complete).fail(H.opts.fail).always(H.opts.always),n.fx.timer(n.extend(q,{elem:S,anim:H,queue:H.opts.queue})),H}return n.Animation=n.extend(D,{tweeners:{"*":[function(S,L){var j=this.createTween(S,L);return m(j.elem,S,r.exec(L),j),j}]},tweener:function(S,L){o(S)?(L=S,S=["*"]):S=S.match(l);for(var j,U=0,Y=S.length;U<Y;U++)j=S[U],D.tweeners[j]=D.tweeners[j]||[],D.tweeners[j].unshift(L)},prefilters:[K],prefilter:function(S,L){L?D.prefilters.unshift(S):D.prefilters.push(S)}}),n.speed=function(S,L,j){var U=S&&typeof S=="object"?n.extend({},S):{complete:j||!j&&L||o(S)&&S,duration:S,easing:j&&L||L&&!o(L)&&L};return n.fx.off?U.duration=0:typeof U.duration!="number"&&(U.duration in n.fx.speeds?U.duration=n.fx.speeds[U.duration]:U.duration=n.fx.speeds._default),(U.queue==null||U.queue===!0)&&(U.queue="fx"),U.old=U.complete,U.complete=function(){o(U.old)&&U.old.call(this),U.queue&&n.dequeue(this,U.queue)},U},n.fn.extend({fadeTo:function(S,L,j,U){return this.filter(i).css("opacity",0).show().end().animate({opacity:L},S,j,U)},animate:function(S,L,j,U){var Y=n.isEmptyObject(S),x=n.speed(L,j,U),F=function(){var O=D(this,n.extend({},S),x);(Y||f.get(this,"finish"))&&O.stop(!0)};return F.finish=F,Y||x.queue===!1?this.each(F):this.queue(x.queue,F)},stop:function(S,L,j){var U=function(Y){var x=Y.stop;delete Y.stop,x(j)};return typeof S!="string"&&(j=L,L=S,S=void 0),L&&this.queue(S||"fx",[]),this.each(function(){var Y=!0,x=S!=null&&S+"queueHooks",F=n.timers,O=f.get(this);if(x)O[x]&&O[x].stop&&U(O[x]);else for(x in O)O[x]&&O[x].stop&&b.test(x)&&U(O[x]);for(x=F.length;x--;)F[x].elem===this&&(S==null||F[x].queue===S)&&(F[x].anim.stop(j),Y=!1,F.splice(x,1));(Y||!j)&&n.dequeue(this,S)})},finish:function(S){return S!==!1&&(S=S||"fx"),this.each(function(){var L,j=f.get(this),U=j[S+"queue"],Y=j[S+"queueHooks"],x=n.timers,F=U?U.length:0;for(j.finish=!0,n.queue(this,S,[]),Y&&Y.stop&&Y.stop.call(this,!0),L=x.length;L--;)x[L].elem===this&&x[L].queue===S&&(x[L].anim.stop(!0),x.splice(L,1));for(L=0;L<F;L++)U[L]&&U[L].finish&&U[L].finish.call(this);delete j.finish})}}),n.each(["toggle","show","hide"],function(S,L){var j=n.fn[L];n.fn[L]=function(U,Y,x){return U==null||typeof U=="boolean"?j.apply(this,arguments):this.animate(B(L,!0),U,Y,x)}}),n.each({slideDown:B("show"),slideUp:B("hide"),slideToggle:B("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(S,L){n.fn[S]=function(j,U,Y){return this.animate(L,j,U,Y)}}),n.timers=[],n.fx.tick=function(){var S,L=0,j=n.timers;for(k=Date.now();L<j.length;L++)S=j[L],!S()&&j[L]===S&&j.splice(L--,1);j.length||n.fx.stop(),k=void 0},n.fx.timer=function(S){n.timers.push(S),n.fx.start()},n.fx.interval=13,n.fx.start=function(){y||(y=!0,A())},n.fx.stop=function(){y=null},n.fx.speeds={slow:600,fast:200,_default:400},n}.apply(_,g),t!==void 0&&(N.exports=t)},8943:(N,_,s)=>{var g,t;g=[s(8215),s(829),s(9006)],t=function(n,d){"use strict";function c(o,r,l,h,i){return new c.prototype.init(o,r,l,h,i)}n.Tween=c,c.prototype={constructor:c,init:function(o,r,l,h,i,m){this.elem=o,this.prop=l,this.easing=i||n.easing._default,this.options=r,this.start=this.now=this.cur(),this.end=h,this.unit=m||(n.cssNumber[l]?"":"px")},cur:function(){var o=c.propHooks[this.prop];return o&&o.get?o.get(this):c.propHooks._default.get(this)},run:function(o){var r,l=c.propHooks[this.prop];return this.options.duration?this.pos=r=n.easing[this.easing](o,this.options.duration*o,0,1,this.options.duration):this.pos=r=o,this.now=(this.end-this.start)*r+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),l&&l.set?l.set(this):c.propHooks._default.set(this),this}},c.prototype.init.prototype=c.prototype,c.propHooks={_default:{get:function(o){var r;return o.elem.nodeType!==1||o.elem[o.prop]!=null&&o.elem.style[o.prop]==null?o.elem[o.prop]:(r=n.css(o.elem,o.prop,""),!r||r==="auto"?0:r)},set:function(o){n.fx.step[o.prop]?n.fx.step[o.prop](o):o.elem.nodeType===1&&(n.cssHooks[o.prop]||o.elem.style[d(o.prop)]!=null)?n.style(o.elem,o.prop,o.now+o.unit):o.elem[o.prop]=o.now}}},c.propHooks.scrollTop=c.propHooks.scrollLeft={set:function(o){o.elem.nodeType&&o.elem.parentNode&&(o.elem[o.prop]=o.now)}},n.easing={linear:function(o){return o},swing:function(o){return .5-Math.cos(o*Math.PI)/2},_default:"swing"},n.fx=c.prototype.init,n.fx.step={}}.apply(_,g),t!==void 0&&(N.exports=t)},2860:(N,_,s)=>{var g,t;g=[s(8215),s(497),s(1326)],t=function(n){"use strict";n.expr.pseudos.animated=function(d){return n.grep(n.timers,function(c){return d===c.elem}).length}}.apply(_,g),t!==void 0&&(N.exports=t)},4199:(N,_,s)=>{var g,t;g=[s(8215),s(6066),s(1768),s(232),s(9059),s(2967),s(4142),s(3542),s(4521),s(8803),s(9441),s(497)],t=function(n,d,c,o,r,l,h,i,m,f){"use strict";var u=/^([^.]*)(?:\.(.+)|)/;function k(){return!0}function y(){return!1}function P(A,v,B,E,K,w){var D,S;if(typeof v=="object"){typeof B!="string"&&(E=E||B,B=void 0);for(S in v)P(A,S,B,E,v[S],w);return A}if(E==null&&K==null?(K=B,E=B=void 0):K==null&&(typeof B=="string"?(K=E,E=void 0):(K=E,E=B,B=void 0)),K===!1)K=y;else if(!K)return A;return w===1&&(D=K,K=function(L){return n().off(L),D.apply(this,arguments)},K.guid=D.guid||(D.guid=n.guid++)),A.each(function(){n.event.add(this,v,K,E,B)})}n.event={global:{},add:function(A,v,B,E,K){var w,D,S,L,j,U,Y,x,F,O,q,H=m.get(A);if(i(A))for(B.handler&&(w=B,B=w.handler,K=w.selector),K&&n.find.matchesSelector(c,K),B.guid||(B.guid=n.guid++),(L=H.events)||(L=H.events=Object.create(null)),(D=H.handle)||(D=H.handle=function(Q){return typeof n!="undefined"&&n.event.triggered!==Q.type?n.event.dispatch.apply(A,arguments):void 0}),v=(v||"").match(r)||[""],j=v.length;j--;)S=u.exec(v[j])||[],F=q=S[1],O=(S[2]||"").split(".").sort(),F&&(Y=n.event.special[F]||{},F=(K?Y.delegateType:Y.bindType)||F,Y=n.event.special[F]||{},U=n.extend({type:F,origType:q,data:E,handler:B,guid:B.guid,selector:K,needsContext:K&&n.expr.match.needsContext.test(K),namespace:O.join(".")},w),(x=L[F])||(x=L[F]=[],x.delegateCount=0,(!Y.setup||Y.setup.call(A,E,O,D)===!1)&&A.addEventListener&&A.addEventListener(F,D)),Y.add&&(Y.add.call(A,U),U.handler.guid||(U.handler.guid=B.guid)),K?x.splice(x.delegateCount++,0,U):x.push(U),n.event.global[F]=!0)},remove:function(A,v,B,E,K){var w,D,S,L,j,U,Y,x,F,O,q,H=m.hasData(A)&&m.get(A);if(!(!H||!(L=H.events))){for(v=(v||"").match(r)||[""],j=v.length;j--;){if(S=u.exec(v[j])||[],F=q=S[1],O=(S[2]||"").split(".").sort(),!F){for(F in L)n.event.remove(A,F+v[j],B,E,!0);continue}for(Y=n.event.special[F]||{},F=(E?Y.delegateType:Y.bindType)||F,x=L[F]||[],S=S[2]&&new RegExp("(^|\\.)"+O.join("\\.(?:.*\\.|)")+"(\\.|$)"),D=w=x.length;w--;)U=x[w],(K||q===U.origType)&&(!B||B.guid===U.guid)&&(!S||S.test(U.namespace))&&(!E||E===U.selector||E==="**"&&U.selector)&&(x.splice(w,1),U.selector&&x.delegateCount--,Y.remove&&Y.remove.call(A,U));D&&!x.length&&((!Y.teardown||Y.teardown.call(A,O,H.handle)===!1)&&n.removeEvent(A,F,H.handle),delete L[F])}n.isEmptyObject(L)&&m.remove(A,"handle events")}},dispatch:function(A){var v,B,E,K,w,D,S=new Array(arguments.length),L=n.event.fix(A),j=(m.get(this,"events")||Object.create(null))[L.type]||[],U=n.event.special[L.type]||{};for(S[0]=L,v=1;v<arguments.length;v++)S[v]=arguments[v];if(L.delegateTarget=this,!(U.preDispatch&&U.preDispatch.call(this,L)===!1)){for(D=n.event.handlers.call(this,L,j),v=0;(K=D[v++])&&!L.isPropagationStopped();)for(L.currentTarget=K.elem,B=0;(w=K.handlers[B++])&&!L.isImmediatePropagationStopped();)(!L.rnamespace||w.namespace===!1||L.rnamespace.test(w.namespace))&&(L.handleObj=w,L.data=w.data,E=((n.event.special[w.origType]||{}).handle||w.handler).apply(K.elem,S),E!==void 0&&(L.result=E)===!1&&(L.preventDefault(),L.stopPropagation()));return U.postDispatch&&U.postDispatch.call(this,L),L.result}},handlers:function(A,v){var B,E,K,w,D,S=[],L=v.delegateCount,j=A.target;if(L&&j.nodeType&&!(A.type==="click"&&A.button>=1)){for(;j!==this;j=j.parentNode||this)if(j.nodeType===1&&!(A.type==="click"&&j.disabled===!0)){for(w=[],D={},B=0;B<L;B++)E=v[B],K=E.selector+" ",D[K]===void 0&&(D[K]=E.needsContext?n(K,this).index(j)>-1:n.find(K,this,null,[j]).length),D[K]&&w.push(E);w.length&&S.push({elem:j,handlers:w})}}return j=this,L<v.length&&S.push({elem:j,handlers:v.slice(L)}),S},addProp:function(A,v){Object.defineProperty(n.Event.prototype,A,{enumerable:!0,configurable:!0,get:o(v)?function(){if(this.originalEvent)return v(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[A]},set:function(B){Object.defineProperty(this,A,{enumerable:!0,configurable:!0,writable:!0,value:B})}})},fix:function(A){return A[n.expando]?A:new n.Event(A)},special:{load:{noBubble:!0},click:{setup:function(A){var v=this||A;return l.test(v.type)&&v.click&&f(v,"input")&&b(v,"click",!0),!1},trigger:function(A){var v=this||A;return l.test(v.type)&&v.click&&f(v,"input")&&b(v,"click"),!0},_default:function(A){var v=A.target;return l.test(v.type)&&v.click&&f(v,"input")&&m.get(v,"click")||f(v,"a")}},beforeunload:{postDispatch:function(A){A.result!==void 0&&A.originalEvent&&(A.originalEvent.returnValue=A.result)}}}};function b(A,v,B){if(!B){m.get(A,v)===void 0&&n.event.add(A,v,k);return}m.set(A,v,!1),n.event.add(A,v,{namespace:!1,handler:function(E){var K,w=m.get(this,v);if(E.isTrigger&1&&this[v]){if(w)(n.event.special[v]||{}).delegateType&&E.stopPropagation();else if(w=h.call(arguments),m.set(this,v,w),this[v](),K=m.get(this,v),m.set(this,v,!1),w!==K)return E.stopImmediatePropagation(),E.preventDefault(),K}else w&&(m.set(this,v,n.event.trigger(w[0],w.slice(1),this)),E.stopPropagation(),E.isImmediatePropagationStopped=k)}})}return n.removeEvent=function(A,v,B){A.removeEventListener&&A.removeEventListener(v,B)},n.Event=function(A,v){if(!(this instanceof n.Event))return new n.Event(A,v);A&&A.type?(this.originalEvent=A,this.type=A.type,this.isDefaultPrevented=A.defaultPrevented||A.defaultPrevented===void 0&&A.returnValue===!1?k:y,this.target=A.target&&A.target.nodeType===3?A.target.parentNode:A.target,this.currentTarget=A.currentTarget,this.relatedTarget=A.relatedTarget):this.type=A,v&&n.extend(this,v),this.timeStamp=A&&A.timeStamp||Date.now(),this[n.expando]=!0},n.Event.prototype={constructor:n.Event,isDefaultPrevented:y,isPropagationStopped:y,isImmediatePropagationStopped:y,isSimulated:!1,preventDefault:function(){var A=this.originalEvent;this.isDefaultPrevented=k,A&&!this.isSimulated&&A.preventDefault()},stopPropagation:function(){var A=this.originalEvent;this.isPropagationStopped=k,A&&!this.isSimulated&&A.stopPropagation()},stopImmediatePropagation:function(){var A=this.originalEvent;this.isImmediatePropagationStopped=k,A&&!this.isSimulated&&A.stopImmediatePropagation(),this.stopPropagation()}},n.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},n.event.addProp),n.each({focus:"focusin",blur:"focusout"},function(A,v){function B(E){if(d.documentMode){var K=m.get(this,"handle"),w=n.event.fix(E);w.type=E.type==="focusin"?"focus":"blur",w.isSimulated=!0,K(E),w.target===w.currentTarget&&K(w)}else n.event.simulate(v,E.target,n.event.fix(E))}n.event.special[A]={setup:function(){var E;if(b(this,A,!0),d.documentMode)E=m.get(this,v),E||this.addEventListener(v,B),m.set(this,v,(E||0)+1);else return!1},trigger:function(){return b(this,A),!0},teardown:function(){var E;if(d.documentMode)E=m.get(this,v)-1,E?m.set(this,v,E):(this.removeEventListener(v,B),m.remove(this,v));else return!1},_default:function(E){return m.get(E.target,A)},delegateType:v},n.event.special[v]={setup:function(){var E=this.ownerDocument||this.document||this,K=d.documentMode?this:E,w=m.get(K,v);w||(d.documentMode?this.addEventListener(v,B):E.addEventListener(A,B,!0)),m.set(K,v,(w||0)+1)},teardown:function(){var E=this.ownerDocument||this.document||this,K=d.documentMode?this:E,w=m.get(K,v)-1;w?m.set(K,v,w):(d.documentMode?this.removeEventListener(v,B):E.removeEventListener(A,B,!0),m.remove(K,v))}}}),n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(A,v){n.event.special[A]={delegateType:v,bindType:v,handle:function(B){var E,K=this,w=B.relatedTarget,D=B.handleObj;return(!w||w!==K&&!n.contains(K,w))&&(B.type=D.origType,E=D.handler.apply(this,arguments),B.type=v),E}}}),n.fn.extend({on:function(A,v,B,E){return P(this,A,v,B,E)},one:function(A,v,B,E){return P(this,A,v,B,E,1)},off:function(A,v,B){var E,K;if(A&&A.preventDefault&&A.handleObj)return E=A.handleObj,n(A.delegateTarget).off(E.namespace?E.origType+"."+E.namespace:E.origType,E.selector,E.handler),this;if(typeof A=="object"){for(K in A)this.off(K,v,A[K]);return this}return(v===!1||typeof v=="function")&&(B=v,v=void 0),B===!1&&(B=y),this.each(function(){n.event.remove(this,A,B,v)})}}),n}.apply(_,g),t!==void 0&&(N.exports=t)},1843:(N,_,s)=>{var g,t;g=[s(8215),s(6066),s(4521),s(3542),s(2143),s(232),s(1736),s(4199)],t=function(n,d,c,o,r,l,h){"use strict";var i=/^(?:focusinfocus|focusoutblur)$/,m=function(f){f.stopPropagation()};return n.extend(n.event,{trigger:function(f,u,k,y){var P,b,A,v,B,E,K,w,D=[k||d],S=r.call(f,"type")?f.type:f,L=r.call(f,"namespace")?f.namespace.split("."):[];if(b=w=A=k=k||d,!(k.nodeType===3||k.nodeType===8)&&!i.test(S+n.event.triggered)&&(S.indexOf(".")>-1&&(L=S.split("."),S=L.shift(),L.sort()),B=S.indexOf(":")<0&&"on"+S,f=f[n.expando]?f:new n.Event(S,typeof f=="object"&&f),f.isTrigger=y?2:3,f.namespace=L.join("."),f.rnamespace=f.namespace?new RegExp("(^|\\.)"+L.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,f.result=void 0,f.target||(f.target=k),u=u==null?[f]:n.makeArray(u,[f]),K=n.event.special[S]||{},!(!y&&K.trigger&&K.trigger.apply(k,u)===!1))){if(!y&&!K.noBubble&&!h(k)){for(v=K.delegateType||S,i.test(v+S)||(b=b.parentNode);b;b=b.parentNode)D.push(b),A=b;A===(k.ownerDocument||d)&&D.push(A.defaultView||A.parentWindow||window)}for(P=0;(b=D[P++])&&!f.isPropagationStopped();)w=b,f.type=P>1?v:K.bindType||S,E=(c.get(b,"events")||Object.create(null))[f.type]&&c.get(b,"handle"),E&&E.apply(b,u),E=B&&b[B],E&&E.apply&&o(b)&&(f.result=E.apply(b,u),f.result===!1&&f.preventDefault());return f.type=S,!y&&!f.isDefaultPrevented()&&(!K._default||K._default.apply(D.pop(),u)===!1)&&o(k)&&B&&l(k[S])&&!h(k)&&(A=k[B],A&&(k[B]=null),n.event.triggered=S,f.isPropagationStopped()&&w.addEventListener(S,m),k[S](),f.isPropagationStopped()&&w.removeEventListener(S,m),n.event.triggered=void 0,A&&(k[B]=A)),f.result}},simulate:function(f,u,k){var y=n.extend(new n.Event,k,{type:f,isSimulated:!0});n.event.trigger(y,null,u)}}),n.fn.extend({trigger:function(f,u){return this.each(function(){n.event.trigger(f,u,this)})},triggerHandler:function(f,u){var k=this[0];if(k)return n.event.trigger(f,u,k,!0)}}),n}.apply(_,g),t!==void 0&&(N.exports=t)},7804:(N,_,s)=>{var g,t,g,t;g=[s(8215)],t=function(n){"use strict";g=[],t=function(){return n}.apply(_,g),t!==void 0&&(N.exports=t)}.apply(_,g),t!==void 0&&(N.exports=t)},1201:(N,_,s)=>{var g,t;g=[s(8215)],t=function(n){"use strict";var d=window.jQuery,c=window.$;n.noConflict=function(o){return window.$===n&&(window.$=c),o&&window.jQuery===n&&(window.jQuery=d),n},typeof noGlobal=="undefined"&&(window.jQuery=window.$=n)}.apply(_,g),t!==void 0&&(N.exports=t)},613:(N,_,s)=>{var g,t;g=[s(8215),s(497),s(7167),s(9559),s(2042),s(4051),s(2525),s(2576),s(7e3),s(7485),s(1457),s(4199),s(3330),s(5648),s(6210),s(9006),s(5966),s(6069),s(3689),s(5848),s(9028),s(8202),s(7092),s(758),s(1087),s(1326),s(2860),s(1098),s(5055),s(4860),s(7804),s(1201)],t=function(n){"use strict";return n}.apply(_,g),t!==void 0&&(N.exports=t)},3330:(N,_,s)=>{var g,t;g=[s(8215),s(3e3),s(2066),s(232),s(4663),s(2967),s(5946),s(4),s(6119),s(4219),s(9494),s(7607),s(7731),s(3694),s(4521),s(865),s(3542),s(5069),s(8803),s(9441),s(7167),s(497),s(4199)],t=function(n,d,c,o,r,l,h,i,m,f,u,k,y,P,b,A,v,B,E){"use strict";var K=/<script|<style|<link/i,w=/checked\s*(?:[^=]|=\s*.checked.)/i,D=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function S(O,q){return E(O,"table")&&E(q.nodeType!==11?q:q.firstChild,"tr")&&n(O).children("tbody")[0]||O}function L(O){return O.type=(O.getAttribute("type")!==null)+"/"+O.type,O}function j(O){return(O.type||"").slice(0,5)==="true/"?O.type=O.type.slice(5):O.removeAttribute("type"),O}function U(O,q){var H,Q,oe,fe,Z,ye,ke;if(q.nodeType===1){if(b.hasData(O)&&(fe=b.get(O),ke=fe.events,ke)){b.remove(q,"handle events");for(oe in ke)for(H=0,Q=ke[oe].length;H<Q;H++)n.event.add(q,oe,ke[oe][H])}A.hasData(O)&&(Z=A.access(O),ye=n.extend({},Z),A.set(q,ye))}}function Y(O,q){var H=q.nodeName.toLowerCase();H==="input"&&l.test(O.type)?q.checked=O.checked:(H==="input"||H==="textarea")&&(q.defaultValue=O.defaultValue)}function x(O,q,H,Q){q=c(q);var oe,fe,Z,ye,ke,Ne,Qe=0,ma=O.length,Na=ma-1,va=q[0],xa=o(va);if(xa||ma>1&&typeof va=="string"&&!P.checkClone&&w.test(va))return O.each(function(Ke){var Aa=O.eq(Ke);xa&&(q[0]=va.call(this,Ke,Aa.html())),x(Aa,q,H,Q)});if(ma&&(oe=y(q,O[0].ownerDocument,!1,O,Q),fe=oe.firstChild,oe.childNodes.length===1&&(oe=fe),fe||Q)){for(Z=n.map(u(oe,"script"),L),ye=Z.length;Qe<ma;Qe++)ke=oe,Qe!==Na&&(ke=n.clone(ke,!0,!0),ye&&n.merge(Z,u(ke,"script"))),H.call(O[Qe],ke,Qe);if(ye)for(Ne=Z[Z.length-1].ownerDocument,n.map(Z,j),Qe=0;Qe<ye;Qe++)ke=Z[Qe],m.test(ke.type||"")&&!b.access(ke,"globalEval")&&n.contains(Ne,ke)&&(ke.src&&(ke.type||"").toLowerCase()!=="module"?n._evalUrl&&!ke.noModule&&n._evalUrl(ke.src,{nonce:ke.nonce||ke.getAttribute("nonce")},Ne):B(ke.textContent.replace(D,""),ke,Ne))}return O}function F(O,q,H){for(var Q,oe=q?n.filter(q,O):O,fe=0;(Q=oe[fe])!=null;fe++)!H&&Q.nodeType===1&&n.cleanData(u(Q)),Q.parentNode&&(H&&d(Q)&&k(u(Q,"script")),Q.parentNode.removeChild(Q));return O}return n.extend({htmlPrefilter:function(O){return O},clone:function(O,q,H){var Q,oe,fe,Z,ye=O.cloneNode(!0),ke=d(O);if(!P.noCloneChecked&&(O.nodeType===1||O.nodeType===11)&&!n.isXMLDoc(O))for(Z=u(ye),fe=u(O),Q=0,oe=fe.length;Q<oe;Q++)Y(fe[Q],Z[Q]);if(q)if(H)for(fe=fe||u(O),Z=Z||u(ye),Q=0,oe=fe.length;Q<oe;Q++)U(fe[Q],Z[Q]);else U(O,ye);return Z=u(ye,"script"),Z.length>0&&k(Z,!ke&&u(O,"script")),ye},cleanData:function(O){for(var q,H,Q,oe=n.event.special,fe=0;(H=O[fe])!==void 0;fe++)if(v(H)){if(q=H[b.expando]){if(q.events)for(Q in q.events)oe[Q]?n.event.remove(H,Q):n.removeEvent(H,Q,q.handle);H[b.expando]=void 0}H[A.expando]&&(H[A.expando]=void 0)}}}),n.fn.extend({detach:function(O){return F(this,O,!0)},remove:function(O){return F(this,O)},text:function(O){return h(this,function(q){return q===void 0?n.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=q)})},null,O,arguments.length)},append:function(){return x(this,arguments,function(O){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var q=S(this,O);q.appendChild(O)}})},prepend:function(){return x(this,arguments,function(O){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var q=S(this,O);q.insertBefore(O,q.firstChild)}})},before:function(){return x(this,arguments,function(O){this.parentNode&&this.parentNode.insertBefore(O,this)})},after:function(){return x(this,arguments,function(O){this.parentNode&&this.parentNode.insertBefore(O,this.nextSibling)})},empty:function(){for(var O,q=0;(O=this[q])!=null;q++)O.nodeType===1&&(n.cleanData(u(O,!1)),O.textContent="");return this},clone:function(O,q){return O=O==null?!1:O,q=q==null?O:q,this.map(function(){return n.clone(this,O,q)})},html:function(O){return h(this,function(q){var H=this[0]||{},Q=0,oe=this.length;if(q===void 0&&H.nodeType===1)return H.innerHTML;if(typeof q=="string"&&!K.test(q)&&!f[(i.exec(q)||["",""])[1].toLowerCase()]){q=n.htmlPrefilter(q);try{for(;Q<oe;Q++)H=this[Q]||{},H.nodeType===1&&(n.cleanData(u(H,!1)),H.innerHTML=q);H=0}catch(fe){}}H&&this.empty().append(q)},null,O,arguments.length)},replaceWith:function(){var O=[];return x(this,arguments,function(q){var H=this.parentNode;n.inArray(this,O)<0&&(n.cleanData(u(this)),H&&H.replaceChild(q,this))},O)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(O,q){n.fn[O]=function(H){for(var Q,oe=[],fe=n(H),Z=fe.length-1,ye=0;ye<=Z;ye++)Q=ye===Z?this:this.clone(!0),n(fe[ye])[q](Q),r.apply(oe,Q.get());return this.pushStack(oe)}}),n}.apply(_,g),t!==void 0&&(N.exports=t)},5648:(N,_,s)=>{var g,t;g=[s(3689)],t=function(n){"use strict";return n._evalUrl=function(d,c,o){return n.ajax({url:d,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(r){n.globalEval(r,c,o)}})},n._evalUrl}.apply(_,g),t!==void 0&&(N.exports=t)},7731:(N,_,s)=>{var g,t;g=[s(8215),s(8060),s(3e3),s(4),s(6119),s(4219),s(9494),s(7607)],t=function(n,d,c,o,r,l,h,i){"use strict";var m=/<|&#?\w+;/;function f(u,k,y,P,b){for(var A,v,B,E,K,w,D=k.createDocumentFragment(),S=[],L=0,j=u.length;L<j;L++)if(A=u[L],A||A===0)if(d(A)==="object")n.merge(S,A.nodeType?[A]:A);else if(!m.test(A))S.push(k.createTextNode(A));else{for(v=v||D.appendChild(k.createElement("div")),B=(o.exec(A)||["",""])[1].toLowerCase(),E=l[B]||l._default,v.innerHTML=E[1]+n.htmlPrefilter(A)+E[2],w=E[0];w--;)v=v.lastChild;n.merge(S,v.childNodes),v=D.firstChild,v.textContent=""}for(D.textContent="",L=0;A=S[L++];){if(P&&n.inArray(A,P)>-1){b&&b.push(A);continue}if(K=c(A),v=h(D.appendChild(A),"script"),K&&i(v),y)for(w=0;A=v[w++];)r.test(A.type||"")&&y.push(A)}return D}return f}.apply(_,g),t!==void 0&&(N.exports=t)},9494:(N,_,s)=>{var g,t;g=[s(8215),s(8803)],t=function(n,d){"use strict";function c(o,r){var l;return typeof o.getElementsByTagName!="undefined"?l=o.getElementsByTagName(r||"*"):typeof o.querySelectorAll!="undefined"?l=o.querySelectorAll(r||"*"):l=[],r===void 0||r&&d(o,r)?n.merge([o],l):l}return c}.apply(_,g),t!==void 0&&(N.exports=t)},7607:(N,_,s)=>{var g,t;g=[s(4521)],t=function(n){"use strict";function d(c,o){for(var r=0,l=c.length;r<l;r++)n.set(c[r],"globalEval",!o||n.get(o[r],"globalEval"))}return d}.apply(_,g),t!==void 0&&(N.exports=t)},3694:(N,_,s)=>{var g,t;g=[s(6066),s(5796)],t=function(n,d){"use strict";return function(){var c=n.createDocumentFragment(),o=c.appendChild(n.createElement("div")),r=n.createElement("input");r.setAttribute("type","radio"),r.setAttribute("checked","checked"),r.setAttribute("name","t"),o.appendChild(r),d.checkClone=o.cloneNode(!0).cloneNode(!0).lastChild.checked,o.innerHTML="<textarea>x</textarea>",d.noCloneChecked=!!o.cloneNode(!0).lastChild.defaultValue,o.innerHTML="<option></option>",d.option=!!o.lastChild}(),d}.apply(_,g),t!==void 0&&(N.exports=t)},6119:(N,_,s)=>{var g;g=function(){"use strict";return/^$|^module$|\/(?:java|ecma)script/i}.call(_,s,_,N),g!==void 0&&(N.exports=g)},4:(N,_,s)=>{var g;g=function(){"use strict";return/<([a-z][^\/\0>\x20\t\r\n\f]*)/i}.call(_,s,_,N),g!==void 0&&(N.exports=g)},4219:(N,_,s)=>{var g,t;g=[s(3694)],t=function(n){"use strict";var d={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};return d.tbody=d.tfoot=d.colgroup=d.caption=d.thead,d.th=d.td,n.option||(d.optgroup=d.option=[1,"<select multiple='multiple'>","</select>"]),d}.apply(_,g),t!==void 0&&(N.exports=t)},1098:(N,_,s)=>{var g,t;g=[s(8215),s(5946),s(1768),s(232),s(1281),s(1337),s(1426),s(9730),s(1736),s(9441),s(9006),s(497)],t=function(n,d,c,o,r,l,h,i,m){"use strict";return n.offset={setOffset:function(f,u,k){var y,P,b,A,v,B,E,K=n.css(f,"position"),w=n(f),D={};K==="static"&&(f.style.position="relative"),v=w.offset(),b=n.css(f,"top"),B=n.css(f,"left"),E=(K==="absolute"||K==="fixed")&&(b+B).indexOf("auto")>-1,E?(y=w.position(),A=y.top,P=y.left):(A=parseFloat(b)||0,P=parseFloat(B)||0),o(u)&&(u=u.call(f,k,n.extend({},v))),u.top!=null&&(D.top=u.top-v.top+A),u.left!=null&&(D.left=u.left-v.left+P),"using"in u?u.using.call(f,D):w.css(D)}},n.fn.extend({offset:function(f){if(arguments.length)return f===void 0?this:this.each(function(P){n.offset.setOffset(this,f,P)});var u,k,y=this[0];if(y)return y.getClientRects().length?(u=y.getBoundingClientRect(),k=y.ownerDocument.defaultView,{top:u.top+k.pageYOffset,left:u.left+k.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var f,u,k,y=this[0],P={top:0,left:0};if(n.css(y,"position")==="fixed")u=y.getBoundingClientRect();else{for(u=this.offset(),k=y.ownerDocument,f=y.offsetParent||k.documentElement;f&&(f===k.body||f===k.documentElement)&&n.css(f,"position")==="static";)f=f.parentNode;f&&f!==y&&f.nodeType===1&&(P=n(f).offset(),P.top+=n.css(f,"borderTopWidth",!0),P.left+=n.css(f,"borderLeftWidth",!0))}return{top:u.top-P.top-n.css(y,"marginTop",!0),left:u.left-P.left-n.css(y,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var f=this.offsetParent;f&&n.css(f,"position")==="static";)f=f.offsetParent;return f||c})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(f,u){var k=u==="pageYOffset";n.fn[f]=function(y){return d(this,function(P,b,A){var v;if(m(P)?v=P:P.nodeType===9&&(v=P.defaultView),A===void 0)return v?v[u]:P[b];v?v.scrollTo(k?v.pageXOffset:A,k?A:v.pageYOffset):P[b]=A},f,y,arguments.length)}}),n.each(["top","left"],function(f,u){n.cssHooks[u]=h(i.pixelPosition,function(k,y){if(y)return y=l(k,u),r.test(y)?n(k).position()[u]+"px":y})}),n}.apply(_,g),t!==void 0&&(N.exports=t)},7e3:(N,_,s)=>{var g,t;g=[s(8215),s(4521),s(2042),s(9559)],t=function(n,d){"use strict";return n.extend({queue:function(c,o,r){var l;if(c)return o=(o||"fx")+"queue",l=d.get(c,o),r&&(!l||Array.isArray(r)?l=d.access(c,o,n.makeArray(r)):l.push(r)),l||[]},dequeue:function(c,o){o=o||"fx";var r=n.queue(c,o),l=r.length,h=r.shift(),i=n._queueHooks(c,o),m=function(){n.dequeue(c,o)};h==="inprogress"&&(h=r.shift(),l--),h&&(o==="fx"&&r.unshift("inprogress"),delete i.stop,h.call(c,m,i)),!l&&i&&i.empty.fire()},_queueHooks:function(c,o){var r=o+"queueHooks";return d.get(c,r)||d.access(c,r,{empty:n.Callbacks("once memory").add(function(){d.remove(c,[o+"queue",r])})})}}),n.fn.extend({queue:function(c,o){var r=2;return typeof c!="string"&&(o=c,c="fx",r--),arguments.length<r?n.queue(this[0],c):o===void 0?this:this.each(function(){var l=n.queue(this,c,o);n._queueHooks(this,c),c==="fx"&&l[0]!=="inprogress"&&n.dequeue(this,c)})},dequeue:function(c){return this.each(function(){n.dequeue(this,c)})},clearQueue:function(c){return this.queue(c||"fx",[])},promise:function(c,o){var r,l=1,h=n.Deferred(),i=this,m=this.length,f=function(){--l||h.resolveWith(i,[i])};for(typeof c!="string"&&(o=c,c=void 0),c=c||"fx";m--;)r=d.get(i[m],c+"queueHooks"),r&&r.empty&&(l++,r.empty.add(f));return f(),h.promise(o)}}),n}.apply(_,g),t!==void 0&&(N.exports=t)},7485:(N,_,s)=>{var g,t;g=[s(8215),s(7e3),s(1326)],t=function(n){"use strict";return n.fn.delay=function(d,c){return d=n.fx&&n.fx.speeds[d]||d,c=c||"fx",this.queue(c,function(o,r){var l=window.setTimeout(o,d);r.stop=function(){window.clearTimeout(l)}})},n.fn.delay}.apply(_,g),t!==void 0&&(N.exports=t)},497:(N,_,s)=>{var g,t;g=[s(8215),s(8803),s(8858),s(6066),s(6917),s(2143),s(4564),s(4663),s(4142),s(6735),s(5026),s(1374),s(3948),s(5796),s(6435),s(8465)],t=function(n,d,c,o,r,l,h,i,m,f,u,k,y,P){"use strict";var b=o,A=i;(function(){var v,B,E,K,w,D=A,S,L,j,U,Y,x=n.expando,F=0,O=0,q=me(),H=me(),Q=me(),oe=me(),fe=function(M,$){return M===$&&(w=!0),0},Z="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ye="(?:\\\\[\\da-fA-F]{1,6}"+k+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",ke="\\["+k+"*("+ye+")(?:"+k+"*([*^$|!~]?=)"+k+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+ye+"))|)"+k+"*\\]",Ne=":("+ye+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+ke+")*)|.*)\\)|)",Qe=new RegExp(k+"+","g"),ma=new RegExp("^"+k+"*,"+k+"*"),Na=new RegExp("^"+k+"*([>+~]|"+k+")"+k+"*"),va=new RegExp(k+"|>"),xa=new RegExp(Ne),Ke=new RegExp("^"+ye+"$"),Aa={ID:new RegExp("^#("+ye+")"),CLASS:new RegExp("^\\.("+ye+")"),TAG:new RegExp("^("+ye+"|[*])"),ATTR:new RegExp("^"+ke),PSEUDO:new RegExp("^"+Ne),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+k+"*(even|odd|(([+-]|)(\\d*)n|)"+k+"*(?:([+-]|)"+k+"*(\\d+)|))"+k+"*\\)|)","i"),bool:new RegExp("^(?:"+Z+")$","i"),needsContext:new RegExp("^"+k+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+k+"*((?:-\\d)?\\d*)"+k+"*\\)|)(?=[^-]|$)","i")},Me=/^(?:input|select|textarea|button)$/i,Je=/^h\d$/i,Za=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,mn=/[+~]/,na=new RegExp("\\\\[\\da-fA-F]{1,6}"+k+"?|\\\\([^\\r\\n\\f])","g"),we=function(M,$){var X="0x"+M.slice(1)-65536;return $||(X<0?String.fromCharCode(X+65536):String.fromCharCode(X>>10|55296,X&1023|56320))},ue=function(){sa()},Ee=ba(function(M){return M.disabled===!0&&d(M,"fieldset")},{dir:"parentNode",next:"legend"});function ve(){try{return S.activeElement}catch(M){}}try{D.apply(c=m.call(b.childNodes),b.childNodes),c[b.childNodes.length].nodeType}catch(M){D={apply:function($,X){A.apply($,m.call(X))},call:function($){A.apply($,m.call(arguments,1))}}}function V(M,$,X,ee){var re,_e,Ae,Be,Pe,Ue,te,ne=$&&$.ownerDocument,pe=$?$.nodeType:9;if(X=X||[],typeof M!="string"||!M||pe!==1&&pe!==9&&pe!==11)return X;if(!ee&&(sa($),$=$||S,j)){if(pe!==11&&(Pe=Za.exec(M)))if(re=Pe[1]){if(pe===9)if(Ae=$.getElementById(re)){if(Ae.id===re)return D.call(X,Ae),X}else return X;else if(ne&&(Ae=ne.getElementById(re))&&V.contains($,Ae)&&Ae.id===re)return D.call(X,Ae),X}else{if(Pe[2])return D.apply(X,$.getElementsByTagName(M)),X;if((re=Pe[3])&&$.getElementsByClassName)return D.apply(X,$.getElementsByClassName(re)),X}if(!oe[M+" "]&&(!U||!U.test(M))){if(te=M,ne=$,pe===1&&(va.test(M)||Na.test(M))){for(ne=mn.test(M)&&Xe($.parentNode)||$,(ne!=$||!P.scope)&&((Be=$.getAttribute("id"))?Be=n.escapeSelector(Be):$.setAttribute("id",Be=x)),Ue=Fa(M),_e=Ue.length;_e--;)Ue[_e]=(Be?"#"+Be:":scope")+" "+La(Ue[_e]);te=Ue.join(",")}try{return D.apply(X,ne.querySelectorAll(te)),X}catch(se){oe(M,!0)}finally{Be===x&&$.removeAttribute("id")}}}return Mn(M.replace(y,"$1"),$,X,ee)}function me(){var M=[];function $(X,ee){return M.push(X+" ")>B.cacheLength&&delete $[M.shift()],$[X+" "]=ee}return $}function ge(M){return M[x]=!0,M}function he(M){var $=S.createElement("fieldset");try{return!!M($)}catch(X){return!1}finally{$.parentNode&&$.parentNode.removeChild($),$=null}}function Le(M){return function($){return d($,"input")&&$.type===M}}function Fe(M){return function($){return(d($,"input")||d($,"button"))&&$.type===M}}function Oe(M){return function($){return"form"in $?$.parentNode&&$.disabled===!1?"label"in $?"label"in $.parentNode?$.parentNode.disabled===M:$.disabled===M:$.isDisabled===M||$.isDisabled!==!M&&Ee($)===M:$.disabled===M:"label"in $?$.disabled===M:!1}}function ze(M){return ge(function($){return $=+$,ge(function(X,ee){for(var re,_e=M([],X.length,$),Ae=_e.length;Ae--;)X[re=_e[Ae]]&&(X[re]=!(ee[re]=X[re]))})})}function Xe(M){return M&&typeof M.getElementsByTagName!="undefined"&&M}function sa(M){var $,X=M?M.ownerDocument||M:b;return X==S||X.nodeType!==9||!X.documentElement||(S=X,L=S.documentElement,j=!n.isXMLDoc(S),Y=L.matches||L.webkitMatchesSelector||L.msMatchesSelector,b!=S&&($=S.defaultView)&&$.top!==$&&$.addEventListener("unload",ue),P.getById=he(function(ee){return L.appendChild(ee).id=n.expando,!S.getElementsByName||!S.getElementsByName(n.expando).length}),P.disconnectedMatch=he(function(ee){return Y.call(ee,"*")}),P.scope=he(function(){return S.querySelectorAll(":scope")}),P.cssHas=he(function(){try{return S.querySelector(":has(*,:jqfake)"),!1}catch(ee){return!0}}),P.getById?(B.filter.ID=function(ee){var re=ee.replace(na,we);return function(_e){return _e.getAttribute("id")===re}},B.find.ID=function(ee,re){if(typeof re.getElementById!="undefined"&&j){var _e=re.getElementById(ee);return _e?[_e]:[]}}):(B.filter.ID=function(ee){var re=ee.replace(na,we);return function(_e){var Ae=typeof _e.getAttributeNode!="undefined"&&_e.getAttributeNode("id");return Ae&&Ae.value===re}},B.find.ID=function(ee,re){if(typeof re.getElementById!="undefined"&&j){var _e,Ae,Be,Pe=re.getElementById(ee);if(Pe){if(_e=Pe.getAttributeNode("id"),_e&&_e.value===ee)return[Pe];for(Be=re.getElementsByName(ee),Ae=0;Pe=Be[Ae++];)if(_e=Pe.getAttributeNode("id"),_e&&_e.value===ee)return[Pe]}return[]}}),B.find.TAG=function(ee,re){return typeof re.getElementsByTagName!="undefined"?re.getElementsByTagName(ee):re.querySelectorAll(ee)},B.find.CLASS=function(ee,re){if(typeof re.getElementsByClassName!="undefined"&&j)return re.getElementsByClassName(ee)},U=[],he(function(ee){var re;L.appendChild(ee).innerHTML="<a id='"+x+"' href='' disabled='disabled'></a><select id='"+x+"-\r\\' disabled='disabled'><option selected=''></option></select>",ee.querySelectorAll("[selected]").length||U.push("\\["+k+"*(?:value|"+Z+")"),ee.querySelectorAll("[id~="+x+"-]").length||U.push("~="),ee.querySelectorAll("a#"+x+"+*").length||U.push(".#.+[+~]"),ee.querySelectorAll(":checked").length||U.push(":checked"),re=S.createElement("input"),re.setAttribute("type","hidden"),ee.appendChild(re).setAttribute("name","D"),L.appendChild(ee).disabled=!0,ee.querySelectorAll(":disabled").length!==2&&U.push(":enabled",":disabled"),re=S.createElement("input"),re.setAttribute("name",""),ee.appendChild(re),ee.querySelectorAll("[name='']").length||U.push("\\["+k+"*name"+k+"*="+k+`*(?:''|"")`)}),P.cssHas||U.push(":has"),U=U.length&&new RegExp(U.join("|")),fe=function(ee,re){if(ee===re)return w=!0,0;var _e=!ee.compareDocumentPosition-!re.compareDocumentPosition;return _e||(_e=(ee.ownerDocument||ee)==(re.ownerDocument||re)?ee.compareDocumentPosition(re):1,_e&1||!P.sortDetached&&re.compareDocumentPosition(ee)===_e?ee===S||ee.ownerDocument==b&&V.contains(b,ee)?-1:re===S||re.ownerDocument==b&&V.contains(b,re)?1:K?r.call(K,ee)-r.call(K,re):0:_e&4?-1:1)}),S}V.matches=function(M,$){return V(M,null,null,$)},V.matchesSelector=function(M,$){if(sa(M),j&&!oe[$+" "]&&(!U||!U.test($)))try{var X=Y.call(M,$);if(X||P.disconnectedMatch||M.document&&M.document.nodeType!==11)return X}catch(ee){oe($,!0)}return V($,S,null,[M]).length>0},V.contains=function(M,$){return(M.ownerDocument||M)!=S&&sa(M),n.contains(M,$)},V.attr=function(M,$){(M.ownerDocument||M)!=S&&sa(M);var X=B.attrHandle[$.toLowerCase()],ee=X&&l.call(B.attrHandle,$.toLowerCase())?X(M,$,!j):void 0;return ee!==void 0?ee:M.getAttribute($)},V.error=function(M){throw new Error("Syntax error, unrecognized expression: "+M)},n.uniqueSort=function(M){var $,X=[],ee=0,re=0;if(w=!P.sortStable,K=!P.sortStable&&m.call(M,0),f.call(M,fe),w){for(;$=M[re++];)$===M[re]&&(ee=X.push(re));for(;ee--;)u.call(M,X[ee],1)}return K=null,M},n.fn.uniqueSort=function(){return this.pushStack(n.uniqueSort(m.apply(this)))},B=n.expr={cacheLength:50,createPseudo:ge,match:Aa,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(M){return M[1]=M[1].replace(na,we),M[3]=(M[3]||M[4]||M[5]||"").replace(na,we),M[2]==="~="&&(M[3]=" "+M[3]+" "),M.slice(0,4)},CHILD:function(M){return M[1]=M[1].toLowerCase(),M[1].slice(0,3)==="nth"?(M[3]||V.error(M[0]),M[4]=+(M[4]?M[5]+(M[6]||1):2*(M[3]==="even"||M[3]==="odd")),M[5]=+(M[7]+M[8]||M[3]==="odd")):M[3]&&V.error(M[0]),M},PSEUDO:function(M){var $,X=!M[6]&&M[2];return Aa.CHILD.test(M[0])?null:(M[3]?M[2]=M[4]||M[5]||"":X&&xa.test(X)&&($=Fa(X,!0))&&($=X.indexOf(")",X.length-$)-X.length)&&(M[0]=M[0].slice(0,$),M[2]=X.slice(0,$)),M.slice(0,3))}},filter:{TAG:function(M){var $=M.replace(na,we).toLowerCase();return M==="*"?function(){return!0}:function(X){return d(X,$)}},CLASS:function(M){var $=q[M+" "];return $||($=new RegExp("(^|"+k+")"+M+"("+k+"|$)"))&&q(M,function(X){return $.test(typeof X.className=="string"&&X.className||typeof X.getAttribute!="undefined"&&X.getAttribute("class")||"")})},ATTR:function(M,$,X){return function(ee){var re=V.attr(ee,M);return re==null?$==="!=":$?(re+="",$==="="?re===X:$==="!="?re!==X:$==="^="?X&&re.indexOf(X)===0:$==="*="?X&&re.indexOf(X)>-1:$==="$="?X&&re.slice(-X.length)===X:$==="~="?(" "+re.replace(Qe," ")+" ").indexOf(X)>-1:$==="|="?re===X||re.slice(0,X.length+1)===X+"-":!1):!0}},CHILD:function(M,$,X,ee,re){var _e=M.slice(0,3)!=="nth",Ae=M.slice(-4)!=="last",Be=$==="of-type";return ee===1&&re===0?function(Pe){return!!Pe.parentNode}:function(Pe,Ue,te){var ne,pe,se,be,xe,Te=_e!==Ae?"nextSibling":"previousSibling",oa=Pe.parentNode,ya=Be&&Pe.nodeName.toLowerCase(),Ta=!te&&!Be,ga=!1;if(oa){if(_e){for(;Te;){for(se=Pe;se=se[Te];)if(Be?d(se,ya):se.nodeType===1)return!1;xe=Te=M==="only"&&!xe&&"nextSibling"}return!0}if(xe=[Ae?oa.firstChild:oa.lastChild],Ae&&Ta){for(pe=oa[x]||(oa[x]={}),ne=pe[M]||[],be=ne[0]===F&&ne[1],ga=be&&ne[2],se=be&&oa.childNodes[be];se=++be&&se&&se[Te]||(ga=be=0)||xe.pop();)if(se.nodeType===1&&++ga&&se===Pe){pe[M]=[F,be,ga];break}}else if(Ta&&(pe=Pe[x]||(Pe[x]={}),ne=pe[M]||[],be=ne[0]===F&&ne[1],ga=be),ga===!1)for(;(se=++be&&se&&se[Te]||(ga=be=0)||xe.pop())&&!((Be?d(se,ya):se.nodeType===1)&&++ga&&(Ta&&(pe=se[x]||(se[x]={}),pe[M]=[F,ga]),se===Pe)););return ga-=re,ga===ee||ga%ee===0&&ga/ee>=0}}},PSEUDO:function(M,$){var X,ee=B.pseudos[M]||B.setFilters[M.toLowerCase()]||V.error("unsupported pseudo: "+M);return ee[x]?ee($):ee.length>1?(X=[M,M,"",$],B.setFilters.hasOwnProperty(M.toLowerCase())?ge(function(re,_e){for(var Ae,Be=ee(re,$),Pe=Be.length;Pe--;)Ae=r.call(re,Be[Pe]),re[Ae]=!(_e[Ae]=Be[Pe])}):function(re){return ee(re,0,X)}):ee}},pseudos:{not:ge(function(M){var $=[],X=[],ee=_a(M.replace(y,"$1"));return ee[x]?ge(function(re,_e,Ae,Be){for(var Pe,Ue=ee(re,null,Be,[]),te=re.length;te--;)(Pe=Ue[te])&&(re[te]=!(_e[te]=Pe))}):function(re,_e,Ae){return $[0]=re,ee($,null,Ae,X),$[0]=null,!X.pop()}}),has:ge(function(M){return function($){return V(M,$).length>0}}),contains:ge(function(M){return M=M.replace(na,we),function($){return($.textContent||n.text($)).indexOf(M)>-1}}),lang:ge(function(M){return Ke.test(M||"")||V.error("unsupported lang: "+M),M=M.replace(na,we).toLowerCase(),function($){var X;do if(X=j?$.lang:$.getAttribute("xml:lang")||$.getAttribute("lang"))return X=X.toLowerCase(),X===M||X.indexOf(M+"-")===0;while(($=$.parentNode)&&$.nodeType===1);return!1}}),target:function(M){var $=window.location&&window.location.hash;return $&&$.slice(1)===M.id},root:function(M){return M===L},focus:function(M){return M===ve()&&S.hasFocus()&&!!(M.type||M.href||~M.tabIndex)},enabled:Oe(!1),disabled:Oe(!0),checked:function(M){return d(M,"input")&&!!M.checked||d(M,"option")&&!!M.selected},selected:function(M){return M.parentNode&&M.parentNode.selectedIndex,M.selected===!0},empty:function(M){for(M=M.firstChild;M;M=M.nextSibling)if(M.nodeType<6)return!1;return!0},parent:function(M){return!B.pseudos.empty(M)},header:function(M){return Je.test(M.nodeName)},input:function(M){return Me.test(M.nodeName)},button:function(M){return d(M,"input")&&M.type==="button"||d(M,"button")},text:function(M){var $;return d(M,"input")&&M.type==="text"&&(($=M.getAttribute("type"))==null||$.toLowerCase()==="text")},first:ze(function(){return[0]}),last:ze(function(M,$){return[$-1]}),eq:ze(function(M,$,X){return[X<0?X+$:X]}),even:ze(function(M,$){for(var X=0;X<$;X+=2)M.push(X);return M}),odd:ze(function(M,$){for(var X=1;X<$;X+=2)M.push(X);return M}),lt:ze(function(M,$,X){var ee;for(X<0?ee=X+$:X>$?ee=$:ee=X;--ee>=0;)M.push(ee);return M}),gt:ze(function(M,$,X){for(var ee=X<0?X+$:X;++ee<$;)M.push(ee);return M})}},B.pseudos.nth=B.pseudos.eq;for(v in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})B.pseudos[v]=Le(v);for(v in{submit:!0,reset:!0})B.pseudos[v]=Fe(v);function fa(){}fa.prototype=B.filters=B.pseudos,B.setFilters=new fa;function Fa(M,$){var X,ee,re,_e,Ae,Be,Pe,Ue=H[M+" "];if(Ue)return $?0:Ue.slice(0);for(Ae=M,Be=[],Pe=B.preFilter;Ae;){(!X||(ee=ma.exec(Ae)))&&(ee&&(Ae=Ae.slice(ee[0].length)||Ae),Be.push(re=[])),X=!1,(ee=Na.exec(Ae))&&(X=ee.shift(),re.push({value:X,type:ee[0].replace(y," ")}),Ae=Ae.slice(X.length));for(_e in B.filter)(ee=Aa[_e].exec(Ae))&&(!Pe[_e]||(ee=Pe[_e](ee)))&&(X=ee.shift(),re.push({value:X,type:_e,matches:ee}),Ae=Ae.slice(X.length));if(!X)break}return $?Ae.length:Ae?V.error(M):H(M,Be).slice(0)}function La(M){for(var $=0,X=M.length,ee="";$<X;$++)ee+=M[$].value;return ee}function ba(M,$,X){var ee=$.dir,re=$.next,_e=re||ee,Ae=X&&_e==="parentNode",Be=O++;return $.first?function(Pe,Ue,te){for(;Pe=Pe[ee];)if(Pe.nodeType===1||Ae)return M(Pe,Ue,te);return!1}:function(Pe,Ue,te){var ne,pe,se=[F,Be];if(te){for(;Pe=Pe[ee];)if((Pe.nodeType===1||Ae)&&M(Pe,Ue,te))return!0}else for(;Pe=Pe[ee];)if(Pe.nodeType===1||Ae)if(pe=Pe[x]||(Pe[x]={}),re&&d(Pe,re))Pe=Pe[ee]||Pe;else{if((ne=pe[_e])&&ne[0]===F&&ne[1]===Be)return se[2]=ne[2];if(pe[_e]=se,se[2]=M(Pe,Ue,te))return!0}return!1}}function un(M){return M.length>1?function($,X,ee){for(var re=M.length;re--;)if(!M[re]($,X,ee))return!1;return!0}:M[0]}function fn(M,$,X){for(var ee=0,re=$.length;ee<re;ee++)V(M,$[ee],X);return X}function Sn(M,$,X,ee,re){for(var _e,Ae=[],Be=0,Pe=M.length,Ue=$!=null;Be<Pe;Be++)(_e=M[Be])&&(!X||X(_e,ee,re))&&(Ae.push(_e),Ue&&$.push(Be));return Ae}function Cn(M,$,X,ee,re,_e){return ee&&!ee[x]&&(ee=Cn(ee)),re&&!re[x]&&(re=Cn(re,_e)),ge(function(Ae,Be,Pe,Ue){var te,ne,pe,se,be=[],xe=[],Te=Be.length,oa=Ae||fn($||"*",Pe.nodeType?[Pe]:Pe,[]),ya=M&&(Ae||!$)?Sn(oa,be,M,Pe,Ue):oa;if(X?(se=re||(Ae?M:Te||ee)?[]:Be,X(ya,se,Pe,Ue)):se=ya,ee)for(te=Sn(se,xe),ee(te,[],Pe,Ue),ne=te.length;ne--;)(pe=te[ne])&&(se[xe[ne]]=!(ya[xe[ne]]=pe));if(Ae){if(re||M){if(re){for(te=[],ne=se.length;ne--;)(pe=se[ne])&&te.push(ya[ne]=pe);re(null,se=[],te,Ue)}for(ne=se.length;ne--;)(pe=se[ne])&&(te=re?r.call(Ae,pe):be[ne])>-1&&(Ae[te]=!(Be[te]=pe))}}else se=Sn(se===Be?se.splice(Te,se.length):se),re?re(null,Be,se,Ue):D.apply(Be,se)})}function Ca(M){for(var $,X,ee,re=M.length,_e=B.relative[M[0].type],Ae=_e||B.relative[" "],Be=_e?1:0,Pe=ba(function(ne){return ne===$},Ae,!0),Ue=ba(function(ne){return r.call($,ne)>-1},Ae,!0),te=[function(ne,pe,se){var be=!_e&&(se||pe!=E)||(($=pe).nodeType?Pe(ne,pe,se):Ue(ne,pe,se));return $=null,be}];Be<re;Be++)if(X=B.relative[M[Be].type])te=[ba(un(te),X)];else{if(X=B.filter[M[Be].type].apply(null,M[Be].matches),X[x]){for(ee=++Be;ee<re&&!B.relative[M[ee].type];ee++);return Cn(Be>1&&un(te),Be>1&&La(M.slice(0,Be-1).concat({value:M[Be-2].type===" "?"*":""})).replace(y,"$1"),X,Be<ee&&Ca(M.slice(Be,ee)),ee<re&&Ca(M=M.slice(ee)),ee<re&&La(M))}te.push(X)}return un(te)}function jn(M,$){var X=$.length>0,ee=M.length>0,re=function(_e,Ae,Be,Pe,Ue){var te,ne,pe,se=0,be="0",xe=_e&&[],Te=[],oa=E,ya=_e||ee&&B.find.TAG("*",Ue),Ta=F+=oa==null?1:Math.random()||.1,ga=ya.length;for(Ue&&(E=Ae==S||Ae||Ue);be!==ga&&(te=ya[be])!=null;be++){if(ee&&te){for(ne=0,!Ae&&te.ownerDocument!=S&&(sa(te),Be=!j);pe=M[ne++];)if(pe(te,Ae||S,Be)){D.call(Pe,te);break}Ue&&(F=Ta)}X&&((te=!pe&&te)&&se--,_e&&xe.push(te))}if(se+=be,X&&be!==se){for(ne=0;pe=$[ne++];)pe(xe,Te,Ae,Be);if(_e){if(se>0)for(;be--;)xe[be]||Te[be]||(Te[be]=h.call(Pe));Te=Sn(Te)}D.apply(Pe,Te),Ue&&!_e&&Te.length>0&&se+$.length>1&&n.uniqueSort(Pe)}return Ue&&(F=Ta,E=oa),xe};return X?ge(re):re}function _a(M,$){var X,ee=[],re=[],_e=Q[M+" "];if(!_e){for($||($=Fa(M)),X=$.length;X--;)_e=Ca($[X]),_e[x]?ee.push(_e):re.push(_e);_e=Q(M,jn(re,ee)),_e.selector=M}return _e}function Mn(M,$,X,ee){var re,_e,Ae,Be,Pe,Ue=typeof M=="function"&&M,te=!ee&&Fa(M=Ue.selector||M);if(X=X||[],te.length===1){if(_e=te[0]=te[0].slice(0),_e.length>2&&(Ae=_e[0]).type==="ID"&&$.nodeType===9&&j&&B.relative[_e[1].type]){if($=(B.find.ID(Ae.matches[0].replace(na,we),$)||[])[0],$)Ue&&($=$.parentNode);else return X;M=M.slice(_e.shift().value.length)}for(re=Aa.needsContext.test(M)?0:_e.length;re--&&(Ae=_e[re],!B.relative[Be=Ae.type]);)if((Pe=B.find[Be])&&(ee=Pe(Ae.matches[0].replace(na,we),mn.test(_e[0].type)&&Xe($.parentNode)||$))){if(_e.splice(re,1),M=ee.length&&La(_e),!M)return D.apply(X,ee),X;break}}return(Ue||_a(M,te))(ee,$,!j,X,!$||mn.test(M)&&Xe($.parentNode)||$),X}P.sortStable=x.split("").sort(fe).join("")===x,sa(),P.sortDetached=he(function(M){return M.compareDocumentPosition(S.createElement("fieldset"))&1}),n.find=V,n.expr[":"]=n.expr.pseudos,n.unique=n.uniqueSort,V.compile=_a,V.select=Mn,V.setDocument=sa,V.escape=n.escapeSelector,V.getText=n.text,V.isXML=n.isXMLDoc,V.selectors=n.expr,V.support=n.support,V.uniqueSort=n.uniqueSort})()}.apply(_,g),t!==void 0&&(N.exports=t)},6435:(N,_,s)=>{var g,t;g=[s(8215)],t=function(n){"use strict";n.contains=function(d,c){var o=c&&c.parentNode;return d===o||!!(o&&o.nodeType===1&&(d.contains?d.contains(o):d.compareDocumentPosition&&d.compareDocumentPosition(o)&16))}}.apply(_,g),t!==void 0&&(N.exports=t)},8465:(N,_,s)=>{var g,t;g=[s(8215)],t=function(n){"use strict";var d=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function c(o,r){return r?o==="\0"?"\uFFFD":o.slice(0,-1)+"\\"+o.charCodeAt(o.length-1).toString(16)+" ":"\\"+o}n.escapeSelector=function(o){return(o+"").replace(d,c)}}.apply(_,g),t!==void 0&&(N.exports=t)},6069:(N,_,s)=>{var g,t;g=[s(8215),s(8060),s(2967),s(232),s(9441),s(7167),s(4162)],t=function(n,d,c,o){"use strict";var r=/\[\]$/,l=/\r?\n/g,h=/^(?:submit|button|image|reset|file)$/i,i=/^(?:input|select|textarea|keygen)/i;function m(f,u,k,y){var P;if(Array.isArray(u))n.each(u,function(b,A){k||r.test(f)?y(f,A):m(f+"["+(typeof A=="object"&&A!=null?b:"")+"]",A,k,y)});else if(!k&&d(u)==="object")for(P in u)m(f+"["+P+"]",u[P],k,y);else y(f,u)}return n.param=function(f,u){var k,y=[],P=function(b,A){var v=o(A)?A():A;y[y.length]=encodeURIComponent(b)+"="+encodeURIComponent(v==null?"":v)};if(f==null)return"";if(Array.isArray(f)||f.jquery&&!n.isPlainObject(f))n.each(f,function(){P(this.name,this.value)});else for(k in f)m(k,f[k],u,P);return y.join("&")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var f=n.prop(this,"elements");return f?n.makeArray(f):this}).filter(function(){var f=this.type;return this.name&&!n(this).is(":disabled")&&i.test(this.nodeName)&&!h.test(f)&&(this.checked||!c.test(f))}).map(function(f,u){var k=n(this).val();return k==null?null:Array.isArray(k)?n.map(k,function(y){return{name:u.name,value:y.replace(l,`\r
`)}}):{name:u.name,value:k.replace(l,`\r
`)}}).get()}}),n}.apply(_,g),t!==void 0&&(N.exports=t)},7167:(N,_,s)=>{var g,t;g=[s(8215),s(2465),s(6917),s(8690),s(2899),s(4783),s(8803),s(9441),s(0),s(497)],t=function(n,d,c,o,r,l,h){"use strict";var i=/^(?:parents|prev(?:Until|All))/,m={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(u){var k=n(u,this),y=k.length;return this.filter(function(){for(var P=0;P<y;P++)if(n.contains(this,k[P]))return!0})},closest:function(u,k){var y,P=0,b=this.length,A=[],v=typeof u!="string"&&n(u);if(!l.test(u)){for(;P<b;P++)for(y=this[P];y&&y!==k;y=y.parentNode)if(y.nodeType<11&&(v?v.index(y)>-1:y.nodeType===1&&n.find.matchesSelector(y,u))){A.push(y);break}}return this.pushStack(A.length>1?n.uniqueSort(A):A)},index:function(u){return u?typeof u=="string"?c.call(n(u),this[0]):c.call(this,u.jquery?u[0]:u):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(u,k){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(u,k))))},addBack:function(u){return this.add(u==null?this.prevObject:this.prevObject.filter(u))}});function f(u,k){for(;(u=u[k])&&u.nodeType!==1;);return u}return n.each({parent:function(u){var k=u.parentNode;return k&&k.nodeType!==11?k:null},parents:function(u){return o(u,"parentNode")},parentsUntil:function(u,k,y){return o(u,"parentNode",y)},next:function(u){return f(u,"nextSibling")},prev:function(u){return f(u,"previousSibling")},nextAll:function(u){return o(u,"nextSibling")},prevAll:function(u){return o(u,"previousSibling")},nextUntil:function(u,k,y){return o(u,"nextSibling",y)},prevUntil:function(u,k,y){return o(u,"previousSibling",y)},siblings:function(u){return r((u.parentNode||{}).firstChild,u)},children:function(u){return r(u.firstChild)},contents:function(u){return u.contentDocument!=null&&d(u.contentDocument)?u.contentDocument:(h(u,"template")&&(u=u.content||u),n.merge([],u.childNodes))}},function(u,k){n.fn[u]=function(y,P){var b=n.map(this,k,y);return u.slice(-5)!=="Until"&&(P=y),P&&typeof P=="string"&&(b=n.filter(P,b)),this.length>1&&(m[u]||n.uniqueSort(b),i.test(u)&&b.reverse()),this.pushStack(b)}}),n}.apply(_,g),t!==void 0&&(N.exports=t)},0:(N,_,s)=>{var g,t;g=[s(8215),s(6917),s(232),s(4783),s(497)],t=function(n,d,c,o){"use strict";function r(l,h,i){return c(h)?n.grep(l,function(m,f){return!!h.call(m,f,m)!==i}):h.nodeType?n.grep(l,function(m){return m===h!==i}):typeof h!="string"?n.grep(l,function(m){return d.call(h,m)>-1!==i}):n.filter(h,l,i)}n.filter=function(l,h,i){var m=h[0];return i&&(l=":not("+l+")"),h.length===1&&m.nodeType===1?n.find.matchesSelector(m,l)?[m]:[]:n.find.matches(l,n.grep(h,function(f){return f.nodeType===1}))},n.fn.extend({find:function(l){var h,i,m=this.length,f=this;if(typeof l!="string")return this.pushStack(n(l).filter(function(){for(h=0;h<m;h++)if(n.contains(f[h],this))return!0}));for(i=this.pushStack([]),h=0;h<m;h++)n.find(l,f[h],i);return m>1?n.uniqueSort(i):i},filter:function(l){return this.pushStack(r(this,l||[],!1))},not:function(l){return this.pushStack(r(this,l||[],!0))},is:function(l){return!!r(this,typeof l=="string"&&o.test(l)?n(l):l||[],!1).length}})}.apply(_,g),t!==void 0&&(N.exports=t)},8690:(N,_,s)=>{var g,t;g=[s(8215)],t=function(n){"use strict";return function(d,c,o){for(var r=[],l=o!==void 0;(d=d[c])&&d.nodeType!==9;)if(d.nodeType===1){if(l&&n(d).is(o))break;r.push(d)}return r}}.apply(_,g),t!==void 0&&(N.exports=t)},4783:(N,_,s)=>{var g,t;g=[s(8215),s(497)],t=function(n){"use strict";return n.expr.match.needsContext}.apply(_,g),t!==void 0&&(N.exports=t)},2899:(N,_,s)=>{var g;g=function(){"use strict";return function(t,n){for(var d=[];t;t=t.nextSibling)t.nodeType===1&&t!==n&&d.push(t);return d}}.call(_,s,_,N),g!==void 0&&(N.exports=g)},6342:(N,_,s)=>{var g,t;g=[s(3877)],t=function(n){"use strict";return n.call(Object)}.apply(_,g),t!==void 0&&(N.exports=t)},8858:(N,_,s)=>{var g;g=function(){"use strict";return[]}.call(_,s,_,N),g!==void 0&&(N.exports=g)},3936:(N,_,s)=>{var g;g=function(){"use strict";return{}}.call(_,s,_,N),g!==void 0&&(N.exports=g)},6066:(N,_,s)=>{var g;g=function(){"use strict";return window.document}.call(_,s,_,N),g!==void 0&&(N.exports=g)},1768:(N,_,s)=>{var g,t;g=[s(6066)],t=function(n){"use strict";return n.documentElement}.apply(_,g),t!==void 0&&(N.exports=t)},2066:(N,_,s)=>{var g,t;g=[s(8858)],t=function(n){"use strict";return n.flat?function(d){return n.flat.call(d)}:function(d){return n.concat.apply([],d)}}.apply(_,g),t!==void 0&&(N.exports=t)},3877:(N,_,s)=>{var g,t;g=[s(2143)],t=function(n){"use strict";return n.toString}.apply(_,g),t!==void 0&&(N.exports=t)},2465:(N,_,s)=>{var g;g=function(){"use strict";return Object.getPrototypeOf}.call(_,s,_,N),g!==void 0&&(N.exports=g)},2143:(N,_,s)=>{var g,t;g=[s(3936)],t=function(n){"use strict";return n.hasOwnProperty}.apply(_,g),t!==void 0&&(N.exports=t)},6917:(N,_,s)=>{var g,t;g=[s(8858)],t=function(n){"use strict";return n.indexOf}.apply(_,g),t!==void 0&&(N.exports=t)},232:(N,_,s)=>{var g;g=function(){"use strict";return function(n){return typeof n=="function"&&typeof n.nodeType!="number"&&typeof n.item!="function"}}.call(_,s,_,N),g!==void 0&&(N.exports=g)},1736:(N,_,s)=>{var g;g=function(){"use strict";return function(n){return n!=null&&n===n.window}}.call(_,s,_,N),g!==void 0&&(N.exports=g)},1085:(N,_,s)=>{var g;g=function(){"use strict";return/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source}.call(_,s,_,N),g!==void 0&&(N.exports=g)},4564:(N,_,s)=>{var g,t;g=[s(8858)],t=function(n){"use strict";return n.pop}.apply(_,g),t!==void 0&&(N.exports=t)},4663:(N,_,s)=>{var g,t;g=[s(8858)],t=function(n){"use strict";return n.push}.apply(_,g),t!==void 0&&(N.exports=t)},2967:(N,_,s)=>{var g;g=function(){"use strict";return/^(?:checkbox|radio)$/i}.call(_,s,_,N),g!==void 0&&(N.exports=g)},9806:(N,_,s)=>{var g,t;g=[s(1085)],t=function(n){"use strict";return new RegExp("^(?:([+-])=|)("+n+")([a-z%]*)$","i")}.apply(_,g),t!==void 0&&(N.exports=t)},9059:(N,_,s)=>{var g;g=function(){"use strict";return/[^\x20\t\r\n\f]+/g}.call(_,s,_,N),g!==void 0&&(N.exports=g)},3948:(N,_,s)=>{var g,t;g=[s(1374)],t=function(n){"use strict";return new RegExp("^"+n+"+|((?:^|[^\\\\])(?:\\\\.)*)"+n+"+$","g")}.apply(_,g),t!==void 0&&(N.exports=t)},4142:(N,_,s)=>{var g,t;g=[s(8858)],t=function(n){"use strict";return n.slice}.apply(_,g),t!==void 0&&(N.exports=t)},6735:(N,_,s)=>{var g,t;g=[s(8858)],t=function(n){"use strict";return n.sort}.apply(_,g),t!==void 0&&(N.exports=t)},5026:(N,_,s)=>{var g,t;g=[s(8858)],t=function(n){"use strict";return n.splice}.apply(_,g),t!==void 0&&(N.exports=t)},5796:(N,_,s)=>{var g;g=function(){"use strict";return{}}.call(_,s,_,N),g!==void 0&&(N.exports=g)},2011:(N,_,s)=>{var g,t;g=[s(3936)],t=function(n){"use strict";return n.toString}.apply(_,g),t!==void 0&&(N.exports=t)},1374:(N,_,s)=>{var g;g=function(){"use strict";return"[\\x20\\t\\r\\n\\f]"}.call(_,s,_,N),g!==void 0&&(N.exports=g)},6210:(N,_,s)=>{var g,t;g=[s(8215),s(232),s(9441),s(3330),s(7167)],t=function(n,d){"use strict";return n.fn.extend({wrapAll:function(c){var o;return this[0]&&(d(c)&&(c=c.call(this[0])),o=n(c,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&o.insertBefore(this[0]),o.map(function(){for(var r=this;r.firstElementChild;)r=r.firstElementChild;return r}).append(this)),this},wrapInner:function(c){return d(c)?this.each(function(o){n(this).wrapInner(c.call(this,o))}):this.each(function(){var o=n(this),r=o.contents();r.length?r.wrapAll(c):o.append(c)})},wrap:function(c){var o=d(c);return this.each(function(r){n(this).wrapAll(o?c.call(this,r):c)})},unwrap:function(c){return this.parent(c).not("body").each(function(){n(this).replaceWith(this.childNodes)}),this}}),n}.apply(_,g),t!==void 0&&(N.exports=t)},4216:function(N,_,s){N=s.nmd(N);var g;/**
* @license
* Lodash <https://lodash.com/>
* Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
* Released under MIT license <https://lodash.com/license>
* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
*/(function(){var t,n="4.17.21",d=200,c="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",o="Expected a function",r="Invalid `variable` option passed into `_.template`",l="__lodash_hash_undefined__",h=500,i="__lodash_placeholder__",m=1,f=2,u=4,k=1,y=2,P=1,b=2,A=4,v=8,B=16,E=32,K=64,w=128,D=256,S=512,L=30,j="...",U=800,Y=16,x=1,F=2,O=3,q=1/0,H=9007199254740991,Q=17976931348623157e292,oe=0/0,fe=4294967295,Z=fe-1,ye=fe>>>1,ke=[["ary",w],["bind",P],["bindKey",b],["curry",v],["curryRight",B],["flip",S],["partial",E],["partialRight",K],["rearg",D]],Ne="[object Arguments]",Qe="[object Array]",ma="[object AsyncFunction]",Na="[object Boolean]",va="[object Date]",xa="[object DOMException]",Ke="[object Error]",Aa="[object Function]",Me="[object GeneratorFunction]",Je="[object Map]",Za="[object Number]",mn="[object Null]",na="[object Object]",we="[object Promise]",ue="[object Proxy]",Ee="[object RegExp]",ve="[object Set]",V="[object String]",me="[object Symbol]",ge="[object Undefined]",he="[object WeakMap]",Le="[object WeakSet]",Fe="[object ArrayBuffer]",Oe="[object DataView]",ze="[object Float32Array]",Xe="[object Float64Array]",sa="[object Int8Array]",fa="[object Int16Array]",Fa="[object Int32Array]",La="[object Uint8Array]",ba="[object Uint8ClampedArray]",un="[object Uint16Array]",fn="[object Uint32Array]",Sn=/\b__p \+= '';/g,Cn=/\b(__p \+=) '' \+/g,Ca=/(__e\(.*?\)|\b__t\)) \+\n'';/g,jn=/&(?:amp|lt|gt|quot|#39);/g,_a=/[&<>"']/g,Mn=RegExp(jn.source),M=RegExp(_a.source),$=/<%-([\s\S]+?)%>/g,X=/<%([\s\S]+?)%>/g,ee=/<%=([\s\S]+?)%>/g,re=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,_e=/^\w*$/,Ae=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Be=/[\\^$.*+?()[\]{}|]/g,Pe=RegExp(Be.source),Ue=/^\s+/,te=/\s/,ne=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,pe=/\{\n\/\* \[wrapped with (.+)\] \*/,se=/,? & /,be=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,xe=/[()=,{}\[\]\/\s]/,Te=/\\(\\)?/g,oa=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ya=/\w*$/,Ta=/^[-+]0x[0-9a-f]+$/i,ga=/^0b[01]+$/i,ra=/^\[object .+?Constructor\]$/,ea=/^0o[0-7]+$/i,fr=/^(?:0|[1-9]\d*)$/,Ni=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ot=/($^)/,qn=/['\n\r\u2028\u2029\\]/g,vt="\\ud800-\\udfff",Xo="\\u0300-\\u036f",Qo="\\ufe20-\\ufe2f",ep="\\u20d0-\\u20ff",vi=Xo+Qo+ep,bi="\\u2700-\\u27bf",Si="a-z\\xdf-\\xf6\\xf8-\\xff",ap="\\xac\\xb1\\xd7\\xf7",np="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",tp="\\u2000-\\u206f",rp=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Bi="A-Z\\xc0-\\xd6\\xd8-\\xde",Ei="\\ufe0e\\ufe0f",Ti=ap+np+tp+rp,gr="['\u2019]",ip="["+vt+"]",Di="["+Ti+"]",bt="["+vi+"]",wi="\\d+",sp="["+bi+"]",Li="["+Si+"]",Ri="[^"+vt+Ti+wi+bi+Si+Bi+"]",cr="\\ud83c[\\udffb-\\udfff]",op="(?:"+bt+"|"+cr+")",Ki="[^"+vt+"]",hr="(?:\\ud83c[\\udde6-\\uddff]){2}",mr="[\\ud800-\\udbff][\\udc00-\\udfff]",Gn="["+Bi+"]",xi="\\u200d",Ci="(?:"+Li+"|"+Ri+")",pp="(?:"+Gn+"|"+Ri+")",ji="(?:"+gr+"(?:d|ll|m|re|s|t|ve))?",Mi="(?:"+gr+"(?:D|LL|M|RE|S|T|VE))?",Oi=op+"?",Fi="["+Ei+"]?",lp="(?:"+xi+"(?:"+[Ki,hr,mr].join("|")+")"+Fi+Oi+")*",dp="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",up="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ui=Fi+Oi+lp,fp="(?:"+[sp,hr,mr].join("|")+")"+Ui,gp="(?:"+[Ki+bt+"?",bt,hr,mr,ip].join("|")+")",cp=RegExp(gr,"g"),hp=RegExp(bt,"g"),_r=RegExp(cr+"(?="+cr+")|"+gp+Ui,"g"),mp=RegExp([Gn+"?"+Li+"+"+ji+"(?="+[Di,Gn,"$"].join("|")+")",pp+"+"+Mi+"(?="+[Di,Gn+Ci,"$"].join("|")+")",Gn+"?"+Ci+"+"+ji,Gn+"+"+Mi,up,dp,wi,fp].join("|"),"g"),_p=RegExp("["+xi+vt+vi+Ei+"]"),yp=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,kp=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Ap=-1,ua={};ua[ze]=ua[Xe]=ua[sa]=ua[fa]=ua[Fa]=ua[La]=ua[ba]=ua[un]=ua[fn]=!0,ua[Ne]=ua[Qe]=ua[Fe]=ua[Na]=ua[Oe]=ua[va]=ua[Ke]=ua[Aa]=ua[Je]=ua[Za]=ua[na]=ua[Ee]=ua[ve]=ua[V]=ua[he]=!1;var da={};da[Ne]=da[Qe]=da[Fe]=da[Oe]=da[Na]=da[va]=da[ze]=da[Xe]=da[sa]=da[fa]=da[Fa]=da[Je]=da[Za]=da[na]=da[Ee]=da[ve]=da[V]=da[me]=da[La]=da[ba]=da[un]=da[fn]=!0,da[Ke]=da[Aa]=da[he]=!1;var Pp={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Ip={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Np={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},vp={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},bp=parseFloat,Sp=parseInt,Wi=typeof s.g=="object"&&s.g&&s.g.Object===Object&&s.g,Bp=typeof self=="object"&&self&&self.Object===Object&&self,Da=Wi||Bp||Function("return this")(),Hi=_&&!_.nodeType&&_,pt=Hi&&!0&&N&&!N.nodeType&&N,zi=pt&&pt.exports===Hi,yr=zi&&Wi.process,Xa=function(){try{var G=pt&&pt.require&&pt.require("util").types;return G||yr&&yr.binding&&yr.binding("util")}catch(ie){}}(),Yi=Xa&&Xa.isArrayBuffer,$i=Xa&&Xa.isDate,qi=Xa&&Xa.isMap,Gi=Xa&&Xa.isRegExp,Ji=Xa&&Xa.isSet,Vi=Xa&&Xa.isTypedArray;function Ya(G,ie,ae){switch(ae.length){case 0:return G.call(ie);case 1:return G.call(ie,ae[0]);case 2:return G.call(ie,ae[0],ae[1]);case 3:return G.call(ie,ae[0],ae[1],ae[2])}return G.apply(ie,ae)}function Ep(G,ie,ae,Se){for(var We=-1,ta=G==null?0:G.length;++We<ta;){var Sa=G[We];ie(Se,Sa,ae(Sa),G)}return Se}function Qa(G,ie){for(var ae=-1,Se=G==null?0:G.length;++ae<Se&&ie(G[ae],ae,G)!==!1;);return G}function Tp(G,ie){for(var ae=G==null?0:G.length;ae--&&ie(G[ae],ae,G)!==!1;);return G}function Zi(G,ie){for(var ae=-1,Se=G==null?0:G.length;++ae<Se;)if(!ie(G[ae],ae,G))return!1;return!0}function Bn(G,ie){for(var ae=-1,Se=G==null?0:G.length,We=0,ta=[];++ae<Se;){var Sa=G[ae];ie(Sa,ae,G)&&(ta[We++]=Sa)}return ta}function St(G,ie){var ae=G==null?0:G.length;return!!ae&&Jn(G,ie,0)>-1}function kr(G,ie,ae){for(var Se=-1,We=G==null?0:G.length;++Se<We;)if(ae(ie,G[Se]))return!0;return!1}function ca(G,ie){for(var ae=-1,Se=G==null?0:G.length,We=Array(Se);++ae<Se;)We[ae]=ie(G[ae],ae,G);return We}function En(G,ie){for(var ae=-1,Se=ie.length,We=G.length;++ae<Se;)G[We+ae]=ie[ae];return G}function Ar(G,ie,ae,Se){var We=-1,ta=G==null?0:G.length;for(Se&&ta&&(ae=G[++We]);++We<ta;)ae=ie(ae,G[We],We,G);return ae}function Dp(G,ie,ae,Se){var We=G==null?0:G.length;for(Se&&We&&(ae=G[--We]);We--;)ae=ie(ae,G[We],We,G);return ae}function Pr(G,ie){for(var ae=-1,Se=G==null?0:G.length;++ae<Se;)if(ie(G[ae],ae,G))return!0;return!1}var wp=Ir("length");function Lp(G){return G.split("")}function Rp(G){return G.match(be)||[]}function Xi(G,ie,ae){var Se;return ae(G,function(We,ta,Sa){if(ie(We,ta,Sa))return Se=ta,!1}),Se}function Bt(G,ie,ae,Se){for(var We=G.length,ta=ae+(Se?1:-1);Se?ta--:++ta<We;)if(ie(G[ta],ta,G))return ta;return-1}function Jn(G,ie,ae){return ie===ie?Yp(G,ie,ae):Bt(G,Qi,ae)}function Kp(G,ie,ae,Se){for(var We=ae-1,ta=G.length;++We<ta;)if(Se(G[We],ie))return We;return-1}function Qi(G){return G!==G}function es(G,ie){var ae=G==null?0:G.length;return ae?vr(G,ie)/ae:oe}function Ir(G){return function(ie){return ie==null?t:ie[G]}}function Nr(G){return function(ie){return G==null?t:G[ie]}}function as(G,ie,ae,Se,We){return We(G,function(ta,Sa,la){ae=Se?(Se=!1,ta):ie(ae,ta,Sa,la)}),ae}function xp(G,ie){var ae=G.length;for(G.sort(ie);ae--;)G[ae]=G[ae].value;return G}function vr(G,ie){for(var ae,Se=-1,We=G.length;++Se<We;){var ta=ie(G[Se]);ta!==t&&(ae=ae===t?ta:ae+ta)}return ae}function br(G,ie){for(var ae=-1,Se=Array(G);++ae<G;)Se[ae]=ie(ae);return Se}function Cp(G,ie){return ca(ie,function(ae){return[ae,G[ae]]})}function ns(G){return G&&G.slice(0,ss(G)+1).replace(Ue,"")}function $a(G){return function(ie){return G(ie)}}function Sr(G,ie){return ca(ie,function(ae){return G[ae]})}function lt(G,ie){return G.has(ie)}function ts(G,ie){for(var ae=-1,Se=G.length;++ae<Se&&Jn(ie,G[ae],0)>-1;);return ae}function rs(G,ie){for(var ae=G.length;ae--&&Jn(ie,G[ae],0)>-1;);return ae}function jp(G,ie){for(var ae=G.length,Se=0;ae--;)G[ae]===ie&&++Se;return Se}var Mp=Nr(Pp),Op=Nr(Ip);function Fp(G){return"\\"+vp[G]}function Up(G,ie){return G==null?t:G[ie]}function Vn(G){return _p.test(G)}function Wp(G){return yp.test(G)}function Hp(G){for(var ie,ae=[];!(ie=G.next()).done;)ae.push(ie.value);return ae}function Br(G){var ie=-1,ae=Array(G.size);return G.forEach(function(Se,We){ae[++ie]=[We,Se]}),ae}function is(G,ie){return function(ae){return G(ie(ae))}}function Tn(G,ie){for(var ae=-1,Se=G.length,We=0,ta=[];++ae<Se;){var Sa=G[ae];(Sa===ie||Sa===i)&&(G[ae]=i,ta[We++]=ae)}return ta}function Et(G){var ie=-1,ae=Array(G.size);return G.forEach(function(Se){ae[++ie]=Se}),ae}function zp(G){var ie=-1,ae=Array(G.size);return G.forEach(function(Se){ae[++ie]=[Se,Se]}),ae}function Yp(G,ie,ae){for(var Se=ae-1,We=G.length;++Se<We;)if(G[Se]===ie)return Se;return-1}function $p(G,ie,ae){for(var Se=ae+1;Se--;)if(G[Se]===ie)return Se;return Se}function Zn(G){return Vn(G)?Gp(G):wp(G)}function on(G){return Vn(G)?Jp(G):Lp(G)}function ss(G){for(var ie=G.length;ie--&&te.test(G.charAt(ie)););return ie}var qp=Nr(Np);function Gp(G){for(var ie=_r.lastIndex=0;_r.test(G);)++ie;return ie}function Jp(G){return G.match(_r)||[]}function Vp(G){return G.match(mp)||[]}var Zp=function G(ie){ie=ie==null?Da:Tt.defaults(Da.Object(),ie,Tt.pick(Da,kp));var ae=ie.Array,Se=ie.Date,We=ie.Error,ta=ie.Function,Sa=ie.Math,la=ie.Object,Er=ie.RegExp,Xp=ie.String,en=ie.TypeError,Dt=ae.prototype,Qp=ta.prototype,Xn=la.prototype,wt=ie["__core-js_shared__"],Lt=Qp.toString,pa=Xn.hasOwnProperty,el=0,os=function(){var e=/[^.]+$/.exec(wt&&wt.keys&&wt.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Rt=Xn.toString,al=Lt.call(la),nl=Da._,tl=Er("^"+Lt.call(pa).replace(Be,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Kt=zi?ie.Buffer:t,Dn=ie.Symbol,xt=ie.Uint8Array,ps=Kt?Kt.allocUnsafe:t,Ct=is(la.getPrototypeOf,la),ls=la.create,ds=Xn.propertyIsEnumerable,jt=Dt.splice,us=Dn?Dn.isConcatSpreadable:t,dt=Dn?Dn.iterator:t,On=Dn?Dn.toStringTag:t,Mt=function(){try{var e=zn(la,"defineProperty");return e({},"",{}),e}catch(a){}}(),rl=ie.clearTimeout!==Da.clearTimeout&&ie.clearTimeout,il=Se&&Se.now!==Da.Date.now&&Se.now,sl=ie.setTimeout!==Da.setTimeout&&ie.setTimeout,Ot=Sa.ceil,Ft=Sa.floor,Tr=la.getOwnPropertySymbols,ol=Kt?Kt.isBuffer:t,fs=ie.isFinite,pl=Dt.join,ll=is(la.keys,la),Ba=Sa.max,Ra=Sa.min,dl=Se.now,ul=ie.parseInt,gs=Sa.random,fl=Dt.reverse,Dr=zn(ie,"DataView"),ut=zn(ie,"Map"),wr=zn(ie,"Promise"),Qn=zn(ie,"Set"),ft=zn(ie,"WeakMap"),gt=zn(la,"create"),Ut=ft&&new ft,et={},gl=Yn(Dr),cl=Yn(ut),hl=Yn(wr),ml=Yn(Qn),_l=Yn(ft),Wt=Dn?Dn.prototype:t,ct=Wt?Wt.valueOf:t,cs=Wt?Wt.toString:t;function R(e){if(ka(e)&&!He(e)&&!(e instanceof Ve)){if(e instanceof an)return e;if(pa.call(e,"__wrapped__"))return mo(e)}return new an(e)}var at=function(){function e(){}return function(a){if(!ha(a))return{};if(ls)return ls(a);e.prototype=a;var p=new e;return e.prototype=t,p}}();function Ht(){}function an(e,a){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!a,this.__index__=0,this.__values__=t}R.templateSettings={escape:$,evaluate:X,interpolate:ee,variable:"",imports:{_:R}},R.prototype=Ht.prototype,R.prototype.constructor=R,an.prototype=at(Ht.prototype),an.prototype.constructor=an;function Ve(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=fe,this.__views__=[]}function yl(){var e=new Ve(this.__wrapped__);return e.__actions__=Ua(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Ua(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Ua(this.__views__),e}function kl(){if(this.__filtered__){var e=new Ve(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function Al(){var e=this.__wrapped__.value(),a=this.__dir__,p=He(e),I=a<0,T=p?e.length:0,C=Ld(0,T,this.__views__),W=C.start,z=C.end,J=z-W,le=I?z:W-1,de=this.__iteratees__,ce=de.length,Ie=0,De=Ra(J,this.__takeCount__);if(!p||!I&&T==J&&De==J)return Ms(e,this.__actions__);var Ce=[];e:for(;J--&&Ie<De;){le+=a;for(var $e=-1,je=e[le];++$e<ce;){var Ge=de[$e],Ze=Ge.iteratee,Ja=Ge.type,Oa=Ze(je);if(Ja==F)je=Oa;else if(!Oa){if(Ja==x)continue e;break e}}Ce[Ie++]=je}return Ce}Ve.prototype=at(Ht.prototype),Ve.prototype.constructor=Ve;function Fn(e){var a=-1,p=e==null?0:e.length;for(this.clear();++a<p;){var I=e[a];this.set(I[0],I[1])}}function Pl(){this.__data__=gt?gt(null):{},this.size=0}function Il(e){var a=this.has(e)&&delete this.__data__[e];return this.size-=a?1:0,a}function Nl(e){var a=this.__data__;if(gt){var p=a[e];return p===l?t:p}return pa.call(a,e)?a[e]:t}function vl(e){var a=this.__data__;return gt?a[e]!==t:pa.call(a,e)}function bl(e,a){var p=this.__data__;return this.size+=this.has(e)?0:1,p[e]=gt&&a===t?l:a,this}Fn.prototype.clear=Pl,Fn.prototype.delete=Il,Fn.prototype.get=Nl,Fn.prototype.has=vl,Fn.prototype.set=bl;function _n(e){var a=-1,p=e==null?0:e.length;for(this.clear();++a<p;){var I=e[a];this.set(I[0],I[1])}}function Sl(){this.__data__=[],this.size=0}function Bl(e){var a=this.__data__,p=zt(a,e);if(p<0)return!1;var I=a.length-1;return p==I?a.pop():jt.call(a,p,1),--this.size,!0}function El(e){var a=this.__data__,p=zt(a,e);return p<0?t:a[p][1]}function Tl(e){return zt(this.__data__,e)>-1}function Dl(e,a){var p=this.__data__,I=zt(p,e);return I<0?(++this.size,p.push([e,a])):p[I][1]=a,this}_n.prototype.clear=Sl,_n.prototype.delete=Bl,_n.prototype.get=El,_n.prototype.has=Tl,_n.prototype.set=Dl;function yn(e){var a=-1,p=e==null?0:e.length;for(this.clear();++a<p;){var I=e[a];this.set(I[0],I[1])}}function wl(){this.size=0,this.__data__={hash:new Fn,map:new(ut||_n),string:new Fn}}function Ll(e){var a=nr(this,e).delete(e);return this.size-=a?1:0,a}function Rl(e){return nr(this,e).get(e)}function Kl(e){return nr(this,e).has(e)}function xl(e,a){var p=nr(this,e),I=p.size;return p.set(e,a),this.size+=p.size==I?0:1,this}yn.prototype.clear=wl,yn.prototype.delete=Ll,yn.prototype.get=Rl,yn.prototype.has=Kl,yn.prototype.set=xl;function Un(e){var a=-1,p=e==null?0:e.length;for(this.__data__=new yn;++a<p;)this.add(e[a])}function Cl(e){return this.__data__.set(e,l),this}function jl(e){return this.__data__.has(e)}Un.prototype.add=Un.prototype.push=Cl,Un.prototype.has=jl;function pn(e){var a=this.__data__=new _n(e);this.size=a.size}function Ml(){this.__data__=new _n,this.size=0}function Ol(e){var a=this.__data__,p=a.delete(e);return this.size=a.size,p}function Fl(e){return this.__data__.get(e)}function Ul(e){return this.__data__.has(e)}function Wl(e,a){var p=this.__data__;if(p instanceof _n){var I=p.__data__;if(!ut||I.length<d-1)return I.push([e,a]),this.size=++p.size,this;p=this.__data__=new yn(I)}return p.set(e,a),this.size=p.size,this}pn.prototype.clear=Ml,pn.prototype.delete=Ol,pn.prototype.get=Fl,pn.prototype.has=Ul,pn.prototype.set=Wl;function hs(e,a){var p=He(e),I=!p&&$n(e),T=!p&&!I&&xn(e),C=!p&&!I&&!T&&it(e),W=p||I||T||C,z=W?br(e.length,Xp):[],J=z.length;for(var le in e)(a||pa.call(e,le))&&!(W&&(le=="length"||T&&(le=="offset"||le=="parent")||C&&(le=="buffer"||le=="byteLength"||le=="byteOffset")||In(le,J)))&&z.push(le);return z}function ms(e){var a=e.length;return a?e[Wr(0,a-1)]:t}function Hl(e,a){return tr(Ua(e),Wn(a,0,e.length))}function zl(e){return tr(Ua(e))}function Lr(e,a,p){(p!==t&&!ln(e[a],p)||p===t&&!(a in e))&&kn(e,a,p)}function ht(e,a,p){var I=e[a];(!(pa.call(e,a)&&ln(I,p))||p===t&&!(a in e))&&kn(e,a,p)}function zt(e,a){for(var p=e.length;p--;)if(ln(e[p][0],a))return p;return-1}function Yl(e,a,p,I){return wn(e,function(T,C,W){a(I,T,p(T),W)}),I}function _s(e,a){return e&&cn(a,Ea(a),e)}function $l(e,a){return e&&cn(a,Ha(a),e)}function kn(e,a,p){a=="__proto__"&&Mt?Mt(e,a,{configurable:!0,enumerable:!0,value:p,writable:!0}):e[a]=p}function Rr(e,a){for(var p=-1,I=a.length,T=ae(I),C=e==null;++p<I;)T[p]=C?t:gi(e,a[p]);return T}function Wn(e,a,p){return e===e&&(p!==t&&(e=e<=p?e:p),a!==t&&(e=e>=a?e:a)),e}function nn(e,a,p,I,T,C){var W,z=a&m,J=a&f,le=a&u;if(p&&(W=T?p(e,I,T,C):p(e)),W!==t)return W;if(!ha(e))return e;var de=He(e);if(de){if(W=Kd(e),!z)return Ua(e,W)}else{var ce=Ka(e),Ie=ce==Aa||ce==Me;if(xn(e))return Us(e,z);if(ce==na||ce==Ne||Ie&&!T){if(W=J||Ie?{}:so(e),!z)return J?Nd(e,$l(W,e)):Id(e,_s(W,e))}else{if(!da[ce])return T?e:{};W=xd(e,ce,z)}}C||(C=new pn);var De=C.get(e);if(De)return De;C.set(e,W),Co(e)?e.forEach(function(je){W.add(nn(je,a,p,je,e,C))}):Ko(e)&&e.forEach(function(je,Ge){W.set(Ge,nn(je,a,p,Ge,e,C))});var Ce=le?J?Qr:Xr:J?Ha:Ea,$e=de?t:Ce(e);return Qa($e||e,function(je,Ge){$e&&(Ge=je,je=e[Ge]),ht(W,Ge,nn(je,a,p,Ge,e,C))}),W}function ql(e){var a=Ea(e);return function(p){return ys(p,e,a)}}function ys(e,a,p){var I=p.length;if(e==null)return!I;for(e=la(e);I--;){var T=p[I],C=a[T],W=e[T];if(W===t&&!(T in e)||!C(W))return!1}return!0}function ks(e,a,p){if(typeof e!="function")throw new en(o);return It(function(){e.apply(t,p)},a)}function mt(e,a,p,I){var T=-1,C=St,W=!0,z=e.length,J=[],le=a.length;if(!z)return J;p&&(a=ca(a,$a(p))),I?(C=kr,W=!1):a.length>=d&&(C=lt,W=!1,a=new Un(a));e:for(;++T<z;){var de=e[T],ce=p==null?de:p(de);if(de=I||de!==0?de:0,W&&ce===ce){for(var Ie=le;Ie--;)if(a[Ie]===ce)continue e;J.push(de)}else C(a,ce,I)||J.push(de)}return J}var wn=$s(gn),As=$s(xr,!0);function Gl(e,a){var p=!0;return wn(e,function(I,T,C){return p=!!a(I,T,C),p}),p}function Yt(e,a,p){for(var I=-1,T=e.length;++I<T;){var C=e[I],W=a(C);if(W!=null&&(z===t?W===W&&!Ga(W):p(W,z)))var z=W,J=C}return J}function Jl(e,a,p,I){var T=e.length;for(p=Ye(p),p<0&&(p=-p>T?0:T+p),I=I===t||I>T?T:Ye(I),I<0&&(I+=T),I=p>I?0:Mo(I);p<I;)e[p++]=a;return e}function Ps(e,a){var p=[];return wn(e,function(I,T,C){a(I,T,C)&&p.push(I)}),p}function wa(e,a,p,I,T){var C=-1,W=e.length;for(p||(p=jd),T||(T=[]);++C<W;){var z=e[C];a>0&&p(z)?a>1?wa(z,a-1,p,I,T):En(T,z):I||(T[T.length]=z)}return T}var Kr=qs(),Is=qs(!0);function gn(e,a){return e&&Kr(e,a,Ea)}function xr(e,a){return e&&Is(e,a,Ea)}function $t(e,a){return Bn(a,function(p){return Nn(e[p])})}function Hn(e,a){a=Rn(a,e);for(var p=0,I=a.length;e!=null&&p<I;)e=e[hn(a[p++])];return p&&p==I?e:t}function Ns(e,a,p){var I=a(e);return He(e)?I:En(I,p(e))}function ja(e){return e==null?e===t?ge:mn:On&&On in la(e)?wd(e):zd(e)}function Cr(e,a){return e>a}function Vl(e,a){return e!=null&&pa.call(e,a)}function Zl(e,a){return e!=null&&a in la(e)}function Xl(e,a,p){return e>=Ra(a,p)&&e<Ba(a,p)}function jr(e,a,p){for(var I=p?kr:St,T=e[0].length,C=e.length,W=C,z=ae(C),J=1/0,le=[];W--;){var de=e[W];W&&a&&(de=ca(de,$a(a))),J=Ra(de.length,J),z[W]=!p&&(a||T>=120&&de.length>=120)?new Un(W&&de):t}de=e[0];var ce=-1,Ie=z[0];e:for(;++ce<T&&le.length<J;){var De=de[ce],Ce=a?a(De):De;if(De=p||De!==0?De:0,!(Ie?lt(Ie,Ce):I(le,Ce,p))){for(W=C;--W;){var $e=z[W];if(!($e?lt($e,Ce):I(e[W],Ce,p)))continue e}Ie&&Ie.push(Ce),le.push(De)}}return le}function Ql(e,a,p,I){return gn(e,function(T,C,W){a(I,p(T),C,W)}),I}function _t(e,a,p){a=Rn(a,e),e=uo(e,a);var I=e==null?e:e[hn(rn(a))];return I==null?t:Ya(I,e,p)}function vs(e){return ka(e)&&ja(e)==Ne}function ed(e){return ka(e)&&ja(e)==Fe}function ad(e){return ka(e)&&ja(e)==va}function yt(e,a,p,I,T){return e===a?!0:e==null||a==null||!ka(e)&&!ka(a)?e!==e&&a!==a:nd(e,a,p,I,yt,T)}function nd(e,a,p,I,T,C){var W=He(e),z=He(a),J=W?Qe:Ka(e),le=z?Qe:Ka(a);J=J==Ne?na:J,le=le==Ne?na:le;var de=J==na,ce=le==na,Ie=J==le;if(Ie&&xn(e)){if(!xn(a))return!1;W=!0,de=!1}if(Ie&&!de)return C||(C=new pn),W||it(e)?to(e,a,p,I,T,C):Td(e,a,J,p,I,T,C);if(!(p&k)){var De=de&&pa.call(e,"__wrapped__"),Ce=ce&&pa.call(a,"__wrapped__");if(De||Ce){var $e=De?e.value():e,je=Ce?a.value():a;return C||(C=new pn),T($e,je,p,I,C)}}return Ie?(C||(C=new pn),Dd(e,a,p,I,T,C)):!1}function td(e){return ka(e)&&Ka(e)==Je}function Mr(e,a,p,I){var T=p.length,C=T,W=!I;if(e==null)return!C;for(e=la(e);T--;){var z=p[T];if(W&&z[2]?z[1]!==e[z[0]]:!(z[0]in e))return!1}for(;++T<C;){z=p[T];var J=z[0],le=e[J],de=z[1];if(W&&z[2]){if(le===t&&!(J in e))return!1}else{var ce=new pn;if(I)var Ie=I(le,de,J,e,a,ce);if(!(Ie===t?yt(de,le,k|y,I,ce):Ie))return!1}}return!0}function bs(e){if(!ha(e)||Od(e))return!1;var a=Nn(e)?tl:ra;return a.test(Yn(e))}function rd(e){return ka(e)&&ja(e)==Ee}function id(e){return ka(e)&&Ka(e)==ve}function sd(e){return ka(e)&&lr(e.length)&&!!ua[ja(e)]}function Ss(e){return typeof e=="function"?e:e==null?za:typeof e=="object"?He(e)?Ts(e[0],e[1]):Es(e):Jo(e)}function Or(e){if(!Pt(e))return ll(e);var a=[];for(var p in la(e))pa.call(e,p)&&p!="constructor"&&a.push(p);return a}function od(e){if(!ha(e))return Hd(e);var a=Pt(e),p=[];for(var I in e)I=="constructor"&&(a||!pa.call(e,I))||p.push(I);return p}function Fr(e,a){return e<a}function Bs(e,a){var p=-1,I=Wa(e)?ae(e.length):[];return wn(e,function(T,C,W){I[++p]=a(T,C,W)}),I}function Es(e){var a=ai(e);return a.length==1&&a[0][2]?po(a[0][0],a[0][1]):function(p){return p===e||Mr(p,e,a)}}function Ts(e,a){return ti(e)&&oo(a)?po(hn(e),a):function(p){var I=gi(p,e);return I===t&&I===a?ci(p,e):yt(a,I,k|y)}}function qt(e,a,p,I,T){e!==a&&Kr(a,function(C,W){if(T||(T=new pn),ha(C))pd(e,a,W,p,qt,I,T);else{var z=I?I(ii(e,W),C,W+"",e,a,T):t;z===t&&(z=C),Lr(e,W,z)}},Ha)}function pd(e,a,p,I,T,C,W){var z=ii(e,p),J=ii(a,p),le=W.get(J);if(le){Lr(e,p,le);return}var de=C?C(z,J,p+"",e,a,W):t,ce=de===t;if(ce){var Ie=He(J),De=!Ie&&xn(J),Ce=!Ie&&!De&&it(J);de=J,Ie||De||Ce?He(z)?de=z:Pa(z)?de=Ua(z):De?(ce=!1,de=Us(J,!0)):Ce?(ce=!1,de=Ws(J,!0)):de=[]:Nt(J)||$n(J)?(de=z,$n(z)?de=Oo(z):(!ha(z)||Nn(z))&&(de=so(J))):ce=!1}ce&&(W.set(J,de),T(de,J,I,C,W),W.delete(J)),Lr(e,p,de)}function Ds(e,a){var p=e.length;if(p)return a+=a<0?p:0,In(a,p)?e[a]:t}function ws(e,a,p){a.length?a=ca(a,function(C){return He(C)?function(W){return Hn(W,C.length===1?C[0]:C)}:C}):a=[za];var I=-1;a=ca(a,$a(Re()));var T=Bs(e,function(C,W,z){var J=ca(a,function(le){return le(C)});return{criteria:J,index:++I,value:C}});return xp(T,function(C,W){return Pd(C,W,p)})}function ld(e,a){return Ls(e,a,function(p,I){return ci(e,I)})}function Ls(e,a,p){for(var I=-1,T=a.length,C={};++I<T;){var W=a[I],z=Hn(e,W);p(z,W)&&kt(C,Rn(W,e),z)}return C}function dd(e){return function(a){return Hn(a,e)}}function Ur(e,a,p,I){var T=I?Kp:Jn,C=-1,W=a.length,z=e;for(e===a&&(a=Ua(a)),p&&(z=ca(e,$a(p)));++C<W;)for(var J=0,le=a[C],de=p?p(le):le;(J=T(z,de,J,I))>-1;)z!==e&&jt.call(z,J,1),jt.call(e,J,1);return e}function Rs(e,a){for(var p=e?a.length:0,I=p-1;p--;){var T=a[p];if(p==I||T!==C){var C=T;In(T)?jt.call(e,T,1):Yr(e,T)}}return e}function Wr(e,a){return e+Ft(gs()*(a-e+1))}function ud(e,a,p,I){for(var T=-1,C=Ba(Ot((a-e)/(p||1)),0),W=ae(C);C--;)W[I?C:++T]=e,e+=p;return W}function Hr(e,a){var p="";if(!e||a<1||a>H)return p;do a%2&&(p+=e),a=Ft(a/2),a&&(e+=e);while(a);return p}function qe(e,a){return si(lo(e,a,za),e+"")}function fd(e){return ms(st(e))}function gd(e,a){var p=st(e);return tr(p,Wn(a,0,p.length))}function kt(e,a,p,I){if(!ha(e))return e;a=Rn(a,e);for(var T=-1,C=a.length,W=C-1,z=e;z!=null&&++T<C;){var J=hn(a[T]),le=p;if(J==="__proto__"||J==="constructor"||J==="prototype")return e;if(T!=W){var de=z[J];le=I?I(de,J,z):t,le===t&&(le=ha(de)?de:In(a[T+1])?[]:{})}ht(z,J,le),z=z[J]}return e}var Ks=Ut?function(e,a){return Ut.set(e,a),e}:za,cd=Mt?function(e,a){return Mt(e,"toString",{configurable:!0,enumerable:!1,value:mi(a),writable:!0})}:za;function hd(e){return tr(st(e))}function tn(e,a,p){var I=-1,T=e.length;a<0&&(a=-a>T?0:T+a),p=p>T?T:p,p<0&&(p+=T),T=a>p?0:p-a>>>0,a>>>=0;for(var C=ae(T);++I<T;)C[I]=e[I+a];return C}function md(e,a){var p;return wn(e,function(I,T,C){return p=a(I,T,C),!p}),!!p}function Gt(e,a,p){var I=0,T=e==null?I:e.length;if(typeof a=="number"&&a===a&&T<=ye){for(;I<T;){var C=I+T>>>1,W=e[C];W!==null&&!Ga(W)&&(p?W<=a:W<a)?I=C+1:T=C}return T}return zr(e,a,za,p)}function zr(e,a,p,I){var T=0,C=e==null?0:e.length;if(C===0)return 0;a=p(a);for(var W=a!==a,z=a===null,J=Ga(a),le=a===t;T<C;){var de=Ft((T+C)/2),ce=p(e[de]),Ie=ce!==t,De=ce===null,Ce=ce===ce,$e=Ga(ce);if(W)var je=I||Ce;else le?je=Ce&&(I||Ie):z?je=Ce&&Ie&&(I||!De):J?je=Ce&&Ie&&!De&&(I||!$e):De||$e?je=!1:je=I?ce<=a:ce<a;je?T=de+1:C=de}return Ra(C,Z)}function xs(e,a){for(var p=-1,I=e.length,T=0,C=[];++p<I;){var W=e[p],z=a?a(W):W;if(!p||!ln(z,J)){var J=z;C[T++]=W===0?0:W}}return C}function Cs(e){return typeof e=="number"?e:Ga(e)?oe:+e}function qa(e){if(typeof e=="string")return e;if(He(e))return ca(e,qa)+"";if(Ga(e))return cs?cs.call(e):"";var a=e+"";return a=="0"&&1/e==-q?"-0":a}function Ln(e,a,p){var I=-1,T=St,C=e.length,W=!0,z=[],J=z;if(p)W=!1,T=kr;else if(C>=d){var le=a?null:Bd(e);if(le)return Et(le);W=!1,T=lt,J=new Un}else J=a?[]:z;e:for(;++I<C;){var de=e[I],ce=a?a(de):de;if(de=p||de!==0?de:0,W&&ce===ce){for(var Ie=J.length;Ie--;)if(J[Ie]===ce)continue e;a&&J.push(ce),z.push(de)}else T(J,ce,p)||(J!==z&&J.push(ce),z.push(de))}return z}function Yr(e,a){return a=Rn(a,e),e=uo(e,a),e==null||delete e[hn(rn(a))]}function js(e,a,p,I){return kt(e,a,p(Hn(e,a)),I)}function Jt(e,a,p,I){for(var T=e.length,C=I?T:-1;(I?C--:++C<T)&&a(e[C],C,e););return p?tn(e,I?0:C,I?C+1:T):tn(e,I?C+1:0,I?T:C)}function Ms(e,a){var p=e;return p instanceof Ve&&(p=p.value()),Ar(a,function(I,T){return T.func.apply(T.thisArg,En([I],T.args))},p)}function $r(e,a,p){var I=e.length;if(I<2)return I?Ln(e[0]):[];for(var T=-1,C=ae(I);++T<I;)for(var W=e[T],z=-1;++z<I;)z!=T&&(C[T]=mt(C[T]||W,e[z],a,p));return Ln(wa(C,1),a,p)}function Os(e,a,p){for(var I=-1,T=e.length,C=a.length,W={};++I<T;){var z=I<C?a[I]:t;p(W,e[I],z)}return W}function qr(e){return Pa(e)?e:[]}function Gr(e){return typeof e=="function"?e:za}function Rn(e,a){return He(e)?e:ti(e,a)?[e]:ho(ia(e))}var _d=qe;function Kn(e,a,p){var I=e.length;return p=p===t?I:p,!a&&p>=I?e:tn(e,a,p)}var Fs=rl||function(e){return Da.clearTimeout(e)};function Us(e,a){if(a)return e.slice();var p=e.length,I=ps?ps(p):new e.constructor(p);return e.copy(I),I}function Jr(e){var a=new e.constructor(e.byteLength);return new xt(a).set(new xt(e)),a}function yd(e,a){var p=a?Jr(e.buffer):e.buffer;return new e.constructor(p,e.byteOffset,e.byteLength)}function kd(e){var a=new e.constructor(e.source,ya.exec(e));return a.lastIndex=e.lastIndex,a}function Ad(e){return ct?la(ct.call(e)):{}}function Ws(e,a){var p=a?Jr(e.buffer):e.buffer;return new e.constructor(p,e.byteOffset,e.length)}function Hs(e,a){if(e!==a){var p=e!==t,I=e===null,T=e===e,C=Ga(e),W=a!==t,z=a===null,J=a===a,le=Ga(a);if(!z&&!le&&!C&&e>a||C&&W&&J&&!z&&!le||I&&W&&J||!p&&J||!T)return 1;if(!I&&!C&&!le&&e<a||le&&p&&T&&!I&&!C||z&&p&&T||!W&&T||!J)return-1}return 0}function Pd(e,a,p){for(var I=-1,T=e.criteria,C=a.criteria,W=T.length,z=p.length;++I<W;){var J=Hs(T[I],C[I]);if(J){if(I>=z)return J;var le=p[I];return J*(le=="desc"?-1:1)}}return e.index-a.index}function zs(e,a,p,I){for(var T=-1,C=e.length,W=p.length,z=-1,J=a.length,le=Ba(C-W,0),de=ae(J+le),ce=!I;++z<J;)de[z]=a[z];for(;++T<W;)(ce||T<C)&&(de[p[T]]=e[T]);for(;le--;)de[z++]=e[T++];return de}function Ys(e,a,p,I){for(var T=-1,C=e.length,W=-1,z=p.length,J=-1,le=a.length,de=Ba(C-z,0),ce=ae(de+le),Ie=!I;++T<de;)ce[T]=e[T];for(var De=T;++J<le;)ce[De+J]=a[J];for(;++W<z;)(Ie||T<C)&&(ce[De+p[W]]=e[T++]);return ce}function Ua(e,a){var p=-1,I=e.length;for(a||(a=ae(I));++p<I;)a[p]=e[p];return a}function cn(e,a,p,I){var T=!p;p||(p={});for(var C=-1,W=a.length;++C<W;){var z=a[C],J=I?I(p[z],e[z],z,p,e):t;J===t&&(J=e[z]),T?kn(p,z,J):ht(p,z,J)}return p}function Id(e,a){return cn(e,ni(e),a)}function Nd(e,a){return cn(e,ro(e),a)}function Vt(e,a){return function(p,I){var T=He(p)?Ep:Yl,C=a?a():{};return T(p,e,Re(I,2),C)}}function nt(e){return qe(function(a,p){var I=-1,T=p.length,C=T>1?p[T-1]:t,W=T>2?p[2]:t;for(C=e.length>3&&typeof C=="function"?(T--,C):t,W&&Ma(p[0],p[1],W)&&(C=T<3?t:C,T=1),a=la(a);++I<T;){var z=p[I];z&&e(a,z,I,C)}return a})}function $s(e,a){return function(p,I){if(p==null)return p;if(!Wa(p))return e(p,I);for(var T=p.length,C=a?T:-1,W=la(p);(a?C--:++C<T)&&I(W[C],C,W)!==!1;);return p}}function qs(e){return function(a,p,I){for(var T=-1,C=la(a),W=I(a),z=W.length;z--;){var J=W[e?z:++T];if(p(C[J],J,C)===!1)break}return a}}function vd(e,a,p){var I=a&P,T=At(e);function C(){var W=this&&this!==Da&&this instanceof C?T:e;return W.apply(I?p:this,arguments)}return C}function Gs(e){return function(a){a=ia(a);var p=Vn(a)?on(a):t,I=p?p[0]:a.charAt(0),T=p?Kn(p,1).join(""):a.slice(1);return I[e]()+T}}function tt(e){return function(a){return Ar(qo($o(a).replace(cp,"")),e,"")}}function At(e){return function(){var a=arguments;switch(a.length){case 0:return new e;case 1:return new e(a[0]);case 2:return new e(a[0],a[1]);case 3:return new e(a[0],a[1],a[2]);case 4:return new e(a[0],a[1],a[2],a[3]);case 5:return new e(a[0],a[1],a[2],a[3],a[4]);case 6:return new e(a[0],a[1],a[2],a[3],a[4],a[5]);case 7:return new e(a[0],a[1],a[2],a[3],a[4],a[5],a[6])}var p=at(e.prototype),I=e.apply(p,a);return ha(I)?I:p}}function bd(e,a,p){var I=At(e);function T(){for(var C=arguments.length,W=ae(C),z=C,J=rt(T);z--;)W[z]=arguments[z];var le=C<3&&W[0]!==J&&W[C-1]!==J?[]:Tn(W,J);if(C-=le.length,C<p)return Qs(e,a,Zt,T.placeholder,t,W,le,t,t,p-C);var de=this&&this!==Da&&this instanceof T?I:e;return Ya(de,this,W)}return T}function Js(e){return function(a,p,I){var T=la(a);if(!Wa(a)){var C=Re(p,3);a=Ea(a),p=function(z){return C(T[z],z,T)}}var W=e(a,p,I);return W>-1?T[C?a[W]:W]:t}}function Vs(e){return Pn(function(a){var p=a.length,I=p,T=an.prototype.thru;for(e&&a.reverse();I--;){var C=a[I];if(typeof C!="function")throw new en(o);if(T&&!W&&ar(C)=="wrapper")var W=new an([],!0)}for(I=W?I:p;++I<p;){C=a[I];var z=ar(C),J=z=="wrapper"?ei(C):t;J&&ri(J[0])&&J[1]==(w|v|E|D)&&!J[4].length&&J[9]==1?W=W[ar(J[0])].apply(W,J[3]):W=C.length==1&&ri(C)?W[z]():W.thru(C)}return function(){var le=arguments,de=le[0];if(W&&le.length==1&&He(de))return W.plant(de).value();for(var ce=0,Ie=p?a[ce].apply(this,le):de;++ce<p;)Ie=a[ce].call(this,Ie);return Ie}})}function Zt(e,a,p,I,T,C,W,z,J,le){var de=a&w,ce=a&P,Ie=a&b,De=a&(v|B),Ce=a&S,$e=Ie?t:At(e);function je(){for(var Ge=arguments.length,Ze=ae(Ge),Ja=Ge;Ja--;)Ze[Ja]=arguments[Ja];if(De)var Oa=rt(je),Va=jp(Ze,Oa);if(I&&(Ze=zs(Ze,I,T,De)),C&&(Ze=Ys(Ze,C,W,De)),Ge-=Va,De&&Ge<le){var Ia=Tn(Ze,Oa);return Qs(e,a,Zt,je.placeholder,p,Ze,Ia,z,J,le-Ge)}var dn=ce?p:this,bn=Ie?dn[e]:e;return Ge=Ze.length,z?Ze=Yd(Ze,z):Ce&&Ge>1&&Ze.reverse(),de&&J<Ge&&(Ze.length=J),this&&this!==Da&&this instanceof je&&(bn=$e||At(bn)),bn.apply(dn,Ze)}return je}function Zs(e,a){return function(p,I){return Ql(p,e,a(I),{})}}function Xt(e,a){return function(p,I){var T;if(p===t&&I===t)return a;if(p!==t&&(T=p),I!==t){if(T===t)return I;typeof p=="string"||typeof I=="string"?(p=qa(p),I=qa(I)):(p=Cs(p),I=Cs(I)),T=e(p,I)}return T}}function Vr(e){return Pn(function(a){return a=ca(a,$a(Re())),qe(function(p){var I=this;return e(a,function(T){return Ya(T,I,p)})})})}function Qt(e,a){a=a===t?" ":qa(a);var p=a.length;if(p<2)return p?Hr(a,e):a;var I=Hr(a,Ot(e/Zn(a)));return Vn(a)?Kn(on(I),0,e).join(""):I.slice(0,e)}function Sd(e,a,p,I){var T=a&P,C=At(e);function W(){for(var z=-1,J=arguments.length,le=-1,de=I.length,ce=ae(de+J),Ie=this&&this!==Da&&this instanceof W?C:e;++le<de;)ce[le]=I[le];for(;J--;)ce[le++]=arguments[++z];return Ya(Ie,T?p:this,ce)}return W}function Xs(e){return function(a,p,I){return I&&typeof I!="number"&&Ma(a,p,I)&&(p=I=t),a=vn(a),p===t?(p=a,a=0):p=vn(p),I=I===t?a<p?1:-1:vn(I),ud(a,p,I,e)}}function er(e){return function(a,p){return typeof a=="string"&&typeof p=="string"||(a=sn(a),p=sn(p)),e(a,p)}}function Qs(e,a,p,I,T,C,W,z,J,le){var de=a&v,ce=de?W:t,Ie=de?t:W,De=de?C:t,Ce=de?t:C;a|=de?E:K,a&=~(de?K:E),a&A||(a&=~(P|b));var $e=[e,a,T,De,ce,Ce,Ie,z,J,le],je=p.apply(t,$e);return ri(e)&&fo(je,$e),je.placeholder=I,go(je,e,a)}function Zr(e){var a=Sa[e];return function(p,I){if(p=sn(p),I=I==null?0:Ra(Ye(I),292),I&&fs(p)){var T=(ia(p)+"e").split("e"),C=a(T[0]+"e"+(+T[1]+I));return T=(ia(C)+"e").split("e"),+(T[0]+"e"+(+T[1]-I))}return a(p)}}var Bd=Qn&&1/Et(new Qn([,-0]))[1]==q?function(e){return new Qn(e)}:ki;function eo(e){return function(a){var p=Ka(a);return p==Je?Br(a):p==ve?zp(a):Cp(a,e(a))}}function An(e,a,p,I,T,C,W,z){var J=a&b;if(!J&&typeof e!="function")throw new en(o);var le=I?I.length:0;if(le||(a&=~(E|K),I=T=t),W=W===t?W:Ba(Ye(W),0),z=z===t?z:Ye(z),le-=T?T.length:0,a&K){var de=I,ce=T;I=T=t}var Ie=J?t:ei(e),De=[e,a,p,I,T,de,ce,C,W,z];if(Ie&&Wd(De,Ie),e=De[0],a=De[1],p=De[2],I=De[3],T=De[4],z=De[9]=De[9]===t?J?0:e.length:Ba(De[9]-le,0),!z&&a&(v|B)&&(a&=~(v|B)),!a||a==P)var Ce=vd(e,a,p);else a==v||a==B?Ce=bd(e,a,z):(a==E||a==(P|E))&&!T.length?Ce=Sd(e,a,p,I):Ce=Zt.apply(t,De);var $e=Ie?Ks:fo;return go($e(Ce,De),e,a)}function ao(e,a,p,I){return e===t||ln(e,Xn[p])&&!pa.call(I,p)?a:e}function no(e,a,p,I,T,C){return ha(e)&&ha(a)&&(C.set(a,e),qt(e,a,t,no,C),C.delete(a)),e}function Ed(e){return Nt(e)?t:e}function to(e,a,p,I,T,C){var W=p&k,z=e.length,J=a.length;if(z!=J&&!(W&&J>z))return!1;var le=C.get(e),de=C.get(a);if(le&&de)return le==a&&de==e;var ce=-1,Ie=!0,De=p&y?new Un:t;for(C.set(e,a),C.set(a,e);++ce<z;){var Ce=e[ce],$e=a[ce];if(I)var je=W?I($e,Ce,ce,a,e,C):I(Ce,$e,ce,e,a,C);if(je!==t){if(je)continue;Ie=!1;break}if(De){if(!Pr(a,function(Ge,Ze){if(!lt(De,Ze)&&(Ce===Ge||T(Ce,Ge,p,I,C)))return De.push(Ze)})){Ie=!1;break}}else if(!(Ce===$e||T(Ce,$e,p,I,C))){Ie=!1;break}}return C.delete(e),C.delete(a),Ie}function Td(e,a,p,I,T,C,W){switch(p){case Oe:if(e.byteLength!=a.byteLength||e.byteOffset!=a.byteOffset)return!1;e=e.buffer,a=a.buffer;case Fe:return!(e.byteLength!=a.byteLength||!C(new xt(e),new xt(a)));case Na:case va:case Za:return ln(+e,+a);case Ke:return e.name==a.name&&e.message==a.message;case Ee:case V:return e==a+"";case Je:var z=Br;case ve:var J=I&k;if(z||(z=Et),e.size!=a.size&&!J)return!1;var le=W.get(e);if(le)return le==a;I|=y,W.set(e,a);var de=to(z(e),z(a),I,T,C,W);return W.delete(e),de;case me:if(ct)return ct.call(e)==ct.call(a)}return!1}function Dd(e,a,p,I,T,C){var W=p&k,z=Xr(e),J=z.length,le=Xr(a),de=le.length;if(J!=de&&!W)return!1;for(var ce=J;ce--;){var Ie=z[ce];if(!(W?Ie in a:pa.call(a,Ie)))return!1}var De=C.get(e),Ce=C.get(a);if(De&&Ce)return De==a&&Ce==e;var $e=!0;C.set(e,a),C.set(a,e);for(var je=W;++ce<J;){Ie=z[ce];var Ge=e[Ie],Ze=a[Ie];if(I)var Ja=W?I(Ze,Ge,Ie,a,e,C):I(Ge,Ze,Ie,e,a,C);if(!(Ja===t?Ge===Ze||T(Ge,Ze,p,I,C):Ja)){$e=!1;break}je||(je=Ie=="constructor")}if($e&&!je){var Oa=e.constructor,Va=a.constructor;Oa!=Va&&"constructor"in e&&"constructor"in a&&!(typeof Oa=="function"&&Oa instanceof Oa&&typeof Va=="function"&&Va instanceof Va)&&($e=!1)}return C.delete(e),C.delete(a),$e}function Pn(e){return si(lo(e,t,ko),e+"")}function Xr(e){return Ns(e,Ea,ni)}function Qr(e){return Ns(e,Ha,ro)}var ei=Ut?function(e){return Ut.get(e)}:ki;function ar(e){for(var a=e.name+"",p=et[a],I=pa.call(et,a)?p.length:0;I--;){var T=p[I],C=T.func;if(C==null||C==e)return T.name}return a}function rt(e){var a=pa.call(R,"placeholder")?R:e;return a.placeholder}function Re(){var e=R.iteratee||_i;return e=e===_i?Ss:e,arguments.length?e(arguments[0],arguments[1]):e}function nr(e,a){var p=e.__data__;return Md(a)?p[typeof a=="string"?"string":"hash"]:p.map}function ai(e){for(var a=Ea(e),p=a.length;p--;){var I=a[p],T=e[I];a[p]=[I,T,oo(T)]}return a}function zn(e,a){var p=Up(e,a);return bs(p)?p:t}function wd(e){var a=pa.call(e,On),p=e[On];try{e[On]=t;var I=!0}catch(C){}var T=Rt.call(e);return I&&(a?e[On]=p:delete e[On]),T}var ni=Tr?function(e){return e==null?[]:(e=la(e),Bn(Tr(e),function(a){return ds.call(e,a)}))}:Ai,ro=Tr?function(e){for(var a=[];e;)En(a,ni(e)),e=Ct(e);return a}:Ai,Ka=ja;(Dr&&Ka(new Dr(new ArrayBuffer(1)))!=Oe||ut&&Ka(new ut)!=Je||wr&&Ka(wr.resolve())!=we||Qn&&Ka(new Qn)!=ve||ft&&Ka(new ft)!=he)&&(Ka=function(e){var a=ja(e),p=a==na?e.constructor:t,I=p?Yn(p):"";if(I)switch(I){case gl:return Oe;case cl:return Je;case hl:return we;case ml:return ve;case _l:return he}return a});function Ld(e,a,p){for(var I=-1,T=p.length;++I<T;){var C=p[I],W=C.size;switch(C.type){case"drop":e+=W;break;case"dropRight":a-=W;break;case"take":a=Ra(a,e+W);break;case"takeRight":e=Ba(e,a-W);break}}return{start:e,end:a}}function Rd(e){var a=e.match(pe);return a?a[1].split(se):[]}function io(e,a,p){a=Rn(a,e);for(var I=-1,T=a.length,C=!1;++I<T;){var W=hn(a[I]);if(!(C=e!=null&&p(e,W)))break;e=e[W]}return C||++I!=T?C:(T=e==null?0:e.length,!!T&&lr(T)&&In(W,T)&&(He(e)||$n(e)))}function Kd(e){var a=e.length,p=new e.constructor(a);return a&&typeof e[0]=="string"&&pa.call(e,"index")&&(p.index=e.index,p.input=e.input),p}function so(e){return typeof e.constructor=="function"&&!Pt(e)?at(Ct(e)):{}}function xd(e,a,p){var I=e.constructor;switch(a){case Fe:return Jr(e);case Na:case va:return new I(+e);case Oe:return yd(e,p);case ze:case Xe:case sa:case fa:case Fa:case La:case ba:case un:case fn:return Ws(e,p);case Je:return new I;case Za:case V:return new I(e);case Ee:return kd(e);case ve:return new I;case me:return Ad(e)}}function Cd(e,a){var p=a.length;if(!p)return e;var I=p-1;return a[I]=(p>1?"& ":"")+a[I],a=a.join(p>2?", ":" "),e.replace(ne,`{
/* [wrapped with `+a+`] */
`)}function jd(e){return He(e)||$n(e)||!!(us&&e&&e[us])}function In(e,a){var p=typeof e;return a=a==null?H:a,!!a&&(p=="number"||p!="symbol"&&fr.test(e))&&e>-1&&e%1==0&&e<a}function Ma(e,a,p){if(!ha(p))return!1;var I=typeof a;return(I=="number"?Wa(p)&&In(a,p.length):I=="string"&&a in p)?ln(p[a],e):!1}function ti(e,a){if(He(e))return!1;var p=typeof e;return p=="number"||p=="symbol"||p=="boolean"||e==null||Ga(e)?!0:_e.test(e)||!re.test(e)||a!=null&&e in la(a)}function Md(e){var a=typeof e;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?e!=="__proto__":e===null}function ri(e){var a=ar(e),p=R[a];if(typeof p!="function"||!(a in Ve.prototype))return!1;if(e===p)return!0;var I=ei(p);return!!I&&e===I[0]}function Od(e){return!!os&&os in e}var Fd=wt?Nn:Pi;function Pt(e){var a=e&&e.constructor,p=typeof a=="function"&&a.prototype||Xn;return e===p}function oo(e){return e===e&&!ha(e)}function po(e,a){return function(p){return p==null?!1:p[e]===a&&(a!==t||e in la(p))}}function Ud(e){var a=or(e,function(I){return p.size===h&&p.clear(),I}),p=a.cache;return a}function Wd(e,a){var p=e[1],I=a[1],T=p|I,C=T<(P|b|w),W=I==w&&p==v||I==w&&p==D&&e[7].length<=a[8]||I==(w|D)&&a[7].length<=a[8]&&p==v;if(!(C||W))return e;I&P&&(e[2]=a[2],T|=p&P?0:A);var z=a[3];if(z){var J=e[3];e[3]=J?zs(J,z,a[4]):z,e[4]=J?Tn(e[3],i):a[4]}return z=a[5],z&&(J=e[5],e[5]=J?Ys(J,z,a[6]):z,e[6]=J?Tn(e[5],i):a[6]),z=a[7],z&&(e[7]=z),I&w&&(e[8]=e[8]==null?a[8]:Ra(e[8],a[8])),e[9]==null&&(e[9]=a[9]),e[0]=a[0],e[1]=T,e}function Hd(e){var a=[];if(e!=null)for(var p in la(e))a.push(p);return a}function zd(e){return Rt.call(e)}function lo(e,a,p){return a=Ba(a===t?e.length-1:a,0),function(){for(var I=arguments,T=-1,C=Ba(I.length-a,0),W=ae(C);++T<C;)W[T]=I[a+T];T=-1;for(var z=ae(a+1);++T<a;)z[T]=I[T];return z[a]=p(W),Ya(e,this,z)}}function uo(e,a){return a.length<2?e:Hn(e,tn(a,0,-1))}function Yd(e,a){for(var p=e.length,I=Ra(a.length,p),T=Ua(e);I--;){var C=a[I];e[I]=In(C,p)?T[C]:t}return e}function ii(e,a){if(!(a==="constructor"&&typeof e[a]=="function")&&a!="__proto__")return e[a]}var fo=co(Ks),It=sl||function(e,a){return Da.setTimeout(e,a)},si=co(cd);function go(e,a,p){var I=a+"";return si(e,Cd(I,$d(Rd(I),p)))}function co(e){var a=0,p=0;return function(){var I=dl(),T=Y-(I-p);if(p=I,T>0){if(++a>=U)return arguments[0]}else a=0;return e.apply(t,arguments)}}function tr(e,a){var p=-1,I=e.length,T=I-1;for(a=a===t?I:a;++p<a;){var C=Wr(p,T),W=e[C];e[C]=e[p],e[p]=W}return e.length=a,e}var ho=Ud(function(e){var a=[];return e.charCodeAt(0)===46&&a.push(""),e.replace(Ae,function(p,I,T,C){a.push(T?C.replace(Te,"$1"):I||p)}),a});function hn(e){if(typeof e=="string"||Ga(e))return e;var a=e+"";return a=="0"&&1/e==-q?"-0":a}function Yn(e){if(e!=null){try{return Lt.call(e)}catch(a){}try{return e+""}catch(a){}}return""}function $d(e,a){return Qa(ke,function(p){var I="_."+p[0];a&p[1]&&!St(e,I)&&e.push(I)}),e.sort()}function mo(e){if(e instanceof Ve)return e.clone();var a=new an(e.__wrapped__,e.__chain__);return a.__actions__=Ua(e.__actions__),a.__index__=e.__index__,a.__values__=e.__values__,a}function qd(e,a,p){(p?Ma(e,a,p):a===t)?a=1:a=Ba(Ye(a),0);var I=e==null?0:e.length;if(!I||a<1)return[];for(var T=0,C=0,W=ae(Ot(I/a));T<I;)W[C++]=tn(e,T,T+=a);return W}function Gd(e){for(var a=-1,p=e==null?0:e.length,I=0,T=[];++a<p;){var C=e[a];C&&(T[I++]=C)}return T}function Jd(){var e=arguments.length;if(!e)return[];for(var a=ae(e-1),p=arguments[0],I=e;I--;)a[I-1]=arguments[I];return En(He(p)?Ua(p):[p],wa(a,1))}var Vd=qe(function(e,a){return Pa(e)?mt(e,wa(a,1,Pa,!0)):[]}),Zd=qe(function(e,a){var p=rn(a);return Pa(p)&&(p=t),Pa(e)?mt(e,wa(a,1,Pa,!0),Re(p,2)):[]}),Xd=qe(function(e,a){var p=rn(a);return Pa(p)&&(p=t),Pa(e)?mt(e,wa(a,1,Pa,!0),t,p):[]});function Qd(e,a,p){var I=e==null?0:e.length;return I?(a=p||a===t?1:Ye(a),tn(e,a<0?0:a,I)):[]}function eu(e,a,p){var I=e==null?0:e.length;return I?(a=p||a===t?1:Ye(a),a=I-a,tn(e,0,a<0?0:a)):[]}function au(e,a){return e&&e.length?Jt(e,Re(a,3),!0,!0):[]}function nu(e,a){return e&&e.length?Jt(e,Re(a,3),!0):[]}function tu(e,a,p,I){var T=e==null?0:e.length;return T?(p&&typeof p!="number"&&Ma(e,a,p)&&(p=0,I=T),Jl(e,a,p,I)):[]}function _o(e,a,p){var I=e==null?0:e.length;if(!I)return-1;var T=p==null?0:Ye(p);return T<0&&(T=Ba(I+T,0)),Bt(e,Re(a,3),T)}function yo(e,a,p){var I=e==null?0:e.length;if(!I)return-1;var T=I-1;return p!==t&&(T=Ye(p),T=p<0?Ba(I+T,0):Ra(T,I-1)),Bt(e,Re(a,3),T,!0)}function ko(e){var a=e==null?0:e.length;return a?wa(e,1):[]}function ru(e){var a=e==null?0:e.length;return a?wa(e,q):[]}function iu(e,a){var p=e==null?0:e.length;return p?(a=a===t?1:Ye(a),wa(e,a)):[]}function su(e){for(var a=-1,p=e==null?0:e.length,I={};++a<p;){var T=e[a];I[T[0]]=T[1]}return I}function Ao(e){return e&&e.length?e[0]:t}function ou(e,a,p){var I=e==null?0:e.length;if(!I)return-1;var T=p==null?0:Ye(p);return T<0&&(T=Ba(I+T,0)),Jn(e,a,T)}function pu(e){var a=e==null?0:e.length;return a?tn(e,0,-1):[]}var lu=qe(function(e){var a=ca(e,qr);return a.length&&a[0]===e[0]?jr(a):[]}),du=qe(function(e){var a=rn(e),p=ca(e,qr);return a===rn(p)?a=t:p.pop(),p.length&&p[0]===e[0]?jr(p,Re(a,2)):[]}),uu=qe(function(e){var a=rn(e),p=ca(e,qr);return a=typeof a=="function"?a:t,a&&p.pop(),p.length&&p[0]===e[0]?jr(p,t,a):[]});function fu(e,a){return e==null?"":pl.call(e,a)}function rn(e){var a=e==null?0:e.length;return a?e[a-1]:t}function gu(e,a,p){var I=e==null?0:e.length;if(!I)return-1;var T=I;return p!==t&&(T=Ye(p),T=T<0?Ba(I+T,0):Ra(T,I-1)),a===a?$p(e,a,T):Bt(e,Qi,T,!0)}function cu(e,a){return e&&e.length?Ds(e,Ye(a)):t}var hu=qe(Po);function Po(e,a){return e&&e.length&&a&&a.length?Ur(e,a):e}function mu(e,a,p){return e&&e.length&&a&&a.length?Ur(e,a,Re(p,2)):e}function _u(e,a,p){return e&&e.length&&a&&a.length?Ur(e,a,t,p):e}var yu=Pn(function(e,a){var p=e==null?0:e.length,I=Rr(e,a);return Rs(e,ca(a,function(T){return In(T,p)?+T:T}).sort(Hs)),I});function ku(e,a){var p=[];if(!(e&&e.length))return p;var I=-1,T=[],C=e.length;for(a=Re(a,3);++I<C;){var W=e[I];a(W,I,e)&&(p.push(W),T.push(I))}return Rs(e,T),p}function oi(e){return e==null?e:fl.call(e)}function Au(e,a,p){var I=e==null?0:e.length;return I?(p&&typeof p!="number"&&Ma(e,a,p)?(a=0,p=I):(a=a==null?0:Ye(a),p=p===t?I:Ye(p)),tn(e,a,p)):[]}function Pu(e,a){return Gt(e,a)}function Iu(e,a,p){return zr(e,a,Re(p,2))}function Nu(e,a){var p=e==null?0:e.length;if(p){var I=Gt(e,a);if(I<p&&ln(e[I],a))return I}return-1}function vu(e,a){return Gt(e,a,!0)}function bu(e,a,p){return zr(e,a,Re(p,2),!0)}function Su(e,a){var p=e==null?0:e.length;if(p){var I=Gt(e,a,!0)-1;if(ln(e[I],a))return I}return-1}function Bu(e){return e&&e.length?xs(e):[]}function Eu(e,a){return e&&e.length?xs(e,Re(a,2)):[]}function Tu(e){var a=e==null?0:e.length;return a?tn(e,1,a):[]}function Du(e,a,p){return e&&e.length?(a=p||a===t?1:Ye(a),tn(e,0,a<0?0:a)):[]}function wu(e,a,p){var I=e==null?0:e.length;return I?(a=p||a===t?1:Ye(a),a=I-a,tn(e,a<0?0:a,I)):[]}function Lu(e,a){return e&&e.length?Jt(e,Re(a,3),!1,!0):[]}function Ru(e,a){return e&&e.length?Jt(e,Re(a,3)):[]}var Ku=qe(function(e){return Ln(wa(e,1,Pa,!0))}),xu=qe(function(e){var a=rn(e);return Pa(a)&&(a=t),Ln(wa(e,1,Pa,!0),Re(a,2))}),Cu=qe(function(e){var a=rn(e);return a=typeof a=="function"?a:t,Ln(wa(e,1,Pa,!0),t,a)});function ju(e){return e&&e.length?Ln(e):[]}function Mu(e,a){return e&&e.length?Ln(e,Re(a,2)):[]}function Ou(e,a){return a=typeof a=="function"?a:t,e&&e.length?Ln(e,t,a):[]}function pi(e){if(!(e&&e.length))return[];var a=0;return e=Bn(e,function(p){if(Pa(p))return a=Ba(p.length,a),!0}),br(a,function(p){return ca(e,Ir(p))})}function Io(e,a){if(!(e&&e.length))return[];var p=pi(e);return a==null?p:ca(p,function(I){return Ya(a,t,I)})}var Fu=qe(function(e,a){return Pa(e)?mt(e,a):[]}),Uu=qe(function(e){return $r(Bn(e,Pa))}),Wu=qe(function(e){var a=rn(e);return Pa(a)&&(a=t),$r(Bn(e,Pa),Re(a,2))}),Hu=qe(function(e){var a=rn(e);return a=typeof a=="function"?a:t,$r(Bn(e,Pa),t,a)}),zu=qe(pi);function Yu(e,a){return Os(e||[],a||[],ht)}function $u(e,a){return Os(e||[],a||[],kt)}var qu=qe(function(e){var a=e.length,p=a>1?e[a-1]:t;return p=typeof p=="function"?(e.pop(),p):t,Io(e,p)});function No(e){var a=R(e);return a.__chain__=!0,a}function Gu(e,a){return a(e),e}function rr(e,a){return a(e)}var Ju=Pn(function(e){var a=e.length,p=a?e[0]:0,I=this.__wrapped__,T=function(C){return Rr(C,e)};return a>1||this.__actions__.length||!(I instanceof Ve)||!In(p)?this.thru(T):(I=I.slice(p,+p+(a?1:0)),I.__actions__.push({func:rr,args:[T],thisArg:t}),new an(I,this.__chain__).thru(function(C){return a&&!C.length&&C.push(t),C}))});function Vu(){return No(this)}function Zu(){return new an(this.value(),this.__chain__)}function Xu(){this.__values__===t&&(this.__values__=jo(this.value()));var e=this.__index__>=this.__values__.length,a=e?t:this.__values__[this.__index__++];return{done:e,value:a}}function Qu(){return this}function ef(e){for(var a,p=this;p instanceof Ht;){var I=mo(p);I.__index__=0,I.__values__=t,a?T.__wrapped__=I:a=I;var T=I;p=p.__wrapped__}return T.__wrapped__=e,a}function af(){var e=this.__wrapped__;if(e instanceof Ve){var a=e;return this.__actions__.length&&(a=new Ve(this)),a=a.reverse(),a.__actions__.push({func:rr,args:[oi],thisArg:t}),new an(a,this.__chain__)}return this.thru(oi)}function nf(){return Ms(this.__wrapped__,this.__actions__)}var tf=Vt(function(e,a,p){pa.call(e,p)?++e[p]:kn(e,p,1)});function rf(e,a,p){var I=He(e)?Zi:Gl;return p&&Ma(e,a,p)&&(a=t),I(e,Re(a,3))}function sf(e,a){var p=He(e)?Bn:Ps;return p(e,Re(a,3))}var of=Js(_o),pf=Js(yo);function lf(e,a){return wa(ir(e,a),1)}function df(e,a){return wa(ir(e,a),q)}function uf(e,a,p){return p=p===t?1:Ye(p),wa(ir(e,a),p)}function vo(e,a){var p=He(e)?Qa:wn;return p(e,Re(a,3))}function bo(e,a){var p=He(e)?Tp:As;return p(e,Re(a,3))}var ff=Vt(function(e,a,p){pa.call(e,p)?e[p].push(a):kn(e,p,[a])});function gf(e,a,p,I){e=Wa(e)?e:st(e),p=p&&!I?Ye(p):0;var T=e.length;return p<0&&(p=Ba(T+p,0)),dr(e)?p<=T&&e.indexOf(a,p)>-1:!!T&&Jn(e,a,p)>-1}var cf=qe(function(e,a,p){var I=-1,T=typeof a=="function",C=Wa(e)?ae(e.length):[];return wn(e,function(W){C[++I]=T?Ya(a,W,p):_t(W,a,p)}),C}),hf=Vt(function(e,a,p){kn(e,p,a)});function ir(e,a){var p=He(e)?ca:Bs;return p(e,Re(a,3))}function mf(e,a,p,I){return e==null?[]:(He(a)||(a=a==null?[]:[a]),p=I?t:p,He(p)||(p=p==null?[]:[p]),ws(e,a,p))}var _f=Vt(function(e,a,p){e[p?0:1].push(a)},function(){return[[],[]]});function yf(e,a,p){var I=He(e)?Ar:as,T=arguments.length<3;return I(e,Re(a,4),p,T,wn)}function kf(e,a,p){var I=He(e)?Dp:as,T=arguments.length<3;return I(e,Re(a,4),p,T,As)}function Af(e,a){var p=He(e)?Bn:Ps;return p(e,pr(Re(a,3)))}function Pf(e){var a=He(e)?ms:fd;return a(e)}function If(e,a,p){(p?Ma(e,a,p):a===t)?a=1:a=Ye(a);var I=He(e)?Hl:gd;return I(e,a)}function Nf(e){var a=He(e)?zl:hd;return a(e)}function vf(e){if(e==null)return 0;if(Wa(e))return dr(e)?Zn(e):e.length;var a=Ka(e);return a==Je||a==ve?e.size:Or(e).length}function bf(e,a,p){var I=He(e)?Pr:md;return p&&Ma(e,a,p)&&(a=t),I(e,Re(a,3))}var Sf=qe(function(e,a){if(e==null)return[];var p=a.length;return p>1&&Ma(e,a[0],a[1])?a=[]:p>2&&Ma(a[0],a[1],a[2])&&(a=[a[0]]),ws(e,wa(a,1),[])}),sr=il||function(){return Da.Date.now()};function Bf(e,a){if(typeof a!="function")throw new en(o);return e=Ye(e),function(){if(--e<1)return a.apply(this,arguments)}}function So(e,a,p){return a=p?t:a,a=e&&a==null?e.length:a,An(e,w,t,t,t,t,a)}function Bo(e,a){var p;if(typeof a!="function")throw new en(o);return e=Ye(e),function(){return--e>0&&(p=a.apply(this,arguments)),e<=1&&(a=t),p}}var li=qe(function(e,a,p){var I=P;if(p.length){var T=Tn(p,rt(li));I|=E}return An(e,I,a,p,T)}),Eo=qe(function(e,a,p){var I=P|b;if(p.length){var T=Tn(p,rt(Eo));I|=E}return An(a,I,e,p,T)});function To(e,a,p){a=p?t:a;var I=An(e,v,t,t,t,t,t,a);return I.placeholder=To.placeholder,I}function Do(e,a,p){a=p?t:a;var I=An(e,B,t,t,t,t,t,a);return I.placeholder=Do.placeholder,I}function wo(e,a,p){var I,T,C,W,z,J,le=0,de=!1,ce=!1,Ie=!0;if(typeof e!="function")throw new en(o);a=sn(a)||0,ha(p)&&(de=!!p.leading,ce="maxWait"in p,C=ce?Ba(sn(p.maxWait)||0,a):C,Ie="trailing"in p?!!p.trailing:Ie);function De(Ia){var dn=I,bn=T;return I=T=t,le=Ia,W=e.apply(bn,dn),W}function Ce(Ia){return le=Ia,z=It(Ge,a),de?De(Ia):W}function $e(Ia){var dn=Ia-J,bn=Ia-le,Vo=a-dn;return ce?Ra(Vo,C-bn):Vo}function je(Ia){var dn=Ia-J,bn=Ia-le;return J===t||dn>=a||dn<0||ce&&bn>=C}function Ge(){var Ia=sr();if(je(Ia))return Ze(Ia);z=It(Ge,$e(Ia))}function Ze(Ia){return z=t,Ie&&I?De(Ia):(I=T=t,W)}function Ja(){z!==t&&Fs(z),le=0,I=J=T=z=t}function Oa(){return z===t?W:Ze(sr())}function Va(){var Ia=sr(),dn=je(Ia);if(I=arguments,T=this,J=Ia,dn){if(z===t)return Ce(J);if(ce)return Fs(z),z=It(Ge,a),De(J)}return z===t&&(z=It(Ge,a)),W}return Va.cancel=Ja,Va.flush=Oa,Va}var Ef=qe(function(e,a){return ks(e,1,a)}),Tf=qe(function(e,a,p){return ks(e,sn(a)||0,p)});function Df(e){return An(e,S)}function or(e,a){if(typeof e!="function"||a!=null&&typeof a!="function")throw new en(o);var p=function(){var I=arguments,T=a?a.apply(this,I):I[0],C=p.cache;if(C.has(T))return C.get(T);var W=e.apply(this,I);return p.cache=C.set(T,W)||C,W};return p.cache=new(or.Cache||yn),p}or.Cache=yn;function pr(e){if(typeof e!="function")throw new en(o);return function(){var a=arguments;switch(a.length){case 0:return!e.call(this);case 1:return!e.call(this,a[0]);case 2:return!e.call(this,a[0],a[1]);case 3:return!e.call(this,a[0],a[1],a[2])}return!e.apply(this,a)}}function wf(e){return Bo(2,e)}var Lf=_d(function(e,a){a=a.length==1&&He(a[0])?ca(a[0],$a(Re())):ca(wa(a,1),$a(Re()));var p=a.length;return qe(function(I){for(var T=-1,C=Ra(I.length,p);++T<C;)I[T]=a[T].call(this,I[T]);return Ya(e,this,I)})}),di=qe(function(e,a){var p=Tn(a,rt(di));return An(e,E,t,a,p)}),Lo=qe(function(e,a){var p=Tn(a,rt(Lo));return An(e,K,t,a,p)}),Rf=Pn(function(e,a){return An(e,D,t,t,t,a)});function Kf(e,a){if(typeof e!="function")throw new en(o);return a=a===t?a:Ye(a),qe(e,a)}function xf(e,a){if(typeof e!="function")throw new en(o);return a=a==null?0:Ba(Ye(a),0),qe(function(p){var I=p[a],T=Kn(p,0,a);return I&&En(T,I),Ya(e,this,T)})}function Cf(e,a,p){var I=!0,T=!0;if(typeof e!="function")throw new en(o);return ha(p)&&(I="leading"in p?!!p.leading:I,T="trailing"in p?!!p.trailing:T),wo(e,a,{leading:I,maxWait:a,trailing:T})}function jf(e){return So(e,1)}function Mf(e,a){return di(Gr(a),e)}function Of(){if(!arguments.length)return[];var e=arguments[0];return He(e)?e:[e]}function Ff(e){return nn(e,u)}function Uf(e,a){return a=typeof a=="function"?a:t,nn(e,u,a)}function Wf(e){return nn(e,m|u)}function Hf(e,a){return a=typeof a=="function"?a:t,nn(e,m|u,a)}function zf(e,a){return a==null||ys(e,a,Ea(a))}function ln(e,a){return e===a||e!==e&&a!==a}var Yf=er(Cr),$f=er(function(e,a){return e>=a}),$n=vs(function(){return arguments}())?vs:function(e){return ka(e)&&pa.call(e,"callee")&&!ds.call(e,"callee")},He=ae.isArray,qf=Yi?$a(Yi):ed;function Wa(e){return e!=null&&lr(e.length)&&!Nn(e)}function Pa(e){return ka(e)&&Wa(e)}function Gf(e){return e===!0||e===!1||ka(e)&&ja(e)==Na}var xn=ol||Pi,Jf=$i?$a($i):ad;function Vf(e){return ka(e)&&e.nodeType===1&&!Nt(e)}function Zf(e){if(e==null)return!0;if(Wa(e)&&(He(e)||typeof e=="string"||typeof e.splice=="function"||xn(e)||it(e)||$n(e)))return!e.length;var a=Ka(e);if(a==Je||a==ve)return!e.size;if(Pt(e))return!Or(e).length;for(var p in e)if(pa.call(e,p))return!1;return!0}function Xf(e,a){return yt(e,a)}function Qf(e,a,p){p=typeof p=="function"?p:t;var I=p?p(e,a):t;return I===t?yt(e,a,t,p):!!I}function ui(e){if(!ka(e))return!1;var a=ja(e);return a==Ke||a==xa||typeof e.message=="string"&&typeof e.name=="string"&&!Nt(e)}function eg(e){return typeof e=="number"&&fs(e)}function Nn(e){if(!ha(e))return!1;var a=ja(e);return a==Aa||a==Me||a==ma||a==ue}function Ro(e){return typeof e=="number"&&e==Ye(e)}function lr(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=H}function ha(e){var a=typeof e;return e!=null&&(a=="object"||a=="function")}function ka(e){return e!=null&&typeof e=="object"}var Ko=qi?$a(qi):td;function ag(e,a){return e===a||Mr(e,a,ai(a))}function ng(e,a,p){return p=typeof p=="function"?p:t,Mr(e,a,ai(a),p)}function tg(e){return xo(e)&&e!=+e}function rg(e){if(Fd(e))throw new We(c);return bs(e)}function ig(e){return e===null}function sg(e){return e==null}function xo(e){return typeof e=="number"||ka(e)&&ja(e)==Za}function Nt(e){if(!ka(e)||ja(e)!=na)return!1;var a=Ct(e);if(a===null)return!0;var p=pa.call(a,"constructor")&&a.constructor;return typeof p=="function"&&p instanceof p&&Lt.call(p)==al}var fi=Gi?$a(Gi):rd;function og(e){return Ro(e)&&e>=-H&&e<=H}var Co=Ji?$a(Ji):id;function dr(e){return typeof e=="string"||!He(e)&&ka(e)&&ja(e)==V}function Ga(e){return typeof e=="symbol"||ka(e)&&ja(e)==me}var it=Vi?$a(Vi):sd;function pg(e){return e===t}function lg(e){return ka(e)&&Ka(e)==he}function dg(e){return ka(e)&&ja(e)==Le}var ug=er(Fr),fg=er(function(e,a){return e<=a});function jo(e){if(!e)return[];if(Wa(e))return dr(e)?on(e):Ua(e);if(dt&&e[dt])return Hp(e[dt]());var a=Ka(e),p=a==Je?Br:a==ve?Et:st;return p(e)}function vn(e){if(!e)return e===0?e:0;if(e=sn(e),e===q||e===-q){var a=e<0?-1:1;return a*Q}return e===e?e:0}function Ye(e){var a=vn(e),p=a%1;return a===a?p?a-p:a:0}function Mo(e){return e?Wn(Ye(e),0,fe):0}function sn(e){if(typeof e=="number")return e;if(Ga(e))return oe;if(ha(e)){var a=typeof e.valueOf=="function"?e.valueOf():e;e=ha(a)?a+"":a}if(typeof e!="string")return e===0?e:+e;e=ns(e);var p=ga.test(e);return p||ea.test(e)?Sp(e.slice(2),p?2:8):Ta.test(e)?oe:+e}function Oo(e){return cn(e,Ha(e))}function gg(e){return e?Wn(Ye(e),-H,H):e===0?e:0}function ia(e){return e==null?"":qa(e)}var cg=nt(function(e,a){if(Pt(a)||Wa(a)){cn(a,Ea(a),e);return}for(var p in a)pa.call(a,p)&&ht(e,p,a[p])}),Fo=nt(function(e,a){cn(a,Ha(a),e)}),ur=nt(function(e,a,p,I){cn(a,Ha(a),e,I)}),hg=nt(function(e,a,p,I){cn(a,Ea(a),e,I)}),mg=Pn(Rr);function _g(e,a){var p=at(e);return a==null?p:_s(p,a)}var yg=qe(function(e,a){e=la(e);var p=-1,I=a.length,T=I>2?a[2]:t;for(T&&Ma(a[0],a[1],T)&&(I=1);++p<I;)for(var C=a[p],W=Ha(C),z=-1,J=W.length;++z<J;){var le=W[z],de=e[le];(de===t||ln(de,Xn[le])&&!pa.call(e,le))&&(e[le]=C[le])}return e}),kg=qe(function(e){return e.push(t,no),Ya(Uo,t,e)});function Ag(e,a){return Xi(e,Re(a,3),gn)}function Pg(e,a){return Xi(e,Re(a,3),xr)}function Ig(e,a){return e==null?e:Kr(e,Re(a,3),Ha)}function Ng(e,a){return e==null?e:Is(e,Re(a,3),Ha)}function vg(e,a){return e&&gn(e,Re(a,3))}function bg(e,a){return e&&xr(e,Re(a,3))}function Sg(e){return e==null?[]:$t(e,Ea(e))}function Bg(e){return e==null?[]:$t(e,Ha(e))}function gi(e,a,p){var I=e==null?t:Hn(e,a);return I===t?p:I}function Eg(e,a){return e!=null&&io(e,a,Vl)}function ci(e,a){return e!=null&&io(e,a,Zl)}var Tg=Zs(function(e,a,p){a!=null&&typeof a.toString!="function"&&(a=Rt.call(a)),e[a]=p},mi(za)),Dg=Zs(function(e,a,p){a!=null&&typeof a.toString!="function"&&(a=Rt.call(a)),pa.call(e,a)?e[a].push(p):e[a]=[p]},Re),wg=qe(_t);function Ea(e){return Wa(e)?hs(e):Or(e)}function Ha(e){return Wa(e)?hs(e,!0):od(e)}function Lg(e,a){var p={};return a=Re(a,3),gn(e,function(I,T,C){kn(p,a(I,T,C),I)}),p}function Rg(e,a){var p={};return a=Re(a,3),gn(e,function(I,T,C){kn(p,T,a(I,T,C))}),p}var Kg=nt(function(e,a,p){qt(e,a,p)}),Uo=nt(function(e,a,p,I){qt(e,a,p,I)}),xg=Pn(function(e,a){var p={};if(e==null)return p;var I=!1;a=ca(a,function(C){return C=Rn(C,e),I||(I=C.length>1),C}),cn(e,Qr(e),p),I&&(p=nn(p,m|f|u,Ed));for(var T=a.length;T--;)Yr(p,a[T]);return p});function Cg(e,a){return Wo(e,pr(Re(a)))}var jg=Pn(function(e,a){return e==null?{}:ld(e,a)});function Wo(e,a){if(e==null)return{};var p=ca(Qr(e),function(I){return[I]});return a=Re(a),Ls(e,p,function(I,T){return a(I,T[0])})}function Mg(e,a,p){a=Rn(a,e);var I=-1,T=a.length;for(T||(T=1,e=t);++I<T;){var C=e==null?t:e[hn(a[I])];C===t&&(I=T,C=p),e=Nn(C)?C.call(e):C}return e}function Og(e,a,p){return e==null?e:kt(e,a,p)}function Fg(e,a,p,I){return I=typeof I=="function"?I:t,e==null?e:kt(e,a,p,I)}var Ho=eo(Ea),zo=eo(Ha);function Ug(e,a,p){var I=He(e),T=I||xn(e)||it(e);if(a=Re(a,4),p==null){var C=e&&e.constructor;T?p=I?new C:[]:ha(e)?p=Nn(C)?at(Ct(e)):{}:p={}}return(T?Qa:gn)(e,function(W,z,J){return a(p,W,z,J)}),p}function Wg(e,a){return e==null?!0:Yr(e,a)}function Hg(e,a,p){return e==null?e:js(e,a,Gr(p))}function zg(e,a,p,I){return I=typeof I=="function"?I:t,e==null?e:js(e,a,Gr(p),I)}function st(e){return e==null?[]:Sr(e,Ea(e))}function Yg(e){return e==null?[]:Sr(e,Ha(e))}function $g(e,a,p){return p===t&&(p=a,a=t),p!==t&&(p=sn(p),p=p===p?p:0),a!==t&&(a=sn(a),a=a===a?a:0),Wn(sn(e),a,p)}function qg(e,a,p){return a=vn(a),p===t?(p=a,a=0):p=vn(p),e=sn(e),Xl(e,a,p)}function Gg(e,a,p){if(p&&typeof p!="boolean"&&Ma(e,a,p)&&(a=p=t),p===t&&(typeof a=="boolean"?(p=a,a=t):typeof e=="boolean"&&(p=e,e=t)),e===t&&a===t?(e=0,a=1):(e=vn(e),a===t?(a=e,e=0):a=vn(a)),e>a){var I=e;e=a,a=I}if(p||e%1||a%1){var T=gs();return Ra(e+T*(a-e+bp("1e-"+((T+"").length-1))),a)}return Wr(e,a)}var Jg=tt(function(e,a,p){return a=a.toLowerCase(),e+(p?Yo(a):a)});function Yo(e){return hi(ia(e).toLowerCase())}function $o(e){return e=ia(e),e&&e.replace(Ni,Mp).replace(hp,"")}function Vg(e,a,p){e=ia(e),a=qa(a);var I=e.length;p=p===t?I:Wn(Ye(p),0,I);var T=p;return p-=a.length,p>=0&&e.slice(p,T)==a}function Zg(e){return e=ia(e),e&&M.test(e)?e.replace(_a,Op):e}function Xg(e){return e=ia(e),e&&Pe.test(e)?e.replace(Be,"\\$&"):e}var Qg=tt(function(e,a,p){return e+(p?"-":"")+a.toLowerCase()}),ec=tt(function(e,a,p){return e+(p?" ":"")+a.toLowerCase()}),ac=Gs("toLowerCase");function nc(e,a,p){e=ia(e),a=Ye(a);var I=a?Zn(e):0;if(!a||I>=a)return e;var T=(a-I)/2;return Qt(Ft(T),p)+e+Qt(Ot(T),p)}function tc(e,a,p){e=ia(e),a=Ye(a);var I=a?Zn(e):0;return a&&I<a?e+Qt(a-I,p):e}function rc(e,a,p){e=ia(e),a=Ye(a);var I=a?Zn(e):0;return a&&I<a?Qt(a-I,p)+e:e}function ic(e,a,p){return p||a==null?a=0:a&&(a=+a),ul(ia(e).replace(Ue,""),a||0)}function sc(e,a,p){return(p?Ma(e,a,p):a===t)?a=1:a=Ye(a),Hr(ia(e),a)}function oc(){var e=arguments,a=ia(e[0]);return e.length<3?a:a.replace(e[1],e[2])}var pc=tt(function(e,a,p){return e+(p?"_":"")+a.toLowerCase()});function lc(e,a,p){return p&&typeof p!="number"&&Ma(e,a,p)&&(a=p=t),p=p===t?fe:p>>>0,p?(e=ia(e),e&&(typeof a=="string"||a!=null&&!fi(a))&&(a=qa(a),!a&&Vn(e))?Kn(on(e),0,p):e.split(a,p)):[]}var dc=tt(function(e,a,p){return e+(p?" ":"")+hi(a)});function uc(e,a,p){return e=ia(e),p=p==null?0:Wn(Ye(p),0,e.length),a=qa(a),e.slice(p,p+a.length)==a}function fc(e,a,p){var I=R.templateSettings;p&&Ma(e,a,p)&&(a=t),e=ia(e),a=ur({},a,I,ao);var T=ur({},a.imports,I.imports,ao),C=Ea(T),W=Sr(T,C),z,J,le=0,de=a.interpolate||ot,ce="__p += '",Ie=Er((a.escape||ot).source+"|"+de.source+"|"+(de===ee?oa:ot).source+"|"+(a.evaluate||ot).source+"|$","g"),De="//# sourceURL="+(pa.call(a,"sourceURL")?(a.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Ap+"]")+`
`;e.replace(Ie,function(je,Ge,Ze,Ja,Oa,Va){return Ze||(Ze=Ja),ce+=e.slice(le,Va).replace(qn,Fp),Ge&&(z=!0,ce+=`' +
__e(`+Ge+`) +
'`),Oa&&(J=!0,ce+=`';
`+Oa+`;
__p += '`),Ze&&(ce+=`' +
((__t = (`+Ze+`)) == null ? '' : __t) +
'`),le=Va+je.length,je}),ce+=`';
`;var Ce=pa.call(a,"variable")&&a.variable;if(!Ce)ce=`with (obj) {
`+ce+`
}
`;else if(xe.test(Ce))throw new We(r);ce=(J?ce.replace(Sn,""):ce).replace(Cn,"$1").replace(Ca,"$1;"),ce="function("+(Ce||"obj")+`) {
`+(Ce?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(z?", __e = _.escape":"")+(J?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ce+`return __p
}`;var $e=Go(function(){return ta(C,De+"return "+ce).apply(t,W)});if($e.source=ce,ui($e))throw $e;return $e}function gc(e){return ia(e).toLowerCase()}function cc(e){return ia(e).toUpperCase()}function hc(e,a,p){if(e=ia(e),e&&(p||a===t))return ns(e);if(!e||!(a=qa(a)))return e;var I=on(e),T=on(a),C=ts(I,T),W=rs(I,T)+1;return Kn(I,C,W).join("")}function mc(e,a,p){if(e=ia(e),e&&(p||a===t))return e.slice(0,ss(e)+1);if(!e||!(a=qa(a)))return e;var I=on(e),T=rs(I,on(a))+1;return Kn(I,0,T).join("")}function _c(e,a,p){if(e=ia(e),e&&(p||a===t))return e.replace(Ue,"");if(!e||!(a=qa(a)))return e;var I=on(e),T=ts(I,on(a));return Kn(I,T).join("")}function yc(e,a){var p=L,I=j;if(ha(a)){var T="separator"in a?a.separator:T;p="length"in a?Ye(a.length):p,I="omission"in a?qa(a.omission):I}e=ia(e);var C=e.length;if(Vn(e)){var W=on(e);C=W.length}if(p>=C)return e;var z=p-Zn(I);if(z<1)return I;var J=W?Kn(W,0,z).join(""):e.slice(0,z);if(T===t)return J+I;if(W&&(z+=J.length-z),fi(T)){if(e.slice(z).search(T)){var le,de=J;for(T.global||(T=Er(T.source,ia(ya.exec(T))+"g")),T.lastIndex=0;le=T.exec(de);)var ce=le.index;J=J.slice(0,ce===t?z:ce)}}else if(e.indexOf(qa(T),z)!=z){var Ie=J.lastIndexOf(T);Ie>-1&&(J=J.slice(0,Ie))}return J+I}function kc(e){return e=ia(e),e&&Mn.test(e)?e.replace(jn,qp):e}var Ac=tt(function(e,a,p){return e+(p?" ":"")+a.toUpperCase()}),hi=Gs("toUpperCase");function qo(e,a,p){return e=ia(e),a=p?t:a,a===t?Wp(e)?Vp(e):Rp(e):e.match(a)||[]}var Go=qe(function(e,a){try{return Ya(e,t,a)}catch(p){return ui(p)?p:new We(p)}}),Pc=Pn(function(e,a){return Qa(a,function(p){p=hn(p),kn(e,p,li(e[p],e))}),e});function Ic(e){var a=e==null?0:e.length,p=Re();return e=a?ca(e,function(I){if(typeof I[1]!="function")throw new en(o);return[p(I[0]),I[1]]}):[],qe(function(I){for(var T=-1;++T<a;){var C=e[T];if(Ya(C[0],this,I))return Ya(C[1],this,I)}})}function Nc(e){return ql(nn(e,m))}function mi(e){return function(){return e}}function vc(e,a){return e==null||e!==e?a:e}var bc=Vs(),Sc=Vs(!0);function za(e){return e}function _i(e){return Ss(typeof e=="function"?e:nn(e,m))}function Bc(e){return Es(nn(e,m))}function Ec(e,a){return Ts(e,nn(a,m))}var Tc=qe(function(e,a){return function(p){return _t(p,e,a)}}),Dc=qe(function(e,a){return function(p){return _t(e,p,a)}});function yi(e,a,p){var I=Ea(a),T=$t(a,I);p==null&&!(ha(a)&&(T.length||!I.length))&&(p=a,a=e,e=this,T=$t(a,Ea(a)));var C=!(ha(p)&&"chain"in p)||!!p.chain,W=Nn(e);return Qa(T,function(z){var J=a[z];e[z]=J,W&&(e.prototype[z]=function(){var le=this.__chain__;if(C||le){var de=e(this.__wrapped__),ce=de.__actions__=Ua(this.__actions__);return ce.push({func:J,args:arguments,thisArg:e}),de.__chain__=le,de}return J.apply(e,En([this.value()],arguments))})}),e}function wc(){return Da._===this&&(Da._=nl),this}function ki(){}function Lc(e){return e=Ye(e),qe(function(a){return Ds(a,e)})}var Rc=Vr(ca),Kc=Vr(Zi),xc=Vr(Pr);function Jo(e){return ti(e)?Ir(hn(e)):dd(e)}function Cc(e){return function(a){return e==null?t:Hn(e,a)}}var jc=Xs(),Mc=Xs(!0);function Ai(){return[]}function Pi(){return!1}function Oc(){return{}}function Fc(){return""}function Uc(){return!0}function Wc(e,a){if(e=Ye(e),e<1||e>H)return[];var p=fe,I=Ra(e,fe);a=Re(a),e-=fe;for(var T=br(I,a);++p<e;)a(p);return T}function Hc(e){return He(e)?ca(e,hn):Ga(e)?[e]:Ua(ho(ia(e)))}function zc(e){var a=++el;return ia(e)+a}var Yc=Xt(function(e,a){return e+a},0),$c=Zr("ceil"),qc=Xt(function(e,a){return e/a},1),Gc=Zr("floor");function Jc(e){return e&&e.length?Yt(e,za,Cr):t}function Vc(e,a){return e&&e.length?Yt(e,Re(a,2),Cr):t}function Zc(e){return es(e,za)}function Xc(e,a){return es(e,Re(a,2))}function Qc(e){return e&&e.length?Yt(e,za,Fr):t}function eh(e,a){return e&&e.length?Yt(e,Re(a,2),Fr):t}var ah=Xt(function(e,a){return e*a},1),nh=Zr("round"),th=Xt(function(e,a){return e-a},0);function rh(e){return e&&e.length?vr(e,za):0}function ih(e,a){return e&&e.length?vr(e,Re(a,2)):0}return R.after=Bf,R.ary=So,R.assign=cg,R.assignIn=Fo,R.assignInWith=ur,R.assignWith=hg,R.at=mg,R.before=Bo,R.bind=li,R.bindAll=Pc,R.bindKey=Eo,R.castArray=Of,R.chain=No,R.chunk=qd,R.compact=Gd,R.concat=Jd,R.cond=Ic,R.conforms=Nc,R.constant=mi,R.countBy=tf,R.create=_g,R.curry=To,R.curryRight=Do,R.debounce=wo,R.defaults=yg,R.defaultsDeep=kg,R.defer=Ef,R.delay=Tf,R.difference=Vd,R.differenceBy=Zd,R.differenceWith=Xd,R.drop=Qd,R.dropRight=eu,R.dropRightWhile=au,R.dropWhile=nu,R.fill=tu,R.filter=sf,R.flatMap=lf,R.flatMapDeep=df,R.flatMapDepth=uf,R.flatten=ko,R.flattenDeep=ru,R.flattenDepth=iu,R.flip=Df,R.flow=bc,R.flowRight=Sc,R.fromPairs=su,R.functions=Sg,R.functionsIn=Bg,R.groupBy=ff,R.initial=pu,R.intersection=lu,R.intersectionBy=du,R.intersectionWith=uu,R.invert=Tg,R.invertBy=Dg,R.invokeMap=cf,R.iteratee=_i,R.keyBy=hf,R.keys=Ea,R.keysIn=Ha,R.map=ir,R.mapKeys=Lg,R.mapValues=Rg,R.matches=Bc,R.matchesProperty=Ec,R.memoize=or,R.merge=Kg,R.mergeWith=Uo,R.method=Tc,R.methodOf=Dc,R.mixin=yi,R.negate=pr,R.nthArg=Lc,R.omit=xg,R.omitBy=Cg,R.once=wf,R.orderBy=mf,R.over=Rc,R.overArgs=Lf,R.overEvery=Kc,R.overSome=xc,R.partial=di,R.partialRight=Lo,R.partition=_f,R.pick=jg,R.pickBy=Wo,R.property=Jo,R.propertyOf=Cc,R.pull=hu,R.pullAll=Po,R.pullAllBy=mu,R.pullAllWith=_u,R.pullAt=yu,R.range=jc,R.rangeRight=Mc,R.rearg=Rf,R.reject=Af,R.remove=ku,R.rest=Kf,R.reverse=oi,R.sampleSize=If,R.set=Og,R.setWith=Fg,R.shuffle=Nf,R.slice=Au,R.sortBy=Sf,R.sortedUniq=Bu,R.sortedUniqBy=Eu,R.split=lc,R.spread=xf,R.tail=Tu,R.take=Du,R.takeRight=wu,R.takeRightWhile=Lu,R.takeWhile=Ru,R.tap=Gu,R.throttle=Cf,R.thru=rr,R.toArray=jo,R.toPairs=Ho,R.toPairsIn=zo,R.toPath=Hc,R.toPlainObject=Oo,R.transform=Ug,R.unary=jf,R.union=Ku,R.unionBy=xu,R.unionWith=Cu,R.uniq=ju,R.uniqBy=Mu,R.uniqWith=Ou,R.unset=Wg,R.unzip=pi,R.unzipWith=Io,R.update=Hg,R.updateWith=zg,R.values=st,R.valuesIn=Yg,R.without=Fu,R.words=qo,R.wrap=Mf,R.xor=Uu,R.xorBy=Wu,R.xorWith=Hu,R.zip=zu,R.zipObject=Yu,R.zipObjectDeep=$u,R.zipWith=qu,R.entries=Ho,R.entriesIn=zo,R.extend=Fo,R.extendWith=ur,yi(R,R),R.add=Yc,R.attempt=Go,R.camelCase=Jg,R.capitalize=Yo,R.ceil=$c,R.clamp=$g,R.clone=Ff,R.cloneDeep=Wf,R.cloneDeepWith=Hf,R.cloneWith=Uf,R.conformsTo=zf,R.deburr=$o,R.defaultTo=vc,R.divide=qc,R.endsWith=Vg,R.eq=ln,R.escape=Zg,R.escapeRegExp=Xg,R.every=rf,R.find=of,R.findIndex=_o,R.findKey=Ag,R.findLast=pf,R.findLastIndex=yo,R.findLastKey=Pg,R.floor=Gc,R.forEach=vo,R.forEachRight=bo,R.forIn=Ig,R.forInRight=Ng,R.forOwn=vg,R.forOwnRight=bg,R.get=gi,R.gt=Yf,R.gte=$f,R.has=Eg,R.hasIn=ci,R.head=Ao,R.identity=za,R.includes=gf,R.indexOf=ou,R.inRange=qg,R.invoke=wg,R.isArguments=$n,R.isArray=He,R.isArrayBuffer=qf,R.isArrayLike=Wa,R.isArrayLikeObject=Pa,R.isBoolean=Gf,R.isBuffer=xn,R.isDate=Jf,R.isElement=Vf,R.isEmpty=Zf,R.isEqual=Xf,R.isEqualWith=Qf,R.isError=ui,R.isFinite=eg,R.isFunction=Nn,R.isInteger=Ro,R.isLength=lr,R.isMap=Ko,R.isMatch=ag,R.isMatchWith=ng,R.isNaN=tg,R.isNative=rg,R.isNil=sg,R.isNull=ig,R.isNumber=xo,R.isObject=ha,R.isObjectLike=ka,R.isPlainObject=Nt,R.isRegExp=fi,R.isSafeInteger=og,R.isSet=Co,R.isString=dr,R.isSymbol=Ga,R.isTypedArray=it,R.isUndefined=pg,R.isWeakMap=lg,R.isWeakSet=dg,R.join=fu,R.kebabCase=Qg,R.last=rn,R.lastIndexOf=gu,R.lowerCase=ec,R.lowerFirst=ac,R.lt=ug,R.lte=fg,R.max=Jc,R.maxBy=Vc,R.mean=Zc,R.meanBy=Xc,R.min=Qc,R.minBy=eh,R.stubArray=Ai,R.stubFalse=Pi,R.stubObject=Oc,R.stubString=Fc,R.stubTrue=Uc,R.multiply=ah,R.nth=cu,R.noConflict=wc,R.noop=ki,R.now=sr,R.pad=nc,R.padEnd=tc,R.padStart=rc,R.parseInt=ic,R.random=Gg,R.reduce=yf,R.reduceRight=kf,R.repeat=sc,R.replace=oc,R.result=Mg,R.round=nh,R.runInContext=G,R.sample=Pf,R.size=vf,R.snakeCase=pc,R.some=bf,R.sortedIndex=Pu,R.sortedIndexBy=Iu,R.sortedIndexOf=Nu,R.sortedLastIndex=vu,R.sortedLastIndexBy=bu,R.sortedLastIndexOf=Su,R.startCase=dc,R.startsWith=uc,R.subtract=th,R.sum=rh,R.sumBy=ih,R.template=fc,R.times=Wc,R.toFinite=vn,R.toInteger=Ye,R.toLength=Mo,R.toLower=gc,R.toNumber=sn,R.toSafeInteger=gg,R.toString=ia,R.toUpper=cc,R.trim=hc,R.trimEnd=mc,R.trimStart=_c,R.truncate=yc,R.unescape=kc,R.uniqueId=zc,R.upperCase=Ac,R.upperFirst=hi,R.each=vo,R.eachRight=bo,R.first=Ao,yi(R,function(){var e={};return gn(R,function(a,p){pa.call(R.prototype,p)||(e[p]=a)}),e}(),{chain:!1}),R.VERSION=n,Qa(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){R[e].placeholder=R}),Qa(["drop","take"],function(e,a){Ve.prototype[e]=function(p){p=p===t?1:Ba(Ye(p),0);var I=this.__filtered__&&!a?new Ve(this):this.clone();return I.__filtered__?I.__takeCount__=Ra(p,I.__takeCount__):I.__views__.push({size:Ra(p,fe),type:e+(I.__dir__<0?"Right":"")}),I},Ve.prototype[e+"Right"]=function(p){return this.reverse()[e](p).reverse()}}),Qa(["filter","map","takeWhile"],function(e,a){var p=a+1,I=p==x||p==O;Ve.prototype[e]=function(T){var C=this.clone();return C.__iteratees__.push({iteratee:Re(T,3),type:p}),C.__filtered__=C.__filtered__||I,C}}),Qa(["head","last"],function(e,a){var p="take"+(a?"Right":"");Ve.prototype[e]=function(){return this[p](1).value()[0]}}),Qa(["initial","tail"],function(e,a){var p="drop"+(a?"":"Right");Ve.prototype[e]=function(){return this.__filtered__?new Ve(this):this[p](1)}}),Ve.prototype.compact=function(){return this.filter(za)},Ve.prototype.find=function(e){return this.filter(e).head()},Ve.prototype.findLast=function(e){return this.reverse().find(e)},Ve.prototype.invokeMap=qe(function(e,a){return typeof e=="function"?new Ve(this):this.map(function(p){return _t(p,e,a)})}),Ve.prototype.reject=function(e){return this.filter(pr(Re(e)))},Ve.prototype.slice=function(e,a){e=Ye(e);var p=this;return p.__filtered__&&(e>0||a<0)?new Ve(p):(e<0?p=p.takeRight(-e):e&&(p=p.drop(e)),a!==t&&(a=Ye(a),p=a<0?p.dropRight(-a):p.take(a-e)),p)},Ve.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Ve.prototype.toArray=function(){return this.take(fe)},gn(Ve.prototype,function(e,a){var p=/^(?:filter|find|map|reject)|While$/.test(a),I=/^(?:head|last)$/.test(a),T=R[I?"take"+(a=="last"?"Right":""):a],C=I||/^find/.test(a);T&&(R.prototype[a]=function(){var W=this.__wrapped__,z=I?[1]:arguments,J=W instanceof Ve,le=z[0],de=J||He(W),ce=function(Ge){var Ze=T.apply(R,En([Ge],z));return I&&Ie?Ze[0]:Ze};de&&p&&typeof le=="function"&&le.length!=1&&(J=de=!1);var Ie=this.__chain__,De=!!this.__actions__.length,Ce=C&&!Ie,$e=J&&!De;if(!C&&de){W=$e?W:new Ve(this);var je=e.apply(W,z);return je.__actions__.push({func:rr,args:[ce],thisArg:t}),new an(je,Ie)}return Ce&&$e?e.apply(this,z):(je=this.thru(ce),Ce?I?je.value()[0]:je.value():je)})}),Qa(["pop","push","shift","sort","splice","unshift"],function(e){var a=Dt[e],p=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",I=/^(?:pop|shift)$/.test(e);R.prototype[e]=function(){var T=arguments;if(I&&!this.__chain__){var C=this.value();return a.apply(He(C)?C:[],T)}return this[p](function(W){return a.apply(He(W)?W:[],T)})}}),gn(Ve.prototype,function(e,a){var p=R[a];if(p){var I=p.name+"";pa.call(et,I)||(et[I]=[]),et[I].push({name:a,func:p})}}),et[Zt(t,b).name]=[{name:"wrapper",func:t}],Ve.prototype.clone=yl,Ve.prototype.reverse=kl,Ve.prototype.value=Al,R.prototype.at=Ju,R.prototype.chain=Vu,R.prototype.commit=Zu,R.prototype.next=Xu,R.prototype.plant=ef,R.prototype.reverse=af,R.prototype.toJSON=R.prototype.valueOf=R.prototype.value=nf,R.prototype.first=R.prototype.head,dt&&(R.prototype[dt]=Qu),R},Tt=Zp();Da._=Tt,g=function(){return Tt}.call(_,s,_,N),g!==t&&(N.exports=g)}).call(this)},637:(N,_,s)=>{"use strict";const g=s(4941),t=Symbol("max"),n=Symbol("length"),d=Symbol("lengthCalculator"),c=Symbol("allowStale"),o=Symbol("maxAge"),r=Symbol("dispose"),l=Symbol("noDisposeOnSet"),h=Symbol("lruList"),i=Symbol("cache"),m=Symbol("updateAgeOnGet"),f=()=>1;class u{constructor(E){if(typeof E=="number"&&(E={max:E}),E||(E={}),E.max&&(typeof E.max!="number"||E.max<0))throw new TypeError("max must be a non-negative number");const K=this[t]=E.max||1/0,w=E.length||f;if(this[d]=typeof w!="function"?f:w,this[c]=E.stale||!1,E.maxAge&&typeof E.maxAge!="number")throw new TypeError("maxAge must be a number");this[o]=E.maxAge||0,this[r]=E.dispose,this[l]=E.noDisposeOnSet||!1,this[m]=E.updateAgeOnGet||!1,this.reset()}set max(E){if(typeof E!="number"||E<0)throw new TypeError("max must be a non-negative number");this[t]=E||1/0,P(this)}get max(){return this[t]}set allowStale(E){this[c]=!!E}get allowStale(){return this[c]}set maxAge(E){if(typeof E!="number")throw new TypeError("maxAge must be a non-negative number");this[o]=E,P(this)}get maxAge(){return this[o]}set lengthCalculator(E){typeof E!="function"&&(E=f),E!==this[d]&&(this[d]=E,this[n]=0,this[h].forEach(K=>{K.length=this[d](K.value,K.key),this[n]+=K.length})),P(this)}get lengthCalculator(){return this[d]}get length(){return this[n]}get itemCount(){return this[h].length}rforEach(E,K){K=K||this;for(let w=this[h].tail;w!==null;){const D=w.prev;v(this,E,w,K),w=D}}forEach(E,K){K=K||this;for(let w=this[h].head;w!==null;){const D=w.next;v(this,E,w,K),w=D}}keys(){return this[h].toArray().map(E=>E.key)}values(){return this[h].toArray().map(E=>E.value)}reset(){this[r]&&this[h]&&this[h].length&&this[h].forEach(E=>this[r](E.key,E.value)),this[i]=new Map,this[h]=new g,this[n]=0}dump(){return this[h].map(E=>y(this,E)?!1:{k:E.key,v:E.value,e:E.now+(E.maxAge||0)}).toArray().filter(E=>E)}dumpLru(){return this[h]}set(E,K,w){if(w=w||this[o],w&&typeof w!="number")throw new TypeError("maxAge must be a number");const D=w?Date.now():0,S=this[d](K,E);if(this[i].has(E)){if(S>this[t])return b(this,this[i].get(E)),!1;const U=this[i].get(E).value;return this[r]&&(this[l]||this[r](E,U.value)),U.now=D,U.maxAge=w,U.value=K,this[n]+=S-U.length,U.length=S,this.get(E),P(this),!0}const L=new A(E,K,S,D,w);return L.length>this[t]?(this[r]&&this[r](E,K),!1):(this[n]+=L.length,this[h].unshift(L),this[i].set(E,this[h].head),P(this),!0)}has(E){if(!this[i].has(E))return!1;const K=this[i].get(E).value;return!y(this,K)}get(E){return k(this,E,!0)}peek(E){return k(this,E,!1)}pop(){const E=this[h].tail;return E?(b(this,E),E.value):null}del(E){b(this,this[i].get(E))}load(E){this.reset();const K=Date.now();for(let w=E.length-1;w>=0;w--){const D=E[w],S=D.e||0;if(S===0)this.set(D.k,D.v);else{const L=S-K;L>0&&this.set(D.k,D.v,L)}}}prune(){this[i].forEach((E,K)=>k(this,K,!1))}}const k=(B,E,K)=>{const w=B[i].get(E);if(w){const D=w.value;if(y(B,D)){if(b(B,w),!B[c])return}else K&&(B[m]&&(w.value.now=Date.now()),B[h].unshiftNode(w));return D.value}},y=(B,E)=>{if(!E||!E.maxAge&&!B[o])return!1;const K=Date.now()-E.now;return E.maxAge?K>E.maxAge:B[o]&&K>B[o]},P=B=>{if(B[n]>B[t])for(let E=B[h].tail;B[n]>B[t]&&E!==null;){const K=E.prev;b(B,E),E=K}},b=(B,E)=>{if(E){const K=E.value;B[r]&&B[r](K.key,K.value),B[n]-=K.length,B[i].delete(K.key),B[h].removeNode(E)}};class A{constructor(E,K,w,D,S){this.key=E,this.value=K,this.length=w,this.now=D,this.maxAge=S||0}}const v=(B,E,K,w)=>{let D=K.value;y(B,D)&&(b(B,K),B[c]||(D=void 0)),D&&E.call(w,D.value,D.key,B)};N.exports=u},5949:()=>{(function(N){var _="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",s={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},g={bash:s,environment:{pattern:RegExp("\\$"+_),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+_),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};N.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+_),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:g},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:s}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:g},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:g.entity}}],environment:{pattern:RegExp("\\$?"+_),alias:"constant"},variable:g.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},s.inside=N.languages.bash;for(var t=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],n=g.variable[1].inside,d=0;d<t.length;d++)n[t[d]]=N.languages.bash[t[d]];N.languages.sh=N.languages.bash,N.languages.shell=N.languages.bash})(Prism)},6607:()=>{(function(N){N.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d.*$/m]};var _={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(_).forEach(function(s){var g=_[s],t=[];/^\w+$/.test(s)||t.push(/\w+/.exec(s)[0]),s==="diff"&&t.push("bold"),N.languages.diff[s]={pattern:RegExp("^(?:["+g+`].*(?:\r
?|
|(?![\\s\\S])))+`,"m"),alias:t,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec(s)[0]}}}}),Object.defineProperty(N.languages.diff,"PREFIXES",{value:_})})(Prism)},3133:()=>{(function(N){function _(r){return RegExp("(^(?:"+r+"):[ 	]*(?![ 	]))[^]+","i")}N.languages.http={"request-line":{pattern:/^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,inside:{method:{pattern:/^[A-Z]+\b/,alias:"property"},"request-target":{pattern:/^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,lookbehind:!0,alias:"url",inside:N.languages.uri},"http-version":{pattern:/^(\s)HTTP\/[\d.]+/,lookbehind:!0,alias:"property"}}},"response-status":{pattern:/^HTTP\/[\d.]+ \d+ .+/m,inside:{"http-version":{pattern:/^HTTP\/[\d.]+/,alias:"property"},"status-code":{pattern:/^(\s)\d+(?=\s)/,lookbehind:!0,alias:"number"},"reason-phrase":{pattern:/^(\s).+/,lookbehind:!0,alias:"string"}}},header:{pattern:/^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,inside:{"header-value":[{pattern:_(/Content-Security-Policy/.source),lookbehind:!0,alias:["csp","languages-csp"],inside:N.languages.csp},{pattern:_(/Public-Key-Pins(?:-Report-Only)?/.source),lookbehind:!0,alias:["hpkp","languages-hpkp"],inside:N.languages.hpkp},{pattern:_(/Strict-Transport-Security/.source),lookbehind:!0,alias:["hsts","languages-hsts"],inside:N.languages.hsts},{pattern:_(/[^:]+/.source),lookbehind:!0}],"header-name":{pattern:/^[^:]+/,alias:"keyword"},punctuation:/^:/}}};var s=N.languages,g={"application/javascript":s.javascript,"application/json":s.json||s.javascript,"application/xml":s.xml,"text/xml":s.xml,"text/html":s.html,"text/css":s.css,"text/plain":s.plain},t={"application/json":!0,"application/xml":!0};function n(r){var l=r.replace(/^[a-z]+\//,""),h="\\w+/(?:[\\w.-]+\\+)+"+l+"(?![+\\w.-])";return"(?:"+r+"|"+h+")"}var d;for(var c in g)if(g[c]){d=d||{};var o=t[c]?n(c):c;d[c.replace(/\//g,"-")]={pattern:RegExp("("+/content-type:\s*/.source+o+/(?:(?:\r\n?|\n)[\w-].*)*(?:\r(?:\n|(?!\n))|\n)/.source+")"+/[^ \t\w-][\s\S]*/.source,"i"),lookbehind:!0,inside:g[c]}}d&&N.languages.insertBefore("http","header",d)})(Prism)},1264:()=>{Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json},1879:()=>{Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python},5434:()=>{(function(){if(typeof Prism=="undefined"||typeof document=="undefined")return;if(!Prism.plugins.toolbar){console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.");return}function N(n,d){n.addEventListener("click",function(){s(d)})}function _(n){var d=document.createElement("textarea");d.value=n.getText(),d.style.top="0",d.style.left="0",d.style.position="fixed",document.body.appendChild(d),d.focus(),d.select();try{var c=document.execCommand("copy");setTimeout(function(){c?n.success():n.error()},1)}catch(o){setTimeout(function(){n.error(o)},1)}document.body.removeChild(d)}function s(n){navigator.clipboard?navigator.clipboard.writeText(n.getText()).then(n.success,function(){_(n)}):_(n)}function g(n){window.getSelection().selectAllChildren(n)}function t(n){var d={copy:"Copy","copy-error":"Press Ctrl+C to copy","copy-success":"Copied!","copy-timeout":5e3},c="data-prismjs-";for(var o in d){for(var r=c+o,l=n;l&&!l.hasAttribute(r);)l=l.parentElement;l&&(d[o]=l.getAttribute(r))}return d}Prism.plugins.toolbar.registerButton("copy-to-clipboard",function(n){var d=n.element,c=t(d),o=document.createElement("button");o.className="copy-to-clipboard-button",o.setAttribute("type","button");var r=document.createElement("span");return o.appendChild(r),h("copy"),N(o,{getText:function(){return d.textContent},success:function(){h("copy-success"),l()},error:function(){h("copy-error"),setTimeout(function(){g(d)},1),l()}}),o;function l(){setTimeout(function(){h("copy")},c["copy-timeout"])}function h(i){r.textContent=c[i],o.setAttribute("data-copy-state",i)}})})()},8314:()=>{(function(){if(typeof Prism!="undefined"){var N=/^diff-([\w-]+)/i,_=/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/g,s=RegExp(/(?:__|[^\r\n<])*(?:\r\n?|\n|(?:__|[^\r\n<])(?![^\r\n]))/.source.replace(/__/g,function(){return _.source}),"gi"),g=!1;Prism.hooks.add("before-sanity-check",function(t){var n=t.language;N.test(n)&&!t.grammar&&(t.grammar=Prism.languages[n]=Prism.languages.diff)}),Prism.hooks.add("before-tokenize",function(t){!g&&!Prism.languages.diff&&!Prism.plugins.autoloader&&(g=!0,console.warn("Prism's Diff Highlight plugin requires the Diff language definition (prism-diff.js).Make sure the language definition is loaded or use Prism's Autoloader plugin."));var n=t.language;N.test(n)&&!Prism.languages[n]&&(Prism.languages[n]=Prism.languages.diff)}),Prism.hooks.add("wrap",function(t){var n,d;if(t.language!=="diff"){var c=N.exec(t.language);if(!c)return;n=c[1],d=Prism.languages[n]}var o=Prism.languages.diff&&Prism.languages.diff.PREFIXES;if(o&&t.type in o){var r=t.content.replace(_,""),l=r.replace(/&lt;/g,"<").replace(/&amp;/g,"&"),h=l.replace(/(^|[\r\n])./g,"$1"),i;d?i=Prism.highlight(h,d,n):i=Prism.util.encode(h);var m=new Prism.Token("prefix",o[t.type],[/\w+/.exec(t.type)[0]]),f=Prism.Token.stringify(m,t.language),u=[],k;for(s.lastIndex=0;k=s.exec(i);)u.push(f+k[0]);/(?:^|[\r\n]).$/.test(l)&&u.push(f),t.content=u.join(""),d&&t.classes.push("language-"+n)}})}})()},2886:()=>{(function(){if(typeof Prism=="undefined"||typeof document=="undefined")return;var N=[],_={},s=function(){};Prism.plugins.toolbar={};var g=Prism.plugins.toolbar.registerButton=function(d,c){var o;if(typeof c=="function"?o=c:o=function(r){var l;return typeof c.onClick=="function"?(l=document.createElement("button"),l.type="button",l.addEventListener("click",function(){c.onClick.call(this,r)})):typeof c.url=="string"?(l=document.createElement("a"),l.href=c.url):l=document.createElement("span"),c.className&&l.classList.add(c.className),l.textContent=c.text,l},d in _){console.warn('There is a button with the key "'+d+'" registered already.');return}N.push(_[d]=o)};function t(d){for(;d;){var c=d.getAttribute("data-toolbar-order");if(c!=null)return c=c.trim(),c.length?c.split(/\s*,\s*/g):[];d=d.parentElement}}var n=Prism.plugins.toolbar.hook=function(d){var c=d.element.parentNode;if(!(!c||!/pre/i.test(c.nodeName))&&!c.parentNode.classList.contains("code-toolbar")){var o=document.createElement("div");o.classList.add("code-toolbar"),c.parentNode.insertBefore(o,c),o.appendChild(c);var r=document.createElement("div");r.classList.add("toolbar");var l=N,h=t(d.element);h&&(l=h.map(function(i){return _[i]||s})),l.forEach(function(i){var m=i(d);if(m){var f=document.createElement("div");f.classList.add("toolbar-item"),f.appendChild(m),r.appendChild(f)}}),o.appendChild(r)}};g("label",function(d){var c=d.element.parentNode;if(!(!c||!/pre/i.test(c.nodeName))&&c.hasAttribute("data-label")){var o,r,l=c.getAttribute("data-label");try{r=document.querySelector("template#"+l)}catch(h){}return r?o=r.content:(c.hasAttribute("data-url")?(o=document.createElement("a"),o.href=c.getAttribute("data-url")):o=document.createElement("span"),o.textContent=l),o}}),Prism.hooks.add("complete",n)})()},4742:(N,_,s)=>{var g=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(n){var d=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,c=0,o={},r={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function A(v){return v instanceof l?new l(v.type,A(v.content),v.alias):Array.isArray(v)?v.map(A):v.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(A){return Object.prototype.toString.call(A).slice(8,-1)},objId:function(A){return A.__id||Object.defineProperty(A,"__id",{value:++c}),A.__id},clone:function A(v,B){B=B||{};var E,K;switch(r.util.type(v)){case"Object":if(K=r.util.objId(v),B[K])return B[K];E={},B[K]=E;for(var w in v)v.hasOwnProperty(w)&&(E[w]=A(v[w],B));return E;case"Array":return K=r.util.objId(v),B[K]?B[K]:(E=[],B[K]=E,v.forEach(function(D,S){E[S]=A(D,B)}),E);default:return v}},getLanguage:function(A){for(;A;){var v=d.exec(A.className);if(v)return v[1].toLowerCase();A=A.parentElement}return"none"},setLanguage:function(A,v){A.className=A.className.replace(RegExp(d,"gi"),""),A.classList.add("language-"+v)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(E){var A=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(E.stack)||[])[1];if(A){var v=document.getElementsByTagName("script");for(var B in v)if(v[B].src==A)return v[B]}return null}},isActive:function(A,v,B){for(var E="no-"+v;A;){var K=A.classList;if(K.contains(v))return!0;if(K.contains(E))return!1;A=A.parentElement}return!!B}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(A,v){var B=r.util.clone(r.languages[A]);for(var E in v)B[E]=v[E];return B},insertBefore:function(A,v,B,E){E=E||r.languages;var K=E[A],w={};for(var D in K)if(K.hasOwnProperty(D)){if(D==v)for(var S in B)B.hasOwnProperty(S)&&(w[S]=B[S]);B.hasOwnProperty(D)||(w[D]=K[D])}var L=E[A];return E[A]=w,r.languages.DFS(r.languages,function(j,U){U===L&&j!=A&&(this[j]=w)}),w},DFS:function A(v,B,E,K){K=K||{};var w=r.util.objId;for(var D in v)if(v.hasOwnProperty(D)){B.call(v,D,v[D],E||D);var S=v[D],L=r.util.type(S);L==="Object"&&!K[w(S)]?(K[w(S)]=!0,A(S,B,null,K)):L==="Array"&&!K[w(S)]&&(K[w(S)]=!0,A(S,B,D,K))}}},plugins:{},highlightAll:function(A,v){r.highlightAllUnder(document,A,v)},highlightAllUnder:function(A,v,B){var E={callback:B,container:A,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",E),E.elements=Array.prototype.slice.apply(E.container.querySelectorAll(E.selector)),r.hooks.run("before-all-elements-highlight",E);for(var K=0,w;w=E.elements[K++];)r.highlightElement(w,v===!0,E.callback)},highlightElement:function(A,v,B){var E=r.util.getLanguage(A),K=r.languages[E];r.util.setLanguage(A,E);var w=A.parentElement;w&&w.nodeName.toLowerCase()==="pre"&&r.util.setLanguage(w,E);var D=A.textContent,S={element:A,language:E,grammar:K,code:D};function L(U){S.highlightedCode=U,r.hooks.run("before-insert",S),S.element.innerHTML=S.highlightedCode,r.hooks.run("after-highlight",S),r.hooks.run("complete",S),B&&B.call(S.element)}if(r.hooks.run("before-sanity-check",S),w=S.element.parentElement,w&&w.nodeName.toLowerCase()==="pre"&&!w.hasAttribute("tabindex")&&w.setAttribute("tabindex","0"),!S.code){r.hooks.run("complete",S),B&&B.call(S.element);return}if(r.hooks.run("before-highlight",S),!S.grammar){L(r.util.encode(S.code));return}if(v&&n.Worker){var j=new Worker(r.filename);j.onmessage=function(U){L(U.data)},j.postMessage(JSON.stringify({language:S.language,code:S.code,immediateClose:!0}))}else L(r.highlight(S.code,S.grammar,S.language))},highlight:function(A,v,B){var E={code:A,grammar:v,language:B};if(r.hooks.run("before-tokenize",E),!E.grammar)throw new Error('The language "'+E.language+'" has no grammar.');return E.tokens=r.tokenize(E.code,E.grammar),r.hooks.run("after-tokenize",E),l.stringify(r.util.encode(E.tokens),E.language)},tokenize:function(A,v){var B=v.rest;if(B){for(var E in B)v[E]=B[E];delete v.rest}var K=new m;return f(K,K.head,A),i(A,K,v,K.head,0),k(K)},hooks:{all:{},add:function(A,v){var B=r.hooks.all;B[A]=B[A]||[],B[A].push(v)},run:function(A,v){var B=r.hooks.all[A];if(!(!B||!B.length))for(var E=0,K;K=B[E++];)K(v)}},Token:l};n.Prism=r;function l(A,v,B,E){this.type=A,this.content=v,this.alias=B,this.length=(E||"").length|0}l.stringify=function A(v,B){if(typeof v=="string")return v;if(Array.isArray(v)){var E="";return v.forEach(function(L){E+=A(L,B)}),E}var K={type:v.type,content:A(v.content,B),tag:"span",classes:["token",v.type],attributes:{},language:B},w=v.alias;w&&(Array.isArray(w)?Array.prototype.push.apply(K.classes,w):K.classes.push(w)),r.hooks.run("wrap",K);var D="";for(var S in K.attributes)D+=" "+S+'="'+(K.attributes[S]||"").replace(/"/g,"&quot;")+'"';return"<"+K.tag+' class="'+K.classes.join(" ")+'"'+D+">"+K.content+"</"+K.tag+">"};function h(A,v,B,E){A.lastIndex=v;var K=A.exec(B);if(K&&E&&K[1]){var w=K[1].length;K.index+=w,K[0]=K[0].slice(w)}return K}function i(A,v,B,E,K,w){for(var D in B)if(!(!B.hasOwnProperty(D)||!B[D])){var S=B[D];S=Array.isArray(S)?S:[S];for(var L=0;L<S.length;++L){if(w&&w.cause==D+","+L)return;var j=S[L],U=j.inside,Y=!!j.lookbehind,x=!!j.greedy,F=j.alias;if(x&&!j.pattern.global){var O=j.pattern.toString().match(/[imsuy]*$/)[0];j.pattern=RegExp(j.pattern.source,O+"g")}for(var q=j.pattern||j,H=E.next,Q=K;H!==v.tail&&!(w&&Q>=w.reach);Q+=H.value.length,H=H.next){var oe=H.value;if(v.length>A.length)return;if(!(oe instanceof l)){var fe=1,Z;if(x){if(Z=h(q,Q,A,Y),!Z||Z.index>=A.length)break;var Qe=Z.index,ye=Z.index+Z[0].length,ke=Q;for(ke+=H.value.length;Qe>=ke;)H=H.next,ke+=H.value.length;if(ke-=H.value.length,Q=ke,H.value instanceof l)continue;for(var Ne=H;Ne!==v.tail&&(ke<ye||typeof Ne.value=="string");Ne=Ne.next)fe++,ke+=Ne.value.length;fe--,oe=A.slice(Q,ke),Z.index-=Q}else if(Z=h(q,0,oe,Y),!Z)continue;var Qe=Z.index,ma=Z[0],Na=oe.slice(0,Qe),va=oe.slice(Qe+ma.length),xa=Q+oe.length;w&&xa>w.reach&&(w.reach=xa);var Ke=H.prev;Na&&(Ke=f(v,Ke,Na),Q+=Na.length),u(v,Ke,fe);var Aa=new l(D,U?r.tokenize(ma,U):ma,F,ma);if(H=f(v,Ke,Aa),va&&f(v,H,va),fe>1){var Me={cause:D+","+L,reach:xa};i(A,v,B,H.prev,Q,Me),w&&Me.reach>w.reach&&(w.reach=Me.reach)}}}}}}function m(){var A={value:null,prev:null,next:null},v={value:null,prev:A,next:null};A.next=v,this.head=A,this.tail=v,this.length=0}function f(A,v,B){var E=v.next,K={value:B,prev:v,next:E};return v.next=K,E.prev=K,A.length++,K}function u(A,v,B){for(var E=v.next,K=0;K<B&&E!==A.tail;K++)E=E.next;v.next=E,E.prev=v,A.length-=K}function k(A){for(var v=[],B=A.head.next;B!==A.tail;)v.push(B.value),B=B.next;return v}if(!n.document)return n.addEventListener&&(r.disableWorkerMessageHandler||n.addEventListener("message",function(A){var v=JSON.parse(A.data),B=v.language,E=v.code,K=v.immediateClose;n.postMessage(r.highlight(E,r.languages[B],B)),K&&n.close()},!1)),r;var y=r.util.currentScript();y&&(r.filename=y.src,y.hasAttribute("data-manual")&&(r.manual=!0));function P(){r.manual||r.highlightAll()}if(!r.manual){var b=document.readyState;b==="loading"||b==="interactive"&&y&&y.defer?document.addEventListener("DOMContentLoaded",P):window.requestAnimationFrame?window.requestAnimationFrame(P):window.setTimeout(P,16)}return r}(g);N.exports&&(N.exports=t),typeof s.g!="undefined"&&(s.g.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(d,c){var o={};o["language-"+c]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[c]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};r["language-"+c]={pattern:/[\s\S]+/,inside:t.languages[c]};var l={};l[d]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return d}),"i"),lookbehind:!0,greedy:!0,inside:r},t.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(n,d){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[d,"language-"+d],inside:t.languages[d]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(n){var d=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+d.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+d.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+d.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+d.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:d,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},n.languages.css.atrule.inside.rest=n.languages.css;var c=n.languages.markup;c&&(c.tag.addInlined("style","css"),c.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t=="undefined"||typeof document=="undefined")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var n="Loading\u2026",d=function(y,P){return"\u2716 Error "+y+" while fetching file: "+P},c="\u2716 Error: File does not exist or is empty",o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},r="data-src-status",l="loading",h="loaded",i="failed",m="pre[data-src]:not(["+r+'="'+h+'"]):not(['+r+'="'+l+'"])';function f(y,P,b){var A=new XMLHttpRequest;A.open("GET",y,!0),A.onreadystatechange=function(){A.readyState==4&&(A.status<400&&A.responseText?P(A.responseText):A.status>=400?b(d(A.status,A.statusText)):b(c))},A.send(null)}function u(y){var P=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(y||"");if(P){var b=Number(P[1]),A=P[2],v=P[3];return A?v?[b,Number(v)]:[b,void 0]:[b,b]}}t.hooks.add("before-highlightall",function(y){y.selector+=", "+m}),t.hooks.add("before-sanity-check",function(y){var P=y.element;if(P.matches(m)){y.code="",P.setAttribute(r,l);var b=P.appendChild(document.createElement("CODE"));b.textContent=n;var A=P.getAttribute("data-src"),v=y.language;if(v==="none"){var B=(/\.(\w+)$/.exec(A)||[,"none"])[1];v=o[B]||B}t.util.setLanguage(b,v),t.util.setLanguage(P,v);var E=t.plugins.autoloader;E&&E.loadLanguages(v),f(A,function(K){P.setAttribute(r,h);var w=u(P.getAttribute("data-range"));if(w){var D=K.split(/\r\n?|\n/g),S=w[0],L=w[1]==null?D.length:w[1];S<0&&(S+=D.length),S=Math.max(0,Math.min(S-1,D.length)),L<0&&(L+=D.length),L=Math.max(0,Math.min(L,D.length)),K=D.slice(S,L).join(`
`),P.hasAttribute("data-start")||P.setAttribute("data-start",String(S+1))}b.textContent=K,t.highlightElement(b)},function(K){P.setAttribute(r,i),b.textContent=K})}}),t.plugins.fileHighlight={highlight:function(P){for(var b=(P||document).querySelectorAll(m),A=0,v;v=b[A++];)t.highlightElement(v)}};var k=!1;t.fileHighlight=function(){k||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),k=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()},8026:(N,_,s)=>{const g=Symbol("SemVer ANY");class t{static get ANY(){return g}constructor(m,f){if(f=n(f),m instanceof t){if(m.loose===!!f.loose)return m;m=m.value}m=m.trim().split(/\s+/).join(" "),r("comparator",m,f),this.options=f,this.loose=!!f.loose,this.parse(m),this.semver===g?this.value="":this.value=this.operator+this.semver.version,r("comp",this)}parse(m){const f=this.options.loose?d[c.COMPARATORLOOSE]:d[c.COMPARATOR],u=m.match(f);if(!u)throw new TypeError(`Invalid comparator: ${m}`);this.operator=u[1]!==void 0?u[1]:"",this.operator==="="&&(this.operator=""),u[2]?this.semver=new l(u[2],this.options.loose):this.semver=g}toString(){return this.value}test(m){if(r("Comparator.test",m,this.options.loose),this.semver===g||m===g)return!0;if(typeof m=="string")try{m=new l(m,this.options)}catch(f){return!1}return o(m,this.operator,this.semver,this.options)}intersects(m,f){if(!(m instanceof t))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new h(m.value,f).test(this.value):m.operator===""?m.value===""?!0:new h(this.value,f).test(m.semver):(f=n(f),f.includePrerelease&&(this.value==="<0.0.0-0"||m.value==="<0.0.0-0")||!f.includePrerelease&&(this.value.startsWith("<0.0.0")||m.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&m.operator.startsWith(">")||this.operator.startsWith("<")&&m.operator.startsWith("<")||this.semver.version===m.semver.version&&this.operator.includes("=")&&m.operator.includes("=")||o(this.semver,"<",m.semver,f)&&this.operator.startsWith(">")&&m.operator.startsWith("<")||o(this.semver,">",m.semver,f)&&this.operator.startsWith("<")&&m.operator.startsWith(">")))}}N.exports=t;const n=s(1499),{safeRe:d,t:c}=s(5255),o=s(2407),r=s(3071),l=s(3088),h=s(1187)},1187:(N,_,s)=>{class g{constructor(F,O){if(O=d(O),F instanceof g)return F.loose===!!O.loose&&F.includePrerelease===!!O.includePrerelease?F:new g(F.raw,O);if(F instanceof c)return this.raw=F.value,this.set=[[F]],this.format(),this;if(this.options=O,this.loose=!!O.loose,this.includePrerelease=!!O.includePrerelease,this.raw=F.trim().split(/\s+/).join(" "),this.set=this.raw.split("||").map(q=>this.parseRange(q.trim())).filter(q=>q.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){const q=this.set[0];if(this.set=this.set.filter(H=>!y(H[0])),this.set.length===0)this.set=[q];else if(this.set.length>1){for(const H of this.set)if(H.length===1&&P(H[0])){this.set=[H];break}}}this.format()}format(){return this.range=this.set.map(F=>F.join(" ").trim()).join("||").trim(),this.range}toString(){return this.range}parseRange(F){const q=((this.options.includePrerelease&&u)|(this.options.loose&&k))+":"+F,H=n.get(q);if(H)return H;const Q=this.options.loose,oe=Q?l[h.HYPHENRANGELOOSE]:l[h.HYPHENRANGE];F=F.replace(oe,U(this.options.includePrerelease)),o("hyphen replace",F),F=F.replace(l[h.COMPARATORTRIM],i),o("comparator trim",F),F=F.replace(l[h.TILDETRIM],m),o("tilde trim",F),F=F.replace(l[h.CARETTRIM],f),o("caret trim",F);let fe=F.split(" ").map(Ne=>A(Ne,this.options)).join(" ").split(/\s+/).map(Ne=>j(Ne,this.options));Q&&(fe=fe.filter(Ne=>(o("loose invalid filter",Ne,this.options),!!Ne.match(l[h.COMPARATORLOOSE])))),o("range list",fe);const Z=new Map,ye=fe.map(Ne=>new c(Ne,this.options));for(const Ne of ye){if(y(Ne))return[Ne];Z.set(Ne.value,Ne)}Z.size>1&&Z.has("")&&Z.delete("");const ke=[...Z.values()];return n.set(q,ke),ke}intersects(F,O){if(!(F instanceof g))throw new TypeError("a Range is required");return this.set.some(q=>b(q,O)&&F.set.some(H=>b(H,O)&&q.every(Q=>H.every(oe=>Q.intersects(oe,O)))))}test(F){if(!F)return!1;if(typeof F=="string")try{F=new r(F,this.options)}catch(O){return!1}for(let O=0;O<this.set.length;O++)if(Y(this.set[O],F,this.options))return!0;return!1}}N.exports=g;const t=s(637),n=new t({max:1e3}),d=s(1499),c=s(8026),o=s(3071),r=s(3088),{safeRe:l,t:h,comparatorTrimReplace:i,tildeTrimReplace:m,caretTrimReplace:f}=s(5255),{FLAG_INCLUDE_PRERELEASE:u,FLAG_LOOSE:k}=s(2850),y=x=>x.value==="<0.0.0-0",P=x=>x.value==="",b=(x,F)=>{let O=!0;const q=x.slice();let H=q.pop();for(;O&&q.length;)O=q.every(Q=>H.intersects(Q,F)),H=q.pop();return O},A=(x,F)=>(o("comp",x,F),x=K(x,F),o("caret",x),x=B(x,F),o("tildes",x),x=D(x,F),o("xrange",x),x=L(x,F),o("stars",x),x),v=x=>!x||x.toLowerCase()==="x"||x==="*",B=(x,F)=>x.trim().split(/\s+/).map(O=>E(O,F)).join(" "),E=(x,F)=>{const O=F.loose?l[h.TILDELOOSE]:l[h.TILDE];return x.replace(O,(q,H,Q,oe,fe)=>{o("tilde",x,q,H,Q,oe,fe);let Z;return v(H)?Z="":v(Q)?Z=`>=${H}.0.0 <${+H+1}.0.0-0`:v(oe)?Z=`>=${H}.${Q}.0 <${H}.${+Q+1}.0-0`:fe?(o("replaceTilde pr",fe),Z=`>=${H}.${Q}.${oe}-${fe} <${H}.${+Q+1}.0-0`):Z=`>=${H}.${Q}.${oe} <${H}.${+Q+1}.0-0`,o("tilde return",Z),Z})},K=(x,F)=>x.trim().split(/\s+/).map(O=>w(O,F)).join(" "),w=(x,F)=>{o("caret",x,F);const O=F.loose?l[h.CARETLOOSE]:l[h.CARET],q=F.includePrerelease?"-0":"";return x.replace(O,(H,Q,oe,fe,Z)=>{o("caret",x,H,Q,oe,fe,Z);let ye;return v(Q)?ye="":v(oe)?ye=`>=${Q}.0.0${q} <${+Q+1}.0.0-0`:v(fe)?Q==="0"?ye=`>=${Q}.${oe}.0${q} <${Q}.${+oe+1}.0-0`:ye=`>=${Q}.${oe}.0${q} <${+Q+1}.0.0-0`:Z?(o("replaceCaret pr",Z),Q==="0"?oe==="0"?ye=`>=${Q}.${oe}.${fe}-${Z} <${Q}.${oe}.${+fe+1}-0`:ye=`>=${Q}.${oe}.${fe}-${Z} <${Q}.${+oe+1}.0-0`:ye=`>=${Q}.${oe}.${fe}-${Z} <${+Q+1}.0.0-0`):(o("no pr"),Q==="0"?oe==="0"?ye=`>=${Q}.${oe}.${fe}${q} <${Q}.${oe}.${+fe+1}-0`:ye=`>=${Q}.${oe}.${fe}${q} <${Q}.${+oe+1}.0-0`:ye=`>=${Q}.${oe}.${fe} <${+Q+1}.0.0-0`),o("caret return",ye),ye})},D=(x,F)=>(o("replaceXRanges",x,F),x.split(/\s+/).map(O=>S(O,F)).join(" ")),S=(x,F)=>{x=x.trim();const O=F.loose?l[h.XRANGELOOSE]:l[h.XRANGE];return x.replace(O,(q,H,Q,oe,fe,Z)=>{o("xRange",x,q,H,Q,oe,fe,Z);const ye=v(Q),ke=ye||v(oe),Ne=ke||v(fe),Qe=Ne;return H==="="&&Qe&&(H=""),Z=F.includePrerelease?"-0":"",ye?H===">"||H==="<"?q="<0.0.0-0":q="*":H&&Qe?(ke&&(oe=0),fe=0,H===">"?(H=">=",ke?(Q=+Q+1,oe=0,fe=0):(oe=+oe+1,fe=0)):H==="<="&&(H="<",ke?Q=+Q+1:oe=+oe+1),H==="<"&&(Z="-0"),q=`${H+Q}.${oe}.${fe}${Z}`):ke?q=`>=${Q}.0.0${Z} <${+Q+1}.0.0-0`:Ne&&(q=`>=${Q}.${oe}.0${Z} <${Q}.${+oe+1}.0-0`),o("xRange return",q),q})},L=(x,F)=>(o("replaceStars",x,F),x.trim().replace(l[h.STAR],"")),j=(x,F)=>(o("replaceGTE0",x,F),x.trim().replace(l[F.includePrerelease?h.GTE0PRE:h.GTE0],"")),U=x=>(F,O,q,H,Q,oe,fe,Z,ye,ke,Ne,Qe,ma)=>(v(q)?O="":v(H)?O=`>=${q}.0.0${x?"-0":""}`:v(Q)?O=`>=${q}.${H}.0${x?"-0":""}`:oe?O=`>=${O}`:O=`>=${O}${x?"-0":""}`,v(ye)?Z="":v(ke)?Z=`<${+ye+1}.0.0-0`:v(Ne)?Z=`<${ye}.${+ke+1}.0-0`:Qe?Z=`<=${ye}.${ke}.${Ne}-${Qe}`:x?Z=`<${ye}.${ke}.${+Ne+1}-0`:Z=`<=${Z}`,`${O} ${Z}`.trim()),Y=(x,F,O)=>{for(let q=0;q<x.length;q++)if(!x[q].test(F))return!1;if(F.prerelease.length&&!O.includePrerelease){for(let q=0;q<x.length;q++)if(o(x[q].semver),x[q].semver!==c.ANY&&x[q].semver.prerelease.length>0){const H=x[q].semver;if(H.major===F.major&&H.minor===F.minor&&H.patch===F.patch)return!0}return!1}return!0}},3088:(N,_,s)=>{const g=s(3071),{MAX_LENGTH:t,MAX_SAFE_INTEGER:n}=s(2850),{safeRe:d,t:c}=s(5255),o=s(1499),{compareIdentifiers:r}=s(8502);class l{constructor(i,m){if(m=o(m),i instanceof l){if(i.loose===!!m.loose&&i.includePrerelease===!!m.includePrerelease)return i;i=i.version}else if(typeof i!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof i}".`);if(i.length>t)throw new TypeError(`version is longer than ${t} characters`);g("SemVer",i,m),this.options=m,this.loose=!!m.loose,this.includePrerelease=!!m.includePrerelease;const f=i.trim().match(m.loose?d[c.LOOSE]:d[c.FULL]);if(!f)throw new TypeError(`Invalid Version: ${i}`);if(this.raw=i,this.major=+f[1],this.minor=+f[2],this.patch=+f[3],this.major>n||this.major<0)throw new TypeError("Invalid major version");if(this.minor>n||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>n||this.patch<0)throw new TypeError("Invalid patch version");f[4]?this.prerelease=f[4].split(".").map(u=>{if(/^[0-9]+$/.test(u)){const k=+u;if(k>=0&&k<n)return k}return u}):this.prerelease=[],this.build=f[5]?f[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(i){if(g("SemVer.compare",this.version,this.options,i),!(i instanceof l)){if(typeof i=="string"&&i===this.version)return 0;i=new l(i,this.options)}return i.version===this.version?0:this.compareMain(i)||this.comparePre(i)}compareMain(i){return i instanceof l||(i=new l(i,this.options)),r(this.major,i.major)||r(this.minor,i.minor)||r(this.patch,i.patch)}comparePre(i){if(i instanceof l||(i=new l(i,this.options)),this.prerelease.length&&!i.prerelease.length)return-1;if(!this.prerelease.length&&i.prerelease.length)return 1;if(!this.prerelease.length&&!i.prerelease.length)return 0;let m=0;do{const f=this.prerelease[m],u=i.prerelease[m];if(g("prerelease compare",m,f,u),f===void 0&&u===void 0)return 0;if(u===void 0)return 1;if(f===void 0)return-1;if(f===u)continue;return r(f,u)}while(++m)}compareBuild(i){i instanceof l||(i=new l(i,this.options));let m=0;do{const f=this.build[m],u=i.build[m];if(g("prerelease compare",m,f,u),f===void 0&&u===void 0)return 0;if(u===void 0)return 1;if(f===void 0)return-1;if(f===u)continue;return r(f,u)}while(++m)}inc(i,m,f){switch(i){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",m,f);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",m,f);break;case"prepatch":this.prerelease.length=0,this.inc("patch",m,f),this.inc("pre",m,f);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",m,f),this.inc("pre",m,f);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{const u=Number(f)?1:0;if(!m&&f===!1)throw new Error("invalid increment argument: identifier is empty");if(this.prerelease.length===0)this.prerelease=[u];else{let k=this.prerelease.length;for(;--k>=0;)typeof this.prerelease[k]=="number"&&(this.prerelease[k]++,k=-2);if(k===-1){if(m===this.prerelease.join(".")&&f===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(u)}}if(m){let k=[m,u];f===!1&&(k=[m]),r(this.prerelease[0],m)===0?isNaN(this.prerelease[1])&&(this.prerelease=k):this.prerelease=k}break}default:throw new Error(`invalid increment argument: ${i}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}}N.exports=l},2340:(N,_,s)=>{const g=s(3221),t=(n,d)=>{const c=g(n.trim().replace(/^[=v]+/,""),d);return c?c.version:null};N.exports=t},2407:(N,_,s)=>{const g=s(2868),t=s(1894),n=s(873),d=s(2333),c=s(9584),o=s(5337),r=(l,h,i,m)=>{switch(h){case"===":return typeof l=="object"&&(l=l.version),typeof i=="object"&&(i=i.version),l===i;case"!==":return typeof l=="object"&&(l=l.version),typeof i=="object"&&(i=i.version),l!==i;case"":case"=":case"==":return g(l,i,m);case"!=":return t(l,i,m);case">":return n(l,i,m);case">=":return d(l,i,m);case"<":return c(l,i,m);case"<=":return o(l,i,m);default:throw new TypeError(`Invalid operator: ${h}`)}};N.exports=r},9942:(N,_,s)=>{const g=s(3088),t=s(3221),{safeRe:n,t:d}=s(5255),c=(o,r)=>{if(o instanceof g)return o;if(typeof o=="number"&&(o=String(o)),typeof o!="string")return null;r=r||{};let l=null;if(!r.rtl)l=o.match(n[d.COERCE]);else{let h;for(;(h=n[d.COERCERTL].exec(o))&&(!l||l.index+l[0].length!==o.length);)(!l||h.index+h[0].length!==l.index+l[0].length)&&(l=h),n[d.COERCERTL].lastIndex=h.index+h[1].length+h[2].length;n[d.COERCERTL].lastIndex=-1}return l===null?null:t(`${l[2]}.${l[3]||"0"}.${l[4]||"0"}`,r)};N.exports=c},4737:(N,_,s)=>{const g=s(3088),t=(n,d,c)=>{const o=new g(n,c),r=new g(d,c);return o.compare(r)||o.compareBuild(r)};N.exports=t},6416:(N,_,s)=>{const g=s(1607),t=(n,d)=>g(n,d,!0);N.exports=t},1607:(N,_,s)=>{const g=s(3088),t=(n,d,c)=>new g(n,c).compare(new g(d,c));N.exports=t},5592:(N,_,s)=>{const g=s(3221),t=(n,d)=>{const c=g(n,null,!0),o=g(d,null,!0),r=c.compare(o);if(r===0)return null;const l=r>0,h=l?c:o,i=l?o:c,m=!!h.prerelease.length;if(!!i.prerelease.length&&!m)return!i.patch&&!i.minor?"major":h.patch?"patch":h.minor?"minor":"major";const u=m?"pre":"";return c.major!==o.major?u+"major":c.minor!==o.minor?u+"minor":c.patch!==o.patch?u+"patch":"prerelease"};N.exports=t},2868:(N,_,s)=>{const g=s(1607),t=(n,d,c)=>g(n,d,c)===0;N.exports=t},873:(N,_,s)=>{const g=s(1607),t=(n,d,c)=>g(n,d,c)>0;N.exports=t},2333:(N,_,s)=>{const g=s(1607),t=(n,d,c)=>g(n,d,c)>=0;N.exports=t},1335:(N,_,s)=>{const g=s(3088),t=(n,d,c,o,r)=>{typeof c=="string"&&(r=o,o=c,c=void 0);try{return new g(n instanceof g?n.version:n,c).inc(d,o,r).version}catch(l){return null}};N.exports=t},9584:(N,_,s)=>{const g=s(1607),t=(n,d,c)=>g(n,d,c)<0;N.exports=t},5337:(N,_,s)=>{const g=s(1607),t=(n,d,c)=>g(n,d,c)<=0;N.exports=t},2680:(N,_,s)=>{const g=s(3088),t=(n,d)=>new g(n,d).major;N.exports=t},2037:(N,_,s)=>{const g=s(3088),t=(n,d)=>new g(n,d).minor;N.exports=t},1894:(N,_,s)=>{const g=s(1607),t=(n,d,c)=>g(n,d,c)!==0;N.exports=t},3221:(N,_,s)=>{const g=s(3088),t=(n,d,c=!1)=>{if(n instanceof g)return n;try{return new g(n,d)}catch(o){if(!c)return null;throw o}};N.exports=t},4150:(N,_,s)=>{const g=s(3088),t=(n,d)=>new g(n,d).patch;N.exports=t},1907:(N,_,s)=>{const g=s(3221),t=(n,d)=>{const c=g(n,d);return c&&c.prerelease.length?c.prerelease:null};N.exports=t},684:(N,_,s)=>{const g=s(1607),t=(n,d,c)=>g(d,n,c);N.exports=t},6887:(N,_,s)=>{const g=s(4737),t=(n,d)=>n.sort((c,o)=>g(o,c,d));N.exports=t},727:(N,_,s)=>{const g=s(1187),t=(n,d,c)=>{try{d=new g(d,c)}catch(o){return!1}return d.test(n)};N.exports=t},693:(N,_,s)=>{const g=s(4737),t=(n,d)=>n.sort((c,o)=>g(c,o,d));N.exports=t},9154:(N,_,s)=>{const g=s(3221),t=(n,d)=>{const c=g(n,d);return c?c.version:null};N.exports=t},4309:(N,_,s)=>{const g=s(5255),t=s(2850),n=s(3088),d=s(8502),c=s(3221),o=s(9154),r=s(2340),l=s(1335),h=s(5592),i=s(2680),m=s(2037),f=s(4150),u=s(1907),k=s(1607),y=s(684),P=s(6416),b=s(4737),A=s(693),v=s(6887),B=s(873),E=s(9584),K=s(2868),w=s(1894),D=s(2333),S=s(5337),L=s(2407),j=s(9942),U=s(8026),Y=s(1187),x=s(727),F=s(5405),O=s(5430),q=s(3501),H=s(2804),Q=s(2845),oe=s(3947),fe=s(9176),Z=s(2167),ye=s(8415),ke=s(7367),Ne=s(7387);N.exports={parse:c,valid:o,clean:r,inc:l,diff:h,major:i,minor:m,patch:f,prerelease:u,compare:k,rcompare:y,compareLoose:P,compareBuild:b,sort:A,rsort:v,gt:B,lt:E,eq:K,neq:w,gte:D,lte:S,cmp:L,coerce:j,Comparator:U,Range:Y,satisfies:x,toComparators:F,maxSatisfying:O,minSatisfying:q,minVersion:H,validRange:Q,outside:oe,gtr:fe,ltr:Z,intersects:ye,simplifyRange:ke,subset:Ne,SemVer:n,re:g.re,src:g.src,tokens:g.t,SEMVER_SPEC_VERSION:t.SEMVER_SPEC_VERSION,RELEASE_TYPES:t.RELEASE_TYPES,compareIdentifiers:d.compareIdentifiers,rcompareIdentifiers:d.rcompareIdentifiers}},2850:N=>{const _="2.0.0",g=Number.MAX_SAFE_INTEGER||9007199254740991,t=16,n=256-6,d=["major","premajor","minor","preminor","patch","prepatch","prerelease"];N.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:t,MAX_SAFE_BUILD_LENGTH:n,MAX_SAFE_INTEGER:g,RELEASE_TYPES:d,SEMVER_SPEC_VERSION:_,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}},3071:N=>{const _=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...s)=>console.error("SEMVER",...s):()=>{};N.exports=_},8502:N=>{const _=/^[0-9]+$/,s=(t,n)=>{const d=_.test(t),c=_.test(n);return d&&c&&(t=+t,n=+n),t===n?0:d&&!c?-1:c&&!d?1:t<n?-1:1},g=(t,n)=>s(n,t);N.exports={compareIdentifiers:s,rcompareIdentifiers:g}},1499:N=>{const _=Object.freeze({loose:!0}),s=Object.freeze({}),g=t=>t?typeof t!="object"?_:t:s;N.exports=g},5255:(N,_,s)=>{const{MAX_SAFE_COMPONENT_LENGTH:g,MAX_SAFE_BUILD_LENGTH:t,MAX_LENGTH:n}=s(2850),d=s(3071);_=N.exports={};const c=_.re=[],o=_.safeRe=[],r=_.src=[],l=_.t={};let h=0;const i="[a-zA-Z0-9-]",m=[["\\s",1],["\\d",n],[i,t]],f=k=>{for(const[y,P]of m)k=k.split(`${y}*`).join(`${y}{0,${P}}`).split(`${y}+`).join(`${y}{1,${P}}`);return k},u=(k,y,P)=>{const b=f(y),A=h++;d(k,A,y),l[k]=A,r[A]=y,c[A]=new RegExp(y,P?"g":void 0),o[A]=new RegExp(b,P?"g":void 0)};u("NUMERICIDENTIFIER","0|[1-9]\\d*"),u("NUMERICIDENTIFIERLOOSE","\\d+"),u("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${i}*`),u("MAINVERSION",`(${r[l.NUMERICIDENTIFIER]})\\.(${r[l.NUMERICIDENTIFIER]})\\.(${r[l.NUMERICIDENTIFIER]})`),u("MAINVERSIONLOOSE",`(${r[l.NUMERICIDENTIFIERLOOSE]})\\.(${r[l.NUMERICIDENTIFIERLOOSE]})\\.(${r[l.NUMERICIDENTIFIERLOOSE]})`),u("PRERELEASEIDENTIFIER",`(?:${r[l.NUMERICIDENTIFIER]}|${r[l.NONNUMERICIDENTIFIER]})`),u("PRERELEASEIDENTIFIERLOOSE",`(?:${r[l.NUMERICIDENTIFIERLOOSE]}|${r[l.NONNUMERICIDENTIFIER]})`),u("PRERELEASE",`(?:-(${r[l.PRERELEASEIDENTIFIER]}(?:\\.${r[l.PRERELEASEIDENTIFIER]})*))`),u("PRERELEASELOOSE",`(?:-?(${r[l.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${r[l.PRERELEASEIDENTIFIERLOOSE]})*))`),u("BUILDIDENTIFIER",`${i}+`),u("BUILD",`(?:\\+(${r[l.BUILDIDENTIFIER]}(?:\\.${r[l.BUILDIDENTIFIER]})*))`),u("FULLPLAIN",`v?${r[l.MAINVERSION]}${r[l.PRERELEASE]}?${r[l.BUILD]}?`),u("FULL",`^${r[l.FULLPLAIN]}$`),u("LOOSEPLAIN",`[v=\\s]*${r[l.MAINVERSIONLOOSE]}${r[l.PRERELEASELOOSE]}?${r[l.BUILD]}?`),u("LOOSE",`^${r[l.LOOSEPLAIN]}$`),u("GTLT","((?:<|>)?=?)"),u("XRANGEIDENTIFIERLOOSE",`${r[l.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),u("XRANGEIDENTIFIER",`${r[l.NUMERICIDENTIFIER]}|x|X|\\*`),u("XRANGEPLAIN",`[v=\\s]*(${r[l.XRANGEIDENTIFIER]})(?:\\.(${r[l.XRANGEIDENTIFIER]})(?:\\.(${r[l.XRANGEIDENTIFIER]})(?:${r[l.PRERELEASE]})?${r[l.BUILD]}?)?)?`),u("XRANGEPLAINLOOSE",`[v=\\s]*(${r[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${r[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${r[l.XRANGEIDENTIFIERLOOSE]})(?:${r[l.PRERELEASELOOSE]})?${r[l.BUILD]}?)?)?`),u("XRANGE",`^${r[l.GTLT]}\\s*${r[l.XRANGEPLAIN]}$`),u("XRANGELOOSE",`^${r[l.GTLT]}\\s*${r[l.XRANGEPLAINLOOSE]}$`),u("COERCE",`(^|[^\\d])(\\d{1,${g}})(?:\\.(\\d{1,${g}}))?(?:\\.(\\d{1,${g}}))?(?:$|[^\\d])`),u("COERCERTL",r[l.COERCE],!0),u("LONETILDE","(?:~>?)"),u("TILDETRIM",`(\\s*)${r[l.LONETILDE]}\\s+`,!0),_.tildeTrimReplace="$1~",u("TILDE",`^${r[l.LONETILDE]}${r[l.XRANGEPLAIN]}$`),u("TILDELOOSE",`^${r[l.LONETILDE]}${r[l.XRANGEPLAINLOOSE]}$`),u("LONECARET","(?:\\^)"),u("CARETTRIM",`(\\s*)${r[l.LONECARET]}\\s+`,!0),_.caretTrimReplace="$1^",u("CARET",`^${r[l.LONECARET]}${r[l.XRANGEPLAIN]}$`),u("CARETLOOSE",`^${r[l.LONECARET]}${r[l.XRANGEPLAINLOOSE]}$`),u("COMPARATORLOOSE",`^${r[l.GTLT]}\\s*(${r[l.LOOSEPLAIN]})$|^$`),u("COMPARATOR",`^${r[l.GTLT]}\\s*(${r[l.FULLPLAIN]})$|^$`),u("COMPARATORTRIM",`(\\s*)${r[l.GTLT]}\\s*(${r[l.LOOSEPLAIN]}|${r[l.XRANGEPLAIN]})`,!0),_.comparatorTrimReplace="$1$2$3",u("HYPHENRANGE",`^\\s*(${r[l.XRANGEPLAIN]})\\s+-\\s+(${r[l.XRANGEPLAIN]})\\s*$`),u("HYPHENRANGELOOSE",`^\\s*(${r[l.XRANGEPLAINLOOSE]})\\s+-\\s+(${r[l.XRANGEPLAINLOOSE]})\\s*$`),u("STAR","(<|>)?=?\\s*\\*"),u("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),u("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")},9176:(N,_,s)=>{const g=s(3947),t=(n,d,c)=>g(n,d,">",c);N.exports=t},8415:(N,_,s)=>{const g=s(1187),t=(n,d,c)=>(n=new g(n,c),d=new g(d,c),n.intersects(d,c));N.exports=t},2167:(N,_,s)=>{const g=s(3947),t=(n,d,c)=>g(n,d,"<",c);N.exports=t},5430:(N,_,s)=>{const g=s(3088),t=s(1187),n=(d,c,o)=>{let r=null,l=null,h=null;try{h=new t(c,o)}catch(i){return null}return d.forEach(i=>{h.test(i)&&(!r||l.compare(i)===-1)&&(r=i,l=new g(r,o))}),r};N.exports=n},3501:(N,_,s)=>{const g=s(3088),t=s(1187),n=(d,c,o)=>{let r=null,l=null,h=null;try{h=new t(c,o)}catch(i){return null}return d.forEach(i=>{h.test(i)&&(!r||l.compare(i)===1)&&(r=i,l=new g(r,o))}),r};N.exports=n},2804:(N,_,s)=>{const g=s(3088),t=s(1187),n=s(873),d=(c,o)=>{c=new t(c,o);let r=new g("0.0.0");if(c.test(r)||(r=new g("0.0.0-0"),c.test(r)))return r;r=null;for(let l=0;l<c.set.length;++l){const h=c.set[l];let i=null;h.forEach(m=>{const f=new g(m.semver.version);switch(m.operator){case">":f.prerelease.length===0?f.patch++:f.prerelease.push(0),f.raw=f.format();case"":case">=":(!i||n(f,i))&&(i=f);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${m.operator}`)}}),i&&(!r||n(r,i))&&(r=i)}return r&&c.test(r)?r:null};N.exports=d},3947:(N,_,s)=>{const g=s(3088),t=s(8026),{ANY:n}=t,d=s(1187),c=s(727),o=s(873),r=s(9584),l=s(5337),h=s(2333),i=(m,f,u,k)=>{m=new g(m,k),f=new d(f,k);let y,P,b,A,v;switch(u){case">":y=o,P=l,b=r,A=">",v=">=";break;case"<":y=r,P=h,b=o,A="<",v="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(c(m,f,k))return!1;for(let B=0;B<f.set.length;++B){const E=f.set[B];let K=null,w=null;if(E.forEach(D=>{D.semver===n&&(D=new t(">=0.0.0")),K=K||D,w=w||D,y(D.semver,K.semver,k)?K=D:b(D.semver,w.semver,k)&&(w=D)}),K.operator===A||K.operator===v||(!w.operator||w.operator===A)&&P(m,w.semver))return!1;if(w.operator===v&&b(m,w.semver))return!1}return!0};N.exports=i},7367:(N,_,s)=>{const g=s(727),t=s(1607);N.exports=(n,d,c)=>{const o=[];let r=null,l=null;const h=n.sort((u,k)=>t(u,k,c));for(const u of h)g(u,d,c)?(l=u,r||(r=u)):(l&&o.push([r,l]),l=null,r=null);r&&o.push([r,null]);const i=[];for(const[u,k]of o)u===k?i.push(u):!k&&u===h[0]?i.push("*"):k?u===h[0]?i.push(`<=${k}`):i.push(`${u} - ${k}`):i.push(`>=${u}`);const m=i.join(" || "),f=typeof d.raw=="string"?d.raw:String(d);return m.length<f.length?m:d}},7387:(N,_,s)=>{const g=s(1187),t=s(8026),{ANY:n}=t,d=s(727),c=s(1607),o=(f,u,k={})=>{if(f===u)return!0;f=new g(f,k),u=new g(u,k);let y=!1;e:for(const P of f.set){for(const b of u.set){const A=h(P,b,k);if(y=y||A!==null,A)continue e}if(y)return!1}return!0},r=[new t(">=0.0.0-0")],l=[new t(">=0.0.0")],h=(f,u,k)=>{if(f===u)return!0;if(f.length===1&&f[0].semver===n){if(u.length===1&&u[0].semver===n)return!0;k.includePrerelease?f=r:f=l}if(u.length===1&&u[0].semver===n){if(k.includePrerelease)return!0;u=l}const y=new Set;let P,b;for(const S of f)S.operator===">"||S.operator===">="?P=i(P,S,k):S.operator==="<"||S.operator==="<="?b=m(b,S,k):y.add(S.semver);if(y.size>1)return null;let A;if(P&&b){if(A=c(P.semver,b.semver,k),A>0)return null;if(A===0&&(P.operator!==">="||b.operator!=="<="))return null}for(const S of y){if(P&&!d(S,String(P),k)||b&&!d(S,String(b),k))return null;for(const L of u)if(!d(S,String(L),k))return!1;return!0}let v,B,E,K,w=b&&!k.includePrerelease&&b.semver.prerelease.length?b.semver:!1,D=P&&!k.includePrerelease&&P.semver.prerelease.length?P.semver:!1;w&&w.prerelease.length===1&&b.operator==="<"&&w.prerelease[0]===0&&(w=!1);for(const S of u){if(K=K||S.operator===">"||S.operator===">=",E=E||S.operator==="<"||S.operator==="<=",P){if(D&&S.semver.prerelease&&S.semver.prerelease.length&&S.semver.major===D.major&&S.semver.minor===D.minor&&S.semver.patch===D.patch&&(D=!1),S.operator===">"||S.operator===">="){if(v=i(P,S,k),v===S&&v!==P)return!1}else if(P.operator===">="&&!d(P.semver,String(S),k))return!1}if(b){if(w&&S.semver.prerelease&&S.semver.prerelease.length&&S.semver.major===w.major&&S.semver.minor===w.minor&&S.semver.patch===w.patch&&(w=!1),S.operator==="<"||S.operator==="<="){if(B=m(b,S,k),B===S&&B!==b)return!1}else if(b.operator==="<="&&!d(b.semver,String(S),k))return!1}if(!S.operator&&(b||P)&&A!==0)return!1}return!(P&&E&&!b&&A!==0||b&&K&&!P&&A!==0||D||w)},i=(f,u,k)=>{if(!f)return u;const y=c(f.semver,u.semver,k);return y>0?f:y<0||u.operator===">"&&f.operator===">="?u:f},m=(f,u,k)=>{if(!f)return u;const y=c(f.semver,u.semver,k);return y<0?f:y>0||u.operator==="<"&&f.operator==="<="?u:f};N.exports=o},5405:(N,_,s)=>{const g=s(1187),t=(n,d)=>new g(n,d).set.map(c=>c.map(o=>o.value).join(" ").trim().split(" "));N.exports=t},2845:(N,_,s)=>{const g=s(1187),t=(n,d)=>{try{return new g(n,d).range||"*"}catch(c){return null}};N.exports=t},5509:N=>{"use strict";N.exports=function(_){_.prototype[Symbol.iterator]=function*(){for(let s=this.head;s;s=s.next)yield s.value}}},4941:(N,_,s)=>{"use strict";N.exports=g,g.Node=c,g.create=g;function g(o){var r=this;if(r instanceof g||(r=new g),r.tail=null,r.head=null,r.length=0,o&&typeof o.forEach=="function")o.forEach(function(i){r.push(i)});else if(arguments.length>0)for(var l=0,h=arguments.length;l<h;l++)r.push(arguments[l]);return r}g.prototype.removeNode=function(o){if(o.list!==this)throw new Error("removing node which does not belong to this list");var r=o.next,l=o.prev;return r&&(r.prev=l),l&&(l.next=r),o===this.head&&(this.head=r),o===this.tail&&(this.tail=l),o.list.length--,o.next=null,o.prev=null,o.list=null,r},g.prototype.unshiftNode=function(o){if(o!==this.head){o.list&&o.list.removeNode(o);var r=this.head;o.list=this,o.next=r,r&&(r.prev=o),this.head=o,this.tail||(this.tail=o),this.length++}},g.prototype.pushNode=function(o){if(o!==this.tail){o.list&&o.list.removeNode(o);var r=this.tail;o.list=this,o.prev=r,r&&(r.next=o),this.tail=o,this.head||(this.head=o),this.length++}},g.prototype.push=function(){for(var o=0,r=arguments.length;o<r;o++)n(this,arguments[o]);return this.length},g.prototype.unshift=function(){for(var o=0,r=arguments.length;o<r;o++)d(this,arguments[o]);return this.length},g.prototype.pop=function(){if(this.tail){var o=this.tail.value;return this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,o}},g.prototype.shift=function(){if(this.head){var o=this.head.value;return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,o}},g.prototype.forEach=function(o,r){r=r||this;for(var l=this.head,h=0;l!==null;h++)o.call(r,l.value,h,this),l=l.next},g.prototype.forEachReverse=function(o,r){r=r||this;for(var l=this.tail,h=this.length-1;l!==null;h--)o.call(r,l.value,h,this),l=l.prev},g.prototype.get=function(o){for(var r=0,l=this.head;l!==null&&r<o;r++)l=l.next;if(r===o&&l!==null)return l.value},g.prototype.getReverse=function(o){for(var r=0,l=this.tail;l!==null&&r<o;r++)l=l.prev;if(r===o&&l!==null)return l.value},g.prototype.map=function(o,r){r=r||this;for(var l=new g,h=this.head;h!==null;)l.push(o.call(r,h.value,this)),h=h.next;return l},g.prototype.mapReverse=function(o,r){r=r||this;for(var l=new g,h=this.tail;h!==null;)l.push(o.call(r,h.value,this)),h=h.prev;return l},g.prototype.reduce=function(o,r){var l,h=this.head;if(arguments.length>1)l=r;else if(this.head)h=this.head.next,l=this.head.value;else throw new TypeError("Reduce of empty list with no initial value");for(var i=0;h!==null;i++)l=o(l,h.value,i),h=h.next;return l},g.prototype.reduceReverse=function(o,r){var l,h=this.tail;if(arguments.length>1)l=r;else if(this.tail)h=this.tail.prev,l=this.tail.value;else throw new TypeError("Reduce of empty list with no initial value");for(var i=this.length-1;h!==null;i--)l=o(l,h.value,i),h=h.prev;return l},g.prototype.toArray=function(){for(var o=new Array(this.length),r=0,l=this.head;l!==null;r++)o[r]=l.value,l=l.next;return o},g.prototype.toArrayReverse=function(){for(var o=new Array(this.length),r=0,l=this.tail;l!==null;r++)o[r]=l.value,l=l.prev;return o},g.prototype.slice=function(o,r){r=r||this.length,r<0&&(r+=this.length),o=o||0,o<0&&(o+=this.length);var l=new g;if(r<o||r<0)return l;o<0&&(o=0),r>this.length&&(r=this.length);for(var h=0,i=this.head;i!==null&&h<o;h++)i=i.next;for(;i!==null&&h<r;h++,i=i.next)l.push(i.value);return l},g.prototype.sliceReverse=function(o,r){r=r||this.length,r<0&&(r+=this.length),o=o||0,o<0&&(o+=this.length);var l=new g;if(r<o||r<0)return l;o<0&&(o=0),r>this.length&&(r=this.length);for(var h=this.length,i=this.tail;i!==null&&h>r;h--)i=i.prev;for(;i!==null&&h>o;h--,i=i.prev)l.push(i.value);return l},g.prototype.splice=function(o,r,...l){o>this.length&&(o=this.length-1),o<0&&(o=this.length+o);for(var h=0,i=this.head;i!==null&&h<o;h++)i=i.next;for(var m=[],h=0;i&&h<r;h++)m.push(i.value),i=this.removeNode(i);i===null&&(i=this.tail),i!==this.head&&i!==this.tail&&(i=i.prev);for(var h=0;h<l.length;h++)i=t(this,i,l[h]);return m},g.prototype.reverse=function(){for(var o=this.head,r=this.tail,l=o;l!==null;l=l.prev){var h=l.prev;l.prev=l.next,l.next=h}return this.head=r,this.tail=o,this};function t(o,r,l){var h=r===o.head?new c(l,null,r,o):new c(l,r,r.next,o);return h.next===null&&(o.tail=h),h.prev===null&&(o.head=h),o.length++,h}function n(o,r){o.tail=new c(r,o.tail,null,o),o.head||(o.head=o.tail),o.length++}function d(o,r){o.head=new c(r,null,o.head,o),o.tail||(o.tail=o.head),o.length++}function c(o,r,l,h){if(!(this instanceof c))return new c(o,r,l,h);this.list=h,this.value=o,r?(r.next=this,this.prev=r):this.prev=null,l?(l.prev=this,this.next=l):this.next=null}try{s(5509)(g)}catch(o){}}},Ii={};function aa(N){var _=Ii[N];if(_!==void 0)return _.exports;var s=Ii[N]={id:N,loaded:!1,exports:{}};return Zo[N].call(s.exports,s,s.exports,aa),s.loaded=!0,s.exports}aa.n=N=>{var _=N&&N.__esModule?()=>N.default:()=>N;return aa.d(_,{a:_}),_},aa.d=(N,_)=>{for(var s in _)aa.o(_,s)&&!aa.o(N,s)&&Object.defineProperty(N,s,{enumerable:!0,get:_[s]})},aa.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(N){if(typeof window=="object")return window}}(),aa.o=(N,_)=>Object.prototype.hasOwnProperty.call(N,_),aa.nmd=N=>(N.paths=[],N.children||(N.children=[]),N);var sh={};(()=>{var na;"use strict";var N=aa(613),_=aa.n(N),s=aa(4216),g=aa(4309),t=aa.n(g),n=aa(1151),d=aa.n(n),c=aa(8080),o=aa(2995),r=aa(4430),l=aa(7142),h=aa(2276),i=aa(4742),m=aa.n(i),f=aa(5949),u=aa(6607),k=aa(1264),y=aa(3133),P=aa(1879),b=aa(2886),A=aa(5434),v=aa(8314);class B{hydrate(ue,Ee){const ve=new URL(ue,typeof window=="undefined"?"https://dummy.base":window.location.origin),V={};ve.pathname.split("/").forEach((me,ge)=>{if(me.charAt(0)===":"){const he=me.slice(1);typeof Ee[he]!="undefined"&&(ve.pathname=ve.pathname.replace(me,encodeURIComponent(Ee[he])),V[he]=Ee[he])}});for(const me in Ee)(typeof V[me]=="undefined"||ve.searchParams.has(me))&&ve.searchParams.set(me,Ee[me]);return ve.toString()}}function E(){_()(".sample-request-send").off("click"),_()(".sample-request-send").on("click",function(we){we.preventDefault();const ue=_()(this).parents("article"),Ee=ue.data("group"),ve=ue.data("name"),V=ue.data("version");S(Ee,ve,V,_()(this).data("type"))}),_()(".sample-request-clear").off("click"),_()(".sample-request-clear").on("click",function(we){we.preventDefault();const ue=_()(this).parents("article"),Ee=ue.data("group"),ve=ue.data("name"),V=ue.data("version");L(Ee,ve,V)})}function K(we){return we.replace(/{(.+?)}/g,":$1")}function w(we,ue){const Ee=we.find(".sample-request-url").val(),ve=new B,V=K(Ee);return ve.hydrate(V,ue)}function D(we){const ue={};["header","query","body"].forEach(ve=>{const V={};try{we.find(_()(`[data-family="${ve}"]:visible`)).each((me,ge)=>{const he=ge.dataset.name;let Le=ge.value;if(ge.type==="checkbox")if(ge.checked)Le="on";else return!0;if(!Le&&!ge.dataset.optional&&ge.type!=="checkbox")return _()(ge).addClass("border-danger"),!0;V[he]=Le})}catch(me){return}ue[ve]=V});const Ee=we.find(_()('[data-family="body-json"]'));return Ee.is(":visible")?(ue.body=Ee.val(),ue.header["Content-Type"]="application/json"):ue.header["Content-Type"]="multipart/form-data",ue}function S(we,ue,Ee,ve){const V=_()(`article[data-group="${we}"][data-name="${ue}"][data-version="${Ee}"]`),me=D(V),ge={};if(ge.url=w(V,me.query),ge.headers=me.header,ge.headers["Content-Type"]==="application/json")ge.data=me.body;else if(ge.headers["Content-Type"]==="multipart/form-data"){const Fe=new FormData;for(const[Oe,ze]of Object.entries(me.body))Fe.append(Oe,ze);ge.data=Fe,ge.processData=!1,delete ge.headers["Content-Type"],ge.contentType=!1}ge.type=ve,ge.success=he,ge.error=Le,_().ajax(ge),V.find(".sample-request-response").fadeTo(200,1),V.find(".sample-request-response-json").html("Loading...");function he(Fe,Oe,ze){let Xe;try{Xe=JSON.parse(ze.responseText),Xe=JSON.stringify(Xe,null,4)}catch(sa){Xe=ze.responseText}V.find(".sample-request-response-json").text(Xe),m().highlightAll()}function Le(Fe,Oe,ze){let Xe="Error "+Fe.status+": "+ze,sa;try{sa=JSON.parse(Fe.responseText),sa=JSON.stringify(sa,null,4)}catch(fa){sa=Fe.responseText}sa&&(Xe+=`
`+sa),V.find(".sample-request-response").is(":visible")&&V.find(".sample-request-response").fadeTo(1,.1),V.find(".sample-request-response").fadeTo(250,1),V.find(".sample-request-response-json").text(Xe),m().highlightAll()}}function L(we,ue,Ee){const ve=_()('article[data-group="'+we+'"][data-name="'+ue+'"][data-version="'+Ee+'"]');ve.find(".sample-request-response-json").html(""),ve.find(".sample-request-response").hide(),ve.find(".sample-request-input").each((me,ge)=>{ge.value=ge.placeholder!==ge.dataset.name?ge.placeholder:""});const V=ve.find(".sample-request-url");V.val(V.prop("defaultValue"))}const j={"Allowed values:":"Valors permesos:","Compare all with predecessor":"Comparar tot amb versi\xF3 anterior","compare changes to:":"comparar canvis amb:","compared to":"comparat amb","Default value:":"Valor per defecte:",Description:"Descripci\xF3",Field:"Camp",General:"General","Generated with":"Generat amb",Name:"Nom","No response values.":"Sense valors en la resposta.",optional:"opcional",Parameter:"Par\xE0metre","Permission:":"Permisos:",Response:"Resposta",Send:"Enviar","Send a Sample Request":"Enviar una petici\xF3 d'exemple","show up to version:":"mostrar versi\xF3:","Size range:":"Tamany de rang:","Toggle navigation":"Canvia la navegaci\xF3",Type:"Tipus",url:"url",Copy:"Copiar","Press Ctrl+C to copy":"Premeu Ctrl+C per copiar","copied!":"Copiat!"},U={"Allowed values:":"Povolen\xE9 hodnoty:","Compare all with predecessor":"Porovnat v\u0161e s p\u0159edchoz\xEDmi verzemi","compare changes to:":"porovnat zm\u011Bny s:","compared to":"porovnat s","Default value:":"V\xFDchoz\xED hodnota:",Description:"Popis",Field:"Pole",General:"Obecn\xE9","Generated with":"Vygenerov\xE1no pomoc\xED",Name:"N\xE1zev","No response values.":"Nebyly vr\xE1ceny \u017E\xE1dn\xE9 hodnoty.",optional:"voliteln\xE9",Parameter:"Parametr","Permission:":"Opr\xE1vn\u011Bn\xED:",Response:"Odpov\u011B\u010F",Send:"Odeslat","Send a Sample Request":"Odeslat uk\xE1zkov\xFD po\u017Eadavek","show up to version:":"zobrazit po verzi:","Size range:":"Rozsah velikosti:","Toggle navigation":"P\u0159epnout navigaci",Type:"Typ",url:"url",Copy:"Kop\xEDrovat","Press Ctrl+C to copy":"Stisknut\xEDm kombinace kl\xE1ves Ctrl+C zkop\xEDrujte","copied!":"Zkop\xEDrovan\xFD!"},Y={"Allowed values:":"Erlaubte Werte:","Compare all with predecessor":"Vergleiche alle mit ihren Vorg\xE4ngern","compare changes to:":"vergleiche \xC4nderungen mit:","compared to":"verglichen mit","Default value:":"Standardwert:",Description:"Beschreibung",Field:"Feld",General:"Allgemein","Generated with":"Erstellt mit",Name:"Name","No response values.":"Keine R\xFCckgabewerte.",optional:"optional",Parameter:"Parameter","Permission:":"Berechtigung:",Response:"Antwort",Send:"Senden","Send a Sample Request":"Eine Beispielanfrage senden","show up to version:":"zeige bis zur Version:","Size range:":"Gr\xF6\xDFenbereich:","Toggle navigation":"Navigation ein-/ausblenden",Type:"Typ",url:"url",Copy:"Kopieren","Press Ctrl+C to copy":"Dr\xFCcken Sie Ctrl+C zum kopieren","Copied!":"Kopiert!"},x={"Allowed values:":"Valores permitidos:","Compare all with predecessor":"Comparar todo con versi\xF3n anterior","compare changes to:":"comparar cambios con:","compared to":"comparado con","Default value:":"Valor por defecto:",Description:"Descripci\xF3n",Field:"Campo",General:"General","Generated with":"Generado con",Name:"Nombre","No response values.":"Sin valores en la respuesta.",optional:"opcional",Parameter:"Par\xE1metro","Permission:":"Permisos:",Response:"Respuesta",Send:"Enviar","Send a Sample Request":"Enviar una petici\xF3n de ejemplo","show up to version:":"mostrar a versi\xF3n:","Size range:":"Tama\xF1o de rango:","Toggle navigation":"Alternar navegaci\xF3n",Type:"Tipo",url:"url",Copy:"Copiar","Press Ctrl+C to copy":"Presione Ctrl+C para copiar","copied!":"\xA1Copiado!"},F={"Allowed values:":"Valeurs autoris\xE9es :",Body:"Corps","Compare all with predecessor":"Tout comparer avec ...","compare changes to:":"comparer les changements \xE0 :","compared to":"comparer \xE0","Default value:":"Valeur par d\xE9faut :",Description:"Description",Field:"Champ",General:"G\xE9n\xE9ral","Generated with":"G\xE9n\xE9r\xE9 avec",Header:"En-t\xEAte",Headers:"En-t\xEAtes",Name:"Nom","No response values.":"Aucune valeur de r\xE9ponse.","No value":"Aucune valeur",optional:"optionnel",Parameter:"Param\xE8tre",Parameters:"Param\xE8tres","Permission:":"Permission :","Query Parameter(s)":"Param\xE8tre(s) de la requ\xEAte","Query Parameters":"Param\xE8tres de la requ\xEAte","Request Body":"Corps de la requ\xEAte",required:"requis",Response:"R\xE9ponse",Send:"Envoyer","Send a Sample Request":"Envoyer une requ\xEAte repr\xE9sentative","show up to version:":"Montrer \xE0 partir de la version :","Size range:":"Ordre de grandeur :","Toggle navigation":"Basculer la navigation",Type:"Type",url:"url",Copy:"Copier","Press Ctrl+C to copy":"Appuyez sur Ctrl+C pour copier","copied!":"Copi\xE9!"},O={"Allowed values:":"Valori permessi:","Compare all with predecessor":"Confronta tutto con versioni precedenti","compare changes to:":"confronta modifiche con:","compared to":"confrontato con","Default value:":"Valore predefinito:",Description:"Descrizione",Field:"Campo",General:"Generale","Generated with":"Creato con",Name:"Nome","No response values.":"Nessun valore di risposta.",optional:"opzionale",Parameter:"Parametro","Permission:":"Permessi:",Response:"Risposta",Send:"Invia","Send a Sample Request":"Invia una richiesta di esempio","show up to version:":"mostra alla versione:","Size range:":"Intervallo dimensione:","Toggle navigation":"Attiva/disattiva la navigazione",Type:"Tipo",url:"url",Copy:"Copiare","Press Ctrl+C to copy":"Premere CTRL+C per copiare","copied!":"Copiato!"},q={"Allowed values:":"Toegestane waarden:","Compare all with predecessor":"Vergelijk alle met voorgaande versie","compare changes to:":"vergelijk veranderingen met:","compared to":"vergelijk met","Default value:":"Standaard waarde:",Description:"Omschrijving",Field:"Veld",General:"Algemeen","Generated with":"Gegenereerd met",Name:"Naam","No response values.":"Geen response waardes.",optional:"optioneel",Parameter:"Parameter","Permission:":"Permissie:",Response:"Antwoorden",Send:"Sturen","Send a Sample Request":"Stuur een sample aanvragen","show up to version:":"toon tot en met versie:","Size range:":"Maatbereik:","Toggle navigation":"Navigatie in-/uitschakelen",Type:"Type",url:"url",Copy:"Kopi\xEBren","Press Ctrl+C to copy":"Druk op Ctrl+C om te kopi\xEBren","copied!":"Gekopieerd!"},H={"Allowed values:":"Dozwolone warto\u015Bci:","Compare all with predecessor":"Por\xF3wnaj z poprzednimi wersjami","compare changes to:":"por\xF3wnaj zmiany do:","compared to":"por\xF3wnaj do:","Default value:":"Warto\u015B\u0107 domy\u015Blna:",Description:"Opis",Field:"Pole",General:"Generalnie","Generated with":"Wygenerowano z",Name:"Nazwa","No response values.":"Brak odpowiedzi.",optional:"opcjonalny",Parameter:"Parametr","Permission:":"Uprawnienia:",Response:"Odpowied\u017A",Send:"Wy\u015Blij","Send a Sample Request":"Wy\u015Blij przyk\u0142adowe \u017C\u0105danie","show up to version:":"poka\u017C do wersji:","Size range:":"Zakres rozmiaru:","Toggle navigation":"Prze\u0142\u0105cz nawigacj\u0119",Type:"Typ",url:"url",Copy:"Kopiowa\u0107","Press Ctrl+C to copy":"Naci\u015Bnij Ctrl+C, aby skopiowa\u0107","copied!":"Kopiowane!"},Q={"Allowed values:":"Valores permitidos:","Compare all with predecessor":"Compare todos com antecessores","compare changes to:":"comparar altera\xE7\xF5es com:","compared to":"comparado com","Default value:":"Valor padr\xE3o:",Description:"Descri\xE7\xE3o",Field:"Campo",General:"Geral","Generated with":"Gerado com",Name:"Nome","No response values.":"Sem valores de resposta.",optional:"opcional",Parameter:"Par\xE2metro","Permission:":"Permiss\xE3o:",Response:"Resposta",Send:"Enviar","Send a Sample Request":"Enviar um Exemplo de Pedido","show up to version:":"aparecer para a vers\xE3o:","Size range:":"Faixa de tamanho:","Toggle navigation":"Alternar navega\xE7\xE3o",Type:"Tipo",url:"url",Copy:"Copiar","Press Ctrl+C to copy":"Pressione Ctrl+C para copiar","copied!":"Copiado!"},oe={"Allowed values:":"Valori permise:","Compare all with predecessor":"Compar\u0103 toate cu versiunea precedent\u0103","compare changes to:":"compar\u0103 cu versiunea:","compared to":"comparat cu","Default value:":"Valoare implicit\u0103:",Description:"Descriere",Field:"C\xE2mp",General:"General","Generated with":"Generat cu",Name:"Nume","No response values.":"Nici o valoare returnat\u0103.",optional:"op\u021Bional",Parameter:"Parametru","Permission:":"Permisiune:",Response:"R\u0103spuns",Send:"Trimite","Send a Sample Request":"Trimite o cerere de prob\u0103","show up to version:":"arat\u0103 p\xE2n\u0103 la versiunea:","Size range:":"Interval permis:","Toggle navigation":"Comutarea navig\u0103rii",Type:"Tip",url:"url",Copy:"Copie","Press Ctrl+C to copy":"Ap\u0103sa\u021Bi Ctrl+C pentru a copia","copied!":"Copiat!"},fe={"Allowed values:":"\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F:","Compare all with predecessor":"\u0421\u0440\u0430\u0432\u043D\u0438\u0442\u044C \u0441 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0435\u0439","compare changes to:":"\u0441\u0440\u0430\u0432\u043D\u0438\u0442\u044C \u0441:","compared to":"\u0432 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0438 \u0441","Default value:":"\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E:",Description:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",Field:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",General:"\u041E\u0431\u0449\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F","Generated with":"\u0421\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E",Name:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435","No response values.":"\u041D\u0435\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0434\u043B\u044F \u043E\u0442\u0432\u0435\u0442\u0430.",optional:"\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439",Parameter:"\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440","Permission:":"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u043E:",Response:"\u041E\u0442\u0432\u0435\u0442",Send:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C","Send a Sample Request":"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0442\u0435\u0441\u0442\u043E\u0432\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441","show up to version:":"\u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0435\u0440\u0441\u0438\u044E:","Size range:":"\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F:","Toggle navigation":"\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438",Type:"\u0422\u0438\u043F",url:"URL",Copy:"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C","Press Ctrl+C to copy":"\u041D\u0430\u0436\u043C\u0438\u0442\u0435 Ctrl+C, \u0447\u0442\u043E\u0431\u044B \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C","copied!":"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E!"},Z={"Allowed values:":"\u0130zin verilen de\u011Ferler:","Compare all with predecessor":"T\xFCm\xFCn\xFC \xF6ncekiler ile kar\u015F\u0131la\u015Ft\u0131r","compare changes to:":"de\u011Fi\u015Fiklikleri kar\u015F\u0131la\u015Ft\u0131r:","compared to":"kar\u015F\u0131la\u015Ft\u0131r","Default value:":"Varsay\u0131lan de\u011Fer:",Description:"A\xE7\u0131klama",Field:"Alan",General:"Genel","Generated with":"Olu\u015Fturan",Name:"\u0130sim","No response values.":"D\xF6n\xFC\u015F verisi yok.",optional:"opsiyonel",Parameter:"Parametre","Permission:":"\u0130zin:",Response:"D\xF6n\xFC\u015F",Send:"G\xF6nder","Send a Sample Request":"\xD6rnek istek g\xF6nder","show up to version:":"bu versiyona kadar g\xF6ster:","Size range:":"Boyut aral\u0131\u011F\u0131:","Toggle navigation":"Navigasyonu de\u011Fi\u015Ftir",Type:"Tip",url:"url",Copy:"Kopya etmek","Press Ctrl+C to copy":"Kopyalamak i\xE7in Ctrl+C tu\u015Flar\u0131na bas\u0131n","copied!":"Kopya -lanan!"},ye={"Allowed values:":"Gi\xE1 tr\u1ECB ch\u1EA5p nh\u1EADn:","Compare all with predecessor":"So s\xE1nh v\u1EDBi t\u1EA5t c\u1EA3 phi\xEAn b\u1EA3n tr\u01B0\u1EDBc","compare changes to:":"so s\xE1nh s\u1EF1 thay \u0111\u1ED5i v\u1EDBi:","compared to":"so s\xE1nh v\u1EDBi","Default value:":"Gi\xE1 tr\u1ECB m\u1EB7c \u0111\u1ECBnh:",Description:"Ch\xFA th\xEDch",Field:"Tr\u01B0\u1EDDng d\u1EEF li\u1EC7u",General:"T\u1ED5ng quan","Generated with":"\u0110\u01B0\u1EE3c t\u1EA1o b\u1EDFi",Name:"T\xEAn","No response values.":"Kh\xF4ng c\xF3 k\u1EBFt qu\u1EA3 tr\u1EA3 v\u1EC1.",optional:"T\xF9y ch\u1ECDn",Parameter:"Tham s\u1ED1","Permission:":"Quy\u1EC1n h\u1EA1n:",Response:"K\u1EBFt qu\u1EA3",Send:"G\u1EEDi","Send a Sample Request":"G\u1EEDi m\u1ED9t y\xEAu c\u1EA7u m\u1EABu","show up to version:":"hi\u1EC3n th\u1ECB phi\xEAn b\u1EA3n:","Size range:":"K\xEDch c\u1EE1:","Toggle navigation":"Chuy\u1EC3n \u0111\u1ED5i \u0111i\u1EC1u h\u01B0\u1EDBng",Type:"Ki\u1EC3u",url:"li\xEAn k\u1EBFt",Copy:"B\u1EA3n sao","Press Ctrl+C to copy":"Nh\u1EA5n Ctrl+C \u0111\u1EC3 sao ch\xE9p","copied!":"Sao ch\xE9p!"},ke={"Allowed values:":"\u5141\u8BB8\u503C:",Body:"\u8BF7\u6C42\u4F53","Compare all with predecessor":"\u4E0E\u6240\u6709\u4E4B\u524D\u7684\u7248\u672C\u6BD4\u8F83","compare changes to:":"\u5C06\u5F53\u524D\u7248\u672C\u4E0E\u6307\u5B9A\u7248\u672C\u6BD4\u8F83:","compared to":"\u76F8\u6BD4\u4E8E","Default value:":"\u9ED8\u8BA4\u503C:",DEPRECATED:"\u5F03\u7528",Description:"\u63CF\u8FF0","Error 4xx":"\u8BF7\u6C42\u5931\u8D25\uFF084xx\uFF09",Field:"\u5B57\u6BB5","Filter...":"\u7B5B\u9009\u2026",General:"\u6982\u8981","Generated with":"\u6784\u5EFA\u4E8E",Header:"\u8BF7\u6C42\u5934",Headers:"\u8BF7\u6C42\u5934",Name:"\u540D\u79F0","No response values.":"\u65E0\u8FD4\u56DE\u503C.","No value":"\u7A7A\u503C",optional:"\u53EF\u9009",Parameter:"\u53C2\u6570",Parameters:"\u53C2\u6570","Permission:":"\u6743\u9650:","Query Parameter(s)":"\u67E5\u8BE2\u53C2\u6570","Query Parameters":"\u67E5\u8BE2\u53C2\u6570","Request Body":"\u8BF7\u6C42\u6570\u636E",required:"\u5FC5\u9700",Reset:"\u91CD\u7F6E",Response:"\u8FD4\u56DE",Send:"\u53D1\u9001","Send a Sample Request":"\u53D1\u9001\u793A\u4F8B\u8BF7\u6C42","show up to version:":"\u663E\u793A\u6307\u5B9A\u7248\u672C:","Size range:":"\u53D6\u503C\u8303\u56F4:","Success 200":"\u8BF7\u6C42\u6210\u529F\uFF08200\uFF09","Toggle navigation":"\u5207\u63DB\u5C0E\u822A",Type:"\u7C7B\u578B",url:"\u5730\u5740",Copy:"\u590D\u5236\u6587\u672C","Press Ctrl+C to copy":"\u6309Ctrl+C\u590D\u5236","copied!":"\u6587\u672C\u5DF2\u590D\u5236!"},Ne={ca:j,cn:ke,cs:U,de:Y,es:x,en:{},fr:F,it:O,nl:q,pl:H,pt:Q,pt_br:Q,ro:oe,ru:fe,tr:Z,vi:ye,zh:ke,zh_cn:ke},Qe=((na=window.navigator.language)!=null?na:"en-GB").toLowerCase().substr(0,2);let ma=Ne[Qe]?Ne[Qe]:Ne.en;function Na(we){const ue=ma[we];return ue===void 0?we:ue}function va(we){if(!Object.prototype.hasOwnProperty.call(Ne,we))throw new Error(`Invalid value for language setting! Available values are ${Object.keys(Ne).join(",")}`);ma=Ne[we]}const xa=we=>{let ue={};const Ee=(me,ge)=>ge.split(".").reduce((he,Le)=>{if(he){if(he[Le])return he[Le];if(Array.isArray(he)&&he[0]&&he[0][Le])return he[0][Le]}return null},me),ve=(me,ge,he)=>{me?Array.isArray(me)?me.length?me[0][ge]=he:me.push({[ge]:he}):me[ge]=he:ue[ge]=he};we.forEach(me=>{const{parentNode:ge,field:he,type:Le}=me[0],Fe=ge?Ee(ue,ge.path):void 0,Oe=Fe?he.substring(ge.path.length+1):he,ze=Le.indexOf("[]")!==-1;Le.indexOf("Object")!==-1?ve(Fe,Oe,ze?[]:{}):ve(Fe,Oe,ze?[]:me[1])});const V=Object.keys(ue);return V.length===1&&we[0][0].optional&&(ue=ue[V[0]]),Ke(ue)};function Ke(we){return JSON.stringify(we,null,4)}function Aa(we){const ue=[];return we.forEach(Ee=>{let ve;switch(Ee.type.toLowerCase()){case"string":ve=Ee.defaultValue||"";break;case"boolean":ve=Boolean(Ee.defaultValue)||!1;break;case"number":ve=parseInt(Ee.defaultValue||0,10);break;case"date":ve=Ee.defaultValue||new Date().toLocaleDateString(window.navigator.language);break}ue.push([Ee,ve])}),xa(ue)}var Me=aa(4431);class Je extends Me{constructor(ue){super(),this.testMode=ue}diffMain(ue,Ee,ve,V){return super.diff_main(this._stripHtml(ue),this._stripHtml(Ee),ve,V)}diffLineMode(ue,Ee){const ve=this.diff_linesToChars_(ue,Ee),V=ve.chars1,me=ve.chars2,ge=ve.lineArray,he=super.diff_main(V,me,!1);return this.diff_charsToLines_(he,ge),he}diffPrettyHtml(ue){const Ee=[],ve=/&/g,V=/</g,me=/>/g,ge=/\n/g;for(let he=0;he<ue.length;he++){const Le=ue[he][0],Oe=ue[he][1].replace(ve,"&amp;").replace(V,"&lt;").replace(me,"&gt;").replace(ge,"&para;<br>");switch(Le){case Me.DIFF_INSERT:Ee[he]="<ins>"+Oe+"</ins>";break;case Me.DIFF_DELETE:Ee[he]="<del>"+Oe+"</del>";break;case Me.DIFF_EQUAL:Ee[he]="<span>"+Oe+"</span>";break}}return Ee.join("")}diffPrettyCode(ue){const Ee=[],ve=/\n/g;for(let V=0;V<ue.length;V++){const me=ue[V][0],ge=ue[V][1],he=ge.match(ve)?"":`
`;switch(me){case Me.DIFF_INSERT:Ee[V]=ge.replace(/^(.)/gm,"+ $1")+he;break;case Me.DIFF_DELETE:Ee[V]=ge.replace(/^(.)/gm,"- $1")+he;break;case Me.DIFF_EQUAL:Ee[V]=ge.replace(/^(.)/gm,"  $1");break}}return Ee.join("")}diffCleanupSemantic(ue){return this.diff_cleanupSemantic(ue)}_stripHtml(ue){if(this.testMode)return ue;const Ee=document.createElement("div");return Ee.innerHTML=ue,Ee.textContent||Ee.innerText||""}}function Za(){d().registerHelper("markdown",function(V){return V&&(V=V.replace(/((\[(.*?)\])?\(#)((.+?):(.+?))(\))/mg,function(me,ge,he,Le,Fe,Oe,ze){const Xe=Le||Oe+"/"+ze;return'<a href="#api-'+Oe+"-"+ze+'">'+Xe+"</a>"}),V)}),d().registerHelper("setInputType",function(V){switch(V){case"File":case"Email":case"Color":case"Number":case"Date":return V[0].toLowerCase()+V.substring(1);case"Boolean":return"checkbox";default:return"text"}});let we;d().registerHelper("startTimer",function(V){return we=new Date,""}),d().registerHelper("stopTimer",function(V){return console.log(new Date-we),""}),d().registerHelper("__",function(V){return Na(V)}),d().registerHelper("cl",function(V){return console.log(V),""}),d().registerHelper("underscoreToSpace",function(V){return V.replace(/(_+)/g," ")}),d().registerHelper("removeDblQuotes",function(V){return V.replace(/"/g,"")}),d().registerHelper("assign",function(V){if(arguments.length>0){const me=typeof arguments[1];let ge=null;(me==="string"||me==="number"||me==="boolean")&&(ge=arguments[1]),d().registerHelper(V,function(){return ge})}return""}),d().registerHelper("nl2br",function(V){return Ee(V)}),d().registerHelper("ifNotObject",function(V,me){return V&&V.indexOf("Object")!==0?me.fn(this):me.inverse(this)}),d().registerHelper("ifCond",function(V,me,ge,he){switch(me){case"==":return V==ge?he.fn(this):he.inverse(this);case"===":return V===ge?he.fn(this):he.inverse(this);case"!=":return V!=ge?he.fn(this):he.inverse(this);case"!==":return V!==ge?he.fn(this):he.inverse(this);case"<":return V<ge?he.fn(this):he.inverse(this);case"<=":return V<=ge?he.fn(this):he.inverse(this);case">":return V>ge?he.fn(this):he.inverse(this);case">=":return V>=ge?he.fn(this):he.inverse(this);case"&&":return V&&ge?he.fn(this):he.inverse(this);case"||":return V||ge?he.fn(this):he.inverse(this);default:return he.inverse(this)}});const ue={};d().registerHelper("subTemplate",function(V,me){ue[V]||(ue[V]=d().compile(document.getElementById("template-"+V).innerHTML));const ge=ue[V],he=_().extend({},this,me.hash);return new(d()).SafeString(ge(he))}),d().registerHelper("toLowerCase",function(V){return V&&typeof V=="string"?V.toLowerCase():""}),d().registerHelper("dot2bracket",function(V){const{parentNode:me,field:ge,isArray:he}=V;let Le="";if(me){let Fe=V;do{const Oe=Fe.parentNode;Oe.isArray&&(Le=`[]${Le}`),Oe.parentNode?Le=`[${Oe.field.substring(Oe.parentNode.path.length+1)}]${Le}`:Le=Oe.field+Le,Fe=Fe.parentNode}while(Fe.parentNode);Le+=`[${ge.substring(me.path.length+1)}]`}else Le=ge,he&&(Le+="[]");return Le}),d().registerHelper("nestObject",function(V){const{parentNode:me,field:ge}=V;return me?"&nbsp;&nbsp;".repeat(me.path.split(".").length)+ge.substring(me.path.length+1):ge});function Ee(V){return(""+V).replace(/(?:^|<\/pre>)[^]*?(?:<pre>|$)/g,me=>me.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,"$1<br>$2"))}d().registerHelper("each_compare_list_field",function(V,me,ge){const he=ge.hash.field,Le=[];V&&V.forEach(function(Oe){const ze=Oe;ze.key=Oe[he],Le.push(ze)});const Fe=[];return me&&me.forEach(function(Oe){const ze=Oe;ze.key=Oe[he],Fe.push(ze)}),ve("key",Le,Fe,ge)}),d().registerHelper("each_compare_keys",function(V,me,ge){const he=[];V&&Object.keys(V).forEach(function(Oe){const ze={};ze.value=V[Oe],ze.key=Oe,he.push(ze)});const Le=[];return me&&Object.keys(me).forEach(function(Oe){const ze={};ze.value=me[Oe],ze.key=Oe,Le.push(ze)}),ve("key",he,Le,ge)}),d().registerHelper("body2json",function(V,me){return Aa(V)}),d().registerHelper("each_compare_field",function(V,me,ge){return ve("field",V,me,ge)}),d().registerHelper("each_compare_title",function(V,me,ge){return ve("title",V,me,ge)}),d().registerHelper("reformat",function(V,me){if(me==="json")try{return JSON.stringify(JSON.parse(V.trim()),null,"    ")}catch(ge){}return V}),d().registerHelper("showDiff",function(V,me,ge){let he="";if(V===me)he=V;else{if(!V)return me;if(!me)return V;const Le=new Je;if(ge==="code"){const Fe=Le.diffLineMode(me,V);he=Le.diffPrettyCode(Fe)}else{const Fe=Le.diffMain(me,V);Le.diffCleanupSemantic(Fe),he=Le.diffPrettyHtml(Fe),he=he.replace(/&para;/gm,""),ge==="nl2br"&&(he=Ee(he))}}return he});function ve(V,me,ge,he){const Le=[];let Fe=0;me&&me.forEach(function(Xe){let sa=!1;if(ge&&ge.forEach(function(fa){if(Xe[V]===fa[V]){const Fa={typeSame:!0,source:Xe,compare:fa,index:Fe};Le.push(Fa),sa=!0,Fe++}}),!sa){const fa={typeIns:!0,source:Xe,index:Fe};Le.push(fa),Fe++}}),ge&&ge.forEach(function(Xe){let sa=!1;if(me&&me.forEach(function(fa){fa[V]===Xe[V]&&(sa=!0)}),!sa){const fa={typeDel:!0,compare:Xe,index:Fe};Le.push(fa),Fe++}});let Oe="";const ze=Le.length;for(const Xe in Le)parseInt(Xe,10)===ze-1&&(Le[Xe]._last=!0),Oe=Oe+he.fn(Le[Xe]);return Oe}}document.addEventListener("DOMContentLoaded",()=>{mn(),E(),m().highlightAll()});function mn(){var Ue;let we=[{type:"get",url:"/inqueryCertificate/{id_permohonan_izin}",title:"Inquiry Certificate",version:"5.0.0",description:"<p>Inquery Certificate di Sistem OSS</p>",name:"inqueryCertificate",group:"Certificate",examples:[{title:"Curl Request Example:",content:`curl --location --request GET 'https://server.digitaltelkom.dev/oss-sandbox/inqueryCertificate/I-202112171709158243106' \\
--header 'user_key: sJS23n1usBDj23192312312i3nsSo2sn' \\
--header 'Cookie: 8dd21093c6d03524cf9bc1ea99ad0576=9fe0048f4a04f91724dbe52f7c2cb5b7; 37dda41a6b8fc67de27a64fec9698b47=2354519a64edc01027a66707592dc003'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",isArray:!1,description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"user_key",isArray:!1,description:"<p>Users unique access-key.</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "user_key": "846ee507525c6b00d18733e066bd5686"
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"object",optional:!1,field:"responInqueryCertificate",isArray:!1,description:"<p>responInqueryCertificate</p>"},{group:"200",type:"string",optional:!1,field:"responInqueryCertificate.kode",isArray:!1,description:"<p>kode</p>"},{group:"200",type:"string",optional:!1,field:"responInqueryCertificate.keterangan",isArray:!1,description:"<p>keterangan</p>"},{group:"200",type:"string",optional:!1,field:"responInqueryCertificate.dataCertificate",isArray:!1,description:"<p>dataCertificate</p>"},{group:"200",type:"string",optional:!1,field:"responInqueryCertificate.dataCertificate.id_sertifikat",isArray:!1,description:"<p>id_sertifikat</p>"},{group:"200",type:"string",optional:!1,field:"responInqueryCertificate.dataCertificate.id_permohonan_izin",isArray:!1,description:"<p>id_permohonan_izin</p>"},{group:"200",type:"string",optional:!1,field:"responInqueryCertificate.dataCertificate.nomor_sertifikat",isArray:!1,description:"<p>nomor_sertifikat</p>"},{group:"200",type:"string",optional:!1,field:"responInqueryCertificate.dataCertificate.tanggal_terbit",isArray:!1,description:"<p>tanggal_terbit</p>"},{group:"200",type:"string",optional:!1,field:"responInqueryCertificate.dataCertificate.masa_berlaku",isArray:!1,description:"<p>masa_berlaku</p>"},{group:"200",type:"string",optional:!1,field:"responInqueryCertificate.dataCertificate.jenis_sertifikat",isArray:!1,description:"<p>jenis_sertifikat</p>"},{group:"200",type:"string",optional:!1,field:"responInqueryCertificate.dataCertificate.url_sertifikat",isArray:!1,description:"<p>url_sertifikat</p>"},{group:"200",type:"string",optional:!1,field:"responInqueryCertificate.dataCertificate.keterangan",isArray:!1,description:"<p>keterangan</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
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
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",isArray:!1,description:"<p>Data tidak ditemukan.</p>"}],404:[{group:"404",optional:!1,field:"404",isArray:!1,description:"<p>Method Tidak Ditemukan.</p>"}]},examples:[{title:"Error-Response:",content:`{
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
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",isArray:!1,description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"user_key",isArray:!1,description:"<p>Users unique access-key.</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "user_key": "846ee507525c6b00d18733e066bd5686"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"receiveCertificate",isArray:!1,description:"<p>receiveCertificate</p>"},{group:"Parameter",type:"string",optional:!1,field:"receiveCertificate.id_permohonan_izin",isArray:!1,description:"<p>id_permohonan_izin</p>"},{group:"Parameter",type:"string",optional:!1,field:"receiveCertificate.nomor_sertifikat",isArray:!1,description:"<p>nomor_sertifikat</p>"},{group:"Parameter",type:"string",optional:!1,field:"receiveCertificate.url_sertifikat",isArray:!1,description:"<p>url_sertifikat</p>"},{group:"Parameter",type:"string",optional:!1,field:"receiveCertificate.tanggal_terbit",isArray:!1,description:"<p>tanggal_terbit</p>"},{group:"Parameter",type:"string",optional:!1,field:"receiveCertificate.masa_berlaku",isArray:!1,description:"<p>masa_berlaku</p>"},{group:"Parameter",type:"string",optional:!1,field:"receiveCertificate.jenis_sertifikat",isArray:!1,description:"<p>jenis_sertifikat</p>"},{group:"Parameter",type:"string",optional:!1,field:"receiveCertificate.satuan_waktu",isArray:!1,description:"<p>satuan_waktu</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
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
 }`,type:"json"}]},success:{fields:{200:[{group:"200",type:"object",optional:!1,field:"responReceiveCertificate",isArray:!1,description:"<p>responReceiveCertificate</p>"},{group:"200",type:"string",optional:!1,field:"responReceiveCertificate.kode",isArray:!1,description:"<p>kode</p>"},{group:"200",type:"string",optional:!1,field:"responReceiveCertificate.keterangan",isArray:!1,description:"<p>keterangan</p>"},{group:"200",type:"string",optional:!1,field:"responReceiveCertificate.dataCertificate",isArray:!1,description:"<p>dataCertificate</p>"},{group:"200",type:"string",optional:!1,field:"responReceiveCertificate.dataCertificate.id_permohonan_izin",isArray:!1,description:"<p>id_permohonan_izin</p>"},{group:"200",type:"string",optional:!1,field:"responReceiveCertificate.dataCertificate.nomor_sertifikat",isArray:!1,description:"<p>nomor_sertifikat</p>"},{group:"200",type:"string",optional:!1,field:"responReceiveCertificate.dataCertificate.tanggal_terbit",isArray:!1,description:"<p>tanggal_terbit</p>"},{group:"200",type:"string",optional:!1,field:"responReceiveCertificate.dataCertificate.masa_berlaku",isArray:!1,description:"<p>masa_berlaku</p>"},{group:"200",type:"string",optional:!1,field:"responReceiveCertificate.dataCertificate.satuan_waktu",isArray:!1,description:"<p>satuan_waktu</p>"},{group:"200",type:"string",optional:!1,field:"responReceiveCertificate.dataCertificate.jenis_sertifikat",isArray:!1,description:"<p>jenis_sertifikat</p>"},{group:"200",type:"string",optional:!1,field:"responReceiveCertificate.dataCertificate.url_sertifikat",isArray:!1,description:"<p>url_sertifikat</p>"},{group:"200",type:"string",optional:!1,field:"responReceiveCertificate.dataCertificate.id_sertifikat",isArray:!1,description:"<p>id_sertifikat</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
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
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",isArray:!1,description:"<p>Parameter tidak ditemukan.</p>"}],404:[{group:"404",optional:!1,field:"404",isArray:!1,description:"<p>Method Tidak Ditemukan.</p>"}],500:[{group:"500",optional:!1,field:"500",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}]},examples:[{title:"Error-Response:",content:`{
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
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",isArray:!1,description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"user_key",isArray:!1,description:"<p>Users unique access-key.</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "user_key": "846ee507525c6b00d18733e066bd5686"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"INQUERYFILEDS",isArray:!1,description:"<p>INQUERYFILEDS</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"INQUERYFILEDS.id_permohonan_izin",isArray:!1,description:"<p>Merupakan ID pengajuan, yaitu permohonan perizinan yang digenerate oleh sistem OSS</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
{
	 "INQUERYFILEDS": {
		 "id_permohonan_izin": ""
	 }
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"Object",optional:!1,field:"responInqueryFileDS",isArray:!1,description:"<p>Response Inquery File DS</p>"},{group:"200",type:"String(5)",optional:!1,parentNode:{path:"responInqueryFileDS",field:"responInqueryFileDS",type:"Object",isArray:!1},field:"responInqueryFileDS.status",isArray:!1,description:"<p>Status Respon</p>"},{group:"200",type:"String(255)",optional:!1,parentNode:{path:"responInqueryFileDS",field:"responInqueryFileDS",type:"Object",isArray:!1},field:"responInqueryFileDS.keterangan",isArray:!1,description:"<p>Keterangan Respon</p>"},{group:"200",type:"String(255)",optional:!1,parentNode:{path:"responInqueryFileDS",field:"responInqueryFileDS",type:"Object",isArray:!1},field:"responInqueryFileDS.url_file_ds",isArray:!1,description:"<p>Url file hasil merge dokumen Izin, Sertifikat Standar, atau PB-UMKU</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
{
	 "responInqueryFileDS": {
		 "status": "200",
		 "keterangan": "sukses",
		 "url_file_ds": "https://server-oss-go-id/dev/v1//file/download/U202107081515591165814"
	 }
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",isArray:!1,description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",isArray:!1,description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",isArray:!1,description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",isArray:!1,description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",isArray:!1,description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
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
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",isArray:!1,description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"Token",isArray:!1,description:"<p>SHA1(USERNAME+PASSWORD+NPWP+DATE(Ymd))</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "Token": "OSS000qw13242628gssssss812345654709820180514"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"receiveFileDS",isArray:!1,description:"<p>AKTA</p>"},{group:"Parameter",type:"string(3)",optional:!1,field:"receiveFileDS.id_izin",isArray:!1,description:"<p>ID izin</p>"},{group:"Parameter",type:"string(13)",optional:!1,field:"receiveFileDS.nib",isArray:!1,description:"<p>Nomor Induk Berusaha</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"receiveFileDS.file_izin",isArray:!1,description:"<p>URL File Izin</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
{
	 "receiveFileDS": {
		 "id_izin": "",
		 "nib": "",
		 "file_izin": ""
	 }
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"Object",optional:!1,field:"responreceiveFileDS",isArray:!1,description:"<p>Response receive File DS</p>"},{group:"200",type:"String(1)",optional:!1,parentNode:{path:"responreceiveFileDS",field:"responreceiveFileDS",type:"Object",isArray:!1},field:"responreceiveFileDS.status",isArray:!1,description:"<p>Kode status (1: TRUE; 2: FALSE)</p>"},{group:"200",type:"String(255)",optional:!1,parentNode:{path:"responreceiveFileDS",field:"responreceiveFileDS",type:"Object",isArray:!1},field:"responreceiveFileDS.keterangan",isArray:!1,description:"<p>Keterangan Respon</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
{
	 "responreceiveFileDS": {
		 "status": "",
		 "keterangan": ""
	 }
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",isArray:!1,description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",isArray:!1,description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",isArray:!1,description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",isArray:!1,description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",isArray:!1,description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
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
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",isArray:!1,description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"user_key",isArray:!1,description:"<p>Users unique access-key.</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "user_key": "846ee507525c6b00d18733e066bd5686"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"AKTA",isArray:!1,description:"<p>AKTA</p>"},{group:"Parameter",type:"string(11)",optional:!1,field:"AKTA.id_perusahaan",isArray:!1,description:"<p>ID Perusahaan Dari Sistem AHU</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"AKTA.jangka_waktu",isArray:!1,description:"<p>Jangka Waktu (format date : YYYY-MM- DD)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"AKTA.status_badan_hukum",isArray:!1,description:"<p>Status Badan Hukum (* Lihat Lampiran 12)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"AKTA.status_penanaman_modal",isArray:!1,description:"<p>Status Penanaman Modal (* Lihat Lampiran 1)</p>"},{group:"Parameter",type:"string(15)",optional:!1,field:"AKTA.npwp_perseroan",isArray:!1,description:"<p>NPWP Perseroan</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"AKTA.nama_perseroan",isArray:!1,description:"<p>Nama Perseroan</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"AKTA.nama_singkatan",isArray:!1,description:"<p>Nama Singkatan Perseroan</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"AKTA.jenis_perseroan",isArray:!1,description:"<p>Jenis Perseroan (* Lihat Lampiran 2)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"AKTA.status_perseroan",isArray:!1,description:"<p>Jenis Perusahaan Terbuka atau Tertutup</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"AKTA.alamat_perseroan",isArray:!1,description:"<p>alamat_perseroan</p>"},{group:"Parameter",type:"string(7)",optional:!1,field:"AKTA.rt_rw_perseroan",isArray:!1,description:"<p>rt_rw_perseroan</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"AKTA.kelurahan_perseroan",isArray:!1,description:"<p>kelurahan_perseroan</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"AKTA.perseroan_daerah_id",isArray:!1,description:"<p>ID Daerah Perseroan (* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(5)",optional:!1,field:"AKTA.kode_pos_perseroan",isArray:!1,description:"<p>kode_pos_perseroan</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"AKTA.nomor_telpon_perseroan",isArray:!1,description:"<p>nomor_telpon_perseroan</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"AKTA.email_perusahaan",isArray:!1,description:"<p>email_perusahaan</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"AKTA.dalam_bentuk_uang",isArray:!1,description:"<p>Modal Dalam Bentuk Uang (Valuta : IDR)</p>"},{group:"Parameter",type:"string(50000)",optional:!1,field:"AKTA.dalam_bentuk_lain",isArray:!1,description:"<p>Modal Dalam Bentuk Lainnya</p>"},{group:"Parameter",type:"number(20)",optional:!1,field:"AKTA.total_modal_dasar",isArray:!1,description:"<p>Total Modal Dasar (Valuta : IDR)</p>"},{group:"Parameter",type:"number(20)",optional:!1,field:"AKTA.total_modal_ditempatkan",isArray:!1,description:"<p>Total Modal Ditempatkan (Valuta : IDR)</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"AKTA.data_kbli",isArray:!0,description:"<p>data_kbli</p>"},{group:"Parameter",type:"string(1024)",optional:!1,field:"AKTA.data_kbli.kbli",isArray:!1,description:"<p>Maksud &amp; Tujuan KBLI</p>"},{group:"Parameter",type:"string(1024)",optional:!1,field:"AKTA.data_kbli.uraian_usaha",isArray:!1,description:"<p>uraian_usaha</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"AKTA.pemegang_saham",isArray:!0,description:"<p>Detail pemegang saham</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"AKTA.pemegang_saham.jenis_pemegang_saham",isArray:!1,description:"<p>Jenis Pemegang Saham (* Lihat Lampiran 13)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"AKTA.pemegang_saham.flag_asing",isArray:!1,description:"<p>Asal Pemegang Saham dari Dalam Negeri/Luar Negeri (Value : Y = asing; N = Bukan Asing)</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"AKTA.pemegang_saham.klasifikasi_saham_pemegang",isArray:!1,description:"<p>klasifikasi_saham_pemegang</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"AKTA.pemegang_saham.jum_lbr_saham_pemegang",isArray:!1,description:"<p>jum_lbr_saham_pemegang</p>"},{group:"Parameter",type:"number(20)",optional:!1,field:"AKTA.pemegang_saham.total_modal_pemegang",isArray:!1,description:"<p>Total Modal Pemegang Saham (Valuta : IDR)</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"AKTA.pemegang_saham.jabatan_pemegang_saham",isArray:!1,description:"<p>jabatan_pemegang_saham</p>"},{group:"Parameter",type:"string(500)",optional:!1,field:"AKTA.pemegang_saham.nama_pemegang_saham",isArray:!1,description:"<p>nama_pemegang_saham</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"AKTA.pemegang_saham.jns_identitas_pemegang_saham",isArray:!1,description:"<p>Jenis Identitas Pemegang Saham (* Lihat Lampiran 4)</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"AKTA.pemegang_saham.no_identitas_pemegang_saham",isArray:!1,description:"<p>no_identitas_pemegang_saham</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"AKTA.pemegang_saham.valid_identitas_pemegang_saham",isArray:!1,description:"<p>Valid / Masa Berlaku Pemegang Saham(Format Date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"AKTA.pemegang_saham.pengendali_pemegang_saham",isArray:!1,description:"<p>Nama Pengendali Pemegang Saham</p>"},{group:"Parameter",type:"string(15)",optional:!1,field:"AKTA.pemegang_saham.npwp_pemegang_saham",isArray:!1,description:"<p>npwp_pemegang_saham</p>"},{group:"Parameter",type:"string(1024)",optional:!1,field:"AKTA.pemegang_saham.alamat_pemegang_saham",isArray:!1,description:"<p>alamat_pemegang_saham</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"AKTA.pemegang_saham.fax_pemegang_saham",isArray:!1,description:"<p>fax_pemegang_saham</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"AKTA.pemegang_saham.email_pemegang_saham",isArray:!1,description:"<p>email_pemegang_saham</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"AKTA.penanggung_jwb",isArray:!0,description:"<p>Detail penanggung jawab</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"AKTA.penanggung_jwb.flag_asing",isArray:!1,description:"<p>Asal Penanggung Jawab dari Dalam Negeri / Luar Negeri (Value : Y = asing; N = Bukan Asing)</p>"},{group:"Parameter",type:"string(500)",optional:!1,field:"AKTA.penanggung_jwb.nama_penanggung_jwb",isArray:!1,description:"<p>nama_penanggung_jwb</p>"},{group:"Parameter",type:"string(250)",optional:!1,field:"AKTA.penanggung_jwb.jabatan_penanggung_jwb",isArray:!1,description:"<p>jabatan_penanggung_jwb</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"AKTA.penanggung_jwb.kebangsaan_penanggung_jwb",isArray:!1,description:"<p>Kebangsaan Penanggung Jawab (* Lihat Lampiran 6)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"AKTA.penanggung_jwb.jenis_identitas_penanggung_jwb",isArray:!1,description:"<p>Jenis Identitas Penganggung Jawab (* Lihat Lampiran 4)</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"AKTA.penanggung_jwb.no_identitas_penanggung_jwb",isArray:!1,description:"<p>Nomor Identitas Penanggung Jawab</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"AKTA.penanggung_jwb.negara_asal_penanggung_jwb",isArray:!1,description:"<p>Negara Asal Penanggung Jawab (* Sumber Kodefikasi Negara Mengikuti Standar Unedifact : http://www.unece.org/cefact/locode/se rvice/location )</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"AKTA.penanggung_jwb.no_paspor_penanggung_jwb",isArray:!1,description:"<p>no_paspor_penanggung_jwb</p>"},{group:"Parameter",type:"string(15)",optional:!1,field:"AKTA.penanggung_jwb.npwp_penanggung_jwb",isArray:!1,description:"<p>npwp_penanggung_jwb</p>"},{group:"Parameter",type:"string(1024)",optional:!1,field:"AKTA.penanggung_jwb.alamat_penanggung_jwb",isArray:!1,description:"<p>alamat_penanggung_jwb</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"AKTA.penanggung_jwb.jalan_penanggung_jwb",isArray:!1,description:"<p>jalan_penanggung_jwb</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"AKTA.penanggung_jwb.blok_penanggung_jwb",isArray:!1,description:"<p>blok_penanggung_jwb</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"AKTA.penanggung_jwb.no_penanggung_jwb",isArray:!1,description:"<p>no_penanggung_jwb</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"AKTA.penanggung_jwb.rt_rw_penanggung_jwb",isArray:!1,description:"<p>rt_rw_penanggung_jwb</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"AKTA.penanggung_jwb.kelurahan_penanggung_jwb",isArray:!1,description:"<p>kelurahan_penanggung_jwb</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"AKTA.penanggung_jwb.daerah_id_penanggung_jwb",isArray:!1,description:"<p>ID Daerah Penanggung Jawab (* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(5)",optional:!1,field:"AKTA.penanggung_jwb.kode_pos_penanggung_jwb",isArray:!1,description:"<p>kode_pos_penanggung_jwb</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"AKTA.penanggung_jwb.no_telp_penanggung_jwb",isArray:!1,description:"<p>no_telp_penanggung_jwb</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"AKTA.penanggung_jwb.no_hp_penanggung_jwb",isArray:!1,description:"<p>no_hp_penanggung_jwb</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"AKTA.penanggung_jwb.no_fax_penanggung_jwb",isArray:!1,description:"<p>no_fax_penanggung_jwb</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"AKTA.penanggung_jwb.email_penanggung_jwb",isArray:!1,description:"<p>email_penanggung_jwb</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"AKTA.no_pengesahan",isArray:!1,description:"<p>Nomor Pengesahan Akta Dari Kumham</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"AKTA.tgl_pengesahan",isArray:!1,description:"<p>Tanggal Pengesahan Akta Dari Kumham(format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"AKTA.no_akta_lama",isArray:!1,description:"<p>Nomor Akta Lama Sebelum Perubahan</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"AKTA.tgl_akta_lama",isArray:!1,description:"<p>Tanggal Akta Lama Sebelum Perubahan(format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"AKTA.no_pengesahan_lama",isArray:!1,description:"<p>Nomor Pengesahan Akta Lama Sebelum Perubahan Dari Kumham</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"AKTA.tgl_pengesahan_lama",isArray:!1,description:"<p>Tanggal Pengesahan Akta Lama Sebelum Perubahan Dari Kumham (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"AKTA.legalitas",isArray:!0,description:"<p>Data legalitas</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"AKTA.legalitas.jenis_akta",isArray:!1,description:"<p>Jenis Akta Perusahaan (* Lihat Lampiran 7)</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"AKTA.legalitas.no_akta",isArray:!1,description:"<p>Nomor Akta Perusahaan</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"AKTA.legalitas.tgl_akta",isArray:!1,description:"<p>Tanggal Akta Perusahaan (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"AKTA.legalitas.alamat_notaris",isArray:!1,description:"<p>alamat_notaris</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"AKTA.legalitas.nama_notaris",isArray:!1,description:"<p>nama_notaris</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"AKTA.legalitas.telepon_notaris",isArray:!1,description:"<p>telepon_notaris</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"Object",optional:!1,field:"responreceiveLegal",isArray:!1,description:"<p>Response receive legal</p>"},{group:"200",type:"String(3)",optional:!1,parentNode:{path:"responreceiveLegal",field:"responreceiveLegal",type:"Object",isArray:!1},field:"responreceiveLegal.kode",isArray:!1,description:"<p>Kode Respon (*Lihat Lampiran 9)</p>"},{group:"200",type:"String(255)",optional:!1,parentNode:{path:"responreceiveLegal",field:"responreceiveLegal",type:"Object",isArray:!1},field:"responreceiveLegal.keterangan",isArray:!1,description:"<p>Keterangan Respon</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
{
	 "responreceiveLegal": {
		 "kode": "",
		 "keterangan": ""
	 }
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",isArray:!1,description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",isArray:!1,description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",isArray:!1,description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",isArray:!1,description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",isArray:!1,description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
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
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",isArray:!1,description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"user_key",isArray:!1,description:"<p>Users unique access-key.</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "user_key": "846ee507525c6b00d18733e066bd5686"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"IZINSTATUS",isArray:!1,description:"<p>IZINSTATUS</p>"},{group:"Parameter",type:"string(13)",optional:!1,field:"IZINSTATUS.nib",isArray:!1,description:"<p>Nomor Induk Berusaha</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"IZINSTATUS.id_produk",isArray:!1,description:"<p>id produk</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"IZINSTATUS.id_proyek",isArray:!1,description:"<p>id proyek</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"IZINSTATUS.oss_id",isArray:!1,description:"<p>Oss Id adalah ID yang di Generate Sistem OSS dan Dikirimkan ke K/L/D Bersama Pengajuan Perizinan</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"IZINSTATUS.id_izin",isArray:!1,description:"<p>Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin</p>"},{group:"Parameter",type:"string(12)",optional:!1,field:"IZINSTATUS.kd_izin",isArray:!1,description:"<p>Kode Izin Sistem K/L/D (* Lihat Lampiran 8)</p>"},{group:"Parameter",type:"string(3)",optional:!1,field:"IZINSTATUS.kd_instansi",isArray:!1,description:"<p>Kode Instansi</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"IZINSTATUS.kd_status",isArray:!1,description:"<p>Kode Status Perizinan (* Lihat Lampiran 10)</p>"},{group:"Parameter",type:"string(18)",optional:!1,field:"IZINSTATUS.tgl_status",isArray:!1,description:"<p>Tanggal Proses Status Izin (format date: YYYY-MM-DD HH:II:SS)</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"IZINSTATUS.nip_status",isArray:!1,description:"<p>Nip Status Izin</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"IZINSTATUS.nama_status",isArray:!1,description:"<p>Nama Status Izin</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"IZINSTATUS.keterangan",isArray:!1,description:"<p>keterangan</p>"},{group:"Parameter",type:"object",optional:!1,field:"IZINSTATUS.data_pnbp",isArray:!1,description:"<p>data_pnbp</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"IZINSTATUS.data_pnbp.kd_akun",isArray:!1,description:"<p>Kode Akun simponi</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"IZINSTATUS.data_pnbp.kd_penerimaan",isArray:!1,description:"<p>Kode Penerimaan</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"IZINSTATUS.data_pnbp.kd_billing",isArray:!1,description:"<p>Kode Billing</p>"},{group:"Parameter",type:"Date(10)",optional:!1,field:"IZINSTATUS.data_pnbp.tgl_billing",isArray:!1,description:"<p>Tgl terbit billing</p>"},{group:"Parameter",type:"Date(10)",optional:!1,field:"IZINSTATUS.data_pnbp.tgl_expire",isArray:!1,description:"<p>Tgl berlaku billing</p>"},{group:"Parameter",type:"number(20.0)",optional:!1,field:"IZINSTATUS.data_pnbp.nominal",isArray:!1,description:"<p>Nominal PNBP</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"IZINSTATUS.data_pnbp.url_dokumen",isArray:!1,description:"<p>URL Dokumen SPS</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"Object",optional:!1,field:"responreceiveLicenseStatus",isArray:!1,description:"<p>Response receive License Status</p>"},{group:"200",type:"String(3)",optional:!1,parentNode:{path:"responreceiveLicenseStatus",field:"responreceiveLicenseStatus",type:"Object",isArray:!1},field:"responreceiveLicenseStatus.kode",isArray:!1,description:"<p>Kode Respon</p>"},{group:"200",type:"String(255)",optional:!1,parentNode:{path:"responreceiveLicenseStatus",field:"responreceiveLicenseStatus",type:"Object",isArray:!1},field:"responreceiveLicenseStatus.keterangan",isArray:!1,description:"<p>Keterangan Respon</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
{
	 "responreceiveLicenseStatus": {
		 "kode": "",
		 "keterangan": ""
	 }
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",isArray:!1,description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",isArray:!1,description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",isArray:!1,description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",isArray:!1,description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",isArray:!1,description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
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
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",isArray:!1,description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"user_key",isArray:!1,description:"<p>Users unique access-key.</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "user_key": "846ee507525c6b00d18733e066bd5686"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"IZINSTATUS",isArray:!1,description:"<p>IZINSTATUS</p>"},{group:"Parameter",type:"string(13)",optional:!1,field:"IZINSTATUS.id_izin",isArray:!1,description:"<p>id_izin</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
{
  "IZINSTATUS": {
    "id_izin": ""
  }
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"object",optional:!1,field:"responreceiveLicenseStatus",isArray:!1,description:"<p>responreceiveLicenseStatus</p>"},{group:"200",type:"string(3)",optional:!1,parentNode:{path:"responreceiveLicenseStatus",field:"responreceiveLicenseStatus",type:"Object",isArray:!1},field:"responreceiveLicenseStatus.kode",isArray:!1,description:"<p>Kode Respon (*Lihat Lampiran 9)</p>"},{group:"200",type:"string(255)",optional:!1,parentNode:{path:"responreceiveLicenseStatus",field:"responreceiveLicenseStatus",type:"Object",isArray:!1},field:"responreceiveLicenseStatus.keterangan",isArray:!1,description:"<p>Keterangan Respon</p>"},{group:"200",type:"object",optional:!1,parentNode:{path:"responreceiveLicenseStatus",field:"responreceiveLicenseStatus",type:"Object",isArray:!1},field:"responreceiveLicenseStatus.dataIZIN",isArray:!1,description:"<p>dataIZIN</p>"},{group:"200",type:"string(13)",optional:!1,parentNode:{path:"responreceiveLicenseStatus",field:"responreceiveLicenseStatus",type:"Object",isArray:!1},field:"responreceiveLicenseStatus.dataIZIN.nib",isArray:!1,description:"<p>Nomor Induk Berusaha</p>"},{group:"200",type:"string(25)",optional:!1,parentNode:{path:"responreceiveLicenseStatus",field:"responreceiveLicenseStatus",type:"Object",isArray:!1},field:"responreceiveLicenseStatus.dataIZIN.id_proyek",isArray:!1,description:"<p>ID proyek</p>"},{group:"200",type:"string(25)",optional:!1,parentNode:{path:"responreceiveLicenseStatus",field:"responreceiveLicenseStatus",type:"Object",isArray:!1},field:"responreceiveLicenseStatus.dataIZIN.id_izin",isArray:!1,description:"<p>Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin</p>"},{group:"200",type:"string(2)",optional:!1,parentNode:{path:"responreceiveLicenseStatus",field:"responreceiveLicenseStatus",type:"Object",isArray:!1},field:"responreceiveLicenseStatus.dataIZIN.kd_status",isArray:!1,description:"<p>Kode Status Perizinan (* Lihat Lampiran 10)</p>"},{group:"200",type:"string(255)",optional:!1,parentNode:{path:"responreceiveLicenseStatus",field:"responreceiveLicenseStatus",type:"Object",isArray:!1},field:"responreceiveLicenseStatus.dataIZIN.uraian_status",isArray:!1,description:"<p>Uraian status</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
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
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",isArray:!1,description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",isArray:!1,description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",isArray:!1,description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",isArray:!1,description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",isArray:!1,description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
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
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",isArray:!1,description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"user_key",isArray:!1,description:"<p>Users unique access-key.</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "user_key": "846ee507525c6b00d18733e066bd5686"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"IZINFINAL",isArray:!1,description:"<p>IZINFINAL</p>"},{group:"Parameter",type:"string(13)",optional:!1,field:"IZINFINAL.nib",isArray:!1,description:"<p>Nomor Induk Berusaha</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"IZINFINAL.id_produk",isArray:!1,description:"<p>Id produk</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"IZINFINAL.id_proyek",isArray:!1,description:"<p>Id Proyek</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"IZINFINAL.oss_id",isArray:!1,description:"<p>Oss Id adalah ID yang di Generate Sistem OSS dan Dikirimkan ke K/L/D Bersama Permohonan Nomor Induk Berusaha</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"IZINFINAL.id_izin",isArray:!1,description:"<p>Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin</p>"},{group:"Parameter",type:"string(12)",optional:!1,field:"IZINFINAL.kd_izin",isArray:!1,description:"<p>Kode Izin Sistem K/L/D (* Lihat Lampiran 8)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"IZINFINAL.kd_daerah",isArray:!1,description:"<p>Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"IZINFINAL.kewenangan",isArray:!1,description:"<p>Kewenangan (00: Kewenangan Pusat; 01: Kewenangan Provinsi; 02: Kewenangan Kab/Kota)</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"IZINFINAL.nomor_izin",isArray:!1,description:"<p>Nomor Izin Final</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"IZINFINAL.tgl_terbit_izin",isArray:!1,description:"<p>Tanggal Izin Final (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"IZINFINAL.tgl_berlaku_izin",isArray:!1,description:"<p>Tanggal Berlaku Izin Final (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"IZINFINAL.nama_ttd",isArray:!1,description:"<p>Nama Penandatangan Izin</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"IZINFINAL.nip_ttd",isArray:!1,description:"<p>Nip Penandatangan Izin</p>"},{group:"Parameter",type:"string(150)",optional:!1,field:"IZINFINAL.jabatan_ttd",isArray:!1,description:"<p>Jabatan Penandatangan Izin</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"IZINFINAL.status_izin",isArray:!1,description:"<p>Status Izin di Sistem OSS (* Lihat Lampiran 10)</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"IZINFINAL.file_izin",isArray:!1,description:"<p>Attachment File Izin dalam Bentuk File PDF Berupa Link (* Ukuran File Maks: 2MB)</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"IZINFINAL.keterangan",isArray:!1,description:"<p>Keterangan Status Izin</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"IZINFINAL.file_lampiran",isArray:!1,description:"<p>Attachment File Izin dalam Bentuk File PDF Berupa Link (* Ukuran File Maks: 2MB)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"IZINFINAL.nomenklatur_nomor_izin",isArray:!1,description:"<p>Nomenklatur nomor izin</p>"},{group:"Parameter",type:"number(5)",optional:!1,field:"IZINFINAL.bln_berlaku_izin",isArray:!1,description:"<p>angka waktu berlaku izin dalam bulan</p>"},{group:"Parameter",type:"number(5)",optional:!1,field:"IZINFINAL.thn_berlaku_izin",isArray:!1,description:"<p>angka waktu berlaku izin dalam tahun</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"IZINFINAL.data_pnbp",isArray:!0,description:"<p>data_pnbp</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"IZINFINAL.data_pnbp.kd_akun",isArray:!1,description:"<p>Kode Akun PNBP dari Simponi Kemenkeu</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"IZINFINAL.data_pnbp.kd_penerimaan",isArray:!1,description:"<p>Kode Jenis Penerimaan dari Simponi Kemenkeu</p>"},{group:"Parameter",type:"number(20)",optional:!1,field:"IZINFINAL.data_pnbp.nominal",isArray:!1,description:"<p>Jumlah Nilai PNBP (Default Valuta : IDR)</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"Object",optional:!1,field:"responreceiveLicense",isArray:!1,description:"<p>Response receive license</p>"},{group:"200",type:"String(3)",optional:!1,parentNode:{path:"responreceiveLicense",field:"responreceiveLicense",type:"Object",isArray:!1},field:"responreceiveLicense.kode",isArray:!1,description:"<p>Kode Respon</p>"},{group:"200",type:"String(255)",optional:!1,parentNode:{path:"responreceiveLicense",field:"responreceiveLicense",type:"Object",isArray:!1},field:"responreceiveLicense.keterangan",isArray:!1,description:"<p>Keterangan Respon</p>"},{group:"200",type:"String(20)",optional:!1,parentNode:{path:"responreceiveLicense",field:"responreceiveLicense",type:"Object",isArray:!1},field:"responreceiveLicense.nomor_izin",isArray:!1,description:"<p>Nomor Izin yang diterbitkan OSS</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
{
	 "responreceiveLicense": {
		 "kode": "",
		 "keterangan": "",
         "nomor_izin": ""
	 }
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",isArray:!1,description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",isArray:!1,description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",isArray:!1,description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",isArray:!1,description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",isArray:!1,description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
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
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",isArray:!1,description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"user_key",isArray:!1,description:"<p>Users unique access-key.</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "user_key": "846ee507525c6b00d18733e066bd5686"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"IZINFINALKKPR",isArray:!1,description:"<p>IZINFINALKKPR</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"IZINFINALKKPR.id_proyek",isArray:!1,description:"<p>ID / Kode Proyek</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"IZINFINALKKPR.oss_id",isArray:!1,description:"<p>Oss Id adalah ID yang di Generate Sistem OSS dan Dikirimkan ke K/L/D Bersama Pengajuan Perizinan</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"IZINFINALKKPR.id_izin",isArray:!1,description:"<p>Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin</p>"},{group:"Parameter",type:"string(12)",optional:!1,field:"IZINFINALKKPR.kd_izin",isArray:!1,description:"<p>Kode Izin Sistem K/L/D (* Lihat Lampiran 8)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"IZINFINALKKPR.kd_status",isArray:!1,description:"<p>Kode Status Perizinan (* Lihat Lampiran 10)</p>"},{group:"Parameter",type:"string(18)",optional:!1,field:"IZINFINALKKPR.tgl_status",isArray:!1,description:"<p>Tanggal Proses Status Izin (format date: YYYY-MM-DD HH:II:SS)</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"IZINFINALKKPR.nip_status",isArray:!1,description:"<p>Nip pemroses Status Izin</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"IZINFINALKKPR.nama_status",isArray:!1,description:"<p>Nama pemroses Status Izin</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"IZINFINALKKPR.keterangan",isArray:!1,description:"<p>Keterangan</p>"},{group:"Parameter",type:"object",optional:!1,field:"IZINFINALKKPR.data_teknis",isArray:!1,description:"<p>data_teknis</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"IZINFINALKKPR.data_teknis.luas",isArray:!1,description:"<p>Luas tanah/perairan yang disetujui</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"IZINFINALKKPR.data_teknis.jenis_peruntukan",isArray:!1,description:"<p>Jenis peruntukan pemanfaatan ruang</p>"},{group:"Parameter",type:"number(20.2)",optional:!1,field:"IZINFINALKKPR.data_teknis.koefisien_dasar_bangunan",isArray:!1,description:"<p>Koefisien dasar bangunan maksimum</p>"},{group:"Parameter",type:"number(20.2)",optional:!1,field:"IZINFINALKKPR.data_teknis.koefisien_lantai_bangunan",isArray:!1,description:"<p>Koefisien lantai bangunan maksimum</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"IZINFINALKKPR.data_teknis.indikasi_program_pemanfaatan_ruang",isArray:!1,description:"<p>Indikasi program pemanfaatan ruang</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"IZINFINALKKPR.data_teknis.persyaratan_pelaksanaan_kegiatan",isArray:!1,description:"<p>Persyaratan Pelaksanaan kegiatan Pemanfaatan Ruang</p>"},{group:"Parameter",type:"number(20.2)",optional:!1,field:"IZINFINALKKPR.data_teknis.garis_sempadan_bangunan",isArray:!1,description:"<p>Garis Sempadan Bangunan minimum</p>"},{group:"Parameter",type:"number(20.2)",optional:!1,field:"IZINFINALKKPR.data_teknis.jarak_bebas_bangunan",isArray:!1,description:"<p>Jarak Bebas Bangunan minimum</p>"},{group:"Parameter",type:"number(20.2)",optional:!1,field:"IZINFINALKKPR.data_teknis.koefisien_dasar_hijau",isArray:!1,description:"<p>Koefisien Dasar Hijau minimum</p>"},{group:"Parameter",type:"number(20.2)",optional:!1,field:"IZINFINALKKPR.data_teknis.jaringan_utilitas_kota",isArray:!1,description:"<p>Jaringan utilitas kota</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"IZINFINALKKPR.data_teknis.persetujuan",isArray:!1,description:"<p>PKKPR dinyatakan disetujui seluruhnya/disetujui sebagian/ditolak seluruhnya dengan pertimbangan</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"IZINFINALKKPR.data_teknis.url_peta",isArray:!1,description:"<p>url_peta</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"IZINFINALKKPR.data_teknis.url_keterangan_peta",isArray:!1,description:"<p>Keterangan Letak Peta (Berisi peta yang menunjukkan letak bidang pada skala yang lebih kecil)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"IZINFINALKKPR.data_teknis.ketentuan_umum",isArray:!1,description:"<p>Arahan / Ketentuan Umum Peraturan Zonasi (Berisi informasi terkait APZ/KUPZ pada kawasan/zona dalam delineasi lokasi usulan kegiatan pemanfaatan ruang)</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"IZINFINALKKPR.data_teknis.koordinat_batas_bidang",isArray:!1,description:"<p>Koordinat batas bidang rencana lokasi kegiatan</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"IZINFINALKKPR.data_teknis.nomor_pertek",isArray:!1,description:"<p>Nomor Pertimbangan Teknis</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"IZINFINALKKPR.data_teknis.nomor_perda_rtr",isArray:!1,description:"<p>nomor_perda_rtr</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"IZINFINALKKPR.data_teknis.nama_perairan",isArray:!1,description:"<p>nama_perairan</p>"},{group:"Parameter",type:"number(20.2)",optional:!1,field:"IZINFINALKKPR.data_teknis.kedalaman",isArray:!1,description:"<p>Kedalaman perairan lokasi kegiatan</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"Object",optional:!1,field:"responreceiveLicenseKKPR",isArray:!1,description:"<p>Response License KKPR</p>"},{group:"200",type:"String(3)",optional:!1,parentNode:{path:"responreceiveLicenseKKPR",field:"responreceiveLicenseKKPR",type:"Object",isArray:!1},field:"responreceiveLicenseKKPR.kode",isArray:!1,description:"<p>Kode Respon</p>"},{group:"200",type:"String(255)",optional:!1,parentNode:{path:"responreceiveLicenseKKPR",field:"responreceiveLicenseKKPR",type:"Object",isArray:!1},field:"responreceiveLicenseKKPR.keterangan",isArray:!1,description:"<p>Keterangan Respon</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
{
	 "responreceiveLicenseKKPR ": {
		 "kode": "",
		 "keterangan": ""
	 }
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",isArray:!1,description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",isArray:!1,description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",isArray:!1,description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",isArray:!1,description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",isArray:!1,description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
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
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",isArray:!1,description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"user_key",isArray:!1,description:"<p>Users unique access-key.</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "user_key": "846ee507525c6b00d18733e066bd5686"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"IZINFINAL",isArray:!1,description:"<p>IZINFINAL</p>"},{group:"Parameter",type:"string(13)",optional:!1,field:"IZINFINAL.nib",isArray:!1,description:"<p>Nomor Induk Berusaha</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"IZINFINAL.id_produk",isArray:!1,description:"<p>ID Produk</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"IZINFINAL.id_proyek",isArray:!1,description:"<p>ID / Kode Proyek</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"IZINFINAL.oss_id",isArray:!1,description:"<p>Oss Id adalah ID yang di Generate Sistem OSS dan Dikirimkan ke K/L/D Bersama Permohonan Nomor Induk Berusaha</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"IZINFINAL.id_izin",isArray:!1,description:"<p>Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin</p>"},{group:"Parameter",type:"string(12)",optional:!1,field:"IZINFINAL.kd_izin",isArray:!1,description:"<p>Kode Izin Sistem K/L/D (* Lihat Lampiran 8)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"IZINFINAL.kd_daerah",isArray:!1,description:"<p>Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"IZINFINAL.kewenangan",isArray:!1,description:"<p>00: Kewenangan Pusat; 01: Kewenangan Provinsi; 02: Kewenangan Kab/Kota</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"IZINFINAL.nomor_izin",isArray:!1,description:"<p>Nomor Izin Final</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"IZINFINAL.tgl_terbit_izin",isArray:!1,description:"<p>Tanggal Izin Final (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"IZINFINAL.tgl_berlaku_izin",isArray:!1,description:"<p>Tanggal Berlaku Izin Final (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"IZINFINAL.nama_ttd",isArray:!1,description:"<p>Nama Penandatangan Izin</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"IZINFINAL.nip_ttd",isArray:!1,description:"<p>Nip Penandatangan Izin</p>"},{group:"Parameter",type:"string(150)",optional:!1,field:"IZINFINAL.jabatan_ttd",isArray:!1,description:"<p>Jabatan Penandatangan Izin</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"IZINFINAL.status_izin",isArray:!1,description:"<p>Status Izin di Sistem OSS (* Lihat Lampiran 10)</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"IZINFINAL.file_izin",isArray:!1,description:"<p>Attachment File Izin dalam Bentuk File PDF Berupa Link (* Ukuran File Maks: 2MB)</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"IZINFINAL.keterangan",isArray:!1,description:"<p>Keterangan Status Izin</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"IZINFINAL.file_lampiran",isArray:!1,description:"<p>Attachment File Izin dalam Bentuk File PDF Berupa Link (* Ukuran File Maks: 2MB)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"IZINFINAL.nomenklatur_nomor_izin",isArray:!1,description:"<p>Nomenklatur nomor izin</p>"},{group:"Parameter",type:"string(5)",optional:!1,field:"IZINFINAL.bln_berlaku_izin",isArray:!1,description:"<p>Jangka waktu berlaku izin dalam bulan</p>"},{group:"Parameter",type:"string(5)",optional:!1,field:"IZINFINAL.thn_berlaku_izin",isArray:!1,description:"<p>Jangka waktu berlaku izin dalam tahun</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"IZINFINAL.data_pnbp",isArray:!0,description:"<p>data_pnbp</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"IZINFINAL.data_pnbp.kd_akun",isArray:!1,description:"<p>Kode Akun PNBP dari Simponi Kemenkeu</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"IZINFINAL.data_pnbp.kd_penerimaan",isArray:!1,description:"<p>Kode Jenis Penerimaan dari Simponi Kemenkeu</p>"},{group:"Parameter",type:"number(20.0)",optional:!1,field:"IZINFINAL.data_pnbp.nominal",isArray:!1,description:"<p>Jumlah Nilai PNBP (Default Valuta : IDR)</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"Object",optional:!1,field:"responupdateLicense",isArray:!1,description:"<p>Response update license</p>"},{group:"200",type:"String(3)",optional:!1,parentNode:{path:"responupdateLicense",field:"responupdateLicense",type:"Object",isArray:!1},field:"responupdateLicense.kode",isArray:!1,description:"<p>Kode Respon</p>"},{group:"200",type:"String(255)",optional:!1,parentNode:{path:"responupdateLicense",field:"responupdateLicense",type:"Object",isArray:!1},field:"responupdateLicense.keterangan",isArray:!1,description:"<p>Keterangan Respon</p>"},{group:"200",type:"String(255)",optional:!1,parentNode:{path:"responupdateLicense",field:"responupdateLicense",type:"Object",isArray:!1},field:"responupdateLicense.keterangan_reset_izin_ds",isArray:!1,description:"<p>Keterangan reset izin DS</p>"},{group:"200",type:"String(20)",optional:!1,parentNode:{path:"responupdateLicense",field:"responupdateLicense",type:"Object",isArray:!1},field:"responupdateLicense.nomor_izin",isArray:!1,description:"<p>Keterangan nomor izin</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
{
	 "responupdateLicense": {
		 "kode": "",
		 "keterangan": "",
		 "keterangan_reset_izin_ds": "",
		 "nomor_izin": ""
	 }
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",isArray:!1,description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",isArray:!1,description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",isArray:!1,description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",isArray:!1,description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",isArray:!1,description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
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
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",isArray:!1,description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"user_key",isArray:!1,description:"<p>Users unique access-key.</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "user_key": "846ee507525c6b00d18733e066bd5686"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"CHECKNIB",isArray:!1,description:"<p>CHECKNIB</p>"},{group:"Parameter",type:"string(13)",optional:!1,field:"CHECKNIB.nib",isArray:!1,description:"<p>Nomor Induk Berusaha</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
{
	"CHECKNIB": {
		"nib": ""
	}
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"object",optional:!1,field:"responcheckNIB",isArray:!1,description:"<p>responcheckNIB</p>"},{group:"200",type:"string(3)",optional:!1,field:"responcheckNIB.kode",isArray:!1,description:"<p>Kode Respon (*Lihat Lampiran 9)</p>"},{group:"200",type:"string(255)",optional:!1,field:"responcheckNIB.keterangan",isArray:!1,description:"<p>Keterangan Respon</p>"},{group:"200",type:"object",optional:!1,field:"responcheckNIB.dataNIB",isArray:!1,description:"<p>dataNIB</p>"},{group:"200",type:"string(13)",optional:!1,field:"responcheckNIB.dataNIB.nib",isArray:!1,description:"<p>Nomor Induk Berusaha</p>"},{group:"200",type:"string(100)",optional:!1,field:"responcheckNIB.dataNIB.nama_perusahaan",isArray:!1,description:"<p>Nama Perusahaan</p>"},{group:"200",type:"string(15)",optional:!1,field:"responcheckNIB.dataNIB.npwp_perusahaan",isArray:!1,description:"<p>NPWP Perusahaan</p>"},{group:"200",type:"string(2)",optional:!1,field:"responcheckNIB.dataNIB.status",isArray:!1,description:"<p>Status NIB (*Lihat Lampiran 14)</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
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
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",isArray:!1,description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",isArray:!1,description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",isArray:!1,description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",isArray:!1,description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",isArray:!1,description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
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
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",isArray:!1,description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"user_key",isArray:!1,description:"<p>Users unique access-key.</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "user_key": "846ee507525c6b00d18733e066bd5686"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"CHECKNIBERROR",isArray:!1,description:"<p>Data check NIB error</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"CHECKNIBERROR.tgl_awal",isArray:!1,description:"<p>Periode Tanggal Awal NIB Terbit (*Date Format YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"CHECKNIBERROR.tgl_akhir",isArray:!1,description:"<p>Periode Tanggal Akhir NIB Terbit (*Date Format YYYY-MM-DD)</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
{
	 "CHECKNIBERROR": {
		 "tgl_awal": "",
		 "tgl_akhir": ""
	 }
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"object",optional:!1,field:"responcheckNIBError",isArray:!1,description:"<p>responcheckNIBError</p>"},{group:"200",type:"string(3)",optional:!1,field:"responcheckNIBError.kode",isArray:!1,description:"<p>Kode Respon (*Lihat Lampiran 9)</p>"},{group:"200",type:"string(255)",optional:!1,field:"responcheckNIBError.keterangan",isArray:!1,description:"<p>Keterangan Respon</p>"},{group:"200",type:"object",optional:!1,field:"responcheckNIBError.checkNIBError",isArray:!1,description:"<p>checkNIBError</p>"},{group:"200",type:"number(11)",optional:!1,field:"responcheckNIBError.checkNIBError.jumlah",isArray:!1,description:"<p>Jumlah data NIB yang error</p>"},{group:"200",type:"object[]",optional:!1,field:"responcheckNIBError.checkNIBError.dataNIB",isArray:!0,description:"<p>dataNIB</p>"},{group:"200",type:"string(13)",optional:!1,field:"responcheckNIBError.checkNIBError.dataNIB.nib",isArray:!1,description:"<p>Nomor Induk Berusaha</p>"},{group:"200",type:"string(25)",optional:!1,field:"responcheckNIBError.checkNIBError.dataNIB.oss_id",isArray:!1,description:"<p>(Optional) Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin</p>"},{group:"200",type:"string(12)",optional:!1,field:"responcheckNIBError.checkNIBError.dataNIB.kd_izin",isArray:!1,description:"<p>Kode Izin Sistem K/L/D (* Lihat Lampiran 8)</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
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
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",isArray:!1,description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",isArray:!1,description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",isArray:!1,description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",isArray:!1,description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",isArray:!1,description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
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
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",isArray:!1,description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"user_key",isArray:!1,description:"<p>Users unique access-key.</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "user_key": "846ee507525c6b00d18733e066bd5686"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"CHECKNIBUPDATE",isArray:!1,description:"<p>Data check NIB updated</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"CHECKNIBUPDATE.tgl_awal",isArray:!1,description:"<p>Periode Tanggal Awal NIB Terbit (*Date Format YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"CHECKNIBUPDATE.tgl_akhir",isArray:!1,description:"<p>Periode Tanggal Akhir NIB Terbit (*Date Format YYYY-MM-DD)</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
{
	 "CHECKNIBUPDATE": {
		 "tgl_awal": "",
		 "tgl_akhir": ""
	 }
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"object",optional:!1,field:"responcheckNIBUpdate",isArray:!1,description:"<p>responcheckNIBUpdate</p>"},{group:"200",type:"string(3)",optional:!1,field:"responcheckNIBUpdate.kode",isArray:!1,description:"<p>Kode Respon (*Lihat Lampiran 9)</p>"},{group:"200",type:"string(255)",optional:!1,field:"responcheckNIBUpdate.keterangan",isArray:!1,description:"<p>Kode Respon (*Lihat Lampiran 9)</p>"},{group:"200",type:"object",optional:!1,field:"responcheckNIBUpdate.checkNIBUpdate",isArray:!1,description:"<p>checkNIBUpdate</p>"},{group:"200",type:"number(11)",optional:!1,field:"responcheckNIBUpdate.checkNIBUpdate.jumlah",isArray:!1,description:"<p>Jumlah data permohonan yang telah update status</p>"},{group:"200",type:"object[]",optional:!1,field:"responcheckNIBUpdate.checkNIBUpdate.dataNIB",isArray:!0,description:"<p>dataNIB</p>"},{group:"200",type:"string(13)",optional:!1,field:"responcheckNIBUpdate.checkNIBUpdate.dataNIB.nib",isArray:!1,description:"<p>Nomor Induk Berusaha</p>"},{group:"200",type:"string(25)",optional:!1,field:"responcheckNIBUpdate.checkNIBUpdate.dataNIB.oss_id",isArray:!1,description:"<p>(Optional) Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin</p>"},{group:"200",type:"string(12)",optional:!1,field:"responcheckNIBUpdate.checkNIBUpdate.dataNIB.kd_izin",isArray:!1,description:"<p>Kode Izin Sistem K/L/D (* Lihat Lampiran 8)</p>"},{group:"200",type:"string(50)",optional:!1,field:"responcheckNIBUpdate.checkNIBUpdate.dataNIB.no_izin",isArray:!1,description:"<p>Nomor Tanggal Izin</p>"},{group:"200",type:"string(10)",optional:!1,field:"responcheckNIBUpdate.checkNIBUpdate.dataNIB.tgl_izin",isArray:!1,description:"<p>TanggalTerbit Izin (* Date Format YYYY-MM-DD)</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
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
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",isArray:!1,description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",isArray:!1,description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",isArray:!1,description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",isArray:!1,description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",isArray:!1,description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
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
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",isArray:!1,description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"user_key",isArray:!1,description:"<p>Users unique access-key.</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "user_key": "846ee507525c6b00d18733e066bd5686"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"INQUERYNIB",isArray:!1,description:"<p>INQUERYNIB</p>"},{group:"Parameter",type:"string(13)",optional:!1,field:"INQUERYNIB.nib",isArray:!1,description:"<p>Nomor Induk Berusaha</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
{
	 "INQUERYNIB": {
		 "nib": ""
	 }
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"object",optional:!1,field:"responinqueryNIB",isArray:!1,description:"<p>Data responinqueryNIB</p>"},{group:"200",type:"string(3)",optional:!1,field:"responinqueryNIB.kode",isArray:!1,description:"<p>Kode respon</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.keterangan",isArray:!1,description:"<p>keterangan</p>"},{group:"200",type:"object",optional:!1,field:"responinqueryNIB.dataNIB",isArray:!1,description:"<p>dataNIB</p>"},{group:"200",type:"string(13)",optional:!1,field:"responinqueryNIB.dataNIB.nib",isArray:!1,description:"<p>Nomor Induk Berusaha</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.tgl_pengajuan_nib",isArray:!1,description:"<p>Tanggal Pengajuan NIB (format date : YYYY-MM-DD)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.tgl_terbit_nib",isArray:!1,description:"<p>Tanggal Penerbitan NIB (format date : YYYY-MM-DD)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.tgl_perubahan_nib",isArray:!1,description:"<p>Tanggal Perubahan NIB (format date : YYYY-MM-DD)</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.oss_id",isArray:!1,description:"<p>Oss Id adalah ID yang di Generate Sistem OSS dan Dikirimkan ke K/L/D Bersama Permohonan Nomor Induk Berusaha</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.jenis_pelaku_usaha",isArray:!1,description:"<p>Jenis Pelaku Usaha (* Lihat Lampiran 18)</p>"},{group:"200",type:"string(20)",optional:!1,field:"responinqueryNIB.dataNIB.no_npp",isArray:!1,description:"<p>Nomor Pendaftaraan Perusahaan Untuk BPJS Ketenagakerjaan</p>"},{group:"200",type:"string(20)",optional:!1,field:"responinqueryNIB.dataNIB.no_va",isArray:!1,description:"<p>Nomor Pendaftaraan Perusahaan Untuk BPJS Kesehatan</p>"},{group:"200",type:"string(23)",optional:!1,field:"responinqueryNIB.dataNIB.no_wlkp",isArray:!1,description:"<p>Nomor Wajib Lapor Ketenagakerjaan Perusahaan</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.flag_perusahaan",isArray:!1,description:"<p>Flag :Y = Untuk Perusahaan Baru,N= Untuk Perusahaan Lama / Exist</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.flag_ekspor",isArray:!1,description:"<p>Y : Melakukan Aktifikas Ekspor, N : Tidak Melakukan Aktifitas Ekspor</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.flag_impor",isArray:!1,description:"<p>Y : Melakukan Aktifikas Impor, N : Tidak Melakukan Aktifitas Impor</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.jenis_api",isArray:!1,description:"<p>Jenis Angka Pengenal Impor (API) (* Lihat Lampiran 3)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.gabung_negara",isArray:!1,description:"<p>PMA Merupakan Gabungan Negara Atau Tidak (* Y:Gabungan Negara, N: Bukan Gabungan Negara)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.negara_pma_dominan",isArray:!1,description:"<p>Negara Asing Yang Memiliki Modal Mayoritas</p>"},{group:"200",type:"number(20.2)",optional:!1,field:"responinqueryNIB.dataNIB.total_pma",isArray:!1,description:"<p>Total Modal PMA</p>"},{group:"200",type:"number(20.2)",optional:!1,field:"responinqueryNIB.dataNIB.nilai_pma_dominan",isArray:!1,description:"<p>Nilai Modal PMA Dominan</p>"},{group:"200",type:"number(20.2)",optional:!1,field:"responinqueryNIB.dataNIB.nilai_pmdn",isArray:!1,description:"<p>Nilai Modal PMDN</p>"},{group:"200",type:"number(9.2)",optional:!1,field:"responinqueryNIB.dataNIB.persen_pma",isArray:!1,description:"<p>Persentase Modal PMA</p>"},{group:"200",type:"number(9.2)",optional:!1,field:"responinqueryNIB.dataNIB.persen_pmdn",isArray:!1,description:"<p>Persentase Modal PMDN</p>"},{group:"200",type:"number(5)",optional:!1,field:"responinqueryNIB.dataNIB.kd_kawasan",isArray:!1,description:"<p>Kode Kawasan (* Lihat Lampiran di https://oss.go.id/oss/#home/po rtal/lstKawasan)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.jenis_kawasan",isArray:!1,description:"<p>Jenis Kawasan (* Lihat Lampiran 21)</p>"},{group:"200",type:"string(5)",optional:!1,field:"responinqueryNIB.dataNIB.versi_pia",isArray:!1,description:"<p>Versi PIA OSS</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.jangka_waktu",isArray:!1,description:"<p>Jangka Waktu (format date : YYYY- MM-DD)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.status_badan_hukum",isArray:!1,description:"<p>Status Badan Hukum (* Lihat Lampiran 12)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.status_penanaman_modal",isArray:!1,description:"<p>Status Penanaman Modal (* Lihat Lampiran 1)</p>"},{group:"200",type:"string(15)",optional:!1,field:"responinqueryNIB.dataNIB.npwp_perseroan",isArray:!1,description:"<p>NPWP Perseroan</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.nama_perseroan",isArray:!1,description:"<p>Nama Perseroan</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.nama_singkatan",isArray:!1,description:"<p>Nama Singkatan Perseroan</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.jenis_perseroan",isArray:!1,description:"<p>Jenis Perseroan (* Lihat Lampiran 2)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.status_perseroan",isArray:!1,description:"<p>Status Perseroan (*Y: Terbuka, N:Tertutup)</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.alamat_perseroan",isArray:!1,description:"<p>Alamat Perseroan</p>"},{group:"200",type:"string(7)",optional:!1,field:"responinqueryNIB.dataNIB.rt_rw_perseroan",isArray:!1,description:"<p>Rt Rw Perseroan</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.kelurahan_perseroan",isArray:!1,description:"<p>Kelurahan Perseroan</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.perseroan_daerah_id",isArray:!1,description:"<p>ID Daerah Perseroan (* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"200",type:"string(5)",optional:!1,field:"responinqueryNIB.dataNIB.kode_pos_perseroan",isArray:!1,description:"<p>Kode Pos Perseroan</p>"},{group:"200",type:"string(20)",optional:!1,field:"responinqueryNIB.dataNIB.nomor_telpon_perseroan",isArray:!1,description:"<p>Nomor Telepon Perseroan</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.email_perusahaan",isArray:!1,description:"<p>Email Perusahaan</p>"},{group:"200",type:"string(20.2)",optional:!1,field:"responinqueryNIB.dataNIB.dalam_bentuk_uang",isArray:!1,description:"<p>Modal Dalam Bentuk Uang (Valuta : IDR)</p>"},{group:"200",type:"string(50000)",optional:!1,field:"responinqueryNIB.dataNIB.dalam_bentuk_lain",isArray:!1,description:"<p>Modal Dalam Bentuk Lainnya</p>"},{group:"200",type:"string(20.2)",optional:!1,field:"responinqueryNIB.dataNIB.total_modal_dasar",isArray:!1,description:"<p>Total Modal Dasar (Valuta : IDR)</p>"},{group:"200",type:"string(20.2)",optional:!1,field:"responinqueryNIB.dataNIB.total_modal_ditempatkan",isArray:!1,description:"<p>Total Modal Ditempatkan (Valuta : IDR)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.flag_umk",isArray:!1,description:"<p>Flag yg menunjukkan umk atau non umk</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham",isArray:!0,description:"<p>pemegang_saham</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.jenis_pemegang_saham",isArray:!1,description:"<p>Jenis Pemegang Saham (* Lihat Lampiran 13)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.flag_asing",isArray:!1,description:"<p>Asal Pemegang Saham dari Dalam Negeri / Luar Negeri (Value : Y = asing, N = Bukan Asing)</p>"},{group:"200",type:"string(20.0)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.total_modal_pemegang",isArray:!1,description:"<p>Total Modal Pemegang Saham (Valuta : IDR)</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.jabatan_pemegang_saham",isArray:!1,description:"<p>Jabatan Pemegang Saham</p>"},{group:"200",type:"string(500)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.nama_pemegang_saham",isArray:!1,description:"<p>Nama Pemegang Saham</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.jns_identitas_pemegang_saham",isArray:!1,description:"<p>Jenis Identitas Pemegang Saham (* Lihat Lampiran 4)</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.no_identitas_pemegang_saham",isArray:!1,description:"<p>Nomor Identitas Pemegang Saham</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.valid_identitas_pemegang_saham",isArray:!1,description:"<p>Valid / Masa Berlaku Pemegang Saham (Format Date : YYYY-MM- DD)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.negara_asal_pemegang_saham",isArray:!1,description:"<p>Negara asal pemegang saham</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.pengendali_pemegang_saham",isArray:!1,description:"<p>Nama Pengendali Pemegang Saham</p>"},{group:"200",type:"string(15)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.npwp_pemegang_saham",isArray:!1,description:"<p>NPWP Pemegang Saham</p>"},{group:"200",type:"string(1024)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.alamat_pemegang_saham",isArray:!1,description:"<p>Alamat Pemegang Saham</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.fax_pemegang_saham",isArray:!1,description:"<p>Fax Pemegang Saham</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.email_pemegang_saham",isArray:!1,description:"<p>Email Pemegang Saham</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.flag_pajak_pemegang_saham",isArray:!1,description:"<p>Flag Validasi Pajak Pemegang Saham (* Lihat Lampiran 19)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.ket_pajak_pemegang_saham",isArray:!1,description:"<p>ket_pajak_pemegang_saham</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb",isArray:!0,description:"<p>penanggung_jwb</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.flag_asing",isArray:!1,description:"<p>Asal penanggung jawab dari Dalam Negeri / Luar Negeri (Value : Y = asing, N = Bukan Asing)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.jns_identitas_penanggung_jwb",isArray:!1,description:"<p>Jenis idetitas penanggung jawab</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.no_identitas_penanggung_jwb",isArray:!1,description:"<p>no_identitas_penanggung_jwb</p>"},{group:"200",type:"string(500)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.nama_penanggung_jwb",isArray:!1,description:"<p>nama_penanggung_jwb</p>"},{group:"200",type:"string(250)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.jabatan_penanggung_jwb",isArray:!1,description:"<p>jabatan_penanggung_jwb</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.kebangsaan_penanggung_jwb",isArray:!1,description:"<p>kebangsaan_penanggung_jwb</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.negara_asal_penanggung_jwb",isArray:!1,description:"<p>negara_asal_penanggung_jwb</p>"},{group:"200",type:"string(15)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.npwp_penanggung_jwb",isArray:!1,description:"<p>npwp_penanggung_jwb</p>"},{group:"200",type:"string(1024)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.alamat_penanggung_jwb",isArray:!1,description:"<p>alamat_penanggung_jwb</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.jalan_penanggung_jwb",isArray:!1,description:"<p>jalan_penanggung_jwb</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.blok_penanggung_jwb",isArray:!1,description:"<p>Alamat Blok Penanggung Jawab</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.no_penanggung_jwb",isArray:!1,description:"<p>Alamat Nomor Penanggung Jawab</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.rt_rw_penanggung_jwb",isArray:!1,description:"<p>RT RW Penanggung Jawab</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.kelurahan_penanggung_jwb",isArray:!1,description:"<p>Kelurahan Penanggung Jawab</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.daerah_id_penanggung_jwb",isArray:!1,description:"<p>ID Daerah Penanggung Jawab (* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"200",type:"string(5)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.kode_pos_penanggung_jwb",isArray:!1,description:"<p>Kode Pos Penanggung Jawab</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.no_telp_penanggung_jwb",isArray:!1,description:"<p>Nomor Telepon Penanggung Jawab</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.no_hp_penanggung_jwb",isArray:!1,description:"<p>Nomor Handphone Penanggung Jawab</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.no_fax_penanggung_jwb",isArray:!1,description:"<p>Nomor Fax Penanggung Jawab</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.email_penanggung_jwb",isArray:!1,description:"<p>Email Penanggung Jawab</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.flag_pajak_penanggung_jwb",isArray:!1,description:"<p>Flag Validasi Pajak Penanggung Jawab (* Lihat Lampiran 19)</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.ket_pajak_penanggung_jwb",isArray:!1,description:"<p>Keterangan Validasi Pajak Penanggung Jawab</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.no_pengesahan",isArray:!1,description:"<p>Nomor Pengesahan Akta Dari Kumham</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.tgl_pengesahan",isArray:!1,description:"<p>Tanggal Pengesahan Akta Dari Kumham (format date : YYYY- MM-DD)</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.no_akta_lama",isArray:!1,description:"<p>Nomor Akta Lama Sebelum Perubahan</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.tgl_akta_lama",isArray:!1,description:"<p>Tanggal Akta Lama Sebelum Perubahan (format date : YYYY- MM-DD)</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.no_pengesahan_lama",isArray:!1,description:"<p>Nomor Pengesahan Akta Lama Sebelum Perubahan Dari Kumham</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.tgl_pengesahan_lama",isArray:!1,description:"<p>Tanggal Pengesahan Akta Lama Sebelum Perubahan Dari Kumham (format date : YYYY-MM-DD)</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.legalitas",isArray:!0,description:"<p>legalitas</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.legalitas.jenis_legal",isArray:!1,description:"<p>Jenis Legal Perusahaan (* Lihat Lampiran 7)</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.legalitas.no_legal",isArray:!1,description:"<p>Nomor Legal Perusahaan</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.legalitas.tgl_legal",isArray:!1,description:"<p>Tanggal Legal Perusahaan (format date : YYYY-MM-DD)</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.legalitas.alamat_notaris",isArray:!1,description:"<p>Alamat Notaris</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.legalitas.nama_notaris",isArray:!1,description:"<p>Nama Notaris</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.legalitas.telepon_notaris",isArray:!1,description:"<p>Telepon Notaris</p>"},{group:"200",type:"object",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka",isArray:!1,description:"<p>data_rptka</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.jenis_rptka",isArray:!1,description:"<p>Jenis Flag RPTKA *( 01 : Baru, 02: Perubahan)</p>"},{group:"200",type:"string(20)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.no_rptka",isArray:!1,description:"<p>No Bacode RPTKA</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_awal",isArray:!1,description:"<p>Masa Berlaku Dari Tanggal(format date : YYYY-MM-DD)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_akhir",isArray:!1,description:"<p>Masa Berlaku Sampai Tanggal(format date : YYYY-MM- DD)</p>"},{group:"200",type:"number(20.2)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_gaji",isArray:!1,description:"<p>Gaji Tenaga Asing</p>"},{group:"200",type:"number(11)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.jumlah_tka_rptka",isArray:!1,description:"<p>Jumlah Tenaga Kerja Asing (TKA) dalam Rencana Penggunaan Tenaga Kerja Asing (RPTKA)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.jangka_penggunaan_waktu",isArray:!1,description:"<p>Jangka Waktu Penggunaan Tenaga Kerja Asing (TKA) dalam Izin Rencana Penggunaan Tenaga Kerja Asing (RPTKA) (format date : YYYY- MM-DD)</p>"},{group:"200",type:"number(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.jangka_waktu_permohonan_rptka",isArray:!1,description:"<p>Jangka Waktu Permohonan RPTKA</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan",isArray:!0,description:"<p>rptka_jabatan</p>"},{group:"200",type:"number(11)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.id_jabatan",isArray:!1,description:"<p>ID Jabatan Tenaga Kerja Asing berdasarkan https://jdih.kemnaker.go.id/data_puu/KEP247_MENX_2011.pd\xA0f</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.jabatan",isArray:!1,description:"<p>Nama Jabatan</p>"},{group:"200",type:"number(11)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.jumlah",isArray:!1,description:"<p>Jumlah Orang Yang Memiliki Jabatan</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.tgl_mulai",isArray:!1,description:"<p>Tanggal Mulai Jabatan format date</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.tgl_selesai",isArray:!1,description:"<p>Tanggal Selesai Jabatan format date : YYYY-MM-DD)</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.keterangan",isArray:!1,description:"<p>Keterangan</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping",isArray:!0,description:"<p>rptka_tki_pendamping</p>"},{group:"200",type:"number(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.id_jabatan",isArray:!1,description:"<p>Id Jabatan</p>"},{group:"200",type:"number(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.id_pendamping",isArray:!1,description:"<p>Id TKI Pendamping</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.nama",isArray:!1,description:"<p>Nama TKI Pendamping</p>"},{group:"200",type:"string(20)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.nik",isArray:!1,description:"<p>Nomor NIK TKI Pendamping</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.jabatan",isArray:!1,description:"<p>Nama Jabatan TKI Pendamping</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.hp",isArray:!1,description:"<p>Nomor HP TKI Pendamping</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.email",isArray:!1,description:"<p>Email TKI Pendampiag</p>"},{group:"200",type:"string(65535)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.foto",isArray:!1,description:"<p>Foto TKI Pendamping Attachment File dalam Bentukbentuk base64 dengan format (data:image/jpeg;base64,string() ENCODE IMAGE)</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.pendidikan_min",isArray:!1,description:"<p>Tingkat Pendidikan Minimal TKI Pendamping</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.sertifikat",isArray:!1,description:"<p>Sertifikat Kompetensi TKI Pendamping</p>"},{group:"200",type:"number(11)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.pengalaman_kerja",isArray:!1,description:"<p>Pengalaman Kerja TKI Pendamping (dalam tahun)</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.keterangan",isArray:!1,description:"<p>Keterangan</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_negara",isArray:!0,description:"<p>rptka_negara</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_negara.id_negara",isArray:!1,description:"<p>Negara Asal Tenaga Kerja Asing(* Sumber Kodefikasi Negara Mengikuti Standar Unedifact : http://www.unece.org/cefact/loco de/service/location )</p>"},{group:"200",type:"number(11)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_negara.jumlah",isArray:!1,description:"<p>Jumlah Tenaga Kerja Asing (TKA) dalam Rencana Penggunaan Tenaga Kerja Asing (RPTKA)</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_lokasi",isArray:!0,description:"<p>rptka_lokasi</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_lokasi.lokasi_id",isArray:!1,description:"<p>ID Daerah Penanggung Jawab (* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"200",type:"number(11)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_lokasi.jumlah",isArray:!1,description:"<p>Jumlah Tenaga Kerja Asing (TKA) dalam Rencana Penggunaan Tenaga Kerja Asing (RPTKA)</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek",isArray:!0,description:"<p>data_proyek</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.id_proyek",isArray:!1,description:"<p>ID / Kode Proyek</p>"},{group:"200",type:"string(26)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.nomor_proyek",isArray:!1,description:"<p>Nomor Permohonan Proyek</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.uraian_usaha",isArray:!1,description:"<p>Uraian Usaha Proyek</p>"},{group:"200",type:"number(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jumlah_tki_l",isArray:!1,description:"<p>Jumlah Tenaga Kerja Indonesia (TKI) Laki -Laki</p>"},{group:"200",type:"number(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jumlah_tki_p",isArray:!1,description:"<p>Jumlah Tenaga Kerja Indonesia (TKI) Perempuan</p>"},{group:"200",type:"number(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jumlah_tka_l",isArray:!1,description:"<p>Jumlah Tenaga Kerja Asing (TKA) Laki -Laki</p>"},{group:"200",type:"number(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jumlah_tka_p",isArray:!1,description:"<p>Jumlah Tenaga Kerja Asing (TKA) Perempuan</p>"},{group:"200",type:"string(7)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.kbli",isArray:!1,description:"<p>Kode KBLI (* Menggunakan Kode KBLI Tahun 2020)</p>"},{group:"200",type:"string(3)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.sektor",isArray:!1,description:"<p>Sektor Usaha Berdasarkan KBLI (* Lihat Lampiran 20)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.memiliki_menguasai",isArray:!1,description:"<p>Sudah Memiliki atar Menguasai Lahan (Value : Y = Sudah Memiliki atau Menguasai Lahan, N = Belum Memiliki atau Menguasai Lahan)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jenis_lokasi",isArray:!1,description:"<p>Lokasi Berada dalam Lintas Administratif (Value : Y = Berada Dalam Lintas Administrasi, N = Bukan Berada Dalam Lintas Administrasi)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.status_tanah",isArray:!1,description:"<p>Status Kepemilikan Tanah (* Lihat Lampiran 5)</p>"},{group:"200",type:"number(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.luas_tanah",isArray:!1,description:"<p>Luas Bidang tanah</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.satuan_luas_tanah",isArray:!1,description:"<p>Satuan Luas Tanah (*Lihat Lampiran 17)</p>"},{group:"200",type:"number(19)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.pembelian_pematang_tanah",isArray:!1,description:"<p>Nilai Pembelian Pematang Tanah (Valuta:IDR)</p>"},{group:"200",type:"number(19)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.bangunan_gedung",isArray:!1,description:"<p>Nilai Bangunan Gedung (Valuta:IDR)</p>"},{group:"200",type:"number(19)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.mesin_peralatan",isArray:!1,description:"<p>Nilai Mesin Peralatan (Valuta:IDR)</p>"},{group:"200",type:"number(19)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.mesin_peralatan_usd",isArray:!1,description:"<p>Nilai Mesin Peralatan dalam USD</p>"},{group:"200",type:"number(19)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.investasi_lain",isArray:!1,description:"<p>Investasi Lainnya</p>"},{group:"200",type:"number(19)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.sub_jumlah",isArray:!1,description:"<p>Jumlah Asset (Valuta:IDR)</p>"},{group:"200",type:"number(19)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.modal_kerja",isArray:!1,description:"<p>Nilai Modal Kerja (Valuta:IDR)</p>"},{group:"200",type:"number(19)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jumlah_investasi",isArray:!1,description:"<p>Nilai Jumlah Investasi (Valuta:IDR)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.tanggal_kurs",isArray:!1,description:"<p>Tanggal Kurs (format date : YYYY- MM-DD)</p>"},{group:"200",type:"number(19)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.nilai_kurs",isArray:!1,description:"<p>Nilai Kurs</p>"},{group:"200",type:"number(11)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.kd_kawasan",isArray:!1,description:"<p>Kode Kawasan (* Lihat Lampiran 30)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jawab_lokasi_b",isArray:!1,description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point B</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jawab_lokasi_c",isArray:!1,description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point C</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jawab_lokasi_d",isArray:!1,description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point D</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jawab_lokasi_e",isArray:!1,description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point E</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jawab_lokasi_f",isArray:!1,description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point F</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jawab_lokasi_g",isArray:!1,description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point G</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.flag_perluasan",isArray:!1,description:"<p>Proyek Merupakan Perluasan/Pengembangan Usaha Atau Bukan (Value : Y = Proses Perluasan/Pengembangan Usaha, N = Bukan Proses Perluasan/Pengembangan Usaha)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.flag_cabang",isArray:!1,description:"<p>Proyek Sebagai Kantor Cabang Atau Bukan (Value : Y = Sebagai Kantor Cabang, N = Bukan Sebagai Kantor Cabang)</p>"},{group:"200",type:"string(15)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.npwp_cabang",isArray:!1,description:"<p>NPWP Kantor Cabang</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.nama_cabang",isArray:!1,description:"<p>Nama Kantor Cabang / Proyek</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jenis_identitas_pj",isArray:!1,description:"<p>Jenis Identitas Penanggung Jawab Proyek (* Lihat Lampiran 4)</p>"},{group:"200",type:"string(16)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.no_identitas_pj",isArray:!1,description:"<p>No Identitas Penanggung Jawab Proyek</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.nama_pj",isArray:!1,description:"<p>Nama Penanggung Jawab Proyek</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.status_proyek",isArray:!1,description:"<p>Status Proyek(* Lihat Lampiran 22)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jenis_proyek",isArray:!1,description:"<p>Jenis Proyek(* Lihat Lampiran 26)</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.nama_kegiatan",isArray:!1,description:"<p>Nama Proyek/ Kegiatan Proyek, Untuk Perseorangan Digunakan Untuk Mencatat Nama Dagangannya Misal (UD. Perciban Jaya)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.flag_merger",isArray:!1,description:"<p>Flag Proyek Hasil Merger atau Bukan (Y: Hasil Merger, N: Bukan Hasil Merger)</p>"},{group:"200",type:"string(15)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.npwp_perseroan_merger",isArray:!1,description:"<p>NPWP Perusahaan Merger</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.nama_perseroan_merger",isArray:!1,description:"<p>Nama Perusahaan Merger</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.skala_usaha",isArray:!1,description:"<p>Skala usaha</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.skala_resiko",isArray:!1,description:"<p>Skala resiko</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.deskripsi_kegiatan",isArray:!1,description:"<p>Deskripsi kegiatan</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek",isArray:!0,description:"<p>data_lokasi_proyek</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.id_proyek_lokasi",isArray:!1,description:"<p>ID / Kode Lokasi Proyek</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.proyek_daerah_id",isArray:!1,description:"<p>Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019: https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"200",type:"string(3)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.kd_kawasan",isArray:!1,description:"<p>Kode Kawasan (* Lihat Lampiran 30)</p>"},{group:"200",type:"string(65535)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.alamat_usaha",isArray:!1,description:"<p>Alamat Kegiatan Proyek / Usaha</p>"},{group:"200",type:"string(6)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.id_kegiatan",isArray:!1,description:"<p>Id Kegiatan Usaha Berdasarkan RDTR Digital</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.response_kegiatan",isArray:!1,description:"<p>Response Kegiatan Usaha Berdasarkan Validasi Kegiatan RDTR Digital</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.jenis_kawasan",isArray:!1,description:"<p>Jenis Kawasan (* Lihat Lampiran 16)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.jenis_lokasi",isArray:!1,description:"<p>Jenis Lokasi Lintas Administratif atau Tidak (01 : Lintas Administratif, 02 : Tidak Lintas Administratif)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.status_lokasi",isArray:!1,description:"<p>Status Lokasi(* Lihat Lampiran 25)</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.data_lokasi_proyek",isArray:!0,description:"<p>data_lokasi_proyek</p>"},{group:"200",type:"number(11)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.data_lokasi_proyek.serial",isArray:!1,description:"<p>Serial Koordinat</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.data_lokasi_proyek.lat_lng",isArray:!1,description:"<p>Koordinat Latitude &amp; Longitude</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek",isArray:!0,description:"<p>data_posisi_proyek</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek.id_proyek_posisi",isArray:!1,description:"<p>ID / Kode Posisi Proyek</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek.id_proyek_lokasi",isArray:!1,description:"<p>ID / Kode Lokasi Proyek</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek.posisi_lokasi",isArray:!1,description:"<p>Posisi Lokasi (* Lihat Lampiran 24)</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk",isArray:!0,description:"<p>data_proyek_produk</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.id_produk",isArray:!1,description:"<p>ID / Kode Produk</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.id_proyek",isArray:!1,description:"<p>ID / Kode Proyek</p>"},{group:"200",type:"string(7)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.kbli",isArray:!1,description:"<p>Kode KBLI (* Menggunakan Kode KBLI Tahun 2020)</p>"},{group:"200",type:"number(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.id_bidang_usaha",isArray:!1,description:"<p>ID Bidang Usaha Berdasarkan Kodefikasi Data Negatif Investasi (DNI) (* Lihat Lampiran 15)</p>"},{group:"200",type:"string(1024)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.jenis_produksi",isArray:!1,description:"<p>Rencana Produksi Yang Dihasilkan</p>"},{group:"200",type:"number(20.2)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.kapasitas",isArray:!1,description:"<p>Kapasitas produksi suatu produk</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.satuan",isArray:!1,description:"<p>Satuan Dari Kapasitas Produksi</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.merk_dagang",isArray:!1,description:"<p>Merk Dagang</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.pemegang_haki",isArray:!1,description:"<p>Pemegang Hak Cipta</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.pemegang_paten",isArray:!1,description:"<p>Pemegang Hak Paten</p>"},{group:"200",type:"string(20)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.pi_nomor",isArray:!1,description:"<p>Nomor Pendaftaran Penanaman Modal Untuk Case Grand Father Clause (GFC)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.pi_tanggal",isArray:!1,description:"<p>Tanggal Pendaftaran Penanaman Modal Untuk Case Grand Father Clause (GFC) format date : YYYY- MM-DD</p>"},{group:"200",type:"string(16)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.pi_npwp",isArray:!1,description:"<p>NPWP Pendaftaran Penanaman Modal Untuk Case Grand Father Clause (GFC)</p>"},{group:"200",type:"string(9)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.id_kbli_ta",isArray:!1,description:"<p>Penanda Bahwa Cakupan Produk Untuk Kebutuhan Tax Allowance</p>"},{group:"200",type:"number(3.2)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.tkdn",isArray:!1,description:"<p>Tingkat Kandungan Dalam Negeri</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.data_dni",isArray:!0,description:"<p>data_dni</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_dni.kd_dni",isArray:!1,description:"<p>Kodefikasi Data Negatif Investasi (DNI) (* Lihat Lampiran 15)</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist",isArray:!0,description:"<p>data_checklist</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.id_produk",isArray:!1,description:"<p>ID Produk</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.id_proyek",isArray:!1,description:"<p>ID / Kode Proyek</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.id_izin",isArray:!1,description:"<p>Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin</p>"},{group:"200",type:"string(3)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.jenis_izin",isArray:!1,description:"<p>Jenis Perizinan (* Lihat Lampiran 27)</p>"},{group:"200",type:"string(13)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.kd_izin",isArray:!1,description:"<p>Kode Izin Sistem K/L/D (* service getDataReferensi kode : 8)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.kd_daerah",isArray:!1,description:"<p>Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.nama_izin",isArray:!1,description:"<p>Nama Izin</p>"},{group:"200",type:"string(150)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.no_izin",isArray:!1,description:"<p>Nomor Izin</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.tgl_izin",isArray:!1,description:"<p>Tanggal Izin (format date : YYYY-MM-DD)</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.instansi",isArray:!1,description:"<p>Nama Instansi</p>"},{group:"200",type:"number(19)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.id_bidang_spesifik",isArray:!1,description:"<p>ID Bidang Spesifik</p>"},{group:"200",type:"string(65535)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.bidang_spesifik",isArray:!1,description:"<p>Uraian Bidang Spesifik</p>"},{group:"200",type:"number(19)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.id_kewenangan",isArray:!1,description:"<p>ID Kewenangan</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.parameter_kewenangan",isArray:!1,description:"<p>Parameter Kewenangan Izin</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.kewenangan",isArray:!1,description:"<p>00: Kewenangan Pusat; 01: Kewenangan Provinsi; 02: Kewenangan Kab/Kota</p>"},{group:"200",type:"string(65535)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.file_izin",isArray:!1,description:"<p>Attachment File Izin Hasil Pemenuhan Komitmen dari K/L/D dalam Bentuk File PDF Berupa Link (* Ukuran File Maks: 2MB)</p>"},{group:"200",type:"string(65535)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.file_izin_oss",isArray:!1,description:"<p>Attachment File Izin yang diterbitkan ole Lembaga OSS dalam Bentuk File PDF/Image Berupa Link (* Ukuran File Maks: 2MB)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.flag_checklist",isArray:!1,description:"<p>Flag Checklist Komitmen (* Lihat Lampiran 28)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.status_checklist",isArray:!1,description:"<p>Status Penerbitan Izin / Checklist (* Lihat Lampiran 10)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.flag_transaksional",isArray:!1,description:"<p>Flag : Y/N, Flag Izin Komersial / Operasional Diajukan Transaksional (Bisa Mengajukan Berulang)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.flag_perpanjangan",isArray:!1,description:"<p>Flag : Y/N, Flag Bahwa Izin Usaha Ini Adalah Hasil Perpanjangan Dari Zin Usaha Yang Terbit Sebelum OSS</p>"},{group:"200",type:"string(15)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.kd_dokumen",isArray:!1,description:"<p>Kode dokumen izin lingkungan</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.nm_",isArray:!1,description:"<p>dokumen	Nama dokumen izin lingkungan</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.data_persyaratan",isArray:!0,description:"<p>data_persyaratan</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.data_persyaratan.id_syarat",isArray:!1,description:"<p>Id / Kode Persyaratan</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.data_persyaratan.no_dokumen",isArray:!1,description:"<p>Nomor Dokumen Persyaratan</p>"},{group:"200",type:"string(8)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.data_persyaratan.tgl_dokumen",isArray:!1,description:"<p>Tanggal Dokumen Persyaratan (format date : YYYY-MM-DD)</p>"},{group:"200",type:"string(65535)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.data_persyaratan.file_dokumen",isArray:!1,description:"<p>Attachment File Izin dalam Bentuk File PDF Berupa Link (* Ukuran File Maks: 2MB)</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.data_persyaratan.keterangan",isArray:!1,description:"<p>Keterangan Dokumen Persyaratan</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.jenis_id_user_proses",isArray:!1,description:"<p>Kode Jenis Identitas (* Lihat Lampiran 4)</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.no_id_user_proses",isArray:!1,description:"<p>No Identitas Pemroses NIB</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.nama_user_proses",isArray:!1,description:"<p>Nama User Pemroses NIB</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.email_user_proses",isArray:!1,description:"<p>Email User Pemroses NIB</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.hp_user_proses",isArray:!1,description:"<p>No HP Pemroses NIB</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.alamat_user_proses",isArray:!1,description:"<p>Alamat Pemroses NIB</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.jns_kelamin_user_proses",isArray:!1,description:"<p>Jenis Kelamin Pemroses NIB (L : Laki-Laki, P : Perempuan)</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.tempat_lahir_user_proses",isArray:!1,description:"<p>Tempat Lahir Pemroses NIB</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.tgl_lahir_user_proses",isArray:!1,description:"<p>Tanggal Lahir User Pemroses (format date : YYYY-MM-DD)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.daerah_id_user_proses",isArray:!1,description:"<p>ID Daerah User Pemroses(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.rt_rw_user_proses",isArray:!1,description:"<p>RT RW Pemroses NIB</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.agama_user_proses",isArray:!1,description:"<p>Agama Pemroses NIB</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.status_perkawinan_user_proses",isArray:!1,description:"<p>Status Perkawinan Pemroses NIB</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.pekerjaan_user_proses",isArray:!1,description:"<p>Pekerjaan Pemroses NIB</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.status_nib",isArray:!1,description:"<p>Status Penerbitan NIB (* Lihat Lampiran 14)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.tipe_dokumen",isArray:!1,description:"<p>Tipe Dokumen (9:Original, 5:Update, 3:Pencabutan, 4:Pembatalan)</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
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
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",isArray:!1,description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",isArray:!1,description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",isArray:!1,description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",isArray:!1,description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",isArray:!1,description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
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
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",isArray:!1,description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"user_key",isArray:!1,description:"<p>Users unique access-key.</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "user_key": "846ee507525c6b00d18733e066bd5686"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"INQUERYNIBSTPW",isArray:!1,description:"<p>INQUERYNIBSTPW</p>"},{group:"Parameter",type:"string(13)",optional:!1,field:"INQUERYNIBSTPW.nib",isArray:!1,description:"<p>Nomor Induk Berusaha</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
{
	 "INQUERYNIBSTPW": {
		 "nib": ""
	 }
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"object",optional:!1,field:"responinqueryNIBSTPW",isArray:!1,description:"<p>responinqueryNIBSTPW</p>"},{group:"200",type:"string(3)",optional:!1,field:"responinqueryNIBSTPW.kode",isArray:!1,description:"<p>kode</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIBSTPW.keterangan",isArray:!1,description:"<p>keterangan</p>"},{group:"200",type:"object",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW",isArray:!1,description:"<p>dataNIBSTPW</p>"},{group:"200",type:"string(13)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.nib",isArray:!1,description:"<p>Nomor Induk Berusaha</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.tgl_pengajuan_nib",isArray:!1,description:"<p>Tanggal Pengajuan NIB (* Date Format YYYY-MM-DD)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.tgl_terbit_nib",isArray:!1,description:"<p>Tanggal Terbit NIB (* Date Format YYYY-MM-DD)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.tgl_perubahan_nib",isArray:!1,description:"<p>Tanggal Perubahan NIB (* Date Format YYYY-MM-DD)</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.oss_id",isArray:!1,description:"<p>Oss ID adalah ID yang di Generate Sistem OSS dan Dikirimkan ke L/L/D Bersama Permohonan Nomor Induk Berusaha (NIB)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.jenis_pelaku_usaha",isArray:!1,description:"<p>Jenis Pelaku Usaha (* Lihat Lampiran 18)</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.nama_pj",isArray:!1,description:"<p>Nama Penanggung Jawab</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.alamat_pj",isArray:!1,description:"<p>Alamat Penanggung Jawab</p>"},{group:"200",type:"string(20)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.paspor_pj",isArray:!1,description:"<p>Nomor Paspor Penanggung Jawab</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.email_pj",isArray:!1,description:"<p>Email Penanggung Jawab</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.asal_negara_pj",isArray:!1,description:"<p>Negara Asal Penanggung Jawab (* Sumber Kodefikasi Negara Mengikuti Standar Unedifact : http://www.unece.org/cefact/locode/ service/location )</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.telp_pj",isArray:!1,description:"<p>Telpon Penanggung Jawab</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.nama_perusahaan_ln",isArray:!1,description:"<p>Nama Prinsipal</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.alamat_perusahaan_ln",isArray:!1,description:"<p>Alamat Prinsipal</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.negara_perusahaan_ln",isArray:!1,description:"<p>Negara Prinsipal (* Sumber Kodefikasi Negara Mengikuti Standar Unedifact: http://www.unece.org/cefact/locode/ service/location )</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.telp_perusahaan_ln",isArray:!1,description:"<p>Telpon Prinsipal</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.jangka_waktu",isArray:!1,description:"<p>Jangka Waktu (* Date Format YYYY- MM-DD)</p>"},{group:"200",type:"string(65535)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.file_prospektus",isArray:!1,description:"<p>Attachment File Prospektus dalam Bentuk File PDF/Image Berupa Link (* Ukuran File Maks: 2MB)</p>"},{group:"200",type:"string(5)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.versi_pia",isArray:!1,description:"<p>Versi PIA OSS</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.data_checklist",isArray:!0,description:"<p>Data checklist</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.data_checklist.id_izin",isArray:!1,description:"<p>Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin</p>"},{group:"200",type:"string(3)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.data_checklist.jenis_izin",isArray:!1,description:"<p>Jenis Perizinan (* Lihat Lampiran 27)</p>"},{group:"200",type:"string(13)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.data_checklist.kd_izin",isArray:!1,description:"<p>Kode Izin Sistem K/L/D (*https://services.oss.go.id/getListIzin)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.data_checklist.kd_daerah",isArray:!1,description:"<p>Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.data_checklist.nama_izin",isArray:!1,description:"<p>Nama Izin</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.data_checklist.instansi",isArray:!1,description:"<p>Nama Instansi</p>"},{group:"200",type:"number(19)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.data_checklist.id_bidang_spesifik",isArray:!1,description:"<p>ID Bidang Spesifik</p>"},{group:"200",type:"string(65535)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.data_checklist.bidang_spesifik",isArray:!1,description:"<p>Uraian Bidang Spesifik</p>"},{group:"200",type:"number(19)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.data_checklist.id_kewenangan",isArray:!1,description:"<p>ID Kewenangan</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.data_checklist.parameter_kewenangan",isArray:!1,description:"<p>Parameter Kewenangan Izin</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.data_checklist.kewenangan",isArray:!1,description:"<p>00: Kewenangan Pusat; 01: Kewenangan Provinsi; 02: Kewenangan Kab/Kota</p>"},{group:"200",type:"string(65535)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.data_checklist.file_izin",isArray:!1,description:"<p>Attachment File Izin Hasil Pemenuhan Komitmen dari K/L/D dalam Bentuk File PDF/Image Berupa Link (* Ukuran File Maks: 2MB)</p>"},{group:"200",type:"string(65535)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.data_checklist.file_izin_oss",isArray:!1,description:"<p>Attachment File Izin yang diterbitkan ole Lembaga OSS dalam Bentuk File PDF/Image Berupa Link (* Ukuran File Maks: 2MB)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.data_checklist.flag_checklist",isArray:!1,description:"<p>Flag Checklist Komitmen (* Lihat Lampiran 28)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.data_checklist.status_checklist",isArray:!1,description:"<p>Status Penerbitan Izin / Checklist (* Lihat Lampiran 10)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.data_checklist.flag_transaksional",isArray:!1,description:"<p>Flag : Y/N, Flag Izin Komersial / Operasional Diajukan Transaksional (Bisa Mengajukan Berulang)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.data_checklist.flag_perpanjangan",isArray:!1,description:"<p>Flag : Y/N, Flag Bahwa Izin Usaha Ini Adalah Hasil Perpanjangan Dari Izin Usaha Yang Terbit Sebelum OSS</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.jenis_id_user_proses",isArray:!1,description:"<p>Kode Jenis Identitas (* Lihat Lampiran 4)</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.no_id_user_proses",isArray:!1,description:"<p>No Identitas Pemroses NIB</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.nama_user_proses",isArray:!1,description:"<p>Nama User Pemroses NIB</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.email_user_proses",isArray:!1,description:"<p>Email User Pemroses NIB</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.hp_user_proses",isArray:!1,description:"<p>No HP Pemroses NIB</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.alamat_user_proses",isArray:!1,description:"<p>Alamat Pemroses NIB</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.jns_kelamin_user_proses",isArray:!1,description:"<p>Jenis Kelamin Pemroses NIB (L : Laki- Laki, P : Perempuan)</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.tempat_lahir_user_proses",isArray:!1,description:"<p>Tempat Lahir Pemroses NIB</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.tgl_lahir_user_proses",isArray:!1,description:"<p>Tanggal Lahir User Pemroses (format date : YYYY-MM-DD)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.daerah_id_user_proses",isArray:!1,description:"<p>ID Daerah User Pemroses(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.rt_rw_user_proses",isArray:!1,description:"<p>RT RW Pemroses NIB</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.agama_user_proses",isArray:!1,description:"<p>Agama Pemroses NIB</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.status_perkawinan_user_proses",isArray:!1,description:"<p>Status Perkawinan Pemroses NIB</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.pekerjaan_user_proses",isArray:!1,description:"<p>Pekerjaan Pemroses NIB</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.status_nib",isArray:!1,description:"<p>Status Penerbitan NIB (* Lihat Lampiran 14)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIBSTPW.dataNIBSTPW.tipe_dokumen",isArray:!1,description:"<p>Tipe Dokumen (9:Original, 5:Update, 3:Pencabutan, 4:Pembatalan)</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
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
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",isArray:!1,description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",isArray:!1,description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",isArray:!1,description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",isArray:!1,description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",isArray:!1,description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
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
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",isArray:!1,description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"Token",isArray:!1,description:"<p>SHA1(USERNAME+PASSWORD+NPWP+DATE(Ymd))</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "Token": "OSS000qw13242628gssssss812345654709820180514"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"dataNIB",isArray:!1,description:"<p>Data NIB</p>"},{group:"Parameter",type:"string(13)",optional:!1,field:"dataNIB.nib",isArray:!1,description:"<p>Nomor Induk Berusaha</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.tgl_pengajuan_nib",isArray:!1,description:"<p>Tanggal Pengajuan NIB (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.tgl_terbit_nib",isArray:!1,description:"<p>Tanggal Penerbitan NIB (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.tgl_perubahan_nib",isArray:!1,description:"<p>Tanggal Perubahan NIB (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.oss_id",isArray:!1,description:"<p>Oss Id adalah ID yang di Generate Sistem OSS dan Dikirimkan ke K/L/D Bersama Permohonan Nomor Induk Berusaha</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.id_izin",isArray:!1,description:"<p>Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin</p>"},{group:"Parameter",type:"string(12)",optional:!1,field:"dataNIB.kd_izin",isArray:!1,description:"<p>Kode Izin Sistem K/L/D (* Lihat Lampiran 8)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.kd_daerah",isArray:!1,description:"<p>Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf )</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.kewenangan",isArray:!1,description:"<p>Kewenangan (00: Kewenangan Pusat; 01: Kewenangan Provinsi; 02: Kewenangan Kab/Kota)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.jenis_pelaku_usaha",isArray:!1,description:"<p>Jenis Pelaku Usaha (* Lihat Lampiran 18)</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"dataNIB.no_npp",isArray:!1,description:"<p>Nomor Pendaftaraan Perusahaan Untuk BPJS Ketenagakerjaan</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"dataNIB.no_va",isArray:!1,description:"<p>Nomor Pendaftaraan Perusahaan Untuk BPJS Kesehatan</p>"},{group:"Parameter",type:"string(23)",optional:!1,field:"dataNIB.no_wlkp",isArray:!1,description:"<p>Nomor Wajib Lapor Ketenagakerjaan Perusahaan</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.flag_perusahaan",isArray:!1,description:"<p>Flag (Y = Untuk Perusahaan Baru; N = Untuk Perusahaan Lama / Exist)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.flag_ekspor",isArray:!1,description:"<p>Y : Melakukan Aktifikas Ekspor, N : Tidak Melakukan Aktifitas Ekspor</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.flag_impor",isArray:!1,description:"<p>Y : Melakukan Aktifikas Impor, N : Tidak Melakukan Aktifitas Impor</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.jenis_api",isArray:!1,description:"<p>Jenis Angka Pengenal Impor (API) (* Lihat Lampiran 3)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.gabung_negara",isArray:!1,description:"<p>PMA Merupakan Gabungan Negara Atau Tidak (* Y:Gabungan Negara, N: Bukan Gabungan Negara)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.negara_pma_dominan",isArray:!1,description:"<p>Negara Asing Yang Memiliki Modal Mayoritas</p>"},{group:"Parameter",type:"number(20.2)",optional:!1,field:"dataNIB.total_pma",isArray:!1,description:"<p>Total Modal PMA</p>"},{group:"Parameter",type:"number(20.2)",optional:!1,field:"dataNIB.nilai_pma_dominan",isArray:!1,description:"<p>Nilai Modal PMA Dominan</p>"},{group:"Parameter",type:"number(20.2)",optional:!1,field:"dataNIB.nilai_pmdn",isArray:!1,description:"<p>Nilai Modal PMDN</p>"},{group:"Parameter",type:"number(9.2)",optional:!1,field:"dataNIB.persen_pma",isArray:!1,description:"<p>Persentase Modal PMA</p>"},{group:"Parameter",type:"number(9.2)",optional:!1,field:"dataNIB.persen_pmdn",isArray:!1,description:"<p>Persentase Modal PMDN</p>"},{group:"Parameter",type:"number(5)",optional:!1,field:"dataNIB.kd_kawasan",isArray:!1,description:"<p>Kode Kawasan (* Lihat Lampiran 30)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.jenis_kawasan",isArray:!1,description:"<p>Jenis Kawasan (* Lihat Lampiran 21)</p>"},{group:"Parameter",type:"string(5)",optional:!1,field:"dataNIB.versi_pia",isArray:!1,description:"<p>Versi PIA OSS</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.jangka_waktu",isArray:!1,description:"<p>Jangka Waktu (format date : YYYY- MM-DD)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.status_badan_hukum",isArray:!1,description:"<p>Status Badan Hukum (* Lihat Lampiran 12)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.status_penanaman_modal",isArray:!1,description:"<p>Status Penanaman Modal (* Lihat Lampiran 1)</p>"},{group:"Parameter",type:"string(15)",optional:!1,field:"dataNIB.npwp_perseroan",isArray:!1,description:"<p>NPWP Perseroan</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.nama_perseroan",isArray:!1,description:"<p>Nama Perseroan</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.nama_singkatan",isArray:!1,description:"<p>Nama Singkatan Perseroan</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.jenis_perseroan",isArray:!1,description:"<p>Jenis Perseroan (* Lihat Lampiran 2)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.status_perseroan",isArray:!1,description:"<p>Status Perseroan (*Y: Terbuka, N:Tertutup)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.alamat_perseroan",isArray:!1,description:"<p>alamat_perseroan</p>"},{group:"Parameter",type:"string(7)",optional:!1,field:"dataNIB.rt_rw_perseroan",isArray:!1,description:"<p>rt_rw_perseroan</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.kelurahan_perseroan",isArray:!1,description:"<p>kelurahan_perseroan</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.perseroan_daerah_id",isArray:!1,description:"<p>ID Daerah Perseroan (* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(5)",optional:!1,field:"dataNIB.kode_pos_perseroan",isArray:!1,description:"<p>kode_pos_perseroan</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"dataNIB.nomor_telpon_perseroan",isArray:!1,description:"<p>nomor_telpon_perseroan</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.email_perusahaan",isArray:!1,description:"<p>email_perusahaan</p>"},{group:"Parameter",type:"number(20)",optional:!1,field:"dataNIB.dalam_bentuk_uang",isArray:!1,description:"<p>Modal Dalam Bentuk Uang (Valuta : IDR)</p>"},{group:"Parameter",type:"string(50000)",optional:!1,field:"dataNIB.dalam_bentuk_lain",isArray:!1,description:"<p>Modal Dalam Bentuk Lainnya</p>"},{group:"Parameter",type:"number(20)",optional:!1,field:"dataNIB.total_modal_dasar",isArray:!1,description:"<p>Total Modal Dasar (Valuta : IDR)</p>"},{group:"Parameter",type:"number(20)",optional:!1,field:"dataNIB.total_modal_ditempatkan",isArray:!1,description:"<p>Total Modal Ditempatkan (Valuta : IDR)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.flag_umk",isArray:!1,description:"<p>Flag yang menandakan umk atau non umk</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.pemegang_saham",isArray:!0,description:"<p>Data pemegang_saham</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.pemegang_saham.jenis_pemegang_saham",isArray:!1,description:"<p>Jenis Pemegang Saham (* Lihat Lampiran 13)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.pemegang_saham.flag_asing",isArray:!1,description:"<p>Asal Pemegang Saham dari Dalam Negeri / Luar Negeri (Value : Y = asing, N= Bukan Asing)</p>"},{group:"Parameter",type:"number(20)",optional:!1,field:"dataNIB.pemegang_saham.total_modal_pemegang",isArray:!1,description:"<p>Total Modal Pemegang Saham (Valuta : IDR)</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.pemegang_saham.jabatan_pemegang_saham",isArray:!1,description:"<p>Jabatan Pemegang Saham</p>"},{group:"Parameter",type:"string(500)",optional:!1,field:"dataNIB.pemegang_saham.nama_pemegang_saham",isArray:!1,description:"<p>Nama Pemegang Saham</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.pemegang_saham.jns_identitas_pemegang_saham",isArray:!1,description:"<p>Jenis Identitas Pemegang Saham(* Lihat Lampiran 4)</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.pemegang_saham.no_identitas_pemegang_saham",isArray:!1,description:"<p>no_identitas_pemegang_saham</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.pemegang_saham.valid_identitas_pemegang_saham",isArray:!1,description:"<p>Valid / Masa Berlaku Pemegang Saham (Format Date : YYYY-MM- DD)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.pemegang_saham.negara_asal_pemegang_saham",isArray:!1,description:"<p>negara_asal_pemegang_saham</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.pemegang_saham.pengendali_pemegang_saham",isArray:!1,description:"<p>Nama Pengendali Pemegang Saham</p>"},{group:"Parameter",type:"string(15)",optional:!1,field:"dataNIB.pemegang_saham.npwp_pemegang_saham",isArray:!1,description:"<p>npwp_pemegang_saham</p>"},{group:"Parameter",type:"string(1024)",optional:!1,field:"dataNIB.pemegang_saham.alamat_pemegang_saham",isArray:!1,description:"<p>alamat_pemegang_saham</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.pemegang_saham.fax_pemegang_saham",isArray:!1,description:"<p>fax_pemegang_saham</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.pemegang_saham.email_pemegang_saham",isArray:!1,description:"<p>email_pemegang_saham</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.pemegang_saham.flag_pajak_pemegang_saham",isArray:!1,description:"<p>Flag Validasi Pajak Pemegang Saham (* Lihat Lampiran 19)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.pemegang_saham.ket_pajak_pemegang_saham",isArray:!1,description:"<p>Keterangan Validasi Pajak Pemegang Saham</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.penanggung_jwb",isArray:!0,description:"<p>Data penanggung jawab</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.penanggung_jwb.flag_asing",isArray:!1,description:"<p>Asal Penanggung Jawab dari Dalam Negeri / Luar Negeri (Value : Y = asing, N= Bukan Asing)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.penanggung_jwb.jns_identitas_penanggung_jwb",isArray:!1,description:"<p>Jenis Nik Penganggung Jawab (* Lihat Lampiran 4)</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.penanggung_jwb.no_identitas_penanggung_jwb",isArray:!1,description:"<p>no_identitas_penanggung_jwb</p>"},{group:"Parameter",type:"string(500)",optional:!1,field:"dataNIB.penanggung_jwb.nama_penanggung_jwb",isArray:!1,description:"<p>nama_penanggung_jwb</p>"},{group:"Parameter",type:"string(250)",optional:!1,field:"dataNIB.penanggung_jwb.jabatan_penanggung_jwb",isArray:!1,description:"<p>jabatan_penanggung_jwb</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.penanggung_jwb.kebangsaan_penanggung_jwb",isArray:!1,description:"<p>Kebangsaan Penanggung Jawab (* Lihat Lampiran 6)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.penanggung_jwb.negara_asal_penanggung_jwb",isArray:!1,description:"<p>Negara Asal Penanggung Jawab (* Sumber Kodefikasi Negara Mengikuti Standar Unedifact : http://www.unece. org/cefact/locode/s ervice/location )</p>"},{group:"Parameter",type:"string(15)",optional:!1,field:"dataNIB.penanggung_jwb.npwp_penanggung_jwb",isArray:!1,description:"<p>npwp_penanggung_jwb</p>"},{group:"Parameter",type:"string(1024)",optional:!1,field:"dataNIB.penanggung_jwb.alamat_penanggung_jwb",isArray:!1,description:"<p>alamat_penanggung_jwb</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.penanggung_jwb.jalan_penanggung_jwb",isArray:!1,description:"<p>jalan_penanggung_jwb</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.penanggung_jwb.blok_penanggung_jwb",isArray:!1,description:"<p>blok_penanggung_jwb</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.penanggung_jwb.no_penanggung_jwb",isArray:!1,description:"<p>no_penanggung_jwb</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.penanggung_jwb.rt_rw_penanggung_jwb",isArray:!1,description:"<p>rt_rw_penanggung_jwb</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.penanggung_jwb.kelurahan_penanggung_jwb",isArray:!1,description:"<p>kelurahan_penanggung_jwb</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.penanggung_jwb.daerah_id_penanggung_jwb",isArray:!1,description:"<p>ID Daerah Penanggung Jawab (* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(5)",optional:!1,field:"dataNIB.penanggung_jwb.kode_pos_penanggung_jwb",isArray:!1,description:"<p>kode_pos_penanggung_jwb</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.penanggung_jwb.no_telp_penanggung_jwb",isArray:!1,description:"<p>no_telp_penanggung_jwb</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.penanggung_jwb.no_hp_penanggung_jwb",isArray:!1,description:"<p>no_hp_penanggung_jwb</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.penanggung_jwb.no_fax_penanggung_jwb",isArray:!1,description:"<p>no_fax_penanggung_jwb</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.penanggung_jwb.email_penanggung_jwb",isArray:!1,description:"<p>email_penanggung_jwb</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.penanggung_jwb.flag_pajak_penanggung_jwb",isArray:!1,description:"<p>Flag Validasi Pajak Penanggung Jawab (* Lihat Lampiran 19)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.penanggung_jwb.ket_pajak_penanggung_jwb",isArray:!1,description:"<p>Keterangan Validasi Pajak Penanggung Jawab</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.no_pengesahan",isArray:!1,description:"<p>Nomor Pengesahan Akta Dari Kumham</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.tgl_pengesahan",isArray:!1,description:"<p>Tanggal Pengesahan Akta Dari Kumham (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string100()",optional:!1,field:"dataNIB.no_akta_lama",isArray:!1,description:"<p>Nomor Akta Lama Sebelum Perubahan</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.tgl_akta_lama",isArray:!1,description:"<p>Tanggal Akta Lama Sebelum Perubahan (format date :YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.no_pengesahan_lama",isArray:!1,description:"<p>Nomor Pengesahan Akta Lama Sebelum Perubahan Dari Kumham</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.tgl_pengesahan_lama",isArray:!1,description:"<p>Tanggal Pengesahan Akta Lama Sebelum Perubahan Dari Kumham (format date : YYYY-MM- DD)</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.legalitas",isArray:!0,description:"<p>Data legalitas</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.legalitas.jenis_legal",isArray:!1,description:"<p>Jenis Legal Perusahaan (* Lihat Lampiran 7)</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.legalitas.no_legal",isArray:!1,description:"<p>Nomor Legal Perusahaan</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.legalitas.tgl_legal",isArray:!1,description:"<p>Tanggal Legal Perusahaan (format date : YYYY-MM- DD)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.legalitas.alamat_notaris",isArray:!1,description:"<p>alamat_notaris</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.legalitas.nama_notaris",isArray:!1,description:"<p>nama_notaris</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.legalitas.telepon_notaris",isArray:!1,description:"<p>telepon_notaris</p>"},{group:"Parameter",type:"object",optional:!1,field:"dataNIB.data_rptka",isArray:!1,description:"<p>data_rptka</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_rptka.jenis_rptka",isArray:!1,description:"<p>Jenis Flag RPTKA *( 01 : Baru, 02:Perubahan)</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"dataNIB.data_rptka.no_rptka",isArray:!1,description:"<p>No Bacode RPTKA</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_rptka.rptka_awal",isArray:!1,description:"<p>Masa Berlaku Dari Tanggal(format date : YYYY-MM- DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_rptka.rptka_akhir",isArray:!1,description:"<p>Masa Berlaku Sampai Tanggal(format date : YYYY-MM- DD)</p>"},{group:"Parameter",type:"number(20.2)",optional:!1,field:"dataNIB.data_rptka.rptka_gaji",isArray:!1,description:"<p>Gaji Tenaga Asing</p>"},{group:"Parameter",type:"string(11)",optional:!1,field:"dataNIB.data_rptka.jumlah_tka_rptka",isArray:!1,description:"<p>Jumlah Tenaga Kerja Asing (TKA) dalam Rencana Penggunaan Tenaga Kerja Asing (RPTKA)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_rptka.jangka_penggunaan_waktu",isArray:!1,description:"<p>Jangka Waktu Penggunaan Tenaga Kerja Asing (TKA) dalam Izin Rencana Penggunaan Tenaga Kerja Asing (RPTKA) (format date :YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_rptka.jangka_waktu_permohonan_rptka",isArray:!1,description:"<p>Jangka Waktu Permohonan RPTKA (dalam hitungan bulan)</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan",isArray:!0,description:"<p>Data RPTKA jabatan</p>"},{group:"Parameter",type:"string(11)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.id_jabatan",isArray:!1,description:"<p>ID Jabatan Tenaga Kerja Asing berdasarkan https://jdih.kemna ker.go.id/data_puu/KEP247_MENX_2011.pdf</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.jabatan",isArray:!1,description:"<p>Nama Jabatan</p>"},{group:"Parameter",type:"string(11)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.jumlah",isArray:!1,description:"<p>Jumlah Orang Yang Memiliki Jabatan</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.tgl_mulai",isArray:!1,description:"<p>Tanggal Mulai Jabatan (format date: YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.tgl_selesai",isArray:!1,description:"<p>Tanggal Selesai Jabatan (format date: YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.keterangan",isArray:!1,description:"<p>keterangan</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping",isArray:!0,description:"<p>rptka_tki_pendamping</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.id_jabatan",isArray:!1,description:"<p>Id jabatan</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.id_pendamping",isArray:!1,description:"<p>Id TKI Pendamping</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.nama",isArray:!1,description:"<p>Nama TKI Pendamping</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.nik",isArray:!1,description:"<p>Nomor NIK TKI Pendamping</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.jabatan",isArray:!1,description:"<p>Nama Jabatan TKI Pendamping</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.hp",isArray:!1,description:"<p>Nomor HP TKI Pendamping</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.email",isArray:!1,description:"<p>Email TKI Pendampiag</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.foto",isArray:!1,description:"<p>Foto TKI Pendamping Attachment File dalam Bentukbentuk base64 dengan format (data:image/jpeg;b ase64,string() ENCODE IMAGE)</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.pendidikan_min",isArray:!1,description:"<p>Tingkat Pendidikan Minimal TKI Pendamping</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.sertifikat",isArray:!1,description:"<p>Sertifikat Kompetensi TKI Pendamping</p>"},{group:"Parameter",type:"number(11)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.pengalaman_kerja",isArray:!1,description:"<p>Pengalaman Kerja TKI Pendamping (dalam tahun)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.keterangan",isArray:!1,description:"<p>keterangan</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_rptka.rptka_negara",isArray:!0,description:"<p>rptka_negara</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_rptka.rptka_negara.id_negara",isArray:!1,description:"<p>Negara Asal Tenaga Kerja Asing(* Sumber Kodefikasi Negara Mengikuti Standar Unedifact : http://www.unece. org/cefact/locode/s ervice/location )</p>"},{group:"Parameter",type:"number(11)",optional:!1,field:"dataNIB.data_rptka.rptka_negara.jumlah",isArray:!1,description:"<p>Jumlah Tenaga Kerja Asing (TKA) dalam Rencana Penggunaan Tenaga Kerja Asing (RPTKA)</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_rptka.rptka_lokasi",isArray:!0,description:"<p>Data RPTKA lokasi</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_rptka.rptka_lokasi.lokasi_id",isArray:!1,description:"<p>ID Daerah Penanggung Jawab (* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf )</p>"},{group:"Parameter",type:"number(11)",optional:!1,field:"dataNIB.data_rptka.rptka_lokasi.jumlah",isArray:!1,description:"<p>Jumlah Tenaga Kerja Asing (TKA) dalam Rencana Penggunaan Tenaga Kerja Asing (RPTKA)</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_proyek",isArray:!0,description:"<p>data_proyek</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_proyek.id_proyek",isArray:!1,description:"<p>id_proyek</p>"},{group:"Parameter",type:"string(26)",optional:!1,field:"dataNIB.data_proyek.nomor_proyek",isArray:!1,description:"<p>Nomor Permohonan Proyek</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_proyek.uraian_usaha",isArray:!1,description:"<p>Uraian Usaha Proyek</p>"},{group:"Parameter",type:"number(10)",optional:!1,field:"dataNIB.data_proyek.jumlah_tki_l",isArray:!1,description:"<p>Jumlah Tenaga Kerja Indonesia (TKI) Laki -Laki</p>"},{group:"Parameter",type:"number(10)",optional:!1,field:"dataNIB.data_proyek.jumlah_tki_p",isArray:!1,description:"<p>Jumlah Tenaga Kerja Indonesia (TKI) Perempuan</p>"},{group:"Parameter",type:"number(10)",optional:!1,field:"dataNIB.data_proyek.jumlah_tka_l",isArray:!1,description:"<p>Jumlah Tenaga Kerja Asing (TKA) Laki -Laki</p>"},{group:"Parameter",type:"number(10)",optional:!1,field:"dataNIB.data_proyek.jumlah_tka_p",isArray:!1,description:"<p>Jumlah Tenaga Kerja Asing (TKA) Perempuan</p>"},{group:"Parameter",type:"string(7)",optional:!1,field:"dataNIB.data_proyek.kbli",isArray:!1,description:"<p>Kode KBLI (* Menggunakan Kode KBLI Tahun 2020)</p>"},{group:"Parameter",type:"string(3)",optional:!1,field:"dataNIB.data_proyek.sektor",isArray:!1,description:"<p>Sektor Usaha Berdasarkan KBLI (* Lihat Lampiran 20)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.memiliki_menguasai",isArray:!1,description:"<p>Sudah Memiliki atar Menguasai Lahan (Value : Y = Sudah Memiliki atau Menguasai Lahan, N = Belum Memiliki atau Menguasai Lahan)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.jenis_lokasi",isArray:!1,description:"<p>Lokasi Berada dalam Lintas Administratif (Value : Y = Berada Dalam Lintas Administrasi, N = Bukan Berada Dalam Lintas Administrasi)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.status_tanah",isArray:!1,description:"<p>Status Kepemilikan Tanah (* Lihat Lampiran 5)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_proyek.luas_tanah",isArray:!1,description:"<p>Luas Bidang tanah</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.satuan_luas_tanah",isArray:!1,description:"<p>Satuan Luas Tanah (*Lihat Lampiran 17)</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_proyek.pembelian_pematang_tanah",isArray:!1,description:"<p>Nilai Pembelian Pematang Tanah (Valuta:IDR)</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_proyek.bangunan_gedung",isArray:!1,description:"<p>Nilai Bangunan Gedung (Valuta:IDR)</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_proyek.mesin_peralatan",isArray:!1,description:"<p>Nilai Mesin Peralatan (Valuta:IDR)</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_proyek.mesin_peralatan_usd",isArray:!1,description:"<p>Nilai Mesin Peralatan dalam USD</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_proyek.investasi_lain",isArray:!1,description:"<p>Investasi Lainnya</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_proyek.sub_jumlah",isArray:!1,description:"<p>Jumlah Asset (Valuta:IDR)</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_proyek.modal_kerja",isArray:!1,description:"<p>Nilai Modal Kerja (Valuta:IDR)</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_proyek.jumlah_investasi",isArray:!1,description:"<p>Nilai Jumlah Investasi (Valuta:IDR)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_proyek.tanggal_kurs",isArray:!1,description:"<p>Tanggal Kurs (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_proyek.nilai_kurs",isArray:!1,description:"<p>Nilai Kurs</p>"},{group:"Parameter",type:"number(11)",optional:!1,field:"dataNIB.data_proyek.kd_kawasan",isArray:!1,description:"<p>Kode Kawasan (* Lihat Lampiran 30)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.jawab_lokasi_b",isArray:!1,description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal33 Ayat 1 Point B</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.jawab_lokasi_c",isArray:!1,description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal33 Ayat 1 Point C</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.jawab_lokasi_d",isArray:!1,description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal33 Ayat 1 Point D</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.jawab_lokasi_e",isArray:!1,description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal33 Ayat 1 Point E</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.jawab_lokasi_f",isArray:!1,description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal33 Ayat 1 Point F</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.jawab_lokasi_g",isArray:!1,description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal33 Ayat 1 Point G</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.flag_perluasan",isArray:!1,description:"<p>Proyek Merupakan Perluasan/Pengemb angan Usaha Atau Bukan (Value : Y = Proses Perluasan/Pengemb angan Usaha, N = Bukan Proses Perluasan/Pengemb angan Usaha)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.flag_cabang",isArray:!1,description:"<p>Proyek Sebagai Kantor Cabang Atau Bukan (Value : Y = Sebagai Kantor Cabang, N = Bukan Sebagai Kantor Cabang)</p>"},{group:"Parameter",type:"string(15)",optional:!1,field:"dataNIB.data_proyek.npwp_cabang",isArray:!1,description:"<p>NPWP Kantor Cabang</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_proyek.nama_cabang",isArray:!1,description:"<p>Nama Kantor Cabang / Proyek</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.jenis_identitas_pj",isArray:!1,description:"<p>Jenis Identitas Penanggung Jawab Proyek (* Lihat Lampiran 4)</p>"},{group:"Parameter",type:"string(16)",optional:!1,field:"dataNIB.data_proyek.no_identitas_pj",isArray:!1,description:"<p>No Identitas Penanggung Jawab Proyek</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.data_proyek.nama_pj",isArray:!1,description:"<p>Nama Penanggung Jawab Proyek</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.status_proyek",isArray:!1,description:"<p>Status Proyek(* Lihat Lampiran 22)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.jenis_proyek",isArray:!1,description:"<p>Jenis Proyek (* Lihat Lampiran 26)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_proyek.nama_kegiatan",isArray:!1,description:"<p>Nama Proyek / Kegiatan Proyek, Untuk Perseorangan Digunakan Untuk Mencatat Nama Dagangannya Misal (UD. Percobaan Jaya)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.flag_merger",isArray:!1,description:"<p>Flag Proyek Hasil Merger atau Bukan (Y : Hasil Merger, N: Bukan Hasil Merger)</p>"},{group:"Parameter",type:"string(15)",optional:!1,field:"dataNIB.data_proyek.npwp_perseroan_merger",isArray:!1,description:"<p>NPWP Perusahaan Merging</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_proyek.nama_perseroan_merger",isArray:!1,description:"<p>Nama Perusahaan Merging</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_proyek.skala_usaha",isArray:!1,description:"<p>Skala Usaha Perusahaan</p>"},{group:"Parameter",type:"string(5)",optional:!1,field:"dataNIB.data_proyek.skala_resiko",isArray:!1,description:"<p>Skala Resiko Perusahaan</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_proyek.deskripsi_kegiatan",isArray:!1,description:"<p>Deskripsi kegiatan</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek",isArray:!0,description:"<p>data_lokasi_proyek</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.id_proyek_lokasi",isArray:!1,description:"<p>id_proyek_lokasi</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.proyek_daerah_id",isArray:!1,description:"<p>Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(3)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.kd_kawasan",isArray:!1,description:"<p>Kode Kawasan (* Lihat Lampiran di https://oss.go.id/ oss/#home/portal/lstKawasan)</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.alamat_usaha",isArray:!1,description:"<p>Alamat Kegiatan Proyek / Usaha</p>"},{group:"Parameter",type:"string(6)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.id_kegiatan",isArray:!1,description:"<p>Id Kegiatan Usaha Berdasarkan RDTR Digital</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.response_kegiatan",isArray:!1,description:"<p>Response Kegiatan Usaha Berdasarkan Validasi Kegiatan RDTR Digital</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.jenis_kawasan",isArray:!1,description:"<p>Jenis Kawasan (* Lihat Lampiran 16)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.jenis_lokasi",isArray:!1,description:"<p>Jenis Lokasi Lintas Administratif atau Tidak (01 : Lintas Administratif, 02 : Tidak Lintas Administratif)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.status_lokasi",isArray:!1,description:"<p>Status Lokasi(* Lihat Lampiran 25)</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.data_lokasi_proyek",isArray:!0,description:"<p>data_lokasi_proyek</p>"},{group:"Parameter",type:"string(11)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.data_lokasi_proyek.serial",isArray:!1,description:"<p>Serial Koordinat</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.data_lokasi_proyek.lat_lng",isArray:!1,description:"<p>Koordinat Latitude &amp; Longitude</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek",isArray:!0,description:"<p>data_posisi_proyek</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek.id_proyek_posisi",isArray:!1,description:"<p>id_proyek_posisi</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek.id_proyek_lokasi",isArray:!1,description:"<p>id_proyek_lokasi</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek.posisi_lokasi",isArray:!1,description:"<p>posisi_lokasi</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk",isArray:!0,description:"<p>data_proyek_produk</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.id_produk",isArray:!1,description:"<p>ID / Kode Produk</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.id_proyek",isArray:!1,description:"<p>ID / Kode Proyek</p>"},{group:"Parameter",type:"string(7)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.kbli",isArray:!1,description:"<p>Kode KBLI (* Menggunakan Kode KBLI Tahun 2020)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.id_bidang_usaha",isArray:!1,description:"<p>ID Bidang Usaha Berdasarkan Kodefikasi Data Negatif Investasi (DNI) (* Lihat Lampiran 15)</p>"},{group:"Parameter",type:"string(1024)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.jenis_produksi",isArray:!1,description:"<p>Rencana Produksi Yang Dihasilkan</p>"},{group:"Parameter",type:"number(20.2)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.kapasitas",isArray:!1,description:"<p>Kapasitas produksi suatu produk</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.satuan",isArray:!1,description:"<p>Satuan Dari Kapasitas Produksi</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.merk_dagang",isArray:!1,description:"<p>Merk Dagang</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.pemegang_haki",isArray:!1,description:"<p>Pemegang Hak Cipta</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.pemegang_paten",isArray:!1,description:"<p>Pemegang Hak Paten</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.pi_nomor",isArray:!1,description:"<p>Nomor Pendaftaran Penanaman Modal Untuk Case Grand Father Clause (GFC)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.pi_tanggal",isArray:!1,description:"<p>Tanggal Pendaftaran Penanaman Modal Untuk Case Grand Father Clause (GFC) format date : YYYY- MM-DD</p>"},{group:"Parameter",type:"string(16)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.pi_npwp",isArray:!1,description:"<p>NPWP Pendaftaran Penanaman Modal Untuk Case Grand Father Clause (GFC)</p>"},{group:"Parameter",type:"string(9)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.id_kbli_ta",isArray:!1,description:"<p>Penanda bahwa cakupan produk untuk kebutuhan tax allowance</p>"},{group:"Parameter",type:"number(3.2)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.tkdn",isArray:!1,description:"<p>Tingkat Kandungan Dalam Negeri</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_dni",isArray:!0,description:"<p>data_dni</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_dni.kd_dni",isArray:!1,description:"<p>Kodefikasi Data Negatif Investasi (DNI) (* Lihat Lampiran 15)</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_checklist",isArray:!0,description:"<p>data_checklist</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_checklist.id_produk",isArray:!1,description:"<p>id_produk</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_checklist.id_proyek",isArray:!1,description:"<p>id_proyek</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_checklist.id_izin",isArray:!1,description:"<p>Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin</p>"},{group:"Parameter",type:"string(3)",optional:!1,field:"dataNIB.data_checklist.jenis_izin",isArray:!1,description:"<p>Jenis Perizinan (* Lihat Lampiran 27)</p>"},{group:"Parameter",type:"string(13)",optional:!1,field:"dataNIB.data_checklist.kd_izin",isArray:!1,description:"<p>Kode Izin Sistem K/L/D (* service getDataReferensi kode :8)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_checklist.kd_daerah",isArray:!1,description:"<p>Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri -  Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_checklist.nama_izin",isArray:!1,description:"<p>nama_izin</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.data_checklist.instansi",isArray:!1,description:"<p>Nama instansi</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_checklist.id_bidang_spesifik",isArray:!1,description:"<p>ID Bidang Spesifik</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"dataNIB.data_checklist.bidang_spesifik",isArray:!1,description:"<p>Uraian Bidang Spesifik</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_checklist.id_kewenangan",isArray:!1,description:"<p>ID Kewenangan</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_checklist.parameter_kewenangan",isArray:!1,description:"<p>Parameter Kewenangan Izin</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_checklist.kewenangan",isArray:!1,description:"<p>Kewenangan (00: Kewenangan Pusat; 01: Kewenangan Provinsi; 02: Kewenangan Kab/Kota)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_checklist.flag_checklist",isArray:!1,description:"<p>Flag Checklist Komitmen (* Lihat Lampiran 28)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_checklist.flag_transaksional",isArray:!1,description:"<p>Flag : Y/N, Flag Izin Komersial/Operasio nal Diajukan Transaksional (Bisa Mengajukan Berulang)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_checklist.flag_perpanjangan",isArray:!1,description:"<p>Flag : Y/N, Flag Bahwa Izin Usaha ini Adalah Hasil Perpanjangan Dari Izin Usaha Yang Terbit Sebelum OSS</p>"},{group:"Parameter",type:"string(150)",optional:!1,field:"dataNIB.data_checklist.no_izin",isArray:!1,description:"<p>Nomor Izin Yang Terbit dan Masih Berlaku Sebelum OSS Diterapkan</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_checklist.tgl_izin",isArray:!1,description:"<p>Tanggal Izin Yang Terbit dan Masih Berlaku Sebelum OSS Diterapkan (* Format:YYYY-MM- DD)</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"dataNIB.data_checklist.file_izin",isArray:!1,description:"<p>Attachment File Izin Yang Terbit dan Masih Berlaku Sebelum OSS Diterapkan Dalam Bentuk File PDF/Image Berupa Link (* Ukuran File Maks: 2MB)</p>"},{group:"Parameter",type:"string(15)",optional:!1,field:"dataNIB.data_checklist.kd_dokumen",isArray:!1,description:"<p>Kode izin lingkungan (hanya untuk izin lingkungan)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_checklist.nm_dokumen",isArray:!1,description:"<p>Nama dokumen lingkungan (Hanya untuk izin lingkungan)</p>"},{group:"Parameter",type:"string(5)",optional:!1,field:"dataNIB.data_checklist.kbli_konversi",isArray:!1,description:"<p>KBLI 2020 hasil konversi dari KBLI 2017 (jika ada)</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_checklist.data_persyaratan",isArray:!0,description:"<p>data_persyaratan</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_checklist.data_persyaratan.id_syarat",isArray:!1,description:"<p>Id / Kode Persyaratan</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.data_checklist.data_persyaratan.no_dokumen",isArray:!1,description:"<p>Nomor Dokumen Persyaratan</p>"},{group:"Parameter",type:"string(8)",optional:!1,field:"dataNIB.data_checklist.data_persyaratan.tgl_dokumen",isArray:!1,description:"<p>Tanggal Dokumen Persyaratan (format date : YYYY-MM- DD)</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"dataNIB.data_checklist.data_persyaratan.file_dokumen",isArray:!1,description:"<p>Attachment File Izin dalam Bentuk File PDF/Image Berupa Link (* Ukuran File Maks: 2MB)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_checklist.data_persyaratan.keterangan",isArray:!1,description:"<p>Keterangan Dokumen Persyaratan</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.jenis_id_user_proses",isArray:!1,description:"<p>Kode Jenis Identitas (* Lihat Lampiran 4)</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.no_id_user_proses",isArray:!1,description:"<p>No Identitas Pemroses NIB</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.nama_user_proses",isArray:!1,description:"<p>Nama User Pemroses NIB</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.email_user_proses",isArray:!1,description:"<p>Email User Pemroses NIB</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.hp_user_proses",isArray:!1,description:"<p>No HP Pemroses NIB</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.alamat_user_proses",isArray:!1,description:"<p>Alamat Pemroses NIB</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.jns_kelamin_user_proses",isArray:!1,description:"<p>Jenis Kelamin Pemroses NIB (L : Laki-Laki, P : Perempuan)</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.tempat_lahir_user_proses",isArray:!1,description:"<p>Tempat Lahir Pemroses NIB</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.tgl_lahir_user_proses",isArray:!1,description:"<p>Tanggal Lahir User Pemroses (format date : YYYY-MM- DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.daerah_id_user_proses",isArray:!1,description:"<p>ID Daerah User Pemroses(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.rt_rw_user_proses",isArray:!1,description:"<p>RT RW Pemroses NIB</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.agama_user_proses",isArray:!1,description:"<p>Agama Pemroses NIB</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.status_perkawinan_user_proses",isArray:!1,description:"<p>Status Perkawinan Pemroses NIB</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.pekerjaan_user_proses",isArray:!1,description:"<p>Pekerjaan Pemroses NIB</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.status_nib",isArray:!1,description:"<p>Status Penerbitan NIB (* Lihat Lampiran 14)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.tipe_dokumen",isArray:!1,description:"<p>Tipe Dokumen (9:Original, 5:Update, 3:Pencabutan, 4:Pembatalan)</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"Object",optional:!1,field:"responreceiveNIB",isArray:!1,description:"<p>Response receive NIB</p>"},{group:"200",type:"String(1)",optional:!1,parentNode:{path:"responreceiveNIB",field:"responreceiveNIB",type:"Object",isArray:!1},field:"responreceiveNIB.status",isArray:!1,description:"<p>Status (1: TRUE; 2: FALSE)</p>"},{group:"200",type:"String(255)",optional:!1,parentNode:{path:"responreceiveNIB",field:"responreceiveNIB",type:"Object",isArray:!1},field:"responreceiveNIB.keterangan",isArray:!1,description:"<p>Keterangan Respon</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
{
	 "responreceiveNIB": {
		 "status": "",
		 "keterangan": ""
	 }
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",isArray:!1,description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",isArray:!1,description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",isArray:!1,description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",isArray:!1,description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",isArray:!1,description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
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
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",isArray:!1,description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"Token",isArray:!1,description:"<p>SHA1(USERNAME+PASSWORD+NPWP+DATE(Ymd))</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "Token": "OSS000qw13242628gssssss812345654709820180514"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"dataNIB",isArray:!1,description:"<p>dataNIB</p>"},{group:"Parameter",type:"string(13)",optional:!1,field:"dataNIB.nib",isArray:!1,description:"<p>Nomor Induk Berusaha</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.tgl_pengajuan_nib",isArray:!1,description:"<p>Tanggal Pengajuan NIB (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.tgl_terbit_nib",isArray:!1,description:"<p>Tanggal Penerbitan NIB (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.tgl_perubahan_nib",isArray:!1,description:"<p>Tanggal Perubahan NIB (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.oss_id",isArray:!1,description:"<p>Oss Id adalah ID yang di Generate Sistem OSS dan Dikirimkan ke K/L/D Bersama Permohonan Nomor Induk Berusaha</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.id_izin",isArray:!1,description:"<p>Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin</p>"},{group:"Parameter",type:"string(12)",optional:!1,field:"dataNIB.kd_izin",isArray:!1,description:"<p>Kode Izin Sistem K/L/D (* Lihat Lampiran 8)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.kd_daerah",isArray:!1,description:"<p>Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.kewenangan",isArray:!1,description:"<p>00: Kewenangan Pusat;\xA0 01: Kewenangan Provinsi; 02: Kewenangan Kab/Kota</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.jenis_pelaku_usaha",isArray:!1,description:"<p>Jenis Pelaku Usaha (* Lihat Lampiran 18)</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"dataNIB.no_npp",isArray:!1,description:"<p>Nomor Pendaftaraan Perusahaan Untuk BPJS Ketenagakerjaan</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"dataNIB.no_va",isArray:!1,description:"<p>Nomor Pendaftaraan Perusahaan Untuk BPJS Kesehatan</p>"},{group:"Parameter",type:"string(23)",optional:!1,field:"dataNIB.no_wlkp",isArray:!1,description:"<p>Nomor Wajib Lapor Ketenagakerjaan Perusahaan</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.flag_perusahaan",isArray:!1,description:"<p>Flag :Y = Untuk Perusahaan Baru,N = Untuk Perusahaan Lama / Exist</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.flag_ekspor",isArray:!1,description:"<p>Y : Melakukan Aktifikas Ekspor, N : Tidak Melakukan Aktifitas Ekspor</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.flag_impor",isArray:!1,description:"<p>Y : Melakukan Aktifikas Impor, N : Tidak Melakukan Aktifitas Impor</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.jenis_api",isArray:!1,description:"<p>Jenis Angka Pengenal Impor (API) (* Lihat Lampiran 3)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.gabung_negara",isArray:!1,description:"<p>PMA Merupakan Gabungan Negara Atau Tidak (* Y:Gabungan Negara, N: Bukan Gabungan Negara)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.negara_pma_dominan",isArray:!1,description:"<p>Negara Asing Yang Memiliki Modal Mayoritas</p>"},{group:"Parameter",type:"number(20.2)",optional:!1,field:"dataNIB.total_pma",isArray:!1,description:"<p>Total Modal PMA</p>"},{group:"Parameter",type:"number(20.2)",optional:!1,field:"dataNIB.nilai_pma_dominan",isArray:!1,description:"<p>Nilai Modal PMA Dominan</p>"},{group:"Parameter",type:"number(20.2)",optional:!1,field:"dataNIB.nilai_pmdn",isArray:!1,description:"<p>Nilai Modal PMDN</p>"},{group:"Parameter",type:"number(9.2)",optional:!1,field:"dataNIB.persen_pma",isArray:!1,description:"<p>Persentase Modal PMA</p>"},{group:"Parameter",type:"number(9.2)",optional:!1,field:"dataNIB.persen_pmdn",isArray:!1,description:"<p>Persentase Modal PMDN</p>"},{group:"Parameter",type:"number(5)",optional:!1,field:"dataNIB.kd_kawasan",isArray:!1,description:"<p>Kode Kawasan (* Lihat Lampiran di https://oss.go.id/oss/#home/portal/lstKawasan)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.jenis_kawasan",isArray:!1,description:"<p>Jenis Kawasan (* Lihat Lampiran 21)</p>"},{group:"Parameter",type:"string(5)",optional:!1,field:"dataNIB.versi_pia",isArray:!1,description:"<p>Versi PIA OSS</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.jangka_waktu",isArray:!1,description:"<p>Jangka Waktu (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.status_badan_hukum",isArray:!1,description:"<p>Status Badan Hukum (* Lihat Lampiran 12)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.status_penanaman_modal",isArray:!1,description:"<p>Status Penanaman Modal (* Lihat Lampiran 1)</p>"},{group:"Parameter",type:"string(15)",optional:!1,field:"dataNIB.npwp_perseroan",isArray:!1,description:"<p>NPWP Perseroan</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.nama_perseroan",isArray:!1,description:"<p>Nama Perseroan</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.nama_singkatan",isArray:!1,description:"<p>Nama Singkatan Perseroan</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.jenis_perseroan",isArray:!1,description:"<p>Jenis Perseroan (* Lihat Lampiran 2)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.status_perseroan",isArray:!1,description:"<p>Status Perseroan (*Y: Terbuka, N:Tertutup)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.alamat_perseroan",isArray:!1,description:"<p>Alamat Perseroan</p>"},{group:"Parameter",type:"string(7)",optional:!1,field:"dataNIB.rt_rw_perseroan",isArray:!1,description:"<p>Rt Rw Perseroan</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.kelurahan_perseroan",isArray:!1,description:"<p>Kelurahan Perseroan</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.perseroan_daerah_id",isArray:!1,description:"<p>ID Daerah Perseroan (* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(5)",optional:!1,field:"dataNIB.kode_pos_perseroan",isArray:!1,description:"<p>Kode Pos Perseroan</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"dataNIB.nomor_telpon_perseroan",isArray:!1,description:"<p>Nomor Telepon Perseroan</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.email_perusahaan",isArray:!1,description:"<p>Email Perusahaan</p>"},{group:"Parameter",type:"number(20.0)",optional:!1,field:"dataNIB.dalam_bentuk_uang",isArray:!1,description:"<p>Modal Dalam Bentuk Uang (Valuta : IDR)</p>"},{group:"Parameter",type:"string(50000)",optional:!1,field:"dataNIB.dalam_bentuk_lain",isArray:!1,description:"<p>Modal Dalam Bentuk Lainnya</p>"},{group:"Parameter",type:"number(20.0)",optional:!1,field:"dataNIB.total_modal_dasar",isArray:!1,description:"<p>Total Modal Dasar (Valuta : IDR)</p>"},{group:"Parameter",type:"number(20.0)",optional:!1,field:"dataNIB.total_modal_ditempatkan",isArray:!1,description:"<p>Total Modal Ditempatkan (Valuta : IDR)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.flag_umk",isArray:!1,description:"<p>flag_umk</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.pemegang_saham",isArray:!0,description:"<p>Data pemegang saham</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.pemegang_saham.jenis_pemegang_saham",isArray:!1,description:"<p>Jenis Pemegang Saham (* Lihat Lampiran 13)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.pemegang_saham.flag_asing",isArray:!1,description:"<p>Asal Pemegang Saham dari Dalam Negeri / Luar Negeri (Value : Y = asing, N = Bukan Asing)</p>"},{group:"Parameter",type:"string(20.0)",optional:!1,field:"dataNIB.pemegang_saham.total_modal_pemegang",isArray:!1,description:"<p>Total Modal Pemegang Saham (Valuta : IDR)</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.pemegang_saham.jabatan_pemegang_saham",isArray:!1,description:"<p>Jabatan Pemegang Saham</p>"},{group:"Parameter",type:"string(500)",optional:!1,field:"dataNIB.pemegang_saham.nama_pemegang_saham",isArray:!1,description:"<p>Nama Pemegang Saham</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.pemegang_saham.jns_identitas_pemegang_saham",isArray:!1,description:"<p>Jenis Identitas Pemegang Saham (* Lihat Lampiran 4)</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.pemegang_saham.no_identitas_pemegang_saham",isArray:!1,description:"<p>Nomor Identitas Pemegang Saham</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.pemegang_saham.valid_identitas_pemegang_saham",isArray:!1,description:"<p>Valid / Masa Berlaku Pemegang Saham (Format Date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.pemegang_saham.negara_asal_pemegang_saham",isArray:!1,description:"<p>Negara Asal Pemegang Saham</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.pemegang_saham.pengendali_pemegang_saham",isArray:!1,description:"<p>Nama Pengendali Pemegang Saham</p>"},{group:"Parameter",type:"string(15)",optional:!1,field:"dataNIB.pemegang_saham.npwp_pemegang_saham",isArray:!1,description:"<p>NPWP Pemegang Saham</p>"},{group:"Parameter",type:"string(1024)",optional:!1,field:"dataNIB.pemegang_saham.alamat_pemegang_saham",isArray:!1,description:"<p>Alamat Pemegang Saham</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.pemegang_saham.fax_pemegang_saham",isArray:!1,description:"<p>Fax Pemegang Saham</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.pemegang_saham.email_pemegang_saham",isArray:!1,description:"<p>Email Pemegang Saham</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.pemegang_saham.flag_pajak_pemegang_saham",isArray:!1,description:"<p>Flag Validasi Pajak Pemegang Saham (* Lihat Lampiran 19)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.pemegang_saham.ket_pajak_pemegang_saham",isArray:!1,description:"<p>Keterangan Validasi Pajak Pemegang Saham</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.penanggung_jwb",isArray:!0,description:"<p>penanggung_jwb</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.penanggung_jwb.flag_asing",isArray:!1,description:"<p>Asal Penanggung Jawab dari Dalam Negeri / Luar Negeri (Value : Y = asing, N = Bukan Asing)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.penanggung_jwb.jns_identitas_penanggung_jwb",isArray:!1,description:"<p>Jenis Nik Penganggung Jawab (* Lihat Lampiran 4)</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.penanggung_jwb.no_identitas_penanggung_jwb",isArray:!1,description:"<p>Nomor Identitas Penanggung Jawab</p>"},{group:"Parameter",type:"string(500)",optional:!1,field:"dataNIB.penanggung_jwb.nama_penanggung_jwb",isArray:!1,description:"<p>Nama Penganggung Jawab</p>"},{group:"Parameter",type:"string(250)",optional:!1,field:"dataNIB.penanggung_jwb.jabatan_penanggung_jwb",isArray:!1,description:"<p>Jabatan Penanggung Jawab</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.penanggung_jwb.kebangsaan_penanggung_jwb",isArray:!1,description:"<p>Kebangsaan Penanggung Jawab (* Lihat Lampiran 6)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.penanggung_jwb.negara_asal_penanggung_jwb",isArray:!1,description:"<p>Negara Asal Penanggung Jawab (* Sumber Kodefikasi Negara Mengikuti Standar Unedifact : http://www.unec e.org/cefact/loco de/service/locati on )</p>"},{group:"Parameter",type:"string(15)",optional:!1,field:"dataNIB.penanggung_jwb.npwp_penanggung_jwb",isArray:!1,description:"<p>NPWP Penanggung Jawab</p>"},{group:"Parameter",type:"string(1024)",optional:!1,field:"dataNIB.penanggung_jwb.alamat_penanggung_jwb",isArray:!1,description:"<p>Alamat Penanggung Jawab</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.penanggung_jwb.jalan_penanggung_jwb",isArray:!1,description:"<p>Alamat Jalan Penanggung Jawab</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.penanggung_jwb.blok_penanggung_jwb",isArray:!1,description:"<p>Alamat Blok Penanggung Jawab</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.penanggung_jwb.no_penanggung_jwb",isArray:!1,description:"<p>Alamat Nomor Penanggung Jawab</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.penanggung_jwb.rt_rw_penanggung_jwb",isArray:!1,description:"<p>RT RW Penanggung Jawab</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.penanggung_jwb.kelurahan_penanggung_jwb",isArray:!1,description:"<p>Kelurahan Penanggung Jawab</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.penanggung_jwb.daerah_id_penanggung_jwb",isArray:!1,description:"<p>ID Daerah Penanggung Jawab (* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(5)",optional:!1,field:"dataNIB.penanggung_jwb.kode_pos_penanggung_jwb",isArray:!1,description:"<p>Kode Pos Penanggung Jawab</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.penanggung_jwb.no_telp_penanggung_jwb",isArray:!1,description:"<p>Nomor Telepon Penanggung Jawab</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.penanggung_jwb.no_hp_penanggung_jwb",isArray:!1,description:"<p>Nomor Handphone Penanggung Jawab</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.penanggung_jwb.no_fax_penanggung_jwb",isArray:!1,description:"<p>Nomor Fax Penanggung Jawab</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.penanggung_jwb.email_penanggung_jwb",isArray:!1,description:"<p>Email Penanggung Jawab</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.penanggung_jwb.flag_pajak_penanggung_jwb",isArray:!1,description:"<p>Flag Validasi Pajak Penanggung Jawab (* Lihat Lampiran 19)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.penanggung_jwb.ket_pajak_penanggung_jwb",isArray:!1,description:"<p>Keterangan Validasi Pajak Penanggung Jawab</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.no_pengesahan",isArray:!1,description:"<p>Nomor Pengesahan Akta Dari Kumham</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.tgl_pengesahan",isArray:!1,description:"<p>Tanggal Pengesahan Akta Dari Kumham (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.no_akta_lama",isArray:!1,description:"<p>Nomor Akta Lama Sebelum Perubahan</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.tgl_akta_lama",isArray:!1,description:"<p>Tanggal Akta Lama Sebelum Perubahan (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.no_pengesahan_lama",isArray:!1,description:"<p>Nomor Pengesahan Akta Lama Sebelum Perubahan Dari Kumham</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.tgl_pengesahan_lama",isArray:!1,description:"<p>Tanggal Pengesahan Akta Lama Sebelum Perubahan Dari Kumham (format date : YYYY-MM- DD)</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.legalitas",isArray:!0,description:"<p>legalitas</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.legalitas.jenis_legal",isArray:!1,description:"<p>Jenis Legal Perusahaan (* Lihat Lampiran 7)</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.legalitas.no_legal",isArray:!1,description:"<p>Nomor Legal Perusahaan</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.legalitas.tgl_legal",isArray:!1,description:"<p>Tanggal Legal Perusahaan (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.legalitas.alamat_notaris",isArray:!1,description:"<p>Alamat Notaris</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.legalitas.nama_notaris",isArray:!1,description:"<p>Nama Notaris</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.legalitas.telepon_notaris",isArray:!1,description:"<p>Telepon Notaris</p>"},{group:"Parameter",type:"object",optional:!1,field:"dataNIB.data_rptka",isArray:!1,description:"<p>data_rptka</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_rptka.jenis_rptka",isArray:!1,description:"<p>Jenis Flag RPTKA ( 01 : Baru, 02: Perubahan)</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"dataNIB.data_rptka.no_rptka",isArray:!1,description:"<p>No Bacode RPTKA</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_rptka.rptka_awal",isArray:!1,description:"<p>Masa Berlaku Dari Tanggal(format date : YYYY-MM- DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_rptka.rptka_akhir",isArray:!1,description:"<p>Masa Berlaku Sampai Tanggal(format date : YYYY-MM- DD)</p>"},{group:"Parameter",type:"number(20.2)",optional:!1,field:"dataNIB.data_rptka.rptka_gaji",isArray:!1,description:"<p>Gaji Tenaga Asing</p>"},{group:"Parameter",type:"number(11)",optional:!1,field:"dataNIB.data_rptka.jumlah_tka_rptka",isArray:!1,description:"<p>Jumlah Tenaga Kerja Asing (TKA) dalam Rencana Penggunaan Tenaga Kerja Asing (RPTKA)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_rptka.jangka_penggunaan_waktu",isArray:!1,description:"<p>Jangka Waktu Penggunaan Tenaga Kerja Asing (TKA) dalam Izin Rencana Penggunaan Tenaga Kerja Asing (RPTKA) (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_rptka.jangka_waktu_permohonan_rptka",isArray:!1,description:"<p>Jangka Waktu Permohonan RPTKA (dalam hitungan bulan)</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan",isArray:!0,description:"<p>rptka_jabatan</p>"},{group:"Parameter",type:"string(11)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.id_jabatan",isArray:!1,description:"<p>ID Jabatan Tenaga Kerja Asing berdasarkan https://jdih.kemnaker.go.id/data_puu/KEP247_MENX_2011.pdf</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.jabatan",isArray:!1,description:"<p>Nama Jabatan</p>"},{group:"Parameter",type:"string(11)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.jumlah",isArray:!1,description:"<p>Jumlah Orang Yang Memiliki Jabatan</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.tgl_mulai",isArray:!1,description:"<p>Tanggal Mulai Jabatan (format date : YYYY-MM- DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.tgl_selesai",isArray:!1,description:"<p>Tanggal Selesai Jabatan (format date : YYYY-MM- DD)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.keterangan",isArray:!1,description:"<p>Keterangan</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping",isArray:!0,description:"<p>rptka_tki_pendamping</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.id_jabatan",isArray:!1,description:"<p>Id Jabatan</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.id_pendamping",isArray:!1,description:"<p>Id TKI Pendamping</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.nama",isArray:!1,description:"<p>Nama TKI Pendamping</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.nik",isArray:!1,description:"<p>Nomor NIK TKI Pendamping</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.jabatan",isArray:!1,description:"<p>Nama Jabatan TKI Pendamping</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.hp",isArray:!1,description:"<p>Nomor HP TKI Pendamping</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.email",isArray:!1,description:"<p>Email TKI Pendampiag</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.foto",isArray:!1,description:"<p>Foto TKI Pendamping Attachment File dalam Bentukbentuk base64 dengan format (data:image/jpeg;base64,string() ENCODE IMAGE)</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.pendidikan_min",isArray:!1,description:"<p>Tingkat Pendidikan Minimal TKI Pendamping</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.sertifikat",isArray:!1,description:"<p>Sertifikat Kompetensi TKI Pendamping</p>"},{group:"Parameter",type:"string(11)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.pengalaman_kerja",isArray:!1,description:"<p>Pengalaman Kerja TKI Pendamping (dalam tahun)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.keterangan",isArray:!1,description:"<p>Keterangan</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_rptka.rptka_negara",isArray:!0,description:"<p>rptka_negara</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_rptka.rptka_negara.id_negara",isArray:!1,description:"<p>Negara Asal Tenaga Kerja Asing(* Sumber Kodefikasi Negara Mengikuti Standar Unedifact : http://www.unec e.org/cefact/loco de/service/locati on )</p>"},{group:"Parameter",type:"string(11)",optional:!1,field:"dataNIB.data_rptka.rptka_negara.jumlah",isArray:!1,description:"<p>Jumlah Tenaga Kerja Asing (TKA) dalam Rencana Penggunaan Tenaga Kerja Asing (RPTKA)</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_rptka.rptka_lokasi",isArray:!0,description:"<p>rptka_lokasi</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_rptka.rptka_lokasi.lokasi_id",isArray:!1,description:"<p>ID Daerah Penanggung Jawab (* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(11)",optional:!1,field:"dataNIB.data_rptka.rptka_lokasi.jumlah",isArray:!1,description:"<p>Jumlah Tenaga Kerja Asing (TKA) dalam Rencana Penggunaan Tenaga Kerja Asing (RPTKA)</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_proyek",isArray:!0,description:"<p>data_proyek</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_proyek.id_proyek",isArray:!1,description:"<p>ID / Kode Proyek</p>"},{group:"Parameter",type:"string(26)",optional:!1,field:"dataNIB.data_proyek.nomor_proyek",isArray:!1,description:"<p>Nomor Permohonan Proyek</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_proyek.uraian_usaha",isArray:!1,description:"<p>Uraian Usaha Proyek</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_proyek.jumlah_tki_l",isArray:!1,description:"<p>Jumlah Tenaga Kerja Indonesia (TKI) Laki -Laki</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_proyek.jumlah_tki_p",isArray:!1,description:"<p>Jumlah Tenaga Kerja Indonesia (TKI) Perempuan</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_proyek.jumlah_tka_l",isArray:!1,description:"<p>Jumlah Tenaga Kerja Asing (TKA) Laki -Laki</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_proyek.jumlah_tka_p",isArray:!1,description:"<p>Jumlah Tenaga Kerja Asing (TKA) Perempuan</p>"},{group:"Parameter",type:"string(7)",optional:!1,field:"dataNIB.data_proyek.kbli",isArray:!1,description:"<p>Kode KBLI (* Menggunakan Kode KBLI Tahun 2020)</p>"},{group:"Parameter",type:"string(3)",optional:!1,field:"dataNIB.data_proyek.sektor",isArray:!1,description:"<p>Sektor Usaha Berdasarkan KBLI (* Lihat Lampiran 20)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.memiliki_menguasai",isArray:!1,description:"<p>Sudah Memiliki atar Menguasai Lahan (Value : Y = Sudah Memiliki atau Menguasai Lahan, N = Belum Memiliki atau Menguasai Lahan)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.jenis_lokasi",isArray:!1,description:"<p>Lokasi Berada dalam Lintas Administratif (Value : Y = Berada Dalam Lintas Administrasi, N = Bukan Berada Dalam Lintas Administrasi)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.status_tanah",isArray:!1,description:"<p>Status Kepemilikan Tanah (* Lihat Lampiran 5)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_proyek.luas_tanah",isArray:!1,description:"<p>Luas Bidang tanah</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.satuan_luas_tanah",isArray:!1,description:"<p>Satuan Luas Tanah (*Lihat Lampiran 17)</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_proyek.pembelian_pematang_tanah",isArray:!1,description:"<p>Nilai Pembelian Pematang Tanah (Valuta:IDR)</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_proyek.bangunan_gedung",isArray:!1,description:"<p>Nilai Bangunan Gedung (Valuta:IDR)</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_proyek.mesin_peralatan",isArray:!1,description:"<p>Nilai Mesin Peralatan (Valuta:IDR)</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_proyek.mesin_peralatan_usd",isArray:!1,description:"<p>Nilai Mesin Peralatan dalam USD</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_proyek.investasi_lain",isArray:!1,description:"<p>Investasi Lainnya</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_proyek.sub_jumlah",isArray:!1,description:"<p>Jumlah Asset (Valuta:IDR)</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_proyek.modal_kerja",isArray:!1,description:"<p>Nilai Modal Kerja (Valuta:IDR)</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_proyek.jumlah_investasi",isArray:!1,description:"<p>Nilai Jumlah Investasi (Valuta:IDR)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_proyek.tanggal_kurs",isArray:!1,description:"<p>Tanggal Kurs (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_proyek.nilai_kurs",isArray:!1,description:"<p>Nilai Kurs</p>"},{group:"Parameter",type:"number(11)",optional:!1,field:"dataNIB.data_proyek.kd_kawasan",isArray:!1,description:"<p>Kode Kawasan (* Lihat Lampiran di https://oss.go.id/oss/#home/portal/lstKawasan)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.jawab_lokasi_b",isArray:!1,description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point B</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.jawab_lokasi_c",isArray:!1,description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point C</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.jawab_lokasi_d",isArray:!1,description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point D</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.jawab_lokasi_e",isArray:!1,description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point E</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.jawab_lokasi_f",isArray:!1,description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point F</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.jawab_lokasi_g",isArray:!1,description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point G</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.flag_perluasan",isArray:!1,description:"<p>Proyek Merupakan Perluasan/Penge mbangan Usaha Atau Bukan (Value : Y = Proses Perluasan/Penge mbangan Usaha, N = Bukan Proses Perluasan/Penge mbangan Usaha)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.flag_cabang",isArray:!1,description:"<p>Proyek Sebagai Kantor Cabang Atau Bukan (Value : Y = Sebagai Kantor Cabang, N = Bukan Sebagai Kantor Cabang)</p>"},{group:"Parameter",type:"string(15)",optional:!1,field:"dataNIB.data_proyek.npwp_cabang",isArray:!1,description:"<p>NPWP Kantor Cabang</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_proyek.nama_cabang",isArray:!1,description:"<p>Nama Kantor Cabang / Proyek</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.jenis_identitas_pj",isArray:!1,description:"<p>Jenis Identitas Penanggung Jawab Proyek (* Lihat Lampiran 4)</p>"},{group:"Parameter",type:"string(16)",optional:!1,field:"dataNIB.data_proyek.no_identitas_pj",isArray:!1,description:"<p>No Identitas Penanggung Jawab Proyek</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.data_proyek.nama_pj",isArray:!1,description:"<p>Nama Penanggung Jawab Proyek</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.status_proyek",isArray:!1,description:"<p>Status Proyek(* Lihat Lampiran 22)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.jenis_proyek",isArray:!1,description:"<p>Jenis Proyek (* Lihat Lampiran 26)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_proyek.nama_kegiatan",isArray:!1,description:"<p>Nama Proyek / Kegiatan Proyek, Untuk Perseorangan Digunakan Untuk Mencatat Nama Dagangannya Misal (UD. Percobaan Jaya)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.flag_merger",isArray:!1,description:"<p>Flag Proyek Hasil Merger atau Bukan (Y : Hasil Merger, N: Bukan Hasil Merger)</p>"},{group:"Parameter",type:"string(15)",optional:!1,field:"dataNIB.data_proyek.npwp_perseroan_merger",isArray:!1,description:"<p>NPWP Perusahaan Merging</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_proyek.nama_perseroan_merger",isArray:!1,description:"<p>Nama Perusahaan Merging</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_proyek.jumlah_lantai_bangunan",isArray:!1,description:"<p>Jumlah Lantai Bangunan</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_proyek.luas_lantai_bangunan",isArray:!1,description:"<p>Luas Lantai Bangunan</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.flag_psn",isArray:!1,description:"<p>Flag Proyek Strategis Nasional (Y/N)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.pasal_181_a",isArray:!1,description:"<p>Questionaire terkait PP 5/2021 pasal 181 poin 1.a</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.file_pasal_181_a",isArray:!1,description:"<p>File Izin Lokasi KEK/KI</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.pasal_181_b",isArray:!1,description:"<p>Questionaire terkait PP 5/2021 pasal 181 poin 1.b</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.file_pasal_181_b",isArray:!1,description:"<p>File Izin Lokasi yang sudah dimiliki</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.pasal_181_c",isArray:!1,description:"<p>Questionaire terkait PP 5/2021 pasal 181 poin 1.c</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.pasal_181_d",isArray:!1,description:"<p>Questionaire terkait PP 5/2021 pasal 181 poin 1.d</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.pasal_181_3",isArray:!1,description:"<p>Questionaire terkait PP 5/2021 pasal 181 poin 3</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_proyek.flag_obyek_vital_nasional",isArray:!1,description:"<p>Flag Obyek Vital Nasional</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_proyek.nama_perairan",isArray:!1,description:"<p>Nama Lokasi Perairan</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_proyek.kedalaman",isArray:!1,description:"<p>Kedalaman Perairan</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"dataNIB.data_proyek.file_rencana_teknis",isArray:!1,description:"<p>file_rencana_teknis</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek",isArray:!0,description:"<p>data_lokasi_proyek</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.id_proyek_lokasi",isArray:!1,description:"<p>ID / Kode Lokasi Proyek</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.proyek_daerah_id",isArray:!1,description:"<p>Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(3)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.kd_kawasan",isArray:!1,description:"<p>Kode Kawasan (* Lihat Lampiran di https://oss.go.id/oss/#home/portal/lstKawasan)</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.alamat_usaha",isArray:!1,description:"<p>Alamat Kegiatan Proyek / Usaha</p>"},{group:"Parameter",type:"string(6)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.id_kegiatan",isArray:!1,description:"<p>Id Kegiatan Usaha Berdasarkan RDTR Digital</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.response_kegiatan",isArray:!1,description:"<p>Response Kegiatan Usaha Berdasarkan Validasi Kegiatan RDTR Digital</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.jenis_kawasan",isArray:!1,description:"<p>Jenis Kawasan (* Lihat Lampiran 16)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.jenis_lokasi",isArray:!1,description:"<p>Jenis Lokasi Lintas Administratif atau Tidak (01 : Lintas Administratif, 02 : Tidak Lintas Administratif)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.status_lokasi",isArray:!1,description:"<p>Status Lokasi(* Lihat Lampiran 25)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.data_lokasi_proyek_shp",isArray:!1,description:"<p>data_lokasi_proyek_shp</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.data_lokasi_proyek",isArray:!0,description:"<p>data_lokasi_proyek</p>"},{group:"Parameter",type:"number(11)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.data_lokasi_proyek.serial",isArray:!1,description:"<p>Serial Koordinat</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.data_lokasi_proyek.lat_lng",isArray:!1,description:"<p>Koordinat Latitude &amp; Longitude</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek",isArray:!0,description:"<p>data_posisi_proyek</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek.id_proyek_posisi",isArray:!1,description:"<p>ID / Kode Posisi Proyek</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek.id_proyek_lokasi",isArray:!1,description:"<p>ID / Kode Lokasi Proyek</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek.posisi_lokasi",isArray:!1,description:"<p>Posisi Lokasi (* Lihat Lampiran 24)</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk",isArray:!0,description:"<p>data_proyek_produk</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.id_produk",isArray:!1,description:"<p>ID / Kode Produk</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.id_proyek",isArray:!1,description:"<p>ID / Kode Proyek</p>"},{group:"Parameter",type:"string(7)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.kbli",isArray:!1,description:"<p>Kode KBLI (* Menggunakan Kode KBLI Tahun 2020)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.id_bidang_usaha",isArray:!1,description:"<p>ID Bidang Usaha Berdasarkan Kodefikasi Data Negatif Investasi (DNI) (* Lihat Lampiran 15)</p>"},{group:"Parameter",type:"string(1024)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.jenis_produksi",isArray:!1,description:"<p>Rencana Produksi Yang Dihasilkan</p>"},{group:"Parameter",type:"number(20.2)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.kapasitas",isArray:!1,description:"<p>Kapasitas produksi suatu produk</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.satuan",isArray:!1,description:"<p>Satuan Dari Kapasitas Produksi</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.merk_dagang",isArray:!1,description:"<p>Merk Dagang</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.pemegang_haki",isArray:!1,description:"<p>Pemegang Hak Cipta</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.pemegang_paten",isArray:!1,description:"<p>Pemegang Hak Paten</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.pi_nomor",isArray:!1,description:"<p>Nomor Pendaftaran Penanaman Modal Untuk Case Grand Father Clause (GFC)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.pi_tanggal",isArray:!1,description:"<p>Tanggal Pendaftaran Penanaman Modal Untuk Case Grand Father Clause (GFC) format date : YYYY-MM- DD</p>"},{group:"Parameter",type:"string(16)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.pi_npwp",isArray:!1,description:"<p>NPWP Pendaftaran Penanaman Modal Untuk Case Grand Father Clause (GFC)</p>"},{group:"Parameter",type:"string(9)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.id_kbli_ta",isArray:!1,description:"<p>Penanda bahwa cakupan produk untuk kebutuhan tax allowance</p>"},{group:"Parameter",type:"number(3.2)",optional:!1,field:"dataNIB.data_proyek.data_proyek_produk.tkdn",isArray:!1,description:"<p>Tingkat Kandungan Dalam Negeri</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_dni",isArray:!0,description:"<p>data_dni</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_dni.kd_dni",isArray:!1,description:"<p>Kodefikasi Data Negatif Investasi (DNI) (* Lihat Lampiran 15)</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_checklist",isArray:!0,description:"<p>data_checklist</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_checklist.id_produk",isArray:!1,description:"<p>ID Produk</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_checklist.id_proyek",isArray:!1,description:"<p>ID / Kode Proyek</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_checklist.id_izin",isArray:!1,description:"<p>Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin</p>"},{group:"Parameter",type:"string(3)",optional:!1,field:"dataNIB.data_checklist.jenis",isArray:!1,description:"<p>_izin	Jenis Perizinan (* Lihat Lampiran 27)</p>"},{group:"Parameter",type:"string(13)",optional:!1,field:"dataNIB.data_checklist.kd_izin",isArray:!1,description:"<p>Kode Izin Sistem K/L/D (* https://services.oss.go.id/getListIzi n)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_checklist.kd_daerah",isArray:!1,description:"<p>Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_checklist.nama_izin",isArray:!1,description:"<p>Nama Izin</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.data_checklist.instansi",isArray:!1,description:"<p>Nama Instansi</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_checklist.id_bidang_spesifik",isArray:!1,description:"<p>ID Bidang Spesifik</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"dataNIB.data_checklist.bidang_spesifik",isArray:!1,description:"<p>Uraian Bidang Spesifik</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIB.data_checklist.id_kewenangan",isArray:!1,description:"<p>ID Kewenangan</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_checklist.parameter_kewenangan",isArray:!1,description:"<p>Parameter Kewenangan Izin</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.data_checklist.kewenangan",isArray:!1,description:"<p>00: Kewenangan Pusat; 01: Kewenangan Provinsi; 02: Kewenangan Kab/Kota</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_checklist.flag_checklist",isArray:!1,description:"<p>Flag Checklist Komitmen (* Lihat Lampiran 28)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_checklist.flag_transaksional",isArray:!1,description:"<p>Flag : Y/N, Flag Izin Komersial/Operas ional Diajukan Transaksional (Bisa Mengajukan Berulang)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.data_checklist.flag_perpanjangan",isArray:!1,description:"<p>Flag : Y/N, Flag Bahwa Izin Usaha ini Adalah Hasil Perpanjangan Dari Izin Usaha Yang Terbit Sebelum OSS</p>"},{group:"Parameter",type:"string(150)",optional:!1,field:"dataNIB.data_checklist.no_izin",isArray:!1,description:"<p>Nomor Izin Yang Terbit dan Masih Berlaku Sebelum OSS Diterapkan</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.data_checklist.tgl_izin",isArray:!1,description:"<p>Tanggal Izin Yang Terbit dan Masih Berlaku Sebelum OSS Diterapkan (* Format:YYYY- MM-DD)</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"dataNIB.data_checklist.file_izin",isArray:!1,description:"<p>Attachment File Izin Yang Terbit dan Masih Berlaku Sebelum OSS Diterapkan Dalam Bentuk File PDF/Image Berupa Link (* Ukuran File Maks: 2MB)</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIB.data_checklist.data_persyaratan",isArray:!0,description:"<p>data_persyaratan</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.data_checklist.data_persyaratan.id_syarat",isArray:!1,description:"<p>Id / Kode Persyaratan</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.data_checklist.data_persyaratan.no_dokumen",isArray:!1,description:"<p>Nomor Dokumen Persyaratan</p>"},{group:"Parameter",type:"string(8)",optional:!1,field:"dataNIB.data_checklist.data_persyaratan.tgl_dokumen",isArray:!1,description:"<p>Tanggal Dokumen Persyaratan (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"dataNIB.data_checklist.data_persyaratan.file_dokumen",isArray:!1,description:"<p>Attachment File Izin dalam Bentuk File PDF/Image Berupa Link (* Ukuran File Maks: 2MB)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.data_checklist.data_persyaratan.keterangan",isArray:!1,description:"<p>Keterangan Dokumen Persyaratan</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.jenis_id_user_proses",isArray:!1,description:"<p>Kode Jenis Identitas (* Lihat Lampiran 4)</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.no_id_user_proses",isArray:!1,description:"<p>No Identitas Pemroses NIB</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.nama_user_proses",isArray:!1,description:"<p>Nama User Pemroses NIB</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.email_user_proses",isArray:!1,description:"<p>Email User Pemroses NIB</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIB.hp_user_proses",isArray:!1,description:"<p>No HP Pemroses NIB</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIB.alamat_user_proses",isArray:!1,description:"<p>Alamat Pemroses NIB</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.jns_kelamin_user_proses",isArray:!1,description:"<p>Jenis Kelamin Pemroses NIB (L : Laki-Laki, P : Perempuan)</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIB.tempat_lahir_user_proses",isArray:!1,description:"<p>Tempat Lahir Pemroses NIB</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.tgl_lahir_user_proses",isArray:!1,description:"<p>Tanggal Lahir User Pemroses (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.daerah_id_user_proses",isArray:!1,description:"<p>ID Daerah User Pemroses(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIB.rt_rw_user_proses",isArray:!1,description:"<p>RT RW Pemroses NIB</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.agama_user_proses",isArray:!1,description:"<p>Agama Pemroses NIB</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.status_perkawinan_user_proses",isArray:!1,description:"<p>Status Perkawinan Pemroses NIB</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIB.pekerjaan_user_proses",isArray:!1,description:"<p>Pekerjaan Pemroses NIB</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIB.status_nib",isArray:!1,description:"<p>Status Penerbitan NIB (* Lihat Lampiran 14)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIB.tipe_dokumen",isArray:!1,description:"<p>Tipe Dokumen (9:Original, 5:Update, 3:Pencabutan, 4:Pembatalan)</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"Object",optional:!1,field:"responreceiveNIBKKPR",isArray:!1,description:"<p>Response receive NIB KKPR</p>"},{group:"200",type:"String(1)",optional:!1,parentNode:{path:"responreceiveNIBKKPR",field:"responreceiveNIBKKPR",type:"Object",isArray:!1},field:"responreceiveNIBKKPR.status",isArray:!1,description:"<p>Status respon (1: TRUE; 2: FALSE)</p>"},{group:"200",type:"String(255)",optional:!1,parentNode:{path:"responreceiveNIBKKPR",field:"responreceiveNIBKKPR",type:"Object",isArray:!1},field:"responreceiveNIBKKPR.keterangan",isArray:!1,description:"<p>Keterangan Respon</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
{
	 "responreceiveNIBKKPR": {
		 "status": "",
		 "keterangan": ""
	 }
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",isArray:!1,description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",isArray:!1,description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",isArray:!1,description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",isArray:!1,description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",isArray:!1,description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
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
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",isArray:!1,description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"Token",isArray:!1,description:"<p>SHA1(USERNAME+PASSWORD+NPWP+DATE(Ymd))</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "Token": "OSS000qw13242628gssssss812345654709820180514"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"dataNIBPSE",isArray:!1,description:"<p>dataNIBPSE</p>"},{group:"Parameter",type:"string(13)",optional:!1,field:"dataNIBPSE.nib",isArray:!1,description:"<p>Nomor Induk Berusaha</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIBPSE.tgl_pengajuan_nib",isArray:!1,description:"<p>Tanggal Pengajuan NIB (* Date Format YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIBPSE.tgl_terbit_nib",isArray:!1,description:"<p>Tanggal Terbit NIB (* Date Format YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIBPSE.tgl_perubahan_nib",isArray:!1,description:"<p>Tanggal Perubahan NIB (* Date Format YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIBPSE.oss_id",isArray:!1,description:"<p>Oss ID adalah ID yang di Generate Sistem OSS dan Dikirimkan ke L/L/D Bersama Permohonan Nomor Induk Berusaha (NIB)</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIBPSE.id_izin",isArray:!1,description:"<p>Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS</p>"},{group:"Parameter",type:"string(12)",optional:!1,field:"dataNIBPSE.kd_izin",isArray:!1,description:"<p>Kode Izin Sistem K/L/D</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIBPSE.kd_daerah",isArray:!1,description:"<p>Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf )</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIBPSE.kewenangan",isArray:!1,description:"<p>00 : Kewenangan Pusat; 02 : Kewenangan Provinsi; 03 : Kewenangan Kab/Kota</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIBPSE.versi_pia",isArray:!1,description:"<p>Versi PIA</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBPSE.nama_prinsipal",isArray:!1,description:"<p>Nama Prinsipal</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBPSE.alamat_prinsipal",isArray:!1,description:"<p>Alamat Prinsipal</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"dataNIBPSE.id_negara_prinsipal",isArray:!1,description:"<p>ID Negara Prinsipal (* Sumber Kodefikasi Negara Mengikuti Standar Unedifact : http://www.unece.org/cefact/locode/ service/location )</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIBPSE.nomor_telepon_prinsipal",isArray:!1,description:"<p>Nomor telepon prinsipal</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIBPSE.email_prinsipal",isArray:!1,description:"<p>Email prinsipal</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIBPSE.no_akta_pendirian",isArray:!1,description:"<p>Nomor Akta Pendirian</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBPSE.tgl_akta_pendirian",isArray:!1,description:"<p>Tanggal Akta Pendirian</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBPSE.file_akta_prinsipal",isArray:!1,description:"<p>File Akta Prinsipal</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIBPSE.file_akta_domisili",isArray:!1,description:"<p>File Akta Domisili</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIBPSE.penanggung_jwb",isArray:!0,description:"<p>penanggung_jwb</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIBPSE.penanggung_jwb.no_identitas_penanggung_jwb",isArray:!1,description:"<p>Nomor Identitas Penanggung Jawab</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIBPSE.penanggung_jwb.nama_penanggung_jwb",isArray:!1,description:"<p>Nama Penanggung Jawab</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIBPSE.penanggung_jwb.negara_asal_penanggung_jwb",isArray:!1,description:"<p>Negara Asal Penanggung Jawab</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBPSE.penanggung_jwb.alamat_penanggung_jwb",isArray:!1,description:"<p>Alamat Penanggung Jawab</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIBPSE.penanggung_jwb.daerah_id_penanggung_jwb",isArray:!1,description:"<p>Daerah ID Penanggung Jawab</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"dataNIBPSE.penanggung_jwb.no_telp_penanggung_jwb",isArray:!1,description:"<p>No Telepon Penanggung Jawab</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIBPSE.penanggung_jwb.email_penanggung_jwb",isArray:!1,description:"<p>Email Penanggung Jawab</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIBPSE.data_proyek",isArray:!0,description:"<p>data_proyek</p>"},{group:"Parameter",type:"string(30)",optional:!1,field:"dataNIBPSE.data_proyek.id_proyek",isArray:!1,description:"<p>ID Proyek</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIBPSE.data_proyek.nama_sistem_elektronik",isArray:!1,description:"<p>Nama Sistem Elektronik</p>"},{group:"Parameter",type:"string(3)",optional:!1,field:"dataNIBPSE.data_proyek.sektor_sistem",isArray:!1,description:"<p>Sektor</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBPSE.data_proyek.url_sistem",isArray:!1,description:"<p>URL system</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIBPSE.data_proyek.domain",isArray:!1,description:"<p>Domain system</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBPSE.data_proyek.deskripsi_model_bisnis",isArray:!1,description:"<p>Deskripsi model bisnis</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBPSE.data_proyek.deskripsi_singkat_fungsi_sistem",isArray:!1,description:"<p>Deskripsi singkat fungsi system</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBPSE.data_proyek.uraian_fungsi_sistem",isArray:!1,description:"<p>Uraian fungsi system</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBPSE.data_proyek.deskripsi_singkat_proses_bisnis_sistem",isArray:!1,description:"<p>Deskripsi singkat proses bisnis system</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBPSE.data_proyek.uraian_proses_bisnis_sistem",isArray:!1,description:"<p>Uraian proses bisnis system</p>"},{group:"Parameter",type:"string(30)",optional:!1,field:"dataNIBPSE.data_proyek.jumlah_pengguna_indonesia",isArray:!1,description:"<p>Jumlah pengguna Indonesia</p>"},{group:"Parameter",type:"string(30)",optional:!1,field:"dataNIBPSE.data_proyek.nilai_transaksi_indonesia",isArray:!1,description:"<p>Nilai transaksi indonesia</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIBPSE.data_checklist",isArray:!0,description:"<p>data_checklist</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIBPSE.data_checklist.id_proyek",isArray:!1,description:"<p>ID Proyek OSS</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIBPSE.data_checklist.id_izin",isArray:!1,description:"<p>Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS</p>"},{group:"Parameter",type:"string(13)",optional:!1,field:"dataNIBPSE.data_checklist.kd_izin",isArray:!1,description:"<p>Kode Izin Sistem K/L/D</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIBPSE.data_checklist.kd_daerah",isArray:!1,description:"<p>Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBPSE.data_checklist.nama_izin",isArray:!1,description:"<p>Nama Izin</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIBPSE.data_checklist.instansi",isArray:!1,description:"<p>Nama Instansi</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIBPSE.data_checklist.kewenangan",isArray:!1,description:"<p>00: Kewenangan Pusat; 01: Kewenangan Provinsi; 02: Kewenangan Kab/Kota</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIBPSE.data_checklist.flag_checklist",isArray:!1,description:"<p>Flag Checklist</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIBPSE.jenis_id_user_proses",isArray:!1,description:"<p>Kode Jenis Identitas (* Lihat Lampiran 4)</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIBPSE.no_id_user_proses",isArray:!1,description:"<p>No Identitas Pemroses NIB</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIBPSE.nama_user_proses",isArray:!1,description:"<p>Nama User Pemroses NIB</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIBPSE.email_user_proses",isArray:!1,description:"<p>Email User Pemroses NIB</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIBPSE.hp_user_proses",isArray:!1,description:"<p>No HP Pemroses NIB</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBPSE.alamat_user_proses",isArray:!1,description:"<p>Alamat Pemroses NIB</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIBPSE.jns_kelamin_user_proses",isArray:!1,description:"<p>Jenis Kelamin Pemroses NIB (L : Laki- Laki, P : Perempuan)</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIBPSE.tempat_lahir_user_proses",isArray:!1,description:"<p>Tempat Lahir Pemroses NIB</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIBPSE.tgl_lahir_user_proses",isArray:!1,description:"<p>Tanggal Lahir User Pemroses (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIBPSE.daerah_id_user_proses",isArray:!1,description:"<p>ID Daerah User Pemroses(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf )</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIBPSE.rt_rw_user_proses",isArray:!1,description:"<p>RT RW Pemroses NIB</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIBPSE.agama_user_proses",isArray:!1,description:"<p>Agama Pemroses NIB</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIBPSE.status_perkawinan_user_proses",isArray:!1,description:"<p>Status Perkawinan Pemroses NIB</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIBPSE.pekerjaan_user_proses",isArray:!1,description:"<p>Pekerjaan Pemroses NIB</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIBPSE.status_nib",isArray:!1,description:"<p>Status Penerbitan NIB (* Lihat Lampiran 14)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIBPSE.tipe_dokumen",isArray:!1,description:"<p>Tipe Dokumen (9:Original, 5:Update, 3:Pencabutan, 4:Pembatalan)</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"Object",optional:!1,field:"responreceiveNIBPSE",isArray:!1,description:"<p>Response receive NIB PSE</p>"},{group:"200",type:"String(1)",optional:!1,parentNode:{path:"responreceiveNIBPSE",field:"responreceiveNIBPSE",type:"Object",isArray:!1},field:"responreceiveNIBPSE.status",isArray:!1,description:"<p>Status Respon (1 : TRUE; 2 : FALSE)</p>"},{group:"200",type:"String(255)",optional:!1,parentNode:{path:"responreceiveNIBPSE",field:"responreceiveNIBPSE",type:"Object",isArray:!1},field:"responreceiveNIBPSE.keterangan",isArray:!1,description:"<p>Keterangan Respon</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
{
	 "responreceiveNIBPSE": {
		 "status": "",
		 "keterangan": ""
	 }
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",isArray:!1,description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",isArray:!1,description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",isArray:!1,description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",isArray:!1,description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",isArray:!1,description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
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
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",isArray:!1,description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"Token",isArray:!1,description:"<p>SHA1(USERNAME+PASSWORD+NPWP+DATE(Ymd))</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "Token": "OSS000qw13242628gssssss812345654709820180514"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"dataNIBSTPW",isArray:!1,description:"<p>dataNIBSTPW</p>"},{group:"Parameter",type:"string(13)",optional:!1,field:"dataNIBSTPW.nib",isArray:!1,description:"<p>Nomor Induk Berusaha</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIBSTPW.tgl_pengajuan_nib",isArray:!1,description:"<p>Tanggal Pengajuan NIB (* Date Format YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIBSTPW.tgl_terbit_nib",isArray:!1,description:"<p>Tanggal Terbit NIB (* Date Format YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIBSTPW.tgl_perubahan_nib",isArray:!1,description:"<p>Tanggal Perubahan NIB (* Date Format YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIBSTPW.oss_id",isArray:!1,description:"<p>Oss ID adalah ID yang di Generate Sistem OSS dan Dikirimkan ke L/L/D Bersama Permohonan Nomor Induk Berusaha (NIB)</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIBSTPW.id_izin",isArray:!1,description:"<p>Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin</p>"},{group:"Parameter",type:"string(12)",optional:!1,field:"dataNIBSTPW.kd_izin",isArray:!1,description:"<p>Kode Izin Sistem K/L/D (* Lihat Lampiran 8)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIBSTPW.kd_daerah",isArray:!1,description:"<p>Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf )</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIBSTPW.kewenangan",isArray:!1,description:"<p>Kewenangan (00 : Kewenangan Pusat; 02 : Kewenangan Provinsi; 03 : Kewenangan Kab/Kota)</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIBSTPW.jenis_pelaku_usaha",isArray:!1,description:"<p>Jenis Pelaku Usaha (* Lihat Lampiran 18)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBSTPW.nama_pj",isArray:!1,description:"<p>Nama Penanggung Jawab</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBSTPW.alamat_pj",isArray:!1,description:"<p>Alamat Penanggung Jawab</p>"},{group:"Parameter",type:"string(20)",optional:!1,field:"dataNIBSTPW.paspor_pj",isArray:!1,description:"<p>Nomor Paspor Penanggung Jawab</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIBSTPW.email_pj",isArray:!1,description:"<p>Email Penanggung Jawab</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIBSTPW.asal_negara_pj",isArray:!1,description:"<p>Negara Asal Penanggung Jawab (* Sumber Kodefikasi Negara Mengikuti Standar Unedifact : http://www.unece.org/cefact/locode/ service/location )</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIBSTPW.telp_pj",isArray:!1,description:"<p>Telpon Penanggung Jawab</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBSTPW.nama_perusahaan_ln",isArray:!1,description:"<p>Nama Prinsipal</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBSTPW.alamat_perusahaan_ln",isArray:!1,description:"<p>Alamat Prinsipal</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIBSTPW.negara_perusahaan_ln",isArray:!1,description:"<p>Negara Prinsipal (* Sumber Kodefikasi Negara Mengikuti Standar Unedifact:http://www.unece.org/cefact/locode/ service/location )</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIBSTPW.telp_perusahaan_ln",isArray:!1,description:"<p>Telpon Prinsipal</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIBSTPW.jangka_waktu",isArray:!1,description:"<p>Jangka Waktu (* Date Format YYYY- MM-DD)</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"dataNIBSTPW.file_prospektus",isArray:!1,description:"<p>Attachment File Prospektus dalam Bentuk File PDF/Image Berupa Link (* Ukuran File Maks: 2MB)</p>"},{group:"Parameter",type:"string(5)",optional:!1,field:"dataNIBSTPW.versi_pia",isArray:!1,description:"<p>Versi PIA OSS</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"dataNIBSTPW.data_checklist",isArray:!0,description:"<p>data_checklist</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIBSTPW.data_checklist.id_izin",isArray:!1,description:"<p>Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin</p>"},{group:"Parameter",type:"string(3)",optional:!1,field:"dataNIBSTPW.data_checklist.jenis_izin",isArray:!1,description:"<p>Jenis Perizinan (* Lihat Lampiran 27)</p>"},{group:"Parameter",type:"string(13)",optional:!1,field:"dataNIBSTPW.data_checklist.kd_izin",isArray:!1,description:"<p>Kode Izin Sistem K/L/D</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIBSTPW.data_checklist.kd_daerah",isArray:!1,description:"<p>Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBSTPW.data_checklist.nama_izin",isArray:!1,description:"<p>Nama Izin</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIBSTPW.data_checklist.instansi",isArray:!1,description:"<p>Nama Instansi</p>"},{group:"Parameter",type:"string(19)",optional:!1,field:"dataNIBSTPW.data_checklist.id_bidang_spesifik",isArray:!1,description:"<p>ID Bidang Spesifik</p>"},{group:"Parameter",type:"string(65535)",optional:!1,field:"dataNIBSTPW.data_checklist.bidang_spesifik",isArray:!1,description:"<p>Uraian Bidang Spesifik</p>"},{group:"Parameter",type:"number(19)",optional:!1,field:"dataNIBSTPW.data_checklist.id_kewenangan",isArray:!1,description:"<p>id_kewenangan</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBSTPW.data_checklist.parameter_kewenangan",isArray:!1,description:"<p>Parameter Kewenangan Izin</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIBSTPW.data_checklist.kewenangan",isArray:!1,description:"<p>Kewenangan (00: Kewenangan Pusat; 01: Kewenangan Provinsi; 02: Kewenangan Kab/Kota)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIBSTPW.data_checklist.flag_checklist",isArray:!1,description:"<p>Flag Checklist Komitmen (* Lihat Lampiran 28)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIBSTPW.data_checklist.flag_transaksional",isArray:!1,description:"<p>Flag : Y/N, Flag Izin Komersial / Operasional Diajukan Transaksional (Bisa Mengajukan Berulang)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIBSTPW.data_checklist.flag_perpanjangan",isArray:!1,description:"<p>Flag : Y/N, Flag Bahwa Izin Usaha Ini Adalah Hasil Perpanjangan Dari Izin Usaha Yang Terbit Sebelum OSS</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIBSTPW.jenis_id_user_proses",isArray:!1,description:"<p>Kode Jenis Identitas (* Lihat Lampiran 4)</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIBSTPW.no_id_user_proses",isArray:!1,description:"<p>No Identitas Pemroses NIB</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIBSTPW.nama_user_proses",isArray:!1,description:"<p>Nama User Pemroses NIB</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIBSTPW.email_user_proses",isArray:!1,description:"<p>Email User Pemroses NIB</p>"},{group:"Parameter",type:"string(25)",optional:!1,field:"dataNIBSTPW.hp_user_proses",isArray:!1,description:"<p>No HP Pemroses NIB</p>"},{group:"Parameter",type:"string(255)",optional:!1,field:"dataNIBSTPW.alamat_user_proses",isArray:!1,description:"<p>Alamat Pemroses NIB</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIBSTPW.jns_kelamin_user_proses",isArray:!1,description:"<p>Jenis Kelamin Pemroses NIB (L : Laki- Laki, P : Perempuan)</p>"},{group:"Parameter",type:"string(100)",optional:!1,field:"dataNIBSTPW.tempat_lahir_user_proses",isArray:!1,description:"<p>Tempat Lahir Pemroses NIB</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIBSTPW.tgl_lahir_user_proses",isArray:!1,description:"<p>Tanggal Lahir User Pemroses (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIBSTPW.daerah_id_user_proses",isArray:!1,description:"<p>ID Daerah User Pemroses(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"dataNIBSTPW.rt_rw_user_proses",isArray:!1,description:"<p>RT RW Pemroses NIB</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIBSTPW.agama_user_proses",isArray:!1,description:"<p>Agama Pemroses NIB</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIBSTPW.status_perkawinan_user_proses",isArray:!1,description:"<p>Status Perkawinan Pemroses NIB</p>"},{group:"Parameter",type:"string(50)",optional:!1,field:"dataNIBSTPW.pekerjaan_user_proses",isArray:!1,description:"<p>Pekerjaan Pemroses NIB</p>"},{group:"Parameter",type:"string(2)",optional:!1,field:"dataNIBSTPW.status_nib",isArray:!1,description:"<p>Status Penerbitan NIB (* Lihat Lampiran 14)</p>"},{group:"Parameter",type:"string(1)",optional:!1,field:"dataNIBSTPW.tipe_dokumen",isArray:!1,description:"<p>Tipe Dokumen (9:Original, 5:Update, 3:Pencabutan, 4:Pembatalan)</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"Object",optional:!1,field:"responreceiveNIBSTPW",isArray:!1,description:"<p>Response receive NIB SPTW</p>"},{group:"200",type:"String(1)",optional:!1,parentNode:{path:"responreceiveNIBSTPW",field:"responreceiveNIBSTPW",type:"Object",isArray:!1},field:"responreceiveNIBSTPW.status",isArray:!1,description:"<p>Status Respon (1 : TRUE; 2 : FALSE)</p>"},{group:"200",type:"String(255)",optional:!1,parentNode:{path:"responreceiveNIBSTPW",field:"responreceiveNIBSTPW",type:"Object",isArray:!1},field:"responreceiveNIBSTPW.keterangan",isArray:!1,description:"<p>Keterangan Respon</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
{
	 "responreceiveNIBSTPW": {
		 "status": "",
		 "keterangan": ""
	 }
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",isArray:!1,description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",isArray:!1,description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",isArray:!1,description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",isArray:!1,description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",isArray:!1,description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
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
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",isArray:!1,description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"user_key",isArray:!1,description:"<p>Users unique access-key.</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "user_key": "846ee507525c6b00d18733e066bd5686"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"REKONNIB",isArray:!1,description:"<p>Data Rekon NIB</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"REKONNIB.tgl_awal",isArray:!1,description:"<p>Periode Tanggal Awal NIB Terbit (*Date Format YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,field:"REKONNIB.tgl_akhir",isArray:!1,description:"<p>Periode Tanggal Akhir NIB Terbit (*Date Format YYYY-MM-DD)</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
{
	 "REKONNIB": {
		 "tgl_awal": "",
		 "tgl_akhir": ""
	 }
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"object",optional:!1,field:"responrekonNIB",isArray:!1,description:"<p>responrekonNIB</p>"},{group:"200",type:"string(3)",optional:!1,field:"responrekonNIB.kode",isArray:!1,description:"<p>Kode Respon (*Lihat Lampiran 9)</p>"},{group:"200",type:"string(255)",optional:!1,field:"responrekonNIB.keterangan",isArray:!1,description:"<p>Keterangan Respon</p>"},{group:"200",type:"object",optional:!1,field:"responrekonNIB.rekonNIB",isArray:!1,description:"<p>rekonNIB</p>"},{group:"200",type:"number(11)",optional:!1,field:"responrekonNIB.rekonNIB.jumlah",isArray:!1,description:"<p>Jumlah data permohonan yang terkirim</p>"},{group:"200",type:"object[]",optional:!1,field:"responrekonNIB.rekonNIB.dataNIB",isArray:!0,description:"<p>dataNIB</p>"},{group:"200",type:"string(13)",optional:!1,field:"responrekonNIB.rekonNIB.dataNIB.nib",isArray:!1,description:"<p>Nomor Induk Berusaha</p>"},{group:"200",type:"string(25)",optional:!1,field:"responrekonNIB.rekonNIB.dataNIB.oss_id",isArray:!1,description:"<p>(Optional) Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin</p>"},{group:"200",type:"string(12)",optional:!1,field:"responrekonNIB.rekonNIB.dataNIB.kd_izin",isArray:!1,description:"<p>Kode Izin Sistem K/L/D (* Lihat Lampiran 8)</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
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
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",isArray:!1,description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",isArray:!1,description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",isArray:!1,description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",isArray:!1,description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",isArray:!1,description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
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
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",isArray:!1,description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"user_key",isArray:!1,description:"<p>Users unique access-key.</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "user_key": "846ee507525c6b00d18733e066bd5686"
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"GETDATAREFERENSI",isArray:!1,description:"<p>GETDATAREFERENSI</p>"},{group:"Parameter",type:"string(3)",optional:!1,field:"GETDATAREFERENSI.kode",isArray:!1,description:"<p>Kode Referensi (* Lihat Lampiran 29)</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
{
	 "GETDATAREFERENSI": {
		 "kode": ""
	 }
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"object",optional:!1,field:"respongetDataReferensi",isArray:!1,description:"<p>respongetDataReferensi</p>"},{group:"200",type:"string(3)",optional:!1,field:"respongetDataReferensi.kode",isArray:!1,description:"<p>Kode Respon (*Lihat Lampiran 9)</p>"},{group:"200",type:"string(255)",optional:!1,field:"respongetDataReferensi.keterangan",isArray:!1,description:"<p>Keterangan Respon</p>"},{group:"200",type:"object[]",optional:!1,field:"respongetDataReferensi.dataReferensi",isArray:!0,description:"<p>Data referensi</p>"},{group:"200",type:"string(25)",optional:!1,field:"respongetDataReferensi.dataReferensi.kode_referensi",isArray:!1,description:"<p>Kode Data Referensi</p>"},{group:"200",type:"string(65535)",optional:!1,field:"respongetDataReferensi.dataReferensi.uraian_referensi",isArray:!1,description:"<p>Uraian Data Referensi</p>"},{group:"200",type:"string(255)",optional:!1,field:"respongetDataReferensi.dataReferensi.keterangan_referensi",isArray:!1,description:"<p>Keterangan Data Referensi</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
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
}`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",isArray:!1,description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",isArray:!1,description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",isArray:!1,description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",isArray:!1,description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",isArray:!1,description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
	 "respongetDataReferensi": {
		 "kode": "",
		 "keterangan": ""
	 }
}`,type:"json"}]},filename:"endpoint.js",groupTitle:"Referensi",sampleRequest:[{url:"https://server.digitaltelkom.dev/oss-sandbox/getDataReferensi"}]}];const ue={name:"PIA - OSS RBA",version:"5.0.0",description:"Documentation for the REST api access provided at OSS",title:"PIA - OSS RBA",url:"https://api-stg.oss.go.id/stg/v1/kl/rba",sampleUrl:"https://server.digitaltelkom.dev/oss-sandbox",output:"/tmp/apidoc-output",input:["endpoint"],header:{title:"Introduction",content:`<h2><span id="api-example-for-a-submenu-entry">Document History</span></h2>
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
<tr>
<td>4.3.9</td>
<td>23/09/2022</td>
<td>Tim Teknis OSS</td>
<td>Penambahan Kode Status Izin 09. \u201CDokumen permohonan dan persyaratan izin sudah diisi dan dilengkapi\u201D</td>
</tr>
<tr>
<td>4.3.10</td>
<td>10/10/2022</td>
<td>Tim Teknis OSS</td>
<td>Penambahan Kode status Izin 12. \u201CPemenuhan Komitmen\u201D</td>
</tr>
<tr>
<td>4.3.11</td>
<td>28/10/2022</td>
<td>Tim Teknis OSS</td>
<td>Penambahan Kode status Izin. 32 Menunggu verifikasi bukti bayar PNBP, 33 Persetujuan Pembayaran, 34 Perbaikan Konfirmasi Pembayaran, 93 Penolakan Persyaratan</td>
</tr>
<tr>
<td>4.3.12</td>
<td>16/03/2023</td>
<td>Tim Teknis OSS</td>
<td>Perubahan dan Penambahan Jenis Perusahaan. Perubahan Keterangan Badan Usaha Pemerintah (04) semula Badan Usaha yang didirikan dan dikelola oleh pemerintah seperti BUMD, BUMDES, dan sejenisnya menjadi Badan Usaha yang didirikan dan dikelola oleh Pemerintah. Penambahan : 28 BUM Desa, 29 BUM Desa Bersama</td>
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
<td>Badan Usaha yang didirikan dan dikelola oleh Pemerintah</td>
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
<tr>
<td>28</td>
<td>Badan Usaha Milik Desa (BUM Desa)</td>
<td>Badan usaha milik desa merupakan usaha desa yang dikelola oleh Pemerintah Desa, dan berbadan hukum. Pemerintah Desa dapat mendirikan BUM Desa sesuai dengan kebutuhan dan potensi Desa</td>
</tr>
<tr>
<td>29</td>
<td>Badan Usaha Milik Desa Bersama (BUM Desa Bersama)</td>
<td>BUM Desa Bersama merupakan gabungan dari dua atau lebih desa yang sama-sama membangun BUM Desa.</td>
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
<td>09</td>
<td>Telah Melengkapi Persyaratan</td>
<td>Dokumen permohonan dan persyaratan izin sudah diisi dan dilengkapi</td>
</tr>
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
<td>12</td>
<td>Pemenuhan Komitmen</td>
<td>Pemenuhan Komitmen</td>
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
<td>32</td>
<td>Menunggu Verifikasi Bukti Bayar PNBP</td>
<td>Pelaku usaha telah melakukan pembayaran PNBP</td>
</tr>
<tr>
<td>33</td>
<td>Persetujuan Pembayaran</td>
<td>Petugas melakukan verifikasi pembayaran</td>
</tr>
<tr>
<td>34</td>
<td>Perbaikan Konfirmasi Pembayaran</td>
<td>Pelaku usaha upload kembali PNBP</td>
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
<tr>
<td>93</td>
<td>Penolakan Persyaratan</td>
<td>Penolakan status persyaratan oleh Dinas Teknis</td>
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
`},template:{showRequiredLabels:!0,withCompare:!0,withGenerator:!0,aloneDisplay:!0},defaultVersion:"0.0.0",apidoc:"0.3.0",generator:{name:"apidoc",time:"Thu Jul 20 2023 12:34:04 GMT+0700 (Western Indonesia Time)",url:"https://apidocjs.com",version:"1.1.0"}};Za();const Ee=d().compile(_()("#template-header").html()),ve=d().compile(_()("#template-footer").html()),V=d().compile(_()("#template-article").html()),me=d().compile(_()("#template-compare-article").html()),ge=d().compile(_()("#template-generator").html()),he=d().compile(_()("#template-project").html()),Le=d().compile(_()("#template-sections").html()),Fe=d().compile(_()("#template-sidenav").html()),Oe={aloneDisplay:!1,showRequiredLabels:!1,withGenerator:!0,withCompare:!0};ue.template=Object.assign(Oe,(Ue=ue.template)!=null?Ue:{}),ue.template.forceLanguage&&va(ue.template.forceLanguage);const ze=(0,s.groupBy)(we,te=>te.group),Xe={};_().each(ze,(te,ne)=>{Xe[te]=(0,s.groupBy)(ne,pe=>pe.name)});const sa=[];_().each(Xe,(te,ne)=>{let pe=[];_().each(ne,(se,be)=>{const xe=be[0].title;xe&&pe.push(xe.toLowerCase()+"#~#"+se)}),pe.sort(),ue.order&&(pe=Be(pe,ue.order,"#~#")),pe.forEach(se=>{const xe=se.split("#~#")[1];ne[xe].forEach(Te=>{sa.push(Te)})})}),we=sa;let fa={};const Fa={};let La={};La[ue.version]=1,_().each(we,(te,ne)=>{fa[ne.group]=1,Fa[ne.group]=ne.groupTitle||ne.group,La[ne.version]=1}),fa=Object.keys(fa),fa.sort(),ue.order&&(fa=Pe(Fa,ue.order)),La=Object.keys(La),La.sort(t().compare),La.reverse();const ba=[];fa.forEach(te=>{ba.push({group:te,isHeader:!0,title:Fa[te]});let ne="";we.forEach(pe=>{pe.group===te&&(ne!==pe.name?ba.push({title:pe.title,group:te,name:pe.name,type:pe.type,version:pe.version,url:pe.url}):ba.push({title:pe.title,group:te,hidden:!0,name:pe.name,type:pe.type,version:pe.version,url:pe.url}),ne=pe.name)})});function un(te,ne,pe){let se=!1;if(!ne)return se;const be=ne.match(/<h(1|2).*?>(.+?)<\/h(1|2)>/gi);return be&&be.forEach(function(xe){const Te=xe.substring(2,3),oa=xe.replace(/<.+?>/g,""),ya=xe.match(/id="api-([^-]+)(?:-(.+))?"/),Ta=ya?ya[1]:null,ga=ya?ya[2]:null;Te==="1"&&oa&&Ta&&(te.splice(pe,0,{group:Ta,isHeader:!0,title:oa,isFixed:!0}),pe++,se=!0),Te==="2"&&oa&&Ta&&ga&&(te.splice(pe,0,{group:Ta,name:ga,isHeader:!1,title:oa,isFixed:!1,version:"1.0"}),pe++)}),se}let fn;if(ue.header&&(fn=un(ba,ue.header.content,0),fn||ba.unshift({group:"_header",isHeader:!0,title:ue.header.title==null?Na("General"):ue.header.title,isFixed:!0})),ue.footer){const te=ba.length;fn=un(ba,ue.footer.content,ba.length),!fn&&ue.footer.title!=null&&ba.splice(te,0,{group:"_footer",isHeader:!0,title:ue.footer.title,isFixed:!0})}const Sn=ue.title?ue.title:"apiDoc: "+ue.name+" - "+ue.version;_()(document).attr("title",Sn),_()("#loader").remove();const Cn={nav:ba};_()("#sidenav").append(Fe(Cn)),_()("#generator").append(ge(ue)),(0,s.extend)(ue,{versions:La}),_()("#project").append(he(ue)),ue.header&&_()("#header").append(Ee(ue.header)),ue.footer&&(_()("#footer").append(ve(ue.footer)),ue.template.aloneDisplay&&document.getElementById("api-_footer").classList.add("hide"));const Ca={};let jn="";fa.forEach(function(te){const ne=[];let pe="",se={},be=te,xe="";Ca[te]={},we.forEach(function(Te){te===Te.group&&(pe!==Te.name?(we.forEach(function(oa){te===oa.group&&Te.name===oa.name&&(Object.prototype.hasOwnProperty.call(Ca[Te.group],Te.name)||(Ca[Te.group][Te.name]=[]),Ca[Te.group][Te.name].push(oa.version))}),se={article:Te,versions:Ca[Te.group][Te.name]}):se={article:Te,hidden:!0,versions:Ca[Te.group][Te.name]},ue.sampleUrl&&ue.sampleUrl===!0&&(ue.sampleUrl=window.location.origin),ue.url&&se.article.url.substr(0,4).toLowerCase()!=="http"&&(se.article.url=ue.url+se.article.url),re(se,Te),Te.groupTitle&&(be=Te.groupTitle),Te.groupDescription&&(xe=Te.groupDescription),ne.push({article:V(se),group:Te.group,name:Te.name,aloneDisplay:ue.template.aloneDisplay}),pe=Te.name)}),se={group:te,title:be,description:xe,articles:ne,aloneDisplay:ue.template.aloneDisplay},jn+=Le(se)}),_()("#sections").append(jn),ue.template.aloneDisplay||(document.body.dataset.spy="scroll",_()("body").scrollspy({target:"#scrollingNav"})),_()(".form-control").on("focus change",function(){_()(this).removeClass("border-danger")}),_()(".sidenav").find("a").on("click",function(te){te.preventDefault();const ne=this.getAttribute("href");if(ue.template.aloneDisplay){const pe=document.querySelector(".sidenav > li.active");pe&&pe.classList.remove("active"),this.parentNode.classList.add("active")}else{const pe=document.querySelector(ne);pe&&_()("html,body").animate({scrollTop:pe.offsetTop},400)}window.location.hash=ne});function _a(te){let ne=!1;return _().each(te,pe=>{ne=ne||(0,s.some)(te[pe],se=>se.type)}),ne}function Mn(){_()('button[data-toggle="popover"]').popover().click(function(ne){ne.preventDefault()});const te=_()("#version strong").html();if(_()("#sidenav li").removeClass("is-new"),ue.template.withCompare&&_()("#sidenav li[data-version='"+te+"']").each(function(){const ne=_()(this).data("group"),pe=_()(this).data("name"),se=_()("#sidenav li[data-group='"+ne+"'][data-name='"+pe+"']").length,be=_()("#sidenav li[data-group='"+ne+"'][data-name='"+pe+"']").index(_()(this));(se===1||be===se-1)&&_()(this).addClass("is-new")}),_()(".nav-tabs-examples a").click(function(ne){ne.preventDefault(),_()(this).tab("show")}),_()(".nav-tabs-examples").find("a:first").tab("show"),_()(".sample-request-content-type-switch").change(function(){_()(this).val()==="body-form-data"?(_()("#sample-request-body-json-input-"+_()(this).data("id")).hide(),_()("#sample-request-body-form-input-"+_()(this).data("id")).show()):(_()("#sample-request-body-form-input-"+_()(this).data("id")).hide(),_()("#sample-request-body-json-input-"+_()(this).data("id")).show())}),ue.template.aloneDisplay&&(_()(".show-group").click(function(){const ne="."+_()(this).attr("data-group")+"-group",pe="."+_()(this).attr("data-group")+"-article";_()(".show-api-group").addClass("hide"),_()(ne).removeClass("hide"),_()(".show-api-article").addClass("hide"),_()(pe).removeClass("hide")}),_()(".show-api").click(function(){const ne=this.getAttribute("href").substring(1),pe=document.getElementById("version").textContent.trim(),se=`.${this.dataset.name}-article`,be=`[id="${ne}-${pe}"]`,xe=`.${this.dataset.group}-group`;_()(".show-api-group").addClass("hide"),_()(xe).removeClass("hide"),_()(".show-api-article").addClass("hide");let Te=_()(se);_()(be).length&&(Te=_()(be).parent()),Te.removeClass("hide"),ne.match(/_(header|footer)/)&&document.getElementById(ne).classList.remove("hide")})),ue.template.aloneDisplay||_()("body").scrollspy("refresh"),ue.template.aloneDisplay){const ne=decodeURI(window.location.hash);if(ne!=null&&ne.length!==0){const pe=document.getElementById("version").textContent.trim(),se=document.querySelector(`li .${ne.slice(1)}-init`),be=document.querySelector(`li[data-version="${pe}"] .show-api.${ne.slice(1)}-init`);let xe=se;be&&(xe=be),xe.click()}}}function M(te){typeof te=="undefined"?te=_()("#version strong").html():_()("#version strong").html(te),_()("article").addClass("hide"),_()("#sidenav li:not(.nav-fixed)").addClass("hide");const ne={};document.querySelectorAll("article[data-version]").forEach(pe=>{const se=pe.dataset.group,be=pe.dataset.name,xe=pe.dataset.version,Te=se+be;!ne[Te]&&t().lte(xe,te)&&(ne[Te]=!0,document.querySelector(`article[data-group="${se}"][data-name="${be}"][data-version="${xe}"]`).classList.remove("hide"),document.querySelector(`#sidenav li[data-group="${se}"][data-name="${be}"][data-version="${xe}"]`).classList.remove("hide"),document.querySelector(`#sidenav li.nav-header[data-group="${se}"]`).classList.remove("hide"))}),_()("article[data-version]").each(function(pe){const se=_()(this).data("group");_()("section#api-"+se).removeClass("hide"),_()("section#api-"+se+" article:visible").length===0?_()("section#api-"+se).addClass("hide"):_()("section#api-"+se).removeClass("hide")})}if(M(),_()("#versions li.version a").on("click",function(te){te.preventDefault(),M(_()(this).html())}),_()("#compareAllWithPredecessor").on("click",ee),_()("article .versions li.version a").on("click",X),_().urlParam=function(te){const ne=new RegExp("[\\?&amp;]"+te+"=([^&amp;#]*)").exec(window.location.href);return ne&&ne[1]?ne[1]:null},_().urlParam("compare")&&_()("#compareAllWithPredecessor").trigger("click"),window.location.hash){const te=decodeURI(window.location.hash);_()(te).length>0&&_()("html,body").animate({scrollTop:parseInt(_()(te).offset().top)},0)}document.querySelector('[data-toggle="offcanvas"]').addEventListener("click",function(){const te=document.querySelector(".row-offcanvas");te&&te.classList.toggle("active")}),_()("#scrollingNav .sidenav-search input.search").focus(),_()('[data-action="filter-search"]').on("keyup",$(te=>{const ne=te.currentTarget.value.toLowerCase();_()(".sidenav a.nav-list-item").filter((pe,se)=>_()(se).toggle(_()(se).text().toLowerCase().indexOf(ne)>-1))},200)),_()("span.search-reset").on("click",function(){_()("#scrollingNav .sidenav-search input.search").val("").focus(),_()(".sidenav").find("a.nav-list-item").show()});function $(te,ne){let pe=null;return(...se)=>{clearTimeout(pe),pe=setTimeout(te.bind(this,...se),ne||0)}}function X(te){te.preventDefault();const ne=_()(this).parents("article"),pe=_()(this).html(),se=ne.find(".version"),be=se.find("strong").html();se.find("strong").html(pe);const xe=ne.data("group"),Te=ne.data("name"),oa=ne.data("version"),ya=ne.data("compare-version");if(ya!==pe&&!(!ya&&oa===pe)){if(ya&&Ca[xe][Te][0]===pe||oa===pe)Ae(xe,Te,oa);else{let Ta={},ga={};_().each(Xe[xe][Te],function(ot,qn){qn.version===oa&&(Ta=qn),qn.version===pe&&(ga=qn)});const ra={article:Ta,compare:ga,versions:Ca[xe][Te]};ra.article.id=ra.article.group+"-"+ra.article.name+"-"+ra.article.version,ra.article.id=ra.article.id.replace(/\./g,"_"),ra.compare.id=ra.compare.group+"-"+ra.compare.name+"-"+ra.compare.version,ra.compare.id=ra.compare.id.replace(/\./g,"_");let ea=Ta;ea.header&&ea.header.fields&&(ra._hasTypeInHeaderFields=_a(ea.header.fields)),ea.parameter&&ea.parameter.fields&&(ra._hasTypeInParameterFields=_a(ea.parameter.fields)),ea.error&&ea.error.fields&&(ra._hasTypeInErrorFields=_a(ea.error.fields)),ea.success&&ea.success.fields&&(ra._hasTypeInSuccessFields=_a(ea.success.fields)),ea.info&&ea.info.fields&&(ra._hasTypeInInfoFields=_a(ea.info.fields)),ea=ga,ra._hasTypeInHeaderFields!==!0&&ea.header&&ea.header.fields&&(ra._hasTypeInHeaderFields=_a(ea.header.fields)),ra._hasTypeInParameterFields!==!0&&ea.parameter&&ea.parameter.fields&&(ra._hasTypeInParameterFields=_a(ea.parameter.fields)),ra._hasTypeInErrorFields!==!0&&ea.error&&ea.error.fields&&(ra._hasTypeInErrorFields=_a(ea.error.fields)),ra._hasTypeInSuccessFields!==!0&&ea.success&&ea.success.fields&&(ra._hasTypeInSuccessFields=_a(ea.success.fields)),ra._hasTypeInInfoFields!==!0&&ea.info&&ea.info.fields&&(ra._hasTypeInInfoFields=_a(ea.info.fields));const fr=me(ra);ne.after(fr),ne.next().find(".versions li.version a").on("click",X),_()("#sidenav li[data-group='"+xe+"'][data-name='"+Te+"'][data-version='"+be+"']").addClass("has-modifications"),ne.remove()}Mn(),m().highlightAll()}}function ee(te){te.preventDefault(),_()("article:visible .versions").each(function(){const pe=_()(this).parents("article").data("version");let se=null;_()(this).find("li.version a").each(function(){_()(this).html()<pe&&!se&&(se=_()(this))}),se&&se.trigger("click")})}function re(te,ne){te.id=te.article.group+"-"+te.article.name+"-"+te.article.version,te.id=te.id.replace(/\./g,"_"),ne.header&&ne.header.fields&&(te._hasTypeInHeaderFields=_a(ne.header.fields)),ne.parameter&&ne.parameter.fields&&(te._hasTypeInParameterFields=_a(ne.parameter.fields)),ne.error&&ne.error.fields&&(te._hasTypeInErrorFields=_a(ne.error.fields)),ne.success&&ne.success.fields&&(te._hasTypeInSuccessFields=_a(ne.success.fields)),ne.info&&ne.info.fields&&(te._hasTypeInInfoFields=_a(ne.info.fields)),te.template=ue.template}function _e(te,ne,pe){let se={};_().each(Xe[te][ne],function(xe,Te){Te.version===pe&&(se=Te)});const be={article:se,versions:Ca[te][ne]};return re(be,se),V(be)}function Ae(te,ne,pe){const se=_()("article[data-group='"+te+"'][data-name='"+ne+"']:visible"),be=_e(te,ne,pe);se.after(be),se.next().find(".versions li.version a").on("click",X),_()("#sidenav li[data-group='"+te+"'][data-name='"+ne+"'][data-version='"+pe+"']").removeClass("has-modifications"),se.remove()}function Be(te,ne,pe){const se=[];return ne.forEach(function(be){pe?te.forEach(function(xe){const Te=xe.split(pe);(Te[0]===be||Te[1]===be)&&se.push(xe)}):te.forEach(function(xe){xe===be&&se.push(be)})}),te.forEach(function(be){se.indexOf(be)===-1&&se.push(be)}),se}function Pe(te,ne){const pe=[];return ne.forEach(se=>{Object.keys(te).forEach(be=>{te[be].replace(/_/g," ")===se&&pe.push(be)})}),Object.keys(te).forEach(se=>{pe.indexOf(se)===-1&&pe.push(se)}),pe}Mn()}})()})();
