import { async } from 'regenerator-runtime';
import { TIMEOUT_SEC } from './config';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]); //in Promise.race(), whichever promise gets fulfilled first will be returned.
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    return data; //this returns data variable.this data variable is going to be the resolved value of the promise that getJSON function returns.
  } catch (err) {
    throw err; //by re-throwing the error we are propagating the error from one async function to another async function so that the error does not get rejected and also the promise would get rejected.the error should appear in model.js.
  }
};
