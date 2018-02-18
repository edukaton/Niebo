import Preact from 'preact'
import './story.sass'

const Story = ({ content }) => (
  <div>
    <article className="fake-news-checklist--article">
      <header className={content.img}>
        <h3>
          {content.header}
          <div className="date">
            {content.date}
          </div>
        </h3>
      </header>
      <main>
        {content.body.map(_ => <p>{_}</p>)}
      </main>
    </article>
  </div>
)

export default Story
