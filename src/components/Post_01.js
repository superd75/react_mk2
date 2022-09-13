
//import React from 'react';
import { useParams } from 'react-router-dom';


    const Post_01 = () => {
        const params = useParams()
        //console.log('check', params);
        //console.log('check', params.pgname);
        const PG_tit = <div className="post_pgtit">{params.pgname}</div>
        
        return(
            <div className="post_area">
                { PG_tit }
            </div>
        );
    }


export default Post_01;