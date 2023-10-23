import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { PlusCircle } from '@phosphor-icons/react'

export function AddButton() {
  const [currentBrowserWidth, setCurrentBrowserWidth] = useState<number>(0)

  const hasTitleButton = currentBrowserWidth < 480

  function onUpdateCurrentBrowserWidth() {
    setCurrentBrowserWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', onUpdateCurrentBrowserWidth)
    return () => {
      window.removeEventListener('resize', onUpdateCurrentBrowserWidth)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    console.log('Largura da tela', currentBrowserWidth)
  }, [currentBrowserWidth])

  return (
    <button type="submit" className={styles.button}>
      {!hasTitleButton && 'Criar'}
      <PlusCircle size={16} weight="bold" />
    </button>
  )
}
