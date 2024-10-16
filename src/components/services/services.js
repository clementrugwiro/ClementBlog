import React from "react";
import "./services.css"; // Assuming you are using a CSS file for styling

const Services = () => {
  return (
    <section className="services-section">
      <h2>Services Offered</h2>
      <div className="services-container">
        {/* Service 1 */}
        <div className="service">
          <h3>Software Development</h3>
          <p>
            Specialized in developing full-stack applications using Node.js,
            Express, React, and MongoDB. I also handle database management and
            server-side logic.
          </p>
        </div>

        {/* Service 2 */}
        <div className="service">
          <h3>Web Design & Development</h3>
          <p>
            Proficient in designing and developing responsive websites with
            enhanced user experience, utilizing HTML, CSS, JavaScript, and
            frameworks like React.js.
          </p>
        </div>

        {/* Service 3 */}
        <div className="service">
          <h3>Technical Support & Consulting</h3>
          <p>
            Experienced in IT consultancy, providing technical support,
            maintaining hardware, and offering solutions for process improvement
            and optimization.
          </p>
        </div>

        {/* Service 4 */}
        <div className="service">
          <h3>Project Management</h3>
          <p>
            Strong project management skills, from client communication and
            managing tasks to ensuring project timelines are met efficiently
            using tools like Jira.
          </p>
        </div>

        {/* Service 5 */}
        <div className="service">
          <h3>User Research & Co-design</h3>
          <p>
            Conduct user research and co-design sessions to gather insights,
            test with users, and translate feedback into actionable improvements
            for product development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
