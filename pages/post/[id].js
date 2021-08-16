import axios from 'axios';
import PostDetailTitle from '../../components/PostDetailTitle/postDetailTitle';
import Header from '../../components/Header/header';
import PostDetailComments from '../../components/PostDetailComments/postDetailComments';
import {Grid} from '@material-ui/core'
export async function getServerSideProps(context) {
    const { id } = context.query;
    try {
        var response = await axios.get(`${process.env.NEXT_PUBLIC_ALGOLIA}/api/v1/items/${id}`)
        return {
            props: {
                post: response.data,
            }

        };
    } catch (error) {
        console.error(error);
    }
};

export default function Post({ post }) {
    return (
        <Grid container direction="column">
            <Header />
            <PostDetailTitle
                points={post.points}
                author={post.author}
                date={(post.created_at)}
                title={post.title}
                url={post.url}
            />
            <PostDetailComments childrenArray={post.children}/>
        </Grid>
    )
}


