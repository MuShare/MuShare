import React from 'react';
import ReactDOM from 'react-dom';
import '../vendor/jquery.roundabout.min';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('.roundabout_box ul').roundabout({
      duration: 1000,
      minScale: 0.6,
      autoplay: true,
      autoplayDuration: 5000,
      minOpacity: 0,
      maxOpacity: 1,
      reflect: true,
      startingChild: 3,
      autoplayInitialDelay: 5000,
      autoplayPauseOnHover: true,
      enableDrag: true
    });
  }

  render() {
    return (
      <div className="home">
        <div className="carousel exhibition_hall">
          <div className="ui container roundabout_box">
            <ul>
              <li>
                <img src="/image/zt1.png" alt=""/>
              </li>
              <li>
                <img src="/image/zt2.png" alt=""/>
              </li>
              <li>
                <img src="/image/zt3.png" alt=""/>
              </li>
              <li>
                <img src="/image/zt4.png" alt=""/>
              </li>
            </ul>
          </div>
          <div class="clear"></div>
        </div>
        <div className="ui container hot">
          <div className="ui medium header">
            本周热门
          </div>
          <div className="ui four link cards">
            <div className="card">
              <div className="image">
                <img src="/image/avatar.png"/>
              </div>
              <div className="content">
                <div className="description">
                  test
                </div>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src="/image/avatar.png"/>
              </div>
              <div className="content">
                <div className="description">
                  test
                </div>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src="/image/avatar.png"/>
              </div>
              <div className="content">
                <div className="description">
                  test
                </div>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src="/image/avatar.png"/>
              </div>
              <div className="content">
                <div className="description">
                  test
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ui container recommend">
          <div className="ui medium header">
            木屑推荐
          </div>
          <div className="ui four link cards">
            <div className="card">
              <div className="image">
                <img src="/image/avatar.png"/>
              </div>
              <div className="content">
                <div className="description">
                  test
                </div>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src="/image/avatar.png"/>
              </div>
              <div className="content">
                <div className="description">
                  test
                </div>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src="/image/avatar.png"/>
              </div>
              <div className="content">
                <div className="description">
                  test
                </div>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src="/image/avatar.png"/>
              </div>
              <div className="content">
                <div className="description">
                  test
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ui container original">
          <div className="ui medium header">
            最新原创
          </div>
          <div className="ui four link cards">
            <div className="card">
              <div className="image">
                <img src="/image/avatar.png"/>
              </div>
              <div className="content">
                <div className="description">
                  test
                </div>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src="/image/avatar.png"/>
              </div>
              <div className="content">
                <div className="description">
                  test
                </div>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src="/image/avatar.png"/>
              </div>
              <div className="content">
                <div className="description">
                  test
                </div>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src="/image/avatar.png"/>
              </div>
              <div className="content">
                <div className="description">
                  test
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;