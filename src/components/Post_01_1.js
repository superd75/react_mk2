import React from 'react';
import { useParams } from 'react-router-dom';
import Inc_Modal from './Inc_modal';


    function Post_01_1()
    {
        const params = useParams();
        return(
            <>
                <div className="post_pgbox g_txt_ce"> {params.pgname}</div>
                <div className="post_pgbox g_txt_ce"> 
                    <p>모달팝업</p>
                    <p><Inc_Modal></Inc_Modal></p>
                </div>
            </>
        );
    }


export default Post_01_1;