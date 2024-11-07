import React from "react";
import BookSearch from "./components/BookSearch";

import { AppContainer, Title, NameSpan } from "./styled-components";

function App() {
  return (
    <AppContainer>
      <Title>
        Book Finder <NameSpan>@Keerthana</NameSpan>
      </Title>
      <BookSearch />
    </AppContainer>
  );
}

export default App;
