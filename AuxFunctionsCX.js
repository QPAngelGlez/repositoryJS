// AuxFunctionsCX.js - Versión compatible con tu estructura
window.AuxFunctionsCX = (function() {
    // ============== Configuración de íconos ==============
    const iconList = {
        tag: 'fa fa-tag',
        close: 'fa fa-close',
        spin: 'fa fa-spinner fa-spin',
        pie: 'fa fa-pie-chart',
        filter: 'fa fa-filter'
    };

    // ============== Verificar jQuery ==============
    const $ = window.jQuery;
    if (!$) throw new Error("jQuery es requerido");

    // ============== Métodos Públicos ==============
    return {
        /**
         * Muestra mensaje de estado (versión original ChargeMessage)
         * @param {number} xtype - Tipo de mensaje (1-3)
         * @param {string} xmsg - Texto a mostrar
         * @param {string} container - Selector del contenedor
         */
        ChargeMessage: function(xtype, xmsg, container) {
            if (!container || !$(container).length) {
                console.error("Selector no válido:", container);
                return;
            }

            const types = [
                { class: 'IniCharge', icon: _icons.spin },
                { class: 'NoCharge', icon: _icons.pie },
                { class: 'NoMatch', icon: _icons.filter }
            ];
            const idx = Math.max(0, xtype - 1);

            const html = `
                <div class="${types[idx].class}">
                    <i class="${types[idx].icon} fa-3x"></i>
                    <h3>${xmsg}</h3>
                </div>
            `;

            this.SetCustomContent(container, html, false, false, true);
        },

        /**
         * Actualiza contenido (versión original SetCustomContent)
         * @param {string} element - Selector del contenedor
         * @param {string} html - Contenido HTML
         * @param {boolean} hideTitle - Ocultar título
         * @param {boolean} isTransparent - Fondo transparente
         * @param {boolean} centerContent - Centrar contenido
         * @param {boolean} [isScrolleable=false] - Habilitar scroll
         */
        SetCustomContent: function(element, html, hideTitle, isTransparent, centerContent, isScrolleable = false) {
            const $target = $(element);
            if (!$target.length) return;

            const $content = $target.find('.dashboard-widget-content');
            
            if (hideTitle) $target.find('.title').hide();
            if (isTransparent) {
                $target.add($content).css('background-color', 'transparent');
            }

            $content.css({
                'text-align': centerContent ? 'center' : 'left',
                'overflow-y': isScrolleable ? 'auto' : 'visible',
                'padding': '5px 40px',
                'display': 'flex',
                'align-items': centerContent ? 'center' : 'flex-start'
            }).hide().html(html).fadeIn(1000);
        },

        /**
         * Configurar íconos personalizados
         * @param {object} icons - { spin, pie, filter }
         */
        setIcons: function(icons) {
            Object.assign(_icons, icons);
        }
    };
})();
