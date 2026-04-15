import './App.css'

function App() {

  return (
    <>
    <div className='container'>
      <div className='sidebar'></div>
      <div className="cards">
      
        <div className="card">
          <div 
            className="bg" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500534314209-a25ddb2bd429')" }}
          ></div>
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200" alt="" />
          <h3>Merry Robert</h3>
          <p>Creative UI Designer who loves building modern and user-friendly interfaces.</p>
          <div className="btns">
            <button className="follow">Follow</button>
            <button>View</button>
          </div>
        </div>

       
        <div className="card">
          <div 
            className="bg" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')" }}
          ></div>
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200" alt="" />
          <h3>Chris Gayle</h3>
          <p>Frontend developer passionate about React and building responsive web apps.</p>
          <div className="btns">
            <button className="follow">Follow</button>
            <button>View</button>
          </div>
        </div>

        
        <div className="card">
          <div 
            className="bg" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1492724441997-5dc865305da7')" }}
          ></div>
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200" alt="" />
          <h3>Hania Mir</h3>
          <p>Marketing expert focused on brand growth and digital engagement strategies.</p>
          <div className="btns">
            <button className="follow">Follow</button>
            <button>View</button>
          </div>
        </div>

      
        <div className="card">
          <div 
            className="bg" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')" }}
          ></div>
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200" alt="" />
          <h3>John Smith</h3>
          <p>Software engineer who enjoys solving complex problems and writing clean code.</p>
          <div className="btns">
            <button className="follow">Follow</button>
            <button>View</button>
          </div>
        </div>

      
        <div className="card">
          <div 
            className="bg" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')" }}
          ></div>
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200" alt="" />
          <h3>Emma Watson</h3>
          <p>Creative artist and actor who loves storytelling and visual expression.</p>
          <div className="btns">
            <button className="follow">Follow</button>
            <button>View</button>
          </div>
        </div>

      </div>
    </div >
    </>
  )
}

export default App