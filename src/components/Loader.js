import React from "react";
import styled from "styled-components";

function Loader() {
  const Loader = styled.div`
    height: 100px;
    width: 100px;
    border-radius: 50%;
    border: 5px solid #ddd;
    border-top-color: #333;
    animation: rotate 1s infinite;
    @keyframes rotate {
      100% {
        rotate: 360deg;
      }
    }
  `;
  return <Loader></Loader>;
}

export default Loader;
