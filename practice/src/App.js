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
                    <div className="content has-text-centered">
                        <p class="title">Personal Digital Assistant</p>
                    </div>
                </div>
            </section>
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-3">
                            <ProfileCard

                                title="Alexa"
                                handle="@alexa12"
                                image={AlexaImage}
                                description="This is Alexa"
                            />
                        </div>
                        <div className="column is-3">
                            <ProfileCard

                                title="Cortana"
                                handle="@cortana1122"
                                image={CortanaImage}
                                description="This is Cortana"
                            />
                        </div>
                        <div className="column is-3">
                            <ProfileCard

                                title="Siri"
                                handle="@siri99"
                                image={SiriImage}
                                description="This is Siri"
                            />
                        </div>
                        <div className="column is-3">
                            <ProfileCard

                                title="Alexa"
                                handle="@alexa12"
                                image={AlexaImage}
                                description="This is Alexa"
                            />
                        </div>

                    </div>
                </section>
            </div>
            <div>
                <footer className="footer">
                    <div className="content has-text-centered">
                        <p className="title">
                            <strong>
                                In this project Bulma Library is Used and This project is Made By Abdullah
                            </strong>
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
}
export default App;