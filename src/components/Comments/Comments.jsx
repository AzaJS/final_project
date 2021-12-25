import React, { useContext, useEffect, useState } from "react";
import { Comment, Avatar, Input, Modal, Tooltip } from "antd";
import { commentsContext } from "../../contexts/commentsContext";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useAuth } from "../../contexts/authContext";
import moment from "moment";

const Comments = ({ oneProduct }) => {
  const {
    createComment,
    getComments,
    updateComment,
    deleteComment,
    comments,
    oneComment,
    getOneComment,
  } = useContext(commentsContext);
  const { user } = useAuth();
  const [comment, setComment] = useState("");
  const [editComment, setEditComment] = useState("");
  const [createdTime, setCreatedTime] = useState(null);

  let newComment = {
    user: user.email,
    productID: oneProduct.id,
    comment: comment,
    createdAt: createdTime,
  };

  let editedComment = {
    user: user.email,
    productID: oneProduct.id,
    comment: editComment,
    createdAt: createdTime,
  };

  useEffect(() => {
    getComments();
  }, []);

  let filteredComs = comments.filter((item) => {
    return item.productID == oneProduct.id;
  });

  let time = Date.now();

  const onFinish = () => {
    setCreatedTime(time);
    createComment(newComment);
    setComment("");
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (id) => {
    getOneComment(id);
    setIsModalVisible(true);
    setEditComment(oneComment.comment);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onEdit = () => {
    updateComment(oneComment.id, editedComment).then(() => handleCancel());
  };

  return (
    <div>
      {filteredComs.map((item) => (
        <Comment
          actions={[
            <span>
              {user.email === "aziret1@gmail.com" ? (
                <DeleteOutlined onClick={() => deleteComment(item.id)} />
              ) : null}
            </span>,
            <span>
              {user.email === "aziret1@gmail.com" ? (
                <EditOutlined onClick={() => showModal(item.id)} />
              ) : null}
            </span>,
          ]}
          author={<a>{item.user}</a>}
          avatar={
            <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
          }
          content={<p>{item.comment}</p>}
          datetime={
            <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          }
        />
      ))}
      <div>
        <Input
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <button
          className="auth-btn"
          style={{ marginTop: "2%" }}
          onClick={onFinish}
        >
          Add comment
        </button>
      </div>
      <Modal
        title="Edit comment"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <div>
          <Input
            value={editComment}
            onChange={(e) => {
              setEditComment(e.target.value);
            }}
          />
          <button
            className="auth-btn"
            style={{ marginTop: "2%", width: "auto" }}
            onClick={onEdit}
          >
            Edit comment
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Comments;
