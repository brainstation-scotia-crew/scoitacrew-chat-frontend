import './PageOne.scss';
import '../../components/ChatWindow/ChatWindow';
import ChatWindow from '../../components/ChatWindow/ChatWindow';
import Header from '../../components/Header/Header';

function PageOne() {
    return (
        <section className="container">
            <ChatWindow/>
        </section>

    )
}

export default PageOne;