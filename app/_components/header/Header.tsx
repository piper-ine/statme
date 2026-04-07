// Описываем тип данных для пропсов
interface HeaderProps {
  activePage: 'Dashboard' | 'Tasks' | 'Settings' | 'Profile';
}

export default function Header({ activePage }: HeaderProps) {
  // Выносим пункты меню в массив, чтобы не дублировать код
  const navItems = ['Dashboard', 'Tasks', 'Settings', 'Profile'] as const;

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md text-white border-b border-white/10 px-8 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold tracking-tight italic">
        Stat<span className="text-green-500">Me</span>
      </div>

      <nav>
        <ul className="flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <li
              key={item}
              className={`transition-all duration-200 cursor-pointer relative pb-1
                ${activePage === item 
                  ? "text-white" // Стили для активного
                  : "text-gray-400 hover:text-gray-200" // Стили для неактивного
                }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}