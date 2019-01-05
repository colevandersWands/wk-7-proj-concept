
console.log('%c \n 0: LOG', 'color: green; font-weight: bold;');

  const log = [copy(state)];

console.log('add_log_entry( new_entry )');
  console.log('\t(documentation goes here)')
  function add_log_entry(new_entry) {
    log.push(new_entry);
    log.push(copy(state));
  }

console.log('view_log_handler( )');
  console.log('\t(documentation goes here)')
  function view_log_handler() {
    console.log('log: ', log);
  }

  function copy(obj) {
    return JSON.parse(JSON.stringify(obj));
  }


