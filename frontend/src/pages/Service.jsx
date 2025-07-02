import React from 'react';
import styled from 'styled-components';
// import chandrayaan from './swarajya_2019-08_9d943609-9581-4f9d-a7e3-32e79ffdd4c2_chandrayaan_.jpg';

const Container = styled.div`
  padding: 20px;
  margin-top:6rem;
  text-align: center;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  margin-bottom: 10px;
`;

const Description = styled.p`
  max-width: 1000px;
  margin: 0 auto 30px auto;
  line-height: 1.6;
`;

const ServiceCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Card = styled.div`
  background-image: ${({ bg }) => (bg ? `url(${bg})` : 'none')};
  background-size: cover;
  background-position: center;
  color: #fff;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  padding: 50px;
  width: 300px;
  flex: 9 9 400px; /* Adjust flex so cards fill available space */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    transition: background 0.3s ease;
    z-index: 0;
  }

  &:hover::before {
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  }

  &:hover {
    transform: scale(1.05) rotate(1deg);
    box-shadow: 0px 15px 30px rgba(232, 232, 232, 0.3);
  }

  & > * {
    position: relative;
    z-index: 1;
    word-wrap: break-word;
    overflow-wrap: break-word;
    margin: 0;
  }
`;

const OurService = () => {
  return (
    <Container>
      <div className="section-title mb-30">
        <span className="wow fadeInDown" data-wow-delay=".2s">
         Our Services
        </span>
        <h2 className="mb-15 wow fadeInUp" data-wow-delay=".4s">
          Welcome to Our App
        </h2>
      </div>
      <Description className="mb-35 wow fadeInUp" data-wow-delay=".6s">
        We provide a comprehensive crime analysis platform that helps users stay informed and safe. Our Comparative Crime Analysis feature allows users to compare crime statistics across different regions, offering valuable insights into safety trends. With Interactive Trend Visualizations, users can explore dynamic charts that reveal evolving crime patterns over time. Our Safety Risk Assessment analyzes various factors to identify high-risk areas, ensuring better decision-making for personal and community safety.
      </Description>
      <ServiceCards>
        <Card bg="https://img.freepik.com/premium-photo/big-data-visualization-3d-technology-wave-analytics-representation-digital-background-wave-particles-big-data_105800-129.jpg?semt=ais_hybrid">
          <h2 style={{ color: 'yellow' }}> Safety Risk Assessment </h2>
          <p style={{ color: 'white' }}> Get detailed insights into risk factors in various locations to stay informed.</p>
        </Card>
        <Card bg="https://addepto.com/wp-content/uploads/2023/12/featured-images_blog-26.jpg">
          <h2 style={{ color: 'yellow' }}>Comparative Analysis</h2>
          <p style={{ color: 'white' }}>Accurately compare statistics across regions for clear insights.</p>
        </Card>
        <Card bg="https://img.pikbest.com/wp/202346/stock-market-trend-isolated-red-and-green-minimal-trading-graph-in-3d-rendering-illustrating-the-trending-analysis-of-data_9728760.jpg!w700wp">
          <h2 style={{ color: 'yellow' }}>Trend Visualizations</h2>
          <p style={{ color: 'white' }}>Engage with dynamic charts that reveal evolving crime trends.</p>
        </Card>
        <Card bg="https://img.freepik.com/free-vector/warning-alert-dark-background-protection-attention_1017-50558.jpg">
          <h2 style={{ color: 'yellow' }}>Safety Analysis</h2>
          <p style={{ color: 'white' }}>Analyze and understand risk factors in various areas for enhanced safety.</p>
        </Card>
        <Card bg="https://www.shutterstock.com/shutterstock/videos/3676041711/thumb/11.jpg?ip=x480">
          <h2 style={{ color: 'yellow' }}>Real-Time Alerts</h2>
          <p style={{ color: 'white' }}>Receive immediate notifications on critical crime events in your region.</p>
        </Card>
      </ServiceCards>
    </Container>
  );
};

export default OurService;