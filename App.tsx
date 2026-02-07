
import React, { useState, useEffect } from 'react';
import { Utensils, ShoppingCart, Dumbbell, Calendar, ChevronRight, CheckCircle2, Circle } from 'lucide-react';
import { Day, ShoppingItem } from './types';
import { DAYS, WORKOUT_PLAN, WEEK_1_DATA, WEEK_2_DATA } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'diet' | 'shopping' | 'workout'>('diet');
  const [activeWeek, setActiveWeek] = useState<1 | 2>(1);
  const [checkedMeals, setCheckedMeals] = useState<Record<string, boolean>>({});
  const [shoppingCart, setShoppingCart] = useState<Record<number, ShoppingItem[]>>({
    1: Object.entries(WEEK_1_DATA.shopping).flatMap(([category, items]) => 
      items.map((name, idx) => ({ id: `${category}-${idx}`, name, category, checked: false }))
    ),
    2: Object.entries(WEEK_2_DATA.shopping).flatMap(([category, items]) => 
      items.map((name, idx) => ({ id: `${category}-${idx}`, name, category, checked: false }))
    ),
  });
  const [workoutProgress, setWorkoutProgress] = useState<Record<string, boolean>>({});

  // Persist state to localStorage
  useEffect(() => {
    const savedMeals = localStorage.getItem('checkedMeals');
    const savedShopping = localStorage.getItem('shoppingCart');
    const savedWorkout = localStorage.getItem('workoutProgress');
    const savedWeek = localStorage.getItem('activeWeek');

    if (savedMeals) setCheckedMeals(JSON.parse(savedMeals));
    if (savedShopping) setShoppingCart(JSON.parse(savedShopping));
    if (savedWorkout) setWorkoutProgress(JSON.parse(savedWorkout));
    if (savedWeek) setActiveWeek(Number(savedWeek) as 1 | 2);
  }, []);

  useEffect(() => {
    localStorage.setItem('checkedMeals', JSON.stringify(checkedMeals));
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    localStorage.setItem('workoutProgress', JSON.stringify(workoutProgress));
    localStorage.setItem('activeWeek', JSON.stringify(activeWeek));
  }, [checkedMeals, shoppingCart, workoutProgress, activeWeek]);

  const toggleMeal = (day: string, type: string) => {
    const key = `${activeWeek}-${day}-${type}`;
    setCheckedMeals(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleShoppingItem = (id: string) => {
    setShoppingCart(prev => ({
      ...prev,
      [activeWeek]: prev[activeWeek].map(item => 
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    }));
  };

  const toggleWorkout = (day: string, exerciseId: string) => {
    const key = `${day}-${exerciseId}`;
    setWorkoutProgress(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const currentData = activeWeek === 1 ? WEEK_1_DATA : WEEK_2_DATA;

  return (
    <div className="min-h-screen bg-slate-50 pb-20 font-sans text-slate-900 flex flex-col items-stretch">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-slate-800">LifeSync</h1>
        <div className="flex bg-slate-100 p-1 rounded-lg">
          <button 
            onClick={() => setActiveWeek(1)}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${activeWeek === 1 ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'}`}
          >
            Settimana 1
          </button>
          <button 
            onClick={() => setActiveWeek(2)}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${activeWeek === 2 ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'}`}
          >
            Settimana 2
          </button>
        </div>
      </header>

      <main className="flex-1 p-4 max-w-lg mx-auto w-full">
        {/* DIET VIEW */}
        {activeTab === 'diet' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {DAYS.map(day => (
              <section key={day} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="bg-emerald-50 px-4 py-2 border-b border-emerald-100 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-600" />
                  <h2 className="font-bold text-emerald-800 tracking-tight">{day}</h2>
                </div>
                <div className="divide-y divide-slate-100">
                  {Object.entries(currentData.diet[day]).map(([mealType, mealDesc]) => {
                    const isChecked = checkedMeals[`${activeWeek}-${day}-${mealType}`];
                    return (
                      <div 
                        key={mealType} 
                        onClick={() => toggleMeal(day, mealType)}
                        className={`p-4 flex items-start gap-3 cursor-pointer transition-colors hover:bg-slate-50 active:bg-slate-100 ${isChecked ? 'opacity-60' : ''}`}
                      >
                        <div className="mt-1">
                          {isChecked ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                          ) : (
                            <Circle className="w-5 h-5 text-slate-300" />
                          )}
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">{mealType}</p>
                          <p className={`text-sm leading-snug ${isChecked ? 'line-through text-slate-400' : 'text-slate-700'}`}>
                            {mealDesc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* SHOPPING VIEW */}
        {activeTab === 'shopping' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {Array.from(new Set(shoppingCart[activeWeek].map(i => i.category))).map(cat => (
              <section key={cat} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="bg-orange-50 px-4 py-2 border-b border-orange-100">
                  <h2 className="font-bold text-orange-800 text-sm uppercase tracking-widest">{cat}</h2>
                </div>
                <div className="divide-y divide-slate-100">
                  {shoppingCart[activeWeek].filter(i => i.category === cat).map(item => (
                    <div 
                      key={item.id} 
                      onClick={() => toggleShoppingItem(item.id)}
                      className="p-4 flex items-center gap-3 cursor-pointer hover:bg-slate-50"
                    >
                      <div className="flex-shrink-0">
                        {item.checked ? (
                          <CheckCircle2 className="w-6 h-6 text-orange-500" />
                        ) : (
                          <Circle className="w-6 h-6 text-slate-300" />
                        )}
                      </div>
                      <span className={`text-sm flex-1 ${item.checked ? 'line-through text-slate-400' : 'text-slate-700 font-medium'}`}>
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* WORKOUT VIEW */}
        {activeTab === 'workout' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="bg-blue-600 rounded-2xl p-6 text-white shadow-lg shadow-blue-200 mb-8">
              <p className="text-blue-100 text-sm font-medium">Routine Serale</p>
              <h2 className="text-2xl font-black mt-1">ALLENAMENTO LUN-VEN</h2>
              <div className="flex gap-4 mt-4 text-xs font-semibold text-blue-100">
                <span className="bg-blue-500/30 px-2 py-1 rounded">30–40 min</span>
                <span className="bg-blue-500/30 px-2 py-1 rounded">Tappetino + Elastici</span>
              </div>
            </div>

            {DAYS.map(day => (
              <section key={day} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-6">
                <div className="bg-slate-900 px-4 py-3 flex justify-between items-center">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{day}</p>
                    <h3 className="text-white font-bold">{WORKOUT_PLAN[day].title}</h3>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-500" />
                </div>
                <div className="divide-y divide-slate-100">
                  {WORKOUT_PLAN[day].exercises.map((ex, idx) => {
                    const isChecked = workoutProgress[`${day}-${ex.id}`];
                    return (
                      <div 
                        key={ex.id}
                        onClick={() => toggleWorkout(day, ex.id)}
                        className={`p-4 transition-all duration-200 active:scale-[0.98] cursor-pointer flex gap-4 ${isChecked ? 'bg-blue-50/30 opacity-70' : 'hover:bg-slate-50'}`}
                      >
                        <div className="flex flex-col items-center">
                           <span className="text-slate-300 font-black text-xl mb-1">{String(idx + 1).padStart(2, '0')}</span>
                           {isChecked ? <CheckCircle2 className="w-5 h-5 text-blue-500" /> : <Circle className="w-5 h-5 text-slate-200" />}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h4 className={`font-bold text-sm ${isChecked ? 'line-through text-slate-400' : 'text-slate-800'}`}>{ex.name}</h4>
                            <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold">{ex.reps}</span>
                          </div>
                          <p className={`text-xs mt-1 leading-relaxed ${isChecked ? 'text-slate-400' : 'text-slate-500'}`}>
                            {ex.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        )}
      </main>

      {/* Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-slate-200 px-6 py-3 flex justify-around items-center z-50">
        <button 
          onClick={() => setActiveTab('diet')}
          className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'diet' ? 'text-emerald-600' : 'text-slate-400'}`}
        >
          <Utensils className={`w-6 h-6 ${activeTab === 'diet' ? 'fill-emerald-50' : ''}`} />
          <span className="text-[10px] font-bold uppercase tracking-tight">Dieta</span>
        </button>
        <button 
          onClick={() => setActiveTab('shopping')}
          className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'shopping' ? 'text-orange-600' : 'text-slate-400'}`}
        >
          <ShoppingCart className={`w-6 h-6 ${activeTab === 'shopping' ? 'fill-orange-50' : ''}`} />
          <span className="text-[10px] font-bold uppercase tracking-tight">Spesa</span>
        </button>
        <button 
          onClick={() => setActiveTab('workout')}
          className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'workout' ? 'text-blue-600' : 'text-slate-400'}`}
        >
          <Dumbbell className={`w-6 h-6 ${activeTab === 'workout' ? 'fill-blue-50' : ''}`} />
          <span className="text-[10px] font-bold uppercase tracking-tight">Allenamento</span>
        </button>
      </nav>
    </div>
  );
};

export default App;
