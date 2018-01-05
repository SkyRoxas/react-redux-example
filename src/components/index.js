import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPost} from '../actions'

class ItemList extends Component {
  componentDidMount() {
    this.props.fetchData('https://x-mall-api.beta2.hiiir-inc.com/api/app/v1/showCase?imageSize=small&showcaseGroup=home')
  }
  render() {
    if(this.props.isRequest){
      return(
        <div>loading</div>
      )
    }
    if(this.props.items.showcase){
      return(
        this.props.items.showcase.map((item)=>(
          <div key={item.showcaseId}>
            <div>showcaseID: {item.showcaseId}</div>
          </div>
        ))
      )
    }
    return(
      <div></div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.fetchPostSuccess,
    isRequest: state.fetchPostRequest
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(fetchPost(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
