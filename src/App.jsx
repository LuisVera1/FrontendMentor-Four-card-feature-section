import './App.css'

function App() {


  return (
    <div className="App">

      {/* header */}
      <header>
        <h2 className='header__subtitle'>Reliable, efficient delivery</h2>
        <h1 className='header__title'>Powered by Technology</h1>
        <p className='header__description'>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
      </header>

      {/* main */}
      <main>

        {/* first column */}
        <div className='main__first-section'>
          <div className="card card__border--cyan">
            <div>
              <h4 className='card__title'>Supervisor</h4>
              <p className='card__description'>Monitors activity to identify project roadblocks</p>
            </div>
            <img className='card__icon' src="/icon-supervisor.svg" alt="supervisor" />
          </div>
        </div>


        {/* second columns */}
        <div className='main__second-section'>
          <div className="card card__border--red">
            <div>
              <h4 className='card__title'>Team Builder</h4>
              <p className='card__description'>Scans our talent network to create the optimal team for your project</p>
            </div>
            <img className='card__icon' src="/icon-team-builder.svg" alt="supervisor" />
          </div>


          <div className="card card__border--orange">
            <div>
              <h4 className='card__title'>Karma</h4>
              <p className='card__description'>Regularly evaluates our talent to ensure quality</p>
            </div>
            <img className='card__icon' src="/icon-karma.svg" alt="supervisor" />
          </div>
        </div>


        {/* third column */}
        <div className='main__third-section'>
          <div className="card card__border--blue">
            <div>
              <h4 className='card__title'>Calculator</h4>
              <p className='card__description'>Uses data from past projects to provide better delivery estimates</p>
            </div>
            <img className='card__icon' src="/icon-calculator.svg" alt="supervisor" />
          </div>

        </div>
      </main>

    </div>
  )
}

export default App
