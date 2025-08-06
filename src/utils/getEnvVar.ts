
const getEnvVar = (name:string) => {
 const value =  process.env[name]
  if(value) return value
  throw new Error(`We cannot find any variable with name ${name}`)
};
export default getEnvVar;
