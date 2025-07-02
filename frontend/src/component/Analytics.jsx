import './analytics.css';
export const Analytics = () => {
    return (
      <section className="analytics-section">
        <div className="analytics-container">
          <div className="analytics-card">
            <h2 className="analytics-number blue">50+</h2>
            <p className="analytics-text">Registered Users</p>
          </div>
          <div className="analytics-card">
            <h2 className="analytics-number green">100,000+</h2>
            <p className="analytics-text">Happy Clients</p>
          </div>
          <div className="analytics-card">
            <h2 className="analytics-number purple">500+</h2>
            <p className="analytics-text">Well-known Certificates</p>
          </div>
          <div className="analytics-card">
            <h2 className="analytics-number red">24/7</h2>
            <p className="analytics-text">Services</p>
          </div>
        </div>
      </section>
    );
  };