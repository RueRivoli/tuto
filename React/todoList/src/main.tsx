import * as React from 'react'
import { render } from 'react-dom'
import TodoList from './TodoList'


render(
    React.createElement(div),
    <TodoList/>,
    <div>Salut les gens</div>,
    document.getElementById('app') as Element
)
