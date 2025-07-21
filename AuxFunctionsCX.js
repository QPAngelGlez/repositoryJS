//========================= Funciones auxiliares ===================
function ChargeMessage(xtype, xmsg){ 
    const idx = Math.max(0, xtype - 1); const msgTypes = [  {class:'IniCharge',type:'info',icon:iconList.spin},  {class:'NoCharge',type:'danger',icon:iconList.pie},  {class:'NoMatch',type:'warning',icon:iconList.filter}  ]; 
    const msg = (xmsg !== 3) ? xmsg : `<b>Se ha encontrado:</b> <span class="label label-warning">${FormatOneNbr(generalDataOK.cList?.length || 0)}</span> comentario(s).<br>${xmsg}`; 
    const htmlCharge = `<div class="${msgTypes[idx].class}" style="margin: auto;"><h3 class="text-${msgTypes[idx].type}"><i class="${msgTypes[idx].icon} fa-3x"></i><br><br>${msg}... </h3></div>`; 
    SetCustomContent(setChart.basics.canvasChart, htmlCharge, false, false, true, false);
    $(setChart.basics.canvasChart + ' .dashboard-widget-content').css({"align-items":"center","display":"flex"}); 
}
function SetCustomContent(element, customHtml, hideTitle, isTransparent, centerContent, isScrolleable){ const elmtMod = element + ' .dashboard-widget-content'; const alignTxt = (centerContent)? 'center':'start'; if(hideTitle){ $(element + ' .title').hide(); } if(isScrolleable){ $(elmtMod).css({"overflow-y":"auto"}); } if(isTransparent){ $(element).parent().css({"background-color":"#ffffff00"}); $(element).css({"background-color":"#ffffff00"}); $(elmtMod).css({"background-color":"#ffffff00"}); } $(elmtMod).hide(); $(elmtMod).html(customHtml); $(elmtMod).css({"text-align":alignTxt}); $(elmtMod).css({"padding":"5px 40px"}); $(elmtMod).fadeIn(1000); }
//===================================================================