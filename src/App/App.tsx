import React from "react";
import styled from "styled-components";
import { ReviewForm } from "../components";

function App() {
  return (
    <AppContainer>
      <ReviewForm />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  padding: 40px;
`;

export default App;
