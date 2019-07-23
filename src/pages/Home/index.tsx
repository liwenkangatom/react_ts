import Types from "MyTypes";
import * as React from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";

const mapStateToProps = (state: Types.RootState) => ({
  count: state.counters.reduxCounter
});

const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) =>
  bindActionCreators(
    {
      onIncrement: incrementWithDelay
    },
    dispatch
  );
export interface IHomeProps {}

export class Home extends React.Component<IHomeProps> {
  public render() {
    return (
      <div>
        <h2>Home page</h2>
      </div>
    );
  }
}
export const HomeConnected = connect(mapStateToProps, mapDispatchToProps)(Home);
