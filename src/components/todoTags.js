import React from 'react';
import { observer } from 'mobx-react';
import TodosWithTags from './todosWithTags';

@observer
export default class TodoTags extends React.Component {
  render() {
    const { todoStore, viewStore } = this.props;
    if (todoStore.filterTags.length === 0) return null;
    return (
      <div>
        {todoStore.filterTags.map((tag, index) => {
          return (
            <button
              key={index}
              style={{ margin: '3px', backgroundColor: 'red' }}
              value={`${tag}`}
              onClick={e => this.showTag(e)}>
              {tag}
            </button>
          );
        })}
      </div>
    );
  }

  showTag = e => {
    // const { todoStore } = this.props;
    // const tagName = e.currentTarget.value;

    // this.props.todoStore.tagName = tagName;
    // const todos = todoStore.todos.slice();

    // const check = todos.filter(item =>
    //   item.tags.includes(this.props.todoStore.tagName)
    // );

    this.props.todoStore.tagName = e.currentTarget.value;

    // console.log(check);
    console.log(this.props.todoStore.checkTodosWithFitler());
  };
}
