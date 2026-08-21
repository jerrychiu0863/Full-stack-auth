function Home({ user, errMsg }) {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);

    const formatted = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Luxembourg",
      dateStyle: "medium",
      timeStyle: "medium",
    }).format(date);

    return formatted;
  };

  return (
    <div className="text-gray-700">
      {errMsg && <p>{errMsg} </p>}
      {user ? (
        <>
          <p>Welcome! </p> <p>{user.email}</p>
          <p>
            {user.login_at &&
              `Last time log in at : ${formatDate(user.login_at)}`}
          </p>
        </>
      ) : (
        <p>Try Login or Register!</p>
      )}
    </div>
  );
}

export default Home;
