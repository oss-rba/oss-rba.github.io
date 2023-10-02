(()=>{var Vo={9261:()=>{+function(v){"use strict";var h=".dropdown-backdrop",i='[data-toggle="dropdown"]',u=function(o){v(o).on("click.bs.dropdown",this.toggle)};u.VERSION="3.4.1";function t(o){var r=o.attr("data-target");r||(r=o.attr("href"),r=r&&/#[A-Za-z]/.test(r)&&r.replace(/.*(?=#[^\s]*$)/,""));var p=r!=="#"?v(document).find(r):null;return p&&p.length?p:o.parent()}function n(o){o&&o.which===3||(v(h).remove(),v(i).each(function(){var r=v(this),p=t(r),m={relatedTarget:this};p.hasClass("open")&&(o&&o.type=="click"&&/input|textarea/i.test(o.target.tagName)&&v.contains(p[0],o.target)||(p.trigger(o=v.Event("hide.bs.dropdown",m)),!o.isDefaultPrevented()&&(r.attr("aria-expanded","false"),p.removeClass("open").trigger(v.Event("hidden.bs.dropdown",m)))))}))}u.prototype.toggle=function(o){var r=v(this);if(!r.is(".disabled, :disabled")){var p=t(r),m=p.hasClass("open");if(n(),!m){"ontouchstart"in document.documentElement&&!p.closest(".navbar-nav").length&&v(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(v(this)).on("click",n);var s={relatedTarget:this};if(p.trigger(o=v.Event("show.bs.dropdown",s)),o.isDefaultPrevented())return;r.trigger("focus").attr("aria-expanded","true"),p.toggleClass("open").trigger(v.Event("shown.bs.dropdown",s))}return!1}},u.prototype.keydown=function(o){if(!(!/(38|40|27|32)/.test(o.which)||/input|textarea/i.test(o.target.tagName))){var r=v(this);if(o.preventDefault(),o.stopPropagation(),!r.is(".disabled, :disabled")){var p=t(r),m=p.hasClass("open");if(!m&&o.which!=27||m&&o.which==27)return o.which==27&&p.find(i).trigger("focus"),r.trigger("click");var s=" li:not(.disabled):visible a",_=p.find(".dropdown-menu"+s);if(_.length){var c=_.index(o.target);o.which==38&&c>0&&c--,o.which==40&&c<_.length-1&&c++,~c||(c=0),_.eq(c).trigger("focus")}}}};function l(o){return this.each(function(){var r=v(this),p=r.data("bs.dropdown");p||r.data("bs.dropdown",p=new u(this)),typeof o=="string"&&p[o].call(r)})}var g=v.fn.dropdown;v.fn.dropdown=l,v.fn.dropdown.Constructor=u,v.fn.dropdown.noConflict=function(){return v.fn.dropdown=g,this},v(document).on("click.bs.dropdown.data-api",n).on("click.bs.dropdown.data-api",".dropdown form",function(o){o.stopPropagation()}).on("click.bs.dropdown.data-api",i,u.prototype.toggle).on("keydown.bs.dropdown.data-api",i,u.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",u.prototype.keydown)}(jQuery)},7463:()=>{+function(v){"use strict";var h=function(t,n){this.init("popover",t,n)};if(!v.fn.tooltip)throw new Error("Popover requires tooltip.js");h.VERSION="3.4.1",h.DEFAULTS=v.extend({},v.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),h.prototype=v.extend({},v.fn.tooltip.Constructor.prototype),h.prototype.constructor=h,h.prototype.getDefaults=function(){return h.DEFAULTS},h.prototype.setContent=function(){var t=this.tip(),n=this.getTitle(),l=this.getContent();if(this.options.html){var g=typeof l;this.options.sanitize&&(n=this.sanitizeHtml(n),g==="string"&&(l=this.sanitizeHtml(l))),t.find(".popover-title").html(n),t.find(".popover-content").children().detach().end()[g==="string"?"html":"append"](l)}else t.find(".popover-title").text(n),t.find(".popover-content").children().detach().end().text(l);t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},h.prototype.hasContent=function(){return this.getTitle()||this.getContent()},h.prototype.getContent=function(){var t=this.$element,n=this.options;return t.attr("data-content")||(typeof n.content=="function"?n.content.call(t[0]):n.content)},h.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};function i(t){return this.each(function(){var n=v(this),l=n.data("bs.popover"),g=typeof t=="object"&&t;!l&&/destroy|hide/.test(t)||(l||n.data("bs.popover",l=new h(this,g)),typeof t=="string"&&l[t]())})}var u=v.fn.popover;v.fn.popover=i,v.fn.popover.Constructor=h,v.fn.popover.noConflict=function(){return v.fn.popover=u,this}}(jQuery)},3756:()=>{+function(v){"use strict";function h(t,n){this.$body=v(document.body),this.$scrollElement=v(t).is(document.body)?v(window):v(t),this.options=v.extend({},h.DEFAULTS,n),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",v.proxy(this.process,this)),this.refresh(),this.process()}h.VERSION="3.4.1",h.DEFAULTS={offset:10},h.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},h.prototype.refresh=function(){var t=this,n="offset",l=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),v.isWindow(this.$scrollElement[0])||(n="position",l=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var g=v(this),o=g.data("target")||g.attr("href"),r=/^#./.test(o)&&v(o);return r&&r.length&&r.is(":visible")&&[[r[n]().top+l,o]]||null}).sort(function(g,o){return g[0]-o[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},h.prototype.process=function(){var t=this.$scrollElement.scrollTop()+this.options.offset,n=this.getScrollHeight(),l=this.options.offset+n-this.$scrollElement.height(),g=this.offsets,o=this.targets,r=this.activeTarget,p;if(this.scrollHeight!=n&&this.refresh(),t>=l)return r!=(p=o[o.length-1])&&this.activate(p);if(r&&t<g[0])return this.activeTarget=null,this.clear();for(p=g.length;p--;)r!=o[p]&&t>=g[p]&&(g[p+1]===void 0||t<g[p+1])&&this.activate(o[p])},h.prototype.activate=function(t){this.activeTarget=t,this.clear();var n=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',l=v(n).parents("li").addClass("active");l.parent(".dropdown-menu").length&&(l=l.closest("li.dropdown").addClass("active")),l.trigger("activate.bs.scrollspy")},h.prototype.clear=function(){v(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};function i(t){return this.each(function(){var n=v(this),l=n.data("bs.scrollspy"),g=typeof t=="object"&&t;l||n.data("bs.scrollspy",l=new h(this,g)),typeof t=="string"&&l[t]()})}var u=v.fn.scrollspy;v.fn.scrollspy=i,v.fn.scrollspy.Constructor=h,v.fn.scrollspy.noConflict=function(){return v.fn.scrollspy=u,this},v(window).on("load.bs.scrollspy.data-api",function(){v('[data-spy="scroll"]').each(function(){var t=v(this);i.call(t,t.data())})})}(jQuery)},7183:()=>{+function(v){"use strict";var h=function(n){this.element=v(n)};h.VERSION="3.4.1",h.TRANSITION_DURATION=150,h.prototype.show=function(){var n=this.element,l=n.closest("ul:not(.dropdown-menu)"),g=n.data("target");if(g||(g=n.attr("href"),g=g&&g.replace(/.*(?=#[^\s]*$)/,"")),!n.parent("li").hasClass("active")){var o=l.find(".active:last a"),r=v.Event("hide.bs.tab",{relatedTarget:n[0]}),p=v.Event("show.bs.tab",{relatedTarget:o[0]});if(o.trigger(r),n.trigger(p),!(p.isDefaultPrevented()||r.isDefaultPrevented())){var m=v(document).find(g);this.activate(n.closest("li"),l),this.activate(m,m.parent(),function(){o.trigger({type:"hidden.bs.tab",relatedTarget:n[0]}),n.trigger({type:"shown.bs.tab",relatedTarget:o[0]})})}}},h.prototype.activate=function(n,l,g){var o=l.find("> .active"),r=g&&v.support.transition&&(o.length&&o.hasClass("fade")||!!l.find("> .fade").length);function p(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),n.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),r?(n[0].offsetWidth,n.addClass("in")):n.removeClass("fade"),n.parent(".dropdown-menu").length&&n.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),g&&g()}o.length&&r?o.one("bsTransitionEnd",p).emulateTransitionEnd(h.TRANSITION_DURATION):p(),o.removeClass("in")};function i(n){return this.each(function(){var l=v(this),g=l.data("bs.tab");g||l.data("bs.tab",g=new h(this)),typeof n=="string"&&g[n]()})}var u=v.fn.tab;v.fn.tab=i,v.fn.tab.Constructor=h,v.fn.tab.noConflict=function(){return v.fn.tab=u,this};var t=function(n){n.preventDefault(),i.call(v(this),"show")};v(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',t).on("click.bs.tab.data-api",'[data-toggle="pill"]',t)}(jQuery)},2507:()=>{+function(v){"use strict";var h=["sanitize","whiteList","sanitizeFn"],i=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],u=/^aria-[\w-]*$/i,t={"*":["class","dir","id","lang","role",u],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},n=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,l=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function g(s,_){var c=s.nodeName.toLowerCase();if(v.inArray(c,_)!==-1)return v.inArray(c,i)!==-1?Boolean(s.nodeValue.match(n)||s.nodeValue.match(l)):!0;for(var f=v(_).filter(function(A,b){return b instanceof RegExp}),k=0,y=f.length;k<y;k++)if(c.match(f[k]))return!0;return!1}function o(s,_,c){if(s.length===0)return s;if(c&&typeof c=="function")return c(s);if(!document.implementation||!document.implementation.createHTMLDocument)return s;var f=document.implementation.createHTMLDocument("sanitization");f.body.innerHTML=s;for(var k=v.map(_,function(D,S){return S}),y=v(f.body).find("*"),A=0,b=y.length;A<b;A++){var I=y[A],P=I.nodeName.toLowerCase();if(v.inArray(P,k)===-1){I.parentNode.removeChild(I);continue}for(var B=v.map(I.attributes,function(D){return D}),T=[].concat(_["*"]||[],_[P]||[]),K=0,L=B.length;K<L;K++)g(B[K],T)||I.removeAttribute(B[K].nodeName)}return f.body.innerHTML}var r=function(s,_){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",s,_)};r.VERSION="3.4.1",r.TRANSITION_DURATION=150,r.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0},sanitize:!0,sanitizeFn:null,whiteList:t},r.prototype.init=function(s,_,c){if(this.enabled=!0,this.type=s,this.$element=v(_),this.options=this.getOptions(c),this.$viewport=this.options.viewport&&v(document).find(v.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var f=this.options.trigger.split(" "),k=f.length;k--;){var y=f[k];if(y=="click")this.$element.on("click."+this.type,this.options.selector,v.proxy(this.toggle,this));else if(y!="manual"){var A=y=="hover"?"mouseenter":"focusin",b=y=="hover"?"mouseleave":"focusout";this.$element.on(A+"."+this.type,this.options.selector,v.proxy(this.enter,this)),this.$element.on(b+"."+this.type,this.options.selector,v.proxy(this.leave,this))}}this.options.selector?this._options=v.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},r.prototype.getDefaults=function(){return r.DEFAULTS},r.prototype.getOptions=function(s){var _=this.$element.data();for(var c in _)_.hasOwnProperty(c)&&v.inArray(c,h)!==-1&&delete _[c];return s=v.extend({},this.getDefaults(),_,s),s.delay&&typeof s.delay=="number"&&(s.delay={show:s.delay,hide:s.delay}),s.sanitize&&(s.template=o(s.template,s.whiteList,s.sanitizeFn)),s},r.prototype.getDelegateOptions=function(){var s={},_=this.getDefaults();return this._options&&v.each(this._options,function(c,f){_[c]!=f&&(s[c]=f)}),s},r.prototype.enter=function(s){var _=s instanceof this.constructor?s:v(s.currentTarget).data("bs."+this.type);if(_||(_=new this.constructor(s.currentTarget,this.getDelegateOptions()),v(s.currentTarget).data("bs."+this.type,_)),s instanceof v.Event&&(_.inState[s.type=="focusin"?"focus":"hover"]=!0),_.tip().hasClass("in")||_.hoverState=="in"){_.hoverState="in";return}if(clearTimeout(_.timeout),_.hoverState="in",!_.options.delay||!_.options.delay.show)return _.show();_.timeout=setTimeout(function(){_.hoverState=="in"&&_.show()},_.options.delay.show)},r.prototype.isInStateTrue=function(){for(var s in this.inState)if(this.inState[s])return!0;return!1},r.prototype.leave=function(s){var _=s instanceof this.constructor?s:v(s.currentTarget).data("bs."+this.type);if(_||(_=new this.constructor(s.currentTarget,this.getDelegateOptions()),v(s.currentTarget).data("bs."+this.type,_)),s instanceof v.Event&&(_.inState[s.type=="focusout"?"focus":"hover"]=!1),!_.isInStateTrue()){if(clearTimeout(_.timeout),_.hoverState="out",!_.options.delay||!_.options.delay.hide)return _.hide();_.timeout=setTimeout(function(){_.hoverState=="out"&&_.hide()},_.options.delay.hide)}},r.prototype.show=function(){var s=v.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(s);var _=v.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(s.isDefaultPrevented()||!_)return;var c=this,f=this.tip(),k=this.getUID(this.type);this.setContent(),f.attr("id",k),this.$element.attr("aria-describedby",k),this.options.animation&&f.addClass("fade");var y=typeof this.options.placement=="function"?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,A=/\s?auto?\s?/i,b=A.test(y);b&&(y=y.replace(A,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(y).data("bs."+this.type,this),this.options.container?f.appendTo(v(document).find(this.options.container)):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var I=this.getPosition(),P=f[0].offsetWidth,B=f[0].offsetHeight;if(b){var T=y,K=this.getPosition(this.$viewport);y=y=="bottom"&&I.bottom+B>K.bottom?"top":y=="top"&&I.top-B<K.top?"bottom":y=="right"&&I.right+P>K.width?"left":y=="left"&&I.left-P<K.left?"right":y,f.removeClass(T).addClass(y)}var L=this.getCalculatedOffset(y,I,P,B);this.applyPlacement(L,y);var D=function(){var S=c.hoverState;c.$element.trigger("shown.bs."+c.type),c.hoverState=null,S=="out"&&c.leave(c)};v.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",D).emulateTransitionEnd(r.TRANSITION_DURATION):D()}},r.prototype.applyPlacement=function(s,_){var c=this.tip(),f=c[0].offsetWidth,k=c[0].offsetHeight,y=parseInt(c.css("margin-top"),10),A=parseInt(c.css("margin-left"),10);isNaN(y)&&(y=0),isNaN(A)&&(A=0),s.top+=y,s.left+=A,v.offset.setOffset(c[0],v.extend({using:function(L){c.css({top:Math.round(L.top),left:Math.round(L.left)})}},s),0),c.addClass("in");var b=c[0].offsetWidth,I=c[0].offsetHeight;_=="top"&&I!=k&&(s.top=s.top+k-I);var P=this.getViewportAdjustedDelta(_,s,b,I);P.left?s.left+=P.left:s.top+=P.top;var B=/top|bottom/.test(_),T=B?P.left*2-f+b:P.top*2-k+I,K=B?"offsetWidth":"offsetHeight";c.offset(s),this.replaceArrow(T,c[0][K],B)},r.prototype.replaceArrow=function(s,_,c){this.arrow().css(c?"left":"top",50*(1-s/_)+"%").css(c?"top":"left","")},r.prototype.setContent=function(){var s=this.tip(),_=this.getTitle();this.options.html?(this.options.sanitize&&(_=o(_,this.options.whiteList,this.options.sanitizeFn)),s.find(".tooltip-inner").html(_)):s.find(".tooltip-inner").text(_),s.removeClass("fade in top bottom left right")},r.prototype.hide=function(s){var _=this,c=v(this.$tip),f=v.Event("hide.bs."+this.type);function k(){_.hoverState!="in"&&c.detach(),_.$element&&_.$element.removeAttr("aria-describedby").trigger("hidden.bs."+_.type),s&&s()}if(this.$element.trigger(f),!f.isDefaultPrevented())return c.removeClass("in"),v.support.transition&&c.hasClass("fade")?c.one("bsTransitionEnd",k).emulateTransitionEnd(r.TRANSITION_DURATION):k(),this.hoverState=null,this},r.prototype.fixTitle=function(){var s=this.$element;(s.attr("title")||typeof s.attr("data-original-title")!="string")&&s.attr("data-original-title",s.attr("title")||"").attr("title","")},r.prototype.hasContent=function(){return this.getTitle()},r.prototype.getPosition=function(s){s=s||this.$element;var _=s[0],c=_.tagName=="BODY",f=_.getBoundingClientRect();f.width==null&&(f=v.extend({},f,{width:f.right-f.left,height:f.bottom-f.top}));var k=window.SVGElement&&_ instanceof window.SVGElement,y=c?{top:0,left:0}:k?null:s.offset(),A={scroll:c?document.documentElement.scrollTop||document.body.scrollTop:s.scrollTop()},b=c?{width:v(window).width(),height:v(window).height()}:null;return v.extend({},f,A,b,y)},r.prototype.getCalculatedOffset=function(s,_,c,f){return s=="bottom"?{top:_.top+_.height,left:_.left+_.width/2-c/2}:s=="top"?{top:_.top-f,left:_.left+_.width/2-c/2}:s=="left"?{top:_.top+_.height/2-f/2,left:_.left-c}:{top:_.top+_.height/2-f/2,left:_.left+_.width}},r.prototype.getViewportAdjustedDelta=function(s,_,c,f){var k={top:0,left:0};if(!this.$viewport)return k;var y=this.options.viewport&&this.options.viewport.padding||0,A=this.getPosition(this.$viewport);if(/right|left/.test(s)){var b=_.top-y-A.scroll,I=_.top+y-A.scroll+f;b<A.top?k.top=A.top-b:I>A.top+A.height&&(k.top=A.top+A.height-I)}else{var P=_.left-y,B=_.left+y+c;P<A.left?k.left=A.left-P:B>A.right&&(k.left=A.left+A.width-B)}return k},r.prototype.getTitle=function(){var s,_=this.$element,c=this.options;return s=_.attr("data-original-title")||(typeof c.title=="function"?c.title.call(_[0]):c.title),s},r.prototype.getUID=function(s){do s+=~~(Math.random()*1e6);while(document.getElementById(s));return s},r.prototype.tip=function(){if(!this.$tip&&(this.$tip=v(this.options.template),this.$tip.length!=1))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},r.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},r.prototype.enable=function(){this.enabled=!0},r.prototype.disable=function(){this.enabled=!1},r.prototype.toggleEnabled=function(){this.enabled=!this.enabled},r.prototype.toggle=function(s){var _=this;s&&(_=v(s.currentTarget).data("bs."+this.type),_||(_=new this.constructor(s.currentTarget,this.getDelegateOptions()),v(s.currentTarget).data("bs."+this.type,_))),s?(_.inState.click=!_.inState.click,_.isInStateTrue()?_.enter(_):_.leave(_)):_.tip().hasClass("in")?_.leave(_):_.enter(_)},r.prototype.destroy=function(){var s=this;clearTimeout(this.timeout),this.hide(function(){s.$element.off("."+s.type).removeData("bs."+s.type),s.$tip&&s.$tip.detach(),s.$tip=null,s.$arrow=null,s.$viewport=null,s.$element=null})},r.prototype.sanitizeHtml=function(s){return o(s,this.options.whiteList,this.options.sanitizeFn)};function p(s){return this.each(function(){var _=v(this),c=_.data("bs.tooltip"),f=typeof s=="object"&&s;!c&&/destroy|hide/.test(s)||(c||_.data("bs.tooltip",c=new r(this,f)),typeof s=="string"&&c[s]())})}var m=v.fn.tooltip;v.fn.tooltip=p,v.fn.tooltip.Constructor=r,v.fn.tooltip.noConflict=function(){return v.fn.tooltip=m,this}}(jQuery)},6209:v=>{var h=function(){this.Diff_Timeout=1,this.Diff_EditCost=4,this.Match_Threshold=.5,this.Match_Distance=1e3,this.Patch_DeleteThreshold=.5,this.Patch_Margin=4,this.Match_MaxBits=32},i=-1,u=1,t=0;h.Diff=function(n,l){return[n,l]},h.prototype.diff_main=function(n,l,g,o){typeof o=="undefined"&&(this.Diff_Timeout<=0?o=Number.MAX_VALUE:o=new Date().getTime()+this.Diff_Timeout*1e3);var r=o;if(n==null||l==null)throw new Error("Null input. (diff_main)");if(n==l)return n?[new h.Diff(t,n)]:[];typeof g=="undefined"&&(g=!0);var p=g,m=this.diff_commonPrefix(n,l),s=n.substring(0,m);n=n.substring(m),l=l.substring(m),m=this.diff_commonSuffix(n,l);var _=n.substring(n.length-m);n=n.substring(0,n.length-m),l=l.substring(0,l.length-m);var c=this.diff_compute_(n,l,p,r);return s&&c.unshift(new h.Diff(t,s)),_&&c.push(new h.Diff(t,_)),this.diff_cleanupMerge(c),c},h.prototype.diff_compute_=function(n,l,g,o){var r;if(!n)return[new h.Diff(u,l)];if(!l)return[new h.Diff(i,n)];var p=n.length>l.length?n:l,m=n.length>l.length?l:n,s=p.indexOf(m);if(s!=-1)return r=[new h.Diff(u,p.substring(0,s)),new h.Diff(t,m),new h.Diff(u,p.substring(s+m.length))],n.length>l.length&&(r[0][0]=r[2][0]=i),r;if(m.length==1)return[new h.Diff(i,n),new h.Diff(u,l)];var _=this.diff_halfMatch_(n,l);if(_){var c=_[0],f=_[1],k=_[2],y=_[3],A=_[4],b=this.diff_main(c,k,g,o),I=this.diff_main(f,y,g,o);return b.concat([new h.Diff(t,A)],I)}return g&&n.length>100&&l.length>100?this.diff_lineMode_(n,l,o):this.diff_bisect_(n,l,o)},h.prototype.diff_lineMode_=function(n,l,g){var o=this.diff_linesToChars_(n,l);n=o.chars1,l=o.chars2;var r=o.lineArray,p=this.diff_main(n,l,!1,g);this.diff_charsToLines_(p,r),this.diff_cleanupSemantic(p),p.push(new h.Diff(t,""));for(var m=0,s=0,_=0,c="",f="";m<p.length;){switch(p[m][0]){case u:_++,f+=p[m][1];break;case i:s++,c+=p[m][1];break;case t:if(s>=1&&_>=1){p.splice(m-s-_,s+_),m=m-s-_;for(var k=this.diff_main(c,f,!1,g),y=k.length-1;y>=0;y--)p.splice(m,0,k[y]);m=m+k.length}_=0,s=0,c="",f="";break}m++}return p.pop(),p},h.prototype.diff_bisect_=function(n,l,g){for(var o=n.length,r=l.length,p=Math.ceil((o+r)/2),m=p,s=2*p,_=new Array(s),c=new Array(s),f=0;f<s;f++)_[f]=-1,c[f]=-1;_[m+1]=0,c[m+1]=0;for(var k=o-r,y=k%2!=0,A=0,b=0,I=0,P=0,B=0;B<p&&!(new Date().getTime()>g);B++){for(var T=-B+A;T<=B-b;T+=2){var K=m+T,L;T==-B||T!=B&&_[K-1]<_[K+1]?L=_[K+1]:L=_[K-1]+1;for(var D=L-T;L<o&&D<r&&n.charAt(L)==l.charAt(D);)L++,D++;if(_[K]=L,L>o)b+=2;else if(D>r)A+=2;else if(y){var S=m+k-T;if(S>=0&&S<s&&c[S]!=-1){var w=o-c[S];if(L>=w)return this.diff_bisectSplit_(n,l,L,D,g)}}}for(var C=-B+I;C<=B-P;C+=2){var S=m+C,w;C==-B||C!=B&&c[S-1]<c[S+1]?w=c[S+1]:w=c[S-1]+1;for(var F=w-C;w<o&&F<r&&n.charAt(o-w-1)==l.charAt(r-F-1);)w++,F++;if(c[S]=w,w>o)P+=2;else if(F>r)I+=2;else if(!y){var K=m+k-C;if(K>=0&&K<s&&_[K]!=-1){var L=_[K],D=m+L-K;if(w=o-w,L>=w)return this.diff_bisectSplit_(n,l,L,D,g)}}}}return[new h.Diff(i,n),new h.Diff(u,l)]},h.prototype.diff_bisectSplit_=function(n,l,g,o,r){var p=n.substring(0,g),m=l.substring(0,o),s=n.substring(g),_=l.substring(o),c=this.diff_main(p,m,!1,r),f=this.diff_main(s,_,!1,r);return c.concat(f)},h.prototype.diff_linesToChars_=function(n,l){var g=[],o={};g[0]="";function r(_){for(var c="",f=0,k=-1,y=g.length;k<_.length-1;){k=_.indexOf(`
`,f),k==-1&&(k=_.length-1);var A=_.substring(f,k+1);(o.hasOwnProperty?o.hasOwnProperty(A):o[A]!==void 0)?c+=String.fromCharCode(o[A]):(y==p&&(A=_.substring(f),k=_.length),c+=String.fromCharCode(y),o[A]=y,g[y++]=A),f=k+1}return c}var p=4e4,m=r(n);p=65535;var s=r(l);return{chars1:m,chars2:s,lineArray:g}},h.prototype.diff_charsToLines_=function(n,l){for(var g=0;g<n.length;g++){for(var o=n[g][1],r=[],p=0;p<o.length;p++)r[p]=l[o.charCodeAt(p)];n[g][1]=r.join("")}},h.prototype.diff_commonPrefix=function(n,l){if(!n||!l||n.charAt(0)!=l.charAt(0))return 0;for(var g=0,o=Math.min(n.length,l.length),r=o,p=0;g<r;)n.substring(p,r)==l.substring(p,r)?(g=r,p=g):o=r,r=Math.floor((o-g)/2+g);return r},h.prototype.diff_commonSuffix=function(n,l){if(!n||!l||n.charAt(n.length-1)!=l.charAt(l.length-1))return 0;for(var g=0,o=Math.min(n.length,l.length),r=o,p=0;g<r;)n.substring(n.length-r,n.length-p)==l.substring(l.length-r,l.length-p)?(g=r,p=g):o=r,r=Math.floor((o-g)/2+g);return r},h.prototype.diff_commonOverlap_=function(n,l){var g=n.length,o=l.length;if(g==0||o==0)return 0;g>o?n=n.substring(g-o):g<o&&(l=l.substring(0,g));var r=Math.min(g,o);if(n==l)return r;for(var p=0,m=1;;){var s=n.substring(r-m),_=l.indexOf(s);if(_==-1)return p;m+=_,(_==0||n.substring(r-m)==l.substring(0,m))&&(p=m,m++)}},h.prototype.diff_halfMatch_=function(n,l){if(this.Diff_Timeout<=0)return null;var g=n.length>l.length?n:l,o=n.length>l.length?l:n;if(g.length<4||o.length*2<g.length)return null;var r=this;function p(b,I,P){for(var B=b.substring(P,P+Math.floor(b.length/4)),T=-1,K="",L,D,S,w;(T=I.indexOf(B,T+1))!=-1;){var C=r.diff_commonPrefix(b.substring(P),I.substring(T)),F=r.diff_commonSuffix(b.substring(0,P),I.substring(0,T));K.length<F+C&&(K=I.substring(T-F,T)+I.substring(T,T+C),L=b.substring(0,P-F),D=b.substring(P+C),S=I.substring(0,T-F),w=I.substring(T+C))}return K.length*2>=b.length?[L,D,S,w,K]:null}var m=p(g,o,Math.ceil(g.length/4)),s=p(g,o,Math.ceil(g.length/2)),_;if(!m&&!s)return null;s?m?_=m[4].length>s[4].length?m:s:_=s:_=m;var c,f,k,y;n.length>l.length?(c=_[0],f=_[1],k=_[2],y=_[3]):(k=_[0],y=_[1],c=_[2],f=_[3]);var A=_[4];return[c,f,k,y,A]},h.prototype.diff_cleanupSemantic=function(n){for(var l=!1,g=[],o=0,r=null,p=0,m=0,s=0,_=0,c=0;p<n.length;)n[p][0]==t?(g[o++]=p,m=_,s=c,_=0,c=0,r=n[p][1]):(n[p][0]==u?_+=n[p][1].length:c+=n[p][1].length,r&&r.length<=Math.max(m,s)&&r.length<=Math.max(_,c)&&(n.splice(g[o-1],0,new h.Diff(i,r)),n[g[o-1]+1][0]=u,o--,o--,p=o>0?g[o-1]:-1,m=0,s=0,_=0,c=0,r=null,l=!0)),p++;for(l&&this.diff_cleanupMerge(n),this.diff_cleanupSemanticLossless(n),p=1;p<n.length;){if(n[p-1][0]==i&&n[p][0]==u){var f=n[p-1][1],k=n[p][1],y=this.diff_commonOverlap_(f,k),A=this.diff_commonOverlap_(k,f);y>=A?(y>=f.length/2||y>=k.length/2)&&(n.splice(p,0,new h.Diff(t,k.substring(0,y))),n[p-1][1]=f.substring(0,f.length-y),n[p+1][1]=k.substring(y),p++):(A>=f.length/2||A>=k.length/2)&&(n.splice(p,0,new h.Diff(t,f.substring(0,A))),n[p-1][0]=u,n[p-1][1]=k.substring(0,k.length-A),n[p+1][0]=i,n[p+1][1]=f.substring(A),p++),p++}p++}},h.prototype.diff_cleanupSemanticLossless=function(n){function l(A,b){if(!A||!b)return 6;var I=A.charAt(A.length-1),P=b.charAt(0),B=I.match(h.nonAlphaNumericRegex_),T=P.match(h.nonAlphaNumericRegex_),K=B&&I.match(h.whitespaceRegex_),L=T&&P.match(h.whitespaceRegex_),D=K&&I.match(h.linebreakRegex_),S=L&&P.match(h.linebreakRegex_),w=D&&A.match(h.blanklineEndRegex_),C=S&&b.match(h.blanklineStartRegex_);return w||C?5:D||S?4:B&&!K&&L?3:K||L?2:B||T?1:0}for(var g=1;g<n.length-1;){if(n[g-1][0]==t&&n[g+1][0]==t){var o=n[g-1][1],r=n[g][1],p=n[g+1][1],m=this.diff_commonSuffix(o,r);if(m){var s=r.substring(r.length-m);o=o.substring(0,o.length-m),r=s+r.substring(0,r.length-m),p=s+p}for(var _=o,c=r,f=p,k=l(o,r)+l(r,p);r.charAt(0)===p.charAt(0);){o+=r.charAt(0),r=r.substring(1)+p.charAt(0),p=p.substring(1);var y=l(o,r)+l(r,p);y>=k&&(k=y,_=o,c=r,f=p)}n[g-1][1]!=_&&(_?n[g-1][1]=_:(n.splice(g-1,1),g--),n[g][1]=c,f?n[g+1][1]=f:(n.splice(g+1,1),g--))}g++}},h.nonAlphaNumericRegex_=/[^a-zA-Z0-9]/,h.whitespaceRegex_=/\s/,h.linebreakRegex_=/[\r\n]/,h.blanklineEndRegex_=/\n\r?\n$/,h.blanklineStartRegex_=/^\r?\n\r?\n/,h.prototype.diff_cleanupEfficiency=function(n){for(var l=!1,g=[],o=0,r=null,p=0,m=!1,s=!1,_=!1,c=!1;p<n.length;)n[p][0]==t?(n[p][1].length<this.Diff_EditCost&&(_||c)?(g[o++]=p,m=_,s=c,r=n[p][1]):(o=0,r=null),_=c=!1):(n[p][0]==i?c=!0:_=!0,r&&(m&&s&&_&&c||r.length<this.Diff_EditCost/2&&m+s+_+c==3)&&(n.splice(g[o-1],0,new h.Diff(i,r)),n[g[o-1]+1][0]=u,o--,r=null,m&&s?(_=c=!0,o=0):(o--,p=o>0?g[o-1]:-1,_=c=!1),l=!0)),p++;l&&this.diff_cleanupMerge(n)},h.prototype.diff_cleanupMerge=function(n){n.push(new h.Diff(t,""));for(var l=0,g=0,o=0,r="",p="",m;l<n.length;)switch(n[l][0]){case u:o++,p+=n[l][1],l++;break;case i:g++,r+=n[l][1],l++;break;case t:g+o>1?(g!==0&&o!==0&&(m=this.diff_commonPrefix(p,r),m!==0&&(l-g-o>0&&n[l-g-o-1][0]==t?n[l-g-o-1][1]+=p.substring(0,m):(n.splice(0,0,new h.Diff(t,p.substring(0,m))),l++),p=p.substring(m),r=r.substring(m)),m=this.diff_commonSuffix(p,r),m!==0&&(n[l][1]=p.substring(p.length-m)+n[l][1],p=p.substring(0,p.length-m),r=r.substring(0,r.length-m))),l-=g+o,n.splice(l,g+o),r.length&&(n.splice(l,0,new h.Diff(i,r)),l++),p.length&&(n.splice(l,0,new h.Diff(u,p)),l++),l++):l!==0&&n[l-1][0]==t?(n[l-1][1]+=n[l][1],n.splice(l,1)):l++,o=0,g=0,r="",p="";break}n[n.length-1][1]===""&&n.pop();var s=!1;for(l=1;l<n.length-1;)n[l-1][0]==t&&n[l+1][0]==t&&(n[l][1].substring(n[l][1].length-n[l-1][1].length)==n[l-1][1]?(n[l][1]=n[l-1][1]+n[l][1].substring(0,n[l][1].length-n[l-1][1].length),n[l+1][1]=n[l-1][1]+n[l+1][1],n.splice(l-1,1),s=!0):n[l][1].substring(0,n[l+1][1].length)==n[l+1][1]&&(n[l-1][1]+=n[l+1][1],n[l][1]=n[l][1].substring(n[l+1][1].length)+n[l+1][1],n.splice(l+1,1),s=!0)),l++;s&&this.diff_cleanupMerge(n)},h.prototype.diff_xIndex=function(n,l){var g=0,o=0,r=0,p=0,m;for(m=0;m<n.length&&(n[m][0]!==u&&(g+=n[m][1].length),n[m][0]!==i&&(o+=n[m][1].length),!(g>l));m++)r=g,p=o;return n.length!=m&&n[m][0]===i?p:p+(l-r)},h.prototype.diff_prettyHtml=function(n){for(var l=[],g=/&/g,o=/</g,r=/>/g,p=/\n/g,m=0;m<n.length;m++){var s=n[m][0],_=n[m][1],c=_.replace(g,"&amp;").replace(o,"&lt;").replace(r,"&gt;").replace(p,"&para;<br>");switch(s){case u:l[m]='<ins style="background:#e6ffe6;">'+c+"</ins>";break;case i:l[m]='<del style="background:#ffe6e6;">'+c+"</del>";break;case t:l[m]="<span>"+c+"</span>";break}}return l.join("")},h.prototype.diff_text1=function(n){for(var l=[],g=0;g<n.length;g++)n[g][0]!==u&&(l[g]=n[g][1]);return l.join("")},h.prototype.diff_text2=function(n){for(var l=[],g=0;g<n.length;g++)n[g][0]!==i&&(l[g]=n[g][1]);return l.join("")},h.prototype.diff_levenshtein=function(n){for(var l=0,g=0,o=0,r=0;r<n.length;r++){var p=n[r][0],m=n[r][1];switch(p){case u:g+=m.length;break;case i:o+=m.length;break;case t:l+=Math.max(g,o),g=0,o=0;break}}return l+=Math.max(g,o),l},h.prototype.diff_toDelta=function(n){for(var l=[],g=0;g<n.length;g++)switch(n[g][0]){case u:l[g]="+"+encodeURI(n[g][1]);break;case i:l[g]="-"+n[g][1].length;break;case t:l[g]="="+n[g][1].length;break}return l.join("	").replace(/%20/g," ")},h.prototype.diff_fromDelta=function(n,l){for(var g=[],o=0,r=0,p=l.split(/\t/g),m=0;m<p.length;m++){var s=p[m].substring(1);switch(p[m].charAt(0)){case"+":try{g[o++]=new h.Diff(u,decodeURI(s))}catch(f){throw new Error("Illegal escape in diff_fromDelta: "+s)}break;case"-":case"=":var _=parseInt(s,10);if(isNaN(_)||_<0)throw new Error("Invalid number in diff_fromDelta: "+s);var c=n.substring(r,r+=_);p[m].charAt(0)=="="?g[o++]=new h.Diff(t,c):g[o++]=new h.Diff(i,c);break;default:if(p[m])throw new Error("Invalid diff operation in diff_fromDelta: "+p[m])}}if(r!=n.length)throw new Error("Delta length ("+r+") does not equal source text length ("+n.length+").");return g},h.prototype.match_main=function(n,l,g){if(n==null||l==null||g==null)throw new Error("Null input. (match_main)");return g=Math.max(0,Math.min(g,n.length)),n==l?0:n.length?n.substring(g,g+l.length)==l?g:this.match_bitap_(n,l,g):-1},h.prototype.match_bitap_=function(n,l,g){if(l.length>this.Match_MaxBits)throw new Error("Pattern too long for this browser.");var o=this.match_alphabet_(l),r=this;function p(L,D){var S=L/l.length,w=Math.abs(g-D);return r.Match_Distance?S+w/r.Match_Distance:w?1:S}var m=this.Match_Threshold,s=n.indexOf(l,g);s!=-1&&(m=Math.min(p(0,s),m),s=n.lastIndexOf(l,g+l.length),s!=-1&&(m=Math.min(p(0,s),m)));var _=1<<l.length-1;s=-1;for(var c,f,k=l.length+n.length,y,A=0;A<l.length;A++){for(c=0,f=k;c<f;)p(A,g+f)<=m?c=f:k=f,f=Math.floor((k-c)/2+c);k=f;var b=Math.max(1,g-f+1),I=Math.min(g+f,n.length)+l.length,P=Array(I+2);P[I+1]=(1<<A)-1;for(var B=I;B>=b;B--){var T=o[n.charAt(B-1)];if(A===0?P[B]=(P[B+1]<<1|1)&T:P[B]=(P[B+1]<<1|1)&T|((y[B+1]|y[B])<<1|1)|y[B+1],P[B]&_){var K=p(A,B-1);if(K<=m)if(m=K,s=B-1,s>g)b=Math.max(1,2*g-s);else break}}if(p(A+1,g)>m)break;y=P}return s},h.prototype.match_alphabet_=function(n){for(var l={},g=0;g<n.length;g++)l[n.charAt(g)]=0;for(var g=0;g<n.length;g++)l[n.charAt(g)]|=1<<n.length-g-1;return l},h.prototype.patch_addContext_=function(n,l){if(l.length!=0){if(n.start2===null)throw Error("patch not initialized");for(var g=l.substring(n.start2,n.start2+n.length1),o=0;l.indexOf(g)!=l.lastIndexOf(g)&&g.length<this.Match_MaxBits-this.Patch_Margin-this.Patch_Margin;)o+=this.Patch_Margin,g=l.substring(n.start2-o,n.start2+n.length1+o);o+=this.Patch_Margin;var r=l.substring(n.start2-o,n.start2);r&&n.diffs.unshift(new h.Diff(t,r));var p=l.substring(n.start2+n.length1,n.start2+n.length1+o);p&&n.diffs.push(new h.Diff(t,p)),n.start1-=r.length,n.start2-=r.length,n.length1+=r.length+p.length,n.length2+=r.length+p.length}},h.prototype.patch_make=function(n,l,g){var o,r;if(typeof n=="string"&&typeof l=="string"&&typeof g=="undefined")o=n,r=this.diff_main(o,l,!0),r.length>2&&(this.diff_cleanupSemantic(r),this.diff_cleanupEfficiency(r));else if(n&&typeof n=="object"&&typeof l=="undefined"&&typeof g=="undefined")r=n,o=this.diff_text1(r);else if(typeof n=="string"&&l&&typeof l=="object"&&typeof g=="undefined")o=n,r=l;else if(typeof n=="string"&&typeof l=="string"&&g&&typeof g=="object")o=n,r=g;else throw new Error("Unknown call format to patch_make.");if(r.length===0)return[];for(var p=[],m=new h.patch_obj,s=0,_=0,c=0,f=o,k=o,y=0;y<r.length;y++){var A=r[y][0],b=r[y][1];switch(!s&&A!==t&&(m.start1=_,m.start2=c),A){case u:m.diffs[s++]=r[y],m.length2+=b.length,k=k.substring(0,c)+b+k.substring(c);break;case i:m.length1+=b.length,m.diffs[s++]=r[y],k=k.substring(0,c)+k.substring(c+b.length);break;case t:b.length<=2*this.Patch_Margin&&s&&r.length!=y+1?(m.diffs[s++]=r[y],m.length1+=b.length,m.length2+=b.length):b.length>=2*this.Patch_Margin&&s&&(this.patch_addContext_(m,f),p.push(m),m=new h.patch_obj,s=0,f=k,_=c);break}A!==u&&(_+=b.length),A!==i&&(c+=b.length)}return s&&(this.patch_addContext_(m,f),p.push(m)),p},h.prototype.patch_deepCopy=function(n){for(var l=[],g=0;g<n.length;g++){var o=n[g],r=new h.patch_obj;r.diffs=[];for(var p=0;p<o.diffs.length;p++)r.diffs[p]=new h.Diff(o.diffs[p][0],o.diffs[p][1]);r.start1=o.start1,r.start2=o.start2,r.length1=o.length1,r.length2=o.length2,l[g]=r}return l},h.prototype.patch_apply=function(n,l){if(n.length==0)return[l,[]];n=this.patch_deepCopy(n);var g=this.patch_addPadding(n);l=g+l+g,this.patch_splitMax(n);for(var o=0,r=[],p=0;p<n.length;p++){var m=n[p].start2+o,s=this.diff_text1(n[p].diffs),_,c=-1;if(s.length>this.Match_MaxBits?(_=this.match_main(l,s.substring(0,this.Match_MaxBits),m),_!=-1&&(c=this.match_main(l,s.substring(s.length-this.Match_MaxBits),m+s.length-this.Match_MaxBits),(c==-1||_>=c)&&(_=-1))):_=this.match_main(l,s,m),_==-1)r[p]=!1,o-=n[p].length2-n[p].length1;else{r[p]=!0,o=_-m;var f;if(c==-1?f=l.substring(_,_+s.length):f=l.substring(_,c+this.Match_MaxBits),s==f)l=l.substring(0,_)+this.diff_text2(n[p].diffs)+l.substring(_+s.length);else{var k=this.diff_main(s,f,!1);if(s.length>this.Match_MaxBits&&this.diff_levenshtein(k)/s.length>this.Patch_DeleteThreshold)r[p]=!1;else{this.diff_cleanupSemanticLossless(k);for(var y=0,A,b=0;b<n[p].diffs.length;b++){var I=n[p].diffs[b];I[0]!==t&&(A=this.diff_xIndex(k,y)),I[0]===u?l=l.substring(0,_+A)+I[1]+l.substring(_+A):I[0]===i&&(l=l.substring(0,_+A)+l.substring(_+this.diff_xIndex(k,y+I[1].length))),I[0]!==i&&(y+=I[1].length)}}}}}return l=l.substring(g.length,l.length-g.length),[l,r]},h.prototype.patch_addPadding=function(n){for(var l=this.Patch_Margin,g="",o=1;o<=l;o++)g+=String.fromCharCode(o);for(var o=0;o<n.length;o++)n[o].start1+=l,n[o].start2+=l;var r=n[0],p=r.diffs;if(p.length==0||p[0][0]!=t)p.unshift(new h.Diff(t,g)),r.start1-=l,r.start2-=l,r.length1+=l,r.length2+=l;else if(l>p[0][1].length){var m=l-p[0][1].length;p[0][1]=g.substring(p[0][1].length)+p[0][1],r.start1-=m,r.start2-=m,r.length1+=m,r.length2+=m}if(r=n[n.length-1],p=r.diffs,p.length==0||p[p.length-1][0]!=t)p.push(new h.Diff(t,g)),r.length1+=l,r.length2+=l;else if(l>p[p.length-1][1].length){var m=l-p[p.length-1][1].length;p[p.length-1][1]+=g.substring(0,m),r.length1+=m,r.length2+=m}return g},h.prototype.patch_splitMax=function(n){for(var l=this.Match_MaxBits,g=0;g<n.length;g++)if(!(n[g].length1<=l)){var o=n[g];n.splice(g--,1);for(var r=o.start1,p=o.start2,m="";o.diffs.length!==0;){var s=new h.patch_obj,_=!0;for(s.start1=r-m.length,s.start2=p-m.length,m!==""&&(s.length1=s.length2=m.length,s.diffs.push(new h.Diff(t,m)));o.diffs.length!==0&&s.length1<l-this.Patch_Margin;){var c=o.diffs[0][0],f=o.diffs[0][1];c===u?(s.length2+=f.length,p+=f.length,s.diffs.push(o.diffs.shift()),_=!1):c===i&&s.diffs.length==1&&s.diffs[0][0]==t&&f.length>2*l?(s.length1+=f.length,r+=f.length,_=!1,s.diffs.push(new h.Diff(c,f)),o.diffs.shift()):(f=f.substring(0,l-s.length1-this.Patch_Margin),s.length1+=f.length,r+=f.length,c===t?(s.length2+=f.length,p+=f.length):_=!1,s.diffs.push(new h.Diff(c,f)),f==o.diffs[0][1]?o.diffs.shift():o.diffs[0][1]=o.diffs[0][1].substring(f.length))}m=this.diff_text2(s.diffs),m=m.substring(m.length-this.Patch_Margin);var k=this.diff_text1(o.diffs).substring(0,this.Patch_Margin);k!==""&&(s.length1+=k.length,s.length2+=k.length,s.diffs.length!==0&&s.diffs[s.diffs.length-1][0]===t?s.diffs[s.diffs.length-1][1]+=k:s.diffs.push(new h.Diff(t,k))),_||n.splice(++g,0,s)}}},h.prototype.patch_toText=function(n){for(var l=[],g=0;g<n.length;g++)l[g]=n[g];return l.join("")},h.prototype.patch_fromText=function(n){var l=[];if(!n)return l;for(var g=n.split(`
`),o=0,r=/^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;o<g.length;){var p=g[o].match(r);if(!p)throw new Error("Invalid patch string: "+g[o]);var m=new h.patch_obj;for(l.push(m),m.start1=parseInt(p[1],10),p[2]===""?(m.start1--,m.length1=1):p[2]=="0"?m.length1=0:(m.start1--,m.length1=parseInt(p[2],10)),m.start2=parseInt(p[3],10),p[4]===""?(m.start2--,m.length2=1):p[4]=="0"?m.length2=0:(m.start2--,m.length2=parseInt(p[4],10)),o++;o<g.length;){var s=g[o].charAt(0);try{var _=decodeURI(g[o].substring(1))}catch(c){throw new Error("Illegal escape in patch_fromText: "+_)}if(s=="-")m.diffs.push(new h.Diff(i,_));else if(s=="+")m.diffs.push(new h.Diff(u,_));else if(s==" ")m.diffs.push(new h.Diff(t,_));else{if(s=="@")break;if(s!=="")throw new Error('Invalid patch mode "'+s+'" in: '+_)}o++}}return l},h.patch_obj=function(){this.diffs=[],this.start1=null,this.start2=null,this.length1=0,this.length2=0},h.patch_obj.prototype.toString=function(){var n,l;this.length1===0?n=this.start1+",0":this.length1==1?n=this.start1+1:n=this.start1+1+","+this.length1,this.length2===0?l=this.start2+",0":this.length2==1?l=this.start2+1:l=this.start2+1+","+this.length2;for(var g=["@@ -"+n+" +"+l+` @@
`],o,r=0;r<this.diffs.length;r++){switch(this.diffs[r][0]){case u:o="+";break;case i:o="-";break;case t:o=" ";break}g[r+1]=o+encodeURI(this.diffs[r][1])+`
`}return g.join("").replace(/%20/g," ")},v.exports=h,v.exports.diff_match_patch=h,v.exports.DIFF_DELETE=i,v.exports.DIFF_INSERT=u,v.exports.DIFF_EQUAL=t},4854:function(v){/**!

 @license
 handlebars v4.7.8

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

*/(function(h,i){v.exports=i()})(this,function(){return function(h){function i(t){if(u[t])return u[t].exports;var n=u[t]={exports:{},id:t,loaded:!1};return h[t].call(n.exports,n,n.exports,i),n.loaded=!0,n.exports}var u={};return i.m=h,i.c=u,i.p="",i(0)}([function(h,i,u){"use strict";function t(){var I=A();return I.compile=function(P,B){return m.compile(P,B,I)},I.precompile=function(P,B){return m.precompile(P,B,I)},I.AST=r.default,I.Compiler=m.Compiler,I.JavaScriptCompiler=_.default,I.Parser=p.parser,I.parse=p.parse,I.parseWithoutProcessing=p.parseWithoutProcessing,I}var n=u(1).default;i.__esModule=!0;var l=u(2),g=n(l),o=u(84),r=n(o),p=u(85),m=u(90),s=u(91),_=n(s),c=u(88),f=n(c),k=u(83),y=n(k),A=g.default.create,b=t();b.create=t,y.default(b),b.Visitor=f.default,b.default=b,i.default=b,h.exports=i.default},function(h,i){"use strict";i.default=function(u){return u&&u.__esModule?u:{default:u}},i.__esModule=!0},function(h,i,u){"use strict";function t(){var I=new o.HandlebarsEnvironment;return c.extend(I,o),I.SafeString=p.default,I.Exception=s.default,I.Utils=c,I.escapeExpression=c.escapeExpression,I.VM=k,I.template=function(P){return k.template(P,I)},I}var n=u(3).default,l=u(1).default;i.__esModule=!0;var g=u(4),o=n(g),r=u(77),p=l(r),m=u(6),s=l(m),_=u(5),c=n(_),f=u(78),k=n(f),y=u(83),A=l(y),b=t();b.create=t,A.default(b),b.default=b,i.default=b,h.exports=i.default},function(h,i){"use strict";i.default=function(u){if(u&&u.__esModule)return u;var t={};if(u!=null)for(var n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);return t.default=u,t},i.__esModule=!0},function(h,i,u){"use strict";function t(I,P,B){this.helpers=I||{},this.partials=P||{},this.decorators=B||{},r.registerDefaultHelpers(this),p.registerDefaultDecorators(this)}var n=u(1).default;i.__esModule=!0,i.HandlebarsEnvironment=t;var l=u(5),g=u(6),o=n(g),r=u(10),p=u(70),m=u(72),s=n(m),_=u(73),c="4.7.8";i.VERSION=c;var f=8;i.COMPILER_REVISION=f;var k=7;i.LAST_COMPATIBLE_COMPILER_REVISION=k;var y={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};i.REVISION_CHANGES=y;var A="[object Object]";t.prototype={constructor:t,logger:s.default,log:s.default.log,registerHelper:function(I,P){if(l.toString.call(I)===A){if(P)throw new o.default("Arg not supported with multiple helpers");l.extend(this.helpers,I)}else this.helpers[I]=P},unregisterHelper:function(I){delete this.helpers[I]},registerPartial:function(I,P){if(l.toString.call(I)===A)l.extend(this.partials,I);else{if(typeof P=="undefined")throw new o.default('Attempting to register a partial called "'+I+'" as undefined');this.partials[I]=P}},unregisterPartial:function(I){delete this.partials[I]},registerDecorator:function(I,P){if(l.toString.call(I)===A){if(P)throw new o.default("Arg not supported with multiple decorators");l.extend(this.decorators,I)}else this.decorators[I]=P},unregisterDecorator:function(I){delete this.decorators[I]},resetLoggedPropertyAccesses:function(){_.resetLoggedProperties()}};var b=s.default.log;i.log=b,i.createFrame=l.createFrame,i.logger=s.default},function(h,i){"use strict";function u(y){return m[y]}function t(y){for(var A=1;A<arguments.length;A++)for(var b in arguments[A])Object.prototype.hasOwnProperty.call(arguments[A],b)&&(y[b]=arguments[A][b]);return y}function n(y,A){for(var b=0,I=y.length;b<I;b++)if(y[b]===A)return b;return-1}function l(y){if(typeof y!="string"){if(y&&y.toHTML)return y.toHTML();if(y==null)return"";if(!y)return y+"";y=""+y}return _.test(y)?y.replace(s,u):y}function g(y){return!y&&y!==0||!(!k(y)||y.length!==0)}function o(y){var A=t({},y);return A._parent=y,A}function r(y,A){return y.path=A,y}function p(y,A){return(y?y+".":"")+A}i.__esModule=!0,i.extend=t,i.indexOf=n,i.escapeExpression=l,i.isEmpty=g,i.createFrame=o,i.blockParams=r,i.appendContextPath=p;var m={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},s=/[&<>"'`=]/g,_=/[&<>"'`=]/,c=Object.prototype.toString;i.toString=c;var f=function(y){return typeof y=="function"};f(/x/)&&(i.isFunction=f=function(y){return typeof y=="function"&&c.call(y)==="[object Function]"}),i.isFunction=f;var k=Array.isArray||function(y){return!(!y||typeof y!="object")&&c.call(y)==="[object Array]"};i.isArray=k},function(h,i,u){"use strict";function t(g,o){var r=o&&o.loc,p=void 0,m=void 0,s=void 0,_=void 0;r&&(p=r.start.line,m=r.end.line,s=r.start.column,_=r.end.column,g+=" - "+p+":"+s);for(var c=Error.prototype.constructor.call(this,g),f=0;f<l.length;f++)this[l[f]]=c[l[f]];Error.captureStackTrace&&Error.captureStackTrace(this,t);try{r&&(this.lineNumber=p,this.endLineNumber=m,n?(Object.defineProperty(this,"column",{value:s,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:_,enumerable:!0})):(this.column=s,this.endColumn=_))}catch(k){}}var n=u(7).default;i.__esModule=!0;var l=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];t.prototype=new Error,i.default=t,h.exports=i.default},function(h,i,u){h.exports={default:u(8),__esModule:!0}},function(h,i,u){var t=u(9);h.exports=function(n,l,g){return t.setDesc(n,l,g)}},function(h,i){var u=Object;h.exports={create:u.create,getProto:u.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:u.getOwnPropertyDescriptor,setDesc:u.defineProperty,setDescs:u.defineProperties,getKeys:u.keys,getNames:u.getOwnPropertyNames,getSymbols:u.getOwnPropertySymbols,each:[].forEach}},function(h,i,u){"use strict";function t(P){o.default(P),p.default(P),s.default(P),c.default(P),k.default(P),A.default(P),I.default(P)}function n(P,B,T){P.helpers[B]&&(P.hooks[B]=P.helpers[B],T||delete P.helpers[B])}var l=u(1).default;i.__esModule=!0,i.registerDefaultHelpers=t,i.moveHelperToHooks=n;var g=u(11),o=l(g),r=u(12),p=l(r),m=u(65),s=l(m),_=u(66),c=l(_),f=u(67),k=l(f),y=u(68),A=l(y),b=u(69),I=l(b)},function(h,i,u){"use strict";i.__esModule=!0;var t=u(5);i.default=function(n){n.registerHelper("blockHelperMissing",function(l,g){var o=g.inverse,r=g.fn;if(l===!0)return r(this);if(l===!1||l==null)return o(this);if(t.isArray(l))return l.length>0?(g.ids&&(g.ids=[g.name]),n.helpers.each(l,g)):o(this);if(g.data&&g.ids){var p=t.createFrame(g.data);p.contextPath=t.appendContextPath(g.data.contextPath,g.name),g={data:p}}return r(l,g)})},h.exports=i.default},function(h,i,u){"use strict";var t=u(13).default,n=u(43).default,l=u(55).default,g=u(60).default,o=u(1).default;i.__esModule=!0;var r=u(5),p=u(6),m=o(p);i.default=function(s){s.registerHelper("each",function(_,c){function f(D,S,w){I&&(I.key=D,I.index=S,I.first=S===0,I.last=!!w,P&&(I.contextPath=P+D)),b+=k(_[D],{data:I,blockParams:r.blockParams([_[D],D],[P+D,null])})}if(!c)throw new m.default("Must pass iterator to #each");var k=c.fn,y=c.inverse,A=0,b="",I=void 0,P=void 0;if(c.data&&c.ids&&(P=r.appendContextPath(c.data.contextPath,c.ids[0])+"."),r.isFunction(_)&&(_=_.call(this)),c.data&&(I=r.createFrame(c.data)),_&&typeof _=="object")if(r.isArray(_))for(var B=_.length;A<B;A++)A in _&&f(A,A,A===_.length-1);else if(typeof t=="function"&&_[n]){for(var T=[],K=l(_),L=K.next();!L.done;L=K.next())T.push(L.value);_=T;for(var B=_.length;A<B;A++)f(A,A,A===_.length-1)}else(function(){var D=void 0;g(_).forEach(function(S){D!==void 0&&f(D,A-1),D=S,A++}),D!==void 0&&f(D,A-1,!0)})();return A===0&&(b=y(this)),b})},h.exports=i.default},function(h,i,u){h.exports={default:u(14),__esModule:!0}},function(h,i,u){u(15),u(42),h.exports=u(21).Symbol},function(h,i,u){"use strict";var t=u(9),n=u(16),l=u(17),g=u(18),o=u(20),r=u(24),p=u(19),m=u(27),s=u(28),_=u(30),c=u(29),f=u(31),k=u(36),y=u(37),A=u(38),b=u(39),I=u(32),P=u(26),B=t.getDesc,T=t.setDesc,K=t.create,L=k.get,D=n.Symbol,S=n.JSON,w=S&&S.stringify,C=!1,F=c("_hidden"),H=t.isEnum,x=m("symbol-registry"),O=m("symbols"),M=typeof D=="function",Y=Object.prototype,W=g&&p(function(){return K(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a!=7})?function(fe,Te,Ae){var Ke=B(Y,Te);Ke&&delete Y[Te],T(fe,Te,Ae),Ke&&fe!==Y&&T(Y,Te,Ke)}:T,X=function(fe){var Te=O[fe]=K(D.prototype);return Te._k=fe,g&&C&&W(Y,fe,{configurable:!0,set:function(Ae){l(this,F)&&l(this[F],fe)&&(this[F][fe]=!1),W(this,fe,P(1,Ae))}}),Te},re=function(fe){return typeof fe=="symbol"},de=function(fe,Te,Ae){return Ae&&l(O,Te)?(Ae.enumerable?(l(fe,F)&&fe[F][Te]&&(fe[F][Te]=!1),Ae=K(Ae,{enumerable:P(0,!1)})):(l(fe,F)||T(fe,F,P(1,{})),fe[F][Te]=!0),W(fe,Te,Ae)):T(fe,Te,Ae)},J=function(fe,Te){b(fe);for(var Ae,Ke=y(Te=I(Te)),ca=0,Wa=Ke.length;Wa>ca;)de(fe,Ae=Ke[ca++],Te[Ae]);return fe},ke=function(fe,Te){return Te===void 0?K(fe):J(K(fe),Te)},Ie=function(fe){var Te=H.call(this,fe);return!(Te||!l(this,fe)||!l(O,fe)||l(this,F)&&this[F][fe])||Te},Ne=function(fe,Te){var Ae=B(fe=I(fe),Te);return!Ae||!l(O,Te)||l(fe,F)&&fe[F][Te]||(Ae.enumerable=!0),Ae},Ve=function(fe){for(var Te,Ae=L(I(fe)),Ke=[],ca=0;Ae.length>ca;)l(O,Te=Ae[ca++])||Te==F||Ke.push(Te);return Ke},fa=function(fe){for(var Te,Ae=L(I(fe)),Ke=[],ca=0;Ae.length>ca;)l(O,Te=Ae[ca++])&&Ke.push(O[Te]);return Ke},ka=function(fe){if(fe!==void 0&&!re(fe)){for(var Te,Ae,Ke=[fe],ca=1,Wa=arguments;Wa.length>ca;)Ke.push(Wa[ca++]);return Te=Ke[1],typeof Te=="function"&&(Ae=Te),!Ae&&A(Te)||(Te=function(aa,Re){if(Ae&&(Re=Ae.call(this,aa,Re)),!re(Re))return Re}),Ke[1]=Te,w.apply(S,Ke)}},Ia=p(function(){var fe=D();return w([fe])!="[null]"||w({a:fe})!="{}"||w(Object(fe))!="{}"});M||(D=function(){if(re(this))throw TypeError("Symbol is not a constructor");return X(_(arguments.length>0?arguments[0]:void 0))},r(D.prototype,"toString",function(){return this._k}),re=function(fe){return fe instanceof D},t.create=ke,t.isEnum=Ie,t.getDesc=Ne,t.setDesc=de,t.setDescs=J,t.getNames=k.get=Ve,t.getSymbols=fa,g&&!u(41)&&r(Y,"propertyIsEnumerable",Ie,!0));var Ea={for:function(fe){return l(x,fe+="")?x[fe]:x[fe]=D(fe)},keyFor:function(fe){return f(x,fe)},useSetter:function(){C=!0},useSimple:function(){C=!1}};t.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),function(fe){var Te=c(fe);Ea[fe]=M?Te:X(Te)}),C=!0,o(o.G+o.W,{Symbol:D}),o(o.S,"Symbol",Ea),o(o.S+o.F*!M,"Object",{create:ke,defineProperty:de,defineProperties:J,getOwnPropertyDescriptor:Ne,getOwnPropertyNames:Ve,getOwnPropertySymbols:fa}),S&&o(o.S+o.F*(!M||Ia),"JSON",{stringify:ka}),s(D,"Symbol"),s(Math,"Math",!0),s(n.JSON,"JSON",!0)},function(h,i){var u=h.exports=typeof window!="undefined"&&window.Math==Math?window:typeof self!="undefined"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=u)},function(h,i){var u={}.hasOwnProperty;h.exports=function(t,n){return u.call(t,n)}},function(h,i,u){h.exports=!u(19)(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7})},function(h,i){h.exports=function(u){try{return!!u()}catch(t){return!0}}},function(h,i,u){var t=u(16),n=u(21),l=u(22),g="prototype",o=function(r,p,m){var s,_,c,f=r&o.F,k=r&o.G,y=r&o.S,A=r&o.P,b=r&o.B,I=r&o.W,P=k?n:n[p]||(n[p]={}),B=k?t:y?t[p]:(t[p]||{})[g];k&&(m=p);for(s in m)_=!f&&B&&s in B,_&&s in P||(c=_?B[s]:m[s],P[s]=k&&typeof B[s]!="function"?m[s]:b&&_?l(c,t):I&&B[s]==c?function(T){var K=function(L){return this instanceof T?new T(L):T(L)};return K[g]=T[g],K}(c):A&&typeof c=="function"?l(Function.call,c):c,A&&((P[g]||(P[g]={}))[s]=c))};o.F=1,o.G=2,o.S=4,o.P=8,o.B=16,o.W=32,h.exports=o},function(h,i){var u=h.exports={version:"1.2.6"};typeof __e=="number"&&(__e=u)},function(h,i,u){var t=u(23);h.exports=function(n,l,g){if(t(n),l===void 0)return n;switch(g){case 1:return function(o){return n.call(l,o)};case 2:return function(o,r){return n.call(l,o,r)};case 3:return function(o,r,p){return n.call(l,o,r,p)}}return function(){return n.apply(l,arguments)}}},function(h,i){h.exports=function(u){if(typeof u!="function")throw TypeError(u+" is not a function!");return u}},function(h,i,u){h.exports=u(25)},function(h,i,u){var t=u(9),n=u(26);h.exports=u(18)?function(l,g,o){return t.setDesc(l,g,n(1,o))}:function(l,g,o){return l[g]=o,l}},function(h,i){h.exports=function(u,t){return{enumerable:!(1&u),configurable:!(2&u),writable:!(4&u),value:t}}},function(h,i,u){var t=u(16),n="__core-js_shared__",l=t[n]||(t[n]={});h.exports=function(g){return l[g]||(l[g]={})}},function(h,i,u){var t=u(9).setDesc,n=u(17),l=u(29)("toStringTag");h.exports=function(g,o,r){g&&!n(g=r?g:g.prototype,l)&&t(g,l,{configurable:!0,value:o})}},function(h,i,u){var t=u(27)("wks"),n=u(30),l=u(16).Symbol;h.exports=function(g){return t[g]||(t[g]=l&&l[g]||(l||n)("Symbol."+g))}},function(h,i){var u=0,t=Math.random();h.exports=function(n){return"Symbol(".concat(n===void 0?"":n,")_",(++u+t).toString(36))}},function(h,i,u){var t=u(9),n=u(32);h.exports=function(l,g){for(var o,r=n(l),p=t.getKeys(r),m=p.length,s=0;m>s;)if(r[o=p[s++]]===g)return o}},function(h,i,u){var t=u(33),n=u(35);h.exports=function(l){return t(n(l))}},function(h,i,u){var t=u(34);h.exports=Object("z").propertyIsEnumerable(0)?Object:function(n){return t(n)=="String"?n.split(""):Object(n)}},function(h,i){var u={}.toString;h.exports=function(t){return u.call(t).slice(8,-1)}},function(h,i){h.exports=function(u){if(u==null)throw TypeError("Can't call method on  "+u);return u}},function(h,i,u){var t=u(32),n=u(9).getNames,l={}.toString,g=typeof window=="object"&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(r){try{return n(r)}catch(p){return g.slice()}};h.exports.get=function(r){return g&&l.call(r)=="[object Window]"?o(r):n(t(r))}},function(h,i,u){var t=u(9);h.exports=function(n){var l=t.getKeys(n),g=t.getSymbols;if(g)for(var o,r=g(n),p=t.isEnum,m=0;r.length>m;)p.call(n,o=r[m++])&&l.push(o);return l}},function(h,i,u){var t=u(34);h.exports=Array.isArray||function(n){return t(n)=="Array"}},function(h,i,u){var t=u(40);h.exports=function(n){if(!t(n))throw TypeError(n+" is not an object!");return n}},function(h,i){h.exports=function(u){return typeof u=="object"?u!==null:typeof u=="function"}},function(h,i){h.exports=!0},function(h,i){},function(h,i,u){h.exports={default:u(44),__esModule:!0}},function(h,i,u){u(45),u(51),h.exports=u(29)("iterator")},function(h,i,u){"use strict";var t=u(46)(!0);u(48)(String,"String",function(n){this._t=String(n),this._i=0},function(){var n,l=this._t,g=this._i;return g>=l.length?{value:void 0,done:!0}:(n=t(l,g),this._i+=n.length,{value:n,done:!1})})},function(h,i,u){var t=u(47),n=u(35);h.exports=function(l){return function(g,o){var r,p,m=String(n(g)),s=t(o),_=m.length;return s<0||s>=_?l?"":void 0:(r=m.charCodeAt(s),r<55296||r>56319||s+1===_||(p=m.charCodeAt(s+1))<56320||p>57343?l?m.charAt(s):r:l?m.slice(s,s+2):(r-55296<<10)+(p-56320)+65536)}}},function(h,i){var u=Math.ceil,t=Math.floor;h.exports=function(n){return isNaN(n=+n)?0:(n>0?t:u)(n)}},function(h,i,u){"use strict";var t=u(41),n=u(20),l=u(24),g=u(25),o=u(17),r=u(49),p=u(50),m=u(28),s=u(9).getProto,_=u(29)("iterator"),c=!([].keys&&"next"in[].keys()),f="@@iterator",k="keys",y="values",A=function(){return this};h.exports=function(b,I,P,B,T,K,L){p(P,I,B);var D,S,w=function(W){if(!c&&W in x)return x[W];switch(W){case k:return function(){return new P(this,W)};case y:return function(){return new P(this,W)}}return function(){return new P(this,W)}},C=I+" Iterator",F=T==y,H=!1,x=b.prototype,O=x[_]||x[f]||T&&x[T],M=O||w(T);if(O){var Y=s(M.call(new b));m(Y,C,!0),!t&&o(x,f)&&g(Y,_,A),F&&O.name!==y&&(H=!0,M=function(){return O.call(this)})}if(t&&!L||!c&&!H&&x[_]||g(x,_,M),r[I]=M,r[C]=A,T)if(D={values:F?M:w(y),keys:K?M:w(k),entries:F?w("entries"):M},L)for(S in D)S in x||l(x,S,D[S]);else n(n.P+n.F*(c||H),I,D);return D}},function(h,i){h.exports={}},function(h,i,u){"use strict";var t=u(9),n=u(26),l=u(28),g={};u(25)(g,u(29)("iterator"),function(){return this}),h.exports=function(o,r,p){o.prototype=t.create(g,{next:n(1,p)}),l(o,r+" Iterator")}},function(h,i,u){u(52);var t=u(49);t.NodeList=t.HTMLCollection=t.Array},function(h,i,u){"use strict";var t=u(53),n=u(54),l=u(49),g=u(32);h.exports=u(48)(Array,"Array",function(o,r){this._t=g(o),this._i=0,this._k=r},function(){var o=this._t,r=this._k,p=this._i++;return!o||p>=o.length?(this._t=void 0,n(1)):r=="keys"?n(0,p):r=="values"?n(0,o[p]):n(0,[p,o[p]])},"values"),l.Arguments=l.Array,t("keys"),t("values"),t("entries")},function(h,i){h.exports=function(){}},function(h,i){h.exports=function(u,t){return{value:t,done:!!u}}},function(h,i,u){h.exports={default:u(56),__esModule:!0}},function(h,i,u){u(51),u(45),h.exports=u(57)},function(h,i,u){var t=u(39),n=u(58);h.exports=u(21).getIterator=function(l){var g=n(l);if(typeof g!="function")throw TypeError(l+" is not iterable!");return t(g.call(l))}},function(h,i,u){var t=u(59),n=u(29)("iterator"),l=u(49);h.exports=u(21).getIteratorMethod=function(g){if(g!=null)return g[n]||g["@@iterator"]||l[t(g)]}},function(h,i,u){var t=u(34),n=u(29)("toStringTag"),l=t(function(){return arguments}())=="Arguments";h.exports=function(g){var o,r,p;return g===void 0?"Undefined":g===null?"Null":typeof(r=(o=Object(g))[n])=="string"?r:l?t(o):(p=t(o))=="Object"&&typeof o.callee=="function"?"Arguments":p}},function(h,i,u){h.exports={default:u(61),__esModule:!0}},function(h,i,u){u(62),h.exports=u(21).Object.keys},function(h,i,u){var t=u(63);u(64)("keys",function(n){return function(l){return n(t(l))}})},function(h,i,u){var t=u(35);h.exports=function(n){return Object(t(n))}},function(h,i,u){var t=u(20),n=u(21),l=u(19);h.exports=function(g,o){var r=(n.Object||{})[g]||Object[g],p={};p[g]=o(r),t(t.S+t.F*l(function(){r(1)}),"Object",p)}},function(h,i,u){"use strict";var t=u(1).default;i.__esModule=!0;var n=u(6),l=t(n);i.default=function(g){g.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new l.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},h.exports=i.default},function(h,i,u){"use strict";var t=u(1).default;i.__esModule=!0;var n=u(5),l=u(6),g=t(l);i.default=function(o){o.registerHelper("if",function(r,p){if(arguments.length!=2)throw new g.default("#if requires exactly one argument");return n.isFunction(r)&&(r=r.call(this)),!p.hash.includeZero&&!r||n.isEmpty(r)?p.inverse(this):p.fn(this)}),o.registerHelper("unless",function(r,p){if(arguments.length!=2)throw new g.default("#unless requires exactly one argument");return o.helpers.if.call(this,r,{fn:p.inverse,inverse:p.fn,hash:p.hash})})},h.exports=i.default},function(h,i){"use strict";i.__esModule=!0,i.default=function(u){u.registerHelper("log",function(){for(var t=[void 0],n=arguments[arguments.length-1],l=0;l<arguments.length-1;l++)t.push(arguments[l]);var g=1;n.hash.level!=null?g=n.hash.level:n.data&&n.data.level!=null&&(g=n.data.level),t[0]=g,u.log.apply(u,t)})},h.exports=i.default},function(h,i){"use strict";i.__esModule=!0,i.default=function(u){u.registerHelper("lookup",function(t,n,l){return t&&l.lookupProperty(t,n)})},h.exports=i.default},function(h,i,u){"use strict";var t=u(1).default;i.__esModule=!0;var n=u(5),l=u(6),g=t(l);i.default=function(o){o.registerHelper("with",function(r,p){if(arguments.length!=2)throw new g.default("#with requires exactly one argument");n.isFunction(r)&&(r=r.call(this));var m=p.fn;if(n.isEmpty(r))return p.inverse(this);var s=p.data;return p.data&&p.ids&&(s=n.createFrame(p.data),s.contextPath=n.appendContextPath(p.data.contextPath,p.ids[0])),m(r,{data:s,blockParams:n.blockParams([r],[s&&s.contextPath])})})},h.exports=i.default},function(h,i,u){"use strict";function t(o){g.default(o)}var n=u(1).default;i.__esModule=!0,i.registerDefaultDecorators=t;var l=u(71),g=n(l)},function(h,i,u){"use strict";i.__esModule=!0;var t=u(5);i.default=function(n){n.registerDecorator("inline",function(l,g,o,r){var p=l;return g.partials||(g.partials={},p=function(m,s){var _=o.partials;o.partials=t.extend({},_,g.partials);var c=l(m,s);return o.partials=_,c}),g.partials[r.args[0]]=r.fn,p})},h.exports=i.default},function(h,i,u){"use strict";i.__esModule=!0;var t=u(5),n={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(l){if(typeof l=="string"){var g=t.indexOf(n.methodMap,l.toLowerCase());l=g>=0?g:parseInt(l,10)}return l},log:function(l){if(l=n.lookupLevel(l),typeof console!="undefined"&&n.lookupLevel(n.level)<=l){var g=n.methodMap[l];console[g]||(g="log");for(var o=arguments.length,r=Array(o>1?o-1:0),p=1;p<o;p++)r[p-1]=arguments[p];console[g].apply(console,r)}}};i.default=n,h.exports=i.default},function(h,i,u){"use strict";function t(k){var y=r(null);y.constructor=!1,y.__defineGetter__=!1,y.__defineSetter__=!1,y.__lookupGetter__=!1;var A=r(null);return A.__proto__=!1,{properties:{whitelist:s.createNewLookupObject(A,k.allowedProtoProperties),defaultValue:k.allowProtoPropertiesByDefault},methods:{whitelist:s.createNewLookupObject(y,k.allowedProtoMethods),defaultValue:k.allowProtoMethodsByDefault}}}function n(k,y,A){return l(typeof k=="function"?y.methods:y.properties,A)}function l(k,y){return k.whitelist[y]!==void 0?k.whitelist[y]===!0:k.defaultValue!==void 0?k.defaultValue:(g(y),!1)}function g(k){f[k]!==!0&&(f[k]=!0,c.default.log("error",'Handlebars: Access has been denied to resolve the property "'+k+`" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`))}function o(){p(f).forEach(function(k){delete f[k]})}var r=u(74).default,p=u(60).default,m=u(1).default;i.__esModule=!0,i.createProtoAccessControl=t,i.resultIsAllowed=n,i.resetLoggedProperties=o;var s=u(76),_=u(72),c=m(_),f=r(null)},function(h,i,u){h.exports={default:u(75),__esModule:!0}},function(h,i,u){var t=u(9);h.exports=function(n,l){return t.create(n,l)}},function(h,i,u){"use strict";function t(){for(var g=arguments.length,o=Array(g),r=0;r<g;r++)o[r]=arguments[r];return l.extend.apply(void 0,[n(null)].concat(o))}var n=u(74).default;i.__esModule=!0,i.createNewLookupObject=t;var l=u(5)},function(h,i){"use strict";function u(t){this.string=t}i.__esModule=!0,u.prototype.toString=u.prototype.toHTML=function(){return""+this.string},i.default=u,h.exports=i.default},function(h,i,u){"use strict";function t(D){var S=D&&D[0]||1,w=B.COMPILER_REVISION;if(!(S>=B.LAST_COMPATIBLE_COMPILER_REVISION&&S<=B.COMPILER_REVISION)){if(S<B.LAST_COMPATIBLE_COMPILER_REVISION){var C=B.REVISION_CHANGES[w],F=B.REVISION_CHANGES[S];throw new P.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+C+") or downgrade your runtime to an older version ("+F+").")}throw new P.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+D[1]+").")}}function n(D,S){function w(x,O,M){M.hash&&(O=b.extend({},O,M.hash),M.ids&&(M.ids[0]=!0)),x=S.VM.resolvePartial.call(this,x,O,M);var Y=b.extend({},M,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),W=S.VM.invokePartial.call(this,x,O,Y);if(W==null&&S.compile&&(M.partials[M.name]=S.compile(x,D.compilerOptions,S),W=M.partials[M.name](O,Y)),W!=null){if(M.indent){for(var X=W.split(`
`),re=0,de=X.length;re<de&&(X[re]||re+1!==de);re++)X[re]=M.indent+X[re];W=X.join(`
`)}return W}throw new P.default("The partial "+M.name+" could not be compiled when running in runtime-only mode")}function C(x){function O(re){return""+D.main(H,re,H.helpers,H.partials,Y,X,W)}var M=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],Y=M.data;C._setup(M),!M.partial&&D.useData&&(Y=p(x,Y));var W=void 0,X=D.useBlockParams?[]:void 0;return D.useDepths&&(W=M.depths?x!=M.depths[0]?[x].concat(M.depths):M.depths:[x]),(O=m(D.main,O,H,M.depths||[],Y,X))(x,M)}if(!S)throw new P.default("No environment passed to template");if(!D||!D.main)throw new P.default("Unknown template object: "+typeof D);D.main.decorator=D.main_d,S.VM.checkRevision(D.compiler);var F=D.compiler&&D.compiler[0]===7,H={strict:function(x,O,M){if(!(x&&O in x))throw new P.default('"'+O+'" not defined in '+x,{loc:M});return H.lookupProperty(x,O)},lookupProperty:function(x,O){var M=x[O];return M==null||Object.prototype.hasOwnProperty.call(x,O)||L.resultIsAllowed(M,H.protoAccessControl,O)?M:void 0},lookup:function(x,O){for(var M=x.length,Y=0;Y<M;Y++){var W=x[Y]&&H.lookupProperty(x[Y],O);if(W!=null)return x[Y][O]}},lambda:function(x,O){return typeof x=="function"?x.call(O):x},escapeExpression:b.escapeExpression,invokePartial:w,fn:function(x){var O=D[x];return O.decorator=D[x+"_d"],O},programs:[],program:function(x,O,M,Y,W){var X=this.programs[x],re=this.fn(x);return O||W||Y||M?X=l(this,x,re,O,M,Y,W):X||(X=this.programs[x]=l(this,x,re)),X},data:function(x,O){for(;x&&O--;)x=x._parent;return x},mergeIfNeeded:function(x,O){var M=x||O;return x&&O&&x!==O&&(M=b.extend({},O,x)),M},nullContext:c({}),noop:S.VM.noop,compilerInfo:D.compiler};return C.isTop=!0,C._setup=function(x){if(x.partial)H.protoAccessControl=x.protoAccessControl,H.helpers=x.helpers,H.partials=x.partials,H.decorators=x.decorators,H.hooks=x.hooks;else{var O=b.extend({},S.helpers,x.helpers);s(O,H),H.helpers=O,D.usePartial&&(H.partials=H.mergeIfNeeded(x.partials,S.partials)),(D.usePartial||D.useDecorators)&&(H.decorators=b.extend({},S.decorators,x.decorators)),H.hooks={},H.protoAccessControl=L.createProtoAccessControl(x);var M=x.allowCallsToHelperMissing||F;T.moveHelperToHooks(H,"helperMissing",M),T.moveHelperToHooks(H,"blockHelperMissing",M)}},C._child=function(x,O,M,Y){if(D.useBlockParams&&!M)throw new P.default("must pass block params");if(D.useDepths&&!Y)throw new P.default("must pass parent depths");return l(H,x,D[x],O,0,M,Y)},C}function l(D,S,w,C,F,H,x){function O(M){var Y=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],W=x;return!x||M==x[0]||M===D.nullContext&&x[0]===null||(W=[M].concat(x)),w(D,M,D.helpers,D.partials,Y.data||C,H&&[Y.blockParams].concat(H),W)}return O=m(w,O,D,x,C,H),O.program=S,O.depth=x?x.length:0,O.blockParams=F||0,O}function g(D,S,w){return D?D.call||w.name||(w.name=D,D=w.partials[D]):D=w.name==="@partial-block"?w.data["partial-block"]:w.partials[w.name],D}function o(D,S,w){var C=w.data&&w.data["partial-block"];w.partial=!0,w.ids&&(w.data.contextPath=w.ids[0]||w.data.contextPath);var F=void 0;if(w.fn&&w.fn!==r&&function(){w.data=B.createFrame(w.data);var H=w.fn;F=w.data["partial-block"]=function(x){var O=arguments.length<=1||arguments[1]===void 0?{}:arguments[1];return O.data=B.createFrame(O.data),O.data["partial-block"]=C,H(x,O)},H.partials&&(w.partials=b.extend({},w.partials,H.partials))}(),D===void 0&&F&&(D=F),D===void 0)throw new P.default("The partial "+w.name+" could not be found");if(D instanceof Function)return D(S,w)}function r(){return""}function p(D,S){return S&&"root"in S||(S=S?B.createFrame(S):{},S.root=D),S}function m(D,S,w,C,F,H){if(D.decorator){var x={};S=D.decorator(S,x,w,C&&C[0],F,H,C),b.extend(S,x)}return S}function s(D,S){f(D).forEach(function(w){var C=D[w];D[w]=_(C,S)})}function _(D,S){var w=S.lookupProperty;return K.wrapHelper(D,function(C){return b.extend({lookupProperty:w},C)})}var c=u(79).default,f=u(60).default,k=u(3).default,y=u(1).default;i.__esModule=!0,i.checkRevision=t,i.template=n,i.wrapProgram=l,i.resolvePartial=g,i.invokePartial=o,i.noop=r;var A=u(5),b=k(A),I=u(6),P=y(I),B=u(4),T=u(10),K=u(82),L=u(73)},function(h,i,u){h.exports={default:u(80),__esModule:!0}},function(h,i,u){u(81),h.exports=u(21).Object.seal},function(h,i,u){var t=u(40);u(64)("seal",function(n){return function(l){return n&&t(l)?n(l):l}})},function(h,i){"use strict";function u(t,n){if(typeof t!="function")return t;var l=function(){var g=arguments[arguments.length-1];return arguments[arguments.length-1]=n(g),t.apply(this,arguments)};return l}i.__esModule=!0,i.wrapHelper=u},function(h,i){"use strict";i.__esModule=!0,i.default=function(u){(function(){typeof globalThis!="object"&&(Object.prototype.__defineGetter__("__magic__",function(){return this}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__)})();var t=globalThis.Handlebars;u.noConflict=function(){return globalThis.Handlebars===u&&(globalThis.Handlebars=t),u}},h.exports=i.default},function(h,i){"use strict";i.__esModule=!0;var u={helpers:{helperExpression:function(t){return t.type==="SubExpression"||(t.type==="MustacheStatement"||t.type==="BlockStatement")&&!!(t.params&&t.params.length||t.hash)},scopedId:function(t){return/^\.|this\b/.test(t.original)},simpleId:function(t){return t.parts.length===1&&!u.helpers.scopedId(t)&&!t.depth}}};i.default=u,h.exports=i.default},function(h,i,u){"use strict";function t(k,y){if(k.type==="Program")return k;r.default.yy=f,f.locInfo=function(b){return new f.SourceLocation(y&&y.srcName,b)};var A=r.default.parse(k);return A}function n(k,y){var A=t(k,y),b=new m.default(y);return b.accept(A)}var l=u(1).default,g=u(3).default;i.__esModule=!0,i.parseWithoutProcessing=t,i.parse=n;var o=u(86),r=l(o),p=u(87),m=l(p),s=u(89),_=g(s),c=u(5);i.parser=r.default;var f={};c.extend(f,_)},function(h,i){"use strict";i.__esModule=!0;var u=function(){function t(){this.yy={}}var n={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(g,o,r,p,m,s,_){var c=s.length-1;switch(m){case 1:return s[c-1];case 2:this.$=p.prepareProgram(s[c]);break;case 3:this.$=s[c];break;case 4:this.$=s[c];break;case 5:this.$=s[c];break;case 6:this.$=s[c];break;case 7:this.$=s[c];break;case 8:this.$=s[c];break;case 9:this.$={type:"CommentStatement",value:p.stripComment(s[c]),strip:p.stripFlags(s[c],s[c]),loc:p.locInfo(this._$)};break;case 10:this.$={type:"ContentStatement",original:s[c],value:s[c],loc:p.locInfo(this._$)};break;case 11:this.$=p.prepareRawBlock(s[c-2],s[c-1],s[c],this._$);break;case 12:this.$={path:s[c-3],params:s[c-2],hash:s[c-1]};break;case 13:this.$=p.prepareBlock(s[c-3],s[c-2],s[c-1],s[c],!1,this._$);break;case 14:this.$=p.prepareBlock(s[c-3],s[c-2],s[c-1],s[c],!0,this._$);break;case 15:this.$={open:s[c-5],path:s[c-4],params:s[c-3],hash:s[c-2],blockParams:s[c-1],strip:p.stripFlags(s[c-5],s[c])};break;case 16:this.$={path:s[c-4],params:s[c-3],hash:s[c-2],blockParams:s[c-1],strip:p.stripFlags(s[c-5],s[c])};break;case 17:this.$={path:s[c-4],params:s[c-3],hash:s[c-2],blockParams:s[c-1],strip:p.stripFlags(s[c-5],s[c])};break;case 18:this.$={strip:p.stripFlags(s[c-1],s[c-1]),program:s[c]};break;case 19:var f=p.prepareBlock(s[c-2],s[c-1],s[c],s[c],!1,this._$),k=p.prepareProgram([f],s[c-1].loc);k.chained=!0,this.$={strip:s[c-2].strip,program:k,chain:!0};break;case 20:this.$=s[c];break;case 21:this.$={path:s[c-1],strip:p.stripFlags(s[c-2],s[c])};break;case 22:this.$=p.prepareMustache(s[c-3],s[c-2],s[c-1],s[c-4],p.stripFlags(s[c-4],s[c]),this._$);break;case 23:this.$=p.prepareMustache(s[c-3],s[c-2],s[c-1],s[c-4],p.stripFlags(s[c-4],s[c]),this._$);break;case 24:this.$={type:"PartialStatement",name:s[c-3],params:s[c-2],hash:s[c-1],indent:"",strip:p.stripFlags(s[c-4],s[c]),loc:p.locInfo(this._$)};break;case 25:this.$=p.preparePartialBlock(s[c-2],s[c-1],s[c],this._$);break;case 26:this.$={path:s[c-3],params:s[c-2],hash:s[c-1],strip:p.stripFlags(s[c-4],s[c])};break;case 27:this.$=s[c];break;case 28:this.$=s[c];break;case 29:this.$={type:"SubExpression",path:s[c-3],params:s[c-2],hash:s[c-1],loc:p.locInfo(this._$)};break;case 30:this.$={type:"Hash",pairs:s[c],loc:p.locInfo(this._$)};break;case 31:this.$={type:"HashPair",key:p.id(s[c-2]),value:s[c],loc:p.locInfo(this._$)};break;case 32:this.$=p.id(s[c-1]);break;case 33:this.$=s[c];break;case 34:this.$=s[c];break;case 35:this.$={type:"StringLiteral",value:s[c],original:s[c],loc:p.locInfo(this._$)};break;case 36:this.$={type:"NumberLiteral",value:Number(s[c]),original:Number(s[c]),loc:p.locInfo(this._$)};break;case 37:this.$={type:"BooleanLiteral",value:s[c]==="true",original:s[c]==="true",loc:p.locInfo(this._$)};break;case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:p.locInfo(this._$)};break;case 39:this.$={type:"NullLiteral",original:null,value:null,loc:p.locInfo(this._$)};break;case 40:this.$=s[c];break;case 41:this.$=s[c];break;case 42:this.$=p.preparePath(!0,s[c],this._$);break;case 43:this.$=p.preparePath(!1,s[c],this._$);break;case 44:s[c-2].push({part:p.id(s[c]),original:s[c],separator:s[c-1]}),this.$=s[c-2];break;case 45:this.$=[{part:p.id(s[c]),original:s[c]}];break;case 46:this.$=[];break;case 47:s[c-1].push(s[c]);break;case 48:this.$=[];break;case 49:s[c-1].push(s[c]);break;case 50:this.$=[];break;case 51:s[c-1].push(s[c]);break;case 58:this.$=[];break;case 59:s[c-1].push(s[c]);break;case 64:this.$=[];break;case 65:s[c-1].push(s[c]);break;case 70:this.$=[];break;case 71:s[c-1].push(s[c]);break;case 78:this.$=[];break;case 79:s[c-1].push(s[c]);break;case 82:this.$=[];break;case 83:s[c-1].push(s[c]);break;case 86:this.$=[];break;case 87:s[c-1].push(s[c]);break;case 90:this.$=[];break;case 91:s[c-1].push(s[c]);break;case 94:this.$=[];break;case 95:s[c-1].push(s[c]);break;case 98:this.$=[s[c]];break;case 99:s[c-1].push(s[c]);break;case 100:this.$=[s[c]];break;case 101:s[c-1].push(s[c])}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{15:[2,48],17:39,18:[2,48]},{20:41,56:40,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:44,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:45,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:41,56:48,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:49,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,50]},{72:[1,35],86:51},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:52,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:53,38:55,39:[1,57],43:56,44:[1,58],45:54,47:[2,54]},{28:59,43:60,44:[1,58],47:[2,56]},{13:62,15:[1,20],18:[1,61]},{33:[2,86],57:63,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:64,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:65,47:[1,66]},{30:67,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:68,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:69,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:70,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:74,33:[2,80],50:71,63:72,64:75,65:[1,43],69:73,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,79]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,50]},{20:74,53:80,54:[2,84],63:81,64:75,65:[1,43],69:82,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:83,47:[1,66]},{47:[2,55]},{4:84,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:85,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:86,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:87,47:[1,66]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:74,33:[2,88],58:88,63:89,64:75,65:[1,43],69:90,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:91,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:92,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,31:93,33:[2,60],63:94,64:75,65:[1,43],69:95,70:76,71:77,72:[1,78],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,66],36:96,63:97,64:75,65:[1,43],69:98,70:76,71:77,72:[1,78],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,22:99,23:[2,52],63:100,64:75,65:[1,43],69:101,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,92],62:102,63:103,64:75,65:[1,43],69:104,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,105]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:106,72:[1,107],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,108],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,109]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:55,39:[1,57],43:56,44:[1,58],45:111,46:110,47:[2,76]},{33:[2,70],40:112,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,113]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:74,63:115,64:75,65:[1,43],67:114,68:[2,96],69:116,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,117]},{32:118,33:[2,62],74:119,75:[1,120]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:121,74:122,75:[1,120]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,123]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,124]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,108]},{20:74,63:125,64:75,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:74,33:[2,72],41:126,63:127,64:75,65:[1,43],69:128,70:76,71:77,72:[1,78],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,129]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,130]},{33:[2,63]},{72:[1,132],76:131},{33:[1,133]},{33:[2,69]},{15:[2,12],18:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:134,74:135,75:[1,120]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,137],77:[1,136]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,138]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],54:[2,55],56:[2,20],60:[2,57],73:[2,81],82:[2,85],86:[2,18],90:[2,89],101:[2,53],104:[2,93],110:[2,19],111:[2,77],116:[2,97],119:[2,63],122:[2,69],135:[2,75],136:[2,32]},parseError:function(g,o){throw new Error(g)},parse:function(g){function o(){var H;return H=r.lexer.lex()||1,typeof H!="number"&&(H=r.symbols_[H]||H),H}var r=this,p=[0],m=[null],s=[],_=this.table,c="",f=0,k=0,y=0;this.lexer.setInput(g),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc=="undefined"&&(this.lexer.yylloc={});var A=this.lexer.yylloc;s.push(A);var b=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);for(var I,P,B,T,K,L,D,S,w,C={};;){if(B=p[p.length-1],this.defaultActions[B]?T=this.defaultActions[B]:(I!==null&&typeof I!="undefined"||(I=o()),T=_[B]&&_[B][I]),typeof T=="undefined"||!T.length||!T[0]){var F="";if(!y){w=[];for(L in _[B])this.terminals_[L]&&L>2&&w.push("'"+this.terminals_[L]+"'");F=this.lexer.showPosition?"Parse error on line "+(f+1)+`:
`+this.lexer.showPosition()+`
Expecting `+w.join(", ")+", got '"+(this.terminals_[I]||I)+"'":"Parse error on line "+(f+1)+": Unexpected "+(I==1?"end of input":"'"+(this.terminals_[I]||I)+"'"),this.parseError(F,{text:this.lexer.match,token:this.terminals_[I]||I,line:this.lexer.yylineno,loc:A,expected:w})}}if(T[0]instanceof Array&&T.length>1)throw new Error("Parse Error: multiple actions possible at state: "+B+", token: "+I);switch(T[0]){case 1:p.push(I),m.push(this.lexer.yytext),s.push(this.lexer.yylloc),p.push(T[1]),I=null,P?(I=P,P=null):(k=this.lexer.yyleng,c=this.lexer.yytext,f=this.lexer.yylineno,A=this.lexer.yylloc,y>0&&y--);break;case 2:if(D=this.productions_[T[1]][1],C.$=m[m.length-D],C._$={first_line:s[s.length-(D||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(D||1)].first_column,last_column:s[s.length-1].last_column},b&&(C._$.range=[s[s.length-(D||1)].range[0],s[s.length-1].range[1]]),K=this.performAction.call(C,c,k,f,this.yy,T[1],m,s),typeof K!="undefined")return K;D&&(p=p.slice(0,-1*D*2),m=m.slice(0,-1*D),s=s.slice(0,-1*D)),p.push(this.productions_[T[1]][0]),m.push(C.$),s.push(C._$),S=_[p[p.length-2]][p[p.length-1]],p.push(S);break;case 3:return!0}}return!0}},l=function(){var g={EOF:1,parseError:function(o,r){if(!this.yy.parser)throw new Error(o);this.yy.parser.parseError(o,r)},setInput:function(o){return this._input=o,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var o=this._input[0];this.yytext+=o,this.yyleng++,this.offset++,this.match+=o,this.matched+=o;var r=o.match(/(?:\r\n?|\n).*/g);return r?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),o},unput:function(o){var r=o.length,p=o.split(/(?:\r\n?|\n)/g);this._input=o+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-r-1),this.offset-=r;var m=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),p.length-1&&(this.yylineno-=p.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:p?(p.length===m.length?this.yylloc.first_column:0)+m[m.length-p.length].length-p[0].length:this.yylloc.first_column-r},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-r]),this},more:function(){return this._more=!0,this},less:function(o){this.unput(this.match.slice(o))},pastInput:function(){var o=this.matched.substr(0,this.matched.length-this.match.length);return(o.length>20?"...":"")+o.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var o=this.match;return o.length<20&&(o+=this._input.substr(0,20-o.length)),(o.substr(0,20)+(o.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var o=this.pastInput(),r=new Array(o.length+1).join("-");return o+this.upcomingInput()+`
`+r+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var o,r,p,m,s;this._more||(this.yytext="",this.match="");for(var _=this._currentRules(),c=0;c<_.length&&(p=this._input.match(this.rules[_[c]]),!p||r&&!(p[0].length>r[0].length)||(r=p,m=c,this.options.flex));c++);return r?(s=r[0].match(/(?:\r\n?|\n).*/g),s&&(this.yylineno+=s.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:s?s[s.length-1].length-s[s.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+r[0].length},this.yytext+=r[0],this.match+=r[0],this.matches=r,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(r[0].length),this.matched+=r[0],o=this.performAction.call(this,this.yy,this,_[m],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),o||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var o=this.next();return typeof o!="undefined"?o:this.lex()},begin:function(o){this.conditionStack.push(o)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(o){this.begin(o)}};return g.options={},g.performAction=function(o,r,p,m){function s(_,c){return r.yytext=r.yytext.substring(_,r.yyleng-c+_)}switch(p){case 0:if(r.yytext.slice(-2)==="\\\\"?(s(0,1),this.begin("mu")):r.yytext.slice(-1)==="\\"?(s(0,1),this.begin("emu")):this.begin("mu"),r.yytext)return 15;break;case 1:return 15;case 2:return this.popState(),15;case 3:return this.begin("raw"),15;case 4:return this.popState(),this.conditionStack[this.conditionStack.length-1]==="raw"?15:(s(5,9),"END_RAW_BLOCK");case 5:return 15;case 6:return this.popState(),14;case 7:return 65;case 8:return 68;case 9:return 19;case 10:return this.popState(),this.begin("raw"),23;case 11:return 55;case 12:return 60;case 13:return 29;case 14:return 47;case 15:return this.popState(),44;case 16:return this.popState(),44;case 17:return 34;case 18:return 39;case 19:return 51;case 20:return 48;case 21:this.unput(r.yytext),this.popState(),this.begin("com");break;case 22:return this.popState(),14;case 23:return 48;case 24:return 73;case 25:return 72;case 26:return 72;case 27:return 87;case 28:break;case 29:return this.popState(),54;case 30:return this.popState(),33;case 31:return r.yytext=s(1,2).replace(/\\"/g,'"'),80;case 32:return r.yytext=s(1,2).replace(/\\'/g,"'"),80;case 33:return 85;case 34:return 82;case 35:return 82;case 36:return 83;case 37:return 84;case 38:return 81;case 39:return 75;case 40:return 77;case 41:return 72;case 42:return r.yytext=r.yytext.replace(/\\([\\\]])/g,"$1"),72;case 43:return"INVALID";case 44:return 5}},g.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],g.conditions={mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}},g}();return n.lexer=l,t.prototype=n,n.Parser=t,new t}();i.default=u,h.exports=i.default},function(h,i,u){"use strict";function t(){var s=arguments.length<=0||arguments[0]===void 0?{}:arguments[0];this.options=s}function n(s,_,c){_===void 0&&(_=s.length);var f=s[_-1],k=s[_-2];return f?f.type==="ContentStatement"?(k||!c?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(f.original):void 0:c}function l(s,_,c){_===void 0&&(_=-1);var f=s[_+1],k=s[_+2];return f?f.type==="ContentStatement"?(k||!c?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(f.original):void 0:c}function g(s,_,c){var f=s[_==null?0:_+1];if(f&&f.type==="ContentStatement"&&(c||!f.rightStripped)){var k=f.value;f.value=f.value.replace(c?/^\s+/:/^[ \t]*\r?\n?/,""),f.rightStripped=f.value!==k}}function o(s,_,c){var f=s[_==null?s.length-1:_-1];if(f&&f.type==="ContentStatement"&&(c||!f.leftStripped)){var k=f.value;return f.value=f.value.replace(c?/\s+$/:/[ \t]+$/,""),f.leftStripped=f.value!==k,f.leftStripped}}var r=u(1).default;i.__esModule=!0;var p=u(88),m=r(p);t.prototype=new m.default,t.prototype.Program=function(s){var _=!this.options.ignoreStandalone,c=!this.isRootSeen;this.isRootSeen=!0;for(var f=s.body,k=0,y=f.length;k<y;k++){var A=f[k],b=this.accept(A);if(b){var I=n(f,k,c),P=l(f,k,c),B=b.openStandalone&&I,T=b.closeStandalone&&P,K=b.inlineStandalone&&I&&P;b.close&&g(f,k,!0),b.open&&o(f,k,!0),_&&K&&(g(f,k),o(f,k)&&A.type==="PartialStatement"&&(A.indent=/([ \t]+$)/.exec(f[k-1].original)[1])),_&&B&&(g((A.program||A.inverse).body),o(f,k)),_&&T&&(g(f,k),o((A.inverse||A.program).body))}}return s},t.prototype.BlockStatement=t.prototype.DecoratorBlock=t.prototype.PartialBlockStatement=function(s){this.accept(s.program),this.accept(s.inverse);var _=s.program||s.inverse,c=s.program&&s.inverse,f=c,k=c;if(c&&c.chained)for(f=c.body[0].program;k.chained;)k=k.body[k.body.length-1].program;var y={open:s.openStrip.open,close:s.closeStrip.close,openStandalone:l(_.body),closeStandalone:n((f||_).body)};if(s.openStrip.close&&g(_.body,null,!0),c){var A=s.inverseStrip;A.open&&o(_.body,null,!0),A.close&&g(f.body,null,!0),s.closeStrip.open&&o(k.body,null,!0),!this.options.ignoreStandalone&&n(_.body)&&l(f.body)&&(o(_.body),g(f.body))}else s.closeStrip.open&&o(_.body,null,!0);return y},t.prototype.Decorator=t.prototype.MustacheStatement=function(s){return s.strip},t.prototype.PartialStatement=t.prototype.CommentStatement=function(s){var _=s.strip||{};return{inlineStandalone:!0,open:_.open,close:_.close}},i.default=t,h.exports=i.default},function(h,i,u){"use strict";function t(){this.parents=[]}function n(m){this.acceptRequired(m,"path"),this.acceptArray(m.params),this.acceptKey(m,"hash")}function l(m){n.call(this,m),this.acceptKey(m,"program"),this.acceptKey(m,"inverse")}function g(m){this.acceptRequired(m,"name"),this.acceptArray(m.params),this.acceptKey(m,"hash")}var o=u(1).default;i.__esModule=!0;var r=u(6),p=o(r);t.prototype={constructor:t,mutating:!1,acceptKey:function(m,s){var _=this.accept(m[s]);if(this.mutating){if(_&&!t.prototype[_.type])throw new p.default('Unexpected node type "'+_.type+'" found when accepting '+s+" on "+m.type);m[s]=_}},acceptRequired:function(m,s){if(this.acceptKey(m,s),!m[s])throw new p.default(m.type+" requires "+s)},acceptArray:function(m){for(var s=0,_=m.length;s<_;s++)this.acceptKey(m,s),m[s]||(m.splice(s,1),s--,_--)},accept:function(m){if(m){if(!this[m.type])throw new p.default("Unknown type: "+m.type,m);this.current&&this.parents.unshift(this.current),this.current=m;var s=this[m.type](m);return this.current=this.parents.shift(),!this.mutating||s?s:s!==!1?m:void 0}},Program:function(m){this.acceptArray(m.body)},MustacheStatement:n,Decorator:n,BlockStatement:l,DecoratorBlock:l,PartialStatement:g,PartialBlockStatement:function(m){g.call(this,m),this.acceptKey(m,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:n,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(m){this.acceptArray(m.pairs)},HashPair:function(m){this.acceptRequired(m,"value")}},i.default=t,h.exports=i.default},function(h,i,u){"use strict";function t(A,b){if(b=b.path?b.path.original:b,A.path.original!==b){var I={loc:A.path.loc};throw new y.default(A.path.original+" doesn't match "+b,I)}}function n(A,b){this.source=A,this.start={line:b.first_line,column:b.first_column},this.end={line:b.last_line,column:b.last_column}}function l(A){return/^\[.*\]$/.test(A)?A.substring(1,A.length-1):A}function g(A,b){return{open:A.charAt(2)==="~",close:b.charAt(b.length-3)==="~"}}function o(A){return A.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")}function r(A,b,I){I=this.locInfo(I);for(var P=A?"@":"",B=[],T=0,K=0,L=b.length;K<L;K++){var D=b[K].part,S=b[K].original!==D;if(P+=(b[K].separator||"")+D,S||D!==".."&&D!=="."&&D!=="this")B.push(D);else{if(B.length>0)throw new y.default("Invalid path: "+P,{loc:I});D===".."&&T++}}return{type:"PathExpression",data:A,depth:T,parts:B,original:P,loc:I}}function p(A,b,I,P,B,T){var K=P.charAt(3)||P.charAt(2),L=K!=="{"&&K!=="&",D=/\*/.test(P);return{type:D?"Decorator":"MustacheStatement",path:A,params:b,hash:I,escaped:L,strip:B,loc:this.locInfo(T)}}function m(A,b,I,P){t(A,I),P=this.locInfo(P);var B={type:"Program",body:b,strip:{},loc:P};return{type:"BlockStatement",path:A.path,params:A.params,hash:A.hash,program:B,openStrip:{},inverseStrip:{},closeStrip:{},loc:P}}function s(A,b,I,P,B,T){P&&P.path&&t(A,P);var K=/\*/.test(A.open);b.blockParams=A.blockParams;var L=void 0,D=void 0;if(I){if(K)throw new y.default("Unexpected inverse block on decorator",I);I.chain&&(I.program.body[0].closeStrip=P.strip),D=I.strip,L=I.program}return B&&(B=L,L=b,b=B),{type:K?"DecoratorBlock":"BlockStatement",path:A.path,params:A.params,hash:A.hash,program:b,inverse:L,openStrip:A.strip,inverseStrip:D,closeStrip:P&&P.strip,loc:this.locInfo(T)}}function _(A,b){if(!b&&A.length){var I=A[0].loc,P=A[A.length-1].loc;I&&P&&(b={source:I.source,start:{line:I.start.line,column:I.start.column},end:{line:P.end.line,column:P.end.column}})}return{type:"Program",body:A,strip:{},loc:b}}function c(A,b,I,P){return t(A,I),{type:"PartialBlockStatement",name:A.path,params:A.params,hash:A.hash,program:b,openStrip:A.strip,closeStrip:I&&I.strip,loc:this.locInfo(P)}}var f=u(1).default;i.__esModule=!0,i.SourceLocation=n,i.id=l,i.stripFlags=g,i.stripComment=o,i.preparePath=r,i.prepareMustache=p,i.prepareRawBlock=m,i.prepareBlock=s,i.prepareProgram=_,i.preparePartialBlock=c;var k=u(6),y=f(k)},function(h,i,u){"use strict";function t(){}function n(y,A,b){if(y==null||typeof y!="string"&&y.type!=="Program")throw new s.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+y);A=A||{},"data"in A||(A.data=!0),A.compat&&(A.useDepths=!0);var I=b.parse(y,A),P=new b.Compiler().compile(I,A);return new b.JavaScriptCompiler().compile(P,A)}function l(y,A,b){function I(){var T=b.parse(y,A),K=new b.Compiler().compile(T,A),L=new b.JavaScriptCompiler().compile(K,A,void 0,!0);return b.template(L)}function P(T,K){return B||(B=I()),B.call(this,T,K)}if(A===void 0&&(A={}),y==null||typeof y!="string"&&y.type!=="Program")throw new s.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+y);A=_.extend({},A),"data"in A||(A.data=!0),A.compat&&(A.useDepths=!0);var B=void 0;return P._setup=function(T){return B||(B=I()),B._setup(T)},P._child=function(T,K,L,D){return B||(B=I()),B._child(T,K,L,D)},P}function g(y,A){if(y===A)return!0;if(_.isArray(y)&&_.isArray(A)&&y.length===A.length){for(var b=0;b<y.length;b++)if(!g(y[b],A[b]))return!1;return!0}}function o(y){if(!y.path.parts){var A=y.path;y.path={type:"PathExpression",data:!1,depth:0,parts:[A.original+""],original:A.original+"",loc:A.loc}}}var r=u(74).default,p=u(1).default;i.__esModule=!0,i.Compiler=t,i.precompile=n,i.compile=l;var m=u(6),s=p(m),_=u(5),c=u(84),f=p(c),k=[].slice;t.prototype={compiler:t,equals:function(y){var A=this.opcodes.length;if(y.opcodes.length!==A)return!1;for(var b=0;b<A;b++){var I=this.opcodes[b],P=y.opcodes[b];if(I.opcode!==P.opcode||!g(I.args,P.args))return!1}A=this.children.length;for(var b=0;b<A;b++)if(!this.children[b].equals(y.children[b]))return!1;return!0},guid:0,compile:function(y,A){return this.sourceNode=[],this.opcodes=[],this.children=[],this.options=A,this.stringParams=A.stringParams,this.trackIds=A.trackIds,A.blockParams=A.blockParams||[],A.knownHelpers=_.extend(r(null),{helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},A.knownHelpers),this.accept(y)},compileProgram:function(y){var A=new this.compiler,b=A.compile(y,this.options),I=this.guid++;return this.usePartial=this.usePartial||b.usePartial,this.children[I]=b,this.useDepths=this.useDepths||b.useDepths,I},accept:function(y){if(!this[y.type])throw new s.default("Unknown type: "+y.type,y);this.sourceNode.unshift(y);var A=this[y.type](y);return this.sourceNode.shift(),A},Program:function(y){this.options.blockParams.unshift(y.blockParams);for(var A=y.body,b=A.length,I=0;I<b;I++)this.accept(A[I]);return this.options.blockParams.shift(),this.isSimple=b===1,this.blockParams=y.blockParams?y.blockParams.length:0,this},BlockStatement:function(y){o(y);var A=y.program,b=y.inverse;A=A&&this.compileProgram(A),b=b&&this.compileProgram(b);var I=this.classifySexpr(y);I==="helper"?this.helperSexpr(y,A,b):I==="simple"?(this.simpleSexpr(y),this.opcode("pushProgram",A),this.opcode("pushProgram",b),this.opcode("emptyHash"),this.opcode("blockValue",y.path.original)):(this.ambiguousSexpr(y,A,b),this.opcode("pushProgram",A),this.opcode("pushProgram",b),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(y){var A=y.program&&this.compileProgram(y.program),b=this.setupFullMustacheParams(y,A,void 0),I=y.path;this.useDecorators=!0,this.opcode("registerDecorator",b.length,I.original)},PartialStatement:function(y){this.usePartial=!0;var A=y.program;A&&(A=this.compileProgram(y.program));var b=y.params;if(b.length>1)throw new s.default("Unsupported number of partial arguments: "+b.length,y);b.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):b.push({type:"PathExpression",parts:[],depth:0}));var I=y.name.original,P=y.name.type==="SubExpression";P&&this.accept(y.name),this.setupFullMustacheParams(y,A,void 0,!0);var B=y.indent||"";this.options.preventIndent&&B&&(this.opcode("appendContent",B),B=""),this.opcode("invokePartial",P,I,B),this.opcode("append")},PartialBlockStatement:function(y){this.PartialStatement(y)},MustacheStatement:function(y){this.SubExpression(y),y.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(y){this.DecoratorBlock(y)},ContentStatement:function(y){y.value&&this.opcode("appendContent",y.value)},CommentStatement:function(){},SubExpression:function(y){o(y);var A=this.classifySexpr(y);A==="simple"?this.simpleSexpr(y):A==="helper"?this.helperSexpr(y):this.ambiguousSexpr(y)},ambiguousSexpr:function(y,A,b){var I=y.path,P=I.parts[0],B=A!=null||b!=null;this.opcode("getContext",I.depth),this.opcode("pushProgram",A),this.opcode("pushProgram",b),I.strict=!0,this.accept(I),this.opcode("invokeAmbiguous",P,B)},simpleSexpr:function(y){var A=y.path;A.strict=!0,this.accept(A),this.opcode("resolvePossibleLambda")},helperSexpr:function(y,A,b){var I=this.setupFullMustacheParams(y,A,b),P=y.path,B=P.parts[0];if(this.options.knownHelpers[B])this.opcode("invokeKnownHelper",I.length,B);else{if(this.options.knownHelpersOnly)throw new s.default("You specified knownHelpersOnly, but used the unknown helper "+B,y);P.strict=!0,P.falsy=!0,this.accept(P),this.opcode("invokeHelper",I.length,P.original,f.default.helpers.simpleId(P))}},PathExpression:function(y){this.addDepth(y.depth),this.opcode("getContext",y.depth);var A=y.parts[0],b=f.default.helpers.scopedId(y),I=!y.depth&&!b&&this.blockParamIndex(A);I?this.opcode("lookupBlockParam",I,y.parts):A?y.data?(this.options.data=!0,this.opcode("lookupData",y.depth,y.parts,y.strict)):this.opcode("lookupOnContext",y.parts,y.falsy,y.strict,b):this.opcode("pushContext")},StringLiteral:function(y){this.opcode("pushString",y.value)},NumberLiteral:function(y){this.opcode("pushLiteral",y.value)},BooleanLiteral:function(y){this.opcode("pushLiteral",y.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(y){var A=y.pairs,b=0,I=A.length;for(this.opcode("pushHash");b<I;b++)this.pushParam(A[b].value);for(;b--;)this.opcode("assignToHash",A[b].key);this.opcode("popHash")},opcode:function(y){this.opcodes.push({opcode:y,args:k.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(y){y&&(this.useDepths=!0)},classifySexpr:function(y){var A=f.default.helpers.simpleId(y.path),b=A&&!!this.blockParamIndex(y.path.parts[0]),I=!b&&f.default.helpers.helperExpression(y),P=!b&&(I||A);if(P&&!I){var B=y.path.parts[0],T=this.options;T.knownHelpers[B]?I=!0:T.knownHelpersOnly&&(P=!1)}return I?"helper":P?"ambiguous":"simple"},pushParams:function(y){for(var A=0,b=y.length;A<b;A++)this.pushParam(y[A])},pushParam:function(y){var A=y.value!=null?y.value:y.original||"";if(this.stringParams)A.replace&&(A=A.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),y.depth&&this.addDepth(y.depth),this.opcode("getContext",y.depth||0),this.opcode("pushStringParam",A,y.type),y.type==="SubExpression"&&this.accept(y);else{if(this.trackIds){var b=void 0;if(!y.parts||f.default.helpers.scopedId(y)||y.depth||(b=this.blockParamIndex(y.parts[0])),b){var I=y.parts.slice(1).join(".");this.opcode("pushId","BlockParam",b,I)}else A=y.original||A,A.replace&&(A=A.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",y.type,A)}this.accept(y)}},setupFullMustacheParams:function(y,A,b,I){var P=y.params;return this.pushParams(P),this.opcode("pushProgram",A),this.opcode("pushProgram",b),y.hash?this.accept(y.hash):this.opcode("emptyHash",I),P},blockParamIndex:function(y){for(var A=0,b=this.options.blockParams.length;A<b;A++){var I=this.options.blockParams[A],P=I&&_.indexOf(I,y);if(I&&P>=0)return[A,P]}}}},function(h,i,u){"use strict";function t(f){this.value=f}function n(){}function l(f,k,y,A,b){var I=k.popStack(),P=y.length;for(f&&P--;A<P;A++)I=k.nameLookup(I,y[A],b);return f?[k.aliasable("container.strict"),"(",I,", ",k.quotedString(y[A]),", ",JSON.stringify(k.source.currentLocation)," )"]:I}var g=u(60).default,o=u(1).default;i.__esModule=!0;var r=u(4),p=u(6),m=o(p),s=u(5),_=u(92),c=o(_);n.prototype={nameLookup:function(f,k){return this.internalNameLookup(f,k)},depthedLookup:function(f){return[this.aliasable("container.lookup"),"(depths, ",JSON.stringify(f),")"]},compilerInfo:function(){var f=r.COMPILER_REVISION,k=r.REVISION_CHANGES[f];return[f,k]},appendToBuffer:function(f,k,y){return s.isArray(f)||(f=[f]),f=this.source.wrap(f,k),this.environment.isSimple?["return ",f,";"]:y?["buffer += ",f,";"]:(f.appendToBuffer=!0,f)},initializeBuffer:function(){return this.quotedString("")},internalNameLookup:function(f,k){return this.lookupPropertyFunctionIsUsed=!0,["lookupProperty(",f,",",JSON.stringify(k),")"]},lookupPropertyFunctionIsUsed:!1,compile:function(f,k,y,A){this.environment=f,this.options=k,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!A,this.name=this.environment.name,this.isChild=!!y,this.context=y||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(f,k),this.useDepths=this.useDepths||f.useDepths||f.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||f.useBlockParams;var b=f.opcodes,I=void 0,P=void 0,B=void 0,T=void 0;for(B=0,T=b.length;B<T;B++)I=b[B],this.source.currentLocation=I.loc,P=P||I.loc,this[I.opcode].apply(this,I.args);if(this.source.currentLocation=P,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new m.default("Compile completed with content left on stack");this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend(["var decorators = container.decorators, ",this.lookupPropertyFunctionVarDeclaration(),`;
`]),this.decorators.push("return fn;"),A?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`),this.decorators.push(`}
`),this.decorators=this.decorators.merge()));var K=this.createFunctionContext(A);if(this.isChild)return K;var L={compiler:this.compilerInfo(),main:K};this.decorators&&(L.main_d=this.decorators,L.useDecorators=!0);var D=this.context,S=D.programs,w=D.decorators;for(B=0,T=S.length;B<T;B++)S[B]&&(L[B]=S[B],w[B]&&(L[B+"_d"]=w[B],L.useDecorators=!0));return this.environment.usePartial&&(L.usePartial=!0),this.options.data&&(L.useData=!0),this.useDepths&&(L.useDepths=!0),this.useBlockParams&&(L.useBlockParams=!0),this.options.compat&&(L.compat=!0),A?L.compilerOptions=this.options:(L.compiler=JSON.stringify(L.compiler),this.source.currentLocation={start:{line:1,column:0}},L=this.objectLiteral(L),k.srcName?(L=L.toStringWithSourceMap({file:k.destName}),L.map=L.map&&L.map.toString()):L=L.toString()),L},preamble:function(){this.lastContext=0,this.source=new c.default(this.options.srcName),this.decorators=new c.default(this.options.srcName)},createFunctionContext:function(f){var k=this,y="",A=this.stackVars.concat(this.registers.list);A.length>0&&(y+=", "+A.join(", "));var b=0;g(this.aliases).forEach(function(B){var T=k.aliases[B];T.children&&T.referenceCount>1&&(y+=", alias"+ ++b+"="+B,T.children[0]="alias"+b)}),this.lookupPropertyFunctionIsUsed&&(y+=", "+this.lookupPropertyFunctionVarDeclaration());var I=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&I.push("blockParams"),this.useDepths&&I.push("depths");var P=this.mergeSource(y);return f?(I.push(P),Function.apply(this,I)):this.source.wrap(["function(",I.join(","),`) {
  `,P,"}"])},mergeSource:function(f){var k=this.environment.isSimple,y=!this.forceBuffer,A=void 0,b=void 0,I=void 0,P=void 0;return this.source.each(function(B){B.appendToBuffer?(I?B.prepend("  + "):I=B,P=B):(I&&(b?I.prepend("buffer += "):A=!0,P.add(";"),I=P=void 0),b=!0,k||(y=!1))}),y?I?(I.prepend("return "),P.add(";")):b||this.source.push('return "";'):(f+=", buffer = "+(A?"":this.initializeBuffer()),I?(I.prepend("return buffer + "),P.add(";")):this.source.push("return buffer;")),f&&this.source.prepend("var "+f.substring(2)+(A?"":`;
`)),this.source.merge()},lookupPropertyFunctionVarDeclaration:function(){return`
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }
    `.trim()},blockValue:function(f){var k=this.aliasable("container.hooks.blockHelperMissing"),y=[this.contextName(0)];this.setupHelperArgs(f,0,y);var A=this.popStack();y.splice(1,0,A),this.push(this.source.functionCall(k,"call",y))},ambiguousBlockValue:function(){var f=this.aliasable("container.hooks.blockHelperMissing"),k=[this.contextName(0)];this.setupHelperArgs("",0,k,!0),this.flushInline();var y=this.topStack();k.splice(1,0,y),this.pushSource(["if (!",this.lastHelper,") { ",y," = ",this.source.functionCall(f,"call",k),"}"])},appendContent:function(f){this.pendingContent?f=this.pendingContent+f:this.pendingLocation=this.source.currentLocation,this.pendingContent=f},append:function(){if(this.isInline())this.replaceStack(function(k){return[" != null ? ",k,' : ""']}),this.pushSource(this.appendToBuffer(this.popStack()));else{var f=this.popStack();this.pushSource(["if (",f," != null) { ",this.appendToBuffer(f,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(f){this.lastContext=f},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(f,k,y,A){var b=0;A||!this.options.compat||this.lastContext?this.pushContext():this.push(this.depthedLookup(f[b++])),this.resolvePath("context",f,b,k,y)},lookupBlockParam:function(f,k){this.useBlockParams=!0,this.push(["blockParams[",f[0],"][",f[1],"]"]),this.resolvePath("context",k,1)},lookupData:function(f,k,y){f?this.pushStackLiteral("container.data(data, "+f+")"):this.pushStackLiteral("data"),this.resolvePath("data",k,0,!0,y)},resolvePath:function(f,k,y,A,b){var I=this;if(this.options.strict||this.options.assumeObjects)return void this.push(l(this.options.strict&&b,this,k,y,f));for(var P=k.length;y<P;y++)this.replaceStack(function(B){var T=I.nameLookup(B,k[y],f);return A?[" && ",T]:[" != null ? ",T," : ",B]})},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(f,k){this.pushContext(),this.pushString(k),k!=="SubExpression"&&(typeof f=="string"?this.pushString(f):this.pushStackLiteral(f))},emptyHash:function(f){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(f?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:{},types:[],contexts:[],ids:[]}},popHash:function(){var f=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(f.ids)),this.stringParams&&(this.push(this.objectLiteral(f.contexts)),this.push(this.objectLiteral(f.types))),this.push(this.objectLiteral(f.values))},pushString:function(f){this.pushStackLiteral(this.quotedString(f))},pushLiteral:function(f){this.pushStackLiteral(f)},pushProgram:function(f){f!=null?this.pushStackLiteral(this.programExpression(f)):this.pushStackLiteral(null)},registerDecorator:function(f,k){var y=this.nameLookup("decorators",k,"decorator"),A=this.setupHelperArgs(k,f);this.decorators.push(["fn = ",this.decorators.functionCall(y,"",["fn","props","container",A])," || fn;"])},invokeHelper:function(f,k,y){var A=this.popStack(),b=this.setupHelper(f,k),I=[];y&&I.push(b.name),I.push(A),this.options.strict||I.push(this.aliasable("container.hooks.helperMissing"));var P=["(",this.itemsSeparatedBy(I,"||"),")"],B=this.source.functionCall(P,"call",b.callParams);this.push(B)},itemsSeparatedBy:function(f,k){var y=[];y.push(f[0]);for(var A=1;A<f.length;A++)y.push(k,f[A]);return y},invokeKnownHelper:function(f,k){var y=this.setupHelper(f,k);this.push(this.source.functionCall(y.name,"call",y.callParams))},invokeAmbiguous:function(f,k){this.useRegister("helper");var y=this.popStack();this.emptyHash();var A=this.setupHelper(0,f,k),b=this.lastHelper=this.nameLookup("helpers",f,"helper"),I=["(","(helper = ",b," || ",y,")"];this.options.strict||(I[0]="(helper = ",I.push(" != null ? helper : ",this.aliasable("container.hooks.helperMissing"))),this.push(["(",I,A.paramsInit?["),(",A.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",A.callParams)," : helper))"])},invokePartial:function(f,k,y){var A=[],b=this.setupParams(k,1,A);f&&(k=this.popStack(),delete b.name),y&&(b.indent=JSON.stringify(y)),b.helpers="helpers",b.partials="partials",b.decorators="container.decorators",f?A.unshift(k):A.unshift(this.nameLookup("partials",k,"partial")),this.options.compat&&(b.depths="depths"),b=this.objectLiteral(b),A.push(b),this.push(this.source.functionCall("container.invokePartial","",A))},assignToHash:function(f){var k=this.popStack(),y=void 0,A=void 0,b=void 0;this.trackIds&&(b=this.popStack()),this.stringParams&&(A=this.popStack(),y=this.popStack());var I=this.hash;y&&(I.contexts[f]=y),A&&(I.types[f]=A),b&&(I.ids[f]=b),I.values[f]=k},pushId:function(f,k,y){f==="BlockParam"?this.pushStackLiteral("blockParams["+k[0]+"].path["+k[1]+"]"+(y?" + "+JSON.stringify("."+y):"")):f==="PathExpression"?this.pushString(k):f==="SubExpression"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:n,compileChildren:function(f,k){for(var y=f.children,A=void 0,b=void 0,I=0,P=y.length;I<P;I++){A=y[I],b=new this.compiler;var B=this.matchExistingProgram(A);if(B==null){this.context.programs.push("");var T=this.context.programs.length;A.index=T,A.name="program"+T,this.context.programs[T]=b.compile(A,k,this.context,!this.precompile),this.context.decorators[T]=b.decorators,this.context.environments[T]=A,this.useDepths=this.useDepths||b.useDepths,this.useBlockParams=this.useBlockParams||b.useBlockParams,A.useDepths=this.useDepths,A.useBlockParams=this.useBlockParams}else A.index=B.index,A.name="program"+B.index,this.useDepths=this.useDepths||B.useDepths,this.useBlockParams=this.useBlockParams||B.useBlockParams}},matchExistingProgram:function(f){for(var k=0,y=this.context.environments.length;k<y;k++){var A=this.context.environments[k];if(A&&A.equals(f))return A}},programExpression:function(f){var k=this.environment.children[f],y=[k.index,"data",k.blockParams];return(this.useBlockParams||this.useDepths)&&y.push("blockParams"),this.useDepths&&y.push("depths"),"container.program("+y.join(", ")+")"},useRegister:function(f){this.registers[f]||(this.registers[f]=!0,this.registers.list.push(f))},push:function(f){return f instanceof t||(f=this.source.wrap(f)),this.inlineStack.push(f),f},pushStackLiteral:function(f){this.push(new t(f))},pushSource:function(f){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),f&&this.source.push(f)},replaceStack:function(f){var k=["("],y=void 0,A=void 0,b=void 0;if(!this.isInline())throw new m.default("replaceStack on non-inline");var I=this.popStack(!0);if(I instanceof t)y=[I.value],k=["(",y],b=!0;else{A=!0;var P=this.incrStack();k=["((",this.push(P)," = ",I,")"],y=this.topStack()}var B=f.call(this,y);b||this.popStack(),A&&this.stackSlot--,this.push(k.concat(B,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var f=this.inlineStack;this.inlineStack=[];for(var k=0,y=f.length;k<y;k++){var A=f[k];if(A instanceof t)this.compileStack.push(A);else{var b=this.incrStack();this.pushSource([b," = ",A,";"]),this.compileStack.push(b)}}},isInline:function(){return this.inlineStack.length},popStack:function(f){var k=this.isInline(),y=(k?this.inlineStack:this.compileStack).pop();if(!f&&y instanceof t)return y.value;if(!k){if(!this.stackSlot)throw new m.default("Invalid stack pop");this.stackSlot--}return y},topStack:function(){var f=this.isInline()?this.inlineStack:this.compileStack,k=f[f.length-1];return k instanceof t?k.value:k},contextName:function(f){return this.useDepths&&f?"depths["+f+"]":"depth"+f},quotedString:function(f){return this.source.quotedString(f)},objectLiteral:function(f){return this.source.objectLiteral(f)},aliasable:function(f){var k=this.aliases[f];return k?(k.referenceCount++,k):(k=this.aliases[f]=this.source.wrap(f),k.aliasable=!0,k.referenceCount=1,k)},setupHelper:function(f,k,y){var A=[],b=this.setupHelperArgs(k,f,A,y),I=this.nameLookup("helpers",k,"helper"),P=this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})");return{params:A,paramsInit:b,name:I,callParams:[P].concat(A)}},setupParams:function(f,k,y){var A={},b=[],I=[],P=[],B=!y,T=void 0;B&&(y=[]),A.name=this.quotedString(f),A.hash=this.popStack(),this.trackIds&&(A.hashIds=this.popStack()),this.stringParams&&(A.hashTypes=this.popStack(),A.hashContexts=this.popStack());var K=this.popStack(),L=this.popStack();(L||K)&&(A.fn=L||"container.noop",A.inverse=K||"container.noop");for(var D=k;D--;)T=this.popStack(),y[D]=T,this.trackIds&&(P[D]=this.popStack()),this.stringParams&&(I[D]=this.popStack(),b[D]=this.popStack());return B&&(A.args=this.source.generateArray(y)),this.trackIds&&(A.ids=this.source.generateArray(P)),this.stringParams&&(A.types=this.source.generateArray(I),A.contexts=this.source.generateArray(b)),this.options.data&&(A.data="data"),this.useBlockParams&&(A.blockParams="blockParams"),A},setupHelperArgs:function(f,k,y,A){var b=this.setupParams(f,k,y);return b.loc=JSON.stringify(this.source.currentLocation),b=this.objectLiteral(b),A?(this.useRegister("options"),y.push("options"),["options=",b]):y?(y.push(b),""):b}},function(){for(var f="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),k=n.RESERVED_WORDS={},y=0,A=f.length;y<A;y++)k[f[y]]=!0}(),n.isValidJavaScriptVariableName=function(f){return!n.RESERVED_WORDS[f]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(f)},i.default=n,h.exports=i.default},function(h,i,u){"use strict";function t(r,p,m){if(g.isArray(r)){for(var s=[],_=0,c=r.length;_<c;_++)s.push(p.wrap(r[_],m));return s}return typeof r=="boolean"||typeof r=="number"?r+"":r}function n(r){this.srcFile=r,this.source=[]}var l=u(60).default;i.__esModule=!0;var g=u(5),o=void 0;try{}catch(r){}o||(o=function(r,p,m,s){this.src="",s&&this.add(s)},o.prototype={add:function(r){g.isArray(r)&&(r=r.join("")),this.src+=r},prepend:function(r){g.isArray(r)&&(r=r.join("")),this.src=r+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}}),n.prototype={isEmpty:function(){return!this.source.length},prepend:function(r,p){this.source.unshift(this.wrap(r,p))},push:function(r,p){this.source.push(this.wrap(r,p))},merge:function(){var r=this.empty();return this.each(function(p){r.add(["  ",p,`
`])}),r},each:function(r){for(var p=0,m=this.source.length;p<m;p++)r(this.source[p])},empty:function(){var r=this.currentLocation||{start:{}};return new o(r.start.line,r.start.column,this.srcFile)},wrap:function(r){var p=arguments.length<=1||arguments[1]===void 0?this.currentLocation||{start:{}}:arguments[1];return r instanceof o?r:(r=t(r,this,p),new o(p.start.line,p.start.column,this.srcFile,r))},functionCall:function(r,p,m){return m=this.generateList(m),this.wrap([r,p?"."+p+"(":"(",m,")"])},quotedString:function(r){return'"'+(r+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(r){var p=this,m=[];l(r).forEach(function(_){var c=t(r[_],p);c!=="undefined"&&m.push([p.quotedString(_),":",c])});var s=this.generateList(m);return s.prepend("{"),s.add("}"),s},generateList:function(r){for(var p=this.empty(),m=0,s=r.length;m<s;m++)m&&p.add(","),p.add(t(r[m],this));return p},generateArray:function(r){var p=this.generateList(r);return p.prepend("["),p.add("]"),p}},i.default=n,h.exports=i.default}])})},1988:(v,h,i)=>{var u,t;u=[i(8732),i(8217),i(3675),i(4055),i(1292),i(5667),i(8957),i(1288),i(1845),i(747),i(3306),i(8125)],t=function(n,l,g,o,r,p,m){"use strict";var s=/%20/g,_=/#.*$/,c=/([?&])_=[^&]*/,f=/^(.*?):[ \t]*([^\r\n]*)$/mg,k=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,y=/^(?:GET|HEAD)$/,A=/^\/\//,b={},I={},P="*/".concat("*"),B=l.createElement("a");B.href=r.href;function T(w){return function(C,F){typeof C!="string"&&(F=C,C="*");var H,x=0,O=C.toLowerCase().match(o)||[];if(g(F))for(;H=O[x++];)H[0]==="+"?(H=H.slice(1)||"*",(w[H]=w[H]||[]).unshift(F)):(w[H]=w[H]||[]).push(F)}}function K(w,C,F,H){var x={},O=w===I;function M(Y){var W;return x[Y]=!0,n.each(w[Y]||[],function(X,re){var de=re(C,F,H);if(typeof de=="string"&&!O&&!x[de])return C.dataTypes.unshift(de),M(de),!1;if(O)return!(W=de)}),W}return M(C.dataTypes[0])||!x["*"]&&M("*")}function L(w,C){var F,H,x=n.ajaxSettings.flatOptions||{};for(F in C)C[F]!==void 0&&((x[F]?w:H||(H={}))[F]=C[F]);return H&&n.extend(!0,w,H),w}function D(w,C,F){for(var H,x,O,M,Y=w.contents,W=w.dataTypes;W[0]==="*";)W.shift(),H===void 0&&(H=w.mimeType||C.getResponseHeader("Content-Type"));if(H){for(x in Y)if(Y[x]&&Y[x].test(H)){W.unshift(x);break}}if(W[0]in F)O=W[0];else{for(x in F){if(!W[0]||w.converters[x+" "+W[0]]){O=x;break}M||(M=x)}O=O||M}if(O)return O!==W[0]&&W.unshift(O),F[O]}function S(w,C,F,H){var x,O,M,Y,W,X={},re=w.dataTypes.slice();if(re[1])for(M in w.converters)X[M.toLowerCase()]=w.converters[M];for(O=re.shift();O;)if(w.responseFields[O]&&(F[w.responseFields[O]]=C),!W&&H&&w.dataFilter&&(C=w.dataFilter(C,w.dataType)),W=O,O=re.shift(),O){if(O==="*")O=W;else if(W!=="*"&&W!==O){if(M=X[W+" "+O]||X["* "+O],!M){for(x in X)if(Y=x.split(" "),Y[1]===O&&(M=X[W+" "+Y[0]]||X["* "+Y[0]],M)){M===!0?M=X[x]:X[x]!==!0&&(O=Y[0],re.unshift(Y[1]));break}}if(M!==!0)if(M&&w.throws)C=M(C);else try{C=M(C)}catch(de){return{state:"parsererror",error:M?de:"No conversion from "+W+" to "+O}}}}return{state:"success",data:C}}return n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:r.href,type:"GET",isLocal:k.test(r.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":P,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(w,C){return C?L(L(w,n.ajaxSettings),C):L(n.ajaxSettings,w)},ajaxPrefilter:T(b),ajaxTransport:T(I),ajax:function(w,C){typeof w=="object"&&(C=w,w=void 0),C=C||{};var F,H,x,O,M,Y,W,X,re,de,J=n.ajaxSetup({},C),ke=J.context||J,Ie=J.context&&(ke.nodeType||ke.jquery)?n(ke):n.event,Ne=n.Deferred(),Ve=n.Callbacks("once memory"),fa=J.statusCode||{},ka={},Ia={},Ea="canceled",fe={readyState:0,getResponseHeader:function(Ae){var Ke;if(W){if(!O)for(O={};Ke=f.exec(x);)O[Ke[1].toLowerCase()+" "]=(O[Ke[1].toLowerCase()+" "]||[]).concat(Ke[2]);Ke=O[Ae.toLowerCase()+" "]}return Ke==null?null:Ke.join(", ")},getAllResponseHeaders:function(){return W?x:null},setRequestHeader:function(Ae,Ke){return W==null&&(Ae=Ia[Ae.toLowerCase()]=Ia[Ae.toLowerCase()]||Ae,ka[Ae]=Ke),this},overrideMimeType:function(Ae){return W==null&&(J.mimeType=Ae),this},statusCode:function(Ae){var Ke;if(Ae)if(W)fe.always(Ae[fe.status]);else for(Ke in Ae)fa[Ke]=[fa[Ke],Ae[Ke]];return this},abort:function(Ae){var Ke=Ae||Ea;return F&&F.abort(Ke),Te(0,Ke),this}};if(Ne.promise(fe),J.url=((w||J.url||r.href)+"").replace(A,r.protocol+"//"),J.type=C.method||C.type||J.method||J.type,J.dataTypes=(J.dataType||"*").toLowerCase().match(o)||[""],J.crossDomain==null){Y=l.createElement("a");try{Y.href=J.url,Y.href=Y.href,J.crossDomain=B.protocol+"//"+B.host!=Y.protocol+"//"+Y.host}catch(Ae){J.crossDomain=!0}}if(J.data&&J.processData&&typeof J.data!="string"&&(J.data=n.param(J.data,J.traditional)),K(b,J,C,fe),W)return fe;X=n.event&&J.global,X&&n.active++===0&&n.event.trigger("ajaxStart"),J.type=J.type.toUpperCase(),J.hasContent=!y.test(J.type),H=J.url.replace(_,""),J.hasContent?J.data&&J.processData&&(J.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(J.data=J.data.replace(s,"+")):(de=J.url.slice(H.length),J.data&&(J.processData||typeof J.data=="string")&&(H+=(m.test(H)?"&":"?")+J.data,delete J.data),J.cache===!1&&(H=H.replace(c,"$1"),de=(m.test(H)?"&":"?")+"_="+p.guid+++de),J.url=H+de),J.ifModified&&(n.lastModified[H]&&fe.setRequestHeader("If-Modified-Since",n.lastModified[H]),n.etag[H]&&fe.setRequestHeader("If-None-Match",n.etag[H])),(J.data&&J.hasContent&&J.contentType!==!1||C.contentType)&&fe.setRequestHeader("Content-Type",J.contentType),fe.setRequestHeader("Accept",J.dataTypes[0]&&J.accepts[J.dataTypes[0]]?J.accepts[J.dataTypes[0]]+(J.dataTypes[0]!=="*"?", "+P+"; q=0.01":""):J.accepts["*"]);for(re in J.headers)fe.setRequestHeader(re,J.headers[re]);if(J.beforeSend&&(J.beforeSend.call(ke,fe,J)===!1||W))return fe.abort();if(Ea="abort",Ve.add(J.complete),fe.done(J.success),fe.fail(J.error),F=K(I,J,C,fe),!F)Te(-1,"No Transport");else{if(fe.readyState=1,X&&Ie.trigger("ajaxSend",[fe,J]),W)return fe;J.async&&J.timeout>0&&(M=window.setTimeout(function(){fe.abort("timeout")},J.timeout));try{W=!1,F.send(ka,Te)}catch(Ae){if(W)throw Ae;Te(-1,Ae)}}function Te(Ae,Ke,ca,Wa){var aa,Re,ge,we,Se,V=Ke;W||(W=!0,M&&window.clearTimeout(M),F=void 0,x=Wa||"",fe.readyState=Ae>0?4:0,aa=Ae>=200&&Ae<300||Ae===304,ca&&(we=D(J,fe,ca)),!aa&&n.inArray("script",J.dataTypes)>-1&&n.inArray("json",J.dataTypes)<0&&(J.converters["text script"]=function(){}),we=S(J,we,fe,aa),aa?(J.ifModified&&(Se=fe.getResponseHeader("Last-Modified"),Se&&(n.lastModified[H]=Se),Se=fe.getResponseHeader("etag"),Se&&(n.etag[H]=Se)),Ae===204||J.type==="HEAD"?V="nocontent":Ae===304?V="notmodified":(V=we.state,Re=we.data,ge=we.error,aa=!ge)):(ge=V,(Ae||!V)&&(V="error",Ae<0&&(Ae=0))),fe.status=Ae,fe.statusText=(Ke||V)+"",aa?Ne.resolveWith(ke,[Re,V,fe]):Ne.rejectWith(ke,[fe,V,ge]),fe.statusCode(fa),fa=void 0,X&&Ie.trigger(aa?"ajaxSuccess":"ajaxError",[fe,J,aa?Re:ge]),Ve.fireWith(ke,[fe,V]),X&&(Ie.trigger("ajaxComplete",[fe,J]),--n.active||n.event.trigger("ajaxStop")))}return fe},getJSON:function(w,C,F){return n.get(w,C,F,"json")},getScript:function(w,C){return n.get(w,void 0,C,"script")}}),n.each(["get","post"],function(w,C){n[C]=function(F,H,x,O){return g(H)&&(O=O||x,x=H,H=void 0),n.ajax(n.extend({url:F,type:C,dataType:O,data:H,success:x},n.isPlainObject(F)&&F))}}),n.ajaxPrefilter(function(w){var C;for(C in w.headers)C.toLowerCase()==="content-type"&&(w.contentType=w.headers[C]||"")}),n}.apply(h,u),t!==void 0&&(v.exports=t)},4894:(v,h,i)=>{var u,t;u=[i(8732),i(3675),i(5667),i(8957),i(1988)],t=function(n,l,g,o){"use strict";var r=[],p=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var m=r.pop()||n.expando+"_"+g.guid++;return this[m]=!0,m}}),n.ajaxPrefilter("json jsonp",function(m,s,_){var c,f,k,y=m.jsonp!==!1&&(p.test(m.url)?"url":typeof m.data=="string"&&(m.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&p.test(m.data)&&"data");if(y||m.dataTypes[0]==="jsonp")return c=m.jsonpCallback=l(m.jsonpCallback)?m.jsonpCallback():m.jsonpCallback,y?m[y]=m[y].replace(p,"$1"+c):m.jsonp!==!1&&(m.url+=(o.test(m.url)?"&":"?")+m.jsonp+"="+c),m.converters["script json"]=function(){return k||n.error(c+" was not called"),k[0]},m.dataTypes[0]="json",f=window[c],window[c]=function(){k=arguments},_.always(function(){f===void 0?n(window).removeProp(c):window[c]=f,m[c]&&(m.jsonpCallback=s.jsonpCallback,r.push(c)),k&&l(f)&&f(k[0]),k=f=void 0}),"script"})}.apply(h,u),t!==void 0&&(v.exports=t)},5020:(v,h,i)=>{var u,t;u=[i(8732),i(2771),i(3675),i(8938),i(1988),i(9310),i(1923),i(7027)],t=function(n,l,g){"use strict";n.fn.load=function(o,r,p){var m,s,_,c=this,f=o.indexOf(" ");return f>-1&&(m=l(o.slice(f)),o=o.slice(0,f)),g(r)?(p=r,r=void 0):r&&typeof r=="object"&&(s="POST"),c.length>0&&n.ajax({url:o,type:s||"GET",dataType:"html",data:r}).done(function(k){_=arguments,c.html(m?n("<div>").append(n.parseHTML(k)).find(m):k)}).always(p&&function(k,y){c.each(function(){p.apply(this,_||[k.responseText,y,k])})}),this}}.apply(h,u),t!==void 0&&(v.exports=t)},6005:(v,h,i)=>{var u,t;u=[i(8732),i(8217),i(1988)],t=function(n,l){"use strict";n.ajaxPrefilter(function(g){g.crossDomain&&(g.contents.script=!1)}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(g){return n.globalEval(g),g}}}),n.ajaxPrefilter("script",function(g){g.cache===void 0&&(g.cache=!1),g.crossDomain&&(g.type="GET")}),n.ajaxTransport("script",function(g){if(g.crossDomain||g.scriptAttrs){var o,r;return{send:function(p,m){o=n("<script>").attr(g.scriptAttrs||{}).prop({charset:g.scriptCharset,src:g.url}).on("load error",r=function(s){o.remove(),r=null,s&&m(s.type==="error"?404:200,s.type)}),l.head.appendChild(o[0])},abort:function(){r&&r()}}}})}.apply(h,u),t!==void 0&&(v.exports=t)},1292:(v,h,i)=>{var u;u=function(){"use strict";return window.location}.call(h,i,h,v),u!==void 0&&(v.exports=u)},5667:(v,h,i)=>{var u;u=function(){"use strict";return{guid:Date.now()}}.call(h,i,h,v),u!==void 0&&(v.exports=u)},8957:(v,h,i)=>{var u;u=function(){"use strict";return/\?/}.call(h,i,h,v),u!==void 0&&(v.exports=u)},8404:(v,h,i)=>{var u,t;u=[i(8732),i(7368),i(1988)],t=function(n,l){"use strict";n.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest}catch(r){}};var g={0:200,1223:204},o=n.ajaxSettings.xhr();l.cors=!!o&&"withCredentials"in o,l.ajax=o=!!o,n.ajaxTransport(function(r){var p,m;if(l.cors||o&&!r.crossDomain)return{send:function(s,_){var c,f=r.xhr();if(f.open(r.type,r.url,r.async,r.username,r.password),r.xhrFields)for(c in r.xhrFields)f[c]=r.xhrFields[c];r.mimeType&&f.overrideMimeType&&f.overrideMimeType(r.mimeType),!r.crossDomain&&!s["X-Requested-With"]&&(s["X-Requested-With"]="XMLHttpRequest");for(c in s)f.setRequestHeader(c,s[c]);p=function(k){return function(){p&&(p=m=f.onload=f.onerror=f.onabort=f.ontimeout=f.onreadystatechange=null,k==="abort"?f.abort():k==="error"?typeof f.status!="number"?_(0,"error"):_(f.status,f.statusText):_(g[f.status]||f.status,f.statusText,(f.responseType||"text")!=="text"||typeof f.responseText!="string"?{binary:f.response}:{text:f.responseText},f.getAllResponseHeaders()))}},f.onload=p(),m=f.onerror=f.ontimeout=p("error"),f.onabort!==void 0?f.onabort=m:f.onreadystatechange=function(){f.readyState===4&&window.setTimeout(function(){p&&m()})},p=p("abort");try{f.send(r.hasContent&&r.data||null)}catch(k){if(p)throw k}},abort:function(){p&&p()}}})}.apply(h,u),t!==void 0&&(v.exports=t)},4386:(v,h,i)=>{var u,t;u=[i(8732),i(2450),i(693),i(3669),i(8294)],t=function(n){"use strict";return n}.apply(h,u),t!==void 0&&(v.exports=t)},2450:(v,h,i)=>{var u,t;u=[i(8732),i(40),i(5424),i(343),i(4055),i(7027)],t=function(n,l,g,o,r){"use strict";var p,m=n.expr.attrHandle;n.fn.extend({attr:function(s,_){return l(this,n.attr,s,_,arguments.length>1)},removeAttr:function(s){return this.each(function(){n.removeAttr(this,s)})}}),n.extend({attr:function(s,_,c){var f,k,y=s.nodeType;if(!(y===3||y===8||y===2)){if(typeof s.getAttribute=="undefined")return n.prop(s,_,c);if((y!==1||!n.isXMLDoc(s))&&(k=n.attrHooks[_.toLowerCase()]||(n.expr.match.bool.test(_)?p:void 0)),c!==void 0){if(c===null){n.removeAttr(s,_);return}return k&&"set"in k&&(f=k.set(s,c,_))!==void 0?f:(s.setAttribute(_,c+""),c)}return k&&"get"in k&&(f=k.get(s,_))!==null?f:(f=n.find.attr(s,_),f==null?void 0:f)}},attrHooks:{type:{set:function(s,_){if(!o.radioValue&&_==="radio"&&g(s,"input")){var c=s.value;return s.setAttribute("type",_),c&&(s.value=c),_}}}},removeAttr:function(s,_){var c,f=0,k=_&&_.match(r);if(k&&s.nodeType===1)for(;c=k[f++];)s.removeAttribute(c)}}),p={set:function(s,_,c){return _===!1?n.removeAttr(s,c):s.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(s,_){var c=m[_]||n.find.attr;m[_]=function(f,k,y){var A,b,I=k.toLowerCase();return y||(b=m[I],m[I]=A,A=c(f,k,y)!=null?I:null,m[I]=b),A}})}.apply(h,u),t!==void 0&&(v.exports=t)},3669:(v,h,i)=>{var u,t;u=[i(8732),i(2771),i(3675),i(4055),i(674),i(1288)],t=function(n,l,g,o,r){"use strict";function p(s){return s.getAttribute&&s.getAttribute("class")||""}function m(s){return Array.isArray(s)?s:typeof s=="string"?s.match(o)||[]:[]}n.fn.extend({addClass:function(s){var _,c,f,k,y,A;return g(s)?this.each(function(b){n(this).addClass(s.call(this,b,p(this)))}):(_=m(s),_.length?this.each(function(){if(f=p(this),c=this.nodeType===1&&" "+l(f)+" ",c){for(y=0;y<_.length;y++)k=_[y],c.indexOf(" "+k+" ")<0&&(c+=k+" ");A=l(c),f!==A&&this.setAttribute("class",A)}}):this)},removeClass:function(s){var _,c,f,k,y,A;return g(s)?this.each(function(b){n(this).removeClass(s.call(this,b,p(this)))}):arguments.length?(_=m(s),_.length?this.each(function(){if(f=p(this),c=this.nodeType===1&&" "+l(f)+" ",c){for(y=0;y<_.length;y++)for(k=_[y];c.indexOf(" "+k+" ")>-1;)c=c.replace(" "+k+" "," ");A=l(c),f!==A&&this.setAttribute("class",A)}}):this):this.attr("class","")},toggleClass:function(s,_){var c,f,k,y,A=typeof s,b=A==="string"||Array.isArray(s);return g(s)?this.each(function(I){n(this).toggleClass(s.call(this,I,p(this),_),_)}):typeof _=="boolean"&&b?_?this.addClass(s):this.removeClass(s):(c=m(s),this.each(function(){if(b)for(y=n(this),k=0;k<c.length;k++)f=c[k],y.hasClass(f)?y.removeClass(f):y.addClass(f);else(s===void 0||A==="boolean")&&(f=p(this),f&&r.set(this,"__className__",f),this.setAttribute&&this.setAttribute("class",f||s===!1?"":r.get(this,"__className__")||""))}))},hasClass:function(s){var _,c,f=0;for(_=" "+s+" ";c=this[f++];)if(c.nodeType===1&&(" "+l(p(c))+" ").indexOf(_)>-1)return!0;return!1}})}.apply(h,u),t!==void 0&&(v.exports=t)},693:(v,h,i)=>{var u,t;u=[i(8732),i(40),i(343),i(7027)],t=function(n,l,g){"use strict";var o=/^(?:input|select|textarea|button)$/i,r=/^(?:a|area)$/i;n.fn.extend({prop:function(p,m){return l(this,n.prop,p,m,arguments.length>1)},removeProp:function(p){return this.each(function(){delete this[n.propFix[p]||p]})}}),n.extend({prop:function(p,m,s){var _,c,f=p.nodeType;if(!(f===3||f===8||f===2))return(f!==1||!n.isXMLDoc(p))&&(m=n.propFix[m]||m,c=n.propHooks[m]),s!==void 0?c&&"set"in c&&(_=c.set(p,s,m))!==void 0?_:p[m]=s:c&&"get"in c&&(_=c.get(p,m))!==null?_:p[m]},propHooks:{tabIndex:{get:function(p){var m=n.find.attr(p,"tabindex");return m?parseInt(m,10):o.test(p.nodeName)||r.test(p.nodeName)&&p.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),g.optSelected||(n.propHooks.selected={get:function(p){var m=p.parentNode;return m&&m.parentNode&&m.parentNode.selectedIndex,null},set:function(p){var m=p.parentNode;m&&(m.selectedIndex,m.parentNode&&m.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this})}.apply(h,u),t!==void 0&&(v.exports=t)},343:(v,h,i)=>{var u,t;u=[i(8217),i(7368)],t=function(n,l){"use strict";return function(){var g=n.createElement("input"),o=n.createElement("select"),r=o.appendChild(n.createElement("option"));g.type="checkbox",l.checkOn=g.value!=="",l.optSelected=r.selected,g=n.createElement("input"),g.value="t",g.type="radio",l.radioValue=g.value==="t"}(),l}.apply(h,u),t!==void 0&&(v.exports=t)},8294:(v,h,i)=>{var u,t;u=[i(8732),i(2771),i(343),i(5424),i(3675),i(1288)],t=function(n,l,g,o,r){"use strict";var p=/\r/g;n.fn.extend({val:function(m){var s,_,c,f=this[0];return arguments.length?(c=r(m),this.each(function(k){var y;this.nodeType===1&&(c?y=m.call(this,k,n(this).val()):y=m,y==null?y="":typeof y=="number"?y+="":Array.isArray(y)&&(y=n.map(y,function(A){return A==null?"":A+""})),s=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],(!s||!("set"in s)||s.set(this,y,"value")===void 0)&&(this.value=y))})):f?(s=n.valHooks[f.type]||n.valHooks[f.nodeName.toLowerCase()],s&&"get"in s&&(_=s.get(f,"value"))!==void 0?_:(_=f.value,typeof _=="string"?_.replace(p,""):_==null?"":_)):void 0}}),n.extend({valHooks:{option:{get:function(m){var s=n.find.attr(m,"value");return s!=null?s:l(n.text(m))}},select:{get:function(m){var s,_,c,f=m.options,k=m.selectedIndex,y=m.type==="select-one",A=y?null:[],b=y?k+1:f.length;for(k<0?c=b:c=y?k:0;c<b;c++)if(_=f[c],(_.selected||c===k)&&!_.disabled&&(!_.parentNode.disabled||!o(_.parentNode,"optgroup"))){if(s=n(_).val(),y)return s;A.push(s)}return A},set:function(m,s){for(var _,c,f=m.options,k=n.makeArray(s),y=f.length;y--;)c=f[y],(c.selected=n.inArray(n.valHooks.option.get(c),k)>-1)&&(_=!0);return _||(m.selectedIndex=-1),k}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(m,s){if(Array.isArray(s))return m.checked=n.inArray(n(m).val(),s)>-1}},g.checkOn||(n.valHooks[this].get=function(m){return m.getAttribute("value")===null?"on":m.value})})}.apply(h,u),t!==void 0&&(v.exports=t)},1046:(v,h,i)=>{var u,t;u=[i(8732),i(192),i(3675),i(4055)],t=function(n,l,g,o){"use strict";function r(p){var m={};return n.each(p.match(o)||[],function(s,_){m[_]=!0}),m}return n.Callbacks=function(p){p=typeof p=="string"?r(p):n.extend({},p);var m,s,_,c,f=[],k=[],y=-1,A=function(){for(c=c||p.once,_=m=!0;k.length;y=-1)for(s=k.shift();++y<f.length;)f[y].apply(s[0],s[1])===!1&&p.stopOnFalse&&(y=f.length,s=!1);p.memory||(s=!1),m=!1,c&&(s?f=[]:f="")},b={add:function(){return f&&(s&&!m&&(y=f.length-1,k.push(s)),function I(P){n.each(P,function(B,T){g(T)?(!p.unique||!b.has(T))&&f.push(T):T&&T.length&&l(T)!=="string"&&I(T)})}(arguments),s&&!m&&A()),this},remove:function(){return n.each(arguments,function(I,P){for(var B;(B=n.inArray(P,f,B))>-1;)f.splice(B,1),B<=y&&y--}),this},has:function(I){return I?n.inArray(I,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return c=k=[],f=s="",this},disabled:function(){return!f},lock:function(){return c=k=[],!s&&!m&&(f=s=""),this},locked:function(){return!!c},fireWith:function(I,P){return c||(P=P||[],P=[I,P.slice?P.slice():P],k.push(P),m||A()),this},fire:function(){return b.fireWith(this,arguments),this},fired:function(){return!!_}};return b},n}.apply(h,u),t!==void 0&&(v.exports=t)},8732:(v,h,i)=>{var u,t;u=[i(4552),i(5676),i(9837),i(2049),i(3499),i(3113),i(8310),i(8524),i(3414),i(5851),i(2299),i(7368),i(3675),i(2619),i(4571),i(192)],t=function(n,l,g,o,r,p,m,s,_,c,f,k,y,A,b,I){"use strict";var P="3.7.1",B=/HTML$/i,T=function(L,D){return new T.fn.init(L,D)};T.fn=T.prototype={jquery:P,constructor:T,length:0,toArray:function(){return g.call(this)},get:function(L){return L==null?g.call(this):L<0?this[L+this.length]:this[L]},pushStack:function(L){var D=T.merge(this.constructor(),L);return D.prevObject=this,D},each:function(L){return T.each(this,L)},map:function(L){return this.pushStack(T.map(this,function(D,S){return L.call(D,S,D)}))},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(T.grep(this,function(L,D){return(D+1)%2}))},odd:function(){return this.pushStack(T.grep(this,function(L,D){return D%2}))},eq:function(L){var D=this.length,S=+L+(L<0?D:0);return this.pushStack(S>=0&&S<D?[this[S]]:[])},end:function(){return this.prevObject||this.constructor()},push:r,sort:n.sort,splice:n.splice},T.extend=T.fn.extend=function(){var L,D,S,w,C,F,H=arguments[0]||{},x=1,O=arguments.length,M=!1;for(typeof H=="boolean"&&(M=H,H=arguments[x]||{},x++),typeof H!="object"&&!y(H)&&(H={}),x===O&&(H=this,x--);x<O;x++)if((L=arguments[x])!=null)for(D in L)w=L[D],!(D==="__proto__"||H===w)&&(M&&w&&(T.isPlainObject(w)||(C=Array.isArray(w)))?(S=H[D],C&&!Array.isArray(S)?F=[]:!C&&!T.isPlainObject(S)?F={}:F=S,C=!1,H[D]=T.extend(M,F,w)):w!==void 0&&(H[D]=w));return H},T.extend({expando:"jQuery"+(P+Math.random()).replace(/\D/g,""),isReady:!0,error:function(L){throw new Error(L)},noop:function(){},isPlainObject:function(L){var D,S;return!L||s.call(L)!=="[object Object]"?!1:(D=l(L),D?(S=_.call(D,"constructor")&&D.constructor,typeof S=="function"&&c.call(S)===f):!0)},isEmptyObject:function(L){var D;for(D in L)return!1;return!0},globalEval:function(L,D,S){b(L,{nonce:D&&D.nonce},S)},each:function(L,D){var S,w=0;if(K(L))for(S=L.length;w<S&&D.call(L[w],w,L[w])!==!1;w++);else for(w in L)if(D.call(L[w],w,L[w])===!1)break;return L},text:function(L){var D,S="",w=0,C=L.nodeType;if(!C)for(;D=L[w++];)S+=T.text(D);return C===1||C===11?L.textContent:C===9?L.documentElement.textContent:C===3||C===4?L.nodeValue:S},makeArray:function(L,D){var S=D||[];return L!=null&&(K(Object(L))?T.merge(S,typeof L=="string"?[L]:L):r.call(S,L)),S},inArray:function(L,D,S){return D==null?-1:p.call(D,L,S)},isXMLDoc:function(L){var D=L&&L.namespaceURI,S=L&&(L.ownerDocument||L).documentElement;return!B.test(D||S&&S.nodeName||"HTML")},merge:function(L,D){for(var S=+D.length,w=0,C=L.length;w<S;w++)L[C++]=D[w];return L.length=C,L},grep:function(L,D,S){for(var w,C=[],F=0,H=L.length,x=!S;F<H;F++)w=!D(L[F],F),w!==x&&C.push(L[F]);return C},map:function(L,D,S){var w,C,F=0,H=[];if(K(L))for(w=L.length;F<w;F++)C=D(L[F],F,S),C!=null&&H.push(C);else for(F in L)C=D(L[F],F,S),C!=null&&H.push(C);return o(H)},guid:1,support:k}),typeof Symbol=="function"&&(T.fn[Symbol.iterator]=n[Symbol.iterator]),T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(L,D){m["[object "+D+"]"]=D.toLowerCase()});function K(L){var D=!!L&&"length"in L&&L.length,S=I(L);return y(L)||A(L)?!1:S==="array"||D===0||typeof D=="number"&&D>0&&D-1 in L}return T}.apply(h,u),t!==void 0&&(v.exports=t)},4571:(v,h,i)=>{var u,t;u=[i(8217)],t=function(n){"use strict";var l={type:!0,src:!0,nonce:!0,noModule:!0};function g(o,r,p){p=p||n;var m,s,_=p.createElement("script");if(_.text=o,r)for(m in l)s=r[m]||r.getAttribute&&r.getAttribute(m),s&&_.setAttribute(m,s);p.head.appendChild(_).parentNode.removeChild(_)}return g}.apply(h,u),t!==void 0&&(v.exports=t)},40:(v,h,i)=>{var u,t;u=[i(8732),i(192),i(3675)],t=function(n,l,g){"use strict";var o=function(r,p,m,s,_,c,f){var k=0,y=r.length,A=m==null;if(l(m)==="object"){_=!0;for(k in m)o(r,p,k,m[k],!0,c,f)}else if(s!==void 0&&(_=!0,g(s)||(f=!0),A&&(f?(p.call(r,s),p=null):(A=p,p=function(b,I,P){return A.call(n(b),P)})),p))for(;k<y;k++)p(r[k],m,f?s:s.call(r[k],k,p(r[k],m)));return _?r:A?p.call(r):y?p(r[0],m):c};return o}.apply(h,u),t!==void 0&&(v.exports=t)},783:(v,h)=>{var i,u;i=[],u=function(){"use strict";var t=/^-ms-/,n=/-([a-z])/g;function l(o,r){return r.toUpperCase()}function g(o){return o.replace(t,"ms-").replace(n,l)}return g}.apply(h,i),u!==void 0&&(v.exports=u)},1288:(v,h,i)=>{var u,t;u=[i(8732),i(8217),i(3675),i(9999),i(2338)],t=function(n,l,g,o){"use strict";var r,p=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,m=n.fn.init=function(s,_,c){var f,k;if(!s)return this;if(c=c||r,typeof s=="string")if(s[0]==="<"&&s[s.length-1]===">"&&s.length>=3?f=[null,s,null]:f=p.exec(s),f&&(f[1]||!_))if(f[1]){if(_=_ instanceof n?_[0]:_,n.merge(this,n.parseHTML(f[1],_&&_.nodeType?_.ownerDocument||_:l,!0)),o.test(f[1])&&n.isPlainObject(_))for(f in _)g(this[f])?this[f](_[f]):this.attr(f,_[f]);return this}else return k=l.getElementById(f[2]),k&&(this[0]=k,this.length=1),this;else return!_||_.jquery?(_||c).find(s):this.constructor(_).find(s);else{if(s.nodeType)return this[0]=s,this.length=1,this;if(g(s))return c.ready!==void 0?c.ready(s):s(n)}return n.makeArray(s,this)};return m.prototype=n.fn,r=n(l),m}.apply(h,u),t!==void 0&&(v.exports=t)},2918:(v,h,i)=>{var u,t;u=[i(8732),i(2775),i(6446)],t=function(n,l){"use strict";var g=function(r){return n.contains(r.ownerDocument,r)},o={composed:!0};return l.getRootNode&&(g=function(r){return n.contains(r.ownerDocument,r)||r.getRootNode(o)===r.ownerDocument}),g}.apply(h,u),t!==void 0&&(v.exports=t)},5424:(v,h,i)=>{var u;u=function(){"use strict";function t(n,l){return n.nodeName&&n.nodeName.toLowerCase()===l.toLowerCase()}return t}.call(h,i,h,v),u!==void 0&&(v.exports=u)},8938:(v,h,i)=>{var u,t;u=[i(8732),i(8217),i(9999),i(4865),i(7842)],t=function(n,l,g,o,r){"use strict";return n.parseHTML=function(p,m,s){if(typeof p!="string")return[];typeof m=="boolean"&&(s=m,m=!1);var _,c,f;return m||(r.createHTMLDocument?(m=l.implementation.createHTMLDocument(""),_=m.createElement("base"),_.href=l.location.href,m.head.appendChild(_)):m=l),c=g.exec(p),f=!s&&[],c?[m.createElement(c[1])]:(c=o([p],m,f),f&&f.length&&n(f).remove(),n.merge([],c.childNodes))},n.parseHTML}.apply(h,u),t!==void 0&&(v.exports=t)},1845:(v,h,i)=>{var u,t;u=[i(8732)],t=function(n){"use strict";return n.parseXML=function(l){var g,o;if(!l||typeof l!="string")return null;try{g=new window.DOMParser().parseFromString(l,"text/xml")}catch(r){}return o=g&&g.getElementsByTagName("parsererror")[0],(!g||o)&&n.error("Invalid XML: "+(o?n.map(o.childNodes,function(r){return r.textContent}).join(`
`):l)),g},n.parseXML}.apply(h,u),t!==void 0&&(v.exports=t)},1958:(v,h,i)=>{var u,t;u=[i(8732),i(8217),i(2824),i(3306)],t=function(n,l){"use strict";var g=n.Deferred();n.fn.ready=function(r){return g.then(r).catch(function(p){n.readyException(p)}),this},n.extend({isReady:!1,readyWait:1,ready:function(r){(r===!0?--n.readyWait:n.isReady)||(n.isReady=!0,!(r!==!0&&--n.readyWait>0)&&g.resolveWith(l,[n]))}}),n.ready.then=g.then;function o(){l.removeEventListener("DOMContentLoaded",o),window.removeEventListener("load",o),n.ready()}l.readyState==="complete"||l.readyState!=="loading"&&!l.documentElement.doScroll?window.setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",o),window.addEventListener("load",o))}.apply(h,u),t!==void 0&&(v.exports=t)},2824:(v,h,i)=>{var u,t;u=[i(8732)],t=function(n){"use strict";n.readyException=function(l){window.setTimeout(function(){throw l})}}.apply(h,u),t!==void 0&&(v.exports=t)},2771:(v,h,i)=>{var u,t;u=[i(4055)],t=function(n){"use strict";function l(g){var o=g.match(n)||[];return o.join(" ")}return l}.apply(h,u),t!==void 0&&(v.exports=t)},7842:(v,h,i)=>{var u,t;u=[i(8217),i(7368)],t=function(n,l){"use strict";return l.createHTMLDocument=function(){var g=n.implementation.createHTMLDocument("").body;return g.innerHTML="<form></form><form></form>",g.childNodes.length===2}(),l}.apply(h,u),t!==void 0&&(v.exports=t)},192:(v,h,i)=>{var u,t;u=[i(8310),i(8524)],t=function(n,l){"use strict";function g(o){return o==null?o+"":typeof o=="object"||typeof o=="function"?n[l.call(o)]||"object":typeof o}return g}.apply(h,u),t!==void 0&&(v.exports=t)},9999:(v,h,i)=>{var u;u=function(){"use strict";return/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i}.call(h,i,h,v),u!==void 0&&(v.exports=u)},5463:(v,h,i)=>{var u,t;u=[i(8732),i(40),i(783),i(5424),i(1986),i(8458),i(6419),i(2821),i(1433),i(3034),i(4618),i(8339),i(4895),i(5642),i(2291),i(1288),i(1958),i(7027)],t=function(n,l,g,o,r,p,m,s,_,c,f,k,y,A,b){"use strict";var I=/^(none|table(?!-c[ea]).+)/,P={position:"absolute",visibility:"hidden",display:"block"},B={letterSpacing:"0",fontWeight:"400"};function T(D,S,w){var C=r.exec(S);return C?Math.max(0,C[2]-(w||0))+(C[3]||"px"):S}function K(D,S,w,C,F,H){var x=S==="width"?1:0,O=0,M=0,Y=0;if(w===(C?"border":"content"))return 0;for(;x<4;x+=2)w==="margin"&&(Y+=n.css(D,w+s[x],!0,F)),C?(w==="content"&&(M-=n.css(D,"padding"+s[x],!0,F)),w!=="margin"&&(M-=n.css(D,"border"+s[x]+"Width",!0,F))):(M+=n.css(D,"padding"+s[x],!0,F),w!=="padding"?M+=n.css(D,"border"+s[x]+"Width",!0,F):O+=n.css(D,"border"+s[x]+"Width",!0,F));return!C&&H>=0&&(M+=Math.max(0,Math.ceil(D["offset"+S[0].toUpperCase()+S.slice(1)]-H-M-O-.5))||0),M+Y}function L(D,S,w){var C=_(D),F=!A.boxSizingReliable()||w,H=F&&n.css(D,"boxSizing",!1,C)==="border-box",x=H,O=f(D,S,C),M="offset"+S[0].toUpperCase()+S.slice(1);if(p.test(O)){if(!w)return O;O="auto"}return(!A.boxSizingReliable()&&H||!A.reliableTrDimensions()&&o(D,"tr")||O==="auto"||!parseFloat(O)&&n.css(D,"display",!1,C)==="inline")&&D.getClientRects().length&&(H=n.css(D,"boxSizing",!1,C)==="border-box",x=M in D,x&&(O=D[M])),O=parseFloat(O)||0,O+K(D,S,w||(H?"border":"content"),x,C,O)+"px"}return n.extend({cssHooks:{opacity:{get:function(D,S){if(S){var w=f(D,"opacity");return w===""?"1":w}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(D,S,w,C){if(!(!D||D.nodeType===3||D.nodeType===8||!D.style)){var F,H,x,O=g(S),M=m.test(S),Y=D.style;if(M||(S=b(O)),x=n.cssHooks[S]||n.cssHooks[O],w!==void 0){if(H=typeof w,H==="string"&&(F=r.exec(w))&&F[1]&&(w=k(D,S,F),H="number"),w==null||w!==w)return;H==="number"&&!M&&(w+=F&&F[3]||(n.cssNumber[O]?"":"px")),!A.clearCloneStyle&&w===""&&S.indexOf("background")===0&&(Y[S]="inherit"),(!x||!("set"in x)||(w=x.set(D,w,C))!==void 0)&&(M?Y.setProperty(S,w):Y[S]=w)}else return x&&"get"in x&&(F=x.get(D,!1,C))!==void 0?F:Y[S]}},css:function(D,S,w,C){var F,H,x,O=g(S),M=m.test(S);return M||(S=b(O)),x=n.cssHooks[S]||n.cssHooks[O],x&&"get"in x&&(F=x.get(D,!0,w)),F===void 0&&(F=f(D,S,C)),F==="normal"&&S in B&&(F=B[S]),w===""||w?(H=parseFloat(F),w===!0||isFinite(H)?H||0:F):F}}),n.each(["height","width"],function(D,S){n.cssHooks[S]={get:function(w,C,F){if(C)return I.test(n.css(w,"display"))&&(!w.getClientRects().length||!w.getBoundingClientRect().width)?c(w,P,function(){return L(w,S,F)}):L(w,S,F)},set:function(w,C,F){var H,x=_(w),O=!A.scrollboxSize()&&x.position==="absolute",M=O||F,Y=M&&n.css(w,"boxSizing",!1,x)==="border-box",W=F?K(w,S,F,Y,x):0;return Y&&O&&(W-=Math.ceil(w["offset"+S[0].toUpperCase()+S.slice(1)]-parseFloat(x[S])-K(w,S,"border",!1,x)-.5)),W&&(H=r.exec(C))&&(H[3]||"px")!=="px"&&(w.style[S]=C,C=n.css(w,S)),T(w,C,W)}}}),n.cssHooks.marginLeft=y(A.reliableMarginLeft,function(D,S){if(S)return(parseFloat(f(D,"marginLeft"))||D.getBoundingClientRect().left-c(D,{marginLeft:0},function(){return D.getBoundingClientRect().left}))+"px"}),n.each({margin:"",padding:"",border:"Width"},function(D,S){n.cssHooks[D+S]={expand:function(w){for(var C=0,F={},H=typeof w=="string"?w.split(" "):[w];C<4;C++)F[D+s[C]+S]=H[C]||H[C-2]||H[0];return F}},D!=="margin"&&(n.cssHooks[D+S].set=T)}),n.fn.extend({css:function(D,S){return l(this,function(w,C,F){var H,x,O={},M=0;if(Array.isArray(C)){for(H=_(w),x=C.length;M<x;M++)O[C[M]]=n.css(w,C[M],!1,H);return O}return F!==void 0?n.style(w,C,F):n.css(w,C)},D,S,arguments.length>1)}}),n}.apply(h,u),t!==void 0&&(v.exports=t)},4895:(v,h,i)=>{var u;u=function(){"use strict";function t(n,l){return{get:function(){if(n()){delete this.get;return}return(this.get=l).apply(this,arguments)}}}return t}.call(h,i,h,v),u!==void 0&&(v.exports=u)},8339:(v,h,i)=>{var u,t;u=[i(8732),i(1986)],t=function(n,l){"use strict";function g(o,r,p,m){var s,_,c=20,f=m?function(){return m.cur()}:function(){return n.css(o,r,"")},k=f(),y=p&&p[3]||(n.cssNumber[r]?"":"px"),A=o.nodeType&&(n.cssNumber[r]||y!=="px"&&+k)&&l.exec(n.css(o,r));if(A&&A[3]!==y){for(k=k/2,y=y||A[3],A=+k||1;c--;)n.style(o,r,A+y),(1-_)*(1-(_=f()/k||.5))<=0&&(c=0),A=A/_;A=A*2,n.style(o,r,A+y),p=p||[]}return p&&(A=+A||+k||0,s=p[1]?A+(p[1]+1)*p[2]:+p[2],m&&(m.unit=y,m.start=A,m.end=s)),s}return g}.apply(h,u),t!==void 0&&(v.exports=t)},4618:(v,h,i)=>{var u,t;u=[i(8732),i(2918),i(9480),i(8458),i(1433),i(6419),i(6724),i(5642)],t=function(n,l,g,o,r,p,m,s){"use strict";function _(c,f,k){var y,A,b,I,P=p.test(f),B=c.style;return k=k||r(c),k&&(I=k.getPropertyValue(f)||k[f],P&&I&&(I=I.replace(m,"$1")||void 0),I===""&&!l(c)&&(I=n.style(c,f)),!s.pixelBoxStyles()&&o.test(I)&&g.test(f)&&(y=B.width,A=B.minWidth,b=B.maxWidth,B.minWidth=B.maxWidth=B.width=I,I=k.width,B.width=y,B.minWidth=A,B.maxWidth=b)),I!==void 0?I+"":I}return _}.apply(h,u),t!==void 0&&(v.exports=t)},2291:(v,h,i)=>{var u,t;u=[i(8217),i(8732)],t=function(n,l){"use strict";var g=["Webkit","Moz","ms"],o=n.createElement("div").style,r={};function p(s){for(var _=s[0].toUpperCase()+s.slice(1),c=g.length;c--;)if(s=g[c]+_,s in o)return s}function m(s){var _=l.cssProps[s]||r[s];return _||(s in o?s:r[s]=p(s)||s)}return m}.apply(h,u),t!==void 0&&(v.exports=t)},2799:(v,h,i)=>{var u,t;u=[i(8732),i(7027)],t=function(n){"use strict";n.expr.pseudos.hidden=function(l){return!n.expr.pseudos.visible(l)},n.expr.pseudos.visible=function(l){return!!(l.offsetWidth||l.offsetHeight||l.getClientRects().length)}}.apply(h,u),t!==void 0&&(v.exports=t)},9040:(v,h,i)=>{var u,t;u=[i(8732),i(674),i(6051)],t=function(n,l,g){"use strict";var o={};function r(m){var s,_=m.ownerDocument,c=m.nodeName,f=o[c];return f||(s=_.body.appendChild(_.createElement(c)),f=n.css(s,"display"),s.parentNode.removeChild(s),f==="none"&&(f="block"),o[c]=f,f)}function p(m,s){for(var _,c,f=[],k=0,y=m.length;k<y;k++)c=m[k],c.style&&(_=c.style.display,s?(_==="none"&&(f[k]=l.get(c,"display")||null,f[k]||(c.style.display="")),c.style.display===""&&g(c)&&(f[k]=r(c))):_!=="none"&&(f[k]="none",l.set(c,"display",_)));for(k=0;k<y;k++)f[k]!=null&&(m[k].style.display=f[k]);return m}return n.fn.extend({show:function(){return p(this,!0)},hide:function(){return p(this)},toggle:function(m){return typeof m=="boolean"?m?this.show():this.hide():this.each(function(){g(this)?n(this).show():n(this).hide()})}}),p}.apply(h,u),t!==void 0&&(v.exports=t)},5642:(v,h,i)=>{var u,t;u=[i(8732),i(8217),i(2775),i(7368)],t=function(n,l,g,o){"use strict";return function(){function r(){if(A){y.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",A.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",g.appendChild(y).appendChild(A);var b=window.getComputedStyle(A);m=b.top!=="1%",k=p(b.marginLeft)===12,A.style.right="60%",c=p(b.right)===36,s=p(b.width)===36,A.style.position="absolute",_=p(A.offsetWidth/3)===12,g.removeChild(y),A=null}}function p(b){return Math.round(parseFloat(b))}var m,s,_,c,f,k,y=l.createElement("div"),A=l.createElement("div");A.style&&(A.style.backgroundClip="content-box",A.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle=A.style.backgroundClip==="content-box",n.extend(o,{boxSizingReliable:function(){return r(),s},pixelBoxStyles:function(){return r(),c},pixelPosition:function(){return r(),m},reliableMarginLeft:function(){return r(),k},scrollboxSize:function(){return r(),_},reliableTrDimensions:function(){var b,I,P,B;return f==null&&(b=l.createElement("table"),I=l.createElement("tr"),P=l.createElement("div"),b.style.cssText="position:absolute;left:-11111px;border-collapse:separate",I.style.cssText="box-sizing:content-box;border:1px solid",I.style.height="1px",P.style.height="9px",P.style.display="block",g.appendChild(b).appendChild(I).appendChild(P),B=window.getComputedStyle(I),f=parseInt(B.height,10)+parseInt(B.borderTopWidth,10)+parseInt(B.borderBottomWidth,10)===I.offsetHeight,g.removeChild(b)),f}}))}(),o}.apply(h,u),t!==void 0&&(v.exports=t)},2821:(v,h,i)=>{var u;u=function(){"use strict";return["Top","Right","Bottom","Left"]}.call(h,i,h,v),u!==void 0&&(v.exports=u)},1433:(v,h,i)=>{var u;u=function(){"use strict";return function(t){var n=t.ownerDocument.defaultView;return(!n||!n.opener)&&(n=window),n.getComputedStyle(t)}}.call(h,i,h,v),u!==void 0&&(v.exports=u)},6051:(v,h,i)=>{var u,t;u=[i(8732),i(2918)],t=function(n,l){"use strict";return function(g,o){return g=o||g,g.style.display==="none"||g.style.display===""&&l(g)&&n.css(g,"display")==="none"}}.apply(h,u),t!==void 0&&(v.exports=t)},9480:(v,h,i)=>{var u,t;u=[i(2821)],t=function(n){"use strict";return new RegExp(n.join("|"),"i")}.apply(h,u),t!==void 0&&(v.exports=t)},6419:(v,h,i)=>{var u;u=function(){"use strict";return/^--/}.call(h,i,h,v),u!==void 0&&(v.exports=u)},8458:(v,h,i)=>{var u,t;u=[i(4785)],t=function(n){"use strict";return new RegExp("^("+n+")(?!px)[a-z%]+$","i")}.apply(h,u),t!==void 0&&(v.exports=t)},3034:(v,h,i)=>{var u;u=function(){"use strict";return function(t,n,l){var g,o,r={};for(o in n)r[o]=t.style[o],t.style[o]=n[o];g=l.call(t);for(o in n)t.style[o]=r[o];return g}}.call(h,i,h,v),u!==void 0&&(v.exports=u)},4326:(v,h,i)=>{var u,t;u=[i(8732),i(40),i(783),i(674),i(215)],t=function(n,l,g,o,r){"use strict";var p=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,m=/[A-Z]/g;function s(c){return c==="true"?!0:c==="false"?!1:c==="null"?null:c===+c+""?+c:p.test(c)?JSON.parse(c):c}function _(c,f,k){var y;if(k===void 0&&c.nodeType===1)if(y="data-"+f.replace(m,"-$&").toLowerCase(),k=c.getAttribute(y),typeof k=="string"){try{k=s(k)}catch(A){}r.set(c,f,k)}else k=void 0;return k}return n.extend({hasData:function(c){return r.hasData(c)||o.hasData(c)},data:function(c,f,k){return r.access(c,f,k)},removeData:function(c,f){r.remove(c,f)},_data:function(c,f,k){return o.access(c,f,k)},_removeData:function(c,f){o.remove(c,f)}}),n.fn.extend({data:function(c,f){var k,y,A,b=this[0],I=b&&b.attributes;if(c===void 0){if(this.length&&(A=r.get(b),b.nodeType===1&&!o.get(b,"hasDataAttrs"))){for(k=I.length;k--;)I[k]&&(y=I[k].name,y.indexOf("data-")===0&&(y=g(y.slice(5)),_(b,y,A[y])));o.set(b,"hasDataAttrs",!0)}return A}return typeof c=="object"?this.each(function(){r.set(this,c)}):l(this,function(P){var B;if(b&&P===void 0)return B=r.get(b,c),B!==void 0||(B=_(b,c),B!==void 0)?B:void 0;this.each(function(){r.set(this,c,P)})},null,f,arguments.length>1,null,!0)},removeData:function(c){return this.each(function(){r.remove(this,c)})}}),n}.apply(h,u),t!==void 0&&(v.exports=t)},4237:(v,h,i)=>{var u,t;u=[i(8732),i(783),i(4055),i(9110)],t=function(n,l,g,o){"use strict";function r(){this.expando=n.expando+r.uid++}return r.uid=1,r.prototype={cache:function(p){var m=p[this.expando];return m||(m={},o(p)&&(p.nodeType?p[this.expando]=m:Object.defineProperty(p,this.expando,{value:m,configurable:!0}))),m},set:function(p,m,s){var _,c=this.cache(p);if(typeof m=="string")c[l(m)]=s;else for(_ in m)c[l(_)]=m[_];return c},get:function(p,m){return m===void 0?this.cache(p):p[this.expando]&&p[this.expando][l(m)]},access:function(p,m,s){return m===void 0||m&&typeof m=="string"&&s===void 0?this.get(p,m):(this.set(p,m,s),s!==void 0?s:m)},remove:function(p,m){var s,_=p[this.expando];if(_!==void 0){if(m!==void 0)for(Array.isArray(m)?m=m.map(l):(m=l(m),m=m in _?[m]:m.match(g)||[]),s=m.length;s--;)delete _[m[s]];(m===void 0||n.isEmptyObject(_))&&(p.nodeType?p[this.expando]=void 0:delete p[this.expando])}},hasData:function(p){var m=p[this.expando];return m!==void 0&&!n.isEmptyObject(m)}},r}.apply(h,u),t!==void 0&&(v.exports=t)},9110:(v,h,i)=>{var u;u=function(){"use strict";return function(t){return t.nodeType===1||t.nodeType===9||!+t.nodeType}}.call(h,i,h,v),u!==void 0&&(v.exports=u)},674:(v,h,i)=>{var u,t;u=[i(4237)],t=function(n){"use strict";return new n}.apply(h,u),t!==void 0&&(v.exports=t)},215:(v,h,i)=>{var u,t;u=[i(4237)],t=function(n){"use strict";return new n}.apply(h,u),t!==void 0&&(v.exports=t)},3306:(v,h,i)=>{var u,t;u=[i(8732),i(3675),i(9837),i(1046)],t=function(n,l,g){"use strict";function o(m){return m}function r(m){throw m}function p(m,s,_,c){var f;try{m&&l(f=m.promise)?f.call(m).done(s).fail(_):m&&l(f=m.then)?f.call(m,s,_):s.apply(void 0,[m].slice(c))}catch(k){_.apply(void 0,[k])}}return n.extend({Deferred:function(m){var s=[["notify","progress",n.Callbacks("memory"),n.Callbacks("memory"),2],["resolve","done",n.Callbacks("once memory"),n.Callbacks("once memory"),0,"resolved"],["reject","fail",n.Callbacks("once memory"),n.Callbacks("once memory"),1,"rejected"]],_="pending",c={state:function(){return _},always:function(){return f.done(arguments).fail(arguments),this},catch:function(k){return c.then(null,k)},pipe:function(){var k=arguments;return n.Deferred(function(y){n.each(s,function(A,b){var I=l(k[b[4]])&&k[b[4]];f[b[1]](function(){var P=I&&I.apply(this,arguments);P&&l(P.promise)?P.promise().progress(y.notify).done(y.resolve).fail(y.reject):y[b[0]+"With"](this,I?[P]:arguments)})}),k=null}).promise()},then:function(k,y,A){var b=0;function I(P,B,T,K){return function(){var L=this,D=arguments,S=function(){var C,F;if(!(P<b)){if(C=T.apply(L,D),C===B.promise())throw new TypeError("Thenable self-resolution");F=C&&(typeof C=="object"||typeof C=="function")&&C.then,l(F)?K?F.call(C,I(b,B,o,K),I(b,B,r,K)):(b++,F.call(C,I(b,B,o,K),I(b,B,r,K),I(b,B,o,B.notifyWith))):(T!==o&&(L=void 0,D=[C]),(K||B.resolveWith)(L,D))}},w=K?S:function(){try{S()}catch(C){n.Deferred.exceptionHook&&n.Deferred.exceptionHook(C,w.error),P+1>=b&&(T!==r&&(L=void 0,D=[C]),B.rejectWith(L,D))}};P?w():(n.Deferred.getErrorHook?w.error=n.Deferred.getErrorHook():n.Deferred.getStackHook&&(w.error=n.Deferred.getStackHook()),window.setTimeout(w))}}return n.Deferred(function(P){s[0][3].add(I(0,P,l(A)?A:o,P.notifyWith)),s[1][3].add(I(0,P,l(k)?k:o)),s[2][3].add(I(0,P,l(y)?y:r))}).promise()},promise:function(k){return k!=null?n.extend(k,c):c}},f={};return n.each(s,function(k,y){var A=y[2],b=y[5];c[y[1]]=A.add,b&&A.add(function(){_=b},s[3-k][2].disable,s[3-k][3].disable,s[0][2].lock,s[0][3].lock),A.add(y[3].fire),f[y[0]]=function(){return f[y[0]+"With"](this===f?void 0:this,arguments),this},f[y[0]+"With"]=A.fireWith}),c.promise(f),m&&m.call(f,f),f},when:function(m){var s=arguments.length,_=s,c=Array(_),f=g.call(arguments),k=n.Deferred(),y=function(A){return function(b){c[A]=this,f[A]=arguments.length>1?g.call(arguments):b,--s||k.resolveWith(c,f)}};if(s<=1&&(p(m,k.done(y(_)).resolve,k.reject,!s),k.state()==="pending"||l(f[_]&&f[_].then)))return k.then();for(;_--;)p(f[_],y(_),k.reject);return k.promise()}}),n}.apply(h,u),t!==void 0&&(v.exports=t)},5288:(v,h,i)=>{var u,t;u=[i(8732),i(3306)],t=function(n){"use strict";var l=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;n.Deferred.exceptionHook=function(g,o){window.console&&window.console.warn&&g&&l.test(g.name)&&window.console.warn("jQuery.Deferred exception: "+g.message,g.stack,o)}}.apply(h,u),t!==void 0&&(v.exports=t)},795:(v,h,i)=>{var u,t;u=[i(8732),i(5424),i(783),i(192),i(3675),i(2619),i(9837),i(2157),i(1251)],t=function(n,l,g,o,r,p,m){"use strict";var s=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;n.proxy=function(_,c){var f,k,y;if(typeof c=="string"&&(f=_[c],c=_,_=f),!!r(_))return k=m.call(arguments,2),y=function(){return _.apply(c||this,k.concat(m.call(arguments)))},y.guid=_.guid=_.guid||n.guid++,y},n.holdReady=function(_){_?n.readyWait++:n.ready(!0)},n.isArray=Array.isArray,n.parseJSON=JSON.parse,n.nodeName=l,n.isFunction=r,n.isWindow=p,n.camelCase=g,n.type=o,n.now=Date.now,n.isNumeric=function(_){var c=n.type(_);return(c==="number"||c==="string")&&!isNaN(_-parseFloat(_))},n.trim=function(_){return _==null?"":(_+"").replace(s,"$1")}}.apply(h,u),t!==void 0&&(v.exports=t)},2157:(v,h,i)=>{var u,t;u=[i(8732),i(1988),i(2268)],t=function(n){"use strict";n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(l,g){n.fn[g]=function(o){return this.on(g,o)}})}.apply(h,u),t!==void 0&&(v.exports=t)},1251:(v,h,i)=>{var u,t;u=[i(8732),i(2268),i(747)],t=function(n){"use strict";n.fn.extend({bind:function(l,g,o){return this.on(l,null,g,o)},unbind:function(l,g){return this.off(l,null,g)},delegate:function(l,g,o,r){return this.on(g,l,o,r)},undelegate:function(l,g,o){return arguments.length===1?this.off(l,"**"):this.off(g,l||"**",o)},hover:function(l,g){return this.on("mouseenter",l).on("mouseleave",g||l)}}),n.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(l,g){n.fn[g]=function(o,r){return arguments.length>0?this.on(g,null,o,r):this.trigger(g)}})}.apply(h,u),t!==void 0&&(v.exports=t)},2843:(v,h,i)=>{var u,t;u=[i(8732),i(40),i(2619),i(5463)],t=function(n,l,g){"use strict";return n.each({Height:"height",Width:"width"},function(o,r){n.each({padding:"inner"+o,content:r,"":"outer"+o},function(p,m){n.fn[m]=function(s,_){var c=arguments.length&&(p||typeof s!="boolean"),f=p||(s===!0||_===!0?"margin":"border");return l(this,function(k,y,A){var b;return g(k)?m.indexOf("outer")===0?k["inner"+o]:k.document.documentElement["client"+o]:k.nodeType===9?(b=k.documentElement,Math.max(k.body["scroll"+o],b["scroll"+o],k.body["offset"+o],b["offset"+o],b["client"+o])):A===void 0?n.css(k,y,f):n.style(k,y,A,f)},r,c?s:void 0,c)}})}),n}.apply(h,u),t!==void 0&&(v.exports=t)},2381:(v,h,i)=>{var u,t;u=[i(8732),i(783),i(8217),i(3675),i(1986),i(4055),i(2821),i(6051),i(8339),i(674),i(9040),i(1288),i(1535),i(3306),i(9310),i(1923),i(5463),i(988)],t=function(n,l,g,o,r,p,m,s,_,c,f){"use strict";var k,y,A=/^(?:toggle|show|hide)$/,b=/queueHooks$/;function I(){y&&(g.hidden===!1&&window.requestAnimationFrame?window.requestAnimationFrame(I):window.setTimeout(I,n.fx.interval),n.fx.tick())}function P(){return window.setTimeout(function(){k=void 0}),k=Date.now()}function B(S,w){var C,F=0,H={height:S};for(w=w?1:0;F<4;F+=2-w)C=m[F],H["margin"+C]=H["padding"+C]=S;return w&&(H.opacity=H.width=S),H}function T(S,w,C){for(var F,H=(D.tweeners[w]||[]).concat(D.tweeners["*"]),x=0,O=H.length;x<O;x++)if(F=H[x].call(C,w,S))return F}function K(S,w,C){var F,H,x,O,M,Y,W,X,re="width"in w||"height"in w,de=this,J={},ke=S.style,Ie=S.nodeType&&s(S),Ne=c.get(S,"fxshow");C.queue||(O=n._queueHooks(S,"fx"),O.unqueued==null&&(O.unqueued=0,M=O.empty.fire,O.empty.fire=function(){O.unqueued||M()}),O.unqueued++,de.always(function(){de.always(function(){O.unqueued--,n.queue(S,"fx").length||O.empty.fire()})}));for(F in w)if(H=w[F],A.test(H)){if(delete w[F],x=x||H==="toggle",H===(Ie?"hide":"show"))if(H==="show"&&Ne&&Ne[F]!==void 0)Ie=!0;else continue;J[F]=Ne&&Ne[F]||n.style(S,F)}if(Y=!n.isEmptyObject(w),!(!Y&&n.isEmptyObject(J))){re&&S.nodeType===1&&(C.overflow=[ke.overflow,ke.overflowX,ke.overflowY],W=Ne&&Ne.display,W==null&&(W=c.get(S,"display")),X=n.css(S,"display"),X==="none"&&(W?X=W:(f([S],!0),W=S.style.display||W,X=n.css(S,"display"),f([S]))),(X==="inline"||X==="inline-block"&&W!=null)&&n.css(S,"float")==="none"&&(Y||(de.done(function(){ke.display=W}),W==null&&(X=ke.display,W=X==="none"?"":X)),ke.display="inline-block")),C.overflow&&(ke.overflow="hidden",de.always(function(){ke.overflow=C.overflow[0],ke.overflowX=C.overflow[1],ke.overflowY=C.overflow[2]})),Y=!1;for(F in J)Y||(Ne?"hidden"in Ne&&(Ie=Ne.hidden):Ne=c.access(S,"fxshow",{display:W}),x&&(Ne.hidden=!Ie),Ie&&f([S],!0),de.done(function(){Ie||f([S]),c.remove(S,"fxshow");for(F in J)n.style(S,F,J[F])})),Y=T(Ie?Ne[F]:0,F,de),F in Ne||(Ne[F]=Y.start,Ie&&(Y.end=Y.start,Y.start=0))}}function L(S,w){var C,F,H,x,O;for(C in S)if(F=l(C),H=w[F],x=S[C],Array.isArray(x)&&(H=x[1],x=S[C]=x[0]),C!==F&&(S[F]=x,delete S[C]),O=n.cssHooks[F],O&&"expand"in O){x=O.expand(x),delete S[F];for(C in x)C in S||(S[C]=x[C],w[C]=H)}else w[F]=H}function D(S,w,C){var F,H,x=0,O=D.prefilters.length,M=n.Deferred().always(function(){delete Y.elem}),Y=function(){if(H)return!1;for(var re=k||P(),de=Math.max(0,W.startTime+W.duration-re),J=de/W.duration||0,ke=1-J,Ie=0,Ne=W.tweens.length;Ie<Ne;Ie++)W.tweens[Ie].run(ke);return M.notifyWith(S,[W,ke,de]),ke<1&&Ne?de:(Ne||M.notifyWith(S,[W,1,0]),M.resolveWith(S,[W]),!1)},W=M.promise({elem:S,props:n.extend({},w),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},C),originalProperties:w,originalOptions:C,startTime:k||P(),duration:C.duration,tweens:[],createTween:function(re,de){var J=n.Tween(S,W.opts,re,de,W.opts.specialEasing[re]||W.opts.easing);return W.tweens.push(J),J},stop:function(re){var de=0,J=re?W.tweens.length:0;if(H)return this;for(H=!0;de<J;de++)W.tweens[de].run(1);return re?(M.notifyWith(S,[W,1,0]),M.resolveWith(S,[W,re])):M.rejectWith(S,[W,re]),this}}),X=W.props;for(L(X,W.opts.specialEasing);x<O;x++)if(F=D.prefilters[x].call(W,S,X,W.opts),F)return o(F.stop)&&(n._queueHooks(W.elem,W.opts.queue).stop=F.stop.bind(F)),F;return n.map(X,T,W),o(W.opts.start)&&W.opts.start.call(S,W),W.progress(W.opts.progress).done(W.opts.done,W.opts.complete).fail(W.opts.fail).always(W.opts.always),n.fx.timer(n.extend(Y,{elem:S,anim:W,queue:W.opts.queue})),W}return n.Animation=n.extend(D,{tweeners:{"*":[function(S,w){var C=this.createTween(S,w);return _(C.elem,S,r.exec(w),C),C}]},tweener:function(S,w){o(S)?(w=S,S=["*"]):S=S.match(p);for(var C,F=0,H=S.length;F<H;F++)C=S[F],D.tweeners[C]=D.tweeners[C]||[],D.tweeners[C].unshift(w)},prefilters:[K],prefilter:function(S,w){w?D.prefilters.unshift(S):D.prefilters.push(S)}}),n.speed=function(S,w,C){var F=S&&typeof S=="object"?n.extend({},S):{complete:C||!C&&w||o(S)&&S,duration:S,easing:C&&w||w&&!o(w)&&w};return n.fx.off?F.duration=0:typeof F.duration!="number"&&(F.duration in n.fx.speeds?F.duration=n.fx.speeds[F.duration]:F.duration=n.fx.speeds._default),(F.queue==null||F.queue===!0)&&(F.queue="fx"),F.old=F.complete,F.complete=function(){o(F.old)&&F.old.call(this),F.queue&&n.dequeue(this,F.queue)},F},n.fn.extend({fadeTo:function(S,w,C,F){return this.filter(s).css("opacity",0).show().end().animate({opacity:w},S,C,F)},animate:function(S,w,C,F){var H=n.isEmptyObject(S),x=n.speed(w,C,F),O=function(){var M=D(this,n.extend({},S),x);(H||c.get(this,"finish"))&&M.stop(!0)};return O.finish=O,H||x.queue===!1?this.each(O):this.queue(x.queue,O)},stop:function(S,w,C){var F=function(H){var x=H.stop;delete H.stop,x(C)};return typeof S!="string"&&(C=w,w=S,S=void 0),w&&this.queue(S||"fx",[]),this.each(function(){var H=!0,x=S!=null&&S+"queueHooks",O=n.timers,M=c.get(this);if(x)M[x]&&M[x].stop&&F(M[x]);else for(x in M)M[x]&&M[x].stop&&b.test(x)&&F(M[x]);for(x=O.length;x--;)O[x].elem===this&&(S==null||O[x].queue===S)&&(O[x].anim.stop(C),H=!1,O.splice(x,1));(H||!C)&&n.dequeue(this,S)})},finish:function(S){return S!==!1&&(S=S||"fx"),this.each(function(){var w,C=c.get(this),F=C[S+"queue"],H=C[S+"queueHooks"],x=n.timers,O=F?F.length:0;for(C.finish=!0,n.queue(this,S,[]),H&&H.stop&&H.stop.call(this,!0),w=x.length;w--;)x[w].elem===this&&x[w].queue===S&&(x[w].anim.stop(!0),x.splice(w,1));for(w=0;w<O;w++)F[w]&&F[w].finish&&F[w].finish.call(this);delete C.finish})}}),n.each(["toggle","show","hide"],function(S,w){var C=n.fn[w];n.fn[w]=function(F,H,x){return F==null||typeof F=="boolean"?C.apply(this,arguments):this.animate(B(w,!0),F,H,x)}}),n.each({slideDown:B("show"),slideUp:B("hide"),slideToggle:B("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(S,w){n.fn[S]=function(C,F,H){return this.animate(w,C,F,H)}}),n.timers=[],n.fx.tick=function(){var S,w=0,C=n.timers;for(k=Date.now();w<C.length;w++)S=C[w],!S()&&C[w]===S&&C.splice(w--,1);C.length||n.fx.stop(),k=void 0},n.fx.timer=function(S){n.timers.push(S),n.fx.start()},n.fx.interval=13,n.fx.start=function(){y||(y=!0,I())},n.fx.stop=function(){y=null},n.fx.speeds={slow:600,fast:200,_default:400},n}.apply(h,u),t!==void 0&&(v.exports=t)},988:(v,h,i)=>{var u,t;u=[i(8732),i(2291),i(5463)],t=function(n,l){"use strict";function g(o,r,p,m,s){return new g.prototype.init(o,r,p,m,s)}n.Tween=g,g.prototype={constructor:g,init:function(o,r,p,m,s,_){this.elem=o,this.prop=p,this.easing=s||n.easing._default,this.options=r,this.start=this.now=this.cur(),this.end=m,this.unit=_||(n.cssNumber[p]?"":"px")},cur:function(){var o=g.propHooks[this.prop];return o&&o.get?o.get(this):g.propHooks._default.get(this)},run:function(o){var r,p=g.propHooks[this.prop];return this.options.duration?this.pos=r=n.easing[this.easing](o,this.options.duration*o,0,1,this.options.duration):this.pos=r=o,this.now=(this.end-this.start)*r+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),p&&p.set?p.set(this):g.propHooks._default.set(this),this}},g.prototype.init.prototype=g.prototype,g.propHooks={_default:{get:function(o){var r;return o.elem.nodeType!==1||o.elem[o.prop]!=null&&o.elem.style[o.prop]==null?o.elem[o.prop]:(r=n.css(o.elem,o.prop,""),!r||r==="auto"?0:r)},set:function(o){n.fx.step[o.prop]?n.fx.step[o.prop](o):o.elem.nodeType===1&&(n.cssHooks[o.prop]||o.elem.style[l(o.prop)]!=null)?n.style(o.elem,o.prop,o.now+o.unit):o.elem[o.prop]=o.now}}},g.propHooks.scrollTop=g.propHooks.scrollLeft={set:function(o){o.elem.nodeType&&o.elem.parentNode&&(o.elem[o.prop]=o.now)}},n.easing={linear:function(o){return o},swing:function(o){return .5-Math.cos(o*Math.PI)/2},_default:"swing"},n.fx=g.prototype.init,n.fx.step={}}.apply(h,u),t!==void 0&&(v.exports=t)},6774:(v,h,i)=>{var u,t;u=[i(8732),i(7027),i(2381)],t=function(n){"use strict";n.expr.pseudos.animated=function(l){return n.grep(n.timers,function(g){return l===g.elem}).length}}.apply(h,u),t!==void 0&&(v.exports=t)},2268:(v,h,i)=>{var u,t;u=[i(8732),i(8217),i(2775),i(3675),i(4055),i(2304),i(9837),i(9110),i(674),i(5424),i(1288),i(7027)],t=function(n,l,g,o,r,p,m,s,_,c){"use strict";var f=/^([^.]*)(?:\.(.+)|)/;function k(){return!0}function y(){return!1}function A(I,P,B,T,K,L){var D,S;if(typeof P=="object"){typeof B!="string"&&(T=T||B,B=void 0);for(S in P)A(I,S,B,T,P[S],L);return I}if(T==null&&K==null?(K=B,T=B=void 0):K==null&&(typeof B=="string"?(K=T,T=void 0):(K=T,T=B,B=void 0)),K===!1)K=y;else if(!K)return I;return L===1&&(D=K,K=function(w){return n().off(w),D.apply(this,arguments)},K.guid=D.guid||(D.guid=n.guid++)),I.each(function(){n.event.add(this,P,K,T,B)})}n.event={global:{},add:function(I,P,B,T,K){var L,D,S,w,C,F,H,x,O,M,Y,W=_.get(I);if(s(I))for(B.handler&&(L=B,B=L.handler,K=L.selector),K&&n.find.matchesSelector(g,K),B.guid||(B.guid=n.guid++),(w=W.events)||(w=W.events=Object.create(null)),(D=W.handle)||(D=W.handle=function(X){return typeof n!="undefined"&&n.event.triggered!==X.type?n.event.dispatch.apply(I,arguments):void 0}),P=(P||"").match(r)||[""],C=P.length;C--;)S=f.exec(P[C])||[],O=Y=S[1],M=(S[2]||"").split(".").sort(),O&&(H=n.event.special[O]||{},O=(K?H.delegateType:H.bindType)||O,H=n.event.special[O]||{},F=n.extend({type:O,origType:Y,data:T,handler:B,guid:B.guid,selector:K,needsContext:K&&n.expr.match.needsContext.test(K),namespace:M.join(".")},L),(x=w[O])||(x=w[O]=[],x.delegateCount=0,(!H.setup||H.setup.call(I,T,M,D)===!1)&&I.addEventListener&&I.addEventListener(O,D)),H.add&&(H.add.call(I,F),F.handler.guid||(F.handler.guid=B.guid)),K?x.splice(x.delegateCount++,0,F):x.push(F),n.event.global[O]=!0)},remove:function(I,P,B,T,K){var L,D,S,w,C,F,H,x,O,M,Y,W=_.hasData(I)&&_.get(I);if(!(!W||!(w=W.events))){for(P=(P||"").match(r)||[""],C=P.length;C--;){if(S=f.exec(P[C])||[],O=Y=S[1],M=(S[2]||"").split(".").sort(),!O){for(O in w)n.event.remove(I,O+P[C],B,T,!0);continue}for(H=n.event.special[O]||{},O=(T?H.delegateType:H.bindType)||O,x=w[O]||[],S=S[2]&&new RegExp("(^|\\.)"+M.join("\\.(?:.*\\.|)")+"(\\.|$)"),D=L=x.length;L--;)F=x[L],(K||Y===F.origType)&&(!B||B.guid===F.guid)&&(!S||S.test(F.namespace))&&(!T||T===F.selector||T==="**"&&F.selector)&&(x.splice(L,1),F.selector&&x.delegateCount--,H.remove&&H.remove.call(I,F));D&&!x.length&&((!H.teardown||H.teardown.call(I,M,W.handle)===!1)&&n.removeEvent(I,O,W.handle),delete w[O])}n.isEmptyObject(w)&&_.remove(I,"handle events")}},dispatch:function(I){var P,B,T,K,L,D,S=new Array(arguments.length),w=n.event.fix(I),C=(_.get(this,"events")||Object.create(null))[w.type]||[],F=n.event.special[w.type]||{};for(S[0]=w,P=1;P<arguments.length;P++)S[P]=arguments[P];if(w.delegateTarget=this,!(F.preDispatch&&F.preDispatch.call(this,w)===!1)){for(D=n.event.handlers.call(this,w,C),P=0;(K=D[P++])&&!w.isPropagationStopped();)for(w.currentTarget=K.elem,B=0;(L=K.handlers[B++])&&!w.isImmediatePropagationStopped();)(!w.rnamespace||L.namespace===!1||w.rnamespace.test(L.namespace))&&(w.handleObj=L,w.data=L.data,T=((n.event.special[L.origType]||{}).handle||L.handler).apply(K.elem,S),T!==void 0&&(w.result=T)===!1&&(w.preventDefault(),w.stopPropagation()));return F.postDispatch&&F.postDispatch.call(this,w),w.result}},handlers:function(I,P){var B,T,K,L,D,S=[],w=P.delegateCount,C=I.target;if(w&&C.nodeType&&!(I.type==="click"&&I.button>=1)){for(;C!==this;C=C.parentNode||this)if(C.nodeType===1&&!(I.type==="click"&&C.disabled===!0)){for(L=[],D={},B=0;B<w;B++)T=P[B],K=T.selector+" ",D[K]===void 0&&(D[K]=T.needsContext?n(K,this).index(C)>-1:n.find(K,this,null,[C]).length),D[K]&&L.push(T);L.length&&S.push({elem:C,handlers:L})}}return C=this,w<P.length&&S.push({elem:C,handlers:P.slice(w)}),S},addProp:function(I,P){Object.defineProperty(n.Event.prototype,I,{enumerable:!0,configurable:!0,get:o(P)?function(){if(this.originalEvent)return P(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[I]},set:function(B){Object.defineProperty(this,I,{enumerable:!0,configurable:!0,writable:!0,value:B})}})},fix:function(I){return I[n.expando]?I:new n.Event(I)},special:{load:{noBubble:!0},click:{setup:function(I){var P=this||I;return p.test(P.type)&&P.click&&c(P,"input")&&b(P,"click",!0),!1},trigger:function(I){var P=this||I;return p.test(P.type)&&P.click&&c(P,"input")&&b(P,"click"),!0},_default:function(I){var P=I.target;return p.test(P.type)&&P.click&&c(P,"input")&&_.get(P,"click")||c(P,"a")}},beforeunload:{postDispatch:function(I){I.result!==void 0&&I.originalEvent&&(I.originalEvent.returnValue=I.result)}}}};function b(I,P,B){if(!B){_.get(I,P)===void 0&&n.event.add(I,P,k);return}_.set(I,P,!1),n.event.add(I,P,{namespace:!1,handler:function(T){var K,L=_.get(this,P);if(T.isTrigger&1&&this[P]){if(L)(n.event.special[P]||{}).delegateType&&T.stopPropagation();else if(L=m.call(arguments),_.set(this,P,L),this[P](),K=_.get(this,P),_.set(this,P,!1),L!==K)return T.stopImmediatePropagation(),T.preventDefault(),K}else L&&(_.set(this,P,n.event.trigger(L[0],L.slice(1),this)),T.stopPropagation(),T.isImmediatePropagationStopped=k)}})}return n.removeEvent=function(I,P,B){I.removeEventListener&&I.removeEventListener(P,B)},n.Event=function(I,P){if(!(this instanceof n.Event))return new n.Event(I,P);I&&I.type?(this.originalEvent=I,this.type=I.type,this.isDefaultPrevented=I.defaultPrevented||I.defaultPrevented===void 0&&I.returnValue===!1?k:y,this.target=I.target&&I.target.nodeType===3?I.target.parentNode:I.target,this.currentTarget=I.currentTarget,this.relatedTarget=I.relatedTarget):this.type=I,P&&n.extend(this,P),this.timeStamp=I&&I.timeStamp||Date.now(),this[n.expando]=!0},n.Event.prototype={constructor:n.Event,isDefaultPrevented:y,isPropagationStopped:y,isImmediatePropagationStopped:y,isSimulated:!1,preventDefault:function(){var I=this.originalEvent;this.isDefaultPrevented=k,I&&!this.isSimulated&&I.preventDefault()},stopPropagation:function(){var I=this.originalEvent;this.isPropagationStopped=k,I&&!this.isSimulated&&I.stopPropagation()},stopImmediatePropagation:function(){var I=this.originalEvent;this.isImmediatePropagationStopped=k,I&&!this.isSimulated&&I.stopImmediatePropagation(),this.stopPropagation()}},n.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},n.event.addProp),n.each({focus:"focusin",blur:"focusout"},function(I,P){function B(T){if(l.documentMode){var K=_.get(this,"handle"),L=n.event.fix(T);L.type=T.type==="focusin"?"focus":"blur",L.isSimulated=!0,K(T),L.target===L.currentTarget&&K(L)}else n.event.simulate(P,T.target,n.event.fix(T))}n.event.special[I]={setup:function(){var T;if(b(this,I,!0),l.documentMode)T=_.get(this,P),T||this.addEventListener(P,B),_.set(this,P,(T||0)+1);else return!1},trigger:function(){return b(this,I),!0},teardown:function(){var T;if(l.documentMode)T=_.get(this,P)-1,T?_.set(this,P,T):(this.removeEventListener(P,B),_.remove(this,P));else return!1},_default:function(T){return _.get(T.target,I)},delegateType:P},n.event.special[P]={setup:function(){var T=this.ownerDocument||this.document||this,K=l.documentMode?this:T,L=_.get(K,P);L||(l.documentMode?this.addEventListener(P,B):T.addEventListener(I,B,!0)),_.set(K,P,(L||0)+1)},teardown:function(){var T=this.ownerDocument||this.document||this,K=l.documentMode?this:T,L=_.get(K,P)-1;L?_.set(K,P,L):(l.documentMode?this.removeEventListener(P,B):T.removeEventListener(I,B,!0),_.remove(K,P))}}}),n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(I,P){n.event.special[I]={delegateType:P,bindType:P,handle:function(B){var T,K=this,L=B.relatedTarget,D=B.handleObj;return(!L||L!==K&&!n.contains(K,L))&&(B.type=D.origType,T=D.handler.apply(this,arguments),B.type=P),T}}}),n.fn.extend({on:function(I,P,B,T){return A(this,I,P,B,T)},one:function(I,P,B,T){return A(this,I,P,B,T,1)},off:function(I,P,B){var T,K;if(I&&I.preventDefault&&I.handleObj)return T=I.handleObj,n(I.delegateTarget).off(T.namespace?T.origType+"."+T.namespace:T.origType,T.selector,T.handler),this;if(typeof I=="object"){for(K in I)this.off(K,P,I[K]);return this}return(P===!1||typeof P=="function")&&(B=P,P=void 0),B===!1&&(B=y),this.each(function(){n.event.remove(this,I,B,P)})}}),n}.apply(h,u),t!==void 0&&(v.exports=t)},747:(v,h,i)=>{var u,t;u=[i(8732),i(8217),i(674),i(9110),i(3414),i(3675),i(2619),i(2268)],t=function(n,l,g,o,r,p,m){"use strict";var s=/^(?:focusinfocus|focusoutblur)$/,_=function(c){c.stopPropagation()};return n.extend(n.event,{trigger:function(c,f,k,y){var A,b,I,P,B,T,K,L,D=[k||l],S=r.call(c,"type")?c.type:c,w=r.call(c,"namespace")?c.namespace.split("."):[];if(b=L=I=k=k||l,!(k.nodeType===3||k.nodeType===8)&&!s.test(S+n.event.triggered)&&(S.indexOf(".")>-1&&(w=S.split("."),S=w.shift(),w.sort()),B=S.indexOf(":")<0&&"on"+S,c=c[n.expando]?c:new n.Event(S,typeof c=="object"&&c),c.isTrigger=y?2:3,c.namespace=w.join("."),c.rnamespace=c.namespace?new RegExp("(^|\\.)"+w.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,c.result=void 0,c.target||(c.target=k),f=f==null?[c]:n.makeArray(f,[c]),K=n.event.special[S]||{},!(!y&&K.trigger&&K.trigger.apply(k,f)===!1))){if(!y&&!K.noBubble&&!m(k)){for(P=K.delegateType||S,s.test(P+S)||(b=b.parentNode);b;b=b.parentNode)D.push(b),I=b;I===(k.ownerDocument||l)&&D.push(I.defaultView||I.parentWindow||window)}for(A=0;(b=D[A++])&&!c.isPropagationStopped();)L=b,c.type=A>1?P:K.bindType||S,T=(g.get(b,"events")||Object.create(null))[c.type]&&g.get(b,"handle"),T&&T.apply(b,f),T=B&&b[B],T&&T.apply&&o(b)&&(c.result=T.apply(b,f),c.result===!1&&c.preventDefault());return c.type=S,!y&&!c.isDefaultPrevented()&&(!K._default||K._default.apply(D.pop(),f)===!1)&&o(k)&&B&&p(k[S])&&!m(k)&&(I=k[B],I&&(k[B]=null),n.event.triggered=S,c.isPropagationStopped()&&L.addEventListener(S,_),k[S](),c.isPropagationStopped()&&L.removeEventListener(S,_),n.event.triggered=void 0,I&&(k[B]=I)),c.result}},simulate:function(c,f,k){var y=n.extend(new n.Event,k,{type:c,isSimulated:!0});n.event.trigger(y,null,f)}}),n.fn.extend({trigger:function(c,f){return this.each(function(){n.event.trigger(c,f,this)})},triggerHandler:function(c,f){var k=this[0];if(k)return n.event.trigger(c,f,k,!0)}}),n}.apply(h,u),t!==void 0&&(v.exports=t)},9825:(v,h,i)=>{var u,t,u,t;u=[i(8732)],t=function(n){"use strict";u=[],t=function(){return n}.apply(h,u),t!==void 0&&(v.exports=t)}.apply(h,u),t!==void 0&&(v.exports=t)},9446:(v,h,i)=>{var u,t;u=[i(8732)],t=function(n){"use strict";var l=window.jQuery,g=window.$;n.noConflict=function(o){return window.$===n&&(window.$=g),o&&window.jQuery===n&&(window.jQuery=l),n},typeof noGlobal=="undefined"&&(window.jQuery=window.$=n)}.apply(h,u),t!==void 0&&(v.exports=t)},8321:(v,h,i)=>{var u,t;u=[i(8732),i(7027),i(9310),i(1046),i(3306),i(5288),i(1958),i(4326),i(1535),i(8414),i(4386),i(2268),i(1923),i(7556),i(5046),i(5463),i(2799),i(8125),i(1988),i(8404),i(6005),i(4894),i(5020),i(1845),i(8938),i(2381),i(6774),i(5307),i(2843),i(795),i(9825),i(9446)],t=function(n){"use strict";return n}.apply(h,u),t!==void 0&&(v.exports=t)},1923:(v,h,i)=>{var u,t;u=[i(8732),i(2918),i(2049),i(3675),i(3499),i(2304),i(40),i(3956),i(7215),i(6929),i(6524),i(7896),i(4865),i(7048),i(674),i(215),i(9110),i(4571),i(5424),i(1288),i(9310),i(7027),i(2268)],t=function(n,l,g,o,r,p,m,s,_,c,f,k,y,A,b,I,P,B,T){"use strict";var K=/<script|<style|<link/i,L=/checked\s*(?:[^=]|=\s*.checked.)/i,D=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function S(M,Y){return T(M,"table")&&T(Y.nodeType!==11?Y:Y.firstChild,"tr")&&n(M).children("tbody")[0]||M}function w(M){return M.type=(M.getAttribute("type")!==null)+"/"+M.type,M}function C(M){return(M.type||"").slice(0,5)==="true/"?M.type=M.type.slice(5):M.removeAttribute("type"),M}function F(M,Y){var W,X,re,de,J,ke,Ie;if(Y.nodeType===1){if(b.hasData(M)&&(de=b.get(M),Ie=de.events,Ie)){b.remove(Y,"handle events");for(re in Ie)for(W=0,X=Ie[re].length;W<X;W++)n.event.add(Y,re,Ie[re][W])}I.hasData(M)&&(J=I.access(M),ke=n.extend({},J),I.set(Y,ke))}}function H(M,Y){var W=Y.nodeName.toLowerCase();W==="input"&&p.test(M.type)?Y.checked=M.checked:(W==="input"||W==="textarea")&&(Y.defaultValue=M.defaultValue)}function x(M,Y,W,X){Y=g(Y);var re,de,J,ke,Ie,Ne,Ve=0,fa=M.length,ka=fa-1,Ia=Y[0],Ea=o(Ia);if(Ea||fa>1&&typeof Ia=="string"&&!A.checkClone&&L.test(Ia))return M.each(function(fe){var Te=M.eq(fe);Ea&&(Y[0]=Ia.call(this,fe,Te.html())),x(Te,Y,W,X)});if(fa&&(re=y(Y,M[0].ownerDocument,!1,M,X),de=re.firstChild,re.childNodes.length===1&&(re=de),de||X)){for(J=n.map(f(re,"script"),w),ke=J.length;Ve<fa;Ve++)Ie=re,Ve!==ka&&(Ie=n.clone(Ie,!0,!0),ke&&n.merge(J,f(Ie,"script"))),W.call(M[Ve],Ie,Ve);if(ke)for(Ne=J[J.length-1].ownerDocument,n.map(J,C),Ve=0;Ve<ke;Ve++)Ie=J[Ve],_.test(Ie.type||"")&&!b.access(Ie,"globalEval")&&n.contains(Ne,Ie)&&(Ie.src&&(Ie.type||"").toLowerCase()!=="module"?n._evalUrl&&!Ie.noModule&&n._evalUrl(Ie.src,{nonce:Ie.nonce||Ie.getAttribute("nonce")},Ne):B(Ie.textContent.replace(D,""),Ie,Ne))}return M}function O(M,Y,W){for(var X,re=Y?n.filter(Y,M):M,de=0;(X=re[de])!=null;de++)!W&&X.nodeType===1&&n.cleanData(f(X)),X.parentNode&&(W&&l(X)&&k(f(X,"script")),X.parentNode.removeChild(X));return M}return n.extend({htmlPrefilter:function(M){return M},clone:function(M,Y,W){var X,re,de,J,ke=M.cloneNode(!0),Ie=l(M);if(!A.noCloneChecked&&(M.nodeType===1||M.nodeType===11)&&!n.isXMLDoc(M))for(J=f(ke),de=f(M),X=0,re=de.length;X<re;X++)H(de[X],J[X]);if(Y)if(W)for(de=de||f(M),J=J||f(ke),X=0,re=de.length;X<re;X++)F(de[X],J[X]);else F(M,ke);return J=f(ke,"script"),J.length>0&&k(J,!Ie&&f(M,"script")),ke},cleanData:function(M){for(var Y,W,X,re=n.event.special,de=0;(W=M[de])!==void 0;de++)if(P(W)){if(Y=W[b.expando]){if(Y.events)for(X in Y.events)re[X]?n.event.remove(W,X):n.removeEvent(W,X,Y.handle);W[b.expando]=void 0}W[I.expando]&&(W[I.expando]=void 0)}}}),n.fn.extend({detach:function(M){return O(this,M,!0)},remove:function(M){return O(this,M)},text:function(M){return m(this,function(Y){return Y===void 0?n.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=Y)})},null,M,arguments.length)},append:function(){return x(this,arguments,function(M){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var Y=S(this,M);Y.appendChild(M)}})},prepend:function(){return x(this,arguments,function(M){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var Y=S(this,M);Y.insertBefore(M,Y.firstChild)}})},before:function(){return x(this,arguments,function(M){this.parentNode&&this.parentNode.insertBefore(M,this)})},after:function(){return x(this,arguments,function(M){this.parentNode&&this.parentNode.insertBefore(M,this.nextSibling)})},empty:function(){for(var M,Y=0;(M=this[Y])!=null;Y++)M.nodeType===1&&(n.cleanData(f(M,!1)),M.textContent="");return this},clone:function(M,Y){return M=M==null?!1:M,Y=Y==null?M:Y,this.map(function(){return n.clone(this,M,Y)})},html:function(M){return m(this,function(Y){var W=this[0]||{},X=0,re=this.length;if(Y===void 0&&W.nodeType===1)return W.innerHTML;if(typeof Y=="string"&&!K.test(Y)&&!c[(s.exec(Y)||["",""])[1].toLowerCase()]){Y=n.htmlPrefilter(Y);try{for(;X<re;X++)W=this[X]||{},W.nodeType===1&&(n.cleanData(f(W,!1)),W.innerHTML=Y);W=0}catch(de){}}W&&this.empty().append(Y)},null,M,arguments.length)},replaceWith:function(){var M=[];return x(this,arguments,function(Y){var W=this.parentNode;n.inArray(this,M)<0&&(n.cleanData(f(this)),W&&W.replaceChild(Y,this))},M)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(M,Y){n.fn[M]=function(W){for(var X,re=[],de=n(W),J=de.length-1,ke=0;ke<=J;ke++)X=ke===J?this:this.clone(!0),n(de[ke])[Y](X),r.apply(re,X.get());return this.pushStack(re)}}),n}.apply(h,u),t!==void 0&&(v.exports=t)},7556:(v,h,i)=>{var u,t;u=[i(1988)],t=function(n){"use strict";return n._evalUrl=function(l,g,o){return n.ajax({url:l,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(r){n.globalEval(r,g,o)}})},n._evalUrl}.apply(h,u),t!==void 0&&(v.exports=t)},4865:(v,h,i)=>{var u,t;u=[i(8732),i(192),i(2918),i(3956),i(7215),i(6929),i(6524),i(7896)],t=function(n,l,g,o,r,p,m,s){"use strict";var _=/<|&#?\w+;/;function c(f,k,y,A,b){for(var I,P,B,T,K,L,D=k.createDocumentFragment(),S=[],w=0,C=f.length;w<C;w++)if(I=f[w],I||I===0)if(l(I)==="object")n.merge(S,I.nodeType?[I]:I);else if(!_.test(I))S.push(k.createTextNode(I));else{for(P=P||D.appendChild(k.createElement("div")),B=(o.exec(I)||["",""])[1].toLowerCase(),T=p[B]||p._default,P.innerHTML=T[1]+n.htmlPrefilter(I)+T[2],L=T[0];L--;)P=P.lastChild;n.merge(S,P.childNodes),P=D.firstChild,P.textContent=""}for(D.textContent="",w=0;I=S[w++];){if(A&&n.inArray(I,A)>-1){b&&b.push(I);continue}if(K=g(I),P=m(D.appendChild(I),"script"),K&&s(P),y)for(L=0;I=P[L++];)r.test(I.type||"")&&y.push(I)}return D}return c}.apply(h,u),t!==void 0&&(v.exports=t)},6524:(v,h,i)=>{var u,t;u=[i(8732),i(5424)],t=function(n,l){"use strict";function g(o,r){var p;return typeof o.getElementsByTagName!="undefined"?p=o.getElementsByTagName(r||"*"):typeof o.querySelectorAll!="undefined"?p=o.querySelectorAll(r||"*"):p=[],r===void 0||r&&l(o,r)?n.merge([o],p):p}return g}.apply(h,u),t!==void 0&&(v.exports=t)},7896:(v,h,i)=>{var u,t;u=[i(674)],t=function(n){"use strict";function l(g,o){for(var r=0,p=g.length;r<p;r++)n.set(g[r],"globalEval",!o||n.get(o[r],"globalEval"))}return l}.apply(h,u),t!==void 0&&(v.exports=t)},7048:(v,h,i)=>{var u,t;u=[i(8217),i(7368)],t=function(n,l){"use strict";return function(){var g=n.createDocumentFragment(),o=g.appendChild(n.createElement("div")),r=n.createElement("input");r.setAttribute("type","radio"),r.setAttribute("checked","checked"),r.setAttribute("name","t"),o.appendChild(r),l.checkClone=o.cloneNode(!0).cloneNode(!0).lastChild.checked,o.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!o.cloneNode(!0).lastChild.defaultValue,o.innerHTML="<option></option>",l.option=!!o.lastChild}(),l}.apply(h,u),t!==void 0&&(v.exports=t)},7215:(v,h,i)=>{var u;u=function(){"use strict";return/^$|^module$|\/(?:java|ecma)script/i}.call(h,i,h,v),u!==void 0&&(v.exports=u)},3956:(v,h,i)=>{var u;u=function(){"use strict";return/<([a-z][^\/\0>\x20\t\r\n\f]*)/i}.call(h,i,h,v),u!==void 0&&(v.exports=u)},6929:(v,h,i)=>{var u,t;u=[i(7048)],t=function(n){"use strict";var l={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};return l.tbody=l.tfoot=l.colgroup=l.caption=l.thead,l.th=l.td,n.option||(l.optgroup=l.option=[1,"<select multiple='multiple'>","</select>"]),l}.apply(h,u),t!==void 0&&(v.exports=t)},5307:(v,h,i)=>{var u,t;u=[i(8732),i(40),i(2775),i(3675),i(8458),i(4618),i(4895),i(5642),i(2619),i(1288),i(5463),i(7027)],t=function(n,l,g,o,r,p,m,s,_){"use strict";return n.offset={setOffset:function(c,f,k){var y,A,b,I,P,B,T,K=n.css(c,"position"),L=n(c),D={};K==="static"&&(c.style.position="relative"),P=L.offset(),b=n.css(c,"top"),B=n.css(c,"left"),T=(K==="absolute"||K==="fixed")&&(b+B).indexOf("auto")>-1,T?(y=L.position(),I=y.top,A=y.left):(I=parseFloat(b)||0,A=parseFloat(B)||0),o(f)&&(f=f.call(c,k,n.extend({},P))),f.top!=null&&(D.top=f.top-P.top+I),f.left!=null&&(D.left=f.left-P.left+A),"using"in f?f.using.call(c,D):L.css(D)}},n.fn.extend({offset:function(c){if(arguments.length)return c===void 0?this:this.each(function(A){n.offset.setOffset(this,c,A)});var f,k,y=this[0];if(y)return y.getClientRects().length?(f=y.getBoundingClientRect(),k=y.ownerDocument.defaultView,{top:f.top+k.pageYOffset,left:f.left+k.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var c,f,k,y=this[0],A={top:0,left:0};if(n.css(y,"position")==="fixed")f=y.getBoundingClientRect();else{for(f=this.offset(),k=y.ownerDocument,c=y.offsetParent||k.documentElement;c&&(c===k.body||c===k.documentElement)&&n.css(c,"position")==="static";)c=c.parentNode;c&&c!==y&&c.nodeType===1&&(A=n(c).offset(),A.top+=n.css(c,"borderTopWidth",!0),A.left+=n.css(c,"borderLeftWidth",!0))}return{top:f.top-A.top-n.css(y,"marginTop",!0),left:f.left-A.left-n.css(y,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var c=this.offsetParent;c&&n.css(c,"position")==="static";)c=c.offsetParent;return c||g})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(c,f){var k=f==="pageYOffset";n.fn[c]=function(y){return l(this,function(A,b,I){var P;if(_(A)?P=A:A.nodeType===9&&(P=A.defaultView),I===void 0)return P?P[f]:A[b];P?P.scrollTo(k?P.pageXOffset:I,k?I:P.pageYOffset):A[b]=I},c,y,arguments.length)}}),n.each(["top","left"],function(c,f){n.cssHooks[f]=m(s.pixelPosition,function(k,y){if(y)return y=p(k,f),r.test(y)?n(k).position()[f]+"px":y})}),n}.apply(h,u),t!==void 0&&(v.exports=t)},1535:(v,h,i)=>{var u,t;u=[i(8732),i(674),i(3306),i(1046)],t=function(n,l){"use strict";return n.extend({queue:function(g,o,r){var p;if(g)return o=(o||"fx")+"queue",p=l.get(g,o),r&&(!p||Array.isArray(r)?p=l.access(g,o,n.makeArray(r)):p.push(r)),p||[]},dequeue:function(g,o){o=o||"fx";var r=n.queue(g,o),p=r.length,m=r.shift(),s=n._queueHooks(g,o),_=function(){n.dequeue(g,o)};m==="inprogress"&&(m=r.shift(),p--),m&&(o==="fx"&&r.unshift("inprogress"),delete s.stop,m.call(g,_,s)),!p&&s&&s.empty.fire()},_queueHooks:function(g,o){var r=o+"queueHooks";return l.get(g,r)||l.access(g,r,{empty:n.Callbacks("once memory").add(function(){l.remove(g,[o+"queue",r])})})}}),n.fn.extend({queue:function(g,o){var r=2;return typeof g!="string"&&(o=g,g="fx",r--),arguments.length<r?n.queue(this[0],g):o===void 0?this:this.each(function(){var p=n.queue(this,g,o);n._queueHooks(this,g),g==="fx"&&p[0]!=="inprogress"&&n.dequeue(this,g)})},dequeue:function(g){return this.each(function(){n.dequeue(this,g)})},clearQueue:function(g){return this.queue(g||"fx",[])},promise:function(g,o){var r,p=1,m=n.Deferred(),s=this,_=this.length,c=function(){--p||m.resolveWith(s,[s])};for(typeof g!="string"&&(o=g,g=void 0),g=g||"fx";_--;)r=l.get(s[_],g+"queueHooks"),r&&r.empty&&(p++,r.empty.add(c));return c(),m.promise(o)}}),n}.apply(h,u),t!==void 0&&(v.exports=t)},8414:(v,h,i)=>{var u,t;u=[i(8732),i(1535),i(2381)],t=function(n){"use strict";return n.fn.delay=function(l,g){return l=n.fx&&n.fx.speeds[l]||l,g=g||"fx",this.queue(g,function(o,r){var p=window.setTimeout(o,l);r.stop=function(){window.clearTimeout(p)}})},n.fn.delay}.apply(h,u),t!==void 0&&(v.exports=t)},7027:(v,h,i)=>{var u,t;u=[i(8732),i(5424),i(4552),i(8217),i(3113),i(3414),i(4328),i(3499),i(9837),i(6253),i(5013),i(2607),i(6724),i(7368),i(6446),i(756)],t=function(n,l,g,o,r,p,m,s,_,c,f,k,y,A){"use strict";var b=o,I=s;(function(){var P,B,T,K,L,D=I,S,w,C,F,H,x=n.expando,O=0,M=0,Y=_e(),W=_e(),X=_e(),re=_e(),de=function(U,q){return U===q&&(L=!0),0},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ke="(?:\\\\[\\da-fA-F]{1,6}"+k+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",Ie="\\["+k+"*("+ke+")(?:"+k+"*([*^$|!~]?=)"+k+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+ke+"))|)"+k+"*\\]",Ne=":("+ke+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Ie+")*)|.*)\\)|)",Ve=new RegExp(k+"+","g"),fa=new RegExp("^"+k+"*,"+k+"*"),ka=new RegExp("^"+k+"*([>+~]|"+k+")"+k+"*"),Ia=new RegExp(k+"|>"),Ea=new RegExp(Ne),fe=new RegExp("^"+ke+"$"),Te={ID:new RegExp("^#("+ke+")"),CLASS:new RegExp("^\\.("+ke+")"),TAG:new RegExp("^("+ke+"|[*])"),ATTR:new RegExp("^"+Ie),PSEUDO:new RegExp("^"+Ne),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+k+"*(even|odd|(([+-]|)(\\d*)n|)"+k+"*(?:([+-]|)"+k+"*(\\d+)|))"+k+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+k+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+k+"*((?:-\\d)?\\d*)"+k+"*\\)|)(?=[^-]|$)","i")},Ae=/^(?:input|select|textarea|button)$/i,Ke=/^h\d$/i,ca=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Wa=/[+~]/,aa=new RegExp("\\\\[\\da-fA-F]{1,6}"+k+"?|\\\\([^\\r\\n\\f])","g"),Re=function(U,q){var Q="0x"+U.slice(1)-65536;return q||(Q<0?String.fromCharCode(Q+65536):String.fromCharCode(Q>>10|55296,Q&1023|56320))},ge=function(){oa()},we=Sa(function(U){return U.disabled===!0&&l(U,"fieldset")},{dir:"parentNode",next:"legend"});function Se(){try{return S.activeElement}catch(U){}}try{D.apply(g=_.call(b.childNodes),b.childNodes),g[b.childNodes.length].nodeType}catch(U){D={apply:function(q,Q){I.apply(q,_.call(Q))},call:function(q){I.apply(q,_.call(arguments,1))}}}function V(U,q,Q,ee){var ie,ye,Pe,De,ve,ze,te,ne=q&&q.ownerDocument,pe=q?q.nodeType:9;if(Q=Q||[],typeof U!="string"||!U||pe!==1&&pe!==9&&pe!==11)return Q;if(!ee&&(oa(q),q=q||S,C)){if(pe!==11&&(ve=ca.exec(U)))if(ie=ve[1]){if(pe===9)if(Pe=q.getElementById(ie)){if(Pe.id===ie)return D.call(Q,Pe),Q}else return Q;else if(ne&&(Pe=ne.getElementById(ie))&&V.contains(q,Pe)&&Pe.id===ie)return D.call(Q,Pe),Q}else{if(ve[2])return D.apply(Q,q.getElementsByTagName(U)),Q;if((ie=ve[3])&&q.getElementsByClassName)return D.apply(Q,q.getElementsByClassName(ie)),Q}if(!re[U+" "]&&(!F||!F.test(U))){if(te=U,ne=q,pe===1&&(Ia.test(U)||ka.test(U))){for(ne=Wa.test(U)&&ea(q.parentNode)||q,(ne!=q||!A.scope)&&((De=q.getAttribute("id"))?De=n.escapeSelector(De):q.setAttribute("id",De=x)),ze=Ca(U),ye=ze.length;ye--;)ze[ye]=(De?"#"+De:":scope")+" "+xa(ze[ye]);te=ze.join(",")}try{return D.apply(Q,ne.querySelectorAll(te)),Q}catch(oe){re(U,!0)}finally{De===x&&q.removeAttribute("id")}}}return Mn(U.replace(y,"$1"),q,Q,ee)}function _e(){var U=[];function q(Q,ee){return U.push(Q+" ")>B.cacheLength&&delete q[U.shift()],q[Q+" "]=ee}return q}function ce(U){return U[x]=!0,U}function me(U){var q=S.createElement("fieldset");try{return!!U(q)}catch(Q){return!1}finally{q.parentNode&&q.parentNode.removeChild(q),q=null}}function je(U){return function(q){return l(q,"input")&&q.type===U}}function We(U){return function(q){return(l(q,"input")||l(q,"button"))&&q.type===U}}function Ue(U){return function(q){return"form"in q?q.parentNode&&q.disabled===!1?"label"in q?"label"in q.parentNode?q.parentNode.disabled===U:q.disabled===U:q.isDisabled===U||q.isDisabled!==!U&&we(q)===U:q.disabled===U:"label"in q?q.disabled===U:!1}}function $e(U){return ce(function(q){return q=+q,ce(function(Q,ee){for(var ie,ye=U([],Q.length,q),Pe=ye.length;Pe--;)Q[ie=ye[Pe]]&&(Q[ie]=!(ee[ie]=Q[ie]))})})}function ea(U){return U&&typeof U.getElementsByTagName!="undefined"&&U}function oa(U){var q,Q=U?U.ownerDocument||U:b;return Q==S||Q.nodeType!==9||!Q.documentElement||(S=Q,w=S.documentElement,C=!n.isXMLDoc(S),H=w.matches||w.webkitMatchesSelector||w.msMatchesSelector,w.msMatchesSelector&&b!=S&&(q=S.defaultView)&&q.top!==q&&q.addEventListener("unload",ge),A.getById=me(function(ee){return w.appendChild(ee).id=n.expando,!S.getElementsByName||!S.getElementsByName(n.expando).length}),A.disconnectedMatch=me(function(ee){return H.call(ee,"*")}),A.scope=me(function(){return S.querySelectorAll(":scope")}),A.cssHas=me(function(){try{return S.querySelector(":has(*,:jqfake)"),!1}catch(ee){return!0}}),A.getById?(B.filter.ID=function(ee){var ie=ee.replace(aa,Re);return function(ye){return ye.getAttribute("id")===ie}},B.find.ID=function(ee,ie){if(typeof ie.getElementById!="undefined"&&C){var ye=ie.getElementById(ee);return ye?[ye]:[]}}):(B.filter.ID=function(ee){var ie=ee.replace(aa,Re);return function(ye){var Pe=typeof ye.getAttributeNode!="undefined"&&ye.getAttributeNode("id");return Pe&&Pe.value===ie}},B.find.ID=function(ee,ie){if(typeof ie.getElementById!="undefined"&&C){var ye,Pe,De,ve=ie.getElementById(ee);if(ve){if(ye=ve.getAttributeNode("id"),ye&&ye.value===ee)return[ve];for(De=ie.getElementsByName(ee),Pe=0;ve=De[Pe++];)if(ye=ve.getAttributeNode("id"),ye&&ye.value===ee)return[ve]}return[]}}),B.find.TAG=function(ee,ie){return typeof ie.getElementsByTagName!="undefined"?ie.getElementsByTagName(ee):ie.querySelectorAll(ee)},B.find.CLASS=function(ee,ie){if(typeof ie.getElementsByClassName!="undefined"&&C)return ie.getElementsByClassName(ee)},F=[],me(function(ee){var ie;w.appendChild(ee).innerHTML="<a id='"+x+"' href='' disabled='disabled'></a><select id='"+x+"-\r\\' disabled='disabled'><option selected=''></option></select>",ee.querySelectorAll("[selected]").length||F.push("\\["+k+"*(?:value|"+J+")"),ee.querySelectorAll("[id~="+x+"-]").length||F.push("~="),ee.querySelectorAll("a#"+x+"+*").length||F.push(".#.+[+~]"),ee.querySelectorAll(":checked").length||F.push(":checked"),ie=S.createElement("input"),ie.setAttribute("type","hidden"),ee.appendChild(ie).setAttribute("name","D"),w.appendChild(ee).disabled=!0,ee.querySelectorAll(":disabled").length!==2&&F.push(":enabled",":disabled"),ie=S.createElement("input"),ie.setAttribute("name",""),ee.appendChild(ie),ee.querySelectorAll("[name='']").length||F.push("\\["+k+"*name"+k+"*="+k+`*(?:''|"")`)}),A.cssHas||F.push(":has"),F=F.length&&new RegExp(F.join("|")),de=function(ee,ie){if(ee===ie)return L=!0,0;var ye=!ee.compareDocumentPosition-!ie.compareDocumentPosition;return ye||(ye=(ee.ownerDocument||ee)==(ie.ownerDocument||ie)?ee.compareDocumentPosition(ie):1,ye&1||!A.sortDetached&&ie.compareDocumentPosition(ee)===ye?ee===S||ee.ownerDocument==b&&V.contains(b,ee)?-1:ie===S||ie.ownerDocument==b&&V.contains(b,ie)?1:K?r.call(K,ee)-r.call(K,ie):0:ye&4?-1:1)}),S}V.matches=function(U,q){return V(U,null,null,q)},V.matchesSelector=function(U,q){if(oa(U),C&&!re[q+" "]&&(!F||!F.test(q)))try{var Q=H.call(U,q);if(Q||A.disconnectedMatch||U.document&&U.document.nodeType!==11)return Q}catch(ee){re(q,!0)}return V(q,S,null,[U]).length>0},V.contains=function(U,q){return(U.ownerDocument||U)!=S&&oa(U),n.contains(U,q)},V.attr=function(U,q){(U.ownerDocument||U)!=S&&oa(U);var Q=B.attrHandle[q.toLowerCase()],ee=Q&&p.call(B.attrHandle,q.toLowerCase())?Q(U,q,!C):void 0;return ee!==void 0?ee:U.getAttribute(q)},V.error=function(U){throw new Error("Syntax error, unrecognized expression: "+U)},n.uniqueSort=function(U){var q,Q=[],ee=0,ie=0;if(L=!A.sortStable,K=!A.sortStable&&_.call(U,0),c.call(U,de),L){for(;q=U[ie++];)q===U[ie]&&(ee=Q.push(ie));for(;ee--;)f.call(U,Q[ee],1)}return K=null,U},n.fn.uniqueSort=function(){return this.pushStack(n.uniqueSort(_.apply(this)))},B=n.expr={cacheLength:50,createPseudo:ce,match:Te,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(U){return U[1]=U[1].replace(aa,Re),U[3]=(U[3]||U[4]||U[5]||"").replace(aa,Re),U[2]==="~="&&(U[3]=" "+U[3]+" "),U.slice(0,4)},CHILD:function(U){return U[1]=U[1].toLowerCase(),U[1].slice(0,3)==="nth"?(U[3]||V.error(U[0]),U[4]=+(U[4]?U[5]+(U[6]||1):2*(U[3]==="even"||U[3]==="odd")),U[5]=+(U[7]+U[8]||U[3]==="odd")):U[3]&&V.error(U[0]),U},PSEUDO:function(U){var q,Q=!U[6]&&U[2];return Te.CHILD.test(U[0])?null:(U[3]?U[2]=U[4]||U[5]||"":Q&&Ea.test(Q)&&(q=Ca(Q,!0))&&(q=Q.indexOf(")",Q.length-q)-Q.length)&&(U[0]=U[0].slice(0,q),U[2]=Q.slice(0,q)),U.slice(0,3))}},filter:{TAG:function(U){var q=U.replace(aa,Re).toLowerCase();return U==="*"?function(){return!0}:function(Q){return l(Q,q)}},CLASS:function(U){var q=Y[U+" "];return q||(q=new RegExp("(^|"+k+")"+U+"("+k+"|$)"))&&Y(U,function(Q){return q.test(typeof Q.className=="string"&&Q.className||typeof Q.getAttribute!="undefined"&&Q.getAttribute("class")||"")})},ATTR:function(U,q,Q){return function(ee){var ie=V.attr(ee,U);return ie==null?q==="!=":q?(ie+="",q==="="?ie===Q:q==="!="?ie!==Q:q==="^="?Q&&ie.indexOf(Q)===0:q==="*="?Q&&ie.indexOf(Q)>-1:q==="$="?Q&&ie.slice(-Q.length)===Q:q==="~="?(" "+ie.replace(Ve," ")+" ").indexOf(Q)>-1:q==="|="?ie===Q||ie.slice(0,Q.length+1)===Q+"-":!1):!0}},CHILD:function(U,q,Q,ee,ie){var ye=U.slice(0,3)!=="nth",Pe=U.slice(-4)!=="last",De=q==="of-type";return ee===1&&ie===0?function(ve){return!!ve.parentNode}:function(ve,ze,te){var ne,pe,oe,Be,Me,Le=ye!==Pe?"nextSibling":"previousSibling",pa=ve.parentNode,Na=De&&ve.nodeName.toLowerCase(),wa=!te&&!De,ma=!1;if(pa){if(ye){for(;Le;){for(oe=ve;oe=oe[Le];)if(De?l(oe,Na):oe.nodeType===1)return!1;Me=Le=U==="only"&&!Me&&"nextSibling"}return!0}if(Me=[Pe?pa.firstChild:pa.lastChild],Pe&&wa){for(pe=pa[x]||(pa[x]={}),ne=pe[U]||[],Be=ne[0]===O&&ne[1],ma=Be&&ne[2],oe=Be&&pa.childNodes[Be];oe=++Be&&oe&&oe[Le]||(ma=Be=0)||Me.pop();)if(oe.nodeType===1&&++ma&&oe===ve){pe[U]=[O,Be,ma];break}}else if(wa&&(pe=ve[x]||(ve[x]={}),ne=pe[U]||[],Be=ne[0]===O&&ne[1],ma=Be),ma===!1)for(;(oe=++Be&&oe&&oe[Le]||(ma=Be=0)||Me.pop())&&!((De?l(oe,Na):oe.nodeType===1)&&++ma&&(wa&&(pe=oe[x]||(oe[x]={}),pe[U]=[O,ma]),oe===ve)););return ma-=ie,ma===ee||ma%ee===0&&ma/ee>=0}}},PSEUDO:function(U,q){var Q,ee=B.pseudos[U]||B.setFilters[U.toLowerCase()]||V.error("unsupported pseudo: "+U);return ee[x]?ee(q):ee.length>1?(Q=[U,U,"",q],B.setFilters.hasOwnProperty(U.toLowerCase())?ce(function(ie,ye){for(var Pe,De=ee(ie,q),ve=De.length;ve--;)Pe=r.call(ie,De[ve]),ie[Pe]=!(ye[Pe]=De[ve])}):function(ie){return ee(ie,0,Q)}):ee}},pseudos:{not:ce(function(U){var q=[],Q=[],ee=Aa(U.replace(y,"$1"));return ee[x]?ce(function(ie,ye,Pe,De){for(var ve,ze=ee(ie,null,De,[]),te=ie.length;te--;)(ve=ze[te])&&(ie[te]=!(ye[te]=ve))}):function(ie,ye,Pe){return q[0]=ie,ee(q,null,Pe,Q),q[0]=null,!Q.pop()}}),has:ce(function(U){return function(q){return V(U,q).length>0}}),contains:ce(function(U){return U=U.replace(aa,Re),function(q){return(q.textContent||n.text(q)).indexOf(U)>-1}}),lang:ce(function(U){return fe.test(U||"")||V.error("unsupported lang: "+U),U=U.replace(aa,Re).toLowerCase(),function(q){var Q;do if(Q=C?q.lang:q.getAttribute("xml:lang")||q.getAttribute("lang"))return Q=Q.toLowerCase(),Q===U||Q.indexOf(U+"-")===0;while((q=q.parentNode)&&q.nodeType===1);return!1}}),target:function(U){var q=window.location&&window.location.hash;return q&&q.slice(1)===U.id},root:function(U){return U===w},focus:function(U){return U===Se()&&S.hasFocus()&&!!(U.type||U.href||~U.tabIndex)},enabled:Ue(!1),disabled:Ue(!0),checked:function(U){return l(U,"input")&&!!U.checked||l(U,"option")&&!!U.selected},selected:function(U){return U.parentNode&&U.parentNode.selectedIndex,U.selected===!0},empty:function(U){for(U=U.firstChild;U;U=U.nextSibling)if(U.nodeType<6)return!1;return!0},parent:function(U){return!B.pseudos.empty(U)},header:function(U){return Ke.test(U.nodeName)},input:function(U){return Ae.test(U.nodeName)},button:function(U){return l(U,"input")&&U.type==="button"||l(U,"button")},text:function(U){var q;return l(U,"input")&&U.type==="text"&&((q=U.getAttribute("type"))==null||q.toLowerCase()==="text")},first:$e(function(){return[0]}),last:$e(function(U,q){return[q-1]}),eq:$e(function(U,q,Q){return[Q<0?Q+q:Q]}),even:$e(function(U,q){for(var Q=0;Q<q;Q+=2)U.push(Q);return U}),odd:$e(function(U,q){for(var Q=1;Q<q;Q+=2)U.push(Q);return U}),lt:$e(function(U,q,Q){var ee;for(Q<0?ee=Q+q:Q>q?ee=q:ee=Q;--ee>=0;)U.push(ee);return U}),gt:$e(function(U,q,Q){for(var ee=Q<0?Q+q:Q;++ee<q;)U.push(ee);return U})}},B.pseudos.nth=B.pseudos.eq;for(P in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})B.pseudos[P]=je(P);for(P in{submit:!0,reset:!0})B.pseudos[P]=We(P);function ha(){}ha.prototype=B.filters=B.pseudos,B.setFilters=new ha;function Ca(U,q){var Q,ee,ie,ye,Pe,De,ve,ze=W[U+" "];if(ze)return q?0:ze.slice(0);for(Pe=U,De=[],ve=B.preFilter;Pe;){(!Q||(ee=fa.exec(Pe)))&&(ee&&(Pe=Pe.slice(ee[0].length)||Pe),De.push(ie=[])),Q=!1,(ee=ka.exec(Pe))&&(Q=ee.shift(),ie.push({value:Q,type:ee[0].replace(y," ")}),Pe=Pe.slice(Q.length));for(ye in B.filter)(ee=Te[ye].exec(Pe))&&(!ve[ye]||(ee=ve[ye](ee)))&&(Q=ee.shift(),ie.push({value:Q,type:ye,matches:ee}),Pe=Pe.slice(Q.length));if(!Q)break}return q?Pe.length:Pe?V.error(U):W(U,De).slice(0)}function xa(U){for(var q=0,Q=U.length,ee="";q<Q;q++)ee+=U[q].value;return ee}function Sa(U,q,Q){var ee=q.dir,ie=q.next,ye=ie||ee,Pe=Q&&ye==="parentNode",De=M++;return q.first?function(ve,ze,te){for(;ve=ve[ee];)if(ve.nodeType===1||Pe)return U(ve,ze,te);return!1}:function(ve,ze,te){var ne,pe,oe=[O,De];if(te){for(;ve=ve[ee];)if((ve.nodeType===1||Pe)&&U(ve,ze,te))return!0}else for(;ve=ve[ee];)if(ve.nodeType===1||Pe)if(pe=ve[x]||(ve[x]={}),ie&&l(ve,ie))ve=ve[ee]||ve;else{if((ne=pe[ye])&&ne[0]===O&&ne[1]===De)return oe[2]=ne[2];if(pe[ye]=oe,oe[2]=U(ve,ze,te))return!0}return!1}}function fn(U){return U.length>1?function(q,Q,ee){for(var ie=U.length;ie--;)if(!U[ie](q,Q,ee))return!1;return!0}:U[0]}function gn(U,q,Q){for(var ee=0,ie=q.length;ee<ie;ee++)V(U,q[ee],Q);return Q}function Sn(U,q,Q,ee,ie){for(var ye,Pe=[],De=0,ve=U.length,ze=q!=null;De<ve;De++)(ye=U[De])&&(!Q||Q(ye,ee,ie))&&(Pe.push(ye),ze&&q.push(De));return Pe}function jn(U,q,Q,ee,ie,ye){return ee&&!ee[x]&&(ee=jn(ee)),ie&&!ie[x]&&(ie=jn(ie,ye)),ce(function(Pe,De,ve,ze){var te,ne,pe,oe,Be=[],Me=[],Le=De.length,pa=Pe||gn(q||"*",ve.nodeType?[ve]:ve,[]),Na=U&&(Pe||!q)?Sn(pa,Be,U,ve,ze):pa;if(Q?(oe=ie||(Pe?U:Le||ee)?[]:De,Q(Na,oe,ve,ze)):oe=Na,ee)for(te=Sn(oe,Me),ee(te,[],ve,ze),ne=te.length;ne--;)(pe=te[ne])&&(oe[Me[ne]]=!(Na[Me[ne]]=pe));if(Pe){if(ie||U){if(ie){for(te=[],ne=oe.length;ne--;)(pe=oe[ne])&&te.push(Na[ne]=pe);ie(null,oe=[],te,ze)}for(ne=oe.length;ne--;)(pe=oe[ne])&&(te=ie?r.call(Pe,pe):Be[ne])>-1&&(Pe[te]=!(De[te]=pe))}}else oe=Sn(oe===De?oe.splice(Le,oe.length):oe),ie?ie(null,De,oe,ze):D.apply(De,oe)})}function Ma(U){for(var q,Q,ee,ie=U.length,ye=B.relative[U[0].type],Pe=ye||B.relative[" "],De=ye?1:0,ve=Sa(function(ne){return ne===q},Pe,!0),ze=Sa(function(ne){return r.call(q,ne)>-1},Pe,!0),te=[function(ne,pe,oe){var Be=!ye&&(oe||pe!=T)||((q=pe).nodeType?ve(ne,pe,oe):ze(ne,pe,oe));return q=null,Be}];De<ie;De++)if(Q=B.relative[U[De].type])te=[Sa(fn(te),Q)];else{if(Q=B.filter[U[De].type].apply(null,U[De].matches),Q[x]){for(ee=++De;ee<ie&&!B.relative[U[ee].type];ee++);return jn(De>1&&fn(te),De>1&&xa(U.slice(0,De-1).concat({value:U[De-2].type===" "?"*":""})).replace(y,"$1"),Q,De<ee&&Ma(U.slice(De,ee)),ee<ie&&Ma(U=U.slice(ee)),ee<ie&&xa(U))}te.push(Q)}return fn(te)}function Cn(U,q){var Q=q.length>0,ee=U.length>0,ie=function(ye,Pe,De,ve,ze){var te,ne,pe,oe=0,Be="0",Me=ye&&[],Le=[],pa=T,Na=ye||ee&&B.find.TAG("*",ze),wa=O+=pa==null?1:Math.random()||.1,ma=Na.length;for(ze&&(T=Pe==S||Pe||ze);Be!==ma&&(te=Na[Be])!=null;Be++){if(ee&&te){for(ne=0,!Pe&&te.ownerDocument!=S&&(oa(te),De=!C);pe=U[ne++];)if(pe(te,Pe||S,De)){D.call(ve,te);break}ze&&(O=wa)}Q&&((te=!pe&&te)&&oe--,ye&&Me.push(te))}if(oe+=Be,Q&&Be!==oe){for(ne=0;pe=q[ne++];)pe(Me,Le,Pe,De);if(ye){if(oe>0)for(;Be--;)Me[Be]||Le[Be]||(Le[Be]=m.call(ve));Le=Sn(Le)}D.apply(ve,Le),ze&&!ye&&Le.length>0&&oe+q.length>1&&n.uniqueSort(ve)}return ze&&(O=wa,T=pa),Me};return Q?ce(ie):ie}function Aa(U,q){var Q,ee=[],ie=[],ye=X[U+" "];if(!ye){for(q||(q=Ca(U)),Q=q.length;Q--;)ye=Ma(q[Q]),ye[x]?ee.push(ye):ie.push(ye);ye=X(U,Cn(ie,ee)),ye.selector=U}return ye}function Mn(U,q,Q,ee){var ie,ye,Pe,De,ve,ze=typeof U=="function"&&U,te=!ee&&Ca(U=ze.selector||U);if(Q=Q||[],te.length===1){if(ye=te[0]=te[0].slice(0),ye.length>2&&(Pe=ye[0]).type==="ID"&&q.nodeType===9&&C&&B.relative[ye[1].type]){if(q=(B.find.ID(Pe.matches[0].replace(aa,Re),q)||[])[0],q)ze&&(q=q.parentNode);else return Q;U=U.slice(ye.shift().value.length)}for(ie=Te.needsContext.test(U)?0:ye.length;ie--&&(Pe=ye[ie],!B.relative[De=Pe.type]);)if((ve=B.find[De])&&(ee=ve(Pe.matches[0].replace(aa,Re),Wa.test(ye[0].type)&&ea(q.parentNode)||q))){if(ye.splice(ie,1),U=ee.length&&xa(ye),!U)return D.apply(Q,ee),Q;break}}return(ze||Aa(U,te))(ee,q,!C,Q,!q||Wa.test(U)&&ea(q.parentNode)||q),Q}A.sortStable=x.split("").sort(de).join("")===x,oa(),A.sortDetached=me(function(U){return U.compareDocumentPosition(S.createElement("fieldset"))&1}),n.find=V,n.expr[":"]=n.expr.pseudos,n.unique=n.uniqueSort,V.compile=Aa,V.select=Mn,V.setDocument=oa,V.tokenize=Ca,V.escape=n.escapeSelector,V.getText=n.text,V.isXML=n.isXMLDoc,V.selectors=n.expr,V.support=n.support,V.uniqueSort=n.uniqueSort})()}.apply(h,u),t!==void 0&&(v.exports=t)},6446:(v,h,i)=>{var u,t;u=[i(8732)],t=function(n){"use strict";n.contains=function(l,g){var o=g&&g.parentNode;return l===o||!!(o&&o.nodeType===1&&(l.contains?l.contains(o):l.compareDocumentPosition&&l.compareDocumentPosition(o)&16))}}.apply(h,u),t!==void 0&&(v.exports=t)},756:(v,h,i)=>{var u,t;u=[i(8732)],t=function(n){"use strict";var l=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function g(o,r){return r?o==="\0"?"\uFFFD":o.slice(0,-1)+"\\"+o.charCodeAt(o.length-1).toString(16)+" ":"\\"+o}n.escapeSelector=function(o){return(o+"").replace(l,g)}}.apply(h,u),t!==void 0&&(v.exports=t)},8125:(v,h,i)=>{var u,t;u=[i(8732),i(192),i(2304),i(3675),i(1288),i(9310),i(693)],t=function(n,l,g,o){"use strict";var r=/\[\]$/,p=/\r?\n/g,m=/^(?:submit|button|image|reset|file)$/i,s=/^(?:input|select|textarea|keygen)/i;function _(c,f,k,y){var A;if(Array.isArray(f))n.each(f,function(b,I){k||r.test(c)?y(c,I):_(c+"["+(typeof I=="object"&&I!=null?b:"")+"]",I,k,y)});else if(!k&&l(f)==="object")for(A in f)_(c+"["+A+"]",f[A],k,y);else y(c,f)}return n.param=function(c,f){var k,y=[],A=function(b,I){var P=o(I)?I():I;y[y.length]=encodeURIComponent(b)+"="+encodeURIComponent(P==null?"":P)};if(c==null)return"";if(Array.isArray(c)||c.jquery&&!n.isPlainObject(c))n.each(c,function(){A(this.name,this.value)});else for(k in c)_(k,c[k],f,A);return y.join("&")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var c=n.prop(this,"elements");return c?n.makeArray(c):this}).filter(function(){var c=this.type;return this.name&&!n(this).is(":disabled")&&s.test(this.nodeName)&&!m.test(c)&&(this.checked||!g.test(c))}).map(function(c,f){var k=n(this).val();return k==null?null:Array.isArray(k)?n.map(k,function(y){return{name:f.name,value:y.replace(p,`\r
`)}}):{name:f.name,value:k.replace(p,`\r
`)}}).get()}}),n}.apply(h,u),t!==void 0&&(v.exports=t)},9310:(v,h,i)=>{var u,t;u=[i(8732),i(5676),i(3113),i(9045),i(7348),i(4069),i(5424),i(1288),i(2338),i(7027)],t=function(n,l,g,o,r,p,m){"use strict";var s=/^(?:parents|prev(?:Until|All))/,_={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(f){var k=n(f,this),y=k.length;return this.filter(function(){for(var A=0;A<y;A++)if(n.contains(this,k[A]))return!0})},closest:function(f,k){var y,A=0,b=this.length,I=[],P=typeof f!="string"&&n(f);if(!p.test(f)){for(;A<b;A++)for(y=this[A];y&&y!==k;y=y.parentNode)if(y.nodeType<11&&(P?P.index(y)>-1:y.nodeType===1&&n.find.matchesSelector(y,f))){I.push(y);break}}return this.pushStack(I.length>1?n.uniqueSort(I):I)},index:function(f){return f?typeof f=="string"?g.call(n(f),this[0]):g.call(this,f.jquery?f[0]:f):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(f,k){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(f,k))))},addBack:function(f){return this.add(f==null?this.prevObject:this.prevObject.filter(f))}});function c(f,k){for(;(f=f[k])&&f.nodeType!==1;);return f}return n.each({parent:function(f){var k=f.parentNode;return k&&k.nodeType!==11?k:null},parents:function(f){return o(f,"parentNode")},parentsUntil:function(f,k,y){return o(f,"parentNode",y)},next:function(f){return c(f,"nextSibling")},prev:function(f){return c(f,"previousSibling")},nextAll:function(f){return o(f,"nextSibling")},prevAll:function(f){return o(f,"previousSibling")},nextUntil:function(f,k,y){return o(f,"nextSibling",y)},prevUntil:function(f,k,y){return o(f,"previousSibling",y)},siblings:function(f){return r((f.parentNode||{}).firstChild,f)},children:function(f){return r(f.firstChild)},contents:function(f){return f.contentDocument!=null&&l(f.contentDocument)?f.contentDocument:(m(f,"template")&&(f=f.content||f),n.merge([],f.childNodes))}},function(f,k){n.fn[f]=function(y,A){var b=n.map(this,k,y);return f.slice(-5)!=="Until"&&(A=y),A&&typeof A=="string"&&(b=n.filter(A,b)),this.length>1&&(_[f]||n.uniqueSort(b),s.test(f)&&b.reverse()),this.pushStack(b)}}),n}.apply(h,u),t!==void 0&&(v.exports=t)},2338:(v,h,i)=>{var u,t;u=[i(8732),i(3113),i(3675),i(4069),i(7027)],t=function(n,l,g,o){"use strict";function r(p,m,s){return g(m)?n.grep(p,function(_,c){return!!m.call(_,c,_)!==s}):m.nodeType?n.grep(p,function(_){return _===m!==s}):typeof m!="string"?n.grep(p,function(_){return l.call(m,_)>-1!==s}):n.filter(m,p,s)}n.filter=function(p,m,s){var _=m[0];return s&&(p=":not("+p+")"),m.length===1&&_.nodeType===1?n.find.matchesSelector(_,p)?[_]:[]:n.find.matches(p,n.grep(m,function(c){return c.nodeType===1}))},n.fn.extend({find:function(p){var m,s,_=this.length,c=this;if(typeof p!="string")return this.pushStack(n(p).filter(function(){for(m=0;m<_;m++)if(n.contains(c[m],this))return!0}));for(s=this.pushStack([]),m=0;m<_;m++)n.find(p,c[m],s);return _>1?n.uniqueSort(s):s},filter:function(p){return this.pushStack(r(this,p||[],!1))},not:function(p){return this.pushStack(r(this,p||[],!0))},is:function(p){return!!r(this,typeof p=="string"&&o.test(p)?n(p):p||[],!1).length}})}.apply(h,u),t!==void 0&&(v.exports=t)},9045:(v,h,i)=>{var u,t;u=[i(8732)],t=function(n){"use strict";return function(l,g,o){for(var r=[],p=o!==void 0;(l=l[g])&&l.nodeType!==9;)if(l.nodeType===1){if(p&&n(l).is(o))break;r.push(l)}return r}}.apply(h,u),t!==void 0&&(v.exports=t)},4069:(v,h,i)=>{var u,t;u=[i(8732),i(7027)],t=function(n){"use strict";return n.expr.match.needsContext}.apply(h,u),t!==void 0&&(v.exports=t)},7348:(v,h,i)=>{var u;u=function(){"use strict";return function(t,n){for(var l=[];t;t=t.nextSibling)t.nodeType===1&&t!==n&&l.push(t);return l}}.call(h,i,h,v),u!==void 0&&(v.exports=u)},2299:(v,h,i)=>{var u,t;u=[i(5851)],t=function(n){"use strict";return n.call(Object)}.apply(h,u),t!==void 0&&(v.exports=t)},4552:(v,h,i)=>{var u;u=function(){"use strict";return[]}.call(h,i,h,v),u!==void 0&&(v.exports=u)},8310:(v,h,i)=>{var u;u=function(){"use strict";return{}}.call(h,i,h,v),u!==void 0&&(v.exports=u)},8217:(v,h,i)=>{var u;u=function(){"use strict";return window.document}.call(h,i,h,v),u!==void 0&&(v.exports=u)},2775:(v,h,i)=>{var u,t;u=[i(8217)],t=function(n){"use strict";return n.documentElement}.apply(h,u),t!==void 0&&(v.exports=t)},2049:(v,h,i)=>{var u,t;u=[i(4552)],t=function(n){"use strict";return n.flat?function(l){return n.flat.call(l)}:function(l){return n.concat.apply([],l)}}.apply(h,u),t!==void 0&&(v.exports=t)},5851:(v,h,i)=>{var u,t;u=[i(3414)],t=function(n){"use strict";return n.toString}.apply(h,u),t!==void 0&&(v.exports=t)},5676:(v,h,i)=>{var u;u=function(){"use strict";return Object.getPrototypeOf}.call(h,i,h,v),u!==void 0&&(v.exports=u)},3414:(v,h,i)=>{var u,t;u=[i(8310)],t=function(n){"use strict";return n.hasOwnProperty}.apply(h,u),t!==void 0&&(v.exports=t)},3113:(v,h,i)=>{var u,t;u=[i(4552)],t=function(n){"use strict";return n.indexOf}.apply(h,u),t!==void 0&&(v.exports=t)},3675:(v,h,i)=>{var u;u=function(){"use strict";return function(n){return typeof n=="function"&&typeof n.nodeType!="number"&&typeof n.item!="function"}}.call(h,i,h,v),u!==void 0&&(v.exports=u)},2619:(v,h,i)=>{var u;u=function(){"use strict";return function(n){return n!=null&&n===n.window}}.call(h,i,h,v),u!==void 0&&(v.exports=u)},4785:(v,h,i)=>{var u;u=function(){"use strict";return/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source}.call(h,i,h,v),u!==void 0&&(v.exports=u)},4328:(v,h,i)=>{var u,t;u=[i(4552)],t=function(n){"use strict";return n.pop}.apply(h,u),t!==void 0&&(v.exports=t)},3499:(v,h,i)=>{var u,t;u=[i(4552)],t=function(n){"use strict";return n.push}.apply(h,u),t!==void 0&&(v.exports=t)},2304:(v,h,i)=>{var u;u=function(){"use strict";return/^(?:checkbox|radio)$/i}.call(h,i,h,v),u!==void 0&&(v.exports=u)},1986:(v,h,i)=>{var u,t;u=[i(4785)],t=function(n){"use strict";return new RegExp("^(?:([+-])=|)("+n+")([a-z%]*)$","i")}.apply(h,u),t!==void 0&&(v.exports=t)},4055:(v,h,i)=>{var u;u=function(){"use strict";return/[^\x20\t\r\n\f]+/g}.call(h,i,h,v),u!==void 0&&(v.exports=u)},6724:(v,h,i)=>{var u,t;u=[i(2607)],t=function(n){"use strict";return new RegExp("^"+n+"+|((?:^|[^\\\\])(?:\\\\.)*)"+n+"+$","g")}.apply(h,u),t!==void 0&&(v.exports=t)},9837:(v,h,i)=>{var u,t;u=[i(4552)],t=function(n){"use strict";return n.slice}.apply(h,u),t!==void 0&&(v.exports=t)},6253:(v,h,i)=>{var u,t;u=[i(4552)],t=function(n){"use strict";return n.sort}.apply(h,u),t!==void 0&&(v.exports=t)},5013:(v,h,i)=>{var u,t;u=[i(4552)],t=function(n){"use strict";return n.splice}.apply(h,u),t!==void 0&&(v.exports=t)},7368:(v,h,i)=>{var u;u=function(){"use strict";return{}}.call(h,i,h,v),u!==void 0&&(v.exports=u)},8524:(v,h,i)=>{var u,t;u=[i(8310)],t=function(n){"use strict";return n.toString}.apply(h,u),t!==void 0&&(v.exports=t)},2607:(v,h,i)=>{var u;u=function(){"use strict";return"[\\x20\\t\\r\\n\\f]"}.call(h,i,h,v),u!==void 0&&(v.exports=u)},5046:(v,h,i)=>{var u,t;u=[i(8732),i(3675),i(1288),i(1923),i(9310)],t=function(n,l){"use strict";return n.fn.extend({wrapAll:function(g){var o;return this[0]&&(l(g)&&(g=g.call(this[0])),o=n(g,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&o.insertBefore(this[0]),o.map(function(){for(var r=this;r.firstElementChild;)r=r.firstElementChild;return r}).append(this)),this},wrapInner:function(g){return l(g)?this.each(function(o){n(this).wrapInner(g.call(this,o))}):this.each(function(){var o=n(this),r=o.contents();r.length?r.wrapAll(g):o.append(g)})},wrap:function(g){var o=l(g);return this.each(function(r){n(this).wrapAll(o?g.call(this,r):g)})},unwrap:function(g){return this.parent(g).not("body").each(function(){n(this).replaceWith(this.childNodes)}),this}}),n}.apply(h,u),t!==void 0&&(v.exports=t)},5702:function(v,h,i){v=i.nmd(v);var u;/**
* @license
* Lodash <https://lodash.com/>
* Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
* Released under MIT license <https://lodash.com/license>
* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
*/(function(){var t,n="4.17.21",l=200,g="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",o="Expected a function",r="Invalid `variable` option passed into `_.template`",p="__lodash_hash_undefined__",m=500,s="__lodash_placeholder__",_=1,c=2,f=4,k=1,y=2,A=1,b=2,I=4,P=8,B=16,T=32,K=64,L=128,D=256,S=512,w=30,C="...",F=800,H=16,x=1,O=2,M=3,Y=1/0,W=9007199254740991,X=17976931348623157e292,re=0/0,de=4294967295,J=de-1,ke=de>>>1,Ie=[["ary",L],["bind",A],["bindKey",b],["curry",P],["curryRight",B],["flip",S],["partial",T],["partialRight",K],["rearg",D]],Ne="[object Arguments]",Ve="[object Array]",fa="[object AsyncFunction]",ka="[object Boolean]",Ia="[object Date]",Ea="[object DOMException]",fe="[object Error]",Te="[object Function]",Ae="[object GeneratorFunction]",Ke="[object Map]",ca="[object Number]",Wa="[object Null]",aa="[object Object]",Re="[object Promise]",ge="[object Proxy]",we="[object RegExp]",Se="[object Set]",V="[object String]",_e="[object Symbol]",ce="[object Undefined]",me="[object WeakMap]",je="[object WeakSet]",We="[object ArrayBuffer]",Ue="[object DataView]",$e="[object Float32Array]",ea="[object Float64Array]",oa="[object Int8Array]",ha="[object Int16Array]",Ca="[object Int32Array]",xa="[object Uint8Array]",Sa="[object Uint8ClampedArray]",fn="[object Uint16Array]",gn="[object Uint32Array]",Sn=/\b__p \+= '';/g,jn=/\b(__p \+=) '' \+/g,Ma=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Cn=/&(?:amp|lt|gt|quot|#39);/g,Aa=/[&<>"']/g,Mn=RegExp(Cn.source),U=RegExp(Aa.source),q=/<%-([\s\S]+?)%>/g,Q=/<%([\s\S]+?)%>/g,ee=/<%=([\s\S]+?)%>/g,ie=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ye=/^\w*$/,Pe=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,De=/[\\^$.*+?()[\]{}|]/g,ve=RegExp(De.source),ze=/^\s+/,te=/\s/,ne=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,pe=/\{\n\/\* \[wrapped with (.+)\] \*/,oe=/,? & /,Be=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Me=/[()=,{}\[\]\/\s]/,Le=/\\(\\)?/g,pa=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Na=/\w*$/,wa=/^[-+]0x[0-9a-f]+$/i,ma=/^0b[01]+$/i,ia=/^\[object .+?Constructor\]$/,na=/^0o[0-7]+$/i,fr=/^(?:0|[1-9]\d*)$/,Pi=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ot=/($^)/,qn=/['\n\r\u2028\u2029\\]/g,vt="\\ud800-\\udfff",Xo="\\u0300-\\u036f",Qo="\\ufe20-\\ufe2f",ep="\\u20d0-\\u20ff",vi=Xo+Qo+ep,bi="\\u2700-\\u27bf",Si="a-z\\xdf-\\xf6\\xf8-\\xff",ap="\\xac\\xb1\\xd7\\xf7",np="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",tp="\\u2000-\\u206f",rp=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Bi="A-Z\\xc0-\\xd6\\xd8-\\xde",Ti="\\ufe0e\\ufe0f",Ei=ap+np+tp+rp,gr="['\u2019]",ip="["+vt+"]",Di="["+Ei+"]",bt="["+vi+"]",wi="\\d+",sp="["+bi+"]",Li="["+Si+"]",Ri="[^"+vt+Ei+wi+bi+Si+Bi+"]",cr="\\ud83c[\\udffb-\\udfff]",op="(?:"+bt+"|"+cr+")",xi="[^"+vt+"]",hr="(?:\\ud83c[\\udde6-\\uddff]){2}",mr="[\\ud800-\\udbff][\\udc00-\\udfff]",Gn="["+Bi+"]",Ki="\\u200d",ji="(?:"+Li+"|"+Ri+")",pp="(?:"+Gn+"|"+Ri+")",Ci="(?:"+gr+"(?:d|ll|m|re|s|t|ve))?",Mi="(?:"+gr+"(?:D|LL|M|RE|S|T|VE))?",Oi=op+"?",Fi="["+Ti+"]?",lp="(?:"+Ki+"(?:"+[xi,hr,mr].join("|")+")"+Fi+Oi+")*",dp="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",up="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ui=Fi+Oi+lp,fp="(?:"+[sp,hr,mr].join("|")+")"+Ui,gp="(?:"+[xi+bt+"?",bt,hr,mr,ip].join("|")+")",cp=RegExp(gr,"g"),hp=RegExp(bt,"g"),_r=RegExp(cr+"(?="+cr+")|"+gp+Ui,"g"),mp=RegExp([Gn+"?"+Li+"+"+Ci+"(?="+[Di,Gn,"$"].join("|")+")",pp+"+"+Mi+"(?="+[Di,Gn+ji,"$"].join("|")+")",Gn+"?"+ji+"+"+Ci,Gn+"+"+Mi,up,dp,wi,fp].join("|"),"g"),_p=RegExp("["+Ki+vt+vi+Ti+"]"),yp=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,kp=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Ip=-1,ga={};ga[$e]=ga[ea]=ga[oa]=ga[ha]=ga[Ca]=ga[xa]=ga[Sa]=ga[fn]=ga[gn]=!0,ga[Ne]=ga[Ve]=ga[We]=ga[ka]=ga[Ue]=ga[Ia]=ga[fe]=ga[Te]=ga[Ke]=ga[ca]=ga[aa]=ga[we]=ga[Se]=ga[V]=ga[me]=!1;var ua={};ua[Ne]=ua[Ve]=ua[We]=ua[Ue]=ua[ka]=ua[Ia]=ua[$e]=ua[ea]=ua[oa]=ua[ha]=ua[Ca]=ua[Ke]=ua[ca]=ua[aa]=ua[we]=ua[Se]=ua[V]=ua[_e]=ua[xa]=ua[Sa]=ua[fn]=ua[gn]=!0,ua[fe]=ua[Te]=ua[me]=!1;var Ap={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Np={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Pp={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},vp={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},bp=parseFloat,Sp=parseInt,Wi=typeof i.g=="object"&&i.g&&i.g.Object===Object&&i.g,Bp=typeof self=="object"&&self&&self.Object===Object&&self,La=Wi||Bp||Function("return this")(),zi=h&&!h.nodeType&&h,pt=zi&&!0&&v&&!v.nodeType&&v,Hi=pt&&pt.exports===zi,yr=Hi&&Wi.process,Qa=function(){try{var G=pt&&pt.require&&pt.require("util").types;return G||yr&&yr.binding&&yr.binding("util")}catch(se){}}(),Yi=Qa&&Qa.isArrayBuffer,$i=Qa&&Qa.isDate,qi=Qa&&Qa.isMap,Gi=Qa&&Qa.isRegExp,Zi=Qa&&Qa.isSet,Ji=Qa&&Qa.isTypedArray;function qa(G,se,ae){switch(ae.length){case 0:return G.call(se);case 1:return G.call(se,ae[0]);case 2:return G.call(se,ae[0],ae[1]);case 3:return G.call(se,ae[0],ae[1],ae[2])}return G.apply(se,ae)}function Tp(G,se,ae,Ee){for(var He=-1,ra=G==null?0:G.length;++He<ra;){var Ba=G[He];se(Ee,Ba,ae(Ba),G)}return Ee}function en(G,se){for(var ae=-1,Ee=G==null?0:G.length;++ae<Ee&&se(G[ae],ae,G)!==!1;);return G}function Ep(G,se){for(var ae=G==null?0:G.length;ae--&&se(G[ae],ae,G)!==!1;);return G}function Vi(G,se){for(var ae=-1,Ee=G==null?0:G.length;++ae<Ee;)if(!se(G[ae],ae,G))return!1;return!0}function Bn(G,se){for(var ae=-1,Ee=G==null?0:G.length,He=0,ra=[];++ae<Ee;){var Ba=G[ae];se(Ba,ae,G)&&(ra[He++]=Ba)}return ra}function St(G,se){var ae=G==null?0:G.length;return!!ae&&Zn(G,se,0)>-1}function kr(G,se,ae){for(var Ee=-1,He=G==null?0:G.length;++Ee<He;)if(ae(se,G[Ee]))return!0;return!1}function _a(G,se){for(var ae=-1,Ee=G==null?0:G.length,He=Array(Ee);++ae<Ee;)He[ae]=se(G[ae],ae,G);return He}function Tn(G,se){for(var ae=-1,Ee=se.length,He=G.length;++ae<Ee;)G[He+ae]=se[ae];return G}function Ir(G,se,ae,Ee){var He=-1,ra=G==null?0:G.length;for(Ee&&ra&&(ae=G[++He]);++He<ra;)ae=se(ae,G[He],He,G);return ae}function Dp(G,se,ae,Ee){var He=G==null?0:G.length;for(Ee&&He&&(ae=G[--He]);He--;)ae=se(ae,G[He],He,G);return ae}function Ar(G,se){for(var ae=-1,Ee=G==null?0:G.length;++ae<Ee;)if(se(G[ae],ae,G))return!0;return!1}var wp=Nr("length");function Lp(G){return G.split("")}function Rp(G){return G.match(Be)||[]}function Xi(G,se,ae){var Ee;return ae(G,function(He,ra,Ba){if(se(He,ra,Ba))return Ee=ra,!1}),Ee}function Bt(G,se,ae,Ee){for(var He=G.length,ra=ae+(Ee?1:-1);Ee?ra--:++ra<He;)if(se(G[ra],ra,G))return ra;return-1}function Zn(G,se,ae){return se===se?Yp(G,se,ae):Bt(G,Qi,ae)}function xp(G,se,ae,Ee){for(var He=ae-1,ra=G.length;++He<ra;)if(Ee(G[He],se))return He;return-1}function Qi(G){return G!==G}function es(G,se){var ae=G==null?0:G.length;return ae?vr(G,se)/ae:re}function Nr(G){return function(se){return se==null?t:se[G]}}function Pr(G){return function(se){return G==null?t:G[se]}}function as(G,se,ae,Ee,He){return He(G,function(ra,Ba,da){ae=Ee?(Ee=!1,ra):se(ae,ra,Ba,da)}),ae}function Kp(G,se){var ae=G.length;for(G.sort(se);ae--;)G[ae]=G[ae].value;return G}function vr(G,se){for(var ae,Ee=-1,He=G.length;++Ee<He;){var ra=se(G[Ee]);ra!==t&&(ae=ae===t?ra:ae+ra)}return ae}function br(G,se){for(var ae=-1,Ee=Array(G);++ae<G;)Ee[ae]=se(ae);return Ee}function jp(G,se){return _a(se,function(ae){return[ae,G[ae]]})}function ns(G){return G&&G.slice(0,ss(G)+1).replace(ze,"")}function Ga(G){return function(se){return G(se)}}function Sr(G,se){return _a(se,function(ae){return G[ae]})}function lt(G,se){return G.has(se)}function ts(G,se){for(var ae=-1,Ee=G.length;++ae<Ee&&Zn(se,G[ae],0)>-1;);return ae}function rs(G,se){for(var ae=G.length;ae--&&Zn(se,G[ae],0)>-1;);return ae}function Cp(G,se){for(var ae=G.length,Ee=0;ae--;)G[ae]===se&&++Ee;return Ee}var Mp=Pr(Ap),Op=Pr(Np);function Fp(G){return"\\"+vp[G]}function Up(G,se){return G==null?t:G[se]}function Jn(G){return _p.test(G)}function Wp(G){return yp.test(G)}function zp(G){for(var se,ae=[];!(se=G.next()).done;)ae.push(se.value);return ae}function Br(G){var se=-1,ae=Array(G.size);return G.forEach(function(Ee,He){ae[++se]=[He,Ee]}),ae}function is(G,se){return function(ae){return G(se(ae))}}function En(G,se){for(var ae=-1,Ee=G.length,He=0,ra=[];++ae<Ee;){var Ba=G[ae];(Ba===se||Ba===s)&&(G[ae]=s,ra[He++]=ae)}return ra}function Tt(G){var se=-1,ae=Array(G.size);return G.forEach(function(Ee){ae[++se]=Ee}),ae}function Hp(G){var se=-1,ae=Array(G.size);return G.forEach(function(Ee){ae[++se]=[Ee,Ee]}),ae}function Yp(G,se,ae){for(var Ee=ae-1,He=G.length;++Ee<He;)if(G[Ee]===se)return Ee;return-1}function $p(G,se,ae){for(var Ee=ae+1;Ee--;)if(G[Ee]===se)return Ee;return Ee}function Vn(G){return Jn(G)?Gp(G):wp(G)}function pn(G){return Jn(G)?Zp(G):Lp(G)}function ss(G){for(var se=G.length;se--&&te.test(G.charAt(se)););return se}var qp=Pr(Pp);function Gp(G){for(var se=_r.lastIndex=0;_r.test(G);)++se;return se}function Zp(G){return G.match(_r)||[]}function Jp(G){return G.match(mp)||[]}var Vp=function G(se){se=se==null?La:Et.defaults(La.Object(),se,Et.pick(La,kp));var ae=se.Array,Ee=se.Date,He=se.Error,ra=se.Function,Ba=se.Math,da=se.Object,Tr=se.RegExp,Xp=se.String,an=se.TypeError,Dt=ae.prototype,Qp=ra.prototype,Xn=da.prototype,wt=se["__core-js_shared__"],Lt=Qp.toString,la=Xn.hasOwnProperty,el=0,os=function(){var e=/[^.]+$/.exec(wt&&wt.keys&&wt.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Rt=Xn.toString,al=Lt.call(da),nl=La._,tl=Tr("^"+Lt.call(la).replace(De,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),xt=Hi?se.Buffer:t,Dn=se.Symbol,Kt=se.Uint8Array,ps=xt?xt.allocUnsafe:t,jt=is(da.getPrototypeOf,da),ls=da.create,ds=Xn.propertyIsEnumerable,Ct=Dt.splice,us=Dn?Dn.isConcatSpreadable:t,dt=Dn?Dn.iterator:t,On=Dn?Dn.toStringTag:t,Mt=function(){try{var e=Hn(da,"defineProperty");return e({},"",{}),e}catch(a){}}(),rl=se.clearTimeout!==La.clearTimeout&&se.clearTimeout,il=Ee&&Ee.now!==La.Date.now&&Ee.now,sl=se.setTimeout!==La.setTimeout&&se.setTimeout,Ot=Ba.ceil,Ft=Ba.floor,Er=da.getOwnPropertySymbols,ol=xt?xt.isBuffer:t,fs=se.isFinite,pl=Dt.join,ll=is(da.keys,da),Ta=Ba.max,Ka=Ba.min,dl=Ee.now,ul=se.parseInt,gs=Ba.random,fl=Dt.reverse,Dr=Hn(se,"DataView"),ut=Hn(se,"Map"),wr=Hn(se,"Promise"),Qn=Hn(se,"Set"),ft=Hn(se,"WeakMap"),gt=Hn(da,"create"),Ut=ft&&new ft,et={},gl=Yn(Dr),cl=Yn(ut),hl=Yn(wr),ml=Yn(Qn),_l=Yn(ft),Wt=Dn?Dn.prototype:t,ct=Wt?Wt.valueOf:t,cs=Wt?Wt.toString:t;function R(e){if(Pa(e)&&!Ye(e)&&!(e instanceof Xe)){if(e instanceof nn)return e;if(la.call(e,"__wrapped__"))return mo(e)}return new nn(e)}var at=function(){function e(){}return function(a){if(!ya(a))return{};if(ls)return ls(a);e.prototype=a;var d=new e;return e.prototype=t,d}}();function zt(){}function nn(e,a){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!a,this.__index__=0,this.__values__=t}R.templateSettings={escape:q,evaluate:Q,interpolate:ee,variable:"",imports:{_:R}},R.prototype=zt.prototype,R.prototype.constructor=R,nn.prototype=at(zt.prototype),nn.prototype.constructor=nn;function Xe(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=de,this.__views__=[]}function yl(){var e=new Xe(this.__wrapped__);return e.__actions__=za(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=za(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=za(this.__views__),e}function kl(){if(this.__filtered__){var e=new Xe(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function Il(){var e=this.__wrapped__.value(),a=this.__dir__,d=Ye(e),N=a<0,E=d?e.length:0,j=Ld(0,E,this.__views__),z=j.start,$=j.end,Z=$-z,le=N?$:z-1,ue=this.__iteratees__,he=ue.length,be=0,xe=Ka(Z,this.__takeCount__);if(!d||!N&&E==Z&&xe==Z)return Ms(e,this.__actions__);var Oe=[];e:for(;Z--&&be<xe;){le+=a;for(var Ge=-1,Fe=e[le];++Ge<he;){var Je=ue[Ge],Qe=Je.iteratee,Va=Je.type,Ua=Qe(Fe);if(Va==O)Fe=Ua;else if(!Ua){if(Va==x)continue e;break e}}Oe[be++]=Fe}return Oe}Xe.prototype=at(zt.prototype),Xe.prototype.constructor=Xe;function Fn(e){var a=-1,d=e==null?0:e.length;for(this.clear();++a<d;){var N=e[a];this.set(N[0],N[1])}}function Al(){this.__data__=gt?gt(null):{},this.size=0}function Nl(e){var a=this.has(e)&&delete this.__data__[e];return this.size-=a?1:0,a}function Pl(e){var a=this.__data__;if(gt){var d=a[e];return d===p?t:d}return la.call(a,e)?a[e]:t}function vl(e){var a=this.__data__;return gt?a[e]!==t:la.call(a,e)}function bl(e,a){var d=this.__data__;return this.size+=this.has(e)?0:1,d[e]=gt&&a===t?p:a,this}Fn.prototype.clear=Al,Fn.prototype.delete=Nl,Fn.prototype.get=Pl,Fn.prototype.has=vl,Fn.prototype.set=bl;function _n(e){var a=-1,d=e==null?0:e.length;for(this.clear();++a<d;){var N=e[a];this.set(N[0],N[1])}}function Sl(){this.__data__=[],this.size=0}function Bl(e){var a=this.__data__,d=Ht(a,e);if(d<0)return!1;var N=a.length-1;return d==N?a.pop():Ct.call(a,d,1),--this.size,!0}function Tl(e){var a=this.__data__,d=Ht(a,e);return d<0?t:a[d][1]}function El(e){return Ht(this.__data__,e)>-1}function Dl(e,a){var d=this.__data__,N=Ht(d,e);return N<0?(++this.size,d.push([e,a])):d[N][1]=a,this}_n.prototype.clear=Sl,_n.prototype.delete=Bl,_n.prototype.get=Tl,_n.prototype.has=El,_n.prototype.set=Dl;function yn(e){var a=-1,d=e==null?0:e.length;for(this.clear();++a<d;){var N=e[a];this.set(N[0],N[1])}}function wl(){this.size=0,this.__data__={hash:new Fn,map:new(ut||_n),string:new Fn}}function Ll(e){var a=nr(this,e).delete(e);return this.size-=a?1:0,a}function Rl(e){return nr(this,e).get(e)}function xl(e){return nr(this,e).has(e)}function Kl(e,a){var d=nr(this,e),N=d.size;return d.set(e,a),this.size+=d.size==N?0:1,this}yn.prototype.clear=wl,yn.prototype.delete=Ll,yn.prototype.get=Rl,yn.prototype.has=xl,yn.prototype.set=Kl;function Un(e){var a=-1,d=e==null?0:e.length;for(this.__data__=new yn;++a<d;)this.add(e[a])}function jl(e){return this.__data__.set(e,p),this}function Cl(e){return this.__data__.has(e)}Un.prototype.add=Un.prototype.push=jl,Un.prototype.has=Cl;function ln(e){var a=this.__data__=new _n(e);this.size=a.size}function Ml(){this.__data__=new _n,this.size=0}function Ol(e){var a=this.__data__,d=a.delete(e);return this.size=a.size,d}function Fl(e){return this.__data__.get(e)}function Ul(e){return this.__data__.has(e)}function Wl(e,a){var d=this.__data__;if(d instanceof _n){var N=d.__data__;if(!ut||N.length<l-1)return N.push([e,a]),this.size=++d.size,this;d=this.__data__=new yn(N)}return d.set(e,a),this.size=d.size,this}ln.prototype.clear=Ml,ln.prototype.delete=Ol,ln.prototype.get=Fl,ln.prototype.has=Ul,ln.prototype.set=Wl;function hs(e,a){var d=Ye(e),N=!d&&$n(e),E=!d&&!N&&Kn(e),j=!d&&!N&&!E&&it(e),z=d||N||E||j,$=z?br(e.length,Xp):[],Z=$.length;for(var le in e)(a||la.call(e,le))&&!(z&&(le=="length"||E&&(le=="offset"||le=="parent")||j&&(le=="buffer"||le=="byteLength"||le=="byteOffset")||Nn(le,Z)))&&$.push(le);return $}function ms(e){var a=e.length;return a?e[Wr(0,a-1)]:t}function zl(e,a){return tr(za(e),Wn(a,0,e.length))}function Hl(e){return tr(za(e))}function Lr(e,a,d){(d!==t&&!dn(e[a],d)||d===t&&!(a in e))&&kn(e,a,d)}function ht(e,a,d){var N=e[a];(!(la.call(e,a)&&dn(N,d))||d===t&&!(a in e))&&kn(e,a,d)}function Ht(e,a){for(var d=e.length;d--;)if(dn(e[d][0],a))return d;return-1}function Yl(e,a,d,N){return wn(e,function(E,j,z){a(N,E,d(E),z)}),N}function _s(e,a){return e&&hn(a,Da(a),e)}function $l(e,a){return e&&hn(a,Ya(a),e)}function kn(e,a,d){a=="__proto__"&&Mt?Mt(e,a,{configurable:!0,enumerable:!0,value:d,writable:!0}):e[a]=d}function Rr(e,a){for(var d=-1,N=a.length,E=ae(N),j=e==null;++d<N;)E[d]=j?t:gi(e,a[d]);return E}function Wn(e,a,d){return e===e&&(d!==t&&(e=e<=d?e:d),a!==t&&(e=e>=a?e:a)),e}function tn(e,a,d,N,E,j){var z,$=a&_,Z=a&c,le=a&f;if(d&&(z=E?d(e,N,E,j):d(e)),z!==t)return z;if(!ya(e))return e;var ue=Ye(e);if(ue){if(z=xd(e),!$)return za(e,z)}else{var he=ja(e),be=he==Te||he==Ae;if(Kn(e))return Us(e,$);if(he==aa||he==Ne||be&&!E){if(z=Z||be?{}:so(e),!$)return Z?Pd(e,$l(z,e)):Nd(e,_s(z,e))}else{if(!ua[he])return E?e:{};z=Kd(e,he,$)}}j||(j=new ln);var xe=j.get(e);if(xe)return xe;j.set(e,z),jo(e)?e.forEach(function(Fe){z.add(tn(Fe,a,d,Fe,e,j))}):xo(e)&&e.forEach(function(Fe,Je){z.set(Je,tn(Fe,a,d,Je,e,j))});var Oe=le?Z?Qr:Xr:Z?Ya:Da,Ge=ue?t:Oe(e);return en(Ge||e,function(Fe,Je){Ge&&(Je=Fe,Fe=e[Je]),ht(z,Je,tn(Fe,a,d,Je,e,j))}),z}function ql(e){var a=Da(e);return function(d){return ys(d,e,a)}}function ys(e,a,d){var N=d.length;if(e==null)return!N;for(e=da(e);N--;){var E=d[N],j=a[E],z=e[E];if(z===t&&!(E in e)||!j(z))return!1}return!0}function ks(e,a,d){if(typeof e!="function")throw new an(o);return Nt(function(){e.apply(t,d)},a)}function mt(e,a,d,N){var E=-1,j=St,z=!0,$=e.length,Z=[],le=a.length;if(!$)return Z;d&&(a=_a(a,Ga(d))),N?(j=kr,z=!1):a.length>=l&&(j=lt,z=!1,a=new Un(a));e:for(;++E<$;){var ue=e[E],he=d==null?ue:d(ue);if(ue=N||ue!==0?ue:0,z&&he===he){for(var be=le;be--;)if(a[be]===he)continue e;Z.push(ue)}else j(a,he,N)||Z.push(ue)}return Z}var wn=$s(cn),Is=$s(Kr,!0);function Gl(e,a){var d=!0;return wn(e,function(N,E,j){return d=!!a(N,E,j),d}),d}function Yt(e,a,d){for(var N=-1,E=e.length;++N<E;){var j=e[N],z=a(j);if(z!=null&&($===t?z===z&&!Ja(z):d(z,$)))var $=z,Z=j}return Z}function Zl(e,a,d,N){var E=e.length;for(d=qe(d),d<0&&(d=-d>E?0:E+d),N=N===t||N>E?E:qe(N),N<0&&(N+=E),N=d>N?0:Mo(N);d<N;)e[d++]=a;return e}function As(e,a){var d=[];return wn(e,function(N,E,j){a(N,E,j)&&d.push(N)}),d}function Ra(e,a,d,N,E){var j=-1,z=e.length;for(d||(d=Cd),E||(E=[]);++j<z;){var $=e[j];a>0&&d($)?a>1?Ra($,a-1,d,N,E):Tn(E,$):N||(E[E.length]=$)}return E}var xr=qs(),Ns=qs(!0);function cn(e,a){return e&&xr(e,a,Da)}function Kr(e,a){return e&&Ns(e,a,Da)}function $t(e,a){return Bn(a,function(d){return Pn(e[d])})}function zn(e,a){a=Rn(a,e);for(var d=0,N=a.length;e!=null&&d<N;)e=e[mn(a[d++])];return d&&d==N?e:t}function Ps(e,a,d){var N=a(e);return Ye(e)?N:Tn(N,d(e))}function Oa(e){return e==null?e===t?ce:Wa:On&&On in da(e)?wd(e):Hd(e)}function jr(e,a){return e>a}function Jl(e,a){return e!=null&&la.call(e,a)}function Vl(e,a){return e!=null&&a in da(e)}function Xl(e,a,d){return e>=Ka(a,d)&&e<Ta(a,d)}function Cr(e,a,d){for(var N=d?kr:St,E=e[0].length,j=e.length,z=j,$=ae(j),Z=1/0,le=[];z--;){var ue=e[z];z&&a&&(ue=_a(ue,Ga(a))),Z=Ka(ue.length,Z),$[z]=!d&&(a||E>=120&&ue.length>=120)?new Un(z&&ue):t}ue=e[0];var he=-1,be=$[0];e:for(;++he<E&&le.length<Z;){var xe=ue[he],Oe=a?a(xe):xe;if(xe=d||xe!==0?xe:0,!(be?lt(be,Oe):N(le,Oe,d))){for(z=j;--z;){var Ge=$[z];if(!(Ge?lt(Ge,Oe):N(e[z],Oe,d)))continue e}be&&be.push(Oe),le.push(xe)}}return le}function Ql(e,a,d,N){return cn(e,function(E,j,z){a(N,d(E),j,z)}),N}function _t(e,a,d){a=Rn(a,e),e=uo(e,a);var N=e==null?e:e[mn(sn(a))];return N==null?t:qa(N,e,d)}function vs(e){return Pa(e)&&Oa(e)==Ne}function ed(e){return Pa(e)&&Oa(e)==We}function ad(e){return Pa(e)&&Oa(e)==Ia}function yt(e,a,d,N,E){return e===a?!0:e==null||a==null||!Pa(e)&&!Pa(a)?e!==e&&a!==a:nd(e,a,d,N,yt,E)}function nd(e,a,d,N,E,j){var z=Ye(e),$=Ye(a),Z=z?Ve:ja(e),le=$?Ve:ja(a);Z=Z==Ne?aa:Z,le=le==Ne?aa:le;var ue=Z==aa,he=le==aa,be=Z==le;if(be&&Kn(e)){if(!Kn(a))return!1;z=!0,ue=!1}if(be&&!ue)return j||(j=new ln),z||it(e)?to(e,a,d,N,E,j):Ed(e,a,Z,d,N,E,j);if(!(d&k)){var xe=ue&&la.call(e,"__wrapped__"),Oe=he&&la.call(a,"__wrapped__");if(xe||Oe){var Ge=xe?e.value():e,Fe=Oe?a.value():a;return j||(j=new ln),E(Ge,Fe,d,N,j)}}return be?(j||(j=new ln),Dd(e,a,d,N,E,j)):!1}function td(e){return Pa(e)&&ja(e)==Ke}function Mr(e,a,d,N){var E=d.length,j=E,z=!N;if(e==null)return!j;for(e=da(e);E--;){var $=d[E];if(z&&$[2]?$[1]!==e[$[0]]:!($[0]in e))return!1}for(;++E<j;){$=d[E];var Z=$[0],le=e[Z],ue=$[1];if(z&&$[2]){if(le===t&&!(Z in e))return!1}else{var he=new ln;if(N)var be=N(le,ue,Z,e,a,he);if(!(be===t?yt(ue,le,k|y,N,he):be))return!1}}return!0}function bs(e){if(!ya(e)||Od(e))return!1;var a=Pn(e)?tl:ia;return a.test(Yn(e))}function rd(e){return Pa(e)&&Oa(e)==we}function id(e){return Pa(e)&&ja(e)==Se}function sd(e){return Pa(e)&&lr(e.length)&&!!ga[Oa(e)]}function Ss(e){return typeof e=="function"?e:e==null?$a:typeof e=="object"?Ye(e)?Es(e[0],e[1]):Ts(e):Zo(e)}function Or(e){if(!At(e))return ll(e);var a=[];for(var d in da(e))la.call(e,d)&&d!="constructor"&&a.push(d);return a}function od(e){if(!ya(e))return zd(e);var a=At(e),d=[];for(var N in e)N=="constructor"&&(a||!la.call(e,N))||d.push(N);return d}function Fr(e,a){return e<a}function Bs(e,a){var d=-1,N=Ha(e)?ae(e.length):[];return wn(e,function(E,j,z){N[++d]=a(E,j,z)}),N}function Ts(e){var a=ai(e);return a.length==1&&a[0][2]?po(a[0][0],a[0][1]):function(d){return d===e||Mr(d,e,a)}}function Es(e,a){return ti(e)&&oo(a)?po(mn(e),a):function(d){var N=gi(d,e);return N===t&&N===a?ci(d,e):yt(a,N,k|y)}}function qt(e,a,d,N,E){e!==a&&xr(a,function(j,z){if(E||(E=new ln),ya(j))pd(e,a,z,d,qt,N,E);else{var $=N?N(ii(e,z),j,z+"",e,a,E):t;$===t&&($=j),Lr(e,z,$)}},Ya)}function pd(e,a,d,N,E,j,z){var $=ii(e,d),Z=ii(a,d),le=z.get(Z);if(le){Lr(e,d,le);return}var ue=j?j($,Z,d+"",e,a,z):t,he=ue===t;if(he){var be=Ye(Z),xe=!be&&Kn(Z),Oe=!be&&!xe&&it(Z);ue=Z,be||xe||Oe?Ye($)?ue=$:va($)?ue=za($):xe?(he=!1,ue=Us(Z,!0)):Oe?(he=!1,ue=Ws(Z,!0)):ue=[]:Pt(Z)||$n(Z)?(ue=$,$n($)?ue=Oo($):(!ya($)||Pn($))&&(ue=so(Z))):he=!1}he&&(z.set(Z,ue),E(ue,Z,N,j,z),z.delete(Z)),Lr(e,d,ue)}function Ds(e,a){var d=e.length;if(d)return a+=a<0?d:0,Nn(a,d)?e[a]:t}function ws(e,a,d){a.length?a=_a(a,function(j){return Ye(j)?function(z){return zn(z,j.length===1?j[0]:j)}:j}):a=[$a];var N=-1;a=_a(a,Ga(Ce()));var E=Bs(e,function(j,z,$){var Z=_a(a,function(le){return le(j)});return{criteria:Z,index:++N,value:j}});return Kp(E,function(j,z){return Ad(j,z,d)})}function ld(e,a){return Ls(e,a,function(d,N){return ci(e,N)})}function Ls(e,a,d){for(var N=-1,E=a.length,j={};++N<E;){var z=a[N],$=zn(e,z);d($,z)&&kt(j,Rn(z,e),$)}return j}function dd(e){return function(a){return zn(a,e)}}function Ur(e,a,d,N){var E=N?xp:Zn,j=-1,z=a.length,$=e;for(e===a&&(a=za(a)),d&&($=_a(e,Ga(d)));++j<z;)for(var Z=0,le=a[j],ue=d?d(le):le;(Z=E($,ue,Z,N))>-1;)$!==e&&Ct.call($,Z,1),Ct.call(e,Z,1);return e}function Rs(e,a){for(var d=e?a.length:0,N=d-1;d--;){var E=a[d];if(d==N||E!==j){var j=E;Nn(E)?Ct.call(e,E,1):Yr(e,E)}}return e}function Wr(e,a){return e+Ft(gs()*(a-e+1))}function ud(e,a,d,N){for(var E=-1,j=Ta(Ot((a-e)/(d||1)),0),z=ae(j);j--;)z[N?j:++E]=e,e+=d;return z}function zr(e,a){var d="";if(!e||a<1||a>W)return d;do a%2&&(d+=e),a=Ft(a/2),a&&(e+=e);while(a);return d}function Ze(e,a){return si(lo(e,a,$a),e+"")}function fd(e){return ms(st(e))}function gd(e,a){var d=st(e);return tr(d,Wn(a,0,d.length))}function kt(e,a,d,N){if(!ya(e))return e;a=Rn(a,e);for(var E=-1,j=a.length,z=j-1,$=e;$!=null&&++E<j;){var Z=mn(a[E]),le=d;if(Z==="__proto__"||Z==="constructor"||Z==="prototype")return e;if(E!=z){var ue=$[Z];le=N?N(ue,Z,$):t,le===t&&(le=ya(ue)?ue:Nn(a[E+1])?[]:{})}ht($,Z,le),$=$[Z]}return e}var xs=Ut?function(e,a){return Ut.set(e,a),e}:$a,cd=Mt?function(e,a){return Mt(e,"toString",{configurable:!0,enumerable:!1,value:mi(a),writable:!0})}:$a;function hd(e){return tr(st(e))}function rn(e,a,d){var N=-1,E=e.length;a<0&&(a=-a>E?0:E+a),d=d>E?E:d,d<0&&(d+=E),E=a>d?0:d-a>>>0,a>>>=0;for(var j=ae(E);++N<E;)j[N]=e[N+a];return j}function md(e,a){var d;return wn(e,function(N,E,j){return d=a(N,E,j),!d}),!!d}function Gt(e,a,d){var N=0,E=e==null?N:e.length;if(typeof a=="number"&&a===a&&E<=ke){for(;N<E;){var j=N+E>>>1,z=e[j];z!==null&&!Ja(z)&&(d?z<=a:z<a)?N=j+1:E=j}return E}return Hr(e,a,$a,d)}function Hr(e,a,d,N){var E=0,j=e==null?0:e.length;if(j===0)return 0;a=d(a);for(var z=a!==a,$=a===null,Z=Ja(a),le=a===t;E<j;){var ue=Ft((E+j)/2),he=d(e[ue]),be=he!==t,xe=he===null,Oe=he===he,Ge=Ja(he);if(z)var Fe=N||Oe;else le?Fe=Oe&&(N||be):$?Fe=Oe&&be&&(N||!xe):Z?Fe=Oe&&be&&!xe&&(N||!Ge):xe||Ge?Fe=!1:Fe=N?he<=a:he<a;Fe?E=ue+1:j=ue}return Ka(j,J)}function Ks(e,a){for(var d=-1,N=e.length,E=0,j=[];++d<N;){var z=e[d],$=a?a(z):z;if(!d||!dn($,Z)){var Z=$;j[E++]=z===0?0:z}}return j}function js(e){return typeof e=="number"?e:Ja(e)?re:+e}function Za(e){if(typeof e=="string")return e;if(Ye(e))return _a(e,Za)+"";if(Ja(e))return cs?cs.call(e):"";var a=e+"";return a=="0"&&1/e==-Y?"-0":a}function Ln(e,a,d){var N=-1,E=St,j=e.length,z=!0,$=[],Z=$;if(d)z=!1,E=kr;else if(j>=l){var le=a?null:Bd(e);if(le)return Tt(le);z=!1,E=lt,Z=new Un}else Z=a?[]:$;e:for(;++N<j;){var ue=e[N],he=a?a(ue):ue;if(ue=d||ue!==0?ue:0,z&&he===he){for(var be=Z.length;be--;)if(Z[be]===he)continue e;a&&Z.push(he),$.push(ue)}else E(Z,he,d)||(Z!==$&&Z.push(he),$.push(ue))}return $}function Yr(e,a){return a=Rn(a,e),e=uo(e,a),e==null||delete e[mn(sn(a))]}function Cs(e,a,d,N){return kt(e,a,d(zn(e,a)),N)}function Zt(e,a,d,N){for(var E=e.length,j=N?E:-1;(N?j--:++j<E)&&a(e[j],j,e););return d?rn(e,N?0:j,N?j+1:E):rn(e,N?j+1:0,N?E:j)}function Ms(e,a){var d=e;return d instanceof Xe&&(d=d.value()),Ir(a,function(N,E){return E.func.apply(E.thisArg,Tn([N],E.args))},d)}function $r(e,a,d){var N=e.length;if(N<2)return N?Ln(e[0]):[];for(var E=-1,j=ae(N);++E<N;)for(var z=e[E],$=-1;++$<N;)$!=E&&(j[E]=mt(j[E]||z,e[$],a,d));return Ln(Ra(j,1),a,d)}function Os(e,a,d){for(var N=-1,E=e.length,j=a.length,z={};++N<E;){var $=N<j?a[N]:t;d(z,e[N],$)}return z}function qr(e){return va(e)?e:[]}function Gr(e){return typeof e=="function"?e:$a}function Rn(e,a){return Ye(e)?e:ti(e,a)?[e]:ho(sa(e))}var _d=Ze;function xn(e,a,d){var N=e.length;return d=d===t?N:d,!a&&d>=N?e:rn(e,a,d)}var Fs=rl||function(e){return La.clearTimeout(e)};function Us(e,a){if(a)return e.slice();var d=e.length,N=ps?ps(d):new e.constructor(d);return e.copy(N),N}function Zr(e){var a=new e.constructor(e.byteLength);return new Kt(a).set(new Kt(e)),a}function yd(e,a){var d=a?Zr(e.buffer):e.buffer;return new e.constructor(d,e.byteOffset,e.byteLength)}function kd(e){var a=new e.constructor(e.source,Na.exec(e));return a.lastIndex=e.lastIndex,a}function Id(e){return ct?da(ct.call(e)):{}}function Ws(e,a){var d=a?Zr(e.buffer):e.buffer;return new e.constructor(d,e.byteOffset,e.length)}function zs(e,a){if(e!==a){var d=e!==t,N=e===null,E=e===e,j=Ja(e),z=a!==t,$=a===null,Z=a===a,le=Ja(a);if(!$&&!le&&!j&&e>a||j&&z&&Z&&!$&&!le||N&&z&&Z||!d&&Z||!E)return 1;if(!N&&!j&&!le&&e<a||le&&d&&E&&!N&&!j||$&&d&&E||!z&&E||!Z)return-1}return 0}function Ad(e,a,d){for(var N=-1,E=e.criteria,j=a.criteria,z=E.length,$=d.length;++N<z;){var Z=zs(E[N],j[N]);if(Z){if(N>=$)return Z;var le=d[N];return Z*(le=="desc"?-1:1)}}return e.index-a.index}function Hs(e,a,d,N){for(var E=-1,j=e.length,z=d.length,$=-1,Z=a.length,le=Ta(j-z,0),ue=ae(Z+le),he=!N;++$<Z;)ue[$]=a[$];for(;++E<z;)(he||E<j)&&(ue[d[E]]=e[E]);for(;le--;)ue[$++]=e[E++];return ue}function Ys(e,a,d,N){for(var E=-1,j=e.length,z=-1,$=d.length,Z=-1,le=a.length,ue=Ta(j-$,0),he=ae(ue+le),be=!N;++E<ue;)he[E]=e[E];for(var xe=E;++Z<le;)he[xe+Z]=a[Z];for(;++z<$;)(be||E<j)&&(he[xe+d[z]]=e[E++]);return he}function za(e,a){var d=-1,N=e.length;for(a||(a=ae(N));++d<N;)a[d]=e[d];return a}function hn(e,a,d,N){var E=!d;d||(d={});for(var j=-1,z=a.length;++j<z;){var $=a[j],Z=N?N(d[$],e[$],$,d,e):t;Z===t&&(Z=e[$]),E?kn(d,$,Z):ht(d,$,Z)}return d}function Nd(e,a){return hn(e,ni(e),a)}function Pd(e,a){return hn(e,ro(e),a)}function Jt(e,a){return function(d,N){var E=Ye(d)?Tp:Yl,j=a?a():{};return E(d,e,Ce(N,2),j)}}function nt(e){return Ze(function(a,d){var N=-1,E=d.length,j=E>1?d[E-1]:t,z=E>2?d[2]:t;for(j=e.length>3&&typeof j=="function"?(E--,j):t,z&&Fa(d[0],d[1],z)&&(j=E<3?t:j,E=1),a=da(a);++N<E;){var $=d[N];$&&e(a,$,N,j)}return a})}function $s(e,a){return function(d,N){if(d==null)return d;if(!Ha(d))return e(d,N);for(var E=d.length,j=a?E:-1,z=da(d);(a?j--:++j<E)&&N(z[j],j,z)!==!1;);return d}}function qs(e){return function(a,d,N){for(var E=-1,j=da(a),z=N(a),$=z.length;$--;){var Z=z[e?$:++E];if(d(j[Z],Z,j)===!1)break}return a}}function vd(e,a,d){var N=a&A,E=It(e);function j(){var z=this&&this!==La&&this instanceof j?E:e;return z.apply(N?d:this,arguments)}return j}function Gs(e){return function(a){a=sa(a);var d=Jn(a)?pn(a):t,N=d?d[0]:a.charAt(0),E=d?xn(d,1).join(""):a.slice(1);return N[e]()+E}}function tt(e){return function(a){return Ir(qo($o(a).replace(cp,"")),e,"")}}function It(e){return function(){var a=arguments;switch(a.length){case 0:return new e;case 1:return new e(a[0]);case 2:return new e(a[0],a[1]);case 3:return new e(a[0],a[1],a[2]);case 4:return new e(a[0],a[1],a[2],a[3]);case 5:return new e(a[0],a[1],a[2],a[3],a[4]);case 6:return new e(a[0],a[1],a[2],a[3],a[4],a[5]);case 7:return new e(a[0],a[1],a[2],a[3],a[4],a[5],a[6])}var d=at(e.prototype),N=e.apply(d,a);return ya(N)?N:d}}function bd(e,a,d){var N=It(e);function E(){for(var j=arguments.length,z=ae(j),$=j,Z=rt(E);$--;)z[$]=arguments[$];var le=j<3&&z[0]!==Z&&z[j-1]!==Z?[]:En(z,Z);if(j-=le.length,j<d)return Qs(e,a,Vt,E.placeholder,t,z,le,t,t,d-j);var ue=this&&this!==La&&this instanceof E?N:e;return qa(ue,this,z)}return E}function Zs(e){return function(a,d,N){var E=da(a);if(!Ha(a)){var j=Ce(d,3);a=Da(a),d=function($){return j(E[$],$,E)}}var z=e(a,d,N);return z>-1?E[j?a[z]:z]:t}}function Js(e){return An(function(a){var d=a.length,N=d,E=nn.prototype.thru;for(e&&a.reverse();N--;){var j=a[N];if(typeof j!="function")throw new an(o);if(E&&!z&&ar(j)=="wrapper")var z=new nn([],!0)}for(N=z?N:d;++N<d;){j=a[N];var $=ar(j),Z=$=="wrapper"?ei(j):t;Z&&ri(Z[0])&&Z[1]==(L|P|T|D)&&!Z[4].length&&Z[9]==1?z=z[ar(Z[0])].apply(z,Z[3]):z=j.length==1&&ri(j)?z[$]():z.thru(j)}return function(){var le=arguments,ue=le[0];if(z&&le.length==1&&Ye(ue))return z.plant(ue).value();for(var he=0,be=d?a[he].apply(this,le):ue;++he<d;)be=a[he].call(this,be);return be}})}function Vt(e,a,d,N,E,j,z,$,Z,le){var ue=a&L,he=a&A,be=a&b,xe=a&(P|B),Oe=a&S,Ge=be?t:It(e);function Fe(){for(var Je=arguments.length,Qe=ae(Je),Va=Je;Va--;)Qe[Va]=arguments[Va];if(xe)var Ua=rt(Fe),Xa=Cp(Qe,Ua);if(N&&(Qe=Hs(Qe,N,E,xe)),j&&(Qe=Ys(Qe,j,z,xe)),Je-=Xa,xe&&Je<le){var ba=En(Qe,Ua);return Qs(e,a,Vt,Fe.placeholder,d,Qe,ba,$,Z,le-Je)}var un=he?d:this,bn=be?un[e]:e;return Je=Qe.length,$?Qe=Yd(Qe,$):Oe&&Je>1&&Qe.reverse(),ue&&Z<Je&&(Qe.length=Z),this&&this!==La&&this instanceof Fe&&(bn=Ge||It(bn)),bn.apply(un,Qe)}return Fe}function Vs(e,a){return function(d,N){return Ql(d,e,a(N),{})}}function Xt(e,a){return function(d,N){var E;if(d===t&&N===t)return a;if(d!==t&&(E=d),N!==t){if(E===t)return N;typeof d=="string"||typeof N=="string"?(d=Za(d),N=Za(N)):(d=js(d),N=js(N)),E=e(d,N)}return E}}function Jr(e){return An(function(a){return a=_a(a,Ga(Ce())),Ze(function(d){var N=this;return e(a,function(E){return qa(E,N,d)})})})}function Qt(e,a){a=a===t?" ":Za(a);var d=a.length;if(d<2)return d?zr(a,e):a;var N=zr(a,Ot(e/Vn(a)));return Jn(a)?xn(pn(N),0,e).join(""):N.slice(0,e)}function Sd(e,a,d,N){var E=a&A,j=It(e);function z(){for(var $=-1,Z=arguments.length,le=-1,ue=N.length,he=ae(ue+Z),be=this&&this!==La&&this instanceof z?j:e;++le<ue;)he[le]=N[le];for(;Z--;)he[le++]=arguments[++$];return qa(be,E?d:this,he)}return z}function Xs(e){return function(a,d,N){return N&&typeof N!="number"&&Fa(a,d,N)&&(d=N=t),a=vn(a),d===t?(d=a,a=0):d=vn(d),N=N===t?a<d?1:-1:vn(N),ud(a,d,N,e)}}function er(e){return function(a,d){return typeof a=="string"&&typeof d=="string"||(a=on(a),d=on(d)),e(a,d)}}function Qs(e,a,d,N,E,j,z,$,Z,le){var ue=a&P,he=ue?z:t,be=ue?t:z,xe=ue?j:t,Oe=ue?t:j;a|=ue?T:K,a&=~(ue?K:T),a&I||(a&=~(A|b));var Ge=[e,a,E,xe,he,Oe,be,$,Z,le],Fe=d.apply(t,Ge);return ri(e)&&fo(Fe,Ge),Fe.placeholder=N,go(Fe,e,a)}function Vr(e){var a=Ba[e];return function(d,N){if(d=on(d),N=N==null?0:Ka(qe(N),292),N&&fs(d)){var E=(sa(d)+"e").split("e"),j=a(E[0]+"e"+(+E[1]+N));return E=(sa(j)+"e").split("e"),+(E[0]+"e"+(+E[1]-N))}return a(d)}}var Bd=Qn&&1/Tt(new Qn([,-0]))[1]==Y?function(e){return new Qn(e)}:ki;function eo(e){return function(a){var d=ja(a);return d==Ke?Br(a):d==Se?Hp(a):jp(a,e(a))}}function In(e,a,d,N,E,j,z,$){var Z=a&b;if(!Z&&typeof e!="function")throw new an(o);var le=N?N.length:0;if(le||(a&=~(T|K),N=E=t),z=z===t?z:Ta(qe(z),0),$=$===t?$:qe($),le-=E?E.length:0,a&K){var ue=N,he=E;N=E=t}var be=Z?t:ei(e),xe=[e,a,d,N,E,ue,he,j,z,$];if(be&&Wd(xe,be),e=xe[0],a=xe[1],d=xe[2],N=xe[3],E=xe[4],$=xe[9]=xe[9]===t?Z?0:e.length:Ta(xe[9]-le,0),!$&&a&(P|B)&&(a&=~(P|B)),!a||a==A)var Oe=vd(e,a,d);else a==P||a==B?Oe=bd(e,a,$):(a==T||a==(A|T))&&!E.length?Oe=Sd(e,a,d,N):Oe=Vt.apply(t,xe);var Ge=be?xs:fo;return go(Ge(Oe,xe),e,a)}function ao(e,a,d,N){return e===t||dn(e,Xn[d])&&!la.call(N,d)?a:e}function no(e,a,d,N,E,j){return ya(e)&&ya(a)&&(j.set(a,e),qt(e,a,t,no,j),j.delete(a)),e}function Td(e){return Pt(e)?t:e}function to(e,a,d,N,E,j){var z=d&k,$=e.length,Z=a.length;if($!=Z&&!(z&&Z>$))return!1;var le=j.get(e),ue=j.get(a);if(le&&ue)return le==a&&ue==e;var he=-1,be=!0,xe=d&y?new Un:t;for(j.set(e,a),j.set(a,e);++he<$;){var Oe=e[he],Ge=a[he];if(N)var Fe=z?N(Ge,Oe,he,a,e,j):N(Oe,Ge,he,e,a,j);if(Fe!==t){if(Fe)continue;be=!1;break}if(xe){if(!Ar(a,function(Je,Qe){if(!lt(xe,Qe)&&(Oe===Je||E(Oe,Je,d,N,j)))return xe.push(Qe)})){be=!1;break}}else if(!(Oe===Ge||E(Oe,Ge,d,N,j))){be=!1;break}}return j.delete(e),j.delete(a),be}function Ed(e,a,d,N,E,j,z){switch(d){case Ue:if(e.byteLength!=a.byteLength||e.byteOffset!=a.byteOffset)return!1;e=e.buffer,a=a.buffer;case We:return!(e.byteLength!=a.byteLength||!j(new Kt(e),new Kt(a)));case ka:case Ia:case ca:return dn(+e,+a);case fe:return e.name==a.name&&e.message==a.message;case we:case V:return e==a+"";case Ke:var $=Br;case Se:var Z=N&k;if($||($=Tt),e.size!=a.size&&!Z)return!1;var le=z.get(e);if(le)return le==a;N|=y,z.set(e,a);var ue=to($(e),$(a),N,E,j,z);return z.delete(e),ue;case _e:if(ct)return ct.call(e)==ct.call(a)}return!1}function Dd(e,a,d,N,E,j){var z=d&k,$=Xr(e),Z=$.length,le=Xr(a),ue=le.length;if(Z!=ue&&!z)return!1;for(var he=Z;he--;){var be=$[he];if(!(z?be in a:la.call(a,be)))return!1}var xe=j.get(e),Oe=j.get(a);if(xe&&Oe)return xe==a&&Oe==e;var Ge=!0;j.set(e,a),j.set(a,e);for(var Fe=z;++he<Z;){be=$[he];var Je=e[be],Qe=a[be];if(N)var Va=z?N(Qe,Je,be,a,e,j):N(Je,Qe,be,e,a,j);if(!(Va===t?Je===Qe||E(Je,Qe,d,N,j):Va)){Ge=!1;break}Fe||(Fe=be=="constructor")}if(Ge&&!Fe){var Ua=e.constructor,Xa=a.constructor;Ua!=Xa&&"constructor"in e&&"constructor"in a&&!(typeof Ua=="function"&&Ua instanceof Ua&&typeof Xa=="function"&&Xa instanceof Xa)&&(Ge=!1)}return j.delete(e),j.delete(a),Ge}function An(e){return si(lo(e,t,ko),e+"")}function Xr(e){return Ps(e,Da,ni)}function Qr(e){return Ps(e,Ya,ro)}var ei=Ut?function(e){return Ut.get(e)}:ki;function ar(e){for(var a=e.name+"",d=et[a],N=la.call(et,a)?d.length:0;N--;){var E=d[N],j=E.func;if(j==null||j==e)return E.name}return a}function rt(e){var a=la.call(R,"placeholder")?R:e;return a.placeholder}function Ce(){var e=R.iteratee||_i;return e=e===_i?Ss:e,arguments.length?e(arguments[0],arguments[1]):e}function nr(e,a){var d=e.__data__;return Md(a)?d[typeof a=="string"?"string":"hash"]:d.map}function ai(e){for(var a=Da(e),d=a.length;d--;){var N=a[d],E=e[N];a[d]=[N,E,oo(E)]}return a}function Hn(e,a){var d=Up(e,a);return bs(d)?d:t}function wd(e){var a=la.call(e,On),d=e[On];try{e[On]=t;var N=!0}catch(j){}var E=Rt.call(e);return N&&(a?e[On]=d:delete e[On]),E}var ni=Er?function(e){return e==null?[]:(e=da(e),Bn(Er(e),function(a){return ds.call(e,a)}))}:Ii,ro=Er?function(e){for(var a=[];e;)Tn(a,ni(e)),e=jt(e);return a}:Ii,ja=Oa;(Dr&&ja(new Dr(new ArrayBuffer(1)))!=Ue||ut&&ja(new ut)!=Ke||wr&&ja(wr.resolve())!=Re||Qn&&ja(new Qn)!=Se||ft&&ja(new ft)!=me)&&(ja=function(e){var a=Oa(e),d=a==aa?e.constructor:t,N=d?Yn(d):"";if(N)switch(N){case gl:return Ue;case cl:return Ke;case hl:return Re;case ml:return Se;case _l:return me}return a});function Ld(e,a,d){for(var N=-1,E=d.length;++N<E;){var j=d[N],z=j.size;switch(j.type){case"drop":e+=z;break;case"dropRight":a-=z;break;case"take":a=Ka(a,e+z);break;case"takeRight":e=Ta(e,a-z);break}}return{start:e,end:a}}function Rd(e){var a=e.match(pe);return a?a[1].split(oe):[]}function io(e,a,d){a=Rn(a,e);for(var N=-1,E=a.length,j=!1;++N<E;){var z=mn(a[N]);if(!(j=e!=null&&d(e,z)))break;e=e[z]}return j||++N!=E?j:(E=e==null?0:e.length,!!E&&lr(E)&&Nn(z,E)&&(Ye(e)||$n(e)))}function xd(e){var a=e.length,d=new e.constructor(a);return a&&typeof e[0]=="string"&&la.call(e,"index")&&(d.index=e.index,d.input=e.input),d}function so(e){return typeof e.constructor=="function"&&!At(e)?at(jt(e)):{}}function Kd(e,a,d){var N=e.constructor;switch(a){case We:return Zr(e);case ka:case Ia:return new N(+e);case Ue:return yd(e,d);case $e:case ea:case oa:case ha:case Ca:case xa:case Sa:case fn:case gn:return Ws(e,d);case Ke:return new N;case ca:case V:return new N(e);case we:return kd(e);case Se:return new N;case _e:return Id(e)}}function jd(e,a){var d=a.length;if(!d)return e;var N=d-1;return a[N]=(d>1?"& ":"")+a[N],a=a.join(d>2?", ":" "),e.replace(ne,`{
/* [wrapped with `+a+`] */
`)}function Cd(e){return Ye(e)||$n(e)||!!(us&&e&&e[us])}function Nn(e,a){var d=typeof e;return a=a==null?W:a,!!a&&(d=="number"||d!="symbol"&&fr.test(e))&&e>-1&&e%1==0&&e<a}function Fa(e,a,d){if(!ya(d))return!1;var N=typeof a;return(N=="number"?Ha(d)&&Nn(a,d.length):N=="string"&&a in d)?dn(d[a],e):!1}function ti(e,a){if(Ye(e))return!1;var d=typeof e;return d=="number"||d=="symbol"||d=="boolean"||e==null||Ja(e)?!0:ye.test(e)||!ie.test(e)||a!=null&&e in da(a)}function Md(e){var a=typeof e;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?e!=="__proto__":e===null}function ri(e){var a=ar(e),d=R[a];if(typeof d!="function"||!(a in Xe.prototype))return!1;if(e===d)return!0;var N=ei(d);return!!N&&e===N[0]}function Od(e){return!!os&&os in e}var Fd=wt?Pn:Ai;function At(e){var a=e&&e.constructor,d=typeof a=="function"&&a.prototype||Xn;return e===d}function oo(e){return e===e&&!ya(e)}function po(e,a){return function(d){return d==null?!1:d[e]===a&&(a!==t||e in da(d))}}function Ud(e){var a=or(e,function(N){return d.size===m&&d.clear(),N}),d=a.cache;return a}function Wd(e,a){var d=e[1],N=a[1],E=d|N,j=E<(A|b|L),z=N==L&&d==P||N==L&&d==D&&e[7].length<=a[8]||N==(L|D)&&a[7].length<=a[8]&&d==P;if(!(j||z))return e;N&A&&(e[2]=a[2],E|=d&A?0:I);var $=a[3];if($){var Z=e[3];e[3]=Z?Hs(Z,$,a[4]):$,e[4]=Z?En(e[3],s):a[4]}return $=a[5],$&&(Z=e[5],e[5]=Z?Ys(Z,$,a[6]):$,e[6]=Z?En(e[5],s):a[6]),$=a[7],$&&(e[7]=$),N&L&&(e[8]=e[8]==null?a[8]:Ka(e[8],a[8])),e[9]==null&&(e[9]=a[9]),e[0]=a[0],e[1]=E,e}function zd(e){var a=[];if(e!=null)for(var d in da(e))a.push(d);return a}function Hd(e){return Rt.call(e)}function lo(e,a,d){return a=Ta(a===t?e.length-1:a,0),function(){for(var N=arguments,E=-1,j=Ta(N.length-a,0),z=ae(j);++E<j;)z[E]=N[a+E];E=-1;for(var $=ae(a+1);++E<a;)$[E]=N[E];return $[a]=d(z),qa(e,this,$)}}function uo(e,a){return a.length<2?e:zn(e,rn(a,0,-1))}function Yd(e,a){for(var d=e.length,N=Ka(a.length,d),E=za(e);N--;){var j=a[N];e[N]=Nn(j,d)?E[j]:t}return e}function ii(e,a){if(!(a==="constructor"&&typeof e[a]=="function")&&a!="__proto__")return e[a]}var fo=co(xs),Nt=sl||function(e,a){return La.setTimeout(e,a)},si=co(cd);function go(e,a,d){var N=a+"";return si(e,jd(N,$d(Rd(N),d)))}function co(e){var a=0,d=0;return function(){var N=dl(),E=H-(N-d);if(d=N,E>0){if(++a>=F)return arguments[0]}else a=0;return e.apply(t,arguments)}}function tr(e,a){var d=-1,N=e.length,E=N-1;for(a=a===t?N:a;++d<a;){var j=Wr(d,E),z=e[j];e[j]=e[d],e[d]=z}return e.length=a,e}var ho=Ud(function(e){var a=[];return e.charCodeAt(0)===46&&a.push(""),e.replace(Pe,function(d,N,E,j){a.push(E?j.replace(Le,"$1"):N||d)}),a});function mn(e){if(typeof e=="string"||Ja(e))return e;var a=e+"";return a=="0"&&1/e==-Y?"-0":a}function Yn(e){if(e!=null){try{return Lt.call(e)}catch(a){}try{return e+""}catch(a){}}return""}function $d(e,a){return en(Ie,function(d){var N="_."+d[0];a&d[1]&&!St(e,N)&&e.push(N)}),e.sort()}function mo(e){if(e instanceof Xe)return e.clone();var a=new nn(e.__wrapped__,e.__chain__);return a.__actions__=za(e.__actions__),a.__index__=e.__index__,a.__values__=e.__values__,a}function qd(e,a,d){(d?Fa(e,a,d):a===t)?a=1:a=Ta(qe(a),0);var N=e==null?0:e.length;if(!N||a<1)return[];for(var E=0,j=0,z=ae(Ot(N/a));E<N;)z[j++]=rn(e,E,E+=a);return z}function Gd(e){for(var a=-1,d=e==null?0:e.length,N=0,E=[];++a<d;){var j=e[a];j&&(E[N++]=j)}return E}function Zd(){var e=arguments.length;if(!e)return[];for(var a=ae(e-1),d=arguments[0],N=e;N--;)a[N-1]=arguments[N];return Tn(Ye(d)?za(d):[d],Ra(a,1))}var Jd=Ze(function(e,a){return va(e)?mt(e,Ra(a,1,va,!0)):[]}),Vd=Ze(function(e,a){var d=sn(a);return va(d)&&(d=t),va(e)?mt(e,Ra(a,1,va,!0),Ce(d,2)):[]}),Xd=Ze(function(e,a){var d=sn(a);return va(d)&&(d=t),va(e)?mt(e,Ra(a,1,va,!0),t,d):[]});function Qd(e,a,d){var N=e==null?0:e.length;return N?(a=d||a===t?1:qe(a),rn(e,a<0?0:a,N)):[]}function eu(e,a,d){var N=e==null?0:e.length;return N?(a=d||a===t?1:qe(a),a=N-a,rn(e,0,a<0?0:a)):[]}function au(e,a){return e&&e.length?Zt(e,Ce(a,3),!0,!0):[]}function nu(e,a){return e&&e.length?Zt(e,Ce(a,3),!0):[]}function tu(e,a,d,N){var E=e==null?0:e.length;return E?(d&&typeof d!="number"&&Fa(e,a,d)&&(d=0,N=E),Zl(e,a,d,N)):[]}function _o(e,a,d){var N=e==null?0:e.length;if(!N)return-1;var E=d==null?0:qe(d);return E<0&&(E=Ta(N+E,0)),Bt(e,Ce(a,3),E)}function yo(e,a,d){var N=e==null?0:e.length;if(!N)return-1;var E=N-1;return d!==t&&(E=qe(d),E=d<0?Ta(N+E,0):Ka(E,N-1)),Bt(e,Ce(a,3),E,!0)}function ko(e){var a=e==null?0:e.length;return a?Ra(e,1):[]}function ru(e){var a=e==null?0:e.length;return a?Ra(e,Y):[]}function iu(e,a){var d=e==null?0:e.length;return d?(a=a===t?1:qe(a),Ra(e,a)):[]}function su(e){for(var a=-1,d=e==null?0:e.length,N={};++a<d;){var E=e[a];N[E[0]]=E[1]}return N}function Io(e){return e&&e.length?e[0]:t}function ou(e,a,d){var N=e==null?0:e.length;if(!N)return-1;var E=d==null?0:qe(d);return E<0&&(E=Ta(N+E,0)),Zn(e,a,E)}function pu(e){var a=e==null?0:e.length;return a?rn(e,0,-1):[]}var lu=Ze(function(e){var a=_a(e,qr);return a.length&&a[0]===e[0]?Cr(a):[]}),du=Ze(function(e){var a=sn(e),d=_a(e,qr);return a===sn(d)?a=t:d.pop(),d.length&&d[0]===e[0]?Cr(d,Ce(a,2)):[]}),uu=Ze(function(e){var a=sn(e),d=_a(e,qr);return a=typeof a=="function"?a:t,a&&d.pop(),d.length&&d[0]===e[0]?Cr(d,t,a):[]});function fu(e,a){return e==null?"":pl.call(e,a)}function sn(e){var a=e==null?0:e.length;return a?e[a-1]:t}function gu(e,a,d){var N=e==null?0:e.length;if(!N)return-1;var E=N;return d!==t&&(E=qe(d),E=E<0?Ta(N+E,0):Ka(E,N-1)),a===a?$p(e,a,E):Bt(e,Qi,E,!0)}function cu(e,a){return e&&e.length?Ds(e,qe(a)):t}var hu=Ze(Ao);function Ao(e,a){return e&&e.length&&a&&a.length?Ur(e,a):e}function mu(e,a,d){return e&&e.length&&a&&a.length?Ur(e,a,Ce(d,2)):e}function _u(e,a,d){return e&&e.length&&a&&a.length?Ur(e,a,t,d):e}var yu=An(function(e,a){var d=e==null?0:e.length,N=Rr(e,a);return Rs(e,_a(a,function(E){return Nn(E,d)?+E:E}).sort(zs)),N});function ku(e,a){var d=[];if(!(e&&e.length))return d;var N=-1,E=[],j=e.length;for(a=Ce(a,3);++N<j;){var z=e[N];a(z,N,e)&&(d.push(z),E.push(N))}return Rs(e,E),d}function oi(e){return e==null?e:fl.call(e)}function Iu(e,a,d){var N=e==null?0:e.length;return N?(d&&typeof d!="number"&&Fa(e,a,d)?(a=0,d=N):(a=a==null?0:qe(a),d=d===t?N:qe(d)),rn(e,a,d)):[]}function Au(e,a){return Gt(e,a)}function Nu(e,a,d){return Hr(e,a,Ce(d,2))}function Pu(e,a){var d=e==null?0:e.length;if(d){var N=Gt(e,a);if(N<d&&dn(e[N],a))return N}return-1}function vu(e,a){return Gt(e,a,!0)}function bu(e,a,d){return Hr(e,a,Ce(d,2),!0)}function Su(e,a){var d=e==null?0:e.length;if(d){var N=Gt(e,a,!0)-1;if(dn(e[N],a))return N}return-1}function Bu(e){return e&&e.length?Ks(e):[]}function Tu(e,a){return e&&e.length?Ks(e,Ce(a,2)):[]}function Eu(e){var a=e==null?0:e.length;return a?rn(e,1,a):[]}function Du(e,a,d){return e&&e.length?(a=d||a===t?1:qe(a),rn(e,0,a<0?0:a)):[]}function wu(e,a,d){var N=e==null?0:e.length;return N?(a=d||a===t?1:qe(a),a=N-a,rn(e,a<0?0:a,N)):[]}function Lu(e,a){return e&&e.length?Zt(e,Ce(a,3),!1,!0):[]}function Ru(e,a){return e&&e.length?Zt(e,Ce(a,3)):[]}var xu=Ze(function(e){return Ln(Ra(e,1,va,!0))}),Ku=Ze(function(e){var a=sn(e);return va(a)&&(a=t),Ln(Ra(e,1,va,!0),Ce(a,2))}),ju=Ze(function(e){var a=sn(e);return a=typeof a=="function"?a:t,Ln(Ra(e,1,va,!0),t,a)});function Cu(e){return e&&e.length?Ln(e):[]}function Mu(e,a){return e&&e.length?Ln(e,Ce(a,2)):[]}function Ou(e,a){return a=typeof a=="function"?a:t,e&&e.length?Ln(e,t,a):[]}function pi(e){if(!(e&&e.length))return[];var a=0;return e=Bn(e,function(d){if(va(d))return a=Ta(d.length,a),!0}),br(a,function(d){return _a(e,Nr(d))})}function No(e,a){if(!(e&&e.length))return[];var d=pi(e);return a==null?d:_a(d,function(N){return qa(a,t,N)})}var Fu=Ze(function(e,a){return va(e)?mt(e,a):[]}),Uu=Ze(function(e){return $r(Bn(e,va))}),Wu=Ze(function(e){var a=sn(e);return va(a)&&(a=t),$r(Bn(e,va),Ce(a,2))}),zu=Ze(function(e){var a=sn(e);return a=typeof a=="function"?a:t,$r(Bn(e,va),t,a)}),Hu=Ze(pi);function Yu(e,a){return Os(e||[],a||[],ht)}function $u(e,a){return Os(e||[],a||[],kt)}var qu=Ze(function(e){var a=e.length,d=a>1?e[a-1]:t;return d=typeof d=="function"?(e.pop(),d):t,No(e,d)});function Po(e){var a=R(e);return a.__chain__=!0,a}function Gu(e,a){return a(e),e}function rr(e,a){return a(e)}var Zu=An(function(e){var a=e.length,d=a?e[0]:0,N=this.__wrapped__,E=function(j){return Rr(j,e)};return a>1||this.__actions__.length||!(N instanceof Xe)||!Nn(d)?this.thru(E):(N=N.slice(d,+d+(a?1:0)),N.__actions__.push({func:rr,args:[E],thisArg:t}),new nn(N,this.__chain__).thru(function(j){return a&&!j.length&&j.push(t),j}))});function Ju(){return Po(this)}function Vu(){return new nn(this.value(),this.__chain__)}function Xu(){this.__values__===t&&(this.__values__=Co(this.value()));var e=this.__index__>=this.__values__.length,a=e?t:this.__values__[this.__index__++];return{done:e,value:a}}function Qu(){return this}function ef(e){for(var a,d=this;d instanceof zt;){var N=mo(d);N.__index__=0,N.__values__=t,a?E.__wrapped__=N:a=N;var E=N;d=d.__wrapped__}return E.__wrapped__=e,a}function af(){var e=this.__wrapped__;if(e instanceof Xe){var a=e;return this.__actions__.length&&(a=new Xe(this)),a=a.reverse(),a.__actions__.push({func:rr,args:[oi],thisArg:t}),new nn(a,this.__chain__)}return this.thru(oi)}function nf(){return Ms(this.__wrapped__,this.__actions__)}var tf=Jt(function(e,a,d){la.call(e,d)?++e[d]:kn(e,d,1)});function rf(e,a,d){var N=Ye(e)?Vi:Gl;return d&&Fa(e,a,d)&&(a=t),N(e,Ce(a,3))}function sf(e,a){var d=Ye(e)?Bn:As;return d(e,Ce(a,3))}var of=Zs(_o),pf=Zs(yo);function lf(e,a){return Ra(ir(e,a),1)}function df(e,a){return Ra(ir(e,a),Y)}function uf(e,a,d){return d=d===t?1:qe(d),Ra(ir(e,a),d)}function vo(e,a){var d=Ye(e)?en:wn;return d(e,Ce(a,3))}function bo(e,a){var d=Ye(e)?Ep:Is;return d(e,Ce(a,3))}var ff=Jt(function(e,a,d){la.call(e,d)?e[d].push(a):kn(e,d,[a])});function gf(e,a,d,N){e=Ha(e)?e:st(e),d=d&&!N?qe(d):0;var E=e.length;return d<0&&(d=Ta(E+d,0)),dr(e)?d<=E&&e.indexOf(a,d)>-1:!!E&&Zn(e,a,d)>-1}var cf=Ze(function(e,a,d){var N=-1,E=typeof a=="function",j=Ha(e)?ae(e.length):[];return wn(e,function(z){j[++N]=E?qa(a,z,d):_t(z,a,d)}),j}),hf=Jt(function(e,a,d){kn(e,d,a)});function ir(e,a){var d=Ye(e)?_a:Bs;return d(e,Ce(a,3))}function mf(e,a,d,N){return e==null?[]:(Ye(a)||(a=a==null?[]:[a]),d=N?t:d,Ye(d)||(d=d==null?[]:[d]),ws(e,a,d))}var _f=Jt(function(e,a,d){e[d?0:1].push(a)},function(){return[[],[]]});function yf(e,a,d){var N=Ye(e)?Ir:as,E=arguments.length<3;return N(e,Ce(a,4),d,E,wn)}function kf(e,a,d){var N=Ye(e)?Dp:as,E=arguments.length<3;return N(e,Ce(a,4),d,E,Is)}function If(e,a){var d=Ye(e)?Bn:As;return d(e,pr(Ce(a,3)))}function Af(e){var a=Ye(e)?ms:fd;return a(e)}function Nf(e,a,d){(d?Fa(e,a,d):a===t)?a=1:a=qe(a);var N=Ye(e)?zl:gd;return N(e,a)}function Pf(e){var a=Ye(e)?Hl:hd;return a(e)}function vf(e){if(e==null)return 0;if(Ha(e))return dr(e)?Vn(e):e.length;var a=ja(e);return a==Ke||a==Se?e.size:Or(e).length}function bf(e,a,d){var N=Ye(e)?Ar:md;return d&&Fa(e,a,d)&&(a=t),N(e,Ce(a,3))}var Sf=Ze(function(e,a){if(e==null)return[];var d=a.length;return d>1&&Fa(e,a[0],a[1])?a=[]:d>2&&Fa(a[0],a[1],a[2])&&(a=[a[0]]),ws(e,Ra(a,1),[])}),sr=il||function(){return La.Date.now()};function Bf(e,a){if(typeof a!="function")throw new an(o);return e=qe(e),function(){if(--e<1)return a.apply(this,arguments)}}function So(e,a,d){return a=d?t:a,a=e&&a==null?e.length:a,In(e,L,t,t,t,t,a)}function Bo(e,a){var d;if(typeof a!="function")throw new an(o);return e=qe(e),function(){return--e>0&&(d=a.apply(this,arguments)),e<=1&&(a=t),d}}var li=Ze(function(e,a,d){var N=A;if(d.length){var E=En(d,rt(li));N|=T}return In(e,N,a,d,E)}),To=Ze(function(e,a,d){var N=A|b;if(d.length){var E=En(d,rt(To));N|=T}return In(a,N,e,d,E)});function Eo(e,a,d){a=d?t:a;var N=In(e,P,t,t,t,t,t,a);return N.placeholder=Eo.placeholder,N}function Do(e,a,d){a=d?t:a;var N=In(e,B,t,t,t,t,t,a);return N.placeholder=Do.placeholder,N}function wo(e,a,d){var N,E,j,z,$,Z,le=0,ue=!1,he=!1,be=!0;if(typeof e!="function")throw new an(o);a=on(a)||0,ya(d)&&(ue=!!d.leading,he="maxWait"in d,j=he?Ta(on(d.maxWait)||0,a):j,be="trailing"in d?!!d.trailing:be);function xe(ba){var un=N,bn=E;return N=E=t,le=ba,z=e.apply(bn,un),z}function Oe(ba){return le=ba,$=Nt(Je,a),ue?xe(ba):z}function Ge(ba){var un=ba-Z,bn=ba-le,Jo=a-un;return he?Ka(Jo,j-bn):Jo}function Fe(ba){var un=ba-Z,bn=ba-le;return Z===t||un>=a||un<0||he&&bn>=j}function Je(){var ba=sr();if(Fe(ba))return Qe(ba);$=Nt(Je,Ge(ba))}function Qe(ba){return $=t,be&&N?xe(ba):(N=E=t,z)}function Va(){$!==t&&Fs($),le=0,N=Z=E=$=t}function Ua(){return $===t?z:Qe(sr())}function Xa(){var ba=sr(),un=Fe(ba);if(N=arguments,E=this,Z=ba,un){if($===t)return Oe(Z);if(he)return Fs($),$=Nt(Je,a),xe(Z)}return $===t&&($=Nt(Je,a)),z}return Xa.cancel=Va,Xa.flush=Ua,Xa}var Tf=Ze(function(e,a){return ks(e,1,a)}),Ef=Ze(function(e,a,d){return ks(e,on(a)||0,d)});function Df(e){return In(e,S)}function or(e,a){if(typeof e!="function"||a!=null&&typeof a!="function")throw new an(o);var d=function(){var N=arguments,E=a?a.apply(this,N):N[0],j=d.cache;if(j.has(E))return j.get(E);var z=e.apply(this,N);return d.cache=j.set(E,z)||j,z};return d.cache=new(or.Cache||yn),d}or.Cache=yn;function pr(e){if(typeof e!="function")throw new an(o);return function(){var a=arguments;switch(a.length){case 0:return!e.call(this);case 1:return!e.call(this,a[0]);case 2:return!e.call(this,a[0],a[1]);case 3:return!e.call(this,a[0],a[1],a[2])}return!e.apply(this,a)}}function wf(e){return Bo(2,e)}var Lf=_d(function(e,a){a=a.length==1&&Ye(a[0])?_a(a[0],Ga(Ce())):_a(Ra(a,1),Ga(Ce()));var d=a.length;return Ze(function(N){for(var E=-1,j=Ka(N.length,d);++E<j;)N[E]=a[E].call(this,N[E]);return qa(e,this,N)})}),di=Ze(function(e,a){var d=En(a,rt(di));return In(e,T,t,a,d)}),Lo=Ze(function(e,a){var d=En(a,rt(Lo));return In(e,K,t,a,d)}),Rf=An(function(e,a){return In(e,D,t,t,t,a)});function xf(e,a){if(typeof e!="function")throw new an(o);return a=a===t?a:qe(a),Ze(e,a)}function Kf(e,a){if(typeof e!="function")throw new an(o);return a=a==null?0:Ta(qe(a),0),Ze(function(d){var N=d[a],E=xn(d,0,a);return N&&Tn(E,N),qa(e,this,E)})}function jf(e,a,d){var N=!0,E=!0;if(typeof e!="function")throw new an(o);return ya(d)&&(N="leading"in d?!!d.leading:N,E="trailing"in d?!!d.trailing:E),wo(e,a,{leading:N,maxWait:a,trailing:E})}function Cf(e){return So(e,1)}function Mf(e,a){return di(Gr(a),e)}function Of(){if(!arguments.length)return[];var e=arguments[0];return Ye(e)?e:[e]}function Ff(e){return tn(e,f)}function Uf(e,a){return a=typeof a=="function"?a:t,tn(e,f,a)}function Wf(e){return tn(e,_|f)}function zf(e,a){return a=typeof a=="function"?a:t,tn(e,_|f,a)}function Hf(e,a){return a==null||ys(e,a,Da(a))}function dn(e,a){return e===a||e!==e&&a!==a}var Yf=er(jr),$f=er(function(e,a){return e>=a}),$n=vs(function(){return arguments}())?vs:function(e){return Pa(e)&&la.call(e,"callee")&&!ds.call(e,"callee")},Ye=ae.isArray,qf=Yi?Ga(Yi):ed;function Ha(e){return e!=null&&lr(e.length)&&!Pn(e)}function va(e){return Pa(e)&&Ha(e)}function Gf(e){return e===!0||e===!1||Pa(e)&&Oa(e)==ka}var Kn=ol||Ai,Zf=$i?Ga($i):ad;function Jf(e){return Pa(e)&&e.nodeType===1&&!Pt(e)}function Vf(e){if(e==null)return!0;if(Ha(e)&&(Ye(e)||typeof e=="string"||typeof e.splice=="function"||Kn(e)||it(e)||$n(e)))return!e.length;var a=ja(e);if(a==Ke||a==Se)return!e.size;if(At(e))return!Or(e).length;for(var d in e)if(la.call(e,d))return!1;return!0}function Xf(e,a){return yt(e,a)}function Qf(e,a,d){d=typeof d=="function"?d:t;var N=d?d(e,a):t;return N===t?yt(e,a,t,d):!!N}function ui(e){if(!Pa(e))return!1;var a=Oa(e);return a==fe||a==Ea||typeof e.message=="string"&&typeof e.name=="string"&&!Pt(e)}function eg(e){return typeof e=="number"&&fs(e)}function Pn(e){if(!ya(e))return!1;var a=Oa(e);return a==Te||a==Ae||a==fa||a==ge}function Ro(e){return typeof e=="number"&&e==qe(e)}function lr(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=W}function ya(e){var a=typeof e;return e!=null&&(a=="object"||a=="function")}function Pa(e){return e!=null&&typeof e=="object"}var xo=qi?Ga(qi):td;function ag(e,a){return e===a||Mr(e,a,ai(a))}function ng(e,a,d){return d=typeof d=="function"?d:t,Mr(e,a,ai(a),d)}function tg(e){return Ko(e)&&e!=+e}function rg(e){if(Fd(e))throw new He(g);return bs(e)}function ig(e){return e===null}function sg(e){return e==null}function Ko(e){return typeof e=="number"||Pa(e)&&Oa(e)==ca}function Pt(e){if(!Pa(e)||Oa(e)!=aa)return!1;var a=jt(e);if(a===null)return!0;var d=la.call(a,"constructor")&&a.constructor;return typeof d=="function"&&d instanceof d&&Lt.call(d)==al}var fi=Gi?Ga(Gi):rd;function og(e){return Ro(e)&&e>=-W&&e<=W}var jo=Zi?Ga(Zi):id;function dr(e){return typeof e=="string"||!Ye(e)&&Pa(e)&&Oa(e)==V}function Ja(e){return typeof e=="symbol"||Pa(e)&&Oa(e)==_e}var it=Ji?Ga(Ji):sd;function pg(e){return e===t}function lg(e){return Pa(e)&&ja(e)==me}function dg(e){return Pa(e)&&Oa(e)==je}var ug=er(Fr),fg=er(function(e,a){return e<=a});function Co(e){if(!e)return[];if(Ha(e))return dr(e)?pn(e):za(e);if(dt&&e[dt])return zp(e[dt]());var a=ja(e),d=a==Ke?Br:a==Se?Tt:st;return d(e)}function vn(e){if(!e)return e===0?e:0;if(e=on(e),e===Y||e===-Y){var a=e<0?-1:1;return a*X}return e===e?e:0}function qe(e){var a=vn(e),d=a%1;return a===a?d?a-d:a:0}function Mo(e){return e?Wn(qe(e),0,de):0}function on(e){if(typeof e=="number")return e;if(Ja(e))return re;if(ya(e)){var a=typeof e.valueOf=="function"?e.valueOf():e;e=ya(a)?a+"":a}if(typeof e!="string")return e===0?e:+e;e=ns(e);var d=ma.test(e);return d||na.test(e)?Sp(e.slice(2),d?2:8):wa.test(e)?re:+e}function Oo(e){return hn(e,Ya(e))}function gg(e){return e?Wn(qe(e),-W,W):e===0?e:0}function sa(e){return e==null?"":Za(e)}var cg=nt(function(e,a){if(At(a)||Ha(a)){hn(a,Da(a),e);return}for(var d in a)la.call(a,d)&&ht(e,d,a[d])}),Fo=nt(function(e,a){hn(a,Ya(a),e)}),ur=nt(function(e,a,d,N){hn(a,Ya(a),e,N)}),hg=nt(function(e,a,d,N){hn(a,Da(a),e,N)}),mg=An(Rr);function _g(e,a){var d=at(e);return a==null?d:_s(d,a)}var yg=Ze(function(e,a){e=da(e);var d=-1,N=a.length,E=N>2?a[2]:t;for(E&&Fa(a[0],a[1],E)&&(N=1);++d<N;)for(var j=a[d],z=Ya(j),$=-1,Z=z.length;++$<Z;){var le=z[$],ue=e[le];(ue===t||dn(ue,Xn[le])&&!la.call(e,le))&&(e[le]=j[le])}return e}),kg=Ze(function(e){return e.push(t,no),qa(Uo,t,e)});function Ig(e,a){return Xi(e,Ce(a,3),cn)}function Ag(e,a){return Xi(e,Ce(a,3),Kr)}function Ng(e,a){return e==null?e:xr(e,Ce(a,3),Ya)}function Pg(e,a){return e==null?e:Ns(e,Ce(a,3),Ya)}function vg(e,a){return e&&cn(e,Ce(a,3))}function bg(e,a){return e&&Kr(e,Ce(a,3))}function Sg(e){return e==null?[]:$t(e,Da(e))}function Bg(e){return e==null?[]:$t(e,Ya(e))}function gi(e,a,d){var N=e==null?t:zn(e,a);return N===t?d:N}function Tg(e,a){return e!=null&&io(e,a,Jl)}function ci(e,a){return e!=null&&io(e,a,Vl)}var Eg=Vs(function(e,a,d){a!=null&&typeof a.toString!="function"&&(a=Rt.call(a)),e[a]=d},mi($a)),Dg=Vs(function(e,a,d){a!=null&&typeof a.toString!="function"&&(a=Rt.call(a)),la.call(e,a)?e[a].push(d):e[a]=[d]},Ce),wg=Ze(_t);function Da(e){return Ha(e)?hs(e):Or(e)}function Ya(e){return Ha(e)?hs(e,!0):od(e)}function Lg(e,a){var d={};return a=Ce(a,3),cn(e,function(N,E,j){kn(d,a(N,E,j),N)}),d}function Rg(e,a){var d={};return a=Ce(a,3),cn(e,function(N,E,j){kn(d,E,a(N,E,j))}),d}var xg=nt(function(e,a,d){qt(e,a,d)}),Uo=nt(function(e,a,d,N){qt(e,a,d,N)}),Kg=An(function(e,a){var d={};if(e==null)return d;var N=!1;a=_a(a,function(j){return j=Rn(j,e),N||(N=j.length>1),j}),hn(e,Qr(e),d),N&&(d=tn(d,_|c|f,Td));for(var E=a.length;E--;)Yr(d,a[E]);return d});function jg(e,a){return Wo(e,pr(Ce(a)))}var Cg=An(function(e,a){return e==null?{}:ld(e,a)});function Wo(e,a){if(e==null)return{};var d=_a(Qr(e),function(N){return[N]});return a=Ce(a),Ls(e,d,function(N,E){return a(N,E[0])})}function Mg(e,a,d){a=Rn(a,e);var N=-1,E=a.length;for(E||(E=1,e=t);++N<E;){var j=e==null?t:e[mn(a[N])];j===t&&(N=E,j=d),e=Pn(j)?j.call(e):j}return e}function Og(e,a,d){return e==null?e:kt(e,a,d)}function Fg(e,a,d,N){return N=typeof N=="function"?N:t,e==null?e:kt(e,a,d,N)}var zo=eo(Da),Ho=eo(Ya);function Ug(e,a,d){var N=Ye(e),E=N||Kn(e)||it(e);if(a=Ce(a,4),d==null){var j=e&&e.constructor;E?d=N?new j:[]:ya(e)?d=Pn(j)?at(jt(e)):{}:d={}}return(E?en:cn)(e,function(z,$,Z){return a(d,z,$,Z)}),d}function Wg(e,a){return e==null?!0:Yr(e,a)}function zg(e,a,d){return e==null?e:Cs(e,a,Gr(d))}function Hg(e,a,d,N){return N=typeof N=="function"?N:t,e==null?e:Cs(e,a,Gr(d),N)}function st(e){return e==null?[]:Sr(e,Da(e))}function Yg(e){return e==null?[]:Sr(e,Ya(e))}function $g(e,a,d){return d===t&&(d=a,a=t),d!==t&&(d=on(d),d=d===d?d:0),a!==t&&(a=on(a),a=a===a?a:0),Wn(on(e),a,d)}function qg(e,a,d){return a=vn(a),d===t?(d=a,a=0):d=vn(d),e=on(e),Xl(e,a,d)}function Gg(e,a,d){if(d&&typeof d!="boolean"&&Fa(e,a,d)&&(a=d=t),d===t&&(typeof a=="boolean"?(d=a,a=t):typeof e=="boolean"&&(d=e,e=t)),e===t&&a===t?(e=0,a=1):(e=vn(e),a===t?(a=e,e=0):a=vn(a)),e>a){var N=e;e=a,a=N}if(d||e%1||a%1){var E=gs();return Ka(e+E*(a-e+bp("1e-"+((E+"").length-1))),a)}return Wr(e,a)}var Zg=tt(function(e,a,d){return a=a.toLowerCase(),e+(d?Yo(a):a)});function Yo(e){return hi(sa(e).toLowerCase())}function $o(e){return e=sa(e),e&&e.replace(Pi,Mp).replace(hp,"")}function Jg(e,a,d){e=sa(e),a=Za(a);var N=e.length;d=d===t?N:Wn(qe(d),0,N);var E=d;return d-=a.length,d>=0&&e.slice(d,E)==a}function Vg(e){return e=sa(e),e&&U.test(e)?e.replace(Aa,Op):e}function Xg(e){return e=sa(e),e&&ve.test(e)?e.replace(De,"\\$&"):e}var Qg=tt(function(e,a,d){return e+(d?"-":"")+a.toLowerCase()}),ec=tt(function(e,a,d){return e+(d?" ":"")+a.toLowerCase()}),ac=Gs("toLowerCase");function nc(e,a,d){e=sa(e),a=qe(a);var N=a?Vn(e):0;if(!a||N>=a)return e;var E=(a-N)/2;return Qt(Ft(E),d)+e+Qt(Ot(E),d)}function tc(e,a,d){e=sa(e),a=qe(a);var N=a?Vn(e):0;return a&&N<a?e+Qt(a-N,d):e}function rc(e,a,d){e=sa(e),a=qe(a);var N=a?Vn(e):0;return a&&N<a?Qt(a-N,d)+e:e}function ic(e,a,d){return d||a==null?a=0:a&&(a=+a),ul(sa(e).replace(ze,""),a||0)}function sc(e,a,d){return(d?Fa(e,a,d):a===t)?a=1:a=qe(a),zr(sa(e),a)}function oc(){var e=arguments,a=sa(e[0]);return e.length<3?a:a.replace(e[1],e[2])}var pc=tt(function(e,a,d){return e+(d?"_":"")+a.toLowerCase()});function lc(e,a,d){return d&&typeof d!="number"&&Fa(e,a,d)&&(a=d=t),d=d===t?de:d>>>0,d?(e=sa(e),e&&(typeof a=="string"||a!=null&&!fi(a))&&(a=Za(a),!a&&Jn(e))?xn(pn(e),0,d):e.split(a,d)):[]}var dc=tt(function(e,a,d){return e+(d?" ":"")+hi(a)});function uc(e,a,d){return e=sa(e),d=d==null?0:Wn(qe(d),0,e.length),a=Za(a),e.slice(d,d+a.length)==a}function fc(e,a,d){var N=R.templateSettings;d&&Fa(e,a,d)&&(a=t),e=sa(e),a=ur({},a,N,ao);var E=ur({},a.imports,N.imports,ao),j=Da(E),z=Sr(E,j),$,Z,le=0,ue=a.interpolate||ot,he="__p += '",be=Tr((a.escape||ot).source+"|"+ue.source+"|"+(ue===ee?pa:ot).source+"|"+(a.evaluate||ot).source+"|$","g"),xe="//# sourceURL="+(la.call(a,"sourceURL")?(a.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Ip+"]")+`
`;e.replace(be,function(Fe,Je,Qe,Va,Ua,Xa){return Qe||(Qe=Va),he+=e.slice(le,Xa).replace(qn,Fp),Je&&($=!0,he+=`' +
__e(`+Je+`) +
'`),Ua&&(Z=!0,he+=`';
`+Ua+`;
__p += '`),Qe&&(he+=`' +
((__t = (`+Qe+`)) == null ? '' : __t) +
'`),le=Xa+Fe.length,Fe}),he+=`';
`;var Oe=la.call(a,"variable")&&a.variable;if(!Oe)he=`with (obj) {
`+he+`
}
`;else if(Me.test(Oe))throw new He(r);he=(Z?he.replace(Sn,""):he).replace(jn,"$1").replace(Ma,"$1;"),he="function("+(Oe||"obj")+`) {
`+(Oe?"":`obj || (obj = {});
`)+"var __t, __p = ''"+($?", __e = _.escape":"")+(Z?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+he+`return __p
}`;var Ge=Go(function(){return ra(j,xe+"return "+he).apply(t,z)});if(Ge.source=he,ui(Ge))throw Ge;return Ge}function gc(e){return sa(e).toLowerCase()}function cc(e){return sa(e).toUpperCase()}function hc(e,a,d){if(e=sa(e),e&&(d||a===t))return ns(e);if(!e||!(a=Za(a)))return e;var N=pn(e),E=pn(a),j=ts(N,E),z=rs(N,E)+1;return xn(N,j,z).join("")}function mc(e,a,d){if(e=sa(e),e&&(d||a===t))return e.slice(0,ss(e)+1);if(!e||!(a=Za(a)))return e;var N=pn(e),E=rs(N,pn(a))+1;return xn(N,0,E).join("")}function _c(e,a,d){if(e=sa(e),e&&(d||a===t))return e.replace(ze,"");if(!e||!(a=Za(a)))return e;var N=pn(e),E=ts(N,pn(a));return xn(N,E).join("")}function yc(e,a){var d=w,N=C;if(ya(a)){var E="separator"in a?a.separator:E;d="length"in a?qe(a.length):d,N="omission"in a?Za(a.omission):N}e=sa(e);var j=e.length;if(Jn(e)){var z=pn(e);j=z.length}if(d>=j)return e;var $=d-Vn(N);if($<1)return N;var Z=z?xn(z,0,$).join(""):e.slice(0,$);if(E===t)return Z+N;if(z&&($+=Z.length-$),fi(E)){if(e.slice($).search(E)){var le,ue=Z;for(E.global||(E=Tr(E.source,sa(Na.exec(E))+"g")),E.lastIndex=0;le=E.exec(ue);)var he=le.index;Z=Z.slice(0,he===t?$:he)}}else if(e.indexOf(Za(E),$)!=$){var be=Z.lastIndexOf(E);be>-1&&(Z=Z.slice(0,be))}return Z+N}function kc(e){return e=sa(e),e&&Mn.test(e)?e.replace(Cn,qp):e}var Ic=tt(function(e,a,d){return e+(d?" ":"")+a.toUpperCase()}),hi=Gs("toUpperCase");function qo(e,a,d){return e=sa(e),a=d?t:a,a===t?Wp(e)?Jp(e):Rp(e):e.match(a)||[]}var Go=Ze(function(e,a){try{return qa(e,t,a)}catch(d){return ui(d)?d:new He(d)}}),Ac=An(function(e,a){return en(a,function(d){d=mn(d),kn(e,d,li(e[d],e))}),e});function Nc(e){var a=e==null?0:e.length,d=Ce();return e=a?_a(e,function(N){if(typeof N[1]!="function")throw new an(o);return[d(N[0]),N[1]]}):[],Ze(function(N){for(var E=-1;++E<a;){var j=e[E];if(qa(j[0],this,N))return qa(j[1],this,N)}})}function Pc(e){return ql(tn(e,_))}function mi(e){return function(){return e}}function vc(e,a){return e==null||e!==e?a:e}var bc=Js(),Sc=Js(!0);function $a(e){return e}function _i(e){return Ss(typeof e=="function"?e:tn(e,_))}function Bc(e){return Ts(tn(e,_))}function Tc(e,a){return Es(e,tn(a,_))}var Ec=Ze(function(e,a){return function(d){return _t(d,e,a)}}),Dc=Ze(function(e,a){return function(d){return _t(e,d,a)}});function yi(e,a,d){var N=Da(a),E=$t(a,N);d==null&&!(ya(a)&&(E.length||!N.length))&&(d=a,a=e,e=this,E=$t(a,Da(a)));var j=!(ya(d)&&"chain"in d)||!!d.chain,z=Pn(e);return en(E,function($){var Z=a[$];e[$]=Z,z&&(e.prototype[$]=function(){var le=this.__chain__;if(j||le){var ue=e(this.__wrapped__),he=ue.__actions__=za(this.__actions__);return he.push({func:Z,args:arguments,thisArg:e}),ue.__chain__=le,ue}return Z.apply(e,Tn([this.value()],arguments))})}),e}function wc(){return La._===this&&(La._=nl),this}function ki(){}function Lc(e){return e=qe(e),Ze(function(a){return Ds(a,e)})}var Rc=Jr(_a),xc=Jr(Vi),Kc=Jr(Ar);function Zo(e){return ti(e)?Nr(mn(e)):dd(e)}function jc(e){return function(a){return e==null?t:zn(e,a)}}var Cc=Xs(),Mc=Xs(!0);function Ii(){return[]}function Ai(){return!1}function Oc(){return{}}function Fc(){return""}function Uc(){return!0}function Wc(e,a){if(e=qe(e),e<1||e>W)return[];var d=de,N=Ka(e,de);a=Ce(a),e-=de;for(var E=br(N,a);++d<e;)a(d);return E}function zc(e){return Ye(e)?_a(e,mn):Ja(e)?[e]:za(ho(sa(e)))}function Hc(e){var a=++el;return sa(e)+a}var Yc=Xt(function(e,a){return e+a},0),$c=Vr("ceil"),qc=Xt(function(e,a){return e/a},1),Gc=Vr("floor");function Zc(e){return e&&e.length?Yt(e,$a,jr):t}function Jc(e,a){return e&&e.length?Yt(e,Ce(a,2),jr):t}function Vc(e){return es(e,$a)}function Xc(e,a){return es(e,Ce(a,2))}function Qc(e){return e&&e.length?Yt(e,$a,Fr):t}function eh(e,a){return e&&e.length?Yt(e,Ce(a,2),Fr):t}var ah=Xt(function(e,a){return e*a},1),nh=Vr("round"),th=Xt(function(e,a){return e-a},0);function rh(e){return e&&e.length?vr(e,$a):0}function ih(e,a){return e&&e.length?vr(e,Ce(a,2)):0}return R.after=Bf,R.ary=So,R.assign=cg,R.assignIn=Fo,R.assignInWith=ur,R.assignWith=hg,R.at=mg,R.before=Bo,R.bind=li,R.bindAll=Ac,R.bindKey=To,R.castArray=Of,R.chain=Po,R.chunk=qd,R.compact=Gd,R.concat=Zd,R.cond=Nc,R.conforms=Pc,R.constant=mi,R.countBy=tf,R.create=_g,R.curry=Eo,R.curryRight=Do,R.debounce=wo,R.defaults=yg,R.defaultsDeep=kg,R.defer=Tf,R.delay=Ef,R.difference=Jd,R.differenceBy=Vd,R.differenceWith=Xd,R.drop=Qd,R.dropRight=eu,R.dropRightWhile=au,R.dropWhile=nu,R.fill=tu,R.filter=sf,R.flatMap=lf,R.flatMapDeep=df,R.flatMapDepth=uf,R.flatten=ko,R.flattenDeep=ru,R.flattenDepth=iu,R.flip=Df,R.flow=bc,R.flowRight=Sc,R.fromPairs=su,R.functions=Sg,R.functionsIn=Bg,R.groupBy=ff,R.initial=pu,R.intersection=lu,R.intersectionBy=du,R.intersectionWith=uu,R.invert=Eg,R.invertBy=Dg,R.invokeMap=cf,R.iteratee=_i,R.keyBy=hf,R.keys=Da,R.keysIn=Ya,R.map=ir,R.mapKeys=Lg,R.mapValues=Rg,R.matches=Bc,R.matchesProperty=Tc,R.memoize=or,R.merge=xg,R.mergeWith=Uo,R.method=Ec,R.methodOf=Dc,R.mixin=yi,R.negate=pr,R.nthArg=Lc,R.omit=Kg,R.omitBy=jg,R.once=wf,R.orderBy=mf,R.over=Rc,R.overArgs=Lf,R.overEvery=xc,R.overSome=Kc,R.partial=di,R.partialRight=Lo,R.partition=_f,R.pick=Cg,R.pickBy=Wo,R.property=Zo,R.propertyOf=jc,R.pull=hu,R.pullAll=Ao,R.pullAllBy=mu,R.pullAllWith=_u,R.pullAt=yu,R.range=Cc,R.rangeRight=Mc,R.rearg=Rf,R.reject=If,R.remove=ku,R.rest=xf,R.reverse=oi,R.sampleSize=Nf,R.set=Og,R.setWith=Fg,R.shuffle=Pf,R.slice=Iu,R.sortBy=Sf,R.sortedUniq=Bu,R.sortedUniqBy=Tu,R.split=lc,R.spread=Kf,R.tail=Eu,R.take=Du,R.takeRight=wu,R.takeRightWhile=Lu,R.takeWhile=Ru,R.tap=Gu,R.throttle=jf,R.thru=rr,R.toArray=Co,R.toPairs=zo,R.toPairsIn=Ho,R.toPath=zc,R.toPlainObject=Oo,R.transform=Ug,R.unary=Cf,R.union=xu,R.unionBy=Ku,R.unionWith=ju,R.uniq=Cu,R.uniqBy=Mu,R.uniqWith=Ou,R.unset=Wg,R.unzip=pi,R.unzipWith=No,R.update=zg,R.updateWith=Hg,R.values=st,R.valuesIn=Yg,R.without=Fu,R.words=qo,R.wrap=Mf,R.xor=Uu,R.xorBy=Wu,R.xorWith=zu,R.zip=Hu,R.zipObject=Yu,R.zipObjectDeep=$u,R.zipWith=qu,R.entries=zo,R.entriesIn=Ho,R.extend=Fo,R.extendWith=ur,yi(R,R),R.add=Yc,R.attempt=Go,R.camelCase=Zg,R.capitalize=Yo,R.ceil=$c,R.clamp=$g,R.clone=Ff,R.cloneDeep=Wf,R.cloneDeepWith=zf,R.cloneWith=Uf,R.conformsTo=Hf,R.deburr=$o,R.defaultTo=vc,R.divide=qc,R.endsWith=Jg,R.eq=dn,R.escape=Vg,R.escapeRegExp=Xg,R.every=rf,R.find=of,R.findIndex=_o,R.findKey=Ig,R.findLast=pf,R.findLastIndex=yo,R.findLastKey=Ag,R.floor=Gc,R.forEach=vo,R.forEachRight=bo,R.forIn=Ng,R.forInRight=Pg,R.forOwn=vg,R.forOwnRight=bg,R.get=gi,R.gt=Yf,R.gte=$f,R.has=Tg,R.hasIn=ci,R.head=Io,R.identity=$a,R.includes=gf,R.indexOf=ou,R.inRange=qg,R.invoke=wg,R.isArguments=$n,R.isArray=Ye,R.isArrayBuffer=qf,R.isArrayLike=Ha,R.isArrayLikeObject=va,R.isBoolean=Gf,R.isBuffer=Kn,R.isDate=Zf,R.isElement=Jf,R.isEmpty=Vf,R.isEqual=Xf,R.isEqualWith=Qf,R.isError=ui,R.isFinite=eg,R.isFunction=Pn,R.isInteger=Ro,R.isLength=lr,R.isMap=xo,R.isMatch=ag,R.isMatchWith=ng,R.isNaN=tg,R.isNative=rg,R.isNil=sg,R.isNull=ig,R.isNumber=Ko,R.isObject=ya,R.isObjectLike=Pa,R.isPlainObject=Pt,R.isRegExp=fi,R.isSafeInteger=og,R.isSet=jo,R.isString=dr,R.isSymbol=Ja,R.isTypedArray=it,R.isUndefined=pg,R.isWeakMap=lg,R.isWeakSet=dg,R.join=fu,R.kebabCase=Qg,R.last=sn,R.lastIndexOf=gu,R.lowerCase=ec,R.lowerFirst=ac,R.lt=ug,R.lte=fg,R.max=Zc,R.maxBy=Jc,R.mean=Vc,R.meanBy=Xc,R.min=Qc,R.minBy=eh,R.stubArray=Ii,R.stubFalse=Ai,R.stubObject=Oc,R.stubString=Fc,R.stubTrue=Uc,R.multiply=ah,R.nth=cu,R.noConflict=wc,R.noop=ki,R.now=sr,R.pad=nc,R.padEnd=tc,R.padStart=rc,R.parseInt=ic,R.random=Gg,R.reduce=yf,R.reduceRight=kf,R.repeat=sc,R.replace=oc,R.result=Mg,R.round=nh,R.runInContext=G,R.sample=Af,R.size=vf,R.snakeCase=pc,R.some=bf,R.sortedIndex=Au,R.sortedIndexBy=Nu,R.sortedIndexOf=Pu,R.sortedLastIndex=vu,R.sortedLastIndexBy=bu,R.sortedLastIndexOf=Su,R.startCase=dc,R.startsWith=uc,R.subtract=th,R.sum=rh,R.sumBy=ih,R.template=fc,R.times=Wc,R.toFinite=vn,R.toInteger=qe,R.toLength=Mo,R.toLower=gc,R.toNumber=on,R.toSafeInteger=gg,R.toString=sa,R.toUpper=cc,R.trim=hc,R.trimEnd=mc,R.trimStart=_c,R.truncate=yc,R.unescape=kc,R.uniqueId=Hc,R.upperCase=Ic,R.upperFirst=hi,R.each=vo,R.eachRight=bo,R.first=Io,yi(R,function(){var e={};return cn(R,function(a,d){la.call(R.prototype,d)||(e[d]=a)}),e}(),{chain:!1}),R.VERSION=n,en(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){R[e].placeholder=R}),en(["drop","take"],function(e,a){Xe.prototype[e]=function(d){d=d===t?1:Ta(qe(d),0);var N=this.__filtered__&&!a?new Xe(this):this.clone();return N.__filtered__?N.__takeCount__=Ka(d,N.__takeCount__):N.__views__.push({size:Ka(d,de),type:e+(N.__dir__<0?"Right":"")}),N},Xe.prototype[e+"Right"]=function(d){return this.reverse()[e](d).reverse()}}),en(["filter","map","takeWhile"],function(e,a){var d=a+1,N=d==x||d==M;Xe.prototype[e]=function(E){var j=this.clone();return j.__iteratees__.push({iteratee:Ce(E,3),type:d}),j.__filtered__=j.__filtered__||N,j}}),en(["head","last"],function(e,a){var d="take"+(a?"Right":"");Xe.prototype[e]=function(){return this[d](1).value()[0]}}),en(["initial","tail"],function(e,a){var d="drop"+(a?"":"Right");Xe.prototype[e]=function(){return this.__filtered__?new Xe(this):this[d](1)}}),Xe.prototype.compact=function(){return this.filter($a)},Xe.prototype.find=function(e){return this.filter(e).head()},Xe.prototype.findLast=function(e){return this.reverse().find(e)},Xe.prototype.invokeMap=Ze(function(e,a){return typeof e=="function"?new Xe(this):this.map(function(d){return _t(d,e,a)})}),Xe.prototype.reject=function(e){return this.filter(pr(Ce(e)))},Xe.prototype.slice=function(e,a){e=qe(e);var d=this;return d.__filtered__&&(e>0||a<0)?new Xe(d):(e<0?d=d.takeRight(-e):e&&(d=d.drop(e)),a!==t&&(a=qe(a),d=a<0?d.dropRight(-a):d.take(a-e)),d)},Xe.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Xe.prototype.toArray=function(){return this.take(de)},cn(Xe.prototype,function(e,a){var d=/^(?:filter|find|map|reject)|While$/.test(a),N=/^(?:head|last)$/.test(a),E=R[N?"take"+(a=="last"?"Right":""):a],j=N||/^find/.test(a);E&&(R.prototype[a]=function(){var z=this.__wrapped__,$=N?[1]:arguments,Z=z instanceof Xe,le=$[0],ue=Z||Ye(z),he=function(Je){var Qe=E.apply(R,Tn([Je],$));return N&&be?Qe[0]:Qe};ue&&d&&typeof le=="function"&&le.length!=1&&(Z=ue=!1);var be=this.__chain__,xe=!!this.__actions__.length,Oe=j&&!be,Ge=Z&&!xe;if(!j&&ue){z=Ge?z:new Xe(this);var Fe=e.apply(z,$);return Fe.__actions__.push({func:rr,args:[he],thisArg:t}),new nn(Fe,be)}return Oe&&Ge?e.apply(this,$):(Fe=this.thru(he),Oe?N?Fe.value()[0]:Fe.value():Fe)})}),en(["pop","push","shift","sort","splice","unshift"],function(e){var a=Dt[e],d=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",N=/^(?:pop|shift)$/.test(e);R.prototype[e]=function(){var E=arguments;if(N&&!this.__chain__){var j=this.value();return a.apply(Ye(j)?j:[],E)}return this[d](function(z){return a.apply(Ye(z)?z:[],E)})}}),cn(Xe.prototype,function(e,a){var d=R[a];if(d){var N=d.name+"";la.call(et,N)||(et[N]=[]),et[N].push({name:a,func:d})}}),et[Vt(t,b).name]=[{name:"wrapper",func:t}],Xe.prototype.clone=yl,Xe.prototype.reverse=kl,Xe.prototype.value=Il,R.prototype.at=Zu,R.prototype.chain=Ju,R.prototype.commit=Vu,R.prototype.next=Xu,R.prototype.plant=ef,R.prototype.reverse=af,R.prototype.toJSON=R.prototype.valueOf=R.prototype.value=nf,R.prototype.first=R.prototype.head,dt&&(R.prototype[dt]=Qu),R},Et=Vp();La._=Et,u=function(){return Et}.call(h,i,h,v),u!==t&&(v.exports=u)}).call(this)},4701:(v,h,i)=>{"use strict";const u=i(96),t=Symbol("max"),n=Symbol("length"),l=Symbol("lengthCalculator"),g=Symbol("allowStale"),o=Symbol("maxAge"),r=Symbol("dispose"),p=Symbol("noDisposeOnSet"),m=Symbol("lruList"),s=Symbol("cache"),_=Symbol("updateAgeOnGet"),c=()=>1;class f{constructor(T){if(typeof T=="number"&&(T={max:T}),T||(T={}),T.max&&(typeof T.max!="number"||T.max<0))throw new TypeError("max must be a non-negative number");const K=this[t]=T.max||1/0,L=T.length||c;if(this[l]=typeof L!="function"?c:L,this[g]=T.stale||!1,T.maxAge&&typeof T.maxAge!="number")throw new TypeError("maxAge must be a number");this[o]=T.maxAge||0,this[r]=T.dispose,this[p]=T.noDisposeOnSet||!1,this[_]=T.updateAgeOnGet||!1,this.reset()}set max(T){if(typeof T!="number"||T<0)throw new TypeError("max must be a non-negative number");this[t]=T||1/0,A(this)}get max(){return this[t]}set allowStale(T){this[g]=!!T}get allowStale(){return this[g]}set maxAge(T){if(typeof T!="number")throw new TypeError("maxAge must be a non-negative number");this[o]=T,A(this)}get maxAge(){return this[o]}set lengthCalculator(T){typeof T!="function"&&(T=c),T!==this[l]&&(this[l]=T,this[n]=0,this[m].forEach(K=>{K.length=this[l](K.value,K.key),this[n]+=K.length})),A(this)}get lengthCalculator(){return this[l]}get length(){return this[n]}get itemCount(){return this[m].length}rforEach(T,K){K=K||this;for(let L=this[m].tail;L!==null;){const D=L.prev;P(this,T,L,K),L=D}}forEach(T,K){K=K||this;for(let L=this[m].head;L!==null;){const D=L.next;P(this,T,L,K),L=D}}keys(){return this[m].toArray().map(T=>T.key)}values(){return this[m].toArray().map(T=>T.value)}reset(){this[r]&&this[m]&&this[m].length&&this[m].forEach(T=>this[r](T.key,T.value)),this[s]=new Map,this[m]=new u,this[n]=0}dump(){return this[m].map(T=>y(this,T)?!1:{k:T.key,v:T.value,e:T.now+(T.maxAge||0)}).toArray().filter(T=>T)}dumpLru(){return this[m]}set(T,K,L){if(L=L||this[o],L&&typeof L!="number")throw new TypeError("maxAge must be a number");const D=L?Date.now():0,S=this[l](K,T);if(this[s].has(T)){if(S>this[t])return b(this,this[s].get(T)),!1;const F=this[s].get(T).value;return this[r]&&(this[p]||this[r](T,F.value)),F.now=D,F.maxAge=L,F.value=K,this[n]+=S-F.length,F.length=S,this.get(T),A(this),!0}const w=new I(T,K,S,D,L);return w.length>this[t]?(this[r]&&this[r](T,K),!1):(this[n]+=w.length,this[m].unshift(w),this[s].set(T,this[m].head),A(this),!0)}has(T){if(!this[s].has(T))return!1;const K=this[s].get(T).value;return!y(this,K)}get(T){return k(this,T,!0)}peek(T){return k(this,T,!1)}pop(){const T=this[m].tail;return T?(b(this,T),T.value):null}del(T){b(this,this[s].get(T))}load(T){this.reset();const K=Date.now();for(let L=T.length-1;L>=0;L--){const D=T[L],S=D.e||0;if(S===0)this.set(D.k,D.v);else{const w=S-K;w>0&&this.set(D.k,D.v,w)}}}prune(){this[s].forEach((T,K)=>k(this,K,!1))}}const k=(B,T,K)=>{const L=B[s].get(T);if(L){const D=L.value;if(y(B,D)){if(b(B,L),!B[g])return}else K&&(B[_]&&(L.value.now=Date.now()),B[m].unshiftNode(L));return D.value}},y=(B,T)=>{if(!T||!T.maxAge&&!B[o])return!1;const K=Date.now()-T.now;return T.maxAge?K>T.maxAge:B[o]&&K>B[o]},A=B=>{if(B[n]>B[t])for(let T=B[m].tail;B[n]>B[t]&&T!==null;){const K=T.prev;b(B,T),T=K}},b=(B,T)=>{if(T){const K=T.value;B[r]&&B[r](K.key,K.value),B[n]-=K.length,B[s].delete(K.key),B[m].removeNode(T)}};class I{constructor(T,K,L,D,S){this.key=T,this.value=K,this.length=L,this.now=D,this.maxAge=S||0}}const P=(B,T,K,L)=>{let D=K.value;y(B,D)&&(b(B,K),B[g]||(D=void 0)),D&&T.call(L,D.value,D.key,B)};v.exports=f},6487:()=>{(function(v){var h="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",i={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},u={bash:i,environment:{pattern:RegExp("\\$"+h),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+h),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};v.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+h),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:u},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:i}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:u},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:u.entity}}],environment:{pattern:RegExp("\\$?"+h),alias:"constant"},variable:u.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},i.inside=v.languages.bash;for(var t=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],n=u.variable[1].inside,l=0;l<t.length;l++)n[t[l]]=v.languages.bash[t[l]];v.languages.sh=v.languages.bash,v.languages.shell=v.languages.bash})(Prism)},4138:()=>{(function(v){v.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d.*$/m]};var h={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(h).forEach(function(i){var u=h[i],t=[];/^\w+$/.test(i)||t.push(/\w+/.exec(i)[0]),i==="diff"&&t.push("bold"),v.languages.diff[i]={pattern:RegExp("^(?:["+u+`].*(?:\r
?|
|(?![\\s\\S])))+`,"m"),alias:t,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec(i)[0]}}}}),Object.defineProperty(v.languages.diff,"PREFIXES",{value:h})})(Prism)},7628:()=>{(function(v){function h(r){return RegExp("(^(?:"+r+"):[ 	]*(?![ 	]))[^]+","i")}v.languages.http={"request-line":{pattern:/^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,inside:{method:{pattern:/^[A-Z]+\b/,alias:"property"},"request-target":{pattern:/^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,lookbehind:!0,alias:"url",inside:v.languages.uri},"http-version":{pattern:/^(\s)HTTP\/[\d.]+/,lookbehind:!0,alias:"property"}}},"response-status":{pattern:/^HTTP\/[\d.]+ \d+ .+/m,inside:{"http-version":{pattern:/^HTTP\/[\d.]+/,alias:"property"},"status-code":{pattern:/^(\s)\d+(?=\s)/,lookbehind:!0,alias:"number"},"reason-phrase":{pattern:/^(\s).+/,lookbehind:!0,alias:"string"}}},header:{pattern:/^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,inside:{"header-value":[{pattern:h(/Content-Security-Policy/.source),lookbehind:!0,alias:["csp","languages-csp"],inside:v.languages.csp},{pattern:h(/Public-Key-Pins(?:-Report-Only)?/.source),lookbehind:!0,alias:["hpkp","languages-hpkp"],inside:v.languages.hpkp},{pattern:h(/Strict-Transport-Security/.source),lookbehind:!0,alias:["hsts","languages-hsts"],inside:v.languages.hsts},{pattern:h(/[^:]+/.source),lookbehind:!0}],"header-name":{pattern:/^[^:]+/,alias:"keyword"},punctuation:/^:/}}};var i=v.languages,u={"application/javascript":i.javascript,"application/json":i.json||i.javascript,"application/xml":i.xml,"text/xml":i.xml,"text/html":i.html,"text/css":i.css,"text/plain":i.plain},t={"application/json":!0,"application/xml":!0};function n(r){var p=r.replace(/^[a-z]+\//,""),m="\\w+/(?:[\\w.-]+\\+)+"+p+"(?![+\\w.-])";return"(?:"+r+"|"+m+")"}var l;for(var g in u)if(u[g]){l=l||{};var o=t[g]?n(g):g;l[g.replace(/\//g,"-")]={pattern:RegExp("("+/content-type:\s*/.source+o+/(?:(?:\r\n?|\n)[\w-].*)*(?:\r(?:\n|(?!\n))|\n)/.source+")"+/[^ \t\w-][\s\S]*/.source,"i"),lookbehind:!0,inside:u[g]}}l&&v.languages.insertBefore("http","header",l)})(Prism)},790:()=>{Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json},4918:()=>{Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python},8647:()=>{(function(){if(typeof Prism=="undefined"||typeof document=="undefined")return;if(!Prism.plugins.toolbar){console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.");return}function v(n,l){n.addEventListener("click",function(){i(l)})}function h(n){var l=document.createElement("textarea");l.value=n.getText(),l.style.top="0",l.style.left="0",l.style.position="fixed",document.body.appendChild(l),l.focus(),l.select();try{var g=document.execCommand("copy");setTimeout(function(){g?n.success():n.error()},1)}catch(o){setTimeout(function(){n.error(o)},1)}document.body.removeChild(l)}function i(n){navigator.clipboard?navigator.clipboard.writeText(n.getText()).then(n.success,function(){h(n)}):h(n)}function u(n){window.getSelection().selectAllChildren(n)}function t(n){var l={copy:"Copy","copy-error":"Press Ctrl+C to copy","copy-success":"Copied!","copy-timeout":5e3},g="data-prismjs-";for(var o in l){for(var r=g+o,p=n;p&&!p.hasAttribute(r);)p=p.parentElement;p&&(l[o]=p.getAttribute(r))}return l}Prism.plugins.toolbar.registerButton("copy-to-clipboard",function(n){var l=n.element,g=t(l),o=document.createElement("button");o.className="copy-to-clipboard-button",o.setAttribute("type","button");var r=document.createElement("span");return o.appendChild(r),m("copy"),v(o,{getText:function(){return l.textContent},success:function(){m("copy-success"),p()},error:function(){m("copy-error"),setTimeout(function(){u(l)},1),p()}}),o;function p(){setTimeout(function(){m("copy")},g["copy-timeout"])}function m(s){r.textContent=g[s],o.setAttribute("data-copy-state",s)}})})()},6500:()=>{(function(){if(typeof Prism!="undefined"){var v=/^diff-([\w-]+)/i,h=/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/g,i=RegExp(/(?:__|[^\r\n<])*(?:\r\n?|\n|(?:__|[^\r\n<])(?![^\r\n]))/.source.replace(/__/g,function(){return h.source}),"gi"),u=!1;Prism.hooks.add("before-sanity-check",function(t){var n=t.language;v.test(n)&&!t.grammar&&(t.grammar=Prism.languages[n]=Prism.languages.diff)}),Prism.hooks.add("before-tokenize",function(t){!u&&!Prism.languages.diff&&!Prism.plugins.autoloader&&(u=!0,console.warn("Prism's Diff Highlight plugin requires the Diff language definition (prism-diff.js).Make sure the language definition is loaded or use Prism's Autoloader plugin."));var n=t.language;v.test(n)&&!Prism.languages[n]&&(Prism.languages[n]=Prism.languages.diff)}),Prism.hooks.add("wrap",function(t){var n,l;if(t.language!=="diff"){var g=v.exec(t.language);if(!g)return;n=g[1],l=Prism.languages[n]}var o=Prism.languages.diff&&Prism.languages.diff.PREFIXES;if(o&&t.type in o){var r=t.content.replace(h,""),p=r.replace(/&lt;/g,"<").replace(/&amp;/g,"&"),m=p.replace(/(^|[\r\n])./g,"$1"),s;l?s=Prism.highlight(m,l,n):s=Prism.util.encode(m);var _=new Prism.Token("prefix",o[t.type],[/\w+/.exec(t.type)[0]]),c=Prism.Token.stringify(_,t.language),f=[],k;for(i.lastIndex=0;k=i.exec(s);)f.push(c+k[0]);/(?:^|[\r\n]).$/.test(p)&&f.push(c),t.content=f.join(""),l&&t.classes.push("language-"+n)}})}})()},5241:()=>{(function(){if(typeof Prism=="undefined"||typeof document=="undefined")return;var v=[],h={},i=function(){};Prism.plugins.toolbar={};var u=Prism.plugins.toolbar.registerButton=function(l,g){var o;if(typeof g=="function"?o=g:o=function(r){var p;return typeof g.onClick=="function"?(p=document.createElement("button"),p.type="button",p.addEventListener("click",function(){g.onClick.call(this,r)})):typeof g.url=="string"?(p=document.createElement("a"),p.href=g.url):p=document.createElement("span"),g.className&&p.classList.add(g.className),p.textContent=g.text,p},l in h){console.warn('There is a button with the key "'+l+'" registered already.');return}v.push(h[l]=o)};function t(l){for(;l;){var g=l.getAttribute("data-toolbar-order");if(g!=null)return g=g.trim(),g.length?g.split(/\s*,\s*/g):[];l=l.parentElement}}var n=Prism.plugins.toolbar.hook=function(l){var g=l.element.parentNode;if(!(!g||!/pre/i.test(g.nodeName))&&!g.parentNode.classList.contains("code-toolbar")){var o=document.createElement("div");o.classList.add("code-toolbar"),g.parentNode.insertBefore(o,g),o.appendChild(g);var r=document.createElement("div");r.classList.add("toolbar");var p=v,m=t(l.element);m&&(p=m.map(function(s){return h[s]||i})),p.forEach(function(s){var _=s(l);if(_){var c=document.createElement("div");c.classList.add("toolbar-item"),c.appendChild(_),r.appendChild(c)}}),o.appendChild(r)}};u("label",function(l){var g=l.element.parentNode;if(!(!g||!/pre/i.test(g.nodeName))&&g.hasAttribute("data-label")){var o,r,p=g.getAttribute("data-label");try{r=document.querySelector("template#"+p)}catch(m){}return r?o=r.content:(g.hasAttribute("data-url")?(o=document.createElement("a"),o.href=g.getAttribute("data-url")):o=document.createElement("span"),o.textContent=p),o}}),Prism.hooks.add("complete",n)})()},6032:(v,h,i)=>{var u=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(n){var l=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,g=0,o={},r={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function I(P){return P instanceof p?new p(P.type,I(P.content),P.alias):Array.isArray(P)?P.map(I):P.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(I){return Object.prototype.toString.call(I).slice(8,-1)},objId:function(I){return I.__id||Object.defineProperty(I,"__id",{value:++g}),I.__id},clone:function I(P,B){B=B||{};var T,K;switch(r.util.type(P)){case"Object":if(K=r.util.objId(P),B[K])return B[K];T={},B[K]=T;for(var L in P)P.hasOwnProperty(L)&&(T[L]=I(P[L],B));return T;case"Array":return K=r.util.objId(P),B[K]?B[K]:(T=[],B[K]=T,P.forEach(function(D,S){T[S]=I(D,B)}),T);default:return P}},getLanguage:function(I){for(;I;){var P=l.exec(I.className);if(P)return P[1].toLowerCase();I=I.parentElement}return"none"},setLanguage:function(I,P){I.className=I.className.replace(RegExp(l,"gi"),""),I.classList.add("language-"+P)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(T){var I=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(T.stack)||[])[1];if(I){var P=document.getElementsByTagName("script");for(var B in P)if(P[B].src==I)return P[B]}return null}},isActive:function(I,P,B){for(var T="no-"+P;I;){var K=I.classList;if(K.contains(P))return!0;if(K.contains(T))return!1;I=I.parentElement}return!!B}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(I,P){var B=r.util.clone(r.languages[I]);for(var T in P)B[T]=P[T];return B},insertBefore:function(I,P,B,T){T=T||r.languages;var K=T[I],L={};for(var D in K)if(K.hasOwnProperty(D)){if(D==P)for(var S in B)B.hasOwnProperty(S)&&(L[S]=B[S]);B.hasOwnProperty(D)||(L[D]=K[D])}var w=T[I];return T[I]=L,r.languages.DFS(r.languages,function(C,F){F===w&&C!=I&&(this[C]=L)}),L},DFS:function I(P,B,T,K){K=K||{};var L=r.util.objId;for(var D in P)if(P.hasOwnProperty(D)){B.call(P,D,P[D],T||D);var S=P[D],w=r.util.type(S);w==="Object"&&!K[L(S)]?(K[L(S)]=!0,I(S,B,null,K)):w==="Array"&&!K[L(S)]&&(K[L(S)]=!0,I(S,B,D,K))}}},plugins:{},highlightAll:function(I,P){r.highlightAllUnder(document,I,P)},highlightAllUnder:function(I,P,B){var T={callback:B,container:I,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",T),T.elements=Array.prototype.slice.apply(T.container.querySelectorAll(T.selector)),r.hooks.run("before-all-elements-highlight",T);for(var K=0,L;L=T.elements[K++];)r.highlightElement(L,P===!0,T.callback)},highlightElement:function(I,P,B){var T=r.util.getLanguage(I),K=r.languages[T];r.util.setLanguage(I,T);var L=I.parentElement;L&&L.nodeName.toLowerCase()==="pre"&&r.util.setLanguage(L,T);var D=I.textContent,S={element:I,language:T,grammar:K,code:D};function w(F){S.highlightedCode=F,r.hooks.run("before-insert",S),S.element.innerHTML=S.highlightedCode,r.hooks.run("after-highlight",S),r.hooks.run("complete",S),B&&B.call(S.element)}if(r.hooks.run("before-sanity-check",S),L=S.element.parentElement,L&&L.nodeName.toLowerCase()==="pre"&&!L.hasAttribute("tabindex")&&L.setAttribute("tabindex","0"),!S.code){r.hooks.run("complete",S),B&&B.call(S.element);return}if(r.hooks.run("before-highlight",S),!S.grammar){w(r.util.encode(S.code));return}if(P&&n.Worker){var C=new Worker(r.filename);C.onmessage=function(F){w(F.data)},C.postMessage(JSON.stringify({language:S.language,code:S.code,immediateClose:!0}))}else w(r.highlight(S.code,S.grammar,S.language))},highlight:function(I,P,B){var T={code:I,grammar:P,language:B};if(r.hooks.run("before-tokenize",T),!T.grammar)throw new Error('The language "'+T.language+'" has no grammar.');return T.tokens=r.tokenize(T.code,T.grammar),r.hooks.run("after-tokenize",T),p.stringify(r.util.encode(T.tokens),T.language)},tokenize:function(I,P){var B=P.rest;if(B){for(var T in B)P[T]=B[T];delete P.rest}var K=new _;return c(K,K.head,I),s(I,K,P,K.head,0),k(K)},hooks:{all:{},add:function(I,P){var B=r.hooks.all;B[I]=B[I]||[],B[I].push(P)},run:function(I,P){var B=r.hooks.all[I];if(!(!B||!B.length))for(var T=0,K;K=B[T++];)K(P)}},Token:p};n.Prism=r;function p(I,P,B,T){this.type=I,this.content=P,this.alias=B,this.length=(T||"").length|0}p.stringify=function I(P,B){if(typeof P=="string")return P;if(Array.isArray(P)){var T="";return P.forEach(function(w){T+=I(w,B)}),T}var K={type:P.type,content:I(P.content,B),tag:"span",classes:["token",P.type],attributes:{},language:B},L=P.alias;L&&(Array.isArray(L)?Array.prototype.push.apply(K.classes,L):K.classes.push(L)),r.hooks.run("wrap",K);var D="";for(var S in K.attributes)D+=" "+S+'="'+(K.attributes[S]||"").replace(/"/g,"&quot;")+'"';return"<"+K.tag+' class="'+K.classes.join(" ")+'"'+D+">"+K.content+"</"+K.tag+">"};function m(I,P,B,T){I.lastIndex=P;var K=I.exec(B);if(K&&T&&K[1]){var L=K[1].length;K.index+=L,K[0]=K[0].slice(L)}return K}function s(I,P,B,T,K,L){for(var D in B)if(!(!B.hasOwnProperty(D)||!B[D])){var S=B[D];S=Array.isArray(S)?S:[S];for(var w=0;w<S.length;++w){if(L&&L.cause==D+","+w)return;var C=S[w],F=C.inside,H=!!C.lookbehind,x=!!C.greedy,O=C.alias;if(x&&!C.pattern.global){var M=C.pattern.toString().match(/[imsuy]*$/)[0];C.pattern=RegExp(C.pattern.source,M+"g")}for(var Y=C.pattern||C,W=T.next,X=K;W!==P.tail&&!(L&&X>=L.reach);X+=W.value.length,W=W.next){var re=W.value;if(P.length>I.length)return;if(!(re instanceof p)){var de=1,J;if(x){if(J=m(Y,X,I,H),!J||J.index>=I.length)break;var Ve=J.index,ke=J.index+J[0].length,Ie=X;for(Ie+=W.value.length;Ve>=Ie;)W=W.next,Ie+=W.value.length;if(Ie-=W.value.length,X=Ie,W.value instanceof p)continue;for(var Ne=W;Ne!==P.tail&&(Ie<ke||typeof Ne.value=="string");Ne=Ne.next)de++,Ie+=Ne.value.length;de--,re=I.slice(X,Ie),J.index-=X}else if(J=m(Y,0,re,H),!J)continue;var Ve=J.index,fa=J[0],ka=re.slice(0,Ve),Ia=re.slice(Ve+fa.length),Ea=X+re.length;L&&Ea>L.reach&&(L.reach=Ea);var fe=W.prev;ka&&(fe=c(P,fe,ka),X+=ka.length),f(P,fe,de);var Te=new p(D,F?r.tokenize(fa,F):fa,O,fa);if(W=c(P,fe,Te),Ia&&c(P,W,Ia),de>1){var Ae={cause:D+","+w,reach:Ea};s(I,P,B,W.prev,X,Ae),L&&Ae.reach>L.reach&&(L.reach=Ae.reach)}}}}}}function _(){var I={value:null,prev:null,next:null},P={value:null,prev:I,next:null};I.next=P,this.head=I,this.tail=P,this.length=0}function c(I,P,B){var T=P.next,K={value:B,prev:P,next:T};return P.next=K,T.prev=K,I.length++,K}function f(I,P,B){for(var T=P.next,K=0;K<B&&T!==I.tail;K++)T=T.next;P.next=T,T.prev=P,I.length-=K}function k(I){for(var P=[],B=I.head.next;B!==I.tail;)P.push(B.value),B=B.next;return P}if(!n.document)return n.addEventListener&&(r.disableWorkerMessageHandler||n.addEventListener("message",function(I){var P=JSON.parse(I.data),B=P.language,T=P.code,K=P.immediateClose;n.postMessage(r.highlight(T,r.languages[B],B)),K&&n.close()},!1)),r;var y=r.util.currentScript();y&&(r.filename=y.src,y.hasAttribute("data-manual")&&(r.manual=!0));function A(){r.manual||r.highlightAll()}if(!r.manual){var b=document.readyState;b==="loading"||b==="interactive"&&y&&y.defer?document.addEventListener("DOMContentLoaded",A):window.requestAnimationFrame?window.requestAnimationFrame(A):window.setTimeout(A,16)}return r}(u);v.exports&&(v.exports=t),typeof i.g!="undefined"&&(i.g.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(l,g){var o={};o["language-"+g]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[g]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};r["language-"+g]={pattern:/[\s\S]+/,inside:t.languages[g]};var p={};p[l]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return l}),"i"),lookbehind:!0,greedy:!0,inside:r},t.languages.insertBefore("markup","cdata",p)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(n,l){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[l,"language-"+l],inside:t.languages[l]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(n){var l=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+l.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+l.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+l.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+l.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:l,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},n.languages.css.atrule.inside.rest=n.languages.css;var g=n.languages.markup;g&&(g.tag.addInlined("style","css"),g.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t=="undefined"||typeof document=="undefined")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var n="Loading\u2026",l=function(y,A){return"\u2716 Error "+y+" while fetching file: "+A},g="\u2716 Error: File does not exist or is empty",o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},r="data-src-status",p="loading",m="loaded",s="failed",_="pre[data-src]:not(["+r+'="'+m+'"]):not(['+r+'="'+p+'"])';function c(y,A,b){var I=new XMLHttpRequest;I.open("GET",y,!0),I.onreadystatechange=function(){I.readyState==4&&(I.status<400&&I.responseText?A(I.responseText):I.status>=400?b(l(I.status,I.statusText)):b(g))},I.send(null)}function f(y){var A=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(y||"");if(A){var b=Number(A[1]),I=A[2],P=A[3];return I?P?[b,Number(P)]:[b,void 0]:[b,b]}}t.hooks.add("before-highlightall",function(y){y.selector+=", "+_}),t.hooks.add("before-sanity-check",function(y){var A=y.element;if(A.matches(_)){y.code="",A.setAttribute(r,p);var b=A.appendChild(document.createElement("CODE"));b.textContent=n;var I=A.getAttribute("data-src"),P=y.language;if(P==="none"){var B=(/\.(\w+)$/.exec(I)||[,"none"])[1];P=o[B]||B}t.util.setLanguage(b,P),t.util.setLanguage(A,P);var T=t.plugins.autoloader;T&&T.loadLanguages(P),c(I,function(K){A.setAttribute(r,m);var L=f(A.getAttribute("data-range"));if(L){var D=K.split(/\r\n?|\n/g),S=L[0],w=L[1]==null?D.length:L[1];S<0&&(S+=D.length),S=Math.max(0,Math.min(S-1,D.length)),w<0&&(w+=D.length),w=Math.max(0,Math.min(w,D.length)),K=D.slice(S,w).join(`
`),A.hasAttribute("data-start")||A.setAttribute("data-start",String(S+1))}b.textContent=K,t.highlightElement(b)},function(K){A.setAttribute(r,s),b.textContent=K})}}),t.plugins.fileHighlight={highlight:function(A){for(var b=(A||document).querySelectorAll(_),I=0,P;P=b[I++];)t.highlightElement(P)}};var k=!1;t.fileHighlight=function(){k||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),k=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()},2022:(v,h,i)=>{const u=Symbol("SemVer ANY");class t{static get ANY(){return u}constructor(_,c){if(c=n(c),_ instanceof t){if(_.loose===!!c.loose)return _;_=_.value}_=_.trim().split(/\s+/).join(" "),r("comparator",_,c),this.options=c,this.loose=!!c.loose,this.parse(_),this.semver===u?this.value="":this.value=this.operator+this.semver.version,r("comp",this)}parse(_){const c=this.options.loose?l[g.COMPARATORLOOSE]:l[g.COMPARATOR],f=_.match(c);if(!f)throw new TypeError(`Invalid comparator: ${_}`);this.operator=f[1]!==void 0?f[1]:"",this.operator==="="&&(this.operator=""),f[2]?this.semver=new p(f[2],this.options.loose):this.semver=u}toString(){return this.value}test(_){if(r("Comparator.test",_,this.options.loose),this.semver===u||_===u)return!0;if(typeof _=="string")try{_=new p(_,this.options)}catch(c){return!1}return o(_,this.operator,this.semver,this.options)}intersects(_,c){if(!(_ instanceof t))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new m(_.value,c).test(this.value):_.operator===""?_.value===""?!0:new m(this.value,c).test(_.semver):(c=n(c),c.includePrerelease&&(this.value==="<0.0.0-0"||_.value==="<0.0.0-0")||!c.includePrerelease&&(this.value.startsWith("<0.0.0")||_.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&_.operator.startsWith(">")||this.operator.startsWith("<")&&_.operator.startsWith("<")||this.semver.version===_.semver.version&&this.operator.includes("=")&&_.operator.includes("=")||o(this.semver,"<",_.semver,c)&&this.operator.startsWith(">")&&_.operator.startsWith("<")||o(this.semver,">",_.semver,c)&&this.operator.startsWith("<")&&_.operator.startsWith(">")))}}v.exports=t;const n=i(7879),{safeRe:l,t:g}=i(666),o=i(4766),r=i(1065),p=i(3872),m=i(1608)},1608:(v,h,i)=>{class u{constructor(O,M){if(M=l(M),O instanceof u)return O.loose===!!M.loose&&O.includePrerelease===!!M.includePrerelease?O:new u(O.raw,M);if(O instanceof g)return this.raw=O.value,this.set=[[O]],this.format(),this;if(this.options=M,this.loose=!!M.loose,this.includePrerelease=!!M.includePrerelease,this.raw=O.trim().split(/\s+/).join(" "),this.set=this.raw.split("||").map(Y=>this.parseRange(Y.trim())).filter(Y=>Y.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){const Y=this.set[0];if(this.set=this.set.filter(W=>!y(W[0])),this.set.length===0)this.set=[Y];else if(this.set.length>1){for(const W of this.set)if(W.length===1&&A(W[0])){this.set=[W];break}}}this.format()}format(){return this.range=this.set.map(O=>O.join(" ").trim()).join("||").trim(),this.range}toString(){return this.range}parseRange(O){const Y=((this.options.includePrerelease&&f)|(this.options.loose&&k))+":"+O,W=n.get(Y);if(W)return W;const X=this.options.loose,re=X?p[m.HYPHENRANGELOOSE]:p[m.HYPHENRANGE];O=O.replace(re,F(this.options.includePrerelease)),o("hyphen replace",O),O=O.replace(p[m.COMPARATORTRIM],s),o("comparator trim",O),O=O.replace(p[m.TILDETRIM],_),o("tilde trim",O),O=O.replace(p[m.CARETTRIM],c),o("caret trim",O);let de=O.split(" ").map(Ne=>I(Ne,this.options)).join(" ").split(/\s+/).map(Ne=>C(Ne,this.options));X&&(de=de.filter(Ne=>(o("loose invalid filter",Ne,this.options),!!Ne.match(p[m.COMPARATORLOOSE])))),o("range list",de);const J=new Map,ke=de.map(Ne=>new g(Ne,this.options));for(const Ne of ke){if(y(Ne))return[Ne];J.set(Ne.value,Ne)}J.size>1&&J.has("")&&J.delete("");const Ie=[...J.values()];return n.set(Y,Ie),Ie}intersects(O,M){if(!(O instanceof u))throw new TypeError("a Range is required");return this.set.some(Y=>b(Y,M)&&O.set.some(W=>b(W,M)&&Y.every(X=>W.every(re=>X.intersects(re,M)))))}test(O){if(!O)return!1;if(typeof O=="string")try{O=new r(O,this.options)}catch(M){return!1}for(let M=0;M<this.set.length;M++)if(H(this.set[M],O,this.options))return!0;return!1}}v.exports=u;const t=i(4701),n=new t({max:1e3}),l=i(7879),g=i(2022),o=i(1065),r=i(3872),{safeRe:p,t:m,comparatorTrimReplace:s,tildeTrimReplace:_,caretTrimReplace:c}=i(666),{FLAG_INCLUDE_PRERELEASE:f,FLAG_LOOSE:k}=i(1037),y=x=>x.value==="<0.0.0-0",A=x=>x.value==="",b=(x,O)=>{let M=!0;const Y=x.slice();let W=Y.pop();for(;M&&Y.length;)M=Y.every(X=>W.intersects(X,O)),W=Y.pop();return M},I=(x,O)=>(o("comp",x,O),x=K(x,O),o("caret",x),x=B(x,O),o("tildes",x),x=D(x,O),o("xrange",x),x=w(x,O),o("stars",x),x),P=x=>!x||x.toLowerCase()==="x"||x==="*",B=(x,O)=>x.trim().split(/\s+/).map(M=>T(M,O)).join(" "),T=(x,O)=>{const M=O.loose?p[m.TILDELOOSE]:p[m.TILDE];return x.replace(M,(Y,W,X,re,de)=>{o("tilde",x,Y,W,X,re,de);let J;return P(W)?J="":P(X)?J=`>=${W}.0.0 <${+W+1}.0.0-0`:P(re)?J=`>=${W}.${X}.0 <${W}.${+X+1}.0-0`:de?(o("replaceTilde pr",de),J=`>=${W}.${X}.${re}-${de} <${W}.${+X+1}.0-0`):J=`>=${W}.${X}.${re} <${W}.${+X+1}.0-0`,o("tilde return",J),J})},K=(x,O)=>x.trim().split(/\s+/).map(M=>L(M,O)).join(" "),L=(x,O)=>{o("caret",x,O);const M=O.loose?p[m.CARETLOOSE]:p[m.CARET],Y=O.includePrerelease?"-0":"";return x.replace(M,(W,X,re,de,J)=>{o("caret",x,W,X,re,de,J);let ke;return P(X)?ke="":P(re)?ke=`>=${X}.0.0${Y} <${+X+1}.0.0-0`:P(de)?X==="0"?ke=`>=${X}.${re}.0${Y} <${X}.${+re+1}.0-0`:ke=`>=${X}.${re}.0${Y} <${+X+1}.0.0-0`:J?(o("replaceCaret pr",J),X==="0"?re==="0"?ke=`>=${X}.${re}.${de}-${J} <${X}.${re}.${+de+1}-0`:ke=`>=${X}.${re}.${de}-${J} <${X}.${+re+1}.0-0`:ke=`>=${X}.${re}.${de}-${J} <${+X+1}.0.0-0`):(o("no pr"),X==="0"?re==="0"?ke=`>=${X}.${re}.${de}${Y} <${X}.${re}.${+de+1}-0`:ke=`>=${X}.${re}.${de}${Y} <${X}.${+re+1}.0-0`:ke=`>=${X}.${re}.${de} <${+X+1}.0.0-0`),o("caret return",ke),ke})},D=(x,O)=>(o("replaceXRanges",x,O),x.split(/\s+/).map(M=>S(M,O)).join(" ")),S=(x,O)=>{x=x.trim();const M=O.loose?p[m.XRANGELOOSE]:p[m.XRANGE];return x.replace(M,(Y,W,X,re,de,J)=>{o("xRange",x,Y,W,X,re,de,J);const ke=P(X),Ie=ke||P(re),Ne=Ie||P(de),Ve=Ne;return W==="="&&Ve&&(W=""),J=O.includePrerelease?"-0":"",ke?W===">"||W==="<"?Y="<0.0.0-0":Y="*":W&&Ve?(Ie&&(re=0),de=0,W===">"?(W=">=",Ie?(X=+X+1,re=0,de=0):(re=+re+1,de=0)):W==="<="&&(W="<",Ie?X=+X+1:re=+re+1),W==="<"&&(J="-0"),Y=`${W+X}.${re}.${de}${J}`):Ie?Y=`>=${X}.0.0${J} <${+X+1}.0.0-0`:Ne&&(Y=`>=${X}.${re}.0${J} <${X}.${+re+1}.0-0`),o("xRange return",Y),Y})},w=(x,O)=>(o("replaceStars",x,O),x.trim().replace(p[m.STAR],"")),C=(x,O)=>(o("replaceGTE0",x,O),x.trim().replace(p[O.includePrerelease?m.GTE0PRE:m.GTE0],"")),F=x=>(O,M,Y,W,X,re,de,J,ke,Ie,Ne,Ve,fa)=>(P(Y)?M="":P(W)?M=`>=${Y}.0.0${x?"-0":""}`:P(X)?M=`>=${Y}.${W}.0${x?"-0":""}`:re?M=`>=${M}`:M=`>=${M}${x?"-0":""}`,P(ke)?J="":P(Ie)?J=`<${+ke+1}.0.0-0`:P(Ne)?J=`<${ke}.${+Ie+1}.0-0`:Ve?J=`<=${ke}.${Ie}.${Ne}-${Ve}`:x?J=`<${ke}.${Ie}.${+Ne+1}-0`:J=`<=${J}`,`${M} ${J}`.trim()),H=(x,O,M)=>{for(let Y=0;Y<x.length;Y++)if(!x[Y].test(O))return!1;if(O.prerelease.length&&!M.includePrerelease){for(let Y=0;Y<x.length;Y++)if(o(x[Y].semver),x[Y].semver!==g.ANY&&x[Y].semver.prerelease.length>0){const W=x[Y].semver;if(W.major===O.major&&W.minor===O.minor&&W.patch===O.patch)return!0}return!1}return!0}},3872:(v,h,i)=>{const u=i(1065),{MAX_LENGTH:t,MAX_SAFE_INTEGER:n}=i(1037),{safeRe:l,t:g}=i(666),o=i(7879),{compareIdentifiers:r}=i(766);class p{constructor(s,_){if(_=o(_),s instanceof p){if(s.loose===!!_.loose&&s.includePrerelease===!!_.includePrerelease)return s;s=s.version}else if(typeof s!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof s}".`);if(s.length>t)throw new TypeError(`version is longer than ${t} characters`);u("SemVer",s,_),this.options=_,this.loose=!!_.loose,this.includePrerelease=!!_.includePrerelease;const c=s.trim().match(_.loose?l[g.LOOSE]:l[g.FULL]);if(!c)throw new TypeError(`Invalid Version: ${s}`);if(this.raw=s,this.major=+c[1],this.minor=+c[2],this.patch=+c[3],this.major>n||this.major<0)throw new TypeError("Invalid major version");if(this.minor>n||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>n||this.patch<0)throw new TypeError("Invalid patch version");c[4]?this.prerelease=c[4].split(".").map(f=>{if(/^[0-9]+$/.test(f)){const k=+f;if(k>=0&&k<n)return k}return f}):this.prerelease=[],this.build=c[5]?c[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(s){if(u("SemVer.compare",this.version,this.options,s),!(s instanceof p)){if(typeof s=="string"&&s===this.version)return 0;s=new p(s,this.options)}return s.version===this.version?0:this.compareMain(s)||this.comparePre(s)}compareMain(s){return s instanceof p||(s=new p(s,this.options)),r(this.major,s.major)||r(this.minor,s.minor)||r(this.patch,s.patch)}comparePre(s){if(s instanceof p||(s=new p(s,this.options)),this.prerelease.length&&!s.prerelease.length)return-1;if(!this.prerelease.length&&s.prerelease.length)return 1;if(!this.prerelease.length&&!s.prerelease.length)return 0;let _=0;do{const c=this.prerelease[_],f=s.prerelease[_];if(u("prerelease compare",_,c,f),c===void 0&&f===void 0)return 0;if(f===void 0)return 1;if(c===void 0)return-1;if(c===f)continue;return r(c,f)}while(++_)}compareBuild(s){s instanceof p||(s=new p(s,this.options));let _=0;do{const c=this.build[_],f=s.build[_];if(u("prerelease compare",_,c,f),c===void 0&&f===void 0)return 0;if(f===void 0)return 1;if(c===void 0)return-1;if(c===f)continue;return r(c,f)}while(++_)}inc(s,_,c){switch(s){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",_,c);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",_,c);break;case"prepatch":this.prerelease.length=0,this.inc("patch",_,c),this.inc("pre",_,c);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",_,c),this.inc("pre",_,c);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{const f=Number(c)?1:0;if(!_&&c===!1)throw new Error("invalid increment argument: identifier is empty");if(this.prerelease.length===0)this.prerelease=[f];else{let k=this.prerelease.length;for(;--k>=0;)typeof this.prerelease[k]=="number"&&(this.prerelease[k]++,k=-2);if(k===-1){if(_===this.prerelease.join(".")&&c===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(f)}}if(_){let k=[_,f];c===!1&&(k=[_]),r(this.prerelease[0],_)===0?isNaN(this.prerelease[1])&&(this.prerelease=k):this.prerelease=k}break}default:throw new Error(`invalid increment argument: ${s}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}}v.exports=p},9485:(v,h,i)=>{const u=i(4342),t=(n,l)=>{const g=u(n.trim().replace(/^[=v]+/,""),l);return g?g.version:null};v.exports=t},4766:(v,h,i)=>{const u=i(2750),t=i(8653),n=i(3786),l=i(2282),g=i(4627),o=i(4963),r=(p,m,s,_)=>{switch(m){case"===":return typeof p=="object"&&(p=p.version),typeof s=="object"&&(s=s.version),p===s;case"!==":return typeof p=="object"&&(p=p.version),typeof s=="object"&&(s=s.version),p!==s;case"":case"=":case"==":return u(p,s,_);case"!=":return t(p,s,_);case">":return n(p,s,_);case">=":return l(p,s,_);case"<":return g(p,s,_);case"<=":return o(p,s,_);default:throw new TypeError(`Invalid operator: ${m}`)}};v.exports=r},4002:(v,h,i)=>{const u=i(3872),t=i(4342),{safeRe:n,t:l}=i(666),g=(o,r)=>{if(o instanceof u)return o;if(typeof o=="number"&&(o=String(o)),typeof o!="string")return null;r=r||{};let p=null;if(!r.rtl)p=o.match(n[l.COERCE]);else{let m;for(;(m=n[l.COERCERTL].exec(o))&&(!p||p.index+p[0].length!==o.length);)(!p||m.index+m[0].length!==p.index+p[0].length)&&(p=m),n[l.COERCERTL].lastIndex=m.index+m[1].length+m[2].length;n[l.COERCERTL].lastIndex=-1}return p===null?null:t(`${p[2]}.${p[3]||"0"}.${p[4]||"0"}`,r)};v.exports=g},8196:(v,h,i)=>{const u=i(3872),t=(n,l,g)=>{const o=new u(n,g),r=new u(l,g);return o.compare(r)||o.compareBuild(r)};v.exports=t},3696:(v,h,i)=>{const u=i(321),t=(n,l)=>u(n,l,!0);v.exports=t},321:(v,h,i)=>{const u=i(3872),t=(n,l,g)=>new u(n,g).compare(new u(l,g));v.exports=t},3450:(v,h,i)=>{const u=i(4342),t=(n,l)=>{const g=u(n,null,!0),o=u(l,null,!0),r=g.compare(o);if(r===0)return null;const p=r>0,m=p?g:o,s=p?o:g,_=!!m.prerelease.length;if(!!s.prerelease.length&&!_)return!s.patch&&!s.minor?"major":m.patch?"patch":m.minor?"minor":"major";const f=_?"pre":"";return g.major!==o.major?f+"major":g.minor!==o.minor?f+"minor":g.patch!==o.patch?f+"patch":"prerelease"};v.exports=t},2750:(v,h,i)=>{const u=i(321),t=(n,l,g)=>u(n,l,g)===0;v.exports=t},3786:(v,h,i)=>{const u=i(321),t=(n,l,g)=>u(n,l,g)>0;v.exports=t},2282:(v,h,i)=>{const u=i(321),t=(n,l,g)=>u(n,l,g)>=0;v.exports=t},8911:(v,h,i)=>{const u=i(3872),t=(n,l,g,o,r)=>{typeof g=="string"&&(r=o,o=g,g=void 0);try{return new u(n instanceof u?n.version:n,g).inc(l,o,r).version}catch(p){return null}};v.exports=t},4627:(v,h,i)=>{const u=i(321),t=(n,l,g)=>u(n,l,g)<0;v.exports=t},4963:(v,h,i)=>{const u=i(321),t=(n,l,g)=>u(n,l,g)<=0;v.exports=t},5828:(v,h,i)=>{const u=i(3872),t=(n,l)=>new u(n,l).major;v.exports=t},3302:(v,h,i)=>{const u=i(3872),t=(n,l)=>new u(n,l).minor;v.exports=t},8653:(v,h,i)=>{const u=i(321),t=(n,l,g)=>u(n,l,g)!==0;v.exports=t},4342:(v,h,i)=>{const u=i(3872),t=(n,l,g=!1)=>{if(n instanceof u)return n;try{return new u(n,l)}catch(o){if(!g)return null;throw o}};v.exports=t},3857:(v,h,i)=>{const u=i(3872),t=(n,l)=>new u(n,l).patch;v.exports=t},6527:(v,h,i)=>{const u=i(4342),t=(n,l)=>{const g=u(n,l);return g&&g.prerelease.length?g.prerelease:null};v.exports=t},9854:(v,h,i)=>{const u=i(321),t=(n,l,g)=>u(l,n,g);v.exports=t},4833:(v,h,i)=>{const u=i(8196),t=(n,l)=>n.sort((g,o)=>u(o,g,l));v.exports=t},2025:(v,h,i)=>{const u=i(1608),t=(n,l,g)=>{try{l=new u(l,g)}catch(o){return!1}return l.test(n)};v.exports=t},4889:(v,h,i)=>{const u=i(8196),t=(n,l)=>n.sort((g,o)=>u(g,o,l));v.exports=t},4506:(v,h,i)=>{const u=i(4342),t=(n,l)=>{const g=u(n,l);return g?g.version:null};v.exports=t},8533:(v,h,i)=>{const u=i(666),t=i(1037),n=i(3872),l=i(766),g=i(4342),o=i(4506),r=i(9485),p=i(8911),m=i(3450),s=i(5828),_=i(3302),c=i(3857),f=i(6527),k=i(321),y=i(9854),A=i(3696),b=i(8196),I=i(4889),P=i(4833),B=i(3786),T=i(4627),K=i(2750),L=i(8653),D=i(2282),S=i(4963),w=i(4766),C=i(4002),F=i(2022),H=i(1608),x=i(2025),O=i(4216),M=i(3889),Y=i(8079),W=i(2281),X=i(5436),re=i(1479),de=i(4939),J=i(878),ke=i(8486),Ie=i(6867),Ne=i(3016);v.exports={parse:g,valid:o,clean:r,inc:p,diff:m,major:s,minor:_,patch:c,prerelease:f,compare:k,rcompare:y,compareLoose:A,compareBuild:b,sort:I,rsort:P,gt:B,lt:T,eq:K,neq:L,gte:D,lte:S,cmp:w,coerce:C,Comparator:F,Range:H,satisfies:x,toComparators:O,maxSatisfying:M,minSatisfying:Y,minVersion:W,validRange:X,outside:re,gtr:de,ltr:J,intersects:ke,simplifyRange:Ie,subset:Ne,SemVer:n,re:u.re,src:u.src,tokens:u.t,SEMVER_SPEC_VERSION:t.SEMVER_SPEC_VERSION,RELEASE_TYPES:t.RELEASE_TYPES,compareIdentifiers:l.compareIdentifiers,rcompareIdentifiers:l.rcompareIdentifiers}},1037:v=>{const h="2.0.0",u=Number.MAX_SAFE_INTEGER||9007199254740991,t=16,n=256-6,l=["major","premajor","minor","preminor","patch","prepatch","prerelease"];v.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:t,MAX_SAFE_BUILD_LENGTH:n,MAX_SAFE_INTEGER:u,RELEASE_TYPES:l,SEMVER_SPEC_VERSION:h,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}},1065:v=>{const h=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...i)=>console.error("SEMVER",...i):()=>{};v.exports=h},766:v=>{const h=/^[0-9]+$/,i=(t,n)=>{const l=h.test(t),g=h.test(n);return l&&g&&(t=+t,n=+n),t===n?0:l&&!g?-1:g&&!l?1:t<n?-1:1},u=(t,n)=>i(n,t);v.exports={compareIdentifiers:i,rcompareIdentifiers:u}},7879:v=>{const h=Object.freeze({loose:!0}),i=Object.freeze({}),u=t=>t?typeof t!="object"?h:t:i;v.exports=u},666:(v,h,i)=>{const{MAX_SAFE_COMPONENT_LENGTH:u,MAX_SAFE_BUILD_LENGTH:t,MAX_LENGTH:n}=i(1037),l=i(1065);h=v.exports={};const g=h.re=[],o=h.safeRe=[],r=h.src=[],p=h.t={};let m=0;const s="[a-zA-Z0-9-]",_=[["\\s",1],["\\d",n],[s,t]],c=k=>{for(const[y,A]of _)k=k.split(`${y}*`).join(`${y}{0,${A}}`).split(`${y}+`).join(`${y}{1,${A}}`);return k},f=(k,y,A)=>{const b=c(y),I=m++;l(k,I,y),p[k]=I,r[I]=y,g[I]=new RegExp(y,A?"g":void 0),o[I]=new RegExp(b,A?"g":void 0)};f("NUMERICIDENTIFIER","0|[1-9]\\d*"),f("NUMERICIDENTIFIERLOOSE","\\d+"),f("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${s}*`),f("MAINVERSION",`(${r[p.NUMERICIDENTIFIER]})\\.(${r[p.NUMERICIDENTIFIER]})\\.(${r[p.NUMERICIDENTIFIER]})`),f("MAINVERSIONLOOSE",`(${r[p.NUMERICIDENTIFIERLOOSE]})\\.(${r[p.NUMERICIDENTIFIERLOOSE]})\\.(${r[p.NUMERICIDENTIFIERLOOSE]})`),f("PRERELEASEIDENTIFIER",`(?:${r[p.NUMERICIDENTIFIER]}|${r[p.NONNUMERICIDENTIFIER]})`),f("PRERELEASEIDENTIFIERLOOSE",`(?:${r[p.NUMERICIDENTIFIERLOOSE]}|${r[p.NONNUMERICIDENTIFIER]})`),f("PRERELEASE",`(?:-(${r[p.PRERELEASEIDENTIFIER]}(?:\\.${r[p.PRERELEASEIDENTIFIER]})*))`),f("PRERELEASELOOSE",`(?:-?(${r[p.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${r[p.PRERELEASEIDENTIFIERLOOSE]})*))`),f("BUILDIDENTIFIER",`${s}+`),f("BUILD",`(?:\\+(${r[p.BUILDIDENTIFIER]}(?:\\.${r[p.BUILDIDENTIFIER]})*))`),f("FULLPLAIN",`v?${r[p.MAINVERSION]}${r[p.PRERELEASE]}?${r[p.BUILD]}?`),f("FULL",`^${r[p.FULLPLAIN]}$`),f("LOOSEPLAIN",`[v=\\s]*${r[p.MAINVERSIONLOOSE]}${r[p.PRERELEASELOOSE]}?${r[p.BUILD]}?`),f("LOOSE",`^${r[p.LOOSEPLAIN]}$`),f("GTLT","((?:<|>)?=?)"),f("XRANGEIDENTIFIERLOOSE",`${r[p.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),f("XRANGEIDENTIFIER",`${r[p.NUMERICIDENTIFIER]}|x|X|\\*`),f("XRANGEPLAIN",`[v=\\s]*(${r[p.XRANGEIDENTIFIER]})(?:\\.(${r[p.XRANGEIDENTIFIER]})(?:\\.(${r[p.XRANGEIDENTIFIER]})(?:${r[p.PRERELEASE]})?${r[p.BUILD]}?)?)?`),f("XRANGEPLAINLOOSE",`[v=\\s]*(${r[p.XRANGEIDENTIFIERLOOSE]})(?:\\.(${r[p.XRANGEIDENTIFIERLOOSE]})(?:\\.(${r[p.XRANGEIDENTIFIERLOOSE]})(?:${r[p.PRERELEASELOOSE]})?${r[p.BUILD]}?)?)?`),f("XRANGE",`^${r[p.GTLT]}\\s*${r[p.XRANGEPLAIN]}$`),f("XRANGELOOSE",`^${r[p.GTLT]}\\s*${r[p.XRANGEPLAINLOOSE]}$`),f("COERCE",`(^|[^\\d])(\\d{1,${u}})(?:\\.(\\d{1,${u}}))?(?:\\.(\\d{1,${u}}))?(?:$|[^\\d])`),f("COERCERTL",r[p.COERCE],!0),f("LONETILDE","(?:~>?)"),f("TILDETRIM",`(\\s*)${r[p.LONETILDE]}\\s+`,!0),h.tildeTrimReplace="$1~",f("TILDE",`^${r[p.LONETILDE]}${r[p.XRANGEPLAIN]}$`),f("TILDELOOSE",`^${r[p.LONETILDE]}${r[p.XRANGEPLAINLOOSE]}$`),f("LONECARET","(?:\\^)"),f("CARETTRIM",`(\\s*)${r[p.LONECARET]}\\s+`,!0),h.caretTrimReplace="$1^",f("CARET",`^${r[p.LONECARET]}${r[p.XRANGEPLAIN]}$`),f("CARETLOOSE",`^${r[p.LONECARET]}${r[p.XRANGEPLAINLOOSE]}$`),f("COMPARATORLOOSE",`^${r[p.GTLT]}\\s*(${r[p.LOOSEPLAIN]})$|^$`),f("COMPARATOR",`^${r[p.GTLT]}\\s*(${r[p.FULLPLAIN]})$|^$`),f("COMPARATORTRIM",`(\\s*)${r[p.GTLT]}\\s*(${r[p.LOOSEPLAIN]}|${r[p.XRANGEPLAIN]})`,!0),h.comparatorTrimReplace="$1$2$3",f("HYPHENRANGE",`^\\s*(${r[p.XRANGEPLAIN]})\\s+-\\s+(${r[p.XRANGEPLAIN]})\\s*$`),f("HYPHENRANGELOOSE",`^\\s*(${r[p.XRANGEPLAINLOOSE]})\\s+-\\s+(${r[p.XRANGEPLAINLOOSE]})\\s*$`),f("STAR","(<|>)?=?\\s*\\*"),f("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),f("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")},4939:(v,h,i)=>{const u=i(1479),t=(n,l,g)=>u(n,l,">",g);v.exports=t},8486:(v,h,i)=>{const u=i(1608),t=(n,l,g)=>(n=new u(n,g),l=new u(l,g),n.intersects(l,g));v.exports=t},878:(v,h,i)=>{const u=i(1479),t=(n,l,g)=>u(n,l,"<",g);v.exports=t},3889:(v,h,i)=>{const u=i(3872),t=i(1608),n=(l,g,o)=>{let r=null,p=null,m=null;try{m=new t(g,o)}catch(s){return null}return l.forEach(s=>{m.test(s)&&(!r||p.compare(s)===-1)&&(r=s,p=new u(r,o))}),r};v.exports=n},8079:(v,h,i)=>{const u=i(3872),t=i(1608),n=(l,g,o)=>{let r=null,p=null,m=null;try{m=new t(g,o)}catch(s){return null}return l.forEach(s=>{m.test(s)&&(!r||p.compare(s)===1)&&(r=s,p=new u(r,o))}),r};v.exports=n},2281:(v,h,i)=>{const u=i(3872),t=i(1608),n=i(3786),l=(g,o)=>{g=new t(g,o);let r=new u("0.0.0");if(g.test(r)||(r=new u("0.0.0-0"),g.test(r)))return r;r=null;for(let p=0;p<g.set.length;++p){const m=g.set[p];let s=null;m.forEach(_=>{const c=new u(_.semver.version);switch(_.operator){case">":c.prerelease.length===0?c.patch++:c.prerelease.push(0),c.raw=c.format();case"":case">=":(!s||n(c,s))&&(s=c);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${_.operator}`)}}),s&&(!r||n(r,s))&&(r=s)}return r&&g.test(r)?r:null};v.exports=l},1479:(v,h,i)=>{const u=i(3872),t=i(2022),{ANY:n}=t,l=i(1608),g=i(2025),o=i(3786),r=i(4627),p=i(4963),m=i(2282),s=(_,c,f,k)=>{_=new u(_,k),c=new l(c,k);let y,A,b,I,P;switch(f){case">":y=o,A=p,b=r,I=">",P=">=";break;case"<":y=r,A=m,b=o,I="<",P="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(g(_,c,k))return!1;for(let B=0;B<c.set.length;++B){const T=c.set[B];let K=null,L=null;if(T.forEach(D=>{D.semver===n&&(D=new t(">=0.0.0")),K=K||D,L=L||D,y(D.semver,K.semver,k)?K=D:b(D.semver,L.semver,k)&&(L=D)}),K.operator===I||K.operator===P||(!L.operator||L.operator===I)&&A(_,L.semver))return!1;if(L.operator===P&&b(_,L.semver))return!1}return!0};v.exports=s},6867:(v,h,i)=>{const u=i(2025),t=i(321);v.exports=(n,l,g)=>{const o=[];let r=null,p=null;const m=n.sort((f,k)=>t(f,k,g));for(const f of m)u(f,l,g)?(p=f,r||(r=f)):(p&&o.push([r,p]),p=null,r=null);r&&o.push([r,null]);const s=[];for(const[f,k]of o)f===k?s.push(f):!k&&f===m[0]?s.push("*"):k?f===m[0]?s.push(`<=${k}`):s.push(`${f} - ${k}`):s.push(`>=${f}`);const _=s.join(" || "),c=typeof l.raw=="string"?l.raw:String(l);return _.length<c.length?_:l}},3016:(v,h,i)=>{const u=i(1608),t=i(2022),{ANY:n}=t,l=i(2025),g=i(321),o=(c,f,k={})=>{if(c===f)return!0;c=new u(c,k),f=new u(f,k);let y=!1;e:for(const A of c.set){for(const b of f.set){const I=m(A,b,k);if(y=y||I!==null,I)continue e}if(y)return!1}return!0},r=[new t(">=0.0.0-0")],p=[new t(">=0.0.0")],m=(c,f,k)=>{if(c===f)return!0;if(c.length===1&&c[0].semver===n){if(f.length===1&&f[0].semver===n)return!0;k.includePrerelease?c=r:c=p}if(f.length===1&&f[0].semver===n){if(k.includePrerelease)return!0;f=p}const y=new Set;let A,b;for(const S of c)S.operator===">"||S.operator===">="?A=s(A,S,k):S.operator==="<"||S.operator==="<="?b=_(b,S,k):y.add(S.semver);if(y.size>1)return null;let I;if(A&&b){if(I=g(A.semver,b.semver,k),I>0)return null;if(I===0&&(A.operator!==">="||b.operator!=="<="))return null}for(const S of y){if(A&&!l(S,String(A),k)||b&&!l(S,String(b),k))return null;for(const w of f)if(!l(S,String(w),k))return!1;return!0}let P,B,T,K,L=b&&!k.includePrerelease&&b.semver.prerelease.length?b.semver:!1,D=A&&!k.includePrerelease&&A.semver.prerelease.length?A.semver:!1;L&&L.prerelease.length===1&&b.operator==="<"&&L.prerelease[0]===0&&(L=!1);for(const S of f){if(K=K||S.operator===">"||S.operator===">=",T=T||S.operator==="<"||S.operator==="<=",A){if(D&&S.semver.prerelease&&S.semver.prerelease.length&&S.semver.major===D.major&&S.semver.minor===D.minor&&S.semver.patch===D.patch&&(D=!1),S.operator===">"||S.operator===">="){if(P=s(A,S,k),P===S&&P!==A)return!1}else if(A.operator===">="&&!l(A.semver,String(S),k))return!1}if(b){if(L&&S.semver.prerelease&&S.semver.prerelease.length&&S.semver.major===L.major&&S.semver.minor===L.minor&&S.semver.patch===L.patch&&(L=!1),S.operator==="<"||S.operator==="<="){if(B=_(b,S,k),B===S&&B!==b)return!1}else if(b.operator==="<="&&!l(b.semver,String(S),k))return!1}if(!S.operator&&(b||A)&&I!==0)return!1}return!(A&&T&&!b&&I!==0||b&&K&&!A&&I!==0||D||L)},s=(c,f,k)=>{if(!c)return f;const y=g(c.semver,f.semver,k);return y>0?c:y<0||f.operator===">"&&c.operator===">="?f:c},_=(c,f,k)=>{if(!c)return f;const y=g(c.semver,f.semver,k);return y<0?c:y>0||f.operator==="<"&&c.operator==="<="?f:c};v.exports=o},4216:(v,h,i)=>{const u=i(1608),t=(n,l)=>new u(n,l).set.map(g=>g.map(o=>o.value).join(" ").trim().split(" "));v.exports=t},5436:(v,h,i)=>{const u=i(1608),t=(n,l)=>{try{return new u(n,l).range||"*"}catch(g){return null}};v.exports=t},1920:v=>{"use strict";v.exports=function(h){h.prototype[Symbol.iterator]=function*(){for(let i=this.head;i;i=i.next)yield i.value}}},96:(v,h,i)=>{"use strict";v.exports=u,u.Node=g,u.create=u;function u(o){var r=this;if(r instanceof u||(r=new u),r.tail=null,r.head=null,r.length=0,o&&typeof o.forEach=="function")o.forEach(function(s){r.push(s)});else if(arguments.length>0)for(var p=0,m=arguments.length;p<m;p++)r.push(arguments[p]);return r}u.prototype.removeNode=function(o){if(o.list!==this)throw new Error("removing node which does not belong to this list");var r=o.next,p=o.prev;return r&&(r.prev=p),p&&(p.next=r),o===this.head&&(this.head=r),o===this.tail&&(this.tail=p),o.list.length--,o.next=null,o.prev=null,o.list=null,r},u.prototype.unshiftNode=function(o){if(o!==this.head){o.list&&o.list.removeNode(o);var r=this.head;o.list=this,o.next=r,r&&(r.prev=o),this.head=o,this.tail||(this.tail=o),this.length++}},u.prototype.pushNode=function(o){if(o!==this.tail){o.list&&o.list.removeNode(o);var r=this.tail;o.list=this,o.prev=r,r&&(r.next=o),this.tail=o,this.head||(this.head=o),this.length++}},u.prototype.push=function(){for(var o=0,r=arguments.length;o<r;o++)n(this,arguments[o]);return this.length},u.prototype.unshift=function(){for(var o=0,r=arguments.length;o<r;o++)l(this,arguments[o]);return this.length},u.prototype.pop=function(){if(this.tail){var o=this.tail.value;return this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,o}},u.prototype.shift=function(){if(this.head){var o=this.head.value;return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,o}},u.prototype.forEach=function(o,r){r=r||this;for(var p=this.head,m=0;p!==null;m++)o.call(r,p.value,m,this),p=p.next},u.prototype.forEachReverse=function(o,r){r=r||this;for(var p=this.tail,m=this.length-1;p!==null;m--)o.call(r,p.value,m,this),p=p.prev},u.prototype.get=function(o){for(var r=0,p=this.head;p!==null&&r<o;r++)p=p.next;if(r===o&&p!==null)return p.value},u.prototype.getReverse=function(o){for(var r=0,p=this.tail;p!==null&&r<o;r++)p=p.prev;if(r===o&&p!==null)return p.value},u.prototype.map=function(o,r){r=r||this;for(var p=new u,m=this.head;m!==null;)p.push(o.call(r,m.value,this)),m=m.next;return p},u.prototype.mapReverse=function(o,r){r=r||this;for(var p=new u,m=this.tail;m!==null;)p.push(o.call(r,m.value,this)),m=m.prev;return p},u.prototype.reduce=function(o,r){var p,m=this.head;if(arguments.length>1)p=r;else if(this.head)m=this.head.next,p=this.head.value;else throw new TypeError("Reduce of empty list with no initial value");for(var s=0;m!==null;s++)p=o(p,m.value,s),m=m.next;return p},u.prototype.reduceReverse=function(o,r){var p,m=this.tail;if(arguments.length>1)p=r;else if(this.tail)m=this.tail.prev,p=this.tail.value;else throw new TypeError("Reduce of empty list with no initial value");for(var s=this.length-1;m!==null;s--)p=o(p,m.value,s),m=m.prev;return p},u.prototype.toArray=function(){for(var o=new Array(this.length),r=0,p=this.head;p!==null;r++)o[r]=p.value,p=p.next;return o},u.prototype.toArrayReverse=function(){for(var o=new Array(this.length),r=0,p=this.tail;p!==null;r++)o[r]=p.value,p=p.prev;return o},u.prototype.slice=function(o,r){r=r||this.length,r<0&&(r+=this.length),o=o||0,o<0&&(o+=this.length);var p=new u;if(r<o||r<0)return p;o<0&&(o=0),r>this.length&&(r=this.length);for(var m=0,s=this.head;s!==null&&m<o;m++)s=s.next;for(;s!==null&&m<r;m++,s=s.next)p.push(s.value);return p},u.prototype.sliceReverse=function(o,r){r=r||this.length,r<0&&(r+=this.length),o=o||0,o<0&&(o+=this.length);var p=new u;if(r<o||r<0)return p;o<0&&(o=0),r>this.length&&(r=this.length);for(var m=this.length,s=this.tail;s!==null&&m>r;m--)s=s.prev;for(;s!==null&&m>o;m--,s=s.prev)p.push(s.value);return p},u.prototype.splice=function(o,r,...p){o>this.length&&(o=this.length-1),o<0&&(o=this.length+o);for(var m=0,s=this.head;s!==null&&m<o;m++)s=s.next;for(var _=[],m=0;s&&m<r;m++)_.push(s.value),s=this.removeNode(s);s===null&&(s=this.tail),s!==this.head&&s!==this.tail&&(s=s.prev);for(var m=0;m<p.length;m++)s=t(this,s,p[m]);return _},u.prototype.reverse=function(){for(var o=this.head,r=this.tail,p=o;p!==null;p=p.prev){var m=p.prev;p.prev=p.next,p.next=m}return this.head=r,this.tail=o,this};function t(o,r,p){var m=r===o.head?new g(p,null,r,o):new g(p,r,r.next,o);return m.next===null&&(o.tail=m),m.prev===null&&(o.head=m),o.length++,m}function n(o,r){o.tail=new g(r,o.tail,null,o),o.head||(o.head=o.tail),o.length++}function l(o,r){o.head=new g(r,null,o.head,o),o.tail||(o.tail=o.head),o.length++}function g(o,r,p,m){if(!(this instanceof g))return new g(o,r,p,m);this.list=m,this.value=o,r?(r.next=this,this.prev=r):this.prev=null,p?(p.prev=this,this.next=p):this.next=null}try{i(1920)(u)}catch(o){}}},Ni={};function ta(v){var h=Ni[v];if(h!==void 0)return h.exports;var i=Ni[v]={id:v,loaded:!1,exports:{}};return Vo[v].call(i.exports,i,i.exports,ta),i.loaded=!0,i.exports}ta.n=v=>{var h=v&&v.__esModule?()=>v.default:()=>v;return ta.d(h,{a:h}),h},ta.d=(v,h)=>{for(var i in h)ta.o(h,i)&&!ta.o(v,i)&&Object.defineProperty(v,i,{enumerable:!0,get:h[i]})},ta.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(v){if(typeof window=="object")return window}}(),ta.o=(v,h)=>Object.prototype.hasOwnProperty.call(v,h),ta.nmd=v=>(v.paths=[],v.children||(v.children=[]),v);var sh={};(()=>{var aa;"use strict";var v=ta(8321),h=ta.n(v),i=ta(5702),u=ta(8533),t=ta.n(u),n=ta(4854),l=ta.n(n),g=ta(9261),o=ta(2507),r=ta(7463),p=ta(3756),m=ta(7183),s=ta(6032),_=ta.n(s),c=ta(6487),f=ta(4138),k=ta(790),y=ta(7628),A=ta(4918),b=ta(5241),I=ta(8647),P=ta(6500);class B{hydrate(ge,we){const Se=new URL(ge,typeof window=="undefined"?"https://dummy.base":window.location.origin),V={};Se.pathname.split("/").forEach((_e,ce)=>{if(_e.charAt(0)===":"){const me=_e.slice(1);typeof we[me]!="undefined"&&(Se.pathname=Se.pathname.replace(_e,encodeURIComponent(we[me])),V[me]=we[me])}});for(const _e in we)(typeof V[_e]=="undefined"||Se.searchParams.has(_e))&&Se.searchParams.set(_e,we[_e]);return Se.toString()}}function T(){h()(".sample-request-send").off("click"),h()(".sample-request-send").on("click",function(Re){Re.preventDefault();const ge=h()(this).parents("article"),we=ge.data("group"),Se=ge.data("name"),V=ge.data("version");S(we,Se,V,h()(this).data("type"))}),h()(".sample-request-clear").off("click"),h()(".sample-request-clear").on("click",function(Re){Re.preventDefault();const ge=h()(this).parents("article"),we=ge.data("group"),Se=ge.data("name"),V=ge.data("version");w(we,Se,V)})}function K(Re){return Re.replace(/{(.+?)}/g,":$1")}function L(Re,ge){const we=Re.find(".sample-request-url").val(),Se=new B,V=K(we);return Se.hydrate(V,ge)}function D(Re){const ge={};["header","query","body"].forEach(Se=>{const V={};try{Re.find(h()(`[data-family="${Se}"]:visible`)).each((_e,ce)=>{const me=ce.dataset.name;let je=ce.value;if(ce.type==="checkbox")if(ce.checked)je="on";else return!0;if(!je&&!ce.dataset.optional&&ce.type!=="checkbox")return h()(ce).addClass("border-danger"),!0;V[me]=je})}catch(_e){return}ge[Se]=V});const we=Re.find(h()('[data-family="body-json"]'));return we.is(":visible")?(ge.body=we.val(),ge.header["Content-Type"]="application/json"):ge.header["Content-Type"]="multipart/form-data",ge}function S(Re,ge,we,Se){const V=h()(`article[data-group="${Re}"][data-name="${ge}"][data-version="${we}"]`),_e=D(V),ce={};if(ce.url=L(V,_e.query),ce.headers=_e.header,ce.headers["Content-Type"]==="application/json")ce.data=_e.body;else if(ce.headers["Content-Type"]==="multipart/form-data"){const We=new FormData;for(const[Ue,$e]of Object.entries(_e.body))We.append(Ue,$e);ce.data=We,ce.processData=!1,delete ce.headers["Content-Type"],ce.contentType=!1}ce.type=Se,ce.success=me,ce.error=je,h().ajax(ce),V.find(".sample-request-response").fadeTo(200,1),V.find(".sample-request-response-json").html("Loading...");function me(We,Ue,$e){let ea;try{ea=JSON.parse($e.responseText),ea=JSON.stringify(ea,null,4)}catch(oa){ea=$e.responseText}V.find(".sample-request-response-json").text(ea),_().highlightAll()}function je(We,Ue,$e){let ea="Error "+We.status+": "+$e,oa;try{oa=JSON.parse(We.responseText),oa=JSON.stringify(oa,null,4)}catch(ha){oa=We.responseText}oa&&(ea+=`
`+oa),V.find(".sample-request-response").is(":visible")&&V.find(".sample-request-response").fadeTo(1,.1),V.find(".sample-request-response").fadeTo(250,1),V.find(".sample-request-response-json").text(ea),_().highlightAll()}}function w(Re,ge,we){const Se=h()('article[data-group="'+Re+'"][data-name="'+ge+'"][data-version="'+we+'"]');Se.find(".sample-request-response-json").html(""),Se.find(".sample-request-response").hide(),Se.find(".sample-request-input").each((_e,ce)=>{ce.value=ce.placeholder!==ce.dataset.name?ce.placeholder:""});const V=Se.find(".sample-request-url");V.val(V.prop("defaultValue"))}const C={"Allowed values:":"Valors permesos:","Compare all with predecessor":"Comparar tot amb versi\xF3 anterior","compare changes to:":"comparar canvis amb:","compared to":"comparat amb","Default value:":"Valor per defecte:",Description:"Descripci\xF3",Field:"Camp",General:"General","Generated with":"Generat amb",Name:"Nom","No response values.":"Sense valors en la resposta.",optional:"opcional",Parameter:"Par\xE0metre","Permission:":"Permisos:",Response:"Resposta",Send:"Enviar","Send a Sample Request":"Enviar una petici\xF3 d'exemple","show up to version:":"mostrar versi\xF3:","Size range:":"Tamany de rang:","Toggle navigation":"Canvia la navegaci\xF3",Type:"Tipus",url:"url",Copy:"Copiar","Press Ctrl+C to copy":"Premeu Ctrl+C per copiar","copied!":"Copiat!"},F={"Allowed values:":"Povolen\xE9 hodnoty:","Compare all with predecessor":"Porovnat v\u0161e s p\u0159edchoz\xEDmi verzemi","compare changes to:":"porovnat zm\u011Bny s:","compared to":"porovnat s","Default value:":"V\xFDchoz\xED hodnota:",Description:"Popis",Field:"Pole",General:"Obecn\xE9","Generated with":"Vygenerov\xE1no pomoc\xED",Name:"N\xE1zev","No response values.":"Nebyly vr\xE1ceny \u017E\xE1dn\xE9 hodnoty.",optional:"voliteln\xE9",Parameter:"Parametr","Permission:":"Opr\xE1vn\u011Bn\xED:",Response:"Odpov\u011B\u010F",Send:"Odeslat","Send a Sample Request":"Odeslat uk\xE1zkov\xFD po\u017Eadavek","show up to version:":"zobrazit po verzi:","Size range:":"Rozsah velikosti:","Toggle navigation":"P\u0159epnout navigaci",Type:"Typ",url:"url",Copy:"Kop\xEDrovat","Press Ctrl+C to copy":"Stisknut\xEDm kombinace kl\xE1ves Ctrl+C zkop\xEDrujte","copied!":"Zkop\xEDrovan\xFD!"},H={"Allowed values:":"Erlaubte Werte:","Compare all with predecessor":"Vergleiche alle mit ihren Vorg\xE4ngern","compare changes to:":"vergleiche \xC4nderungen mit:","compared to":"verglichen mit","Default value:":"Standardwert:",Description:"Beschreibung",Field:"Feld",General:"Allgemein","Generated with":"Erstellt mit",Name:"Name","No response values.":"Keine R\xFCckgabewerte.",optional:"optional",Parameter:"Parameter","Permission:":"Berechtigung:",Response:"Antwort",Send:"Senden","Send a Sample Request":"Eine Beispielanfrage senden","show up to version:":"zeige bis zur Version:","Size range:":"Gr\xF6\xDFenbereich:","Toggle navigation":"Navigation ein-/ausblenden",Type:"Typ",url:"url",Copy:"Kopieren","Press Ctrl+C to copy":"Dr\xFCcken Sie Ctrl+C zum kopieren","Copied!":"Kopiert!"},x={"Allowed values:":"Valores permitidos:","Compare all with predecessor":"Comparar todo con versi\xF3n anterior","compare changes to:":"comparar cambios con:","compared to":"comparado con","Default value:":"Valor por defecto:",Description:"Descripci\xF3n",Field:"Campo",General:"General","Generated with":"Generado con",Name:"Nombre","No response values.":"Sin valores en la respuesta.",optional:"opcional",Parameter:"Par\xE1metro","Permission:":"Permisos:",Response:"Respuesta",Send:"Enviar","Send a Sample Request":"Enviar una petici\xF3n de ejemplo","show up to version:":"mostrar a versi\xF3n:","Size range:":"Tama\xF1o de rango:","Toggle navigation":"Alternar navegaci\xF3n",Type:"Tipo",url:"url",Copy:"Copiar","Press Ctrl+C to copy":"Presione Ctrl+C para copiar","copied!":"\xA1Copiado!"},O={"Allowed values:":"Valeurs autoris\xE9es :",Body:"Corps","Compare all with predecessor":"Tout comparer avec ...","compare changes to:":"comparer les changements \xE0 :","compared to":"comparer \xE0","Default value:":"Valeur par d\xE9faut :",Description:"Description",Field:"Champ",General:"G\xE9n\xE9ral","Generated with":"G\xE9n\xE9r\xE9 avec",Header:"En-t\xEAte",Headers:"En-t\xEAtes",Name:"Nom","No response values.":"Aucune valeur de r\xE9ponse.","No value":"Aucune valeur",optional:"optionnel",Parameter:"Param\xE8tre",Parameters:"Param\xE8tres","Permission:":"Permission :","Query Parameter(s)":"Param\xE8tre(s) de la requ\xEAte","Query Parameters":"Param\xE8tres de la requ\xEAte","Request Body":"Corps de la requ\xEAte",required:"requis",Response:"R\xE9ponse",Send:"Envoyer","Send a Sample Request":"Envoyer une requ\xEAte repr\xE9sentative","show up to version:":"Montrer \xE0 partir de la version :","Size range:":"Ordre de grandeur :","Toggle navigation":"Basculer la navigation",Type:"Type",url:"url",Copy:"Copier","Press Ctrl+C to copy":"Appuyez sur Ctrl+C pour copier","copied!":"Copi\xE9!"},M={"Allowed values:":"Valori permessi:","Compare all with predecessor":"Confronta tutto con versioni precedenti","compare changes to:":"confronta modifiche con:","compared to":"confrontato con","Default value:":"Valore predefinito:",Description:"Descrizione",Field:"Campo",General:"Generale","Generated with":"Creato con",Name:"Nome","No response values.":"Nessun valore di risposta.",optional:"opzionale",Parameter:"Parametro","Permission:":"Permessi:",Response:"Risposta",Send:"Invia","Send a Sample Request":"Invia una richiesta di esempio","show up to version:":"mostra alla versione:","Size range:":"Intervallo dimensione:","Toggle navigation":"Attiva/disattiva la navigazione",Type:"Tipo",url:"url",Copy:"Copiare","Press Ctrl+C to copy":"Premere CTRL+C per copiare","copied!":"Copiato!"},Y={"Allowed values:":"Toegestane waarden:","Compare all with predecessor":"Vergelijk alle met voorgaande versie","compare changes to:":"vergelijk veranderingen met:","compared to":"vergelijk met","Default value:":"Standaard waarde:",Description:"Omschrijving",Field:"Veld",General:"Algemeen","Generated with":"Gegenereerd met",Name:"Naam","No response values.":"Geen response waardes.",optional:"optioneel",Parameter:"Parameter","Permission:":"Permissie:",Response:"Antwoorden",Send:"Sturen","Send a Sample Request":"Stuur een sample aanvragen","show up to version:":"toon tot en met versie:","Size range:":"Maatbereik:","Toggle navigation":"Navigatie in-/uitschakelen",Type:"Type",url:"url",Copy:"Kopi\xEBren","Press Ctrl+C to copy":"Druk op Ctrl+C om te kopi\xEBren","copied!":"Gekopieerd!"},W={"Allowed values:":"Dozwolone warto\u015Bci:","Compare all with predecessor":"Por\xF3wnaj z poprzednimi wersjami","compare changes to:":"por\xF3wnaj zmiany do:","compared to":"por\xF3wnaj do:","Default value:":"Warto\u015B\u0107 domy\u015Blna:",Description:"Opis",Field:"Pole",General:"Generalnie","Generated with":"Wygenerowano z",Name:"Nazwa","No response values.":"Brak odpowiedzi.",optional:"opcjonalny",Parameter:"Parametr","Permission:":"Uprawnienia:",Response:"Odpowied\u017A",Send:"Wy\u015Blij","Send a Sample Request":"Wy\u015Blij przyk\u0142adowe \u017C\u0105danie","show up to version:":"poka\u017C do wersji:","Size range:":"Zakres rozmiaru:","Toggle navigation":"Prze\u0142\u0105cz nawigacj\u0119",Type:"Typ",url:"url",Copy:"Kopiowa\u0107","Press Ctrl+C to copy":"Naci\u015Bnij Ctrl+C, aby skopiowa\u0107","copied!":"Kopiowane!"},X={"Allowed values:":"Valores permitidos:","Compare all with predecessor":"Compare todos com antecessores","compare changes to:":"comparar altera\xE7\xF5es com:","compared to":"comparado com","Default value:":"Valor padr\xE3o:",Description:"Descri\xE7\xE3o",Field:"Campo",General:"Geral","Generated with":"Gerado com",Name:"Nome","No response values.":"Sem valores de resposta.",optional:"opcional",Parameter:"Par\xE2metro","Permission:":"Permiss\xE3o:",Response:"Resposta",Send:"Enviar","Send a Sample Request":"Enviar um Exemplo de Pedido","show up to version:":"aparecer para a vers\xE3o:","Size range:":"Faixa de tamanho:","Toggle navigation":"Alternar navega\xE7\xE3o",Type:"Tipo",url:"url",Copy:"Copiar","Press Ctrl+C to copy":"Pressione Ctrl+C para copiar","copied!":"Copiado!"},re={"Allowed values:":"Valori permise:","Compare all with predecessor":"Compar\u0103 toate cu versiunea precedent\u0103","compare changes to:":"compar\u0103 cu versiunea:","compared to":"comparat cu","Default value:":"Valoare implicit\u0103:",Description:"Descriere",Field:"C\xE2mp",General:"General","Generated with":"Generat cu",Name:"Nume","No response values.":"Nici o valoare returnat\u0103.",optional:"op\u021Bional",Parameter:"Parametru","Permission:":"Permisiune:",Response:"R\u0103spuns",Send:"Trimite","Send a Sample Request":"Trimite o cerere de prob\u0103","show up to version:":"arat\u0103 p\xE2n\u0103 la versiunea:","Size range:":"Interval permis:","Toggle navigation":"Comutarea navig\u0103rii",Type:"Tip",url:"url",Copy:"Copie","Press Ctrl+C to copy":"Ap\u0103sa\u021Bi Ctrl+C pentru a copia","copied!":"Copiat!"},de={"Allowed values:":"\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F:","Compare all with predecessor":"\u0421\u0440\u0430\u0432\u043D\u0438\u0442\u044C \u0441 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0435\u0439","compare changes to:":"\u0441\u0440\u0430\u0432\u043D\u0438\u0442\u044C \u0441:","compared to":"\u0432 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0438 \u0441","Default value:":"\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E:",Description:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",Field:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",General:"\u041E\u0431\u0449\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F","Generated with":"\u0421\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E",Name:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435","No response values.":"\u041D\u0435\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0434\u043B\u044F \u043E\u0442\u0432\u0435\u0442\u0430.",optional:"\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439",Parameter:"\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440","Permission:":"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u043E:",Response:"\u041E\u0442\u0432\u0435\u0442",Send:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C","Send a Sample Request":"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0442\u0435\u0441\u0442\u043E\u0432\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441","show up to version:":"\u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0435\u0440\u0441\u0438\u044E:","Size range:":"\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F:","Toggle navigation":"\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438",Type:"\u0422\u0438\u043F",url:"URL",Copy:"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C","Press Ctrl+C to copy":"\u041D\u0430\u0436\u043C\u0438\u0442\u0435 Ctrl+C, \u0447\u0442\u043E\u0431\u044B \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C","copied!":"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E!"},J={"Allowed values:":"\u0130zin verilen de\u011Ferler:","Compare all with predecessor":"T\xFCm\xFCn\xFC \xF6ncekiler ile kar\u015F\u0131la\u015Ft\u0131r","compare changes to:":"de\u011Fi\u015Fiklikleri kar\u015F\u0131la\u015Ft\u0131r:","compared to":"kar\u015F\u0131la\u015Ft\u0131r","Default value:":"Varsay\u0131lan de\u011Fer:",Description:"A\xE7\u0131klama",Field:"Alan",General:"Genel","Generated with":"Olu\u015Fturan",Name:"\u0130sim","No response values.":"D\xF6n\xFC\u015F verisi yok.",optional:"opsiyonel",Parameter:"Parametre","Permission:":"\u0130zin:",Response:"D\xF6n\xFC\u015F",Send:"G\xF6nder","Send a Sample Request":"\xD6rnek istek g\xF6nder","show up to version:":"bu versiyona kadar g\xF6ster:","Size range:":"Boyut aral\u0131\u011F\u0131:","Toggle navigation":"Navigasyonu de\u011Fi\u015Ftir",Type:"Tip",url:"url",Copy:"Kopya etmek","Press Ctrl+C to copy":"Kopyalamak i\xE7in Ctrl+C tu\u015Flar\u0131na bas\u0131n","copied!":"Kopya -lanan!"},ke={"Allowed values:":"Gi\xE1 tr\u1ECB ch\u1EA5p nh\u1EADn:","Compare all with predecessor":"So s\xE1nh v\u1EDBi t\u1EA5t c\u1EA3 phi\xEAn b\u1EA3n tr\u01B0\u1EDBc","compare changes to:":"so s\xE1nh s\u1EF1 thay \u0111\u1ED5i v\u1EDBi:","compared to":"so s\xE1nh v\u1EDBi","Default value:":"Gi\xE1 tr\u1ECB m\u1EB7c \u0111\u1ECBnh:",Description:"Ch\xFA th\xEDch",Field:"Tr\u01B0\u1EDDng d\u1EEF li\u1EC7u",General:"T\u1ED5ng quan","Generated with":"\u0110\u01B0\u1EE3c t\u1EA1o b\u1EDFi",Name:"T\xEAn","No response values.":"Kh\xF4ng c\xF3 k\u1EBFt qu\u1EA3 tr\u1EA3 v\u1EC1.",optional:"T\xF9y ch\u1ECDn",Parameter:"Tham s\u1ED1","Permission:":"Quy\u1EC1n h\u1EA1n:",Response:"K\u1EBFt qu\u1EA3",Send:"G\u1EEDi","Send a Sample Request":"G\u1EEDi m\u1ED9t y\xEAu c\u1EA7u m\u1EABu","show up to version:":"hi\u1EC3n th\u1ECB phi\xEAn b\u1EA3n:","Size range:":"K\xEDch c\u1EE1:","Toggle navigation":"Chuy\u1EC3n \u0111\u1ED5i \u0111i\u1EC1u h\u01B0\u1EDBng",Type:"Ki\u1EC3u",url:"li\xEAn k\u1EBFt",Copy:"B\u1EA3n sao","Press Ctrl+C to copy":"Nh\u1EA5n Ctrl+C \u0111\u1EC3 sao ch\xE9p","copied!":"Sao ch\xE9p!"},Ie={"Allowed values:":"\u5141\u8BB8\u503C:",Body:"\u8BF7\u6C42\u4F53","Compare all with predecessor":"\u4E0E\u6240\u6709\u4E4B\u524D\u7684\u7248\u672C\u6BD4\u8F83","compare changes to:":"\u5C06\u5F53\u524D\u7248\u672C\u4E0E\u6307\u5B9A\u7248\u672C\u6BD4\u8F83:","compared to":"\u76F8\u6BD4\u4E8E","Default value:":"\u9ED8\u8BA4\u503C:",DEPRECATED:"\u5F03\u7528",Description:"\u63CF\u8FF0","Error 4xx":"\u8BF7\u6C42\u5931\u8D25\uFF084xx\uFF09",Field:"\u5B57\u6BB5","Filter...":"\u7B5B\u9009\u2026",General:"\u6982\u8981","Generated with":"\u6784\u5EFA\u4E8E",Header:"\u8BF7\u6C42\u5934",Headers:"\u8BF7\u6C42\u5934",Name:"\u540D\u79F0","No response values.":"\u65E0\u8FD4\u56DE\u503C.","No value":"\u7A7A\u503C",optional:"\u53EF\u9009",Parameter:"\u53C2\u6570",Parameters:"\u53C2\u6570","Permission:":"\u6743\u9650:","Query Parameter(s)":"\u67E5\u8BE2\u53C2\u6570","Query Parameters":"\u67E5\u8BE2\u53C2\u6570","Request Body":"\u8BF7\u6C42\u6570\u636E",required:"\u5FC5\u9700",Reset:"\u91CD\u7F6E",Response:"\u8FD4\u56DE",Send:"\u53D1\u9001","Send a Sample Request":"\u53D1\u9001\u793A\u4F8B\u8BF7\u6C42","show up to version:":"\u663E\u793A\u6307\u5B9A\u7248\u672C:","Size range:":"\u53D6\u503C\u8303\u56F4:","Success 200":"\u8BF7\u6C42\u6210\u529F\uFF08200\uFF09","Toggle navigation":"\u5207\u63DB\u5C0E\u822A",Type:"\u7C7B\u578B",url:"\u5730\u5740",Copy:"\u590D\u5236\u6587\u672C","Press Ctrl+C to copy":"\u6309Ctrl+C\u590D\u5236","copied!":"\u6587\u672C\u5DF2\u590D\u5236!"},Ne={ca:C,cn:Ie,cs:F,de:H,es:x,en:{},fr:O,it:M,nl:Y,pl:W,pt:X,pt_br:X,ro:re,ru:de,tr:J,vi:ke,zh:Ie,zh_cn:Ie},Ve=((aa=window.navigator.language)!=null?aa:"en-GB").toLowerCase().substr(0,2);let fa=Ne[Ve]?Ne[Ve]:Ne.en;function ka(Re){const ge=fa[Re];return ge===void 0?Re:ge}function Ia(Re){if(!Object.prototype.hasOwnProperty.call(Ne,Re))throw new Error(`Invalid value for language setting! Available values are ${Object.keys(Ne).join(",")}`);fa=Ne[Re]}const Ea=Re=>{let ge={};const we=(_e,ce)=>ce.split(".").reduce((me,je)=>{if(me){if(me[je])return me[je];if(Array.isArray(me)&&me[0]&&me[0][je])return me[0][je]}return null},_e),Se=(_e,ce,me)=>{_e?Array.isArray(_e)?_e.length?_e[0][ce]=me:_e.push({[ce]:me}):_e[ce]=me:ge[ce]=me};Re.forEach(_e=>{const{parentNode:ce,field:me,type:je}=_e[0],We=ce?we(ge,ce.path):void 0,Ue=We?me.substring(ce.path.length+1):me,$e=je.indexOf("[]")!==-1;je.indexOf("Object")!==-1?Se(We,Ue,$e?[]:{}):Se(We,Ue,$e?[]:_e[1])});const V=Object.keys(ge);return V.length===1&&Re[0][0].optional&&(ge=ge[V[0]]),fe(ge)};function fe(Re){return JSON.stringify(Re,null,4)}function Te(Re){const ge=[];return Re.forEach(we=>{let Se;switch(we.type.toLowerCase()){case"string":Se=we.defaultValue||"";break;case"boolean":Se=Boolean(we.defaultValue)||!1;break;case"number":Se=parseInt(we.defaultValue||0,10);break;case"date":Se=we.defaultValue||new Date().toLocaleDateString(window.navigator.language);break}ge.push([we,Se])}),Ea(ge)}var Ae=ta(6209);class Ke extends Ae{constructor(ge){super(),this.testMode=ge}diffMain(ge,we,Se,V){return super.diff_main(this._stripHtml(ge),this._stripHtml(we),Se,V)}diffLineMode(ge,we){const Se=this.diff_linesToChars_(ge,we),V=Se.chars1,_e=Se.chars2,ce=Se.lineArray,me=super.diff_main(V,_e,!1);return this.diff_charsToLines_(me,ce),me}diffPrettyHtml(ge){const we=[],Se=/&/g,V=/</g,_e=/>/g,ce=/\n/g;for(let me=0;me<ge.length;me++){const je=ge[me][0],Ue=ge[me][1].replace(Se,"&amp;").replace(V,"&lt;").replace(_e,"&gt;").replace(ce,"&para;<br>");switch(je){case Ae.DIFF_INSERT:we[me]="<ins>"+Ue+"</ins>";break;case Ae.DIFF_DELETE:we[me]="<del>"+Ue+"</del>";break;case Ae.DIFF_EQUAL:we[me]="<span>"+Ue+"</span>";break}}return we.join("")}diffPrettyCode(ge){const we=[],Se=/\n/g;for(let V=0;V<ge.length;V++){const _e=ge[V][0],ce=ge[V][1],me=ce.match(Se)?"":`
`;switch(_e){case Ae.DIFF_INSERT:we[V]=ce.replace(/^(.)/gm,"+ $1")+me;break;case Ae.DIFF_DELETE:we[V]=ce.replace(/^(.)/gm,"- $1")+me;break;case Ae.DIFF_EQUAL:we[V]=ce.replace(/^(.)/gm,"  $1");break}}return we.join("")}diffCleanupSemantic(ge){return this.diff_cleanupSemantic(ge)}_stripHtml(ge){if(this.testMode)return ge;const we=document.createElement("div");return we.innerHTML=ge,we.textContent||we.innerText||""}}function ca(){l().registerHelper("markdown",function(V){return V&&(V=V.replace(/((\[(.*?)\])?\(#)((.+?):(.+?))(\))/mg,function(_e,ce,me,je,We,Ue,$e){const ea=je||Ue+"/"+$e;return'<a href="#api-'+Ue+"-"+$e+'">'+ea+"</a>"}),V)}),l().registerHelper("setInputType",function(V){switch(V){case"File":case"Email":case"Color":case"Number":case"Date":return V[0].toLowerCase()+V.substring(1);case"Boolean":return"checkbox";default:return"text"}});let Re;l().registerHelper("startTimer",function(V){return Re=new Date,""}),l().registerHelper("stopTimer",function(V){return console.log(new Date-Re),""}),l().registerHelper("__",function(V){return ka(V)}),l().registerHelper("cl",function(V){return console.log(V),""}),l().registerHelper("underscoreToSpace",function(V){return V.replace(/(_+)/g," ")}),l().registerHelper("removeDblQuotes",function(V){return V.replace(/"/g,"")}),l().registerHelper("assign",function(V){if(arguments.length>0){const _e=typeof arguments[1];let ce=null;(_e==="string"||_e==="number"||_e==="boolean")&&(ce=arguments[1]),l().registerHelper(V,function(){return ce})}return""}),l().registerHelper("nl2br",function(V){return we(V)}),l().registerHelper("ifNotObject",function(V,_e){return V&&V.indexOf("Object")!==0?_e.fn(this):_e.inverse(this)}),l().registerHelper("ifCond",function(V,_e,ce,me){switch(_e){case"==":return V==ce?me.fn(this):me.inverse(this);case"===":return V===ce?me.fn(this):me.inverse(this);case"!=":return V!=ce?me.fn(this):me.inverse(this);case"!==":return V!==ce?me.fn(this):me.inverse(this);case"<":return V<ce?me.fn(this):me.inverse(this);case"<=":return V<=ce?me.fn(this):me.inverse(this);case">":return V>ce?me.fn(this):me.inverse(this);case">=":return V>=ce?me.fn(this):me.inverse(this);case"&&":return V&&ce?me.fn(this):me.inverse(this);case"||":return V||ce?me.fn(this):me.inverse(this);default:return me.inverse(this)}});const ge={};l().registerHelper("subTemplate",function(V,_e){ge[V]||(ge[V]=l().compile(document.getElementById("template-"+V).innerHTML));const ce=ge[V],me=h().extend({},this,_e.hash);return new(l()).SafeString(ce(me))}),l().registerHelper("toLowerCase",function(V){return V&&typeof V=="string"?V.toLowerCase():""}),l().registerHelper("dot2bracket",function(V){const{parentNode:_e,field:ce,isArray:me}=V;let je="";if(_e){let We=V;do{const Ue=We.parentNode;Ue.isArray&&(je=`[]${je}`),Ue.parentNode?je=`[${Ue.field.substring(Ue.parentNode.path.length+1)}]${je}`:je=Ue.field+je,We=We.parentNode}while(We.parentNode);je+=`[${ce.substring(_e.path.length+1)}]`}else je=ce,me&&(je+="[]");return je}),l().registerHelper("nestObject",function(V){const{parentNode:_e,field:ce}=V;return _e?"&nbsp;&nbsp;".repeat(_e.path.split(".").length)+ce.substring(_e.path.length+1):ce});function we(V){return(""+V).replace(/(?:^|<\/pre>)[^]*?(?:<pre>|$)/g,_e=>_e.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,"$1<br>$2"))}l().registerHelper("each_compare_list_field",function(V,_e,ce){const me=ce.hash.field,je=[];V&&V.forEach(function(Ue){const $e=Ue;$e.key=Ue[me],je.push($e)});const We=[];return _e&&_e.forEach(function(Ue){const $e=Ue;$e.key=Ue[me],We.push($e)}),Se("key",je,We,ce)}),l().registerHelper("each_compare_keys",function(V,_e,ce){const me=[];V&&Object.keys(V).forEach(function(Ue){const $e={};$e.value=V[Ue],$e.key=Ue,me.push($e)});const je=[];return _e&&Object.keys(_e).forEach(function(Ue){const $e={};$e.value=_e[Ue],$e.key=Ue,je.push($e)}),Se("key",me,je,ce)}),l().registerHelper("body2json",function(V,_e){return Te(V)}),l().registerHelper("each_compare_field",function(V,_e,ce){return Se("field",V,_e,ce)}),l().registerHelper("each_compare_title",function(V,_e,ce){return Se("title",V,_e,ce)}),l().registerHelper("reformat",function(V,_e){if(_e==="json")try{return JSON.stringify(JSON.parse(V.trim()),null,"    ")}catch(ce){}return V}),l().registerHelper("showDiff",function(V,_e,ce){let me="";if(V===_e)me=V;else{if(!V)return _e;if(!_e)return V;const je=new Ke;if(ce==="code"){const We=je.diffLineMode(_e,V);me=je.diffPrettyCode(We)}else{const We=je.diffMain(_e,V);je.diffCleanupSemantic(We),me=je.diffPrettyHtml(We),me=me.replace(/&para;/gm,""),ce==="nl2br"&&(me=we(me))}}return me});function Se(V,_e,ce,me){const je=[];let We=0;_e&&_e.forEach(function(ea){let oa=!1;if(ce&&ce.forEach(function(ha){if(ea[V]===ha[V]){const Ca={typeSame:!0,source:ea,compare:ha,index:We};je.push(Ca),oa=!0,We++}}),!oa){const ha={typeIns:!0,source:ea,index:We};je.push(ha),We++}}),ce&&ce.forEach(function(ea){let oa=!1;if(_e&&_e.forEach(function(ha){ha[V]===ea[V]&&(oa=!0)}),!oa){const ha={typeDel:!0,compare:ea,index:We};je.push(ha),We++}});let Ue="";const $e=je.length;for(const ea in je)parseInt(ea,10)===$e-1&&(je[ea]._last=!0),Ue=Ue+me.fn(je[ea]);return Ue}}document.addEventListener("DOMContentLoaded",()=>{Wa(),T(),_().highlightAll()});function Wa(){var ze;let Re=[{type:"get",url:"/inqueryCertificate/{id_permohonan_izin}",title:"Inquiry Certificate",version:"5.0.0",description:"<p>Inquery Certificate di Sistem OSS</p>",name:"inqueryCertificate",group:"Certificate",examples:[{title:"Curl Request Example:",content:`curl --location --request GET 'https://server.digitaltelkom.dev/oss-sandbox/inqueryCertificate/I-202112171709158243106' \\
--header 'user_key: sJS23n1usBDj23192312312i3nsSo2sn' \\
--header 'Cookie: 8dd21093c6d03524cf9bc1ea99ad0576=9fe0048f4a04f91724dbe52f7c2cb5b7; 37dda41a6b8fc67de27a64fec9698b47=2354519a64edc01027a66707592dc003'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",isArray:!1,description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"user_key",isArray:!1,description:"<p>Users unique access-key.</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "user_key": {{user_key}}
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
  "user_key": {{user_key}}
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
  "user_key": {{user_key}}
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
  "user_key": {{user_key}}
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
    "file_lampiran": "abc.pdf",
    "persetujuan_form": false,
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
  "user_key": {{user_key}}
}`,type:"json"}]},body:[{group:"Body",type:"Object",optional:!1,field:"IZINSTATUS",isArray:!1,description:"<p>IZINSTATUS</p>"},{group:"Body",type:"String(13)",optional:!1,parentNode:{path:"IZINSTATUS",field:"IZINSTATUS",type:"Object",isArray:!1},field:"IZINSTATUS.nib",isArray:!1,description:"<p>Nomor Induk Berusaha</p>"},{group:"Body",type:"String(25)",optional:!1,parentNode:{path:"IZINSTATUS",field:"IZINSTATUS",type:"Object",isArray:!1},field:"IZINSTATUS.id_produk",isArray:!1,description:"<p>Id Produk</p>"},{group:"Body",type:"String(25)",optional:!1,parentNode:{path:"IZINSTATUS",field:"IZINSTATUS",type:"Object",isArray:!1},field:"IZINSTATUS.id_proyek",isArray:!1,description:"<p>Id Proyek</p>"},{group:"Body",type:"String(25)",optional:!1,parentNode:{path:"IZINSTATUS",field:"IZINSTATUS",type:"Object",isArray:!1},field:"IZINSTATUS.oss_id",isArray:!1,description:"<p>Oss Id adalah ID yang di Generate Sistem OSS dan Dikirimkan ke K/L/D Bersama Pengajuan Perizinan</p>"},{group:"Body",type:"String(25)",optional:!1,parentNode:{path:"IZINSTATUS",field:"IZINSTATUS",type:"Object",isArray:!1},field:"IZINSTATUS.id_izin",isArray:!1,description:"<p>Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin</p>"},{group:"Body",type:"String(12)",optional:!1,parentNode:{path:"IZINSTATUS",field:"IZINSTATUS",type:"Object",isArray:!1},field:"IZINSTATUS.kd_izin",isArray:!1,description:"<p>Kode Izin Sistem K/L/D (* Lihat Lampiran 8)</p>"},{group:"Body",type:"String(3)",optional:!1,parentNode:{path:"IZINSTATUS",field:"IZINSTATUS",type:"Object",isArray:!1},field:"IZINSTATUS.kd_instansi",isArray:!1,description:"<p>Kode Instansi</p>"},{group:"Body",type:"String(2)",optional:!1,parentNode:{path:"IZINSTATUS",field:"IZINSTATUS",type:"Object",isArray:!1},field:"IZINSTATUS.kd_status",isArray:!1,description:"<p>Kode Status Perizinan (* Lihat Lampiran 10)</p>"},{group:"Body",type:"String(18)",optional:!1,parentNode:{path:"IZINSTATUS",field:"IZINSTATUS",type:"Object",isArray:!1},field:"IZINSTATUS.tgl_status",isArray:!1,description:"<p>Tanggal Proses Status Izin (format date: YYYY-MM-DD HH:II:SS)</p>"},{group:"Body",type:"String(50)",optional:!1,parentNode:{path:"IZINSTATUS",field:"IZINSTATUS",type:"Object",isArray:!1},field:"IZINSTATUS.nip_status",isArray:!1,description:"<p>Nip Status Izin</p>"},{group:"Body",type:"String(50)",optional:!1,parentNode:{path:"IZINSTATUS",field:"IZINSTATUS",type:"Object",isArray:!1},field:"IZINSTATUS.nama_status",isArray:!1,description:"<p>Nama Status Izin</p>"},{group:"Body",type:"String(65535)",optional:!1,parentNode:{path:"IZINSTATUS",field:"IZINSTATUS",type:"Object",isArray:!1},field:"IZINSTATUS.keterangan",isArray:!1,description:"<p>keterangan</p>"},{group:"Body",type:"boolean",optional:!0,parentNode:{path:"IZINSTATUS",field:"IZINSTATUS",type:"Object",isArray:!1},field:"IZINSTATUS.persetujuan_form",isArray:!1,description:"<p>Form Persetujuan</p>",checked:!1},{group:"Body",type:"String(65535)",optional:!0,parentNode:{path:"IZINSTATUS",field:"IZINSTATUS",type:"Object",isArray:!1},field:"IZINSTATUS.file_lampiran",isArray:!1,description:"<p>File Lampiran</p>"},{group:"Body",type:"Object",optional:!0,parentNode:{path:"IZINSTATUS",field:"IZINSTATUS",type:"Object",isArray:!1},field:"IZINSTATUS.data_pnbp",isArray:!1,description:"<p>data_pnbp</p>"},{group:"Body",type:"String(20)",optional:!0,parentNode:{path:"IZINSTATUS.data_pnbp",parentNode:{path:"IZINSTATUS",field:"IZINSTATUS",type:"Object",isArray:!1},field:"IZINSTATUS.data_pnbp",type:"Object",isArray:!1},field:"IZINSTATUS.data_pnbp.kd_akun",isArray:!1,description:"<p>Kode Akun simponi</p>"},{group:"Body",type:"String(20)",optional:!0,parentNode:{path:"IZINSTATUS.data_pnbp",parentNode:{path:"IZINSTATUS",field:"IZINSTATUS",type:"Object",isArray:!1},field:"IZINSTATUS.data_pnbp",type:"Object",isArray:!1},field:"IZINSTATUS.data_pnbp.kd_penerimaan",isArray:!1,description:"<p>Kode Penerimaan</p>"},{group:"Body",type:"String(50)",optional:!0,parentNode:{path:"IZINSTATUS.data_pnbp",parentNode:{path:"IZINSTATUS",field:"IZINSTATUS",type:"Object",isArray:!1},field:"IZINSTATUS.data_pnbp",type:"Object",isArray:!1},field:"IZINSTATUS.data_pnbp.kd_billing",isArray:!1,description:"<p>Kode Billing</p>"},{group:"Body",type:"Date(10)",optional:!0,parentNode:{path:"IZINSTATUS.data_pnbp",parentNode:{path:"IZINSTATUS",field:"IZINSTATUS",type:"Object",isArray:!1},field:"IZINSTATUS.data_pnbp",type:"Object",isArray:!1},field:"IZINSTATUS.data_pnbp.tgl_billing",isArray:!1,description:"<p>Tgl terbit billing</p>"},{group:"Body",type:"Date(10)",optional:!0,parentNode:{path:"IZINSTATUS.data_pnbp",parentNode:{path:"IZINSTATUS",field:"IZINSTATUS",type:"Object",isArray:!1},field:"IZINSTATUS.data_pnbp",type:"Object",isArray:!1},field:"IZINSTATUS.data_pnbp.tgl_expire",isArray:!1,description:"<p>Tgl berlaku billing</p>"},{group:"Body",type:"number(20.0)",optional:!0,parentNode:{path:"IZINSTATUS.data_pnbp",parentNode:{path:"IZINSTATUS",field:"IZINSTATUS",type:"Object",isArray:!1},field:"IZINSTATUS.data_pnbp",type:"Object",isArray:!1},field:"IZINSTATUS.data_pnbp.nominal",isArray:!1,description:"<p>Nominal PNBP</p>"},{group:"Body",type:"String(255)",optional:!0,parentNode:{path:"IZINSTATUS.data_pnbp",parentNode:{path:"IZINSTATUS",field:"IZINSTATUS",type:"Object",isArray:!1},field:"IZINSTATUS.data_pnbp",type:"Object",isArray:!1},field:"IZINSTATUS.data_pnbp.url_dokumen",isArray:!1,description:"<p>URL Dokumen SPS</p>"}],parameter:{examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
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
    "file_lampiran": "abc.pdf",
    "persetujuan_form": false,
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
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"Object",optional:!1,field:"responreceiveLicenseStatus",isArray:!1,description:"<p>Response receive License Status</p>"},{group:"200",type:"String(3)",optional:!1,parentNode:{path:"responreceiveLicenseStatus",field:"responreceiveLicenseStatus",type:"Object",isArray:!1},field:"responreceiveLicenseStatus.kode",isArray:!1,description:"<p>Kode Respon</p>"},{group:"200",type:"String(255)",optional:!1,parentNode:{path:"responreceiveLicenseStatus",field:"responreceiveLicenseStatus",type:"Object",isArray:!1},field:"responreceiveLicenseStatus.keterangan",isArray:!1,description:"<p>Keterangan Respon</p>"},{group:"200",type:"Object",optional:!1,parentNode:{path:"responreceiveLicenseStatus",field:"responreceiveLicenseStatus",type:"Object",isArray:!1},field:"responreceiveLicenseStatus.dataNIB",isArray:!1,description:"<p>object kosong</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
 {
    "responreceiveLicenseStatus": {
      "kode": 200,
      "keterangan": "Sukses",
      "dataNIB": {}
    }
 }`,type:"json"}]},error:{fields:{400:[{group:"400",optional:!1,field:"400",isArray:!1,description:"<p>Data Parameter Salah.</p>"}],401:[{group:"401",optional:!1,field:"401",isArray:!1,description:"<p>User Akses Tidak Valid.</p>"}],403:[{group:"403",optional:!1,field:"403",isArray:!1,description:"<p>Ilegal Inquiry / Akses.</p>"}],404:[{group:"404",optional:!1,field:"404",isArray:!1,description:"<p>Service Tidak Ditemukan.</p>"}],405:[{group:"405",optional:!1,field:"405",isArray:!1,description:"<p>Akses Service Ditolak.</p>"}],500:[{group:"500",optional:!1,field:"500",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Gagal.</p>"}],504:[{group:"504",optional:!1,field:"504",isArray:!1,description:"<p>Proses Payload Data Di Sistem OSS Timeout.</p>"}]},examples:[{title:"Error-Response:",content:`{
   "responreceiveLicenseStatus": {
     "kode": 200,
     "keterangan": "Sukses",
     "dataNIB": {}
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
  "user_key": {{user_key}}
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"IZINSTATUS",isArray:!1,description:"<p>IZINSTATUS</p>"},{group:"Parameter",type:"string(13)",optional:!1,parentNode:{path:"IZINSTATUS",field:"IZINSTATUS",type:"Object",isArray:!1},field:"IZINSTATUS.id_izin",isArray:!1,description:"<p>id_izin</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
{
  "IZINSTATUS": {
    "id_izin": ""
  }
}`,type:"json"}]},success:{fields:{200:[{group:"200",type:"object",optional:!1,field:"responcheckLicenseStatus",isArray:!1,description:"<p>responcheckLicenseStatus</p>"},{group:"200",type:"string(3)",optional:!1,field:"responcheckLicenseStatus.kode",isArray:!1,description:"<p>Kode Respon (*Lihat Lampiran 9)</p>"},{group:"200",type:"string(255)",optional:!1,field:"responcheckLicenseStatus.keterangan",isArray:!1,description:"<p>Keterangan Respon</p>"},{group:"200",type:"object",optional:!1,field:"responcheckLicenseStatus.dataIZIN",isArray:!1,description:"<p>dataIZIN</p>"},{group:"200",type:"string(13)",optional:!1,field:"responcheckLicenseStatus.dataIZIN.nib",isArray:!1,description:"<p>Nomor Induk Berusaha</p>"},{group:"200",type:"string(25)",optional:!1,field:"responcheckLicenseStatus.dataIZIN.id_proyek",isArray:!1,description:"<p>ID proyek</p>"},{group:"200",type:"string(25)",optional:!1,field:"responcheckLicenseStatus.dataIZIN.id_izin",isArray:!1,description:"<p>Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin</p>"},{group:"200",type:"string(2)",optional:!1,field:"responcheckLicenseStatus.dataIZIN.kd_status",isArray:!1,description:"<p>Kode Status Perizinan (* Lihat Lampiran 10)</p>"},{group:"200",type:"string(255)",optional:!1,field:"responcheckLicenseStatus.dataIZIN.uraian_status",isArray:!1,description:"<p>Uraian status</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
{
  "responcheckLicenseStatus": {
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
        "nib": "812020773XXXX",
        "id_proyek": "R-20211214114021393XXXX",
        "oss_id": "P02-20191216211238301XXXX",
        "id_izin": "I-20211118160441053XXXX",
        "kd_izin": "033000000XXX",
        "kd_daerah": "3201000000",
        "nomor_izin": "",
        "tgl_terbit_izin": "YYYY-MM-DD",
        "tgl_berlaku_izin": "YYYY-MM-DD",
        "nama_ttd": "",
        "nip_ttd": "",
        "jabatan_ttd": "",
        "status_izin": "45",
        "file_izin": "",
        "keterangan": "",
        "file_lampiran": "",
        "nomenklatur_nomor_izin": "",
        "bln_berlaku_izin": 6,
        "thn_berlaku_izin": 1,
        "jenis_perizinan": "02",
        "data_teknis": {
           "id_komitmen": ""
           "luas_bangunan_disetujui": "",
           "jumlah_lantai_disetujui": "",
           "tinggi_bangunan_disetujui": "",
           "luas_basement_disetujui": "",
           "jumlah_lantai_basement_disetujui": ""
        }
    }
}'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",isArray:!1,description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"user_key",isArray:!1,description:"<p>Users unique access-key.</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "user_key": "{{user_key}}"
}`,type:"json"}]},parameter:{examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
{
  "IZINFINAL": {
    "nib": "812020773XXXX",
    "id_proyek": "R-20211214114021393XXXX",
    "oss_id": "P02-20191216211238301XXXX",
    "id_izin": "I-20211118160441053XXXX",
    "kd_izin": "033000000XXX",
    "kd_daerah": "3201000000",
    "nomor_izin": "",
    "tgl_terbit_izin": "YYYY-MM-DD",
    "tgl_berlaku_izin": "YYYY-MM-DD",
    "nama_ttd": "",
    "nip_ttd": "",
    "jabatan_ttd": "",
    "status_izin": "45",
    "file_izin": "",
    "keterangan": "",
    "file_lampiran": "",
    "nomenklatur_nomor_izin": "",
    "bln_berlaku_izin": 6,
    "thn_berlaku_izin": 1,
    "jenis_perizinan": "02",
    "data_teknis": {
       "id_komitmen": ""
       "luas_bangunan_disetujui": "",
       "jumlah_lantai_disetujui": "",
       "tinggi_bangunan_disetujui": "",
       "luas_basement_disetujui": "",
       "jumlah_lantai_basement_disetujui": ""
    }
  }
}`,type:"json"}]},body:[{group:"Body",type:"Object",optional:!1,field:"IZINFINAL",isArray:!1,description:"<p>IZINFINAL</p>"},{group:"Body",type:"String(13)",size:"13",optional:!1,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.nib",isArray:!1,description:"<p>Nomor Induk Berusaha</p>"},{group:"Body",type:"String(25)",size:"25",optional:!1,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.id_proyek",isArray:!1,description:"<p>Id Proyek</p>"},{group:"Body",type:"String(25)",size:"25",optional:!1,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.oss_id",isArray:!1,description:"<p>Oss Id adalah ID yang di Generate Sistem OSS dan Dikirimkan ke K/L/D Bersama Permohonan Nomor Induk Berusaha</p>"},{group:"Body",type:"String(25)",size:"25",optional:!1,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.id_izin",isArray:!1,description:"<p>Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin</p>"},{group:"Body",type:"String(12)",size:"12",optional:!1,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.kd_izin",isArray:!1,description:"<p>Kode Izin Sistem K/L/D (* Lihat Lampiran 8)</p>"},{group:"Body",type:"String(10)",size:"10",optional:!1,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.kd_daerah",isArray:!1,description:"<p>Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Body",type:"String(50)",size:"50",optional:!1,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.nomor_izin",isArray:!1,description:"<p>Nomor Izin Final</p>"},{group:"Body",type:"String(10)",size:"10",optional:!1,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.tgl_terbit_izin",isArray:!1,description:"<p>Tanggal Izin Final (format date : YYYY-MM-DD)</p>"},{group:"Body",type:"String(10)",size:"10",optional:!1,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.tgl_berlaku_izin",isArray:!1,description:"<p>Tanggal Berlaku Izin Final (format date : YYYY-MM-DD)</p>"},{group:"Body",type:"String(50)",size:"50",optional:!1,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.nama_ttd",isArray:!1,description:"<p>Nama Penandatangan Izin</p>"},{group:"Body",type:"String(25)",size:"25",optional:!1,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.nip_ttd",isArray:!1,description:"<p>Nip Penandatangan Izin</p>"},{group:"Body",type:"String(150)",size:"150",optional:!1,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.jabatan_ttd",isArray:!1,description:"<p>Jabatan Penandatangan Izin</p>"},{group:"Body",type:"String(2)",size:"2",optional:!1,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.status_izin",isArray:!1,description:"<p>Status Izin di Sistem OSS (* Lihat Lampiran 10)</p>"},{group:"Body",type:"String(65535)",size:"65535",optional:!0,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.file_izin",isArray:!1,description:"<p>Attachment File Izin dalam Bentuk File PDF Berupa Link (* Ukuran File Maks: 2MB)</p>"},{group:"Body",type:"String(65535)",size:"65535",optional:!0,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.keterangan",isArray:!1,description:"<p>Keterangan Status Izin</p>"},{group:"Body",type:"String(65535)",size:"65535",optional:!0,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.file_lampiran",isArray:!1,description:"<p>Attachment File Izin dalam Bentuk File PDF Berupa Link (* Ukuran File Maks: 2MB)</p>"},{group:"Body",type:"String(255)",size:"255",optional:!0,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.nomenklatur_nomor_izin",isArray:!1,description:"<p>Nomenklatur nomor izin</p>"},{group:"Body",type:"Number(5)",size:"5",optional:!0,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.bln_berlaku_izin",isArray:!1,description:"<p>angka waktu berlaku izin dalam bulan</p>"},{group:"Body",type:"Number(5)",size:"5",optional:!0,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.thn_berlaku_izin",isArray:!1,description:"<p>angka waktu berlaku izin dalam tahun</p>"},{group:"Body",type:"String(3)",size:"3",optional:!0,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.jenis_perizinan",isArray:!1,description:"<p>Jenis Izin (* Lihat Lampiran 27)</p>"},{group:"Body",type:"Object",optional:!0,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.data_teknis",isArray:!1,description:"<p>data teknis</p>"},{group:"Body",type:"String(25)",size:"25",optional:!0,parentNode:{path:"IZINFINAL.data_teknis",parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.data_teknis",type:"Object",isArray:!1},field:"IZINFINAL.data_teknis.id_komitmen",isArray:!1,description:"<p>ID komitmen data teknis</p>"},{group:"Body",type:"String(25)",size:"25",optional:!0,parentNode:{path:"IZINFINAL.data_teknis",parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.data_teknis",type:"Object",isArray:!1},field:"IZINFINAL.data_teknis.luas_bangunan_disetujui",isArray:!1,description:"<p>luas bangungan yang disetujui</p>"},{group:"Body",type:"String(2)",size:"2",optional:!0,parentNode:{path:"IZINFINAL.data_teknis",parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.data_teknis",type:"Object",isArray:!1},field:"IZINFINAL.data_teknis.jumlah_lantai_disetujui",isArray:!1,description:"<p>jumlah lantai yang disetujui</p>"},{group:"Body",type:"String(5)",size:"5",optional:!0,parentNode:{path:"IZINFINAL.data_teknis",parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.data_teknis",type:"Object",isArray:!1},field:"IZINFINAL.data_teknis.tinggi_bangunan_disetujui",isArray:!1,description:"<p>tinggi bangunan disetujui yang disetujui</p>"},{group:"Body",type:"String(25)",size:"25",optional:!0,parentNode:{path:"IZINFINAL.data_teknis",parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.data_teknis",type:"Object",isArray:!1},field:"IZINFINAL.data_teknis.luas_basement_disetujui",isArray:!1,description:"<p>luas basement yang disetujui</p>"},{group:"Body",type:"String(25)",size:"25",optional:!0,parentNode:{path:"IZINFINAL.data_teknis",parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.data_teknis",type:"Object",isArray:!1},field:"IZINFINAL.data_teknis.jumlah_lantai_basement_disetujui",isArray:!1,description:"<p>jumlah basement yang disetujui</p>"}],success:{fields:{200:[{group:"200",type:"Object",optional:!1,field:"responreceiveLicense",isArray:!1,description:"<p>Response receive license</p>"},{group:"200",type:"Number(3)",optional:!1,parentNode:{path:"responreceiveLicense",field:"responreceiveLicense",type:"Object",isArray:!1},field:"responreceiveLicense.kode",isArray:!1,description:"<p>Kode Respon <b>(* Lihat Lampiran 9)</b></p>"},{group:"200",type:"String(255)",optional:!1,parentNode:{path:"responreceiveLicense",field:"responreceiveLicense",type:"Object",isArray:!1},field:"responreceiveLicense.keterangan",isArray:!1,description:"<p>Keterangan Respon</p>"},{group:"200",type:"String(30)",optional:!1,parentNode:{path:"responreceiveLicense",field:"responreceiveLicense",type:"Object",isArray:!1},field:"responreceiveLicense.nomor_izin",isArray:!1,description:"<p>Nomor Izin yang diterbitkan OSS</p>"},{group:"200",type:"String(3)",size:"3",optional:!0,parentNode:{path:"responreceiveLicense",field:"responreceiveLicense",type:"Object",isArray:!1},field:"responreceiveLicense.jenis_perizinan",isArray:!1,description:"<p>Jenis Izin <b>(* Lihat Lampiran 27)</b></p>"},{group:"200",type:"String(65535)",size:"65535",optional:!0,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.file_lampiran",isArray:!1,description:"<p>Attachment File Izin dalam Bentuk File PDF Berupa Link (* Ukuran File Maks: 2MB)</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
{
	 "responreceiveLicense": {
       "kode": 200,
       "keterangan": "",
       "nomor_izin": "",
       "jenis_perizinan": "",
       "file_lampiran": "",
	 }
}`,type:"json"}]},error:{fields:{400:[{group:"400",type:"Object",optional:!1,field:"responreceiveLicense",isArray:!1,description:"<p>Response receive license.</p>"},{group:"400",type:"Number(3)",size:"3",optional:!1,parentNode:{path:"responreceiveLicense",field:"responreceiveLicense",type:"Object",isArray:!1},field:"responreceiveLicense.kode",isArray:!1,description:"<p>Kode Respon <b>(* Lihat Lampiran 9)</b></p>"},{group:"400",type:"String(255)",optional:!1,parentNode:{path:"responreceiveLicense",field:"responreceiveLicense",type:"Object",isArray:!1},field:"responreceiveLicense.keterangan",isArray:!1,description:"<p>Keterangan Respon (Data Parameter Salah)</p>"}],401:[{group:"401",type:"Object",optional:!1,field:"responreceiveLicense",isArray:!1,description:"<p>Response receive license.</p>"},{group:"401",type:"Number(3)",size:"3",optional:!1,parentNode:{path:"responreceiveLicense",field:"responreceiveLicense",type:"Object",isArray:!1},field:"responreceiveLicense.kode",isArray:!1,description:"<p>Kode Respon <b>(* Lihat Lampiran 9)</b></p>"},{group:"401",type:"String(255)",optional:!1,parentNode:{path:"responreceiveLicense",field:"responreceiveLicense",type:"Object",isArray:!1},field:"responreceiveLicense.keterangan",isArray:!1,description:"<p>Keterangan Respon (User Akses Tidak Valid)</p>"}],403:[{group:"403",type:"Object",optional:!1,field:"responreceiveLicense",isArray:!1,description:"<p>Response receive license.</p>"},{group:"403",type:"Number(3)",size:"3",optional:!1,parentNode:{path:"responreceiveLicense",field:"responreceiveLicense",type:"Object",isArray:!1},field:"responreceiveLicense.kode",isArray:!1,description:"<p>Kode Respon <b>(* Lihat Lampiran 9)</b></p>"},{group:"403",type:"String(255)",optional:!1,parentNode:{path:"responreceiveLicense",field:"responreceiveLicense",type:"Object",isArray:!1},field:"responreceiveLicense.keterangan",isArray:!1,description:"<p>Keterangan Respon (Ilegal Inquiry / Akses.)</p>"}],404:[{group:"404",type:"Object",optional:!1,field:"responreceiveLicense",isArray:!1,description:"<p>Response receive license.</p>"},{group:"404",type:"Number(3)",size:"3",optional:!1,parentNode:{path:"responreceiveLicense",field:"responreceiveLicense",type:"Object",isArray:!1},field:"responreceiveLicense.kode",isArray:!1,description:"<p>Kode Respon <b>(* Lihat Lampiran 9)</b></p>"},{group:"404",type:"String(255)",optional:!1,parentNode:{path:"responreceiveLicense",field:"responreceiveLicense",type:"Object",isArray:!1},field:"responreceiveLicense.keterangan",isArray:!1,description:"<p>Keterangan Respon (Data / Service Tidak Ditemukan.)</p>"}],405:[{group:"405",type:"Object",optional:!1,field:"responreceiveLicense",isArray:!1,description:"<p>Response receive license.</p>"},{group:"405",type:"Number(3)",size:"3",optional:!1,parentNode:{path:"responreceiveLicense",field:"responreceiveLicense",type:"Object",isArray:!1},field:"responreceiveLicense.kode",isArray:!1,description:"<p>Kode Respon <b>(* Lihat Lampiran 9)</b></p>"},{group:"405",type:"String(255)",optional:!1,parentNode:{path:"responreceiveLicense",field:"responreceiveLicense",type:"Object",isArray:!1},field:"responreceiveLicense.keterangan",isArray:!1,description:"<p>Keterangan Respon (Akses Service Ditolak)</p>"}],500:[{group:"500",type:"Object",optional:!1,field:"responreceiveLicense",isArray:!1,description:"<p>Response receive license.</p>"},{group:"500",type:"Number(3)",size:"3",optional:!1,parentNode:{path:"responreceiveLicense",field:"responreceiveLicense",type:"Object",isArray:!1},field:"responreceiveLicense.kode",isArray:!1,description:"<p>Kode Respon <b>(* Lihat Lampiran 9)</b></p>"},{group:"500",type:"String(255)",optional:!1,parentNode:{path:"responreceiveLicense",field:"responreceiveLicense",type:"Object",isArray:!1},field:"responreceiveLicense.keterangan",isArray:!1,description:"<p>Keterangan Respon (Proses Payload Data Di Sistem OSS Gagal)</p>"}],504:[{group:"504",type:"Object",optional:!1,field:"responreceiveLicense",isArray:!1,description:"<p>Response receive license.</p>"},{group:"504",type:"Number(3)",size:"3",optional:!1,parentNode:{path:"responreceiveLicense",field:"responreceiveLicense",type:"Object",isArray:!1},field:"responreceiveLicense.kode",isArray:!1,description:"<p>Kode Respon <b>(* Lihat Lampiran 9)</b></p>"},{group:"504",type:"String(255)",optional:!1,parentNode:{path:"responreceiveLicense",field:"responreceiveLicense",type:"Object",isArray:!1},field:"responreceiveLicense.keterangan",isArray:!1,description:"<p>Keterangan Respon (Proses Payload Data Di Sistem OSS Timeout)</p>"}]},examples:[{title:"Error-Response:",content:`{
	 "responreceiveLicense": {
		 "kode": 500,
		 "keterangan": "",
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
  "user_key": {{user_key}}
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
  "user_key": {{user_key}}
}`,type:"json"}]},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"IZINFINAL",isArray:!1,description:"<p>IZINFINAL</p>"},{group:"Parameter",type:"string(13)",optional:!1,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.nib",isArray:!1,description:"<p>Nomor Induk Berusaha</p>"},{group:"Parameter",type:"string(25)",optional:!1,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.id_produk",isArray:!1,description:"<p>ID Produk</p>"},{group:"Parameter",type:"string(25)",optional:!1,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.id_proyek",isArray:!1,description:"<p>ID / Kode Proyek</p>"},{group:"Parameter",type:"string(25)",optional:!1,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.oss_id",isArray:!1,description:"<p>Oss Id adalah ID yang di Generate Sistem OSS dan Dikirimkan ke K/L/D Bersama Permohonan Nomor Induk Berusaha</p>"},{group:"Parameter",type:"string(25)",optional:!1,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.id_izin",isArray:!1,description:"<p>Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin</p>"},{group:"Parameter",type:"string(12)",optional:!1,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.kd_izin",isArray:!1,description:"<p>Kode Izin Sistem K/L/D (* Lihat Lampiran 8)</p>"},{group:"Parameter",type:"string(10)",optional:!1,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.kd_daerah",isArray:!1,description:"<p>Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"Parameter",type:"string(2)",optional:!1,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.kewenangan",isArray:!1,description:"<p>00: Kewenangan Pusat; 01: Kewenangan Provinsi; 02: Kewenangan Kab/Kota</p>"},{group:"Parameter",type:"string(50)",optional:!1,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.nomor_izin",isArray:!1,description:"<p>Nomor Izin Final</p>"},{group:"Parameter",type:"string(10)",optional:!1,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.tgl_terbit_izin",isArray:!1,description:"<p>Tanggal Izin Final (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(10)",optional:!1,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.tgl_berlaku_izin",isArray:!1,description:"<p>Tanggal Berlaku Izin Final (format date : YYYY-MM-DD)</p>"},{group:"Parameter",type:"string(50)",optional:!1,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.nama_ttd",isArray:!1,description:"<p>Nama Penandatangan Izin</p>"},{group:"Parameter",type:"string(25)",optional:!1,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.nip_ttd",isArray:!1,description:"<p>Nip Penandatangan Izin</p>"},{group:"Parameter",type:"string(150)",optional:!1,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.jabatan_ttd",isArray:!1,description:"<p>Jabatan Penandatangan Izin</p>"},{group:"Parameter",type:"string(2)",optional:!1,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.status_izin",isArray:!1,description:"<p>Status Izin di Sistem OSS (* Lihat Lampiran 10)</p>"},{group:"Parameter",type:"string(65535)",optional:!1,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.file_izin",isArray:!1,description:"<p>Attachment File Izin dalam Bentuk File PDF Berupa Link (* Ukuran File Maks: 2MB)</p>"},{group:"Parameter",type:"string(65535)",optional:!1,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.keterangan",isArray:!1,description:"<p>Keterangan Status Izin</p>"},{group:"Parameter",type:"string(65535)",optional:!1,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.file_lampiran",isArray:!1,description:"<p>Attachment File Izin dalam Bentuk File PDF Berupa Link (* Ukuran File Maks: 2MB)</p>"},{group:"Parameter",type:"string(255)",optional:!1,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.nomenklatur_nomor_izin",isArray:!1,description:"<p>Nomenklatur nomor izin</p>"},{group:"Parameter",type:"string(5)",optional:!1,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.bln_berlaku_izin",isArray:!1,description:"<p>Jangka waktu berlaku izin dalam bulan</p>"},{group:"Parameter",type:"string(5)",optional:!1,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.thn_berlaku_izin",isArray:!1,description:"<p>Jangka waktu berlaku izin dalam tahun</p>"},{group:"Parameter",type:"object[]",optional:!1,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.data_pnbp",isArray:!0,description:"<p>data_pnbp</p>"},{group:"Parameter",type:"string(20)",optional:!1,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.data_pnbp.kd_akun",isArray:!1,description:"<p>Kode Akun PNBP dari Simponi Kemenkeu</p>"},{group:"Parameter",type:"string(20)",optional:!1,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.data_pnbp.kd_penerimaan",isArray:!1,description:"<p>Kode Jenis Penerimaan dari Simponi Kemenkeu</p>"},{group:"Parameter",type:"number(20.0)",optional:!1,parentNode:{path:"IZINFINAL",field:"IZINFINAL",type:"Object",isArray:!1},field:"IZINFINAL.data_pnbp.nominal",isArray:!1,description:"<p>Jumlah Nilai PNBP (Default Valuta : IDR)</p>"}]},examples:[{title:"RequestBody-Example:",content:`HTTP/1.1 200 OK
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
  "user_key": {{user_key}}
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
  "user_key": {{user_key}}
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
  "user_key": {{user_key}}
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
}`,type:"json"}]},filename:"endpoint.js",groupTitle:"NIB",sampleRequest:[{url:"https://server.digitaltelkom.dev/oss-sandbox/checkNIBUpdate"}]},{type:"post",url:"/inqueryNIB",title:"Inquery NIB",version:"5.0.0",description:"<p>Inquery Data Nomor Induk Berusaha (NIB) di Sistem OSS</p>",name:"inqueryNIB",group:"NIB",examples:[{title:"Curl Request Example:",content:` curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/inqueryNIB' \\
 --header 'user_key: {{user_key}}' \\
 --header 'Content-Type: application/json' \\
 --data-raw '{
     "INQUERYNIB": {
         "nib": "{{nib}}"
     }
 }'

 curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/inqueryNIB' \\
 --header 'user_key: {{user_key}}' \\
 --header 'Content-Type: application/json' \\
 --data-raw '{
     "INQUERYNIB": {
         "nib": "{{nib}}",
         "oss_id": "{{oss_id}}"
     }
 }'

curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/inqueryNIB' \\
 --header 'user_key: {{user_key}}' \\
 --header 'Content-Type: application/json' \\
 --data-raw '{
     "INQUERYNIB": {
         "npwp": "{{npwp}}"
     }
 }'`,type:"curl"}],header:{fields:{Header:[{group:"Header",type:"String",optional:!1,field:"Content-Type",isArray:!1,description:"<p>Content Type Request.</p>"},{group:"Header",type:"String",optional:!1,field:"user_key",isArray:!1,description:"<p>Users unique access-key.</p>"}]},examples:[{title:"Header-Example:",content:`{
  "Content-Type": "application/json",
  "user_key": {{user_key}}
}`,type:"json"}]},body:[{group:"Body",type:"object",optional:!1,field:"INQUERYNIB",isArray:!1,description:"<p>INQUERYNIB</p>"},{group:"Body",type:"string(13)",size:"13",optional:!1,field:"INQUERYNIB.nib",isArray:!1,description:"<p>Nomor Induk Berusaha</p>"},{group:"Body",type:"string(25)",size:"25",optional:!0,field:"INQUERYNIB.oss_id",isArray:!1,description:"<p>OSS Id adalah ID yang di Generate Sistem OSS dan Dikirimkan ke K/L/D Bersama Permohonan Nomor Induk Berusaha</p>"},{group:"Body",type:"string(16)",size:"16",optional:!0,field:"INQUERYNIB.npwp",isArray:!1,description:"<p>NPWP Perusahaan</p>"}],parameter:{examples:[{title:"RequestBody-Example:",content:` HTTP/1.1 200 OK
 {
 	 "INQUERYNIB": {
 		 "nib": "{{nib}}"
 	 }
 }

{
 	 "INQUERYNIB": {
 		 "nib": "{{nib}}",
         "oss_id": "{{oss_id}}"
 	 }
 }

{
 	 "INQUERYNIB": {
 		 "npwp": "{{npwp}}"
 	 }
 }`,type:"json"}]},success:{fields:{200:[{group:"200",type:"object",optional:!1,field:"responinqueryNIB",isArray:!1,description:"<p>Data responinqueryNIB</p>"},{group:"200",type:"string(3)",optional:!1,field:"responinqueryNIB.kode",isArray:!1,description:"<p>Kode respon</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.keterangan",isArray:!1,description:"<p>keterangan</p>"},{group:"200",type:"object",optional:!1,field:"responinqueryNIB.dataNIB",isArray:!1,description:"<p>dataNIB</p>"},{group:"200",type:"string(13)",optional:!1,field:"responinqueryNIB.dataNIB.nib",isArray:!1,description:"<p>Nomor Induk Berusaha</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.tgl_pengajuan_nib",isArray:!1,description:"<p>Tanggal Pengajuan NIB (format date : YYYY-MM-DD)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.tgl_terbit_nib",isArray:!1,description:"<p>Tanggal Penerbitan NIB (format date : YYYY-MM-DD)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.tgl_perubahan_nib",isArray:!1,description:"<p>Tanggal Perubahan NIB (format date : YYYY-MM-DD)</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.oss_id",isArray:!1,description:"<p>Oss Id adalah ID yang di Generate Sistem OSS dan Dikirimkan ke K/L/D Bersama Permohonan Nomor Induk Berusaha</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.jenis_pelaku_usaha",isArray:!1,description:"<p>Jenis Pelaku Usaha (* Lihat Lampiran 18)</p>"},{group:"200",type:"string(20)",optional:!1,field:"responinqueryNIB.dataNIB.no_npp",isArray:!1,description:"<p>Nomor Pendaftaraan Perusahaan Untuk BPJS Ketenagakerjaan</p>"},{group:"200",type:"string(20)",optional:!1,field:"responinqueryNIB.dataNIB.no_va",isArray:!1,description:"<p>Nomor Pendaftaraan Perusahaan Untuk BPJS Kesehatan</p>"},{group:"200",type:"string(23)",optional:!1,field:"responinqueryNIB.dataNIB.no_wlkp",isArray:!1,description:"<p>Nomor Wajib Lapor Ketenagakerjaan Perusahaan</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.flag_perusahaan",isArray:!1,description:"<p>Flag :Y = Untuk Perusahaan Baru,N= Untuk Perusahaan Lama / Exist</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.flag_ekspor",isArray:!1,description:"<p>Y : Melakukan Aktifikas Ekspor, N : Tidak Melakukan Aktifitas Ekspor</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.flag_impor",isArray:!1,description:"<p>Y : Melakukan Aktifikas Impor, N : Tidak Melakukan Aktifitas Impor</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.jenis_api",isArray:!1,description:"<p>Jenis Angka Pengenal Impor (API) (* Lihat Lampiran 3)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.gabung_negara",isArray:!1,description:"<p>PMA Merupakan Gabungan Negara Atau Tidak (* Y:Gabungan Negara, N: Bukan Gabungan Negara)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.negara_pma_dominan",isArray:!1,description:"<p>Negara Asing Yang Memiliki Modal Mayoritas</p>"},{group:"200",type:"number(20.2)",optional:!1,field:"responinqueryNIB.dataNIB.total_pma",isArray:!1,description:"<p>Total Modal PMA</p>"},{group:"200",type:"number(20.2)",optional:!1,field:"responinqueryNIB.dataNIB.nilai_pma_dominan",isArray:!1,description:"<p>Nilai Modal PMA Dominan</p>"},{group:"200",type:"number(20.2)",optional:!1,field:"responinqueryNIB.dataNIB.nilai_pmdn",isArray:!1,description:"<p>Nilai Modal PMDN</p>"},{group:"200",type:"number(9.2)",optional:!1,field:"responinqueryNIB.dataNIB.persen_pma",isArray:!1,description:"<p>Persentase Modal PMA</p>"},{group:"200",type:"number(9.2)",optional:!1,field:"responinqueryNIB.dataNIB.persen_pmdn",isArray:!1,description:"<p>Persentase Modal PMDN</p>"},{group:"200",type:"number(5)",optional:!1,field:"responinqueryNIB.dataNIB.kd_kawasan",isArray:!1,description:"<p>Kode Kawasan (* Lihat Lampiran di https://oss.go.id/oss/#home/po rtal/lstKawasan)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.jenis_kawasan",isArray:!1,description:"<p>Jenis Kawasan (* Lihat Lampiran 21)</p>"},{group:"200",type:"string(5)",optional:!1,field:"responinqueryNIB.dataNIB.versi_pia",isArray:!1,description:"<p>Versi PIA OSS</p>"},{group:"200",type:"string(2)",size:"2",optional:!1,field:"responinqueryNIB.dataNIB.skala_usaha",isArray:!1,description:"<p>Skala Usaha Perusahaan</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.jangka_waktu",isArray:!1,description:"<p>Jangka Waktu (format date : YYYY- MM-DD)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.status_badan_hukum",isArray:!1,description:"<p>Status Badan Hukum (* Lihat Lampiran 12)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.status_penanaman_modal",isArray:!1,description:"<p>Status Penanaman Modal (* Lihat Lampiran 1)</p>"},{group:"200",type:"string(15)",optional:!1,field:"responinqueryNIB.dataNIB.npwp_perseroan",isArray:!1,description:"<p>NPWP Perseroan</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.nama_perseroan",isArray:!1,description:"<p>Nama Perseroan</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.nama_singkatan",isArray:!1,description:"<p>Nama Singkatan Perseroan</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.jenis_perseroan",isArray:!1,description:"<p>Jenis Perseroan (* Lihat Lampiran 2)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.status_perseroan",isArray:!1,description:"<p>Status Perseroan (*Y: Terbuka, N:Tertutup)</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.alamat_perseroan",isArray:!1,description:"<p>Alamat Perseroan</p>"},{group:"200",type:"string(7)",optional:!1,field:"responinqueryNIB.dataNIB.rt_rw_perseroan",isArray:!1,description:"<p>Rt Rw Perseroan</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.kelurahan_perseroan",isArray:!1,description:"<p>Kelurahan Perseroan</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.perseroan_daerah_id",isArray:!1,description:"<p>ID Daerah Perseroan (* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"200",type:"string(5)",optional:!1,field:"responinqueryNIB.dataNIB.kode_pos_perseroan",isArray:!1,description:"<p>Kode Pos Perseroan</p>"},{group:"200",type:"string(20)",optional:!1,field:"responinqueryNIB.dataNIB.nomor_telpon_perseroan",isArray:!1,description:"<p>Nomor Telepon Perseroan</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.email_perusahaan",isArray:!1,description:"<p>Email Perusahaan</p>"},{group:"200",type:"string(20.2)",optional:!1,field:"responinqueryNIB.dataNIB.dalam_bentuk_uang",isArray:!1,description:"<p>Modal Dalam Bentuk Uang (Valuta : IDR)</p>"},{group:"200",type:"string(50000)",optional:!1,field:"responinqueryNIB.dataNIB.dalam_bentuk_lain",isArray:!1,description:"<p>Modal Dalam Bentuk Lainnya</p>"},{group:"200",type:"string(20.2)",optional:!1,field:"responinqueryNIB.dataNIB.total_modal_dasar",isArray:!1,description:"<p>Total Modal Dasar (Valuta : IDR)</p>"},{group:"200",type:"string(20.2)",optional:!1,field:"responinqueryNIB.dataNIB.total_modal_ditempatkan",isArray:!1,description:"<p>Total Modal Ditempatkan (Valuta : IDR)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.flag_umk",isArray:!1,description:"<p>Flag yg menunjukkan umk atau non umk</p>"},{group:"200",type:"string(2)",size:"2",optional:!1,field:"responinqueryNIB.dataNIB.jenis_perubahan_terakhir",isArray:!1,description:"<p>Jenis Perubahan Terakhir Perusahaan</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham",isArray:!0,description:"<p>pemegang_saham</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.jenis_pemegang_saham",isArray:!1,description:"<p>Jenis Pemegang Saham (* Lihat Lampiran 13)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.flag_asing",isArray:!1,description:"<p>Asal Pemegang Saham dari Dalam Negeri / Luar Negeri (Value : Y = asing, N = Bukan Asing)</p>"},{group:"200",type:"string(20.0)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.total_modal_pemegang",isArray:!1,description:"<p>Total Modal Pemegang Saham (Valuta : IDR)</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.jabatan_pemegang_saham",isArray:!1,description:"<p>Jabatan Pemegang Saham</p>"},{group:"200",type:"string(500)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.nama_pemegang_saham",isArray:!1,description:"<p>Nama Pemegang Saham</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.jns_identitas_pemegang_saham",isArray:!1,description:"<p>Jenis Identitas Pemegang Saham (* Lihat Lampiran 4)</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.no_identitas_pemegang_saham",isArray:!1,description:"<p>Nomor Identitas Pemegang Saham</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.valid_identitas_pemegang_saham",isArray:!1,description:"<p>Valid / Masa Berlaku Pemegang Saham (Format Date : YYYY-MM- DD)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.negara_asal_pemegang_saham",isArray:!1,description:"<p>Negara asal pemegang saham</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.pengendali_pemegang_saham",isArray:!1,description:"<p>Nama Pengendali Pemegang Saham</p>"},{group:"200",type:"string(15)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.npwp_pemegang_saham",isArray:!1,description:"<p>NPWP Pemegang Saham</p>"},{group:"200",type:"string(1024)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.alamat_pemegang_saham",isArray:!1,description:"<p>Alamat Pemegang Saham</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.fax_pemegang_saham",isArray:!1,description:"<p>Fax Pemegang Saham</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.email_pemegang_saham",isArray:!1,description:"<p>Email Pemegang Saham</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.flag_pajak_pemegang_saham",isArray:!1,description:"<p>Flag Validasi Pajak Pemegang Saham (* Lihat Lampiran 19)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.pemegang_saham.ket_pajak_pemegang_saham",isArray:!1,description:"<p>ket_pajak_pemegang_saham</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb",isArray:!0,description:"<p>penanggung_jwb</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.flag_asing",isArray:!1,description:"<p>Asal penanggung jawab dari Dalam Negeri / Luar Negeri (Value : Y = asing, N = Bukan Asing)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.jns_identitas_penanggung_jwb",isArray:!1,description:"<p>Jenis idetitas penanggung jawab</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.no_identitas_penanggung_jwb",isArray:!1,description:"<p>no_identitas_penanggung_jwb</p>"},{group:"200",type:"string(500)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.nama_penanggung_jwb",isArray:!1,description:"<p>nama_penanggung_jwb</p>"},{group:"200",type:"string(250)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.jabatan_penanggung_jwb",isArray:!1,description:"<p>jabatan_penanggung_jwb</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.kebangsaan_penanggung_jwb",isArray:!1,description:"<p>kebangsaan_penanggung_jwb</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.negara_asal_penanggung_jwb",isArray:!1,description:"<p>negara_asal_penanggung_jwb</p>"},{group:"200",type:"string(15)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.npwp_penanggung_jwb",isArray:!1,description:"<p>npwp_penanggung_jwb</p>"},{group:"200",type:"string(1024)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.alamat_penanggung_jwb",isArray:!1,description:"<p>alamat_penanggung_jwb</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.jalan_penanggung_jwb",isArray:!1,description:"<p>jalan_penanggung_jwb</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.blok_penanggung_jwb",isArray:!1,description:"<p>Alamat Blok Penanggung Jawab</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.no_penanggung_jwb",isArray:!1,description:"<p>Alamat Nomor Penanggung Jawab</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.rt_rw_penanggung_jwb",isArray:!1,description:"<p>RT RW Penanggung Jawab</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.kelurahan_penanggung_jwb",isArray:!1,description:"<p>Kelurahan Penanggung Jawab</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.daerah_id_penanggung_jwb",isArray:!1,description:"<p>ID Daerah Penanggung Jawab (* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"200",type:"string(5)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.kode_pos_penanggung_jwb",isArray:!1,description:"<p>Kode Pos Penanggung Jawab</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.no_telp_penanggung_jwb",isArray:!1,description:"<p>Nomor Telepon Penanggung Jawab</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.no_hp_penanggung_jwb",isArray:!1,description:"<p>Nomor Handphone Penanggung Jawab</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.no_fax_penanggung_jwb",isArray:!1,description:"<p>Nomor Fax Penanggung Jawab</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.email_penanggung_jwb",isArray:!1,description:"<p>Email Penanggung Jawab</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.flag_pajak_penanggung_jwb",isArray:!1,description:"<p>Flag Validasi Pajak Penanggung Jawab (* Lihat Lampiran 19)</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.penanggung_jwb.ket_pajak_penanggung_jwb",isArray:!1,description:"<p>Keterangan Validasi Pajak Penanggung Jawab</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.no_pengesahan",isArray:!1,description:"<p>Nomor Pengesahan Akta Dari Kumham</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.tgl_pengesahan",isArray:!1,description:"<p>Tanggal Pengesahan Akta Dari Kumham (format date : YYYY- MM-DD)</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.no_akta_lama",isArray:!1,description:"<p>Nomor Akta Lama Sebelum Perubahan</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.tgl_akta_lama",isArray:!1,description:"<p>Tanggal Akta Lama Sebelum Perubahan (format date : YYYY- MM-DD)</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.no_pengesahan_lama",isArray:!1,description:"<p>Nomor Pengesahan Akta Lama Sebelum Perubahan Dari Kumham</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.tgl_pengesahan_lama",isArray:!1,description:"<p>Tanggal Pengesahan Akta Lama Sebelum Perubahan Dari Kumham (format date : YYYY-MM-DD)</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.legalitas",isArray:!0,description:"<p>legalitas</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.legalitas.jenis_legal",isArray:!1,description:"<p>Jenis Legal Perusahaan (* Lihat Lampiran 7)</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.legalitas.no_legal",isArray:!1,description:"<p>Nomor Legal Perusahaan</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.legalitas.tgl_legal",isArray:!1,description:"<p>Tanggal Legal Perusahaan (format date : YYYY-MM-DD)</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.legalitas.alamat_notaris",isArray:!1,description:"<p>Alamat Notaris</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.legalitas.nama_notaris",isArray:!1,description:"<p>Nama Notaris</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.legalitas.telepon_notaris",isArray:!1,description:"<p>Telepon Notaris</p>"},{group:"200",type:"object",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka",isArray:!1,description:"<p>data_rptka</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.jenis_rptka",isArray:!1,description:"<p>Jenis Flag RPTKA *( 01 : Baru, 02: Perubahan)</p>"},{group:"200",type:"string(20)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.no_rptka",isArray:!1,description:"<p>No Bacode RPTKA</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_awal",isArray:!1,description:"<p>Masa Berlaku Dari Tanggal(format date : YYYY-MM-DD)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_akhir",isArray:!1,description:"<p>Masa Berlaku Sampai Tanggal(format date : YYYY-MM- DD)</p>"},{group:"200",type:"number(20.2)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_gaji",isArray:!1,description:"<p>Gaji Tenaga Asing</p>"},{group:"200",type:"number(11)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.jumlah_tka_rptka",isArray:!1,description:"<p>Jumlah Tenaga Kerja Asing (TKA) dalam Rencana Penggunaan Tenaga Kerja Asing (RPTKA)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.jangka_penggunaan_waktu",isArray:!1,description:"<p>Jangka Waktu Penggunaan Tenaga Kerja Asing (TKA) dalam Izin Rencana Penggunaan Tenaga Kerja Asing (RPTKA) (format date : YYYY- MM-DD)</p>"},{group:"200",type:"number(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.jangka_waktu_permohonan_rptka",isArray:!1,description:"<p>Jangka Waktu Permohonan RPTKA</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan",isArray:!0,description:"<p>rptka_jabatan</p>"},{group:"200",type:"number(11)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.id_jabatan",isArray:!1,description:"<p>ID Jabatan Tenaga Kerja Asing berdasarkan https://jdih.kemnaker.go.id/data_puu/KEP247_MENX_2011.pd\xA0f</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.jabatan",isArray:!1,description:"<p>Nama Jabatan</p>"},{group:"200",type:"number(11)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.jumlah",isArray:!1,description:"<p>Jumlah Orang Yang Memiliki Jabatan</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.tgl_mulai",isArray:!1,description:"<p>Tanggal Mulai Jabatan format date</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.tgl_selesai",isArray:!1,description:"<p>Tanggal Selesai Jabatan format date : YYYY-MM-DD)</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.keterangan",isArray:!1,description:"<p>Keterangan</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping",isArray:!0,description:"<p>rptka_tki_pendamping</p>"},{group:"200",type:"number(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.id_jabatan",isArray:!1,description:"<p>Id Jabatan</p>"},{group:"200",type:"number(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.id_pendamping",isArray:!1,description:"<p>Id TKI Pendamping</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.nama",isArray:!1,description:"<p>Nama TKI Pendamping</p>"},{group:"200",type:"string(20)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.nik",isArray:!1,description:"<p>Nomor NIK TKI Pendamping</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.jabatan",isArray:!1,description:"<p>Nama Jabatan TKI Pendamping</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.hp",isArray:!1,description:"<p>Nomor HP TKI Pendamping</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.email",isArray:!1,description:"<p>Email TKI Pendampiag</p>"},{group:"200",type:"string(65535)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.foto",isArray:!1,description:"<p>Foto TKI Pendamping Attachment File dalam Bentukbentuk base64 dengan format (data:image/jpeg;base64,string() ENCODE IMAGE)</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.pendidikan_min",isArray:!1,description:"<p>Tingkat Pendidikan Minimal TKI Pendamping</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.sertifikat",isArray:!1,description:"<p>Sertifikat Kompetensi TKI Pendamping</p>"},{group:"200",type:"number(11)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.pengalaman_kerja",isArray:!1,description:"<p>Pengalaman Kerja TKI Pendamping (dalam tahun)</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.keterangan",isArray:!1,description:"<p>Keterangan</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_negara",isArray:!0,description:"<p>rptka_negara</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_negara.id_negara",isArray:!1,description:"<p>Negara Asal Tenaga Kerja Asing(* Sumber Kodefikasi Negara Mengikuti Standar Unedifact : http://www.unece.org/cefact/loco de/service/location )</p>"},{group:"200",type:"number(11)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_negara.jumlah",isArray:!1,description:"<p>Jumlah Tenaga Kerja Asing (TKA) dalam Rencana Penggunaan Tenaga Kerja Asing (RPTKA)</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_lokasi",isArray:!0,description:"<p>rptka_lokasi</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_lokasi.lokasi_id",isArray:!1,description:"<p>ID Daerah Penanggung Jawab (* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"200",type:"number(11)",optional:!1,field:"responinqueryNIB.dataNIB.data_rptka.rptka_lokasi.jumlah",isArray:!1,description:"<p>Jumlah Tenaga Kerja Asing (TKA) dalam Rencana Penggunaan Tenaga Kerja Asing (RPTKA)</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek",isArray:!0,description:"<p>data_proyek</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.id_proyek",isArray:!1,description:"<p>ID / Kode Proyek</p>"},{group:"200",type:"string(26)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.nomor_proyek",isArray:!1,description:"<p>Nomor Permohonan Proyek</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.uraian_usaha",isArray:!1,description:"<p>Uraian Usaha Proyek</p>"},{group:"200",type:"number(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jumlah_tki_l",isArray:!1,description:"<p>Jumlah Tenaga Kerja Indonesia (TKI) Laki -Laki</p>"},{group:"200",type:"number(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jumlah_tki_p",isArray:!1,description:"<p>Jumlah Tenaga Kerja Indonesia (TKI) Perempuan</p>"},{group:"200",type:"number(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jumlah_tka_l",isArray:!1,description:"<p>Jumlah Tenaga Kerja Asing (TKA) Laki -Laki</p>"},{group:"200",type:"number(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jumlah_tka_p",isArray:!1,description:"<p>Jumlah Tenaga Kerja Asing (TKA) Perempuan</p>"},{group:"200",type:"string(7)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.kbli",isArray:!1,description:"<p>Kode KBLI (* Menggunakan Kode KBLI Tahun 2020)</p>"},{group:"200",type:"string(3)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.sektor",isArray:!1,description:"<p>Sektor Usaha Berdasarkan KBLI (* Lihat Lampiran 20)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.memiliki_menguasai",isArray:!1,description:"<p>Sudah Memiliki atar Menguasai Lahan (Value : Y = Sudah Memiliki atau Menguasai Lahan, N = Belum Memiliki atau Menguasai Lahan)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jenis_lokasi",isArray:!1,description:"<p>Lokasi Berada dalam Lintas Administratif (Value : Y = Berada Dalam Lintas Administrasi, N = Bukan Berada Dalam Lintas Administrasi)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.status_tanah",isArray:!1,description:"<p>Status Kepemilikan Tanah (* Lihat Lampiran 5)</p>"},{group:"200",type:"number(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.luas_tanah",isArray:!1,description:"<p>Luas Bidang tanah</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.satuan_luas_tanah",isArray:!1,description:"<p>Satuan Luas Tanah (*Lihat Lampiran 17)</p>"},{group:"200",type:"number(19)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.pembelian_pematang_tanah",isArray:!1,description:"<p>Nilai Pembelian Pematang Tanah (Valuta:IDR)</p>"},{group:"200",type:"number(19)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.bangunan_gedung",isArray:!1,description:"<p>Nilai Bangunan Gedung (Valuta:IDR)</p>"},{group:"200",type:"number(19)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.mesin_peralatan",isArray:!1,description:"<p>Nilai Mesin Peralatan (Valuta:IDR)</p>"},{group:"200",type:"number(19)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.mesin_peralatan_usd",isArray:!1,description:"<p>Nilai Mesin Peralatan dalam USD</p>"},{group:"200",type:"number(19)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.investasi_lain",isArray:!1,description:"<p>Investasi Lainnya</p>"},{group:"200",type:"number(19)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.sub_jumlah",isArray:!1,description:"<p>Jumlah Asset (Valuta:IDR)</p>"},{group:"200",type:"number(19)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.modal_kerja",isArray:!1,description:"<p>Nilai Modal Kerja (Valuta:IDR)</p>"},{group:"200",type:"number(19)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jumlah_investasi",isArray:!1,description:"<p>Nilai Jumlah Investasi (Valuta:IDR)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.tanggal_kurs",isArray:!1,description:"<p>Tanggal Kurs (format date : YYYY- MM-DD)</p>"},{group:"200",type:"number(19)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.nilai_kurs",isArray:!1,description:"<p>Nilai Kurs</p>"},{group:"200",type:"number(11)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.kd_kawasan",isArray:!1,description:"<p>Kode Kawasan (* Lihat Lampiran 30)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jawab_lokasi_b",isArray:!1,description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point B</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jawab_lokasi_c",isArray:!1,description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point C</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jawab_lokasi_d",isArray:!1,description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point D</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jawab_lokasi_e",isArray:!1,description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point E</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jawab_lokasi_f",isArray:!1,description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point F</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jawab_lokasi_g",isArray:!1,description:"<p>kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point G</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.flag_perluasan",isArray:!1,description:"<p>Proyek Merupakan Perluasan/Pengembangan Usaha Atau Bukan (Value : Y = Proses Perluasan/Pengembangan Usaha, N = Bukan Proses Perluasan/Pengembangan Usaha)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.flag_cabang",isArray:!1,description:"<p>Proyek Sebagai Kantor Cabang Atau Bukan (Value : Y = Sebagai Kantor Cabang, N = Bukan Sebagai Kantor Cabang)</p>"},{group:"200",type:"string(15)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.npwp_cabang",isArray:!1,description:"<p>NPWP Kantor Cabang</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.nama_cabang",isArray:!1,description:"<p>Nama Kantor Cabang / Proyek</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jenis_identitas_pj",isArray:!1,description:"<p>Jenis Identitas Penanggung Jawab Proyek (* Lihat Lampiran 4)</p>"},{group:"200",type:"string(16)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.no_identitas_pj",isArray:!1,description:"<p>No Identitas Penanggung Jawab Proyek</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.nama_pj",isArray:!1,description:"<p>Nama Penanggung Jawab Proyek</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.status_proyek",isArray:!1,description:"<p>Status Proyek(* Lihat Lampiran 22)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.jenis_proyek",isArray:!1,description:"<p>Jenis Proyek(* Lihat Lampiran 26)</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.nama_kegiatan",isArray:!1,description:"<p>Nama Proyek/ Kegiatan Proyek, Untuk Perseorangan Digunakan Untuk Mencatat Nama Dagangannya Misal (UD. Perciban Jaya)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.flag_merger",isArray:!1,description:"<p>Flag Proyek Hasil Merger atau Bukan (Y: Hasil Merger, N: Bukan Hasil Merger)</p>"},{group:"200",type:"string(15)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.npwp_perseroan_merger",isArray:!1,description:"<p>NPWP Perusahaan Merger</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.nama_perseroan_merger",isArray:!1,description:"<p>Nama Perusahaan Merger</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.skala_usaha",isArray:!1,description:"<p>Skala usaha</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.skala_resiko",isArray:!1,description:"<p>Skala resiko</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.deskripsi_kegiatan",isArray:!1,description:"<p>Deskripsi kegiatan</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek",isArray:!0,description:"<p>data_lokasi_proyek</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.id_proyek_lokasi",isArray:!1,description:"<p>ID / Kode Lokasi Proyek</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.proyek_daerah_id",isArray:!1,description:"<p>Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019: https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"200",type:"string(3)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.kd_kawasan",isArray:!1,description:"<p>Kode Kawasan (* Lihat Lampiran 30)</p>"},{group:"200",type:"string(65535)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.alamat_usaha",isArray:!1,description:"<p>Alamat Kegiatan Proyek / Usaha</p>"},{group:"200",type:"string(6)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.id_kegiatan",isArray:!1,description:"<p>Id Kegiatan Usaha Berdasarkan RDTR Digital</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.response_kegiatan",isArray:!1,description:"<p>Response Kegiatan Usaha Berdasarkan Validasi Kegiatan RDTR Digital</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.jenis_kawasan",isArray:!1,description:"<p>Jenis Kawasan (* Lihat Lampiran 16)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.jenis_lokasi",isArray:!1,description:"<p>Jenis Lokasi Lintas Administratif atau Tidak (01 : Lintas Administratif, 02 : Tidak Lintas Administratif)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.status_lokasi",isArray:!1,description:"<p>Status Lokasi(* Lihat Lampiran 25)</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.data_lokasi_proyek",isArray:!0,description:"<p>data_lokasi_proyek</p>"},{group:"200",type:"number(11)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.data_lokasi_proyek.serial",isArray:!1,description:"<p>Serial Koordinat</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.data_lokasi_proyek.lat_lng",isArray:!1,description:"<p>Koordinat Latitude &amp; Longitude</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek",isArray:!0,description:"<p>data_posisi_proyek</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek.id_proyek_posisi",isArray:!1,description:"<p>ID / Kode Posisi Proyek</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek.id_proyek_lokasi",isArray:!1,description:"<p>ID / Kode Lokasi Proyek</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek.posisi_lokasi",isArray:!1,description:"<p>Posisi Lokasi (* Lihat Lampiran 24)</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk",isArray:!0,description:"<p>data_proyek_produk</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.id_produk",isArray:!1,description:"<p>ID / Kode Produk</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.id_proyek",isArray:!1,description:"<p>ID / Kode Proyek</p>"},{group:"200",type:"string(7)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.kbli",isArray:!1,description:"<p>Kode KBLI (* Menggunakan Kode KBLI Tahun 2020)</p>"},{group:"200",type:"number(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.id_bidang_usaha",isArray:!1,description:"<p>ID Bidang Usaha Berdasarkan Kodefikasi Data Negatif Investasi (DNI) (* Lihat Lampiran 15)</p>"},{group:"200",type:"string(1024)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.jenis_produksi",isArray:!1,description:"<p>Rencana Produksi Yang Dihasilkan</p>"},{group:"200",type:"number(20.2)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.kapasitas",isArray:!1,description:"<p>Kapasitas produksi suatu produk</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.satuan",isArray:!1,description:"<p>Satuan Dari Kapasitas Produksi</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.merk_dagang",isArray:!1,description:"<p>Merk Dagang</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.pemegang_haki",isArray:!1,description:"<p>Pemegang Hak Cipta</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.pemegang_paten",isArray:!1,description:"<p>Pemegang Hak Paten</p>"},{group:"200",type:"string(20)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.pi_nomor",isArray:!1,description:"<p>Nomor Pendaftaran Penanaman Modal Untuk Case Grand Father Clause (GFC)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.pi_tanggal",isArray:!1,description:"<p>Tanggal Pendaftaran Penanaman Modal Untuk Case Grand Father Clause (GFC) format date : YYYY- MM-DD</p>"},{group:"200",type:"string(16)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.pi_npwp",isArray:!1,description:"<p>NPWP Pendaftaran Penanaman Modal Untuk Case Grand Father Clause (GFC)</p>"},{group:"200",type:"string(9)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.id_kbli_ta",isArray:!1,description:"<p>Penanda Bahwa Cakupan Produk Untuk Kebutuhan Tax Allowance</p>"},{group:"200",type:"number(3.2)",optional:!1,field:"responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.tkdn",isArray:!1,description:"<p>Tingkat Kandungan Dalam Negeri</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.data_dni",isArray:!0,description:"<p>data_dni</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_dni.kd_dni",isArray:!1,description:"<p>Kodefikasi Data Negatif Investasi (DNI) (* Lihat Lampiran 15)</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist",isArray:!0,description:"<p>data_checklist</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.id_produk",isArray:!1,description:"<p>ID Produk</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.id_proyek",isArray:!1,description:"<p>ID / Kode Proyek</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.id_izin",isArray:!1,description:"<p>Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin</p>"},{group:"200",type:"string(3)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.jenis_izin",isArray:!1,description:"<p>Jenis Perizinan (* Lihat Lampiran 27)</p>"},{group:"200",type:"string(13)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.kd_izin",isArray:!1,description:"<p>Kode Izin Sistem K/L/D (* service getDataReferensi kode : 8)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.kd_daerah",isArray:!1,description:"<p>Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.nama_izin",isArray:!1,description:"<p>Nama Izin</p>"},{group:"200",type:"string(150)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.no_izin",isArray:!1,description:"<p>Nomor Izin</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.tgl_izin",isArray:!1,description:"<p>Tanggal Izin (format date : YYYY-MM-DD)</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.instansi",isArray:!1,description:"<p>Nama Instansi</p>"},{group:"200",type:"number(19)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.id_bidang_spesifik",isArray:!1,description:"<p>ID Bidang Spesifik</p>"},{group:"200",type:"string(65535)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.bidang_spesifik",isArray:!1,description:"<p>Uraian Bidang Spesifik</p>"},{group:"200",type:"number(19)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.id_kewenangan",isArray:!1,description:"<p>ID Kewenangan</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.parameter_kewenangan",isArray:!1,description:"<p>Parameter Kewenangan Izin</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.kewenangan",isArray:!1,description:"<p>00: Kewenangan Pusat; 01: Kewenangan Provinsi; 02: Kewenangan Kab/Kota</p>"},{group:"200",type:"string(65535)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.file_izin",isArray:!1,description:"<p>Attachment File Izin Hasil Pemenuhan Komitmen dari K/L/D dalam Bentuk File PDF Berupa Link (* Ukuran File Maks: 2MB)</p>"},{group:"200",type:"string(65535)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.file_izin_oss",isArray:!1,description:"<p>Attachment File Izin yang diterbitkan ole Lembaga OSS dalam Bentuk File PDF/Image Berupa Link (* Ukuran File Maks: 2MB)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.flag_checklist",isArray:!1,description:"<p>Flag Checklist Komitmen (* Lihat Lampiran 28)</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.status_checklist",isArray:!1,description:"<p>Status Penerbitan Izin / Checklist (* Lihat Lampiran 10)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.flag_transaksional",isArray:!1,description:"<p>Flag : Y/N, Flag Izin Komersial / Operasional Diajukan Transaksional (Bisa Mengajukan Berulang)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.flag_perpanjangan",isArray:!1,description:"<p>Flag : Y/N, Flag Bahwa Izin Usaha Ini Adalah Hasil Perpanjangan Dari Zin Usaha Yang Terbit Sebelum OSS</p>"},{group:"200",type:"string(15)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.kd_dokumen",isArray:!1,description:"<p>Kode dokumen izin lingkungan</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.nm_dokumen",isArray:!1,description:"<p>Nama dokumen izin lingkungan</p>"},{group:"200",type:"object",optional:!0,field:"responinqueryNIB.dataNIB.data_checklist.data_teknis",isArray:!1,description:"<p>Data Teknis</p>"},{group:"200",type:"string(25)",size:"25",optional:!0,field:"responinqueryNIB.dataNIB.data_checklist.data_teknis.id_komitmen",isArray:!1,description:"<p>ID Komitmen</p>"},{group:"200",type:"string(255)",size:"255",optional:!0,field:"responinqueryNIB.dataNIB.data_checklist.data_teknis.nama_bangunan",isArray:!1,description:"<p>Nama Bangunan</p>"},{group:"200",type:"string(25)",size:"25",optional:!0,field:"responinqueryNIB.dataNIB.data_checklist.data_teknis.luas_bangunan",isArray:!1,description:"<p>Luas Bangunan</p>"},{group:"200",type:"string(9)",size:"9",optional:!0,field:"responinqueryNIB.dataNIB.data_checklist.data_teknis.jumlah_lantai",isArray:!1,description:"<p>Jumlah Lantai</p>"},{group:"200",type:"string(5)",size:"5",optional:!0,field:"responinqueryNIB.dataNIB.data_checklist.data_teknis.tinggi_bangunan",isArray:!1,description:"<p>Tinggi Bangunan</p>"},{group:"200",type:"string(25)",size:"25",optional:!0,field:"responinqueryNIB.dataNIB.data_checklist.data_teknis.luas_basement",isArray:!1,description:"<p>Luas Basement</p>"},{group:"200",type:"string(2)",size:"2",optional:!0,field:"responinqueryNIB.dataNIB.data_checklist.data_teknis.jumlah_lantai_basement",isArray:!1,description:"<p>Jumlah Lantai Basement</p>"},{group:"200",type:"string(150)",size:"150",optional:!0,field:"responinqueryNIB.dataNIB.dataNIB.data_checklist.data_teknis.perancang_dokumen_teknis",isArray:!1,description:"<p>Perancang Dokumen Teknis</p>"},{group:"200",type:"object[]",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.data_persyaratan",isArray:!0,description:"<p>data_persyaratan</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.data_persyaratan.id_syarat",isArray:!1,description:"<p>Id / Kode Persyaratan</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.data_persyaratan.no_dokumen",isArray:!1,description:"<p>Nomor Dokumen Persyaratan</p>"},{group:"200",type:"string(8)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.data_persyaratan.tgl_dokumen",isArray:!1,description:"<p>Tanggal Dokumen Persyaratan (format date : YYYY-MM-DD)</p>"},{group:"200",type:"string(65535)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.data_persyaratan.file_dokumen",isArray:!1,description:"<p>Attachment File Izin dalam Bentuk File PDF Berupa Link (* Ukuran File Maks: 2MB)</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.data_checklist.data_persyaratan.keterangan",isArray:!1,description:"<p>Keterangan Dokumen Persyaratan</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.jenis_id_user_proses",isArray:!1,description:"<p>Kode Jenis Identitas (* Lihat Lampiran 4)</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.no_id_user_proses",isArray:!1,description:"<p>No Identitas Pemroses NIB</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.nama_user_proses",isArray:!1,description:"<p>Nama User Pemroses NIB</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.email_user_proses",isArray:!1,description:"<p>Email User Pemroses NIB</p>"},{group:"200",type:"string(25)",optional:!1,field:"responinqueryNIB.dataNIB.hp_user_proses",isArray:!1,description:"<p>No HP Pemroses NIB</p>"},{group:"200",type:"string(255)",optional:!1,field:"responinqueryNIB.dataNIB.alamat_user_proses",isArray:!1,description:"<p>Alamat Pemroses NIB</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.jns_kelamin_user_proses",isArray:!1,description:"<p>Jenis Kelamin Pemroses NIB (L : Laki-Laki, P : Perempuan)</p>"},{group:"200",type:"string(100)",optional:!1,field:"responinqueryNIB.dataNIB.tempat_lahir_user_proses",isArray:!1,description:"<p>Tempat Lahir Pemroses NIB</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.tgl_lahir_user_proses",isArray:!1,description:"<p>Tanggal Lahir User Pemroses (format date : YYYY-MM-DD)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.daerah_id_user_proses",isArray:!1,description:"<p>ID Daerah User Pemroses(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)</p>"},{group:"200",type:"string(10)",optional:!1,field:"responinqueryNIB.dataNIB.rt_rw_user_proses",isArray:!1,description:"<p>RT RW Pemroses NIB</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.agama_user_proses",isArray:!1,description:"<p>Agama Pemroses NIB</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.status_perkawinan_user_proses",isArray:!1,description:"<p>Status Perkawinan Pemroses NIB</p>"},{group:"200",type:"string(50)",optional:!1,field:"responinqueryNIB.dataNIB.pekerjaan_user_proses",isArray:!1,description:"<p>Pekerjaan Pemroses NIB</p>"},{group:"200",type:"string(2)",optional:!1,field:"responinqueryNIB.dataNIB.status_nib",isArray:!1,description:"<p>Status Penerbitan NIB (* Lihat Lampiran 14)</p>"},{group:"200",type:"string(1)",optional:!1,field:"responinqueryNIB.dataNIB.tipe_dokumen",isArray:!1,description:"<p>Tipe Dokumen (9:Original, 5:Update, 3:Pencabutan, 4:Pembatalan)</p>"}]},examples:[{title:"Success-Response:",content:`HTTP/1.1 200 OK
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
      "skala_usaha": "",
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
      "jenis_perubahan_terakhir": "",
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
          "data_teknis" : {
             "id_komitmen" : "",
             "nama_bangunan" : "",
             "luas_bangunan" : "",
             "jumlah_lantai" : "",
             "tinggi_bangunan" : "",
             "luas_basement" : "",
             "jumlah_lantai_basement" : "",
             "perancang_dokumen_teknis" : ""
          },
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
  "user_key": {{user_key}}
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
  "user_key": {{user_key}}
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
  "user_key": {{user_key}}
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
}`,type:"json"}]},filename:"endpoint.js",groupTitle:"Referensi",sampleRequest:[{url:"https://server.digitaltelkom.dev/oss-sandbox/getDataReferensi"}]}];const ge={name:"PIA - OSS RBA",version:"5.0.0",description:"Documentation for the REST api access provided at OSS",title:"PIA - OSS RBA",url:"https://api-stg.oss.go.id/stg/v1/kl/rba",sampleUrl:"https://server.digitaltelkom.dev/oss-sandbox",output:"/tmp/apidoc-output",input:["endpoint"],header:{title:"Introduction",content:`<h2><span id="api-example-for-a-submenu-entry">Document History</span></h2>
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
<td>Penambahan Kode status Izin. <br>32 Menunggu verifikasi bukti bayar PNBP <br>33 Persetujuan Pembayaran <br>34 Perbaikan Konfirmasi Pembayaran <br>93 Penolakan Persyaratan</td>
</tr>
<tr>
<td>4.3.12</td>
<td>16/03/2023</td>
<td>Tim Teknis OSS</td>
<td>Perubahan dan Penambahan Jenis Perusahaan. <br>Perubahan Keterangan Badan Usaha Pemerintah (04) semula Badan Usaha yang didirikan dan dikelola oleh pemerintah seperti BUMD, BUMDES, dan sejenisnya menjadi Badan Usaha yang didirikan dan dikelola oleh Pemerintah. Penambahan : <br>28 BUM Desa <br>29 BUM Desa Bersama</td>
</tr>
<tr>
<td>4.3.13</td>
<td>10/05/2023</td>
<td>Tim Teknis OSS</td>
<td>Penambahan flag_perubahan_data_teknis di Methode receiveNIB</td>
</tr>
<tr>
<td>4.3.14</td>
<td>24/05/2023</td>
<td>Tim Teknis OSS</td>
<td>Perubahan Payload/Response inqueryNIB</td>
</tr>
<tr>
<td>4.3.15</td>
<td>06/07/2023</td>
<td>Tim Teknis OSS</td>
<td>Penambahan email_preferensi receiveNIBPSE</td>
</tr>
<tr>
<td>4.3.16</td>
<td>14/09/2023</td>
<td>Tim Teknis OSs</td>
<td>Penghapusan payload di receiveLicense<br>- data_pnbp <br>- id_produk <br><br>Penambahan payload di receiveLicense<br>- jenis_perizinan <br>- data_teknis IMB <br><br>Penambahan payload di receiveLicenseStatus<br>- persetujuan_form <br>- file_lampiran <br><br> Update cardinality (required/optional) payload receiveLicenseStatus</td>
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
`},template:{showRequiredLabels:!0,withCompare:!0,withGenerator:!0,aloneDisplay:!0},defaultVersion:"0.0.0",apidoc:"0.3.0",generator:{name:"apidoc",time:"Mon Oct 02 2023 11:11:27 GMT+0700 (GMT+07:00)",url:"https://apidocjs.com",version:"1.2.0"}};ca();const we=l().compile(h()("#template-header").html()),Se=l().compile(h()("#template-footer").html()),V=l().compile(h()("#template-article").html()),_e=l().compile(h()("#template-compare-article").html()),ce=l().compile(h()("#template-generator").html()),me=l().compile(h()("#template-project").html()),je=l().compile(h()("#template-sections").html()),We=l().compile(h()("#template-sidenav").html()),Ue={aloneDisplay:!1,showRequiredLabels:!1,withGenerator:!0,withCompare:!0};ge.template=Object.assign(Ue,(ze=ge.template)!=null?ze:{}),ge.template.forceLanguage&&Ia(ge.template.forceLanguage);const $e=(0,i.groupBy)(Re,te=>te.group),ea={};h().each($e,(te,ne)=>{ea[te]=(0,i.groupBy)(ne,pe=>pe.name)});const oa=[];h().each(ea,(te,ne)=>{let pe=[];h().each(ne,(oe,Be)=>{const Me=Be[0].title;Me&&pe.push(Me.toLowerCase()+"#~#"+oe)}),pe.sort(),ge.order&&(pe=De(pe,ge.order,"#~#")),pe.forEach(oe=>{const Me=oe.split("#~#")[1];ne[Me].forEach(Le=>{oa.push(Le)})})}),Re=oa;let ha={};const Ca={};let xa={};xa[ge.version]=1,h().each(Re,(te,ne)=>{ha[ne.group]=1,Ca[ne.group]=ne.groupTitle||ne.group,xa[ne.version]=1}),ha=Object.keys(ha),ha.sort(),ge.order&&(ha=ve(Ca,ge.order)),xa=Object.keys(xa),xa.sort(t().compare),xa.reverse();const Sa=[];ha.forEach(te=>{Sa.push({group:te,isHeader:!0,title:Ca[te]});let ne="";Re.forEach(pe=>{pe.group===te&&(ne!==pe.name?Sa.push({title:pe.title,group:te,name:pe.name,type:pe.type,version:pe.version,url:pe.url}):Sa.push({title:pe.title,group:te,hidden:!0,name:pe.name,type:pe.type,version:pe.version,url:pe.url}),ne=pe.name)})});function fn(te,ne,pe){let oe=!1;if(!ne)return oe;const Be=ne.match(/<h(1|2).*?>(.+?)<\/h(1|2)>/gi);return Be&&Be.forEach(function(Me){const Le=Me.substring(2,3),pa=Me.replace(/<.+?>/g,""),Na=Me.match(/id="api-([^-]+)(?:-(.+))?"/),wa=Na?Na[1]:null,ma=Na?Na[2]:null;Le==="1"&&pa&&wa&&(te.splice(pe,0,{group:wa,isHeader:!0,title:pa,isFixed:!0}),pe++,oe=!0),Le==="2"&&pa&&wa&&ma&&(te.splice(pe,0,{group:wa,name:ma,isHeader:!1,title:pa,isFixed:!1,version:"1.0"}),pe++)}),oe}let gn;if(ge.header&&(gn=fn(Sa,ge.header.content,0),gn||Sa.unshift({group:"_header",isHeader:!0,title:ge.header.title==null?ka("General"):ge.header.title,isFixed:!0})),ge.footer){const te=Sa.length;gn=fn(Sa,ge.footer.content,Sa.length),!gn&&ge.footer.title!=null&&Sa.splice(te,0,{group:"_footer",isHeader:!0,title:ge.footer.title,isFixed:!0})}const Sn=ge.title?ge.title:"apiDoc: "+ge.name+" - "+ge.version;h()(document).attr("title",Sn),h()("#loader").remove();const jn={nav:Sa};h()("#sidenav").append(We(jn)),h()("#generator").append(ce(ge)),(0,i.extend)(ge,{versions:xa}),h()("#project").append(me(ge)),ge.header&&h()("#header").append(we(ge.header)),ge.footer&&(h()("#footer").append(Se(ge.footer)),ge.template.aloneDisplay&&document.getElementById("api-_footer").classList.add("hide"));const Ma={};let Cn="";ha.forEach(function(te){const ne=[];let pe="",oe={},Be=te,Me="";Ma[te]={},Re.forEach(function(Le){te===Le.group&&(pe!==Le.name?(Re.forEach(function(pa){te===pa.group&&Le.name===pa.name&&(Object.prototype.hasOwnProperty.call(Ma[Le.group],Le.name)||(Ma[Le.group][Le.name]=[]),Ma[Le.group][Le.name].push(pa.version))}),oe={article:Le,versions:Ma[Le.group][Le.name]}):oe={article:Le,hidden:!0,versions:Ma[Le.group][Le.name]},ge.sampleUrl&&ge.sampleUrl===!0&&(ge.sampleUrl=window.location.origin),ge.url&&oe.article.url.substr(0,4).toLowerCase()!=="http"&&(oe.article.url=ge.url+oe.article.url),ie(oe,Le),Le.groupTitle&&(Be=Le.groupTitle),Le.groupDescription&&(Me=Le.groupDescription),ne.push({article:V(oe),group:Le.group,name:Le.name,aloneDisplay:ge.template.aloneDisplay}),pe=Le.name)}),oe={group:te,title:Be,description:Me,articles:ne,aloneDisplay:ge.template.aloneDisplay},Cn+=je(oe)}),h()("#sections").append(Cn),ge.template.aloneDisplay||(document.body.dataset.spy="scroll",h()("body").scrollspy({target:"#scrollingNav"})),h()(".form-control").on("focus change",function(){h()(this).removeClass("border-danger")}),h()(".sidenav").find("a").on("click",function(te){te.preventDefault();const ne=this.getAttribute("href");if(ge.template.aloneDisplay){const pe=document.querySelector(".sidenav > li.active");pe&&pe.classList.remove("active"),this.parentNode.classList.add("active")}else{const pe=document.querySelector(ne);pe&&h()("html,body").animate({scrollTop:pe.offsetTop},400)}window.location.hash=ne});function Aa(te){let ne=!1;return h().each(te,pe=>{ne=ne||(0,i.some)(te[pe],oe=>oe.type)}),ne}function Mn(){h()('button[data-toggle="popover"]').popover().click(function(ne){ne.preventDefault()});const te=h()("#version strong").html();if(h()("#sidenav li").removeClass("is-new"),ge.template.withCompare&&h()("#sidenav li[data-version='"+te+"']").each(function(){const ne=h()(this).data("group"),pe=h()(this).data("name"),oe=h()("#sidenav li[data-group='"+ne+"'][data-name='"+pe+"']").length,Be=h()("#sidenav li[data-group='"+ne+"'][data-name='"+pe+"']").index(h()(this));(oe===1||Be===oe-1)&&h()(this).addClass("is-new")}),h()(".nav-tabs-examples a").click(function(ne){ne.preventDefault(),h()(this).tab("show")}),h()(".nav-tabs-examples").find("a:first").tab("show"),h()(".sample-request-content-type-switch").change(function(){h()(this).val()==="body-form-data"?(h()("#sample-request-body-json-input-"+h()(this).data("id")).hide(),h()("#sample-request-body-form-input-"+h()(this).data("id")).show()):(h()("#sample-request-body-form-input-"+h()(this).data("id")).hide(),h()("#sample-request-body-json-input-"+h()(this).data("id")).show())}),ge.template.aloneDisplay&&(h()(".show-group").click(function(){const ne="."+h()(this).attr("data-group")+"-group",pe="."+h()(this).attr("data-group")+"-article";h()(".show-api-group").addClass("hide"),h()(ne).removeClass("hide"),h()(".show-api-article").addClass("hide"),h()(pe).removeClass("hide")}),h()(".show-api").click(function(){const ne=this.getAttribute("href").substring(1),pe=document.getElementById("version").textContent.trim(),oe=`.${this.dataset.name}-article`,Be=`[id="${ne}-${pe}"]`,Me=`.${this.dataset.group}-group`;h()(".show-api-group").addClass("hide"),h()(Me).removeClass("hide"),h()(".show-api-article").addClass("hide");let Le=h()(oe);h()(Be).length&&(Le=h()(Be).parent()),Le.removeClass("hide"),ne.match(/_(header|footer)/)&&document.getElementById(ne).classList.remove("hide")})),ge.template.aloneDisplay||h()("body").scrollspy("refresh"),ge.template.aloneDisplay){const ne=decodeURI(window.location.hash);if(ne!=null&&ne.length!==0){const pe=document.getElementById("version").textContent.trim(),oe=document.querySelector(`li .${ne.slice(1)}-init`),Be=document.querySelector(`li[data-version="${pe}"] .show-api.${ne.slice(1)}-init`);let Me=oe;Be&&(Me=Be),Me.click()}}}function U(te){typeof te=="undefined"?te=h()("#version strong").html():h()("#version strong").html(te),h()("article").addClass("hide"),h()("#sidenav li:not(.nav-fixed)").addClass("hide");const ne={};document.querySelectorAll("article[data-version]").forEach(pe=>{const oe=pe.dataset.group,Be=pe.dataset.name,Me=pe.dataset.version,Le=oe+Be;!ne[Le]&&t().lte(Me,te)&&(ne[Le]=!0,document.querySelector(`article[data-group="${oe}"][data-name="${Be}"][data-version="${Me}"]`).classList.remove("hide"),document.querySelector(`#sidenav li[data-group="${oe}"][data-name="${Be}"][data-version="${Me}"]`).classList.remove("hide"),document.querySelector(`#sidenav li.nav-header[data-group="${oe}"]`).classList.remove("hide"))}),h()("article[data-version]").each(function(pe){const oe=h()(this).data("group");h()("section#api-"+oe).removeClass("hide"),h()("section#api-"+oe+" article:visible").length===0?h()("section#api-"+oe).addClass("hide"):h()("section#api-"+oe).removeClass("hide")})}if(U(),h()("#versions li.version a").on("click",function(te){te.preventDefault(),U(h()(this).html())}),h()("#compareAllWithPredecessor").on("click",ee),h()("article .versions li.version a").on("click",Q),h().urlParam=function(te){const ne=new RegExp("[\\?&amp;]"+te+"=([^&amp;#]*)").exec(window.location.href);return ne&&ne[1]?ne[1]:null},h().urlParam("compare")&&h()("#compareAllWithPredecessor").trigger("click"),window.location.hash){const te=decodeURI(window.location.hash);h()(te).length>0&&h()("html,body").animate({scrollTop:parseInt(h()(te).offset().top)},0)}document.querySelector('[data-toggle="offcanvas"]').addEventListener("click",function(){const te=document.querySelector(".row-offcanvas");te&&te.classList.toggle("active")}),h()("#scrollingNav .sidenav-search input.search").focus(),h()('[data-action="filter-search"]').on("keyup",q(te=>{const ne=te.currentTarget.value.toLowerCase();h()(".sidenav a.nav-list-item").filter((pe,oe)=>h()(oe).toggle(h()(oe).text().toLowerCase().indexOf(ne)>-1))},200)),h()("span.search-reset").on("click",function(){h()("#scrollingNav .sidenav-search input.search").val("").focus(),h()(".sidenav").find("a.nav-list-item").show()});function q(te,ne){let pe=null;return(...oe)=>{clearTimeout(pe),pe=setTimeout(te.bind(this,...oe),ne||0)}}function Q(te){te.preventDefault();const ne=h()(this).parents("article"),pe=h()(this).html(),oe=ne.find(".version"),Be=oe.find("strong").html();oe.find("strong").html(pe);const Me=ne.data("group"),Le=ne.data("name"),pa=ne.data("version"),Na=ne.data("compare-version");if(Na!==pe&&!(!Na&&pa===pe)){if(Na&&Ma[Me][Le][0]===pe||pa===pe)Pe(Me,Le,pa);else{let wa={},ma={};h().each(ea[Me][Le],function(ot,qn){qn.version===pa&&(wa=qn),qn.version===pe&&(ma=qn)});const ia={article:wa,compare:ma,versions:Ma[Me][Le]};ia.article.id=ia.article.group+"-"+ia.article.name+"-"+ia.article.version,ia.article.id=ia.article.id.replace(/\./g,"_"),ia.compare.id=ia.compare.group+"-"+ia.compare.name+"-"+ia.compare.version,ia.compare.id=ia.compare.id.replace(/\./g,"_");let na=wa;na.header&&na.header.fields&&(ia._hasTypeInHeaderFields=Aa(na.header.fields)),na.parameter&&na.parameter.fields&&(ia._hasTypeInParameterFields=Aa(na.parameter.fields)),na.error&&na.error.fields&&(ia._hasTypeInErrorFields=Aa(na.error.fields)),na.success&&na.success.fields&&(ia._hasTypeInSuccessFields=Aa(na.success.fields)),na.info&&na.info.fields&&(ia._hasTypeInInfoFields=Aa(na.info.fields)),na=ma,ia._hasTypeInHeaderFields!==!0&&na.header&&na.header.fields&&(ia._hasTypeInHeaderFields=Aa(na.header.fields)),ia._hasTypeInParameterFields!==!0&&na.parameter&&na.parameter.fields&&(ia._hasTypeInParameterFields=Aa(na.parameter.fields)),ia._hasTypeInErrorFields!==!0&&na.error&&na.error.fields&&(ia._hasTypeInErrorFields=Aa(na.error.fields)),ia._hasTypeInSuccessFields!==!0&&na.success&&na.success.fields&&(ia._hasTypeInSuccessFields=Aa(na.success.fields)),ia._hasTypeInInfoFields!==!0&&na.info&&na.info.fields&&(ia._hasTypeInInfoFields=Aa(na.info.fields));const fr=_e(ia);ne.after(fr),ne.next().find(".versions li.version a").on("click",Q),h()("#sidenav li[data-group='"+Me+"'][data-name='"+Le+"'][data-version='"+Be+"']").addClass("has-modifications"),ne.remove()}Mn(),_().highlightAll()}}function ee(te){te.preventDefault(),h()("article:visible .versions").each(function(){const pe=h()(this).parents("article").data("version");let oe=null;h()(this).find("li.version a").each(function(){h()(this).html()<pe&&!oe&&(oe=h()(this))}),oe&&oe.trigger("click")})}function ie(te,ne){te.id=te.article.group+"-"+te.article.name+"-"+te.article.version,te.id=te.id.replace(/\./g,"_"),ne.header&&ne.header.fields&&(te._hasTypeInHeaderFields=Aa(ne.header.fields)),ne.parameter&&ne.parameter.fields&&(te._hasTypeInParameterFields=Aa(ne.parameter.fields)),ne.error&&ne.error.fields&&(te._hasTypeInErrorFields=Aa(ne.error.fields)),ne.success&&ne.success.fields&&(te._hasTypeInSuccessFields=Aa(ne.success.fields)),ne.info&&ne.info.fields&&(te._hasTypeInInfoFields=Aa(ne.info.fields)),te.template=ge.template}function ye(te,ne,pe){let oe={};h().each(ea[te][ne],function(Me,Le){Le.version===pe&&(oe=Le)});const Be={article:oe,versions:Ma[te][ne]};return ie(Be,oe),V(Be)}function Pe(te,ne,pe){const oe=h()("article[data-group='"+te+"'][data-name='"+ne+"']:visible"),Be=ye(te,ne,pe);oe.after(Be),oe.next().find(".versions li.version a").on("click",Q),h()("#sidenav li[data-group='"+te+"'][data-name='"+ne+"'][data-version='"+pe+"']").removeClass("has-modifications"),oe.remove()}function De(te,ne,pe){const oe=[];return ne.forEach(function(Be){pe?te.forEach(function(Me){const Le=Me.split(pe);(Le[0]===Be||Le[1]===Be)&&oe.push(Me)}):te.forEach(function(Me){Me===Be&&oe.push(Be)})}),te.forEach(function(Be){oe.indexOf(Be)===-1&&oe.push(Be)}),oe}function ve(te,ne){const pe=[];return ne.forEach(oe=>{Object.keys(te).forEach(Be=>{te[Be].replace(/_/g," ")===oe&&pe.push(Be)})}),Object.keys(te).forEach(oe=>{pe.indexOf(oe)===-1&&pe.push(oe)}),pe}Mn()}})()})();
