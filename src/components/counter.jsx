import React, { Component } from 'react';

//"this" can reference different objects
//if a fn is called as part of a method in an obj, "this" in that fn always return a reference to that obj
//if that fn is called as a standalone fn without an obj reference "this" by default returns a reference to the window obj

//constructor: is a method that is called when an obj of the class(Counter) is created
//in the constructor we do've access to "this"/the Counter obj/class
//used for child class

//Counter is a child class, Component is its parent class
//"Super" is calling the constructor of the parent class

class Counter extends Component {
    state = {
        value: 0
        // imageUrl: 'https://picsum.photos/200'
    };
        
        //the bind method returns new instance of the handleIncrement fn
        //in the fn "this" is always referencing the current obj/counter obj/class
        //not gonna change

    
    
    // styles = {
    //     fontSize: 25,
    //     fontWeight: 'bold'
    // }
    handleIncrement = product => {
        console.log(product)
        this.setState(state => ({
            value: state.value + 1
        }))
        console.log("Clicked", this)
    }

    render() {
        // console.log('props =>', this.props)
        return (
            <div> 
                {/* <img src={this.state.imageUrl} alt="" /> */}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span> 
                <button 
                    className='btn btn-secondary btn-sm'
                    onClick={() => this.handleIncrement( { id: 1 })}                    
                >Increment</button> 
                {/* <ul>
                    {this.list()}
                </ul> */}
                {/* another way to render the list */}
                {/* {this.state.tags.length == 0 && "There're no tags"} */}
            </div>
        );
    }
    list() {
        return this.state.tags.length === 0 ? <p>"There're no tags"</p> : this.state.tags.map(each => <li key={each}>{each}</li>);
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count) === 0 ? 'warning' : 'primary';
        return classes;
    }
    formatCount() {
        const {value} = this.state;
        // const x = <h1>Zero</h1>;
        return value === 0 ? 'Zero' : value;
    }
    
}


export default Counter; 