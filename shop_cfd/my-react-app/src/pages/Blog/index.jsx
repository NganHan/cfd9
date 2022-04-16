import React from 'react'
import BlogCard from '../../components/BlogCard'

export default function Blog() {
    return (
        <section className="pt-7 pb-12">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* Heading */}
                        <h3 className="mb-7 text-center">Our Blog</h3>
                        {/* Nav */}
                        <nav className="nav justify-content-center mb-10">
                            <a className="nav-link active" href="#">All</a>
                            <a className="nav-link" href="#">Company</a>
                            <a className="nav-link" href="#">Brand</a>
                            <a className="nav-link" href="#">Fashion</a>
                            <a className="nav-link" href="#">Shop</a>
                        </nav>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        {/* Card */}
                        <BlogCard 
                            img = '/img/blog/blog-1.jpg'
                            time = 'Jun 20'
                            heading = "So isn't land signs greater void face replenish."
                            text = "Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under."
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        {/* Card */}
                        <BlogCard 
                            img = '/img/blog/blog-4.jpg'
                            time = 'Jun 20'
                            heading = "Sea good every which said first divided."
                            text = "From fruit shall stars over. Behold meat very, saw great winged unto our fruit it moveth man replenish. Meat place is so fruit."
                        />
                    </div>
               
                </div>
                <div className="row">
                    <div className="col-12">
                        {/* Progress */}
                        <div className="row justify-content-center mt-7">
                            <div className="col-12 text-center">
                                {/* Caption */}
                                <p className="font-size-sm text-muted">
                                    Showing 16 of 24 products
                                </p>
                                {/* Progress */}
                                <div className="progress mx-auto mb-7" style={{ maxWidth: '250px' }}>
                                    <div className="progress-bar bg-dark" role="progressbar" style={{ width: '66%' }} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                {/* Button */}
                                <button className="btn btn-sm btn-outline-dark">
                                    Load more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
