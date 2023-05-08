const { exec } = require("child_process");

const runCommand = (command: string) => {
  return new Promise((resolve, reject) => {
    exec(command, (error: any, stdout: any, stderr: any) => {
      if (error) {
        console.warn(error);
      }
      console.log(stdout ? stdout : stderr);
      resolve(stdout ? stdout : stderr);
    });
  });
};
export default runCommand;
