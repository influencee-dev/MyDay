
import { Day, WorkoutDay, WeeklyData } from './types';

export const DAYS: Day[] = ['LUNEDÌ', 'MARTEDÌ', 'MERCOLEDÌ', 'GIOVEDÌ', 'VENERDÌ'];

export const WORKOUT_PLAN: Record<Day, WorkoutDay> = {
  'LUNEDÌ': {
    title: 'SCHIENA + CORE',
    exercises: [
      { id: 'l1', name: 'Ponte glutei', reps: '3×15', description: 'Solleva il bacino stringendo i glutei, addome attivo, pausa 1–2″ in alto.' },
      { id: 'l2', name: 'Ponte glutei monopodalico', reps: '3×10 per lato', description: 'Una gamba sollevata, bacino stabile, movimento lento e controllato.' },
      { id: 'l3', name: 'Rematore con elastico', reps: '3×15', description: 'Gomiti indietro, scapole che si avvicinano, spalle lontane dalle orecchie.' },
      { id: 'l4', name: 'Bird Dog', reps: '3×10 per lato', description: 'Braccio e gamba opposti, schiena neutra, core sempre contratto.' },
      { id: 'l5', name: 'Superman controllato', reps: '3×12', description: 'Solleva leggermente braccia e gambe, mantieni 1″ senza inarcare.' },
      { id: 'l6', name: 'Plank frontale', reps: '3×30–40″', description: 'Corpo in linea, addome e glutei contratti, respirazione regolare.' },
      { id: 'l7', name: 'Dead Bug', reps: '3×10 per lato', description: 'Estendi lentamente braccio e gamba opposti mantenendo la schiena a terra.' }
    ]
  },
  'MARTEDÌ': {
    title: 'ADDOMINALI COMPLETI',
    exercises: [
      { id: 'm1', name: 'Crunch lento', reps: '3×12', description: 'Solleva solo spalle e scapole, collo rilassato.' },
      { id: 'm2', name: 'Reverse crunch', reps: '3×12', description: 'Porta ginocchia al petto sollevando leggermente il bacino.' },
      { id: 'm3', name: 'Plank frontale', reps: '3×40″', description: 'Addome profondo attivo, niente inarcamenti.' },
      { id: 'm4', name: 'Plank laterale', reps: '3×25″ per lato', description: 'Bacino alto, corpo in linea, obliqui in tensione.' },
      { id: 'm5', name: 'Russian twist controllato', reps: '3×16 totali', description: 'Ruota il busto lentamente, piedi a terra se serve.' },
      { id: 'm6', name: 'Leg raise piegato', reps: '3×10', description: 'Ginocchia piegate, schiena sempre aderente al tappetino.' },
      { id: 'm7', name: 'Roll-up Pilates', reps: '3×8', description: 'Salita e discesa vertebra per vertebra, senza slancio.' }
    ]
  },
  'MERCOLEDÌ': {
    title: 'GAMBE + CORE',
    exercises: [
      { id: 'me1', name: 'Squat a corpo libero', reps: '3×12', description: 'Bacino indietro, ginocchia in linea con i piedi.' },
      { id: 'me2', name: 'Affondi frontali alternati', reps: '3×10 per gamba', description: 'Busto eretto, spinta dal gluteo in risalita.' },
      { id: 'me3', name: 'Ponte glutei con elastico', reps: '3×15', description: 'Elastico sopra le ginocchia, spingi leggermente verso l’esterno.' },
      { id: 'me4', name: 'Side leg lift (sdraiato su fianco)', reps: '3×12 per lato', description: 'Gamba tesa, movimento corto e controllato.' },
      { id: 'me5', name: 'Wall sit', reps: '3×30–40″', description: 'Schiena al muro, ginocchia a 90°, addome attivo.' },
      { id: 'me6', name: 'Plank con sollevamento gamba', reps: '3×10 totali', description: 'Alterna le gambe mantenendo il bacino stabile.' },
      { id: 'me7', name: 'Dead bug lento', reps: '3×8 per lato', description: 'Versione controllata, perfetta per core e lombari.' }
    ]
  },
  'GIOVEDÌ': {
    title: 'SCHIENA ALTA + SPALLE + CORE',
    exercises: [
      { id: 'g1', name: 'Alzate laterali con elastico', reps: '3×12', description: 'Braccia fino all’altezza delle spalle, controllo totale.' },
      { id: 'g2', name: 'Rematore con elastico', reps: '3×15', description: 'Rinforzo dorsali e postura da scrivania.' },
      { id: 'g3', name: 'Aperture con bastone dietro la schiena', reps: '3×12', description: 'Apri il petto, scapole che si avvicinano.' },
      { id: 'g4', name: 'Face pull con elastico', reps: '3×15', description: 'Tira l’elastico verso il viso, gomiti larghi.' },
      { id: 'g5', name: 'Plank con tocco spalla', reps: '3×20 tocchi', description: 'Alterna le mani sulle spalle senza oscillare.' },
      { id: 'g6', name: 'Bird dog con pausa', reps: '3×8 per lato', description: 'Mantieni 2″ in estensione, core stabile.' },
      { id: 'g7', name: 'Crunch isometrico', reps: '3×20″', description: 'Solleva le spalle e mantieni la posizione.' }
    ]
  },
  'VENERDÌ': {
    title: 'CORE + STABILITÀ',
    exercises: [
      { id: 'v1', name: 'Plank frontale', reps: '3×45″', description: 'Addome sempre attivo, postura solida.' },
      { id: 'v2', name: 'Mountain climber lento', reps: '3×20', description: 'Porta le ginocchia al petto in modo controllato.' },
      { id: 'v3', name: 'Knee to elbow da plank', reps: '3×12', description: 'Ginocchio verso gomito opposto, core forte.' },
      { id: 'v4', name: 'Russian twist lento', reps: '3×20 totali', description: 'Controllo e respirazione, niente velocità.' },
      { id: 'v5', name: 'Leg raise controllato', reps: '3×10', description: 'Solleva le gambe senza staccare la schiena.' },
      { id: 'v6', name: 'Ponte glutei statico', reps: '3×30″', description: 'Mantieni bacino alto, glutei e addome contratti.' },
      { id: 'v7', name: 'Roll down in piedi (Pilates)', reps: '3×6', description: 'Scendi vertebra per vertebra, controllo totale.' }
    ]
  }
};

