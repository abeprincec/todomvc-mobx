import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class TodoTags extends React.Component {
  render() {
    const { todoStore } = this.props;
    const tags = todoStore.todos.slice();
  }
}
