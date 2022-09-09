import '../../styles/comp-project.scss';

import Link from "../comp-link";

function Project(props) {

  const getComponent = () => {

    let data = props.data;

    let component = (
      <div className={data['type']}>
        <div className="image-set-container">
          {data['images'].map((image,i)=>
            <div key={i} className="image-wrapper">
              <div className="image-container">
                <img src={image} alt=""></img>
              </div>
            </div>
          )}
        </div>
        <div className="project-info">
          <a className="text-container" href={data['project-link']} target="_blank" rel="noopener noreferrer">
            <h3>{data['text-container']['title']}</h3>
            <h4>{data['text-container']['subtitle']}</h4>
            {data['text-container']['text'].map((text,i)=><p key={i}>{text}</p>)}
          </a>
          <div className="link-container">
            {data['links'].map((linkData,i)=><Link key={i} data={linkData}/>)}
          </div>
        </div>  
      </div>
    );

    return component;
  };

  return getComponent();
}

export default Project;