!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}({0:function(e,t,n){n("E+cI"),e.exports=n("HcWH")},"2iZf":function(e,t){$((function(){"/pages/thank-you"==location.pathname&&localStorage.bstudioID&&$.ajax({url:"https://zine.bg/services/location/?callback=?",dataType:"jsonp",jsonpCallback:"cbfunc",success:function(e){$.post("/record-customer-journey",{key:localStorage.bstudioID,country:e.country,journey:localStorage.bstudioHistory})}})}))},"4r3E":function(e,t){!function(){if("/student-pack"==location.pathname){var e=new URL(location.href).searchParams.get("code");if(e){$(".regular-content").hide();var t=$(".loading-content"),n=$(".license-content"),o=$(".error-content");t.show(),$.post("/github-student-pack-authorize",{code:e}).then((function(e){"error"==e.status&&e.redirect?window.location=location.pathname:(t.hide(),"error"!=e.status?(n.find("strong").text(e.key),n.show()):o.show())})).fail((function(){t.hide(),o.show()}))}}}()},"8w2F":function(e,t){!function(){if($("section.download-page").length){var e=$(".download-os"),t=$(".download-button"),n=$(".download-note"),o={windows:"<b>Note:</b> Make sure to uninstall old versions of Bootstrap Studio before installing this one.",linux:'<b>Note:</b> Make sure to uninstall old versions of Bootstrap Studio before installing this one.<br><br>To run the application, make the AppImage executable with the <b>chmod +x</b> command and double click it.<br><br>If you wish to create a launcher icon and associate the app with .bsdesign files, after downloading run <b><a href="" class="linux-install">this script</a></b> like so:<br><code style="background-color: transparent;padding: 0;">bash launcher.sh</code>',macos:"<b>Note:</b> Make sure to uninstall old versions of Bootstrap Studio before installing this one."};e.on("change",(function(){if("choose"==e.val())return t.addClass("disabled"),void n.hide();t.removeClass("disabled"),t.attr("href",t.data(e.val())),n.html(o[e.val()]).show(),n.find(".linux-install").attr("href",t.data("linux-install"))})),$(".find-accessible-version").on("click",(function(e){e.preventDefault();var t=window.prompt("Paste your license key below");40==t.trim().length?$.post("/license-check-accessible-version",{key:t}).then((function(e){alert("The latest version your license key has access to is "+e)})).fail((function(){alert("Your license key couldn't be found.")})):alert("This license key is invalid.")}))}}()},AmmV:function(e,t){$((function(){var e=$(".navbar-fixed-top");e.length&&$(window).on("scroll",(function(){e.toggleClass("below-fold",window.pageYOffset+e[0].offsetHeight>window.innerHeight)})).trigger("scroll")}))},"E+cI":function(e,t,n){$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}}),n("TSZs"),n("zAE+"),n("te5C"),n("ZVDs"),n("poC1"),n("pjX1"),n("NOF4"),n("2iZf"),n("AmmV"),n("IPfU"),n("4r3E"),n("txPb"),n("8w2F")},HcWH:function(e,t){},IPfU:function(e,t){$(".smooth-scroll").click((function(e){var t=this.getAttribute("href");if("#"==t)return e.preventDefault(),void $("body, html").stop().animate({scrollTop:0},400);try{var n=$(t);n.length&&(e.preventDefault(),$("body, html").stop().animate({scrollTop:n.offset().top-60},400))}catch(e){}}))},NOF4:function(e,t){function n(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){l=!0,i=e},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw i}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}!function(){var e={type:"pageview",visibilityState:document.visibilityState,value:location.pathname};try{new URL(document.referrer).origin!=location.origin&&(e.referrer=document.referrer)}catch(e){}f(e);var t,o=d(),r=!1,a=!1,i=[],s=!1,l=n(o);try{for(l.s();!(t=l.n()).done;){var u=t.value;0==u.value.indexOf("/pages/thank-you")&&(r=!0),0==u.value.indexOf("/download")&&(a=!0),"pageview"==u.type&&-1==i.indexOf(u.value)&&i.push(u.value),Date.now()-u.date>864e5&&(s=!0)}}catch(e){l.e(e)}finally{l.f()}var c=i.length>4&&s;function d(){return JSON.parse(localStorage.bstudioHistory||"[]")}function f(e){var t=d();e.date=Date.now(),t.unshift(e),t.length>250&&(t.length=250),localStorage.bstudioID||(localStorage.bstudioID=function(e){e=e||10;for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=0;o<e;o++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}()),localStorage.bstudioHistory=JSON.stringify(t)}r||a||"/"!=o[0].value||!c||gtag("event","hesitating",{event_category:"behavior"}),c&&0==o[0].value.indexOf("/pages/thank-you")&&gtag("event","hesitated-but-purchased",{event_category:"behavior"}),window.recordEvent=function(e){f({type:"event",value:e,data:Array.prototype.slice.call(arguments,1)})},window.isHesitant=function(){return!r&&!a&&c}}()},TSZs:function(e,t){$((function(){$("#contact-us-page").find("p strong").text("hi"+String.fromCharCode("64")+"bootstrapstudio.io"),$("#contact-us-page #form-toggle-link").click((function(e){e.preventDefault(),$("#contact-us-page #form").toggle()})),$("#apply-student-license #notes-group .control-label").click((function(e){e.preventDefault(),$("#apply-student-license #notes-group").toggleClass("open")}));var e=!1;$("form.auto-submit").on("submit",(function(t){if(t.preventDefault(),!e){e=!0;var n=this,o=$(n).serializeArray();o.push({name:"h",value:"_al2;3=s0"});var r=$(n).find(".alert");$.post(n.action,$.param(o),(function(t){e=!1,r.removeClass("hidden alert-danger alert-success"),"ok"==t?(r.addClass("alert-success"),r.html("Thanks. We will reply as soon as possible."),n.reset()):"fail"==t?(r.addClass("alert-danger"),r.html("An error occured. Please try again after a minute.")):(r.addClass("alert-danger"),r.html(t))}))}})),$("#affiliate-page #agree").on("change",(function(e){$("#affiliate-page button").attr("disabled",!e.target.checked)})),$(".message-alert").each((function(){$(this).delay(this.dataset.delay||2e3).fadeOut()}))}))},ZVDs:function(e,t){$((function(){if($("body").is(".renew-license")){Paddle.Setup({vendor:12021});var e={},t={individual:{1:25,2:40,lifetime:50},organization:{1:45,2:90,3:135,4:180,5:225}},n={individual:{1:508089,2:510528,lifetime:510529},organization:508136},o=null;location.hash&&(o=location.hash.slice(1));var r=$("#license-form"),a=!1;r.on("submit",(function(e){if(e.preventDefault(),!a){a=!0;var t=r.find(".message");t.hide(),$.post("/renew-license-handler",{createRenewalForLicense:r.find("#license-field").val()},(function(e){a=!1,e.error?t.text(e.error).show():(window.location.hash=e.key,window.location.reload())}))}})),o?($.get("/renew-license-handler",{key:o},(function(t){e=t,i()})),$(".license-group .panel-footer button").on("click",(function(e){var t=$(e.target).closest(".license-group"),o=t.data("items"),r=null,a=0,i=null;"individual"==t.data("type")?(a=o.length,r=o.map((function(e){return{id:e.id}})),i=n.individual[t.data("period")]):(r=o.map((function(e){return a+=e.renewPeriod,{id:e.id,years:e.renewPeriod}})),i=n[t.data("type")]),Paddle.Checkout.open({product:i,passthrough:JSON.stringify(r),success:"https://bootstrapstudio.io/pages/thank-you-renewal",quantity:a,allowQuantity:!1})})),$(document).on("change",".license-group select",(function(e){var t=$(e.target).closest("tr").data("item");if(t)return t.renewPeriod=Number(e.target.value),void i();$(e.target).closest(".license-group").data("period",e.target.value),i()})),$(document).on("click",".menu .renew",(function(t){t.preventDefault();var n=$(t.target).closest("tr").data("item");"student"!=n.type?(n.parent.splice(n.parent.indexOf(n),1),e[n.type].push(n),i()):window.open("/contact-us")})),$(document).on("click",".menu .dont-renew",(function(t){t.preventDefault();var n=$(t.target).closest("tr").data("item");n.parent.splice(n.parent.indexOf(n),1),e.other.push(n),i()})),$(document).on("click",".menu .convert-to-org",(function(t){t.preventDefault();var n=$(t.target).closest("tr").data("item");n.parent.splice(n.parent.indexOf(n),1),e.organization.push(n),i()}))):r.show()}function i(){e.individual.length+e.organization.length+e.student.length+e.other.length!=0?(s("individual"),s("organization"),s("student"),s("other")):r.show()}function s(n){var o=$("#licenses-"+n),r=o.find("tbody").empty(),a=e[n];if(o.data("items",a),o.data("type",n),!a.length)return o.hide(),void r.empty();for(var i=0,s=0;s<a.length;s++)r.append(l(n,a[s])),a[s].parent=e[n],"organization"==n&&(i+=t[n][a[s].renewPeriod]);"individual"==n&&(o.find("select").val(o.data("period")),i=a.length*t.individual[o.data("period")]),o.show(),o.find(".total strong").text("$"+i)}function l(e,n){var o=$("<tr>");if(o.data("item",n),o.append(u("<b>"+n.key+"</b>")),"other"==e&&o.append(u('<b style="text-transform:capitalize;">'+n.type+"</b>")),moment(n.endDate).isAfter(Date.now())?o.append(u('<b>Active</b><br><span class="text-muted">until '+c(n.endDate)+"</span>","small")):o.append(u('<b>Expired</b><br><span class="text-muted">on '+c(n.endDate)+"</span>","small")),o.append(u(c(n.startDate),"small")),"organization"==e){var r=$('<select>\t\t\t\t<option value="1">1 Year</option>\t\t\t\t<option value="2">2 Years</option>\t\t\t\t<option value="3">3 Years</option>\t\t\t\t<option value="4">4 Years</option>\t\t\t\t<option value="5">5 Years</option>\t\t\t</select>');r.val(n.renewPeriod),o.append(u(r)),o.append(u("<b>$"+t[e][n.renewPeriod]+"</b>","price"))}var a=$('<div class="dropdown">\t\t\t<button class="btn btn-link btn-xs dropdown-toggle" data-toggle="dropdown" aria-expanded="false" type="button"><span class="caret"></span></button>\t\t\t<ul class="dropdown-menu" role="menu"></ul>\t\t</div>');return"individual"==e||"organization"==e?a.find("ul").append('<li><a href="#" class="dont-renew">Don\'t Renew</a></li>'):a.find("ul").append('<li><a href="#" class="renew">Renew</a></li>'),o.append(u(a,"menu")),o}function u(e,t){var n=$("<td>").html(e);return t&&n.addClass(t),n}function c(e){return moment(e).format("MMM Do YYYY")}}))},pjX1:function(e,t){$((function(){$(window);if($("#tutorial-sidebar").length){var e,t=$("#tutorial-sidebar a.tutorial").map((function(){return{url:this.href,text:this.textContent}})).toArray(),n=new Fuse(t,{shouldSort:!0,threshold:.4,location:0,distance:100,maxPatternLength:32,minMatchCharLength:1,keys:["text"]}),o=$("#tutorial-search input"),r=$("#tutorial-search .suggestions"),a=!1,i=-1,s=[];o.on("focusout",(function(t){var n=0;t.relatedTarget&&t.relatedTarget.matches(".suggestions a")&&(n=1e3),clearTimeout(e),e=setTimeout((function(){r.fadeOut("fast")}),n)})),o.on("keydown",(function(e){if(13==e.keyCode){if(a&&i>=0)return void((n=r.find("a").eq(i)).length&&(window.location.href=n.attr("href")));var t=o.val().trim();if(t.length)return void(window.location.href="https://www.google.com/search?q="+encodeURIComponent("site:bootstrapstudio.io/tutorials/ "+t))}var n;a&&(40==e.keyCode&&(e.preventDefault(),++i>=s.length&&(i=0),l()),38==e.keyCode&&(e.preventDefault(),--i<0&&(i=-1),l()),27==e.keyCode&&(e.preventDefault(),i=-1,l(),r.hide()))})),o.on("input focus",(function(t){var o=t.target.value.trim();if(a=!1,i=-1,o.length>=3&&o.length<=30&&(s=n.search(o)).length){s.length>5&&(s.length=5),r.html('<div class="title">Suggestions <i>(press Enter to Google)</i></div>'),a=!0;for(var l=0;l<s.length;l++){var u=document.createElement("a");u.textContent=s[l].text,u.href=s[l].url,r.append(u)}}clearTimeout(e),"focus"==t.type?e=setTimeout((function(){r.toggle(a)}),50):r.toggle(a)}))}function l(){if(r.find("a").removeClass("highlighted"),!(i<0)){var e=r.find("a").eq(i);e.length&&e.addClass("highlighted")}}}))},poC1:function(e,t){$((function(){var e=$("#contact-us-page #subject-input"),t=$("#contact-us-page .suggestions"),n=t.find(".faq-list");if(e.length){var o,r=$("#faq .faq-item").map((function(e,t){return{index:e,question:t.querySelector("h4").textContent,answer:t.querySelector("p").textContent}})).toArray(),a=lunr((function(){this.ref("index"),this.field("question"),this.field("answer"),r.forEach((function(e){this.add(e)}),this)})),i=!1;e.on("focusin",(function(e){i&&(clearTimeout(o),t.show())})),e.on("focusout",(function(e){o=setTimeout((function(){t.fadeOut()}),500)})),e.on("input",(function(e){var s=e.target.value.trim();i=!1;try{if(s.length>3){var l=a.search(s);if(l.length){i=!0,l=l.slice(0,3),n.empty();for(var u=0;u<l.length;u++){var c=$("<li>").text(r[l[u].ref].question).data("index",l[u].ref);n.append(c)}}}}catch(e){}clearTimeout(o),t.toggle(i)})),n.on("click","li",(function(e){var t=$("#faq .faq-item").eq($(e.target).data("index"));$("html, body").animate({scrollTop:t.offset().top-15},500),setTimeout((function(){t.addClass("highlighted"),setTimeout((function(){t.removeClass("highlighted")}),1e3)}),500)}))}}))},te5C:function(e,t){$((function(){if($("body").is(".license-key-restore")){var e=!1,t=null;$("#typo-transfer").on("click",(function(n){n.preventDefault(),!e&&t&&($.post("/license-change-email",t),$("#result-typo").hide(),$("#result-typo-sent").show())})),$("#email-form").off("submit").on("submit",(function(n){n.preventDefault();var o=$("#email-field").val().trim();o&&(e||(e=!0,$.post("/license-restore-handler",{email:o},(function(n){$("#result-error, #result-typo, #result-typo-sent, #result-success, #result-email").hide(),"error"==n.type?$("#result-error").text("We can't find this email address in our database.").show():("email"==n.type?$("#result-email").show():"typo"==n.type?(t=n,$("#result-typo").show(),$("#result-typo .old").text(n.old),$("#result-typo .new").text(n.new)):($("#result-success").show(),$("#result-success strong").text(n.result)),$("#email-field").val("")),e=!1}))))}))}}))},txPb:function(e,t){!function(){if("/educators"==location.pathname){var e=new URL(location.href).searchParams.get("code");if(e){$(".regular-content").hide();var t=$(".loading-content"),n=$(".license-content"),o=$(".error-content");t.show(),$.post("/github-educators-authorize",{code:e}).then((function(e){"error"==e.status&&e.redirect?window.location=location.pathname:(t.hide(),"error"!=e.status?(n.find("strong").text(e.key),n.show()):o.show())})).fail((function(){t.hide(),o.show()}))}}}()},"zAE+":function(e,t){function n(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){l=!0,i=e},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw i}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}$((function(){if($("body").is(".landing")){Paddle.Setup({vendor:12021});var e="Google Inc."==window.navigator.vendor,t=null;$(".try-section, header .btn").click((function(n){if(n.preventDefault(),!e)return h("600px","400px",'<div class="demo-fail-message">\t\t\t\t<h2>Oh, Bummer!</h2>\t\t\t\t<p>Bootstrap Studio is a desktop application that runs perfectly on Windows, macOS and Linux. But the browser demo works only in Google Chrome at the moment.</p>\t\t\t\t<p>We can assure you that it is a kick-ass app! You can <strong>try it risk-free</strong> thanks to our 30 day money back guarantee.</p>\t\t\t\t</div>').appendTo("body"),gtag("event","fail",{event_category:"Demo"}),void recordEvent("click-show-demo","fail");gtag("event","show",{event_category:"Demo"}),recordEvent("click-show-demo","success"),function(){if(t)return;t=h("96%","96%",'<iframe src="/demo/" frameborder="0" style="position: absolute;top: 2.4em;bottom: 0;width: 100%;height: calc( 100% - 2em);"></iframe>',!1).hide().appendTo("body")}(),t.fadeIn("fast")})),$("header .btn").click((function(){gtag("event","click",{event_category:"Header Try Demo Button"})}));var o=1,r={1:{productID:501859,regularPrice:50,discountedPrice:25},2:{productID:510103,regularPrice:90,discountedPrice:45},lifetime:{productID:510104,regularPrice:120,discountedPrice:60}};$("#period-dropdown").on("change",(function(e){o=e.target.value,$(".price .regular-price").text("$"+r[o].regularPrice),$(".price .discounted-price").text("$"+r[o].discountedPrice)})),$("#buy, #buy-individual").click((function(e){e.preventDefault(),Paddle.Checkout.open({product:r[o].productID,success:"https://bootstrapstudio.io/pages/thank-you"}),gtag("event","click",{event_category:"Buy Button"}),recordEvent("click-buy-button","individual")})),$("#buy-lifetime").click((function(e){e.preventDefault(),Paddle.Checkout.open({product:510104,success:"https://bootstrapstudio.io/pages/thank-you"}),gtag("event","click",{event_category:"Buy Button"}),recordEvent("click-buy-button","lifetime")})),$("body").on("wheel",".pretty-overlay",!1),$("body").on("click",".pretty-overlay, .pretty-overlay .windowed, .pretty-overlay .close-button",p),$("body").on("keydown",(function(e){27==e.which&&p()})),isHesitant&&isHesitant()&&window.innerWidth>1e3&&!localStorage.offerShown&&(localStorage.offerShown=!0,h("600px","410px",'<div class="special-offer-message">\t\t\t<h2>10% Discount Unlocked</h2>\t\t\t<p>We have a special offer for you. Use this promo code<br> during checkout and receive 10% off!</p>\t\t\t<p class="coupon">BSS-SPECIAL-10</p>\t\t\t<p>Copy it to a safe place. It won\'t show up again and<br> is valid only for 24 hours. Hurry up!</p>\t\t\t</div>',!0,!1).appendTo("body"));var a=$("#newsletter-form"),i=$(".subscribe .status"),s=!1;a.on("submit",(function(e){e.preventDefault(),s||(s=!0,$.post("/subscribe-for-newsletter",{email:a.find("input").val(),rt:'ne3"rl@!№q4('}).done((function(e){e.match(/Thank/)&&a[0].reset(),i.text(e)})).always((function(){s=!1})))}));var l={"component-panel":"This is the <b>Component Panel</b>. This is where all the available components are. Just grab what you need and drop it onto the stage.","overview-panel":"This is the <b>Overview Panel</b>. Here you see all components that have been added to your page. You can click to select them, and drag and drop to reorder them.","options-panel":"This is the <b>Options Panel</b>. Here you can see all available settings for the selected component.","design-panel":"This is the <b>Design Panel</b>. It contains all pages, stylesheets, js files, images and fonts of your design.","editor-panel":"This is the <b>Editor Panel</b>. This is where editors for CSS, JS and HTML are shown. You can drag the tabs around to reorder them.",stage:"This is the <b>Stage</b>. It shows a live preview of your page. Here you can select components, edit text and rearrange elements with drag and drop."},u=$("#features .interface"),c=u.find(".tooltip");u.on("mouseenter",(function(){u.addClass("animate")})).on("mouseleave",(function(){u.removeClass("animate")})),u.find(".dot").on("mouseenter",(function(e){var t=$(e.target),n=t.position(),o=e.target.className.replace("dot ",""),r="";t.data("direction")&&(r=t.data("direction")),c.css(n).html(l[o]).removeClass("left right").addClass("visible").addClass(r),"editor-panel"==o&&$("#features .interface").addClass("show-ghost")})).on("mouseleave",(function(){c.removeClass("visible"),$("#features .interface").removeClass("show-ghost")})),setTimeout((function(){window.innerWidth>1024&&$("#version-is-here section").append('<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/41AaGPktHv8"allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" loading="lazy"></iframe></div>')}),2e3);var d=!1;if(window.IntersectionObserver){var f=new IntersectionObserver((function(e){var t,o=n(e);try{for(o.s();!(t=o.n()).done;){if(t.value.isIntersecting)return void g()}}catch(e){o.e(e)}finally{o.f()}}));Array.from(document.querySelectorAll(".swiper-container")).forEach((function(e){return f.observe(e)}))}else setTimeout(g,5e3)}function p(e){if(!e||e.target==e.currentTarget){var t=$(".pretty-overlay");t.data("destroy")?t.fadeOut("fast",(function(){t.remove()})):t.fadeOut("fast")}}function h(e,t,n,o,r){return null==o&&(o=!0),null==r&&(r=!0),$('<div class="pretty-overlay" data-destroy="'+(o?1:0)+'" style="background-color: rgba(0,0,0,0.6);z-index: 1040;position: fixed;top: 0;left: 0;width: 100%;height: 100%;display:flex;justify-content:center;align-items:center">\t\t\t<div class="'+(r?"windowed":"")+'" style="width:'+e+";height:"+t+';position:relative;font-size: 12px;">\t\t\t\t<div class="close-button" style="border-radius: 50%;background-color: #CC1A1A;color: #fff;font-size: 24px;position: absolute;top: -10px;right: -10px;width: 30px;height: 30px;z-index: 10;box-shadow: 0 4px 4px rgba(0,0,0,0.1);opacity: 1;text-align: center;cursor: pointer;line-height: 30px;">×</div>\t\t\t\t'+n+"\t\t\t</div>\t\t</div>")}function g(){d||(d=!0,window.Swiper&&new Swiper(".swiper-container",{loop:!0,pagination:".swiper-pagination",paginationClickable:!0,nextButton:".swiper-button-next",prevButton:".swiper-button-prev"}))}}))}});
//# sourceMappingURL=script.js.map