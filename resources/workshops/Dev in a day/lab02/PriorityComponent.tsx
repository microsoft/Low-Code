import * as React from 'react';
import {
    DragDropContext,
    Droppable,
    Draggable,
    DropResult,
    DraggingStyle,
    NotDraggingStyle,
} from 'react-beautiful-dnd';

export interface PriorityComponentProps {
    width: number;
    height: number;
    itemHeight: number;
    backgroundColor: string;
    dragBackgroundColor: string;
    fontSize: number;
    fontColor: string;
    dataset: ComponentFramework.PropertyTypes.DataSet;
    onReorder: (sourceIndex: number, destinationIndex: number) => void;
}

const getItemStyle = (
    isDragging: boolean,
    height: number,
    backgroundColor: string,
    dragBackgroundColor: string,
    draggableStyle?: DraggingStyle | NotDraggingStyle,
) => ({
    // change background colour if dragging
    background: isDragging ? dragBackgroundColor : backgroundColor,
    height: height,
    // styles we need to apply on draggables
    ...draggableStyle,
});

export const PriorityComponent = (props: PriorityComponentProps): JSX.Element => {
    const { dataset, onReorder, width, height, itemHeight, backgroundColor, dragBackgroundColor, fontSize, fontColor } =
        props;

    const onDragEnd = React.useCallback(
        (result: DropResult) => {
            // dropped outside the list
            if (!result.destination) {
                return;
            }
            onReorder(result.source.index, result.destination.index);
        },
        [onReorder],
    );

    const sortedColumns = React.useMemo(() => {
        return dataset.columns
            .filter((column) => !column.isHidden && column.order >= 0)
            .sort((a, b) => a.order - b.order);
    }, [dataset]);

    const recordsSorted = React.useMemo(() => {
        return dataset.sortedRecordIds.map((id) => dataset.records[id]);
    }, [dataset]);

    const itemWidth = width / sortedColumns.length;

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div
                className="prioritydnd-scroll-container"
                style={{
                    width: width,
                    height: height,
                    fontSize: `${fontSize}pt`,
                    color: fontColor,
                }}
            >
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            style={{
                                width: width,
                            }}
                        >
                            {recordsSorted.map((item, index) => (
                                <Draggable key={item.getRecordId()} draggableId={item.getRecordId()} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            className="prioritydnd-item-container"
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={getItemStyle(
                                                snapshot.isDragging,
                                                itemHeight,
                                                backgroundColor,
                                                dragBackgroundColor,
                                                provided.draggableProps.style,
                                            )}
                                        >
                                            {sortedColumns.map((c) => {
                                                return (
                                                    <div
                                                        key={c.name}
                                                        className="prioritydnd-item-column"
                                                        style={{
                                                            width: itemWidth,
                                                        }}
                                                    >
                                                        {item.getFormattedValue(c.name)?.toString()}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
    );
};
