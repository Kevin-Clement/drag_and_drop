import React, {useState} from 'react';
import styled from 'styled-components';
import Task from '../task/Task';
import {Droppable} from 'react-beautiful-dnd';
import {isDraggingOver} from '../../../utils/common/dragFunction';
import { FiMoreVertical } from "react-icons/fi";
import Modal from '../../modal/Modal';

const Container = styled.div`
    margin: 0 12px;
    border-radius: 10px;
    width: 240px;

    display: flex;
    flex-direction: column;
`;
const Title = styled.h3`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 8px 16px 16px;
    color: var(--color-white);
    margin: 0;
    border-radius: 10px 10px 0 0;
    background-color: ${props => props.theme};
`;
const IconMore = styled(FiMoreVertical)`
    font-size: 20px;
    cursor: pointer;
    position: relative;
`;
const TaskList = styled.div`
    padding: 8px;
    transition: background-color 0.2s ease;
    background-color: ${isDraggingOver('var(--color-drappingOver)', ' #292B31')};
    min-height: 100px;
`;

const Column = ({column, tasks}) => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleTaskMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
        <Container >
            <Title theme={`${column?.color}`}>{column.title}
                <IconMore onClick={() => toggleTaskMenu(column)}/>
            </Title>
            <Droppable droppableId={column.id}>
                {(provided, snapshot) => (
                <TaskList
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    isDraggingOver={snapshot.isDraggingOver}
                >
                    {  tasks.map((task, index) => task?.id && <Task key={task.id} task={task} index={index} column={column} />)}
                    {provided.placeholder}
                </TaskList>
                )}
            </Droppable>
        </Container>
        {openMenu && <Modal column={column} onClose={toggleTaskMenu}/>}
        </>
    );
};

export default Column;