import React, {useState} from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import Column from '../common/column/Column';
import dataList from '../../utils/dataList';
import styled from 'styled-components';
import TasksContext from '../../context/TasksContext';

const DragAndDropContainer = styled.div`
    display: flex;
    max-width: 70%;
    margin: 0 auto;
    `;

const DragAndDropLayout = () => {

    const [state, setState] = useState(dataList);

    const onDragEnd = (result) => {
        const {destination, source, draggableId} = result;
        if(!destination) {
            return;
        }
        if(destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }
        const start = state.columns[source.droppableId];
        const finish = state.columns[destination.droppableId];

        if(start === finish) {
            const newTaskIds = Array.from(start.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);
            const newColumn = {
                ...start,
                taskIds: newTaskIds,
            };
            
            const newState = {
                ...state,
                columns: {
                    ...state.columns,
                    [newColumn.id]: newColumn,
                }
            };
            setState(newState);
            return;
        }

        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStart = {
            ...start,
            taskIds: startTaskIds,
        };
        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds,
        };
        const newState = {
            ...state,
            columns: {
                ...state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            }
        };
        setState(newState);

    };

    return (
        <TasksContext.Provider value={[state, setState]}>
            <DragAndDropContainer>
                <DragDropContext
                    onDragEnd={onDragEnd}
                >
                {state.columnOrder.map(columnId => {
                    const column = state.columns[columnId];
                    const tasks = column.taskIds.map(taskId => state.tasks[taskId]);
                    return <Column key={column.id} column={column} tasks={tasks} />;
                }
                )}
                </DragDropContext>
            </DragAndDropContainer>

        </TasksContext.Provider>
    );
};

export default DragAndDropLayout;