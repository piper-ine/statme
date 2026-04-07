import Header from "../_components/header/Header";
import TaskList from "../_components/lists/TaskList";

export default function TaskPage() {
  return (
    // Задаем минимальную высоту экрана и темный фон, если он не задан в глобальных стилях
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header activePage="Tasks"/>
      
      {/* Основной контейнер с отступами */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        
        {/* Секция заголовка страницы */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight">
            My <span className="text-green-500">Tasks</span>
          </h1>
          <p className="text-zinc-500 mt-2">
            Управляйте своими задачами и отслеживайте прогресс выполнения.
          </p>
        </div>

        {/* Сетка или колонка с задачами */}
        <div className="bg-[#111111]/50 border border-zinc-800/50 rounded-3xl p-8 backdrop-blur-sm">
          <TaskList category="Development" />
        </div>
        
      </main>
    </div>
  )
}