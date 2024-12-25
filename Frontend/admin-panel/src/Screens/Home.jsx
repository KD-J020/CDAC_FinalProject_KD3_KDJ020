import Navbar from "../Components/Navbar";


function Home()
{
    return (
        <div>
            <div className="row">
                <Navbar/>
            </div>
            <div className="row">
              <div className="col3">
              <Sidebar/>
              </div>
              <div className="col9">
             <h1>welcom to admin</h1>
              </div>
            </div>
           
           
        </div>
    )

}
export default Home;
