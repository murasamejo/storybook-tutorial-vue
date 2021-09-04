import Task from './Task.vue';

import { action } from '@storybook/addon-actions';

// デフォルトエクスポートで基礎となるコンポーネントを定義している
export default {
  component: Task,
  // title -- how to refer to the component in the sidebar of the Storybook app,
  title: 'Task',
  // excludeStories -- information required by the story, but should not be rendered by the Storybook app.
  excludeStories: /.*Data$/,
  // argTypes -- specify the args behavior in each story.
  // https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onPinTask: {},
    onArchiveTask: {},
  },
};

export const actionsData = {
  onPinTask: action('pin-task'),
  onArchiveTask: action('archive-task'),
};

// 記述量を減らすために Template で大まかに定める
const Template = args => ({
  components: { Task },
  setup() {
    return { args, ...actionsData };
  },
  template: '<Task v-bind="args" />',
});

// Template.bind({}) is a standard JavaScript technique for making a copy of a function. We use this technique to allow each exported story to set its own properties, but use the same implementation.

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};
