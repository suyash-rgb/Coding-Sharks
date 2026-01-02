import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import front from "../Images/front.png"
import programmingData from "../data/data.json"; // Import JSON
import "../pages/Home.css";


function Home() {
  return (
    <>
      <div className="Home">
        <Navbar />
        <img src={front} alt="JavaScript concepts" className="image" />
        
        <div style={{ padding: "40px 20px", textAlign: "center", maxWidth: "1200px", margin: "0 auto" }}>
          <h1 className="heading">Javascript Programming Examples, Exercises and Solutions for Beginners</h1>
          <p style={{ 
            fontSize: "1.1rem", 
            color: "#666", 
            lineHeight: "1.8", 
            marginBottom: "40px",
            maxWidth: "800px",
            margin: "0 auto 40px"
          }}>
            Welcome to JS Mentor! Master JavaScript through hands-on learning. Explore comprehensive tutorials, practical exercises, and real-world examples designed to help you become a confident JavaScript developer. Start your coding journey today.
          </p>
        </div>

        <h2 
        id="learning-paths" 
        style={{ 
          textAlign: "center", 
          color: "rgb(240, 82, 4)", 
          fontSize: "2rem", 
          marginBottom: "30px",
          fontWeight: "600",
          scrollMarginTop: "140px"
        }}>
          Explore Learning Paths
        </h2>
        
        <div className="cards-container">
          {programmingData.cards.map((card, index) => (
            <Card
              key={index}
              heading={card.heading}
              links={card.links}
            />  
          ))}
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Home;