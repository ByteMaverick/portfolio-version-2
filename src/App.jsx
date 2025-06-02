import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Projects } from "./pages/Projects";
import { AboutMe } from "./pages/AboutMe";
import { Contact } from "./pages/Contact";
import { Blog } from "./pages/Blog";
import { ProjectDetails } from "./pages/ProjectDetails";
import { Toaster } from "@/components/ui/toaster";


function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} /> {/* <-- New route */}
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
