console.log('%c 3: HANDLERS', 'color: green; font-weight: bold;')

  console.log('read_all_handler( )');
    console.log('\t(documentation goes here)')
    
    function read_all_handler() {                                          
                                                      
      // execute logic
      const all_todos = app('read_all');           

      // display to user
      const all_todos_div = display_all_component(all_todos);
      render(all_todos_div);

      // log interaction
      const new_entry = {};
      new_entry.action = 'read all';
      new_entry.next_id = state.next_id;
      new_entry.todos = all_todos;
      add_log_entry(new_entry);

    }




  console.log('add_todo_handler( )');
  console.log('\t(documentation goes here)')
    function add_todo_handler() {

      // gather user input
      const title = document.getElementById('new-title').value;
      if (title === '' || title === 'new title') {
        throw new Error('enter a new title');
      };

      const body = document.getElementById('new-body').value;
      if (body === '' || body === 'new body') {
        throw new Error('enter a new body');
      };

      // execute logic
      const new_state = app('add_todo', [title, body]);

      // display to user
      const all_todos_div = display_all_component(new_state.todos);
      render(all_todos_div);
     

      // log interaction
      const new_entry = {};
      new_entry.action = 'add todo';
      new_entry.args = {title, body};
      new_entry.result = new_state;
      add_log_entry(new_entry);

    }





  console.log('read_one_handler( )'); 
    console.log('\t(documentation goes here)')
    function read_one_handler( id ) {

      // no user input, it's preloaded in the onclick function

      // execute logic
      const one_todo = app('read_one', [id]);

      // display to user
      const todo_div = read_one_component(one_todo);
      render(todo_div);

      // log interaction
      const new_entry = {};
      new_entry.action = 'read one';
      new_entry.args = [id];
      new_entry.result = one_todo;
      add_log_entry(new_entry);

    }


  console.log('update_handler( )'); 
  console.log('\t(documentation goes here)')
    function update_handler( id ) {

      // gather user input
      const title = document.getElementById('new-title').value;
      if (title === '' || title === 'new title') {
        throw new Error('enter a new title');
      };

      const body = document.getElementById('new-body').value;
      if (body === '' || body === 'new body') {
        throw new Error('enter a new body');
      };

      // execute logic
      app('update', [id, title, body]);
      const all_todos = app('read_all', []);

      // display to user
      const all_todos_div = display_all_component(all_todos);
      render(all_todos_div);

      // log interaction
      const new_entry = {};
      new_entry.action = 'update';
      new_entry.args = {id, title, body};
      new_entry.result = all_todos;
      add_log_entry(new_entry);

    }


  console.log('delete_handler( )');
  console.log('\t(documentation goes here)')
    function delete_handler( id ) {
      // no input to gather, was passed in by argument

      // execute logic
      app('delete_todo', [id])
      const all_todos = app('read_all');

      // display to user
      const all_todos_div = display_all_component(all_todos);
      render(all_todos_div);

      // log interaction
      const new_entry = {};
      new_entry.action = 'delete';
      new_entry.args = [id];
      new_entry.result = all_todos;
      add_log_entry(new_entry);

    }