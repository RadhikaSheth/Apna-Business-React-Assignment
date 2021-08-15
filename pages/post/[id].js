import axios from 'axios';
import PostDetailTitle from '../../components/PostDetailTitle';
import Header from '../../components/Header';
import PostDetailComments from '../../components/PostDetailComments';
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
                date={(post.created_at).substr(0, 4)}
                title={post.title}
                url={post.url}
            />
            <PostDetailComments children={post.children}/>
        </Grid>
    )
}


