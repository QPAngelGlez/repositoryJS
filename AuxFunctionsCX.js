window.AuxFunctionsCX = (function($) { // <-- jQuery como parámetro
    const iconList = {
        tag: 'fa fa-tag',
        close: 'fa fa-close',
        spin: 'fa fa-spinner fa-spin',
        pie: 'fa fa-pie-chart',
        filter: 'fa fa-filter'
    };

    return {
        ChargeMessage: function(xtype, xmsg, canvasChart) {
            // Usa $ normalmente aquí
            const msgTypes = [
                {class: 'IniCharge', type: 'info', icon: iconList.spin},
                {class: 'NoCharge', type: 'danger', icon: iconList.pie},
                {class: 'NoMatch', type: 'warning', icon: iconList.filter}
            ];
            const idx = Math.max(0, xtype - 1);
            const htmlCharge = `<div class="${msgTypes[idx].class}" style="margin: auto;">
                <h3 class="text-${msgTypes[idx].type}">
                    <i class="${msgTypes[idx].icon} fa-3x"></i><br><br>${xmsg}...
                </h3>
            </div>`;
            
            this.SetCustomContent(canvasChart, htmlCharge, false, false, true, false);
            $(canvasChart + ' .dashboard-widget-content').css({"align-items": "center", "display": "flex"});
        },
        
        SetCustomContent: function(element, customHtml, hideTitle, isTransparent, centerContent, isScrolleable) {
            // Implementación con $
            const elmtMod = element + ' .dashboard-widget-content';
            const alignTxt = centerContent ? 'center' : 'start';
            
            if (hideTitle) $(element + ' .title').hide();
            if (isScrolleable) $(elmtMod).css({"overflow-y": "auto"});
            if (isTransparent) {
                $(element).parent().css({"background-color": "#ffffff00"});
                $(element).css({"background-color": "#ffffff00"});
                $(elmtMod).css({"background-color": "#ffffff00"});
            }
            
            $(elmtMod)
                .hide()
                .html(customHtml)
                .css({
                    "text-align": alignTxt,
                    "padding": "5px 40px"
                })
                .fadeIn(1000);
        }
    };
})(window.jQuery); // <-- Pasar jQuery existente
