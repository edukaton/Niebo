import Preact from 'preact'
import './form.sass'

const Checkbox = ({index}) => (
    <div className="checkbox comment__checkbox">
        <input id={`checkbox-${index}`} name="checkbox" type="checkbox"/>
        <label htmlFor={`checkbox-${index}`} className="checkbox-label"></label>
        <label htmlFor={`checkbox-${index}`} className="checkbox-label-comment"></label>
    </div>
);

let commentAuthor = function () {
    const authors = ['Jacek', 'Wojtek', 'Ania', 'Janek', 'Krysia', 'Dominika'];
    return authors[Math.floor(Math.random() * authors.length)];

};
const Form = ({content}) => (
    <div className="fake-promo-challenge--form thread">
        <div className="post">
            <div className="post-author">
                <img className="z_dupy_post_header-img" src="/z_dupy_post_header.png"></img>
            </div>
            <div className="post-content">{content.question}</div>
            <img className="z_dupy_post_footer-img" src="/z_dupy_post_footer.png"></img>
        </div>
        <div>
            <div className="comments">
                <div className="comments-name">Komentarze:</div>
                {content.options.map((text, i) => (
                    <div className="comment comment--fake-promo">
                        <Checkbox index={i}/>
                        <div className="comment-body">
                            <div className="comment-author">{commentAuthor()}</div>
                            <div className="comment-content comment-content--not-editable">
                                <div className="comment-content__text">{text}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>


);

export default Form
