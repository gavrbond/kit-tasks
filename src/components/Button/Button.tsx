import styles from "./Button.module.scss"
import cl from "classnames"
import { Loader } from "../Loader"
import { Counter } from "../Counter/Counter"
import type { ButtonHTMLAttributes } from "react"

type ButtonProps = {
  counter?: boolean
  focused?: boolean
  label?: string
  size?: "small" | "medium" | "large"
  state?: "enabled" | "loading" | "disabled"
  theme?: "primary" | "secondary"
} & ButtonHTMLAttributes<HTMLButtonElement>

const loaderSizeMapping = {
  small: 16,
  medium: 20,
  large: 24,
}
const counterSizeMapping: { [key: string]: 16 | 20 | 24 } = {
  small: 16,
  medium: 20,
  large: 24,
}
export const Button = ({
  counter = true,
  focused = false,
  label,
  size = "medium",
  state = "enabled",
  theme = "primary",
  ...otherProps
}: ButtonProps) => (
  <button
    {...otherProps}
    disabled={state === "disabled"}
    className={cl(
      styles.button,
      styles[theme],
      styles[size],
      {
        [styles.disabled]: state === "disabled",
        [styles.loading]: state === "loading",
        [styles.focused]: focused,
      },
      styles[state]
    )}
  >
    <div className={styles.content}>
      <div className={styles.label}>{label}</div>
      {counter && <Counter theme={theme} size={counterSizeMapping[size]} />}
    </div>
    <div className={styles.loader}>
      <Loader size={loaderSizeMapping[size]} />
    </div>
    <div className={styles.overlay} />
    <div className={styles.shimmer} />
  </button>
)
