import React from "react";
import sales1 from '../assets/images/sales-1.png';
import sales2 from '../assets/images/sales-2.png';
import hr1 from '../assets/images/hr-1.png';
import hr2 from '../assets/images/hr-2.png';
import a1984 from '../assets/images/1984-1.png';
import b1984 from '../assets/images/1984-2.png';
import c1984 from '../assets/images/1984-3.png';
import ulas1 from '../assets/images/ulasbuku-1.png';
import ulas2 from '../assets/images/ulasbuku-2.png';
import ulas3 from '../assets/images/ulasbuku-3.png';
import goty1 from '../assets/images/goty-1.png';
import goty2 from '../assets/images/goty-2.png';
import goty3 from '../assets/images/goty-3.png';
import transport2 from '../assets/images/transport-2.png';
import transport3 from '../assets/images/transport-3.png';


import '../assets/styles/Project.scss';
// Add these two lines at the top of your Project.js file
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // imports the default styles

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    {/* The Carousel component replaces the single image */}
                    <Carousel showThumbs={false} infiniteLoop={true} useKeyboardArrows={true} showStatus={false}>
                        <div>
                            <img src={sales1} alt="Sales Dashboard Screenshot" />

                        </div>
                        <div>
                            <img src={sales2} alt="Sales Dashboard Screenshot" />

                        </div>
                    </Carousel>

                    {/* The title and description remain the same, but the link is now only on the title */}
                    <a href="https://public.tableau.com/app/profile/fajar.kurnia3266/viz/SalesCustomer_17295028187300/SalesDashboard" target="_blank" rel="noreferrer"><h2>Sales & Customer Analytics</h2></a>
                    <p>Built a comprehensive dashboard using Tableau to track year-over-year sales metrics and reveal actionable insights into customer behavior.</p>
                </div>

                <div className="project">
                    {/* The Carousel component replaces the single image */}
                    <Carousel showThumbs={false} infiniteLoop={true} useKeyboardArrows={true} showStatus={false}>
                        <div>
                            <img src={hr1} alt="HR Dashboard Screenshot" />

                        </div>
                        <div>
                            <img src={hr2} alt="HR Dashboard Screenshot" />

                        </div>
                    </Carousel>

                    {/* The title and description remain the same, but the link is now only on the title */}
                    <a href="https://public.tableau.com/app/profile/fajar.kurnia3266/viz/HRDashboard_17303697834920/HRDashboardOverview" target="_blank" rel="noreferrer"><h2>Interactive HR Insights</h2></a>
                    <p>Engineered a dynamic dashboard using Tableau to visualize key workforce metrics and provide in-depth, filterable access to employee data, improving HR analysis capabilities.</p>
                </div>

                <div className="project">
                    {/* The Carousel component replaces the single image */}
                    <Carousel showThumbs={false} infiniteLoop={true} useKeyboardArrows={true} showStatus={false}>
                        <div>
                            <img src={a1984} alt="1984 Book Cover" />

                        </div>
                        <div>
                            <img src={b1984} alt="Reviews Over The Year" />

                        </div>
                        <div>
                            <img src={c1984} alt="Most Frequent Word Mentions" />

                        </div>
                    </Carousel>

                    {/* The title and description remain the same, but the link is now only on the title */}
                    <a href="https://github.com/Fakur19/1984-sentiment-analysis" target="_blank" rel="noreferrer"><h2>End-to-End NLP Pipeline for Book Review Analysis</h2></a>
                    <p>Engineered a complete NLP project in Python to analyze reader sentiment for a classic novel. Leveraged PyTorch, Hugging Face Transformers (BERT), and Pandas to process 90,000+ reviews, proving that simple star ratings are often misleading metrics for complex literary works.</p>
                </div>

                <div className="project">
                    {/* The Carousel component replaces the single image */}
                    <Carousel showThumbs={false} infiniteLoop={true} useKeyboardArrows={true} showStatus={false}>
                        <div>
                            <img src={ulas1} alt="Ulasbuku Homepage" />

                        </div>
                        <div>
                            <img src={ulas2} alt="Ulasbuku Book's Library" />

                        </div>
                        <div>
                            <img src={ulas3} alt="Ulasbuku Profile" />

                        </div>
                    </Carousel>

                    {/* The title and description remain the same, but the link is now only on the title */}
                    <a href="https://ulasbuku.onrender.com/" target="_blank" rel="noreferrer"><h2>Ulasbuku: Book Discovery & Community Platform</h2></a>
                    <p>Launched "Ulasbuku," a full-stack social platform for readers built on the Node.js and MongoDB ecosystem. The application allows users to create posts, review books, comment on discussions, and follow other users in a responsive, theme-able interface.</p>
                </div>


                <div className="project">
                    {/* The Carousel component replaces the single image */}
                    <Carousel showThumbs={false} infiniteLoop={true} useKeyboardArrows={true} showStatus={false}>
                        <div>
                            <img src={goty1} alt="Ulasbuku Game of The Year" />

                        </div>
                        <div>
                            <img src={goty2} alt="Dominant Aspect to Discuss" />

                        </div>
                        <div>
                            <img src={goty3} alt="BERT Model Confusion Matrix" />

                        </div>
                    </Carousel>

                    {/* The title and description remain the same, but the link is now only on the title */}
                    <a href="https://github.com/Fakur19/goty-sentiment-analysis" target="_blank" rel="noreferrer"><h2>Game of the Year: A BERT Sentiment Analysis</h2></a>
                    <p>Analyzed thousands of Steam reviews for "Game of the Year" award-winning titles using a BERT model from Hugging Face Transformers. This project investigates how player sentiment, as understood by NLP, aligns with critical acclaim.</p>
                </div>

                <div className="project">
                    {/* The Carousel component replaces the single image */}
                    <Carousel showThumbs={false} infiniteLoop={true} useKeyboardArrows={true} showStatus={false}>

                        <div>
                            <img src={transport2} alt="Sentiment Trend (All Apps)" />

                        </div>
                        <div>
                            <img src={transport3} alt="Sentiment Trend (Per Apps)" />

                        </div>
                    </Carousel>

                    {/* The title and description remain the same, but the link is now only on the title */}
                    <a href="https://github.com/Fakur19/indonesian-online-transportation-sentiment-analysis" target="_blank" rel="noreferrer"><h2>Indonesian Ride-Hailing: A Competitive Landscape Analysis</h2></a>
                    <p>Performed an in-depth competitive analysis of Indonesia's top ride-hailing apps by analyzing 1.4 million Play Store reviews. Using Python and NLP, this project identified key market drivers, benchmarked app performance across aspects like Price and Service, and pinpointed Customer Service as a universal weakness and strategic opportunity.</p>
                </div>


            </div>
        </div>
    );
}

export default Project;