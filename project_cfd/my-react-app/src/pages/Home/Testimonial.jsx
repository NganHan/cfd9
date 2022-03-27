import React from 'react'
import useQuery from '../../hooks/useQuery'
import { homeService } from '../../services/home'
import { Link } from 'react-router-dom'

export default function Testimonial() {
  const { data, loading } = useQuery(() => {
    return homeService.review()
  }, [])
  if (loading) return null
  return (
    <>
    <section className="section-testimonial" style={{background:'#212121'}}>
          <div className="container">
            <div className="textbox">
              <h2 className="main-title white">Học viên cảm nhận về CFD</h2>
            </div>
            <div className="testimonial">
              <div className="testimonial-item">
                <div className="item">
                  <div className="text">
                  {
                        data?.map((e, index) => (
                          <div className={`ct ct-${index} ${index===0 ? 'active': ''}`} key={index}>
                            <div className="info">
                              <div className="name">
                                <h4>{e.name}</h4>
                                <p>Thành viên CFD1</p>
                              </div>
                              <div className="quotes"><img src="/img/quotes.svg" alt="" /></div>
                            </div>
                            <div className="content">
                              {e.content}
                            </div>
                            <div className="bottom">
                              <Link to={e.fb} target={"_blank"}><img src="/img/facebook.svg" alt="" /></Link>
                              <span>{e.date}</span>
                            </div>
                          </div>
                        ))
                    }
                    
                  </div>
                  <div className="images">
                    <div className="list">
                      {
                          data?.map((e, index) => (
                            <div className="carousel-cell" key={index}>
                              <div className="img">
                                <picture>
                                  <source media="(max-width: 767px)" srcSet={e.cover} />
                                  <img data-flickity-lazyload={e.cover} alt="" />
                                </picture>
                              </div>
                              <div className="ct_m">
                                <div className="info">
                                  <div className="name">
                                    <h4>{e.name}</h4>
                                    <p>Thành viên CFD1</p>
                                  </div>
                                  <div className="quotes"><img src="/img/quotes.svg" alt="" /></div>
                                </div>
                                <div className="content">
                                  {e.content}
                                </div>
                                <div className="bottom">
                                  <Link to={e.fb} target={"_blank"}><img src="/img/facebook.svg" alt="" /></Link>
                                  <span>{e.date}</span>
                                </div>
                              </div>
                            </div>
                          ))
                      }
                    </div>
                  </div>
                </div>
                <div className="dots" />
                <div className="btn_ctr prev" />
                <div className="btn_ctr next" />
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
