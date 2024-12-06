
import TaskList from './TaskList';
import { fetchTasks } from '../store/actions';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SortButtons from './SortButtons';

const TaskListPage = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.task.currentPage);
    const currentSort = useSelector(state => state.task.sortBy);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        dispatch(fetchTasks(currentPage, currentSort));
        setIsLoading(false);
    }, [currentPage, dispatch, currentSort]);

    return (
        <div className='container'>
            <h1 className='centered-title'>Список задач</h1>
            <SortButtons />
            {isLoading ? <div>Загрузка...</div> : <TaskList />}
            
        </div>)
}

export default TaskListPage;