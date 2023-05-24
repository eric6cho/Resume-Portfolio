import '../styles/comp-section.scss';

import About from "./subsections/comp-about";
import Home from "./subsections/comp-home";
import Education from "./subsections/comp-education";
import Experience from './subsections/comp.experience';
import Project from "./subsections/comp-project";
import Contents from './subsections/comp-contents';

function Section(props) {

  const getComponent = () => {

    let data = props.data;

    if(data['id']==='Home') 
      return (
        <div className="section" id={data['id']}>
          <Home data={data}/>
        </div>
      );

    let sectionHeader = 
      <div className="section-header">
        <span className="material-icons">{data['header']['icon']}</span>
        <h2>{data['header']['title']}</h2>
      </div>;

    let subsections = data['subsections'].map((subsectionData,i)=>{
      let content;
      let type = subsectionData['type'];

      if(type==='contents-section') content = <Contents data={subsectionData}/>;
      else if(type==='about-section') content = <About data={subsectionData}/>;
      else if(type==='education-section') content = <Education data={subsectionData}/>;
      else if(type==='experience-section') content = <Experience data={subsectionData}/>;
      else if(type==='project-section') content = <Project data={subsectionData}/>;

      return (
        <div className='subsection-container'>
          <div key={i} className="subsection">{content}</div>
        </div>
      );
    });

    let component =  
      <div className="section" id={data['id']}>
        {sectionHeader}
        <div className="section-grid">
          {subsections}
        </div>
      </div>;

    return component;
  };

  return getComponent();
}

export default Section;