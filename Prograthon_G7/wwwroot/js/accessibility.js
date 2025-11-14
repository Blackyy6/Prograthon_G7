// Sistema de accesibilidad - Alto contraste y tamaño de fuente
(function () {
    'use strict';

    // Claves para localStorage
    const STORAGE_KEYS = {
        HIGH_CONTRAST: 'prograthon_high_contrast',
        FONT_SIZE: 'prograthon_font_size'
    };

    // Valores por defecto
    const DEFAULT_SETTINGS = {
        highContrast: false,
        fontSize: 'normal'
    };

    // Inicializar accesibilidad
    function initAccessibility() {
        // Cargar preferencias guardadas
        const savedHighContrast = localStorage.getItem(STORAGE_KEYS.HIGH_CONTRAST);
        const savedFontSize = localStorage.getItem(STORAGE_KEYS.FONT_SIZE);

        // Aplicar alto contraste si está guardado
        if (savedHighContrast === 'true') {
            applyHighContrast(true);
            document.getElementById('highContrastToggle').checked = true;
        }

        // Aplicar tamaño de fuente si está guardado
        if (savedFontSize) {
            applyFontSize(savedFontSize);
            // Marcar botón activo
            document.querySelectorAll('.font-size-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.size === savedFontSize) {
                    btn.classList.add('active');
                }
            });
        } else {
            // Aplicar tamaño normal por defecto
            applyFontSize('normal');
            document.querySelector('.font-size-btn[data-size="normal"]')?.classList.add('active');
        }

        // Configurar event listeners
        setupEventListeners();
    }

    // Configurar event listeners
    function setupEventListeners() {
        // Toggle alto contraste
        const highContrastToggle = document.getElementById('highContrastToggle');
        const highContrastLabel = document.getElementById('highContrastLabel');
        if (highContrastToggle) {
            highContrastToggle.addEventListener('change', function () {
                const isEnabled = this.checked;
                applyHighContrast(isEnabled);
                localStorage.setItem(STORAGE_KEYS.HIGH_CONTRAST, isEnabled.toString());

                // Actualizar label
                if (highContrastLabel) {
                    highContrastLabel.textContent = isEnabled ? 'Activado' : 'Desactivado';
                }
            });

            // Actualizar label inicial
            if (highContrastLabel) {
                highContrastLabel.textContent = highContrastToggle.checked ? 'Activado' : 'Desactivado';
            }
        }

        // Botones de tamaño de fuente
        document.querySelectorAll('.font-size-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const size = this.dataset.size;
                applyFontSize(size);

                // Actualizar botones activos
                document.querySelectorAll('.font-size-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                // Guardar preferencia
                localStorage.setItem(STORAGE_KEYS.FONT_SIZE, size);
            });
        });

        // Toggle panel de accesibilidad
        const toggleBtn = document.getElementById('accessibilityToggleBtn');
        const panel = document.getElementById('accessibilityPanel');

        if (toggleBtn && panel) {
            toggleBtn.addEventListener('click', function () {
                panel.classList.toggle('hidden');

                // --- CAMBIO AQUÍ (Punto 4) ---
                // Actualizar aria-expanded
                const isExpanded = !panel.classList.contains('hidden');
                this.setAttribute('aria-expanded', isExpanded.toString());
                // --- FIN DEL CAMBIO ---
            });
        }

        // Cerrar panel al hacer clic fuera
        document.addEventListener('click', function (event) {
            if (panel && !panel.contains(event.target) &&
                toggleBtn && !toggleBtn.contains(event.target) &&
                !panel.classList.contains('hidden')) {

                panel.classList.add('hidden');

                // --- CAMBIO AQUÍ (Punto 4) ---
                // Actualizar ARIA al cerrar
                toggleBtn.setAttribute('aria-expanded', 'false');
                // --- FIN DEL CAMBIO ---
            }
        });

        // --- CÓDIGO NUEVO (Punto 1) ---
        // Cerrar panel con la tecla Escape
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && panel && !panel.classList.contains('hidden')) {
                panel.classList.add('hidden');

                // Devolver el foco al botón que abrió el panel y actualizar ARIA
                if (toggleBtn) {
                    toggleBtn.focus();
                    toggleBtn.setAttribute('aria-expanded', 'false');
                }
            }
        });
        // --- FIN DEL CÓDIGO NUEVO ---
    }

    // Aplicar alto contraste
    function applyHighContrast(enabled) {
        const body = document.body;
        if (enabled) {
            body.classList.add('high-contrast');
        } else {
            body.classList.remove('high-contrast');
        }
    }

    // Aplicar tamaño de fuente
    function applyFontSize(size) {
        const body = document.body;

        // Remover todas las clases de tamaño
        body.classList.remove('font-size-small', 'font-size-normal', 'font-size-large', 'font-size-xlarge');

        // Agregar la clase correspondiente
        if (size && size !== 'normal') {
            body.classList.add(`font-size-${size}`);
        }
    }

    // Inicializar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAccessibility);
    } else {
        initAccessibility();
    }

    // Exportar funciones para uso global si es necesario
    window.AccessibilityManager = {
        applyHighContrast: applyHighContrast,
        applyFontSize: applyFontSize,
        getSettings: function () {
            return {
                highContrast: localStorage.getItem(STORAGE_KEYS.HIGH_CONTRAST) === 'true',
                fontSize: localStorage.getItem(STORAGE_KEYS.FONT_SIZE) || 'normal'
            };
        }
    };
})();