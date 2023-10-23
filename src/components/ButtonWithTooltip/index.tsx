import { IconProps } from '@phosphor-icons/react'
import * as Tooltip from '@radix-ui/react-tooltip'
import { ForwardRefExoticComponent, RefAttributes } from 'react'
import styles from './styles.module.css'

type ButtonWithTooltipProps = {
  label: string
  onPress: () => void
  isDisabled?: boolean
  isActive?: boolean
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
}

export function ButtonWithTooltip({
  label,
  isActive,
  onPress,
  icon: Icon,
  isDisabled = false,
}: ButtonWithTooltipProps) {
  const checkAllColorButtons = isActive
    ? `${styles.button} ${styles.checkAllColor} `
    : `${styles.button} ${styles.uncheckAllColor} `

  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button
            type="button"
            className={checkAllColorButtons}
            onClick={onPress}
            disabled={isDisabled}
            aria-label={label}
          >
            <Icon size={20} weight="bold" />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            sideOffset={5}
            className={styles.tooltipContent}
            aria-label="."
          >
            {label}
            <Tooltip.Arrow className={styles.tooltipArrow} />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
