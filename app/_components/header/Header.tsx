import Link from "next/link"; // 1. Импортируем Link

interface HeaderProps {
  activePage: 'Dashboard' | 'Tasks' | 'Settings' | 'Profile';
}

export default function Header({ activePage }: HeaderProps) {
  const navItems = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Tasks', href: '/tasks' },
    { name: 'Settings', href: '/settings' },
    { name: 'Liderboard', href: '/liderboard' },
    { name: 'Profile', href: '/profile' },
  ] as const;

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md text-white border-b border-white/10 px-8 py-4 flex items-center justify-between">
      <Link href="/" className="text-2xl font-bold tracking-tight italic cursor-pointer">
        Stat<span className="text-green-500">Me</span>
      </Link>

      <nav>
        <ul className="flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`transition-all duration-200 relative pb-1
                  ${activePage === item.name 
                    ? "text-white" 
                    : "text-gray-400 hover:text-gray-200"
                  }`}
              >
                {item.name}
                
                {/* Подчеркивание для активной страницы */}
                {activePage === item.name && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-500 rounded-full" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}