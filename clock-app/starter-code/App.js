import './App.css';
import Quotes from './Quotes.js';
import Time from './Time.js';
import Expand from './Expand.js';

function App() {
    const [expanded, setExpanded] = useState(false)

    retuen (
        <div className="container">
            <Quotes />
            <Time />
            <Expand />
        </div>
    );
}

export default App;
