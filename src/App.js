import React, { Component } from 'react';
import { Router, Route, Link, NavLink } from "react-router-dom";
import './App.css';
import TodoView from "./Todo/todo"
import AddTodo from "./Todo/addtodo";
import EditTodo from "./Todo/EditTodo";
import createBrowserHistory from "history/createBrowserHistory";
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleCompleteTask, handleDeleteTask, handleAddTask, handleCheckedBox, handleEditTask, handleUpdateEditTask, handleDeleteAll, handleDeleteSelectedTask } from "./actions/todo.actions"
const customHistory = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleStatus = (name) => {
    let data = [...this.props.data];
    let index = data.findIndex(d => d.taskname === name);
    this.props.handleCompleteTask(index, name);
  }
  handleCheckedBox = (name, checked) => {
    let data = [...this.props.data];
    let index = data.findIndex(d => d.taskname === name);
    this.props.handleCheckedBox(index, name, checked);
  }

  handleDelete = (obj) => {
    this.props.handleDeleteTask(obj.taskname);
  }

  handleAddTask = (taskname) => {
    if (!taskname) return;
    this.props.handleAddTask(taskname);
  }

  handleEditTodo = (taskname) => {
    this.props.handleEditTask(taskname);
  }
  handleUpdateTodo = (prevtaskname, taskname) => {
    let data = [...this.props.data];
    let index = data.findIndex(d => d.taskname === prevtaskname);
    this.props.handleUpdateEditTask(index, taskname);
  }
  handleDeleteSelected = (data) => {
    this.props.handleDeleteSelectedTask(data)
  }
  handleDeleteAll = () => {
    this.props.handleDeleteAll()
  }
  render() {
    const { data, editText } = this.props;
    return (
      <div>
        <Router history={customHistory}>
          <div className="App-header">
            <nav style={{ width: '60vw' }}>
              <ul style={{ display: 'flex', width: '100%', padding: 0 }}>
                <li style={{ listStyleType: 'none', flex: 1 }}>
                  <NavLink exact to="/" activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                  }}>All Task</NavLink>
                </li>
                <li style={{ listStyleType: 'none', flex: 1, textAlign: 'center' }}>
                  <NavLink exact to="/completed/" to={{
                    pathname: "/completed/",
                    state: { completed: true }
                  }} activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                  }}>Complete Task</NavLink>
                </li>
                <li style={{ listStyleType: 'none', flex: 1, textAlign: 'end' }}>
                  <NavLink exact to="/completed/" to={{
                    pathname: "/incompleted/",
                    state: { completed: false }
                  }} activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                  }}>InComplete Task</NavLink>
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
                handleDeleteSelected={this.handleDeleteSelected}
                handleDeleteAll={this.handleDeleteAll}
                handleCheckedBox={this.handleCheckedBox}
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
                handleDeleteSelected={this.handleDeleteSelected}
                handleDeleteAll={this.handleDeleteAll}
                handleCheckedBox={this.handleCheckedBox}
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
                handleDeleteSelected={this.handleDeleteSelected}
                handleDeleteAll={this.handleDeleteAll}
                handleCheckedBox={this.handleCheckedBox}
              />
            }} />

          </div>

        </Router>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    data: store.todos.data,
    editText: store.todos.editText
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    handleCompleteTask: handleCompleteTask,
    handleDeleteTask: handleDeleteTask,
    handleAddTask: handleAddTask,
    handleEditTask: handleEditTask,
    handleUpdateEditTask: handleUpdateEditTask,
    handleDeleteSelectedTask: handleDeleteSelectedTask,
    handleDeleteAll: handleDeleteAll,
    handleCheckedBox: handleCheckedBox
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

const AllComponent = (props) => {
  const { editText, location, handleUpdateTodo, handleCheckedBox, handleDeleteAll, handleDeleteSelected, handleAddTask, data, handleStatus, handleDelete, handleEditTodo } = props;
  let cloneData = [...data]
  if (props.location.state) {
    let completed = location.state.completed;
    cloneData = cloneData.filter((d) => { return d.status === completed })
  }
  return (
    <div>
      {
        editText ? <EditTodo editText={editText} handleUpdateTodo={handleUpdateTodo} /> : <AddTodo handleAddTask={handleAddTask} />
      }
      <TodoView data={cloneData}
        handleStatus={handleStatus}
        handleDelete={handleDelete}
        handleEditTodo={handleEditTodo}
        handleDeleteSelected={handleDeleteSelected}
        handleDeleteAll={handleDeleteAll}
        handleCheckedBox={handleCheckedBox} />
    </div>
  );
}
const AllComponents = withRouter(AllComponent)

