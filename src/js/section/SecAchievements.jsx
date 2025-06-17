import '../../css/section/secachievements.css'

export default function SecAchievements() {


  const priorities = [
    {
      priority: "costumer satisfaction",
      description: "At our salon we prioritise our customer's satisfaction. We believe that costumer's hapinnes means more than profit in the long run."
    },
    {
      priority: "positive feedback",
      description: "At our salon we prioritise our customer's satisfaction. We believe that costumer's hapinnes means more than profit in the long run."
    },
    {
      priority: "returning costumer cont",
      description: "At our salon we prioritise our customer's satisfaction. We believe that costumer's hapinnes means more than profit in the long run."
    },
    {
      priority: "affordability",
      description: "At our salon we prioritise our customer's satisfaction. We believe that costumer's hapinnes means more than profit in the long run."
    }
  ]


  return (
    <section className='secachievements'>
      <div className="head">
        <h2>03 Why Choos Us</h2>
        <p>we have we a working service delivery method while at the same time highly prioritising our customer’s satisfaction.</p>
      </div>
      <div className="body">
        <div className="achievements-count">
          <div className="wrap"></div>
          <div className="counts">
            <div className="count">
              <h3>1</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, enim.</p>
            </div>
            <div className="count">
              <h3>2</h3>
              <p>Optio maxime iste sit id expedita deleniti? Illum, cumque dolorem.</p>
            </div>
            <div className="count">
              <h3>3</h3>
              <p>Inventore est quisquam alias magni quidem laudantium aspernatur voluptate.</p>
            </div>
          </div>
        </div>
        <div className="achievement-strategy">
          <div className="timeline">
            <ul>
              <li>Appointment</li>
              <li>Confirmation</li>
              <li>Visit</li>
              <li>Session</li>
              <li>Costumer Feedback</li>
            </ul>
            <div className="wrap"></div>
          </div>
          <div className="priorities">
            {
              priorities.map((item, i) => {
                return (
                  <div className="priority-card" key={'priority' + i}>
                    <h5>{item.priority}</h5>
                    <p>{item.description}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}
