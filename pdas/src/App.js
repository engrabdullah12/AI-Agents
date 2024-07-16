import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
    return (
        <div>
            <section class="hero is-link">
                <div class="hero-body">
                    <p class="title">Personal Digital Assistant</p>
                </div>
            </section>
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard
                                title="Alexa"
                                handle="@alexa"
                                image={AlexaImage}
                                description=" This is made by me "
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard
                                title="Cortana"
                                handle="@cortana12"
                                image={CortanaImage}
                                description=" This is made by me "
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard
                                title="Siri"
                                handle="@siri123"
                                image={SiriImage}
                                description=" This is made by me "
                            />
                        </div>
                    </div>
                </section>
            </div>

        </div>

    );
}

export default App;