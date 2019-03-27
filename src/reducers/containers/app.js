import React, { Component } from 'react'
import { connect } from 'react-redux'
import { movieslist, directorslist } from "../../actions"
import { bindActionCreators } from 'redux'

class App extends Component {
    
    componentWillMount(){
        this.props.movieslist()
        this.props.directorslist()

      
    }

    renderMovies =(movies)=>( 
        
        movies ?
        movies.map(item =>(
            <div>{item.name}</div>
        )):null )

    

    render() { 
        console.log(this.props)
        return ( 
            <div>
               {this.renderMovies(this.props.data.movies)}
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