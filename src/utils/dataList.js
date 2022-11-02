const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: '' },
        'task-2': { id: 'task-2', content: '' },
        'task-3': { id: 'task-3', content: '' },
        'task-4': { id: 'task-4', content: '' },
        'task-5': { id: 'task-5', content: '' },
        'task-6': { id: 'task-6', content: '' },
        'task-7': { id: 'task-7', content: '' },
        'task-8': { id: 'task-8', content: '' },
        'task-9': { id: 'task-9', content: '' },
        'task-10': { id: 'task-10', content: '' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'On hold',
            color: '#FB7D44',
            taskIds: ['task-1', 'task-2', 'task-3'],
        },
        'column-2': {
            id: 'column-2',
            title: 'In progress',
            color: '#2A92BF',
            taskIds: ['task-4', 'task-5'],
        },
        'column-3': {
            id: 'column-3',
            title: 'Need review',
            color: '#F4CE46',
            taskIds: ['task-6', 'task-7', 'task-8'],
        },
        'column-4': {
            id: 'column-4',
            title: 'Approved',
            color: '#00B961',
            taskIds: ['task-9', 'task-10'],
        },
    },

    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
};

export default initialData;