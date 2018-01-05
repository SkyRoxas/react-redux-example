import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPost} from '../actions'

class ItemList extends Component {
  componentDidMount(){
    this.props.fetchData('https://x-mall-api.beta2.hiiir-inc.com/api/app/v1/showCase?imageSize=small&showcaseGroup=home')
  }
  render(){
    console.log(this.props)
    return(
      <h1>Hello World !!</h1>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(fetchPost(url))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
