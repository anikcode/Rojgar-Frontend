import React, { useEffect } from "react";
import buyIceCream from "../redux/actions/iceCreamActions";
import { connect } from "react-redux";
import { GetDetails } from "../services/apis";

function IceCreamContainer(props) {
  useEffect(() => {
    GetDetails();
  }, []);
  return (
    <div className="App">
      <h2>Number of IceCream - {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
