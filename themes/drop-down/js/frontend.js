
(function($){$._getCookie=function(nombre){var dcookie=document.cookie;var cname=nombre+"=";var longitud=dcookie.length;var inicio=0;while(inicio<longitud)
{var vbegin=inicio+cname.length;if(dcookie.substring(inicio,vbegin)==cname)
{var vend=dcookie.indexOf(";",vbegin);if(vend==-1)
vend=longitud;return unescape(dcookie.substring(vbegin,vend));}
inicio=dcookie.indexOf(" ",inicio)+1;if(inicio==0)
break;}
return null;};$._setCookie=function(name,value){document.cookie=name+"="+value+"; expires="+(60*24)+"; path=/";};$.abh_showContent=function(obj){obj.find(".abh_tabs").show();obj.find(".abh_job").show();obj.find(".abh_allposts").show();obj.find(".abh_social").show();obj.find(".abh_tab_content").css('border-bottom-width','1px');obj.find(".abh_tab_content h3").css('border-bottom-width','0px');obj.find(".abh_tab_content h4").css('border-bottom-width','0px');obj.find(".abh_description").slideDown('fast');obj.find(".abh_arrow").addClass('abh_active');};$.abh_hideContent=function(obj){obj.find(".abh_description").slideUp('fast',function(){obj.find(".abh_tabs").hide();obj.find(".abh_job").hide();obj.find(".abh_allposts").hide();obj.find(".abh_social").hide();obj.find(".abh_tab_content").css('border-bottom-width','0px');obj.find(".abh_tab_content h3").css('border-bottom-width','1px');obj.find(".abh_tab_content h4").css('border-bottom-width','1px');obj.find(".abh_arrow").removeClass('abh_active');});};})(jQuery);jQuery(document).ready(function($){$(".abh_tab_content .abh_image img, .abh_tab_content h4, .abh_tab_content h3").bind('click',function(event){event.preventDefault();if($(this).parents('.abh_box').find(".abh_tabs").is(':visible')){$.abh_hideContent($(this).parents('.abh_box'));}else{$.abh_showContent($(this).parents('.abh_box'));}});$(".abh_tabs li").click(function(){$(".abh_tabs li").removeClass('abh_active');$(this).addClass("abh_active");$(this).parents('.abh_box').find(".abh_tab").hide();var selected_tab=$(this).find("a").attr("href");$(this).parents('.abh_box').find(selected_tab.replace('#','.')+'_tab').fadeIn();$(this).parents('.abh_box').find(selected_tab.replace('#','.')+'_tab').parents('.abh_box').find(selected_tab.replace('#','.')).addClass("abh_active");$._setCookie('abh_tab',selected_tab);return false;});$(".abh_tab_content").find("h3").append('<span class="abh_arrow"></span>');});