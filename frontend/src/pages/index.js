export default function Home() {
  const addUser = async (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      id: e.target.id.value,
    };
    console.log("clicked");
    console.log(data);
    const request = await fetch("http://localhost:3001/add-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };
  return (
    <div>
      <form onSubmit={addUser}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" />
        <label htmlFor="id">id</label>
        <input type="text" name="id" />
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}
