import styles from "./Counter.module.scss"
import cl from "classnames"

type CounterProps = {
  pulse?: boolean
  quantity?: string | number
  size: 8 | 12 | 16 | 20 | 24
  stroke?: boolean
  theme: "primary" | "secondary"
  borderColor?: string
}

const bigSizes = [16, 20, 24]

export const Counter = ({
  pulse = false,
  quantity = 1,
  size = 16,
  stroke = false,
  theme = "primary",
  borderColor = "#4caf50",
}: CounterProps) => {
  let quantityText

  if (typeof quantity === "number") {
    if (quantity > 99) {
      quantityText = "99+"
    } else {
      quantityText = quantity
    }
  } else {
    quantityText = quantity.slice(0, 3)
  }

  return (
    <div
      className={cl(
        styles.counter,
        styles[`counter-size-${size}`],
        styles[theme],
        {
          [styles.stroke]: stroke,
          [styles.pulse]: pulse,
        }
      )}
      style={stroke ? { borderColor: borderColor } : {}}
    >
      {bigSizes.includes(size) && (
        <span className={styles.quantity}>{quantityText}</span>
      )}
    </div>
  )
}
