import { Header } from "@/layout";
import { Button } from "@/components";
import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '@/store/slices/counterSlice';
import { useNavigate } from "react-router-dom";
import './home.css';
import { useEffect, useState } from "react";
import { addTask, deleteTask, updateTask } from "../../store/slices/taskSlice";
import { TaskList } from "../../components/Home/TaskList";
import { TaskForm } from "../../components/Home/TaskForm";

const Home = () => {
  const taskList = useSelector((state) => state.task);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [state, setState] = useState({
    id: "",
    title: "",
    desc: "",
    status: 0,
    showAdd: false
  });

  const [filter, setFilter] = useState("all");
  const [list, setList] = useState([]);
  const { title, desc, showAdd, status } = state;

  useEffect(() => {
    if (filter == 0 || filter == 1) {
      setList([...taskList].filter(item => item.status === filter))
      return;
    }
    setList([...taskList])
  }, [filter, taskList]);

  const generateId = () => {
    return Math.floor(100000 + Math.random() * 900000);
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({
      ...state,
      [name]: value
    })
  }

  const handleCancel = () => {
    setState({
      id: "",
      title: "",
      desc: "",
      status: 0,
      showAdd: false
    })
    setFilter("all")
  }

  const handleSubmit = () => {
    const id = generateId();
    const data = {
      id,
      title,
      desc,
      status
    }
    dispatch(addTask(data));
    handleCancel();

  }
  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  const handleUpdateStatus = (id) => {
    const tempArr = []
    list.map(item => {
      let data = {
        ...item
      }
      if (item.id === id) {
        data = {
          ...data,
          status: item.status === 0 ? 1 : 0
        }
      }
      tempArr.push(data)
    });
    dispatch(updateTask(tempArr))

  }

  const handleFilter = (status) => {
    setFilter(status)
  }

  return (
    <div>
      <button style={{ color: "orange" }} type="submit" onClick={() => {
        handleChange({
          target: {
            name: "showAdd",
            value: true
          }
        })
      }}>Add Task</button>
      <br />
      <br />
      <br />
      <div class="tabs">
        <button class="tablink" onClick={() => handleFilter("all")}>Show All</button>
        <button class="tablink" onClick={() => handleFilter(1)}>Show Complete</button>
        <button class="tablink" onClick={() => handleFilter(0)}>Show In Complete</button>
      </div>
      {!showAdd && <div class="table-container">
        <TaskList list={list} handleDelete={handleDelete} handleUpdateStatus={handleUpdateStatus} />
      </div>
      }

      {showAdd &&
        <TaskForm handleSubmit={handleSubmit} handleCancel={handleCancel} state={state} handleChange={handleChange} />
      }
    </div>
  )
}


export default Home