export const WEEK_1_DATA: WeeklyData = {
  diet: {
    'LUNEDÌ': {
      colazione: 'Yogurt magro 170g, 1 mela, Noci 15g',
      spuntino: '1 banana',
      pranzo: 'Pasta integrale 80g, Ceci cotti 120g, Pomodoro: 1 medio, Olio EVO 10g',
      cena: 'Lenticchie cotte 200g, Zucchine: 2 medie, Pane integrale 50g, Olio EVO 10g'
    },
    'MARTEDÌ': {
      colazione: 'Latte vegetale 200ml, Fette biscottate integrali 40g, Miele 10g',
      spuntino: 'Yogurt magro 125g',
      pranzo: 'Riso 80g, Uova 2, Zucchine: 1 media, Olio EVO 10g',
      cena: 'Fagioli cotti 200g, Carote: 2 medie, Pane integrale 40g, Olio EVO 10g'
    },
    'MERCOLEDÌ': {
      colazione: 'Yogurt magro 170g, Kiwi 2, Mandorle 15g',
      spuntino: '1 mela',
      pranzo: 'Farro 80g, Lenticchie cotte 150g, Broccoli: 1 testa media, Olio EVO 10g',
      cena: 'Ricotta magra 200g, Insalata: 1 cespo grande, Olio EVO 10g'
    },
    'GIOVEDÌ': {
      colazione: 'Latte vegetale 200ml, Pane integrale 50g, Marmellata senza zucchero 20g',
      spuntino: '1 banana',
      pranzo: 'Pasta integrale 80g, Fagioli cotti 150g, Carote: 2 medie, Olio EVO 10g',
      cena: 'Uova sode 2, Zucchine: 1 media, Pane integrale 40g, Olio EVO 10g'
    },
    'VENERDÌ': {
      colazione: 'Yogurt magro 170g, 1 mela',
      spuntino: '1 Frutta',
      pranzo: 'Riso 80g, Ceci cotti 150g, Pomodoro: 1 medio, Olio EVO 10g',
      cena: 'Pesce azzurro 200g, Broccoli: 1 testa media, Olio EVO 10g'
    }
  },
  shopping: {
    'Verdure': ['Zucchine: 5 medie', 'Carote: 4 medie', 'Broccoli: 2 teste', 'Insalata: 1 cespo grande', 'Pomodori: 2 medi'],
    'Legumi': ['Ceci: 270g (~1 barattolo)', 'Lenticchie: 350g (~1-2 barattoli)', 'Fagioli: 350g (~2 barattoli)'],
    'Proteine animali': ['Uova: 4', 'Pesce azzurro: 200g'],
    'Latticini': ['Yogurt magro: 5 vasetti da 125g', 'Ricotta magra: 200g'],
    'Carboidrati': ['Pasta integrale: 160g', 'Riso: 160g', 'Farro: 80g', 'Pane integrale: 130g', 'Fette biscottate integrali: 40g'],
    'Frutta': ['Mele: 2', 'Banana: 2', 'Kiwi: 2', 'Frutta di stagione: 150g']
  }
};

