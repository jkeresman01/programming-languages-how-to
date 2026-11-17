import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Preface from './pages/introduction/Preface';
import Introduction from './pages/introduction/Introduction';
import Jargon from './pages/introduction/Jargon';
import InterpretersVsCompilers from './pages/introduction/InterpretersVsCompilers';
import PhasesOfCompiler from './pages/introduction/PhasesOfCompiler';
import Shortcuts from './pages/introduction/Shortcuts';
import SmallBooberIntroduction from './pages/sealox/Introduction';
import DataTypes from './pages/sealox/DataTypes';
import Expressions from './pages/sealox/Expressions';
import Statements from './pages/sealox/Statements';
import ControlFlow from './pages/sealox/ControlFlow';
import JlangIntroduction from './pages/jlang/Introduction';
import LuappIntroduction from './pages/luapp/Introduction';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Preface />} />
        <Route path="/introduction/introduction" element={<Introduction />} />
        <Route path="/introduction/jargon" element={<Jargon />} />
        <Route path="/introduction/interpreters-vs-compilers" element={<InterpretersVsCompilers />} />
        <Route path="/introduction/phases-of-compiler" element={<PhasesOfCompiler />} />
        <Route path="/introduction/shortcuts" element={<Shortcuts />} />
        <Route path="/sealox/introduction" element={<SmallBooberIntroduction />} />
        <Route path="/sealox/data-types" element={<DataTypes />} />
        <Route path="/sealox/expressions" element={<Expressions />} />
        <Route path="/sealox/statements" element={<Statements />} />
        <Route path="/sealox/control-flow" element={<ControlFlow />} />
        <Route path="/jlang/introduction" element={<JlangIntroduction />} />
        <Route path="/luapp/introduction" element={<LuappIntroduction />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
