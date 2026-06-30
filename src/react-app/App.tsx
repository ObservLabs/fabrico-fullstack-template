import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
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
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </FabricoProvider>
  );
}

export default App;