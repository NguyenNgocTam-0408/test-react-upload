import Videohomepage from 'D:/test-react-upload/src/assets/videohomepage.mp4'

const Home = () =>{
    return(
        <div className="homepage-container">
            <video  autoPlay loop muted>
                <source src={Videohomepage} type="video/mp4"/>
            </video>
            </div>

    )
}
export  default Home;