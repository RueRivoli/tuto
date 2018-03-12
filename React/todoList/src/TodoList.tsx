import * as React from 'react'
import { render } from 'react-dom'

export default class TodoList extends React.Component{
    render(){
        return <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <input className="new-todo" placeholder="What needs to be done?"/>
            </header>
        <section className="main">
            <input className="toggle-all" type="checkbox"/>
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list"><li data-id="1520715215587" className=""><div className="view"><input className="toggle" type="checkbox"/><label>vanilla</label><button className="destroy"></button></div></li><li data-id="1520715228085" className=""><div className="view"><input className="toggle" type="checkbox"/><label>Stracciatela</label><button className="destroy"></button></div></li><li data-id="1520715234566" className=""><div className="view"><input className="toggle" type="checkbox"/><label>White chocolate</label><button className="destroy"></button></div></li></ul>
        </section>
        <footer className="footer">
            <span className="todo-count"><strong>3</strong> items left</span>
            <ul className="filters">
                <li>
                    <a href="#/" className="selected">All</a>
                </li>
                <li>
                    <a href="#/active">Active</a>
                </li>
                <li>
                    <a href="#/completed">Completed</a>
                </li>
            </ul>
            <button className="clear-completed"></button>
        </footer>
        </section>
    }
}

