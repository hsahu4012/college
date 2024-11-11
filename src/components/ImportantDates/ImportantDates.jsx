import React from 'react'
import './ImportantDates.css'

function ImportantDates() {
    return (
        <div className='dates'>
            <div className="head">
                <h1>Information of Event Schedules</h1>
                <div className="buttons">
                    <div className="btn"><a href="#">Click Here For Registration</a></div>
                </div>
            </div>
            <div className="events">
                <div className="event" style={{backgroundColor:'crimson'}}>
                    <p>Last Date of Paper Submission: <br />November 10, 2024
                    </p>
                </div>
                <div className="event" style={{backgroundColor:'purple'}}>
                    <p>
                        Notification of Acceptance: <br /> November 20, 2024
                    </p>
                </div>
                <div className="event" style={{backgroundColor:'crimson'}}>
                    <p>Submission of Camera-Ready Copy: <br /> November 25, 2024
                    </p>
                </div>
                <div className="event" style={{backgroundColor:'purple'}}>
                    <p>Last Date of Registration: <br /> December 10, 2024
                    </p>
                </div>
            </div>
            <div className="buttons">
                <div className="btn"><a href="">Download Brochure</a></div>
                <div className="btn"><a href="">Download Paper Tamplate</a></div>
            </div>
        </div>
    )
}

export default ImportantDates
