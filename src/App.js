import Nav from './components/comp-nav';
import Section from './components/comp-section';

import { pageData,navData } from "./data";

function App() {

  const getComponent = () => {

    let component = (
      <div className="App">        
        {<Nav data={navData}/>}
        <div className="overlay">
          <div className="overlay-shadow">
            <div className="overlay-border">
              {<Section data={pageData['sections']['home']}/>}
              {<Section data={pageData['sections']['about']}/>}
              {<Section data={pageData['sections']['education']}/>}
              {<Section data={pageData['sections']['experience']}/>}
              {<Section data={pageData['sections']['projects']}/>}  
            </div>
          </div>
        </div>
      </div>
    );

    return component;
  };

  return getComponent();
}

export default App;