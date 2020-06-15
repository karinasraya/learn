import React from 'react'

export default ({experienceLinks}) => {
    return(
        <section className="page-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Work Experience</h2>
              <h3 className="section-subheading text-muted">My Work Experience</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                {
                experienceLinks && experienceLinks.map(({tahun,job,describe},index) => 
                <li>
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt=""/>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>{tahun}</h4>
                    <h4 className="subheading">{job}</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">{describe}</p>
                  </div>
                </div>
                </li>
                )
                }
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
}