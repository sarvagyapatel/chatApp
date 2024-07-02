
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import appwriteService from '../../appwrite/config';
import authService from '../../appwrite/auth';
import { useDispatch, useSelector } from "react-redux";

function Chats() {
  const [users, setUsers] = useState([
    {
      email: "example1@gmail.com",
      name: "example1",
      img: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528",
      select: false
    },
    {
      email: "example2@gmail.com",
      name: "example2",
      img: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528",
      select: false
    },
    {
      email: "example3@gmail.com",
      name: "example3",
      img: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528",
      select: false
    },
    {
      email: "example4@gmail.com",                             
      name: "example4",
      img: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528",
      select: false
    },
    {
      email: "example5@gmail.com",
      name: "example5",
      img: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528",
      select: false
    },
    {
      email: "example6@gmail.com",
      name: "example6",
      img: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528",
      select: false
    },
    {
      email: "example7@gmail.com",
      name: "example7",
      img: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528",
      select: false
    },
    {
      email: "example8@gmail.com",
      name: "example8",
      img: "https://iSignOut0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528",
      select: false
    },
    {
      email: "example9@gmail.com",
      name: "example9",
      img: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528",
      select: false
    },
    {
      email: "example10@gmail.com",
      name: "example10",
      img: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528",
      select: false
    },
    // Add more users as needed
  ]);

  const handleUserClick = (clickedIndex) => {
    const updatedUsers = users.map((user, index) =>
      index === clickedIndex ? { ...user, select: !user.select } : user
    );
    setUsers(updatedUsers);
  };

  useEffect(() => {
    authService.getCurrentUser().then((res)=>{
      console.log(res.email)
      appwriteService.getChats("6681b5e7000174f4525b").then((chats)=>{console.log(chats)})
      appwriteService.getFriends(res.email).then((friends)=>{
        console.log(friends);
      })
    })
  }, [])
  

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
          {users.map((user, index) => (
            <div
              key={user.email}
              className={`w-full flex flex-row justify-start items-start rounded-lg p-2 gap-2 hover:cursor-pointer ${user.select ? "bg-cyan-950" : "bg-cyan-900"}`}
              onClick={() => handleUserClick(index)} 
            >
              <img className="h-8 w-8 rounded-full" src={user.img} alt="User Profile" />
              <li className="text-white text-3xl list-none font-semibold">
                {user.name}
              </li>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chats;





