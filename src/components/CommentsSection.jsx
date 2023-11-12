import "../css/comments-section.css";
import { useState, useEffect } from "react";
import { getComments, postComment } from "../helpers/commentsApi";

const CommentsSection = () => {
  const [comments, setComments] = useState([]);
  const [review, setReview] = useState("");

  useEffect(() => {
    traerComentarios();
  }, [comments]);

  const traerComentarios = async () => {
    const { comments } = await getComments();
    setComments(comments);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { comentario: review };
    const resp = await postComment(data);
    console.log(resp);
    setReview("");
  };

  return (
    <section className="container">
      <h2 className="text-center">Comentarios</h2>
      <div>
        {comments.map((comment) => (
          <div
            key={comment._id}
            className="bg-white border border-danger rounded px-3 py-2 mb-2 "
          >
            <p className="m-0 text-orange fw-bold">Usuario</p>
            <p className="m-0">{comment.comentario}</p>
          </div>
        ))}
        <form onSubmit={handleSubmit}>
          <input
            id="review"
            className="w-100 p-3 rounded opacity-75 mb-2"
            placeholder="Ingrese un comentario"
            required
            value={review}
            onChange={(e) => {
              setReview(e.target.value);
            }}
          />
          <div className="text-end">
            <button className="btn btn-danger" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CommentsSection;
