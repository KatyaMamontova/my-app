import css from './toggle.module.scss'

type ToggleSwitchTheme = 'light' | 'dark'

type Props = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  theme?: ToggleSwitchTheme
}

export function Toggle({
  onChange,
  theme = 'light'
}: Props) {
  return (
    <div className={`${css.toggleSwitch}_${theme}`}>
      <label className={css.label}>
        <input type='checkbox' className={css.input} onChange={onChange}/>
        <span className={css.slider}></span>
      </label>
    </div>
  )
}