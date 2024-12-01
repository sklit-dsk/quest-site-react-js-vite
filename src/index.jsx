import {Component} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Quests from "./quests/page.jsx";
import Quest from "./quests/[questId]/page.jsx";


import "./index.css";
import "./global/css/fonts.css";


const questsPath = '/quests';


const questsParams = 'questId';

export default class App extends Component {
    render() {
        return (
            <>
                <Router>
                    <Routes>
                        <Route path="/" element={<Quests />} />
                        <Route
                            path={questsPath}
                            element={<Quests/>}
                        />
                        <Route
                            path={`${questsPath}/:${questsParams}`}
                            element={<Quest/>}
                        />
                    </Routes>
                </Router>
            </>
        );
    }
}

let cursorPosition = {x: 0, y: 0};
document.addEventListener('mousemove', (event) => {
    cursorPosition.x = event.clientX;
    cursorPosition.y = event.clientY;
});
const getCursorPosition = () => {
    return {...cursorPosition};
};

export {
    questsPath,
    questsParams,
    getCursorPosition,
};
