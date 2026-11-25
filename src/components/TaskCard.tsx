type TaskCardProps = {
    id: number;
    Title: string;
    Description: string;
    assaignee: string;
    category:string;
    priority?: string;

};

export const TaskCard = ({ id, Title, Description, assaignee, category, priority }: TaskCardProps) => {
    return (
        <article id={`task-${id}`} className="task-card">
            <h3>{Title}</h3>
            <p>{Description}</p>
            <p>{assaignee}</p>
            <p>{category}</p>
            {priority && <p>{priority}</p>}
        </article>
    );
};







