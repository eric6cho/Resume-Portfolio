import '../../styles/comp-education.scss';

function Education(props) {

  const getComponent = () => {

    let data = props.data;

    let component = (
      <div className={data['type']}>
        <h3>{data['title']}</h3>
        <h4>{data['subtitle'].map(s=><>{s}<br/></>)}</h4>
        {data['rows'].map((row,i)=> 
          <div className="section-row" key={i}>
            <p className="row-title">{row['title']}</p>
            <p>{row['entry']}</p>
          </div>
        )} 
      </div>
    );

    return component;
  };

  return getComponent();
}

export default Education;