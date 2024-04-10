import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';


export class ToDo extends Component {
    state = {
        userInput: '',
        toDoList: []
    };

    onChangeEvent(e) {
        this.setState({ userInput: e });
    }

    addTask(input) {
        if (input) {
            let listArray = this.state.toDoList;
            listArray.push(input);
            this.setState({ toDoList: listArray, userInput: '' });
        } else {
            alert('Please, enter what you wabt to do');
        }
    }

    addDone(e) {
        const li = e.target;
        li.classList.toggle('done');
    }

    deleteTask(index) {
        let listArray = [...this.state.toDoList];
        listArray.splice(index, 1);
        this.setState({ toDoList: listArray });
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="makingTask">
                    <input
                        type='text'
                        placeholder="What do you need to do?"
                        onChange={(e) => this.onChangeEvent(e.target.value)}
                        value={this.state.userInput}
                    />
                    <button
                        onClick={() => this.addTask(this.state.userInput)}
                    >Add</button>
                    < ul >
                        {this.state.toDoList.map((task, index) => (
                            <li
                                onClick={this.addDone}
                                key={index} >
                                {task}
                                < FontAwesomeIcon icon={faDeleteLeft} className='icon' onClick={(e) => { e.stopPropagation(); this.deleteTask(index); }} />
                            </li>
                        ))}
                    </ul>
                </div>
            </form >
        );
    }
}