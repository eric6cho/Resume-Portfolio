import '../../styles/comp-contents.scss';
import Emblem from '../comp-emblem';

function Contents(props) {

  const getComponent = () => {

    let data = {
      'About':['Introduction','Contact Links'],
      'Education':['University of Georgia','National University of Singapore'],
      'Experience':['Perficient','University of Georgia'],
      'Projects':['Synthetica','Pixel Memories','Image Mesh','Pixelfy','Remodel Storefront','Crypto Price Charts','WAND'],
    }

    let component = (
      <div className="contents-section">


        {Object.keys(data).map(section=>
          <a href={'#'+section} className='contents-main-section'>
     
            <div className="contents-section-title-container">
              <div className="contents-section-title">   
                <h3>{section}</h3>
              </div>
            </div>
            
            <div className='contents-subsection'>
              {data[section].map(subsection=><p>{subsection}</p>)}
            </div>
        
          </a>
        )}




      </div>  
    );

    return component;
  };

  return getComponent();
}

export default Contents;