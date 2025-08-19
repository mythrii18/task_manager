 function TaskList({tasks,onDelete}){
    if(tasks.length == 0)
    {
        return <p> Tasks are empty. Please add the tasks..</p>
    }
    return(
        <ul>
            {tasks.map((task) => (
                <li key = {task.id}>
                    {task.text}
                    <button onClick={() => onDelete(task.id)}>Delete</button>
                </li>

            ))}
        </ul>

    );
}
export default TaskList;