import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "./pages/HomePage";
import { FolderDetail } from "./pages/FolderDetail";
import { LogoGradesIcon } from "./conponents/logo/logo";
import { GlobalProvider } from "./contexts/global";
import { WriterPageGrades } from "./pages/writerPageGrades";

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route>
            <Route path="/homeScreen" element={<HomeScreen />} />
            <Route path="/folder/:id" element={<FolderDetail />} />
            <Route path="/logo" element={<LogoGradesIcon />} />
            <Route path="/writerGrade" element={<WriterPageGrades />} />
          </Route>
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
