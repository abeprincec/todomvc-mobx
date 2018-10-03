import React from 'react';
import { observer } from 'mobx-react';

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
              style={{
                margin: '3px',
                backgroundColor: '#CCC',
                borderRadius: '3px',
                padding: '5px',
                color: '#111'
              }}
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
    this.props.todoStore.tagName = e.currentTarget.value;
  };
}
