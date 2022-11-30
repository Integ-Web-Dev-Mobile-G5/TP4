import React from 'react';
import Formulaire from './Formulaire.js';

function App() {
    return ( <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );

}

export default App;