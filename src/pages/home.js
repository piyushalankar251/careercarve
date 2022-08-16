import React, { useState, useEffect } from 'react';
function Home() {
    const [login, setLogin] = useState(false);
    // fetch data from local storage
    const firstName = localStorage.getItem('First');
    const lastName = localStorage.getItem('Last');
    const email = localStorage.getItem('Email');
    // login = localStorage.getItem('Login');
    useEffect(() => {
        console.log('useEffect',);
        setLogin(localStorage.getItem('Login'));
        console.log(login);
    }, [login]);

    //set login state
    if (login === 'true') {
        return (
            <> <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Dashboard</h4>
                            </div>
                            <div className="card-body">
                                <p className="card-text">This is the Dashboard</p>
                                <p className="card-text">First Name: {firstName}</p>
                                <p className="card-text">Last Name: {lastName}</p>
                                <p className="card-text">Email: {email}</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Trainings</h4>
                            </div>
                            <div className="card-body">
                                <p className="card-text">T1 <a href="/t1">Visit</a></p>
                                <p className="card-text">T2 <a href="/t2">Visit</a></p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    } else {
        return (
            <>
                <div className="container-home" width="1000%">
                    <div className="row">
                        <div className="">
                            {/* <div className="card"> */}
                                {/* <div className="card-header"> */}
                                    {/*  */}
                                    {/* <p className="card-text"><img src="cover.jpg"></img></p> */}
                                {/* </div> */}
                                <div className="card-body">
                                    <p>CareerCarve is the #1 placement training company in India, working exclusively with B-Schools. We have successfully completed 10 years, the only company in this space to achieve this feat. 

Over the last 10 years, we have trained over 39,000 B-School students from more than 30 B-Schools across the country. We have achieved this by creating highly specific industry first training modules.

We have empanelled with us, a large pool of experienced and knowledgeable industry practitioners spanning domains and sectors, trained to deliver the CareerCarve experience. We are very proud of the fact that our mentors are micro-mapped to the needs and aspirations of the students, at each stage of our training.

We are excited to continue this journey with B-School students in making them industry ready through our robust training program.
</p>
<p>
<strong>
Founded in 2011
</strong>
</p>
<p>
    <strong>
Specializes in➡️
</strong>
Mentoring, Industry relevant, Guidance, and Give back to academia
</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </>
        );
    }

}

export default Home;