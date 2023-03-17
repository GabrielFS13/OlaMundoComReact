import PostModelo from "components/PostModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Route, Routes, useParams } from "react-router-dom"
import './Post.css';

import posts from '../../components/json/posts.json';
import NaoEncontrada from "components/NaoEncontrada";
import PaginaPadrao from "components/PaginaPadrao";

export default function Post(){
    const parametros = useParams();
    const post = posts.find((el) => el.id === Number(parametros.id))
    if(!post){
        return <NaoEncontrada />
    }
    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={
                <PostModelo fotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}>
                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </div>
            </PostModelo>
            }/>
            </Route>
            
        </Routes>
        
    )
}