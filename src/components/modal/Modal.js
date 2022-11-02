import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import TasksContext from '../../context/TasksContext';


const Div = styled.div`
    position: relative;
`;

const Container = styled.div`
    position: absolute;
    top: 0;
    right: 40px;
    top: 50px;
    height: 60px;
    width: 200px;
    z-index: 100;
    background-color: ${props => props.theme};
    border-radius: 10px;
    border: 1px solid var(--color-white);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AddTask = styled.p`
    cursor: pointer;
`;

const Modal = ({column, onClose}) => {

    const [state, setState] = useContext(TasksContext);

    const addTask = () => {
        const tasksLength = Object.keys(state.tasks).length;
        const taskIdAdded = `task-${tasksLength + 1}`;

        const newTask = {
            ...column,
            taskIds: [...column.taskIds, taskIdAdded]
        };

        const newTasks = { 
            ...state.tasks,
            [taskIdAdded]: {
                id: taskIdAdded
            }
        };

        setState({
            ...state,
            tasks: newTasks,
            columns: {
                ...state.columns,
                [column.id]: newTask
            }
        });
        
        onClose();
        
    };

        return (
        <Div>
            <Container theme={column?.color}>
                <AddTask onClick={() => addTask()}>Add a task</AddTask>
            </Container>
        </Div>
    );
};

export default Modal;