import React from 'react'
import {Link, Route} from 'react-router-dom'
import NumbersContainer from './compoents/NumbersApp/NumbersContainer'
import UsersList from './compoents/users/UsersList'
import Home from './compoents/users/Home'
import PostsList from './compoents/Posts/PostsList'

function App(props){
  return (
    <div>
      <h1>Random Number Generator</h1>
      <NumbersContainer />
      <Link to="/">Home</Link> <b> | </b>
      <Link to="users" >Users</Link> <b> | </b>
      <Link to="posts" >Posts</Link>

      <Route path='/' component={Home} exact={true} />
      <Route path='/users' component={UsersList} />
      <Route path='/posts' component={PostsList} />
    </div>
  )
}

export default App;
