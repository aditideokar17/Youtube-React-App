import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + " 🚀",
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
        <h1 className="font-bold mx-2 mb-2 text-2xl">Live Chat</h1>
      <div className="w-[420px] mr-2 h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {
            // Disclaimer: Don't use indexes as keys
            chatMessages.map((c, i) => (
              <ChatMessage key={i} name={c.name} message={c.message} />
            ))
          }
        </div>
      </div>

      <form
        className="w-[420px] mt-2 rounded-lg p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addMessage({
              name: "Aditi Deokar",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="p-1 w-[250px] border border-gray-300 outline-none"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="py-1 px-3 mx-2 bg-gray-200 font-bold rounded-sm">Send</button>
      </form>
    </>
  );
};
export default LiveChat;