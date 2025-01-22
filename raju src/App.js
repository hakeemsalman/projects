import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideNav from './components/Navbar/SideNav';
import Header from './components/mainSection/Header';
import MainContent from './components/mainSection/MainContent';
import LocationVisit from './components/visitLocation/LocationVisit';
// import AddedLocations from './components/sections/AddedLocations'; // Create this component
// import TotalLocations from './components/sections/TotalLocations'; // Create this component

function App() {
  console.log('Rendering App Component');
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <SideNav /> {/* Side navigation will remain visible */}
        <div style={{ flex: 1 }}>
          <Routes>
            {/* Route for the Home page */}
            <Route 
              path="/" 
              element={
                <>
                  <Header /> 
                  <MainContent />
                </>
              } 
            />
            {/* Route for the Added Locations page */}
            <Route path="/added-locations" element={ <MainContent />} />
            <Route path="/location/:id" element={<LocationVisit />} />
            {/* Route for the Total Locations page */}
            {/* <Route path="/total-locations" element={<TotalLocations />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
