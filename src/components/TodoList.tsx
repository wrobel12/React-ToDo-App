import { connect } from 'react-redux'
import ToDoListContainer from '../containers/ToDoListContainer'

const mapStateToProps = state => ({
    todos: state.todos
  })

export default connect(mapStateToProps)(ToDoListContainer)