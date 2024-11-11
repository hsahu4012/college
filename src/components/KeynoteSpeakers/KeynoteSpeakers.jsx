import React from 'react'
import './KeynoteSpeakers.css'

function KeynoteSpeakers() {
    return (
        <div className='ks'>
            <div className="keynote">
                <div><h2>Listen To The Speakers</h2>
                    <h1>Keynote Speakers</h1>
                </div>
                <div className="buttons">
                    <div className="btn"><a href="#">View More Speakers</a></div>
                </div>
            </div>

            <div className="cards">
                <div className="card">
                    <p>Dr. Bhabendu Kumar Mohanta</p>
                    <p>UAEU, Al Ain, UAE</p>
                </div>
                <div className="card">
                    <p>Prof. (Dr.) S. K. Baral,
                    </p>
                    <p> IGNTU, MP, India</p>
                </div>
                <div className="card">
                    <p>Dr. Sanjay Saxena, IIIT</p>
                    <p>Bhubaneswar, India</p>
                </div>
                <div className="card">
                    <p>Dr. Sibarama Panigrahi</p>
                    <p>NIT, Rourkela, India</p>
                </div>
                <div className="card">
                    <p>Dr. Malaya Kumar Nath</p>
                    <p>NIT, Puduchery, India</p>
                </div>
                <div className="card">
                    <p>Er. Nishanta Nanda</p>
                    <p> Associate Consultant, TCS, Bhubaneswar, India</p>
                </div>
                <div className="card">
                    <p>Er. Utsav Mittal</p>
                    <p>CEO Xiarch (Cyber Security Influencer)</p>
                </div>
            </div>
        </div>
    )
}

export default KeynoteSpeakers
