import '../styles/comp-link.scss';

function Link(props) {

  const getComponent = () => {

    let data = props.data;
    
    let iconData = data['icon'];

    let icon = iconData!==undefined? (
      iconData['type']==='icon'?
        <span className={iconData['css']}>{iconData['text']}</span>:
        <img className={iconData['css']} src={iconData['src']} alt={iconData['alt']}/>
      ):
      null;

    let linkContent=<>{icon}{data['text']}</>;

    let component = (data['external link']?
      <a className={data['css']} href={data['href']} target="_blank" rel="noopener noreferrer">{linkContent}</a>:
      <a className={data['css']} href={data['href']}>{linkContent}</a>
    );

    return component;
  };

  return getComponent();
}

export default Link;