import React from "react";
class news extends React.Component {
    constructor(props){
        super(props);
        this.state = {news1:"", news2:"", news3:"", news4:"", news5:"", a1:"", a11:"", a2:"", a22:"",a3:"", a33:"",a4:"", a44:"", a5:"", a55:"", a6:"",a66:""};
      }
      componentDidMount(){
        fetch("http://localhost:8000/news")
        .then(res => res.text()).then(res=>JSON.parse(res))
        //.then(res => console.log(res[0].title)
        .then(res => this.setState({ news1: res[0].title, news2: res[1].title, news3: res[2].title, news4:res[3].title, news5:res[4].title }));
        fetch("http://localhost:8000/announcements")
        .then(res => res.text()).then(res=>JSON.parse(res))
        //.then(res => console.log(res[0].title)
        .then(res => this.setState({ a1: res[0].title,a11:res[0].shortdesc, a2: res[1].title,a22:res[1].shortdesc, a3: res[2].title,a33:res[2].shortdesc, a4:res[3].title,a44:res[3].shortdesc,a5: res[4].title,a55:res[4].shortdesc, a6:res[5].title,a66:res[5].shortdesc, }));
      }
    render() {
        return (
            <news className="news">
                <div className="container-head" id= "news-container-head">News, Events & Stories</div><br></br>
                <div className="news-container">
                    <div className="news-left-container">
                        <h3 class="h3-heads">Recent News</h3>
                        <ul>
                            <li>{this.state.news1}&#x23F5;</li>
                            <hr></hr>
                            <li>{this.state.news2}&#x23F5;</li>
                            <hr></hr>
                            <li>{this.state.news3}&#x23F5;</li>
                            <hr></hr>
                            <li>{this.state.news4}&#x23F5;</li>
                            <hr></hr>
                            <li>{this.state.news5}&#x23F5;</li>
                            <hr />
                            <h4><a href="#">ALL STORIES&#x23F5; </a></h4>
                        </ul>

                    </div>
                    <div className="news-right-container">
                        <h3 className="h3-heads">Announcements</h3>
                        <div className="news-right-sub-container">
                            <div className="hz-box">
                                <div class="an-box" id="n1">
                                    <h3>{this.state.a1}</h3>
                                    <h4>{this.state.a11}</h4>
                                </div>
                                <div class="an-box" id="n2">
                                    <h3>{this.state.a2}</h3>
                                    <h4>{this.state.a22}</h4>
                                </div>
                            </div>
                            <div className="hz-box">
                                <div class="an-box" id="n3">
                                    <h3>{this.state.a3}</h3>
                                    <h4>{this.state.a33}</h4>
                                </div>
                                <div class="an-box" id="n4">
                                    <h3>{this.state.a4}</h3>
                                    <h4>{this.state.a44}</h4>
                                </div>
                            </div>
                            <div className="hz-box">
                                <div class="an-box" id="n3">
                                    <h3>{this.state.a5}</h3>
                                    <h4>{this.state.a55}</h4>
                                </div>
                                <div class="an-box" id="n4">
                                    <h3>{this.state.a6}</h3>
                                    <h4>{this.state.a66}</h4>
                                </div>
                            </div>
                            <h4 id = "browse"><a href="#">BROWSE ALL STORIES&#x23F5; </a></h4>

                        </div>
                    </div>
                </div>
            </news>
        );
    }
}
export default news;
