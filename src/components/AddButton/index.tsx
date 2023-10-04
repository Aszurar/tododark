import styles from './styles.module.css';
import { PlusCircle } from "@phosphor-icons/react";

export function AddButton() {
  return (
    <button
      type="submit"
      className={styles.button}>
      Criar <PlusCircle size={16} weight='bold' />
    </button>
  )
}