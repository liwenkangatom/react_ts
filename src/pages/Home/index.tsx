import Types from "MyTypes";
import * as React from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { todosActions, todosSelectors } from "../../features/todos";

const mapStateToProps = (state: Types.RootState) => ({
  todos: state.todos.todos,
  filteredTodos: todosSelectors.getFilteredTodos(state.todos)
});


const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) =>
  bindActionCreators({
    add: todosActions.add
  }, dispatch);
// dispatch 类型报错， 是因为在诸多类型中缺少严格符合anyAction的类型即 {type: string}, 导致通不过检查
function List(props: { title: string }) {
  return (
    <div>
      <h1>
        {props.title}
      </h1>
    </div>
  );
}
type IHomeProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    label: string;
  };
export class Home extends React.Component<IHomeProps> {
  public render() {
    const { add, todos } = this.props;
    return (
      <div>
        <h2>Home page</h2>
        <button onClick={() => add("hello")}>Add</button>
        <div className="todoBox">
          {todos.map(todo => List(todo))}
        </div>
      </div>
    );
  }
}
export const HomeConnected = connect(mapStateToProps, mapDispatchToProps)(Home);
