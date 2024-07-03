import { useTheme } from '@/app/entities/theme'
import css from './Header.module.css'
import { Toggle } from '@/app/shared/ui/toggle/toggle'

export function Header() {
    const { theme, toggleTheme } = useTheme()
    return (
        <header className={css.root}>
            <h1 className={css.h1}>HEADER</h1>
            <Toggle
                onChange={toggleTheme}
            />
        </header>
    )
}