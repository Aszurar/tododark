export type TaskProps = {
    id: string;
    title: string;
    isChecked: boolean;
};

const MAX_TASK_TITLE_LENGTH = 250;

const TASKS_LIST_DEFAULT = [
    {
        id: '1',
        title: 'Fazer café',
        isChecked: false,
    },
    {
        id: '2',
        title: 'Estudar React Native',
        isChecked: false,
    },
    {
        id: '3',
        title: 'Estudar React',
        isChecked: false,
    },
    {
        id: '4',
        title: 'Estudar Node',
        isChecked: false,
    },
    {
        id: '5',
        title: 'Estudar Typescript',
        isChecked: true,
    },
    {
        id: '6',
        title: 'Estudar Javascript',
        isChecked: false,
    },
    {
        id: '7',
        title: 'Estudar HTML',
        isChecked: true,
    },
    {
        id: '8',
        title: 'Estudar CSS',
        isChecked: false,
    },
    {
        id: '9',
        title: 'Estudar C#',
        isChecked: false,
    },
    {
        id: '10',
        title: 'Estudar Java',
        isChecked: false,
    },
    {
        id: '11',
        title: 'Estudar Python',
        isChecked: false,
    },
    {
        id: '12',
        title: 'Estudar PHP',
        isChecked: false,
    },
    {
        id: '13',

        title: 'Estudar C++',
        isChecked: false,
    },
    {
        id: '14',
        title: 'Estudar C',
        isChecked: true,
    },
    {
        id: '15',
        title: 'Estudar Ruby',
        isChecked: false,
    },
    {
        id: '16',
        title: 'Estudar Go',
        isChecked: false,
    },
];

export { TASKS_LIST_DEFAULT, MAX_TASK_TITLE_LENGTH };
