import React from 'react';
import '../assets/styles/Certifications.scss';
import googleLogo from '../assets/images/google.png';
import sapLogo from '../assets/images/sap.png';
import ciscoLogo from '../assets/images/cisco.png';
import bnspLogo from '../assets/images/bnsp.png';

const certifications = [
  {
    name: 'Google Data Analytics',
    description: 'Completed a comprehensive program on data cleaning, analysis, visualization, and reporting using SQL, R, and Tableau.',
    link: 'https://www.coursera.org/account/accomplishments/specialization/7HHQNGEYLSBL',
    logo: googleLogo
  },
  {
    name: 'Google Business Intelligence',
    description: 'Learned to transform data into insights using tools like BigQuery, SQL, and Looker to build effective business intelligence dashboards.',
    link: 'https://www.coursera.org/account/accomplishments/specialization/REVGZ06DGGSZ',
    logo: googleLogo
  },
  {
    name: 'Cisco CyberOps Associate',
    description: 'Developed skills in cybersecurity operations, including threat analysis, network security monitoring, and incident response.',
    link: 'https://www.credly.com/badges/cd5b8745-25d0-499e-bf9b-f1d18f6b98ee/public_url', // Replace with actual link
    logo: ciscoLogo
  },
  {
    name: 'SAP AC010',
    description: 'Gained foundational knowledge in SAP S/4HANA Financial Accounting, covering key concepts and processes.',
    link: 'http://check.upp-sap.com:88/validasi%20sertifikat/hasil%20query.php?id=30303030303131363033303030313036&view=View', // Replace with actual link
    logo: sapLogo
  },
  {
    name: 'Database Administrator',
    description: 'Nationally certified professional with proven competency in database management, security, and performance optimization.',
    // link: '', no link for now
    logo: bnspLogo
  }
];

function Certifications() {
  return (
    <div id="certifications">
      <div className="items-container">
        <h1>Certifications</h1>
        <div className="certifications-container">
          {certifications.map((cert, index) => (
            <a key={index} href={cert.link} target="_blank" rel="noopener noreferrer" className="certification-item-link">
              <div className="certification-item">
                <div className="cert-logo">
                  <img src={cert.logo} alt={`${cert.name} logo`} />
                </div>
                <div className="cert-details">
                  <h3>{cert.name}</h3>
                  <p>{cert.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certifications;
