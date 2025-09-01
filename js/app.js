document.addEventListener('DOMContentLoaded', () => {
    if (!document.getElementById('app-view-wrapper')) return;

    const loadingOverlay = document.getElementById('loading-overlay');
    const allViews = document.querySelectorAll('.view');

    const translations = {
        es: {
            landing_h1: "Entrenador Personal IA", landing_h2: "Tu Éxito, Nuestra Inteligencia", landing_p: "Desbloquea tu máximo potencial con un plan de entrenamiento inteligente y personalizado por IA. Sin coste, sin registros.", start_now_cta: "Comenzar Ahora", why_us_h2: "¿Por qué Entrena.ai? Nuestras Ventajas Clave", feature1_h3: "Planes 100% Personalizados", feature1_p: "Adaptamos cada entrenamiento a tu nivel y objetivo. Tu plan de maratón o triatlón, hecho a medida por la IA.", feature2_h3: "Inteligencia Artificial Avanzada", feature2_p: "Nuestro entrenador IA aprende de ti, ajustando dinámicamente tu plan para maximizar resultados y evitar lesiones.", feature3_h3: "Entrenador de Triatlón y Running", feature3_p: "Desde una carrera 10k a un triatlón de larga distancia (Ironman), nuestro entrenador IA cubre todas tus ambiciones.", feature4_h3: "Flexibilidad Total", feature4_p: "Modifica tus sesiones diarias según tu fatiga y disponibilidad, sin comprometer tu objetivo final.", feature5_h3: "Seguimiento Detallado", feature5_p: "Monitoriza tu rendimiento y ve tu evolución. Tu entrenador personal en el bolsillo para analizar tu progreso.", feature6_h3: "Acceso Inmediato y Gratis", feature6_p: "Empieza a entrenar en segundos. Sin barreras, sin costes. Tu entrenador personal IA gratis, para siempre.", footer_text: "© 2025 Entrena.ai - Todos los derechos reservados.", footer_contact: "¿Preguntas o sugerencias? <a href='mailto:info@entrena-ai.com' class='underline hover:text-amber-300'>Contacta con nosotros</a>", start_now_btn: "Comenzar ahora", app_title: "Entrenador Personal IA", app_subtitle: "Tu compañero inteligente para alcanzar tus metas de triatlón y maratón.", plan_long_term_title: "Planificar un objetivo a largo plazo", plan_long_term_desc: "Define tu carrera y fecha objetivo. La IA creará tu plan de entrenamiento completo.", plan_today_title: "Planificar un entrenamiento para hoy", plan_today_desc: "Obtén una sesión personalizada basada en tu estado y disponibilidad actual.", long_term_planner_title: "Plan de Objetivo a Largo Plazo", goal_type_label: "1. Elige tu objetivo", level_label: "2. Elige tu nivel:", goal_date_label: "3. Selecciona la fecha de la carrera", time_goal_label: "4. Marca Objetivo (Opcional)", generate_plan: "Generar Plan", today_planner_title: "Entrenamiento para Hoy", fatigue_label: "Fatiga actual:", discipline_label: "Disciplina", effort_label: "Nivel de exigencia:", duration_label: "Duración (minutos)", generate_workout: "Generar Entrenamiento", back: "Atrás", download_pdf: "Descargar PDF", your_training_plan: "Tu Plan de Entrenamiento", running: "Carrera", cycling: "Ciclismo", swimming: "Natación", race_10k: "Carrera 10 Km", half_marathon: "Media Maratón", marathon: "Maratón", tri_sprint: "Triatlón Sprint", tri_olympic: "Triatlón Olímpico", tri_md: "Triatlón Media Distancia", tri_ld: "Triatlón Larga Distancia", beginner: "Iniciación", intermediate: "Medio", advanced: "Alto", week: "Semana", phase: "Fase", base: "Base", build: "Construcción", peak: "Pico", taper: "Puesta a punto", recovery: "Recuperación", rest_day: "Día de Descanso", long_run: "Tirada Larga", tempo_run: "Carrera a Ritmo (Tempo)", interval_run: "Series (Intervalos)", easy_run: "Carrera Suave", long_ride: "Rodaje Largo", interval_ride: "Series en Bici", easy_ride: "Rodaje Suave", brick_workout: "Entrenamiento Ladrillo (Bici + Carrera)", tech_swim: "Técnica de Natación", endurance_swim: "Natación de Resistencia", months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], days_short: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"], error_past_date: "Por favor, selecciona una fecha futura.", error_min_weeks: (weeks) => `Se necesitan al menos ${weeks} semanas para un plan efectivo.`, workout_for_today: "Entrenamiento para Hoy", warmup: "Calentamiento", main_set: "Parte Principal", cooldown: "Vuelta a la Calma", rpe_explanation: "Nota: RPE (Tasa de Esfuerzo Percibido) es una escala de 1 (muy fácil) a 10 (esfuerzo máximo) para medir la intensidad que sientes.", recovery_session: "Sesión de Recuperación", high_fatigue_warning: "Fatiga alta. Se recomienda una sesión muy suave o descanso.", long_run_quality_session: "Tirada Larga con Calidad", interval_session_short: "Sesión de Series Cortas", interval_session_long: "Sesión de Series Largas", hill_session: "Sesión de Cuestas", fartlek_session: "Sesión de Fartlek (Cambios de Ritmo)", tempo_session: "Sesión de Ritmo Controlado (Tempo)", progressive_run_session: "Rodaje Progresivo", pace_per_km: "ritmo/km", strength_training: "Entrenamiento de Fuerza", walk_run_session: "Sesión Caminar-Correr", walking: "caminando", strength_a: "Fuerza (A): 3x10 Sentadilla Goblet, 3x12 Zancadas, 3x10 Press Banca, 3x12 Remo c/m, 3x45s Plancha.", strength_b: "Fuerza (B): 3x10 Peso Muerto Rumano, 3x12 Puente de Glúteos, 3x10 Press Militar, 3xMax Dominadas, 3x45s Plancha Lateral.", strength_c: "Fuerza (C): 5x5 Sentadilla Trasera, 3x8 Peso Muerto una pierna, 3x8 Press inclinado, 3x10 Remo en polea.", strength_d: "Fuerza (D): 5x5 Peso Muerto Convencional, 3x8 Zancada Búlgara, 5x5 Press Militar, 3x10 Remo Pendlay.", strength_maintenance: "Mantenimiento: 2x15 Saltos al cajón, 2x15 Balanceo Kettlebell, 2x15 Lanzamiento Balón Medicinal, 2x15 Flexiones pliométricas."
        },
        en: {
            landing_h1: "Free AI Personal Trainer", landing_h2: "Your Success, Our Intelligence", landing_p: "Unlock your full potential with a smart, personalized training plan powered by AI. No cost, no sign-ups.", start_now_cta: "Start Now", why_us_h2: "Why Entrena.ai? Our Key Advantages", feature1_h3: "100% Personalized Plans", feature1_p: "We adapt every workout to your level and goal. Your marathon or triathlon plan, tailor-made by AI.", feature2_h3: "Advanced Artificial Intelligence", feature2_p: "Our AI coach learns from you, dynamically adjusting your plan to maximize results and prevent injuries.", feature3_h3: "Triathlon and Running Coach", feature3_p: "From a 10k race to a long-distance triathlon (Ironman), our AI coach covers all your ambitions.", feature4_h3: "Total Flexibility", feature4_p: "Modify your daily sessions based on your fatigue and availability, without compromising your final goal.", feature5_h3: "Detailed Tracking", feature5_p: "Monitor your performance and see your evolution. Your personal coach in your pocket to analyze your progress.", feature6_h3: "Instant and Free Access", feature6_p: "Start training in seconds. No barriers, no costs. Your free AI personal trainer, forever.", footer_text: "© 2025 Entrena.ai - Your free AI personal trainer. All rights reserved.", footer_contact: "Questions or suggestions? <a href='mailto:info@entrena-ai.com' class='underline hover:text-amber-300'>Contact us</a>", start_now_btn: "Start now", app_title: "AI Personal Trainer", app_subtitle: "Your intelligent partner to achieve your triathlon and marathon goals.", plan_long_term_title: "Plan a long-term goal", plan_long_term_desc: "Define your race and target date. The AI will create your complete training plan.", plan_today_title: "Plan a workout for today", plan_today_desc: "Get a personalized session based on your current state and availability.", long_term_planner_title: "Long-Term Goal Plan", goal_type_label: "1. Choose your goal", level_label: "2. Choose your level:", goal_date_label: "3. Select the race date", time_goal_label: "4. Set Time Goal (Optional)", generate_plan: "Generate Plan", today_planner_title: "Workout for Today", fatigue_label: "Current fatigue:", discipline_label: "Discipline", effort_label: "Effort level:", duration_label: "Duration (minutes)", generate_workout: "Generate Workout", back: "Back", download_pdf: "Download PDF", your_training_plan: "Your Training Plan", running: "Running", cycling: "Cycling", swimming: "Swimming", race_10k: "10k Race", half_marathon: "Half Marathon", marathon: "Marathon", tri_sprint: "Sprint Triathlon", tri_olympic: "Olympic Triathlon", tri_md: "Middle Distance Triathlon", tri_ld: "Long Distance Triathlon", beginner: "Beginner", intermediate: "Intermediate", advanced: "Advanced", week: "Week", phase: "Phase", base: "Base", build: "Build", peak: "Peak", taper: "Taper", recovery: "Recovery", rest_day: "Rest Day", long_run: "Long Run", tempo_run: "Tempo Run", interval_run: "Intervals", easy_run: "Easy Run", long_ride: "Long Ride", interval_ride: "Bike Intervals", easy_ride: "Easy Ride", brick_workout: "Brick Workout (Bike + Run)", tech_swim: "Swim Technique", endurance_swim: "Endurance Swim", months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], days_short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], error_past_date: "Please select a future date.", error_min_weeks: (weeks) => `At least ${weeks} weeks are needed for an effective plan.`, workout_for_today: "Workout for Today", warmup: "Warm-up", main_set: "Main Set", cooldown: "Cool-down", rpe_explanation: "Note: RPE (Rate of Perceived Exertion) is a scale from 1 (very easy) to 10 (maximum effort) to measure how hard you feel you are working.", recovery_session: "Recovery Session", high_fatigue_warning: "High fatigue. A very light session or rest is recommended.", long_run_quality_session: "Quality Long Run", interval_session_short: "Short Interval Session", interval_session_long: "Long Interval Session", hill_session: "Hill Session", fartlek_session: "Fartlek Session (Pace Changes)", tempo_session: "Tempo Session", progressive_run_session: "Progressive Run", pace_per_km: "pace/km", strength_training: "Strength Training", walk_run_session: "Walk-Run Session", walking: "walking", strength_a: "Strength (A): 3x10 Goblet Squat, 3x12 Lunges, 3x10 Bench Press, 3x12 DB Row, 3x45s Plank.", strength_b: "Strength (B): 3x10 Romanian Deadlift, 3x12 Glute Bridge, 3x10 Military Press, 3xMax Pull-ups, 3x45s Side Plank.", strength_c: "Strength (C): 5x5 Back Squat, 3x8 Single Leg RDL, 3x8 Incline Press, 3x10 Seated Row.", strength_d: "Strength (D): 5x5 Conventional Deadlift, 3x8 Bulgarian Split Squat, 5x5 Military Press, 3x10 Pendlay Row.", strength_maintenance: "Maintenance: 2x15 Box Jumps, 2x15 Kettlebell Swings, 2x15 Med Ball Slams, 2x15 Plyo Push-ups."
        },
        fr: {
            landing_h1: "Entraîneur Personnel IA", landing_h2: "Votre Réussite, Notre Intelligence", landing_p: "Libérez votre plein potentiel avec un plan d'entraînement intelligent et personnalisé par l'IA. Sans frais, sans inscription.", start_now_cta: "Commencer Maintenant", why_us_h2: "Pourquoi Entrena.ai? Nos Avantages Clés", feature1_h3: "Plans 100% Personnalisés", feature1_p: "Nous adaptons chaque entraînement à votre niveau et objectif. Votre plan de marathon ou triathlon, sur mesure par l'IA.", feature2_h3: "Intelligence Artificielle Avancée", feature2_p: "Notre coach IA apprend de vous, ajustant dynamiquement votre plan pour maximiser les résultats et éviter les blessures.", feature3_h3: "Entraîneur de Triathlon et Course", feature3_p: "D'une course de 10 km à un triathlon longue distance (Ironman), notre coach IA couvre toutes vos ambitions.", feature4_h3: "Flexibilité Totale", feature4_p: "Modifiez vos sessions quotidiennes en fonction de votre fatigue et disponibilité, sans compromettre votre objectif final.", feature5_h3: "Suivi Détaillé", feature5_p: "Surveillez vos performances et visualisez votre évolution. Votre entraîneur personnel dans votre poche pour analyser vos progrès.", feature6_h3: "Accès Immédiat et Gratuit", feature6_p: "Commencez à vous entraîner en quelques secondes. Sans barrières, sans frais. Votre entraîneur personnel IA gratuit, pour toujours.", footer_text: "© 2025 Entrena.ai - Votre entraîneur personnel IA gratuit. Tous droits réservés.", footer_contact: "Questions ou suggestions? <a href='mailto:info@entrena-ai.com' class='underline hover:text-amber-300'>Contactez-nous</a>", start_now_btn: "Commencer", app_title: "Entraîneur Personnel IA", app_subtitle: "Votre partenaire intelligent pour atteindre vos objectifs de triathlon et de marathon.", plan_long_term_title: "Planifier un objectif à long terme", plan_long_term_desc: "Définissez votre course et votre date cible. L'IA créera votre plan d'entraînement complet.", plan_today_title: "Planifier un entraînement pour aujourd'hui", plan_today_desc: "Obtenez une session personnalisée en fonction de votre état actuel et de votre disponibilité.", long_term_planner_title: "Plan d'Objectif à Long Terme", goal_type_label: "1. Choisissez votre objectif", level_label: "2. Choisissez votre niveau:", goal_date_label: "3. Sélectionnez la date de la course", time_goal_label: "4. Définir un Objectif de Temps (Optionnel)", generate_plan: "Générer le Plan", today_planner_title: "Entraînement du Jour", fatigue_label: "Fatigue actuelle:", discipline_label: "Discipline", effort_label: "Niveau d'effort:", duration_label: "Durée (minutes)", generate_workout: "Générer l'Entraînement", back: "Retour", download_pdf: "Télécharger PDF", your_training_plan: "Votre Plan d'Entraînement", running: "Course à pied", cycling: "Vélo", swimming: "Natation", race_10k: "Course 10 Km", half_marathon: "Semi-Marathon", marathon: "Marathon", tri_sprint: "Triathlon Sprint", tri_olympic: "Triathlon Olympique", tri_md: "Triathlon Moyenne Distance", tri_ld: "Triathlon Longue Distance", beginner: "Débutant", intermediate: "Intermédiaire", advanced: "Avancé", week: "Semaine", phase: "Phase", base: "Base", build: "Construction", peak: "Pic", taper: "Affûtage", recovery: "Récupération", rest_day: "Jour de Repos", long_run: "Sortie Longue", tempo_run: "Course au Seuil (Tempo)", interval_run: "Fractionné (Intervalles)", easy_run: "Course Lente", long_ride: "Sortie Longue Vélo", interval_ride: "Fractionné Vélo", easy_ride: "Sortie Vélo Tranquille", brick_workout: "Enchaînement (Vélo + Course)", tech_swim: "Technique de Nage", endurance_swim: "Endurance Natation", months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"], days_short: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"], error_past_date: "Veuillez sélectionner une date future.", error_min_weeks: (weeks) => `Un minimum de ${weeks} semaines est nécessaire pour un plan eficaz.`, workout_for_today: "Entraînement du Jour", warmup: "Échauffement", main_set: "Corps de Séance", cooldown: "Retour au Calme", rpe_explanation: "Note : Le RPE (Échelle de Perception de l'Effort) est une échelle de 1 (très facile) à 10 (effort maximal) pour mesurer l'intensité ressentie.", recovery_session: "Session de Récupération", high_fatigue_warning: "Fatigue élevée. Une session très légère ou du repos est recommandé.", long_run_quality_session: "Sortie Longue de Qualité", interval_session_short: "Session d'Intervalles Courts", interval_session_long: "Session d'Intervalles Longs", hill_session: "Session en Côte", fartlek_session: "Session de Fartlek (Changements d'Allure)", tempo_session: "Session au Seuil (Tempo)", progressive_run_session: "Course Progressive", pace_per_km: "allure/km", strength_training: "Musculation", walk_run_session: "Session Marche-Course", walking: "en marchant", strength_a: "Musculation (A): 3x10 Goblet Squat, 3x12 Fentes, 3x10 Développé couché, 3x12 Rowing haltère, 3x45s Planche.", strength_b: "Musculation (B): 3x10 Soulevé de terre roumain, 3x12 Pont fessier, 3x10 Développé militaire, 3xMax Tractions, 3x45s Planche latérale.", strength_c: "Musculation (C): 5x5 Squat arrière, 3x8 Soulevé de terre unipodal, 3x8 Développé incliné, 3x10 Rowing assis.", strength_d: "Musculation (D): 5x5 Soulevé de terre conventionnel, 3x8 Fente bulgare, 5x5 Développé militaire, 3x10 Rowing Pendlay.", strength_maintenance: "Maintien: 2x15 Sauts sur boîte, 2x15 Kettlebell Swing, 2x15 Lancer de Medecine Ball, 2x15 Pompes pliométriques."
        }
    };

    let currentLang = 'es';
    let currentDate = new Date();
    let selectedDate = null;
    
    function navigateTo(viewId) {
        history.pushState({ view: viewId }, '', `#${viewId}`);
        allViews.forEach(v => {
            if (v) v.classList.toggle('hidden', v.id !== viewId);
        });
    }
    
    window.addEventListener('popstate', (event) => {
        const targetView = (event.state && event.state.view) ? event.state.view : 'main-menu';
        navigateTo(targetView);
    });
    
    function updateTexts() {
        const langDict = translations[currentLang] || translations.es;
        document.querySelectorAll('[data-lang]').forEach(el => {
            const key = el.dataset.lang;
            if(langDict[key] && typeof langDict[key] === 'string') {
                el.innerHTML = langDict[key];
            }
        });
        
        const goalOptions = { race_10k: langDict.race_10k, 'half-marathon': langDict.half_marathon, marathon: langDict.marathon, 'tri-sprint': langDict.tri_sprint, 'tri-olympic': langDict.tri_olympic, 'tri-md': langDict.tri_md, 'tri-ld': langDict.tri_ld };
        const disciplineOptions = { run: langDict.running, bike: langDict.cycling, swim: langDict.swimming };
        
        const goalSelect = document.getElementById('goal-type');
        if (goalSelect) {
            goalSelect.innerHTML = '';
            for(const [value, text] of Object.entries(goalOptions)) {
                goalSelect.innerHTML += `<option value="${value}">${text}</option>`;
            }
        }

        const disciplineSelect = document.getElementById('discipline-select');
        if(disciplineSelect) {
            disciplineSelect.innerHTML = '';
            for(const [value, text] of Object.entries(disciplineOptions)) {
                disciplineSelect.innerHTML += `<option value="${value}">${text}</option>`;
            }
        }
        
        updateLevelSliderText();
        renderCalendar();
    }

    function updateLevelSliderText() {
        const levelSlider = document.getElementById('level-slider');
        const levelValueText = document.getElementById('level-value-text');
        if(!levelSlider || !levelValueText) return;
        const levelMap = ['beginner', 'intermediate', 'advanced'];
        levelValueText.textContent = (translations[currentLang] || translations.es)[levelMap[levelSlider.value]];
    }

    function renderCalendar() {
        const monthYearEl = document.getElementById('month-year');
        const calendarDaysEl = document.getElementById('calendar-days');
        if (!monthYearEl || !calendarDaysEl) return;
        
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();
        const langDict = translations[currentLang] || translations.es;

        monthYearEl.textContent = `${langDict.months[month]} ${year}`;
        calendarDaysEl.innerHTML = '';
        
        langDict.days_short.forEach(day => {
            const dayEl = document.createElement('div');
            dayEl.textContent = day;
            dayEl.className = 'font-bold text-sm text-blue-300';
            calendarDaysEl.appendChild(dayEl);
        });

        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        for (let i = 0; i < firstDayOfMonth; i++) calendarDaysEl.appendChild(document.createElement('div'));
        
        for (let i = 1; i <= daysInMonth; i++) {
            const dayEl = document.createElement('div');
            dayEl.textContent = i;
            dayEl.className = 'p-2 cursor-pointer rounded-full hover:bg-blue-800 calendar-day';
            const dayDate = new Date(year, month, i);

            if (dayDate < new Date().setHours(0, 0, 0, 0)) {
                dayEl.classList.add('text-gray-500', 'cursor-not-allowed');
            } else {
                dayEl.addEventListener('click', () => {
                    document.querySelectorAll('.calendar-day.selected').forEach(d => d.classList.remove('selected'));
                    selectedDate = dayDate;
                    dayEl.classList.add('selected');
                });
            }
            if (selectedDate && selectedDate.getTime() === dayDate.getTime()) dayEl.classList.add('selected');
            calendarDaysEl.appendChild(dayEl);
        }
    }
    
    function generateTodayWorkout(fatigue, discipline, effort, duration) {
        const langDict = translations[currentLang] || translations.es;
        let workout = { title: '', description: '', warmup: '', mainSet: '', cooldown: '' };
        if (fatigue >= 8) {
            workout.title = langDict.recovery_session;
            workout.description = langDict.high_fatigue_warning;
            workout.warmup = "5-10 min";
            workout.mainSet = `${Math.max(15, duration - 15)} min (RPE 2-3).`;
            workout.cooldown = "5 min";
            return workout;
        }
        const warmupTime = Math.max(10, Math.floor(duration * 0.20));
        const cooldownTime = Math.max(5, Math.floor(duration * 0.15));
        let mainSetTime = duration - warmupTime - cooldownTime;
        workout.warmup = `${warmupTime} min. (RPE 2-4)`;
        workout.cooldown = `${cooldownTime} min. (RPE 2-3)`;
        switch (discipline) {
            case 'swim':
                const swimPaceFactor = 1.5 + (effort * 0.2);
                const estimatedMeters = Math.round((duration / swimPaceFactor) * 100 / 50) * 50;
                const wuMeters = Math.round(estimatedMeters * 0.20 / 50) * 50;
                const cdMeters = Math.round(estimatedMeters * 0.15 / 50) * 50;
                const mainSetMeters = estimatedMeters - wuMeters - cdMeters;
                workout.title = `${langDict.swimming}: ${estimatedMeters}m`;
                workout.warmup = `${wuMeters}m suave (crol, espalda, técnica)`;
                workout.cooldown = `${cdMeters}m muy suave, variado`;
                if (effort <= 4) {
                    workout.mainSet = `${langDict.tech_swim}: ${mainSetMeters}m. <br> - 4x50m (25m pies / 25m crol) rec. 20s <br> - 4x50m (25m punto muerto / 25m crol) rec. 20s. <br> - Resto: Crol suave con Pull-buoy.`;
                } else if (effort <= 7) {
                    const reps = Math.floor(mainSetMeters / 250);
                    workout.mainSet = `${langDict.endurance_swim}: Pirámide. 50-100-150-100-50m (RPE 6-7) rec. 30s entre cada una. Repetir ${reps} veces.`;
                } else {
                    const reps = Math.floor(mainSetMeters / 150);
                    workout.mainSet = `${langDict.interval_run}: ${reps} x 100m (RPE 8-9) rec. 45s. <br> Tras cada serie, 50m suave.`;
                }
                break;
            case 'run':
                if (effort <= 3) {
                    workout.title = langDict.recovery_session;
                    workout.mainSet = `${mainSetTime} min (RPE 3-4).`;
                } else if (effort <= 5) {
                    workout.title = langDict.fartlek_session;
                    workout.mainSet = `${mainSetTime} min. alternando 5 min (RPE 5) con 2 min (RPE 6-7).`;
                } else if (effort <= 8) {
                    workout.title = langDict.hill_session;
                    const reps = Math.floor(mainSetTime / 5);
                    workout.mainSet = `Encontrar una cuesta (5-8% incl.). ${reps} x 90s subiendo a (RPE 8), bajada al trote como recuperación.`;
                } else {
                    workout.title = langDict.interval_session_short;
                    const reps = Math.max(6, Math.floor(mainSetTime / 4));
                    workout.mainSet = `${reps} x 400m (RPE 9) rec. 90s trote.`;
                }
                break;
            case 'bike':
                if (effort <= 4) {
                    workout.title = langDict.easy_ride;
                    workout.mainSet = `${mainSetTime} min (RPE 4-5) con alta cadencia (90-100rpm).`;
                } else if (effort <= 7) {
                    workout.title = langDict.tempo_session;
                    const blocks = Math.floor(mainSetTime / 15);
                    workout.mainSet = `${blocks} x 10 min (RPE 7), rec. 5 min (RPE 3).`;
                } else {
                    workout.title = langDict.interval_ride;
                    const blocks = Math.floor(mainSetTime / 8);
                    workout.mainSet = `${blocks} x 3 min (RPE 9) con alta cadencia (100-110rpm), rec. 5 min (RPE 3).`;
                }
                break;
        }
        return workout;
    }

    function calculatePaces(goalType, timeGoal) {
        const distances = { 'race_10k': 10, 'half-marathon': 21.097, 'marathon': 42.195 };
        if (!timeGoal || !distances[goalType]) return null;
        const totalSeconds = (timeGoal.hours * 3600) + (timeGoal.minutes * 60) + timeGoal.seconds;
        if (totalSeconds === 0) return null;
        const secondsPerKm = totalSeconds / distances[goalType];
        const formatPace = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
        return { racePace: formatPace(secondsPerKm), easyPace: formatPace(secondsPerKm + 75), tempoPace: formatPace(secondsPerKm + 20), intervalPace: formatPace(secondsPerKm - 15) };
    }

    function getStrengthWorkout(weekNum, weekPercent, langDict) {
        if (weekPercent < 0.6) { 
            return weekNum % 2 === 1 ? langDict.strength_a : langDict.strength_b;
        } else if (weekPercent < 0.85) {
            return weekNum % 2 === 1 ? langDict.strength_c : langDict.strength_d;
        } else {
            return langDict.strength_maintenance;
        }
    }

    function getDetailedWorkout(weekNum, totalWeeks, dayIndex, goalType, level, langDict, paces) {
        const levels = { beginner: 0, intermediate: 1, advanced: 2 };
        const l = levels[level];
        const isTri = goalType.includes('tri');
        const weekPercent = weekNum / totalWeeks;
        const getPaceText = (type) => paces ? `(~${paces[type]} ${langDict.pace_per_km})` : ``;
        const wu = (mins) => `${langDict.warmup}: ${mins}min ${langDict.easy_run} ${getPaceText('easyPace')}`;
        const cd = (mins) => `${langDict.cooldown}: ${mins}min ${langDict.easy_run} ${getPaceText('easyPace')}`;
        if (l === 0) {
            if (dayIndex === 1 || dayIndex === 5) return getStrengthWorkout(weekNum, weekPercent, langDict);
            if (dayIndex === 3) {
                const runInterval = 5 + Math.floor(weekPercent * 5);
                return `${langDict.walk_run_session}: 40 min - ${runInterval}min ${langDict.running} / 2min ${langDict.walking}.`;
            }
            if (dayIndex === 6) { return `${langDict.long_run}: ${45 + Math.floor(weekPercent * 60)} min continuos.`; }
            return langDict.rest_day;
        }
        const workoutType = {
            0: isTri ? 'easy_ride' : 'rest_day', 1: 'strength', 2: 'quality1',
            3: 'easy_run', 4: 'quality2', 5: 'strength', 6: 'long_run_brick'
        }[dayIndex];
        switch(workoutType) {
            case 'strength':
                return getStrengthWorkout(weekNum, weekPercent, langDict);
            case 'quality1':
                const q1Rotation = weekNum % 3;
                if (isTri) { 
                    const totalMeters = 1800 + Math.floor(weekPercent * 1200);
                    if (q1Rotation === 1) return `${langDict.interval_run} (natación): ${totalMeters}m. Principal: ${8 + Math.floor(weekPercent * 8)}x100m (RPE 8-9) rec 45s.`;
                    if (q1Rotation === 2) return `${langDict.tech_swim}: ${totalMeters}m. Principal: 4x(200m crol + 100m técnica) rec 30s.`;
                    return `${langDict.endurance_swim}: ${totalMeters}m. Principal: 3x500m (RPE 7) rec 60s.`;
                } else {
                    if (q1Rotation === 1) return `${wu(15)}. ${langDict.interval_session_short}: ${6 + Math.floor(weekPercent * 6)} x 400m ${getPaceText('intervalPace')} (rec: 90s trote). ${cd(10)}`;
                    if (q1Rotation === 2) return `${wu(15)}. ${langDict.hill_session}: ${6 + Math.floor(weekPercent * 4)} x 3min en cuesta (RPE 8-9). ${cd(10)}`;
                    return `${wu(15)}. ${langDict.interval_session_long}: ${3 + Math.floor(weekPercent * 3)} x 1000m a ritmo 10k (rec 400m trote). ${cd(10)}`;
                }
            case 'quality2':
                if (isTri) {
                    const bikeDur = 60 + Math.floor(weekPercent * 45);
                    const tempoBlocks = 2 + Math.floor(weekPercent * 2);
                    return `${langDict.tempo_session} (bici): ${bikeDur} min. Principal: ${tempoBlocks}x${10 + Math.floor(l/2)*5}min (RPE 8) rec 5min.`;
                } else {
                     const q2Rotation = weekNum % 3;
                     if (q2Rotation === 1) return `${wu(15)}. ${langDict.tempo_session}: ${20 + Math.floor(weekPercent * 25)} min continuos ${getPaceText('tempoPace')}. ${cd(10)}`;
                     if (q2Rotation === 2) return `${wu(15)}. ${langDict.fartlek_session}: ${40 + Math.floor(weekPercent * 20)} min (2 min rápido / 2 min suave). ${cd(10)}`;
                     return `${wu(15)}. ${langDict.progressive_run_session}: ${50 + Math.floor(weekPercent * 20)} min, empezando suave y terminando rápido. ${cd(10)}`;
                }
            case 'long_run_brick':
                const longRotation = weekNum % 4;
                if (isTri) {
                     const baseBike = { 'tri-sprint': 45, 'tri-olympic': 60, 'tri-md': 90, 'tri-ld': 120 };
                     const peakBike = { 'tri-sprint': 90, 'tri-olympic': 140, 'tri-md': 200, 'tri-ld': 260 };
                     const bikeTime = Math.round(baseBike[goalType] + (peakBike[goalType] - baseBike[goalType]) * weekPercent);
                     const runKm = Math.round( (baseBike[goalType]/10) + weekPercent * 10);
                     return `${langDict.brick_workout}: ${bikeTime} min Bici (RPE 5-6) + ${runKm} km Carrera (RPE 6-7).`;
                } else {
                    const baseKm = { 'race_10k': 8, 'half-marathon': 12, 'marathon': 16 };
                    const peakKm = { 'race_10k': 16, 'half-marathon': 25, 'marathon': 38 };
                    let runDist = Math.round(baseKm[goalType] + (peakKm[goalType] - baseKm[goalType]) * weekPercent);
                    if (longRotation === 2 && weekPercent > 0.3) {
                        return `${langDict.long_run_quality_session}: ${runDist}km, últimos ${Math.max(2, Math.floor(runDist/4))}km a ritmo de carrera.`;
                    }
                    return `${langDict.long_run}: ${runDist}km ${getPaceText('easyPace')}`;
                }
            case 'easy_run':
                if(isTri) return `${langDict.easy_run}: ${40 + Math.floor(weekPercent * 20)} min`;
                return `${langDict.easy_run}: ${45 + Math.floor(weekPercent * 15)} min`;
            case 'easy_ride':
                return `${langDict.easy_ride}: ${60 + Math.floor(weekPercent * 60)} min`;
            case 'rest_day': return langDict.rest_day;
        }
        return langDict.rest_day;
    }

    function generateLongTermPlan(goalType, level, targetDate, timeGoal) {
        const langDict = translations[currentLang] || translations.es;
        const today = new Date();
        const weeksUntil = Math.floor((targetDate - today) / (1000 * 60 * 60 * 24 * 7));
        const minWeeks = { 'race_10k': 8, 'half-marathon': 10, 'marathon': 16, 'tri-sprint': 8, 'tri-olympic': 12, 'tri-md': 16, 'tri-ld': 20 };
        if (weeksUntil < minWeeks[goalType]) {
            alert(langDict.error_min_weeks(minWeeks[goalType]));
            return null;
        }
        const paces = calculatePaces(goalType, timeGoal);
        let plan = [];
        const taperWeeks = (goalType === 'marathon' || goalType === 'tri-ld') ? 3 : 2;
        for (let i = 0; i < weeksUntil; i++) {
            const weekNum = i + 1;
            const weekNumFromEnd = weeksUntil - i;
            let phase;
            if (weekNumFromEnd <= taperWeeks) phase = langDict.taper;
            else if (weekNum / weeksUntil > 0.65) phase = langDict.peak;
            else if (weekNum / weeksUntil > 0.2) phase = langDict.build;
            else phase = langDict.base;
            let weeklyWorkouts = {};
            for (let day = 0; day < 7; day++) {
                const dayName = langDict.days_short[day];
                if (phase === langDict.taper) {
                    const taperFactor = Math.max(0.4, (weekNumFromEnd - 1) / taperWeeks);
                    let workout = getDetailedWorkout(weekNum, weeksUntil, day, goalType, level, langDict, paces);
                    if(workout.startsWith(langDict.strength_training)) {
                        weeklyWorkouts[dayName] = day === 1 ? langDict.strength_maintenance : langDict.rest_day;
                    } else if (workout !== langDict.rest_day) {
                        weeklyWorkouts[dayName] = `${langDict.taper}: ${workout.split('.')[0]}. Volumen Reducido (~${Math.round(taperFactor*100)}%). Mantener intensidad.`;
                    } else {
                        weeklyWorkouts[dayName] = workout;
                    }
                } else {
                    weeklyWorkouts[dayName] = getDetailedWorkout(weekNum, weeksUntil, day, goalType, level, langDict, paces);
                }
            }
            plan.push({ week: weekNum, phase, workouts: weeklyWorkouts });
        }
        return plan;
    }

    function displayWorkout(workout) {
        const langDict = translations[currentLang] || translations.es;
        document.getElementById('plan-title').textContent = workout.title;
        document.getElementById('plan-content').innerHTML = `
            ${workout.description ? `<p class="mb-4 text-amber-300">${workout.description}</p>` : ''}
            <div class="space-y-4">
                <div><h3 class="text-xl font-semibold text-amber-400">${langDict.warmup}</h3><p>${workout.warmup}</p></div>
                <div><h3 class="text-xl font-semibold text-amber-400">${langDict.main_set}</h3><p>${workout.mainSet}</p></div>
                <div><h3 class="text-xl font-semibold text-amber-400">${langDict.cooldown}</h3><p>${workout.cooldown}</p></div>
            </div>
            <div class="mt-6 pt-4 border-t border-blue-700/50"><p class="text-sm text-blue-300">${langDict.rpe_explanation}</p></div>
        `;
        navigateTo('plan-display');
    }

    function displayLongTermPlan(plan) {
        const langDict = translations[currentLang] || translations.es;
        document.getElementById('plan-title').textContent = langDict.your_training_plan;
        let html = '<div class="space-y-6">';
        plan.forEach(week => {
            html += `<div class="p-4 rounded-lg bg-blue-900/40"><div class="flex justify-between items-baseline mb-3"><h3 class="text-xl font-semibold text-amber-400">${langDict.week} ${week.week}</h3><span class="text-sm font-medium bg-amber-500/20 text-amber-300 px-2 py-1 rounded">${week.phase}</span></div><ul class="space-y-2 text-sm">`;
            const orderedDays = [langDict.days_short[1], langDict.days_short[2], langDict.days_short[3], langDict.days_short[4], langDict.days_short[5], langDict.days_short[6], langDict.days_short[0]];
            orderedDays.forEach(day => {
                const workout = week.workouts[day] || langDict.rest_day;
                html += `<li class="flex border-b border-blue-800/50 py-2"><strong class="w-12 flex-shrink-0">${day}:</strong><span>${workout}</span></li>`;
            });
            html += `</ul></div>`;
        });
        html += '</div>';
        document.getElementById('plan-content').innerHTML = html;
        navigateTo('plan-display');
    }
    
    document.getElementById('plan-long-term-card')?.addEventListener('click', () => navigateTo('long-term-planner'));
    document.getElementById('plan-today-card')?.addEventListener('click', () => navigateTo('today-planner'));
    
    ['back-btn', 'back-to-main-lt', 'back-to-main-tp'].forEach(id => {
        const btn = document.getElementById(id);
        if(btn) btn.addEventListener('click', () => history.back());
    });
    
    document.getElementById('prev-month')?.addEventListener('click', () => { currentDate.setMonth(currentDate.getMonth() - 1); renderCalendar(); });
    document.getElementById('next-month')?.addEventListener('click', () => { currentDate.setMonth(currentDate.getMonth() + 1); renderCalendar(); });
    
    document.getElementById('fatigue-slider')?.addEventListener('input', (e) => { document.getElementById('fatigue-value').textContent = e.target.value; });
    document.getElementById('effort-slider')?.addEventListener('input', (e) => { document.getElementById('effort-value').textContent = e.target.value; });
    document.getElementById('level-slider')?.addEventListener('input', updateLevelSliderText);
    
    document.getElementById('goal-type')?.addEventListener('change', (e) => {
        document.getElementById('time-goal-container').classList.toggle('hidden', !['race_10k', 'half-marathon', 'marathon'].includes(e.target.value));
    });

    document.getElementById('generate-today-plan-btn')?.addEventListener('click', () => {
        loadingOverlay.classList.remove('hidden');
        setTimeout(() => {
            const fatigue = parseInt(document.getElementById('fatigue-slider').value, 10);
            const discipline = document.getElementById('discipline-select').value;
            const effort = parseInt(document.getElementById('effort-slider').value, 10);
            const duration = parseInt(document.getElementById('duration-input').value, 10);
            const workout = generateTodayWorkout(fatigue, discipline, effort, duration);
            displayWorkout(workout);
            loadingOverlay.classList.add('hidden');
        }, 500);
    });

    document.getElementById('generate-long-term-plan-btn')?.addEventListener('click', () => {
        if (!selectedDate || selectedDate < new Date().setHours(0,0,0,0)) {
            alert((translations[currentLang] || translations.es).error_past_date);
            return;
        }
        loadingOverlay.classList.remove('hidden');
        setTimeout(() => {
            const goalType = document.getElementById('goal-type').value;
            const level = ['beginner', 'intermediate', 'advanced'][document.getElementById('level-slider').value];
            let timeGoal = null;
            const h = parseInt(document.getElementById('goal-hours').value, 10) || 0;
            const m = parseInt(document.getElementById('goal-minutes').value, 10) || 0;
            const s = parseInt(document.getElementById('goal-seconds').value, 10) || 0;
            if(h > 0 || m > 0 || s > 0) timeGoal = { hours: h, minutes: m, seconds: s };
            
            const plan = generateLongTermPlan(goalType, level, selectedDate, timeGoal);
            if (plan) displayLongTermPlan(plan);
            loadingOverlay.classList.add('hidden');
        }, 1000);
    });

    document.getElementById('download-pdf-btn')?.addEventListener('click', async () => {
        const { jsPDF } = window.jspdf;
        const contentEl = document.getElementById('plan-content');
        const planTitle = document.getElementById('plan-title').textContent;
        loadingOverlay.classList.remove('hidden');
        
        const originalMaxHeight = contentEl.style.maxHeight;
        contentEl.style.maxHeight = 'none'; // Allow full content height for PDF
        
        try {
            const canvas = await html2canvas(contentEl, { scale: 2, backgroundColor: '#0f172a' });
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({ orientation: 'p', unit: 'px', format: [canvas.width, canvas.height] });
            pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
            pdf.save(`${planTitle.replace(/ /g, '_')}.pdf`);
        } catch (error) {
            console.error("Error generating PDF:", error);
            alert("Error al generar el PDF. Por favor, inténtalo de nuevo.");
        } finally {
            contentEl.style.maxHeight = originalMaxHeight; // Restore original height
            loadingOverlay.classList.add('hidden');
        }
    });

    function initApp() {
        const viewFromHash = window.location.hash.substring(1);
        const validViews = ['main-menu', 'long-term-planner', 'today-planner', 'plan-display'];
        if (validViews.includes(viewFromHash)) {
            navigateTo(viewFromHash);
        } else {
            navigateTo('main-menu');
        }
        updateTexts();
    }
    
    initApp();
});
