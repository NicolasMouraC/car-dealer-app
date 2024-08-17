type Fetcher = () => Promise<any>;

function wrapPromise(fetcher: Fetcher) {
  let status = "pending";
  let result: any;
  const suspender = fetcher().then(
    (data) => {
      status = "success";
      result = data;
    },
    (error) => {
      status = "error";
      result = error;
    },
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}

export { wrapPromise };
