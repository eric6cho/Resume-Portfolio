import '../../styles/comp-home.scss';

function Home(props) {

  const getComponent = () => {

    let data = props.data;

    let component = (
      <div className="home-section">
        <h1>{data['title']}</h1>
        <div className="description-section">
          {data['description'].map((text,i)=><p key={i}>{text}</p>)}
        </div>
      </div>  
    );

    return component;
  };

  return getComponent();
}

export default Home;