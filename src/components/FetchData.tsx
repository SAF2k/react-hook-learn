import { useState, useEffect } from "react";
import Container from "./Container";
import axios from "axios";

const FetchData = () => {

  const [post, setPost] = useState({id: 0, title: ""});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => setPost(response.data))
      .catch(error => console.log(error));
  }, [id]);

  return (
    <>
      <Container
        BackgroundColor="bg-gradient-to-b from-red-500 via-gray-500 to-cyan-400"
        ContainerColor="text-white bg-gradient-to-r from-blue-600 to-violet-600"
        header="useEffect with cleanup"
      >
        <div className="text-4xl flex items-center border rounded-xl border-white">
          <button
            disabled={id === 1}
            className="border border-white shadow-sm px-4 rounded-l-lg disabled:opacity-50"
            onClick={() => setId(id === 1 ? 1 : id - 1)}
          >
            Previous Post
          </button>
          <button
            className="border-white border px-11 rounded-r-lg shadow-sm"
            onClick={() => setId((prevId) => prevId + 1)}
          >
            Next Post
          </button>
        </div>
        <div className="w-[26vw] h-[17vh] lg:text-2xl flex border rounded-xl border-black flex-col py-2 text-black bg-gradient-to-tr from-rose-200 via-red-300-500 to-cyan-100">
          <span className="p-4">Id : {post.id}</span>
          <span className="p-4">Title : {post.title}</span>
        </div>

        <p className="text-xl w-[650px]"></p>
        <p className="text-lg font-semibold pt-3">
          Folder Location: src/components/FetchData.tsx
        </p>
      </Container>
    </>
  );
};

export default FetchData;
