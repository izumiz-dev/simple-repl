export function runCode(code, isDebug = false) {
  const execString = `
  "use strict";
  try {
    ${code}
  } catch (error) {
    console.error(error);
    return error.message;
  }
  `;

  isDebug ? console.log("input:\n", execString) : null;
  const result = Function(execString)();
  isDebug ? console.log("output:\n", result) : null;
  return result;
}
