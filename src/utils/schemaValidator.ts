export const getErrorMessageByPropertyName = (
  obj: Record<string, any>,
  propertyPath: string
) => {
  const properties = propertyPath.split(".");
  let value = obj;

  for (let prop of properties) {
    if (value[prop]) {
      console.log(value[prop], "midde");
      value = value[prop];
    } else {
      return undefined;
    }
  }

  return value.message;
};
