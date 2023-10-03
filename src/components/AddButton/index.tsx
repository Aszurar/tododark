import styles from './styles.module.css';
import { PlusCircle } from "@phosphor-icons/react";

type AddButtonProps = {
  onClick: () => void;
}

export function AddButton({ onClick }: AddButtonProps) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={styles.button}>
      Criar <PlusCircle size={16} weight='bold' />
    </button>
  )
}