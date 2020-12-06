import React from 'react';
import '../main/main.css';
import { Button} from 'react-bootstrap';

function Main() {
    return (
        <div className="main"><div class="row"><div class="col">
            <div className="text-container">
                <span className="text">Nurse</span><span className="ce"> CE </span><span className="text">Club</span>
                <p className="text-desc">Nurse CE Club offers high quality continuing education online to enhance nursing practice and improve patient care.</p>
                <Button className="btn round-btn choose-btn">Choose a Course</Button>
            </div>
        </div>
            <div className="col nurse-image"><img src="https://res.cloudinary.com/dspfh3nrl/image/upload/v1607245752/nursesmall.png"></img></div>
        </div>
        </div>

    )
}

export default Main