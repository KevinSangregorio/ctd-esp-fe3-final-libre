export const getAllDentists = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const response = await fetch(url);
  const dentists = await response.json();
  return dentists;
};

export const getDentistByID = async (id) => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const response = await fetch(url);
  const dentist = await response.json();
  return dentist;
};
