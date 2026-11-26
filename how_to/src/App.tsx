import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout';
import Preface from './pages/introduction/Preface';
import Introduction from './pages/introduction/Introduction';
import InterpretersVsCompilers from './pages/introduction/InterpretersVsCompilers';
import PhasesOfCompiler from './pages/introduction/PhasesOfCompiler';
import Shortcuts from './pages/introduction/Shortcuts';
import OptionsIntroduction from './pages/options/Introduction';
import LoxIntroduction from './pages/lox/Introduction';
import JlangIntroduction from './pages/jlang/Introduction';
import LuappIntroduction from './pages/luapp/Introduction';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Preface />} />
        <Route path="/introduction/introduction" element={<Introduction />} />
        <Route
          path="/introduction/interpreters-vs-compilers"
          element={<InterpretersVsCompilers />}
        />
        <Route
          path="/introduction/phases-of-compiler"
          element={<PhasesOfCompiler />}
        />
        <Route path="/introduction/shortcuts" element={<Shortcuts />} />
        <Route path="/options/introduction" element={<OptionsIntroduction />} />
        <Route path="/lox/introduction" element={<LoxIntroduction />} />
        <Route path="/jlang/introduction" element={<JlangIntroduction />} />
        <Route path="/luapp/introduction" element={<LuappIntroduction />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
