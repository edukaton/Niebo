import Preact from 'preact'

const Post = () => (
  <div className="post">
    <div className="post-author">
      <img className="author-img" src="https://www.thesun.co.uk/wp-content/uploads/2017/03/nintchdbpict000139419726.jpg?strip=all&w=871" />
      <span className="author-name">Ania</span>
    </div>
    <div className="post-content">Hej, piszę artykuł do gazetki szkolnej, chciałabym dowiedzieć się od was co sądzicie o najnowszych "Gwiezdnych Wojnach"?</div>
  </div>
)

export default Post
