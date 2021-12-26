import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/authContext";
import { db } from "../../firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { Input } from "antd";

import "./Chat.css";

const Chat = () => {
  const {
    user: { email },
  } = useAuth();
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");

  const handleMessageSend = async (e) => {
    await addDoc(collection(db, "messages"), {
      user: email,
      message: value,
      createdData: Date.now(),
    });
    setValue("");
  };

  useEffect(() => {
    const q = query(collection(db, "messages"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let messagesArray = [];
      querySnapshot.forEach((doc) => {
        messagesArray.push({ ...doc.data() });
      });
      messagesArray.sort((a, b) => a.createdData - b.createdData);
      setMessages(messagesArray);
    });
  }, []);

  return (
    <div className="chat-container" style={{ backgroundColor: "#e9e9e9" }}>
      <container className="chat-body" style={{ with: "100%" }}>
        <div
          style={{
            width: "100%",
            height: "60vh",
            border: "1px solid grey",
            overflowY: "auto",
            margin: "30px auto 0",
            background: "#cfcfcf",
            borderRadius: "20px",
          }}
        >
          {messages.map((item) => (
            <div
              key={item.createdData}
              style={{
                margin: "10px",
                padding: "5px",
                marginLeft: email === item.user ? "auto" : "10px",
                width: "fit-content",
              }}
            >
              <div
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  color: email === item.user ? "#323fb3" : "#14162b",
                }}
              >
                {item.user}
              </div>
              <div style={{ fontSize: "20px" }}>{item.message}</div>
            </div>
          ))}
        </div>

        <Input
          fullWidth
          style={{
            margin: "5px",
            background: "white",
            width: "100%",
            borderRadius: "5px",
            marginTop: "20px",
            height: "40px",
          }}
          maxRows={2}
          variant={"outlined"}
          placeholder="Введите текст"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="auth-btn"
          onClick={handleMessageSend}
          variant="contained"
          style={{ margin: "10px 20px 15px 0" }}
        >
          Отправить
        </button>
      </container>
    </div>
  );
};

export default Chat;
