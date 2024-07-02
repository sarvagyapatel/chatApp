import { useEffect, useState } from "react";
import authService from "../../appwrite/auth";
import appwriteService from "../../appwrite/config";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../../store/chatSlice";

function Conv() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [host, setHost] = useState("");
  const [documentId, setDocumentId] = useState("");

  useEffect(() => {
    authService.getCurrentUser()
      .then((res) => {
        setHost(res.email);
        return appwriteService.getFriends(res.email);
      })
      .then((res) => {
        // console.log(res);
        return appwriteService.getChats(res.documents[0].allFriendsId[0]);
      })
      .then((res) => {
        setLoading(false);
        console.log(res);
        setDocumentId(res.$id);
        dispatch(addChat(res));
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, [dispatch]);

  const data = useSelector((state) => state.chats);
  const [newMessage , setNewMessage] = useState("");

  const sendMessage = ()=>{
     let chats = [...data.chats]
     let chatOwner = [...data.chatOwner]
     
     chats.push(newMessage);
     chatOwner.push(host);

     const newData = {
      chats,
      chatOwner,
     }
    
     appwriteService.updateChats(documentId, newData).then((res)=>{
      dispatch(addChat(res));
     })

  }
  // console.log(data)

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (data !== "") {
    return (
      <div className="h-screen max-w-full bg-cyan-800 flex flex-col rounded-r-2xl">
        <div className="width-full bg-cyan-900 rounded-tr-2xl">
          <div className="flex flex-row">
            <div className="p-4">
              <li className="list-none text-white text-4xl font-semibold">
              example1@gmail.com
              </li>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-full">
          {data.chats.map((chat, index) => (
            <div
              key={index}
              className={`flex flex-row ${
                data.chatOwner[index] === host
                  ? "justify-end"
                  : "justify-start"
              } p-6`}
            >
              <li className="list-none text-white text-2xl p-1 rounded-lg bg-cyan-950 border-cyan-950 border-2">
                {chat}
              </li>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-between w-full gap-8 ">
          <div className="w-full">
            <input className="border-2 m-2 p-2 rounded-xl text-gray-700 font-semibold w-full text-xl" type="text" placeholder="Type a message"
              onChange={(e)=>{
                e.preventDefault();
                setNewMessage(e.target.value);
              }}
            />
          </div>
          <div className="">
            <button className="border-2 m-2 p-2 border-cyan-950 bg-cyan-950 rounded-xl text-xl text-white font-semibold"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default Conv;
