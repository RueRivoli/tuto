import React from 'react';

class Connexion extends React.Component{

	gotoChat = (e) => {
		e.preventDefault();
		//Récupérer le pseudo
		const pseudo = this.pseudoInput.value;
		//Changer l'URL
		this.context.router.transitionTo(`pseudo/${pseudo}`);
	}

	render(){
		return (
		<div className="connexionBox" onSubmit={(e) => this.gotoChat(e)}>
			<form className="connexion">
				<input type="text" placeholder="pseudo" required ref={ input => {this.pseudoInput = input}}/>
				<button type="submit">GO</button>
			</form>
		</div>
		)
	}

	static contextTypes = {
		router: React.PropTypes.object
	}
}

export default Connexion;