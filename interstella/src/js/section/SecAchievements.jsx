import '../../css/section/secachievements.css'

export default function SecAchievements() {


  const priorities = [
    {
      priority: "Tailored Experience",
      description: "No two clients are the same. We customize every session to suit your unique style and needs."
    },
    {
      priority: "Professional Team",
      description: "Our team is qualified, friendly, and always up to date with the latest techniques and trends."
    },
    {
      priority: "Premium Products",
      description: "We only use salon-grade, skin- and hair-safe products from trusted brands."
    },
    {
      priority: "Real Results",
      description: "Our work speaks for itself. Consistently glowing reviews and loyal returning clients."
    }
  ]


  return (
    <section className='secachievements'>
      <div className="head">
        <h2>03. Why Interstella?</h2>
        <p>Beauty is more than just appearance — it’s how you feel walking out.</p>
      </div>
      <div className="body">
        <div className="achievements-count">
          <div className="counts">
            <div className="count">
              <h3>1.</h3>
              <p>We’re known for our consistency and attention to detail in every session.</p>
            </div>
            <div className="count">
              <h3>2.</h3>
              <p>Clients appreciate the smooth booking process and welcoming environment.</p>
            </div>
            <div className="count">
              <h3>3.</h3>
              <p>Our team is passionate, skilled, and always up-to-date with the latest trends.</p>
            </div>
          </div>
        </div>
        <div className="achievement-strategy">
          <div className="timeline">
            <ul>
              <li>Consult.</li>
              <li>Care.</li>
              <li>Create.</li>
              <li>Confidence.</li>
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
