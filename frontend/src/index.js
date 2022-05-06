import React from "react";
import { ReactDOM } from "react-dom";
import { BrowserRouter } from "react-router-dom";

function Root() {
    return (
        <ReduxProvider store={store}>
            <BrowserRouter>
                <App />?
            </BrowserRouter>
        </ReduxProvider>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <Root />
    </React.StrictMode>
    document.getElementById('root')
)