import {useEffect, useState} from 'react';
import { RequestGet } from '../apis/Request';

interface Post {
    id: number;
    title: string;
    content: string;
    img_URL: string;
    tp_CD: string; //커미션 종류
    bg_YN: string; //배경 유무
    rgtr_DT: string; //등록 날짜
}

const BlogList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        RequestGet("/post/list").then(resp => {
            if(resp.data) setData(resp.data)
        });

    }, []);

    const renderList = () => {
        return data.map((post: Post, idx)=> {
            return <div key={idx}>
                <div>{post.id}</div>
                <div>{post.title}</div>
                <img src={post.img_URL} />
            </div>;
        })
    };
    return <>{renderList()}</>;
}

export default BlogList;