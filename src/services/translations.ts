import { ES_AR } from "~/enums/languages";

const PROJECT_ID = 'ckvst73af950211n0cp8bm464u';
let translations = null;
let language = ES_AR;

function adaptTranslations(data) {
    let adaptees = {};
    data.words.forEach(w => {
        adaptees[w.key] = w.translate;
    });
    const json = JSON.stringify(adaptees);
    console.log(`ADAPTED TRANSLATIONS --- ${json}`);
    return json;
}

export async function getTranslations(lang = language) {
    localStorage.clear();
    language = lang;
    return await fetch(`https://traduci-la.herokuapp.com/rest/translation?project_id=${PROJECT_ID}&lang=${lang}`)
    .then(response => response.json())
    .then(data => {
        console.log(`FETCH TRANSLATIONS --- ${JSON.stringify(data)}`);
        localStorage.setItem('translations', adaptTranslations(data));
    });
}

export function getPhrase(key) {
    if (!translations) {
        const locals = localStorage.getItem('translations');
        translations = locals ? JSON.parse(locals) : null;
    }

    let phrase = key;
    if (translations && translations[key]) {
        phrase = translations[key];
    }

    return phrase;
}