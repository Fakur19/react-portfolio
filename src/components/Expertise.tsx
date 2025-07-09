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
    "Jupyter Notebook",
    "Natural Language Processing",
    "Deep Learning",
    "SQL",
    "Excel",
    "R",
    "Scikit-learn",
    "Vertex AI"
];

const labelsSecond = [
    "Tableau",
    "Looker Studio",
    "Power BI",
    "Metabase",
    "Seaborn",
    "Matplotlib",
    "Excel",
    "Plotly",
    "BigQuery"
];

const labelsThird = [
    "SQL",
    "Python",
    "Pandas",
    "PostgreSQL",
    "MongoDB",
    "Numpy",
    "Power Query",
    "Docker",
    "Apache Spark",
    "GCP Dataflow"
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
                        <p>I excel at diving deep into complex datasets to uncover hidden patterns, trends, and correlations. Leveraging advanced statistical methods and exploratory data analysis, I transform raw numbers into actionable insights that solve key business problems and drive strategic decision-making.</p>
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
                        <p>I specialize in transforming complex data into compelling and intuitive visual stories. I design and develop interactive, real-time dashboards and reports that empower stakeholders to effortlessly monitor performance, explore critical trends, and make informed, data-driven decisions.</p>
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
                        <p>I engineer robust, scalable, and automated data pipelines to efficiently extract, transform, and load data from a wide variety of sources. My focus is on building clean, reliable, and high-performance datasets that serve as the single source of truth for all analytics and business reporting, including real-time data streaming.</p>
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