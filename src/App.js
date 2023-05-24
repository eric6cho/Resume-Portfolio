import Nav from './components/comp-nav';
import Section from './components/comp-section';
import Contents from './components/subsections/comp-contents';

import { pageData,navData } from "./data";

function App() {

  const getComponent = () => {

    let component = (
      <div className="App">        
        {<Nav data={navData}/>}
        <div className="overlay-border">
          <div className="overlay">
            
              <div className="gradient-overlay top"></div>
              <div className="gradient-overlay bottom"></div>
            <div className="overlay-inner">
              {<Section data={pageData['sections']['home']}/>}
              {<Section data={pageData['sections']['contents']}/>}
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