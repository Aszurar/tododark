import * as Checkbox from '@radix-ui/react-checkbox';
import styles from './styles.module.css';
import { CheckIcon } from '../../assets/CheckIcon';
import { TaskProps } from '../../dto/taskDTO';

type TaskPropsWithoutCreatedAt = Omit<TaskProps, 'createdAt'>;

type CheckBoxProps = TaskPropsWithoutCreatedAt & {
  handleCheckTask: () => void;
}

export function CheckBox({ id, isChecked, title, handleCheckTask, }: CheckBoxProps) {

  const checkboxToggleStyle = isChecked ? styles.checkboxRootChecked :
    styles.checkboxRootUnchecked;
  const checkboxRootStyle = `${checkboxToggleStyle} ${styles.checkboxRoot}`;

  const labelToggleStyle = isChecked ? styles.labelChecked :
    styles.labelUnchecked;
  const labelStyle = `${labelToggleStyle} ${styles.label}`;

  return (
    <div className={styles.container}>
      <Checkbox.Root
        id={id}
        checked={isChecked}
        className={checkboxRootStyle}
        onCheckedChange={handleCheckTask}
        aria-label="Marcar tarefa como concluída"
      >
        <Checkbox.Indicator className={styles.checkboxIndicator}>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>

      <label className={labelStyle} htmlFor={id}>
        {title}
      </label>

    </div>

  )
}