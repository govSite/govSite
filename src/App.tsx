import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./LandingPage";
import { Header } from "./lib/Header";
import { Form } from "./Form";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      <Header />
      {/* <LandingPage /> */}
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
