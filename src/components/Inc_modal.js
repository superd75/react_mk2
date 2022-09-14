import React, { useState}  from 'react';

    function Inc_modal()
    {
        let [modal, setModal] = useState('false');
        function ChangeModal()
        {
            if(modal == true)
            {
                setModal(false);
                document.body.style.overflow = "visible";
            }
            else
            {
                setModal(true);
                document.body.style.overflow = "hidden";
            }
        }


        function Modal_layout()
        {
           return(
            <div className="modal_dimm">
                <div className="modal">
                    <div className="tit g_txt_le">
                        Modal Title
                        <div className="btn" onClick={()=>{
                            ChangeModal();
                        }}></div>
                     </div>
                    <div className="bdy g_txt_le">Modal Body</div>
                </div>
            </div>
           )     
        }
        
        
        return(
            <>
                <button type="button" className="g_btn g_txt_ce" onClick={ function(){
                    ChangeModal();
                } }>Open-Modal</button>
                {
                    modal === true ? <Modal_layout/> :null
                }
            </>
        );
    }

export default Inc_modal;