import Videohomepage from 'D:/test-react-upload/src/assets/videohomepage.mp4'

const Home = () =>{
    return(
        <div className="homepage-container">
            <video  autoPlay loop muted>
                <source src={Videohomepage} type="video/mp4"/>
            </video>
            <div className='home-content'>
            <div className='title-1'>Get to know your customers with forms worth filling out</div>
            <div className='title-2'>Collect all the data you need to understand customers with forms designed to be refreshingly different.</div> 
            <div ><button className='btngetstarted' >Get Started</button></div>
        </div>
        </div>
    )
}
export  default Home;