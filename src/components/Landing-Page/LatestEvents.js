import React from "react";

class latestEvents extends React.Component {
  constructor(props){
    super(props);
    this.state = { e1:"", e11:"", p1: "", e2:"", e22:"", p2: "",e3:"", e33:"", p3: "",e4:"", e44:"",p4:""};
  }
  componentDidMount(){

    fetch("http://localhost:8000/events")
    .then(res => res.text()).then(res=>JSON.parse(res))
    //.then(res => console.log(res[0].title)
    .then(res => this.setState({ e1: res[0].title, e11:res[0].shortdesc, p1: res[0].img[0], e2: res[1].title, e22:res[1].shortdesc,p2: res[1].img[0], e3: res[2].title, e33:res[2].shortdesc,p3: res[2].img[0], e4: res[3].title, e44:res[3].shortdesc, p4: res[3].img[0]}));
  }
  render() {
    return (
      <latestEvents class="latestEvents">
        <div className="container-head">Latest Events</div>
        <div className="wrapper">
          <div id="card-1" className="card c1">
            <figure className="card__thumbnail">
              <img src= {this.state.p1} />
            </figure>
            <div className="card__body">
              <h3 className="title">{this.state.e1}</h3>
              <p>
                {this.state.e11}
              </p>
            </div>
          </div>
          <div id="card-1" className="card c2">
            <figure className="card__thumbnail">
            <img src= {this.state.p2} />
            </figure>
            <div className="card__body">
              <h3 className="title">{this.state.e2}</h3>
              <p>
                {this.state.e22}
              </p>
            </div>
          </div>
          <div id="card-1" className="card c3">
            <figure className="card__thumbnail">
            <img src= {this.state.p3} />
            </figure>
            <div className="card__body">
              <h3 className="title">{this.state.e3}</h3>
              <p>
                {this.state.e33}
              </p>
            </div>
          </div>
          <div id="card-1" className="card c4">
            <figure className="card__thumbnail">
            <img src= {this.state.p4} />
            </figure>
            <div className="card__body">
              <h3 className="title">{this.state.e4}</h3>
              <p>
                {this.state.e44}
              </p>
            </div>
          </div>
        </div>
      </latestEvents>
    );
  }
}
export default latestEvents;
