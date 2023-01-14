import "./styles.scss";

const FeedbackForm = () => {
  return (
    <div className="background">
        <div className="container">
          <div className="screen">
            <div className="screen-header">
              {/* <div className="screen-header-left">
                <div className="screen-header-button close"></div>
                <div className="screen-header-button maximize"></div>
                <div className="screen-header-button minimize"></div>
              </div>
              <div className="screen-header-right">
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
              </div> */}
            </div>
            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <span>Feedback</span>
                  <span>Form</span>
                </div>
                {/* <div className="app-contact"><i className="fa-brands fa-twitter"></i> : <a href="https://twitter.com/Bisht_6903" target="_blank">@Bisht_6903</a></div> */}
              </div>
              <div className="screen-body-item">
                <div className="app-form">
                  <div className="app-form-group">
                    <input className="app-form-control" placeholder="NAME"/>
                  </div>
                  <div className="app-form-group">
                    <input className="app-form-control" placeholder="EMAIL"/>
                  </div>
                  
                  <div className="app-form-group message">
                    <input className="app-form-control" placeholder="Write Feedback"/>
                  </div>
                  <div className="app-form-group buttons">
                    <button className="app-form-button">CANCEL</button>
                    <button className="app-form-button">SEND</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
  );
};

export default FeedbackForm;
