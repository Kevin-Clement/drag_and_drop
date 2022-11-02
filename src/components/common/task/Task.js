import React, { useContext } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import {isDragging} from '../../../utils/common/dragFunction';
import {FaWindowClose} from 'react-icons/fa';
import TasksContext from '../../../context/TasksContext';

const DeleteTask = styled(FaWindowClose)`
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 20px;
    cursor: pointer;
    color: red;
    display: none;
`;

const Container = styled.div`
    position: relative;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    height: 100px;
    color: ${isDragging( 'var(--color-black)', 'var(--color-white)')};
    background-color: ${isDragging('var(--color-grey )', '#191A1D')};
    font-weight: ${isDragging('bold', 'normal')};
    &:hover ${DeleteTask} {
            display: block;
        }
`;

const Task = ({task, index, column}) => {

    const [state, setState] = useContext(TasksContext);

    const deleteTask = () => {

        const { [task.id]: value, ...withoutTask } = state.tasks;

        const newTaskIds = column.taskIds.filter(id => id !== task.id);

        const newTask = {
            ...column,
            taskIds: newTaskIds
        };

        setState({
            ...state,
            tasks: withoutTask,
            columns: {
                ...state.columns,
                [column.id]: newTask
            }
        });
    };

    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided, snapshot) => (
                <Container
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                isDragging={snapshot.isDragging}
                >{task.content}
                    <DeleteTask onClick={() => deleteTask()}/>
                </Container>
            )}
        </Draggable>
    );
};

export default Task;