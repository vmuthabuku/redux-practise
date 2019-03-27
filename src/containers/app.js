import React, { Component } from 'react'
import { connect } from 'react-redux'
import { movieslist, directorslist } from "../actions"
import { bindActionCreators } from 'redux'
import Movieslist from '../components/moviesList'

class App extends Component {
    
    componentWillMount(){
        this.props.movieslist()
        this.props.directorslist()

      
    }


    render() { 
        console.log(this.props)
        return ( 
            <div>
              <Movieslist {...this.props}/>
            </div>

         );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.movies
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({movieslist, directorslist},dispatch)
}


 
export default connect( mapStateToProps, mapDispatchToProps )(App);