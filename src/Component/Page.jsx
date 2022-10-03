import './Page.css'

const StaticPage = () => {
    return (
        <section>
           <nav>
            <img height={40} src="https://i.postimg.cc/jjDVRMtP/logo.png" alt="" />
            <ul>
                <li>Features</li>
                <li>How it works</li>
                <li>Privacy</li>
            </ul>
            <ul>
                <li>Log in</li>
                <li className='download-btn' >Download App</li>
            </ul>
           </nav>
           <div className='content' > 
            <h1 className='heading' >Make <br></br> New Friends</h1>
            <div className='sub-heading' >Socially is a new social media platform to make new friends online in the world. Now let's explore all it's amazing features</div>
            <div className='join-btn' >Join Now</div>
           </div>
           <img className='girl-img' width={420} src="https://i.postimg.cc/vHnkDdBj/pic.png" alt="" />
        </section>
    )
}

export default StaticPage;