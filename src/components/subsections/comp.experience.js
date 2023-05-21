import '../../styles/comp-experience.scss';

function Experience(props) {

  const clickClientProject = id => {
    let toggle = type => {
      let newActiveElem = document.getElementById(id+'-'+type);
      let oldActiveElem = newActiveElem.parentElement.querySelector('.active');
      oldActiveElem.classList.remove('active');
      newActiveElem.classList.add('active');
    };

    toggle('header');
    toggle('list');
  };

  const getComponent = () => {

    let data = props.data;

    let clientProjects = data['client-projects']!==undefined?
      <>
        <p className="client-project-intro">{data['client-projects']['title']}</p>
        <div className="client-project-section">
          <div className="client-project-header">
            {data['client-projects']['projects'].map((project,i)=>{
              let css = project['css']!==undefined?project['css']:'';
              let click = ()=>clickClientProject(project['id']);
              let id = project['id']+'-header';
              return <h3 key={i} id={id} className={css} onClick={click}>{project['title']}</h3>;
            })}
          </div>
          <div className="client-project-list">
            {data['client-projects']['projects'].map((project,i)=>{
              let css = project['css']!==undefined?project['css']:'';
              let id = project['id']+'-list';
              let responsibilities = project['responsibilities'].map((item,i)=><li key={i}>{item}</li>);
              return (
                <div className={'project-responsibilities '+css} key={i} id={id}>
                  <h3>{project['title']}</h3>
                  <h4>{project['subtitle']}</h4>
                  <ul>{responsibilities}</ul>
                </div>
                
              );
            })}
          </div>
        </div>
      </>:
      null;

    let component = (
      <div className={data['type']}>
        <h3>{data['title']} | {data['location']}</h3>
        <h4>{data['subtitle']}</h4>
        <ul>
          {data['responsibilities'].map((item,i)=><li key={i}>{item}</li>)}
        </ul>
        {clientProjects}
      </div>
    );

    return component;
  };

  return getComponent();
}

export default Experience;