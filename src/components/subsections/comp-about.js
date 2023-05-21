import '../../styles/comp-about.scss';

import Link from "../comp-link";

function About(props) {

  const getComponent = () => {

    let data = props.data;

    let component = (
      <div className={data['type']}>
        <div className="text-container">
          <h3>Hi :)</h3>
          {data['text-container'].map((text,i)=><p key={i}>{text}</p>)}
        </div>
        <div className="link-container">
            <h3>{data['link-container']['header']}</h3>
            <h4>{data['link-container']['subheader']}</h4>
            <div className="button-container">
              {data['link-container']['links'].map((linkData,i)=><Link key={i} data={linkData}/>)}
            </div>
         </div>    
      </div>
    );

    return component;
  };

  return getComponent();
}

export default About;