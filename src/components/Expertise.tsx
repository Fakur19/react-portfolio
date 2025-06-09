import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faDatabase, faGaugeHigh } from "@fortawesome/free-solid-svg-icons";
import { faChartBar } from "@fortawesome/free-regular-svg-icons";

const labelsFirst = [
    "Python",
    "Jupyter",
    "NLP",
    "Deep Learning",
    "SQL",
    "Excel",
    "R"
];

const labelsSecond = [
    "Tableau",
    "Looker Studio",
    "Power BI",
    "Seaborn",
    "Matplotlib",
    "Excel"
];

const labelsThird = [
    "SQL",
    "Python",
    "Pandas",
    "PostgreSQL",
    "Excel",
    "Numpy",
    "Power Query",
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faChartBar} size="3x" />
                        <h3>Data Analysis & Insights</h3>
                        <p>I dive deep into complex datasets to uncover hidden patterns, trends, and correlations. Using statistical methods and exploratory analysis, I translate raw numbers into actionable insights that answer key business questions and drive strategic decisions.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faGaugeHigh} size="3x" />
                        <h3>Business Intelligence & Visualization</h3>
                        <p>I transform complex data into compelling visual stories. I design and develop interactive dashboards and reports that empower stakeholders to monitor performance, explore trends, and make informed, data-driven decisions in real-time.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDatabase} size="3x" />
                        <h3>Data Engineering & ETL</h3>
                        <p>I build robust and scalable data pipelines to extract, transform, and load data from various sources. My focus is on creating clean, reliable datasets that serve as the single source of truth for all analysis and business reporting.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;