const weekData = {
    maandag: {
        naam: "Maandag",
        maaltijden: [
            {tijd: "08:30", label: "Ontbijt", detail: "Crackers / Pannenkoeken", drink: "Water / Melk"},
            {tijd: "10:30", label: "Tussendoortje", detail: "Smoothie (Banaan/Aardbei)", drink: "Water"},
            {tijd: "12:30", label: "Lunch", detail: "Crackers / Broodjes", drink: "Water / Ranja"},
            {tijd: "15:30", label: "Tussendoortje", detail: "Banaan, Appel, Yoghurt", drink: "Water / Cola Zero"},
            {tijd: "18:00", label: "Avondeten", detail: "Pannenkoek Kaas/Spek", drink: "Water", papaMama: "nasi/curry"},
            {tijd: "20:30", label: "Snack", detail: "Yoghurt / Cracker", drink: "1 Gl. Cola Zero"}
        ]
    },
    dinsdag: {
        naam: "Dinsdag",
        papaMama: "P/M: Aardappels, vlees",
        maaltijden: [
            {tijd: "07:30", label: "Ontbijt", detail: "Crackers / Pannenkoeken", drink: "Water / Melk"},
            {tijd: "10:30", label: "Tussendoortje", detail: "Smoothie (Banaan/Aardbei)", drink: "Water"},
            {tijd: "12:30", label: "Lunch", detail: "Crackers / Broodjes", drink: "Water / Ranja"},
            {tijd: "15:30", label: "Tussendoortje", detail: "Banaan, Appel, Yoghurt", drink: "Water / Cola Zero"},
            {tijd: "18:00", label: "Avondeten", detail: "Friet met Schnitzel", drink: "Water"},
            {tijd: "20:30", label: "Snack", detail: "Yoghurt / Cracker", drink: "1 Gl. Cola Zero"}
        ]
    },
    woensdag: {
        naam: "Woensdag",
        papaMama: "P/M: Ovenschotel",
        maaltijden: [
            {tijd: "08:30", label: "Ontbijt", detail: "Crackers / Pannenkoeken", drink: "Water / Melk"},
            {tijd: "10:30", label: "Tussendoortje", detail: "Smoothie (Banaan/Aardbei)", drink: "Water"},
            {tijd: "12:30", label: "Lunch", detail: "Crackers/Broodjes + ALDI", drink: "Water / Ranja"},
            {tijd: "15:30", label: "Tussendoortje", detail: "Banaan, Appel, Yoghurt", drink: "Water / Cola Zero"},
            {tijd: "18:00", label: "Avondeten", detail: "Pizza", drink: "Water"},
            {tijd: "20:30", label: "Snack", detail: "Yoghurt / Cracker", drink: "1 Gl. Cola Zero"}
        ]
    },
    donderdag: {
        naam: "Donderdag",
        papaMama: "P/M: Lasagne / Pasta",
        maaltijden: [
            {tijd: "07:30", label: "Ontbijt", detail: "Crackers / Pannenkoeken", drink: "Water / Melk"},
            {tijd: "10:30", label: "Tussendoortje", detail: "Smoothie (Banaan/Aardbei)", drink: "Water"},
            {tijd: "12:30", label: "Lunch", detail: "Crackers / Broodjes", drink: "Water / Ranja"},
            {tijd: "15:30", label: "Tussendoortje", detail: "Banaan, Appel, Yoghurt", drink: "Water / Cola Zero"},
            {tijd: "18:00", label: "Avondeten", detail: "Pannenkoek kaas/spek", drink: "Water", papaMama: "Lasagne / Pasta"},
            {tijd: "20:30", label: "Snack", detail: "Yoghurt / Cracker", drink: "1 Gl. Cola Zero"}
        ]
    },
    vrijdag: {
        naam: "Vrijdag",
        papaMama: "P/M: Friet",
        maaltijden: [
            {tijd: "08:30", label: "Ontbijt", detail: "Crackers / Pannenkoeken", drink: "Water / Melk"},
            {tijd: "10:30", label: "Tussendoortje", detail: "Smoothie (Banaan/Aardbei)", drink: "Water"},
            {tijd: "12:30", label: "Lunch", detail: "Crackers/Broodjes + ALDI", drink: "Water / Ranja"},
            {tijd: "15:30", label: "Tussendoortje", detail: "Banaan, Appel, Yoghurt", drink: "Water / Cola Zero"},
            {tijd: "18:00", label: "Avondeten", detail: "Friet met Snack", drink: "Water"},
            {tijd: "20:30", label: "Snack", detail: "Yoghurt / Cracker", drink: "1 Gl. Cola Zero"}
        ]
    },
    zaterdag: {
        naam: "Zaterdag",
        papaMama: "P/M: Pizza",
        maaltijden: [
            {tijd: "10:00", label: "Ontbijt", detail: "Crackers / Pannenkoeken", drink: "Water / Melk"},
            {tijd: "11:00", label: "Tussendoortje", detail: "Smoothie (Banaan/Aardbei)", drink: "Water"},
            {tijd: "13:00", label: "Lunch", detail: "Crackers / Broodjes", drink: "Water / Ranja"},
            {tijd: "15:30", label: "Tussendoortje", detail: "Banaan, Appel, Yoghurt", drink: "Water / Cola Zero"},
            {tijd: "18:00", label: "Avondeten", detail: "Pizza", drink: "Water"},
            {tijd: "20:30", label: "Snack", detail: "Yoghurt / Cracker", drink: "1 Gl. Cola Zero"}
        ]
    },
    zondag: {
        naam: "Zondag",
        papaMama: "P/M: Wraps",
        maaltijden: [
            {tijd: "10:00", label: "Ontbijt", detail: "Crackers / Pannenkoeken", drink: "Water / Melk"},
            {tijd: "11:00", label: "Tussendoortje", detail: "Smoothie (Banaan/Aardbei)", drink: "Water"},
            {tijd: "13:00", label: "Lunch", detail: "Crackers / Broodjes", drink: "Water / Ranja"},
            {tijd: "15:30", label: "Tussendoortje", detail: "Banaan, Appel, Yoghurt", drink: "Water / Cola Zero"},
            {tijd: "18:00", label: "Avondeten", detail: "Friet met Kibbeling", drink: "Water"},
            {tijd: "20:30", label: "Snack", detail: "Yoghurt / Cracker", drink: "1 Gl. Cola Zero"}
        ]
    }
};

