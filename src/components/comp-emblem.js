import '../styles/comp-emblem.scss';

function Emblem(props) {

  const getComponent = () => {

    let component = (
        <div className="emblem">
          <div className="center">
          
            <div className="circle c-1"></div>
            <div className="circle c-2"></div>

            <div className="line l-1"></div>
            <div className="line l-2"></div>
            <div className="line l-3"></div>
            <div className="line l-4"></div>  
            <div className="line l-5"></div>
            <div className="line l-6"></div>
            <div className="line l-7"></div>
            
            <div className="square s-1"></div>
            <div className="square s-2"></div>
            <div className="square s-3"></div>
            <div className="square s-4"></div>
            <div className="square s-5"></div>
            <div className="square s-6"></div>
            <div className="square s-7"></div>
            <div className="square s-8"></div>
          
          </div>
        </div>
    );

    return component;
  };

  return getComponent();
}

export default Emblem;