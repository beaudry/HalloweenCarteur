import { render } from 'preact';
import './index.css';
import { Router, Route, LocationProvider } from 'preact-iso';
import CartesConteneur from './conteneurs/CartesConteneur';
import TableauConteneur from './conteneurs/TableauConteneur';

function Main() {
    return (
        <LocationProvider>
            <Router>
                <Route component={CartesConteneur} path='/HalloweenCarteur/' />
                <Route component={TableauConteneur} path='/HalloweenCarteur/tableau' />
            </Router>
        </LocationProvider>
    );
}

render(<Main />, document.getElementById('app')!);