const daysOrder = ['maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag', 'zondag'];
const daysMap = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
const dayNamesNL = {maandag: "Maandag", dinsdag: "Dinsdag", woensdag: "Woensdag", donderdag: "Donderdag", vrijdag: "Vrijdag", zaterdag: "Zaterdag", zondag: "Zondag"};

function parseMinutes(timeStr) {
    const [h, m] = timeStr.split(':').map(Number);
    return h * 60 + m;
}

function loadDashboard() {
    const now = new Date();
    const todayIndex = now.getDay();
    const dayKey = daysMap[todayIndex];
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const todayData = weekData[dayKey] || weekData['zondag'];

    document.getElementById('current-day-badge').innerText = `Vandaag: ${dayNamesNL[dayKey]}`;
    document.getElementById('today-name-label').innerText = todayData.naam;
    document.getElementById('today-pm-label').innerText = `(${todayData.papaMama})`;

    // Vandaag uitgelicht bovenin
    const todayContainer = document.getElementById('today-schedule');
    todayContainer.innerHTML = '';

    let activeIndex = -1;
    todayData.maaltijden.forEach((meal, idx) => {
        if (currentMinutes >= parseMinutes(meal.tijd) - 15 && currentMinutes < parseMinutes(meal.tijd) + 60) {
            activeIndex = idx;
        }
    });

    todayData.maaltijden.forEach((meal, idx) => {
        const block = document.createElement('div');
        block.className = 'meal-block' + (idx === activeIndex ? ' active-meal' : '');
        block.innerHTML = `
            <div class="meal-time-row">
                <span class="meal-time">${meal.tijd}</span>
                <span class="meal-sublabel">${meal.label}</span>
            </div>
            <div class="meal-detail">${meal.detail}</div>
            <div class="drink-block">🥤 ${meal.drink}</div>
            <div class="drink-block">🍽️ ${meal.papaMama}</div>
        `;
        todayContainer.appendChild(block);
    });

    // Volledige week raster onderin
    const weeklyContainer = document.getElementById('full-weekly-grid');
    weeklyContainer.innerHTML = '';

    daysOrder.forEach(dKey => {
        const dObj = weekData[dKey];
        const isCurrent = (dKey === dayKey);

        const mealsHtml = dObj.maaltijden.map(m => `
            <div class="wk-meal-row">
                <div class="wk-time-label">
                    <span class="wk-time">${m.tijd}</span>
                </div>
                <span class="wk-det">${m.detail}</span>
            </div>
        `).join('');

        const card = document.createElement('div');
        card.className = 'week-day-card' + (isCurrent ? ' current-day' : '');
        card.innerHTML = `
            <div>
                <div class="week-day-name">${dObj.naam}</div>
            </div>
            <div class="wk-meals-list">${mealsHtml}</div>
        `;
        weeklyContainer.appendChild(card);
    });
}

loadDashboard();
setInterval(loadDashboard, 60000);