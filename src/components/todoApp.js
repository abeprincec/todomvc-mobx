import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import TodoEntry from './todoEntry';
import TodoOverview from './todoOverview';
import TodoFooter from './todoFooter';
import TodoTags from './todoTags';
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from '../constants';

import DevTool from 'mobx-react-devtools';

@observer
export default class TodoApp extends React.Component {
  render() {
    const { todoStore, viewStore } = this.props;
    return (
      <div>
        <div>
          <DevTool />
          <header className="header">
            <h1>todos</h1>
            <TodoEntry todoStore={todoStore} />
          </header>
          <TodoTags todoStore={todoStore} viewStore={viewStore} />
          {
            <div>
              {this.props.todoStore.checkTodosWithFitler().length > 0
                ? this.props.todoStore
                    .checkTodosWithFitler()
                    .map((elem, index) => <div key={index}>{elem.title} </div>)
                : null}
            </div>
          }
          <TodoOverview todoStore={todoStore} viewStore={viewStore} />
          <TodoFooter todoStore={todoStore} viewStore={viewStore} />
        </div>
      </div>
    );
  }

  componentDidMount() {
    if (__CLIENT__) {
      var { Router } = require('director/build/director');
      var viewStore = this.props.viewStore;
      var router = Router({
        '/': function() {
          viewStore.todoFilter = ALL_TODOS;
        },
        '/active': function() {
          viewStore.todoFilter = ACTIVE_TODOS;
        },
        '/completed': function() {
          viewStore.todoFilter = COMPLETED_TODOS;
        }
      });
      router.init('/');
    }
  }
}

TodoApp.propTypes = {
  viewStore: PropTypes.object.isRequired,
  todoStore: PropTypes.object.isRequired
};
