import { IconProps } from '@phosphor-icons/react'
import * as Tooltip from '@radix-ui/react-tooltip'
import { ForwardRefExoticComponent, RefAttributes } from 'react'
import styles from './styles.module.css'

type LinkButtonProps = {
  link: string
  label: string
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
}

export function LinkButton({ icon: Icon, label, link }: LinkButtonProps) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <a
            href={link}
            target="_blank"
            className={styles.link}
            aria-label={label}
            rel="noreferrer"
          >
            <Icon size={26} weight="bold" />
          </a>
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
