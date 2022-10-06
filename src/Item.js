import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
	state = { mouseState: false }
	handlerMouseEvent = (flag) => {
		return () => {
			this.setState({ mouseState: flag })
		}
	}

	updateTodos = (id) => {
		return () => {
			this.props.updateTodos(id)
		}
	}

	deleteTodo = (id) => {
		return () => {
			if (window.confirm('Are you sure to delete?')) {
				this.props.deleteTodos(id)
			}
		}
	}

	render() {
		const { id, name, done } = this.props
		const { mouseState } = this.state
		return (
			<li style={{ background: mouseState ? '#ddd' : '#fff' }} onMouseEnter={this.handlerMouseEvent(true)} onMouseLeave={this.handlerMouseEvent(false)} >
				<label>
					<input type="checkbox" checked={done} onChange={this.updateTodos(id)} />
					<span>{name}</span>
				</label>
				<button className="btn btn-danger" onClick={this.deleteTodo(id)} style={{ display: mouseState ? 'block' : "none" }}>delete</button>
			</li>
		)
	}
}