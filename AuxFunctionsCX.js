// AuxFunctionsCX.js
window.AuxFunctionsCX = (function() {
    // ========== Configuración (puedes mover esto aquí si es exclusivo de la librería) ==========
    const iconList = {
        tag: 'fa fa-tag',
        close: 'fa fa-close',
        spin: 'fa fa-spinner fa-spin',
        pie: 'fa fa-pie-chart',
        filter: 'fa fa-filter'
    };

    // ========== Métodos Públicos ==========
    return {
        ChargeMessage: function(xtype, xmsg, canvasChart = '#dashboardWidget_139886') {
            const msgTypes = [
                {class: 'IniCharge', type: 'info', icon: iconList.spin},
                {class: 'NoCharge', type: 'danger', icon: iconList.pie},
                {class: 'NoMatch', type: 'warning', icon: iconList.filter}
            ];
            const idx = Math.max(0, xtype - 1);
            const htmlCharge = `
                <div class="${msgTypes[idx].class}" style="margin: auto;">
                    <h3 class="text-${msgTypes[idx].type}">
                        <i class="${msgTypes[idx].icon} fa-3x"></i><br><br>${xmsg}...
                    </h3>
                </div>
            `;
            this.SetCustomContent(canvasChart, htmlCharge, false, false, true, false);
            $(canvasChart + ' .dashboard-widget-content').css({"align-items": "center", "display": "flex"});
        },

        SetCustomContent: function(element, customHtml, hideTitle, isTransparent, centerContent, isScrolleable) {
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
        },

        // Agrega aquí más métodos si los necesitas
        Init: function(config) {
            // Opcional: Permite sobrescribir configuraciones
            if (config) Object.assign(this.config, config);
        }
    };
})();
