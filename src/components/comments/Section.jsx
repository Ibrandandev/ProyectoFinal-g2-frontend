import "../../css/comments.css";
import { useState, useEffect } from "react";
import { getComments, createComment } from "../../helpers/commentsApi";
import Swal from "sweetalert2";

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
    const resp = await createComment(data);
    if (resp.message === "Exitoso") {
      Swal.fire(resp.message, "", "success");
    } else {
      Swal.fire(resp.message, "", "warning");
    }

    setReview("");
  };

  return (
    <section className="container mt-5 py-4">
      <h2 className="text-center">Comentarios</h2>
      <div>
        {comments.map((comment) => (
          <div
            key={comment._id}
            className="bg-white border border-danger rounded px-3 py-2 mb-2 "
          >
            <p className="m-0 text-orange fw-bold">
              {comment.usuario.nombre} {comment.usuario.apellido}
            </p>
            <p className="m-0 text-black">{comment.comentario}</p>
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
            <button
              className="btn btn-comment bg-our-white text-orange"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CommentsSection;