export const WEEK_2_DATA: WeeklyData = {
  diet: {
    'LUNEDÌ': {
      colazione: 'Yogurt magro 170g, 1 pera, Noci 15g',
      spuntino: '1 banana',
      pranzo: 'Pasta integrale 80g, Lenticchie cotte 150g, Zucchine: 1 media, Olio EVO 10g',
      cena: 'Ceci cotti 200g, Carote: 2 medie, Pane integrale 50g, Olio EVO 10g'
    },
    'MARTEDÌ': {
      colazione: 'Latte vegetale 200ml, Fette biscottate integrali 40g, Miele 10g',
      spuntino: 'Yogurt magro 125g',
      pranzo: 'Riso 80g, Uova 2, Zucchine: 1 media, Olio EVO 10g',
      cena: 'Ricotta magra 200g, Insalata: 1 cespo grande, Olio EVO 10g'
    },
    'MERCOLEDÌ': {
      colazione: 'Yogurt magro 170g, Kiwi 2, Mandorle 15g',
      spuntino: '1 mela',
      pranzo: 'Farro 80g, Ceci cotti 150g, Broccoli: 1 testa media, Olio EVO 10g',
      cena: 'Fagioli cotti 200g, Carote: 2 medie, Pane integrale 40g, Olio EVO 10g'
    },
    'GIOVEDÌ': {
      colazione: 'Latte vegetale 200ml, Pane integrale 50g, Marmellata senza zucchero 20g',
      spuntino: '1 banana',
      pranzo: 'Pasta integrale 80g, Fagioli cotti 150g, Zucchine: 1 media, Olio EVO 10g',
      cena: 'Uova 2, Zucchine: 1 media, Pane integrale 40g, Olio EVO 10g'
    },
    'VENERDÌ': {
      colazione: 'Yogurt magro 170g, 1 mela',
      spuntino: '1 frutta',
      pranzo: 'Riso 80g, Lenticchie cotte 150g, Pomodoro: 1 medio, Olio EVO 10g',
      cena: 'Pollo o tacchino 180g, Broccoli: 1 testa media, Olio EVO 10g'
    }
  },
  shopping: {
    'Verdure': ['Zucchine: 4 medie', 'Carote: 4 medie', 'Broccoli: 2 teste', 'Insalata: 1 cespo grande', 'Pomodori: 2 medi'],
    'Legumi': ['Ceci: 350g (~2 barattoli)', 'Lenticchie: 150g (~1 barattolo)', 'Fagioli: 350g (~2 barattoli)'],
    'Proteine animali': ['Uova: 4', 'Pollo o tacchino: 180g'],
    'Latticini': ['Yogurt magro: 5 vasetti da 125g', 'Ricotta magra: 200g'],
    'Carboidrati': ['Pasta integrale: 160g', 'Riso: 160g', 'Farro: 80g', 'Pane integrale: 130g', 'Fette biscottate integrali: 40g'],
    'Frutta': ['Mele: 2', 'Banana: 2', 'Kiwi: 2', 'Pera: 1', 'Frutta di stagione: 150g']
  }
};
