// Esperamos a que el HTML termine de cargar
document.addEventListener('DOMContentLoaded', () => {
    
    const langToggle = document.getElementById('lang-toggle');
    
    // 1. Revisamos si el usuario ya había elegido un idioma antes. Si no, usamos 'es' por defecto.
    let currentLang = localStorage.getItem('portfolio_lang') || 'es';

    // 2. Función principal que cambia los textos y el botón
    const applyLanguage = (lang) => {
        // Actualizamos el texto del botón (si existe en la página actual)
        if (langToggle) {
            langToggle.innerHTML = lang === 'es' ? '🇺🇸 English' : '🇲🇽 Español';
        }
        
        // Buscamos todos los elementos con la clase 'i18n' y les ponemos el texto correcto
        document.querySelectorAll('.i18n').forEach(element => {
            const newText = element.getAttribute(`data-${lang}`);
            // Solo cambiamos el texto si el atributo existe, para evitar errores
            if (newText) {
                element.innerHTML = newText;
            }
        });
    };

    // 3. Aplicamos el idioma INMEDIATAMENTE al cargar la página
    applyLanguage(currentLang);

    // 4. Qué pasa cuando el usuario hace clic en el botón
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            // Cambiamos al idioma contrario
            currentLang = currentLang === 'es' ? 'en' : 'es';
            
            // Guardamos la nueva preferencia en el navegador
            localStorage.setItem('portfolio_lang', currentLang);
            
            // Aplicamos los cambios visuales
            applyLanguage(currentLang);
        });
    }
});