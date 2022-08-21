import React, {Component} from 'react';
import Counter from './counter'

//Every react component has a property called 'props'
//Props's a js obj that includes all the attributes that we set in the component

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    }
    
    render() {
        console.log(this.state.counters)
        return (
            <div>
                {this.state.counters.map( (counter) => (
                <Counter key={counter.id} value={counter.value} id={counter.id} />
                ))
                }
                {console.log(<Counter />)}
{/* value and selected're properties of that "props" obj */}
{/* "key" won't be part of that b/c it's a special attribute for uniquely identifying elements */}
            </div>
        )
    }
}

export default Counters;