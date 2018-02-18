import Preact from 'preact'
import './story.sass'

const Story = ({ content }) => (
  <div>
    <h2 className="fake-news--desc">Przeczytaj artykuł.</h2>
    <div className="fake-news">
      <div className="fake-news--banner-container">
        <div className="fake-news--banner" />
        <div className="fake-news--banner-nav" />
      </div>
      <div className="fake-news--main-box">
        <article className="fake-news-checklist--article">
          <div className="fake-news--info"><strong>Joanna Chmiel</strong>, 18 lutego 2018</div>
          <header>
            <h3>
              {content.header}
              <div className="desc">
                {content.description}
              </div>
            </h3>
          </header>
          <main>
            <div className={`${content.img} fake-news--img`} />
            {content.body}
          </main>
        </article>
        <aside className="fake-news--ads" />
      </div>
    </div>
  </div>
)

export default Story
