document.addEventListener('DOMContentLoaded', () => {
    // Solo ejecutar este script si estamos en la página de la app
    if (!document.getElementById('app-view-wrapper')) {
        return;
    }

    // --- ELEMENTOS DEL DOM ---
    const loadingOverlay = document.getElementById('loading-overlay');
    const mainMenu = document.getElementById('main-menu');
    const longTermPlanner = document.getElementById('long-term-planner');
    const todayPlanner = document.getElementById('today-planner');
    const planDisplay = document.getElementById('plan-display');
    const allViews = [mainMenu, longTermPlanner, todayPlanner, planDisplay];

    // --- TRADUCCIONES Y DATOS ---
    const translations = {
        es: { /* ... Contenido completo de traducciones en español ... */ },
        en: { /* ... Contenido completo de traducciones en inglés ... */ },
        fr: { /* ... Contenido completo de traducciones en francés ... */ }
    };
    // (Pega aquí el objeto 'translations' completo de tu archivo original)

    let currentLang = 'es';
    let currentDate = new Date();
    let selectedDate = null;
    
    // --- LÓGICA DE NAVEGACIÓN Y VISTAS ---
    function navigateTo(viewId) {
        history.pushState({ view: viewId }, '', `#${viewId}`);
        allViews.forEach(v => {
            if (v) v.classList.toggle('hidden', v.id !== viewId);
        });
    }
    
    window.addEventListener('popstate', (event) => {
        if (event.state && event.state.view) {
            navigateTo(event.state.view);
        } else {
            navigateTo('main-menu');
        }
    });

    // --- LÓGICA DE LA APLICACIÓN (Generadores, Calendario, etc.) ---
    
    // (Pega aquí todas las funciones de tu script original:
    // - updateTexts()
    // - updateLevelSliderText()
    // - renderCalendar()
    // - generateTodayWorkout()
    // - calculatePaces()
    // - getStrengthWorkout()
    // - getDetailedWorkout()
    // - generateLongTermPlan()
    // - displayWorkout()
    // - displayLongTermPlan()
    // ... y el resto de la lógica)

    // --- EVENT LISTENERS ---
    document.getElementById('plan-long-term-card')?.addEventListener('click', () => navigateTo('long-term-planner'));
    document.getElementById('plan-today-card')?.addEventListener('click', () => navigateTo('today-planner'));
    
    ['back-btn', 'back-to-main-lt', 'back-to-main-tp'].forEach(id => {
        const btn = document.getElementById(id);
        if(btn) btn.addEventListener('click', () => history.back());
    });

    document.getElementById('prev-month')?.addEventListener('click', () => { currentDate.setMonth(currentDate.getMonth() - 1); renderCalendar(); });
    document.getElementById('next-month')?.addEventListener('click', () => { currentDate.setMonth(currentDate.getMonth() + 1); renderCalendar(); });

    // (Pega aquí el resto de los event listeners de tu script original)


    // --- INICIALIZACIÓN ---
    function initApp() {
        const viewFromHash = window.location.hash.substring(1);
        const validViews = ['main-menu', 'long-term-planner', 'today-planner', 'plan-display'];
        
        if (validViews.includes(viewFromHash)) {
            navigateTo(viewFromHash);
        } else {
            navigateTo('main-menu');
        }
        updateTexts(); // Carga los textos iniciales
    }
    
    // Iniciar la aplicación
    initApp();
});
