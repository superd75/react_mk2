
import { useParams } from 'react-router-dom';

import Post_01_1 from './Post_01_1';



    function Post_01 (){
        const params = useParams()
        //console.log('check', params);
        //console.log('check', params.pgname);
        const PG_tit = <div className="post_pgtit">{params.pgname}</div>
        if( params.pgname === "MENU_01" )
        {
            var PG_post = <Post_01_1></Post_01_1>
        }
        
        return(
            <div className="post_area">
                 { PG_tit }
                 { PG_post }
                 
            </div>
        );
    }


export default Post_01;