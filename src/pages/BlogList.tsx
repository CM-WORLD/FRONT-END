import { useEffect, useState } from 'react';
import { RequestGet } from '../apis/Request';
import './BlogList.scss';
import Footer from '../common/Footer';

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
            if (resp.data) setData(resp.data)
        });

    }, []);

    const renderList = () => {
        return data.map((post: Post, idx) => {
            return <div key={idx} className="post-item">
                <a href={"posts?id=" + post.id}>
                    <img src={post.img_URL} />
                </a>
                <div className="title">{post.title}</div>
                <div className="content">{post.content}</div>

            </div>;
        })
    };
    return <>
    <div className="gallery">
        <div className="header">
            COMMISSIONS
        </div>
        <div className="works">
            {renderList()}
        </div>
    </div>
    <Footer />
    </>;
}

export default BlogList;