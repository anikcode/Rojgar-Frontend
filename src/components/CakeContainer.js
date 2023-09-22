import React from "react";
import buyCake from "../redux/actions/cakeActions";
import { connect } from "react-redux";

function CakeContainer(props) {
  return (
    <div className="App">
      <h2>Number of Cake - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
