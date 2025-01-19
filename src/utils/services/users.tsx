export const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/usersData");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const response = await res.json();
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
