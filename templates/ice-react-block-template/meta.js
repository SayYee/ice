const BLOCK_CATEGORIES = [
  '表格',
  '表单',
  '图表',
  '列表',
  '模态框',
  '筛选',
  '数据展示',
  '信息展示',
  '异常',
  '欢迎页',
  '视频',
  '其他',
];

module.exports = {
  prompts: {
    title: {
      type: 'input',
      message: 'title',
      default: 'demo block',
      validate: (value) => {
        value = value.trim();
        if (!value) {
          return 'title cannot be empty';
        }
        return true;
      },
    },
    version: {
      type: 'string',
      required: true,
      message: 'version',
      default: '1.0.0',
    },
    description: {
      type: 'string',
      required: true,
      message: 'description',
      validate: (value) => {
        value = value.trim();
        if (!value) {
          return 'description cannot be empty';
        }
        return true;
      },
    },
    categories: {
      type: 'checkbox',
      message: 'categories',
      choices: BLOCK_CATEGORIES,
      validate: (answer) => {
        if (answer.length < 1) {
          return 'It must be at least one';
        }
        return true;
      },
      filter: (answer) => {
        return answer;
      },
    },
  },
};
