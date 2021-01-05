import React, { Component } from 'react'
import './Compteur.css';
import Resultat from '../Composants/Resultat/Resultat.js';
import IncrBtn from '../Composants/IncrBtn/IncrBtn.js';
import {connect} from 'react-redux';  // pour connecter le store aux composants

class Compteur extends Component {

    state = {
        compteur : 0
    }

     calcul = (action) => {

        if(action === "plus1"){
            this.setState( ( statePrec ) => { return { compteur: statePrec.compteur + 1 } } )
        } 
        if(action === "moins1"){
            this.setState( ( statePrec ) => { return { compteur: statePrec.compteur - 1 } } )
        }
    
        
    }
    

    render() {
        return (
            <div className="cont">
            <div className="blocConmpt">
                {/* <Resultat valeur={this.state.compteur} /> */}
                {/* On remplace state.compteur par ctr et on rajoute props  pour que les chiffres proviennent directement du store*/}
                <Resultat valeur={this.props.ctr} />
            </div>
            <div className="contBtn">
                {/* <IncrBtn txt="Incremente" clicked={() => this.calcul("plus1")} /> */}
                {/* on remplace this.calcul("plus1") par this.props.incremente */}
                <IncrBtn txt="Incremente" clicked={this.props.incremente} />
                {/* <IncrBtn txt="Decremente" clicked={() => this.calcul("moins1")} /> */}
                <IncrBtn txt="Decremente" clicked={this.props.decremente} />
            </div>
        </div>
        )
    }
}

// premier paramettre de la methode connect
const mapStateToProps = state => {   // mapStateToProps: c'est le nom qu'on lui donne souvent mais on peut l'appeler comme on veut

    return {
        ctr: state.compteur   // ctr: pour compteur
    }
}
// 2e paramettre de la methode connect
const mapDispatchToProps = dispatch => { 
    return {
        incremente : () => dispatch({type: 'INCREMENTE'}),
        decremente : () => dispatch({type: 'DECREMENTE'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Compteur);
