export function isDragging(dragging, inital) {
    return (props) => props.isDragging ? dragging : inital;
}

export function isDraggingOver(dragging, inital) {
    return (props) => props.isDraggingOver ? dragging : inital;
}