import '../../styles/comp-contents.scss';

function Contents(props) {

  const getComponent = () => {

    let data = props.data;
    console.log(Object.keys(data['data']));

    let component = (
      <div className="contents-section">
        {Object.keys(data['data']).map(section=>
          <a href={'#'+section} className='contents-main-section'>
            <div className="contents-section-title-container">
              <div className="contents-section-title">   
                <h3>{section}</h3>
              </div>
            </div>
            <div className='contents-subsection'>
              {data['data'][section].map(subsection=><p>{subsection}</p>)}
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