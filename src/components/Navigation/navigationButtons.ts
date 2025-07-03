import { HomeIcon, History, Settings, Sun, Moon } from 'lucide-react'

export const getNavigationButtons = (
  theme: 'dark' | 'light',
  toggleTheme: () => void
) => [
  {
    icon: HomeIcon,
    title: 'Vai para a Home',
    click: () => console.log('Home'),
  },
  {
    icon: History,
    title: 'Vai para o Histórico',
    click: () => console.log('Histórico'),
  },
  {
    icon: Settings,
    title: 'Vai para Configurações',
    click: () => console.log('Configurações'),
  },
  {
    icon: theme === 'dark' ? Sun : Moon,
    title: 'Mudar o Tema',
    click: toggleTheme,
  },
]
