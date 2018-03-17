import React from 'react';

class Message extends React.Component{

	prerender = (isUser) => {
		if (isUser)
		{
			return (
					<p className="user-message">
					{ this.props.details.message }
					</p>
				)
		}
		else{
			return (
				<p className="not-user-message">
					<strong>{ this.props.details.pseudo } : </strong> 
					 { this.props.details.message }
					</p>
				)
		}
	}

	render(){
		return this.prerender(this.props.isUser(this.props.details.pseudo));
	}

	static propTypes = {
		details: React.PropTypes.Object.isRequired;
	}
}

export default Message;	