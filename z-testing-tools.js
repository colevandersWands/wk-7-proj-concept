function run_tests(_target, _cases) {
  for (let t_case of _cases) {
    const expected = t_case.expected;
    const actual = _target(... t_case.args, false);

    let pass;
    if (typeof expected === 'object') {
      const _actual = JSON.stringify(actual);
      const _expected = JSON.stringify(expected);
      pass = _actual === _expected;
    } else {
      pass = actual === expected;
    };

    if (!pass) {
      console.log(`${t_case.name}: \n`);
      console.log(`   actual: ${typeof actual},`, actual);
      console.log(`   expected: ${typeof expected},`, expected);
    };
  };
};

function test_dom_component(_target, _cases) {
  const test_div = document.getElementById('componentest');
  const component_name = document.createTextNode(_target.name);
  test_div.appendChild( document.createElement("br") );
  test_div.appendChild(component_name);
  test_div.appendChild( document.createElement("br") );

  for (let t_case of _cases) {
    try {
      const new_component = _target(...t_case.args);
      test_div.appendChild( new_component );
    } catch(err) {
      console.log(component_name, t_case.name);
      console.log(err);
    }
  }; 
}

function test_app(_app, _tests) {
  let log = [];
  for (let test of _tests) {
    let result = run_actions(_app, test.actions);
    log.push({[test.it_should]: result});
  }
  console.log(log)


  function run_actions(_app, _cases) {

    let log = {};

    for (let i = 0; i < _cases.length; i++) {

      let result = action_assert(_app, _cases[i]);
      if (result !== true) {
        log[i] = result;
      }

    };
    if (Object.keys(log).length === 0) {
      return true
    } else {
      return log
    }
  };

  function action_assert(_app, _test) {
    let action = _test.action;
    let args = _test.args;
    let expected = _test.expected;
    if (expected === null) {
      return true;
    }

    let actual = _app(action, ...args);

    let pass;
    if (typeof expected === 'object') {
      const _actual = JSON.stringify(actual);
      const _expected = JSON.stringify(expected);
      pass = _actual === _expected;
    } else {
      pass = actual === expected;
    };

    if (pass) {
      return true
    } else {
      return { action, actual, expected  }
    };
  };

}
