import '../../styles/comp-about.scss';

import Link from "../comp-link";

function About(props) {

  const getComponent = () => {

    let data = props.data;

    let component = (
      <div className={data['type']}>
        <div className="text-container">
          {data['text-container'].map((text,i)=><p key={i}>{text}</p>)}
        </div>
        <div className="link-container">
          <h4>{data['link-container']['header']}</h4>
          {data['link-container']['links'].map((linkData,i)=><Link key={i} data={linkData}/>)}
        </div>    
      </div>
    );

    return component;
  };

  return getComponent();
}

export default About;