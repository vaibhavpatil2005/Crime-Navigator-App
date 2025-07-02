import React, { useEffect, useState } from "react";
import shape6 from "../assets/img/shapes/shape-6.svg";

const Blog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://newsdata.io/api/1/news?apikey=pub_6960062d2260ccf3fff5fff3daf0e8fe267b6&q=crime&country=in&language=en&category=crime"
        );
        const data = await response.json();
        if (data.results) {
          setArticles(data.results);
        } else {
          console.error("No results found in the API response");
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section id="blog" className="blog-section pt-150">
      <div className="shape shape-7">
        <img src={shape6} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-8 mx-auto">
            <div className="section-title text-center mb-55">
              <span className="wow fadeInDown" data-wow-delay=".2s">Blog Post</span>
              <h2 className="mb-15 wow fadeInUp" data-wow-delay=".4s">Latest News</h2>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Stay updated with the latest crime news from across India.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {articles.map((article, index) => (
            <div className="col-xl-4 col-lg-4 col-md-6" key={index}>
              <div className="single-blog mb-30 wow fadeInUp" data-wow-delay={`${index * 0.2 + 0.2}s`}>
                <div className="blog-img">
                  <a href={article.link} target="_blank" rel="noopener noreferrer">
                    <img src={article.image_url || "default-image-path.jpg"} alt="Blog" />
                  </a>
                </div>
                <div className="blog-content">
                  <h4>
                    <a href={article.link} target="_blank" rel="noopener noreferrer">
                      {article.title}
                    </a>
                  </h4>
                  <p>{article.description || "No description available."}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;