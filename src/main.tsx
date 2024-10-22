import { render } from 'preact';
import './index.css';
import CartesConteneur from './conteneurs/CartesConteneur';

function Main() {
    return (
        <CartesConteneur />
    );
}

render(<Main />, document.getElementById('app')!);
