import { Home } from './Components/Pages/Home';
import { Company } from './Components/Pages/Company';
import { Contact } from './Components/Pages/Contact';
import { NewProject } from './Components/Pages/NewProject';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Router>
      <ul>
        <li>Home</li>
        <li>Contato</li>
      </ul>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Company' element={<Company />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/NewProject' element={<NewProject />} />
      </Routes>
    </Router>
  );
};
