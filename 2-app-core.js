console.log('%c APP CORE', 'color: green; font-weight: bold;')



  const behavioral_tests = [
    { it_should: 'add and remove', actions: [
      {action: 'add_todo', args: [['tim', 'mit']],
        expected: {next_id: 2, todos: [{id:0,title:'a',body:'b'},{id:1,title:'tim',body:'mit'}]} },
      {action: 'delete_todo', args: [[1]],
        expected: {next_id:2,todos:[{id:0,title:'a',body:'b'}]} }
    ]},
    { it_should: 'log and reset', actions: [
      {action: 'read_all', args: [[]], expected: [{id:0,title:'a',body:'b'}]},
      {action: 'reset_state', args: [{next_id:0,todos:[]}],expected: {next_id:0,todos:[]}},
      {action: 'read_all', args: [[]],expected: []}
    ]},
    { it_should: 'read and reset log', actions: [
      {action: 'return_log', args: [[]], expected: null},
      {action: 'reset_log', args: [[]],expected: []},
      {action: 'return_log', args: [[]],expected: []},
    ]}
  ];
  const tester = build_app(state, actions);
  test_app(tester, behavioral_tests)



  const app = build_app(state, actions);