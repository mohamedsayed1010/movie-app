import "./modal.css";
export default function Modal({ movie, toggleModal, status }) {
  return (
    <>
      <div className={`model  ${status ? "done" : ""} `}>
        <a href="#" className="modalClose" onClick={toggleModal}>
          <ion-icon name="close-outline"></ion-icon>
        </a>
        <iframe
          src={movie.video}
          frameBorder="0"
          title={`${movie.title} | Official Trailer`}
          width="1280"
          height="720"
          allow="accelerometer; clipboard-write; gyroscope; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
