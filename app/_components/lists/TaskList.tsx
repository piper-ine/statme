interface Task {
  id: number;
  title: string;
  status: 'Done' | 'In Progress' | 'Todo';
}

interface TaskListProps {
  category?: string; // Пропс категории
  tasks?: Task[];    // Данные задач (опционально)
}

export default function TaskList({ 
  category = "General", // Дефолтное значение
  tasks = [
    { id: 1, title: "Design System Update", status: "In Progress" },
    { id: 2, title: "Analytics Dashboard", status: "Done" },
    { id: 3, title: "User Research", status: "Todo" },
    { id: 4, title: "API Integration", status: "In Progress" },
  ] 
}: TaskListProps) {
  return (
    <div className="w-full">
      {/* Заголовок с категорией */}
      <div className="flex items-center justify-between mb-4 px-2">
        <h2 className="text-zinc-100 font-semibold text-lg">{category} Tasks</h2>
        <span className="text-xs text-zinc-500 bg-zinc-800 px-2 py-1 rounded-md">
          {tasks.length} items
        </span>
      </div>

      {/* Список задач */}
      <ul className="grid grid-cols-1 gap-3">
        {tasks.map((task) => (
          <li 
            key={task.id}
            className="group flex items-center justify-between p-4 bg-[#111111] border border-zinc-800 rounded-xl hover:border-green-500/50 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              {/* Кастомный чекбокс (визуальный) */}
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                ${task.status === 'Done' ? 'border-green-500 bg-green-500' : 'border-zinc-700'}
              `}>
                {task.status === 'Done' && (
                  <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              
              <span className={`text-sm font-medium ${task.status === 'Done' ? 'text-zinc-500 line-through' : 'text-zinc-200'}`}>
                {task.title}
              </span>
            </div>

            {/* Метка статуса */}
            <span className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded-lg font-bold
              ${task.status === 'Done' ? 'bg-green-500/10 text-green-500' : 
                task.status === 'In Progress' ? 'bg-blue-500/10 text-blue-500' : 'bg-zinc-800 text-zinc-400'}
            `}>
              {task.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}