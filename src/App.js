import React, { Component } from 'react';
import { Router, Route, Link } from "react-router-dom";
import './App.css';
import TodoView from "./Todo/todo"
import AddTodo from "./Todo/addtodo";
import EditTodo from "./Todo/EditTodo";
import createBrowserHistory from "history/createBrowserHistory";
import { withRouter } from "react-router";
const customHistory = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{ taskname: 'C', status: true },
      { taskname: 'C++', status: false },
      { taskname: 'Java', status: false },
      { taskname: 'Python', status: false },
      { taskname: 'COBOL', status: false }],
      editText: ''
    }
  }

  handleStatus = (name) => {
    let data = [...this.state.data];
    let index = data.findIndex(d => d.taskname === name);
    data[index].status = !data[index].status;
    this.setState({
      data: data
    })
  }

  handleDelete = (obj) => {
    let data = [...this.state.data];
    data = data.filter(d => d.taskname != obj.taskname);
    this.setState({
      data: data,
      editText: ''
    })
  }

  handleAddTask = (taskname) => {
    if (!taskname) return;
    let data = [...this.state.data];
    data.push({
      taskname: taskname,
      status: false
    });
    this.setState({
      data: data
    })
  }

  handleEditTodo = (taskname) => {
    this.setState({
      editText: taskname
    })
  }
  handleUpdateTodo = (prevtaskname, taskname) => {
    let data = [...this.state.data];
    let index = data.findIndex(d => d.taskname === prevtaskname);
    data[index].taskname = taskname;
    this.setState({
      data: data,
      editText: ''
    })
  }

  render() {
    const { data, editText } = this.state;
    return (
      <Router history={customHistory}>
        <div className="App-header">
          <nav style={{ width: '60vw' }}>
            <ul style={{ display: 'flex', width: '100%', padding: 0 }}>
              <li style={{ listStyleType: 'none', flex: 1 }}>
                <Link to="/">All Task</Link>
              </li>
              <li style={{ listStyleType: 'none', flex: 1, textAlign: 'center' }}>
                <Link to="/completed/" to={{
                  pathname: "/completed/",
                  state: { completed: true }
                }}>Complete Task</Link>
              </li>
              <li style={{ listStyleType: 'none', flex: 1, textAlign: 'end' }}>
                <Link to="/completed/" to={{
                  pathname: "/incompleted/",
                  state: { completed: false }
                }}>InComplete Task</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact render={() => {
            return <AllComponents data={data}
              handleStatus={this.handleStatus}
              handleDelete={this.handleDelete}
              handleEditTodo={this.handleEditTodo}
              handleAddTask={this.handleAddTask}
              editText={editText}
              handleUpdateTodo={this.handleUpdateTodo}
            />
          }} />
          <Route path="/completed/" render={() => {
            return <AllComponents data={data}
              handleStatus={this.handleStatus}
              handleDelete={this.handleDelete}
              handleEditTodo={this.handleEditTodo}
              handleAddTask={this.handleAddTask}
              editText={editText}
              handleUpdateTodo={this.handleUpdateTodo}
            />
          }} />
          <Route path="/incompleted/" render={() => {
            return <AllComponents data={data}
              handleStatus={this.handleStatus}
              handleDelete={this.handleDelete}
              handleEditTodo={this.handleEditTodo}
              handleAddTask={this.handleAddTask}
              editText={editText}
              handleUpdateTodo={this.handleUpdateTodo}
            />
          }} />
        </div>

      </Router>

    );
  }
}

export default App;

const AllComponent = (props) => {
  const { editText, location, handleUpdateTodo, handleAddTask, data, handleStatus, handleDelete, handleEditTodo } = props;
  let cloneData = [...data]
  if (props.location.state) {
    let completed = location.state.completed;
    cloneData = cloneData.filter((d) => { return d.status === completed })
  }
  return (
    <React.Fragment>
      {
        editText ? <EditTodo editText={editText} handleUpdateTodo={handleUpdateTodo} />
          : <AddTodo handleAddTask={handleAddTask} />
      }
      <TodoView data={cloneData}
        handleStatus={handleStatus}
        handleDelete={handleDelete}
        handleEditTodo={handleEditTodo} />
    </React.Fragment>
  );
}
const AllComponents = withRouter(AllComponent)

