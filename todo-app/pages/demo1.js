import React, { useState } from "react";

const EnhancedComponent = ({ theme, toggleTheme }) => {
  return (
    <div onClick={toggleTheme}>
      {theme ? "Site on Dark Theme" : "Site on Light Theme"} - My site
    </div>
  );
};

const withTheme = (Component) => {
  function Func(props) {
    const [theme, setTheme] = useState(true);
    return (
      <Component
        {...props}
        theme={theme}
        toggleTheme={() => setTheme(!theme)}
      />
    );
  }

  return Func;
};

const App = withTheme(EnhancedComponent);

export default App;
