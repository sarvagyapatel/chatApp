import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import appwriteService from "../../appwrite/config";
import authService from "../../appwrite/auth";
import { useDispatch, useSelector } from "react-redux";
import { addfriends } from "../../store/friendSlice";

function Chats() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((res) => {
        // console.log(res.email);
        return appwriteService.getFriends(res.email);
      })
      .then((friends) => {
        // console.log(friends);
        dispatch(addfriends(friends));
        setLoading(false);
      })
      .catch((err) => {
        // console.error(err);
        setError(err);
        setLoading(false);
      });
  }, [dispatch]);

  const data = useSelector((state) => state.friends);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data !== "") {
    return (
      <div className="h-screen w-full bg-cyan-900 flex flex-col rounded-l-2xl">
        <div className="w-full h-fit flex flex-row gap-4 items-center justify-center">
          <div className="flex flex-row gap-11 w-full p-4 bg-cyan-950 justify-between rounded-tl-2xl">
            <li className="text-4xl list-none text-white font-semibold hover:text-orange-500">
              ChatApp
            </li>
            <Link to="/login">
              <li className="text-4xl list-none text-white font-semibold hover:text-orange-500">
                LogIn
              </li>
            </Link>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col gap-6 px-3 mt-8 w-full">
            {data.documents[0].allFriends.map((user) => (
              <div
                key={user}
                className={`w-full flex flex-row justify-start items-start rounded-lg p-2 gap-2 hover:cursor-pointer`}
                // onClick={() => handleUserClick(index)}
              >
                {/* <img className="h-8 w-8 rounded-full" src={user.img} alt="User Profile" /> */}
                <li className="text-white text-3xl list-none font-semibold">
                  {user}
                </li>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default Chats;
