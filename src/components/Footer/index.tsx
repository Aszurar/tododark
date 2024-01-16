import { GithubLogo, LinkedinLogo, ShootingStar } from '@phosphor-icons/react'

import { LinkButton } from '../LinkButton'

import styles from './styles.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <strong>
        Desenvolvido por <ShootingStar size={20} weight="bold" />{' '}
        <span>Lucas de Lima Martins de Souza.</span>
      </strong>
      <nav className={styles.links}>
        <LinkButton
          icon={GithubLogo}
          label="Acessar Github"
          link="https://github.com/Aszurar/tododark"
        />
        <LinkButton
          icon={LinkedinLogo}
          label="Acessar Linkedin"
          link="https://www.linkedin.com/in/lucas-de-lima-azsura/"
        />
      </nav>
    </footer>
  )
}
