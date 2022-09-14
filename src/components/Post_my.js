//import React from 'react';
import {useParams } from 'react-router-dom';


         const data = {
             1:{ name:'권서은', nickname:'Kwon sea-eun' },
             2:{ name:'김미정', nickname:'Kim mi-sung'},
         }

        const Post_my = () =>
        {
            const params = useParams();
            const profile = data[params.no];
            console.log ('cehck', profile);
            console.log ('check2', profile.name);

            return(
                <div className="post_area">
                      {  profile ? (
                                        <div className="post_pgtit"> { profile.name }( { profile.nickname} )</div>
                                 ) : (
                                        <div className="post_pgtit">존재하지 않는 이름입니다.</div>
                                 )} 
                </div>
            );
        }

export default Post_my;