export default defineEventHandler(async event => {
  const body = await readBody(event);
  const config = useRuntimeConfig();
  const managerPass = config.managerPass;

  if (body.password === managerPass) {
    return true;
  } else {
    return false;
  }
});