import React from 'react'

export default ({portofolioLinks}) => {
    return(
        <section className="page-section bg-light" id="portfolio">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">Portfolio</h2>
                <h3 className="section-subheading text-muted">Here are my portofolio :</h3>
            </div>
            <div className="row">
                {
                    portofolioLinks && portofolioLinks.map(({tittle,caption}, index) =>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1"
                                ><div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fa fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={ `https://unsplash.it/350/140/?${Math.floor(Math.random(0,100) * 100)}` } alt="portofolio_img"
                            /></a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">{tittle}</div>
                                <div className="portfolio-caption-subheading text-muted">{caption}</div>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    </section>
    )
}