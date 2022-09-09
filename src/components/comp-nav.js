import '../styles/comp-nav.scss';

import Link from "./comp-link";

function Nav(props) {

  const getComponent = () => {

    let data = props.data;

    let component = (
      <div className="nav">
        <div className="nav-bar secondary">
          {data['secondary']['links'].map((linkData,i)=><Link key={i} data={linkData}/>)}
        </div>
        <div className="nav-bar primary">
          {data['primary']['links'].map((linkData,i)=><Link key={i} data={linkData}/>)}
        </div>
      </div>
    );

    return component;
  };

  return getComponent();
}

export default Nav;