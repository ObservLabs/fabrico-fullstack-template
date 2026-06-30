import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFound from "./pages/NotFound";
import { FabricoProvider } from "@fabrico/sdk/react";
import { fabrico } from "./lib/fabrico";
import Home from "./pages/Home";

function App() {
  return (
    <FabricoProvider client={fabrico}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </FabricoProvider>
  );
}

export default App;